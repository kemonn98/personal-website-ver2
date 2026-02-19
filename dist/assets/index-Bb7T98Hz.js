(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const u of s)if(u.type==="childList")for(const c of u.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function n(s){const u={};return s.integrity&&(u.integrity=s.integrity),s.referrerPolicy&&(u.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?u.credentials="include":s.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function a(s){if(s.ep)return;s.ep=!0;const u=n(s);fetch(s.href,u)}})();function SS(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var Od={exports:{}},Bl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bv;function pT(){if(Bv)return Bl;Bv=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(a,s,u){var c=null;if(u!==void 0&&(c=""+u),s.key!==void 0&&(c=""+s.key),"key"in s){u={};for(var f in s)f!=="key"&&(u[f]=s[f])}else u=s;return s=u.ref,{$$typeof:o,type:a,key:c,ref:s!==void 0?s:null,props:u}}return Bl.Fragment=t,Bl.jsx=n,Bl.jsxs=n,Bl}var Fv;function mT(){return Fv||(Fv=1,Od.exports=pT()),Od.exports}var Mt=mT(),Pd={exports:{}},ne={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hv;function _T(){if(Hv)return ne;Hv=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),c=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),v=Symbol.iterator;function y(z){return z===null||typeof z!="object"?null:(z=v&&z[v]||z["@@iterator"],typeof z=="function"?z:null)}var T={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,x={};function S(z,$,mt){this.props=z,this.context=$,this.refs=x,this.updater=mt||T}S.prototype.isReactComponent={},S.prototype.setState=function(z,$){if(typeof z!="object"&&typeof z!="function"&&z!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,z,$,"setState")},S.prototype.forceUpdate=function(z){this.updater.enqueueForceUpdate(this,z,"forceUpdate")};function U(){}U.prototype=S.prototype;function A(z,$,mt){this.props=z,this.context=$,this.refs=x,this.updater=mt||T}var L=A.prototype=new U;L.constructor=A,M(L,S.prototype),L.isPureReactComponent=!0;var P=Array.isArray;function O(){}var w={H:null,A:null,T:null,S:null},B=Object.prototype.hasOwnProperty;function b(z,$,mt){var j=mt.ref;return{$$typeof:o,type:z,key:$,ref:j!==void 0?j:null,props:mt}}function R(z,$){return b(z.type,$,z.props)}function F(z){return typeof z=="object"&&z!==null&&z.$$typeof===o}function X(z){var $={"=":"=0",":":"=2"};return"$"+z.replace(/[=:]/g,function(mt){return $[mt]})}var Y=/\/+/g;function nt(z,$){return typeof z=="object"&&z!==null&&z.key!=null?X(""+z.key):$.toString(36)}function at(z){switch(z.status){case"fulfilled":return z.value;case"rejected":throw z.reason;default:switch(typeof z.status=="string"?z.then(O,O):(z.status="pending",z.then(function($){z.status==="pending"&&(z.status="fulfilled",z.value=$)},function($){z.status==="pending"&&(z.status="rejected",z.reason=$)})),z.status){case"fulfilled":return z.value;case"rejected":throw z.reason}}throw z}function I(z,$,mt,j,ct){var St=typeof z;(St==="undefined"||St==="boolean")&&(z=null);var Tt=!1;if(z===null)Tt=!0;else switch(St){case"bigint":case"string":case"number":Tt=!0;break;case"object":switch(z.$$typeof){case o:case t:Tt=!0;break;case _:return Tt=z._init,I(Tt(z._payload),$,mt,j,ct)}}if(Tt)return ct=ct(z),Tt=j===""?"."+nt(z,0):j,P(ct)?(mt="",Tt!=null&&(mt=Tt.replace(Y,"$&/")+"/"),I(ct,$,mt,"",function(ie){return ie})):ct!=null&&(F(ct)&&(ct=R(ct,mt+(ct.key==null||z&&z.key===ct.key?"":(""+ct.key).replace(Y,"$&/")+"/")+Tt)),$.push(ct)),1;Tt=0;var Gt=j===""?".":j+":";if(P(z))for(var Ht=0;Ht<z.length;Ht++)j=z[Ht],St=Gt+nt(j,Ht),Tt+=I(j,$,mt,St,ct);else if(Ht=y(z),typeof Ht=="function")for(z=Ht.call(z),Ht=0;!(j=z.next()).done;)j=j.value,St=Gt+nt(j,Ht++),Tt+=I(j,$,mt,St,ct);else if(St==="object"){if(typeof z.then=="function")return I(at(z),$,mt,j,ct);throw $=String(z),Error("Objects are not valid as a React child (found: "+($==="[object Object]"?"object with keys {"+Object.keys(z).join(", ")+"}":$)+"). If you meant to render a collection of children, use an array instead.")}return Tt}function k(z,$,mt){if(z==null)return z;var j=[],ct=0;return I(z,j,"","",function(St){return $.call(mt,St,ct++)}),j}function q(z){if(z._status===-1){var $=z._result;$=$(),$.then(function(mt){(z._status===0||z._status===-1)&&(z._status=1,z._result=mt)},function(mt){(z._status===0||z._status===-1)&&(z._status=2,z._result=mt)}),z._status===-1&&(z._status=0,z._result=$)}if(z._status===1)return z._result.default;throw z._result}var ht=typeof reportError=="function"?reportError:function(z){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var $=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof z=="object"&&z!==null&&typeof z.message=="string"?String(z.message):String(z),error:z});if(!window.dispatchEvent($))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",z);return}console.error(z)},dt={map:k,forEach:function(z,$,mt){k(z,function(){$.apply(this,arguments)},mt)},count:function(z){var $=0;return k(z,function(){$++}),$},toArray:function(z){return k(z,function($){return $})||[]},only:function(z){if(!F(z))throw Error("React.Children.only expected to receive a single React element child.");return z}};return ne.Activity=g,ne.Children=dt,ne.Component=S,ne.Fragment=n,ne.Profiler=s,ne.PureComponent=A,ne.StrictMode=a,ne.Suspense=d,ne.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=w,ne.__COMPILER_RUNTIME={__proto__:null,c:function(z){return w.H.useMemoCache(z)}},ne.cache=function(z){return function(){return z.apply(null,arguments)}},ne.cacheSignal=function(){return null},ne.cloneElement=function(z,$,mt){if(z==null)throw Error("The argument must be a React element, but you passed "+z+".");var j=M({},z.props),ct=z.key;if($!=null)for(St in $.key!==void 0&&(ct=""+$.key),$)!B.call($,St)||St==="key"||St==="__self"||St==="__source"||St==="ref"&&$.ref===void 0||(j[St]=$[St]);var St=arguments.length-2;if(St===1)j.children=mt;else if(1<St){for(var Tt=Array(St),Gt=0;Gt<St;Gt++)Tt[Gt]=arguments[Gt+2];j.children=Tt}return b(z.type,ct,j)},ne.createContext=function(z){return z={$$typeof:c,_currentValue:z,_currentValue2:z,_threadCount:0,Provider:null,Consumer:null},z.Provider=z,z.Consumer={$$typeof:u,_context:z},z},ne.createElement=function(z,$,mt){var j,ct={},St=null;if($!=null)for(j in $.key!==void 0&&(St=""+$.key),$)B.call($,j)&&j!=="key"&&j!=="__self"&&j!=="__source"&&(ct[j]=$[j]);var Tt=arguments.length-2;if(Tt===1)ct.children=mt;else if(1<Tt){for(var Gt=Array(Tt),Ht=0;Ht<Tt;Ht++)Gt[Ht]=arguments[Ht+2];ct.children=Gt}if(z&&z.defaultProps)for(j in Tt=z.defaultProps,Tt)ct[j]===void 0&&(ct[j]=Tt[j]);return b(z,St,ct)},ne.createRef=function(){return{current:null}},ne.forwardRef=function(z){return{$$typeof:f,render:z}},ne.isValidElement=F,ne.lazy=function(z){return{$$typeof:_,_payload:{_status:-1,_result:z},_init:q}},ne.memo=function(z,$){return{$$typeof:p,type:z,compare:$===void 0?null:$}},ne.startTransition=function(z){var $=w.T,mt={};w.T=mt;try{var j=z(),ct=w.S;ct!==null&&ct(mt,j),typeof j=="object"&&j!==null&&typeof j.then=="function"&&j.then(O,ht)}catch(St){ht(St)}finally{$!==null&&mt.types!==null&&($.types=mt.types),w.T=$}},ne.unstable_useCacheRefresh=function(){return w.H.useCacheRefresh()},ne.use=function(z){return w.H.use(z)},ne.useActionState=function(z,$,mt){return w.H.useActionState(z,$,mt)},ne.useCallback=function(z,$){return w.H.useCallback(z,$)},ne.useContext=function(z){return w.H.useContext(z)},ne.useDebugValue=function(){},ne.useDeferredValue=function(z,$){return w.H.useDeferredValue(z,$)},ne.useEffect=function(z,$){return w.H.useEffect(z,$)},ne.useEffectEvent=function(z){return w.H.useEffectEvent(z)},ne.useId=function(){return w.H.useId()},ne.useImperativeHandle=function(z,$,mt){return w.H.useImperativeHandle(z,$,mt)},ne.useInsertionEffect=function(z,$){return w.H.useInsertionEffect(z,$)},ne.useLayoutEffect=function(z,$){return w.H.useLayoutEffect(z,$)},ne.useMemo=function(z,$){return w.H.useMemo(z,$)},ne.useOptimistic=function(z,$){return w.H.useOptimistic(z,$)},ne.useReducer=function(z,$,mt){return w.H.useReducer(z,$,mt)},ne.useRef=function(z){return w.H.useRef(z)},ne.useState=function(z){return w.H.useState(z)},ne.useSyncExternalStore=function(z,$,mt){return w.H.useSyncExternalStore(z,$,mt)},ne.useTransition=function(){return w.H.useTransition()},ne.version="19.2.0",ne}var Gv;function Em(){return Gv||(Gv=1,Pd.exports=_T()),Pd.exports}var Xt=Em();const gT=SS(Xt);var zd={exports:{}},Fl={},Id={exports:{}},Bd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vv;function vT(){return Vv||(Vv=1,(function(o){function t(I,k){var q=I.length;I.push(k);t:for(;0<q;){var ht=q-1>>>1,dt=I[ht];if(0<s(dt,k))I[ht]=k,I[q]=dt,q=ht;else break t}}function n(I){return I.length===0?null:I[0]}function a(I){if(I.length===0)return null;var k=I[0],q=I.pop();if(q!==k){I[0]=q;t:for(var ht=0,dt=I.length,z=dt>>>1;ht<z;){var $=2*(ht+1)-1,mt=I[$],j=$+1,ct=I[j];if(0>s(mt,q))j<dt&&0>s(ct,mt)?(I[ht]=ct,I[j]=q,ht=j):(I[ht]=mt,I[$]=q,ht=$);else if(j<dt&&0>s(ct,q))I[ht]=ct,I[j]=q,ht=j;else break t}}return k}function s(I,k){var q=I.sortIndex-k.sortIndex;return q!==0?q:I.id-k.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var c=Date,f=c.now();o.unstable_now=function(){return c.now()-f}}var d=[],p=[],_=1,g=null,v=3,y=!1,T=!1,M=!1,x=!1,S=typeof setTimeout=="function"?setTimeout:null,U=typeof clearTimeout=="function"?clearTimeout:null,A=typeof setImmediate<"u"?setImmediate:null;function L(I){for(var k=n(p);k!==null;){if(k.callback===null)a(p);else if(k.startTime<=I)a(p),k.sortIndex=k.expirationTime,t(d,k);else break;k=n(p)}}function P(I){if(M=!1,L(I),!T)if(n(d)!==null)T=!0,O||(O=!0,X());else{var k=n(p);k!==null&&at(P,k.startTime-I)}}var O=!1,w=-1,B=5,b=-1;function R(){return x?!0:!(o.unstable_now()-b<B)}function F(){if(x=!1,O){var I=o.unstable_now();b=I;var k=!0;try{t:{T=!1,M&&(M=!1,U(w),w=-1),y=!0;var q=v;try{e:{for(L(I),g=n(d);g!==null&&!(g.expirationTime>I&&R());){var ht=g.callback;if(typeof ht=="function"){g.callback=null,v=g.priorityLevel;var dt=ht(g.expirationTime<=I);if(I=o.unstable_now(),typeof dt=="function"){g.callback=dt,L(I),k=!0;break e}g===n(d)&&a(d),L(I)}else a(d);g=n(d)}if(g!==null)k=!0;else{var z=n(p);z!==null&&at(P,z.startTime-I),k=!1}}break t}finally{g=null,v=q,y=!1}k=void 0}}finally{k?X():O=!1}}}var X;if(typeof A=="function")X=function(){A(F)};else if(typeof MessageChannel<"u"){var Y=new MessageChannel,nt=Y.port2;Y.port1.onmessage=F,X=function(){nt.postMessage(null)}}else X=function(){S(F,0)};function at(I,k){w=S(function(){I(o.unstable_now())},k)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(I){I.callback=null},o.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):B=0<I?Math.floor(1e3/I):5},o.unstable_getCurrentPriorityLevel=function(){return v},o.unstable_next=function(I){switch(v){case 1:case 2:case 3:var k=3;break;default:k=v}var q=v;v=k;try{return I()}finally{v=q}},o.unstable_requestPaint=function(){x=!0},o.unstable_runWithPriority=function(I,k){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var q=v;v=I;try{return k()}finally{v=q}},o.unstable_scheduleCallback=function(I,k,q){var ht=o.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?ht+q:ht):q=ht,I){case 1:var dt=-1;break;case 2:dt=250;break;case 5:dt=1073741823;break;case 4:dt=1e4;break;default:dt=5e3}return dt=q+dt,I={id:_++,callback:k,priorityLevel:I,startTime:q,expirationTime:dt,sortIndex:-1},q>ht?(I.sortIndex=q,t(p,I),n(d)===null&&I===n(p)&&(M?(U(w),w=-1):M=!0,at(P,q-ht))):(I.sortIndex=dt,t(d,I),T||y||(T=!0,O||(O=!0,X()))),I},o.unstable_shouldYield=R,o.unstable_wrapCallback=function(I){var k=v;return function(){var q=v;v=k;try{return I.apply(this,arguments)}finally{v=q}}}})(Bd)),Bd}var kv;function xT(){return kv||(kv=1,Id.exports=vT()),Id.exports}var Fd={exports:{}},Pn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xv;function ST(){if(Xv)return Pn;Xv=1;var o=Em();function t(d){var p="https://react.dev/errors/"+d;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)p+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+d+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var a={d:{f:n,r:function(){throw Error(t(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},s=Symbol.for("react.portal");function u(d,p,_){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:s,key:g==null?null:""+g,children:d,containerInfo:p,implementation:_}}var c=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function f(d,p){if(d==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Pn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,Pn.createPortal=function(d,p){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return u(d,p,null,_)},Pn.flushSync=function(d){var p=c.T,_=a.p;try{if(c.T=null,a.p=2,d)return d()}finally{c.T=p,a.p=_,a.d.f()}},Pn.preconnect=function(d,p){typeof d=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,a.d.C(d,p))},Pn.prefetchDNS=function(d){typeof d=="string"&&a.d.D(d)},Pn.preinit=function(d,p){if(typeof d=="string"&&p&&typeof p.as=="string"){var _=p.as,g=f(_,p.crossOrigin),v=typeof p.integrity=="string"?p.integrity:void 0,y=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;_==="style"?a.d.S(d,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:g,integrity:v,fetchPriority:y}):_==="script"&&a.d.X(d,{crossOrigin:g,integrity:v,fetchPriority:y,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Pn.preinitModule=function(d,p){if(typeof d=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var _=f(p.as,p.crossOrigin);a.d.M(d,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&a.d.M(d)},Pn.preload=function(d,p){if(typeof d=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var _=p.as,g=f(_,p.crossOrigin);a.d.L(d,_,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Pn.preloadModule=function(d,p){if(typeof d=="string")if(p){var _=f(p.as,p.crossOrigin);a.d.m(d,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else a.d.m(d)},Pn.requestFormReset=function(d){a.d.r(d)},Pn.unstable_batchedUpdates=function(d,p){return d(p)},Pn.useFormState=function(d,p,_){return c.H.useFormState(d,p,_)},Pn.useFormStatus=function(){return c.H.useHostTransitionStatus()},Pn.version="19.2.0",Pn}var Wv;function yT(){if(Wv)return Fd.exports;Wv=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),Fd.exports=ST(),Fd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qv;function MT(){if(qv)return Fl;qv=1;var o=xT(),t=Em(),n=yT();function a(e){var i="https://react.dev/errors/"+e;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var r=2;r<arguments.length;r++)i+="&args[]="+encodeURIComponent(arguments[r])}return"Minified React error #"+e+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){var i=e,r=e;if(e.alternate)for(;i.return;)i=i.return;else{e=i;do i=e,(i.flags&4098)!==0&&(r=i.return),e=i.return;while(e)}return i.tag===3?r:null}function c(e){if(e.tag===13){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function f(e){if(e.tag===31){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function d(e){if(u(e)!==e)throw Error(a(188))}function p(e){var i=e.alternate;if(!i){if(i=u(e),i===null)throw Error(a(188));return i!==e?null:e}for(var r=e,l=i;;){var h=r.return;if(h===null)break;var m=h.alternate;if(m===null){if(l=h.return,l!==null){r=l;continue}break}if(h.child===m.child){for(m=h.child;m;){if(m===r)return d(h),e;if(m===l)return d(h),i;m=m.sibling}throw Error(a(188))}if(r.return!==l.return)r=h,l=m;else{for(var E=!1,C=h.child;C;){if(C===r){E=!0,r=h,l=m;break}if(C===l){E=!0,l=h,r=m;break}C=C.sibling}if(!E){for(C=m.child;C;){if(C===r){E=!0,r=m,l=h;break}if(C===l){E=!0,l=m,r=h;break}C=C.sibling}if(!E)throw Error(a(189))}}if(r.alternate!==l)throw Error(a(190))}if(r.tag!==3)throw Error(a(188));return r.stateNode.current===r?e:i}function _(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e;for(e=e.child;e!==null;){if(i=_(e),i!==null)return i;e=e.sibling}return null}var g=Object.assign,v=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),T=Symbol.for("react.portal"),M=Symbol.for("react.fragment"),x=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),U=Symbol.for("react.consumer"),A=Symbol.for("react.context"),L=Symbol.for("react.forward_ref"),P=Symbol.for("react.suspense"),O=Symbol.for("react.suspense_list"),w=Symbol.for("react.memo"),B=Symbol.for("react.lazy"),b=Symbol.for("react.activity"),R=Symbol.for("react.memo_cache_sentinel"),F=Symbol.iterator;function X(e){return e===null||typeof e!="object"?null:(e=F&&e[F]||e["@@iterator"],typeof e=="function"?e:null)}var Y=Symbol.for("react.client.reference");function nt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Y?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case M:return"Fragment";case S:return"Profiler";case x:return"StrictMode";case P:return"Suspense";case O:return"SuspenseList";case b:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case T:return"Portal";case A:return e.displayName||"Context";case U:return(e._context.displayName||"Context")+".Consumer";case L:var i=e.render;return e=e.displayName,e||(e=i.displayName||i.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case w:return i=e.displayName||null,i!==null?i:nt(e.type)||"Memo";case B:i=e._payload,e=e._init;try{return nt(e(i))}catch{}}return null}var at=Array.isArray,I=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,k=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q={pending:!1,data:null,method:null,action:null},ht=[],dt=-1;function z(e){return{current:e}}function $(e){0>dt||(e.current=ht[dt],ht[dt]=null,dt--)}function mt(e,i){dt++,ht[dt]=e.current,e.current=i}var j=z(null),ct=z(null),St=z(null),Tt=z(null);function Gt(e,i){switch(mt(St,i),mt(ct,e),mt(j,null),i.nodeType){case 9:case 11:e=(e=i.documentElement)&&(e=e.namespaceURI)?ov(e):0;break;default:if(e=i.tagName,i=i.namespaceURI)i=ov(i),e=lv(i,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}$(j),mt(j,e)}function Ht(){$(j),$(ct),$(St)}function ie(e){e.memoizedState!==null&&mt(Tt,e);var i=j.current,r=lv(i,e.type);i!==r&&(mt(ct,e),mt(j,r))}function Pe(e){ct.current===e&&($(j),$(ct)),Tt.current===e&&($(Tt),Ol._currentValue=q)}var V,je;function fe(e){if(V===void 0)try{throw Error()}catch(r){var i=r.stack.trim().match(/\n( *(at )?)/);V=i&&i[1]||"",je=-1<r.stack.indexOf(`
    at`)?" (<anonymous>)":-1<r.stack.indexOf("@")?"@unknown:0:0":""}return`
`+V+e+je}var Ee=!1;function Vt(e,i){if(!e||Ee)return"";Ee=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(i){var gt=function(){throw Error()};if(Object.defineProperty(gt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(gt,[])}catch(ut){var it=ut}Reflect.construct(e,[],gt)}else{try{gt.call()}catch(ut){it=ut}e.call(gt.prototype)}}else{try{throw Error()}catch(ut){it=ut}(gt=e())&&typeof gt.catch=="function"&&gt.catch(function(){})}}catch(ut){if(ut&&it&&typeof ut.stack=="string")return[ut.stack,it.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var h=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");h&&h.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=l.DetermineComponentFrameRoot(),E=m[0],C=m[1];if(E&&C){var G=E.split(`
`),et=C.split(`
`);for(h=l=0;l<G.length&&!G[l].includes("DetermineComponentFrameRoot");)l++;for(;h<et.length&&!et[h].includes("DetermineComponentFrameRoot");)h++;if(l===G.length||h===et.length)for(l=G.length-1,h=et.length-1;1<=l&&0<=h&&G[l]!==et[h];)h--;for(;1<=l&&0<=h;l--,h--)if(G[l]!==et[h]){if(l!==1||h!==1)do if(l--,h--,0>h||G[l]!==et[h]){var ft=`
`+G[l].replace(" at new "," at ");return e.displayName&&ft.includes("<anonymous>")&&(ft=ft.replace("<anonymous>",e.displayName)),ft}while(1<=l&&0<=h);break}}}finally{Ee=!1,Error.prepareStackTrace=r}return(r=e?e.displayName||e.name:"")?fe(r):""}function Qe(e,i){switch(e.tag){case 26:case 27:case 5:return fe(e.type);case 16:return fe("Lazy");case 13:return e.child!==i&&i!==null?fe("Suspense Fallback"):fe("Suspense");case 19:return fe("SuspenseList");case 0:case 15:return Vt(e.type,!1);case 11:return Vt(e.type.render,!1);case 1:return Vt(e.type,!0);case 31:return fe("Activity");default:return""}}function te(e){try{var i="",r=null;do i+=Qe(e,r),r=e,e=e.return;while(e);return i}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var ee=Object.prototype.hasOwnProperty,H=o.unstable_scheduleCallback,D=o.unstable_cancelCallback,lt=o.unstable_shouldYield,Et=o.unstable_requestPaint,xt=o.unstable_now,yt=o.unstable_getCurrentPriorityLevel,Yt=o.unstable_ImmediatePriority,Ut=o.unstable_UserBlockingPriority,Nt=o.unstable_NormalPriority,ae=o.unstable_LowPriority,At=o.unstable_IdlePriority,Ot=o.log,pe=o.unstable_setDisableYieldValue,Qt=null,wt=null;function Zt(e){if(typeof Ot=="function"&&pe(e),wt&&typeof wt.setStrictMode=="function")try{wt.setStrictMode(Qt,e)}catch{}}var Kt=Math.clz32?Math.clz32:Rt,He=Math.log,Z=Math.LN2;function Rt(e){return e>>>=0,e===0?32:31-(He(e)/Z|0)|0}var _t=256,vt=262144,Ct=4194304;function Wt(e){var i=e&42;if(i!==0)return i;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ue(e,i,r){var l=e.pendingLanes;if(l===0)return 0;var h=0,m=e.suspendedLanes,E=e.pingedLanes;e=e.warmLanes;var C=l&134217727;return C!==0?(l=C&~m,l!==0?h=Wt(l):(E&=C,E!==0?h=Wt(E):r||(r=C&~e,r!==0&&(h=Wt(r))))):(C=l&~m,C!==0?h=Wt(C):E!==0?h=Wt(E):r||(r=l&~e,r!==0&&(h=Wt(r)))),h===0?0:i!==0&&i!==h&&(i&m)===0&&(m=h&-h,r=i&-i,m>=r||m===32&&(r&4194048)!==0)?i:h}function Fe(e,i){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&i)===0}function mn(e,i){switch(e){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ye(){var e=Ct;return Ct<<=1,(Ct&62914560)===0&&(Ct=4194304),e}function ri(e){for(var i=[],r=0;31>r;r++)i.push(e);return i}function Dn(e,i){e.pendingLanes|=i,i!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function _u(e,i,r,l,h,m){var E=e.pendingLanes;e.pendingLanes=r,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=r,e.entangledLanes&=r,e.errorRecoveryDisabledLanes&=r,e.shellSuspendCounter=0;var C=e.entanglements,G=e.expirationTimes,et=e.hiddenUpdates;for(r=E&~r;0<r;){var ft=31-Kt(r),gt=1<<ft;C[ft]=0,G[ft]=-1;var it=et[ft];if(it!==null)for(et[ft]=null,ft=0;ft<it.length;ft++){var ut=it[ft];ut!==null&&(ut.lane&=-536870913)}r&=~gt}l!==0&&ji(e,l,0),m!==0&&h===0&&e.tag!==0&&(e.suspendedLanes|=m&~(E&~i))}function ji(e,i,r){e.pendingLanes|=i,e.suspendedLanes&=~i;var l=31-Kt(i);e.entangledLanes|=i,e.entanglements[l]=e.entanglements[l]|1073741824|r&261930}function ys(e,i){var r=e.entangledLanes|=i;for(e=e.entanglements;r;){var l=31-Kt(r),h=1<<l;h&i|e[l]&i&&(e[l]|=i),r&=~h}}function Wo(e,i){var r=i&-i;return r=(r&42)!==0?1:Ms(r),(r&(e.suspendedLanes|i))!==0?0:r}function Ms(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Ha(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function qo(){var e=k.p;return e!==0?e:(e=window.event,e===void 0?32:Uv(e.type))}function Ur(e,i){var r=k.p;try{return k.p=e,i()}finally{k.p=r}}var zi=Math.random().toString(36).slice(2),on="__reactFiber$"+zi,Un="__reactProps$"+zi,Ga="__reactContainer$"+zi,Yo="__reactEvents$"+zi,N="__reactListeners$"+zi,K="__reactHandles$"+zi,rt="__reactResources$"+zi,st="__reactMarker$"+zi;function J(e){delete e[on],delete e[Un],delete e[Yo],delete e[N],delete e[K]}function bt(e){var i=e[on];if(i)return i;for(var r=e.parentNode;r;){if(i=r[Ga]||r[on]){if(r=i.alternate,i.child!==null||r!==null&&r.child!==null)for(e=mv(e);e!==null;){if(r=e[on])return r;e=mv(e)}return i}e=r,r=e.parentNode}return null}function Dt(e){if(e=e[on]||e[Ga]){var i=e.tag;if(i===5||i===6||i===13||i===31||i===26||i===27||i===3)return e}return null}function Pt(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e.stateNode;throw Error(a(33))}function zt(e){var i=e[rt];return i||(i=e[rt]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function It(e){e[st]=!0}var $t=new Set,jt={};function ce(e,i){Ce(e,i),Ce(e+"Capture",i)}function Ce(e,i){for(jt[e]=i,e=0;e<i.length;e++)$t.add(i[e])}var Xe=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ln={},Me={};function kt(e){return ee.call(Me,e)?!0:ee.call(Ln,e)?!1:Xe.test(e)?Me[e]=!0:(Ln[e]=!0,!1)}function Je(e,i,r){if(kt(i))if(r===null)e.removeAttribute(i);else{switch(typeof r){case"undefined":case"function":case"symbol":e.removeAttribute(i);return;case"boolean":var l=i.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(i);return}}e.setAttribute(i,""+r)}}function ge(e,i,r){if(r===null)e.removeAttribute(i);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(i);return}e.setAttribute(i,""+r)}}function nn(e,i,r,l){if(l===null)e.removeAttribute(r);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(r);return}e.setAttributeNS(i,r,""+l)}}function _n(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Nn(e){var i=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function jo(e,i,r){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,i);if(!e.hasOwnProperty(i)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var h=l.get,m=l.set;return Object.defineProperty(e,i,{configurable:!0,get:function(){return h.call(this)},set:function(E){r=""+E,m.call(this,E)}}),Object.defineProperty(e,i,{enumerable:l.enumerable}),{getValue:function(){return r},setValue:function(E){r=""+E},stopTracking:function(){e._valueTracker=null,delete e[i]}}}}function We(e){if(!e._valueTracker){var i=Nn(e)?"checked":"value";e._valueTracker=jo(e,i,""+e[i])}}function Ii(e){if(!e)return!1;var i=e._valueTracker;if(!i)return!0;var r=i.getValue(),l="";return e&&(l=Nn(e)?e.checked?"true":"false":e.value),e=l,e!==r?(i.setValue(e),!0):!1}function Va(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var kn=/[\n"\\]/g;function On(e){return e.replace(kn,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function Zo(e,i,r,l,h,m,E,C){e.name="",E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?e.type=E:e.removeAttribute("type"),i!=null?E==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+_n(i)):e.value!==""+_n(i)&&(e.value=""+_n(i)):E!=="submit"&&E!=="reset"||e.removeAttribute("value"),i!=null?wf(e,E,_n(i)):r!=null?wf(e,E,_n(r)):l!=null&&e.removeAttribute("value"),h==null&&m!=null&&(e.defaultChecked=!!m),h!=null&&(e.checked=h&&typeof h!="function"&&typeof h!="symbol"),C!=null&&typeof C!="function"&&typeof C!="symbol"&&typeof C!="boolean"?e.name=""+_n(C):e.removeAttribute("name")}function Ko(e,i,r,l,h,m,E,C){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(e.type=m),i!=null||r!=null){if(!(m!=="submit"&&m!=="reset"||i!=null)){We(e);return}r=r!=null?""+_n(r):"",i=i!=null?""+_n(i):r,C||i===e.value||(e.value=i),e.defaultValue=i}l=l??h,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=C?e.checked:!!l,e.defaultChecked=!!l,E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"&&(e.name=E),We(e)}function wf(e,i,r){i==="number"&&Va(e.ownerDocument)===e||e.defaultValue===""+r||(e.defaultValue=""+r)}function Es(e,i,r,l){if(e=e.options,i){i={};for(var h=0;h<r.length;h++)i["$"+r[h]]=!0;for(r=0;r<e.length;r++)h=i.hasOwnProperty("$"+e[r].value),e[r].selected!==h&&(e[r].selected=h),h&&l&&(e[r].defaultSelected=!0)}else{for(r=""+_n(r),i=null,h=0;h<e.length;h++){if(e[h].value===r){e[h].selected=!0,l&&(e[h].defaultSelected=!0);return}i!==null||e[h].disabled||(i=e[h])}i!==null&&(i.selected=!0)}}function n_(e,i,r){if(i!=null&&(i=""+_n(i),i!==e.value&&(e.value=i),r==null)){e.defaultValue!==i&&(e.defaultValue=i);return}e.defaultValue=r!=null?""+_n(r):""}function i_(e,i,r,l){if(i==null){if(l!=null){if(r!=null)throw Error(a(92));if(at(l)){if(1<l.length)throw Error(a(93));l=l[0]}r=l}r==null&&(r=""),i=r}r=_n(i),e.defaultValue=r,l=e.textContent,l===r&&l!==""&&l!==null&&(e.value=l),We(e)}function Ts(e,i){if(i){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=i;return}}e.textContent=i}var uM=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function a_(e,i,r){var l=i.indexOf("--")===0;r==null||typeof r=="boolean"||r===""?l?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="":l?e.setProperty(i,r):typeof r!="number"||r===0||uM.has(i)?i==="float"?e.cssFloat=r:e[i]=(""+r).trim():e[i]=r+"px"}function r_(e,i,r){if(i!=null&&typeof i!="object")throw Error(a(62));if(e=e.style,r!=null){for(var l in r)!r.hasOwnProperty(l)||i!=null&&i.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var h in i)l=i[h],i.hasOwnProperty(h)&&r[h]!==l&&a_(e,h,l)}else for(var m in i)i.hasOwnProperty(m)&&a_(e,m,i[m])}function Df(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var cM=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),fM=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function gu(e){return fM.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function oa(){}var Uf=null;function Lf(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var bs=null,As=null;function s_(e){var i=Dt(e);if(i&&(e=i.stateNode)){var r=e[Un]||null;t:switch(e=i.stateNode,i.type){case"input":if(Zo(e,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name),i=r.name,r.type==="radio"&&i!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll('input[name="'+On(""+i)+'"][type="radio"]'),i=0;i<r.length;i++){var l=r[i];if(l!==e&&l.form===e.form){var h=l[Un]||null;if(!h)throw Error(a(90));Zo(l,h.value,h.defaultValue,h.defaultValue,h.checked,h.defaultChecked,h.type,h.name)}}for(i=0;i<r.length;i++)l=r[i],l.form===e.form&&Ii(l)}break t;case"textarea":n_(e,r.value,r.defaultValue);break t;case"select":i=r.value,i!=null&&Es(e,!!r.multiple,i,!1)}}}var Nf=!1;function o_(e,i,r){if(Nf)return e(i,r);Nf=!0;try{var l=e(i);return l}finally{if(Nf=!1,(bs!==null||As!==null)&&(ac(),bs&&(i=bs,e=As,As=bs=null,s_(i),e)))for(i=0;i<e.length;i++)s_(e[i])}}function Qo(e,i){var r=e.stateNode;if(r===null)return null;var l=r[Un]||null;if(l===null)return null;r=l[i];t:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break t;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(a(231,i,typeof r));return r}var la=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Of=!1;if(la)try{var Jo={};Object.defineProperty(Jo,"passive",{get:function(){Of=!0}}),window.addEventListener("test",Jo,Jo),window.removeEventListener("test",Jo,Jo)}catch{Of=!1}var ka=null,Pf=null,vu=null;function l_(){if(vu)return vu;var e,i=Pf,r=i.length,l,h="value"in ka?ka.value:ka.textContent,m=h.length;for(e=0;e<r&&i[e]===h[e];e++);var E=r-e;for(l=1;l<=E&&i[r-l]===h[m-l];l++);return vu=h.slice(e,1<l?1-l:void 0)}function xu(e){var i=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&i===13&&(e=13)):e=i,e===10&&(e=13),32<=e||e===13?e:0}function Su(){return!0}function u_(){return!1}function Xn(e){function i(r,l,h,m,E){this._reactName=r,this._targetInst=h,this.type=l,this.nativeEvent=m,this.target=E,this.currentTarget=null;for(var C in e)e.hasOwnProperty(C)&&(r=e[C],this[C]=r?r(m):m[C]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Su:u_,this.isPropagationStopped=u_,this}return g(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Su)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Su)},persist:function(){},isPersistent:Su}),i}var Lr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},yu=Xn(Lr),$o=g({},Lr,{view:0,detail:0}),hM=Xn($o),zf,If,tl,Mu=g({},$o,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ff,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==tl&&(tl&&e.type==="mousemove"?(zf=e.screenX-tl.screenX,If=e.screenY-tl.screenY):If=zf=0,tl=e),zf)},movementY:function(e){return"movementY"in e?e.movementY:If}}),c_=Xn(Mu),dM=g({},Mu,{dataTransfer:0}),pM=Xn(dM),mM=g({},$o,{relatedTarget:0}),Bf=Xn(mM),_M=g({},Lr,{animationName:0,elapsedTime:0,pseudoElement:0}),gM=Xn(_M),vM=g({},Lr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),xM=Xn(vM),SM=g({},Lr,{data:0}),f_=Xn(SM),yM={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},MM={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},EM={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function TM(e){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(e):(e=EM[e])?!!i[e]:!1}function Ff(){return TM}var bM=g({},$o,{key:function(e){if(e.key){var i=yM[e.key]||e.key;if(i!=="Unidentified")return i}return e.type==="keypress"?(e=xu(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?MM[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ff,charCode:function(e){return e.type==="keypress"?xu(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?xu(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),AM=Xn(bM),RM=g({},Mu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),h_=Xn(RM),CM=g({},$o,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ff}),wM=Xn(CM),DM=g({},Lr,{propertyName:0,elapsedTime:0,pseudoElement:0}),UM=Xn(DM),LM=g({},Mu,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),NM=Xn(LM),OM=g({},Lr,{newState:0,oldState:0}),PM=Xn(OM),zM=[9,13,27,32],Hf=la&&"CompositionEvent"in window,el=null;la&&"documentMode"in document&&(el=document.documentMode);var IM=la&&"TextEvent"in window&&!el,d_=la&&(!Hf||el&&8<el&&11>=el),p_=" ",m_=!1;function __(e,i){switch(e){case"keyup":return zM.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function g_(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Rs=!1;function BM(e,i){switch(e){case"compositionend":return g_(i);case"keypress":return i.which!==32?null:(m_=!0,p_);case"textInput":return e=i.data,e===p_&&m_?null:e;default:return null}}function FM(e,i){if(Rs)return e==="compositionend"||!Hf&&__(e,i)?(e=l_(),vu=Pf=ka=null,Rs=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return d_&&i.locale!=="ko"?null:i.data;default:return null}}var HM={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function v_(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i==="input"?!!HM[e.type]:i==="textarea"}function x_(e,i,r,l){bs?As?As.push(l):As=[l]:bs=l,i=fc(i,"onChange"),0<i.length&&(r=new yu("onChange","change",null,r,l),e.push({event:r,listeners:i}))}var nl=null,il=null;function GM(e){ev(e,0)}function Eu(e){var i=Pt(e);if(Ii(i))return e}function S_(e,i){if(e==="change")return i}var y_=!1;if(la){var Gf;if(la){var Vf="oninput"in document;if(!Vf){var M_=document.createElement("div");M_.setAttribute("oninput","return;"),Vf=typeof M_.oninput=="function"}Gf=Vf}else Gf=!1;y_=Gf&&(!document.documentMode||9<document.documentMode)}function E_(){nl&&(nl.detachEvent("onpropertychange",T_),il=nl=null)}function T_(e){if(e.propertyName==="value"&&Eu(il)){var i=[];x_(i,il,e,Lf(e)),o_(GM,i)}}function VM(e,i,r){e==="focusin"?(E_(),nl=i,il=r,nl.attachEvent("onpropertychange",T_)):e==="focusout"&&E_()}function kM(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Eu(il)}function XM(e,i){if(e==="click")return Eu(i)}function WM(e,i){if(e==="input"||e==="change")return Eu(i)}function qM(e,i){return e===i&&(e!==0||1/e===1/i)||e!==e&&i!==i}var si=typeof Object.is=="function"?Object.is:qM;function al(e,i){if(si(e,i))return!0;if(typeof e!="object"||e===null||typeof i!="object"||i===null)return!1;var r=Object.keys(e),l=Object.keys(i);if(r.length!==l.length)return!1;for(l=0;l<r.length;l++){var h=r[l];if(!ee.call(i,h)||!si(e[h],i[h]))return!1}return!0}function b_(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function A_(e,i){var r=b_(e);e=0;for(var l;r;){if(r.nodeType===3){if(l=e+r.textContent.length,e<=i&&l>=i)return{node:r,offset:i-e};e=l}t:{for(;r;){if(r.nextSibling){r=r.nextSibling;break t}r=r.parentNode}r=void 0}r=b_(r)}}function R_(e,i){return e&&i?e===i?!0:e&&e.nodeType===3?!1:i&&i.nodeType===3?R_(e,i.parentNode):"contains"in e?e.contains(i):e.compareDocumentPosition?!!(e.compareDocumentPosition(i)&16):!1:!1}function C_(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var i=Va(e.document);i instanceof e.HTMLIFrameElement;){try{var r=typeof i.contentWindow.location.href=="string"}catch{r=!1}if(r)e=i.contentWindow;else break;i=Va(e.document)}return i}function kf(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i&&(i==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||i==="textarea"||e.contentEditable==="true")}var YM=la&&"documentMode"in document&&11>=document.documentMode,Cs=null,Xf=null,rl=null,Wf=!1;function w_(e,i,r){var l=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Wf||Cs==null||Cs!==Va(l)||(l=Cs,"selectionStart"in l&&kf(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),rl&&al(rl,l)||(rl=l,l=fc(Xf,"onSelect"),0<l.length&&(i=new yu("onSelect","select",null,i,r),e.push({event:i,listeners:l}),i.target=Cs)))}function Nr(e,i){var r={};return r[e.toLowerCase()]=i.toLowerCase(),r["Webkit"+e]="webkit"+i,r["Moz"+e]="moz"+i,r}var ws={animationend:Nr("Animation","AnimationEnd"),animationiteration:Nr("Animation","AnimationIteration"),animationstart:Nr("Animation","AnimationStart"),transitionrun:Nr("Transition","TransitionRun"),transitionstart:Nr("Transition","TransitionStart"),transitioncancel:Nr("Transition","TransitionCancel"),transitionend:Nr("Transition","TransitionEnd")},qf={},D_={};la&&(D_=document.createElement("div").style,"AnimationEvent"in window||(delete ws.animationend.animation,delete ws.animationiteration.animation,delete ws.animationstart.animation),"TransitionEvent"in window||delete ws.transitionend.transition);function Or(e){if(qf[e])return qf[e];if(!ws[e])return e;var i=ws[e],r;for(r in i)if(i.hasOwnProperty(r)&&r in D_)return qf[e]=i[r];return e}var U_=Or("animationend"),L_=Or("animationiteration"),N_=Or("animationstart"),jM=Or("transitionrun"),ZM=Or("transitionstart"),KM=Or("transitioncancel"),O_=Or("transitionend"),P_=new Map,Yf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Yf.push("scrollEnd");function Bi(e,i){P_.set(e,i),ce(i,[e])}var Tu=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Mi=[],Ds=0,jf=0;function bu(){for(var e=Ds,i=jf=Ds=0;i<e;){var r=Mi[i];Mi[i++]=null;var l=Mi[i];Mi[i++]=null;var h=Mi[i];Mi[i++]=null;var m=Mi[i];if(Mi[i++]=null,l!==null&&h!==null){var E=l.pending;E===null?h.next=h:(h.next=E.next,E.next=h),l.pending=h}m!==0&&z_(r,h,m)}}function Au(e,i,r,l){Mi[Ds++]=e,Mi[Ds++]=i,Mi[Ds++]=r,Mi[Ds++]=l,jf|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function Zf(e,i,r,l){return Au(e,i,r,l),Ru(e)}function Pr(e,i){return Au(e,null,null,i),Ru(e)}function z_(e,i,r){e.lanes|=r;var l=e.alternate;l!==null&&(l.lanes|=r);for(var h=!1,m=e.return;m!==null;)m.childLanes|=r,l=m.alternate,l!==null&&(l.childLanes|=r),m.tag===22&&(e=m.stateNode,e===null||e._visibility&1||(h=!0)),e=m,m=m.return;return e.tag===3?(m=e.stateNode,h&&i!==null&&(h=31-Kt(r),e=m.hiddenUpdates,l=e[h],l===null?e[h]=[i]:l.push(i),i.lane=r|536870912),m):null}function Ru(e){if(50<Rl)throw Rl=0,ad=null,Error(a(185));for(var i=e.return;i!==null;)e=i,i=e.return;return e.tag===3?e.stateNode:null}var Us={};function QM(e,i,r,l){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function oi(e,i,r,l){return new QM(e,i,r,l)}function Kf(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ua(e,i){var r=e.alternate;return r===null?(r=oi(e.tag,i,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=i,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&65011712,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,i=e.dependencies,r.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r.refCleanup=e.refCleanup,r}function I_(e,i){e.flags&=65011714;var r=e.alternate;return r===null?(e.childLanes=0,e.lanes=i,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=r.childLanes,e.lanes=r.lanes,e.child=r.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=r.memoizedProps,e.memoizedState=r.memoizedState,e.updateQueue=r.updateQueue,e.type=r.type,i=r.dependencies,e.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),e}function Cu(e,i,r,l,h,m){var E=0;if(l=e,typeof e=="function")Kf(e)&&(E=1);else if(typeof e=="string")E=nT(e,r,j.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case b:return e=oi(31,r,i,h),e.elementType=b,e.lanes=m,e;case M:return zr(r.children,h,m,i);case x:E=8,h|=24;break;case S:return e=oi(12,r,i,h|2),e.elementType=S,e.lanes=m,e;case P:return e=oi(13,r,i,h),e.elementType=P,e.lanes=m,e;case O:return e=oi(19,r,i,h),e.elementType=O,e.lanes=m,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case A:E=10;break t;case U:E=9;break t;case L:E=11;break t;case w:E=14;break t;case B:E=16,l=null;break t}E=29,r=Error(a(130,e===null?"null":typeof e,"")),l=null}return i=oi(E,r,i,h),i.elementType=e,i.type=l,i.lanes=m,i}function zr(e,i,r,l){return e=oi(7,e,l,i),e.lanes=r,e}function Qf(e,i,r){return e=oi(6,e,null,i),e.lanes=r,e}function B_(e){var i=oi(18,null,null,0);return i.stateNode=e,i}function Jf(e,i,r){return i=oi(4,e.children!==null?e.children:[],e.key,i),i.lanes=r,i.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},i}var F_=new WeakMap;function Ei(e,i){if(typeof e=="object"&&e!==null){var r=F_.get(e);return r!==void 0?r:(i={value:e,source:i,stack:te(i)},F_.set(e,i),i)}return{value:e,source:i,stack:te(i)}}var Ls=[],Ns=0,wu=null,sl=0,Ti=[],bi=0,Xa=null,Zi=1,Ki="";function ca(e,i){Ls[Ns++]=sl,Ls[Ns++]=wu,wu=e,sl=i}function H_(e,i,r){Ti[bi++]=Zi,Ti[bi++]=Ki,Ti[bi++]=Xa,Xa=e;var l=Zi;e=Ki;var h=32-Kt(l)-1;l&=~(1<<h),r+=1;var m=32-Kt(i)+h;if(30<m){var E=h-h%5;m=(l&(1<<E)-1).toString(32),l>>=E,h-=E,Zi=1<<32-Kt(i)+h|r<<h|l,Ki=m+e}else Zi=1<<m|r<<h|l,Ki=e}function $f(e){e.return!==null&&(ca(e,1),H_(e,1,0))}function th(e){for(;e===wu;)wu=Ls[--Ns],Ls[Ns]=null,sl=Ls[--Ns],Ls[Ns]=null;for(;e===Xa;)Xa=Ti[--bi],Ti[bi]=null,Ki=Ti[--bi],Ti[bi]=null,Zi=Ti[--bi],Ti[bi]=null}function G_(e,i){Ti[bi++]=Zi,Ti[bi++]=Ki,Ti[bi++]=Xa,Zi=i.id,Ki=i.overflow,Xa=e}var bn=null,Ge=null,ve=!1,Wa=null,Ai=!1,eh=Error(a(519));function qa(e){var i=Error(a(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ol(Ei(i,e)),eh}function V_(e){var i=e.stateNode,r=e.type,l=e.memoizedProps;switch(i[on]=e,i[Un]=l,r){case"dialog":de("cancel",i),de("close",i);break;case"iframe":case"object":case"embed":de("load",i);break;case"video":case"audio":for(r=0;r<wl.length;r++)de(wl[r],i);break;case"source":de("error",i);break;case"img":case"image":case"link":de("error",i),de("load",i);break;case"details":de("toggle",i);break;case"input":de("invalid",i),Ko(i,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":de("invalid",i);break;case"textarea":de("invalid",i),i_(i,l.value,l.defaultValue,l.children)}r=l.children,typeof r!="string"&&typeof r!="number"&&typeof r!="bigint"||i.textContent===""+r||l.suppressHydrationWarning===!0||rv(i.textContent,r)?(l.popover!=null&&(de("beforetoggle",i),de("toggle",i)),l.onScroll!=null&&de("scroll",i),l.onScrollEnd!=null&&de("scrollend",i),l.onClick!=null&&(i.onclick=oa),i=!0):i=!1,i||qa(e,!0)}function k_(e){for(bn=e.return;bn;)switch(bn.tag){case 5:case 31:case 13:Ai=!1;return;case 27:case 3:Ai=!0;return;default:bn=bn.return}}function Os(e){if(e!==bn)return!1;if(!ve)return k_(e),ve=!0,!1;var i=e.tag,r;if((r=i!==3&&i!==27)&&((r=i===5)&&(r=e.type,r=!(r!=="form"&&r!=="button")||xd(e.type,e.memoizedProps)),r=!r),r&&Ge&&qa(e),k_(e),i===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));Ge=pv(e)}else if(i===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));Ge=pv(e)}else i===27?(i=Ge,sr(e.type)?(e=Td,Td=null,Ge=e):Ge=i):Ge=bn?Ci(e.stateNode.nextSibling):null;return!0}function Ir(){Ge=bn=null,ve=!1}function nh(){var e=Wa;return e!==null&&(jn===null?jn=e:jn.push.apply(jn,e),Wa=null),e}function ol(e){Wa===null?Wa=[e]:Wa.push(e)}var ih=z(null),Br=null,fa=null;function Ya(e,i,r){mt(ih,i._currentValue),i._currentValue=r}function ha(e){e._currentValue=ih.current,$(ih)}function ah(e,i,r){for(;e!==null;){var l=e.alternate;if((e.childLanes&i)!==i?(e.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),e===r)break;e=e.return}}function rh(e,i,r,l){var h=e.child;for(h!==null&&(h.return=e);h!==null;){var m=h.dependencies;if(m!==null){var E=h.child;m=m.firstContext;t:for(;m!==null;){var C=m;m=h;for(var G=0;G<i.length;G++)if(C.context===i[G]){m.lanes|=r,C=m.alternate,C!==null&&(C.lanes|=r),ah(m.return,r,e),l||(E=null);break t}m=C.next}}else if(h.tag===18){if(E=h.return,E===null)throw Error(a(341));E.lanes|=r,m=E.alternate,m!==null&&(m.lanes|=r),ah(E,r,e),E=null}else E=h.child;if(E!==null)E.return=h;else for(E=h;E!==null;){if(E===e){E=null;break}if(h=E.sibling,h!==null){h.return=E.return,E=h;break}E=E.return}h=E}}function Ps(e,i,r,l){e=null;for(var h=i,m=!1;h!==null;){if(!m){if((h.flags&524288)!==0)m=!0;else if((h.flags&262144)!==0)break}if(h.tag===10){var E=h.alternate;if(E===null)throw Error(a(387));if(E=E.memoizedProps,E!==null){var C=h.type;si(h.pendingProps.value,E.value)||(e!==null?e.push(C):e=[C])}}else if(h===Tt.current){if(E=h.alternate,E===null)throw Error(a(387));E.memoizedState.memoizedState!==h.memoizedState.memoizedState&&(e!==null?e.push(Ol):e=[Ol])}h=h.return}e!==null&&rh(i,e,r,l),i.flags|=262144}function Du(e){for(e=e.firstContext;e!==null;){if(!si(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Fr(e){Br=e,fa=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function An(e){return X_(Br,e)}function Uu(e,i){return Br===null&&Fr(e),X_(e,i)}function X_(e,i){var r=i._currentValue;if(i={context:i,memoizedValue:r,next:null},fa===null){if(e===null)throw Error(a(308));fa=i,e.dependencies={lanes:0,firstContext:i},e.flags|=524288}else fa=fa.next=i;return r}var JM=typeof AbortController<"u"?AbortController:function(){var e=[],i=this.signal={aborted:!1,addEventListener:function(r,l){e.push(l)}};this.abort=function(){i.aborted=!0,e.forEach(function(r){return r()})}},$M=o.unstable_scheduleCallback,tE=o.unstable_NormalPriority,ln={$$typeof:A,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function sh(){return{controller:new JM,data:new Map,refCount:0}}function ll(e){e.refCount--,e.refCount===0&&$M(tE,function(){e.controller.abort()})}var ul=null,oh=0,zs=0,Is=null;function eE(e,i){if(ul===null){var r=ul=[];oh=0,zs=cd(),Is={status:"pending",value:void 0,then:function(l){r.push(l)}}}return oh++,i.then(W_,W_),i}function W_(){if(--oh===0&&ul!==null){Is!==null&&(Is.status="fulfilled");var e=ul;ul=null,zs=0,Is=null;for(var i=0;i<e.length;i++)(0,e[i])()}}function nE(e,i){var r=[],l={status:"pending",value:null,reason:null,then:function(h){r.push(h)}};return e.then(function(){l.status="fulfilled",l.value=i;for(var h=0;h<r.length;h++)(0,r[h])(i)},function(h){for(l.status="rejected",l.reason=h,h=0;h<r.length;h++)(0,r[h])(void 0)}),l}var q_=I.S;I.S=function(e,i){w0=xt(),typeof i=="object"&&i!==null&&typeof i.then=="function"&&eE(e,i),q_!==null&&q_(e,i)};var Hr=z(null);function lh(){var e=Hr.current;return e!==null?e:ze.pooledCache}function Lu(e,i){i===null?mt(Hr,Hr.current):mt(Hr,i.pool)}function Y_(){var e=lh();return e===null?null:{parent:ln._currentValue,pool:e}}var Bs=Error(a(460)),uh=Error(a(474)),Nu=Error(a(542)),Ou={then:function(){}};function j_(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Z_(e,i,r){switch(r=e[r],r===void 0?e.push(i):r!==i&&(i.then(oa,oa),i=r),i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,Q_(e),e;default:if(typeof i.status=="string")i.then(oa,oa);else{if(e=ze,e!==null&&100<e.shellSuspendCounter)throw Error(a(482));e=i,e.status="pending",e.then(function(l){if(i.status==="pending"){var h=i;h.status="fulfilled",h.value=l}},function(l){if(i.status==="pending"){var h=i;h.status="rejected",h.reason=l}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,Q_(e),e}throw Vr=i,Bs}}function Gr(e){try{var i=e._init;return i(e._payload)}catch(r){throw r!==null&&typeof r=="object"&&typeof r.then=="function"?(Vr=r,Bs):r}}var Vr=null;function K_(){if(Vr===null)throw Error(a(459));var e=Vr;return Vr=null,e}function Q_(e){if(e===Bs||e===Nu)throw Error(a(483))}var Fs=null,cl=0;function Pu(e){var i=cl;return cl+=1,Fs===null&&(Fs=[]),Z_(Fs,e,i)}function fl(e,i){i=i.props.ref,e.ref=i!==void 0?i:null}function zu(e,i){throw i.$$typeof===v?Error(a(525)):(e=Object.prototype.toString.call(i),Error(a(31,e==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":e)))}function J_(e){function i(Q,W){if(e){var tt=Q.deletions;tt===null?(Q.deletions=[W],Q.flags|=16):tt.push(W)}}function r(Q,W){if(!e)return null;for(;W!==null;)i(Q,W),W=W.sibling;return null}function l(Q){for(var W=new Map;Q!==null;)Q.key!==null?W.set(Q.key,Q):W.set(Q.index,Q),Q=Q.sibling;return W}function h(Q,W){return Q=ua(Q,W),Q.index=0,Q.sibling=null,Q}function m(Q,W,tt){return Q.index=tt,e?(tt=Q.alternate,tt!==null?(tt=tt.index,tt<W?(Q.flags|=67108866,W):tt):(Q.flags|=67108866,W)):(Q.flags|=1048576,W)}function E(Q){return e&&Q.alternate===null&&(Q.flags|=67108866),Q}function C(Q,W,tt,pt){return W===null||W.tag!==6?(W=Qf(tt,Q.mode,pt),W.return=Q,W):(W=h(W,tt),W.return=Q,W)}function G(Q,W,tt,pt){var qt=tt.type;return qt===M?ft(Q,W,tt.props.children,pt,tt.key):W!==null&&(W.elementType===qt||typeof qt=="object"&&qt!==null&&qt.$$typeof===B&&Gr(qt)===W.type)?(W=h(W,tt.props),fl(W,tt),W.return=Q,W):(W=Cu(tt.type,tt.key,tt.props,null,Q.mode,pt),fl(W,tt),W.return=Q,W)}function et(Q,W,tt,pt){return W===null||W.tag!==4||W.stateNode.containerInfo!==tt.containerInfo||W.stateNode.implementation!==tt.implementation?(W=Jf(tt,Q.mode,pt),W.return=Q,W):(W=h(W,tt.children||[]),W.return=Q,W)}function ft(Q,W,tt,pt,qt){return W===null||W.tag!==7?(W=zr(tt,Q.mode,pt,qt),W.return=Q,W):(W=h(W,tt),W.return=Q,W)}function gt(Q,W,tt){if(typeof W=="string"&&W!==""||typeof W=="number"||typeof W=="bigint")return W=Qf(""+W,Q.mode,tt),W.return=Q,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case y:return tt=Cu(W.type,W.key,W.props,null,Q.mode,tt),fl(tt,W),tt.return=Q,tt;case T:return W=Jf(W,Q.mode,tt),W.return=Q,W;case B:return W=Gr(W),gt(Q,W,tt)}if(at(W)||X(W))return W=zr(W,Q.mode,tt,null),W.return=Q,W;if(typeof W.then=="function")return gt(Q,Pu(W),tt);if(W.$$typeof===A)return gt(Q,Uu(Q,W),tt);zu(Q,W)}return null}function it(Q,W,tt,pt){var qt=W!==null?W.key:null;if(typeof tt=="string"&&tt!==""||typeof tt=="number"||typeof tt=="bigint")return qt!==null?null:C(Q,W,""+tt,pt);if(typeof tt=="object"&&tt!==null){switch(tt.$$typeof){case y:return tt.key===qt?G(Q,W,tt,pt):null;case T:return tt.key===qt?et(Q,W,tt,pt):null;case B:return tt=Gr(tt),it(Q,W,tt,pt)}if(at(tt)||X(tt))return qt!==null?null:ft(Q,W,tt,pt,null);if(typeof tt.then=="function")return it(Q,W,Pu(tt),pt);if(tt.$$typeof===A)return it(Q,W,Uu(Q,tt),pt);zu(Q,tt)}return null}function ut(Q,W,tt,pt,qt){if(typeof pt=="string"&&pt!==""||typeof pt=="number"||typeof pt=="bigint")return Q=Q.get(tt)||null,C(W,Q,""+pt,qt);if(typeof pt=="object"&&pt!==null){switch(pt.$$typeof){case y:return Q=Q.get(pt.key===null?tt:pt.key)||null,G(W,Q,pt,qt);case T:return Q=Q.get(pt.key===null?tt:pt.key)||null,et(W,Q,pt,qt);case B:return pt=Gr(pt),ut(Q,W,tt,pt,qt)}if(at(pt)||X(pt))return Q=Q.get(tt)||null,ft(W,Q,pt,qt,null);if(typeof pt.then=="function")return ut(Q,W,tt,Pu(pt),qt);if(pt.$$typeof===A)return ut(Q,W,tt,Uu(W,pt),qt);zu(W,pt)}return null}function Bt(Q,W,tt,pt){for(var qt=null,Te=null,Ft=W,se=W=0,_e=null;Ft!==null&&se<tt.length;se++){Ft.index>se?(_e=Ft,Ft=null):_e=Ft.sibling;var be=it(Q,Ft,tt[se],pt);if(be===null){Ft===null&&(Ft=_e);break}e&&Ft&&be.alternate===null&&i(Q,Ft),W=m(be,W,se),Te===null?qt=be:Te.sibling=be,Te=be,Ft=_e}if(se===tt.length)return r(Q,Ft),ve&&ca(Q,se),qt;if(Ft===null){for(;se<tt.length;se++)Ft=gt(Q,tt[se],pt),Ft!==null&&(W=m(Ft,W,se),Te===null?qt=Ft:Te.sibling=Ft,Te=Ft);return ve&&ca(Q,se),qt}for(Ft=l(Ft);se<tt.length;se++)_e=ut(Ft,Q,se,tt[se],pt),_e!==null&&(e&&_e.alternate!==null&&Ft.delete(_e.key===null?se:_e.key),W=m(_e,W,se),Te===null?qt=_e:Te.sibling=_e,Te=_e);return e&&Ft.forEach(function(fr){return i(Q,fr)}),ve&&ca(Q,se),qt}function Jt(Q,W,tt,pt){if(tt==null)throw Error(a(151));for(var qt=null,Te=null,Ft=W,se=W=0,_e=null,be=tt.next();Ft!==null&&!be.done;se++,be=tt.next()){Ft.index>se?(_e=Ft,Ft=null):_e=Ft.sibling;var fr=it(Q,Ft,be.value,pt);if(fr===null){Ft===null&&(Ft=_e);break}e&&Ft&&fr.alternate===null&&i(Q,Ft),W=m(fr,W,se),Te===null?qt=fr:Te.sibling=fr,Te=fr,Ft=_e}if(be.done)return r(Q,Ft),ve&&ca(Q,se),qt;if(Ft===null){for(;!be.done;se++,be=tt.next())be=gt(Q,be.value,pt),be!==null&&(W=m(be,W,se),Te===null?qt=be:Te.sibling=be,Te=be);return ve&&ca(Q,se),qt}for(Ft=l(Ft);!be.done;se++,be=tt.next())be=ut(Ft,Q,se,be.value,pt),be!==null&&(e&&be.alternate!==null&&Ft.delete(be.key===null?se:be.key),W=m(be,W,se),Te===null?qt=be:Te.sibling=be,Te=be);return e&&Ft.forEach(function(dT){return i(Q,dT)}),ve&&ca(Q,se),qt}function Ne(Q,W,tt,pt){if(typeof tt=="object"&&tt!==null&&tt.type===M&&tt.key===null&&(tt=tt.props.children),typeof tt=="object"&&tt!==null){switch(tt.$$typeof){case y:t:{for(var qt=tt.key;W!==null;){if(W.key===qt){if(qt=tt.type,qt===M){if(W.tag===7){r(Q,W.sibling),pt=h(W,tt.props.children),pt.return=Q,Q=pt;break t}}else if(W.elementType===qt||typeof qt=="object"&&qt!==null&&qt.$$typeof===B&&Gr(qt)===W.type){r(Q,W.sibling),pt=h(W,tt.props),fl(pt,tt),pt.return=Q,Q=pt;break t}r(Q,W);break}else i(Q,W);W=W.sibling}tt.type===M?(pt=zr(tt.props.children,Q.mode,pt,tt.key),pt.return=Q,Q=pt):(pt=Cu(tt.type,tt.key,tt.props,null,Q.mode,pt),fl(pt,tt),pt.return=Q,Q=pt)}return E(Q);case T:t:{for(qt=tt.key;W!==null;){if(W.key===qt)if(W.tag===4&&W.stateNode.containerInfo===tt.containerInfo&&W.stateNode.implementation===tt.implementation){r(Q,W.sibling),pt=h(W,tt.children||[]),pt.return=Q,Q=pt;break t}else{r(Q,W);break}else i(Q,W);W=W.sibling}pt=Jf(tt,Q.mode,pt),pt.return=Q,Q=pt}return E(Q);case B:return tt=Gr(tt),Ne(Q,W,tt,pt)}if(at(tt))return Bt(Q,W,tt,pt);if(X(tt)){if(qt=X(tt),typeof qt!="function")throw Error(a(150));return tt=qt.call(tt),Jt(Q,W,tt,pt)}if(typeof tt.then=="function")return Ne(Q,W,Pu(tt),pt);if(tt.$$typeof===A)return Ne(Q,W,Uu(Q,tt),pt);zu(Q,tt)}return typeof tt=="string"&&tt!==""||typeof tt=="number"||typeof tt=="bigint"?(tt=""+tt,W!==null&&W.tag===6?(r(Q,W.sibling),pt=h(W,tt),pt.return=Q,Q=pt):(r(Q,W),pt=Qf(tt,Q.mode,pt),pt.return=Q,Q=pt),E(Q)):r(Q,W)}return function(Q,W,tt,pt){try{cl=0;var qt=Ne(Q,W,tt,pt);return Fs=null,qt}catch(Ft){if(Ft===Bs||Ft===Nu)throw Ft;var Te=oi(29,Ft,null,Q.mode);return Te.lanes=pt,Te.return=Q,Te}finally{}}}var kr=J_(!0),$_=J_(!1),ja=!1;function ch(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function fh(e,i){e=e.updateQueue,i.updateQueue===e&&(i.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Za(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ka(e,i,r){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(Ae&2)!==0){var h=l.pending;return h===null?i.next=i:(i.next=h.next,h.next=i),l.pending=i,i=Ru(e),z_(e,null,r),i}return Au(e,l,i,r),Ru(e)}function hl(e,i,r){if(i=i.updateQueue,i!==null&&(i=i.shared,(r&4194048)!==0)){var l=i.lanes;l&=e.pendingLanes,r|=l,i.lanes=r,ys(e,r)}}function hh(e,i){var r=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,r===l)){var h=null,m=null;if(r=r.firstBaseUpdate,r!==null){do{var E={lane:r.lane,tag:r.tag,payload:r.payload,callback:null,next:null};m===null?h=m=E:m=m.next=E,r=r.next}while(r!==null);m===null?h=m=i:m=m.next=i}else h=m=i;r={baseState:l.baseState,firstBaseUpdate:h,lastBaseUpdate:m,shared:l.shared,callbacks:l.callbacks},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=i:e.next=i,r.lastBaseUpdate=i}var dh=!1;function dl(){if(dh){var e=Is;if(e!==null)throw e}}function pl(e,i,r,l){dh=!1;var h=e.updateQueue;ja=!1;var m=h.firstBaseUpdate,E=h.lastBaseUpdate,C=h.shared.pending;if(C!==null){h.shared.pending=null;var G=C,et=G.next;G.next=null,E===null?m=et:E.next=et,E=G;var ft=e.alternate;ft!==null&&(ft=ft.updateQueue,C=ft.lastBaseUpdate,C!==E&&(C===null?ft.firstBaseUpdate=et:C.next=et,ft.lastBaseUpdate=G))}if(m!==null){var gt=h.baseState;E=0,ft=et=G=null,C=m;do{var it=C.lane&-536870913,ut=it!==C.lane;if(ut?(me&it)===it:(l&it)===it){it!==0&&it===zs&&(dh=!0),ft!==null&&(ft=ft.next={lane:0,tag:C.tag,payload:C.payload,callback:null,next:null});t:{var Bt=e,Jt=C;it=i;var Ne=r;switch(Jt.tag){case 1:if(Bt=Jt.payload,typeof Bt=="function"){gt=Bt.call(Ne,gt,it);break t}gt=Bt;break t;case 3:Bt.flags=Bt.flags&-65537|128;case 0:if(Bt=Jt.payload,it=typeof Bt=="function"?Bt.call(Ne,gt,it):Bt,it==null)break t;gt=g({},gt,it);break t;case 2:ja=!0}}it=C.callback,it!==null&&(e.flags|=64,ut&&(e.flags|=8192),ut=h.callbacks,ut===null?h.callbacks=[it]:ut.push(it))}else ut={lane:it,tag:C.tag,payload:C.payload,callback:C.callback,next:null},ft===null?(et=ft=ut,G=gt):ft=ft.next=ut,E|=it;if(C=C.next,C===null){if(C=h.shared.pending,C===null)break;ut=C,C=ut.next,ut.next=null,h.lastBaseUpdate=ut,h.shared.pending=null}}while(!0);ft===null&&(G=gt),h.baseState=G,h.firstBaseUpdate=et,h.lastBaseUpdate=ft,m===null&&(h.shared.lanes=0),er|=E,e.lanes=E,e.memoizedState=gt}}function tg(e,i){if(typeof e!="function")throw Error(a(191,e));e.call(i)}function eg(e,i){var r=e.callbacks;if(r!==null)for(e.callbacks=null,e=0;e<r.length;e++)tg(r[e],i)}var Hs=z(null),Iu=z(0);function ng(e,i){e=ya,mt(Iu,e),mt(Hs,i),ya=e|i.baseLanes}function ph(){mt(Iu,ya),mt(Hs,Hs.current)}function mh(){ya=Iu.current,$(Hs),$(Iu)}var li=z(null),Ri=null;function Qa(e){var i=e.alternate;mt(an,an.current&1),mt(li,e),Ri===null&&(i===null||Hs.current!==null||i.memoizedState!==null)&&(Ri=e)}function _h(e){mt(an,an.current),mt(li,e),Ri===null&&(Ri=e)}function ig(e){e.tag===22?(mt(an,an.current),mt(li,e),Ri===null&&(Ri=e)):Ja()}function Ja(){mt(an,an.current),mt(li,li.current)}function ui(e){$(li),Ri===e&&(Ri=null),$(an)}var an=z(0);function Bu(e){for(var i=e;i!==null;){if(i.tag===13){var r=i.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||Md(r)||Ed(r)))return i}else if(i.tag===19&&(i.memoizedProps.revealOrder==="forwards"||i.memoizedProps.revealOrder==="backwards"||i.memoizedProps.revealOrder==="unstable_legacy-backwards"||i.memoizedProps.revealOrder==="together")){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var da=0,re=null,Ue=null,un=null,Fu=!1,Gs=!1,Xr=!1,Hu=0,ml=0,Vs=null,iE=0;function $e(){throw Error(a(321))}function gh(e,i){if(i===null)return!1;for(var r=0;r<i.length&&r<e.length;r++)if(!si(e[r],i[r]))return!1;return!0}function vh(e,i,r,l,h,m){return da=m,re=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,I.H=e===null||e.memoizedState===null?Hg:Nh,Xr=!1,m=r(l,h),Xr=!1,Gs&&(m=rg(i,r,l,h)),ag(e),m}function ag(e){I.H=vl;var i=Ue!==null&&Ue.next!==null;if(da=0,un=Ue=re=null,Fu=!1,ml=0,Vs=null,i)throw Error(a(300));e===null||cn||(e=e.dependencies,e!==null&&Du(e)&&(cn=!0))}function rg(e,i,r,l){re=e;var h=0;do{if(Gs&&(Vs=null),ml=0,Gs=!1,25<=h)throw Error(a(301));if(h+=1,un=Ue=null,e.updateQueue!=null){var m=e.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}I.H=Gg,m=i(r,l)}while(Gs);return m}function aE(){var e=I.H,i=e.useState()[0];return i=typeof i.then=="function"?_l(i):i,e=e.useState()[0],(Ue!==null?Ue.memoizedState:null)!==e&&(re.flags|=1024),i}function xh(){var e=Hu!==0;return Hu=0,e}function Sh(e,i,r){i.updateQueue=e.updateQueue,i.flags&=-2053,e.lanes&=~r}function yh(e){if(Fu){for(e=e.memoizedState;e!==null;){var i=e.queue;i!==null&&(i.pending=null),e=e.next}Fu=!1}da=0,un=Ue=re=null,Gs=!1,ml=Hu=0,Vs=null}function Hn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return un===null?re.memoizedState=un=e:un=un.next=e,un}function rn(){if(Ue===null){var e=re.alternate;e=e!==null?e.memoizedState:null}else e=Ue.next;var i=un===null?re.memoizedState:un.next;if(i!==null)un=i,Ue=e;else{if(e===null)throw re.alternate===null?Error(a(467)):Error(a(310));Ue=e,e={memoizedState:Ue.memoizedState,baseState:Ue.baseState,baseQueue:Ue.baseQueue,queue:Ue.queue,next:null},un===null?re.memoizedState=un=e:un=un.next=e}return un}function Gu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function _l(e){var i=ml;return ml+=1,Vs===null&&(Vs=[]),e=Z_(Vs,e,i),i=re,(un===null?i.memoizedState:un.next)===null&&(i=i.alternate,I.H=i===null||i.memoizedState===null?Hg:Nh),e}function Vu(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return _l(e);if(e.$$typeof===A)return An(e)}throw Error(a(438,String(e)))}function Mh(e){var i=null,r=re.updateQueue;if(r!==null&&(i=r.memoCache),i==null){var l=re.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(i={data:l.data.map(function(h){return h.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),r===null&&(r=Gu(),re.updateQueue=r),r.memoCache=i,r=i.data[i.index],r===void 0)for(r=i.data[i.index]=Array(e),l=0;l<e;l++)r[l]=R;return i.index++,r}function pa(e,i){return typeof i=="function"?i(e):i}function ku(e){var i=rn();return Eh(i,Ue,e)}function Eh(e,i,r){var l=e.queue;if(l===null)throw Error(a(311));l.lastRenderedReducer=r;var h=e.baseQueue,m=l.pending;if(m!==null){if(h!==null){var E=h.next;h.next=m.next,m.next=E}i.baseQueue=h=m,l.pending=null}if(m=e.baseState,h===null)e.memoizedState=m;else{i=h.next;var C=E=null,G=null,et=i,ft=!1;do{var gt=et.lane&-536870913;if(gt!==et.lane?(me&gt)===gt:(da&gt)===gt){var it=et.revertLane;if(it===0)G!==null&&(G=G.next={lane:0,revertLane:0,gesture:null,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null}),gt===zs&&(ft=!0);else if((da&it)===it){et=et.next,it===zs&&(ft=!0);continue}else gt={lane:0,revertLane:et.revertLane,gesture:null,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null},G===null?(C=G=gt,E=m):G=G.next=gt,re.lanes|=it,er|=it;gt=et.action,Xr&&r(m,gt),m=et.hasEagerState?et.eagerState:r(m,gt)}else it={lane:gt,revertLane:et.revertLane,gesture:et.gesture,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null},G===null?(C=G=it,E=m):G=G.next=it,re.lanes|=gt,er|=gt;et=et.next}while(et!==null&&et!==i);if(G===null?E=m:G.next=C,!si(m,e.memoizedState)&&(cn=!0,ft&&(r=Is,r!==null)))throw r;e.memoizedState=m,e.baseState=E,e.baseQueue=G,l.lastRenderedState=m}return h===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function Th(e){var i=rn(),r=i.queue;if(r===null)throw Error(a(311));r.lastRenderedReducer=e;var l=r.dispatch,h=r.pending,m=i.memoizedState;if(h!==null){r.pending=null;var E=h=h.next;do m=e(m,E.action),E=E.next;while(E!==h);si(m,i.memoizedState)||(cn=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),r.lastRenderedState=m}return[m,l]}function sg(e,i,r){var l=re,h=rn(),m=ve;if(m){if(r===void 0)throw Error(a(407));r=r()}else r=i();var E=!si((Ue||h).memoizedState,r);if(E&&(h.memoizedState=r,cn=!0),h=h.queue,Rh(ug.bind(null,l,h,e),[e]),h.getSnapshot!==i||E||un!==null&&un.memoizedState.tag&1){if(l.flags|=2048,ks(9,{destroy:void 0},lg.bind(null,l,h,r,i),null),ze===null)throw Error(a(349));m||(da&127)!==0||og(l,i,r)}return r}function og(e,i,r){e.flags|=16384,e={getSnapshot:i,value:r},i=re.updateQueue,i===null?(i=Gu(),re.updateQueue=i,i.stores=[e]):(r=i.stores,r===null?i.stores=[e]:r.push(e))}function lg(e,i,r,l){i.value=r,i.getSnapshot=l,cg(i)&&fg(e)}function ug(e,i,r){return r(function(){cg(i)&&fg(e)})}function cg(e){var i=e.getSnapshot;e=e.value;try{var r=i();return!si(e,r)}catch{return!0}}function fg(e){var i=Pr(e,2);i!==null&&Zn(i,e,2)}function bh(e){var i=Hn();if(typeof e=="function"){var r=e;if(e=r(),Xr){Zt(!0);try{r()}finally{Zt(!1)}}}return i.memoizedState=i.baseState=e,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:pa,lastRenderedState:e},i}function hg(e,i,r,l){return e.baseState=r,Eh(e,Ue,typeof l=="function"?l:pa)}function rE(e,i,r,l,h){if(qu(e))throw Error(a(485));if(e=i.action,e!==null){var m={payload:h,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(E){m.listeners.push(E)}};I.T!==null?r(!0):m.isTransition=!1,l(m),r=i.pending,r===null?(m.next=i.pending=m,dg(i,m)):(m.next=r.next,i.pending=r.next=m)}}function dg(e,i){var r=i.action,l=i.payload,h=e.state;if(i.isTransition){var m=I.T,E={};I.T=E;try{var C=r(h,l),G=I.S;G!==null&&G(E,C),pg(e,i,C)}catch(et){Ah(e,i,et)}finally{m!==null&&E.types!==null&&(m.types=E.types),I.T=m}}else try{m=r(h,l),pg(e,i,m)}catch(et){Ah(e,i,et)}}function pg(e,i,r){r!==null&&typeof r=="object"&&typeof r.then=="function"?r.then(function(l){mg(e,i,l)},function(l){return Ah(e,i,l)}):mg(e,i,r)}function mg(e,i,r){i.status="fulfilled",i.value=r,_g(i),e.state=r,i=e.pending,i!==null&&(r=i.next,r===i?e.pending=null:(r=r.next,i.next=r,dg(e,r)))}function Ah(e,i,r){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do i.status="rejected",i.reason=r,_g(i),i=i.next;while(i!==l)}e.action=null}function _g(e){e=e.listeners;for(var i=0;i<e.length;i++)(0,e[i])()}function gg(e,i){return i}function vg(e,i){if(ve){var r=ze.formState;if(r!==null){t:{var l=re;if(ve){if(Ge){e:{for(var h=Ge,m=Ai;h.nodeType!==8;){if(!m){h=null;break e}if(h=Ci(h.nextSibling),h===null){h=null;break e}}m=h.data,h=m==="F!"||m==="F"?h:null}if(h){Ge=Ci(h.nextSibling),l=h.data==="F!";break t}}qa(l)}l=!1}l&&(i=r[0])}}return r=Hn(),r.memoizedState=r.baseState=i,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:gg,lastRenderedState:i},r.queue=l,r=Ig.bind(null,re,l),l.dispatch=r,l=bh(!1),m=Lh.bind(null,re,!1,l.queue),l=Hn(),h={state:i,dispatch:null,action:e,pending:null},l.queue=h,r=rE.bind(null,re,h,m,r),h.dispatch=r,l.memoizedState=e,[i,r,!1]}function xg(e){var i=rn();return Sg(i,Ue,e)}function Sg(e,i,r){if(i=Eh(e,i,gg)[0],e=ku(pa)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var l=_l(i)}catch(E){throw E===Bs?Nu:E}else l=i;i=rn();var h=i.queue,m=h.dispatch;return r!==i.memoizedState&&(re.flags|=2048,ks(9,{destroy:void 0},sE.bind(null,h,r),null)),[l,m,e]}function sE(e,i){e.action=i}function yg(e){var i=rn(),r=Ue;if(r!==null)return Sg(i,r,e);rn(),i=i.memoizedState,r=rn();var l=r.queue.dispatch;return r.memoizedState=e,[i,l,!1]}function ks(e,i,r,l){return e={tag:e,create:r,deps:l,inst:i,next:null},i=re.updateQueue,i===null&&(i=Gu(),re.updateQueue=i),r=i.lastEffect,r===null?i.lastEffect=e.next=e:(l=r.next,r.next=e,e.next=l,i.lastEffect=e),e}function Mg(){return rn().memoizedState}function Xu(e,i,r,l){var h=Hn();re.flags|=e,h.memoizedState=ks(1|i,{destroy:void 0},r,l===void 0?null:l)}function Wu(e,i,r,l){var h=rn();l=l===void 0?null:l;var m=h.memoizedState.inst;Ue!==null&&l!==null&&gh(l,Ue.memoizedState.deps)?h.memoizedState=ks(i,m,r,l):(re.flags|=e,h.memoizedState=ks(1|i,m,r,l))}function Eg(e,i){Xu(8390656,8,e,i)}function Rh(e,i){Wu(2048,8,e,i)}function oE(e){re.flags|=4;var i=re.updateQueue;if(i===null)i=Gu(),re.updateQueue=i,i.events=[e];else{var r=i.events;r===null?i.events=[e]:r.push(e)}}function Tg(e){var i=rn().memoizedState;return oE({ref:i,nextImpl:e}),function(){if((Ae&2)!==0)throw Error(a(440));return i.impl.apply(void 0,arguments)}}function bg(e,i){return Wu(4,2,e,i)}function Ag(e,i){return Wu(4,4,e,i)}function Rg(e,i){if(typeof i=="function"){e=e();var r=i(e);return function(){typeof r=="function"?r():i(null)}}if(i!=null)return e=e(),i.current=e,function(){i.current=null}}function Cg(e,i,r){r=r!=null?r.concat([e]):null,Wu(4,4,Rg.bind(null,i,e),r)}function Ch(){}function wg(e,i){var r=rn();i=i===void 0?null:i;var l=r.memoizedState;return i!==null&&gh(i,l[1])?l[0]:(r.memoizedState=[e,i],e)}function Dg(e,i){var r=rn();i=i===void 0?null:i;var l=r.memoizedState;if(i!==null&&gh(i,l[1]))return l[0];if(l=e(),Xr){Zt(!0);try{e()}finally{Zt(!1)}}return r.memoizedState=[l,i],l}function wh(e,i,r){return r===void 0||(da&1073741824)!==0&&(me&261930)===0?e.memoizedState=i:(e.memoizedState=r,e=U0(),re.lanes|=e,er|=e,r)}function Ug(e,i,r,l){return si(r,i)?r:Hs.current!==null?(e=wh(e,r,l),si(e,i)||(cn=!0),e):(da&42)===0||(da&1073741824)!==0&&(me&261930)===0?(cn=!0,e.memoizedState=r):(e=U0(),re.lanes|=e,er|=e,i)}function Lg(e,i,r,l,h){var m=k.p;k.p=m!==0&&8>m?m:8;var E=I.T,C={};I.T=C,Lh(e,!1,i,r);try{var G=h(),et=I.S;if(et!==null&&et(C,G),G!==null&&typeof G=="object"&&typeof G.then=="function"){var ft=nE(G,l);gl(e,i,ft,hi(e))}else gl(e,i,l,hi(e))}catch(gt){gl(e,i,{then:function(){},status:"rejected",reason:gt},hi())}finally{k.p=m,E!==null&&C.types!==null&&(E.types=C.types),I.T=E}}function lE(){}function Dh(e,i,r,l){if(e.tag!==5)throw Error(a(476));var h=Ng(e).queue;Lg(e,h,i,q,r===null?lE:function(){return Og(e),r(l)})}function Ng(e){var i=e.memoizedState;if(i!==null)return i;i={memoizedState:q,baseState:q,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:pa,lastRenderedState:q},next:null};var r={};return i.next={memoizedState:r,baseState:r,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:pa,lastRenderedState:r},next:null},e.memoizedState=i,e=e.alternate,e!==null&&(e.memoizedState=i),i}function Og(e){var i=Ng(e);i.next===null&&(i=e.alternate.memoizedState),gl(e,i.next.queue,{},hi())}function Uh(){return An(Ol)}function Pg(){return rn().memoizedState}function zg(){return rn().memoizedState}function uE(e){for(var i=e.return;i!==null;){switch(i.tag){case 24:case 3:var r=hi();e=Za(r);var l=Ka(i,e,r);l!==null&&(Zn(l,i,r),hl(l,i,r)),i={cache:sh()},e.payload=i;return}i=i.return}}function cE(e,i,r){var l=hi();r={lane:l,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},qu(e)?Bg(i,r):(r=Zf(e,i,r,l),r!==null&&(Zn(r,e,l),Fg(r,i,l)))}function Ig(e,i,r){var l=hi();gl(e,i,r,l)}function gl(e,i,r,l){var h={lane:l,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null};if(qu(e))Bg(i,h);else{var m=e.alternate;if(e.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var E=i.lastRenderedState,C=m(E,r);if(h.hasEagerState=!0,h.eagerState=C,si(C,E))return Au(e,i,h,0),ze===null&&bu(),!1}catch{}finally{}if(r=Zf(e,i,h,l),r!==null)return Zn(r,e,l),Fg(r,i,l),!0}return!1}function Lh(e,i,r,l){if(l={lane:2,revertLane:cd(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},qu(e)){if(i)throw Error(a(479))}else i=Zf(e,r,l,2),i!==null&&Zn(i,e,2)}function qu(e){var i=e.alternate;return e===re||i!==null&&i===re}function Bg(e,i){Gs=Fu=!0;var r=e.pending;r===null?i.next=i:(i.next=r.next,r.next=i),e.pending=i}function Fg(e,i,r){if((r&4194048)!==0){var l=i.lanes;l&=e.pendingLanes,r|=l,i.lanes=r,ys(e,r)}}var vl={readContext:An,use:Vu,useCallback:$e,useContext:$e,useEffect:$e,useImperativeHandle:$e,useLayoutEffect:$e,useInsertionEffect:$e,useMemo:$e,useReducer:$e,useRef:$e,useState:$e,useDebugValue:$e,useDeferredValue:$e,useTransition:$e,useSyncExternalStore:$e,useId:$e,useHostTransitionStatus:$e,useFormState:$e,useActionState:$e,useOptimistic:$e,useMemoCache:$e,useCacheRefresh:$e};vl.useEffectEvent=$e;var Hg={readContext:An,use:Vu,useCallback:function(e,i){return Hn().memoizedState=[e,i===void 0?null:i],e},useContext:An,useEffect:Eg,useImperativeHandle:function(e,i,r){r=r!=null?r.concat([e]):null,Xu(4194308,4,Rg.bind(null,i,e),r)},useLayoutEffect:function(e,i){return Xu(4194308,4,e,i)},useInsertionEffect:function(e,i){Xu(4,2,e,i)},useMemo:function(e,i){var r=Hn();i=i===void 0?null:i;var l=e();if(Xr){Zt(!0);try{e()}finally{Zt(!1)}}return r.memoizedState=[l,i],l},useReducer:function(e,i,r){var l=Hn();if(r!==void 0){var h=r(i);if(Xr){Zt(!0);try{r(i)}finally{Zt(!1)}}}else h=i;return l.memoizedState=l.baseState=h,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:h},l.queue=e,e=e.dispatch=cE.bind(null,re,e),[l.memoizedState,e]},useRef:function(e){var i=Hn();return e={current:e},i.memoizedState=e},useState:function(e){e=bh(e);var i=e.queue,r=Ig.bind(null,re,i);return i.dispatch=r,[e.memoizedState,r]},useDebugValue:Ch,useDeferredValue:function(e,i){var r=Hn();return wh(r,e,i)},useTransition:function(){var e=bh(!1);return e=Lg.bind(null,re,e.queue,!0,!1),Hn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,i,r){var l=re,h=Hn();if(ve){if(r===void 0)throw Error(a(407));r=r()}else{if(r=i(),ze===null)throw Error(a(349));(me&127)!==0||og(l,i,r)}h.memoizedState=r;var m={value:r,getSnapshot:i};return h.queue=m,Eg(ug.bind(null,l,m,e),[e]),l.flags|=2048,ks(9,{destroy:void 0},lg.bind(null,l,m,r,i),null),r},useId:function(){var e=Hn(),i=ze.identifierPrefix;if(ve){var r=Ki,l=Zi;r=(l&~(1<<32-Kt(l)-1)).toString(32)+r,i="_"+i+"R_"+r,r=Hu++,0<r&&(i+="H"+r.toString(32)),i+="_"}else r=iE++,i="_"+i+"r_"+r.toString(32)+"_";return e.memoizedState=i},useHostTransitionStatus:Uh,useFormState:vg,useActionState:vg,useOptimistic:function(e){var i=Hn();i.memoizedState=i.baseState=e;var r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=r,i=Lh.bind(null,re,!0,r),r.dispatch=i,[e,i]},useMemoCache:Mh,useCacheRefresh:function(){return Hn().memoizedState=uE.bind(null,re)},useEffectEvent:function(e){var i=Hn(),r={impl:e};return i.memoizedState=r,function(){if((Ae&2)!==0)throw Error(a(440));return r.impl.apply(void 0,arguments)}}},Nh={readContext:An,use:Vu,useCallback:wg,useContext:An,useEffect:Rh,useImperativeHandle:Cg,useInsertionEffect:bg,useLayoutEffect:Ag,useMemo:Dg,useReducer:ku,useRef:Mg,useState:function(){return ku(pa)},useDebugValue:Ch,useDeferredValue:function(e,i){var r=rn();return Ug(r,Ue.memoizedState,e,i)},useTransition:function(){var e=ku(pa)[0],i=rn().memoizedState;return[typeof e=="boolean"?e:_l(e),i]},useSyncExternalStore:sg,useId:Pg,useHostTransitionStatus:Uh,useFormState:xg,useActionState:xg,useOptimistic:function(e,i){var r=rn();return hg(r,Ue,e,i)},useMemoCache:Mh,useCacheRefresh:zg};Nh.useEffectEvent=Tg;var Gg={readContext:An,use:Vu,useCallback:wg,useContext:An,useEffect:Rh,useImperativeHandle:Cg,useInsertionEffect:bg,useLayoutEffect:Ag,useMemo:Dg,useReducer:Th,useRef:Mg,useState:function(){return Th(pa)},useDebugValue:Ch,useDeferredValue:function(e,i){var r=rn();return Ue===null?wh(r,e,i):Ug(r,Ue.memoizedState,e,i)},useTransition:function(){var e=Th(pa)[0],i=rn().memoizedState;return[typeof e=="boolean"?e:_l(e),i]},useSyncExternalStore:sg,useId:Pg,useHostTransitionStatus:Uh,useFormState:yg,useActionState:yg,useOptimistic:function(e,i){var r=rn();return Ue!==null?hg(r,Ue,e,i):(r.baseState=e,[e,r.queue.dispatch])},useMemoCache:Mh,useCacheRefresh:zg};Gg.useEffectEvent=Tg;function Oh(e,i,r,l){i=e.memoizedState,r=r(l,i),r=r==null?i:g({},i,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var Ph={enqueueSetState:function(e,i,r){e=e._reactInternals;var l=hi(),h=Za(l);h.payload=i,r!=null&&(h.callback=r),i=Ka(e,h,l),i!==null&&(Zn(i,e,l),hl(i,e,l))},enqueueReplaceState:function(e,i,r){e=e._reactInternals;var l=hi(),h=Za(l);h.tag=1,h.payload=i,r!=null&&(h.callback=r),i=Ka(e,h,l),i!==null&&(Zn(i,e,l),hl(i,e,l))},enqueueForceUpdate:function(e,i){e=e._reactInternals;var r=hi(),l=Za(r);l.tag=2,i!=null&&(l.callback=i),i=Ka(e,l,r),i!==null&&(Zn(i,e,r),hl(i,e,r))}};function Vg(e,i,r,l,h,m,E){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,m,E):i.prototype&&i.prototype.isPureReactComponent?!al(r,l)||!al(h,m):!0}function kg(e,i,r,l){e=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(r,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(r,l),i.state!==e&&Ph.enqueueReplaceState(i,i.state,null)}function Wr(e,i){var r=i;if("ref"in i){r={};for(var l in i)l!=="ref"&&(r[l]=i[l])}if(e=e.defaultProps){r===i&&(r=g({},r));for(var h in e)r[h]===void 0&&(r[h]=e[h])}return r}function Xg(e){Tu(e)}function Wg(e){console.error(e)}function qg(e){Tu(e)}function Yu(e,i){try{var r=e.onUncaughtError;r(i.value,{componentStack:i.stack})}catch(l){setTimeout(function(){throw l})}}function Yg(e,i,r){try{var l=e.onCaughtError;l(r.value,{componentStack:r.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(h){setTimeout(function(){throw h})}}function zh(e,i,r){return r=Za(r),r.tag=3,r.payload={element:null},r.callback=function(){Yu(e,i)},r}function jg(e){return e=Za(e),e.tag=3,e}function Zg(e,i,r,l){var h=r.type.getDerivedStateFromError;if(typeof h=="function"){var m=l.value;e.payload=function(){return h(m)},e.callback=function(){Yg(i,r,l)}}var E=r.stateNode;E!==null&&typeof E.componentDidCatch=="function"&&(e.callback=function(){Yg(i,r,l),typeof h!="function"&&(nr===null?nr=new Set([this]):nr.add(this));var C=l.stack;this.componentDidCatch(l.value,{componentStack:C!==null?C:""})})}function fE(e,i,r,l,h){if(r.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(i=r.alternate,i!==null&&Ps(i,r,h,!0),r=li.current,r!==null){switch(r.tag){case 31:case 13:return Ri===null?rc():r.alternate===null&&tn===0&&(tn=3),r.flags&=-257,r.flags|=65536,r.lanes=h,l===Ou?r.flags|=16384:(i=r.updateQueue,i===null?r.updateQueue=new Set([l]):i.add(l),od(e,l,h)),!1;case 22:return r.flags|=65536,l===Ou?r.flags|=16384:(i=r.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([l])},r.updateQueue=i):(r=i.retryQueue,r===null?i.retryQueue=new Set([l]):r.add(l)),od(e,l,h)),!1}throw Error(a(435,r.tag))}return od(e,l,h),rc(),!1}if(ve)return i=li.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=h,l!==eh&&(e=Error(a(422),{cause:l}),ol(Ei(e,r)))):(l!==eh&&(i=Error(a(423),{cause:l}),ol(Ei(i,r))),e=e.current.alternate,e.flags|=65536,h&=-h,e.lanes|=h,l=Ei(l,r),h=zh(e.stateNode,l,h),hh(e,h),tn!==4&&(tn=2)),!1;var m=Error(a(520),{cause:l});if(m=Ei(m,r),Al===null?Al=[m]:Al.push(m),tn!==4&&(tn=2),i===null)return!0;l=Ei(l,r),r=i;do{switch(r.tag){case 3:return r.flags|=65536,e=h&-h,r.lanes|=e,e=zh(r.stateNode,l,e),hh(r,e),!1;case 1:if(i=r.type,m=r.stateNode,(r.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(nr===null||!nr.has(m))))return r.flags|=65536,h&=-h,r.lanes|=h,h=jg(h),Zg(h,e,r,l),hh(r,h),!1}r=r.return}while(r!==null);return!1}var Ih=Error(a(461)),cn=!1;function Rn(e,i,r,l){i.child=e===null?$_(i,null,r,l):kr(i,e.child,r,l)}function Kg(e,i,r,l,h){r=r.render;var m=i.ref;if("ref"in l){var E={};for(var C in l)C!=="ref"&&(E[C]=l[C])}else E=l;return Fr(i),l=vh(e,i,r,E,m,h),C=xh(),e!==null&&!cn?(Sh(e,i,h),ma(e,i,h)):(ve&&C&&$f(i),i.flags|=1,Rn(e,i,l,h),i.child)}function Qg(e,i,r,l,h){if(e===null){var m=r.type;return typeof m=="function"&&!Kf(m)&&m.defaultProps===void 0&&r.compare===null?(i.tag=15,i.type=m,Jg(e,i,m,l,h)):(e=Cu(r.type,null,l,i,i.mode,h),e.ref=i.ref,e.return=i,i.child=e)}if(m=e.child,!Wh(e,h)){var E=m.memoizedProps;if(r=r.compare,r=r!==null?r:al,r(E,l)&&e.ref===i.ref)return ma(e,i,h)}return i.flags|=1,e=ua(m,l),e.ref=i.ref,e.return=i,i.child=e}function Jg(e,i,r,l,h){if(e!==null){var m=e.memoizedProps;if(al(m,l)&&e.ref===i.ref)if(cn=!1,i.pendingProps=l=m,Wh(e,h))(e.flags&131072)!==0&&(cn=!0);else return i.lanes=e.lanes,ma(e,i,h)}return Bh(e,i,r,l,h)}function $g(e,i,r,l){var h=l.children,m=e!==null?e.memoizedState:null;if(e===null&&i.stateNode===null&&(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((i.flags&128)!==0){if(m=m!==null?m.baseLanes|r:r,e!==null){for(l=i.child=e.child,h=0;l!==null;)h=h|l.lanes|l.childLanes,l=l.sibling;l=h&~m}else l=0,i.child=null;return t0(e,i,m,r,l)}if((r&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},e!==null&&Lu(i,m!==null?m.cachePool:null),m!==null?ng(i,m):ph(),ig(i);else return l=i.lanes=536870912,t0(e,i,m!==null?m.baseLanes|r:r,r,l)}else m!==null?(Lu(i,m.cachePool),ng(i,m),Ja(),i.memoizedState=null):(e!==null&&Lu(i,null),ph(),Ja());return Rn(e,i,h,r),i.child}function xl(e,i){return e!==null&&e.tag===22||i.stateNode!==null||(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.sibling}function t0(e,i,r,l,h){var m=lh();return m=m===null?null:{parent:ln._currentValue,pool:m},i.memoizedState={baseLanes:r,cachePool:m},e!==null&&Lu(i,null),ph(),ig(i),e!==null&&Ps(e,i,l,!0),i.childLanes=h,null}function ju(e,i){return i=Ku({mode:i.mode,children:i.children},e.mode),i.ref=e.ref,e.child=i,i.return=e,i}function e0(e,i,r){return kr(i,e.child,null,r),e=ju(i,i.pendingProps),e.flags|=2,ui(i),i.memoizedState=null,e}function hE(e,i,r){var l=i.pendingProps,h=(i.flags&128)!==0;if(i.flags&=-129,e===null){if(ve){if(l.mode==="hidden")return e=ju(i,l),i.lanes=536870912,xl(null,e);if(_h(i),(e=Ge)?(e=dv(e,Ai),e=e!==null&&e.data==="&"?e:null,e!==null&&(i.memoizedState={dehydrated:e,treeContext:Xa!==null?{id:Zi,overflow:Ki}:null,retryLane:536870912,hydrationErrors:null},r=B_(e),r.return=i,i.child=r,bn=i,Ge=null)):e=null,e===null)throw qa(i);return i.lanes=536870912,null}return ju(i,l)}var m=e.memoizedState;if(m!==null){var E=m.dehydrated;if(_h(i),h)if(i.flags&256)i.flags&=-257,i=e0(e,i,r);else if(i.memoizedState!==null)i.child=e.child,i.flags|=128,i=null;else throw Error(a(558));else if(cn||Ps(e,i,r,!1),h=(r&e.childLanes)!==0,cn||h){if(l=ze,l!==null&&(E=Wo(l,r),E!==0&&E!==m.retryLane))throw m.retryLane=E,Pr(e,E),Zn(l,e,E),Ih;rc(),i=e0(e,i,r)}else e=m.treeContext,Ge=Ci(E.nextSibling),bn=i,ve=!0,Wa=null,Ai=!1,e!==null&&G_(i,e),i=ju(i,l),i.flags|=4096;return i}return e=ua(e.child,{mode:l.mode,children:l.children}),e.ref=i.ref,i.child=e,e.return=i,e}function Zu(e,i){var r=i.ref;if(r===null)e!==null&&e.ref!==null&&(i.flags|=4194816);else{if(typeof r!="function"&&typeof r!="object")throw Error(a(284));(e===null||e.ref!==r)&&(i.flags|=4194816)}}function Bh(e,i,r,l,h){return Fr(i),r=vh(e,i,r,l,void 0,h),l=xh(),e!==null&&!cn?(Sh(e,i,h),ma(e,i,h)):(ve&&l&&$f(i),i.flags|=1,Rn(e,i,r,h),i.child)}function n0(e,i,r,l,h,m){return Fr(i),i.updateQueue=null,r=rg(i,l,r,h),ag(e),l=xh(),e!==null&&!cn?(Sh(e,i,m),ma(e,i,m)):(ve&&l&&$f(i),i.flags|=1,Rn(e,i,r,m),i.child)}function i0(e,i,r,l,h){if(Fr(i),i.stateNode===null){var m=Us,E=r.contextType;typeof E=="object"&&E!==null&&(m=An(E)),m=new r(l,m),i.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=Ph,i.stateNode=m,m._reactInternals=i,m=i.stateNode,m.props=l,m.state=i.memoizedState,m.refs={},ch(i),E=r.contextType,m.context=typeof E=="object"&&E!==null?An(E):Us,m.state=i.memoizedState,E=r.getDerivedStateFromProps,typeof E=="function"&&(Oh(i,r,E,l),m.state=i.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(E=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),E!==m.state&&Ph.enqueueReplaceState(m,m.state,null),pl(i,l,m,h),dl(),m.state=i.memoizedState),typeof m.componentDidMount=="function"&&(i.flags|=4194308),l=!0}else if(e===null){m=i.stateNode;var C=i.memoizedProps,G=Wr(r,C);m.props=G;var et=m.context,ft=r.contextType;E=Us,typeof ft=="object"&&ft!==null&&(E=An(ft));var gt=r.getDerivedStateFromProps;ft=typeof gt=="function"||typeof m.getSnapshotBeforeUpdate=="function",C=i.pendingProps!==C,ft||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(C||et!==E)&&kg(i,m,l,E),ja=!1;var it=i.memoizedState;m.state=it,pl(i,l,m,h),dl(),et=i.memoizedState,C||it!==et||ja?(typeof gt=="function"&&(Oh(i,r,gt,l),et=i.memoizedState),(G=ja||Vg(i,r,G,l,it,et,E))?(ft||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(i.flags|=4194308)):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=et),m.props=l,m.state=et,m.context=E,l=G):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{m=i.stateNode,fh(e,i),E=i.memoizedProps,ft=Wr(r,E),m.props=ft,gt=i.pendingProps,it=m.context,et=r.contextType,G=Us,typeof et=="object"&&et!==null&&(G=An(et)),C=r.getDerivedStateFromProps,(et=typeof C=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(E!==gt||it!==G)&&kg(i,m,l,G),ja=!1,it=i.memoizedState,m.state=it,pl(i,l,m,h),dl();var ut=i.memoizedState;E!==gt||it!==ut||ja||e!==null&&e.dependencies!==null&&Du(e.dependencies)?(typeof C=="function"&&(Oh(i,r,C,l),ut=i.memoizedState),(ft=ja||Vg(i,r,ft,l,it,ut,G)||e!==null&&e.dependencies!==null&&Du(e.dependencies))?(et||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(l,ut,G),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(l,ut,G)),typeof m.componentDidUpdate=="function"&&(i.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof m.componentDidUpdate!="function"||E===e.memoizedProps&&it===e.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||E===e.memoizedProps&&it===e.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=ut),m.props=l,m.state=ut,m.context=G,l=ft):(typeof m.componentDidUpdate!="function"||E===e.memoizedProps&&it===e.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||E===e.memoizedProps&&it===e.memoizedState||(i.flags|=1024),l=!1)}return m=l,Zu(e,i),l=(i.flags&128)!==0,m||l?(m=i.stateNode,r=l&&typeof r.getDerivedStateFromError!="function"?null:m.render(),i.flags|=1,e!==null&&l?(i.child=kr(i,e.child,null,h),i.child=kr(i,null,r,h)):Rn(e,i,r,h),i.memoizedState=m.state,e=i.child):e=ma(e,i,h),e}function a0(e,i,r,l){return Ir(),i.flags|=256,Rn(e,i,r,l),i.child}var Fh={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Hh(e){return{baseLanes:e,cachePool:Y_()}}function Gh(e,i,r){return e=e!==null?e.childLanes&~r:0,i&&(e|=fi),e}function r0(e,i,r){var l=i.pendingProps,h=!1,m=(i.flags&128)!==0,E;if((E=m)||(E=e!==null&&e.memoizedState===null?!1:(an.current&2)!==0),E&&(h=!0,i.flags&=-129),E=(i.flags&32)!==0,i.flags&=-33,e===null){if(ve){if(h?Qa(i):Ja(),(e=Ge)?(e=dv(e,Ai),e=e!==null&&e.data!=="&"?e:null,e!==null&&(i.memoizedState={dehydrated:e,treeContext:Xa!==null?{id:Zi,overflow:Ki}:null,retryLane:536870912,hydrationErrors:null},r=B_(e),r.return=i,i.child=r,bn=i,Ge=null)):e=null,e===null)throw qa(i);return Ed(e)?i.lanes=32:i.lanes=536870912,null}var C=l.children;return l=l.fallback,h?(Ja(),h=i.mode,C=Ku({mode:"hidden",children:C},h),l=zr(l,h,r,null),C.return=i,l.return=i,C.sibling=l,i.child=C,l=i.child,l.memoizedState=Hh(r),l.childLanes=Gh(e,E,r),i.memoizedState=Fh,xl(null,l)):(Qa(i),Vh(i,C))}var G=e.memoizedState;if(G!==null&&(C=G.dehydrated,C!==null)){if(m)i.flags&256?(Qa(i),i.flags&=-257,i=kh(e,i,r)):i.memoizedState!==null?(Ja(),i.child=e.child,i.flags|=128,i=null):(Ja(),C=l.fallback,h=i.mode,l=Ku({mode:"visible",children:l.children},h),C=zr(C,h,r,null),C.flags|=2,l.return=i,C.return=i,l.sibling=C,i.child=l,kr(i,e.child,null,r),l=i.child,l.memoizedState=Hh(r),l.childLanes=Gh(e,E,r),i.memoizedState=Fh,i=xl(null,l));else if(Qa(i),Ed(C)){if(E=C.nextSibling&&C.nextSibling.dataset,E)var et=E.dgst;E=et,l=Error(a(419)),l.stack="",l.digest=E,ol({value:l,source:null,stack:null}),i=kh(e,i,r)}else if(cn||Ps(e,i,r,!1),E=(r&e.childLanes)!==0,cn||E){if(E=ze,E!==null&&(l=Wo(E,r),l!==0&&l!==G.retryLane))throw G.retryLane=l,Pr(e,l),Zn(E,e,l),Ih;Md(C)||rc(),i=kh(e,i,r)}else Md(C)?(i.flags|=192,i.child=e.child,i=null):(e=G.treeContext,Ge=Ci(C.nextSibling),bn=i,ve=!0,Wa=null,Ai=!1,e!==null&&G_(i,e),i=Vh(i,l.children),i.flags|=4096);return i}return h?(Ja(),C=l.fallback,h=i.mode,G=e.child,et=G.sibling,l=ua(G,{mode:"hidden",children:l.children}),l.subtreeFlags=G.subtreeFlags&65011712,et!==null?C=ua(et,C):(C=zr(C,h,r,null),C.flags|=2),C.return=i,l.return=i,l.sibling=C,i.child=l,xl(null,l),l=i.child,C=e.child.memoizedState,C===null?C=Hh(r):(h=C.cachePool,h!==null?(G=ln._currentValue,h=h.parent!==G?{parent:G,pool:G}:h):h=Y_(),C={baseLanes:C.baseLanes|r,cachePool:h}),l.memoizedState=C,l.childLanes=Gh(e,E,r),i.memoizedState=Fh,xl(e.child,l)):(Qa(i),r=e.child,e=r.sibling,r=ua(r,{mode:"visible",children:l.children}),r.return=i,r.sibling=null,e!==null&&(E=i.deletions,E===null?(i.deletions=[e],i.flags|=16):E.push(e)),i.child=r,i.memoizedState=null,r)}function Vh(e,i){return i=Ku({mode:"visible",children:i},e.mode),i.return=e,e.child=i}function Ku(e,i){return e=oi(22,e,null,i),e.lanes=0,e}function kh(e,i,r){return kr(i,e.child,null,r),e=Vh(i,i.pendingProps.children),e.flags|=2,i.memoizedState=null,e}function s0(e,i,r){e.lanes|=i;var l=e.alternate;l!==null&&(l.lanes|=i),ah(e.return,i,r)}function Xh(e,i,r,l,h,m){var E=e.memoizedState;E===null?e.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:r,tailMode:h,treeForkCount:m}:(E.isBackwards=i,E.rendering=null,E.renderingStartTime=0,E.last=l,E.tail=r,E.tailMode=h,E.treeForkCount=m)}function o0(e,i,r){var l=i.pendingProps,h=l.revealOrder,m=l.tail;l=l.children;var E=an.current,C=(E&2)!==0;if(C?(E=E&1|2,i.flags|=128):E&=1,mt(an,E),Rn(e,i,l,r),l=ve?sl:0,!C&&e!==null&&(e.flags&128)!==0)t:for(e=i.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&s0(e,r,i);else if(e.tag===19)s0(e,r,i);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===i)break t;for(;e.sibling===null;){if(e.return===null||e.return===i)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(h){case"forwards":for(r=i.child,h=null;r!==null;)e=r.alternate,e!==null&&Bu(e)===null&&(h=r),r=r.sibling;r=h,r===null?(h=i.child,i.child=null):(h=r.sibling,r.sibling=null),Xh(i,!1,h,r,m,l);break;case"backwards":case"unstable_legacy-backwards":for(r=null,h=i.child,i.child=null;h!==null;){if(e=h.alternate,e!==null&&Bu(e)===null){i.child=h;break}e=h.sibling,h.sibling=r,r=h,h=e}Xh(i,!0,r,null,m,l);break;case"together":Xh(i,!1,null,null,void 0,l);break;default:i.memoizedState=null}return i.child}function ma(e,i,r){if(e!==null&&(i.dependencies=e.dependencies),er|=i.lanes,(r&i.childLanes)===0)if(e!==null){if(Ps(e,i,r,!1),(r&i.childLanes)===0)return null}else return null;if(e!==null&&i.child!==e.child)throw Error(a(153));if(i.child!==null){for(e=i.child,r=ua(e,e.pendingProps),i.child=r,r.return=i;e.sibling!==null;)e=e.sibling,r=r.sibling=ua(e,e.pendingProps),r.return=i;r.sibling=null}return i.child}function Wh(e,i){return(e.lanes&i)!==0?!0:(e=e.dependencies,!!(e!==null&&Du(e)))}function dE(e,i,r){switch(i.tag){case 3:Gt(i,i.stateNode.containerInfo),Ya(i,ln,e.memoizedState.cache),Ir();break;case 27:case 5:ie(i);break;case 4:Gt(i,i.stateNode.containerInfo);break;case 10:Ya(i,i.type,i.memoizedProps.value);break;case 31:if(i.memoizedState!==null)return i.flags|=128,_h(i),null;break;case 13:var l=i.memoizedState;if(l!==null)return l.dehydrated!==null?(Qa(i),i.flags|=128,null):(r&i.child.childLanes)!==0?r0(e,i,r):(Qa(i),e=ma(e,i,r),e!==null?e.sibling:null);Qa(i);break;case 19:var h=(e.flags&128)!==0;if(l=(r&i.childLanes)!==0,l||(Ps(e,i,r,!1),l=(r&i.childLanes)!==0),h){if(l)return o0(e,i,r);i.flags|=128}if(h=i.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),mt(an,an.current),l)break;return null;case 22:return i.lanes=0,$g(e,i,r,i.pendingProps);case 24:Ya(i,ln,e.memoizedState.cache)}return ma(e,i,r)}function l0(e,i,r){if(e!==null)if(e.memoizedProps!==i.pendingProps)cn=!0;else{if(!Wh(e,r)&&(i.flags&128)===0)return cn=!1,dE(e,i,r);cn=(e.flags&131072)!==0}else cn=!1,ve&&(i.flags&1048576)!==0&&H_(i,sl,i.index);switch(i.lanes=0,i.tag){case 16:t:{var l=i.pendingProps;if(e=Gr(i.elementType),i.type=e,typeof e=="function")Kf(e)?(l=Wr(e,l),i.tag=1,i=i0(null,i,e,l,r)):(i.tag=0,i=Bh(null,i,e,l,r));else{if(e!=null){var h=e.$$typeof;if(h===L){i.tag=11,i=Kg(null,i,e,l,r);break t}else if(h===w){i.tag=14,i=Qg(null,i,e,l,r);break t}}throw i=nt(e)||e,Error(a(306,i,""))}}return i;case 0:return Bh(e,i,i.type,i.pendingProps,r);case 1:return l=i.type,h=Wr(l,i.pendingProps),i0(e,i,l,h,r);case 3:t:{if(Gt(i,i.stateNode.containerInfo),e===null)throw Error(a(387));l=i.pendingProps;var m=i.memoizedState;h=m.element,fh(e,i),pl(i,l,null,r);var E=i.memoizedState;if(l=E.cache,Ya(i,ln,l),l!==m.cache&&rh(i,[ln],r,!0),dl(),l=E.element,m.isDehydrated)if(m={element:l,isDehydrated:!1,cache:E.cache},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){i=a0(e,i,l,r);break t}else if(l!==h){h=Ei(Error(a(424)),i),ol(h),i=a0(e,i,l,r);break t}else{switch(e=i.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ge=Ci(e.firstChild),bn=i,ve=!0,Wa=null,Ai=!0,r=$_(i,null,l,r),i.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling}else{if(Ir(),l===h){i=ma(e,i,r);break t}Rn(e,i,l,r)}i=i.child}return i;case 26:return Zu(e,i),e===null?(r=xv(i.type,null,i.pendingProps,null))?i.memoizedState=r:ve||(r=i.type,e=i.pendingProps,l=hc(St.current).createElement(r),l[on]=i,l[Un]=e,Cn(l,r,e),It(l),i.stateNode=l):i.memoizedState=xv(i.type,e.memoizedProps,i.pendingProps,e.memoizedState),null;case 27:return ie(i),e===null&&ve&&(l=i.stateNode=_v(i.type,i.pendingProps,St.current),bn=i,Ai=!0,h=Ge,sr(i.type)?(Td=h,Ge=Ci(l.firstChild)):Ge=h),Rn(e,i,i.pendingProps.children,r),Zu(e,i),e===null&&(i.flags|=4194304),i.child;case 5:return e===null&&ve&&((h=l=Ge)&&(l=kE(l,i.type,i.pendingProps,Ai),l!==null?(i.stateNode=l,bn=i,Ge=Ci(l.firstChild),Ai=!1,h=!0):h=!1),h||qa(i)),ie(i),h=i.type,m=i.pendingProps,E=e!==null?e.memoizedProps:null,l=m.children,xd(h,m)?l=null:E!==null&&xd(h,E)&&(i.flags|=32),i.memoizedState!==null&&(h=vh(e,i,aE,null,null,r),Ol._currentValue=h),Zu(e,i),Rn(e,i,l,r),i.child;case 6:return e===null&&ve&&((e=r=Ge)&&(r=XE(r,i.pendingProps,Ai),r!==null?(i.stateNode=r,bn=i,Ge=null,e=!0):e=!1),e||qa(i)),null;case 13:return r0(e,i,r);case 4:return Gt(i,i.stateNode.containerInfo),l=i.pendingProps,e===null?i.child=kr(i,null,l,r):Rn(e,i,l,r),i.child;case 11:return Kg(e,i,i.type,i.pendingProps,r);case 7:return Rn(e,i,i.pendingProps,r),i.child;case 8:return Rn(e,i,i.pendingProps.children,r),i.child;case 12:return Rn(e,i,i.pendingProps.children,r),i.child;case 10:return l=i.pendingProps,Ya(i,i.type,l.value),Rn(e,i,l.children,r),i.child;case 9:return h=i.type._context,l=i.pendingProps.children,Fr(i),h=An(h),l=l(h),i.flags|=1,Rn(e,i,l,r),i.child;case 14:return Qg(e,i,i.type,i.pendingProps,r);case 15:return Jg(e,i,i.type,i.pendingProps,r);case 19:return o0(e,i,r);case 31:return hE(e,i,r);case 22:return $g(e,i,r,i.pendingProps);case 24:return Fr(i),l=An(ln),e===null?(h=lh(),h===null&&(h=ze,m=sh(),h.pooledCache=m,m.refCount++,m!==null&&(h.pooledCacheLanes|=r),h=m),i.memoizedState={parent:l,cache:h},ch(i),Ya(i,ln,h)):((e.lanes&r)!==0&&(fh(e,i),pl(i,null,null,r),dl()),h=e.memoizedState,m=i.memoizedState,h.parent!==l?(h={parent:l,cache:l},i.memoizedState=h,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=h),Ya(i,ln,l)):(l=m.cache,Ya(i,ln,l),l!==h.cache&&rh(i,[ln],r,!0))),Rn(e,i,i.pendingProps.children,r),i.child;case 29:throw i.pendingProps}throw Error(a(156,i.tag))}function _a(e){e.flags|=4}function qh(e,i,r,l,h){if((i=(e.mode&32)!==0)&&(i=!1),i){if(e.flags|=16777216,(h&335544128)===h)if(e.stateNode.complete)e.flags|=8192;else if(P0())e.flags|=8192;else throw Vr=Ou,uh}else e.flags&=-16777217}function u0(e,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Tv(i))if(P0())e.flags|=8192;else throw Vr=Ou,uh}function Qu(e,i){i!==null&&(e.flags|=4),e.flags&16384&&(i=e.tag!==22?ye():536870912,e.lanes|=i,Ys|=i)}function Sl(e,i){if(!ve)switch(e.tailMode){case"hidden":i=e.tail;for(var r=null;i!==null;)i.alternate!==null&&(r=i),i=i.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var l=null;r!==null;)r.alternate!==null&&(l=r),r=r.sibling;l===null?i||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function Ve(e){var i=e.alternate!==null&&e.alternate.child===e.child,r=0,l=0;if(i)for(var h=e.child;h!==null;)r|=h.lanes|h.childLanes,l|=h.subtreeFlags&65011712,l|=h.flags&65011712,h.return=e,h=h.sibling;else for(h=e.child;h!==null;)r|=h.lanes|h.childLanes,l|=h.subtreeFlags,l|=h.flags,h.return=e,h=h.sibling;return e.subtreeFlags|=l,e.childLanes=r,i}function pE(e,i,r){var l=i.pendingProps;switch(th(i),i.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ve(i),null;case 1:return Ve(i),null;case 3:return r=i.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),ha(ln),Ht(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Os(i)?_a(i):e===null||e.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,nh())),Ve(i),null;case 26:var h=i.type,m=i.memoizedState;return e===null?(_a(i),m!==null?(Ve(i),u0(i,m)):(Ve(i),qh(i,h,null,l,r))):m?m!==e.memoizedState?(_a(i),Ve(i),u0(i,m)):(Ve(i),i.flags&=-16777217):(e=e.memoizedProps,e!==l&&_a(i),Ve(i),qh(i,h,e,l,r)),null;case 27:if(Pe(i),r=St.current,h=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==l&&_a(i);else{if(!l){if(i.stateNode===null)throw Error(a(166));return Ve(i),null}e=j.current,Os(i)?V_(i):(e=_v(h,l,r),i.stateNode=e,_a(i))}return Ve(i),null;case 5:if(Pe(i),h=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==l&&_a(i);else{if(!l){if(i.stateNode===null)throw Error(a(166));return Ve(i),null}if(m=j.current,Os(i))V_(i);else{var E=hc(St.current);switch(m){case 1:m=E.createElementNS("http://www.w3.org/2000/svg",h);break;case 2:m=E.createElementNS("http://www.w3.org/1998/Math/MathML",h);break;default:switch(h){case"svg":m=E.createElementNS("http://www.w3.org/2000/svg",h);break;case"math":m=E.createElementNS("http://www.w3.org/1998/Math/MathML",h);break;case"script":m=E.createElement("div"),m.innerHTML="<script><\/script>",m=m.removeChild(m.firstChild);break;case"select":m=typeof l.is=="string"?E.createElement("select",{is:l.is}):E.createElement("select"),l.multiple?m.multiple=!0:l.size&&(m.size=l.size);break;default:m=typeof l.is=="string"?E.createElement(h,{is:l.is}):E.createElement(h)}}m[on]=i,m[Un]=l;t:for(E=i.child;E!==null;){if(E.tag===5||E.tag===6)m.appendChild(E.stateNode);else if(E.tag!==4&&E.tag!==27&&E.child!==null){E.child.return=E,E=E.child;continue}if(E===i)break t;for(;E.sibling===null;){if(E.return===null||E.return===i)break t;E=E.return}E.sibling.return=E.return,E=E.sibling}i.stateNode=m;t:switch(Cn(m,h,l),h){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break t;case"img":l=!0;break t;default:l=!1}l&&_a(i)}}return Ve(i),qh(i,i.type,e===null?null:e.memoizedProps,i.pendingProps,r),null;case 6:if(e&&i.stateNode!=null)e.memoizedProps!==l&&_a(i);else{if(typeof l!="string"&&i.stateNode===null)throw Error(a(166));if(e=St.current,Os(i)){if(e=i.stateNode,r=i.memoizedProps,l=null,h=bn,h!==null)switch(h.tag){case 27:case 5:l=h.memoizedProps}e[on]=i,e=!!(e.nodeValue===r||l!==null&&l.suppressHydrationWarning===!0||rv(e.nodeValue,r)),e||qa(i,!0)}else e=hc(e).createTextNode(l),e[on]=i,i.stateNode=e}return Ve(i),null;case 31:if(r=i.memoizedState,e===null||e.memoizedState!==null){if(l=Os(i),r!==null){if(e===null){if(!l)throw Error(a(318));if(e=i.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(557));e[on]=i}else Ir(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Ve(i),e=!1}else r=nh(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=r),e=!0;if(!e)return i.flags&256?(ui(i),i):(ui(i),null);if((i.flags&128)!==0)throw Error(a(558))}return Ve(i),null;case 13:if(l=i.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(h=Os(i),l!==null&&l.dehydrated!==null){if(e===null){if(!h)throw Error(a(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(a(317));h[on]=i}else Ir(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Ve(i),h=!1}else h=nh(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=h),h=!0;if(!h)return i.flags&256?(ui(i),i):(ui(i),null)}return ui(i),(i.flags&128)!==0?(i.lanes=r,i):(r=l!==null,e=e!==null&&e.memoizedState!==null,r&&(l=i.child,h=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(h=l.alternate.memoizedState.cachePool.pool),m=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(m=l.memoizedState.cachePool.pool),m!==h&&(l.flags|=2048)),r!==e&&r&&(i.child.flags|=8192),Qu(i,i.updateQueue),Ve(i),null);case 4:return Ht(),e===null&&pd(i.stateNode.containerInfo),Ve(i),null;case 10:return ha(i.type),Ve(i),null;case 19:if($(an),l=i.memoizedState,l===null)return Ve(i),null;if(h=(i.flags&128)!==0,m=l.rendering,m===null)if(h)Sl(l,!1);else{if(tn!==0||e!==null&&(e.flags&128)!==0)for(e=i.child;e!==null;){if(m=Bu(e),m!==null){for(i.flags|=128,Sl(l,!1),e=m.updateQueue,i.updateQueue=e,Qu(i,e),i.subtreeFlags=0,e=r,r=i.child;r!==null;)I_(r,e),r=r.sibling;return mt(an,an.current&1|2),ve&&ca(i,l.treeForkCount),i.child}e=e.sibling}l.tail!==null&&xt()>nc&&(i.flags|=128,h=!0,Sl(l,!1),i.lanes=4194304)}else{if(!h)if(e=Bu(m),e!==null){if(i.flags|=128,h=!0,e=e.updateQueue,i.updateQueue=e,Qu(i,e),Sl(l,!0),l.tail===null&&l.tailMode==="hidden"&&!m.alternate&&!ve)return Ve(i),null}else 2*xt()-l.renderingStartTime>nc&&r!==536870912&&(i.flags|=128,h=!0,Sl(l,!1),i.lanes=4194304);l.isBackwards?(m.sibling=i.child,i.child=m):(e=l.last,e!==null?e.sibling=m:i.child=m,l.last=m)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=xt(),e.sibling=null,r=an.current,mt(an,h?r&1|2:r&1),ve&&ca(i,l.treeForkCount),e):(Ve(i),null);case 22:case 23:return ui(i),mh(),l=i.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(i.flags|=8192):l&&(i.flags|=8192),l?(r&536870912)!==0&&(i.flags&128)===0&&(Ve(i),i.subtreeFlags&6&&(i.flags|=8192)):Ve(i),r=i.updateQueue,r!==null&&Qu(i,r.retryQueue),r=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==r&&(i.flags|=2048),e!==null&&$(Hr),null;case 24:return r=null,e!==null&&(r=e.memoizedState.cache),i.memoizedState.cache!==r&&(i.flags|=2048),ha(ln),Ve(i),null;case 25:return null;case 30:return null}throw Error(a(156,i.tag))}function mE(e,i){switch(th(i),i.tag){case 1:return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 3:return ha(ln),Ht(),e=i.flags,(e&65536)!==0&&(e&128)===0?(i.flags=e&-65537|128,i):null;case 26:case 27:case 5:return Pe(i),null;case 31:if(i.memoizedState!==null){if(ui(i),i.alternate===null)throw Error(a(340));Ir()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 13:if(ui(i),e=i.memoizedState,e!==null&&e.dehydrated!==null){if(i.alternate===null)throw Error(a(340));Ir()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 19:return $(an),null;case 4:return Ht(),null;case 10:return ha(i.type),null;case 22:case 23:return ui(i),mh(),e!==null&&$(Hr),e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 24:return ha(ln),null;case 25:return null;default:return null}}function c0(e,i){switch(th(i),i.tag){case 3:ha(ln),Ht();break;case 26:case 27:case 5:Pe(i);break;case 4:Ht();break;case 31:i.memoizedState!==null&&ui(i);break;case 13:ui(i);break;case 19:$(an);break;case 10:ha(i.type);break;case 22:case 23:ui(i),mh(),e!==null&&$(Hr);break;case 24:ha(ln)}}function yl(e,i){try{var r=i.updateQueue,l=r!==null?r.lastEffect:null;if(l!==null){var h=l.next;r=h;do{if((r.tag&e)===e){l=void 0;var m=r.create,E=r.inst;l=m(),E.destroy=l}r=r.next}while(r!==h)}}catch(C){De(i,i.return,C)}}function $a(e,i,r){try{var l=i.updateQueue,h=l!==null?l.lastEffect:null;if(h!==null){var m=h.next;l=m;do{if((l.tag&e)===e){var E=l.inst,C=E.destroy;if(C!==void 0){E.destroy=void 0,h=i;var G=r,et=C;try{et()}catch(ft){De(h,G,ft)}}}l=l.next}while(l!==m)}}catch(ft){De(i,i.return,ft)}}function f0(e){var i=e.updateQueue;if(i!==null){var r=e.stateNode;try{eg(i,r)}catch(l){De(e,e.return,l)}}}function h0(e,i,r){r.props=Wr(e.type,e.memoizedProps),r.state=e.memoizedState;try{r.componentWillUnmount()}catch(l){De(e,i,l)}}function Ml(e,i){try{var r=e.ref;if(r!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof r=="function"?e.refCleanup=r(l):r.current=l}}catch(h){De(e,i,h)}}function Qi(e,i){var r=e.ref,l=e.refCleanup;if(r!==null)if(typeof l=="function")try{l()}catch(h){De(e,i,h)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof r=="function")try{r(null)}catch(h){De(e,i,h)}else r.current=null}function d0(e){var i=e.type,r=e.memoizedProps,l=e.stateNode;try{t:switch(i){case"button":case"input":case"select":case"textarea":r.autoFocus&&l.focus();break t;case"img":r.src?l.src=r.src:r.srcSet&&(l.srcset=r.srcSet)}}catch(h){De(e,e.return,h)}}function Yh(e,i,r){try{var l=e.stateNode;IE(l,e.type,r,i),l[Un]=i}catch(h){De(e,e.return,h)}}function p0(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&sr(e.type)||e.tag===4}function jh(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||p0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&sr(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Zh(e,i,r){var l=e.tag;if(l===5||l===6)e=e.stateNode,i?(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r).insertBefore(e,i):(i=r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,i.appendChild(e),r=r._reactRootContainer,r!=null||i.onclick!==null||(i.onclick=oa));else if(l!==4&&(l===27&&sr(e.type)&&(r=e.stateNode,i=null),e=e.child,e!==null))for(Zh(e,i,r),e=e.sibling;e!==null;)Zh(e,i,r),e=e.sibling}function Ju(e,i,r){var l=e.tag;if(l===5||l===6)e=e.stateNode,i?r.insertBefore(e,i):r.appendChild(e);else if(l!==4&&(l===27&&sr(e.type)&&(r=e.stateNode),e=e.child,e!==null))for(Ju(e,i,r),e=e.sibling;e!==null;)Ju(e,i,r),e=e.sibling}function m0(e){var i=e.stateNode,r=e.memoizedProps;try{for(var l=e.type,h=i.attributes;h.length;)i.removeAttributeNode(h[0]);Cn(i,l,r),i[on]=e,i[Un]=r}catch(m){De(e,e.return,m)}}var ga=!1,fn=!1,Kh=!1,_0=typeof WeakSet=="function"?WeakSet:Set,yn=null;function _E(e,i){if(e=e.containerInfo,gd=xc,e=C_(e),kf(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else t:{r=(r=e.ownerDocument)&&r.defaultView||window;var l=r.getSelection&&r.getSelection();if(l&&l.rangeCount!==0){r=l.anchorNode;var h=l.anchorOffset,m=l.focusNode;l=l.focusOffset;try{r.nodeType,m.nodeType}catch{r=null;break t}var E=0,C=-1,G=-1,et=0,ft=0,gt=e,it=null;e:for(;;){for(var ut;gt!==r||h!==0&&gt.nodeType!==3||(C=E+h),gt!==m||l!==0&&gt.nodeType!==3||(G=E+l),gt.nodeType===3&&(E+=gt.nodeValue.length),(ut=gt.firstChild)!==null;)it=gt,gt=ut;for(;;){if(gt===e)break e;if(it===r&&++et===h&&(C=E),it===m&&++ft===l&&(G=E),(ut=gt.nextSibling)!==null)break;gt=it,it=gt.parentNode}gt=ut}r=C===-1||G===-1?null:{start:C,end:G}}else r=null}r=r||{start:0,end:0}}else r=null;for(vd={focusedElem:e,selectionRange:r},xc=!1,yn=i;yn!==null;)if(i=yn,e=i.child,(i.subtreeFlags&1028)!==0&&e!==null)e.return=i,yn=e;else for(;yn!==null;){switch(i=yn,m=i.alternate,e=i.flags,i.tag){case 0:if((e&4)!==0&&(e=i.updateQueue,e=e!==null?e.events:null,e!==null))for(r=0;r<e.length;r++)h=e[r],h.ref.impl=h.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&m!==null){e=void 0,r=i,h=m.memoizedProps,m=m.memoizedState,l=r.stateNode;try{var Bt=Wr(r.type,h);e=l.getSnapshotBeforeUpdate(Bt,m),l.__reactInternalSnapshotBeforeUpdate=e}catch(Jt){De(r,r.return,Jt)}}break;case 3:if((e&1024)!==0){if(e=i.stateNode.containerInfo,r=e.nodeType,r===9)yd(e);else if(r===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":yd(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(a(163))}if(e=i.sibling,e!==null){e.return=i.return,yn=e;break}yn=i.return}}function g0(e,i,r){var l=r.flags;switch(r.tag){case 0:case 11:case 15:xa(e,r),l&4&&yl(5,r);break;case 1:if(xa(e,r),l&4)if(e=r.stateNode,i===null)try{e.componentDidMount()}catch(E){De(r,r.return,E)}else{var h=Wr(r.type,i.memoizedProps);i=i.memoizedState;try{e.componentDidUpdate(h,i,e.__reactInternalSnapshotBeforeUpdate)}catch(E){De(r,r.return,E)}}l&64&&f0(r),l&512&&Ml(r,r.return);break;case 3:if(xa(e,r),l&64&&(e=r.updateQueue,e!==null)){if(i=null,r.child!==null)switch(r.child.tag){case 27:case 5:i=r.child.stateNode;break;case 1:i=r.child.stateNode}try{eg(e,i)}catch(E){De(r,r.return,E)}}break;case 27:i===null&&l&4&&m0(r);case 26:case 5:xa(e,r),i===null&&l&4&&d0(r),l&512&&Ml(r,r.return);break;case 12:xa(e,r);break;case 31:xa(e,r),l&4&&S0(e,r);break;case 13:xa(e,r),l&4&&y0(e,r),l&64&&(e=r.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(r=bE.bind(null,r),WE(e,r))));break;case 22:if(l=r.memoizedState!==null||ga,!l){i=i!==null&&i.memoizedState!==null||fn,h=ga;var m=fn;ga=l,(fn=i)&&!m?Sa(e,r,(r.subtreeFlags&8772)!==0):xa(e,r),ga=h,fn=m}break;case 30:break;default:xa(e,r)}}function v0(e){var i=e.alternate;i!==null&&(e.alternate=null,v0(i)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(i=e.stateNode,i!==null&&J(i)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var qe=null,Wn=!1;function va(e,i,r){for(r=r.child;r!==null;)x0(e,i,r),r=r.sibling}function x0(e,i,r){if(wt&&typeof wt.onCommitFiberUnmount=="function")try{wt.onCommitFiberUnmount(Qt,r)}catch{}switch(r.tag){case 26:fn||Qi(r,i),va(e,i,r),r.memoizedState?r.memoizedState.count--:r.stateNode&&(r=r.stateNode,r.parentNode.removeChild(r));break;case 27:fn||Qi(r,i);var l=qe,h=Wn;sr(r.type)&&(qe=r.stateNode,Wn=!1),va(e,i,r),Ul(r.stateNode),qe=l,Wn=h;break;case 5:fn||Qi(r,i);case 6:if(l=qe,h=Wn,qe=null,va(e,i,r),qe=l,Wn=h,qe!==null)if(Wn)try{(qe.nodeType===9?qe.body:qe.nodeName==="HTML"?qe.ownerDocument.body:qe).removeChild(r.stateNode)}catch(m){De(r,i,m)}else try{qe.removeChild(r.stateNode)}catch(m){De(r,i,m)}break;case 18:qe!==null&&(Wn?(e=qe,fv(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,r.stateNode),eo(e)):fv(qe,r.stateNode));break;case 4:l=qe,h=Wn,qe=r.stateNode.containerInfo,Wn=!0,va(e,i,r),qe=l,Wn=h;break;case 0:case 11:case 14:case 15:$a(2,r,i),fn||$a(4,r,i),va(e,i,r);break;case 1:fn||(Qi(r,i),l=r.stateNode,typeof l.componentWillUnmount=="function"&&h0(r,i,l)),va(e,i,r);break;case 21:va(e,i,r);break;case 22:fn=(l=fn)||r.memoizedState!==null,va(e,i,r),fn=l;break;default:va(e,i,r)}}function S0(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{eo(e)}catch(r){De(i,i.return,r)}}}function y0(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{eo(e)}catch(r){De(i,i.return,r)}}function gE(e){switch(e.tag){case 31:case 13:case 19:var i=e.stateNode;return i===null&&(i=e.stateNode=new _0),i;case 22:return e=e.stateNode,i=e._retryCache,i===null&&(i=e._retryCache=new _0),i;default:throw Error(a(435,e.tag))}}function $u(e,i){var r=gE(e);i.forEach(function(l){if(!r.has(l)){r.add(l);var h=AE.bind(null,e,l);l.then(h,h)}})}function qn(e,i){var r=i.deletions;if(r!==null)for(var l=0;l<r.length;l++){var h=r[l],m=e,E=i,C=E;t:for(;C!==null;){switch(C.tag){case 27:if(sr(C.type)){qe=C.stateNode,Wn=!1;break t}break;case 5:qe=C.stateNode,Wn=!1;break t;case 3:case 4:qe=C.stateNode.containerInfo,Wn=!0;break t}C=C.return}if(qe===null)throw Error(a(160));x0(m,E,h),qe=null,Wn=!1,m=h.alternate,m!==null&&(m.return=null),h.return=null}if(i.subtreeFlags&13886)for(i=i.child;i!==null;)M0(i,e),i=i.sibling}var Fi=null;function M0(e,i){var r=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:qn(i,e),Yn(e),l&4&&($a(3,e,e.return),yl(3,e),$a(5,e,e.return));break;case 1:qn(i,e),Yn(e),l&512&&(fn||r===null||Qi(r,r.return)),l&64&&ga&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(r=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=r===null?l:r.concat(l))));break;case 26:var h=Fi;if(qn(i,e),Yn(e),l&512&&(fn||r===null||Qi(r,r.return)),l&4){var m=r!==null?r.memoizedState:null;if(l=e.memoizedState,r===null)if(l===null)if(e.stateNode===null){t:{l=e.type,r=e.memoizedProps,h=h.ownerDocument||h;e:switch(l){case"title":m=h.getElementsByTagName("title")[0],(!m||m[st]||m[on]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=h.createElement(l),h.head.insertBefore(m,h.querySelector("head > title"))),Cn(m,l,r),m[on]=e,It(m),l=m;break t;case"link":var E=Mv("link","href",h).get(l+(r.href||""));if(E){for(var C=0;C<E.length;C++)if(m=E[C],m.getAttribute("href")===(r.href==null||r.href===""?null:r.href)&&m.getAttribute("rel")===(r.rel==null?null:r.rel)&&m.getAttribute("title")===(r.title==null?null:r.title)&&m.getAttribute("crossorigin")===(r.crossOrigin==null?null:r.crossOrigin)){E.splice(C,1);break e}}m=h.createElement(l),Cn(m,l,r),h.head.appendChild(m);break;case"meta":if(E=Mv("meta","content",h).get(l+(r.content||""))){for(C=0;C<E.length;C++)if(m=E[C],m.getAttribute("content")===(r.content==null?null:""+r.content)&&m.getAttribute("name")===(r.name==null?null:r.name)&&m.getAttribute("property")===(r.property==null?null:r.property)&&m.getAttribute("http-equiv")===(r.httpEquiv==null?null:r.httpEquiv)&&m.getAttribute("charset")===(r.charSet==null?null:r.charSet)){E.splice(C,1);break e}}m=h.createElement(l),Cn(m,l,r),h.head.appendChild(m);break;default:throw Error(a(468,l))}m[on]=e,It(m),l=m}e.stateNode=l}else Ev(h,e.type,e.stateNode);else e.stateNode=yv(h,l,e.memoizedProps);else m!==l?(m===null?r.stateNode!==null&&(r=r.stateNode,r.parentNode.removeChild(r)):m.count--,l===null?Ev(h,e.type,e.stateNode):yv(h,l,e.memoizedProps)):l===null&&e.stateNode!==null&&Yh(e,e.memoizedProps,r.memoizedProps)}break;case 27:qn(i,e),Yn(e),l&512&&(fn||r===null||Qi(r,r.return)),r!==null&&l&4&&Yh(e,e.memoizedProps,r.memoizedProps);break;case 5:if(qn(i,e),Yn(e),l&512&&(fn||r===null||Qi(r,r.return)),e.flags&32){h=e.stateNode;try{Ts(h,"")}catch(Bt){De(e,e.return,Bt)}}l&4&&e.stateNode!=null&&(h=e.memoizedProps,Yh(e,h,r!==null?r.memoizedProps:h)),l&1024&&(Kh=!0);break;case 6:if(qn(i,e),Yn(e),l&4){if(e.stateNode===null)throw Error(a(162));l=e.memoizedProps,r=e.stateNode;try{r.nodeValue=l}catch(Bt){De(e,e.return,Bt)}}break;case 3:if(mc=null,h=Fi,Fi=dc(i.containerInfo),qn(i,e),Fi=h,Yn(e),l&4&&r!==null&&r.memoizedState.isDehydrated)try{eo(i.containerInfo)}catch(Bt){De(e,e.return,Bt)}Kh&&(Kh=!1,E0(e));break;case 4:l=Fi,Fi=dc(e.stateNode.containerInfo),qn(i,e),Yn(e),Fi=l;break;case 12:qn(i,e),Yn(e);break;case 31:qn(i,e),Yn(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,$u(e,l)));break;case 13:qn(i,e),Yn(e),e.child.flags&8192&&e.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(ec=xt()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,$u(e,l)));break;case 22:h=e.memoizedState!==null;var G=r!==null&&r.memoizedState!==null,et=ga,ft=fn;if(ga=et||h,fn=ft||G,qn(i,e),fn=ft,ga=et,Yn(e),l&8192)t:for(i=e.stateNode,i._visibility=h?i._visibility&-2:i._visibility|1,h&&(r===null||G||ga||fn||qr(e)),r=null,i=e;;){if(i.tag===5||i.tag===26){if(r===null){G=r=i;try{if(m=G.stateNode,h)E=m.style,typeof E.setProperty=="function"?E.setProperty("display","none","important"):E.display="none";else{C=G.stateNode;var gt=G.memoizedProps.style,it=gt!=null&&gt.hasOwnProperty("display")?gt.display:null;C.style.display=it==null||typeof it=="boolean"?"":(""+it).trim()}}catch(Bt){De(G,G.return,Bt)}}}else if(i.tag===6){if(r===null){G=i;try{G.stateNode.nodeValue=h?"":G.memoizedProps}catch(Bt){De(G,G.return,Bt)}}}else if(i.tag===18){if(r===null){G=i;try{var ut=G.stateNode;h?hv(ut,!0):hv(G.stateNode,!1)}catch(Bt){De(G,G.return,Bt)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===e)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break t;for(;i.sibling===null;){if(i.return===null||i.return===e)break t;r===i&&(r=null),i=i.return}r===i&&(r=null),i.sibling.return=i.return,i=i.sibling}l&4&&(l=e.updateQueue,l!==null&&(r=l.retryQueue,r!==null&&(l.retryQueue=null,$u(e,r))));break;case 19:qn(i,e),Yn(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,$u(e,l)));break;case 30:break;case 21:break;default:qn(i,e),Yn(e)}}function Yn(e){var i=e.flags;if(i&2){try{for(var r,l=e.return;l!==null;){if(p0(l)){r=l;break}l=l.return}if(r==null)throw Error(a(160));switch(r.tag){case 27:var h=r.stateNode,m=jh(e);Ju(e,m,h);break;case 5:var E=r.stateNode;r.flags&32&&(Ts(E,""),r.flags&=-33);var C=jh(e);Ju(e,C,E);break;case 3:case 4:var G=r.stateNode.containerInfo,et=jh(e);Zh(e,et,G);break;default:throw Error(a(161))}}catch(ft){De(e,e.return,ft)}e.flags&=-3}i&4096&&(e.flags&=-4097)}function E0(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var i=e;E0(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),e=e.sibling}}function xa(e,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)g0(e,i.alternate,i),i=i.sibling}function qr(e){for(e=e.child;e!==null;){var i=e;switch(i.tag){case 0:case 11:case 14:case 15:$a(4,i,i.return),qr(i);break;case 1:Qi(i,i.return);var r=i.stateNode;typeof r.componentWillUnmount=="function"&&h0(i,i.return,r),qr(i);break;case 27:Ul(i.stateNode);case 26:case 5:Qi(i,i.return),qr(i);break;case 22:i.memoizedState===null&&qr(i);break;case 30:qr(i);break;default:qr(i)}e=e.sibling}}function Sa(e,i,r){for(r=r&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var l=i.alternate,h=e,m=i,E=m.flags;switch(m.tag){case 0:case 11:case 15:Sa(h,m,r),yl(4,m);break;case 1:if(Sa(h,m,r),l=m,h=l.stateNode,typeof h.componentDidMount=="function")try{h.componentDidMount()}catch(et){De(l,l.return,et)}if(l=m,h=l.updateQueue,h!==null){var C=l.stateNode;try{var G=h.shared.hiddenCallbacks;if(G!==null)for(h.shared.hiddenCallbacks=null,h=0;h<G.length;h++)tg(G[h],C)}catch(et){De(l,l.return,et)}}r&&E&64&&f0(m),Ml(m,m.return);break;case 27:m0(m);case 26:case 5:Sa(h,m,r),r&&l===null&&E&4&&d0(m),Ml(m,m.return);break;case 12:Sa(h,m,r);break;case 31:Sa(h,m,r),r&&E&4&&S0(h,m);break;case 13:Sa(h,m,r),r&&E&4&&y0(h,m);break;case 22:m.memoizedState===null&&Sa(h,m,r),Ml(m,m.return);break;case 30:break;default:Sa(h,m,r)}i=i.sibling}}function Qh(e,i){var r=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),e=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(e=i.memoizedState.cachePool.pool),e!==r&&(e!=null&&e.refCount++,r!=null&&ll(r))}function Jh(e,i){e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&ll(e))}function Hi(e,i,r,l){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)T0(e,i,r,l),i=i.sibling}function T0(e,i,r,l){var h=i.flags;switch(i.tag){case 0:case 11:case 15:Hi(e,i,r,l),h&2048&&yl(9,i);break;case 1:Hi(e,i,r,l);break;case 3:Hi(e,i,r,l),h&2048&&(e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&ll(e)));break;case 12:if(h&2048){Hi(e,i,r,l),e=i.stateNode;try{var m=i.memoizedProps,E=m.id,C=m.onPostCommit;typeof C=="function"&&C(E,i.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(G){De(i,i.return,G)}}else Hi(e,i,r,l);break;case 31:Hi(e,i,r,l);break;case 13:Hi(e,i,r,l);break;case 23:break;case 22:m=i.stateNode,E=i.alternate,i.memoizedState!==null?m._visibility&2?Hi(e,i,r,l):El(e,i):m._visibility&2?Hi(e,i,r,l):(m._visibility|=2,Xs(e,i,r,l,(i.subtreeFlags&10256)!==0||!1)),h&2048&&Qh(E,i);break;case 24:Hi(e,i,r,l),h&2048&&Jh(i.alternate,i);break;default:Hi(e,i,r,l)}}function Xs(e,i,r,l,h){for(h=h&&((i.subtreeFlags&10256)!==0||!1),i=i.child;i!==null;){var m=e,E=i,C=r,G=l,et=E.flags;switch(E.tag){case 0:case 11:case 15:Xs(m,E,C,G,h),yl(8,E);break;case 23:break;case 22:var ft=E.stateNode;E.memoizedState!==null?ft._visibility&2?Xs(m,E,C,G,h):El(m,E):(ft._visibility|=2,Xs(m,E,C,G,h)),h&&et&2048&&Qh(E.alternate,E);break;case 24:Xs(m,E,C,G,h),h&&et&2048&&Jh(E.alternate,E);break;default:Xs(m,E,C,G,h)}i=i.sibling}}function El(e,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var r=e,l=i,h=l.flags;switch(l.tag){case 22:El(r,l),h&2048&&Qh(l.alternate,l);break;case 24:El(r,l),h&2048&&Jh(l.alternate,l);break;default:El(r,l)}i=i.sibling}}var Tl=8192;function Ws(e,i,r){if(e.subtreeFlags&Tl)for(e=e.child;e!==null;)b0(e,i,r),e=e.sibling}function b0(e,i,r){switch(e.tag){case 26:Ws(e,i,r),e.flags&Tl&&e.memoizedState!==null&&iT(r,Fi,e.memoizedState,e.memoizedProps);break;case 5:Ws(e,i,r);break;case 3:case 4:var l=Fi;Fi=dc(e.stateNode.containerInfo),Ws(e,i,r),Fi=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=Tl,Tl=16777216,Ws(e,i,r),Tl=l):Ws(e,i,r));break;default:Ws(e,i,r)}}function A0(e){var i=e.alternate;if(i!==null&&(e=i.child,e!==null)){i.child=null;do i=e.sibling,e.sibling=null,e=i;while(e!==null)}}function bl(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var r=0;r<i.length;r++){var l=i[r];yn=l,C0(l,e)}A0(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)R0(e),e=e.sibling}function R0(e){switch(e.tag){case 0:case 11:case 15:bl(e),e.flags&2048&&$a(9,e,e.return);break;case 3:bl(e);break;case 12:bl(e);break;case 22:var i=e.stateNode;e.memoizedState!==null&&i._visibility&2&&(e.return===null||e.return.tag!==13)?(i._visibility&=-3,tc(e)):bl(e);break;default:bl(e)}}function tc(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var r=0;r<i.length;r++){var l=i[r];yn=l,C0(l,e)}A0(e)}for(e=e.child;e!==null;){switch(i=e,i.tag){case 0:case 11:case 15:$a(8,i,i.return),tc(i);break;case 22:r=i.stateNode,r._visibility&2&&(r._visibility&=-3,tc(i));break;default:tc(i)}e=e.sibling}}function C0(e,i){for(;yn!==null;){var r=yn;switch(r.tag){case 0:case 11:case 15:$a(8,r,i);break;case 23:case 22:if(r.memoizedState!==null&&r.memoizedState.cachePool!==null){var l=r.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:ll(r.memoizedState.cache)}if(l=r.child,l!==null)l.return=r,yn=l;else t:for(r=e;yn!==null;){l=yn;var h=l.sibling,m=l.return;if(v0(l),l===r){yn=null;break t}if(h!==null){h.return=m,yn=h;break t}yn=m}}}var vE={getCacheForType:function(e){var i=An(ln),r=i.data.get(e);return r===void 0&&(r=e(),i.data.set(e,r)),r},cacheSignal:function(){return An(ln).controller.signal}},xE=typeof WeakMap=="function"?WeakMap:Map,Ae=0,ze=null,he=null,me=0,we=0,ci=null,tr=!1,qs=!1,$h=!1,ya=0,tn=0,er=0,Yr=0,td=0,fi=0,Ys=0,Al=null,jn=null,ed=!1,ec=0,w0=0,nc=1/0,ic=null,nr=null,gn=0,ir=null,js=null,Ma=0,nd=0,id=null,D0=null,Rl=0,ad=null;function hi(){return(Ae&2)!==0&&me!==0?me&-me:I.T!==null?cd():qo()}function U0(){if(fi===0)if((me&536870912)===0||ve){var e=vt;vt<<=1,(vt&3932160)===0&&(vt=262144),fi=e}else fi=536870912;return e=li.current,e!==null&&(e.flags|=32),fi}function Zn(e,i,r){(e===ze&&(we===2||we===9)||e.cancelPendingCommit!==null)&&(Zs(e,0),ar(e,me,fi,!1)),Dn(e,r),((Ae&2)===0||e!==ze)&&(e===ze&&((Ae&2)===0&&(Yr|=r),tn===4&&ar(e,me,fi,!1)),Ji(e))}function L0(e,i,r){if((Ae&6)!==0)throw Error(a(327));var l=!r&&(i&127)===0&&(i&e.expiredLanes)===0||Fe(e,i),h=l?ME(e,i):sd(e,i,!0),m=l;do{if(h===0){qs&&!l&&ar(e,i,0,!1);break}else{if(r=e.current.alternate,m&&!SE(r)){h=sd(e,i,!1),m=!1;continue}if(h===2){if(m=i,e.errorRecoveryDisabledLanes&m)var E=0;else E=e.pendingLanes&-536870913,E=E!==0?E:E&536870912?536870912:0;if(E!==0){i=E;t:{var C=e;h=Al;var G=C.current.memoizedState.isDehydrated;if(G&&(Zs(C,E).flags|=256),E=sd(C,E,!1),E!==2){if($h&&!G){C.errorRecoveryDisabledLanes|=m,Yr|=m,h=4;break t}m=jn,jn=h,m!==null&&(jn===null?jn=m:jn.push.apply(jn,m))}h=E}if(m=!1,h!==2)continue}}if(h===1){Zs(e,0),ar(e,i,0,!0);break}t:{switch(l=e,m=h,m){case 0:case 1:throw Error(a(345));case 4:if((i&4194048)!==i)break;case 6:ar(l,i,fi,!tr);break t;case 2:jn=null;break;case 3:case 5:break;default:throw Error(a(329))}if((i&62914560)===i&&(h=ec+300-xt(),10<h)){if(ar(l,i,fi,!tr),ue(l,0,!0)!==0)break t;Ma=i,l.timeoutHandle=uv(N0.bind(null,l,r,jn,ic,ed,i,fi,Yr,Ys,tr,m,"Throttled",-0,0),h);break t}N0(l,r,jn,ic,ed,i,fi,Yr,Ys,tr,m,null,-0,0)}}break}while(!0);Ji(e)}function N0(e,i,r,l,h,m,E,C,G,et,ft,gt,it,ut){if(e.timeoutHandle=-1,gt=i.subtreeFlags,gt&8192||(gt&16785408)===16785408){gt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:oa},b0(i,m,gt);var Bt=(m&62914560)===m?ec-xt():(m&4194048)===m?w0-xt():0;if(Bt=aT(gt,Bt),Bt!==null){Ma=m,e.cancelPendingCommit=Bt(G0.bind(null,e,i,m,r,l,h,E,C,G,ft,gt,null,it,ut)),ar(e,m,E,!et);return}}G0(e,i,m,r,l,h,E,C,G)}function SE(e){for(var i=e;;){var r=i.tag;if((r===0||r===11||r===15)&&i.flags&16384&&(r=i.updateQueue,r!==null&&(r=r.stores,r!==null)))for(var l=0;l<r.length;l++){var h=r[l],m=h.getSnapshot;h=h.value;try{if(!si(m(),h))return!1}catch{return!1}}if(r=i.child,i.subtreeFlags&16384&&r!==null)r.return=i,i=r;else{if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function ar(e,i,r,l){i&=~td,i&=~Yr,e.suspendedLanes|=i,e.pingedLanes&=~i,l&&(e.warmLanes|=i),l=e.expirationTimes;for(var h=i;0<h;){var m=31-Kt(h),E=1<<m;l[m]=-1,h&=~E}r!==0&&ji(e,r,i)}function ac(){return(Ae&6)===0?(Cl(0),!1):!0}function rd(){if(he!==null){if(we===0)var e=he.return;else e=he,fa=Br=null,yh(e),Fs=null,cl=0,e=he;for(;e!==null;)c0(e.alternate,e),e=e.return;he=null}}function Zs(e,i){var r=e.timeoutHandle;r!==-1&&(e.timeoutHandle=-1,HE(r)),r=e.cancelPendingCommit,r!==null&&(e.cancelPendingCommit=null,r()),Ma=0,rd(),ze=e,he=r=ua(e.current,null),me=i,we=0,ci=null,tr=!1,qs=Fe(e,i),$h=!1,Ys=fi=td=Yr=er=tn=0,jn=Al=null,ed=!1,(i&8)!==0&&(i|=i&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=i;0<l;){var h=31-Kt(l),m=1<<h;i|=e[h],l&=~m}return ya=i,bu(),r}function O0(e,i){re=null,I.H=vl,i===Bs||i===Nu?(i=K_(),we=3):i===uh?(i=K_(),we=4):we=i===Ih?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,ci=i,he===null&&(tn=1,Yu(e,Ei(i,e.current)))}function P0(){var e=li.current;return e===null?!0:(me&4194048)===me?Ri===null:(me&62914560)===me||(me&536870912)!==0?e===Ri:!1}function z0(){var e=I.H;return I.H=vl,e===null?vl:e}function I0(){var e=I.A;return I.A=vE,e}function rc(){tn=4,tr||(me&4194048)!==me&&li.current!==null||(qs=!0),(er&134217727)===0&&(Yr&134217727)===0||ze===null||ar(ze,me,fi,!1)}function sd(e,i,r){var l=Ae;Ae|=2;var h=z0(),m=I0();(ze!==e||me!==i)&&(ic=null,Zs(e,i)),i=!1;var E=tn;t:do try{if(we!==0&&he!==null){var C=he,G=ci;switch(we){case 8:rd(),E=6;break t;case 3:case 2:case 9:case 6:li.current===null&&(i=!0);var et=we;if(we=0,ci=null,Ks(e,C,G,et),r&&qs){E=0;break t}break;default:et=we,we=0,ci=null,Ks(e,C,G,et)}}yE(),E=tn;break}catch(ft){O0(e,ft)}while(!0);return i&&e.shellSuspendCounter++,fa=Br=null,Ae=l,I.H=h,I.A=m,he===null&&(ze=null,me=0,bu()),E}function yE(){for(;he!==null;)B0(he)}function ME(e,i){var r=Ae;Ae|=2;var l=z0(),h=I0();ze!==e||me!==i?(ic=null,nc=xt()+500,Zs(e,i)):qs=Fe(e,i);t:do try{if(we!==0&&he!==null){i=he;var m=ci;e:switch(we){case 1:we=0,ci=null,Ks(e,i,m,1);break;case 2:case 9:if(j_(m)){we=0,ci=null,F0(i);break}i=function(){we!==2&&we!==9||ze!==e||(we=7),Ji(e)},m.then(i,i);break t;case 3:we=7;break t;case 4:we=5;break t;case 7:j_(m)?(we=0,ci=null,F0(i)):(we=0,ci=null,Ks(e,i,m,7));break;case 5:var E=null;switch(he.tag){case 26:E=he.memoizedState;case 5:case 27:var C=he;if(E?Tv(E):C.stateNode.complete){we=0,ci=null;var G=C.sibling;if(G!==null)he=G;else{var et=C.return;et!==null?(he=et,sc(et)):he=null}break e}}we=0,ci=null,Ks(e,i,m,5);break;case 6:we=0,ci=null,Ks(e,i,m,6);break;case 8:rd(),tn=6;break t;default:throw Error(a(462))}}EE();break}catch(ft){O0(e,ft)}while(!0);return fa=Br=null,I.H=l,I.A=h,Ae=r,he!==null?0:(ze=null,me=0,bu(),tn)}function EE(){for(;he!==null&&!lt();)B0(he)}function B0(e){var i=l0(e.alternate,e,ya);e.memoizedProps=e.pendingProps,i===null?sc(e):he=i}function F0(e){var i=e,r=i.alternate;switch(i.tag){case 15:case 0:i=n0(r,i,i.pendingProps,i.type,void 0,me);break;case 11:i=n0(r,i,i.pendingProps,i.type.render,i.ref,me);break;case 5:yh(i);default:c0(r,i),i=he=I_(i,ya),i=l0(r,i,ya)}e.memoizedProps=e.pendingProps,i===null?sc(e):he=i}function Ks(e,i,r,l){fa=Br=null,yh(i),Fs=null,cl=0;var h=i.return;try{if(fE(e,h,i,r,me)){tn=1,Yu(e,Ei(r,e.current)),he=null;return}}catch(m){if(h!==null)throw he=h,m;tn=1,Yu(e,Ei(r,e.current)),he=null;return}i.flags&32768?(ve||l===1?e=!0:qs||(me&536870912)!==0?e=!1:(tr=e=!0,(l===2||l===9||l===3||l===6)&&(l=li.current,l!==null&&l.tag===13&&(l.flags|=16384))),H0(i,e)):sc(i)}function sc(e){var i=e;do{if((i.flags&32768)!==0){H0(i,tr);return}e=i.return;var r=pE(i.alternate,i,ya);if(r!==null){he=r;return}if(i=i.sibling,i!==null){he=i;return}he=i=e}while(i!==null);tn===0&&(tn=5)}function H0(e,i){do{var r=mE(e.alternate,e);if(r!==null){r.flags&=32767,he=r;return}if(r=e.return,r!==null&&(r.flags|=32768,r.subtreeFlags=0,r.deletions=null),!i&&(e=e.sibling,e!==null)){he=e;return}he=e=r}while(e!==null);tn=6,he=null}function G0(e,i,r,l,h,m,E,C,G){e.cancelPendingCommit=null;do oc();while(gn!==0);if((Ae&6)!==0)throw Error(a(327));if(i!==null){if(i===e.current)throw Error(a(177));if(m=i.lanes|i.childLanes,m|=jf,_u(e,r,m,E,C,G),e===ze&&(he=ze=null,me=0),js=i,ir=e,Ma=r,nd=m,id=h,D0=l,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,RE(Nt,function(){return q0(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||l){l=I.T,I.T=null,h=k.p,k.p=2,E=Ae,Ae|=4;try{_E(e,i,r)}finally{Ae=E,k.p=h,I.T=l}}gn=1,V0(),k0(),X0()}}function V0(){if(gn===1){gn=0;var e=ir,i=js,r=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||r){r=I.T,I.T=null;var l=k.p;k.p=2;var h=Ae;Ae|=4;try{M0(i,e);var m=vd,E=C_(e.containerInfo),C=m.focusedElem,G=m.selectionRange;if(E!==C&&C&&C.ownerDocument&&R_(C.ownerDocument.documentElement,C)){if(G!==null&&kf(C)){var et=G.start,ft=G.end;if(ft===void 0&&(ft=et),"selectionStart"in C)C.selectionStart=et,C.selectionEnd=Math.min(ft,C.value.length);else{var gt=C.ownerDocument||document,it=gt&&gt.defaultView||window;if(it.getSelection){var ut=it.getSelection(),Bt=C.textContent.length,Jt=Math.min(G.start,Bt),Ne=G.end===void 0?Jt:Math.min(G.end,Bt);!ut.extend&&Jt>Ne&&(E=Ne,Ne=Jt,Jt=E);var Q=A_(C,Jt),W=A_(C,Ne);if(Q&&W&&(ut.rangeCount!==1||ut.anchorNode!==Q.node||ut.anchorOffset!==Q.offset||ut.focusNode!==W.node||ut.focusOffset!==W.offset)){var tt=gt.createRange();tt.setStart(Q.node,Q.offset),ut.removeAllRanges(),Jt>Ne?(ut.addRange(tt),ut.extend(W.node,W.offset)):(tt.setEnd(W.node,W.offset),ut.addRange(tt))}}}}for(gt=[],ut=C;ut=ut.parentNode;)ut.nodeType===1&&gt.push({element:ut,left:ut.scrollLeft,top:ut.scrollTop});for(typeof C.focus=="function"&&C.focus(),C=0;C<gt.length;C++){var pt=gt[C];pt.element.scrollLeft=pt.left,pt.element.scrollTop=pt.top}}xc=!!gd,vd=gd=null}finally{Ae=h,k.p=l,I.T=r}}e.current=i,gn=2}}function k0(){if(gn===2){gn=0;var e=ir,i=js,r=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||r){r=I.T,I.T=null;var l=k.p;k.p=2;var h=Ae;Ae|=4;try{g0(e,i.alternate,i)}finally{Ae=h,k.p=l,I.T=r}}gn=3}}function X0(){if(gn===4||gn===3){gn=0,Et();var e=ir,i=js,r=Ma,l=D0;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?gn=5:(gn=0,js=ir=null,W0(e,e.pendingLanes));var h=e.pendingLanes;if(h===0&&(nr=null),Ha(r),i=i.stateNode,wt&&typeof wt.onCommitFiberRoot=="function")try{wt.onCommitFiberRoot(Qt,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=I.T,h=k.p,k.p=2,I.T=null;try{for(var m=e.onRecoverableError,E=0;E<l.length;E++){var C=l[E];m(C.value,{componentStack:C.stack})}}finally{I.T=i,k.p=h}}(Ma&3)!==0&&oc(),Ji(e),h=e.pendingLanes,(r&261930)!==0&&(h&42)!==0?e===ad?Rl++:(Rl=0,ad=e):Rl=0,Cl(0)}}function W0(e,i){(e.pooledCacheLanes&=i)===0&&(i=e.pooledCache,i!=null&&(e.pooledCache=null,ll(i)))}function oc(){return V0(),k0(),X0(),q0()}function q0(){if(gn!==5)return!1;var e=ir,i=nd;nd=0;var r=Ha(Ma),l=I.T,h=k.p;try{k.p=32>r?32:r,I.T=null,r=id,id=null;var m=ir,E=Ma;if(gn=0,js=ir=null,Ma=0,(Ae&6)!==0)throw Error(a(331));var C=Ae;if(Ae|=4,R0(m.current),T0(m,m.current,E,r),Ae=C,Cl(0,!1),wt&&typeof wt.onPostCommitFiberRoot=="function")try{wt.onPostCommitFiberRoot(Qt,m)}catch{}return!0}finally{k.p=h,I.T=l,W0(e,i)}}function Y0(e,i,r){i=Ei(r,i),i=zh(e.stateNode,i,2),e=Ka(e,i,2),e!==null&&(Dn(e,2),Ji(e))}function De(e,i,r){if(e.tag===3)Y0(e,e,r);else for(;i!==null;){if(i.tag===3){Y0(i,e,r);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(nr===null||!nr.has(l))){e=Ei(r,e),r=jg(2),l=Ka(i,r,2),l!==null&&(Zg(r,l,i,e),Dn(l,2),Ji(l));break}}i=i.return}}function od(e,i,r){var l=e.pingCache;if(l===null){l=e.pingCache=new xE;var h=new Set;l.set(i,h)}else h=l.get(i),h===void 0&&(h=new Set,l.set(i,h));h.has(r)||($h=!0,h.add(r),e=TE.bind(null,e,i,r),i.then(e,e))}function TE(e,i,r){var l=e.pingCache;l!==null&&l.delete(i),e.pingedLanes|=e.suspendedLanes&r,e.warmLanes&=~r,ze===e&&(me&r)===r&&(tn===4||tn===3&&(me&62914560)===me&&300>xt()-ec?(Ae&2)===0&&Zs(e,0):td|=r,Ys===me&&(Ys=0)),Ji(e)}function j0(e,i){i===0&&(i=ye()),e=Pr(e,i),e!==null&&(Dn(e,i),Ji(e))}function bE(e){var i=e.memoizedState,r=0;i!==null&&(r=i.retryLane),j0(e,r)}function AE(e,i){var r=0;switch(e.tag){case 31:case 13:var l=e.stateNode,h=e.memoizedState;h!==null&&(r=h.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(a(314))}l!==null&&l.delete(i),j0(e,r)}function RE(e,i){return H(e,i)}var lc=null,Qs=null,ld=!1,uc=!1,ud=!1,rr=0;function Ji(e){e!==Qs&&e.next===null&&(Qs===null?lc=Qs=e:Qs=Qs.next=e),uc=!0,ld||(ld=!0,wE())}function Cl(e,i){if(!ud&&uc){ud=!0;do for(var r=!1,l=lc;l!==null;){if(e!==0){var h=l.pendingLanes;if(h===0)var m=0;else{var E=l.suspendedLanes,C=l.pingedLanes;m=(1<<31-Kt(42|e)+1)-1,m&=h&~(E&~C),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(r=!0,J0(l,m))}else m=me,m=ue(l,l===ze?m:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(m&3)===0||Fe(l,m)||(r=!0,J0(l,m));l=l.next}while(r);ud=!1}}function CE(){Z0()}function Z0(){uc=ld=!1;var e=0;rr!==0&&FE()&&(e=rr);for(var i=xt(),r=null,l=lc;l!==null;){var h=l.next,m=K0(l,i);m===0?(l.next=null,r===null?lc=h:r.next=h,h===null&&(Qs=r)):(r=l,(e!==0||(m&3)!==0)&&(uc=!0)),l=h}gn!==0&&gn!==5||Cl(e),rr!==0&&(rr=0)}function K0(e,i){for(var r=e.suspendedLanes,l=e.pingedLanes,h=e.expirationTimes,m=e.pendingLanes&-62914561;0<m;){var E=31-Kt(m),C=1<<E,G=h[E];G===-1?((C&r)===0||(C&l)!==0)&&(h[E]=mn(C,i)):G<=i&&(e.expiredLanes|=C),m&=~C}if(i=ze,r=me,r=ue(e,e===i?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,r===0||e===i&&(we===2||we===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&D(l),e.callbackNode=null,e.callbackPriority=0;if((r&3)===0||Fe(e,r)){if(i=r&-r,i===e.callbackPriority)return i;switch(l!==null&&D(l),Ha(r)){case 2:case 8:r=Ut;break;case 32:r=Nt;break;case 268435456:r=At;break;default:r=Nt}return l=Q0.bind(null,e),r=H(r,l),e.callbackPriority=i,e.callbackNode=r,i}return l!==null&&l!==null&&D(l),e.callbackPriority=2,e.callbackNode=null,2}function Q0(e,i){if(gn!==0&&gn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var r=e.callbackNode;if(oc()&&e.callbackNode!==r)return null;var l=me;return l=ue(e,e===ze?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(L0(e,l,i),K0(e,xt()),e.callbackNode!=null&&e.callbackNode===r?Q0.bind(null,e):null)}function J0(e,i){if(oc())return null;L0(e,i,!0)}function wE(){GE(function(){(Ae&6)!==0?H(Yt,CE):Z0()})}function cd(){if(rr===0){var e=zs;e===0&&(e=_t,_t<<=1,(_t&261888)===0&&(_t=256)),rr=e}return rr}function $0(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:gu(""+e)}function tv(e,i){var r=i.ownerDocument.createElement("input");return r.name=i.name,r.value=i.value,e.id&&r.setAttribute("form",e.id),i.parentNode.insertBefore(r,i),e=new FormData(e),r.parentNode.removeChild(r),e}function DE(e,i,r,l,h){if(i==="submit"&&r&&r.stateNode===h){var m=$0((h[Un]||null).action),E=l.submitter;E&&(i=(i=E[Un]||null)?$0(i.formAction):E.getAttribute("formAction"),i!==null&&(m=i,E=null));var C=new yu("action","action",null,l,h);e.push({event:C,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(rr!==0){var G=E?tv(h,E):new FormData(h);Dh(r,{pending:!0,data:G,method:h.method,action:m},null,G)}}else typeof m=="function"&&(C.preventDefault(),G=E?tv(h,E):new FormData(h),Dh(r,{pending:!0,data:G,method:h.method,action:m},m,G))},currentTarget:h}]})}}for(var fd=0;fd<Yf.length;fd++){var hd=Yf[fd],UE=hd.toLowerCase(),LE=hd[0].toUpperCase()+hd.slice(1);Bi(UE,"on"+LE)}Bi(U_,"onAnimationEnd"),Bi(L_,"onAnimationIteration"),Bi(N_,"onAnimationStart"),Bi("dblclick","onDoubleClick"),Bi("focusin","onFocus"),Bi("focusout","onBlur"),Bi(jM,"onTransitionRun"),Bi(ZM,"onTransitionStart"),Bi(KM,"onTransitionCancel"),Bi(O_,"onTransitionEnd"),Ce("onMouseEnter",["mouseout","mouseover"]),Ce("onMouseLeave",["mouseout","mouseover"]),Ce("onPointerEnter",["pointerout","pointerover"]),Ce("onPointerLeave",["pointerout","pointerover"]),ce("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ce("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ce("onBeforeInput",["compositionend","keypress","textInput","paste"]),ce("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ce("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ce("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var wl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),NE=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(wl));function ev(e,i){i=(i&4)!==0;for(var r=0;r<e.length;r++){var l=e[r],h=l.event;l=l.listeners;t:{var m=void 0;if(i)for(var E=l.length-1;0<=E;E--){var C=l[E],G=C.instance,et=C.currentTarget;if(C=C.listener,G!==m&&h.isPropagationStopped())break t;m=C,h.currentTarget=et;try{m(h)}catch(ft){Tu(ft)}h.currentTarget=null,m=G}else for(E=0;E<l.length;E++){if(C=l[E],G=C.instance,et=C.currentTarget,C=C.listener,G!==m&&h.isPropagationStopped())break t;m=C,h.currentTarget=et;try{m(h)}catch(ft){Tu(ft)}h.currentTarget=null,m=G}}}}function de(e,i){var r=i[Yo];r===void 0&&(r=i[Yo]=new Set);var l=e+"__bubble";r.has(l)||(nv(i,e,2,!1),r.add(l))}function dd(e,i,r){var l=0;i&&(l|=4),nv(r,e,l,i)}var cc="_reactListening"+Math.random().toString(36).slice(2);function pd(e){if(!e[cc]){e[cc]=!0,$t.forEach(function(r){r!=="selectionchange"&&(NE.has(r)||dd(r,!1,e),dd(r,!0,e))});var i=e.nodeType===9?e:e.ownerDocument;i===null||i[cc]||(i[cc]=!0,dd("selectionchange",!1,i))}}function nv(e,i,r,l){switch(Uv(i)){case 2:var h=oT;break;case 8:h=lT;break;default:h=wd}r=h.bind(null,i,r,e),h=void 0,!Of||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(h=!0),l?h!==void 0?e.addEventListener(i,r,{capture:!0,passive:h}):e.addEventListener(i,r,!0):h!==void 0?e.addEventListener(i,r,{passive:h}):e.addEventListener(i,r,!1)}function md(e,i,r,l,h){var m=l;if((i&1)===0&&(i&2)===0&&l!==null)t:for(;;){if(l===null)return;var E=l.tag;if(E===3||E===4){var C=l.stateNode.containerInfo;if(C===h)break;if(E===4)for(E=l.return;E!==null;){var G=E.tag;if((G===3||G===4)&&E.stateNode.containerInfo===h)return;E=E.return}for(;C!==null;){if(E=bt(C),E===null)return;if(G=E.tag,G===5||G===6||G===26||G===27){l=m=E;continue t}C=C.parentNode}}l=l.return}o_(function(){var et=m,ft=Lf(r),gt=[];t:{var it=P_.get(e);if(it!==void 0){var ut=yu,Bt=e;switch(e){case"keypress":if(xu(r)===0)break t;case"keydown":case"keyup":ut=AM;break;case"focusin":Bt="focus",ut=Bf;break;case"focusout":Bt="blur",ut=Bf;break;case"beforeblur":case"afterblur":ut=Bf;break;case"click":if(r.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ut=c_;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ut=pM;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ut=wM;break;case U_:case L_:case N_:ut=gM;break;case O_:ut=UM;break;case"scroll":case"scrollend":ut=hM;break;case"wheel":ut=NM;break;case"copy":case"cut":case"paste":ut=xM;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ut=h_;break;case"toggle":case"beforetoggle":ut=PM}var Jt=(i&4)!==0,Ne=!Jt&&(e==="scroll"||e==="scrollend"),Q=Jt?it!==null?it+"Capture":null:it;Jt=[];for(var W=et,tt;W!==null;){var pt=W;if(tt=pt.stateNode,pt=pt.tag,pt!==5&&pt!==26&&pt!==27||tt===null||Q===null||(pt=Qo(W,Q),pt!=null&&Jt.push(Dl(W,pt,tt))),Ne)break;W=W.return}0<Jt.length&&(it=new ut(it,Bt,null,r,ft),gt.push({event:it,listeners:Jt}))}}if((i&7)===0){t:{if(it=e==="mouseover"||e==="pointerover",ut=e==="mouseout"||e==="pointerout",it&&r!==Uf&&(Bt=r.relatedTarget||r.fromElement)&&(bt(Bt)||Bt[Ga]))break t;if((ut||it)&&(it=ft.window===ft?ft:(it=ft.ownerDocument)?it.defaultView||it.parentWindow:window,ut?(Bt=r.relatedTarget||r.toElement,ut=et,Bt=Bt?bt(Bt):null,Bt!==null&&(Ne=u(Bt),Jt=Bt.tag,Bt!==Ne||Jt!==5&&Jt!==27&&Jt!==6)&&(Bt=null)):(ut=null,Bt=et),ut!==Bt)){if(Jt=c_,pt="onMouseLeave",Q="onMouseEnter",W="mouse",(e==="pointerout"||e==="pointerover")&&(Jt=h_,pt="onPointerLeave",Q="onPointerEnter",W="pointer"),Ne=ut==null?it:Pt(ut),tt=Bt==null?it:Pt(Bt),it=new Jt(pt,W+"leave",ut,r,ft),it.target=Ne,it.relatedTarget=tt,pt=null,bt(ft)===et&&(Jt=new Jt(Q,W+"enter",Bt,r,ft),Jt.target=tt,Jt.relatedTarget=Ne,pt=Jt),Ne=pt,ut&&Bt)e:{for(Jt=OE,Q=ut,W=Bt,tt=0,pt=Q;pt;pt=Jt(pt))tt++;pt=0;for(var qt=W;qt;qt=Jt(qt))pt++;for(;0<tt-pt;)Q=Jt(Q),tt--;for(;0<pt-tt;)W=Jt(W),pt--;for(;tt--;){if(Q===W||W!==null&&Q===W.alternate){Jt=Q;break e}Q=Jt(Q),W=Jt(W)}Jt=null}else Jt=null;ut!==null&&iv(gt,it,ut,Jt,!1),Bt!==null&&Ne!==null&&iv(gt,Ne,Bt,Jt,!0)}}t:{if(it=et?Pt(et):window,ut=it.nodeName&&it.nodeName.toLowerCase(),ut==="select"||ut==="input"&&it.type==="file")var Te=S_;else if(v_(it))if(y_)Te=WM;else{Te=kM;var Ft=VM}else ut=it.nodeName,!ut||ut.toLowerCase()!=="input"||it.type!=="checkbox"&&it.type!=="radio"?et&&Df(et.elementType)&&(Te=S_):Te=XM;if(Te&&(Te=Te(e,et))){x_(gt,Te,r,ft);break t}Ft&&Ft(e,it,et),e==="focusout"&&et&&it.type==="number"&&et.memoizedProps.value!=null&&wf(it,"number",it.value)}switch(Ft=et?Pt(et):window,e){case"focusin":(v_(Ft)||Ft.contentEditable==="true")&&(Cs=Ft,Xf=et,rl=null);break;case"focusout":rl=Xf=Cs=null;break;case"mousedown":Wf=!0;break;case"contextmenu":case"mouseup":case"dragend":Wf=!1,w_(gt,r,ft);break;case"selectionchange":if(YM)break;case"keydown":case"keyup":w_(gt,r,ft)}var se;if(Hf)t:{switch(e){case"compositionstart":var _e="onCompositionStart";break t;case"compositionend":_e="onCompositionEnd";break t;case"compositionupdate":_e="onCompositionUpdate";break t}_e=void 0}else Rs?__(e,r)&&(_e="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(_e="onCompositionStart");_e&&(d_&&r.locale!=="ko"&&(Rs||_e!=="onCompositionStart"?_e==="onCompositionEnd"&&Rs&&(se=l_()):(ka=ft,Pf="value"in ka?ka.value:ka.textContent,Rs=!0)),Ft=fc(et,_e),0<Ft.length&&(_e=new f_(_e,e,null,r,ft),gt.push({event:_e,listeners:Ft}),se?_e.data=se:(se=g_(r),se!==null&&(_e.data=se)))),(se=IM?BM(e,r):FM(e,r))&&(_e=fc(et,"onBeforeInput"),0<_e.length&&(Ft=new f_("onBeforeInput","beforeinput",null,r,ft),gt.push({event:Ft,listeners:_e}),Ft.data=se)),DE(gt,e,et,r,ft)}ev(gt,i)})}function Dl(e,i,r){return{instance:e,listener:i,currentTarget:r}}function fc(e,i){for(var r=i+"Capture",l=[];e!==null;){var h=e,m=h.stateNode;if(h=h.tag,h!==5&&h!==26&&h!==27||m===null||(h=Qo(e,r),h!=null&&l.unshift(Dl(e,h,m)),h=Qo(e,i),h!=null&&l.push(Dl(e,h,m))),e.tag===3)return l;e=e.return}return[]}function OE(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function iv(e,i,r,l,h){for(var m=i._reactName,E=[];r!==null&&r!==l;){var C=r,G=C.alternate,et=C.stateNode;if(C=C.tag,G!==null&&G===l)break;C!==5&&C!==26&&C!==27||et===null||(G=et,h?(et=Qo(r,m),et!=null&&E.unshift(Dl(r,et,G))):h||(et=Qo(r,m),et!=null&&E.push(Dl(r,et,G)))),r=r.return}E.length!==0&&e.push({event:i,listeners:E})}var PE=/\r\n?/g,zE=/\u0000|\uFFFD/g;function av(e){return(typeof e=="string"?e:""+e).replace(PE,`
`).replace(zE,"")}function rv(e,i){return i=av(i),av(e)===i}function Le(e,i,r,l,h,m){switch(r){case"children":typeof l=="string"?i==="body"||i==="textarea"&&l===""||Ts(e,l):(typeof l=="number"||typeof l=="bigint")&&i!=="body"&&Ts(e,""+l);break;case"className":ge(e,"class",l);break;case"tabIndex":ge(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":ge(e,r,l);break;case"style":r_(e,l,m);break;case"data":if(i!=="object"){ge(e,"data",l);break}case"src":case"href":if(l===""&&(i!=="a"||r!=="href")){e.removeAttribute(r);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(r);break}l=gu(""+l),e.setAttribute(r,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(r,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(r==="formAction"?(i!=="input"&&Le(e,i,"name",h.name,h,null),Le(e,i,"formEncType",h.formEncType,h,null),Le(e,i,"formMethod",h.formMethod,h,null),Le(e,i,"formTarget",h.formTarget,h,null)):(Le(e,i,"encType",h.encType,h,null),Le(e,i,"method",h.method,h,null),Le(e,i,"target",h.target,h,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(r);break}l=gu(""+l),e.setAttribute(r,l);break;case"onClick":l!=null&&(e.onclick=oa);break;case"onScroll":l!=null&&de("scroll",e);break;case"onScrollEnd":l!=null&&de("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(r=l.__html,r!=null){if(h.children!=null)throw Error(a(60));e.innerHTML=r}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}r=gu(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",r);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(r,""+l):e.removeAttribute(r);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(r,""):e.removeAttribute(r);break;case"capture":case"download":l===!0?e.setAttribute(r,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(r,l):e.removeAttribute(r);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(r,l):e.removeAttribute(r);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(r):e.setAttribute(r,l);break;case"popover":de("beforetoggle",e),de("toggle",e),Je(e,"popover",l);break;case"xlinkActuate":nn(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":nn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":nn(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":nn(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":nn(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":nn(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":nn(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":nn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":nn(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Je(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(r=cM.get(r)||r,Je(e,r,l))}}function _d(e,i,r,l,h,m){switch(r){case"style":r_(e,l,m);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(r=l.__html,r!=null){if(h.children!=null)throw Error(a(60));e.innerHTML=r}}break;case"children":typeof l=="string"?Ts(e,l):(typeof l=="number"||typeof l=="bigint")&&Ts(e,""+l);break;case"onScroll":l!=null&&de("scroll",e);break;case"onScrollEnd":l!=null&&de("scrollend",e);break;case"onClick":l!=null&&(e.onclick=oa);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!jt.hasOwnProperty(r))t:{if(r[0]==="o"&&r[1]==="n"&&(h=r.endsWith("Capture"),i=r.slice(2,h?r.length-7:void 0),m=e[Un]||null,m=m!=null?m[r]:null,typeof m=="function"&&e.removeEventListener(i,m,h),typeof l=="function")){typeof m!="function"&&m!==null&&(r in e?e[r]=null:e.hasAttribute(r)&&e.removeAttribute(r)),e.addEventListener(i,l,h);break t}r in e?e[r]=l:l===!0?e.setAttribute(r,""):Je(e,r,l)}}}function Cn(e,i,r){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":de("error",e),de("load",e);var l=!1,h=!1,m;for(m in r)if(r.hasOwnProperty(m)){var E=r[m];if(E!=null)switch(m){case"src":l=!0;break;case"srcSet":h=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:Le(e,i,m,E,r,null)}}h&&Le(e,i,"srcSet",r.srcSet,r,null),l&&Le(e,i,"src",r.src,r,null);return;case"input":de("invalid",e);var C=m=E=h=null,G=null,et=null;for(l in r)if(r.hasOwnProperty(l)){var ft=r[l];if(ft!=null)switch(l){case"name":h=ft;break;case"type":E=ft;break;case"checked":G=ft;break;case"defaultChecked":et=ft;break;case"value":m=ft;break;case"defaultValue":C=ft;break;case"children":case"dangerouslySetInnerHTML":if(ft!=null)throw Error(a(137,i));break;default:Le(e,i,l,ft,r,null)}}Ko(e,m,C,G,et,E,h,!1);return;case"select":de("invalid",e),l=E=m=null;for(h in r)if(r.hasOwnProperty(h)&&(C=r[h],C!=null))switch(h){case"value":m=C;break;case"defaultValue":E=C;break;case"multiple":l=C;default:Le(e,i,h,C,r,null)}i=m,r=E,e.multiple=!!l,i!=null?Es(e,!!l,i,!1):r!=null&&Es(e,!!l,r,!0);return;case"textarea":de("invalid",e),m=h=l=null;for(E in r)if(r.hasOwnProperty(E)&&(C=r[E],C!=null))switch(E){case"value":l=C;break;case"defaultValue":h=C;break;case"children":m=C;break;case"dangerouslySetInnerHTML":if(C!=null)throw Error(a(91));break;default:Le(e,i,E,C,r,null)}i_(e,l,h,m);return;case"option":for(G in r)if(r.hasOwnProperty(G)&&(l=r[G],l!=null))switch(G){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Le(e,i,G,l,r,null)}return;case"dialog":de("beforetoggle",e),de("toggle",e),de("cancel",e),de("close",e);break;case"iframe":case"object":de("load",e);break;case"video":case"audio":for(l=0;l<wl.length;l++)de(wl[l],e);break;case"image":de("error",e),de("load",e);break;case"details":de("toggle",e);break;case"embed":case"source":case"link":de("error",e),de("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(et in r)if(r.hasOwnProperty(et)&&(l=r[et],l!=null))switch(et){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:Le(e,i,et,l,r,null)}return;default:if(Df(i)){for(ft in r)r.hasOwnProperty(ft)&&(l=r[ft],l!==void 0&&_d(e,i,ft,l,r,void 0));return}}for(C in r)r.hasOwnProperty(C)&&(l=r[C],l!=null&&Le(e,i,C,l,r,null))}function IE(e,i,r,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var h=null,m=null,E=null,C=null,G=null,et=null,ft=null;for(ut in r){var gt=r[ut];if(r.hasOwnProperty(ut)&&gt!=null)switch(ut){case"checked":break;case"value":break;case"defaultValue":G=gt;default:l.hasOwnProperty(ut)||Le(e,i,ut,null,l,gt)}}for(var it in l){var ut=l[it];if(gt=r[it],l.hasOwnProperty(it)&&(ut!=null||gt!=null))switch(it){case"type":m=ut;break;case"name":h=ut;break;case"checked":et=ut;break;case"defaultChecked":ft=ut;break;case"value":E=ut;break;case"defaultValue":C=ut;break;case"children":case"dangerouslySetInnerHTML":if(ut!=null)throw Error(a(137,i));break;default:ut!==gt&&Le(e,i,it,ut,l,gt)}}Zo(e,E,C,G,et,ft,m,h);return;case"select":ut=E=C=it=null;for(m in r)if(G=r[m],r.hasOwnProperty(m)&&G!=null)switch(m){case"value":break;case"multiple":ut=G;default:l.hasOwnProperty(m)||Le(e,i,m,null,l,G)}for(h in l)if(m=l[h],G=r[h],l.hasOwnProperty(h)&&(m!=null||G!=null))switch(h){case"value":it=m;break;case"defaultValue":C=m;break;case"multiple":E=m;default:m!==G&&Le(e,i,h,m,l,G)}i=C,r=E,l=ut,it!=null?Es(e,!!r,it,!1):!!l!=!!r&&(i!=null?Es(e,!!r,i,!0):Es(e,!!r,r?[]:"",!1));return;case"textarea":ut=it=null;for(C in r)if(h=r[C],r.hasOwnProperty(C)&&h!=null&&!l.hasOwnProperty(C))switch(C){case"value":break;case"children":break;default:Le(e,i,C,null,l,h)}for(E in l)if(h=l[E],m=r[E],l.hasOwnProperty(E)&&(h!=null||m!=null))switch(E){case"value":it=h;break;case"defaultValue":ut=h;break;case"children":break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(a(91));break;default:h!==m&&Le(e,i,E,h,l,m)}n_(e,it,ut);return;case"option":for(var Bt in r)if(it=r[Bt],r.hasOwnProperty(Bt)&&it!=null&&!l.hasOwnProperty(Bt))switch(Bt){case"selected":e.selected=!1;break;default:Le(e,i,Bt,null,l,it)}for(G in l)if(it=l[G],ut=r[G],l.hasOwnProperty(G)&&it!==ut&&(it!=null||ut!=null))switch(G){case"selected":e.selected=it&&typeof it!="function"&&typeof it!="symbol";break;default:Le(e,i,G,it,l,ut)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Jt in r)it=r[Jt],r.hasOwnProperty(Jt)&&it!=null&&!l.hasOwnProperty(Jt)&&Le(e,i,Jt,null,l,it);for(et in l)if(it=l[et],ut=r[et],l.hasOwnProperty(et)&&it!==ut&&(it!=null||ut!=null))switch(et){case"children":case"dangerouslySetInnerHTML":if(it!=null)throw Error(a(137,i));break;default:Le(e,i,et,it,l,ut)}return;default:if(Df(i)){for(var Ne in r)it=r[Ne],r.hasOwnProperty(Ne)&&it!==void 0&&!l.hasOwnProperty(Ne)&&_d(e,i,Ne,void 0,l,it);for(ft in l)it=l[ft],ut=r[ft],!l.hasOwnProperty(ft)||it===ut||it===void 0&&ut===void 0||_d(e,i,ft,it,l,ut);return}}for(var Q in r)it=r[Q],r.hasOwnProperty(Q)&&it!=null&&!l.hasOwnProperty(Q)&&Le(e,i,Q,null,l,it);for(gt in l)it=l[gt],ut=r[gt],!l.hasOwnProperty(gt)||it===ut||it==null&&ut==null||Le(e,i,gt,it,l,ut)}function sv(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function BE(){if(typeof performance.getEntriesByType=="function"){for(var e=0,i=0,r=performance.getEntriesByType("resource"),l=0;l<r.length;l++){var h=r[l],m=h.transferSize,E=h.initiatorType,C=h.duration;if(m&&C&&sv(E)){for(E=0,C=h.responseEnd,l+=1;l<r.length;l++){var G=r[l],et=G.startTime;if(et>C)break;var ft=G.transferSize,gt=G.initiatorType;ft&&sv(gt)&&(G=G.responseEnd,E+=ft*(G<C?1:(C-et)/(G-et)))}if(--l,i+=8*(m+E)/(h.duration/1e3),e++,10<e)break}}if(0<e)return i/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var gd=null,vd=null;function hc(e){return e.nodeType===9?e:e.ownerDocument}function ov(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function lv(e,i){if(e===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&i==="foreignObject"?0:e}function xd(e,i){return e==="textarea"||e==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Sd=null;function FE(){var e=window.event;return e&&e.type==="popstate"?e===Sd?!1:(Sd=e,!0):(Sd=null,!1)}var uv=typeof setTimeout=="function"?setTimeout:void 0,HE=typeof clearTimeout=="function"?clearTimeout:void 0,cv=typeof Promise=="function"?Promise:void 0,GE=typeof queueMicrotask=="function"?queueMicrotask:typeof cv<"u"?function(e){return cv.resolve(null).then(e).catch(VE)}:uv;function VE(e){setTimeout(function(){throw e})}function sr(e){return e==="head"}function fv(e,i){var r=i,l=0;do{var h=r.nextSibling;if(e.removeChild(r),h&&h.nodeType===8)if(r=h.data,r==="/$"||r==="/&"){if(l===0){e.removeChild(h),eo(i);return}l--}else if(r==="$"||r==="$?"||r==="$~"||r==="$!"||r==="&")l++;else if(r==="html")Ul(e.ownerDocument.documentElement);else if(r==="head"){r=e.ownerDocument.head,Ul(r);for(var m=r.firstChild;m;){var E=m.nextSibling,C=m.nodeName;m[st]||C==="SCRIPT"||C==="STYLE"||C==="LINK"&&m.rel.toLowerCase()==="stylesheet"||r.removeChild(m),m=E}}else r==="body"&&Ul(e.ownerDocument.body);r=h}while(r);eo(i)}function hv(e,i){var r=e;e=0;do{var l=r.nextSibling;if(r.nodeType===1?i?(r._stashedDisplay=r.style.display,r.style.display="none"):(r.style.display=r._stashedDisplay||"",r.getAttribute("style")===""&&r.removeAttribute("style")):r.nodeType===3&&(i?(r._stashedText=r.nodeValue,r.nodeValue=""):r.nodeValue=r._stashedText||""),l&&l.nodeType===8)if(r=l.data,r==="/$"){if(e===0)break;e--}else r!=="$"&&r!=="$?"&&r!=="$~"&&r!=="$!"||e++;r=l}while(r)}function yd(e){var i=e.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var r=i;switch(i=i.nextSibling,r.nodeName){case"HTML":case"HEAD":case"BODY":yd(r),J(r);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(r.rel.toLowerCase()==="stylesheet")continue}e.removeChild(r)}}function kE(e,i,r,l){for(;e.nodeType===1;){var h=r;if(e.nodeName.toLowerCase()!==i.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[st])switch(i){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(m=e.getAttribute("rel"),m==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(m!==h.rel||e.getAttribute("href")!==(h.href==null||h.href===""?null:h.href)||e.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin)||e.getAttribute("title")!==(h.title==null?null:h.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(m=e.getAttribute("src"),(m!==(h.src==null?null:h.src)||e.getAttribute("type")!==(h.type==null?null:h.type)||e.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin))&&m&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(i==="input"&&e.type==="hidden"){var m=h.name==null?null:""+h.name;if(h.type==="hidden"&&e.getAttribute("name")===m)return e}else return e;if(e=Ci(e.nextSibling),e===null)break}return null}function XE(e,i,r){if(i==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!r||(e=Ci(e.nextSibling),e===null))return null;return e}function dv(e,i){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!i||(e=Ci(e.nextSibling),e===null))return null;return e}function Md(e){return e.data==="$?"||e.data==="$~"}function Ed(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function WE(e,i){var r=e.ownerDocument;if(e.data==="$~")e._reactRetry=i;else if(e.data!=="$?"||r.readyState!=="loading")i();else{var l=function(){i(),r.removeEventListener("DOMContentLoaded",l)};r.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function Ci(e){for(;e!=null;e=e.nextSibling){var i=e.nodeType;if(i===1||i===3)break;if(i===8){if(i=e.data,i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"||i==="F!"||i==="F")break;if(i==="/$"||i==="/&")return null}}return e}var Td=null;function pv(e){e=e.nextSibling;for(var i=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"||r==="/&"){if(i===0)return Ci(e.nextSibling);i--}else r!=="$"&&r!=="$!"&&r!=="$?"&&r!=="$~"&&r!=="&"||i++}e=e.nextSibling}return null}function mv(e){e=e.previousSibling;for(var i=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"||r==="$~"||r==="&"){if(i===0)return e;i--}else r!=="/$"&&r!=="/&"||i++}e=e.previousSibling}return null}function _v(e,i,r){switch(i=hc(r),e){case"html":if(e=i.documentElement,!e)throw Error(a(452));return e;case"head":if(e=i.head,!e)throw Error(a(453));return e;case"body":if(e=i.body,!e)throw Error(a(454));return e;default:throw Error(a(451))}}function Ul(e){for(var i=e.attributes;i.length;)e.removeAttributeNode(i[0]);J(e)}var wi=new Map,gv=new Set;function dc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Ea=k.d;k.d={f:qE,r:YE,D:jE,C:ZE,L:KE,m:QE,X:$E,S:JE,M:tT};function qE(){var e=Ea.f(),i=ac();return e||i}function YE(e){var i=Dt(e);i!==null&&i.tag===5&&i.type==="form"?Og(i):Ea.r(e)}var Js=typeof document>"u"?null:document;function vv(e,i,r){var l=Js;if(l&&typeof i=="string"&&i){var h=On(i);h='link[rel="'+e+'"][href="'+h+'"]',typeof r=="string"&&(h+='[crossorigin="'+r+'"]'),gv.has(h)||(gv.add(h),e={rel:e,crossOrigin:r,href:i},l.querySelector(h)===null&&(i=l.createElement("link"),Cn(i,"link",e),It(i),l.head.appendChild(i)))}}function jE(e){Ea.D(e),vv("dns-prefetch",e,null)}function ZE(e,i){Ea.C(e,i),vv("preconnect",e,i)}function KE(e,i,r){Ea.L(e,i,r);var l=Js;if(l&&e&&i){var h='link[rel="preload"][as="'+On(i)+'"]';i==="image"&&r&&r.imageSrcSet?(h+='[imagesrcset="'+On(r.imageSrcSet)+'"]',typeof r.imageSizes=="string"&&(h+='[imagesizes="'+On(r.imageSizes)+'"]')):h+='[href="'+On(e)+'"]';var m=h;switch(i){case"style":m=$s(e);break;case"script":m=to(e)}wi.has(m)||(e=g({rel:"preload",href:i==="image"&&r&&r.imageSrcSet?void 0:e,as:i},r),wi.set(m,e),l.querySelector(h)!==null||i==="style"&&l.querySelector(Ll(m))||i==="script"&&l.querySelector(Nl(m))||(i=l.createElement("link"),Cn(i,"link",e),It(i),l.head.appendChild(i)))}}function QE(e,i){Ea.m(e,i);var r=Js;if(r&&e){var l=i&&typeof i.as=="string"?i.as:"script",h='link[rel="modulepreload"][as="'+On(l)+'"][href="'+On(e)+'"]',m=h;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=to(e)}if(!wi.has(m)&&(e=g({rel:"modulepreload",href:e},i),wi.set(m,e),r.querySelector(h)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(r.querySelector(Nl(m)))return}l=r.createElement("link"),Cn(l,"link",e),It(l),r.head.appendChild(l)}}}function JE(e,i,r){Ea.S(e,i,r);var l=Js;if(l&&e){var h=zt(l).hoistableStyles,m=$s(e);i=i||"default";var E=h.get(m);if(!E){var C={loading:0,preload:null};if(E=l.querySelector(Ll(m)))C.loading=5;else{e=g({rel:"stylesheet",href:e,"data-precedence":i},r),(r=wi.get(m))&&bd(e,r);var G=E=l.createElement("link");It(G),Cn(G,"link",e),G._p=new Promise(function(et,ft){G.onload=et,G.onerror=ft}),G.addEventListener("load",function(){C.loading|=1}),G.addEventListener("error",function(){C.loading|=2}),C.loading|=4,pc(E,i,l)}E={type:"stylesheet",instance:E,count:1,state:C},h.set(m,E)}}}function $E(e,i){Ea.X(e,i);var r=Js;if(r&&e){var l=zt(r).hoistableScripts,h=to(e),m=l.get(h);m||(m=r.querySelector(Nl(h)),m||(e=g({src:e,async:!0},i),(i=wi.get(h))&&Ad(e,i),m=r.createElement("script"),It(m),Cn(m,"link",e),r.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},l.set(h,m))}}function tT(e,i){Ea.M(e,i);var r=Js;if(r&&e){var l=zt(r).hoistableScripts,h=to(e),m=l.get(h);m||(m=r.querySelector(Nl(h)),m||(e=g({src:e,async:!0,type:"module"},i),(i=wi.get(h))&&Ad(e,i),m=r.createElement("script"),It(m),Cn(m,"link",e),r.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},l.set(h,m))}}function xv(e,i,r,l){var h=(h=St.current)?dc(h):null;if(!h)throw Error(a(446));switch(e){case"meta":case"title":return null;case"style":return typeof r.precedence=="string"&&typeof r.href=="string"?(i=$s(r.href),r=zt(h).hoistableStyles,l=r.get(i),l||(l={type:"style",instance:null,count:0,state:null},r.set(i,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(r.rel==="stylesheet"&&typeof r.href=="string"&&typeof r.precedence=="string"){e=$s(r.href);var m=zt(h).hoistableStyles,E=m.get(e);if(E||(h=h.ownerDocument||h,E={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(e,E),(m=h.querySelector(Ll(e)))&&!m._p&&(E.instance=m,E.state.loading=5),wi.has(e)||(r={rel:"preload",as:"style",href:r.href,crossOrigin:r.crossOrigin,integrity:r.integrity,media:r.media,hrefLang:r.hrefLang,referrerPolicy:r.referrerPolicy},wi.set(e,r),m||eT(h,e,r,E.state))),i&&l===null)throw Error(a(528,""));return E}if(i&&l!==null)throw Error(a(529,""));return null;case"script":return i=r.async,r=r.src,typeof r=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=to(r),r=zt(h).hoistableScripts,l=r.get(i),l||(l={type:"script",instance:null,count:0,state:null},r.set(i,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,e))}}function $s(e){return'href="'+On(e)+'"'}function Ll(e){return'link[rel="stylesheet"]['+e+"]"}function Sv(e){return g({},e,{"data-precedence":e.precedence,precedence:null})}function eT(e,i,r,l){e.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=e.createElement("link"),l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2}),Cn(i,"link",r),It(i),e.head.appendChild(i))}function to(e){return'[src="'+On(e)+'"]'}function Nl(e){return"script[async]"+e}function yv(e,i,r){if(i.count++,i.instance===null)switch(i.type){case"style":var l=e.querySelector('style[data-href~="'+On(r.href)+'"]');if(l)return i.instance=l,It(l),l;var h=g({},r,{"data-href":r.href,"data-precedence":r.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),It(l),Cn(l,"style",h),pc(l,r.precedence,e),i.instance=l;case"stylesheet":h=$s(r.href);var m=e.querySelector(Ll(h));if(m)return i.state.loading|=4,i.instance=m,It(m),m;l=Sv(r),(h=wi.get(h))&&bd(l,h),m=(e.ownerDocument||e).createElement("link"),It(m);var E=m;return E._p=new Promise(function(C,G){E.onload=C,E.onerror=G}),Cn(m,"link",l),i.state.loading|=4,pc(m,r.precedence,e),i.instance=m;case"script":return m=to(r.src),(h=e.querySelector(Nl(m)))?(i.instance=h,It(h),h):(l=r,(h=wi.get(m))&&(l=g({},r),Ad(l,h)),e=e.ownerDocument||e,h=e.createElement("script"),It(h),Cn(h,"link",l),e.head.appendChild(h),i.instance=h);case"void":return null;default:throw Error(a(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(l=i.instance,i.state.loading|=4,pc(l,r.precedence,e));return i.instance}function pc(e,i,r){for(var l=r.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),h=l.length?l[l.length-1]:null,m=h,E=0;E<l.length;E++){var C=l[E];if(C.dataset.precedence===i)m=C;else if(m!==h)break}m?m.parentNode.insertBefore(e,m.nextSibling):(i=r.nodeType===9?r.head:r,i.insertBefore(e,i.firstChild))}function bd(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.title==null&&(e.title=i.title)}function Ad(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.integrity==null&&(e.integrity=i.integrity)}var mc=null;function Mv(e,i,r){if(mc===null){var l=new Map,h=mc=new Map;h.set(r,l)}else h=mc,l=h.get(r),l||(l=new Map,h.set(r,l));if(l.has(e))return l;for(l.set(e,null),r=r.getElementsByTagName(e),h=0;h<r.length;h++){var m=r[h];if(!(m[st]||m[on]||e==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var E=m.getAttribute(i)||"";E=e+E;var C=l.get(E);C?C.push(m):l.set(E,[m])}}return l}function Ev(e,i,r){e=e.ownerDocument||e,e.head.insertBefore(r,i==="title"?e.querySelector("head > title"):null)}function nT(e,i,r){if(r===1||i.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return e=i.disabled,typeof i.precedence=="string"&&e==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function Tv(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function iT(e,i,r,l){if(r.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(r.state.loading&4)===0){if(r.instance===null){var h=$s(l.href),m=i.querySelector(Ll(h));if(m){i=m._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(e.count++,e=_c.bind(e),i.then(e,e)),r.state.loading|=4,r.instance=m,It(m);return}m=i.ownerDocument||i,l=Sv(l),(h=wi.get(h))&&bd(l,h),m=m.createElement("link"),It(m);var E=m;E._p=new Promise(function(C,G){E.onload=C,E.onerror=G}),Cn(m,"link",l),r.instance=m}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(r,i),(i=r.state.preload)&&(r.state.loading&3)===0&&(e.count++,r=_c.bind(e),i.addEventListener("load",r),i.addEventListener("error",r))}}var Rd=0;function aT(e,i){return e.stylesheets&&e.count===0&&vc(e,e.stylesheets),0<e.count||0<e.imgCount?function(r){var l=setTimeout(function(){if(e.stylesheets&&vc(e,e.stylesheets),e.unsuspend){var m=e.unsuspend;e.unsuspend=null,m()}},6e4+i);0<e.imgBytes&&Rd===0&&(Rd=62500*BE());var h=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&vc(e,e.stylesheets),e.unsuspend)){var m=e.unsuspend;e.unsuspend=null,m()}},(e.imgBytes>Rd?50:800)+i);return e.unsuspend=r,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(h)}}:null}function _c(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)vc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var gc=null;function vc(e,i){e.stylesheets=null,e.unsuspend!==null&&(e.count++,gc=new Map,i.forEach(rT,e),gc=null,_c.call(e))}function rT(e,i){if(!(i.state.loading&4)){var r=gc.get(e);if(r)var l=r.get(null);else{r=new Map,gc.set(e,r);for(var h=e.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<h.length;m++){var E=h[m];(E.nodeName==="LINK"||E.getAttribute("media")!=="not all")&&(r.set(E.dataset.precedence,E),l=E)}l&&r.set(null,l)}h=i.instance,E=h.getAttribute("data-precedence"),m=r.get(E)||l,m===l&&r.set(null,h),r.set(E,h),this.count++,l=_c.bind(this),h.addEventListener("load",l),h.addEventListener("error",l),m?m.parentNode.insertBefore(h,m.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(h,e.firstChild)),i.state.loading|=4}}var Ol={$$typeof:A,Provider:null,Consumer:null,_currentValue:q,_currentValue2:q,_threadCount:0};function sT(e,i,r,l,h,m,E,C,G){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ri(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ri(0),this.hiddenUpdates=ri(null),this.identifierPrefix=l,this.onUncaughtError=h,this.onCaughtError=m,this.onRecoverableError=E,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=G,this.incompleteTransitions=new Map}function bv(e,i,r,l,h,m,E,C,G,et,ft,gt){return e=new sT(e,i,r,E,G,et,ft,gt,C),i=1,m===!0&&(i|=24),m=oi(3,null,null,i),e.current=m,m.stateNode=e,i=sh(),i.refCount++,e.pooledCache=i,i.refCount++,m.memoizedState={element:l,isDehydrated:r,cache:i},ch(m),e}function Av(e){return e?(e=Us,e):Us}function Rv(e,i,r,l,h,m){h=Av(h),l.context===null?l.context=h:l.pendingContext=h,l=Za(i),l.payload={element:r},m=m===void 0?null:m,m!==null&&(l.callback=m),r=Ka(e,l,i),r!==null&&(Zn(r,e,i),hl(r,e,i))}function Cv(e,i){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<i?r:i}}function Cd(e,i){Cv(e,i),(e=e.alternate)&&Cv(e,i)}function wv(e){if(e.tag===13||e.tag===31){var i=Pr(e,67108864);i!==null&&Zn(i,e,67108864),Cd(e,67108864)}}function Dv(e){if(e.tag===13||e.tag===31){var i=hi();i=Ms(i);var r=Pr(e,i);r!==null&&Zn(r,e,i),Cd(e,i)}}var xc=!0;function oT(e,i,r,l){var h=I.T;I.T=null;var m=k.p;try{k.p=2,wd(e,i,r,l)}finally{k.p=m,I.T=h}}function lT(e,i,r,l){var h=I.T;I.T=null;var m=k.p;try{k.p=8,wd(e,i,r,l)}finally{k.p=m,I.T=h}}function wd(e,i,r,l){if(xc){var h=Dd(l);if(h===null)md(e,i,l,Sc,r),Lv(e,l);else if(cT(h,e,i,r,l))l.stopPropagation();else if(Lv(e,l),i&4&&-1<uT.indexOf(e)){for(;h!==null;){var m=Dt(h);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var E=Wt(m.pendingLanes);if(E!==0){var C=m;for(C.pendingLanes|=2,C.entangledLanes|=2;E;){var G=1<<31-Kt(E);C.entanglements[1]|=G,E&=~G}Ji(m),(Ae&6)===0&&(nc=xt()+500,Cl(0))}}break;case 31:case 13:C=Pr(m,2),C!==null&&Zn(C,m,2),ac(),Cd(m,2)}if(m=Dd(l),m===null&&md(e,i,l,Sc,r),m===h)break;h=m}h!==null&&l.stopPropagation()}else md(e,i,l,null,r)}}function Dd(e){return e=Lf(e),Ud(e)}var Sc=null;function Ud(e){if(Sc=null,e=bt(e),e!==null){var i=u(e);if(i===null)e=null;else{var r=i.tag;if(r===13){if(e=c(i),e!==null)return e;e=null}else if(r===31){if(e=f(i),e!==null)return e;e=null}else if(r===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;e=null}else i!==e&&(e=null)}}return Sc=e,null}function Uv(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(yt()){case Yt:return 2;case Ut:return 8;case Nt:case ae:return 32;case At:return 268435456;default:return 32}default:return 32}}var Ld=!1,or=null,lr=null,ur=null,Pl=new Map,zl=new Map,cr=[],uT="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Lv(e,i){switch(e){case"focusin":case"focusout":or=null;break;case"dragenter":case"dragleave":lr=null;break;case"mouseover":case"mouseout":ur=null;break;case"pointerover":case"pointerout":Pl.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":zl.delete(i.pointerId)}}function Il(e,i,r,l,h,m){return e===null||e.nativeEvent!==m?(e={blockedOn:i,domEventName:r,eventSystemFlags:l,nativeEvent:m,targetContainers:[h]},i!==null&&(i=Dt(i),i!==null&&wv(i)),e):(e.eventSystemFlags|=l,i=e.targetContainers,h!==null&&i.indexOf(h)===-1&&i.push(h),e)}function cT(e,i,r,l,h){switch(i){case"focusin":return or=Il(or,e,i,r,l,h),!0;case"dragenter":return lr=Il(lr,e,i,r,l,h),!0;case"mouseover":return ur=Il(ur,e,i,r,l,h),!0;case"pointerover":var m=h.pointerId;return Pl.set(m,Il(Pl.get(m)||null,e,i,r,l,h)),!0;case"gotpointercapture":return m=h.pointerId,zl.set(m,Il(zl.get(m)||null,e,i,r,l,h)),!0}return!1}function Nv(e){var i=bt(e.target);if(i!==null){var r=u(i);if(r!==null){if(i=r.tag,i===13){if(i=c(r),i!==null){e.blockedOn=i,Ur(e.priority,function(){Dv(r)});return}}else if(i===31){if(i=f(r),i!==null){e.blockedOn=i,Ur(e.priority,function(){Dv(r)});return}}else if(i===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function yc(e){if(e.blockedOn!==null)return!1;for(var i=e.targetContainers;0<i.length;){var r=Dd(e.nativeEvent);if(r===null){r=e.nativeEvent;var l=new r.constructor(r.type,r);Uf=l,r.target.dispatchEvent(l),Uf=null}else return i=Dt(r),i!==null&&wv(i),e.blockedOn=r,!1;i.shift()}return!0}function Ov(e,i,r){yc(e)&&r.delete(i)}function fT(){Ld=!1,or!==null&&yc(or)&&(or=null),lr!==null&&yc(lr)&&(lr=null),ur!==null&&yc(ur)&&(ur=null),Pl.forEach(Ov),zl.forEach(Ov)}function Mc(e,i){e.blockedOn===i&&(e.blockedOn=null,Ld||(Ld=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,fT)))}var Ec=null;function Pv(e){Ec!==e&&(Ec=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Ec===e&&(Ec=null);for(var i=0;i<e.length;i+=3){var r=e[i],l=e[i+1],h=e[i+2];if(typeof l!="function"){if(Ud(l||r)===null)continue;break}var m=Dt(r);m!==null&&(e.splice(i,3),i-=3,Dh(m,{pending:!0,data:h,method:r.method,action:l},l,h))}}))}function eo(e){function i(G){return Mc(G,e)}or!==null&&Mc(or,e),lr!==null&&Mc(lr,e),ur!==null&&Mc(ur,e),Pl.forEach(i),zl.forEach(i);for(var r=0;r<cr.length;r++){var l=cr[r];l.blockedOn===e&&(l.blockedOn=null)}for(;0<cr.length&&(r=cr[0],r.blockedOn===null);)Nv(r),r.blockedOn===null&&cr.shift();if(r=(e.ownerDocument||e).$$reactFormReplay,r!=null)for(l=0;l<r.length;l+=3){var h=r[l],m=r[l+1],E=h[Un]||null;if(typeof m=="function")E||Pv(r);else if(E){var C=null;if(m&&m.hasAttribute("formAction")){if(h=m,E=m[Un]||null)C=E.formAction;else if(Ud(h)!==null)continue}else C=E.action;typeof C=="function"?r[l+1]=C:(r.splice(l,3),l-=3),Pv(r)}}}function zv(){function e(m){m.canIntercept&&m.info==="react-transition"&&m.intercept({handler:function(){return new Promise(function(E){return h=E})},focusReset:"manual",scroll:"manual"})}function i(){h!==null&&(h(),h=null),l||setTimeout(r,20)}function r(){if(!l&&!navigation.transition){var m=navigation.currentEntry;m&&m.url!=null&&navigation.navigate(m.url,{state:m.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,h=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",i),navigation.addEventListener("navigateerror",i),setTimeout(r,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",i),navigation.removeEventListener("navigateerror",i),h!==null&&(h(),h=null)}}}function Nd(e){this._internalRoot=e}Tc.prototype.render=Nd.prototype.render=function(e){var i=this._internalRoot;if(i===null)throw Error(a(409));var r=i.current,l=hi();Rv(r,l,e,i,null,null)},Tc.prototype.unmount=Nd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var i=e.containerInfo;Rv(e.current,2,null,e,null,null),ac(),i[Ga]=null}};function Tc(e){this._internalRoot=e}Tc.prototype.unstable_scheduleHydration=function(e){if(e){var i=qo();e={blockedOn:null,target:e,priority:i};for(var r=0;r<cr.length&&i!==0&&i<cr[r].priority;r++);cr.splice(r,0,e),r===0&&Nv(e)}};var Iv=t.version;if(Iv!=="19.2.0")throw Error(a(527,Iv,"19.2.0"));k.findDOMNode=function(e){var i=e._reactInternals;if(i===void 0)throw typeof e.render=="function"?Error(a(188)):(e=Object.keys(e).join(","),Error(a(268,e)));return e=p(i),e=e!==null?_(e):null,e=e===null?null:e.stateNode,e};var hT={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:I,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var bc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!bc.isDisabled&&bc.supportsFiber)try{Qt=bc.inject(hT),wt=bc}catch{}}return Fl.createRoot=function(e,i){if(!s(e))throw Error(a(299));var r=!1,l="",h=Xg,m=Wg,E=qg;return i!=null&&(i.unstable_strictMode===!0&&(r=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(h=i.onUncaughtError),i.onCaughtError!==void 0&&(m=i.onCaughtError),i.onRecoverableError!==void 0&&(E=i.onRecoverableError)),i=bv(e,1,!1,null,null,r,l,null,h,m,E,zv),e[Ga]=i.current,pd(e),new Nd(i)},Fl.hydrateRoot=function(e,i,r){if(!s(e))throw Error(a(299));var l=!1,h="",m=Xg,E=Wg,C=qg,G=null;return r!=null&&(r.unstable_strictMode===!0&&(l=!0),r.identifierPrefix!==void 0&&(h=r.identifierPrefix),r.onUncaughtError!==void 0&&(m=r.onUncaughtError),r.onCaughtError!==void 0&&(E=r.onCaughtError),r.onRecoverableError!==void 0&&(C=r.onRecoverableError),r.formState!==void 0&&(G=r.formState)),i=bv(e,1,!0,i,r??null,l,h,G,m,E,C,zv),i.context=Av(null),r=i.current,l=hi(),l=Ms(l),h=Za(l),h.callback=null,Ka(r,h,l),r=l,i.current.lanes=r,Dn(i,r),Ji(i),e[Ga]=i.current,pd(e),new Tc(i)},Fl.version="19.2.0",Fl}var Yv;function ET(){if(Yv)return zd.exports;Yv=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),zd.exports=MT(),zd.exports}var TT=ET();const bT=SS(TT),Tm=["Home","About","Work","Products","Contact"],yS=Tm.length,MS=Xt.createContext({currentIndex:0,sectionNames:Tm,totalSections:yS,scrollContainerRef:{current:null},scrollContainer:null,setScrollContainer:()=>{}}),Hd=["home","about","work","products","contact"];function AT({children:o}){const[t,n]=Xt.useState(0),[a,s]=Xt.useState(null),u=Xt.useRef(null),c=Xt.useCallback(d=>{s(d)},[]),f=Xt.useRef({});return Xt.useEffect(()=>{if(!a)return;const d=Hd.map(_=>document.getElementById(_)).filter(Boolean);if(d.length===0)return;const p=new IntersectionObserver(_=>{_.forEach(T=>{const M=T.target.id,x=Hd.indexOf(M);x!==-1&&(f.current[x]=T.intersectionRatio)});const g=f.current;let v=-1,y=0;for(let T=0;T<Hd.length;T++){const M=g[T]??0;M>v&&(v=M,y=T)}n(y)},{root:a,rootMargin:"0px",threshold:[0,.01,.1,.5,1]});return d.forEach(_=>_&&p.observe(_)),()=>p.disconnect()},[a]),Mt.jsx(MS.Provider,{value:{currentIndex:t,sectionNames:Tm,totalSections:yS,scrollContainerRef:u,scrollContainer:a,setScrollContainer:c},children:o})}function yf(){return Xt.useContext(MS)}var RT=(o,t,n,a,s,u,c,f)=>{let d=document.documentElement,p=["light","dark"];function _(y){(Array.isArray(o)?o:[o]).forEach(T=>{let M=T==="class",x=M&&u?s.map(S=>u[S]||S):s;M?(d.classList.remove(...x),d.classList.add(u&&u[y]?u[y]:y)):d.setAttribute(T,y)}),g(y)}function g(y){f&&p.includes(y)&&(d.style.colorScheme=y)}function v(){return window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}if(a)_(a);else try{let y=localStorage.getItem(t)||n,T=c&&y==="system"?v():y;_(T)}catch{}},jv=["light","dark"],ES="(prefers-color-scheme: dark)",CT=typeof window>"u",bm=Xt.createContext(void 0),wT={setTheme:o=>{},themes:[]},DT=()=>{var o;return(o=Xt.useContext(bm))!=null?o:wT},UT=o=>Xt.useContext(bm)?Xt.createElement(Xt.Fragment,null,o.children):Xt.createElement(NT,{...o}),LT=["light","dark"],NT=({forcedTheme:o,disableTransitionOnChange:t=!1,enableSystem:n=!0,enableColorScheme:a=!0,storageKey:s="theme",themes:u=LT,defaultTheme:c=n?"system":"light",attribute:f="data-theme",value:d,children:p,nonce:_,scriptProps:g})=>{let[v,y]=Xt.useState(()=>PT(s,c)),[T,M]=Xt.useState(()=>v==="system"?Gd():v),x=d?Object.values(d):u,S=Xt.useCallback(P=>{let O=P;if(!O)return;P==="system"&&n&&(O=Gd());let w=d?d[O]:O,B=t?zT(_):null,b=document.documentElement,R=F=>{F==="class"?(b.classList.remove(...x),w&&b.classList.add(w)):F.startsWith("data-")&&(w?b.setAttribute(F,w):b.removeAttribute(F))};if(Array.isArray(f)?f.forEach(R):R(f),a){let F=jv.includes(c)?c:null,X=jv.includes(O)?O:F;b.style.colorScheme=X}B==null||B()},[_]),U=Xt.useCallback(P=>{let O=typeof P=="function"?P(v):P;y(O);try{localStorage.setItem(s,O)}catch{}},[v]),A=Xt.useCallback(P=>{let O=Gd(P);M(O),v==="system"&&n&&!o&&S("system")},[v,o]);Xt.useEffect(()=>{let P=window.matchMedia(ES);return P.addListener(A),A(P),()=>P.removeListener(A)},[A]),Xt.useEffect(()=>{let P=O=>{O.key===s&&(O.newValue?y(O.newValue):U(c))};return window.addEventListener("storage",P),()=>window.removeEventListener("storage",P)},[U]),Xt.useEffect(()=>{S(o??v)},[o,v]);let L=Xt.useMemo(()=>({theme:v,setTheme:U,forcedTheme:o,resolvedTheme:v==="system"?T:v,themes:n?[...u,"system"]:u,systemTheme:n?T:void 0}),[v,U,o,T,n,u]);return Xt.createElement(bm.Provider,{value:L},Xt.createElement(OT,{forcedTheme:o,storageKey:s,attribute:f,enableSystem:n,enableColorScheme:a,defaultTheme:c,value:d,themes:u,nonce:_,scriptProps:g}),p)},OT=Xt.memo(({forcedTheme:o,storageKey:t,attribute:n,enableSystem:a,enableColorScheme:s,defaultTheme:u,value:c,themes:f,nonce:d,scriptProps:p})=>{let _=JSON.stringify([n,t,u,o,f,c,a,s]).slice(1,-1);return Xt.createElement("script",{...p,suppressHydrationWarning:!0,nonce:typeof window>"u"?d:"",dangerouslySetInnerHTML:{__html:`(${RT.toString()})(${_})`}})}),PT=(o,t)=>{if(CT)return;let n;try{n=localStorage.getItem(o)||void 0}catch{}return n||t},zT=o=>{let t=document.createElement("style");return o&&t.setAttribute("nonce",o),t.appendChild(document.createTextNode("*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(t),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(t)},1)}},Gd=o=>(o||(o=window.matchMedia(ES)),o.matches?"dark":"light");function IT({children:o,...t}){return Mt.jsx(UT,{...t,children:o})}function BT(){return Mt.jsx("section",{id:"about",className:"section scroll-snap-section flex items-center",children:Mt.jsxs("div",{className:"site-wrap",children:[Mt.jsx("p",{className:"label mb-4",children:"About"}),Mt.jsx("p",{className:"text-sm text-foreground leading-relaxed",children:"I work at the intersection of design and development — Design & Code, with a growing focus on AI-augmented workflows. I care about clarity, craft, and systems that scale. Besides client and studio work, I build and ship small products and plugins whenever I can."})]})})}/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FT=o=>o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),HT=o=>o.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,n,a)=>a?a.toUpperCase():n.toLowerCase()),Zv=o=>{const t=HT(o);return t.charAt(0).toUpperCase()+t.slice(1)},TS=(...o)=>o.filter((t,n,a)=>!!t&&t.trim()!==""&&a.indexOf(t)===n).join(" ").trim(),GT=o=>{for(const t in o)if(t.startsWith("aria-")||t==="role"||t==="title")return!0};/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var VT={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kT=Xt.forwardRef(({color:o="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:a,className:s="",children:u,iconNode:c,...f},d)=>Xt.createElement("svg",{ref:d,...VT,width:t,height:t,stroke:o,strokeWidth:a?Number(n)*24/Number(t):n,className:TS("lucide",s),...!u&&!GT(f)&&{"aria-hidden":"true"},...f},[...c.map(([p,_])=>Xt.createElement(p,_)),...Array.isArray(u)?u:[u]]));/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vs=(o,t)=>{const n=Xt.forwardRef(({className:a,...s},u)=>Xt.createElement(kT,{ref:u,iconNode:t,className:TS(`lucide-${FT(Zv(o))}`,`lucide-${o}`,a),...s}));return n.displayName=Zv(o),n};/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XT=[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]],WT=vs("arrow-down",XT);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qT=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],bS=vs("external-link",qT);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YT=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]],jT=vs("github",YT);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZT=[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]],KT=vs("linkedin",ZT);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QT=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],AS=vs("mail",QT);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JT=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]],$T=vs("moon",JT);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t1=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],e1=vs("sun",t1);function n1(){return Mt.jsx("section",{id:"contact",className:"section scroll-snap-section flex items-center",children:Mt.jsxs("div",{className:"site-wrap",children:[Mt.jsx("p",{className:"label mb-4",children:"Contact"}),Mt.jsx("p",{className:"text-sm text-foreground mb-6",children:"Open to collaboration and new projects. Say hello."}),Mt.jsxs("a",{href:"mailto:muhsalmon98@gmail.com",className:"link-underline inline-flex items-center gap-2 text-sm",children:[Mt.jsx(AS,{className:"h-3.5 w-3.5"}),"muhsalmon98@gmail.com"]}),Mt.jsxs("p",{className:"text-xs text-muted-foreground mt-4",children:[Mt.jsx("a",{href:"https://linkedin.com/in/muhsalmon",target:"_blank",rel:"noopener noreferrer",className:"hover:text-foreground transition-colors",children:"LinkedIn"})," · ",Mt.jsx("a",{href:"https://github.com/muhsalmon",target:"_blank",rel:"noopener noreferrer",className:"hover:text-foreground transition-colors",children:"GitHub"})]})]})})}function Da(o){if(o===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return o}function RS(o,t){o.prototype=Object.create(t.prototype),o.prototype.constructor=o,o.__proto__=t}/*!
 * GSAP 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var vi={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Lo={duration:.5,overwrite:!1,delay:0},Am,wn,Ye,Li=1e8,Be=1/Li,bp=Math.PI*2,i1=bp/4,a1=0,CS=Math.sqrt,r1=Math.cos,s1=Math.sin,Tn=function(t){return typeof t=="string"},en=function(t){return typeof t=="function"},Pa=function(t){return typeof t=="number"},Rm=function(t){return typeof t>"u"},sa=function(t){return typeof t=="object"},Jn=function(t){return t!==!1},Cm=function(){return typeof window<"u"},Ac=function(t){return en(t)||Tn(t)},wS=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Fn=Array.isArray,Ap=/(?:-?\.?\d|\.)+/gi,DS=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Eo=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Vd=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,US=/[+-]=-?[.\d]+/,LS=/[^,'"\[\]\s]+/gi,o1=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Ze,$i,Rp,wm,Si={},of={},NS,OS=function(t){return(of=No(t,Si))&&ai},Dm=function(t,n){return console.warn("Invalid property",t,"set to",n,"Missing plugin? gsap.registerPlugin()")},eu=function(t,n){return!n&&console.warn(t)},PS=function(t,n){return t&&(Si[t]=n)&&of&&(of[t]=n)||Si},nu=function(){return 0},l1={suppressEvents:!0,isStart:!0,kill:!1},Kc={suppressEvents:!0,kill:!1},u1={suppressEvents:!0},Um={},Mr=[],Cp={},zS,mi={},kd={},Kv=30,Qc=[],Lm="",Nm=function(t){var n=t[0],a,s;if(sa(n)||en(n)||(t=[t]),!(a=(n._gsap||{}).harness)){for(s=Qc.length;s--&&!Qc[s].targetTest(n););a=Qc[s]}for(s=t.length;s--;)t[s]&&(t[s]._gsap||(t[s]._gsap=new sy(t[s],a)))||t.splice(s,1);return t},cs=function(t){return t._gsap||Nm(Ni(t))[0]._gsap},IS=function(t,n,a){return(a=t[n])&&en(a)?t[n]():Rm(a)&&t.getAttribute&&t.getAttribute(n)||a},$n=function(t,n){return(t=t.split(",")).forEach(n)||t},sn=function(t){return Math.round(t*1e5)/1e5||0},pn=function(t){return Math.round(t*1e7)/1e7||0},Ao=function(t,n){var a=n.charAt(0),s=parseFloat(n.substr(2));return t=parseFloat(t),a==="+"?t+s:a==="-"?t-s:a==="*"?t*s:t/s},c1=function(t,n){for(var a=n.length,s=0;t.indexOf(n[s])<0&&++s<a;);return s<a},lf=function(){var t=Mr.length,n=Mr.slice(0),a,s;for(Cp={},Mr.length=0,a=0;a<t;a++)s=n[a],s&&s._lazy&&(s.render(s._lazy[0],s._lazy[1],!0)._lazy=0)},Om=function(t){return!!(t._initted||t._startAt||t.add)},BS=function(t,n,a,s){Mr.length&&!wn&&lf(),t.render(n,a,!!(wn&&n<0&&Om(t))),Mr.length&&!wn&&lf()},FS=function(t){var n=parseFloat(t);return(n||n===0)&&(t+"").match(LS).length<2?n:Tn(t)?t.trim():t},HS=function(t){return t},yi=function(t,n){for(var a in n)a in t||(t[a]=n[a]);return t},f1=function(t){return function(n,a){for(var s in a)s in n||s==="duration"&&t||s==="ease"||(n[s]=a[s])}},No=function(t,n){for(var a in n)t[a]=n[a];return t},Qv=function o(t,n){for(var a in n)a!=="__proto__"&&a!=="constructor"&&a!=="prototype"&&(t[a]=sa(n[a])?o(t[a]||(t[a]={}),n[a]):n[a]);return t},uf=function(t,n){var a={},s;for(s in t)s in n||(a[s]=t[s]);return a},Ql=function(t){var n=t.parent||Ze,a=t.keyframes?f1(Fn(t.keyframes)):yi;if(Jn(t.inherit))for(;n;)a(t,n.vars.defaults),n=n.parent||n._dp;return t},h1=function(t,n){for(var a=t.length,s=a===n.length;s&&a--&&t[a]===n[a];);return a<0},GS=function(t,n,a,s,u){var c=t[s],f;if(u)for(f=n[u];c&&c[u]>f;)c=c._prev;return c?(n._next=c._next,c._next=n):(n._next=t[a],t[a]=n),n._next?n._next._prev=n:t[s]=n,n._prev=c,n.parent=n._dp=t,n},Mf=function(t,n,a,s){a===void 0&&(a="_first"),s===void 0&&(s="_last");var u=n._prev,c=n._next;u?u._next=c:t[a]===n&&(t[a]=c),c?c._prev=u:t[s]===n&&(t[s]=u),n._next=n._prev=n.parent=null},Ar=function(t,n){t.parent&&(!n||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},fs=function(t,n){if(t&&(!n||n._end>t._dur||n._start<0))for(var a=t;a;)a._dirty=1,a=a.parent;return t},d1=function(t){for(var n=t.parent;n&&n.parent;)n._dirty=1,n.totalDuration(),n=n.parent;return t},wp=function(t,n,a,s){return t._startAt&&(wn?t._startAt.revert(Kc):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(n,!0,s))},p1=function o(t){return!t||t._ts&&o(t.parent)},Jv=function(t){return t._repeat?Oo(t._tTime,t=t.duration()+t._rDelay)*t:0},Oo=function(t,n){var a=Math.floor(t=pn(t/n));return t&&a===t?a-1:a},cf=function(t,n){return(t-n._start)*n._ts+(n._ts>=0?0:n._dirty?n.totalDuration():n._tDur)},Ef=function(t){return t._end=pn(t._start+(t._tDur/Math.abs(t._ts||t._rts||Be)||0))},Tf=function(t,n){var a=t._dp;return a&&a.smoothChildTiming&&t._ts&&(t._start=pn(a._time-(t._ts>0?n/t._ts:((t._dirty?t.totalDuration():t._tDur)-n)/-t._ts)),Ef(t),a._dirty||fs(a,t)),t},VS=function(t,n){var a;if((n._time||!n._dur&&n._initted||n._start<t._time&&(n._dur||!n.add))&&(a=cf(t.rawTime(),n),(!n._dur||uu(0,n.totalDuration(),a)-n._tTime>Be)&&n.render(a,!0)),fs(t,n)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(a=t;a._dp;)a.rawTime()>=0&&a.totalTime(a._tTime),a=a._dp;t._zTime=-Be}},ea=function(t,n,a,s){return n.parent&&Ar(n),n._start=pn((Pa(a)?a:a||t!==Ze?Ui(t,a,n):t._time)+n._delay),n._end=pn(n._start+(n.totalDuration()/Math.abs(n.timeScale())||0)),GS(t,n,"_first","_last",t._sort?"_start":0),Dp(n)||(t._recent=n),s||VS(t,n),t._ts<0&&Tf(t,t._tTime),t},kS=function(t,n){return(Si.ScrollTrigger||Dm("scrollTrigger",n))&&Si.ScrollTrigger.create(n,t)},XS=function(t,n,a,s,u){if(zm(t,n,u),!t._initted)return 1;if(!a&&t._pt&&!wn&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&zS!==_i.frame)return Mr.push(t),t._lazy=[u,s],1},m1=function o(t){var n=t.parent;return n&&n._ts&&n._initted&&!n._lock&&(n.rawTime()<0||o(n))},Dp=function(t){var n=t.data;return n==="isFromStart"||n==="isStart"},_1=function(t,n,a,s){var u=t.ratio,c=n<0||!n&&(!t._start&&m1(t)&&!(!t._initted&&Dp(t))||(t._ts<0||t._dp._ts<0)&&!Dp(t))?0:1,f=t._rDelay,d=0,p,_,g;if(f&&t._repeat&&(d=uu(0,t._tDur,n),_=Oo(d,f),t._yoyo&&_&1&&(c=1-c),_!==Oo(t._tTime,f)&&(u=1-c,t.vars.repeatRefresh&&t._initted&&t.invalidate())),c!==u||wn||s||t._zTime===Be||!n&&t._zTime){if(!t._initted&&XS(t,n,s,a,d))return;for(g=t._zTime,t._zTime=n||(a?Be:0),a||(a=n&&!g),t.ratio=c,t._from&&(c=1-c),t._time=0,t._tTime=d,p=t._pt;p;)p.r(c,p.d),p=p._next;n<0&&wp(t,n,a,!0),t._onUpdate&&!a&&gi(t,"onUpdate"),d&&t._repeat&&!a&&t.parent&&gi(t,"onRepeat"),(n>=t._tDur||n<0)&&t.ratio===c&&(c&&Ar(t,1),!a&&!wn&&(gi(t,c?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=n)},g1=function(t,n,a){var s;if(a>n)for(s=t._first;s&&s._start<=a;){if(s.data==="isPause"&&s._start>n)return s;s=s._next}else for(s=t._last;s&&s._start>=a;){if(s.data==="isPause"&&s._start<n)return s;s=s._prev}},Po=function(t,n,a,s){var u=t._repeat,c=pn(n)||0,f=t._tTime/t._tDur;return f&&!s&&(t._time*=c/t._dur),t._dur=c,t._tDur=u?u<0?1e10:pn(c*(u+1)+t._rDelay*u):c,f>0&&!s&&Tf(t,t._tTime=t._tDur*f),t.parent&&Ef(t),a||fs(t.parent,t),t},$v=function(t){return t instanceof Vn?fs(t):Po(t,t._dur)},v1={_start:0,endTime:nu,totalDuration:nu},Ui=function o(t,n,a){var s=t.labels,u=t._recent||v1,c=t.duration()>=Li?u.endTime(!1):t._dur,f,d,p;return Tn(n)&&(isNaN(n)||n in s)?(d=n.charAt(0),p=n.substr(-1)==="%",f=n.indexOf("="),d==="<"||d===">"?(f>=0&&(n=n.replace(/=/,"")),(d==="<"?u._start:u.endTime(u._repeat>=0))+(parseFloat(n.substr(1))||0)*(p?(f<0?u:a).totalDuration()/100:1)):f<0?(n in s||(s[n]=c),s[n]):(d=parseFloat(n.charAt(f-1)+n.substr(f+1)),p&&a&&(d=d/100*(Fn(a)?a[0]:a).totalDuration()),f>1?o(t,n.substr(0,f-1),a)+d:c+d)):n==null?c:+n},Jl=function(t,n,a){var s=Pa(n[1]),u=(s?2:1)+(t<2?0:1),c=n[u],f,d;if(s&&(c.duration=n[1]),c.parent=a,t){for(f=c,d=a;d&&!("immediateRender"in f);)f=d.vars.defaults||{},d=Jn(d.vars.inherit)&&d.parent;c.immediateRender=Jn(f.immediateRender),t<2?c.runBackwards=1:c.startAt=n[u-1]}return new dn(n[0],c,n[u+1])},wr=function(t,n){return t||t===0?n(t):n},uu=function(t,n,a){return a<t?t:a>n?n:a},Bn=function(t,n){return!Tn(t)||!(n=o1.exec(t))?"":n[1]},x1=function(t,n,a){return wr(a,function(s){return uu(t,n,s)})},Up=[].slice,WS=function(t,n){return t&&sa(t)&&"length"in t&&(!n&&!t.length||t.length-1 in t&&sa(t[0]))&&!t.nodeType&&t!==$i},S1=function(t,n,a){return a===void 0&&(a=[]),t.forEach(function(s){var u;return Tn(s)&&!n||WS(s,1)?(u=a).push.apply(u,Ni(s)):a.push(s)})||a},Ni=function(t,n,a){return Ye&&!n&&Ye.selector?Ye.selector(t):Tn(t)&&!a&&(Rp||!zo())?Up.call((n||wm).querySelectorAll(t),0):Fn(t)?S1(t,a):WS(t)?Up.call(t,0):t?[t]:[]},Lp=function(t){return t=Ni(t)[0]||eu("Invalid scope")||{},function(n){var a=t.current||t.nativeElement||t;return Ni(n,a.querySelectorAll?a:a===t?eu("Invalid scope")||wm.createElement("div"):t)}},qS=function(t){return t.sort(function(){return .5-Math.random()})},YS=function(t){if(en(t))return t;var n=sa(t)?t:{each:t},a=hs(n.ease),s=n.from||0,u=parseFloat(n.base)||0,c={},f=s>0&&s<1,d=isNaN(s)||f,p=n.axis,_=s,g=s;return Tn(s)?_=g={center:.5,edges:.5,end:1}[s]||0:!f&&d&&(_=s[0],g=s[1]),function(v,y,T){var M=(T||n).length,x=c[M],S,U,A,L,P,O,w,B,b;if(!x){if(b=n.grid==="auto"?0:(n.grid||[1,Li])[1],!b){for(w=-Li;w<(w=T[b++].getBoundingClientRect().left)&&b<M;);b<M&&b--}for(x=c[M]=[],S=d?Math.min(b,M)*_-.5:s%b,U=b===Li?0:d?M*g/b-.5:s/b|0,w=0,B=Li,O=0;O<M;O++)A=O%b-S,L=U-(O/b|0),x[O]=P=p?Math.abs(p==="y"?L:A):CS(A*A+L*L),P>w&&(w=P),P<B&&(B=P);s==="random"&&qS(x),x.max=w-B,x.min=B,x.v=M=(parseFloat(n.amount)||parseFloat(n.each)*(b>M?M-1:p?p==="y"?M/b:b:Math.max(b,M/b))||0)*(s==="edges"?-1:1),x.b=M<0?u-M:u,x.u=Bn(n.amount||n.each)||0,a=a&&M<0?iy(a):a}return M=(x[v]-x.min)/x.max||0,pn(x.b+(a?a(M):M)*x.v)+x.u}},Np=function(t){var n=Math.pow(10,((t+"").split(".")[1]||"").length);return function(a){var s=pn(Math.round(parseFloat(a)/t)*t*n);return(s-s%1)/n+(Pa(a)?0:Bn(a))}},jS=function(t,n){var a=Fn(t),s,u;return!a&&sa(t)&&(s=a=t.radius||Li,t.values?(t=Ni(t.values),(u=!Pa(t[0]))&&(s*=s)):t=Np(t.increment)),wr(n,a?en(t)?function(c){return u=t(c),Math.abs(u-c)<=s?u:c}:function(c){for(var f=parseFloat(u?c.x:c),d=parseFloat(u?c.y:0),p=Li,_=0,g=t.length,v,y;g--;)u?(v=t[g].x-f,y=t[g].y-d,v=v*v+y*y):v=Math.abs(t[g]-f),v<p&&(p=v,_=g);return _=!s||p<=s?t[_]:c,u||_===c||Pa(c)?_:_+Bn(c)}:Np(t))},ZS=function(t,n,a,s){return wr(Fn(t)?!n:a===!0?!!(a=0):!s,function(){return Fn(t)?t[~~(Math.random()*t.length)]:(a=a||1e-5)&&(s=a<1?Math.pow(10,(a+"").length-2):1)&&Math.floor(Math.round((t-a/2+Math.random()*(n-t+a*.99))/a)*a*s)/s})},y1=function(){for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];return function(s){return n.reduce(function(u,c){return c(u)},s)}},M1=function(t,n){return function(a){return t(parseFloat(a))+(n||Bn(a))}},E1=function(t,n,a){return QS(t,n,0,1,a)},KS=function(t,n,a){return wr(a,function(s){return t[~~n(s)]})},T1=function o(t,n,a){var s=n-t;return Fn(t)?KS(t,o(0,t.length),n):wr(a,function(u){return(s+(u-t)%s)%s+t})},b1=function o(t,n,a){var s=n-t,u=s*2;return Fn(t)?KS(t,o(0,t.length-1),n):wr(a,function(c){return c=(u+(c-t)%u)%u||0,t+(c>s?u-c:c)})},iu=function(t){for(var n=0,a="",s,u,c,f;~(s=t.indexOf("random(",n));)c=t.indexOf(")",s),f=t.charAt(s+7)==="[",u=t.substr(s+7,c-s-7).match(f?LS:Ap),a+=t.substr(n,s-n)+ZS(f?u:+u[0],f?0:+u[1],+u[2]||1e-5),n=c+1;return a+t.substr(n,t.length-n)},QS=function(t,n,a,s,u){var c=n-t,f=s-a;return wr(u,function(d){return a+((d-t)/c*f||0)})},A1=function o(t,n,a,s){var u=isNaN(t+n)?0:function(y){return(1-y)*t+y*n};if(!u){var c=Tn(t),f={},d,p,_,g,v;if(a===!0&&(s=1)&&(a=null),c)t={p:t},n={p:n};else if(Fn(t)&&!Fn(n)){for(_=[],g=t.length,v=g-2,p=1;p<g;p++)_.push(o(t[p-1],t[p]));g--,u=function(T){T*=g;var M=Math.min(v,~~T);return _[M](T-M)},a=n}else s||(t=No(Fn(t)?[]:{},t));if(!_){for(d in n)Pm.call(f,t,d,"get",n[d]);u=function(T){return Fm(T,f)||(c?t.p:t)}}}return wr(a,u)},tx=function(t,n,a){var s=t.labels,u=Li,c,f,d;for(c in s)f=s[c]-n,f<0==!!a&&f&&u>(f=Math.abs(f))&&(d=c,u=f);return d},gi=function(t,n,a){var s=t.vars,u=s[n],c=Ye,f=t._ctx,d,p,_;if(u)return d=s[n+"Params"],p=s.callbackScope||t,a&&Mr.length&&lf(),f&&(Ye=f),_=d?u.apply(p,d):u.call(p),Ye=c,_},jl=function(t){return Ar(t),t.scrollTrigger&&t.scrollTrigger.kill(!!wn),t.progress()<1&&gi(t,"onInterrupt"),t},To,JS=[],$S=function(t){if(t)if(t=!t.name&&t.default||t,Cm()||t.headless){var n=t.name,a=en(t),s=n&&!a&&t.init?function(){this._props=[]}:t,u={init:nu,render:Fm,add:Pm,kill:V1,modifier:G1,rawVars:0},c={targetTest:0,get:0,getSetter:Bm,aliases:{},register:0};if(zo(),t!==s){if(mi[n])return;yi(s,yi(uf(t,u),c)),No(s.prototype,No(u,uf(t,c))),mi[s.prop=n]=s,t.targetTest&&(Qc.push(s),Um[n]=1),n=(n==="css"?"CSS":n.charAt(0).toUpperCase()+n.substr(1))+"Plugin"}PS(n,s),t.register&&t.register(ai,s,ti)}else JS.push(t)},Ie=255,Zl={aqua:[0,Ie,Ie],lime:[0,Ie,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Ie],navy:[0,0,128],white:[Ie,Ie,Ie],olive:[128,128,0],yellow:[Ie,Ie,0],orange:[Ie,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Ie,0,0],pink:[Ie,192,203],cyan:[0,Ie,Ie],transparent:[Ie,Ie,Ie,0]},Xd=function(t,n,a){return t+=t<0?1:t>1?-1:0,(t*6<1?n+(a-n)*t*6:t<.5?a:t*3<2?n+(a-n)*(2/3-t)*6:n)*Ie+.5|0},ty=function(t,n,a){var s=t?Pa(t)?[t>>16,t>>8&Ie,t&Ie]:0:Zl.black,u,c,f,d,p,_,g,v,y,T;if(!s){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),Zl[t])s=Zl[t];else if(t.charAt(0)==="#"){if(t.length<6&&(u=t.charAt(1),c=t.charAt(2),f=t.charAt(3),t="#"+u+u+c+c+f+f+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return s=parseInt(t.substr(1,6),16),[s>>16,s>>8&Ie,s&Ie,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),s=[t>>16,t>>8&Ie,t&Ie]}else if(t.substr(0,3)==="hsl"){if(s=T=t.match(Ap),!n)d=+s[0]%360/360,p=+s[1]/100,_=+s[2]/100,c=_<=.5?_*(p+1):_+p-_*p,u=_*2-c,s.length>3&&(s[3]*=1),s[0]=Xd(d+1/3,u,c),s[1]=Xd(d,u,c),s[2]=Xd(d-1/3,u,c);else if(~t.indexOf("="))return s=t.match(DS),a&&s.length<4&&(s[3]=1),s}else s=t.match(Ap)||Zl.transparent;s=s.map(Number)}return n&&!T&&(u=s[0]/Ie,c=s[1]/Ie,f=s[2]/Ie,g=Math.max(u,c,f),v=Math.min(u,c,f),_=(g+v)/2,g===v?d=p=0:(y=g-v,p=_>.5?y/(2-g-v):y/(g+v),d=g===u?(c-f)/y+(c<f?6:0):g===c?(f-u)/y+2:(u-c)/y+4,d*=60),s[0]=~~(d+.5),s[1]=~~(p*100+.5),s[2]=~~(_*100+.5)),a&&s.length<4&&(s[3]=1),s},ey=function(t){var n=[],a=[],s=-1;return t.split(Er).forEach(function(u){var c=u.match(Eo)||[];n.push.apply(n,c),a.push(s+=c.length+1)}),n.c=a,n},ex=function(t,n,a){var s="",u=(t+s).match(Er),c=n?"hsla(":"rgba(",f=0,d,p,_,g;if(!u)return t;if(u=u.map(function(v){return(v=ty(v,n,1))&&c+(n?v[0]+","+v[1]+"%,"+v[2]+"%,"+v[3]:v.join(","))+")"}),a&&(_=ey(t),d=a.c,d.join(s)!==_.c.join(s)))for(p=t.replace(Er,"1").split(Eo),g=p.length-1;f<g;f++)s+=p[f]+(~d.indexOf(f)?u.shift()||c+"0,0,0,0)":(_.length?_:u.length?u:a).shift());if(!p)for(p=t.split(Er),g=p.length-1;f<g;f++)s+=p[f]+u[f];return s+p[g]},Er=(function(){var o="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in Zl)o+="|"+t+"\\b";return new RegExp(o+")","gi")})(),R1=/hsl[a]?\(/,ny=function(t){var n=t.join(" "),a;if(Er.lastIndex=0,Er.test(n))return a=R1.test(n),t[1]=ex(t[1],a),t[0]=ex(t[0],a,ey(t[1])),!0},au,_i=(function(){var o=Date.now,t=500,n=33,a=o(),s=a,u=1e3/240,c=u,f=[],d,p,_,g,v,y,T=function M(x){var S=o()-s,U=x===!0,A,L,P,O;if((S>t||S<0)&&(a+=S-n),s+=S,P=s-a,A=P-c,(A>0||U)&&(O=++g.frame,v=P-g.time*1e3,g.time=P=P/1e3,c+=A+(A>=u?4:u-A),L=1),U||(d=p(M)),L)for(y=0;y<f.length;y++)f[y](P,v,O,x)};return g={time:0,frame:0,tick:function(){T(!0)},deltaRatio:function(x){return v/(1e3/(x||60))},wake:function(){NS&&(!Rp&&Cm()&&($i=Rp=window,wm=$i.document||{},Si.gsap=ai,($i.gsapVersions||($i.gsapVersions=[])).push(ai.version),OS(of||$i.GreenSockGlobals||!$i.gsap&&$i||{}),JS.forEach($S)),_=typeof requestAnimationFrame<"u"&&requestAnimationFrame,d&&g.sleep(),p=_||function(x){return setTimeout(x,c-g.time*1e3+1|0)},au=1,T(2))},sleep:function(){(_?cancelAnimationFrame:clearTimeout)(d),au=0,p=nu},lagSmoothing:function(x,S){t=x||1/0,n=Math.min(S||33,t)},fps:function(x){u=1e3/(x||240),c=g.time*1e3+u},add:function(x,S,U){var A=S?function(L,P,O,w){x(L,P,O,w),g.remove(A)}:x;return g.remove(x),f[U?"unshift":"push"](A),zo(),A},remove:function(x,S){~(S=f.indexOf(x))&&f.splice(S,1)&&y>=S&&y--},_listeners:f},g})(),zo=function(){return!au&&_i.wake()},Se={},C1=/^[\d.\-M][\d.\-,\s]/,w1=/["']/g,D1=function(t){for(var n={},a=t.substr(1,t.length-3).split(":"),s=a[0],u=1,c=a.length,f,d,p;u<c;u++)d=a[u],f=u!==c-1?d.lastIndexOf(","):d.length,p=d.substr(0,f),n[s]=isNaN(p)?p.replace(w1,"").trim():+p,s=d.substr(f+1).trim();return n},U1=function(t){var n=t.indexOf("(")+1,a=t.indexOf(")"),s=t.indexOf("(",n);return t.substring(n,~s&&s<a?t.indexOf(")",a+1):a)},L1=function(t){var n=(t+"").split("("),a=Se[n[0]];return a&&n.length>1&&a.config?a.config.apply(null,~t.indexOf("{")?[D1(n[1])]:U1(t).split(",").map(FS)):Se._CE&&C1.test(t)?Se._CE("",t):a},iy=function(t){return function(n){return 1-t(1-n)}},ay=function o(t,n){for(var a=t._first,s;a;)a instanceof Vn?o(a,n):a.vars.yoyoEase&&(!a._yoyo||!a._repeat)&&a._yoyo!==n&&(a.timeline?o(a.timeline,n):(s=a._ease,a._ease=a._yEase,a._yEase=s,a._yoyo=n)),a=a._next},hs=function(t,n){return t&&(en(t)?t:Se[t]||L1(t))||n},xs=function(t,n,a,s){a===void 0&&(a=function(d){return 1-n(1-d)}),s===void 0&&(s=function(d){return d<.5?n(d*2)/2:1-n((1-d)*2)/2});var u={easeIn:n,easeOut:a,easeInOut:s},c;return $n(t,function(f){Se[f]=Si[f]=u,Se[c=f.toLowerCase()]=a;for(var d in u)Se[c+(d==="easeIn"?".in":d==="easeOut"?".out":".inOut")]=Se[f+"."+d]=u[d]}),u},ry=function(t){return function(n){return n<.5?(1-t(1-n*2))/2:.5+t((n-.5)*2)/2}},Wd=function o(t,n,a){var s=n>=1?n:1,u=(a||(t?.3:.45))/(n<1?n:1),c=u/bp*(Math.asin(1/s)||0),f=function(_){return _===1?1:s*Math.pow(2,-10*_)*s1((_-c)*u)+1},d=t==="out"?f:t==="in"?function(p){return 1-f(1-p)}:ry(f);return u=bp/u,d.config=function(p,_){return o(t,p,_)},d},qd=function o(t,n){n===void 0&&(n=1.70158);var a=function(c){return c?--c*c*((n+1)*c+n)+1:0},s=t==="out"?a:t==="in"?function(u){return 1-a(1-u)}:ry(a);return s.config=function(u){return o(t,u)},s};$n("Linear,Quad,Cubic,Quart,Quint,Strong",function(o,t){var n=t<5?t+1:t;xs(o+",Power"+(n-1),t?function(a){return Math.pow(a,n)}:function(a){return a},function(a){return 1-Math.pow(1-a,n)},function(a){return a<.5?Math.pow(a*2,n)/2:1-Math.pow((1-a)*2,n)/2})});Se.Linear.easeNone=Se.none=Se.Linear.easeIn;xs("Elastic",Wd("in"),Wd("out"),Wd());(function(o,t){var n=1/t,a=2*n,s=2.5*n,u=function(f){return f<n?o*f*f:f<a?o*Math.pow(f-1.5/t,2)+.75:f<s?o*(f-=2.25/t)*f+.9375:o*Math.pow(f-2.625/t,2)+.984375};xs("Bounce",function(c){return 1-u(1-c)},u)})(7.5625,2.75);xs("Expo",function(o){return Math.pow(2,10*(o-1))*o+o*o*o*o*o*o*(1-o)});xs("Circ",function(o){return-(CS(1-o*o)-1)});xs("Sine",function(o){return o===1?1:-r1(o*i1)+1});xs("Back",qd("in"),qd("out"),qd());Se.SteppedEase=Se.steps=Si.SteppedEase={config:function(t,n){t===void 0&&(t=1);var a=1/t,s=t+(n?0:1),u=n?1:0,c=1-Be;return function(f){return((s*uu(0,c,f)|0)+u)*a}}};Lo.ease=Se["quad.out"];$n("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(o){return Lm+=o+","+o+"Params,"});var sy=function(t,n){this.id=a1++,t._gsap=this,this.target=t,this.harness=n,this.get=n?n.get:IS,this.set=n?n.getSetter:Bm},ru=(function(){function o(n){this.vars=n,this._delay=+n.delay||0,(this._repeat=n.repeat===1/0?-2:n.repeat||0)&&(this._rDelay=n.repeatDelay||0,this._yoyo=!!n.yoyo||!!n.yoyoEase),this._ts=1,Po(this,+n.duration,1,1),this.data=n.data,Ye&&(this._ctx=Ye,Ye.data.push(this)),au||_i.wake()}var t=o.prototype;return t.delay=function(a){return a||a===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+a-this._delay),this._delay=a,this):this._delay},t.duration=function(a){return arguments.length?this.totalDuration(this._repeat>0?a+(a+this._rDelay)*this._repeat:a):this.totalDuration()&&this._dur},t.totalDuration=function(a){return arguments.length?(this._dirty=0,Po(this,this._repeat<0?a:(a-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(a,s){if(zo(),!arguments.length)return this._tTime;var u=this._dp;if(u&&u.smoothChildTiming&&this._ts){for(Tf(this,a),!u._dp||u.parent||VS(u,this);u&&u.parent;)u.parent._time!==u._start+(u._ts>=0?u._tTime/u._ts:(u.totalDuration()-u._tTime)/-u._ts)&&u.totalTime(u._tTime,!0),u=u.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&a<this._tDur||this._ts<0&&a>0||!this._tDur&&!a)&&ea(this._dp,this,this._start-this._delay)}return(this._tTime!==a||!this._dur&&!s||this._initted&&Math.abs(this._zTime)===Be||!a&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=a),BS(this,a,s)),this},t.time=function(a,s){return arguments.length?this.totalTime(Math.min(this.totalDuration(),a+Jv(this))%(this._dur+this._rDelay)||(a?this._dur:0),s):this._time},t.totalProgress=function(a,s){return arguments.length?this.totalTime(this.totalDuration()*a,s):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(a,s){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-a:a)+Jv(this),s):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(a,s){var u=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(a-1)*u,s):this._repeat?Oo(this._tTime,u)+1:1},t.timeScale=function(a,s){if(!arguments.length)return this._rts===-Be?0:this._rts;if(this._rts===a)return this;var u=this.parent&&this._ts?cf(this.parent._time,this):this._tTime;return this._rts=+a||0,this._ts=this._ps||a===-Be?0:this._rts,this.totalTime(uu(-Math.abs(this._delay),this.totalDuration(),u),s!==!1),Ef(this),d1(this)},t.paused=function(a){return arguments.length?(this._ps!==a&&(this._ps=a,a?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(zo(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Be&&(this._tTime-=Be)))),this):this._ps},t.startTime=function(a){if(arguments.length){this._start=a;var s=this.parent||this._dp;return s&&(s._sort||!this.parent)&&ea(s,this,a-this._delay),this}return this._start},t.endTime=function(a){return this._start+(Jn(a)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(a){var s=this.parent||this._dp;return s?a&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?cf(s.rawTime(a),this):this._tTime:this._tTime},t.revert=function(a){a===void 0&&(a=u1);var s=wn;return wn=a,Om(this)&&(this.timeline&&this.timeline.revert(a),this.totalTime(-.01,a.suppressEvents)),this.data!=="nested"&&a.kill!==!1&&this.kill(),wn=s,this},t.globalTime=function(a){for(var s=this,u=arguments.length?a:s.rawTime();s;)u=s._start+u/(Math.abs(s._ts)||1),s=s._dp;return!this.parent&&this._sat?this._sat.globalTime(a):u},t.repeat=function(a){return arguments.length?(this._repeat=a===1/0?-2:a,$v(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(a){if(arguments.length){var s=this._time;return this._rDelay=a,$v(this),s?this.time(s):this}return this._rDelay},t.yoyo=function(a){return arguments.length?(this._yoyo=a,this):this._yoyo},t.seek=function(a,s){return this.totalTime(Ui(this,a),Jn(s))},t.restart=function(a,s){return this.play().totalTime(a?-this._delay:0,Jn(s)),this._dur||(this._zTime=-Be),this},t.play=function(a,s){return a!=null&&this.seek(a,s),this.reversed(!1).paused(!1)},t.reverse=function(a,s){return a!=null&&this.seek(a||this.totalDuration(),s),this.reversed(!0).paused(!1)},t.pause=function(a,s){return a!=null&&this.seek(a,s),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(a){return arguments.length?(!!a!==this.reversed()&&this.timeScale(-this._rts||(a?-Be:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-Be,this},t.isActive=function(){var a=this.parent||this._dp,s=this._start,u;return!!(!a||this._ts&&this._initted&&a.isActive()&&(u=a.rawTime(!0))>=s&&u<this.endTime(!0)-Be)},t.eventCallback=function(a,s,u){var c=this.vars;return arguments.length>1?(s?(c[a]=s,u&&(c[a+"Params"]=u),a==="onUpdate"&&(this._onUpdate=s)):delete c[a],this):c[a]},t.then=function(a){var s=this;return new Promise(function(u){var c=en(a)?a:HS,f=function(){var p=s.then;s.then=null,en(c)&&(c=c(s))&&(c.then||c===s)&&(s.then=p),u(c),s.then=p};s._initted&&s.totalProgress()===1&&s._ts>=0||!s._tTime&&s._ts<0?f():s._prom=f})},t.kill=function(){jl(this)},o})();yi(ru.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Be,_prom:0,_ps:!1,_rts:1});var Vn=(function(o){RS(t,o);function t(a,s){var u;return a===void 0&&(a={}),u=o.call(this,a)||this,u.labels={},u.smoothChildTiming=!!a.smoothChildTiming,u.autoRemoveChildren=!!a.autoRemoveChildren,u._sort=Jn(a.sortChildren),Ze&&ea(a.parent||Ze,Da(u),s),a.reversed&&u.reverse(),a.paused&&u.paused(!0),a.scrollTrigger&&kS(Da(u),a.scrollTrigger),u}var n=t.prototype;return n.to=function(s,u,c){return Jl(0,arguments,this),this},n.from=function(s,u,c){return Jl(1,arguments,this),this},n.fromTo=function(s,u,c,f){return Jl(2,arguments,this),this},n.set=function(s,u,c){return u.duration=0,u.parent=this,Ql(u).repeatDelay||(u.repeat=0),u.immediateRender=!!u.immediateRender,new dn(s,u,Ui(this,c),1),this},n.call=function(s,u,c){return ea(this,dn.delayedCall(0,s,u),c)},n.staggerTo=function(s,u,c,f,d,p,_){return c.duration=u,c.stagger=c.stagger||f,c.onComplete=p,c.onCompleteParams=_,c.parent=this,new dn(s,c,Ui(this,d)),this},n.staggerFrom=function(s,u,c,f,d,p,_){return c.runBackwards=1,Ql(c).immediateRender=Jn(c.immediateRender),this.staggerTo(s,u,c,f,d,p,_)},n.staggerFromTo=function(s,u,c,f,d,p,_,g){return f.startAt=c,Ql(f).immediateRender=Jn(f.immediateRender),this.staggerTo(s,u,f,d,p,_,g)},n.render=function(s,u,c){var f=this._time,d=this._dirty?this.totalDuration():this._tDur,p=this._dur,_=s<=0?0:pn(s),g=this._zTime<0!=s<0&&(this._initted||!p),v,y,T,M,x,S,U,A,L,P,O,w;if(this!==Ze&&_>d&&s>=0&&(_=d),_!==this._tTime||c||g){if(f!==this._time&&p&&(_+=this._time-f,s+=this._time-f),v=_,L=this._start,A=this._ts,S=!A,g&&(p||(f=this._zTime),(s||!u)&&(this._zTime=s)),this._repeat){if(O=this._yoyo,x=p+this._rDelay,this._repeat<-1&&s<0)return this.totalTime(x*100+s,u,c);if(v=pn(_%x),_===d?(M=this._repeat,v=p):(P=pn(_/x),M=~~P,M&&M===P&&(v=p,M--),v>p&&(v=p)),P=Oo(this._tTime,x),!f&&this._tTime&&P!==M&&this._tTime-P*x-this._dur<=0&&(P=M),O&&M&1&&(v=p-v,w=1),M!==P&&!this._lock){var B=O&&P&1,b=B===(O&&M&1);if(M<P&&(B=!B),f=B?0:_%p?p:_,this._lock=1,this.render(f||(w?0:pn(M*x)),u,!p)._lock=0,this._tTime=_,!u&&this.parent&&gi(this,"onRepeat"),this.vars.repeatRefresh&&!w&&(this.invalidate()._lock=1),f&&f!==this._time||S!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(p=this._dur,d=this._tDur,b&&(this._lock=2,f=B?p:-1e-4,this.render(f,!0),this.vars.repeatRefresh&&!w&&this.invalidate()),this._lock=0,!this._ts&&!S)return this;ay(this,w)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(U=g1(this,pn(f),pn(v)),U&&(_-=v-(v=U._start))),this._tTime=_,this._time=v,this._act=!A,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=s,f=0),!f&&_&&!u&&!P&&(gi(this,"onStart"),this._tTime!==_))return this;if(v>=f&&s>=0)for(y=this._first;y;){if(T=y._next,(y._act||v>=y._start)&&y._ts&&U!==y){if(y.parent!==this)return this.render(s,u,c);if(y.render(y._ts>0?(v-y._start)*y._ts:(y._dirty?y.totalDuration():y._tDur)+(v-y._start)*y._ts,u,c),v!==this._time||!this._ts&&!S){U=0,T&&(_+=this._zTime=-Be);break}}y=T}else{y=this._last;for(var R=s<0?s:v;y;){if(T=y._prev,(y._act||R<=y._end)&&y._ts&&U!==y){if(y.parent!==this)return this.render(s,u,c);if(y.render(y._ts>0?(R-y._start)*y._ts:(y._dirty?y.totalDuration():y._tDur)+(R-y._start)*y._ts,u,c||wn&&Om(y)),v!==this._time||!this._ts&&!S){U=0,T&&(_+=this._zTime=R?-Be:Be);break}}y=T}}if(U&&!u&&(this.pause(),U.render(v>=f?0:-Be)._zTime=v>=f?1:-1,this._ts))return this._start=L,Ef(this),this.render(s,u,c);this._onUpdate&&!u&&gi(this,"onUpdate",!0),(_===d&&this._tTime>=this.totalDuration()||!_&&f)&&(L===this._start||Math.abs(A)!==Math.abs(this._ts))&&(this._lock||((s||!p)&&(_===d&&this._ts>0||!_&&this._ts<0)&&Ar(this,1),!u&&!(s<0&&!f)&&(_||f||!d)&&(gi(this,_===d&&s>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(_<d&&this.timeScale()>0)&&this._prom())))}return this},n.add=function(s,u){var c=this;if(Pa(u)||(u=Ui(this,u,s)),!(s instanceof ru)){if(Fn(s))return s.forEach(function(f){return c.add(f,u)}),this;if(Tn(s))return this.addLabel(s,u);if(en(s))s=dn.delayedCall(0,s);else return this}return this!==s?ea(this,s,u):this},n.getChildren=function(s,u,c,f){s===void 0&&(s=!0),u===void 0&&(u=!0),c===void 0&&(c=!0),f===void 0&&(f=-Li);for(var d=[],p=this._first;p;)p._start>=f&&(p instanceof dn?u&&d.push(p):(c&&d.push(p),s&&d.push.apply(d,p.getChildren(!0,u,c)))),p=p._next;return d},n.getById=function(s){for(var u=this.getChildren(1,1,1),c=u.length;c--;)if(u[c].vars.id===s)return u[c]},n.remove=function(s){return Tn(s)?this.removeLabel(s):en(s)?this.killTweensOf(s):(s.parent===this&&Mf(this,s),s===this._recent&&(this._recent=this._last),fs(this))},n.totalTime=function(s,u){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=pn(_i.time-(this._ts>0?s/this._ts:(this.totalDuration()-s)/-this._ts))),o.prototype.totalTime.call(this,s,u),this._forcing=0,this):this._tTime},n.addLabel=function(s,u){return this.labels[s]=Ui(this,u),this},n.removeLabel=function(s){return delete this.labels[s],this},n.addPause=function(s,u,c){var f=dn.delayedCall(0,u||nu,c);return f.data="isPause",this._hasPause=1,ea(this,f,Ui(this,s))},n.removePause=function(s){var u=this._first;for(s=Ui(this,s);u;)u._start===s&&u.data==="isPause"&&Ar(u),u=u._next},n.killTweensOf=function(s,u,c){for(var f=this.getTweensOf(s,c),d=f.length;d--;)xr!==f[d]&&f[d].kill(s,u);return this},n.getTweensOf=function(s,u){for(var c=[],f=Ni(s),d=this._first,p=Pa(u),_;d;)d instanceof dn?c1(d._targets,f)&&(p?(!xr||d._initted&&d._ts)&&d.globalTime(0)<=u&&d.globalTime(d.totalDuration())>u:!u||d.isActive())&&c.push(d):(_=d.getTweensOf(f,u)).length&&c.push.apply(c,_),d=d._next;return c},n.tweenTo=function(s,u){u=u||{};var c=this,f=Ui(c,s),d=u,p=d.startAt,_=d.onStart,g=d.onStartParams,v=d.immediateRender,y,T=dn.to(c,yi({ease:u.ease||"none",lazy:!1,immediateRender:!1,time:f,overwrite:"auto",duration:u.duration||Math.abs((f-(p&&"time"in p?p.time:c._time))/c.timeScale())||Be,onStart:function(){if(c.pause(),!y){var x=u.duration||Math.abs((f-(p&&"time"in p?p.time:c._time))/c.timeScale());T._dur!==x&&Po(T,x,0,1).render(T._time,!0,!0),y=1}_&&_.apply(T,g||[])}},u));return v?T.render(0):T},n.tweenFromTo=function(s,u,c){return this.tweenTo(u,yi({startAt:{time:Ui(this,s)}},c))},n.recent=function(){return this._recent},n.nextLabel=function(s){return s===void 0&&(s=this._time),tx(this,Ui(this,s))},n.previousLabel=function(s){return s===void 0&&(s=this._time),tx(this,Ui(this,s),1)},n.currentLabel=function(s){return arguments.length?this.seek(s,!0):this.previousLabel(this._time+Be)},n.shiftChildren=function(s,u,c){c===void 0&&(c=0);for(var f=this._first,d=this.labels,p;f;)f._start>=c&&(f._start+=s,f._end+=s),f=f._next;if(u)for(p in d)d[p]>=c&&(d[p]+=s);return fs(this)},n.invalidate=function(s){var u=this._first;for(this._lock=0;u;)u.invalidate(s),u=u._next;return o.prototype.invalidate.call(this,s)},n.clear=function(s){s===void 0&&(s=!0);for(var u=this._first,c;u;)c=u._next,this.remove(u),u=c;return this._dp&&(this._time=this._tTime=this._pTime=0),s&&(this.labels={}),fs(this)},n.totalDuration=function(s){var u=0,c=this,f=c._last,d=Li,p,_,g;if(arguments.length)return c.timeScale((c._repeat<0?c.duration():c.totalDuration())/(c.reversed()?-s:s));if(c._dirty){for(g=c.parent;f;)p=f._prev,f._dirty&&f.totalDuration(),_=f._start,_>d&&c._sort&&f._ts&&!c._lock?(c._lock=1,ea(c,f,_-f._delay,1)._lock=0):d=_,_<0&&f._ts&&(u-=_,(!g&&!c._dp||g&&g.smoothChildTiming)&&(c._start+=_/c._ts,c._time-=_,c._tTime-=_),c.shiftChildren(-_,!1,-1/0),d=0),f._end>u&&f._ts&&(u=f._end),f=p;Po(c,c===Ze&&c._time>u?c._time:u,1,1),c._dirty=0}return c._tDur},t.updateRoot=function(s){if(Ze._ts&&(BS(Ze,cf(s,Ze)),zS=_i.frame),_i.frame>=Kv){Kv+=vi.autoSleep||120;var u=Ze._first;if((!u||!u._ts)&&vi.autoSleep&&_i._listeners.length<2){for(;u&&!u._ts;)u=u._next;u||_i.sleep()}}},t})(ru);yi(Vn.prototype,{_lock:0,_hasPause:0,_forcing:0});var N1=function(t,n,a,s,u,c,f){var d=new ti(this._pt,t,n,0,1,hy,null,u),p=0,_=0,g,v,y,T,M,x,S,U;for(d.b=a,d.e=s,a+="",s+="",(S=~s.indexOf("random("))&&(s=iu(s)),c&&(U=[a,s],c(U,t,n),a=U[0],s=U[1]),v=a.match(Vd)||[];g=Vd.exec(s);)T=g[0],M=s.substring(p,g.index),y?y=(y+1)%5:M.substr(-5)==="rgba("&&(y=1),T!==v[_++]&&(x=parseFloat(v[_-1])||0,d._pt={_next:d._pt,p:M||_===1?M:",",s:x,c:T.charAt(1)==="="?Ao(x,T)-x:parseFloat(T)-x,m:y&&y<4?Math.round:0},p=Vd.lastIndex);return d.c=p<s.length?s.substring(p,s.length):"",d.fp=f,(US.test(s)||S)&&(d.e=0),this._pt=d,d},Pm=function(t,n,a,s,u,c,f,d,p,_){en(s)&&(s=s(u||0,t,c));var g=t[n],v=a!=="get"?a:en(g)?p?t[n.indexOf("set")||!en(t["get"+n.substr(3)])?n:"get"+n.substr(3)](p):t[n]():g,y=en(g)?p?B1:cy:Im,T;if(Tn(s)&&(~s.indexOf("random(")&&(s=iu(s)),s.charAt(1)==="="&&(T=Ao(v,s)+(Bn(v)||0),(T||T===0)&&(s=T))),!_||v!==s||Op)return!isNaN(v*s)&&s!==""?(T=new ti(this._pt,t,n,+v||0,s-(v||0),typeof g=="boolean"?H1:fy,0,y),p&&(T.fp=p),f&&T.modifier(f,this,t),this._pt=T):(!g&&!(n in t)&&Dm(n,s),N1.call(this,t,n,v,s,y,d||vi.stringFilter,p))},O1=function(t,n,a,s,u){if(en(t)&&(t=$l(t,u,n,a,s)),!sa(t)||t.style&&t.nodeType||Fn(t)||wS(t))return Tn(t)?$l(t,u,n,a,s):t;var c={},f;for(f in t)c[f]=$l(t[f],u,n,a,s);return c},oy=function(t,n,a,s,u,c){var f,d,p,_;if(mi[t]&&(f=new mi[t]).init(u,f.rawVars?n[t]:O1(n[t],s,u,c,a),a,s,c)!==!1&&(a._pt=d=new ti(a._pt,u,t,0,1,f.render,f,0,f.priority),a!==To))for(p=a._ptLookup[a._targets.indexOf(u)],_=f._props.length;_--;)p[f._props[_]]=d;return f},xr,Op,zm=function o(t,n,a){var s=t.vars,u=s.ease,c=s.startAt,f=s.immediateRender,d=s.lazy,p=s.onUpdate,_=s.runBackwards,g=s.yoyoEase,v=s.keyframes,y=s.autoRevert,T=t._dur,M=t._startAt,x=t._targets,S=t.parent,U=S&&S.data==="nested"?S.vars.targets:x,A=t._overwrite==="auto"&&!Am,L=t.timeline,P,O,w,B,b,R,F,X,Y,nt,at,I,k;if(L&&(!v||!u)&&(u="none"),t._ease=hs(u,Lo.ease),t._yEase=g?iy(hs(g===!0?u:g,Lo.ease)):0,g&&t._yoyo&&!t._repeat&&(g=t._yEase,t._yEase=t._ease,t._ease=g),t._from=!L&&!!s.runBackwards,!L||v&&!s.stagger){if(X=x[0]?cs(x[0]).harness:0,I=X&&s[X.prop],P=uf(s,Um),M&&(M._zTime<0&&M.progress(1),n<0&&_&&f&&!y?M.render(-1,!0):M.revert(_&&T?Kc:l1),M._lazy=0),c){if(Ar(t._startAt=dn.set(x,yi({data:"isStart",overwrite:!1,parent:S,immediateRender:!0,lazy:!M&&Jn(d),startAt:null,delay:0,onUpdate:p&&function(){return gi(t,"onUpdate")},stagger:0},c))),t._startAt._dp=0,t._startAt._sat=t,n<0&&(wn||!f&&!y)&&t._startAt.revert(Kc),f&&T&&n<=0&&a<=0){n&&(t._zTime=n);return}}else if(_&&T&&!M){if(n&&(f=!1),w=yi({overwrite:!1,data:"isFromStart",lazy:f&&!M&&Jn(d),immediateRender:f,stagger:0,parent:S},P),I&&(w[X.prop]=I),Ar(t._startAt=dn.set(x,w)),t._startAt._dp=0,t._startAt._sat=t,n<0&&(wn?t._startAt.revert(Kc):t._startAt.render(-1,!0)),t._zTime=n,!f)o(t._startAt,Be,Be);else if(!n)return}for(t._pt=t._ptCache=0,d=T&&Jn(d)||d&&!T,O=0;O<x.length;O++){if(b=x[O],F=b._gsap||Nm(x)[O]._gsap,t._ptLookup[O]=nt={},Cp[F.id]&&Mr.length&&lf(),at=U===x?O:U.indexOf(b),X&&(Y=new X).init(b,I||P,t,at,U)!==!1&&(t._pt=B=new ti(t._pt,b,Y.name,0,1,Y.render,Y,0,Y.priority),Y._props.forEach(function(q){nt[q]=B}),Y.priority&&(R=1)),!X||I)for(w in P)mi[w]&&(Y=oy(w,P,t,at,b,U))?Y.priority&&(R=1):nt[w]=B=Pm.call(t,b,w,"get",P[w],at,U,0,s.stringFilter);t._op&&t._op[O]&&t.kill(b,t._op[O]),A&&t._pt&&(xr=t,Ze.killTweensOf(b,nt,t.globalTime(n)),k=!t.parent,xr=0),t._pt&&d&&(Cp[F.id]=1)}R&&dy(t),t._onInit&&t._onInit(t)}t._onUpdate=p,t._initted=(!t._op||t._pt)&&!k,v&&n<=0&&L.render(Li,!0,!0)},P1=function(t,n,a,s,u,c,f,d){var p=(t._pt&&t._ptCache||(t._ptCache={}))[n],_,g,v,y;if(!p)for(p=t._ptCache[n]=[],v=t._ptLookup,y=t._targets.length;y--;){if(_=v[y][n],_&&_.d&&_.d._pt)for(_=_.d._pt;_&&_.p!==n&&_.fp!==n;)_=_._next;if(!_)return Op=1,t.vars[n]="+=0",zm(t,f),Op=0,d?eu(n+" not eligible for reset"):1;p.push(_)}for(y=p.length;y--;)g=p[y],_=g._pt||g,_.s=(s||s===0)&&!u?s:_.s+(s||0)+c*_.c,_.c=a-_.s,g.e&&(g.e=sn(a)+Bn(g.e)),g.b&&(g.b=_.s+Bn(g.b))},z1=function(t,n){var a=t[0]?cs(t[0]).harness:0,s=a&&a.aliases,u,c,f,d;if(!s)return n;u=No({},n);for(c in s)if(c in u)for(d=s[c].split(","),f=d.length;f--;)u[d[f]]=u[c];return u},I1=function(t,n,a,s){var u=n.ease||s||"power1.inOut",c,f;if(Fn(n))f=a[t]||(a[t]=[]),n.forEach(function(d,p){return f.push({t:p/(n.length-1)*100,v:d,e:u})});else for(c in n)f=a[c]||(a[c]=[]),c==="ease"||f.push({t:parseFloat(t),v:n[c],e:u})},$l=function(t,n,a,s,u){return en(t)?t.call(n,a,s,u):Tn(t)&&~t.indexOf("random(")?iu(t):t},ly=Lm+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",uy={};$n(ly+",id,stagger,delay,duration,paused,scrollTrigger",function(o){return uy[o]=1});var dn=(function(o){RS(t,o);function t(a,s,u,c){var f;typeof s=="number"&&(u.duration=s,s=u,u=null),f=o.call(this,c?s:Ql(s))||this;var d=f.vars,p=d.duration,_=d.delay,g=d.immediateRender,v=d.stagger,y=d.overwrite,T=d.keyframes,M=d.defaults,x=d.scrollTrigger,S=d.yoyoEase,U=s.parent||Ze,A=(Fn(a)||wS(a)?Pa(a[0]):"length"in s)?[a]:Ni(a),L,P,O,w,B,b,R,F;if(f._targets=A.length?Nm(A):eu("GSAP target "+a+" not found. https://gsap.com",!vi.nullTargetWarn)||[],f._ptLookup=[],f._overwrite=y,T||v||Ac(p)||Ac(_)){if(s=f.vars,L=f.timeline=new Vn({data:"nested",defaults:M||{},targets:U&&U.data==="nested"?U.vars.targets:A}),L.kill(),L.parent=L._dp=Da(f),L._start=0,v||Ac(p)||Ac(_)){if(w=A.length,R=v&&YS(v),sa(v))for(B in v)~ly.indexOf(B)&&(F||(F={}),F[B]=v[B]);for(P=0;P<w;P++)O=uf(s,uy),O.stagger=0,S&&(O.yoyoEase=S),F&&No(O,F),b=A[P],O.duration=+$l(p,Da(f),P,b,A),O.delay=(+$l(_,Da(f),P,b,A)||0)-f._delay,!v&&w===1&&O.delay&&(f._delay=_=O.delay,f._start+=_,O.delay=0),L.to(b,O,R?R(P,b,A):0),L._ease=Se.none;L.duration()?p=_=0:f.timeline=0}else if(T){Ql(yi(L.vars.defaults,{ease:"none"})),L._ease=hs(T.ease||s.ease||"none");var X=0,Y,nt,at;if(Fn(T))T.forEach(function(I){return L.to(A,I,">")}),L.duration();else{O={};for(B in T)B==="ease"||B==="easeEach"||I1(B,T[B],O,T.easeEach);for(B in O)for(Y=O[B].sort(function(I,k){return I.t-k.t}),X=0,P=0;P<Y.length;P++)nt=Y[P],at={ease:nt.e,duration:(nt.t-(P?Y[P-1].t:0))/100*p},at[B]=nt.v,L.to(A,at,X),X+=at.duration;L.duration()<p&&L.to({},{duration:p-L.duration()})}}p||f.duration(p=L.duration())}else f.timeline=0;return y===!0&&!Am&&(xr=Da(f),Ze.killTweensOf(A),xr=0),ea(U,Da(f),u),s.reversed&&f.reverse(),s.paused&&f.paused(!0),(g||!p&&!T&&f._start===pn(U._time)&&Jn(g)&&p1(Da(f))&&U.data!=="nested")&&(f._tTime=-Be,f.render(Math.max(0,-_)||0)),x&&kS(Da(f),x),f}var n=t.prototype;return n.render=function(s,u,c){var f=this._time,d=this._tDur,p=this._dur,_=s<0,g=s>d-Be&&!_?d:s<Be?0:s,v,y,T,M,x,S,U,A,L;if(!p)_1(this,s,u,c);else if(g!==this._tTime||!s||c||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==_||this._lazy){if(v=g,A=this.timeline,this._repeat){if(M=p+this._rDelay,this._repeat<-1&&_)return this.totalTime(M*100+s,u,c);if(v=pn(g%M),g===d?(T=this._repeat,v=p):(x=pn(g/M),T=~~x,T&&T===x?(v=p,T--):v>p&&(v=p)),S=this._yoyo&&T&1,S&&(L=this._yEase,v=p-v),x=Oo(this._tTime,M),v===f&&!c&&this._initted&&T===x)return this._tTime=g,this;T!==x&&(A&&this._yEase&&ay(A,S),this.vars.repeatRefresh&&!S&&!this._lock&&v!==M&&this._initted&&(this._lock=c=1,this.render(pn(M*T),!0).invalidate()._lock=0))}if(!this._initted){if(XS(this,_?s:v,c,u,g))return this._tTime=0,this;if(f!==this._time&&!(c&&this.vars.repeatRefresh&&T!==x))return this;if(p!==this._dur)return this.render(s,u,c)}if(this._tTime=g,this._time=v,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=U=(L||this._ease)(v/p),this._from&&(this.ratio=U=1-U),!f&&g&&!u&&!x&&(gi(this,"onStart"),this._tTime!==g))return this;for(y=this._pt;y;)y.r(U,y.d),y=y._next;A&&A.render(s<0?s:A._dur*A._ease(v/this._dur),u,c)||this._startAt&&(this._zTime=s),this._onUpdate&&!u&&(_&&wp(this,s,u,c),gi(this,"onUpdate")),this._repeat&&T!==x&&this.vars.onRepeat&&!u&&this.parent&&gi(this,"onRepeat"),(g===this._tDur||!g)&&this._tTime===g&&(_&&!this._onUpdate&&wp(this,s,!0,!0),(s||!p)&&(g===this._tDur&&this._ts>0||!g&&this._ts<0)&&Ar(this,1),!u&&!(_&&!f)&&(g||f||S)&&(gi(this,g===d?"onComplete":"onReverseComplete",!0),this._prom&&!(g<d&&this.timeScale()>0)&&this._prom()))}return this},n.targets=function(){return this._targets},n.invalidate=function(s){return(!s||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(s),o.prototype.invalidate.call(this,s)},n.resetTo=function(s,u,c,f,d){au||_i.wake(),this._ts||this.play();var p=Math.min(this._dur,(this._dp._time-this._start)*this._ts),_;return this._initted||zm(this,p),_=this._ease(p/this._dur),P1(this,s,u,c,f,_,p,d)?this.resetTo(s,u,c,f,1):(Tf(this,0),this.parent||GS(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},n.kill=function(s,u){if(u===void 0&&(u="all"),!s&&(!u||u==="all"))return this._lazy=this._pt=0,this.parent?jl(this):this.scrollTrigger&&this.scrollTrigger.kill(!!wn),this;if(this.timeline){var c=this.timeline.totalDuration();return this.timeline.killTweensOf(s,u,xr&&xr.vars.overwrite!==!0)._first||jl(this),this.parent&&c!==this.timeline.totalDuration()&&Po(this,this._dur*this.timeline._tDur/c,0,1),this}var f=this._targets,d=s?Ni(s):f,p=this._ptLookup,_=this._pt,g,v,y,T,M,x,S;if((!u||u==="all")&&h1(f,d))return u==="all"&&(this._pt=0),jl(this);for(g=this._op=this._op||[],u!=="all"&&(Tn(u)&&(M={},$n(u,function(U){return M[U]=1}),u=M),u=z1(f,u)),S=f.length;S--;)if(~d.indexOf(f[S])){v=p[S],u==="all"?(g[S]=u,T=v,y={}):(y=g[S]=g[S]||{},T=u);for(M in T)x=v&&v[M],x&&((!("kill"in x.d)||x.d.kill(M)===!0)&&Mf(this,x,"_pt"),delete v[M]),y!=="all"&&(y[M]=1)}return this._initted&&!this._pt&&_&&jl(this),this},t.to=function(s,u){return new t(s,u,arguments[2])},t.from=function(s,u){return Jl(1,arguments)},t.delayedCall=function(s,u,c,f){return new t(u,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:s,onComplete:u,onReverseComplete:u,onCompleteParams:c,onReverseCompleteParams:c,callbackScope:f})},t.fromTo=function(s,u,c){return Jl(2,arguments)},t.set=function(s,u){return u.duration=0,u.repeatDelay||(u.repeat=0),new t(s,u)},t.killTweensOf=function(s,u,c){return Ze.killTweensOf(s,u,c)},t})(ru);yi(dn.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});$n("staggerTo,staggerFrom,staggerFromTo",function(o){dn[o]=function(){var t=new Vn,n=Up.call(arguments,0);return n.splice(o==="staggerFromTo"?5:4,0,0),t[o].apply(t,n)}});var Im=function(t,n,a){return t[n]=a},cy=function(t,n,a){return t[n](a)},B1=function(t,n,a,s){return t[n](s.fp,a)},F1=function(t,n,a){return t.setAttribute(n,a)},Bm=function(t,n){return en(t[n])?cy:Rm(t[n])&&t.setAttribute?F1:Im},fy=function(t,n){return n.set(n.t,n.p,Math.round((n.s+n.c*t)*1e6)/1e6,n)},H1=function(t,n){return n.set(n.t,n.p,!!(n.s+n.c*t),n)},hy=function(t,n){var a=n._pt,s="";if(!t&&n.b)s=n.b;else if(t===1&&n.e)s=n.e;else{for(;a;)s=a.p+(a.m?a.m(a.s+a.c*t):Math.round((a.s+a.c*t)*1e4)/1e4)+s,a=a._next;s+=n.c}n.set(n.t,n.p,s,n)},Fm=function(t,n){for(var a=n._pt;a;)a.r(t,a.d),a=a._next},G1=function(t,n,a,s){for(var u=this._pt,c;u;)c=u._next,u.p===s&&u.modifier(t,n,a),u=c},V1=function(t){for(var n=this._pt,a,s;n;)s=n._next,n.p===t&&!n.op||n.op===t?Mf(this,n,"_pt"):n.dep||(a=1),n=s;return!a},k1=function(t,n,a,s){s.mSet(t,n,s.m.call(s.tween,a,s.mt),s)},dy=function(t){for(var n=t._pt,a,s,u,c;n;){for(a=n._next,s=u;s&&s.pr>n.pr;)s=s._next;(n._prev=s?s._prev:c)?n._prev._next=n:u=n,(n._next=s)?s._prev=n:c=n,n=a}t._pt=u},ti=(function(){function o(n,a,s,u,c,f,d,p,_){this.t=a,this.s=u,this.c=c,this.p=s,this.r=f||fy,this.d=d||this,this.set=p||Im,this.pr=_||0,this._next=n,n&&(n._prev=this)}var t=o.prototype;return t.modifier=function(a,s,u){this.mSet=this.mSet||this.set,this.set=k1,this.m=a,this.mt=u,this.tween=s},o})();$n(Lm+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(o){return Um[o]=1});Si.TweenMax=Si.TweenLite=dn;Si.TimelineLite=Si.TimelineMax=Vn;Ze=new Vn({sortChildren:!1,defaults:Lo,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});vi.stringFilter=ny;var ds=[],Jc={},X1=[],nx=0,W1=0,Yd=function(t){return(Jc[t]||X1).map(function(n){return n()})},Pp=function(){var t=Date.now(),n=[];t-nx>2&&(Yd("matchMediaInit"),ds.forEach(function(a){var s=a.queries,u=a.conditions,c,f,d,p;for(f in s)c=$i.matchMedia(s[f]).matches,c&&(d=1),c!==u[f]&&(u[f]=c,p=1);p&&(a.revert(),d&&n.push(a))}),Yd("matchMediaRevert"),n.forEach(function(a){return a.onMatch(a,function(s){return a.add(null,s)})}),nx=t,Yd("matchMedia"))},py=(function(){function o(n,a){this.selector=a&&Lp(a),this.data=[],this._r=[],this.isReverted=!1,this.id=W1++,n&&this.add(n)}var t=o.prototype;return t.add=function(a,s,u){en(a)&&(u=s,s=a,a=en);var c=this,f=function(){var p=Ye,_=c.selector,g;return p&&p!==c&&p.data.push(c),u&&(c.selector=Lp(u)),Ye=c,g=s.apply(c,arguments),en(g)&&c._r.push(g),Ye=p,c.selector=_,c.isReverted=!1,g};return c.last=f,a===en?f(c,function(d){return c.add(null,d)}):a?c[a]=f:f},t.ignore=function(a){var s=Ye;Ye=null,a(this),Ye=s},t.getTweens=function(){var a=[];return this.data.forEach(function(s){return s instanceof o?a.push.apply(a,s.getTweens()):s instanceof dn&&!(s.parent&&s.parent.data==="nested")&&a.push(s)}),a},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(a,s){var u=this;if(a?(function(){for(var f=u.getTweens(),d=u.data.length,p;d--;)p=u.data[d],p.data==="isFlip"&&(p.revert(),p.getChildren(!0,!0,!1).forEach(function(_){return f.splice(f.indexOf(_),1)}));for(f.map(function(_){return{g:_._dur||_._delay||_._sat&&!_._sat.vars.immediateRender?_.globalTime(0):-1/0,t:_}}).sort(function(_,g){return g.g-_.g||-1/0}).forEach(function(_){return _.t.revert(a)}),d=u.data.length;d--;)p=u.data[d],p instanceof Vn?p.data!=="nested"&&(p.scrollTrigger&&p.scrollTrigger.revert(),p.kill()):!(p instanceof dn)&&p.revert&&p.revert(a);u._r.forEach(function(_){return _(a,u)}),u.isReverted=!0})():this.data.forEach(function(f){return f.kill&&f.kill()}),this.clear(),s)for(var c=ds.length;c--;)ds[c].id===this.id&&ds.splice(c,1)},t.revert=function(a){this.kill(a||{})},o})(),q1=(function(){function o(n){this.contexts=[],this.scope=n,Ye&&Ye.data.push(this)}var t=o.prototype;return t.add=function(a,s,u){sa(a)||(a={matches:a});var c=new py(0,u||this.scope),f=c.conditions={},d,p,_;Ye&&!c.selector&&(c.selector=Ye.selector),this.contexts.push(c),s=c.add("onMatch",s),c.queries=a;for(p in a)p==="all"?_=1:(d=$i.matchMedia(a[p]),d&&(ds.indexOf(c)<0&&ds.push(c),(f[p]=d.matches)&&(_=1),d.addListener?d.addListener(Pp):d.addEventListener("change",Pp)));return _&&s(c,function(g){return c.add(null,g)}),this},t.revert=function(a){this.kill(a||{})},t.kill=function(a){this.contexts.forEach(function(s){return s.kill(a,!0)})},o})(),ff={registerPlugin:function(){for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];n.forEach(function(s){return $S(s)})},timeline:function(t){return new Vn(t)},getTweensOf:function(t,n){return Ze.getTweensOf(t,n)},getProperty:function(t,n,a,s){Tn(t)&&(t=Ni(t)[0]);var u=cs(t||{}).get,c=a?HS:FS;return a==="native"&&(a=""),t&&(n?c((mi[n]&&mi[n].get||u)(t,n,a,s)):function(f,d,p){return c((mi[f]&&mi[f].get||u)(t,f,d,p))})},quickSetter:function(t,n,a){if(t=Ni(t),t.length>1){var s=t.map(function(_){return ai.quickSetter(_,n,a)}),u=s.length;return function(_){for(var g=u;g--;)s[g](_)}}t=t[0]||{};var c=mi[n],f=cs(t),d=f.harness&&(f.harness.aliases||{})[n]||n,p=c?function(_){var g=new c;To._pt=0,g.init(t,a?_+a:_,To,0,[t]),g.render(1,g),To._pt&&Fm(1,To)}:f.set(t,d);return c?p:function(_){return p(t,d,a?_+a:_,f,1)}},quickTo:function(t,n,a){var s,u=ai.to(t,yi((s={},s[n]="+=0.1",s.paused=!0,s.stagger=0,s),a||{})),c=function(d,p,_){return u.resetTo(n,d,p,_)};return c.tween=u,c},isTweening:function(t){return Ze.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=hs(t.ease,Lo.ease)),Qv(Lo,t||{})},config:function(t){return Qv(vi,t||{})},registerEffect:function(t){var n=t.name,a=t.effect,s=t.plugins,u=t.defaults,c=t.extendTimeline;(s||"").split(",").forEach(function(f){return f&&!mi[f]&&!Si[f]&&eu(n+" effect requires "+f+" plugin.")}),kd[n]=function(f,d,p){return a(Ni(f),yi(d||{},u),p)},c&&(Vn.prototype[n]=function(f,d,p){return this.add(kd[n](f,sa(d)?d:(p=d)&&{},this),p)})},registerEase:function(t,n){Se[t]=hs(n)},parseEase:function(t,n){return arguments.length?hs(t,n):Se},getById:function(t){return Ze.getById(t)},exportRoot:function(t,n){t===void 0&&(t={});var a=new Vn(t),s,u;for(a.smoothChildTiming=Jn(t.smoothChildTiming),Ze.remove(a),a._dp=0,a._time=a._tTime=Ze._time,s=Ze._first;s;)u=s._next,(n||!(!s._dur&&s instanceof dn&&s.vars.onComplete===s._targets[0]))&&ea(a,s,s._start-s._delay),s=u;return ea(Ze,a,0),a},context:function(t,n){return t?new py(t,n):Ye},matchMedia:function(t){return new q1(t)},matchMediaRefresh:function(){return ds.forEach(function(t){var n=t.conditions,a,s;for(s in n)n[s]&&(n[s]=!1,a=1);a&&t.revert()})||Pp()},addEventListener:function(t,n){var a=Jc[t]||(Jc[t]=[]);~a.indexOf(n)||a.push(n)},removeEventListener:function(t,n){var a=Jc[t],s=a&&a.indexOf(n);s>=0&&a.splice(s,1)},utils:{wrap:T1,wrapYoyo:b1,distribute:YS,random:ZS,snap:jS,normalize:E1,getUnit:Bn,clamp:x1,splitColor:ty,toArray:Ni,selector:Lp,mapRange:QS,pipe:y1,unitize:M1,interpolate:A1,shuffle:qS},install:OS,effects:kd,ticker:_i,updateRoot:Vn.updateRoot,plugins:mi,globalTimeline:Ze,core:{PropTween:ti,globals:PS,Tween:dn,Timeline:Vn,Animation:ru,getCache:cs,_removeLinkedListItem:Mf,reverting:function(){return wn},context:function(t){return t&&Ye&&(Ye.data.push(t),t._ctx=Ye),Ye},suppressOverwrites:function(t){return Am=t}}};$n("to,from,fromTo,delayedCall,set,killTweensOf",function(o){return ff[o]=dn[o]});_i.add(Vn.updateRoot);To=ff.to({},{duration:0});var Y1=function(t,n){for(var a=t._pt;a&&a.p!==n&&a.op!==n&&a.fp!==n;)a=a._next;return a},j1=function(t,n){var a=t._targets,s,u,c;for(s in n)for(u=a.length;u--;)c=t._ptLookup[u][s],c&&(c=c.d)&&(c._pt&&(c=Y1(c,s)),c&&c.modifier&&c.modifier(n[s],t,a[u],s))},jd=function(t,n){return{name:t,headless:1,rawVars:1,init:function(s,u,c){c._onInit=function(f){var d,p;if(Tn(u)&&(d={},$n(u,function(_){return d[_]=1}),u=d),n){d={};for(p in u)d[p]=n(u[p]);u=d}j1(f,u)}}}},ai=ff.registerPlugin({name:"attr",init:function(t,n,a,s,u){var c,f,d;this.tween=a;for(c in n)d=t.getAttribute(c)||"",f=this.add(t,"setAttribute",(d||0)+"",n[c],s,u,0,0,c),f.op=c,f.b=d,this._props.push(c)},render:function(t,n){for(var a=n._pt;a;)wn?a.set(a.t,a.p,a.b,a):a.r(t,a.d),a=a._next}},{name:"endArray",headless:1,init:function(t,n){for(var a=n.length;a--;)this.add(t,a,t[a]||0,n[a],0,0,0,0,0,1)}},jd("roundProps",Np),jd("modifiers"),jd("snap",jS))||ff;dn.version=Vn.version=ai.version="3.13.0";NS=1;Cm()&&zo();Se.Power0;Se.Power1;Se.Power2;Se.Power3;Se.Power4;Se.Linear;Se.Quad;Se.Cubic;Se.Quart;Se.Quint;Se.Strong;Se.Elastic;Se.Back;Se.SteppedEase;Se.Bounce;Se.Sine;Se.Expo;Se.Circ;/*!
 * CSSPlugin 3.13.0
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var ix,Sr,Ro,Hm,os,ax,Gm,Z1=function(){return typeof window<"u"},za={},ns=180/Math.PI,Co=Math.PI/180,no=Math.atan2,rx=1e8,Vm=/([A-Z])/g,K1=/(left|right|width|margin|padding|x)/i,Q1=/[\s,\(]\S/,ia={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},zp=function(t,n){return n.set(n.t,n.p,Math.round((n.s+n.c*t)*1e4)/1e4+n.u,n)},J1=function(t,n){return n.set(n.t,n.p,t===1?n.e:Math.round((n.s+n.c*t)*1e4)/1e4+n.u,n)},$1=function(t,n){return n.set(n.t,n.p,t?Math.round((n.s+n.c*t)*1e4)/1e4+n.u:n.b,n)},tb=function(t,n){var a=n.s+n.c*t;n.set(n.t,n.p,~~(a+(a<0?-.5:.5))+n.u,n)},my=function(t,n){return n.set(n.t,n.p,t?n.e:n.b,n)},_y=function(t,n){return n.set(n.t,n.p,t!==1?n.b:n.e,n)},eb=function(t,n,a){return t.style[n]=a},nb=function(t,n,a){return t.style.setProperty(n,a)},ib=function(t,n,a){return t._gsap[n]=a},ab=function(t,n,a){return t._gsap.scaleX=t._gsap.scaleY=a},rb=function(t,n,a,s,u){var c=t._gsap;c.scaleX=c.scaleY=a,c.renderTransform(u,c)},sb=function(t,n,a,s,u){var c=t._gsap;c[n]=a,c.renderTransform(u,c)},Ke="transform",ei=Ke+"Origin",ob=function o(t,n){var a=this,s=this.target,u=s.style,c=s._gsap;if(t in za&&u){if(this.tfm=this.tfm||{},t!=="transform")t=ia[t]||t,~t.indexOf(",")?t.split(",").forEach(function(f){return a.tfm[f]=Ua(s,f)}):this.tfm[t]=c.x?c[t]:Ua(s,t),t===ei&&(this.tfm.zOrigin=c.zOrigin);else return ia.transform.split(",").forEach(function(f){return o.call(a,f,n)});if(this.props.indexOf(Ke)>=0)return;c.svg&&(this.svgo=s.getAttribute("data-svg-origin"),this.props.push(ei,n,"")),t=Ke}(u||n)&&this.props.push(t,n,u[t])},gy=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},lb=function(){var t=this.props,n=this.target,a=n.style,s=n._gsap,u,c;for(u=0;u<t.length;u+=3)t[u+1]?t[u+1]===2?n[t[u]](t[u+2]):n[t[u]]=t[u+2]:t[u+2]?a[t[u]]=t[u+2]:a.removeProperty(t[u].substr(0,2)==="--"?t[u]:t[u].replace(Vm,"-$1").toLowerCase());if(this.tfm){for(c in this.tfm)s[c]=this.tfm[c];s.svg&&(s.renderTransform(),n.setAttribute("data-svg-origin",this.svgo||"")),u=Gm(),(!u||!u.isStart)&&!a[Ke]&&(gy(a),s.zOrigin&&a[ei]&&(a[ei]+=" "+s.zOrigin+"px",s.zOrigin=0,s.renderTransform()),s.uncache=1)}},vy=function(t,n){var a={target:t,props:[],revert:lb,save:ob};return t._gsap||ai.core.getCache(t),n&&t.style&&t.nodeType&&n.split(",").forEach(function(s){return a.save(s)}),a},xy,Ip=function(t,n){var a=Sr.createElementNS?Sr.createElementNS((n||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):Sr.createElement(t);return a&&a.style?a:Sr.createElement(t)},Oi=function o(t,n,a){var s=getComputedStyle(t);return s[n]||s.getPropertyValue(n.replace(Vm,"-$1").toLowerCase())||s.getPropertyValue(n)||!a&&o(t,Io(n)||n,1)||""},sx="O,Moz,ms,Ms,Webkit".split(","),Io=function(t,n,a){var s=n||os,u=s.style,c=5;if(t in u&&!a)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);c--&&!(sx[c]+t in u););return c<0?null:(c===3?"ms":c>=0?sx[c]:"")+t},Bp=function(){Z1()&&window.document&&(ix=window,Sr=ix.document,Ro=Sr.documentElement,os=Ip("div")||{style:{}},Ip("div"),Ke=Io(Ke),ei=Ke+"Origin",os.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",xy=!!Io("perspective"),Gm=ai.core.reverting,Hm=1)},ox=function(t){var n=t.ownerSVGElement,a=Ip("svg",n&&n.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),s=t.cloneNode(!0),u;s.style.display="block",a.appendChild(s),Ro.appendChild(a);try{u=s.getBBox()}catch{}return a.removeChild(s),Ro.removeChild(a),u},lx=function(t,n){for(var a=n.length;a--;)if(t.hasAttribute(n[a]))return t.getAttribute(n[a])},Sy=function(t){var n,a;try{n=t.getBBox()}catch{n=ox(t),a=1}return n&&(n.width||n.height)||a||(n=ox(t)),n&&!n.width&&!n.x&&!n.y?{x:+lx(t,["x","cx","x1"])||0,y:+lx(t,["y","cy","y1"])||0,width:0,height:0}:n},yy=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&Sy(t))},ms=function(t,n){if(n){var a=t.style,s;n in za&&n!==ei&&(n=Ke),a.removeProperty?(s=n.substr(0,2),(s==="ms"||n.substr(0,6)==="webkit")&&(n="-"+n),a.removeProperty(s==="--"?n:n.replace(Vm,"-$1").toLowerCase())):a.removeAttribute(n)}},yr=function(t,n,a,s,u,c){var f=new ti(t._pt,n,a,0,1,c?_y:my);return t._pt=f,f.b=s,f.e=u,t._props.push(a),f},ux={deg:1,rad:1,turn:1},ub={grid:1,flex:1},Rr=function o(t,n,a,s){var u=parseFloat(a)||0,c=(a+"").trim().substr((u+"").length)||"px",f=os.style,d=K1.test(n),p=t.tagName.toLowerCase()==="svg",_=(p?"client":"offset")+(d?"Width":"Height"),g=100,v=s==="px",y=s==="%",T,M,x,S;if(s===c||!u||ux[s]||ux[c])return u;if(c!=="px"&&!v&&(u=o(t,n,a,"px")),S=t.getCTM&&yy(t),(y||c==="%")&&(za[n]||~n.indexOf("adius")))return T=S?t.getBBox()[d?"width":"height"]:t[_],sn(y?u/T*g:u/100*T);if(f[d?"width":"height"]=g+(v?c:s),M=s!=="rem"&&~n.indexOf("adius")||s==="em"&&t.appendChild&&!p?t:t.parentNode,S&&(M=(t.ownerSVGElement||{}).parentNode),(!M||M===Sr||!M.appendChild)&&(M=Sr.body),x=M._gsap,x&&y&&x.width&&d&&x.time===_i.time&&!x.uncache)return sn(u/x.width*g);if(y&&(n==="height"||n==="width")){var U=t.style[n];t.style[n]=g+s,T=t[_],U?t.style[n]=U:ms(t,n)}else(y||c==="%")&&!ub[Oi(M,"display")]&&(f.position=Oi(t,"position")),M===t&&(f.position="static"),M.appendChild(os),T=os[_],M.removeChild(os),f.position="absolute";return d&&y&&(x=cs(M),x.time=_i.time,x.width=M[_]),sn(v?T*u/g:T&&u?g/T*u:0)},Ua=function(t,n,a,s){var u;return Hm||Bp(),n in ia&&n!=="transform"&&(n=ia[n],~n.indexOf(",")&&(n=n.split(",")[0])),za[n]&&n!=="transform"?(u=ou(t,s),u=n!=="transformOrigin"?u[n]:u.svg?u.origin:df(Oi(t,ei))+" "+u.zOrigin+"px"):(u=t.style[n],(!u||u==="auto"||s||~(u+"").indexOf("calc("))&&(u=hf[n]&&hf[n](t,n,a)||Oi(t,n)||IS(t,n)||(n==="opacity"?1:0))),a&&!~(u+"").trim().indexOf(" ")?Rr(t,n,u,a)+a:u},cb=function(t,n,a,s){if(!a||a==="none"){var u=Io(n,t,1),c=u&&Oi(t,u,1);c&&c!==a?(n=u,a=c):n==="borderColor"&&(a=Oi(t,"borderTopColor"))}var f=new ti(this._pt,t.style,n,0,1,hy),d=0,p=0,_,g,v,y,T,M,x,S,U,A,L,P;if(f.b=a,f.e=s,a+="",s+="",s.substring(0,6)==="var(--"&&(s=Oi(t,s.substring(4,s.indexOf(")")))),s==="auto"&&(M=t.style[n],t.style[n]=s,s=Oi(t,n)||s,M?t.style[n]=M:ms(t,n)),_=[a,s],ny(_),a=_[0],s=_[1],v=a.match(Eo)||[],P=s.match(Eo)||[],P.length){for(;g=Eo.exec(s);)x=g[0],U=s.substring(d,g.index),T?T=(T+1)%5:(U.substr(-5)==="rgba("||U.substr(-5)==="hsla(")&&(T=1),x!==(M=v[p++]||"")&&(y=parseFloat(M)||0,L=M.substr((y+"").length),x.charAt(1)==="="&&(x=Ao(y,x)+L),S=parseFloat(x),A=x.substr((S+"").length),d=Eo.lastIndex-A.length,A||(A=A||vi.units[n]||L,d===s.length&&(s+=A,f.e+=A)),L!==A&&(y=Rr(t,n,M,A)||0),f._pt={_next:f._pt,p:U||p===1?U:",",s:y,c:S-y,m:T&&T<4||n==="zIndex"?Math.round:0});f.c=d<s.length?s.substring(d,s.length):""}else f.r=n==="display"&&s==="none"?_y:my;return US.test(s)&&(f.e=0),this._pt=f,f},cx={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},fb=function(t){var n=t.split(" "),a=n[0],s=n[1]||"50%";return(a==="top"||a==="bottom"||s==="left"||s==="right")&&(t=a,a=s,s=t),n[0]=cx[a]||a,n[1]=cx[s]||s,n.join(" ")},hb=function(t,n){if(n.tween&&n.tween._time===n.tween._dur){var a=n.t,s=a.style,u=n.u,c=a._gsap,f,d,p;if(u==="all"||u===!0)s.cssText="",d=1;else for(u=u.split(","),p=u.length;--p>-1;)f=u[p],za[f]&&(d=1,f=f==="transformOrigin"?ei:Ke),ms(a,f);d&&(ms(a,Ke),c&&(c.svg&&a.removeAttribute("transform"),s.scale=s.rotate=s.translate="none",ou(a,1),c.uncache=1,gy(s)))}},hf={clearProps:function(t,n,a,s,u){if(u.data!=="isFromStart"){var c=t._pt=new ti(t._pt,n,a,0,0,hb);return c.u=s,c.pr=-10,c.tween=u,t._props.push(a),1}}},su=[1,0,0,1,0,0],My={},Ey=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},fx=function(t){var n=Oi(t,Ke);return Ey(n)?su:n.substr(7).match(DS).map(sn)},km=function(t,n){var a=t._gsap||cs(t),s=t.style,u=fx(t),c,f,d,p;return a.svg&&t.getAttribute("transform")?(d=t.transform.baseVal.consolidate().matrix,u=[d.a,d.b,d.c,d.d,d.e,d.f],u.join(",")==="1,0,0,1,0,0"?su:u):(u===su&&!t.offsetParent&&t!==Ro&&!a.svg&&(d=s.display,s.display="block",c=t.parentNode,(!c||!t.offsetParent&&!t.getBoundingClientRect().width)&&(p=1,f=t.nextElementSibling,Ro.appendChild(t)),u=fx(t),d?s.display=d:ms(t,"display"),p&&(f?c.insertBefore(t,f):c?c.appendChild(t):Ro.removeChild(t))),n&&u.length>6?[u[0],u[1],u[4],u[5],u[12],u[13]]:u)},Fp=function(t,n,a,s,u,c){var f=t._gsap,d=u||km(t,!0),p=f.xOrigin||0,_=f.yOrigin||0,g=f.xOffset||0,v=f.yOffset||0,y=d[0],T=d[1],M=d[2],x=d[3],S=d[4],U=d[5],A=n.split(" "),L=parseFloat(A[0])||0,P=parseFloat(A[1])||0,O,w,B,b;a?d!==su&&(w=y*x-T*M)&&(B=L*(x/w)+P*(-M/w)+(M*U-x*S)/w,b=L*(-T/w)+P*(y/w)-(y*U-T*S)/w,L=B,P=b):(O=Sy(t),L=O.x+(~A[0].indexOf("%")?L/100*O.width:L),P=O.y+(~(A[1]||A[0]).indexOf("%")?P/100*O.height:P)),s||s!==!1&&f.smooth?(S=L-p,U=P-_,f.xOffset=g+(S*y+U*M)-S,f.yOffset=v+(S*T+U*x)-U):f.xOffset=f.yOffset=0,f.xOrigin=L,f.yOrigin=P,f.smooth=!!s,f.origin=n,f.originIsAbsolute=!!a,t.style[ei]="0px 0px",c&&(yr(c,f,"xOrigin",p,L),yr(c,f,"yOrigin",_,P),yr(c,f,"xOffset",g,f.xOffset),yr(c,f,"yOffset",v,f.yOffset)),t.setAttribute("data-svg-origin",L+" "+P)},ou=function(t,n){var a=t._gsap||new sy(t);if("x"in a&&!n&&!a.uncache)return a;var s=t.style,u=a.scaleX<0,c="px",f="deg",d=getComputedStyle(t),p=Oi(t,ei)||"0",_,g,v,y,T,M,x,S,U,A,L,P,O,w,B,b,R,F,X,Y,nt,at,I,k,q,ht,dt,z,$,mt,j,ct;return _=g=v=M=x=S=U=A=L=0,y=T=1,a.svg=!!(t.getCTM&&yy(t)),d.translate&&((d.translate!=="none"||d.scale!=="none"||d.rotate!=="none")&&(s[Ke]=(d.translate!=="none"?"translate3d("+(d.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(d.rotate!=="none"?"rotate("+d.rotate+") ":"")+(d.scale!=="none"?"scale("+d.scale.split(" ").join(",")+") ":"")+(d[Ke]!=="none"?d[Ke]:"")),s.scale=s.rotate=s.translate="none"),w=km(t,a.svg),a.svg&&(a.uncache?(q=t.getBBox(),p=a.xOrigin-q.x+"px "+(a.yOrigin-q.y)+"px",k=""):k=!n&&t.getAttribute("data-svg-origin"),Fp(t,k||p,!!k||a.originIsAbsolute,a.smooth!==!1,w)),P=a.xOrigin||0,O=a.yOrigin||0,w!==su&&(F=w[0],X=w[1],Y=w[2],nt=w[3],_=at=w[4],g=I=w[5],w.length===6?(y=Math.sqrt(F*F+X*X),T=Math.sqrt(nt*nt+Y*Y),M=F||X?no(X,F)*ns:0,U=Y||nt?no(Y,nt)*ns+M:0,U&&(T*=Math.abs(Math.cos(U*Co))),a.svg&&(_-=P-(P*F+O*Y),g-=O-(P*X+O*nt))):(ct=w[6],mt=w[7],dt=w[8],z=w[9],$=w[10],j=w[11],_=w[12],g=w[13],v=w[14],B=no(ct,$),x=B*ns,B&&(b=Math.cos(-B),R=Math.sin(-B),k=at*b+dt*R,q=I*b+z*R,ht=ct*b+$*R,dt=at*-R+dt*b,z=I*-R+z*b,$=ct*-R+$*b,j=mt*-R+j*b,at=k,I=q,ct=ht),B=no(-Y,$),S=B*ns,B&&(b=Math.cos(-B),R=Math.sin(-B),k=F*b-dt*R,q=X*b-z*R,ht=Y*b-$*R,j=nt*R+j*b,F=k,X=q,Y=ht),B=no(X,F),M=B*ns,B&&(b=Math.cos(B),R=Math.sin(B),k=F*b+X*R,q=at*b+I*R,X=X*b-F*R,I=I*b-at*R,F=k,at=q),x&&Math.abs(x)+Math.abs(M)>359.9&&(x=M=0,S=180-S),y=sn(Math.sqrt(F*F+X*X+Y*Y)),T=sn(Math.sqrt(I*I+ct*ct)),B=no(at,I),U=Math.abs(B)>2e-4?B*ns:0,L=j?1/(j<0?-j:j):0),a.svg&&(k=t.getAttribute("transform"),a.forceCSS=t.setAttribute("transform","")||!Ey(Oi(t,Ke)),k&&t.setAttribute("transform",k))),Math.abs(U)>90&&Math.abs(U)<270&&(u?(y*=-1,U+=M<=0?180:-180,M+=M<=0?180:-180):(T*=-1,U+=U<=0?180:-180)),n=n||a.uncache,a.x=_-((a.xPercent=_&&(!n&&a.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-_)?-50:0)))?t.offsetWidth*a.xPercent/100:0)+c,a.y=g-((a.yPercent=g&&(!n&&a.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-g)?-50:0)))?t.offsetHeight*a.yPercent/100:0)+c,a.z=v+c,a.scaleX=sn(y),a.scaleY=sn(T),a.rotation=sn(M)+f,a.rotationX=sn(x)+f,a.rotationY=sn(S)+f,a.skewX=U+f,a.skewY=A+f,a.transformPerspective=L+c,(a.zOrigin=parseFloat(p.split(" ")[2])||!n&&a.zOrigin||0)&&(s[ei]=df(p)),a.xOffset=a.yOffset=0,a.force3D=vi.force3D,a.renderTransform=a.svg?pb:xy?Ty:db,a.uncache=0,a},df=function(t){return(t=t.split(" "))[0]+" "+t[1]},Zd=function(t,n,a){var s=Bn(n);return sn(parseFloat(n)+parseFloat(Rr(t,"x",a+"px",s)))+s},db=function(t,n){n.z="0px",n.rotationY=n.rotationX="0deg",n.force3D=0,Ty(t,n)},jr="0deg",Hl="0px",Zr=") ",Ty=function(t,n){var a=n||this,s=a.xPercent,u=a.yPercent,c=a.x,f=a.y,d=a.z,p=a.rotation,_=a.rotationY,g=a.rotationX,v=a.skewX,y=a.skewY,T=a.scaleX,M=a.scaleY,x=a.transformPerspective,S=a.force3D,U=a.target,A=a.zOrigin,L="",P=S==="auto"&&t&&t!==1||S===!0;if(A&&(g!==jr||_!==jr)){var O=parseFloat(_)*Co,w=Math.sin(O),B=Math.cos(O),b;O=parseFloat(g)*Co,b=Math.cos(O),c=Zd(U,c,w*b*-A),f=Zd(U,f,-Math.sin(O)*-A),d=Zd(U,d,B*b*-A+A)}x!==Hl&&(L+="perspective("+x+Zr),(s||u)&&(L+="translate("+s+"%, "+u+"%) "),(P||c!==Hl||f!==Hl||d!==Hl)&&(L+=d!==Hl||P?"translate3d("+c+", "+f+", "+d+") ":"translate("+c+", "+f+Zr),p!==jr&&(L+="rotate("+p+Zr),_!==jr&&(L+="rotateY("+_+Zr),g!==jr&&(L+="rotateX("+g+Zr),(v!==jr||y!==jr)&&(L+="skew("+v+", "+y+Zr),(T!==1||M!==1)&&(L+="scale("+T+", "+M+Zr),U.style[Ke]=L||"translate(0, 0)"},pb=function(t,n){var a=n||this,s=a.xPercent,u=a.yPercent,c=a.x,f=a.y,d=a.rotation,p=a.skewX,_=a.skewY,g=a.scaleX,v=a.scaleY,y=a.target,T=a.xOrigin,M=a.yOrigin,x=a.xOffset,S=a.yOffset,U=a.forceCSS,A=parseFloat(c),L=parseFloat(f),P,O,w,B,b;d=parseFloat(d),p=parseFloat(p),_=parseFloat(_),_&&(_=parseFloat(_),p+=_,d+=_),d||p?(d*=Co,p*=Co,P=Math.cos(d)*g,O=Math.sin(d)*g,w=Math.sin(d-p)*-v,B=Math.cos(d-p)*v,p&&(_*=Co,b=Math.tan(p-_),b=Math.sqrt(1+b*b),w*=b,B*=b,_&&(b=Math.tan(_),b=Math.sqrt(1+b*b),P*=b,O*=b)),P=sn(P),O=sn(O),w=sn(w),B=sn(B)):(P=g,B=v,O=w=0),(A&&!~(c+"").indexOf("px")||L&&!~(f+"").indexOf("px"))&&(A=Rr(y,"x",c,"px"),L=Rr(y,"y",f,"px")),(T||M||x||S)&&(A=sn(A+T-(T*P+M*w)+x),L=sn(L+M-(T*O+M*B)+S)),(s||u)&&(b=y.getBBox(),A=sn(A+s/100*b.width),L=sn(L+u/100*b.height)),b="matrix("+P+","+O+","+w+","+B+","+A+","+L+")",y.setAttribute("transform",b),U&&(y.style[Ke]=b)},mb=function(t,n,a,s,u){var c=360,f=Tn(u),d=parseFloat(u)*(f&&~u.indexOf("rad")?ns:1),p=d-s,_=s+p+"deg",g,v;return f&&(g=u.split("_")[1],g==="short"&&(p%=c,p!==p%(c/2)&&(p+=p<0?c:-c)),g==="cw"&&p<0?p=(p+c*rx)%c-~~(p/c)*c:g==="ccw"&&p>0&&(p=(p-c*rx)%c-~~(p/c)*c)),t._pt=v=new ti(t._pt,n,a,s,p,J1),v.e=_,v.u="deg",t._props.push(a),v},hx=function(t,n){for(var a in n)t[a]=n[a];return t},_b=function(t,n,a){var s=hx({},a._gsap),u="perspective,force3D,transformOrigin,svgOrigin",c=a.style,f,d,p,_,g,v,y,T;s.svg?(p=a.getAttribute("transform"),a.setAttribute("transform",""),c[Ke]=n,f=ou(a,1),ms(a,Ke),a.setAttribute("transform",p)):(p=getComputedStyle(a)[Ke],c[Ke]=n,f=ou(a,1),c[Ke]=p);for(d in za)p=s[d],_=f[d],p!==_&&u.indexOf(d)<0&&(y=Bn(p),T=Bn(_),g=y!==T?Rr(a,d,p,T):parseFloat(p),v=parseFloat(_),t._pt=new ti(t._pt,f,d,g,v-g,zp),t._pt.u=T||0,t._props.push(d));hx(f,s)};$n("padding,margin,Width,Radius",function(o,t){var n="Top",a="Right",s="Bottom",u="Left",c=(t<3?[n,a,s,u]:[n+u,n+a,s+a,s+u]).map(function(f){return t<2?o+f:"border"+f+o});hf[t>1?"border"+o:o]=function(f,d,p,_,g){var v,y;if(arguments.length<4)return v=c.map(function(T){return Ua(f,T,p)}),y=v.join(" "),y.split(v[0]).length===5?v[0]:y;v=(_+"").split(" "),y={},c.forEach(function(T,M){return y[T]=v[M]=v[M]||v[(M-1)/2|0]}),f.init(d,y,g)}});var by={name:"css",register:Bp,targetTest:function(t){return t.style&&t.nodeType},init:function(t,n,a,s,u){var c=this._props,f=t.style,d=a.vars.startAt,p,_,g,v,y,T,M,x,S,U,A,L,P,O,w,B;Hm||Bp(),this.styles=this.styles||vy(t),B=this.styles.props,this.tween=a;for(M in n)if(M!=="autoRound"&&(_=n[M],!(mi[M]&&oy(M,n,a,s,t,u)))){if(y=typeof _,T=hf[M],y==="function"&&(_=_.call(a,s,t,u),y=typeof _),y==="string"&&~_.indexOf("random(")&&(_=iu(_)),T)T(this,t,M,_,a)&&(w=1);else if(M.substr(0,2)==="--")p=(getComputedStyle(t).getPropertyValue(M)+"").trim(),_+="",Er.lastIndex=0,Er.test(p)||(x=Bn(p),S=Bn(_)),S?x!==S&&(p=Rr(t,M,p,S)+S):x&&(_+=x),this.add(f,"setProperty",p,_,s,u,0,0,M),c.push(M),B.push(M,0,f[M]);else if(y!=="undefined"){if(d&&M in d?(p=typeof d[M]=="function"?d[M].call(a,s,t,u):d[M],Tn(p)&&~p.indexOf("random(")&&(p=iu(p)),Bn(p+"")||p==="auto"||(p+=vi.units[M]||Bn(Ua(t,M))||""),(p+"").charAt(1)==="="&&(p=Ua(t,M))):p=Ua(t,M),v=parseFloat(p),U=y==="string"&&_.charAt(1)==="="&&_.substr(0,2),U&&(_=_.substr(2)),g=parseFloat(_),M in ia&&(M==="autoAlpha"&&(v===1&&Ua(t,"visibility")==="hidden"&&g&&(v=0),B.push("visibility",0,f.visibility),yr(this,f,"visibility",v?"inherit":"hidden",g?"inherit":"hidden",!g)),M!=="scale"&&M!=="transform"&&(M=ia[M],~M.indexOf(",")&&(M=M.split(",")[0]))),A=M in za,A){if(this.styles.save(M),y==="string"&&_.substring(0,6)==="var(--"&&(_=Oi(t,_.substring(4,_.indexOf(")"))),g=parseFloat(_)),L||(P=t._gsap,P.renderTransform&&!n.parseTransform||ou(t,n.parseTransform),O=n.smoothOrigin!==!1&&P.smooth,L=this._pt=new ti(this._pt,f,Ke,0,1,P.renderTransform,P,0,-1),L.dep=1),M==="scale")this._pt=new ti(this._pt,P,"scaleY",P.scaleY,(U?Ao(P.scaleY,U+g):g)-P.scaleY||0,zp),this._pt.u=0,c.push("scaleY",M),M+="X";else if(M==="transformOrigin"){B.push(ei,0,f[ei]),_=fb(_),P.svg?Fp(t,_,0,O,0,this):(S=parseFloat(_.split(" ")[2])||0,S!==P.zOrigin&&yr(this,P,"zOrigin",P.zOrigin,S),yr(this,f,M,df(p),df(_)));continue}else if(M==="svgOrigin"){Fp(t,_,1,O,0,this);continue}else if(M in My){mb(this,P,M,v,U?Ao(v,U+_):_);continue}else if(M==="smoothOrigin"){yr(this,P,"smooth",P.smooth,_);continue}else if(M==="force3D"){P[M]=_;continue}else if(M==="transform"){_b(this,_,t);continue}}else M in f||(M=Io(M)||M);if(A||(g||g===0)&&(v||v===0)&&!Q1.test(_)&&M in f)x=(p+"").substr((v+"").length),g||(g=0),S=Bn(_)||(M in vi.units?vi.units[M]:x),x!==S&&(v=Rr(t,M,p,S)),this._pt=new ti(this._pt,A?P:f,M,v,(U?Ao(v,U+g):g)-v,!A&&(S==="px"||M==="zIndex")&&n.autoRound!==!1?tb:zp),this._pt.u=S||0,x!==S&&S!=="%"&&(this._pt.b=p,this._pt.r=$1);else if(M in f)cb.call(this,t,M,p,U?U+_:_);else if(M in t)this.add(t,M,p||t[M],U?U+_:_,s,u);else if(M!=="parseTransform"){Dm(M,_);continue}A||(M in f?B.push(M,0,f[M]):typeof t[M]=="function"?B.push(M,2,t[M]()):B.push(M,1,p||t[M])),c.push(M)}}w&&dy(this)},render:function(t,n){if(n.tween._time||!Gm())for(var a=n._pt;a;)a.r(t,a.d),a=a._next;else n.styles.revert()},get:Ua,aliases:ia,getSetter:function(t,n,a){var s=ia[n];return s&&s.indexOf(",")<0&&(n=s),n in za&&n!==ei&&(t._gsap.x||Ua(t,"x"))?a&&ax===a?n==="scale"?ab:ib:(ax=a||{})&&(n==="scale"?rb:sb):t.style&&!Rm(t.style[n])?eb:~n.indexOf("-")?nb:Bm(t,n)},core:{_removeProperty:ms,_getMatrix:km}};ai.utils.checkPrefix=Io;ai.core.getStyleSaver=vy;(function(o,t,n,a){var s=$n(o+","+t+","+n,function(u){za[u]=1});$n(t,function(u){vi.units[u]="deg",My[u]=1}),ia[s[13]]=o+","+t,$n(a,function(u){var c=u.split(":");ia[c[1]]=s[c[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");$n("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(o){vi.units[o]="px"});ai.registerPlugin(by);var Xm=ai.registerPlugin(by)||ai;Xm.core.Tween;/*!
 * SplitText 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2025, GreenSock. All rights reserved. Subject to the terms at https://gsap.com/standard-license.
 * @author: Jack Doyle
 */let Gl,io,Hp,gb=()=>Hp||Wm.register(window.gsap),dx=typeof Intl<"u"?new Intl.Segmenter:0,pf=o=>typeof o=="string"?pf(document.querySelectorAll(o)):"length"in o?Array.from(o):[o],px=o=>pf(o).filter(t=>t instanceof HTMLElement),Gp=[],Kd=function(){},vb=/\s+/g,mx=new RegExp("\\p{RI}\\p{RI}|\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?(\\u{200D}\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?)*|.","gu"),_x={left:0,top:0,width:0,height:0},gx=(o,t)=>{if(t){let n=new Set(o.join("").match(t)||Gp),a=o.length,s,u,c,f;if(n.size)for(;--a>-1;){u=o[a];for(c of n)if(c.startsWith(u)&&c.length>u.length){for(s=0,f=u;c.startsWith(f+=o[a+ ++s])&&f.length<c.length;);if(s&&f.length===c.length){o[a]=c,o.splice(a+1,s);break}}}}return o},vx=o=>window.getComputedStyle(o).display==="inline"&&(o.style.display="inline-block"),ao=(o,t,n)=>t.insertBefore(typeof o=="string"?document.createTextNode(o):o,n),Vp=(o,t,n)=>{let a=t[o+"sClass"]||"",{tag:s="div",aria:u="auto",propIndex:c=!1}=t,f=o==="line"?"block":"inline-block",d=a.indexOf("++")>-1,p=_=>{let g=document.createElement(s),v=n.length+1;return a&&(g.className=a+(d?" "+a+v:"")),c&&g.style.setProperty("--"+o,v+""),u!=="none"&&g.setAttribute("aria-hidden","true"),s!=="span"&&(g.style.position="relative",g.style.display=f),g.textContent=_,n.push(g),g};return d&&(a=a.replace("++","")),p.collection=n,p},xb=(o,t,n,a)=>{let s=Vp("line",n,a),u=window.getComputedStyle(o).textAlign||"left";return(c,f)=>{let d=s("");for(d.style.textAlign=u,o.insertBefore(d,t[c]);c<f;c++)d.appendChild(t[c]);d.normalize()}},Ay=(o,t,n,a,s,u,c,f,d,p)=>{var _;let g=Array.from(o.childNodes),v=0,{wordDelimiter:y,reduceWhiteSpace:T=!0,prepareText:M}=t,x=o.getBoundingClientRect(),S=x,U=!T&&window.getComputedStyle(o).whiteSpace.substring(0,3)==="pre",A=0,L=n.collection,P,O,w,B,b,R,F,X,Y,nt,at,I,k,q,ht,dt,z,$;for(typeof y=="object"?(w=y.delimiter||y,O=y.replaceWith||""):O=y===""?"":y||" ",P=O!==" ";v<g.length;v++)if(B=g[v],B.nodeType===3){for(ht=B.textContent||"",T?ht=ht.replace(vb," "):U&&(ht=ht.replace(/\n/g,O+`
`)),M&&(ht=M(ht,o)),B.textContent=ht,b=O||w?ht.split(w||O):ht.match(f)||Gp,z=b[b.length-1],X=P?z.slice(-1)===" ":!z,z||b.pop(),S=x,F=P?b[0].charAt(0)===" ":!b[0],F&&ao(" ",o,B),b[0]||b.shift(),gx(b,d),u&&p||(B.textContent=""),Y=1;Y<=b.length;Y++)if(dt=b[Y-1],!T&&U&&dt.charAt(0)===`
`&&((_=B.previousSibling)==null||_.remove(),ao(document.createElement("br"),o,B),dt=dt.slice(1)),!T&&dt==="")ao(O,o,B);else if(dt===" ")o.insertBefore(document.createTextNode(" "),B);else{if(P&&dt.charAt(0)===" "&&ao(" ",o,B),A&&Y===1&&!F&&L.indexOf(A.parentNode)>-1?(R=L[L.length-1],R.appendChild(document.createTextNode(a?"":dt))):(R=n(a?"":dt),ao(R,o,B),A&&Y===1&&!F&&R.insertBefore(A,R.firstChild)),a)for(at=dx?gx([...dx.segment(dt)].map(mt=>mt.segment),d):dt.match(f)||Gp,$=0;$<at.length;$++)R.appendChild(at[$]===" "?document.createTextNode(" "):a(at[$]));if(u&&p){if(ht=B.textContent=ht.substring(dt.length+1,ht.length),nt=R.getBoundingClientRect(),nt.top>S.top&&nt.left<=S.left){for(I=o.cloneNode(),k=o.childNodes[0];k&&k!==R;)q=k,k=k.nextSibling,I.appendChild(q);o.parentNode.insertBefore(I,o),s&&vx(I)}S=nt}(Y<b.length||X)&&ao(Y>=b.length?" ":P&&dt.slice(-1)===" "?" "+O:O,o,B)}o.removeChild(B),A=0}else B.nodeType===1&&(c&&c.indexOf(B)>-1?(L.indexOf(B.previousSibling)>-1&&L[L.length-1].appendChild(B),A=B):(Ay(B,t,n,a,s,u,c,f,d,!0),A=0),s&&vx(B))};const Ry=class Cy{constructor(t,n){this.isSplit=!1,gb(),this.elements=px(t),this.chars=[],this.words=[],this.lines=[],this.masks=[],this.vars=n,this._split=()=>this.isSplit&&this.split(this.vars);let a=[],s,u=()=>{let c=a.length,f;for(;c--;){f=a[c];let d=f.element.offsetWidth;if(d!==f.width){f.width=d,this._split();return}}};this._data={orig:a,obs:typeof ResizeObserver<"u"&&new ResizeObserver(()=>{clearTimeout(s),s=setTimeout(u,200)})},Kd(this),this.split(n)}split(t){this.isSplit&&this.revert(),this.vars=t=t||this.vars||{};let{type:n="chars,words,lines",aria:a="auto",deepSlice:s=!0,smartWrap:u,onSplit:c,autoSplit:f=!1,specialChars:d,mask:p}=this.vars,_=n.indexOf("lines")>-1,g=n.indexOf("chars")>-1,v=n.indexOf("words")>-1,y=g&&!v&&!_,T=d&&("push"in d?new RegExp("(?:"+d.join("|")+")","gu"):d),M=T?new RegExp(T.source+"|"+mx.source,"gu"):mx,x=!!t.ignore&&px(t.ignore),{orig:S,animTime:U,obs:A}=this._data,L;return(g||v||_)&&(this.elements.forEach((P,O)=>{S[O]={element:P,html:P.innerHTML,ariaL:P.getAttribute("aria-label"),ariaH:P.getAttribute("aria-hidden")},a==="auto"?P.setAttribute("aria-label",(P.textContent||"").trim()):a==="hidden"&&P.setAttribute("aria-hidden","true");let w=[],B=[],b=[],R=g?Vp("char",t,w):null,F=Vp("word",t,B),X,Y,nt,at;if(Ay(P,t,F,R,y,s&&(_||y),x,M,T,!1),_){let I=pf(P.childNodes),k=xb(P,I,t,b),q,ht=[],dt=0,z=I.map(mt=>mt.nodeType===1?mt.getBoundingClientRect():_x),$=_x;for(X=0;X<I.length;X++)q=I[X],q.nodeType===1&&(q.nodeName==="BR"?(ht.push(q),k(dt,X+1),dt=X+1,$=z[dt]):(X&&z[X].top>$.top&&z[X].left<=$.left&&(k(dt,X),dt=X),$=z[X]));dt<X&&k(dt,X),ht.forEach(mt=>{var j;return(j=mt.parentNode)==null?void 0:j.removeChild(mt)})}if(!v){for(X=0;X<B.length;X++)if(Y=B[X],g||!Y.nextSibling||Y.nextSibling.nodeType!==3)if(u&&!_){for(nt=document.createElement("span"),nt.style.whiteSpace="nowrap";Y.firstChild;)nt.appendChild(Y.firstChild);Y.replaceWith(nt)}else Y.replaceWith(...Y.childNodes);else at=Y.nextSibling,at&&at.nodeType===3&&(at.textContent=(Y.textContent||"")+(at.textContent||""),Y.remove());B.length=0,P.normalize()}this.lines.push(...b),this.words.push(...B),this.chars.push(...w)}),p&&this[p]&&this.masks.push(...this[p].map(P=>{let O=P.cloneNode();return P.replaceWith(O),O.appendChild(P),P.className&&(O.className=P.className.replace(/(\b\w+\b)/g,"$1-mask")),O.style.overflow="clip",O}))),this.isSplit=!0,io&&(f?io.addEventListener("loadingdone",this._split):io.status==="loading"&&console.warn("SplitText called before fonts loaded")),(L=c&&c(this))&&L.totalTime&&(this._data.anim=U?L.totalTime(U):L),_&&f&&this.elements.forEach((P,O)=>{S[O].width=P.offsetWidth,A&&A.observe(P)}),this}revert(){var t,n;let{orig:a,anim:s,obs:u}=this._data;return u&&u.disconnect(),a.forEach(({element:c,html:f,ariaL:d,ariaH:p})=>{c.innerHTML=f,d?c.setAttribute("aria-label",d):c.removeAttribute("aria-label"),p?c.setAttribute("aria-hidden",p):c.removeAttribute("aria-hidden")}),this.chars.length=this.words.length=this.lines.length=a.length=this.masks.length=0,this.isSplit=!1,io==null||io.removeEventListener("loadingdone",this._split),s&&(this._data.animTime=s.totalTime(),s.revert()),(n=(t=this.vars).onRevert)==null||n.call(t,this),this}static create(t,n){return new Cy(t,n)}static register(t){Gl=Gl||t||window.gsap,Gl&&(pf=Gl.utils.toArray,Kd=Gl.core.context||Kd),!Hp&&window.innerWidth>0&&(io=document.fonts,Hp=!0)}};Ry.version="3.13.0";let Wm=Ry;Xm.registerPlugin(Wm);function xx({text:o,className:t="",align:n="left"}){const a=Xt.useRef(null);return Xt.useLayoutEffect(()=>{var d;const s=a.current;if(!s)return;let u=null,c=!1;const f=()=>{c||!s.isConnected||(u=new Wm(s,{type:"chars",charsClass:"char-item"}),Xm.from(u.chars,{y:24,opacity:0,duration:.5,ease:"power3.out",stagger:.025,overwrite:!0}))};return(d=document.fonts)!=null&&d.ready?document.fonts.ready.then(f):f(),()=>{c=!0;try{u==null||u.revert()}catch{}}},[o]),Mt.jsx("div",{ref:a,className:`${n==="right"?"text-right":""} ${t}`,style:{fontKerning:"none"},"aria-live":"polite",children:o})}function Sb(){const[o,t]=Xt.useState(!1),{theme:n,setTheme:a}=DT(),{currentIndex:s,sectionNames:u,totalSections:c}=yf();Xt.useEffect(()=>{t(!0)},[]);const f=u[s]??"Home",d=`${String(s+1).padStart(2,"0")}/${String(c).padStart(2,"0")}`;return Mt.jsxs(Mt.Fragment,{children:[Mt.jsxs("div",{className:"fixed top-4 left-4 z-40 flex flex-col gap-1 text-2xl text-muted-foreground font-display","data-font":"display",children:[Mt.jsx("a",{href:"#",className:"text-foreground hover:text-muted-foreground transition-colors w-fit",children:"muhsalmon.com"}),Mt.jsx("span",{className:"text-xs",children:"All Right Reserved © 2026"})]}),Mt.jsx("div",{className:"fixed top-4 right-4 z-40 font-display","data-font":"display",children:o&&Mt.jsx("button",{onClick:()=>a(n==="dark"?"light":"dark"),className:"inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring rounded","aria-label":"Toggle theme",children:n==="dark"?Mt.jsxs(Mt.Fragment,{children:[Mt.jsx("span",{children:"Dark Mode"}),Mt.jsx(e1,{className:"h-3.5 w-3.5"})]}):Mt.jsxs(Mt.Fragment,{children:[Mt.jsx("span",{children:"Light Mode"}),Mt.jsx($T,{className:"h-3.5 w-3.5"})]})})}),Mt.jsx("div",{className:"fixed bottom-4 left-4 z-40 text-[6rem] text-muted-foreground font-display","data-font":"display",children:Mt.jsx(xx,{text:f,align:"left"},f)},`section-name-${s}`),Mt.jsx("div",{className:"fixed bottom-4 right-4 z-40 text-[6rem] text-muted-foreground tabular-nums font-display","data-font":"display",children:Mt.jsx(xx,{text:d,align:"right"},d)},`section-counter-${s}`)]})}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const qm="167",yb=0,Sx=1,Mb=2,wy=1,Eb=2,wa=3,Cr=0,ni=1,La=2,Tr=0,wo=1,yx=2,Mx=3,Ex=4,Tb=5,rs=100,bb=101,Ab=102,Rb=103,Cb=104,wb=200,Db=201,Ub=202,Lb=203,kp=204,Xp=205,Nb=206,Ob=207,Pb=208,zb=209,Ib=210,Bb=211,Fb=212,Hb=213,Gb=214,Vb=0,kb=1,Xb=2,mf=3,Wb=4,qb=5,Yb=6,jb=7,Dy=0,Zb=1,Kb=2,br=0,Qb=1,Jb=2,$b=3,tA=4,eA=5,nA=6,iA=7,Uy=300,Bo=301,Fo=302,Wp=303,qp=304,bf=306,Yp=1e3,ls=1001,jp=1002,Pi=1003,aA=1004,Rc=1005,qi=1006,Qd=1007,us=1008,Ia=1009,Ly=1010,Ny=1011,lu=1012,Ym=1013,_s=1014,Na=1015,cu=1016,jm=1017,Zm=1018,Ho=1020,Oy=35902,Py=1021,zy=1022,Yi=1023,Iy=1024,By=1025,Do=1026,Go=1027,Fy=1028,Km=1029,Hy=1030,Qm=1031,Jm=1033,$c=33776,tf=33777,ef=33778,nf=33779,Zp=35840,Kp=35841,Qp=35842,Jp=35843,$p=36196,tm=37492,em=37496,nm=37808,im=37809,am=37810,rm=37811,sm=37812,om=37813,lm=37814,um=37815,cm=37816,fm=37817,hm=37818,dm=37819,pm=37820,mm=37821,af=36492,_m=36494,gm=36495,Gy=36283,vm=36284,xm=36285,Sm=36286,rA=3200,sA=3201,oA=0,lA=1,vr="",Xi="srgb",Dr="srgb-linear",$m="display-p3",Af="display-p3-linear",_f="linear",ke="srgb",gf="rec709",vf="p3",ro=7680,Tx=519,uA=512,cA=513,fA=514,Vy=515,hA=516,dA=517,pA=518,mA=519,bx=35044,Ax="300 es",Oa=2e3,xf=2001;class ko{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const a=this._listeners;a[t]===void 0&&(a[t]=[]),a[t].indexOf(n)===-1&&a[t].push(n)}hasEventListener(t,n){if(this._listeners===void 0)return!1;const a=this._listeners;return a[t]!==void 0&&a[t].indexOf(n)!==-1}removeEventListener(t,n){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const u=s.indexOf(n);u!==-1&&s.splice(u,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const a=this._listeners[t.type];if(a!==void 0){t.target=this;const s=a.slice(0);for(let u=0,c=s.length;u<c;u++)s[u].call(this,t);t.target=null}}}const zn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Jd=Math.PI/180,ym=180/Math.PI;function fu(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,a=Math.random()*4294967295|0;return(zn[o&255]+zn[o>>8&255]+zn[o>>16&255]+zn[o>>24&255]+"-"+zn[t&255]+zn[t>>8&255]+"-"+zn[t>>16&15|64]+zn[t>>24&255]+"-"+zn[n&63|128]+zn[n>>8&255]+"-"+zn[n>>16&255]+zn[n>>24&255]+zn[a&255]+zn[a>>8&255]+zn[a>>16&255]+zn[a>>24&255]).toLowerCase()}function Qn(o,t,n){return Math.max(t,Math.min(n,o))}function _A(o,t){return(o%t+t)%t}function $d(o,t,n){return(1-n)*o+n*t}function Vl(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Kn(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class xe{constructor(t=0,n=0){xe.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,a=this.y,s=t.elements;return this.x=s[0]*n+s[3]*a+s[6],this.y=s[1]*n+s[4]*a+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=Math.max(t.x,Math.min(n.x,this.x)),this.y=Math.max(t.y,Math.min(n.y,this.y)),this}clampScalar(t,n){return this.x=Math.max(t,Math.min(n,this.x)),this.y=Math.max(t,Math.min(n,this.y)),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Math.max(t,Math.min(n,a)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(t)/n;return Math.acos(Qn(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,a=this.y-t.y;return n*n+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const a=Math.cos(n),s=Math.sin(n),u=this.x-t.x,c=this.y-t.y;return this.x=u*a-c*s+t.x,this.y=u*s+c*a+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class le{constructor(t,n,a,s,u,c,f,d,p){le.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,a,s,u,c,f,d,p)}set(t,n,a,s,u,c,f,d,p){const _=this.elements;return _[0]=t,_[1]=s,_[2]=f,_[3]=n,_[4]=u,_[5]=d,_[6]=a,_[7]=c,_[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const n=this.elements,a=t.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],this}extractBasis(t,n,a){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),a.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const a=t.elements,s=n.elements,u=this.elements,c=a[0],f=a[3],d=a[6],p=a[1],_=a[4],g=a[7],v=a[2],y=a[5],T=a[8],M=s[0],x=s[3],S=s[6],U=s[1],A=s[4],L=s[7],P=s[2],O=s[5],w=s[8];return u[0]=c*M+f*U+d*P,u[3]=c*x+f*A+d*O,u[6]=c*S+f*L+d*w,u[1]=p*M+_*U+g*P,u[4]=p*x+_*A+g*O,u[7]=p*S+_*L+g*w,u[2]=v*M+y*U+T*P,u[5]=v*x+y*A+T*O,u[8]=v*S+y*L+T*w,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],a=t[1],s=t[2],u=t[3],c=t[4],f=t[5],d=t[6],p=t[7],_=t[8];return n*c*_-n*f*p-a*u*_+a*f*d+s*u*p-s*c*d}invert(){const t=this.elements,n=t[0],a=t[1],s=t[2],u=t[3],c=t[4],f=t[5],d=t[6],p=t[7],_=t[8],g=_*c-f*p,v=f*d-_*u,y=p*u-c*d,T=n*g+a*v+s*y;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/T;return t[0]=g*M,t[1]=(s*p-_*a)*M,t[2]=(f*a-s*c)*M,t[3]=v*M,t[4]=(_*n-s*d)*M,t[5]=(s*u-f*n)*M,t[6]=y*M,t[7]=(a*d-p*n)*M,t[8]=(c*n-a*u)*M,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,a,s,u,c,f){const d=Math.cos(u),p=Math.sin(u);return this.set(a*d,a*p,-a*(d*c+p*f)+c+t,-s*p,s*d,-s*(-p*c+d*f)+f+n,0,0,1),this}scale(t,n){return this.premultiply(tp.makeScale(t,n)),this}rotate(t){return this.premultiply(tp.makeRotation(-t)),this}translate(t,n){return this.premultiply(tp.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,-a,0,a,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){const n=this.elements,a=t.elements;for(let s=0;s<9;s++)if(n[s]!==a[s])return!1;return!0}fromArray(t,n=0){for(let a=0;a<9;a++)this.elements[a]=t[a+n];return this}toArray(t=[],n=0){const a=this.elements;return t[n]=a[0],t[n+1]=a[1],t[n+2]=a[2],t[n+3]=a[3],t[n+4]=a[4],t[n+5]=a[5],t[n+6]=a[6],t[n+7]=a[7],t[n+8]=a[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const tp=new le;function ky(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function Sf(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function gA(){const o=Sf("canvas");return o.style.display="block",o}const Rx={};function tu(o){o in Rx||(Rx[o]=!0,console.warn(o))}function vA(o,t,n){return new Promise(function(a,s){function u(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:s();break;case o.TIMEOUT_EXPIRED:setTimeout(u,n);break;default:a()}}setTimeout(u,n)})}const Cx=new le().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),wx=new le().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),kl={[Dr]:{transfer:_f,primaries:gf,luminanceCoefficients:[.2126,.7152,.0722],toReference:o=>o,fromReference:o=>o},[Xi]:{transfer:ke,primaries:gf,luminanceCoefficients:[.2126,.7152,.0722],toReference:o=>o.convertSRGBToLinear(),fromReference:o=>o.convertLinearToSRGB()},[Af]:{transfer:_f,primaries:vf,luminanceCoefficients:[.2289,.6917,.0793],toReference:o=>o.applyMatrix3(wx),fromReference:o=>o.applyMatrix3(Cx)},[$m]:{transfer:ke,primaries:vf,luminanceCoefficients:[.2289,.6917,.0793],toReference:o=>o.convertSRGBToLinear().applyMatrix3(wx),fromReference:o=>o.applyMatrix3(Cx).convertLinearToSRGB()}},xA=new Set([Dr,Af]),Re={enabled:!0,_workingColorSpace:Dr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(o){if(!xA.has(o))throw new Error(`Unsupported working color space, "${o}".`);this._workingColorSpace=o},convert:function(o,t,n){if(this.enabled===!1||t===n||!t||!n)return o;const a=kl[t].toReference,s=kl[n].fromReference;return s(a(o))},fromWorkingColorSpace:function(o,t){return this.convert(o,this._workingColorSpace,t)},toWorkingColorSpace:function(o,t){return this.convert(o,t,this._workingColorSpace)},getPrimaries:function(o){return kl[o].primaries},getTransfer:function(o){return o===vr?_f:kl[o].transfer},getLuminanceCoefficients:function(o,t=this._workingColorSpace){return o.fromArray(kl[t].luminanceCoefficients)}};function Uo(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function ep(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let so;class SA{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{so===void 0&&(so=Sf("canvas")),so.width=t.width,so.height=t.height;const a=so.getContext("2d");t instanceof ImageData?a.putImageData(t,0,0):a.drawImage(t,0,0,t.width,t.height),n=so}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const n=Sf("canvas");n.width=t.width,n.height=t.height;const a=n.getContext("2d");a.drawImage(t,0,0,t.width,t.height);const s=a.getImageData(0,0,t.width,t.height),u=s.data;for(let c=0;c<u.length;c++)u[c]=Uo(u[c]/255)*255;return a.putImageData(s,0,0),n}else if(t.data){const n=t.data.slice(0);for(let a=0;a<n.length;a++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[a]=Math.floor(Uo(n[a]/255)*255):n[a]=Uo(n[a]);return{data:n,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let yA=0;class Xy{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:yA++}),this.uuid=fu(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const a={uuid:this.uuid,url:""},s=this.data;if(s!==null){let u;if(Array.isArray(s)){u=[];for(let c=0,f=s.length;c<f;c++)s[c].isDataTexture?u.push(np(s[c].image)):u.push(np(s[c]))}else u=np(s);a.url=u}return n||(t.images[this.uuid]=a),a}}function np(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?SA.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let MA=0;class ii extends ko{constructor(t=ii.DEFAULT_IMAGE,n=ii.DEFAULT_MAPPING,a=ls,s=ls,u=qi,c=us,f=Yi,d=Ia,p=ii.DEFAULT_ANISOTROPY,_=vr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:MA++}),this.uuid=fu(),this.name="",this.source=new Xy(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=a,this.wrapT=s,this.magFilter=u,this.minFilter=c,this.anisotropy=p,this.format=f,this.internalFormat=null,this.type=d,this.offset=new xe(0,0),this.repeat=new xe(1,1),this.center=new xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new le,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const a={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(a.userData=this.userData),n||(t.textures[this.uuid]=a),a}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Uy)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Yp:t.x=t.x-Math.floor(t.x);break;case ls:t.x=t.x<0?0:1;break;case jp:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Yp:t.y=t.y-Math.floor(t.y);break;case ls:t.y=t.y<0?0:1;break;case jp:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}ii.DEFAULT_IMAGE=null;ii.DEFAULT_MAPPING=Uy;ii.DEFAULT_ANISOTROPY=1;class En{constructor(t=0,n=0,a=0,s=1){En.prototype.isVector4=!0,this.x=t,this.y=n,this.z=a,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,a,s){return this.x=t,this.y=n,this.z=a,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const n=this.x,a=this.y,s=this.z,u=this.w,c=t.elements;return this.x=c[0]*n+c[4]*a+c[8]*s+c[12]*u,this.y=c[1]*n+c[5]*a+c[9]*s+c[13]*u,this.z=c[2]*n+c[6]*a+c[10]*s+c[14]*u,this.w=c[3]*n+c[7]*a+c[11]*s+c[15]*u,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,a,s,u;const d=t.elements,p=d[0],_=d[4],g=d[8],v=d[1],y=d[5],T=d[9],M=d[2],x=d[6],S=d[10];if(Math.abs(_-v)<.01&&Math.abs(g-M)<.01&&Math.abs(T-x)<.01){if(Math.abs(_+v)<.1&&Math.abs(g+M)<.1&&Math.abs(T+x)<.1&&Math.abs(p+y+S-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const A=(p+1)/2,L=(y+1)/2,P=(S+1)/2,O=(_+v)/4,w=(g+M)/4,B=(T+x)/4;return A>L&&A>P?A<.01?(a=0,s=.707106781,u=.707106781):(a=Math.sqrt(A),s=O/a,u=w/a):L>P?L<.01?(a=.707106781,s=0,u=.707106781):(s=Math.sqrt(L),a=O/s,u=B/s):P<.01?(a=.707106781,s=.707106781,u=0):(u=Math.sqrt(P),a=w/u,s=B/u),this.set(a,s,u,n),this}let U=Math.sqrt((x-T)*(x-T)+(g-M)*(g-M)+(v-_)*(v-_));return Math.abs(U)<.001&&(U=1),this.x=(x-T)/U,this.y=(g-M)/U,this.z=(v-_)/U,this.w=Math.acos((p+y+S-1)/2),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=Math.max(t.x,Math.min(n.x,this.x)),this.y=Math.max(t.y,Math.min(n.y,this.y)),this.z=Math.max(t.z,Math.min(n.z,this.z)),this.w=Math.max(t.w,Math.min(n.w,this.w)),this}clampScalar(t,n){return this.x=Math.max(t,Math.min(n,this.x)),this.y=Math.max(t,Math.min(n,this.y)),this.z=Math.max(t,Math.min(n,this.z)),this.w=Math.max(t,Math.min(n,this.w)),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Math.max(t,Math.min(n,a)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this.z=t.z+(n.z-t.z)*a,this.w=t.w+(n.w-t.w)*a,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class EA extends ko{constructor(t=1,n=1,a={}){super(),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=1,this.scissor=new En(0,0,t,n),this.scissorTest=!1,this.viewport=new En(0,0,t,n);const s={width:t,height:n,depth:1};a=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:qi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},a);const u=new ii(s,a.mapping,a.wrapS,a.wrapT,a.magFilter,a.minFilter,a.format,a.type,a.anisotropy,a.colorSpace);u.flipY=!1,u.generateMipmaps=a.generateMipmaps,u.internalFormat=a.internalFormat,this.textures=[];const c=a.count;for(let f=0;f<c;f++)this.textures[f]=u.clone(),this.textures[f].isRenderTargetTexture=!0;this.depthBuffer=a.depthBuffer,this.stencilBuffer=a.stencilBuffer,this.resolveDepthBuffer=a.resolveDepthBuffer,this.resolveStencilBuffer=a.resolveStencilBuffer,this.depthTexture=a.depthTexture,this.samples=a.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,n,a=1){if(this.width!==t||this.height!==n||this.depth!==a){this.width=t,this.height=n,this.depth=a;for(let s=0,u=this.textures.length;s<u;s++)this.textures[s].image.width=t,this.textures[s].image.height=n,this.textures[s].image.depth=a;this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let a=0,s=t.textures.length;a<s;a++)this.textures[a]=t.textures[a].clone(),this.textures[a].isRenderTargetTexture=!0;const n=Object.assign({},t.texture.image);return this.texture.source=new Xy(n),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class gs extends EA{constructor(t=1,n=1,a={}){super(t,n,a),this.isWebGLRenderTarget=!0}}class Wy extends ii{constructor(t=null,n=1,a=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:a,depth:s},this.magFilter=Pi,this.minFilter=Pi,this.wrapR=ls,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class TA extends ii{constructor(t=null,n=1,a=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:a,depth:s},this.magFilter=Pi,this.minFilter=Pi,this.wrapR=ls,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class hu{constructor(t=0,n=0,a=0,s=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=a,this._w=s}static slerpFlat(t,n,a,s,u,c,f){let d=a[s+0],p=a[s+1],_=a[s+2],g=a[s+3];const v=u[c+0],y=u[c+1],T=u[c+2],M=u[c+3];if(f===0){t[n+0]=d,t[n+1]=p,t[n+2]=_,t[n+3]=g;return}if(f===1){t[n+0]=v,t[n+1]=y,t[n+2]=T,t[n+3]=M;return}if(g!==M||d!==v||p!==y||_!==T){let x=1-f;const S=d*v+p*y+_*T+g*M,U=S>=0?1:-1,A=1-S*S;if(A>Number.EPSILON){const P=Math.sqrt(A),O=Math.atan2(P,S*U);x=Math.sin(x*O)/P,f=Math.sin(f*O)/P}const L=f*U;if(d=d*x+v*L,p=p*x+y*L,_=_*x+T*L,g=g*x+M*L,x===1-f){const P=1/Math.sqrt(d*d+p*p+_*_+g*g);d*=P,p*=P,_*=P,g*=P}}t[n]=d,t[n+1]=p,t[n+2]=_,t[n+3]=g}static multiplyQuaternionsFlat(t,n,a,s,u,c){const f=a[s],d=a[s+1],p=a[s+2],_=a[s+3],g=u[c],v=u[c+1],y=u[c+2],T=u[c+3];return t[n]=f*T+_*g+d*y-p*v,t[n+1]=d*T+_*v+p*g-f*y,t[n+2]=p*T+_*y+f*v-d*g,t[n+3]=_*T-f*g-d*v-p*y,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,a,s){return this._x=t,this._y=n,this._z=a,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){const a=t._x,s=t._y,u=t._z,c=t._order,f=Math.cos,d=Math.sin,p=f(a/2),_=f(s/2),g=f(u/2),v=d(a/2),y=d(s/2),T=d(u/2);switch(c){case"XYZ":this._x=v*_*g+p*y*T,this._y=p*y*g-v*_*T,this._z=p*_*T+v*y*g,this._w=p*_*g-v*y*T;break;case"YXZ":this._x=v*_*g+p*y*T,this._y=p*y*g-v*_*T,this._z=p*_*T-v*y*g,this._w=p*_*g+v*y*T;break;case"ZXY":this._x=v*_*g-p*y*T,this._y=p*y*g+v*_*T,this._z=p*_*T+v*y*g,this._w=p*_*g-v*y*T;break;case"ZYX":this._x=v*_*g-p*y*T,this._y=p*y*g+v*_*T,this._z=p*_*T-v*y*g,this._w=p*_*g+v*y*T;break;case"YZX":this._x=v*_*g+p*y*T,this._y=p*y*g+v*_*T,this._z=p*_*T-v*y*g,this._w=p*_*g-v*y*T;break;case"XZY":this._x=v*_*g-p*y*T,this._y=p*y*g-v*_*T,this._z=p*_*T+v*y*g,this._w=p*_*g+v*y*T;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){const a=n/2,s=Math.sin(a);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(a),this._onChangeCallback(),this}setFromRotationMatrix(t){const n=t.elements,a=n[0],s=n[4],u=n[8],c=n[1],f=n[5],d=n[9],p=n[2],_=n[6],g=n[10],v=a+f+g;if(v>0){const y=.5/Math.sqrt(v+1);this._w=.25/y,this._x=(_-d)*y,this._y=(u-p)*y,this._z=(c-s)*y}else if(a>f&&a>g){const y=2*Math.sqrt(1+a-f-g);this._w=(_-d)/y,this._x=.25*y,this._y=(s+c)/y,this._z=(u+p)/y}else if(f>g){const y=2*Math.sqrt(1+f-a-g);this._w=(u-p)/y,this._x=(s+c)/y,this._y=.25*y,this._z=(d+_)/y}else{const y=2*Math.sqrt(1+g-a-f);this._w=(c-s)/y,this._x=(u+p)/y,this._y=(d+_)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let a=t.dot(n)+1;return a<Number.EPSILON?(a=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=a):(this._x=0,this._y=-t.z,this._z=t.y,this._w=a)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=a),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Qn(this.dot(t),-1,1)))}rotateTowards(t,n){const a=this.angleTo(t);if(a===0)return this;const s=Math.min(1,n/a);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){const a=t._x,s=t._y,u=t._z,c=t._w,f=n._x,d=n._y,p=n._z,_=n._w;return this._x=a*_+c*f+s*p-u*d,this._y=s*_+c*d+u*f-a*p,this._z=u*_+c*p+a*d-s*f,this._w=c*_-a*f-s*d-u*p,this._onChangeCallback(),this}slerp(t,n){if(n===0)return this;if(n===1)return this.copy(t);const a=this._x,s=this._y,u=this._z,c=this._w;let f=c*t._w+a*t._x+s*t._y+u*t._z;if(f<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,f=-f):this.copy(t),f>=1)return this._w=c,this._x=a,this._y=s,this._z=u,this;const d=1-f*f;if(d<=Number.EPSILON){const y=1-n;return this._w=y*c+n*this._w,this._x=y*a+n*this._x,this._y=y*s+n*this._y,this._z=y*u+n*this._z,this.normalize(),this}const p=Math.sqrt(d),_=Math.atan2(p,f),g=Math.sin((1-n)*_)/p,v=Math.sin(n*_)/p;return this._w=c*g+this._w*v,this._x=a*g+this._x*v,this._y=s*g+this._y*v,this._z=u*g+this._z*v,this._onChangeCallback(),this}slerpQuaternions(t,n,a){return this.copy(t).slerp(n,a)}random(){const t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),a=Math.random(),s=Math.sqrt(1-a),u=Math.sqrt(a);return this.set(s*Math.sin(t),s*Math.cos(t),u*Math.sin(n),u*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ot{constructor(t=0,n=0,a=0){ot.prototype.isVector3=!0,this.x=t,this.y=n,this.z=a}set(t,n,a){return a===void 0&&(a=this.z),this.x=t,this.y=n,this.z=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(Dx.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(Dx.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,a=this.y,s=this.z,u=t.elements;return this.x=u[0]*n+u[3]*a+u[6]*s,this.y=u[1]*n+u[4]*a+u[7]*s,this.z=u[2]*n+u[5]*a+u[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,a=this.y,s=this.z,u=t.elements,c=1/(u[3]*n+u[7]*a+u[11]*s+u[15]);return this.x=(u[0]*n+u[4]*a+u[8]*s+u[12])*c,this.y=(u[1]*n+u[5]*a+u[9]*s+u[13])*c,this.z=(u[2]*n+u[6]*a+u[10]*s+u[14])*c,this}applyQuaternion(t){const n=this.x,a=this.y,s=this.z,u=t.x,c=t.y,f=t.z,d=t.w,p=2*(c*s-f*a),_=2*(f*n-u*s),g=2*(u*a-c*n);return this.x=n+d*p+c*g-f*_,this.y=a+d*_+f*p-u*g,this.z=s+d*g+u*_-c*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,a=this.y,s=this.z,u=t.elements;return this.x=u[0]*n+u[4]*a+u[8]*s,this.y=u[1]*n+u[5]*a+u[9]*s,this.z=u[2]*n+u[6]*a+u[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=Math.max(t.x,Math.min(n.x,this.x)),this.y=Math.max(t.y,Math.min(n.y,this.y)),this.z=Math.max(t.z,Math.min(n.z,this.z)),this}clampScalar(t,n){return this.x=Math.max(t,Math.min(n,this.x)),this.y=Math.max(t,Math.min(n,this.y)),this.z=Math.max(t,Math.min(n,this.z)),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Math.max(t,Math.min(n,a)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this.z=t.z+(n.z-t.z)*a,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){const a=t.x,s=t.y,u=t.z,c=n.x,f=n.y,d=n.z;return this.x=s*d-u*f,this.y=u*c-a*d,this.z=a*f-s*c,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const a=t.dot(this)/n;return this.copy(t).multiplyScalar(a)}projectOnPlane(t){return ip.copy(this).projectOnVector(t),this.sub(ip)}reflect(t){return this.sub(ip.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(t)/n;return Math.acos(Qn(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,a=this.y-t.y,s=this.z-t.z;return n*n+a*a+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,a){const s=Math.sin(n)*t;return this.x=s*Math.sin(a),this.y=Math.cos(n)*t,this.z=s*Math.cos(a),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,a){return this.x=t*Math.sin(n),this.y=a,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),a=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=a,this.z=s,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,n=Math.random()*2-1,a=Math.sqrt(1-n*n);return this.x=a*Math.cos(t),this.y=n,this.z=a*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ip=new ot,Dx=new hu;class du{constructor(t=new ot(1/0,1/0,1/0),n=new ot(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,a=t.length;n<a;n+=3)this.expandByPoint(Gi.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,a=t.count;n<a;n++)this.expandByPoint(Gi.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,a=t.length;n<a;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){const a=Gi.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(a),this.max.copy(t).add(a),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);const a=t.geometry;if(a!==void 0){const u=a.getAttribute("position");if(n===!0&&u!==void 0&&t.isInstancedMesh!==!0)for(let c=0,f=u.count;c<f;c++)t.isMesh===!0?t.getVertexPosition(c,Gi):Gi.fromBufferAttribute(u,c),Gi.applyMatrix4(t.matrixWorld),this.expandByPoint(Gi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Cc.copy(t.boundingBox)):(a.boundingBox===null&&a.computeBoundingBox(),Cc.copy(a.boundingBox)),Cc.applyMatrix4(t.matrixWorld),this.union(Cc)}const s=t.children;for(let u=0,c=s.length;u<c;u++)this.expandByObject(s[u],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Gi),Gi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,a;return t.normal.x>0?(n=t.normal.x*this.min.x,a=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,a=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,a+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,a+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,a+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,a+=t.normal.z*this.min.z),n<=-t.constant&&a>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Xl),wc.subVectors(this.max,Xl),oo.subVectors(t.a,Xl),lo.subVectors(t.b,Xl),uo.subVectors(t.c,Xl),hr.subVectors(lo,oo),dr.subVectors(uo,lo),Kr.subVectors(oo,uo);let n=[0,-hr.z,hr.y,0,-dr.z,dr.y,0,-Kr.z,Kr.y,hr.z,0,-hr.x,dr.z,0,-dr.x,Kr.z,0,-Kr.x,-hr.y,hr.x,0,-dr.y,dr.x,0,-Kr.y,Kr.x,0];return!ap(n,oo,lo,uo,wc)||(n=[1,0,0,0,1,0,0,0,1],!ap(n,oo,lo,uo,wc))?!1:(Dc.crossVectors(hr,dr),n=[Dc.x,Dc.y,Dc.z],ap(n,oo,lo,uo,wc))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Gi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Gi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ta[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ta[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ta[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ta[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ta[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ta[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ta[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ta[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ta),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Ta=[new ot,new ot,new ot,new ot,new ot,new ot,new ot,new ot],Gi=new ot,Cc=new du,oo=new ot,lo=new ot,uo=new ot,hr=new ot,dr=new ot,Kr=new ot,Xl=new ot,wc=new ot,Dc=new ot,Qr=new ot;function ap(o,t,n,a,s){for(let u=0,c=o.length-3;u<=c;u+=3){Qr.fromArray(o,u);const f=s.x*Math.abs(Qr.x)+s.y*Math.abs(Qr.y)+s.z*Math.abs(Qr.z),d=t.dot(Qr),p=n.dot(Qr),_=a.dot(Qr);if(Math.max(-Math.max(d,p,_),Math.min(d,p,_))>f)return!1}return!0}const bA=new du,Wl=new ot,rp=new ot;class t_{constructor(t=new ot,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){const a=this.center;n!==void 0?a.copy(n):bA.setFromPoints(t).getCenter(a);let s=0;for(let u=0,c=t.length;u<c;u++)s=Math.max(s,a.distanceToSquared(t[u]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){const a=this.center.distanceToSquared(t);return n.copy(t),a>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Wl.subVectors(t,this.center);const n=Wl.lengthSq();if(n>this.radius*this.radius){const a=Math.sqrt(n),s=(a-this.radius)*.5;this.center.addScaledVector(Wl,s/a),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(rp.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Wl.copy(t.center).add(rp)),this.expandByPoint(Wl.copy(t.center).sub(rp))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ba=new ot,sp=new ot,Uc=new ot,pr=new ot,op=new ot,Lc=new ot,lp=new ot;class AA{constructor(t=new ot,n=new ot(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ba)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);const a=n.dot(this.direction);return a<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,a)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const n=ba.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(ba.copy(this.origin).addScaledVector(this.direction,n),ba.distanceToSquared(t))}distanceSqToSegment(t,n,a,s){sp.copy(t).add(n).multiplyScalar(.5),Uc.copy(n).sub(t).normalize(),pr.copy(this.origin).sub(sp);const u=t.distanceTo(n)*.5,c=-this.direction.dot(Uc),f=pr.dot(this.direction),d=-pr.dot(Uc),p=pr.lengthSq(),_=Math.abs(1-c*c);let g,v,y,T;if(_>0)if(g=c*d-f,v=c*f-d,T=u*_,g>=0)if(v>=-T)if(v<=T){const M=1/_;g*=M,v*=M,y=g*(g+c*v+2*f)+v*(c*g+v+2*d)+p}else v=u,g=Math.max(0,-(c*v+f)),y=-g*g+v*(v+2*d)+p;else v=-u,g=Math.max(0,-(c*v+f)),y=-g*g+v*(v+2*d)+p;else v<=-T?(g=Math.max(0,-(-c*u+f)),v=g>0?-u:Math.min(Math.max(-u,-d),u),y=-g*g+v*(v+2*d)+p):v<=T?(g=0,v=Math.min(Math.max(-u,-d),u),y=v*(v+2*d)+p):(g=Math.max(0,-(c*u+f)),v=g>0?u:Math.min(Math.max(-u,-d),u),y=-g*g+v*(v+2*d)+p);else v=c>0?-u:u,g=Math.max(0,-(c*v+f)),y=-g*g+v*(v+2*d)+p;return a&&a.copy(this.origin).addScaledVector(this.direction,g),s&&s.copy(sp).addScaledVector(Uc,v),y}intersectSphere(t,n){ba.subVectors(t.center,this.origin);const a=ba.dot(this.direction),s=ba.dot(ba)-a*a,u=t.radius*t.radius;if(s>u)return null;const c=Math.sqrt(u-s),f=a-c,d=a+c;return d<0?null:f<0?this.at(d,n):this.at(f,n)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;const a=-(this.origin.dot(t.normal)+t.constant)/n;return a>=0?a:null}intersectPlane(t,n){const a=this.distanceToPlane(t);return a===null?null:this.at(a,n)}intersectsPlane(t){const n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let a,s,u,c,f,d;const p=1/this.direction.x,_=1/this.direction.y,g=1/this.direction.z,v=this.origin;return p>=0?(a=(t.min.x-v.x)*p,s=(t.max.x-v.x)*p):(a=(t.max.x-v.x)*p,s=(t.min.x-v.x)*p),_>=0?(u=(t.min.y-v.y)*_,c=(t.max.y-v.y)*_):(u=(t.max.y-v.y)*_,c=(t.min.y-v.y)*_),a>c||u>s||((u>a||isNaN(a))&&(a=u),(c<s||isNaN(s))&&(s=c),g>=0?(f=(t.min.z-v.z)*g,d=(t.max.z-v.z)*g):(f=(t.max.z-v.z)*g,d=(t.min.z-v.z)*g),a>d||f>s)||((f>a||a!==a)&&(a=f),(d<s||s!==s)&&(s=d),s<0)?null:this.at(a>=0?a:s,n)}intersectsBox(t){return this.intersectBox(t,ba)!==null}intersectTriangle(t,n,a,s,u){op.subVectors(n,t),Lc.subVectors(a,t),lp.crossVectors(op,Lc);let c=this.direction.dot(lp),f;if(c>0){if(s)return null;f=1}else if(c<0)f=-1,c=-c;else return null;pr.subVectors(this.origin,t);const d=f*this.direction.dot(Lc.crossVectors(pr,Lc));if(d<0)return null;const p=f*this.direction.dot(op.cross(pr));if(p<0||d+p>c)return null;const _=-f*pr.dot(lp);return _<0?null:this.at(_/c,u)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class vn{constructor(t,n,a,s,u,c,f,d,p,_,g,v,y,T,M,x){vn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,a,s,u,c,f,d,p,_,g,v,y,T,M,x)}set(t,n,a,s,u,c,f,d,p,_,g,v,y,T,M,x){const S=this.elements;return S[0]=t,S[4]=n,S[8]=a,S[12]=s,S[1]=u,S[5]=c,S[9]=f,S[13]=d,S[2]=p,S[6]=_,S[10]=g,S[14]=v,S[3]=y,S[7]=T,S[11]=M,S[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new vn().fromArray(this.elements)}copy(t){const n=this.elements,a=t.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],n[9]=a[9],n[10]=a[10],n[11]=a[11],n[12]=a[12],n[13]=a[13],n[14]=a[14],n[15]=a[15],this}copyPosition(t){const n=this.elements,a=t.elements;return n[12]=a[12],n[13]=a[13],n[14]=a[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,a){return t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),a.setFromMatrixColumn(this,2),this}makeBasis(t,n,a){return this.set(t.x,n.x,a.x,0,t.y,n.y,a.y,0,t.z,n.z,a.z,0,0,0,0,1),this}extractRotation(t){const n=this.elements,a=t.elements,s=1/co.setFromMatrixColumn(t,0).length(),u=1/co.setFromMatrixColumn(t,1).length(),c=1/co.setFromMatrixColumn(t,2).length();return n[0]=a[0]*s,n[1]=a[1]*s,n[2]=a[2]*s,n[3]=0,n[4]=a[4]*u,n[5]=a[5]*u,n[6]=a[6]*u,n[7]=0,n[8]=a[8]*c,n[9]=a[9]*c,n[10]=a[10]*c,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){const n=this.elements,a=t.x,s=t.y,u=t.z,c=Math.cos(a),f=Math.sin(a),d=Math.cos(s),p=Math.sin(s),_=Math.cos(u),g=Math.sin(u);if(t.order==="XYZ"){const v=c*_,y=c*g,T=f*_,M=f*g;n[0]=d*_,n[4]=-d*g,n[8]=p,n[1]=y+T*p,n[5]=v-M*p,n[9]=-f*d,n[2]=M-v*p,n[6]=T+y*p,n[10]=c*d}else if(t.order==="YXZ"){const v=d*_,y=d*g,T=p*_,M=p*g;n[0]=v+M*f,n[4]=T*f-y,n[8]=c*p,n[1]=c*g,n[5]=c*_,n[9]=-f,n[2]=y*f-T,n[6]=M+v*f,n[10]=c*d}else if(t.order==="ZXY"){const v=d*_,y=d*g,T=p*_,M=p*g;n[0]=v-M*f,n[4]=-c*g,n[8]=T+y*f,n[1]=y+T*f,n[5]=c*_,n[9]=M-v*f,n[2]=-c*p,n[6]=f,n[10]=c*d}else if(t.order==="ZYX"){const v=c*_,y=c*g,T=f*_,M=f*g;n[0]=d*_,n[4]=T*p-y,n[8]=v*p+M,n[1]=d*g,n[5]=M*p+v,n[9]=y*p-T,n[2]=-p,n[6]=f*d,n[10]=c*d}else if(t.order==="YZX"){const v=c*d,y=c*p,T=f*d,M=f*p;n[0]=d*_,n[4]=M-v*g,n[8]=T*g+y,n[1]=g,n[5]=c*_,n[9]=-f*_,n[2]=-p*_,n[6]=y*g+T,n[10]=v-M*g}else if(t.order==="XZY"){const v=c*d,y=c*p,T=f*d,M=f*p;n[0]=d*_,n[4]=-g,n[8]=p*_,n[1]=v*g+M,n[5]=c*_,n[9]=y*g-T,n[2]=T*g-y,n[6]=f*_,n[10]=M*g+v}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(RA,t,CA)}lookAt(t,n,a){const s=this.elements;return di.subVectors(t,n),di.lengthSq()===0&&(di.z=1),di.normalize(),mr.crossVectors(a,di),mr.lengthSq()===0&&(Math.abs(a.z)===1?di.x+=1e-4:di.z+=1e-4,di.normalize(),mr.crossVectors(a,di)),mr.normalize(),Nc.crossVectors(di,mr),s[0]=mr.x,s[4]=Nc.x,s[8]=di.x,s[1]=mr.y,s[5]=Nc.y,s[9]=di.y,s[2]=mr.z,s[6]=Nc.z,s[10]=di.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const a=t.elements,s=n.elements,u=this.elements,c=a[0],f=a[4],d=a[8],p=a[12],_=a[1],g=a[5],v=a[9],y=a[13],T=a[2],M=a[6],x=a[10],S=a[14],U=a[3],A=a[7],L=a[11],P=a[15],O=s[0],w=s[4],B=s[8],b=s[12],R=s[1],F=s[5],X=s[9],Y=s[13],nt=s[2],at=s[6],I=s[10],k=s[14],q=s[3],ht=s[7],dt=s[11],z=s[15];return u[0]=c*O+f*R+d*nt+p*q,u[4]=c*w+f*F+d*at+p*ht,u[8]=c*B+f*X+d*I+p*dt,u[12]=c*b+f*Y+d*k+p*z,u[1]=_*O+g*R+v*nt+y*q,u[5]=_*w+g*F+v*at+y*ht,u[9]=_*B+g*X+v*I+y*dt,u[13]=_*b+g*Y+v*k+y*z,u[2]=T*O+M*R+x*nt+S*q,u[6]=T*w+M*F+x*at+S*ht,u[10]=T*B+M*X+x*I+S*dt,u[14]=T*b+M*Y+x*k+S*z,u[3]=U*O+A*R+L*nt+P*q,u[7]=U*w+A*F+L*at+P*ht,u[11]=U*B+A*X+L*I+P*dt,u[15]=U*b+A*Y+L*k+P*z,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],a=t[4],s=t[8],u=t[12],c=t[1],f=t[5],d=t[9],p=t[13],_=t[2],g=t[6],v=t[10],y=t[14],T=t[3],M=t[7],x=t[11],S=t[15];return T*(+u*d*g-s*p*g-u*f*v+a*p*v+s*f*y-a*d*y)+M*(+n*d*y-n*p*v+u*c*v-s*c*y+s*p*_-u*d*_)+x*(+n*p*g-n*f*y-u*c*g+a*c*y+u*f*_-a*p*_)+S*(-s*f*_-n*d*g+n*f*v+s*c*g-a*c*v+a*d*_)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,a){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=n,s[14]=a),this}invert(){const t=this.elements,n=t[0],a=t[1],s=t[2],u=t[3],c=t[4],f=t[5],d=t[6],p=t[7],_=t[8],g=t[9],v=t[10],y=t[11],T=t[12],M=t[13],x=t[14],S=t[15],U=g*x*p-M*v*p+M*d*y-f*x*y-g*d*S+f*v*S,A=T*v*p-_*x*p-T*d*y+c*x*y+_*d*S-c*v*S,L=_*M*p-T*g*p+T*f*y-c*M*y-_*f*S+c*g*S,P=T*g*d-_*M*d-T*f*v+c*M*v+_*f*x-c*g*x,O=n*U+a*A+s*L+u*P;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/O;return t[0]=U*w,t[1]=(M*v*u-g*x*u-M*s*y+a*x*y+g*s*S-a*v*S)*w,t[2]=(f*x*u-M*d*u+M*s*p-a*x*p-f*s*S+a*d*S)*w,t[3]=(g*d*u-f*v*u-g*s*p+a*v*p+f*s*y-a*d*y)*w,t[4]=A*w,t[5]=(_*x*u-T*v*u+T*s*y-n*x*y-_*s*S+n*v*S)*w,t[6]=(T*d*u-c*x*u-T*s*p+n*x*p+c*s*S-n*d*S)*w,t[7]=(c*v*u-_*d*u+_*s*p-n*v*p-c*s*y+n*d*y)*w,t[8]=L*w,t[9]=(T*g*u-_*M*u-T*a*y+n*M*y+_*a*S-n*g*S)*w,t[10]=(c*M*u-T*f*u+T*a*p-n*M*p-c*a*S+n*f*S)*w,t[11]=(_*f*u-c*g*u-_*a*p+n*g*p+c*a*y-n*f*y)*w,t[12]=P*w,t[13]=(_*M*s-T*g*s+T*a*v-n*M*v-_*a*x+n*g*x)*w,t[14]=(T*f*s-c*M*s-T*a*d+n*M*d+c*a*x-n*f*x)*w,t[15]=(c*g*s-_*f*s+_*a*d-n*g*d-c*a*v+n*f*v)*w,this}scale(t){const n=this.elements,a=t.x,s=t.y,u=t.z;return n[0]*=a,n[4]*=s,n[8]*=u,n[1]*=a,n[5]*=s,n[9]*=u,n[2]*=a,n[6]*=s,n[10]*=u,n[3]*=a,n[7]*=s,n[11]*=u,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],a=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,a,s))}makeTranslation(t,n,a){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,a,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),a=Math.sin(t);return this.set(1,0,0,0,0,n,-a,0,0,a,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,0,a,0,0,1,0,0,-a,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,-a,0,0,a,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const a=Math.cos(n),s=Math.sin(n),u=1-a,c=t.x,f=t.y,d=t.z,p=u*c,_=u*f;return this.set(p*c+a,p*f-s*d,p*d+s*f,0,p*f+s*d,_*f+a,_*d-s*c,0,p*d-s*f,_*d+s*c,u*d*d+a,0,0,0,0,1),this}makeScale(t,n,a){return this.set(t,0,0,0,0,n,0,0,0,0,a,0,0,0,0,1),this}makeShear(t,n,a,s,u,c){return this.set(1,a,u,0,t,1,c,0,n,s,1,0,0,0,0,1),this}compose(t,n,a){const s=this.elements,u=n._x,c=n._y,f=n._z,d=n._w,p=u+u,_=c+c,g=f+f,v=u*p,y=u*_,T=u*g,M=c*_,x=c*g,S=f*g,U=d*p,A=d*_,L=d*g,P=a.x,O=a.y,w=a.z;return s[0]=(1-(M+S))*P,s[1]=(y+L)*P,s[2]=(T-A)*P,s[3]=0,s[4]=(y-L)*O,s[5]=(1-(v+S))*O,s[6]=(x+U)*O,s[7]=0,s[8]=(T+A)*w,s[9]=(x-U)*w,s[10]=(1-(v+M))*w,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,n,a){const s=this.elements;let u=co.set(s[0],s[1],s[2]).length();const c=co.set(s[4],s[5],s[6]).length(),f=co.set(s[8],s[9],s[10]).length();this.determinant()<0&&(u=-u),t.x=s[12],t.y=s[13],t.z=s[14],Vi.copy(this);const p=1/u,_=1/c,g=1/f;return Vi.elements[0]*=p,Vi.elements[1]*=p,Vi.elements[2]*=p,Vi.elements[4]*=_,Vi.elements[5]*=_,Vi.elements[6]*=_,Vi.elements[8]*=g,Vi.elements[9]*=g,Vi.elements[10]*=g,n.setFromRotationMatrix(Vi),a.x=u,a.y=c,a.z=f,this}makePerspective(t,n,a,s,u,c,f=Oa){const d=this.elements,p=2*u/(n-t),_=2*u/(a-s),g=(n+t)/(n-t),v=(a+s)/(a-s);let y,T;if(f===Oa)y=-(c+u)/(c-u),T=-2*c*u/(c-u);else if(f===xf)y=-c/(c-u),T=-c*u/(c-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return d[0]=p,d[4]=0,d[8]=g,d[12]=0,d[1]=0,d[5]=_,d[9]=v,d[13]=0,d[2]=0,d[6]=0,d[10]=y,d[14]=T,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(t,n,a,s,u,c,f=Oa){const d=this.elements,p=1/(n-t),_=1/(a-s),g=1/(c-u),v=(n+t)*p,y=(a+s)*_;let T,M;if(f===Oa)T=(c+u)*g,M=-2*g;else if(f===xf)T=u*g,M=-1*g;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return d[0]=2*p,d[4]=0,d[8]=0,d[12]=-v,d[1]=0,d[5]=2*_,d[9]=0,d[13]=-y,d[2]=0,d[6]=0,d[10]=M,d[14]=-T,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(t){const n=this.elements,a=t.elements;for(let s=0;s<16;s++)if(n[s]!==a[s])return!1;return!0}fromArray(t,n=0){for(let a=0;a<16;a++)this.elements[a]=t[a+n];return this}toArray(t=[],n=0){const a=this.elements;return t[n]=a[0],t[n+1]=a[1],t[n+2]=a[2],t[n+3]=a[3],t[n+4]=a[4],t[n+5]=a[5],t[n+6]=a[6],t[n+7]=a[7],t[n+8]=a[8],t[n+9]=a[9],t[n+10]=a[10],t[n+11]=a[11],t[n+12]=a[12],t[n+13]=a[13],t[n+14]=a[14],t[n+15]=a[15],t}}const co=new ot,Vi=new vn,RA=new ot(0,0,0),CA=new ot(1,1,1),mr=new ot,Nc=new ot,di=new ot,Ux=new vn,Lx=new hu;class Ba{constructor(t=0,n=0,a=0,s=Ba.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=a,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,a,s=this._order){return this._x=t,this._y=n,this._z=a,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,a=!0){const s=t.elements,u=s[0],c=s[4],f=s[8],d=s[1],p=s[5],_=s[9],g=s[2],v=s[6],y=s[10];switch(n){case"XYZ":this._y=Math.asin(Qn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-_,y),this._z=Math.atan2(-c,u)):(this._x=Math.atan2(v,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Qn(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(f,y),this._z=Math.atan2(d,p)):(this._y=Math.atan2(-g,u),this._z=0);break;case"ZXY":this._x=Math.asin(Qn(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-g,y),this._z=Math.atan2(-c,p)):(this._y=0,this._z=Math.atan2(d,u));break;case"ZYX":this._y=Math.asin(-Qn(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(v,y),this._z=Math.atan2(d,u)):(this._x=0,this._z=Math.atan2(-c,p));break;case"YZX":this._z=Math.asin(Qn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-_,p),this._y=Math.atan2(-g,u)):(this._x=0,this._y=Math.atan2(f,y));break;case"XZY":this._z=Math.asin(-Qn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(v,p),this._y=Math.atan2(f,u)):(this._x=Math.atan2(-_,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,a===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,a){return Ux.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ux,n,a)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return Lx.setFromEuler(this),this.setFromQuaternion(Lx,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ba.DEFAULT_ORDER="XYZ";class qy{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let wA=0;const Nx=new ot,fo=new hu,Aa=new vn,Oc=new ot,ql=new ot,DA=new ot,UA=new hu,Ox=new ot(1,0,0),Px=new ot(0,1,0),zx=new ot(0,0,1),Ix={type:"added"},LA={type:"removed"},ho={type:"childadded",child:null},up={type:"childremoved",child:null};class xi extends ko{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:wA++}),this.uuid=fu(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=xi.DEFAULT_UP.clone();const t=new ot,n=new Ba,a=new hu,s=new ot(1,1,1);function u(){a.setFromEuler(n,!1)}function c(){n.setFromQuaternion(a,void 0,!1)}n._onChange(u),a._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new vn},normalMatrix:{value:new le}}),this.matrix=new vn,this.matrixWorld=new vn,this.matrixAutoUpdate=xi.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=xi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new qy,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return fo.setFromAxisAngle(t,n),this.quaternion.multiply(fo),this}rotateOnWorldAxis(t,n){return fo.setFromAxisAngle(t,n),this.quaternion.premultiply(fo),this}rotateX(t){return this.rotateOnAxis(Ox,t)}rotateY(t){return this.rotateOnAxis(Px,t)}rotateZ(t){return this.rotateOnAxis(zx,t)}translateOnAxis(t,n){return Nx.copy(t).applyQuaternion(this.quaternion),this.position.add(Nx.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(Ox,t)}translateY(t){return this.translateOnAxis(Px,t)}translateZ(t){return this.translateOnAxis(zx,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Aa.copy(this.matrixWorld).invert())}lookAt(t,n,a){t.isVector3?Oc.copy(t):Oc.set(t,n,a);const s=this.parent;this.updateWorldMatrix(!0,!1),ql.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Aa.lookAt(ql,Oc,this.up):Aa.lookAt(Oc,ql,this.up),this.quaternion.setFromRotationMatrix(Aa),s&&(Aa.extractRotation(s.matrixWorld),fo.setFromRotationMatrix(Aa),this.quaternion.premultiply(fo.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ix),ho.child=t,this.dispatchEvent(ho),ho.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.remove(arguments[a]);return this}const n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(LA),up.child=t,this.dispatchEvent(up),up.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Aa.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Aa.multiply(t.parent.matrixWorld)),t.applyMatrix4(Aa),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ix),ho.child=t,this.dispatchEvent(ho),ho.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let a=0,s=this.children.length;a<s;a++){const c=this.children[a].getObjectByProperty(t,n);if(c!==void 0)return c}}getObjectsByProperty(t,n,a=[]){this[t]===n&&a.push(this);const s=this.children;for(let u=0,c=s.length;u<c;u++)s[u].getObjectsByProperty(t,n,a);return a}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ql,t,DA),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ql,UA,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);const n=this.children;for(let a=0,s=n.length;a<s;a++)n[a].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const n=this.children;for(let a=0,s=n.length;a<s;a++)n[a].traverseVisible(t)}traverseAncestors(t){const n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const n=this.children;for(let a=0,s=n.length;a<s;a++)n[a].updateMatrixWorld(t)}updateWorldMatrix(t,n){const a=this.parent;if(t===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const s=this.children;for(let u=0,c=s.length;u<c;u++)s[u].updateWorldMatrix(!1,!0)}}toJSON(t){const n=t===void 0||typeof t=="string",a={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},a.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(f=>({boxInitialized:f.boxInitialized,boxMin:f.box.min.toArray(),boxMax:f.box.max.toArray(),sphereInitialized:f.sphereInitialized,sphereRadius:f.sphere.radius,sphereCenter:f.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function u(f,d){return f[d.uuid]===void 0&&(f[d.uuid]=d.toJSON(t)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=u(t.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const d=f.shapes;if(Array.isArray(d))for(let p=0,_=d.length;p<_;p++){const g=d[p];u(t.shapes,g)}else u(t.shapes,d)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let d=0,p=this.material.length;d<p;d++)f.push(u(t.materials,this.material[d]));s.material=f}else s.material=u(t.materials,this.material);if(this.children.length>0){s.children=[];for(let f=0;f<this.children.length;f++)s.children.push(this.children[f].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let f=0;f<this.animations.length;f++){const d=this.animations[f];s.animations.push(u(t.animations,d))}}if(n){const f=c(t.geometries),d=c(t.materials),p=c(t.textures),_=c(t.images),g=c(t.shapes),v=c(t.skeletons),y=c(t.animations),T=c(t.nodes);f.length>0&&(a.geometries=f),d.length>0&&(a.materials=d),p.length>0&&(a.textures=p),_.length>0&&(a.images=_),g.length>0&&(a.shapes=g),v.length>0&&(a.skeletons=v),y.length>0&&(a.animations=y),T.length>0&&(a.nodes=T)}return a.object=s,a;function c(f){const d=[];for(const p in f){const _=f[p];delete _.metadata,d.push(_)}return d}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let a=0;a<t.children.length;a++){const s=t.children[a];this.add(s.clone())}return this}}xi.DEFAULT_UP=new ot(0,1,0);xi.DEFAULT_MATRIX_AUTO_UPDATE=!0;xi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ki=new ot,Ra=new ot,cp=new ot,Ca=new ot,po=new ot,mo=new ot,Bx=new ot,fp=new ot,hp=new ot,dp=new ot;class na{constructor(t=new ot,n=new ot,a=new ot){this.a=t,this.b=n,this.c=a}static getNormal(t,n,a,s){s.subVectors(a,n),ki.subVectors(t,n),s.cross(ki);const u=s.lengthSq();return u>0?s.multiplyScalar(1/Math.sqrt(u)):s.set(0,0,0)}static getBarycoord(t,n,a,s,u){ki.subVectors(s,n),Ra.subVectors(a,n),cp.subVectors(t,n);const c=ki.dot(ki),f=ki.dot(Ra),d=ki.dot(cp),p=Ra.dot(Ra),_=Ra.dot(cp),g=c*p-f*f;if(g===0)return u.set(0,0,0),null;const v=1/g,y=(p*d-f*_)*v,T=(c*_-f*d)*v;return u.set(1-y-T,T,y)}static containsPoint(t,n,a,s){return this.getBarycoord(t,n,a,s,Ca)===null?!1:Ca.x>=0&&Ca.y>=0&&Ca.x+Ca.y<=1}static getInterpolation(t,n,a,s,u,c,f,d){return this.getBarycoord(t,n,a,s,Ca)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(u,Ca.x),d.addScaledVector(c,Ca.y),d.addScaledVector(f,Ca.z),d)}static isFrontFacing(t,n,a,s){return ki.subVectors(a,n),Ra.subVectors(t,n),ki.cross(Ra).dot(s)<0}set(t,n,a){return this.a.copy(t),this.b.copy(n),this.c.copy(a),this}setFromPointsAndIndices(t,n,a,s){return this.a.copy(t[n]),this.b.copy(t[a]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,n,a,s){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,a),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ki.subVectors(this.c,this.b),Ra.subVectors(this.a,this.b),ki.cross(Ra).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return na.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return na.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,a,s,u){return na.getInterpolation(t,this.a,this.b,this.c,n,a,s,u)}containsPoint(t){return na.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return na.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){const a=this.a,s=this.b,u=this.c;let c,f;po.subVectors(s,a),mo.subVectors(u,a),fp.subVectors(t,a);const d=po.dot(fp),p=mo.dot(fp);if(d<=0&&p<=0)return n.copy(a);hp.subVectors(t,s);const _=po.dot(hp),g=mo.dot(hp);if(_>=0&&g<=_)return n.copy(s);const v=d*g-_*p;if(v<=0&&d>=0&&_<=0)return c=d/(d-_),n.copy(a).addScaledVector(po,c);dp.subVectors(t,u);const y=po.dot(dp),T=mo.dot(dp);if(T>=0&&y<=T)return n.copy(u);const M=y*p-d*T;if(M<=0&&p>=0&&T<=0)return f=p/(p-T),n.copy(a).addScaledVector(mo,f);const x=_*T-y*g;if(x<=0&&g-_>=0&&y-T>=0)return Bx.subVectors(u,s),f=(g-_)/(g-_+(y-T)),n.copy(s).addScaledVector(Bx,f);const S=1/(x+M+v);return c=M*S,f=v*S,n.copy(a).addScaledVector(po,c).addScaledVector(mo,f)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Yy={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_r={h:0,s:0,l:0},Pc={h:0,s:0,l:0};function pp(o,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?o+(t-o)*6*n:n<1/2?t:n<2/3?o+(t-o)*6*(2/3-n):o}class Oe{constructor(t,n,a){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,a)}set(t,n,a){if(n===void 0&&a===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,n,a);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=Xi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Re.toWorkingColorSpace(this,n),this}setRGB(t,n,a,s=Re.workingColorSpace){return this.r=t,this.g=n,this.b=a,Re.toWorkingColorSpace(this,s),this}setHSL(t,n,a,s=Re.workingColorSpace){if(t=_A(t,1),n=Qn(n,0,1),a=Qn(a,0,1),n===0)this.r=this.g=this.b=a;else{const u=a<=.5?a*(1+n):a+n-a*n,c=2*a-u;this.r=pp(c,u,t+1/3),this.g=pp(c,u,t),this.b=pp(c,u,t-1/3)}return Re.toWorkingColorSpace(this,s),this}setStyle(t,n=Xi){function a(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let u;const c=s[1],f=s[2];switch(c){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return a(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,n);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return a(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,n);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return a(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const u=s[1],c=u.length;if(c===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,n);if(c===6)return this.setHex(parseInt(u,16),n);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=Xi){const a=Yy[t.toLowerCase()];return a!==void 0?this.setHex(a,n):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Uo(t.r),this.g=Uo(t.g),this.b=Uo(t.b),this}copyLinearToSRGB(t){return this.r=ep(t.r),this.g=ep(t.g),this.b=ep(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Xi){return Re.fromWorkingColorSpace(In.copy(this),t),Math.round(Qn(In.r*255,0,255))*65536+Math.round(Qn(In.g*255,0,255))*256+Math.round(Qn(In.b*255,0,255))}getHexString(t=Xi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=Re.workingColorSpace){Re.fromWorkingColorSpace(In.copy(this),n);const a=In.r,s=In.g,u=In.b,c=Math.max(a,s,u),f=Math.min(a,s,u);let d,p;const _=(f+c)/2;if(f===c)d=0,p=0;else{const g=c-f;switch(p=_<=.5?g/(c+f):g/(2-c-f),c){case a:d=(s-u)/g+(s<u?6:0);break;case s:d=(u-a)/g+2;break;case u:d=(a-s)/g+4;break}d/=6}return t.h=d,t.s=p,t.l=_,t}getRGB(t,n=Re.workingColorSpace){return Re.fromWorkingColorSpace(In.copy(this),n),t.r=In.r,t.g=In.g,t.b=In.b,t}getStyle(t=Xi){Re.fromWorkingColorSpace(In.copy(this),t);const n=In.r,a=In.g,s=In.b;return t!==Xi?`color(${t} ${n.toFixed(3)} ${a.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(a*255)},${Math.round(s*255)})`}offsetHSL(t,n,a){return this.getHSL(_r),this.setHSL(_r.h+t,_r.s+n,_r.l+a)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,a){return this.r=t.r+(n.r-t.r)*a,this.g=t.g+(n.g-t.g)*a,this.b=t.b+(n.b-t.b)*a,this}lerpHSL(t,n){this.getHSL(_r),t.getHSL(Pc);const a=$d(_r.h,Pc.h,n),s=$d(_r.s,Pc.s,n),u=$d(_r.l,Pc.l,n);return this.setHSL(a,s,u),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const n=this.r,a=this.g,s=this.b,u=t.elements;return this.r=u[0]*n+u[3]*a+u[6]*s,this.g=u[1]*n+u[4]*a+u[7]*s,this.b=u[2]*n+u[5]*a+u[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const In=new Oe;Oe.NAMES=Yy;let NA=0;class Rf extends ko{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:NA++}),this.uuid=fu(),this.name="",this.type="Material",this.blending=wo,this.side=Cr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=kp,this.blendDst=Xp,this.blendEquation=rs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Oe(0,0,0),this.blendAlpha=0,this.depthFunc=mf,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Tx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ro,this.stencilZFail=ro,this.stencilZPass=ro,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const n in t){const a=t[n];if(a===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const s=this[n];if(s===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(a):s&&s.isVector3&&a&&a.isVector3?s.copy(a):this[n]=a}}toJSON(t){const n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});const a={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.color&&this.color.isColor&&(a.color=this.color.getHex()),this.roughness!==void 0&&(a.roughness=this.roughness),this.metalness!==void 0&&(a.metalness=this.metalness),this.sheen!==void 0&&(a.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(a.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(a.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(a.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(a.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(a.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(a.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(a.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(a.shininess=this.shininess),this.clearcoat!==void 0&&(a.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(a.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(a.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(a.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,a.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(a.dispersion=this.dispersion),this.iridescence!==void 0&&(a.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(a.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(a.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(a.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(a.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(a.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(a.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(a.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(a.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(a.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(a.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(a.lightMap=this.lightMap.toJSON(t).uuid,a.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(a.aoMap=this.aoMap.toJSON(t).uuid,a.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(a.bumpMap=this.bumpMap.toJSON(t).uuid,a.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(a.normalMap=this.normalMap.toJSON(t).uuid,a.normalMapType=this.normalMapType,a.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(a.displacementMap=this.displacementMap.toJSON(t).uuid,a.displacementScale=this.displacementScale,a.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(a.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(a.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(a.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(a.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(a.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(a.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(a.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(a.combine=this.combine)),this.envMapRotation!==void 0&&(a.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(a.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(a.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(a.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(a.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(a.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(a.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(a.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(a.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(a.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(a.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(a.size=this.size),this.shadowSide!==null&&(a.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(a.sizeAttenuation=this.sizeAttenuation),this.blending!==wo&&(a.blending=this.blending),this.side!==Cr&&(a.side=this.side),this.vertexColors===!0&&(a.vertexColors=!0),this.opacity<1&&(a.opacity=this.opacity),this.transparent===!0&&(a.transparent=!0),this.blendSrc!==kp&&(a.blendSrc=this.blendSrc),this.blendDst!==Xp&&(a.blendDst=this.blendDst),this.blendEquation!==rs&&(a.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(a.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(a.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(a.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(a.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(a.blendAlpha=this.blendAlpha),this.depthFunc!==mf&&(a.depthFunc=this.depthFunc),this.depthTest===!1&&(a.depthTest=this.depthTest),this.depthWrite===!1&&(a.depthWrite=this.depthWrite),this.colorWrite===!1&&(a.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(a.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Tx&&(a.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(a.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(a.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ro&&(a.stencilFail=this.stencilFail),this.stencilZFail!==ro&&(a.stencilZFail=this.stencilZFail),this.stencilZPass!==ro&&(a.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(a.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(a.rotation=this.rotation),this.polygonOffset===!0&&(a.polygonOffset=!0),this.polygonOffsetFactor!==0&&(a.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(a.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(a.linewidth=this.linewidth),this.dashSize!==void 0&&(a.dashSize=this.dashSize),this.gapSize!==void 0&&(a.gapSize=this.gapSize),this.scale!==void 0&&(a.scale=this.scale),this.dithering===!0&&(a.dithering=!0),this.alphaTest>0&&(a.alphaTest=this.alphaTest),this.alphaHash===!0&&(a.alphaHash=!0),this.alphaToCoverage===!0&&(a.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(a.premultipliedAlpha=!0),this.forceSinglePass===!0&&(a.forceSinglePass=!0),this.wireframe===!0&&(a.wireframe=!0),this.wireframeLinewidth>1&&(a.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(a.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(a.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(a.flatShading=!0),this.visible===!1&&(a.visible=!1),this.toneMapped===!1&&(a.toneMapped=!1),this.fog===!1&&(a.fog=!1),Object.keys(this.userData).length>0&&(a.userData=this.userData);function s(u){const c=[];for(const f in u){const d=u[f];delete d.metadata,c.push(d)}return c}if(n){const u=s(t.textures),c=s(t.images);u.length>0&&(a.textures=u),c.length>0&&(a.images=c)}return a}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const n=t.clippingPlanes;let a=null;if(n!==null){const s=n.length;a=new Array(s);for(let u=0;u!==s;++u)a[u]=n[u].clone()}return this.clippingPlanes=a,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}}class jy extends Rf{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ba,this.combine=Dy,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const hn=new ot,zc=new xe;class ra{constructor(t,n,a=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=a,this.usage=bx,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Na,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return tu("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,a){t*=this.itemSize,a*=n.itemSize;for(let s=0,u=this.itemSize;s<u;s++)this.array[t+s]=n.array[a+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,a=this.count;n<a;n++)zc.fromBufferAttribute(this,n),zc.applyMatrix3(t),this.setXY(n,zc.x,zc.y);else if(this.itemSize===3)for(let n=0,a=this.count;n<a;n++)hn.fromBufferAttribute(this,n),hn.applyMatrix3(t),this.setXYZ(n,hn.x,hn.y,hn.z);return this}applyMatrix4(t){for(let n=0,a=this.count;n<a;n++)hn.fromBufferAttribute(this,n),hn.applyMatrix4(t),this.setXYZ(n,hn.x,hn.y,hn.z);return this}applyNormalMatrix(t){for(let n=0,a=this.count;n<a;n++)hn.fromBufferAttribute(this,n),hn.applyNormalMatrix(t),this.setXYZ(n,hn.x,hn.y,hn.z);return this}transformDirection(t){for(let n=0,a=this.count;n<a;n++)hn.fromBufferAttribute(this,n),hn.transformDirection(t),this.setXYZ(n,hn.x,hn.y,hn.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let a=this.array[t*this.itemSize+n];return this.normalized&&(a=Vl(a,this.array)),a}setComponent(t,n,a){return this.normalized&&(a=Kn(a,this.array)),this.array[t*this.itemSize+n]=a,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=Vl(n,this.array)),n}setX(t,n){return this.normalized&&(n=Kn(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=Vl(n,this.array)),n}setY(t,n){return this.normalized&&(n=Kn(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=Vl(n,this.array)),n}setZ(t,n){return this.normalized&&(n=Kn(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=Vl(n,this.array)),n}setW(t,n){return this.normalized&&(n=Kn(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,a){return t*=this.itemSize,this.normalized&&(n=Kn(n,this.array),a=Kn(a,this.array)),this.array[t+0]=n,this.array[t+1]=a,this}setXYZ(t,n,a,s){return t*=this.itemSize,this.normalized&&(n=Kn(n,this.array),a=Kn(a,this.array),s=Kn(s,this.array)),this.array[t+0]=n,this.array[t+1]=a,this.array[t+2]=s,this}setXYZW(t,n,a,s,u){return t*=this.itemSize,this.normalized&&(n=Kn(n,this.array),a=Kn(a,this.array),s=Kn(s,this.array),u=Kn(u,this.array)),this.array[t+0]=n,this.array[t+1]=a,this.array[t+2]=s,this.array[t+3]=u,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==bx&&(t.usage=this.usage),t}}class Zy extends ra{constructor(t,n,a){super(new Uint16Array(t),n,a)}}class Ky extends ra{constructor(t,n,a){super(new Uint32Array(t),n,a)}}class ps extends ra{constructor(t,n,a){super(new Float32Array(t),n,a)}}let OA=0;const Di=new vn,mp=new xi,_o=new ot,pi=new du,Yl=new du,Mn=new ot;class Ss extends ko{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:OA++}),this.uuid=fu(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ky(t)?Ky:Zy)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,a=0){this.groups.push({start:t,count:n,materialIndex:a})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);const a=this.attributes.normal;if(a!==void 0){const u=new le().getNormalMatrix(t);a.applyNormalMatrix(u),a.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Di.makeRotationFromQuaternion(t),this.applyMatrix4(Di),this}rotateX(t){return Di.makeRotationX(t),this.applyMatrix4(Di),this}rotateY(t){return Di.makeRotationY(t),this.applyMatrix4(Di),this}rotateZ(t){return Di.makeRotationZ(t),this.applyMatrix4(Di),this}translate(t,n,a){return Di.makeTranslation(t,n,a),this.applyMatrix4(Di),this}scale(t,n,a){return Di.makeScale(t,n,a),this.applyMatrix4(Di),this}lookAt(t){return mp.lookAt(t),mp.updateMatrix(),this.applyMatrix4(mp.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_o).negate(),this.translate(_o.x,_o.y,_o.z),this}setFromPoints(t){const n=[];for(let a=0,s=t.length;a<s;a++){const u=t[a];n.push(u.x,u.y,u.z||0)}return this.setAttribute("position",new ps(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new du);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ot(-1/0,-1/0,-1/0),new ot(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let a=0,s=n.length;a<s;a++){const u=n[a];pi.setFromBufferAttribute(u),this.morphTargetsRelative?(Mn.addVectors(this.boundingBox.min,pi.min),this.boundingBox.expandByPoint(Mn),Mn.addVectors(this.boundingBox.max,pi.max),this.boundingBox.expandByPoint(Mn)):(this.boundingBox.expandByPoint(pi.min),this.boundingBox.expandByPoint(pi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new t_);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ot,1/0);return}if(t){const a=this.boundingSphere.center;if(pi.setFromBufferAttribute(t),n)for(let u=0,c=n.length;u<c;u++){const f=n[u];Yl.setFromBufferAttribute(f),this.morphTargetsRelative?(Mn.addVectors(pi.min,Yl.min),pi.expandByPoint(Mn),Mn.addVectors(pi.max,Yl.max),pi.expandByPoint(Mn)):(pi.expandByPoint(Yl.min),pi.expandByPoint(Yl.max))}pi.getCenter(a);let s=0;for(let u=0,c=t.count;u<c;u++)Mn.fromBufferAttribute(t,u),s=Math.max(s,a.distanceToSquared(Mn));if(n)for(let u=0,c=n.length;u<c;u++){const f=n[u],d=this.morphTargetsRelative;for(let p=0,_=f.count;p<_;p++)Mn.fromBufferAttribute(f,p),d&&(_o.fromBufferAttribute(t,p),Mn.add(_o)),s=Math.max(s,a.distanceToSquared(Mn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const a=n.position,s=n.normal,u=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ra(new Float32Array(4*a.count),4));const c=this.getAttribute("tangent"),f=[],d=[];for(let B=0;B<a.count;B++)f[B]=new ot,d[B]=new ot;const p=new ot,_=new ot,g=new ot,v=new xe,y=new xe,T=new xe,M=new ot,x=new ot;function S(B,b,R){p.fromBufferAttribute(a,B),_.fromBufferAttribute(a,b),g.fromBufferAttribute(a,R),v.fromBufferAttribute(u,B),y.fromBufferAttribute(u,b),T.fromBufferAttribute(u,R),_.sub(p),g.sub(p),y.sub(v),T.sub(v);const F=1/(y.x*T.y-T.x*y.y);isFinite(F)&&(M.copy(_).multiplyScalar(T.y).addScaledVector(g,-y.y).multiplyScalar(F),x.copy(g).multiplyScalar(y.x).addScaledVector(_,-T.x).multiplyScalar(F),f[B].add(M),f[b].add(M),f[R].add(M),d[B].add(x),d[b].add(x),d[R].add(x))}let U=this.groups;U.length===0&&(U=[{start:0,count:t.count}]);for(let B=0,b=U.length;B<b;++B){const R=U[B],F=R.start,X=R.count;for(let Y=F,nt=F+X;Y<nt;Y+=3)S(t.getX(Y+0),t.getX(Y+1),t.getX(Y+2))}const A=new ot,L=new ot,P=new ot,O=new ot;function w(B){P.fromBufferAttribute(s,B),O.copy(P);const b=f[B];A.copy(b),A.sub(P.multiplyScalar(P.dot(b))).normalize(),L.crossVectors(O,b);const F=L.dot(d[B])<0?-1:1;c.setXYZW(B,A.x,A.y,A.z,F)}for(let B=0,b=U.length;B<b;++B){const R=U[B],F=R.start,X=R.count;for(let Y=F,nt=F+X;Y<nt;Y+=3)w(t.getX(Y+0)),w(t.getX(Y+1)),w(t.getX(Y+2))}}computeVertexNormals(){const t=this.index,n=this.getAttribute("position");if(n!==void 0){let a=this.getAttribute("normal");if(a===void 0)a=new ra(new Float32Array(n.count*3),3),this.setAttribute("normal",a);else for(let v=0,y=a.count;v<y;v++)a.setXYZ(v,0,0,0);const s=new ot,u=new ot,c=new ot,f=new ot,d=new ot,p=new ot,_=new ot,g=new ot;if(t)for(let v=0,y=t.count;v<y;v+=3){const T=t.getX(v+0),M=t.getX(v+1),x=t.getX(v+2);s.fromBufferAttribute(n,T),u.fromBufferAttribute(n,M),c.fromBufferAttribute(n,x),_.subVectors(c,u),g.subVectors(s,u),_.cross(g),f.fromBufferAttribute(a,T),d.fromBufferAttribute(a,M),p.fromBufferAttribute(a,x),f.add(_),d.add(_),p.add(_),a.setXYZ(T,f.x,f.y,f.z),a.setXYZ(M,d.x,d.y,d.z),a.setXYZ(x,p.x,p.y,p.z)}else for(let v=0,y=n.count;v<y;v+=3)s.fromBufferAttribute(n,v+0),u.fromBufferAttribute(n,v+1),c.fromBufferAttribute(n,v+2),_.subVectors(c,u),g.subVectors(s,u),_.cross(g),a.setXYZ(v+0,_.x,_.y,_.z),a.setXYZ(v+1,_.x,_.y,_.z),a.setXYZ(v+2,_.x,_.y,_.z);this.normalizeNormals(),a.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let n=0,a=t.count;n<a;n++)Mn.fromBufferAttribute(t,n),Mn.normalize(),t.setXYZ(n,Mn.x,Mn.y,Mn.z)}toNonIndexed(){function t(f,d){const p=f.array,_=f.itemSize,g=f.normalized,v=new p.constructor(d.length*_);let y=0,T=0;for(let M=0,x=d.length;M<x;M++){f.isInterleavedBufferAttribute?y=d[M]*f.data.stride+f.offset:y=d[M]*_;for(let S=0;S<_;S++)v[T++]=p[y++]}return new ra(v,_,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Ss,a=this.index.array,s=this.attributes;for(const f in s){const d=s[f],p=t(d,a);n.setAttribute(f,p)}const u=this.morphAttributes;for(const f in u){const d=[],p=u[f];for(let _=0,g=p.length;_<g;_++){const v=p[_],y=t(v,a);d.push(y)}n.morphAttributes[f]=d}n.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let f=0,d=c.length;f<d;f++){const p=c[f];n.addGroup(p.start,p.count,p.materialIndex)}return n}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const p in d)d[p]!==void 0&&(t[p]=d[p]);return t}t.data={attributes:{}};const n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const a=this.attributes;for(const d in a){const p=a[d];t.data.attributes[d]=p.toJSON(t.data)}const s={};let u=!1;for(const d in this.morphAttributes){const p=this.morphAttributes[d],_=[];for(let g=0,v=p.length;g<v;g++){const y=p[g];_.push(y.toJSON(t.data))}_.length>0&&(s[d]=_,u=!0)}u&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(t.data.groups=JSON.parse(JSON.stringify(c)));const f=this.boundingSphere;return f!==null&&(t.data.boundingSphere={center:f.center.toArray(),radius:f.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=t.name;const a=t.index;a!==null&&this.setIndex(a.clone(n));const s=t.attributes;for(const p in s){const _=s[p];this.setAttribute(p,_.clone(n))}const u=t.morphAttributes;for(const p in u){const _=[],g=u[p];for(let v=0,y=g.length;v<y;v++)_.push(g[v].clone(n));this.morphAttributes[p]=_}this.morphTargetsRelative=t.morphTargetsRelative;const c=t.groups;for(let p=0,_=c.length;p<_;p++){const g=c[p];this.addGroup(g.start,g.count,g.materialIndex)}const f=t.boundingBox;f!==null&&(this.boundingBox=f.clone());const d=t.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Fx=new vn,Jr=new AA,Ic=new t_,Hx=new ot,go=new ot,vo=new ot,xo=new ot,_p=new ot,Bc=new ot,Fc=new xe,Hc=new xe,Gc=new xe,Gx=new ot,Vx=new ot,kx=new ot,Vc=new ot,kc=new ot;class aa extends xi{constructor(t=new Ss,n=new jy){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const s=n[a[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,c=s.length;u<c;u++){const f=s[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=u}}}}getVertexPosition(t,n){const a=this.geometry,s=a.attributes.position,u=a.morphAttributes.position,c=a.morphTargetsRelative;n.fromBufferAttribute(s,t);const f=this.morphTargetInfluences;if(u&&f){Bc.set(0,0,0);for(let d=0,p=u.length;d<p;d++){const _=f[d],g=u[d];_!==0&&(_p.fromBufferAttribute(g,t),c?Bc.addScaledVector(_p,_):Bc.addScaledVector(_p.sub(n),_))}n.add(Bc)}return n}raycast(t,n){const a=this.geometry,s=this.material,u=this.matrixWorld;s!==void 0&&(a.boundingSphere===null&&a.computeBoundingSphere(),Ic.copy(a.boundingSphere),Ic.applyMatrix4(u),Jr.copy(t.ray).recast(t.near),!(Ic.containsPoint(Jr.origin)===!1&&(Jr.intersectSphere(Ic,Hx)===null||Jr.origin.distanceToSquared(Hx)>(t.far-t.near)**2))&&(Fx.copy(u).invert(),Jr.copy(t.ray).applyMatrix4(Fx),!(a.boundingBox!==null&&Jr.intersectsBox(a.boundingBox)===!1)&&this._computeIntersections(t,n,Jr)))}_computeIntersections(t,n,a){let s;const u=this.geometry,c=this.material,f=u.index,d=u.attributes.position,p=u.attributes.uv,_=u.attributes.uv1,g=u.attributes.normal,v=u.groups,y=u.drawRange;if(f!==null)if(Array.isArray(c))for(let T=0,M=v.length;T<M;T++){const x=v[T],S=c[x.materialIndex],U=Math.max(x.start,y.start),A=Math.min(f.count,Math.min(x.start+x.count,y.start+y.count));for(let L=U,P=A;L<P;L+=3){const O=f.getX(L),w=f.getX(L+1),B=f.getX(L+2);s=Xc(this,S,t,a,p,_,g,O,w,B),s&&(s.faceIndex=Math.floor(L/3),s.face.materialIndex=x.materialIndex,n.push(s))}}else{const T=Math.max(0,y.start),M=Math.min(f.count,y.start+y.count);for(let x=T,S=M;x<S;x+=3){const U=f.getX(x),A=f.getX(x+1),L=f.getX(x+2);s=Xc(this,c,t,a,p,_,g,U,A,L),s&&(s.faceIndex=Math.floor(x/3),n.push(s))}}else if(d!==void 0)if(Array.isArray(c))for(let T=0,M=v.length;T<M;T++){const x=v[T],S=c[x.materialIndex],U=Math.max(x.start,y.start),A=Math.min(d.count,Math.min(x.start+x.count,y.start+y.count));for(let L=U,P=A;L<P;L+=3){const O=L,w=L+1,B=L+2;s=Xc(this,S,t,a,p,_,g,O,w,B),s&&(s.faceIndex=Math.floor(L/3),s.face.materialIndex=x.materialIndex,n.push(s))}}else{const T=Math.max(0,y.start),M=Math.min(d.count,y.start+y.count);for(let x=T,S=M;x<S;x+=3){const U=x,A=x+1,L=x+2;s=Xc(this,c,t,a,p,_,g,U,A,L),s&&(s.faceIndex=Math.floor(x/3),n.push(s))}}}}function PA(o,t,n,a,s,u,c,f){let d;if(t.side===ni?d=a.intersectTriangle(c,u,s,!0,f):d=a.intersectTriangle(s,u,c,t.side===Cr,f),d===null)return null;kc.copy(f),kc.applyMatrix4(o.matrixWorld);const p=n.ray.origin.distanceTo(kc);return p<n.near||p>n.far?null:{distance:p,point:kc.clone(),object:o}}function Xc(o,t,n,a,s,u,c,f,d,p){o.getVertexPosition(f,go),o.getVertexPosition(d,vo),o.getVertexPosition(p,xo);const _=PA(o,t,n,a,go,vo,xo,Vc);if(_){s&&(Fc.fromBufferAttribute(s,f),Hc.fromBufferAttribute(s,d),Gc.fromBufferAttribute(s,p),_.uv=na.getInterpolation(Vc,go,vo,xo,Fc,Hc,Gc,new xe)),u&&(Fc.fromBufferAttribute(u,f),Hc.fromBufferAttribute(u,d),Gc.fromBufferAttribute(u,p),_.uv1=na.getInterpolation(Vc,go,vo,xo,Fc,Hc,Gc,new xe)),c&&(Gx.fromBufferAttribute(c,f),Vx.fromBufferAttribute(c,d),kx.fromBufferAttribute(c,p),_.normal=na.getInterpolation(Vc,go,vo,xo,Gx,Vx,kx,new ot),_.normal.dot(a.direction)>0&&_.normal.multiplyScalar(-1));const g={a:f,b:d,c:p,normal:new ot,materialIndex:0};na.getNormal(go,vo,xo,g.normal),_.face=g}return _}class pu extends Ss{constructor(t=1,n=1,a=1,s=1,u=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:a,widthSegments:s,heightSegments:u,depthSegments:c};const f=this;s=Math.floor(s),u=Math.floor(u),c=Math.floor(c);const d=[],p=[],_=[],g=[];let v=0,y=0;T("z","y","x",-1,-1,a,n,t,c,u,0),T("z","y","x",1,-1,a,n,-t,c,u,1),T("x","z","y",1,1,t,a,n,s,c,2),T("x","z","y",1,-1,t,a,-n,s,c,3),T("x","y","z",1,-1,t,n,a,s,u,4),T("x","y","z",-1,-1,t,n,-a,s,u,5),this.setIndex(d),this.setAttribute("position",new ps(p,3)),this.setAttribute("normal",new ps(_,3)),this.setAttribute("uv",new ps(g,2));function T(M,x,S,U,A,L,P,O,w,B,b){const R=L/w,F=P/B,X=L/2,Y=P/2,nt=O/2,at=w+1,I=B+1;let k=0,q=0;const ht=new ot;for(let dt=0;dt<I;dt++){const z=dt*F-Y;for(let $=0;$<at;$++){const mt=$*R-X;ht[M]=mt*U,ht[x]=z*A,ht[S]=nt,p.push(ht.x,ht.y,ht.z),ht[M]=0,ht[x]=0,ht[S]=O>0?1:-1,_.push(ht.x,ht.y,ht.z),g.push($/w),g.push(1-dt/B),k+=1}}for(let dt=0;dt<B;dt++)for(let z=0;z<w;z++){const $=v+z+at*dt,mt=v+z+at*(dt+1),j=v+(z+1)+at*(dt+1),ct=v+(z+1)+at*dt;d.push($,mt,ct),d.push(mt,j,ct),q+=6}f.addGroup(y,q,b),y+=q,v+=k}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new pu(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Vo(o){const t={};for(const n in o){t[n]={};for(const a in o[n]){const s=o[n][a];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][a]=null):t[n][a]=s.clone():Array.isArray(s)?t[n][a]=s.slice():t[n][a]=s}}return t}function Gn(o){const t={};for(let n=0;n<o.length;n++){const a=Vo(o[n]);for(const s in a)t[s]=a[s]}return t}function zA(o){const t=[];for(let n=0;n<o.length;n++)t.push(o[n].clone());return t}function Qy(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Re.workingColorSpace}const IA={clone:Vo,merge:Gn};var BA=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,FA=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Fa extends Rf{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=BA,this.fragmentShader=FA,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Vo(t.uniforms),this.uniformsGroups=zA(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(const s in this.uniforms){const c=this.uniforms[s].value;c&&c.isTexture?n.uniforms[s]={type:"t",value:c.toJSON(t).uuid}:c&&c.isColor?n.uniforms[s]={type:"c",value:c.getHex()}:c&&c.isVector2?n.uniforms[s]={type:"v2",value:c.toArray()}:c&&c.isVector3?n.uniforms[s]={type:"v3",value:c.toArray()}:c&&c.isVector4?n.uniforms[s]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?n.uniforms[s]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?n.uniforms[s]={type:"m4",value:c.toArray()}:n.uniforms[s]={value:c}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const a={};for(const s in this.extensions)this.extensions[s]===!0&&(a[s]=!0);return Object.keys(a).length>0&&(n.extensions=a),n}}class Jy extends xi{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new vn,this.projectionMatrix=new vn,this.projectionMatrixInverse=new vn,this.coordinateSystem=Oa}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const gr=new ot,Xx=new xe,Wx=new xe;class Wi extends Jy{constructor(t=50,n=1,a=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=a,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const n=.5*this.getFilmHeight()/t;this.fov=ym*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Jd*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ym*2*Math.atan(Math.tan(Jd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,a){gr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(gr.x,gr.y).multiplyScalar(-t/gr.z),gr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(gr.x,gr.y).multiplyScalar(-t/gr.z)}getViewSize(t,n){return this.getViewBounds(t,Xx,Wx),n.subVectors(Wx,Xx)}setViewOffset(t,n,a,s,u,c){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=s,this.view.width=u,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let n=t*Math.tan(Jd*.5*this.fov)/this.zoom,a=2*n,s=this.aspect*a,u=-.5*s;const c=this.view;if(this.view!==null&&this.view.enabled){const d=c.fullWidth,p=c.fullHeight;u+=c.offsetX*s/d,n-=c.offsetY*a/p,s*=c.width/d,a*=c.height/p}const f=this.filmOffset;f!==0&&(u+=t*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+s,n,n-a,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const So=-90,yo=1;class HA extends xi{constructor(t,n,a){super(),this.type="CubeCamera",this.renderTarget=a,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Wi(So,yo,t,n);s.layers=this.layers,this.add(s);const u=new Wi(So,yo,t,n);u.layers=this.layers,this.add(u);const c=new Wi(So,yo,t,n);c.layers=this.layers,this.add(c);const f=new Wi(So,yo,t,n);f.layers=this.layers,this.add(f);const d=new Wi(So,yo,t,n);d.layers=this.layers,this.add(d);const p=new Wi(So,yo,t,n);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,n=this.children.concat(),[a,s,u,c,f,d]=n;for(const p of n)this.remove(p);if(t===Oa)a.up.set(0,1,0),a.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(t===xf)a.up.set(0,-1,0),a.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of n)this.add(p),p.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:a,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[u,c,f,d,p,_]=this.children,g=t.getRenderTarget(),v=t.getActiveCubeFace(),y=t.getActiveMipmapLevel(),T=t.xr.enabled;t.xr.enabled=!1;const M=a.texture.generateMipmaps;a.texture.generateMipmaps=!1,t.setRenderTarget(a,0,s),t.render(n,u),t.setRenderTarget(a,1,s),t.render(n,c),t.setRenderTarget(a,2,s),t.render(n,f),t.setRenderTarget(a,3,s),t.render(n,d),t.setRenderTarget(a,4,s),t.render(n,p),a.texture.generateMipmaps=M,t.setRenderTarget(a,5,s),t.render(n,_),t.setRenderTarget(g,v,y),t.xr.enabled=T,a.texture.needsPMREMUpdate=!0}}class $y extends ii{constructor(t,n,a,s,u,c,f,d,p,_){t=t!==void 0?t:[],n=n!==void 0?n:Bo,super(t,n,a,s,u,c,f,d,p,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class GA extends gs{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;const a={width:t,height:t,depth:1},s=[a,a,a,a,a,a];this.texture=new $y(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:qi}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const a={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new pu(5,5,5),u=new Fa({name:"CubemapFromEquirect",uniforms:Vo(a.uniforms),vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,side:ni,blending:Tr});u.uniforms.tEquirect.value=n;const c=new aa(s,u),f=n.minFilter;return n.minFilter===us&&(n.minFilter=qi),new HA(1,10,this).update(t,c),n.minFilter=f,c.geometry.dispose(),c.material.dispose(),this}clear(t,n,a,s){const u=t.getRenderTarget();for(let c=0;c<6;c++)t.setRenderTarget(this,c),t.clear(n,a,s);t.setRenderTarget(u)}}const gp=new ot,VA=new ot,kA=new le;class is{constructor(t=new ot(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,a,s){return this.normal.set(t,n,a),this.constant=s,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,a){const s=gp.subVectors(a,n).cross(VA.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n){const a=t.delta(gp),s=this.normal.dot(a);if(s===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;const u=-(t.start.dot(this.normal)+this.constant)/s;return u<0||u>1?null:n.copy(t.start).addScaledVector(a,u)}intersectsLine(t){const n=this.distanceToPoint(t.start),a=this.distanceToPoint(t.end);return n<0&&a>0||a<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){const a=n||kA.getNormalMatrix(t),s=this.coplanarPoint(gp).applyMatrix4(t),u=this.normal.applyMatrix3(a).normalize();return this.constant=-s.dot(u),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const $r=new t_,Wc=new ot;class tM{constructor(t=new is,n=new is,a=new is,s=new is,u=new is,c=new is){this.planes=[t,n,a,s,u,c]}set(t,n,a,s,u,c){const f=this.planes;return f[0].copy(t),f[1].copy(n),f[2].copy(a),f[3].copy(s),f[4].copy(u),f[5].copy(c),this}copy(t){const n=this.planes;for(let a=0;a<6;a++)n[a].copy(t.planes[a]);return this}setFromProjectionMatrix(t,n=Oa){const a=this.planes,s=t.elements,u=s[0],c=s[1],f=s[2],d=s[3],p=s[4],_=s[5],g=s[6],v=s[7],y=s[8],T=s[9],M=s[10],x=s[11],S=s[12],U=s[13],A=s[14],L=s[15];if(a[0].setComponents(d-u,v-p,x-y,L-S).normalize(),a[1].setComponents(d+u,v+p,x+y,L+S).normalize(),a[2].setComponents(d+c,v+_,x+T,L+U).normalize(),a[3].setComponents(d-c,v-_,x-T,L-U).normalize(),a[4].setComponents(d-f,v-g,x-M,L-A).normalize(),n===Oa)a[5].setComponents(d+f,v+g,x+M,L+A).normalize();else if(n===xf)a[5].setComponents(f,g,M,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),$r.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),$r.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere($r)}intersectsSprite(t){return $r.center.set(0,0,0),$r.radius=.7071067811865476,$r.applyMatrix4(t.matrixWorld),this.intersectsSphere($r)}intersectsSphere(t){const n=this.planes,a=t.center,s=-t.radius;for(let u=0;u<6;u++)if(n[u].distanceToPoint(a)<s)return!1;return!0}intersectsBox(t){const n=this.planes;for(let a=0;a<6;a++){const s=n[a];if(Wc.x=s.normal.x>0?t.max.x:t.min.x,Wc.y=s.normal.y>0?t.max.y:t.min.y,Wc.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Wc)<0)return!1}return!0}containsPoint(t){const n=this.planes;for(let a=0;a<6;a++)if(n[a].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function eM(){let o=null,t=!1,n=null,a=null;function s(u,c){n(u,c),a=o.requestAnimationFrame(s)}return{start:function(){t!==!0&&n!==null&&(a=o.requestAnimationFrame(s),t=!0)},stop:function(){o.cancelAnimationFrame(a),t=!1},setAnimationLoop:function(u){n=u},setContext:function(u){o=u}}}function XA(o){const t=new WeakMap;function n(f,d){const p=f.array,_=f.usage,g=p.byteLength,v=o.createBuffer();o.bindBuffer(d,v),o.bufferData(d,p,_),f.onUploadCallback();let y;if(p instanceof Float32Array)y=o.FLOAT;else if(p instanceof Uint16Array)f.isFloat16BufferAttribute?y=o.HALF_FLOAT:y=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)y=o.SHORT;else if(p instanceof Uint32Array)y=o.UNSIGNED_INT;else if(p instanceof Int32Array)y=o.INT;else if(p instanceof Int8Array)y=o.BYTE;else if(p instanceof Uint8Array)y=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)y=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:v,type:y,bytesPerElement:p.BYTES_PER_ELEMENT,version:f.version,size:g}}function a(f,d,p){const _=d.array,g=d._updateRange,v=d.updateRanges;if(o.bindBuffer(p,f),g.count===-1&&v.length===0&&o.bufferSubData(p,0,_),v.length!==0){for(let y=0,T=v.length;y<T;y++){const M=v[y];o.bufferSubData(p,M.start*_.BYTES_PER_ELEMENT,_,M.start,M.count)}d.clearUpdateRanges()}g.count!==-1&&(o.bufferSubData(p,g.offset*_.BYTES_PER_ELEMENT,_,g.offset,g.count),g.count=-1),d.onUploadCallback()}function s(f){return f.isInterleavedBufferAttribute&&(f=f.data),t.get(f)}function u(f){f.isInterleavedBufferAttribute&&(f=f.data);const d=t.get(f);d&&(o.deleteBuffer(d.buffer),t.delete(f))}function c(f,d){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const _=t.get(f);(!_||_.version<f.version)&&t.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const p=t.get(f);if(p===void 0)t.set(f,n(f,d));else if(p.version<f.version){if(p.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(p.buffer,f,d),p.version=f.version}}return{get:s,remove:u,update:c}}class mu extends Ss{constructor(t=1,n=1,a=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:a,heightSegments:s};const u=t/2,c=n/2,f=Math.floor(a),d=Math.floor(s),p=f+1,_=d+1,g=t/f,v=n/d,y=[],T=[],M=[],x=[];for(let S=0;S<_;S++){const U=S*v-c;for(let A=0;A<p;A++){const L=A*g-u;T.push(L,-U,0),M.push(0,0,1),x.push(A/f),x.push(1-S/d)}}for(let S=0;S<d;S++)for(let U=0;U<f;U++){const A=U+p*S,L=U+p*(S+1),P=U+1+p*(S+1),O=U+1+p*S;y.push(A,L,O),y.push(L,P,O)}this.setIndex(y),this.setAttribute("position",new ps(T,3)),this.setAttribute("normal",new ps(M,3)),this.setAttribute("uv",new ps(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new mu(t.width,t.height,t.widthSegments,t.heightSegments)}}var WA=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,qA=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,YA=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,jA=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ZA=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,KA=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,QA=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,JA=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,$A=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,tR=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,eR=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,nR=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,iR=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,aR=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,rR=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,sR=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,oR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,lR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,uR=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,cR=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,fR=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,hR=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,dR=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,pR=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,mR=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,_R=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,gR=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,vR=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,xR=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,SR=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,yR="gl_FragColor = linearToOutputTexel( gl_FragColor );",MR=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ER=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,TR=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,bR=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,AR=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,RR=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,CR=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,wR=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,DR=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,UR=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,LR=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,NR=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,OR=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,PR=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,zR=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,IR=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,BR=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,FR=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,HR=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,GR=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,VR=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,kR=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,XR=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,WR=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,qR=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,YR=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,jR=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ZR=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,KR=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,QR=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,JR=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,$R=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,tC=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,eC=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,nC=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,iC=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,aC=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,rC=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sC=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,oC=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lC=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,uC=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,cC=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fC=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hC=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,dC=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,pC=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,mC=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,_C=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,gC=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,vC=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,xC=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,SC=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,yC=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,MC=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,EC=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,TC=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,bC=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,AC=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,RC=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,CC=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,wC=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,DC=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,UC=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,LC=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,NC=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,OC=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,PC=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,zC=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,IC=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,BC=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,FC=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,HC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,GC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,VC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,kC=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const XC=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,WC=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,YC=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ZC=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,KC=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,QC=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,JC=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,$C=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,t2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,e2=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,n2=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,i2=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,a2=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,r2=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,s2=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,o2=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,l2=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,u2=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,c2=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,f2=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,h2=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,d2=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,p2=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,m2=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_2=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,g2=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,v2=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,x2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,S2=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,y2=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,M2=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,E2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,oe={alphahash_fragment:WA,alphahash_pars_fragment:qA,alphamap_fragment:YA,alphamap_pars_fragment:jA,alphatest_fragment:ZA,alphatest_pars_fragment:KA,aomap_fragment:QA,aomap_pars_fragment:JA,batching_pars_vertex:$A,batching_vertex:tR,begin_vertex:eR,beginnormal_vertex:nR,bsdfs:iR,iridescence_fragment:aR,bumpmap_pars_fragment:rR,clipping_planes_fragment:sR,clipping_planes_pars_fragment:oR,clipping_planes_pars_vertex:lR,clipping_planes_vertex:uR,color_fragment:cR,color_pars_fragment:fR,color_pars_vertex:hR,color_vertex:dR,common:pR,cube_uv_reflection_fragment:mR,defaultnormal_vertex:_R,displacementmap_pars_vertex:gR,displacementmap_vertex:vR,emissivemap_fragment:xR,emissivemap_pars_fragment:SR,colorspace_fragment:yR,colorspace_pars_fragment:MR,envmap_fragment:ER,envmap_common_pars_fragment:TR,envmap_pars_fragment:bR,envmap_pars_vertex:AR,envmap_physical_pars_fragment:IR,envmap_vertex:RR,fog_vertex:CR,fog_pars_vertex:wR,fog_fragment:DR,fog_pars_fragment:UR,gradientmap_pars_fragment:LR,lightmap_pars_fragment:NR,lights_lambert_fragment:OR,lights_lambert_pars_fragment:PR,lights_pars_begin:zR,lights_toon_fragment:BR,lights_toon_pars_fragment:FR,lights_phong_fragment:HR,lights_phong_pars_fragment:GR,lights_physical_fragment:VR,lights_physical_pars_fragment:kR,lights_fragment_begin:XR,lights_fragment_maps:WR,lights_fragment_end:qR,logdepthbuf_fragment:YR,logdepthbuf_pars_fragment:jR,logdepthbuf_pars_vertex:ZR,logdepthbuf_vertex:KR,map_fragment:QR,map_pars_fragment:JR,map_particle_fragment:$R,map_particle_pars_fragment:tC,metalnessmap_fragment:eC,metalnessmap_pars_fragment:nC,morphinstance_vertex:iC,morphcolor_vertex:aC,morphnormal_vertex:rC,morphtarget_pars_vertex:sC,morphtarget_vertex:oC,normal_fragment_begin:lC,normal_fragment_maps:uC,normal_pars_fragment:cC,normal_pars_vertex:fC,normal_vertex:hC,normalmap_pars_fragment:dC,clearcoat_normal_fragment_begin:pC,clearcoat_normal_fragment_maps:mC,clearcoat_pars_fragment:_C,iridescence_pars_fragment:gC,opaque_fragment:vC,packing:xC,premultiplied_alpha_fragment:SC,project_vertex:yC,dithering_fragment:MC,dithering_pars_fragment:EC,roughnessmap_fragment:TC,roughnessmap_pars_fragment:bC,shadowmap_pars_fragment:AC,shadowmap_pars_vertex:RC,shadowmap_vertex:CC,shadowmask_pars_fragment:wC,skinbase_vertex:DC,skinning_pars_vertex:UC,skinning_vertex:LC,skinnormal_vertex:NC,specularmap_fragment:OC,specularmap_pars_fragment:PC,tonemapping_fragment:zC,tonemapping_pars_fragment:IC,transmission_fragment:BC,transmission_pars_fragment:FC,uv_pars_fragment:HC,uv_pars_vertex:GC,uv_vertex:VC,worldpos_vertex:kC,background_vert:XC,background_frag:WC,backgroundCube_vert:qC,backgroundCube_frag:YC,cube_vert:jC,cube_frag:ZC,depth_vert:KC,depth_frag:QC,distanceRGBA_vert:JC,distanceRGBA_frag:$C,equirect_vert:t2,equirect_frag:e2,linedashed_vert:n2,linedashed_frag:i2,meshbasic_vert:a2,meshbasic_frag:r2,meshlambert_vert:s2,meshlambert_frag:o2,meshmatcap_vert:l2,meshmatcap_frag:u2,meshnormal_vert:c2,meshnormal_frag:f2,meshphong_vert:h2,meshphong_frag:d2,meshphysical_vert:p2,meshphysical_frag:m2,meshtoon_vert:_2,meshtoon_frag:g2,points_vert:v2,points_frag:x2,shadow_vert:S2,shadow_frag:y2,sprite_vert:M2,sprite_frag:E2},Lt={common:{diffuse:{value:new Oe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new le},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new le}},envmap:{envMap:{value:null},envMapRotation:{value:new le},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new le}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new le}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new le},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new le},normalScale:{value:new xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new le},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new le}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new le}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new le}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Oe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Oe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0},uvTransform:{value:new le}},sprite:{diffuse:{value:new Oe(16777215)},opacity:{value:1},center:{value:new xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new le},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0}}},ta={basic:{uniforms:Gn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.fog]),vertexShader:oe.meshbasic_vert,fragmentShader:oe.meshbasic_frag},lambert:{uniforms:Gn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new Oe(0)}}]),vertexShader:oe.meshlambert_vert,fragmentShader:oe.meshlambert_frag},phong:{uniforms:Gn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new Oe(0)},specular:{value:new Oe(1118481)},shininess:{value:30}}]),vertexShader:oe.meshphong_vert,fragmentShader:oe.meshphong_frag},standard:{uniforms:Gn([Lt.common,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.roughnessmap,Lt.metalnessmap,Lt.fog,Lt.lights,{emissive:{value:new Oe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:oe.meshphysical_vert,fragmentShader:oe.meshphysical_frag},toon:{uniforms:Gn([Lt.common,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.gradientmap,Lt.fog,Lt.lights,{emissive:{value:new Oe(0)}}]),vertexShader:oe.meshtoon_vert,fragmentShader:oe.meshtoon_frag},matcap:{uniforms:Gn([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,{matcap:{value:null}}]),vertexShader:oe.meshmatcap_vert,fragmentShader:oe.meshmatcap_frag},points:{uniforms:Gn([Lt.points,Lt.fog]),vertexShader:oe.points_vert,fragmentShader:oe.points_frag},dashed:{uniforms:Gn([Lt.common,Lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:oe.linedashed_vert,fragmentShader:oe.linedashed_frag},depth:{uniforms:Gn([Lt.common,Lt.displacementmap]),vertexShader:oe.depth_vert,fragmentShader:oe.depth_frag},normal:{uniforms:Gn([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,{opacity:{value:1}}]),vertexShader:oe.meshnormal_vert,fragmentShader:oe.meshnormal_frag},sprite:{uniforms:Gn([Lt.sprite,Lt.fog]),vertexShader:oe.sprite_vert,fragmentShader:oe.sprite_frag},background:{uniforms:{uvTransform:{value:new le},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:oe.background_vert,fragmentShader:oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new le}},vertexShader:oe.backgroundCube_vert,fragmentShader:oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:oe.cube_vert,fragmentShader:oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:oe.equirect_vert,fragmentShader:oe.equirect_frag},distanceRGBA:{uniforms:Gn([Lt.common,Lt.displacementmap,{referencePosition:{value:new ot},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:oe.distanceRGBA_vert,fragmentShader:oe.distanceRGBA_frag},shadow:{uniforms:Gn([Lt.lights,Lt.fog,{color:{value:new Oe(0)},opacity:{value:1}}]),vertexShader:oe.shadow_vert,fragmentShader:oe.shadow_frag}};ta.physical={uniforms:Gn([ta.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new le},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new le},clearcoatNormalScale:{value:new xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new le},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new le},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new le},sheen:{value:0},sheenColor:{value:new Oe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new le},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new le},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new le},transmissionSamplerSize:{value:new xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new le},attenuationDistance:{value:0},attenuationColor:{value:new Oe(0)},specularColor:{value:new Oe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new le},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new le},anisotropyVector:{value:new xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new le}}]),vertexShader:oe.meshphysical_vert,fragmentShader:oe.meshphysical_frag};const qc={r:0,b:0,g:0},ts=new Ba,T2=new vn;function b2(o,t,n,a,s,u,c){const f=new Oe(0);let d=u===!0?0:1,p,_,g=null,v=0,y=null;function T(U){let A=U.isScene===!0?U.background:null;return A&&A.isTexture&&(A=(U.backgroundBlurriness>0?n:t).get(A)),A}function M(U){let A=!1;const L=T(U);L===null?S(f,d):L&&L.isColor&&(S(L,1),A=!0);const P=o.xr.getEnvironmentBlendMode();P==="additive"?a.buffers.color.setClear(0,0,0,1,c):P==="alpha-blend"&&a.buffers.color.setClear(0,0,0,0,c),(o.autoClear||A)&&(a.buffers.depth.setTest(!0),a.buffers.depth.setMask(!0),a.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function x(U,A){const L=T(A);L&&(L.isCubeTexture||L.mapping===bf)?(_===void 0&&(_=new aa(new pu(1,1,1),new Fa({name:"BackgroundCubeMaterial",uniforms:Vo(ta.backgroundCube.uniforms),vertexShader:ta.backgroundCube.vertexShader,fragmentShader:ta.backgroundCube.fragmentShader,side:ni,depthTest:!1,depthWrite:!1,fog:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(P,O,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(_)),ts.copy(A.backgroundRotation),ts.x*=-1,ts.y*=-1,ts.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(ts.y*=-1,ts.z*=-1),_.material.uniforms.envMap.value=L,_.material.uniforms.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(T2.makeRotationFromEuler(ts)),_.material.toneMapped=Re.getTransfer(L.colorSpace)!==ke,(g!==L||v!==L.version||y!==o.toneMapping)&&(_.material.needsUpdate=!0,g=L,v=L.version,y=o.toneMapping),_.layers.enableAll(),U.unshift(_,_.geometry,_.material,0,0,null)):L&&L.isTexture&&(p===void 0&&(p=new aa(new mu(2,2),new Fa({name:"BackgroundMaterial",uniforms:Vo(ta.background.uniforms),vertexShader:ta.background.vertexShader,fragmentShader:ta.background.fragmentShader,side:Cr,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(p)),p.material.uniforms.t2D.value=L,p.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,p.material.toneMapped=Re.getTransfer(L.colorSpace)!==ke,L.matrixAutoUpdate===!0&&L.updateMatrix(),p.material.uniforms.uvTransform.value.copy(L.matrix),(g!==L||v!==L.version||y!==o.toneMapping)&&(p.material.needsUpdate=!0,g=L,v=L.version,y=o.toneMapping),p.layers.enableAll(),U.unshift(p,p.geometry,p.material,0,0,null))}function S(U,A){U.getRGB(qc,Qy(o)),a.buffers.color.setClear(qc.r,qc.g,qc.b,A,c)}return{getClearColor:function(){return f},setClearColor:function(U,A=1){f.set(U),d=A,S(f,d)},getClearAlpha:function(){return d},setClearAlpha:function(U){d=U,S(f,d)},render:M,addToRenderList:x}}function A2(o,t){const n=o.getParameter(o.MAX_VERTEX_ATTRIBS),a={},s=v(null);let u=s,c=!1;function f(R,F,X,Y,nt){let at=!1;const I=g(Y,X,F);u!==I&&(u=I,p(u.object)),at=y(R,Y,X,nt),at&&T(R,Y,X,nt),nt!==null&&t.update(nt,o.ELEMENT_ARRAY_BUFFER),(at||c)&&(c=!1,L(R,F,X,Y),nt!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(nt).buffer))}function d(){return o.createVertexArray()}function p(R){return o.bindVertexArray(R)}function _(R){return o.deleteVertexArray(R)}function g(R,F,X){const Y=X.wireframe===!0;let nt=a[R.id];nt===void 0&&(nt={},a[R.id]=nt);let at=nt[F.id];at===void 0&&(at={},nt[F.id]=at);let I=at[Y];return I===void 0&&(I=v(d()),at[Y]=I),I}function v(R){const F=[],X=[],Y=[];for(let nt=0;nt<n;nt++)F[nt]=0,X[nt]=0,Y[nt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:X,attributeDivisors:Y,object:R,attributes:{},index:null}}function y(R,F,X,Y){const nt=u.attributes,at=F.attributes;let I=0;const k=X.getAttributes();for(const q in k)if(k[q].location>=0){const dt=nt[q];let z=at[q];if(z===void 0&&(q==="instanceMatrix"&&R.instanceMatrix&&(z=R.instanceMatrix),q==="instanceColor"&&R.instanceColor&&(z=R.instanceColor)),dt===void 0||dt.attribute!==z||z&&dt.data!==z.data)return!0;I++}return u.attributesNum!==I||u.index!==Y}function T(R,F,X,Y){const nt={},at=F.attributes;let I=0;const k=X.getAttributes();for(const q in k)if(k[q].location>=0){let dt=at[q];dt===void 0&&(q==="instanceMatrix"&&R.instanceMatrix&&(dt=R.instanceMatrix),q==="instanceColor"&&R.instanceColor&&(dt=R.instanceColor));const z={};z.attribute=dt,dt&&dt.data&&(z.data=dt.data),nt[q]=z,I++}u.attributes=nt,u.attributesNum=I,u.index=Y}function M(){const R=u.newAttributes;for(let F=0,X=R.length;F<X;F++)R[F]=0}function x(R){S(R,0)}function S(R,F){const X=u.newAttributes,Y=u.enabledAttributes,nt=u.attributeDivisors;X[R]=1,Y[R]===0&&(o.enableVertexAttribArray(R),Y[R]=1),nt[R]!==F&&(o.vertexAttribDivisor(R,F),nt[R]=F)}function U(){const R=u.newAttributes,F=u.enabledAttributes;for(let X=0,Y=F.length;X<Y;X++)F[X]!==R[X]&&(o.disableVertexAttribArray(X),F[X]=0)}function A(R,F,X,Y,nt,at,I){I===!0?o.vertexAttribIPointer(R,F,X,nt,at):o.vertexAttribPointer(R,F,X,Y,nt,at)}function L(R,F,X,Y){M();const nt=Y.attributes,at=X.getAttributes(),I=F.defaultAttributeValues;for(const k in at){const q=at[k];if(q.location>=0){let ht=nt[k];if(ht===void 0&&(k==="instanceMatrix"&&R.instanceMatrix&&(ht=R.instanceMatrix),k==="instanceColor"&&R.instanceColor&&(ht=R.instanceColor)),ht!==void 0){const dt=ht.normalized,z=ht.itemSize,$=t.get(ht);if($===void 0)continue;const mt=$.buffer,j=$.type,ct=$.bytesPerElement,St=j===o.INT||j===o.UNSIGNED_INT||ht.gpuType===Ym;if(ht.isInterleavedBufferAttribute){const Tt=ht.data,Gt=Tt.stride,Ht=ht.offset;if(Tt.isInstancedInterleavedBuffer){for(let ie=0;ie<q.locationSize;ie++)S(q.location+ie,Tt.meshPerAttribute);R.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=Tt.meshPerAttribute*Tt.count)}else for(let ie=0;ie<q.locationSize;ie++)x(q.location+ie);o.bindBuffer(o.ARRAY_BUFFER,mt);for(let ie=0;ie<q.locationSize;ie++)A(q.location+ie,z/q.locationSize,j,dt,Gt*ct,(Ht+z/q.locationSize*ie)*ct,St)}else{if(ht.isInstancedBufferAttribute){for(let Tt=0;Tt<q.locationSize;Tt++)S(q.location+Tt,ht.meshPerAttribute);R.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let Tt=0;Tt<q.locationSize;Tt++)x(q.location+Tt);o.bindBuffer(o.ARRAY_BUFFER,mt);for(let Tt=0;Tt<q.locationSize;Tt++)A(q.location+Tt,z/q.locationSize,j,dt,z*ct,z/q.locationSize*Tt*ct,St)}}else if(I!==void 0){const dt=I[k];if(dt!==void 0)switch(dt.length){case 2:o.vertexAttrib2fv(q.location,dt);break;case 3:o.vertexAttrib3fv(q.location,dt);break;case 4:o.vertexAttrib4fv(q.location,dt);break;default:o.vertexAttrib1fv(q.location,dt)}}}}U()}function P(){B();for(const R in a){const F=a[R];for(const X in F){const Y=F[X];for(const nt in Y)_(Y[nt].object),delete Y[nt];delete F[X]}delete a[R]}}function O(R){if(a[R.id]===void 0)return;const F=a[R.id];for(const X in F){const Y=F[X];for(const nt in Y)_(Y[nt].object),delete Y[nt];delete F[X]}delete a[R.id]}function w(R){for(const F in a){const X=a[F];if(X[R.id]===void 0)continue;const Y=X[R.id];for(const nt in Y)_(Y[nt].object),delete Y[nt];delete X[R.id]}}function B(){b(),c=!0,u!==s&&(u=s,p(u.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:f,reset:B,resetDefaultState:b,dispose:P,releaseStatesOfGeometry:O,releaseStatesOfProgram:w,initAttributes:M,enableAttribute:x,disableUnusedAttributes:U}}function R2(o,t,n){let a;function s(p){a=p}function u(p,_){o.drawArrays(a,p,_),n.update(_,a,1)}function c(p,_,g){g!==0&&(o.drawArraysInstanced(a,p,_,g),n.update(_,a,g))}function f(p,_,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(a,p,0,_,0,g);let y=0;for(let T=0;T<g;T++)y+=_[T];n.update(y,a,1)}function d(p,_,g,v){if(g===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let T=0;T<p.length;T++)c(p[T],_[T],v[T]);else{y.multiDrawArraysInstancedWEBGL(a,p,0,_,0,v,0,g);let T=0;for(let M=0;M<g;M++)T+=_[M];for(let M=0;M<v.length;M++)n.update(T,a,v[M])}}this.setMode=s,this.render=u,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=d}function C2(o,t,n,a){let s;function u(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const O=t.get("EXT_texture_filter_anisotropic");s=o.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function c(O){return!(O!==Yi&&a.convert(O)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(O){const w=O===cu&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(O!==Ia&&a.convert(O)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==Na&&!w)}function d(O){if(O==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=n.precision!==void 0?n.precision:"highp";const _=d(p);_!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",_,"instead."),p=_);const g=n.logarithmicDepthBuffer===!0,v=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),y=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=o.getParameter(o.MAX_TEXTURE_SIZE),M=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),x=o.getParameter(o.MAX_VERTEX_ATTRIBS),S=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),U=o.getParameter(o.MAX_VARYING_VECTORS),A=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),L=y>0,P=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:d,textureFormatReadable:c,textureTypeReadable:f,precision:p,logarithmicDepthBuffer:g,maxTextures:v,maxVertexTextures:y,maxTextureSize:T,maxCubemapSize:M,maxAttributes:x,maxVertexUniforms:S,maxVaryings:U,maxFragmentUniforms:A,vertexTextures:L,maxSamples:P}}function w2(o){const t=this;let n=null,a=0,s=!1,u=!1;const c=new is,f=new le,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(g,v){const y=g.length!==0||v||a!==0||s;return s=v,a=g.length,y},this.beginShadows=function(){u=!0,_(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(g,v){n=_(g,v,0)},this.setState=function(g,v,y){const T=g.clippingPlanes,M=g.clipIntersection,x=g.clipShadows,S=o.get(g);if(!s||T===null||T.length===0||u&&!x)u?_(null):p();else{const U=u?0:a,A=U*4;let L=S.clippingState||null;d.value=L,L=_(T,v,A,y);for(let P=0;P!==A;++P)L[P]=n[P];S.clippingState=L,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=U}};function p(){d.value!==n&&(d.value=n,d.needsUpdate=a>0),t.numPlanes=a,t.numIntersection=0}function _(g,v,y,T){const M=g!==null?g.length:0;let x=null;if(M!==0){if(x=d.value,T!==!0||x===null){const S=y+M*4,U=v.matrixWorldInverse;f.getNormalMatrix(U),(x===null||x.length<S)&&(x=new Float32Array(S));for(let A=0,L=y;A!==M;++A,L+=4)c.copy(g[A]).applyMatrix4(U,f),c.normal.toArray(x,L),x[L+3]=c.constant}d.value=x,d.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,x}}function D2(o){let t=new WeakMap;function n(c,f){return f===Wp?c.mapping=Bo:f===qp&&(c.mapping=Fo),c}function a(c){if(c&&c.isTexture){const f=c.mapping;if(f===Wp||f===qp)if(t.has(c)){const d=t.get(c).texture;return n(d,c.mapping)}else{const d=c.image;if(d&&d.height>0){const p=new GA(d.height);return p.fromEquirectangularTexture(o,c),t.set(c,p),c.addEventListener("dispose",s),n(p.texture,c.mapping)}else return null}}return c}function s(c){const f=c.target;f.removeEventListener("dispose",s);const d=t.get(f);d!==void 0&&(t.delete(f),d.dispose())}function u(){t=new WeakMap}return{get:a,dispose:u}}class nM extends Jy{constructor(t=-1,n=1,a=1,s=-1,u=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=a,this.bottom=s,this.near=u,this.far=c,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,a,s,u,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=s,this.view.width=u,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),a=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let u=a-t,c=a+t,f=s+n,d=s-n;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=p*this.view.offsetX,c=u+p*this.view.width,f-=_*this.view.offsetY,d=f-_*this.view.height}this.projectionMatrix.makeOrthographic(u,c,f,d,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const bo=4,qx=[.125,.215,.35,.446,.526,.582],ss=20,vp=new nM,Yx=new Oe;let xp=null,Sp=0,yp=0,Mp=!1;const as=(1+Math.sqrt(5))/2,Mo=1/as,jx=[new ot(-as,Mo,0),new ot(as,Mo,0),new ot(-Mo,0,as),new ot(Mo,0,as),new ot(0,as,-Mo),new ot(0,as,Mo),new ot(-1,1,-1),new ot(1,1,-1),new ot(-1,1,1),new ot(1,1,1)];class Zx{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,n=0,a=.1,s=100){xp=this._renderer.getRenderTarget(),Sp=this._renderer.getActiveCubeFace(),yp=this._renderer.getActiveMipmapLevel(),Mp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const u=this._allocateTargets();return u.depthBuffer=!0,this._sceneToCubeUV(t,a,s,u),n>0&&this._blur(u,0,0,n),this._applyPMREM(u),this._cleanup(u),u}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Jx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Qx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(xp,Sp,yp),this._renderer.xr.enabled=Mp,t.scissorTest=!1,Yc(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===Bo||t.mapping===Fo?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),xp=this._renderer.getRenderTarget(),Sp=this._renderer.getActiveCubeFace(),yp=this._renderer.getActiveMipmapLevel(),Mp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const a=n||this._allocateTargets();return this._textureToCubeUV(t,a),this._applyPMREM(a),this._cleanup(a),a}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,a={magFilter:qi,minFilter:qi,generateMipmaps:!1,type:cu,format:Yi,colorSpace:Dr,depthBuffer:!1},s=Kx(t,n,a);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Kx(t,n,a);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=U2(u)),this._blurMaterial=L2(u,t,n)}return s}_compileMaterial(t){const n=new aa(this._lodPlanes[0],t);this._renderer.compile(n,vp)}_sceneToCubeUV(t,n,a,s){const f=new Wi(90,1,n,a),d=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],_=this._renderer,g=_.autoClear,v=_.toneMapping;_.getClearColor(Yx),_.toneMapping=br,_.autoClear=!1;const y=new jy({name:"PMREM.Background",side:ni,depthWrite:!1,depthTest:!1}),T=new aa(new pu,y);let M=!1;const x=t.background;x?x.isColor&&(y.color.copy(x),t.background=null,M=!0):(y.color.copy(Yx),M=!0);for(let S=0;S<6;S++){const U=S%3;U===0?(f.up.set(0,d[S],0),f.lookAt(p[S],0,0)):U===1?(f.up.set(0,0,d[S]),f.lookAt(0,p[S],0)):(f.up.set(0,d[S],0),f.lookAt(0,0,p[S]));const A=this._cubeSize;Yc(s,U*A,S>2?A:0,A,A),_.setRenderTarget(s),M&&_.render(T,f),_.render(t,f)}T.geometry.dispose(),T.material.dispose(),_.toneMapping=v,_.autoClear=g,t.background=x}_textureToCubeUV(t,n){const a=this._renderer,s=t.mapping===Bo||t.mapping===Fo;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Jx()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Qx());const u=s?this._cubemapMaterial:this._equirectMaterial,c=new aa(this._lodPlanes[0],u),f=u.uniforms;f.envMap.value=t;const d=this._cubeSize;Yc(n,0,0,3*d,2*d),a.setRenderTarget(n),a.render(c,vp)}_applyPMREM(t){const n=this._renderer,a=n.autoClear;n.autoClear=!1;const s=this._lodPlanes.length;for(let u=1;u<s;u++){const c=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),f=jx[(s-u-1)%jx.length];this._blur(t,u-1,u,c,f)}n.autoClear=a}_blur(t,n,a,s,u){const c=this._pingPongRenderTarget;this._halfBlur(t,c,n,a,s,"latitudinal",u),this._halfBlur(c,t,a,a,s,"longitudinal",u)}_halfBlur(t,n,a,s,u,c,f){const d=this._renderer,p=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const _=3,g=new aa(this._lodPlanes[s],p),v=p.uniforms,y=this._sizeLods[a]-1,T=isFinite(u)?Math.PI/(2*y):2*Math.PI/(2*ss-1),M=u/T,x=isFinite(u)?1+Math.floor(_*M):ss;x>ss&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${ss}`);const S=[];let U=0;for(let w=0;w<ss;++w){const B=w/M,b=Math.exp(-B*B/2);S.push(b),w===0?U+=b:w<x&&(U+=2*b)}for(let w=0;w<S.length;w++)S[w]=S[w]/U;v.envMap.value=t.texture,v.samples.value=x,v.weights.value=S,v.latitudinal.value=c==="latitudinal",f&&(v.poleAxis.value=f);const{_lodMax:A}=this;v.dTheta.value=T,v.mipInt.value=A-a;const L=this._sizeLods[s],P=3*L*(s>A-bo?s-A+bo:0),O=4*(this._cubeSize-L);Yc(n,P,O,3*L,2*L),d.setRenderTarget(n),d.render(g,vp)}}function U2(o){const t=[],n=[],a=[];let s=o;const u=o-bo+1+qx.length;for(let c=0;c<u;c++){const f=Math.pow(2,s);n.push(f);let d=1/f;c>o-bo?d=qx[c-o+bo-1]:c===0&&(d=0),a.push(d);const p=1/(f-2),_=-p,g=1+p,v=[_,_,g,_,g,g,_,_,g,g,_,g],y=6,T=6,M=3,x=2,S=1,U=new Float32Array(M*T*y),A=new Float32Array(x*T*y),L=new Float32Array(S*T*y);for(let O=0;O<y;O++){const w=O%3*2/3-1,B=O>2?0:-1,b=[w,B,0,w+2/3,B,0,w+2/3,B+1,0,w,B,0,w+2/3,B+1,0,w,B+1,0];U.set(b,M*T*O),A.set(v,x*T*O);const R=[O,O,O,O,O,O];L.set(R,S*T*O)}const P=new Ss;P.setAttribute("position",new ra(U,M)),P.setAttribute("uv",new ra(A,x)),P.setAttribute("faceIndex",new ra(L,S)),t.push(P),s>bo&&s--}return{lodPlanes:t,sizeLods:n,sigmas:a}}function Kx(o,t,n){const a=new gs(o,t,n);return a.texture.mapping=bf,a.texture.name="PMREM.cubeUv",a.scissorTest=!0,a}function Yc(o,t,n,a,s){o.viewport.set(t,n,a,s),o.scissor.set(t,n,a,s)}function L2(o,t,n){const a=new Float32Array(ss),s=new ot(0,1,0);return new Fa({name:"SphericalGaussianBlur",defines:{n:ss,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:a},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:e_(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Tr,depthTest:!1,depthWrite:!1})}function Qx(){return new Fa({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:e_(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Tr,depthTest:!1,depthWrite:!1})}function Jx(){return new Fa({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:e_(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Tr,depthTest:!1,depthWrite:!1})}function e_(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function N2(o){let t=new WeakMap,n=null;function a(f){if(f&&f.isTexture){const d=f.mapping,p=d===Wp||d===qp,_=d===Bo||d===Fo;if(p||_){let g=t.get(f);const v=g!==void 0?g.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==v)return n===null&&(n=new Zx(o)),g=p?n.fromEquirectangular(f,g):n.fromCubemap(f,g),g.texture.pmremVersion=f.pmremVersion,t.set(f,g),g.texture;if(g!==void 0)return g.texture;{const y=f.image;return p&&y&&y.height>0||_&&y&&s(y)?(n===null&&(n=new Zx(o)),g=p?n.fromEquirectangular(f):n.fromCubemap(f),g.texture.pmremVersion=f.pmremVersion,t.set(f,g),f.addEventListener("dispose",u),g.texture):null}}}return f}function s(f){let d=0;const p=6;for(let _=0;_<p;_++)f[_]!==void 0&&d++;return d===p}function u(f){const d=f.target;d.removeEventListener("dispose",u);const p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function c(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:a,dispose:c}}function O2(o){const t={};function n(a){if(t[a]!==void 0)return t[a];let s;switch(a){case"WEBGL_depth_texture":s=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=o.getExtension(a)}return t[a]=s,s}return{has:function(a){return n(a)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(a){const s=n(a);return s===null&&tu("THREE.WebGLRenderer: "+a+" extension not supported."),s}}}function P2(o,t,n,a){const s={},u=new WeakMap;function c(g){const v=g.target;v.index!==null&&t.remove(v.index);for(const T in v.attributes)t.remove(v.attributes[T]);for(const T in v.morphAttributes){const M=v.morphAttributes[T];for(let x=0,S=M.length;x<S;x++)t.remove(M[x])}v.removeEventListener("dispose",c),delete s[v.id];const y=u.get(v);y&&(t.remove(y),u.delete(v)),a.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,n.memory.geometries--}function f(g,v){return s[v.id]===!0||(v.addEventListener("dispose",c),s[v.id]=!0,n.memory.geometries++),v}function d(g){const v=g.attributes;for(const T in v)t.update(v[T],o.ARRAY_BUFFER);const y=g.morphAttributes;for(const T in y){const M=y[T];for(let x=0,S=M.length;x<S;x++)t.update(M[x],o.ARRAY_BUFFER)}}function p(g){const v=[],y=g.index,T=g.attributes.position;let M=0;if(y!==null){const U=y.array;M=y.version;for(let A=0,L=U.length;A<L;A+=3){const P=U[A+0],O=U[A+1],w=U[A+2];v.push(P,O,O,w,w,P)}}else if(T!==void 0){const U=T.array;M=T.version;for(let A=0,L=U.length/3-1;A<L;A+=3){const P=A+0,O=A+1,w=A+2;v.push(P,O,O,w,w,P)}}else return;const x=new(ky(v)?Ky:Zy)(v,1);x.version=M;const S=u.get(g);S&&t.remove(S),u.set(g,x)}function _(g){const v=u.get(g);if(v){const y=g.index;y!==null&&v.version<y.version&&p(g)}else p(g);return u.get(g)}return{get:f,update:d,getWireframeAttribute:_}}function z2(o,t,n){let a;function s(v){a=v}let u,c;function f(v){u=v.type,c=v.bytesPerElement}function d(v,y){o.drawElements(a,y,u,v*c),n.update(y,a,1)}function p(v,y,T){T!==0&&(o.drawElementsInstanced(a,y,u,v*c,T),n.update(y,a,T))}function _(v,y,T){if(T===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(a,y,0,u,v,0,T);let x=0;for(let S=0;S<T;S++)x+=y[S];n.update(x,a,1)}function g(v,y,T,M){if(T===0)return;const x=t.get("WEBGL_multi_draw");if(x===null)for(let S=0;S<v.length;S++)p(v[S]/c,y[S],M[S]);else{x.multiDrawElementsInstancedWEBGL(a,y,0,u,v,0,M,0,T);let S=0;for(let U=0;U<T;U++)S+=y[U];for(let U=0;U<M.length;U++)n.update(S,a,M[U])}}this.setMode=s,this.setIndex=f,this.render=d,this.renderInstances=p,this.renderMultiDraw=_,this.renderMultiDrawInstances=g}function I2(o){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function a(u,c,f){switch(n.calls++,c){case o.TRIANGLES:n.triangles+=f*(u/3);break;case o.LINES:n.lines+=f*(u/2);break;case o.LINE_STRIP:n.lines+=f*(u-1);break;case o.LINE_LOOP:n.lines+=f*u;break;case o.POINTS:n.points+=f*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:s,update:a}}function B2(o,t,n){const a=new WeakMap,s=new En;function u(c,f,d){const p=c.morphTargetInfluences,_=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,g=_!==void 0?_.length:0;let v=a.get(f);if(v===void 0||v.count!==g){let R=function(){B.dispose(),a.delete(f),f.removeEventListener("dispose",R)};var y=R;v!==void 0&&v.texture.dispose();const T=f.morphAttributes.position!==void 0,M=f.morphAttributes.normal!==void 0,x=f.morphAttributes.color!==void 0,S=f.morphAttributes.position||[],U=f.morphAttributes.normal||[],A=f.morphAttributes.color||[];let L=0;T===!0&&(L=1),M===!0&&(L=2),x===!0&&(L=3);let P=f.attributes.position.count*L,O=1;P>t.maxTextureSize&&(O=Math.ceil(P/t.maxTextureSize),P=t.maxTextureSize);const w=new Float32Array(P*O*4*g),B=new Wy(w,P,O,g);B.type=Na,B.needsUpdate=!0;const b=L*4;for(let F=0;F<g;F++){const X=S[F],Y=U[F],nt=A[F],at=P*O*4*F;for(let I=0;I<X.count;I++){const k=I*b;T===!0&&(s.fromBufferAttribute(X,I),w[at+k+0]=s.x,w[at+k+1]=s.y,w[at+k+2]=s.z,w[at+k+3]=0),M===!0&&(s.fromBufferAttribute(Y,I),w[at+k+4]=s.x,w[at+k+5]=s.y,w[at+k+6]=s.z,w[at+k+7]=0),x===!0&&(s.fromBufferAttribute(nt,I),w[at+k+8]=s.x,w[at+k+9]=s.y,w[at+k+10]=s.z,w[at+k+11]=nt.itemSize===4?s.w:1)}}v={count:g,texture:B,size:new xe(P,O)},a.set(f,v),f.addEventListener("dispose",R)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)d.getUniforms().setValue(o,"morphTexture",c.morphTexture,n);else{let T=0;for(let x=0;x<p.length;x++)T+=p[x];const M=f.morphTargetsRelative?1:1-T;d.getUniforms().setValue(o,"morphTargetBaseInfluence",M),d.getUniforms().setValue(o,"morphTargetInfluences",p)}d.getUniforms().setValue(o,"morphTargetsTexture",v.texture,n),d.getUniforms().setValue(o,"morphTargetsTextureSize",v.size)}return{update:u}}function F2(o,t,n,a){let s=new WeakMap;function u(d){const p=a.render.frame,_=d.geometry,g=t.get(d,_);if(s.get(g)!==p&&(t.update(g),s.set(g,p)),d.isInstancedMesh&&(d.hasEventListener("dispose",f)===!1&&d.addEventListener("dispose",f),s.get(d)!==p&&(n.update(d.instanceMatrix,o.ARRAY_BUFFER),d.instanceColor!==null&&n.update(d.instanceColor,o.ARRAY_BUFFER),s.set(d,p))),d.isSkinnedMesh){const v=d.skeleton;s.get(v)!==p&&(v.update(),s.set(v,p))}return g}function c(){s=new WeakMap}function f(d){const p=d.target;p.removeEventListener("dispose",f),n.remove(p.instanceMatrix),p.instanceColor!==null&&n.remove(p.instanceColor)}return{update:u,dispose:c}}class iM extends ii{constructor(t,n,a,s,u,c,f,d,p,_=Do){if(_!==Do&&_!==Go)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");a===void 0&&_===Do&&(a=_s),a===void 0&&_===Go&&(a=Ho),super(null,s,u,c,f,d,_,a,p),this.isDepthTexture=!0,this.image={width:t,height:n},this.magFilter=f!==void 0?f:Pi,this.minFilter=d!==void 0?d:Pi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const aM=new ii,$x=new iM(1,1),rM=new Wy,sM=new TA,oM=new $y,tS=[],eS=[],nS=new Float32Array(16),iS=new Float32Array(9),aS=new Float32Array(4);function Xo(o,t,n){const a=o[0];if(a<=0||a>0)return o;const s=t*n;let u=tS[s];if(u===void 0&&(u=new Float32Array(s),tS[s]=u),t!==0){a.toArray(u,0);for(let c=1,f=0;c!==t;++c)f+=n,o[c].toArray(u,f)}return u}function xn(o,t){if(o.length!==t.length)return!1;for(let n=0,a=o.length;n<a;n++)if(o[n]!==t[n])return!1;return!0}function Sn(o,t){for(let n=0,a=t.length;n<a;n++)o[n]=t[n]}function Cf(o,t){let n=eS[t];n===void 0&&(n=new Int32Array(t),eS[t]=n);for(let a=0;a!==t;++a)n[a]=o.allocateTextureUnit();return n}function H2(o,t){const n=this.cache;n[0]!==t&&(o.uniform1f(this.addr,t),n[0]=t)}function G2(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(xn(n,t))return;o.uniform2fv(this.addr,t),Sn(n,t)}}function V2(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(xn(n,t))return;o.uniform3fv(this.addr,t),Sn(n,t)}}function k2(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(xn(n,t))return;o.uniform4fv(this.addr,t),Sn(n,t)}}function X2(o,t){const n=this.cache,a=t.elements;if(a===void 0){if(xn(n,t))return;o.uniformMatrix2fv(this.addr,!1,t),Sn(n,t)}else{if(xn(n,a))return;aS.set(a),o.uniformMatrix2fv(this.addr,!1,aS),Sn(n,a)}}function W2(o,t){const n=this.cache,a=t.elements;if(a===void 0){if(xn(n,t))return;o.uniformMatrix3fv(this.addr,!1,t),Sn(n,t)}else{if(xn(n,a))return;iS.set(a),o.uniformMatrix3fv(this.addr,!1,iS),Sn(n,a)}}function q2(o,t){const n=this.cache,a=t.elements;if(a===void 0){if(xn(n,t))return;o.uniformMatrix4fv(this.addr,!1,t),Sn(n,t)}else{if(xn(n,a))return;nS.set(a),o.uniformMatrix4fv(this.addr,!1,nS),Sn(n,a)}}function Y2(o,t){const n=this.cache;n[0]!==t&&(o.uniform1i(this.addr,t),n[0]=t)}function j2(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(xn(n,t))return;o.uniform2iv(this.addr,t),Sn(n,t)}}function Z2(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(xn(n,t))return;o.uniform3iv(this.addr,t),Sn(n,t)}}function K2(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(xn(n,t))return;o.uniform4iv(this.addr,t),Sn(n,t)}}function Q2(o,t){const n=this.cache;n[0]!==t&&(o.uniform1ui(this.addr,t),n[0]=t)}function J2(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(xn(n,t))return;o.uniform2uiv(this.addr,t),Sn(n,t)}}function $2(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(xn(n,t))return;o.uniform3uiv(this.addr,t),Sn(n,t)}}function tw(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(xn(n,t))return;o.uniform4uiv(this.addr,t),Sn(n,t)}}function ew(o,t,n){const a=this.cache,s=n.allocateTextureUnit();a[0]!==s&&(o.uniform1i(this.addr,s),a[0]=s);let u;this.type===o.SAMPLER_2D_SHADOW?($x.compareFunction=Vy,u=$x):u=aM,n.setTexture2D(t||u,s)}function nw(o,t,n){const a=this.cache,s=n.allocateTextureUnit();a[0]!==s&&(o.uniform1i(this.addr,s),a[0]=s),n.setTexture3D(t||sM,s)}function iw(o,t,n){const a=this.cache,s=n.allocateTextureUnit();a[0]!==s&&(o.uniform1i(this.addr,s),a[0]=s),n.setTextureCube(t||oM,s)}function aw(o,t,n){const a=this.cache,s=n.allocateTextureUnit();a[0]!==s&&(o.uniform1i(this.addr,s),a[0]=s),n.setTexture2DArray(t||rM,s)}function rw(o){switch(o){case 5126:return H2;case 35664:return G2;case 35665:return V2;case 35666:return k2;case 35674:return X2;case 35675:return W2;case 35676:return q2;case 5124:case 35670:return Y2;case 35667:case 35671:return j2;case 35668:case 35672:return Z2;case 35669:case 35673:return K2;case 5125:return Q2;case 36294:return J2;case 36295:return $2;case 36296:return tw;case 35678:case 36198:case 36298:case 36306:case 35682:return ew;case 35679:case 36299:case 36307:return nw;case 35680:case 36300:case 36308:case 36293:return iw;case 36289:case 36303:case 36311:case 36292:return aw}}function sw(o,t){o.uniform1fv(this.addr,t)}function ow(o,t){const n=Xo(t,this.size,2);o.uniform2fv(this.addr,n)}function lw(o,t){const n=Xo(t,this.size,3);o.uniform3fv(this.addr,n)}function uw(o,t){const n=Xo(t,this.size,4);o.uniform4fv(this.addr,n)}function cw(o,t){const n=Xo(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,n)}function fw(o,t){const n=Xo(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,n)}function hw(o,t){const n=Xo(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,n)}function dw(o,t){o.uniform1iv(this.addr,t)}function pw(o,t){o.uniform2iv(this.addr,t)}function mw(o,t){o.uniform3iv(this.addr,t)}function _w(o,t){o.uniform4iv(this.addr,t)}function gw(o,t){o.uniform1uiv(this.addr,t)}function vw(o,t){o.uniform2uiv(this.addr,t)}function xw(o,t){o.uniform3uiv(this.addr,t)}function Sw(o,t){o.uniform4uiv(this.addr,t)}function yw(o,t,n){const a=this.cache,s=t.length,u=Cf(n,s);xn(a,u)||(o.uniform1iv(this.addr,u),Sn(a,u));for(let c=0;c!==s;++c)n.setTexture2D(t[c]||aM,u[c])}function Mw(o,t,n){const a=this.cache,s=t.length,u=Cf(n,s);xn(a,u)||(o.uniform1iv(this.addr,u),Sn(a,u));for(let c=0;c!==s;++c)n.setTexture3D(t[c]||sM,u[c])}function Ew(o,t,n){const a=this.cache,s=t.length,u=Cf(n,s);xn(a,u)||(o.uniform1iv(this.addr,u),Sn(a,u));for(let c=0;c!==s;++c)n.setTextureCube(t[c]||oM,u[c])}function Tw(o,t,n){const a=this.cache,s=t.length,u=Cf(n,s);xn(a,u)||(o.uniform1iv(this.addr,u),Sn(a,u));for(let c=0;c!==s;++c)n.setTexture2DArray(t[c]||rM,u[c])}function bw(o){switch(o){case 5126:return sw;case 35664:return ow;case 35665:return lw;case 35666:return uw;case 35674:return cw;case 35675:return fw;case 35676:return hw;case 5124:case 35670:return dw;case 35667:case 35671:return pw;case 35668:case 35672:return mw;case 35669:case 35673:return _w;case 5125:return gw;case 36294:return vw;case 36295:return xw;case 36296:return Sw;case 35678:case 36198:case 36298:case 36306:case 35682:return yw;case 35679:case 36299:case 36307:return Mw;case 35680:case 36300:case 36308:case 36293:return Ew;case 36289:case 36303:case 36311:case 36292:return Tw}}class Aw{constructor(t,n,a){this.id=t,this.addr=a,this.cache=[],this.type=n.type,this.setValue=rw(n.type)}}class Rw{constructor(t,n,a){this.id=t,this.addr=a,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=bw(n.type)}}class Cw{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,a){const s=this.seq;for(let u=0,c=s.length;u!==c;++u){const f=s[u];f.setValue(t,n[f.id],a)}}}const Ep=/(\w+)(\])?(\[|\.)?/g;function rS(o,t){o.seq.push(t),o.map[t.id]=t}function ww(o,t,n){const a=o.name,s=a.length;for(Ep.lastIndex=0;;){const u=Ep.exec(a),c=Ep.lastIndex;let f=u[1];const d=u[2]==="]",p=u[3];if(d&&(f=f|0),p===void 0||p==="["&&c+2===s){rS(n,p===void 0?new Aw(f,o,t):new Rw(f,o,t));break}else{let g=n.map[f];g===void 0&&(g=new Cw(f),rS(n,g)),n=g}}}class rf{constructor(t,n){this.seq=[],this.map={};const a=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let s=0;s<a;++s){const u=t.getActiveUniform(n,s),c=t.getUniformLocation(n,u.name);ww(u,c,this)}}setValue(t,n,a,s){const u=this.map[n];u!==void 0&&u.setValue(t,a,s)}setOptional(t,n,a){const s=n[a];s!==void 0&&this.setValue(t,a,s)}static upload(t,n,a,s){for(let u=0,c=n.length;u!==c;++u){const f=n[u],d=a[f.id];d.needsUpdate!==!1&&f.setValue(t,d.value,s)}}static seqWithValue(t,n){const a=[];for(let s=0,u=t.length;s!==u;++s){const c=t[s];c.id in n&&a.push(c)}return a}}function sS(o,t,n){const a=o.createShader(t);return o.shaderSource(a,n),o.compileShader(a),a}const Dw=37297;let Uw=0;function Lw(o,t){const n=o.split(`
`),a=[],s=Math.max(t-6,0),u=Math.min(t+6,n.length);for(let c=s;c<u;c++){const f=c+1;a.push(`${f===t?">":" "} ${f}: ${n[c]}`)}return a.join(`
`)}function Nw(o){const t=Re.getPrimaries(Re.workingColorSpace),n=Re.getPrimaries(o);let a;switch(t===n?a="":t===vf&&n===gf?a="LinearDisplayP3ToLinearSRGB":t===gf&&n===vf&&(a="LinearSRGBToLinearDisplayP3"),o){case Dr:case Af:return[a,"LinearTransferOETF"];case Xi:case $m:return[a,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",o),[a,"LinearTransferOETF"]}}function oS(o,t,n){const a=o.getShaderParameter(t,o.COMPILE_STATUS),s=o.getShaderInfoLog(t).trim();if(a&&s==="")return"";const u=/ERROR: 0:(\d+)/.exec(s);if(u){const c=parseInt(u[1]);return n.toUpperCase()+`

`+s+`

`+Lw(o.getShaderSource(t),c)}else return s}function Ow(o,t){const n=Nw(t);return`vec4 ${o}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function Pw(o,t){let n;switch(t){case Qb:n="Linear";break;case Jb:n="Reinhard";break;case $b:n="OptimizedCineon";break;case tA:n="ACESFilmic";break;case nA:n="AgX";break;case iA:n="Neutral";break;case eA:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),n="Linear"}return"vec3 "+o+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const jc=new ot;function zw(){Re.getLuminanceCoefficients(jc);const o=jc.x.toFixed(4),t=jc.y.toFixed(4),n=jc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Iw(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Kl).join(`
`)}function Bw(o){const t=[];for(const n in o){const a=o[n];a!==!1&&t.push("#define "+n+" "+a)}return t.join(`
`)}function Fw(o,t){const n={},a=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let s=0;s<a;s++){const u=o.getActiveAttrib(t,s),c=u.name;let f=1;u.type===o.FLOAT_MAT2&&(f=2),u.type===o.FLOAT_MAT3&&(f=3),u.type===o.FLOAT_MAT4&&(f=4),n[c]={type:u.type,location:o.getAttribLocation(t,c),locationSize:f}}return n}function Kl(o){return o!==""}function lS(o,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function uS(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Hw=/^[ \t]*#include +<([\w\d./]+)>/gm;function Mm(o){return o.replace(Hw,Vw)}const Gw=new Map;function Vw(o,t){let n=oe[t];if(n===void 0){const a=Gw.get(t);if(a!==void 0)n=oe[a],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,a);else throw new Error("Can not resolve #include <"+t+">")}return Mm(n)}const kw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function cS(o){return o.replace(kw,Xw)}function Xw(o,t,n,a){let s="";for(let u=parseInt(t);u<parseInt(n);u++)s+=a.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return s}function fS(o){let t=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?t+=`
#define HIGH_PRECISION`:o.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Ww(o){let t="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===wy?t="SHADOWMAP_TYPE_PCF":o.shadowMapType===Eb?t="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===wa&&(t="SHADOWMAP_TYPE_VSM"),t}function qw(o){let t="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case Bo:case Fo:t="ENVMAP_TYPE_CUBE";break;case bf:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Yw(o){let t="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case Fo:t="ENVMAP_MODE_REFRACTION";break}return t}function jw(o){let t="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case Dy:t="ENVMAP_BLENDING_MULTIPLY";break;case Zb:t="ENVMAP_BLENDING_MIX";break;case Kb:t="ENVMAP_BLENDING_ADD";break}return t}function Zw(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,a=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:a,maxMip:n}}function Kw(o,t,n,a){const s=o.getContext(),u=n.defines;let c=n.vertexShader,f=n.fragmentShader;const d=Ww(n),p=qw(n),_=Yw(n),g=jw(n),v=Zw(n),y=Iw(n),T=Bw(u),M=s.createProgram();let x,S,U=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(x=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T].filter(Kl).join(`
`),x.length>0&&(x+=`
`),S=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T].filter(Kl).join(`
`),S.length>0&&(S+=`
`)):(x=[fS(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+_:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+d:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Kl).join(`
`),S=[fS(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+p:"",n.envMap?"#define "+_:"",n.envMap?"#define "+g:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+d:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==br?"#define TONE_MAPPING":"",n.toneMapping!==br?oe.tonemapping_pars_fragment:"",n.toneMapping!==br?Pw("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",oe.colorspace_pars_fragment,Ow("linearToOutputTexel",n.outputColorSpace),zw(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Kl).join(`
`)),c=Mm(c),c=lS(c,n),c=uS(c,n),f=Mm(f),f=lS(f,n),f=uS(f,n),c=cS(c),f=cS(f),n.isRawShaderMaterial!==!0&&(U=`#version 300 es
`,x=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,S=["#define varying in",n.glslVersion===Ax?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Ax?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const A=U+x+c,L=U+S+f,P=sS(s,s.VERTEX_SHADER,A),O=sS(s,s.FRAGMENT_SHADER,L);s.attachShader(M,P),s.attachShader(M,O),n.index0AttributeName!==void 0?s.bindAttribLocation(M,0,n.index0AttributeName):n.morphTargets===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function w(F){if(o.debug.checkShaderErrors){const X=s.getProgramInfoLog(M).trim(),Y=s.getShaderInfoLog(P).trim(),nt=s.getShaderInfoLog(O).trim();let at=!0,I=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(at=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(s,M,P,O);else{const k=oS(s,P,"vertex"),q=oS(s,O,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+X+`
`+k+`
`+q)}else X!==""?console.warn("THREE.WebGLProgram: Program Info Log:",X):(Y===""||nt==="")&&(I=!1);I&&(F.diagnostics={runnable:at,programLog:X,vertexShader:{log:Y,prefix:x},fragmentShader:{log:nt,prefix:S}})}s.deleteShader(P),s.deleteShader(O),B=new rf(s,M),b=Fw(s,M)}let B;this.getUniforms=function(){return B===void 0&&w(this),B};let b;this.getAttributes=function(){return b===void 0&&w(this),b};let R=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(M,Dw)),R},this.destroy=function(){a.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Uw++,this.cacheKey=t,this.usedTimes=1,this.program=M,this.vertexShader=P,this.fragmentShader=O,this}let Qw=0;class Jw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const n=t.vertexShader,a=t.fragmentShader,s=this._getShaderStage(n),u=this._getShaderStage(a),c=this._getShaderCacheForMaterial(t);return c.has(s)===!1&&(c.add(s),s.usedTimes++),c.has(u)===!1&&(c.add(u),u.usedTimes++),this}remove(t){const n=this.materialCache.get(t);for(const a of n)a.usedTimes--,a.usedTimes===0&&this.shaderCache.delete(a.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const n=this.materialCache;let a=n.get(t);return a===void 0&&(a=new Set,n.set(t,a)),a}_getShaderStage(t){const n=this.shaderCache;let a=n.get(t);return a===void 0&&(a=new $w(t),n.set(t,a)),a}}class $w{constructor(t){this.id=Qw++,this.code=t,this.usedTimes=0}}function t3(o,t,n,a,s,u,c){const f=new qy,d=new Jw,p=new Set,_=[],g=s.logarithmicDepthBuffer,v=s.vertexTextures;let y=s.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(b){return p.add(b),b===0?"uv":`uv${b}`}function x(b,R,F,X,Y){const nt=X.fog,at=Y.geometry,I=b.isMeshStandardMaterial?X.environment:null,k=(b.isMeshStandardMaterial?n:t).get(b.envMap||I),q=k&&k.mapping===bf?k.image.height:null,ht=T[b.type];b.precision!==null&&(y=s.getMaxPrecision(b.precision),y!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",y,"instead."));const dt=at.morphAttributes.position||at.morphAttributes.normal||at.morphAttributes.color,z=dt!==void 0?dt.length:0;let $=0;at.morphAttributes.position!==void 0&&($=1),at.morphAttributes.normal!==void 0&&($=2),at.morphAttributes.color!==void 0&&($=3);let mt,j,ct,St;if(ht){const ye=ta[ht];mt=ye.vertexShader,j=ye.fragmentShader}else mt=b.vertexShader,j=b.fragmentShader,d.update(b),ct=d.getVertexShaderID(b),St=d.getFragmentShaderID(b);const Tt=o.getRenderTarget(),Gt=Y.isInstancedMesh===!0,Ht=Y.isBatchedMesh===!0,ie=!!b.map,Pe=!!b.matcap,V=!!k,je=!!b.aoMap,fe=!!b.lightMap,Ee=!!b.bumpMap,Vt=!!b.normalMap,Qe=!!b.displacementMap,te=!!b.emissiveMap,ee=!!b.metalnessMap,H=!!b.roughnessMap,D=b.anisotropy>0,lt=b.clearcoat>0,Et=b.dispersion>0,xt=b.iridescence>0,yt=b.sheen>0,Yt=b.transmission>0,Ut=D&&!!b.anisotropyMap,Nt=lt&&!!b.clearcoatMap,ae=lt&&!!b.clearcoatNormalMap,At=lt&&!!b.clearcoatRoughnessMap,Ot=xt&&!!b.iridescenceMap,pe=xt&&!!b.iridescenceThicknessMap,Qt=yt&&!!b.sheenColorMap,wt=yt&&!!b.sheenRoughnessMap,Zt=!!b.specularMap,Kt=!!b.specularColorMap,He=!!b.specularIntensityMap,Z=Yt&&!!b.transmissionMap,Rt=Yt&&!!b.thicknessMap,_t=!!b.gradientMap,vt=!!b.alphaMap,Ct=b.alphaTest>0,Wt=!!b.alphaHash,ue=!!b.extensions;let Fe=br;b.toneMapped&&(Tt===null||Tt.isXRRenderTarget===!0)&&(Fe=o.toneMapping);const mn={shaderID:ht,shaderType:b.type,shaderName:b.name,vertexShader:mt,fragmentShader:j,defines:b.defines,customVertexShaderID:ct,customFragmentShaderID:St,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:y,batching:Ht,batchingColor:Ht&&Y._colorsTexture!==null,instancing:Gt,instancingColor:Gt&&Y.instanceColor!==null,instancingMorph:Gt&&Y.morphTexture!==null,supportsVertexTextures:v,outputColorSpace:Tt===null?o.outputColorSpace:Tt.isXRRenderTarget===!0?Tt.texture.colorSpace:Dr,alphaToCoverage:!!b.alphaToCoverage,map:ie,matcap:Pe,envMap:V,envMapMode:V&&k.mapping,envMapCubeUVHeight:q,aoMap:je,lightMap:fe,bumpMap:Ee,normalMap:Vt,displacementMap:v&&Qe,emissiveMap:te,normalMapObjectSpace:Vt&&b.normalMapType===lA,normalMapTangentSpace:Vt&&b.normalMapType===oA,metalnessMap:ee,roughnessMap:H,anisotropy:D,anisotropyMap:Ut,clearcoat:lt,clearcoatMap:Nt,clearcoatNormalMap:ae,clearcoatRoughnessMap:At,dispersion:Et,iridescence:xt,iridescenceMap:Ot,iridescenceThicknessMap:pe,sheen:yt,sheenColorMap:Qt,sheenRoughnessMap:wt,specularMap:Zt,specularColorMap:Kt,specularIntensityMap:He,transmission:Yt,transmissionMap:Z,thicknessMap:Rt,gradientMap:_t,opaque:b.transparent===!1&&b.blending===wo&&b.alphaToCoverage===!1,alphaMap:vt,alphaTest:Ct,alphaHash:Wt,combine:b.combine,mapUv:ie&&M(b.map.channel),aoMapUv:je&&M(b.aoMap.channel),lightMapUv:fe&&M(b.lightMap.channel),bumpMapUv:Ee&&M(b.bumpMap.channel),normalMapUv:Vt&&M(b.normalMap.channel),displacementMapUv:Qe&&M(b.displacementMap.channel),emissiveMapUv:te&&M(b.emissiveMap.channel),metalnessMapUv:ee&&M(b.metalnessMap.channel),roughnessMapUv:H&&M(b.roughnessMap.channel),anisotropyMapUv:Ut&&M(b.anisotropyMap.channel),clearcoatMapUv:Nt&&M(b.clearcoatMap.channel),clearcoatNormalMapUv:ae&&M(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:At&&M(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Ot&&M(b.iridescenceMap.channel),iridescenceThicknessMapUv:pe&&M(b.iridescenceThicknessMap.channel),sheenColorMapUv:Qt&&M(b.sheenColorMap.channel),sheenRoughnessMapUv:wt&&M(b.sheenRoughnessMap.channel),specularMapUv:Zt&&M(b.specularMap.channel),specularColorMapUv:Kt&&M(b.specularColorMap.channel),specularIntensityMapUv:He&&M(b.specularIntensityMap.channel),transmissionMapUv:Z&&M(b.transmissionMap.channel),thicknessMapUv:Rt&&M(b.thicknessMap.channel),alphaMapUv:vt&&M(b.alphaMap.channel),vertexTangents:!!at.attributes.tangent&&(Vt||D),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!at.attributes.color&&at.attributes.color.itemSize===4,pointsUvs:Y.isPoints===!0&&!!at.attributes.uv&&(ie||vt),fog:!!nt,useFog:b.fog===!0,fogExp2:!!nt&&nt.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:g,skinning:Y.isSkinnedMesh===!0,morphTargets:at.morphAttributes.position!==void 0,morphNormals:at.morphAttributes.normal!==void 0,morphColors:at.morphAttributes.color!==void 0,morphTargetsCount:z,morphTextureStride:$,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:b.dithering,shadowMapEnabled:o.shadowMap.enabled&&F.length>0,shadowMapType:o.shadowMap.type,toneMapping:Fe,decodeVideoTexture:ie&&b.map.isVideoTexture===!0&&Re.getTransfer(b.map.colorSpace)===ke,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===La,flipSided:b.side===ni,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:ue&&b.extensions.clipCullDistance===!0&&a.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ue&&b.extensions.multiDraw===!0||Ht)&&a.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:a.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return mn.vertexUv1s=p.has(1),mn.vertexUv2s=p.has(2),mn.vertexUv3s=p.has(3),p.clear(),mn}function S(b){const R=[];if(b.shaderID?R.push(b.shaderID):(R.push(b.customVertexShaderID),R.push(b.customFragmentShaderID)),b.defines!==void 0)for(const F in b.defines)R.push(F),R.push(b.defines[F]);return b.isRawShaderMaterial===!1&&(U(R,b),A(R,b),R.push(o.outputColorSpace)),R.push(b.customProgramCacheKey),R.join()}function U(b,R){b.push(R.precision),b.push(R.outputColorSpace),b.push(R.envMapMode),b.push(R.envMapCubeUVHeight),b.push(R.mapUv),b.push(R.alphaMapUv),b.push(R.lightMapUv),b.push(R.aoMapUv),b.push(R.bumpMapUv),b.push(R.normalMapUv),b.push(R.displacementMapUv),b.push(R.emissiveMapUv),b.push(R.metalnessMapUv),b.push(R.roughnessMapUv),b.push(R.anisotropyMapUv),b.push(R.clearcoatMapUv),b.push(R.clearcoatNormalMapUv),b.push(R.clearcoatRoughnessMapUv),b.push(R.iridescenceMapUv),b.push(R.iridescenceThicknessMapUv),b.push(R.sheenColorMapUv),b.push(R.sheenRoughnessMapUv),b.push(R.specularMapUv),b.push(R.specularColorMapUv),b.push(R.specularIntensityMapUv),b.push(R.transmissionMapUv),b.push(R.thicknessMapUv),b.push(R.combine),b.push(R.fogExp2),b.push(R.sizeAttenuation),b.push(R.morphTargetsCount),b.push(R.morphAttributeCount),b.push(R.numDirLights),b.push(R.numPointLights),b.push(R.numSpotLights),b.push(R.numSpotLightMaps),b.push(R.numHemiLights),b.push(R.numRectAreaLights),b.push(R.numDirLightShadows),b.push(R.numPointLightShadows),b.push(R.numSpotLightShadows),b.push(R.numSpotLightShadowsWithMaps),b.push(R.numLightProbes),b.push(R.shadowMapType),b.push(R.toneMapping),b.push(R.numClippingPlanes),b.push(R.numClipIntersection),b.push(R.depthPacking)}function A(b,R){f.disableAll(),R.supportsVertexTextures&&f.enable(0),R.instancing&&f.enable(1),R.instancingColor&&f.enable(2),R.instancingMorph&&f.enable(3),R.matcap&&f.enable(4),R.envMap&&f.enable(5),R.normalMapObjectSpace&&f.enable(6),R.normalMapTangentSpace&&f.enable(7),R.clearcoat&&f.enable(8),R.iridescence&&f.enable(9),R.alphaTest&&f.enable(10),R.vertexColors&&f.enable(11),R.vertexAlphas&&f.enable(12),R.vertexUv1s&&f.enable(13),R.vertexUv2s&&f.enable(14),R.vertexUv3s&&f.enable(15),R.vertexTangents&&f.enable(16),R.anisotropy&&f.enable(17),R.alphaHash&&f.enable(18),R.batching&&f.enable(19),R.dispersion&&f.enable(20),R.batchingColor&&f.enable(21),b.push(f.mask),f.disableAll(),R.fog&&f.enable(0),R.useFog&&f.enable(1),R.flatShading&&f.enable(2),R.logarithmicDepthBuffer&&f.enable(3),R.skinning&&f.enable(4),R.morphTargets&&f.enable(5),R.morphNormals&&f.enable(6),R.morphColors&&f.enable(7),R.premultipliedAlpha&&f.enable(8),R.shadowMapEnabled&&f.enable(9),R.doubleSided&&f.enable(10),R.flipSided&&f.enable(11),R.useDepthPacking&&f.enable(12),R.dithering&&f.enable(13),R.transmission&&f.enable(14),R.sheen&&f.enable(15),R.opaque&&f.enable(16),R.pointsUvs&&f.enable(17),R.decodeVideoTexture&&f.enable(18),R.alphaToCoverage&&f.enable(19),b.push(f.mask)}function L(b){const R=T[b.type];let F;if(R){const X=ta[R];F=IA.clone(X.uniforms)}else F=b.uniforms;return F}function P(b,R){let F;for(let X=0,Y=_.length;X<Y;X++){const nt=_[X];if(nt.cacheKey===R){F=nt,++F.usedTimes;break}}return F===void 0&&(F=new Kw(o,R,b,u),_.push(F)),F}function O(b){if(--b.usedTimes===0){const R=_.indexOf(b);_[R]=_[_.length-1],_.pop(),b.destroy()}}function w(b){d.remove(b)}function B(){d.dispose()}return{getParameters:x,getProgramCacheKey:S,getUniforms:L,acquireProgram:P,releaseProgram:O,releaseShaderCache:w,programs:_,dispose:B}}function e3(){let o=new WeakMap;function t(u){let c=o.get(u);return c===void 0&&(c={},o.set(u,c)),c}function n(u){o.delete(u)}function a(u,c,f){o.get(u)[c]=f}function s(){o=new WeakMap}return{get:t,remove:n,update:a,dispose:s}}function n3(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.z!==t.z?o.z-t.z:o.id-t.id}function hS(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function dS(){const o=[];let t=0;const n=[],a=[],s=[];function u(){t=0,n.length=0,a.length=0,s.length=0}function c(g,v,y,T,M,x){let S=o[t];return S===void 0?(S={id:g.id,object:g,geometry:v,material:y,groupOrder:T,renderOrder:g.renderOrder,z:M,group:x},o[t]=S):(S.id=g.id,S.object=g,S.geometry=v,S.material=y,S.groupOrder=T,S.renderOrder=g.renderOrder,S.z=M,S.group=x),t++,S}function f(g,v,y,T,M,x){const S=c(g,v,y,T,M,x);y.transmission>0?a.push(S):y.transparent===!0?s.push(S):n.push(S)}function d(g,v,y,T,M,x){const S=c(g,v,y,T,M,x);y.transmission>0?a.unshift(S):y.transparent===!0?s.unshift(S):n.unshift(S)}function p(g,v){n.length>1&&n.sort(g||n3),a.length>1&&a.sort(v||hS),s.length>1&&s.sort(v||hS)}function _(){for(let g=t,v=o.length;g<v;g++){const y=o[g];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:n,transmissive:a,transparent:s,init:u,push:f,unshift:d,finish:_,sort:p}}function i3(){let o=new WeakMap;function t(a,s){const u=o.get(a);let c;return u===void 0?(c=new dS,o.set(a,[c])):s>=u.length?(c=new dS,u.push(c)):c=u[s],c}function n(){o=new WeakMap}return{get:t,dispose:n}}function a3(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new ot,color:new Oe};break;case"SpotLight":n={position:new ot,direction:new ot,color:new Oe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new ot,color:new Oe,distance:0,decay:0};break;case"HemisphereLight":n={direction:new ot,skyColor:new Oe,groundColor:new Oe};break;case"RectAreaLight":n={color:new Oe,position:new ot,halfWidth:new ot,halfHeight:new ot};break}return o[t.id]=n,n}}}function r3(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=n,n}}}let s3=0;function o3(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function l3(o){const t=new a3,n=r3(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)a.probe.push(new ot);const s=new ot,u=new vn,c=new vn;function f(p){let _=0,g=0,v=0;for(let b=0;b<9;b++)a.probe[b].set(0,0,0);let y=0,T=0,M=0,x=0,S=0,U=0,A=0,L=0,P=0,O=0,w=0;p.sort(o3);for(let b=0,R=p.length;b<R;b++){const F=p[b],X=F.color,Y=F.intensity,nt=F.distance,at=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)_+=X.r*Y,g+=X.g*Y,v+=X.b*Y;else if(F.isLightProbe){for(let I=0;I<9;I++)a.probe[I].addScaledVector(F.sh.coefficients[I],Y);w++}else if(F.isDirectionalLight){const I=t.get(F);if(I.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const k=F.shadow,q=n.get(F);q.shadowIntensity=k.intensity,q.shadowBias=k.bias,q.shadowNormalBias=k.normalBias,q.shadowRadius=k.radius,q.shadowMapSize=k.mapSize,a.directionalShadow[y]=q,a.directionalShadowMap[y]=at,a.directionalShadowMatrix[y]=F.shadow.matrix,U++}a.directional[y]=I,y++}else if(F.isSpotLight){const I=t.get(F);I.position.setFromMatrixPosition(F.matrixWorld),I.color.copy(X).multiplyScalar(Y),I.distance=nt,I.coneCos=Math.cos(F.angle),I.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),I.decay=F.decay,a.spot[M]=I;const k=F.shadow;if(F.map&&(a.spotLightMap[P]=F.map,P++,k.updateMatrices(F),F.castShadow&&O++),a.spotLightMatrix[M]=k.matrix,F.castShadow){const q=n.get(F);q.shadowIntensity=k.intensity,q.shadowBias=k.bias,q.shadowNormalBias=k.normalBias,q.shadowRadius=k.radius,q.shadowMapSize=k.mapSize,a.spotShadow[M]=q,a.spotShadowMap[M]=at,L++}M++}else if(F.isRectAreaLight){const I=t.get(F);I.color.copy(X).multiplyScalar(Y),I.halfWidth.set(F.width*.5,0,0),I.halfHeight.set(0,F.height*.5,0),a.rectArea[x]=I,x++}else if(F.isPointLight){const I=t.get(F);if(I.color.copy(F.color).multiplyScalar(F.intensity),I.distance=F.distance,I.decay=F.decay,F.castShadow){const k=F.shadow,q=n.get(F);q.shadowIntensity=k.intensity,q.shadowBias=k.bias,q.shadowNormalBias=k.normalBias,q.shadowRadius=k.radius,q.shadowMapSize=k.mapSize,q.shadowCameraNear=k.camera.near,q.shadowCameraFar=k.camera.far,a.pointShadow[T]=q,a.pointShadowMap[T]=at,a.pointShadowMatrix[T]=F.shadow.matrix,A++}a.point[T]=I,T++}else if(F.isHemisphereLight){const I=t.get(F);I.skyColor.copy(F.color).multiplyScalar(Y),I.groundColor.copy(F.groundColor).multiplyScalar(Y),a.hemi[S]=I,S++}}x>0&&(o.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=Lt.LTC_FLOAT_1,a.rectAreaLTC2=Lt.LTC_FLOAT_2):(a.rectAreaLTC1=Lt.LTC_HALF_1,a.rectAreaLTC2=Lt.LTC_HALF_2)),a.ambient[0]=_,a.ambient[1]=g,a.ambient[2]=v;const B=a.hash;(B.directionalLength!==y||B.pointLength!==T||B.spotLength!==M||B.rectAreaLength!==x||B.hemiLength!==S||B.numDirectionalShadows!==U||B.numPointShadows!==A||B.numSpotShadows!==L||B.numSpotMaps!==P||B.numLightProbes!==w)&&(a.directional.length=y,a.spot.length=M,a.rectArea.length=x,a.point.length=T,a.hemi.length=S,a.directionalShadow.length=U,a.directionalShadowMap.length=U,a.pointShadow.length=A,a.pointShadowMap.length=A,a.spotShadow.length=L,a.spotShadowMap.length=L,a.directionalShadowMatrix.length=U,a.pointShadowMatrix.length=A,a.spotLightMatrix.length=L+P-O,a.spotLightMap.length=P,a.numSpotLightShadowsWithMaps=O,a.numLightProbes=w,B.directionalLength=y,B.pointLength=T,B.spotLength=M,B.rectAreaLength=x,B.hemiLength=S,B.numDirectionalShadows=U,B.numPointShadows=A,B.numSpotShadows=L,B.numSpotMaps=P,B.numLightProbes=w,a.version=s3++)}function d(p,_){let g=0,v=0,y=0,T=0,M=0;const x=_.matrixWorldInverse;for(let S=0,U=p.length;S<U;S++){const A=p[S];if(A.isDirectionalLight){const L=a.directional[g];L.direction.setFromMatrixPosition(A.matrixWorld),s.setFromMatrixPosition(A.target.matrixWorld),L.direction.sub(s),L.direction.transformDirection(x),g++}else if(A.isSpotLight){const L=a.spot[y];L.position.setFromMatrixPosition(A.matrixWorld),L.position.applyMatrix4(x),L.direction.setFromMatrixPosition(A.matrixWorld),s.setFromMatrixPosition(A.target.matrixWorld),L.direction.sub(s),L.direction.transformDirection(x),y++}else if(A.isRectAreaLight){const L=a.rectArea[T];L.position.setFromMatrixPosition(A.matrixWorld),L.position.applyMatrix4(x),c.identity(),u.copy(A.matrixWorld),u.premultiply(x),c.extractRotation(u),L.halfWidth.set(A.width*.5,0,0),L.halfHeight.set(0,A.height*.5,0),L.halfWidth.applyMatrix4(c),L.halfHeight.applyMatrix4(c),T++}else if(A.isPointLight){const L=a.point[v];L.position.setFromMatrixPosition(A.matrixWorld),L.position.applyMatrix4(x),v++}else if(A.isHemisphereLight){const L=a.hemi[M];L.direction.setFromMatrixPosition(A.matrixWorld),L.direction.transformDirection(x),M++}}}return{setup:f,setupView:d,state:a}}function pS(o){const t=new l3(o),n=[],a=[];function s(_){p.camera=_,n.length=0,a.length=0}function u(_){n.push(_)}function c(_){a.push(_)}function f(){t.setup(n)}function d(_){t.setupView(n,_)}const p={lightsArray:n,shadowsArray:a,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:p,setupLights:f,setupLightsView:d,pushLight:u,pushShadow:c}}function u3(o){let t=new WeakMap;function n(s,u=0){const c=t.get(s);let f;return c===void 0?(f=new pS(o),t.set(s,[f])):u>=c.length?(f=new pS(o),c.push(f)):f=c[u],f}function a(){t=new WeakMap}return{get:n,dispose:a}}class c3 extends Rf{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=rA,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class f3 extends Rf{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const h3=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,d3=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function p3(o,t,n){let a=new tM;const s=new xe,u=new xe,c=new En,f=new c3({depthPacking:sA}),d=new f3,p={},_=n.maxTextureSize,g={[Cr]:ni,[ni]:Cr,[La]:La},v=new Fa({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new xe},radius:{value:4}},vertexShader:h3,fragmentShader:d3}),y=v.clone();y.defines.HORIZONTAL_PASS=1;const T=new Ss;T.setAttribute("position",new ra(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new aa(T,v),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=wy;let S=this.type;this.render=function(O,w,B){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||O.length===0)return;const b=o.getRenderTarget(),R=o.getActiveCubeFace(),F=o.getActiveMipmapLevel(),X=o.state;X.setBlending(Tr),X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);const Y=S!==wa&&this.type===wa,nt=S===wa&&this.type!==wa;for(let at=0,I=O.length;at<I;at++){const k=O[at],q=k.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",k,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;s.copy(q.mapSize);const ht=q.getFrameExtents();if(s.multiply(ht),u.copy(q.mapSize),(s.x>_||s.y>_)&&(s.x>_&&(u.x=Math.floor(_/ht.x),s.x=u.x*ht.x,q.mapSize.x=u.x),s.y>_&&(u.y=Math.floor(_/ht.y),s.y=u.y*ht.y,q.mapSize.y=u.y)),q.map===null||Y===!0||nt===!0){const z=this.type!==wa?{minFilter:Pi,magFilter:Pi}:{};q.map!==null&&q.map.dispose(),q.map=new gs(s.x,s.y,z),q.map.texture.name=k.name+".shadowMap",q.camera.updateProjectionMatrix()}o.setRenderTarget(q.map),o.clear();const dt=q.getViewportCount();for(let z=0;z<dt;z++){const $=q.getViewport(z);c.set(u.x*$.x,u.y*$.y,u.x*$.z,u.y*$.w),X.viewport(c),q.updateMatrices(k,z),a=q.getFrustum(),L(w,B,q.camera,k,this.type)}q.isPointLightShadow!==!0&&this.type===wa&&U(q,B),q.needsUpdate=!1}S=this.type,x.needsUpdate=!1,o.setRenderTarget(b,R,F)};function U(O,w){const B=t.update(M);v.defines.VSM_SAMPLES!==O.blurSamples&&(v.defines.VSM_SAMPLES=O.blurSamples,y.defines.VSM_SAMPLES=O.blurSamples,v.needsUpdate=!0,y.needsUpdate=!0),O.mapPass===null&&(O.mapPass=new gs(s.x,s.y)),v.uniforms.shadow_pass.value=O.map.texture,v.uniforms.resolution.value=O.mapSize,v.uniforms.radius.value=O.radius,o.setRenderTarget(O.mapPass),o.clear(),o.renderBufferDirect(w,null,B,v,M,null),y.uniforms.shadow_pass.value=O.mapPass.texture,y.uniforms.resolution.value=O.mapSize,y.uniforms.radius.value=O.radius,o.setRenderTarget(O.map),o.clear(),o.renderBufferDirect(w,null,B,y,M,null)}function A(O,w,B,b){let R=null;const F=B.isPointLight===!0?O.customDistanceMaterial:O.customDepthMaterial;if(F!==void 0)R=F;else if(R=B.isPointLight===!0?d:f,o.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const X=R.uuid,Y=w.uuid;let nt=p[X];nt===void 0&&(nt={},p[X]=nt);let at=nt[Y];at===void 0&&(at=R.clone(),nt[Y]=at,w.addEventListener("dispose",P)),R=at}if(R.visible=w.visible,R.wireframe=w.wireframe,b===wa?R.side=w.shadowSide!==null?w.shadowSide:w.side:R.side=w.shadowSide!==null?w.shadowSide:g[w.side],R.alphaMap=w.alphaMap,R.alphaTest=w.alphaTest,R.map=w.map,R.clipShadows=w.clipShadows,R.clippingPlanes=w.clippingPlanes,R.clipIntersection=w.clipIntersection,R.displacementMap=w.displacementMap,R.displacementScale=w.displacementScale,R.displacementBias=w.displacementBias,R.wireframeLinewidth=w.wireframeLinewidth,R.linewidth=w.linewidth,B.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const X=o.properties.get(R);X.light=B}return R}function L(O,w,B,b,R){if(O.visible===!1)return;if(O.layers.test(w.layers)&&(O.isMesh||O.isLine||O.isPoints)&&(O.castShadow||O.receiveShadow&&R===wa)&&(!O.frustumCulled||a.intersectsObject(O))){O.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,O.matrixWorld);const Y=t.update(O),nt=O.material;if(Array.isArray(nt)){const at=Y.groups;for(let I=0,k=at.length;I<k;I++){const q=at[I],ht=nt[q.materialIndex];if(ht&&ht.visible){const dt=A(O,ht,b,R);O.onBeforeShadow(o,O,w,B,Y,dt,q),o.renderBufferDirect(B,null,Y,dt,O,q),O.onAfterShadow(o,O,w,B,Y,dt,q)}}}else if(nt.visible){const at=A(O,nt,b,R);O.onBeforeShadow(o,O,w,B,Y,at,null),o.renderBufferDirect(B,null,Y,at,O,null),O.onAfterShadow(o,O,w,B,Y,at,null)}}const X=O.children;for(let Y=0,nt=X.length;Y<nt;Y++)L(X[Y],w,B,b,R)}function P(O){O.target.removeEventListener("dispose",P);for(const B in p){const b=p[B],R=O.target.uuid;R in b&&(b[R].dispose(),delete b[R])}}}function m3(o){function t(){let Z=!1;const Rt=new En;let _t=null;const vt=new En(0,0,0,0);return{setMask:function(Ct){_t!==Ct&&!Z&&(o.colorMask(Ct,Ct,Ct,Ct),_t=Ct)},setLocked:function(Ct){Z=Ct},setClear:function(Ct,Wt,ue,Fe,mn){mn===!0&&(Ct*=Fe,Wt*=Fe,ue*=Fe),Rt.set(Ct,Wt,ue,Fe),vt.equals(Rt)===!1&&(o.clearColor(Ct,Wt,ue,Fe),vt.copy(Rt))},reset:function(){Z=!1,_t=null,vt.set(-1,0,0,0)}}}function n(){let Z=!1,Rt=null,_t=null,vt=null;return{setTest:function(Ct){Ct?St(o.DEPTH_TEST):Tt(o.DEPTH_TEST)},setMask:function(Ct){Rt!==Ct&&!Z&&(o.depthMask(Ct),Rt=Ct)},setFunc:function(Ct){if(_t!==Ct){switch(Ct){case Vb:o.depthFunc(o.NEVER);break;case kb:o.depthFunc(o.ALWAYS);break;case Xb:o.depthFunc(o.LESS);break;case mf:o.depthFunc(o.LEQUAL);break;case Wb:o.depthFunc(o.EQUAL);break;case qb:o.depthFunc(o.GEQUAL);break;case Yb:o.depthFunc(o.GREATER);break;case jb:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}_t=Ct}},setLocked:function(Ct){Z=Ct},setClear:function(Ct){vt!==Ct&&(o.clearDepth(Ct),vt=Ct)},reset:function(){Z=!1,Rt=null,_t=null,vt=null}}}function a(){let Z=!1,Rt=null,_t=null,vt=null,Ct=null,Wt=null,ue=null,Fe=null,mn=null;return{setTest:function(ye){Z||(ye?St(o.STENCIL_TEST):Tt(o.STENCIL_TEST))},setMask:function(ye){Rt!==ye&&!Z&&(o.stencilMask(ye),Rt=ye)},setFunc:function(ye,ri,Dn){(_t!==ye||vt!==ri||Ct!==Dn)&&(o.stencilFunc(ye,ri,Dn),_t=ye,vt=ri,Ct=Dn)},setOp:function(ye,ri,Dn){(Wt!==ye||ue!==ri||Fe!==Dn)&&(o.stencilOp(ye,ri,Dn),Wt=ye,ue=ri,Fe=Dn)},setLocked:function(ye){Z=ye},setClear:function(ye){mn!==ye&&(o.clearStencil(ye),mn=ye)},reset:function(){Z=!1,Rt=null,_t=null,vt=null,Ct=null,Wt=null,ue=null,Fe=null,mn=null}}}const s=new t,u=new n,c=new a,f=new WeakMap,d=new WeakMap;let p={},_={},g=new WeakMap,v=[],y=null,T=!1,M=null,x=null,S=null,U=null,A=null,L=null,P=null,O=new Oe(0,0,0),w=0,B=!1,b=null,R=null,F=null,X=null,Y=null;const nt=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let at=!1,I=0;const k=o.getParameter(o.VERSION);k.indexOf("WebGL")!==-1?(I=parseFloat(/^WebGL (\d)/.exec(k)[1]),at=I>=1):k.indexOf("OpenGL ES")!==-1&&(I=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),at=I>=2);let q=null,ht={};const dt=o.getParameter(o.SCISSOR_BOX),z=o.getParameter(o.VIEWPORT),$=new En().fromArray(dt),mt=new En().fromArray(z);function j(Z,Rt,_t,vt){const Ct=new Uint8Array(4),Wt=o.createTexture();o.bindTexture(Z,Wt),o.texParameteri(Z,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(Z,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let ue=0;ue<_t;ue++)Z===o.TEXTURE_3D||Z===o.TEXTURE_2D_ARRAY?o.texImage3D(Rt,0,o.RGBA,1,1,vt,0,o.RGBA,o.UNSIGNED_BYTE,Ct):o.texImage2D(Rt+ue,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Ct);return Wt}const ct={};ct[o.TEXTURE_2D]=j(o.TEXTURE_2D,o.TEXTURE_2D,1),ct[o.TEXTURE_CUBE_MAP]=j(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),ct[o.TEXTURE_2D_ARRAY]=j(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),ct[o.TEXTURE_3D]=j(o.TEXTURE_3D,o.TEXTURE_3D,1,1),s.setClear(0,0,0,1),u.setClear(1),c.setClear(0),St(o.DEPTH_TEST),u.setFunc(mf),Ee(!1),Vt(Sx),St(o.CULL_FACE),je(Tr);function St(Z){p[Z]!==!0&&(o.enable(Z),p[Z]=!0)}function Tt(Z){p[Z]!==!1&&(o.disable(Z),p[Z]=!1)}function Gt(Z,Rt){return _[Z]!==Rt?(o.bindFramebuffer(Z,Rt),_[Z]=Rt,Z===o.DRAW_FRAMEBUFFER&&(_[o.FRAMEBUFFER]=Rt),Z===o.FRAMEBUFFER&&(_[o.DRAW_FRAMEBUFFER]=Rt),!0):!1}function Ht(Z,Rt){let _t=v,vt=!1;if(Z){_t=g.get(Rt),_t===void 0&&(_t=[],g.set(Rt,_t));const Ct=Z.textures;if(_t.length!==Ct.length||_t[0]!==o.COLOR_ATTACHMENT0){for(let Wt=0,ue=Ct.length;Wt<ue;Wt++)_t[Wt]=o.COLOR_ATTACHMENT0+Wt;_t.length=Ct.length,vt=!0}}else _t[0]!==o.BACK&&(_t[0]=o.BACK,vt=!0);vt&&o.drawBuffers(_t)}function ie(Z){return y!==Z?(o.useProgram(Z),y=Z,!0):!1}const Pe={[rs]:o.FUNC_ADD,[bb]:o.FUNC_SUBTRACT,[Ab]:o.FUNC_REVERSE_SUBTRACT};Pe[Rb]=o.MIN,Pe[Cb]=o.MAX;const V={[wb]:o.ZERO,[Db]:o.ONE,[Ub]:o.SRC_COLOR,[kp]:o.SRC_ALPHA,[Ib]:o.SRC_ALPHA_SATURATE,[Pb]:o.DST_COLOR,[Nb]:o.DST_ALPHA,[Lb]:o.ONE_MINUS_SRC_COLOR,[Xp]:o.ONE_MINUS_SRC_ALPHA,[zb]:o.ONE_MINUS_DST_COLOR,[Ob]:o.ONE_MINUS_DST_ALPHA,[Bb]:o.CONSTANT_COLOR,[Fb]:o.ONE_MINUS_CONSTANT_COLOR,[Hb]:o.CONSTANT_ALPHA,[Gb]:o.ONE_MINUS_CONSTANT_ALPHA};function je(Z,Rt,_t,vt,Ct,Wt,ue,Fe,mn,ye){if(Z===Tr){T===!0&&(Tt(o.BLEND),T=!1);return}if(T===!1&&(St(o.BLEND),T=!0),Z!==Tb){if(Z!==M||ye!==B){if((x!==rs||A!==rs)&&(o.blendEquation(o.FUNC_ADD),x=rs,A=rs),ye)switch(Z){case wo:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case yx:o.blendFunc(o.ONE,o.ONE);break;case Mx:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Ex:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",Z);break}else switch(Z){case wo:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case yx:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case Mx:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Ex:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",Z);break}S=null,U=null,L=null,P=null,O.set(0,0,0),w=0,M=Z,B=ye}return}Ct=Ct||Rt,Wt=Wt||_t,ue=ue||vt,(Rt!==x||Ct!==A)&&(o.blendEquationSeparate(Pe[Rt],Pe[Ct]),x=Rt,A=Ct),(_t!==S||vt!==U||Wt!==L||ue!==P)&&(o.blendFuncSeparate(V[_t],V[vt],V[Wt],V[ue]),S=_t,U=vt,L=Wt,P=ue),(Fe.equals(O)===!1||mn!==w)&&(o.blendColor(Fe.r,Fe.g,Fe.b,mn),O.copy(Fe),w=mn),M=Z,B=!1}function fe(Z,Rt){Z.side===La?Tt(o.CULL_FACE):St(o.CULL_FACE);let _t=Z.side===ni;Rt&&(_t=!_t),Ee(_t),Z.blending===wo&&Z.transparent===!1?je(Tr):je(Z.blending,Z.blendEquation,Z.blendSrc,Z.blendDst,Z.blendEquationAlpha,Z.blendSrcAlpha,Z.blendDstAlpha,Z.blendColor,Z.blendAlpha,Z.premultipliedAlpha),u.setFunc(Z.depthFunc),u.setTest(Z.depthTest),u.setMask(Z.depthWrite),s.setMask(Z.colorWrite);const vt=Z.stencilWrite;c.setTest(vt),vt&&(c.setMask(Z.stencilWriteMask),c.setFunc(Z.stencilFunc,Z.stencilRef,Z.stencilFuncMask),c.setOp(Z.stencilFail,Z.stencilZFail,Z.stencilZPass)),te(Z.polygonOffset,Z.polygonOffsetFactor,Z.polygonOffsetUnits),Z.alphaToCoverage===!0?St(o.SAMPLE_ALPHA_TO_COVERAGE):Tt(o.SAMPLE_ALPHA_TO_COVERAGE)}function Ee(Z){b!==Z&&(Z?o.frontFace(o.CW):o.frontFace(o.CCW),b=Z)}function Vt(Z){Z!==yb?(St(o.CULL_FACE),Z!==R&&(Z===Sx?o.cullFace(o.BACK):Z===Mb?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Tt(o.CULL_FACE),R=Z}function Qe(Z){Z!==F&&(at&&o.lineWidth(Z),F=Z)}function te(Z,Rt,_t){Z?(St(o.POLYGON_OFFSET_FILL),(X!==Rt||Y!==_t)&&(o.polygonOffset(Rt,_t),X=Rt,Y=_t)):Tt(o.POLYGON_OFFSET_FILL)}function ee(Z){Z?St(o.SCISSOR_TEST):Tt(o.SCISSOR_TEST)}function H(Z){Z===void 0&&(Z=o.TEXTURE0+nt-1),q!==Z&&(o.activeTexture(Z),q=Z)}function D(Z,Rt,_t){_t===void 0&&(q===null?_t=o.TEXTURE0+nt-1:_t=q);let vt=ht[_t];vt===void 0&&(vt={type:void 0,texture:void 0},ht[_t]=vt),(vt.type!==Z||vt.texture!==Rt)&&(q!==_t&&(o.activeTexture(_t),q=_t),o.bindTexture(Z,Rt||ct[Z]),vt.type=Z,vt.texture=Rt)}function lt(){const Z=ht[q];Z!==void 0&&Z.type!==void 0&&(o.bindTexture(Z.type,null),Z.type=void 0,Z.texture=void 0)}function Et(){try{o.compressedTexImage2D.apply(o,arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function xt(){try{o.compressedTexImage3D.apply(o,arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function yt(){try{o.texSubImage2D.apply(o,arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function Yt(){try{o.texSubImage3D.apply(o,arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function Ut(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function Nt(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function ae(){try{o.texStorage2D.apply(o,arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function At(){try{o.texStorage3D.apply(o,arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function Ot(){try{o.texImage2D.apply(o,arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function pe(){try{o.texImage3D.apply(o,arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function Qt(Z){$.equals(Z)===!1&&(o.scissor(Z.x,Z.y,Z.z,Z.w),$.copy(Z))}function wt(Z){mt.equals(Z)===!1&&(o.viewport(Z.x,Z.y,Z.z,Z.w),mt.copy(Z))}function Zt(Z,Rt){let _t=d.get(Rt);_t===void 0&&(_t=new WeakMap,d.set(Rt,_t));let vt=_t.get(Z);vt===void 0&&(vt=o.getUniformBlockIndex(Rt,Z.name),_t.set(Z,vt))}function Kt(Z,Rt){const vt=d.get(Rt).get(Z);f.get(Rt)!==vt&&(o.uniformBlockBinding(Rt,vt,Z.__bindingPointIndex),f.set(Rt,vt))}function He(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),p={},q=null,ht={},_={},g=new WeakMap,v=[],y=null,T=!1,M=null,x=null,S=null,U=null,A=null,L=null,P=null,O=new Oe(0,0,0),w=0,B=!1,b=null,R=null,F=null,X=null,Y=null,$.set(0,0,o.canvas.width,o.canvas.height),mt.set(0,0,o.canvas.width,o.canvas.height),s.reset(),u.reset(),c.reset()}return{buffers:{color:s,depth:u,stencil:c},enable:St,disable:Tt,bindFramebuffer:Gt,drawBuffers:Ht,useProgram:ie,setBlending:je,setMaterial:fe,setFlipSided:Ee,setCullFace:Vt,setLineWidth:Qe,setPolygonOffset:te,setScissorTest:ee,activeTexture:H,bindTexture:D,unbindTexture:lt,compressedTexImage2D:Et,compressedTexImage3D:xt,texImage2D:Ot,texImage3D:pe,updateUBOMapping:Zt,uniformBlockBinding:Kt,texStorage2D:ae,texStorage3D:At,texSubImage2D:yt,texSubImage3D:Yt,compressedTexSubImage2D:Ut,compressedTexSubImage3D:Nt,scissor:Qt,viewport:wt,reset:He}}function mS(o,t,n,a){const s=_3(a);switch(n){case Py:return o*t;case Iy:return o*t;case By:return o*t*2;case Fy:return o*t/s.components*s.byteLength;case Km:return o*t/s.components*s.byteLength;case Hy:return o*t*2/s.components*s.byteLength;case Qm:return o*t*2/s.components*s.byteLength;case zy:return o*t*3/s.components*s.byteLength;case Yi:return o*t*4/s.components*s.byteLength;case Jm:return o*t*4/s.components*s.byteLength;case $c:case tf:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case ef:case nf:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Kp:case Jp:return Math.max(o,16)*Math.max(t,8)/4;case Zp:case Qp:return Math.max(o,8)*Math.max(t,8)/2;case $p:case tm:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case em:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case nm:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case im:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case am:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case rm:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case sm:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case om:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case lm:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case um:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case cm:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case fm:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case hm:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case dm:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case pm:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case mm:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case af:case _m:case gm:return Math.ceil(o/4)*Math.ceil(t/4)*16;case Gy:case vm:return Math.ceil(o/4)*Math.ceil(t/4)*8;case xm:case Sm:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function _3(o){switch(o){case Ia:case Ly:return{byteLength:1,components:1};case lu:case Ny:case cu:return{byteLength:2,components:1};case jm:case Zm:return{byteLength:2,components:4};case _s:case Ym:case Na:return{byteLength:4,components:1};case Oy:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}function g3(o,t,n,a,s,u,c){const f=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new xe,_=new WeakMap;let g;const v=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(H,D){return y?new OffscreenCanvas(H,D):Sf("canvas")}function M(H,D,lt){let Et=1;const xt=ee(H);if((xt.width>lt||xt.height>lt)&&(Et=lt/Math.max(xt.width,xt.height)),Et<1)if(typeof HTMLImageElement<"u"&&H instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&H instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&H instanceof ImageBitmap||typeof VideoFrame<"u"&&H instanceof VideoFrame){const yt=Math.floor(Et*xt.width),Yt=Math.floor(Et*xt.height);g===void 0&&(g=T(yt,Yt));const Ut=D?T(yt,Yt):g;return Ut.width=yt,Ut.height=Yt,Ut.getContext("2d").drawImage(H,0,0,yt,Yt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+xt.width+"x"+xt.height+") to ("+yt+"x"+Yt+")."),Ut}else return"data"in H&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+xt.width+"x"+xt.height+")."),H;return H}function x(H){return H.generateMipmaps&&H.minFilter!==Pi&&H.minFilter!==qi}function S(H){o.generateMipmap(H)}function U(H,D,lt,Et,xt=!1){if(H!==null){if(o[H]!==void 0)return o[H];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+H+"'")}let yt=D;if(D===o.RED&&(lt===o.FLOAT&&(yt=o.R32F),lt===o.HALF_FLOAT&&(yt=o.R16F),lt===o.UNSIGNED_BYTE&&(yt=o.R8)),D===o.RED_INTEGER&&(lt===o.UNSIGNED_BYTE&&(yt=o.R8UI),lt===o.UNSIGNED_SHORT&&(yt=o.R16UI),lt===o.UNSIGNED_INT&&(yt=o.R32UI),lt===o.BYTE&&(yt=o.R8I),lt===o.SHORT&&(yt=o.R16I),lt===o.INT&&(yt=o.R32I)),D===o.RG&&(lt===o.FLOAT&&(yt=o.RG32F),lt===o.HALF_FLOAT&&(yt=o.RG16F),lt===o.UNSIGNED_BYTE&&(yt=o.RG8)),D===o.RG_INTEGER&&(lt===o.UNSIGNED_BYTE&&(yt=o.RG8UI),lt===o.UNSIGNED_SHORT&&(yt=o.RG16UI),lt===o.UNSIGNED_INT&&(yt=o.RG32UI),lt===o.BYTE&&(yt=o.RG8I),lt===o.SHORT&&(yt=o.RG16I),lt===o.INT&&(yt=o.RG32I)),D===o.RGB&&lt===o.UNSIGNED_INT_5_9_9_9_REV&&(yt=o.RGB9_E5),D===o.RGBA){const Yt=xt?_f:Re.getTransfer(Et);lt===o.FLOAT&&(yt=o.RGBA32F),lt===o.HALF_FLOAT&&(yt=o.RGBA16F),lt===o.UNSIGNED_BYTE&&(yt=Yt===ke?o.SRGB8_ALPHA8:o.RGBA8),lt===o.UNSIGNED_SHORT_4_4_4_4&&(yt=o.RGBA4),lt===o.UNSIGNED_SHORT_5_5_5_1&&(yt=o.RGB5_A1)}return(yt===o.R16F||yt===o.R32F||yt===o.RG16F||yt===o.RG32F||yt===o.RGBA16F||yt===o.RGBA32F)&&t.get("EXT_color_buffer_float"),yt}function A(H,D){let lt;return H?D===null||D===_s||D===Ho?lt=o.DEPTH24_STENCIL8:D===Na?lt=o.DEPTH32F_STENCIL8:D===lu&&(lt=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):D===null||D===_s||D===Ho?lt=o.DEPTH_COMPONENT24:D===Na?lt=o.DEPTH_COMPONENT32F:D===lu&&(lt=o.DEPTH_COMPONENT16),lt}function L(H,D){return x(H)===!0||H.isFramebufferTexture&&H.minFilter!==Pi&&H.minFilter!==qi?Math.log2(Math.max(D.width,D.height))+1:H.mipmaps!==void 0&&H.mipmaps.length>0?H.mipmaps.length:H.isCompressedTexture&&Array.isArray(H.image)?D.mipmaps.length:1}function P(H){const D=H.target;D.removeEventListener("dispose",P),w(D),D.isVideoTexture&&_.delete(D)}function O(H){const D=H.target;D.removeEventListener("dispose",O),b(D)}function w(H){const D=a.get(H);if(D.__webglInit===void 0)return;const lt=H.source,Et=v.get(lt);if(Et){const xt=Et[D.__cacheKey];xt.usedTimes--,xt.usedTimes===0&&B(H),Object.keys(Et).length===0&&v.delete(lt)}a.remove(H)}function B(H){const D=a.get(H);o.deleteTexture(D.__webglTexture);const lt=H.source,Et=v.get(lt);delete Et[D.__cacheKey],c.memory.textures--}function b(H){const D=a.get(H);if(H.depthTexture&&H.depthTexture.dispose(),H.isWebGLCubeRenderTarget)for(let Et=0;Et<6;Et++){if(Array.isArray(D.__webglFramebuffer[Et]))for(let xt=0;xt<D.__webglFramebuffer[Et].length;xt++)o.deleteFramebuffer(D.__webglFramebuffer[Et][xt]);else o.deleteFramebuffer(D.__webglFramebuffer[Et]);D.__webglDepthbuffer&&o.deleteRenderbuffer(D.__webglDepthbuffer[Et])}else{if(Array.isArray(D.__webglFramebuffer))for(let Et=0;Et<D.__webglFramebuffer.length;Et++)o.deleteFramebuffer(D.__webglFramebuffer[Et]);else o.deleteFramebuffer(D.__webglFramebuffer);if(D.__webglDepthbuffer&&o.deleteRenderbuffer(D.__webglDepthbuffer),D.__webglMultisampledFramebuffer&&o.deleteFramebuffer(D.__webglMultisampledFramebuffer),D.__webglColorRenderbuffer)for(let Et=0;Et<D.__webglColorRenderbuffer.length;Et++)D.__webglColorRenderbuffer[Et]&&o.deleteRenderbuffer(D.__webglColorRenderbuffer[Et]);D.__webglDepthRenderbuffer&&o.deleteRenderbuffer(D.__webglDepthRenderbuffer)}const lt=H.textures;for(let Et=0,xt=lt.length;Et<xt;Et++){const yt=a.get(lt[Et]);yt.__webglTexture&&(o.deleteTexture(yt.__webglTexture),c.memory.textures--),a.remove(lt[Et])}a.remove(H)}let R=0;function F(){R=0}function X(){const H=R;return H>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+H+" texture units while this GPU supports only "+s.maxTextures),R+=1,H}function Y(H){const D=[];return D.push(H.wrapS),D.push(H.wrapT),D.push(H.wrapR||0),D.push(H.magFilter),D.push(H.minFilter),D.push(H.anisotropy),D.push(H.internalFormat),D.push(H.format),D.push(H.type),D.push(H.generateMipmaps),D.push(H.premultiplyAlpha),D.push(H.flipY),D.push(H.unpackAlignment),D.push(H.colorSpace),D.join()}function nt(H,D){const lt=a.get(H);if(H.isVideoTexture&&Qe(H),H.isRenderTargetTexture===!1&&H.version>0&&lt.__version!==H.version){const Et=H.image;if(Et===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Et.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{mt(lt,H,D);return}}n.bindTexture(o.TEXTURE_2D,lt.__webglTexture,o.TEXTURE0+D)}function at(H,D){const lt=a.get(H);if(H.version>0&&lt.__version!==H.version){mt(lt,H,D);return}n.bindTexture(o.TEXTURE_2D_ARRAY,lt.__webglTexture,o.TEXTURE0+D)}function I(H,D){const lt=a.get(H);if(H.version>0&&lt.__version!==H.version){mt(lt,H,D);return}n.bindTexture(o.TEXTURE_3D,lt.__webglTexture,o.TEXTURE0+D)}function k(H,D){const lt=a.get(H);if(H.version>0&&lt.__version!==H.version){j(lt,H,D);return}n.bindTexture(o.TEXTURE_CUBE_MAP,lt.__webglTexture,o.TEXTURE0+D)}const q={[Yp]:o.REPEAT,[ls]:o.CLAMP_TO_EDGE,[jp]:o.MIRRORED_REPEAT},ht={[Pi]:o.NEAREST,[aA]:o.NEAREST_MIPMAP_NEAREST,[Rc]:o.NEAREST_MIPMAP_LINEAR,[qi]:o.LINEAR,[Qd]:o.LINEAR_MIPMAP_NEAREST,[us]:o.LINEAR_MIPMAP_LINEAR},dt={[uA]:o.NEVER,[mA]:o.ALWAYS,[cA]:o.LESS,[Vy]:o.LEQUAL,[fA]:o.EQUAL,[pA]:o.GEQUAL,[hA]:o.GREATER,[dA]:o.NOTEQUAL};function z(H,D){if(D.type===Na&&t.has("OES_texture_float_linear")===!1&&(D.magFilter===qi||D.magFilter===Qd||D.magFilter===Rc||D.magFilter===us||D.minFilter===qi||D.minFilter===Qd||D.minFilter===Rc||D.minFilter===us)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(H,o.TEXTURE_WRAP_S,q[D.wrapS]),o.texParameteri(H,o.TEXTURE_WRAP_T,q[D.wrapT]),(H===o.TEXTURE_3D||H===o.TEXTURE_2D_ARRAY)&&o.texParameteri(H,o.TEXTURE_WRAP_R,q[D.wrapR]),o.texParameteri(H,o.TEXTURE_MAG_FILTER,ht[D.magFilter]),o.texParameteri(H,o.TEXTURE_MIN_FILTER,ht[D.minFilter]),D.compareFunction&&(o.texParameteri(H,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(H,o.TEXTURE_COMPARE_FUNC,dt[D.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(D.magFilter===Pi||D.minFilter!==Rc&&D.minFilter!==us||D.type===Na&&t.has("OES_texture_float_linear")===!1)return;if(D.anisotropy>1||a.get(D).__currentAnisotropy){const lt=t.get("EXT_texture_filter_anisotropic");o.texParameterf(H,lt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(D.anisotropy,s.getMaxAnisotropy())),a.get(D).__currentAnisotropy=D.anisotropy}}}function $(H,D){let lt=!1;H.__webglInit===void 0&&(H.__webglInit=!0,D.addEventListener("dispose",P));const Et=D.source;let xt=v.get(Et);xt===void 0&&(xt={},v.set(Et,xt));const yt=Y(D);if(yt!==H.__cacheKey){xt[yt]===void 0&&(xt[yt]={texture:o.createTexture(),usedTimes:0},c.memory.textures++,lt=!0),xt[yt].usedTimes++;const Yt=xt[H.__cacheKey];Yt!==void 0&&(xt[H.__cacheKey].usedTimes--,Yt.usedTimes===0&&B(D)),H.__cacheKey=yt,H.__webglTexture=xt[yt].texture}return lt}function mt(H,D,lt){let Et=o.TEXTURE_2D;(D.isDataArrayTexture||D.isCompressedArrayTexture)&&(Et=o.TEXTURE_2D_ARRAY),D.isData3DTexture&&(Et=o.TEXTURE_3D);const xt=$(H,D),yt=D.source;n.bindTexture(Et,H.__webglTexture,o.TEXTURE0+lt);const Yt=a.get(yt);if(yt.version!==Yt.__version||xt===!0){n.activeTexture(o.TEXTURE0+lt);const Ut=Re.getPrimaries(Re.workingColorSpace),Nt=D.colorSpace===vr?null:Re.getPrimaries(D.colorSpace),ae=D.colorSpace===vr||Ut===Nt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,D.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,D.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,ae);let At=M(D.image,!1,s.maxTextureSize);At=te(D,At);const Ot=u.convert(D.format,D.colorSpace),pe=u.convert(D.type);let Qt=U(D.internalFormat,Ot,pe,D.colorSpace,D.isVideoTexture);z(Et,D);let wt;const Zt=D.mipmaps,Kt=D.isVideoTexture!==!0,He=Yt.__version===void 0||xt===!0,Z=yt.dataReady,Rt=L(D,At);if(D.isDepthTexture)Qt=A(D.format===Go,D.type),He&&(Kt?n.texStorage2D(o.TEXTURE_2D,1,Qt,At.width,At.height):n.texImage2D(o.TEXTURE_2D,0,Qt,At.width,At.height,0,Ot,pe,null));else if(D.isDataTexture)if(Zt.length>0){Kt&&He&&n.texStorage2D(o.TEXTURE_2D,Rt,Qt,Zt[0].width,Zt[0].height);for(let _t=0,vt=Zt.length;_t<vt;_t++)wt=Zt[_t],Kt?Z&&n.texSubImage2D(o.TEXTURE_2D,_t,0,0,wt.width,wt.height,Ot,pe,wt.data):n.texImage2D(o.TEXTURE_2D,_t,Qt,wt.width,wt.height,0,Ot,pe,wt.data);D.generateMipmaps=!1}else Kt?(He&&n.texStorage2D(o.TEXTURE_2D,Rt,Qt,At.width,At.height),Z&&n.texSubImage2D(o.TEXTURE_2D,0,0,0,At.width,At.height,Ot,pe,At.data)):n.texImage2D(o.TEXTURE_2D,0,Qt,At.width,At.height,0,Ot,pe,At.data);else if(D.isCompressedTexture)if(D.isCompressedArrayTexture){Kt&&He&&n.texStorage3D(o.TEXTURE_2D_ARRAY,Rt,Qt,Zt[0].width,Zt[0].height,At.depth);for(let _t=0,vt=Zt.length;_t<vt;_t++)if(wt=Zt[_t],D.format!==Yi)if(Ot!==null)if(Kt){if(Z)if(D.layerUpdates.size>0){const Ct=mS(wt.width,wt.height,D.format,D.type);for(const Wt of D.layerUpdates){const ue=wt.data.subarray(Wt*Ct/wt.data.BYTES_PER_ELEMENT,(Wt+1)*Ct/wt.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,_t,0,0,Wt,wt.width,wt.height,1,Ot,ue,0,0)}D.clearLayerUpdates()}else n.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,_t,0,0,0,wt.width,wt.height,At.depth,Ot,wt.data,0,0)}else n.compressedTexImage3D(o.TEXTURE_2D_ARRAY,_t,Qt,wt.width,wt.height,At.depth,0,wt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Kt?Z&&n.texSubImage3D(o.TEXTURE_2D_ARRAY,_t,0,0,0,wt.width,wt.height,At.depth,Ot,pe,wt.data):n.texImage3D(o.TEXTURE_2D_ARRAY,_t,Qt,wt.width,wt.height,At.depth,0,Ot,pe,wt.data)}else{Kt&&He&&n.texStorage2D(o.TEXTURE_2D,Rt,Qt,Zt[0].width,Zt[0].height);for(let _t=0,vt=Zt.length;_t<vt;_t++)wt=Zt[_t],D.format!==Yi?Ot!==null?Kt?Z&&n.compressedTexSubImage2D(o.TEXTURE_2D,_t,0,0,wt.width,wt.height,Ot,wt.data):n.compressedTexImage2D(o.TEXTURE_2D,_t,Qt,wt.width,wt.height,0,wt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Kt?Z&&n.texSubImage2D(o.TEXTURE_2D,_t,0,0,wt.width,wt.height,Ot,pe,wt.data):n.texImage2D(o.TEXTURE_2D,_t,Qt,wt.width,wt.height,0,Ot,pe,wt.data)}else if(D.isDataArrayTexture)if(Kt){if(He&&n.texStorage3D(o.TEXTURE_2D_ARRAY,Rt,Qt,At.width,At.height,At.depth),Z)if(D.layerUpdates.size>0){const _t=mS(At.width,At.height,D.format,D.type);for(const vt of D.layerUpdates){const Ct=At.data.subarray(vt*_t/At.data.BYTES_PER_ELEMENT,(vt+1)*_t/At.data.BYTES_PER_ELEMENT);n.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,vt,At.width,At.height,1,Ot,pe,Ct)}D.clearLayerUpdates()}else n.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,At.width,At.height,At.depth,Ot,pe,At.data)}else n.texImage3D(o.TEXTURE_2D_ARRAY,0,Qt,At.width,At.height,At.depth,0,Ot,pe,At.data);else if(D.isData3DTexture)Kt?(He&&n.texStorage3D(o.TEXTURE_3D,Rt,Qt,At.width,At.height,At.depth),Z&&n.texSubImage3D(o.TEXTURE_3D,0,0,0,0,At.width,At.height,At.depth,Ot,pe,At.data)):n.texImage3D(o.TEXTURE_3D,0,Qt,At.width,At.height,At.depth,0,Ot,pe,At.data);else if(D.isFramebufferTexture){if(He)if(Kt)n.texStorage2D(o.TEXTURE_2D,Rt,Qt,At.width,At.height);else{let _t=At.width,vt=At.height;for(let Ct=0;Ct<Rt;Ct++)n.texImage2D(o.TEXTURE_2D,Ct,Qt,_t,vt,0,Ot,pe,null),_t>>=1,vt>>=1}}else if(Zt.length>0){if(Kt&&He){const _t=ee(Zt[0]);n.texStorage2D(o.TEXTURE_2D,Rt,Qt,_t.width,_t.height)}for(let _t=0,vt=Zt.length;_t<vt;_t++)wt=Zt[_t],Kt?Z&&n.texSubImage2D(o.TEXTURE_2D,_t,0,0,Ot,pe,wt):n.texImage2D(o.TEXTURE_2D,_t,Qt,Ot,pe,wt);D.generateMipmaps=!1}else if(Kt){if(He){const _t=ee(At);n.texStorage2D(o.TEXTURE_2D,Rt,Qt,_t.width,_t.height)}Z&&n.texSubImage2D(o.TEXTURE_2D,0,0,0,Ot,pe,At)}else n.texImage2D(o.TEXTURE_2D,0,Qt,Ot,pe,At);x(D)&&S(Et),Yt.__version=yt.version,D.onUpdate&&D.onUpdate(D)}H.__version=D.version}function j(H,D,lt){if(D.image.length!==6)return;const Et=$(H,D),xt=D.source;n.bindTexture(o.TEXTURE_CUBE_MAP,H.__webglTexture,o.TEXTURE0+lt);const yt=a.get(xt);if(xt.version!==yt.__version||Et===!0){n.activeTexture(o.TEXTURE0+lt);const Yt=Re.getPrimaries(Re.workingColorSpace),Ut=D.colorSpace===vr?null:Re.getPrimaries(D.colorSpace),Nt=D.colorSpace===vr||Yt===Ut?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,D.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,D.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Nt);const ae=D.isCompressedTexture||D.image[0].isCompressedTexture,At=D.image[0]&&D.image[0].isDataTexture,Ot=[];for(let vt=0;vt<6;vt++)!ae&&!At?Ot[vt]=M(D.image[vt],!0,s.maxCubemapSize):Ot[vt]=At?D.image[vt].image:D.image[vt],Ot[vt]=te(D,Ot[vt]);const pe=Ot[0],Qt=u.convert(D.format,D.colorSpace),wt=u.convert(D.type),Zt=U(D.internalFormat,Qt,wt,D.colorSpace),Kt=D.isVideoTexture!==!0,He=yt.__version===void 0||Et===!0,Z=xt.dataReady;let Rt=L(D,pe);z(o.TEXTURE_CUBE_MAP,D);let _t;if(ae){Kt&&He&&n.texStorage2D(o.TEXTURE_CUBE_MAP,Rt,Zt,pe.width,pe.height);for(let vt=0;vt<6;vt++){_t=Ot[vt].mipmaps;for(let Ct=0;Ct<_t.length;Ct++){const Wt=_t[Ct];D.format!==Yi?Qt!==null?Kt?Z&&n.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ct,0,0,Wt.width,Wt.height,Qt,Wt.data):n.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ct,Zt,Wt.width,Wt.height,0,Wt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Kt?Z&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ct,0,0,Wt.width,Wt.height,Qt,wt,Wt.data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ct,Zt,Wt.width,Wt.height,0,Qt,wt,Wt.data)}}}else{if(_t=D.mipmaps,Kt&&He){_t.length>0&&Rt++;const vt=ee(Ot[0]);n.texStorage2D(o.TEXTURE_CUBE_MAP,Rt,Zt,vt.width,vt.height)}for(let vt=0;vt<6;vt++)if(At){Kt?Z&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,Ot[vt].width,Ot[vt].height,Qt,wt,Ot[vt].data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,Zt,Ot[vt].width,Ot[vt].height,0,Qt,wt,Ot[vt].data);for(let Ct=0;Ct<_t.length;Ct++){const ue=_t[Ct].image[vt].image;Kt?Z&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ct+1,0,0,ue.width,ue.height,Qt,wt,ue.data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ct+1,Zt,ue.width,ue.height,0,Qt,wt,ue.data)}}else{Kt?Z&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,Qt,wt,Ot[vt]):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,Zt,Qt,wt,Ot[vt]);for(let Ct=0;Ct<_t.length;Ct++){const Wt=_t[Ct];Kt?Z&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ct+1,0,0,Qt,wt,Wt.image[vt]):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ct+1,Zt,Qt,wt,Wt.image[vt])}}}x(D)&&S(o.TEXTURE_CUBE_MAP),yt.__version=xt.version,D.onUpdate&&D.onUpdate(D)}H.__version=D.version}function ct(H,D,lt,Et,xt,yt){const Yt=u.convert(lt.format,lt.colorSpace),Ut=u.convert(lt.type),Nt=U(lt.internalFormat,Yt,Ut,lt.colorSpace);if(!a.get(D).__hasExternalTextures){const At=Math.max(1,D.width>>yt),Ot=Math.max(1,D.height>>yt);xt===o.TEXTURE_3D||xt===o.TEXTURE_2D_ARRAY?n.texImage3D(xt,yt,Nt,At,Ot,D.depth,0,Yt,Ut,null):n.texImage2D(xt,yt,Nt,At,Ot,0,Yt,Ut,null)}n.bindFramebuffer(o.FRAMEBUFFER,H),Vt(D)?f.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Et,xt,a.get(lt).__webglTexture,0,Ee(D)):(xt===o.TEXTURE_2D||xt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&xt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,Et,xt,a.get(lt).__webglTexture,yt),n.bindFramebuffer(o.FRAMEBUFFER,null)}function St(H,D,lt){if(o.bindRenderbuffer(o.RENDERBUFFER,H),D.depthBuffer){const Et=D.depthTexture,xt=Et&&Et.isDepthTexture?Et.type:null,yt=A(D.stencilBuffer,xt),Yt=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ut=Ee(D);Vt(D)?f.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Ut,yt,D.width,D.height):lt?o.renderbufferStorageMultisample(o.RENDERBUFFER,Ut,yt,D.width,D.height):o.renderbufferStorage(o.RENDERBUFFER,yt,D.width,D.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Yt,o.RENDERBUFFER,H)}else{const Et=D.textures;for(let xt=0;xt<Et.length;xt++){const yt=Et[xt],Yt=u.convert(yt.format,yt.colorSpace),Ut=u.convert(yt.type),Nt=U(yt.internalFormat,Yt,Ut,yt.colorSpace),ae=Ee(D);lt&&Vt(D)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,ae,Nt,D.width,D.height):Vt(D)?f.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,ae,Nt,D.width,D.height):o.renderbufferStorage(o.RENDERBUFFER,Nt,D.width,D.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Tt(H,D){if(D&&D.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(o.FRAMEBUFFER,H),!(D.depthTexture&&D.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!a.get(D.depthTexture).__webglTexture||D.depthTexture.image.width!==D.width||D.depthTexture.image.height!==D.height)&&(D.depthTexture.image.width=D.width,D.depthTexture.image.height=D.height,D.depthTexture.needsUpdate=!0),nt(D.depthTexture,0);const Et=a.get(D.depthTexture).__webglTexture,xt=Ee(D);if(D.depthTexture.format===Do)Vt(D)?f.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,Et,0,xt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,Et,0);else if(D.depthTexture.format===Go)Vt(D)?f.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,Et,0,xt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,Et,0);else throw new Error("Unknown depthTexture format")}function Gt(H){const D=a.get(H),lt=H.isWebGLCubeRenderTarget===!0;if(H.depthTexture&&!D.__autoAllocateDepthBuffer){if(lt)throw new Error("target.depthTexture not supported in Cube render targets");Tt(D.__webglFramebuffer,H)}else if(lt){D.__webglDepthbuffer=[];for(let Et=0;Et<6;Et++)n.bindFramebuffer(o.FRAMEBUFFER,D.__webglFramebuffer[Et]),D.__webglDepthbuffer[Et]=o.createRenderbuffer(),St(D.__webglDepthbuffer[Et],H,!1)}else n.bindFramebuffer(o.FRAMEBUFFER,D.__webglFramebuffer),D.__webglDepthbuffer=o.createRenderbuffer(),St(D.__webglDepthbuffer,H,!1);n.bindFramebuffer(o.FRAMEBUFFER,null)}function Ht(H,D,lt){const Et=a.get(H);D!==void 0&&ct(Et.__webglFramebuffer,H,H.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),lt!==void 0&&Gt(H)}function ie(H){const D=H.texture,lt=a.get(H),Et=a.get(D);H.addEventListener("dispose",O);const xt=H.textures,yt=H.isWebGLCubeRenderTarget===!0,Yt=xt.length>1;if(Yt||(Et.__webglTexture===void 0&&(Et.__webglTexture=o.createTexture()),Et.__version=D.version,c.memory.textures++),yt){lt.__webglFramebuffer=[];for(let Ut=0;Ut<6;Ut++)if(D.mipmaps&&D.mipmaps.length>0){lt.__webglFramebuffer[Ut]=[];for(let Nt=0;Nt<D.mipmaps.length;Nt++)lt.__webglFramebuffer[Ut][Nt]=o.createFramebuffer()}else lt.__webglFramebuffer[Ut]=o.createFramebuffer()}else{if(D.mipmaps&&D.mipmaps.length>0){lt.__webglFramebuffer=[];for(let Ut=0;Ut<D.mipmaps.length;Ut++)lt.__webglFramebuffer[Ut]=o.createFramebuffer()}else lt.__webglFramebuffer=o.createFramebuffer();if(Yt)for(let Ut=0,Nt=xt.length;Ut<Nt;Ut++){const ae=a.get(xt[Ut]);ae.__webglTexture===void 0&&(ae.__webglTexture=o.createTexture(),c.memory.textures++)}if(H.samples>0&&Vt(H)===!1){lt.__webglMultisampledFramebuffer=o.createFramebuffer(),lt.__webglColorRenderbuffer=[],n.bindFramebuffer(o.FRAMEBUFFER,lt.__webglMultisampledFramebuffer);for(let Ut=0;Ut<xt.length;Ut++){const Nt=xt[Ut];lt.__webglColorRenderbuffer[Ut]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,lt.__webglColorRenderbuffer[Ut]);const ae=u.convert(Nt.format,Nt.colorSpace),At=u.convert(Nt.type),Ot=U(Nt.internalFormat,ae,At,Nt.colorSpace,H.isXRRenderTarget===!0),pe=Ee(H);o.renderbufferStorageMultisample(o.RENDERBUFFER,pe,Ot,H.width,H.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ut,o.RENDERBUFFER,lt.__webglColorRenderbuffer[Ut])}o.bindRenderbuffer(o.RENDERBUFFER,null),H.depthBuffer&&(lt.__webglDepthRenderbuffer=o.createRenderbuffer(),St(lt.__webglDepthRenderbuffer,H,!0)),n.bindFramebuffer(o.FRAMEBUFFER,null)}}if(yt){n.bindTexture(o.TEXTURE_CUBE_MAP,Et.__webglTexture),z(o.TEXTURE_CUBE_MAP,D);for(let Ut=0;Ut<6;Ut++)if(D.mipmaps&&D.mipmaps.length>0)for(let Nt=0;Nt<D.mipmaps.length;Nt++)ct(lt.__webglFramebuffer[Ut][Nt],H,D,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,Nt);else ct(lt.__webglFramebuffer[Ut],H,D,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,0);x(D)&&S(o.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Yt){for(let Ut=0,Nt=xt.length;Ut<Nt;Ut++){const ae=xt[Ut],At=a.get(ae);n.bindTexture(o.TEXTURE_2D,At.__webglTexture),z(o.TEXTURE_2D,ae),ct(lt.__webglFramebuffer,H,ae,o.COLOR_ATTACHMENT0+Ut,o.TEXTURE_2D,0),x(ae)&&S(o.TEXTURE_2D)}n.unbindTexture()}else{let Ut=o.TEXTURE_2D;if((H.isWebGL3DRenderTarget||H.isWebGLArrayRenderTarget)&&(Ut=H.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),n.bindTexture(Ut,Et.__webglTexture),z(Ut,D),D.mipmaps&&D.mipmaps.length>0)for(let Nt=0;Nt<D.mipmaps.length;Nt++)ct(lt.__webglFramebuffer[Nt],H,D,o.COLOR_ATTACHMENT0,Ut,Nt);else ct(lt.__webglFramebuffer,H,D,o.COLOR_ATTACHMENT0,Ut,0);x(D)&&S(Ut),n.unbindTexture()}H.depthBuffer&&Gt(H)}function Pe(H){const D=H.textures;for(let lt=0,Et=D.length;lt<Et;lt++){const xt=D[lt];if(x(xt)){const yt=H.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:o.TEXTURE_2D,Yt=a.get(xt).__webglTexture;n.bindTexture(yt,Yt),S(yt),n.unbindTexture()}}}const V=[],je=[];function fe(H){if(H.samples>0){if(Vt(H)===!1){const D=H.textures,lt=H.width,Et=H.height;let xt=o.COLOR_BUFFER_BIT;const yt=H.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Yt=a.get(H),Ut=D.length>1;if(Ut)for(let Nt=0;Nt<D.length;Nt++)n.bindFramebuffer(o.FRAMEBUFFER,Yt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Nt,o.RENDERBUFFER,null),n.bindFramebuffer(o.FRAMEBUFFER,Yt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Nt,o.TEXTURE_2D,null,0);n.bindFramebuffer(o.READ_FRAMEBUFFER,Yt.__webglMultisampledFramebuffer),n.bindFramebuffer(o.DRAW_FRAMEBUFFER,Yt.__webglFramebuffer);for(let Nt=0;Nt<D.length;Nt++){if(H.resolveDepthBuffer&&(H.depthBuffer&&(xt|=o.DEPTH_BUFFER_BIT),H.stencilBuffer&&H.resolveStencilBuffer&&(xt|=o.STENCIL_BUFFER_BIT)),Ut){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Yt.__webglColorRenderbuffer[Nt]);const ae=a.get(D[Nt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,ae,0)}o.blitFramebuffer(0,0,lt,Et,0,0,lt,Et,xt,o.NEAREST),d===!0&&(V.length=0,je.length=0,V.push(o.COLOR_ATTACHMENT0+Nt),H.depthBuffer&&H.resolveDepthBuffer===!1&&(V.push(yt),je.push(yt),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,je)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,V))}if(n.bindFramebuffer(o.READ_FRAMEBUFFER,null),n.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Ut)for(let Nt=0;Nt<D.length;Nt++){n.bindFramebuffer(o.FRAMEBUFFER,Yt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Nt,o.RENDERBUFFER,Yt.__webglColorRenderbuffer[Nt]);const ae=a.get(D[Nt]).__webglTexture;n.bindFramebuffer(o.FRAMEBUFFER,Yt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Nt,o.TEXTURE_2D,ae,0)}n.bindFramebuffer(o.DRAW_FRAMEBUFFER,Yt.__webglMultisampledFramebuffer)}else if(H.depthBuffer&&H.resolveDepthBuffer===!1&&d){const D=H.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[D])}}}function Ee(H){return Math.min(s.maxSamples,H.samples)}function Vt(H){const D=a.get(H);return H.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&D.__useRenderToTexture!==!1}function Qe(H){const D=c.render.frame;_.get(H)!==D&&(_.set(H,D),H.update())}function te(H,D){const lt=H.colorSpace,Et=H.format,xt=H.type;return H.isCompressedTexture===!0||H.isVideoTexture===!0||lt!==Dr&&lt!==vr&&(Re.getTransfer(lt)===ke?(Et!==Yi||xt!==Ia)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",lt)),D}function ee(H){return typeof HTMLImageElement<"u"&&H instanceof HTMLImageElement?(p.width=H.naturalWidth||H.width,p.height=H.naturalHeight||H.height):typeof VideoFrame<"u"&&H instanceof VideoFrame?(p.width=H.displayWidth,p.height=H.displayHeight):(p.width=H.width,p.height=H.height),p}this.allocateTextureUnit=X,this.resetTextureUnits=F,this.setTexture2D=nt,this.setTexture2DArray=at,this.setTexture3D=I,this.setTextureCube=k,this.rebindTextures=Ht,this.setupRenderTarget=ie,this.updateRenderTargetMipmap=Pe,this.updateMultisampleRenderTarget=fe,this.setupDepthRenderbuffer=Gt,this.setupFrameBufferTexture=ct,this.useMultisampledRTT=Vt}function v3(o,t){function n(a,s=vr){let u;const c=Re.getTransfer(s);if(a===Ia)return o.UNSIGNED_BYTE;if(a===jm)return o.UNSIGNED_SHORT_4_4_4_4;if(a===Zm)return o.UNSIGNED_SHORT_5_5_5_1;if(a===Oy)return o.UNSIGNED_INT_5_9_9_9_REV;if(a===Ly)return o.BYTE;if(a===Ny)return o.SHORT;if(a===lu)return o.UNSIGNED_SHORT;if(a===Ym)return o.INT;if(a===_s)return o.UNSIGNED_INT;if(a===Na)return o.FLOAT;if(a===cu)return o.HALF_FLOAT;if(a===Py)return o.ALPHA;if(a===zy)return o.RGB;if(a===Yi)return o.RGBA;if(a===Iy)return o.LUMINANCE;if(a===By)return o.LUMINANCE_ALPHA;if(a===Do)return o.DEPTH_COMPONENT;if(a===Go)return o.DEPTH_STENCIL;if(a===Fy)return o.RED;if(a===Km)return o.RED_INTEGER;if(a===Hy)return o.RG;if(a===Qm)return o.RG_INTEGER;if(a===Jm)return o.RGBA_INTEGER;if(a===$c||a===tf||a===ef||a===nf)if(c===ke)if(u=t.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(a===$c)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===tf)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===ef)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===nf)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=t.get("WEBGL_compressed_texture_s3tc"),u!==null){if(a===$c)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===tf)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===ef)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===nf)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===Zp||a===Kp||a===Qp||a===Jp)if(u=t.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(a===Zp)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===Kp)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===Qp)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===Jp)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===$p||a===tm||a===em)if(u=t.get("WEBGL_compressed_texture_etc"),u!==null){if(a===$p||a===tm)return c===ke?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(a===em)return c===ke?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===nm||a===im||a===am||a===rm||a===sm||a===om||a===lm||a===um||a===cm||a===fm||a===hm||a===dm||a===pm||a===mm)if(u=t.get("WEBGL_compressed_texture_astc"),u!==null){if(a===nm)return c===ke?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===im)return c===ke?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===am)return c===ke?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===rm)return c===ke?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===sm)return c===ke?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===om)return c===ke?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===lm)return c===ke?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===um)return c===ke?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===cm)return c===ke?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===fm)return c===ke?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===hm)return c===ke?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===dm)return c===ke?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===pm)return c===ke?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===mm)return c===ke?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===af||a===_m||a===gm)if(u=t.get("EXT_texture_compression_bptc"),u!==null){if(a===af)return c===ke?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===_m)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===gm)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===Gy||a===vm||a===xm||a===Sm)if(u=t.get("EXT_texture_compression_rgtc"),u!==null){if(a===af)return u.COMPRESSED_RED_RGTC1_EXT;if(a===vm)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===xm)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===Sm)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===Ho?o.UNSIGNED_INT_24_8:o[a]!==void 0?o[a]:null}return{convert:n}}class x3 extends Wi{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Zc extends xi{constructor(){super(),this.isGroup=!0,this.type="Group"}}const S3={type:"move"};class Tp{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Zc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Zc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ot,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ot),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Zc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ot,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ot),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const n=this._hand;if(n)for(const a of t.hand.values())this._getHandJoint(n,a)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,a){let s=null,u=null,c=null;const f=this._targetRay,d=this._grip,p=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(p&&t.hand){c=!0;for(const M of t.hand.values()){const x=n.getJointPose(M,a),S=this._getHandJoint(p,M);x!==null&&(S.matrix.fromArray(x.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=x.radius),S.visible=x!==null}const _=p.joints["index-finger-tip"],g=p.joints["thumb-tip"],v=_.position.distanceTo(g.position),y=.02,T=.005;p.inputState.pinching&&v>y+T?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&v<=y-T&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else d!==null&&t.gripSpace&&(u=n.getPose(t.gripSpace,a),u!==null&&(d.matrix.fromArray(u.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,u.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(u.linearVelocity)):d.hasLinearVelocity=!1,u.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(u.angularVelocity)):d.hasAngularVelocity=!1));f!==null&&(s=n.getPose(t.targetRaySpace,a),s===null&&u!==null&&(s=u),s!==null&&(f.matrix.fromArray(s.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,s.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(s.linearVelocity)):f.hasLinearVelocity=!1,s.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(s.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(S3)))}return f!==null&&(f.visible=s!==null),d!==null&&(d.visible=u!==null),p!==null&&(p.visible=c!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){const a=new Zc;a.matrixAutoUpdate=!1,a.visible=!1,t.joints[n.jointName]=a,t.add(a)}return t.joints[n.jointName]}}const y3=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,M3=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class E3{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n,a){if(this.texture===null){const s=new ii,u=t.properties.get(s);u.__webglTexture=n.texture,(n.depthNear!=a.depthNear||n.depthFar!=a.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const n=t.cameras[0].viewport,a=new Fa({vertexShader:y3,fragmentShader:M3,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new aa(new mu(20,20),a)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class T3 extends ko{constructor(t,n){super();const a=this;let s=null,u=1,c=null,f="local-floor",d=1,p=null,_=null,g=null,v=null,y=null,T=null;const M=new E3,x=n.getContextAttributes();let S=null,U=null;const A=[],L=[],P=new xe;let O=null;const w=new Wi;w.layers.enable(1),w.viewport=new En;const B=new Wi;B.layers.enable(2),B.viewport=new En;const b=[w,B],R=new x3;R.layers.enable(1),R.layers.enable(2);let F=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let ct=A[j];return ct===void 0&&(ct=new Tp,A[j]=ct),ct.getTargetRaySpace()},this.getControllerGrip=function(j){let ct=A[j];return ct===void 0&&(ct=new Tp,A[j]=ct),ct.getGripSpace()},this.getHand=function(j){let ct=A[j];return ct===void 0&&(ct=new Tp,A[j]=ct),ct.getHandSpace()};function Y(j){const ct=L.indexOf(j.inputSource);if(ct===-1)return;const St=A[ct];St!==void 0&&(St.update(j.inputSource,j.frame,p||c),St.dispatchEvent({type:j.type,data:j.inputSource}))}function nt(){s.removeEventListener("select",Y),s.removeEventListener("selectstart",Y),s.removeEventListener("selectend",Y),s.removeEventListener("squeeze",Y),s.removeEventListener("squeezestart",Y),s.removeEventListener("squeezeend",Y),s.removeEventListener("end",nt),s.removeEventListener("inputsourceschange",at);for(let j=0;j<A.length;j++){const ct=L[j];ct!==null&&(L[j]=null,A[j].disconnect(ct))}F=null,X=null,M.reset(),t.setRenderTarget(S),y=null,v=null,g=null,s=null,U=null,mt.stop(),a.isPresenting=!1,t.setPixelRatio(O),t.setSize(P.width,P.height,!1),a.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){u=j,a.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){f=j,a.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||c},this.setReferenceSpace=function(j){p=j},this.getBaseLayer=function(){return v!==null?v:y},this.getBinding=function(){return g},this.getFrame=function(){return T},this.getSession=function(){return s},this.setSession=async function(j){if(s=j,s!==null){if(S=t.getRenderTarget(),s.addEventListener("select",Y),s.addEventListener("selectstart",Y),s.addEventListener("selectend",Y),s.addEventListener("squeeze",Y),s.addEventListener("squeezestart",Y),s.addEventListener("squeezeend",Y),s.addEventListener("end",nt),s.addEventListener("inputsourceschange",at),x.xrCompatible!==!0&&await n.makeXRCompatible(),O=t.getPixelRatio(),t.getSize(P),s.renderState.layers===void 0){const ct={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:u};y=new XRWebGLLayer(s,n,ct),s.updateRenderState({baseLayer:y}),t.setPixelRatio(1),t.setSize(y.framebufferWidth,y.framebufferHeight,!1),U=new gs(y.framebufferWidth,y.framebufferHeight,{format:Yi,type:Ia,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil})}else{let ct=null,St=null,Tt=null;x.depth&&(Tt=x.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ct=x.stencil?Go:Do,St=x.stencil?Ho:_s);const Gt={colorFormat:n.RGBA8,depthFormat:Tt,scaleFactor:u};g=new XRWebGLBinding(s,n),v=g.createProjectionLayer(Gt),s.updateRenderState({layers:[v]}),t.setPixelRatio(1),t.setSize(v.textureWidth,v.textureHeight,!1),U=new gs(v.textureWidth,v.textureHeight,{format:Yi,type:Ia,depthTexture:new iM(v.textureWidth,v.textureHeight,St,void 0,void 0,void 0,void 0,void 0,void 0,ct),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1})}U.isXRRenderTarget=!0,this.setFoveation(d),p=null,c=await s.requestReferenceSpace(f),mt.setContext(s),mt.start(),a.isPresenting=!0,a.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function at(j){for(let ct=0;ct<j.removed.length;ct++){const St=j.removed[ct],Tt=L.indexOf(St);Tt>=0&&(L[Tt]=null,A[Tt].disconnect(St))}for(let ct=0;ct<j.added.length;ct++){const St=j.added[ct];let Tt=L.indexOf(St);if(Tt===-1){for(let Ht=0;Ht<A.length;Ht++)if(Ht>=L.length){L.push(St),Tt=Ht;break}else if(L[Ht]===null){L[Ht]=St,Tt=Ht;break}if(Tt===-1)break}const Gt=A[Tt];Gt&&Gt.connect(St)}}const I=new ot,k=new ot;function q(j,ct,St){I.setFromMatrixPosition(ct.matrixWorld),k.setFromMatrixPosition(St.matrixWorld);const Tt=I.distanceTo(k),Gt=ct.projectionMatrix.elements,Ht=St.projectionMatrix.elements,ie=Gt[14]/(Gt[10]-1),Pe=Gt[14]/(Gt[10]+1),V=(Gt[9]+1)/Gt[5],je=(Gt[9]-1)/Gt[5],fe=(Gt[8]-1)/Gt[0],Ee=(Ht[8]+1)/Ht[0],Vt=ie*fe,Qe=ie*Ee,te=Tt/(-fe+Ee),ee=te*-fe;ct.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(ee),j.translateZ(te),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert();const H=ie+te,D=Pe+te,lt=Vt-ee,Et=Qe+(Tt-ee),xt=V*Pe/D*H,yt=je*Pe/D*H;j.projectionMatrix.makePerspective(lt,Et,xt,yt,H,D),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}function ht(j,ct){ct===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(ct.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(s===null)return;M.texture!==null&&(j.near=M.depthNear,j.far=M.depthFar),R.near=B.near=w.near=j.near,R.far=B.far=w.far=j.far,(F!==R.near||X!==R.far)&&(s.updateRenderState({depthNear:R.near,depthFar:R.far}),F=R.near,X=R.far,w.near=F,w.far=X,B.near=F,B.far=X,w.updateProjectionMatrix(),B.updateProjectionMatrix(),j.updateProjectionMatrix());const ct=j.parent,St=R.cameras;ht(R,ct);for(let Tt=0;Tt<St.length;Tt++)ht(St[Tt],ct);St.length===2?q(R,w,B):R.projectionMatrix.copy(w.projectionMatrix),dt(j,R,ct)};function dt(j,ct,St){St===null?j.matrix.copy(ct.matrixWorld):(j.matrix.copy(St.matrixWorld),j.matrix.invert(),j.matrix.multiply(ct.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(ct.projectionMatrix),j.projectionMatrixInverse.copy(ct.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=ym*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(v===null&&y===null))return d},this.setFoveation=function(j){d=j,v!==null&&(v.fixedFoveation=j),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=j)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(R)};let z=null;function $(j,ct){if(_=ct.getViewerPose(p||c),T=ct,_!==null){const St=_.views;y!==null&&(t.setRenderTargetFramebuffer(U,y.framebuffer),t.setRenderTarget(U));let Tt=!1;St.length!==R.cameras.length&&(R.cameras.length=0,Tt=!0);for(let Ht=0;Ht<St.length;Ht++){const ie=St[Ht];let Pe=null;if(y!==null)Pe=y.getViewport(ie);else{const je=g.getViewSubImage(v,ie);Pe=je.viewport,Ht===0&&(t.setRenderTargetTextures(U,je.colorTexture,v.ignoreDepthValues?void 0:je.depthStencilTexture),t.setRenderTarget(U))}let V=b[Ht];V===void 0&&(V=new Wi,V.layers.enable(Ht),V.viewport=new En,b[Ht]=V),V.matrix.fromArray(ie.transform.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale),V.projectionMatrix.fromArray(ie.projectionMatrix),V.projectionMatrixInverse.copy(V.projectionMatrix).invert(),V.viewport.set(Pe.x,Pe.y,Pe.width,Pe.height),Ht===0&&(R.matrix.copy(V.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),Tt===!0&&R.cameras.push(V)}const Gt=s.enabledFeatures;if(Gt&&Gt.includes("depth-sensing")){const Ht=g.getDepthInformation(St[0]);Ht&&Ht.isValid&&Ht.texture&&M.init(t,Ht,s.renderState)}}for(let St=0;St<A.length;St++){const Tt=L[St],Gt=A[St];Tt!==null&&Gt!==void 0&&Gt.update(Tt,ct,p||c)}z&&z(j,ct),ct.detectedPlanes&&a.dispatchEvent({type:"planesdetected",data:ct}),T=null}const mt=new eM;mt.setAnimationLoop($),this.setAnimationLoop=function(j){z=j},this.dispose=function(){}}}const es=new Ba,b3=new vn;function A3(o,t){function n(x,S){x.matrixAutoUpdate===!0&&x.updateMatrix(),S.value.copy(x.matrix)}function a(x,S){S.color.getRGB(x.fogColor.value,Qy(o)),S.isFog?(x.fogNear.value=S.near,x.fogFar.value=S.far):S.isFogExp2&&(x.fogDensity.value=S.density)}function s(x,S,U,A,L){S.isMeshBasicMaterial||S.isMeshLambertMaterial?u(x,S):S.isMeshToonMaterial?(u(x,S),g(x,S)):S.isMeshPhongMaterial?(u(x,S),_(x,S)):S.isMeshStandardMaterial?(u(x,S),v(x,S),S.isMeshPhysicalMaterial&&y(x,S,L)):S.isMeshMatcapMaterial?(u(x,S),T(x,S)):S.isMeshDepthMaterial?u(x,S):S.isMeshDistanceMaterial?(u(x,S),M(x,S)):S.isMeshNormalMaterial?u(x,S):S.isLineBasicMaterial?(c(x,S),S.isLineDashedMaterial&&f(x,S)):S.isPointsMaterial?d(x,S,U,A):S.isSpriteMaterial?p(x,S):S.isShadowMaterial?(x.color.value.copy(S.color),x.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function u(x,S){x.opacity.value=S.opacity,S.color&&x.diffuse.value.copy(S.color),S.emissive&&x.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(x.map.value=S.map,n(S.map,x.mapTransform)),S.alphaMap&&(x.alphaMap.value=S.alphaMap,n(S.alphaMap,x.alphaMapTransform)),S.bumpMap&&(x.bumpMap.value=S.bumpMap,n(S.bumpMap,x.bumpMapTransform),x.bumpScale.value=S.bumpScale,S.side===ni&&(x.bumpScale.value*=-1)),S.normalMap&&(x.normalMap.value=S.normalMap,n(S.normalMap,x.normalMapTransform),x.normalScale.value.copy(S.normalScale),S.side===ni&&x.normalScale.value.negate()),S.displacementMap&&(x.displacementMap.value=S.displacementMap,n(S.displacementMap,x.displacementMapTransform),x.displacementScale.value=S.displacementScale,x.displacementBias.value=S.displacementBias),S.emissiveMap&&(x.emissiveMap.value=S.emissiveMap,n(S.emissiveMap,x.emissiveMapTransform)),S.specularMap&&(x.specularMap.value=S.specularMap,n(S.specularMap,x.specularMapTransform)),S.alphaTest>0&&(x.alphaTest.value=S.alphaTest);const U=t.get(S),A=U.envMap,L=U.envMapRotation;A&&(x.envMap.value=A,es.copy(L),es.x*=-1,es.y*=-1,es.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(es.y*=-1,es.z*=-1),x.envMapRotation.value.setFromMatrix4(b3.makeRotationFromEuler(es)),x.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=S.reflectivity,x.ior.value=S.ior,x.refractionRatio.value=S.refractionRatio),S.lightMap&&(x.lightMap.value=S.lightMap,x.lightMapIntensity.value=S.lightMapIntensity,n(S.lightMap,x.lightMapTransform)),S.aoMap&&(x.aoMap.value=S.aoMap,x.aoMapIntensity.value=S.aoMapIntensity,n(S.aoMap,x.aoMapTransform))}function c(x,S){x.diffuse.value.copy(S.color),x.opacity.value=S.opacity,S.map&&(x.map.value=S.map,n(S.map,x.mapTransform))}function f(x,S){x.dashSize.value=S.dashSize,x.totalSize.value=S.dashSize+S.gapSize,x.scale.value=S.scale}function d(x,S,U,A){x.diffuse.value.copy(S.color),x.opacity.value=S.opacity,x.size.value=S.size*U,x.scale.value=A*.5,S.map&&(x.map.value=S.map,n(S.map,x.uvTransform)),S.alphaMap&&(x.alphaMap.value=S.alphaMap,n(S.alphaMap,x.alphaMapTransform)),S.alphaTest>0&&(x.alphaTest.value=S.alphaTest)}function p(x,S){x.diffuse.value.copy(S.color),x.opacity.value=S.opacity,x.rotation.value=S.rotation,S.map&&(x.map.value=S.map,n(S.map,x.mapTransform)),S.alphaMap&&(x.alphaMap.value=S.alphaMap,n(S.alphaMap,x.alphaMapTransform)),S.alphaTest>0&&(x.alphaTest.value=S.alphaTest)}function _(x,S){x.specular.value.copy(S.specular),x.shininess.value=Math.max(S.shininess,1e-4)}function g(x,S){S.gradientMap&&(x.gradientMap.value=S.gradientMap)}function v(x,S){x.metalness.value=S.metalness,S.metalnessMap&&(x.metalnessMap.value=S.metalnessMap,n(S.metalnessMap,x.metalnessMapTransform)),x.roughness.value=S.roughness,S.roughnessMap&&(x.roughnessMap.value=S.roughnessMap,n(S.roughnessMap,x.roughnessMapTransform)),S.envMap&&(x.envMapIntensity.value=S.envMapIntensity)}function y(x,S,U){x.ior.value=S.ior,S.sheen>0&&(x.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),x.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(x.sheenColorMap.value=S.sheenColorMap,n(S.sheenColorMap,x.sheenColorMapTransform)),S.sheenRoughnessMap&&(x.sheenRoughnessMap.value=S.sheenRoughnessMap,n(S.sheenRoughnessMap,x.sheenRoughnessMapTransform))),S.clearcoat>0&&(x.clearcoat.value=S.clearcoat,x.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(x.clearcoatMap.value=S.clearcoatMap,n(S.clearcoatMap,x.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,n(S.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(x.clearcoatNormalMap.value=S.clearcoatNormalMap,n(S.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===ni&&x.clearcoatNormalScale.value.negate())),S.dispersion>0&&(x.dispersion.value=S.dispersion),S.iridescence>0&&(x.iridescence.value=S.iridescence,x.iridescenceIOR.value=S.iridescenceIOR,x.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(x.iridescenceMap.value=S.iridescenceMap,n(S.iridescenceMap,x.iridescenceMapTransform)),S.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=S.iridescenceThicknessMap,n(S.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),S.transmission>0&&(x.transmission.value=S.transmission,x.transmissionSamplerMap.value=U.texture,x.transmissionSamplerSize.value.set(U.width,U.height),S.transmissionMap&&(x.transmissionMap.value=S.transmissionMap,n(S.transmissionMap,x.transmissionMapTransform)),x.thickness.value=S.thickness,S.thicknessMap&&(x.thicknessMap.value=S.thicknessMap,n(S.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=S.attenuationDistance,x.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(x.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(x.anisotropyMap.value=S.anisotropyMap,n(S.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=S.specularIntensity,x.specularColor.value.copy(S.specularColor),S.specularColorMap&&(x.specularColorMap.value=S.specularColorMap,n(S.specularColorMap,x.specularColorMapTransform)),S.specularIntensityMap&&(x.specularIntensityMap.value=S.specularIntensityMap,n(S.specularIntensityMap,x.specularIntensityMapTransform))}function T(x,S){S.matcap&&(x.matcap.value=S.matcap)}function M(x,S){const U=t.get(S).light;x.referencePosition.value.setFromMatrixPosition(U.matrixWorld),x.nearDistance.value=U.shadow.camera.near,x.farDistance.value=U.shadow.camera.far}return{refreshFogUniforms:a,refreshMaterialUniforms:s}}function R3(o,t,n,a){let s={},u={},c=[];const f=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function d(U,A){const L=A.program;a.uniformBlockBinding(U,L)}function p(U,A){let L=s[U.id];L===void 0&&(T(U),L=_(U),s[U.id]=L,U.addEventListener("dispose",x));const P=A.program;a.updateUBOMapping(U,P);const O=t.render.frame;u[U.id]!==O&&(v(U),u[U.id]=O)}function _(U){const A=g();U.__bindingPointIndex=A;const L=o.createBuffer(),P=U.__size,O=U.usage;return o.bindBuffer(o.UNIFORM_BUFFER,L),o.bufferData(o.UNIFORM_BUFFER,P,O),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,A,L),L}function g(){for(let U=0;U<f;U++)if(c.indexOf(U)===-1)return c.push(U),U;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(U){const A=s[U.id],L=U.uniforms,P=U.__cache;o.bindBuffer(o.UNIFORM_BUFFER,A);for(let O=0,w=L.length;O<w;O++){const B=Array.isArray(L[O])?L[O]:[L[O]];for(let b=0,R=B.length;b<R;b++){const F=B[b];if(y(F,O,b,P)===!0){const X=F.__offset,Y=Array.isArray(F.value)?F.value:[F.value];let nt=0;for(let at=0;at<Y.length;at++){const I=Y[at],k=M(I);typeof I=="number"||typeof I=="boolean"?(F.__data[0]=I,o.bufferSubData(o.UNIFORM_BUFFER,X+nt,F.__data)):I.isMatrix3?(F.__data[0]=I.elements[0],F.__data[1]=I.elements[1],F.__data[2]=I.elements[2],F.__data[3]=0,F.__data[4]=I.elements[3],F.__data[5]=I.elements[4],F.__data[6]=I.elements[5],F.__data[7]=0,F.__data[8]=I.elements[6],F.__data[9]=I.elements[7],F.__data[10]=I.elements[8],F.__data[11]=0):(I.toArray(F.__data,nt),nt+=k.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,X,F.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function y(U,A,L,P){const O=U.value,w=A+"_"+L;if(P[w]===void 0)return typeof O=="number"||typeof O=="boolean"?P[w]=O:P[w]=O.clone(),!0;{const B=P[w];if(typeof O=="number"||typeof O=="boolean"){if(B!==O)return P[w]=O,!0}else if(B.equals(O)===!1)return B.copy(O),!0}return!1}function T(U){const A=U.uniforms;let L=0;const P=16;for(let w=0,B=A.length;w<B;w++){const b=Array.isArray(A[w])?A[w]:[A[w]];for(let R=0,F=b.length;R<F;R++){const X=b[R],Y=Array.isArray(X.value)?X.value:[X.value];for(let nt=0,at=Y.length;nt<at;nt++){const I=Y[nt],k=M(I),q=L%P,ht=q%k.boundary,dt=q+ht;L+=ht,dt!==0&&P-dt<k.storage&&(L+=P-dt),X.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=L,L+=k.storage}}}const O=L%P;return O>0&&(L+=P-O),U.__size=L,U.__cache={},this}function M(U){const A={boundary:0,storage:0};return typeof U=="number"||typeof U=="boolean"?(A.boundary=4,A.storage=4):U.isVector2?(A.boundary=8,A.storage=8):U.isVector3||U.isColor?(A.boundary=16,A.storage=12):U.isVector4?(A.boundary=16,A.storage=16):U.isMatrix3?(A.boundary=48,A.storage=48):U.isMatrix4?(A.boundary=64,A.storage=64):U.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",U),A}function x(U){const A=U.target;A.removeEventListener("dispose",x);const L=c.indexOf(A.__bindingPointIndex);c.splice(L,1),o.deleteBuffer(s[A.id]),delete s[A.id],delete u[A.id]}function S(){for(const U in s)o.deleteBuffer(s[U]);c=[],s={},u={}}return{bind:d,update:p,dispose:S}}class C3{constructor(t={}){const{canvas:n=gA(),context:a=null,depth:s=!0,stencil:u=!1,alpha:c=!1,antialias:f=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:p=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:g=!1}=t;this.isWebGLRenderer=!0;let v;if(a!==null){if(typeof WebGLRenderingContext<"u"&&a instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=a.getContextAttributes().alpha}else v=c;const y=new Uint32Array(4),T=new Int32Array(4);let M=null,x=null;const S=[],U=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Xi,this.toneMapping=br,this.toneMappingExposure=1;const A=this;let L=!1,P=0,O=0,w=null,B=-1,b=null;const R=new En,F=new En;let X=null;const Y=new Oe(0);let nt=0,at=n.width,I=n.height,k=1,q=null,ht=null;const dt=new En(0,0,at,I),z=new En(0,0,at,I);let $=!1;const mt=new tM;let j=!1,ct=!1;const St=new vn,Tt=new ot,Gt=new En,Ht={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ie=!1;function Pe(){return w===null?k:1}let V=a;function je(N,K){return n.getContext(N,K)}try{const N={alpha:!0,depth:s,stencil:u,antialias:f,premultipliedAlpha:d,preserveDrawingBuffer:p,powerPreference:_,failIfMajorPerformanceCaveat:g};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${qm}`),n.addEventListener("webglcontextlost",_t,!1),n.addEventListener("webglcontextrestored",vt,!1),n.addEventListener("webglcontextcreationerror",Ct,!1),V===null){const K="webgl2";if(V=je(K,N),V===null)throw je(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(N){throw console.error("THREE.WebGLRenderer: "+N.message),N}let fe,Ee,Vt,Qe,te,ee,H,D,lt,Et,xt,yt,Yt,Ut,Nt,ae,At,Ot,pe,Qt,wt,Zt,Kt,He;function Z(){fe=new O2(V),fe.init(),Zt=new v3(V,fe),Ee=new C2(V,fe,t,Zt),Vt=new m3(V),Qe=new I2(V),te=new e3,ee=new g3(V,fe,Vt,te,Ee,Zt,Qe),H=new D2(A),D=new N2(A),lt=new XA(V),Kt=new A2(V,lt),Et=new P2(V,lt,Qe,Kt),xt=new F2(V,Et,lt,Qe),pe=new B2(V,Ee,ee),ae=new w2(te),yt=new t3(A,H,D,fe,Ee,Kt,ae),Yt=new A3(A,te),Ut=new i3,Nt=new u3(fe),Ot=new b2(A,H,D,Vt,xt,v,d),At=new p3(A,xt,Ee),He=new R3(V,Qe,Ee,Vt),Qt=new R2(V,fe,Qe),wt=new z2(V,fe,Qe),Qe.programs=yt.programs,A.capabilities=Ee,A.extensions=fe,A.properties=te,A.renderLists=Ut,A.shadowMap=At,A.state=Vt,A.info=Qe}Z();const Rt=new T3(A,V);this.xr=Rt,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const N=fe.get("WEBGL_lose_context");N&&N.loseContext()},this.forceContextRestore=function(){const N=fe.get("WEBGL_lose_context");N&&N.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(N){N!==void 0&&(k=N,this.setSize(at,I,!1))},this.getSize=function(N){return N.set(at,I)},this.setSize=function(N,K,rt=!0){if(Rt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}at=N,I=K,n.width=Math.floor(N*k),n.height=Math.floor(K*k),rt===!0&&(n.style.width=N+"px",n.style.height=K+"px"),this.setViewport(0,0,N,K)},this.getDrawingBufferSize=function(N){return N.set(at*k,I*k).floor()},this.setDrawingBufferSize=function(N,K,rt){at=N,I=K,k=rt,n.width=Math.floor(N*rt),n.height=Math.floor(K*rt),this.setViewport(0,0,N,K)},this.getCurrentViewport=function(N){return N.copy(R)},this.getViewport=function(N){return N.copy(dt)},this.setViewport=function(N,K,rt,st){N.isVector4?dt.set(N.x,N.y,N.z,N.w):dt.set(N,K,rt,st),Vt.viewport(R.copy(dt).multiplyScalar(k).round())},this.getScissor=function(N){return N.copy(z)},this.setScissor=function(N,K,rt,st){N.isVector4?z.set(N.x,N.y,N.z,N.w):z.set(N,K,rt,st),Vt.scissor(F.copy(z).multiplyScalar(k).round())},this.getScissorTest=function(){return $},this.setScissorTest=function(N){Vt.setScissorTest($=N)},this.setOpaqueSort=function(N){q=N},this.setTransparentSort=function(N){ht=N},this.getClearColor=function(N){return N.copy(Ot.getClearColor())},this.setClearColor=function(){Ot.setClearColor.apply(Ot,arguments)},this.getClearAlpha=function(){return Ot.getClearAlpha()},this.setClearAlpha=function(){Ot.setClearAlpha.apply(Ot,arguments)},this.clear=function(N=!0,K=!0,rt=!0){let st=0;if(N){let J=!1;if(w!==null){const bt=w.texture.format;J=bt===Jm||bt===Qm||bt===Km}if(J){const bt=w.texture.type,Dt=bt===Ia||bt===_s||bt===lu||bt===Ho||bt===jm||bt===Zm,Pt=Ot.getClearColor(),zt=Ot.getClearAlpha(),It=Pt.r,$t=Pt.g,jt=Pt.b;Dt?(y[0]=It,y[1]=$t,y[2]=jt,y[3]=zt,V.clearBufferuiv(V.COLOR,0,y)):(T[0]=It,T[1]=$t,T[2]=jt,T[3]=zt,V.clearBufferiv(V.COLOR,0,T))}else st|=V.COLOR_BUFFER_BIT}K&&(st|=V.DEPTH_BUFFER_BIT),rt&&(st|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear(st)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",_t,!1),n.removeEventListener("webglcontextrestored",vt,!1),n.removeEventListener("webglcontextcreationerror",Ct,!1),Ut.dispose(),Nt.dispose(),te.dispose(),H.dispose(),D.dispose(),xt.dispose(),Kt.dispose(),He.dispose(),yt.dispose(),Rt.dispose(),Rt.removeEventListener("sessionstart",Dn),Rt.removeEventListener("sessionend",_u),ji.stop()};function _t(N){N.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function vt(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const N=Qe.autoReset,K=At.enabled,rt=At.autoUpdate,st=At.needsUpdate,J=At.type;Z(),Qe.autoReset=N,At.enabled=K,At.autoUpdate=rt,At.needsUpdate=st,At.type=J}function Ct(N){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",N.statusMessage)}function Wt(N){const K=N.target;K.removeEventListener("dispose",Wt),ue(K)}function ue(N){Fe(N),te.remove(N)}function Fe(N){const K=te.get(N).programs;K!==void 0&&(K.forEach(function(rt){yt.releaseProgram(rt)}),N.isShaderMaterial&&yt.releaseShaderCache(N))}this.renderBufferDirect=function(N,K,rt,st,J,bt){K===null&&(K=Ht);const Dt=J.isMesh&&J.matrixWorld.determinant()<0,Pt=Un(N,K,rt,st,J);Vt.setMaterial(st,Dt);let zt=rt.index,It=1;if(st.wireframe===!0){if(zt=Et.getWireframeAttribute(rt),zt===void 0)return;It=2}const $t=rt.drawRange,jt=rt.attributes.position;let ce=$t.start*It,Ce=($t.start+$t.count)*It;bt!==null&&(ce=Math.max(ce,bt.start*It),Ce=Math.min(Ce,(bt.start+bt.count)*It)),zt!==null?(ce=Math.max(ce,0),Ce=Math.min(Ce,zt.count)):jt!=null&&(ce=Math.max(ce,0),Ce=Math.min(Ce,jt.count));const Xe=Ce-ce;if(Xe<0||Xe===1/0)return;Kt.setup(J,st,Pt,rt,zt);let Ln,Me=Qt;if(zt!==null&&(Ln=lt.get(zt),Me=wt,Me.setIndex(Ln)),J.isMesh)st.wireframe===!0?(Vt.setLineWidth(st.wireframeLinewidth*Pe()),Me.setMode(V.LINES)):Me.setMode(V.TRIANGLES);else if(J.isLine){let kt=st.linewidth;kt===void 0&&(kt=1),Vt.setLineWidth(kt*Pe()),J.isLineSegments?Me.setMode(V.LINES):J.isLineLoop?Me.setMode(V.LINE_LOOP):Me.setMode(V.LINE_STRIP)}else J.isPoints?Me.setMode(V.POINTS):J.isSprite&&Me.setMode(V.TRIANGLES);if(J.isBatchedMesh)if(J._multiDrawInstances!==null)Me.renderMultiDrawInstances(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount,J._multiDrawInstances);else if(fe.get("WEBGL_multi_draw"))Me.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{const kt=J._multiDrawStarts,Je=J._multiDrawCounts,ge=J._multiDrawCount,nn=zt?lt.get(zt).bytesPerElement:1,_n=te.get(st).currentProgram.getUniforms();for(let Nn=0;Nn<ge;Nn++)_n.setValue(V,"_gl_DrawID",Nn),Me.render(kt[Nn]/nn,Je[Nn])}else if(J.isInstancedMesh)Me.renderInstances(ce,Xe,J.count);else if(rt.isInstancedBufferGeometry){const kt=rt._maxInstanceCount!==void 0?rt._maxInstanceCount:1/0,Je=Math.min(rt.instanceCount,kt);Me.renderInstances(ce,Xe,Je)}else Me.render(ce,Xe)};function mn(N,K,rt){N.transparent===!0&&N.side===La&&N.forceSinglePass===!1?(N.side=ni,N.needsUpdate=!0,Ur(N,K,rt),N.side=Cr,N.needsUpdate=!0,Ur(N,K,rt),N.side=La):Ur(N,K,rt)}this.compile=function(N,K,rt=null){rt===null&&(rt=N),x=Nt.get(rt),x.init(K),U.push(x),rt.traverseVisible(function(J){J.isLight&&J.layers.test(K.layers)&&(x.pushLight(J),J.castShadow&&x.pushShadow(J))}),N!==rt&&N.traverseVisible(function(J){J.isLight&&J.layers.test(K.layers)&&(x.pushLight(J),J.castShadow&&x.pushShadow(J))}),x.setupLights();const st=new Set;return N.traverse(function(J){const bt=J.material;if(bt)if(Array.isArray(bt))for(let Dt=0;Dt<bt.length;Dt++){const Pt=bt[Dt];mn(Pt,rt,J),st.add(Pt)}else mn(bt,rt,J),st.add(bt)}),U.pop(),x=null,st},this.compileAsync=function(N,K,rt=null){const st=this.compile(N,K,rt);return new Promise(J=>{function bt(){if(st.forEach(function(Dt){te.get(Dt).currentProgram.isReady()&&st.delete(Dt)}),st.size===0){J(N);return}setTimeout(bt,10)}fe.get("KHR_parallel_shader_compile")!==null?bt():setTimeout(bt,10)})};let ye=null;function ri(N){ye&&ye(N)}function Dn(){ji.stop()}function _u(){ji.start()}const ji=new eM;ji.setAnimationLoop(ri),typeof self<"u"&&ji.setContext(self),this.setAnimationLoop=function(N){ye=N,Rt.setAnimationLoop(N),N===null?ji.stop():ji.start()},Rt.addEventListener("sessionstart",Dn),Rt.addEventListener("sessionend",_u),this.render=function(N,K){if(K!==void 0&&K.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),Rt.enabled===!0&&Rt.isPresenting===!0&&(Rt.cameraAutoUpdate===!0&&Rt.updateCamera(K),K=Rt.getCamera()),N.isScene===!0&&N.onBeforeRender(A,N,K,w),x=Nt.get(N,U.length),x.init(K),U.push(x),St.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),mt.setFromProjectionMatrix(St),ct=this.localClippingEnabled,j=ae.init(this.clippingPlanes,ct),M=Ut.get(N,S.length),M.init(),S.push(M),Rt.enabled===!0&&Rt.isPresenting===!0){const bt=A.xr.getDepthSensingMesh();bt!==null&&ys(bt,K,-1/0,A.sortObjects)}ys(N,K,0,A.sortObjects),M.finish(),A.sortObjects===!0&&M.sort(q,ht),ie=Rt.enabled===!1||Rt.isPresenting===!1||Rt.hasDepthSensing()===!1,ie&&Ot.addToRenderList(M,N),this.info.render.frame++,j===!0&&ae.beginShadows();const rt=x.state.shadowsArray;At.render(rt,N,K),j===!0&&ae.endShadows(),this.info.autoReset===!0&&this.info.reset();const st=M.opaque,J=M.transmissive;if(x.setupLights(),K.isArrayCamera){const bt=K.cameras;if(J.length>0)for(let Dt=0,Pt=bt.length;Dt<Pt;Dt++){const zt=bt[Dt];Ms(st,J,N,zt)}ie&&Ot.render(N);for(let Dt=0,Pt=bt.length;Dt<Pt;Dt++){const zt=bt[Dt];Wo(M,N,zt,zt.viewport)}}else J.length>0&&Ms(st,J,N,K),ie&&Ot.render(N),Wo(M,N,K);w!==null&&(ee.updateMultisampleRenderTarget(w),ee.updateRenderTargetMipmap(w)),N.isScene===!0&&N.onAfterRender(A,N,K),Kt.resetDefaultState(),B=-1,b=null,U.pop(),U.length>0?(x=U[U.length-1],j===!0&&ae.setGlobalState(A.clippingPlanes,x.state.camera)):x=null,S.pop(),S.length>0?M=S[S.length-1]:M=null};function ys(N,K,rt,st){if(N.visible===!1)return;if(N.layers.test(K.layers)){if(N.isGroup)rt=N.renderOrder;else if(N.isLOD)N.autoUpdate===!0&&N.update(K);else if(N.isLight)x.pushLight(N),N.castShadow&&x.pushShadow(N);else if(N.isSprite){if(!N.frustumCulled||mt.intersectsSprite(N)){st&&Gt.setFromMatrixPosition(N.matrixWorld).applyMatrix4(St);const Dt=xt.update(N),Pt=N.material;Pt.visible&&M.push(N,Dt,Pt,rt,Gt.z,null)}}else if((N.isMesh||N.isLine||N.isPoints)&&(!N.frustumCulled||mt.intersectsObject(N))){const Dt=xt.update(N),Pt=N.material;if(st&&(N.boundingSphere!==void 0?(N.boundingSphere===null&&N.computeBoundingSphere(),Gt.copy(N.boundingSphere.center)):(Dt.boundingSphere===null&&Dt.computeBoundingSphere(),Gt.copy(Dt.boundingSphere.center)),Gt.applyMatrix4(N.matrixWorld).applyMatrix4(St)),Array.isArray(Pt)){const zt=Dt.groups;for(let It=0,$t=zt.length;It<$t;It++){const jt=zt[It],ce=Pt[jt.materialIndex];ce&&ce.visible&&M.push(N,Dt,ce,rt,Gt.z,jt)}}else Pt.visible&&M.push(N,Dt,Pt,rt,Gt.z,null)}}const bt=N.children;for(let Dt=0,Pt=bt.length;Dt<Pt;Dt++)ys(bt[Dt],K,rt,st)}function Wo(N,K,rt,st){const J=N.opaque,bt=N.transmissive,Dt=N.transparent;x.setupLightsView(rt),j===!0&&ae.setGlobalState(A.clippingPlanes,rt),st&&Vt.viewport(R.copy(st)),J.length>0&&Ha(J,K,rt),bt.length>0&&Ha(bt,K,rt),Dt.length>0&&Ha(Dt,K,rt),Vt.buffers.depth.setTest(!0),Vt.buffers.depth.setMask(!0),Vt.buffers.color.setMask(!0),Vt.setPolygonOffset(!1)}function Ms(N,K,rt,st){if((rt.isScene===!0?rt.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[st.id]===void 0&&(x.state.transmissionRenderTarget[st.id]=new gs(1,1,{generateMipmaps:!0,type:fe.has("EXT_color_buffer_half_float")||fe.has("EXT_color_buffer_float")?cu:Ia,minFilter:us,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Re.workingColorSpace}));const bt=x.state.transmissionRenderTarget[st.id],Dt=st.viewport||R;bt.setSize(Dt.z,Dt.w);const Pt=A.getRenderTarget();A.setRenderTarget(bt),A.getClearColor(Y),nt=A.getClearAlpha(),nt<1&&A.setClearColor(16777215,.5),A.clear(),ie&&Ot.render(rt);const zt=A.toneMapping;A.toneMapping=br;const It=st.viewport;if(st.viewport!==void 0&&(st.viewport=void 0),x.setupLightsView(st),j===!0&&ae.setGlobalState(A.clippingPlanes,st),Ha(N,rt,st),ee.updateMultisampleRenderTarget(bt),ee.updateRenderTargetMipmap(bt),fe.has("WEBGL_multisampled_render_to_texture")===!1){let $t=!1;for(let jt=0,ce=K.length;jt<ce;jt++){const Ce=K[jt],Xe=Ce.object,Ln=Ce.geometry,Me=Ce.material,kt=Ce.group;if(Me.side===La&&Xe.layers.test(st.layers)){const Je=Me.side;Me.side=ni,Me.needsUpdate=!0,qo(Xe,rt,st,Ln,Me,kt),Me.side=Je,Me.needsUpdate=!0,$t=!0}}$t===!0&&(ee.updateMultisampleRenderTarget(bt),ee.updateRenderTargetMipmap(bt))}A.setRenderTarget(Pt),A.setClearColor(Y,nt),It!==void 0&&(st.viewport=It),A.toneMapping=zt}function Ha(N,K,rt){const st=K.isScene===!0?K.overrideMaterial:null;for(let J=0,bt=N.length;J<bt;J++){const Dt=N[J],Pt=Dt.object,zt=Dt.geometry,It=st===null?Dt.material:st,$t=Dt.group;Pt.layers.test(rt.layers)&&qo(Pt,K,rt,zt,It,$t)}}function qo(N,K,rt,st,J,bt){N.onBeforeRender(A,K,rt,st,J,bt),N.modelViewMatrix.multiplyMatrices(rt.matrixWorldInverse,N.matrixWorld),N.normalMatrix.getNormalMatrix(N.modelViewMatrix),J.transparent===!0&&J.side===La&&J.forceSinglePass===!1?(J.side=ni,J.needsUpdate=!0,A.renderBufferDirect(rt,K,st,J,N,bt),J.side=Cr,J.needsUpdate=!0,A.renderBufferDirect(rt,K,st,J,N,bt),J.side=La):A.renderBufferDirect(rt,K,st,J,N,bt),N.onAfterRender(A,K,rt,st,J,bt)}function Ur(N,K,rt){K.isScene!==!0&&(K=Ht);const st=te.get(N),J=x.state.lights,bt=x.state.shadowsArray,Dt=J.state.version,Pt=yt.getParameters(N,J.state,bt,K,rt),zt=yt.getProgramCacheKey(Pt);let It=st.programs;st.environment=N.isMeshStandardMaterial?K.environment:null,st.fog=K.fog,st.envMap=(N.isMeshStandardMaterial?D:H).get(N.envMap||st.environment),st.envMapRotation=st.environment!==null&&N.envMap===null?K.environmentRotation:N.envMapRotation,It===void 0&&(N.addEventListener("dispose",Wt),It=new Map,st.programs=It);let $t=It.get(zt);if($t!==void 0){if(st.currentProgram===$t&&st.lightsStateVersion===Dt)return on(N,Pt),$t}else Pt.uniforms=yt.getUniforms(N),N.onBeforeCompile(Pt,A),$t=yt.acquireProgram(Pt,zt),It.set(zt,$t),st.uniforms=Pt.uniforms;const jt=st.uniforms;return(!N.isShaderMaterial&&!N.isRawShaderMaterial||N.clipping===!0)&&(jt.clippingPlanes=ae.uniform),on(N,Pt),st.needsLights=Yo(N),st.lightsStateVersion=Dt,st.needsLights&&(jt.ambientLightColor.value=J.state.ambient,jt.lightProbe.value=J.state.probe,jt.directionalLights.value=J.state.directional,jt.directionalLightShadows.value=J.state.directionalShadow,jt.spotLights.value=J.state.spot,jt.spotLightShadows.value=J.state.spotShadow,jt.rectAreaLights.value=J.state.rectArea,jt.ltc_1.value=J.state.rectAreaLTC1,jt.ltc_2.value=J.state.rectAreaLTC2,jt.pointLights.value=J.state.point,jt.pointLightShadows.value=J.state.pointShadow,jt.hemisphereLights.value=J.state.hemi,jt.directionalShadowMap.value=J.state.directionalShadowMap,jt.directionalShadowMatrix.value=J.state.directionalShadowMatrix,jt.spotShadowMap.value=J.state.spotShadowMap,jt.spotLightMatrix.value=J.state.spotLightMatrix,jt.spotLightMap.value=J.state.spotLightMap,jt.pointShadowMap.value=J.state.pointShadowMap,jt.pointShadowMatrix.value=J.state.pointShadowMatrix),st.currentProgram=$t,st.uniformsList=null,$t}function zi(N){if(N.uniformsList===null){const K=N.currentProgram.getUniforms();N.uniformsList=rf.seqWithValue(K.seq,N.uniforms)}return N.uniformsList}function on(N,K){const rt=te.get(N);rt.outputColorSpace=K.outputColorSpace,rt.batching=K.batching,rt.batchingColor=K.batchingColor,rt.instancing=K.instancing,rt.instancingColor=K.instancingColor,rt.instancingMorph=K.instancingMorph,rt.skinning=K.skinning,rt.morphTargets=K.morphTargets,rt.morphNormals=K.morphNormals,rt.morphColors=K.morphColors,rt.morphTargetsCount=K.morphTargetsCount,rt.numClippingPlanes=K.numClippingPlanes,rt.numIntersection=K.numClipIntersection,rt.vertexAlphas=K.vertexAlphas,rt.vertexTangents=K.vertexTangents,rt.toneMapping=K.toneMapping}function Un(N,K,rt,st,J){K.isScene!==!0&&(K=Ht),ee.resetTextureUnits();const bt=K.fog,Dt=st.isMeshStandardMaterial?K.environment:null,Pt=w===null?A.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:Dr,zt=(st.isMeshStandardMaterial?D:H).get(st.envMap||Dt),It=st.vertexColors===!0&&!!rt.attributes.color&&rt.attributes.color.itemSize===4,$t=!!rt.attributes.tangent&&(!!st.normalMap||st.anisotropy>0),jt=!!rt.morphAttributes.position,ce=!!rt.morphAttributes.normal,Ce=!!rt.morphAttributes.color;let Xe=br;st.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(Xe=A.toneMapping);const Ln=rt.morphAttributes.position||rt.morphAttributes.normal||rt.morphAttributes.color,Me=Ln!==void 0?Ln.length:0,kt=te.get(st),Je=x.state.lights;if(j===!0&&(ct===!0||N!==b)){const kn=N===b&&st.id===B;ae.setState(st,N,kn)}let ge=!1;st.version===kt.__version?(kt.needsLights&&kt.lightsStateVersion!==Je.state.version||kt.outputColorSpace!==Pt||J.isBatchedMesh&&kt.batching===!1||!J.isBatchedMesh&&kt.batching===!0||J.isBatchedMesh&&kt.batchingColor===!0&&J.colorTexture===null||J.isBatchedMesh&&kt.batchingColor===!1&&J.colorTexture!==null||J.isInstancedMesh&&kt.instancing===!1||!J.isInstancedMesh&&kt.instancing===!0||J.isSkinnedMesh&&kt.skinning===!1||!J.isSkinnedMesh&&kt.skinning===!0||J.isInstancedMesh&&kt.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&kt.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&kt.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&kt.instancingMorph===!1&&J.morphTexture!==null||kt.envMap!==zt||st.fog===!0&&kt.fog!==bt||kt.numClippingPlanes!==void 0&&(kt.numClippingPlanes!==ae.numPlanes||kt.numIntersection!==ae.numIntersection)||kt.vertexAlphas!==It||kt.vertexTangents!==$t||kt.morphTargets!==jt||kt.morphNormals!==ce||kt.morphColors!==Ce||kt.toneMapping!==Xe||kt.morphTargetsCount!==Me)&&(ge=!0):(ge=!0,kt.__version=st.version);let nn=kt.currentProgram;ge===!0&&(nn=Ur(st,K,J));let _n=!1,Nn=!1,jo=!1;const We=nn.getUniforms(),Ii=kt.uniforms;if(Vt.useProgram(nn.program)&&(_n=!0,Nn=!0,jo=!0),st.id!==B&&(B=st.id,Nn=!0),_n||b!==N){We.setValue(V,"projectionMatrix",N.projectionMatrix),We.setValue(V,"viewMatrix",N.matrixWorldInverse);const kn=We.map.cameraPosition;kn!==void 0&&kn.setValue(V,Tt.setFromMatrixPosition(N.matrixWorld)),Ee.logarithmicDepthBuffer&&We.setValue(V,"logDepthBufFC",2/(Math.log(N.far+1)/Math.LN2)),(st.isMeshPhongMaterial||st.isMeshToonMaterial||st.isMeshLambertMaterial||st.isMeshBasicMaterial||st.isMeshStandardMaterial||st.isShaderMaterial)&&We.setValue(V,"isOrthographic",N.isOrthographicCamera===!0),b!==N&&(b=N,Nn=!0,jo=!0)}if(J.isSkinnedMesh){We.setOptional(V,J,"bindMatrix"),We.setOptional(V,J,"bindMatrixInverse");const kn=J.skeleton;kn&&(kn.boneTexture===null&&kn.computeBoneTexture(),We.setValue(V,"boneTexture",kn.boneTexture,ee))}J.isBatchedMesh&&(We.setOptional(V,J,"batchingTexture"),We.setValue(V,"batchingTexture",J._matricesTexture,ee),We.setOptional(V,J,"batchingIdTexture"),We.setValue(V,"batchingIdTexture",J._indirectTexture,ee),We.setOptional(V,J,"batchingColorTexture"),J._colorsTexture!==null&&We.setValue(V,"batchingColorTexture",J._colorsTexture,ee));const Va=rt.morphAttributes;if((Va.position!==void 0||Va.normal!==void 0||Va.color!==void 0)&&pe.update(J,rt,nn),(Nn||kt.receiveShadow!==J.receiveShadow)&&(kt.receiveShadow=J.receiveShadow,We.setValue(V,"receiveShadow",J.receiveShadow)),st.isMeshGouraudMaterial&&st.envMap!==null&&(Ii.envMap.value=zt,Ii.flipEnvMap.value=zt.isCubeTexture&&zt.isRenderTargetTexture===!1?-1:1),st.isMeshStandardMaterial&&st.envMap===null&&K.environment!==null&&(Ii.envMapIntensity.value=K.environmentIntensity),Nn&&(We.setValue(V,"toneMappingExposure",A.toneMappingExposure),kt.needsLights&&Ga(Ii,jo),bt&&st.fog===!0&&Yt.refreshFogUniforms(Ii,bt),Yt.refreshMaterialUniforms(Ii,st,k,I,x.state.transmissionRenderTarget[N.id]),rf.upload(V,zi(kt),Ii,ee)),st.isShaderMaterial&&st.uniformsNeedUpdate===!0&&(rf.upload(V,zi(kt),Ii,ee),st.uniformsNeedUpdate=!1),st.isSpriteMaterial&&We.setValue(V,"center",J.center),We.setValue(V,"modelViewMatrix",J.modelViewMatrix),We.setValue(V,"normalMatrix",J.normalMatrix),We.setValue(V,"modelMatrix",J.matrixWorld),st.isShaderMaterial||st.isRawShaderMaterial){const kn=st.uniformsGroups;for(let On=0,Zo=kn.length;On<Zo;On++){const Ko=kn[On];He.update(Ko,nn),He.bind(Ko,nn)}}return nn}function Ga(N,K){N.ambientLightColor.needsUpdate=K,N.lightProbe.needsUpdate=K,N.directionalLights.needsUpdate=K,N.directionalLightShadows.needsUpdate=K,N.pointLights.needsUpdate=K,N.pointLightShadows.needsUpdate=K,N.spotLights.needsUpdate=K,N.spotLightShadows.needsUpdate=K,N.rectAreaLights.needsUpdate=K,N.hemisphereLights.needsUpdate=K}function Yo(N){return N.isMeshLambertMaterial||N.isMeshToonMaterial||N.isMeshPhongMaterial||N.isMeshStandardMaterial||N.isShadowMaterial||N.isShaderMaterial&&N.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(N,K,rt){te.get(N.texture).__webglTexture=K,te.get(N.depthTexture).__webglTexture=rt;const st=te.get(N);st.__hasExternalTextures=!0,st.__autoAllocateDepthBuffer=rt===void 0,st.__autoAllocateDepthBuffer||fe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),st.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(N,K){const rt=te.get(N);rt.__webglFramebuffer=K,rt.__useDefaultFramebuffer=K===void 0},this.setRenderTarget=function(N,K=0,rt=0){w=N,P=K,O=rt;let st=!0,J=null,bt=!1,Dt=!1;if(N){const zt=te.get(N);zt.__useDefaultFramebuffer!==void 0?(Vt.bindFramebuffer(V.FRAMEBUFFER,null),st=!1):zt.__webglFramebuffer===void 0?ee.setupRenderTarget(N):zt.__hasExternalTextures&&ee.rebindTextures(N,te.get(N.texture).__webglTexture,te.get(N.depthTexture).__webglTexture);const It=N.texture;(It.isData3DTexture||It.isDataArrayTexture||It.isCompressedArrayTexture)&&(Dt=!0);const $t=te.get(N).__webglFramebuffer;N.isWebGLCubeRenderTarget?(Array.isArray($t[K])?J=$t[K][rt]:J=$t[K],bt=!0):N.samples>0&&ee.useMultisampledRTT(N)===!1?J=te.get(N).__webglMultisampledFramebuffer:Array.isArray($t)?J=$t[rt]:J=$t,R.copy(N.viewport),F.copy(N.scissor),X=N.scissorTest}else R.copy(dt).multiplyScalar(k).floor(),F.copy(z).multiplyScalar(k).floor(),X=$;if(Vt.bindFramebuffer(V.FRAMEBUFFER,J)&&st&&Vt.drawBuffers(N,J),Vt.viewport(R),Vt.scissor(F),Vt.setScissorTest(X),bt){const zt=te.get(N.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+K,zt.__webglTexture,rt)}else if(Dt){const zt=te.get(N.texture),It=K||0;V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,zt.__webglTexture,rt||0,It)}B=-1},this.readRenderTargetPixels=function(N,K,rt,st,J,bt,Dt){if(!(N&&N.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pt=te.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&Dt!==void 0&&(Pt=Pt[Dt]),Pt){Vt.bindFramebuffer(V.FRAMEBUFFER,Pt);try{const zt=N.texture,It=zt.format,$t=zt.type;if(!Ee.textureFormatReadable(It)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ee.textureTypeReadable($t)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=N.width-st&&rt>=0&&rt<=N.height-J&&V.readPixels(K,rt,st,J,Zt.convert(It),Zt.convert($t),bt)}finally{const zt=w!==null?te.get(w).__webglFramebuffer:null;Vt.bindFramebuffer(V.FRAMEBUFFER,zt)}}},this.readRenderTargetPixelsAsync=async function(N,K,rt,st,J,bt,Dt){if(!(N&&N.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pt=te.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&Dt!==void 0&&(Pt=Pt[Dt]),Pt){Vt.bindFramebuffer(V.FRAMEBUFFER,Pt);try{const zt=N.texture,It=zt.format,$t=zt.type;if(!Ee.textureFormatReadable(It))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ee.textureTypeReadable($t))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(K>=0&&K<=N.width-st&&rt>=0&&rt<=N.height-J){const jt=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,jt),V.bufferData(V.PIXEL_PACK_BUFFER,bt.byteLength,V.STREAM_READ),V.readPixels(K,rt,st,J,Zt.convert(It),Zt.convert($t),0),V.flush();const ce=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);await vA(V,ce,4);try{V.bindBuffer(V.PIXEL_PACK_BUFFER,jt),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,bt)}finally{V.deleteBuffer(jt),V.deleteSync(ce)}return bt}}finally{const zt=w!==null?te.get(w).__webglFramebuffer:null;Vt.bindFramebuffer(V.FRAMEBUFFER,zt)}}},this.copyFramebufferToTexture=function(N,K=null,rt=0){N.isTexture!==!0&&(tu("WebGLRenderer: copyFramebufferToTexture function signature has changed."),K=arguments[0]||null,N=arguments[1]);const st=Math.pow(2,-rt),J=Math.floor(N.image.width*st),bt=Math.floor(N.image.height*st),Dt=K!==null?K.x:0,Pt=K!==null?K.y:0;ee.setTexture2D(N,0),V.copyTexSubImage2D(V.TEXTURE_2D,rt,0,0,Dt,Pt,J,bt),Vt.unbindTexture()},this.copyTextureToTexture=function(N,K,rt=null,st=null,J=0){N.isTexture!==!0&&(tu("WebGLRenderer: copyTextureToTexture function signature has changed."),st=arguments[0]||null,N=arguments[1],K=arguments[2],J=arguments[3]||0,rt=null);let bt,Dt,Pt,zt,It,$t;rt!==null?(bt=rt.max.x-rt.min.x,Dt=rt.max.y-rt.min.y,Pt=rt.min.x,zt=rt.min.y):(bt=N.image.width,Dt=N.image.height,Pt=0,zt=0),st!==null?(It=st.x,$t=st.y):(It=0,$t=0);const jt=Zt.convert(K.format),ce=Zt.convert(K.type);ee.setTexture2D(K,0),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,K.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,K.unpackAlignment);const Ce=V.getParameter(V.UNPACK_ROW_LENGTH),Xe=V.getParameter(V.UNPACK_IMAGE_HEIGHT),Ln=V.getParameter(V.UNPACK_SKIP_PIXELS),Me=V.getParameter(V.UNPACK_SKIP_ROWS),kt=V.getParameter(V.UNPACK_SKIP_IMAGES),Je=N.isCompressedTexture?N.mipmaps[J]:N.image;V.pixelStorei(V.UNPACK_ROW_LENGTH,Je.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Je.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Pt),V.pixelStorei(V.UNPACK_SKIP_ROWS,zt),N.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,J,It,$t,bt,Dt,jt,ce,Je.data):N.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,J,It,$t,Je.width,Je.height,jt,Je.data):V.texSubImage2D(V.TEXTURE_2D,J,It,$t,bt,Dt,jt,ce,Je),V.pixelStorei(V.UNPACK_ROW_LENGTH,Ce),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Xe),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Ln),V.pixelStorei(V.UNPACK_SKIP_ROWS,Me),V.pixelStorei(V.UNPACK_SKIP_IMAGES,kt),J===0&&K.generateMipmaps&&V.generateMipmap(V.TEXTURE_2D),Vt.unbindTexture()},this.copyTextureToTexture3D=function(N,K,rt=null,st=null,J=0){N.isTexture!==!0&&(tu("WebGLRenderer: copyTextureToTexture3D function signature has changed."),rt=arguments[0]||null,st=arguments[1]||null,N=arguments[2],K=arguments[3],J=arguments[4]||0);let bt,Dt,Pt,zt,It,$t,jt,ce,Ce;const Xe=N.isCompressedTexture?N.mipmaps[J]:N.image;rt!==null?(bt=rt.max.x-rt.min.x,Dt=rt.max.y-rt.min.y,Pt=rt.max.z-rt.min.z,zt=rt.min.x,It=rt.min.y,$t=rt.min.z):(bt=Xe.width,Dt=Xe.height,Pt=Xe.depth,zt=0,It=0,$t=0),st!==null?(jt=st.x,ce=st.y,Ce=st.z):(jt=0,ce=0,Ce=0);const Ln=Zt.convert(K.format),Me=Zt.convert(K.type);let kt;if(K.isData3DTexture)ee.setTexture3D(K,0),kt=V.TEXTURE_3D;else if(K.isDataArrayTexture||K.isCompressedArrayTexture)ee.setTexture2DArray(K,0),kt=V.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,K.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,K.unpackAlignment);const Je=V.getParameter(V.UNPACK_ROW_LENGTH),ge=V.getParameter(V.UNPACK_IMAGE_HEIGHT),nn=V.getParameter(V.UNPACK_SKIP_PIXELS),_n=V.getParameter(V.UNPACK_SKIP_ROWS),Nn=V.getParameter(V.UNPACK_SKIP_IMAGES);V.pixelStorei(V.UNPACK_ROW_LENGTH,Xe.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Xe.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,zt),V.pixelStorei(V.UNPACK_SKIP_ROWS,It),V.pixelStorei(V.UNPACK_SKIP_IMAGES,$t),N.isDataTexture||N.isData3DTexture?V.texSubImage3D(kt,J,jt,ce,Ce,bt,Dt,Pt,Ln,Me,Xe.data):K.isCompressedArrayTexture?V.compressedTexSubImage3D(kt,J,jt,ce,Ce,bt,Dt,Pt,Ln,Xe.data):V.texSubImage3D(kt,J,jt,ce,Ce,bt,Dt,Pt,Ln,Me,Xe),V.pixelStorei(V.UNPACK_ROW_LENGTH,Je),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,ge),V.pixelStorei(V.UNPACK_SKIP_PIXELS,nn),V.pixelStorei(V.UNPACK_SKIP_ROWS,_n),V.pixelStorei(V.UNPACK_SKIP_IMAGES,Nn),J===0&&K.generateMipmaps&&V.generateMipmap(kt),Vt.unbindTexture()},this.initRenderTarget=function(N){te.get(N).__webglFramebuffer===void 0&&ee.setupRenderTarget(N)},this.initTexture=function(N){N.isCubeTexture?ee.setTextureCube(N,0):N.isData3DTexture?ee.setTexture3D(N,0):N.isDataArrayTexture||N.isCompressedArrayTexture?ee.setTexture2DArray(N,0):ee.setTexture2D(N,0),Vt.unbindTexture()},this.resetState=function(){P=0,O=0,w=null,Vt.reset(),Kt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Oa}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const n=this.getContext();n.drawingBufferColorSpace=t===$m?"display-p3":"srgb",n.unpackColorSpace=Re.workingColorSpace===Af?"display-p3":"srgb"}}class w3 extends xi{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ba,this.environmentIntensity=1,this.environmentRotation=new Ba,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class D3{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=_S(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=_S();t=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=t}return t}}function _S(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:qm}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=qm);const sf=8,U3=`
#define MAX_COLORS ${sf}
uniform vec2 uCanvas;
uniform float uTime;
uniform float uSpeed;
uniform vec2 uRot;
uniform int uColorCount;
uniform vec3 uColors[MAX_COLORS];
uniform int uTransparent;
uniform float uScale;
uniform float uFrequency;
uniform float uWarpStrength;
uniform vec2 uPointer; // in NDC [-1,1]
uniform float uMouseInfluence;
uniform float uParallax;
uniform float uNoise;
varying vec2 vUv;

void main() {
  float t = uTime * uSpeed;
  vec2 p = vUv * 2.0 - 1.0;
  p += uPointer * uParallax * 0.1;
  vec2 rp = vec2(p.x * uRot.x - p.y * uRot.y, p.x * uRot.y + p.y * uRot.x);
  vec2 q = vec2(rp.x * (uCanvas.x / uCanvas.y), rp.y);
  q /= max(uScale, 0.0001);
  q /= 0.5 + 0.2 * dot(q, q);
  q += 0.2 * cos(t) - 7.56;
  vec2 toward = (uPointer - rp);
  q += toward * uMouseInfluence * 0.2;

    vec3 col = vec3(0.0);
    float a = 1.0;

    if (uColorCount > 0) {
      vec2 s = q;
      vec3 sumCol = vec3(0.0);
      float cover = 0.0;
      for (int i = 0; i < MAX_COLORS; ++i) {
            if (i >= uColorCount) break;
            s -= 0.01;
            vec2 r = sin(1.5 * (s.yx * uFrequency) + 2.0 * cos(s * uFrequency));
            float m0 = length(r + sin(5.0 * r.y * uFrequency - 3.0 * t + float(i)) / 4.0);
            float kBelow = clamp(uWarpStrength, 0.0, 1.0);
            float kMix = pow(kBelow, 0.3); // strong response across 0..1
            float gain = 1.0 + max(uWarpStrength - 1.0, 0.0); // allow >1 to amplify displacement
            vec2 disp = (r - s) * kBelow;
            vec2 warped = s + disp * gain;
            float m1 = length(warped + sin(5.0 * warped.y * uFrequency - 3.0 * t + float(i)) / 4.0);
            float m = mix(m0, m1, kMix);
            float w = 1.0 - exp(-6.0 / exp(6.0 * m));
            sumCol += uColors[i] * w;
            cover = max(cover, w);
      }
      col = clamp(sumCol, 0.0, 1.0);
      a = uTransparent > 0 ? cover : 1.0;
    } else {
        vec2 s = q;
        for (int k = 0; k < 3; ++k) {
            s -= 0.01;
            vec2 r = sin(1.5 * (s.yx * uFrequency) + 2.0 * cos(s * uFrequency));
            float m0 = length(r + sin(5.0 * r.y * uFrequency - 3.0 * t + float(k)) / 4.0);
            float kBelow = clamp(uWarpStrength, 0.0, 1.0);
            float kMix = pow(kBelow, 0.3);
            float gain = 1.0 + max(uWarpStrength - 1.0, 0.0);
            vec2 disp = (r - s) * kBelow;
            vec2 warped = s + disp * gain;
            float m1 = length(warped + sin(5.0 * warped.y * uFrequency - 3.0 * t + float(k)) / 4.0);
            float m = mix(m0, m1, kMix);
            col[k] = 1.0 - exp(-6.0 / exp(6.0 * m));
        }
        a = uTransparent > 0 ? max(max(col.r, col.g), col.b) : 1.0;
    }

    if (uNoise > 0.0001) {
      float n = fract(sin(dot(gl_FragCoord.xy + vec2(uTime), vec2(12.9898, 78.233))) * 43758.5453123);
      col += (n - 0.5) * uNoise;
      col = clamp(col, 0.0, 1.0);
    }

    vec3 rgb = (uTransparent > 0) ? col * a : col;
    gl_FragColor = vec4(rgb, a);
}
`,L3=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 1.0);
}
`;function N3({className:o,style:t,rotation:n=45,speed:a=.2,colors:s=[],transparent:u=!0,autoRotate:c=0,scale:f=1,frequency:d=1,warpStrength:p=1,mouseInfluence:_=1,parallax:g=.5,noise:v=.1}){const y=Xt.useRef(null),T=Xt.useRef(null),M=Xt.useRef(null),x=Xt.useRef(null),S=Xt.useRef(null),U=Xt.useRef(n),A=Xt.useRef(c),L=Xt.useRef(new xe(0,0)),P=Xt.useRef(new xe(0,0)),O=Xt.useRef(8);return Xt.useEffect(()=>{const w=y.current,B=new w3,b=new nM(-1,1,1,-1,0,1),R=new mu(2,2),F=Array.from({length:sf},()=>new ot(0,0,0)),X=new Fa({vertexShader:L3,fragmentShader:U3,uniforms:{uCanvas:{value:new xe(1,1)},uTime:{value:0},uSpeed:{value:a},uRot:{value:new xe(1,0)},uColorCount:{value:0},uColors:{value:F},uTransparent:{value:u?1:0},uScale:{value:f},uFrequency:{value:d},uWarpStrength:{value:p},uPointer:{value:new xe(0,0)},uMouseInfluence:{value:_},uParallax:{value:g},uNoise:{value:v}},premultipliedAlpha:!0,transparent:!0});x.current=X;const Y=new aa(R,X);B.add(Y);const nt=new C3({antialias:!1,powerPreference:"high-performance",alpha:!0});T.current=nt,nt.outputColorSpace=Xi,nt.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),nt.setClearColor(0,u?0:1),nt.domElement.style.width="100%",nt.domElement.style.height="100%",nt.domElement.style.display="block",w.appendChild(nt.domElement);const at=new D3,I=()=>{const q=w.clientWidth||1,ht=w.clientHeight||1;nt.setSize(q,ht,!1),X.uniforms.uCanvas.value.set(q,ht)};if(I(),"ResizeObserver"in window){const q=new ResizeObserver(I);q.observe(w),S.current=q}else window.addEventListener("resize",I);const k=()=>{const q=at.getDelta(),ht=at.elapsedTime;X.uniforms.uTime.value=ht;const z=(U.current%360+A.current*ht)*Math.PI/180,$=Math.cos(z),mt=Math.sin(z);X.uniforms.uRot.value.set($,mt);const j=P.current,ct=L.current,St=Math.min(1,q*O.current);j.lerp(ct,St),X.uniforms.uPointer.value.copy(j),nt.render(B,b),M.current=requestAnimationFrame(k)};return M.current=requestAnimationFrame(k),()=>{M.current!==null&&cancelAnimationFrame(M.current),S.current?S.current.disconnect():window.removeEventListener("resize",I),R.dispose(),X.dispose(),nt.dispose(),nt.domElement&&nt.domElement.parentElement===w&&w.removeChild(nt.domElement)}},[]),Xt.useEffect(()=>{const w=x.current,B=T.current;if(!w)return;U.current=n,A.current=c,w.uniforms.uSpeed.value=a,w.uniforms.uScale.value=f,w.uniforms.uFrequency.value=d,w.uniforms.uWarpStrength.value=p,w.uniforms.uMouseInfluence.value=_,w.uniforms.uParallax.value=g,w.uniforms.uNoise.value=v;const b=F=>{const X=F.replace("#","").trim(),Y=X.length===3?[parseInt(X[0]+X[0],16),parseInt(X[1]+X[1],16),parseInt(X[2]+X[2],16)]:[parseInt(X.slice(0,2),16),parseInt(X.slice(2,4),16),parseInt(X.slice(4,6),16)];return new ot(Y[0]/255,Y[1]/255,Y[2]/255)},R=(s||[]).filter(Boolean).slice(0,sf).map(b);for(let F=0;F<sf;F++){const X=w.uniforms.uColors.value[F];F<R.length?X.copy(R[F]):X.set(0,0,0)}w.uniforms.uColorCount.value=R.length,w.uniforms.uTransparent.value=u?1:0,B&&B.setClearColor(0,u?0:1)},[n,c,a,f,d,p,_,g,v,s,u]),Xt.useEffect(()=>{const w=x.current,B=y.current;if(!w||!B)return;const b=R=>{const F=B.getBoundingClientRect(),X=(R.clientX-F.left)/(F.width||1)*2-1,Y=-((R.clientY-F.top)/(F.height||1)*2-1);L.current.set(X,Y)};return B.addEventListener("pointermove",b),()=>{B.removeEventListener("pointermove",b)}},[]),Mt.jsx("div",{ref:y,className:`w-full h-full relative overflow-hidden ${o}`,style:t})}const gS=12;function O3(){const o=Xt.useRef(null),[t,n]=Xt.useState({rotateX:0,rotateY:0}),{currentIndex:a}=yf(),s=a===0;return Xt.useEffect(()=>{s||n({rotateX:0,rotateY:0})},[s]),Xt.useEffect(()=>{const u=f=>{if(!s)return;const d=o.current;if(!d)return;const p=d.getBoundingClientRect(),_=p.left+p.width/2,g=p.top+p.height/2,v=(f.clientX-_)/p.width,y=(f.clientY-g)/p.height;n({rotateY:v*gS,rotateX:-y*gS})},c=f=>{(!f.relatedTarget||!f.relatedTarget.ownerDocument)&&n({rotateX:0,rotateY:0})};return document.addEventListener("mousemove",u),document.addEventListener("mouseout",c),()=>{document.removeEventListener("mousemove",u),document.removeEventListener("mouseout",c)}},[s]),Mt.jsxs("section",{id:"home",className:"scroll-snap-section relative flex flex-col items-center justify-center pt-20 px-4",style:{perspective:"100px"},children:[Mt.jsx("div",{className:"absolute inset-0 overflow-hidden","aria-hidden":!0,children:Mt.jsx(N3,{colors:["#ff5c7a","#8a5cff","#00ffd1"],rotation:0,speed:.2,scale:1,frequency:1,warpStrength:1,mouseInfluence:1,parallax:.5,noise:.1,transparent:!0,autoRotate:0,className:"absolute inset-0"})}),Mt.jsxs("div",{className:"relative z-10 flex flex-col items-center",children:[Mt.jsxs("div",{ref:o,className:"relative border border-foreground/80 rounded-sm w-full max-w-[24rem] aspect-[3/4] flex flex-col justify-between px-6 py-6 transition-transform duration-150 ease-out bg-black/10 backdrop-blur-[100px]",style:{transformStyle:"preserve-3d",transform:`rotateX(${t.rotateX}deg) rotateY(${t.rotateY}deg)`},children:[Mt.jsxs("div",{children:[Mt.jsxs("h1",{className:"text-2xl md:text-4xl font-medium text-foreground tracking-tight mb-2",children:["Muhammad",Mt.jsx("br",{}),"Salmon"]}),Mt.jsx("p",{className:"text-sm text-foreground mb-4",children:"Design & Code + AI"}),Mt.jsx("p",{className:"text-xs text-foreground leading-relaxed",children:"Based in Yogyakarta, Indonesia. Creative Director at SlabPixel. Building products and crafting digital experiences."})]}),Mt.jsxs("div",{className:"flex items-center gap-6",style:{transform:"translateZ(0)"},children:[Mt.jsx("a",{href:"https://github.com/muhsalmon",target:"_blank",rel:"noopener noreferrer",className:"text-foreground hover:text-foreground transition-colors","aria-label":"GitHub",children:Mt.jsx(jT,{className:"h-3.5 w-3.5"})}),Mt.jsx("a",{href:"https://linkedin.com/in/muhsalmon",target:"_blank",rel:"noopener noreferrer",className:"text-foreground hover:text-foreground transition-colors","aria-label":"LinkedIn",children:Mt.jsx(KT,{className:"h-3.5 w-3.5"})}),Mt.jsx("a",{href:"mailto:muhsalmon98@gmail.com",className:"text-foreground hover:text-foreground transition-colors","aria-label":"Email",children:Mt.jsx(AS,{className:"h-3.5 w-3.5"})})]})]}),Mt.jsxs("a",{href:"#about",onClick:u=>{u.preventDefault();const c=document.getElementById("about"),f=document.querySelector(".scroll-snap-container");c&&f&&f.scrollTo({top:c.offsetTop,behavior:"smooth"})},className:"mt-16 inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors font-display","aria-label":"Scroll to about",children:[Mt.jsx(WT,{className:"h-3 w-3"}),"Scroll"]})]})]})}const P3=[{name:"SuperApp",description:"All-in-one workspace for design systems and component libraries. Sync Figma to code, keep docs in one place.",url:"#",tag:"Figma · Design systems"},{name:"Flowbitz",description:"Lightweight flow and automation for design teams. Connect tools without the bloat.",url:"#",tag:"Automation · Plugins"},{name:"AutoLayers",description:"Figma plugin to auto-organize layers, naming conventions, and structure. Less hand work, more consistency.",url:"#",tag:"Figma plugin"},{name:"Font Scanner",description:"Scan and audit font usage across projects. Find duplicates, weights, and licensing at a glance.",url:"#",tag:"Typography · Tool"}];function z3(){return Mt.jsx("section",{id:"products",className:"section scroll-snap-section flex items-center",children:Mt.jsxs("div",{className:"site-wrap",children:[Mt.jsx("p",{className:"label mb-8",children:"Products & plugins"}),Mt.jsx("ul",{className:"space-y-0",children:P3.map(o=>Mt.jsx("li",{className:"py-5 first:pt-0",children:Mt.jsxs("a",{href:o.url,className:"group block",children:[Mt.jsxs("h3",{className:"text-sm font-medium text-foreground group-hover:text-muted-foreground transition-colors inline-flex items-center gap-1.5",children:[o.name,Mt.jsx(bS,{className:"h-3 w-3 shrink-0 opacity-60"})]}),Mt.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:o.tag}),Mt.jsx("p",{className:"text-xs text-muted-foreground mt-2 leading-relaxed",children:o.description})]})},o.name))})]})})}const lM=4e3,I3=1e3,B3=lM+I3,vS=4,F3=[{name:"SlabPixel",description:"Efficient, high-performing team for visual branding, UI/UX, motion, and web development.",url:"https://slabpixel.com",location:"Yogyakarta, ID",period:"Jan 2021 — Present",tags:["Visual Branding","UI/UX","Web Dev"]},{name:"Sibambo Studio",description:"Indonesia's leading residential architecture consultant; UI, motion, web.",url:"https://sibambostudio.com",location:"Jakarta, ID",period:"Jan 2023 — Oct 2023",tags:["UI/UX","Motion","Web Dev"]},{name:"VisualTap",description:"Design asset library for branding, design, and advertisement.",url:"https://visualtap.design",location:"Yogyakarta, ID",period:"Jan — Oct 2023",tags:["Branding","UI/UX","Web Dev"]},{name:"Infinite Disruption",description:"Coaching and consulting — know-how + capital. Multiple program sites.",url:"https://id.vc",location:"Hamburg, DE",period:"Aug 2021 — Present",tags:["Visual Branding","UI/UX","Illustration","Web Dev"]}],xS=[{name:"Delin Ventures",url:"https://delinventures.com"},{name:"Iconhub",url:"https://iconhub.com"},{name:"Tesorio",url:"https://tesorio.com"},{name:"RareCarat",url:"https://rarecarat.com"},{name:"Renumics",url:"https://renumics.com"},{name:"Bizplay",url:"https://bizplay.com"},{name:"Transformer Movement",url:"https://transformermovement.com"},{name:"SuperScale",url:"https://superscale.com"},{name:"evenhub",url:"https://evenhub.com"},{name:"TheGoodStore",url:"https://thegoodstore.com"},{name:"Coup Movement",url:"https://coupmovement.com"},{name:"Fundraising Coup",url:"https://fundraisingcoup.com"},{name:"LouiseDirik",url:"https://louisedirik.com"},{name:"TalentMagnet",url:"https://talentmagnet.com"},{name:"TheMostDisruptive",url:"https://themostdisruptive.com"},{name:"SuperStart",url:"https://superstart.com"}];function H3(){const o=Xt.useRef(null),{scrollContainer:t}=yf(),[n,a]=Xt.useState(0);return Xt.useEffect(()=>{const s=t,u=o.current;if(!s||!u)return;const c=()=>{const f=s.scrollTop,d=u.offsetTop,p=Math.max(0,Math.min(1,(f-d)/lM)),_=Math.min(vS-1,Math.floor(p*vS));a(_)};return c(),s.addEventListener("scroll",c,{passive:!0}),()=>s.removeEventListener("scroll",c)},[t]),Mt.jsx("section",{ref:o,id:"work",className:"section scroll-snap-section work-section",style:{height:B3},children:Mt.jsxs("div",{className:"sticky top-0 site-wrap py-16 min-h-screen flex flex-col justify-between",children:[Mt.jsxs("div",{children:[Mt.jsx("p",{className:"label mb-6",children:"Selected work"}),Mt.jsx("div",{className:"space-y-6",children:F3.map((s,u)=>Mt.jsxs("div",{children:[Mt.jsx("div",{className:"flex flex-col gap-4",children:Mt.jsxs("a",{href:s.url,target:"_blank",rel:"noopener noreferrer",className:"text-2xl font-medium text-foreground hover:text-muted-foreground transition-colors inline-flex items-center gap-2 w-fit font-display","data-font":"display",children:[s.name,Mt.jsx(bS,{className:"h-4 w-4 opacity-60"})]})}),u===n&&Mt.jsxs("div",{className:"pt-2 pb-4 space-y-2",children:[Mt.jsx("p",{className:"text-sm text-muted-foreground",children:s.description}),Mt.jsxs("p",{className:"text-xs text-muted-foreground",children:[s.location," · ",s.period]}),Mt.jsx("p",{className:"text-xs text-muted-foreground",children:s.tags.join(" · ")})]})]},s.name))})]}),Mt.jsxs("div",{className:"shrink-0",children:[Mt.jsx("p",{className:"label mb-4",children:"Recent clients"}),Mt.jsx("p",{className:"text-xs text-muted-foreground mb-4",children:"2018 — 2026"}),Mt.jsxs("p",{className:"text-sm text-foreground",children:[xS.map((s,u)=>Mt.jsxs("span",{children:[Mt.jsx("a",{href:s.url,target:"_blank",rel:"noopener noreferrer",className:"text-foreground hover:text-muted-foreground underline underline-offset-2 transition-colors",children:s.name}),u<xS.length-1?" / ":" "]},s.name)),Mt.jsx("span",{className:"text-muted-foreground",children:"and many more."})]})]})]})})}function G3(){const{setScrollContainer:o,scrollContainerRef:t}=yf();return Mt.jsxs("div",{className:"h-screen overflow-hidden bg-background text-foreground relative",children:[Mt.jsx("div",{className:"vertical-grid","aria-hidden":!0}),Mt.jsx(Sb,{}),Mt.jsxs("main",{ref:n=>{t.current=n,o(n)},className:"scroll-snap-container",children:[Mt.jsx(O3,{}),Mt.jsx(BT,{}),Mt.jsx(H3,{}),Mt.jsx(z3,{}),Mt.jsx(n1,{})]})]})}function V3(){return Mt.jsx(IT,{attribute:"class",defaultTheme:"dark",enableSystem:!0,disableTransitionOnChange:!0,themes:["light","dark"],storageKey:"muhsalmon-theme",children:Mt.jsx(AT,{children:Mt.jsx(G3,{})})})}bT.createRoot(document.getElementById("root")).render(Mt.jsx(gT.StrictMode,{children:Mt.jsx(V3,{})}));
