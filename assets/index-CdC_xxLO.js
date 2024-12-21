(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Sc(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const xe={},os=[],un=()=>{},vy=()=>!1,ua=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Cc=t=>t.startsWith("onUpdate:"),ct=Object.assign,Pc=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Ey=Object.prototype.hasOwnProperty,De=(t,e)=>Ey.call(t,e),fe=Array.isArray,as=t=>ha(t)==="[object Map]",Qf=t=>ha(t)==="[object Set]",ge=t=>typeof t=="function",nt=t=>typeof t=="string",Fn=t=>typeof t=="symbol",ze=t=>t!==null&&typeof t=="object",Xf=t=>(ze(t)||ge(t))&&ge(t.then)&&ge(t.catch),Yf=Object.prototype.toString,ha=t=>Yf.call(t),wy=t=>ha(t).slice(8,-1),Jf=t=>ha(t)==="[object Object]",kc=t=>nt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,ni=Sc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),da=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Ty=/-(\w)/g,Xt=da(t=>t.replace(Ty,(e,n)=>n?n.toUpperCase():"")),Iy=/\B([A-Z])/g,mr=da(t=>t.replace(Iy,"-$1").toLowerCase()),fa=da(t=>t.charAt(0).toUpperCase()+t.slice(1)),hl=da(t=>t?`on${fa(t)}`:""),nr=(t,e)=>!Object.is(t,e),Io=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Zf=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},Fl=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Lh;const pa=()=>Lh||(Lh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function yn(t){if(fe(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=nt(r)?Sy(r):yn(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(nt(t)||ze(t))return t}const by=/;(?![^(]*\))/g,Ay=/:([^]+)/,Ry=/\/\*[^]*?\*\//g;function Sy(t){const e={};return t.replace(Ry,"").split(by).forEach(n=>{if(n){const r=n.split(Ay);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function qt(t){let e="";if(nt(t))e=t;else if(fe(t))for(let n=0;n<t.length;n++){const r=qt(t[n]);r&&(e+=r+" ")}else if(ze(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Cy="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Py=Sc(Cy);function ep(t){return!!t||t===""}const tp=t=>!!(t&&t.__v_isRef===!0),Ve=t=>nt(t)?t:t==null?"":fe(t)||ze(t)&&(t.toString===Yf||!ge(t.toString))?tp(t)?Ve(t.value):JSON.stringify(t,np,2):String(t),np=(t,e)=>tp(e)?np(t,e.value):as(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[dl(r,i)+" =>"]=s,n),{})}:Qf(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>dl(n))}:Fn(e)?dl(e):ze(e)&&!fe(e)&&!Jf(e)?String(e):e,dl=(t,e="")=>{var n;return Fn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Nt;class rp{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Nt,!e&&Nt&&(this.index=(Nt.scopes||(Nt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Nt;try{return Nt=this,e()}finally{Nt=n}}}on(){Nt=this}off(){Nt=this.parent}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function sp(t){return new rp(t)}function ip(){return Nt}function ky(t,e=!1){Nt&&Nt.cleanups.push(t)}let Ue;const fl=new WeakSet;class op{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Nt&&Nt.active&&Nt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,fl.has(this)&&(fl.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||lp(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Fh(this),cp(this);const e=Ue,n=en;Ue=this,en=!0;try{return this.fn()}finally{up(this),Ue=e,en=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Vc(e);this.deps=this.depsTail=void 0,Fh(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?fl.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Ul(this)&&this.run()}get dirty(){return Ul(this)}}let ap=0,ri,si;function lp(t,e=!1){if(t.flags|=8,e){t.next=si,si=t;return}t.next=ri,ri=t}function Dc(){ap++}function Nc(){if(--ap>0)return;if(si){let e=si;for(si=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;ri;){let e=ri;for(ri=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function cp(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function up(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),Vc(r),Dy(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function Ul(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(hp(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function hp(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===mi))return;t.globalVersion=mi;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!Ul(t)){t.flags&=-3;return}const n=Ue,r=en;Ue=t,en=!0;try{cp(t);const s=t.fn(t._value);(e.version===0||nr(s,t._value))&&(t._value=s,e.version++)}catch(s){throw e.version++,s}finally{Ue=n,en=r,up(t),t.flags&=-3}}function Vc(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Vc(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function Dy(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let en=!0;const dp=[];function gr(){dp.push(en),en=!1}function _r(){const t=dp.pop();en=t===void 0?!0:t}function Fh(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Ue;Ue=void 0;try{e()}finally{Ue=n}}}let mi=0;class Ny{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Oc{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!Ue||!en||Ue===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Ue)n=this.activeLink=new Ny(Ue,this),Ue.deps?(n.prevDep=Ue.depsTail,Ue.depsTail.nextDep=n,Ue.depsTail=n):Ue.deps=Ue.depsTail=n,fp(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Ue.depsTail,n.nextDep=void 0,Ue.depsTail.nextDep=n,Ue.depsTail=n,Ue.deps===n&&(Ue.deps=r)}return n}trigger(e){this.version++,mi++,this.notify(e)}notify(e){Dc();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Nc()}}}function fp(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)fp(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Uo=new WeakMap,kr=Symbol(""),$l=Symbol(""),gi=Symbol("");function At(t,e,n){if(en&&Ue){let r=Uo.get(t);r||Uo.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new Oc),s.map=r,s.key=n),s.track()}}function bn(t,e,n,r,s,i){const o=Uo.get(t);if(!o){mi++;return}const l=c=>{c&&c.trigger()};if(Dc(),e==="clear")o.forEach(l);else{const c=fe(t),h=c&&kc(n);if(c&&n==="length"){const d=Number(r);o.forEach((p,m)=>{(m==="length"||m===gi||!Fn(m)&&m>=d)&&l(p)})}else switch((n!==void 0||o.has(void 0))&&l(o.get(n)),h&&l(o.get(gi)),e){case"add":c?h&&l(o.get("length")):(l(o.get(kr)),as(t)&&l(o.get($l)));break;case"delete":c||(l(o.get(kr)),as(t)&&l(o.get($l)));break;case"set":as(t)&&l(o.get(kr));break}}Nc()}function Vy(t,e){const n=Uo.get(t);return n&&n.get(e)}function Yr(t){const e=Ce(t);return e===t?e:(At(e,"iterate",gi),Qt(t)?e:e.map(Rt))}function ma(t){return At(t=Ce(t),"iterate",gi),t}const Oy={__proto__:null,[Symbol.iterator](){return pl(this,Symbol.iterator,Rt)},concat(...t){return Yr(this).concat(...t.map(e=>fe(e)?Yr(e):e))},entries(){return pl(this,"entries",t=>(t[1]=Rt(t[1]),t))},every(t,e){return wn(this,"every",t,e,void 0,arguments)},filter(t,e){return wn(this,"filter",t,e,n=>n.map(Rt),arguments)},find(t,e){return wn(this,"find",t,e,Rt,arguments)},findIndex(t,e){return wn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return wn(this,"findLast",t,e,Rt,arguments)},findLastIndex(t,e){return wn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return wn(this,"forEach",t,e,void 0,arguments)},includes(...t){return ml(this,"includes",t)},indexOf(...t){return ml(this,"indexOf",t)},join(t){return Yr(this).join(t)},lastIndexOf(...t){return ml(this,"lastIndexOf",t)},map(t,e){return wn(this,"map",t,e,void 0,arguments)},pop(){return Gs(this,"pop")},push(...t){return Gs(this,"push",t)},reduce(t,...e){return Uh(this,"reduce",t,e)},reduceRight(t,...e){return Uh(this,"reduceRight",t,e)},shift(){return Gs(this,"shift")},some(t,e){return wn(this,"some",t,e,void 0,arguments)},splice(...t){return Gs(this,"splice",t)},toReversed(){return Yr(this).toReversed()},toSorted(t){return Yr(this).toSorted(t)},toSpliced(...t){return Yr(this).toSpliced(...t)},unshift(...t){return Gs(this,"unshift",t)},values(){return pl(this,"values",Rt)}};function pl(t,e,n){const r=ma(t),s=r[e]();return r!==t&&!Qt(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const My=Array.prototype;function wn(t,e,n,r,s,i){const o=ma(t),l=o!==t&&!Qt(t),c=o[e];if(c!==My[e]){const p=c.apply(t,i);return l?Rt(p):p}let h=n;o!==t&&(l?h=function(p,m){return n.call(this,Rt(p),m,t)}:n.length>2&&(h=function(p,m){return n.call(this,p,m,t)}));const d=c.call(o,h,r);return l&&s?s(d):d}function Uh(t,e,n,r){const s=ma(t);let i=n;return s!==t&&(Qt(t)?n.length>3&&(i=function(o,l,c){return n.call(this,o,l,c,t)}):i=function(o,l,c){return n.call(this,o,Rt(l),c,t)}),s[e](i,...r)}function ml(t,e,n){const r=Ce(t);At(r,"iterate",gi);const s=r[e](...n);return(s===-1||s===!1)&&Lc(n[0])?(n[0]=Ce(n[0]),r[e](...n)):s}function Gs(t,e,n=[]){gr(),Dc();const r=Ce(t)[e].apply(t,n);return Nc(),_r(),r}const xy=Sc("__proto__,__v_isRef,__isVue"),pp=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Fn));function Ly(t){Fn(t)||(t=String(t));const e=Ce(this);return At(e,"has",t),e.hasOwnProperty(t)}class mp{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?Ky:vp:i?yp:_p).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=fe(e);if(!s){let c;if(o&&(c=Oy[n]))return c;if(n==="hasOwnProperty")return Ly}const l=Reflect.get(e,n,Je(e)?e:r);return(Fn(n)?pp.has(n):xy(n))||(s||At(e,"get",n),i)?l:Je(l)?o&&kc(n)?l:l.value:ze(l)?s?wp(l):Ni(l):l}}class gp extends mp{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const c=Or(i);if(!Qt(r)&&!Or(r)&&(i=Ce(i),r=Ce(r)),!fe(e)&&Je(i)&&!Je(r))return c?!1:(i.value=r,!0)}const o=fe(e)&&kc(n)?Number(n)<e.length:De(e,n),l=Reflect.set(e,n,r,Je(e)?e:s);return e===Ce(s)&&(o?nr(r,i)&&bn(e,"set",n,r):bn(e,"add",n,r)),l}deleteProperty(e,n){const r=De(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&bn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!Fn(n)||!pp.has(n))&&At(e,"has",n),r}ownKeys(e){return At(e,"iterate",fe(e)?"length":kr),Reflect.ownKeys(e)}}class Fy extends mp{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Uy=new gp,$y=new Fy,By=new gp(!0);const Bl=t=>t,po=t=>Reflect.getPrototypeOf(t);function jy(t,e,n){return function(...r){const s=this.__v_raw,i=Ce(s),o=as(i),l=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,h=s[t](...r),d=n?Bl:e?jl:Rt;return!e&&At(i,"iterate",c?$l:kr),{next(){const{value:p,done:m}=h.next();return m?{value:p,done:m}:{value:l?[d(p[0]),d(p[1])]:d(p),done:m}},[Symbol.iterator](){return this}}}}function mo(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function qy(t,e){const n={get(s){const i=this.__v_raw,o=Ce(i),l=Ce(s);t||(nr(s,l)&&At(o,"get",s),At(o,"get",l));const{has:c}=po(o),h=e?Bl:t?jl:Rt;if(c.call(o,s))return h(i.get(s));if(c.call(o,l))return h(i.get(l));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&At(Ce(s),"iterate",kr),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,o=Ce(i),l=Ce(s);return t||(nr(s,l)&&At(o,"has",s),At(o,"has",l)),s===l?i.has(s):i.has(s)||i.has(l)},forEach(s,i){const o=this,l=o.__v_raw,c=Ce(l),h=e?Bl:t?jl:Rt;return!t&&At(c,"iterate",kr),l.forEach((d,p)=>s.call(i,h(d),h(p),o))}};return ct(n,t?{add:mo("add"),set:mo("set"),delete:mo("delete"),clear:mo("clear")}:{add(s){!e&&!Qt(s)&&!Or(s)&&(s=Ce(s));const i=Ce(this);return po(i).has.call(i,s)||(i.add(s),bn(i,"add",s,s)),this},set(s,i){!e&&!Qt(i)&&!Or(i)&&(i=Ce(i));const o=Ce(this),{has:l,get:c}=po(o);let h=l.call(o,s);h||(s=Ce(s),h=l.call(o,s));const d=c.call(o,s);return o.set(s,i),h?nr(i,d)&&bn(o,"set",s,i):bn(o,"add",s,i),this},delete(s){const i=Ce(this),{has:o,get:l}=po(i);let c=o.call(i,s);c||(s=Ce(s),c=o.call(i,s)),l&&l.call(i,s);const h=i.delete(s);return c&&bn(i,"delete",s,void 0),h},clear(){const s=Ce(this),i=s.size!==0,o=s.clear();return i&&bn(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=jy(s,t,e)}),n}function Mc(t,e){const n=qy(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(De(n,s)&&s in r?n:r,s,i)}const Hy={get:Mc(!1,!1)},zy={get:Mc(!1,!0)},Wy={get:Mc(!0,!1)};const _p=new WeakMap,yp=new WeakMap,vp=new WeakMap,Ky=new WeakMap;function Gy(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Qy(t){return t.__v_skip||!Object.isExtensible(t)?0:Gy(wy(t))}function Ni(t){return Or(t)?t:xc(t,!1,Uy,Hy,_p)}function Ep(t){return xc(t,!1,By,zy,yp)}function wp(t){return xc(t,!0,$y,Wy,vp)}function xc(t,e,n,r,s){if(!ze(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=Qy(t);if(o===0)return t;const l=new Proxy(t,o===2?r:n);return s.set(t,l),l}function rr(t){return Or(t)?rr(t.__v_raw):!!(t&&t.__v_isReactive)}function Or(t){return!!(t&&t.__v_isReadonly)}function Qt(t){return!!(t&&t.__v_isShallow)}function Lc(t){return t?!!t.__v_raw:!1}function Ce(t){const e=t&&t.__v_raw;return e?Ce(e):t}function Fc(t){return!De(t,"__v_skip")&&Object.isExtensible(t)&&Zf(t,"__v_skip",!0),t}const Rt=t=>ze(t)?Ni(t):t,jl=t=>ze(t)?wp(t):t;function Je(t){return t?t.__v_isRef===!0:!1}function le(t){return Tp(t,!1)}function Xy(t){return Tp(t,!0)}function Tp(t,e){return Je(t)?t:new Yy(t,e)}class Yy{constructor(e,n){this.dep=new Oc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Ce(e),this._value=n?e:Rt(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||Qt(e)||Or(e);e=r?e:Ce(e),nr(e,n)&&(this._rawValue=e,this._value=r?e:Rt(e),this.dep.trigger())}}function ls(t){return Je(t)?t.value:t}const Jy={get:(t,e,n)=>e==="__v_raw"?t:ls(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Je(s)&&!Je(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Ip(t){return rr(t)?t:new Proxy(t,Jy)}function Zy(t){const e=fe(t)?new Array(t.length):{};for(const n in t)e[n]=t0(t,n);return e}class e0{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return Vy(Ce(this._object),this._key)}}function t0(t,e,n){const r=t[e];return Je(r)?r:new e0(t,e,n)}class n0{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Oc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=mi-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Ue!==this)return lp(this,!0),!0}get value(){const e=this.dep.track();return hp(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function r0(t,e,n=!1){let r,s;return ge(t)?r=t:(r=t.get,s=t.set),new n0(r,s,n)}const go={},$o=new WeakMap;let Rr;function s0(t,e=!1,n=Rr){if(n){let r=$o.get(n);r||$o.set(n,r=[]),r.push(t)}}function i0(t,e,n=xe){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:l,call:c}=n,h=q=>s?q:Qt(q)||s===!1||s===0?An(q,1):An(q);let d,p,m,_,I=!1,S=!1;if(Je(t)?(p=()=>t.value,I=Qt(t)):rr(t)?(p=()=>h(t),I=!0):fe(t)?(S=!0,I=t.some(q=>rr(q)||Qt(q)),p=()=>t.map(q=>{if(Je(q))return q.value;if(rr(q))return h(q);if(ge(q))return c?c(q,2):q()})):ge(t)?e?p=c?()=>c(t,2):t:p=()=>{if(m){gr();try{m()}finally{_r()}}const q=Rr;Rr=d;try{return c?c(t,3,[_]):t(_)}finally{Rr=q}}:p=un,e&&s){const q=p,oe=s===!0?1/0:s;p=()=>An(q(),oe)}const P=ip(),V=()=>{d.stop(),P&&P.active&&Pc(P.effects,d)};if(i&&e){const q=e;e=(...oe)=>{q(...oe),V()}}let F=S?new Array(t.length).fill(go):go;const j=q=>{if(!(!(d.flags&1)||!d.dirty&&!q))if(e){const oe=d.run();if(s||I||(S?oe.some((ye,A)=>nr(ye,F[A])):nr(oe,F))){m&&m();const ye=Rr;Rr=d;try{const A=[oe,F===go?void 0:S&&F[0]===go?[]:F,_];c?c(e,3,A):e(...A),F=oe}finally{Rr=ye}}}else d.run()};return l&&l(j),d=new op(p),d.scheduler=o?()=>o(j,!1):j,_=q=>s0(q,!1,d),m=d.onStop=()=>{const q=$o.get(d);if(q){if(c)c(q,4);else for(const oe of q)oe();$o.delete(d)}},e?r?j(!0):F=d.run():o?o(j.bind(null,!0),!0):d.run(),V.pause=d.pause.bind(d),V.resume=d.resume.bind(d),V.stop=V,V}function An(t,e=1/0,n){if(e<=0||!ze(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,Je(t))An(t.value,e,n);else if(fe(t))for(let r=0;r<t.length;r++)An(t[r],e,n);else if(Qf(t)||as(t))t.forEach(r=>{An(r,e,n)});else if(Jf(t)){for(const r in t)An(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&An(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Vi(t,e,n,r){try{return r?t(...r):t()}catch(s){ga(s,e,n)}}function mn(t,e,n,r){if(ge(t)){const s=Vi(t,e,n,r);return s&&Xf(s)&&s.catch(i=>{ga(i,e,n)}),s}if(fe(t)){const s=[];for(let i=0;i<t.length;i++)s.push(mn(t[i],e,n,r));return s}}function ga(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||xe;if(e){let l=e.parent;const c=e.proxy,h=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const d=l.ec;if(d){for(let p=0;p<d.length;p++)if(d[p](t,c,h)===!1)return}l=l.parent}if(i){gr(),Vi(i,null,10,[t,c,h]),_r();return}}o0(t,n,s,r,o)}function o0(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const Vt=[];let ln=-1;const cs=[];let Qn=null,Zr=0;const bp=Promise.resolve();let Bo=null;function Uc(t){const e=Bo||bp;return t?e.then(this?t.bind(this):t):e}function a0(t){let e=ln+1,n=Vt.length;for(;e<n;){const r=e+n>>>1,s=Vt[r],i=_i(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function $c(t){if(!(t.flags&1)){const e=_i(t),n=Vt[Vt.length-1];!n||!(t.flags&2)&&e>=_i(n)?Vt.push(t):Vt.splice(a0(e),0,t),t.flags|=1,Ap()}}function Ap(){Bo||(Bo=bp.then(Sp))}function l0(t){fe(t)?cs.push(...t):Qn&&t.id===-1?Qn.splice(Zr+1,0,t):t.flags&1||(cs.push(t),t.flags|=1),Ap()}function $h(t,e,n=ln+1){for(;n<Vt.length;n++){const r=Vt[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;Vt.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Rp(t){if(cs.length){const e=[...new Set(cs)].sort((n,r)=>_i(n)-_i(r));if(cs.length=0,Qn){Qn.push(...e);return}for(Qn=e,Zr=0;Zr<Qn.length;Zr++){const n=Qn[Zr];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Qn=null,Zr=0}}const _i=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Sp(t){try{for(ln=0;ln<Vt.length;ln++){const e=Vt[ln];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Vi(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;ln<Vt.length;ln++){const e=Vt[ln];e&&(e.flags&=-2)}ln=-1,Vt.length=0,Rp(),Bo=null,(Vt.length||cs.length)&&Sp()}}let lt=null,Cp=null;function jo(t){const e=lt;return lt=t,Cp=t&&t.type.__scopeId||null,e}function hn(t,e=lt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Qh(-1);const i=jo(e);let o;try{o=t(...s)}finally{jo(i),r._d&&Qh(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function ql(t,e){if(lt===null)return t;const n=Ea(lt),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,l,c=xe]=e[s];i&&(ge(i)&&(i={mounted:i,updated:i}),i.deep&&An(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:l,modifiers:c}))}return t}function br(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const l=s[o];i&&(l.oldValue=i[o].value);let c=l.dir[r];c&&(gr(),mn(c,n,8,[t.el,l,t,e]),_r())}}const c0=Symbol("_vte"),u0=t=>t.__isTeleport;function Bc(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Bc(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function Le(t,e){return ge(t)?ct({name:t.name},e,{setup:t}):t}function Pp(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function qo(t,e,n,r,s=!1){if(fe(t)){t.forEach((I,S)=>qo(I,e&&(fe(e)?e[S]:e),n,r,s));return}if(us(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&qo(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?Ea(r.component):r.el,o=s?null:i,{i:l,r:c}=t,h=e&&e.r,d=l.refs===xe?l.refs={}:l.refs,p=l.setupState,m=Ce(p),_=p===xe?()=>!1:I=>De(m,I);if(h!=null&&h!==c&&(nt(h)?(d[h]=null,_(h)&&(p[h]=null)):Je(h)&&(h.value=null)),ge(c))Vi(c,l,12,[o,d]);else{const I=nt(c),S=Je(c);if(I||S){const P=()=>{if(t.f){const V=I?_(c)?p[c]:d[c]:c.value;s?fe(V)&&Pc(V,i):fe(V)?V.includes(i)||V.push(i):I?(d[c]=[i],_(c)&&(p[c]=d[c])):(c.value=[i],t.k&&(d[t.k]=c.value))}else I?(d[c]=o,_(c)&&(p[c]=o)):S&&(c.value=o,t.k&&(d[t.k]=o))};o?(P.id=-1,jt(P,n)):P()}}}pa().requestIdleCallback;pa().cancelIdleCallback;const us=t=>!!t.type.__asyncLoader,kp=t=>t.type.__isKeepAlive;function h0(t,e){Dp(t,"a",e)}function d0(t,e){Dp(t,"da",e)}function Dp(t,e,n=mt){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(_a(e,r,n),n){let s=n.parent;for(;s&&s.parent;)kp(s.parent.vnode)&&f0(r,e,n,s),s=s.parent}}function f0(t,e,n,r){const s=_a(e,t,r,!0);qc(()=>{Pc(r[e],s)},n)}function _a(t,e,n=mt,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{gr();const l=Oi(n),c=mn(e,n,t,o);return l(),_r(),c});return r?s.unshift(i):s.push(i),i}}const Un=t=>(e,n=mt)=>{(!Ei||t==="sp")&&_a(t,(...r)=>e(...r),n)},jc=Un("bm"),$r=Un("m"),p0=Un("bu"),m0=Un("u"),Np=Un("bum"),qc=Un("um"),g0=Un("sp"),_0=Un("rtg"),y0=Un("rtc");function v0(t,e=mt){_a("ec",t,e)}const E0="components";function Ie(t,e){return T0(E0,t,!0,e)||t}const w0=Symbol.for("v-ndc");function T0(t,e,n=!0,r=!1){const s=lt||mt;if(s){const i=s.type;{const l=cv(i,!1);if(l&&(l===e||l===Xt(e)||l===fa(Xt(e))))return i}const o=Bh(s[t]||i[t],e)||Bh(s.appContext[t],e);return!o&&r?i:o}}function Bh(t,e){return t&&(t[e]||t[Xt(e)]||t[fa(Xt(e))])}function Br(t,e,n,r){let s;const i=n,o=fe(t);if(o||nt(t)){const l=o&&rr(t);let c=!1;l&&(c=!Qt(t),t=ma(t)),s=new Array(t.length);for(let h=0,d=t.length;h<d;h++)s[h]=e(c?Rt(t[h]):t[h],h,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let l=0;l<t;l++)s[l]=e(l+1,l,void 0,i)}else if(ze(t))if(t[Symbol.iterator])s=Array.from(t,(l,c)=>e(l,c,void 0,i));else{const l=Object.keys(t);s=new Array(l.length);for(let c=0,h=l.length;c<h;c++){const d=l[c];s[c]=e(t[d],d,c,i)}}else s=[];return s}function bo(t,e,n={},r,s){if(lt.ce||lt.parent&&us(lt.parent)&&lt.parent.ce)return e!=="default"&&(n.name=e),G(),Ye(rt,null,[_e("slot",n,r&&r())],64);let i=t[e];i&&i._c&&(i._d=!1),G();const o=i&&Vp(i(n)),l=n.key||o&&o.key,c=Ye(rt,{key:(l&&!Fn(l)?l:`_${e}`)+(!o&&r?"_fb":"")},o||(r?r():[]),o&&t._===1?64:-2);return i&&i._c&&(i._d=!0),c}function Vp(t){return t.some(e=>vi(e)?!(e.type===cr||e.type===rt&&!Vp(e.children)):!0)?t:null}const Hl=t=>t?em(t)?Ea(t):Hl(t.parent):null,ii=ct(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Hl(t.parent),$root:t=>Hl(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Hc(t),$forceUpdate:t=>t.f||(t.f=()=>{$c(t.update)}),$nextTick:t=>t.n||(t.n=Uc.bind(t.proxy)),$watch:t=>H0.bind(t)}),gl=(t,e)=>t!==xe&&!t.__isScriptSetup&&De(t,e),I0={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:l,appContext:c}=t;let h;if(e[0]!=="$"){const _=o[e];if(_!==void 0)switch(_){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(gl(r,e))return o[e]=1,r[e];if(s!==xe&&De(s,e))return o[e]=2,s[e];if((h=t.propsOptions[0])&&De(h,e))return o[e]=3,i[e];if(n!==xe&&De(n,e))return o[e]=4,n[e];zl&&(o[e]=0)}}const d=ii[e];let p,m;if(d)return e==="$attrs"&&At(t.attrs,"get",""),d(t);if((p=l.__cssModules)&&(p=p[e]))return p;if(n!==xe&&De(n,e))return o[e]=4,n[e];if(m=c.config.globalProperties,De(m,e))return m[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return gl(s,e)?(s[e]=n,!0):r!==xe&&De(r,e)?(r[e]=n,!0):De(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let l;return!!n[o]||t!==xe&&De(t,o)||gl(e,o)||(l=i[0])&&De(l,o)||De(r,o)||De(ii,o)||De(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:De(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function jh(t){return fe(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let zl=!0;function b0(t){const e=Hc(t),n=t.proxy,r=t.ctx;zl=!1,e.beforeCreate&&qh(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:l,provide:c,inject:h,created:d,beforeMount:p,mounted:m,beforeUpdate:_,updated:I,activated:S,deactivated:P,beforeDestroy:V,beforeUnmount:F,destroyed:j,unmounted:q,render:oe,renderTracked:ye,renderTriggered:A,errorCaptured:y,serverPrefetch:E,expose:b,inheritAttrs:R,components:C,directives:T,filters:ht}=e;if(h&&A0(h,r,null),o)for(const ue in o){const ve=o[ue];ge(ve)&&(r[ue]=ve.bind(n))}if(s){const ue=s.call(n,n);ze(ue)&&(t.data=Ni(ue))}if(zl=!0,i)for(const ue in i){const ve=i[ue],$t=ge(ve)?ve.bind(n,n):ge(ve.get)?ve.get.bind(n,n):un,Jt=!ge(ve)&&ge(ve.set)?ve.set.bind(n):un,Kt=qe({get:$t,set:Jt});Object.defineProperty(r,ue,{enumerable:!0,configurable:!0,get:()=>Kt.value,set:We=>Kt.value=We})}if(l)for(const ue in l)Op(l[ue],r,n,ue);if(c){const ue=ge(c)?c.call(n):c;Reflect.ownKeys(ue).forEach(ve=>{Ao(ve,ue[ve])})}d&&qh(d,t,"c");function Fe(ue,ve){fe(ve)?ve.forEach($t=>ue($t.bind(n))):ve&&ue(ve.bind(n))}if(Fe(jc,p),Fe($r,m),Fe(p0,_),Fe(m0,I),Fe(h0,S),Fe(d0,P),Fe(v0,y),Fe(y0,ye),Fe(_0,A),Fe(Np,F),Fe(qc,q),Fe(g0,E),fe(b))if(b.length){const ue=t.exposed||(t.exposed={});b.forEach(ve=>{Object.defineProperty(ue,ve,{get:()=>n[ve],set:$t=>n[ve]=$t})})}else t.exposed||(t.exposed={});oe&&t.render===un&&(t.render=oe),R!=null&&(t.inheritAttrs=R),C&&(t.components=C),T&&(t.directives=T),E&&Pp(t)}function A0(t,e,n=un){fe(t)&&(t=Wl(t));for(const r in t){const s=t[r];let i;ze(s)?"default"in s?i=tn(s.from||r,s.default,!0):i=tn(s.from||r):i=tn(s),Je(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function qh(t,e,n){mn(fe(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Op(t,e,n,r){let s=r.includes(".")?Gp(n,r):()=>n[r];if(nt(t)){const i=e[t];ge(i)&&sr(s,i)}else if(ge(t))sr(s,t.bind(n));else if(ze(t))if(fe(t))t.forEach(i=>Op(i,e,n,r));else{const i=ge(t.handler)?t.handler.bind(n):e[t.handler];ge(i)&&sr(s,i,t)}}function Hc(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,l=i.get(e);let c;return l?c=l:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(h=>Ho(c,h,o,!0)),Ho(c,e,o)),ze(e)&&i.set(e,c),c}function Ho(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Ho(t,i,n,!0),s&&s.forEach(o=>Ho(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const l=R0[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const R0={data:Hh,props:zh,emits:zh,methods:Ys,computed:Ys,beforeCreate:Dt,created:Dt,beforeMount:Dt,mounted:Dt,beforeUpdate:Dt,updated:Dt,beforeDestroy:Dt,beforeUnmount:Dt,destroyed:Dt,unmounted:Dt,activated:Dt,deactivated:Dt,errorCaptured:Dt,serverPrefetch:Dt,components:Ys,directives:Ys,watch:C0,provide:Hh,inject:S0};function Hh(t,e){return e?t?function(){return ct(ge(t)?t.call(this,this):t,ge(e)?e.call(this,this):e)}:e:t}function S0(t,e){return Ys(Wl(t),Wl(e))}function Wl(t){if(fe(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Dt(t,e){return t?[...new Set([].concat(t,e))]:e}function Ys(t,e){return t?ct(Object.create(null),t,e):e}function zh(t,e){return t?fe(t)&&fe(e)?[...new Set([...t,...e])]:ct(Object.create(null),jh(t),jh(e??{})):e}function C0(t,e){if(!t)return e;if(!e)return t;const n=ct(Object.create(null),t);for(const r in e)n[r]=Dt(t[r],e[r]);return n}function Mp(){return{app:null,config:{isNativeTag:vy,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let P0=0;function k0(t,e){return function(r,s=null){ge(r)||(r=ct({},r)),s!=null&&!ze(s)&&(s=null);const i=Mp(),o=new WeakSet,l=[];let c=!1;const h=i.app={_uid:P0++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:hv,get config(){return i.config},set config(d){},use(d,...p){return o.has(d)||(d&&ge(d.install)?(o.add(d),d.install(h,...p)):ge(d)&&(o.add(d),d(h,...p))),h},mixin(d){return i.mixins.includes(d)||i.mixins.push(d),h},component(d,p){return p?(i.components[d]=p,h):i.components[d]},directive(d,p){return p?(i.directives[d]=p,h):i.directives[d]},mount(d,p,m){if(!c){const _=h._ceVNode||_e(r,s);return _.appContext=i,m===!0?m="svg":m===!1&&(m=void 0),p&&e?e(_,d):t(_,d,m),c=!0,h._container=d,d.__vue_app__=h,Ea(_.component)}},onUnmount(d){l.push(d)},unmount(){c&&(mn(l,h._instance,16),t(null,h._container),delete h._container.__vue_app__)},provide(d,p){return i.provides[d]=p,h},runWithContext(d){const p=Dr;Dr=h;try{return d()}finally{Dr=p}}};return h}}let Dr=null;function Ao(t,e){if(mt){let n=mt.provides;const r=mt.parent&&mt.parent.provides;r===n&&(n=mt.provides=Object.create(r)),n[t]=e}}function tn(t,e,n=!1){const r=mt||lt;if(r||Dr){const s=Dr?Dr._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&ge(e)?e.call(r&&r.proxy):e}}function D0(){return!!(mt||lt||Dr)}const xp={},Lp=()=>Object.create(xp),Fp=t=>Object.getPrototypeOf(t)===xp;function N0(t,e,n,r=!1){const s={},i=Lp();t.propsDefaults=Object.create(null),Up(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Ep(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function V0(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,l=Ce(s),[c]=t.propsOptions;let h=!1;if((r||o>0)&&!(o&16)){if(o&8){const d=t.vnode.dynamicProps;for(let p=0;p<d.length;p++){let m=d[p];if(ya(t.emitsOptions,m))continue;const _=e[m];if(c)if(De(i,m))_!==i[m]&&(i[m]=_,h=!0);else{const I=Xt(m);s[I]=Kl(c,l,I,_,t,!1)}else _!==i[m]&&(i[m]=_,h=!0)}}}else{Up(t,e,s,i)&&(h=!0);let d;for(const p in l)(!e||!De(e,p)&&((d=mr(p))===p||!De(e,d)))&&(c?n&&(n[p]!==void 0||n[d]!==void 0)&&(s[p]=Kl(c,l,p,void 0,t,!0)):delete s[p]);if(i!==l)for(const p in i)(!e||!De(e,p))&&(delete i[p],h=!0)}h&&bn(t.attrs,"set","")}function Up(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,l;if(e)for(let c in e){if(ni(c))continue;const h=e[c];let d;s&&De(s,d=Xt(c))?!i||!i.includes(d)?n[d]=h:(l||(l={}))[d]=h:ya(t.emitsOptions,c)||(!(c in r)||h!==r[c])&&(r[c]=h,o=!0)}if(i){const c=Ce(n),h=l||xe;for(let d=0;d<i.length;d++){const p=i[d];n[p]=Kl(s,c,p,h[p],t,!De(h,p))}}return o}function Kl(t,e,n,r,s,i){const o=t[n];if(o!=null){const l=De(o,"default");if(l&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&ge(c)){const{propsDefaults:h}=s;if(n in h)r=h[n];else{const d=Oi(s);r=h[n]=c.call(null,e),d()}}else r=c;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!l?r=!1:o[1]&&(r===""||r===mr(n))&&(r=!0))}return r}const O0=new WeakMap;function $p(t,e,n=!1){const r=n?O0:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},l=[];let c=!1;if(!ge(t)){const d=p=>{c=!0;const[m,_]=$p(p,e,!0);ct(o,m),_&&l.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(d),t.extends&&d(t.extends),t.mixins&&t.mixins.forEach(d)}if(!i&&!c)return ze(t)&&r.set(t,os),os;if(fe(i))for(let d=0;d<i.length;d++){const p=Xt(i[d]);Wh(p)&&(o[p]=xe)}else if(i)for(const d in i){const p=Xt(d);if(Wh(p)){const m=i[d],_=o[p]=fe(m)||ge(m)?{type:m}:ct({},m),I=_.type;let S=!1,P=!0;if(fe(I))for(let V=0;V<I.length;++V){const F=I[V],j=ge(F)&&F.name;if(j==="Boolean"){S=!0;break}else j==="String"&&(P=!1)}else S=ge(I)&&I.name==="Boolean";_[0]=S,_[1]=P,(S||De(_,"default"))&&l.push(p)}}const h=[o,l];return ze(t)&&r.set(t,h),h}function Wh(t){return t[0]!=="$"&&!ni(t)}const Bp=t=>t[0]==="_"||t==="$stable",zc=t=>fe(t)?t.map(cn):[cn(t)],M0=(t,e,n)=>{if(e._n)return e;const r=hn((...s)=>zc(e(...s)),n);return r._c=!1,r},jp=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Bp(s))continue;const i=t[s];if(ge(i))e[s]=M0(s,i,r);else if(i!=null){const o=zc(i);e[s]=()=>o}}},qp=(t,e)=>{const n=zc(e);t.slots.default=()=>n},Hp=(t,e,n)=>{for(const r in e)(n||r!=="_")&&(t[r]=e[r])},x0=(t,e,n)=>{const r=t.slots=Lp();if(t.vnode.shapeFlag&32){const s=e._;s?(Hp(r,e,n),n&&Zf(r,"_",s,!0)):jp(e,r)}else e&&qp(t,e)},L0=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=xe;if(r.shapeFlag&32){const l=e._;l?n&&l===1?i=!1:Hp(s,e,n):(i=!e.$stable,jp(e,s)),o=e}else e&&(qp(t,e),o={default:1});if(i)for(const l in s)!Bp(l)&&o[l]==null&&delete s[l]},jt=Y0;function F0(t){return U0(t)}function U0(t,e){const n=pa();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:l,createComment:c,setText:h,setElementText:d,parentNode:p,nextSibling:m,setScopeId:_=un,insertStaticContent:I}=t,S=(v,w,D,U=null,O=null,$=null,K=void 0,z=null,H=!!w.dynamicChildren)=>{if(v===w)return;v&&!Qs(v,w)&&(U=M(v),We(v,O,$,!0),v=null),w.patchFlag===-2&&(H=!1,w.dynamicChildren=null);const{type:B,ref:ae,shapeFlag:X}=w;switch(B){case va:P(v,w,D,U);break;case cr:V(v,w,D,U);break;case Ro:v==null&&F(w,D,U,K);break;case rt:C(v,w,D,U,O,$,K,z,H);break;default:X&1?oe(v,w,D,U,O,$,K,z,H):X&6?T(v,w,D,U,O,$,K,z,H):(X&64||X&128)&&B.process(v,w,D,U,O,$,K,z,H,te)}ae!=null&&O&&qo(ae,v&&v.ref,$,w||v,!w)},P=(v,w,D,U)=>{if(v==null)r(w.el=l(w.children),D,U);else{const O=w.el=v.el;w.children!==v.children&&h(O,w.children)}},V=(v,w,D,U)=>{v==null?r(w.el=c(w.children||""),D,U):w.el=v.el},F=(v,w,D,U)=>{[v.el,v.anchor]=I(v.children,w,D,U,v.el,v.anchor)},j=({el:v,anchor:w},D,U)=>{let O;for(;v&&v!==w;)O=m(v),r(v,D,U),v=O;r(w,D,U)},q=({el:v,anchor:w})=>{let D;for(;v&&v!==w;)D=m(v),s(v),v=D;s(w)},oe=(v,w,D,U,O,$,K,z,H)=>{w.type==="svg"?K="svg":w.type==="math"&&(K="mathml"),v==null?ye(w,D,U,O,$,K,z,H):E(v,w,O,$,K,z,H)},ye=(v,w,D,U,O,$,K,z)=>{let H,B;const{props:ae,shapeFlag:X,transition:re,dirs:ne}=v;if(H=v.el=o(v.type,$,ae&&ae.is,ae),X&8?d(H,v.children):X&16&&y(v.children,H,null,U,O,_l(v,$),K,z),ne&&br(v,null,U,"created"),A(H,v,v.scopeId,K,U),ae){for(const Pe in ae)Pe!=="value"&&!ni(Pe)&&i(H,Pe,null,ae[Pe],$,U);"value"in ae&&i(H,"value",null,ae.value,$),(B=ae.onVnodeBeforeMount)&&an(B,U,v)}ne&&br(v,null,U,"beforeMount");const ce=$0(O,re);ce&&re.beforeEnter(H),r(H,w,D),((B=ae&&ae.onVnodeMounted)||ce||ne)&&jt(()=>{B&&an(B,U,v),ce&&re.enter(H),ne&&br(v,null,U,"mounted")},O)},A=(v,w,D,U,O)=>{if(D&&_(v,D),U)for(let $=0;$<U.length;$++)_(v,U[$]);if(O){let $=O.subTree;if(w===$||Xp($.type)&&($.ssContent===w||$.ssFallback===w)){const K=O.vnode;A(v,K,K.scopeId,K.slotScopeIds,O.parent)}}},y=(v,w,D,U,O,$,K,z,H=0)=>{for(let B=H;B<v.length;B++){const ae=v[B]=z?Xn(v[B]):cn(v[B]);S(null,ae,w,D,U,O,$,K,z)}},E=(v,w,D,U,O,$,K)=>{const z=w.el=v.el;let{patchFlag:H,dynamicChildren:B,dirs:ae}=w;H|=v.patchFlag&16;const X=v.props||xe,re=w.props||xe;let ne;if(D&&Ar(D,!1),(ne=re.onVnodeBeforeUpdate)&&an(ne,D,w,v),ae&&br(w,v,D,"beforeUpdate"),D&&Ar(D,!0),(X.innerHTML&&re.innerHTML==null||X.textContent&&re.textContent==null)&&d(z,""),B?b(v.dynamicChildren,B,z,D,U,_l(w,O),$):K||ve(v,w,z,null,D,U,_l(w,O),$,!1),H>0){if(H&16)R(z,X,re,D,O);else if(H&2&&X.class!==re.class&&i(z,"class",null,re.class,O),H&4&&i(z,"style",X.style,re.style,O),H&8){const ce=w.dynamicProps;for(let Pe=0;Pe<ce.length;Pe++){const Re=ce[Pe],vt=X[Re],ot=re[Re];(ot!==vt||Re==="value")&&i(z,Re,vt,ot,O,D)}}H&1&&v.children!==w.children&&d(z,w.children)}else!K&&B==null&&R(z,X,re,D,O);((ne=re.onVnodeUpdated)||ae)&&jt(()=>{ne&&an(ne,D,w,v),ae&&br(w,v,D,"updated")},U)},b=(v,w,D,U,O,$,K)=>{for(let z=0;z<w.length;z++){const H=v[z],B=w[z],ae=H.el&&(H.type===rt||!Qs(H,B)||H.shapeFlag&70)?p(H.el):D;S(H,B,ae,null,U,O,$,K,!0)}},R=(v,w,D,U,O)=>{if(w!==D){if(w!==xe)for(const $ in w)!ni($)&&!($ in D)&&i(v,$,w[$],null,O,U);for(const $ in D){if(ni($))continue;const K=D[$],z=w[$];K!==z&&$!=="value"&&i(v,$,z,K,O,U)}"value"in D&&i(v,"value",w.value,D.value,O)}},C=(v,w,D,U,O,$,K,z,H)=>{const B=w.el=v?v.el:l(""),ae=w.anchor=v?v.anchor:l("");let{patchFlag:X,dynamicChildren:re,slotScopeIds:ne}=w;ne&&(z=z?z.concat(ne):ne),v==null?(r(B,D,U),r(ae,D,U),y(w.children||[],D,ae,O,$,K,z,H)):X>0&&X&64&&re&&v.dynamicChildren?(b(v.dynamicChildren,re,D,O,$,K,z),(w.key!=null||O&&w===O.subTree)&&zp(v,w,!0)):ve(v,w,D,ae,O,$,K,z,H)},T=(v,w,D,U,O,$,K,z,H)=>{w.slotScopeIds=z,v==null?w.shapeFlag&512?O.ctx.activate(w,D,U,K,H):ht(w,D,U,O,$,K,H):Mt(v,w,H)},ht=(v,w,D,U,O,$,K)=>{const z=v.component=sv(v,U,O);if(kp(v)&&(z.ctx.renderer=te),iv(z,!1,K),z.asyncDep){if(O&&O.registerDep(z,Fe,K),!v.el){const H=z.subTree=_e(cr);V(null,H,w,D)}}else Fe(z,v,w,D,O,$,K)},Mt=(v,w,D)=>{const U=w.component=v.component;if(Q0(v,w,D))if(U.asyncDep&&!U.asyncResolved){ue(U,w,D);return}else U.next=w,U.update();else w.el=v.el,U.vnode=w},Fe=(v,w,D,U,O,$,K)=>{const z=()=>{if(v.isMounted){let{next:X,bu:re,u:ne,parent:ce,vnode:Pe}=v;{const Et=Wp(v);if(Et){X&&(X.el=Pe.el,ue(v,X,K)),Et.asyncDep.then(()=>{v.isUnmounted||z()});return}}let Re=X,vt;Ar(v,!1),X?(X.el=Pe.el,ue(v,X,K)):X=Pe,re&&Io(re),(vt=X.props&&X.props.onVnodeBeforeUpdate)&&an(vt,ce,X,Pe),Ar(v,!0);const ot=yl(v),dt=v.subTree;v.subTree=ot,S(dt,ot,p(dt.el),M(dt),v,O,$),X.el=ot.el,Re===null&&X0(v,ot.el),ne&&jt(ne,O),(vt=X.props&&X.props.onVnodeUpdated)&&jt(()=>an(vt,ce,X,Pe),O)}else{let X;const{el:re,props:ne}=w,{bm:ce,m:Pe,parent:Re,root:vt,type:ot}=v,dt=us(w);if(Ar(v,!1),ce&&Io(ce),!dt&&(X=ne&&ne.onVnodeBeforeMount)&&an(X,Re,w),Ar(v,!0),re&&Oe){const Et=()=>{v.subTree=yl(v),Oe(re,v.subTree,v,O,null)};dt&&ot.__asyncHydrate?ot.__asyncHydrate(re,v,Et):Et()}else{vt.ce&&vt.ce._injectChildStyle(ot);const Et=v.subTree=yl(v);S(null,Et,D,U,v,O,$),w.el=Et.el}if(Pe&&jt(Pe,O),!dt&&(X=ne&&ne.onVnodeMounted)){const Et=w;jt(()=>an(X,Re,Et),O)}(w.shapeFlag&256||Re&&us(Re.vnode)&&Re.vnode.shapeFlag&256)&&v.a&&jt(v.a,O),v.isMounted=!0,w=D=U=null}};v.scope.on();const H=v.effect=new op(z);v.scope.off();const B=v.update=H.run.bind(H),ae=v.job=H.runIfDirty.bind(H);ae.i=v,ae.id=v.uid,H.scheduler=()=>$c(ae),Ar(v,!0),B()},ue=(v,w,D)=>{w.component=v;const U=v.vnode.props;v.vnode=w,v.next=null,V0(v,w.props,U,D),L0(v,w.children,D),gr(),$h(v),_r()},ve=(v,w,D,U,O,$,K,z,H=!1)=>{const B=v&&v.children,ae=v?v.shapeFlag:0,X=w.children,{patchFlag:re,shapeFlag:ne}=w;if(re>0){if(re&128){Jt(B,X,D,U,O,$,K,z,H);return}else if(re&256){$t(B,X,D,U,O,$,K,z,H);return}}ne&8?(ae&16&&xt(B,O,$),X!==B&&d(D,X)):ae&16?ne&16?Jt(B,X,D,U,O,$,K,z,H):xt(B,O,$,!0):(ae&8&&d(D,""),ne&16&&y(X,D,U,O,$,K,z,H))},$t=(v,w,D,U,O,$,K,z,H)=>{v=v||os,w=w||os;const B=v.length,ae=w.length,X=Math.min(B,ae);let re;for(re=0;re<X;re++){const ne=w[re]=H?Xn(w[re]):cn(w[re]);S(v[re],ne,D,null,O,$,K,z,H)}B>ae?xt(v,O,$,!0,!1,X):y(w,D,U,O,$,K,z,H,X)},Jt=(v,w,D,U,O,$,K,z,H)=>{let B=0;const ae=w.length;let X=v.length-1,re=ae-1;for(;B<=X&&B<=re;){const ne=v[B],ce=w[B]=H?Xn(w[B]):cn(w[B]);if(Qs(ne,ce))S(ne,ce,D,null,O,$,K,z,H);else break;B++}for(;B<=X&&B<=re;){const ne=v[X],ce=w[re]=H?Xn(w[re]):cn(w[re]);if(Qs(ne,ce))S(ne,ce,D,null,O,$,K,z,H);else break;X--,re--}if(B>X){if(B<=re){const ne=re+1,ce=ne<ae?w[ne].el:U;for(;B<=re;)S(null,w[B]=H?Xn(w[B]):cn(w[B]),D,ce,O,$,K,z,H),B++}}else if(B>re)for(;B<=X;)We(v[B],O,$,!0),B++;else{const ne=B,ce=B,Pe=new Map;for(B=ce;B<=re;B++){const Pt=w[B]=H?Xn(w[B]):cn(w[B]);Pt.key!=null&&Pe.set(Pt.key,B)}let Re,vt=0;const ot=re-ce+1;let dt=!1,Et=0;const jn=new Array(ot);for(B=0;B<ot;B++)jn[B]=0;for(B=ne;B<=X;B++){const Pt=v[B];if(vt>=ot){We(Pt,O,$,!0);continue}let Gt;if(Pt.key!=null)Gt=Pe.get(Pt.key);else for(Re=ce;Re<=re;Re++)if(jn[Re-ce]===0&&Qs(Pt,w[Re])){Gt=Re;break}Gt===void 0?We(Pt,O,$,!0):(jn[Gt-ce]=B+1,Gt>=Et?Et=Gt:dt=!0,S(Pt,w[Gt],D,null,O,$,K,z,H),vt++)}const zr=dt?B0(jn):os;for(Re=zr.length-1,B=ot-1;B>=0;B--){const Pt=ce+B,Gt=w[Pt],Wr=Pt+1<ae?w[Pt+1].el:U;jn[B]===0?S(null,Gt,D,Wr,O,$,K,z,H):dt&&(Re<0||B!==zr[Re]?Kt(Gt,D,Wr,2):Re--)}}},Kt=(v,w,D,U,O=null)=>{const{el:$,type:K,transition:z,children:H,shapeFlag:B}=v;if(B&6){Kt(v.component.subTree,w,D,U);return}if(B&128){v.suspense.move(w,D,U);return}if(B&64){K.move(v,w,D,te);return}if(K===rt){r($,w,D);for(let X=0;X<H.length;X++)Kt(H[X],w,D,U);r(v.anchor,w,D);return}if(K===Ro){j(v,w,D);return}if(U!==2&&B&1&&z)if(U===0)z.beforeEnter($),r($,w,D),jt(()=>z.enter($),O);else{const{leave:X,delayLeave:re,afterLeave:ne}=z,ce=()=>r($,w,D),Pe=()=>{X($,()=>{ce(),ne&&ne()})};re?re($,ce,Pe):Pe()}else r($,w,D)},We=(v,w,D,U=!1,O=!1)=>{const{type:$,props:K,ref:z,children:H,dynamicChildren:B,shapeFlag:ae,patchFlag:X,dirs:re,cacheIndex:ne}=v;if(X===-2&&(O=!1),z!=null&&qo(z,null,D,v,!0),ne!=null&&(w.renderCache[ne]=void 0),ae&256){w.ctx.deactivate(v);return}const ce=ae&1&&re,Pe=!us(v);let Re;if(Pe&&(Re=K&&K.onVnodeBeforeUnmount)&&an(Re,w,v),ae&6)on(v.component,D,U);else{if(ae&128){v.suspense.unmount(D,U);return}ce&&br(v,null,w,"beforeUnmount"),ae&64?v.type.remove(v,w,D,te,U):B&&!B.hasOnce&&($!==rt||X>0&&X&64)?xt(B,w,D,!1,!0):($===rt&&X&384||!O&&ae&16)&&xt(H,w,D),U&&Ke(v)}(Pe&&(Re=K&&K.onVnodeUnmounted)||ce)&&jt(()=>{Re&&an(Re,w,v),ce&&br(v,null,w,"unmounted")},D)},Ke=v=>{const{type:w,el:D,anchor:U,transition:O}=v;if(w===rt){Bn(D,U);return}if(w===Ro){q(v);return}const $=()=>{s(D),O&&!O.persisted&&O.afterLeave&&O.afterLeave()};if(v.shapeFlag&1&&O&&!O.persisted){const{leave:K,delayLeave:z}=O,H=()=>K(D,$);z?z(v.el,$,H):H()}else $()},Bn=(v,w)=>{let D;for(;v!==w;)D=m(v),s(v),v=D;s(w)},on=(v,w,D)=>{const{bum:U,scope:O,job:$,subTree:K,um:z,m:H,a:B}=v;Kh(H),Kh(B),U&&Io(U),O.stop(),$&&($.flags|=8,We(K,v,w,D)),z&&jt(z,w),jt(()=>{v.isUnmounted=!0},w),w&&w.pendingBranch&&!w.isUnmounted&&v.asyncDep&&!v.asyncResolved&&v.suspenseId===w.pendingId&&(w.deps--,w.deps===0&&w.resolve())},xt=(v,w,D,U=!1,O=!1,$=0)=>{for(let K=$;K<v.length;K++)We(v[K],w,D,U,O)},M=v=>{if(v.shapeFlag&6)return M(v.component.subTree);if(v.shapeFlag&128)return v.suspense.next();const w=m(v.anchor||v.el),D=w&&w[c0];return D?m(D):w};let J=!1;const Q=(v,w,D)=>{v==null?w._vnode&&We(w._vnode,null,null,!0):S(w._vnode||null,v,w,null,null,null,D),w._vnode=v,J||(J=!0,$h(),Rp(),J=!1)},te={p:S,um:We,m:Kt,r:Ke,mt:ht,mc:y,pc:ve,pbc:b,n:M,o:t};let be,Oe;return{render:Q,hydrate:be,createApp:k0(Q,be)}}function _l({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Ar({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function $0(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function zp(t,e,n=!1){const r=t.children,s=e.children;if(fe(r)&&fe(s))for(let i=0;i<r.length;i++){const o=r[i];let l=s[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[i]=Xn(s[i]),l.el=o.el),!n&&l.patchFlag!==-2&&zp(o,l)),l.type===va&&(l.el=o.el)}}function B0(t){const e=t.slice(),n=[0];let r,s,i,o,l;const c=t.length;for(r=0;r<c;r++){const h=t[r];if(h!==0){if(s=n[n.length-1],t[s]<h){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)l=i+o>>1,t[n[l]]<h?i=l+1:o=l;h<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function Wp(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Wp(e)}function Kh(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const j0=Symbol.for("v-scx"),q0=()=>tn(j0);function sr(t,e,n){return Kp(t,e,n)}function Kp(t,e,n=xe){const{immediate:r,deep:s,flush:i,once:o}=n,l=ct({},n),c=e&&r||!e&&i!=="post";let h;if(Ei){if(i==="sync"){const _=q0();h=_.__watcherHandles||(_.__watcherHandles=[])}else if(!c){const _=()=>{};return _.stop=un,_.resume=un,_.pause=un,_}}const d=mt;l.call=(_,I,S)=>mn(_,d,I,S);let p=!1;i==="post"?l.scheduler=_=>{jt(_,d&&d.suspense)}:i!=="sync"&&(p=!0,l.scheduler=(_,I)=>{I?_():$c(_)}),l.augmentJob=_=>{e&&(_.flags|=4),p&&(_.flags|=2,d&&(_.id=d.uid,_.i=d))};const m=i0(t,e,l);return Ei&&(h?h.push(m):c&&m()),m}function H0(t,e,n){const r=this.proxy,s=nt(t)?t.includes(".")?Gp(r,t):()=>r[t]:t.bind(r,r);let i;ge(e)?i=e:(i=e.handler,n=e);const o=Oi(this),l=Kp(s,i.bind(r),n);return o(),l}function Gp(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const z0=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Xt(e)}Modifiers`]||t[`${mr(e)}Modifiers`];function W0(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||xe;let s=n;const i=e.startsWith("update:"),o=i&&z0(r,e.slice(7));o&&(o.trim&&(s=n.map(d=>nt(d)?d.trim():d)),o.number&&(s=n.map(Fl)));let l,c=r[l=hl(e)]||r[l=hl(Xt(e))];!c&&i&&(c=r[l=hl(mr(e))]),c&&mn(c,t,6,s);const h=r[l+"Once"];if(h){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,mn(h,t,6,s)}}function Qp(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},l=!1;if(!ge(t)){const c=h=>{const d=Qp(h,e,!0);d&&(l=!0,ct(o,d))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!l?(ze(t)&&r.set(t,null),null):(fe(i)?i.forEach(c=>o[c]=null):ct(o,i),ze(t)&&r.set(t,o),o)}function ya(t,e){return!t||!ua(e)?!1:(e=e.slice(2).replace(/Once$/,""),De(t,e[0].toLowerCase()+e.slice(1))||De(t,mr(e))||De(t,e))}function yl(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:l,emit:c,render:h,renderCache:d,props:p,data:m,setupState:_,ctx:I,inheritAttrs:S}=t,P=jo(t);let V,F;try{if(n.shapeFlag&4){const q=s||r,oe=q;V=cn(h.call(oe,q,d,p,_,m,I)),F=l}else{const q=e;V=cn(q.length>1?q(p,{attrs:l,slots:o,emit:c}):q(p,null)),F=e.props?l:K0(l)}}catch(q){oi.length=0,ga(q,t,1),V=_e(cr)}let j=V;if(F&&S!==!1){const q=Object.keys(F),{shapeFlag:oe}=j;q.length&&oe&7&&(i&&q.some(Cc)&&(F=G0(F,i)),j=gs(j,F,!1,!0))}return n.dirs&&(j=gs(j,null,!1,!0),j.dirs=j.dirs?j.dirs.concat(n.dirs):n.dirs),n.transition&&Bc(j,n.transition),V=j,jo(P),V}const K0=t=>{let e;for(const n in t)(n==="class"||n==="style"||ua(n))&&((e||(e={}))[n]=t[n]);return e},G0=(t,e)=>{const n={};for(const r in t)(!Cc(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Q0(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:l,patchFlag:c}=e,h=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Gh(r,o,h):!!o;if(c&8){const d=e.dynamicProps;for(let p=0;p<d.length;p++){const m=d[p];if(o[m]!==r[m]&&!ya(h,m))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:r===o?!1:r?o?Gh(r,o,h):!0:!!o;return!1}function Gh(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!ya(n,i))return!0}return!1}function X0({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const Xp=t=>t.__isSuspense;function Y0(t,e){e&&e.pendingBranch?fe(t)?e.effects.push(...t):e.effects.push(t):l0(t)}const rt=Symbol.for("v-fgt"),va=Symbol.for("v-txt"),cr=Symbol.for("v-cmt"),Ro=Symbol.for("v-stc"),oi=[];let Ht=null;function G(t=!1){oi.push(Ht=t?null:[])}function J0(){oi.pop(),Ht=oi[oi.length-1]||null}let yi=1;function Qh(t,e=!1){yi+=t,t<0&&Ht&&e&&(Ht.hasOnce=!0)}function Yp(t){return t.dynamicChildren=yi>0?Ht||os:null,J0(),yi>0&&Ht&&Ht.push(t),t}function se(t,e,n,r,s,i){return Yp(Y(t,e,n,r,s,i,!0))}function Ye(t,e,n,r,s){return Yp(_e(t,e,n,r,s,!0))}function vi(t){return t?t.__v_isVNode===!0:!1}function Qs(t,e){return t.type===e.type&&t.key===e.key}const Jp=({key:t})=>t??null,So=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?nt(t)||Je(t)||ge(t)?{i:lt,r:t,k:e,f:!!n}:t:null);function Y(t,e=null,n=null,r=0,s=null,i=t===rt?0:1,o=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Jp(e),ref:e&&So(e),scopeId:Cp,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:lt};return l?(Wc(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=nt(n)?8:16),yi>0&&!o&&Ht&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Ht.push(c),c}const _e=Z0;function Z0(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===w0)&&(t=cr),vi(t)){const l=gs(t,e,!0);return n&&Wc(l,n),yi>0&&!i&&Ht&&(l.shapeFlag&6?Ht[Ht.indexOf(t)]=l:Ht.push(l)),l.patchFlag=-2,l}if(uv(t)&&(t=t.__vccOpts),e){e=ev(e);let{class:l,style:c}=e;l&&!nt(l)&&(e.class=qt(l)),ze(c)&&(Lc(c)&&!fe(c)&&(c=ct({},c)),e.style=yn(c))}const o=nt(t)?1:Xp(t)?128:u0(t)?64:ze(t)?4:ge(t)?2:0;return Y(t,e,n,r,s,o,i,!0)}function ev(t){return t?Lc(t)||Fp(t)?ct({},t):t:null}function gs(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:l,transition:c}=t,h=e?tv(s||{},e):s,d={__v_isVNode:!0,__v_skip:!0,type:t.type,props:h,key:h&&Jp(h),ref:e&&e.ref?n&&i?fe(i)?i.concat(So(e)):[i,So(e)]:So(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==rt?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&gs(t.ssContent),ssFallback:t.ssFallback&&gs(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&r&&Bc(d,c.clone(d)),d}function Dn(t=" ",e=0){return _e(va,null,t,e)}function Zp(t,e){const n=_e(Ro,null,t);return n.staticCount=e,n}function $e(t="",e=!1){return e?(G(),Ye(cr,null,t)):_e(cr,null,t)}function cn(t){return t==null||typeof t=="boolean"?_e(cr):fe(t)?_e(rt,null,t.slice()):vi(t)?Xn(t):_e(va,null,String(t))}function Xn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:gs(t)}function Wc(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(fe(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Wc(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!Fp(e)?e._ctx=lt:s===3&&lt&&(lt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ge(e)?(e={default:e,_ctx:lt},n=32):(e=String(e),r&64?(n=16,e=[Dn(e)]):n=8);t.children=e,t.shapeFlag|=n}function tv(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=qt([e.class,r.class]));else if(s==="style")e.style=yn([e.style,r.style]);else if(ua(s)){const i=e[s],o=r[s];o&&i!==o&&!(fe(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function an(t,e,n,r=null){mn(t,e,7,[n,r])}const nv=Mp();let rv=0;function sv(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||nv,i={uid:rv++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new rp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:$p(r,s),emitsOptions:Qp(r,s),emit:null,emitted:null,propsDefaults:xe,inheritAttrs:r.inheritAttrs,ctx:xe,data:xe,props:xe,attrs:xe,slots:xe,refs:xe,setupState:xe,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=W0.bind(null,i),t.ce&&t.ce(i),i}let mt=null,zo,Gl;{const t=pa(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};zo=e("__VUE_INSTANCE_SETTERS__",n=>mt=n),Gl=e("__VUE_SSR_SETTERS__",n=>Ei=n)}const Oi=t=>{const e=mt;return zo(t),t.scope.on(),()=>{t.scope.off(),zo(e)}},Xh=()=>{mt&&mt.scope.off(),zo(null)};function em(t){return t.vnode.shapeFlag&4}let Ei=!1;function iv(t,e=!1,n=!1){e&&Gl(e);const{props:r,children:s}=t.vnode,i=em(t);N0(t,r,i,e),x0(t,s,n);const o=i?ov(t,e):void 0;return e&&Gl(!1),o}function ov(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,I0);const{setup:r}=n;if(r){gr();const s=t.setupContext=r.length>1?lv(t):null,i=Oi(t),o=Vi(r,t,0,[t.props,s]),l=Xf(o);if(_r(),i(),(l||t.sp)&&!us(t)&&Pp(t),l){if(o.then(Xh,Xh),e)return o.then(c=>{Yh(t,c,e)}).catch(c=>{ga(c,t,0)});t.asyncDep=o}else Yh(t,o,e)}else tm(t,e)}function Yh(t,e,n){ge(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ze(e)&&(t.setupState=Ip(e)),tm(t,n)}let Jh;function tm(t,e,n){const r=t.type;if(!t.render){if(!e&&Jh&&!r.render){const s=r.template||Hc(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:l,compilerOptions:c}=r,h=ct(ct({isCustomElement:i,delimiters:l},o),c);r.render=Jh(s,h)}}t.render=r.render||un}{const s=Oi(t);gr();try{b0(t)}finally{_r(),s()}}}const av={get(t,e){return At(t,"get",""),t[e]}};function lv(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,av),slots:t.slots,emit:t.emit,expose:e}}function Ea(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Ip(Fc(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in ii)return ii[n](t)},has(e,n){return n in e||n in ii}})):t.proxy}function cv(t,e=!0){return ge(t)?t.displayName||t.name:t.name||e&&t.__name}function uv(t){return ge(t)&&"__vccOpts"in t}const qe=(t,e)=>r0(t,e,Ei);function nm(t,e,n){const r=arguments.length;return r===2?ze(e)&&!fe(e)?vi(e)?_e(t,null,[e]):_e(t,e):_e(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&vi(n)&&(n=[n]),_e(t,e,n))}const hv="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ql;const Zh=typeof window<"u"&&window.trustedTypes;if(Zh)try{Ql=Zh.createPolicy("vue",{createHTML:t=>t})}catch{}const rm=Ql?t=>Ql.createHTML(t):t=>t,dv="http://www.w3.org/2000/svg",fv="http://www.w3.org/1998/Math/MathML",In=typeof document<"u"?document:null,ed=In&&In.createElement("template"),pv={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?In.createElementNS(dv,t):e==="mathml"?In.createElementNS(fv,t):n?In.createElement(t,{is:n}):In.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>In.createTextNode(t),createComment:t=>In.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>In.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{ed.innerHTML=rm(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const l=ed.content;if(r==="svg"||r==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},mv=Symbol("_vtc");function gv(t,e,n){const r=t[mv];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const td=Symbol("_vod"),_v=Symbol("_vsh"),yv=Symbol(""),vv=/(^|;)\s*display\s*:/;function Ev(t,e,n){const r=t.style,s=nt(n);let i=!1;if(n&&!s){if(e)if(nt(e))for(const o of e.split(";")){const l=o.slice(0,o.indexOf(":")).trim();n[l]==null&&Co(r,l,"")}else for(const o in e)n[o]==null&&Co(r,o,"");for(const o in n)o==="display"&&(i=!0),Co(r,o,n[o])}else if(s){if(e!==n){const o=r[yv];o&&(n+=";"+o),r.cssText=n,i=vv.test(n)}}else e&&t.removeAttribute("style");td in t&&(t[td]=i?r.display:"",t[_v]&&(r.display="none"))}const nd=/\s*!important$/;function Co(t,e,n){if(fe(n))n.forEach(r=>Co(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=wv(t,e);nd.test(n)?t.setProperty(mr(r),n.replace(nd,""),"important"):t[r]=n}}const rd=["Webkit","Moz","ms"],vl={};function wv(t,e){const n=vl[e];if(n)return n;let r=Xt(e);if(r!=="filter"&&r in t)return vl[e]=r;r=fa(r);for(let s=0;s<rd.length;s++){const i=rd[s]+r;if(i in t)return vl[e]=i}return e}const sd="http://www.w3.org/1999/xlink";function id(t,e,n,r,s,i=Py(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(sd,e.slice(6,e.length)):t.setAttributeNS(sd,e,n):n==null||i&&!ep(n)?t.removeAttribute(e):t.setAttribute(e,i?"":Fn(n)?String(n):n)}function od(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?rm(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(l!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=ep(n):n==null&&l==="string"?(n="",o=!0):l==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function es(t,e,n,r){t.addEventListener(e,n,r)}function Tv(t,e,n,r){t.removeEventListener(e,n,r)}const ad=Symbol("_vei");function Iv(t,e,n,r,s=null){const i=t[ad]||(t[ad]={}),o=i[e];if(r&&o)o.value=r;else{const[l,c]=bv(e);if(r){const h=i[e]=Sv(r,s);es(t,l,h,c)}else o&&(Tv(t,l,o,c),i[e]=void 0)}}const ld=/(?:Once|Passive|Capture)$/;function bv(t){let e;if(ld.test(t)){e={};let r;for(;r=t.match(ld);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):mr(t.slice(2)),e]}let El=0;const Av=Promise.resolve(),Rv=()=>El||(Av.then(()=>El=0),El=Date.now());function Sv(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;mn(Cv(r,n.value),e,5,[r])};return n.value=t,n.attached=Rv(),n}function Cv(t,e){if(fe(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const cd=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Pv=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?gv(t,r,o):e==="style"?Ev(t,n,r):ua(e)?Cc(e)||Iv(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):kv(t,e,r,o))?(od(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&id(t,e,r,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!nt(r))?od(t,Xt(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),id(t,e,r,o))};function kv(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&cd(e)&&ge(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return cd(e)&&nt(n)?!1:e in t}const ud=t=>{const e=t.props["onUpdate:modelValue"]||!1;return fe(e)?n=>Io(e,n):e};function Dv(t){t.target.composing=!0}function hd(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const wl=Symbol("_assign"),Xl={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[wl]=ud(s);const i=r||s.props&&s.props.type==="number";es(t,e?"change":"input",o=>{if(o.target.composing)return;let l=t.value;n&&(l=l.trim()),i&&(l=Fl(l)),t[wl](l)}),n&&es(t,"change",()=>{t.value=t.value.trim()}),e||(es(t,"compositionstart",Dv),es(t,"compositionend",hd),es(t,"change",hd))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[wl]=ud(o),t.composing)return;const l=(i||t.type==="number")&&!/^0\d/.test(t.value)?Fl(t.value):t.value,c=e??"";l!==c&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===c)||(t.value=c))}},Nv={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Vv=(t,e)=>{const n=t._withKeys||(t._withKeys={}),r=e.join(".");return n[r]||(n[r]=s=>{if(!("key"in s))return;const i=mr(s.key);if(e.some(o=>o===i||Nv[o]===i))return t(s)})},Ov=ct({patchProp:Pv},pv);let dd;function Mv(){return dd||(dd=F0(Ov))}const xv=(...t)=>{const e=Mv().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=Fv(r);if(!s)return;const i=e._component;!ge(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,Lv(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function Lv(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Fv(t){return nt(t)?document.querySelector(t):t}var Uv=!1;/*!
 * pinia v2.3.0
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */let sm;const wa=t=>sm=t,im=Symbol();function Yl(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var ai;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(ai||(ai={}));function $v(){const t=sp(!0),e=t.run(()=>le({}));let n=[],r=[];const s=Fc({install(i){wa(s),s._a=i,i.provide(im,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!Uv?r.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const om=()=>{};function fd(t,e,n,r=om){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&ip()&&ky(s),s}function Jr(t,...e){t.slice().forEach(n=>{n(...e)})}const Bv=t=>t(),pd=Symbol(),Tl=Symbol();function Jl(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,r)=>t.set(r,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];Yl(s)&&Yl(r)&&t.hasOwnProperty(n)&&!Je(r)&&!rr(r)?t[n]=Jl(s,r):t[n]=r}return t}const jv=Symbol();function qv(t){return!Yl(t)||!t.hasOwnProperty(jv)}const{assign:Gn}=Object;function Hv(t){return!!(Je(t)&&t.effect)}function zv(t,e,n,r){const{state:s,actions:i,getters:o}=e,l=n.state.value[t];let c;function h(){l||(n.state.value[t]=s?s():{});const d=Zy(n.state.value[t]);return Gn(d,i,Object.keys(o||{}).reduce((p,m)=>(p[m]=Fc(qe(()=>{wa(n);const _=n._s.get(t);return o[m].call(_,_)})),p),{}))}return c=am(t,h,e,n,r,!0),c}function am(t,e,n={},r,s,i){let o;const l=Gn({actions:{}},n),c={deep:!0};let h,d,p=[],m=[],_;const I=r.state.value[t];!i&&!I&&(r.state.value[t]={}),le({});let S;function P(y){let E;h=d=!1,typeof y=="function"?(y(r.state.value[t]),E={type:ai.patchFunction,storeId:t,events:_}):(Jl(r.state.value[t],y),E={type:ai.patchObject,payload:y,storeId:t,events:_});const b=S=Symbol();Uc().then(()=>{S===b&&(h=!0)}),d=!0,Jr(p,E,r.state.value[t])}const V=i?function(){const{state:E}=n,b=E?E():{};this.$patch(R=>{Gn(R,b)})}:om;function F(){o.stop(),p=[],m=[],r._s.delete(t)}const j=(y,E="")=>{if(pd in y)return y[Tl]=E,y;const b=function(){wa(r);const R=Array.from(arguments),C=[],T=[];function ht(ue){C.push(ue)}function Mt(ue){T.push(ue)}Jr(m,{args:R,name:b[Tl],store:oe,after:ht,onError:Mt});let Fe;try{Fe=y.apply(this&&this.$id===t?this:oe,R)}catch(ue){throw Jr(T,ue),ue}return Fe instanceof Promise?Fe.then(ue=>(Jr(C,ue),ue)).catch(ue=>(Jr(T,ue),Promise.reject(ue))):(Jr(C,Fe),Fe)};return b[pd]=!0,b[Tl]=E,b},q={_p:r,$id:t,$onAction:fd.bind(null,m),$patch:P,$reset:V,$subscribe(y,E={}){const b=fd(p,y,E.detached,()=>R()),R=o.run(()=>sr(()=>r.state.value[t],C=>{(E.flush==="sync"?d:h)&&y({storeId:t,type:ai.direct,events:_},C)},Gn({},c,E)));return b},$dispose:F},oe=Ni(q);r._s.set(t,oe);const A=(r._a&&r._a.runWithContext||Bv)(()=>r._e.run(()=>(o=sp()).run(()=>e({action:j}))));for(const y in A){const E=A[y];if(Je(E)&&!Hv(E)||rr(E))i||(I&&qv(E)&&(Je(E)?E.value=I[y]:Jl(E,I[y])),r.state.value[t][y]=E);else if(typeof E=="function"){const b=j(E,y);A[y]=b,l.actions[y]=E}}return Gn(oe,A),Gn(Ce(oe),A),Object.defineProperty(oe,"$state",{get:()=>r.state.value[t],set:y=>{P(E=>{Gn(E,y)})}}),r._p.forEach(y=>{Gn(oe,o.run(()=>y({store:oe,app:r._a,pinia:r,options:l})))}),I&&i&&n.hydrate&&n.hydrate(oe.$state,I),h=!0,d=!0,oe}/*! #__NO_SIDE_EFFECTS__ */function Mi(t,e,n){let r,s;const i=typeof e=="function";typeof t=="string"?(r=t,s=i?n:e):(s=t,r=t.id);function o(l,c){const h=D0();return l=l||(h?tn(im,null):null),l&&wa(l),l=sm,l._s.has(r)||(i?am(r,e,s,l):zv(r,s,l)),l._s.get(r)}return o.$id=r,o}/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const ts=typeof document<"u";function lm(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Wv(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&lm(t.default)}const ke=Object.assign;function Il(t,e){const n={};for(const r in e){const s=e[r];n[r]=rn(s)?s.map(t):t(s)}return n}const li=()=>{},rn=Array.isArray,cm=/#/g,Kv=/&/g,Gv=/\//g,Qv=/=/g,Xv=/\?/g,um=/\+/g,Yv=/%5B/g,Jv=/%5D/g,hm=/%5E/g,Zv=/%60/g,dm=/%7B/g,eE=/%7C/g,fm=/%7D/g,tE=/%20/g;function Kc(t){return encodeURI(""+t).replace(eE,"|").replace(Yv,"[").replace(Jv,"]")}function nE(t){return Kc(t).replace(dm,"{").replace(fm,"}").replace(hm,"^")}function Zl(t){return Kc(t).replace(um,"%2B").replace(tE,"+").replace(cm,"%23").replace(Kv,"%26").replace(Zv,"`").replace(dm,"{").replace(fm,"}").replace(hm,"^")}function rE(t){return Zl(t).replace(Qv,"%3D")}function sE(t){return Kc(t).replace(cm,"%23").replace(Xv,"%3F")}function iE(t){return t==null?"":sE(t).replace(Gv,"%2F")}function wi(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const oE=/\/$/,aE=t=>t.replace(oE,"");function bl(t,e,n="/"){let r,s={},i="",o="";const l=e.indexOf("#");let c=e.indexOf("?");return l<c&&l>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,l>-1?l:e.length),s=t(i)),l>-1&&(r=r||e.slice(0,l),o=e.slice(l,e.length)),r=hE(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:wi(o)}}function lE(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function md(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function cE(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&_s(e.matched[r],n.matched[s])&&pm(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function _s(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function pm(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!uE(t[n],e[n]))return!1;return!0}function uE(t,e){return rn(t)?gd(t,e):rn(e)?gd(e,t):t===e}function gd(t,e){return rn(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function hE(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,l;for(o=0;o<r.length;o++)if(l=r[o],l!==".")if(l==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const Wn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Ti;(function(t){t.pop="pop",t.push="push"})(Ti||(Ti={}));var ci;(function(t){t.back="back",t.forward="forward",t.unknown=""})(ci||(ci={}));function dE(t){if(!t)if(ts){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),aE(t)}const fE=/^[^#]+#/;function pE(t,e){return t.replace(fE,"#")+e}function mE(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Ta=()=>({left:window.scrollX,top:window.scrollY});function gE(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=mE(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function _d(t,e){return(history.state?history.state.position-e:-1)+t}const ec=new Map;function _E(t,e){ec.set(t,e)}function yE(t){const e=ec.get(t);return ec.delete(t),e}let vE=()=>location.protocol+"//"+location.host;function mm(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let l=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(l);return c[0]!=="/"&&(c="/"+c),md(c,"")}return md(n,t)+r+s}function EE(t,e,n,r){let s=[],i=[],o=null;const l=({state:m})=>{const _=mm(t,location),I=n.value,S=e.value;let P=0;if(m){if(n.value=_,e.value=m,o&&o===I){o=null;return}P=S?m.position-S.position:0}else r(_);s.forEach(V=>{V(n.value,I,{delta:P,type:Ti.pop,direction:P?P>0?ci.forward:ci.back:ci.unknown})})};function c(){o=n.value}function h(m){s.push(m);const _=()=>{const I=s.indexOf(m);I>-1&&s.splice(I,1)};return i.push(_),_}function d(){const{history:m}=window;m.state&&m.replaceState(ke({},m.state,{scroll:Ta()}),"")}function p(){for(const m of i)m();i=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",d,{passive:!0}),{pauseListeners:c,listen:h,destroy:p}}function yd(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Ta():null}}function wE(t){const{history:e,location:n}=window,r={value:mm(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,h,d){const p=t.indexOf("#"),m=p>-1?(n.host&&document.querySelector("base")?t:t.slice(p))+c:vE()+t+c;try{e[d?"replaceState":"pushState"](h,"",m),s.value=h}catch(_){console.error(_),n[d?"replace":"assign"](m)}}function o(c,h){const d=ke({},e.state,yd(s.value.back,c,s.value.forward,!0),h,{position:s.value.position});i(c,d,!0),r.value=c}function l(c,h){const d=ke({},s.value,e.state,{forward:c,scroll:Ta()});i(d.current,d,!0);const p=ke({},yd(r.value,c,null),{position:d.position+1},h);i(c,p,!1),r.value=c}return{location:r,state:s,push:l,replace:o}}function TE(t){t=dE(t);const e=wE(t),n=EE(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=ke({location:"",base:t,go:r,createHref:pE.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function IE(t){return typeof t=="string"||t&&typeof t=="object"}function gm(t){return typeof t=="string"||typeof t=="symbol"}const _m=Symbol("");var vd;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(vd||(vd={}));function ys(t,e){return ke(new Error,{type:t,[_m]:!0},e)}function Tn(t,e){return t instanceof Error&&_m in t&&(e==null||!!(t.type&e))}const Ed="[^/]+?",bE={sensitive:!1,strict:!1,start:!0,end:!0},AE=/[.+*?^${}()[\]/\\]/g;function RE(t,e){const n=ke({},bE,e),r=[];let s=n.start?"^":"";const i=[];for(const h of t){const d=h.length?[]:[90];n.strict&&!h.length&&(s+="/");for(let p=0;p<h.length;p++){const m=h[p];let _=40+(n.sensitive?.25:0);if(m.type===0)p||(s+="/"),s+=m.value.replace(AE,"\\$&"),_+=40;else if(m.type===1){const{value:I,repeatable:S,optional:P,regexp:V}=m;i.push({name:I,repeatable:S,optional:P});const F=V||Ed;if(F!==Ed){_+=10;try{new RegExp(`(${F})`)}catch(q){throw new Error(`Invalid custom RegExp for param "${I}" (${F}): `+q.message)}}let j=S?`((?:${F})(?:/(?:${F}))*)`:`(${F})`;p||(j=P&&h.length<2?`(?:/${j})`:"/"+j),P&&(j+="?"),s+=j,_+=20,P&&(_+=-8),S&&(_+=-20),F===".*"&&(_+=-50)}d.push(_)}r.push(d)}if(n.strict&&n.end){const h=r.length-1;r[h][r[h].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function l(h){const d=h.match(o),p={};if(!d)return null;for(let m=1;m<d.length;m++){const _=d[m]||"",I=i[m-1];p[I.name]=_&&I.repeatable?_.split("/"):_}return p}function c(h){let d="",p=!1;for(const m of t){(!p||!d.endsWith("/"))&&(d+="/"),p=!1;for(const _ of m)if(_.type===0)d+=_.value;else if(_.type===1){const{value:I,repeatable:S,optional:P}=_,V=I in h?h[I]:"";if(rn(V)&&!S)throw new Error(`Provided param "${I}" is an array but it is not repeatable (* or + modifiers)`);const F=rn(V)?V.join("/"):V;if(!F)if(P)m.length<2&&(d.endsWith("/")?d=d.slice(0,-1):p=!0);else throw new Error(`Missing required param "${I}"`);d+=F}}return d||"/"}return{re:o,score:r,keys:i,parse:l,stringify:c}}function SE(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function ym(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=SE(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(wd(r))return 1;if(wd(s))return-1}return s.length-r.length}function wd(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const CE={type:0,value:""},PE=/[a-zA-Z0-9_]/;function kE(t){if(!t)return[[]];if(t==="/")return[[CE]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(_){throw new Error(`ERR (${n})/"${h}": ${_}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let l=0,c,h="",d="";function p(){h&&(n===0?i.push({type:0,value:h}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${h}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:h,regexp:d,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),h="")}function m(){h+=c}for(;l<t.length;){if(c=t[l++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(h&&p(),o()):c===":"?(p(),n=1):m();break;case 4:m(),n=r;break;case 1:c==="("?n=2:PE.test(c)?m():(p(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--);break;case 2:c===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+c:n=3:d+=c;break;case 3:p(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--,d="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${h}"`),p(),o(),s}function DE(t,e,n){const r=RE(kE(t.path),n),s=ke(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function NE(t,e){const n=[],r=new Map;e=Ad({strict:!1,end:!0,sensitive:!1},e);function s(p){return r.get(p)}function i(p,m,_){const I=!_,S=Id(p);S.aliasOf=_&&_.record;const P=Ad(e,p),V=[S];if("alias"in p){const q=typeof p.alias=="string"?[p.alias]:p.alias;for(const oe of q)V.push(Id(ke({},S,{components:_?_.record.components:S.components,path:oe,aliasOf:_?_.record:S})))}let F,j;for(const q of V){const{path:oe}=q;if(m&&oe[0]!=="/"){const ye=m.record.path,A=ye[ye.length-1]==="/"?"":"/";q.path=m.record.path+(oe&&A+oe)}if(F=DE(q,m,P),_?_.alias.push(F):(j=j||F,j!==F&&j.alias.push(F),I&&p.name&&!bd(F)&&o(p.name)),vm(F)&&c(F),S.children){const ye=S.children;for(let A=0;A<ye.length;A++)i(ye[A],F,_&&_.children[A])}_=_||F}return j?()=>{o(j)}:li}function o(p){if(gm(p)){const m=r.get(p);m&&(r.delete(p),n.splice(n.indexOf(m),1),m.children.forEach(o),m.alias.forEach(o))}else{const m=n.indexOf(p);m>-1&&(n.splice(m,1),p.record.name&&r.delete(p.record.name),p.children.forEach(o),p.alias.forEach(o))}}function l(){return n}function c(p){const m=ME(p,n);n.splice(m,0,p),p.record.name&&!bd(p)&&r.set(p.record.name,p)}function h(p,m){let _,I={},S,P;if("name"in p&&p.name){if(_=r.get(p.name),!_)throw ys(1,{location:p});P=_.record.name,I=ke(Td(m.params,_.keys.filter(j=>!j.optional).concat(_.parent?_.parent.keys.filter(j=>j.optional):[]).map(j=>j.name)),p.params&&Td(p.params,_.keys.map(j=>j.name))),S=_.stringify(I)}else if(p.path!=null)S=p.path,_=n.find(j=>j.re.test(S)),_&&(I=_.parse(S),P=_.record.name);else{if(_=m.name?r.get(m.name):n.find(j=>j.re.test(m.path)),!_)throw ys(1,{location:p,currentLocation:m});P=_.record.name,I=ke({},m.params,p.params),S=_.stringify(I)}const V=[];let F=_;for(;F;)V.unshift(F.record),F=F.parent;return{name:P,path:S,params:I,matched:V,meta:OE(V)}}t.forEach(p=>i(p));function d(){n.length=0,r.clear()}return{addRoute:i,resolve:h,removeRoute:o,clearRoutes:d,getRoutes:l,getRecordMatcher:s}}function Td(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Id(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:VE(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function VE(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function bd(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function OE(t){return t.reduce((e,n)=>ke(e,n.meta),{})}function Ad(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function ME(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;ym(t,e[i])<0?r=i:n=i+1}const s=xE(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function xE(t){let e=t;for(;e=e.parent;)if(vm(e)&&ym(t,e)===0)return e}function vm({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function LE(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(um," "),o=i.indexOf("="),l=wi(o<0?i:i.slice(0,o)),c=o<0?null:wi(i.slice(o+1));if(l in e){let h=e[l];rn(h)||(h=e[l]=[h]),h.push(c)}else e[l]=c}return e}function Rd(t){let e="";for(let n in t){const r=t[n];if(n=rE(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(rn(r)?r.map(i=>i&&Zl(i)):[r&&Zl(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function FE(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=rn(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const UE=Symbol(""),Sd=Symbol(""),Ia=Symbol(""),Em=Symbol(""),tc=Symbol("");function Xs(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Yn(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((l,c)=>{const h=m=>{m===!1?c(ys(4,{from:n,to:e})):m instanceof Error?c(m):IE(m)?c(ys(2,{from:e,to:m})):(o&&r.enterCallbacks[s]===o&&typeof m=="function"&&o.push(m),l())},d=i(()=>t.call(r&&r.instances[s],e,n,h));let p=Promise.resolve(d);t.length<3&&(p=p.then(h)),p.catch(m=>c(m))})}function Al(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const l in o.components){let c=o.components[l];if(!(e!=="beforeRouteEnter"&&!o.instances[l]))if(lm(c)){const d=(c.__vccOpts||c)[e];d&&i.push(Yn(d,n,r,o,l,s))}else{let h=c();i.push(()=>h.then(d=>{if(!d)throw new Error(`Couldn't resolve component "${l}" at "${o.path}"`);const p=Wv(d)?d.default:d;o.mods[l]=d,o.components[l]=p;const _=(p.__vccOpts||p)[e];return _&&Yn(_,n,r,o,l,s)()}))}}return i}function Cd(t){const e=tn(Ia),n=tn(Em),r=qe(()=>{const c=ls(t.to);return e.resolve(c)}),s=qe(()=>{const{matched:c}=r.value,{length:h}=c,d=c[h-1],p=n.matched;if(!d||!p.length)return-1;const m=p.findIndex(_s.bind(null,d));if(m>-1)return m;const _=Pd(c[h-2]);return h>1&&Pd(d)===_&&p[p.length-1].path!==_?p.findIndex(_s.bind(null,c[h-2])):m}),i=qe(()=>s.value>-1&&HE(n.params,r.value.params)),o=qe(()=>s.value>-1&&s.value===n.matched.length-1&&pm(n.params,r.value.params));function l(c={}){if(qE(c)){const h=e[ls(t.replace)?"replace":"push"](ls(t.to)).catch(li);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>h),h}return Promise.resolve()}return{route:r,href:qe(()=>r.value.href),isActive:i,isExactActive:o,navigate:l}}function $E(t){return t.length===1?t[0]:t}const BE=Le({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Cd,setup(t,{slots:e}){const n=Ni(Cd(t)),{options:r}=tn(Ia),s=qe(()=>({[kd(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[kd(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&$E(e.default(n));return t.custom?i:nm("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),jE=BE;function qE(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function HE(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!rn(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Pd(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const kd=(t,e,n)=>t??e??n,zE=Le({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=tn(tc),s=qe(()=>t.route||r.value),i=tn(Sd,0),o=qe(()=>{let h=ls(i);const{matched:d}=s.value;let p;for(;(p=d[h])&&!p.components;)h++;return h}),l=qe(()=>s.value.matched[o.value]);Ao(Sd,qe(()=>o.value+1)),Ao(UE,l),Ao(tc,s);const c=le();return sr(()=>[c.value,l.value,t.name],([h,d,p],[m,_,I])=>{d&&(d.instances[p]=h,_&&_!==d&&h&&h===m&&(d.leaveGuards.size||(d.leaveGuards=_.leaveGuards),d.updateGuards.size||(d.updateGuards=_.updateGuards))),h&&d&&(!_||!_s(d,_)||!m)&&(d.enterCallbacks[p]||[]).forEach(S=>S(h))},{flush:"post"}),()=>{const h=s.value,d=t.name,p=l.value,m=p&&p.components[d];if(!m)return Dd(n.default,{Component:m,route:h});const _=p.props[d],I=_?_===!0?h.params:typeof _=="function"?_(h):_:null,P=nm(m,ke({},I,e,{onVnodeUnmounted:V=>{V.component.isUnmounted&&(p.instances[d]=null)},ref:c}));return Dd(n.default,{Component:P,route:h})||P}}});function Dd(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const WE=zE;function KE(t){const e=NE(t.routes,t),n=t.parseQuery||LE,r=t.stringifyQuery||Rd,s=t.history,i=Xs(),o=Xs(),l=Xs(),c=Xy(Wn);let h=Wn;ts&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=Il.bind(null,M=>""+M),p=Il.bind(null,iE),m=Il.bind(null,wi);function _(M,J){let Q,te;return gm(M)?(Q=e.getRecordMatcher(M),te=J):te=M,e.addRoute(te,Q)}function I(M){const J=e.getRecordMatcher(M);J&&e.removeRoute(J)}function S(){return e.getRoutes().map(M=>M.record)}function P(M){return!!e.getRecordMatcher(M)}function V(M,J){if(J=ke({},J||c.value),typeof M=="string"){const w=bl(n,M,J.path),D=e.resolve({path:w.path},J),U=s.createHref(w.fullPath);return ke(w,D,{params:m(D.params),hash:wi(w.hash),redirectedFrom:void 0,href:U})}let Q;if(M.path!=null)Q=ke({},M,{path:bl(n,M.path,J.path).path});else{const w=ke({},M.params);for(const D in w)w[D]==null&&delete w[D];Q=ke({},M,{params:p(w)}),J.params=p(J.params)}const te=e.resolve(Q,J),be=M.hash||"";te.params=d(m(te.params));const Oe=lE(r,ke({},M,{hash:nE(be),path:te.path})),v=s.createHref(Oe);return ke({fullPath:Oe,hash:be,query:r===Rd?FE(M.query):M.query||{}},te,{redirectedFrom:void 0,href:v})}function F(M){return typeof M=="string"?bl(n,M,c.value.path):ke({},M)}function j(M,J){if(h!==M)return ys(8,{from:J,to:M})}function q(M){return A(M)}function oe(M){return q(ke(F(M),{replace:!0}))}function ye(M){const J=M.matched[M.matched.length-1];if(J&&J.redirect){const{redirect:Q}=J;let te=typeof Q=="function"?Q(M):Q;return typeof te=="string"&&(te=te.includes("?")||te.includes("#")?te=F(te):{path:te},te.params={}),ke({query:M.query,hash:M.hash,params:te.path!=null?{}:M.params},te)}}function A(M,J){const Q=h=V(M),te=c.value,be=M.state,Oe=M.force,v=M.replace===!0,w=ye(Q);if(w)return A(ke(F(w),{state:typeof w=="object"?ke({},be,w.state):be,force:Oe,replace:v}),J||Q);const D=Q;D.redirectedFrom=J;let U;return!Oe&&cE(r,te,Q)&&(U=ys(16,{to:D,from:te}),Kt(te,te,!0,!1)),(U?Promise.resolve(U):b(D,te)).catch(O=>Tn(O)?Tn(O,2)?O:Jt(O):ve(O,D,te)).then(O=>{if(O){if(Tn(O,2))return A(ke({replace:v},F(O.to),{state:typeof O.to=="object"?ke({},be,O.to.state):be,force:Oe}),J||D)}else O=C(D,te,!0,v,be);return R(D,te,O),O})}function y(M,J){const Q=j(M,J);return Q?Promise.reject(Q):Promise.resolve()}function E(M){const J=Bn.values().next().value;return J&&typeof J.runWithContext=="function"?J.runWithContext(M):M()}function b(M,J){let Q;const[te,be,Oe]=GE(M,J);Q=Al(te.reverse(),"beforeRouteLeave",M,J);for(const w of te)w.leaveGuards.forEach(D=>{Q.push(Yn(D,M,J))});const v=y.bind(null,M,J);return Q.push(v),xt(Q).then(()=>{Q=[];for(const w of i.list())Q.push(Yn(w,M,J));return Q.push(v),xt(Q)}).then(()=>{Q=Al(be,"beforeRouteUpdate",M,J);for(const w of be)w.updateGuards.forEach(D=>{Q.push(Yn(D,M,J))});return Q.push(v),xt(Q)}).then(()=>{Q=[];for(const w of Oe)if(w.beforeEnter)if(rn(w.beforeEnter))for(const D of w.beforeEnter)Q.push(Yn(D,M,J));else Q.push(Yn(w.beforeEnter,M,J));return Q.push(v),xt(Q)}).then(()=>(M.matched.forEach(w=>w.enterCallbacks={}),Q=Al(Oe,"beforeRouteEnter",M,J,E),Q.push(v),xt(Q))).then(()=>{Q=[];for(const w of o.list())Q.push(Yn(w,M,J));return Q.push(v),xt(Q)}).catch(w=>Tn(w,8)?w:Promise.reject(w))}function R(M,J,Q){l.list().forEach(te=>E(()=>te(M,J,Q)))}function C(M,J,Q,te,be){const Oe=j(M,J);if(Oe)return Oe;const v=J===Wn,w=ts?history.state:{};Q&&(te||v?s.replace(M.fullPath,ke({scroll:v&&w&&w.scroll},be)):s.push(M.fullPath,be)),c.value=M,Kt(M,J,Q,v),Jt()}let T;function ht(){T||(T=s.listen((M,J,Q)=>{if(!on.listening)return;const te=V(M),be=ye(te);if(be){A(ke(be,{replace:!0,force:!0}),te).catch(li);return}h=te;const Oe=c.value;ts&&_E(_d(Oe.fullPath,Q.delta),Ta()),b(te,Oe).catch(v=>Tn(v,12)?v:Tn(v,2)?(A(ke(F(v.to),{force:!0}),te).then(w=>{Tn(w,20)&&!Q.delta&&Q.type===Ti.pop&&s.go(-1,!1)}).catch(li),Promise.reject()):(Q.delta&&s.go(-Q.delta,!1),ve(v,te,Oe))).then(v=>{v=v||C(te,Oe,!1),v&&(Q.delta&&!Tn(v,8)?s.go(-Q.delta,!1):Q.type===Ti.pop&&Tn(v,20)&&s.go(-1,!1)),R(te,Oe,v)}).catch(li)}))}let Mt=Xs(),Fe=Xs(),ue;function ve(M,J,Q){Jt(M);const te=Fe.list();return te.length?te.forEach(be=>be(M,J,Q)):console.error(M),Promise.reject(M)}function $t(){return ue&&c.value!==Wn?Promise.resolve():new Promise((M,J)=>{Mt.add([M,J])})}function Jt(M){return ue||(ue=!M,ht(),Mt.list().forEach(([J,Q])=>M?Q(M):J()),Mt.reset()),M}function Kt(M,J,Q,te){const{scrollBehavior:be}=t;if(!ts||!be)return Promise.resolve();const Oe=!Q&&yE(_d(M.fullPath,0))||(te||!Q)&&history.state&&history.state.scroll||null;return Uc().then(()=>be(M,J,Oe)).then(v=>v&&gE(v)).catch(v=>ve(v,M,J))}const We=M=>s.go(M);let Ke;const Bn=new Set,on={currentRoute:c,listening:!0,addRoute:_,removeRoute:I,clearRoutes:e.clearRoutes,hasRoute:P,getRoutes:S,resolve:V,options:t,push:q,replace:oe,go:We,back:()=>We(-1),forward:()=>We(1),beforeEach:i.add,beforeResolve:o.add,afterEach:l.add,onError:Fe.add,isReady:$t,install(M){const J=this;M.component("RouterLink",jE),M.component("RouterView",WE),M.config.globalProperties.$router=J,Object.defineProperty(M.config.globalProperties,"$route",{enumerable:!0,get:()=>ls(c)}),ts&&!Ke&&c.value===Wn&&(Ke=!0,q(s.location).catch(be=>{}));const Q={};for(const be in Wn)Object.defineProperty(Q,be,{get:()=>c.value[be],enumerable:!0});M.provide(Ia,J),M.provide(Em,Ep(Q)),M.provide(tc,c);const te=M.unmount;Bn.add(M),M.unmount=function(){Bn.delete(M),Bn.size<1&&(h=Wn,T&&T(),T=null,c.value=Wn,Ke=!1,ue=!1),te()}}};function xt(M){return M.reduce((J,Q)=>J.then(()=>E(Q)),Promise.resolve())}return on}function GE(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const l=e.matched[o];l&&(t.matched.find(h=>_s(h,l))?r.push(l):n.push(l));const c=t.matched[o];c&&(e.matched.find(h=>_s(h,c))||s.push(c))}return[n,r,s]}function Gc(){return tn(Ia)}const QE=Le({props:{color:{type:String,default:"white"},text:{type:String,default:""}},setup(t){return{iconHomeStyle:qe(()=>({"--icon-color":t.color}))}}}),He=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},XE={key:0,class:"text"};function YE(t,e,n,r,s,i){return G(),se("div",{class:"icon-home",style:yn(t.iconHomeStyle)},[e[0]||(e[0]=Y("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},[Y("path",{d:"M 12 2 A 1 1 0 0 0 11.289062 2.296875 L 1.203125 11.097656 A 0.5 0.5 0 0 0 1 11.5 A 0.5 0.5 0 0 0 1.5 12 L 4 12 L 4 20 C 4 20.552 4.448 21 5 21 L 9 21 C 9.552 21 10 20.552 10 20 L 10 14 L 14 14 L 14 20 C 14 20.552 14.448 21 15 21 L 19 21 C 19.552 21 20 20.552 20 20 L 20 12 L 22.5 12 A 0.5 0.5 0 0 0 23 11.5 A 0.5 0.5 0 0 0 22.796875 11.097656 L 12.716797 2.3027344 A 1 1 0 0 0 12.710938 2.296875 A 1 1 0 0 0 12 2 z"})],-1)),t.$props.text&&t.$props.text.length>0?(G(),se("div",XE,Ve(t.$props.text),1)):$e("",!0)],4)}const JE=He(QE,[["render",YE],["__scopeId","data-v-c1df092f"]]),ZE=Le({props:{color:{type:String,default:"white"},text:{type:String,default:""},fontSize:{type:String,default:"11px"}},setup(t){return{iconLightSwitchStyle:qe(()=>({"--icon-color":t.color,fontSize:t.fontSize}))}}}),ew={fill:"#000000",viewBox:"0 0 64 64","xml:space":"preserve",style:{"fill-rule":"evenodd","clip-rule":"evenodd","stroke-linejoin":"round","stroke-miterlimit":"2"},xmlns:"http://www.w3.org/2000/svg"},tw={key:0,class:"text"};function nw(t,e,n,r,s,i){return G(),se("div",{class:"icon-light-switch",style:yn(t.iconLightSwitchStyle)},[(G(),se("svg",ew,e[0]||(e[0]=[Zp('<g stroke-width="0" data-v-be2209a6></g><g stroke-linecap="round" stroke-linejoin="round" data-v-be2209a6></g><g data-v-be2209a6><rect x="0" y="-320" width="1280" height="800" style="fill:none;" data-v-be2209a6></rect><g transform="matrix(1.3258707,0,0,1.3751367,-10.338119,-12.63741)" data-v-be2209a6><path d="m 25.022,17.099 c 2.715,-0.012 12.015,0.058 13.952,0 22.08,-0.662 22.961,30.643 0,30.023 -3.488,0.015 -12.792,-0.064 -13.952,0 C 14.663,47.694 7.982,40.3 8.025,31.85 8.067,23.399 15.555,16.13 25.022,17.099 Z M 32.904,32.11 C 33.047,26.747 28.24,22.014 22.889,22.095 c -7.31,0.111 -10.482,6.7 -10.016,10.947 0.625,5.691 5.193,9.06 10.016,9.084 5.536,0.026 9.862,-4.308 10.015,-10.016 z" style="fill-rule:nonzero;" data-v-be2209a6></path></g></g>',3)]))),t.$props.text&&t.$props.text.length>0?(G(),se("div",tw,Ve(t.$props.text),1)):$e("",!0)],4)}const wm=He(ZE,[["render",nw],["__scopeId","data-v-be2209a6"]]),rw=Le({props:{color:{type:String,default:"white"},strokeColor:{type:String,default:"black"},text:{type:String,default:""},fontSize:{type:String,default:"11px"}},setup(t){return{iconScheduleStyle:qe(()=>({"--icon-color":t.color,"--icon-stroke-color":t.strokeColor,fontSize:t.fontSize}))}}}),sw={key:0,class:"text"};function iw(t,e,n,r,s,i){return G(),se("div",{class:"icon-schedule",style:yn(t.iconScheduleStyle)},[e[0]||(e[0]=Zp('<svg viewBox="0 0 24 24" stroke-width="3" stroke="#000000" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-604fa35c><path d="M 14.020182,21.685362 H 1.8335071 A 1.095136,1.0848345 0 0 1 0.74275167,20.622224 V 3.3169452 A 1.0907555,1.0804951 0 0 1 1.8335071,2.2364501 H 19.285596 a 1.0907555,1.0804951 0 0 1 1.090755,1.0804951 v 9.7201178" style="stroke-width:1.30797;" data-v-604fa35c></path><line x1="0.74275166" y1="7.0097213" x2="20.376347" y2="7.0097213" style="stroke-width:1.30797;" data-v-604fa35c></line><line x1="5.1714816" y1="2.2364504" x2="5.1714816" y2="0.066781186" style="stroke-width:1.30797;" data-v-604fa35c></line><line x1="15.667263" y1="2.2364504" x2="15.667263" y2="0.066781186" style="stroke-width:1.30797;" data-v-604fa35c></line><ellipse cx="17.769928" cy="17.775614" rx="5.4450164" ry="5.3937974" style="stroke-width:1.30797;" data-v-604fa35c></ellipse><polyline points="45.22 36.7 45.22 45.82 49.57 49.16" transform="matrix(0.43805442,0,0,0.43393378,-2.0388941,-1.9423323)" data-v-604fa35c></polyline></svg>',1)),t.$props.text&&t.$props.text.length>0?(G(),se("div",sw,Ve(t.$props.text),1)):$e("",!0)],4)}const Tm=He(rw,[["render",iw],["__scopeId","data-v-604fa35c"]]),ow=Le({name:"task-bar",components:{IconSchedule:Tm,IconLightSwitch:wm,IconHome:JE},setup(){const t=Gc();$r(()=>{e("relays")});function e(n){t.push({name:n})}return{}}}),aw={class:"task-bar"};function lw(t,e,n,r,s,i){const o=Ie("icon-home"),l=Ie("router-link"),c=Ie("icon-light-switch"),h=Ie("icon-schedule");return G(),se("div",aw,[_e(l,{to:"/home",class:"task"},{default:hn(()=>[_e(o,{text:"Home"})]),_:1}),_e(l,{to:"/relays",class:"task"},{default:hn(()=>[_e(c,{text:"Relays"})]),_:1}),_e(l,{to:"/schedules",class:"task"},{default:hn(()=>[_e(h,{text:"Schedules"})]),_:1})])}const cw=He(ow,[["render",lw],["__scopeId","data-v-a291f81d"]]),uw=Le({props:{spinnerSize:{type:String,default:"30px"},withText:{type:Boolean,default:!1}},setup(){return{}}}),hw={class:"spinner"},dw={key:0,class:"text"};function fw(t,e,n,r,s,i){return G(),se("div",hw,[Y("div",{class:"spinner-inner",style:yn({"--spinnerSize":t.spinnerSize})},null,4),t.withText?(G(),se("div",dw,"Laden...")):$e("",!0)])}const ba=He(uw,[["render",fw],["__scopeId","data-v-8cb8f775"]]),pw=Le({components:{Spinner:ba},props:{text:{type:String,required:!0},isLoading:{type:Boolean,required:!1,default:!1}},emits:["onButtonClicked"],setup(t,e){function n(){e.emit("onButtonClicked")}return{onClicked:n}}}),mw={key:1,class:"button-content"};function gw(t,e,n,r,s,i){const o=Ie("spinner");return G(),se("div",{class:qt(["button-default",{"is-loading":t.isLoading}]),tabindex:"0",onClick:e[0]||(e[0]=(...l)=>t.onClicked&&t.onClicked(...l)),onKeydown:e[1]||(e[1]=Vv((...l)=>t.onClicked&&t.onClicked(...l),["enter"]))},[t.isLoading?(G(),Ye(o,{key:0,spinnerSize:"20px"})):(G(),se("div",mw,[bo(t.$slots,"icon",{},void 0),Dn(" "+Ve(t.text),1)]))],34)}const xi=He(pw,[["render",gw],["__scopeId","data-v-5dad5cd0"]]),Im=Mi("user",()=>{const t=le(null);return{user:t,setUser:n=>{t.value=n}}});var Nd={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bm=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},_w=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],l=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Am={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,l=o?t[s+1]:0,c=s+2<t.length,h=c?t[s+2]:0,d=i>>2,p=(i&3)<<4|l>>4;let m=(l&15)<<2|h>>6,_=h&63;c||(_=64,o||(m=64)),r.push(n[d],n[p],n[m],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(bm(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):_w(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const h=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||h==null||p==null)throw new yw;const m=i<<2|l>>4;if(r.push(m),h!==64){const _=l<<4&240|h>>2;if(r.push(_),p!==64){const I=h<<6&192|p;r.push(I)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class yw extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const vw=function(t){const e=bm(t);return Am.encodeByteArray(e,!0)},Wo=function(t){return vw(t).replace(/\./g,"")},Rm=function(t){try{return Am.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Ew(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const ww=()=>Ew().__FIREBASE_DEFAULTS__,Tw=()=>{if(typeof process>"u"||typeof Nd>"u")return;const t=Nd.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Iw=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Rm(t[1]);return e&&JSON.parse(e)},Aa=()=>{try{return ww()||Tw()||Iw()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Sm=t=>{var e,n;return(n=(e=Aa())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},bw=t=>{const e=Sm(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Cm=()=>{var t;return(t=Aa())===null||t===void 0?void 0:t.config},Pm=t=>{var e;return(e=Aa())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aw{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Rw(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Wo(JSON.stringify(n)),Wo(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ct(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Sw(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ct())}function Cw(){var t;const e=(t=Aa())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Pw(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function kw(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Dw(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Nw(){const t=Ct();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Vw(){return!Cw()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Ow(){try{return typeof indexedDB=="object"}catch{return!1}}function Mw(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xw="FirebaseError";class $n extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=xw,Object.setPrototypeOf(this,$n.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Li.prototype.create)}}class Li{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Lw(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new $n(s,l,r)}}function Lw(t,e){return t.replace(Fw,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Fw=/\{\$([^}]+)}/g;function Uw(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ko(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Vd(i)&&Vd(o)){if(!Ko(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Vd(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fi(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function $w(t,e){const n=new Bw(t,e);return n.subscribe.bind(n)}class Bw{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");jw(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Rl),s.error===void 0&&(s.error=Rl),s.complete===void 0&&(s.complete=Rl);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function jw(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Rl(){}/**
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
 */function ut(t){return t&&t._delegate?t._delegate:t}class Mr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qw{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Aw;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(zw(e))try{this.getOrInitializeService({instanceIdentifier:Sr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Sr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Sr){return this.instances.has(e)}getOptions(e=Sr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Hw(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Sr){return this.component?this.component.multipleInstances?e:Sr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Hw(t){return t===Sr?void 0:t}function zw(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ww{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new qw(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ee;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Ee||(Ee={}));const Kw={debug:Ee.DEBUG,verbose:Ee.VERBOSE,info:Ee.INFO,warn:Ee.WARN,error:Ee.ERROR,silent:Ee.SILENT},Gw=Ee.INFO,Qw={[Ee.DEBUG]:"log",[Ee.VERBOSE]:"log",[Ee.INFO]:"info",[Ee.WARN]:"warn",[Ee.ERROR]:"error"},Xw=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=Qw[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Qc{constructor(e){this.name=e,this._logLevel=Gw,this._logHandler=Xw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ee))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Kw[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ee.DEBUG,...e),this._logHandler(this,Ee.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ee.VERBOSE,...e),this._logHandler(this,Ee.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ee.INFO,...e),this._logHandler(this,Ee.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ee.WARN,...e),this._logHandler(this,Ee.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ee.ERROR,...e),this._logHandler(this,Ee.ERROR,...e)}}const Yw=(t,e)=>e.some(n=>t instanceof n);let Od,Md;function Jw(){return Od||(Od=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Zw(){return Md||(Md=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const km=new WeakMap,nc=new WeakMap,Dm=new WeakMap,Sl=new WeakMap,Xc=new WeakMap;function eT(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(ir(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&km.set(n,t)}).catch(()=>{}),Xc.set(e,t),e}function tT(t){if(nc.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});nc.set(t,e)}let rc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return nc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Dm.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ir(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function nT(t){rc=t(rc)}function rT(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Cl(this),e,...n);return Dm.set(r,e.sort?e.sort():[e]),ir(r)}:Zw().includes(t)?function(...e){return t.apply(Cl(this),e),ir(km.get(this))}:function(...e){return ir(t.apply(Cl(this),e))}}function sT(t){return typeof t=="function"?rT(t):(t instanceof IDBTransaction&&tT(t),Yw(t,Jw())?new Proxy(t,rc):t)}function ir(t){if(t instanceof IDBRequest)return eT(t);if(Sl.has(t))return Sl.get(t);const e=sT(t);return e!==t&&(Sl.set(t,e),Xc.set(e,t)),e}const Cl=t=>Xc.get(t);function iT(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),l=ir(o);return r&&o.addEventListener("upgradeneeded",c=>{r(ir(o.result),c.oldVersion,c.newVersion,ir(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const oT=["get","getKey","getAll","getAllKeys","count"],aT=["put","add","delete","clear"],Pl=new Map;function xd(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Pl.get(e))return Pl.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=aT.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||oT.includes(n)))return;const i=async function(o,...l){const c=this.transaction(o,s?"readwrite":"readonly");let h=c.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[n](...l),s&&c.done]))[0]};return Pl.set(e,i),i}nT(t=>({...t,get:(e,n,r)=>xd(e,n)||t.get(e,n,r),has:(e,n)=>!!xd(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lT{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(cT(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function cT(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const sc="@firebase/app",Ld="0.10.17";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vn=new Qc("@firebase/app"),uT="@firebase/app-compat",hT="@firebase/analytics-compat",dT="@firebase/analytics",fT="@firebase/app-check-compat",pT="@firebase/app-check",mT="@firebase/auth",gT="@firebase/auth-compat",_T="@firebase/database",yT="@firebase/data-connect",vT="@firebase/database-compat",ET="@firebase/functions",wT="@firebase/functions-compat",TT="@firebase/installations",IT="@firebase/installations-compat",bT="@firebase/messaging",AT="@firebase/messaging-compat",RT="@firebase/performance",ST="@firebase/performance-compat",CT="@firebase/remote-config",PT="@firebase/remote-config-compat",kT="@firebase/storage",DT="@firebase/storage-compat",NT="@firebase/firestore",VT="@firebase/vertexai",OT="@firebase/firestore-compat",MT="firebase",xT="11.1.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ic="[DEFAULT]",LT={[sc]:"fire-core",[uT]:"fire-core-compat",[dT]:"fire-analytics",[hT]:"fire-analytics-compat",[pT]:"fire-app-check",[fT]:"fire-app-check-compat",[mT]:"fire-auth",[gT]:"fire-auth-compat",[_T]:"fire-rtdb",[yT]:"fire-data-connect",[vT]:"fire-rtdb-compat",[ET]:"fire-fn",[wT]:"fire-fn-compat",[TT]:"fire-iid",[IT]:"fire-iid-compat",[bT]:"fire-fcm",[AT]:"fire-fcm-compat",[RT]:"fire-perf",[ST]:"fire-perf-compat",[CT]:"fire-rc",[PT]:"fire-rc-compat",[kT]:"fire-gcs",[DT]:"fire-gcs-compat",[NT]:"fire-fst",[OT]:"fire-fst-compat",[VT]:"fire-vertex","fire-js":"fire-js",[MT]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Go=new Map,FT=new Map,oc=new Map;function Fd(t,e){try{t.container.addComponent(e)}catch(n){Vn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function vs(t){const e=t.name;if(oc.has(e))return Vn.debug(`There were multiple attempts to register component ${e}.`),!1;oc.set(e,t);for(const n of Go.values())Fd(n,t);for(const n of FT.values())Fd(n,t);return!0}function Yc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Sn(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UT={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},or=new Li("app","Firebase",UT);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $T{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Mr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw or.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cs=xT;function Nm(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:ic,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw or.create("bad-app-name",{appName:String(s)});if(n||(n=Cm()),!n)throw or.create("no-options");const i=Go.get(s);if(i){if(Ko(n,i.options)&&Ko(r,i.config))return i;throw or.create("duplicate-app",{appName:s})}const o=new Ww(s);for(const c of oc.values())o.addComponent(c);const l=new $T(n,r,o);return Go.set(s,l),l}function Vm(t=ic){const e=Go.get(t);if(!e&&t===ic&&Cm())return Nm();if(!e)throw or.create("no-app",{appName:t});return e}function ar(t,e,n){var r;let s=(r=LT[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Vn.warn(l.join(" "));return}vs(new Mr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const BT="firebase-heartbeat-database",jT=1,Ii="firebase-heartbeat-store";let kl=null;function Om(){return kl||(kl=iT(BT,jT,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Ii)}catch(n){console.warn(n)}}}}).catch(t=>{throw or.create("idb-open",{originalErrorMessage:t.message})})),kl}async function qT(t){try{const n=(await Om()).transaction(Ii),r=await n.objectStore(Ii).get(Mm(t));return await n.done,r}catch(e){if(e instanceof $n)Vn.warn(e.message);else{const n=or.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Vn.warn(n.message)}}}async function Ud(t,e){try{const r=(await Om()).transaction(Ii,"readwrite");await r.objectStore(Ii).put(e,Mm(t)),await r.done}catch(n){if(n instanceof $n)Vn.warn(n.message);else{const r=or.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Vn.warn(r.message)}}}function Mm(t){return`${t.name}!${t.options.appId}`}/**
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
 */const HT=1024,zT=30*24*60*60*1e3;class WT{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new GT(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=$d();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=zT}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Vn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=$d(),{heartbeatsToSend:r,unsentEntries:s}=KT(this._heartbeatsCache.heartbeats),i=Wo(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return Vn.warn(n),""}}}function $d(){return new Date().toISOString().substring(0,10)}function KT(t,e=HT){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Bd(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Bd(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class GT{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ow()?Mw().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await qT(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ud(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ud(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Bd(t){return Wo(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QT(t){vs(new Mr("platform-logger",e=>new lT(e),"PRIVATE")),vs(new Mr("heartbeat",e=>new WT(e),"PRIVATE")),ar(sc,Ld,t),ar(sc,Ld,"esm2017"),ar("fire-js","")}QT("");function Jc(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function xm(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const XT=xm,Lm=new Li("auth","Firebase",xm());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qo=new Qc("@firebase/auth");function YT(t,...e){Qo.logLevel<=Ee.WARN&&Qo.warn(`Auth (${Cs}): ${t}`,...e)}function Po(t,...e){Qo.logLevel<=Ee.ERROR&&Qo.error(`Auth (${Cs}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gn(t,...e){throw eu(t,...e)}function nn(t,...e){return eu(t,...e)}function Zc(t,e,n){const r=Object.assign(Object.assign({},XT()),{[e]:n});return new Li("auth","Firebase",r).create(e,{appName:t.name})}function Nr(t){return Zc(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function JT(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&gn(t,"argument-error"),Zc(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function eu(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Lm.create(t,...e)}function de(t,e,...n){if(!t)throw eu(e,...n)}function Cn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Po(e),new Error(e)}function On(t,e){t||Cn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ac(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function ZT(){return jd()==="http:"||jd()==="https:"}function jd(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(ZT()||kw()||"connection"in navigator)?navigator.onLine:!0}function tI(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui{constructor(e,n){this.shortDelay=e,this.longDelay=n,On(n>e,"Short delay should be less than long delay!"),this.isMobile=Sw()||Dw()}get(){return eI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tu(t,e){On(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fm{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Cn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Cn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Cn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rI=new Ui(3e4,6e4);function nu(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ps(t,e,n,r,s={}){return Um(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=Fi(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const h=Object.assign({method:e,headers:c},i);return Pw()||(h.referrerPolicy="no-referrer"),Fm.fetch()($m(t,t.config.apiHost,n,l),h)})}async function Um(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},nI),e);try{const s=new iI(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw _o(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[c,h]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw _o(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw _o(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw _o(t,"user-disabled",o);const d=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Zc(t,d,h);gn(t,d)}}catch(s){if(s instanceof $n)throw s;gn(t,"network-request-failed",{message:String(s)})}}async function sI(t,e,n,r,s={}){const i=await Ps(t,e,n,r,s);return"mfaPendingCredential"in i&&gn(t,"multi-factor-auth-required",{_serverResponse:i}),i}function $m(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?tu(t.config,s):`${t.config.apiScheme}://${s}`}class iI{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(nn(this.auth,"network-request-failed")),rI.get())})}}function _o(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=nn(t,e,r);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oI(t,e){return Ps(t,"POST","/v1/accounts:delete",e)}async function Bm(t,e){return Ps(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ui(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function aI(t,e=!1){const n=ut(t),r=await n.getIdToken(e),s=ru(r);de(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:ui(Dl(s.auth_time)),issuedAtTime:ui(Dl(s.iat)),expirationTime:ui(Dl(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Dl(t){return Number(t)*1e3}function ru(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Po("JWT malformed, contained fewer than 3 sections"),null;try{const s=Rm(n);return s?JSON.parse(s):(Po("Failed to decode base64 JWT payload"),null)}catch(s){return Po("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function qd(t){const e=ru(t);return de(e,"internal-error"),de(typeof e.exp<"u","internal-error"),de(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bi(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof $n&&lI(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function lI({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cI{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ui(this.lastLoginAt),this.creationTime=ui(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xo(t){var e;const n=t.auth,r=await t.getIdToken(),s=await bi(t,Bm(n,{idToken:r}));de(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?jm(i.providerUserInfo):[],l=hI(t.providerData,o),c=t.isAnonymous,h=!(t.email&&i.passwordHash)&&!(l!=null&&l.length),d=c?h:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new lc(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(t,p)}async function uI(t){const e=ut(t);await Xo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function hI(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function jm(t){return t.map(e=>{var{providerId:n}=e,r=Jc(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dI(t,e){const n=await Um(t,{},async()=>{const r=Fi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=$m(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",Fm.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function fI(t,e){return Ps(t,"POST","/v2/accounts:revokeToken",nu(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){de(e.idToken,"internal-error"),de(typeof e.idToken<"u","internal-error"),de(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):qd(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){de(e.length!==0,"internal-error");const n=qd(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(de(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await dI(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new hs;return r&&(de(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(de(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(de(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new hs,this.toJSON())}_performRefresh(){return Cn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kn(t,e){de(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Pn{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Jc(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new cI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new lc(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await bi(this,this.stsTokenManager.getToken(this.auth,e));return de(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return aI(this,e)}reload(){return uI(this)}_assign(e){this!==e&&(de(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Pn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){de(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Xo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Sn(this.auth.app))return Promise.reject(Nr(this.auth));const e=await this.getIdToken();return await bi(this,oI(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,l,c,h,d;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(s=n.email)!==null&&s!==void 0?s:void 0,_=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,I=(o=n.photoURL)!==null&&o!==void 0?o:void 0,S=(l=n.tenantId)!==null&&l!==void 0?l:void 0,P=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,V=(h=n.createdAt)!==null&&h!==void 0?h:void 0,F=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:j,emailVerified:q,isAnonymous:oe,providerData:ye,stsTokenManager:A}=n;de(j&&A,e,"internal-error");const y=hs.fromJSON(this.name,A);de(typeof j=="string",e,"internal-error"),Kn(p,e.name),Kn(m,e.name),de(typeof q=="boolean",e,"internal-error"),de(typeof oe=="boolean",e,"internal-error"),Kn(_,e.name),Kn(I,e.name),Kn(S,e.name),Kn(P,e.name),Kn(V,e.name),Kn(F,e.name);const E=new Pn({uid:j,auth:e,email:m,emailVerified:q,displayName:p,isAnonymous:oe,photoURL:I,phoneNumber:_,tenantId:S,stsTokenManager:y,createdAt:V,lastLoginAt:F});return ye&&Array.isArray(ye)&&(E.providerData=ye.map(b=>Object.assign({},b))),P&&(E._redirectEventId=P),E}static async _fromIdTokenResponse(e,n,r=!1){const s=new hs;s.updateFromServerResponse(n);const i=new Pn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Xo(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];de(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?jm(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new hs;l.updateFromIdToken(r);const c=new Pn({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new lc(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,h),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hd=new Map;function kn(t){On(t instanceof Function,"Expected a class definition");let e=Hd.get(t);return e?(On(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Hd.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qm{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}qm.type="NONE";const zd=qm;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ko(t,e,n){return`firebase:${t}:${e}:${n}`}class ds{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=ko(this.userKey,s.apiKey,i),this.fullPersistenceKey=ko("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Pn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ds(kn(zd),e,r);const s=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||kn(zd);const o=ko(r,e.config.apiKey,e.name);let l=null;for(const h of n)try{const d=await h._get(o);if(d){const p=Pn._fromJSON(e,d);h!==i&&(l=p),i=h;break}}catch{}const c=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new ds(i,e,r):(i=c[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async h=>{if(h!==i)try{await h._remove(o)}catch{}})),new ds(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wd(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Km(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Hm(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Qm(e))return"Blackberry";if(Xm(e))return"Webos";if(zm(e))return"Safari";if((e.includes("chrome/")||Wm(e))&&!e.includes("edge/"))return"Chrome";if(Gm(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Hm(t=Ct()){return/firefox\//i.test(t)}function zm(t=Ct()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Wm(t=Ct()){return/crios\//i.test(t)}function Km(t=Ct()){return/iemobile/i.test(t)}function Gm(t=Ct()){return/android/i.test(t)}function Qm(t=Ct()){return/blackberry/i.test(t)}function Xm(t=Ct()){return/webos/i.test(t)}function su(t=Ct()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function pI(t=Ct()){var e;return su(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function mI(){return Nw()&&document.documentMode===10}function Ym(t=Ct()){return su(t)||Gm(t)||Xm(t)||Qm(t)||/windows phone/i.test(t)||Km(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jm(t,e=[]){let n;switch(t){case"Browser":n=Wd(Ct());break;case"Worker":n=`${Wd(Ct())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Cs}/${r}`}/**
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
 */class gI{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,l)=>{try{const c=e(i);o(c)}catch(c){l(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function _I(t,e={}){return Ps(t,"GET","/v2/passwordPolicy",nu(t,e))}/**
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
 */const yI=6;class vI{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:yI,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,l;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(l=c.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EI{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Kd(this),this.idTokenSubscription=new Kd(this),this.beforeStateQueue=new gI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Lm,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=kn(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await ds.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Bm(this,{idToken:e}),r=await Pn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Sn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===l)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return de(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Xo(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=tI()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Sn(this.app))return Promise.reject(Nr(this));const n=e?ut(e):null;return n&&de(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&de(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Sn(this.app)?Promise.reject(Nr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Sn(this.app)?Promise.reject(Nr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(kn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await _I(this),n=new vI(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Li("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await fI(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&kn(e)||this._popupRedirectResolver;de(n,this,"argument-error"),this.redirectPersistenceManager=await ds.create(this,[kn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(de(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return de(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Jm(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&YT(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Ra(t){return ut(t)}class Kd{constructor(e){this.auth=e,this.observer=null,this.addObserver=$w(n=>this.observer=n)}get next(){return de(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let iu={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function wI(t){iu=t}function TI(t){return iu.loadJS(t)}function II(){return iu.gapiScript}function bI(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AI(t,e){const n=Yc(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Ko(i,e??{}))return s;gn(s,"already-initialized")}return n.initialize({options:e})}function RI(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(kn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function SI(t,e,n){const r=Ra(t);de(r._canInitEmulator,r,"emulator-config-failed"),de(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Zm(e),{host:o,port:l}=CI(e),c=l===null?"":`:${l}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),PI()}function Zm(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function CI(t){const e=Zm(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Gd(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Gd(o)}}}function Gd(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function PI(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eg{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Cn("not implemented")}_getIdTokenResponse(e){return Cn("not implemented")}_linkToIdToken(e,n){return Cn("not implemented")}_getReauthenticationResolver(e){return Cn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fs(t,e){return sI(t,"POST","/v1/accounts:signInWithIdp",nu(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kI="http://localhost";class xr extends eg{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new xr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):gn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Jc(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new xr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return fs(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,fs(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,fs(e,n)}buildRequest(){const e={requestUri:kI,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Fi(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class $i extends ou{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn extends $i{constructor(){super("facebook.com")}static credential(e){return xr._fromParams({providerId:Jn.PROVIDER_ID,signInMethod:Jn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Jn.credentialFromTaggedObject(e)}static credentialFromError(e){return Jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Jn.credential(e.oauthAccessToken)}catch{return null}}}Jn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Jn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn extends $i{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return xr._fromParams({providerId:Rn.PROVIDER_ID,signInMethod:Rn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Rn.credentialFromTaggedObject(e)}static credentialFromError(e){return Rn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Rn.credential(n,r)}catch{return null}}}Rn.GOOGLE_SIGN_IN_METHOD="google.com";Rn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn extends $i{constructor(){super("github.com")}static credential(e){return xr._fromParams({providerId:Zn.PROVIDER_ID,signInMethod:Zn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Zn.credentialFromTaggedObject(e)}static credentialFromError(e){return Zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Zn.credential(e.oauthAccessToken)}catch{return null}}}Zn.GITHUB_SIGN_IN_METHOD="github.com";Zn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er extends $i{constructor(){super("twitter.com")}static credential(e,n){return xr._fromParams({providerId:er.PROVIDER_ID,signInMethod:er.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return er.credentialFromTaggedObject(e)}static credentialFromError(e){return er.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return er.credential(n,r)}catch{return null}}}er.TWITTER_SIGN_IN_METHOD="twitter.com";er.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Pn._fromIdTokenResponse(e,r,s),o=Qd(r);return new Es({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Qd(r);return new Es({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Qd(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yo extends $n{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Yo.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Yo(e,n,r,s)}}function tg(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Yo._fromErrorAndOperation(t,i,e,r):i})}async function DI(t,e,n=!1){const r=await bi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Es._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function NI(t,e,n=!1){const{auth:r}=t;if(Sn(r.app))return Promise.reject(Nr(r));const s="reauthenticate";try{const i=await bi(t,tg(r,s,e,t),n);de(i.idToken,r,"internal-error");const o=ru(i.idToken);de(o,r,"internal-error");const{sub:l}=o;return de(t.uid===l,r,"user-mismatch"),Es._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&gn(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VI(t,e,n=!1){if(Sn(t.app))return Promise.reject(Nr(t));const r="signIn",s=await tg(t,r,e),i=await Es._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}function OI(t,e,n,r){return ut(t).onIdTokenChanged(e,n,r)}function MI(t,e,n){return ut(t).beforeAuthStateChanged(e,n)}const Jo="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ng{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Jo,"1"),this.storage.removeItem(Jo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xI=1e3,LI=10;class rg extends ng{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Ym(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,c)=>{this.notifyListeners(o,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);mI()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,LI):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},xI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}rg.type="LOCAL";const FI=rg;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sg extends ng{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}sg.type="SESSION";const ig=sg;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UI(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sa{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Sa(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async h=>h(n.origin,i)),c=await UI(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Sa.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class $I{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,c)=>{const h=au("",20);s.port1.start();const d=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const m=p;if(m.data.eventId===h)switch(m.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(m.data.response);break;default:clearTimeout(d),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dn(){return window}function BI(t){dn().location.href=t}/**
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
 */function og(){return typeof dn().WorkerGlobalScope<"u"&&typeof dn().importScripts=="function"}async function jI(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function qI(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function HI(){return og()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ag="firebaseLocalStorageDb",zI=1,Zo="firebaseLocalStorage",lg="fbase_key";class Bi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ca(t,e){return t.transaction([Zo],e?"readwrite":"readonly").objectStore(Zo)}function WI(){const t=indexedDB.deleteDatabase(ag);return new Bi(t).toPromise()}function cc(){const t=indexedDB.open(ag,zI);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Zo,{keyPath:lg})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Zo)?e(r):(r.close(),await WI(),e(await cc()))})})}async function Xd(t,e,n){const r=Ca(t,!0).put({[lg]:e,value:n});return new Bi(r).toPromise()}async function KI(t,e){const n=Ca(t,!1).get(e),r=await new Bi(n).toPromise();return r===void 0?null:r.value}function Yd(t,e){const n=Ca(t,!0).delete(e);return new Bi(n).toPromise()}const GI=800,QI=3;class cg{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await cc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>QI)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return og()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Sa._getInstance(HI()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await jI(),!this.activeServiceWorker)return;this.sender=new $I(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||qI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await cc();return await Xd(e,Jo,"1"),await Yd(e,Jo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Xd(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>KI(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Yd(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Ca(s,!1).getAll();return new Bi(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),GI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}cg.type="LOCAL";const XI=cg;new Ui(3e4,6e4);/**
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
 */function ug(t,e){return e?kn(e):(de(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lu extends eg{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return fs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return fs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return fs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function YI(t){return VI(t.auth,new lu(t),t.bypassAuthState)}function JI(t){const{auth:e,user:n}=t;return de(n,e,"internal-error"),NI(n,new lu(t),t.bypassAuthState)}async function ZI(t){const{auth:e,user:n}=t;return de(n,e,"internal-error"),DI(n,new lu(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hg{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return YI;case"linkViaPopup":case"linkViaRedirect":return ZI;case"reauthViaPopup":case"reauthViaRedirect":return JI;default:gn(this.auth,"internal-error")}}resolve(e){On(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){On(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e1=new Ui(2e3,1e4);async function t1(t,e,n){if(Sn(t.app))return Promise.reject(nn(t,"operation-not-supported-in-this-environment"));const r=Ra(t);JT(t,e,ou);const s=ug(r,n);return new Cr(r,"signInViaPopup",e,s).executeNotNull()}class Cr extends hg{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Cr.currentPopupAction&&Cr.currentPopupAction.cancel(),Cr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return de(e,this.auth,"internal-error"),e}async onExecution(){On(this.filter.length===1,"Popup operations only handle one event");const e=au();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(nn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(nn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Cr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(nn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,e1.get())};e()}}Cr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n1="pendingRedirect",Do=new Map;class r1 extends hg{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Do.get(this.auth._key());if(!e){try{const r=await s1(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Do.set(this.auth._key(),e)}return this.bypassAuthState||Do.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function s1(t,e){const n=a1(e),r=o1(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function i1(t,e){Do.set(t._key(),e)}function o1(t){return kn(t._redirectPersistence)}function a1(t){return ko(n1,t.config.apiKey,t.name)}async function l1(t,e,n=!1){if(Sn(t.app))return Promise.reject(Nr(t));const r=Ra(t),s=ug(r,e),o=await new r1(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c1=10*60*1e3;class u1{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!h1(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!dg(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(nn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=c1&&this.cachedEventUids.clear(),this.cachedEventUids.has(Jd(e))}saveEventToCache(e){this.cachedEventUids.add(Jd(e)),this.lastProcessedEventTime=Date.now()}}function Jd(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function dg({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function h1(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return dg(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function d1(t,e={}){return Ps(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f1=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,p1=/^https?/;async function m1(t){if(t.config.emulator)return;const{authorizedDomains:e}=await d1(t);for(const n of e)try{if(g1(n))return}catch{}gn(t,"unauthorized-domain")}function g1(t){const e=ac(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!p1.test(n))return!1;if(f1.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const _1=new Ui(3e4,6e4);function Zd(){const t=dn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function y1(t){return new Promise((e,n)=>{var r,s,i;function o(){Zd(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Zd(),n(nn(t,"network-request-failed"))},timeout:_1.get()})}if(!((s=(r=dn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=dn().gapi)===null||i===void 0)&&i.load)o();else{const l=bI("iframefcb");return dn()[l]=()=>{gapi.load?o():n(nn(t,"network-request-failed"))},TI(`${II()}?onload=${l}`).catch(c=>n(c))}}).catch(e=>{throw No=null,e})}let No=null;function v1(t){return No=No||y1(t),No}/**
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
 */const E1=new Ui(5e3,15e3),w1="__/auth/iframe",T1="emulator/auth/iframe",I1={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},b1=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function A1(t){const e=t.config;de(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?tu(e,T1):`https://${t.config.authDomain}/${w1}`,r={apiKey:e.apiKey,appName:t.name,v:Cs},s=b1.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Fi(r).slice(1)}`}async function R1(t){const e=await v1(t),n=dn().gapi;return de(n,t,"internal-error"),e.open({where:document.body,url:A1(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:I1,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=nn(t,"network-request-failed"),l=dn().setTimeout(()=>{i(o)},E1.get());function c(){dn().clearTimeout(l),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const S1={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},C1=500,P1=600,k1="_blank",D1="http://localhost";class ef{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function N1(t,e,n,r=C1,s=P1){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c=Object.assign(Object.assign({},S1),{width:r.toString(),height:s.toString(),top:i,left:o}),h=Ct().toLowerCase();n&&(l=Wm(h)?k1:n),Hm(h)&&(e=e||D1,c.scrollbars="yes");const d=Object.entries(c).reduce((m,[_,I])=>`${m}${_}=${I},`,"");if(pI(h)&&l!=="_self")return V1(e||"",l),new ef(null);const p=window.open(e||"",l,d);de(p,t,"popup-blocked");try{p.focus()}catch{}return new ef(p)}function V1(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const O1="__/auth/handler",M1="emulator/auth/handler",x1=encodeURIComponent("fac");async function tf(t,e,n,r,s,i){de(t.config.authDomain,t,"auth-domain-config-required"),de(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Cs,eventId:s};if(e instanceof ou){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Uw(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries({}))o[d]=p}if(e instanceof $i){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const c=await t._getAppCheckToken(),h=c?`#${x1}=${encodeURIComponent(c)}`:"";return`${L1(t)}?${Fi(l).slice(1)}${h}`}function L1({config:t}){return t.emulator?tu(t,M1):`https://${t.authDomain}/${O1}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nl="webStorageSupport";class F1{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ig,this._completeRedirectFn=l1,this._overrideRedirectResult=i1}async _openPopup(e,n,r,s){var i;On((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await tf(e,n,r,ac(),s);return N1(e,o,au())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await tf(e,n,r,ac(),s);return BI(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(On(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await R1(e),r=new u1(e);return n.register("authEvent",s=>(de(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Nl,{type:Nl},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Nl];o!==void 0&&n(!!o),gn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=m1(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Ym()||zm()||su()}}const U1=F1;var nf="@firebase/auth",rf="1.8.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $1{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){de(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B1(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function j1(t){vs(new Mr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;de(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Jm(t)},h=new EI(r,s,i,c);return RI(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),vs(new Mr("auth-internal",e=>{const n=Ra(e.getProvider("auth").getImmediate());return(r=>new $1(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),ar(nf,rf,B1(t)),ar(nf,rf,"esm2017")}/**
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
 */const q1=5*60,H1=Pm("authIdTokenMaxAge")||q1;let sf=null;const z1=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>H1)return;const s=n==null?void 0:n.token;sf!==s&&(sf=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function yt(t=Vm()){const e=Yc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=AI(t,{popupRedirectResolver:U1,persistence:[XI,FI,ig]}),r=Pm("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=z1(i.toString());MI(n,o,()=>o(n.currentUser)),OI(n,l=>o(l))}}const s=Sm("auth");return s&&SI(n,`http://${s}`),n}function W1(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}wI({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=nn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",W1().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});j1("Browser");var K1="firebase",G1="11.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ar(K1,G1,"app");const Q1={apiKey:"AIzaSyALY2Eu62yzZPuaySeDBI3ONz3DYCq2388",authDomain:"relay-hub.firebaseapp.com",projectId:"relay-hub",storageBucket:"relay-hub.appspot.com",messagingSenderId:"1088994606939",appId:"1:1088994606939:web:17dc0c1330726f959ca47e"},Ze=Nm(Q1),X1=yt(Ze),Y1=async()=>{const t=new Rn;try{return(await t1(X1,t)).user}catch(e){throw console.error("Error during sign-in:",e),e}},J1=Le({components:{ButtonDefault:xi},emits:["onButtonClicked"],props:{},setup(){const t=Im(),e=le(!1);async function n(){e.value=!0;try{const r=await Y1();t.setUser({uid:r.uid,displayName:r.displayName,email:r.email,photoURL:r.photoURL})}catch(r){t.setUser(null),console.error("Failed to sign in:",r)}}return{isLoading:e,onButtonClicked:n}}}),Z1={class:"button-google"};function eb(t,e,n,r,s,i){const o=Ie("ButtonDefault");return G(),se("div",Z1,[_e(o,{text:"Sign in with Google",isLoading:t.isLoading,onOnButtonClicked:t.onButtonClicked},{icon:hn(()=>e[0]||(e[0]=[Y("div",{class:"google-icon"},null,-1)])),_:1},8,["isLoading","onOnButtonClicked"])])}const tb=He(J1,[["render",eb],["__scopeId","data-v-e750a2f5"]]),nb=Le({name:"sign-in",components:{ButtonGoogle:tb},setup(){return{}}}),rb={class:"sign-in"};function sb(t,e,n,r,s,i){const o=Ie("button-google");return G(),se("div",rb,[e[0]||(e[0]=Y("div",{class:"relay-hub"},"RelayHub",-1)),_e(o)])}const ib=He(nb,[["render",sb],["__scopeId","data-v-9540f920"]]),ob=Le({name:"ToggleButton",props:{modelValue:{type:Boolean,required:!0},isBlocked:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(t,{emit:e}){const n=le(t.modelValue),r=le(!1);return sr(()=>t.modelValue,i=>{n.value=i}),{isActive:n,toggleSwitch:()=>{t.isBlocked||r.value||(n.value=!n.value,r.value=!0,setTimeout(()=>r.value=!1,500),e("update:modelValue",n.value))}}}});function ab(t,e,n,r,s,i){return G(),se("div",{class:qt(["toggle-switch",{active:t.isActive}]),onClick:e[0]||(e[0]=(...o)=>t.toggleSwitch&&t.toggleSwitch(...o))},e[1]||(e[1]=[Y("div",{class:"switch"},null,-1)]),2)}const lb=He(ob,[["render",ab],["__scopeId","data-v-17dbdf4b"]]);var of=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Vr,fg;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(A,y){function E(){}E.prototype=y.prototype,A.D=y.prototype,A.prototype=new E,A.prototype.constructor=A,A.C=function(b,R,C){for(var T=Array(arguments.length-2),ht=2;ht<arguments.length;ht++)T[ht-2]=arguments[ht];return y.prototype[R].apply(b,T)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(A,y,E){E||(E=0);var b=Array(16);if(typeof y=="string")for(var R=0;16>R;++R)b[R]=y.charCodeAt(E++)|y.charCodeAt(E++)<<8|y.charCodeAt(E++)<<16|y.charCodeAt(E++)<<24;else for(R=0;16>R;++R)b[R]=y[E++]|y[E++]<<8|y[E++]<<16|y[E++]<<24;y=A.g[0],E=A.g[1],R=A.g[2];var C=A.g[3],T=y+(C^E&(R^C))+b[0]+3614090360&4294967295;y=E+(T<<7&4294967295|T>>>25),T=C+(R^y&(E^R))+b[1]+3905402710&4294967295,C=y+(T<<12&4294967295|T>>>20),T=R+(E^C&(y^E))+b[2]+606105819&4294967295,R=C+(T<<17&4294967295|T>>>15),T=E+(y^R&(C^y))+b[3]+3250441966&4294967295,E=R+(T<<22&4294967295|T>>>10),T=y+(C^E&(R^C))+b[4]+4118548399&4294967295,y=E+(T<<7&4294967295|T>>>25),T=C+(R^y&(E^R))+b[5]+1200080426&4294967295,C=y+(T<<12&4294967295|T>>>20),T=R+(E^C&(y^E))+b[6]+2821735955&4294967295,R=C+(T<<17&4294967295|T>>>15),T=E+(y^R&(C^y))+b[7]+4249261313&4294967295,E=R+(T<<22&4294967295|T>>>10),T=y+(C^E&(R^C))+b[8]+1770035416&4294967295,y=E+(T<<7&4294967295|T>>>25),T=C+(R^y&(E^R))+b[9]+2336552879&4294967295,C=y+(T<<12&4294967295|T>>>20),T=R+(E^C&(y^E))+b[10]+4294925233&4294967295,R=C+(T<<17&4294967295|T>>>15),T=E+(y^R&(C^y))+b[11]+2304563134&4294967295,E=R+(T<<22&4294967295|T>>>10),T=y+(C^E&(R^C))+b[12]+1804603682&4294967295,y=E+(T<<7&4294967295|T>>>25),T=C+(R^y&(E^R))+b[13]+4254626195&4294967295,C=y+(T<<12&4294967295|T>>>20),T=R+(E^C&(y^E))+b[14]+2792965006&4294967295,R=C+(T<<17&4294967295|T>>>15),T=E+(y^R&(C^y))+b[15]+1236535329&4294967295,E=R+(T<<22&4294967295|T>>>10),T=y+(R^C&(E^R))+b[1]+4129170786&4294967295,y=E+(T<<5&4294967295|T>>>27),T=C+(E^R&(y^E))+b[6]+3225465664&4294967295,C=y+(T<<9&4294967295|T>>>23),T=R+(y^E&(C^y))+b[11]+643717713&4294967295,R=C+(T<<14&4294967295|T>>>18),T=E+(C^y&(R^C))+b[0]+3921069994&4294967295,E=R+(T<<20&4294967295|T>>>12),T=y+(R^C&(E^R))+b[5]+3593408605&4294967295,y=E+(T<<5&4294967295|T>>>27),T=C+(E^R&(y^E))+b[10]+38016083&4294967295,C=y+(T<<9&4294967295|T>>>23),T=R+(y^E&(C^y))+b[15]+3634488961&4294967295,R=C+(T<<14&4294967295|T>>>18),T=E+(C^y&(R^C))+b[4]+3889429448&4294967295,E=R+(T<<20&4294967295|T>>>12),T=y+(R^C&(E^R))+b[9]+568446438&4294967295,y=E+(T<<5&4294967295|T>>>27),T=C+(E^R&(y^E))+b[14]+3275163606&4294967295,C=y+(T<<9&4294967295|T>>>23),T=R+(y^E&(C^y))+b[3]+4107603335&4294967295,R=C+(T<<14&4294967295|T>>>18),T=E+(C^y&(R^C))+b[8]+1163531501&4294967295,E=R+(T<<20&4294967295|T>>>12),T=y+(R^C&(E^R))+b[13]+2850285829&4294967295,y=E+(T<<5&4294967295|T>>>27),T=C+(E^R&(y^E))+b[2]+4243563512&4294967295,C=y+(T<<9&4294967295|T>>>23),T=R+(y^E&(C^y))+b[7]+1735328473&4294967295,R=C+(T<<14&4294967295|T>>>18),T=E+(C^y&(R^C))+b[12]+2368359562&4294967295,E=R+(T<<20&4294967295|T>>>12),T=y+(E^R^C)+b[5]+4294588738&4294967295,y=E+(T<<4&4294967295|T>>>28),T=C+(y^E^R)+b[8]+2272392833&4294967295,C=y+(T<<11&4294967295|T>>>21),T=R+(C^y^E)+b[11]+1839030562&4294967295,R=C+(T<<16&4294967295|T>>>16),T=E+(R^C^y)+b[14]+4259657740&4294967295,E=R+(T<<23&4294967295|T>>>9),T=y+(E^R^C)+b[1]+2763975236&4294967295,y=E+(T<<4&4294967295|T>>>28),T=C+(y^E^R)+b[4]+1272893353&4294967295,C=y+(T<<11&4294967295|T>>>21),T=R+(C^y^E)+b[7]+4139469664&4294967295,R=C+(T<<16&4294967295|T>>>16),T=E+(R^C^y)+b[10]+3200236656&4294967295,E=R+(T<<23&4294967295|T>>>9),T=y+(E^R^C)+b[13]+681279174&4294967295,y=E+(T<<4&4294967295|T>>>28),T=C+(y^E^R)+b[0]+3936430074&4294967295,C=y+(T<<11&4294967295|T>>>21),T=R+(C^y^E)+b[3]+3572445317&4294967295,R=C+(T<<16&4294967295|T>>>16),T=E+(R^C^y)+b[6]+76029189&4294967295,E=R+(T<<23&4294967295|T>>>9),T=y+(E^R^C)+b[9]+3654602809&4294967295,y=E+(T<<4&4294967295|T>>>28),T=C+(y^E^R)+b[12]+3873151461&4294967295,C=y+(T<<11&4294967295|T>>>21),T=R+(C^y^E)+b[15]+530742520&4294967295,R=C+(T<<16&4294967295|T>>>16),T=E+(R^C^y)+b[2]+3299628645&4294967295,E=R+(T<<23&4294967295|T>>>9),T=y+(R^(E|~C))+b[0]+4096336452&4294967295,y=E+(T<<6&4294967295|T>>>26),T=C+(E^(y|~R))+b[7]+1126891415&4294967295,C=y+(T<<10&4294967295|T>>>22),T=R+(y^(C|~E))+b[14]+2878612391&4294967295,R=C+(T<<15&4294967295|T>>>17),T=E+(C^(R|~y))+b[5]+4237533241&4294967295,E=R+(T<<21&4294967295|T>>>11),T=y+(R^(E|~C))+b[12]+1700485571&4294967295,y=E+(T<<6&4294967295|T>>>26),T=C+(E^(y|~R))+b[3]+2399980690&4294967295,C=y+(T<<10&4294967295|T>>>22),T=R+(y^(C|~E))+b[10]+4293915773&4294967295,R=C+(T<<15&4294967295|T>>>17),T=E+(C^(R|~y))+b[1]+2240044497&4294967295,E=R+(T<<21&4294967295|T>>>11),T=y+(R^(E|~C))+b[8]+1873313359&4294967295,y=E+(T<<6&4294967295|T>>>26),T=C+(E^(y|~R))+b[15]+4264355552&4294967295,C=y+(T<<10&4294967295|T>>>22),T=R+(y^(C|~E))+b[6]+2734768916&4294967295,R=C+(T<<15&4294967295|T>>>17),T=E+(C^(R|~y))+b[13]+1309151649&4294967295,E=R+(T<<21&4294967295|T>>>11),T=y+(R^(E|~C))+b[4]+4149444226&4294967295,y=E+(T<<6&4294967295|T>>>26),T=C+(E^(y|~R))+b[11]+3174756917&4294967295,C=y+(T<<10&4294967295|T>>>22),T=R+(y^(C|~E))+b[2]+718787259&4294967295,R=C+(T<<15&4294967295|T>>>17),T=E+(C^(R|~y))+b[9]+3951481745&4294967295,A.g[0]=A.g[0]+y&4294967295,A.g[1]=A.g[1]+(R+(T<<21&4294967295|T>>>11))&4294967295,A.g[2]=A.g[2]+R&4294967295,A.g[3]=A.g[3]+C&4294967295}r.prototype.u=function(A,y){y===void 0&&(y=A.length);for(var E=y-this.blockSize,b=this.B,R=this.h,C=0;C<y;){if(R==0)for(;C<=E;)s(this,A,C),C+=this.blockSize;if(typeof A=="string"){for(;C<y;)if(b[R++]=A.charCodeAt(C++),R==this.blockSize){s(this,b),R=0;break}}else for(;C<y;)if(b[R++]=A[C++],R==this.blockSize){s(this,b),R=0;break}}this.h=R,this.o+=y},r.prototype.v=function(){var A=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);A[0]=128;for(var y=1;y<A.length-8;++y)A[y]=0;var E=8*this.o;for(y=A.length-8;y<A.length;++y)A[y]=E&255,E/=256;for(this.u(A),A=Array(16),y=E=0;4>y;++y)for(var b=0;32>b;b+=8)A[E++]=this.g[y]>>>b&255;return A};function i(A,y){var E=l;return Object.prototype.hasOwnProperty.call(E,A)?E[A]:E[A]=y(A)}function o(A,y){this.h=y;for(var E=[],b=!0,R=A.length-1;0<=R;R--){var C=A[R]|0;b&&C==y||(E[R]=C,b=!1)}this.g=E}var l={};function c(A){return-128<=A&&128>A?i(A,function(y){return new o([y|0],0>y?-1:0)}):new o([A|0],0>A?-1:0)}function h(A){if(isNaN(A)||!isFinite(A))return p;if(0>A)return P(h(-A));for(var y=[],E=1,b=0;A>=E;b++)y[b]=A/E|0,E*=4294967296;return new o(y,0)}function d(A,y){if(A.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(A.charAt(0)=="-")return P(d(A.substring(1),y));if(0<=A.indexOf("-"))throw Error('number format error: interior "-" character');for(var E=h(Math.pow(y,8)),b=p,R=0;R<A.length;R+=8){var C=Math.min(8,A.length-R),T=parseInt(A.substring(R,R+C),y);8>C?(C=h(Math.pow(y,C)),b=b.j(C).add(h(T))):(b=b.j(E),b=b.add(h(T)))}return b}var p=c(0),m=c(1),_=c(16777216);t=o.prototype,t.m=function(){if(S(this))return-P(this).m();for(var A=0,y=1,E=0;E<this.g.length;E++){var b=this.i(E);A+=(0<=b?b:4294967296+b)*y,y*=4294967296}return A},t.toString=function(A){if(A=A||10,2>A||36<A)throw Error("radix out of range: "+A);if(I(this))return"0";if(S(this))return"-"+P(this).toString(A);for(var y=h(Math.pow(A,6)),E=this,b="";;){var R=q(E,y).g;E=V(E,R.j(y));var C=((0<E.g.length?E.g[0]:E.h)>>>0).toString(A);if(E=R,I(E))return C+b;for(;6>C.length;)C="0"+C;b=C+b}},t.i=function(A){return 0>A?0:A<this.g.length?this.g[A]:this.h};function I(A){if(A.h!=0)return!1;for(var y=0;y<A.g.length;y++)if(A.g[y]!=0)return!1;return!0}function S(A){return A.h==-1}t.l=function(A){return A=V(this,A),S(A)?-1:I(A)?0:1};function P(A){for(var y=A.g.length,E=[],b=0;b<y;b++)E[b]=~A.g[b];return new o(E,~A.h).add(m)}t.abs=function(){return S(this)?P(this):this},t.add=function(A){for(var y=Math.max(this.g.length,A.g.length),E=[],b=0,R=0;R<=y;R++){var C=b+(this.i(R)&65535)+(A.i(R)&65535),T=(C>>>16)+(this.i(R)>>>16)+(A.i(R)>>>16);b=T>>>16,C&=65535,T&=65535,E[R]=T<<16|C}return new o(E,E[E.length-1]&-2147483648?-1:0)};function V(A,y){return A.add(P(y))}t.j=function(A){if(I(this)||I(A))return p;if(S(this))return S(A)?P(this).j(P(A)):P(P(this).j(A));if(S(A))return P(this.j(P(A)));if(0>this.l(_)&&0>A.l(_))return h(this.m()*A.m());for(var y=this.g.length+A.g.length,E=[],b=0;b<2*y;b++)E[b]=0;for(b=0;b<this.g.length;b++)for(var R=0;R<A.g.length;R++){var C=this.i(b)>>>16,T=this.i(b)&65535,ht=A.i(R)>>>16,Mt=A.i(R)&65535;E[2*b+2*R]+=T*Mt,F(E,2*b+2*R),E[2*b+2*R+1]+=C*Mt,F(E,2*b+2*R+1),E[2*b+2*R+1]+=T*ht,F(E,2*b+2*R+1),E[2*b+2*R+2]+=C*ht,F(E,2*b+2*R+2)}for(b=0;b<y;b++)E[b]=E[2*b+1]<<16|E[2*b];for(b=y;b<2*y;b++)E[b]=0;return new o(E,0)};function F(A,y){for(;(A[y]&65535)!=A[y];)A[y+1]+=A[y]>>>16,A[y]&=65535,y++}function j(A,y){this.g=A,this.h=y}function q(A,y){if(I(y))throw Error("division by zero");if(I(A))return new j(p,p);if(S(A))return y=q(P(A),y),new j(P(y.g),P(y.h));if(S(y))return y=q(A,P(y)),new j(P(y.g),y.h);if(30<A.g.length){if(S(A)||S(y))throw Error("slowDivide_ only works with positive integers.");for(var E=m,b=y;0>=b.l(A);)E=oe(E),b=oe(b);var R=ye(E,1),C=ye(b,1);for(b=ye(b,2),E=ye(E,2);!I(b);){var T=C.add(b);0>=T.l(A)&&(R=R.add(E),C=T),b=ye(b,1),E=ye(E,1)}return y=V(A,R.j(y)),new j(R,y)}for(R=p;0<=A.l(y);){for(E=Math.max(1,Math.floor(A.m()/y.m())),b=Math.ceil(Math.log(E)/Math.LN2),b=48>=b?1:Math.pow(2,b-48),C=h(E),T=C.j(y);S(T)||0<T.l(A);)E-=b,C=h(E),T=C.j(y);I(C)&&(C=m),R=R.add(C),A=V(A,T)}return new j(R,A)}t.A=function(A){return q(this,A).h},t.and=function(A){for(var y=Math.max(this.g.length,A.g.length),E=[],b=0;b<y;b++)E[b]=this.i(b)&A.i(b);return new o(E,this.h&A.h)},t.or=function(A){for(var y=Math.max(this.g.length,A.g.length),E=[],b=0;b<y;b++)E[b]=this.i(b)|A.i(b);return new o(E,this.h|A.h)},t.xor=function(A){for(var y=Math.max(this.g.length,A.g.length),E=[],b=0;b<y;b++)E[b]=this.i(b)^A.i(b);return new o(E,this.h^A.h)};function oe(A){for(var y=A.g.length+1,E=[],b=0;b<y;b++)E[b]=A.i(b)<<1|A.i(b-1)>>>31;return new o(E,A.h)}function ye(A,y){var E=y>>5;y%=32;for(var b=A.g.length-E,R=[],C=0;C<b;C++)R[C]=0<y?A.i(C+E)>>>y|A.i(C+E+1)<<32-y:A.i(C+E);return new o(R,A.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,fg=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=d,Vr=o}).apply(typeof of<"u"?of:typeof self<"u"?self:typeof window<"u"?window:{});var yo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var pg,Js,mg,Vo,uc,gg,_g,yg;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,u,f){return a==Array.prototype||a==Object.prototype||(a[u]=f.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof yo=="object"&&yo];for(var u=0;u<a.length;++u){var f=a[u];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function s(a,u){if(u)e:{var f=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var k=a[g];if(!(k in f))break e;f=f[k]}a=a[a.length-1],g=f[a],u=u(g),u!=g&&u!=null&&e(f,a,{configurable:!0,writable:!0,value:u})}}function i(a,u){a instanceof String&&(a+="");var f=0,g=!1,k={next:function(){if(!g&&f<a.length){var N=f++;return{value:u(N,a[N]),done:!1}}return g=!0,{done:!0,value:void 0}}};return k[Symbol.iterator]=function(){return k},k}s("Array.prototype.values",function(a){return a||function(){return i(this,function(u,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function c(a){var u=typeof a;return u=u!="object"?u:a?Array.isArray(a)?"array":u:"null",u=="array"||u=="object"&&typeof a.length=="number"}function h(a){var u=typeof a;return u=="object"&&a!=null||u=="function"}function d(a,u,f){return a.call.apply(a.bind,arguments)}function p(a,u,f){if(!a)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var k=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(k,g),a.apply(u,k)}}return function(){return a.apply(u,arguments)}}function m(a,u,f){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:p,m.apply(null,arguments)}function _(a,u){var f=Array.prototype.slice.call(arguments,1);return function(){var g=f.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function I(a,u){function f(){}f.prototype=u.prototype,a.aa=u.prototype,a.prototype=new f,a.prototype.constructor=a,a.Qb=function(g,k,N){for(var W=Array(arguments.length-2),Me=2;Me<arguments.length;Me++)W[Me-2]=arguments[Me];return u.prototype[k].apply(g,W)}}function S(a){const u=a.length;if(0<u){const f=Array(u);for(let g=0;g<u;g++)f[g]=a[g];return f}return[]}function P(a,u){for(let f=1;f<arguments.length;f++){const g=arguments[f];if(c(g)){const k=a.length||0,N=g.length||0;a.length=k+N;for(let W=0;W<N;W++)a[k+W]=g[W]}else a.push(g)}}class V{constructor(u,f){this.i=u,this.j=f,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function F(a){return/^[\s\xa0]*$/.test(a)}function j(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function q(a){return q[" "](a),a}q[" "]=function(){};var oe=j().indexOf("Gecko")!=-1&&!(j().toLowerCase().indexOf("webkit")!=-1&&j().indexOf("Edge")==-1)&&!(j().indexOf("Trident")!=-1||j().indexOf("MSIE")!=-1)&&j().indexOf("Edge")==-1;function ye(a,u,f){for(const g in a)u.call(f,a[g],g,a)}function A(a,u){for(const f in a)u.call(void 0,a[f],f,a)}function y(a){const u={};for(const f in a)u[f]=a[f];return u}const E="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function b(a,u){let f,g;for(let k=1;k<arguments.length;k++){g=arguments[k];for(f in g)a[f]=g[f];for(let N=0;N<E.length;N++)f=E[N],Object.prototype.hasOwnProperty.call(g,f)&&(a[f]=g[f])}}function R(a){var u=1;a=a.split(":");const f=[];for(;0<u&&a.length;)f.push(a.shift()),u--;return a.length&&f.push(a.join(":")),f}function C(a){l.setTimeout(()=>{throw a},0)}function T(){var a=$t;let u=null;return a.g&&(u=a.g,a.g=a.g.next,a.g||(a.h=null),u.next=null),u}class ht{constructor(){this.h=this.g=null}add(u,f){const g=Mt.get();g.set(u,f),this.h?this.h.next=g:this.g=g,this.h=g}}var Mt=new V(()=>new Fe,a=>a.reset());class Fe{constructor(){this.next=this.g=this.h=null}set(u,f){this.h=u,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let ue,ve=!1,$t=new ht,Jt=()=>{const a=l.Promise.resolve(void 0);ue=()=>{a.then(Kt)}};var Kt=()=>{for(var a;a=T();){try{a.h.call(a.g)}catch(f){C(f)}var u=Mt;u.j(a),100>u.h&&(u.h++,a.next=u.g,u.g=a)}ve=!1};function We(){this.s=this.s,this.C=this.C}We.prototype.s=!1,We.prototype.ma=function(){this.s||(this.s=!0,this.N())},We.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ke(a,u){this.type=a,this.g=this.target=u,this.defaultPrevented=!1}Ke.prototype.h=function(){this.defaultPrevented=!0};var Bn=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,u=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};l.addEventListener("test",f,u),l.removeEventListener("test",f,u)}catch{}return a}();function on(a,u){if(Ke.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var f=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=u,u=a.relatedTarget){if(oe){e:{try{q(u.nodeName);var k=!0;break e}catch{}k=!1}k||(u=null)}}else f=="mouseover"?u=a.fromElement:f=="mouseout"&&(u=a.toElement);this.relatedTarget=u,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:xt[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&on.aa.h.call(this)}}I(on,Ke);var xt={2:"touch",3:"pen",4:"mouse"};on.prototype.h=function(){on.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var M="closure_listenable_"+(1e6*Math.random()|0),J=0;function Q(a,u,f,g,k){this.listener=a,this.proxy=null,this.src=u,this.type=f,this.capture=!!g,this.ha=k,this.key=++J,this.da=this.fa=!1}function te(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function be(a){this.src=a,this.g={},this.h=0}be.prototype.add=function(a,u,f,g,k){var N=a.toString();a=this.g[N],a||(a=this.g[N]=[],this.h++);var W=v(a,u,g,k);return-1<W?(u=a[W],f||(u.fa=!1)):(u=new Q(u,this.src,N,!!g,k),u.fa=f,a.push(u)),u};function Oe(a,u){var f=u.type;if(f in a.g){var g=a.g[f],k=Array.prototype.indexOf.call(g,u,void 0),N;(N=0<=k)&&Array.prototype.splice.call(g,k,1),N&&(te(u),a.g[f].length==0&&(delete a.g[f],a.h--))}}function v(a,u,f,g){for(var k=0;k<a.length;++k){var N=a[k];if(!N.da&&N.listener==u&&N.capture==!!f&&N.ha==g)return k}return-1}var w="closure_lm_"+(1e6*Math.random()|0),D={};function U(a,u,f,g,k){if(Array.isArray(u)){for(var N=0;N<u.length;N++)U(a,u[N],f,g,k);return null}return f=re(f),a&&a[M]?a.K(u,f,h(g)?!!g.capture:!!g,k):O(a,u,f,!1,g,k)}function O(a,u,f,g,k,N){if(!u)throw Error("Invalid event type");var W=h(k)?!!k.capture:!!k,Me=ae(a);if(Me||(a[w]=Me=new be(a)),f=Me.add(u,f,g,W,N),f.proxy)return f;if(g=$(),f.proxy=g,g.src=a,g.listener=f,a.addEventListener)Bn||(k=W),k===void 0&&(k=!1),a.addEventListener(u.toString(),g,k);else if(a.attachEvent)a.attachEvent(H(u.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return f}function $(){function a(f){return u.call(a.src,a.listener,f)}const u=B;return a}function K(a,u,f,g,k){if(Array.isArray(u))for(var N=0;N<u.length;N++)K(a,u[N],f,g,k);else g=h(g)?!!g.capture:!!g,f=re(f),a&&a[M]?(a=a.i,u=String(u).toString(),u in a.g&&(N=a.g[u],f=v(N,f,g,k),-1<f&&(te(N[f]),Array.prototype.splice.call(N,f,1),N.length==0&&(delete a.g[u],a.h--)))):a&&(a=ae(a))&&(u=a.g[u.toString()],a=-1,u&&(a=v(u,f,g,k)),(f=-1<a?u[a]:null)&&z(f))}function z(a){if(typeof a!="number"&&a&&!a.da){var u=a.src;if(u&&u[M])Oe(u.i,a);else{var f=a.type,g=a.proxy;u.removeEventListener?u.removeEventListener(f,g,a.capture):u.detachEvent?u.detachEvent(H(f),g):u.addListener&&u.removeListener&&u.removeListener(g),(f=ae(u))?(Oe(f,a),f.h==0&&(f.src=null,u[w]=null)):te(a)}}}function H(a){return a in D?D[a]:D[a]="on"+a}function B(a,u){if(a.da)a=!0;else{u=new on(u,this);var f=a.listener,g=a.ha||a.src;a.fa&&z(a),a=f.call(g,u)}return a}function ae(a){return a=a[w],a instanceof be?a:null}var X="__closure_events_fn_"+(1e9*Math.random()>>>0);function re(a){return typeof a=="function"?a:(a[X]||(a[X]=function(u){return a.handleEvent(u)}),a[X])}function ne(){We.call(this),this.i=new be(this),this.M=this,this.F=null}I(ne,We),ne.prototype[M]=!0,ne.prototype.removeEventListener=function(a,u,f,g){K(this,a,u,f,g)};function ce(a,u){var f,g=a.F;if(g)for(f=[];g;g=g.F)f.push(g);if(a=a.M,g=u.type||u,typeof u=="string")u=new Ke(u,a);else if(u instanceof Ke)u.target=u.target||a;else{var k=u;u=new Ke(g,a),b(u,k)}if(k=!0,f)for(var N=f.length-1;0<=N;N--){var W=u.g=f[N];k=Pe(W,g,!0,u)&&k}if(W=u.g=a,k=Pe(W,g,!0,u)&&k,k=Pe(W,g,!1,u)&&k,f)for(N=0;N<f.length;N++)W=u.g=f[N],k=Pe(W,g,!1,u)&&k}ne.prototype.N=function(){if(ne.aa.N.call(this),this.i){var a=this.i,u;for(u in a.g){for(var f=a.g[u],g=0;g<f.length;g++)te(f[g]);delete a.g[u],a.h--}}this.F=null},ne.prototype.K=function(a,u,f,g){return this.i.add(String(a),u,!1,f,g)},ne.prototype.L=function(a,u,f,g){return this.i.add(String(a),u,!0,f,g)};function Pe(a,u,f,g){if(u=a.i.g[String(u)],!u)return!0;u=u.concat();for(var k=!0,N=0;N<u.length;++N){var W=u[N];if(W&&!W.da&&W.capture==f){var Me=W.listener,ft=W.ha||W.src;W.fa&&Oe(a.i,W),k=Me.call(ft,g)!==!1&&k}}return k&&!g.defaultPrevented}function Re(a,u,f){if(typeof a=="function")f&&(a=m(a,f));else if(a&&typeof a.handleEvent=="function")a=m(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:l.setTimeout(a,u||0)}function vt(a){a.g=Re(()=>{a.g=null,a.i&&(a.i=!1,vt(a))},a.l);const u=a.h;a.h=null,a.m.apply(null,u)}class ot extends We{constructor(u,f){super(),this.m=u,this.l=f,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:vt(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function dt(a){We.call(this),this.h=a,this.g={}}I(dt,We);var Et=[];function jn(a){ye(a.g,function(u,f){this.g.hasOwnProperty(f)&&z(u)},a),a.g={}}dt.prototype.N=function(){dt.aa.N.call(this),jn(this)},dt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var zr=l.JSON.stringify,Pt=l.JSON.parse,Gt=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function Wr(){}Wr.prototype.h=null;function Wu(a){return a.h||(a.h=a.i())}function Ku(){}var xs={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ya(){Ke.call(this,"d")}I(Ya,Ke);function Ja(){Ke.call(this,"c")}I(Ja,Ke);var Er={},Gu=null;function Ji(){return Gu=Gu||new ne}Er.La="serverreachability";function Qu(a){Ke.call(this,Er.La,a)}I(Qu,Ke);function Ls(a){const u=Ji();ce(u,new Qu(u))}Er.STAT_EVENT="statevent";function Xu(a,u){Ke.call(this,Er.STAT_EVENT,a),this.stat=u}I(Xu,Ke);function kt(a){const u=Ji();ce(u,new Xu(u,a))}Er.Ma="timingevent";function Yu(a,u){Ke.call(this,Er.Ma,a),this.size=u}I(Yu,Ke);function Fs(a,u){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},u)}function Us(){this.g=!0}Us.prototype.xa=function(){this.g=!1};function X_(a,u,f,g,k,N){a.info(function(){if(a.g)if(N)for(var W="",Me=N.split("&"),ft=0;ft<Me.length;ft++){var Se=Me[ft].split("=");if(1<Se.length){var wt=Se[0];Se=Se[1];var Tt=wt.split("_");W=2<=Tt.length&&Tt[1]=="type"?W+(wt+"="+Se+"&"):W+(wt+"=redacted&")}}else W=null;else W=N;return"XMLHTTP REQ ("+g+") [attempt "+k+"]: "+u+`
`+f+`
`+W})}function Y_(a,u,f,g,k,N,W){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+k+"]: "+u+`
`+f+`
`+N+" "+W})}function Kr(a,u,f,g){a.info(function(){return"XMLHTTP TEXT ("+u+"): "+Z_(a,f)+(g?" "+g:"")})}function J_(a,u){a.info(function(){return"TIMEOUT: "+u})}Us.prototype.info=function(){};function Z_(a,u){if(!a.g)return u;if(!u)return null;try{var f=JSON.parse(u);if(f){for(a=0;a<f.length;a++)if(Array.isArray(f[a])){var g=f[a];if(!(2>g.length)){var k=g[1];if(Array.isArray(k)&&!(1>k.length)){var N=k[0];if(N!="noop"&&N!="stop"&&N!="close")for(var W=1;W<k.length;W++)k[W]=""}}}}return zr(f)}catch{return u}}var Zi={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ju={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Za;function eo(){}I(eo,Wr),eo.prototype.g=function(){return new XMLHttpRequest},eo.prototype.i=function(){return{}},Za=new eo;function qn(a,u,f,g){this.j=a,this.i=u,this.l=f,this.R=g||1,this.U=new dt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Zu}function Zu(){this.i=null,this.g="",this.h=!1}var eh={},el={};function tl(a,u,f){a.L=1,a.v=so(vn(u)),a.m=f,a.P=!0,th(a,null)}function th(a,u){a.F=Date.now(),to(a),a.A=vn(a.v);var f=a.A,g=a.R;Array.isArray(g)||(g=[String(g)]),mh(f.i,"t",g),a.C=0,f=a.j.J,a.h=new Zu,a.g=Vh(a.j,f?u:null,!a.m),0<a.O&&(a.M=new ot(m(a.Y,a,a.g),a.O)),u=a.U,f=a.g,g=a.ca;var k="readystatechange";Array.isArray(k)||(k&&(Et[0]=k.toString()),k=Et);for(var N=0;N<k.length;N++){var W=U(f,k[N],g||u.handleEvent,!1,u.h||u);if(!W)break;u.g[W.key]=W}u=a.H?y(a.H):{},a.m?(a.u||(a.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,u)):(a.u="GET",a.g.ea(a.A,a.u,null,u)),Ls(),X_(a.i,a.u,a.A,a.l,a.R,a.m)}qn.prototype.ca=function(a){a=a.target;const u=this.M;u&&En(a)==3?u.j():this.Y(a)},qn.prototype.Y=function(a){try{if(a==this.g)e:{const Tt=En(this.g);var u=this.g.Ba();const Xr=this.g.Z();if(!(3>Tt)&&(Tt!=3||this.g&&(this.h.h||this.g.oa()||Th(this.g)))){this.J||Tt!=4||u==7||(u==8||0>=Xr?Ls(3):Ls(2)),nl(this);var f=this.g.Z();this.X=f;t:if(nh(this)){var g=Th(this.g);a="";var k=g.length,N=En(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){wr(this),$s(this);var W="";break t}this.h.i=new l.TextDecoder}for(u=0;u<k;u++)this.h.h=!0,a+=this.h.i.decode(g[u],{stream:!(N&&u==k-1)});g.length=0,this.h.g+=a,this.C=0,W=this.h.g}else W=this.g.oa();if(this.o=f==200,Y_(this.i,this.u,this.A,this.l,this.R,Tt,f),this.o){if(this.T&&!this.K){t:{if(this.g){var Me,ft=this.g;if((Me=ft.g?ft.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!F(Me)){var Se=Me;break t}}Se=null}if(f=Se)Kr(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,rl(this,f);else{this.o=!1,this.s=3,kt(12),wr(this),$s(this);break e}}if(this.P){f=!0;let Zt;for(;!this.J&&this.C<W.length;)if(Zt=ey(this,W),Zt==el){Tt==4&&(this.s=4,kt(14),f=!1),Kr(this.i,this.l,null,"[Incomplete Response]");break}else if(Zt==eh){this.s=4,kt(15),Kr(this.i,this.l,W,"[Invalid Chunk]"),f=!1;break}else Kr(this.i,this.l,Zt,null),rl(this,Zt);if(nh(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Tt!=4||W.length!=0||this.h.h||(this.s=1,kt(16),f=!1),this.o=this.o&&f,!f)Kr(this.i,this.l,W,"[Invalid Chunked Response]"),wr(this),$s(this);else if(0<W.length&&!this.W){this.W=!0;var wt=this.j;wt.g==this&&wt.ba&&!wt.M&&(wt.j.info("Great, no buffering proxy detected. Bytes received: "+W.length),cl(wt),wt.M=!0,kt(11))}}else Kr(this.i,this.l,W,null),rl(this,W);Tt==4&&wr(this),this.o&&!this.J&&(Tt==4?Ph(this.j,this):(this.o=!1,to(this)))}else _y(this.g),f==400&&0<W.indexOf("Unknown SID")?(this.s=3,kt(12)):(this.s=0,kt(13)),wr(this),$s(this)}}}catch{}finally{}};function nh(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function ey(a,u){var f=a.C,g=u.indexOf(`
`,f);return g==-1?el:(f=Number(u.substring(f,g)),isNaN(f)?eh:(g+=1,g+f>u.length?el:(u=u.slice(g,g+f),a.C=g+f,u)))}qn.prototype.cancel=function(){this.J=!0,wr(this)};function to(a){a.S=Date.now()+a.I,rh(a,a.I)}function rh(a,u){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Fs(m(a.ba,a),u)}function nl(a){a.B&&(l.clearTimeout(a.B),a.B=null)}qn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(J_(this.i,this.A),this.L!=2&&(Ls(),kt(17)),wr(this),this.s=2,$s(this)):rh(this,this.S-a)};function $s(a){a.j.G==0||a.J||Ph(a.j,a)}function wr(a){nl(a);var u=a.M;u&&typeof u.ma=="function"&&u.ma(),a.M=null,jn(a.U),a.g&&(u=a.g,a.g=null,u.abort(),u.ma())}function rl(a,u){try{var f=a.j;if(f.G!=0&&(f.g==a||sl(f.h,a))){if(!a.K&&sl(f.h,a)&&f.G==3){try{var g=f.Da.g.parse(u)}catch{g=null}if(Array.isArray(g)&&g.length==3){var k=g;if(k[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<a.F)uo(f),lo(f);else break e;ll(f),kt(18)}}else f.za=k[1],0<f.za-f.T&&37500>k[2]&&f.F&&f.v==0&&!f.C&&(f.C=Fs(m(f.Za,f),6e3));if(1>=oh(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else Ir(f,11)}else if((a.K||f.g==a)&&uo(f),!F(u))for(k=f.Da.g.parse(u),u=0;u<k.length;u++){let Se=k[u];if(f.T=Se[0],Se=Se[1],f.G==2)if(Se[0]=="c"){f.K=Se[1],f.ia=Se[2];const wt=Se[3];wt!=null&&(f.la=wt,f.j.info("VER="+f.la));const Tt=Se[4];Tt!=null&&(f.Aa=Tt,f.j.info("SVER="+f.Aa));const Xr=Se[5];Xr!=null&&typeof Xr=="number"&&0<Xr&&(g=1.5*Xr,f.L=g,f.j.info("backChannelRequestTimeoutMs_="+g)),g=f;const Zt=a.g;if(Zt){const fo=Zt.g?Zt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(fo){var N=g.h;N.g||fo.indexOf("spdy")==-1&&fo.indexOf("quic")==-1&&fo.indexOf("h2")==-1||(N.j=N.l,N.g=new Set,N.h&&(il(N,N.h),N.h=null))}if(g.D){const ul=Zt.g?Zt.g.getResponseHeader("X-HTTP-Session-Id"):null;ul&&(g.ya=ul,Be(g.I,g.D,ul))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-a.F,f.j.info("Handshake RTT: "+f.R+"ms")),g=f;var W=a;if(g.qa=Nh(g,g.J?g.ia:null,g.W),W.K){ah(g.h,W);var Me=W,ft=g.L;ft&&(Me.I=ft),Me.B&&(nl(Me),to(Me)),g.g=W}else Sh(g);0<f.i.length&&co(f)}else Se[0]!="stop"&&Se[0]!="close"||Ir(f,7);else f.G==3&&(Se[0]=="stop"||Se[0]=="close"?Se[0]=="stop"?Ir(f,7):al(f):Se[0]!="noop"&&f.l&&f.l.ta(Se),f.v=0)}}Ls(4)}catch{}}var ty=class{constructor(a,u){this.g=a,this.map=u}};function sh(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function ih(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function oh(a){return a.h?1:a.g?a.g.size:0}function sl(a,u){return a.h?a.h==u:a.g?a.g.has(u):!1}function il(a,u){a.g?a.g.add(u):a.h=u}function ah(a,u){a.h&&a.h==u?a.h=null:a.g&&a.g.has(u)&&a.g.delete(u)}sh.prototype.cancel=function(){if(this.i=lh(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function lh(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let u=a.i;for(const f of a.g.values())u=u.concat(f.D);return u}return S(a.i)}function ny(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(c(a)){for(var u=[],f=a.length,g=0;g<f;g++)u.push(a[g]);return u}u=[],f=0;for(g in a)u[f++]=a[g];return u}function ry(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(c(a)||typeof a=="string"){var u=[];a=a.length;for(var f=0;f<a;f++)u.push(f);return u}u=[],f=0;for(const g in a)u[f++]=g;return u}}}function ch(a,u){if(a.forEach&&typeof a.forEach=="function")a.forEach(u,void 0);else if(c(a)||typeof a=="string")Array.prototype.forEach.call(a,u,void 0);else for(var f=ry(a),g=ny(a),k=g.length,N=0;N<k;N++)u.call(void 0,g[N],f&&f[N],a)}var uh=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function sy(a,u){if(a){a=a.split("&");for(var f=0;f<a.length;f++){var g=a[f].indexOf("="),k=null;if(0<=g){var N=a[f].substring(0,g);k=a[f].substring(g+1)}else N=a[f];u(N,k?decodeURIComponent(k.replace(/\+/g," ")):"")}}}function Tr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Tr){this.h=a.h,no(this,a.j),this.o=a.o,this.g=a.g,ro(this,a.s),this.l=a.l;var u=a.i,f=new qs;f.i=u.i,u.g&&(f.g=new Map(u.g),f.h=u.h),hh(this,f),this.m=a.m}else a&&(u=String(a).match(uh))?(this.h=!1,no(this,u[1]||"",!0),this.o=Bs(u[2]||""),this.g=Bs(u[3]||"",!0),ro(this,u[4]),this.l=Bs(u[5]||"",!0),hh(this,u[6]||"",!0),this.m=Bs(u[7]||"")):(this.h=!1,this.i=new qs(null,this.h))}Tr.prototype.toString=function(){var a=[],u=this.j;u&&a.push(js(u,dh,!0),":");var f=this.g;return(f||u=="file")&&(a.push("//"),(u=this.o)&&a.push(js(u,dh,!0),"@"),a.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&a.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(js(f,f.charAt(0)=="/"?ay:oy,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",js(f,cy)),a.join("")};function vn(a){return new Tr(a)}function no(a,u,f){a.j=f?Bs(u,!0):u,a.j&&(a.j=a.j.replace(/:$/,""))}function ro(a,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);a.s=u}else a.s=null}function hh(a,u,f){u instanceof qs?(a.i=u,uy(a.i,a.h)):(f||(u=js(u,ly)),a.i=new qs(u,a.h))}function Be(a,u,f){a.i.set(u,f)}function so(a){return Be(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Bs(a,u){return a?u?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function js(a,u,f){return typeof a=="string"?(a=encodeURI(a).replace(u,iy),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function iy(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var dh=/[#\/\?@]/g,oy=/[#\?:]/g,ay=/[#\?]/g,ly=/[#\?@]/g,cy=/#/g;function qs(a,u){this.h=this.g=null,this.i=a||null,this.j=!!u}function Hn(a){a.g||(a.g=new Map,a.h=0,a.i&&sy(a.i,function(u,f){a.add(decodeURIComponent(u.replace(/\+/g," ")),f)}))}t=qs.prototype,t.add=function(a,u){Hn(this),this.i=null,a=Gr(this,a);var f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(u),this.h+=1,this};function fh(a,u){Hn(a),u=Gr(a,u),a.g.has(u)&&(a.i=null,a.h-=a.g.get(u).length,a.g.delete(u))}function ph(a,u){return Hn(a),u=Gr(a,u),a.g.has(u)}t.forEach=function(a,u){Hn(this),this.g.forEach(function(f,g){f.forEach(function(k){a.call(u,k,g,this)},this)},this)},t.na=function(){Hn(this);const a=Array.from(this.g.values()),u=Array.from(this.g.keys()),f=[];for(let g=0;g<u.length;g++){const k=a[g];for(let N=0;N<k.length;N++)f.push(u[g])}return f},t.V=function(a){Hn(this);let u=[];if(typeof a=="string")ph(this,a)&&(u=u.concat(this.g.get(Gr(this,a))));else{a=Array.from(this.g.values());for(let f=0;f<a.length;f++)u=u.concat(a[f])}return u},t.set=function(a,u){return Hn(this),this.i=null,a=Gr(this,a),ph(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[u]),this.h+=1,this},t.get=function(a,u){return a?(a=this.V(a),0<a.length?String(a[0]):u):u};function mh(a,u,f){fh(a,u),0<f.length&&(a.i=null,a.g.set(Gr(a,u),S(f)),a.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],u=Array.from(this.g.keys());for(var f=0;f<u.length;f++){var g=u[f];const N=encodeURIComponent(String(g)),W=this.V(g);for(g=0;g<W.length;g++){var k=N;W[g]!==""&&(k+="="+encodeURIComponent(String(W[g]))),a.push(k)}}return this.i=a.join("&")};function Gr(a,u){return u=String(u),a.j&&(u=u.toLowerCase()),u}function uy(a,u){u&&!a.j&&(Hn(a),a.i=null,a.g.forEach(function(f,g){var k=g.toLowerCase();g!=k&&(fh(this,g),mh(this,k,f))},a)),a.j=u}function hy(a,u){const f=new Us;if(l.Image){const g=new Image;g.onload=_(zn,f,"TestLoadImage: loaded",!0,u,g),g.onerror=_(zn,f,"TestLoadImage: error",!1,u,g),g.onabort=_(zn,f,"TestLoadImage: abort",!1,u,g),g.ontimeout=_(zn,f,"TestLoadImage: timeout",!1,u,g),l.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else u(!1)}function dy(a,u){const f=new Us,g=new AbortController,k=setTimeout(()=>{g.abort(),zn(f,"TestPingServer: timeout",!1,u)},1e4);fetch(a,{signal:g.signal}).then(N=>{clearTimeout(k),N.ok?zn(f,"TestPingServer: ok",!0,u):zn(f,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(k),zn(f,"TestPingServer: error",!1,u)})}function zn(a,u,f,g,k){try{k&&(k.onload=null,k.onerror=null,k.onabort=null,k.ontimeout=null),g(f)}catch{}}function fy(){this.g=new Gt}function py(a,u,f){const g=f||"";try{ch(a,function(k,N){let W=k;h(k)&&(W=zr(k)),u.push(g+N+"="+encodeURIComponent(W))})}catch(k){throw u.push(g+"type="+encodeURIComponent("_badmap")),k}}function io(a){this.l=a.Ub||null,this.j=a.eb||!1}I(io,Wr),io.prototype.g=function(){return new oo(this.l,this.j)},io.prototype.i=function(a){return function(){return a}}({});function oo(a,u){ne.call(this),this.D=a,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}I(oo,ne),t=oo.prototype,t.open=function(a,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=u,this.readyState=1,zs(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(u.body=a),(this.D||l).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Hs(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,zs(this)),this.g&&(this.readyState=3,zs(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;gh(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function gh(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var u=a.value?a.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!a.done}))&&(this.response=this.responseText+=u)}a.done?Hs(this):zs(this),this.readyState==3&&gh(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,Hs(this))},t.Qa=function(a){this.g&&(this.response=a,Hs(this))},t.ga=function(){this.g&&Hs(this)};function Hs(a){a.readyState=4,a.l=null,a.j=null,a.v=null,zs(a)}t.setRequestHeader=function(a,u){this.u.append(a,u)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],u=this.h.entries();for(var f=u.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=u.next();return a.join(`\r
`)};function zs(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(oo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function _h(a){let u="";return ye(a,function(f,g){u+=g,u+=":",u+=f,u+=`\r
`}),u}function ol(a,u,f){e:{for(g in f){var g=!1;break e}g=!0}g||(f=_h(f),typeof a=="string"?f!=null&&encodeURIComponent(String(f)):Be(a,u,f))}function Qe(a){ne.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}I(Qe,ne);var my=/^https?$/i,gy=["POST","PUT"];t=Qe.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,u,f,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);u=u?u.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Za.g(),this.v=this.o?Wu(this.o):Wu(Za),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(u,String(a),!0),this.B=!1}catch(N){yh(this,N);return}if(a=f||"",f=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var k in g)f.set(k,g[k]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const N of g.keys())f.set(N,g.get(N));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(f.keys()).find(N=>N.toLowerCase()=="content-type"),k=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(gy,u,void 0))||g||k||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[N,W]of f)this.g.setRequestHeader(N,W);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{wh(this),this.u=!0,this.g.send(a),this.u=!1}catch(N){yh(this,N)}};function yh(a,u){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=u,a.m=5,vh(a),ao(a)}function vh(a){a.A||(a.A=!0,ce(a,"complete"),ce(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,ce(this,"complete"),ce(this,"abort"),ao(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ao(this,!0)),Qe.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Eh(this):this.bb())},t.bb=function(){Eh(this)};function Eh(a){if(a.h&&typeof o<"u"&&(!a.v[1]||En(a)!=4||a.Z()!=2)){if(a.u&&En(a)==4)Re(a.Ea,0,a);else if(ce(a,"readystatechange"),En(a)==4){a.h=!1;try{const W=a.Z();e:switch(W){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var f;if(!(f=u)){var g;if(g=W===0){var k=String(a.D).match(uh)[1]||null;!k&&l.self&&l.self.location&&(k=l.self.location.protocol.slice(0,-1)),g=!my.test(k?k.toLowerCase():"")}f=g}if(f)ce(a,"complete"),ce(a,"success");else{a.m=6;try{var N=2<En(a)?a.g.statusText:""}catch{N=""}a.l=N+" ["+a.Z()+"]",vh(a)}}finally{ao(a)}}}}function ao(a,u){if(a.g){wh(a);const f=a.g,g=a.v[0]?()=>{}:null;a.g=null,a.v=null,u||ce(a,"ready");try{f.onreadystatechange=g}catch{}}}function wh(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function En(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<En(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var u=this.g.responseText;return a&&u.indexOf(a)==0&&(u=u.substring(a.length)),Pt(u)}};function Th(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function _y(a){const u={};a=(a.g&&2<=En(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(F(a[g]))continue;var f=R(a[g]);const k=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const N=u[k]||[];u[k]=N,N.push(f)}A(u,function(g){return g.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ws(a,u,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||u}function Ih(a){this.Aa=0,this.i=[],this.j=new Us,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ws("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ws("baseRetryDelayMs",5e3,a),this.cb=Ws("retryDelaySeedMs",1e4,a),this.Wa=Ws("forwardChannelMaxRetries",2,a),this.wa=Ws("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new sh(a&&a.concurrentRequestLimit),this.Da=new fy,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Ih.prototype,t.la=8,t.G=1,t.connect=function(a,u,f,g){kt(0),this.W=a,this.H=u||{},f&&g!==void 0&&(this.H.OSID=f,this.H.OAID=g),this.F=this.X,this.I=Nh(this,null,this.W),co(this)};function al(a){if(bh(a),a.G==3){var u=a.U++,f=vn(a.I);if(Be(f,"SID",a.K),Be(f,"RID",u),Be(f,"TYPE","terminate"),Ks(a,f),u=new qn(a,a.j,u),u.L=2,u.v=so(vn(f)),f=!1,l.navigator&&l.navigator.sendBeacon)try{f=l.navigator.sendBeacon(u.v.toString(),"")}catch{}!f&&l.Image&&(new Image().src=u.v,f=!0),f||(u.g=Vh(u.j,null),u.g.ea(u.v)),u.F=Date.now(),to(u)}Dh(a)}function lo(a){a.g&&(cl(a),a.g.cancel(),a.g=null)}function bh(a){lo(a),a.u&&(l.clearTimeout(a.u),a.u=null),uo(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function co(a){if(!ih(a.h)&&!a.s){a.s=!0;var u=a.Ga;ue||Jt(),ve||(ue(),ve=!0),$t.add(u,a),a.B=0}}function yy(a,u){return oh(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=u.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Fs(m(a.Ga,a,u),kh(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const k=new qn(this,this.j,a);let N=this.o;if(this.S&&(N?(N=y(N),b(N,this.S)):N=this.S),this.m!==null||this.O||(k.H=N,N=null),this.P)e:{for(var u=0,f=0;f<this.i.length;f++){t:{var g=this.i[f];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(u+=g,4096<u){u=f;break e}if(u===4096||f===this.i.length-1){u=f+1;break e}}u=1e3}else u=1e3;u=Rh(this,k,u),f=vn(this.I),Be(f,"RID",a),Be(f,"CVER",22),this.D&&Be(f,"X-HTTP-Session-Id",this.D),Ks(this,f),N&&(this.O?u="headers="+encodeURIComponent(String(_h(N)))+"&"+u:this.m&&ol(f,this.m,N)),il(this.h,k),this.Ua&&Be(f,"TYPE","init"),this.P?(Be(f,"$req",u),Be(f,"SID","null"),k.T=!0,tl(k,f,null)):tl(k,f,u),this.G=2}}else this.G==3&&(a?Ah(this,a):this.i.length==0||ih(this.h)||Ah(this))};function Ah(a,u){var f;u?f=u.l:f=a.U++;const g=vn(a.I);Be(g,"SID",a.K),Be(g,"RID",f),Be(g,"AID",a.T),Ks(a,g),a.m&&a.o&&ol(g,a.m,a.o),f=new qn(a,a.j,f,a.B+1),a.m===null&&(f.H=a.o),u&&(a.i=u.D.concat(a.i)),u=Rh(a,f,1e3),f.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),il(a.h,f),tl(f,g,u)}function Ks(a,u){a.H&&ye(a.H,function(f,g){Be(u,g,f)}),a.l&&ch({},function(f,g){Be(u,g,f)})}function Rh(a,u,f){f=Math.min(a.i.length,f);var g=a.l?m(a.l.Na,a.l,a):null;e:{var k=a.i;let N=-1;for(;;){const W=["count="+f];N==-1?0<f?(N=k[0].g,W.push("ofs="+N)):N=0:W.push("ofs="+N);let Me=!0;for(let ft=0;ft<f;ft++){let Se=k[ft].g;const wt=k[ft].map;if(Se-=N,0>Se)N=Math.max(0,k[ft].g-100),Me=!1;else try{py(wt,W,"req"+Se+"_")}catch{g&&g(wt)}}if(Me){g=W.join("&");break e}}}return a=a.i.splice(0,f),u.D=a,g}function Sh(a){if(!a.g&&!a.u){a.Y=1;var u=a.Fa;ue||Jt(),ve||(ue(),ve=!0),$t.add(u,a),a.v=0}}function ll(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Fs(m(a.Fa,a),kh(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,Ch(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Fs(m(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,kt(10),lo(this),Ch(this))};function cl(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function Ch(a){a.g=new qn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var u=vn(a.qa);Be(u,"RID","rpc"),Be(u,"SID",a.K),Be(u,"AID",a.T),Be(u,"CI",a.F?"0":"1"),!a.F&&a.ja&&Be(u,"TO",a.ja),Be(u,"TYPE","xmlhttp"),Ks(a,u),a.m&&a.o&&ol(u,a.m,a.o),a.L&&(a.g.I=a.L);var f=a.g;a=a.ia,f.L=1,f.v=so(vn(u)),f.m=null,f.P=!0,th(f,a)}t.Za=function(){this.C!=null&&(this.C=null,lo(this),ll(this),kt(19))};function uo(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function Ph(a,u){var f=null;if(a.g==u){uo(a),cl(a),a.g=null;var g=2}else if(sl(a.h,u))f=u.D,ah(a.h,u),g=1;else return;if(a.G!=0){if(u.o)if(g==1){f=u.m?u.m.length:0,u=Date.now()-u.F;var k=a.B;g=Ji(),ce(g,new Yu(g,f)),co(a)}else Sh(a);else if(k=u.s,k==3||k==0&&0<u.X||!(g==1&&yy(a,u)||g==2&&ll(a)))switch(f&&0<f.length&&(u=a.h,u.i=u.i.concat(f)),k){case 1:Ir(a,5);break;case 4:Ir(a,10);break;case 3:Ir(a,6);break;default:Ir(a,2)}}}function kh(a,u){let f=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(f*=2),f*u}function Ir(a,u){if(a.j.info("Error code "+u),u==2){var f=m(a.fb,a),g=a.Xa;const k=!g;g=new Tr(g||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||no(g,"https"),so(g),k?hy(g.toString(),f):dy(g.toString(),f)}else kt(2);a.G=0,a.l&&a.l.sa(u),Dh(a),bh(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),kt(2)):(this.j.info("Failed to ping google.com"),kt(1))};function Dh(a){if(a.G=0,a.ka=[],a.l){const u=lh(a.h);(u.length!=0||a.i.length!=0)&&(P(a.ka,u),P(a.ka,a.i),a.h.i.length=0,S(a.i),a.i.length=0),a.l.ra()}}function Nh(a,u,f){var g=f instanceof Tr?vn(f):new Tr(f);if(g.g!="")u&&(g.g=u+"."+g.g),ro(g,g.s);else{var k=l.location;g=k.protocol,u=u?u+"."+k.hostname:k.hostname,k=+k.port;var N=new Tr(null);g&&no(N,g),u&&(N.g=u),k&&ro(N,k),f&&(N.l=f),g=N}return f=a.D,u=a.ya,f&&u&&Be(g,f,u),Be(g,"VER",a.la),Ks(a,g),g}function Vh(a,u,f){if(u&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=a.Ca&&!a.pa?new Qe(new io({eb:f})):new Qe(a.pa),u.Ha(a.J),u}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Oh(){}t=Oh.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function ho(){}ho.prototype.g=function(a,u){return new Bt(a,u)};function Bt(a,u){ne.call(this),this.g=new Ih(u),this.l=a,this.h=u&&u.messageUrlParams||null,a=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(a?a["X-WebChannel-Content-Type"]=u.messageContentType:a={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(a?a["X-WebChannel-Client-Profile"]=u.va:a={"X-WebChannel-Client-Profile":u.va}),this.g.S=a,(a=u&&u.Sb)&&!F(a)&&(this.g.m=a),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!F(u)&&(this.g.D=u,a=this.h,a!==null&&u in a&&(a=this.h,u in a&&delete a[u])),this.j=new Qr(this)}I(Bt,ne),Bt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Bt.prototype.close=function(){al(this.g)},Bt.prototype.o=function(a){var u=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.u&&(f={},f.__data__=zr(a),a=f);u.i.push(new ty(u.Ya++,a)),u.G==3&&co(u)},Bt.prototype.N=function(){this.g.l=null,delete this.j,al(this.g),delete this.g,Bt.aa.N.call(this)};function Mh(a){Ya.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var u=a.__sm__;if(u){e:{for(const f in u){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,u=u!==null&&a in u?u[a]:void 0),this.data=u}else this.data=a}I(Mh,Ya);function xh(){Ja.call(this),this.status=1}I(xh,Ja);function Qr(a){this.g=a}I(Qr,Oh),Qr.prototype.ua=function(){ce(this.g,"a")},Qr.prototype.ta=function(a){ce(this.g,new Mh(a))},Qr.prototype.sa=function(a){ce(this.g,new xh)},Qr.prototype.ra=function(){ce(this.g,"b")},ho.prototype.createWebChannel=ho.prototype.g,Bt.prototype.send=Bt.prototype.o,Bt.prototype.open=Bt.prototype.m,Bt.prototype.close=Bt.prototype.close,yg=function(){return new ho},_g=function(){return Ji()},gg=Er,uc={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Zi.NO_ERROR=0,Zi.TIMEOUT=8,Zi.HTTP_ERROR=6,Vo=Zi,Ju.COMPLETE="complete",mg=Ju,Ku.EventType=xs,xs.OPEN="a",xs.CLOSE="b",xs.ERROR="c",xs.MESSAGE="d",ne.prototype.listen=ne.prototype.K,Js=Ku,Qe.prototype.listenOnce=Qe.prototype.L,Qe.prototype.getLastError=Qe.prototype.Ka,Qe.prototype.getLastErrorCode=Qe.prototype.Ba,Qe.prototype.getStatus=Qe.prototype.Z,Qe.prototype.getResponseJson=Qe.prototype.Oa,Qe.prototype.getResponseText=Qe.prototype.oa,Qe.prototype.send=Qe.prototype.ea,Qe.prototype.setWithCredentials=Qe.prototype.Ha,pg=Qe}).apply(typeof yo<"u"?yo:typeof self<"u"?self:typeof window<"u"?window:{});const af="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */let ks="11.0.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lr=new Qc("@firebase/firestore");function ns(){return Lr.logLevel}function Z(t,...e){if(Lr.logLevel<=Ee.DEBUG){const n=e.map(cu);Lr.debug(`Firestore (${ks}): ${t}`,...n)}}function Mn(t,...e){if(Lr.logLevel<=Ee.ERROR){const n=e.map(cu);Lr.error(`Firestore (${ks}): ${t}`,...n)}}function ws(t,...e){if(Lr.logLevel<=Ee.WARN){const n=e.map(cu);Lr.warn(`Firestore (${ks}): ${t}`,...n)}}function cu(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function he(t="Unexpected state"){const e=`FIRESTORE (${ks}) INTERNAL ASSERTION FAILED: `+t;throw Mn(e),new Error(e)}function Ne(t,e){t||he()}function me(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ee extends $n{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vg{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class cb{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(bt.UNAUTHENTICATED))}shutdown(){}}class ub{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class hb{constructor(e){this.t=e,this.currentUser=bt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Ne(this.o===void 0);let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new Nn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Nn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},l=c=>{Z("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(Z("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Nn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(Z("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ne(typeof r.accessToken=="string"),new vg(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ne(e===null||typeof e=="string"),new bt(e)}}class db{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=bt.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class fb{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new db(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(bt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class pb{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class mb{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){Ne(this.o===void 0);const r=i=>{i.error!=null&&Z("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,Z("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{Z("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):Z("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ne(typeof n.token=="string"),this.R=n.token,new pb(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gb(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eg{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=gb(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function Te(t,e){return t<e?-1:t>e?1:0}function Ts(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{static now(){return st.fromMillis(Date.now())}static fromDate(e){return st.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new st(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new ee(x.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new ee(x.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new ee(x.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ee(x.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Te(this.nanoseconds,e.nanoseconds):Te(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Ai{constructor(e,n,r){n===void 0?n=0:n>e.length&&he(),r===void 0?r=e.length-n:r>e.length-n&&he(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Ai.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Ai?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class je extends Ai{construct(e,n,r){return new je(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new ee(x.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new je(n)}static emptyPath(){return new je([])}}const _b=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class gt extends Ai{construct(e,n,r){return new gt(e,n,r)}static isValidIdentifier(e){return _b.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),gt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new gt(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new ee(x.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new ee(x.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new ee(x.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(r+=l,s++):(i(),s++)}if(i(),o)throw new ee(x.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new gt(n)}static emptyPath(){return new gt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{constructor(e){this.path=e}static fromPath(e){return new ie(je.fromString(e))}static fromName(e){return new ie(je.fromString(e).popFirst(5))}static empty(){return new ie(je.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&je.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return je.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ie(new je(e.slice()))}}function yb(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=pe.fromTimestamp(r===1e9?new st(n+1,0):new st(n,r));return new ur(s,ie.empty(),e)}function vb(t){return new ur(t.readTime,t.key,-1)}class ur{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new ur(pe.min(),ie.empty(),-1)}static max(){return new ur(pe.max(),ie.empty(),-1)}}function Eb(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=ie.comparator(t.documentKey,e.documentKey),n!==0?n:Te(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wb="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Tb{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ds(t){if(t.code!==x.FAILED_PRECONDITION||t.message!==wb)throw t;Z("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&he(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new L((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof L?n:L.resolve(n)}catch(n){return L.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):L.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):L.reject(n)}static resolve(e){return new L((n,r)=>{n(e)})}static reject(e){return new L((n,r)=>{r(e)})}static waitFor(e){return new L((n,r)=>{let s=0,i=0,o=!1;e.forEach(l=>{++s,l.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(e){let n=L.resolve(!1);for(const r of e)n=n.next(s=>s?L.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new L((r,s)=>{const i=e.length,o=new Array(i);let l=0;for(let c=0;c<i;c++){const h=c;n(e[h]).next(d=>{o[h]=d,++l,l===i&&r(o)},d=>s(d))}})}static doWhile(e,n){return new L((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function Ib(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Ns(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Pa{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Pa.oe=-1;function ka(t){return t==null}function ea(t){return t===0&&1/t==-1/0}function bb(t){return typeof t=="number"&&Number.isInteger(t)&&!ea(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ab(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=lf(e)),e=Rb(t.get(n),e);return lf(e)}function Rb(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case"":n+="";break;default:n+=i}}return n}function lf(t){return t+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cf(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function yr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function wg(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(e,n){this.comparator=e,this.root=n||pt.EMPTY}insert(e,n){return new Ge(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,pt.BLACK,null,null))}remove(e){return new Ge(this.comparator,this.root.remove(e,this.comparator).copy(null,null,pt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new vo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new vo(this.root,e,this.comparator,!1)}getReverseIterator(){return new vo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new vo(this.root,e,this.comparator,!0)}}class vo{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class pt{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??pt.RED,this.left=s??pt.EMPTY,this.right=i??pt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new pt(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return pt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return pt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,pt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,pt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw he();const e=this.left.check();if(e!==this.right.check())throw he();return e+(this.isRed()?0:1)}}pt.EMPTY=null,pt.RED=!0,pt.BLACK=!1;pt.EMPTY=new class{constructor(){this.size=0}get key(){throw he()}get value(){throw he()}get color(){throw he()}get left(){throw he()}get right(){throw he()}copy(e,n,r,s,i){return this}insert(e,n,r){return new pt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(e){this.comparator=e,this.data=new Ge(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new uf(this.data.getIterator())}getIteratorFrom(e){return new uf(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof it)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new it(this.comparator);return n.data=e,n}}class uf{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(e){this.fields=e,e.sort(gt.comparator)}static empty(){return new zt([])}unionWith(e){let n=new it(gt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new zt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ts(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class Tg extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Tg("Invalid base64 string: "+i):i}}(e);return new _t(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new _t(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Te(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}_t.EMPTY_BYTE_STRING=new _t("");const Sb=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function hr(t){if(Ne(!!t),typeof t=="string"){let e=0;const n=Sb.exec(t);if(Ne(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Xe(t.seconds),nanos:Xe(t.nanos)}}function Xe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function dr(t){return typeof t=="string"?_t.fromBase64String(t):_t.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uu(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Da(t){const e=t.mapValue.fields.__previous_value__;return uu(e)?Da(e):e}function Ri(t){const e=hr(t.mapValue.fields.__local_write_time__.timestampValue);return new st(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cb{constructor(e,n,r,s,i,o,l,c,h){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=h}}class Si{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Si("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Si&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eo={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function fr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?uu(t)?4:kb(t)?9007199254740991:Pb(t)?10:11:he()}function _n(t,e){if(t===e)return!0;const n=fr(t);if(n!==fr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ri(t).isEqual(Ri(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=hr(s.timestampValue),l=hr(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return dr(s.bytesValue).isEqual(dr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Xe(s.geoPointValue.latitude)===Xe(i.geoPointValue.latitude)&&Xe(s.geoPointValue.longitude)===Xe(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Xe(s.integerValue)===Xe(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Xe(s.doubleValue),l=Xe(i.doubleValue);return o===l?ea(o)===ea(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return Ts(t.arrayValue.values||[],e.arrayValue.values||[],_n);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},l=i.mapValue.fields||{};if(cf(o)!==cf(l))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(l[c]===void 0||!_n(o[c],l[c])))return!1;return!0}(t,e);default:return he()}}function Ci(t,e){return(t.values||[]).find(n=>_n(n,e))!==void 0}function Is(t,e){if(t===e)return 0;const n=fr(t),r=fr(e);if(n!==r)return Te(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Te(t.booleanValue,e.booleanValue);case 2:return function(i,o){const l=Xe(i.integerValue||i.doubleValue),c=Xe(o.integerValue||o.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(t,e);case 3:return hf(t.timestampValue,e.timestampValue);case 4:return hf(Ri(t),Ri(e));case 5:return Te(t.stringValue,e.stringValue);case 6:return function(i,o){const l=dr(i),c=dr(o);return l.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const l=i.split("/"),c=o.split("/");for(let h=0;h<l.length&&h<c.length;h++){const d=Te(l[h],c[h]);if(d!==0)return d}return Te(l.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const l=Te(Xe(i.latitude),Xe(o.latitude));return l!==0?l:Te(Xe(i.longitude),Xe(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return df(t.arrayValue,e.arrayValue);case 10:return function(i,o){var l,c,h,d;const p=i.fields||{},m=o.fields||{},_=(l=p.value)===null||l===void 0?void 0:l.arrayValue,I=(c=m.value)===null||c===void 0?void 0:c.arrayValue,S=Te(((h=_==null?void 0:_.values)===null||h===void 0?void 0:h.length)||0,((d=I==null?void 0:I.values)===null||d===void 0?void 0:d.length)||0);return S!==0?S:df(_,I)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===Eo.mapValue&&o===Eo.mapValue)return 0;if(i===Eo.mapValue)return 1;if(o===Eo.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),h=o.fields||{},d=Object.keys(h);c.sort(),d.sort();for(let p=0;p<c.length&&p<d.length;++p){const m=Te(c[p],d[p]);if(m!==0)return m;const _=Is(l[c[p]],h[d[p]]);if(_!==0)return _}return Te(c.length,d.length)}(t.mapValue,e.mapValue);default:throw he()}}function hf(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Te(t,e);const n=hr(t),r=hr(e),s=Te(n.seconds,r.seconds);return s!==0?s:Te(n.nanos,r.nanos)}function df(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=Is(n[s],r[s]);if(i)return i}return Te(n.length,r.length)}function bs(t){return hc(t)}function hc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=hr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return dr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return ie.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=hc(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${hc(n.fields[o])}`;return s+"}"}(t.mapValue):he()}function Oo(t){switch(fr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Da(t);return e?16+Oo(e):16;case 5:return 2*t.stringValue.length;case 6:return dr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+Oo(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return yr(r.fields,(i,o)=>{s+=i.length+Oo(o)}),s}(t.mapValue);default:throw he()}}function ff(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function dc(t){return!!t&&"integerValue"in t}function hu(t){return!!t&&"arrayValue"in t}function pf(t){return!!t&&"nullValue"in t}function mf(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Mo(t){return!!t&&"mapValue"in t}function Pb(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function hi(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return yr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=hi(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=hi(t.arrayValue.values[n]);return e}return Object.assign({},t)}function kb(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(e){this.value=e}static empty(){return new Ft({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Mo(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=hi(n)}setAll(e){let n=gt.emptyPath(),r={},s=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=l.popLast()}o?r[l.lastSegment()]=hi(o):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Mo(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return _n(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Mo(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){yr(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Ft(hi(this.value))}}function Ig(t){const e=[];return yr(t.fields,(n,r)=>{const s=new gt([n]);if(Mo(r)){const i=Ig(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new zt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(e,n,r,s,i,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new St(e,0,pe.min(),pe.min(),pe.min(),Ft.empty(),0)}static newFoundDocument(e,n,r,s){return new St(e,1,n,pe.min(),r,s,0)}static newNoDocument(e,n){return new St(e,2,n,pe.min(),pe.min(),Ft.empty(),0)}static newUnknownDocument(e,n){return new St(e,3,n,pe.min(),pe.min(),Ft.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(pe.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ft.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ft.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=pe.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof St&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new St(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class ta{constructor(e,n){this.position=e,this.inclusive=n}}function gf(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=ie.comparator(ie.fromName(o.referenceValue),n.key):r=Is(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function _f(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!_n(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class na{constructor(e,n="asc"){this.field=e,this.dir=n}}function Db(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class bg{}class tt extends bg{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new Vb(e,n,r):n==="array-contains"?new xb(e,r):n==="in"?new Lb(e,r):n==="not-in"?new Fb(e,r):n==="array-contains-any"?new Ub(e,r):new tt(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new Ob(e,r):new Mb(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Is(n,this.value)):n!==null&&fr(this.value)===fr(n)&&this.matchesComparison(Is(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return he()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class sn extends bg{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new sn(e,n)}matches(e){return Ag(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Ag(t){return t.op==="and"}function Rg(t){return Nb(t)&&Ag(t)}function Nb(t){for(const e of t.filters)if(e instanceof sn)return!1;return!0}function fc(t){if(t instanceof tt)return t.field.canonicalString()+t.op.toString()+bs(t.value);if(Rg(t))return t.filters.map(e=>fc(e)).join(",");{const e=t.filters.map(n=>fc(n)).join(",");return`${t.op}(${e})`}}function Sg(t,e){return t instanceof tt?function(r,s){return s instanceof tt&&r.op===s.op&&r.field.isEqual(s.field)&&_n(r.value,s.value)}(t,e):t instanceof sn?function(r,s){return s instanceof sn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,l)=>i&&Sg(o,s.filters[l]),!0):!1}(t,e):void he()}function Cg(t){return t instanceof tt?function(n){return`${n.field.canonicalString()} ${n.op} ${bs(n.value)}`}(t):t instanceof sn?function(n){return n.op.toString()+" {"+n.getFilters().map(Cg).join(" ,")+"}"}(t):"Filter"}class Vb extends tt{constructor(e,n,r){super(e,n,r),this.key=ie.fromName(r.referenceValue)}matches(e){const n=ie.comparator(e.key,this.key);return this.matchesComparison(n)}}class Ob extends tt{constructor(e,n){super(e,"in",n),this.keys=Pg("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Mb extends tt{constructor(e,n){super(e,"not-in",n),this.keys=Pg("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Pg(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>ie.fromName(r.referenceValue))}class xb extends tt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return hu(n)&&Ci(n.arrayValue,this.value)}}class Lb extends tt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ci(this.value.arrayValue,n)}}class Fb extends tt{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ci(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Ci(this.value.arrayValue,n)}}class Ub extends tt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!hu(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Ci(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $b{constructor(e,n=null,r=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.ue=null}}function yf(t,e=null,n=[],r=[],s=null,i=null,o=null){return new $b(t,e,n,r,s,i,o)}function du(t){const e=me(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>fc(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),ka(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>bs(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>bs(r)).join(",")),e.ue=n}return e.ue}function fu(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Db(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Sg(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!_f(t.startAt,e.startAt)&&_f(t.endAt,e.endAt)}function pc(t){return ie.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{constructor(e,n=null,r=[],s=[],i=null,o="F",l=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=c,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Bb(t,e,n,r,s,i,o,l){return new ji(t,e,n,r,s,i,o,l)}function Na(t){return new ji(t)}function vf(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function kg(t){return t.collectionGroup!==null}function di(t){const e=me(t);if(e.ce===null){e.ce=[];const n=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new it(gt.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.ce.push(new na(i,r))}),n.has(gt.keyField().canonicalString())||e.ce.push(new na(gt.keyField(),r))}return e.ce}function fn(t){const e=me(t);return e.le||(e.le=jb(e,di(t))),e.le}function jb(t,e){if(t.limitType==="F")return yf(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new na(s.field,i)});const n=t.endAt?new ta(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new ta(t.startAt.position,t.startAt.inclusive):null;return yf(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function mc(t,e){const n=t.filters.concat([e]);return new ji(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function gc(t,e,n){return new ji(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Va(t,e){return fu(fn(t),fn(e))&&t.limitType===e.limitType}function Dg(t){return`${du(fn(t))}|lt:${t.limitType}`}function rs(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>Cg(s)).join(", ")}]`),ka(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>bs(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>bs(s)).join(",")),`Target(${r})`}(fn(t))}; limitType=${t.limitType})`}function Oa(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):ie.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of di(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,l,c){const h=gf(o,l,c);return o.inclusive?h<=0:h<0}(r.startAt,di(r),s)||r.endAt&&!function(o,l,c){const h=gf(o,l,c);return o.inclusive?h>=0:h>0}(r.endAt,di(r),s))}(t,e)}function qb(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Ng(t){return(e,n)=>{let r=!1;for(const s of di(t)){const i=Hb(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function Hb(t,e,n){const r=t.field.isKeyField()?ie.comparator(e.key,n.key):function(i,o,l){const c=o.data.field(i),h=l.data.field(i);return c!==null&&h!==null?Is(c,h):he()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return he()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){yr(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return wg(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zb=new Ge(ie.comparator);function xn(){return zb}const Vg=new Ge(ie.comparator);function Zs(...t){let e=Vg;for(const n of t)e=e.insert(n.key,n);return e}function Og(t){let e=Vg;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Pr(){return fi()}function Mg(){return fi()}function fi(){return new jr(t=>t.toString(),(t,e)=>t.isEqual(e))}const Wb=new Ge(ie.comparator),Kb=new it(ie.comparator);function we(...t){let e=Kb;for(const n of t)e=e.add(n);return e}const Gb=new it(Te);function Qb(){return Gb}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pu(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ea(e)?"-0":e}}function xg(t){return{integerValue:""+t}}function Xb(t,e){return bb(e)?xg(e):pu(t,e)}/**
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
 */class Ma{constructor(){this._=void 0}}function Yb(t,e,n){return t instanceof Pi?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&uu(i)&&(i=Da(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof ki?Fg(t,e):t instanceof Di?Ug(t,e):function(s,i){const o=Lg(s,i),l=Ef(o)+Ef(s.Pe);return dc(o)&&dc(s.Pe)?xg(l):pu(s.serializer,l)}(t,e)}function Jb(t,e,n){return t instanceof ki?Fg(t,e):t instanceof Di?Ug(t,e):n}function Lg(t,e){return t instanceof ra?function(r){return dc(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Pi extends Ma{}class ki extends Ma{constructor(e){super(),this.elements=e}}function Fg(t,e){const n=$g(e);for(const r of t.elements)n.some(s=>_n(s,r))||n.push(r);return{arrayValue:{values:n}}}class Di extends Ma{constructor(e){super(),this.elements=e}}function Ug(t,e){let n=$g(e);for(const r of t.elements)n=n.filter(s=>!_n(s,r));return{arrayValue:{values:n}}}class ra extends Ma{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function Ef(t){return Xe(t.integerValue||t.doubleValue)}function $g(t){return hu(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zb{constructor(e,n){this.field=e,this.transform=n}}function eA(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof ki&&s instanceof ki||r instanceof Di&&s instanceof Di?Ts(r.elements,s.elements,_n):r instanceof ra&&s instanceof ra?_n(r.Pe,s.Pe):r instanceof Pi&&s instanceof Pi}(t.transform,e.transform)}class tA{constructor(e,n){this.version=e,this.transformResults=n}}class Ut{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Ut}static exists(e){return new Ut(void 0,e)}static updateTime(e){return new Ut(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function xo(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class xa{}function Bg(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new La(t.key,Ut.none()):new qi(t.key,t.data,Ut.none());{const n=t.data,r=Ft.empty();let s=new it(gt.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new vr(t.key,r,new zt(s.toArray()),Ut.none())}}function nA(t,e,n){t instanceof qi?function(s,i,o){const l=s.value.clone(),c=Tf(s.fieldTransforms,i,o.transformResults);l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof vr?function(s,i,o){if(!xo(s.precondition,i))return void i.convertToUnknownDocument(o.version);const l=Tf(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(jg(s)),c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function pi(t,e,n,r){return t instanceof qi?function(i,o,l,c){if(!xo(i.precondition,o))return l;const h=i.value.clone(),d=If(i.fieldTransforms,c,o);return h.setAll(d),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof vr?function(i,o,l,c){if(!xo(i.precondition,o))return l;const h=If(i.fieldTransforms,c,o),d=o.data;return d.setAll(jg(i)),d.setAll(h),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(i,o,l){return xo(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function rA(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=Lg(r.transform,s||null);i!=null&&(n===null&&(n=Ft.empty()),n.set(r.field,i))}return n||null}function wf(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Ts(r,s,(i,o)=>eA(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class qi extends xa{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class vr extends xa{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function jg(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Tf(t,e,n){const r=new Map;Ne(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,l=e.data.field(i.field);r.set(i.field,Jb(o,l,n[s]))}return r}function If(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,Yb(i,o,e))}return r}class La extends xa{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class sA extends xa{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iA{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&nA(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=pi(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=pi(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Mg();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=n.has(s.key)?null:l;const c=Bg(o,l);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(pe.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),we())}isEqual(e){return this.batchId===e.batchId&&Ts(this.mutations,e.mutations,(n,r)=>wf(n,r))&&Ts(this.baseMutations,e.baseMutations,(n,r)=>wf(n,r))}}class mu{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Ne(e.mutations.length===r.length);let s=function(){return Wb}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new mu(e,n,r,s)}}/**
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
 */class oA{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class aA{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var et,Ae;function lA(t){switch(t){default:return he();case x.CANCELLED:case x.UNKNOWN:case x.DEADLINE_EXCEEDED:case x.RESOURCE_EXHAUSTED:case x.INTERNAL:case x.UNAVAILABLE:case x.UNAUTHENTICATED:return!1;case x.INVALID_ARGUMENT:case x.NOT_FOUND:case x.ALREADY_EXISTS:case x.PERMISSION_DENIED:case x.FAILED_PRECONDITION:case x.ABORTED:case x.OUT_OF_RANGE:case x.UNIMPLEMENTED:case x.DATA_LOSS:return!0}}function qg(t){if(t===void 0)return Mn("GRPC error has no .code"),x.UNKNOWN;switch(t){case et.OK:return x.OK;case et.CANCELLED:return x.CANCELLED;case et.UNKNOWN:return x.UNKNOWN;case et.DEADLINE_EXCEEDED:return x.DEADLINE_EXCEEDED;case et.RESOURCE_EXHAUSTED:return x.RESOURCE_EXHAUSTED;case et.INTERNAL:return x.INTERNAL;case et.UNAVAILABLE:return x.UNAVAILABLE;case et.UNAUTHENTICATED:return x.UNAUTHENTICATED;case et.INVALID_ARGUMENT:return x.INVALID_ARGUMENT;case et.NOT_FOUND:return x.NOT_FOUND;case et.ALREADY_EXISTS:return x.ALREADY_EXISTS;case et.PERMISSION_DENIED:return x.PERMISSION_DENIED;case et.FAILED_PRECONDITION:return x.FAILED_PRECONDITION;case et.ABORTED:return x.ABORTED;case et.OUT_OF_RANGE:return x.OUT_OF_RANGE;case et.UNIMPLEMENTED:return x.UNIMPLEMENTED;case et.DATA_LOSS:return x.DATA_LOSS;default:return he()}}(Ae=et||(et={}))[Ae.OK=0]="OK",Ae[Ae.CANCELLED=1]="CANCELLED",Ae[Ae.UNKNOWN=2]="UNKNOWN",Ae[Ae.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ae[Ae.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ae[Ae.NOT_FOUND=5]="NOT_FOUND",Ae[Ae.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ae[Ae.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ae[Ae.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ae[Ae.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ae[Ae.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ae[Ae.ABORTED=10]="ABORTED",Ae[Ae.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ae[Ae.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ae[Ae.INTERNAL=13]="INTERNAL",Ae[Ae.UNAVAILABLE=14]="UNAVAILABLE",Ae[Ae.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function cA(){return new TextEncoder}/**
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
 */const uA=new Vr([4294967295,4294967295],0);function bf(t){const e=cA().encode(t),n=new fg;return n.update(e),new Uint8Array(n.digest())}function Af(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Vr([n,r],0),new Vr([s,i],0)]}class gu{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new ei(`Invalid padding: ${n}`);if(r<0)throw new ei(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ei(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new ei(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*e.length-n,this.Ie=Vr.fromNumber(this.Te)}Ee(e,n,r){let s=e.add(n.multiply(Vr.fromNumber(r)));return s.compare(uA)===1&&(s=new Vr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Ie).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const n=bf(e),[r,s]=Af(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);if(!this.de(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new gu(i,s,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Te===0)return;const n=bf(e),[r,s]=Af(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class ei extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fa{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Hi.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Fa(pe.min(),s,new Ge(Te),xn(),we())}}class Hi{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Hi(r,n,we(),we(),we())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lo{constructor(e,n,r,s){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=s}}class Hg{constructor(e,n){this.targetId=e,this.me=n}}class zg{constructor(e,n,r=_t.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Rf{constructor(){this.fe=0,this.ge=Sf(),this.pe=_t.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=we(),n=we(),r=we();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:he()}}),new Hi(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=Sf()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Ne(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class hA{constructor(e){this.Le=e,this.Be=new Map,this.ke=xn(),this.qe=wo(),this.Qe=wo(),this.Ke=new Ge(Te)}$e(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.Ue(n,e.Ve):this.We(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.We(n,e.key,e.Ve)}Ge(e){this.forEachTarget(e,n=>{const r=this.ze(n);switch(e.state){case 0:this.je(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.je(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.je(n)&&(this.He(n),r.De(e.resumeToken));break;default:he()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,s)=>{this.je(s)&&n(s)})}Je(e){const n=e.targetId,r=e.me.count,s=this.Ye(n);if(s){const i=s.target;if(pc(i))if(r===0){const o=new ie(i.path);this.We(n,o,St.newNoDocument(o,pe.min()))}else Ne(r===1);else{const o=this.Ze(n);if(o!==r){const l=this.Xe(e),c=l?this.et(l,e,o):1;if(c!==0){this.He(n);const h=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,h)}}}}}Xe(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,l;try{o=dr(r).toUint8Array()}catch(c){if(c instanceof Tg)return ws("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new gu(o,s,i)}catch(c){return ws(c instanceof ei?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.Te===0?null:l}et(e,n,r){return n.me.count===r-this.rt(e,n.targetId)?0:2}rt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Le.nt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.We(n,i,null),s++)}),s}it(e){const n=new Map;this.Be.forEach((i,o)=>{const l=this.Ye(o);if(l){if(i.current&&pc(l.target)){const c=new ie(l.target.path);this.st(c).has(o)||this.ot(o,c)||this.We(o,c,St.newNoDocument(c,e))}i.be&&(n.set(o,i.ve()),i.Ce())}});let r=we();this.Qe.forEach((i,o)=>{let l=!0;o.forEachWhile(c=>{const h=this.Ye(c);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.ke.forEach((i,o)=>o.setReadTime(e));const s=new Fa(e,n,this.Ke,this.ke,r);return this.ke=xn(),this.qe=wo(),this.Qe=wo(),this.Ke=new Ge(Te),s}Ue(e,n){if(!this.je(e))return;const r=this.ot(e,n.key)?2:0;this.ze(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e)),this.Qe=this.Qe.insert(n.key,this._t(n.key).add(e))}We(e,n,r){if(!this.je(e))return;const s=this.ze(e);this.ot(e,n)?s.Fe(n,1):s.Me(n),this.Qe=this.Qe.insert(n,this._t(n).delete(e)),this.Qe=this.Qe.insert(n,this._t(n).add(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ze(e){const n=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.ze(e).xe()}ze(e){let n=this.Be.get(e);return n||(n=new Rf,this.Be.set(e,n)),n}_t(e){let n=this.Qe.get(e);return n||(n=new it(Te),this.Qe=this.Qe.insert(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new it(Te),this.qe=this.qe.insert(e,n)),n}je(e){const n=this.Ye(e)!==null;return n||Z("WatchChangeAggregator","Detected inactive target",e),n}Ye(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ut(e)}He(e){this.Be.set(e,new Rf),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.We(e,n,null)})}ot(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function wo(){return new Ge(ie.comparator)}function Sf(){return new Ge(ie.comparator)}const dA={asc:"ASCENDING",desc:"DESCENDING"},fA={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},pA={and:"AND",or:"OR"};class mA{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function _c(t,e){return t.useProto3Json||ka(e)?e:{value:e}}function sa(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Wg(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function gA(t,e){return sa(t,e.toTimestamp())}function pn(t){return Ne(!!t),pe.fromTimestamp(function(n){const r=hr(n);return new st(r.seconds,r.nanos)}(t))}function _u(t,e){return yc(t,e).canonicalString()}function yc(t,e){const n=function(s){return new je(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function Kg(t){const e=je.fromString(t);return Ne(Jg(e)),e}function vc(t,e){return _u(t.databaseId,e.path)}function Vl(t,e){const n=Kg(e);if(n.get(1)!==t.databaseId.projectId)throw new ee(x.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new ee(x.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ie(Qg(n))}function Gg(t,e){return _u(t.databaseId,e)}function _A(t){const e=Kg(t);return e.length===4?je.emptyPath():Qg(e)}function Ec(t){return new je(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Qg(t){return Ne(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Cf(t,e,n){return{name:vc(t,e),fields:n.value.mapValue.fields}}function yA(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:he()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,d){return h.useProto3Json?(Ne(d===void 0||typeof d=="string"),_t.fromBase64String(d||"")):(Ne(d===void 0||d instanceof Buffer||d instanceof Uint8Array),_t.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(h){const d=h.code===void 0?x.UNKNOWN:qg(h.code);return new ee(d,h.message||"")}(o);n=new zg(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Vl(t,r.document.name),i=pn(r.document.updateTime),o=r.document.createTime?pn(r.document.createTime):pe.min(),l=new Ft({mapValue:{fields:r.document.fields}}),c=St.newFoundDocument(s,i,o,l),h=r.targetIds||[],d=r.removedTargetIds||[];n=new Lo(h,d,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Vl(t,r.document),i=r.readTime?pn(r.readTime):pe.min(),o=St.newNoDocument(s,i),l=r.removedTargetIds||[];n=new Lo([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Vl(t,r.document),i=r.removedTargetIds||[];n=new Lo([],i,s,null)}else{if(!("filter"in e))return he();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new aA(s,i),l=r.targetId;n=new Hg(l,o)}}return n}function vA(t,e){let n;if(e instanceof qi)n={update:Cf(t,e.key,e.value)};else if(e instanceof La)n={delete:vc(t,e.key)};else if(e instanceof vr)n={update:Cf(t,e.key,e.data),updateMask:CA(e.fieldMask)};else{if(!(e instanceof sA))return he();n={verify:vc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const l=o.transform;if(l instanceof Pi)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof ki)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Di)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof ra)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw he()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:gA(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:he()}(t,e.precondition)),n}function EA(t,e){return t&&t.length>0?(Ne(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?pn(s.updateTime):pn(i);return o.isEqual(pe.min())&&(o=pn(i)),new tA(o,s.transformResults||[])}(n,e))):[]}function wA(t,e){return{documents:[Gg(t,e.path)]}}function TA(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Gg(t,s);const i=function(h){if(h.length!==0)return Yg(sn.create(h,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(h){if(h.length!==0)return h.map(d=>function(m){return{field:ss(m.field),direction:AA(m.dir)}}(d))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=_c(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{ct:n,parent:s}}function IA(t){let e=_A(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Ne(r===1);const d=n.from[0];d.allDescendants?s=d.collectionId:e=e.child(d.collectionId)}let i=[];n.where&&(i=function(p){const m=Xg(p);return m instanceof sn&&Rg(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(m=>function(I){return new na(is(I.field),function(P){switch(P){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(I.direction))}(m))}(n.orderBy));let l=null;n.limit&&(l=function(p){let m;return m=typeof p=="object"?p.value:p,ka(m)?null:m}(n.limit));let c=null;n.startAt&&(c=function(p){const m=!!p.before,_=p.values||[];return new ta(_,m)}(n.startAt));let h=null;return n.endAt&&(h=function(p){const m=!p.before,_=p.values||[];return new ta(_,m)}(n.endAt)),Bb(e,s,o,i,l,"F",c,h)}function bA(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return he()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Xg(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=is(n.unaryFilter.field);return tt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=is(n.unaryFilter.field);return tt.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=is(n.unaryFilter.field);return tt.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=is(n.unaryFilter.field);return tt.create(o,"!=",{nullValue:"NULL_VALUE"});default:return he()}}(t):t.fieldFilter!==void 0?function(n){return tt.create(is(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return he()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return sn.create(n.compositeFilter.filters.map(r=>Xg(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return he()}}(n.compositeFilter.op))}(t):he()}function AA(t){return dA[t]}function RA(t){return fA[t]}function SA(t){return pA[t]}function ss(t){return{fieldPath:t.canonicalString()}}function is(t){return gt.fromServerFormat(t.fieldPath)}function Yg(t){return t instanceof tt?function(n){if(n.op==="=="){if(mf(n.value))return{unaryFilter:{field:ss(n.field),op:"IS_NAN"}};if(pf(n.value))return{unaryFilter:{field:ss(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(mf(n.value))return{unaryFilter:{field:ss(n.field),op:"IS_NOT_NAN"}};if(pf(n.value))return{unaryFilter:{field:ss(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ss(n.field),op:RA(n.op),value:n.value}}}(t):t instanceof sn?function(n){const r=n.getFilters().map(s=>Yg(s));return r.length===1?r[0]:{compositeFilter:{op:SA(n.op),filters:r}}}(t):he()}function CA(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Jg(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr{constructor(e,n,r,s,i=pe.min(),o=pe.min(),l=_t.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new tr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new tr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new tr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new tr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PA{constructor(e){this.ht=e}}function kA(t){const e=IA({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?gc(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DA{constructor(){this.ln=new NA}addToCollectionParentIndex(e,n){return this.ln.add(n),L.resolve()}getCollectionParents(e,n){return L.resolve(this.ln.getEntries(n))}addFieldIndex(e,n){return L.resolve()}deleteFieldIndex(e,n){return L.resolve()}deleteAllFieldIndexes(e){return L.resolve()}createTargetIndexes(e,n){return L.resolve()}getDocumentsMatchingTarget(e,n){return L.resolve(null)}getIndexType(e,n){return L.resolve(0)}getFieldIndexes(e,n){return L.resolve([])}getNextCollectionGroupToUpdate(e){return L.resolve(null)}getMinOffset(e,n){return L.resolve(ur.min())}getMinOffsetFromCollectionGroup(e,n){return L.resolve(ur.min())}updateCollectionGroup(e,n,r){return L.resolve()}updateIndexEntries(e,n){return L.resolve()}}class NA{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new it(je.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new it(je.comparator)).toArray()}}/**
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
 */const Pf={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Lt{static withCacheSize(e){return new Lt(e,Lt.DEFAULT_COLLECTION_PERCENTILE,Lt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Lt.DEFAULT_COLLECTION_PERCENTILE=10,Lt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Lt.DEFAULT=new Lt(41943040,Lt.DEFAULT_COLLECTION_PERCENTILE,Lt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Lt.DISABLED=new Lt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As{constructor(e){this.kn=e}next(){return this.kn+=2,this.kn}static qn(){return new As(0)}static Qn(){return new As(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kf([t,e],[n,r]){const s=Te(t,n);return s===0?Te(e,r):s}class VA{constructor(e){this.Gn=e,this.buffer=new it(kf),this.zn=0}jn(){return++this.zn}Hn(e){const n=[e,this.jn()];if(this.buffer.size<this.Gn)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();kf(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class OA{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Yn(6e4)}stop(){this.Jn&&(this.Jn.cancel(),this.Jn=null)}get started(){return this.Jn!==null}Yn(e){Z("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Ns(n)?Z("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",n):await Ds(n)}await this.Yn(3e5)})}}class MA{constructor(e,n){this.Zn=e,this.params=n}calculateTargetCount(e,n){return this.Zn.Xn(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return L.resolve(Pa.oe);const r=new VA(n);return this.Zn.forEachTarget(e,s=>r.Hn(s.sequenceNumber)).next(()=>this.Zn.er(e,s=>r.Hn(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Zn.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Zn.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(Z("LruGarbageCollector","Garbage collection skipped; disabled"),L.resolve(Pf)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(Z("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Pf):this.tr(e,n))}getCacheSize(e){return this.Zn.getCacheSize(e)}tr(e,n){let r,s,i,o,l,c,h;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(Z("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,o=Date.now(),this.nthSequenceNumber(e,s))).next(p=>(r=p,l=Date.now(),this.removeTargets(e,r,n))).next(p=>(i=p,c=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(h=Date.now(),ns()<=Ee.DEBUG&&Z("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-d}ms
	Determined least recently used ${s} in `+(l-o)+`ms
	Removed ${i} targets in `+(c-l)+`ms
	Removed ${p} documents in `+(h-c)+`ms
Total Duration: ${h-d}ms`),L.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p})))}}function xA(t,e){return new MA(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LA{constructor(){this.changes=new jr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,St.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?L.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class FA{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UA{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&pi(r.mutation,s,zt.empty(),st.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,we()).next(()=>r))}getLocalViewOfDocuments(e,n,r=we()){const s=Pr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=Zs();return i.forEach((l,c)=>{o=o.insert(l,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Pr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,we()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,s){let i=xn();const o=fi(),l=function(){return fi()}();return n.forEach((c,h)=>{const d=r.get(h.key);s.has(h.key)&&(d===void 0||d.mutation instanceof vr)?i=i.insert(h.key,h):d!==void 0?(o.set(h.key,d.mutation.getFieldMask()),pi(d.mutation,h,d.mutation.getFieldMask(),st.now())):o.set(h.key,zt.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((h,d)=>o.set(h,d)),n.forEach((h,d)=>{var p;return l.set(h,new FA(d,(p=o.get(h))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(e,n){const r=fi();let s=new Ge((o,l)=>o-l),i=we();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(c=>{const h=n.get(c);if(h===null)return;let d=r.get(c)||zt.empty();d=l.applyToLocalView(h,d),r.set(c,d);const p=(s.get(l.batchId)||we()).add(c);s=s.insert(l.batchId,p)})}).next(()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),h=c.key,d=c.value,p=Mg();d.forEach(m=>{if(!i.has(m)){const _=Bg(n.get(m),r.get(m));_!==null&&p.set(m,_),i=i.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,p))}return L.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return ie.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):kg(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):L.resolve(Pr());let l=-1,c=i;return o.next(h=>L.forEach(h,(d,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),i.get(d)?L.resolve():this.remoteDocumentCache.getEntry(e,d).next(m=>{c=c.insert(d,m)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,c,h,we())).next(d=>({batchId:l,changes:Og(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ie(n)).next(r=>{let s=Zs();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=Zs();return this.indexManager.getCollectionParents(e,i).next(l=>L.forEach(l,c=>{const h=function(p,m){return new ji(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next(d=>{d.forEach((p,m)=>{o=o.insert(p,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((c,h)=>{const d=h.getKey();o.get(d)===null&&(o=o.insert(d,St.newInvalidDocument(d)))});let l=Zs();return o.forEach((c,h)=>{const d=i.get(c);d!==void 0&&pi(d.mutation,h,zt.empty(),st.now()),Oa(n,h)&&(l=l.insert(c,h))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $A{constructor(e){this.serializer=e,this.Tr=new Map,this.Ir=new Map}getBundleMetadata(e,n){return L.resolve(this.Tr.get(n))}saveBundleMetadata(e,n){return this.Tr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:pn(s.createTime)}}(n)),L.resolve()}getNamedQuery(e,n){return L.resolve(this.Ir.get(n))}saveNamedQuery(e,n){return this.Ir.set(n.name,function(s){return{name:s.name,query:kA(s.bundledQuery),readTime:pn(s.readTime)}}(n)),L.resolve()}}/**
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
 */class BA{constructor(){this.overlays=new Ge(ie.comparator),this.Er=new Map}getOverlay(e,n){return L.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Pr();return L.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.Tt(e,n,i)}),L.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Er.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Er.delete(r)),L.resolve()}getOverlaysForCollection(e,n,r){const s=Pr(),i=n.length+1,o=new ie(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const c=l.getNext().value,h=c.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return L.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Ge((h,d)=>h-d);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let d=i.get(h.largestBatchId);d===null&&(d=Pr(),i=i.insert(h.largestBatchId,d)),d.set(h.getKey(),h)}}const l=Pr(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((h,d)=>l.set(h,d)),!(l.size()>=s)););return L.resolve(l)}Tt(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Er.get(s.largestBatchId).delete(r.key);this.Er.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new oA(n,r));let i=this.Er.get(n);i===void 0&&(i=we(),this.Er.set(n,i)),this.Er.set(n,i.add(r.key))}}/**
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
 */class jA{constructor(){this.sessionToken=_t.EMPTY_BYTE_STRING}getSessionToken(e){return L.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,L.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yu{constructor(){this.dr=new it(at.Ar),this.Rr=new it(at.Vr)}isEmpty(){return this.dr.isEmpty()}addReference(e,n){const r=new at(e,n);this.dr=this.dr.add(r),this.Rr=this.Rr.add(r)}mr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.gr(new at(e,n))}pr(e,n){e.forEach(r=>this.removeReference(r,n))}yr(e){const n=new ie(new je([])),r=new at(n,e),s=new at(n,e+1),i=[];return this.Rr.forEachInRange([r,s],o=>{this.gr(o),i.push(o.key)}),i}wr(){this.dr.forEach(e=>this.gr(e))}gr(e){this.dr=this.dr.delete(e),this.Rr=this.Rr.delete(e)}Sr(e){const n=new ie(new je([])),r=new at(n,e),s=new at(n,e+1);let i=we();return this.Rr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new at(e,0),r=this.dr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class at{constructor(e,n){this.key=e,this.br=n}static Ar(e,n){return ie.comparator(e.key,n.key)||Te(e.br,n.br)}static Vr(e,n){return Te(e.br,n.br)||ie.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qA{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Dr=1,this.vr=new it(at.Ar)}checkEmpty(e){return L.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Dr;this.Dr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new iA(i,n,r,s);this.mutationQueue.push(o);for(const l of s)this.vr=this.vr.add(new at(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return L.resolve(o)}lookupMutationBatch(e,n){return L.resolve(this.Cr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Fr(r),i=s<0?0:s;return L.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return L.resolve(this.mutationQueue.length===0?-1:this.Dr-1)}getAllMutationBatches(e){return L.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new at(n,0),s=new at(n,Number.POSITIVE_INFINITY),i=[];return this.vr.forEachInRange([r,s],o=>{const l=this.Cr(o.br);i.push(l)}),L.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new it(Te);return n.forEach(s=>{const i=new at(s,0),o=new at(s,Number.POSITIVE_INFINITY);this.vr.forEachInRange([i,o],l=>{r=r.add(l.br)})}),L.resolve(this.Mr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;ie.isDocumentKey(i)||(i=i.child(""));const o=new at(new ie(i),0);let l=new it(Te);return this.vr.forEachWhile(c=>{const h=c.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(l=l.add(c.br)),!0)},o),L.resolve(this.Mr(l))}Mr(e){const n=[];return e.forEach(r=>{const s=this.Cr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Ne(this.Or(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.vr;return L.forEach(n.mutations,s=>{const i=new at(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.vr=r})}Ln(e){}containsKey(e,n){const r=new at(n,0),s=this.vr.firstAfterOrEqual(r);return L.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,L.resolve()}Or(e,n){return this.Fr(e)}Fr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Cr(e){const n=this.Fr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HA{constructor(e){this.Nr=e,this.docs=function(){return new Ge(ie.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Nr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return L.resolve(r?r.document.mutableCopy():St.newInvalidDocument(n))}getEntries(e,n){let r=xn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():St.newInvalidDocument(s))}),L.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=xn();const o=n.path,l=new ie(o.child("")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:h,value:{document:d}}=c.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||Eb(vb(d),r)<=0||(s.has(d.key)||Oa(n,d))&&(i=i.insert(d.key,d.mutableCopy()))}return L.resolve(i)}getAllFromCollectionGroup(e,n,r,s){he()}Lr(e,n){return L.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new zA(this)}getSize(e){return L.resolve(this.size)}}class zA extends LA{constructor(e){super(),this.hr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.hr.addEntry(e,s)):this.hr.removeEntry(r)}),L.waitFor(n)}getFromCache(e,n){return this.hr.getEntry(e,n)}getAllFromCache(e,n){return this.hr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WA{constructor(e){this.persistence=e,this.Br=new jr(n=>du(n),fu),this.lastRemoteSnapshotVersion=pe.min(),this.highestTargetId=0,this.kr=0,this.qr=new yu,this.targetCount=0,this.Qr=As.qn()}forEachTarget(e,n){return this.Br.forEach((r,s)=>n(s)),L.resolve()}getLastRemoteSnapshotVersion(e){return L.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return L.resolve(this.kr)}allocateTargetId(e){return this.highestTargetId=this.Qr.next(),L.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.kr&&(this.kr=n),L.resolve()}Un(e){this.Br.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Qr=new As(n),this.highestTargetId=n),e.sequenceNumber>this.kr&&(this.kr=e.sequenceNumber)}addTargetData(e,n){return this.Un(n),this.targetCount+=1,L.resolve()}updateTargetData(e,n){return this.Un(n),L.resolve()}removeTargetData(e,n){return this.Br.delete(n.target),this.qr.yr(n.targetId),this.targetCount-=1,L.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Br.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Br.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),L.waitFor(i).next(()=>s)}getTargetCount(e){return L.resolve(this.targetCount)}getTargetData(e,n){const r=this.Br.get(n)||null;return L.resolve(r)}addMatchingKeys(e,n,r){return this.qr.mr(n,r),L.resolve()}removeMatchingKeys(e,n,r){this.qr.pr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),L.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.qr.yr(n),L.resolve()}getMatchingKeysForTargetId(e,n){const r=this.qr.Sr(n);return L.resolve(r)}containsKey(e,n){return L.resolve(this.qr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zg{constructor(e,n){this.Kr={},this.overlays={},this.$r=new Pa(0),this.Ur=!1,this.Ur=!0,this.Wr=new jA,this.referenceDelegate=e(this),this.Gr=new WA(this),this.indexManager=new DA,this.remoteDocumentCache=function(s){return new HA(s)}(r=>this.referenceDelegate.zr(r)),this.serializer=new PA(n),this.jr=new $A(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ur=!1,Promise.resolve()}get started(){return this.Ur}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new BA,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Kr[e.toKey()];return r||(r=new qA(n,this.referenceDelegate),this.Kr[e.toKey()]=r),r}getGlobalsCache(){return this.Wr}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.jr}runTransaction(e,n,r){Z("MemoryPersistence","Starting transaction:",e);const s=new KA(this.$r.next());return this.referenceDelegate.Hr(),r(s).next(i=>this.referenceDelegate.Jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Yr(e,n){return L.or(Object.values(this.Kr).map(r=>()=>r.containsKey(e,n)))}}class KA extends Tb{constructor(e){super(),this.currentSequenceNumber=e}}class vu{constructor(e){this.persistence=e,this.Zr=new yu,this.Xr=null}static ei(e){return new vu(e)}get ti(){if(this.Xr)return this.Xr;throw he()}addReference(e,n,r){return this.Zr.addReference(r,n),this.ti.delete(r.toString()),L.resolve()}removeReference(e,n,r){return this.Zr.removeReference(r,n),this.ti.add(r.toString()),L.resolve()}markPotentiallyOrphaned(e,n){return this.ti.add(n.toString()),L.resolve()}removeTarget(e,n){this.Zr.yr(n.targetId).forEach(s=>this.ti.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.ti.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Hr(){this.Xr=new Set}Jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return L.forEach(this.ti,r=>{const s=ie.fromPath(r);return this.ni(e,s).next(i=>{i||n.removeEntry(s,pe.min())})}).next(()=>(this.Xr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ni(e,n).next(r=>{r?this.ti.delete(n.toString()):this.ti.add(n.toString())})}zr(e){return 0}ni(e,n){return L.or([()=>L.resolve(this.Zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Yr(e,n)])}}class ia{constructor(e,n){this.persistence=e,this.ri=new jr(r=>Ab(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=xA(this,n)}static ei(e,n){return new ia(e,n)}Hr(){}Jr(e){return L.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}Xn(e){const n=this.nr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}nr(e){let n=0;return this.er(e,r=>{n++}).next(()=>n)}er(e,n){return L.forEach(this.ri,(r,s)=>this.ir(e,r,s).next(i=>i?L.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.Lr(e,o=>this.ir(e,o,n).next(l=>{l||(r++,i.removeEntry(o,pe.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.ri.set(n,e.currentSequenceNumber),L.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.ri.set(r,e.currentSequenceNumber),L.resolve()}removeReference(e,n,r){return this.ri.set(r,e.currentSequenceNumber),L.resolve()}updateLimboDocument(e,n){return this.ri.set(n,e.currentSequenceNumber),L.resolve()}zr(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Oo(e.data.value)),n}ir(e,n,r){return L.or([()=>this.persistence.Yr(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.ri.get(n);return L.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eu{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Wi=r,this.Gi=s}static zi(e,n){let r=we(),s=we();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Eu(e,n.fromCache,r,s)}}/**
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
 */class GA{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QA{constructor(){this.ji=!1,this.Hi=!1,this.Ji=100,this.Yi=function(){return Vw()?8:Ib(Ct())>0?6:4}()}initialize(e,n){this.Zi=e,this.indexManager=n,this.ji=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.Xi(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.es(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new GA;return this.ts(e,n,o).next(l=>{if(i.result=l,this.Hi)return this.ns(e,n,o,l.size)})}).next(()=>i.result)}ns(e,n,r,s){return r.documentReadCount<this.Ji?(ns()<=Ee.DEBUG&&Z("QueryEngine","SDK will not create cache indexes for query:",rs(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Ji,"documents"),L.resolve()):(ns()<=Ee.DEBUG&&Z("QueryEngine","Query:",rs(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Yi*s?(ns()<=Ee.DEBUG&&Z("QueryEngine","The SDK decides to create cache indexes for query:",rs(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,fn(n))):L.resolve())}Xi(e,n){if(vf(n))return L.resolve(null);let r=fn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=gc(n,null,"F"),r=fn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=we(...i);return this.Zi.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(c=>{const h=this.rs(n,l);return this.ss(n,h,o,c.readTime)?this.Xi(e,gc(n,null,"F")):this.os(e,h,n,c)}))})))}es(e,n,r,s){return vf(n)||s.isEqual(pe.min())?L.resolve(null):this.Zi.getDocuments(e,r).next(i=>{const o=this.rs(n,i);return this.ss(n,o,r,s)?L.resolve(null):(ns()<=Ee.DEBUG&&Z("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),rs(n)),this.os(e,o,n,yb(s,-1)).next(l=>l))})}rs(e,n){let r=new it(Ng(e));return n.forEach((s,i)=>{Oa(e,i)&&(r=r.add(i))}),r}ss(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ts(e,n,r){return ns()<=Ee.DEBUG&&Z("QueryEngine","Using full collection scan to execute query:",rs(n)),this.Zi.getDocumentsMatchingQuery(e,n,ur.min(),r)}os(e,n,r,s){return this.Zi.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XA{constructor(e,n,r,s){this.persistence=e,this._s=n,this.serializer=s,this.us=new Ge(Te),this.cs=new jr(i=>du(i),fu),this.ls=new Map,this.hs=e.getRemoteDocumentCache(),this.Gr=e.getTargetCache(),this.jr=e.getBundleCache(),this.Ps(r)}Ps(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new UA(this.hs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.hs.setIndexManager(this.indexManager),this._s.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.us))}}function YA(t,e,n,r){return new XA(t,e,n,r)}async function e_(t,e){const n=me(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Ps(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],l=[];let c=we();for(const h of s){o.push(h.batchId);for(const d of h.mutations)c=c.add(d.key)}for(const h of i){l.push(h.batchId);for(const d of h.mutations)c=c.add(d.key)}return n.localDocuments.getDocuments(r,c).next(h=>({Ts:h,removedBatchIds:o,addedBatchIds:l}))})})}function JA(t,e){const n=me(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.hs.newChangeBuffer({trackRemovals:!0});return function(l,c,h,d){const p=h.batch,m=p.keys();let _=L.resolve();return m.forEach(I=>{_=_.next(()=>d.getEntry(c,I)).next(S=>{const P=h.docVersions.get(I);Ne(P!==null),S.version.compareTo(P)<0&&(p.applyToRemoteDocument(S,h),S.isValidDocument()&&(S.setReadTime(h.commitVersion),d.addEntry(S)))})}),_.next(()=>l.mutationQueue.removeMutationBatch(c,p))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let c=we();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(c=c.add(l.batch.mutations[h].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function t_(t){const e=me(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Gr.getLastRemoteSnapshotVersion(n))}function ZA(t,e){const n=me(t),r=e.snapshotVersion;let s=n.us;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.hs.newChangeBuffer({trackRemovals:!0});s=n.us;const l=[];e.targetChanges.forEach((d,p)=>{const m=s.get(p);if(!m)return;l.push(n.Gr.removeMatchingKeys(i,d.removedDocuments,p).next(()=>n.Gr.addMatchingKeys(i,d.addedDocuments,p)));let _=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?_=_.withResumeToken(_t.EMPTY_BYTE_STRING,pe.min()).withLastLimboFreeSnapshotVersion(pe.min()):d.resumeToken.approximateByteSize()>0&&(_=_.withResumeToken(d.resumeToken,r)),s=s.insert(p,_),function(S,P,V){return S.resumeToken.approximateByteSize()===0||P.snapshotVersion.toMicroseconds()-S.snapshotVersion.toMicroseconds()>=3e8?!0:V.addedDocuments.size+V.modifiedDocuments.size+V.removedDocuments.size>0}(m,_,d)&&l.push(n.Gr.updateTargetData(i,_))});let c=xn(),h=we();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,d))}),l.push(eR(i,o,e.documentUpdates).next(d=>{c=d.Is,h=d.Es})),!r.isEqual(pe.min())){const d=n.Gr.getLastRemoteSnapshotVersion(i).next(p=>n.Gr.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(d)}return L.waitFor(l).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,h)).next(()=>c)}).then(i=>(n.us=s,i))}function eR(t,e,n){let r=we(),s=we();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=xn();return n.forEach((l,c)=>{const h=i.get(l);c.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(l)),c.isNoDocument()&&c.version.isEqual(pe.min())?(e.removeEntry(l,c.readTime),o=o.insert(l,c)):!h.isValidDocument()||c.version.compareTo(h.version)>0||c.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(c),o=o.insert(l,c)):Z("LocalStore","Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",c.version)}),{Is:o,Es:s}})}function tR(t,e){const n=me(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function nR(t,e){const n=me(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Gr.getTargetData(r,e).next(i=>i?(s=i,L.resolve(s)):n.Gr.allocateTargetId(r).next(o=>(s=new tr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Gr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.us.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.us=n.us.insert(r.targetId,r),n.cs.set(e,r.targetId)),r})}async function wc(t,e,n){const r=me(t),s=r.us.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Ns(o))throw o;Z("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.us=r.us.remove(e),r.cs.delete(s.target)}function Df(t,e,n){const r=me(t);let s=pe.min(),i=we();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,h,d){const p=me(c),m=p.cs.get(d);return m!==void 0?L.resolve(p.us.get(m)):p.Gr.getTargetData(h,d)}(r,o,fn(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Gr.getMatchingKeysForTargetId(o,l.targetId).next(c=>{i=c})}).next(()=>r._s.getDocumentsMatchingQuery(o,e,n?s:pe.min(),n?i:we())).next(l=>(rR(r,qb(e),l),{documents:l,ds:i})))}function rR(t,e,n){let r=t.ls.get(e)||pe.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.ls.set(e,r)}class Nf{constructor(){this.activeTargetIds=Qb()}ps(e){this.activeTargetIds=this.activeTargetIds.add(e)}ys(e){this.activeTargetIds=this.activeTargetIds.delete(e)}gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class sR{constructor(){this._o=new Nf,this.ao={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this._o.ps(e),this.ao[e]||"not-current"}updateQueryState(e,n,r){this.ao[e]=n}removeLocalQueryTarget(e){this._o.ys(e)}isLocalQueryTarget(e){return this._o.activeTargetIds.has(e)}clearQueryState(e){delete this.ao[e]}getAllActiveQueryTargets(){return this._o.activeTargetIds}isActiveQueryTarget(e){return this._o.activeTargetIds.has(e)}start(){return this._o=new Nf,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iR{uo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vf{constructor(){this.co=()=>this.lo(),this.ho=()=>this.Po(),this.To=[],this.Io()}uo(e){this.To.push(e)}shutdown(){window.removeEventListener("online",this.co),window.removeEventListener("offline",this.ho)}Io(){window.addEventListener("online",this.co),window.addEventListener("offline",this.ho)}lo(){Z("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.To)e(0)}Po(){Z("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.To)e(1)}static p(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let To=null;function Ol(){return To===null?To=function(){return 268435456+Math.round(2147483648*Math.random())}():To++,"0x"+To.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oR={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aR{constructor(e){this.Eo=e.Eo,this.Ao=e.Ao}Ro(e){this.Vo=e}mo(e){this.fo=e}po(e){this.yo=e}onMessage(e){this.wo=e}close(){this.Ao()}send(e){this.Eo(e)}So(){this.Vo()}bo(){this.fo()}Do(e){this.yo(e)}vo(e){this.wo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const It="WebChannelConnection";class lR extends class{get Co(){return!1}constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Fo=r+"://"+n.host,this.Mo=`projects/${s}/databases/${i}`,this.xo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}Oo(n,r,s,i,o){const l=Ol(),c=this.No(n,r.toUriEncodedString());Z("RestConnection",`Sending RPC '${n}' ${l}:`,c,s);const h={"google-cloud-resource-prefix":this.Mo,"x-goog-request-params":this.xo};return this.Lo(h,i,o),this.Bo(n,c,h,s).then(d=>(Z("RestConnection",`Received RPC '${n}' ${l}: `,d),d),d=>{throw ws("RestConnection",`RPC '${n}' ${l} failed with error: `,d,"url: ",c,"request:",s),d})}ko(n,r,s,i,o,l){return this.Oo(n,r,s,i,o)}Lo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ks}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}No(n,r){const s=oR[n];return`${this.Fo}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Bo(e,n,r,s){const i=Ol();return new Promise((o,l)=>{const c=new pg;c.setWithCredentials(!0),c.listenOnce(mg.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Vo.NO_ERROR:const d=c.getResponseJson();Z(It,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(d)),o(d);break;case Vo.TIMEOUT:Z(It,`RPC '${e}' ${i} timed out`),l(new ee(x.DEADLINE_EXCEEDED,"Request time out"));break;case Vo.HTTP_ERROR:const p=c.getStatus();if(Z(It,`RPC '${e}' ${i} failed with status:`,p,"response text:",c.getResponseText()),p>0){let m=c.getResponseJson();Array.isArray(m)&&(m=m[0]);const _=m==null?void 0:m.error;if(_&&_.status&&_.message){const I=function(P){const V=P.toLowerCase().replace(/_/g,"-");return Object.values(x).indexOf(V)>=0?V:x.UNKNOWN}(_.status);l(new ee(I,_.message))}else l(new ee(x.UNKNOWN,"Server responded with status "+c.getStatus()))}else l(new ee(x.UNAVAILABLE,"Connection failed."));break;default:he()}}finally{Z(It,`RPC '${e}' ${i} completed.`)}});const h=JSON.stringify(s);Z(It,`RPC '${e}' ${i} sending request:`,s),c.send(n,"POST",h,r,15)})}qo(e,n,r){const s=Ol(),i=[this.Fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=yg(),l=_g(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(c.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Lo(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const d=i.join("");Z(It,`Creating RPC '${e}' stream ${s}: ${d}`,c);const p=o.createWebChannel(d,c);let m=!1,_=!1;const I=new aR({Eo:P=>{_?Z(It,`Not sending because RPC '${e}' stream ${s} is closed:`,P):(m||(Z(It,`Opening RPC '${e}' stream ${s} transport.`),p.open(),m=!0),Z(It,`RPC '${e}' stream ${s} sending:`,P),p.send(P))},Ao:()=>p.close()}),S=(P,V,F)=>{P.listen(V,j=>{try{F(j)}catch(q){setTimeout(()=>{throw q},0)}})};return S(p,Js.EventType.OPEN,()=>{_||(Z(It,`RPC '${e}' stream ${s} transport opened.`),I.So())}),S(p,Js.EventType.CLOSE,()=>{_||(_=!0,Z(It,`RPC '${e}' stream ${s} transport closed`),I.Do())}),S(p,Js.EventType.ERROR,P=>{_||(_=!0,ws(It,`RPC '${e}' stream ${s} transport errored:`,P),I.Do(new ee(x.UNAVAILABLE,"The operation could not be completed")))}),S(p,Js.EventType.MESSAGE,P=>{var V;if(!_){const F=P.data[0];Ne(!!F);const j=F,q=(j==null?void 0:j.error)||((V=j[0])===null||V===void 0?void 0:V.error);if(q){Z(It,`RPC '${e}' stream ${s} received error:`,q);const oe=q.status;let ye=function(E){const b=et[E];if(b!==void 0)return qg(b)}(oe),A=q.message;ye===void 0&&(ye=x.INTERNAL,A="Unknown error status: "+oe+" with message "+q.message),_=!0,I.Do(new ee(ye,A)),p.close()}else Z(It,`RPC '${e}' stream ${s} received:`,F),I.vo(F)}}),S(l,gg.STAT_EVENT,P=>{P.stat===uc.PROXY?Z(It,`RPC '${e}' stream ${s} detected buffering proxy`):P.stat===uc.NOPROXY&&Z(It,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{I.bo()},0),I}}function Ml(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ua(t){return new mA(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n_{constructor(e,n,r=1e3,s=1.5,i=6e4){this.li=e,this.timerId=n,this.Qo=r,this.Ko=s,this.$o=i,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(e){this.cancel();const n=Math.floor(this.Uo+this.Ho()),r=Math.max(0,Date.now()-this.Go),s=Math.max(0,n-r);s>0&&Z("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Uo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,s,()=>(this.Go=Date.now(),e())),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){this.Wo!==null&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){this.Wo!==null&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r_{constructor(e,n,r,s,i,o,l,c){this.li=e,this.Yo=r,this.Zo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.Xo=0,this.e_=null,this.t_=null,this.stream=null,this.n_=0,this.r_=new n_(e,n)}i_(){return this.state===1||this.state===5||this.s_()}s_(){return this.state===2||this.state===3}start(){this.n_=0,this.state!==4?this.auth():this.o_()}async stop(){this.i_()&&await this.close(0)}__(){this.state=0,this.r_.reset()}a_(){this.s_()&&this.e_===null&&(this.e_=this.li.enqueueAfterDelay(this.Yo,6e4,()=>this.u_()))}c_(e){this.l_(),this.stream.send(e)}async u_(){if(this.s_())return this.close(0)}l_(){this.e_&&(this.e_.cancel(),this.e_=null)}h_(){this.t_&&(this.t_.cancel(),this.t_=null)}async close(e,n){this.l_(),this.h_(),this.r_.cancel(),this.Xo++,e!==4?this.r_.reset():n&&n.code===x.RESOURCE_EXHAUSTED?(Mn(n.toString()),Mn("Using maximum backoff delay to prevent overloading the backend."),this.r_.zo()):n&&n.code===x.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.P_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.po(n)}P_(){}auth(){this.state=1;const e=this.T_(this.Xo),n=this.Xo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Xo===n&&this.I_(r,s)},r=>{e(()=>{const s=new ee(x.UNKNOWN,"Fetching auth token failed: "+r.message);return this.E_(s)})})}I_(e,n){const r=this.T_(this.Xo);this.stream=this.d_(e,n),this.stream.Ro(()=>{r(()=>this.listener.Ro())}),this.stream.mo(()=>{r(()=>(this.state=2,this.t_=this.li.enqueueAfterDelay(this.Zo,1e4,()=>(this.s_()&&(this.state=3),Promise.resolve())),this.listener.mo()))}),this.stream.po(s=>{r(()=>this.E_(s))}),this.stream.onMessage(s=>{r(()=>++this.n_==1?this.A_(s):this.onNext(s))})}o_(){this.state=5,this.r_.jo(async()=>{this.state=0,this.start()})}E_(e){return Z("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}T_(e){return n=>{this.li.enqueueAndForget(()=>this.Xo===e?n():(Z("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class cR extends r_{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}d_(e,n){return this.connection.qo("Listen",e,n)}A_(e){return this.onNext(e)}onNext(e){this.r_.reset();const n=yA(this.serializer,e),r=function(i){if(!("targetChange"in i))return pe.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?pe.min():o.readTime?pn(o.readTime):pe.min()}(e);return this.listener.R_(n,r)}V_(e){const n={};n.database=Ec(this.serializer),n.addTarget=function(i,o){let l;const c=o.target;if(l=pc(c)?{documents:wA(i,c)}:{query:TA(i,c).ct},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=Wg(i,o.resumeToken);const h=_c(i,o.expectedCount);h!==null&&(l.expectedCount=h)}else if(o.snapshotVersion.compareTo(pe.min())>0){l.readTime=sa(i,o.snapshotVersion.toTimestamp());const h=_c(i,o.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);const r=bA(this.serializer,e);r&&(n.labels=r),this.c_(n)}m_(e){const n={};n.database=Ec(this.serializer),n.removeTarget=e,this.c_(n)}}class uR extends r_{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get f_(){return this.n_>0}start(){this.lastStreamToken=void 0,super.start()}P_(){this.f_&&this.g_([])}d_(e,n){return this.connection.qo("Write",e,n)}A_(e){return Ne(!!e.streamToken),this.lastStreamToken=e.streamToken,Ne(!e.writeResults||e.writeResults.length===0),this.listener.p_()}onNext(e){Ne(!!e.streamToken),this.lastStreamToken=e.streamToken,this.r_.reset();const n=EA(e.writeResults,e.commitTime),r=pn(e.commitTime);return this.listener.y_(r,n)}w_(){const e={};e.database=Ec(this.serializer),this.c_(e)}g_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>vA(this.serializer,r))};this.c_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hR extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.S_=!1}b_(){if(this.S_)throw new ee(x.FAILED_PRECONDITION,"The client has already been terminated.")}Oo(e,n,r,s){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Oo(e,yc(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===x.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new ee(x.UNKNOWN,i.toString())})}ko(e,n,r,s,i){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.ko(e,yc(n,r),s,o,l,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===x.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new ee(x.UNKNOWN,o.toString())})}terminate(){this.S_=!0,this.connection.terminate()}}class dR{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.D_=0,this.v_=null,this.C_=!0}F_(){this.D_===0&&(this.M_("Unknown"),this.v_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.v_=null,this.x_("Backend didn't respond within 10 seconds."),this.M_("Offline"),Promise.resolve())))}O_(e){this.state==="Online"?this.M_("Unknown"):(this.D_++,this.D_>=1&&(this.N_(),this.x_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.M_("Offline")))}set(e){this.N_(),this.D_=0,e==="Online"&&(this.C_=!1),this.M_(e)}M_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}x_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.C_?(Mn(n),this.C_=!1):Z("OnlineStateTracker",n)}N_(){this.v_!==null&&(this.v_.cancel(),this.v_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fR{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.L_=[],this.B_=new Map,this.k_=new Set,this.q_=[],this.Q_=i,this.Q_.uo(o=>{r.enqueueAndForget(async()=>{qr(this)&&(Z("RemoteStore","Restarting streams for network reachability change."),await async function(c){const h=me(c);h.k_.add(4),await zi(h),h.K_.set("Unknown"),h.k_.delete(4),await $a(h)}(this))})}),this.K_=new dR(r,s)}}async function $a(t){if(qr(t))for(const e of t.q_)await e(!0)}async function zi(t){for(const e of t.q_)await e(!1)}function s_(t,e){const n=me(t);n.B_.has(e.targetId)||(n.B_.set(e.targetId,e),bu(n)?Iu(n):Vs(n).s_()&&Tu(n,e))}function wu(t,e){const n=me(t),r=Vs(n);n.B_.delete(e),r.s_()&&i_(n,e),n.B_.size===0&&(r.s_()?r.a_():qr(n)&&n.K_.set("Unknown"))}function Tu(t,e){if(t.U_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(pe.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Vs(t).V_(e)}function i_(t,e){t.U_.xe(e),Vs(t).m_(e)}function Iu(t){t.U_=new hA({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>t.B_.get(e)||null,nt:()=>t.datastore.serializer.databaseId}),Vs(t).start(),t.K_.F_()}function bu(t){return qr(t)&&!Vs(t).i_()&&t.B_.size>0}function qr(t){return me(t).k_.size===0}function o_(t){t.U_=void 0}async function pR(t){t.K_.set("Online")}async function mR(t){t.B_.forEach((e,n)=>{Tu(t,e)})}async function gR(t,e){o_(t),bu(t)?(t.K_.O_(e),Iu(t)):t.K_.set("Unknown")}async function _R(t,e,n){if(t.K_.set("Online"),e instanceof zg&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const l of i.targetIds)s.B_.has(l)&&(await s.remoteSyncer.rejectListen(l,o),s.B_.delete(l),s.U_.removeTarget(l))}(t,e)}catch(r){Z("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await oa(t,r)}else if(e instanceof Lo?t.U_.$e(e):e instanceof Hg?t.U_.Je(e):t.U_.Ge(e),!n.isEqual(pe.min()))try{const r=await t_(t.localStore);n.compareTo(r)>=0&&await function(i,o){const l=i.U_.it(o);return l.targetChanges.forEach((c,h)=>{if(c.resumeToken.approximateByteSize()>0){const d=i.B_.get(h);d&&i.B_.set(h,d.withResumeToken(c.resumeToken,o))}}),l.targetMismatches.forEach((c,h)=>{const d=i.B_.get(c);if(!d)return;i.B_.set(c,d.withResumeToken(_t.EMPTY_BYTE_STRING,d.snapshotVersion)),i_(i,c);const p=new tr(d.target,c,h,d.sequenceNumber);Tu(i,p)}),i.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){Z("RemoteStore","Failed to raise snapshot:",r),await oa(t,r)}}async function oa(t,e,n){if(!Ns(e))throw e;t.k_.add(1),await zi(t),t.K_.set("Offline"),n||(n=()=>t_(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{Z("RemoteStore","Retrying IndexedDB access"),await n(),t.k_.delete(1),await $a(t)})}function a_(t,e){return e().catch(n=>oa(t,n,e))}async function Ba(t){const e=me(t),n=pr(e);let r=e.L_.length>0?e.L_[e.L_.length-1].batchId:-1;for(;yR(e);)try{const s=await tR(e.localStore,r);if(s===null){e.L_.length===0&&n.a_();break}r=s.batchId,vR(e,s)}catch(s){await oa(e,s)}l_(e)&&c_(e)}function yR(t){return qr(t)&&t.L_.length<10}function vR(t,e){t.L_.push(e);const n=pr(t);n.s_()&&n.f_&&n.g_(e.mutations)}function l_(t){return qr(t)&&!pr(t).i_()&&t.L_.length>0}function c_(t){pr(t).start()}async function ER(t){pr(t).w_()}async function wR(t){const e=pr(t);for(const n of t.L_)e.g_(n.mutations)}async function TR(t,e,n){const r=t.L_.shift(),s=mu.from(r,e,n);await a_(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Ba(t)}async function IR(t,e){e&&pr(t).f_&&await async function(r,s){if(function(o){return lA(o)&&o!==x.ABORTED}(s.code)){const i=r.L_.shift();pr(r).__(),await a_(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Ba(r)}}(t,e),l_(t)&&c_(t)}async function Of(t,e){const n=me(t);n.asyncQueue.verifyOperationInProgress(),Z("RemoteStore","RemoteStore received new credentials");const r=qr(n);n.k_.add(3),await zi(n),r&&n.K_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.k_.delete(3),await $a(n)}async function bR(t,e){const n=me(t);e?(n.k_.delete(2),await $a(n)):e||(n.k_.add(2),await zi(n),n.K_.set("Unknown"))}function Vs(t){return t.W_||(t.W_=function(n,r,s){const i=me(n);return i.b_(),new cR(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Ro:pR.bind(null,t),mo:mR.bind(null,t),po:gR.bind(null,t),R_:_R.bind(null,t)}),t.q_.push(async e=>{e?(t.W_.__(),bu(t)?Iu(t):t.K_.set("Unknown")):(await t.W_.stop(),o_(t))})),t.W_}function pr(t){return t.G_||(t.G_=function(n,r,s){const i=me(n);return i.b_(),new uR(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Ro:()=>Promise.resolve(),mo:ER.bind(null,t),po:IR.bind(null,t),p_:wR.bind(null,t),y_:TR.bind(null,t)}),t.q_.push(async e=>{e?(t.G_.__(),await Ba(t)):(await t.G_.stop(),t.L_.length>0&&(Z("RemoteStore",`Stopping write stream with ${t.L_.length} pending writes`),t.L_=[]))})),t.G_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Au{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Nn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,l=new Au(e,n,o,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ee(x.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ru(t,e){if(Mn("AsyncQueue",`${e}: ${t}`),Ns(t))return new ee(x.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps{static emptySet(e){return new ps(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||ie.comparator(n.key,r.key):(n,r)=>ie.comparator(n.key,r.key),this.keyedMap=Zs(),this.sortedSet=new Ge(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ps)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new ps;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mf{constructor(){this.z_=new Ge(ie.comparator)}track(e){const n=e.doc.key,r=this.z_.get(n);r?e.type!==0&&r.type===3?this.z_=this.z_.insert(n,e):e.type===3&&r.type!==1?this.z_=this.z_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.z_=this.z_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.z_=this.z_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.z_=this.z_.remove(n):e.type===1&&r.type===2?this.z_=this.z_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.z_=this.z_.insert(n,{type:2,doc:e.doc}):he():this.z_=this.z_.insert(n,e)}j_(){const e=[];return this.z_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Rs{constructor(e,n,r,s,i,o,l,c,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new Rs(e,n,ps.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Va(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AR{constructor(){this.H_=void 0,this.J_=[]}Y_(){return this.J_.some(e=>e.Z_())}}class RR{constructor(){this.queries=xf(),this.onlineState="Unknown",this.X_=new Set}terminate(){(function(n,r){const s=me(n),i=s.queries;s.queries=xf(),i.forEach((o,l)=>{for(const c of l.J_)c.onError(r)})})(this,new ee(x.ABORTED,"Firestore shutting down"))}}function xf(){return new jr(t=>Dg(t),Va)}async function Su(t,e){const n=me(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.Y_()&&e.Z_()&&(r=2):(i=new AR,r=e.Z_()?0:1);try{switch(r){case 0:i.H_=await n.onListen(s,!0);break;case 1:i.H_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const l=Ru(o,`Initialization of query '${rs(e.query)}' failed`);return void e.onError(l)}n.queries.set(s,i),i.J_.push(e),e.ea(n.onlineState),i.H_&&e.ta(i.H_)&&Pu(n)}async function Cu(t,e){const n=me(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.J_.indexOf(e);o>=0&&(i.J_.splice(o,1),i.J_.length===0?s=e.Z_()?0:1:!i.Y_()&&e.Z_()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function SR(t,e){const n=me(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const l of o.J_)l.ta(s)&&(r=!0);o.H_=s}}r&&Pu(n)}function CR(t,e,n){const r=me(t),s=r.queries.get(e);if(s)for(const i of s.J_)i.onError(n);r.queries.delete(e)}function Pu(t){t.X_.forEach(e=>{e.next()})}var Tc,Lf;(Lf=Tc||(Tc={})).na="default",Lf.Cache="cache";class ku{constructor(e,n,r){this.query=e,this.ra=n,this.ia=!1,this.sa=null,this.onlineState="Unknown",this.options=r||{}}ta(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Rs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.ia?this.oa(e)&&(this.ra.next(e),n=!0):this._a(e,this.onlineState)&&(this.aa(e),n=!0),this.sa=e,n}onError(e){this.ra.error(e)}ea(e){this.onlineState=e;let n=!1;return this.sa&&!this.ia&&this._a(this.sa,e)&&(this.aa(this.sa),n=!0),n}_a(e,n){if(!e.fromCache||!this.Z_())return!0;const r=n!=="Offline";return(!this.options.ua||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}oa(e){if(e.docChanges.length>0)return!0;const n=this.sa&&this.sa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}aa(e){e=Rs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ia=!0,this.ra.next(e)}Z_(){return this.options.source!==Tc.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u_{constructor(e){this.key=e}}class h_{constructor(e){this.key=e}}class PR{constructor(e,n){this.query=e,this.da=n,this.Aa=null,this.hasCachedResults=!1,this.current=!1,this.Ra=we(),this.mutatedKeys=we(),this.Va=Ng(e),this.ma=new ps(this.Va)}get fa(){return this.da}ga(e,n){const r=n?n.pa:new Mf,s=n?n.ma:this.ma;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,l=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((d,p)=>{const m=s.get(d),_=Oa(this.query,p)?p:null,I=!!m&&this.mutatedKeys.has(m.key),S=!!_&&(_.hasLocalMutations||this.mutatedKeys.has(_.key)&&_.hasCommittedMutations);let P=!1;m&&_?m.data.isEqual(_.data)?I!==S&&(r.track({type:3,doc:_}),P=!0):this.ya(m,_)||(r.track({type:2,doc:_}),P=!0,(c&&this.Va(_,c)>0||h&&this.Va(_,h)<0)&&(l=!0)):!m&&_?(r.track({type:0,doc:_}),P=!0):m&&!_&&(r.track({type:1,doc:m}),P=!0,(c||h)&&(l=!0)),P&&(_?(o=o.add(_),i=S?i.add(d):i.delete(d)):(o=o.delete(d),i=i.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),i=i.delete(d.key),r.track({type:1,doc:d})}return{ma:o,pa:r,ss:l,mutatedKeys:i}}ya(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.ma;this.ma=e.ma,this.mutatedKeys=e.mutatedKeys;const o=e.pa.j_();o.sort((d,p)=>function(_,I){const S=P=>{switch(P){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return he()}};return S(_)-S(I)}(d.type,p.type)||this.Va(d.doc,p.doc)),this.wa(r),s=s!=null&&s;const l=n&&!s?this.Sa():[],c=this.Ra.size===0&&this.current&&!s?1:0,h=c!==this.Aa;return this.Aa=c,o.length!==0||h?{snapshot:new Rs(this.query,e.ma,i,o,e.mutatedKeys,c===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),ba:l}:{ba:l}}ea(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ma:this.ma,pa:new Mf,mutatedKeys:this.mutatedKeys,ss:!1},!1)):{ba:[]}}Da(e){return!this.da.has(e)&&!!this.ma.has(e)&&!this.ma.get(e).hasLocalMutations}wa(e){e&&(e.addedDocuments.forEach(n=>this.da=this.da.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.da=this.da.delete(n)),this.current=e.current)}Sa(){if(!this.current)return[];const e=this.Ra;this.Ra=we(),this.ma.forEach(r=>{this.Da(r.key)&&(this.Ra=this.Ra.add(r.key))});const n=[];return e.forEach(r=>{this.Ra.has(r)||n.push(new h_(r))}),this.Ra.forEach(r=>{e.has(r)||n.push(new u_(r))}),n}va(e){this.da=e.ds,this.Ra=we();const n=this.ga(e.documents);return this.applyChanges(n,!0)}Ca(){return Rs.fromInitialDocuments(this.query,this.ma,this.mutatedKeys,this.Aa===0,this.hasCachedResults)}}class kR{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class DR{constructor(e){this.key=e,this.Fa=!1}}class NR{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ma={},this.xa=new jr(l=>Dg(l),Va),this.Oa=new Map,this.Na=new Set,this.La=new Ge(ie.comparator),this.Ba=new Map,this.ka=new yu,this.qa={},this.Qa=new Map,this.Ka=As.Qn(),this.onlineState="Unknown",this.$a=void 0}get isPrimaryClient(){return this.$a===!0}}async function VR(t,e,n=!0){const r=__(t);let s;const i=r.xa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Ca()):s=await d_(r,e,n,!0),s}async function OR(t,e){const n=__(t);await d_(n,e,!0,!1)}async function d_(t,e,n,r){const s=await nR(t.localStore,fn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await MR(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&s_(t.remoteStore,s),l}async function MR(t,e,n,r,s){t.Ua=(p,m,_)=>async function(S,P,V,F){let j=P.view.ga(V);j.ss&&(j=await Df(S.localStore,P.query,!1).then(({documents:A})=>P.view.ga(A,j)));const q=F&&F.targetChanges.get(P.targetId),oe=F&&F.targetMismatches.get(P.targetId)!=null,ye=P.view.applyChanges(j,S.isPrimaryClient,q,oe);return Uf(S,P.targetId,ye.ba),ye.snapshot}(t,p,m,_);const i=await Df(t.localStore,e,!0),o=new PR(e,i.ds),l=o.ga(i.documents),c=Hi.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),h=o.applyChanges(l,t.isPrimaryClient,c);Uf(t,n,h.ba);const d=new kR(e,n,o);return t.xa.set(e,d),t.Oa.has(n)?t.Oa.get(n).push(e):t.Oa.set(n,[e]),h.snapshot}async function xR(t,e,n){const r=me(t),s=r.xa.get(e),i=r.Oa.get(s.targetId);if(i.length>1)return r.Oa.set(s.targetId,i.filter(o=>!Va(o,e))),void r.xa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await wc(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&wu(r.remoteStore,s.targetId),Ic(r,s.targetId)}).catch(Ds)):(Ic(r,s.targetId),await wc(r.localStore,s.targetId,!0))}async function LR(t,e){const n=me(t),r=n.xa.get(e),s=n.Oa.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),wu(n.remoteStore,r.targetId))}async function FR(t,e,n){const r=zR(t);try{const s=await function(o,l){const c=me(o),h=st.now(),d=l.reduce((_,I)=>_.add(I.key),we());let p,m;return c.persistence.runTransaction("Locally write mutations","readwrite",_=>{let I=xn(),S=we();return c.hs.getEntries(_,d).next(P=>{I=P,I.forEach((V,F)=>{F.isValidDocument()||(S=S.add(V))})}).next(()=>c.localDocuments.getOverlayedDocuments(_,I)).next(P=>{p=P;const V=[];for(const F of l){const j=rA(F,p.get(F.key).overlayedDocument);j!=null&&V.push(new vr(F.key,j,Ig(j.value.mapValue),Ut.exists(!0)))}return c.mutationQueue.addMutationBatch(_,h,V,l)}).next(P=>{m=P;const V=P.applyToLocalDocumentSet(p,S);return c.documentOverlayCache.saveOverlays(_,P.batchId,V)})}).then(()=>({batchId:m.batchId,changes:Og(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,l,c){let h=o.qa[o.currentUser.toKey()];h||(h=new Ge(Te)),h=h.insert(l,c),o.qa[o.currentUser.toKey()]=h}(r,s.batchId,n),await Wi(r,s.changes),await Ba(r.remoteStore)}catch(s){const i=Ru(s,"Failed to persist write");n.reject(i)}}async function f_(t,e){const n=me(t);try{const r=await ZA(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Ba.get(i);o&&(Ne(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.Fa=!0:s.modifiedDocuments.size>0?Ne(o.Fa):s.removedDocuments.size>0&&(Ne(o.Fa),o.Fa=!1))}),await Wi(n,r,e)}catch(r){await Ds(r)}}function Ff(t,e,n){const r=me(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.xa.forEach((i,o)=>{const l=o.view.ea(e);l.snapshot&&s.push(l.snapshot)}),function(o,l){const c=me(o);c.onlineState=l;let h=!1;c.queries.forEach((d,p)=>{for(const m of p.J_)m.ea(l)&&(h=!0)}),h&&Pu(c)}(r.eventManager,e),s.length&&r.Ma.R_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function UR(t,e,n){const r=me(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Ba.get(e),i=s&&s.key;if(i){let o=new Ge(ie.comparator);o=o.insert(i,St.newNoDocument(i,pe.min()));const l=we().add(i),c=new Fa(pe.min(),new Map,new Ge(Te),o,l);await f_(r,c),r.La=r.La.remove(i),r.Ba.delete(e),Du(r)}else await wc(r.localStore,e,!1).then(()=>Ic(r,e,n)).catch(Ds)}async function $R(t,e){const n=me(t),r=e.batch.batchId;try{const s=await JA(n.localStore,e);m_(n,r,null),p_(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Wi(n,s)}catch(s){await Ds(s)}}async function BR(t,e,n){const r=me(t);try{const s=await function(o,l){const c=me(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let d;return c.mutationQueue.lookupMutationBatch(h,l).next(p=>(Ne(p!==null),d=p.keys(),c.mutationQueue.removeMutationBatch(h,p))).next(()=>c.mutationQueue.performConsistencyCheck(h)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(h,d,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,d)).next(()=>c.localDocuments.getDocuments(h,d))})}(r.localStore,e);m_(r,e,n),p_(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Wi(r,s)}catch(s){await Ds(s)}}function p_(t,e){(t.Qa.get(e)||[]).forEach(n=>{n.resolve()}),t.Qa.delete(e)}function m_(t,e,n){const r=me(t);let s=r.qa[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.qa[r.currentUser.toKey()]=s}}function Ic(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Oa.get(e))t.xa.delete(r),n&&t.Ma.Wa(r,n);t.Oa.delete(e),t.isPrimaryClient&&t.ka.yr(e).forEach(r=>{t.ka.containsKey(r)||g_(t,r)})}function g_(t,e){t.Na.delete(e.path.canonicalString());const n=t.La.get(e);n!==null&&(wu(t.remoteStore,n),t.La=t.La.remove(e),t.Ba.delete(n),Du(t))}function Uf(t,e,n){for(const r of n)r instanceof u_?(t.ka.addReference(r.key,e),jR(t,r)):r instanceof h_?(Z("SyncEngine","Document no longer in limbo: "+r.key),t.ka.removeReference(r.key,e),t.ka.containsKey(r.key)||g_(t,r.key)):he()}function jR(t,e){const n=e.key,r=n.path.canonicalString();t.La.get(n)||t.Na.has(r)||(Z("SyncEngine","New document in limbo: "+n),t.Na.add(r),Du(t))}function Du(t){for(;t.Na.size>0&&t.La.size<t.maxConcurrentLimboResolutions;){const e=t.Na.values().next().value;t.Na.delete(e);const n=new ie(je.fromString(e)),r=t.Ka.next();t.Ba.set(r,new DR(n)),t.La=t.La.insert(n,r),s_(t.remoteStore,new tr(fn(Na(n.path)),r,"TargetPurposeLimboResolution",Pa.oe))}}async function Wi(t,e,n){const r=me(t),s=[],i=[],o=[];r.xa.isEmpty()||(r.xa.forEach((l,c)=>{o.push(r.Ua(c,e,n).then(h=>{var d;if((h||n)&&r.isPrimaryClient){const p=h?!h.fromCache:(d=n==null?void 0:n.targetChanges.get(c.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(c.targetId,p?"current":"not-current")}if(h){s.push(h);const p=Eu.zi(c.targetId,h);i.push(p)}}))}),await Promise.all(o),r.Ma.R_(s),await async function(c,h){const d=me(c);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>L.forEach(h,m=>L.forEach(m.Wi,_=>d.persistence.referenceDelegate.addReference(p,m.targetId,_)).next(()=>L.forEach(m.Gi,_=>d.persistence.referenceDelegate.removeReference(p,m.targetId,_)))))}catch(p){if(!Ns(p))throw p;Z("LocalStore","Failed to update sequence numbers: "+p)}for(const p of h){const m=p.targetId;if(!p.fromCache){const _=d.us.get(m),I=_.snapshotVersion,S=_.withLastLimboFreeSnapshotVersion(I);d.us=d.us.insert(m,S)}}}(r.localStore,i))}async function qR(t,e){const n=me(t);if(!n.currentUser.isEqual(e)){Z("SyncEngine","User change. New user:",e.toKey());const r=await e_(n.localStore,e);n.currentUser=e,function(i,o){i.Qa.forEach(l=>{l.forEach(c=>{c.reject(new ee(x.CANCELLED,o))})}),i.Qa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Wi(n,r.Ts)}}function HR(t,e){const n=me(t),r=n.Ba.get(e);if(r&&r.Fa)return we().add(r.key);{let s=we();const i=n.Oa.get(e);if(!i)return s;for(const o of i){const l=n.xa.get(o);s=s.unionWith(l.view.fa)}return s}}function __(t){const e=me(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=f_.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=HR.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=UR.bind(null,e),e.Ma.R_=SR.bind(null,e.eventManager),e.Ma.Wa=CR.bind(null,e.eventManager),e}function zR(t){const e=me(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=$R.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=BR.bind(null,e),e}class aa{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Ua(e.databaseInfo.databaseId),this.sharedClientState=this.za(e),this.persistence=this.ja(e),await this.persistence.start(),this.localStore=this.Ha(e),this.gcScheduler=this.Ja(e,this.localStore),this.indexBackfillerScheduler=this.Ya(e,this.localStore)}Ja(e,n){return null}Ya(e,n){return null}Ha(e){return YA(this.persistence,new QA,e.initialUser,this.serializer)}ja(e){return new Zg(vu.ei,this.serializer)}za(e){return new sR}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}aa.provider={build:()=>new aa};class WR extends aa{constructor(e){super(),this.cacheSizeBytes=e}Ja(e,n){Ne(this.persistence.referenceDelegate instanceof ia);const r=this.persistence.referenceDelegate.garbageCollector;return new OA(r,e.asyncQueue,n)}ja(e){const n=this.cacheSizeBytes!==void 0?Lt.withCacheSize(this.cacheSizeBytes):Lt.DEFAULT;return new Zg(r=>ia.ei(r,n),this.serializer)}}class bc{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Ff(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=qR.bind(null,this.syncEngine),await bR(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new RR}()}createDatastore(e){const n=Ua(e.databaseInfo.databaseId),r=function(i){return new lR(i)}(e.databaseInfo);return function(i,o,l,c){return new hR(i,o,l,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,l){return new fR(r,s,i,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>Ff(this.syncEngine,n,0),function(){return Vf.p()?new Vf:new iR}())}createSyncEngine(e,n){return function(s,i,o,l,c,h,d){const p=new NR(s,i,o,l,c,h);return d&&(p.$a=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=me(s);Z("RemoteStore","RemoteStore shutting down."),i.k_.add(5),await zi(i),i.Q_.shutdown(),i.K_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}bc.provider={build:()=>new bc};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Nu{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Xa(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Xa(this.observer.error,e):Mn("Uncaught Error in snapshot listener:",e.toString()))}eu(){this.muted=!0}Xa(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KR{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=bt.UNAUTHENTICATED,this.clientId=Eg.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{Z("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(Z("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Nn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Ru(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function xl(t,e){t.asyncQueue.verifyOperationInProgress(),Z("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await e_(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function $f(t,e){t.asyncQueue.verifyOperationInProgress();const n=await GR(t);Z("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Of(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>Of(e.remoteStore,s)),t._onlineComponents=e}async function GR(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){Z("FirestoreClient","Using user provided OfflineComponentProvider");try{await xl(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===x.FAILED_PRECONDITION||s.code===x.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;ws("Error using user provided cache. Falling back to memory cache: "+n),await xl(t,new aa)}}else Z("FirestoreClient","Using default OfflineComponentProvider"),await xl(t,new WR(void 0));return t._offlineComponents}async function y_(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(Z("FirestoreClient","Using user provided OnlineComponentProvider"),await $f(t,t._uninitializedComponentsProvider._online)):(Z("FirestoreClient","Using default OnlineComponentProvider"),await $f(t,new bc))),t._onlineComponents}function QR(t){return y_(t).then(e=>e.syncEngine)}async function la(t){const e=await y_(t),n=e.eventManager;return n.onListen=VR.bind(null,e.syncEngine),n.onUnlisten=xR.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=OR.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=LR.bind(null,e.syncEngine),n}function XR(t,e,n={}){const r=new Nn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,c,h){const d=new Nu({next:m=>{d.eu(),o.enqueueAndForget(()=>Cu(i,p));const _=m.docs.has(l);!_&&m.fromCache?h.reject(new ee(x.UNAVAILABLE,"Failed to get document because the client is offline.")):_&&m.fromCache&&c&&c.source==="server"?h.reject(new ee(x.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(m)},error:m=>h.reject(m)}),p=new ku(Na(l.path),d,{includeMetadataChanges:!0,ua:!0});return Su(i,p)}(await la(t),t.asyncQueue,e,n,r)),r.promise}function YR(t,e,n={}){const r=new Nn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,c,h){const d=new Nu({next:m=>{d.eu(),o.enqueueAndForget(()=>Cu(i,p)),m.fromCache&&c.source==="server"?h.reject(new ee(x.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(m)},error:m=>h.reject(m)}),p=new ku(l,d,{includeMetadataChanges:!0,ua:!0});return Su(i,p)}(await la(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function v_(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bf=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E_(t,e,n){if(!n)throw new ee(x.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function JR(t,e,n,r){if(e===!0&&r===!0)throw new ee(x.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function jf(t){if(!ie.isDocumentKey(t))throw new ee(x.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function qf(t){if(ie.isDocumentKey(t))throw new ee(x.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function ja(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":he()}function Wt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ee(x.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ja(t);throw new ee(x.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hf{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new ee(x.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new ee(x.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}JR("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=v_((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new ee(x.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new ee(x.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new ee(x.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class qa{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Hf({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ee(x.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ee(x.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Hf(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new cb;switch(r.type){case"firstParty":return new fb(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new ee(x.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Bf.get(n);r&&(Z("ComponentProvider","Removing Datastore"),Bf.delete(n),r.terminate())}(this),Promise.resolve()}}function ZR(t,e,n,r={}){var s;const i=(t=Wt(t,qa))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&ws("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let l,c;if(typeof r.mockUserToken=="string")l=r.mockUserToken,c=bt.MOCK_USER;else{l=Rw(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new ee(x.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new bt(h)}t._authCredentials=new ub(new vg(l,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Hr(this.firestore,e,this._query)}}class Ot{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new lr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ot(this.firestore,e,this._key)}}class lr extends Hr{constructor(e,n,r){super(e,n,Na(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ot(this.firestore,null,new ie(e))}withConverter(e){return new lr(this.firestore,e,this._path)}}function Fr(t,e,...n){if(t=ut(t),E_("collection","path",e),t instanceof qa){const r=je.fromString(e,...n);return qf(r),new lr(t,null,r)}{if(!(t instanceof Ot||t instanceof lr))throw new ee(x.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(je.fromString(e,...n));return qf(r),new lr(t.firestore,null,r)}}function Yt(t,e,...n){if(t=ut(t),arguments.length===1&&(e=Eg.newId()),E_("doc","path",e),t instanceof qa){const r=je.fromString(e,...n);return jf(r),new Ot(t,null,new ie(r))}{if(!(t instanceof Ot||t instanceof lr))throw new ee(x.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(je.fromString(e,...n));return jf(r),new Ot(t.firestore,t instanceof lr?t.converter:null,new ie(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zf{constructor(e=Promise.resolve()){this.Iu=[],this.Eu=!1,this.du=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new n_(this,"async_queue_retry"),this.fu=()=>{const r=Ml();r&&Z("AsyncQueue","Visibility state changed to "+r.visibilityState),this.r_.Jo()},this.gu=e;const n=Ml();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.Eu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.pu(),this.yu(e)}enterRestrictedMode(e){if(!this.Eu){this.Eu=!0,this.Vu=e||!1;const n=Ml();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.fu)}}enqueue(e){if(this.pu(),this.Eu)return new Promise(()=>{});const n=new Nn;return this.yu(()=>this.Eu&&this.Vu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Iu.push(e),this.wu()))}async wu(){if(this.Iu.length!==0){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(e){if(!Ns(e))throw e;Z("AsyncQueue","Operation failed with retryable error: "+e)}this.Iu.length>0&&this.r_.jo(()=>this.wu())}}yu(e){const n=this.gu.then(()=>(this.Ru=!0,e().catch(r=>{this.Au=r,this.Ru=!1;const s=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw Mn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.Ru=!1,r))));return this.gu=n,n}enqueueAfterDelay(e,n,r){this.pu(),this.mu.indexOf(e)>-1&&(n=0);const s=Au.createAndSchedule(this,e,n,r,i=>this.Su(i));return this.du.push(s),s}pu(){this.Au&&he()}verifyOperationInProgress(){}async bu(){let e;do e=this.gu,await e;while(e!==this.gu)}Du(e){for(const n of this.du)if(n.timerId===e)return!0;return!1}vu(e){return this.bu().then(()=>{this.du.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.du)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.bu()})}Cu(e){this.mu.push(e)}Su(e){const n=this.du.indexOf(e);this.du.splice(n,1)}}function Wf(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}class Ln extends qa{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new zf,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new zf(e),this._firestoreClient=void 0,await e}}}function Ha(t,e){const n=typeof t=="object"?t:Vm(),r=typeof t=="string"?t:"(default)",s=Yc(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=bw("firestore");i&&ZR(s,...i)}return s}function Ki(t){if(t._terminated)throw new ee(x.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||eS(t),t._firestoreClient}function eS(t){var e,n,r;const s=t._freezeSettings(),i=function(l,c,h,d){return new Cb(l,c,h,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,v_(d.experimentalLongPollingOptions),d.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new KR(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(l){const c=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(c),_online:c}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ss{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ss(_t.fromBase64String(e))}catch(n){throw new ee(x.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ss(_t.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new ee(x.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new gt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class za{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vu{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new ee(x.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new ee(x.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Te(this._lat,e._lat)||Te(this._long,e._long)}}/**
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
 */const tS=/^__.*__$/;class nS{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new vr(e,this.data,this.fieldMask,n,this.fieldTransforms):new qi(e,this.data,n,this.fieldTransforms)}}class w_{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new vr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function T_(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw he()}}class Mu{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Fu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Mu(){return this.settings.Mu}xu(e){return new Mu(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ou(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.xu({path:r,Nu:!1});return s.Lu(e),s}Bu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.xu({path:r,Nu:!1});return s.Fu(),s}ku(e){return this.xu({path:void 0,Nu:!0})}qu(e){return ca(e,this.settings.methodName,this.settings.Qu||!1,this.path,this.settings.Ku)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Fu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Lu(this.path.get(e))}Lu(e){if(e.length===0)throw this.qu("Document fields must not be empty");if(T_(this.Mu)&&tS.test(e))throw this.qu('Document fields cannot begin and end with "__"')}}class rS{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Ua(e)}$u(e,n,r,s=!1){return new Mu({Mu:e,methodName:n,Ku:r,path:gt.emptyPath(),Nu:!1,Qu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Wa(t){const e=t._freezeSettings(),n=Ua(t._databaseId);return new rS(t._databaseId,!!e.ignoreUndefinedProperties,n)}function I_(t,e,n,r,s,i={}){const o=t.$u(i.merge||i.mergeFields?2:0,e,n,s);Lu("Data must be an object, but it was:",o,r);const l=R_(r,o);let c,h;if(i.merge)c=new zt(o.fieldMask),h=o.fieldTransforms;else if(i.mergeFields){const d=[];for(const p of i.mergeFields){const m=Ac(e,p,n);if(!o.contains(m))throw new ee(x.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);C_(d,m)||d.push(m)}c=new zt(d),h=o.fieldTransforms.filter(p=>c.covers(p.field))}else c=null,h=o.fieldTransforms;return new nS(new Ft(l),c,h)}class Ka extends za{_toFieldTransform(e){if(e.Mu!==2)throw e.Mu===1?e.qu(`${this._methodName}() can only appear at the top level of your update data`):e.qu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Ka}}class xu extends za{_toFieldTransform(e){return new Zb(e.path,new Pi)}isEqual(e){return e instanceof xu}}function b_(t,e,n,r){const s=t.$u(1,e,n);Lu("Data must be an object, but it was:",s,r);const i=[],o=Ft.empty();yr(r,(c,h)=>{const d=Fu(e,c,n);h=ut(h);const p=s.Bu(d);if(h instanceof Ka)i.push(d);else{const m=Qi(h,p);m!=null&&(i.push(d),o.set(d,m))}});const l=new zt(i);return new w_(o,l,s.fieldTransforms)}function A_(t,e,n,r,s,i){const o=t.$u(1,e,n),l=[Ac(e,r,n)],c=[s];if(i.length%2!=0)throw new ee(x.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<i.length;m+=2)l.push(Ac(e,i[m])),c.push(i[m+1]);const h=[],d=Ft.empty();for(let m=l.length-1;m>=0;--m)if(!C_(h,l[m])){const _=l[m];let I=c[m];I=ut(I);const S=o.Bu(_);if(I instanceof Ka)h.push(_);else{const P=Qi(I,S);P!=null&&(h.push(_),d.set(_,P))}}const p=new zt(h);return new w_(d,p,o.fieldTransforms)}function sS(t,e,n,r=!1){return Qi(n,t.$u(r?4:3,e))}function Qi(t,e){if(S_(t=ut(t)))return Lu("Unsupported field value:",e,t),R_(t,e);if(t instanceof za)return function(r,s){if(!T_(s.Mu))throw s.qu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.qu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Nu&&e.Mu!==4)throw e.qu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const l of r){let c=Qi(l,s.ku(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=ut(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Xb(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=st.fromDate(r);return{timestampValue:sa(s.serializer,i)}}if(r instanceof st){const i=new st(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:sa(s.serializer,i)}}if(r instanceof Vu)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ss)return{bytesValue:Wg(s.serializer,r._byteString)};if(r instanceof Ot){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.qu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:_u(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Ou)return function(o,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(c=>{if(typeof c!="number")throw l.qu("VectorValues must only contain numeric values.");return pu(l.serializer,c)})}}}}}}(r,s);throw s.qu(`Unsupported field value: ${ja(r)}`)}(t,e)}function R_(t,e){const n={};return wg(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):yr(t,(r,s)=>{const i=Qi(s,e.Ou(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function S_(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof st||t instanceof Vu||t instanceof Ss||t instanceof Ot||t instanceof za||t instanceof Ou)}function Lu(t,e,n){if(!S_(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=ja(n);throw r==="an object"?e.qu(t+" a custom object"):e.qu(t+" "+r)}}function Ac(t,e,n){if((e=ut(e))instanceof Gi)return e._internalPath;if(typeof e=="string")return Fu(t,e);throw ca("Field path arguments must be of type string or ",t,!1,void 0,n)}const iS=new RegExp("[~\\*/\\[\\]]");function Fu(t,e,n){if(e.search(iS)>=0)throw ca(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Gi(...e.split("."))._internalPath}catch{throw ca(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function ca(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new ee(x.INVALID_ARGUMENT,l+t+c)}function C_(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P_{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Ot(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new oS(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Uu("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class oS extends P_{data(){return super.data()}}function Uu(t,e){return typeof e=="string"?Fu(t,e):e instanceof Gi?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k_(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new ee(x.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class $u{}class aS extends $u{}function Xi(t,e,...n){let r=[];e instanceof $u&&r.push(e),r=r.concat(n),function(i){const o=i.filter(c=>c instanceof Bu).length,l=i.filter(c=>c instanceof Ga).length;if(o>1||o>0&&l>0)throw new ee(x.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class Ga extends aS{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Ga(e,n,r)}_apply(e){const n=this._parse(e);return D_(e._query,n),new Hr(e.firestore,e.converter,mc(e._query,n))}_parse(e){const n=Wa(e.firestore);return function(i,o,l,c,h,d,p){let m;if(h.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new ee(x.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){Gf(p,d);const _=[];for(const I of p)_.push(Kf(c,i,I));m={arrayValue:{values:_}}}else m=Kf(c,i,p)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||Gf(p,d),m=sS(l,o,p,d==="in"||d==="not-in");return tt.create(h,d,m)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function Ur(t,e,n){const r=e,s=Uu("where",t);return Ga._create(s,r,n)}class Bu extends $u{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Bu(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:sn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const l=i.getFlattenedFilters();for(const c of l)D_(o,c),o=mc(o,c)}(e._query,n),new Hr(e.firestore,e.converter,mc(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Kf(t,e,n){if(typeof(n=ut(n))=="string"){if(n==="")throw new ee(x.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!kg(e)&&n.indexOf("/")!==-1)throw new ee(x.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(je.fromString(n));if(!ie.isDocumentKey(r))throw new ee(x.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return ff(t,new ie(r))}if(n instanceof Ot)return ff(t,n._key);throw new ee(x.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ja(n)}.`)}function Gf(t,e){if(!Array.isArray(t)||t.length===0)throw new ee(x.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function D_(t,e){const n=function(s,i){for(const o of s)for(const l of o.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new ee(x.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new ee(x.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class lS{convertValue(e,n="none"){switch(fr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Xe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(dr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw he()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return yr(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>Xe(o.doubleValue));return new Ou(i)}convertGeoPoint(e){return new Vu(Xe(e.latitude),Xe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Da(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Ri(e));default:return null}}convertTimestamp(e){const n=hr(e);return new st(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=je.fromString(e);Ne(Jg(r));const s=new Si(r.get(1),r.get(3)),i=new ie(r.popFirst(5));return s.isEqual(n)||Mn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N_(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class V_ extends P_{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Fo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Uu("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Fo extends V_{data(e={}){return super.data(e)}}class O_{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new ti(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Fo(this._firestore,this._userDataWriter,r.key,r,new ti(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new ee(x.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(l=>{const c=new Fo(s._firestore,s._userDataWriter,l.doc.key,l.doc,new ti(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const c=new Fo(s._firestore,s._userDataWriter,l.doc.key,l.doc,new ti(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,d=-1;return l.type!==0&&(h=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),d=o.indexOf(l.doc.key)),{type:cS(l.type),doc:c,oldIndex:h,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function cS(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return he()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M_(t){t=Wt(t,Ot);const e=Wt(t.firestore,Ln);return XR(Ki(e),t._key).then(n=>F_(e,t,n))}class ju extends lS{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ss(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ot(this.firestore,null,n)}}function Yi(t){t=Wt(t,Hr);const e=Wt(t.firestore,Ln),n=Ki(e),r=new ju(e);return k_(t._query),YR(n,t._query).then(s=>new O_(e,r,t,s))}function qu(t,e,n,...r){t=Wt(t,Ot);const s=Wt(t.firestore,Ln),i=Wa(s);let o;return o=typeof(e=ut(e))=="string"||e instanceof Gi?A_(i,"updateDoc",t._key,e,n,r):b_(i,"updateDoc",t._key,e),Qa(s,[o.toMutation(t._key,Ut.exists(!0))])}function x_(t){return Qa(Wt(t.firestore,Ln),[new La(t._key,Ut.none())])}function L_(t,e){const n=Wt(t.firestore,Ln),r=Yt(t),s=N_(t.converter,e);return Qa(n,[I_(Wa(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,Ut.exists(!1))]).then(()=>r)}function uS(t,...e){var n,r,s;t=ut(t);let i={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||Wf(e[o])||(i=e[o],o++);const l={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(Wf(e[o])){const p=e[o];e[o]=(n=p.next)===null||n===void 0?void 0:n.bind(p),e[o+1]=(r=p.error)===null||r===void 0?void 0:r.bind(p),e[o+2]=(s=p.complete)===null||s===void 0?void 0:s.bind(p)}let c,h,d;if(t instanceof Ot)h=Wt(t.firestore,Ln),d=Na(t._key.path),c={next:p=>{e[o]&&e[o](F_(h,t,p))},error:e[o+1],complete:e[o+2]};else{const p=Wt(t,Hr);h=Wt(p.firestore,Ln),d=p._query;const m=new ju(h);c={next:_=>{e[o]&&e[o](new O_(h,m,p,_))},error:e[o+1],complete:e[o+2]},k_(t._query)}return function(m,_,I,S){const P=new Nu(S),V=new ku(_,P,I);return m.asyncQueue.enqueueAndForget(async()=>Su(await la(m),V)),()=>{P.eu(),m.asyncQueue.enqueueAndForget(async()=>Cu(await la(m),V))}}(Ki(h),d,l,c)}function Qa(t,e){return function(r,s){const i=new Nn;return r.asyncQueue.enqueueAndForget(async()=>FR(await QR(r),s,i)),i.promise}(Ki(t),e)}function F_(t,e,n){const r=n.docs.get(e._key),s=new ju(t);return new V_(t,s,e._key,r,new ti(n.hasPendingWrites,n.fromCache),e.converter)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hS{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=Wa(e)}set(e,n,r){this._verifyNotCommitted();const s=Ll(e,this._firestore),i=N_(s.converter,n,r),o=I_(this._dataReader,"WriteBatch.set",s._key,i,s.converter!==null,r);return this._mutations.push(o.toMutation(s._key,Ut.none())),this}update(e,n,r,...s){this._verifyNotCommitted();const i=Ll(e,this._firestore);let o;return o=typeof(n=ut(n))=="string"||n instanceof Gi?A_(this._dataReader,"WriteBatch.update",i._key,n,r,s):b_(this._dataReader,"WriteBatch.update",i._key,n),this._mutations.push(o.toMutation(i._key,Ut.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=Ll(e,this._firestore);return this._mutations=this._mutations.concat(new La(n._key,Ut.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new ee(x.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Ll(t,e){if((t=ut(t)).firestore!==e)throw new ee(x.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}function Rc(){return new xu("serverTimestamp")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U_(t){return Ki(t=Wt(t,Ln)),new hS(t,e=>Qa(t,e))}(function(e,n=!0){(function(s){ks=s})(Cs),vs(new Mr("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),l=new Ln(new hb(r.getProvider("auth-internal")),new mb(r.getProvider("app-check-internal")),function(h,d){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new ee(x.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Si(h.options.projectId,d)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),ar(af,"4.7.5",e),ar(af,"4.7.5","esm2017")})();const Os=Ha(Ze),$_=Fr(Os,"relays");async function dS(){const e=yt(Ze).currentUser;if(!e)throw new Error("User is not authenticated");const n=Fr(Os,"relays"),r=Xi(n,Ur("uid","==",e.uid));return(await Yi(r)).docs.map(i=>{const o=i.data();return{id:i.id,uid:o.uid,name:o.name,boardId:o.boardId,state:o.state===!0||o.state==="true",maxOnTime_s:o.maxOnTime_s??void 0,turnedOnAt:o.turnedOnAt?o.turnedOnAt.toDate():void 0}})}async function fS(t,e){if(!yt(Ze).currentUser)throw new Error("User is not authenticated");const s=Yt(Os,"relays",t);await qu(s,{state:e})}async function pS(t,e,n){if(!yt(Ze).currentUser)throw new Error("User is not authenticated");const i=Yt(Os,"relays",t);await qu(i,{name:e,maxOnTime_s:n})}async function mS(t){const n=yt(Ze).currentUser;if(!n)throw new Error("User is not authenticated");const r={...t,uid:n.uid};return{id:(await L_($_,r)).id,...r}}async function gS(t){if(!yt(Ze).currentUser)throw new Error("User is not authenticated");const r=Yt(Os,"relays",t);await x_(r)}async function _S(t){const n=yt(Ze).currentUser;if(!n)throw new Error("User is not authenticated");const r=Xi($_,Ur("uid","==",n.uid),Ur("name","==",t));return(await Yi(r)).empty}function yS(t,e){if(!yt(Ze).currentUser)throw new Error("User is not authenticated");const s=Yt(Os,"relays",t);return uS(s,i=>{if(i.exists()){const o=i.data(),l={id:i.id,uid:o.uid,name:o.name,boardId:o.boardId,state:o.state===!0||o.state==="true",maxOnTime_s:o.maxOnTime_s??void 0,turnedOnAt:o.turnedOnAt?o.turnedOnAt.toDate():void 0};e(l)}else console.error("Relay not found")})}const Ms=Mi("relay",()=>{const t=le([]),e=le(!1),n=le(null),r=le({}),s=async()=>{e.value=!0,n.value=null;try{t.value=await dS(),t.value.forEach(I=>{m(I.id)})}catch(I){n.value="Failed to load relays",console.error(I)}finally{e.value=!1}},i=async(I,S,P)=>{try{await pS(I,S,P);const V=t.value.find(F=>F.id===I);V&&(V.name=S,V.maxOnTime_s=P)}catch(V){console.error("Failed to update relay config:",V)}},o=async(I,S)=>{try{await fS(I,S);const P=t.value.find(V=>V.id===I);P&&(P.state=S)}catch(P){console.error("Failed to update relay state:",P)}},l=async I=>{try{const S=await mS(I);t.value.push(S),m(S.id)}catch(S){console.error("Failed to add relay:",S)}},c=async I=>{try{await gS(I),t.value=t.value.filter(S=>S.id!==I),_(I)}catch(S){console.error("Failed to delete relay:",S)}},h=async I=>{try{return await _S(I)}catch(S){return console.error("Failed to check relay name uniqueness:",S),!1}};function d(I){return p(I.maxOnTime_s?I.maxOnTime_s:0)}function p(I){if(isNaN(I)||I<0)return"00:00:00";const S=Math.floor(I/3600),P=Math.floor(I%3600/60),V=I%60,F=String(S).padStart(2,"0"),j=String(P).padStart(2,"0"),q=String(V).padStart(2,"0");return`${F}:${j}:${q}`}const m=I=>{_(I),r.value[I]=yS(I,S=>{const P=t.value.findIndex(V=>V.id===I);P!==-1&&(t.value[P]=S)})},_=I=>{r.value[I]&&(r.value[I](),delete r.value[I])};return qc(()=>{Object.keys(r.value).forEach(I=>{_(I)})}),{relays:t,loading:e,error:n,loadRelays:s,updateRelayConfig:i,updateRelayState:o,addRelay:l,isRelayNameUnique:h,deleteRelay:c,getMaxOnTime:d,secondsToHHMMSS:p}}),vS=Le({components:{ToggleButton:lb},props:{relay:{type:Object,required:!0}},setup(t){const e=Ms(),n=le(0);let r;const s=le(t.relay.turnedOnAt),i=le(!1);jc(async()=>{await l()}),Np(()=>{clearTimeout(r)});const o=qe(()=>{let m=t.relay.name;return t.relay.maxOnTime_s&&t.relay.maxOnTime_s>0&&(t.relay.state?m+=" - "+e.secondsToHHMMSS(n.value):m+=" - "+e.getMaxOnTime(t.relay)),m});async function l(){t.relay.maxOnTime_s!==0&&(n.value=h(),n.value!==0&&t.relay.state&&d())}async function c(m){m&&t.relay.maxOnTime_s&&(n.value=t.relay.maxOnTime_s),m?(s.value=t.relay.turnedOnAt,i.value=!0):i.value=!1,await e.updateRelayState(t.relay.id,m),!(!t.relay.maxOnTime_s||t.relay.maxOnTime_s===0)&&(m||(clearTimeout(r),n.value=0))}function h(){if(!t.relay.turnedOnAt||!t.relay.maxOnTime_s)return 0;const m=t.relay.turnedOnAt.getTime()+t.relay.maxOnTime_s*1e3;return Math.max(0,Math.floor((m-Date.now())/1e3))}function d(){!t.relay.maxOnTime_s||t.relay.maxOnTime_s===0||(clearTimeout(r),r=setTimeout(async()=>{n.value--,n.value!==0&&d()},1e3))}function p(){!s.value||!t.relay.turnedOnAt||s.value>=t.relay.turnedOnAt||(i.value=!1,d())}return sr(()=>t.relay.turnedOnAt,p),{displayName:o,isBlocked:i,handleToggle:c}}}),ES={class:"relay"},wS={class:"name"};function TS(t,e,n,r,s,i){const o=Ie("toggle-button");return G(),se("div",ES,[Y("div",wS,Ve(t.displayName),1),_e(o,{modelValue:t.$props.relay.state,isBlocked:t.isBlocked,"onUpdate:modelValue":t.handleToggle},null,8,["modelValue","isBlocked","onUpdate:modelValue"])])}const IS=He(vS,[["render",TS],["__scopeId","data-v-5dc99cd3"]]),bS=Le({name:"SwipeableListItem",emits:["left-action","right-action"],props:{blockSwipe:{type:Boolean,default:!1}},setup(t,{emit:e}){const n=le(0),r=le(0),s=le(0),i=le(0),o=le(!1),l=le(!1);let c=100,h=le(!1),d=le(!1);const p=V=>{t.blockSwipe||(n.value=V.touches[0].clientX,r.value=V.touches[0].clientY,c=V.currentTarget.clientWidth/4,i.value=Date.now(),h.value=!1,d.value=!1)},m=V=>{if(t.blockSwipe)return;const F=V.touches[0].clientX,j=V.touches[0].clientY,q=F-n.value,oe=j-r.value;if(d.value&&h.value){_(q);return}d.value||(Math.abs(q)>Math.abs(oe)?(h.value=!0,d.value=!0,_(q)):(h.value=!1,d.value=!0))},_=V=>{s.value=V,Math.abs(s.value)>c*2?l.value=!0:Math.abs(s.value)>c?(l.value=!1,o.value=!0):(l.value=!1,o.value=!1)},I=()=>{if(t.blockSwipe||!h.value)return;const V=Date.now()-i.value;l.value&&V>1e3&&(s.value<0?P():S()),s.value=0,l.value=!1,o.value=!1},S=()=>{e("left-action")},P=()=>{e("right-action")};return{onTouchStart:p,onTouchMove:m,onTouchEnd:I,onLeftAction:S,onRightAction:P,translateX:s,thresholdOneHit:o}}}),AS={class:"actions actions-left"},RS={class:"actions actions-right"};function SS(t,e,n,r,s,i){return G(),se("div",{class:"swipeable-list-item",onTouchstart:e[0]||(e[0]=(...o)=>t.onTouchStart&&t.onTouchStart(...o)),onTouchmove:e[1]||(e[1]=(...o)=>t.onTouchMove&&t.onTouchMove(...o)),onTouchend:e[2]||(e[2]=(...o)=>t.onTouchEnd&&t.onTouchEnd(...o))},[Y("div",{class:qt(["buttons",{"direction-left":t.translateX>0,"direction-right":t.translateX<0,"threshold-one-hit":t.thresholdOneHit}])},[Y("div",AS,[bo(t.$slots,"left-action",{},()=>[e[3]||(e[3]=Dn("Edit"))])]),Y("div",RS,[bo(t.$slots,"right-action",{},()=>[e[4]||(e[4]=Dn("Delete"))])])],2),Y("div",{class:"content",style:yn({transform:`translateX(${t.translateX}px)`})},[bo(t.$slots,"default",{},void 0)],4)],32)}const CS=He(bS,[["render",SS],["__scopeId","data-v-b07fba68"]]),PS=Le({components:{ButtonDefault:xi},emits:["isDone"],props:{allowAdvancedSettings:{type:Boolean,default:!1},existingRelay:{type:Object,default:null}},setup(t,e){const n=Ms(),r=le(""),s=le(""),i=le("");jc(()=>{t.existingRelay&&(r.value=t.existingRelay.name,s.value=n.getMaxOnTime(t.existingRelay))});async function o(){if(!await c()||!h())return;const p=d();t.existingRelay?await n.updateRelayConfig(t.existingRelay.id,r.value.trim(),p):await n.addRelay({name:r.value.trim(),state:!1,maxOnTime_s:p}),r.value="",e.emit("isDone")}function l(){e.emit("isDone")}async function c(){return r.value.trim().length<2?(i.value="Relay name must be at least 2 characters long.",!1):t.existingRelay&&t.existingRelay.name===r.value.trim()?!0:await n.isRelayNameUnique(r.value.trim())?(i.value="",!0):(i.value="Relay name already exists.",!1)}function h(){if(!t.allowAdvancedSettings)return!0;const p=s.value.trim();if(p==="")return!0;const _=/^([01]\d|2[0-3]):([0-5]\d):([0-5]\d)$/.test(p);return _||(i.value="Max on time must be in the format HH:MM:SS."),_}function d(){if(!t.allowAdvancedSettings)return 0;const p=s.value.trim(),[m,_,I]=p.split(":").map(Number);return m*3600+_*60+I}return{newRelayName:r,newMaxOnTime:s,nameError:i,saveRelay:o,abortChanges:l}}}),kS={class:"relay-editable"},DS={key:0,class:"header"},NS={key:1,class:"max-on-time"},VS={class:"action-buttons"},OS={key:2,class:"name-error"};function MS(t,e,n,r,s,i){const o=Ie("button-default");return G(),se("div",kS,[t.$props.allowAdvancedSettings?(G(),se("div",DS,"Name")):$e("",!0),ql(Y("input",{"onUpdate:modelValue":e[0]||(e[0]=l=>t.newRelayName=l),type:"text",placeholder:"Relay name",class:"relay-input"},null,512),[[Xl,t.newRelayName]]),t.$props.allowAdvancedSettings?(G(),se("div",NS,[e[2]||(e[2]=Y("div",{class:"header"},"Max on time",-1)),ql(Y("input",{"onUpdate:modelValue":e[1]||(e[1]=l=>t.newMaxOnTime=l),type:"text",placeholder:"HH:MM:SS or keep empty",class:"max-on-time-input"},null,512),[[Xl,t.newMaxOnTime]])])):$e("",!0),Y("div",VS,[_e(o,{class:"button-save",text:"Save",onClick:t.saveRelay},null,8,["onClick"]),_e(o,{class:"button-cancel",text:"Cancel",onClick:t.abortChanges},null,8,["onClick"])]),t.nameError?(G(),se("div",OS,Ve(t.nameError),1)):$e("",!0)])}const xS=He(PS,[["render",MS],["__scopeId","data-v-5c52aaf5"]]),LS=Le({components:{RelayEditable:xS,SwipeableListItem:CS,ButtonDefault:xi,Relay:IS,Spinner:ba},emits:["requestScrollToBottom"],setup(t,e){const n=Ms(),r=le(!1),s=le(""),i=le(!1),o=le([]);let l=0,c=0;$r(()=>{n.loadRelays()});const h=P=>{if(i.value)return;const V=P.touches[0];l=V.clientY,c=V.clientX},d=P=>{if(i.value)return;const V=P.touches[0],F=Math.abs(V.clientX-c),j=Math.abs(V.clientY-l);j<=F||j<=40||(i.value=!0,setTimeout(()=>e.emit("requestScrollToBottom")))};function p(){r.value=!0,setTimeout(()=>e.emit("requestScrollToBottom"))}function m(P){s.value=P;const V=n.relays.findIndex(F=>F.id===P);!o.value||!o.value[V]||setTimeout(()=>{var F;return e.emit("requestScrollToBottom",(F=o.value[V])==null?void 0:F.$el)})}async function _(P){await n.deleteRelay(P)}function I(){s.value=""}function S(){r.value=!1}return{ref_relayItems:o,relayStore:n,isAddingNewRelay:r,editableRelayId:s,isVerticallySwiped:i,startAddingRelay:p,requestEdit:m,requestDelete:_,onEditArrayDone:I,onAddNewArrayDone:S,onTouchStart:h,onTouchMove:d}}}),FS={key:1};function US(t,e,n,r,s,i){const o=Ie("spinner"),l=Ie("relay-editable"),c=Ie("relay"),h=Ie("swipeable-list-item"),d=Ie("button-default");return G(),se("div",{class:"relays",onTouchstart:e[0]||(e[0]=(...p)=>t.onTouchStart&&t.onTouchStart(...p)),onTouchmove:e[1]||(e[1]=(...p)=>t.onTouchMove&&t.onTouchMove(...p))},[t.relayStore.loading?(G(),Ye(o,{key:0,"spinner-size":"20px","with-text":!0})):$e("",!0),!t.relayStore.loading&&!t.relayStore.error?(G(),se("div",FS,[(G(!0),se(rt,null,Br(t.relayStore.relays,p=>(G(),Ye(h,{ref_for:!0,ref:"ref_relayItems",key:p.id,blockSwipe:t.editableRelayId.length>0||p.state||t.isAddingNewRelay,onLeftAction:m=>t.requestEdit(p.id),onRightAction:m=>t.requestDelete(p.id)},{default:hn(()=>[t.editableRelayId&&t.editableRelayId===p.id?(G(),Ye(l,{key:p.id,allowAdvancedSettings:!0,existingRelay:p,onIsDone:t.onEditArrayDone},null,8,["existingRelay","onIsDone"])):(G(),Ye(c,{key:p.id,relay:p},null,8,["relay"]))]),_:2},1032,["blockSwipe","onLeftAction","onRightAction"]))),128))])):$e("",!0),!t.isAddingNewRelay&&t.isVerticallySwiped&&t.editableRelayId.length===0?(G(),Ye(d,{key:2,text:"Add new Relay",onOnButtonClicked:t.startAddingRelay},null,8,["onOnButtonClicked"])):$e("",!0),t.isAddingNewRelay&&t.isVerticallySwiped&&t.editableRelayId.length===0?(G(),Ye(l,{key:3,onIsDone:t.onAddNewArrayDone},null,8,["onIsDone"])):$e("",!0)],32)}const B_=He(LS,[["render",US],["__scopeId","data-v-bdf8a35d"]]),Hu=Ha(Ze),j_=Fr(Hu,"schedules");async function $S(){const e=yt(Ze).currentUser;if(!e)throw new Error("User is not authenticated");const n=Xi(j_,Ur("uid","==",e.uid));return(await Yi(n)).docs.map(s=>{const i=s.data();return{id:s.id,uid:i.uid,name:i.name,timeStart:i.timeStart,duration:i.duration,relays:i.relays||[],days:i.days||[]}})}async function BS(t){const n=yt(Ze).currentUser;if(!n)throw new Error("User is not authenticated");const r={...t,uid:n.uid};return{id:(await L_(j_,r)).id,...r}}async function jS(t,e){if(!yt(Ze).currentUser)throw new Error("User is not authenticated");const s=Yt(Hu,"schedules",t);await qu(s,e)}async function qS(t){if(!yt(Ze).currentUser)throw new Error("User is not authenticated");const r=Yt(Hu,"schedules",t);await x_(r)}const HS=Mi("schedule",()=>{const t=le([]),e=le(!1),n=le(null);return{schedules:t,loading:e,error:n,loadSchedules:async()=>{e.value=!0,n.value=null;try{t.value=await $S()}catch(l){n.value="Failed to load schedules",console.error(l)}finally{e.value=!1}},addSchedule:async l=>{try{const c=await BS(l);t.value.push(c)}catch(c){console.error("Failed to add schedule:",c)}},updateSchedule:async(l,c)=>{try{await jS(l,c);const h=t.value.find(d=>d.id===l);h&&Object.assign(h,c)}catch(h){console.error("Failed to update schedule:",h)}},deleteSchedule:async l=>{try{await qS(l),t.value=t.value.filter(c=>c.id!==l)}catch(c){console.error("Failed to delete schedule:",c)}}}}),zS=Le({props:{schedule:{type:Object,required:!0}},setup(t){const e=["Mo","Tu","We","Th","Fr","Sa","Su"],n=qe(()=>{const[s,i,o]=t.schedule.timeStart.split(":").map(Number),[l,c,h]=t.schedule.duration.split(":").map(Number),d=new Date;return d.setHours(s+l),d.setMinutes(i+c),d.setSeconds(o+h),`${String(d.getHours()).padStart(2,"0")}:${String(d.getMinutes()).padStart(2,"0")}:${String(d.getSeconds()).padStart(2,"0")}`}),r=qe(()=>t.schedule.days.map(s=>s.slice(0,2)));return{endTime:n,allDays:e,selectedDays:r}}}),WS={class:"schedule-item"},KS={class:"schedule-name"},GS={class:"times"},QS={class:"schedule-time"},XS={class:"duration"},YS={class:"schedule-days"};function JS(t,e,n,r,s,i){return G(),se("div",WS,[Y("div",KS,Ve(t.schedule.name),1),Y("div",GS,[Y("div",QS,Ve(t.schedule.timeStart)+" - "+Ve(t.endTime),1),Y("div",XS,"("+Ve(t.schedule.duration)+")",1)]),Y("div",YS,[(G(!0),se(rt,null,Br(t.allDays,o=>(G(),se("span",{key:o,class:qt([{selected:t.selectedDays.includes(o)},"day"])},Ve(o),3))),128))])])}const ZS=He(zS,[["render",JS],["__scopeId","data-v-f470525b"]]),eC=Le({components:{Schedule:ZS,Spinner:ba},setup(){const t=HS();return $r(async()=>{await t.loadSchedules()}),{scheduleStore:t}}}),tC={class:"schedules"},nC={key:1},rC={key:0};function sC(t,e,n,r,s,i){const o=Ie("spinner"),l=Ie("Schedule");return G(),se("div",tC,[t.scheduleStore.loading?(G(),Ye(o,{key:0,"spinner-size":"20px","with-text":!0})):$e("",!0),!t.scheduleStore.loading&&!t.scheduleStore.error?(G(),se("div",nC,[t.scheduleStore.schedules.length?(G(),se("div",rC,[(G(!0),se(rt,null,Br(t.scheduleStore.schedules,c=>(G(),Ye(l,{key:c.id,schedule:c},null,8,["schedule"]))),128))])):$e("",!0)])):$e("",!0)])}const q_=He(eC,[["render",sC],["__scopeId","data-v-acbf9593"]]),Xa=Mi("page",()=>{const t=le("relays"),e=le(),n={home:"Relay Hub",boards:"Boards",board:"Board",relays:"Relay Control",schedules:"Task Schedules"},r=o=>{t.value=o},s=qe(()=>n[t.value]||"Unknown Page");return{currentPage:t,currentPageTitle:s,navigateBackPage:e,setPage:r,setNavigateBackPage:o=>{e.value=o}}}),iC=Le({props:{title:{type:String,required:!0}},setup(){return{}}}),oC={class:"page-tite"};function aC(t,e,n,r,s,i){return G(),se("div",oC,Ve(t.$props.title),1)}const lC=He(iC,[["render",aC],["__scopeId","data-v-7de7892e"]]),cC=Le({props:{color:{type:String,default:"white"}},setup(t){return{iconBackStyle:qe(()=>({"--icon-color":t.color}))}}});function uC(t,e,n,r,s,i){return G(),se("div",{class:"icon-back",style:yn(t.iconBackStyle)},e[0]||(e[0]=[Y("svg",{viewBox:"0 0 24 24",class:"icon",xmlns:"http://www.w3.org/2000/svg"},[Y("path",{d:"m 16.962167,22.810082 c 0.297374,0.270339 0.75695,0.243306 1.027288,-0.05406 0.270339,-0.297374 0.243307,-0.75695 -0.05406,-1.027288 L 7.4732599,12.266854 c -0.2703387,-0.243306 -0.2703387,-0.594746 0,-0.83805 L 17.935388,2.2913399 c 0.297374,-0.2703387 0.324406,-0.729915 0.0811,-1.0272884 C 17.746147,0.96667721 17.286569,0.93964454 16.989198,1.1829535 L 6.5270732,10.347447 c -0.9191536,0.811018 -0.9461886,2.162712 -0.027033,3.000764 z",style:{"stroke-width":"0.0337924"}})],-1)]),4)}const hC=He(cC,[["render",uC],["__scopeId","data-v-0a839df4"]]),dC=Le({components:{IconBack:hC,PageTitle:lC},setup(){const t=Xa(),e=Gc();function n(){t.navigateBackPage&&(e.push({name:t.navigateBackPage}),t.setNavigateBackPage(null))}return{pageStore:t,onNavigateBack:n}}}),fC={class:"top-bar"};function pC(t,e,n,r,s,i){const o=Ie("icon-back"),l=Ie("PageTitle");return G(),se("div",fC,[Y("div",{class:"icon-back-wrapper",onClick:e[0]||(e[0]=(...c)=>t.onNavigateBack&&t.onNavigateBack(...c))},[t.pageStore.navigateBackPage?(G(),Ye(o,{key:0},{default:hn(()=>e[1]||(e[1]=[Dn(" Back ")])),_:1})):$e("",!0)]),_e(l,{title:t.pageStore.currentPageTitle},null,8,["title"])])}const mC=He(dC,[["render",pC],["__scopeId","data-v-7fb2cb61"]]),gC=Le({props:{color:{type:String,default:"white"},text:{type:String,default:""},fontSize:{type:String,default:"11px"}},setup(t){return{iconRaspberryStyle:qe(()=>({"--icon-color":t.color,fontSize:t.fontSize}))}}}),_C={key:0,class:"text"};function yC(t,e,n,r,s,i){return G(),se("div",{class:"icon-raspberry",style:yn(t.iconRaspberryStyle)},[e[0]||(e[0]=Y("svg",{fill:"#000000",viewBox:"-2.5 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[Y("path",{d:"m 13.656,17.338 c -0.857,0.989 -1.334,2.79 -0.709,3.371 0.6,0.449 2.2,0.391 3.385,-1.23 0.344,-0.487 0.551,-1.093 0.551,-1.747 0,-0.603 -0.175,-1.164 -0.477,-1.637 l 0.007,0.012 c -0.73,-0.555 -1.778,0.164 -2.757,1.243 z m -8.057,0.3 c -0.908,-1.04 -2.088,-1.658 -2.851,-1.2 -0.51,0.382 -0.605,1.685 0.123,2.967 1.078,1.524 2.6,1.679 3.221,1.307 0.659,-0.488 0.3,-2.137 -0.493,-3.075 z m 4.105,3.145 c -1.1,-0.026 -2.8,0.439 -2.776,1.032 -0.018,0.4 1.331,1.572 2.7,1.513 1.326,0.03 2.7,-1.139 2.682,-1.649 -0.018,-0.51 -1.5,-0.927 -2.607,-0.884 z M 9.629,6.839 c -1.275,-0.032 -2.5,0.933 -2.5,1.493 0,0.68 1.008,1.376 2.51,1.394 1.543,0.01 2.518,-0.559 2.532,-1.26 C 12.187,7.672 10.777,6.827 9.653,6.839 Z M 6.558,7.371 C 4.423,7.026 2.645,8.271 2.716,10.563 2.786,11.447 7.346,7.522 6.559,7.386 V 7.371 Z m 9.749,3.251 c 0.071,-2.277 -1.709,-3.521 -3.844,-3.176 -0.787,0.135 3.772,4.061 3.844,3.176 z m 0.364,0.824 c -1.239,-0.329 -0.42,5.049 0.588,4.615 0.551,-0.525 0.894,-1.265 0.894,-2.084 0,-1.077 -0.592,-2.015 -1.468,-2.508 l -0.014,-0.007 v -0.015 z m -14.9,4.675 c 1.007,0.45 1.827,-4.929 0.589,-4.6 -0.891,0.504 -1.483,1.445 -1.483,2.525 0,0.821 0.343,1.563 0.893,2.089 l 10e-4,10e-4 z m 9.415,-5.948 c -0.63,0.49 -1.032,1.249 -1.032,2.101 0,0.624 0.215,1.197 0.575,1.65 l -0.004,-0.005 c 0.492,0.838 1.388,1.392 2.414,1.392 0.467,0 0.908,-0.115 1.295,-0.318 L 14.419,15 c 0.631,-0.49 1.034,-1.248 1.034,-2.101 0,-0.624 -0.215,-1.197 -0.576,-1.65 l 0.004,0.005 c -0.484,-0.835 -1.374,-1.388 -2.393,-1.388 -0.476,0 -0.923,0.121 -1.314,0.333 l 0.015,-0.007 z m -3.1,0.135 C 7.713,10.109 7.27,9.993 6.8,9.993 c -1.02,0 -1.911,0.548 -2.395,1.366 l -0.007,0.013 c -0.357,0.45 -0.572,1.026 -0.572,1.652 0,0.855 0.402,1.616 1.027,2.105 l 0.006,0.004 c 0.376,0.205 0.823,0.325 1.298,0.325 1.019,0 1.909,-0.553 2.386,-1.376 L 8.55,14.069 c 0.352,-0.448 0.564,-1.019 0.564,-1.64 0,-0.853 -0.4,-1.612 -1.024,-2.1 L 8.084,10.325 Z m 4.369,7.162 c -0.077,-1.399 -1.23,-2.504 -2.641,-2.504 -0.049,0 -0.098,0.001 -0.147,0.004 H 9.674 C 9.646,14.969 9.612,14.968 9.579,14.968 c -1.423,0 -2.585,1.119 -2.653,2.526 v 0.006 0.029 c 0.078,1.399 1.232,2.504 2.643,2.504 0.049,0 0.098,-0.001 0.147,-0.004 H 9.709 c 0.035,0.002 0.076,0.003 0.117,0.003 1.413,0 2.566,-1.116 2.625,-2.514 v -0.005 -0.029 l 0.01,-0.015 z M 15.67,2.337 c -1.69,0.771 -3.14,1.756 -4.396,2.945 l 0.007,-0.007 c 0.377,1.5 2.344,1.558 3.063,1.512 C 14.205,6.743 14.093,6.646 14.03,6.521 L 14.029,6.518 C 14.209,6.398 14.85,6.502 15.297,6.263 15.126,6.233 15.045,6.202 14.968,6.063 15.4,5.968 15.781,5.808 16.124,5.591 L 16.109,5.6 C 16.076,5.605 16.039,5.609 16,5.609 c -0.132,0 -0.256,-0.037 -0.361,-0.1 l 0.003,0.002 c 0.419,-0.179 0.779,-0.4 1.103,-0.664 l -0.008,0.006 c -0.2,0 -0.406,0 -0.466,-0.075 0.336,-0.197 0.625,-0.429 0.875,-0.698 l 0.002,-0.002 c -0.272,0.045 -0.39,0.016 -0.454,-0.03 0.295,-0.226 0.544,-0.494 0.742,-0.798 l 0.007,-0.012 c -0.076,0.04 -0.166,0.063 -0.261,0.063 -0.095,0 -0.185,-0.023 -0.264,-0.064 l 0.003,0.002 c 0.091,-0.194 0.47,-0.314 0.69,-0.779 -0.073,0.019 -0.157,0.031 -0.243,0.031 -0.086,0 -0.17,-0.011 -0.25,-0.032 l 0.007,0.002 C 17.218,2.133 17.367,1.848 17.564,1.602 L 17.56,1.607 C 17.465,1.611 17.354,1.613 17.242,1.613 16.961,1.613 16.684,1.6 16.41,1.575 l 0.035,0.003 0.283,-0.285 C 16.604,1.269 16.462,1.255 16.316,1.255 c -0.297,0 -0.58,0.058 -0.839,0.164 l 0.015,-0.005 c -0.149,-0.105 0,-0.255 0.185,-0.4 -0.385,0.05 -0.734,0.138 -1.065,0.262 L 14.645,1.265 C 14.481,1.115 14.745,0.98 14.885,0.829 14.472,0.9 14.104,1.047 13.779,1.256 L 13.791,1.249 C 13.611,1.084 13.776,0.935 13.891,0.8 13.537,0.937 13.234,1.13 12.975,1.37 l 0.002,-0.002 c -0.09,-0.1 -0.209,-0.179 -0.06,-0.449 -0.291,0.162 -0.535,0.373 -0.73,0.624 l -0.004,0.005 c -0.194,-0.134 -0.119,-0.3 -0.119,-0.449 -0.285,0.253 -0.545,0.518 -0.785,0.8 L 11.27,1.91 C 11.209,1.879 11.17,1.76 11.135,1.564 10.356,2.314 9.246,4.187 10.85,4.92 12.21,3.854 13.799,3.001 15.522,2.45 L 15.629,2.42 15.67,2.345 Z m -12.259,0 C 5.242,2.92 6.831,3.778 8.219,4.879 L 8.188,4.855 C 9.788,4.105 8.681,2.232 7.906,1.499 7.865,1.693 7.821,1.828 7.771,1.858 7.522,1.566 7.264,1.301 6.991,1.055 L 6.983,1.048 c 0,0.15 0.077,0.33 -0.117,0.45 C 6.673,1.24 6.432,1.029 6.156,0.874 L 6.145,0.868 C 6.294,1.124 6.17,1.198 6.089,1.317 5.842,1.059 5.542,0.855 5.206,0.723 L 5.189,0.717 c 0.12,0.149 0.3,0.3 0.12,0.465 C 5,0.979 4.636,0.832 4.245,0.765 L 4.228,0.763 c 0.135,0.149 0.4,0.3 0.238,0.45 C 4.165,1.093 3.816,1.002 3.452,0.957 L 3.431,0.955 c 0.181,0.15 0.342,0.289 0.192,0.4 C 3.372,1.245 3.08,1.182 2.774,1.182 2.631,1.182 2.49,1.196 2.355,1.222 L 2.369,1.22 2.653,1.504 C 2.411,1.53 2.13,1.545 1.846,1.545 c -0.11,0 -0.22,-0.002 -0.33,-0.007 l 0.016,10e-4 c 0.199,0.238 0.35,0.525 0.432,0.839 l 0.003,0.015 c -0.045,0.045 -0.27,0.016 -0.483,0 0.225,0.449 0.6,0.57 0.688,0.765 C 2.096,3.199 2.006,3.223 1.911,3.223 1.816,3.223 1.725,3.199 1.647,3.157 L 1.65,3.158 C 1.869,3.465 2.115,3.731 2.391,3.963 L 2.398,3.968 C 2.315,4.007 2.217,4.029 2.115,4.029 2.051,4.029 1.988,4.02 1.929,4.004 l 0.005,0.001 c 0.251,0.269 0.537,0.5 0.851,0.69 l 0.018,0.01 C 2.743,4.775 2.532,4.774 2.324,4.78 2.639,5.04 3,5.263 3.389,5.432 L 3.418,5.443 C 3.316,5.514 3.19,5.556 3.053,5.556 3.018,5.556 2.983,5.553 2.949,5.548 h 0.004 c 0.327,0.21 0.708,0.371 1.116,0.46 L 4.092,6.012 C 4.021,6.13 3.894,6.209 3.748,6.212 4.197,6.466 4.826,6.347 5.006,6.482 4.942,6.61 4.831,6.707 4.696,6.751 L 4.692,6.752 C 5.411,6.797 7.392,6.737 7.764,5.238 6.516,4.061 5.065,3.081 3.472,2.361 L 3.373,2.321 3.413,2.337 Z M 5.145,0.1 C 5.388,0.133 5.608,0.203 5.809,0.305 L 5.797,0.3 C 6.326,0.13 6.447,0.363 6.707,0.459 7.284,0.339 7.459,0.6 7.736,0.878 L 8.058,0.869 C 8.765,1.358 9.283,2.075 9.509,2.913 L 9.515,2.938 C 9.746,2.076 10.264,1.359 10.96,0.881 l 0.012,-0.008 0.321,0.007 c 0.277,-0.28 0.452,-0.539 1.029,-0.418 0.261,-0.1 0.38,-0.33 0.911,-0.166 0.33,-0.1 0.62,-0.375 1.057,-0.045 0.131,-0.076 0.289,-0.121 0.457,-0.121 0.224,0 0.429,0.08 0.589,0.213 L 15.335,0.342 c 0.5,-0.06 0.653,0.061 0.774,0.21 0.108,0 0.809,-0.1 1.132,0.36 0.81,-0.09 1.064,0.464 0.774,0.988 0.114,0.121 0.185,0.284 0.185,0.464 0,0.204 -0.091,0.387 -0.234,0.511 l -0.001,10e-4 c 0.15,0.269 0.062,0.553 -0.27,0.913 0.014,0.055 0.023,0.117 0.023,0.182 0,0.284 -0.159,0.53 -0.393,0.655 l -0.004,0.002 c 0.06,0.51 -0.48,0.81 -0.629,0.914 -0.061,0.3 -0.181,0.584 -0.8,0.734 -0.089,0.449 -0.464,0.523 -0.824,0.614 1.309,0.619 2.199,1.929 2.199,3.446 0,0.1 -0.004,0.2 -0.012,0.298 l 0.001,-0.013 0.181,0.3 c 0.991,0.664 1.634,1.779 1.634,3.045 0,0.953 -0.365,1.821 -0.963,2.472 l 0.002,-0.003 c -0.139,0.635 -0.315,1.186 -0.535,1.713 l 0.024,-0.065 c -0.211,1.48 -1.197,2.687 -2.528,3.209 l -0.027,0.01 c -0.697,0.564 -1.506,1.025 -2.384,1.344 l -0.058,0.019 c -0.745,0.815 -1.809,1.328 -2.993,1.337 H 9.515 C 8.324,23.995 7.253,23.483 6.506,22.67 L 6.503,22.667 C 5.565,22.328 4.755,21.866 4.04,21.289 l 0.016,0.013 C 2.698,20.769 1.71,19.563 1.497,18.105 L 1.494,18.083 C 1.296,17.618 1.118,17.062 0.989,16.488 L 0.976,16.421 C 0.377,15.772 0.01,14.902 0.01,13.946 c 0,-1.265 0.644,-2.38 1.621,-3.036 l 0.013,-0.008 0.172,-0.3 C 1.809,10.517 1.805,10.418 1.805,10.318 1.805,8.801 2.694,7.491 3.981,6.882 L 4.004,6.872 C 3.645,6.782 3.284,6.707 3.181,6.257 2.566,6.107 2.446,5.823 2.381,5.523 2.231,5.418 1.692,5.123 1.752,4.595 1.513,4.465 1.353,4.215 1.353,3.928 1.353,3.861 1.362,3.797 1.378,3.735 L 1.377,3.74 C 1.063,3.394 0.977,3.095 1.107,2.825 0.963,2.702 0.873,2.52 0.873,2.317 0.873,2.136 0.945,1.971 1.062,1.851 0.777,1.326 1.032,0.757 1.841,0.851 2.158,0.386 2.864,0.492 2.967,0.492 3.088,0.342 3.252,0.207 3.746,0.267 3.908,0.134 4.117,0.053 4.345,0.053 4.51,0.053 4.665,0.095 4.8,0.169 L 4.795,0.167 C 4.903,0.07 5.044,0.008 5.2,0.001 h 10e-4 z"})],-1)),t.$props.text&&t.$props.text.length>0?(G(),se("div",_C,Ve(t.$props.text),1)):$e("",!0)],4)}const vC=He(gC,[["render",yC],["__scopeId","data-v-5243a882"]]),EC=Le({components:{IconRaspberry:vC,IconSchedule:Tm,IconLightSwitch:wm},setup(){return{}}}),wC={class:"home"};function TC(t,e,n,r,s,i){const o=Ie("icon-raspberry"),l=Ie("router-link"),c=Ie("icon-light-switch"),h=Ie("icon-schedule");return G(),se("div",wC,[_e(l,{to:"/boards",class:"tile boards"},{default:hn(()=>[Y("span",null,[_e(o,{text:"Boards",strokeColor:"deeppink",fontSize:"22px"})])]),_:1}),_e(l,{to:"/relays",class:"tile relays"},{default:hn(()=>[Y("span",null,[_e(c,{text:"Relays",fontSize:"22px"})])]),_:1}),$e("",!0),_e(l,{to:"/schedules",class:"tile schedules"},{default:hn(()=>[Y("span",null,[_e(h,{strokeColor:"orange",text:"Schedules",fontSize:"22px"})])]),_:1}),$e("",!0)])}const H_=He(EC,[["render",TC],["__scopeId","data-v-37ea29cb"]]),ms=Ha(Ze),IC=Fr(ms,"boards"),bC=Fr(ms,"pinConfigs");async function AC(){const e=yt(Ze).currentUser;if(!e)throw new Error("User is not authenticated");const n=Xi(IC,Ur("uid","==",e.uid));return(await Yi(n)).docs.map(s=>{const i=s.data();return{id:s.id,uid:i.uid,model:i.model,name:i.name,updatedAt:i.updatedAt.toDate(),createdAt:i.createdAt.toDate()}})}async function RC(t){if(!yt(Ze).currentUser)throw new Error("User is not authenticated");const r=Yt(ms,"boards",t),s=await M_(r);if(!s.exists())throw new Error(`Board with ID ${t} does not exist`);const i=s.data();return{id:t,uid:i.uid,name:i.name,model:i.model,createdAt:i.createdAt.toDate(),updatedAt:i.updatedAt.toDate()}}async function SC(t){const n=yt(Ze).currentUser;if(!n)throw new Error("User is not authenticated");try{const r=Xi(bC,Ur("uid","==",n.uid),Ur("boardId","==",t));return(await Yi(r)).docs.map(i=>{const o=i.data();return{id:i.id,uid:o.uid,mode:o.mode,boardId:o.boardId,pinNumber:o.pinNumber,relayId:o.relayId,relayName:o.relayName}})}catch(r){throw console.error("Error fetching pinConfigs:",r),r}}async function CC(t,e,n){const s=yt(Ze).currentUser;if(!s)throw new Error("User is not authenticated");if(n<=0)throw new Error("Number of pins must be greater than 0");const i=U_(ms),o=Yt(Fr(ms,"boards")),l={uid:s.uid,name:t,model:e,createdAt:Rc(),updatedAt:Rc()};i.set(o,l);for(let d=1;d<=n;d++){const p=Yt(Fr(ms,"pinConfigs")),m={uid:s.uid,pinNumber:d,mode:"input",boardId:o.id};i.set(p,m)}await i.commit();const c=await M_(o);if(!c.exists())throw new Error("Failed to retrieve the created board");const h=c.data();return{id:o.id,uid:h.uid,name:h.name,model:h.model,createdAt:h.createdAt.toDate(),updatedAt:h.updatedAt.toDate()}}async function PC(t){if(!yt(Ze).currentUser)throw new Error("User is not authenticated");if(!t.id)throw new Error("PinConfig ID is missing");if(!t.boardId)throw new Error("Board ID is missing in PinConfig");const r=Ha(Ze),s=Yt(r,"pinConfigs",t.id),i=Yt(r,"boards",t.boardId),o=U_(r);o.update(s,{mode:t.mode}),o.update(i,{updatedAt:Rc()}),await o.commit()}const z_=Mi("board",()=>{const t=le([]),e=le(null),n=le([]),r=le(!1),s=le(!1),i=le(null),o=Ms();return{boards:t,selectedBoard:e,pinConfigs:n,loadingBoards:r,loadingPinConfigs:s,error:i,loadBoards:async()=>{try{r.value=!0,t.value=await AC()}catch(m){console.error("Failed to fetch boards:",m),i.value="Unable to load boards."}finally{r.value=!1}},loadBoardDetails:async()=>{try{if(!e.value)return;s.value=!0;const m=e.value.id;if(e.value){const _=await SC(m);n.value=_.map(I=>{const S=o.relays.find(P=>P.id===I.relayId);return{...I,relayName:S?S.name:""}}).sort((I,S)=>I.pinNumber-S.pinNumber)}}catch(m){console.error("Failed to load board details:",m),i.value="Unable to load board details."}finally{s.value=!1}},addBoardWithPins:async(m,_,I)=>{try{I<=0&&console.error("Number of pins must be greater than 0");const S=await CC(m,_,I);console.log("Board added successfully with pins:",S)}catch(S){console.error("Failed to add new board:",S),i.value="Unable to add new board."}},updatePinConfigMode:async m=>{var _;try{m.mode=m.mode==="input"?"output":"input",await PC(m);const I=n.value.findIndex(P=>P.id===m.id);I!==-1&&(n.value[I]={...m});const S=t.value.findIndex(P=>P.id===m.boardId);if(S!==-1){const P=await RC(m.boardId);t.value[S]={...P},((_=e.value)==null?void 0:_.id)===m.boardId&&(e.value={...P})}}catch(I){console.error("Failed to update PinConfig mode:",I),i.value="Unable to update PinConfig."}},clearSelectedBoard:()=>{e.value=null,n.value=[]}}}),kC=Le({props:{options:{type:Array,required:!0},placeholder:{type:String,default:"Select an option"},modelValue:{type:String,default:null}},emits:["update:modelValue"],setup(t,{emit:e}){const n=le(!1),r=le(t.modelValue);function s(){n.value=!n.value}function i(o){r.value=o.value,e("update:modelValue",o.value),n.value=!1}return{isOpen:n,selectedOption:r,toggleDropdown:s,selectOption:i}}}),DC={class:"custom-dropdown"},NC={key:0,class:"dropdown-list"},VC=["onClick"];function OC(t,e,n,r,s,i){return G(),se("div",DC,[Y("div",{class:"dropdown-selected",onClick:e[0]||(e[0]=(...o)=>t.toggleDropdown&&t.toggleDropdown(...o))},[Dn(Ve(t.selectedOption||t.placeholder)+" ",1),Y("span",{class:qt(["arrow",{open:t.isOpen}])},"▼",2)]),t.isOpen?(G(),se("div",NC,[(G(!0),se(rt,null,Br(t.options,o=>(G(),se("div",{key:o.value,class:qt(["dropdown-item",{selected:o.value===t.selectedOption}]),onClick:l=>t.selectOption(o)},Ve(o.label),11,VC))),128))])):$e("",!0)])}const W_=He(kC,[["render",OC],["__scopeId","data-v-20c408dc"]]),MC=Le({components:{ButtonDefault:xi,Spinner:ba,Dropdown:W_},setup(){const t=Gc(),e=Xa(),n=z_(),r=le(!1),s=le(""),i=le(null),o=le(null),l=[{value:"Raspberry Pi Model B+ V1.2",label:"Raspberry Pi Model B+ V1.2"},{value:"Raspberry Pi 2 Model B V1.1",label:"Raspberry Pi 2 Model B V1.1"},{value:"Raspberry Pi 3 Model B",label:"Raspberry Pi 3 Model B"},{value:"Raspberry Pi 4 Model B",label:"Raspberry Pi 4 Model B"},{value:"Raspberry Pi Zero",label:"Raspberry Pi Zero"},{value:"Raspberry Pi Zero W",label:"Raspberry Pi Zero W"},{value:"Raspberry Pi 400",label:"Raspberry Pi 400"}];$r(()=>{n.loadBoards(),n.clearSelectedBoard()});function c(){o.value=null,s.value="",i.value=null,r.value=!0}function h(p){n.selectedBoard=p,e.setNavigateBackPage("boards"),t.push({name:"board"})}async function d(){if(!s.value||!i.value){o.value="Please fill in all fields.";return}try{o.value=null,await n.addBoardWithPins(s.value,i.value,27),r.value=!1,s.value="",i.value=null}catch{o.value="Failed to add the board. Please try again."}}return{requestAddNewBoard:r,name:s,boardStore:n,selectedModel:i,raspberryPiModels:l,errorMessage:o,requestAddNew:c,requestBoard:h,addNewBoard:d}}}),xC={class:"boards"},LC={key:1},FC=["onClick"],UC={key:2,class:"add-new-board"},$C={class:"popup"},BC={class:"form"},jC={key:0,class:"error"},qC={class:"buttons"};function HC(t,e,n,r,s,i){const o=Ie("spinner"),l=Ie("button-default"),c=Ie("dropdown");return G(),se("div",xC,[t.boardStore.loadingBoards?(G(),Ye(o,{key:0,spinnerSize:"20px",withText:!0})):(G(),se("div",LC,[(G(!0),se(rt,null,Br(t.boardStore.boards,h=>(G(),se("div",{class:"board-name-wrapper",key:h.id,onClick:d=>t.requestBoard(h)},Ve(h.name),9,FC))),128)),_e(l,{text:"Add new board",onClick:t.requestAddNew},null,8,["onClick"])])),t.requestAddNewBoard?(G(),se("div",UC,[Y("div",$C,[e[5]||(e[5]=Y("h3",null,"Add New Board",-1)),Y("div",BC,[e[3]||(e[3]=Y("label",{for:"name"},"Name:",-1)),ql(Y("input",{"onUpdate:modelValue":e[0]||(e[0]=h=>t.name=h),type:"text",placeholder:"Enter board name"},null,512),[[Xl,t.name]]),e[4]||(e[4]=Y("label",null,"Model:",-1)),_e(c,{options:t.raspberryPiModels,modelValue:t.selectedModel,"onUpdate:modelValue":e[1]||(e[1]=h=>t.selectedModel=h),placeholder:"Select a Raspberry Pi model"},null,8,["options","modelValue"]),t.errorMessage?(G(),se("p",jC,Ve(t.errorMessage),1)):$e("",!0),Y("div",qC,[_e(l,{text:"Add",onClick:t.addNewBoard},null,8,["onClick"]),_e(l,{text:"Cancel",onClick:e[2]||(e[2]=h=>t.requestAddNewBoard=!1)})])])])])):$e("",!0)])}const K_=He(MC,[["render",HC],["__scopeId","data-v-99eac488"]]),zC=Le({components:{ButtonDefault:xi},props:{relayName:{type:String,required:!0},pinNumber:{type:Number,required:!0},initialMode:{type:String,required:!0},initialRelayId:{type:String,default:"none"}},emits:["save","cancel"],setup(t,{emit:e}){const n=Ms(),r=le(t.initialMode),s=le(t.initialRelayId),i=le([]);$r(()=>{i.value=l()});const o=qe(()=>t.initialMode!==r.value||t.initialRelayId!==s.value);function l(){const _=n.relays.filter(({boardId:S})=>!S).map(({id:S,name:P})=>({value:S,label:P})).sort((S,P)=>S.value.localeCompare(P.value)),I={value:"none",label:"None"};if(s.value!=="none"){const S=n.relays.find(P=>P.id===s.value);if(S)return[{value:S.id,label:S.name},I,..._]}return[I,..._]}function c(){r.value="input"}function h(){r.value="output"}function d(_){s.value=_}function p(){o.value&&e("save",r.value,s.value)}function m(){e("cancel")}return sr(()=>s.value,()=>{console.log("RelayId: "+s.value)}),{mode:r,changed:o,relayId:s,availableRelays:i,setInput:c,setOutput:h,setRelay:d,onSave:p,onCancel:m}}}),WC={class:"popup-select-relay"},KC={class:"popup"},GC={class:"options"},QC={class:"option"},XC={class:"option"},YC={class:"options"},JC=["onClick"],ZC={class:"buttons"};function eP(t,e,n,r,s,i){const o=Ie("button-default");return G(),se("div",WC,[Y("div",KC,[Y("h3",null,Ve(t.$props.relayName),1),Y("h3",null,"Pin "+Ve(t.$props.pinNumber),1),e[2]||(e[2]=Y("label",{for:"name"},"Mode:",-1)),Y("div",GC,[Y("div",QC,[Y("div",{class:qt(["option-text",{"is-checked":t.mode==="input"}]),onClick:e[0]||(e[0]=(...l)=>t.setInput&&t.setInput(...l))}," IN ",2)]),Y("div",XC,[Y("div",{class:qt(["option-text",{"is-checked":t.mode==="output"}]),onClick:e[1]||(e[1]=(...l)=>t.setOutput&&t.setOutput(...l))}," OUT ",2)])]),e[3]||(e[3]=Y("label",{for:"name"},"Relay:",-1)),Y("div",YC,[(G(!0),se(rt,null,Br(t.availableRelays,l=>(G(),se("div",{class:"option",key:l.value},[Y("div",{class:qt(["option-text",{"is-checked":t.relayId===l.value}]),onClick:c=>t.setRelay(l.value)},Ve(l.label),11,JC)]))),128))]),Y("div",ZC,[_e(o,{class:qt({"can-save":t.changed}),text:"Save",onClick:t.onSave},null,8,["class","onClick"]),_e(o,{text:"Cancel",onClick:t.onCancel},null,8,["onClick"])])])])}const tP=He(zC,[["render",eP],["__scopeId","data-v-29c0e77d"]]),nP=Le({components:{PopupSelectRelay:tP,DropDown:W_},props:{},emits:[],setup(t,e){const n=z_(),r=Ms(),s=le(null);$r(async()=>{s.value=null,await n.loadBoardDetails()});const i=qe(()=>{var m;return l((m=n.selectedBoard)==null?void 0:m.createdAt)}),o=qe(()=>{var m;return l((m=n.selectedBoard)==null?void 0:m.updatedAt)});function l(m){return m?m.toLocaleString("en-GB",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1}).replace(","," -").replace(/\//g,"."):""}function c(){}function h(m){s.value&&(s.value=null),s.value=m}async function d(m,_){if(!m||!_){p();return}const I=n.pinConfigs.find(S=>S===s.value);if(!I){p();return}if(I.relayId&&s.value.relayId!==_){const S=r.relays.find(V=>V.id===I.relayId),P=_==="none"?null:r.relays.find(V=>V.id===_);if(!S){p();return}S.boardId=null,I.mode=m,P?(P.boardId=I.boardId,I.relayId=P.id,I.relayName=P.name):(I.relayId=null,I.relayName=null)}else if(I.relayId)I.mode=m;else if(_==="none")I.relayId=null,I.relayName=null;else{const S=_==="none"?null:r.relays.find(P=>P.id===_);if(!S){p();return}S.boardId=I.boardId,I.relayId=S.id,I.relayName=S.name}p()}function p(){s.value=null}return{boardStore:n,createdAt:i,modifiedAt:o,selectedPinConfig:s,requestEditPinConfig:h,deleteBoard:c,onSaveSelectRelay:d,onCancelSelectRelay:p}}}),rP={class:"board"},sP={class:"board-header"},iP={class:"table-body"},oP={class:"table-cell"},aP={class:"table-cell"},lP=["onClick"],cP={class:"table-row"};function uP(t,e,n,r,s,i){var l,c,h;const o=Ie("popup-select-relay");return G(),se("div",rP,[Y("div",sP,[Y("h3",null,Ve((l=t.boardStore.selectedBoard)==null?void 0:l.name),1),Y("p",null,[e[1]||(e[1]=Y("strong",null,"Model:",-1)),Dn(" "+Ve((c=t.boardStore.selectedBoard)==null?void 0:c.model),1)]),Y("p",null,[e[2]||(e[2]=Y("strong",null,"Created:",-1)),Dn(" "+Ve(t.createdAt),1)]),Y("p",null,[e[3]||(e[3]=Y("strong",null,"Modified:",-1)),Dn(" "+Ve(t.modifiedAt),1)])]),e[4]||(e[4]=Y("div",{class:"table-header"},[Y("div",{class:"table-cell"},"Pin"),Y("div",{class:"table-cell"},"Mode"),Y("div",{class:"table-cell"},"Relay Name")],-1)),Y("div",iP,[(G(!0),se(rt,null,Br(t.boardStore.pinConfigs,d=>(G(),se("div",{class:"table-row",key:d.pinNumber},[Y("div",oP,Ve(d.pinNumber),1),Y("div",aP,Ve(d.mode==="output"?"OUT":"IN"),1),Y("div",{class:"table-cell relay-name",onClick:p=>t.requestEditPinConfig(d)},Ve(d.relayName?d.relayName:"None"),9,lP)]))),128)),Y("div",cP,[Y("div",{class:"delete-button",onClick:e[0]||(e[0]=(...d)=>t.deleteBoard&&t.deleteBoard(...d))},"Delete")])]),t.selectedPinConfig?(G(),Ye(o,{key:0,relayName:(h=t.boardStore.selectedBoard)==null?void 0:h.name,pinNumber:t.selectedPinConfig.pinNumber,initialMode:t.selectedPinConfig.mode,initialRelayId:t.selectedPinConfig.relayId,onCancel:t.onCancelSelectRelay,onSave:t.onSaveSelectRelay},null,8,["relayName","pinNumber","initialMode","initialRelayId","onCancel","onSave"])):$e("",!0)])}const G_=He(nP,[["render",uP]]),hP=Le({name:"App",components:{Board:G_,Boards:K_,Home:H_,TopBar:mC,Schedules:q_,Relays:B_,TaskBar:cw,SignIn:ib},setup(){const t=Im(),e=Xa(),n=le(null),r=qe(()=>!!t.user);function s(i){n.value&&(i instanceof HTMLElement?i.scrollIntoView({behavior:"smooth",block:"end"}):n.value.scroll({top:n.value.scrollHeight,behavior:"smooth"}))}return{signedIn:r,pageStore:e,ref_body:n,scrollToBottom:s}}}),dP={class:"app"},fP={key:0,class:"signed-in"},pP={class:"body",ref:"ref_body"};function mP(t,e,n,r,s,i){const o=Ie("top-bar"),l=Ie("home"),c=Ie("boards"),h=Ie("board"),d=Ie("relays"),p=Ie("schedules"),m=Ie("task-bar"),_=Ie("sign-in");return G(),se("div",dP,[t.signedIn?(G(),se("div",fP,[_e(o),Y("div",pP,[t.pageStore.currentPage==="home"?(G(),Ye(l,{key:0})):$e("",!0),t.pageStore.currentPage==="boards"?(G(),Ye(c,{key:1})):$e("",!0),t.pageStore.currentPage==="board"?(G(),Ye(h,{key:2})):$e("",!0),t.pageStore.currentPage==="relays"?(G(),Ye(d,{key:3,onRequestScrollToBottom:t.scrollToBottom},null,8,["onRequestScrollToBottom"])):t.pageStore.currentPage==="schedules"?(G(),Ye(p,{key:4,onRequestScrollToBottom:t.scrollToBottom},null,8,["onRequestScrollToBottom"])):$e("",!0)],512),_e(m)])):(G(),Ye(_,{key:1}))])}const gP=He(hP,[["render",mP],["__scopeId","data-v-b6119b4d"]]),_P=[{path:"/home",name:"home",component:H_},{path:"/boards",name:"boards",component:K_},{path:"/board/",name:"board",component:G_},{path:"/relays",name:"relays",component:B_},{path:"/schedules",name:"schedules",component:q_},{path:"/:catchAll(.*)",redirect:"/relays"}],Q_=KE({history:TE("/RelayHub"),routes:_P});Q_.beforeEach((t,e,n)=>{Xa().setPage(t.name),n()});const zu=xv(gP),yP=$v();zu.use(Q_);zu.use(yP);zu.mount("#app");
