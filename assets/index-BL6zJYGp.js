(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function os(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const J={},Nt=[],xe=()=>{},fc=()=>!1,tr=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),as=t=>t.startsWith("onUpdate:"),se=Object.assign,cs=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},dc=Object.prototype.hasOwnProperty,H=(t,e)=>dc.call(t,e),k=Array.isArray,xt=t=>nr(t)==="[object Map]",no=t=>nr(t)==="[object Set]",D=t=>typeof t=="function",ne=t=>typeof t=="string",ft=t=>typeof t=="symbol",Q=t=>t!==null&&typeof t=="object",ro=t=>(Q(t)||D(t))&&D(t.then)&&D(t.catch),so=Object.prototype.toString,nr=t=>so.call(t),hc=t=>nr(t).slice(8,-1),io=t=>nr(t)==="[object Object]",ls=t=>ne(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,tn=os(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),rr=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},pc=/-(\w)/g,Ee=rr(t=>t.replace(pc,(e,n)=>n?n.toUpperCase():"")),gc=/\B([A-Z])/g,dt=rr(t=>t.replace(gc,"-$1").toLowerCase()),sr=rr(t=>t.charAt(0).toUpperCase()+t.slice(1)),yr=rr(t=>t?`on${sr(t)}`:""),ct=(t,e)=>!Object.is(t,e),Ir=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},oo=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},mc=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Js;const ao=()=>Js||(Js=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ir(t){if(k(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=ne(r)?yc(r):ir(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(ne(t)||Q(t))return t}const _c=/;(?![^(]*\))/g,vc=/:([^]+)/,bc=/\/\*[^]*?\*\//g;function yc(t){const e={};return t.replace(bc,"").split(_c).forEach(n=>{if(n){const r=n.split(vc);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function or(t){let e="";if(ne(t))e=t;else if(k(t))for(let n=0;n<t.length;n++){const r=or(t[n]);r&&(e+=r+" ")}else if(Q(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Ic="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",wc=os(Ic);function co(t){return!!t||t===""}const lo=t=>!!(t&&t.__v_isRef===!0),uo=t=>ne(t)?t:t==null?"":k(t)||Q(t)&&(t.toString===so||!D(t.toString))?lo(t)?uo(t.value):JSON.stringify(t,fo,2):String(t),fo=(t,e)=>lo(e)?fo(t,e.value):xt(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[wr(r,i)+" =>"]=s,n),{})}:no(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>wr(n))}:ft(e)?wr(e):Q(e)&&!k(e)&&!io(e)?String(e):e,wr=(t,e="")=>{var n;return ft(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let le;class ho{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=le,!e&&le&&(this.index=(le.scopes||(le.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=le;try{return le=this,e()}finally{le=n}}}on(){le=this}off(){le=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function po(t){return new ho(t)}function go(){return le}function Ec(t,e=!1){le&&le.cleanups.push(t)}let q;const Er=new WeakSet;class mo{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,le&&le.active&&le.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Er.has(this)&&(Er.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||vo(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Ys(this),bo(this);const e=q,n=Te;q=this,Te=!0;try{return this.fn()}finally{yo(this),q=e,Te=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)ds(e);this.deps=this.depsTail=void 0,Ys(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Er.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Br(this)&&this.run()}get dirty(){return Br(this)}}let _o=0,Dt;function vo(t){t.flags|=8,t.next=Dt,Dt=t}function us(){_o++}function fs(){if(--_o>0)return;let t;for(;Dt;){let e=Dt,n;for(;e;)e.flags&1||(e.flags&=-9),e=e.next;for(e=Dt,Dt=void 0;e;){if(n=e.next,e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function bo(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function yo(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),ds(r),Sc(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function Br(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Io(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Io(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===cn))return;t.globalVersion=cn;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!Br(t)){t.flags&=-3;return}const n=q,r=Te;q=t,Te=!0;try{bo(t);const s=t.fn(t._value);(e.version===0||ct(s,t._value))&&(t._value=s,e.version++)}catch(s){throw e.version++,s}finally{q=n,Te=r,yo(t),t.flags&=-3}}function ds(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r),!n.subs&&n.computed){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)ds(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function Sc(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Te=!0;const wo=[];function ht(){wo.push(Te),Te=!1}function pt(){const t=wo.pop();Te=t===void 0?!0:t}function Ys(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=q;q=void 0;try{e()}finally{q=n}}}let cn=0;class Tc{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class hs{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.target=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!q||!Te||q===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==q)n=this.activeLink=new Tc(q,this),q.deps?(n.prevDep=q.depsTail,q.depsTail.nextDep=n,q.depsTail=n):q.deps=q.depsTail=n,Eo(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=q.depsTail,n.nextDep=void 0,q.depsTail.nextDep=n,q.depsTail=n,q.deps===n&&(q.deps=r)}return n}trigger(e){this.version++,cn++,this.notify(e)}notify(e){us();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{fs()}}}function Eo(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)Eo(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Vn=new WeakMap,Et=Symbol(""),Hr=Symbol(""),ln=Symbol("");function ae(t,e,n){if(Te&&q){let r=Vn.get(t);r||Vn.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new hs),s.target=t,s.map=r,s.key=n),s.track()}}function ze(t,e,n,r,s,i){const o=Vn.get(t);if(!o){cn++;return}const a=c=>{c&&c.trigger()};if(us(),e==="clear")o.forEach(a);else{const c=k(t),f=c&&ls(n);if(c&&n==="length"){const d=Number(r);o.forEach((h,g)=>{(g==="length"||g===ln||!ft(g)&&g>=d)&&a(h)})}else switch(n!==void 0&&a(o.get(n)),f&&a(o.get(ln)),e){case"add":c?f&&a(o.get("length")):(a(o.get(Et)),xt(t)&&a(o.get(Hr)));break;case"delete":c||(a(o.get(Et)),xt(t)&&a(o.get(Hr)));break;case"set":xt(t)&&a(o.get(Et));break}}fs()}function Cc(t,e){const n=Vn.get(t);return n&&n.get(e)}function Pt(t){const e=B(t);return e===t?e:(ae(e,"iterate",ln),Ce(t)?e:e.map(ue))}function ps(t){return ae(t=B(t),"iterate",ln),t}const Ac={__proto__:null,[Symbol.iterator](){return Sr(this,Symbol.iterator,ue)},concat(...t){return Pt(this).concat(...t.map(e=>k(e)?Pt(e):e))},entries(){return Sr(this,"entries",t=>(t[1]=ue(t[1]),t))},every(t,e){return Fe(this,"every",t,e,void 0,arguments)},filter(t,e){return Fe(this,"filter",t,e,n=>n.map(ue),arguments)},find(t,e){return Fe(this,"find",t,e,ue,arguments)},findIndex(t,e){return Fe(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Fe(this,"findLast",t,e,ue,arguments)},findLastIndex(t,e){return Fe(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Fe(this,"forEach",t,e,void 0,arguments)},includes(...t){return Tr(this,"includes",t)},indexOf(...t){return Tr(this,"indexOf",t)},join(t){return Pt(this).join(t)},lastIndexOf(...t){return Tr(this,"lastIndexOf",t)},map(t,e){return Fe(this,"map",t,e,void 0,arguments)},pop(){return Qt(this,"pop")},push(...t){return Qt(this,"push",t)},reduce(t,...e){return Xs(this,"reduce",t,e)},reduceRight(t,...e){return Xs(this,"reduceRight",t,e)},shift(){return Qt(this,"shift")},some(t,e){return Fe(this,"some",t,e,void 0,arguments)},splice(...t){return Qt(this,"splice",t)},toReversed(){return Pt(this).toReversed()},toSorted(t){return Pt(this).toSorted(t)},toSpliced(...t){return Pt(this).toSpliced(...t)},unshift(...t){return Qt(this,"unshift",t)},values(){return Sr(this,"values",ue)}};function Sr(t,e,n){const r=ps(t),s=r[e]();return r!==t&&!Ce(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const Oc=Array.prototype;function Fe(t,e,n,r,s,i){const o=ps(t),a=o!==t&&!Ce(t),c=o[e];if(c!==Oc[e]){const h=c.apply(t,i);return a?ue(h):h}let f=n;o!==t&&(a?f=function(h,g){return n.call(this,ue(h),g,t)}:n.length>2&&(f=function(h,g){return n.call(this,h,g,t)}));const d=c.call(o,f,r);return a&&s?s(d):d}function Xs(t,e,n,r){const s=ps(t);let i=n;return s!==t&&(Ce(t)?n.length>3&&(i=function(o,a,c){return n.call(this,o,a,c,t)}):i=function(o,a,c){return n.call(this,o,ue(a),c,t)}),s[e](i,...r)}function Tr(t,e,n){const r=B(t);ae(r,"iterate",ln);const s=r[e](...n);return(s===-1||s===!1)&&vs(n[0])?(n[0]=B(n[0]),r[e](...n)):s}function Qt(t,e,n=[]){ht(),us();const r=B(t)[e].apply(t,n);return fs(),pt(),r}const Pc=os("__proto__,__v_isRef,__isVue"),So=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(ft));function Rc(t){ft(t)||(t=String(t));const e=B(this);return ae(e,"has",t),e.hasOwnProperty(t)}class To{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?Vc:Po:i?Oo:Ao).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=k(e);if(!s){let c;if(o&&(c=Ac[n]))return c;if(n==="hasOwnProperty")return Rc}const a=Reflect.get(e,n,ee(e)?e:r);return(ft(n)?So.has(n):Pc(n))||(s||ae(e,"get",n),i)?a:ee(a)?o&&ls(n)?a:a.value:Q(a)?s?Ro(a):cr(a):a}}class Co extends To{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const c=At(i);if(!Ce(r)&&!At(r)&&(i=B(i),r=B(r)),!k(e)&&ee(i)&&!ee(r))return c?!1:(i.value=r,!0)}const o=k(e)&&ls(n)?Number(n)<e.length:H(e,n),a=Reflect.set(e,n,r,ee(e)?e:s);return e===B(s)&&(o?ct(r,i)&&ze(e,"set",n,r):ze(e,"add",n,r)),a}deleteProperty(e,n){const r=H(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&ze(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!ft(n)||!So.has(n))&&ae(e,"has",n),r}ownKeys(e){return ae(e,"iterate",k(e)?"length":Et),Reflect.ownKeys(e)}}class kc extends To{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Dc=new Co,Nc=new kc,xc=new Co(!0);const gs=t=>t,ar=t=>Reflect.getPrototypeOf(t);function Pn(t,e,n=!1,r=!1){t=t.__v_raw;const s=B(t),i=B(e);n||(ct(e,i)&&ae(s,"get",e),ae(s,"get",i));const{has:o}=ar(s),a=r?gs:n?ys:ue;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function Rn(t,e=!1){const n=this.__v_raw,r=B(n),s=B(t);return e||(ct(t,s)&&ae(r,"has",t),ae(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function kn(t,e=!1){return t=t.__v_raw,!e&&ae(B(t),"iterate",Et),Reflect.get(t,"size",t)}function Qs(t,e=!1){!e&&!Ce(t)&&!At(t)&&(t=B(t));const n=B(this);return ar(n).has.call(n,t)||(n.add(t),ze(n,"add",t,t)),this}function Zs(t,e,n=!1){!n&&!Ce(e)&&!At(e)&&(e=B(e));const r=B(this),{has:s,get:i}=ar(r);let o=s.call(r,t);o||(t=B(t),o=s.call(r,t));const a=i.call(r,t);return r.set(t,e),o?ct(e,a)&&ze(r,"set",t,e):ze(r,"add",t,e),this}function ei(t){const e=B(this),{has:n,get:r}=ar(e);let s=n.call(e,t);s||(t=B(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&ze(e,"delete",t,void 0),i}function ti(){const t=B(this),e=t.size!==0,n=t.clear();return e&&ze(t,"clear",void 0,void 0),n}function Dn(t,e){return function(r,s){const i=this,o=i.__v_raw,a=B(o),c=e?gs:t?ys:ue;return!t&&ae(a,"iterate",Et),o.forEach((f,d)=>r.call(s,c(f),c(d),i))}}function Nn(t,e,n){return function(...r){const s=this.__v_raw,i=B(s),o=xt(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,f=s[t](...r),d=n?gs:e?ys:ue;return!e&&ae(i,"iterate",c?Hr:Et),{next(){const{value:h,done:g}=f.next();return g?{value:h,done:g}:{value:a?[d(h[0]),d(h[1])]:d(h),done:g}},[Symbol.iterator](){return this}}}}function Xe(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Mc(){const t={get(i){return Pn(this,i)},get size(){return kn(this)},has:Rn,add:Qs,set:Zs,delete:ei,clear:ti,forEach:Dn(!1,!1)},e={get(i){return Pn(this,i,!1,!0)},get size(){return kn(this)},has:Rn,add(i){return Qs.call(this,i,!0)},set(i,o){return Zs.call(this,i,o,!0)},delete:ei,clear:ti,forEach:Dn(!1,!0)},n={get(i){return Pn(this,i,!0)},get size(){return kn(this,!0)},has(i){return Rn.call(this,i,!0)},add:Xe("add"),set:Xe("set"),delete:Xe("delete"),clear:Xe("clear"),forEach:Dn(!0,!1)},r={get(i){return Pn(this,i,!0,!0)},get size(){return kn(this,!0)},has(i){return Rn.call(this,i,!0)},add:Xe("add"),set:Xe("set"),delete:Xe("delete"),clear:Xe("clear"),forEach:Dn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Nn(i,!1,!1),n[i]=Nn(i,!0,!1),e[i]=Nn(i,!1,!0),r[i]=Nn(i,!0,!0)}),[t,n,e,r]}const[Lc,Uc,Fc,$c]=Mc();function ms(t,e){const n=e?t?$c:Fc:t?Uc:Lc;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(H(n,s)&&s in r?n:r,s,i)}const Bc={get:ms(!1,!1)},Hc={get:ms(!1,!0)},jc={get:ms(!0,!1)};const Ao=new WeakMap,Oo=new WeakMap,Po=new WeakMap,Vc=new WeakMap;function Wc(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function zc(t){return t.__v_skip||!Object.isExtensible(t)?0:Wc(hc(t))}function cr(t){return At(t)?t:_s(t,!1,Dc,Bc,Ao)}function Kc(t){return _s(t,!1,xc,Hc,Oo)}function Ro(t){return _s(t,!0,Nc,jc,Po)}function _s(t,e,n,r,s){if(!Q(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=zc(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function St(t){return At(t)?St(t.__v_raw):!!(t&&t.__v_isReactive)}function At(t){return!!(t&&t.__v_isReadonly)}function Ce(t){return!!(t&&t.__v_isShallow)}function vs(t){return t?!!t.__v_raw:!1}function B(t){const e=t&&t.__v_raw;return e?B(e):t}function bs(t){return!H(t,"__v_skip")&&Object.isExtensible(t)&&oo(t,"__v_skip",!0),t}const ue=t=>Q(t)?cr(t):t,ys=t=>Q(t)?Ro(t):t;function ee(t){return t?t.__v_isRef===!0:!1}function lr(t){return Gc(t,!1)}function Gc(t,e){return ee(t)?t:new qc(t,e)}class qc{constructor(e,n){this.dep=new hs,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:B(e),this._value=n?e:ue(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||Ce(e)||At(e);e=r?e:B(e),ct(e,n)&&(this._rawValue=e,this._value=r?e:ue(e),this.dep.trigger())}}function Jc(t){return ee(t)?t.value:t}const Yc={get:(t,e,n)=>e==="__v_raw"?t:Jc(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return ee(s)&&!ee(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function ko(t){return St(t)?t:new Proxy(t,Yc)}function Xc(t){const e=k(t)?new Array(t.length):{};for(const n in t)e[n]=Zc(t,n);return e}class Qc{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return Cc(B(this._object),this._key)}}function Zc(t,e,n){const r=t[e];return ee(r)?r:new Qc(t,e,n)}class el{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new hs(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=cn-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&q!==this)return vo(this),!0}get value(){const e=this.dep.track();return Io(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function tl(t,e,n=!1){let r,s;return D(t)?r=t:(r=t.get,s=t.set),new el(r,s,n)}const xn={},Wn=new WeakMap;let yt;function nl(t,e=!1,n=yt){if(n){let r=Wn.get(n);r||Wn.set(n,r=[]),r.push(t)}}function rl(t,e,n=J){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:a,call:c}=n,f=C=>s?C:Ce(C)||s===!1||s===0?nt(C,1):nt(C);let d,h,g,S,R=!1,N=!1;if(ee(t)?(h=()=>t.value,R=Ce(t)):St(t)?(h=()=>f(t),R=!0):k(t)?(N=!0,R=t.some(C=>St(C)||Ce(C)),h=()=>t.map(C=>{if(ee(C))return C.value;if(St(C))return f(C);if(D(C))return c?c(C,2):C()})):D(t)?e?h=c?()=>c(t,2):t:h=()=>{if(g){ht();try{g()}finally{pt()}}const C=yt;yt=d;try{return c?c(t,3,[S]):t(S)}finally{yt=C}}:h=xe,e&&s){const C=h,F=s===!0?1/0:s;h=()=>nt(C(),F)}const Y=go(),$=()=>{d.stop(),Y&&cs(Y.effects,d)};if(i&&e){const C=e;e=(...F)=>{C(...F),$()}}let W=N?new Array(t.length).fill(xn):xn;const j=C=>{if(!(!(d.flags&1)||!d.dirty&&!C))if(e){const F=d.run();if(s||R||(N?F.some((pe,te)=>ct(pe,W[te])):ct(F,W))){g&&g();const pe=yt;yt=d;try{const te=[F,W===xn?void 0:N&&W[0]===xn?[]:W,S];c?c(e,3,te):e(...te),W=F}finally{yt=pe}}}else d.run()};return a&&a(j),d=new mo(h),d.scheduler=o?()=>o(j,!1):j,S=C=>nl(C,!1,d),g=d.onStop=()=>{const C=Wn.get(d);if(C){if(c)c(C,4);else for(const F of C)F();Wn.delete(d)}},e?r?j(!0):W=d.run():o?o(j.bind(null,!0),!0):d.run(),$.pause=d.pause.bind(d),$.resume=d.resume.bind(d),$.stop=$,$}function nt(t,e=1/0,n){if(e<=0||!Q(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,ee(t))nt(t.value,e,n);else if(k(t))for(let r=0;r<t.length;r++)nt(t[r],e,n);else if(no(t)||xt(t))t.forEach(r=>{nt(r,e,n)});else if(io(t)){for(const r in t)nt(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&nt(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function vn(t,e,n,r){try{return r?t(...r):t()}catch(s){ur(s,e,n)}}function Le(t,e,n,r){if(D(t)){const s=vn(t,e,n,r);return s&&ro(s)&&s.catch(i=>{ur(i,e,n)}),s}if(k(t)){const s=[];for(let i=0;i<t.length;i++)s.push(Le(t[i],e,n,r));return s}}function ur(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||J;if(e){let a=e.parent;const c=e.proxy,f=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const d=a.ec;if(d){for(let h=0;h<d.length;h++)if(d[h](t,c,f)===!1)return}a=a.parent}if(i){ht(),vn(i,null,10,[t,c,f]),pt();return}}sl(t,n,s,r,o)}function sl(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}let un=!1,jr=!1;const fe=[];let De=0;const Mt=[];let et=null,kt=0;const Do=Promise.resolve();let Is=null;function No(t){const e=Is||Do;return t?e.then(this?t.bind(this):t):e}function il(t){let e=un?De+1:0,n=fe.length;for(;e<n;){const r=e+n>>>1,s=fe[r],i=fn(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function ws(t){if(!(t.flags&1)){const e=fn(t),n=fe[fe.length-1];!n||!(t.flags&2)&&e>=fn(n)?fe.push(t):fe.splice(il(e),0,t),t.flags|=1,xo()}}function xo(){!un&&!jr&&(jr=!0,Is=Do.then(Lo))}function ol(t){k(t)?Mt.push(...t):et&&t.id===-1?et.splice(kt+1,0,t):t.flags&1||(Mt.push(t),t.flags|=1),xo()}function ni(t,e,n=un?De+1:0){for(;n<fe.length;n++){const r=fe[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;fe.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Mo(t){if(Mt.length){const e=[...new Set(Mt)].sort((n,r)=>fn(n)-fn(r));if(Mt.length=0,et){et.push(...e);return}for(et=e,kt=0;kt<et.length;kt++){const n=et[kt];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}et=null,kt=0}}const fn=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Lo(t){jr=!1,un=!0;try{for(De=0;De<fe.length;De++){const e=fe[De];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),vn(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;De<fe.length;De++){const e=fe[De];e&&(e.flags&=-2)}De=0,fe.length=0,Mo(),un=!1,Is=null,(fe.length||Mt.length)&&Lo()}}let oe=null,Uo=null;function zn(t){const e=oe;return oe=t,Uo=t&&t.type.__scopeId||null,e}function Fo(t,e=oe,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&fi(-1);const i=zn(e);let o;try{o=t(...s)}finally{zn(i),r._d&&fi(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function vt(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(ht(),Le(c,n,8,[t.el,a,t,e]),pt())}}const al=Symbol("_vte"),cl=t=>t.__isTeleport;function Es(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Es(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function Wt(t,e){return D(t)?se({name:t.name},e,{setup:t}):t}function $o(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Vr(t,e,n,r,s=!1){if(k(t)){t.forEach((R,N)=>Vr(R,e&&(k(e)?e[N]:e),n,r,s));return}if(Lt(r)&&!s)return;const i=r.shapeFlag&4?Os(r.component):r.el,o=s?null:i,{i:a,r:c}=t,f=e&&e.r,d=a.refs===J?a.refs={}:a.refs,h=a.setupState,g=B(h),S=h===J?()=>!1:R=>H(g,R);if(f!=null&&f!==c&&(ne(f)?(d[f]=null,S(f)&&(h[f]=null)):ee(f)&&(f.value=null)),D(c))vn(c,a,12,[o,d]);else{const R=ne(c),N=ee(c);if(R||N){const Y=()=>{if(t.f){const $=R?S(c)?h[c]:d[c]:c.value;s?k($)&&cs($,i):k($)?$.includes(i)||$.push(i):R?(d[c]=[i],S(c)&&(h[c]=d[c])):(c.value=[i],t.k&&(d[t.k]=c.value))}else R?(d[c]=o,S(c)&&(h[c]=o)):N&&(c.value=o,t.k&&(d[t.k]=o))};o?(Y.id=-1,ve(Y,n)):Y()}}}const Lt=t=>!!t.type.__asyncLoader,Bo=t=>t.type.__isKeepAlive;function ll(t,e){Ho(t,"a",e)}function ul(t,e){Ho(t,"da",e)}function Ho(t,e,n=re){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(fr(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Bo(s.parent.vnode)&&fl(r,e,n,s),s=s.parent}}function fl(t,e,n,r){const s=fr(e,t,r,!0);jo(()=>{cs(r[e],s)},n)}function fr(t,e,n=re,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{ht();const a=bn(n),c=Le(e,n,t,o);return a(),pt(),c});return r?s.unshift(i):s.push(i),i}}const Je=t=>(e,n=re)=>{(!pr||t==="sp")&&fr(t,(...r)=>e(...r),n)},dl=Je("bm"),hl=Je("m"),pl=Je("bu"),gl=Je("u"),ml=Je("bum"),jo=Je("um"),_l=Je("sp"),vl=Je("rtg"),bl=Je("rtc");function yl(t,e=re){fr("ec",t,e)}const Il="components";function dn(t,e){return El(Il,t,!0,e)||t}const wl=Symbol.for("v-ndc");function El(t,e,n=!0,r=!1){const s=oe||re;if(s){const i=s.type;{const a=hu(i,!1);if(a&&(a===e||a===Ee(e)||a===sr(Ee(e))))return i}const o=ri(s[t]||i[t],e)||ri(s.appContext[t],e);return!o&&r?i:o}}function ri(t,e){return t&&(t[e]||t[Ee(e)]||t[sr(Ee(e))])}function Sl(t,e,n={},r,s){if(oe.ce||oe.parent&&Lt(oe.parent)&&oe.parent.ce)return n.name=e,he(),pn(we,null,[ye("slot",n,r)],64);let i=t[e];i&&i._c&&(i._d=!1),he();const o=i&&Vo(i(n)),a=pn(we,{key:(n.key||o&&o.key||`_${e}`)+(!o&&r?"_fb":"")},o||[],o&&t._===1?64:-2);return i&&i._c&&(i._d=!0),a}function Vo(t){return t.some(e=>Cs(e)?!(e.type===lt||e.type===we&&!Vo(e.children)):!0)?t:null}const Wr=t=>t?ua(t)?Os(t):Wr(t.parent):null,nn=se(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Wr(t.parent),$root:t=>Wr(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Ss(t),$forceUpdate:t=>t.f||(t.f=()=>{ws(t.update)}),$nextTick:t=>t.n||(t.n=No.bind(t.proxy)),$watch:t=>Gl.bind(t)}),Cr=(t,e)=>t!==J&&!t.__isScriptSetup&&H(t,e),Tl={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let f;if(e[0]!=="$"){const S=o[e];if(S!==void 0)switch(S){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Cr(r,e))return o[e]=1,r[e];if(s!==J&&H(s,e))return o[e]=2,s[e];if((f=t.propsOptions[0])&&H(f,e))return o[e]=3,i[e];if(n!==J&&H(n,e))return o[e]=4,n[e];zr&&(o[e]=0)}}const d=nn[e];let h,g;if(d)return e==="$attrs"&&ae(t.attrs,"get",""),d(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==J&&H(n,e))return o[e]=4,n[e];if(g=c.config.globalProperties,H(g,e))return g[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Cr(s,e)?(s[e]=n,!0):r!==J&&H(r,e)?(r[e]=n,!0):H(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==J&&H(t,o)||Cr(e,o)||(a=i[0])&&H(a,o)||H(r,o)||H(nn,o)||H(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:H(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function si(t){return k(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let zr=!0;function Cl(t){const e=Ss(t),n=t.proxy,r=t.ctx;zr=!1,e.beforeCreate&&ii(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:f,created:d,beforeMount:h,mounted:g,beforeUpdate:S,updated:R,activated:N,deactivated:Y,beforeDestroy:$,beforeUnmount:W,destroyed:j,unmounted:C,render:F,renderTracked:pe,renderTriggered:te,errorCaptured:x,serverPrefetch:M,expose:X,inheritAttrs:Ie,components:Oe,directives:Ye,filters:qt}=e;if(f&&Al(f,r,null),o)for(const L in o){const K=o[L];D(K)&&(r[L]=K.bind(n))}if(s){const L=s.call(n,n);Q(L)&&(t.data=cr(L))}if(zr=!0,i)for(const L in i){const K=i[L],mt=D(K)?K.bind(n,n):D(K.get)?K.get.bind(n,n):xe,An=!D(K)&&D(K.set)?K.set.bind(n):xe,_t=Ps({get:mt,set:An});Object.defineProperty(r,L,{enumerable:!0,configurable:!0,get:()=>_t.value,set:Pe=>_t.value=Pe})}if(a)for(const L in a)Wo(a[L],r,n,L);if(c){const L=D(c)?c.call(n):c;Reflect.ownKeys(L).forEach(K=>{Nl(K,L[K])})}d&&ii(d,t,"c");function Z(L,K){k(K)?K.forEach(mt=>L(mt.bind(n))):K&&L(K.bind(n))}if(Z(dl,h),Z(hl,g),Z(pl,S),Z(gl,R),Z(ll,N),Z(ul,Y),Z(yl,x),Z(bl,pe),Z(vl,te),Z(ml,W),Z(jo,C),Z(_l,M),k(X))if(X.length){const L=t.exposed||(t.exposed={});X.forEach(K=>{Object.defineProperty(L,K,{get:()=>n[K],set:mt=>n[K]=mt})})}else t.exposed||(t.exposed={});F&&t.render===xe&&(t.render=F),Ie!=null&&(t.inheritAttrs=Ie),Oe&&(t.components=Oe),Ye&&(t.directives=Ye),M&&$o(t)}function Al(t,e,n=xe){k(t)&&(t=Kr(t));for(const r in t){const s=t[r];let i;Q(s)?"default"in s?i=rn(s.from||r,s.default,!0):i=rn(s.from||r):i=rn(s),ee(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function ii(t,e,n){Le(k(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Wo(t,e,n,r){let s=r.includes(".")?sa(n,r):()=>n[r];if(ne(t)){const i=e[t];D(i)&&Ln(s,i)}else if(D(t))Ln(s,t.bind(n));else if(Q(t))if(k(t))t.forEach(i=>Wo(i,e,n,r));else{const i=D(t.handler)?t.handler.bind(n):e[t.handler];D(i)&&Ln(s,i,t)}}function Ss(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(f=>Kn(c,f,o,!0)),Kn(c,e,o)),Q(e)&&i.set(e,c),c}function Kn(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Kn(t,i,n,!0),s&&s.forEach(o=>Kn(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=Ol[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Ol={data:oi,props:ai,emits:ai,methods:en,computed:en,beforeCreate:ce,created:ce,beforeMount:ce,mounted:ce,beforeUpdate:ce,updated:ce,beforeDestroy:ce,beforeUnmount:ce,destroyed:ce,unmounted:ce,activated:ce,deactivated:ce,errorCaptured:ce,serverPrefetch:ce,components:en,directives:en,watch:Rl,provide:oi,inject:Pl};function oi(t,e){return e?t?function(){return se(D(t)?t.call(this,this):t,D(e)?e.call(this,this):e)}:e:t}function Pl(t,e){return en(Kr(t),Kr(e))}function Kr(t){if(k(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function ce(t,e){return t?[...new Set([].concat(t,e))]:e}function en(t,e){return t?se(Object.create(null),t,e):e}function ai(t,e){return t?k(t)&&k(e)?[...new Set([...t,...e])]:se(Object.create(null),si(t),si(e??{})):e}function Rl(t,e){if(!t)return e;if(!e)return t;const n=se(Object.create(null),t);for(const r in e)n[r]=ce(t[r],e[r]);return n}function zo(){return{app:null,config:{isNativeTag:fc,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let kl=0;function Dl(t,e){return function(r,s=null){D(r)||(r=se({},r)),s!=null&&!Q(s)&&(s=null);const i=zo(),o=new WeakSet,a=[];let c=!1;const f=i.app={_uid:kl++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:gu,get config(){return i.config},set config(d){},use(d,...h){return o.has(d)||(d&&D(d.install)?(o.add(d),d.install(f,...h)):D(d)&&(o.add(d),d(f,...h))),f},mixin(d){return i.mixins.includes(d)||i.mixins.push(d),f},component(d,h){return h?(i.components[d]=h,f):i.components[d]},directive(d,h){return h?(i.directives[d]=h,f):i.directives[d]},mount(d,h,g){if(!c){const S=f._ceVNode||ye(r,s);return S.appContext=i,g===!0?g="svg":g===!1&&(g=void 0),h&&e?e(S,d):t(S,d,g),c=!0,f._container=d,d.__vue_app__=f,Os(S.component)}},onUnmount(d){a.push(d)},unmount(){c&&(Le(a,f._instance,16),t(null,f._container),delete f._container.__vue_app__)},provide(d,h){return i.provides[d]=h,f},runWithContext(d){const h=Tt;Tt=f;try{return d()}finally{Tt=h}}};return f}}let Tt=null;function Nl(t,e){if(re){let n=re.provides;const r=re.parent&&re.parent.provides;r===n&&(n=re.provides=Object.create(r)),n[t]=e}}function rn(t,e,n=!1){const r=re||oe;if(r||Tt){const s=Tt?Tt._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&D(e)?e.call(r&&r.proxy):e}}function xl(){return!!(re||oe||Tt)}const Ko={},Go=()=>Object.create(Ko),qo=t=>Object.getPrototypeOf(t)===Ko;function Ml(t,e,n,r=!1){const s={},i=Go();t.propsDefaults=Object.create(null),Jo(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Kc(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function Ll(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=B(s),[c]=t.propsOptions;let f=!1;if((r||o>0)&&!(o&16)){if(o&8){const d=t.vnode.dynamicProps;for(let h=0;h<d.length;h++){let g=d[h];if(dr(t.emitsOptions,g))continue;const S=e[g];if(c)if(H(i,g))S!==i[g]&&(i[g]=S,f=!0);else{const R=Ee(g);s[R]=Gr(c,a,R,S,t,!1)}else S!==i[g]&&(i[g]=S,f=!0)}}}else{Jo(t,e,s,i)&&(f=!0);let d;for(const h in a)(!e||!H(e,h)&&((d=dt(h))===h||!H(e,d)))&&(c?n&&(n[h]!==void 0||n[d]!==void 0)&&(s[h]=Gr(c,a,h,void 0,t,!0)):delete s[h]);if(i!==a)for(const h in i)(!e||!H(e,h))&&(delete i[h],f=!0)}f&&ze(t.attrs,"set","")}function Jo(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(tn(c))continue;const f=e[c];let d;s&&H(s,d=Ee(c))?!i||!i.includes(d)?n[d]=f:(a||(a={}))[d]=f:dr(t.emitsOptions,c)||(!(c in r)||f!==r[c])&&(r[c]=f,o=!0)}if(i){const c=B(n),f=a||J;for(let d=0;d<i.length;d++){const h=i[d];n[h]=Gr(s,c,h,f[h],t,!H(f,h))}}return o}function Gr(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=H(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&D(c)){const{propsDefaults:f}=s;if(n in f)r=f[n];else{const d=bn(s);r=f[n]=c.call(null,e),d()}}else r=c;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===dt(n))&&(r=!0))}return r}const Ul=new WeakMap;function Yo(t,e,n=!1){const r=n?Ul:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!D(t)){const d=h=>{c=!0;const[g,S]=Yo(h,e,!0);se(o,g),S&&a.push(...S)};!n&&e.mixins.length&&e.mixins.forEach(d),t.extends&&d(t.extends),t.mixins&&t.mixins.forEach(d)}if(!i&&!c)return Q(t)&&r.set(t,Nt),Nt;if(k(i))for(let d=0;d<i.length;d++){const h=Ee(i[d]);ci(h)&&(o[h]=J)}else if(i)for(const d in i){const h=Ee(d);if(ci(h)){const g=i[d],S=o[h]=k(g)||D(g)?{type:g}:se({},g),R=S.type;let N=!1,Y=!0;if(k(R))for(let $=0;$<R.length;++$){const W=R[$],j=D(W)&&W.name;if(j==="Boolean"){N=!0;break}else j==="String"&&(Y=!1)}else N=D(R)&&R.name==="Boolean";S[0]=N,S[1]=Y,(N||H(S,"default"))&&a.push(h)}}const f=[o,a];return Q(t)&&r.set(t,f),f}function ci(t){return t[0]!=="$"&&!tn(t)}const Xo=t=>t[0]==="_"||t==="$stable",Ts=t=>k(t)?t.map(Ne):[Ne(t)],Fl=(t,e,n)=>{if(e._n)return e;const r=Fo((...s)=>Ts(e(...s)),n);return r._c=!1,r},Qo=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Xo(s))continue;const i=t[s];if(D(i))e[s]=Fl(s,i,r);else if(i!=null){const o=Ts(i);e[s]=()=>o}}},Zo=(t,e)=>{const n=Ts(e);t.slots.default=()=>n},ea=(t,e,n)=>{for(const r in e)(n||r!=="_")&&(t[r]=e[r])},$l=(t,e,n)=>{const r=t.slots=Go();if(t.vnode.shapeFlag&32){const s=e._;s?(ea(r,e,n),n&&oo(r,"_",s,!0)):Qo(e,r)}else e&&Zo(t,e)},Bl=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=J;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:ea(s,e,n):(i=!e.$stable,Qo(e,s)),o=e}else e&&(Zo(t,e),o={default:1});if(i)for(const a in s)!Xo(a)&&o[a]==null&&delete s[a]},ve=eu;function Hl(t){return jl(t)}function jl(t,e){const n=ao();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:f,setElementText:d,parentNode:h,nextSibling:g,setScopeId:S=xe,insertStaticContent:R}=t,N=(l,u,p,v=null,m=null,_=null,w=void 0,I=null,y=!!u.dynamicChildren)=>{if(l===u)return;l&&!Zt(l,u)&&(v=On(l),Pe(l,m,_,!0),l=null),u.patchFlag===-2&&(y=!1,u.dynamicChildren=null);const{type:b,ref:A,shapeFlag:E}=u;switch(b){case hr:Y(l,u,p,v);break;case lt:$(l,u,p,v);break;case Pr:l==null&&W(u,p,v,w);break;case we:Oe(l,u,p,v,m,_,w,I,y);break;default:E&1?F(l,u,p,v,m,_,w,I,y):E&6?Ye(l,u,p,v,m,_,w,I,y):(E&64||E&128)&&b.process(l,u,p,v,m,_,w,I,y,Yt)}A!=null&&m&&Vr(A,l&&l.ref,_,u||l,!u)},Y=(l,u,p,v)=>{if(l==null)r(u.el=a(u.children),p,v);else{const m=u.el=l.el;u.children!==l.children&&f(m,u.children)}},$=(l,u,p,v)=>{l==null?r(u.el=c(u.children||""),p,v):u.el=l.el},W=(l,u,p,v)=>{[l.el,l.anchor]=R(l.children,u,p,v,l.el,l.anchor)},j=({el:l,anchor:u},p,v)=>{let m;for(;l&&l!==u;)m=g(l),r(l,p,v),l=m;r(u,p,v)},C=({el:l,anchor:u})=>{let p;for(;l&&l!==u;)p=g(l),s(l),l=p;s(u)},F=(l,u,p,v,m,_,w,I,y)=>{u.type==="svg"?w="svg":u.type==="math"&&(w="mathml"),l==null?pe(u,p,v,m,_,w,I,y):M(l,u,m,_,w,I,y)},pe=(l,u,p,v,m,_,w,I)=>{let y,b;const{props:A,shapeFlag:E,transition:T,dirs:P}=l;if(y=l.el=o(l.type,_,A&&A.is,A),E&8?d(y,l.children):E&16&&x(l.children,y,null,v,m,Ar(l,_),w,I),P&&vt(l,null,v,"created"),te(y,l,l.scopeId,w,v),A){for(const G in A)G!=="value"&&!tn(G)&&i(y,G,null,A[G],_,v);"value"in A&&i(y,"value",null,A.value,_),(b=A.onVnodeBeforeMount)&&ke(b,v,l)}P&&vt(l,null,v,"beforeMount");const U=Vl(m,T);U&&T.beforeEnter(y),r(y,u,p),((b=A&&A.onVnodeMounted)||U||P)&&ve(()=>{b&&ke(b,v,l),U&&T.enter(y),P&&vt(l,null,v,"mounted")},m)},te=(l,u,p,v,m)=>{if(p&&S(l,p),v)for(let _=0;_<v.length;_++)S(l,v[_]);if(m){let _=m.subTree;if(u===_||oa(_.type)&&(_.ssContent===u||_.ssFallback===u)){const w=m.vnode;te(l,w,w.scopeId,w.slotScopeIds,m.parent)}}},x=(l,u,p,v,m,_,w,I,y=0)=>{for(let b=y;b<l.length;b++){const A=l[b]=I?tt(l[b]):Ne(l[b]);N(null,A,u,p,v,m,_,w,I)}},M=(l,u,p,v,m,_,w)=>{const I=u.el=l.el;let{patchFlag:y,dynamicChildren:b,dirs:A}=u;y|=l.patchFlag&16;const E=l.props||J,T=u.props||J;let P;if(p&&bt(p,!1),(P=T.onVnodeBeforeUpdate)&&ke(P,p,u,l),A&&vt(u,l,p,"beforeUpdate"),p&&bt(p,!0),(E.innerHTML&&T.innerHTML==null||E.textContent&&T.textContent==null)&&d(I,""),b?X(l.dynamicChildren,b,I,p,v,Ar(u,m),_):w||K(l,u,I,null,p,v,Ar(u,m),_,!1),y>0){if(y&16)Ie(I,E,T,p,m);else if(y&2&&E.class!==T.class&&i(I,"class",null,T.class,m),y&4&&i(I,"style",E.style,T.style,m),y&8){const U=u.dynamicProps;for(let G=0;G<U.length;G++){const V=U[G],ge=E[V],ie=T[V];(ie!==ge||V==="value")&&i(I,V,ge,ie,m,p)}}y&1&&l.children!==u.children&&d(I,u.children)}else!w&&b==null&&Ie(I,E,T,p,m);((P=T.onVnodeUpdated)||A)&&ve(()=>{P&&ke(P,p,u,l),A&&vt(u,l,p,"updated")},v)},X=(l,u,p,v,m,_,w)=>{for(let I=0;I<u.length;I++){const y=l[I],b=u[I],A=y.el&&(y.type===we||!Zt(y,b)||y.shapeFlag&70)?h(y.el):p;N(y,b,A,null,v,m,_,w,!0)}},Ie=(l,u,p,v,m)=>{if(u!==p){if(u!==J)for(const _ in u)!tn(_)&&!(_ in p)&&i(l,_,u[_],null,m,v);for(const _ in p){if(tn(_))continue;const w=p[_],I=u[_];w!==I&&_!=="value"&&i(l,_,I,w,m,v)}"value"in p&&i(l,"value",u.value,p.value,m)}},Oe=(l,u,p,v,m,_,w,I,y)=>{const b=u.el=l?l.el:a(""),A=u.anchor=l?l.anchor:a("");let{patchFlag:E,dynamicChildren:T,slotScopeIds:P}=u;P&&(I=I?I.concat(P):P),l==null?(r(b,p,v),r(A,p,v),x(u.children||[],p,A,m,_,w,I,y)):E>0&&E&64&&T&&l.dynamicChildren?(X(l.dynamicChildren,T,p,m,_,w,I),(u.key!=null||m&&u===m.subTree)&&ta(l,u,!0)):K(l,u,p,A,m,_,w,I,y)},Ye=(l,u,p,v,m,_,w,I,y)=>{u.slotScopeIds=I,l==null?u.shapeFlag&512?m.ctx.activate(u,p,v,w,y):qt(u,p,v,m,_,w,y):Cn(l,u,y)},qt=(l,u,p,v,m,_,w)=>{const I=l.component=cu(l,v,m);if(Bo(l)&&(I.ctx.renderer=Yt),lu(I,!1,w),I.asyncDep){if(m&&m.registerDep(I,Z,w),!l.el){const y=I.subTree=ye(lt);$(null,y,u,p)}}else Z(I,l,u,p,m,_,w)},Cn=(l,u,p)=>{const v=u.component=l.component;if(Ql(l,u,p))if(v.asyncDep&&!v.asyncResolved){L(v,u,p);return}else v.next=u,v.update();else u.el=l.el,v.vnode=u},Z=(l,u,p,v,m,_,w)=>{const I=()=>{if(l.isMounted){let{next:E,bu:T,u:P,parent:U,vnode:G}=l;{const me=na(l);if(me){E&&(E.el=G.el,L(l,E,w)),me.asyncDep.then(()=>{l.isUnmounted||I()});return}}let V=E,ge;bt(l,!1),E?(E.el=G.el,L(l,E,w)):E=G,T&&Ir(T),(ge=E.props&&E.props.onVnodeBeforeUpdate)&&ke(ge,U,E,G),bt(l,!0);const ie=Or(l),Se=l.subTree;l.subTree=ie,N(Se,ie,h(Se.el),On(Se),l,m,_),E.el=ie.el,V===null&&Zl(l,ie.el),P&&ve(P,m),(ge=E.props&&E.props.onVnodeUpdated)&&ve(()=>ke(ge,U,E,G),m)}else{let E;const{el:T,props:P}=u,{bm:U,m:G,parent:V,root:ge,type:ie}=l,Se=Lt(u);if(bt(l,!1),U&&Ir(U),!Se&&(E=P&&P.onVnodeBeforeMount)&&ke(E,V,u),bt(l,!0),T&&Ks){const me=()=>{l.subTree=Or(l),Ks(T,l.subTree,l,m,null)};Se&&ie.__asyncHydrate?ie.__asyncHydrate(T,l,me):me()}else{ge.ce&&ge.ce._injectChildStyle(ie);const me=l.subTree=Or(l);N(null,me,p,v,l,m,_),u.el=me.el}if(G&&ve(G,m),!Se&&(E=P&&P.onVnodeMounted)){const me=u;ve(()=>ke(E,V,me),m)}(u.shapeFlag&256||V&&Lt(V.vnode)&&V.vnode.shapeFlag&256)&&l.a&&ve(l.a,m),l.isMounted=!0,u=p=v=null}};l.scope.on();const y=l.effect=new mo(I);l.scope.off();const b=l.update=y.run.bind(y),A=l.job=y.runIfDirty.bind(y);A.i=l,A.id=l.uid,y.scheduler=()=>ws(A),bt(l,!0),b()},L=(l,u,p)=>{u.component=l;const v=l.vnode.props;l.vnode=u,l.next=null,Ll(l,u.props,v,p),Bl(l,u.children,p),ht(),ni(l),pt()},K=(l,u,p,v,m,_,w,I,y=!1)=>{const b=l&&l.children,A=l?l.shapeFlag:0,E=u.children,{patchFlag:T,shapeFlag:P}=u;if(T>0){if(T&128){An(b,E,p,v,m,_,w,I,y);return}else if(T&256){mt(b,E,p,v,m,_,w,I,y);return}}P&8?(A&16&&Jt(b,m,_),E!==b&&d(p,E)):A&16?P&16?An(b,E,p,v,m,_,w,I,y):Jt(b,m,_,!0):(A&8&&d(p,""),P&16&&x(E,p,v,m,_,w,I,y))},mt=(l,u,p,v,m,_,w,I,y)=>{l=l||Nt,u=u||Nt;const b=l.length,A=u.length,E=Math.min(b,A);let T;for(T=0;T<E;T++){const P=u[T]=y?tt(u[T]):Ne(u[T]);N(l[T],P,p,null,m,_,w,I,y)}b>A?Jt(l,m,_,!0,!1,E):x(u,p,v,m,_,w,I,y,E)},An=(l,u,p,v,m,_,w,I,y)=>{let b=0;const A=u.length;let E=l.length-1,T=A-1;for(;b<=E&&b<=T;){const P=l[b],U=u[b]=y?tt(u[b]):Ne(u[b]);if(Zt(P,U))N(P,U,p,null,m,_,w,I,y);else break;b++}for(;b<=E&&b<=T;){const P=l[E],U=u[T]=y?tt(u[T]):Ne(u[T]);if(Zt(P,U))N(P,U,p,null,m,_,w,I,y);else break;E--,T--}if(b>E){if(b<=T){const P=T+1,U=P<A?u[P].el:v;for(;b<=T;)N(null,u[b]=y?tt(u[b]):Ne(u[b]),p,U,m,_,w,I,y),b++}}else if(b>T)for(;b<=E;)Pe(l[b],m,_,!0),b++;else{const P=b,U=b,G=new Map;for(b=U;b<=T;b++){const _e=u[b]=y?tt(u[b]):Ne(u[b]);_e.key!=null&&G.set(_e.key,b)}let V,ge=0;const ie=T-U+1;let Se=!1,me=0;const Xt=new Array(ie);for(b=0;b<ie;b++)Xt[b]=0;for(b=P;b<=E;b++){const _e=l[b];if(ge>=ie){Pe(_e,m,_,!0);continue}let Re;if(_e.key!=null)Re=G.get(_e.key);else for(V=U;V<=T;V++)if(Xt[V-U]===0&&Zt(_e,u[V])){Re=V;break}Re===void 0?Pe(_e,m,_,!0):(Xt[Re-U]=b+1,Re>=me?me=Re:Se=!0,N(_e,u[Re],p,null,m,_,w,I,y),ge++)}const Gs=Se?Wl(Xt):Nt;for(V=Gs.length-1,b=ie-1;b>=0;b--){const _e=U+b,Re=u[_e],qs=_e+1<A?u[_e+1].el:v;Xt[b]===0?N(null,Re,p,qs,m,_,w,I,y):Se&&(V<0||b!==Gs[V]?_t(Re,p,qs,2):V--)}}},_t=(l,u,p,v,m=null)=>{const{el:_,type:w,transition:I,children:y,shapeFlag:b}=l;if(b&6){_t(l.component.subTree,u,p,v);return}if(b&128){l.suspense.move(u,p,v);return}if(b&64){w.move(l,u,p,Yt);return}if(w===we){r(_,u,p);for(let E=0;E<y.length;E++)_t(y[E],u,p,v);r(l.anchor,u,p);return}if(w===Pr){j(l,u,p);return}if(v!==2&&b&1&&I)if(v===0)I.beforeEnter(_),r(_,u,p),ve(()=>I.enter(_),m);else{const{leave:E,delayLeave:T,afterLeave:P}=I,U=()=>r(_,u,p),G=()=>{E(_,()=>{U(),P&&P()})};T?T(_,U,G):G()}else r(_,u,p)},Pe=(l,u,p,v=!1,m=!1)=>{const{type:_,props:w,ref:I,children:y,dynamicChildren:b,shapeFlag:A,patchFlag:E,dirs:T,cacheIndex:P}=l;if(E===-2&&(m=!1),I!=null&&Vr(I,null,p,l,!0),P!=null&&(u.renderCache[P]=void 0),A&256){u.ctx.deactivate(l);return}const U=A&1&&T,G=!Lt(l);let V;if(G&&(V=w&&w.onVnodeBeforeUnmount)&&ke(V,u,l),A&6)uc(l.component,p,v);else{if(A&128){l.suspense.unmount(p,v);return}U&&vt(l,null,u,"beforeUnmount"),A&64?l.type.remove(l,u,p,Yt,v):b&&!b.hasOnce&&(_!==we||E>0&&E&64)?Jt(b,u,p,!1,!0):(_===we&&E&384||!m&&A&16)&&Jt(y,u,p),v&&Vs(l)}(G&&(V=w&&w.onVnodeUnmounted)||U)&&ve(()=>{V&&ke(V,u,l),U&&vt(l,null,u,"unmounted")},p)},Vs=l=>{const{type:u,el:p,anchor:v,transition:m}=l;if(u===we){lc(p,v);return}if(u===Pr){C(l);return}const _=()=>{s(p),m&&!m.persisted&&m.afterLeave&&m.afterLeave()};if(l.shapeFlag&1&&m&&!m.persisted){const{leave:w,delayLeave:I}=m,y=()=>w(p,_);I?I(l.el,_,y):y()}else _()},lc=(l,u)=>{let p;for(;l!==u;)p=g(l),s(l),l=p;s(u)},uc=(l,u,p)=>{const{bum:v,scope:m,job:_,subTree:w,um:I,m:y,a:b}=l;li(y),li(b),v&&Ir(v),m.stop(),_&&(_.flags|=8,Pe(w,l,u,p)),I&&ve(I,u),ve(()=>{l.isUnmounted=!0},u),u&&u.pendingBranch&&!u.isUnmounted&&l.asyncDep&&!l.asyncResolved&&l.suspenseId===u.pendingId&&(u.deps--,u.deps===0&&u.resolve())},Jt=(l,u,p,v=!1,m=!1,_=0)=>{for(let w=_;w<l.length;w++)Pe(l[w],u,p,v,m)},On=l=>{if(l.shapeFlag&6)return On(l.component.subTree);if(l.shapeFlag&128)return l.suspense.next();const u=g(l.anchor||l.el),p=u&&u[al];return p?g(p):u};let br=!1;const Ws=(l,u,p)=>{l==null?u._vnode&&Pe(u._vnode,null,null,!0):N(u._vnode||null,l,u,null,null,null,p),u._vnode=l,br||(br=!0,ni(),Mo(),br=!1)},Yt={p:N,um:Pe,m:_t,r:Vs,mt:qt,mc:x,pc:K,pbc:X,n:On,o:t};let zs,Ks;return{render:Ws,hydrate:zs,createApp:Dl(Ws,zs)}}function Ar({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function bt({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Vl(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function ta(t,e,n=!1){const r=t.children,s=e.children;if(k(r)&&k(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=tt(s[i]),a.el=o.el),!n&&a.patchFlag!==-2&&ta(o,a)),a.type===hr&&(a.el=o.el)}}function Wl(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const f=t[r];if(f!==0){if(s=n[n.length-1],t[s]<f){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<f?i=a+1:o=a;f<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function na(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:na(e)}function li(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const zl=Symbol.for("v-scx"),Kl=()=>rn(zl);function Ln(t,e,n){return ra(t,e,n)}function ra(t,e,n=J){const{immediate:r,deep:s,flush:i,once:o}=n,a=se({},n);let c;if(pr)if(i==="sync"){const g=Kl();c=g.__watcherHandles||(g.__watcherHandles=[])}else if(!e||r)a.once=!0;else{const g=()=>{};return g.stop=xe,g.resume=xe,g.pause=xe,g}const f=re;a.call=(g,S,R)=>Le(g,f,S,R);let d=!1;i==="post"?a.scheduler=g=>{ve(g,f&&f.suspense)}:i!=="sync"&&(d=!0,a.scheduler=(g,S)=>{S?g():ws(g)}),a.augmentJob=g=>{e&&(g.flags|=4),d&&(g.flags|=2,f&&(g.id=f.uid,g.i=f))};const h=rl(t,e,a);return c&&c.push(h),h}function Gl(t,e,n){const r=this.proxy,s=ne(t)?t.includes(".")?sa(r,t):()=>r[t]:t.bind(r,r);let i;D(e)?i=e:(i=e.handler,n=e);const o=bn(this),a=ra(s,i.bind(r),n);return o(),a}function sa(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const ql=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Ee(e)}Modifiers`]||t[`${dt(e)}Modifiers`];function Jl(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||J;let s=n;const i=e.startsWith("update:"),o=i&&ql(r,e.slice(7));o&&(o.trim&&(s=n.map(d=>ne(d)?d.trim():d)),o.number&&(s=n.map(mc)));let a,c=r[a=yr(e)]||r[a=yr(Ee(e))];!c&&i&&(c=r[a=yr(dt(e))]),c&&Le(c,t,6,s);const f=r[a+"Once"];if(f){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Le(f,t,6,s)}}function ia(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!D(t)){const c=f=>{const d=ia(f,e,!0);d&&(a=!0,se(o,d))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(Q(t)&&r.set(t,null),null):(k(i)?i.forEach(c=>o[c]=null):se(o,i),Q(t)&&r.set(t,o),o)}function dr(t,e){return!t||!tr(e)?!1:(e=e.slice(2).replace(/Once$/,""),H(t,e[0].toLowerCase()+e.slice(1))||H(t,dt(e))||H(t,e))}function Or(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:a,emit:c,render:f,renderCache:d,props:h,data:g,setupState:S,ctx:R,inheritAttrs:N}=t,Y=zn(t);let $,W;try{if(n.shapeFlag&4){const C=s||r,F=C;$=Ne(f.call(F,C,d,h,S,g,R)),W=a}else{const C=e;$=Ne(C.length>1?C(h,{attrs:a,slots:o,emit:c}):C(h,null)),W=e.props?a:Yl(a)}}catch(C){sn.length=0,ur(C,t,1),$=ye(lt)}let j=$;if(W&&N!==!1){const C=Object.keys(W),{shapeFlag:F}=j;C.length&&F&7&&(i&&C.some(as)&&(W=Xl(W,i)),j=Ht(j,W,!1,!0))}return n.dirs&&(j=Ht(j,null,!1,!0),j.dirs=j.dirs?j.dirs.concat(n.dirs):n.dirs),n.transition&&Es(j,n.transition),$=j,zn(Y),$}const Yl=t=>{let e;for(const n in t)(n==="class"||n==="style"||tr(n))&&((e||(e={}))[n]=t[n]);return e},Xl=(t,e)=>{const n={};for(const r in t)(!as(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Ql(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,f=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?ui(r,o,f):!!o;if(c&8){const d=e.dynamicProps;for(let h=0;h<d.length;h++){const g=d[h];if(o[g]!==r[g]&&!dr(f,g))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?ui(r,o,f):!0:!!o;return!1}function ui(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!dr(n,i))return!0}return!1}function Zl({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const oa=t=>t.__isSuspense;function eu(t,e){e&&e.pendingBranch?k(t)?e.effects.push(...t):e.effects.push(t):ol(t)}const we=Symbol.for("v-fgt"),hr=Symbol.for("v-txt"),lt=Symbol.for("v-cmt"),Pr=Symbol.for("v-stc"),sn=[];let be=null;function he(t=!1){sn.push(be=t?null:[])}function tu(){sn.pop(),be=sn[sn.length-1]||null}let hn=1;function fi(t){hn+=t,t<0&&be&&(be.hasOnce=!0)}function aa(t){return t.dynamicChildren=hn>0?be||Nt:null,tu(),hn>0&&be&&be.push(t),t}function Ke(t,e,n,r,s,i){return aa(ut(t,e,n,r,s,i,!0))}function pn(t,e,n,r,s){return aa(ye(t,e,n,r,s,!0))}function Cs(t){return t?t.__v_isVNode===!0:!1}function Zt(t,e){return t.type===e.type&&t.key===e.key}const ca=({key:t})=>t??null,Un=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?ne(t)||ee(t)||D(t)?{i:oe,r:t,k:e,f:!!n}:t:null);function ut(t,e=null,n=null,r=0,s=null,i=t===we?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&ca(e),ref:e&&Un(e),scopeId:Uo,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:oe};return a?(As(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=ne(n)?8:16),hn>0&&!o&&be&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&be.push(c),c}const ye=nu;function nu(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===wl)&&(t=lt),Cs(t)){const a=Ht(t,e,!0);return n&&As(a,n),hn>0&&!i&&be&&(a.shapeFlag&6?be[be.indexOf(t)]=a:be.push(a)),a.patchFlag=-2,a}if(pu(t)&&(t=t.__vccOpts),e){e=ru(e);let{class:a,style:c}=e;a&&!ne(a)&&(e.class=or(a)),Q(c)&&(vs(c)&&!k(c)&&(c=se({},c)),e.style=ir(c))}const o=ne(t)?1:oa(t)?128:cl(t)?64:Q(t)?4:D(t)?2:0;return ut(t,e,n,r,s,o,i,!0)}function ru(t){return t?vs(t)||qo(t)?se({},t):t:null}function Ht(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:a,transition:c}=t,f=e?iu(s||{},e):s,d={__v_isVNode:!0,__v_skip:!0,type:t.type,props:f,key:f&&ca(f),ref:e&&e.ref?n&&i?k(i)?i.concat(Un(e)):[i,Un(e)]:Un(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==we?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Ht(t.ssContent),ssFallback:t.ssFallback&&Ht(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&r&&Es(d,c.clone(d)),d}function la(t=" ",e=0){return ye(hr,null,t,e)}function su(t="",e=!1){return e?(he(),pn(lt,null,t)):ye(lt,null,t)}function Ne(t){return t==null||typeof t=="boolean"?ye(lt):k(t)?ye(we,null,t.slice()):Cs(t)?tt(t):ye(hr,null,String(t))}function tt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Ht(t)}function As(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(k(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),As(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!qo(e)?e._ctx=oe:s===3&&oe&&(oe.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else D(e)?(e={default:e,_ctx:oe},n=32):(e=String(e),r&64?(n=16,e=[la(e)]):n=8);t.children=e,t.shapeFlag|=n}function iu(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=or([e.class,r.class]));else if(s==="style")e.style=ir([e.style,r.style]);else if(tr(s)){const i=e[s],o=r[s];o&&i!==o&&!(k(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function ke(t,e,n,r=null){Le(t,e,7,[n,r])}const ou=zo();let au=0;function cu(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||ou,i={uid:au++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new ho(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Yo(r,s),emitsOptions:ia(r,s),emit:null,emitted:null,propsDefaults:J,inheritAttrs:r.inheritAttrs,ctx:J,data:J,props:J,attrs:J,slots:J,refs:J,setupState:J,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Jl.bind(null,i),t.ce&&t.ce(i),i}let re=null,Gn,qr;{const t=ao(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};Gn=e("__VUE_INSTANCE_SETTERS__",n=>re=n),qr=e("__VUE_SSR_SETTERS__",n=>pr=n)}const bn=t=>{const e=re;return Gn(t),t.scope.on(),()=>{t.scope.off(),Gn(e)}},di=()=>{re&&re.scope.off(),Gn(null)};function ua(t){return t.vnode.shapeFlag&4}let pr=!1;function lu(t,e=!1,n=!1){e&&qr(e);const{props:r,children:s}=t.vnode,i=ua(t);Ml(t,r,i,e),$l(t,s,n);const o=i?uu(t,e):void 0;return e&&qr(!1),o}function uu(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Tl);const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?du(t):null,i=bn(t);ht();const o=vn(r,t,0,[t.props,s]);if(pt(),i(),ro(o)){if(Lt(t)||$o(t),o.then(di,di),e)return o.then(a=>{hi(t,a,e)}).catch(a=>{ur(a,t,0)});t.asyncDep=o}else hi(t,o,e)}else fa(t,e)}function hi(t,e,n){D(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Q(e)&&(t.setupState=ko(e)),fa(t,n)}let pi;function fa(t,e,n){const r=t.type;if(!t.render){if(!e&&pi&&!r.render){const s=r.template||Ss(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,f=se(se({isCustomElement:i,delimiters:a},o),c);r.render=pi(s,f)}}t.render=r.render||xe}{const s=bn(t);ht();try{Cl(t)}finally{pt(),s()}}}const fu={get(t,e){return ae(t,"get",""),t[e]}};function du(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,fu),slots:t.slots,emit:t.emit,expose:e}}function Os(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(ko(bs(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in nn)return nn[n](t)},has(e,n){return n in e||n in nn}})):t.proxy}function hu(t,e=!0){return D(t)?t.displayName||t.name:t.name||e&&t.__name}function pu(t){return D(t)&&"__vccOpts"in t}const Ps=(t,e)=>tl(t,e,pr),gu="3.5.10";/**
* @vue/runtime-dom v3.5.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Jr;const gi=typeof window<"u"&&window.trustedTypes;if(gi)try{Jr=gi.createPolicy("vue",{createHTML:t=>t})}catch{}const da=Jr?t=>Jr.createHTML(t):t=>t,mu="http://www.w3.org/2000/svg",_u="http://www.w3.org/1998/Math/MathML",$e=typeof document<"u"?document:null,mi=$e&&$e.createElement("template"),vu={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?$e.createElementNS(mu,t):e==="mathml"?$e.createElementNS(_u,t):n?$e.createElement(t,{is:n}):$e.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>$e.createTextNode(t),createComment:t=>$e.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>$e.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{mi.innerHTML=da(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const a=mi.content;if(r==="svg"||r==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},bu=Symbol("_vtc");function yu(t,e,n){const r=t[bu];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const _i=Symbol("_vod"),Iu=Symbol("_vsh"),wu=Symbol(""),Eu=/(^|;)\s*display\s*:/;function Su(t,e,n){const r=t.style,s=ne(n);let i=!1;if(n&&!s){if(e)if(ne(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&Fn(r,a,"")}else for(const o in e)n[o]==null&&Fn(r,o,"");for(const o in n)o==="display"&&(i=!0),Fn(r,o,n[o])}else if(s){if(e!==n){const o=r[wu];o&&(n+=";"+o),r.cssText=n,i=Eu.test(n)}}else e&&t.removeAttribute("style");_i in t&&(t[_i]=i?r.display:"",t[Iu]&&(r.display="none"))}const vi=/\s*!important$/;function Fn(t,e,n){if(k(n))n.forEach(r=>Fn(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=Tu(t,e);vi.test(n)?t.setProperty(dt(r),n.replace(vi,""),"important"):t[r]=n}}const bi=["Webkit","Moz","ms"],Rr={};function Tu(t,e){const n=Rr[e];if(n)return n;let r=Ee(e);if(r!=="filter"&&r in t)return Rr[e]=r;r=sr(r);for(let s=0;s<bi.length;s++){const i=bi[s]+r;if(i in t)return Rr[e]=i}return e}const yi="http://www.w3.org/1999/xlink";function Ii(t,e,n,r,s,i=wc(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(yi,e.slice(6,e.length)):t.setAttributeNS(yi,e,n):n==null||i&&!co(n)?t.removeAttribute(e):t.setAttribute(e,i?"":ft(n)?String(n):n)}function wi(t,e,n,r){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?da(n):n);return}const s=t.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const o=s==="OPTION"?t.getAttribute("value")||"":t.value,a=n==null?t.type==="checkbox"?"on":"":String(n);(o!==a||!("_value"in t))&&(t.value=a),n==null&&t.removeAttribute(e),t._value=n;return}let i=!1;if(n===""||n==null){const o=typeof t[e];o==="boolean"?n=co(n):n==null&&o==="string"?(n="",i=!0):o==="number"&&(n=0,i=!0)}try{t[e]=n}catch{}i&&t.removeAttribute(e)}function Cu(t,e,n,r){t.addEventListener(e,n,r)}function Au(t,e,n,r){t.removeEventListener(e,n,r)}const Ei=Symbol("_vei");function Ou(t,e,n,r,s=null){const i=t[Ei]||(t[Ei]={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=Pu(e);if(r){const f=i[e]=Du(r,s);Cu(t,a,f,c)}else o&&(Au(t,a,o,c),i[e]=void 0)}}const Si=/(?:Once|Passive|Capture)$/;function Pu(t){let e;if(Si.test(t)){e={};let r;for(;r=t.match(Si);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):dt(t.slice(2)),e]}let kr=0;const Ru=Promise.resolve(),ku=()=>kr||(Ru.then(()=>kr=0),kr=Date.now());function Du(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Le(Nu(r,n.value),e,5,[r])};return n.value=t,n.attached=ku(),n}function Nu(t,e){if(k(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Ti=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,xu=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?yu(t,r,o):e==="style"?Su(t,n,r):tr(e)?as(e)||Ou(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Mu(t,e,r,o))?(wi(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Ii(t,e,r,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!ne(r))?wi(t,Ee(e),r):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Ii(t,e,r,o))};function Mu(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Ti(e)&&D(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Ti(e)&&ne(n)?!1:e in t}const Lu={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Uu=(t,e)=>{const n=t._withKeys||(t._withKeys={}),r=e.join(".");return n[r]||(n[r]=s=>{if(!("key"in s))return;const i=dt(s.key);if(e.some(o=>o===i||Lu[o]===i))return t(s)})},Fu=se({patchProp:xu},vu);let Ci;function $u(){return Ci||(Ci=Hl(Fu))}const Bu=(...t)=>{const e=$u().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=ju(r);if(!s)return;const i=e._component;!D(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,Hu(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function Hu(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function ju(t){return ne(t)?document.querySelector(t):t}const Vu=Wt({name:"task-bar",setup(){return{}}}),zt=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},Wu={class:"task-bar"};function zu(t,e,n,r,s,i){return he(),Ke("div",Wu,e[0]||(e[0]=[ut("div",{class:"task"},"Schedule",-1),ut("div",{class:"task"},"Manual",-1)]))}const Ku=zt(Vu,[["render",zu],["__scopeId","data-v-8b4d6d72"]]),Gu=Wt({props:{spinnerSize:{type:String,default:"30px"},withText:{type:Boolean,default:!1}},setup(){return{}}}),qu={class:"spinner"},Ju={key:0,class:"text"};function Yu(t,e,n,r,s,i){return he(),Ke("div",qu,[ut("div",{class:"spinner-inner",style:ir({"--spinnerSize":t.spinnerSize})},null,4),t.withText?(he(),Ke("div",Ju,"Laden...")):su("",!0)])}const Xu=zt(Gu,[["render",Yu],["__scopeId","data-v-8cb8f775"]]),Qu=Wt({components:{Spinner:Xu},props:{text:{type:String,required:!0},isLoading:{type:Boolean,required:!1,default:!1}},emits:["onButtonClicked"],setup(t,e){function n(){e.emit("onButtonClicked")}return{onClicked:n}}}),Zu={key:1,class:"button-content"};function ef(t,e,n,r,s,i){const o=dn("spinner");return he(),Ke("div",{class:or(["button-default",{"is-loading":t.isLoading}]),tabindex:"0",onClick:e[0]||(e[0]=(...a)=>t.onClicked&&t.onClicked(...a)),onKeydown:e[1]||(e[1]=Uu((...a)=>t.onClicked&&t.onClicked(...a),["enter"]))},[t.isLoading?(he(),pn(o,{key:0,spinnerSize:"20px"})):(he(),Ke("div",Zu,[Sl(t.$slots,"icon",{},void 0),la(" "+uo(t.text),1)]))],34)}const tf=zt(Qu,[["render",ef],["__scopeId","data-v-5dad5cd0"]]);var nf=!1;/*!
 * pinia v2.2.2
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */let ha;const gr=t=>ha=t,pa=Symbol();function Yr(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var on;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(on||(on={}));function rf(){const t=po(!0),e=t.run(()=>lr({}));let n=[],r=[];const s=bs({install(i){gr(s),s._a=i,i.provide(pa,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!nf?r.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const ga=()=>{};function Ai(t,e,n,r=ga){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&go()&&Ec(s),s}function Rt(t,...e){t.slice().forEach(n=>{n(...e)})}const sf=t=>t(),Oi=Symbol(),Dr=Symbol();function Xr(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,r)=>t.set(r,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];Yr(s)&&Yr(r)&&t.hasOwnProperty(n)&&!ee(r)&&!St(r)?t[n]=Xr(s,r):t[n]=r}return t}const of=Symbol();function af(t){return!Yr(t)||!t.hasOwnProperty(of)}const{assign:Ze}=Object;function cf(t){return!!(ee(t)&&t.effect)}function lf(t,e,n,r){const{state:s,actions:i,getters:o}=e,a=n.state.value[t];let c;function f(){a||(n.state.value[t]=s?s():{});const d=Xc(n.state.value[t]);return Ze(d,i,Object.keys(o||{}).reduce((h,g)=>(h[g]=bs(Ps(()=>{gr(n);const S=n._s.get(t);return o[g].call(S,S)})),h),{}))}return c=ma(t,f,e,n,r,!0),c}function ma(t,e,n={},r,s,i){let o;const a=Ze({actions:{}},n),c={deep:!0};let f,d,h=[],g=[],S;const R=r.state.value[t];!i&&!R&&(r.state.value[t]={}),lr({});let N;function Y(x){let M;f=d=!1,typeof x=="function"?(x(r.state.value[t]),M={type:on.patchFunction,storeId:t,events:S}):(Xr(r.state.value[t],x),M={type:on.patchObject,payload:x,storeId:t,events:S});const X=N=Symbol();No().then(()=>{N===X&&(f=!0)}),d=!0,Rt(h,M,r.state.value[t])}const $=i?function(){const{state:M}=n,X=M?M():{};this.$patch(Ie=>{Ze(Ie,X)})}:ga;function W(){o.stop(),h=[],g=[],r._s.delete(t)}const j=(x,M="")=>{if(Oi in x)return x[Dr]=M,x;const X=function(){gr(r);const Ie=Array.from(arguments),Oe=[],Ye=[];function qt(L){Oe.push(L)}function Cn(L){Ye.push(L)}Rt(g,{args:Ie,name:X[Dr],store:F,after:qt,onError:Cn});let Z;try{Z=x.apply(this&&this.$id===t?this:F,Ie)}catch(L){throw Rt(Ye,L),L}return Z instanceof Promise?Z.then(L=>(Rt(Oe,L),L)).catch(L=>(Rt(Ye,L),Promise.reject(L))):(Rt(Oe,Z),Z)};return X[Oi]=!0,X[Dr]=M,X},C={_p:r,$id:t,$onAction:Ai.bind(null,g),$patch:Y,$reset:$,$subscribe(x,M={}){const X=Ai(h,x,M.detached,()=>Ie()),Ie=o.run(()=>Ln(()=>r.state.value[t],Oe=>{(M.flush==="sync"?d:f)&&x({storeId:t,type:on.direct,events:S},Oe)},Ze({},c,M)));return X},$dispose:W},F=cr(C);r._s.set(t,F);const te=(r._a&&r._a.runWithContext||sf)(()=>r._e.run(()=>(o=po()).run(()=>e({action:j}))));for(const x in te){const M=te[x];if(ee(M)&&!cf(M)||St(M))i||(R&&af(M)&&(ee(M)?M.value=R[x]:Xr(M,R[x])),r.state.value[t][x]=M);else if(typeof M=="function"){const X=j(M,x);te[x]=X,a.actions[x]=M}}return Ze(F,te),Ze(B(F),te),Object.defineProperty(F,"$state",{get:()=>r.state.value[t],set:x=>{Y(M=>{Ze(M,x)})}}),r._p.forEach(x=>{Ze(F,o.run(()=>x({store:F,app:r._a,pinia:r,options:a})))}),R&&i&&n.hydrate&&n.hydrate(F.$state,R),f=!0,d=!0,F}function uf(t,e,n){let r,s;const i=typeof e=="function";r=t,s=i?n:e;function o(a,c){const f=xl();return a=a||(f?rn(pa,null):null),a&&gr(a),a=ha,a._s.has(r)||(i?ma(r,e,s,a):lf(r,s,a)),a._s.get(r)}return o.$id=r,o}const _a=uf("user",()=>{const t=lr(null);return{user:t,setUser:n=>{t.value=n}}});var Pi={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const va=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},ff=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},ba={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,f=c?t[s+2]:0,d=i>>2,h=(i&3)<<4|a>>4;let g=(a&15)<<2|f>>6,S=f&63;c||(S=64,o||(g=64)),r.push(n[d],n[h],n[g],n[S])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(va(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):ff(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const f=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||f==null||h==null)throw new df;const g=i<<2|a>>4;if(r.push(g),f!==64){const S=a<<4&240|f>>2;if(r.push(S),h!==64){const R=f<<6&192|h;r.push(R)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class df extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const hf=function(t){const e=va(t);return ba.encodeByteArray(e,!0)},ya=function(t){return hf(t).replace(/\./g,"")},Ia=function(t){try{return ba.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function pf(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const gf=()=>pf().__FIREBASE_DEFAULTS__,mf=()=>{if(typeof process>"u"||typeof Pi>"u")return;const t=Pi.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},_f=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Ia(t[1]);return e&&JSON.parse(e)},Rs=()=>{try{return gf()||mf()||_f()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},vf=t=>{var e,n;return(n=(e=Rs())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},wa=()=>{var t;return(t=Rs())===null||t===void 0?void 0:t.config},Ea=t=>{var e;return(e=Rs())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bf{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function de(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function yf(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(de())}function If(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function wf(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Ef(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Sf(){const t=de();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Tf(){try{return typeof indexedDB=="object"}catch{return!1}}function Cf(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Af="FirebaseError";class gt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Af,Object.setPrototypeOf(this,gt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,yn.prototype.create)}}class yn{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Of(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new gt(s,a,r)}}function Of(t,e){return t.replace(Pf,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Pf=/\{\$([^}]+)}/g;function Rf(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function qn(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Ri(i)&&Ri(o)){if(!qn(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Ri(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function In(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function kf(t,e){const n=new Df(t,e);return n.subscribe.bind(n)}class Df{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Nf(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Nr),s.error===void 0&&(s.error=Nr),s.complete===void 0&&(s.complete=Nr);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Nf(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Nr(){}/**
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
 */function Kt(t){return t&&t._delegate?t._delegate:t}class jt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const It="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xf{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new bf;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Lf(e))try{this.getOrInitializeService({instanceIdentifier:It})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=It){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=It){return this.instances.has(e)}getOptions(e=It){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Mf(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=It){return this.component?this.component.multipleInstances?e:It:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Mf(t){return t===It?void 0:t}function Lf(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uf{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new xf(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var z;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(z||(z={}));const Ff={debug:z.DEBUG,verbose:z.VERBOSE,info:z.INFO,warn:z.WARN,error:z.ERROR,silent:z.SILENT},$f=z.INFO,Bf={[z.DEBUG]:"log",[z.VERBOSE]:"log",[z.INFO]:"info",[z.WARN]:"warn",[z.ERROR]:"error"},Hf=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=Bf[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Sa{constructor(e){this.name=e,this._logLevel=$f,this._logHandler=Hf,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in z))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Ff[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,z.DEBUG,...e),this._logHandler(this,z.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,z.VERBOSE,...e),this._logHandler(this,z.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,z.INFO,...e),this._logHandler(this,z.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,z.WARN,...e),this._logHandler(this,z.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,z.ERROR,...e),this._logHandler(this,z.ERROR,...e)}}const jf=(t,e)=>e.some(n=>t instanceof n);let ki,Di;function Vf(){return ki||(ki=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Wf(){return Di||(Di=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ta=new WeakMap,Qr=new WeakMap,Ca=new WeakMap,xr=new WeakMap,ks=new WeakMap;function zf(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(ot(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Ta.set(n,t)}).catch(()=>{}),ks.set(e,t),e}function Kf(t){if(Qr.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Qr.set(t,e)}let Zr={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Qr.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Ca.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ot(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Gf(t){Zr=t(Zr)}function qf(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Mr(this),e,...n);return Ca.set(r,e.sort?e.sort():[e]),ot(r)}:Wf().includes(t)?function(...e){return t.apply(Mr(this),e),ot(Ta.get(this))}:function(...e){return ot(t.apply(Mr(this),e))}}function Jf(t){return typeof t=="function"?qf(t):(t instanceof IDBTransaction&&Kf(t),jf(t,Vf())?new Proxy(t,Zr):t)}function ot(t){if(t instanceof IDBRequest)return zf(t);if(xr.has(t))return xr.get(t);const e=Jf(t);return e!==t&&(xr.set(t,e),ks.set(e,t)),e}const Mr=t=>ks.get(t);function Yf(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=ot(o);return r&&o.addEventListener("upgradeneeded",c=>{r(ot(o.result),c.oldVersion,c.newVersion,ot(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",f=>s(f.oldVersion,f.newVersion,f))}).catch(()=>{}),a}const Xf=["get","getKey","getAll","getAllKeys","count"],Qf=["put","add","delete","clear"],Lr=new Map;function Ni(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Lr.get(e))return Lr.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=Qf.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Xf.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let f=c.store;return r&&(f=f.index(a.shift())),(await Promise.all([f[n](...a),s&&c.done]))[0]};return Lr.set(e,i),i}Gf(t=>({...t,get:(e,n,r)=>Ni(e,n)||t.get(e,n,r),has:(e,n)=>!!Ni(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zf{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(ed(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function ed(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const es="@firebase/app",xi="0.10.11";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ge=new Sa("@firebase/app"),td="@firebase/app-compat",nd="@firebase/analytics-compat",rd="@firebase/analytics",sd="@firebase/app-check-compat",id="@firebase/app-check",od="@firebase/auth",ad="@firebase/auth-compat",cd="@firebase/database",ld="@firebase/database-compat",ud="@firebase/functions",fd="@firebase/functions-compat",dd="@firebase/installations",hd="@firebase/installations-compat",pd="@firebase/messaging",gd="@firebase/messaging-compat",md="@firebase/performance",_d="@firebase/performance-compat",vd="@firebase/remote-config",bd="@firebase/remote-config-compat",yd="@firebase/storage",Id="@firebase/storage-compat",wd="@firebase/firestore",Ed="@firebase/vertexai-preview",Sd="@firebase/firestore-compat",Td="firebase",Cd="10.13.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ts="[DEFAULT]",Ad={[es]:"fire-core",[td]:"fire-core-compat",[rd]:"fire-analytics",[nd]:"fire-analytics-compat",[id]:"fire-app-check",[sd]:"fire-app-check-compat",[od]:"fire-auth",[ad]:"fire-auth-compat",[cd]:"fire-rtdb",[ld]:"fire-rtdb-compat",[ud]:"fire-fn",[fd]:"fire-fn-compat",[dd]:"fire-iid",[hd]:"fire-iid-compat",[pd]:"fire-fcm",[gd]:"fire-fcm-compat",[md]:"fire-perf",[_d]:"fire-perf-compat",[vd]:"fire-rc",[bd]:"fire-rc-compat",[yd]:"fire-gcs",[Id]:"fire-gcs-compat",[wd]:"fire-fst",[Sd]:"fire-fst-compat",[Ed]:"fire-vertex","fire-js":"fire-js",[Td]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jn=new Map,Od=new Map,ns=new Map;function Mi(t,e){try{t.container.addComponent(e)}catch(n){Ge.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function gn(t){const e=t.name;if(ns.has(e))return Ge.debug(`There were multiple attempts to register component ${e}.`),!1;ns.set(e,t);for(const n of Jn.values())Mi(n,t);for(const n of Od.values())Mi(n,t);return!0}function Aa(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function He(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pd={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},at=new yn("app","Firebase",Pd);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rd{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new jt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw at.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wn=Cd;function Oa(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:ts,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw at.create("bad-app-name",{appName:String(s)});if(n||(n=wa()),!n)throw at.create("no-options");const i=Jn.get(s);if(i){if(qn(n,i.options)&&qn(r,i.config))return i;throw at.create("duplicate-app",{appName:s})}const o=new Uf(s);for(const c of ns.values())o.addComponent(c);const a=new Rd(n,r,o);return Jn.set(s,a),a}function kd(t=ts){const e=Jn.get(t);if(!e&&t===ts&&wa())return Oa();if(!e)throw at.create("no-app",{appName:t});return e}function Ut(t,e,n){var r;let s=(r=Ad[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ge.warn(a.join(" "));return}gn(new jt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const Dd="firebase-heartbeat-database",Nd=1,mn="firebase-heartbeat-store";let Ur=null;function Pa(){return Ur||(Ur=Yf(Dd,Nd,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(mn)}catch(n){console.warn(n)}}}}).catch(t=>{throw at.create("idb-open",{originalErrorMessage:t.message})})),Ur}async function xd(t){try{const n=(await Pa()).transaction(mn),r=await n.objectStore(mn).get(Ra(t));return await n.done,r}catch(e){if(e instanceof gt)Ge.warn(e.message);else{const n=at.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ge.warn(n.message)}}}async function Li(t,e){try{const r=(await Pa()).transaction(mn,"readwrite");await r.objectStore(mn).put(e,Ra(t)),await r.done}catch(n){if(n instanceof gt)Ge.warn(n.message);else{const r=at.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ge.warn(r.message)}}}function Ra(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Md=1024,Ld=30*24*60*60*1e3;class Ud{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new $d(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Ui();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=Ld}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Ge.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Ui(),{heartbeatsToSend:r,unsentEntries:s}=Fd(this._heartbeatsCache.heartbeats),i=ya(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return Ge.warn(n),""}}}function Ui(){return new Date().toISOString().substring(0,10)}function Fd(t,e=Md){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Fi(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Fi(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class $d{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Tf()?Cf().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await xd(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Li(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Li(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Fi(t){return ya(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bd(t){gn(new jt("platform-logger",e=>new Zf(e),"PRIVATE")),gn(new jt("heartbeat",e=>new Ud(e),"PRIVATE")),Ut(es,xi,t),Ut(es,xi,"esm2017"),Ut("fire-js","")}Bd("");function Ds(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function ka(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Hd=ka,Da=new yn("auth","Firebase",ka());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yn=new Sa("@firebase/auth");function jd(t,...e){Yn.logLevel<=z.WARN&&Yn.warn(`Auth (${wn}): ${t}`,...e)}function $n(t,...e){Yn.logLevel<=z.ERROR&&Yn.error(`Auth (${wn}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ue(t,...e){throw xs(t,...e)}function Ae(t,...e){return xs(t,...e)}function Ns(t,e,n){const r=Object.assign(Object.assign({},Hd()),{[e]:n});return new yn("auth","Firebase",r).create(e,{appName:t.name})}function Ct(t){return Ns(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Vd(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Ue(t,"argument-error"),Ns(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function xs(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Da.create(t,...e)}function O(t,e,...n){if(!t)throw xs(e,...n)}function je(t){const e="INTERNAL ASSERTION FAILED: "+t;throw $n(e),new Error(e)}function qe(t,e){t||je(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rs(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Wd(){return $i()==="http:"||$i()==="https:"}function $i(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zd(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Wd()||wf()||"connection"in navigator)?navigator.onLine:!0}function Kd(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En{constructor(e,n){this.shortDelay=e,this.longDelay=n,qe(n>e,"Short delay should be less than long delay!"),this.isMobile=yf()||Ef()}get(){return zd()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ms(t,e){qe(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Na{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;je("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;je("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;je("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gd={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qd=new En(3e4,6e4);function Ls(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Gt(t,e,n,r,s={}){return xa(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=In(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const f=Object.assign({method:e,headers:c},i);return If()||(f.referrerPolicy="no-referrer"),Na.fetch()(Ma(t,t.config.apiHost,n,a),f)})}async function xa(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Gd),e);try{const s=new Yd(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Mn(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,f]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Mn(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Mn(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Mn(t,"user-disabled",o);const d=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(f)throw Ns(t,d,f);Ue(t,d)}}catch(s){if(s instanceof gt)throw s;Ue(t,"network-request-failed",{message:String(s)})}}async function Jd(t,e,n,r,s={}){const i=await Gt(t,e,n,r,s);return"mfaPendingCredential"in i&&Ue(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Ma(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Ms(t.config,s):`${t.config.apiScheme}://${s}`}class Yd{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Ae(this.auth,"network-request-failed")),qd.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Mn(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Ae(t,e,r);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xd(t,e){return Gt(t,"POST","/v1/accounts:delete",e)}async function La(t,e){return Gt(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function an(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Qd(t,e=!1){const n=Kt(t),r=await n.getIdToken(e),s=Us(r);O(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:an(Fr(s.auth_time)),issuedAtTime:an(Fr(s.iat)),expirationTime:an(Fr(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Fr(t){return Number(t)*1e3}function Us(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return $n("JWT malformed, contained fewer than 3 sections"),null;try{const s=Ia(n);return s?JSON.parse(s):($n("Failed to decode base64 JWT payload"),null)}catch(s){return $n("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Bi(t){const e=Us(t);return O(e,"internal-error"),O(typeof e.exp<"u","internal-error"),O(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _n(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof gt&&Zd(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Zd({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eh{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=an(this.lastLoginAt),this.creationTime=an(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xn(t){var e;const n=t.auth,r=await t.getIdToken(),s=await _n(t,La(n,{idToken:r}));O(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Ua(i.providerUserInfo):[],a=nh(t.providerData,o),c=t.isAnonymous,f=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),d=c?f:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new ss(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(t,h)}async function th(t){const e=Kt(t);await Xn(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function nh(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Ua(t){return t.map(e=>{var{providerId:n}=e,r=Ds(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rh(t,e){const n=await xa(t,{},async()=>{const r=In({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=Ma(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Na.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function sh(t,e){return Gt(t,"POST","/v2/accounts:revokeToken",Ls(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){O(e.idToken,"internal-error"),O(typeof e.idToken<"u","internal-error"),O(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Bi(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){O(e.length!==0,"internal-error");const n=Bi(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(O(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await rh(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Ft;return r&&(O(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(O(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(O(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ft,this.toJSON())}_performRefresh(){return je("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qe(t,e){O(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Ve{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Ds(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new eh(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new ss(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await _n(this,this.stsTokenManager.getToken(this.auth,e));return O(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Qd(this,e)}reload(){return th(this)}_assign(e){this!==e&&(O(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Ve(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){O(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Xn(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(He(this.auth.app))return Promise.reject(Ct(this.auth));const e=await this.getIdToken();return await _n(this,Xd(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,f,d;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(s=n.email)!==null&&s!==void 0?s:void 0,S=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,R=(o=n.photoURL)!==null&&o!==void 0?o:void 0,N=(a=n.tenantId)!==null&&a!==void 0?a:void 0,Y=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,$=(f=n.createdAt)!==null&&f!==void 0?f:void 0,W=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:j,emailVerified:C,isAnonymous:F,providerData:pe,stsTokenManager:te}=n;O(j&&te,e,"internal-error");const x=Ft.fromJSON(this.name,te);O(typeof j=="string",e,"internal-error"),Qe(h,e.name),Qe(g,e.name),O(typeof C=="boolean",e,"internal-error"),O(typeof F=="boolean",e,"internal-error"),Qe(S,e.name),Qe(R,e.name),Qe(N,e.name),Qe(Y,e.name),Qe($,e.name),Qe(W,e.name);const M=new Ve({uid:j,auth:e,email:g,emailVerified:C,displayName:h,isAnonymous:F,photoURL:R,phoneNumber:S,tenantId:N,stsTokenManager:x,createdAt:$,lastLoginAt:W});return pe&&Array.isArray(pe)&&(M.providerData=pe.map(X=>Object.assign({},X))),Y&&(M._redirectEventId=Y),M}static async _fromIdTokenResponse(e,n,r=!1){const s=new Ft;s.updateFromServerResponse(n);const i=new Ve({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Xn(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];O(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Ua(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),a=new Ft;a.updateFromIdToken(r);const c=new Ve({uid:s.localId,auth:e,stsTokenManager:a,isAnonymous:o}),f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new ss(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,f),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hi=new Map;function We(t){qe(t instanceof Function,"Expected a class definition");let e=Hi.get(t);return e?(qe(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Hi.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fa{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Fa.type="NONE";const ji=Fa;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bn(t,e,n){return`firebase:${t}:${e}:${n}`}class $t{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Bn(this.userKey,s.apiKey,i),this.fullPersistenceKey=Bn("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ve._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new $t(We(ji),e,r);const s=(await Promise.all(n.map(async f=>{if(await f._isAvailable())return f}))).filter(f=>f);let i=s[0]||We(ji);const o=Bn(r,e.config.apiKey,e.name);let a=null;for(const f of n)try{const d=await f._get(o);if(d){const h=Ve._fromJSON(e,d);f!==i&&(a=h),i=f;break}}catch{}const c=s.filter(f=>f._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new $t(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async f=>{if(f!==i)try{await f._remove(o)}catch{}})),new $t(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vi(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ja(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if($a(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Wa(e))return"Blackberry";if(za(e))return"Webos";if(Ba(e))return"Safari";if((e.includes("chrome/")||Ha(e))&&!e.includes("edge/"))return"Chrome";if(Va(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function $a(t=de()){return/firefox\//i.test(t)}function Ba(t=de()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ha(t=de()){return/crios\//i.test(t)}function ja(t=de()){return/iemobile/i.test(t)}function Va(t=de()){return/android/i.test(t)}function Wa(t=de()){return/blackberry/i.test(t)}function za(t=de()){return/webos/i.test(t)}function Fs(t=de()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function ih(t=de()){var e;return Fs(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function oh(){return Sf()&&document.documentMode===10}function Ka(t=de()){return Fs(t)||Va(t)||za(t)||Wa(t)||/windows phone/i.test(t)||ja(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ga(t,e=[]){let n;switch(t){case"Browser":n=Vi(de());break;case"Worker":n=`${Vi(de())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${wn}/${r}`}/**
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
 */class ah{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function ch(t,e={}){return Gt(t,"GET","/v2/passwordPolicy",Ls(t,e))}/**
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
 */const lh=6;class uh{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:lh,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fh{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Wi(this),this.idTokenSubscription=new Wi(this),this.beforeStateQueue=new ah(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Da,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=We(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await $t.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await La(this,{idToken:e}),r=await Ve._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(He(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return O(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Xn(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Kd()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(He(this.app))return Promise.reject(Ct(this));const n=e?Kt(e):null;return n&&O(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&O(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return He(this.app)?Promise.reject(Ct(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return He(this.app)?Promise.reject(Ct(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(We(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await ch(this),n=new uh(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new yn("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await sh(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&We(e)||this._popupRedirectResolver;O(n,this,"argument-error"),this.redirectPersistenceManager=await $t.create(this,[We(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(O(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return O(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ga(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&jd(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function mr(t){return Kt(t)}class Wi{constructor(e){this.auth=e,this.observer=null,this.addObserver=kf(n=>this.observer=n)}get next(){return O(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $s={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function dh(t){$s=t}function hh(t){return $s.loadJS(t)}function ph(){return $s.gapiScript}function gh(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mh(t,e){const n=Aa(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(qn(i,e??{}))return s;Ue(s,"already-initialized")}return n.initialize({options:e})}function _h(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(We);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function vh(t,e,n){const r=mr(t);O(r._canInitEmulator,r,"emulator-config-failed"),O(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=qa(e),{host:o,port:a}=bh(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),yh()}function qa(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function bh(t){const e=qa(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:zi(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:zi(o)}}}function zi(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function yh(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ja{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return je("not implemented")}_getIdTokenResponse(e){return je("not implemented")}_linkToIdToken(e,n){return je("not implemented")}_getReauthenticationResolver(e){return je("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bt(t,e){return Jd(t,"POST","/v1/accounts:signInWithIdp",Ls(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ih="http://localhost";class Ot extends Ja{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ot(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ue("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Ds(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Ot(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Bt(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Bt(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Bt(e,n)}buildRequest(){const e={requestUri:Ih,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=In(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bs{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn extends Bs{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt extends Sn{constructor(){super("facebook.com")}static credential(e){return Ot._fromParams({providerId:rt.PROVIDER_ID,signInMethod:rt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return rt.credentialFromTaggedObject(e)}static credentialFromError(e){return rt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return rt.credential(e.oauthAccessToken)}catch{return null}}}rt.FACEBOOK_SIGN_IN_METHOD="facebook.com";rt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be extends Sn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ot._fromParams({providerId:Be.PROVIDER_ID,signInMethod:Be.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Be.credentialFromTaggedObject(e)}static credentialFromError(e){return Be.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Be.credential(n,r)}catch{return null}}}Be.GOOGLE_SIGN_IN_METHOD="google.com";Be.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st extends Sn{constructor(){super("github.com")}static credential(e){return Ot._fromParams({providerId:st.PROVIDER_ID,signInMethod:st.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return st.credentialFromTaggedObject(e)}static credentialFromError(e){return st.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return st.credential(e.oauthAccessToken)}catch{return null}}}st.GITHUB_SIGN_IN_METHOD="github.com";st.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it extends Sn{constructor(){super("twitter.com")}static credential(e,n){return Ot._fromParams({providerId:it.PROVIDER_ID,signInMethod:it.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return it.credentialFromTaggedObject(e)}static credentialFromError(e){return it.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return it.credential(n,r)}catch{return null}}}it.TWITTER_SIGN_IN_METHOD="twitter.com";it.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Ve._fromIdTokenResponse(e,r,s),o=Ki(r);return new Vt({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Ki(r);return new Vt({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Ki(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn extends gt{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Qn.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Qn(e,n,r,s)}}function Ya(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Qn._fromErrorAndOperation(t,i,e,r):i})}async function wh(t,e,n=!1){const r=await _n(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Vt._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Eh(t,e,n=!1){const{auth:r}=t;if(He(r.app))return Promise.reject(Ct(r));const s="reauthenticate";try{const i=await _n(t,Ya(r,s,e,t),n);O(i.idToken,r,"internal-error");const o=Us(i.idToken);O(o,r,"internal-error");const{sub:a}=o;return O(t.uid===a,r,"user-mismatch"),Vt._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Ue(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sh(t,e,n=!1){if(He(t.app))return Promise.reject(Ct(t));const r="signIn",s=await Ya(t,r,e),i=await Vt._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}function Th(t,e,n,r){return Kt(t).onIdTokenChanged(e,n,r)}function Ch(t,e,n){return Kt(t).beforeAuthStateChanged(e,n)}const Zn="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xa{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Zn,"1"),this.storage.removeItem(Zn),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ah=1e3,Oh=10;class Qa extends Xa{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Ka(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);oh()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Oh):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Ah)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Qa.type="LOCAL";const Ph=Qa;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Za extends Xa{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Za.type="SESSION";const ec=Za;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rh(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new _r(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async f=>f(n.origin,i)),c=await Rh(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}_r.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hs(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kh{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const f=Hs("",20);s.port1.start();const d=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const g=h;if(g.data.eventId===f)switch(g.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(g.data.response);break;default:clearTimeout(d),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:f,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Me(){return window}function Dh(t){Me().location.href=t}/**
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
 */function tc(){return typeof Me().WorkerGlobalScope<"u"&&typeof Me().importScripts=="function"}async function Nh(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function xh(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Mh(){return tc()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nc="firebaseLocalStorageDb",Lh=1,er="firebaseLocalStorage",rc="fbase_key";class Tn{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function vr(t,e){return t.transaction([er],e?"readwrite":"readonly").objectStore(er)}function Uh(){const t=indexedDB.deleteDatabase(nc);return new Tn(t).toPromise()}function is(){const t=indexedDB.open(nc,Lh);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(er,{keyPath:rc})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(er)?e(r):(r.close(),await Uh(),e(await is()))})})}async function Gi(t,e,n){const r=vr(t,!0).put({[rc]:e,value:n});return new Tn(r).toPromise()}async function Fh(t,e){const n=vr(t,!1).get(e),r=await new Tn(n).toPromise();return r===void 0?null:r.value}function qi(t,e){const n=vr(t,!0).delete(e);return new Tn(n).toPromise()}const $h=800,Bh=3;class sc{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await is(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Bh)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return tc()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=_r._getInstance(Mh()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Nh(),!this.activeServiceWorker)return;this.sender=new kh(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||xh()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await is();return await Gi(e,Zn,"1"),await qi(e,Zn),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Gi(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Fh(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>qi(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=vr(s,!1).getAll();return new Tn(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),$h)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}sc.type="LOCAL";const Hh=sc;new En(3e4,6e4);/**
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
 */function ic(t,e){return e?We(e):(O(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class js extends Ja{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Bt(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Bt(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Bt(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function jh(t){return Sh(t.auth,new js(t),t.bypassAuthState)}function Vh(t){const{auth:e,user:n}=t;return O(n,e,"internal-error"),Eh(n,new js(t),t.bypassAuthState)}async function Wh(t){const{auth:e,user:n}=t;return O(n,e,"internal-error"),wh(n,new js(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oc{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(f){this.reject(f)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return jh;case"linkViaPopup":case"linkViaRedirect":return Wh;case"reauthViaPopup":case"reauthViaRedirect":return Vh;default:Ue(this.auth,"internal-error")}}resolve(e){qe(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){qe(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zh=new En(2e3,1e4);async function Kh(t,e,n){if(He(t.app))return Promise.reject(Ae(t,"operation-not-supported-in-this-environment"));const r=mr(t);Vd(t,e,Bs);const s=ic(r,n);return new wt(r,"signInViaPopup",e,s).executeNotNull()}class wt extends oc{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,wt.currentPopupAction&&wt.currentPopupAction.cancel(),wt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return O(e,this.auth,"internal-error"),e}async onExecution(){qe(this.filter.length===1,"Popup operations only handle one event");const e=Hs();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ae(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ae(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,wt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ae(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,zh.get())};e()}}wt.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gh="pendingRedirect",Hn=new Map;class qh extends oc{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Hn.get(this.auth._key());if(!e){try{const r=await Jh(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Hn.set(this.auth._key(),e)}return this.bypassAuthState||Hn.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Jh(t,e){const n=Qh(e),r=Xh(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function Yh(t,e){Hn.set(t._key(),e)}function Xh(t){return We(t._redirectPersistence)}function Qh(t){return Bn(Gh,t.config.apiKey,t.name)}async function Zh(t,e,n=!1){if(He(t.app))return Promise.reject(Ct(t));const r=mr(t),s=ic(r,e),o=await new qh(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ep=10*60*1e3;class tp{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!np(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!ac(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Ae(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=ep&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ji(e))}saveEventToCache(e){this.cachedEventUids.add(Ji(e)),this.lastProcessedEventTime=Date.now()}}function Ji(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function ac({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function np(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ac(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rp(t,e={}){return Gt(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sp=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ip=/^https?/;async function op(t){if(t.config.emulator)return;const{authorizedDomains:e}=await rp(t);for(const n of e)try{if(ap(n))return}catch{}Ue(t,"unauthorized-domain")}function ap(t){const e=rs(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!ip.test(n))return!1;if(sp.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const cp=new En(3e4,6e4);function Yi(){const t=Me().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function lp(t){return new Promise((e,n)=>{var r,s,i;function o(){Yi(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Yi(),n(Ae(t,"network-request-failed"))},timeout:cp.get()})}if(!((s=(r=Me().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Me().gapi)===null||i===void 0)&&i.load)o();else{const a=gh("iframefcb");return Me()[a]=()=>{gapi.load?o():n(Ae(t,"network-request-failed"))},hh(`${ph()}?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw jn=null,e})}let jn=null;function up(t){return jn=jn||lp(t),jn}/**
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
 */const fp=new En(5e3,15e3),dp="__/auth/iframe",hp="emulator/auth/iframe",pp={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},gp=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function mp(t){const e=t.config;O(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ms(e,hp):`https://${t.config.authDomain}/${dp}`,r={apiKey:e.apiKey,appName:t.name,v:wn},s=gp.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${In(r).slice(1)}`}async function _p(t){const e=await up(t),n=Me().gapi;return O(n,t,"internal-error"),e.open({where:document.body,url:mp(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:pp,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Ae(t,"network-request-failed"),a=Me().setTimeout(()=>{i(o)},fp.get());function c(){Me().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const vp={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},bp=500,yp=600,Ip="_blank",wp="http://localhost";class Xi{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Ep(t,e,n,r=bp,s=yp){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},vp),{width:r.toString(),height:s.toString(),top:i,left:o}),f=de().toLowerCase();n&&(a=Ha(f)?Ip:n),$a(f)&&(e=e||wp,c.scrollbars="yes");const d=Object.entries(c).reduce((g,[S,R])=>`${g}${S}=${R},`,"");if(ih(f)&&a!=="_self")return Sp(e||"",a),new Xi(null);const h=window.open(e||"",a,d);O(h,t,"popup-blocked");try{h.focus()}catch{}return new Xi(h)}function Sp(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const Tp="__/auth/handler",Cp="emulator/auth/handler",Ap=encodeURIComponent("fac");async function Qi(t,e,n,r,s,i){O(t.config.authDomain,t,"auth-domain-config-required"),O(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:wn,eventId:s};if(e instanceof Bs){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Rf(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,h]of Object.entries({}))o[d]=h}if(e instanceof Sn){const d=e.getScopes().filter(h=>h!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const c=await t._getAppCheckToken(),f=c?`#${Ap}=${encodeURIComponent(c)}`:"";return`${Op(t)}?${In(a).slice(1)}${f}`}function Op({config:t}){return t.emulator?Ms(t,Cp):`https://${t.authDomain}/${Tp}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $r="webStorageSupport";class Pp{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ec,this._completeRedirectFn=Zh,this._overrideRedirectResult=Yh}async _openPopup(e,n,r,s){var i;qe((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Qi(e,n,r,rs(),s);return Ep(e,o,Hs())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Qi(e,n,r,rs(),s);return Dh(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(qe(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await _p(e),r=new tp(e);return n.register("authEvent",s=>(O(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send($r,{type:$r},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[$r];o!==void 0&&n(!!o),Ue(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=op(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Ka()||Ba()||Fs()}}const Rp=Pp;var Zi="@firebase/auth",eo="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kp{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){O(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dp(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Np(t){gn(new jt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;O(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ga(t)},f=new fh(r,s,i,c);return _h(f,n),f},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),gn(new jt("auth-internal",e=>{const n=mr(e.getProvider("auth").getImmediate());return(r=>new kp(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ut(Zi,eo,Dp(t)),Ut(Zi,eo,"esm2017")}/**
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
 */const xp=5*60,Mp=Ea("authIdTokenMaxAge")||xp;let to=null;const Lp=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Mp)return;const s=n==null?void 0:n.token;to!==s&&(to=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Up(t=kd()){const e=Aa(t,"auth");if(e.isInitialized())return e.getImmediate();const n=mh(t,{popupRedirectResolver:Rp,persistence:[Hh,Ph,ec]}),r=Ea("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=Lp(i.toString());Ch(n,o,()=>o(n.currentUser)),Th(n,a=>o(a))}}const s=vf("auth");return s&&vh(n,`http://${s}`),n}function Fp(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}dh({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Ae("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",Fp().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Np("Browser");var $p="firebase",Bp="10.13.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ut($p,Bp,"app");const Hp={apiKey:"AIzaSyALY2Eu62yzZPuaySeDBI3ONz3DYCq2388",authDomain:"relay-hub.firebaseapp.com",projectId:"relay-hub",storageBucket:"relay-hub.appspot.com",messagingSenderId:"1088994606939",appId:"1:1088994606939:web:17dc0c1330726f959ca47e"},jp=Oa(Hp),Vp=Up(jp),Wp=async()=>{const t=new Be;try{return(await Kh(Vp,t)).user}catch(e){throw console.error("Error during sign-in:",e),e}},zp=Wt({components:{ButtonDefault:tf},emits:["onButtonClicked"],props:{},setup(){const t=_a(),e=lr(!1);async function n(){e.value=!0;try{const r=await Wp();t.setUser({uid:r.uid,displayName:r.displayName,email:r.email,photoURL:r.photoURL})}catch(r){t.setUser(null),console.error("Failed to sign in:",r)}}return{isLoading:e,onButtonClicked:n}}}),Kp={class:"button-google"};function Gp(t,e,n,r,s,i){const o=dn("ButtonDefault");return he(),Ke("div",Kp,[ye(o,{text:"Sign in mit Google",isLoading:t.isLoading,onOnButtonClicked:t.onButtonClicked},{icon:Fo(()=>e[0]||(e[0]=[ut("div",{class:"google-icon"},null,-1)])),_:1},8,["isLoading","onOnButtonClicked"])])}const qp=zt(zp,[["render",Gp],["__scopeId","data-v-d65fd5da"]]),Jp=Wt({name:"sign-in",components:{ButtonGoogle:qp},setup(){return{}}}),Yp={class:"sign-in"};function Xp(t,e,n,r,s,i){const o=dn("button-google");return he(),Ke("div",Yp,[e[0]||(e[0]=ut("div",{class:"relay-hub"},"RelayHub",-1)),ye(o)])}const Qp=zt(Jp,[["render",Xp],["__scopeId","data-v-9540f920"]]),Zp=Wt({name:"App",components:{TaskBar:Ku,SignIn:Qp},setup(){const t=_a();return{signedIn:Ps(()=>!!t.user)}}}),eg={class:"app"},tg={key:0,class:"signed-in"};function ng(t,e,n,r,s,i){const o=dn("task-bar"),a=dn("sign-in");return he(),Ke("div",eg,[t.signedIn?(he(),Ke("div",tg,[e[0]||(e[0]=ut("div",{class:"body"},null,-1)),ye(o)])):(he(),pn(a,{key:1}))])}const rg=zt(Zp,[["render",ng],["__scopeId","data-v-08abb442"]]),cc=Bu(rg),sg=rf();cc.use(sg);cc.mount("#app");
