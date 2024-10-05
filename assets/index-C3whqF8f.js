(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Pl(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Ie={},Lr=[],jt=()=>{},Wm=()=>!1,Ro=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Cl=t=>t.startsWith("onUpdate:"),Ye=Object.assign,kl=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},zm=Object.prototype.hasOwnProperty,Ee=(t,e)=>zm.call(t,e),re=Array.isArray,Fr=t=>So(t)==="[object Map]",Bd=t=>So(t)==="[object Set]",ae=t=>typeof t=="function",Le=t=>typeof t=="string",jn=t=>typeof t=="symbol",Ce=t=>t!==null&&typeof t=="object",jd=t=>(Ce(t)||ae(t))&&ae(t.then)&&ae(t.catch),qd=Object.prototype.toString,So=t=>qd.call(t),Km=t=>So(t).slice(8,-1),Hd=t=>So(t)==="[object Object]",Dl=t=>Le(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Ds=Pl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Po=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Gm=/-(\w)/g,kt=Po(t=>t.replace(Gm,(e,n)=>n?n.toUpperCase():"")),Qm=/\B([A-Z])/g,qn=Po(t=>t.replace(Qm,"-$1").toLowerCase()),Co=Po(t=>t.charAt(0).toUpperCase()+t.slice(1)),Ea=Po(t=>t?`on${Co(t)}`:""),Ln=(t,e)=>!Object.is(t,e),Hi=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Wd=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},Ha=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let qu;const zd=()=>qu||(qu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ei(t){if(re(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Le(r)?Zm(r):ei(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(Le(t)||Ce(t))return t}const Jm=/;(?![^(]*\))/g,Xm=/:([^]+)/,Ym=/\/\*[^]*?\*\//g;function Zm(t){const e={};return t.replace(Ym,"").split(Jm).forEach(n=>{if(n){const r=n.split(Xm);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function ns(t){let e="";if(Le(t))e=t;else if(re(t))for(let n=0;n<t.length;n++){const r=ns(t[n]);r&&(e+=r+" ")}else if(Ce(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const e_="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",t_=Pl(e_);function Kd(t){return!!t||t===""}const Gd=t=>!!(t&&t.__v_isRef===!0),ti=t=>Le(t)?t:t==null?"":re(t)||Ce(t)&&(t.toString===qd||!ae(t.toString))?Gd(t)?ti(t.value):JSON.stringify(t,Qd,2):String(t),Qd=(t,e)=>Gd(e)?Qd(t,e.value):Fr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[Ta(r,i)+" =>"]=s,n),{})}:Bd(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Ta(n))}:jn(e)?Ta(e):Ce(e)&&!re(e)&&!Hd(e)?String(e):e,Ta=(t,e="")=>{var n;return jn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let mt;class Jd{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=mt,!e&&mt&&(this.index=(mt.scopes||(mt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=mt;try{return mt=this,e()}finally{mt=n}}}on(){mt=this}off(){mt=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Xd(t){return new Jd(t)}function Yd(){return mt}function n_(t,e=!1){mt&&mt.cleanups.push(t)}let Ae;const Ia=new WeakSet;class Zd{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,mt&&mt.active&&mt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ia.has(this)&&(Ia.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||tf(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Hu(this),nf(this);const e=Ae,n=Ot;Ae=this,Ot=!0;try{return this.fn()}finally{rf(this),Ae=e,Ot=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Nl(e);this.deps=this.depsTail=void 0,Hu(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ia.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Wa(this)&&this.run()}get dirty(){return Wa(this)}}let ef=0,Mr;function tf(t){t.flags|=8,t.next=Mr,Mr=t}function Vl(){ef++}function Ol(){if(--ef>0)return;let t;for(;Mr;){let e=Mr,n;for(;e;)e.flags&1||(e.flags&=-9),e=e.next;for(e=Mr,Mr=void 0;e;){if(n=e.next,e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function nf(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function rf(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),Nl(r),r_(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function Wa(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(sf(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function sf(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Bs))return;t.globalVersion=Bs;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!Wa(t)){t.flags&=-3;return}const n=Ae,r=Ot;Ae=t,Ot=!0;try{nf(t);const s=t.fn(t._value);(e.version===0||Ln(s,t._value))&&(t._value=s,e.version++)}catch(s){throw e.version++,s}finally{Ae=n,Ot=r,rf(t),t.flags&=-3}}function Nl(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r),!n.subs&&n.computed){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Nl(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function r_(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Ot=!0;const of=[];function Hn(){of.push(Ot),Ot=!1}function Wn(){const t=of.pop();Ot=t===void 0?!0:t}function Hu(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Ae;Ae=void 0;try{e()}finally{Ae=n}}}let Bs=0;class s_{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class xl{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.target=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!Ae||!Ot||Ae===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Ae)n=this.activeLink=new s_(Ae,this),Ae.deps?(n.prevDep=Ae.depsTail,Ae.depsTail.nextDep=n,Ae.depsTail=n):Ae.deps=Ae.depsTail=n,af(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Ae.depsTail,n.nextDep=void 0,Ae.depsTail.nextDep=n,Ae.depsTail=n,Ae.deps===n&&(Ae.deps=r)}return n}trigger(e){this.version++,Bs++,this.notify(e)}notify(e){Vl();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Ol()}}}function af(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)af(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const ro=new WeakMap,lr=Symbol(""),za=Symbol(""),js=Symbol("");function ct(t,e,n){if(Ot&&Ae){let r=ro.get(t);r||ro.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new xl),s.target=t,s.map=r,s.key=n),s.track()}}function un(t,e,n,r,s,i){const a=ro.get(t);if(!a){Bs++;return}const l=c=>{c&&c.trigger()};if(Vl(),e==="clear")a.forEach(l);else{const c=re(t),h=c&&Dl(n);if(c&&n==="length"){const f=Number(r);a.forEach((g,_)=>{(_==="length"||_===js||!jn(_)&&_>=f)&&l(g)})}else switch(n!==void 0&&l(a.get(n)),h&&l(a.get(js)),e){case"add":c?h&&l(a.get("length")):(l(a.get(lr)),Fr(t)&&l(a.get(za)));break;case"delete":c||(l(a.get(lr)),Fr(t)&&l(a.get(za)));break;case"set":Fr(t)&&l(a.get(lr));break}}Ol()}function i_(t,e){const n=ro.get(t);return n&&n.get(e)}function Cr(t){const e=_e(t);return e===t?e:(ct(e,"iterate",js),Ct(t)?e:e.map(ot))}function ko(t){return ct(t=_e(t),"iterate",js),t}const o_={__proto__:null,[Symbol.iterator](){return wa(this,Symbol.iterator,ot)},concat(...t){return Cr(this).concat(...t.map(e=>re(e)?Cr(e):e))},entries(){return wa(this,"entries",t=>(t[1]=ot(t[1]),t))},every(t,e){return en(this,"every",t,e,void 0,arguments)},filter(t,e){return en(this,"filter",t,e,n=>n.map(ot),arguments)},find(t,e){return en(this,"find",t,e,ot,arguments)},findIndex(t,e){return en(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return en(this,"findLast",t,e,ot,arguments)},findLastIndex(t,e){return en(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return en(this,"forEach",t,e,void 0,arguments)},includes(...t){return Aa(this,"includes",t)},indexOf(...t){return Aa(this,"indexOf",t)},join(t){return Cr(this).join(t)},lastIndexOf(...t){return Aa(this,"lastIndexOf",t)},map(t,e){return en(this,"map",t,e,void 0,arguments)},pop(){return ws(this,"pop")},push(...t){return ws(this,"push",t)},reduce(t,...e){return Wu(this,"reduce",t,e)},reduceRight(t,...e){return Wu(this,"reduceRight",t,e)},shift(){return ws(this,"shift")},some(t,e){return en(this,"some",t,e,void 0,arguments)},splice(...t){return ws(this,"splice",t)},toReversed(){return Cr(this).toReversed()},toSorted(t){return Cr(this).toSorted(t)},toSpliced(...t){return Cr(this).toSpliced(...t)},unshift(...t){return ws(this,"unshift",t)},values(){return wa(this,"values",ot)}};function wa(t,e,n){const r=ko(t),s=r[e]();return r!==t&&!Ct(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const a_=Array.prototype;function en(t,e,n,r,s,i){const a=ko(t),l=a!==t&&!Ct(t),c=a[e];if(c!==a_[e]){const g=c.apply(t,i);return l?ot(g):g}let h=n;a!==t&&(l?h=function(g,_){return n.call(this,ot(g),_,t)}:n.length>2&&(h=function(g,_){return n.call(this,g,_,t)}));const f=c.call(a,h,r);return l&&s?s(f):f}function Wu(t,e,n,r){const s=ko(t);let i=n;return s!==t&&(Ct(t)?n.length>3&&(i=function(a,l,c){return n.call(this,a,l,c,t)}):i=function(a,l,c){return n.call(this,a,ot(l),c,t)}),s[e](i,...r)}function Aa(t,e,n){const r=_e(t);ct(r,"iterate",js);const s=r[e](...n);return(s===-1||s===!1)&&Ul(n[0])?(n[0]=_e(n[0]),r[e](...n)):s}function ws(t,e,n=[]){Hn(),Vl();const r=_e(t)[e].apply(t,n);return Ol(),Wn(),r}const l_=Pl("__proto__,__v_isRef,__isVue"),lf=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(jn));function c_(t){jn(t)||(t=String(t));const e=_e(this);return ct(e,"has",t),e.hasOwnProperty(t)}class cf{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?I_:ff:i?df:hf).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const a=re(e);if(!s){let c;if(a&&(c=o_[n]))return c;if(n==="hasOwnProperty")return c_}const l=Reflect.get(e,n,Ne(e)?e:r);return(jn(n)?lf.has(n):l_(n))||(s||ct(e,"get",n),i)?l:Ne(l)?a&&Dl(n)?l:l.value:Ce(l)?s?pf(l):Vo(l):l}}class uf extends cf{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const c=dr(i);if(!Ct(r)&&!dr(r)&&(i=_e(i),r=_e(r)),!re(e)&&Ne(i)&&!Ne(r))return c?!1:(i.value=r,!0)}const a=re(e)&&Dl(n)?Number(n)<e.length:Ee(e,n),l=Reflect.set(e,n,r,Ne(e)?e:s);return e===_e(s)&&(a?Ln(r,i)&&un(e,"set",n,r):un(e,"add",n,r)),l}deleteProperty(e,n){const r=Ee(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&un(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!jn(n)||!lf.has(n))&&ct(e,"has",n),r}ownKeys(e){return ct(e,"iterate",re(e)?"length":lr),Reflect.ownKeys(e)}}class u_ extends cf{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const h_=new uf,d_=new u_,f_=new uf(!0);const Ml=t=>t,Do=t=>Reflect.getPrototypeOf(t);function Oi(t,e,n=!1,r=!1){t=t.__v_raw;const s=_e(t),i=_e(e);n||(Ln(e,i)&&ct(s,"get",e),ct(s,"get",i));const{has:a}=Do(s),l=r?Ml:n?Bl:ot;if(a.call(s,e))return l(t.get(e));if(a.call(s,i))return l(t.get(i));t!==s&&t.get(e)}function Ni(t,e=!1){const n=this.__v_raw,r=_e(n),s=_e(t);return e||(Ln(t,s)&&ct(r,"has",t),ct(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function xi(t,e=!1){return t=t.__v_raw,!e&&ct(_e(t),"iterate",lr),Reflect.get(t,"size",t)}function zu(t,e=!1){!e&&!Ct(t)&&!dr(t)&&(t=_e(t));const n=_e(this);return Do(n).has.call(n,t)||(n.add(t),un(n,"add",t,t)),this}function Ku(t,e,n=!1){!n&&!Ct(e)&&!dr(e)&&(e=_e(e));const r=_e(this),{has:s,get:i}=Do(r);let a=s.call(r,t);a||(t=_e(t),a=s.call(r,t));const l=i.call(r,t);return r.set(t,e),a?Ln(e,l)&&un(r,"set",t,e):un(r,"add",t,e),this}function Gu(t){const e=_e(this),{has:n,get:r}=Do(e);let s=n.call(e,t);s||(t=_e(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&un(e,"delete",t,void 0),i}function Qu(){const t=_e(this),e=t.size!==0,n=t.clear();return e&&un(t,"clear",void 0,void 0),n}function Mi(t,e){return function(r,s){const i=this,a=i.__v_raw,l=_e(a),c=e?Ml:t?Bl:ot;return!t&&ct(l,"iterate",lr),a.forEach((h,f)=>r.call(s,c(h),c(f),i))}}function Li(t,e,n){return function(...r){const s=this.__v_raw,i=_e(s),a=Fr(i),l=t==="entries"||t===Symbol.iterator&&a,c=t==="keys"&&a,h=s[t](...r),f=n?Ml:e?Bl:ot;return!e&&ct(i,"iterate",c?za:lr),{next(){const{value:g,done:_}=h.next();return _?{value:g,done:_}:{value:l?[f(g[0]),f(g[1])]:f(g),done:_}},[Symbol.iterator](){return this}}}}function In(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function p_(){const t={get(i){return Oi(this,i)},get size(){return xi(this)},has:Ni,add:zu,set:Ku,delete:Gu,clear:Qu,forEach:Mi(!1,!1)},e={get(i){return Oi(this,i,!1,!0)},get size(){return xi(this)},has:Ni,add(i){return zu.call(this,i,!0)},set(i,a){return Ku.call(this,i,a,!0)},delete:Gu,clear:Qu,forEach:Mi(!1,!0)},n={get(i){return Oi(this,i,!0)},get size(){return xi(this,!0)},has(i){return Ni.call(this,i,!0)},add:In("add"),set:In("set"),delete:In("delete"),clear:In("clear"),forEach:Mi(!0,!1)},r={get(i){return Oi(this,i,!0,!0)},get size(){return xi(this,!0)},has(i){return Ni.call(this,i,!0)},add:In("add"),set:In("set"),delete:In("delete"),clear:In("clear"),forEach:Mi(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Li(i,!1,!1),n[i]=Li(i,!0,!1),e[i]=Li(i,!1,!0),r[i]=Li(i,!0,!0)}),[t,n,e,r]}const[g_,m_,__,y_]=p_();function Ll(t,e){const n=e?t?y_:__:t?m_:g_;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Ee(n,s)&&s in r?n:r,s,i)}const v_={get:Ll(!1,!1)},E_={get:Ll(!1,!0)},T_={get:Ll(!0,!1)};const hf=new WeakMap,df=new WeakMap,ff=new WeakMap,I_=new WeakMap;function w_(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function A_(t){return t.__v_skip||!Object.isExtensible(t)?0:w_(Km(t))}function Vo(t){return dr(t)?t:Fl(t,!1,h_,v_,hf)}function b_(t){return Fl(t,!1,f_,E_,df)}function pf(t){return Fl(t,!0,d_,T_,ff)}function Fl(t,e,n,r,s){if(!Ce(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const a=A_(t);if(a===0)return t;const l=new Proxy(t,a===2?r:n);return s.set(t,l),l}function Dn(t){return dr(t)?Dn(t.__v_raw):!!(t&&t.__v_isReactive)}function dr(t){return!!(t&&t.__v_isReadonly)}function Ct(t){return!!(t&&t.__v_isShallow)}function Ul(t){return t?!!t.__v_raw:!1}function _e(t){const e=t&&t.__v_raw;return e?_e(e):t}function $l(t){return!Ee(t,"__v_skip")&&Object.isExtensible(t)&&Wd(t,"__v_skip",!0),t}const ot=t=>Ce(t)?Vo(t):t,Bl=t=>Ce(t)?pf(t):t;function Ne(t){return t?t.__v_isRef===!0:!1}function Se(t){return R_(t,!1)}function R_(t,e){return Ne(t)?t:new S_(t,e)}class S_{constructor(e,n){this.dep=new xl,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:_e(e),this._value=n?e:ot(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||Ct(e)||dr(e);e=r?e:_e(e),Ln(e,n)&&(this._rawValue=e,this._value=r?e:ot(e),this.dep.trigger())}}function P_(t){return Ne(t)?t.value:t}const C_={get:(t,e,n)=>e==="__v_raw"?t:P_(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Ne(s)&&!Ne(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function gf(t){return Dn(t)?t:new Proxy(t,C_)}function k_(t){const e=re(t)?new Array(t.length):{};for(const n in t)e[n]=V_(t,n);return e}class D_{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return i_(_e(this._object),this._key)}}function V_(t,e,n){const r=t[e];return Ne(r)?r:new D_(t,e,n)}class O_{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new xl(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Bs-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Ae!==this)return tf(this),!0}get value(){const e=this.dep.track();return sf(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function N_(t,e,n=!1){let r,s;return ae(t)?r=t:(r=t.get,s=t.set),new O_(r,s,n)}const Fi={},so=new WeakMap;let sr;function x_(t,e=!1,n=sr){if(n){let r=so.get(n);r||so.set(n,r=[]),r.push(t)}}function M_(t,e,n=Ie){const{immediate:r,deep:s,once:i,scheduler:a,augmentJob:l,call:c}=n,h=W=>s?W:Ct(W)||s===!1||s===0?nn(W,1):nn(W);let f,g,_,b,P=!1,D=!1;if(Ne(t)?(g=()=>t.value,P=Ct(t)):Dn(t)?(g=()=>h(t),P=!0):re(t)?(D=!0,P=t.some(W=>Dn(W)||Ct(W)),g=()=>t.map(W=>{if(Ne(W))return W.value;if(Dn(W))return h(W);if(ae(W))return c?c(W,2):W()})):ae(t)?e?g=c?()=>c(t,2):t:g=()=>{if(_){Hn();try{_()}finally{Wn()}}const W=sr;sr=f;try{return c?c(t,3,[b]):t(b)}finally{sr=W}}:g=jt,e&&s){const W=g,oe=s===!0?1/0:s;g=()=>nn(W(),oe)}const V=Yd(),j=()=>{f.stop(),V&&kl(V.effects,f)};if(i&&e){const W=e;e=(...oe)=>{W(...oe),j()}}let Q=D?new Array(t.length).fill(Fi):Fi;const J=W=>{if(!(!(f.flags&1)||!f.dirty&&!W))if(e){const oe=f.run();if(s||P||(D?oe.some((ye,w)=>Ln(ye,Q[w])):Ln(oe,Q))){_&&_();const ye=sr;sr=f;try{const w=[oe,Q===Fi?void 0:D&&Q[0]===Fi?[]:Q,b];c?c(e,3,w):e(...w),Q=oe}finally{sr=ye}}}else f.run()};return l&&l(J),f=new Zd(g),f.scheduler=a?()=>a(J,!1):J,b=W=>x_(W,!1,f),_=f.onStop=()=>{const W=so.get(f);if(W){if(c)c(W,4);else for(const oe of W)oe();so.delete(f)}},e?r?J(!0):Q=f.run():a?a(J.bind(null,!0),!0):f.run(),j.pause=f.pause.bind(f),j.resume=f.resume.bind(f),j.stop=j,j}function nn(t,e=1/0,n){if(e<=0||!Ce(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,Ne(t))nn(t.value,e,n);else if(re(t))for(let r=0;r<t.length;r++)nn(t[r],e,n);else if(Bd(t)||Fr(t))t.forEach(r=>{nn(r,e,n)});else if(Hd(t)){for(const r in t)nn(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&nn(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ni(t,e,n,r){try{return r?t(...r):t()}catch(s){Oo(s,e,n)}}function Kt(t,e,n,r){if(ae(t)){const s=ni(t,e,n,r);return s&&jd(s)&&s.catch(i=>{Oo(i,e,n)}),s}if(re(t)){const s=[];for(let i=0;i<t.length;i++)s.push(Kt(t[i],e,n,r));return s}}function Oo(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||Ie;if(e){let l=e.parent;const c=e.proxy,h=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const f=l.ec;if(f){for(let g=0;g<f.length;g++)if(f[g](t,c,h)===!1)return}l=l.parent}if(i){Hn(),ni(i,null,10,[t,c,h]),Wn();return}}L_(t,n,s,r,a)}function L_(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}let qs=!1,Ka=!1;const _t=[];let $t=0;const Ur=[];let bn=null,Dr=0;const mf=Promise.resolve();let jl=null;function _f(t){const e=jl||mf;return t?e.then(this?t.bind(this):t):e}function F_(t){let e=qs?$t+1:0,n=_t.length;for(;e<n;){const r=e+n>>>1,s=_t[r],i=Hs(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function ql(t){if(!(t.flags&1)){const e=Hs(t),n=_t[_t.length-1];!n||!(t.flags&2)&&e>=Hs(n)?_t.push(t):_t.splice(F_(e),0,t),t.flags|=1,yf()}}function yf(){!qs&&!Ka&&(Ka=!0,jl=mf.then(Ef))}function U_(t){re(t)?Ur.push(...t):bn&&t.id===-1?bn.splice(Dr+1,0,t):t.flags&1||(Ur.push(t),t.flags|=1),yf()}function Ju(t,e,n=qs?$t+1:0){for(;n<_t.length;n++){const r=_t[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;_t.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function vf(t){if(Ur.length){const e=[...new Set(Ur)].sort((n,r)=>Hs(n)-Hs(r));if(Ur.length=0,bn){bn.push(...e);return}for(bn=e,Dr=0;Dr<bn.length;Dr++){const n=bn[Dr];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}bn=null,Dr=0}}const Hs=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Ef(t){Ka=!1,qs=!0;try{for($t=0;$t<_t.length;$t++){const e=_t[$t];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),ni(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;$t<_t.length;$t++){const e=_t[$t];e&&(e.flags&=-2)}$t=0,_t.length=0,vf(),qs=!1,jl=null,(_t.length||Ur.length)&&Ef()}}let qe=null,Tf=null;function io(t){const e=qe;return qe=t,Tf=t&&t.type.__scopeId||null,e}function Hl(t,e=qe,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&oh(-1);const i=io(e);let a;try{a=t(...s)}finally{io(i),r._d&&oh(1)}return a};return r._n=!0,r._c=!0,r._d=!0,r}function Xu(t,e){if(qe===null)return t;const n=Fo(qe),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,a,l,c=Ie]=e[s];i&&(ae(i)&&(i={mounted:i,updated:i}),i.deep&&nn(a),r.push({dir:i,instance:n,value:a,oldValue:void 0,arg:l,modifiers:c}))}return t}function nr(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let a=0;a<s.length;a++){const l=s[a];i&&(l.oldValue=i[a].value);let c=l.dir[r];c&&(Hn(),Kt(c,n,8,[t.el,l,t,e]),Wn())}}const $_=Symbol("_vte"),B_=t=>t.__isTeleport;function Wl(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Wl(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function Rt(t,e){return ae(t)?Ye({name:t.name},e,{setup:t}):t}function If(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Ga(t,e,n,r,s=!1){if(re(t)){t.forEach((P,D)=>Ga(P,e&&(re(e)?e[D]:e),n,r,s));return}if($r(r)&&!s)return;const i=r.shapeFlag&4?Fo(r.component):r.el,a=s?null:i,{i:l,r:c}=t,h=e&&e.r,f=l.refs===Ie?l.refs={}:l.refs,g=l.setupState,_=_e(g),b=g===Ie?()=>!1:P=>Ee(_,P);if(h!=null&&h!==c&&(Le(h)?(f[h]=null,b(h)&&(g[h]=null)):Ne(h)&&(h.value=null)),ae(c))ni(c,l,12,[a,f]);else{const P=Le(c),D=Ne(c);if(P||D){const V=()=>{if(t.f){const j=P?b(c)?g[c]:f[c]:c.value;s?re(j)&&kl(j,i):re(j)?j.includes(i)||j.push(i):P?(f[c]=[i],b(c)&&(g[c]=f[c])):(c.value=[i],t.k&&(f[t.k]=c.value))}else P?(f[c]=a,b(c)&&(g[c]=a)):D&&(c.value=a,t.k&&(f[t.k]=a))};a?(V.id=-1,Tt(V,n)):V()}}}const $r=t=>!!t.type.__asyncLoader,wf=t=>t.type.__isKeepAlive;function j_(t,e){Af(t,"a",e)}function q_(t,e){Af(t,"da",e)}function Af(t,e,n=Qe){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(No(e,r,n),n){let s=n.parent;for(;s&&s.parent;)wf(s.parent.vnode)&&H_(r,e,n,s),s=s.parent}}function H_(t,e,n,r){const s=No(e,t,r,!0);Kl(()=>{kl(r[e],s)},n)}function No(t,e,n=Qe,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...a)=>{Hn();const l=ri(n),c=Kt(e,n,t,a);return l(),Wn(),c});return r?s.unshift(i):s.push(i),i}}const gn=t=>(e,n=Qe)=>{(!Lo||t==="sp")&&No(t,(...r)=>e(...r),n)},zl=gn("bm"),bf=gn("m"),W_=gn("bu"),z_=gn("u"),Rf=gn("bum"),Kl=gn("um"),K_=gn("sp"),G_=gn("rtg"),Q_=gn("rtc");function J_(t,e=Qe){No("ec",t,e)}const X_="components";function at(t,e){return Z_(X_,t,!0,e)||t}const Y_=Symbol.for("v-ndc");function Z_(t,e,n=!0,r=!1){const s=qe||Qe;if(s){const i=s.type;{const l=jy(i,!1);if(l&&(l===e||l===kt(e)||l===Co(kt(e))))return i}const a=Yu(s[t]||i[t],e)||Yu(s.appContext[t],e);return!a&&r?i:a}}function Yu(t,e){return t&&(t[e]||t[kt(e)]||t[Co(kt(e))])}function ey(t,e,n,r){let s;const i=n,a=re(t);if(a||Le(t)){const l=a&&Dn(t);let c=!1;l&&(c=!Ct(t),t=ko(t)),s=new Array(t.length);for(let h=0,f=t.length;h<f;h++)s[h]=e(c?ot(t[h]):t[h],h,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let l=0;l<t;l++)s[l]=e(l+1,l,void 0,i)}else if(Ce(t))if(t[Symbol.iterator])s=Array.from(t,(l,c)=>e(l,c,void 0,i));else{const l=Object.keys(t);s=new Array(l.length);for(let c=0,h=l.length;c<h;c++){const f=l[c];s[c]=e(t[f],f,c,i)}}else s=[];return s}function Wi(t,e,n={},r,s){if(qe.ce||qe.parent&&$r(qe.parent)&&qe.parent.ce)return e!=="default"&&(n.name=e),de(),wt(It,null,[We("slot",n,r&&r())],64);let i=t[e];i&&i._c&&(i._d=!1),de();const a=i&&Sf(i(n)),l=wt(It,{key:(n.key||a&&a.key||`_${e}`)+(!a&&r?"_fb":"")},a||(r?r():[]),a&&t._===1?64:-2);return i&&i._c&&(i._d=!0),l}function Sf(t){return t.some(e=>Jl(e)?!(e.type===Fn||e.type===It&&!Sf(e.children)):!0)?t:null}const Qa=t=>t?Kf(t)?Fo(t):Qa(t.parent):null,Vs=Ye(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Qa(t.parent),$root:t=>Qa(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Gl(t),$forceUpdate:t=>t.f||(t.f=()=>{ql(t.update)}),$nextTick:t=>t.n||(t.n=_f.bind(t.proxy)),$watch:t=>wy.bind(t)}),ba=(t,e)=>t!==Ie&&!t.__isScriptSetup&&Ee(t,e),ty={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:a,type:l,appContext:c}=t;let h;if(e[0]!=="$"){const b=a[e];if(b!==void 0)switch(b){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(ba(r,e))return a[e]=1,r[e];if(s!==Ie&&Ee(s,e))return a[e]=2,s[e];if((h=t.propsOptions[0])&&Ee(h,e))return a[e]=3,i[e];if(n!==Ie&&Ee(n,e))return a[e]=4,n[e];Ja&&(a[e]=0)}}const f=Vs[e];let g,_;if(f)return e==="$attrs"&&ct(t.attrs,"get",""),f(t);if((g=l.__cssModules)&&(g=g[e]))return g;if(n!==Ie&&Ee(n,e))return a[e]=4,n[e];if(_=c.config.globalProperties,Ee(_,e))return _[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return ba(s,e)?(s[e]=n,!0):r!==Ie&&Ee(r,e)?(r[e]=n,!0):Ee(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},a){let l;return!!n[a]||t!==Ie&&Ee(t,a)||ba(e,a)||(l=i[0])&&Ee(l,a)||Ee(r,a)||Ee(Vs,a)||Ee(s.config.globalProperties,a)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Ee(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Zu(t){return re(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Ja=!0;function ny(t){const e=Gl(t),n=t.proxy,r=t.ctx;Ja=!1,e.beforeCreate&&eh(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:a,watch:l,provide:c,inject:h,created:f,beforeMount:g,mounted:_,beforeUpdate:b,updated:P,activated:D,deactivated:V,beforeDestroy:j,beforeUnmount:Q,destroyed:J,unmounted:W,render:oe,renderTracked:ye,renderTriggered:w,errorCaptured:m,serverPrefetch:y,expose:T,inheritAttrs:A,components:R,directives:E,filters:dt}=e;if(h&&ry(h,r,null),a)for(const le in a){const fe=a[le];ae(fe)&&(r[le]=fe.bind(n))}if(s){const le=s.call(n,n);Ce(le)&&(t.data=Vo(le))}if(Ja=!0,i)for(const le in i){const fe=i[le],Dt=ae(fe)?fe.bind(n,n):ae(fe.get)?fe.get.bind(n,n):jt,Gn=!ae(fe)&&ae(fe.set)?fe.set.bind(n):jt,Jt=Uo({get:Dt,set:Gn});Object.defineProperty(r,le,{enumerable:!0,configurable:!0,get:()=>Jt.value,set:Fe=>Jt.value=Fe})}if(l)for(const le in l)Pf(l[le],r,n,le);if(c){const le=ae(c)?c.call(n):c;Reflect.ownKeys(le).forEach(fe=>{cy(fe,le[fe])})}f&&eh(f,t,"c");function Pe(le,fe){re(fe)?fe.forEach(Dt=>le(Dt.bind(n))):fe&&le(fe.bind(n))}if(Pe(zl,g),Pe(bf,_),Pe(W_,b),Pe(z_,P),Pe(j_,D),Pe(q_,V),Pe(J_,m),Pe(Q_,ye),Pe(G_,w),Pe(Rf,Q),Pe(Kl,W),Pe(K_,y),re(T))if(T.length){const le=t.exposed||(t.exposed={});T.forEach(fe=>{Object.defineProperty(le,fe,{get:()=>n[fe],set:Dt=>n[fe]=Dt})})}else t.exposed||(t.exposed={});oe&&t.render===jt&&(t.render=oe),A!=null&&(t.inheritAttrs=A),R&&(t.components=R),E&&(t.directives=E),y&&If(t)}function ry(t,e,n=jt){re(t)&&(t=Xa(t));for(const r in t){const s=t[r];let i;Ce(s)?"default"in s?i=Os(s.from||r,s.default,!0):i=Os(s.from||r):i=Os(s),Ne(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:a=>i.value=a}):e[r]=i}}function eh(t,e,n){Kt(re(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Pf(t,e,n,r){let s=r.includes(".")?jf(n,r):()=>n[r];if(Le(t)){const i=e[t];ae(i)&&Br(s,i)}else if(ae(t))Br(s,t.bind(n));else if(Ce(t))if(re(t))t.forEach(i=>Pf(i,e,n,r));else{const i=ae(t.handler)?t.handler.bind(n):e[t.handler];ae(i)&&Br(s,i,t)}}function Gl(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:a}}=t.appContext,l=i.get(e);let c;return l?c=l:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(h=>oo(c,h,a,!0)),oo(c,e,a)),Ce(e)&&i.set(e,c),c}function oo(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&oo(t,i,n,!0),s&&s.forEach(a=>oo(t,a,n,!0));for(const a in e)if(!(r&&a==="expose")){const l=sy[a]||n&&n[a];t[a]=l?l(t[a],e[a]):e[a]}return t}const sy={data:th,props:nh,emits:nh,methods:Rs,computed:Rs,beforeCreate:gt,created:gt,beforeMount:gt,mounted:gt,beforeUpdate:gt,updated:gt,beforeDestroy:gt,beforeUnmount:gt,destroyed:gt,unmounted:gt,activated:gt,deactivated:gt,errorCaptured:gt,serverPrefetch:gt,components:Rs,directives:Rs,watch:oy,provide:th,inject:iy};function th(t,e){return e?t?function(){return Ye(ae(t)?t.call(this,this):t,ae(e)?e.call(this,this):e)}:e:t}function iy(t,e){return Rs(Xa(t),Xa(e))}function Xa(t){if(re(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function gt(t,e){return t?[...new Set([].concat(t,e))]:e}function Rs(t,e){return t?Ye(Object.create(null),t,e):e}function nh(t,e){return t?re(t)&&re(e)?[...new Set([...t,...e])]:Ye(Object.create(null),Zu(t),Zu(e??{})):e}function oy(t,e){if(!t)return e;if(!e)return t;const n=Ye(Object.create(null),t);for(const r in e)n[r]=gt(t[r],e[r]);return n}function Cf(){return{app:null,config:{isNativeTag:Wm,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ay=0;function ly(t,e){return function(r,s=null){ae(r)||(r=Ye({},r)),s!=null&&!Ce(s)&&(s=null);const i=Cf(),a=new WeakSet,l=[];let c=!1;const h=i.app={_uid:ay++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Hy,get config(){return i.config},set config(f){},use(f,...g){return a.has(f)||(f&&ae(f.install)?(a.add(f),f.install(h,...g)):ae(f)&&(a.add(f),f(h,...g))),h},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),h},component(f,g){return g?(i.components[f]=g,h):i.components[f]},directive(f,g){return g?(i.directives[f]=g,h):i.directives[f]},mount(f,g,_){if(!c){const b=h._ceVNode||We(r,s);return b.appContext=i,_===!0?_="svg":_===!1&&(_=void 0),g&&e?e(b,f):t(b,f,_),c=!0,h._container=f,f.__vue_app__=h,Fo(b.component)}},onUnmount(f){l.push(f)},unmount(){c&&(Kt(l,h._instance,16),t(null,h._container),delete h._container.__vue_app__)},provide(f,g){return i.provides[f]=g,h},runWithContext(f){const g=cr;cr=h;try{return f()}finally{cr=g}}};return h}}let cr=null;function cy(t,e){if(Qe){let n=Qe.provides;const r=Qe.parent&&Qe.parent.provides;r===n&&(n=Qe.provides=Object.create(r)),n[t]=e}}function Os(t,e,n=!1){const r=Qe||qe;if(r||cr){const s=cr?cr._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&ae(e)?e.call(r&&r.proxy):e}}function uy(){return!!(Qe||qe||cr)}const kf={},Df=()=>Object.create(kf),Vf=t=>Object.getPrototypeOf(t)===kf;function hy(t,e,n,r=!1){const s={},i=Df();t.propsDefaults=Object.create(null),Of(t,e,s,i);for(const a in t.propsOptions[0])a in s||(s[a]=void 0);n?t.props=r?s:b_(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function dy(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:a}}=t,l=_e(s),[c]=t.propsOptions;let h=!1;if((r||a>0)&&!(a&16)){if(a&8){const f=t.vnode.dynamicProps;for(let g=0;g<f.length;g++){let _=f[g];if(xo(t.emitsOptions,_))continue;const b=e[_];if(c)if(Ee(i,_))b!==i[_]&&(i[_]=b,h=!0);else{const P=kt(_);s[P]=Ya(c,l,P,b,t,!1)}else b!==i[_]&&(i[_]=b,h=!0)}}}else{Of(t,e,s,i)&&(h=!0);let f;for(const g in l)(!e||!Ee(e,g)&&((f=qn(g))===g||!Ee(e,f)))&&(c?n&&(n[g]!==void 0||n[f]!==void 0)&&(s[g]=Ya(c,l,g,void 0,t,!0)):delete s[g]);if(i!==l)for(const g in i)(!e||!Ee(e,g))&&(delete i[g],h=!0)}h&&un(t.attrs,"set","")}function Of(t,e,n,r){const[s,i]=t.propsOptions;let a=!1,l;if(e)for(let c in e){if(Ds(c))continue;const h=e[c];let f;s&&Ee(s,f=kt(c))?!i||!i.includes(f)?n[f]=h:(l||(l={}))[f]=h:xo(t.emitsOptions,c)||(!(c in r)||h!==r[c])&&(r[c]=h,a=!0)}if(i){const c=_e(n),h=l||Ie;for(let f=0;f<i.length;f++){const g=i[f];n[g]=Ya(s,c,g,h[g],t,!Ee(h,g))}}return a}function Ya(t,e,n,r,s,i){const a=t[n];if(a!=null){const l=Ee(a,"default");if(l&&r===void 0){const c=a.default;if(a.type!==Function&&!a.skipFactory&&ae(c)){const{propsDefaults:h}=s;if(n in h)r=h[n];else{const f=ri(s);r=h[n]=c.call(null,e),f()}}else r=c;s.ce&&s.ce._setProp(n,r)}a[0]&&(i&&!l?r=!1:a[1]&&(r===""||r===qn(n))&&(r=!0))}return r}const fy=new WeakMap;function Nf(t,e,n=!1){const r=n?fy:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,a={},l=[];let c=!1;if(!ae(t)){const f=g=>{c=!0;const[_,b]=Nf(g,e,!0);Ye(a,_),b&&l.push(...b)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!i&&!c)return Ce(t)&&r.set(t,Lr),Lr;if(re(i))for(let f=0;f<i.length;f++){const g=kt(i[f]);rh(g)&&(a[g]=Ie)}else if(i)for(const f in i){const g=kt(f);if(rh(g)){const _=i[f],b=a[g]=re(_)||ae(_)?{type:_}:Ye({},_),P=b.type;let D=!1,V=!0;if(re(P))for(let j=0;j<P.length;++j){const Q=P[j],J=ae(Q)&&Q.name;if(J==="Boolean"){D=!0;break}else J==="String"&&(V=!1)}else D=ae(P)&&P.name==="Boolean";b[0]=D,b[1]=V,(D||Ee(b,"default"))&&l.push(g)}}const h=[a,l];return Ce(t)&&r.set(t,h),h}function rh(t){return t[0]!=="$"&&!Ds(t)}const xf=t=>t[0]==="_"||t==="$stable",Ql=t=>re(t)?t.map(Bt):[Bt(t)],py=(t,e,n)=>{if(e._n)return e;const r=Hl((...s)=>Ql(e(...s)),n);return r._c=!1,r},Mf=(t,e,n)=>{const r=t._ctx;for(const s in t){if(xf(s))continue;const i=t[s];if(ae(i))e[s]=py(s,i,r);else if(i!=null){const a=Ql(i);e[s]=()=>a}}},Lf=(t,e)=>{const n=Ql(e);t.slots.default=()=>n},Ff=(t,e,n)=>{for(const r in e)(n||r!=="_")&&(t[r]=e[r])},gy=(t,e,n)=>{const r=t.slots=Df();if(t.vnode.shapeFlag&32){const s=e._;s?(Ff(r,e,n),n&&Wd(r,"_",s,!0)):Mf(e,r)}else e&&Lf(t,e)},my=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,a=Ie;if(r.shapeFlag&32){const l=e._;l?n&&l===1?i=!1:Ff(s,e,n):(i=!e.$stable,Mf(e,s)),a=e}else e&&(Lf(t,e),a={default:1});if(i)for(const l in s)!xf(l)&&a[l]==null&&delete s[l]},Tt=ky;function _y(t){return yy(t)}function yy(t,e){const n=zd();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:a,createText:l,createComment:c,setText:h,setElementText:f,parentNode:g,nextSibling:_,setScopeId:b=jt,insertStaticContent:P}=t,D=(v,I,k,L=null,N=null,M=null,q=void 0,$=null,U=!!I.dynamicChildren)=>{if(v===I)return;v&&!As(v,I)&&(L=Xt(v),Fe(v,N,M,!0),v=null),I.patchFlag===-2&&(U=!1,I.dynamicChildren=null);const{type:F,ref:Z,shapeFlag:H}=I;switch(F){case Mo:V(v,I,k,L);break;case Fn:j(v,I,k,L);break;case Pa:v==null&&Q(I,k,L,q);break;case It:R(v,I,k,L,N,M,q,$,U);break;default:H&1?oe(v,I,k,L,N,M,q,$,U):H&6?E(v,I,k,L,N,M,q,$,U):(H&64||H&128)&&F.process(v,I,k,L,N,M,q,$,U,Ft)}Z!=null&&N&&Ga(Z,v&&v.ref,M,I||v,!I)},V=(v,I,k,L)=>{if(v==null)r(I.el=l(I.children),k,L);else{const N=I.el=v.el;I.children!==v.children&&h(N,I.children)}},j=(v,I,k,L)=>{v==null?r(I.el=c(I.children||""),k,L):I.el=v.el},Q=(v,I,k,L)=>{[v.el,v.anchor]=P(v.children,I,k,L,v.el,v.anchor)},J=({el:v,anchor:I},k,L)=>{let N;for(;v&&v!==I;)N=_(v),r(v,k,L),v=N;r(I,k,L)},W=({el:v,anchor:I})=>{let k;for(;v&&v!==I;)k=_(v),s(v),v=k;s(I)},oe=(v,I,k,L,N,M,q,$,U)=>{I.type==="svg"?q="svg":I.type==="math"&&(q="mathml"),v==null?ye(I,k,L,N,M,q,$,U):y(v,I,N,M,q,$,U)},ye=(v,I,k,L,N,M,q,$)=>{let U,F;const{props:Z,shapeFlag:H,transition:X,dirs:K}=v;if(U=v.el=a(v.type,M,Z&&Z.is,Z),H&8?f(U,v.children):H&16&&m(v.children,U,null,L,N,Ra(v,M),q,$),K&&nr(v,null,L,"created"),w(U,v,v.scopeId,q,L),Z){for(const ve in Z)ve!=="value"&&!Ds(ve)&&i(U,ve,null,Z[ve],M,L);"value"in Z&&i(U,"value",null,Z.value,M),(F=Z.onVnodeBeforeMount)&&Ut(F,L,v)}K&&nr(v,null,L,"beforeMount");const ee=vy(N,X);ee&&X.beforeEnter(U),r(U,I,k),((F=Z&&Z.onVnodeMounted)||ee||K)&&Tt(()=>{F&&Ut(F,L,v),ee&&X.enter(U),K&&nr(v,null,L,"mounted")},N)},w=(v,I,k,L,N)=>{if(k&&b(v,k),L)for(let M=0;M<L.length;M++)b(v,L[M]);if(N){let M=N.subTree;if(I===M||Hf(M.type)&&(M.ssContent===I||M.ssFallback===I)){const q=N.vnode;w(v,q,q.scopeId,q.slotScopeIds,N.parent)}}},m=(v,I,k,L,N,M,q,$,U=0)=>{for(let F=U;F<v.length;F++){const Z=v[F]=$?Rn(v[F]):Bt(v[F]);D(null,Z,I,k,L,N,M,q,$)}},y=(v,I,k,L,N,M,q)=>{const $=I.el=v.el;let{patchFlag:U,dynamicChildren:F,dirs:Z}=I;U|=v.patchFlag&16;const H=v.props||Ie,X=I.props||Ie;let K;if(k&&rr(k,!1),(K=X.onVnodeBeforeUpdate)&&Ut(K,k,I,v),Z&&nr(I,v,k,"beforeUpdate"),k&&rr(k,!0),(H.innerHTML&&X.innerHTML==null||H.textContent&&X.textContent==null)&&f($,""),F?T(v.dynamicChildren,F,$,k,L,Ra(I,N),M):q||fe(v,I,$,null,k,L,Ra(I,N),M,!1),U>0){if(U&16)A($,H,X,k,N);else if(U&2&&H.class!==X.class&&i($,"class",null,X.class,N),U&4&&i($,"style",H.style,X.style,N),U&8){const ee=I.dynamicProps;for(let ve=0;ve<ee.length;ve++){const pe=ee[ve],et=H[pe],Be=X[pe];(Be!==et||pe==="value")&&i($,pe,et,Be,N,k)}}U&1&&v.children!==I.children&&f($,I.children)}else!q&&F==null&&A($,H,X,k,N);((K=X.onVnodeUpdated)||Z)&&Tt(()=>{K&&Ut(K,k,I,v),Z&&nr(I,v,k,"updated")},L)},T=(v,I,k,L,N,M,q)=>{for(let $=0;$<I.length;$++){const U=v[$],F=I[$],Z=U.el&&(U.type===It||!As(U,F)||U.shapeFlag&70)?g(U.el):k;D(U,F,Z,null,L,N,M,q,!0)}},A=(v,I,k,L,N)=>{if(I!==k){if(I!==Ie)for(const M in I)!Ds(M)&&!(M in k)&&i(v,M,I[M],null,N,L);for(const M in k){if(Ds(M))continue;const q=k[M],$=I[M];q!==$&&M!=="value"&&i(v,M,$,q,N,L)}"value"in k&&i(v,"value",I.value,k.value,N)}},R=(v,I,k,L,N,M,q,$,U)=>{const F=I.el=v?v.el:l(""),Z=I.anchor=v?v.anchor:l("");let{patchFlag:H,dynamicChildren:X,slotScopeIds:K}=I;K&&($=$?$.concat(K):K),v==null?(r(F,k,L),r(Z,k,L),m(I.children||[],k,Z,N,M,q,$,U)):H>0&&H&64&&X&&v.dynamicChildren?(T(v.dynamicChildren,X,k,N,M,q,$),(I.key!=null||N&&I===N.subTree)&&Uf(v,I,!0)):fe(v,I,k,Z,N,M,q,$,U)},E=(v,I,k,L,N,M,q,$,U)=>{I.slotScopeIds=$,v==null?I.shapeFlag&512?N.ctx.activate(I,k,L,q,U):dt(I,k,L,N,M,q,U):Lt(v,I,U)},dt=(v,I,k,L,N,M,q)=>{const $=v.component=Ly(v,L,N);if(wf(v)&&($.ctx.renderer=Ft),Fy($,!1,q),$.asyncDep){if(N&&N.registerDep($,Pe,q),!v.el){const U=$.subTree=We(Fn);j(null,U,I,k)}}else Pe($,v,I,k,N,M,q)},Lt=(v,I,k)=>{const L=I.component=v.component;if(Py(v,I,k))if(L.asyncDep&&!L.asyncResolved){le(L,I,k);return}else L.next=I,L.update();else I.el=v.el,L.vnode=I},Pe=(v,I,k,L,N,M,q)=>{const $=()=>{if(v.isMounted){let{next:H,bu:X,u:K,parent:ee,vnode:ve}=v;{const tt=$f(v);if(tt){H&&(H.el=ve.el,le(v,H,q)),tt.asyncDep.then(()=>{v.isUnmounted||$()});return}}let pe=H,et;rr(v,!1),H?(H.el=ve.el,le(v,H,q)):H=ve,X&&Hi(X),(et=H.props&&H.props.onVnodeBeforeUpdate)&&Ut(et,ee,H,ve),rr(v,!0);const Be=Sa(v),ze=v.subTree;v.subTree=Be,D(ze,Be,g(ze.el),Xt(ze),v,N,M),H.el=Be.el,pe===null&&Cy(v,Be.el),K&&Tt(K,N),(et=H.props&&H.props.onVnodeUpdated)&&Tt(()=>Ut(et,ee,H,ve),N)}else{let H;const{el:X,props:K}=I,{bm:ee,m:ve,parent:pe,root:et,type:Be}=v,ze=$r(I);if(rr(v,!1),ee&&Hi(ee),!ze&&(H=K&&K.onVnodeBeforeMount)&&Ut(H,pe,I),rr(v,!0),X&&Ir){const tt=()=>{v.subTree=Sa(v),Ir(X,v.subTree,v,N,null)};ze&&Be.__asyncHydrate?Be.__asyncHydrate(X,v,tt):tt()}else{et.ce&&et.ce._injectChildStyle(Be);const tt=v.subTree=Sa(v);D(null,tt,k,L,v,N,M),I.el=tt.el}if(ve&&Tt(ve,N),!ze&&(H=K&&K.onVnodeMounted)){const tt=I;Tt(()=>Ut(H,pe,tt),N)}(I.shapeFlag&256||pe&&$r(pe.vnode)&&pe.vnode.shapeFlag&256)&&v.a&&Tt(v.a,N),v.isMounted=!0,I=k=L=null}};v.scope.on();const U=v.effect=new Zd($);v.scope.off();const F=v.update=U.run.bind(U),Z=v.job=U.runIfDirty.bind(U);Z.i=v,Z.id=v.uid,U.scheduler=()=>ql(Z),rr(v,!0),F()},le=(v,I,k)=>{I.component=v;const L=v.vnode.props;v.vnode=I,v.next=null,dy(v,I.props,L,k),my(v,I.children,k),Hn(),Ju(v),Wn()},fe=(v,I,k,L,N,M,q,$,U=!1)=>{const F=v&&v.children,Z=v?v.shapeFlag:0,H=I.children,{patchFlag:X,shapeFlag:K}=I;if(X>0){if(X&128){Gn(F,H,k,L,N,M,q,$,U);return}else if(X&256){Dt(F,H,k,L,N,M,q,$,U);return}}K&8?(Z&16&&Jn(F,N,M),H!==F&&f(k,H)):Z&16?K&16?Gn(F,H,k,L,N,M,q,$,U):Jn(F,N,M,!0):(Z&8&&f(k,""),K&16&&m(H,k,L,N,M,q,$,U))},Dt=(v,I,k,L,N,M,q,$,U)=>{v=v||Lr,I=I||Lr;const F=v.length,Z=I.length,H=Math.min(F,Z);let X;for(X=0;X<H;X++){const K=I[X]=U?Rn(I[X]):Bt(I[X]);D(v[X],K,k,null,N,M,q,$,U)}F>Z?Jn(v,N,M,!0,!1,H):m(I,k,L,N,M,q,$,U,H)},Gn=(v,I,k,L,N,M,q,$,U)=>{let F=0;const Z=I.length;let H=v.length-1,X=Z-1;for(;F<=H&&F<=X;){const K=v[F],ee=I[F]=U?Rn(I[F]):Bt(I[F]);if(As(K,ee))D(K,ee,k,null,N,M,q,$,U);else break;F++}for(;F<=H&&F<=X;){const K=v[H],ee=I[X]=U?Rn(I[X]):Bt(I[X]);if(As(K,ee))D(K,ee,k,null,N,M,q,$,U);else break;H--,X--}if(F>H){if(F<=X){const K=X+1,ee=K<Z?I[K].el:L;for(;F<=X;)D(null,I[F]=U?Rn(I[F]):Bt(I[F]),k,ee,N,M,q,$,U),F++}}else if(F>X)for(;F<=H;)Fe(v[F],N,M,!0),F++;else{const K=F,ee=F,ve=new Map;for(F=ee;F<=X;F++){const ft=I[F]=U?Rn(I[F]):Bt(I[F]);ft.key!=null&&ve.set(ft.key,F)}let pe,et=0;const Be=X-ee+1;let ze=!1,tt=0;const yn=new Array(Be);for(F=0;F<Be;F++)yn[F]=0;for(F=K;F<=H;F++){const ft=v[F];if(et>=Be){Fe(ft,N,M,!0);continue}let Pt;if(ft.key!=null)Pt=ve.get(ft.key);else for(pe=ee;pe<=X;pe++)if(yn[pe-ee]===0&&As(ft,I[pe])){Pt=pe;break}Pt===void 0?Fe(ft,N,M,!0):(yn[Pt-ee]=F+1,Pt>=tt?tt=Pt:ze=!0,D(ft,I[Pt],k,null,N,M,q,$,U),et++)}const wr=ze?Ey(yn):Lr;for(pe=wr.length-1,F=Be-1;F>=0;F--){const ft=ee+F,Pt=I[ft],Ar=ft+1<Z?I[ft+1].el:L;yn[F]===0?D(null,Pt,k,Ar,N,M,q,$,U):ze&&(pe<0||F!==wr[pe]?Jt(Pt,k,Ar,2):pe--)}}},Jt=(v,I,k,L,N=null)=>{const{el:M,type:q,transition:$,children:U,shapeFlag:F}=v;if(F&6){Jt(v.component.subTree,I,k,L);return}if(F&128){v.suspense.move(I,k,L);return}if(F&64){q.move(v,I,k,Ft);return}if(q===It){r(M,I,k);for(let H=0;H<U.length;H++)Jt(U[H],I,k,L);r(v.anchor,I,k);return}if(q===Pa){J(v,I,k);return}if(L!==2&&F&1&&$)if(L===0)$.beforeEnter(M),r(M,I,k),Tt(()=>$.enter(M),N);else{const{leave:H,delayLeave:X,afterLeave:K}=$,ee=()=>r(M,I,k),ve=()=>{H(M,()=>{ee(),K&&K()})};X?X(M,ee,ve):ve()}else r(M,I,k)},Fe=(v,I,k,L=!1,N=!1)=>{const{type:M,props:q,ref:$,children:U,dynamicChildren:F,shapeFlag:Z,patchFlag:H,dirs:X,cacheIndex:K}=v;if(H===-2&&(N=!1),$!=null&&Ga($,null,k,v,!0),K!=null&&(I.renderCache[K]=void 0),Z&256){I.ctx.deactivate(v);return}const ee=Z&1&&X,ve=!$r(v);let pe;if(ve&&(pe=q&&q.onVnodeBeforeUnmount)&&Ut(pe,I,v),Z&6)Qn(v.component,k,L);else{if(Z&128){v.suspense.unmount(k,L);return}ee&&nr(v,null,I,"beforeUnmount"),Z&64?v.type.remove(v,I,k,Ft,L):F&&!F.hasOnce&&(M!==It||H>0&&H&64)?Jn(F,I,k,!1,!0):(M===It&&H&384||!N&&Z&16)&&Jn(U,I,k),L&&Ue(v)}(ve&&(pe=q&&q.onVnodeUnmounted)||ee)&&Tt(()=>{pe&&Ut(pe,I,v),ee&&nr(v,null,I,"unmounted")},k)},Ue=v=>{const{type:I,el:k,anchor:L,transition:N}=v;if(I===It){ia(k,L);return}if(I===Pa){W(v);return}const M=()=>{s(k),N&&!N.persisted&&N.afterLeave&&N.afterLeave()};if(v.shapeFlag&1&&N&&!N.persisted){const{leave:q,delayLeave:$}=N,U=()=>q(k,M);$?$(v.el,M,U):U()}else M()},ia=(v,I)=>{let k;for(;v!==I;)k=_(v),s(v),v=k;s(I)},Qn=(v,I,k)=>{const{bum:L,scope:N,job:M,subTree:q,um:$,m:U,a:F}=v;sh(U),sh(F),L&&Hi(L),N.stop(),M&&(M.flags|=8,Fe(q,v,I,k)),$&&Tt($,I),Tt(()=>{v.isUnmounted=!0},I),I&&I.pendingBranch&&!I.isUnmounted&&v.asyncDep&&!v.asyncResolved&&v.suspenseId===I.pendingId&&(I.deps--,I.deps===0&&I.resolve())},Jn=(v,I,k,L=!1,N=!1,M=0)=>{for(let q=M;q<v.length;q++)Fe(v[q],I,k,L,N)},Xt=v=>{if(v.shapeFlag&6)return Xt(v.component.subTree);if(v.shapeFlag&128)return v.suspense.next();const I=_(v.anchor||v.el),k=I&&I[$_];return k?_(k):I};let cs=!1;const yi=(v,I,k)=>{v==null?I._vnode&&Fe(I._vnode,null,null,!0):D(I._vnode||null,v,I,null,null,null,k),I._vnode=v,cs||(cs=!0,Ju(),vf(),cs=!1)},Ft={p:D,um:Fe,m:Jt,r:Ue,mt:dt,mc:m,pc:fe,pbc:T,n:Xt,o:t};let Xn,Ir;return{render:yi,hydrate:Xn,createApp:ly(yi,Xn)}}function Ra({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function rr({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function vy(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Uf(t,e,n=!1){const r=t.children,s=e.children;if(re(r)&&re(s))for(let i=0;i<r.length;i++){const a=r[i];let l=s[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[i]=Rn(s[i]),l.el=a.el),!n&&l.patchFlag!==-2&&Uf(a,l)),l.type===Mo&&(l.el=a.el)}}function Ey(t){const e=t.slice(),n=[0];let r,s,i,a,l;const c=t.length;for(r=0;r<c;r++){const h=t[r];if(h!==0){if(s=n[n.length-1],t[s]<h){e[r]=s,n.push(r);continue}for(i=0,a=n.length-1;i<a;)l=i+a>>1,t[n[l]]<h?i=l+1:a=l;h<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,a=n[i-1];i-- >0;)n[i]=a,a=e[a];return n}function $f(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:$f(e)}function sh(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const Ty=Symbol.for("v-scx"),Iy=()=>Os(Ty);function Br(t,e,n){return Bf(t,e,n)}function Bf(t,e,n=Ie){const{immediate:r,deep:s,flush:i,once:a}=n,l=Ye({},n);let c;if(Lo)if(i==="sync"){const _=Iy();c=_.__watcherHandles||(_.__watcherHandles=[])}else if(!e||r)l.once=!0;else{const _=()=>{};return _.stop=jt,_.resume=jt,_.pause=jt,_}const h=Qe;l.call=(_,b,P)=>Kt(_,h,b,P);let f=!1;i==="post"?l.scheduler=_=>{Tt(_,h&&h.suspense)}:i!=="sync"&&(f=!0,l.scheduler=(_,b)=>{b?_():ql(_)}),l.augmentJob=_=>{e&&(_.flags|=4),f&&(_.flags|=2,h&&(_.id=h.uid,_.i=h))};const g=M_(t,e,l);return c&&c.push(g),g}function wy(t,e,n){const r=this.proxy,s=Le(t)?t.includes(".")?jf(r,t):()=>r[t]:t.bind(r,r);let i;ae(e)?i=e:(i=e.handler,n=e);const a=ri(this),l=Bf(s,i.bind(r),n);return a(),l}function jf(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const Ay=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${kt(e)}Modifiers`]||t[`${qn(e)}Modifiers`];function by(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Ie;let s=n;const i=e.startsWith("update:"),a=i&&Ay(r,e.slice(7));a&&(a.trim&&(s=n.map(f=>Le(f)?f.trim():f)),a.number&&(s=n.map(Ha)));let l,c=r[l=Ea(e)]||r[l=Ea(kt(e))];!c&&i&&(c=r[l=Ea(qn(e))]),c&&Kt(c,t,6,s);const h=r[l+"Once"];if(h){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,Kt(h,t,6,s)}}function qf(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let a={},l=!1;if(!ae(t)){const c=h=>{const f=qf(h,e,!0);f&&(l=!0,Ye(a,f))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!l?(Ce(t)&&r.set(t,null),null):(re(i)?i.forEach(c=>a[c]=null):Ye(a,i),Ce(t)&&r.set(t,a),a)}function xo(t,e){return!t||!Ro(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ee(t,e[0].toLowerCase()+e.slice(1))||Ee(t,qn(e))||Ee(t,e))}function Sa(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:a,attrs:l,emit:c,render:h,renderCache:f,props:g,data:_,setupState:b,ctx:P,inheritAttrs:D}=t,V=io(t);let j,Q;try{if(n.shapeFlag&4){const W=s||r,oe=W;j=Bt(h.call(oe,W,f,g,b,_,P)),Q=l}else{const W=e;j=Bt(W.length>1?W(g,{attrs:l,slots:a,emit:c}):W(g,null)),Q=e.props?l:Ry(l)}}catch(W){Ns.length=0,Oo(W,t,1),j=We(Fn)}let J=j;if(Q&&D!==!1){const W=Object.keys(Q),{shapeFlag:oe}=J;W.length&&oe&7&&(i&&W.some(Cl)&&(Q=Sy(Q,i)),J=zr(J,Q,!1,!0))}return n.dirs&&(J=zr(J,null,!1,!0),J.dirs=J.dirs?J.dirs.concat(n.dirs):n.dirs),n.transition&&Wl(J,n.transition),j=J,io(V),j}const Ry=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ro(n))&&((e||(e={}))[n]=t[n]);return e},Sy=(t,e)=>{const n={};for(const r in t)(!Cl(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Py(t,e,n){const{props:r,children:s,component:i}=t,{props:a,children:l,patchFlag:c}=e,h=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?ih(r,a,h):!!a;if(c&8){const f=e.dynamicProps;for(let g=0;g<f.length;g++){const _=f[g];if(a[_]!==r[_]&&!xo(h,_))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:r===a?!1:r?a?ih(r,a,h):!0:!!a;return!1}function ih(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!xo(n,i))return!0}return!1}function Cy({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const Hf=t=>t.__isSuspense;function ky(t,e){e&&e.pendingBranch?re(t)?e.effects.push(...t):e.effects.push(t):U_(t)}const It=Symbol.for("v-fgt"),Mo=Symbol.for("v-txt"),Fn=Symbol.for("v-cmt"),Pa=Symbol.for("v-stc"),Ns=[];let At=null;function de(t=!1){Ns.push(At=t?null:[])}function Dy(){Ns.pop(),At=Ns[Ns.length-1]||null}let Ws=1;function oh(t){Ws+=t,t<0&&At&&(At.hasOnce=!0)}function Wf(t){return t.dynamicChildren=Ws>0?At||Lr:null,Dy(),Ws>0&&At&&At.push(t),t}function Oe(t,e,n,r,s,i){return Wf(He(t,e,n,r,s,i,!0))}function wt(t,e,n,r,s){return Wf(We(t,e,n,r,s,!0))}function Jl(t){return t?t.__v_isVNode===!0:!1}function As(t,e){return t.type===e.type&&t.key===e.key}const zf=({key:t})=>t??null,zi=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Le(t)||Ne(t)||ae(t)?{i:qe,r:t,k:e,f:!!n}:t:null);function He(t,e=null,n=null,r=0,s=null,i=t===It?0:1,a=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&zf(e),ref:e&&zi(e),scopeId:Tf,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:qe};return l?(Xl(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=Le(n)?8:16),Ws>0&&!a&&At&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&At.push(c),c}const We=Vy;function Vy(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Y_)&&(t=Fn),Jl(t)){const l=zr(t,e,!0);return n&&Xl(l,n),Ws>0&&!i&&At&&(l.shapeFlag&6?At[At.indexOf(t)]=l:At.push(l)),l.patchFlag=-2,l}if(qy(t)&&(t=t.__vccOpts),e){e=Oy(e);let{class:l,style:c}=e;l&&!Le(l)&&(e.class=ns(l)),Ce(c)&&(Ul(c)&&!re(c)&&(c=Ye({},c)),e.style=ei(c))}const a=Le(t)?1:Hf(t)?128:B_(t)?64:Ce(t)?4:ae(t)?2:0;return He(t,e,n,r,s,a,i,!0)}function Oy(t){return t?Ul(t)||Vf(t)?Ye({},t):t:null}function zr(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:a,children:l,transition:c}=t,h=e?Ny(s||{},e):s,f={__v_isVNode:!0,__v_skip:!0,type:t.type,props:h,key:h&&zf(h),ref:e&&e.ref?n&&i?re(i)?i.concat(zi(e)):[i,zi(e)]:zi(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==It?a===-1?16:a|16:a,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&zr(t.ssContent),ssFallback:t.ssFallback&&zr(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&r&&Wl(f,c.clone(f)),f}function ao(t=" ",e=0){return We(Mo,null,t,e)}function sn(t="",e=!1){return e?(de(),wt(Fn,null,t)):We(Fn,null,t)}function Bt(t){return t==null||typeof t=="boolean"?We(Fn):re(t)?We(It,null,t.slice()):Jl(t)?Rn(t):We(Mo,null,String(t))}function Rn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:zr(t)}function Xl(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(re(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Xl(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!Vf(e)?e._ctx=qe:s===3&&qe&&(qe.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ae(e)?(e={default:e,_ctx:qe},n=32):(e=String(e),r&64?(n=16,e=[ao(e)]):n=8);t.children=e,t.shapeFlag|=n}function Ny(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=ns([e.class,r.class]));else if(s==="style")e.style=ei([e.style,r.style]);else if(Ro(s)){const i=e[s],a=r[s];a&&i!==a&&!(re(i)&&i.includes(a))&&(e[s]=i?[].concat(i,a):a)}else s!==""&&(e[s]=r[s])}return e}function Ut(t,e,n,r=null){Kt(t,e,7,[n,r])}const xy=Cf();let My=0;function Ly(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||xy,i={uid:My++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Jd(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Nf(r,s),emitsOptions:qf(r,s),emit:null,emitted:null,propsDefaults:Ie,inheritAttrs:r.inheritAttrs,ctx:Ie,data:Ie,props:Ie,attrs:Ie,slots:Ie,refs:Ie,setupState:Ie,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=by.bind(null,i),t.ce&&t.ce(i),i}let Qe=null,lo,Za;{const t=zd(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(a=>a(i)):s[0](i)}};lo=e("__VUE_INSTANCE_SETTERS__",n=>Qe=n),Za=e("__VUE_SSR_SETTERS__",n=>Lo=n)}const ri=t=>{const e=Qe;return lo(t),t.scope.on(),()=>{t.scope.off(),lo(e)}},ah=()=>{Qe&&Qe.scope.off(),lo(null)};function Kf(t){return t.vnode.shapeFlag&4}let Lo=!1;function Fy(t,e=!1,n=!1){e&&Za(e);const{props:r,children:s}=t.vnode,i=Kf(t);hy(t,r,i,e),gy(t,s,n);const a=i?Uy(t,e):void 0;return e&&Za(!1),a}function Uy(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,ty);const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?By(t):null,i=ri(t);Hn();const a=ni(r,t,0,[t.props,s]);if(Wn(),i(),jd(a)){if($r(t)||If(t),a.then(ah,ah),e)return a.then(l=>{lh(t,l,e)}).catch(l=>{Oo(l,t,0)});t.asyncDep=a}else lh(t,a,e)}else Gf(t,e)}function lh(t,e,n){ae(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ce(e)&&(t.setupState=gf(e)),Gf(t,n)}let ch;function Gf(t,e,n){const r=t.type;if(!t.render){if(!e&&ch&&!r.render){const s=r.template||Gl(t).template;if(s){const{isCustomElement:i,compilerOptions:a}=t.appContext.config,{delimiters:l,compilerOptions:c}=r,h=Ye(Ye({isCustomElement:i,delimiters:l},a),c);r.render=ch(s,h)}}t.render=r.render||jt}{const s=ri(t);Hn();try{ny(t)}finally{Wn(),s()}}}const $y={get(t,e){return ct(t,"get",""),t[e]}};function By(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,$y),slots:t.slots,emit:t.emit,expose:e}}function Fo(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(gf($l(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Vs)return Vs[n](t)},has(e,n){return n in e||n in Vs}})):t.proxy}function jy(t,e=!0){return ae(t)?t.displayName||t.name:t.name||e&&t.__name}function qy(t){return ae(t)&&"__vccOpts"in t}const Uo=(t,e)=>N_(t,e,Lo),Hy="3.5.10";/**
* @vue/runtime-dom v3.5.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let el;const uh=typeof window<"u"&&window.trustedTypes;if(uh)try{el=uh.createPolicy("vue",{createHTML:t=>t})}catch{}const Qf=el?t=>el.createHTML(t):t=>t,Wy="http://www.w3.org/2000/svg",zy="http://www.w3.org/1998/Math/MathML",tn=typeof document<"u"?document:null,hh=tn&&tn.createElement("template"),Ky={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?tn.createElementNS(Wy,t):e==="mathml"?tn.createElementNS(zy,t):n?tn.createElement(t,{is:n}):tn.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>tn.createTextNode(t),createComment:t=>tn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>tn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const a=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{hh.innerHTML=Qf(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const l=hh.content;if(r==="svg"||r==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,n)}return[a?a.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Gy=Symbol("_vtc");function Qy(t,e,n){const r=t[Gy];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const dh=Symbol("_vod"),Jy=Symbol("_vsh"),Xy=Symbol(""),Yy=/(^|;)\s*display\s*:/;function Zy(t,e,n){const r=t.style,s=Le(n);let i=!1;if(n&&!s){if(e)if(Le(e))for(const a of e.split(";")){const l=a.slice(0,a.indexOf(":")).trim();n[l]==null&&Ki(r,l,"")}else for(const a in e)n[a]==null&&Ki(r,a,"");for(const a in n)a==="display"&&(i=!0),Ki(r,a,n[a])}else if(s){if(e!==n){const a=r[Xy];a&&(n+=";"+a),r.cssText=n,i=Yy.test(n)}}else e&&t.removeAttribute("style");dh in t&&(t[dh]=i?r.display:"",t[Jy]&&(r.display="none"))}const fh=/\s*!important$/;function Ki(t,e,n){if(re(n))n.forEach(r=>Ki(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=ev(t,e);fh.test(n)?t.setProperty(qn(r),n.replace(fh,""),"important"):t[r]=n}}const ph=["Webkit","Moz","ms"],Ca={};function ev(t,e){const n=Ca[e];if(n)return n;let r=kt(e);if(r!=="filter"&&r in t)return Ca[e]=r;r=Co(r);for(let s=0;s<ph.length;s++){const i=ph[s]+r;if(i in t)return Ca[e]=i}return e}const gh="http://www.w3.org/1999/xlink";function mh(t,e,n,r,s,i=t_(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(gh,e.slice(6,e.length)):t.setAttributeNS(gh,e,n):n==null||i&&!Kd(n)?t.removeAttribute(e):t.setAttribute(e,i?"":jn(n)?String(n):n)}function _h(t,e,n,r){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Qf(n):n);return}const s=t.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(a!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let i=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=Kd(n):n==null&&a==="string"?(n="",i=!0):a==="number"&&(n=0,i=!0)}try{t[e]=n}catch{}i&&t.removeAttribute(e)}function Vr(t,e,n,r){t.addEventListener(e,n,r)}function tv(t,e,n,r){t.removeEventListener(e,n,r)}const yh=Symbol("_vei");function nv(t,e,n,r,s=null){const i=t[yh]||(t[yh]={}),a=i[e];if(r&&a)a.value=r;else{const[l,c]=rv(e);if(r){const h=i[e]=ov(r,s);Vr(t,l,h,c)}else a&&(tv(t,l,a,c),i[e]=void 0)}}const vh=/(?:Once|Passive|Capture)$/;function rv(t){let e;if(vh.test(t)){e={};let r;for(;r=t.match(vh);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):qn(t.slice(2)),e]}let ka=0;const sv=Promise.resolve(),iv=()=>ka||(sv.then(()=>ka=0),ka=Date.now());function ov(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Kt(av(r,n.value),e,5,[r])};return n.value=t,n.attached=iv(),n}function av(t,e){if(re(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Eh=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,lv=(t,e,n,r,s,i)=>{const a=s==="svg";e==="class"?Qy(t,r,a):e==="style"?Zy(t,n,r):Ro(e)?Cl(e)||nv(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):cv(t,e,r,a))?(_h(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&mh(t,e,r,a,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!Le(r))?_h(t,kt(e),r):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),mh(t,e,r,a))};function cv(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Eh(e)&&ae(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Eh(e)&&Le(n)?!1:e in t}const Th=t=>{const e=t.props["onUpdate:modelValue"]||!1;return re(e)?n=>Hi(e,n):e};function uv(t){t.target.composing=!0}function Ih(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Da=Symbol("_assign"),wh={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[Da]=Th(s);const i=r||s.props&&s.props.type==="number";Vr(t,e?"change":"input",a=>{if(a.target.composing)return;let l=t.value;n&&(l=l.trim()),i&&(l=Ha(l)),t[Da](l)}),n&&Vr(t,"change",()=>{t.value=t.value.trim()}),e||(Vr(t,"compositionstart",uv),Vr(t,"compositionend",Ih),Vr(t,"change",Ih))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},a){if(t[Da]=Th(a),t.composing)return;const l=(i||t.type==="number")&&!/^0\d/.test(t.value)?Ha(t.value):t.value,c=e??"";l!==c&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===c)||(t.value=c))}},hv={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},dv=(t,e)=>{const n=t._withKeys||(t._withKeys={}),r=e.join(".");return n[r]||(n[r]=s=>{if(!("key"in s))return;const i=qn(s.key);if(e.some(a=>a===i||hv[a]===i))return t(s)})},fv=Ye({patchProp:lv},Ky);let Ah;function pv(){return Ah||(Ah=_y(fv))}const gv=(...t)=>{const e=pv().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=_v(r);if(!s)return;const i=e._component;!ae(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const a=n(s,!1,mv(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},e};function mv(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function _v(t){return Le(t)?document.querySelector(t):t}var yv=!1;/*!
 * pinia v2.2.2
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */let Jf;const $o=t=>Jf=t,Xf=Symbol();function tl(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var xs;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(xs||(xs={}));function vv(){const t=Xd(!0),e=t.run(()=>Se({}));let n=[],r=[];const s=$l({install(i){$o(s),s._a=i,i.provide(Xf,s),i.config.globalProperties.$pinia=s,r.forEach(a=>n.push(a)),r=[]},use(i){return!this._a&&!yv?r.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const Yf=()=>{};function bh(t,e,n,r=Yf){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&Yd()&&n_(s),s}function kr(t,...e){t.slice().forEach(n=>{n(...e)})}const Ev=t=>t(),Rh=Symbol(),Va=Symbol();function nl(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,r)=>t.set(r,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];tl(s)&&tl(r)&&t.hasOwnProperty(n)&&!Ne(r)&&!Dn(r)?t[n]=nl(s,r):t[n]=r}return t}const Tv=Symbol();function Iv(t){return!tl(t)||!t.hasOwnProperty(Tv)}const{assign:An}=Object;function wv(t){return!!(Ne(t)&&t.effect)}function Av(t,e,n,r){const{state:s,actions:i,getters:a}=e,l=n.state.value[t];let c;function h(){l||(n.state.value[t]=s?s():{});const f=k_(n.state.value[t]);return An(f,i,Object.keys(a||{}).reduce((g,_)=>(g[_]=$l(Uo(()=>{$o(n);const b=n._s.get(t);return a[_].call(b,b)})),g),{}))}return c=Zf(t,h,e,n,r,!0),c}function Zf(t,e,n={},r,s,i){let a;const l=An({actions:{}},n),c={deep:!0};let h,f,g=[],_=[],b;const P=r.state.value[t];!i&&!P&&(r.state.value[t]={}),Se({});let D;function V(m){let y;h=f=!1,typeof m=="function"?(m(r.state.value[t]),y={type:xs.patchFunction,storeId:t,events:b}):(nl(r.state.value[t],m),y={type:xs.patchObject,payload:m,storeId:t,events:b});const T=D=Symbol();_f().then(()=>{D===T&&(h=!0)}),f=!0,kr(g,y,r.state.value[t])}const j=i?function(){const{state:y}=n,T=y?y():{};this.$patch(A=>{An(A,T)})}:Yf;function Q(){a.stop(),g=[],_=[],r._s.delete(t)}const J=(m,y="")=>{if(Rh in m)return m[Va]=y,m;const T=function(){$o(r);const A=Array.from(arguments),R=[],E=[];function dt(le){R.push(le)}function Lt(le){E.push(le)}kr(_,{args:A,name:T[Va],store:oe,after:dt,onError:Lt});let Pe;try{Pe=m.apply(this&&this.$id===t?this:oe,A)}catch(le){throw kr(E,le),le}return Pe instanceof Promise?Pe.then(le=>(kr(R,le),le)).catch(le=>(kr(E,le),Promise.reject(le))):(kr(R,Pe),Pe)};return T[Rh]=!0,T[Va]=y,T},W={_p:r,$id:t,$onAction:bh.bind(null,_),$patch:V,$reset:j,$subscribe(m,y={}){const T=bh(g,m,y.detached,()=>A()),A=a.run(()=>Br(()=>r.state.value[t],R=>{(y.flush==="sync"?f:h)&&m({storeId:t,type:xs.direct,events:b},R)},An({},c,y)));return T},$dispose:Q},oe=Vo(W);r._s.set(t,oe);const w=(r._a&&r._a.runWithContext||Ev)(()=>r._e.run(()=>(a=Xd()).run(()=>e({action:J}))));for(const m in w){const y=w[m];if(Ne(y)&&!wv(y)||Dn(y))i||(P&&Iv(y)&&(Ne(y)?y.value=P[m]:nl(y,P[m])),r.state.value[t][m]=y);else if(typeof y=="function"){const T=J(y,m);w[m]=T,l.actions[m]=y}}return An(oe,w),An(_e(oe),w),Object.defineProperty(oe,"$state",{get:()=>r.state.value[t],set:m=>{V(y=>{An(y,m)})}}),r._p.forEach(m=>{An(oe,a.run(()=>m({store:oe,app:r._a,pinia:r,options:l})))}),P&&i&&n.hydrate&&n.hydrate(oe.$state,P),h=!0,f=!0,oe}function Yl(t,e,n){let r,s;const i=typeof e=="function";typeof t=="string"?(r=t,s=i?n:e):(s=t,r=t.id);function a(l,c){const h=uy();return l=l||(h?Os(Xf,null):null),l&&$o(l),l=Jf,l._s.has(r)||(i?Zf(r,e,s,l):Av(r,s,l)),l._s.get(r)}return a.$id=r,a}const ep=Yl("page",()=>{const t=Se("relays");return{currentPage:t,setPage:n=>{t.value=n}}}),bv=Rt({name:"task-bar",setup(){const t=ep();function e(n){t.setPage(n)}return{selectPage:e}}}),St=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},Rv={class:"task-bar"};function Sv(t,e,n,r,s,i){return de(),Oe("div",Rv,[He("div",{class:"task",onClick:e[0]||(e[0]=a=>t.selectPage("schedules"))},"Schedules"),He("div",{class:"task",onClick:e[1]||(e[1]=a=>t.selectPage("relays"))},"Relays")])}const Pv=St(bv,[["render",Sv],["__scopeId","data-v-db314ecb"]]),Cv=Rt({props:{spinnerSize:{type:String,default:"30px"},withText:{type:Boolean,default:!1}},setup(){return{}}}),kv={class:"spinner"},Dv={key:0,class:"text"};function Vv(t,e,n,r,s,i){return de(),Oe("div",kv,[He("div",{class:"spinner-inner",style:ei({"--spinnerSize":t.spinnerSize})},null,4),t.withText?(de(),Oe("div",Dv,"Laden...")):sn("",!0)])}const tp=St(Cv,[["render",Vv],["__scopeId","data-v-8cb8f775"]]),Ov=Rt({components:{Spinner:tp},props:{text:{type:String,required:!0},isLoading:{type:Boolean,required:!1,default:!1}},emits:["onButtonClicked"],setup(t,e){function n(){e.emit("onButtonClicked")}return{onClicked:n}}}),Nv={key:1,class:"button-content"};function xv(t,e,n,r,s,i){const a=at("spinner");return de(),Oe("div",{class:ns(["button-default",{"is-loading":t.isLoading}]),tabindex:"0",onClick:e[0]||(e[0]=(...l)=>t.onClicked&&t.onClicked(...l)),onKeydown:e[1]||(e[1]=dv((...l)=>t.onClicked&&t.onClicked(...l),["enter"]))},[t.isLoading?(de(),wt(a,{key:0,spinnerSize:"20px"})):(de(),Oe("div",Nv,[Wi(t.$slots,"icon",{},void 0),ao(" "+ti(t.text),1)]))],34)}const Zl=St(Ov,[["render",xv],["__scopeId","data-v-5dad5cd0"]]),np=Yl("user",()=>{const t=Se(null);return{user:t,setUser:n=>{t.value=n}}});var Sh={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rp=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Mv=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],a=t[n++],l=t[n++],c=((s&7)<<18|(i&63)<<12|(a&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],a=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},sp={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],a=s+1<t.length,l=a?t[s+1]:0,c=s+2<t.length,h=c?t[s+2]:0,f=i>>2,g=(i&3)<<4|l>>4;let _=(l&15)<<2|h>>6,b=h&63;c||(b=64,a||(_=64)),r.push(n[f],n[g],n[_],n[b])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(rp(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Mv(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const h=s<t.length?n[t.charAt(s)]:64;++s;const g=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||h==null||g==null)throw new Lv;const _=i<<2|l>>4;if(r.push(_),h!==64){const b=l<<4&240|h>>2;if(r.push(b),g!==64){const P=h<<6&192|g;r.push(P)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Lv extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Fv=function(t){const e=rp(t);return sp.encodeByteArray(e,!0)},co=function(t){return Fv(t).replace(/\./g,"")},ip=function(t){try{return sp.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Uv(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const $v=()=>Uv().__FIREBASE_DEFAULTS__,Bv=()=>{if(typeof process>"u"||typeof Sh>"u")return;const t=Sh.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},jv=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&ip(t[1]);return e&&JSON.parse(e)},Bo=()=>{try{return $v()||Bv()||jv()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},op=t=>{var e,n;return(n=(e=Bo())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},qv=t=>{const e=op(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},ap=()=>{var t;return(t=Bo())===null||t===void 0?void 0:t.config},lp=t=>{var e;return(e=Bo())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hv{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Wv(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[co(JSON.stringify(n)),co(JSON.stringify(a)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ut(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function zv(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ut())}function Kv(){var t;const e=(t=Bo())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Gv(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Qv(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Jv(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Xv(){const t=ut();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Yv(){return!Kv()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Zv(){try{return typeof indexedDB=="object"}catch{return!1}}function eE(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tE="FirebaseError";class mn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=tE,Object.setPrototypeOf(this,mn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,si.prototype.create)}}class si{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?nE(i,r):"Error",l=`${this.serviceName}: ${a} (${s}).`;return new mn(s,l,r)}}function nE(t,e){return t.replace(rE,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const rE=/\{\$([^}]+)}/g;function sE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function uo(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],a=e[s];if(Ph(i)&&Ph(a)){if(!uo(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Ph(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ii(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function iE(t,e){const n=new oE(t,e);return n.subscribe.bind(n)}class oE{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");aE(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Oa),s.error===void 0&&(s.error=Oa),s.complete===void 0&&(s.complete=Oa);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function aE(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Oa(){}/**
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
 */function ht(t){return t&&t._delegate?t._delegate:t}class fr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */class lE{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Hv;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(uE(e))try{this.getOrInitializeService({instanceIdentifier:ir})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=ir){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ir){return this.instances.has(e)}getOptions(e=ir){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&a.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const a=this.instances.get(s);return a&&e(a,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:cE(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ir){return this.component?this.component.multipleInstances?e:ir:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function cE(t){return t===ir?void 0:t}function uE(t){return t.instantiationMode==="EAGER"}/**
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
 */class hE{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new lE(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ue;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ue||(ue={}));const dE={debug:ue.DEBUG,verbose:ue.VERBOSE,info:ue.INFO,warn:ue.WARN,error:ue.ERROR,silent:ue.SILENT},fE=ue.INFO,pE={[ue.DEBUG]:"log",[ue.VERBOSE]:"log",[ue.INFO]:"info",[ue.WARN]:"warn",[ue.ERROR]:"error"},gE=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=pE[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ec{constructor(e){this.name=e,this._logLevel=fE,this._logHandler=gE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ue))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?dE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ue.DEBUG,...e),this._logHandler(this,ue.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ue.VERBOSE,...e),this._logHandler(this,ue.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ue.INFO,...e),this._logHandler(this,ue.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ue.WARN,...e),this._logHandler(this,ue.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ue.ERROR,...e),this._logHandler(this,ue.ERROR,...e)}}const mE=(t,e)=>e.some(n=>t instanceof n);let Ch,kh;function _E(){return Ch||(Ch=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function yE(){return kh||(kh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const cp=new WeakMap,rl=new WeakMap,up=new WeakMap,Na=new WeakMap,tc=new WeakMap;function vE(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",a)},i=()=>{n(Vn(t.result)),s()},a=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",a)});return e.then(n=>{n instanceof IDBCursor&&cp.set(n,t)}).catch(()=>{}),tc.set(e,t),e}function EE(t){if(rl.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",a),t.removeEventListener("abort",a)},i=()=>{n(),s()},a=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",a),t.addEventListener("abort",a)});rl.set(t,e)}let sl={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return rl.get(t);if(e==="objectStoreNames")return t.objectStoreNames||up.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Vn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function TE(t){sl=t(sl)}function IE(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(xa(this),e,...n);return up.set(r,e.sort?e.sort():[e]),Vn(r)}:yE().includes(t)?function(...e){return t.apply(xa(this),e),Vn(cp.get(this))}:function(...e){return Vn(t.apply(xa(this),e))}}function wE(t){return typeof t=="function"?IE(t):(t instanceof IDBTransaction&&EE(t),mE(t,_E())?new Proxy(t,sl):t)}function Vn(t){if(t instanceof IDBRequest)return vE(t);if(Na.has(t))return Na.get(t);const e=wE(t);return e!==t&&(Na.set(t,e),tc.set(e,t)),e}const xa=t=>tc.get(t);function AE(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(t,e),l=Vn(a);return r&&a.addEventListener("upgradeneeded",c=>{r(Vn(a.result),c.oldVersion,c.newVersion,Vn(a.transaction),c)}),n&&a.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const bE=["get","getKey","getAll","getAllKeys","count"],RE=["put","add","delete","clear"],Ma=new Map;function Dh(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ma.get(e))return Ma.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=RE.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||bE.includes(n)))return;const i=async function(a,...l){const c=this.transaction(a,s?"readwrite":"readonly");let h=c.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[n](...l),s&&c.done]))[0]};return Ma.set(e,i),i}TE(t=>({...t,get:(e,n,r)=>Dh(e,n)||t.get(e,n,r),has:(e,n)=>!!Dh(e,n)||t.has(e,n)}));/**
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
 */class SE{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(PE(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function PE(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const il="@firebase/app",Vh="0.10.11";/**
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
 */const hn=new ec("@firebase/app"),CE="@firebase/app-compat",kE="@firebase/analytics-compat",DE="@firebase/analytics",VE="@firebase/app-check-compat",OE="@firebase/app-check",NE="@firebase/auth",xE="@firebase/auth-compat",ME="@firebase/database",LE="@firebase/database-compat",FE="@firebase/functions",UE="@firebase/functions-compat",$E="@firebase/installations",BE="@firebase/installations-compat",jE="@firebase/messaging",qE="@firebase/messaging-compat",HE="@firebase/performance",WE="@firebase/performance-compat",zE="@firebase/remote-config",KE="@firebase/remote-config-compat",GE="@firebase/storage",QE="@firebase/storage-compat",JE="@firebase/firestore",XE="@firebase/vertexai-preview",YE="@firebase/firestore-compat",ZE="firebase",eT="10.13.2";/**
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
 */const ol="[DEFAULT]",tT={[il]:"fire-core",[CE]:"fire-core-compat",[DE]:"fire-analytics",[kE]:"fire-analytics-compat",[OE]:"fire-app-check",[VE]:"fire-app-check-compat",[NE]:"fire-auth",[xE]:"fire-auth-compat",[ME]:"fire-rtdb",[LE]:"fire-rtdb-compat",[FE]:"fire-fn",[UE]:"fire-fn-compat",[$E]:"fire-iid",[BE]:"fire-iid-compat",[jE]:"fire-fcm",[qE]:"fire-fcm-compat",[HE]:"fire-perf",[WE]:"fire-perf-compat",[zE]:"fire-rc",[KE]:"fire-rc-compat",[GE]:"fire-gcs",[QE]:"fire-gcs-compat",[JE]:"fire-fst",[YE]:"fire-fst-compat",[XE]:"fire-vertex","fire-js":"fire-js",[ZE]:"fire-js-all"};/**
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
 */const ho=new Map,nT=new Map,al=new Map;function Oh(t,e){try{t.container.addComponent(e)}catch(n){hn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Kr(t){const e=t.name;if(al.has(e))return hn.debug(`There were multiple attempts to register component ${e}.`),!1;al.set(e,t);for(const n of ho.values())Oh(n,t);for(const n of nT.values())Oh(n,t);return!0}function nc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function on(t){return t.settings!==void 0}/**
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
 */const rT={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},On=new si("app","Firebase",rT);/**
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
 */class sT{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new fr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw On.create("app-deleted",{appName:this._name})}}/**
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
 */const rs=eT;function hp(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:ol,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw On.create("bad-app-name",{appName:String(s)});if(n||(n=ap()),!n)throw On.create("no-options");const i=ho.get(s);if(i){if(uo(n,i.options)&&uo(r,i.config))return i;throw On.create("duplicate-app",{appName:s})}const a=new hE(s);for(const c of al.values())a.addComponent(c);const l=new sT(n,r,a);return ho.set(s,l),l}function dp(t=ol){const e=ho.get(t);if(!e&&t===ol&&ap())return hp();if(!e)throw On.create("no-app",{appName:t});return e}function Nn(t,e,n){var r;let s=(r=tT[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),a=e.match(/\s|\//);if(i||a){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&a&&l.push("and"),a&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),hn.warn(l.join(" "));return}Kr(new fr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const iT="firebase-heartbeat-database",oT=1,zs="firebase-heartbeat-store";let La=null;function fp(){return La||(La=AE(iT,oT,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(zs)}catch(n){console.warn(n)}}}}).catch(t=>{throw On.create("idb-open",{originalErrorMessage:t.message})})),La}async function aT(t){try{const n=(await fp()).transaction(zs),r=await n.objectStore(zs).get(pp(t));return await n.done,r}catch(e){if(e instanceof mn)hn.warn(e.message);else{const n=On.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});hn.warn(n.message)}}}async function Nh(t,e){try{const r=(await fp()).transaction(zs,"readwrite");await r.objectStore(zs).put(e,pp(t)),await r.done}catch(n){if(n instanceof mn)hn.warn(n.message);else{const r=On.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});hn.warn(r.message)}}}function pp(t){return`${t.name}!${t.options.appId}`}/**
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
 */const lT=1024,cT=30*24*60*60*1e3;class uT{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new dT(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=xh();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const l=new Date(a.date).valueOf();return Date.now()-l<=cT}),this._storage.overwrite(this._heartbeatsCache))}catch(r){hn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=xh(),{heartbeatsToSend:r,unsentEntries:s}=hT(this._heartbeatsCache.heartbeats),i=co(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return hn.warn(n),""}}}function xh(){return new Date().toISOString().substring(0,10)}function hT(t,e=lT){const n=[];let r=t.slice();for(const s of t){const i=n.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),Mh(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Mh(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class dT{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Zv()?eE().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await aT(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Nh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Nh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Mh(t){return co(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function fT(t){Kr(new fr("platform-logger",e=>new SE(e),"PRIVATE")),Kr(new fr("heartbeat",e=>new uT(e),"PRIVATE")),Nn(il,Vh,t),Nn(il,Vh,"esm2017"),Nn("fire-js","")}fT("");function rc(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function gp(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const pT=gp,mp=new si("auth","Firebase",gp());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fo=new ec("@firebase/auth");function gT(t,...e){fo.logLevel<=ue.WARN&&fo.warn(`Auth (${rs}): ${t}`,...e)}function Gi(t,...e){fo.logLevel<=ue.ERROR&&fo.error(`Auth (${rs}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gt(t,...e){throw ic(t,...e)}function Nt(t,...e){return ic(t,...e)}function sc(t,e,n){const r=Object.assign(Object.assign({},pT()),{[e]:n});return new si("auth","Firebase",r).create(e,{appName:t.name})}function ur(t){return sc(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function mT(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Gt(t,"argument-error"),sc(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function ic(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return mp.create(t,...e)}function te(t,e,...n){if(!t)throw ic(e,...n)}function an(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Gi(e),new Error(e)}function dn(t,e){t||an(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ll(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function _T(){return Lh()==="http:"||Lh()==="https:"}function Lh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yT(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(_T()||Qv()||"connection"in navigator)?navigator.onLine:!0}function vT(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi{constructor(e,n){this.shortDelay=e,this.longDelay=n,dn(n>e,"Short delay should be less than long delay!"),this.isMobile=zv()||Jv()}get(){return yT()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oc(t,e){dn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _p{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;an("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;an("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;an("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ET={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TT=new oi(3e4,6e4);function ac(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ss(t,e,n,r,s={}){return yp(t,s,async()=>{let i={},a={};r&&(e==="GET"?a=r:i={body:JSON.stringify(r)});const l=ii(Object.assign({key:t.config.apiKey},a)).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const h=Object.assign({method:e,headers:c},i);return Gv()||(h.referrerPolicy="no-referrer"),_p.fetch()(vp(t,t.config.apiHost,n,l),h)})}async function yp(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},ET),e);try{const s=new wT(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw Ui(t,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const l=i.ok?a.errorMessage:a.error.message,[c,h]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ui(t,"credential-already-in-use",a);if(c==="EMAIL_EXISTS")throw Ui(t,"email-already-in-use",a);if(c==="USER_DISABLED")throw Ui(t,"user-disabled",a);const f=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw sc(t,f,h);Gt(t,f)}}catch(s){if(s instanceof mn)throw s;Gt(t,"network-request-failed",{message:String(s)})}}async function IT(t,e,n,r,s={}){const i=await ss(t,e,n,r,s);return"mfaPendingCredential"in i&&Gt(t,"multi-factor-auth-required",{_serverResponse:i}),i}function vp(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?oc(t.config,s):`${t.config.apiScheme}://${s}`}class wT{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Nt(this.auth,"network-request-failed")),TT.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ui(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Nt(t,e,r);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AT(t,e){return ss(t,"POST","/v1/accounts:delete",e)}async function Ep(t,e){return ss(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ms(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function bT(t,e=!1){const n=ht(t),r=await n.getIdToken(e),s=lc(r);te(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,a=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Ms(Fa(s.auth_time)),issuedAtTime:Ms(Fa(s.iat)),expirationTime:Ms(Fa(s.exp)),signInProvider:a||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Fa(t){return Number(t)*1e3}function lc(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Gi("JWT malformed, contained fewer than 3 sections"),null;try{const s=ip(n);return s?JSON.parse(s):(Gi("Failed to decode base64 JWT payload"),null)}catch(s){return Gi("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Fh(t){const e=lc(t);return te(e,"internal-error"),te(typeof e.exp<"u","internal-error"),te(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ks(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof mn&&RT(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function RT({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ST{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cl{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ms(this.lastLoginAt),this.creationTime=Ms(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function po(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Ks(t,Ep(n,{idToken:r}));te(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const a=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Tp(i.providerUserInfo):[],l=CT(t.providerData,a),c=t.isAnonymous,h=!(t.email&&i.passwordHash)&&!(l!=null&&l.length),f=c?h:!1,g={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new cl(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(t,g)}async function PT(t){const e=ht(t);await po(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function CT(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Tp(t){return t.map(e=>{var{providerId:n}=e,r=rc(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kT(t,e){const n=await yp(t,{},async()=>{const r=ii({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,a=vp(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",_p.fetch()(a,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function DT(t,e){return ss(t,"POST","/v2/accounts:revokeToken",ac(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){te(e.idToken,"internal-error"),te(typeof e.idToken<"u","internal-error"),te(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Fh(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){te(e.length!==0,"internal-error");const n=Fh(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(te(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await kT(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,a=new jr;return r&&(te(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&(te(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),i&&(te(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new jr,this.toJSON())}_performRefresh(){return an("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wn(t,e){te(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class ln{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=rc(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ST(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new cl(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Ks(this,this.stsTokenManager.getToken(this.auth,e));return te(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return bT(this,e)}reload(){return PT(this)}_assign(e){this!==e&&(te(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new ln(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){te(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await po(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(on(this.auth.app))return Promise.reject(ur(this.auth));const e=await this.getIdToken();return await Ks(this,AT(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,a,l,c,h,f;const g=(r=n.displayName)!==null&&r!==void 0?r:void 0,_=(s=n.email)!==null&&s!==void 0?s:void 0,b=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,P=(a=n.photoURL)!==null&&a!==void 0?a:void 0,D=(l=n.tenantId)!==null&&l!==void 0?l:void 0,V=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,j=(h=n.createdAt)!==null&&h!==void 0?h:void 0,Q=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:J,emailVerified:W,isAnonymous:oe,providerData:ye,stsTokenManager:w}=n;te(J&&w,e,"internal-error");const m=jr.fromJSON(this.name,w);te(typeof J=="string",e,"internal-error"),wn(g,e.name),wn(_,e.name),te(typeof W=="boolean",e,"internal-error"),te(typeof oe=="boolean",e,"internal-error"),wn(b,e.name),wn(P,e.name),wn(D,e.name),wn(V,e.name),wn(j,e.name),wn(Q,e.name);const y=new ln({uid:J,auth:e,email:_,emailVerified:W,displayName:g,isAnonymous:oe,photoURL:P,phoneNumber:b,tenantId:D,stsTokenManager:m,createdAt:j,lastLoginAt:Q});return ye&&Array.isArray(ye)&&(y.providerData=ye.map(T=>Object.assign({},T))),V&&(y._redirectEventId=V),y}static async _fromIdTokenResponse(e,n,r=!1){const s=new jr;s.updateFromServerResponse(n);const i=new ln({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await po(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];te(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Tp(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new jr;l.updateFromIdToken(r);const c=new ln({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:a}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new cl(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,h),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uh=new Map;function cn(t){dn(t instanceof Function,"Expected a class definition");let e=Uh.get(t);return e?(dn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Uh.set(t,e),e)}/**
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
 */class Ip{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Ip.type="NONE";const $h=Ip;/**
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
 */function Qi(t,e,n){return`firebase:${t}:${e}:${n}`}class qr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Qi(this.userKey,s.apiKey,i),this.fullPersistenceKey=Qi("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ln._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new qr(cn($h),e,r);const s=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||cn($h);const a=Qi(r,e.config.apiKey,e.name);let l=null;for(const h of n)try{const f=await h._get(a);if(f){const g=ln._fromJSON(e,f);h!==i&&(l=g),i=h;break}}catch{}const c=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new qr(i,e,r):(i=c[0],l&&await i._set(a,l.toJSON()),await Promise.all(n.map(async h=>{if(h!==i)try{await h._remove(a)}catch{}})),new qr(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bh(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Rp(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(wp(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Pp(e))return"Blackberry";if(Cp(e))return"Webos";if(Ap(e))return"Safari";if((e.includes("chrome/")||bp(e))&&!e.includes("edge/"))return"Chrome";if(Sp(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function wp(t=ut()){return/firefox\//i.test(t)}function Ap(t=ut()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function bp(t=ut()){return/crios\//i.test(t)}function Rp(t=ut()){return/iemobile/i.test(t)}function Sp(t=ut()){return/android/i.test(t)}function Pp(t=ut()){return/blackberry/i.test(t)}function Cp(t=ut()){return/webos/i.test(t)}function cc(t=ut()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function VT(t=ut()){var e;return cc(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function OT(){return Xv()&&document.documentMode===10}function kp(t=ut()){return cc(t)||Sp(t)||Cp(t)||Pp(t)||/windows phone/i.test(t)||Rp(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dp(t,e=[]){let n;switch(t){case"Browser":n=Bh(ut());break;case"Worker":n=`${Bh(ut())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${rs}/${r}`}/**
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
 */class NT{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((a,l)=>{try{const c=e(i);a(c)}catch(c){l(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function xT(t,e={}){return ss(t,"GET","/v2/passwordPolicy",ac(t,e))}/**
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
 */const MT=6;class LT{constructor(e){var n,r,s,i;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=a.minPasswordLength)!==null&&n!==void 0?n:MT,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,a,l;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(a=c.containsNumericCharacter)!==null&&a!==void 0?a:!0),c.isValid&&(c.isValid=(l=c.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FT{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new jh(this),this.idTokenSubscription=new jh(this),this.beforeStateQueue=new NT(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=mp,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=cn(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await qr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Ep(this,{idToken:e}),r=await ln._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(on(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!a||a===l)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(a){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return te(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await po(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=vT()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(on(this.app))return Promise.reject(ur(this));const n=e?ht(e):null;return n&&te(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&te(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return on(this.app)?Promise.reject(ur(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return on(this.app)?Promise.reject(ur(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(cn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await xT(this),n=new LT(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new si("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await DT(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&cn(e)||this._popupRedirectResolver;te(n,this,"argument-error"),this.redirectPersistenceManager=await qr.create(this,[cn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(te(l,this,"internal-error"),l.then(()=>{a||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{a=!0,c()}}else{const c=e.addObserver(n);return()=>{a=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return te(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Dp(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&gT(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function jo(t){return ht(t)}class jh{constructor(e){this.auth=e,this.observer=null,this.addObserver=iE(n=>this.observer=n)}get next(){return te(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let uc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function UT(t){uc=t}function $T(t){return uc.loadJS(t)}function BT(){return uc.gapiScript}function jT(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qT(t,e){const n=nc(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(uo(i,e??{}))return s;Gt(s,"already-initialized")}return n.initialize({options:e})}function HT(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(cn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function WT(t,e,n){const r=jo(t);te(r._canInitEmulator,r,"emulator-config-failed"),te(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Vp(e),{host:a,port:l}=zT(e),c=l===null?"":`:${l}`;r.config.emulator={url:`${i}//${a}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),KT()}function Vp(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function zT(t){const e=Vp(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:qh(r.substr(i.length+1))}}else{const[i,a]=r.split(":");return{host:i,port:qh(a)}}}function qh(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function KT(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Op{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return an("not implemented")}_getIdTokenResponse(e){return an("not implemented")}_linkToIdToken(e,n){return an("not implemented")}_getReauthenticationResolver(e){return an("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hr(t,e){return IT(t,"POST","/v1/accounts:signInWithIdp",ac(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GT="http://localhost";class pr extends Op{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new pr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Gt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=rc(n,["providerId","signInMethod"]);if(!r||!s)return null;const a=new pr(r,s);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const n=this.buildRequest();return Hr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Hr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Hr(e,n)}buildRequest(){const e={requestUri:GT,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ii(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hc{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ai extends hc{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn extends ai{constructor(){super("facebook.com")}static credential(e){return pr._fromParams({providerId:Sn.PROVIDER_ID,signInMethod:Sn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Sn.credentialFromTaggedObject(e)}static credentialFromError(e){return Sn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Sn.credential(e.oauthAccessToken)}catch{return null}}}Sn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Sn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn extends ai{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return pr._fromParams({providerId:rn.PROVIDER_ID,signInMethod:rn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return rn.credentialFromTaggedObject(e)}static credentialFromError(e){return rn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return rn.credential(n,r)}catch{return null}}}rn.GOOGLE_SIGN_IN_METHOD="google.com";rn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn extends ai{constructor(){super("github.com")}static credential(e){return pr._fromParams({providerId:Pn.PROVIDER_ID,signInMethod:Pn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Pn.credentialFromTaggedObject(e)}static credentialFromError(e){return Pn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Pn.credential(e.oauthAccessToken)}catch{return null}}}Pn.GITHUB_SIGN_IN_METHOD="github.com";Pn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn extends ai{constructor(){super("twitter.com")}static credential(e,n){return pr._fromParams({providerId:Cn.PROVIDER_ID,signInMethod:Cn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Cn.credentialFromTaggedObject(e)}static credentialFromError(e){return Cn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Cn.credential(n,r)}catch{return null}}}Cn.TWITTER_SIGN_IN_METHOD="twitter.com";Cn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await ln._fromIdTokenResponse(e,r,s),a=Hh(r);return new Gr({user:i,providerId:a,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Hh(r);return new Gr({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Hh(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class go extends mn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,go.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new go(e,n,r,s)}}function Np(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?go._fromErrorAndOperation(t,i,e,r):i})}async function QT(t,e,n=!1){const r=await Ks(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Gr._forOperation(t,"link",r)}/**
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
 */async function JT(t,e,n=!1){const{auth:r}=t;if(on(r.app))return Promise.reject(ur(r));const s="reauthenticate";try{const i=await Ks(t,Np(r,s,e,t),n);te(i.idToken,r,"internal-error");const a=lc(i.idToken);te(a,r,"internal-error");const{sub:l}=a;return te(t.uid===l,r,"user-mismatch"),Gr._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Gt(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XT(t,e,n=!1){if(on(t.app))return Promise.reject(ur(t));const r="signIn",s=await Np(t,r,e),i=await Gr._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}function YT(t,e,n,r){return ht(t).onIdTokenChanged(e,n,r)}function ZT(t,e,n){return ht(t).beforeAuthStateChanged(e,n)}const mo="__sak";/**
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
 */class xp{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(mo,"1"),this.storage.removeItem(mo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eI=1e3,tI=10;class Mp extends xp{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=kp(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((a,l,c)=>{this.notifyListeners(a,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(r);!n&&this.localCache[r]===a||this.notifyListeners(r,a)},i=this.storage.getItem(r);OT()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,tI):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},eI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Mp.type="LOCAL";const nI=Mp;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lp extends xp{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Lp.type="SESSION";const Fp=Lp;/**
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
 */function rI(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class qo{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new qo(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,a=this.handlersMap[s];if(!(a!=null&&a.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(a).map(async h=>h(n.origin,i)),c=await rI(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}qo.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dc(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class sI{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,a;return new Promise((l,c)=>{const h=dc("",20);s.port1.start();const f=setTimeout(()=>{c(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(g){const _=g;if(_.data.eventId===h)switch(_.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(_.data.response);break;default:clearTimeout(f),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qt(){return window}function iI(t){qt().location.href=t}/**
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
 */function Up(){return typeof qt().WorkerGlobalScope<"u"&&typeof qt().importScripts=="function"}async function oI(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function aI(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function lI(){return Up()?self:null}/**
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
 */const $p="firebaseLocalStorageDb",cI=1,_o="firebaseLocalStorage",Bp="fbase_key";class li{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ho(t,e){return t.transaction([_o],e?"readwrite":"readonly").objectStore(_o)}function uI(){const t=indexedDB.deleteDatabase($p);return new li(t).toPromise()}function ul(){const t=indexedDB.open($p,cI);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(_o,{keyPath:Bp})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(_o)?e(r):(r.close(),await uI(),e(await ul()))})})}async function Wh(t,e,n){const r=Ho(t,!0).put({[Bp]:e,value:n});return new li(r).toPromise()}async function hI(t,e){const n=Ho(t,!1).get(e),r=await new li(n).toPromise();return r===void 0?null:r.value}function zh(t,e){const n=Ho(t,!0).delete(e);return new li(n).toPromise()}const dI=800,fI=3;class jp{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ul(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>fI)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Up()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=qo._getInstance(lI()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await oI(),!this.activeServiceWorker)return;this.sender=new sI(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||aI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ul();return await Wh(e,mo,"1"),await zh(e,mo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Wh(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>hI(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>zh(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Ho(s,!1).getAll();return new li(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),dI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}jp.type="LOCAL";const pI=jp;new oi(3e4,6e4);/**
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
 */function qp(t,e){return e?cn(e):(te(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class fc extends Op{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Hr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Hr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Hr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function gI(t){return XT(t.auth,new fc(t),t.bypassAuthState)}function mI(t){const{auth:e,user:n}=t;return te(n,e,"internal-error"),JT(n,new fc(t),t.bypassAuthState)}async function _I(t){const{auth:e,user:n}=t;return te(n,e,"internal-error"),QT(n,new fc(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hp{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:a,type:l}=e;if(a){this.reject(a);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return gI;case"linkViaPopup":case"linkViaRedirect":return _I;case"reauthViaPopup":case"reauthViaRedirect":return mI;default:Gt(this.auth,"internal-error")}}resolve(e){dn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){dn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yI=new oi(2e3,1e4);async function vI(t,e,n){if(on(t.app))return Promise.reject(Nt(t,"operation-not-supported-in-this-environment"));const r=jo(t);mT(t,e,hc);const s=qp(r,n);return new or(r,"signInViaPopup",e,s).executeNotNull()}class or extends Hp{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,or.currentPopupAction&&or.currentPopupAction.cancel(),or.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return te(e,this.auth,"internal-error"),e}async onExecution(){dn(this.filter.length===1,"Popup operations only handle one event");const e=dc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Nt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Nt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,or.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Nt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,yI.get())};e()}}or.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EI="pendingRedirect",Ji=new Map;class TI extends Hp{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Ji.get(this.auth._key());if(!e){try{const r=await II(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Ji.set(this.auth._key(),e)}return this.bypassAuthState||Ji.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function II(t,e){const n=bI(e),r=AI(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function wI(t,e){Ji.set(t._key(),e)}function AI(t){return cn(t._redirectPersistence)}function bI(t){return Qi(EI,t.config.apiKey,t.name)}async function RI(t,e,n=!1){if(on(t.app))return Promise.reject(ur(t));const r=jo(t),s=qp(r,e),a=await new TI(r,s,n).execute();return a&&!n&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SI=10*60*1e3;class PI{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!CI(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Wp(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Nt(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=SI&&this.cachedEventUids.clear(),this.cachedEventUids.has(Kh(e))}saveEventToCache(e){this.cachedEventUids.add(Kh(e)),this.lastProcessedEventTime=Date.now()}}function Kh(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Wp({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function CI(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Wp(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kI(t,e={}){return ss(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,VI=/^https?/;async function OI(t){if(t.config.emulator)return;const{authorizedDomains:e}=await kI(t);for(const n of e)try{if(NI(n))return}catch{}Gt(t,"unauthorized-domain")}function NI(t){const e=ll(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const a=new URL(t);return a.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&a.hostname===r}if(!VI.test(n))return!1;if(DI.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const xI=new oi(3e4,6e4);function Gh(){const t=qt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function MI(t){return new Promise((e,n)=>{var r,s,i;function a(){Gh(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Gh(),n(Nt(t,"network-request-failed"))},timeout:xI.get()})}if(!((s=(r=qt().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=qt().gapi)===null||i===void 0)&&i.load)a();else{const l=jT("iframefcb");return qt()[l]=()=>{gapi.load?a():n(Nt(t,"network-request-failed"))},$T(`${BT()}?onload=${l}`).catch(c=>n(c))}}).catch(e=>{throw Xi=null,e})}let Xi=null;function LI(t){return Xi=Xi||MI(t),Xi}/**
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
 */const FI=new oi(5e3,15e3),UI="__/auth/iframe",$I="emulator/auth/iframe",BI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},jI=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function qI(t){const e=t.config;te(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?oc(e,$I):`https://${t.config.authDomain}/${UI}`,r={apiKey:e.apiKey,appName:t.name,v:rs},s=jI.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${ii(r).slice(1)}`}async function HI(t){const e=await LI(t),n=qt().gapi;return te(n,t,"internal-error"),e.open({where:document.body,url:qI(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:BI,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const a=Nt(t,"network-request-failed"),l=qt().setTimeout(()=>{i(a)},FI.get());function c(){qt().clearTimeout(l),s(r)}r.ping(c).then(c,()=>{i(a)})}))}/**
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
 */const WI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},zI=500,KI=600,GI="_blank",QI="http://localhost";class Qh{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function JI(t,e,n,r=zI,s=KI){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c=Object.assign(Object.assign({},WI),{width:r.toString(),height:s.toString(),top:i,left:a}),h=ut().toLowerCase();n&&(l=bp(h)?GI:n),wp(h)&&(e=e||QI,c.scrollbars="yes");const f=Object.entries(c).reduce((_,[b,P])=>`${_}${b}=${P},`,"");if(VT(h)&&l!=="_self")return XI(e||"",l),new Qh(null);const g=window.open(e||"",l,f);te(g,t,"popup-blocked");try{g.focus()}catch{}return new Qh(g)}function XI(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const YI="__/auth/handler",ZI="emulator/auth/handler",ew=encodeURIComponent("fac");async function Jh(t,e,n,r,s,i){te(t.config.authDomain,t,"auth-domain-config-required"),te(t.config.apiKey,t,"invalid-api-key");const a={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:rs,eventId:s};if(e instanceof hc){e.setDefaultLanguage(t.languageCode),a.providerId=e.providerId||"",sE(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,g]of Object.entries({}))a[f]=g}if(e instanceof ai){const f=e.getScopes().filter(g=>g!=="");f.length>0&&(a.scopes=f.join(","))}t.tenantId&&(a.tid=t.tenantId);const l=a;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const c=await t._getAppCheckToken(),h=c?`#${ew}=${encodeURIComponent(c)}`:"";return`${tw(t)}?${ii(l).slice(1)}${h}`}function tw({config:t}){return t.emulator?oc(t,ZI):`https://${t.authDomain}/${YI}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ua="webStorageSupport";class nw{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Fp,this._completeRedirectFn=RI,this._overrideRedirectResult=wI}async _openPopup(e,n,r,s){var i;dn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const a=await Jh(e,n,r,ll(),s);return JI(e,a,dc())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Jh(e,n,r,ll(),s);return iI(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(dn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await HI(e),r=new PI(e);return n.register("authEvent",s=>(te(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ua,{type:Ua},s=>{var i;const a=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Ua];a!==void 0&&n(!!a),Gt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=OI(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return kp()||Ap()||cc()}}const rw=nw;var Xh="@firebase/auth",Yh="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sw{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){te(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iw(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function ow(t){Kr(new fr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=r.options;te(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:a,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Dp(t)},h=new FT(r,s,i,c);return HT(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Kr(new fr("auth-internal",e=>{const n=jo(e.getProvider("auth").getImmediate());return(r=>new sw(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Nn(Xh,Yh,iw(t)),Nn(Xh,Yh,"esm2017")}/**
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
 */const aw=5*60,lw=lp("authIdTokenMaxAge")||aw;let Zh=null;const cw=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>lw)return;const s=n==null?void 0:n.token;Zh!==s&&(Zh=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function zn(t=dp()){const e=nc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=qT(t,{popupRedirectResolver:rw,persistence:[pI,nI,Fp]}),r=lp("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const a=cw(i.toString());ZT(n,a,()=>a(n.currentUser)),YT(n,l=>a(l))}}const s=op("auth");return s&&WT(n,`http://${s}`),n}function uw(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}UT({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Nt("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",uw().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});ow("Browser");var hw="firebase",dw="10.13.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Nn(hw,dw,"app");const fw={apiKey:"AIzaSyALY2Eu62yzZPuaySeDBI3ONz3DYCq2388",authDomain:"relay-hub.firebaseapp.com",projectId:"relay-hub",storageBucket:"relay-hub.appspot.com",messagingSenderId:"1088994606939",appId:"1:1088994606939:web:17dc0c1330726f959ca47e"},_n=hp(fw),pw=zn(_n),gw=async()=>{const t=new rn;try{return(await vI(pw,t)).user}catch(e){throw console.error("Error during sign-in:",e),e}},mw=Rt({components:{ButtonDefault:Zl},emits:["onButtonClicked"],props:{},setup(){const t=np(),e=Se(!1);async function n(){e.value=!0;try{const r=await gw();t.setUser({uid:r.uid,displayName:r.displayName,email:r.email,photoURL:r.photoURL})}catch(r){t.setUser(null),console.error("Failed to sign in:",r)}}return{isLoading:e,onButtonClicked:n}}}),_w={class:"button-google"};function yw(t,e,n,r,s,i){const a=at("ButtonDefault");return de(),Oe("div",_w,[We(a,{text:"Sign in with Google",isLoading:t.isLoading,onOnButtonClicked:t.onButtonClicked},{icon:Hl(()=>e[0]||(e[0]=[He("div",{class:"google-icon"},null,-1)])),_:1},8,["isLoading","onOnButtonClicked"])])}const vw=St(mw,[["render",yw],["__scopeId","data-v-e750a2f5"]]),Ew=Rt({name:"sign-in",components:{ButtonGoogle:vw},setup(){return{}}}),Tw={class:"sign-in"};function Iw(t,e,n,r,s,i){const a=at("button-google");return de(),Oe("div",Tw,[e[0]||(e[0]=He("div",{class:"relay-hub"},"RelayHub",-1)),We(a)])}const ww=St(Ew,[["render",Iw],["__scopeId","data-v-9540f920"]]),Aw=Rt({props:{title:{type:String,required:!0}},setup(){return{}}}),bw={class:"page-tite"};function Rw(t,e,n,r,s,i){return de(),Oe("div",bw,ti(t.$props.title),1)}const zp=St(Aw,[["render",Rw],["__scopeId","data-v-7de7892e"]]),Sw=Rt({name:"ToggleButton",props:{modelValue:{type:Boolean,required:!0},isBlocked:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(t,{emit:e}){const n=Se(t.modelValue),r=Se(!1);return Br(()=>t.modelValue,i=>{n.value=i}),{isActive:n,toggleSwitch:()=>{t.isBlocked||r.value||(n.value=!n.value,r.value=!0,setTimeout(()=>r.value=!1,500),e("update:modelValue",n.value))}}}});function Pw(t,e,n,r,s,i){return de(),Oe("div",{class:ns(["toggle-switch",{active:t.isActive}]),onClick:e[0]||(e[0]=(...a)=>t.toggleSwitch&&t.toggleSwitch(...a))},e[1]||(e[1]=[He("div",{class:"switch"},null,-1)]),2)}const Cw=St(Sw,[["render",Pw],["__scopeId","data-v-17dbdf4b"]]);var ed=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var hr,Kp;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,m){function y(){}y.prototype=m.prototype,w.D=m.prototype,w.prototype=new y,w.prototype.constructor=w,w.C=function(T,A,R){for(var E=Array(arguments.length-2),dt=2;dt<arguments.length;dt++)E[dt-2]=arguments[dt];return m.prototype[A].apply(T,E)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(w,m,y){y||(y=0);var T=Array(16);if(typeof m=="string")for(var A=0;16>A;++A)T[A]=m.charCodeAt(y++)|m.charCodeAt(y++)<<8|m.charCodeAt(y++)<<16|m.charCodeAt(y++)<<24;else for(A=0;16>A;++A)T[A]=m[y++]|m[y++]<<8|m[y++]<<16|m[y++]<<24;m=w.g[0],y=w.g[1],A=w.g[2];var R=w.g[3],E=m+(R^y&(A^R))+T[0]+3614090360&4294967295;m=y+(E<<7&4294967295|E>>>25),E=R+(A^m&(y^A))+T[1]+3905402710&4294967295,R=m+(E<<12&4294967295|E>>>20),E=A+(y^R&(m^y))+T[2]+606105819&4294967295,A=R+(E<<17&4294967295|E>>>15),E=y+(m^A&(R^m))+T[3]+3250441966&4294967295,y=A+(E<<22&4294967295|E>>>10),E=m+(R^y&(A^R))+T[4]+4118548399&4294967295,m=y+(E<<7&4294967295|E>>>25),E=R+(A^m&(y^A))+T[5]+1200080426&4294967295,R=m+(E<<12&4294967295|E>>>20),E=A+(y^R&(m^y))+T[6]+2821735955&4294967295,A=R+(E<<17&4294967295|E>>>15),E=y+(m^A&(R^m))+T[7]+4249261313&4294967295,y=A+(E<<22&4294967295|E>>>10),E=m+(R^y&(A^R))+T[8]+1770035416&4294967295,m=y+(E<<7&4294967295|E>>>25),E=R+(A^m&(y^A))+T[9]+2336552879&4294967295,R=m+(E<<12&4294967295|E>>>20),E=A+(y^R&(m^y))+T[10]+4294925233&4294967295,A=R+(E<<17&4294967295|E>>>15),E=y+(m^A&(R^m))+T[11]+2304563134&4294967295,y=A+(E<<22&4294967295|E>>>10),E=m+(R^y&(A^R))+T[12]+1804603682&4294967295,m=y+(E<<7&4294967295|E>>>25),E=R+(A^m&(y^A))+T[13]+4254626195&4294967295,R=m+(E<<12&4294967295|E>>>20),E=A+(y^R&(m^y))+T[14]+2792965006&4294967295,A=R+(E<<17&4294967295|E>>>15),E=y+(m^A&(R^m))+T[15]+1236535329&4294967295,y=A+(E<<22&4294967295|E>>>10),E=m+(A^R&(y^A))+T[1]+4129170786&4294967295,m=y+(E<<5&4294967295|E>>>27),E=R+(y^A&(m^y))+T[6]+3225465664&4294967295,R=m+(E<<9&4294967295|E>>>23),E=A+(m^y&(R^m))+T[11]+643717713&4294967295,A=R+(E<<14&4294967295|E>>>18),E=y+(R^m&(A^R))+T[0]+3921069994&4294967295,y=A+(E<<20&4294967295|E>>>12),E=m+(A^R&(y^A))+T[5]+3593408605&4294967295,m=y+(E<<5&4294967295|E>>>27),E=R+(y^A&(m^y))+T[10]+38016083&4294967295,R=m+(E<<9&4294967295|E>>>23),E=A+(m^y&(R^m))+T[15]+3634488961&4294967295,A=R+(E<<14&4294967295|E>>>18),E=y+(R^m&(A^R))+T[4]+3889429448&4294967295,y=A+(E<<20&4294967295|E>>>12),E=m+(A^R&(y^A))+T[9]+568446438&4294967295,m=y+(E<<5&4294967295|E>>>27),E=R+(y^A&(m^y))+T[14]+3275163606&4294967295,R=m+(E<<9&4294967295|E>>>23),E=A+(m^y&(R^m))+T[3]+4107603335&4294967295,A=R+(E<<14&4294967295|E>>>18),E=y+(R^m&(A^R))+T[8]+1163531501&4294967295,y=A+(E<<20&4294967295|E>>>12),E=m+(A^R&(y^A))+T[13]+2850285829&4294967295,m=y+(E<<5&4294967295|E>>>27),E=R+(y^A&(m^y))+T[2]+4243563512&4294967295,R=m+(E<<9&4294967295|E>>>23),E=A+(m^y&(R^m))+T[7]+1735328473&4294967295,A=R+(E<<14&4294967295|E>>>18),E=y+(R^m&(A^R))+T[12]+2368359562&4294967295,y=A+(E<<20&4294967295|E>>>12),E=m+(y^A^R)+T[5]+4294588738&4294967295,m=y+(E<<4&4294967295|E>>>28),E=R+(m^y^A)+T[8]+2272392833&4294967295,R=m+(E<<11&4294967295|E>>>21),E=A+(R^m^y)+T[11]+1839030562&4294967295,A=R+(E<<16&4294967295|E>>>16),E=y+(A^R^m)+T[14]+4259657740&4294967295,y=A+(E<<23&4294967295|E>>>9),E=m+(y^A^R)+T[1]+2763975236&4294967295,m=y+(E<<4&4294967295|E>>>28),E=R+(m^y^A)+T[4]+1272893353&4294967295,R=m+(E<<11&4294967295|E>>>21),E=A+(R^m^y)+T[7]+4139469664&4294967295,A=R+(E<<16&4294967295|E>>>16),E=y+(A^R^m)+T[10]+3200236656&4294967295,y=A+(E<<23&4294967295|E>>>9),E=m+(y^A^R)+T[13]+681279174&4294967295,m=y+(E<<4&4294967295|E>>>28),E=R+(m^y^A)+T[0]+3936430074&4294967295,R=m+(E<<11&4294967295|E>>>21),E=A+(R^m^y)+T[3]+3572445317&4294967295,A=R+(E<<16&4294967295|E>>>16),E=y+(A^R^m)+T[6]+76029189&4294967295,y=A+(E<<23&4294967295|E>>>9),E=m+(y^A^R)+T[9]+3654602809&4294967295,m=y+(E<<4&4294967295|E>>>28),E=R+(m^y^A)+T[12]+3873151461&4294967295,R=m+(E<<11&4294967295|E>>>21),E=A+(R^m^y)+T[15]+530742520&4294967295,A=R+(E<<16&4294967295|E>>>16),E=y+(A^R^m)+T[2]+3299628645&4294967295,y=A+(E<<23&4294967295|E>>>9),E=m+(A^(y|~R))+T[0]+4096336452&4294967295,m=y+(E<<6&4294967295|E>>>26),E=R+(y^(m|~A))+T[7]+1126891415&4294967295,R=m+(E<<10&4294967295|E>>>22),E=A+(m^(R|~y))+T[14]+2878612391&4294967295,A=R+(E<<15&4294967295|E>>>17),E=y+(R^(A|~m))+T[5]+4237533241&4294967295,y=A+(E<<21&4294967295|E>>>11),E=m+(A^(y|~R))+T[12]+1700485571&4294967295,m=y+(E<<6&4294967295|E>>>26),E=R+(y^(m|~A))+T[3]+2399980690&4294967295,R=m+(E<<10&4294967295|E>>>22),E=A+(m^(R|~y))+T[10]+4293915773&4294967295,A=R+(E<<15&4294967295|E>>>17),E=y+(R^(A|~m))+T[1]+2240044497&4294967295,y=A+(E<<21&4294967295|E>>>11),E=m+(A^(y|~R))+T[8]+1873313359&4294967295,m=y+(E<<6&4294967295|E>>>26),E=R+(y^(m|~A))+T[15]+4264355552&4294967295,R=m+(E<<10&4294967295|E>>>22),E=A+(m^(R|~y))+T[6]+2734768916&4294967295,A=R+(E<<15&4294967295|E>>>17),E=y+(R^(A|~m))+T[13]+1309151649&4294967295,y=A+(E<<21&4294967295|E>>>11),E=m+(A^(y|~R))+T[4]+4149444226&4294967295,m=y+(E<<6&4294967295|E>>>26),E=R+(y^(m|~A))+T[11]+3174756917&4294967295,R=m+(E<<10&4294967295|E>>>22),E=A+(m^(R|~y))+T[2]+718787259&4294967295,A=R+(E<<15&4294967295|E>>>17),E=y+(R^(A|~m))+T[9]+3951481745&4294967295,w.g[0]=w.g[0]+m&4294967295,w.g[1]=w.g[1]+(A+(E<<21&4294967295|E>>>11))&4294967295,w.g[2]=w.g[2]+A&4294967295,w.g[3]=w.g[3]+R&4294967295}r.prototype.u=function(w,m){m===void 0&&(m=w.length);for(var y=m-this.blockSize,T=this.B,A=this.h,R=0;R<m;){if(A==0)for(;R<=y;)s(this,w,R),R+=this.blockSize;if(typeof w=="string"){for(;R<m;)if(T[A++]=w.charCodeAt(R++),A==this.blockSize){s(this,T),A=0;break}}else for(;R<m;)if(T[A++]=w[R++],A==this.blockSize){s(this,T),A=0;break}}this.h=A,this.o+=m},r.prototype.v=function(){var w=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);w[0]=128;for(var m=1;m<w.length-8;++m)w[m]=0;var y=8*this.o;for(m=w.length-8;m<w.length;++m)w[m]=y&255,y/=256;for(this.u(w),w=Array(16),m=y=0;4>m;++m)for(var T=0;32>T;T+=8)w[y++]=this.g[m]>>>T&255;return w};function i(w,m){var y=l;return Object.prototype.hasOwnProperty.call(y,w)?y[w]:y[w]=m(w)}function a(w,m){this.h=m;for(var y=[],T=!0,A=w.length-1;0<=A;A--){var R=w[A]|0;T&&R==m||(y[A]=R,T=!1)}this.g=y}var l={};function c(w){return-128<=w&&128>w?i(w,function(m){return new a([m|0],0>m?-1:0)}):new a([w|0],0>w?-1:0)}function h(w){if(isNaN(w)||!isFinite(w))return g;if(0>w)return V(h(-w));for(var m=[],y=1,T=0;w>=y;T++)m[T]=w/y|0,y*=4294967296;return new a(m,0)}function f(w,m){if(w.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(w.charAt(0)=="-")return V(f(w.substring(1),m));if(0<=w.indexOf("-"))throw Error('number format error: interior "-" character');for(var y=h(Math.pow(m,8)),T=g,A=0;A<w.length;A+=8){var R=Math.min(8,w.length-A),E=parseInt(w.substring(A,A+R),m);8>R?(R=h(Math.pow(m,R)),T=T.j(R).add(h(E))):(T=T.j(y),T=T.add(h(E)))}return T}var g=c(0),_=c(1),b=c(16777216);t=a.prototype,t.m=function(){if(D(this))return-V(this).m();for(var w=0,m=1,y=0;y<this.g.length;y++){var T=this.i(y);w+=(0<=T?T:4294967296+T)*m,m*=4294967296}return w},t.toString=function(w){if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(P(this))return"0";if(D(this))return"-"+V(this).toString(w);for(var m=h(Math.pow(w,6)),y=this,T="";;){var A=W(y,m).g;y=j(y,A.j(m));var R=((0<y.g.length?y.g[0]:y.h)>>>0).toString(w);if(y=A,P(y))return R+T;for(;6>R.length;)R="0"+R;T=R+T}},t.i=function(w){return 0>w?0:w<this.g.length?this.g[w]:this.h};function P(w){if(w.h!=0)return!1;for(var m=0;m<w.g.length;m++)if(w.g[m]!=0)return!1;return!0}function D(w){return w.h==-1}t.l=function(w){return w=j(this,w),D(w)?-1:P(w)?0:1};function V(w){for(var m=w.g.length,y=[],T=0;T<m;T++)y[T]=~w.g[T];return new a(y,~w.h).add(_)}t.abs=function(){return D(this)?V(this):this},t.add=function(w){for(var m=Math.max(this.g.length,w.g.length),y=[],T=0,A=0;A<=m;A++){var R=T+(this.i(A)&65535)+(w.i(A)&65535),E=(R>>>16)+(this.i(A)>>>16)+(w.i(A)>>>16);T=E>>>16,R&=65535,E&=65535,y[A]=E<<16|R}return new a(y,y[y.length-1]&-2147483648?-1:0)};function j(w,m){return w.add(V(m))}t.j=function(w){if(P(this)||P(w))return g;if(D(this))return D(w)?V(this).j(V(w)):V(V(this).j(w));if(D(w))return V(this.j(V(w)));if(0>this.l(b)&&0>w.l(b))return h(this.m()*w.m());for(var m=this.g.length+w.g.length,y=[],T=0;T<2*m;T++)y[T]=0;for(T=0;T<this.g.length;T++)for(var A=0;A<w.g.length;A++){var R=this.i(T)>>>16,E=this.i(T)&65535,dt=w.i(A)>>>16,Lt=w.i(A)&65535;y[2*T+2*A]+=E*Lt,Q(y,2*T+2*A),y[2*T+2*A+1]+=R*Lt,Q(y,2*T+2*A+1),y[2*T+2*A+1]+=E*dt,Q(y,2*T+2*A+1),y[2*T+2*A+2]+=R*dt,Q(y,2*T+2*A+2)}for(T=0;T<m;T++)y[T]=y[2*T+1]<<16|y[2*T];for(T=m;T<2*m;T++)y[T]=0;return new a(y,0)};function Q(w,m){for(;(w[m]&65535)!=w[m];)w[m+1]+=w[m]>>>16,w[m]&=65535,m++}function J(w,m){this.g=w,this.h=m}function W(w,m){if(P(m))throw Error("division by zero");if(P(w))return new J(g,g);if(D(w))return m=W(V(w),m),new J(V(m.g),V(m.h));if(D(m))return m=W(w,V(m)),new J(V(m.g),m.h);if(30<w.g.length){if(D(w)||D(m))throw Error("slowDivide_ only works with positive integers.");for(var y=_,T=m;0>=T.l(w);)y=oe(y),T=oe(T);var A=ye(y,1),R=ye(T,1);for(T=ye(T,2),y=ye(y,2);!P(T);){var E=R.add(T);0>=E.l(w)&&(A=A.add(y),R=E),T=ye(T,1),y=ye(y,1)}return m=j(w,A.j(m)),new J(A,m)}for(A=g;0<=w.l(m);){for(y=Math.max(1,Math.floor(w.m()/m.m())),T=Math.ceil(Math.log(y)/Math.LN2),T=48>=T?1:Math.pow(2,T-48),R=h(y),E=R.j(m);D(E)||0<E.l(w);)y-=T,R=h(y),E=R.j(m);P(R)&&(R=_),A=A.add(R),w=j(w,E)}return new J(A,w)}t.A=function(w){return W(this,w).h},t.and=function(w){for(var m=Math.max(this.g.length,w.g.length),y=[],T=0;T<m;T++)y[T]=this.i(T)&w.i(T);return new a(y,this.h&w.h)},t.or=function(w){for(var m=Math.max(this.g.length,w.g.length),y=[],T=0;T<m;T++)y[T]=this.i(T)|w.i(T);return new a(y,this.h|w.h)},t.xor=function(w){for(var m=Math.max(this.g.length,w.g.length),y=[],T=0;T<m;T++)y[T]=this.i(T)^w.i(T);return new a(y,this.h^w.h)};function oe(w){for(var m=w.g.length+1,y=[],T=0;T<m;T++)y[T]=w.i(T)<<1|w.i(T-1)>>>31;return new a(y,w.h)}function ye(w,m){var y=m>>5;m%=32;for(var T=w.g.length-y,A=[],R=0;R<T;R++)A[R]=0<m?w.i(R+y)>>>m|w.i(R+y+1)<<32-m:w.i(R+y);return new a(A,w.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Kp=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=f,hr=a}).apply(typeof ed<"u"?ed:typeof self<"u"?self:typeof window<"u"?window:{});var $i=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Gp,Qp,Ss,Jp,Yi,hl,Xp,Yp,Zp;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,u,d){return o==Array.prototype||o==Object.prototype||(o[u]=d.value),o};function n(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof $i=="object"&&$i];for(var u=0;u<o.length;++u){var d=o[u];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function s(o,u){if(u)e:{var d=r;o=o.split(".");for(var p=0;p<o.length-1;p++){var S=o[p];if(!(S in d))break e;d=d[S]}o=o[o.length-1],p=d[o],u=u(p),u!=p&&u!=null&&e(d,o,{configurable:!0,writable:!0,value:u})}}function i(o,u){o instanceof String&&(o+="");var d=0,p=!1,S={next:function(){if(!p&&d<o.length){var C=d++;return{value:u(C,o[C]),done:!1}}return p=!0,{done:!0,value:void 0}}};return S[Symbol.iterator]=function(){return S},S}s("Array.prototype.values",function(o){return o||function(){return i(this,function(u,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function c(o){var u=typeof o;return u=u!="object"?u:o?Array.isArray(o)?"array":u:"null",u=="array"||u=="object"&&typeof o.length=="number"}function h(o){var u=typeof o;return u=="object"&&o!=null||u=="function"}function f(o,u,d){return o.call.apply(o.bind,arguments)}function g(o,u,d){if(!o)throw Error();if(2<arguments.length){var p=Array.prototype.slice.call(arguments,2);return function(){var S=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(S,p),o.apply(u,S)}}return function(){return o.apply(u,arguments)}}function _(o,u,d){return _=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:g,_.apply(null,arguments)}function b(o,u){var d=Array.prototype.slice.call(arguments,1);return function(){var p=d.slice();return p.push.apply(p,arguments),o.apply(this,p)}}function P(o,u){function d(){}d.prototype=u.prototype,o.aa=u.prototype,o.prototype=new d,o.prototype.constructor=o,o.Qb=function(p,S,C){for(var B=Array(arguments.length-2),Te=2;Te<arguments.length;Te++)B[Te-2]=arguments[Te];return u.prototype[S].apply(p,B)}}function D(o){const u=o.length;if(0<u){const d=Array(u);for(let p=0;p<u;p++)d[p]=o[p];return d}return[]}function V(o,u){for(let d=1;d<arguments.length;d++){const p=arguments[d];if(c(p)){const S=o.length||0,C=p.length||0;o.length=S+C;for(let B=0;B<C;B++)o[S+B]=p[B]}else o.push(p)}}class j{constructor(u,d){this.i=u,this.j=d,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function Q(o){return/^[\s\xa0]*$/.test(o)}function J(){var o=l.navigator;return o&&(o=o.userAgent)?o:""}function W(o){return W[" "](o),o}W[" "]=function(){};var oe=J().indexOf("Gecko")!=-1&&!(J().toLowerCase().indexOf("webkit")!=-1&&J().indexOf("Edge")==-1)&&!(J().indexOf("Trident")!=-1||J().indexOf("MSIE")!=-1)&&J().indexOf("Edge")==-1;function ye(o,u,d){for(const p in o)u.call(d,o[p],p,o)}function w(o,u){for(const d in o)u.call(void 0,o[d],d,o)}function m(o){const u={};for(const d in o)u[d]=o[d];return u}const y="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function T(o,u){let d,p;for(let S=1;S<arguments.length;S++){p=arguments[S];for(d in p)o[d]=p[d];for(let C=0;C<y.length;C++)d=y[C],Object.prototype.hasOwnProperty.call(p,d)&&(o[d]=p[d])}}function A(o){var u=1;o=o.split(":");const d=[];for(;0<u&&o.length;)d.push(o.shift()),u--;return o.length&&d.push(o.join(":")),d}function R(o){l.setTimeout(()=>{throw o},0)}function E(){var o=Dt;let u=null;return o.g&&(u=o.g,o.g=o.g.next,o.g||(o.h=null),u.next=null),u}class dt{constructor(){this.h=this.g=null}add(u,d){const p=Lt.get();p.set(u,d),this.h?this.h.next=p:this.g=p,this.h=p}}var Lt=new j(()=>new Pe,o=>o.reset());class Pe{constructor(){this.next=this.g=this.h=null}set(u,d){this.h=u,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let le,fe=!1,Dt=new dt,Gn=()=>{const o=l.Promise.resolve(void 0);le=()=>{o.then(Jt)}};var Jt=()=>{for(var o;o=E();){try{o.h.call(o.g)}catch(d){R(d)}var u=Lt;u.j(o),100>u.h&&(u.h++,o.next=u.g,u.g=o)}fe=!1};function Fe(){this.s=this.s,this.C=this.C}Fe.prototype.s=!1,Fe.prototype.ma=function(){this.s||(this.s=!0,this.N())},Fe.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ue(o,u){this.type=o,this.g=this.target=u,this.defaultPrevented=!1}Ue.prototype.h=function(){this.defaultPrevented=!0};var ia=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var o=!1,u=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const d=()=>{};l.addEventListener("test",d,u),l.removeEventListener("test",d,u)}catch{}return o}();function Qn(o,u){if(Ue.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var d=this.type=o.type,p=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=u,u=o.relatedTarget){if(oe){e:{try{W(u.nodeName);var S=!0;break e}catch{}S=!1}S||(u=null)}}else d=="mouseover"?u=o.fromElement:d=="mouseout"&&(u=o.toElement);this.relatedTarget=u,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:Jn[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&Qn.aa.h.call(this)}}P(Qn,Ue);var Jn={2:"touch",3:"pen",4:"mouse"};Qn.prototype.h=function(){Qn.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var Xt="closure_listenable_"+(1e6*Math.random()|0),cs=0;function yi(o,u,d,p,S){this.listener=o,this.proxy=null,this.src=u,this.type=d,this.capture=!!p,this.ha=S,this.key=++cs,this.da=this.fa=!1}function Ft(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function Xn(o){this.src=o,this.g={},this.h=0}Xn.prototype.add=function(o,u,d,p,S){var C=o.toString();o=this.g[C],o||(o=this.g[C]=[],this.h++);var B=v(o,u,p,S);return-1<B?(u=o[B],d||(u.fa=!1)):(u=new yi(u,this.src,C,!!p,S),u.fa=d,o.push(u)),u};function Ir(o,u){var d=u.type;if(d in o.g){var p=o.g[d],S=Array.prototype.indexOf.call(p,u,void 0),C;(C=0<=S)&&Array.prototype.splice.call(p,S,1),C&&(Ft(u),o.g[d].length==0&&(delete o.g[d],o.h--))}}function v(o,u,d,p){for(var S=0;S<o.length;++S){var C=o[S];if(!C.da&&C.listener==u&&C.capture==!!d&&C.ha==p)return S}return-1}var I="closure_lm_"+(1e6*Math.random()|0),k={};function L(o,u,d,p,S){if(Array.isArray(u)){for(var C=0;C<u.length;C++)L(o,u[C],d,p,S);return null}return d=X(d),o&&o[Xt]?o.K(u,d,h(p)?!!p.capture:!!p,S):N(o,u,d,!1,p,S)}function N(o,u,d,p,S,C){if(!u)throw Error("Invalid event type");var B=h(S)?!!S.capture:!!S,Te=Z(o);if(Te||(o[I]=Te=new Xn(o)),d=Te.add(u,d,p,B,C),d.proxy)return d;if(p=M(),d.proxy=p,p.src=o,p.listener=d,o.addEventListener)ia||(S=B),S===void 0&&(S=!1),o.addEventListener(u.toString(),p,S);else if(o.attachEvent)o.attachEvent(U(u.toString()),p);else if(o.addListener&&o.removeListener)o.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return d}function M(){function o(d){return u.call(o.src,o.listener,d)}const u=F;return o}function q(o,u,d,p,S){if(Array.isArray(u))for(var C=0;C<u.length;C++)q(o,u[C],d,p,S);else p=h(p)?!!p.capture:!!p,d=X(d),o&&o[Xt]?(o=o.i,u=String(u).toString(),u in o.g&&(C=o.g[u],d=v(C,d,p,S),-1<d&&(Ft(C[d]),Array.prototype.splice.call(C,d,1),C.length==0&&(delete o.g[u],o.h--)))):o&&(o=Z(o))&&(u=o.g[u.toString()],o=-1,u&&(o=v(u,d,p,S)),(d=-1<o?u[o]:null)&&$(d))}function $(o){if(typeof o!="number"&&o&&!o.da){var u=o.src;if(u&&u[Xt])Ir(u.i,o);else{var d=o.type,p=o.proxy;u.removeEventListener?u.removeEventListener(d,p,o.capture):u.detachEvent?u.detachEvent(U(d),p):u.addListener&&u.removeListener&&u.removeListener(p),(d=Z(u))?(Ir(d,o),d.h==0&&(d.src=null,u[I]=null)):Ft(o)}}}function U(o){return o in k?k[o]:k[o]="on"+o}function F(o,u){if(o.da)o=!0;else{u=new Qn(u,this);var d=o.listener,p=o.ha||o.src;o.fa&&$(o),o=d.call(p,u)}return o}function Z(o){return o=o[I],o instanceof Xn?o:null}var H="__closure_events_fn_"+(1e9*Math.random()>>>0);function X(o){return typeof o=="function"?o:(o[H]||(o[H]=function(u){return o.handleEvent(u)}),o[H])}function K(){Fe.call(this),this.i=new Xn(this),this.M=this,this.F=null}P(K,Fe),K.prototype[Xt]=!0,K.prototype.removeEventListener=function(o,u,d,p){q(this,o,u,d,p)};function ee(o,u){var d,p=o.F;if(p)for(d=[];p;p=p.F)d.push(p);if(o=o.M,p=u.type||u,typeof u=="string")u=new Ue(u,o);else if(u instanceof Ue)u.target=u.target||o;else{var S=u;u=new Ue(p,o),T(u,S)}if(S=!0,d)for(var C=d.length-1;0<=C;C--){var B=u.g=d[C];S=ve(B,p,!0,u)&&S}if(B=u.g=o,S=ve(B,p,!0,u)&&S,S=ve(B,p,!1,u)&&S,d)for(C=0;C<d.length;C++)B=u.g=d[C],S=ve(B,p,!1,u)&&S}K.prototype.N=function(){if(K.aa.N.call(this),this.i){var o=this.i,u;for(u in o.g){for(var d=o.g[u],p=0;p<d.length;p++)Ft(d[p]);delete o.g[u],o.h--}}this.F=null},K.prototype.K=function(o,u,d,p){return this.i.add(String(o),u,!1,d,p)},K.prototype.L=function(o,u,d,p){return this.i.add(String(o),u,!0,d,p)};function ve(o,u,d,p){if(u=o.i.g[String(u)],!u)return!0;u=u.concat();for(var S=!0,C=0;C<u.length;++C){var B=u[C];if(B&&!B.da&&B.capture==d){var Te=B.listener,Ke=B.ha||B.src;B.fa&&Ir(o.i,B),S=Te.call(Ke,p)!==!1&&S}}return S&&!p.defaultPrevented}function pe(o,u,d){if(typeof o=="function")d&&(o=_(o,d));else if(o&&typeof o.handleEvent=="function")o=_(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:l.setTimeout(o,u||0)}function et(o){o.g=pe(()=>{o.g=null,o.i&&(o.i=!1,et(o))},o.l);const u=o.h;o.h=null,o.m.apply(null,u)}class Be extends Fe{constructor(u,d){super(),this.m=u,this.l=d,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:et(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ze(o){Fe.call(this),this.h=o,this.g={}}P(ze,Fe);var tt=[];function yn(o){ye(o.g,function(u,d){this.g.hasOwnProperty(d)&&$(u)},o),o.g={}}ze.prototype.N=function(){ze.aa.N.call(this),yn(this)},ze.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var wr=l.JSON.stringify,ft=l.JSON.parse,Pt=class{stringify(o){return l.JSON.stringify(o,void 0)}parse(o){return l.JSON.parse(o,void 0)}};function Ar(){}Ar.prototype.h=null;function Yc(o){return o.h||(o.h=o.i())}function Zc(){}var us={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function oa(){Ue.call(this,"d")}P(oa,Ue);function aa(){Ue.call(this,"c")}P(aa,Ue);var Yn={},eu=null;function vi(){return eu=eu||new K}Yn.La="serverreachability";function tu(o){Ue.call(this,Yn.La,o)}P(tu,Ue);function hs(o){const u=vi();ee(u,new tu(u))}Yn.STAT_EVENT="statevent";function nu(o,u){Ue.call(this,Yn.STAT_EVENT,o),this.stat=u}P(nu,Ue);function pt(o){const u=vi();ee(u,new nu(u,o))}Yn.Ma="timingevent";function ru(o,u){Ue.call(this,Yn.Ma,o),this.size=u}P(ru,Ue);function ds(o,u){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){o()},u)}function fs(){this.g=!0}fs.prototype.xa=function(){this.g=!1};function Im(o,u,d,p,S,C){o.info(function(){if(o.g)if(C)for(var B="",Te=C.split("&"),Ke=0;Ke<Te.length;Ke++){var ge=Te[Ke].split("=");if(1<ge.length){var nt=ge[0];ge=ge[1];var rt=nt.split("_");B=2<=rt.length&&rt[1]=="type"?B+(nt+"="+ge+"&"):B+(nt+"=redacted&")}}else B=null;else B=C;return"XMLHTTP REQ ("+p+") [attempt "+S+"]: "+u+`
`+d+`
`+B})}function wm(o,u,d,p,S,C,B){o.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+S+"]: "+u+`
`+d+`
`+C+" "+B})}function br(o,u,d,p){o.info(function(){return"XMLHTTP TEXT ("+u+"): "+bm(o,d)+(p?" "+p:"")})}function Am(o,u){o.info(function(){return"TIMEOUT: "+u})}fs.prototype.info=function(){};function bm(o,u){if(!o.g)return u;if(!u)return null;try{var d=JSON.parse(u);if(d){for(o=0;o<d.length;o++)if(Array.isArray(d[o])){var p=d[o];if(!(2>p.length)){var S=p[1];if(Array.isArray(S)&&!(1>S.length)){var C=S[0];if(C!="noop"&&C!="stop"&&C!="close")for(var B=1;B<S.length;B++)S[B]=""}}}}return wr(d)}catch{return u}}var Ei={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},su={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},la;function Ti(){}P(Ti,Ar),Ti.prototype.g=function(){return new XMLHttpRequest},Ti.prototype.i=function(){return{}},la=new Ti;function vn(o,u,d,p){this.j=o,this.i=u,this.l=d,this.R=p||1,this.U=new ze(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new iu}function iu(){this.i=null,this.g="",this.h=!1}var ou={},ca={};function ua(o,u,d){o.L=1,o.v=bi(Yt(u)),o.m=d,o.P=!0,au(o,null)}function au(o,u){o.F=Date.now(),Ii(o),o.A=Yt(o.v);var d=o.A,p=o.R;Array.isArray(p)||(p=[String(p)]),Tu(d.i,"t",p),o.C=0,d=o.j.J,o.h=new iu,o.g=Uu(o.j,d?u:null,!o.m),0<o.O&&(o.M=new Be(_(o.Y,o,o.g),o.O)),u=o.U,d=o.g,p=o.ca;var S="readystatechange";Array.isArray(S)||(S&&(tt[0]=S.toString()),S=tt);for(var C=0;C<S.length;C++){var B=L(d,S[C],p||u.handleEvent,!1,u.h||u);if(!B)break;u.g[B.key]=B}u=o.H?m(o.H):{},o.m?(o.u||(o.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,u)):(o.u="GET",o.g.ea(o.A,o.u,null,u)),hs(),Im(o.i,o.u,o.A,o.l,o.R,o.m)}vn.prototype.ca=function(o){o=o.target;const u=this.M;u&&Zt(o)==3?u.j():this.Y(o)},vn.prototype.Y=function(o){try{if(o==this.g)e:{const rt=Zt(this.g);var u=this.g.Ba();const Pr=this.g.Z();if(!(3>rt)&&(rt!=3||this.g&&(this.h.h||this.g.oa()||Pu(this.g)))){this.J||rt!=4||u==7||(u==8||0>=Pr?hs(3):hs(2)),ha(this);var d=this.g.Z();this.X=d;t:if(lu(this)){var p=Pu(this.g);o="";var S=p.length,C=Zt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Zn(this),ps(this);var B="";break t}this.h.i=new l.TextDecoder}for(u=0;u<S;u++)this.h.h=!0,o+=this.h.i.decode(p[u],{stream:!(C&&u==S-1)});p.length=0,this.h.g+=o,this.C=0,B=this.h.g}else B=this.g.oa();if(this.o=d==200,wm(this.i,this.u,this.A,this.l,this.R,rt,d),this.o){if(this.T&&!this.K){t:{if(this.g){var Te,Ke=this.g;if((Te=Ke.g?Ke.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Q(Te)){var ge=Te;break t}}ge=null}if(d=ge)br(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,da(this,d);else{this.o=!1,this.s=3,pt(12),Zn(this),ps(this);break e}}if(this.P){d=!0;let Vt;for(;!this.J&&this.C<B.length;)if(Vt=Rm(this,B),Vt==ca){rt==4&&(this.s=4,pt(14),d=!1),br(this.i,this.l,null,"[Incomplete Response]");break}else if(Vt==ou){this.s=4,pt(15),br(this.i,this.l,B,"[Invalid Chunk]"),d=!1;break}else br(this.i,this.l,Vt,null),da(this,Vt);if(lu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),rt!=4||B.length!=0||this.h.h||(this.s=1,pt(16),d=!1),this.o=this.o&&d,!d)br(this.i,this.l,B,"[Invalid Chunked Response]"),Zn(this),ps(this);else if(0<B.length&&!this.W){this.W=!0;var nt=this.j;nt.g==this&&nt.ba&&!nt.M&&(nt.j.info("Great, no buffering proxy detected. Bytes received: "+B.length),ya(nt),nt.M=!0,pt(11))}}else br(this.i,this.l,B,null),da(this,B);rt==4&&Zn(this),this.o&&!this.J&&(rt==4?xu(this.j,this):(this.o=!1,Ii(this)))}else qm(this.g),d==400&&0<B.indexOf("Unknown SID")?(this.s=3,pt(12)):(this.s=0,pt(13)),Zn(this),ps(this)}}}catch{}finally{}};function lu(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function Rm(o,u){var d=o.C,p=u.indexOf(`
`,d);return p==-1?ca:(d=Number(u.substring(d,p)),isNaN(d)?ou:(p+=1,p+d>u.length?ca:(u=u.slice(p,p+d),o.C=p+d,u)))}vn.prototype.cancel=function(){this.J=!0,Zn(this)};function Ii(o){o.S=Date.now()+o.I,cu(o,o.I)}function cu(o,u){if(o.B!=null)throw Error("WatchDog timer not null");o.B=ds(_(o.ba,o),u)}function ha(o){o.B&&(l.clearTimeout(o.B),o.B=null)}vn.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(Am(this.i,this.A),this.L!=2&&(hs(),pt(17)),Zn(this),this.s=2,ps(this)):cu(this,this.S-o)};function ps(o){o.j.G==0||o.J||xu(o.j,o)}function Zn(o){ha(o);var u=o.M;u&&typeof u.ma=="function"&&u.ma(),o.M=null,yn(o.U),o.g&&(u=o.g,o.g=null,u.abort(),u.ma())}function da(o,u){try{var d=o.j;if(d.G!=0&&(d.g==o||fa(d.h,o))){if(!o.K&&fa(d.h,o)&&d.G==3){try{var p=d.Da.g.parse(u)}catch{p=null}if(Array.isArray(p)&&p.length==3){var S=p;if(S[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<o.F)ki(d),Pi(d);else break e;_a(d),pt(18)}}else d.za=S[1],0<d.za-d.T&&37500>S[2]&&d.F&&d.v==0&&!d.C&&(d.C=ds(_(d.Za,d),6e3));if(1>=du(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else tr(d,11)}else if((o.K||d.g==o)&&ki(d),!Q(u))for(S=d.Da.g.parse(u),u=0;u<S.length;u++){let ge=S[u];if(d.T=ge[0],ge=ge[1],d.G==2)if(ge[0]=="c"){d.K=ge[1],d.ia=ge[2];const nt=ge[3];nt!=null&&(d.la=nt,d.j.info("VER="+d.la));const rt=ge[4];rt!=null&&(d.Aa=rt,d.j.info("SVER="+d.Aa));const Pr=ge[5];Pr!=null&&typeof Pr=="number"&&0<Pr&&(p=1.5*Pr,d.L=p,d.j.info("backChannelRequestTimeoutMs_="+p)),p=d;const Vt=o.g;if(Vt){const Vi=Vt.g?Vt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Vi){var C=p.h;C.g||Vi.indexOf("spdy")==-1&&Vi.indexOf("quic")==-1&&Vi.indexOf("h2")==-1||(C.j=C.l,C.g=new Set,C.h&&(pa(C,C.h),C.h=null))}if(p.D){const va=Vt.g?Vt.g.getResponseHeader("X-HTTP-Session-Id"):null;va&&(p.ya=va,be(p.I,p.D,va))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-o.F,d.j.info("Handshake RTT: "+d.R+"ms")),p=d;var B=o;if(p.qa=Fu(p,p.J?p.ia:null,p.W),B.K){fu(p.h,B);var Te=B,Ke=p.L;Ke&&(Te.I=Ke),Te.B&&(ha(Te),Ii(Te)),p.g=B}else Ou(p);0<d.i.length&&Ci(d)}else ge[0]!="stop"&&ge[0]!="close"||tr(d,7);else d.G==3&&(ge[0]=="stop"||ge[0]=="close"?ge[0]=="stop"?tr(d,7):ma(d):ge[0]!="noop"&&d.l&&d.l.ta(ge),d.v=0)}}hs(4)}catch{}}var Sm=class{constructor(o,u){this.g=o,this.map=u}};function uu(o){this.l=o||10,l.PerformanceNavigationTiming?(o=l.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function hu(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function du(o){return o.h?1:o.g?o.g.size:0}function fa(o,u){return o.h?o.h==u:o.g?o.g.has(u):!1}function pa(o,u){o.g?o.g.add(u):o.h=u}function fu(o,u){o.h&&o.h==u?o.h=null:o.g&&o.g.has(u)&&o.g.delete(u)}uu.prototype.cancel=function(){if(this.i=pu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function pu(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let u=o.i;for(const d of o.g.values())u=u.concat(d.D);return u}return D(o.i)}function Pm(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(c(o)){for(var u=[],d=o.length,p=0;p<d;p++)u.push(o[p]);return u}u=[],d=0;for(p in o)u[d++]=o[p];return u}function Cm(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(c(o)||typeof o=="string"){var u=[];o=o.length;for(var d=0;d<o;d++)u.push(d);return u}u=[],d=0;for(const p in o)u[d++]=p;return u}}}function gu(o,u){if(o.forEach&&typeof o.forEach=="function")o.forEach(u,void 0);else if(c(o)||typeof o=="string")Array.prototype.forEach.call(o,u,void 0);else for(var d=Cm(o),p=Pm(o),S=p.length,C=0;C<S;C++)u.call(void 0,p[C],d&&d[C],o)}var mu=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function km(o,u){if(o){o=o.split("&");for(var d=0;d<o.length;d++){var p=o[d].indexOf("="),S=null;if(0<=p){var C=o[d].substring(0,p);S=o[d].substring(p+1)}else C=o[d];u(C,S?decodeURIComponent(S.replace(/\+/g," ")):"")}}}function er(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof er){this.h=o.h,wi(this,o.j),this.o=o.o,this.g=o.g,Ai(this,o.s),this.l=o.l;var u=o.i,d=new _s;d.i=u.i,u.g&&(d.g=new Map(u.g),d.h=u.h),_u(this,d),this.m=o.m}else o&&(u=String(o).match(mu))?(this.h=!1,wi(this,u[1]||"",!0),this.o=gs(u[2]||""),this.g=gs(u[3]||"",!0),Ai(this,u[4]),this.l=gs(u[5]||"",!0),_u(this,u[6]||"",!0),this.m=gs(u[7]||"")):(this.h=!1,this.i=new _s(null,this.h))}er.prototype.toString=function(){var o=[],u=this.j;u&&o.push(ms(u,yu,!0),":");var d=this.g;return(d||u=="file")&&(o.push("//"),(u=this.o)&&o.push(ms(u,yu,!0),"@"),o.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&o.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&o.push("/"),o.push(ms(d,d.charAt(0)=="/"?Om:Vm,!0))),(d=this.i.toString())&&o.push("?",d),(d=this.m)&&o.push("#",ms(d,xm)),o.join("")};function Yt(o){return new er(o)}function wi(o,u,d){o.j=d?gs(u,!0):u,o.j&&(o.j=o.j.replace(/:$/,""))}function Ai(o,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);o.s=u}else o.s=null}function _u(o,u,d){u instanceof _s?(o.i=u,Mm(o.i,o.h)):(d||(u=ms(u,Nm)),o.i=new _s(u,o.h))}function be(o,u,d){o.i.set(u,d)}function bi(o){return be(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function gs(o,u){return o?u?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function ms(o,u,d){return typeof o=="string"?(o=encodeURI(o).replace(u,Dm),d&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function Dm(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var yu=/[#\/\?@]/g,Vm=/[#\?:]/g,Om=/[#\?]/g,Nm=/[#\?@]/g,xm=/#/g;function _s(o,u){this.h=this.g=null,this.i=o||null,this.j=!!u}function En(o){o.g||(o.g=new Map,o.h=0,o.i&&km(o.i,function(u,d){o.add(decodeURIComponent(u.replace(/\+/g," ")),d)}))}t=_s.prototype,t.add=function(o,u){En(this),this.i=null,o=Rr(this,o);var d=this.g.get(o);return d||this.g.set(o,d=[]),d.push(u),this.h+=1,this};function vu(o,u){En(o),u=Rr(o,u),o.g.has(u)&&(o.i=null,o.h-=o.g.get(u).length,o.g.delete(u))}function Eu(o,u){return En(o),u=Rr(o,u),o.g.has(u)}t.forEach=function(o,u){En(this),this.g.forEach(function(d,p){d.forEach(function(S){o.call(u,S,p,this)},this)},this)},t.na=function(){En(this);const o=Array.from(this.g.values()),u=Array.from(this.g.keys()),d=[];for(let p=0;p<u.length;p++){const S=o[p];for(let C=0;C<S.length;C++)d.push(u[p])}return d},t.V=function(o){En(this);let u=[];if(typeof o=="string")Eu(this,o)&&(u=u.concat(this.g.get(Rr(this,o))));else{o=Array.from(this.g.values());for(let d=0;d<o.length;d++)u=u.concat(o[d])}return u},t.set=function(o,u){return En(this),this.i=null,o=Rr(this,o),Eu(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[u]),this.h+=1,this},t.get=function(o,u){return o?(o=this.V(o),0<o.length?String(o[0]):u):u};function Tu(o,u,d){vu(o,u),0<d.length&&(o.i=null,o.g.set(Rr(o,u),D(d)),o.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],u=Array.from(this.g.keys());for(var d=0;d<u.length;d++){var p=u[d];const C=encodeURIComponent(String(p)),B=this.V(p);for(p=0;p<B.length;p++){var S=C;B[p]!==""&&(S+="="+encodeURIComponent(String(B[p]))),o.push(S)}}return this.i=o.join("&")};function Rr(o,u){return u=String(u),o.j&&(u=u.toLowerCase()),u}function Mm(o,u){u&&!o.j&&(En(o),o.i=null,o.g.forEach(function(d,p){var S=p.toLowerCase();p!=S&&(vu(this,p),Tu(this,S,d))},o)),o.j=u}function Lm(o,u){const d=new fs;if(l.Image){const p=new Image;p.onload=b(Tn,d,"TestLoadImage: loaded",!0,u,p),p.onerror=b(Tn,d,"TestLoadImage: error",!1,u,p),p.onabort=b(Tn,d,"TestLoadImage: abort",!1,u,p),p.ontimeout=b(Tn,d,"TestLoadImage: timeout",!1,u,p),l.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=o}else u(!1)}function Fm(o,u){const d=new fs,p=new AbortController,S=setTimeout(()=>{p.abort(),Tn(d,"TestPingServer: timeout",!1,u)},1e4);fetch(o,{signal:p.signal}).then(C=>{clearTimeout(S),C.ok?Tn(d,"TestPingServer: ok",!0,u):Tn(d,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(S),Tn(d,"TestPingServer: error",!1,u)})}function Tn(o,u,d,p,S){try{S&&(S.onload=null,S.onerror=null,S.onabort=null,S.ontimeout=null),p(d)}catch{}}function Um(){this.g=new Pt}function $m(o,u,d){const p=d||"";try{gu(o,function(S,C){let B=S;h(S)&&(B=wr(S)),u.push(p+C+"="+encodeURIComponent(B))})}catch(S){throw u.push(p+"type="+encodeURIComponent("_badmap")),S}}function ys(o){this.l=o.Ub||null,this.j=o.eb||!1}P(ys,Ar),ys.prototype.g=function(){return new Ri(this.l,this.j)},ys.prototype.i=function(o){return function(){return o}}({});function Ri(o,u){K.call(this),this.D=o,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}P(Ri,K),t=Ri.prototype,t.open=function(o,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=u,this.readyState=1,Es(this)},t.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(u.body=o),(this.D||l).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,vs(this)),this.readyState=0},t.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,Es(this)),this.g&&(this.readyState=3,Es(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Iu(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function Iu(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}t.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var u=o.value?o.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!o.done}))&&(this.response=this.responseText+=u)}o.done?vs(this):Es(this),this.readyState==3&&Iu(this)}},t.Ra=function(o){this.g&&(this.response=this.responseText=o,vs(this))},t.Qa=function(o){this.g&&(this.response=o,vs(this))},t.ga=function(){this.g&&vs(this)};function vs(o){o.readyState=4,o.l=null,o.j=null,o.v=null,Es(o)}t.setRequestHeader=function(o,u){this.u.append(o,u)},t.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],u=this.h.entries();for(var d=u.next();!d.done;)d=d.value,o.push(d[0]+": "+d[1]),d=u.next();return o.join(`\r
`)};function Es(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(Ri.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function wu(o){let u="";return ye(o,function(d,p){u+=p,u+=":",u+=d,u+=`\r
`}),u}function ga(o,u,d){e:{for(p in d){var p=!1;break e}p=!0}p||(d=wu(d),typeof o=="string"?d!=null&&encodeURIComponent(String(d)):be(o,u,d))}function De(o){K.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}P(De,K);var Bm=/^https?$/i,jm=["POST","PUT"];t=De.prototype,t.Ha=function(o){this.J=o},t.ea=function(o,u,d,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);u=u?u.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():la.g(),this.v=this.o?Yc(this.o):Yc(la),this.g.onreadystatechange=_(this.Ea,this);try{this.B=!0,this.g.open(u,String(o),!0),this.B=!1}catch(C){Au(this,C);return}if(o=d||"",d=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var S in p)d.set(S,p[S]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const C of p.keys())d.set(C,p.get(C));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(d.keys()).find(C=>C.toLowerCase()=="content-type"),S=l.FormData&&o instanceof l.FormData,!(0<=Array.prototype.indexOf.call(jm,u,void 0))||p||S||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[C,B]of d)this.g.setRequestHeader(C,B);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Su(this),this.u=!0,this.g.send(o),this.u=!1}catch(C){Au(this,C)}};function Au(o,u){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=u,o.m=5,bu(o),Si(o)}function bu(o){o.A||(o.A=!0,ee(o,"complete"),ee(o,"error"))}t.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,ee(this,"complete"),ee(this,"abort"),Si(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Si(this,!0)),De.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Ru(this):this.bb())},t.bb=function(){Ru(this)};function Ru(o){if(o.h&&typeof a<"u"&&(!o.v[1]||Zt(o)!=4||o.Z()!=2)){if(o.u&&Zt(o)==4)pe(o.Ea,0,o);else if(ee(o,"readystatechange"),Zt(o)==4){o.h=!1;try{const B=o.Z();e:switch(B){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var d;if(!(d=u)){var p;if(p=B===0){var S=String(o.D).match(mu)[1]||null;!S&&l.self&&l.self.location&&(S=l.self.location.protocol.slice(0,-1)),p=!Bm.test(S?S.toLowerCase():"")}d=p}if(d)ee(o,"complete"),ee(o,"success");else{o.m=6;try{var C=2<Zt(o)?o.g.statusText:""}catch{C=""}o.l=C+" ["+o.Z()+"]",bu(o)}}finally{Si(o)}}}}function Si(o,u){if(o.g){Su(o);const d=o.g,p=o.v[0]?()=>{}:null;o.g=null,o.v=null,u||ee(o,"ready");try{d.onreadystatechange=p}catch{}}}function Su(o){o.I&&(l.clearTimeout(o.I),o.I=null)}t.isActive=function(){return!!this.g};function Zt(o){return o.g?o.g.readyState:0}t.Z=function(){try{return 2<Zt(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(o){if(this.g){var u=this.g.responseText;return o&&u.indexOf(o)==0&&(u=u.substring(o.length)),ft(u)}};function Pu(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function qm(o){const u={};o=(o.g&&2<=Zt(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<o.length;p++){if(Q(o[p]))continue;var d=A(o[p]);const S=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const C=u[S]||[];u[S]=C,C.push(d)}w(u,function(p){return p.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ts(o,u,d){return d&&d.internalChannelParams&&d.internalChannelParams[o]||u}function Cu(o){this.Aa=0,this.i=[],this.j=new fs,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ts("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ts("baseRetryDelayMs",5e3,o),this.cb=Ts("retryDelaySeedMs",1e4,o),this.Wa=Ts("forwardChannelMaxRetries",2,o),this.wa=Ts("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new uu(o&&o.concurrentRequestLimit),this.Da=new Um,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Cu.prototype,t.la=8,t.G=1,t.connect=function(o,u,d,p){pt(0),this.W=o,this.H=u||{},d&&p!==void 0&&(this.H.OSID=d,this.H.OAID=p),this.F=this.X,this.I=Fu(this,null,this.W),Ci(this)};function ma(o){if(ku(o),o.G==3){var u=o.U++,d=Yt(o.I);if(be(d,"SID",o.K),be(d,"RID",u),be(d,"TYPE","terminate"),Is(o,d),u=new vn(o,o.j,u),u.L=2,u.v=bi(Yt(d)),d=!1,l.navigator&&l.navigator.sendBeacon)try{d=l.navigator.sendBeacon(u.v.toString(),"")}catch{}!d&&l.Image&&(new Image().src=u.v,d=!0),d||(u.g=Uu(u.j,null),u.g.ea(u.v)),u.F=Date.now(),Ii(u)}Lu(o)}function Pi(o){o.g&&(ya(o),o.g.cancel(),o.g=null)}function ku(o){Pi(o),o.u&&(l.clearTimeout(o.u),o.u=null),ki(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&l.clearTimeout(o.s),o.s=null)}function Ci(o){if(!hu(o.h)&&!o.s){o.s=!0;var u=o.Ga;le||Gn(),fe||(le(),fe=!0),Dt.add(u,o),o.B=0}}function Hm(o,u){return du(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=u.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=ds(_(o.Ga,o,u),Mu(o,o.B)),o.B++,!0)}t.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const S=new vn(this,this.j,o);let C=this.o;if(this.S&&(C?(C=m(C),T(C,this.S)):C=this.S),this.m!==null||this.O||(S.H=C,C=null),this.P)e:{for(var u=0,d=0;d<this.i.length;d++){t:{var p=this.i[d];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(u+=p,4096<u){u=d;break e}if(u===4096||d===this.i.length-1){u=d+1;break e}}u=1e3}else u=1e3;u=Vu(this,S,u),d=Yt(this.I),be(d,"RID",o),be(d,"CVER",22),this.D&&be(d,"X-HTTP-Session-Id",this.D),Is(this,d),C&&(this.O?u="headers="+encodeURIComponent(String(wu(C)))+"&"+u:this.m&&ga(d,this.m,C)),pa(this.h,S),this.Ua&&be(d,"TYPE","init"),this.P?(be(d,"$req",u),be(d,"SID","null"),S.T=!0,ua(S,d,null)):ua(S,d,u),this.G=2}}else this.G==3&&(o?Du(this,o):this.i.length==0||hu(this.h)||Du(this))};function Du(o,u){var d;u?d=u.l:d=o.U++;const p=Yt(o.I);be(p,"SID",o.K),be(p,"RID",d),be(p,"AID",o.T),Is(o,p),o.m&&o.o&&ga(p,o.m,o.o),d=new vn(o,o.j,d,o.B+1),o.m===null&&(d.H=o.o),u&&(o.i=u.D.concat(o.i)),u=Vu(o,d,1e3),d.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),pa(o.h,d),ua(d,p,u)}function Is(o,u){o.H&&ye(o.H,function(d,p){be(u,p,d)}),o.l&&gu({},function(d,p){be(u,p,d)})}function Vu(o,u,d){d=Math.min(o.i.length,d);var p=o.l?_(o.l.Na,o.l,o):null;e:{var S=o.i;let C=-1;for(;;){const B=["count="+d];C==-1?0<d?(C=S[0].g,B.push("ofs="+C)):C=0:B.push("ofs="+C);let Te=!0;for(let Ke=0;Ke<d;Ke++){let ge=S[Ke].g;const nt=S[Ke].map;if(ge-=C,0>ge)C=Math.max(0,S[Ke].g-100),Te=!1;else try{$m(nt,B,"req"+ge+"_")}catch{p&&p(nt)}}if(Te){p=B.join("&");break e}}}return o=o.i.splice(0,d),u.D=o,p}function Ou(o){if(!o.g&&!o.u){o.Y=1;var u=o.Fa;le||Gn(),fe||(le(),fe=!0),Dt.add(u,o),o.v=0}}function _a(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=ds(_(o.Fa,o),Mu(o,o.v)),o.v++,!0)}t.Fa=function(){if(this.u=null,Nu(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=ds(_(this.ab,this),o)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,pt(10),Pi(this),Nu(this))};function ya(o){o.A!=null&&(l.clearTimeout(o.A),o.A=null)}function Nu(o){o.g=new vn(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var u=Yt(o.qa);be(u,"RID","rpc"),be(u,"SID",o.K),be(u,"AID",o.T),be(u,"CI",o.F?"0":"1"),!o.F&&o.ja&&be(u,"TO",o.ja),be(u,"TYPE","xmlhttp"),Is(o,u),o.m&&o.o&&ga(u,o.m,o.o),o.L&&(o.g.I=o.L);var d=o.g;o=o.ia,d.L=1,d.v=bi(Yt(u)),d.m=null,d.P=!0,au(d,o)}t.Za=function(){this.C!=null&&(this.C=null,Pi(this),_a(this),pt(19))};function ki(o){o.C!=null&&(l.clearTimeout(o.C),o.C=null)}function xu(o,u){var d=null;if(o.g==u){ki(o),ya(o),o.g=null;var p=2}else if(fa(o.h,u))d=u.D,fu(o.h,u),p=1;else return;if(o.G!=0){if(u.o)if(p==1){d=u.m?u.m.length:0,u=Date.now()-u.F;var S=o.B;p=vi(),ee(p,new ru(p,d)),Ci(o)}else Ou(o);else if(S=u.s,S==3||S==0&&0<u.X||!(p==1&&Hm(o,u)||p==2&&_a(o)))switch(d&&0<d.length&&(u=o.h,u.i=u.i.concat(d)),S){case 1:tr(o,5);break;case 4:tr(o,10);break;case 3:tr(o,6);break;default:tr(o,2)}}}function Mu(o,u){let d=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(d*=2),d*u}function tr(o,u){if(o.j.info("Error code "+u),u==2){var d=_(o.fb,o),p=o.Xa;const S=!p;p=new er(p||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||wi(p,"https"),bi(p),S?Lm(p.toString(),d):Fm(p.toString(),d)}else pt(2);o.G=0,o.l&&o.l.sa(u),Lu(o),ku(o)}t.fb=function(o){o?(this.j.info("Successfully pinged google.com"),pt(2)):(this.j.info("Failed to ping google.com"),pt(1))};function Lu(o){if(o.G=0,o.ka=[],o.l){const u=pu(o.h);(u.length!=0||o.i.length!=0)&&(V(o.ka,u),V(o.ka,o.i),o.h.i.length=0,D(o.i),o.i.length=0),o.l.ra()}}function Fu(o,u,d){var p=d instanceof er?Yt(d):new er(d);if(p.g!="")u&&(p.g=u+"."+p.g),Ai(p,p.s);else{var S=l.location;p=S.protocol,u=u?u+"."+S.hostname:S.hostname,S=+S.port;var C=new er(null);p&&wi(C,p),u&&(C.g=u),S&&Ai(C,S),d&&(C.l=d),p=C}return d=o.D,u=o.ya,d&&u&&be(p,d,u),be(p,"VER",o.la),Is(o,p),p}function Uu(o,u,d){if(u&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=o.Ca&&!o.pa?new De(new ys({eb:d})):new De(o.pa),u.Ha(o.J),u}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function $u(){}t=$u.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Di(){}Di.prototype.g=function(o,u){return new Et(o,u)};function Et(o,u){K.call(this),this.g=new Cu(u),this.l=o,this.h=u&&u.messageUrlParams||null,o=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(o?o["X-WebChannel-Content-Type"]=u.messageContentType:o={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(o?o["X-WebChannel-Client-Profile"]=u.va:o={"X-WebChannel-Client-Profile":u.va}),this.g.S=o,(o=u&&u.Sb)&&!Q(o)&&(this.g.m=o),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!Q(u)&&(this.g.D=u,o=this.h,o!==null&&u in o&&(o=this.h,u in o&&delete o[u])),this.j=new Sr(this)}P(Et,K),Et.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Et.prototype.close=function(){ma(this.g)},Et.prototype.o=function(o){var u=this.g;if(typeof o=="string"){var d={};d.__data__=o,o=d}else this.u&&(d={},d.__data__=wr(o),o=d);u.i.push(new Sm(u.Ya++,o)),u.G==3&&Ci(u)},Et.prototype.N=function(){this.g.l=null,delete this.j,ma(this.g),delete this.g,Et.aa.N.call(this)};function Bu(o){oa.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var u=o.__sm__;if(u){e:{for(const d in u){o=d;break e}o=void 0}(this.i=o)&&(o=this.i,u=u!==null&&o in u?u[o]:void 0),this.data=u}else this.data=o}P(Bu,oa);function ju(){aa.call(this),this.status=1}P(ju,aa);function Sr(o){this.g=o}P(Sr,$u),Sr.prototype.ua=function(){ee(this.g,"a")},Sr.prototype.ta=function(o){ee(this.g,new Bu(o))},Sr.prototype.sa=function(o){ee(this.g,new ju)},Sr.prototype.ra=function(){ee(this.g,"b")},Di.prototype.createWebChannel=Di.prototype.g,Et.prototype.send=Et.prototype.o,Et.prototype.open=Et.prototype.m,Et.prototype.close=Et.prototype.close,Zp=function(){return new Di},Yp=function(){return vi()},Xp=Yn,hl={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ei.NO_ERROR=0,Ei.TIMEOUT=8,Ei.HTTP_ERROR=6,Yi=Ei,su.COMPLETE="complete",Jp=su,Zc.EventType=us,us.OPEN="a",us.CLOSE="b",us.ERROR="c",us.MESSAGE="d",K.prototype.listen=K.prototype.K,Ss=Zc,Qp=ys,De.prototype.listenOnce=De.prototype.L,De.prototype.getLastError=De.prototype.Ka,De.prototype.getLastErrorCode=De.prototype.Ba,De.prototype.getStatus=De.prototype.Z,De.prototype.getResponseJson=De.prototype.Oa,De.prototype.getResponseText=De.prototype.oa,De.prototype.send=De.prototype.ea,De.prototype.setWithCredentials=De.prototype.Ha,Gp=De}).apply(typeof $i<"u"?$i:typeof self<"u"?self:typeof window<"u"?window:{});const td="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */let is="10.13.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gr=new ec("@firebase/firestore");function bs(){return gr.logLevel}function G(t,...e){if(gr.logLevel<=ue.DEBUG){const n=e.map(pc);gr.debug(`Firestore (${is}): ${t}`,...n)}}function fn(t,...e){if(gr.logLevel<=ue.ERROR){const n=e.map(pc);gr.error(`Firestore (${is}): ${t}`,...n)}}function Qr(t,...e){if(gr.logLevel<=ue.WARN){const n=e.map(pc);gr.warn(`Firestore (${is}): ${t}`,...n)}}function pc(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function ne(t="Unexpected state"){const e=`FIRESTORE (${is}) INTERNAL ASSERTION FAILED: `+t;throw fn(e),new Error(e)}function we(t,e){t||ne()}function ie(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class z extends mn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class eg{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class kw{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(it.UNAUTHENTICATED))}shutdown(){}}class Dw{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Vw{constructor(e){this.t=e,this.currentUser=it.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new xn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new xn,e.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},l=c=>{G("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),a()};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(G("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new xn)}},0),a()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(G("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(we(typeof r.accessToken=="string"),new eg(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return we(e===null||typeof e=="string"),new it(e)}}class Ow{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=it.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Nw{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new Ow(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(it.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class xw{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Mw{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=i=>{i.error!=null&&G("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.R;return this.R=i.token,G("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{G("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):G("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(we(typeof n.token=="string"),this.R=n.token,new xw(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lw(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tg{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=Lw(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function me(t,e){return t<e?-1:t>e?1:0}function Jr(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new z(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new z(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new z(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new z(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return $e.fromMillis(Date.now())}static fromDate(e){return $e.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new $e(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?me(this.nanoseconds,e.nanoseconds):me(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(e){this.timestamp=e}static fromTimestamp(e){return new se(e)}static min(){return new se(new $e(0,0))}static max(){return new se(new $e(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gs{constructor(e,n,r){n===void 0?n=0:n>e.length&&ne(),r===void 0?r=e.length-n:r>e.length-n&&ne(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Gs.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Gs?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),a=n.get(s);if(i<a)return-1;if(i>a)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Re extends Gs{construct(e,n,r){return new Re(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new z(O.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Re(n)}static emptyPath(){return new Re([])}}const Fw=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Je extends Gs{construct(e,n,r){return new Je(e,n,r)}static isValidIdentifier(e){return Fw.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Je.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Je(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new z(O.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let a=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new z(O.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new z(O.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else l==="`"?(a=!a,s++):l!=="."||a?(r+=l,s++):(i(),s++)}if(i(),a)throw new z(O.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Je(n)}static emptyPath(){return new Je([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(e){this.path=e}static fromPath(e){return new Y(Re.fromString(e))}static fromName(e){return new Y(Re.fromString(e).popFirst(5))}static empty(){return new Y(Re.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Re.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Re.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Y(new Re(e.slice()))}}function Uw(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=se.fromTimestamp(r===1e9?new $e(n+1,0):new $e(n,r));return new Un(s,Y.empty(),e)}function $w(t){return new Un(t.readTime,t.key,-1)}class Un{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Un(se.min(),Y.empty(),-1)}static max(){return new Un(se.max(),Y.empty(),-1)}}function Bw(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=Y.comparator(t.documentKey,e.documentKey),n!==0?n:me(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jw="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class qw{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ci(t){if(t.code!==O.FAILED_PRECONDITION||t.message!==jw)throw t;G("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ne(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new x((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof x?n:x.resolve(n)}catch(n){return x.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):x.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):x.reject(n)}static resolve(e){return new x((n,r)=>{n(e)})}static reject(e){return new x((n,r)=>{r(e)})}static waitFor(e){return new x((n,r)=>{let s=0,i=0,a=!1;e.forEach(l=>{++s,l.next(()=>{++i,a&&i===s&&n()},c=>r(c))}),a=!0,i===s&&n()})}static or(e){let n=x.resolve(!1);for(const r of e)n=n.next(s=>s?x.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new x((r,s)=>{const i=e.length,a=new Array(i);let l=0;for(let c=0;c<i;c++){const h=c;n(e[h]).next(f=>{a[h]=f,++l,l===i&&r(a)},f=>s(f))}})}static doWhile(e,n){return new x((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function Hw(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function ui(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class gc{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}gc.oe=-1;function Wo(t){return t==null}function yo(t){return t===0&&1/t==-1/0}function Ww(t){return typeof t=="number"&&Number.isInteger(t)&&!yo(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nd(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function vr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function ng(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke{constructor(e,n){this.comparator=e,this.root=n||Ge.EMPTY}insert(e,n){return new ke(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ge.BLACK,null,null))}remove(e){return new ke(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ge.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Bi(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Bi(this.root,e,this.comparator,!1)}getReverseIterator(){return new Bi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Bi(this.root,e,this.comparator,!0)}}class Bi{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ge{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??Ge.RED,this.left=s??Ge.EMPTY,this.right=i??Ge.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new Ge(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Ge.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Ge.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ge.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ge.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ne();const e=this.left.check();if(e!==this.right.check())throw ne();return e+(this.isRed()?0:1)}}Ge.EMPTY=null,Ge.RED=!0,Ge.BLACK=!1;Ge.EMPTY=new class{constructor(){this.size=0}get key(){throw ne()}get value(){throw ne()}get color(){throw ne()}get left(){throw ne()}get right(){throw ne()}copy(e,n,r,s,i){return this}insert(e,n,r){return new Ge(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(e){this.comparator=e,this.data=new ke(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new rd(this.data.getIterator())}getIteratorFrom(e){return new rd(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Xe)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Xe(this.comparator);return n.data=e,n}}class rd{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(e){this.fields=e,e.sort(Je.comparator)}static empty(){return new bt([])}unionWith(e){let n=new Xe(Je.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new bt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Jr(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class rg extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new rg("Invalid base64 string: "+i):i}}(e);return new Ze(n)}static fromUint8Array(e){const n=function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i}(e);return new Ze(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return me(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ze.EMPTY_BYTE_STRING=new Ze("");const zw=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function $n(t){if(we(!!t),typeof t=="string"){let e=0;const n=zw.exec(t);if(we(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ve(t.seconds),nanos:Ve(t.nanos)}}function Ve(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function mr(t){return typeof t=="string"?Ze.fromBase64String(t):Ze.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mc(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function _c(t){const e=t.mapValue.fields.__previous_value__;return mc(e)?_c(e):e}function Qs(t){const e=$n(t.mapValue.fields.__local_write_time__.timestampValue);return new $e(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kw{constructor(e,n,r,s,i,a,l,c,h){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=h}}class Js{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Js("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Js&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ji={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function _r(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?mc(t)?4:Qw(t)?9007199254740991:Gw(t)?10:11:ne()}function Qt(t,e){if(t===e)return!0;const n=_r(t);if(n!==_r(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Qs(t).isEqual(Qs(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=$n(s.timestampValue),l=$n(i.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return mr(s.bytesValue).isEqual(mr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Ve(s.geoPointValue.latitude)===Ve(i.geoPointValue.latitude)&&Ve(s.geoPointValue.longitude)===Ve(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Ve(s.integerValue)===Ve(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=Ve(s.doubleValue),l=Ve(i.doubleValue);return a===l?yo(a)===yo(l):isNaN(a)&&isNaN(l)}return!1}(t,e);case 9:return Jr(t.arrayValue.values||[],e.arrayValue.values||[],Qt);case 10:case 11:return function(s,i){const a=s.mapValue.fields||{},l=i.mapValue.fields||{};if(nd(a)!==nd(l))return!1;for(const c in a)if(a.hasOwnProperty(c)&&(l[c]===void 0||!Qt(a[c],l[c])))return!1;return!0}(t,e);default:return ne()}}function Xs(t,e){return(t.values||[]).find(n=>Qt(n,e))!==void 0}function Xr(t,e){if(t===e)return 0;const n=_r(t),r=_r(e);if(n!==r)return me(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return me(t.booleanValue,e.booleanValue);case 2:return function(i,a){const l=Ve(i.integerValue||i.doubleValue),c=Ve(a.integerValue||a.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(t,e);case 3:return sd(t.timestampValue,e.timestampValue);case 4:return sd(Qs(t),Qs(e));case 5:return me(t.stringValue,e.stringValue);case 6:return function(i,a){const l=mr(i),c=mr(a);return l.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(i,a){const l=i.split("/"),c=a.split("/");for(let h=0;h<l.length&&h<c.length;h++){const f=me(l[h],c[h]);if(f!==0)return f}return me(l.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,a){const l=me(Ve(i.latitude),Ve(a.latitude));return l!==0?l:me(Ve(i.longitude),Ve(a.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return id(t.arrayValue,e.arrayValue);case 10:return function(i,a){var l,c,h,f;const g=i.fields||{},_=a.fields||{},b=(l=g.value)===null||l===void 0?void 0:l.arrayValue,P=(c=_.value)===null||c===void 0?void 0:c.arrayValue,D=me(((h=b==null?void 0:b.values)===null||h===void 0?void 0:h.length)||0,((f=P==null?void 0:P.values)===null||f===void 0?void 0:f.length)||0);return D!==0?D:id(b,P)}(t.mapValue,e.mapValue);case 11:return function(i,a){if(i===ji.mapValue&&a===ji.mapValue)return 0;if(i===ji.mapValue)return 1;if(a===ji.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),h=a.fields||{},f=Object.keys(h);c.sort(),f.sort();for(let g=0;g<c.length&&g<f.length;++g){const _=me(c[g],f[g]);if(_!==0)return _;const b=Xr(l[c[g]],h[f[g]]);if(b!==0)return b}return me(c.length,f.length)}(t.mapValue,e.mapValue);default:throw ne()}}function sd(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return me(t,e);const n=$n(t),r=$n(e),s=me(n.seconds,r.seconds);return s!==0?s:me(n.nanos,r.nanos)}function id(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=Xr(n[s],r[s]);if(i)return i}return me(n.length,r.length)}function Yr(t){return dl(t)}function dl(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=$n(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return mr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return Y.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=dl(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${dl(n.fields[a])}`;return s+"}"}(t.mapValue):ne()}function od(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function fl(t){return!!t&&"integerValue"in t}function yc(t){return!!t&&"arrayValue"in t}function ad(t){return!!t&&"nullValue"in t}function ld(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Zi(t){return!!t&&"mapValue"in t}function Gw(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function Ls(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return vr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ls(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ls(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Qw(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(e){this.value=e}static empty(){return new yt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Zi(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ls(n)}setAll(e){let n=Je.emptyPath(),r={},s=[];e.forEach((a,l)=>{if(!n.isImmediateParentOf(l)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=l.popLast()}a?r[l.lastSegment()]=Ls(a):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Zi(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Qt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Zi(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){vr(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new yt(Ls(this.value))}}function sg(t){const e=[];return vr(t.fields,(n,r)=>{const s=new Je([n]);if(Zi(r)){const i=sg(r.mapValue).fields;if(i.length===0)e.push(s);else for(const a of i)e.push(s.child(a))}else e.push(s)}),new bt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(e,n,r,s,i,a,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=l}static newInvalidDocument(e){return new lt(e,0,se.min(),se.min(),se.min(),yt.empty(),0)}static newFoundDocument(e,n,r,s){return new lt(e,1,n,se.min(),r,s,0)}static newNoDocument(e,n){return new lt(e,2,n,se.min(),se.min(),yt.empty(),0)}static newUnknownDocument(e,n){return new lt(e,3,n,se.min(),se.min(),yt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(se.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=yt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=yt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=se.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof lt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new lt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class vo{constructor(e,n){this.position=e,this.inclusive=n}}function cd(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],a=t.position[s];if(i.field.isKeyField()?r=Y.comparator(Y.fromName(a.referenceValue),n.key):r=Xr(a,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function ud(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Qt(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Eo{constructor(e,n="asc"){this.field=e,this.dir=n}}function Jw(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class ig{}class Me extends ig{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new Yw(e,n,r):n==="array-contains"?new t0(e,r):n==="in"?new n0(e,r):n==="not-in"?new r0(e,r):n==="array-contains-any"?new s0(e,r):new Me(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new Zw(e,r):new e0(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Xr(n,this.value)):n!==null&&_r(this.value)===_r(n)&&this.matchesComparison(Xr(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ne()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Mt extends ig{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new Mt(e,n)}matches(e){return og(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function og(t){return t.op==="and"}function ag(t){return Xw(t)&&og(t)}function Xw(t){for(const e of t.filters)if(e instanceof Mt)return!1;return!0}function pl(t){if(t instanceof Me)return t.field.canonicalString()+t.op.toString()+Yr(t.value);if(ag(t))return t.filters.map(e=>pl(e)).join(",");{const e=t.filters.map(n=>pl(n)).join(",");return`${t.op}(${e})`}}function lg(t,e){return t instanceof Me?function(r,s){return s instanceof Me&&r.op===s.op&&r.field.isEqual(s.field)&&Qt(r.value,s.value)}(t,e):t instanceof Mt?function(r,s){return s instanceof Mt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,a,l)=>i&&lg(a,s.filters[l]),!0):!1}(t,e):void ne()}function cg(t){return t instanceof Me?function(n){return`${n.field.canonicalString()} ${n.op} ${Yr(n.value)}`}(t):t instanceof Mt?function(n){return n.op.toString()+" {"+n.getFilters().map(cg).join(" ,")+"}"}(t):"Filter"}class Yw extends Me{constructor(e,n,r){super(e,n,r),this.key=Y.fromName(r.referenceValue)}matches(e){const n=Y.comparator(e.key,this.key);return this.matchesComparison(n)}}class Zw extends Me{constructor(e,n){super(e,"in",n),this.keys=ug("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class e0 extends Me{constructor(e,n){super(e,"not-in",n),this.keys=ug("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function ug(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>Y.fromName(r.referenceValue))}class t0 extends Me{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return yc(n)&&Xs(n.arrayValue,this.value)}}class n0 extends Me{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Xs(this.value.arrayValue,n)}}class r0 extends Me{constructor(e,n){super(e,"not-in",n)}matches(e){if(Xs(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Xs(this.value.arrayValue,n)}}class s0 extends Me{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!yc(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Xs(this.value.arrayValue,r))}}/**
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
 */class i0{constructor(e,n=null,r=[],s=[],i=null,a=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=l,this.ue=null}}function hd(t,e=null,n=[],r=[],s=null,i=null,a=null){return new i0(t,e,n,r,s,i,a)}function vc(t){const e=ie(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>pl(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Wo(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Yr(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Yr(r)).join(",")),e.ue=n}return e.ue}function Ec(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Jw(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!lg(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!ud(t.startAt,e.startAt)&&ud(t.endAt,e.endAt)}function gl(t){return Y.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{constructor(e,n=null,r=[],s=[],i=null,a="F",l=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=l,this.endAt=c,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function o0(t,e,n,r,s,i,a,l){return new hi(t,e,n,r,s,i,a,l)}function Tc(t){return new hi(t)}function dd(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function hg(t){return t.collectionGroup!==null}function Fs(t){const e=ie(t);if(e.ce===null){e.ce=[];const n=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new Xe(Je.comparator);return a.filters.forEach(c=>{c.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.ce.push(new Eo(i,r))}),n.has(Je.keyField().canonicalString())||e.ce.push(new Eo(Je.keyField(),r))}return e.ce}function Ht(t){const e=ie(t);return e.le||(e.le=a0(e,Fs(t))),e.le}function a0(t,e){if(t.limitType==="F")return hd(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Eo(s.field,i)});const n=t.endAt?new vo(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new vo(t.startAt.position,t.startAt.inclusive):null;return hd(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function ml(t,e){const n=t.filters.concat([e]);return new hi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function _l(t,e,n){return new hi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function zo(t,e){return Ec(Ht(t),Ht(e))&&t.limitType===e.limitType}function dg(t){return`${vc(Ht(t))}|lt:${t.limitType}`}function Or(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>cg(s)).join(", ")}]`),Wo(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>Yr(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>Yr(s)).join(",")),`Target(${r})`}(Ht(t))}; limitType=${t.limitType})`}function Ko(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):Y.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of Fs(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(a,l,c){const h=cd(a,l,c);return a.inclusive?h<=0:h<0}(r.startAt,Fs(r),s)||r.endAt&&!function(a,l,c){const h=cd(a,l,c);return a.inclusive?h>=0:h>0}(r.endAt,Fs(r),s))}(t,e)}function l0(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function fg(t){return(e,n)=>{let r=!1;for(const s of Fs(t)){const i=c0(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function c0(t,e,n){const r=t.field.isKeyField()?Y.comparator(e.key,n.key):function(i,a,l){const c=a.data.field(i),h=l.data.field(i);return c!==null&&h!==null?Xr(c,h):ne()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ne()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){vr(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return ng(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u0=new ke(Y.comparator);function pn(){return u0}const pg=new ke(Y.comparator);function Ps(...t){let e=pg;for(const n of t)e=e.insert(n.key,n);return e}function gg(t){let e=pg;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function ar(){return Us()}function mg(){return Us()}function Us(){return new os(t=>t.toString(),(t,e)=>t.isEqual(e))}const h0=new ke(Y.comparator),d0=new Xe(Y.comparator);function ce(...t){let e=d0;for(const n of t)e=e.add(n);return e}const f0=new Xe(me);function p0(){return f0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ic(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:yo(e)?"-0":e}}function _g(t){return{integerValue:""+t}}function g0(t,e){return Ww(e)?_g(e):Ic(t,e)}/**
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
 */class Go{constructor(){this._=void 0}}function m0(t,e,n){return t instanceof To?function(s,i){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&mc(i)&&(i=_c(i)),i&&(a.fields.__previous_value__=i),{mapValue:a}}(n,e):t instanceof Ys?vg(t,e):t instanceof Zs?Eg(t,e):function(s,i){const a=yg(s,i),l=fd(a)+fd(s.Pe);return fl(a)&&fl(s.Pe)?_g(l):Ic(s.serializer,l)}(t,e)}function _0(t,e,n){return t instanceof Ys?vg(t,e):t instanceof Zs?Eg(t,e):n}function yg(t,e){return t instanceof Io?function(r){return fl(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class To extends Go{}class Ys extends Go{constructor(e){super(),this.elements=e}}function vg(t,e){const n=Tg(e);for(const r of t.elements)n.some(s=>Qt(s,r))||n.push(r);return{arrayValue:{values:n}}}class Zs extends Go{constructor(e){super(),this.elements=e}}function Eg(t,e){let n=Tg(e);for(const r of t.elements)n=n.filter(s=>!Qt(s,r));return{arrayValue:{values:n}}}class Io extends Go{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function fd(t){return Ve(t.integerValue||t.doubleValue)}function Tg(t){return yc(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function y0(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Ys&&s instanceof Ys||r instanceof Zs&&s instanceof Zs?Jr(r.elements,s.elements,Qt):r instanceof Io&&s instanceof Io?Qt(r.Pe,s.Pe):r instanceof To&&s instanceof To}(t.transform,e.transform)}class v0{constructor(e,n){this.version=e,this.transformResults=n}}class xt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new xt}static exists(e){return new xt(void 0,e)}static updateTime(e){return new xt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function eo(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Qo{}function Ig(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new wc(t.key,xt.none()):new di(t.key,t.data,xt.none());{const n=t.data,r=yt.empty();let s=new Xe(Je.comparator);for(let i of e.fields)if(!s.has(i)){let a=n.field(i);a===null&&i.length>1&&(i=i.popLast(),a=n.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new Kn(t.key,r,new bt(s.toArray()),xt.none())}}function E0(t,e,n){t instanceof di?function(s,i,a){const l=s.value.clone(),c=gd(s.fieldTransforms,i,a.transformResults);l.setAll(c),i.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Kn?function(s,i,a){if(!eo(s.precondition,i))return void i.convertToUnknownDocument(a.version);const l=gd(s.fieldTransforms,i,a.transformResults),c=i.data;c.setAll(wg(s)),c.setAll(l),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(t,e,n):function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,n)}function $s(t,e,n,r){return t instanceof di?function(i,a,l,c){if(!eo(i.precondition,a))return l;const h=i.value.clone(),f=md(i.fieldTransforms,c,a);return h.setAll(f),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof Kn?function(i,a,l,c){if(!eo(i.precondition,a))return l;const h=md(i.fieldTransforms,c,a),f=a.data;return f.setAll(wg(i)),f.setAll(h),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(g=>g.field))}(t,e,n,r):function(i,a,l){return eo(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(t,e,n)}function T0(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=yg(r.transform,s||null);i!=null&&(n===null&&(n=yt.empty()),n.set(r.field,i))}return n||null}function pd(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Jr(r,s,(i,a)=>y0(i,a))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class di extends Qo{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Kn extends Qo{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function wg(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function gd(t,e,n){const r=new Map;we(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],a=i.transform,l=e.data.field(i.field);r.set(i.field,_0(a,l,n[s]))}return r}function md(t,e,n){const r=new Map;for(const s of t){const i=s.transform,a=n.data.field(s.field);r.set(s.field,m0(i,a,e))}return r}class wc extends Qo{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class I0 extends Qo{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w0{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&E0(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=$s(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=$s(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=mg();return this.mutations.forEach(s=>{const i=e.get(s.key),a=i.overlayedDocument;let l=this.applyToLocalView(a,i.mutatedFields);l=n.has(s.key)?null:l;const c=Ig(a,l);c!==null&&r.set(s.key,c),a.isValidDocument()||a.convertToNoDocument(se.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ce())}isEqual(e){return this.batchId===e.batchId&&Jr(this.mutations,e.mutations,(n,r)=>pd(n,r))&&Jr(this.baseMutations,e.baseMutations,(n,r)=>pd(n,r))}}class Ac{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){we(e.mutations.length===r.length);let s=function(){return h0}();const i=e.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,r[a].version);return new Ac(e,n,r,s)}}/**
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
 */class A0{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class b0{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var xe,he;function R0(t){switch(t){default:return ne();case O.CANCELLED:case O.UNKNOWN:case O.DEADLINE_EXCEEDED:case O.RESOURCE_EXHAUSTED:case O.INTERNAL:case O.UNAVAILABLE:case O.UNAUTHENTICATED:return!1;case O.INVALID_ARGUMENT:case O.NOT_FOUND:case O.ALREADY_EXISTS:case O.PERMISSION_DENIED:case O.FAILED_PRECONDITION:case O.ABORTED:case O.OUT_OF_RANGE:case O.UNIMPLEMENTED:case O.DATA_LOSS:return!0}}function Ag(t){if(t===void 0)return fn("GRPC error has no .code"),O.UNKNOWN;switch(t){case xe.OK:return O.OK;case xe.CANCELLED:return O.CANCELLED;case xe.UNKNOWN:return O.UNKNOWN;case xe.DEADLINE_EXCEEDED:return O.DEADLINE_EXCEEDED;case xe.RESOURCE_EXHAUSTED:return O.RESOURCE_EXHAUSTED;case xe.INTERNAL:return O.INTERNAL;case xe.UNAVAILABLE:return O.UNAVAILABLE;case xe.UNAUTHENTICATED:return O.UNAUTHENTICATED;case xe.INVALID_ARGUMENT:return O.INVALID_ARGUMENT;case xe.NOT_FOUND:return O.NOT_FOUND;case xe.ALREADY_EXISTS:return O.ALREADY_EXISTS;case xe.PERMISSION_DENIED:return O.PERMISSION_DENIED;case xe.FAILED_PRECONDITION:return O.FAILED_PRECONDITION;case xe.ABORTED:return O.ABORTED;case xe.OUT_OF_RANGE:return O.OUT_OF_RANGE;case xe.UNIMPLEMENTED:return O.UNIMPLEMENTED;case xe.DATA_LOSS:return O.DATA_LOSS;default:return ne()}}(he=xe||(xe={}))[he.OK=0]="OK",he[he.CANCELLED=1]="CANCELLED",he[he.UNKNOWN=2]="UNKNOWN",he[he.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",he[he.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",he[he.NOT_FOUND=5]="NOT_FOUND",he[he.ALREADY_EXISTS=6]="ALREADY_EXISTS",he[he.PERMISSION_DENIED=7]="PERMISSION_DENIED",he[he.UNAUTHENTICATED=16]="UNAUTHENTICATED",he[he.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",he[he.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",he[he.ABORTED=10]="ABORTED",he[he.OUT_OF_RANGE=11]="OUT_OF_RANGE",he[he.UNIMPLEMENTED=12]="UNIMPLEMENTED",he[he.INTERNAL=13]="INTERNAL",he[he.UNAVAILABLE=14]="UNAVAILABLE",he[he.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function S0(){return new TextEncoder}/**
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
 */const P0=new hr([4294967295,4294967295],0);function _d(t){const e=S0().encode(t),n=new Kp;return n.update(e),new Uint8Array(n.digest())}function yd(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new hr([n,r],0),new hr([s,i],0)]}class bc{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Cs(`Invalid padding: ${n}`);if(r<0)throw new Cs(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Cs(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Cs(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=hr.fromNumber(this.Ie)}Ee(e,n,r){let s=e.add(n.multiply(hr.fromNumber(r)));return s.compare(P0)===1&&(s=new hr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=_d(e),[r,s]=yd(n);for(let i=0;i<this.hashCount;i++){const a=this.Ee(r,s,i);if(!this.de(a))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new bc(i,s,n);return r.forEach(l=>a.insert(l)),a}insert(e){if(this.Ie===0)return;const n=_d(e),[r,s]=yd(n);for(let i=0;i<this.hashCount;i++){const a=this.Ee(r,s,i);this.Ae(a)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Cs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jo{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,fi.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Jo(se.min(),s,new ke(me),pn(),ce())}}class fi{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new fi(r,n,ce(),ce(),ce())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class to{constructor(e,n,r,s){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=s}}class bg{constructor(e,n){this.targetId=e,this.me=n}}class Rg{constructor(e,n,r=Ze.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class vd{constructor(){this.fe=0,this.ge=Td(),this.pe=Ze.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=ce(),n=ce(),r=ce();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:ne()}}),new fi(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=Td()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,we(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class C0{constructor(e){this.Le=e,this.Be=new Map,this.ke=pn(),this.qe=Ed(),this.Qe=new ke(me)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:ne()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,s)=>{this.ze(s)&&n(s)})}He(e){const n=e.targetId,r=e.me.count,s=this.Je(n);if(s){const i=s.target;if(gl(i))if(r===0){const a=new Y(i.path);this.Ue(n,a,lt.newNoDocument(a,se.min()))}else we(r===1);else{const a=this.Ye(n);if(a!==r){const l=this.Ze(e),c=l?this.Xe(l,e,a):1;if(c!==0){this.je(n);const h=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,h)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let a,l;try{a=mr(r).toUint8Array()}catch(c){if(c instanceof rg)return Qr("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new bc(a,s,i)}catch(c){return Qr(c instanceof Cs?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.Ie===0?null:l}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const a=this.Le.tt(),l=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.Ue(n,i,null),s++)}),s}rt(e){const n=new Map;this.Be.forEach((i,a)=>{const l=this.Je(a);if(l){if(i.current&&gl(l.target)){const c=new Y(l.target.path);this.ke.get(c)!==null||this.it(a,c)||this.Ue(a,c,lt.newNoDocument(c,e))}i.be&&(n.set(a,i.ve()),i.Ce())}});let r=ce();this.qe.forEach((i,a)=>{let l=!0;a.forEachWhile(c=>{const h=this.Je(c);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.ke.forEach((i,a)=>a.setReadTime(e));const s=new Jo(e,n,this.Qe,this.ke,r);return this.ke=pn(),this.qe=Ed(),this.Qe=new ke(me),s}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,n)?s.Fe(n,1):s.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new vd,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new Xe(me),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||G("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new vd),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function Ed(){return new ke(Y.comparator)}function Td(){return new ke(Y.comparator)}const k0={asc:"ASCENDING",desc:"DESCENDING"},D0={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},V0={and:"AND",or:"OR"};class O0{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function yl(t,e){return t.useProto3Json||Wo(e)?e:{value:e}}function wo(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Sg(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function N0(t,e){return wo(t,e.toTimestamp())}function Wt(t){return we(!!t),se.fromTimestamp(function(n){const r=$n(n);return new $e(r.seconds,r.nanos)}(t))}function Rc(t,e){return vl(t,e).canonicalString()}function vl(t,e){const n=function(s){return new Re(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function Pg(t){const e=Re.fromString(t);return we(Og(e)),e}function El(t,e){return Rc(t.databaseId,e.path)}function $a(t,e){const n=Pg(e);if(n.get(1)!==t.databaseId.projectId)throw new z(O.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new z(O.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Y(kg(n))}function Cg(t,e){return Rc(t.databaseId,e)}function x0(t){const e=Pg(t);return e.length===4?Re.emptyPath():kg(e)}function Tl(t){return new Re(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function kg(t){return we(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Id(t,e,n){return{name:El(t,e),fields:n.value.mapValue.fields}}function M0(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:ne()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,f){return h.useProto3Json?(we(f===void 0||typeof f=="string"),Ze.fromBase64String(f||"")):(we(f===void 0||f instanceof Buffer||f instanceof Uint8Array),Ze.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),a=e.targetChange.cause,l=a&&function(h){const f=h.code===void 0?O.UNKNOWN:Ag(h.code);return new z(f,h.message||"")}(a);n=new Rg(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=$a(t,r.document.name),i=Wt(r.document.updateTime),a=r.document.createTime?Wt(r.document.createTime):se.min(),l=new yt({mapValue:{fields:r.document.fields}}),c=lt.newFoundDocument(s,i,a,l),h=r.targetIds||[],f=r.removedTargetIds||[];n=new to(h,f,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=$a(t,r.document),i=r.readTime?Wt(r.readTime):se.min(),a=lt.newNoDocument(s,i),l=r.removedTargetIds||[];n=new to([],l,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=$a(t,r.document),i=r.removedTargetIds||[];n=new to([],i,s,null)}else{if(!("filter"in e))return ne();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new b0(s,i),l=r.targetId;n=new bg(l,a)}}return n}function L0(t,e){let n;if(e instanceof di)n={update:Id(t,e.key,e.value)};else if(e instanceof wc)n={delete:El(t,e.key)};else if(e instanceof Kn)n={update:Id(t,e.key,e.data),updateMask:z0(e.fieldMask)};else{if(!(e instanceof I0))return ne();n={verify:El(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,a){const l=a.transform;if(l instanceof To)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Ys)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Zs)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Io)return{fieldPath:a.field.canonicalString(),increment:l.Pe};throw ne()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:N0(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ne()}(t,e.precondition)),n}function F0(t,e){return t&&t.length>0?(we(e!==void 0),t.map(n=>function(s,i){let a=s.updateTime?Wt(s.updateTime):Wt(i);return a.isEqual(se.min())&&(a=Wt(i)),new v0(a,s.transformResults||[])}(n,e))):[]}function U0(t,e){return{documents:[Cg(t,e.path)]}}function $0(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Cg(t,s);const i=function(h){if(h.length!==0)return Vg(Mt.create(h,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const a=function(h){if(h.length!==0)return h.map(f=>function(_){return{field:Nr(_.field),direction:q0(_.dir)}}(f))}(e.orderBy);a&&(n.structuredQuery.orderBy=a);const l=yl(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{_t:n,parent:s}}function B0(t){let e=x0(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){we(r===1);const f=n.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];n.where&&(i=function(g){const _=Dg(g);return _ instanceof Mt&&ag(_)?_.getFilters():[_]}(n.where));let a=[];n.orderBy&&(a=function(g){return g.map(_=>function(P){return new Eo(xr(P.field),function(V){switch(V){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(P.direction))}(_))}(n.orderBy));let l=null;n.limit&&(l=function(g){let _;return _=typeof g=="object"?g.value:g,Wo(_)?null:_}(n.limit));let c=null;n.startAt&&(c=function(g){const _=!!g.before,b=g.values||[];return new vo(b,_)}(n.startAt));let h=null;return n.endAt&&(h=function(g){const _=!g.before,b=g.values||[];return new vo(b,_)}(n.endAt)),o0(e,s,a,i,l,"F",c,h)}function j0(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ne()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Dg(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=xr(n.unaryFilter.field);return Me.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=xr(n.unaryFilter.field);return Me.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=xr(n.unaryFilter.field);return Me.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=xr(n.unaryFilter.field);return Me.create(a,"!=",{nullValue:"NULL_VALUE"});default:return ne()}}(t):t.fieldFilter!==void 0?function(n){return Me.create(xr(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ne()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Mt.create(n.compositeFilter.filters.map(r=>Dg(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ne()}}(n.compositeFilter.op))}(t):ne()}function q0(t){return k0[t]}function H0(t){return D0[t]}function W0(t){return V0[t]}function Nr(t){return{fieldPath:t.canonicalString()}}function xr(t){return Je.fromServerFormat(t.fieldPath)}function Vg(t){return t instanceof Me?function(n){if(n.op==="=="){if(ld(n.value))return{unaryFilter:{field:Nr(n.field),op:"IS_NAN"}};if(ad(n.value))return{unaryFilter:{field:Nr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(ld(n.value))return{unaryFilter:{field:Nr(n.field),op:"IS_NOT_NAN"}};if(ad(n.value))return{unaryFilter:{field:Nr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Nr(n.field),op:H0(n.op),value:n.value}}}(t):t instanceof Mt?function(n){const r=n.getFilters().map(s=>Vg(s));return r.length===1?r[0]:{compositeFilter:{op:W0(n.op),filters:r}}}(t):ne()}function z0(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Og(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn{constructor(e,n,r,s,i=se.min(),a=se.min(),l=Ze.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new kn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new kn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new kn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new kn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K0{constructor(e){this.ct=e}}function G0(t){const e=B0({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?_l(e,e.limit,"L"):e}/**
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
 */class Q0{constructor(){this.un=new J0}addToCollectionParentIndex(e,n){return this.un.add(n),x.resolve()}getCollectionParents(e,n){return x.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return x.resolve()}deleteFieldIndex(e,n){return x.resolve()}deleteAllFieldIndexes(e){return x.resolve()}createTargetIndexes(e,n){return x.resolve()}getDocumentsMatchingTarget(e,n){return x.resolve(null)}getIndexType(e,n){return x.resolve(0)}getFieldIndexes(e,n){return x.resolve([])}getNextCollectionGroupToUpdate(e){return x.resolve(null)}getMinOffset(e,n){return x.resolve(Un.min())}getMinOffsetFromCollectionGroup(e,n){return x.resolve(Un.min())}updateCollectionGroup(e,n,r){return x.resolve()}updateIndexEntries(e,n){return x.resolve()}}class J0{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new Xe(Re.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Xe(Re.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Zr(0)}static kn(){return new Zr(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X0{constructor(){this.changes=new os(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,lt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?x.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Y0{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z0{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&$s(r.mutation,s,bt.empty(),$e.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ce()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ce()){const s=ar();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let a=Ps();return i.forEach((l,c)=>{a=a.insert(l,c.overlayedDocument)}),a}))}getOverlayedDocuments(e,n){const r=ar();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ce()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((a,l)=>{n.set(a,l)})})}computeViews(e,n,r,s){let i=pn();const a=Us(),l=function(){return Us()}();return n.forEach((c,h)=>{const f=r.get(h.key);s.has(h.key)&&(f===void 0||f.mutation instanceof Kn)?i=i.insert(h.key,h):f!==void 0?(a.set(h.key,f.mutation.getFieldMask()),$s(f.mutation,h,f.mutation.getFieldMask(),$e.now())):a.set(h.key,bt.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((h,f)=>a.set(h,f)),n.forEach((h,f)=>{var g;return l.set(h,new Y0(f,(g=a.get(h))!==null&&g!==void 0?g:null))}),l))}recalculateAndSaveOverlays(e,n){const r=Us();let s=new ke((a,l)=>a-l),i=ce();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(a=>{for(const l of a)l.keys().forEach(c=>{const h=n.get(c);if(h===null)return;let f=r.get(c)||bt.empty();f=l.applyToLocalView(h,f),r.set(c,f);const g=(s.get(l.batchId)||ce()).add(c);s=s.insert(l.batchId,g)})}).next(()=>{const a=[],l=s.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),h=c.key,f=c.value,g=mg();f.forEach(_=>{if(!i.has(_)){const b=Ig(n.get(_),r.get(_));b!==null&&g.set(_,b),i=i.add(_)}}),a.push(this.documentOverlayCache.saveOverlays(e,h,g))}return x.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(a){return Y.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):hg(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):x.resolve(ar());let l=-1,c=i;return a.next(h=>x.forEach(h,(f,g)=>(l<g.largestBatchId&&(l=g.largestBatchId),i.get(f)?x.resolve():this.remoteDocumentCache.getEntry(e,f).next(_=>{c=c.insert(f,_)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,c,h,ce())).next(f=>({batchId:l,changes:gg(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new Y(n)).next(r=>{let s=Ps();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let a=Ps();return this.indexManager.getCollectionParents(e,i).next(l=>x.forEach(l,c=>{const h=function(g,_){return new hi(_,null,g.explicitOrderBy.slice(),g.filters.slice(),g.limit,g.limitType,g.startAt,g.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next(f=>{f.forEach((g,_)=>{a=a.insert(g,_)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(a=>{i.forEach((c,h)=>{const f=h.getKey();a.get(f)===null&&(a=a.insert(f,lt.newInvalidDocument(f)))});let l=Ps();return a.forEach((c,h)=>{const f=i.get(c);f!==void 0&&$s(f.mutation,h,bt.empty(),$e.now()),Ko(n,h)&&(l=l.insert(c,h))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eA{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return x.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:Wt(s.createTime)}}(n)),x.resolve()}getNamedQuery(e,n){return x.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(s){return{name:s.name,query:G0(s.bundledQuery),readTime:Wt(s.readTime)}}(n)),x.resolve()}}/**
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
 */class tA{constructor(){this.overlays=new ke(Y.comparator),this.Ir=new Map}getOverlay(e,n){return x.resolve(this.overlays.get(n))}getOverlays(e,n){const r=ar();return x.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.ht(e,n,i)}),x.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Ir.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ir.delete(r)),x.resolve()}getOverlaysForCollection(e,n,r){const s=ar(),i=n.length+1,a=new Y(n.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const c=l.getNext().value,h=c.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return x.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new ke((h,f)=>h-f);const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let f=i.get(h.largestBatchId);f===null&&(f=ar(),i=i.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const l=ar(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((h,f)=>l.set(h,f)),!(l.size()>=s)););return x.resolve(l)}ht(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.Ir.get(s.largestBatchId).delete(r.key);this.Ir.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new A0(n,r));let i=this.Ir.get(n);i===void 0&&(i=ce(),this.Ir.set(n,i)),this.Ir.set(n,i.add(r.key))}}/**
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
 */class nA{constructor(){this.sessionToken=Ze.EMPTY_BYTE_STRING}getSessionToken(e){return x.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,x.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sc{constructor(){this.Tr=new Xe(je.Er),this.dr=new Xe(je.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new je(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new je(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new Y(new Re([])),r=new je(n,e),s=new je(n,e+1),i=[];return this.dr.forEachInRange([r,s],a=>{this.Vr(a),i.push(a.key)}),i}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new Y(new Re([])),r=new je(n,e),s=new je(n,e+1);let i=ce();return this.dr.forEachInRange([r,s],a=>{i=i.add(a.key)}),i}containsKey(e){const n=new je(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class je{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return Y.comparator(e.key,n.key)||me(e.wr,n.wr)}static Ar(e,n){return me(e.wr,n.wr)||Y.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rA{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new Xe(je.Er)}checkEmpty(e){return x.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new w0(i,n,r,s);this.mutationQueue.push(a);for(const l of s)this.br=this.br.add(new je(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return x.resolve(a)}lookupMutationBatch(e,n){return x.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.vr(r),i=s<0?0:s;return x.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return x.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return x.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new je(n,0),s=new je(n,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([r,s],a=>{const l=this.Dr(a.wr);i.push(l)}),x.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Xe(me);return n.forEach(s=>{const i=new je(s,0),a=new je(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([i,a],l=>{r=r.add(l.wr)})}),x.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;Y.isDocumentKey(i)||(i=i.child(""));const a=new je(new Y(i),0);let l=new Xe(me);return this.br.forEachWhile(c=>{const h=c.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(l=l.add(c.wr)),!0)},a),x.resolve(this.Cr(l))}Cr(e){const n=[];return e.forEach(r=>{const s=this.Dr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){we(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return x.forEach(n.mutations,s=>{const i=new je(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new je(n,0),s=this.br.firstAfterOrEqual(r);return x.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,x.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sA{constructor(e){this.Mr=e,this.docs=function(){return new ke(Y.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,a=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return x.resolve(r?r.document.mutableCopy():lt.newInvalidDocument(n))}getEntries(e,n){let r=pn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():lt.newInvalidDocument(s))}),x.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=pn();const a=n.path,l=new Y(a.child("")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:h,value:{document:f}}=c.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||Bw($w(f),r)<=0||(s.has(f.key)||Ko(n,f))&&(i=i.insert(f.key,f.mutableCopy()))}return x.resolve(i)}getAllFromCollectionGroup(e,n,r,s){ne()}Or(e,n){return x.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new iA(this)}getSize(e){return x.resolve(this.size)}}class iA extends X0{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.cr.addEntry(e,s)):this.cr.removeEntry(r)}),x.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oA{constructor(e){this.persistence=e,this.Nr=new os(n=>vc(n),Ec),this.lastRemoteSnapshotVersion=se.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Sc,this.targetCount=0,this.kr=Zr.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,s)=>n(s)),x.resolve()}getLastRemoteSnapshotVersion(e){return x.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return x.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),x.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),x.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new Zr(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,x.resolve()}updateTargetData(e,n){return this.Kn(n),x.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,x.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Nr.forEach((a,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Nr.delete(a),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),x.waitFor(i).next(()=>s)}getTargetCount(e){return x.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return x.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),x.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(a=>{i.push(s.markPotentiallyOrphaned(e,a))}),x.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),x.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return x.resolve(r)}containsKey(e,n){return x.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aA{constructor(e,n){this.qr={},this.overlays={},this.Qr=new gc(0),this.Kr=!1,this.Kr=!0,this.$r=new nA,this.referenceDelegate=e(this),this.Ur=new oA(this),this.indexManager=new Q0,this.remoteDocumentCache=function(s){return new sA(s)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new K0(n),this.Gr=new eA(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new tA,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new rA(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){G("MemoryPersistence","Starting transaction:",e);const s=new lA(this.Qr.next());return this.referenceDelegate.zr(),r(s).next(i=>this.referenceDelegate.jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Hr(e,n){return x.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class lA extends qw{constructor(e){super(),this.currentSequenceNumber=e}}class Pc{constructor(e){this.persistence=e,this.Jr=new Sc,this.Yr=null}static Zr(e){return new Pc(e)}get Xr(){if(this.Yr)return this.Yr;throw ne()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),x.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),x.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),x.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(s=>this.Xr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Xr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return x.forEach(this.Xr,r=>{const s=Y.fromPath(r);return this.ei(e,s).next(i=>{i||n.removeEntry(s,se.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return x.or([()=>x.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cc{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=s}static Wi(e,n){let r=ce(),s=ce();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Cc(e,n.fromCache,r,s)}}/**
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
 */class cA{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class uA{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return Yv()?8:Hw(ut())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.Yi(e,n).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.Zi(e,n,s,r).next(a=>{i.result=a})}).next(()=>{if(i.result)return;const a=new cA;return this.Xi(e,n,a).next(l=>{if(i.result=l,this.zi)return this.es(e,n,a,l.size)})}).next(()=>i.result)}es(e,n,r,s){return r.documentReadCount<this.ji?(bs()<=ue.DEBUG&&G("QueryEngine","SDK will not create cache indexes for query:",Or(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),x.resolve()):(bs()<=ue.DEBUG&&G("QueryEngine","Query:",Or(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Hi*s?(bs()<=ue.DEBUG&&G("QueryEngine","The SDK decides to create cache indexes for query:",Or(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Ht(n))):x.resolve())}Yi(e,n){if(dd(n))return x.resolve(null);let r=Ht(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=_l(n,null,"F"),r=Ht(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const a=ce(...i);return this.Ji.getDocuments(e,a).next(l=>this.indexManager.getMinOffset(e,r).next(c=>{const h=this.ts(n,l);return this.ns(n,h,a,c.readTime)?this.Yi(e,_l(n,null,"F")):this.rs(e,h,n,c)}))})))}Zi(e,n,r,s){return dd(n)||s.isEqual(se.min())?x.resolve(null):this.Ji.getDocuments(e,r).next(i=>{const a=this.ts(n,i);return this.ns(n,a,r,s)?x.resolve(null):(bs()<=ue.DEBUG&&G("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Or(n)),this.rs(e,a,n,Uw(s,-1)).next(l=>l))})}ts(e,n){let r=new Xe(fg(e));return n.forEach((s,i)=>{Ko(e,i)&&(r=r.add(i))}),r}ns(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Xi(e,n,r){return bs()<=ue.DEBUG&&G("QueryEngine","Using full collection scan to execute query:",Or(n)),this.Ji.getDocumentsMatchingQuery(e,n,Un.min(),r)}rs(e,n,r,s){return this.Ji.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(a=>{i=i.insert(a.key,a)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hA{constructor(e,n,r,s){this.persistence=e,this.ss=n,this.serializer=s,this.os=new ke(me),this._s=new os(i=>vc(i),Ec),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Z0(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function dA(t,e,n,r){return new hA(t,e,n,r)}async function Ng(t,e){const n=ie(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const a=[],l=[];let c=ce();for(const h of s){a.push(h.batchId);for(const f of h.mutations)c=c.add(f.key)}for(const h of i){l.push(h.batchId);for(const f of h.mutations)c=c.add(f.key)}return n.localDocuments.getDocuments(r,c).next(h=>({hs:h,removedBatchIds:a,addedBatchIds:l}))})})}function fA(t,e){const n=ie(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.cs.newChangeBuffer({trackRemovals:!0});return function(l,c,h,f){const g=h.batch,_=g.keys();let b=x.resolve();return _.forEach(P=>{b=b.next(()=>f.getEntry(c,P)).next(D=>{const V=h.docVersions.get(P);we(V!==null),D.version.compareTo(V)<0&&(g.applyToRemoteDocument(D,h),D.isValidDocument()&&(D.setReadTime(h.commitVersion),f.addEntry(D)))})}),b.next(()=>l.mutationQueue.removeMutationBatch(c,g))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let c=ce();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(c=c.add(l.batch.mutations[h].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function xg(t){const e=ie(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function pA(t,e){const n=ie(t),r=e.snapshotVersion;let s=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const a=n.cs.newChangeBuffer({trackRemovals:!0});s=n.os;const l=[];e.targetChanges.forEach((f,g)=>{const _=s.get(g);if(!_)return;l.push(n.Ur.removeMatchingKeys(i,f.removedDocuments,g).next(()=>n.Ur.addMatchingKeys(i,f.addedDocuments,g)));let b=_.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(g)!==null?b=b.withResumeToken(Ze.EMPTY_BYTE_STRING,se.min()).withLastLimboFreeSnapshotVersion(se.min()):f.resumeToken.approximateByteSize()>0&&(b=b.withResumeToken(f.resumeToken,r)),s=s.insert(g,b),function(D,V,j){return D.resumeToken.approximateByteSize()===0||V.snapshotVersion.toMicroseconds()-D.snapshotVersion.toMicroseconds()>=3e8?!0:j.addedDocuments.size+j.modifiedDocuments.size+j.removedDocuments.size>0}(_,b,f)&&l.push(n.Ur.updateTargetData(i,b))});let c=pn(),h=ce();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,f))}),l.push(gA(i,a,e.documentUpdates).next(f=>{c=f.Ps,h=f.Is})),!r.isEqual(se.min())){const f=n.Ur.getLastRemoteSnapshotVersion(i).next(g=>n.Ur.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(f)}return x.waitFor(l).next(()=>a.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,h)).next(()=>c)}).then(i=>(n.os=s,i))}function gA(t,e,n){let r=ce(),s=ce();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let a=pn();return n.forEach((l,c)=>{const h=i.get(l);c.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(l)),c.isNoDocument()&&c.version.isEqual(se.min())?(e.removeEntry(l,c.readTime),a=a.insert(l,c)):!h.isValidDocument()||c.version.compareTo(h.version)>0||c.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(c),a=a.insert(l,c)):G("LocalStore","Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",c.version)}),{Ps:a,Is:s}})}function mA(t,e){const n=ie(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function _A(t,e){const n=ie(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Ur.getTargetData(r,e).next(i=>i?(s=i,x.resolve(s)):n.Ur.allocateTargetId(r).next(a=>(s=new kn(e,a,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.os.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function Il(t,e,n){const r=ie(t),s=r.os.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!ui(a))throw a;G("LocalStore",`Failed to update sequence numbers for target ${e}: ${a}`)}r.os=r.os.remove(e),r._s.delete(s.target)}function wd(t,e,n){const r=ie(t);let s=se.min(),i=ce();return r.persistence.runTransaction("Execute query","readwrite",a=>function(c,h,f){const g=ie(c),_=g._s.get(f);return _!==void 0?x.resolve(g.os.get(_)):g.Ur.getTargetData(h,f)}(r,a,Ht(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(a,l.targetId).next(c=>{i=c})}).next(()=>r.ss.getDocumentsMatchingQuery(a,e,n?s:se.min(),n?i:ce())).next(l=>(yA(r,l0(e),l),{documents:l,Ts:i})))}function yA(t,e,n){let r=t.us.get(e)||se.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.us.set(e,r)}class Ad{constructor(){this.activeTargetIds=p0()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class vA{constructor(){this.so=new Ad,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Ad,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class EA{_o(e){}shutdown(){}}/**
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
 */class bd{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){G("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){G("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const TA={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IA{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const st="WebChannelConnection";class wA extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${s}/databases/${i}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Fo(){return!1}Mo(n,r,s,i,a){const l=Ba(),c=this.xo(n,r.toUriEncodedString());G("RestConnection",`Sending RPC '${n}' ${l}:`,c,s);const h={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(h,i,a),this.No(n,c,h,s).then(f=>(G("RestConnection",`Received RPC '${n}' ${l}: `,f),f),f=>{throw Qr("RestConnection",`RPC '${n}' ${l} failed with error: `,f,"url: ",c,"request:",s),f})}Lo(n,r,s,i,a,l){return this.Mo(n,r,s,i,a)}Oo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+is}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,a)=>n[a]=i),s&&s.headers.forEach((i,a)=>n[a]=i)}xo(n,r){const s=TA[n];return`${this.Do}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,s){const i=Ba();return new Promise((a,l)=>{const c=new Gp;c.setWithCredentials(!0),c.listenOnce(Jp.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Yi.NO_ERROR:const f=c.getResponseJson();G(st,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(f)),a(f);break;case Yi.TIMEOUT:G(st,`RPC '${e}' ${i} timed out`),l(new z(O.DEADLINE_EXCEEDED,"Request time out"));break;case Yi.HTTP_ERROR:const g=c.getStatus();if(G(st,`RPC '${e}' ${i} failed with status:`,g,"response text:",c.getResponseText()),g>0){let _=c.getResponseJson();Array.isArray(_)&&(_=_[0]);const b=_==null?void 0:_.error;if(b&&b.status&&b.message){const P=function(V){const j=V.toLowerCase().replace(/_/g,"-");return Object.values(O).indexOf(j)>=0?j:O.UNKNOWN}(b.status);l(new z(P,b.message))}else l(new z(O.UNKNOWN,"Server responded with status "+c.getStatus()))}else l(new z(O.UNAVAILABLE,"Connection failed."));break;default:ne()}}finally{G(st,`RPC '${e}' ${i} completed.`)}});const h=JSON.stringify(s);G(st,`RPC '${e}' ${i} sending request:`,s),c.send(n,"POST",h,r,15)})}Bo(e,n,r){const s=Ba(),i=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=Zp(),l=Yp(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(c.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(c.xmlHttpFactory=new Qp({})),this.Oo(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const f=i.join("");G(st,`Creating RPC '${e}' stream ${s}: ${f}`,c);const g=a.createWebChannel(f,c);let _=!1,b=!1;const P=new IA({Io:V=>{b?G(st,`Not sending because RPC '${e}' stream ${s} is closed:`,V):(_||(G(st,`Opening RPC '${e}' stream ${s} transport.`),g.open(),_=!0),G(st,`RPC '${e}' stream ${s} sending:`,V),g.send(V))},To:()=>g.close()}),D=(V,j,Q)=>{V.listen(j,J=>{try{Q(J)}catch(W){setTimeout(()=>{throw W},0)}})};return D(g,Ss.EventType.OPEN,()=>{b||(G(st,`RPC '${e}' stream ${s} transport opened.`),P.yo())}),D(g,Ss.EventType.CLOSE,()=>{b||(b=!0,G(st,`RPC '${e}' stream ${s} transport closed`),P.So())}),D(g,Ss.EventType.ERROR,V=>{b||(b=!0,Qr(st,`RPC '${e}' stream ${s} transport errored:`,V),P.So(new z(O.UNAVAILABLE,"The operation could not be completed")))}),D(g,Ss.EventType.MESSAGE,V=>{var j;if(!b){const Q=V.data[0];we(!!Q);const J=Q,W=J.error||((j=J[0])===null||j===void 0?void 0:j.error);if(W){G(st,`RPC '${e}' stream ${s} received error:`,W);const oe=W.status;let ye=function(y){const T=xe[y];if(T!==void 0)return Ag(T)}(oe),w=W.message;ye===void 0&&(ye=O.INTERNAL,w="Unknown error status: "+oe+" with message "+W.message),b=!0,P.So(new z(ye,w)),g.close()}else G(st,`RPC '${e}' stream ${s} received:`,Q),P.bo(Q)}}),D(l,Xp.STAT_EVENT,V=>{V.stat===hl.PROXY?G(st,`RPC '${e}' stream ${s} detected buffering proxy`):V.stat===hl.NOPROXY&&G(st,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{P.wo()},0),P}}function ja(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xo(t){return new O0(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mg{constructor(e,n,r=1e3,s=1.5,i=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=s,this.Qo=i,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),s=Math.max(0,n-r);s>0&&G("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lg{constructor(e,n,r,s,i,a,l,c){this.ui=e,this.Ho=r,this.Jo=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new Mg(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===O.RESOURCE_EXHAUSTED?(fn(n.toString()),fn("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===O.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Yo===n&&this.P_(r,s)},r=>{e(()=>{const s=new z(O.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(s)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{r(()=>this.I_(s))}),this.stream.onMessage(s=>{r(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return G("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(G("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class AA extends Lg{constructor(e,n,r,s,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,a),this.serializer=i}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=M0(this.serializer,e),r=function(i){if(!("targetChange"in i))return se.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?se.min():a.readTime?Wt(a.readTime):se.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=Tl(this.serializer),n.addTarget=function(i,a){let l;const c=a.target;if(l=gl(c)?{documents:U0(i,c)}:{query:$0(i,c)._t},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=Sg(i,a.resumeToken);const h=yl(i,a.expectedCount);h!==null&&(l.expectedCount=h)}else if(a.snapshotVersion.compareTo(se.min())>0){l.readTime=wo(i,a.snapshotVersion.toTimestamp());const h=yl(i,a.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);const r=j0(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=Tl(this.serializer),n.removeTarget=e,this.a_(n)}}class bA extends Lg{constructor(e,n,r,s,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,a),this.serializer=i}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return we(!!e.streamToken),this.lastStreamToken=e.streamToken,we(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){we(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=F0(e.writeResults,e.commitTime),r=Wt(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=Tl(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>L0(this.serializer,r))};this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RA extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new z(O.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.Mo(e,vl(n,r),s,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new z(O.UNKNOWN,i.toString())})}Lo(e,n,r,s,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.Lo(e,vl(n,r),s,a,l,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new z(O.UNKNOWN,a.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class SA{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
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
 */class PA{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o(a=>{r.enqueueAndForget(async()=>{Er(this)&&(G("RemoteStore","Restarting streams for network reachability change."),await async function(c){const h=ie(c);h.L_.add(4),await pi(h),h.q_.set("Unknown"),h.L_.delete(4),await Yo(h)}(this))})}),this.q_=new SA(r,s)}}async function Yo(t){if(Er(t))for(const e of t.B_)await e(!0)}async function pi(t){for(const e of t.B_)await e(!1)}function Fg(t,e){const n=ie(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),Oc(n)?Vc(n):as(n).r_()&&Dc(n,e))}function kc(t,e){const n=ie(t),r=as(n);n.N_.delete(e),r.r_()&&Ug(n,e),n.N_.size===0&&(r.r_()?r.o_():Er(n)&&n.q_.set("Unknown"))}function Dc(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(se.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}as(t).A_(e)}function Ug(t,e){t.Q_.xe(e),as(t).R_(e)}function Vc(t){t.Q_=new C0({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),as(t).start(),t.q_.v_()}function Oc(t){return Er(t)&&!as(t).n_()&&t.N_.size>0}function Er(t){return ie(t).L_.size===0}function $g(t){t.Q_=void 0}async function CA(t){t.q_.set("Online")}async function kA(t){t.N_.forEach((e,n)=>{Dc(t,e)})}async function DA(t,e){$g(t),Oc(t)?(t.q_.M_(e),Vc(t)):t.q_.set("Unknown")}async function VA(t,e,n){if(t.q_.set("Online"),e instanceof Rg&&e.state===2&&e.cause)try{await async function(s,i){const a=i.cause;for(const l of i.targetIds)s.N_.has(l)&&(await s.remoteSyncer.rejectListen(l,a),s.N_.delete(l),s.Q_.removeTarget(l))}(t,e)}catch(r){G("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Ao(t,r)}else if(e instanceof to?t.Q_.Ke(e):e instanceof bg?t.Q_.He(e):t.Q_.We(e),!n.isEqual(se.min()))try{const r=await xg(t.localStore);n.compareTo(r)>=0&&await function(i,a){const l=i.Q_.rt(a);return l.targetChanges.forEach((c,h)=>{if(c.resumeToken.approximateByteSize()>0){const f=i.N_.get(h);f&&i.N_.set(h,f.withResumeToken(c.resumeToken,a))}}),l.targetMismatches.forEach((c,h)=>{const f=i.N_.get(c);if(!f)return;i.N_.set(c,f.withResumeToken(Ze.EMPTY_BYTE_STRING,f.snapshotVersion)),Ug(i,c);const g=new kn(f.target,c,h,f.sequenceNumber);Dc(i,g)}),i.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){G("RemoteStore","Failed to raise snapshot:",r),await Ao(t,r)}}async function Ao(t,e,n){if(!ui(e))throw e;t.L_.add(1),await pi(t),t.q_.set("Offline"),n||(n=()=>xg(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{G("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await Yo(t)})}function Bg(t,e){return e().catch(n=>Ao(t,n,e))}async function Zo(t){const e=ie(t),n=Bn(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;OA(e);)try{const s=await mA(e.localStore,r);if(s===null){e.O_.length===0&&n.o_();break}r=s.batchId,NA(e,s)}catch(s){await Ao(e,s)}jg(e)&&qg(e)}function OA(t){return Er(t)&&t.O_.length<10}function NA(t,e){t.O_.push(e);const n=Bn(t);n.r_()&&n.V_&&n.m_(e.mutations)}function jg(t){return Er(t)&&!Bn(t).n_()&&t.O_.length>0}function qg(t){Bn(t).start()}async function xA(t){Bn(t).p_()}async function MA(t){const e=Bn(t);for(const n of t.O_)e.m_(n.mutations)}async function LA(t,e,n){const r=t.O_.shift(),s=Ac.from(r,e,n);await Bg(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Zo(t)}async function FA(t,e){e&&Bn(t).V_&&await async function(r,s){if(function(a){return R0(a)&&a!==O.ABORTED}(s.code)){const i=r.O_.shift();Bn(r).s_(),await Bg(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Zo(r)}}(t,e),jg(t)&&qg(t)}async function Rd(t,e){const n=ie(t);n.asyncQueue.verifyOperationInProgress(),G("RemoteStore","RemoteStore received new credentials");const r=Er(n);n.L_.add(3),await pi(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await Yo(n)}async function UA(t,e){const n=ie(t);e?(n.L_.delete(2),await Yo(n)):e||(n.L_.add(2),await pi(n),n.q_.set("Unknown"))}function as(t){return t.K_||(t.K_=function(n,r,s){const i=ie(n);return i.w_(),new AA(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:CA.bind(null,t),Ro:kA.bind(null,t),mo:DA.bind(null,t),d_:VA.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),Oc(t)?Vc(t):t.q_.set("Unknown")):(await t.K_.stop(),$g(t))})),t.K_}function Bn(t){return t.U_||(t.U_=function(n,r,s){const i=ie(n);return i.w_(),new bA(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:xA.bind(null,t),mo:FA.bind(null,t),f_:MA.bind(null,t),g_:LA.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await Zo(t)):(await t.U_.stop(),t.O_.length>0&&(G("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nc{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new xn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const a=Date.now()+r,l=new Nc(e,n,a,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new z(O.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function xc(t,e){if(fn("AsyncQueue",`${e}: ${t}`),ui(t))return new z(O.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr{constructor(e){this.comparator=e?(n,r)=>e(n,r)||Y.comparator(n.key,r.key):(n,r)=>Y.comparator(n.key,r.key),this.keyedMap=Ps(),this.sortedSet=new ke(this.comparator)}static emptySet(e){return new Wr(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Wr)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Wr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sd{constructor(){this.W_=new ke(Y.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):ne():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class es{constructor(e,n,r,s,i,a,l,c,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,s,i){const a=[];return n.forEach(l=>{a.push({type:0,doc:l})}),new es(e,n,Wr.emptySet(n),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&zo(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $A{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class BA{constructor(){this.queries=Pd(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const s=ie(n),i=s.queries;s.queries=Pd(),i.forEach((a,l)=>{for(const c of l.j_)c.onError(r)})})(this,new z(O.ABORTED,"Firestore shutting down"))}}function Pd(){return new os(t=>dg(t),zo)}async function Hg(t,e){const n=ie(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.H_()&&e.J_()&&(r=2):(i=new $A,r=e.J_()?0:1);try{switch(r){case 0:i.z_=await n.onListen(s,!0);break;case 1:i.z_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(a){const l=xc(a,`Initialization of query '${Or(e.query)}' failed`);return void e.onError(l)}n.queries.set(s,i),i.j_.push(e),e.Z_(n.onlineState),i.z_&&e.X_(i.z_)&&Mc(n)}async function Wg(t,e){const n=ie(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const a=i.j_.indexOf(e);a>=0&&(i.j_.splice(a,1),i.j_.length===0?s=e.J_()?0:1:!i.H_()&&e.J_()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function jA(t,e){const n=ie(t);let r=!1;for(const s of e){const i=s.query,a=n.queries.get(i);if(a){for(const l of a.j_)l.X_(s)&&(r=!0);a.z_=s}}r&&Mc(n)}function qA(t,e,n){const r=ie(t),s=r.queries.get(e);if(s)for(const i of s.j_)i.onError(n);r.queries.delete(e)}function Mc(t){t.Y_.forEach(e=>{e.next()})}var wl,Cd;(Cd=wl||(wl={})).ea="default",Cd.Cache="cache";class zg{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new es(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=es.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==wl.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kg{constructor(e){this.key=e}}class Gg{constructor(e){this.key=e}}class HA{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=ce(),this.mutatedKeys=ce(),this.Aa=fg(e),this.Ra=new Wr(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new Sd,s=n?n.Ra:this.Ra;let i=n?n.mutatedKeys:this.mutatedKeys,a=s,l=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,g)=>{const _=s.get(f),b=Ko(this.query,g)?g:null,P=!!_&&this.mutatedKeys.has(_.key),D=!!b&&(b.hasLocalMutations||this.mutatedKeys.has(b.key)&&b.hasCommittedMutations);let V=!1;_&&b?_.data.isEqual(b.data)?P!==D&&(r.track({type:3,doc:b}),V=!0):this.ga(_,b)||(r.track({type:2,doc:b}),V=!0,(c&&this.Aa(b,c)>0||h&&this.Aa(b,h)<0)&&(l=!0)):!_&&b?(r.track({type:0,doc:b}),V=!0):_&&!b&&(r.track({type:1,doc:_}),V=!0,(c||h)&&(l=!0)),V&&(b?(a=a.add(b),i=D?i.add(f):i.delete(f)):(a=a.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const f=this.query.limitType==="F"?a.last():a.first();a=a.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{Ra:a,fa:r,ns:l,mutatedKeys:i}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const a=e.fa.G_();a.sort((f,g)=>function(b,P){const D=V=>{switch(V){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ne()}};return D(b)-D(P)}(f.type,g.type)||this.Aa(f.doc,g.doc)),this.pa(r),s=s!=null&&s;const l=n&&!s?this.ya():[],c=this.da.size===0&&this.current&&!s?1:0,h=c!==this.Ea;return this.Ea=c,a.length!==0||h?{snapshot:new es(this.query,e.Ra,i,a,e.mutatedKeys,c===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Sd,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=ce(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new Gg(r))}),this.da.forEach(r=>{e.has(r)||n.push(new Kg(r))}),n}ba(e){this.Ta=e.Ts,this.da=ce();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return es.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class WA{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class zA{constructor(e){this.key=e,this.va=!1}}class KA{constructor(e,n,r,s,i,a){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.Ca={},this.Fa=new os(l=>dg(l),zo),this.Ma=new Map,this.xa=new Set,this.Oa=new ke(Y.comparator),this.Na=new Map,this.La=new Sc,this.Ba={},this.ka=new Map,this.qa=Zr.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function GA(t,e,n=!0){const r=em(t);let s;const i=r.Fa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Da()):s=await Qg(r,e,n,!0),s}async function QA(t,e){const n=em(t);await Qg(n,e,!0,!1)}async function Qg(t,e,n,r){const s=await _A(t.localStore,Ht(e)),i=s.targetId,a=t.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await JA(t,e,i,a==="current",s.resumeToken)),t.isPrimaryClient&&n&&Fg(t.remoteStore,s),l}async function JA(t,e,n,r,s){t.Ka=(g,_,b)=>async function(D,V,j,Q){let J=V.view.ma(j);J.ns&&(J=await wd(D.localStore,V.query,!1).then(({documents:w})=>V.view.ma(w,J)));const W=Q&&Q.targetChanges.get(V.targetId),oe=Q&&Q.targetMismatches.get(V.targetId)!=null,ye=V.view.applyChanges(J,D.isPrimaryClient,W,oe);return Dd(D,V.targetId,ye.wa),ye.snapshot}(t,g,_,b);const i=await wd(t.localStore,e,!0),a=new HA(e,i.Ts),l=a.ma(i.documents),c=fi.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),h=a.applyChanges(l,t.isPrimaryClient,c);Dd(t,n,h.wa);const f=new WA(e,n,a);return t.Fa.set(e,f),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),h.snapshot}async function XA(t,e,n){const r=ie(t),s=r.Fa.get(e),i=r.Ma.get(s.targetId);if(i.length>1)return r.Ma.set(s.targetId,i.filter(a=>!zo(a,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Il(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&kc(r.remoteStore,s.targetId),Al(r,s.targetId)}).catch(ci)):(Al(r,s.targetId),await Il(r.localStore,s.targetId,!0))}async function YA(t,e){const n=ie(t),r=n.Fa.get(e),s=n.Ma.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),kc(n.remoteStore,r.targetId))}async function ZA(t,e,n){const r=ob(t);try{const s=await function(a,l){const c=ie(a),h=$e.now(),f=l.reduce((b,P)=>b.add(P.key),ce());let g,_;return c.persistence.runTransaction("Locally write mutations","readwrite",b=>{let P=pn(),D=ce();return c.cs.getEntries(b,f).next(V=>{P=V,P.forEach((j,Q)=>{Q.isValidDocument()||(D=D.add(j))})}).next(()=>c.localDocuments.getOverlayedDocuments(b,P)).next(V=>{g=V;const j=[];for(const Q of l){const J=T0(Q,g.get(Q.key).overlayedDocument);J!=null&&j.push(new Kn(Q.key,J,sg(J.value.mapValue),xt.exists(!0)))}return c.mutationQueue.addMutationBatch(b,h,j,l)}).next(V=>{_=V;const j=V.applyToLocalDocumentSet(g,D);return c.documentOverlayCache.saveOverlays(b,V.batchId,j)})}).then(()=>({batchId:_.batchId,changes:gg(g)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(a,l,c){let h=a.Ba[a.currentUser.toKey()];h||(h=new ke(me)),h=h.insert(l,c),a.Ba[a.currentUser.toKey()]=h}(r,s.batchId,n),await gi(r,s.changes),await Zo(r.remoteStore)}catch(s){const i=xc(s,"Failed to persist write");n.reject(i)}}async function Jg(t,e){const n=ie(t);try{const r=await pA(n.localStore,e);e.targetChanges.forEach((s,i)=>{const a=n.Na.get(i);a&&(we(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?a.va=!0:s.modifiedDocuments.size>0?we(a.va):s.removedDocuments.size>0&&(we(a.va),a.va=!1))}),await gi(n,r,e)}catch(r){await ci(r)}}function kd(t,e,n){const r=ie(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Fa.forEach((i,a)=>{const l=a.view.Z_(e);l.snapshot&&s.push(l.snapshot)}),function(a,l){const c=ie(a);c.onlineState=l;let h=!1;c.queries.forEach((f,g)=>{for(const _ of g.j_)_.Z_(l)&&(h=!0)}),h&&Mc(c)}(r.eventManager,e),s.length&&r.Ca.d_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function eb(t,e,n){const r=ie(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Na.get(e),i=s&&s.key;if(i){let a=new ke(Y.comparator);a=a.insert(i,lt.newNoDocument(i,se.min()));const l=ce().add(i),c=new Jo(se.min(),new Map,new ke(me),a,l);await Jg(r,c),r.Oa=r.Oa.remove(i),r.Na.delete(e),Lc(r)}else await Il(r.localStore,e,!1).then(()=>Al(r,e,n)).catch(ci)}async function tb(t,e){const n=ie(t),r=e.batch.batchId;try{const s=await fA(n.localStore,e);Yg(n,r,null),Xg(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await gi(n,s)}catch(s){await ci(s)}}async function nb(t,e,n){const r=ie(t);try{const s=await function(a,l){const c=ie(a);return c.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return c.mutationQueue.lookupMutationBatch(h,l).next(g=>(we(g!==null),f=g.keys(),c.mutationQueue.removeMutationBatch(h,g))).next(()=>c.mutationQueue.performConsistencyCheck(h)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(h,f,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>c.localDocuments.getDocuments(h,f))})}(r.localStore,e);Yg(r,e,n),Xg(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await gi(r,s)}catch(s){await ci(s)}}function Xg(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function Yg(t,e,n){const r=ie(t);let s=r.Ba[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Ba[r.currentUser.toKey()]=s}}function Al(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||Zg(t,r)})}function Zg(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(kc(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),Lc(t))}function Dd(t,e,n){for(const r of n)r instanceof Kg?(t.La.addReference(r.key,e),rb(t,r)):r instanceof Gg?(G("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||Zg(t,r.key)):ne()}function rb(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(G("SyncEngine","New document in limbo: "+n),t.xa.add(r),Lc(t))}function Lc(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new Y(Re.fromString(e)),r=t.qa.next();t.Na.set(r,new zA(n)),t.Oa=t.Oa.insert(n,r),Fg(t.remoteStore,new kn(Ht(Tc(n.path)),r,"TargetPurposeLimboResolution",gc.oe))}}async function gi(t,e,n){const r=ie(t),s=[],i=[],a=[];r.Fa.isEmpty()||(r.Fa.forEach((l,c)=>{a.push(r.Ka(c,e,n).then(h=>{var f;if((h||n)&&r.isPrimaryClient){const g=h?!h.fromCache:(f=n==null?void 0:n.targetChanges.get(c.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(c.targetId,g?"current":"not-current")}if(h){s.push(h);const g=Cc.Wi(c.targetId,h);i.push(g)}}))}),await Promise.all(a),r.Ca.d_(s),await async function(c,h){const f=ie(c);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",g=>x.forEach(h,_=>x.forEach(_.$i,b=>f.persistence.referenceDelegate.addReference(g,_.targetId,b)).next(()=>x.forEach(_.Ui,b=>f.persistence.referenceDelegate.removeReference(g,_.targetId,b)))))}catch(g){if(!ui(g))throw g;G("LocalStore","Failed to update sequence numbers: "+g)}for(const g of h){const _=g.targetId;if(!g.fromCache){const b=f.os.get(_),P=b.snapshotVersion,D=b.withLastLimboFreeSnapshotVersion(P);f.os=f.os.insert(_,D)}}}(r.localStore,i))}async function sb(t,e){const n=ie(t);if(!n.currentUser.isEqual(e)){G("SyncEngine","User change. New user:",e.toKey());const r=await Ng(n.localStore,e);n.currentUser=e,function(i,a){i.ka.forEach(l=>{l.forEach(c=>{c.reject(new z(O.CANCELLED,a))})}),i.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await gi(n,r.hs)}}function ib(t,e){const n=ie(t),r=n.Na.get(e);if(r&&r.va)return ce().add(r.key);{let s=ce();const i=n.Ma.get(e);if(!i)return s;for(const a of i){const l=n.Fa.get(a);s=s.unionWith(l.view.Va)}return s}}function em(t){const e=ie(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Jg.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=ib.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=eb.bind(null,e),e.Ca.d_=jA.bind(null,e.eventManager),e.Ca.$a=qA.bind(null,e.eventManager),e}function ob(t){const e=ie(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=tb.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=nb.bind(null,e),e}class Vd{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Xo(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return dA(this.persistence,new uA,e.initialUser,this.serializer)}createPersistence(e){return new aA(Pc.Zr,this.serializer)}createSharedClientState(e){return new vA}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class ab{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>kd(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=sb.bind(null,this.syncEngine),await UA(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new BA}()}createDatastore(e){const n=Xo(e.databaseInfo.databaseId),r=function(i){return new wA(i)}(e.databaseInfo);return function(i,a,l,c){return new RA(i,a,l,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,a,l){return new PA(r,s,i,a,l)}(this.localStore,this.datastore,e.asyncQueue,n=>kd(this.syncEngine,n,0),function(){return bd.D()?new bd:new EA}())}createSyncEngine(e,n){return function(s,i,a,l,c,h,f){const g=new KA(s,i,a,l,c,h);return f&&(g.Qa=!0),g}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=ie(s);G("RemoteStore","RemoteStore shutting down."),i.L_.add(5),await pi(i),i.k_.shutdown(),i.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class tm{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ga(this.observer.next,e)}error(e){this.observer.error?this.Ga(this.observer.error,e):fn("Uncaught Error in snapshot listener:",e.toString())}za(){this.muted=!0}Ga(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lb{constructor(e,n,r,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=it.UNAUTHENTICATED,this.clientId=tg.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{G("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(G("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new z(O.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new xn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=xc(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function qa(t,e){t.asyncQueue.verifyOperationInProgress(),G("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Ng(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Od(t,e){t.asyncQueue.verifyOperationInProgress();const n=await ub(t);G("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Rd(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>Rd(e.remoteStore,s)),t._onlineComponents=e}function cb(t){return t.name==="FirebaseError"?t.code===O.FAILED_PRECONDITION||t.code===O.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function ub(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){G("FirestoreClient","Using user provided OfflineComponentProvider");try{await qa(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!cb(n))throw n;Qr("Error using user provided cache. Falling back to memory cache: "+n),await qa(t,new Vd)}}else G("FirestoreClient","Using default OfflineComponentProvider"),await qa(t,new Vd);return t._offlineComponents}async function nm(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(G("FirestoreClient","Using user provided OnlineComponentProvider"),await Od(t,t._uninitializedComponentsProvider._online)):(G("FirestoreClient","Using default OnlineComponentProvider"),await Od(t,new ab))),t._onlineComponents}function hb(t){return nm(t).then(e=>e.syncEngine)}async function bl(t){const e=await nm(t),n=e.eventManager;return n.onListen=GA.bind(null,e.syncEngine),n.onUnlisten=XA.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=QA.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=YA.bind(null,e.syncEngine),n}function db(t,e,n={}){const r=new xn;return t.asyncQueue.enqueueAndForget(async()=>function(i,a,l,c,h){const f=new tm({next:_=>{a.enqueueAndForget(()=>Wg(i,g)),_.fromCache&&c.source==="server"?h.reject(new z(O.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(_)},error:_=>h.reject(_)}),g=new zg(l,f,{includeMetadataChanges:!0,_a:!0});return Hg(i,g)}(await bl(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function rm(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nd=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sm(t,e,n){if(!n)throw new z(O.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function fb(t,e,n,r){if(e===!0&&r===!0)throw new z(O.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function xd(t){if(!Y.isDocumentKey(t))throw new z(O.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Md(t){if(Y.isDocumentKey(t))throw new z(O.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function ea(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ne()}function zt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new z(O.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ea(t);throw new z(O.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ld{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new z(O.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new z(O.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}fb("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=rm((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new z(O.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new z(O.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new z(O.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ta{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ld({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new z(O.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new z(O.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ld(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new kw;switch(r.type){case"firstParty":return new Nw(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new z(O.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Nd.get(n);r&&(G("ComponentProvider","Removing Datastore"),Nd.delete(n),r.terminate())}(this),Promise.resolve()}}function pb(t,e,n,r={}){var s;const i=(t=zt(t,ta))._getSettings(),a=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==a&&Qr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:a,ssl:!1})),r.mockUserToken){let l,c;if(typeof r.mockUserToken=="string")l=r.mockUserToken,c=it.MOCK_USER;else{l=Wv(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new z(O.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new it(h)}t._authCredentials=new Dw(new eg(l,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Tr(this.firestore,e,this._query)}}class vt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Mn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new vt(this.firestore,e,this._key)}}class Mn extends Tr{constructor(e,n,r){super(e,n,Tc(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new vt(this.firestore,null,new Y(e))}withConverter(e){return new Mn(this.firestore,e,this._path)}}function im(t,e,...n){if(t=ht(t),sm("collection","path",e),t instanceof ta){const r=Re.fromString(e,...n);return Md(r),new Mn(t,null,r)}{if(!(t instanceof vt||t instanceof Mn))throw new z(O.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Re.fromString(e,...n));return Md(r),new Mn(t.firestore,null,r)}}function mi(t,e,...n){if(t=ht(t),arguments.length===1&&(e=tg.newId()),sm("doc","path",e),t instanceof ta){const r=Re.fromString(e,...n);return xd(r),new vt(t,null,new Y(r))}{if(!(t instanceof vt||t instanceof Mn))throw new z(O.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Re.fromString(e,...n));return xd(r),new vt(t.firestore,t instanceof Mn?t.converter:null,new Y(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gb{constructor(){this.au=Promise.resolve(),this.uu=[],this.cu=!1,this.lu=[],this.hu=null,this.Pu=!1,this.Iu=!1,this.Tu=[],this.t_=new Mg(this,"async_queue_retry"),this.Eu=()=>{const n=ja();n&&G("AsyncQueue","Visibility state changed to "+n.visibilityState),this.t_.jo()};const e=ja();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Eu)}get isShuttingDown(){return this.cu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.du(),this.Au(e)}enterRestrictedMode(e){if(!this.cu){this.cu=!0,this.Iu=e||!1;const n=ja();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Eu)}}enqueue(e){if(this.du(),this.cu)return new Promise(()=>{});const n=new xn;return this.Au(()=>this.cu&&this.Iu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.uu.push(e),this.Ru()))}async Ru(){if(this.uu.length!==0){try{await this.uu[0](),this.uu.shift(),this.t_.reset()}catch(e){if(!ui(e))throw e;G("AsyncQueue","Operation failed with retryable error: "+e)}this.uu.length>0&&this.t_.Go(()=>this.Ru())}}Au(e){const n=this.au.then(()=>(this.Pu=!0,e().catch(r=>{this.hu=r,this.Pu=!1;const s=function(a){let l=a.message||"";return a.stack&&(l=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),l}(r);throw fn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.Pu=!1,r))));return this.au=n,n}enqueueAfterDelay(e,n,r){this.du(),this.Tu.indexOf(e)>-1&&(n=0);const s=Nc.createAndSchedule(this,e,n,r,i=>this.Vu(i));return this.lu.push(s),s}du(){this.hu&&ne()}verifyOperationInProgress(){}async mu(){let e;do e=this.au,await e;while(e!==this.au)}fu(e){for(const n of this.lu)if(n.timerId===e)return!0;return!1}gu(e){return this.mu().then(()=>{this.lu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.lu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.mu()})}pu(e){this.Tu.push(e)}Vu(e){const n=this.lu.indexOf(e);this.lu.splice(n,1)}}function Fd(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}class yr extends ta{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=function(){return new gb}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||om(this),this._firestoreClient.terminate()}}function mb(t,e){const n=typeof t=="object"?t:dp(),r=typeof t=="string"?t:"(default)",s=nc(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=qv("firestore");i&&pb(s,...i)}return s}function Fc(t){return t._firestoreClient||om(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function om(t){var e,n,r;const s=t._freezeSettings(),i=function(l,c,h,f){return new Kw(l,c,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,rm(f.experimentalLongPollingOptions),f.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._firestoreClient=new lb(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ts(Ze.fromBase64String(e))}catch(n){throw new z(O.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new ts(Ze.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class na{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new z(O.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Je(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uc{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $c{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new z(O.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new z(O.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return me(this._lat,e._lat)||me(this._long,e._long)}}/**
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
 */class Bc{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _b=/^__.*__$/;class yb{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Kn(e,this.data,this.fieldMask,n,this.fieldTransforms):new di(e,this.data,n,this.fieldTransforms)}}class am{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Kn(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function lm(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ne()}}class jc{constructor(e,n,r,s,i,a){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.yu(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get wu(){return this.settings.wu}Su(e){return new jc(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}bu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Su({path:r,Du:!1});return s.vu(e),s}Cu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Su({path:r,Du:!1});return s.yu(),s}Fu(e){return this.Su({path:void 0,Du:!0})}Mu(e){return bo(e,this.settings.methodName,this.settings.xu||!1,this.path,this.settings.Ou)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}yu(){if(this.path)for(let e=0;e<this.path.length;e++)this.vu(this.path.get(e))}vu(e){if(e.length===0)throw this.Mu("Document fields must not be empty");if(lm(this.wu)&&_b.test(e))throw this.Mu('Document fields cannot begin and end with "__"')}}class vb{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Xo(e)}Nu(e,n,r,s=!1){return new jc({wu:e,methodName:n,Ou:r,path:Je.emptyPath(),Du:!1,xu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function qc(t){const e=t._freezeSettings(),n=Xo(t._databaseId);return new vb(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Eb(t,e,n,r,s,i={}){const a=t.Nu(i.merge||i.mergeFields?2:0,e,n,s);Hc("Data must be an object, but it was:",a,r);const l=cm(r,a);let c,h;if(i.merge)c=new bt(a.fieldMask),h=a.fieldTransforms;else if(i.mergeFields){const f=[];for(const g of i.mergeFields){const _=Rl(e,g,n);if(!a.contains(_))throw new z(O.INVALID_ARGUMENT,`Field '${_}' is specified in your field mask but missing from your input data.`);hm(f,_)||f.push(_)}c=new bt(f),h=a.fieldTransforms.filter(g=>c.covers(g.field))}else c=null,h=a.fieldTransforms;return new yb(new yt(l),c,h)}class ra extends Uc{_toFieldTransform(e){if(e.wu!==2)throw e.wu===1?e.Mu(`${this._methodName}() can only appear at the top level of your update data`):e.Mu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ra}}function Tb(t,e,n,r){const s=t.Nu(1,e,n);Hc("Data must be an object, but it was:",s,r);const i=[],a=yt.empty();vr(r,(c,h)=>{const f=Wc(e,c,n);h=ht(h);const g=s.Cu(f);if(h instanceof ra)i.push(f);else{const _=_i(h,g);_!=null&&(i.push(f),a.set(f,_))}});const l=new bt(i);return new am(a,l,s.fieldTransforms)}function Ib(t,e,n,r,s,i){const a=t.Nu(1,e,n),l=[Rl(e,r,n)],c=[s];if(i.length%2!=0)throw new z(O.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let _=0;_<i.length;_+=2)l.push(Rl(e,i[_])),c.push(i[_+1]);const h=[],f=yt.empty();for(let _=l.length-1;_>=0;--_)if(!hm(h,l[_])){const b=l[_];let P=c[_];P=ht(P);const D=a.Cu(b);if(P instanceof ra)h.push(b);else{const V=_i(P,D);V!=null&&(h.push(b),f.set(b,V))}}const g=new bt(h);return new am(f,g,a.fieldTransforms)}function wb(t,e,n,r=!1){return _i(n,t.Nu(r?4:3,e))}function _i(t,e){if(um(t=ht(t)))return Hc("Unsupported field value:",e,t),cm(t,e);if(t instanceof Uc)return function(r,s){if(!lm(s.wu))throw s.Mu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Mu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Du&&e.wu!==4)throw e.Mu("Nested arrays are not supported");return function(r,s){const i=[];let a=0;for(const l of r){let c=_i(l,s.Fu(a));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),a++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=ht(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return g0(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=$e.fromDate(r);return{timestampValue:wo(s.serializer,i)}}if(r instanceof $e){const i=new $e(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:wo(s.serializer,i)}}if(r instanceof $c)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof ts)return{bytesValue:Sg(s.serializer,r._byteString)};if(r instanceof vt){const i=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(i))throw s.Mu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Rc(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Bc)return function(a,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:a.toArray().map(c=>{if(typeof c!="number")throw l.Mu("VectorValues must only contain numeric values.");return Ic(l.serializer,c)})}}}}}}(r,s);throw s.Mu(`Unsupported field value: ${ea(r)}`)}(t,e)}function cm(t,e){const n={};return ng(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):vr(t,(r,s)=>{const i=_i(s,e.bu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function um(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof $e||t instanceof $c||t instanceof ts||t instanceof vt||t instanceof Uc||t instanceof Bc)}function Hc(t,e,n){if(!um(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=ea(n);throw r==="an object"?e.Mu(t+" a custom object"):e.Mu(t+" "+r)}}function Rl(t,e,n){if((e=ht(e))instanceof na)return e._internalPath;if(typeof e=="string")return Wc(t,e);throw bo("Field path arguments must be of type string or ",t,!1,void 0,n)}const Ab=new RegExp("[~\\*/\\[\\]]");function Wc(t,e,n){if(e.search(Ab)>=0)throw bo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new na(...e.split("."))._internalPath}catch{throw bo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function bo(t,e,n,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||a)&&(c+=" (found",i&&(c+=` in field ${r}`),a&&(c+=` in document ${s}`),c+=")"),new z(O.INVALID_ARGUMENT,l+t+c)}function hm(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dm{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new vt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new bb(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(zc("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class bb extends dm{data(){return super.data()}}function zc(t,e){return typeof e=="string"?Wc(t,e):e instanceof na?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fm(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new z(O.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Kc{}class Rb extends Kc{}function pm(t,e,...n){let r=[];e instanceof Kc&&r.push(e),r=r.concat(n),function(i){const a=i.filter(c=>c instanceof Gc).length,l=i.filter(c=>c instanceof sa).length;if(a>1||a>0&&l>0)throw new z(O.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class sa extends Rb{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new sa(e,n,r)}_apply(e){const n=this._parse(e);return gm(e._query,n),new Tr(e.firestore,e.converter,ml(e._query,n))}_parse(e){const n=qc(e.firestore);return function(i,a,l,c,h,f,g){let _;if(h.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new z(O.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){$d(g,f);const b=[];for(const P of g)b.push(Ud(c,i,P));_={arrayValue:{values:b}}}else _=Ud(c,i,g)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||$d(g,f),_=wb(l,a,g,f==="in"||f==="not-in");return Me.create(h,f,_)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function Sl(t,e,n){const r=e,s=zc("where",t);return sa._create(s,r,n)}class Gc extends Kc{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Gc(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Mt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let a=s;const l=i.getFlattenedFilters();for(const c of l)gm(a,c),a=ml(a,c)}(e._query,n),new Tr(e.firestore,e.converter,ml(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Ud(t,e,n){if(typeof(n=ht(n))=="string"){if(n==="")throw new z(O.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!hg(e)&&n.indexOf("/")!==-1)throw new z(O.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Re.fromString(n));if(!Y.isDocumentKey(r))throw new z(O.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return od(t,new Y(r))}if(n instanceof vt)return od(t,n._key);throw new z(O.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ea(n)}.`)}function $d(t,e){if(!Array.isArray(t)||t.length===0)throw new z(O.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function gm(t,e){const n=function(s,i){for(const a of s)for(const l of a.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new z(O.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new z(O.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class Sb{convertValue(e,n="none"){switch(_r(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ve(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(mr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw ne()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return vr(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(a=>Ve(a.doubleValue));return new Bc(i)}convertGeoPoint(e){return new $c(Ve(e.latitude),Ve(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=_c(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Qs(e));default:return null}}convertTimestamp(e){const n=$n(e);return new $e(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Re.fromString(e);we(Og(r));const s=new Js(r.get(1),r.get(3)),i=new Y(r.popFirst(5));return s.isEqual(n)||fn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pb(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class mm extends dm{constructor(e,n,r,s,i,a){super(e,n,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new no(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(zc("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class no extends mm{data(e={}){return super.data(e)}}class _m{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new ks(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new no(this._firestore,this._userDataWriter,r.key,r,new ks(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new z(O.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(l=>{const c=new no(s._firestore,s._userDataWriter,l.doc.key,l.doc,new ks(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const c=new no(s._firestore,s._userDataWriter,l.doc.key,l.doc,new ks(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,f=-1;return l.type!==0&&(h=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),f=a.indexOf(l.doc.key)),{type:Cb(l.type),doc:c,oldIndex:h,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function Cb(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ne()}}class Qc extends Sb{constructor(e){super(),this.firestore=e}convertBytes(e){return new ts(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new vt(this.firestore,null,n)}}function ym(t){t=zt(t,Tr);const e=zt(t.firestore,yr),n=Fc(e),r=new Qc(e);return fm(t._query),db(n,t._query).then(s=>new _m(e,r,t,s))}function vm(t,e,n,...r){t=zt(t,vt);const s=zt(t.firestore,yr),i=qc(s);let a;return a=typeof(e=ht(e))=="string"||e instanceof na?Ib(i,"updateDoc",t._key,e,n,r):Tb(i,"updateDoc",t._key,e),Jc(s,[a.toMutation(t._key,xt.exists(!0))])}function kb(t){return Jc(zt(t.firestore,yr),[new wc(t._key,xt.none())])}function Db(t,e){const n=zt(t.firestore,yr),r=mi(t),s=Pb(t.converter,e);return Jc(n,[Eb(qc(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,xt.exists(!1))]).then(()=>r)}function Vb(t,...e){var n,r,s;t=ht(t);let i={includeMetadataChanges:!1,source:"default"},a=0;typeof e[a]!="object"||Fd(e[a])||(i=e[a],a++);const l={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(Fd(e[a])){const g=e[a];e[a]=(n=g.next)===null||n===void 0?void 0:n.bind(g),e[a+1]=(r=g.error)===null||r===void 0?void 0:r.bind(g),e[a+2]=(s=g.complete)===null||s===void 0?void 0:s.bind(g)}let c,h,f;if(t instanceof vt)h=zt(t.firestore,yr),f=Tc(t._key.path),c={next:g=>{e[a]&&e[a](Ob(h,t,g))},error:e[a+1],complete:e[a+2]};else{const g=zt(t,Tr);h=zt(g.firestore,yr),f=g._query;const _=new Qc(h);c={next:b=>{e[a]&&e[a](new _m(h,_,g,b))},error:e[a+1],complete:e[a+2]},fm(t._query)}return function(_,b,P,D){const V=new tm(D),j=new zg(b,V,P);return _.asyncQueue.enqueueAndForget(async()=>Hg(await bl(_),j)),()=>{V.za(),_.asyncQueue.enqueueAndForget(async()=>Wg(await bl(_),j))}}(Fc(h),f,l,c)}function Jc(t,e){return function(r,s){const i=new xn;return r.asyncQueue.enqueueAndForget(async()=>ZA(await hb(r),s,i)),i.promise}(Fc(t),e)}function Ob(t,e,n){const r=n.docs.get(e._key),s=new Qc(t);return new mm(t,s,e._key,r,new ks(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(s){is=s})(rs),Kr(new fr("firestore",(r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),l=new yr(new Vw(r.getProvider("auth-internal")),new Mw(r.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new z(O.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Js(h.options.projectId,f)}(a,s),a);return i=Object.assign({useFetchStreams:n},i),l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),Nn(td,"4.7.2",e),Nn(td,"4.7.2","esm2017")})();const ls=mb(_n),Em=im(ls,"relays");async function Nb(){const e=zn(_n).currentUser;if(!e)throw new Error("User is not authenticated");const n=im(ls,"relays"),r=pm(n,Sl("uid","==",e.uid));return(await ym(r)).docs.map(i=>{const a=i.data();return{id:i.id,uid:a.uid,name:a.name,state:a.state===!0||a.state==="true",maxOnTime_s:a.maxOnTime_s??void 0,turnedOnAt:a.turnedOnAt?a.turnedOnAt.toDate():void 0}})}async function xb(t,e){if(!zn(_n).currentUser)throw new Error("User is not authenticated");const s=mi(ls,"relays",t);await vm(s,{state:e})}async function Mb(t,e,n){if(!zn(_n).currentUser)throw new Error("User is not authenticated");const i=mi(ls,"relays",t);await vm(i,{name:e,maxOnTime_s:n})}async function Lb(t){const n=zn(_n).currentUser;if(!n)throw new Error("User is not authenticated");const r={...t,uid:n.uid};return{id:(await Db(Em,r)).id,...r}}async function Fb(t){if(!zn(_n).currentUser)throw new Error("User is not authenticated");const r=mi(ls,"relays",t);await kb(r)}async function Ub(t){const n=zn(_n).currentUser;if(!n)throw new Error("User is not authenticated");const r=pm(Em,Sl("uid","==",n.uid),Sl("name","==",t));return(await ym(r)).empty}function $b(t,e){if(!zn(_n).currentUser)throw new Error("User is not authenticated");const s=mi(ls,"relays",t);return Vb(s,i=>{if(i.exists()){const a=i.data(),l={id:i.id,uid:a.uid,name:a.name,state:a.state===!0||a.state==="true",maxOnTime_s:a.maxOnTime_s??void 0,turnedOnAt:a.turnedOnAt?a.turnedOnAt.toDate():void 0};e(l)}else console.error("Relay not found")})}const Xc=Yl("relay",()=>{const t=Se([]),e=Se(!1),n=Se(null),r=Se({}),s=async()=>{e.value=!0,n.value=null;try{t.value=await Nb(),t.value.forEach(P=>{_(P.id)})}catch(P){n.value="Failed to load relays",console.error(P)}finally{e.value=!1}},i=async(P,D,V)=>{try{await Mb(P,D,V);const j=t.value.find(Q=>Q.id===P);j&&(j.name=D,j.maxOnTime_s=V)}catch(j){console.error("Failed to update relay config:",j)}},a=async(P,D)=>{try{await xb(P,D);const V=t.value.find(j=>j.id===P);V&&(V.state=D)}catch(V){console.error("Failed to update relay state:",V)}},l=async P=>{try{const D=await Lb(P);t.value.push(D),_(D.id)}catch(D){console.error("Failed to add relay:",D)}},c=async P=>{try{await Fb(P),t.value=t.value.filter(D=>D.id!==P),b(P)}catch(D){console.error("Failed to delete relay:",D)}},h=async P=>{try{return await Ub(P)}catch(D){return console.error("Failed to check relay name uniqueness:",D),!1}};function f(P){return g(P.maxOnTime_s?P.maxOnTime_s:0)}function g(P){if(isNaN(P)||P<0)return"00:00:00";const D=Math.floor(P/3600),V=Math.floor(P%3600/60),j=P%60,Q=String(D).padStart(2,"0"),J=String(V).padStart(2,"0"),W=String(j).padStart(2,"0");return`${Q}:${J}:${W}`}const _=P=>{b(P),r.value[P]=$b(P,D=>{const V=t.value.findIndex(j=>j.id===P);V!==-1&&(t.value[V]=D)})},b=P=>{r.value[P]&&(r.value[P](),delete r.value[P])};return Kl(()=>{Object.keys(r.value).forEach(P=>{b(P)})}),{relays:t,loading:e,error:n,loadRelays:s,updateRelayConfig:i,updateRelayState:a,addRelay:l,isRelayNameUnique:h,deleteRelay:c,getMaxOnTime:f,secondsToHHMMSS:g}}),Bb=Rt({components:{ToggleButton:Cw},props:{relay:{type:Object,required:!0}},setup(t){const e=Xc(),n=Se(0);let r;const s=Se(t.relay.turnedOnAt),i=Se(!1);zl(async()=>{await l()}),Rf(()=>{clearTimeout(r)});const a=Uo(()=>{let _=t.relay.name;return t.relay.maxOnTime_s&&t.relay.maxOnTime_s>0&&(t.relay.state?_+=" - "+e.secondsToHHMMSS(n.value):_+=" - "+e.getMaxOnTime(t.relay)),_});async function l(){t.relay.maxOnTime_s!==0&&(n.value=h(),n.value!==0&&t.relay.state&&f())}async function c(_){_&&t.relay.maxOnTime_s&&(n.value=t.relay.maxOnTime_s),_?(s.value=t.relay.turnedOnAt,i.value=!0):i.value=!1,await e.updateRelayState(t.relay.id,_),!(!t.relay.maxOnTime_s||t.relay.maxOnTime_s===0)&&(_||(clearTimeout(r),n.value=0))}function h(){if(!t.relay.turnedOnAt||!t.relay.maxOnTime_s)return 0;const _=t.relay.turnedOnAt.getTime()+t.relay.maxOnTime_s*1e3;return Math.max(0,Math.floor((_-Date.now())/1e3))}function f(){!t.relay.maxOnTime_s||t.relay.maxOnTime_s===0||(clearTimeout(r),r=setTimeout(async()=>{n.value--,n.value!==0&&f()},1e3))}function g(){!s.value||!t.relay.turnedOnAt||s.value>=t.relay.turnedOnAt||(i.value=!1,f())}return Br(()=>t.relay.turnedOnAt,g),{displayName:a,isBlocked:i,handleToggle:c}}}),jb={class:"relay"},qb={class:"name"};function Hb(t,e,n,r,s,i){const a=at("toggle-button");return de(),Oe("div",jb,[He("div",qb,ti(t.displayName),1),We(a,{modelValue:t.$props.relay.state,isBlocked:t.isBlocked,"onUpdate:modelValue":t.handleToggle},null,8,["modelValue","isBlocked","onUpdate:modelValue"])])}const Wb=St(Bb,[["render",Hb],["__scopeId","data-v-5dc99cd3"]]),zb=Rt({name:"SwipeableListItem",emits:["left-action","right-action"],props:{blockSwipe:{type:Boolean,default:!1}},setup(t,{emit:e}){const n=Se(0),r=Se(0),s=Se(0),i=Se(!1),a=Se(!1);let l=100;const c=b=>{t.blockSwipe||(n.value=b.touches[0].clientX,l=b.currentTarget.clientWidth/4,s.value=Date.now())},h=b=>{if(t.blockSwipe)return;const P=b.touches[0].clientX;r.value=P-n.value,Math.abs(r.value)>l*2?a.value=!0:Math.abs(r.value)>l?(a.value=!1,i.value=!0):(a.value=!1,i.value=!1)},f=()=>{if(t.blockSwipe)return;const b=Date.now()-s.value;a.value&&b>1e3&&(r.value<0?_():g()),r.value=0,a.value=!1,i.value=!1},g=()=>{e("left-action")},_=()=>{e("right-action")};return{onTouchStart:c,onTouchMove:h,onTouchEnd:f,onLeftAction:g,onRightAction:_,translateX:r,thresholdOneHit:i}}}),Kb={class:"actions actions-left"},Gb={class:"actions actions-right"};function Qb(t,e,n,r,s,i){return de(),Oe("div",{class:"swipeable-list-item",onTouchstart:e[0]||(e[0]=(...a)=>t.onTouchStart&&t.onTouchStart(...a)),onTouchmove:e[1]||(e[1]=(...a)=>t.onTouchMove&&t.onTouchMove(...a)),onTouchend:e[2]||(e[2]=(...a)=>t.onTouchEnd&&t.onTouchEnd(...a))},[He("div",{class:ns(["buttons",{"direction-left":t.translateX>0,"direction-right":t.translateX<0,"threshold-one-hit":t.thresholdOneHit}])},[He("div",Kb,[Wi(t.$slots,"left-action",{},()=>[e[3]||(e[3]=ao("Edit"))])]),He("div",Gb,[Wi(t.$slots,"right-action",{},()=>[e[4]||(e[4]=ao("Delete"))])])],2),He("div",{class:"content",style:ei({transform:`translateX(${t.translateX}px)`})},[Wi(t.$slots,"default",{},void 0)],4)],32)}const Jb=St(zb,[["render",Qb],["__scopeId","data-v-8849e356"]]),Xb=Rt({components:{ButtonDefault:Zl},emits:["isDone"],props:{allowAdvancedSettings:{type:Boolean,default:!1},existingRelay:{type:Object,default:null}},setup(t,e){const n=Xc(),r=Se(""),s=Se(""),i=Se("");zl(()=>{t.existingRelay&&(r.value=t.existingRelay.name,s.value=n.getMaxOnTime(t.existingRelay))});async function a(){if(!await c()||!h())return;const g=f();t.existingRelay?await n.updateRelayConfig(t.existingRelay.id,r.value.trim(),g):await n.addRelay({name:r.value.trim(),state:!1,maxOnTime_s:g}),r.value="",e.emit("isDone")}function l(){e.emit("isDone")}async function c(){return r.value.trim().length<2?(i.value="Relay name must be at least 2 characters long.",!1):t.existingRelay&&t.existingRelay.name===r.value.trim()?!0:await n.isRelayNameUnique(r.value.trim())?(i.value="",!0):(i.value="Relay name already exists.",!1)}function h(){if(!t.allowAdvancedSettings)return!0;const g=s.value.trim();if(g==="")return!0;const b=/^([01]\d|2[0-3]):([0-5]\d):([0-5]\d)$/.test(g);return b||(i.value="Max on time must be in the format HH:MM:SS."),b}function f(){if(!t.allowAdvancedSettings)return 0;const g=s.value.trim(),[_,b,P]=g.split(":").map(Number);return _*3600+b*60+P}return{newRelayName:r,newMaxOnTime:s,nameError:i,saveRelay:a,abortChanges:l}}}),Yb={class:"relay-editable"},Zb={key:0,class:"header"},eR={key:1,class:"max-on-time"},tR={class:"action-buttons"},nR={key:2,class:"name-error"};function rR(t,e,n,r,s,i){const a=at("button-default");return de(),Oe("div",Yb,[t.$props.allowAdvancedSettings?(de(),Oe("div",Zb,"Name")):sn("",!0),Xu(He("input",{"onUpdate:modelValue":e[0]||(e[0]=l=>t.newRelayName=l),type:"text",placeholder:"Relay name",class:"relay-input"},null,512),[[wh,t.newRelayName]]),t.$props.allowAdvancedSettings?(de(),Oe("div",eR,[e[2]||(e[2]=He("div",{class:"header"},"Max on time",-1)),Xu(He("input",{"onUpdate:modelValue":e[1]||(e[1]=l=>t.newMaxOnTime=l),type:"text",placeholder:"HH:MM:SS or keep empty",class:"max-on-time-input"},null,512),[[wh,t.newMaxOnTime]])])):sn("",!0),He("div",tR,[We(a,{class:"button-save",text:"Save",onClick:t.saveRelay},null,8,["onClick"]),We(a,{class:"button-cancel",text:"Cancel",onClick:t.abortChanges},null,8,["onClick"])]),t.nameError?(de(),Oe("div",nR,ti(t.nameError),1)):sn("",!0)])}const sR=St(Xb,[["render",rR],["__scopeId","data-v-38fef80a"]]),iR=Rt({components:{RelayEditable:sR,SwipeableListItem:Jb,ButtonDefault:Zl,Relay:Wb,Spinner:tp,PageTitle:zp},setup(){const t=Xc(),e=Se(!1),n=Se("");bf(()=>{t.loadRelays()});function r(){e.value=!0}function s(c){n.value=c}async function i(c){await t.deleteRelay(c)}function a(){n.value=""}function l(){e.value=!1}return{relayStore:t,isAddingNewRelay:e,editableRelayId:n,startAddingRelay:r,requestEdit:s,requestDelete:i,onEditArrayDone:a,onAddNewArrayDone:l}}}),oR={class:"relays"},aR={key:1};function lR(t,e,n,r,s,i){const a=at("page-title"),l=at("spinner"),c=at("relay-editable"),h=at("relay"),f=at("swipeable-list-item"),g=at("button-default");return de(),Oe("div",oR,[We(a,{title:"Relays"}),t.relayStore.loading?(de(),wt(l,{key:0,"spinner-size":"20px","with-text":!0})):sn("",!0),!t.relayStore.loading&&!t.relayStore.error?(de(),Oe("div",aR,[(de(!0),Oe(It,null,ey(t.relayStore.relays,_=>(de(),wt(f,{blockSwipe:t.editableRelayId.length>0,onLeftAction:b=>t.requestEdit(_.id),onRightAction:b=>t.requestDelete(_.id)},{default:Hl(()=>[t.editableRelayId&&t.editableRelayId===_.id?(de(),wt(c,{key:_.id,allowAdvancedSettings:!0,existingRelay:_,onIsDone:t.onEditArrayDone},null,8,["existingRelay","onIsDone"])):(de(),wt(h,{key:_.id,relay:_},null,8,["relay"]))]),_:2},1032,["blockSwipe","onLeftAction","onRightAction"]))),256))])):sn("",!0),t.isAddingNewRelay?sn("",!0):(de(),wt(g,{key:2,text:"Add new Relay",onOnButtonClicked:t.startAddingRelay},null,8,["onOnButtonClicked"])),t.isAddingNewRelay?(de(),wt(c,{key:3,onIsDone:t.onAddNewArrayDone},null,8,["onIsDone"])):sn("",!0)])}const cR=St(iR,[["render",lR],["__scopeId","data-v-721f91dd"]]),uR=Rt({components:{PageTitle:zp},setup(){return{}}}),hR={class:"schedules"};function dR(t,e,n,r,s,i){const a=at("page-title");return de(),Oe("div",hR,[We(a,{title:"Schedules"})])}const fR=St(uR,[["render",dR],["__scopeId","data-v-b769630a"]]),pR=Rt({name:"App",components:{Schedules:fR,Relays:cR,TaskBar:Pv,SignIn:ww},setup(){const t=np(),e=ep();return{signedIn:Uo(()=>!!t.user),pageStore:e}}}),gR={class:"app"},mR={key:0,class:"signed-in"},_R={class:"body"};function yR(t,e,n,r,s,i){const a=at("relays"),l=at("schedules"),c=at("task-bar"),h=at("sign-in");return de(),Oe("div",gR,[t.signedIn?(de(),Oe("div",mR,[He("div",_R,[t.pageStore.currentPage==="relays"?(de(),wt(a,{key:0})):t.pageStore.currentPage==="schedules"?(de(),wt(l,{key:1})):sn("",!0)]),We(c)])):(de(),wt(h,{key:1}))])}const vR=St(pR,[["render",yR],["__scopeId","data-v-b43dde52"]]),Tm=gv(vR),ER=vv();Tm.use(ER);Tm.mount("#app");
