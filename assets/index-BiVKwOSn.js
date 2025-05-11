(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function t(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(a){if(a.ep)return;a.ep=!0;const o=t(a);fetch(a.href,o)}})();function Vx(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var J_={exports:{}},Xc={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pb;function Mx(){if(Pb)return Xc;Pb=1;var n=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function t(r,a,o){var u=null;if(o!==void 0&&(u=""+o),a.key!==void 0&&(u=""+a.key),"key"in a){o={};for(var h in a)h!=="key"&&(o[h]=a[h])}else o=a;return a=o.ref,{$$typeof:n,type:r,key:u,ref:a!==void 0?a:null,props:o}}return Xc.Fragment=e,Xc.jsx=t,Xc.jsxs=t,Xc}var xb;function Lx(){return xb||(xb=1,J_.exports=Mx()),J_.exports}var ee=Lx(),ey={exports:{}},Ne={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nb;function Ux(){if(Nb)return Ne;Nb=1;var n=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),o=Symbol.for("react.consumer"),u=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),v=Symbol.iterator;function w(O){return O===null||typeof O!="object"?null:(O=v&&O[v]||O["@@iterator"],typeof O=="function"?O:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},P=Object.assign,U={};function L(O,ie,_e){this.props=O,this.context=ie,this.refs=U,this.updater=_e||S}L.prototype.isReactComponent={},L.prototype.setState=function(O,ie){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,ie,"setState")},L.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function H(){}H.prototype=L.prototype;function Y(O,ie,_e){this.props=O,this.context=ie,this.refs=U,this.updater=_e||S}var $=Y.prototype=new H;$.constructor=Y,P($,L.prototype),$.isPureReactComponent=!0;var oe=Array.isArray,ae={H:null,A:null,T:null,S:null},le=Object.prototype.hasOwnProperty;function D(O,ie,_e,me,fe,De){return _e=De.ref,{$$typeof:n,type:O,key:ie,ref:_e!==void 0?_e:null,props:De}}function R(O,ie){return D(O.type,ie,void 0,void 0,void 0,O.props)}function A(O){return typeof O=="object"&&O!==null&&O.$$typeof===n}function x(O){var ie={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(_e){return ie[_e]})}var V=/\/+/g;function z(O,ie){return typeof O=="object"&&O!==null&&O.key!=null?x(""+O.key):ie.toString(36)}function N(){}function Nt(O){switch(O.status){case"fulfilled":return O.value;case"rejected":throw O.reason;default:switch(typeof O.status=="string"?O.then(N,N):(O.status="pending",O.then(function(ie){O.status==="pending"&&(O.status="fulfilled",O.value=ie)},function(ie){O.status==="pending"&&(O.status="rejected",O.reason=ie)})),O.status){case"fulfilled":return O.value;case"rejected":throw O.reason}}throw O}function It(O,ie,_e,me,fe){var De=typeof O;(De==="undefined"||De==="boolean")&&(O=null);var Ce=!1;if(O===null)Ce=!0;else switch(De){case"bigint":case"string":case"number":Ce=!0;break;case"object":switch(O.$$typeof){case n:case e:Ce=!0;break;case y:return Ce=O._init,It(Ce(O._payload),ie,_e,me,fe)}}if(Ce)return fe=fe(O),Ce=me===""?"."+z(O,0):me,oe(fe)?(_e="",Ce!=null&&(_e=Ce.replace(V,"$&/")+"/"),It(fe,ie,_e,"",function(Ze){return Ze})):fe!=null&&(A(fe)&&(fe=R(fe,_e+(fe.key==null||O&&O.key===fe.key?"":(""+fe.key).replace(V,"$&/")+"/")+Ce)),ie.push(fe)),1;Ce=0;var ut=me===""?".":me+":";if(oe(O))for(var Me=0;Me<O.length;Me++)me=O[Me],De=ut+z(me,Me),Ce+=It(me,ie,_e,De,fe);else if(Me=w(O),typeof Me=="function")for(O=Me.call(O),Me=0;!(me=O.next()).done;)me=me.value,De=ut+z(me,Me++),Ce+=It(me,ie,_e,De,fe);else if(De==="object"){if(typeof O.then=="function")return It(Nt(O),ie,_e,me,fe);throw ie=String(O),Error("Objects are not valid as a React child (found: "+(ie==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":ie)+"). If you meant to render a collection of children, use an array instead.")}return Ce}function he(O,ie,_e){if(O==null)return O;var me=[],fe=0;return It(O,me,"","",function(De){return ie.call(_e,De,fe++)}),me}function Ie(O){if(O._status===-1){var ie=O._result;ie=ie(),ie.then(function(_e){(O._status===0||O._status===-1)&&(O._status=1,O._result=_e)},function(_e){(O._status===0||O._status===-1)&&(O._status=2,O._result=_e)}),O._status===-1&&(O._status=0,O._result=ie)}if(O._status===1)return O._result.default;throw O._result}var we=typeof reportError=="function"?reportError:function(O){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ie=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof O=="object"&&O!==null&&typeof O.message=="string"?String(O.message):String(O),error:O});if(!window.dispatchEvent(ie))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",O);return}console.error(O)};function Oe(){}return Ne.Children={map:he,forEach:function(O,ie,_e){he(O,function(){ie.apply(this,arguments)},_e)},count:function(O){var ie=0;return he(O,function(){ie++}),ie},toArray:function(O){return he(O,function(ie){return ie})||[]},only:function(O){if(!A(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},Ne.Component=L,Ne.Fragment=t,Ne.Profiler=a,Ne.PureComponent=Y,Ne.StrictMode=r,Ne.Suspense=f,Ne.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=ae,Ne.act=function(){throw Error("act(...) is not supported in production builds of React.")},Ne.cache=function(O){return function(){return O.apply(null,arguments)}},Ne.cloneElement=function(O,ie,_e){if(O==null)throw Error("The argument must be a React element, but you passed "+O+".");var me=P({},O.props),fe=O.key,De=void 0;if(ie!=null)for(Ce in ie.ref!==void 0&&(De=void 0),ie.key!==void 0&&(fe=""+ie.key),ie)!le.call(ie,Ce)||Ce==="key"||Ce==="__self"||Ce==="__source"||Ce==="ref"&&ie.ref===void 0||(me[Ce]=ie[Ce]);var Ce=arguments.length-2;if(Ce===1)me.children=_e;else if(1<Ce){for(var ut=Array(Ce),Me=0;Me<Ce;Me++)ut[Me]=arguments[Me+2];me.children=ut}return D(O.type,fe,void 0,void 0,De,me)},Ne.createContext=function(O){return O={$$typeof:u,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null},O.Provider=O,O.Consumer={$$typeof:o,_context:O},O},Ne.createElement=function(O,ie,_e){var me,fe={},De=null;if(ie!=null)for(me in ie.key!==void 0&&(De=""+ie.key),ie)le.call(ie,me)&&me!=="key"&&me!=="__self"&&me!=="__source"&&(fe[me]=ie[me]);var Ce=arguments.length-2;if(Ce===1)fe.children=_e;else if(1<Ce){for(var ut=Array(Ce),Me=0;Me<Ce;Me++)ut[Me]=arguments[Me+2];fe.children=ut}if(O&&O.defaultProps)for(me in Ce=O.defaultProps,Ce)fe[me]===void 0&&(fe[me]=Ce[me]);return D(O,De,void 0,void 0,null,fe)},Ne.createRef=function(){return{current:null}},Ne.forwardRef=function(O){return{$$typeof:h,render:O}},Ne.isValidElement=A,Ne.lazy=function(O){return{$$typeof:y,_payload:{_status:-1,_result:O},_init:Ie}},Ne.memo=function(O,ie){return{$$typeof:p,type:O,compare:ie===void 0?null:ie}},Ne.startTransition=function(O){var ie=ae.T,_e={};ae.T=_e;try{var me=O(),fe=ae.S;fe!==null&&fe(_e,me),typeof me=="object"&&me!==null&&typeof me.then=="function"&&me.then(Oe,we)}catch(De){we(De)}finally{ae.T=ie}},Ne.unstable_useCacheRefresh=function(){return ae.H.useCacheRefresh()},Ne.use=function(O){return ae.H.use(O)},Ne.useActionState=function(O,ie,_e){return ae.H.useActionState(O,ie,_e)},Ne.useCallback=function(O,ie){return ae.H.useCallback(O,ie)},Ne.useContext=function(O){return ae.H.useContext(O)},Ne.useDebugValue=function(){},Ne.useDeferredValue=function(O,ie){return ae.H.useDeferredValue(O,ie)},Ne.useEffect=function(O,ie){return ae.H.useEffect(O,ie)},Ne.useId=function(){return ae.H.useId()},Ne.useImperativeHandle=function(O,ie,_e){return ae.H.useImperativeHandle(O,ie,_e)},Ne.useInsertionEffect=function(O,ie){return ae.H.useInsertionEffect(O,ie)},Ne.useLayoutEffect=function(O,ie){return ae.H.useLayoutEffect(O,ie)},Ne.useMemo=function(O,ie){return ae.H.useMemo(O,ie)},Ne.useOptimistic=function(O,ie){return ae.H.useOptimistic(O,ie)},Ne.useReducer=function(O,ie,_e){return ae.H.useReducer(O,ie,_e)},Ne.useRef=function(O){return ae.H.useRef(O)},Ne.useState=function(O){return ae.H.useState(O)},Ne.useSyncExternalStore=function(O,ie,_e){return ae.H.useSyncExternalStore(O,ie,_e)},Ne.useTransition=function(){return ae.H.useTransition()},Ne.version="19.0.0",Ne}var Ob;function Dv(){return Ob||(Ob=1,ey.exports=Ux()),ey.exports}var W=Dv();const tu=Vx(W);var ty={exports:{}},Zc={},ny={exports:{}},ry={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kb;function Bx(){return kb||(kb=1,function(n){function e(he,Ie){var we=he.length;he.push(Ie);e:for(;0<we;){var Oe=we-1>>>1,O=he[Oe];if(0<a(O,Ie))he[Oe]=Ie,he[we]=O,we=Oe;else break e}}function t(he){return he.length===0?null:he[0]}function r(he){if(he.length===0)return null;var Ie=he[0],we=he.pop();if(we!==Ie){he[0]=we;e:for(var Oe=0,O=he.length,ie=O>>>1;Oe<ie;){var _e=2*(Oe+1)-1,me=he[_e],fe=_e+1,De=he[fe];if(0>a(me,we))fe<O&&0>a(De,me)?(he[Oe]=De,he[fe]=we,Oe=fe):(he[Oe]=me,he[_e]=we,Oe=_e);else if(fe<O&&0>a(De,we))he[Oe]=De,he[fe]=we,Oe=fe;else break e}}return Ie}function a(he,Ie){var we=he.sortIndex-Ie.sortIndex;return we!==0?we:he.id-Ie.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var o=performance;n.unstable_now=function(){return o.now()}}else{var u=Date,h=u.now();n.unstable_now=function(){return u.now()-h}}var f=[],p=[],y=1,v=null,w=3,S=!1,P=!1,U=!1,L=typeof setTimeout=="function"?setTimeout:null,H=typeof clearTimeout=="function"?clearTimeout:null,Y=typeof setImmediate<"u"?setImmediate:null;function $(he){for(var Ie=t(p);Ie!==null;){if(Ie.callback===null)r(p);else if(Ie.startTime<=he)r(p),Ie.sortIndex=Ie.expirationTime,e(f,Ie);else break;Ie=t(p)}}function oe(he){if(U=!1,$(he),!P)if(t(f)!==null)P=!0,Nt();else{var Ie=t(p);Ie!==null&&It(oe,Ie.startTime-he)}}var ae=!1,le=-1,D=5,R=-1;function A(){return!(n.unstable_now()-R<D)}function x(){if(ae){var he=n.unstable_now();R=he;var Ie=!0;try{e:{P=!1,U&&(U=!1,H(le),le=-1),S=!0;var we=w;try{t:{for($(he),v=t(f);v!==null&&!(v.expirationTime>he&&A());){var Oe=v.callback;if(typeof Oe=="function"){v.callback=null,w=v.priorityLevel;var O=Oe(v.expirationTime<=he);if(he=n.unstable_now(),typeof O=="function"){v.callback=O,$(he),Ie=!0;break t}v===t(f)&&r(f),$(he)}else r(f);v=t(f)}if(v!==null)Ie=!0;else{var ie=t(p);ie!==null&&It(oe,ie.startTime-he),Ie=!1}}break e}finally{v=null,w=we,S=!1}Ie=void 0}}finally{Ie?V():ae=!1}}}var V;if(typeof Y=="function")V=function(){Y(x)};else if(typeof MessageChannel<"u"){var z=new MessageChannel,N=z.port2;z.port1.onmessage=x,V=function(){N.postMessage(null)}}else V=function(){L(x,0)};function Nt(){ae||(ae=!0,V())}function It(he,Ie){le=L(function(){he(n.unstable_now())},Ie)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(he){he.callback=null},n.unstable_continueExecution=function(){P||S||(P=!0,Nt())},n.unstable_forceFrameRate=function(he){0>he||125<he?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<he?Math.floor(1e3/he):5},n.unstable_getCurrentPriorityLevel=function(){return w},n.unstable_getFirstCallbackNode=function(){return t(f)},n.unstable_next=function(he){switch(w){case 1:case 2:case 3:var Ie=3;break;default:Ie=w}var we=w;w=Ie;try{return he()}finally{w=we}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(he,Ie){switch(he){case 1:case 2:case 3:case 4:case 5:break;default:he=3}var we=w;w=he;try{return Ie()}finally{w=we}},n.unstable_scheduleCallback=function(he,Ie,we){var Oe=n.unstable_now();switch(typeof we=="object"&&we!==null?(we=we.delay,we=typeof we=="number"&&0<we?Oe+we:Oe):we=Oe,he){case 1:var O=-1;break;case 2:O=250;break;case 5:O=1073741823;break;case 4:O=1e4;break;default:O=5e3}return O=we+O,he={id:y++,callback:Ie,priorityLevel:he,startTime:we,expirationTime:O,sortIndex:-1},we>Oe?(he.sortIndex=we,e(p,he),t(f)===null&&he===t(p)&&(U?(H(le),le=-1):U=!0,It(oe,we-Oe))):(he.sortIndex=O,e(f,he),P||S||(P=!0,Nt())),he},n.unstable_shouldYield=A,n.unstable_wrapCallback=function(he){var Ie=w;return function(){var we=w;w=Ie;try{return he.apply(this,arguments)}finally{w=we}}}}(ry)),ry}var Vb;function zx(){return Vb||(Vb=1,ny.exports=Bx()),ny.exports}var iy={exports:{}},wn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mb;function Fx(){if(Mb)return wn;Mb=1;var n=Dv();function e(f){var p="https://react.dev/errors/"+f;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)p+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+f+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function t(){}var r={d:{f:t,r:function(){throw Error(e(522))},D:t,C:t,L:t,m:t,X:t,S:t,M:t},p:0,findDOMNode:null},a=Symbol.for("react.portal");function o(f,p,y){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:v==null?null:""+v,children:f,containerInfo:p,implementation:y}}var u=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(f,p){if(f==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return wn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,wn.createPortal=function(f,p){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return o(f,p,null,y)},wn.flushSync=function(f){var p=u.T,y=r.p;try{if(u.T=null,r.p=2,f)return f()}finally{u.T=p,r.p=y,r.d.f()}},wn.preconnect=function(f,p){typeof f=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(f,p))},wn.prefetchDNS=function(f){typeof f=="string"&&r.d.D(f)},wn.preinit=function(f,p){if(typeof f=="string"&&p&&typeof p.as=="string"){var y=p.as,v=h(y,p.crossOrigin),w=typeof p.integrity=="string"?p.integrity:void 0,S=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;y==="style"?r.d.S(f,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:v,integrity:w,fetchPriority:S}):y==="script"&&r.d.X(f,{crossOrigin:v,integrity:w,fetchPriority:S,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},wn.preinitModule=function(f,p){if(typeof f=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var y=h(p.as,p.crossOrigin);r.d.M(f,{crossOrigin:y,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(f)},wn.preload=function(f,p){if(typeof f=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var y=p.as,v=h(y,p.crossOrigin);r.d.L(f,y,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},wn.preloadModule=function(f,p){if(typeof f=="string")if(p){var y=h(p.as,p.crossOrigin);r.d.m(f,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:y,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(f)},wn.requestFormReset=function(f){r.d.r(f)},wn.unstable_batchedUpdates=function(f,p){return f(p)},wn.useFormState=function(f,p,y){return u.H.useFormState(f,p,y)},wn.useFormStatus=function(){return u.H.useHostTransitionStatus()},wn.version="19.0.0",wn}var Lb;function qx(){if(Lb)return iy.exports;Lb=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),iy.exports=Fx(),iy.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ub;function jx(){if(Ub)return Zc;Ub=1;var n=zx(),e=Dv(),t=qx();function r(i){var s="https://react.dev/errors/"+i;if(1<arguments.length){s+="?args[]="+encodeURIComponent(arguments[1]);for(var l=2;l<arguments.length;l++)s+="&args[]="+encodeURIComponent(arguments[l])}return"Minified React error #"+i+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function a(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11)}var o=Symbol.for("react.element"),u=Symbol.for("react.transitional.element"),h=Symbol.for("react.portal"),f=Symbol.for("react.fragment"),p=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),v=Symbol.for("react.provider"),w=Symbol.for("react.consumer"),S=Symbol.for("react.context"),P=Symbol.for("react.forward_ref"),U=Symbol.for("react.suspense"),L=Symbol.for("react.suspense_list"),H=Symbol.for("react.memo"),Y=Symbol.for("react.lazy"),$=Symbol.for("react.offscreen"),oe=Symbol.for("react.memo_cache_sentinel"),ae=Symbol.iterator;function le(i){return i===null||typeof i!="object"?null:(i=ae&&i[ae]||i["@@iterator"],typeof i=="function"?i:null)}var D=Symbol.for("react.client.reference");function R(i){if(i==null)return null;if(typeof i=="function")return i.$$typeof===D?null:i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case f:return"Fragment";case h:return"Portal";case y:return"Profiler";case p:return"StrictMode";case U:return"Suspense";case L:return"SuspenseList"}if(typeof i=="object")switch(i.$$typeof){case S:return(i.displayName||"Context")+".Provider";case w:return(i._context.displayName||"Context")+".Consumer";case P:var s=i.render;return i=i.displayName,i||(i=s.displayName||s.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case H:return s=i.displayName||null,s!==null?s:R(i.type)||"Memo";case Y:s=i._payload,i=i._init;try{return R(i(s))}catch{}}return null}var A=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,x=Object.assign,V,z;function N(i){if(V===void 0)try{throw Error()}catch(l){var s=l.stack.trim().match(/\n( *(at )?)/);V=s&&s[1]||"",z=-1<l.stack.indexOf(`
    at`)?" (<anonymous>)":-1<l.stack.indexOf("@")?"@unknown:0:0":""}return`
`+V+i+z}var Nt=!1;function It(i,s){if(!i||Nt)return"";Nt=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var c={DetermineComponentFrameRoot:function(){try{if(s){var ne=function(){throw Error()};if(Object.defineProperty(ne.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ne,[])}catch(X){var G=X}Reflect.construct(i,[],ne)}else{try{ne.call()}catch(X){G=X}i.call(ne.prototype)}}else{try{throw Error()}catch(X){G=X}(ne=i())&&typeof ne.catch=="function"&&ne.catch(function(){})}}catch(X){if(X&&G&&typeof X.stack=="string")return[X.stack,G.stack]}return[null,null]}};c.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var m=Object.getOwnPropertyDescriptor(c.DetermineComponentFrameRoot,"name");m&&m.configurable&&Object.defineProperty(c.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var g=c.DetermineComponentFrameRoot(),T=g[0],b=g[1];if(T&&b){var C=T.split(`
`),M=b.split(`
`);for(m=c=0;c<C.length&&!C[c].includes("DetermineComponentFrameRoot");)c++;for(;m<M.length&&!M[m].includes("DetermineComponentFrameRoot");)m++;if(c===C.length||m===M.length)for(c=C.length-1,m=M.length-1;1<=c&&0<=m&&C[c]!==M[m];)m--;for(;1<=c&&0<=m;c--,m--)if(C[c]!==M[m]){if(c!==1||m!==1)do if(c--,m--,0>m||C[c]!==M[m]){var Z=`
`+C[c].replace(" at new "," at ");return i.displayName&&Z.includes("<anonymous>")&&(Z=Z.replace("<anonymous>",i.displayName)),Z}while(1<=c&&0<=m);break}}}finally{Nt=!1,Error.prepareStackTrace=l}return(l=i?i.displayName||i.name:"")?N(l):""}function he(i){switch(i.tag){case 26:case 27:case 5:return N(i.type);case 16:return N("Lazy");case 13:return N("Suspense");case 19:return N("SuspenseList");case 0:case 15:return i=It(i.type,!1),i;case 11:return i=It(i.type.render,!1),i;case 1:return i=It(i.type,!0),i;default:return""}}function Ie(i){try{var s="";do s+=he(i),i=i.return;while(i);return s}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}function we(i){var s=i,l=i;if(i.alternate)for(;s.return;)s=s.return;else{i=s;do s=i,(s.flags&4098)!==0&&(l=s.return),i=s.return;while(i)}return s.tag===3?l:null}function Oe(i){if(i.tag===13){var s=i.memoizedState;if(s===null&&(i=i.alternate,i!==null&&(s=i.memoizedState)),s!==null)return s.dehydrated}return null}function O(i){if(we(i)!==i)throw Error(r(188))}function ie(i){var s=i.alternate;if(!s){if(s=we(i),s===null)throw Error(r(188));return s!==i?null:i}for(var l=i,c=s;;){var m=l.return;if(m===null)break;var g=m.alternate;if(g===null){if(c=m.return,c!==null){l=c;continue}break}if(m.child===g.child){for(g=m.child;g;){if(g===l)return O(m),i;if(g===c)return O(m),s;g=g.sibling}throw Error(r(188))}if(l.return!==c.return)l=m,c=g;else{for(var T=!1,b=m.child;b;){if(b===l){T=!0,l=m,c=g;break}if(b===c){T=!0,c=m,l=g;break}b=b.sibling}if(!T){for(b=g.child;b;){if(b===l){T=!0,l=g,c=m;break}if(b===c){T=!0,c=g,l=m;break}b=b.sibling}if(!T)throw Error(r(189))}}if(l.alternate!==c)throw Error(r(190))}if(l.tag!==3)throw Error(r(188));return l.stateNode.current===l?i:s}function _e(i){var s=i.tag;if(s===5||s===26||s===27||s===6)return i;for(i=i.child;i!==null;){if(s=_e(i),s!==null)return s;i=i.sibling}return null}var me=Array.isArray,fe=t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,De={pending:!1,data:null,method:null,action:null},Ce=[],ut=-1;function Me(i){return{current:i}}function Ze(i){0>ut||(i.current=Ce[ut],Ce[ut]=null,ut--)}function Ke(i,s){ut++,Ce[ut]=i.current,i.current=s}var Ut=Me(null),Jt=Me(null),rr=Me(null),ls=Me(null);function us(i,s){switch(Ke(rr,s),Ke(Jt,i),Ke(Ut,null),i=s.nodeType,i){case 9:case 11:s=(s=s.documentElement)&&(s=s.namespaceURI)?sb(s):0;break;default:if(i=i===8?s.parentNode:s,s=i.tagName,i=i.namespaceURI)i=sb(i),s=ab(i,s);else switch(s){case"svg":s=1;break;case"math":s=2;break;default:s=0}}Ze(Ut),Ke(Ut,s)}function _i(){Ze(Ut),Ze(Jt),Ze(rr)}function $u(i){i.memoizedState!==null&&Ke(ls,i);var s=Ut.current,l=ab(s,i.type);s!==l&&(Ke(Jt,i),Ke(Ut,l))}function jo(i){Jt.current===i&&(Ze(Ut),Ze(Jt)),ls.current===i&&(Ze(ls),$c._currentValue=De)}var Ho=Object.prototype.hasOwnProperty,Sa=n.unstable_scheduleCallback,Go=n.unstable_cancelCallback,tg=n.unstable_shouldYield,Ku=n.unstable_requestPaint,Ln=n.unstable_now,Dd=n.unstable_getCurrentPriorityLevel,Gt=n.unstable_ImmediatePriority,en=n.unstable_UserBlockingPriority,yi=n.unstable_NormalPriority,Pd=n.unstable_LowPriority,Qu=n.unstable_IdlePriority,ng=n.log,Ra=n.unstable_setDisableYieldValue,cs=null,En=null;function Wu(i){if(En&&typeof En.onCommitFiberRoot=="function")try{En.onCommitFiberRoot(cs,i,void 0,(i.current.flags&128)===128)}catch{}}function Vr(i){if(typeof ng=="function"&&Ra(i),En&&typeof En.setStrictMode=="function")try{En.setStrictMode(cs,i)}catch{}}var Rn=Math.clz32?Math.clz32:Nd,Yu=Math.log,xd=Math.LN2;function Nd(i){return i>>>=0,i===0?32:31-(Yu(i)/xd|0)|0}var Mr=128,hs=4194304;function Ir(i){var s=i&42;if(s!==0)return s;switch(i&-i){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i&4194176;case 4194304:case 8388608:case 16777216:case 33554432:return i&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return i}}function ir(i,s){var l=i.pendingLanes;if(l===0)return 0;var c=0,m=i.suspendedLanes,g=i.pingedLanes,T=i.warmLanes;i=i.finishedLanes!==0;var b=l&134217727;return b!==0?(l=b&~m,l!==0?c=Ir(l):(g&=b,g!==0?c=Ir(g):i||(T=b&~T,T!==0&&(c=Ir(T))))):(b=l&~m,b!==0?c=Ir(b):g!==0?c=Ir(g):i||(T=l&~T,T!==0&&(c=Ir(T)))),c===0?0:s!==0&&s!==c&&(s&m)===0&&(m=c&-c,T=s&-s,m>=T||m===32&&(T&4194176)!==0)?s:c}function ds(i,s){return(i.pendingLanes&~(i.suspendedLanes&~i.pingedLanes)&s)===0}function $o(i,s){switch(i){case 1:case 2:case 4:case 8:return s+250;case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Xu(){var i=Mr;return Mr<<=1,(Mr&4194176)===0&&(Mr=128),i}function fs(){var i=hs;return hs<<=1,(hs&62914560)===0&&(hs=4194304),i}function Ko(i){for(var s=[],l=0;31>l;l++)s.push(i);return s}function Ot(i,s){i.pendingLanes|=s,s!==268435456&&(i.suspendedLanes=0,i.pingedLanes=0,i.warmLanes=0)}function Od(i,s,l,c,m,g){var T=i.pendingLanes;i.pendingLanes=l,i.suspendedLanes=0,i.pingedLanes=0,i.warmLanes=0,i.expiredLanes&=l,i.entangledLanes&=l,i.errorRecoveryDisabledLanes&=l,i.shellSuspendCounter=0;var b=i.entanglements,C=i.expirationTimes,M=i.hiddenUpdates;for(l=T&~l;0<l;){var Z=31-Rn(l),ne=1<<Z;b[Z]=0,C[Z]=-1;var G=M[Z];if(G!==null)for(M[Z]=null,Z=0;Z<G.length;Z++){var X=G[Z];X!==null&&(X.lane&=-536870913)}l&=~ne}c!==0&&ms(i,c,0),g!==0&&m===0&&i.tag!==0&&(i.suspendedLanes|=g&~(T&~s))}function ms(i,s,l){i.pendingLanes|=s,i.suspendedLanes&=~s;var c=31-Rn(s);i.entangledLanes|=s,i.entanglements[c]=i.entanglements[c]|1073741824|l&4194218}function ps(i,s){var l=i.entangledLanes|=s;for(i=i.entanglements;l;){var c=31-Rn(l),m=1<<c;m&s|i[c]&s&&(i[c]|=s),l&=~m}}function kd(i){return i&=-i,2<i?8<i?(i&134217727)!==0?32:268435456:8:2}function Vd(){var i=fe.p;return i!==0?i:(i=window.event,i===void 0?32:Ib(i.type))}function gs(i,s){var l=fe.p;try{return fe.p=i,s()}finally{fe.p=l}}var Lr=Math.random().toString(36).slice(2),tn="__reactFiber$"+Lr,$t="__reactProps$"+Lr,vi="__reactContainer$"+Lr,Ca="__reactEvents$"+Lr,Qo="__reactListeners$"+Lr,Ur="__reactHandles$"+Lr,Zu="__reactResources$"+Lr,_s="__reactMarker$"+Lr;function Da(i){delete i[tn],delete i[$t],delete i[Ca],delete i[Qo],delete i[Ur]}function Ar(i){var s=i[tn];if(s)return s;for(var l=i.parentNode;l;){if(s=l[vi]||l[tn]){if(l=s.alternate,s.child!==null||l!==null&&l.child!==null)for(i=ub(i);i!==null;){if(l=i[tn])return l;i=ub(i)}return s}i=l,l=i.parentNode}return null}function Ei(i){if(i=i[tn]||i[vi]){var s=i.tag;if(s===5||s===6||s===13||s===26||s===27||s===3)return i}return null}function ys(i){var s=i.tag;if(s===5||s===26||s===27||s===6)return i.stateNode;throw Error(r(33))}function vs(i){var s=i[Zu];return s||(s=i[Zu]={hoistableStyles:new Map,hoistableScripts:new Map}),s}function _t(i){i[_s]=!0}var Ju=new Set,Wo={};function Gn(i,s){Un(i,s),Un(i+"Capture",s)}function Un(i,s){for(Wo[i]=s,i=0;i<s.length;i++)Ju.add(s[i])}var $n=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),rg=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ec={},tc={};function Md(i){return Ho.call(tc,i)?!0:Ho.call(ec,i)?!1:rg.test(i)?tc[i]=!0:(ec[i]=!0,!1)}function Es(i,s,l){if(Md(s))if(l===null)i.removeAttribute(s);else{switch(typeof l){case"undefined":case"function":case"symbol":i.removeAttribute(s);return;case"boolean":var c=s.toLowerCase().slice(0,5);if(c!=="data-"&&c!=="aria-"){i.removeAttribute(s);return}}i.setAttribute(s,""+l)}}function Ts(i,s,l){if(l===null)i.removeAttribute(s);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":i.removeAttribute(s);return}i.setAttribute(s,""+l)}}function sr(i,s,l,c){if(c===null)i.removeAttribute(l);else{switch(typeof c){case"undefined":case"function":case"symbol":case"boolean":i.removeAttribute(l);return}i.setAttributeNS(s,l,""+c)}}function Cn(i){switch(typeof i){case"bigint":case"boolean":case"number":case"string":case"undefined":return i;case"object":return i;default:return""}}function Ld(i){var s=i.type;return(i=i.nodeName)&&i.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function ig(i){var s=Ld(i)?"checked":"value",l=Object.getOwnPropertyDescriptor(i.constructor.prototype,s),c=""+i[s];if(!i.hasOwnProperty(s)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var m=l.get,g=l.set;return Object.defineProperty(i,s,{configurable:!0,get:function(){return m.call(this)},set:function(T){c=""+T,g.call(this,T)}}),Object.defineProperty(i,s,{enumerable:l.enumerable}),{getValue:function(){return c},setValue:function(T){c=""+T},stopTracking:function(){i._valueTracker=null,delete i[s]}}}}function Pa(i){i._valueTracker||(i._valueTracker=ig(i))}function nc(i){if(!i)return!1;var s=i._valueTracker;if(!s)return!0;var l=s.getValue(),c="";return i&&(c=Ld(i)?i.checked?"true":"false":i.value),i=c,i!==l?(s.setValue(i),!0):!1}function Yo(i){if(i=i||(typeof document<"u"?document:void 0),typeof i>"u")return null;try{return i.activeElement||i.body}catch{return i.body}}var Ti=/[\n"\\]/g;function At(i){return i.replace(Ti,function(s){return"\\"+s.charCodeAt(0).toString(16)+" "})}function ws(i,s,l,c,m,g,T,b){i.name="",T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?i.type=T:i.removeAttribute("type"),s!=null?T==="number"?(s===0&&i.value===""||i.value!=s)&&(i.value=""+Cn(s)):i.value!==""+Cn(s)&&(i.value=""+Cn(s)):T!=="submit"&&T!=="reset"||i.removeAttribute("value"),s!=null?Xo(i,T,Cn(s)):l!=null?Xo(i,T,Cn(l)):c!=null&&i.removeAttribute("value"),m==null&&g!=null&&(i.defaultChecked=!!g),m!=null&&(i.checked=m&&typeof m!="function"&&typeof m!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?i.name=""+Cn(b):i.removeAttribute("name")}function xa(i,s,l,c,m,g,T,b){if(g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"&&(i.type=g),s!=null||l!=null){if(!(g!=="submit"&&g!=="reset"||s!=null))return;l=l!=null?""+Cn(l):"",s=s!=null?""+Cn(s):l,b||s===i.value||(i.value=s),i.defaultValue=s}c=c??m,c=typeof c!="function"&&typeof c!="symbol"&&!!c,i.checked=b?i.checked:!!c,i.defaultChecked=!!c,T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"&&(i.name=T)}function Xo(i,s,l){s==="number"&&Yo(i.ownerDocument)===i||i.defaultValue===""+l||(i.defaultValue=""+l)}function Qe(i,s,l,c){if(i=i.options,s){s={};for(var m=0;m<l.length;m++)s["$"+l[m]]=!0;for(l=0;l<i.length;l++)m=s.hasOwnProperty("$"+i[l].value),i[l].selected!==m&&(i[l].selected=m),m&&c&&(i[l].defaultSelected=!0)}else{for(l=""+Cn(l),s=null,m=0;m<i.length;m++){if(i[m].value===l){i[m].selected=!0,c&&(i[m].defaultSelected=!0);return}s!==null||i[m].disabled||(s=i[m])}s!==null&&(s.selected=!0)}}function Na(i,s,l){if(s!=null&&(s=""+Cn(s),s!==i.value&&(i.value=s),l==null)){i.defaultValue!==s&&(i.defaultValue=s);return}i.defaultValue=l!=null?""+Cn(l):""}function bs(i,s,l,c){if(s==null){if(c!=null){if(l!=null)throw Error(r(92));if(me(c)){if(1<c.length)throw Error(r(93));c=c[0]}l=c}l==null&&(l=""),s=l}l=Cn(s),i.defaultValue=l,c=i.textContent,c===l&&c!==""&&c!==null&&(i.value=c)}function ar(i,s){if(s){var l=i.firstChild;if(l&&l===i.lastChild&&l.nodeType===3){l.nodeValue=s;return}}i.textContent=s}var sg=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function rc(i,s,l){var c=s.indexOf("--")===0;l==null||typeof l=="boolean"||l===""?c?i.setProperty(s,""):s==="float"?i.cssFloat="":i[s]="":c?i.setProperty(s,l):typeof l!="number"||l===0||sg.has(s)?s==="float"?i.cssFloat=l:i[s]=(""+l).trim():i[s]=l+"px"}function Ud(i,s,l){if(s!=null&&typeof s!="object")throw Error(r(62));if(i=i.style,l!=null){for(var c in l)!l.hasOwnProperty(c)||s!=null&&s.hasOwnProperty(c)||(c.indexOf("--")===0?i.setProperty(c,""):c==="float"?i.cssFloat="":i[c]="");for(var m in s)c=s[m],s.hasOwnProperty(m)&&l[m]!==c&&rc(i,m,c)}else for(var g in s)s.hasOwnProperty(g)&&rc(i,g,s[g])}function ic(i){if(i.indexOf("-")===-1)return!1;switch(i){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ag=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),og=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Br(i){return og.test(""+i)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":i}var or=null;function Zo(i){return i=i.target||i.srcElement||window,i.correspondingUseElement&&(i=i.correspondingUseElement),i.nodeType===3?i.parentNode:i}var wi=null,bi=null;function Ii(i){var s=Ei(i);if(s&&(i=s.stateNode)){var l=i[$t]||null;e:switch(i=s.stateNode,s.type){case"input":if(ws(i,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name),s=l.name,l.type==="radio"&&s!=null){for(l=i;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll('input[name="'+At(""+s)+'"][type="radio"]'),s=0;s<l.length;s++){var c=l[s];if(c!==i&&c.form===i.form){var m=c[$t]||null;if(!m)throw Error(r(90));ws(c,m.value,m.defaultValue,m.defaultValue,m.checked,m.defaultChecked,m.type,m.name)}}for(s=0;s<l.length;s++)c=l[s],c.form===i.form&&nc(c)}break e;case"textarea":Na(i,l.value,l.defaultValue);break e;case"select":s=l.value,s!=null&&Qe(i,!!l.multiple,s,!1)}}}var sc=!1;function Bd(i,s,l){if(sc)return i(s,l);sc=!0;try{var c=i(s);return c}finally{if(sc=!1,(wi!==null||bi!==null)&&(xf(),wi&&(s=wi,i=bi,bi=wi=null,Ii(s),i)))for(s=0;s<i.length;s++)Ii(i[s])}}function Oa(i,s){var l=i.stateNode;if(l===null)return null;var c=l[$t]||null;if(c===null)return null;l=c[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(i=i.type,c=!(i==="button"||i==="input"||i==="select"||i==="textarea")),i=!c;break e;default:i=!1}if(i)return null;if(l&&typeof l!="function")throw Error(r(231,s,typeof l));return l}var lr=!1;if($n)try{var ka={};Object.defineProperty(ka,"passive",{get:function(){lr=!0}}),window.addEventListener("test",ka,ka),window.removeEventListener("test",ka,ka)}catch{lr=!1}var zr=null,Is=null,Ai=null;function ac(){if(Ai)return Ai;var i,s=Is,l=s.length,c,m="value"in zr?zr.value:zr.textContent,g=m.length;for(i=0;i<l&&s[i]===m[i];i++);var T=l-i;for(c=1;c<=T&&s[l-c]===m[g-c];c++);return Ai=m.slice(i,1<c?1-c:void 0)}function Fr(i){var s=i.keyCode;return"charCode"in i?(i=i.charCode,i===0&&s===13&&(i=13)):i=s,i===10&&(i=13),32<=i||i===13?i:0}function qr(){return!0}function oc(){return!1}function nn(i){function s(l,c,m,g,T){this._reactName=l,this._targetInst=m,this.type=c,this.nativeEvent=g,this.target=T,this.currentTarget=null;for(var b in i)i.hasOwnProperty(b)&&(l=i[b],this[b]=l?l(g):g[b]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?qr:oc,this.isPropagationStopped=oc,this}return x(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=qr)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=qr)},persist:function(){},isPersistent:qr}),s}var Je={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(i){return i.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Jo=nn(Je),Va=x({},Je,{view:0,detail:0}),zd=nn(Va),el,tl,jr,Ma=x({},Va,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ba,button:0,buttons:0,relatedTarget:function(i){return i.relatedTarget===void 0?i.fromElement===i.srcElement?i.toElement:i.fromElement:i.relatedTarget},movementX:function(i){return"movementX"in i?i.movementX:(i!==jr&&(jr&&i.type==="mousemove"?(el=i.screenX-jr.screenX,tl=i.screenY-jr.screenY):tl=el=0,jr=i),el)},movementY:function(i){return"movementY"in i?i.movementY:tl}}),ur=nn(Ma),Fd=x({},Ma,{dataTransfer:0}),lg=nn(Fd),La=x({},Va,{relatedTarget:0}),nl=nn(La),lc=x({},Je,{animationName:0,elapsedTime:0,pseudoElement:0}),rl=nn(lc),qd=x({},Je,{clipboardData:function(i){return"clipboardData"in i?i.clipboardData:window.clipboardData}}),il=nn(qd),ug=x({},Je,{data:0}),uc=nn(ug),Ua={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},jd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Hd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function cc(i){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(i):(i=Hd[i])?!!s[i]:!1}function Ba(){return cc}var Gd=x({},Va,{key:function(i){if(i.key){var s=Ua[i.key]||i.key;if(s!=="Unidentified")return s}return i.type==="keypress"?(i=Fr(i),i===13?"Enter":String.fromCharCode(i)):i.type==="keydown"||i.type==="keyup"?jd[i.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ba,charCode:function(i){return i.type==="keypress"?Fr(i):0},keyCode:function(i){return i.type==="keydown"||i.type==="keyup"?i.keyCode:0},which:function(i){return i.type==="keypress"?Fr(i):i.type==="keydown"||i.type==="keyup"?i.keyCode:0}}),sl=nn(Gd),$d=x({},Ma,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),hc=nn($d),Si=x({},Va,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ba}),Kd=nn(Si),Qd=x({},Je,{propertyName:0,elapsedTime:0,pseudoElement:0}),Wd=nn(Qd),Yd=x({},Ma,{deltaX:function(i){return"deltaX"in i?i.deltaX:"wheelDeltaX"in i?-i.wheelDeltaX:0},deltaY:function(i){return"deltaY"in i?i.deltaY:"wheelDeltaY"in i?-i.wheelDeltaY:"wheelDelta"in i?-i.wheelDelta:0},deltaZ:0,deltaMode:0}),al=nn(Yd),Dn=x({},Je,{newState:0,oldState:0}),Xd=nn(Dn),Zd=[9,13,27,32],Hr=$n&&"CompositionEvent"in window,d=null;$n&&"documentMode"in document&&(d=document.documentMode);var _=$n&&"TextEvent"in window&&!d,E=$n&&(!Hr||d&&8<d&&11>=d),I=" ",F=!1;function Q(i,s){switch(i){case"keyup":return Zd.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ue(i){return i=i.detail,typeof i=="object"&&"data"in i?i.data:null}var je=!1;function Kt(i,s){switch(i){case"compositionend":return ue(s);case"keypress":return s.which!==32?null:(F=!0,I);case"textInput":return i=s.data,i===I&&F?null:i;default:return null}}function He(i,s){if(je)return i==="compositionend"||!Hr&&Q(i,s)?(i=ac(),Ai=Is=zr=null,je=!1,i):null;switch(i){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return E&&s.locale!=="ko"?null:s.data;default:return null}}var rn={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Qt(i){var s=i&&i.nodeName&&i.nodeName.toLowerCase();return s==="input"?!!rn[i.type]:s==="textarea"}function Ri(i,s,l,c){wi?bi?bi.push(c):bi=[c]:wi=c,s=Mf(s,"onChange"),0<s.length&&(l=new Jo("onChange","change",null,l,c),i.push({event:l,listeners:s}))}var dn=null,Gr=null;function dc(i){eb(i,0)}function Jd(i){var s=ys(i);if(nc(s))return i}function DT(i,s){if(i==="change")return s}var PT=!1;if($n){var cg;if($n){var hg="oninput"in document;if(!hg){var xT=document.createElement("div");xT.setAttribute("oninput","return;"),hg=typeof xT.oninput=="function"}cg=hg}else cg=!1;PT=cg&&(!document.documentMode||9<document.documentMode)}function NT(){dn&&(dn.detachEvent("onpropertychange",OT),Gr=dn=null)}function OT(i){if(i.propertyName==="value"&&Jd(Gr)){var s=[];Ri(s,Gr,i,Zo(i)),Bd(dc,s)}}function hP(i,s,l){i==="focusin"?(NT(),dn=s,Gr=l,dn.attachEvent("onpropertychange",OT)):i==="focusout"&&NT()}function dP(i){if(i==="selectionchange"||i==="keyup"||i==="keydown")return Jd(Gr)}function fP(i,s){if(i==="click")return Jd(s)}function mP(i,s){if(i==="input"||i==="change")return Jd(s)}function pP(i,s){return i===s&&(i!==0||1/i===1/s)||i!==i&&s!==s}var Kn=typeof Object.is=="function"?Object.is:pP;function fc(i,s){if(Kn(i,s))return!0;if(typeof i!="object"||i===null||typeof s!="object"||s===null)return!1;var l=Object.keys(i),c=Object.keys(s);if(l.length!==c.length)return!1;for(c=0;c<l.length;c++){var m=l[c];if(!Ho.call(s,m)||!Kn(i[m],s[m]))return!1}return!0}function kT(i){for(;i&&i.firstChild;)i=i.firstChild;return i}function VT(i,s){var l=kT(i);i=0;for(var c;l;){if(l.nodeType===3){if(c=i+l.textContent.length,i<=s&&c>=s)return{node:l,offset:s-i};i=c}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=kT(l)}}function MT(i,s){return i&&s?i===s?!0:i&&i.nodeType===3?!1:s&&s.nodeType===3?MT(i,s.parentNode):"contains"in i?i.contains(s):i.compareDocumentPosition?!!(i.compareDocumentPosition(s)&16):!1:!1}function LT(i){i=i!=null&&i.ownerDocument!=null&&i.ownerDocument.defaultView!=null?i.ownerDocument.defaultView:window;for(var s=Yo(i.document);s instanceof i.HTMLIFrameElement;){try{var l=typeof s.contentWindow.location.href=="string"}catch{l=!1}if(l)i=s.contentWindow;else break;s=Yo(i.document)}return s}function dg(i){var s=i&&i.nodeName&&i.nodeName.toLowerCase();return s&&(s==="input"&&(i.type==="text"||i.type==="search"||i.type==="tel"||i.type==="url"||i.type==="password")||s==="textarea"||i.contentEditable==="true")}function gP(i,s){var l=LT(s);s=i.focusedElem;var c=i.selectionRange;if(l!==s&&s&&s.ownerDocument&&MT(s.ownerDocument.documentElement,s)){if(c!==null&&dg(s)){if(i=c.start,l=c.end,l===void 0&&(l=i),"selectionStart"in s)s.selectionStart=i,s.selectionEnd=Math.min(l,s.value.length);else if(l=(i=s.ownerDocument||document)&&i.defaultView||window,l.getSelection){l=l.getSelection();var m=s.textContent.length,g=Math.min(c.start,m);c=c.end===void 0?g:Math.min(c.end,m),!l.extend&&g>c&&(m=c,c=g,g=m),m=VT(s,g);var T=VT(s,c);m&&T&&(l.rangeCount!==1||l.anchorNode!==m.node||l.anchorOffset!==m.offset||l.focusNode!==T.node||l.focusOffset!==T.offset)&&(i=i.createRange(),i.setStart(m.node,m.offset),l.removeAllRanges(),g>c?(l.addRange(i),l.extend(T.node,T.offset)):(i.setEnd(T.node,T.offset),l.addRange(i)))}}for(i=[],l=s;l=l.parentNode;)l.nodeType===1&&i.push({element:l,left:l.scrollLeft,top:l.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<i.length;s++)l=i[s],l.element.scrollLeft=l.left,l.element.scrollTop=l.top}}var _P=$n&&"documentMode"in document&&11>=document.documentMode,ol=null,fg=null,mc=null,mg=!1;function UT(i,s,l){var c=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;mg||ol==null||ol!==Yo(c)||(c=ol,"selectionStart"in c&&dg(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),mc&&fc(mc,c)||(mc=c,c=Mf(fg,"onSelect"),0<c.length&&(s=new Jo("onSelect","select",null,s,l),i.push({event:s,listeners:c}),s.target=ol)))}function za(i,s){var l={};return l[i.toLowerCase()]=s.toLowerCase(),l["Webkit"+i]="webkit"+s,l["Moz"+i]="moz"+s,l}var ll={animationend:za("Animation","AnimationEnd"),animationiteration:za("Animation","AnimationIteration"),animationstart:za("Animation","AnimationStart"),transitionrun:za("Transition","TransitionRun"),transitionstart:za("Transition","TransitionStart"),transitioncancel:za("Transition","TransitionCancel"),transitionend:za("Transition","TransitionEnd")},pg={},BT={};$n&&(BT=document.createElement("div").style,"AnimationEvent"in window||(delete ll.animationend.animation,delete ll.animationiteration.animation,delete ll.animationstart.animation),"TransitionEvent"in window||delete ll.transitionend.transition);function Fa(i){if(pg[i])return pg[i];if(!ll[i])return i;var s=ll[i],l;for(l in s)if(s.hasOwnProperty(l)&&l in BT)return pg[i]=s[l];return i}var zT=Fa("animationend"),FT=Fa("animationiteration"),qT=Fa("animationstart"),yP=Fa("transitionrun"),vP=Fa("transitionstart"),EP=Fa("transitioncancel"),jT=Fa("transitionend"),HT=new Map,GT="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");function Sr(i,s){HT.set(i,s),Gn(s,[i])}var cr=[],ul=0,gg=0;function ef(){for(var i=ul,s=gg=ul=0;s<i;){var l=cr[s];cr[s++]=null;var c=cr[s];cr[s++]=null;var m=cr[s];cr[s++]=null;var g=cr[s];if(cr[s++]=null,c!==null&&m!==null){var T=c.pending;T===null?m.next=m:(m.next=T.next,T.next=m),c.pending=m}g!==0&&$T(l,m,g)}}function tf(i,s,l,c){cr[ul++]=i,cr[ul++]=s,cr[ul++]=l,cr[ul++]=c,gg|=c,i.lanes|=c,i=i.alternate,i!==null&&(i.lanes|=c)}function _g(i,s,l,c){return tf(i,s,l,c),nf(i)}function As(i,s){return tf(i,null,null,s),nf(i)}function $T(i,s,l){i.lanes|=l;var c=i.alternate;c!==null&&(c.lanes|=l);for(var m=!1,g=i.return;g!==null;)g.childLanes|=l,c=g.alternate,c!==null&&(c.childLanes|=l),g.tag===22&&(i=g.stateNode,i===null||i._visibility&1||(m=!0)),i=g,g=g.return;m&&s!==null&&i.tag===3&&(g=i.stateNode,m=31-Rn(l),g=g.hiddenUpdates,i=g[m],i===null?g[m]=[s]:i.push(s),s.lane=l|536870912)}function nf(i){if(50<Bc)throw Bc=0,b_=null,Error(r(185));for(var s=i.return;s!==null;)i=s,s=i.return;return i.tag===3?i.stateNode:null}var cl={},KT=new WeakMap;function hr(i,s){if(typeof i=="object"&&i!==null){var l=KT.get(i);return l!==void 0?l:(s={value:i,source:s,stack:Ie(s)},KT.set(i,s),s)}return{value:i,source:s,stack:Ie(s)}}var hl=[],dl=0,rf=null,sf=0,dr=[],fr=0,qa=null,Ci=1,Di="";function ja(i,s){hl[dl++]=sf,hl[dl++]=rf,rf=i,sf=s}function QT(i,s,l){dr[fr++]=Ci,dr[fr++]=Di,dr[fr++]=qa,qa=i;var c=Ci;i=Di;var m=32-Rn(c)-1;c&=~(1<<m),l+=1;var g=32-Rn(s)+m;if(30<g){var T=m-m%5;g=(c&(1<<T)-1).toString(32),c>>=T,m-=T,Ci=1<<32-Rn(s)+m|l<<m|c,Di=g+i}else Ci=1<<g|l<<m|c,Di=i}function yg(i){i.return!==null&&(ja(i,1),QT(i,1,0))}function vg(i){for(;i===rf;)rf=hl[--dl],hl[dl]=null,sf=hl[--dl],hl[dl]=null;for(;i===qa;)qa=dr[--fr],dr[fr]=null,Di=dr[--fr],dr[fr]=null,Ci=dr[--fr],dr[fr]=null}var Pn=null,fn=null,We=!1,Rr=null,$r=!1,Eg=Error(r(519));function Ha(i){var s=Error(r(418,""));throw _c(hr(s,i)),Eg}function WT(i){var s=i.stateNode,l=i.type,c=i.memoizedProps;switch(s[tn]=i,s[$t]=c,l){case"dialog":qe("cancel",s),qe("close",s);break;case"iframe":case"object":case"embed":qe("load",s);break;case"video":case"audio":for(l=0;l<Fc.length;l++)qe(Fc[l],s);break;case"source":qe("error",s);break;case"img":case"image":case"link":qe("error",s),qe("load",s);break;case"details":qe("toggle",s);break;case"input":qe("invalid",s),xa(s,c.value,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name,!0),Pa(s);break;case"select":qe("invalid",s);break;case"textarea":qe("invalid",s),bs(s,c.value,c.defaultValue,c.children),Pa(s)}l=c.children,typeof l!="string"&&typeof l!="number"&&typeof l!="bigint"||s.textContent===""+l||c.suppressHydrationWarning===!0||ib(s.textContent,l)?(c.popover!=null&&(qe("beforetoggle",s),qe("toggle",s)),c.onScroll!=null&&qe("scroll",s),c.onScrollEnd!=null&&qe("scrollend",s),c.onClick!=null&&(s.onclick=Lf),s=!0):s=!1,s||Ha(i)}function YT(i){for(Pn=i.return;Pn;)switch(Pn.tag){case 3:case 27:$r=!0;return;case 5:case 13:$r=!1;return;default:Pn=Pn.return}}function pc(i){if(i!==Pn)return!1;if(!We)return YT(i),We=!0,!1;var s=!1,l;if((l=i.tag!==3&&i.tag!==27)&&((l=i.tag===5)&&(l=i.type,l=!(l!=="form"&&l!=="button")||z_(i.type,i.memoizedProps)),l=!l),l&&(s=!0),s&&fn&&Ha(i),YT(i),i.tag===13){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(r(317));e:{for(i=i.nextSibling,s=0;i;){if(i.nodeType===8)if(l=i.data,l==="/$"){if(s===0){fn=Dr(i.nextSibling);break e}s--}else l!=="$"&&l!=="$!"&&l!=="$?"||s++;i=i.nextSibling}fn=null}}else fn=Pn?Dr(i.stateNode.nextSibling):null;return!0}function gc(){fn=Pn=null,We=!1}function _c(i){Rr===null?Rr=[i]:Rr.push(i)}var yc=Error(r(460)),XT=Error(r(474)),Tg={then:function(){}};function ZT(i){return i=i.status,i==="fulfilled"||i==="rejected"}function af(){}function JT(i,s,l){switch(l=i[l],l===void 0?i.push(s):l!==s&&(s.then(af,af),s=l),s.status){case"fulfilled":return s.value;case"rejected":throw i=s.reason,i===yc?Error(r(483)):i;default:if(typeof s.status=="string")s.then(af,af);else{if(i=at,i!==null&&100<i.shellSuspendCounter)throw Error(r(482));i=s,i.status="pending",i.then(function(c){if(s.status==="pending"){var m=s;m.status="fulfilled",m.value=c}},function(c){if(s.status==="pending"){var m=s;m.status="rejected",m.reason=c}})}switch(s.status){case"fulfilled":return s.value;case"rejected":throw i=s.reason,i===yc?Error(r(483)):i}throw vc=s,yc}}var vc=null;function ew(){if(vc===null)throw Error(r(459));var i=vc;return vc=null,i}var fl=null,Ec=0;function of(i){var s=Ec;return Ec+=1,fl===null&&(fl=[]),JT(fl,i,s)}function Tc(i,s){s=s.props.ref,i.ref=s!==void 0?s:null}function lf(i,s){throw s.$$typeof===o?Error(r(525)):(i=Object.prototype.toString.call(s),Error(r(31,i==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":i)))}function tw(i){var s=i._init;return s(i._payload)}function nw(i){function s(B,k){if(i){var j=B.deletions;j===null?(B.deletions=[k],B.flags|=16):j.push(k)}}function l(B,k){if(!i)return null;for(;k!==null;)s(B,k),k=k.sibling;return null}function c(B){for(var k=new Map;B!==null;)B.key!==null?k.set(B.key,B):k.set(B.index,B),B=B.sibling;return k}function m(B,k){return B=Ls(B,k),B.index=0,B.sibling=null,B}function g(B,k,j){return B.index=j,i?(j=B.alternate,j!==null?(j=j.index,j<k?(B.flags|=33554434,k):j):(B.flags|=33554434,k)):(B.flags|=1048576,k)}function T(B){return i&&B.alternate===null&&(B.flags|=33554434),B}function b(B,k,j,J){return k===null||k.tag!==6?(k=p_(j,B.mode,J),k.return=B,k):(k=m(k,j),k.return=B,k)}function C(B,k,j,J){var ye=j.type;return ye===f?Z(B,k,j.props.children,J,j.key):k!==null&&(k.elementType===ye||typeof ye=="object"&&ye!==null&&ye.$$typeof===Y&&tw(ye)===k.type)?(k=m(k,j.props),Tc(k,j),k.return=B,k):(k=Sf(j.type,j.key,j.props,null,B.mode,J),Tc(k,j),k.return=B,k)}function M(B,k,j,J){return k===null||k.tag!==4||k.stateNode.containerInfo!==j.containerInfo||k.stateNode.implementation!==j.implementation?(k=g_(j,B.mode,J),k.return=B,k):(k=m(k,j.children||[]),k.return=B,k)}function Z(B,k,j,J,ye){return k===null||k.tag!==7?(k=eo(j,B.mode,J,ye),k.return=B,k):(k=m(k,j),k.return=B,k)}function ne(B,k,j){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=p_(""+k,B.mode,j),k.return=B,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case u:return j=Sf(k.type,k.key,k.props,null,B.mode,j),Tc(j,k),j.return=B,j;case h:return k=g_(k,B.mode,j),k.return=B,k;case Y:var J=k._init;return k=J(k._payload),ne(B,k,j)}if(me(k)||le(k))return k=eo(k,B.mode,j,null),k.return=B,k;if(typeof k.then=="function")return ne(B,of(k),j);if(k.$$typeof===S)return ne(B,bf(B,k),j);lf(B,k)}return null}function G(B,k,j,J){var ye=k!==null?k.key:null;if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return ye!==null?null:b(B,k,""+j,J);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case u:return j.key===ye?C(B,k,j,J):null;case h:return j.key===ye?M(B,k,j,J):null;case Y:return ye=j._init,j=ye(j._payload),G(B,k,j,J)}if(me(j)||le(j))return ye!==null?null:Z(B,k,j,J,null);if(typeof j.then=="function")return G(B,k,of(j),J);if(j.$$typeof===S)return G(B,k,bf(B,j),J);lf(B,j)}return null}function X(B,k,j,J,ye){if(typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint")return B=B.get(j)||null,b(k,B,""+J,ye);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case u:return B=B.get(J.key===null?j:J.key)||null,C(k,B,J,ye);case h:return B=B.get(J.key===null?j:J.key)||null,M(k,B,J,ye);case Y:var Le=J._init;return J=Le(J._payload),X(B,k,j,J,ye)}if(me(J)||le(J))return B=B.get(j)||null,Z(k,B,J,ye,null);if(typeof J.then=="function")return X(B,k,j,of(J),ye);if(J.$$typeof===S)return X(B,k,j,bf(k,J),ye);lf(k,J)}return null}function Ee(B,k,j,J){for(var ye=null,Le=null,be=k,Se=k=0,on=null;be!==null&&Se<j.length;Se++){be.index>Se?(on=be,be=null):on=be.sibling;var Ye=G(B,be,j[Se],J);if(Ye===null){be===null&&(be=on);break}i&&be&&Ye.alternate===null&&s(B,be),k=g(Ye,k,Se),Le===null?ye=Ye:Le.sibling=Ye,Le=Ye,be=on}if(Se===j.length)return l(B,be),We&&ja(B,Se),ye;if(be===null){for(;Se<j.length;Se++)be=ne(B,j[Se],J),be!==null&&(k=g(be,k,Se),Le===null?ye=be:Le.sibling=be,Le=be);return We&&ja(B,Se),ye}for(be=c(be);Se<j.length;Se++)on=X(be,B,Se,j[Se],J),on!==null&&(i&&on.alternate!==null&&be.delete(on.key===null?Se:on.key),k=g(on,k,Se),Le===null?ye=on:Le.sibling=on,Le=on);return i&&be.forEach(function(Hs){return s(B,Hs)}),We&&ja(B,Se),ye}function Pe(B,k,j,J){if(j==null)throw Error(r(151));for(var ye=null,Le=null,be=k,Se=k=0,on=null,Ye=j.next();be!==null&&!Ye.done;Se++,Ye=j.next()){be.index>Se?(on=be,be=null):on=be.sibling;var Hs=G(B,be,Ye.value,J);if(Hs===null){be===null&&(be=on);break}i&&be&&Hs.alternate===null&&s(B,be),k=g(Hs,k,Se),Le===null?ye=Hs:Le.sibling=Hs,Le=Hs,be=on}if(Ye.done)return l(B,be),We&&ja(B,Se),ye;if(be===null){for(;!Ye.done;Se++,Ye=j.next())Ye=ne(B,Ye.value,J),Ye!==null&&(k=g(Ye,k,Se),Le===null?ye=Ye:Le.sibling=Ye,Le=Ye);return We&&ja(B,Se),ye}for(be=c(be);!Ye.done;Se++,Ye=j.next())Ye=X(be,B,Se,Ye.value,J),Ye!==null&&(i&&Ye.alternate!==null&&be.delete(Ye.key===null?Se:Ye.key),k=g(Ye,k,Se),Le===null?ye=Ye:Le.sibling=Ye,Le=Ye);return i&&be.forEach(function(kx){return s(B,kx)}),We&&ja(B,Se),ye}function Ct(B,k,j,J){if(typeof j=="object"&&j!==null&&j.type===f&&j.key===null&&(j=j.props.children),typeof j=="object"&&j!==null){switch(j.$$typeof){case u:e:{for(var ye=j.key;k!==null;){if(k.key===ye){if(ye=j.type,ye===f){if(k.tag===7){l(B,k.sibling),J=m(k,j.props.children),J.return=B,B=J;break e}}else if(k.elementType===ye||typeof ye=="object"&&ye!==null&&ye.$$typeof===Y&&tw(ye)===k.type){l(B,k.sibling),J=m(k,j.props),Tc(J,j),J.return=B,B=J;break e}l(B,k);break}else s(B,k);k=k.sibling}j.type===f?(J=eo(j.props.children,B.mode,J,j.key),J.return=B,B=J):(J=Sf(j.type,j.key,j.props,null,B.mode,J),Tc(J,j),J.return=B,B=J)}return T(B);case h:e:{for(ye=j.key;k!==null;){if(k.key===ye)if(k.tag===4&&k.stateNode.containerInfo===j.containerInfo&&k.stateNode.implementation===j.implementation){l(B,k.sibling),J=m(k,j.children||[]),J.return=B,B=J;break e}else{l(B,k);break}else s(B,k);k=k.sibling}J=g_(j,B.mode,J),J.return=B,B=J}return T(B);case Y:return ye=j._init,j=ye(j._payload),Ct(B,k,j,J)}if(me(j))return Ee(B,k,j,J);if(le(j)){if(ye=le(j),typeof ye!="function")throw Error(r(150));return j=ye.call(j),Pe(B,k,j,J)}if(typeof j.then=="function")return Ct(B,k,of(j),J);if(j.$$typeof===S)return Ct(B,k,bf(B,j),J);lf(B,j)}return typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint"?(j=""+j,k!==null&&k.tag===6?(l(B,k.sibling),J=m(k,j),J.return=B,B=J):(l(B,k),J=p_(j,B.mode,J),J.return=B,B=J),T(B)):l(B,k)}return function(B,k,j,J){try{Ec=0;var ye=Ct(B,k,j,J);return fl=null,ye}catch(be){if(be===yc)throw be;var Le=_r(29,be,null,B.mode);return Le.lanes=J,Le.return=B,Le}finally{}}}var Ga=nw(!0),rw=nw(!1),ml=Me(null),uf=Me(0);function iw(i,s){i=zi,Ke(uf,i),Ke(ml,s),zi=i|s.baseLanes}function wg(){Ke(uf,zi),Ke(ml,ml.current)}function bg(){zi=uf.current,Ze(ml),Ze(uf)}var mr=Me(null),Kr=null;function Ss(i){var s=i.alternate;Ke(Wt,Wt.current&1),Ke(mr,i),Kr===null&&(s===null||ml.current!==null||s.memoizedState!==null)&&(Kr=i)}function sw(i){if(i.tag===22){if(Ke(Wt,Wt.current),Ke(mr,i),Kr===null){var s=i.alternate;s!==null&&s.memoizedState!==null&&(Kr=i)}}else Rs()}function Rs(){Ke(Wt,Wt.current),Ke(mr,mr.current)}function Pi(i){Ze(mr),Kr===i&&(Kr=null),Ze(Wt)}var Wt=Me(0);function cf(i){for(var s=i;s!==null;){if(s.tag===13){var l=s.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var TP=typeof AbortController<"u"?AbortController:function(){var i=[],s=this.signal={aborted:!1,addEventListener:function(l,c){i.push(c)}};this.abort=function(){s.aborted=!0,i.forEach(function(l){return l()})}},wP=n.unstable_scheduleCallback,bP=n.unstable_NormalPriority,Yt={$$typeof:S,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ig(){return{controller:new TP,data:new Map,refCount:0}}function wc(i){i.refCount--,i.refCount===0&&wP(bP,function(){i.controller.abort()})}var bc=null,Ag=0,pl=0,gl=null;function IP(i,s){if(bc===null){var l=bc=[];Ag=0,pl=x_(),gl={status:"pending",value:void 0,then:function(c){l.push(c)}}}return Ag++,s.then(aw,aw),s}function aw(){if(--Ag===0&&bc!==null){gl!==null&&(gl.status="fulfilled");var i=bc;bc=null,pl=0,gl=null;for(var s=0;s<i.length;s++)(0,i[s])()}}function AP(i,s){var l=[],c={status:"pending",value:null,reason:null,then:function(m){l.push(m)}};return i.then(function(){c.status="fulfilled",c.value=s;for(var m=0;m<l.length;m++)(0,l[m])(s)},function(m){for(c.status="rejected",c.reason=m,m=0;m<l.length;m++)(0,l[m])(void 0)}),c}var ow=A.S;A.S=function(i,s){typeof s=="object"&&s!==null&&typeof s.then=="function"&&IP(i,s),ow!==null&&ow(i,s)};var $a=Me(null);function Sg(){var i=$a.current;return i!==null?i:at.pooledCache}function hf(i,s){s===null?Ke($a,$a.current):Ke($a,s.pool)}function lw(){var i=Sg();return i===null?null:{parent:Yt._currentValue,pool:i}}var Cs=0,Ve=null,rt=null,Bt=null,df=!1,_l=!1,Ka=!1,ff=0,Ic=0,yl=null,SP=0;function kt(){throw Error(r(321))}function Rg(i,s){if(s===null)return!1;for(var l=0;l<s.length&&l<i.length;l++)if(!Kn(i[l],s[l]))return!1;return!0}function Cg(i,s,l,c,m,g){return Cs=g,Ve=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,A.H=i===null||i.memoizedState===null?Qa:Ds,Ka=!1,g=l(c,m),Ka=!1,_l&&(g=cw(s,l,c,m)),uw(i),g}function uw(i){A.H=Qr;var s=rt!==null&&rt.next!==null;if(Cs=0,Bt=rt=Ve=null,df=!1,Ic=0,yl=null,s)throw Error(r(300));i===null||sn||(i=i.dependencies,i!==null&&wf(i)&&(sn=!0))}function cw(i,s,l,c){Ve=i;var m=0;do{if(_l&&(yl=null),Ic=0,_l=!1,25<=m)throw Error(r(301));if(m+=1,Bt=rt=null,i.updateQueue!=null){var g=i.updateQueue;g.lastEffect=null,g.events=null,g.stores=null,g.memoCache!=null&&(g.memoCache.index=0)}A.H=Wa,g=s(l,c)}while(_l);return g}function RP(){var i=A.H,s=i.useState()[0];return s=typeof s.then=="function"?Ac(s):s,i=i.useState()[0],(rt!==null?rt.memoizedState:null)!==i&&(Ve.flags|=1024),s}function Dg(){var i=ff!==0;return ff=0,i}function Pg(i,s,l){s.updateQueue=i.updateQueue,s.flags&=-2053,i.lanes&=~l}function xg(i){if(df){for(i=i.memoizedState;i!==null;){var s=i.queue;s!==null&&(s.pending=null),i=i.next}df=!1}Cs=0,Bt=rt=Ve=null,_l=!1,Ic=ff=0,yl=null}function Bn(){var i={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Bt===null?Ve.memoizedState=Bt=i:Bt=Bt.next=i,Bt}function zt(){if(rt===null){var i=Ve.alternate;i=i!==null?i.memoizedState:null}else i=rt.next;var s=Bt===null?Ve.memoizedState:Bt.next;if(s!==null)Bt=s,rt=i;else{if(i===null)throw Ve.alternate===null?Error(r(467)):Error(r(310));rt=i,i={memoizedState:rt.memoizedState,baseState:rt.baseState,baseQueue:rt.baseQueue,queue:rt.queue,next:null},Bt===null?Ve.memoizedState=Bt=i:Bt=Bt.next=i}return Bt}var mf;mf=function(){return{lastEffect:null,events:null,stores:null,memoCache:null}};function Ac(i){var s=Ic;return Ic+=1,yl===null&&(yl=[]),i=JT(yl,i,s),s=Ve,(Bt===null?s.memoizedState:Bt.next)===null&&(s=s.alternate,A.H=s===null||s.memoizedState===null?Qa:Ds),i}function pf(i){if(i!==null&&typeof i=="object"){if(typeof i.then=="function")return Ac(i);if(i.$$typeof===S)return Tn(i)}throw Error(r(438,String(i)))}function Ng(i){var s=null,l=Ve.updateQueue;if(l!==null&&(s=l.memoCache),s==null){var c=Ve.alternate;c!==null&&(c=c.updateQueue,c!==null&&(c=c.memoCache,c!=null&&(s={data:c.data.map(function(m){return m.slice()}),index:0})))}if(s==null&&(s={data:[],index:0}),l===null&&(l=mf(),Ve.updateQueue=l),l.memoCache=s,l=s.data[s.index],l===void 0)for(l=s.data[s.index]=Array(i),c=0;c<i;c++)l[c]=oe;return s.index++,l}function xi(i,s){return typeof s=="function"?s(i):s}function gf(i){var s=zt();return Og(s,rt,i)}function Og(i,s,l){var c=i.queue;if(c===null)throw Error(r(311));c.lastRenderedReducer=l;var m=i.baseQueue,g=c.pending;if(g!==null){if(m!==null){var T=m.next;m.next=g.next,g.next=T}s.baseQueue=m=g,c.pending=null}if(g=i.baseState,m===null)i.memoizedState=g;else{s=m.next;var b=T=null,C=null,M=s,Z=!1;do{var ne=M.lane&-536870913;if(ne!==M.lane?(Ge&ne)===ne:(Cs&ne)===ne){var G=M.revertLane;if(G===0)C!==null&&(C=C.next={lane:0,revertLane:0,action:M.action,hasEagerState:M.hasEagerState,eagerState:M.eagerState,next:null}),ne===pl&&(Z=!0);else if((Cs&G)===G){M=M.next,G===pl&&(Z=!0);continue}else ne={lane:0,revertLane:M.revertLane,action:M.action,hasEagerState:M.hasEagerState,eagerState:M.eagerState,next:null},C===null?(b=C=ne,T=g):C=C.next=ne,Ve.lanes|=G,Us|=G;ne=M.action,Ka&&l(g,ne),g=M.hasEagerState?M.eagerState:l(g,ne)}else G={lane:ne,revertLane:M.revertLane,action:M.action,hasEagerState:M.hasEagerState,eagerState:M.eagerState,next:null},C===null?(b=C=G,T=g):C=C.next=G,Ve.lanes|=ne,Us|=ne;M=M.next}while(M!==null&&M!==s);if(C===null?T=g:C.next=b,!Kn(g,i.memoizedState)&&(sn=!0,Z&&(l=gl,l!==null)))throw l;i.memoizedState=g,i.baseState=T,i.baseQueue=C,c.lastRenderedState=g}return m===null&&(c.lanes=0),[i.memoizedState,c.dispatch]}function kg(i){var s=zt(),l=s.queue;if(l===null)throw Error(r(311));l.lastRenderedReducer=i;var c=l.dispatch,m=l.pending,g=s.memoizedState;if(m!==null){l.pending=null;var T=m=m.next;do g=i(g,T.action),T=T.next;while(T!==m);Kn(g,s.memoizedState)||(sn=!0),s.memoizedState=g,s.baseQueue===null&&(s.baseState=g),l.lastRenderedState=g}return[g,c]}function hw(i,s,l){var c=Ve,m=zt(),g=We;if(g){if(l===void 0)throw Error(r(407));l=l()}else l=s();var T=!Kn((rt||m).memoizedState,l);if(T&&(m.memoizedState=l,sn=!0),m=m.queue,Lg(mw.bind(null,c,m,i),[i]),m.getSnapshot!==s||T||Bt!==null&&Bt.memoizedState.tag&1){if(c.flags|=2048,vl(9,fw.bind(null,c,m,l,s),{destroy:void 0},null),at===null)throw Error(r(349));g||(Cs&60)!==0||dw(c,s,l)}return l}function dw(i,s,l){i.flags|=16384,i={getSnapshot:s,value:l},s=Ve.updateQueue,s===null?(s=mf(),Ve.updateQueue=s,s.stores=[i]):(l=s.stores,l===null?s.stores=[i]:l.push(i))}function fw(i,s,l,c){s.value=l,s.getSnapshot=c,pw(s)&&gw(i)}function mw(i,s,l){return l(function(){pw(s)&&gw(i)})}function pw(i){var s=i.getSnapshot;i=i.value;try{var l=s();return!Kn(i,l)}catch{return!0}}function gw(i){var s=As(i,2);s!==null&&xn(s,i,2)}function Vg(i){var s=Bn();if(typeof i=="function"){var l=i;if(i=l(),Ka){Vr(!0);try{l()}finally{Vr(!1)}}}return s.memoizedState=s.baseState=i,s.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:xi,lastRenderedState:i},s}function _w(i,s,l,c){return i.baseState=l,Og(i,rt,typeof c=="function"?c:xi)}function CP(i,s,l,c,m){if(vf(i))throw Error(r(485));if(i=s.action,i!==null){var g={payload:m,action:i,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(T){g.listeners.push(T)}};A.T!==null?l(!0):g.isTransition=!1,c(g),l=s.pending,l===null?(g.next=s.pending=g,yw(s,g)):(g.next=l.next,s.pending=l.next=g)}}function yw(i,s){var l=s.action,c=s.payload,m=i.state;if(s.isTransition){var g=A.T,T={};A.T=T;try{var b=l(m,c),C=A.S;C!==null&&C(T,b),vw(i,s,b)}catch(M){Mg(i,s,M)}finally{A.T=g}}else try{g=l(m,c),vw(i,s,g)}catch(M){Mg(i,s,M)}}function vw(i,s,l){l!==null&&typeof l=="object"&&typeof l.then=="function"?l.then(function(c){Ew(i,s,c)},function(c){return Mg(i,s,c)}):Ew(i,s,l)}function Ew(i,s,l){s.status="fulfilled",s.value=l,Tw(s),i.state=l,s=i.pending,s!==null&&(l=s.next,l===s?i.pending=null:(l=l.next,s.next=l,yw(i,l)))}function Mg(i,s,l){var c=i.pending;if(i.pending=null,c!==null){c=c.next;do s.status="rejected",s.reason=l,Tw(s),s=s.next;while(s!==c)}i.action=null}function Tw(i){i=i.listeners;for(var s=0;s<i.length;s++)(0,i[s])()}function ww(i,s){return s}function bw(i,s){if(We){var l=at.formState;if(l!==null){e:{var c=Ve;if(We){if(fn){t:{for(var m=fn,g=$r;m.nodeType!==8;){if(!g){m=null;break t}if(m=Dr(m.nextSibling),m===null){m=null;break t}}g=m.data,m=g==="F!"||g==="F"?m:null}if(m){fn=Dr(m.nextSibling),c=m.data==="F!";break e}}Ha(c)}c=!1}c&&(s=l[0])}}return l=Bn(),l.memoizedState=l.baseState=s,c={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ww,lastRenderedState:s},l.queue=c,l=Fw.bind(null,Ve,c),c.dispatch=l,c=Vg(!1),g=qg.bind(null,Ve,!1,c.queue),c=Bn(),m={state:s,dispatch:null,action:i,pending:null},c.queue=m,l=CP.bind(null,Ve,m,g,l),m.dispatch=l,c.memoizedState=i,[s,l,!1]}function Iw(i){var s=zt();return Aw(s,rt,i)}function Aw(i,s,l){s=Og(i,s,ww)[0],i=gf(xi)[0],s=typeof s=="object"&&s!==null&&typeof s.then=="function"?Ac(s):s;var c=zt(),m=c.queue,g=m.dispatch;return l!==c.memoizedState&&(Ve.flags|=2048,vl(9,DP.bind(null,m,l),{destroy:void 0},null)),[s,g,i]}function DP(i,s){i.action=s}function Sw(i){var s=zt(),l=rt;if(l!==null)return Aw(s,l,i);zt(),s=s.memoizedState,l=zt();var c=l.queue.dispatch;return l.memoizedState=i,[s,c,!1]}function vl(i,s,l,c){return i={tag:i,create:s,inst:l,deps:c,next:null},s=Ve.updateQueue,s===null&&(s=mf(),Ve.updateQueue=s),l=s.lastEffect,l===null?s.lastEffect=i.next=i:(c=l.next,l.next=i,i.next=c,s.lastEffect=i),i}function Rw(){return zt().memoizedState}function _f(i,s,l,c){var m=Bn();Ve.flags|=i,m.memoizedState=vl(1|s,l,{destroy:void 0},c===void 0?null:c)}function yf(i,s,l,c){var m=zt();c=c===void 0?null:c;var g=m.memoizedState.inst;rt!==null&&c!==null&&Rg(c,rt.memoizedState.deps)?m.memoizedState=vl(s,l,g,c):(Ve.flags|=i,m.memoizedState=vl(1|s,l,g,c))}function Cw(i,s){_f(8390656,8,i,s)}function Lg(i,s){yf(2048,8,i,s)}function Dw(i,s){return yf(4,2,i,s)}function Pw(i,s){return yf(4,4,i,s)}function xw(i,s){if(typeof s=="function"){i=i();var l=s(i);return function(){typeof l=="function"?l():s(null)}}if(s!=null)return i=i(),s.current=i,function(){s.current=null}}function Nw(i,s,l){l=l!=null?l.concat([i]):null,yf(4,4,xw.bind(null,s,i),l)}function Ug(){}function Ow(i,s){var l=zt();s=s===void 0?null:s;var c=l.memoizedState;return s!==null&&Rg(s,c[1])?c[0]:(l.memoizedState=[i,s],i)}function kw(i,s){var l=zt();s=s===void 0?null:s;var c=l.memoizedState;if(s!==null&&Rg(s,c[1]))return c[0];if(c=i(),Ka){Vr(!0);try{i()}finally{Vr(!1)}}return l.memoizedState=[c,s],c}function Bg(i,s,l){return l===void 0||(Cs&1073741824)!==0?i.memoizedState=s:(i.memoizedState=l,i=M0(),Ve.lanes|=i,Us|=i,l)}function Vw(i,s,l,c){return Kn(l,s)?l:ml.current!==null?(i=Bg(i,l,c),Kn(i,s)||(sn=!0),i):(Cs&42)===0?(sn=!0,i.memoizedState=l):(i=M0(),Ve.lanes|=i,Us|=i,s)}function Mw(i,s,l,c,m){var g=fe.p;fe.p=g!==0&&8>g?g:8;var T=A.T,b={};A.T=b,qg(i,!1,s,l);try{var C=m(),M=A.S;if(M!==null&&M(b,C),C!==null&&typeof C=="object"&&typeof C.then=="function"){var Z=AP(C,c);Sc(i,s,Z,Xn(i))}else Sc(i,s,c,Xn(i))}catch(ne){Sc(i,s,{then:function(){},status:"rejected",reason:ne},Xn())}finally{fe.p=g,A.T=T}}function PP(){}function zg(i,s,l,c){if(i.tag!==5)throw Error(r(476));var m=Lw(i).queue;Mw(i,m,s,De,l===null?PP:function(){return Uw(i),l(c)})}function Lw(i){var s=i.memoizedState;if(s!==null)return s;s={memoizedState:De,baseState:De,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:xi,lastRenderedState:De},next:null};var l={};return s.next={memoizedState:l,baseState:l,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:xi,lastRenderedState:l},next:null},i.memoizedState=s,i=i.alternate,i!==null&&(i.memoizedState=s),s}function Uw(i){var s=Lw(i).next.queue;Sc(i,s,{},Xn())}function Fg(){return Tn($c)}function Bw(){return zt().memoizedState}function zw(){return zt().memoizedState}function xP(i){for(var s=i.return;s!==null;){switch(s.tag){case 24:case 3:var l=Xn();i=Ns(l);var c=Os(s,i,l);c!==null&&(xn(c,s,l),Dc(c,s,l)),s={cache:Ig()},i.payload=s;return}s=s.return}}function NP(i,s,l){var c=Xn();l={lane:c,revertLane:0,action:l,hasEagerState:!1,eagerState:null,next:null},vf(i)?qw(s,l):(l=_g(i,s,l,c),l!==null&&(xn(l,i,c),jw(l,s,c)))}function Fw(i,s,l){var c=Xn();Sc(i,s,l,c)}function Sc(i,s,l,c){var m={lane:c,revertLane:0,action:l,hasEagerState:!1,eagerState:null,next:null};if(vf(i))qw(s,m);else{var g=i.alternate;if(i.lanes===0&&(g===null||g.lanes===0)&&(g=s.lastRenderedReducer,g!==null))try{var T=s.lastRenderedState,b=g(T,l);if(m.hasEagerState=!0,m.eagerState=b,Kn(b,T))return tf(i,s,m,0),at===null&&ef(),!1}catch{}finally{}if(l=_g(i,s,m,c),l!==null)return xn(l,i,c),jw(l,s,c),!0}return!1}function qg(i,s,l,c){if(c={lane:2,revertLane:x_(),action:c,hasEagerState:!1,eagerState:null,next:null},vf(i)){if(s)throw Error(r(479))}else s=_g(i,l,c,2),s!==null&&xn(s,i,2)}function vf(i){var s=i.alternate;return i===Ve||s!==null&&s===Ve}function qw(i,s){_l=df=!0;var l=i.pending;l===null?s.next=s:(s.next=l.next,l.next=s),i.pending=s}function jw(i,s,l){if((l&4194176)!==0){var c=s.lanes;c&=i.pendingLanes,l|=c,s.lanes=l,ps(i,l)}}var Qr={readContext:Tn,use:pf,useCallback:kt,useContext:kt,useEffect:kt,useImperativeHandle:kt,useLayoutEffect:kt,useInsertionEffect:kt,useMemo:kt,useReducer:kt,useRef:kt,useState:kt,useDebugValue:kt,useDeferredValue:kt,useTransition:kt,useSyncExternalStore:kt,useId:kt};Qr.useCacheRefresh=kt,Qr.useMemoCache=kt,Qr.useHostTransitionStatus=kt,Qr.useFormState=kt,Qr.useActionState=kt,Qr.useOptimistic=kt;var Qa={readContext:Tn,use:pf,useCallback:function(i,s){return Bn().memoizedState=[i,s===void 0?null:s],i},useContext:Tn,useEffect:Cw,useImperativeHandle:function(i,s,l){l=l!=null?l.concat([i]):null,_f(4194308,4,xw.bind(null,s,i),l)},useLayoutEffect:function(i,s){return _f(4194308,4,i,s)},useInsertionEffect:function(i,s){_f(4,2,i,s)},useMemo:function(i,s){var l=Bn();s=s===void 0?null:s;var c=i();if(Ka){Vr(!0);try{i()}finally{Vr(!1)}}return l.memoizedState=[c,s],c},useReducer:function(i,s,l){var c=Bn();if(l!==void 0){var m=l(s);if(Ka){Vr(!0);try{l(s)}finally{Vr(!1)}}}else m=s;return c.memoizedState=c.baseState=m,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:i,lastRenderedState:m},c.queue=i,i=i.dispatch=NP.bind(null,Ve,i),[c.memoizedState,i]},useRef:function(i){var s=Bn();return i={current:i},s.memoizedState=i},useState:function(i){i=Vg(i);var s=i.queue,l=Fw.bind(null,Ve,s);return s.dispatch=l,[i.memoizedState,l]},useDebugValue:Ug,useDeferredValue:function(i,s){var l=Bn();return Bg(l,i,s)},useTransition:function(){var i=Vg(!1);return i=Mw.bind(null,Ve,i.queue,!0,!1),Bn().memoizedState=i,[!1,i]},useSyncExternalStore:function(i,s,l){var c=Ve,m=Bn();if(We){if(l===void 0)throw Error(r(407));l=l()}else{if(l=s(),at===null)throw Error(r(349));(Ge&60)!==0||dw(c,s,l)}m.memoizedState=l;var g={value:l,getSnapshot:s};return m.queue=g,Cw(mw.bind(null,c,g,i),[i]),c.flags|=2048,vl(9,fw.bind(null,c,g,l,s),{destroy:void 0},null),l},useId:function(){var i=Bn(),s=at.identifierPrefix;if(We){var l=Di,c=Ci;l=(c&~(1<<32-Rn(c)-1)).toString(32)+l,s=":"+s+"R"+l,l=ff++,0<l&&(s+="H"+l.toString(32)),s+=":"}else l=SP++,s=":"+s+"r"+l.toString(32)+":";return i.memoizedState=s},useCacheRefresh:function(){return Bn().memoizedState=xP.bind(null,Ve)}};Qa.useMemoCache=Ng,Qa.useHostTransitionStatus=Fg,Qa.useFormState=bw,Qa.useActionState=bw,Qa.useOptimistic=function(i){var s=Bn();s.memoizedState=s.baseState=i;var l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return s.queue=l,s=qg.bind(null,Ve,!0,l),l.dispatch=s,[i,s]};var Ds={readContext:Tn,use:pf,useCallback:Ow,useContext:Tn,useEffect:Lg,useImperativeHandle:Nw,useInsertionEffect:Dw,useLayoutEffect:Pw,useMemo:kw,useReducer:gf,useRef:Rw,useState:function(){return gf(xi)},useDebugValue:Ug,useDeferredValue:function(i,s){var l=zt();return Vw(l,rt.memoizedState,i,s)},useTransition:function(){var i=gf(xi)[0],s=zt().memoizedState;return[typeof i=="boolean"?i:Ac(i),s]},useSyncExternalStore:hw,useId:Bw};Ds.useCacheRefresh=zw,Ds.useMemoCache=Ng,Ds.useHostTransitionStatus=Fg,Ds.useFormState=Iw,Ds.useActionState=Iw,Ds.useOptimistic=function(i,s){var l=zt();return _w(l,rt,i,s)};var Wa={readContext:Tn,use:pf,useCallback:Ow,useContext:Tn,useEffect:Lg,useImperativeHandle:Nw,useInsertionEffect:Dw,useLayoutEffect:Pw,useMemo:kw,useReducer:kg,useRef:Rw,useState:function(){return kg(xi)},useDebugValue:Ug,useDeferredValue:function(i,s){var l=zt();return rt===null?Bg(l,i,s):Vw(l,rt.memoizedState,i,s)},useTransition:function(){var i=kg(xi)[0],s=zt().memoizedState;return[typeof i=="boolean"?i:Ac(i),s]},useSyncExternalStore:hw,useId:Bw};Wa.useCacheRefresh=zw,Wa.useMemoCache=Ng,Wa.useHostTransitionStatus=Fg,Wa.useFormState=Sw,Wa.useActionState=Sw,Wa.useOptimistic=function(i,s){var l=zt();return rt!==null?_w(l,rt,i,s):(l.baseState=i,[i,l.queue.dispatch])};function jg(i,s,l,c){s=i.memoizedState,l=l(c,s),l=l==null?s:x({},s,l),i.memoizedState=l,i.lanes===0&&(i.updateQueue.baseState=l)}var Hg={isMounted:function(i){return(i=i._reactInternals)?we(i)===i:!1},enqueueSetState:function(i,s,l){i=i._reactInternals;var c=Xn(),m=Ns(c);m.payload=s,l!=null&&(m.callback=l),s=Os(i,m,c),s!==null&&(xn(s,i,c),Dc(s,i,c))},enqueueReplaceState:function(i,s,l){i=i._reactInternals;var c=Xn(),m=Ns(c);m.tag=1,m.payload=s,l!=null&&(m.callback=l),s=Os(i,m,c),s!==null&&(xn(s,i,c),Dc(s,i,c))},enqueueForceUpdate:function(i,s){i=i._reactInternals;var l=Xn(),c=Ns(l);c.tag=2,s!=null&&(c.callback=s),s=Os(i,c,l),s!==null&&(xn(s,i,l),Dc(s,i,l))}};function Hw(i,s,l,c,m,g,T){return i=i.stateNode,typeof i.shouldComponentUpdate=="function"?i.shouldComponentUpdate(c,g,T):s.prototype&&s.prototype.isPureReactComponent?!fc(l,c)||!fc(m,g):!0}function Gw(i,s,l,c){i=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(l,c),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(l,c),s.state!==i&&Hg.enqueueReplaceState(s,s.state,null)}function Ya(i,s){var l=s;if("ref"in s){l={};for(var c in s)c!=="ref"&&(l[c]=s[c])}if(i=i.defaultProps){l===s&&(l=x({},l));for(var m in i)l[m]===void 0&&(l[m]=i[m])}return l}var Ef=typeof reportError=="function"?reportError:function(i){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var s=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof i=="object"&&i!==null&&typeof i.message=="string"?String(i.message):String(i),error:i});if(!window.dispatchEvent(s))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",i);return}console.error(i)};function $w(i){Ef(i)}function Kw(i){console.error(i)}function Qw(i){Ef(i)}function Tf(i,s){try{var l=i.onUncaughtError;l(s.value,{componentStack:s.stack})}catch(c){setTimeout(function(){throw c})}}function Ww(i,s,l){try{var c=i.onCaughtError;c(l.value,{componentStack:l.stack,errorBoundary:s.tag===1?s.stateNode:null})}catch(m){setTimeout(function(){throw m})}}function Gg(i,s,l){return l=Ns(l),l.tag=3,l.payload={element:null},l.callback=function(){Tf(i,s)},l}function Yw(i){return i=Ns(i),i.tag=3,i}function Xw(i,s,l,c){var m=l.type.getDerivedStateFromError;if(typeof m=="function"){var g=c.value;i.payload=function(){return m(g)},i.callback=function(){Ww(s,l,c)}}var T=l.stateNode;T!==null&&typeof T.componentDidCatch=="function"&&(i.callback=function(){Ww(s,l,c),typeof m!="function"&&(Bs===null?Bs=new Set([this]):Bs.add(this));var b=c.stack;this.componentDidCatch(c.value,{componentStack:b!==null?b:""})})}function OP(i,s,l,c,m){if(l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){if(s=l.alternate,s!==null&&Cc(s,l,m,!0),l=mr.current,l!==null){switch(l.tag){case 13:return Kr===null?S_():l.alternate===null&&Rt===0&&(Rt=3),l.flags&=-257,l.flags|=65536,l.lanes=m,c===Tg?l.flags|=16384:(s=l.updateQueue,s===null?l.updateQueue=new Set([c]):s.add(c),C_(i,c,m)),!1;case 22:return l.flags|=65536,c===Tg?l.flags|=16384:(s=l.updateQueue,s===null?(s={transitions:null,markerInstances:null,retryQueue:new Set([c])},l.updateQueue=s):(l=s.retryQueue,l===null?s.retryQueue=new Set([c]):l.add(c)),C_(i,c,m)),!1}throw Error(r(435,l.tag))}return C_(i,c,m),S_(),!1}if(We)return s=mr.current,s!==null?((s.flags&65536)===0&&(s.flags|=256),s.flags|=65536,s.lanes=m,c!==Eg&&(i=Error(r(422),{cause:c}),_c(hr(i,l)))):(c!==Eg&&(s=Error(r(423),{cause:c}),_c(hr(s,l))),i=i.current.alternate,i.flags|=65536,m&=-m,i.lanes|=m,c=hr(c,l),m=Gg(i.stateNode,c,m),a_(i,m),Rt!==4&&(Rt=2)),!1;var g=Error(r(520),{cause:c});if(g=hr(g,l),Lc===null?Lc=[g]:Lc.push(g),Rt!==4&&(Rt=2),s===null)return!0;c=hr(c,l),l=s;do{switch(l.tag){case 3:return l.flags|=65536,i=m&-m,l.lanes|=i,i=Gg(l.stateNode,c,i),a_(l,i),!1;case 1:if(s=l.type,g=l.stateNode,(l.flags&128)===0&&(typeof s.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Bs===null||!Bs.has(g))))return l.flags|=65536,m&=-m,l.lanes|=m,m=Yw(m),Xw(m,i,l,c),a_(l,m),!1}l=l.return}while(l!==null);return!1}var Zw=Error(r(461)),sn=!1;function mn(i,s,l,c){s.child=i===null?rw(s,null,l,c):Ga(s,i.child,l,c)}function Jw(i,s,l,c,m){l=l.render;var g=s.ref;if("ref"in c){var T={};for(var b in c)b!=="ref"&&(T[b]=c[b])}else T=c;return Za(s),c=Cg(i,s,l,T,g,m),b=Dg(),i!==null&&!sn?(Pg(i,s,m),Ni(i,s,m)):(We&&b&&yg(s),s.flags|=1,mn(i,s,c,m),s.child)}function e0(i,s,l,c,m){if(i===null){var g=l.type;return typeof g=="function"&&!m_(g)&&g.defaultProps===void 0&&l.compare===null?(s.tag=15,s.type=g,t0(i,s,g,c,m)):(i=Sf(l.type,null,c,s,s.mode,m),i.ref=s.ref,i.return=s,s.child=i)}if(g=i.child,!e_(i,m)){var T=g.memoizedProps;if(l=l.compare,l=l!==null?l:fc,l(T,c)&&i.ref===s.ref)return Ni(i,s,m)}return s.flags|=1,i=Ls(g,c),i.ref=s.ref,i.return=s,s.child=i}function t0(i,s,l,c,m){if(i!==null){var g=i.memoizedProps;if(fc(g,c)&&i.ref===s.ref)if(sn=!1,s.pendingProps=c=g,e_(i,m))(i.flags&131072)!==0&&(sn=!0);else return s.lanes=i.lanes,Ni(i,s,m)}return $g(i,s,l,c,m)}function n0(i,s,l){var c=s.pendingProps,m=c.children,g=(s.stateNode._pendingVisibility&2)!==0,T=i!==null?i.memoizedState:null;if(Rc(i,s),c.mode==="hidden"||g){if((s.flags&128)!==0){if(c=T!==null?T.baseLanes|l:l,i!==null){for(m=s.child=i.child,g=0;m!==null;)g=g|m.lanes|m.childLanes,m=m.sibling;s.childLanes=g&~c}else s.childLanes=0,s.child=null;return r0(i,s,c,l)}if((l&536870912)!==0)s.memoizedState={baseLanes:0,cachePool:null},i!==null&&hf(s,T!==null?T.cachePool:null),T!==null?iw(s,T):wg(),sw(s);else return s.lanes=s.childLanes=536870912,r0(i,s,T!==null?T.baseLanes|l:l,l)}else T!==null?(hf(s,T.cachePool),iw(s,T),Rs(),s.memoizedState=null):(i!==null&&hf(s,null),wg(),Rs());return mn(i,s,m,l),s.child}function r0(i,s,l,c){var m=Sg();return m=m===null?null:{parent:Yt._currentValue,pool:m},s.memoizedState={baseLanes:l,cachePool:m},i!==null&&hf(s,null),wg(),sw(s),i!==null&&Cc(i,s,c,!0),null}function Rc(i,s){var l=s.ref;if(l===null)i!==null&&i.ref!==null&&(s.flags|=2097664);else{if(typeof l!="function"&&typeof l!="object")throw Error(r(284));(i===null||i.ref!==l)&&(s.flags|=2097664)}}function $g(i,s,l,c,m){return Za(s),l=Cg(i,s,l,c,void 0,m),c=Dg(),i!==null&&!sn?(Pg(i,s,m),Ni(i,s,m)):(We&&c&&yg(s),s.flags|=1,mn(i,s,l,m),s.child)}function i0(i,s,l,c,m,g){return Za(s),s.updateQueue=null,l=cw(s,c,l,m),uw(i),c=Dg(),i!==null&&!sn?(Pg(i,s,g),Ni(i,s,g)):(We&&c&&yg(s),s.flags|=1,mn(i,s,l,g),s.child)}function s0(i,s,l,c,m){if(Za(s),s.stateNode===null){var g=cl,T=l.contextType;typeof T=="object"&&T!==null&&(g=Tn(T)),g=new l(c,g),s.memoizedState=g.state!==null&&g.state!==void 0?g.state:null,g.updater=Hg,s.stateNode=g,g._reactInternals=s,g=s.stateNode,g.props=c,g.state=s.memoizedState,g.refs={},i_(s),T=l.contextType,g.context=typeof T=="object"&&T!==null?Tn(T):cl,g.state=s.memoizedState,T=l.getDerivedStateFromProps,typeof T=="function"&&(jg(s,l,T,c),g.state=s.memoizedState),typeof l.getDerivedStateFromProps=="function"||typeof g.getSnapshotBeforeUpdate=="function"||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(T=g.state,typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount(),T!==g.state&&Hg.enqueueReplaceState(g,g.state,null),xc(s,c,g,m),Pc(),g.state=s.memoizedState),typeof g.componentDidMount=="function"&&(s.flags|=4194308),c=!0}else if(i===null){g=s.stateNode;var b=s.memoizedProps,C=Ya(l,b);g.props=C;var M=g.context,Z=l.contextType;T=cl,typeof Z=="object"&&Z!==null&&(T=Tn(Z));var ne=l.getDerivedStateFromProps;Z=typeof ne=="function"||typeof g.getSnapshotBeforeUpdate=="function",b=s.pendingProps!==b,Z||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(b||M!==T)&&Gw(s,g,c,T),xs=!1;var G=s.memoizedState;g.state=G,xc(s,c,g,m),Pc(),M=s.memoizedState,b||G!==M||xs?(typeof ne=="function"&&(jg(s,l,ne,c),M=s.memoizedState),(C=xs||Hw(s,l,C,c,G,M,T))?(Z||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount()),typeof g.componentDidMount=="function"&&(s.flags|=4194308)):(typeof g.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=c,s.memoizedState=M),g.props=c,g.state=M,g.context=T,c=C):(typeof g.componentDidMount=="function"&&(s.flags|=4194308),c=!1)}else{g=s.stateNode,s_(i,s),T=s.memoizedProps,Z=Ya(l,T),g.props=Z,ne=s.pendingProps,G=g.context,M=l.contextType,C=cl,typeof M=="object"&&M!==null&&(C=Tn(M)),b=l.getDerivedStateFromProps,(M=typeof b=="function"||typeof g.getSnapshotBeforeUpdate=="function")||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(T!==ne||G!==C)&&Gw(s,g,c,C),xs=!1,G=s.memoizedState,g.state=G,xc(s,c,g,m),Pc();var X=s.memoizedState;T!==ne||G!==X||xs||i!==null&&i.dependencies!==null&&wf(i.dependencies)?(typeof b=="function"&&(jg(s,l,b,c),X=s.memoizedState),(Z=xs||Hw(s,l,Z,c,G,X,C)||i!==null&&i.dependencies!==null&&wf(i.dependencies))?(M||typeof g.UNSAFE_componentWillUpdate!="function"&&typeof g.componentWillUpdate!="function"||(typeof g.componentWillUpdate=="function"&&g.componentWillUpdate(c,X,C),typeof g.UNSAFE_componentWillUpdate=="function"&&g.UNSAFE_componentWillUpdate(c,X,C)),typeof g.componentDidUpdate=="function"&&(s.flags|=4),typeof g.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof g.componentDidUpdate!="function"||T===i.memoizedProps&&G===i.memoizedState||(s.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||T===i.memoizedProps&&G===i.memoizedState||(s.flags|=1024),s.memoizedProps=c,s.memoizedState=X),g.props=c,g.state=X,g.context=C,c=Z):(typeof g.componentDidUpdate!="function"||T===i.memoizedProps&&G===i.memoizedState||(s.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||T===i.memoizedProps&&G===i.memoizedState||(s.flags|=1024),c=!1)}return g=c,Rc(i,s),c=(s.flags&128)!==0,g||c?(g=s.stateNode,l=c&&typeof l.getDerivedStateFromError!="function"?null:g.render(),s.flags|=1,i!==null&&c?(s.child=Ga(s,i.child,null,m),s.child=Ga(s,null,l,m)):mn(i,s,l,m),s.memoizedState=g.state,i=s.child):i=Ni(i,s,m),i}function a0(i,s,l,c){return gc(),s.flags|=256,mn(i,s,l,c),s.child}var Kg={dehydrated:null,treeContext:null,retryLane:0};function Qg(i){return{baseLanes:i,cachePool:lw()}}function Wg(i,s,l){return i=i!==null?i.childLanes&~l:0,s&&(i|=yr),i}function o0(i,s,l){var c=s.pendingProps,m=!1,g=(s.flags&128)!==0,T;if((T=g)||(T=i!==null&&i.memoizedState===null?!1:(Wt.current&2)!==0),T&&(m=!0,s.flags&=-129),T=(s.flags&32)!==0,s.flags&=-33,i===null){if(We){if(m?Ss(s):Rs(),We){var b=fn,C;if(C=b){e:{for(C=b,b=$r;C.nodeType!==8;){if(!b){b=null;break e}if(C=Dr(C.nextSibling),C===null){b=null;break e}}b=C}b!==null?(s.memoizedState={dehydrated:b,treeContext:qa!==null?{id:Ci,overflow:Di}:null,retryLane:536870912},C=_r(18,null,null,0),C.stateNode=b,C.return=s,s.child=C,Pn=s,fn=null,C=!0):C=!1}C||Ha(s)}if(b=s.memoizedState,b!==null&&(b=b.dehydrated,b!==null))return b.data==="$!"?s.lanes=16:s.lanes=536870912,null;Pi(s)}return b=c.children,c=c.fallback,m?(Rs(),m=s.mode,b=Xg({mode:"hidden",children:b},m),c=eo(c,m,l,null),b.return=s,c.return=s,b.sibling=c,s.child=b,m=s.child,m.memoizedState=Qg(l),m.childLanes=Wg(i,T,l),s.memoizedState=Kg,c):(Ss(s),Yg(s,b))}if(C=i.memoizedState,C!==null&&(b=C.dehydrated,b!==null)){if(g)s.flags&256?(Ss(s),s.flags&=-257,s=Zg(i,s,l)):s.memoizedState!==null?(Rs(),s.child=i.child,s.flags|=128,s=null):(Rs(),m=c.fallback,b=s.mode,c=Xg({mode:"visible",children:c.children},b),m=eo(m,b,l,null),m.flags|=2,c.return=s,m.return=s,c.sibling=m,s.child=c,Ga(s,i.child,null,l),c=s.child,c.memoizedState=Qg(l),c.childLanes=Wg(i,T,l),s.memoizedState=Kg,s=m);else if(Ss(s),b.data==="$!"){if(T=b.nextSibling&&b.nextSibling.dataset,T)var M=T.dgst;T=M,c=Error(r(419)),c.stack="",c.digest=T,_c({value:c,source:null,stack:null}),s=Zg(i,s,l)}else if(sn||Cc(i,s,l,!1),T=(l&i.childLanes)!==0,sn||T){if(T=at,T!==null){if(c=l&-l,(c&42)!==0)c=1;else switch(c){case 2:c=1;break;case 8:c=4;break;case 32:c=16;break;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:c=64;break;case 268435456:c=134217728;break;default:c=0}if(c=(c&(T.suspendedLanes|l))!==0?0:c,c!==0&&c!==C.retryLane)throw C.retryLane=c,As(i,c),xn(T,i,c),Zw}b.data==="$?"||S_(),s=Zg(i,s,l)}else b.data==="$?"?(s.flags|=128,s.child=i.child,s=QP.bind(null,i),b._reactRetry=s,s=null):(i=C.treeContext,fn=Dr(b.nextSibling),Pn=s,We=!0,Rr=null,$r=!1,i!==null&&(dr[fr++]=Ci,dr[fr++]=Di,dr[fr++]=qa,Ci=i.id,Di=i.overflow,qa=s),s=Yg(s,c.children),s.flags|=4096);return s}return m?(Rs(),m=c.fallback,b=s.mode,C=i.child,M=C.sibling,c=Ls(C,{mode:"hidden",children:c.children}),c.subtreeFlags=C.subtreeFlags&31457280,M!==null?m=Ls(M,m):(m=eo(m,b,l,null),m.flags|=2),m.return=s,c.return=s,c.sibling=m,s.child=c,c=m,m=s.child,b=i.child.memoizedState,b===null?b=Qg(l):(C=b.cachePool,C!==null?(M=Yt._currentValue,C=C.parent!==M?{parent:M,pool:M}:C):C=lw(),b={baseLanes:b.baseLanes|l,cachePool:C}),m.memoizedState=b,m.childLanes=Wg(i,T,l),s.memoizedState=Kg,c):(Ss(s),l=i.child,i=l.sibling,l=Ls(l,{mode:"visible",children:c.children}),l.return=s,l.sibling=null,i!==null&&(T=s.deletions,T===null?(s.deletions=[i],s.flags|=16):T.push(i)),s.child=l,s.memoizedState=null,l)}function Yg(i,s){return s=Xg({mode:"visible",children:s},i.mode),s.return=i,i.child=s}function Xg(i,s){return O0(i,s,0,null)}function Zg(i,s,l){return Ga(s,i.child,null,l),i=Yg(s,s.pendingProps.children),i.flags|=2,s.memoizedState=null,i}function l0(i,s,l){i.lanes|=s;var c=i.alternate;c!==null&&(c.lanes|=s),n_(i.return,s,l)}function Jg(i,s,l,c,m){var g=i.memoizedState;g===null?i.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:c,tail:l,tailMode:m}:(g.isBackwards=s,g.rendering=null,g.renderingStartTime=0,g.last=c,g.tail=l,g.tailMode=m)}function u0(i,s,l){var c=s.pendingProps,m=c.revealOrder,g=c.tail;if(mn(i,s,c.children,l),c=Wt.current,(c&2)!==0)c=c&1|2,s.flags|=128;else{if(i!==null&&(i.flags&128)!==0)e:for(i=s.child;i!==null;){if(i.tag===13)i.memoizedState!==null&&l0(i,l,s);else if(i.tag===19)l0(i,l,s);else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===s)break e;for(;i.sibling===null;){if(i.return===null||i.return===s)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}c&=1}switch(Ke(Wt,c),m){case"forwards":for(l=s.child,m=null;l!==null;)i=l.alternate,i!==null&&cf(i)===null&&(m=l),l=l.sibling;l=m,l===null?(m=s.child,s.child=null):(m=l.sibling,l.sibling=null),Jg(s,!1,m,l,g);break;case"backwards":for(l=null,m=s.child,s.child=null;m!==null;){if(i=m.alternate,i!==null&&cf(i)===null){s.child=m;break}i=m.sibling,m.sibling=l,l=m,m=i}Jg(s,!0,l,null,g);break;case"together":Jg(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function Ni(i,s,l){if(i!==null&&(s.dependencies=i.dependencies),Us|=s.lanes,(l&s.childLanes)===0)if(i!==null){if(Cc(i,s,l,!1),(l&s.childLanes)===0)return null}else return null;if(i!==null&&s.child!==i.child)throw Error(r(153));if(s.child!==null){for(i=s.child,l=Ls(i,i.pendingProps),s.child=l,l.return=s;i.sibling!==null;)i=i.sibling,l=l.sibling=Ls(i,i.pendingProps),l.return=s;l.sibling=null}return s.child}function e_(i,s){return(i.lanes&s)!==0?!0:(i=i.dependencies,!!(i!==null&&wf(i)))}function kP(i,s,l){switch(s.tag){case 3:us(s,s.stateNode.containerInfo),Ps(s,Yt,i.memoizedState.cache),gc();break;case 27:case 5:$u(s);break;case 4:us(s,s.stateNode.containerInfo);break;case 10:Ps(s,s.type,s.memoizedProps.value);break;case 13:var c=s.memoizedState;if(c!==null)return c.dehydrated!==null?(Ss(s),s.flags|=128,null):(l&s.child.childLanes)!==0?o0(i,s,l):(Ss(s),i=Ni(i,s,l),i!==null?i.sibling:null);Ss(s);break;case 19:var m=(i.flags&128)!==0;if(c=(l&s.childLanes)!==0,c||(Cc(i,s,l,!1),c=(l&s.childLanes)!==0),m){if(c)return u0(i,s,l);s.flags|=128}if(m=s.memoizedState,m!==null&&(m.rendering=null,m.tail=null,m.lastEffect=null),Ke(Wt,Wt.current),c)break;return null;case 22:case 23:return s.lanes=0,n0(i,s,l);case 24:Ps(s,Yt,i.memoizedState.cache)}return Ni(i,s,l)}function c0(i,s,l){if(i!==null)if(i.memoizedProps!==s.pendingProps)sn=!0;else{if(!e_(i,l)&&(s.flags&128)===0)return sn=!1,kP(i,s,l);sn=(i.flags&131072)!==0}else sn=!1,We&&(s.flags&1048576)!==0&&QT(s,sf,s.index);switch(s.lanes=0,s.tag){case 16:e:{i=s.pendingProps;var c=s.elementType,m=c._init;if(c=m(c._payload),s.type=c,typeof c=="function")m_(c)?(i=Ya(c,i),s.tag=1,s=s0(null,s,c,i,l)):(s.tag=0,s=$g(null,s,c,i,l));else{if(c!=null){if(m=c.$$typeof,m===P){s.tag=11,s=Jw(null,s,c,i,l);break e}else if(m===H){s.tag=14,s=e0(null,s,c,i,l);break e}}throw s=R(c)||c,Error(r(306,s,""))}}return s;case 0:return $g(i,s,s.type,s.pendingProps,l);case 1:return c=s.type,m=Ya(c,s.pendingProps),s0(i,s,c,m,l);case 3:e:{if(us(s,s.stateNode.containerInfo),i===null)throw Error(r(387));var g=s.pendingProps;m=s.memoizedState,c=m.element,s_(i,s),xc(s,g,null,l);var T=s.memoizedState;if(g=T.cache,Ps(s,Yt,g),g!==m.cache&&r_(s,[Yt],l,!0),Pc(),g=T.element,m.isDehydrated)if(m={element:g,isDehydrated:!1,cache:T.cache},s.updateQueue.baseState=m,s.memoizedState=m,s.flags&256){s=a0(i,s,g,l);break e}else if(g!==c){c=hr(Error(r(424)),s),_c(c),s=a0(i,s,g,l);break e}else for(fn=Dr(s.stateNode.containerInfo.firstChild),Pn=s,We=!0,Rr=null,$r=!0,l=rw(s,null,g,l),s.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(gc(),g===c){s=Ni(i,s,l);break e}mn(i,s,g,l)}s=s.child}return s;case 26:return Rc(i,s),i===null?(l=fb(s.type,null,s.pendingProps,null))?s.memoizedState=l:We||(l=s.type,i=s.pendingProps,c=Uf(rr.current).createElement(l),c[tn]=s,c[$t]=i,pn(c,l,i),_t(c),s.stateNode=c):s.memoizedState=fb(s.type,i.memoizedProps,s.pendingProps,i.memoizedState),null;case 27:return $u(s),i===null&&We&&(c=s.stateNode=cb(s.type,s.pendingProps,rr.current),Pn=s,$r=!0,fn=Dr(c.firstChild)),c=s.pendingProps.children,i!==null||We?mn(i,s,c,l):s.child=Ga(s,null,c,l),Rc(i,s),s.child;case 5:return i===null&&We&&((m=c=fn)&&(c=cx(c,s.type,s.pendingProps,$r),c!==null?(s.stateNode=c,Pn=s,fn=Dr(c.firstChild),$r=!1,m=!0):m=!1),m||Ha(s)),$u(s),m=s.type,g=s.pendingProps,T=i!==null?i.memoizedProps:null,c=g.children,z_(m,g)?c=null:T!==null&&z_(m,T)&&(s.flags|=32),s.memoizedState!==null&&(m=Cg(i,s,RP,null,null,l),$c._currentValue=m),Rc(i,s),mn(i,s,c,l),s.child;case 6:return i===null&&We&&((i=l=fn)&&(l=hx(l,s.pendingProps,$r),l!==null?(s.stateNode=l,Pn=s,fn=null,i=!0):i=!1),i||Ha(s)),null;case 13:return o0(i,s,l);case 4:return us(s,s.stateNode.containerInfo),c=s.pendingProps,i===null?s.child=Ga(s,null,c,l):mn(i,s,c,l),s.child;case 11:return Jw(i,s,s.type,s.pendingProps,l);case 7:return mn(i,s,s.pendingProps,l),s.child;case 8:return mn(i,s,s.pendingProps.children,l),s.child;case 12:return mn(i,s,s.pendingProps.children,l),s.child;case 10:return c=s.pendingProps,Ps(s,s.type,c.value),mn(i,s,c.children,l),s.child;case 9:return m=s.type._context,c=s.pendingProps.children,Za(s),m=Tn(m),c=c(m),s.flags|=1,mn(i,s,c,l),s.child;case 14:return e0(i,s,s.type,s.pendingProps,l);case 15:return t0(i,s,s.type,s.pendingProps,l);case 19:return u0(i,s,l);case 22:return n0(i,s,l);case 24:return Za(s),c=Tn(Yt),i===null?(m=Sg(),m===null&&(m=at,g=Ig(),m.pooledCache=g,g.refCount++,g!==null&&(m.pooledCacheLanes|=l),m=g),s.memoizedState={parent:c,cache:m},i_(s),Ps(s,Yt,m)):((i.lanes&l)!==0&&(s_(i,s),xc(s,null,null,l),Pc()),m=i.memoizedState,g=s.memoizedState,m.parent!==c?(m={parent:c,cache:c},s.memoizedState=m,s.lanes===0&&(s.memoizedState=s.updateQueue.baseState=m),Ps(s,Yt,c)):(c=g.cache,Ps(s,Yt,c),c!==m.cache&&r_(s,[Yt],l,!0))),mn(i,s,s.pendingProps.children,l),s.child;case 29:throw s.pendingProps}throw Error(r(156,s.tag))}var t_=Me(null),Xa=null,Oi=null;function Ps(i,s,l){Ke(t_,s._currentValue),s._currentValue=l}function ki(i){i._currentValue=t_.current,Ze(t_)}function n_(i,s,l){for(;i!==null;){var c=i.alternate;if((i.childLanes&s)!==s?(i.childLanes|=s,c!==null&&(c.childLanes|=s)):c!==null&&(c.childLanes&s)!==s&&(c.childLanes|=s),i===l)break;i=i.return}}function r_(i,s,l,c){var m=i.child;for(m!==null&&(m.return=i);m!==null;){var g=m.dependencies;if(g!==null){var T=m.child;g=g.firstContext;e:for(;g!==null;){var b=g;g=m;for(var C=0;C<s.length;C++)if(b.context===s[C]){g.lanes|=l,b=g.alternate,b!==null&&(b.lanes|=l),n_(g.return,l,i),c||(T=null);break e}g=b.next}}else if(m.tag===18){if(T=m.return,T===null)throw Error(r(341));T.lanes|=l,g=T.alternate,g!==null&&(g.lanes|=l),n_(T,l,i),T=null}else T=m.child;if(T!==null)T.return=m;else for(T=m;T!==null;){if(T===i){T=null;break}if(m=T.sibling,m!==null){m.return=T.return,T=m;break}T=T.return}m=T}}function Cc(i,s,l,c){i=null;for(var m=s,g=!1;m!==null;){if(!g){if((m.flags&524288)!==0)g=!0;else if((m.flags&262144)!==0)break}if(m.tag===10){var T=m.alternate;if(T===null)throw Error(r(387));if(T=T.memoizedProps,T!==null){var b=m.type;Kn(m.pendingProps.value,T.value)||(i!==null?i.push(b):i=[b])}}else if(m===ls.current){if(T=m.alternate,T===null)throw Error(r(387));T.memoizedState.memoizedState!==m.memoizedState.memoizedState&&(i!==null?i.push($c):i=[$c])}m=m.return}i!==null&&r_(s,i,l,c),s.flags|=262144}function wf(i){for(i=i.firstContext;i!==null;){if(!Kn(i.context._currentValue,i.memoizedValue))return!0;i=i.next}return!1}function Za(i){Xa=i,Oi=null,i=i.dependencies,i!==null&&(i.firstContext=null)}function Tn(i){return h0(Xa,i)}function bf(i,s){return Xa===null&&Za(i),h0(i,s)}function h0(i,s){var l=s._currentValue;if(s={context:s,memoizedValue:l,next:null},Oi===null){if(i===null)throw Error(r(308));Oi=s,i.dependencies={lanes:0,firstContext:s},i.flags|=524288}else Oi=Oi.next=s;return l}var xs=!1;function i_(i){i.updateQueue={baseState:i.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function s_(i,s){i=i.updateQueue,s.updateQueue===i&&(s.updateQueue={baseState:i.baseState,firstBaseUpdate:i.firstBaseUpdate,lastBaseUpdate:i.lastBaseUpdate,shared:i.shared,callbacks:null})}function Ns(i){return{lane:i,tag:0,payload:null,callback:null,next:null}}function Os(i,s,l){var c=i.updateQueue;if(c===null)return null;if(c=c.shared,(vt&2)!==0){var m=c.pending;return m===null?s.next=s:(s.next=m.next,m.next=s),c.pending=s,s=nf(i),$T(i,null,l),s}return tf(i,c,s,l),nf(i)}function Dc(i,s,l){if(s=s.updateQueue,s!==null&&(s=s.shared,(l&4194176)!==0)){var c=s.lanes;c&=i.pendingLanes,l|=c,s.lanes=l,ps(i,l)}}function a_(i,s){var l=i.updateQueue,c=i.alternate;if(c!==null&&(c=c.updateQueue,l===c)){var m=null,g=null;if(l=l.firstBaseUpdate,l!==null){do{var T={lane:l.lane,tag:l.tag,payload:l.payload,callback:null,next:null};g===null?m=g=T:g=g.next=T,l=l.next}while(l!==null);g===null?m=g=s:g=g.next=s}else m=g=s;l={baseState:c.baseState,firstBaseUpdate:m,lastBaseUpdate:g,shared:c.shared,callbacks:c.callbacks},i.updateQueue=l;return}i=l.lastBaseUpdate,i===null?l.firstBaseUpdate=s:i.next=s,l.lastBaseUpdate=s}var o_=!1;function Pc(){if(o_){var i=gl;if(i!==null)throw i}}function xc(i,s,l,c){o_=!1;var m=i.updateQueue;xs=!1;var g=m.firstBaseUpdate,T=m.lastBaseUpdate,b=m.shared.pending;if(b!==null){m.shared.pending=null;var C=b,M=C.next;C.next=null,T===null?g=M:T.next=M,T=C;var Z=i.alternate;Z!==null&&(Z=Z.updateQueue,b=Z.lastBaseUpdate,b!==T&&(b===null?Z.firstBaseUpdate=M:b.next=M,Z.lastBaseUpdate=C))}if(g!==null){var ne=m.baseState;T=0,Z=M=C=null,b=g;do{var G=b.lane&-536870913,X=G!==b.lane;if(X?(Ge&G)===G:(c&G)===G){G!==0&&G===pl&&(o_=!0),Z!==null&&(Z=Z.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});e:{var Ee=i,Pe=b;G=s;var Ct=l;switch(Pe.tag){case 1:if(Ee=Pe.payload,typeof Ee=="function"){ne=Ee.call(Ct,ne,G);break e}ne=Ee;break e;case 3:Ee.flags=Ee.flags&-65537|128;case 0:if(Ee=Pe.payload,G=typeof Ee=="function"?Ee.call(Ct,ne,G):Ee,G==null)break e;ne=x({},ne,G);break e;case 2:xs=!0}}G=b.callback,G!==null&&(i.flags|=64,X&&(i.flags|=8192),X=m.callbacks,X===null?m.callbacks=[G]:X.push(G))}else X={lane:G,tag:b.tag,payload:b.payload,callback:b.callback,next:null},Z===null?(M=Z=X,C=ne):Z=Z.next=X,T|=G;if(b=b.next,b===null){if(b=m.shared.pending,b===null)break;X=b,b=X.next,X.next=null,m.lastBaseUpdate=X,m.shared.pending=null}}while(!0);Z===null&&(C=ne),m.baseState=C,m.firstBaseUpdate=M,m.lastBaseUpdate=Z,g===null&&(m.shared.lanes=0),Us|=T,i.lanes=T,i.memoizedState=ne}}function d0(i,s){if(typeof i!="function")throw Error(r(191,i));i.call(s)}function f0(i,s){var l=i.callbacks;if(l!==null)for(i.callbacks=null,i=0;i<l.length;i++)d0(l[i],s)}function Nc(i,s){try{var l=s.updateQueue,c=l!==null?l.lastEffect:null;if(c!==null){var m=c.next;l=m;do{if((l.tag&i)===i){c=void 0;var g=l.create,T=l.inst;c=g(),T.destroy=c}l=l.next}while(l!==m)}}catch(b){st(s,s.return,b)}}function ks(i,s,l){try{var c=s.updateQueue,m=c!==null?c.lastEffect:null;if(m!==null){var g=m.next;c=g;do{if((c.tag&i)===i){var T=c.inst,b=T.destroy;if(b!==void 0){T.destroy=void 0,m=s;var C=l;try{b()}catch(M){st(m,C,M)}}}c=c.next}while(c!==g)}}catch(M){st(s,s.return,M)}}function m0(i){var s=i.updateQueue;if(s!==null){var l=i.stateNode;try{f0(s,l)}catch(c){st(i,i.return,c)}}}function p0(i,s,l){l.props=Ya(i.type,i.memoizedProps),l.state=i.memoizedState;try{l.componentWillUnmount()}catch(c){st(i,s,c)}}function Ja(i,s){try{var l=i.ref;if(l!==null){var c=i.stateNode;switch(i.tag){case 26:case 27:case 5:var m=c;break;default:m=c}typeof l=="function"?i.refCleanup=l(m):l.current=m}}catch(g){st(i,s,g)}}function Qn(i,s){var l=i.ref,c=i.refCleanup;if(l!==null)if(typeof c=="function")try{c()}catch(m){st(i,s,m)}finally{i.refCleanup=null,i=i.alternate,i!=null&&(i.refCleanup=null)}else if(typeof l=="function")try{l(null)}catch(m){st(i,s,m)}else l.current=null}function g0(i){var s=i.type,l=i.memoizedProps,c=i.stateNode;try{e:switch(s){case"button":case"input":case"select":case"textarea":l.autoFocus&&c.focus();break e;case"img":l.src?c.src=l.src:l.srcSet&&(c.srcset=l.srcSet)}}catch(m){st(i,i.return,m)}}function _0(i,s,l){try{var c=i.stateNode;sx(c,i.type,l,s),c[$t]=s}catch(m){st(i,i.return,m)}}function y0(i){return i.tag===5||i.tag===3||i.tag===26||i.tag===27||i.tag===4}function l_(i){e:for(;;){for(;i.sibling===null;){if(i.return===null||y0(i.return))return null;i=i.return}for(i.sibling.return=i.return,i=i.sibling;i.tag!==5&&i.tag!==6&&i.tag!==27&&i.tag!==18;){if(i.flags&2||i.child===null||i.tag===4)continue e;i.child.return=i,i=i.child}if(!(i.flags&2))return i.stateNode}}function u_(i,s,l){var c=i.tag;if(c===5||c===6)i=i.stateNode,s?l.nodeType===8?l.parentNode.insertBefore(i,s):l.insertBefore(i,s):(l.nodeType===8?(s=l.parentNode,s.insertBefore(i,l)):(s=l,s.appendChild(i)),l=l._reactRootContainer,l!=null||s.onclick!==null||(s.onclick=Lf));else if(c!==4&&c!==27&&(i=i.child,i!==null))for(u_(i,s,l),i=i.sibling;i!==null;)u_(i,s,l),i=i.sibling}function If(i,s,l){var c=i.tag;if(c===5||c===6)i=i.stateNode,s?l.insertBefore(i,s):l.appendChild(i);else if(c!==4&&c!==27&&(i=i.child,i!==null))for(If(i,s,l),i=i.sibling;i!==null;)If(i,s,l),i=i.sibling}var Vi=!1,St=!1,c_=!1,v0=typeof WeakSet=="function"?WeakSet:Set,an=null,E0=!1;function VP(i,s){if(i=i.containerInfo,U_=Hf,i=LT(i),dg(i)){if("selectionStart"in i)var l={start:i.selectionStart,end:i.selectionEnd};else e:{l=(l=i.ownerDocument)&&l.defaultView||window;var c=l.getSelection&&l.getSelection();if(c&&c.rangeCount!==0){l=c.anchorNode;var m=c.anchorOffset,g=c.focusNode;c=c.focusOffset;try{l.nodeType,g.nodeType}catch{l=null;break e}var T=0,b=-1,C=-1,M=0,Z=0,ne=i,G=null;t:for(;;){for(var X;ne!==l||m!==0&&ne.nodeType!==3||(b=T+m),ne!==g||c!==0&&ne.nodeType!==3||(C=T+c),ne.nodeType===3&&(T+=ne.nodeValue.length),(X=ne.firstChild)!==null;)G=ne,ne=X;for(;;){if(ne===i)break t;if(G===l&&++M===m&&(b=T),G===g&&++Z===c&&(C=T),(X=ne.nextSibling)!==null)break;ne=G,G=ne.parentNode}ne=X}l=b===-1||C===-1?null:{start:b,end:C}}else l=null}l=l||{start:0,end:0}}else l=null;for(B_={focusedElem:i,selectionRange:l},Hf=!1,an=s;an!==null;)if(s=an,i=s.child,(s.subtreeFlags&1028)!==0&&i!==null)i.return=s,an=i;else for(;an!==null;){switch(s=an,g=s.alternate,i=s.flags,s.tag){case 0:break;case 11:case 15:break;case 1:if((i&1024)!==0&&g!==null){i=void 0,l=s,m=g.memoizedProps,g=g.memoizedState,c=l.stateNode;try{var Ee=Ya(l.type,m,l.elementType===l.type);i=c.getSnapshotBeforeUpdate(Ee,g),c.__reactInternalSnapshotBeforeUpdate=i}catch(Pe){st(l,l.return,Pe)}}break;case 3:if((i&1024)!==0){if(i=s.stateNode.containerInfo,l=i.nodeType,l===9)j_(i);else if(l===1)switch(i.nodeName){case"HEAD":case"HTML":case"BODY":j_(i);break;default:i.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((i&1024)!==0)throw Error(r(163))}if(i=s.sibling,i!==null){i.return=s.return,an=i;break}an=s.return}return Ee=E0,E0=!1,Ee}function T0(i,s,l){var c=l.flags;switch(l.tag){case 0:case 11:case 15:Li(i,l),c&4&&Nc(5,l);break;case 1:if(Li(i,l),c&4)if(i=l.stateNode,s===null)try{i.componentDidMount()}catch(b){st(l,l.return,b)}else{var m=Ya(l.type,s.memoizedProps);s=s.memoizedState;try{i.componentDidUpdate(m,s,i.__reactInternalSnapshotBeforeUpdate)}catch(b){st(l,l.return,b)}}c&64&&m0(l),c&512&&Ja(l,l.return);break;case 3:if(Li(i,l),c&64&&(c=l.updateQueue,c!==null)){if(i=null,l.child!==null)switch(l.child.tag){case 27:case 5:i=l.child.stateNode;break;case 1:i=l.child.stateNode}try{f0(c,i)}catch(b){st(l,l.return,b)}}break;case 26:Li(i,l),c&512&&Ja(l,l.return);break;case 27:case 5:Li(i,l),s===null&&c&4&&g0(l),c&512&&Ja(l,l.return);break;case 12:Li(i,l);break;case 13:Li(i,l),c&4&&I0(i,l);break;case 22:if(m=l.memoizedState!==null||Vi,!m){s=s!==null&&s.memoizedState!==null||St;var g=Vi,T=St;Vi=m,(St=s)&&!T?Vs(i,l,(l.subtreeFlags&8772)!==0):Li(i,l),Vi=g,St=T}c&512&&(l.memoizedProps.mode==="manual"?Ja(l,l.return):Qn(l,l.return));break;default:Li(i,l)}}function w0(i){var s=i.alternate;s!==null&&(i.alternate=null,w0(s)),i.child=null,i.deletions=null,i.sibling=null,i.tag===5&&(s=i.stateNode,s!==null&&Da(s)),i.stateNode=null,i.return=null,i.dependencies=null,i.memoizedProps=null,i.memoizedState=null,i.pendingProps=null,i.stateNode=null,i.updateQueue=null}var Ft=null,Wn=!1;function Mi(i,s,l){for(l=l.child;l!==null;)b0(i,s,l),l=l.sibling}function b0(i,s,l){if(En&&typeof En.onCommitFiberUnmount=="function")try{En.onCommitFiberUnmount(cs,l)}catch{}switch(l.tag){case 26:St||Qn(l,s),Mi(i,s,l),l.memoizedState?l.memoizedState.count--:l.stateNode&&(l=l.stateNode,l.parentNode.removeChild(l));break;case 27:St||Qn(l,s);var c=Ft,m=Wn;for(Ft=l.stateNode,Mi(i,s,l),l=l.stateNode,s=l.attributes;s.length;)l.removeAttributeNode(s[0]);Da(l),Ft=c,Wn=m;break;case 5:St||Qn(l,s);case 6:m=Ft;var g=Wn;if(Ft=null,Mi(i,s,l),Ft=m,Wn=g,Ft!==null)if(Wn)try{i=Ft,c=l.stateNode,i.nodeType===8?i.parentNode.removeChild(c):i.removeChild(c)}catch(T){st(l,s,T)}else try{Ft.removeChild(l.stateNode)}catch(T){st(l,s,T)}break;case 18:Ft!==null&&(Wn?(s=Ft,l=l.stateNode,s.nodeType===8?q_(s.parentNode,l):s.nodeType===1&&q_(s,l),Yc(s)):q_(Ft,l.stateNode));break;case 4:c=Ft,m=Wn,Ft=l.stateNode.containerInfo,Wn=!0,Mi(i,s,l),Ft=c,Wn=m;break;case 0:case 11:case 14:case 15:St||ks(2,l,s),St||ks(4,l,s),Mi(i,s,l);break;case 1:St||(Qn(l,s),c=l.stateNode,typeof c.componentWillUnmount=="function"&&p0(l,s,c)),Mi(i,s,l);break;case 21:Mi(i,s,l);break;case 22:St||Qn(l,s),St=(c=St)||l.memoizedState!==null,Mi(i,s,l),St=c;break;default:Mi(i,s,l)}}function I0(i,s){if(s.memoizedState===null&&(i=s.alternate,i!==null&&(i=i.memoizedState,i!==null&&(i=i.dehydrated,i!==null))))try{Yc(i)}catch(l){st(s,s.return,l)}}function MP(i){switch(i.tag){case 13:case 19:var s=i.stateNode;return s===null&&(s=i.stateNode=new v0),s;case 22:return i=i.stateNode,s=i._retryCache,s===null&&(s=i._retryCache=new v0),s;default:throw Error(r(435,i.tag))}}function h_(i,s){var l=MP(i);s.forEach(function(c){var m=WP.bind(null,i,c);l.has(c)||(l.add(c),c.then(m,m))})}function pr(i,s){var l=s.deletions;if(l!==null)for(var c=0;c<l.length;c++){var m=l[c],g=i,T=s,b=T;e:for(;b!==null;){switch(b.tag){case 27:case 5:Ft=b.stateNode,Wn=!1;break e;case 3:Ft=b.stateNode.containerInfo,Wn=!0;break e;case 4:Ft=b.stateNode.containerInfo,Wn=!0;break e}b=b.return}if(Ft===null)throw Error(r(160));b0(g,T,m),Ft=null,Wn=!1,g=m.alternate,g!==null&&(g.return=null),m.return=null}if(s.subtreeFlags&13878)for(s=s.child;s!==null;)A0(s,i),s=s.sibling}var Cr=null;function A0(i,s){var l=i.alternate,c=i.flags;switch(i.tag){case 0:case 11:case 14:case 15:pr(s,i),gr(i),c&4&&(ks(3,i,i.return),Nc(3,i),ks(5,i,i.return));break;case 1:pr(s,i),gr(i),c&512&&(St||l===null||Qn(l,l.return)),c&64&&Vi&&(i=i.updateQueue,i!==null&&(c=i.callbacks,c!==null&&(l=i.shared.hiddenCallbacks,i.shared.hiddenCallbacks=l===null?c:l.concat(c))));break;case 26:var m=Cr;if(pr(s,i),gr(i),c&512&&(St||l===null||Qn(l,l.return)),c&4){var g=l!==null?l.memoizedState:null;if(c=i.memoizedState,l===null)if(c===null)if(i.stateNode===null){e:{c=i.type,l=i.memoizedProps,m=m.ownerDocument||m;t:switch(c){case"title":g=m.getElementsByTagName("title")[0],(!g||g[_s]||g[tn]||g.namespaceURI==="http://www.w3.org/2000/svg"||g.hasAttribute("itemprop"))&&(g=m.createElement(c),m.head.insertBefore(g,m.querySelector("head > title"))),pn(g,c,l),g[tn]=i,_t(g),c=g;break e;case"link":var T=gb("link","href",m).get(c+(l.href||""));if(T){for(var b=0;b<T.length;b++)if(g=T[b],g.getAttribute("href")===(l.href==null?null:l.href)&&g.getAttribute("rel")===(l.rel==null?null:l.rel)&&g.getAttribute("title")===(l.title==null?null:l.title)&&g.getAttribute("crossorigin")===(l.crossOrigin==null?null:l.crossOrigin)){T.splice(b,1);break t}}g=m.createElement(c),pn(g,c,l),m.head.appendChild(g);break;case"meta":if(T=gb("meta","content",m).get(c+(l.content||""))){for(b=0;b<T.length;b++)if(g=T[b],g.getAttribute("content")===(l.content==null?null:""+l.content)&&g.getAttribute("name")===(l.name==null?null:l.name)&&g.getAttribute("property")===(l.property==null?null:l.property)&&g.getAttribute("http-equiv")===(l.httpEquiv==null?null:l.httpEquiv)&&g.getAttribute("charset")===(l.charSet==null?null:l.charSet)){T.splice(b,1);break t}}g=m.createElement(c),pn(g,c,l),m.head.appendChild(g);break;default:throw Error(r(468,c))}g[tn]=i,_t(g),c=g}i.stateNode=c}else _b(m,i.type,i.stateNode);else i.stateNode=pb(m,c,i.memoizedProps);else g!==c?(g===null?l.stateNode!==null&&(l=l.stateNode,l.parentNode.removeChild(l)):g.count--,c===null?_b(m,i.type,i.stateNode):pb(m,c,i.memoizedProps)):c===null&&i.stateNode!==null&&_0(i,i.memoizedProps,l.memoizedProps)}break;case 27:if(c&4&&i.alternate===null){m=i.stateNode,g=i.memoizedProps;try{for(var C=m.firstChild;C;){var M=C.nextSibling,Z=C.nodeName;C[_s]||Z==="HEAD"||Z==="BODY"||Z==="SCRIPT"||Z==="STYLE"||Z==="LINK"&&C.rel.toLowerCase()==="stylesheet"||m.removeChild(C),C=M}for(var ne=i.type,G=m.attributes;G.length;)m.removeAttributeNode(G[0]);pn(m,ne,g),m[tn]=i,m[$t]=g}catch(Ee){st(i,i.return,Ee)}}case 5:if(pr(s,i),gr(i),c&512&&(St||l===null||Qn(l,l.return)),i.flags&32){m=i.stateNode;try{ar(m,"")}catch(Ee){st(i,i.return,Ee)}}c&4&&i.stateNode!=null&&(m=i.memoizedProps,_0(i,m,l!==null?l.memoizedProps:m)),c&1024&&(c_=!0);break;case 6:if(pr(s,i),gr(i),c&4){if(i.stateNode===null)throw Error(r(162));c=i.memoizedProps,l=i.stateNode;try{l.nodeValue=c}catch(Ee){st(i,i.return,Ee)}}break;case 3:if(Ff=null,m=Cr,Cr=Bf(s.containerInfo),pr(s,i),Cr=m,gr(i),c&4&&l!==null&&l.memoizedState.isDehydrated)try{Yc(s.containerInfo)}catch(Ee){st(i,i.return,Ee)}c_&&(c_=!1,S0(i));break;case 4:c=Cr,Cr=Bf(i.stateNode.containerInfo),pr(s,i),gr(i),Cr=c;break;case 12:pr(s,i),gr(i);break;case 13:pr(s,i),gr(i),i.child.flags&8192&&i.memoizedState!==null!=(l!==null&&l.memoizedState!==null)&&(E_=Ln()),c&4&&(c=i.updateQueue,c!==null&&(i.updateQueue=null,h_(i,c)));break;case 22:if(c&512&&(St||l===null||Qn(l,l.return)),C=i.memoizedState!==null,M=l!==null&&l.memoizedState!==null,Z=Vi,ne=St,Vi=Z||C,St=ne||M,pr(s,i),St=ne,Vi=Z,gr(i),s=i.stateNode,s._current=i,s._visibility&=-3,s._visibility|=s._pendingVisibility&2,c&8192&&(s._visibility=C?s._visibility&-2:s._visibility|1,C&&(s=Vi||St,l===null||M||s||El(i)),i.memoizedProps===null||i.memoizedProps.mode!=="manual"))e:for(l=null,s=i;;){if(s.tag===5||s.tag===26||s.tag===27){if(l===null){M=l=s;try{if(m=M.stateNode,C)g=m.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none";else{T=M.stateNode,b=M.memoizedProps.style;var X=b!=null&&b.hasOwnProperty("display")?b.display:null;T.style.display=X==null||typeof X=="boolean"?"":(""+X).trim()}}catch(Ee){st(M,M.return,Ee)}}}else if(s.tag===6){if(l===null){M=s;try{M.stateNode.nodeValue=C?"":M.memoizedProps}catch(Ee){st(M,M.return,Ee)}}}else if((s.tag!==22&&s.tag!==23||s.memoizedState===null||s===i)&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===i)break e;for(;s.sibling===null;){if(s.return===null||s.return===i)break e;l===s&&(l=null),s=s.return}l===s&&(l=null),s.sibling.return=s.return,s=s.sibling}c&4&&(c=i.updateQueue,c!==null&&(l=c.retryQueue,l!==null&&(c.retryQueue=null,h_(i,l))));break;case 19:pr(s,i),gr(i),c&4&&(c=i.updateQueue,c!==null&&(i.updateQueue=null,h_(i,c)));break;case 21:break;default:pr(s,i),gr(i)}}function gr(i){var s=i.flags;if(s&2){try{if(i.tag!==27){e:{for(var l=i.return;l!==null;){if(y0(l)){var c=l;break e}l=l.return}throw Error(r(160))}switch(c.tag){case 27:var m=c.stateNode,g=l_(i);If(i,g,m);break;case 5:var T=c.stateNode;c.flags&32&&(ar(T,""),c.flags&=-33);var b=l_(i);If(i,b,T);break;case 3:case 4:var C=c.stateNode.containerInfo,M=l_(i);u_(i,M,C);break;default:throw Error(r(161))}}}catch(Z){st(i,i.return,Z)}i.flags&=-3}s&4096&&(i.flags&=-4097)}function S0(i){if(i.subtreeFlags&1024)for(i=i.child;i!==null;){var s=i;S0(s),s.tag===5&&s.flags&1024&&s.stateNode.reset(),i=i.sibling}}function Li(i,s){if(s.subtreeFlags&8772)for(s=s.child;s!==null;)T0(i,s.alternate,s),s=s.sibling}function El(i){for(i=i.child;i!==null;){var s=i;switch(s.tag){case 0:case 11:case 14:case 15:ks(4,s,s.return),El(s);break;case 1:Qn(s,s.return);var l=s.stateNode;typeof l.componentWillUnmount=="function"&&p0(s,s.return,l),El(s);break;case 26:case 27:case 5:Qn(s,s.return),El(s);break;case 22:Qn(s,s.return),s.memoizedState===null&&El(s);break;default:El(s)}i=i.sibling}}function Vs(i,s,l){for(l=l&&(s.subtreeFlags&8772)!==0,s=s.child;s!==null;){var c=s.alternate,m=i,g=s,T=g.flags;switch(g.tag){case 0:case 11:case 15:Vs(m,g,l),Nc(4,g);break;case 1:if(Vs(m,g,l),c=g,m=c.stateNode,typeof m.componentDidMount=="function")try{m.componentDidMount()}catch(M){st(c,c.return,M)}if(c=g,m=c.updateQueue,m!==null){var b=c.stateNode;try{var C=m.shared.hiddenCallbacks;if(C!==null)for(m.shared.hiddenCallbacks=null,m=0;m<C.length;m++)d0(C[m],b)}catch(M){st(c,c.return,M)}}l&&T&64&&m0(g),Ja(g,g.return);break;case 26:case 27:case 5:Vs(m,g,l),l&&c===null&&T&4&&g0(g),Ja(g,g.return);break;case 12:Vs(m,g,l);break;case 13:Vs(m,g,l),l&&T&4&&I0(m,g);break;case 22:g.memoizedState===null&&Vs(m,g,l),Ja(g,g.return);break;default:Vs(m,g,l)}s=s.sibling}}function d_(i,s){var l=null;i!==null&&i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),i=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(i=s.memoizedState.cachePool.pool),i!==l&&(i!=null&&i.refCount++,l!=null&&wc(l))}function f_(i,s){i=null,s.alternate!==null&&(i=s.alternate.memoizedState.cache),s=s.memoizedState.cache,s!==i&&(s.refCount++,i!=null&&wc(i))}function Ms(i,s,l,c){if(s.subtreeFlags&10256)for(s=s.child;s!==null;)R0(i,s,l,c),s=s.sibling}function R0(i,s,l,c){var m=s.flags;switch(s.tag){case 0:case 11:case 15:Ms(i,s,l,c),m&2048&&Nc(9,s);break;case 3:Ms(i,s,l,c),m&2048&&(i=null,s.alternate!==null&&(i=s.alternate.memoizedState.cache),s=s.memoizedState.cache,s!==i&&(s.refCount++,i!=null&&wc(i)));break;case 12:if(m&2048){Ms(i,s,l,c),i=s.stateNode;try{var g=s.memoizedProps,T=g.id,b=g.onPostCommit;typeof b=="function"&&b(T,s.alternate===null?"mount":"update",i.passiveEffectDuration,-0)}catch(C){st(s,s.return,C)}}else Ms(i,s,l,c);break;case 23:break;case 22:g=s.stateNode,s.memoizedState!==null?g._visibility&4?Ms(i,s,l,c):Oc(i,s):g._visibility&4?Ms(i,s,l,c):(g._visibility|=4,Tl(i,s,l,c,(s.subtreeFlags&10256)!==0)),m&2048&&d_(s.alternate,s);break;case 24:Ms(i,s,l,c),m&2048&&f_(s.alternate,s);break;default:Ms(i,s,l,c)}}function Tl(i,s,l,c,m){for(m=m&&(s.subtreeFlags&10256)!==0,s=s.child;s!==null;){var g=i,T=s,b=l,C=c,M=T.flags;switch(T.tag){case 0:case 11:case 15:Tl(g,T,b,C,m),Nc(8,T);break;case 23:break;case 22:var Z=T.stateNode;T.memoizedState!==null?Z._visibility&4?Tl(g,T,b,C,m):Oc(g,T):(Z._visibility|=4,Tl(g,T,b,C,m)),m&&M&2048&&d_(T.alternate,T);break;case 24:Tl(g,T,b,C,m),m&&M&2048&&f_(T.alternate,T);break;default:Tl(g,T,b,C,m)}s=s.sibling}}function Oc(i,s){if(s.subtreeFlags&10256)for(s=s.child;s!==null;){var l=i,c=s,m=c.flags;switch(c.tag){case 22:Oc(l,c),m&2048&&d_(c.alternate,c);break;case 24:Oc(l,c),m&2048&&f_(c.alternate,c);break;default:Oc(l,c)}s=s.sibling}}var kc=8192;function wl(i){if(i.subtreeFlags&kc)for(i=i.child;i!==null;)C0(i),i=i.sibling}function C0(i){switch(i.tag){case 26:wl(i),i.flags&kc&&i.memoizedState!==null&&Ix(Cr,i.memoizedState,i.memoizedProps);break;case 5:wl(i);break;case 3:case 4:var s=Cr;Cr=Bf(i.stateNode.containerInfo),wl(i),Cr=s;break;case 22:i.memoizedState===null&&(s=i.alternate,s!==null&&s.memoizedState!==null?(s=kc,kc=16777216,wl(i),kc=s):wl(i));break;default:wl(i)}}function D0(i){var s=i.alternate;if(s!==null&&(i=s.child,i!==null)){s.child=null;do s=i.sibling,i.sibling=null,i=s;while(i!==null)}}function Vc(i){var s=i.deletions;if((i.flags&16)!==0){if(s!==null)for(var l=0;l<s.length;l++){var c=s[l];an=c,x0(c,i)}D0(i)}if(i.subtreeFlags&10256)for(i=i.child;i!==null;)P0(i),i=i.sibling}function P0(i){switch(i.tag){case 0:case 11:case 15:Vc(i),i.flags&2048&&ks(9,i,i.return);break;case 3:Vc(i);break;case 12:Vc(i);break;case 22:var s=i.stateNode;i.memoizedState!==null&&s._visibility&4&&(i.return===null||i.return.tag!==13)?(s._visibility&=-5,Af(i)):Vc(i);break;default:Vc(i)}}function Af(i){var s=i.deletions;if((i.flags&16)!==0){if(s!==null)for(var l=0;l<s.length;l++){var c=s[l];an=c,x0(c,i)}D0(i)}for(i=i.child;i!==null;){switch(s=i,s.tag){case 0:case 11:case 15:ks(8,s,s.return),Af(s);break;case 22:l=s.stateNode,l._visibility&4&&(l._visibility&=-5,Af(s));break;default:Af(s)}i=i.sibling}}function x0(i,s){for(;an!==null;){var l=an;switch(l.tag){case 0:case 11:case 15:ks(8,l,s);break;case 23:case 22:if(l.memoizedState!==null&&l.memoizedState.cachePool!==null){var c=l.memoizedState.cachePool.pool;c!=null&&c.refCount++}break;case 24:wc(l.memoizedState.cache)}if(c=l.child,c!==null)c.return=l,an=c;else e:for(l=i;an!==null;){c=an;var m=c.sibling,g=c.return;if(w0(c),c===l){an=null;break e}if(m!==null){m.return=g,an=m;break e}an=g}}}function LP(i,s,l,c){this.tag=i,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function _r(i,s,l,c){return new LP(i,s,l,c)}function m_(i){return i=i.prototype,!(!i||!i.isReactComponent)}function Ls(i,s){var l=i.alternate;return l===null?(l=_r(i.tag,s,i.key,i.mode),l.elementType=i.elementType,l.type=i.type,l.stateNode=i.stateNode,l.alternate=i,i.alternate=l):(l.pendingProps=s,l.type=i.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=i.flags&31457280,l.childLanes=i.childLanes,l.lanes=i.lanes,l.child=i.child,l.memoizedProps=i.memoizedProps,l.memoizedState=i.memoizedState,l.updateQueue=i.updateQueue,s=i.dependencies,l.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},l.sibling=i.sibling,l.index=i.index,l.ref=i.ref,l.refCleanup=i.refCleanup,l}function N0(i,s){i.flags&=31457282;var l=i.alternate;return l===null?(i.childLanes=0,i.lanes=s,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,s=l.dependencies,i.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext}),i}function Sf(i,s,l,c,m,g){var T=0;if(c=i,typeof i=="function")m_(i)&&(T=1);else if(typeof i=="string")T=wx(i,l,Ut.current)?26:i==="html"||i==="head"||i==="body"?27:5;else e:switch(i){case f:return eo(l.children,m,g,s);case p:T=8,m|=24;break;case y:return i=_r(12,l,s,m|2),i.elementType=y,i.lanes=g,i;case U:return i=_r(13,l,s,m),i.elementType=U,i.lanes=g,i;case L:return i=_r(19,l,s,m),i.elementType=L,i.lanes=g,i;case $:return O0(l,m,g,s);default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case v:case S:T=10;break e;case w:T=9;break e;case P:T=11;break e;case H:T=14;break e;case Y:T=16,c=null;break e}T=29,l=Error(r(130,i===null?"null":typeof i,"")),c=null}return s=_r(T,l,s,m),s.elementType=i,s.type=c,s.lanes=g,s}function eo(i,s,l,c){return i=_r(7,i,c,s),i.lanes=l,i}function O0(i,s,l,c){i=_r(22,i,c,s),i.elementType=$,i.lanes=l;var m={_visibility:1,_pendingVisibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null,_current:null,detach:function(){var g=m._current;if(g===null)throw Error(r(456));if((m._pendingVisibility&2)===0){var T=As(g,2);T!==null&&(m._pendingVisibility|=2,xn(T,g,2))}},attach:function(){var g=m._current;if(g===null)throw Error(r(456));if((m._pendingVisibility&2)!==0){var T=As(g,2);T!==null&&(m._pendingVisibility&=-3,xn(T,g,2))}}};return i.stateNode=m,i}function p_(i,s,l){return i=_r(6,i,null,s),i.lanes=l,i}function g_(i,s,l){return s=_r(4,i.children!==null?i.children:[],i.key,s),s.lanes=l,s.stateNode={containerInfo:i.containerInfo,pendingChildren:null,implementation:i.implementation},s}function Ui(i){i.flags|=4}function k0(i,s){if(s.type!=="stylesheet"||(s.state.loading&4)!==0)i.flags&=-16777217;else if(i.flags|=16777216,!yb(s)){if(s=mr.current,s!==null&&((Ge&4194176)===Ge?Kr!==null:(Ge&62914560)!==Ge&&(Ge&536870912)===0||s!==Kr))throw vc=Tg,XT;i.flags|=8192}}function Rf(i,s){s!==null&&(i.flags|=4),i.flags&16384&&(s=i.tag!==22?fs():536870912,i.lanes|=s,Il|=s)}function Mc(i,s){if(!We)switch(i.tailMode){case"hidden":s=i.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?i.tail=null:l.sibling=null;break;case"collapsed":l=i.tail;for(var c=null;l!==null;)l.alternate!==null&&(c=l),l=l.sibling;c===null?s||i.tail===null?i.tail=null:i.tail.sibling=null:c.sibling=null}}function yt(i){var s=i.alternate!==null&&i.alternate.child===i.child,l=0,c=0;if(s)for(var m=i.child;m!==null;)l|=m.lanes|m.childLanes,c|=m.subtreeFlags&31457280,c|=m.flags&31457280,m.return=i,m=m.sibling;else for(m=i.child;m!==null;)l|=m.lanes|m.childLanes,c|=m.subtreeFlags,c|=m.flags,m.return=i,m=m.sibling;return i.subtreeFlags|=c,i.childLanes=l,s}function UP(i,s,l){var c=s.pendingProps;switch(vg(s),s.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return yt(s),null;case 1:return yt(s),null;case 3:return l=s.stateNode,c=null,i!==null&&(c=i.memoizedState.cache),s.memoizedState.cache!==c&&(s.flags|=2048),ki(Yt),_i(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(i===null||i.child===null)&&(pc(s)?Ui(s):i===null||i.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,Rr!==null&&(I_(Rr),Rr=null))),yt(s),null;case 26:return l=s.memoizedState,i===null?(Ui(s),l!==null?(yt(s),k0(s,l)):(yt(s),s.flags&=-16777217)):l?l!==i.memoizedState?(Ui(s),yt(s),k0(s,l)):(yt(s),s.flags&=-16777217):(i.memoizedProps!==c&&Ui(s),yt(s),s.flags&=-16777217),null;case 27:jo(s),l=rr.current;var m=s.type;if(i!==null&&s.stateNode!=null)i.memoizedProps!==c&&Ui(s);else{if(!c){if(s.stateNode===null)throw Error(r(166));return yt(s),null}i=Ut.current,pc(s)?WT(s):(i=cb(m,c,l),s.stateNode=i,Ui(s))}return yt(s),null;case 5:if(jo(s),l=s.type,i!==null&&s.stateNode!=null)i.memoizedProps!==c&&Ui(s);else{if(!c){if(s.stateNode===null)throw Error(r(166));return yt(s),null}if(i=Ut.current,pc(s))WT(s);else{switch(m=Uf(rr.current),i){case 1:i=m.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:i=m.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":i=m.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":i=m.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":i=m.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof c.is=="string"?m.createElement("select",{is:c.is}):m.createElement("select"),c.multiple?i.multiple=!0:c.size&&(i.size=c.size);break;default:i=typeof c.is=="string"?m.createElement(l,{is:c.is}):m.createElement(l)}}i[tn]=s,i[$t]=c;e:for(m=s.child;m!==null;){if(m.tag===5||m.tag===6)i.appendChild(m.stateNode);else if(m.tag!==4&&m.tag!==27&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===s)break e;for(;m.sibling===null;){if(m.return===null||m.return===s)break e;m=m.return}m.sibling.return=m.return,m=m.sibling}s.stateNode=i;e:switch(pn(i,l,c),l){case"button":case"input":case"select":case"textarea":i=!!c.autoFocus;break e;case"img":i=!0;break e;default:i=!1}i&&Ui(s)}}return yt(s),s.flags&=-16777217,null;case 6:if(i&&s.stateNode!=null)i.memoizedProps!==c&&Ui(s);else{if(typeof c!="string"&&s.stateNode===null)throw Error(r(166));if(i=rr.current,pc(s)){if(i=s.stateNode,l=s.memoizedProps,c=null,m=Pn,m!==null)switch(m.tag){case 27:case 5:c=m.memoizedProps}i[tn]=s,i=!!(i.nodeValue===l||c!==null&&c.suppressHydrationWarning===!0||ib(i.nodeValue,l)),i||Ha(s)}else i=Uf(i).createTextNode(c),i[tn]=s,s.stateNode=i}return yt(s),null;case 13:if(c=s.memoizedState,i===null||i.memoizedState!==null&&i.memoizedState.dehydrated!==null){if(m=pc(s),c!==null&&c.dehydrated!==null){if(i===null){if(!m)throw Error(r(318));if(m=s.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(r(317));m[tn]=s}else gc(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;yt(s),m=!1}else Rr!==null&&(I_(Rr),Rr=null),m=!0;if(!m)return s.flags&256?(Pi(s),s):(Pi(s),null)}if(Pi(s),(s.flags&128)!==0)return s.lanes=l,s;if(l=c!==null,i=i!==null&&i.memoizedState!==null,l){c=s.child,m=null,c.alternate!==null&&c.alternate.memoizedState!==null&&c.alternate.memoizedState.cachePool!==null&&(m=c.alternate.memoizedState.cachePool.pool);var g=null;c.memoizedState!==null&&c.memoizedState.cachePool!==null&&(g=c.memoizedState.cachePool.pool),g!==m&&(c.flags|=2048)}return l!==i&&l&&(s.child.flags|=8192),Rf(s,s.updateQueue),yt(s),null;case 4:return _i(),i===null&&V_(s.stateNode.containerInfo),yt(s),null;case 10:return ki(s.type),yt(s),null;case 19:if(Ze(Wt),m=s.memoizedState,m===null)return yt(s),null;if(c=(s.flags&128)!==0,g=m.rendering,g===null)if(c)Mc(m,!1);else{if(Rt!==0||i!==null&&(i.flags&128)!==0)for(i=s.child;i!==null;){if(g=cf(i),g!==null){for(s.flags|=128,Mc(m,!1),i=g.updateQueue,s.updateQueue=i,Rf(s,i),s.subtreeFlags=0,i=l,l=s.child;l!==null;)N0(l,i),l=l.sibling;return Ke(Wt,Wt.current&1|2),s.child}i=i.sibling}m.tail!==null&&Ln()>Cf&&(s.flags|=128,c=!0,Mc(m,!1),s.lanes=4194304)}else{if(!c)if(i=cf(g),i!==null){if(s.flags|=128,c=!0,i=i.updateQueue,s.updateQueue=i,Rf(s,i),Mc(m,!0),m.tail===null&&m.tailMode==="hidden"&&!g.alternate&&!We)return yt(s),null}else 2*Ln()-m.renderingStartTime>Cf&&l!==536870912&&(s.flags|=128,c=!0,Mc(m,!1),s.lanes=4194304);m.isBackwards?(g.sibling=s.child,s.child=g):(i=m.last,i!==null?i.sibling=g:s.child=g,m.last=g)}return m.tail!==null?(s=m.tail,m.rendering=s,m.tail=s.sibling,m.renderingStartTime=Ln(),s.sibling=null,i=Wt.current,Ke(Wt,c?i&1|2:i&1),s):(yt(s),null);case 22:case 23:return Pi(s),bg(),c=s.memoizedState!==null,i!==null?i.memoizedState!==null!==c&&(s.flags|=8192):c&&(s.flags|=8192),c?(l&536870912)!==0&&(s.flags&128)===0&&(yt(s),s.subtreeFlags&6&&(s.flags|=8192)):yt(s),l=s.updateQueue,l!==null&&Rf(s,l.retryQueue),l=null,i!==null&&i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),c=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(c=s.memoizedState.cachePool.pool),c!==l&&(s.flags|=2048),i!==null&&Ze($a),null;case 24:return l=null,i!==null&&(l=i.memoizedState.cache),s.memoizedState.cache!==l&&(s.flags|=2048),ki(Yt),yt(s),null;case 25:return null}throw Error(r(156,s.tag))}function BP(i,s){switch(vg(s),s.tag){case 1:return i=s.flags,i&65536?(s.flags=i&-65537|128,s):null;case 3:return ki(Yt),_i(),i=s.flags,(i&65536)!==0&&(i&128)===0?(s.flags=i&-65537|128,s):null;case 26:case 27:case 5:return jo(s),null;case 13:if(Pi(s),i=s.memoizedState,i!==null&&i.dehydrated!==null){if(s.alternate===null)throw Error(r(340));gc()}return i=s.flags,i&65536?(s.flags=i&-65537|128,s):null;case 19:return Ze(Wt),null;case 4:return _i(),null;case 10:return ki(s.type),null;case 22:case 23:return Pi(s),bg(),i!==null&&Ze($a),i=s.flags,i&65536?(s.flags=i&-65537|128,s):null;case 24:return ki(Yt),null;case 25:return null;default:return null}}function V0(i,s){switch(vg(s),s.tag){case 3:ki(Yt),_i();break;case 26:case 27:case 5:jo(s);break;case 4:_i();break;case 13:Pi(s);break;case 19:Ze(Wt);break;case 10:ki(s.type);break;case 22:case 23:Pi(s),bg(),i!==null&&Ze($a);break;case 24:ki(Yt)}}var zP={getCacheForType:function(i){var s=Tn(Yt),l=s.data.get(i);return l===void 0&&(l=i(),s.data.set(i,l)),l}},FP=typeof WeakMap=="function"?WeakMap:Map,vt=0,at=null,Ue=null,Ge=0,ot=0,Yn=null,Bi=!1,bl=!1,__=!1,zi=0,Rt=0,Us=0,to=0,y_=0,yr=0,Il=0,Lc=null,Wr=null,v_=!1,E_=0,Cf=1/0,Df=null,Bs=null,Pf=!1,no=null,Uc=0,T_=0,w_=null,Bc=0,b_=null;function Xn(){if((vt&2)!==0&&Ge!==0)return Ge&-Ge;if(A.T!==null){var i=pl;return i!==0?i:x_()}return Vd()}function M0(){yr===0&&(yr=(Ge&536870912)===0||We?Xu():536870912);var i=mr.current;return i!==null&&(i.flags|=32),yr}function xn(i,s,l){(i===at&&ot===2||i.cancelPendingCommit!==null)&&(Al(i,0),Fi(i,Ge,yr,!1)),Ot(i,l),((vt&2)===0||i!==at)&&(i===at&&((vt&2)===0&&(to|=l),Rt===4&&Fi(i,Ge,yr,!1)),Yr(i))}function L0(i,s,l){if((vt&6)!==0)throw Error(r(327));var c=!l&&(s&60)===0&&(s&i.expiredLanes)===0||ds(i,s),m=c?HP(i,s):R_(i,s,!0),g=c;do{if(m===0){bl&&!c&&Fi(i,s,0,!1);break}else if(m===6)Fi(i,s,0,!Bi);else{if(l=i.current.alternate,g&&!qP(l)){m=R_(i,s,!1),g=!1;continue}if(m===2){if(g=s,i.errorRecoveryDisabledLanes&g)var T=0;else T=i.pendingLanes&-536870913,T=T!==0?T:T&536870912?536870912:0;if(T!==0){s=T;e:{var b=i;m=Lc;var C=b.current.memoizedState.isDehydrated;if(C&&(Al(b,T).flags|=256),T=R_(b,T,!1),T!==2){if(__&&!C){b.errorRecoveryDisabledLanes|=g,to|=g,m=4;break e}g=Wr,Wr=m,g!==null&&I_(g)}m=T}if(g=!1,m!==2)continue}}if(m===1){Al(i,0),Fi(i,s,0,!0);break}e:{switch(c=i,m){case 0:case 1:throw Error(r(345));case 4:if((s&4194176)===s){Fi(c,s,yr,!Bi);break e}break;case 2:Wr=null;break;case 3:case 5:break;default:throw Error(r(329))}if(c.finishedWork=l,c.finishedLanes=s,(s&62914560)===s&&(g=E_+300-Ln(),10<g)){if(Fi(c,s,yr,!Bi),ir(c,0)!==0)break e;c.timeoutHandle=ob(U0.bind(null,c,l,Wr,Df,v_,s,yr,to,Il,Bi,2,-0,0),g);break e}U0(c,l,Wr,Df,v_,s,yr,to,Il,Bi,0,-0,0)}}break}while(!0);Yr(i)}function I_(i){Wr===null?Wr=i:Wr.push.apply(Wr,i)}function U0(i,s,l,c,m,g,T,b,C,M,Z,ne,G){var X=s.subtreeFlags;if((X&8192||(X&16785408)===16785408)&&(Gc={stylesheets:null,count:0,unsuspend:bx},C0(s),s=Ax(),s!==null)){i.cancelPendingCommit=s(G0.bind(null,i,l,c,m,T,b,C,1,ne,G)),Fi(i,g,T,!M);return}G0(i,l,c,m,T,b,C,Z,ne,G)}function qP(i){for(var s=i;;){var l=s.tag;if((l===0||l===11||l===15)&&s.flags&16384&&(l=s.updateQueue,l!==null&&(l=l.stores,l!==null)))for(var c=0;c<l.length;c++){var m=l[c],g=m.getSnapshot;m=m.value;try{if(!Kn(g(),m))return!1}catch{return!1}}if(l=s.child,s.subtreeFlags&16384&&l!==null)l.return=s,s=l;else{if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function Fi(i,s,l,c){s&=~y_,s&=~to,i.suspendedLanes|=s,i.pingedLanes&=~s,c&&(i.warmLanes|=s),c=i.expirationTimes;for(var m=s;0<m;){var g=31-Rn(m),T=1<<g;c[g]=-1,m&=~T}l!==0&&ms(i,l,s)}function xf(){return(vt&6)===0?(zc(0),!1):!0}function A_(){if(Ue!==null){if(ot===0)var i=Ue.return;else i=Ue,Oi=Xa=null,xg(i),fl=null,Ec=0,i=Ue;for(;i!==null;)V0(i.alternate,i),i=i.return;Ue=null}}function Al(i,s){i.finishedWork=null,i.finishedLanes=0;var l=i.timeoutHandle;l!==-1&&(i.timeoutHandle=-1,ox(l)),l=i.cancelPendingCommit,l!==null&&(i.cancelPendingCommit=null,l()),A_(),at=i,Ue=l=Ls(i.current,null),Ge=s,ot=0,Yn=null,Bi=!1,bl=ds(i,s),__=!1,Il=yr=y_=to=Us=Rt=0,Wr=Lc=null,v_=!1,(s&8)!==0&&(s|=s&32);var c=i.entangledLanes;if(c!==0)for(i=i.entanglements,c&=s;0<c;){var m=31-Rn(c),g=1<<m;s|=i[m],c&=~g}return zi=s,ef(),l}function B0(i,s){Ve=null,A.H=Qr,s===yc?(s=ew(),ot=3):s===XT?(s=ew(),ot=4):ot=s===Zw?8:s!==null&&typeof s=="object"&&typeof s.then=="function"?6:1,Yn=s,Ue===null&&(Rt=1,Tf(i,hr(s,i.current)))}function z0(){var i=A.H;return A.H=Qr,i===null?Qr:i}function F0(){var i=A.A;return A.A=zP,i}function S_(){Rt=4,Bi||(Ge&4194176)!==Ge&&mr.current!==null||(bl=!0),(Us&134217727)===0&&(to&134217727)===0||at===null||Fi(at,Ge,yr,!1)}function R_(i,s,l){var c=vt;vt|=2;var m=z0(),g=F0();(at!==i||Ge!==s)&&(Df=null,Al(i,s)),s=!1;var T=Rt;e:do try{if(ot!==0&&Ue!==null){var b=Ue,C=Yn;switch(ot){case 8:A_(),T=6;break e;case 3:case 2:case 6:mr.current===null&&(s=!0);var M=ot;if(ot=0,Yn=null,Sl(i,b,C,M),l&&bl){T=0;break e}break;default:M=ot,ot=0,Yn=null,Sl(i,b,C,M)}}jP(),T=Rt;break}catch(Z){B0(i,Z)}while(!0);return s&&i.shellSuspendCounter++,Oi=Xa=null,vt=c,A.H=m,A.A=g,Ue===null&&(at=null,Ge=0,ef()),T}function jP(){for(;Ue!==null;)q0(Ue)}function HP(i,s){var l=vt;vt|=2;var c=z0(),m=F0();at!==i||Ge!==s?(Df=null,Cf=Ln()+500,Al(i,s)):bl=ds(i,s);e:do try{if(ot!==0&&Ue!==null){s=Ue;var g=Yn;t:switch(ot){case 1:ot=0,Yn=null,Sl(i,s,g,1);break;case 2:if(ZT(g)){ot=0,Yn=null,j0(s);break}s=function(){ot===2&&at===i&&(ot=7),Yr(i)},g.then(s,s);break e;case 3:ot=7;break e;case 4:ot=5;break e;case 7:ZT(g)?(ot=0,Yn=null,j0(s)):(ot=0,Yn=null,Sl(i,s,g,7));break;case 5:var T=null;switch(Ue.tag){case 26:T=Ue.memoizedState;case 5:case 27:var b=Ue;if(!T||yb(T)){ot=0,Yn=null;var C=b.sibling;if(C!==null)Ue=C;else{var M=b.return;M!==null?(Ue=M,Nf(M)):Ue=null}break t}}ot=0,Yn=null,Sl(i,s,g,5);break;case 6:ot=0,Yn=null,Sl(i,s,g,6);break;case 8:A_(),Rt=6;break e;default:throw Error(r(462))}}GP();break}catch(Z){B0(i,Z)}while(!0);return Oi=Xa=null,A.H=c,A.A=m,vt=l,Ue!==null?0:(at=null,Ge=0,ef(),Rt)}function GP(){for(;Ue!==null&&!tg();)q0(Ue)}function q0(i){var s=c0(i.alternate,i,zi);i.memoizedProps=i.pendingProps,s===null?Nf(i):Ue=s}function j0(i){var s=i,l=s.alternate;switch(s.tag){case 15:case 0:s=i0(l,s,s.pendingProps,s.type,void 0,Ge);break;case 11:s=i0(l,s,s.pendingProps,s.type.render,s.ref,Ge);break;case 5:xg(s);default:V0(l,s),s=Ue=N0(s,zi),s=c0(l,s,zi)}i.memoizedProps=i.pendingProps,s===null?Nf(i):Ue=s}function Sl(i,s,l,c){Oi=Xa=null,xg(s),fl=null,Ec=0;var m=s.return;try{if(OP(i,m,s,l,Ge)){Rt=1,Tf(i,hr(l,i.current)),Ue=null;return}}catch(g){if(m!==null)throw Ue=m,g;Rt=1,Tf(i,hr(l,i.current)),Ue=null;return}s.flags&32768?(We||c===1?i=!0:bl||(Ge&536870912)!==0?i=!1:(Bi=i=!0,(c===2||c===3||c===6)&&(c=mr.current,c!==null&&c.tag===13&&(c.flags|=16384))),H0(s,i)):Nf(s)}function Nf(i){var s=i;do{if((s.flags&32768)!==0){H0(s,Bi);return}i=s.return;var l=UP(s.alternate,s,zi);if(l!==null){Ue=l;return}if(s=s.sibling,s!==null){Ue=s;return}Ue=s=i}while(s!==null);Rt===0&&(Rt=5)}function H0(i,s){do{var l=BP(i.alternate,i);if(l!==null){l.flags&=32767,Ue=l;return}if(l=i.return,l!==null&&(l.flags|=32768,l.subtreeFlags=0,l.deletions=null),!s&&(i=i.sibling,i!==null)){Ue=i;return}Ue=i=l}while(i!==null);Rt=6,Ue=null}function G0(i,s,l,c,m,g,T,b,C,M){var Z=A.T,ne=fe.p;try{fe.p=2,A.T=null,$P(i,s,l,c,ne,m,g,T,b,C,M)}finally{A.T=Z,fe.p=ne}}function $P(i,s,l,c,m,g,T,b){do Rl();while(no!==null);if((vt&6)!==0)throw Error(r(327));var C=i.finishedWork;if(c=i.finishedLanes,C===null)return null;if(i.finishedWork=null,i.finishedLanes=0,C===i.current)throw Error(r(177));i.callbackNode=null,i.callbackPriority=0,i.cancelPendingCommit=null;var M=C.lanes|C.childLanes;if(M|=gg,Od(i,c,M,g,T,b),i===at&&(Ue=at=null,Ge=0),(C.subtreeFlags&10256)===0&&(C.flags&10256)===0||Pf||(Pf=!0,T_=M,w_=l,YP(yi,function(){return Rl(),null})),l=(C.flags&15990)!==0,(C.subtreeFlags&15990)!==0||l?(l=A.T,A.T=null,g=fe.p,fe.p=2,T=vt,vt|=4,VP(i,C),A0(C,i),gP(B_,i.containerInfo),Hf=!!U_,B_=U_=null,i.current=C,T0(i,C.alternate,C),Ku(),vt=T,fe.p=g,A.T=l):i.current=C,Pf?(Pf=!1,no=i,Uc=c):$0(i,M),M=i.pendingLanes,M===0&&(Bs=null),Wu(C.stateNode),Yr(i),s!==null)for(m=i.onRecoverableError,C=0;C<s.length;C++)M=s[C],m(M.value,{componentStack:M.stack});return(Uc&3)!==0&&Rl(),M=i.pendingLanes,(c&4194218)!==0&&(M&42)!==0?i===b_?Bc++:(Bc=0,b_=i):Bc=0,zc(0),null}function $0(i,s){(i.pooledCacheLanes&=s)===0&&(s=i.pooledCache,s!=null&&(i.pooledCache=null,wc(s)))}function Rl(){if(no!==null){var i=no,s=T_;T_=0;var l=kd(Uc),c=A.T,m=fe.p;try{if(fe.p=32>l?32:l,A.T=null,no===null)var g=!1;else{l=w_,w_=null;var T=no,b=Uc;if(no=null,Uc=0,(vt&6)!==0)throw Error(r(331));var C=vt;if(vt|=4,P0(T.current),R0(T,T.current,b,l),vt=C,zc(0,!1),En&&typeof En.onPostCommitFiberRoot=="function")try{En.onPostCommitFiberRoot(cs,T)}catch{}g=!0}return g}finally{fe.p=m,A.T=c,$0(i,s)}}return!1}function K0(i,s,l){s=hr(l,s),s=Gg(i.stateNode,s,2),i=Os(i,s,2),i!==null&&(Ot(i,2),Yr(i))}function st(i,s,l){if(i.tag===3)K0(i,i,l);else for(;s!==null;){if(s.tag===3){K0(s,i,l);break}else if(s.tag===1){var c=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Bs===null||!Bs.has(c))){i=hr(l,i),l=Yw(2),c=Os(s,l,2),c!==null&&(Xw(l,c,s,i),Ot(c,2),Yr(c));break}}s=s.return}}function C_(i,s,l){var c=i.pingCache;if(c===null){c=i.pingCache=new FP;var m=new Set;c.set(s,m)}else m=c.get(s),m===void 0&&(m=new Set,c.set(s,m));m.has(l)||(__=!0,m.add(l),i=KP.bind(null,i,s,l),s.then(i,i))}function KP(i,s,l){var c=i.pingCache;c!==null&&c.delete(s),i.pingedLanes|=i.suspendedLanes&l,i.warmLanes&=~l,at===i&&(Ge&l)===l&&(Rt===4||Rt===3&&(Ge&62914560)===Ge&&300>Ln()-E_?(vt&2)===0&&Al(i,0):y_|=l,Il===Ge&&(Il=0)),Yr(i)}function Q0(i,s){s===0&&(s=fs()),i=As(i,s),i!==null&&(Ot(i,s),Yr(i))}function QP(i){var s=i.memoizedState,l=0;s!==null&&(l=s.retryLane),Q0(i,l)}function WP(i,s){var l=0;switch(i.tag){case 13:var c=i.stateNode,m=i.memoizedState;m!==null&&(l=m.retryLane);break;case 19:c=i.stateNode;break;case 22:c=i.stateNode._retryCache;break;default:throw Error(r(314))}c!==null&&c.delete(s),Q0(i,l)}function YP(i,s){return Sa(i,s)}var Of=null,Cl=null,D_=!1,kf=!1,P_=!1,ro=0;function Yr(i){i!==Cl&&i.next===null&&(Cl===null?Of=Cl=i:Cl=Cl.next=i),kf=!0,D_||(D_=!0,ZP(XP))}function zc(i,s){if(!P_&&kf){P_=!0;do for(var l=!1,c=Of;c!==null;){if(i!==0){var m=c.pendingLanes;if(m===0)var g=0;else{var T=c.suspendedLanes,b=c.pingedLanes;g=(1<<31-Rn(42|i)+1)-1,g&=m&~(T&~b),g=g&201326677?g&201326677|1:g?g|2:0}g!==0&&(l=!0,X0(c,g))}else g=Ge,g=ir(c,c===at?g:0),(g&3)===0||ds(c,g)||(l=!0,X0(c,g));c=c.next}while(l);P_=!1}}function XP(){kf=D_=!1;var i=0;ro!==0&&(ax()&&(i=ro),ro=0);for(var s=Ln(),l=null,c=Of;c!==null;){var m=c.next,g=W0(c,s);g===0?(c.next=null,l===null?Of=m:l.next=m,m===null&&(Cl=l)):(l=c,(i!==0||(g&3)!==0)&&(kf=!0)),c=m}zc(i)}function W0(i,s){for(var l=i.suspendedLanes,c=i.pingedLanes,m=i.expirationTimes,g=i.pendingLanes&-62914561;0<g;){var T=31-Rn(g),b=1<<T,C=m[T];C===-1?((b&l)===0||(b&c)!==0)&&(m[T]=$o(b,s)):C<=s&&(i.expiredLanes|=b),g&=~b}if(s=at,l=Ge,l=ir(i,i===s?l:0),c=i.callbackNode,l===0||i===s&&ot===2||i.cancelPendingCommit!==null)return c!==null&&c!==null&&Go(c),i.callbackNode=null,i.callbackPriority=0;if((l&3)===0||ds(i,l)){if(s=l&-l,s===i.callbackPriority)return s;switch(c!==null&&Go(c),kd(l)){case 2:case 8:l=en;break;case 32:l=yi;break;case 268435456:l=Qu;break;default:l=yi}return c=Y0.bind(null,i),l=Sa(l,c),i.callbackPriority=s,i.callbackNode=l,s}return c!==null&&c!==null&&Go(c),i.callbackPriority=2,i.callbackNode=null,2}function Y0(i,s){var l=i.callbackNode;if(Rl()&&i.callbackNode!==l)return null;var c=Ge;return c=ir(i,i===at?c:0),c===0?null:(L0(i,c,s),W0(i,Ln()),i.callbackNode!=null&&i.callbackNode===l?Y0.bind(null,i):null)}function X0(i,s){if(Rl())return null;L0(i,s,!0)}function ZP(i){lx(function(){(vt&6)!==0?Sa(Gt,i):i()})}function x_(){return ro===0&&(ro=Xu()),ro}function Z0(i){return i==null||typeof i=="symbol"||typeof i=="boolean"?null:typeof i=="function"?i:Br(""+i)}function J0(i,s){var l=s.ownerDocument.createElement("input");return l.name=s.name,l.value=s.value,i.id&&l.setAttribute("form",i.id),s.parentNode.insertBefore(l,s),i=new FormData(i),l.parentNode.removeChild(l),i}function JP(i,s,l,c,m){if(s==="submit"&&l&&l.stateNode===m){var g=Z0((m[$t]||null).action),T=c.submitter;T&&(s=(s=T[$t]||null)?Z0(s.formAction):T.getAttribute("formAction"),s!==null&&(g=s,T=null));var b=new Jo("action","action",null,c,m);i.push({event:b,listeners:[{instance:null,listener:function(){if(c.defaultPrevented){if(ro!==0){var C=T?J0(m,T):new FormData(m);zg(l,{pending:!0,data:C,method:m.method,action:g},null,C)}}else typeof g=="function"&&(b.preventDefault(),C=T?J0(m,T):new FormData(m),zg(l,{pending:!0,data:C,method:m.method,action:g},g,C))},currentTarget:m}]})}}for(var N_=0;N_<GT.length;N_++){var O_=GT[N_],ex=O_.toLowerCase(),tx=O_[0].toUpperCase()+O_.slice(1);Sr(ex,"on"+tx)}Sr(zT,"onAnimationEnd"),Sr(FT,"onAnimationIteration"),Sr(qT,"onAnimationStart"),Sr("dblclick","onDoubleClick"),Sr("focusin","onFocus"),Sr("focusout","onBlur"),Sr(yP,"onTransitionRun"),Sr(vP,"onTransitionStart"),Sr(EP,"onTransitionCancel"),Sr(jT,"onTransitionEnd"),Un("onMouseEnter",["mouseout","mouseover"]),Un("onMouseLeave",["mouseout","mouseover"]),Un("onPointerEnter",["pointerout","pointerover"]),Un("onPointerLeave",["pointerout","pointerover"]),Gn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Gn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Gn("onBeforeInput",["compositionend","keypress","textInput","paste"]),Gn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Gn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Gn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Fc="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),nx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Fc));function eb(i,s){s=(s&4)!==0;for(var l=0;l<i.length;l++){var c=i[l],m=c.event;c=c.listeners;e:{var g=void 0;if(s)for(var T=c.length-1;0<=T;T--){var b=c[T],C=b.instance,M=b.currentTarget;if(b=b.listener,C!==g&&m.isPropagationStopped())break e;g=b,m.currentTarget=M;try{g(m)}catch(Z){Ef(Z)}m.currentTarget=null,g=C}else for(T=0;T<c.length;T++){if(b=c[T],C=b.instance,M=b.currentTarget,b=b.listener,C!==g&&m.isPropagationStopped())break e;g=b,m.currentTarget=M;try{g(m)}catch(Z){Ef(Z)}m.currentTarget=null,g=C}}}}function qe(i,s){var l=s[Ca];l===void 0&&(l=s[Ca]=new Set);var c=i+"__bubble";l.has(c)||(tb(s,i,2,!1),l.add(c))}function k_(i,s,l){var c=0;s&&(c|=4),tb(l,i,c,s)}var Vf="_reactListening"+Math.random().toString(36).slice(2);function V_(i){if(!i[Vf]){i[Vf]=!0,Ju.forEach(function(l){l!=="selectionchange"&&(nx.has(l)||k_(l,!1,i),k_(l,!0,i))});var s=i.nodeType===9?i:i.ownerDocument;s===null||s[Vf]||(s[Vf]=!0,k_("selectionchange",!1,s))}}function tb(i,s,l,c){switch(Ib(s)){case 2:var m=Cx;break;case 8:m=Dx;break;default:m=Q_}l=m.bind(null,s,l,i),m=void 0,!lr||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(m=!0),c?m!==void 0?i.addEventListener(s,l,{capture:!0,passive:m}):i.addEventListener(s,l,!0):m!==void 0?i.addEventListener(s,l,{passive:m}):i.addEventListener(s,l,!1)}function M_(i,s,l,c,m){var g=c;if((s&1)===0&&(s&2)===0&&c!==null)e:for(;;){if(c===null)return;var T=c.tag;if(T===3||T===4){var b=c.stateNode.containerInfo;if(b===m||b.nodeType===8&&b.parentNode===m)break;if(T===4)for(T=c.return;T!==null;){var C=T.tag;if((C===3||C===4)&&(C=T.stateNode.containerInfo,C===m||C.nodeType===8&&C.parentNode===m))return;T=T.return}for(;b!==null;){if(T=Ar(b),T===null)return;if(C=T.tag,C===5||C===6||C===26||C===27){c=g=T;continue e}b=b.parentNode}}c=c.return}Bd(function(){var M=g,Z=Zo(l),ne=[];e:{var G=HT.get(i);if(G!==void 0){var X=Jo,Ee=i;switch(i){case"keypress":if(Fr(l)===0)break e;case"keydown":case"keyup":X=sl;break;case"focusin":Ee="focus",X=nl;break;case"focusout":Ee="blur",X=nl;break;case"beforeblur":case"afterblur":X=nl;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":X=ur;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":X=lg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":X=Kd;break;case zT:case FT:case qT:X=rl;break;case jT:X=Wd;break;case"scroll":case"scrollend":X=zd;break;case"wheel":X=al;break;case"copy":case"cut":case"paste":X=il;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":X=hc;break;case"toggle":case"beforetoggle":X=Xd}var Pe=(s&4)!==0,Ct=!Pe&&(i==="scroll"||i==="scrollend"),B=Pe?G!==null?G+"Capture":null:G;Pe=[];for(var k=M,j;k!==null;){var J=k;if(j=J.stateNode,J=J.tag,J!==5&&J!==26&&J!==27||j===null||B===null||(J=Oa(k,B),J!=null&&Pe.push(qc(k,J,j))),Ct)break;k=k.return}0<Pe.length&&(G=new X(G,Ee,null,l,Z),ne.push({event:G,listeners:Pe}))}}if((s&7)===0){e:{if(G=i==="mouseover"||i==="pointerover",X=i==="mouseout"||i==="pointerout",G&&l!==or&&(Ee=l.relatedTarget||l.fromElement)&&(Ar(Ee)||Ee[vi]))break e;if((X||G)&&(G=Z.window===Z?Z:(G=Z.ownerDocument)?G.defaultView||G.parentWindow:window,X?(Ee=l.relatedTarget||l.toElement,X=M,Ee=Ee?Ar(Ee):null,Ee!==null&&(Ct=we(Ee),Pe=Ee.tag,Ee!==Ct||Pe!==5&&Pe!==27&&Pe!==6)&&(Ee=null)):(X=null,Ee=M),X!==Ee)){if(Pe=ur,J="onMouseLeave",B="onMouseEnter",k="mouse",(i==="pointerout"||i==="pointerover")&&(Pe=hc,J="onPointerLeave",B="onPointerEnter",k="pointer"),Ct=X==null?G:ys(X),j=Ee==null?G:ys(Ee),G=new Pe(J,k+"leave",X,l,Z),G.target=Ct,G.relatedTarget=j,J=null,Ar(Z)===M&&(Pe=new Pe(B,k+"enter",Ee,l,Z),Pe.target=j,Pe.relatedTarget=Ct,J=Pe),Ct=J,X&&Ee)t:{for(Pe=X,B=Ee,k=0,j=Pe;j;j=Dl(j))k++;for(j=0,J=B;J;J=Dl(J))j++;for(;0<k-j;)Pe=Dl(Pe),k--;for(;0<j-k;)B=Dl(B),j--;for(;k--;){if(Pe===B||B!==null&&Pe===B.alternate)break t;Pe=Dl(Pe),B=Dl(B)}Pe=null}else Pe=null;X!==null&&nb(ne,G,X,Pe,!1),Ee!==null&&Ct!==null&&nb(ne,Ct,Ee,Pe,!0)}}e:{if(G=M?ys(M):window,X=G.nodeName&&G.nodeName.toLowerCase(),X==="select"||X==="input"&&G.type==="file")var ye=DT;else if(Qt(G))if(PT)ye=mP;else{ye=dP;var Le=hP}else X=G.nodeName,!X||X.toLowerCase()!=="input"||G.type!=="checkbox"&&G.type!=="radio"?M&&ic(M.elementType)&&(ye=DT):ye=fP;if(ye&&(ye=ye(i,M))){Ri(ne,ye,l,Z);break e}Le&&Le(i,G,M),i==="focusout"&&M&&G.type==="number"&&M.memoizedProps.value!=null&&Xo(G,"number",G.value)}switch(Le=M?ys(M):window,i){case"focusin":(Qt(Le)||Le.contentEditable==="true")&&(ol=Le,fg=M,mc=null);break;case"focusout":mc=fg=ol=null;break;case"mousedown":mg=!0;break;case"contextmenu":case"mouseup":case"dragend":mg=!1,UT(ne,l,Z);break;case"selectionchange":if(_P)break;case"keydown":case"keyup":UT(ne,l,Z)}var be;if(Hr)e:{switch(i){case"compositionstart":var Se="onCompositionStart";break e;case"compositionend":Se="onCompositionEnd";break e;case"compositionupdate":Se="onCompositionUpdate";break e}Se=void 0}else je?Q(i,l)&&(Se="onCompositionEnd"):i==="keydown"&&l.keyCode===229&&(Se="onCompositionStart");Se&&(E&&l.locale!=="ko"&&(je||Se!=="onCompositionStart"?Se==="onCompositionEnd"&&je&&(be=ac()):(zr=Z,Is="value"in zr?zr.value:zr.textContent,je=!0)),Le=Mf(M,Se),0<Le.length&&(Se=new uc(Se,i,null,l,Z),ne.push({event:Se,listeners:Le}),be?Se.data=be:(be=ue(l),be!==null&&(Se.data=be)))),(be=_?Kt(i,l):He(i,l))&&(Se=Mf(M,"onBeforeInput"),0<Se.length&&(Le=new uc("onBeforeInput","beforeinput",null,l,Z),ne.push({event:Le,listeners:Se}),Le.data=be)),JP(ne,i,M,l,Z)}eb(ne,s)})}function qc(i,s,l){return{instance:i,listener:s,currentTarget:l}}function Mf(i,s){for(var l=s+"Capture",c=[];i!==null;){var m=i,g=m.stateNode;m=m.tag,m!==5&&m!==26&&m!==27||g===null||(m=Oa(i,l),m!=null&&c.unshift(qc(i,m,g)),m=Oa(i,s),m!=null&&c.push(qc(i,m,g))),i=i.return}return c}function Dl(i){if(i===null)return null;do i=i.return;while(i&&i.tag!==5&&i.tag!==27);return i||null}function nb(i,s,l,c,m){for(var g=s._reactName,T=[];l!==null&&l!==c;){var b=l,C=b.alternate,M=b.stateNode;if(b=b.tag,C!==null&&C===c)break;b!==5&&b!==26&&b!==27||M===null||(C=M,m?(M=Oa(l,g),M!=null&&T.unshift(qc(l,M,C))):m||(M=Oa(l,g),M!=null&&T.push(qc(l,M,C)))),l=l.return}T.length!==0&&i.push({event:s,listeners:T})}var rx=/\r\n?/g,ix=/\u0000|\uFFFD/g;function rb(i){return(typeof i=="string"?i:""+i).replace(rx,`
`).replace(ix,"")}function ib(i,s){return s=rb(s),rb(i)===s}function Lf(){}function it(i,s,l,c,m,g){switch(l){case"children":typeof c=="string"?s==="body"||s==="textarea"&&c===""||ar(i,c):(typeof c=="number"||typeof c=="bigint")&&s!=="body"&&ar(i,""+c);break;case"className":Ts(i,"class",c);break;case"tabIndex":Ts(i,"tabindex",c);break;case"dir":case"role":case"viewBox":case"width":case"height":Ts(i,l,c);break;case"style":Ud(i,c,g);break;case"data":if(s!=="object"){Ts(i,"data",c);break}case"src":case"href":if(c===""&&(s!=="a"||l!=="href")){i.removeAttribute(l);break}if(c==null||typeof c=="function"||typeof c=="symbol"||typeof c=="boolean"){i.removeAttribute(l);break}c=Br(""+c),i.setAttribute(l,c);break;case"action":case"formAction":if(typeof c=="function"){i.setAttribute(l,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof g=="function"&&(l==="formAction"?(s!=="input"&&it(i,s,"name",m.name,m,null),it(i,s,"formEncType",m.formEncType,m,null),it(i,s,"formMethod",m.formMethod,m,null),it(i,s,"formTarget",m.formTarget,m,null)):(it(i,s,"encType",m.encType,m,null),it(i,s,"method",m.method,m,null),it(i,s,"target",m.target,m,null)));if(c==null||typeof c=="symbol"||typeof c=="boolean"){i.removeAttribute(l);break}c=Br(""+c),i.setAttribute(l,c);break;case"onClick":c!=null&&(i.onclick=Lf);break;case"onScroll":c!=null&&qe("scroll",i);break;case"onScrollEnd":c!=null&&qe("scrollend",i);break;case"dangerouslySetInnerHTML":if(c!=null){if(typeof c!="object"||!("__html"in c))throw Error(r(61));if(l=c.__html,l!=null){if(m.children!=null)throw Error(r(60));i.innerHTML=l}}break;case"multiple":i.multiple=c&&typeof c!="function"&&typeof c!="symbol";break;case"muted":i.muted=c&&typeof c!="function"&&typeof c!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(c==null||typeof c=="function"||typeof c=="boolean"||typeof c=="symbol"){i.removeAttribute("xlink:href");break}l=Br(""+c),i.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",l);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":c!=null&&typeof c!="function"&&typeof c!="symbol"?i.setAttribute(l,""+c):i.removeAttribute(l);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":c&&typeof c!="function"&&typeof c!="symbol"?i.setAttribute(l,""):i.removeAttribute(l);break;case"capture":case"download":c===!0?i.setAttribute(l,""):c!==!1&&c!=null&&typeof c!="function"&&typeof c!="symbol"?i.setAttribute(l,c):i.removeAttribute(l);break;case"cols":case"rows":case"size":case"span":c!=null&&typeof c!="function"&&typeof c!="symbol"&&!isNaN(c)&&1<=c?i.setAttribute(l,c):i.removeAttribute(l);break;case"rowSpan":case"start":c==null||typeof c=="function"||typeof c=="symbol"||isNaN(c)?i.removeAttribute(l):i.setAttribute(l,c);break;case"popover":qe("beforetoggle",i),qe("toggle",i),Es(i,"popover",c);break;case"xlinkActuate":sr(i,"http://www.w3.org/1999/xlink","xlink:actuate",c);break;case"xlinkArcrole":sr(i,"http://www.w3.org/1999/xlink","xlink:arcrole",c);break;case"xlinkRole":sr(i,"http://www.w3.org/1999/xlink","xlink:role",c);break;case"xlinkShow":sr(i,"http://www.w3.org/1999/xlink","xlink:show",c);break;case"xlinkTitle":sr(i,"http://www.w3.org/1999/xlink","xlink:title",c);break;case"xlinkType":sr(i,"http://www.w3.org/1999/xlink","xlink:type",c);break;case"xmlBase":sr(i,"http://www.w3.org/XML/1998/namespace","xml:base",c);break;case"xmlLang":sr(i,"http://www.w3.org/XML/1998/namespace","xml:lang",c);break;case"xmlSpace":sr(i,"http://www.w3.org/XML/1998/namespace","xml:space",c);break;case"is":Es(i,"is",c);break;case"innerText":case"textContent":break;default:(!(2<l.length)||l[0]!=="o"&&l[0]!=="O"||l[1]!=="n"&&l[1]!=="N")&&(l=ag.get(l)||l,Es(i,l,c))}}function L_(i,s,l,c,m,g){switch(l){case"style":Ud(i,c,g);break;case"dangerouslySetInnerHTML":if(c!=null){if(typeof c!="object"||!("__html"in c))throw Error(r(61));if(l=c.__html,l!=null){if(m.children!=null)throw Error(r(60));i.innerHTML=l}}break;case"children":typeof c=="string"?ar(i,c):(typeof c=="number"||typeof c=="bigint")&&ar(i,""+c);break;case"onScroll":c!=null&&qe("scroll",i);break;case"onScrollEnd":c!=null&&qe("scrollend",i);break;case"onClick":c!=null&&(i.onclick=Lf);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Wo.hasOwnProperty(l))e:{if(l[0]==="o"&&l[1]==="n"&&(m=l.endsWith("Capture"),s=l.slice(2,m?l.length-7:void 0),g=i[$t]||null,g=g!=null?g[l]:null,typeof g=="function"&&i.removeEventListener(s,g,m),typeof c=="function")){typeof g!="function"&&g!==null&&(l in i?i[l]=null:i.hasAttribute(l)&&i.removeAttribute(l)),i.addEventListener(s,c,m);break e}l in i?i[l]=c:c===!0?i.setAttribute(l,""):Es(i,l,c)}}}function pn(i,s,l){switch(s){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":qe("error",i),qe("load",i);var c=!1,m=!1,g;for(g in l)if(l.hasOwnProperty(g)){var T=l[g];if(T!=null)switch(g){case"src":c=!0;break;case"srcSet":m=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,s));default:it(i,s,g,T,l,null)}}m&&it(i,s,"srcSet",l.srcSet,l,null),c&&it(i,s,"src",l.src,l,null);return;case"input":qe("invalid",i);var b=g=T=m=null,C=null,M=null;for(c in l)if(l.hasOwnProperty(c)){var Z=l[c];if(Z!=null)switch(c){case"name":m=Z;break;case"type":T=Z;break;case"checked":C=Z;break;case"defaultChecked":M=Z;break;case"value":g=Z;break;case"defaultValue":b=Z;break;case"children":case"dangerouslySetInnerHTML":if(Z!=null)throw Error(r(137,s));break;default:it(i,s,c,Z,l,null)}}xa(i,g,b,C,M,T,m,!1),Pa(i);return;case"select":qe("invalid",i),c=T=g=null;for(m in l)if(l.hasOwnProperty(m)&&(b=l[m],b!=null))switch(m){case"value":g=b;break;case"defaultValue":T=b;break;case"multiple":c=b;default:it(i,s,m,b,l,null)}s=g,l=T,i.multiple=!!c,s!=null?Qe(i,!!c,s,!1):l!=null&&Qe(i,!!c,l,!0);return;case"textarea":qe("invalid",i),g=m=c=null;for(T in l)if(l.hasOwnProperty(T)&&(b=l[T],b!=null))switch(T){case"value":c=b;break;case"defaultValue":m=b;break;case"children":g=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(r(91));break;default:it(i,s,T,b,l,null)}bs(i,c,m,g),Pa(i);return;case"option":for(C in l)if(l.hasOwnProperty(C)&&(c=l[C],c!=null))switch(C){case"selected":i.selected=c&&typeof c!="function"&&typeof c!="symbol";break;default:it(i,s,C,c,l,null)}return;case"dialog":qe("cancel",i),qe("close",i);break;case"iframe":case"object":qe("load",i);break;case"video":case"audio":for(c=0;c<Fc.length;c++)qe(Fc[c],i);break;case"image":qe("error",i),qe("load",i);break;case"details":qe("toggle",i);break;case"embed":case"source":case"link":qe("error",i),qe("load",i);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(M in l)if(l.hasOwnProperty(M)&&(c=l[M],c!=null))switch(M){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,s));default:it(i,s,M,c,l,null)}return;default:if(ic(s)){for(Z in l)l.hasOwnProperty(Z)&&(c=l[Z],c!==void 0&&L_(i,s,Z,c,l,void 0));return}}for(b in l)l.hasOwnProperty(b)&&(c=l[b],c!=null&&it(i,s,b,c,l,null))}function sx(i,s,l,c){switch(s){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var m=null,g=null,T=null,b=null,C=null,M=null,Z=null;for(X in l){var ne=l[X];if(l.hasOwnProperty(X)&&ne!=null)switch(X){case"checked":break;case"value":break;case"defaultValue":C=ne;default:c.hasOwnProperty(X)||it(i,s,X,null,c,ne)}}for(var G in c){var X=c[G];if(ne=l[G],c.hasOwnProperty(G)&&(X!=null||ne!=null))switch(G){case"type":g=X;break;case"name":m=X;break;case"checked":M=X;break;case"defaultChecked":Z=X;break;case"value":T=X;break;case"defaultValue":b=X;break;case"children":case"dangerouslySetInnerHTML":if(X!=null)throw Error(r(137,s));break;default:X!==ne&&it(i,s,G,X,c,ne)}}ws(i,T,b,C,M,Z,g,m);return;case"select":X=T=b=G=null;for(g in l)if(C=l[g],l.hasOwnProperty(g)&&C!=null)switch(g){case"value":break;case"multiple":X=C;default:c.hasOwnProperty(g)||it(i,s,g,null,c,C)}for(m in c)if(g=c[m],C=l[m],c.hasOwnProperty(m)&&(g!=null||C!=null))switch(m){case"value":G=g;break;case"defaultValue":b=g;break;case"multiple":T=g;default:g!==C&&it(i,s,m,g,c,C)}s=b,l=T,c=X,G!=null?Qe(i,!!l,G,!1):!!c!=!!l&&(s!=null?Qe(i,!!l,s,!0):Qe(i,!!l,l?[]:"",!1));return;case"textarea":X=G=null;for(b in l)if(m=l[b],l.hasOwnProperty(b)&&m!=null&&!c.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:it(i,s,b,null,c,m)}for(T in c)if(m=c[T],g=l[T],c.hasOwnProperty(T)&&(m!=null||g!=null))switch(T){case"value":G=m;break;case"defaultValue":X=m;break;case"children":break;case"dangerouslySetInnerHTML":if(m!=null)throw Error(r(91));break;default:m!==g&&it(i,s,T,m,c,g)}Na(i,G,X);return;case"option":for(var Ee in l)if(G=l[Ee],l.hasOwnProperty(Ee)&&G!=null&&!c.hasOwnProperty(Ee))switch(Ee){case"selected":i.selected=!1;break;default:it(i,s,Ee,null,c,G)}for(C in c)if(G=c[C],X=l[C],c.hasOwnProperty(C)&&G!==X&&(G!=null||X!=null))switch(C){case"selected":i.selected=G&&typeof G!="function"&&typeof G!="symbol";break;default:it(i,s,C,G,c,X)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Pe in l)G=l[Pe],l.hasOwnProperty(Pe)&&G!=null&&!c.hasOwnProperty(Pe)&&it(i,s,Pe,null,c,G);for(M in c)if(G=c[M],X=l[M],c.hasOwnProperty(M)&&G!==X&&(G!=null||X!=null))switch(M){case"children":case"dangerouslySetInnerHTML":if(G!=null)throw Error(r(137,s));break;default:it(i,s,M,G,c,X)}return;default:if(ic(s)){for(var Ct in l)G=l[Ct],l.hasOwnProperty(Ct)&&G!==void 0&&!c.hasOwnProperty(Ct)&&L_(i,s,Ct,void 0,c,G);for(Z in c)G=c[Z],X=l[Z],!c.hasOwnProperty(Z)||G===X||G===void 0&&X===void 0||L_(i,s,Z,G,c,X);return}}for(var B in l)G=l[B],l.hasOwnProperty(B)&&G!=null&&!c.hasOwnProperty(B)&&it(i,s,B,null,c,G);for(ne in c)G=c[ne],X=l[ne],!c.hasOwnProperty(ne)||G===X||G==null&&X==null||it(i,s,ne,G,c,X)}var U_=null,B_=null;function Uf(i){return i.nodeType===9?i:i.ownerDocument}function sb(i){switch(i){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function ab(i,s){if(i===0)switch(s){case"svg":return 1;case"math":return 2;default:return 0}return i===1&&s==="foreignObject"?0:i}function z_(i,s){return i==="textarea"||i==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.children=="bigint"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var F_=null;function ax(){var i=window.event;return i&&i.type==="popstate"?i===F_?!1:(F_=i,!0):(F_=null,!1)}var ob=typeof setTimeout=="function"?setTimeout:void 0,ox=typeof clearTimeout=="function"?clearTimeout:void 0,lb=typeof Promise=="function"?Promise:void 0,lx=typeof queueMicrotask=="function"?queueMicrotask:typeof lb<"u"?function(i){return lb.resolve(null).then(i).catch(ux)}:ob;function ux(i){setTimeout(function(){throw i})}function q_(i,s){var l=s,c=0;do{var m=l.nextSibling;if(i.removeChild(l),m&&m.nodeType===8)if(l=m.data,l==="/$"){if(c===0){i.removeChild(m),Yc(s);return}c--}else l!=="$"&&l!=="$?"&&l!=="$!"||c++;l=m}while(l);Yc(s)}function j_(i){var s=i.firstChild;for(s&&s.nodeType===10&&(s=s.nextSibling);s;){var l=s;switch(s=s.nextSibling,l.nodeName){case"HTML":case"HEAD":case"BODY":j_(l),Da(l);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(l.rel.toLowerCase()==="stylesheet")continue}i.removeChild(l)}}function cx(i,s,l,c){for(;i.nodeType===1;){var m=l;if(i.nodeName.toLowerCase()!==s.toLowerCase()){if(!c&&(i.nodeName!=="INPUT"||i.type!=="hidden"))break}else if(c){if(!i[_s])switch(s){case"meta":if(!i.hasAttribute("itemprop"))break;return i;case"link":if(g=i.getAttribute("rel"),g==="stylesheet"&&i.hasAttribute("data-precedence"))break;if(g!==m.rel||i.getAttribute("href")!==(m.href==null?null:m.href)||i.getAttribute("crossorigin")!==(m.crossOrigin==null?null:m.crossOrigin)||i.getAttribute("title")!==(m.title==null?null:m.title))break;return i;case"style":if(i.hasAttribute("data-precedence"))break;return i;case"script":if(g=i.getAttribute("src"),(g!==(m.src==null?null:m.src)||i.getAttribute("type")!==(m.type==null?null:m.type)||i.getAttribute("crossorigin")!==(m.crossOrigin==null?null:m.crossOrigin))&&g&&i.hasAttribute("async")&&!i.hasAttribute("itemprop"))break;return i;default:return i}}else if(s==="input"&&i.type==="hidden"){var g=m.name==null?null:""+m.name;if(m.type==="hidden"&&i.getAttribute("name")===g)return i}else return i;if(i=Dr(i.nextSibling),i===null)break}return null}function hx(i,s,l){if(s==="")return null;for(;i.nodeType!==3;)if((i.nodeType!==1||i.nodeName!=="INPUT"||i.type!=="hidden")&&!l||(i=Dr(i.nextSibling),i===null))return null;return i}function Dr(i){for(;i!=null;i=i.nextSibling){var s=i.nodeType;if(s===1||s===3)break;if(s===8){if(s=i.data,s==="$"||s==="$!"||s==="$?"||s==="F!"||s==="F")break;if(s==="/$")return null}}return i}function ub(i){i=i.previousSibling;for(var s=0;i;){if(i.nodeType===8){var l=i.data;if(l==="$"||l==="$!"||l==="$?"){if(s===0)return i;s--}else l==="/$"&&s++}i=i.previousSibling}return null}function cb(i,s,l){switch(s=Uf(l),i){case"html":if(i=s.documentElement,!i)throw Error(r(452));return i;case"head":if(i=s.head,!i)throw Error(r(453));return i;case"body":if(i=s.body,!i)throw Error(r(454));return i;default:throw Error(r(451))}}var vr=new Map,hb=new Set;function Bf(i){return typeof i.getRootNode=="function"?i.getRootNode():i.ownerDocument}var qi=fe.d;fe.d={f:dx,r:fx,D:mx,C:px,L:gx,m:_x,X:vx,S:yx,M:Ex};function dx(){var i=qi.f(),s=xf();return i||s}function fx(i){var s=Ei(i);s!==null&&s.tag===5&&s.type==="form"?Uw(s):qi.r(i)}var Pl=typeof document>"u"?null:document;function db(i,s,l){var c=Pl;if(c&&typeof s=="string"&&s){var m=At(s);m='link[rel="'+i+'"][href="'+m+'"]',typeof l=="string"&&(m+='[crossorigin="'+l+'"]'),hb.has(m)||(hb.add(m),i={rel:i,crossOrigin:l,href:s},c.querySelector(m)===null&&(s=c.createElement("link"),pn(s,"link",i),_t(s),c.head.appendChild(s)))}}function mx(i){qi.D(i),db("dns-prefetch",i,null)}function px(i,s){qi.C(i,s),db("preconnect",i,s)}function gx(i,s,l){qi.L(i,s,l);var c=Pl;if(c&&i&&s){var m='link[rel="preload"][as="'+At(s)+'"]';s==="image"&&l&&l.imageSrcSet?(m+='[imagesrcset="'+At(l.imageSrcSet)+'"]',typeof l.imageSizes=="string"&&(m+='[imagesizes="'+At(l.imageSizes)+'"]')):m+='[href="'+At(i)+'"]';var g=m;switch(s){case"style":g=xl(i);break;case"script":g=Nl(i)}vr.has(g)||(i=x({rel:"preload",href:s==="image"&&l&&l.imageSrcSet?void 0:i,as:s},l),vr.set(g,i),c.querySelector(m)!==null||s==="style"&&c.querySelector(jc(g))||s==="script"&&c.querySelector(Hc(g))||(s=c.createElement("link"),pn(s,"link",i),_t(s),c.head.appendChild(s)))}}function _x(i,s){qi.m(i,s);var l=Pl;if(l&&i){var c=s&&typeof s.as=="string"?s.as:"script",m='link[rel="modulepreload"][as="'+At(c)+'"][href="'+At(i)+'"]',g=m;switch(c){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":g=Nl(i)}if(!vr.has(g)&&(i=x({rel:"modulepreload",href:i},s),vr.set(g,i),l.querySelector(m)===null)){switch(c){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(l.querySelector(Hc(g)))return}c=l.createElement("link"),pn(c,"link",i),_t(c),l.head.appendChild(c)}}}function yx(i,s,l){qi.S(i,s,l);var c=Pl;if(c&&i){var m=vs(c).hoistableStyles,g=xl(i);s=s||"default";var T=m.get(g);if(!T){var b={loading:0,preload:null};if(T=c.querySelector(jc(g)))b.loading=5;else{i=x({rel:"stylesheet",href:i,"data-precedence":s},l),(l=vr.get(g))&&H_(i,l);var C=T=c.createElement("link");_t(C),pn(C,"link",i),C._p=new Promise(function(M,Z){C.onload=M,C.onerror=Z}),C.addEventListener("load",function(){b.loading|=1}),C.addEventListener("error",function(){b.loading|=2}),b.loading|=4,zf(T,s,c)}T={type:"stylesheet",instance:T,count:1,state:b},m.set(g,T)}}}function vx(i,s){qi.X(i,s);var l=Pl;if(l&&i){var c=vs(l).hoistableScripts,m=Nl(i),g=c.get(m);g||(g=l.querySelector(Hc(m)),g||(i=x({src:i,async:!0},s),(s=vr.get(m))&&G_(i,s),g=l.createElement("script"),_t(g),pn(g,"link",i),l.head.appendChild(g)),g={type:"script",instance:g,count:1,state:null},c.set(m,g))}}function Ex(i,s){qi.M(i,s);var l=Pl;if(l&&i){var c=vs(l).hoistableScripts,m=Nl(i),g=c.get(m);g||(g=l.querySelector(Hc(m)),g||(i=x({src:i,async:!0,type:"module"},s),(s=vr.get(m))&&G_(i,s),g=l.createElement("script"),_t(g),pn(g,"link",i),l.head.appendChild(g)),g={type:"script",instance:g,count:1,state:null},c.set(m,g))}}function fb(i,s,l,c){var m=(m=rr.current)?Bf(m):null;if(!m)throw Error(r(446));switch(i){case"meta":case"title":return null;case"style":return typeof l.precedence=="string"&&typeof l.href=="string"?(s=xl(l.href),l=vs(m).hoistableStyles,c=l.get(s),c||(c={type:"style",instance:null,count:0,state:null},l.set(s,c)),c):{type:"void",instance:null,count:0,state:null};case"link":if(l.rel==="stylesheet"&&typeof l.href=="string"&&typeof l.precedence=="string"){i=xl(l.href);var g=vs(m).hoistableStyles,T=g.get(i);if(T||(m=m.ownerDocument||m,T={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},g.set(i,T),(g=m.querySelector(jc(i)))&&!g._p&&(T.instance=g,T.state.loading=5),vr.has(i)||(l={rel:"preload",as:"style",href:l.href,crossOrigin:l.crossOrigin,integrity:l.integrity,media:l.media,hrefLang:l.hrefLang,referrerPolicy:l.referrerPolicy},vr.set(i,l),g||Tx(m,i,l,T.state))),s&&c===null)throw Error(r(528,""));return T}if(s&&c!==null)throw Error(r(529,""));return null;case"script":return s=l.async,l=l.src,typeof l=="string"&&s&&typeof s!="function"&&typeof s!="symbol"?(s=Nl(l),l=vs(m).hoistableScripts,c=l.get(s),c||(c={type:"script",instance:null,count:0,state:null},l.set(s,c)),c):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,i))}}function xl(i){return'href="'+At(i)+'"'}function jc(i){return'link[rel="stylesheet"]['+i+"]"}function mb(i){return x({},i,{"data-precedence":i.precedence,precedence:null})}function Tx(i,s,l,c){i.querySelector('link[rel="preload"][as="style"]['+s+"]")?c.loading=1:(s=i.createElement("link"),c.preload=s,s.addEventListener("load",function(){return c.loading|=1}),s.addEventListener("error",function(){return c.loading|=2}),pn(s,"link",l),_t(s),i.head.appendChild(s))}function Nl(i){return'[src="'+At(i)+'"]'}function Hc(i){return"script[async]"+i}function pb(i,s,l){if(s.count++,s.instance===null)switch(s.type){case"style":var c=i.querySelector('style[data-href~="'+At(l.href)+'"]');if(c)return s.instance=c,_t(c),c;var m=x({},l,{"data-href":l.href,"data-precedence":l.precedence,href:null,precedence:null});return c=(i.ownerDocument||i).createElement("style"),_t(c),pn(c,"style",m),zf(c,l.precedence,i),s.instance=c;case"stylesheet":m=xl(l.href);var g=i.querySelector(jc(m));if(g)return s.state.loading|=4,s.instance=g,_t(g),g;c=mb(l),(m=vr.get(m))&&H_(c,m),g=(i.ownerDocument||i).createElement("link"),_t(g);var T=g;return T._p=new Promise(function(b,C){T.onload=b,T.onerror=C}),pn(g,"link",c),s.state.loading|=4,zf(g,l.precedence,i),s.instance=g;case"script":return g=Nl(l.src),(m=i.querySelector(Hc(g)))?(s.instance=m,_t(m),m):(c=l,(m=vr.get(g))&&(c=x({},l),G_(c,m)),i=i.ownerDocument||i,m=i.createElement("script"),_t(m),pn(m,"link",c),i.head.appendChild(m),s.instance=m);case"void":return null;default:throw Error(r(443,s.type))}else s.type==="stylesheet"&&(s.state.loading&4)===0&&(c=s.instance,s.state.loading|=4,zf(c,l.precedence,i));return s.instance}function zf(i,s,l){for(var c=l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),m=c.length?c[c.length-1]:null,g=m,T=0;T<c.length;T++){var b=c[T];if(b.dataset.precedence===s)g=b;else if(g!==m)break}g?g.parentNode.insertBefore(i,g.nextSibling):(s=l.nodeType===9?l.head:l,s.insertBefore(i,s.firstChild))}function H_(i,s){i.crossOrigin==null&&(i.crossOrigin=s.crossOrigin),i.referrerPolicy==null&&(i.referrerPolicy=s.referrerPolicy),i.title==null&&(i.title=s.title)}function G_(i,s){i.crossOrigin==null&&(i.crossOrigin=s.crossOrigin),i.referrerPolicy==null&&(i.referrerPolicy=s.referrerPolicy),i.integrity==null&&(i.integrity=s.integrity)}var Ff=null;function gb(i,s,l){if(Ff===null){var c=new Map,m=Ff=new Map;m.set(l,c)}else m=Ff,c=m.get(l),c||(c=new Map,m.set(l,c));if(c.has(i))return c;for(c.set(i,null),l=l.getElementsByTagName(i),m=0;m<l.length;m++){var g=l[m];if(!(g[_s]||g[tn]||i==="link"&&g.getAttribute("rel")==="stylesheet")&&g.namespaceURI!=="http://www.w3.org/2000/svg"){var T=g.getAttribute(s)||"";T=i+T;var b=c.get(T);b?b.push(g):c.set(T,[g])}}return c}function _b(i,s,l){i=i.ownerDocument||i,i.head.insertBefore(l,s==="title"?i.querySelector("head > title"):null)}function wx(i,s,l){if(l===1||s.itemProp!=null)return!1;switch(i){case"meta":case"title":return!0;case"style":if(typeof s.precedence!="string"||typeof s.href!="string"||s.href==="")break;return!0;case"link":if(typeof s.rel!="string"||typeof s.href!="string"||s.href===""||s.onLoad||s.onError)break;switch(s.rel){case"stylesheet":return i=s.disabled,typeof s.precedence=="string"&&i==null;default:return!0}case"script":if(s.async&&typeof s.async!="function"&&typeof s.async!="symbol"&&!s.onLoad&&!s.onError&&s.src&&typeof s.src=="string")return!0}return!1}function yb(i){return!(i.type==="stylesheet"&&(i.state.loading&3)===0)}var Gc=null;function bx(){}function Ix(i,s,l){if(Gc===null)throw Error(r(475));var c=Gc;if(s.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(s.state.loading&4)===0){if(s.instance===null){var m=xl(l.href),g=i.querySelector(jc(m));if(g){i=g._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(c.count++,c=qf.bind(c),i.then(c,c)),s.state.loading|=4,s.instance=g,_t(g);return}g=i.ownerDocument||i,l=mb(l),(m=vr.get(m))&&H_(l,m),g=g.createElement("link"),_t(g);var T=g;T._p=new Promise(function(b,C){T.onload=b,T.onerror=C}),pn(g,"link",l),s.instance=g}c.stylesheets===null&&(c.stylesheets=new Map),c.stylesheets.set(s,i),(i=s.state.preload)&&(s.state.loading&3)===0&&(c.count++,s=qf.bind(c),i.addEventListener("load",s),i.addEventListener("error",s))}}function Ax(){if(Gc===null)throw Error(r(475));var i=Gc;return i.stylesheets&&i.count===0&&$_(i,i.stylesheets),0<i.count?function(s){var l=setTimeout(function(){if(i.stylesheets&&$_(i,i.stylesheets),i.unsuspend){var c=i.unsuspend;i.unsuspend=null,c()}},6e4);return i.unsuspend=s,function(){i.unsuspend=null,clearTimeout(l)}}:null}function qf(){if(this.count--,this.count===0){if(this.stylesheets)$_(this,this.stylesheets);else if(this.unsuspend){var i=this.unsuspend;this.unsuspend=null,i()}}}var jf=null;function $_(i,s){i.stylesheets=null,i.unsuspend!==null&&(i.count++,jf=new Map,s.forEach(Sx,i),jf=null,qf.call(i))}function Sx(i,s){if(!(s.state.loading&4)){var l=jf.get(i);if(l)var c=l.get(null);else{l=new Map,jf.set(i,l);for(var m=i.querySelectorAll("link[data-precedence],style[data-precedence]"),g=0;g<m.length;g++){var T=m[g];(T.nodeName==="LINK"||T.getAttribute("media")!=="not all")&&(l.set(T.dataset.precedence,T),c=T)}c&&l.set(null,c)}m=s.instance,T=m.getAttribute("data-precedence"),g=l.get(T)||c,g===c&&l.set(null,m),l.set(T,m),this.count++,c=qf.bind(this),m.addEventListener("load",c),m.addEventListener("error",c),g?g.parentNode.insertBefore(m,g.nextSibling):(i=i.nodeType===9?i.head:i,i.insertBefore(m,i.firstChild)),s.state.loading|=4}}var $c={$$typeof:S,Provider:null,Consumer:null,_currentValue:De,_currentValue2:De,_threadCount:0};function Rx(i,s,l,c,m,g,T,b){this.tag=1,this.containerInfo=i,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ko(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.finishedLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ko(0),this.hiddenUpdates=Ko(null),this.identifierPrefix=c,this.onUncaughtError=m,this.onCaughtError=g,this.onRecoverableError=T,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=b,this.incompleteTransitions=new Map}function vb(i,s,l,c,m,g,T,b,C,M,Z,ne){return i=new Rx(i,s,l,T,b,C,M,ne),s=1,g===!0&&(s|=24),g=_r(3,null,null,s),i.current=g,g.stateNode=i,s=Ig(),s.refCount++,i.pooledCache=s,s.refCount++,g.memoizedState={element:c,isDehydrated:l,cache:s},i_(g),i}function Eb(i){return i?(i=cl,i):cl}function Tb(i,s,l,c,m,g){m=Eb(m),c.context===null?c.context=m:c.pendingContext=m,c=Ns(s),c.payload={element:l},g=g===void 0?null:g,g!==null&&(c.callback=g),l=Os(i,c,s),l!==null&&(xn(l,i,s),Dc(l,i,s))}function wb(i,s){if(i=i.memoizedState,i!==null&&i.dehydrated!==null){var l=i.retryLane;i.retryLane=l!==0&&l<s?l:s}}function K_(i,s){wb(i,s),(i=i.alternate)&&wb(i,s)}function bb(i){if(i.tag===13){var s=As(i,67108864);s!==null&&xn(s,i,67108864),K_(i,67108864)}}var Hf=!0;function Cx(i,s,l,c){var m=A.T;A.T=null;var g=fe.p;try{fe.p=2,Q_(i,s,l,c)}finally{fe.p=g,A.T=m}}function Dx(i,s,l,c){var m=A.T;A.T=null;var g=fe.p;try{fe.p=8,Q_(i,s,l,c)}finally{fe.p=g,A.T=m}}function Q_(i,s,l,c){if(Hf){var m=W_(c);if(m===null)M_(i,s,c,Gf,l),Ab(i,c);else if(xx(m,i,s,l,c))c.stopPropagation();else if(Ab(i,c),s&4&&-1<Px.indexOf(i)){for(;m!==null;){var g=Ei(m);if(g!==null)switch(g.tag){case 3:if(g=g.stateNode,g.current.memoizedState.isDehydrated){var T=Ir(g.pendingLanes);if(T!==0){var b=g;for(b.pendingLanes|=2,b.entangledLanes|=2;T;){var C=1<<31-Rn(T);b.entanglements[1]|=C,T&=~C}Yr(g),(vt&6)===0&&(Cf=Ln()+500,zc(0))}}break;case 13:b=As(g,2),b!==null&&xn(b,g,2),xf(),K_(g,2)}if(g=W_(c),g===null&&M_(i,s,c,Gf,l),g===m)break;m=g}m!==null&&c.stopPropagation()}else M_(i,s,c,null,l)}}function W_(i){return i=Zo(i),Y_(i)}var Gf=null;function Y_(i){if(Gf=null,i=Ar(i),i!==null){var s=we(i);if(s===null)i=null;else{var l=s.tag;if(l===13){if(i=Oe(s),i!==null)return i;i=null}else if(l===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;i=null}else s!==i&&(i=null)}}return Gf=i,null}function Ib(i){switch(i){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Dd()){case Gt:return 2;case en:return 8;case yi:case Pd:return 32;case Qu:return 268435456;default:return 32}default:return 32}}var X_=!1,zs=null,Fs=null,qs=null,Kc=new Map,Qc=new Map,js=[],Px="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Ab(i,s){switch(i){case"focusin":case"focusout":zs=null;break;case"dragenter":case"dragleave":Fs=null;break;case"mouseover":case"mouseout":qs=null;break;case"pointerover":case"pointerout":Kc.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":Qc.delete(s.pointerId)}}function Wc(i,s,l,c,m,g){return i===null||i.nativeEvent!==g?(i={blockedOn:s,domEventName:l,eventSystemFlags:c,nativeEvent:g,targetContainers:[m]},s!==null&&(s=Ei(s),s!==null&&bb(s)),i):(i.eventSystemFlags|=c,s=i.targetContainers,m!==null&&s.indexOf(m)===-1&&s.push(m),i)}function xx(i,s,l,c,m){switch(s){case"focusin":return zs=Wc(zs,i,s,l,c,m),!0;case"dragenter":return Fs=Wc(Fs,i,s,l,c,m),!0;case"mouseover":return qs=Wc(qs,i,s,l,c,m),!0;case"pointerover":var g=m.pointerId;return Kc.set(g,Wc(Kc.get(g)||null,i,s,l,c,m)),!0;case"gotpointercapture":return g=m.pointerId,Qc.set(g,Wc(Qc.get(g)||null,i,s,l,c,m)),!0}return!1}function Sb(i){var s=Ar(i.target);if(s!==null){var l=we(s);if(l!==null){if(s=l.tag,s===13){if(s=Oe(l),s!==null){i.blockedOn=s,gs(i.priority,function(){if(l.tag===13){var c=Xn(),m=As(l,c);m!==null&&xn(m,l,c),K_(l,c)}});return}}else if(s===3&&l.stateNode.current.memoizedState.isDehydrated){i.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}i.blockedOn=null}function $f(i){if(i.blockedOn!==null)return!1;for(var s=i.targetContainers;0<s.length;){var l=W_(i.nativeEvent);if(l===null){l=i.nativeEvent;var c=new l.constructor(l.type,l);or=c,l.target.dispatchEvent(c),or=null}else return s=Ei(l),s!==null&&bb(s),i.blockedOn=l,!1;s.shift()}return!0}function Rb(i,s,l){$f(i)&&l.delete(s)}function Nx(){X_=!1,zs!==null&&$f(zs)&&(zs=null),Fs!==null&&$f(Fs)&&(Fs=null),qs!==null&&$f(qs)&&(qs=null),Kc.forEach(Rb),Qc.forEach(Rb)}function Kf(i,s){i.blockedOn===s&&(i.blockedOn=null,X_||(X_=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,Nx)))}var Qf=null;function Cb(i){Qf!==i&&(Qf=i,n.unstable_scheduleCallback(n.unstable_NormalPriority,function(){Qf===i&&(Qf=null);for(var s=0;s<i.length;s+=3){var l=i[s],c=i[s+1],m=i[s+2];if(typeof c!="function"){if(Y_(c||l)===null)continue;break}var g=Ei(l);g!==null&&(i.splice(s,3),s-=3,zg(g,{pending:!0,data:m,method:l.method,action:c},c,m))}}))}function Yc(i){function s(C){return Kf(C,i)}zs!==null&&Kf(zs,i),Fs!==null&&Kf(Fs,i),qs!==null&&Kf(qs,i),Kc.forEach(s),Qc.forEach(s);for(var l=0;l<js.length;l++){var c=js[l];c.blockedOn===i&&(c.blockedOn=null)}for(;0<js.length&&(l=js[0],l.blockedOn===null);)Sb(l),l.blockedOn===null&&js.shift();if(l=(i.ownerDocument||i).$$reactFormReplay,l!=null)for(c=0;c<l.length;c+=3){var m=l[c],g=l[c+1],T=m[$t]||null;if(typeof g=="function")T||Cb(l);else if(T){var b=null;if(g&&g.hasAttribute("formAction")){if(m=g,T=g[$t]||null)b=T.formAction;else if(Y_(m)!==null)continue}else b=T.action;typeof b=="function"?l[c+1]=b:(l.splice(c,3),c-=3),Cb(l)}}}function Z_(i){this._internalRoot=i}Wf.prototype.render=Z_.prototype.render=function(i){var s=this._internalRoot;if(s===null)throw Error(r(409));var l=s.current,c=Xn();Tb(l,c,i,s,null,null)},Wf.prototype.unmount=Z_.prototype.unmount=function(){var i=this._internalRoot;if(i!==null){this._internalRoot=null;var s=i.containerInfo;i.tag===0&&Rl(),Tb(i.current,2,null,i,null,null),xf(),s[vi]=null}};function Wf(i){this._internalRoot=i}Wf.prototype.unstable_scheduleHydration=function(i){if(i){var s=Vd();i={blockedOn:null,target:i,priority:s};for(var l=0;l<js.length&&s!==0&&s<js[l].priority;l++);js.splice(l,0,i),l===0&&Sb(i)}};var Db=e.version;if(Db!=="19.0.0")throw Error(r(527,Db,"19.0.0"));fe.findDOMNode=function(i){var s=i._reactInternals;if(s===void 0)throw typeof i.render=="function"?Error(r(188)):(i=Object.keys(i).join(","),Error(r(268,i)));return i=ie(s),i=i!==null?_e(i):null,i=i===null?null:i.stateNode,i};var Ox={bundleType:0,version:"19.0.0",rendererPackageName:"react-dom",currentDispatcherRef:A,findFiberByHostInstance:Ar,reconcilerVersion:"19.0.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Yf=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Yf.isDisabled&&Yf.supportsFiber)try{cs=Yf.inject(Ox),En=Yf}catch{}}return Zc.createRoot=function(i,s){if(!a(i))throw Error(r(299));var l=!1,c="",m=$w,g=Kw,T=Qw,b=null;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(c=s.identifierPrefix),s.onUncaughtError!==void 0&&(m=s.onUncaughtError),s.onCaughtError!==void 0&&(g=s.onCaughtError),s.onRecoverableError!==void 0&&(T=s.onRecoverableError),s.unstable_transitionCallbacks!==void 0&&(b=s.unstable_transitionCallbacks)),s=vb(i,1,!1,null,null,l,c,m,g,T,b,null),i[vi]=s.current,V_(i.nodeType===8?i.parentNode:i),new Z_(s)},Zc.hydrateRoot=function(i,s,l){if(!a(i))throw Error(r(299));var c=!1,m="",g=$w,T=Kw,b=Qw,C=null,M=null;return l!=null&&(l.unstable_strictMode===!0&&(c=!0),l.identifierPrefix!==void 0&&(m=l.identifierPrefix),l.onUncaughtError!==void 0&&(g=l.onUncaughtError),l.onCaughtError!==void 0&&(T=l.onCaughtError),l.onRecoverableError!==void 0&&(b=l.onRecoverableError),l.unstable_transitionCallbacks!==void 0&&(C=l.unstable_transitionCallbacks),l.formState!==void 0&&(M=l.formState)),s=vb(i,1,!0,s,l??null,c,m,g,T,b,C,M),s.context=Eb(null),l=s.current,c=Xn(),m=Ns(c),m.callback=null,Os(l,m,c),s.current.lanes=c,Ot(s,c),Yr(s),i[vi]=s.current,V_(i),new Wf(s)},Zc.version="19.0.0",Zc}var Bb;function Hx(){if(Bb)return ty.exports;Bb=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),ty.exports=jx(),ty.exports}var Gx=Hx(),Jc={},zb;function $x(){if(zb)return Jc;zb=1,Object.defineProperty(Jc,"__esModule",{value:!0}),Jc.parse=u,Jc.serialize=p;const n=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,e=/^[\u0021-\u003A\u003C-\u007E]*$/,t=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,r=/^[\u0020-\u003A\u003D-\u007E]*$/,a=Object.prototype.toString,o=(()=>{const w=function(){};return w.prototype=Object.create(null),w})();function u(w,S){const P=new o,U=w.length;if(U<2)return P;const L=(S==null?void 0:S.decode)||y;let H=0;do{const Y=w.indexOf("=",H);if(Y===-1)break;const $=w.indexOf(";",H),oe=$===-1?U:$;if(Y>oe){H=w.lastIndexOf(";",Y-1)+1;continue}const ae=h(w,H,Y),le=f(w,Y,ae),D=w.slice(ae,le);if(P[D]===void 0){let R=h(w,Y+1,oe),A=f(w,oe,R);const x=L(w.slice(R,A));P[D]=x}H=oe+1}while(H<U);return P}function h(w,S,P){do{const U=w.charCodeAt(S);if(U!==32&&U!==9)return S}while(++S<P);return P}function f(w,S,P){for(;S>P;){const U=w.charCodeAt(--S);if(U!==32&&U!==9)return S+1}return P}function p(w,S,P){const U=(P==null?void 0:P.encode)||encodeURIComponent;if(!n.test(w))throw new TypeError(`argument name is invalid: ${w}`);const L=U(S);if(!e.test(L))throw new TypeError(`argument val is invalid: ${S}`);let H=w+"="+L;if(!P)return H;if(P.maxAge!==void 0){if(!Number.isInteger(P.maxAge))throw new TypeError(`option maxAge is invalid: ${P.maxAge}`);H+="; Max-Age="+P.maxAge}if(P.domain){if(!t.test(P.domain))throw new TypeError(`option domain is invalid: ${P.domain}`);H+="; Domain="+P.domain}if(P.path){if(!r.test(P.path))throw new TypeError(`option path is invalid: ${P.path}`);H+="; Path="+P.path}if(P.expires){if(!v(P.expires)||!Number.isFinite(P.expires.valueOf()))throw new TypeError(`option expires is invalid: ${P.expires}`);H+="; Expires="+P.expires.toUTCString()}if(P.httpOnly&&(H+="; HttpOnly"),P.secure&&(H+="; Secure"),P.partitioned&&(H+="; Partitioned"),P.priority)switch(typeof P.priority=="string"?P.priority.toLowerCase():void 0){case"low":H+="; Priority=Low";break;case"medium":H+="; Priority=Medium";break;case"high":H+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${P.priority}`)}if(P.sameSite)switch(typeof P.sameSite=="string"?P.sameSite.toLowerCase():P.sameSite){case!0:case"strict":H+="; SameSite=Strict";break;case"lax":H+="; SameSite=Lax";break;case"none":H+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${P.sameSite}`)}return H}function y(w){if(w.indexOf("%")===-1)return w;try{return decodeURIComponent(w)}catch{return w}}function v(w){return a.call(w)==="[object Date]"}return Jc}$x();/**
 * react-router v7.5.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Fb="popstate";function Kx(n={}){function e(r,a){let{pathname:o,search:u,hash:h}=r.location;return xy("",{pathname:o,search:u,hash:h},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function t(r,a){return typeof a=="string"?a:Ph(a)}return Wx(e,t,null,n)}function Et(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function ui(n,e){if(!n){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Qx(){return Math.random().toString(36).substring(2,10)}function qb(n,e){return{usr:n.state,key:n.key,idx:e}}function xy(n,e,t=null,r){return{pathname:typeof n=="string"?n:n.pathname,search:"",hash:"",...typeof e=="string"?Pu(e):e,state:t,key:e&&e.key||r||Qx()}}function Ph({pathname:n="/",search:e="",hash:t=""}){return e&&e!=="?"&&(n+=e.charAt(0)==="?"?e:"?"+e),t&&t!=="#"&&(n+=t.charAt(0)==="#"?t:"#"+t),n}function Pu(n){let e={};if(n){let t=n.indexOf("#");t>=0&&(e.hash=n.substring(t),n=n.substring(0,t));let r=n.indexOf("?");r>=0&&(e.search=n.substring(r),n=n.substring(0,r)),n&&(e.pathname=n)}return e}function Wx(n,e,t,r={}){let{window:a=document.defaultView,v5Compat:o=!1}=r,u=a.history,h="POP",f=null,p=y();p==null&&(p=0,u.replaceState({...u.state,idx:p},""));function y(){return(u.state||{idx:null}).idx}function v(){h="POP";let L=y(),H=L==null?null:L-p;p=L,f&&f({action:h,location:U.location,delta:H})}function w(L,H){h="PUSH";let Y=xy(U.location,L,H);p=y()+1;let $=qb(Y,p),oe=U.createHref(Y);try{u.pushState($,"",oe)}catch(ae){if(ae instanceof DOMException&&ae.name==="DataCloneError")throw ae;a.location.assign(oe)}o&&f&&f({action:h,location:U.location,delta:1})}function S(L,H){h="REPLACE";let Y=xy(U.location,L,H);p=y();let $=qb(Y,p),oe=U.createHref(Y);u.replaceState($,"",oe),o&&f&&f({action:h,location:U.location,delta:0})}function P(L){let H=a.location.origin!=="null"?a.location.origin:a.location.href,Y=typeof L=="string"?L:Ph(L);return Y=Y.replace(/ $/,"%20"),Et(H,`No window.location.(origin|href) available to create URL for href: ${Y}`),new URL(Y,H)}let U={get action(){return h},get location(){return n(a,u)},listen(L){if(f)throw new Error("A history only accepts one active listener");return a.addEventListener(Fb,v),f=L,()=>{a.removeEventListener(Fb,v),f=null}},createHref(L){return e(a,L)},createURL:P,encodeLocation(L){let H=P(L);return{pathname:H.pathname,search:H.search,hash:H.hash}},push:w,replace:S,go(L){return u.go(L)}};return U}function mS(n,e,t="/"){return Yx(n,e,t,!1)}function Yx(n,e,t,r){let a=typeof e=="string"?Pu(e):e,o=Wi(a.pathname||"/",t);if(o==null)return null;let u=pS(n);Xx(u);let h=null;for(let f=0;h==null&&f<u.length;++f){let p=lN(o);h=aN(u[f],p,r)}return h}function pS(n,e=[],t=[],r=""){let a=(o,u,h)=>{let f={relativePath:h===void 0?o.path||"":h,caseSensitive:o.caseSensitive===!0,childrenIndex:u,route:o};f.relativePath.startsWith("/")&&(Et(f.relativePath.startsWith(r),`Absolute route path "${f.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),f.relativePath=f.relativePath.slice(r.length));let p=Ki([r,f.relativePath]),y=t.concat(f);o.children&&o.children.length>0&&(Et(o.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${p}".`),pS(o.children,e,y,p)),!(o.path==null&&!o.index)&&e.push({path:p,score:iN(p,o.index),routesMeta:y})};return n.forEach((o,u)=>{var h;if(o.path===""||!((h=o.path)!=null&&h.includes("?")))a(o,u);else for(let f of gS(o.path))a(o,u,f)}),e}function gS(n){let e=n.split("/");if(e.length===0)return[];let[t,...r]=e,a=t.endsWith("?"),o=t.replace(/\?$/,"");if(r.length===0)return a?[o,""]:[o];let u=gS(r.join("/")),h=[];return h.push(...u.map(f=>f===""?o:[o,f].join("/"))),a&&h.push(...u),h.map(f=>n.startsWith("/")&&f===""?"/":f)}function Xx(n){n.sort((e,t)=>e.score!==t.score?t.score-e.score:sN(e.routesMeta.map(r=>r.childrenIndex),t.routesMeta.map(r=>r.childrenIndex)))}var Zx=/^:[\w-]+$/,Jx=3,eN=2,tN=1,nN=10,rN=-2,jb=n=>n==="*";function iN(n,e){let t=n.split("/"),r=t.length;return t.some(jb)&&(r+=rN),e&&(r+=eN),t.filter(a=>!jb(a)).reduce((a,o)=>a+(Zx.test(o)?Jx:o===""?tN:nN),r)}function sN(n,e){return n.length===e.length&&n.slice(0,-1).every((r,a)=>r===e[a])?n[n.length-1]-e[e.length-1]:0}function aN(n,e,t=!1){let{routesMeta:r}=n,a={},o="/",u=[];for(let h=0;h<r.length;++h){let f=r[h],p=h===r.length-1,y=o==="/"?e:e.slice(o.length)||"/",v=Pm({path:f.relativePath,caseSensitive:f.caseSensitive,end:p},y),w=f.route;if(!v&&p&&t&&!r[r.length-1].route.index&&(v=Pm({path:f.relativePath,caseSensitive:f.caseSensitive,end:!1},y)),!v)return null;Object.assign(a,v.params),u.push({params:a,pathname:Ki([o,v.pathname]),pathnameBase:dN(Ki([o,v.pathnameBase])),route:w}),v.pathnameBase!=="/"&&(o=Ki([o,v.pathnameBase]))}return u}function Pm(n,e){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[t,r]=oN(n.path,n.caseSensitive,n.end),a=e.match(t);if(!a)return null;let o=a[0],u=o.replace(/(.)\/+$/,"$1"),h=a.slice(1);return{params:r.reduce((p,{paramName:y,isOptional:v},w)=>{if(y==="*"){let P=h[w]||"";u=o.slice(0,o.length-P.length).replace(/(.)\/+$/,"$1")}const S=h[w];return v&&!S?p[y]=void 0:p[y]=(S||"").replace(/%2F/g,"/"),p},{}),pathname:o,pathnameBase:u,pattern:n}}function oN(n,e=!1,t=!0){ui(n==="*"||!n.endsWith("*")||n.endsWith("/*"),`Route path "${n}" will be treated as if it were "${n.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/,"/*")}".`);let r=[],a="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(u,h,f)=>(r.push({paramName:h,isOptional:f!=null}),f?"/?([^\\/]+)?":"/([^\\/]+)"));return n.endsWith("*")?(r.push({paramName:"*"}),a+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?a+="\\/*$":n!==""&&n!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,e?void 0:"i"),r]}function lN(n){try{return n.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return ui(!1,`The URL path "${n}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),n}}function Wi(n,e){if(e==="/")return n;if(!n.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,r=n.charAt(t);return r&&r!=="/"?null:n.slice(t)||"/"}function uN(n,e="/"){let{pathname:t,search:r="",hash:a=""}=typeof n=="string"?Pu(n):n;return{pathname:t?t.startsWith("/")?t:cN(t,e):e,search:fN(r),hash:mN(a)}}function cN(n,e){let t=e.replace(/\/+$/,"").split("/");return n.split("/").forEach(a=>{a===".."?t.length>1&&t.pop():a!=="."&&t.push(a)}),t.length>1?t.join("/"):"/"}function sy(n,e,t,r){return`Cannot include a '${n}' character in a manually specified \`to.${e}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${t}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function hN(n){return n.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function _S(n){let e=hN(n);return e.map((t,r)=>r===e.length-1?t.pathname:t.pathnameBase)}function yS(n,e,t,r=!1){let a;typeof n=="string"?a=Pu(n):(a={...n},Et(!a.pathname||!a.pathname.includes("?"),sy("?","pathname","search",a)),Et(!a.pathname||!a.pathname.includes("#"),sy("#","pathname","hash",a)),Et(!a.search||!a.search.includes("#"),sy("#","search","hash",a)));let o=n===""||a.pathname==="",u=o?"/":a.pathname,h;if(u==null)h=t;else{let v=e.length-1;if(!r&&u.startsWith("..")){let w=u.split("/");for(;w[0]==="..";)w.shift(),v-=1;a.pathname=w.join("/")}h=v>=0?e[v]:"/"}let f=uN(a,h),p=u&&u!=="/"&&u.endsWith("/"),y=(o||u===".")&&t.endsWith("/");return!f.pathname.endsWith("/")&&(p||y)&&(f.pathname+="/"),f}var Ki=n=>n.join("/").replace(/\/\/+/g,"/"),dN=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),fN=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,mN=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function pN(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}var vS=["POST","PUT","PATCH","DELETE"];new Set(vS);var gN=["GET",...vS];new Set(gN);var xu=W.createContext(null);xu.displayName="DataRouter";var up=W.createContext(null);up.displayName="DataRouterState";var ES=W.createContext({isTransitioning:!1});ES.displayName="ViewTransition";var _N=W.createContext(new Map);_N.displayName="Fetchers";var yN=W.createContext(null);yN.displayName="Await";var pi=W.createContext(null);pi.displayName="Navigation";var nd=W.createContext(null);nd.displayName="Location";var gi=W.createContext({outlet:null,matches:[],isDataRoute:!1});gi.displayName="Route";var Pv=W.createContext(null);Pv.displayName="RouteError";function vN(n,{relative:e}={}){Et(rd(),"useHref() may be used only in the context of a <Router> component.");let{basename:t,navigator:r}=W.useContext(pi),{hash:a,pathname:o,search:u}=sd(n,{relative:e}),h=o;return t!=="/"&&(h=o==="/"?t:Ki([t,o])),r.createHref({pathname:h,search:u,hash:a})}function rd(){return W.useContext(nd)!=null}function Mo(){return Et(rd(),"useLocation() may be used only in the context of a <Router> component."),W.useContext(nd).location}var TS="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function wS(n){W.useContext(pi).static||W.useLayoutEffect(n)}function id(){let{isDataRoute:n}=W.useContext(gi);return n?ON():EN()}function EN(){Et(rd(),"useNavigate() may be used only in the context of a <Router> component.");let n=W.useContext(xu),{basename:e,navigator:t}=W.useContext(pi),{matches:r}=W.useContext(gi),{pathname:a}=Mo(),o=JSON.stringify(_S(r)),u=W.useRef(!1);return wS(()=>{u.current=!0}),W.useCallback((f,p={})=>{if(ui(u.current,TS),!u.current)return;if(typeof f=="number"){t.go(f);return}let y=yS(f,JSON.parse(o),a,p.relative==="path");n==null&&e!=="/"&&(y.pathname=y.pathname==="/"?e:Ki([e,y.pathname])),(p.replace?t.replace:t.push)(y,p.state,p)},[e,t,o,a,n])}W.createContext(null);function TN(){let{matches:n}=W.useContext(gi),e=n[n.length-1];return e?e.params:{}}function sd(n,{relative:e}={}){let{matches:t}=W.useContext(gi),{pathname:r}=Mo(),a=JSON.stringify(_S(t));return W.useMemo(()=>yS(n,JSON.parse(a),r,e==="path"),[n,a,r,e])}function wN(n,e){return bS(n,e)}function bS(n,e,t,r){var Y;Et(rd(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:a,static:o}=W.useContext(pi),{matches:u}=W.useContext(gi),h=u[u.length-1],f=h?h.params:{},p=h?h.pathname:"/",y=h?h.pathnameBase:"/",v=h&&h.route;{let $=v&&v.path||"";IS(p,!v||$.endsWith("*")||$.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${$}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${$}"> to <Route path="${$==="/"?"*":`${$}/*`}">.`)}let w=Mo(),S;if(e){let $=typeof e=="string"?Pu(e):e;Et(y==="/"||((Y=$.pathname)==null?void 0:Y.startsWith(y)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${y}" but pathname "${$.pathname}" was given in the \`location\` prop.`),S=$}else S=w;let P=S.pathname||"/",U=P;if(y!=="/"){let $=y.replace(/^\//,"").split("/");U="/"+P.replace(/^\//,"").split("/").slice($.length).join("/")}let L=!o&&t&&t.matches&&t.matches.length>0?t.matches:mS(n,{pathname:U});ui(v||L!=null,`No routes matched location "${S.pathname}${S.search}${S.hash}" `),ui(L==null||L[L.length-1].route.element!==void 0||L[L.length-1].route.Component!==void 0||L[L.length-1].route.lazy!==void 0,`Matched leaf route at location "${S.pathname}${S.search}${S.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let H=RN(L&&L.map($=>Object.assign({},$,{params:Object.assign({},f,$.params),pathname:Ki([y,a.encodeLocation?a.encodeLocation($.pathname).pathname:$.pathname]),pathnameBase:$.pathnameBase==="/"?y:Ki([y,a.encodeLocation?a.encodeLocation($.pathnameBase).pathname:$.pathnameBase])})),u,t,r);return e&&H?W.createElement(nd.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...S},navigationType:"POP"}},H):H}function bN(){let n=NN(),e=pN(n)?`${n.status} ${n.statusText}`:n instanceof Error?n.message:JSON.stringify(n),t=n instanceof Error?n.stack:null,r="rgba(200,200,200, 0.5)",a={padding:"0.5rem",backgroundColor:r},o={padding:"2px 4px",backgroundColor:r},u=null;return console.error("Error handled by React Router default ErrorBoundary:",n),u=W.createElement(W.Fragment,null,W.createElement("p",null,"💿 Hey developer 👋"),W.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",W.createElement("code",{style:o},"ErrorBoundary")," or"," ",W.createElement("code",{style:o},"errorElement")," prop on your route.")),W.createElement(W.Fragment,null,W.createElement("h2",null,"Unexpected Application Error!"),W.createElement("h3",{style:{fontStyle:"italic"}},e),t?W.createElement("pre",{style:a},t):null,u)}var IN=W.createElement(bN,null),AN=class extends W.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,e){return e.location!==n.location||e.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:e.error,location:e.location,revalidation:n.revalidation||e.revalidation}}componentDidCatch(n,e){console.error("React Router caught the following error during render",n,e)}render(){return this.state.error!==void 0?W.createElement(gi.Provider,{value:this.props.routeContext},W.createElement(Pv.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function SN({routeContext:n,match:e,children:t}){let r=W.useContext(xu);return r&&r.static&&r.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=e.route.id),W.createElement(gi.Provider,{value:n},t)}function RN(n,e=[],t=null,r=null){if(n==null){if(!t)return null;if(t.errors)n=t.matches;else if(e.length===0&&!t.initialized&&t.matches.length>0)n=t.matches;else return null}let a=n,o=t==null?void 0:t.errors;if(o!=null){let f=a.findIndex(p=>p.route.id&&(o==null?void 0:o[p.route.id])!==void 0);Et(f>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(o).join(",")}`),a=a.slice(0,Math.min(a.length,f+1))}let u=!1,h=-1;if(t)for(let f=0;f<a.length;f++){let p=a[f];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(h=f),p.route.id){let{loaderData:y,errors:v}=t,w=p.route.loader&&!y.hasOwnProperty(p.route.id)&&(!v||v[p.route.id]===void 0);if(p.route.lazy||w){u=!0,h>=0?a=a.slice(0,h+1):a=[a[0]];break}}}return a.reduceRight((f,p,y)=>{let v,w=!1,S=null,P=null;t&&(v=o&&p.route.id?o[p.route.id]:void 0,S=p.route.errorElement||IN,u&&(h<0&&y===0?(IS("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),w=!0,P=null):h===y&&(w=!0,P=p.route.hydrateFallbackElement||null)));let U=e.concat(a.slice(0,y+1)),L=()=>{let H;return v?H=S:w?H=P:p.route.Component?H=W.createElement(p.route.Component,null):p.route.element?H=p.route.element:H=f,W.createElement(SN,{match:p,routeContext:{outlet:f,matches:U,isDataRoute:t!=null},children:H})};return t&&(p.route.ErrorBoundary||p.route.errorElement||y===0)?W.createElement(AN,{location:t.location,revalidation:t.revalidation,component:S,error:v,children:L(),routeContext:{outlet:null,matches:U,isDataRoute:!0}}):L()},null)}function xv(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function CN(n){let e=W.useContext(xu);return Et(e,xv(n)),e}function DN(n){let e=W.useContext(up);return Et(e,xv(n)),e}function PN(n){let e=W.useContext(gi);return Et(e,xv(n)),e}function Nv(n){let e=PN(n),t=e.matches[e.matches.length-1];return Et(t.route.id,`${n} can only be used on routes that contain a unique "id"`),t.route.id}function xN(){return Nv("useRouteId")}function NN(){var r;let n=W.useContext(Pv),e=DN("useRouteError"),t=Nv("useRouteError");return n!==void 0?n:(r=e.errors)==null?void 0:r[t]}function ON(){let{router:n}=CN("useNavigate"),e=Nv("useNavigate"),t=W.useRef(!1);return wS(()=>{t.current=!0}),W.useCallback(async(a,o={})=>{ui(t.current,TS),t.current&&(typeof a=="number"?n.navigate(a):await n.navigate(a,{fromRouteId:e,...o}))},[n,e])}var Hb={};function IS(n,e,t){!e&&!Hb[n]&&(Hb[n]=!0,ui(!1,t))}W.memo(kN);function kN({routes:n,future:e,state:t}){return bS(n,void 0,t,e)}function lm(n){Et(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function VN({basename:n="/",children:e=null,location:t,navigationType:r="POP",navigator:a,static:o=!1}){Et(!rd(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let u=n.replace(/^\/*/,"/"),h=W.useMemo(()=>({basename:u,navigator:a,static:o,future:{}}),[u,a,o]);typeof t=="string"&&(t=Pu(t));let{pathname:f="/",search:p="",hash:y="",state:v=null,key:w="default"}=t,S=W.useMemo(()=>{let P=Wi(f,u);return P==null?null:{location:{pathname:P,search:p,hash:y,state:v,key:w},navigationType:r}},[u,f,p,y,v,w,r]);return ui(S!=null,`<Router basename="${u}"> is not able to match the URL "${f}${p}${y}" because it does not start with the basename, so the <Router> won't render anything.`),S==null?null:W.createElement(pi.Provider,{value:h},W.createElement(nd.Provider,{children:e,value:S}))}function MN({children:n,location:e}){return wN(Ny(n),e)}function Ny(n,e=[]){let t=[];return W.Children.forEach(n,(r,a)=>{if(!W.isValidElement(r))return;let o=[...e,a];if(r.type===W.Fragment){t.push.apply(t,Ny(r.props.children,o));return}Et(r.type===lm,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Et(!r.props.index||!r.props.children,"An index route cannot have child routes.");let u={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(u.children=Ny(r.props.children,o)),t.push(u)}),t}var um="get",cm="application/x-www-form-urlencoded";function cp(n){return n!=null&&typeof n.tagName=="string"}function LN(n){return cp(n)&&n.tagName.toLowerCase()==="button"}function UN(n){return cp(n)&&n.tagName.toLowerCase()==="form"}function BN(n){return cp(n)&&n.tagName.toLowerCase()==="input"}function zN(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function FN(n,e){return n.button===0&&(!e||e==="_self")&&!zN(n)}var Xf=null;function qN(){if(Xf===null)try{new FormData(document.createElement("form"),0),Xf=!1}catch{Xf=!0}return Xf}var jN=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function ay(n){return n!=null&&!jN.has(n)?(ui(!1,`"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${cm}"`),null):n}function HN(n,e){let t,r,a,o,u;if(UN(n)){let h=n.getAttribute("action");r=h?Wi(h,e):null,t=n.getAttribute("method")||um,a=ay(n.getAttribute("enctype"))||cm,o=new FormData(n)}else if(LN(n)||BN(n)&&(n.type==="submit"||n.type==="image")){let h=n.form;if(h==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let f=n.getAttribute("formaction")||h.getAttribute("action");if(r=f?Wi(f,e):null,t=n.getAttribute("formmethod")||h.getAttribute("method")||um,a=ay(n.getAttribute("formenctype"))||ay(h.getAttribute("enctype"))||cm,o=new FormData(h,n),!qN()){let{name:p,type:y,value:v}=n;if(y==="image"){let w=p?`${p}.`:"";o.append(`${w}x`,"0"),o.append(`${w}y`,"0")}else p&&o.append(p,v)}}else{if(cp(n))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');t=um,r=null,a=cm,u=n}return o&&a==="text/plain"&&(u=o,o=void 0),{action:r,method:t.toLowerCase(),encType:a,formData:o,body:u}}function Ov(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}async function GN(n,e){if(n.id in e)return e[n.id];try{let t=await import(n.module);return e[n.id]=t,t}catch(t){return console.error(`Error loading route module \`${n.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function $N(n){return n==null?!1:n.href==null?n.rel==="preload"&&typeof n.imageSrcSet=="string"&&typeof n.imageSizes=="string":typeof n.rel=="string"&&typeof n.href=="string"}async function KN(n,e,t){let r=await Promise.all(n.map(async a=>{let o=e.routes[a.route.id];if(o){let u=await GN(o,t);return u.links?u.links():[]}return[]}));return XN(r.flat(1).filter($N).filter(a=>a.rel==="stylesheet"||a.rel==="preload").map(a=>a.rel==="stylesheet"?{...a,rel:"prefetch",as:"style"}:{...a,rel:"prefetch"}))}function Gb(n,e,t,r,a,o){let u=(f,p)=>t[p]?f.route.id!==t[p].route.id:!0,h=(f,p)=>{var y;return t[p].pathname!==f.pathname||((y=t[p].route.path)==null?void 0:y.endsWith("*"))&&t[p].params["*"]!==f.params["*"]};return o==="assets"?e.filter((f,p)=>u(f,p)||h(f,p)):o==="data"?e.filter((f,p)=>{var v;let y=r.routes[f.route.id];if(!y||!y.hasLoader)return!1;if(u(f,p)||h(f,p))return!0;if(f.route.shouldRevalidate){let w=f.route.shouldRevalidate({currentUrl:new URL(a.pathname+a.search+a.hash,window.origin),currentParams:((v=t[0])==null?void 0:v.params)||{},nextUrl:new URL(n,window.origin),nextParams:f.params,defaultShouldRevalidate:!0});if(typeof w=="boolean")return w}return!0}):[]}function QN(n,e,{includeHydrateFallback:t}={}){return WN(n.map(r=>{let a=e.routes[r.route.id];if(!a)return[];let o=[a.module];return a.clientActionModule&&(o=o.concat(a.clientActionModule)),a.clientLoaderModule&&(o=o.concat(a.clientLoaderModule)),t&&a.hydrateFallbackModule&&(o=o.concat(a.hydrateFallbackModule)),a.imports&&(o=o.concat(a.imports)),o}).flat(1))}function WN(n){return[...new Set(n)]}function YN(n){let e={},t=Object.keys(n).sort();for(let r of t)e[r]=n[r];return e}function XN(n,e){let t=new Set;return new Set(e),n.reduce((r,a)=>{let o=JSON.stringify(YN(a));return t.has(o)||(t.add(o),r.push({key:o,link:a})),r},[])}function ZN(n,e){let t=typeof n=="string"?new URL(n,typeof window>"u"?"server://singlefetch/":window.location.origin):n;return t.pathname==="/"?t.pathname="_root.data":e&&Wi(t.pathname,e)==="/"?t.pathname=`${e.replace(/\/$/,"")}/_root.data`:t.pathname=`${t.pathname.replace(/\/$/,"")}.data`,t}function AS(){let n=W.useContext(xu);return Ov(n,"You must render this element inside a <DataRouterContext.Provider> element"),n}function JN(){let n=W.useContext(up);return Ov(n,"You must render this element inside a <DataRouterStateContext.Provider> element"),n}var kv=W.createContext(void 0);kv.displayName="FrameworkContext";function SS(){let n=W.useContext(kv);return Ov(n,"You must render this element inside a <HydratedRouter> element"),n}function eO(n,e){let t=W.useContext(kv),[r,a]=W.useState(!1),[o,u]=W.useState(!1),{onFocus:h,onBlur:f,onMouseEnter:p,onMouseLeave:y,onTouchStart:v}=e,w=W.useRef(null);W.useEffect(()=>{if(n==="render"&&u(!0),n==="viewport"){let U=H=>{H.forEach(Y=>{u(Y.isIntersecting)})},L=new IntersectionObserver(U,{threshold:.5});return w.current&&L.observe(w.current),()=>{L.disconnect()}}},[n]),W.useEffect(()=>{if(r){let U=setTimeout(()=>{u(!0)},100);return()=>{clearTimeout(U)}}},[r]);let S=()=>{a(!0)},P=()=>{a(!1),u(!1)};return t?n!=="intent"?[o,w,{}]:[o,w,{onFocus:eh(h,S),onBlur:eh(f,P),onMouseEnter:eh(p,S),onMouseLeave:eh(y,P),onTouchStart:eh(v,S)}]:[!1,w,{}]}function eh(n,e){return t=>{n&&n(t),t.defaultPrevented||e(t)}}function tO({page:n,...e}){let{router:t}=AS(),r=W.useMemo(()=>mS(t.routes,n,t.basename),[t.routes,n,t.basename]);return r?W.createElement(rO,{page:n,matches:r,...e}):null}function nO(n){let{manifest:e,routeModules:t}=SS(),[r,a]=W.useState([]);return W.useEffect(()=>{let o=!1;return KN(n,e,t).then(u=>{o||a(u)}),()=>{o=!0}},[n,e,t]),r}function rO({page:n,matches:e,...t}){let r=Mo(),{manifest:a,routeModules:o}=SS(),{basename:u}=AS(),{loaderData:h,matches:f}=JN(),p=W.useMemo(()=>Gb(n,e,f,a,r,"data"),[n,e,f,a,r]),y=W.useMemo(()=>Gb(n,e,f,a,r,"assets"),[n,e,f,a,r]),v=W.useMemo(()=>{if(n===r.pathname+r.search+r.hash)return[];let P=new Set,U=!1;if(e.forEach(H=>{var $;let Y=a.routes[H.route.id];!Y||!Y.hasLoader||(!p.some(oe=>oe.route.id===H.route.id)&&H.route.id in h&&(($=o[H.route.id])!=null&&$.shouldRevalidate)||Y.hasClientLoader?U=!0:P.add(H.route.id))}),P.size===0)return[];let L=ZN(n,u);return U&&P.size>0&&L.searchParams.set("_routes",e.filter(H=>P.has(H.route.id)).map(H=>H.route.id).join(",")),[L.pathname+L.search]},[u,h,r,a,p,e,n,o]),w=W.useMemo(()=>QN(y,a),[y,a]),S=nO(y);return W.createElement(W.Fragment,null,v.map(P=>W.createElement("link",{key:P,rel:"prefetch",as:"fetch",href:P,...t})),w.map(P=>W.createElement("link",{key:P,rel:"modulepreload",href:P,...t})),S.map(({key:P,link:U})=>W.createElement("link",{key:P,...U})))}function iO(...n){return e=>{n.forEach(t=>{typeof t=="function"?t(e):t!=null&&(t.current=e)})}}var RS=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{RS&&(window.__reactRouterVersion="7.5.0")}catch{}function sO({basename:n,children:e,window:t}){let r=W.useRef();r.current==null&&(r.current=Kx({window:t,v5Compat:!0}));let a=r.current,[o,u]=W.useState({action:a.action,location:a.location}),h=W.useCallback(f=>{W.startTransition(()=>u(f))},[u]);return W.useLayoutEffect(()=>a.listen(h),[a,h]),W.createElement(VN,{basename:n,children:e,location:o.location,navigationType:o.action,navigator:a})}var CS=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Vv=W.forwardRef(function({onClick:e,discover:t="render",prefetch:r="none",relative:a,reloadDocument:o,replace:u,state:h,target:f,to:p,preventScrollReset:y,viewTransition:v,...w},S){let{basename:P}=W.useContext(pi),U=typeof p=="string"&&CS.test(p),L,H=!1;if(typeof p=="string"&&U&&(L=p,RS))try{let A=new URL(window.location.href),x=p.startsWith("//")?new URL(A.protocol+p):new URL(p),V=Wi(x.pathname,P);x.origin===A.origin&&V!=null?p=V+x.search+x.hash:H=!0}catch{ui(!1,`<Link to="${p}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let Y=vN(p,{relative:a}),[$,oe,ae]=eO(r,w),le=uO(p,{replace:u,state:h,target:f,preventScrollReset:y,relative:a,viewTransition:v});function D(A){e&&e(A),A.defaultPrevented||le(A)}let R=W.createElement("a",{...w,...ae,href:L||Y,onClick:H||o?e:D,ref:iO(S,oe),target:f,"data-discover":!U&&t==="render"?"true":void 0});return $&&!U?W.createElement(W.Fragment,null,R,W.createElement(tO,{page:Y})):R});Vv.displayName="Link";var aO=W.forwardRef(function({"aria-current":e="page",caseSensitive:t=!1,className:r="",end:a=!1,style:o,to:u,viewTransition:h,children:f,...p},y){let v=sd(u,{relative:p.relative}),w=Mo(),S=W.useContext(up),{navigator:P,basename:U}=W.useContext(pi),L=S!=null&&mO(v)&&h===!0,H=P.encodeLocation?P.encodeLocation(v).pathname:v.pathname,Y=w.pathname,$=S&&S.navigation&&S.navigation.location?S.navigation.location.pathname:null;t||(Y=Y.toLowerCase(),$=$?$.toLowerCase():null,H=H.toLowerCase()),$&&U&&($=Wi($,U)||$);const oe=H!=="/"&&H.endsWith("/")?H.length-1:H.length;let ae=Y===H||!a&&Y.startsWith(H)&&Y.charAt(oe)==="/",le=$!=null&&($===H||!a&&$.startsWith(H)&&$.charAt(H.length)==="/"),D={isActive:ae,isPending:le,isTransitioning:L},R=ae?e:void 0,A;typeof r=="function"?A=r(D):A=[r,ae?"active":null,le?"pending":null,L?"transitioning":null].filter(Boolean).join(" ");let x=typeof o=="function"?o(D):o;return W.createElement(Vv,{...p,"aria-current":R,className:A,ref:y,style:x,to:u,viewTransition:h},typeof f=="function"?f(D):f)});aO.displayName="NavLink";var oO=W.forwardRef(({discover:n="render",fetcherKey:e,navigate:t,reloadDocument:r,replace:a,state:o,method:u=um,action:h,onSubmit:f,relative:p,preventScrollReset:y,viewTransition:v,...w},S)=>{let P=dO(),U=fO(h,{relative:p}),L=u.toLowerCase()==="get"?"get":"post",H=typeof h=="string"&&CS.test(h),Y=$=>{if(f&&f($),$.defaultPrevented)return;$.preventDefault();let oe=$.nativeEvent.submitter,ae=(oe==null?void 0:oe.getAttribute("formmethod"))||u;P(oe||$.currentTarget,{fetcherKey:e,method:ae,navigate:t,replace:a,state:o,relative:p,preventScrollReset:y,viewTransition:v})};return W.createElement("form",{ref:S,method:L,action:U,onSubmit:r?f:Y,...w,"data-discover":!H&&n==="render"?"true":void 0})});oO.displayName="Form";function lO(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function DS(n){let e=W.useContext(xu);return Et(e,lO(n)),e}function uO(n,{target:e,replace:t,state:r,preventScrollReset:a,relative:o,viewTransition:u}={}){let h=id(),f=Mo(),p=sd(n,{relative:o});return W.useCallback(y=>{if(FN(y,e)){y.preventDefault();let v=t!==void 0?t:Ph(f)===Ph(p);h(n,{replace:v,state:r,preventScrollReset:a,relative:o,viewTransition:u})}},[f,h,p,t,r,e,n,a,o,u])}var cO=0,hO=()=>`__${String(++cO)}__`;function dO(){let{router:n}=DS("useSubmit"),{basename:e}=W.useContext(pi),t=xN();return W.useCallback(async(r,a={})=>{let{action:o,method:u,encType:h,formData:f,body:p}=HN(r,e);if(a.navigate===!1){let y=a.fetcherKey||hO();await n.fetch(y,t,a.action||o,{preventScrollReset:a.preventScrollReset,formData:f,body:p,formMethod:a.method||u,formEncType:a.encType||h,flushSync:a.flushSync})}else await n.navigate(a.action||o,{preventScrollReset:a.preventScrollReset,formData:f,body:p,formMethod:a.method||u,formEncType:a.encType||h,replace:a.replace,state:a.state,fromRouteId:t,flushSync:a.flushSync,viewTransition:a.viewTransition})},[n,e,t])}function fO(n,{relative:e}={}){let{basename:t}=W.useContext(pi),r=W.useContext(gi);Et(r,"useFormAction must be used inside a RouteContext");let[a]=r.matches.slice(-1),o={...sd(n||".",{relative:e})},u=Mo();if(n==null){o.search=u.search;let h=new URLSearchParams(o.search),f=h.getAll("index");if(f.some(y=>y==="")){h.delete("index"),f.filter(v=>v).forEach(v=>h.append("index",v));let y=h.toString();o.search=y?`?${y}`:""}}return(!n||n===".")&&a.route.index&&(o.search=o.search?o.search.replace(/^\?/,"?index&"):"?index"),t!=="/"&&(o.pathname=o.pathname==="/"?t:Ki([t,o.pathname])),Ph(o)}function mO(n,e={}){let t=W.useContext(ES);Et(t!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=DS("useViewTransitionState"),a=sd(n,{relative:e.relative});if(!t.isTransitioning)return!1;let o=Wi(t.currentLocation.pathname,r)||t.currentLocation.pathname,u=Wi(t.nextLocation.pathname,r)||t.nextLocation.pathname;return Pm(a.pathname,u)!=null||Pm(a.pathname,o)!=null}new TextEncoder;const pO=()=>{};var $b={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PS=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let a=n.charCodeAt(r);a<128?e[t++]=a:a<2048?(e[t++]=a>>6|192,e[t++]=a&63|128):(a&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(a=65536+((a&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=a>>18|240,e[t++]=a>>12&63|128,e[t++]=a>>6&63|128,e[t++]=a&63|128):(e[t++]=a>>12|224,e[t++]=a>>6&63|128,e[t++]=a&63|128)}return e},gO=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const a=n[t++];if(a<128)e[r++]=String.fromCharCode(a);else if(a>191&&a<224){const o=n[t++];e[r++]=String.fromCharCode((a&31)<<6|o&63)}else if(a>239&&a<365){const o=n[t++],u=n[t++],h=n[t++],f=((a&7)<<18|(o&63)<<12|(u&63)<<6|h&63)-65536;e[r++]=String.fromCharCode(55296+(f>>10)),e[r++]=String.fromCharCode(56320+(f&1023))}else{const o=n[t++],u=n[t++];e[r++]=String.fromCharCode((a&15)<<12|(o&63)<<6|u&63)}}return e.join("")},xS={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let a=0;a<n.length;a+=3){const o=n[a],u=a+1<n.length,h=u?n[a+1]:0,f=a+2<n.length,p=f?n[a+2]:0,y=o>>2,v=(o&3)<<4|h>>4;let w=(h&15)<<2|p>>6,S=p&63;f||(S=64,u||(w=64)),r.push(t[y],t[v],t[w],t[S])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(PS(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):gO(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let a=0;a<n.length;){const o=t[n.charAt(a++)],h=a<n.length?t[n.charAt(a)]:0;++a;const p=a<n.length?t[n.charAt(a)]:64;++a;const v=a<n.length?t[n.charAt(a)]:64;if(++a,o==null||h==null||p==null||v==null)throw new _O;const w=o<<2|h>>4;if(r.push(w),p!==64){const S=h<<4&240|p>>2;if(r.push(S),v!==64){const P=p<<6&192|v;r.push(P)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class _O extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const yO=function(n){const e=PS(n);return xS.encodeByteArray(e,!0)},xm=function(n){return yO(n).replace(/\./g,"")},Mv=function(n){try{return xS.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function Nm(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!vO(t)||(n[t]=Nm(n[t],e[t]));return n}function vO(n){return n!=="__proto__"}/**
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
 */function NS(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const EO=()=>NS().__FIREBASE_DEFAULTS__,TO=()=>{if(typeof process>"u"||typeof $b>"u")return;const n=$b.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},wO=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Mv(n[1]);return e&&JSON.parse(e)},Lv=()=>{try{return pO()||EO()||TO()||wO()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},OS=()=>{var n;return(n=Lv())===null||n===void 0?void 0:n.config},bO=n=>{var e;return(e=Lv())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IO{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function AO(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",a=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const u=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:a,exp:a+3600,auth_time:a,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},n);return[xm(JSON.stringify(t)),xm(JSON.stringify(u)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function SO(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(wt())}function Uv(){var n;const e=(n=Lv())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function RO(){return typeof window<"u"||kS()}function kS(){return typeof WorkerGlobalScope<"u"&&typeof self<"u"&&self instanceof WorkerGlobalScope}function CO(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function VS(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Bv(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function MS(){const n=wt();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function LS(){return!Uv()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function xh(){try{return typeof indexedDB=="object"}catch{return!1}}function DO(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",a=self.indexedDB.open(r);a.onsuccess=()=>{a.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},a.onupgradeneeded=()=>{t=!1},a.onerror=()=>{var o;e(((o=a.error)===null||o===void 0?void 0:o.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PO="FirebaseError";class kn extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=PO,Object.setPrototypeOf(this,kn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Lo.prototype.create)}}class Lo{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},a=`${this.service}/${e}`,o=this.errors[e],u=o?xO(o,r):"Error",h=`${this.serviceName}: ${u} (${a}).`;return new kn(a,h,r)}}function xO(n,e){return n.replace(NO,(t,r)=>{const a=e[r];return a!=null?String(a):`<${r}?>`})}const NO=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kb(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function OO(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function aa(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const a of t){if(!r.includes(a))return!1;const o=n[a],u=e[a];if(Qb(o)&&Qb(u)){if(!aa(o,u))return!1}else if(o!==u)return!1}for(const a of r)if(!t.includes(a))return!1;return!0}function Qb(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nu(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(a=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(a))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function $l(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[a,o]=r.split("=");e[decodeURIComponent(a)]=decodeURIComponent(o)}}),e}function ch(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function US(n,e){const t=new kO(n,e);return t.subscribe.bind(t)}class kO{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let a;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");VO(e,["next","error","complete"])?a=e:a={next:e,error:t,complete:r},a.next===void 0&&(a.next=oy),a.error===void 0&&(a.error=oy),a.complete===void 0&&(a.complete=oy);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?a.error(this.finalError):a.complete()}catch{}}),this.observers.push(a),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function VO(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function oy(){}/**
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
 */function Ae(n){return n&&n._delegate?n._delegate:n}class ci{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const so="[DEFAULT]";/**
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
 */class MO{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new IO;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const a=this.getOrInitializeService({instanceIdentifier:t});a&&r.resolve(a)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),a=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(a)return null;throw o}else{if(a)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(UO(e))try{this.getOrInitializeService({instanceIdentifier:so})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(t);try{const o=this.getOrInitializeService({instanceIdentifier:a});r.resolve(o)}catch{}}}}clearInstance(e=so){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=so){return this.instances.has(e)}getOptions(e=so){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const a=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[o,u]of this.instancesDeferred.entries()){const h=this.normalizeInstanceIdentifier(o);r===h&&u.resolve(a)}return a}onInit(e,t){var r;const a=this.normalizeInstanceIdentifier(t),o=(r=this.onInitCallbacks.get(a))!==null&&r!==void 0?r:new Set;o.add(e),this.onInitCallbacks.set(a,o);const u=this.instances.get(a);return u&&e(u,a),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const a of r)try{a(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:LO(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=so){return this.component?this.component.multipleInstances?e:so:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function LO(n){return n===so?void 0:n}function UO(n){return n.instantiationMode==="EAGER"}/**
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
 */class BS{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new MO(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zv=[];var Be;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Be||(Be={}));const zS={debug:Be.DEBUG,verbose:Be.VERBOSE,info:Be.INFO,warn:Be.WARN,error:Be.ERROR,silent:Be.SILENT},BO=Be.INFO,zO={[Be.DEBUG]:"log",[Be.VERBOSE]:"log",[Be.INFO]:"info",[Be.WARN]:"warn",[Be.ERROR]:"error"},FO=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),a=zO[e];if(a)console[a](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class hp{constructor(e){this.name=e,this._logLevel=BO,this._logHandler=FO,this._userLogHandler=null,zv.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Be))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?zS[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Be.DEBUG,...e),this._logHandler(this,Be.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Be.VERBOSE,...e),this._logHandler(this,Be.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Be.INFO,...e),this._logHandler(this,Be.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Be.WARN,...e),this._logHandler(this,Be.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Be.ERROR,...e),this._logHandler(this,Be.ERROR,...e)}}function qO(n){zv.forEach(e=>{e.setLogLevel(n)})}function jO(n,e){for(const t of zv){let r=null;e&&e.level&&(r=zS[e.level]),n===null?t.userLogHandler=null:t.userLogHandler=(a,o,...u)=>{const h=u.map(f=>{if(f==null)return null;if(typeof f=="string")return f;if(typeof f=="number"||typeof f=="boolean")return f.toString();if(f instanceof Error)return f.message;try{return JSON.stringify(f)}catch{return null}}).filter(f=>f).join(" ");o>=(r??a.logLevel)&&n({level:Be[o].toLowerCase(),message:h,args:u,type:a.name})}}}const HO=(n,e)=>e.some(t=>n instanceof t);let Wb,Yb;function GO(){return Wb||(Wb=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function $O(){return Yb||(Yb=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const FS=new WeakMap,Oy=new WeakMap,qS=new WeakMap,ly=new WeakMap,Fv=new WeakMap;function KO(n){const e=new Promise((t,r)=>{const a=()=>{n.removeEventListener("success",o),n.removeEventListener("error",u)},o=()=>{t(ta(n.result)),a()},u=()=>{r(n.error),a()};n.addEventListener("success",o),n.addEventListener("error",u)});return e.then(t=>{t instanceof IDBCursor&&FS.set(t,n)}).catch(()=>{}),Fv.set(e,n),e}function QO(n){if(Oy.has(n))return;const e=new Promise((t,r)=>{const a=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",u),n.removeEventListener("abort",u)},o=()=>{t(),a()},u=()=>{r(n.error||new DOMException("AbortError","AbortError")),a()};n.addEventListener("complete",o),n.addEventListener("error",u),n.addEventListener("abort",u)});Oy.set(n,e)}let ky={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Oy.get(n);if(e==="objectStoreNames")return n.objectStoreNames||qS.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return ta(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function WO(n){ky=n(ky)}function YO(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(uy(this),e,...t);return qS.set(r,e.sort?e.sort():[e]),ta(r)}:$O().includes(n)?function(...e){return n.apply(uy(this),e),ta(FS.get(this))}:function(...e){return ta(n.apply(uy(this),e))}}function XO(n){return typeof n=="function"?YO(n):(n instanceof IDBTransaction&&QO(n),HO(n,GO())?new Proxy(n,ky):n)}function ta(n){if(n instanceof IDBRequest)return KO(n);if(ly.has(n))return ly.get(n);const e=XO(n);return e!==n&&(ly.set(n,e),Fv.set(e,n)),e}const uy=n=>Fv.get(n);function ZO(n,e,{blocked:t,upgrade:r,blocking:a,terminated:o}={}){const u=indexedDB.open(n,e),h=ta(u);return r&&u.addEventListener("upgradeneeded",f=>{r(ta(u.result),f.oldVersion,f.newVersion,ta(u.transaction),f)}),t&&u.addEventListener("blocked",f=>t(f.oldVersion,f.newVersion,f)),h.then(f=>{o&&f.addEventListener("close",()=>o()),a&&f.addEventListener("versionchange",p=>a(p.oldVersion,p.newVersion,p))}).catch(()=>{}),h}const JO=["get","getKey","getAll","getAllKeys","count"],ek=["put","add","delete","clear"],cy=new Map;function Xb(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(cy.get(e))return cy.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,a=ek.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(a||JO.includes(t)))return;const o=async function(u,...h){const f=this.transaction(u,a?"readwrite":"readonly");let p=f.store;return r&&(p=p.index(h.shift())),(await Promise.all([p[t](...h),a&&f.done]))[0]};return cy.set(e,o),o}WO(n=>({...n,get:(e,t,r)=>Xb(e,t)||n.get(e,t,r),has:(e,t)=>!!Xb(e,t)||n.has(e,t)}));/**
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
 */class tk{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(nk(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function nk(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Om="@firebase/app",Vy="0.11.4";/**
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
 */const Yi=new hp("@firebase/app"),rk="@firebase/app-compat",ik="@firebase/analytics-compat",sk="@firebase/analytics",ak="@firebase/app-check-compat",ok="@firebase/app-check",lk="@firebase/auth",uk="@firebase/auth-compat",ck="@firebase/database",hk="@firebase/data-connect",dk="@firebase/database-compat",fk="@firebase/functions",mk="@firebase/functions-compat",pk="@firebase/installations",gk="@firebase/installations-compat",_k="@firebase/messaging",yk="@firebase/messaging-compat",vk="@firebase/performance",Ek="@firebase/performance-compat",Tk="@firebase/remote-config",wk="@firebase/remote-config-compat",bk="@firebase/storage",Ik="@firebase/storage-compat",Ak="@firebase/firestore",Sk="@firebase/vertexai",Rk="@firebase/firestore-compat",Ck="firebase",Dk="11.6.0";/**
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
 */const oa="[DEFAULT]",Pk={[Om]:"fire-core",[rk]:"fire-core-compat",[sk]:"fire-analytics",[ik]:"fire-analytics-compat",[ok]:"fire-app-check",[ak]:"fire-app-check-compat",[lk]:"fire-auth",[uk]:"fire-auth-compat",[ck]:"fire-rtdb",[hk]:"fire-data-connect",[dk]:"fire-rtdb-compat",[fk]:"fire-fn",[mk]:"fire-fn-compat",[pk]:"fire-iid",[gk]:"fire-iid-compat",[_k]:"fire-fcm",[yk]:"fire-fcm-compat",[vk]:"fire-perf",[Ek]:"fire-perf-compat",[Tk]:"fire-rc",[wk]:"fire-rc-compat",[bk]:"fire-gcs",[Ik]:"fire-gcs-compat",[Ak]:"fire-fst",[Rk]:"fire-fst-compat",[Sk]:"fire-vertex","fire-js":"fire-js",[Ck]:"fire-js-all"};/**
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
 */const la=new Map,nu=new Map,ru=new Map;function Nh(n,e){try{n.container.addComponent(e)}catch(t){Yi.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function jS(n,e){n.container.addOrOverwriteComponent(e)}function ua(n){const e=n.name;if(ru.has(e))return Yi.debug(`There were multiple attempts to register component ${e}.`),!1;ru.set(e,n);for(const t of la.values())Nh(t,n);for(const t of nu.values())Nh(t,n);return!0}function HS(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function xk(n,e,t=oa){HS(n,e).clearInstance(t)}function GS(n){return n.options!==void 0}function ft(n){return n==null?!1:n.settings!==void 0}function Nk(){ru.clear()}/**
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
 */const Ok={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Tr=new Lo("app","Firebase",Ok);/**
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
 */let $S=class{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ci("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Tr.create("app-deleted",{appName:this._name})}};/**
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
 */function Zb(n,e){const t=Mv(n.split(".")[1]);if(t===null){console.error(`FirebaseServerApp ${e} is invalid: second part could not be parsed.`);return}if(JSON.parse(t).exp===void 0){console.error(`FirebaseServerApp ${e} is invalid: expiration claim could not be parsed`);return}const a=JSON.parse(t).exp*1e3,o=new Date().getTime();a-o<=0&&console.error(`FirebaseServerApp ${e} is invalid: the token has expired.`)}class kk extends $S{constructor(e,t,r,a){const o=t.automaticDataCollectionEnabled!==void 0?t.automaticDataCollectionEnabled:!1,u={name:r,automaticDataCollectionEnabled:o};if(e.apiKey!==void 0)super(e,u,a);else{const h=e;super(h.options,u,a)}this._serverConfig=Object.assign({automaticDataCollectionEnabled:o},t),this._serverConfig.authIdToken&&Zb(this._serverConfig.authIdToken,"authIdToken"),this._serverConfig.appCheckToken&&Zb(this._serverConfig.appCheckToken,"appCheckToken"),this._finalizationRegistry=null,typeof FinalizationRegistry<"u"&&(this._finalizationRegistry=new FinalizationRegistry(()=>{this.automaticCleanup()})),this._refCount=0,this.incRefCount(this._serverConfig.releaseOnDeref),this._serverConfig.releaseOnDeref=void 0,t.releaseOnDeref=void 0,Nr(Om,Vy,"serverapp")}toJSON(){}get refCount(){return this._refCount}incRefCount(e){this.isDeleted||(this._refCount++,e!==void 0&&this._finalizationRegistry!==null&&this._finalizationRegistry.register(e,this))}decRefCount(){return this.isDeleted?0:--this._refCount}automaticCleanup(){jv(this)}get settings(){return this.checkDestroyed(),this._serverConfig}checkDestroyed(){if(this.isDeleted)throw Tr.create("server-app-deleted")}}/**
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
 */const va=Dk;function qv(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:oa,automaticDataCollectionEnabled:!1},e),a=r.name;if(typeof a!="string"||!a)throw Tr.create("bad-app-name",{appName:String(a)});if(t||(t=OS()),!t)throw Tr.create("no-options");const o=la.get(a);if(o){if(aa(t,o.options)&&aa(r,o.config))return o;throw Tr.create("duplicate-app",{appName:a})}const u=new BS(a);for(const f of ru.values())u.addComponent(f);const h=new $S(t,r,u);return la.set(a,h),h}function Vk(n,e){if(RO()&&!kS())throw Tr.create("invalid-server-app-environment");e.automaticDataCollectionEnabled===void 0&&(e.automaticDataCollectionEnabled=!1);let t;GS(n)?t=n.options:t=n;const r=Object.assign(Object.assign({},e),t);r.releaseOnDeref!==void 0&&delete r.releaseOnDeref;const a=p=>[...p].reduce((y,v)=>Math.imul(31,y)+v.charCodeAt(0)|0,0);if(e.releaseOnDeref!==void 0&&typeof FinalizationRegistry>"u")throw Tr.create("finalization-registry-not-supported",{});const o=""+a(JSON.stringify(r)),u=nu.get(o);if(u)return u.incRefCount(e.releaseOnDeref),u;const h=new BS(o);for(const p of ru.values())h.addComponent(p);const f=new kk(t,e,o,h);return nu.set(o,f),f}function Mk(n=oa){const e=la.get(n);if(!e&&n===oa&&OS())return qv();if(!e)throw Tr.create("no-app",{appName:n});return e}function Lk(){return Array.from(la.values())}async function jv(n){let e=!1;const t=n.name;la.has(t)?(e=!0,la.delete(t)):nu.has(t)&&n.decRefCount()<=0&&(nu.delete(t),e=!0),e&&(await Promise.all(n.container.getProviders().map(r=>r.delete())),n.isDeleted=!0)}function Nr(n,e,t){var r;let a=(r=Pk[n])!==null&&r!==void 0?r:n;t&&(a+=`-${t}`);const o=a.match(/\s|\//),u=e.match(/\s|\//);if(o||u){const h=[`Unable to register library "${a}" with version "${e}":`];o&&h.push(`library name "${a}" contains illegal characters (whitespace or "/")`),o&&u&&h.push("and"),u&&h.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Yi.warn(h.join(" "));return}ua(new ci(`${a}-version`,()=>({library:a,version:e}),"VERSION"))}function KS(n,e){if(n!==null&&typeof n!="function")throw Tr.create("invalid-log-argument");jO(n,e)}function QS(n){qO(n)}/**
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
 */const Uk="firebase-heartbeat-database",Bk=1,Oh="firebase-heartbeat-store";let hy=null;function WS(){return hy||(hy=ZO(Uk,Bk,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Oh)}catch(t){console.warn(t)}}}}).catch(n=>{throw Tr.create("idb-open",{originalErrorMessage:n.message})})),hy}async function zk(n){try{const t=(await WS()).transaction(Oh),r=await t.objectStore(Oh).get(YS(n));return await t.done,r}catch(e){if(e instanceof kn)Yi.warn(e.message);else{const t=Tr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Yi.warn(t.message)}}}async function Jb(n,e){try{const r=(await WS()).transaction(Oh,"readwrite");await r.objectStore(Oh).put(e,YS(n)),await r.done}catch(t){if(t instanceof kn)Yi.warn(t.message);else{const r=Tr.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Yi.warn(r.message)}}}function YS(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Fk=1024,qk=30;class jk{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Gk(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const a=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=eI();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(u=>u.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:a}),this._heartbeatsCache.heartbeats.length>qk){const u=$k(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(u,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Yi.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=eI(),{heartbeatsToSend:r,unsentEntries:a}=Hk(this._heartbeatsCache.heartbeats),o=xm(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,a.length>0?(this._heartbeatsCache.heartbeats=a,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(t){return Yi.warn(t),""}}}function eI(){return new Date().toISOString().substring(0,10)}function Hk(n,e=Fk){const t=[];let r=n.slice();for(const a of n){const o=t.find(u=>u.agent===a.agent);if(o){if(o.dates.push(a.date),tI(t)>e){o.dates.pop();break}}else if(t.push({agent:a.agent,dates:[a.date]}),tI(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class Gk{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return xh()?DO().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await zk(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const a=await this.read();return Jb(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:a.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const a=await this.read();return Jb(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:a.lastSentHeartbeatDate,heartbeats:[...a.heartbeats,...e.heartbeats]})}else return}}function tI(n){return xm(JSON.stringify({version:2,heartbeats:n})).length}function $k(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
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
 */function Kk(n){ua(new ci("platform-logger",e=>new tk(e),"PRIVATE")),ua(new ci("heartbeat",e=>new jk(e),"PRIVATE")),Nr(Om,Vy,n),Nr(Om,Vy,"esm2017"),Nr("fire-js","")}Kk("");const Qk=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:kn,SDK_VERSION:va,_DEFAULT_ENTRY_NAME:oa,_addComponent:Nh,_addOrOverwriteComponent:jS,_apps:la,_clearComponents:Nk,_components:ru,_getProvider:HS,_isFirebaseApp:GS,_isFirebaseServerApp:ft,_registerComponent:ua,_removeServiceInstance:xk,_serverApps:nu,deleteApp:jv,getApp:Mk,getApps:Lk,initializeApp:qv,initializeServerApp:Vk,onLog:KS,registerVersion:Nr,setLogLevel:QS},Symbol.toStringTag,{value:"Module"}));var nI=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var na,XS;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(D,R){function A(){}A.prototype=R.prototype,D.D=R.prototype,D.prototype=new A,D.prototype.constructor=D,D.C=function(x,V,z){for(var N=Array(arguments.length-2),Nt=2;Nt<arguments.length;Nt++)N[Nt-2]=arguments[Nt];return R.prototype[V].apply(x,N)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function a(D,R,A){A||(A=0);var x=Array(16);if(typeof R=="string")for(var V=0;16>V;++V)x[V]=R.charCodeAt(A++)|R.charCodeAt(A++)<<8|R.charCodeAt(A++)<<16|R.charCodeAt(A++)<<24;else for(V=0;16>V;++V)x[V]=R[A++]|R[A++]<<8|R[A++]<<16|R[A++]<<24;R=D.g[0],A=D.g[1],V=D.g[2];var z=D.g[3],N=R+(z^A&(V^z))+x[0]+3614090360&4294967295;R=A+(N<<7&4294967295|N>>>25),N=z+(V^R&(A^V))+x[1]+3905402710&4294967295,z=R+(N<<12&4294967295|N>>>20),N=V+(A^z&(R^A))+x[2]+606105819&4294967295,V=z+(N<<17&4294967295|N>>>15),N=A+(R^V&(z^R))+x[3]+3250441966&4294967295,A=V+(N<<22&4294967295|N>>>10),N=R+(z^A&(V^z))+x[4]+4118548399&4294967295,R=A+(N<<7&4294967295|N>>>25),N=z+(V^R&(A^V))+x[5]+1200080426&4294967295,z=R+(N<<12&4294967295|N>>>20),N=V+(A^z&(R^A))+x[6]+2821735955&4294967295,V=z+(N<<17&4294967295|N>>>15),N=A+(R^V&(z^R))+x[7]+4249261313&4294967295,A=V+(N<<22&4294967295|N>>>10),N=R+(z^A&(V^z))+x[8]+1770035416&4294967295,R=A+(N<<7&4294967295|N>>>25),N=z+(V^R&(A^V))+x[9]+2336552879&4294967295,z=R+(N<<12&4294967295|N>>>20),N=V+(A^z&(R^A))+x[10]+4294925233&4294967295,V=z+(N<<17&4294967295|N>>>15),N=A+(R^V&(z^R))+x[11]+2304563134&4294967295,A=V+(N<<22&4294967295|N>>>10),N=R+(z^A&(V^z))+x[12]+1804603682&4294967295,R=A+(N<<7&4294967295|N>>>25),N=z+(V^R&(A^V))+x[13]+4254626195&4294967295,z=R+(N<<12&4294967295|N>>>20),N=V+(A^z&(R^A))+x[14]+2792965006&4294967295,V=z+(N<<17&4294967295|N>>>15),N=A+(R^V&(z^R))+x[15]+1236535329&4294967295,A=V+(N<<22&4294967295|N>>>10),N=R+(V^z&(A^V))+x[1]+4129170786&4294967295,R=A+(N<<5&4294967295|N>>>27),N=z+(A^V&(R^A))+x[6]+3225465664&4294967295,z=R+(N<<9&4294967295|N>>>23),N=V+(R^A&(z^R))+x[11]+643717713&4294967295,V=z+(N<<14&4294967295|N>>>18),N=A+(z^R&(V^z))+x[0]+3921069994&4294967295,A=V+(N<<20&4294967295|N>>>12),N=R+(V^z&(A^V))+x[5]+3593408605&4294967295,R=A+(N<<5&4294967295|N>>>27),N=z+(A^V&(R^A))+x[10]+38016083&4294967295,z=R+(N<<9&4294967295|N>>>23),N=V+(R^A&(z^R))+x[15]+3634488961&4294967295,V=z+(N<<14&4294967295|N>>>18),N=A+(z^R&(V^z))+x[4]+3889429448&4294967295,A=V+(N<<20&4294967295|N>>>12),N=R+(V^z&(A^V))+x[9]+568446438&4294967295,R=A+(N<<5&4294967295|N>>>27),N=z+(A^V&(R^A))+x[14]+3275163606&4294967295,z=R+(N<<9&4294967295|N>>>23),N=V+(R^A&(z^R))+x[3]+4107603335&4294967295,V=z+(N<<14&4294967295|N>>>18),N=A+(z^R&(V^z))+x[8]+1163531501&4294967295,A=V+(N<<20&4294967295|N>>>12),N=R+(V^z&(A^V))+x[13]+2850285829&4294967295,R=A+(N<<5&4294967295|N>>>27),N=z+(A^V&(R^A))+x[2]+4243563512&4294967295,z=R+(N<<9&4294967295|N>>>23),N=V+(R^A&(z^R))+x[7]+1735328473&4294967295,V=z+(N<<14&4294967295|N>>>18),N=A+(z^R&(V^z))+x[12]+2368359562&4294967295,A=V+(N<<20&4294967295|N>>>12),N=R+(A^V^z)+x[5]+4294588738&4294967295,R=A+(N<<4&4294967295|N>>>28),N=z+(R^A^V)+x[8]+2272392833&4294967295,z=R+(N<<11&4294967295|N>>>21),N=V+(z^R^A)+x[11]+1839030562&4294967295,V=z+(N<<16&4294967295|N>>>16),N=A+(V^z^R)+x[14]+4259657740&4294967295,A=V+(N<<23&4294967295|N>>>9),N=R+(A^V^z)+x[1]+2763975236&4294967295,R=A+(N<<4&4294967295|N>>>28),N=z+(R^A^V)+x[4]+1272893353&4294967295,z=R+(N<<11&4294967295|N>>>21),N=V+(z^R^A)+x[7]+4139469664&4294967295,V=z+(N<<16&4294967295|N>>>16),N=A+(V^z^R)+x[10]+3200236656&4294967295,A=V+(N<<23&4294967295|N>>>9),N=R+(A^V^z)+x[13]+681279174&4294967295,R=A+(N<<4&4294967295|N>>>28),N=z+(R^A^V)+x[0]+3936430074&4294967295,z=R+(N<<11&4294967295|N>>>21),N=V+(z^R^A)+x[3]+3572445317&4294967295,V=z+(N<<16&4294967295|N>>>16),N=A+(V^z^R)+x[6]+76029189&4294967295,A=V+(N<<23&4294967295|N>>>9),N=R+(A^V^z)+x[9]+3654602809&4294967295,R=A+(N<<4&4294967295|N>>>28),N=z+(R^A^V)+x[12]+3873151461&4294967295,z=R+(N<<11&4294967295|N>>>21),N=V+(z^R^A)+x[15]+530742520&4294967295,V=z+(N<<16&4294967295|N>>>16),N=A+(V^z^R)+x[2]+3299628645&4294967295,A=V+(N<<23&4294967295|N>>>9),N=R+(V^(A|~z))+x[0]+4096336452&4294967295,R=A+(N<<6&4294967295|N>>>26),N=z+(A^(R|~V))+x[7]+1126891415&4294967295,z=R+(N<<10&4294967295|N>>>22),N=V+(R^(z|~A))+x[14]+2878612391&4294967295,V=z+(N<<15&4294967295|N>>>17),N=A+(z^(V|~R))+x[5]+4237533241&4294967295,A=V+(N<<21&4294967295|N>>>11),N=R+(V^(A|~z))+x[12]+1700485571&4294967295,R=A+(N<<6&4294967295|N>>>26),N=z+(A^(R|~V))+x[3]+2399980690&4294967295,z=R+(N<<10&4294967295|N>>>22),N=V+(R^(z|~A))+x[10]+4293915773&4294967295,V=z+(N<<15&4294967295|N>>>17),N=A+(z^(V|~R))+x[1]+2240044497&4294967295,A=V+(N<<21&4294967295|N>>>11),N=R+(V^(A|~z))+x[8]+1873313359&4294967295,R=A+(N<<6&4294967295|N>>>26),N=z+(A^(R|~V))+x[15]+4264355552&4294967295,z=R+(N<<10&4294967295|N>>>22),N=V+(R^(z|~A))+x[6]+2734768916&4294967295,V=z+(N<<15&4294967295|N>>>17),N=A+(z^(V|~R))+x[13]+1309151649&4294967295,A=V+(N<<21&4294967295|N>>>11),N=R+(V^(A|~z))+x[4]+4149444226&4294967295,R=A+(N<<6&4294967295|N>>>26),N=z+(A^(R|~V))+x[11]+3174756917&4294967295,z=R+(N<<10&4294967295|N>>>22),N=V+(R^(z|~A))+x[2]+718787259&4294967295,V=z+(N<<15&4294967295|N>>>17),N=A+(z^(V|~R))+x[9]+3951481745&4294967295,D.g[0]=D.g[0]+R&4294967295,D.g[1]=D.g[1]+(V+(N<<21&4294967295|N>>>11))&4294967295,D.g[2]=D.g[2]+V&4294967295,D.g[3]=D.g[3]+z&4294967295}r.prototype.u=function(D,R){R===void 0&&(R=D.length);for(var A=R-this.blockSize,x=this.B,V=this.h,z=0;z<R;){if(V==0)for(;z<=A;)a(this,D,z),z+=this.blockSize;if(typeof D=="string"){for(;z<R;)if(x[V++]=D.charCodeAt(z++),V==this.blockSize){a(this,x),V=0;break}}else for(;z<R;)if(x[V++]=D[z++],V==this.blockSize){a(this,x),V=0;break}}this.h=V,this.o+=R},r.prototype.v=function(){var D=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);D[0]=128;for(var R=1;R<D.length-8;++R)D[R]=0;var A=8*this.o;for(R=D.length-8;R<D.length;++R)D[R]=A&255,A/=256;for(this.u(D),D=Array(16),R=A=0;4>R;++R)for(var x=0;32>x;x+=8)D[A++]=this.g[R]>>>x&255;return D};function o(D,R){var A=h;return Object.prototype.hasOwnProperty.call(A,D)?A[D]:A[D]=R(D)}function u(D,R){this.h=R;for(var A=[],x=!0,V=D.length-1;0<=V;V--){var z=D[V]|0;x&&z==R||(A[V]=z,x=!1)}this.g=A}var h={};function f(D){return-128<=D&&128>D?o(D,function(R){return new u([R|0],0>R?-1:0)}):new u([D|0],0>D?-1:0)}function p(D){if(isNaN(D)||!isFinite(D))return v;if(0>D)return L(p(-D));for(var R=[],A=1,x=0;D>=A;x++)R[x]=D/A|0,A*=4294967296;return new u(R,0)}function y(D,R){if(D.length==0)throw Error("number format error: empty string");if(R=R||10,2>R||36<R)throw Error("radix out of range: "+R);if(D.charAt(0)=="-")return L(y(D.substring(1),R));if(0<=D.indexOf("-"))throw Error('number format error: interior "-" character');for(var A=p(Math.pow(R,8)),x=v,V=0;V<D.length;V+=8){var z=Math.min(8,D.length-V),N=parseInt(D.substring(V,V+z),R);8>z?(z=p(Math.pow(R,z)),x=x.j(z).add(p(N))):(x=x.j(A),x=x.add(p(N)))}return x}var v=f(0),w=f(1),S=f(16777216);n=u.prototype,n.m=function(){if(U(this))return-L(this).m();for(var D=0,R=1,A=0;A<this.g.length;A++){var x=this.i(A);D+=(0<=x?x:4294967296+x)*R,R*=4294967296}return D},n.toString=function(D){if(D=D||10,2>D||36<D)throw Error("radix out of range: "+D);if(P(this))return"0";if(U(this))return"-"+L(this).toString(D);for(var R=p(Math.pow(D,6)),A=this,x="";;){var V=oe(A,R).g;A=H(A,V.j(R));var z=((0<A.g.length?A.g[0]:A.h)>>>0).toString(D);if(A=V,P(A))return z+x;for(;6>z.length;)z="0"+z;x=z+x}},n.i=function(D){return 0>D?0:D<this.g.length?this.g[D]:this.h};function P(D){if(D.h!=0)return!1;for(var R=0;R<D.g.length;R++)if(D.g[R]!=0)return!1;return!0}function U(D){return D.h==-1}n.l=function(D){return D=H(this,D),U(D)?-1:P(D)?0:1};function L(D){for(var R=D.g.length,A=[],x=0;x<R;x++)A[x]=~D.g[x];return new u(A,~D.h).add(w)}n.abs=function(){return U(this)?L(this):this},n.add=function(D){for(var R=Math.max(this.g.length,D.g.length),A=[],x=0,V=0;V<=R;V++){var z=x+(this.i(V)&65535)+(D.i(V)&65535),N=(z>>>16)+(this.i(V)>>>16)+(D.i(V)>>>16);x=N>>>16,z&=65535,N&=65535,A[V]=N<<16|z}return new u(A,A[A.length-1]&-2147483648?-1:0)};function H(D,R){return D.add(L(R))}n.j=function(D){if(P(this)||P(D))return v;if(U(this))return U(D)?L(this).j(L(D)):L(L(this).j(D));if(U(D))return L(this.j(L(D)));if(0>this.l(S)&&0>D.l(S))return p(this.m()*D.m());for(var R=this.g.length+D.g.length,A=[],x=0;x<2*R;x++)A[x]=0;for(x=0;x<this.g.length;x++)for(var V=0;V<D.g.length;V++){var z=this.i(x)>>>16,N=this.i(x)&65535,Nt=D.i(V)>>>16,It=D.i(V)&65535;A[2*x+2*V]+=N*It,Y(A,2*x+2*V),A[2*x+2*V+1]+=z*It,Y(A,2*x+2*V+1),A[2*x+2*V+1]+=N*Nt,Y(A,2*x+2*V+1),A[2*x+2*V+2]+=z*Nt,Y(A,2*x+2*V+2)}for(x=0;x<R;x++)A[x]=A[2*x+1]<<16|A[2*x];for(x=R;x<2*R;x++)A[x]=0;return new u(A,0)};function Y(D,R){for(;(D[R]&65535)!=D[R];)D[R+1]+=D[R]>>>16,D[R]&=65535,R++}function $(D,R){this.g=D,this.h=R}function oe(D,R){if(P(R))throw Error("division by zero");if(P(D))return new $(v,v);if(U(D))return R=oe(L(D),R),new $(L(R.g),L(R.h));if(U(R))return R=oe(D,L(R)),new $(L(R.g),R.h);if(30<D.g.length){if(U(D)||U(R))throw Error("slowDivide_ only works with positive integers.");for(var A=w,x=R;0>=x.l(D);)A=ae(A),x=ae(x);var V=le(A,1),z=le(x,1);for(x=le(x,2),A=le(A,2);!P(x);){var N=z.add(x);0>=N.l(D)&&(V=V.add(A),z=N),x=le(x,1),A=le(A,1)}return R=H(D,V.j(R)),new $(V,R)}for(V=v;0<=D.l(R);){for(A=Math.max(1,Math.floor(D.m()/R.m())),x=Math.ceil(Math.log(A)/Math.LN2),x=48>=x?1:Math.pow(2,x-48),z=p(A),N=z.j(R);U(N)||0<N.l(D);)A-=x,z=p(A),N=z.j(R);P(z)&&(z=w),V=V.add(z),D=H(D,N)}return new $(V,D)}n.A=function(D){return oe(this,D).h},n.and=function(D){for(var R=Math.max(this.g.length,D.g.length),A=[],x=0;x<R;x++)A[x]=this.i(x)&D.i(x);return new u(A,this.h&D.h)},n.or=function(D){for(var R=Math.max(this.g.length,D.g.length),A=[],x=0;x<R;x++)A[x]=this.i(x)|D.i(x);return new u(A,this.h|D.h)},n.xor=function(D){for(var R=Math.max(this.g.length,D.g.length),A=[],x=0;x<R;x++)A[x]=this.i(x)^D.i(x);return new u(A,this.h^D.h)};function ae(D){for(var R=D.g.length+1,A=[],x=0;x<R;x++)A[x]=D.i(x)<<1|D.i(x-1)>>>31;return new u(A,D.h)}function le(D,R){var A=R>>5;R%=32;for(var x=D.g.length-A,V=[],z=0;z<x;z++)V[z]=0<R?D.i(z+A)>>>R|D.i(z+A+1)<<32-R:D.i(z+A);return new u(V,D.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,XS=r,u.prototype.add=u.prototype.add,u.prototype.multiply=u.prototype.j,u.prototype.modulo=u.prototype.A,u.prototype.compare=u.prototype.l,u.prototype.toNumber=u.prototype.m,u.prototype.toString=u.prototype.toString,u.prototype.getBits=u.prototype.i,u.fromNumber=p,u.fromString=y,na=u}).apply(typeof nI<"u"?nI:typeof self<"u"?self:typeof window<"u"?window:{});var Zf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ZS,hh,JS,hm,My,eR,tR,nR;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(d,_,E){return d==Array.prototype||d==Object.prototype||(d[_]=E.value),d};function t(d){d=[typeof globalThis=="object"&&globalThis,d,typeof window=="object"&&window,typeof self=="object"&&self,typeof Zf=="object"&&Zf];for(var _=0;_<d.length;++_){var E=d[_];if(E&&E.Math==Math)return E}throw Error("Cannot find global object")}var r=t(this);function a(d,_){if(_)e:{var E=r;d=d.split(".");for(var I=0;I<d.length-1;I++){var F=d[I];if(!(F in E))break e;E=E[F]}d=d[d.length-1],I=E[d],_=_(I),_!=I&&_!=null&&e(E,d,{configurable:!0,writable:!0,value:_})}}function o(d,_){d instanceof String&&(d+="");var E=0,I=!1,F={next:function(){if(!I&&E<d.length){var Q=E++;return{value:_(Q,d[Q]),done:!1}}return I=!0,{done:!0,value:void 0}}};return F[Symbol.iterator]=function(){return F},F}a("Array.prototype.values",function(d){return d||function(){return o(this,function(_,E){return E})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var u=u||{},h=this||self;function f(d){var _=typeof d;return _=_!="object"?_:d?Array.isArray(d)?"array":_:"null",_=="array"||_=="object"&&typeof d.length=="number"}function p(d){var _=typeof d;return _=="object"&&d!=null||_=="function"}function y(d,_,E){return d.call.apply(d.bind,arguments)}function v(d,_,E){if(!d)throw Error();if(2<arguments.length){var I=Array.prototype.slice.call(arguments,2);return function(){var F=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(F,I),d.apply(_,F)}}return function(){return d.apply(_,arguments)}}function w(d,_,E){return w=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?y:v,w.apply(null,arguments)}function S(d,_){var E=Array.prototype.slice.call(arguments,1);return function(){var I=E.slice();return I.push.apply(I,arguments),d.apply(this,I)}}function P(d,_){function E(){}E.prototype=_.prototype,d.aa=_.prototype,d.prototype=new E,d.prototype.constructor=d,d.Qb=function(I,F,Q){for(var ue=Array(arguments.length-2),je=2;je<arguments.length;je++)ue[je-2]=arguments[je];return _.prototype[F].apply(I,ue)}}function U(d){const _=d.length;if(0<_){const E=Array(_);for(let I=0;I<_;I++)E[I]=d[I];return E}return[]}function L(d,_){for(let E=1;E<arguments.length;E++){const I=arguments[E];if(f(I)){const F=d.length||0,Q=I.length||0;d.length=F+Q;for(let ue=0;ue<Q;ue++)d[F+ue]=I[ue]}else d.push(I)}}class H{constructor(_,E){this.i=_,this.j=E,this.h=0,this.g=null}get(){let _;return 0<this.h?(this.h--,_=this.g,this.g=_.next,_.next=null):_=this.i(),_}}function Y(d){return/^[\s\xa0]*$/.test(d)}function $(){var d=h.navigator;return d&&(d=d.userAgent)?d:""}function oe(d){return oe[" "](d),d}oe[" "]=function(){};var ae=$().indexOf("Gecko")!=-1&&!($().toLowerCase().indexOf("webkit")!=-1&&$().indexOf("Edge")==-1)&&!($().indexOf("Trident")!=-1||$().indexOf("MSIE")!=-1)&&$().indexOf("Edge")==-1;function le(d,_,E){for(const I in d)_.call(E,d[I],I,d)}function D(d,_){for(const E in d)_.call(void 0,d[E],E,d)}function R(d){const _={};for(const E in d)_[E]=d[E];return _}const A="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function x(d,_){let E,I;for(let F=1;F<arguments.length;F++){I=arguments[F];for(E in I)d[E]=I[E];for(let Q=0;Q<A.length;Q++)E=A[Q],Object.prototype.hasOwnProperty.call(I,E)&&(d[E]=I[E])}}function V(d){var _=1;d=d.split(":");const E=[];for(;0<_&&d.length;)E.push(d.shift()),_--;return d.length&&E.push(d.join(":")),E}function z(d){h.setTimeout(()=>{throw d},0)}function N(){var d=Oe;let _=null;return d.g&&(_=d.g,d.g=d.g.next,d.g||(d.h=null),_.next=null),_}class Nt{constructor(){this.h=this.g=null}add(_,E){const I=It.get();I.set(_,E),this.h?this.h.next=I:this.g=I,this.h=I}}var It=new H(()=>new he,d=>d.reset());class he{constructor(){this.next=this.g=this.h=null}set(_,E){this.h=_,this.g=E,this.next=null}reset(){this.next=this.g=this.h=null}}let Ie,we=!1,Oe=new Nt,O=()=>{const d=h.Promise.resolve(void 0);Ie=()=>{d.then(ie)}};var ie=()=>{for(var d;d=N();){try{d.h.call(d.g)}catch(E){z(E)}var _=It;_.j(d),100>_.h&&(_.h++,d.next=_.g,_.g=d)}we=!1};function _e(){this.s=this.s,this.C=this.C}_e.prototype.s=!1,_e.prototype.ma=function(){this.s||(this.s=!0,this.N())},_e.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function me(d,_){this.type=d,this.g=this.target=_,this.defaultPrevented=!1}me.prototype.h=function(){this.defaultPrevented=!0};var fe=function(){if(!h.addEventListener||!Object.defineProperty)return!1;var d=!1,_=Object.defineProperty({},"passive",{get:function(){d=!0}});try{const E=()=>{};h.addEventListener("test",E,_),h.removeEventListener("test",E,_)}catch{}return d}();function De(d,_){if(me.call(this,d?d.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,d){var E=this.type=d.type,I=d.changedTouches&&d.changedTouches.length?d.changedTouches[0]:null;if(this.target=d.target||d.srcElement,this.g=_,_=d.relatedTarget){if(ae){e:{try{oe(_.nodeName);var F=!0;break e}catch{}F=!1}F||(_=null)}}else E=="mouseover"?_=d.fromElement:E=="mouseout"&&(_=d.toElement);this.relatedTarget=_,I?(this.clientX=I.clientX!==void 0?I.clientX:I.pageX,this.clientY=I.clientY!==void 0?I.clientY:I.pageY,this.screenX=I.screenX||0,this.screenY=I.screenY||0):(this.clientX=d.clientX!==void 0?d.clientX:d.pageX,this.clientY=d.clientY!==void 0?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0),this.button=d.button,this.key=d.key||"",this.ctrlKey=d.ctrlKey,this.altKey=d.altKey,this.shiftKey=d.shiftKey,this.metaKey=d.metaKey,this.pointerId=d.pointerId||0,this.pointerType=typeof d.pointerType=="string"?d.pointerType:Ce[d.pointerType]||"",this.state=d.state,this.i=d,d.defaultPrevented&&De.aa.h.call(this)}}P(De,me);var Ce={2:"touch",3:"pen",4:"mouse"};De.prototype.h=function(){De.aa.h.call(this);var d=this.i;d.preventDefault?d.preventDefault():d.returnValue=!1};var ut="closure_listenable_"+(1e6*Math.random()|0),Me=0;function Ze(d,_,E,I,F){this.listener=d,this.proxy=null,this.src=_,this.type=E,this.capture=!!I,this.ha=F,this.key=++Me,this.da=this.fa=!1}function Ke(d){d.da=!0,d.listener=null,d.proxy=null,d.src=null,d.ha=null}function Ut(d){this.src=d,this.g={},this.h=0}Ut.prototype.add=function(d,_,E,I,F){var Q=d.toString();d=this.g[Q],d||(d=this.g[Q]=[],this.h++);var ue=rr(d,_,I,F);return-1<ue?(_=d[ue],E||(_.fa=!1)):(_=new Ze(_,this.src,Q,!!I,F),_.fa=E,d.push(_)),_};function Jt(d,_){var E=_.type;if(E in d.g){var I=d.g[E],F=Array.prototype.indexOf.call(I,_,void 0),Q;(Q=0<=F)&&Array.prototype.splice.call(I,F,1),Q&&(Ke(_),d.g[E].length==0&&(delete d.g[E],d.h--))}}function rr(d,_,E,I){for(var F=0;F<d.length;++F){var Q=d[F];if(!Q.da&&Q.listener==_&&Q.capture==!!E&&Q.ha==I)return F}return-1}var ls="closure_lm_"+(1e6*Math.random()|0),us={};function _i(d,_,E,I,F){if(Array.isArray(_)){for(var Q=0;Q<_.length;Q++)_i(d,_[Q],E,I,F);return null}return E=Dd(E),d&&d[ut]?d.K(_,E,p(I)?!!I.capture:!1,F):$u(d,_,E,!1,I,F)}function $u(d,_,E,I,F,Q){if(!_)throw Error("Invalid event type");var ue=p(F)?!!F.capture:!!F,je=Ku(d);if(je||(d[ls]=je=new Ut(d)),E=je.add(_,E,I,ue,Q),E.proxy)return E;if(I=jo(),E.proxy=I,I.src=d,I.listener=E,d.addEventListener)fe||(F=ue),F===void 0&&(F=!1),d.addEventListener(_.toString(),I,F);else if(d.attachEvent)d.attachEvent(Go(_.toString()),I);else if(d.addListener&&d.removeListener)d.addListener(I);else throw Error("addEventListener and attachEvent are unavailable.");return E}function jo(){function d(E){return _.call(d.src,d.listener,E)}const _=tg;return d}function Ho(d,_,E,I,F){if(Array.isArray(_))for(var Q=0;Q<_.length;Q++)Ho(d,_[Q],E,I,F);else I=p(I)?!!I.capture:!!I,E=Dd(E),d&&d[ut]?(d=d.i,_=String(_).toString(),_ in d.g&&(Q=d.g[_],E=rr(Q,E,I,F),-1<E&&(Ke(Q[E]),Array.prototype.splice.call(Q,E,1),Q.length==0&&(delete d.g[_],d.h--)))):d&&(d=Ku(d))&&(_=d.g[_.toString()],d=-1,_&&(d=rr(_,E,I,F)),(E=-1<d?_[d]:null)&&Sa(E))}function Sa(d){if(typeof d!="number"&&d&&!d.da){var _=d.src;if(_&&_[ut])Jt(_.i,d);else{var E=d.type,I=d.proxy;_.removeEventListener?_.removeEventListener(E,I,d.capture):_.detachEvent?_.detachEvent(Go(E),I):_.addListener&&_.removeListener&&_.removeListener(I),(E=Ku(_))?(Jt(E,d),E.h==0&&(E.src=null,_[ls]=null)):Ke(d)}}}function Go(d){return d in us?us[d]:us[d]="on"+d}function tg(d,_){if(d.da)d=!0;else{_=new De(_,this);var E=d.listener,I=d.ha||d.src;d.fa&&Sa(d),d=E.call(I,_)}return d}function Ku(d){return d=d[ls],d instanceof Ut?d:null}var Ln="__closure_events_fn_"+(1e9*Math.random()>>>0);function Dd(d){return typeof d=="function"?d:(d[Ln]||(d[Ln]=function(_){return d.handleEvent(_)}),d[Ln])}function Gt(){_e.call(this),this.i=new Ut(this),this.M=this,this.F=null}P(Gt,_e),Gt.prototype[ut]=!0,Gt.prototype.removeEventListener=function(d,_,E,I){Ho(this,d,_,E,I)};function en(d,_){var E,I=d.F;if(I)for(E=[];I;I=I.F)E.push(I);if(d=d.M,I=_.type||_,typeof _=="string")_=new me(_,d);else if(_ instanceof me)_.target=_.target||d;else{var F=_;_=new me(I,d),x(_,F)}if(F=!0,E)for(var Q=E.length-1;0<=Q;Q--){var ue=_.g=E[Q];F=yi(ue,I,!0,_)&&F}if(ue=_.g=d,F=yi(ue,I,!0,_)&&F,F=yi(ue,I,!1,_)&&F,E)for(Q=0;Q<E.length;Q++)ue=_.g=E[Q],F=yi(ue,I,!1,_)&&F}Gt.prototype.N=function(){if(Gt.aa.N.call(this),this.i){var d=this.i,_;for(_ in d.g){for(var E=d.g[_],I=0;I<E.length;I++)Ke(E[I]);delete d.g[_],d.h--}}this.F=null},Gt.prototype.K=function(d,_,E,I){return this.i.add(String(d),_,!1,E,I)},Gt.prototype.L=function(d,_,E,I){return this.i.add(String(d),_,!0,E,I)};function yi(d,_,E,I){if(_=d.i.g[String(_)],!_)return!0;_=_.concat();for(var F=!0,Q=0;Q<_.length;++Q){var ue=_[Q];if(ue&&!ue.da&&ue.capture==E){var je=ue.listener,Kt=ue.ha||ue.src;ue.fa&&Jt(d.i,ue),F=je.call(Kt,I)!==!1&&F}}return F&&!I.defaultPrevented}function Pd(d,_,E){if(typeof d=="function")E&&(d=w(d,E));else if(d&&typeof d.handleEvent=="function")d=w(d.handleEvent,d);else throw Error("Invalid listener argument");return 2147483647<Number(_)?-1:h.setTimeout(d,_||0)}function Qu(d){d.g=Pd(()=>{d.g=null,d.i&&(d.i=!1,Qu(d))},d.l);const _=d.h;d.h=null,d.m.apply(null,_)}class ng extends _e{constructor(_,E){super(),this.m=_,this.l=E,this.h=null,this.i=!1,this.g=null}j(_){this.h=arguments,this.g?this.i=!0:Qu(this)}N(){super.N(),this.g&&(h.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ra(d){_e.call(this),this.h=d,this.g={}}P(Ra,_e);var cs=[];function En(d){le(d.g,function(_,E){this.g.hasOwnProperty(E)&&Sa(_)},d),d.g={}}Ra.prototype.N=function(){Ra.aa.N.call(this),En(this)},Ra.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Wu=h.JSON.stringify,Vr=h.JSON.parse,Rn=class{stringify(d){return h.JSON.stringify(d,void 0)}parse(d){return h.JSON.parse(d,void 0)}};function Yu(){}Yu.prototype.h=null;function xd(d){return d.h||(d.h=d.i())}function Nd(){}var Mr={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function hs(){me.call(this,"d")}P(hs,me);function Ir(){me.call(this,"c")}P(Ir,me);var ir={},ds=null;function $o(){return ds=ds||new Gt}ir.La="serverreachability";function Xu(d){me.call(this,ir.La,d)}P(Xu,me);function fs(d){const _=$o();en(_,new Xu(_))}ir.STAT_EVENT="statevent";function Ko(d,_){me.call(this,ir.STAT_EVENT,d),this.stat=_}P(Ko,me);function Ot(d){const _=$o();en(_,new Ko(_,d))}ir.Ma="timingevent";function Od(d,_){me.call(this,ir.Ma,d),this.size=_}P(Od,me);function ms(d,_){if(typeof d!="function")throw Error("Fn must not be null and must be a function");return h.setTimeout(function(){d()},_)}function ps(){this.g=!0}ps.prototype.xa=function(){this.g=!1};function kd(d,_,E,I,F,Q){d.info(function(){if(d.g)if(Q)for(var ue="",je=Q.split("&"),Kt=0;Kt<je.length;Kt++){var He=je[Kt].split("=");if(1<He.length){var rn=He[0];He=He[1];var Qt=rn.split("_");ue=2<=Qt.length&&Qt[1]=="type"?ue+(rn+"="+He+"&"):ue+(rn+"=redacted&")}}else ue=null;else ue=Q;return"XMLHTTP REQ ("+I+") [attempt "+F+"]: "+_+`
`+E+`
`+ue})}function Vd(d,_,E,I,F,Q,ue){d.info(function(){return"XMLHTTP RESP ("+I+") [ attempt "+F+"]: "+_+`
`+E+`
`+Q+" "+ue})}function gs(d,_,E,I){d.info(function(){return"XMLHTTP TEXT ("+_+"): "+tn(d,E)+(I?" "+I:"")})}function Lr(d,_){d.info(function(){return"TIMEOUT: "+_})}ps.prototype.info=function(){};function tn(d,_){if(!d.g)return _;if(!_)return null;try{var E=JSON.parse(_);if(E){for(d=0;d<E.length;d++)if(Array.isArray(E[d])){var I=E[d];if(!(2>I.length)){var F=I[1];if(Array.isArray(F)&&!(1>F.length)){var Q=F[0];if(Q!="noop"&&Q!="stop"&&Q!="close")for(var ue=1;ue<F.length;ue++)F[ue]=""}}}}return Wu(E)}catch{return _}}var $t={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},vi={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Ca;function Qo(){}P(Qo,Yu),Qo.prototype.g=function(){return new XMLHttpRequest},Qo.prototype.i=function(){return{}},Ca=new Qo;function Ur(d,_,E,I){this.j=d,this.i=_,this.l=E,this.R=I||1,this.U=new Ra(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Zu}function Zu(){this.i=null,this.g="",this.h=!1}var _s={},Da={};function Ar(d,_,E){d.L=1,d.v=Na(At(_)),d.m=E,d.P=!0,Ei(d,null)}function Ei(d,_){d.F=Date.now(),_t(d),d.A=At(d.v);var E=d.A,I=d.R;Array.isArray(I)||(I=[String(I)]),bi(E.i,"t",I),d.C=0,E=d.j.J,d.h=new Zu,d.g=Wd(d.j,E?_:null,!d.m),0<d.O&&(d.M=new ng(w(d.Y,d,d.g),d.O)),_=d.U,E=d.g,I=d.ca;var F="readystatechange";Array.isArray(F)||(F&&(cs[0]=F.toString()),F=cs);for(var Q=0;Q<F.length;Q++){var ue=_i(E,F[Q],I||_.handleEvent,!1,_.h||_);if(!ue)break;_.g[ue.key]=ue}_=d.H?R(d.H):{},d.m?(d.u||(d.u="POST"),_["Content-Type"]="application/x-www-form-urlencoded",d.g.ea(d.A,d.u,d.m,_)):(d.u="GET",d.g.ea(d.A,d.u,null,_)),fs(),kd(d.i,d.u,d.A,d.l,d.R,d.m)}Ur.prototype.ca=function(d){d=d.target;const _=this.M;_&&ur(d)==3?_.j():this.Y(d)},Ur.prototype.Y=function(d){try{if(d==this.g)e:{const Qt=ur(this.g);var _=this.g.Ba();const Ri=this.g.Z();if(!(3>Qt)&&(Qt!=3||this.g&&(this.h.h||this.g.oa()||Fd(this.g)))){this.J||Qt!=4||_==7||(_==8||0>=Ri?fs(3):fs(2)),Wo(this);var E=this.g.Z();this.X=E;t:if(ys(this)){var I=Fd(this.g);d="";var F=I.length,Q=ur(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Un(this),Gn(this);var ue="";break t}this.h.i=new h.TextDecoder}for(_=0;_<F;_++)this.h.h=!0,d+=this.h.i.decode(I[_],{stream:!(Q&&_==F-1)});I.length=0,this.h.g+=d,this.C=0,ue=this.h.g}else ue=this.g.oa();if(this.o=E==200,Vd(this.i,this.u,this.A,this.l,this.R,Qt,E),this.o){if(this.T&&!this.K){t:{if(this.g){var je,Kt=this.g;if((je=Kt.g?Kt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Y(je)){var He=je;break t}}He=null}if(E=He)gs(this.i,this.l,E,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,$n(this,E);else{this.o=!1,this.s=3,Ot(12),Un(this),Gn(this);break e}}if(this.P){E=!0;let dn;for(;!this.J&&this.C<ue.length;)if(dn=vs(this,ue),dn==Da){Qt==4&&(this.s=4,Ot(14),E=!1),gs(this.i,this.l,null,"[Incomplete Response]");break}else if(dn==_s){this.s=4,Ot(15),gs(this.i,this.l,ue,"[Invalid Chunk]"),E=!1;break}else gs(this.i,this.l,dn,null),$n(this,dn);if(ys(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Qt!=4||ue.length!=0||this.h.h||(this.s=1,Ot(16),E=!1),this.o=this.o&&E,!E)gs(this.i,this.l,ue,"[Invalid Chunked Response]"),Un(this),Gn(this);else if(0<ue.length&&!this.W){this.W=!0;var rn=this.j;rn.g==this&&rn.ba&&!rn.M&&(rn.j.info("Great, no buffering proxy detected. Bytes received: "+ue.length),Ba(rn),rn.M=!0,Ot(11))}}else gs(this.i,this.l,ue,null),$n(this,ue);Qt==4&&Un(this),this.o&&!this.J&&(Qt==4?$d(this.j,this):(this.o=!1,_t(this)))}else lg(this.g),E==400&&0<ue.indexOf("Unknown SID")?(this.s=3,Ot(12)):(this.s=0,Ot(13)),Un(this),Gn(this)}}}catch{}finally{}};function ys(d){return d.g?d.u=="GET"&&d.L!=2&&d.j.Ca:!1}function vs(d,_){var E=d.C,I=_.indexOf(`
`,E);return I==-1?Da:(E=Number(_.substring(E,I)),isNaN(E)?_s:(I+=1,I+E>_.length?Da:(_=_.slice(I,I+E),d.C=I+E,_)))}Ur.prototype.cancel=function(){this.J=!0,Un(this)};function _t(d){d.S=Date.now()+d.I,Ju(d,d.I)}function Ju(d,_){if(d.B!=null)throw Error("WatchDog timer not null");d.B=ms(w(d.ba,d),_)}function Wo(d){d.B&&(h.clearTimeout(d.B),d.B=null)}Ur.prototype.ba=function(){this.B=null;const d=Date.now();0<=d-this.S?(Lr(this.i,this.A),this.L!=2&&(fs(),Ot(17)),Un(this),this.s=2,Gn(this)):Ju(this,this.S-d)};function Gn(d){d.j.G==0||d.J||$d(d.j,d)}function Un(d){Wo(d);var _=d.M;_&&typeof _.ma=="function"&&_.ma(),d.M=null,En(d.U),d.g&&(_=d.g,d.g=null,_.abort(),_.ma())}function $n(d,_){try{var E=d.j;if(E.G!=0&&(E.g==d||Es(E.h,d))){if(!d.K&&Es(E.h,d)&&E.G==3){try{var I=E.Da.g.parse(_)}catch{I=null}if(Array.isArray(I)&&I.length==3){var F=I;if(F[0]==0){e:if(!E.u){if(E.g)if(E.g.F+3e3<d.F)sl(E),rl(E);else break e;cc(E),Ot(18)}}else E.za=F[1],0<E.za-E.T&&37500>F[2]&&E.F&&E.v==0&&!E.C&&(E.C=ms(w(E.Za,E),6e3));if(1>=Md(E.h)&&E.ca){try{E.ca()}catch{}E.ca=void 0}}else Si(E,11)}else if((d.K||E.g==d)&&sl(E),!Y(_))for(F=E.Da.g.parse(_),_=0;_<F.length;_++){let He=F[_];if(E.T=He[0],He=He[1],E.G==2)if(He[0]=="c"){E.K=He[1],E.ia=He[2];const rn=He[3];rn!=null&&(E.la=rn,E.j.info("VER="+E.la));const Qt=He[4];Qt!=null&&(E.Aa=Qt,E.j.info("SVER="+E.Aa));const Ri=He[5];Ri!=null&&typeof Ri=="number"&&0<Ri&&(I=1.5*Ri,E.L=I,E.j.info("backChannelRequestTimeoutMs_="+I)),I=E;const dn=d.g;if(dn){const Gr=dn.g?dn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Gr){var Q=I.h;Q.g||Gr.indexOf("spdy")==-1&&Gr.indexOf("quic")==-1&&Gr.indexOf("h2")==-1||(Q.j=Q.l,Q.g=new Set,Q.h&&(Ts(Q,Q.h),Q.h=null))}if(I.D){const dc=dn.g?dn.g.getResponseHeader("X-HTTP-Session-Id"):null;dc&&(I.ya=dc,Qe(I.I,I.D,dc))}}E.G=3,E.l&&E.l.ua(),E.ba&&(E.R=Date.now()-d.F,E.j.info("Handshake RTT: "+E.R+"ms")),I=E;var ue=d;if(I.qa=Qd(I,I.J?I.ia:null,I.W),ue.K){sr(I.h,ue);var je=ue,Kt=I.L;Kt&&(je.I=Kt),je.B&&(Wo(je),_t(je)),I.g=ue}else Hd(I);0<E.i.length&&il(E)}else He[0]!="stop"&&He[0]!="close"||Si(E,7);else E.G==3&&(He[0]=="stop"||He[0]=="close"?He[0]=="stop"?Si(E,7):lc(E):He[0]!="noop"&&E.l&&E.l.ta(He),E.v=0)}}fs(4)}catch{}}var rg=class{constructor(d,_){this.g=d,this.map=_}};function ec(d){this.l=d||10,h.PerformanceNavigationTiming?(d=h.performance.getEntriesByType("navigation"),d=0<d.length&&(d[0].nextHopProtocol=="hq"||d[0].nextHopProtocol=="h2")):d=!!(h.chrome&&h.chrome.loadTimes&&h.chrome.loadTimes()&&h.chrome.loadTimes().wasFetchedViaSpdy),this.j=d?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function tc(d){return d.h?!0:d.g?d.g.size>=d.j:!1}function Md(d){return d.h?1:d.g?d.g.size:0}function Es(d,_){return d.h?d.h==_:d.g?d.g.has(_):!1}function Ts(d,_){d.g?d.g.add(_):d.h=_}function sr(d,_){d.h&&d.h==_?d.h=null:d.g&&d.g.has(_)&&d.g.delete(_)}ec.prototype.cancel=function(){if(this.i=Cn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const d of this.g.values())d.cancel();this.g.clear()}};function Cn(d){if(d.h!=null)return d.i.concat(d.h.D);if(d.g!=null&&d.g.size!==0){let _=d.i;for(const E of d.g.values())_=_.concat(E.D);return _}return U(d.i)}function Ld(d){if(d.V&&typeof d.V=="function")return d.V();if(typeof Map<"u"&&d instanceof Map||typeof Set<"u"&&d instanceof Set)return Array.from(d.values());if(typeof d=="string")return d.split("");if(f(d)){for(var _=[],E=d.length,I=0;I<E;I++)_.push(d[I]);return _}_=[],E=0;for(I in d)_[E++]=d[I];return _}function ig(d){if(d.na&&typeof d.na=="function")return d.na();if(!d.V||typeof d.V!="function"){if(typeof Map<"u"&&d instanceof Map)return Array.from(d.keys());if(!(typeof Set<"u"&&d instanceof Set)){if(f(d)||typeof d=="string"){var _=[];d=d.length;for(var E=0;E<d;E++)_.push(E);return _}_=[],E=0;for(const I in d)_[E++]=I;return _}}}function Pa(d,_){if(d.forEach&&typeof d.forEach=="function")d.forEach(_,void 0);else if(f(d)||typeof d=="string")Array.prototype.forEach.call(d,_,void 0);else for(var E=ig(d),I=Ld(d),F=I.length,Q=0;Q<F;Q++)_.call(void 0,I[Q],E&&E[Q],d)}var nc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Yo(d,_){if(d){d=d.split("&");for(var E=0;E<d.length;E++){var I=d[E].indexOf("="),F=null;if(0<=I){var Q=d[E].substring(0,I);F=d[E].substring(I+1)}else Q=d[E];_(Q,F?decodeURIComponent(F.replace(/\+/g," ")):"")}}}function Ti(d){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,d instanceof Ti){this.h=d.h,ws(this,d.j),this.o=d.o,this.g=d.g,xa(this,d.s),this.l=d.l;var _=d.i,E=new Br;E.i=_.i,_.g&&(E.g=new Map(_.g),E.h=_.h),Xo(this,E),this.m=d.m}else d&&(_=String(d).match(nc))?(this.h=!1,ws(this,_[1]||"",!0),this.o=bs(_[2]||""),this.g=bs(_[3]||"",!0),xa(this,_[4]),this.l=bs(_[5]||"",!0),Xo(this,_[6]||"",!0),this.m=bs(_[7]||"")):(this.h=!1,this.i=new Br(null,this.h))}Ti.prototype.toString=function(){var d=[],_=this.j;_&&d.push(ar(_,rc,!0),":");var E=this.g;return(E||_=="file")&&(d.push("//"),(_=this.o)&&d.push(ar(_,rc,!0),"@"),d.push(encodeURIComponent(String(E)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),E=this.s,E!=null&&d.push(":",String(E))),(E=this.l)&&(this.g&&E.charAt(0)!="/"&&d.push("/"),d.push(ar(E,E.charAt(0)=="/"?ic:Ud,!0))),(E=this.i.toString())&&d.push("?",E),(E=this.m)&&d.push("#",ar(E,og)),d.join("")};function At(d){return new Ti(d)}function ws(d,_,E){d.j=E?bs(_,!0):_,d.j&&(d.j=d.j.replace(/:$/,""))}function xa(d,_){if(_){if(_=Number(_),isNaN(_)||0>_)throw Error("Bad port number "+_);d.s=_}else d.s=null}function Xo(d,_,E){_ instanceof Br?(d.i=_,sc(d.i,d.h)):(E||(_=ar(_,ag)),d.i=new Br(_,d.h))}function Qe(d,_,E){d.i.set(_,E)}function Na(d){return Qe(d,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),d}function bs(d,_){return d?_?decodeURI(d.replace(/%25/g,"%2525")):decodeURIComponent(d):""}function ar(d,_,E){return typeof d=="string"?(d=encodeURI(d).replace(_,sg),E&&(d=d.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d):null}function sg(d){return d=d.charCodeAt(0),"%"+(d>>4&15).toString(16)+(d&15).toString(16)}var rc=/[#\/\?@]/g,Ud=/[#\?:]/g,ic=/[#\?]/g,ag=/[#\?@]/g,og=/#/g;function Br(d,_){this.h=this.g=null,this.i=d||null,this.j=!!_}function or(d){d.g||(d.g=new Map,d.h=0,d.i&&Yo(d.i,function(_,E){d.add(decodeURIComponent(_.replace(/\+/g," ")),E)}))}n=Br.prototype,n.add=function(d,_){or(this),this.i=null,d=Ii(this,d);var E=this.g.get(d);return E||this.g.set(d,E=[]),E.push(_),this.h+=1,this};function Zo(d,_){or(d),_=Ii(d,_),d.g.has(_)&&(d.i=null,d.h-=d.g.get(_).length,d.g.delete(_))}function wi(d,_){return or(d),_=Ii(d,_),d.g.has(_)}n.forEach=function(d,_){or(this),this.g.forEach(function(E,I){E.forEach(function(F){d.call(_,F,I,this)},this)},this)},n.na=function(){or(this);const d=Array.from(this.g.values()),_=Array.from(this.g.keys()),E=[];for(let I=0;I<_.length;I++){const F=d[I];for(let Q=0;Q<F.length;Q++)E.push(_[I])}return E},n.V=function(d){or(this);let _=[];if(typeof d=="string")wi(this,d)&&(_=_.concat(this.g.get(Ii(this,d))));else{d=Array.from(this.g.values());for(let E=0;E<d.length;E++)_=_.concat(d[E])}return _},n.set=function(d,_){return or(this),this.i=null,d=Ii(this,d),wi(this,d)&&(this.h-=this.g.get(d).length),this.g.set(d,[_]),this.h+=1,this},n.get=function(d,_){return d?(d=this.V(d),0<d.length?String(d[0]):_):_};function bi(d,_,E){Zo(d,_),0<E.length&&(d.i=null,d.g.set(Ii(d,_),U(E)),d.h+=E.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const d=[],_=Array.from(this.g.keys());for(var E=0;E<_.length;E++){var I=_[E];const Q=encodeURIComponent(String(I)),ue=this.V(I);for(I=0;I<ue.length;I++){var F=Q;ue[I]!==""&&(F+="="+encodeURIComponent(String(ue[I]))),d.push(F)}}return this.i=d.join("&")};function Ii(d,_){return _=String(_),d.j&&(_=_.toLowerCase()),_}function sc(d,_){_&&!d.j&&(or(d),d.i=null,d.g.forEach(function(E,I){var F=I.toLowerCase();I!=F&&(Zo(this,I),bi(this,F,E))},d)),d.j=_}function Bd(d,_){const E=new ps;if(h.Image){const I=new Image;I.onload=S(lr,E,"TestLoadImage: loaded",!0,_,I),I.onerror=S(lr,E,"TestLoadImage: error",!1,_,I),I.onabort=S(lr,E,"TestLoadImage: abort",!1,_,I),I.ontimeout=S(lr,E,"TestLoadImage: timeout",!1,_,I),h.setTimeout(function(){I.ontimeout&&I.ontimeout()},1e4),I.src=d}else _(!1)}function Oa(d,_){const E=new ps,I=new AbortController,F=setTimeout(()=>{I.abort(),lr(E,"TestPingServer: timeout",!1,_)},1e4);fetch(d,{signal:I.signal}).then(Q=>{clearTimeout(F),Q.ok?lr(E,"TestPingServer: ok",!0,_):lr(E,"TestPingServer: server error",!1,_)}).catch(()=>{clearTimeout(F),lr(E,"TestPingServer: error",!1,_)})}function lr(d,_,E,I,F){try{F&&(F.onload=null,F.onerror=null,F.onabort=null,F.ontimeout=null),I(E)}catch{}}function ka(){this.g=new Rn}function zr(d,_,E){const I=E||"";try{Pa(d,function(F,Q){let ue=F;p(F)&&(ue=Wu(F)),_.push(I+Q+"="+encodeURIComponent(ue))})}catch(F){throw _.push(I+"type="+encodeURIComponent("_badmap")),F}}function Is(d){this.l=d.Ub||null,this.j=d.eb||!1}P(Is,Yu),Is.prototype.g=function(){return new Ai(this.l,this.j)},Is.prototype.i=function(d){return function(){return d}}({});function Ai(d,_){Gt.call(this),this.D=d,this.o=_,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}P(Ai,Gt),n=Ai.prototype,n.open=function(d,_){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=d,this.A=_,this.readyState=1,qr(this)},n.send=function(d){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const _={headers:this.u,method:this.B,credentials:this.m,cache:void 0};d&&(_.body=d),(this.D||h).fetch(new Request(this.A,_)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Fr(this)),this.readyState=0},n.Sa=function(d){if(this.g&&(this.l=d,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=d.headers,this.readyState=2,qr(this)),this.g&&(this.readyState=3,qr(this),this.g)))if(this.responseType==="arraybuffer")d.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof h.ReadableStream<"u"&&"body"in d){if(this.j=d.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;ac(this)}else d.text().then(this.Ra.bind(this),this.ga.bind(this))};function ac(d){d.j.read().then(d.Pa.bind(d)).catch(d.ga.bind(d))}n.Pa=function(d){if(this.g){if(this.o&&d.value)this.response.push(d.value);else if(!this.o){var _=d.value?d.value:new Uint8Array(0);(_=this.v.decode(_,{stream:!d.done}))&&(this.response=this.responseText+=_)}d.done?Fr(this):qr(this),this.readyState==3&&ac(this)}},n.Ra=function(d){this.g&&(this.response=this.responseText=d,Fr(this))},n.Qa=function(d){this.g&&(this.response=d,Fr(this))},n.ga=function(){this.g&&Fr(this)};function Fr(d){d.readyState=4,d.l=null,d.j=null,d.v=null,qr(d)}n.setRequestHeader=function(d,_){this.u.append(d,_)},n.getResponseHeader=function(d){return this.h&&this.h.get(d.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const d=[],_=this.h.entries();for(var E=_.next();!E.done;)E=E.value,d.push(E[0]+": "+E[1]),E=_.next();return d.join(`\r
`)};function qr(d){d.onreadystatechange&&d.onreadystatechange.call(d)}Object.defineProperty(Ai.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(d){this.m=d?"include":"same-origin"}});function oc(d){let _="";return le(d,function(E,I){_+=I,_+=":",_+=E,_+=`\r
`}),_}function nn(d,_,E){e:{for(I in E){var I=!1;break e}I=!0}I||(E=oc(E),typeof d=="string"?E!=null&&encodeURIComponent(String(E)):Qe(d,_,E))}function Je(d){Gt.call(this),this.headers=new Map,this.o=d||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}P(Je,Gt);var Jo=/^https?$/i,Va=["POST","PUT"];n=Je.prototype,n.Ha=function(d){this.J=d},n.ea=function(d,_,E,I){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+d);_=_?_.toUpperCase():"GET",this.D=d,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Ca.g(),this.v=this.o?xd(this.o):xd(Ca),this.g.onreadystatechange=w(this.Ea,this);try{this.B=!0,this.g.open(_,String(d),!0),this.B=!1}catch(Q){zd(this,Q);return}if(d=E||"",E=new Map(this.headers),I)if(Object.getPrototypeOf(I)===Object.prototype)for(var F in I)E.set(F,I[F]);else if(typeof I.keys=="function"&&typeof I.get=="function")for(const Q of I.keys())E.set(Q,I.get(Q));else throw Error("Unknown input type for opt_headers: "+String(I));I=Array.from(E.keys()).find(Q=>Q.toLowerCase()=="content-type"),F=h.FormData&&d instanceof h.FormData,!(0<=Array.prototype.indexOf.call(Va,_,void 0))||I||F||E.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[Q,ue]of E)this.g.setRequestHeader(Q,ue);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ma(this),this.u=!0,this.g.send(d),this.u=!1}catch(Q){zd(this,Q)}};function zd(d,_){d.h=!1,d.g&&(d.j=!0,d.g.abort(),d.j=!1),d.l=_,d.m=5,el(d),jr(d)}function el(d){d.A||(d.A=!0,en(d,"complete"),en(d,"error"))}n.abort=function(d){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=d||7,en(this,"complete"),en(this,"abort"),jr(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),jr(this,!0)),Je.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?tl(this):this.bb())},n.bb=function(){tl(this)};function tl(d){if(d.h&&typeof u<"u"&&(!d.v[1]||ur(d)!=4||d.Z()!=2)){if(d.u&&ur(d)==4)Pd(d.Ea,0,d);else if(en(d,"readystatechange"),ur(d)==4){d.h=!1;try{const ue=d.Z();e:switch(ue){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var _=!0;break e;default:_=!1}var E;if(!(E=_)){var I;if(I=ue===0){var F=String(d.D).match(nc)[1]||null;!F&&h.self&&h.self.location&&(F=h.self.location.protocol.slice(0,-1)),I=!Jo.test(F?F.toLowerCase():"")}E=I}if(E)en(d,"complete"),en(d,"success");else{d.m=6;try{var Q=2<ur(d)?d.g.statusText:""}catch{Q=""}d.l=Q+" ["+d.Z()+"]",el(d)}}finally{jr(d)}}}}function jr(d,_){if(d.g){Ma(d);const E=d.g,I=d.v[0]?()=>{}:null;d.g=null,d.v=null,_||en(d,"ready");try{E.onreadystatechange=I}catch{}}}function Ma(d){d.I&&(h.clearTimeout(d.I),d.I=null)}n.isActive=function(){return!!this.g};function ur(d){return d.g?d.g.readyState:0}n.Z=function(){try{return 2<ur(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(d){if(this.g){var _=this.g.responseText;return d&&_.indexOf(d)==0&&(_=_.substring(d.length)),Vr(_)}};function Fd(d){try{if(!d.g)return null;if("response"in d.g)return d.g.response;switch(d.H){case"":case"text":return d.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in d.g)return d.g.mozResponseArrayBuffer}return null}catch{return null}}function lg(d){const _={};d=(d.g&&2<=ur(d)&&d.g.getAllResponseHeaders()||"").split(`\r
`);for(let I=0;I<d.length;I++){if(Y(d[I]))continue;var E=V(d[I]);const F=E[0];if(E=E[1],typeof E!="string")continue;E=E.trim();const Q=_[F]||[];_[F]=Q,Q.push(E)}D(_,function(I){return I.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function La(d,_,E){return E&&E.internalChannelParams&&E.internalChannelParams[d]||_}function nl(d){this.Aa=0,this.i=[],this.j=new ps,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=La("failFast",!1,d),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=La("baseRetryDelayMs",5e3,d),this.cb=La("retryDelaySeedMs",1e4,d),this.Wa=La("forwardChannelMaxRetries",2,d),this.wa=La("forwardChannelRequestTimeoutMs",2e4,d),this.pa=d&&d.xmlHttpFactory||void 0,this.Xa=d&&d.Tb||void 0,this.Ca=d&&d.useFetchStreams||!1,this.L=void 0,this.J=d&&d.supportsCrossDomainXhr||!1,this.K="",this.h=new ec(d&&d.concurrentRequestLimit),this.Da=new ka,this.P=d&&d.fastHandshake||!1,this.O=d&&d.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=d&&d.Rb||!1,d&&d.xa&&this.j.xa(),d&&d.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&d&&d.detectBufferingProxy||!1,this.ja=void 0,d&&d.longPollingTimeout&&0<d.longPollingTimeout&&(this.ja=d.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=nl.prototype,n.la=8,n.G=1,n.connect=function(d,_,E,I){Ot(0),this.W=d,this.H=_||{},E&&I!==void 0&&(this.H.OSID=E,this.H.OAID=I),this.F=this.X,this.I=Qd(this,null,this.W),il(this)};function lc(d){if(qd(d),d.G==3){var _=d.U++,E=At(d.I);if(Qe(E,"SID",d.K),Qe(E,"RID",_),Qe(E,"TYPE","terminate"),Ua(d,E),_=new Ur(d,d.j,_),_.L=2,_.v=Na(At(E)),E=!1,h.navigator&&h.navigator.sendBeacon)try{E=h.navigator.sendBeacon(_.v.toString(),"")}catch{}!E&&h.Image&&(new Image().src=_.v,E=!0),E||(_.g=Wd(_.j,null),_.g.ea(_.v)),_.F=Date.now(),_t(_)}Kd(d)}function rl(d){d.g&&(Ba(d),d.g.cancel(),d.g=null)}function qd(d){rl(d),d.u&&(h.clearTimeout(d.u),d.u=null),sl(d),d.h.cancel(),d.s&&(typeof d.s=="number"&&h.clearTimeout(d.s),d.s=null)}function il(d){if(!tc(d.h)&&!d.s){d.s=!0;var _=d.Ga;Ie||O(),we||(Ie(),we=!0),Oe.add(_,d),d.B=0}}function ug(d,_){return Md(d.h)>=d.h.j-(d.s?1:0)?!1:d.s?(d.i=_.D.concat(d.i),!0):d.G==1||d.G==2||d.B>=(d.Va?0:d.Wa)?!1:(d.s=ms(w(d.Ga,d,_),hc(d,d.B)),d.B++,!0)}n.Ga=function(d){if(this.s)if(this.s=null,this.G==1){if(!d){this.U=Math.floor(1e5*Math.random()),d=this.U++;const F=new Ur(this,this.j,d);let Q=this.o;if(this.S&&(Q?(Q=R(Q),x(Q,this.S)):Q=this.S),this.m!==null||this.O||(F.H=Q,Q=null),this.P)e:{for(var _=0,E=0;E<this.i.length;E++){t:{var I=this.i[E];if("__data__"in I.map&&(I=I.map.__data__,typeof I=="string")){I=I.length;break t}I=void 0}if(I===void 0)break;if(_+=I,4096<_){_=E;break e}if(_===4096||E===this.i.length-1){_=E+1;break e}}_=1e3}else _=1e3;_=jd(this,F,_),E=At(this.I),Qe(E,"RID",d),Qe(E,"CVER",22),this.D&&Qe(E,"X-HTTP-Session-Id",this.D),Ua(this,E),Q&&(this.O?_="headers="+encodeURIComponent(String(oc(Q)))+"&"+_:this.m&&nn(E,this.m,Q)),Ts(this.h,F),this.Ua&&Qe(E,"TYPE","init"),this.P?(Qe(E,"$req",_),Qe(E,"SID","null"),F.T=!0,Ar(F,E,null)):Ar(F,E,_),this.G=2}}else this.G==3&&(d?uc(this,d):this.i.length==0||tc(this.h)||uc(this))};function uc(d,_){var E;_?E=_.l:E=d.U++;const I=At(d.I);Qe(I,"SID",d.K),Qe(I,"RID",E),Qe(I,"AID",d.T),Ua(d,I),d.m&&d.o&&nn(I,d.m,d.o),E=new Ur(d,d.j,E,d.B+1),d.m===null&&(E.H=d.o),_&&(d.i=_.D.concat(d.i)),_=jd(d,E,1e3),E.I=Math.round(.5*d.wa)+Math.round(.5*d.wa*Math.random()),Ts(d.h,E),Ar(E,I,_)}function Ua(d,_){d.H&&le(d.H,function(E,I){Qe(_,I,E)}),d.l&&Pa({},function(E,I){Qe(_,I,E)})}function jd(d,_,E){E=Math.min(d.i.length,E);var I=d.l?w(d.l.Na,d.l,d):null;e:{var F=d.i;let Q=-1;for(;;){const ue=["count="+E];Q==-1?0<E?(Q=F[0].g,ue.push("ofs="+Q)):Q=0:ue.push("ofs="+Q);let je=!0;for(let Kt=0;Kt<E;Kt++){let He=F[Kt].g;const rn=F[Kt].map;if(He-=Q,0>He)Q=Math.max(0,F[Kt].g-100),je=!1;else try{zr(rn,ue,"req"+He+"_")}catch{I&&I(rn)}}if(je){I=ue.join("&");break e}}}return d=d.i.splice(0,E),_.D=d,I}function Hd(d){if(!d.g&&!d.u){d.Y=1;var _=d.Fa;Ie||O(),we||(Ie(),we=!0),Oe.add(_,d),d.v=0}}function cc(d){return d.g||d.u||3<=d.v?!1:(d.Y++,d.u=ms(w(d.Fa,d),hc(d,d.v)),d.v++,!0)}n.Fa=function(){if(this.u=null,Gd(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var d=2*this.R;this.j.info("BP detection timer enabled: "+d),this.A=ms(w(this.ab,this),d)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Ot(10),rl(this),Gd(this))};function Ba(d){d.A!=null&&(h.clearTimeout(d.A),d.A=null)}function Gd(d){d.g=new Ur(d,d.j,"rpc",d.Y),d.m===null&&(d.g.H=d.o),d.g.O=0;var _=At(d.qa);Qe(_,"RID","rpc"),Qe(_,"SID",d.K),Qe(_,"AID",d.T),Qe(_,"CI",d.F?"0":"1"),!d.F&&d.ja&&Qe(_,"TO",d.ja),Qe(_,"TYPE","xmlhttp"),Ua(d,_),d.m&&d.o&&nn(_,d.m,d.o),d.L&&(d.g.I=d.L);var E=d.g;d=d.ia,E.L=1,E.v=Na(At(_)),E.m=null,E.P=!0,Ei(E,d)}n.Za=function(){this.C!=null&&(this.C=null,rl(this),cc(this),Ot(19))};function sl(d){d.C!=null&&(h.clearTimeout(d.C),d.C=null)}function $d(d,_){var E=null;if(d.g==_){sl(d),Ba(d),d.g=null;var I=2}else if(Es(d.h,_))E=_.D,sr(d.h,_),I=1;else return;if(d.G!=0){if(_.o)if(I==1){E=_.m?_.m.length:0,_=Date.now()-_.F;var F=d.B;I=$o(),en(I,new Od(I,E)),il(d)}else Hd(d);else if(F=_.s,F==3||F==0&&0<_.X||!(I==1&&ug(d,_)||I==2&&cc(d)))switch(E&&0<E.length&&(_=d.h,_.i=_.i.concat(E)),F){case 1:Si(d,5);break;case 4:Si(d,10);break;case 3:Si(d,6);break;default:Si(d,2)}}}function hc(d,_){let E=d.Ta+Math.floor(Math.random()*d.cb);return d.isActive()||(E*=2),E*_}function Si(d,_){if(d.j.info("Error code "+_),_==2){var E=w(d.fb,d),I=d.Xa;const F=!I;I=new Ti(I||"//www.google.com/images/cleardot.gif"),h.location&&h.location.protocol=="http"||ws(I,"https"),Na(I),F?Bd(I.toString(),E):Oa(I.toString(),E)}else Ot(2);d.G=0,d.l&&d.l.sa(_),Kd(d),qd(d)}n.fb=function(d){d?(this.j.info("Successfully pinged google.com"),Ot(2)):(this.j.info("Failed to ping google.com"),Ot(1))};function Kd(d){if(d.G=0,d.ka=[],d.l){const _=Cn(d.h);(_.length!=0||d.i.length!=0)&&(L(d.ka,_),L(d.ka,d.i),d.h.i.length=0,U(d.i),d.i.length=0),d.l.ra()}}function Qd(d,_,E){var I=E instanceof Ti?At(E):new Ti(E);if(I.g!="")_&&(I.g=_+"."+I.g),xa(I,I.s);else{var F=h.location;I=F.protocol,_=_?_+"."+F.hostname:F.hostname,F=+F.port;var Q=new Ti(null);I&&ws(Q,I),_&&(Q.g=_),F&&xa(Q,F),E&&(Q.l=E),I=Q}return E=d.D,_=d.ya,E&&_&&Qe(I,E,_),Qe(I,"VER",d.la),Ua(d,I),I}function Wd(d,_,E){if(_&&!d.J)throw Error("Can't create secondary domain capable XhrIo object.");return _=d.Ca&&!d.pa?new Je(new Is({eb:E})):new Je(d.pa),_.Ha(d.J),_}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Yd(){}n=Yd.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function al(){}al.prototype.g=function(d,_){return new Dn(d,_)};function Dn(d,_){Gt.call(this),this.g=new nl(_),this.l=d,this.h=_&&_.messageUrlParams||null,d=_&&_.messageHeaders||null,_&&_.clientProtocolHeaderRequired&&(d?d["X-Client-Protocol"]="webchannel":d={"X-Client-Protocol":"webchannel"}),this.g.o=d,d=_&&_.initMessageHeaders||null,_&&_.messageContentType&&(d?d["X-WebChannel-Content-Type"]=_.messageContentType:d={"X-WebChannel-Content-Type":_.messageContentType}),_&&_.va&&(d?d["X-WebChannel-Client-Profile"]=_.va:d={"X-WebChannel-Client-Profile":_.va}),this.g.S=d,(d=_&&_.Sb)&&!Y(d)&&(this.g.m=d),this.v=_&&_.supportsCrossDomainXhr||!1,this.u=_&&_.sendRawJson||!1,(_=_&&_.httpSessionIdParam)&&!Y(_)&&(this.g.D=_,d=this.h,d!==null&&_ in d&&(d=this.h,_ in d&&delete d[_])),this.j=new Hr(this)}P(Dn,Gt),Dn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Dn.prototype.close=function(){lc(this.g)},Dn.prototype.o=function(d){var _=this.g;if(typeof d=="string"){var E={};E.__data__=d,d=E}else this.u&&(E={},E.__data__=Wu(d),d=E);_.i.push(new rg(_.Ya++,d)),_.G==3&&il(_)},Dn.prototype.N=function(){this.g.l=null,delete this.j,lc(this.g),delete this.g,Dn.aa.N.call(this)};function Xd(d){hs.call(this),d.__headers__&&(this.headers=d.__headers__,this.statusCode=d.__status__,delete d.__headers__,delete d.__status__);var _=d.__sm__;if(_){e:{for(const E in _){d=E;break e}d=void 0}(this.i=d)&&(d=this.i,_=_!==null&&d in _?_[d]:void 0),this.data=_}else this.data=d}P(Xd,hs);function Zd(){Ir.call(this),this.status=1}P(Zd,Ir);function Hr(d){this.g=d}P(Hr,Yd),Hr.prototype.ua=function(){en(this.g,"a")},Hr.prototype.ta=function(d){en(this.g,new Xd(d))},Hr.prototype.sa=function(d){en(this.g,new Zd)},Hr.prototype.ra=function(){en(this.g,"b")},al.prototype.createWebChannel=al.prototype.g,Dn.prototype.send=Dn.prototype.o,Dn.prototype.open=Dn.prototype.m,Dn.prototype.close=Dn.prototype.close,nR=function(){return new al},tR=function(){return $o()},eR=ir,My={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},$t.NO_ERROR=0,$t.TIMEOUT=8,$t.HTTP_ERROR=6,hm=$t,vi.COMPLETE="complete",JS=vi,Nd.EventType=Mr,Mr.OPEN="a",Mr.CLOSE="b",Mr.ERROR="c",Mr.MESSAGE="d",Gt.prototype.listen=Gt.prototype.K,hh=Nd,Je.prototype.listenOnce=Je.prototype.L,Je.prototype.getLastError=Je.prototype.Ka,Je.prototype.getLastErrorCode=Je.prototype.Ba,Je.prototype.getStatus=Je.prototype.Z,Je.prototype.getResponseJson=Je.prototype.Oa,Je.prototype.getResponseText=Je.prototype.oa,Je.prototype.send=Je.prototype.ea,Je.prototype.setWithCredentials=Je.prototype.Ha,ZS=Je}).apply(typeof Zf<"u"?Zf:typeof self<"u"?self:typeof window<"u"?window:{});const rI="@firebase/firestore",iI="4.7.10";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let un=class{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}};un.UNAUTHENTICATED=new un(null),un.GOOGLE_CREDENTIALS=new un("google-credentials-uid"),un.FIRST_PARTY=new un("first-party-uid"),un.MOCK_USER=new un("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ou="11.5.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ca=new hp("@firebase/firestore");function Fl(){return ca.logLevel}function Wk(n){ca.setLogLevel(n)}function re(n,...e){if(ca.logLevel<=Be.DEBUG){const t=e.map(Hv);ca.debug(`Firestore (${Ou}): ${n}`,...t)}}function Vt(n,...e){if(ca.logLevel<=Be.ERROR){const t=e.map(Hv);ca.error(`Firestore (${Ou}): ${n}`,...t)}}function hi(n,...e){if(ca.logLevel<=Be.WARN){const t=e.map(Hv);ca.warn(`Firestore (${Ou}): ${n}`,...t)}}function Hv(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pe(n="Unexpected state"){const e=`FIRESTORE (${Ou}) INTERNAL ASSERTION FAILED: `+n;throw Vt(e),new Error(e)}function ve(n,e){n||pe()}function Yk(n,e){n||pe()}function de(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class te extends kn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rR{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Xk{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(un.UNAUTHENTICATED))}shutdown(){}}class Zk{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class Jk{constructor(e){this.t=e,this.currentUser=un.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){ve(this.o===void 0);let r=this.i;const a=f=>this.i!==r?(r=this.i,t(f)):Promise.resolve();let o=new yn;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new yn,e.enqueueRetryable(()=>a(this.currentUser))};const u=()=>{const f=o;e.enqueueRetryable(async()=>{await f.promise,await a(this.currentUser)})},h=f=>{re("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=f,this.o&&(this.auth.addAuthTokenListener(this.o),u())};this.t.onInit(f=>h(f)),setTimeout(()=>{if(!this.auth){const f=this.t.getImmediate({optional:!0});f?h(f):(re("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new yn)}},0),u()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(re("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ve(typeof r.accessToken=="string"),new rR(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ve(e===null||typeof e=="string"),new un(e)}}class eV{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=un.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class tV{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new eV(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(un.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class sI{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class nV{constructor(e,t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,ft(e)&&e.settings.appCheckToken&&(this.V=e.settings.appCheckToken)}start(e,t){ve(this.o===void 0);const r=o=>{o.error!=null&&re("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const u=o.token!==this.R;return this.R=o.token,re("FirebaseAppCheckTokenProvider",`Received ${u?"new":"existing"} token.`),u?t(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable(()=>r(o))};const a=o=>{re("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>a(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?a(o):re("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.V)return Promise.resolve(new sI(this.V));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(ve(typeof t.token=="string"),this.R=t.token,new sI(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rV(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */function Gv(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iR{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const a=rV(40);for(let o=0;o<a.length;++o)r.length<20&&a[o]<t&&(r+=e.charAt(a[o]%62))}return r}}function Re(n,e){return n<e?-1:n>e?1:0}function Ly(n,e){let t=0;for(;t<n.length&&t<e.length;){const r=n.codePointAt(t),a=e.codePointAt(t);if(r!==a){if(r<128&&a<128)return Re(r,a);{const o=Gv(),u=iV(o.encode(aI(n,t)),o.encode(aI(e,t)));return u!==0?u:Re(r,a)}}t+=r>65535?2:1}return Re(n.length,e.length)}function aI(n,e){return n.codePointAt(e)>65535?n.substring(e,e+2):n.substring(e,e+1)}function iV(n,e){for(let t=0;t<n.length&&t<e.length;++t)if(n[t]!==e[t])return Re(n[t],e[t]);return Re(n.length,e.length)}function iu(n,e,t){return n.length===e.length&&n.every((r,a)=>t(r,e[a]))}function sR(n){return n+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oI=-62135596800,lI=1e6;class gt{static now(){return gt.fromMillis(Date.now())}static fromDate(e){return gt.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*lI);return new gt(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new te(K.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new te(K.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<oI)throw new te(K.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new te(K.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/lI}_compareTo(e){return this.seconds===e.seconds?Re(this.nanoseconds,e.nanoseconds):Re(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-oI;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{static fromTimestamp(e){return new Te(e)}static min(){return new Te(new gt(0,0))}static max(){return new Te(new gt(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uI="__name__";class Xr{constructor(e,t,r){t===void 0?t=0:t>e.length&&pe(),r===void 0?r=e.length-t:r>e.length-t&&pe(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Xr.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Xr?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let a=0;a<r;a++){const o=Xr.compareSegments(e.get(a),t.get(a));if(o!==0)return o}return Re(e.length,t.length)}static compareSegments(e,t){const r=Xr.isNumericId(e),a=Xr.isNumericId(t);return r&&!a?-1:!r&&a?1:r&&a?Xr.extractNumericId(e).compare(Xr.extractNumericId(t)):Ly(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return na.fromString(e.substring(4,e.length-2))}}class ze extends Xr{construct(e,t,r){return new ze(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new te(K.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(a=>a.length>0))}return new ze(t)}static emptyPath(){return new ze([])}}const sV=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class mt extends Xr{construct(e,t,r){return new mt(e,t,r)}static isValidIdentifier(e){return sV.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),mt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===uI}static keyField(){return new mt([uI])}static fromServerFormat(e){const t=[];let r="",a=0;const o=()=>{if(r.length===0)throw new te(K.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let u=!1;for(;a<e.length;){const h=e[a];if(h==="\\"){if(a+1===e.length)throw new te(K.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const f=e[a+1];if(f!=="\\"&&f!=="."&&f!=="`")throw new te(K.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=f,a+=2}else h==="`"?(u=!u,a++):h!=="."||u?(r+=h,a++):(o(),a++)}if(o(),u)throw new te(K.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new mt(t)}static emptyPath(){return new mt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce{constructor(e){this.path=e}static fromPath(e){return new ce(ze.fromString(e))}static fromName(e){return new ce(ze.fromString(e).popFirst(5))}static empty(){return new ce(ze.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ze.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return ze.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ce(new ze(e.slice()))}}/**
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
 */const su=-1;class km{constructor(e,t,r,a){this.indexId=e,this.collectionGroup=t,this.fields=r,this.indexState=a}}function Uy(n){return n.fields.find(e=>e.kind===2)}function ao(n){return n.fields.filter(e=>e.kind!==2)}km.UNKNOWN_ID=-1;class dm{constructor(e,t){this.fieldPath=e,this.kind=t}}class kh{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new kh(0,nr.min())}}function aR(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,a=Te.fromTimestamp(r===1e9?new gt(t+1,0):new gt(t,r));return new nr(a,ce.empty(),e)}function oR(n){return new nr(n.readTime,n.key,su)}class nr{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new nr(Te.min(),ce.empty(),su)}static max(){return new nr(Te.max(),ce.empty(),su)}}function $v(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=ce.comparator(n.documentKey,e.documentKey),t!==0?t:Re(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lR="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class uR{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ea(n){if(n.code!==K.FAILED_PRECONDITION||n.message!==lR)throw n;re("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&pe(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new q((r,a)=>{this.nextCallback=o=>{this.wrapSuccess(e,o).next(r,a)},this.catchCallback=o=>{this.wrapFailure(t,o).next(r,a)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof q?t:q.resolve(t)}catch(t){return q.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):q.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):q.reject(t)}static resolve(e){return new q((t,r)=>{t(e)})}static reject(e){return new q((t,r)=>{r(e)})}static waitFor(e){return new q((t,r)=>{let a=0,o=0,u=!1;e.forEach(h=>{++a,h.next(()=>{++o,u&&o===a&&t()},f=>r(f))}),u=!0,o===a&&t()})}static or(e){let t=q.resolve(!1);for(const r of e)t=t.next(a=>a?q.resolve(a):r());return t}static forEach(e,t){const r=[];return e.forEach((a,o)=>{r.push(t.call(this,a,o))}),this.waitFor(r)}static mapArray(e,t){return new q((r,a)=>{const o=e.length,u=new Array(o);let h=0;for(let f=0;f<o;f++){const p=f;t(e[p]).next(y=>{u[p]=y,++h,h===o&&r(u)},y=>a(y))}})}static doWhile(e,t){return new q((r,a)=>{const o=()=>{e()===!0?t().next(()=>{o()},a):r()};o()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jn="SimpleDb";class dp{static open(e,t,r,a){try{return new dp(t,e.transaction(a,r))}catch(o){throw new _h(t,o)}}constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.m=new yn,this.transaction.oncomplete=()=>{this.m.resolve()},this.transaction.onabort=()=>{t.error?this.m.reject(new _h(e,t.error)):this.m.resolve()},this.transaction.onerror=r=>{const a=Kv(r.target.error);this.m.reject(new _h(e,a))}}get p(){return this.m.promise}abort(e){e&&this.m.reject(e),this.aborted||(re(Jn,"Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}S(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const t=this.transaction.objectStore(e);return new oV(t)}}class oi{static delete(e){return re(Jn,"Removing database:",e),lo(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!xh())return!1;if(oi.v())return!0;const e=wt(),t=oi.C(e),r=0<t&&t<10,a=cR(e),o=0<a&&a<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||o)}static v(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.F)==="YES"}static M(e,t){return e.store(t)}static C(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(r)}constructor(e,t,r){this.name=e,this.version=t,this.O=r,oi.C(wt())===12.2&&Vt("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}async N(e){return this.db||(re(Jn,"Opening database:",this.name),this.db=await new Promise((t,r)=>{const a=indexedDB.open(this.name,this.version);a.onsuccess=o=>{const u=o.target.result;t(u)},a.onblocked=()=>{r(new _h(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},a.onerror=o=>{const u=o.target.error;u.name==="VersionError"?r(new te(K.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):u.name==="InvalidStateError"?r(new te(K.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+u)):r(new _h(e,u))},a.onupgradeneeded=o=>{re(Jn,'Database "'+this.name+'" requires upgrade from version:',o.oldVersion);const u=o.target.result;this.O.B(u,a.transaction,o.oldVersion,this.version).next(()=>{re(Jn,"Database upgrade to version "+this.version+" complete")})}})),this.L&&(this.db.onversionchange=t=>this.L(t)),this.db}k(e){this.L=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,r,a){const o=t==="readonly";let u=0;for(;;){++u;try{this.db=await this.N(e);const h=dp.open(this.db,e,o?"readonly":"readwrite",r),f=a(h).next(p=>(h.S(),p)).catch(p=>(h.abort(p),q.reject(p))).toPromise();return f.catch(()=>{}),await h.p,f}catch(h){const f=h,p=f.name!=="FirebaseError"&&u<3;if(re(Jn,"Transaction failed with error:",f.message,"Retrying:",p),this.close(),!p)return Promise.reject(f)}}}close(){this.db&&this.db.close(),this.db=void 0}}function cR(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}class aV{constructor(e){this.q=e,this.$=!1,this.U=null}get isDone(){return this.$}get K(){return this.U}set cursor(e){this.q=e}done(){this.$=!0}W(e){this.U=e}delete(){return lo(this.q.delete())}}class _h extends te{constructor(e,t){super(K.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function Ta(n){return n.name==="IndexedDbTransactionError"}class oV{constructor(e){this.store=e}put(e,t){let r;return t!==void 0?(re(Jn,"PUT",this.store.name,e,t),r=this.store.put(t,e)):(re(Jn,"PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),lo(r)}add(e){return re(Jn,"ADD",this.store.name,e,e),lo(this.store.add(e))}get(e){return lo(this.store.get(e)).next(t=>(t===void 0&&(t=null),re(Jn,"GET",this.store.name,e,t),t))}delete(e){return re(Jn,"DELETE",this.store.name,e),lo(this.store.delete(e))}count(){return re(Jn,"COUNT",this.store.name),lo(this.store.count())}G(e,t){const r=this.options(e,t),a=r.index?this.store.index(r.index):this.store;if(typeof a.getAll=="function"){const o=a.getAll(r.range);return new q((u,h)=>{o.onerror=f=>{h(f.target.error)},o.onsuccess=f=>{u(f.target.result)}})}{const o=this.cursor(r),u=[];return this.j(o,(h,f)=>{u.push(f)}).next(()=>u)}}H(e,t){const r=this.store.getAll(e,t===null?void 0:t);return new q((a,o)=>{r.onerror=u=>{o(u.target.error)},r.onsuccess=u=>{a(u.target.result)}})}J(e,t){re(Jn,"DELETE ALL",this.store.name);const r=this.options(e,t);r.Y=!1;const a=this.cursor(r);return this.j(a,(o,u,h)=>h.delete())}Z(e,t){let r;t?r=e:(r={},t=e);const a=this.cursor(r);return this.j(a,t)}X(e){const t=this.cursor({});return new q((r,a)=>{t.onerror=o=>{const u=Kv(o.target.error);a(u)},t.onsuccess=o=>{const u=o.target.result;u?e(u.primaryKey,u.value).next(h=>{h?u.continue():r()}):r()}})}j(e,t){const r=[];return new q((a,o)=>{e.onerror=u=>{o(u.target.error)},e.onsuccess=u=>{const h=u.target.result;if(!h)return void a();const f=new aV(h),p=t(h.primaryKey,h.value,f);if(p instanceof q){const y=p.catch(v=>(f.done(),q.reject(v)));r.push(y)}f.isDone?a():f.K===null?h.continue():h.continue(f.K)}}).next(()=>q.waitFor(r))}options(e,t){let r;return e!==void 0&&(typeof e=="string"?r=e:t=e),{index:r,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const r=this.store.index(e.index);return e.Y?r.openKeyCursor(e.range,t):r.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function lo(n){return new q((e,t)=>{n.onsuccess=r=>{const a=r.target.result;e(a)},n.onerror=r=>{const a=Kv(r.target.error);t(a)}})}let cI=!1;function Kv(n){const e=oi.C(wt());if(e>=12.2&&e<13){const t="An internal error was encountered in the Indexed Database server";if(n.message.indexOf(t)>=0){const r=new te("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return cI||(cI=!0,setTimeout(()=>{throw r},0)),r}}return n}const yh="IndexBackfiller";class lV{constructor(e,t){this.asyncQueue=e,this.ee=t,this.task=null}start(){this.te(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}te(e){re(yh,`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{const t=await this.ee.ne();re(yh,`Documents written: ${t}`)}catch(t){Ta(t)?re(yh,"Ignoring IndexedDB error during index backfill: ",t):await Ea(t)}await this.te(6e4)})}}class uV{constructor(e,t){this.localStore=e,this.persistence=t}async ne(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",t=>this.re(t,e))}re(e,t){const r=new Set;let a=t,o=!0;return q.doWhile(()=>o===!0&&a>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(u=>{if(u!==null&&!r.has(u))return re(yh,`Processing collection: ${u}`),this.ie(e,u,a).next(h=>{a-=h,r.add(u)});o=!1})).next(()=>t-a)}ie(e,t,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next(a=>this.localStore.localDocuments.getNextDocuments(e,t,a,r).next(o=>{const u=o.changes;return this.localStore.indexManager.updateIndexEntries(e,u).next(()=>this.se(a,o)).next(h=>(re(yh,`Updating offset: ${h}`),this.localStore.indexManager.updateCollectionGroup(e,t,h))).next(()=>u.size)}))}se(e,t){let r=e;return t.changes.forEach((a,o)=>{const u=oR(o);$v(u,r)>0&&(r=u)}),new nr(r.readTime,r.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
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
 */class Fn{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.oe(r),this._e=r=>t.writeSequenceNumber(r))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}Fn.ae=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ra=-1;function ad(n){return n==null}function Vh(n){return n===0&&1/n==-1/0}function hR(n){return typeof n=="number"&&Number.isInteger(n)&&!Vh(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vm="";function An(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=hI(e)),e=cV(n.get(t),e);return hI(e)}function cV(n,e){let t=e;const r=n.length;for(let a=0;a<r;a++){const o=n.charAt(a);switch(o){case"\0":t+="";break;case Vm:t+="";break;default:t+=o}}return t}function hI(n){return n+Vm+""}function ii(n){const e=n.length;if(ve(e>=2),e===2)return ve(n.charAt(0)===Vm&&n.charAt(1)===""),ze.emptyPath();const t=e-2,r=[];let a="";for(let o=0;o<e;){const u=n.indexOf(Vm,o);switch((u<0||u>t)&&pe(),n.charAt(u+1)){case"":const h=n.substring(o,u);let f;a.length===0?f=h:(a+=h,f=a,a=""),r.push(f);break;case"":a+=n.substring(o,u),a+="\0";break;case"":a+=n.substring(o,u+1);break;default:pe()}o=u+2}return new ze(r)}/**
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
 */const oo="remoteDocuments",od="owner",Ol="owner",Mh="mutationQueues",hV="userId",Pr="mutations",dI="batchId",mo="userMutationsIndex",fI=["userId","batchId"];/**
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
 */function fm(n,e){return[n,An(e)]}function dR(n,e,t){return[n,An(e),t]}const dV={},au="documentMutations",Mm="remoteDocumentsV14",fV=["prefixPath","collectionGroup","readTime","documentId"],mm="documentKeyIndex",mV=["prefixPath","collectionGroup","documentId"],fR="collectionGroupIndex",pV=["collectionGroup","readTime","prefixPath","documentId"],Lh="remoteDocumentGlobal",By="remoteDocumentGlobalKey",ou="targets",mR="queryTargetsIndex",gV=["canonicalId","targetId"],lu="targetDocuments",_V=["targetId","path"],Qv="documentTargetsIndex",yV=["path","targetId"],Lm="targetGlobalKey",vo="targetGlobal",Uh="collectionParents",vV=["collectionId","parent"],uu="clientMetadata",EV="clientId",fp="bundles",TV="bundleId",mp="namedQueries",wV="name",Wv="indexConfiguration",bV="indexId",zy="collectionGroupIndex",IV="collectionGroup",Um="indexState",AV=["indexId","uid"],pR="sequenceNumberIndex",SV=["uid","sequenceNumber"],Bm="indexEntries",RV=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],gR="documentKeyIndex",CV=["indexId","uid","orderedDocumentKey"],pp="documentOverlays",DV=["userId","collectionPath","documentId"],Fy="collectionPathOverlayIndex",PV=["userId","collectionPath","largestBatchId"],_R="collectionGroupOverlayIndex",xV=["userId","collectionGroup","largestBatchId"],Yv="globals",NV="name",yR=[Mh,Pr,au,oo,ou,od,vo,lu,uu,Lh,Uh,fp,mp],OV=[...yR,pp],vR=[Mh,Pr,au,Mm,ou,od,vo,lu,uu,Lh,Uh,fp,mp,pp],ER=vR,Xv=[...ER,Wv,Um,Bm],kV=Xv,VV=[...Xv,Yv];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qy extends uR{constructor(e,t){super(),this.ue=e,this.currentSequenceNumber=t}}function Zt(n,e){const t=de(n);return oi.M(t.ue,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mI(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function wa(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function TR(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(e,t){this.comparator=e,this.root=t||gn.EMPTY}insert(e,t){return new lt(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,gn.BLACK,null,null))}remove(e){return new lt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,gn.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const a=this.comparator(e,r.key);if(a===0)return t+r.left.size;a<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Jf(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Jf(this.root,e,this.comparator,!1)}getReverseIterator(){return new Jf(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Jf(this.root,e,this.comparator,!0)}}class Jf{constructor(e,t,r,a){this.isReverse=a,this.nodeStack=[];let o=1;for(;!e.isEmpty();)if(o=t?r(e.key,t):1,t&&a&&(o*=-1),o<0)e=this.isReverse?e.left:e.right;else{if(o===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class gn{constructor(e,t,r,a,o){this.key=e,this.value=t,this.color=r??gn.RED,this.left=a??gn.EMPTY,this.right=o??gn.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,a,o){return new gn(e??this.key,t??this.value,r??this.color,a??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let a=this;const o=r(e,a.key);return a=o<0?a.copy(null,null,null,a.left.insert(e,t,r),null):o===0?a.copy(null,t,null,null,null):a.copy(null,null,null,null,a.right.insert(e,t,r)),a.fixUp()}removeMin(){if(this.left.isEmpty())return gn.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,a=this;if(t(e,a.key)<0)a.left.isEmpty()||a.left.isRed()||a.left.left.isRed()||(a=a.moveRedLeft()),a=a.copy(null,null,null,a.left.remove(e,t),null);else{if(a.left.isRed()&&(a=a.rotateRight()),a.right.isEmpty()||a.right.isRed()||a.right.left.isRed()||(a=a.moveRedRight()),t(e,a.key)===0){if(a.right.isEmpty())return gn.EMPTY;r=a.right.min(),a=a.copy(r.key,r.value,null,null,a.right.removeMin())}a=a.copy(null,null,null,null,a.right.remove(e,t))}return a.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,gn.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,gn.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw pe();const e=this.left.check();if(e!==this.right.check())throw pe();return e+(this.isRed()?0:1)}}gn.EMPTY=null,gn.RED=!0,gn.BLACK=!1;gn.EMPTY=new class{constructor(){this.size=0}get key(){throw pe()}get value(){throw pe()}get color(){throw pe()}get left(){throw pe()}get right(){throw pe()}copy(e,t,r,a,o){return this}insert(e,t,r){return new gn(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(e){this.comparator=e,this.data=new lt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const a=r.getNext();if(this.comparator(a.key,e[1])>=0)return;t(a.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new pI(this.data.getIterator())}getIteratorFrom(e){return new pI(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof nt)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const a=t.getNext().key,o=r.getNext().key;if(this.comparator(a,o)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new nt(this.comparator);return t.data=e,t}}class pI{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function kl(n){return n.hasNext()?n.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(e){this.fields=e,e.sort(mt.comparator)}static empty(){return new qn([])}unionWith(e){let t=new nt(mt.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new qn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return iu(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */class wR extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MV(){return typeof atob<"u"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(a){try{return atob(a)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new wR("Invalid base64 string: "+o):o}}(e);return new Dt(t)}static fromUint8Array(e){const t=function(a){let o="";for(let u=0;u<a.length;++u)o+=String.fromCharCode(a[u]);return o}(e);return new Dt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let a=0;a<t.length;a++)r[a]=t.charCodeAt(a);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Re(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Dt.EMPTY_BYTE_STRING=new Dt("");const LV=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Xi(n){if(ve(!!n),typeof n=="string"){let e=0;const t=LV.exec(n);if(ve(!!t),t[1]){let a=t[1];a=(a+"000000000").substr(0,9),e=Number(a)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:dt(n.seconds),nanos:dt(n.nanos)}}function dt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Zi(n){return typeof n=="string"?Dt.fromBase64String(n):Dt.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bR="server_timestamp",IR="__type__",AR="__previous_value__",SR="__local_write_time__";function gp(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[IR])===null||t===void 0?void 0:t.stringValue)===bR}function _p(n){const e=n.mapValue.fields[AR];return gp(e)?_p(e):e}function Bh(n){const e=Xi(n.mapValue.fields[SR].timestampValue);return new gt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UV{constructor(e,t,r,a,o,u,h,f,p){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=a,this.ssl=o,this.forceLongPolling=u,this.autoDetectLongPolling=h,this.longPollingOptions=f,this.useFetchStreams=p}}const jy="(default)";class ha{constructor(e,t){this.projectId=e,this.database=t||jy}static empty(){return new ha("","")}get isDefaultDatabase(){return this.database===jy}isEqual(e){return e instanceof ha&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zv="__type__",RR="__max__",Zs={mapValue:{fields:{__type__:{stringValue:RR}}}},Jv="__vector__",cu="value",pm={nullValue:"NULL_VALUE"};function da(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?gp(n)?4:CR(n)?9007199254740991:yp(n)?10:11:pe()}function di(n,e){if(n===e)return!0;const t=da(n);if(t!==da(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Bh(n).isEqual(Bh(e));case 3:return function(a,o){if(typeof a.timestampValue=="string"&&typeof o.timestampValue=="string"&&a.timestampValue.length===o.timestampValue.length)return a.timestampValue===o.timestampValue;const u=Xi(a.timestampValue),h=Xi(o.timestampValue);return u.seconds===h.seconds&&u.nanos===h.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(a,o){return Zi(a.bytesValue).isEqual(Zi(o.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(a,o){return dt(a.geoPointValue.latitude)===dt(o.geoPointValue.latitude)&&dt(a.geoPointValue.longitude)===dt(o.geoPointValue.longitude)}(n,e);case 2:return function(a,o){if("integerValue"in a&&"integerValue"in o)return dt(a.integerValue)===dt(o.integerValue);if("doubleValue"in a&&"doubleValue"in o){const u=dt(a.doubleValue),h=dt(o.doubleValue);return u===h?Vh(u)===Vh(h):isNaN(u)&&isNaN(h)}return!1}(n,e);case 9:return iu(n.arrayValue.values||[],e.arrayValue.values||[],di);case 10:case 11:return function(a,o){const u=a.mapValue.fields||{},h=o.mapValue.fields||{};if(mI(u)!==mI(h))return!1;for(const f in u)if(u.hasOwnProperty(f)&&(h[f]===void 0||!di(u[f],h[f])))return!1;return!0}(n,e);default:return pe()}}function zh(n,e){return(n.values||[]).find(t=>di(t,e))!==void 0}function fa(n,e){if(n===e)return 0;const t=da(n),r=da(e);if(t!==r)return Re(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return Re(n.booleanValue,e.booleanValue);case 2:return function(o,u){const h=dt(o.integerValue||o.doubleValue),f=dt(u.integerValue||u.doubleValue);return h<f?-1:h>f?1:h===f?0:isNaN(h)?isNaN(f)?0:-1:1}(n,e);case 3:return gI(n.timestampValue,e.timestampValue);case 4:return gI(Bh(n),Bh(e));case 5:return Ly(n.stringValue,e.stringValue);case 6:return function(o,u){const h=Zi(o),f=Zi(u);return h.compareTo(f)}(n.bytesValue,e.bytesValue);case 7:return function(o,u){const h=o.split("/"),f=u.split("/");for(let p=0;p<h.length&&p<f.length;p++){const y=Re(h[p],f[p]);if(y!==0)return y}return Re(h.length,f.length)}(n.referenceValue,e.referenceValue);case 8:return function(o,u){const h=Re(dt(o.latitude),dt(u.latitude));return h!==0?h:Re(dt(o.longitude),dt(u.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return _I(n.arrayValue,e.arrayValue);case 10:return function(o,u){var h,f,p,y;const v=o.fields||{},w=u.fields||{},S=(h=v[cu])===null||h===void 0?void 0:h.arrayValue,P=(f=w[cu])===null||f===void 0?void 0:f.arrayValue,U=Re(((p=S==null?void 0:S.values)===null||p===void 0?void 0:p.length)||0,((y=P==null?void 0:P.values)===null||y===void 0?void 0:y.length)||0);return U!==0?U:_I(S,P)}(n.mapValue,e.mapValue);case 11:return function(o,u){if(o===Zs.mapValue&&u===Zs.mapValue)return 0;if(o===Zs.mapValue)return 1;if(u===Zs.mapValue)return-1;const h=o.fields||{},f=Object.keys(h),p=u.fields||{},y=Object.keys(p);f.sort(),y.sort();for(let v=0;v<f.length&&v<y.length;++v){const w=Ly(f[v],y[v]);if(w!==0)return w;const S=fa(h[f[v]],p[y[v]]);if(S!==0)return S}return Re(f.length,y.length)}(n.mapValue,e.mapValue);default:throw pe()}}function gI(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Re(n,e);const t=Xi(n),r=Xi(e),a=Re(t.seconds,r.seconds);return a!==0?a:Re(t.nanos,r.nanos)}function _I(n,e){const t=n.values||[],r=e.values||[];for(let a=0;a<t.length&&a<r.length;++a){const o=fa(t[a],r[a]);if(o)return o}return Re(t.length,r.length)}function hu(n){return Hy(n)}function Hy(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=Xi(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Zi(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return ce.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",a=!0;for(const o of t.values||[])a?a=!1:r+=",",r+=Hy(o);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let a="{",o=!0;for(const u of r)o?o=!1:a+=",",a+=`${u}:${Hy(t.fields[u])}`;return a+"}"}(n.mapValue):pe()}function gm(n){switch(da(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=_p(n);return e?16+gm(e):16;case 5:return 2*n.stringValue.length;case 6:return Zi(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((a,o)=>a+gm(o),0)}(n.arrayValue);case 10:case 11:return function(r){let a=0;return wa(r.fields,(o,u)=>{a+=o.length+gm(u)}),a}(n.mapValue);default:throw pe()}}function Io(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Gy(n){return!!n&&"integerValue"in n}function Fh(n){return!!n&&"arrayValue"in n}function yI(n){return!!n&&"nullValue"in n}function vI(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function _m(n){return!!n&&"mapValue"in n}function yp(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[Zv])===null||t===void 0?void 0:t.stringValue)===Jv}function vh(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return wa(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=vh(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=vh(n.arrayValue.values[t]);return e}return Object.assign({},n)}function CR(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===RR}const DR={mapValue:{fields:{[Zv]:{stringValue:Jv},[cu]:{arrayValue:{}}}}};function BV(n){return"nullValue"in n?pm:"booleanValue"in n?{booleanValue:!1}:"integerValue"in n||"doubleValue"in n?{doubleValue:NaN}:"timestampValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in n?{stringValue:""}:"bytesValue"in n?{bytesValue:""}:"referenceValue"in n?Io(ha.empty(),ce.empty()):"geoPointValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in n?{arrayValue:{}}:"mapValue"in n?yp(n)?DR:{mapValue:{}}:pe()}function zV(n){return"nullValue"in n?{booleanValue:!1}:"booleanValue"in n?{doubleValue:NaN}:"integerValue"in n||"doubleValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in n?{stringValue:""}:"stringValue"in n?{bytesValue:""}:"bytesValue"in n?Io(ha.empty(),ce.empty()):"referenceValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in n?{arrayValue:{}}:"arrayValue"in n?DR:"mapValue"in n?yp(n)?{mapValue:{}}:Zs:pe()}function EI(n,e){const t=fa(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?-1:!n.inclusive&&e.inclusive?1:0}function TI(n,e){const t=fa(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?1:!n.inclusive&&e.inclusive?-1:0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n{constructor(e){this.value=e}static empty(){return new _n({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!_m(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=vh(t)}setAll(e){let t=mt.emptyPath(),r={},a=[];e.forEach((u,h)=>{if(!t.isImmediateParentOf(h)){const f=this.getFieldsMap(t);this.applyChanges(f,r,a),r={},a=[],t=h.popLast()}u?r[h.lastSegment()]=vh(u):a.push(h.lastSegment())});const o=this.getFieldsMap(t);this.applyChanges(o,r,a)}delete(e){const t=this.field(e.popLast());_m(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return di(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let a=t.mapValue.fields[e.get(r)];_m(a)&&a.mapValue.fields||(a={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=a),t=a}return t.mapValue.fields}applyChanges(e,t,r){wa(t,(a,o)=>e[a]=o);for(const a of r)delete e[a]}clone(){return new _n(vh(this.value))}}function PR(n){const e=[];return wa(n.fields,(t,r)=>{const a=new mt([t]);if(_m(r)){const o=PR(r.mapValue).fields;if(o.length===0)e.push(a);else for(const u of o)e.push(a.child(u))}else e.push(a)}),new qn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(e,t,r,a,o,u,h){this.key=e,this.documentType=t,this.version=r,this.readTime=a,this.createTime=o,this.data=u,this.documentState=h}static newInvalidDocument(e){return new ht(e,0,Te.min(),Te.min(),Te.min(),_n.empty(),0)}static newFoundDocument(e,t,r,a){return new ht(e,1,t,Te.min(),r,a,0)}static newNoDocument(e,t){return new ht(e,2,t,Te.min(),Te.min(),_n.empty(),0)}static newUnknownDocument(e,t){return new ht(e,3,t,Te.min(),Te.min(),_n.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Te.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=_n.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=_n.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Te.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ht&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ht(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class ma{constructor(e,t){this.position=e,this.inclusive=t}}function wI(n,e,t){let r=0;for(let a=0;a<n.position.length;a++){const o=e[a],u=n.position[a];if(o.field.isKeyField()?r=ce.comparator(ce.fromName(u.referenceValue),t.key):r=fa(u,t.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function bI(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!di(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class qh{constructor(e,t="asc"){this.field=e,this.dir=t}}function FV(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class xR{}class Fe extends xR{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new qV(e,t,r):t==="array-contains"?new GV(e,r):t==="in"?new LR(e,r):t==="not-in"?new $V(e,r):t==="array-contains-any"?new KV(e,r):new Fe(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new jV(e,r):new HV(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(fa(t,this.value)):t!==null&&da(this.value)===da(t)&&this.matchesComparison(fa(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return pe()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class tt extends xR{constructor(e,t){super(),this.filters=e,this.op=t,this.ce=null}static create(e,t){return new tt(e,t)}matches(e){return du(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function du(n){return n.op==="and"}function $y(n){return n.op==="or"}function eE(n){return NR(n)&&du(n)}function NR(n){for(const e of n.filters)if(e instanceof tt)return!1;return!0}function Ky(n){if(n instanceof Fe)return n.field.canonicalString()+n.op.toString()+hu(n.value);if(eE(n))return n.filters.map(e=>Ky(e)).join(",");{const e=n.filters.map(t=>Ky(t)).join(",");return`${n.op}(${e})`}}function OR(n,e){return n instanceof Fe?function(r,a){return a instanceof Fe&&r.op===a.op&&r.field.isEqual(a.field)&&di(r.value,a.value)}(n,e):n instanceof tt?function(r,a){return a instanceof tt&&r.op===a.op&&r.filters.length===a.filters.length?r.filters.reduce((o,u,h)=>o&&OR(u,a.filters[h]),!0):!1}(n,e):void pe()}function kR(n,e){const t=n.filters.concat(e);return tt.create(t,n.op)}function VR(n){return n instanceof Fe?function(t){return`${t.field.canonicalString()} ${t.op} ${hu(t.value)}`}(n):n instanceof tt?function(t){return t.op.toString()+" {"+t.getFilters().map(VR).join(" ,")+"}"}(n):"Filter"}class qV extends Fe{constructor(e,t,r){super(e,t,r),this.key=ce.fromName(r.referenceValue)}matches(e){const t=ce.comparator(e.key,this.key);return this.matchesComparison(t)}}class jV extends Fe{constructor(e,t){super(e,"in",t),this.keys=MR("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class HV extends Fe{constructor(e,t){super(e,"not-in",t),this.keys=MR("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function MR(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>ce.fromName(r.referenceValue))}class GV extends Fe{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Fh(t)&&zh(t.arrayValue,this.value)}}class LR extends Fe{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&zh(this.value.arrayValue,t)}}class $V extends Fe{constructor(e,t){super(e,"not-in",t)}matches(e){if(zh(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!zh(this.value.arrayValue,t)}}class KV extends Fe{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Fh(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>zh(this.value.arrayValue,r))}}/**
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
 */class QV{constructor(e,t=null,r=[],a=[],o=null,u=null,h=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=a,this.limit=o,this.startAt=u,this.endAt=h,this.le=null}}function Qy(n,e=null,t=[],r=[],a=null,o=null,u=null){return new QV(n,e,t,r,a,o,u)}function Ao(n){const e=de(n);if(e.le===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>Ky(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),ad(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>hu(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>hu(r)).join(",")),e.le=t}return e.le}function ld(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!FV(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!OR(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!bI(n.startAt,e.startAt)&&bI(n.endAt,e.endAt)}function zm(n){return ce.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function Fm(n,e){return n.filters.filter(t=>t instanceof Fe&&t.field.isEqual(e))}function II(n,e,t){let r=pm,a=!0;for(const o of Fm(n,e)){let u=pm,h=!0;switch(o.op){case"<":case"<=":u=BV(o.value);break;case"==":case"in":case">=":u=o.value;break;case">":u=o.value,h=!1;break;case"!=":case"not-in":u=pm}EI({value:r,inclusive:a},{value:u,inclusive:h})<0&&(r=u,a=h)}if(t!==null){for(let o=0;o<n.orderBy.length;++o)if(n.orderBy[o].field.isEqual(e)){const u=t.position[o];EI({value:r,inclusive:a},{value:u,inclusive:t.inclusive})<0&&(r=u,a=t.inclusive);break}}return{value:r,inclusive:a}}function AI(n,e,t){let r=Zs,a=!0;for(const o of Fm(n,e)){let u=Zs,h=!0;switch(o.op){case">=":case">":u=zV(o.value),h=!1;break;case"==":case"in":case"<=":u=o.value;break;case"<":u=o.value,h=!1;break;case"!=":case"not-in":u=Zs}TI({value:r,inclusive:a},{value:u,inclusive:h})>0&&(r=u,a=h)}if(t!==null){for(let o=0;o<n.orderBy.length;++o)if(n.orderBy[o].field.isEqual(e)){const u=t.position[o];TI({value:r,inclusive:a},{value:u,inclusive:t.inclusive})>0&&(r=u,a=t.inclusive);break}}return{value:r,inclusive:a}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{constructor(e,t=null,r=[],a=[],o=null,u="F",h=null,f=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=a,this.limit=o,this.limitType=u,this.startAt=h,this.endAt=f,this.he=null,this.Pe=null,this.Te=null,this.startAt,this.endAt}}function UR(n,e,t,r,a,o,u,h){return new ns(n,e,t,r,a,o,u,h)}function ku(n){return new ns(n)}function SI(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function tE(n){return n.collectionGroup!==null}function Ql(n){const e=de(n);if(e.he===null){e.he=[];const t=new Set;for(const o of e.explicitOrderBy)e.he.push(o),t.add(o.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(u){let h=new nt(mt.comparator);return u.filters.forEach(f=>{f.getFlattenedFilters().forEach(p=>{p.isInequality()&&(h=h.add(p.field))})}),h})(e).forEach(o=>{t.has(o.canonicalString())||o.isKeyField()||e.he.push(new qh(o,r))}),t.has(mt.keyField().canonicalString())||e.he.push(new qh(mt.keyField(),r))}return e.he}function Vn(n){const e=de(n);return e.Pe||(e.Pe=WV(e,Ql(n))),e.Pe}function WV(n,e){if(n.limitType==="F")return Qy(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(a=>{const o=a.dir==="desc"?"asc":"desc";return new qh(a.field,o)});const t=n.endAt?new ma(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new ma(n.startAt.position,n.startAt.inclusive):null;return Qy(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Wy(n,e){const t=n.filters.concat([e]);return new ns(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function qm(n,e,t){return new ns(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function ud(n,e){return ld(Vn(n),Vn(e))&&n.limitType===e.limitType}function BR(n){return`${Ao(Vn(n))}|lt:${n.limitType}`}function ql(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(a=>VR(a)).join(", ")}]`),ad(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(a=>function(u){return`${u.field.canonicalString()} (${u.dir})`}(a)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(a=>hu(a)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(a=>hu(a)).join(",")),`Target(${r})`}(Vn(n))}; limitType=${n.limitType})`}function cd(n,e){return e.isFoundDocument()&&function(r,a){const o=a.key.path;return r.collectionGroup!==null?a.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):ce.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(n,e)&&function(r,a){for(const o of Ql(r))if(!o.field.isKeyField()&&a.data.field(o.field)===null)return!1;return!0}(n,e)&&function(r,a){for(const o of r.filters)if(!o.matches(a))return!1;return!0}(n,e)&&function(r,a){return!(r.startAt&&!function(u,h,f){const p=wI(u,h,f);return u.inclusive?p<=0:p<0}(r.startAt,Ql(r),a)||r.endAt&&!function(u,h,f){const p=wI(u,h,f);return u.inclusive?p>=0:p>0}(r.endAt,Ql(r),a))}(n,e)}function zR(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function FR(n){return(e,t)=>{let r=!1;for(const a of Ql(n)){const o=YV(a,e,t);if(o!==0)return o;r=r||a.field.isKeyField()}return 0}}function YV(n,e,t){const r=n.field.isKeyField()?ce.comparator(e.key,t.key):function(o,u,h){const f=u.data.field(o),p=h.data.field(o);return f!==null&&p!==null?fa(f,p):pe()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return pe()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[a,o]of r)if(this.equalsFn(a,e))return o}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),a=this.inner[r];if(a===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let o=0;o<a.length;o++)if(this.equalsFn(a[o][0],e))return void(a[o]=[e,t]);a.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let a=0;a<r.length;a++)if(this.equalsFn(r[a][0],e))return r.length===1?delete this.inner[t]:r.splice(a,1),this.innerSize--,!0;return!1}forEach(e){wa(this.inner,(t,r)=>{for(const[a,o]of r)e(a,o)})}isEmpty(){return TR(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XV=new lt(ce.comparator);function jn(){return XV}const qR=new lt(ce.comparator);function dh(...n){let e=qR;for(const t of n)e=e.insert(t.key,t);return e}function jR(n){let e=qR;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function si(){return Eh()}function HR(){return Eh()}function Eh(){return new rs(n=>n.toString(),(n,e)=>n.isEqual(e))}const ZV=new lt(ce.comparator),JV=new nt(ce.comparator);function xe(...n){let e=JV;for(const t of n)e=e.add(t);return e}const eM=new nt(Re);function nE(){return eM}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rE(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Vh(e)?"-0":e}}function GR(n){return{integerValue:""+n}}function $R(n,e){return hR(e)?GR(e):rE(n,e)}/**
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
 */class vp{constructor(){this._=void 0}}function tM(n,e,t){return n instanceof fu?function(a,o){const u={fields:{[IR]:{stringValue:bR},[SR]:{timestampValue:{seconds:a.seconds,nanos:a.nanoseconds}}}};return o&&gp(o)&&(o=_p(o)),o&&(u.fields[AR]=o),{mapValue:u}}(t,e):n instanceof So?QR(n,e):n instanceof Ro?WR(n,e):function(a,o){const u=KR(a,o),h=RI(u)+RI(a.Ie);return Gy(u)&&Gy(a.Ie)?GR(h):rE(a.serializer,h)}(n,e)}function nM(n,e,t){return n instanceof So?QR(n,e):n instanceof Ro?WR(n,e):t}function KR(n,e){return n instanceof mu?function(r){return Gy(r)||function(o){return!!o&&"doubleValue"in o}(r)}(e)?e:{integerValue:0}:null}class fu extends vp{}class So extends vp{constructor(e){super(),this.elements=e}}function QR(n,e){const t=YR(e);for(const r of n.elements)t.some(a=>di(a,r))||t.push(r);return{arrayValue:{values:t}}}class Ro extends vp{constructor(e){super(),this.elements=e}}function WR(n,e){let t=YR(e);for(const r of n.elements)t=t.filter(a=>!di(a,r));return{arrayValue:{values:t}}}class mu extends vp{constructor(e,t){super(),this.serializer=e,this.Ie=t}}function RI(n){return dt(n.integerValue||n.doubleValue)}function YR(n){return Fh(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hd{constructor(e,t){this.field=e,this.transform=t}}function rM(n,e){return n.field.isEqual(e.field)&&function(r,a){return r instanceof So&&a instanceof So||r instanceof Ro&&a instanceof Ro?iu(r.elements,a.elements,di):r instanceof mu&&a instanceof mu?di(r.Ie,a.Ie):r instanceof fu&&a instanceof fu}(n.transform,e.transform)}class iM{constructor(e,t){this.version=e,this.transformResults=t}}class pt{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new pt}static exists(e){return new pt(void 0,e)}static updateTime(e){return new pt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ym(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Ep{}function XR(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Mu(n.key,pt.none()):new Vu(n.key,n.data,pt.none());{const t=n.data,r=_n.empty();let a=new nt(mt.comparator);for(let o of e.fields)if(!a.has(o)){let u=t.field(o);u===null&&o.length>1&&(o=o.popLast(),u=t.field(o)),u===null?r.delete(o):r.set(o,u),a=a.add(o)}return new is(n.key,r,new qn(a.toArray()),pt.none())}}function sM(n,e,t){n instanceof Vu?function(a,o,u){const h=a.value.clone(),f=DI(a.fieldTransforms,o,u.transformResults);h.setAll(f),o.convertToFoundDocument(u.version,h).setHasCommittedMutations()}(n,e,t):n instanceof is?function(a,o,u){if(!ym(a.precondition,o))return void o.convertToUnknownDocument(u.version);const h=DI(a.fieldTransforms,o,u.transformResults),f=o.data;f.setAll(ZR(a)),f.setAll(h),o.convertToFoundDocument(u.version,f).setHasCommittedMutations()}(n,e,t):function(a,o,u){o.convertToNoDocument(u.version).setHasCommittedMutations()}(0,e,t)}function Th(n,e,t,r){return n instanceof Vu?function(o,u,h,f){if(!ym(o.precondition,u))return h;const p=o.value.clone(),y=PI(o.fieldTransforms,f,u);return p.setAll(y),u.convertToFoundDocument(u.version,p).setHasLocalMutations(),null}(n,e,t,r):n instanceof is?function(o,u,h,f){if(!ym(o.precondition,u))return h;const p=PI(o.fieldTransforms,f,u),y=u.data;return y.setAll(ZR(o)),y.setAll(p),u.convertToFoundDocument(u.version,y).setHasLocalMutations(),h===null?null:h.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(v=>v.field))}(n,e,t,r):function(o,u,h){return ym(o.precondition,u)?(u.convertToNoDocument(u.version).setHasLocalMutations(),null):h}(n,e,t)}function aM(n,e){let t=null;for(const r of n.fieldTransforms){const a=e.data.field(r.field),o=KR(r.transform,a||null);o!=null&&(t===null&&(t=_n.empty()),t.set(r.field,o))}return t||null}function CI(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,a){return r===void 0&&a===void 0||!(!r||!a)&&iu(r,a,(o,u)=>rM(o,u))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Vu extends Ep{constructor(e,t,r,a=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=a,this.type=0}getFieldMask(){return null}}class is extends Ep{constructor(e,t,r,a,o=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=a,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function ZR(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function DI(n,e,t){const r=new Map;ve(n.length===t.length);for(let a=0;a<t.length;a++){const o=n[a],u=o.transform,h=e.data.field(o.field);r.set(o.field,nM(u,h,t[a]))}return r}function PI(n,e,t){const r=new Map;for(const a of n){const o=a.transform,u=t.data.field(a.field);r.set(a.field,tM(o,u,e))}return r}class Mu extends Ep{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class iE extends Ep{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sE{constructor(e,t,r,a){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=a}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let a=0;a<this.mutations.length;a++){const o=this.mutations[a];o.key.isEqual(e.key)&&sM(o,e,r[a])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Th(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Th(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=HR();return this.mutations.forEach(a=>{const o=e.get(a.key),u=o.overlayedDocument;let h=this.applyToLocalView(u,o.mutatedFields);h=t.has(a.key)?null:h;const f=XR(u,h);f!==null&&r.set(a.key,f),u.isValidDocument()||u.convertToNoDocument(Te.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),xe())}isEqual(e){return this.batchId===e.batchId&&iu(this.mutations,e.mutations,(t,r)=>CI(t,r))&&iu(this.baseMutations,e.baseMutations,(t,r)=>CI(t,r))}}class aE{constructor(e,t,r,a){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=a}static from(e,t,r){ve(e.mutations.length===r.length);let a=function(){return ZV}();const o=e.mutations;for(let u=0;u<o.length;u++)a=a.insert(o[u].key,r[u].version);return new aE(e,t,r,a)}}/**
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
 */class oE{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class oM{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var qt,$e;function JR(n){switch(n){case K.OK:return pe();case K.CANCELLED:case K.UNKNOWN:case K.DEADLINE_EXCEEDED:case K.RESOURCE_EXHAUSTED:case K.INTERNAL:case K.UNAVAILABLE:case K.UNAUTHENTICATED:return!1;case K.INVALID_ARGUMENT:case K.NOT_FOUND:case K.ALREADY_EXISTS:case K.PERMISSION_DENIED:case K.FAILED_PRECONDITION:case K.ABORTED:case K.OUT_OF_RANGE:case K.UNIMPLEMENTED:case K.DATA_LOSS:return!0;default:return pe()}}function e1(n){if(n===void 0)return Vt("GRPC error has no .code"),K.UNKNOWN;switch(n){case qt.OK:return K.OK;case qt.CANCELLED:return K.CANCELLED;case qt.UNKNOWN:return K.UNKNOWN;case qt.DEADLINE_EXCEEDED:return K.DEADLINE_EXCEEDED;case qt.RESOURCE_EXHAUSTED:return K.RESOURCE_EXHAUSTED;case qt.INTERNAL:return K.INTERNAL;case qt.UNAVAILABLE:return K.UNAVAILABLE;case qt.UNAUTHENTICATED:return K.UNAUTHENTICATED;case qt.INVALID_ARGUMENT:return K.INVALID_ARGUMENT;case qt.NOT_FOUND:return K.NOT_FOUND;case qt.ALREADY_EXISTS:return K.ALREADY_EXISTS;case qt.PERMISSION_DENIED:return K.PERMISSION_DENIED;case qt.FAILED_PRECONDITION:return K.FAILED_PRECONDITION;case qt.ABORTED:return K.ABORTED;case qt.OUT_OF_RANGE:return K.OUT_OF_RANGE;case qt.UNIMPLEMENTED:return K.UNIMPLEMENTED;case qt.DATA_LOSS:return K.DATA_LOSS;default:return pe()}}($e=qt||(qt={}))[$e.OK=0]="OK",$e[$e.CANCELLED=1]="CANCELLED",$e[$e.UNKNOWN=2]="UNKNOWN",$e[$e.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",$e[$e.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",$e[$e.NOT_FOUND=5]="NOT_FOUND",$e[$e.ALREADY_EXISTS=6]="ALREADY_EXISTS",$e[$e.PERMISSION_DENIED=7]="PERMISSION_DENIED",$e[$e.UNAUTHENTICATED=16]="UNAUTHENTICATED",$e[$e.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",$e[$e.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",$e[$e.ABORTED=10]="ABORTED",$e[$e.OUT_OF_RANGE=11]="OUT_OF_RANGE",$e[$e.UNIMPLEMENTED=12]="UNIMPLEMENTED",$e[$e.INTERNAL=13]="INTERNAL",$e[$e.UNAVAILABLE=14]="UNAVAILABLE",$e[$e.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const lM=new na([4294967295,4294967295],0);function xI(n){const e=Gv().encode(n),t=new XS;return t.update(e),new Uint8Array(t.digest())}function NI(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),a=e.getUint32(8,!0),o=e.getUint32(12,!0);return[new na([t,r],0),new na([a,o],0)]}class lE{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new fh(`Invalid padding: ${t}`);if(r<0)throw new fh(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new fh(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new fh(`Invalid padding when bitmap length is 0: ${t}`);this.Ee=8*e.length-t,this.de=na.fromNumber(this.Ee)}Ae(e,t,r){let a=e.add(t.multiply(na.fromNumber(r)));return a.compare(lM)===1&&(a=new na([a.getBits(0),a.getBits(1)],0)),a.modulo(this.de).toNumber()}Re(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.Ee===0)return!1;const t=xI(e),[r,a]=NI(t);for(let o=0;o<this.hashCount;o++){const u=this.Ae(r,a,o);if(!this.Re(u))return!1}return!0}static create(e,t,r){const a=e%8==0?0:8-e%8,o=new Uint8Array(Math.ceil(e/8)),u=new lE(o,a,t);return r.forEach(h=>u.insert(h)),u}insert(e){if(this.Ee===0)return;const t=xI(e),[r,a]=NI(t);for(let o=0;o<this.hashCount;o++){const u=this.Ae(r,a,o);this.Ve(u)}}Ve(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class fh extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dd{constructor(e,t,r,a,o){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=a,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const a=new Map;return a.set(e,fd.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new dd(Te.min(),a,new lt(Re),jn(),xe())}}class fd{constructor(e,t,r,a,o){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=a,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new fd(r,t,xe(),xe(),xe())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vm{constructor(e,t,r,a){this.me=e,this.removedTargetIds=t,this.key=r,this.fe=a}}class t1{constructor(e,t){this.targetId=e,this.ge=t}}class n1{constructor(e,t,r=Dt.EMPTY_BYTE_STRING,a=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=a}}class OI{constructor(){this.pe=0,this.ye=kI(),this.we=Dt.EMPTY_BYTE_STRING,this.Se=!1,this.be=!0}get current(){return this.Se}get resumeToken(){return this.we}get De(){return this.pe!==0}get ve(){return this.be}Ce(e){e.approximateByteSize()>0&&(this.be=!0,this.we=e)}Fe(){let e=xe(),t=xe(),r=xe();return this.ye.forEach((a,o)=>{switch(o){case 0:e=e.add(a);break;case 2:t=t.add(a);break;case 1:r=r.add(a);break;default:pe()}}),new fd(this.we,this.Se,e,t,r)}Me(){this.be=!1,this.ye=kI()}xe(e,t){this.be=!0,this.ye=this.ye.insert(e,t)}Oe(e){this.be=!0,this.ye=this.ye.remove(e)}Ne(){this.pe+=1}Be(){this.pe-=1,ve(this.pe>=0)}Le(){this.be=!0,this.Se=!0}}class uM{constructor(e){this.ke=e,this.qe=new Map,this.Qe=jn(),this.$e=em(),this.Ue=em(),this.Ke=new lt(Re)}We(e){for(const t of e.me)e.fe&&e.fe.isFoundDocument()?this.Ge(t,e.fe):this.ze(t,e.key,e.fe);for(const t of e.removedTargetIds)this.ze(t,e.key,e.fe)}je(e){this.forEachTarget(e,t=>{const r=this.He(t);switch(e.state){case 0:this.Je(t)&&r.Ce(e.resumeToken);break;case 1:r.Be(),r.De||r.Me(),r.Ce(e.resumeToken);break;case 2:r.Be(),r.De||this.removeTarget(t);break;case 3:this.Je(t)&&(r.Le(),r.Ce(e.resumeToken));break;case 4:this.Je(t)&&(this.Ye(t),r.Ce(e.resumeToken));break;default:pe()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.qe.forEach((r,a)=>{this.Je(a)&&t(a)})}Ze(e){const t=e.targetId,r=e.ge.count,a=this.Xe(t);if(a){const o=a.target;if(zm(o))if(r===0){const u=new ce(o.path);this.ze(t,u,ht.newNoDocument(u,Te.min()))}else ve(r===1);else{const u=this.et(t);if(u!==r){const h=this.tt(e),f=h?this.nt(h,e,u):1;if(f!==0){this.Ye(t);const p=f===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(t,p)}}}}}tt(e){const t=e.ge.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:a=0},hashCount:o=0}=t;let u,h;try{u=Zi(r).toUint8Array()}catch(f){if(f instanceof wR)return hi("Decoding the base64 bloom filter in existence filter failed ("+f.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw f}try{h=new lE(u,a,o)}catch(f){return hi(f instanceof fh?"BloomFilter error: ":"Applying bloom filter failed: ",f),null}return h.Ee===0?null:h}nt(e,t,r){return t.ge.count===r-this.st(e,t.targetId)?0:2}st(e,t){const r=this.ke.getRemoteKeysForTarget(t);let a=0;return r.forEach(o=>{const u=this.ke.it(),h=`projects/${u.projectId}/databases/${u.database}/documents/${o.path.canonicalString()}`;e.mightContain(h)||(this.ze(t,o,null),a++)}),a}ot(e){const t=new Map;this.qe.forEach((o,u)=>{const h=this.Xe(u);if(h){if(o.current&&zm(h.target)){const f=new ce(h.target.path);this._t(f).has(u)||this.ut(u,f)||this.ze(u,f,ht.newNoDocument(f,e))}o.ve&&(t.set(u,o.Fe()),o.Me())}});let r=xe();this.Ue.forEach((o,u)=>{let h=!0;u.forEachWhile(f=>{const p=this.Xe(f);return!p||p.purpose==="TargetPurposeLimboResolution"||(h=!1,!1)}),h&&(r=r.add(o))}),this.Qe.forEach((o,u)=>u.setReadTime(e));const a=new dd(e,t,this.Ke,this.Qe,r);return this.Qe=jn(),this.$e=em(),this.Ue=em(),this.Ke=new lt(Re),a}Ge(e,t){if(!this.Je(e))return;const r=this.ut(e,t.key)?2:0;this.He(e).xe(t.key,r),this.Qe=this.Qe.insert(t.key,t),this.$e=this.$e.insert(t.key,this._t(t.key).add(e)),this.Ue=this.Ue.insert(t.key,this.ct(t.key).add(e))}ze(e,t,r){if(!this.Je(e))return;const a=this.He(e);this.ut(e,t)?a.xe(t,1):a.Oe(t),this.Ue=this.Ue.insert(t,this.ct(t).delete(e)),this.Ue=this.Ue.insert(t,this.ct(t).add(e)),r&&(this.Qe=this.Qe.insert(t,r))}removeTarget(e){this.qe.delete(e)}et(e){const t=this.He(e).Fe();return this.ke.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ne(e){this.He(e).Ne()}He(e){let t=this.qe.get(e);return t||(t=new OI,this.qe.set(e,t)),t}ct(e){let t=this.Ue.get(e);return t||(t=new nt(Re),this.Ue=this.Ue.insert(e,t)),t}_t(e){let t=this.$e.get(e);return t||(t=new nt(Re),this.$e=this.$e.insert(e,t)),t}Je(e){const t=this.Xe(e)!==null;return t||re("WatchChangeAggregator","Detected inactive target",e),t}Xe(e){const t=this.qe.get(e);return t&&t.De?null:this.ke.lt(e)}Ye(e){this.qe.set(e,new OI),this.ke.getRemoteKeysForTarget(e).forEach(t=>{this.ze(e,t,null)})}ut(e,t){return this.ke.getRemoteKeysForTarget(e).has(t)}}function em(){return new lt(ce.comparator)}function kI(){return new lt(ce.comparator)}const cM={asc:"ASCENDING",desc:"DESCENDING"},hM={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},dM={and:"AND",or:"OR"};class fM{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Yy(n,e){return n.useProto3Json||ad(e)?e:{value:e}}function pu(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function r1(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function mM(n,e){return pu(n,e.toTimestamp())}function Mt(n){return ve(!!n),Te.fromTimestamp(function(t){const r=Xi(t);return new gt(r.seconds,r.nanos)}(n))}function uE(n,e){return Xy(n,e).canonicalString()}function Xy(n,e){const t=function(a){return new ze(["projects",a.projectId,"databases",a.database])}(n).child("documents");return e===void 0?t:t.child(e)}function i1(n){const e=ze.fromString(n);return ve(m1(e)),e}function jh(n,e){return uE(n.databaseId,e.path)}function li(n,e){const t=i1(e);if(t.get(1)!==n.databaseId.projectId)throw new te(K.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new te(K.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new ce(o1(t))}function s1(n,e){return uE(n.databaseId,e)}function a1(n){const e=i1(n);return e.length===4?ze.emptyPath():o1(e)}function Zy(n){return new ze(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function o1(n){return ve(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function VI(n,e,t){return{name:jh(n,e),fields:t.value.mapValue.fields}}function l1(n,e,t){const r=li(n,e.name),a=Mt(e.updateTime),o=e.createTime?Mt(e.createTime):Te.min(),u=new _n({mapValue:{fields:e.fields}}),h=ht.newFoundDocument(r,a,o,u);return t&&h.setHasCommittedMutations(),t?h.setHasCommittedMutations():h}function pM(n,e){return"found"in e?function(r,a){ve(!!a.found),a.found.name,a.found.updateTime;const o=li(r,a.found.name),u=Mt(a.found.updateTime),h=a.found.createTime?Mt(a.found.createTime):Te.min(),f=new _n({mapValue:{fields:a.found.fields}});return ht.newFoundDocument(o,u,h,f)}(n,e):"missing"in e?function(r,a){ve(!!a.missing),ve(!!a.readTime);const o=li(r,a.missing),u=Mt(a.readTime);return ht.newNoDocument(o,u)}(n,e):pe()}function gM(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(p){return p==="NO_CHANGE"?0:p==="ADD"?1:p==="REMOVE"?2:p==="CURRENT"?3:p==="RESET"?4:pe()}(e.targetChange.targetChangeType||"NO_CHANGE"),a=e.targetChange.targetIds||[],o=function(p,y){return p.useProto3Json?(ve(y===void 0||typeof y=="string"),Dt.fromBase64String(y||"")):(ve(y===void 0||y instanceof Buffer||y instanceof Uint8Array),Dt.fromUint8Array(y||new Uint8Array))}(n,e.targetChange.resumeToken),u=e.targetChange.cause,h=u&&function(p){const y=p.code===void 0?K.UNKNOWN:e1(p.code);return new te(y,p.message||"")}(u);t=new n1(r,a,o,h||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const a=li(n,r.document.name),o=Mt(r.document.updateTime),u=r.document.createTime?Mt(r.document.createTime):Te.min(),h=new _n({mapValue:{fields:r.document.fields}}),f=ht.newFoundDocument(a,o,u,h),p=r.targetIds||[],y=r.removedTargetIds||[];t=new vm(p,y,f.key,f)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const a=li(n,r.document),o=r.readTime?Mt(r.readTime):Te.min(),u=ht.newNoDocument(a,o),h=r.removedTargetIds||[];t=new vm([],h,u.key,u)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const a=li(n,r.document),o=r.removedTargetIds||[];t=new vm([],o,a,null)}else{if(!("filter"in e))return pe();{e.filter;const r=e.filter;r.targetId;const{count:a=0,unchangedNames:o}=r,u=new oM(a,o),h=r.targetId;t=new t1(h,u)}}return t}function Hh(n,e){let t;if(e instanceof Vu)t={update:VI(n,e.key,e.value)};else if(e instanceof Mu)t={delete:jh(n,e.key)};else if(e instanceof is)t={update:VI(n,e.key,e.data),updateMask:wM(e.fieldMask)};else{if(!(e instanceof iE))return pe();t={verify:jh(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(o,u){const h=u.transform;if(h instanceof fu)return{fieldPath:u.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(h instanceof So)return{fieldPath:u.field.canonicalString(),appendMissingElements:{values:h.elements}};if(h instanceof Ro)return{fieldPath:u.field.canonicalString(),removeAllFromArray:{values:h.elements}};if(h instanceof mu)return{fieldPath:u.field.canonicalString(),increment:h.Ie};throw pe()}(0,r))),e.precondition.isNone||(t.currentDocument=function(a,o){return o.updateTime!==void 0?{updateTime:mM(a,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:pe()}(n,e.precondition)),t}function Jy(n,e){const t=e.currentDocument?function(o){return o.updateTime!==void 0?pt.updateTime(Mt(o.updateTime)):o.exists!==void 0?pt.exists(o.exists):pt.none()}(e.currentDocument):pt.none(),r=e.updateTransforms?e.updateTransforms.map(a=>function(u,h){let f=null;if("setToServerValue"in h)ve(h.setToServerValue==="REQUEST_TIME"),f=new fu;else if("appendMissingElements"in h){const y=h.appendMissingElements.values||[];f=new So(y)}else if("removeAllFromArray"in h){const y=h.removeAllFromArray.values||[];f=new Ro(y)}else"increment"in h?f=new mu(u,h.increment):pe();const p=mt.fromServerFormat(h.fieldPath);return new hd(p,f)}(n,a)):[];if(e.update){e.update.name;const a=li(n,e.update.name),o=new _n({mapValue:{fields:e.update.fields}});if(e.updateMask){const u=function(f){const p=f.fieldPaths||[];return new qn(p.map(y=>mt.fromServerFormat(y)))}(e.updateMask);return new is(a,o,u,t,r)}return new Vu(a,o,t,r)}if(e.delete){const a=li(n,e.delete);return new Mu(a,t)}if(e.verify){const a=li(n,e.verify);return new iE(a,t)}return pe()}function _M(n,e){return n&&n.length>0?(ve(e!==void 0),n.map(t=>function(a,o){let u=a.updateTime?Mt(a.updateTime):Mt(o);return u.isEqual(Te.min())&&(u=Mt(o)),new iM(u,a.transformResults||[])}(t,e))):[]}function u1(n,e){return{documents:[s1(n,e.path)]}}function c1(n,e){const t={structuredQuery:{}},r=e.path;let a;e.collectionGroup!==null?(a=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(a=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=s1(n,a);const o=function(p){if(p.length!==0)return f1(tt.create(p,"and"))}(e.filters);o&&(t.structuredQuery.where=o);const u=function(p){if(p.length!==0)return p.map(y=>function(w){return{field:jl(w.field),direction:vM(w.dir)}}(y))}(e.orderBy);u&&(t.structuredQuery.orderBy=u);const h=Yy(n,e.limit);return h!==null&&(t.structuredQuery.limit=h),e.startAt&&(t.structuredQuery.startAt=function(p){return{before:p.inclusive,values:p.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(p){return{before:!p.inclusive,values:p.position}}(e.endAt)),{ht:t,parent:a}}function h1(n){let e=a1(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let a=null;if(r>0){ve(r===1);const y=t.from[0];y.allDescendants?a=y.collectionId:e=e.child(y.collectionId)}let o=[];t.where&&(o=function(v){const w=d1(v);return w instanceof tt&&eE(w)?w.getFilters():[w]}(t.where));let u=[];t.orderBy&&(u=function(v){return v.map(w=>function(P){return new qh(Hl(P.field),function(L){switch(L){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(P.direction))}(w))}(t.orderBy));let h=null;t.limit&&(h=function(v){let w;return w=typeof v=="object"?v.value:v,ad(w)?null:w}(t.limit));let f=null;t.startAt&&(f=function(v){const w=!!v.before,S=v.values||[];return new ma(S,w)}(t.startAt));let p=null;return t.endAt&&(p=function(v){const w=!v.before,S=v.values||[];return new ma(S,w)}(t.endAt)),UR(e,a,u,o,h,"F",f,p)}function yM(n,e){const t=function(a){switch(a){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return pe()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function d1(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=Hl(t.unaryFilter.field);return Fe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const a=Hl(t.unaryFilter.field);return Fe.create(a,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=Hl(t.unaryFilter.field);return Fe.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const u=Hl(t.unaryFilter.field);return Fe.create(u,"!=",{nullValue:"NULL_VALUE"});default:return pe()}}(n):n.fieldFilter!==void 0?function(t){return Fe.create(Hl(t.fieldFilter.field),function(a){switch(a){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return pe()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return tt.create(t.compositeFilter.filters.map(r=>d1(r)),function(a){switch(a){case"AND":return"and";case"OR":return"or";default:return pe()}}(t.compositeFilter.op))}(n):pe()}function vM(n){return cM[n]}function EM(n){return hM[n]}function TM(n){return dM[n]}function jl(n){return{fieldPath:n.canonicalString()}}function Hl(n){return mt.fromServerFormat(n.fieldPath)}function f1(n){return n instanceof Fe?function(t){if(t.op==="=="){if(vI(t.value))return{unaryFilter:{field:jl(t.field),op:"IS_NAN"}};if(yI(t.value))return{unaryFilter:{field:jl(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(vI(t.value))return{unaryFilter:{field:jl(t.field),op:"IS_NOT_NAN"}};if(yI(t.value))return{unaryFilter:{field:jl(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:jl(t.field),op:EM(t.op),value:t.value}}}(n):n instanceof tt?function(t){const r=t.getFilters().map(a=>f1(a));return r.length===1?r[0]:{compositeFilter:{op:TM(t.op),filters:r}}}(n):pe()}function wM(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function m1(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi{constructor(e,t,r,a,o=Te.min(),u=Te.min(),h=Dt.EMPTY_BYTE_STRING,f=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=a,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=u,this.resumeToken=h,this.expectedCount=f}withSequenceNumber(e){return new Hi(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Hi(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Hi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Hi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p1{constructor(e){this.Tt=e}}function bM(n,e){let t;if(e.document)t=l1(n.Tt,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=ce.fromSegments(e.noDocument.path),a=Do(e.noDocument.readTime);t=ht.newNoDocument(r,a),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return pe();{const r=ce.fromSegments(e.unknownDocument.path),a=Do(e.unknownDocument.version);t=ht.newUnknownDocument(r,a)}}return e.readTime&&t.setReadTime(function(a){const o=new gt(a[0],a[1]);return Te.fromTimestamp(o)}(e.readTime)),t}function MI(n,e){const t=e.key,r={prefixPath:t.getCollectionPath().popLast().toArray(),collectionGroup:t.collectionGroup,documentId:t.path.lastSegment(),readTime:jm(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(o,u){return{name:jh(o,u.key),fields:u.data.value.mapValue.fields,updateTime:pu(o,u.version.toTimestamp()),createTime:pu(o,u.createTime.toTimestamp())}}(n.Tt,e);else if(e.isNoDocument())r.noDocument={path:t.path.toArray(),readTime:Co(e.version)};else{if(!e.isUnknownDocument())return pe();r.unknownDocument={path:t.path.toArray(),version:Co(e.version)}}return r}function jm(n){const e=n.toTimestamp();return[e.seconds,e.nanoseconds]}function Co(n){const e=n.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function Do(n){const e=new gt(n.seconds,n.nanoseconds);return Te.fromTimestamp(e)}function uo(n,e){const t=(e.baseMutations||[]).map(o=>Jy(n.Tt,o));for(let o=0;o<e.mutations.length-1;++o){const u=e.mutations[o];if(o+1<e.mutations.length&&e.mutations[o+1].transform!==void 0){const h=e.mutations[o+1];u.updateTransforms=h.transform.fieldTransforms,e.mutations.splice(o+1,1),++o}}const r=e.mutations.map(o=>Jy(n.Tt,o)),a=gt.fromMillis(e.localWriteTimeMs);return new sE(e.batchId,a,t,r)}function mh(n){const e=Do(n.readTime),t=n.lastLimboFreeSnapshotVersion!==void 0?Do(n.lastLimboFreeSnapshotVersion):Te.min();let r;return r=function(o){return o.documents!==void 0}(n.query)?function(o){return ve(o.documents.length===1),Vn(ku(a1(o.documents[0])))}(n.query):function(o){return Vn(h1(o))}(n.query),new Hi(r,n.targetId,"TargetPurposeListen",n.lastListenSequenceNumber,e,t,Dt.fromBase64String(n.resumeToken))}function g1(n,e){const t=Co(e.snapshotVersion),r=Co(e.lastLimboFreeSnapshotVersion);let a;a=zm(e.target)?u1(n.Tt,e.target):c1(n.Tt,e.target).ht;const o=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:Ao(e.target),readTime:t,resumeToken:o,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:a}}function cE(n){const e=h1({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?qm(e,e.limit,"L"):e}function dy(n,e){return new oE(e.largestBatchId,Jy(n.Tt,e.overlayMutation))}function LI(n,e){const t=e.path.lastSegment();return[n,An(e.path.popLast()),t]}function UI(n,e,t,r){return{indexId:n,uid:e,sequenceNumber:t,readTime:Co(r.readTime),documentKey:An(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IM{getBundleMetadata(e,t){return BI(e).get(t).next(r=>{if(r)return function(o){return{id:o.bundleId,createTime:Do(o.createTime),version:o.version}}(r)})}saveBundleMetadata(e,t){return BI(e).put(function(a){return{bundleId:a.id,createTime:Co(Mt(a.createTime)),version:a.version}}(t))}getNamedQuery(e,t){return zI(e).get(t).next(r=>{if(r)return function(o){return{name:o.name,query:cE(o.bundledQuery),readTime:Do(o.readTime)}}(r)})}saveNamedQuery(e,t){return zI(e).put(function(a){return{name:a.name,readTime:Co(Mt(a.readTime)),bundledQuery:a.bundledQuery}}(t))}}function BI(n){return Zt(n,fp)}function zI(n){return Zt(n,mp)}/**
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
 */class Tp{constructor(e,t){this.serializer=e,this.userId=t}static It(e,t){const r=t.uid||"";return new Tp(e,r)}getOverlay(e,t){return th(e).get(LI(this.userId,t)).next(r=>r?dy(this.serializer,r):null)}getOverlays(e,t){const r=si();return q.forEach(t,a=>this.getOverlay(e,a).next(o=>{o!==null&&r.set(a,o)})).next(()=>r)}saveOverlays(e,t,r){const a=[];return r.forEach((o,u)=>{const h=new oE(t,u);a.push(this.Et(e,h))}),q.waitFor(a)}removeOverlaysForBatchId(e,t,r){const a=new Set;t.forEach(u=>a.add(An(u.getCollectionPath())));const o=[];return a.forEach(u=>{const h=IDBKeyRange.bound([this.userId,u,r],[this.userId,u,r+1],!1,!0);o.push(th(e).J(Fy,h))}),q.waitFor(o)}getOverlaysForCollection(e,t,r){const a=si(),o=An(t),u=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,Number.POSITIVE_INFINITY],!0);return th(e).G(Fy,u).next(h=>{for(const f of h){const p=dy(this.serializer,f);a.set(p.getKey(),p)}return a})}getOverlaysForCollectionGroup(e,t,r,a){const o=si();let u;const h=IDBKeyRange.bound([this.userId,t,r],[this.userId,t,Number.POSITIVE_INFINITY],!0);return th(e).Z({index:_R,range:h},(f,p,y)=>{const v=dy(this.serializer,p);o.size()<a||v.largestBatchId===u?(o.set(v.getKey(),v),u=v.largestBatchId):y.done()}).next(()=>o)}Et(e,t){return th(e).put(function(a,o,u){const[h,f,p]=LI(o,u.mutation.key);return{userId:o,collectionPath:f,documentId:p,collectionGroup:u.mutation.key.getCollectionGroup(),largestBatchId:u.largestBatchId,overlayMutation:Hh(a.Tt,u.mutation)}}(this.serializer,this.userId,t))}}function th(n){return Zt(n,pp)}/**
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
 */class AM{dt(e){return Zt(e,Yv)}getSessionToken(e){return this.dt(e).get("sessionToken").next(t=>{const r=t==null?void 0:t.value;return r?Dt.fromUint8Array(r):Dt.EMPTY_BYTE_STRING})}setSessionToken(e,t){return this.dt(e).put({name:"sessionToken",value:t.toUint8Array()})}}/**
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
 */class co{constructor(){}At(e,t){this.Rt(e,t),t.Vt()}Rt(e,t){if("nullValue"in e)this.ft(t,5);else if("booleanValue"in e)this.ft(t,10),t.gt(e.booleanValue?1:0);else if("integerValue"in e)this.ft(t,15),t.gt(dt(e.integerValue));else if("doubleValue"in e){const r=dt(e.doubleValue);isNaN(r)?this.ft(t,13):(this.ft(t,15),Vh(r)?t.gt(0):t.gt(r))}else if("timestampValue"in e){let r=e.timestampValue;this.ft(t,20),typeof r=="string"&&(r=Xi(r)),t.yt(`${r.seconds||""}`),t.gt(r.nanos||0)}else if("stringValue"in e)this.wt(e.stringValue,t),this.St(t);else if("bytesValue"in e)this.ft(t,30),t.bt(Zi(e.bytesValue)),this.St(t);else if("referenceValue"in e)this.Dt(e.referenceValue,t);else if("geoPointValue"in e){const r=e.geoPointValue;this.ft(t,45),t.gt(r.latitude||0),t.gt(r.longitude||0)}else"mapValue"in e?CR(e)?this.ft(t,Number.MAX_SAFE_INTEGER):yp(e)?this.vt(e.mapValue,t):(this.Ct(e.mapValue,t),this.St(t)):"arrayValue"in e?(this.Ft(e.arrayValue,t),this.St(t)):pe()}wt(e,t){this.ft(t,25),this.Mt(e,t)}Mt(e,t){t.yt(e)}Ct(e,t){const r=e.fields||{};this.ft(t,55);for(const a of Object.keys(r))this.wt(a,t),this.Rt(r[a],t)}vt(e,t){var r,a;const o=e.fields||{};this.ft(t,53);const u=cu,h=((a=(r=o[u].arrayValue)===null||r===void 0?void 0:r.values)===null||a===void 0?void 0:a.length)||0;this.ft(t,15),t.gt(dt(h)),this.wt(u,t),this.Rt(o[u],t)}Ft(e,t){const r=e.values||[];this.ft(t,50);for(const a of r)this.Rt(a,t)}Dt(e,t){this.ft(t,37),ce.fromName(e).path.forEach(r=>{this.ft(t,60),this.Mt(r,t)})}ft(e,t){e.gt(t)}St(e){e.gt(2)}}co.xt=new co;/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law | agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES | CONDITIONS OF ANY KIND, either express | implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vl=255;function SM(n){if(n===0)return 8;let e=0;return n>>4||(e+=4,n<<=4),n>>6||(e+=2,n<<=2),n>>7||(e+=1),e}function FI(n){const e=64-function(r){let a=0;for(let o=0;o<8;++o){const u=SM(255&r[o]);if(a+=u,u!==8)break}return a}(n);return Math.ceil(e/8)}class RM{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Ot(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.Nt(r.value),r=t.next();this.Bt()}Lt(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.kt(r.value),r=t.next();this.qt()}Qt(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.Nt(r);else if(r<2048)this.Nt(960|r>>>6),this.Nt(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.Nt(480|r>>>12),this.Nt(128|63&r>>>6),this.Nt(128|63&r);else{const a=t.codePointAt(0);this.Nt(240|a>>>18),this.Nt(128|63&a>>>12),this.Nt(128|63&a>>>6),this.Nt(128|63&a)}}this.Bt()}$t(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.kt(r);else if(r<2048)this.kt(960|r>>>6),this.kt(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.kt(480|r>>>12),this.kt(128|63&r>>>6),this.kt(128|63&r);else{const a=t.codePointAt(0);this.kt(240|a>>>18),this.kt(128|63&a>>>12),this.kt(128|63&a>>>6),this.kt(128|63&a)}}this.qt()}Ut(e){const t=this.Kt(e),r=FI(t);this.Wt(1+r),this.buffer[this.position++]=255&r;for(let a=t.length-r;a<t.length;++a)this.buffer[this.position++]=255&t[a]}Gt(e){const t=this.Kt(e),r=FI(t);this.Wt(1+r),this.buffer[this.position++]=~(255&r);for(let a=t.length-r;a<t.length;++a)this.buffer[this.position++]=~(255&t[a])}zt(){this.jt(Vl),this.jt(255)}Ht(){this.Jt(Vl),this.Jt(255)}reset(){this.position=0}seed(e){this.Wt(e.length),this.buffer.set(e,this.position),this.position+=e.length}Yt(){return this.buffer.slice(0,this.position)}Kt(e){const t=function(o){const u=new DataView(new ArrayBuffer(8));return u.setFloat64(0,o,!1),new Uint8Array(u.buffer)}(e),r=!!(128&t[0]);t[0]^=r?255:128;for(let a=1;a<t.length;++a)t[a]^=r?255:0;return t}Nt(e){const t=255&e;t===0?(this.jt(0),this.jt(255)):t===Vl?(this.jt(Vl),this.jt(0)):this.jt(t)}kt(e){const t=255&e;t===0?(this.Jt(0),this.Jt(255)):t===Vl?(this.Jt(Vl),this.Jt(0)):this.Jt(e)}Bt(){this.jt(0),this.jt(1)}qt(){this.Jt(0),this.Jt(1)}jt(e){this.Wt(1),this.buffer[this.position++]=e}Jt(e){this.Wt(1),this.buffer[this.position++]=~e}Wt(e){const t=e+this.position;if(t<=this.buffer.length)return;let r=2*this.buffer.length;r<t&&(r=t);const a=new Uint8Array(r);a.set(this.buffer),this.buffer=a}}class CM{constructor(e){this.Zt=e}bt(e){this.Zt.Ot(e)}yt(e){this.Zt.Qt(e)}gt(e){this.Zt.Ut(e)}Vt(){this.Zt.zt()}}class DM{constructor(e){this.Zt=e}bt(e){this.Zt.Lt(e)}yt(e){this.Zt.$t(e)}gt(e){this.Zt.Gt(e)}Vt(){this.Zt.Ht()}}class nh{constructor(){this.Zt=new RM,this.Xt=new CM(this.Zt),this.en=new DM(this.Zt)}seed(e){this.Zt.seed(e)}tn(e){return e===0?this.Xt:this.en}Yt(){return this.Zt.Yt()}reset(){this.Zt.reset()}}/**
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
 */class ho{constructor(e,t,r,a){this.indexId=e,this.documentKey=t,this.arrayValue=r,this.directionalValue=a}nn(){const e=this.directionalValue.length,t=e===0||this.directionalValue[e-1]===255?e+1:e,r=new Uint8Array(t);return r.set(this.directionalValue,0),t!==e?r.set([0],this.directionalValue.length):++r[r.length-1],new ho(this.indexId,this.documentKey,this.arrayValue,r)}}function Gs(n,e){let t=n.indexId-e.indexId;return t!==0?t:(t=qI(n.arrayValue,e.arrayValue),t!==0?t:(t=qI(n.directionalValue,e.directionalValue),t!==0?t:ce.comparator(n.documentKey,e.documentKey)))}function qI(n,e){for(let t=0;t<n.length&&t<e.length;++t){const r=n[t]-e[t];if(r!==0)return r}return n.length-e.length}/**
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
 */class jI{constructor(e){this.rn=new nt((t,r)=>mt.comparator(t.field,r.field)),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.sn=e.orderBy,this._n=[];for(const t of e.filters){const r=t;r.isInequality()?this.rn=this.rn.add(r):this._n.push(r)}}get an(){return this.rn.size>1}un(e){if(ve(e.collectionGroup===this.collectionId),this.an)return!1;const t=Uy(e);if(t!==void 0&&!this.cn(t))return!1;const r=ao(e);let a=new Set,o=0,u=0;for(;o<r.length&&this.cn(r[o]);++o)a=a.add(r[o].fieldPath.canonicalString());if(o===r.length)return!0;if(this.rn.size>0){const h=this.rn.getIterator().getNext();if(!a.has(h.field.canonicalString())){const f=r[o];if(!this.ln(h,f)||!this.hn(this.sn[u++],f))return!1}++o}for(;o<r.length;++o){const h=r[o];if(u>=this.sn.length||!this.hn(this.sn[u++],h))return!1}return!0}Pn(){if(this.an)return null;let e=new nt(mt.comparator);const t=[];for(const r of this._n)if(!r.field.isKeyField())if(r.op==="array-contains"||r.op==="array-contains-any")t.push(new dm(r.field,2));else{if(e.has(r.field))continue;e=e.add(r.field),t.push(new dm(r.field,0))}for(const r of this.sn)r.field.isKeyField()||e.has(r.field)||(e=e.add(r.field),t.push(new dm(r.field,r.dir==="asc"?0:1)));return new km(km.UNKNOWN_ID,this.collectionId,t,kh.empty())}cn(e){for(const t of this._n)if(this.ln(t,e))return!0;return!1}ln(e,t){if(e===void 0||!e.field.isEqual(t.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return t.kind===2===r}hn(e,t){return!!e.field.isEqual(t.fieldPath)&&(t.kind===0&&e.dir==="asc"||t.kind===1&&e.dir==="desc")}}/**
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
 */function _1(n){var e,t;if(ve(n instanceof Fe||n instanceof tt),n instanceof Fe){if(n instanceof LR){const a=((t=(e=n.value.arrayValue)===null||e===void 0?void 0:e.values)===null||t===void 0?void 0:t.map(o=>Fe.create(n.field,"==",o)))||[];return tt.create(a,"or")}return n}const r=n.filters.map(a=>_1(a));return tt.create(r,n.op)}function PM(n){if(n.getFilters().length===0)return[];const e=nv(_1(n));return ve(y1(e)),ev(e)||tv(e)?[e]:e.getFilters()}function ev(n){return n instanceof Fe}function tv(n){return n instanceof tt&&eE(n)}function y1(n){return ev(n)||tv(n)||function(t){if(t instanceof tt&&$y(t)){for(const r of t.getFilters())if(!ev(r)&&!tv(r))return!1;return!0}return!1}(n)}function nv(n){if(ve(n instanceof Fe||n instanceof tt),n instanceof Fe)return n;if(n.filters.length===1)return nv(n.filters[0]);const e=n.filters.map(r=>nv(r));let t=tt.create(e,n.op);return t=Hm(t),y1(t)?t:(ve(t instanceof tt),ve(du(t)),ve(t.filters.length>1),t.filters.reduce((r,a)=>hE(r,a)))}function hE(n,e){let t;return ve(n instanceof Fe||n instanceof tt),ve(e instanceof Fe||e instanceof tt),t=n instanceof Fe?e instanceof Fe?function(a,o){return tt.create([a,o],"and")}(n,e):HI(n,e):e instanceof Fe?HI(e,n):function(a,o){if(ve(a.filters.length>0&&o.filters.length>0),du(a)&&du(o))return kR(a,o.getFilters());const u=$y(a)?a:o,h=$y(a)?o:a,f=u.filters.map(p=>hE(p,h));return tt.create(f,"or")}(n,e),Hm(t)}function HI(n,e){if(du(e))return kR(e,n.getFilters());{const t=e.filters.map(r=>hE(n,r));return tt.create(t,"or")}}function Hm(n){if(ve(n instanceof Fe||n instanceof tt),n instanceof Fe)return n;const e=n.getFilters();if(e.length===1)return Hm(e[0]);if(NR(n))return n;const t=e.map(a=>Hm(a)),r=[];return t.forEach(a=>{a instanceof Fe?r.push(a):a instanceof tt&&(a.op===n.op?r.push(...a.filters):r.push(a))}),r.length===1?r[0]:tt.create(r,n.op)}/**
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
 */class xM{constructor(){this.Tn=new dE}addToCollectionParentIndex(e,t){return this.Tn.add(t),q.resolve()}getCollectionParents(e,t){return q.resolve(this.Tn.getEntries(t))}addFieldIndex(e,t){return q.resolve()}deleteFieldIndex(e,t){return q.resolve()}deleteAllFieldIndexes(e){return q.resolve()}createTargetIndexes(e,t){return q.resolve()}getDocumentsMatchingTarget(e,t){return q.resolve(null)}getIndexType(e,t){return q.resolve(0)}getFieldIndexes(e,t){return q.resolve([])}getNextCollectionGroupToUpdate(e){return q.resolve(null)}getMinOffset(e,t){return q.resolve(nr.min())}getMinOffsetFromCollectionGroup(e,t){return q.resolve(nr.min())}updateCollectionGroup(e,t,r){return q.resolve()}updateIndexEntries(e,t){return q.resolve()}}class dE{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),a=this.index[t]||new nt(ze.comparator),o=!a.has(r);return this.index[t]=a.add(r),o}has(e){const t=e.lastSegment(),r=e.popLast(),a=this.index[t];return a&&a.has(r)}getEntries(e){return(this.index[e]||new nt(ze.comparator)).toArray()}}/**
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
 */const GI="IndexedDbIndexManager",tm=new Uint8Array(0);class NM{constructor(e,t){this.databaseId=t,this.In=new dE,this.En=new rs(r=>Ao(r),(r,a)=>ld(r,a)),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.In.has(t)){const r=t.lastSegment(),a=t.popLast();e.addOnCommittedListener(()=>{this.In.add(t)});const o={collectionId:r,parent:An(a)};return $I(e).put(o)}return q.resolve()}getCollectionParents(e,t){const r=[],a=IDBKeyRange.bound([t,""],[sR(t),""],!1,!0);return $I(e).G(a).next(o=>{for(const u of o){if(u.collectionId!==t)break;r.push(ii(u.parent))}return r})}addFieldIndex(e,t){const r=rh(e),a=function(h){return{indexId:h.indexId,collectionGroup:h.collectionGroup,fields:h.fields.map(f=>[f.fieldPath.canonicalString(),f.kind])}}(t);delete a.indexId;const o=r.add(a);if(t.indexState){const u=Ll(e);return o.next(h=>{u.put(UI(h,this.uid,t.indexState.sequenceNumber,t.indexState.offset))})}return o.next()}deleteFieldIndex(e,t){const r=rh(e),a=Ll(e),o=Ml(e);return r.delete(t.indexId).next(()=>a.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>o.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}deleteAllFieldIndexes(e){const t=rh(e),r=Ml(e),a=Ll(e);return t.J().next(()=>r.J()).next(()=>a.J())}createTargetIndexes(e,t){return q.forEach(this.dn(t),r=>this.getIndexType(e,r).next(a=>{if(a===0||a===1){const o=new jI(r).Pn();if(o!=null)return this.addFieldIndex(e,o)}}))}getDocumentsMatchingTarget(e,t){const r=Ml(e);let a=!0;const o=new Map;return q.forEach(this.dn(t),u=>this.An(e,u).next(h=>{a&&(a=!!h),o.set(u,h)})).next(()=>{if(a){let u=xe();const h=[];return q.forEach(o,(f,p)=>{re(GI,`Using index ${function($){return`id=${$.indexId}|cg=${$.collectionGroup}|f=${$.fields.map(oe=>`${oe.fieldPath}:${oe.kind}`).join(",")}`}(f)} to execute ${Ao(t)}`);const y=function($,oe){const ae=Uy(oe);if(ae===void 0)return null;for(const le of Fm($,ae.fieldPath))switch(le.op){case"array-contains-any":return le.value.arrayValue.values||[];case"array-contains":return[le.value]}return null}(p,f),v=function($,oe){const ae=new Map;for(const le of ao(oe))for(const D of Fm($,le.fieldPath))switch(D.op){case"==":case"in":ae.set(le.fieldPath.canonicalString(),D.value);break;case"not-in":case"!=":return ae.set(le.fieldPath.canonicalString(),D.value),Array.from(ae.values())}return null}(p,f),w=function($,oe){const ae=[];let le=!0;for(const D of ao(oe)){const R=D.kind===0?II($,D.fieldPath,$.startAt):AI($,D.fieldPath,$.startAt);ae.push(R.value),le&&(le=R.inclusive)}return new ma(ae,le)}(p,f),S=function($,oe){const ae=[];let le=!0;for(const D of ao(oe)){const R=D.kind===0?AI($,D.fieldPath,$.endAt):II($,D.fieldPath,$.endAt);ae.push(R.value),le&&(le=R.inclusive)}return new ma(ae,le)}(p,f),P=this.Rn(f,p,w),U=this.Rn(f,p,S),L=this.Vn(f,p,v),H=this.mn(f.indexId,y,P,w.inclusive,U,S.inclusive,L);return q.forEach(H,Y=>r.H(Y,t.limit).next($=>{$.forEach(oe=>{const ae=ce.fromSegments(oe.documentKey);u.has(ae)||(u=u.add(ae),h.push(ae))})}))}).next(()=>h)}return q.resolve(null)})}dn(e){let t=this.En.get(e);return t||(e.filters.length===0?t=[e]:t=PM(tt.create(e.filters,"and")).map(r=>Qy(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt)),this.En.set(e,t),t)}mn(e,t,r,a,o,u,h){const f=(t!=null?t.length:1)*Math.max(r.length,o.length),p=f/(t!=null?t.length:1),y=[];for(let v=0;v<f;++v){const w=t?this.fn(t[v/p]):tm,S=this.gn(e,w,r[v%p],a),P=this.pn(e,w,o[v%p],u),U=h.map(L=>this.gn(e,w,L,!0));y.push(...this.createRange(S,P,U))}return y}gn(e,t,r,a){const o=new ho(e,ce.empty(),t,r);return a?o:o.nn()}pn(e,t,r,a){const o=new ho(e,ce.empty(),t,r);return a?o.nn():o}An(e,t){const r=new jI(t),a=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,a).next(o=>{let u=null;for(const h of o)r.un(h)&&(!u||h.fields.length>u.fields.length)&&(u=h);return u})}getIndexType(e,t){let r=2;const a=this.dn(t);return q.forEach(a,o=>this.An(e,o).next(u=>{u?r!==0&&u.fields.length<function(f){let p=new nt(mt.comparator),y=!1;for(const v of f.filters)for(const w of v.getFlattenedFilters())w.field.isKeyField()||(w.op==="array-contains"||w.op==="array-contains-any"?y=!0:p=p.add(w.field));for(const v of f.orderBy)v.field.isKeyField()||(p=p.add(v.field));return p.size+(y?1:0)}(o)&&(r=1):r=0})).next(()=>function(u){return u.limit!==null}(t)&&a.length>1&&r===2?1:r)}yn(e,t){const r=new nh;for(const a of ao(e)){const o=t.data.field(a.fieldPath);if(o==null)return null;const u=r.tn(a.kind);co.xt.At(o,u)}return r.Yt()}fn(e){const t=new nh;return co.xt.At(e,t.tn(0)),t.Yt()}wn(e,t){const r=new nh;return co.xt.At(Io(this.databaseId,t),r.tn(function(o){const u=ao(o);return u.length===0?0:u[u.length-1].kind}(e))),r.Yt()}Vn(e,t,r){if(r===null)return[];let a=[];a.push(new nh);let o=0;for(const u of ao(e)){const h=r[o++];for(const f of a)if(this.Sn(t,u.fieldPath)&&Fh(h))a=this.bn(a,u,h);else{const p=f.tn(u.kind);co.xt.At(h,p)}}return this.Dn(a)}Rn(e,t,r){return this.Vn(e,t,r.position)}Dn(e){const t=[];for(let r=0;r<e.length;++r)t[r]=e[r].Yt();return t}bn(e,t,r){const a=[...e],o=[];for(const u of r.arrayValue.values||[])for(const h of a){const f=new nh;f.seed(h.Yt()),co.xt.At(u,f.tn(t.kind)),o.push(f)}return o}Sn(e,t){return!!e.filters.find(r=>r instanceof Fe&&r.field.isEqual(t)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,t){const r=rh(e),a=Ll(e);return(t?r.G(zy,IDBKeyRange.bound(t,t)):r.G()).next(o=>{const u=[];return q.forEach(o,h=>a.get([h.indexId,this.uid]).next(f=>{u.push(function(y,v){const w=v?new kh(v.sequenceNumber,new nr(Do(v.readTime),new ce(ii(v.documentKey)),v.largestBatchId)):kh.empty(),S=y.fields.map(([P,U])=>new dm(mt.fromServerFormat(P),U));return new km(y.indexId,y.collectionGroup,S,w)}(h,f))})).next(()=>u)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(t=>t.length===0?null:(t.sort((r,a)=>{const o=r.indexState.sequenceNumber-a.indexState.sequenceNumber;return o!==0?o:Re(r.collectionGroup,a.collectionGroup)}),t[0].collectionGroup))}updateCollectionGroup(e,t,r){const a=rh(e),o=Ll(e);return this.vn(e).next(u=>a.G(zy,IDBKeyRange.bound(t,t)).next(h=>q.forEach(h,f=>o.put(UI(f.indexId,this.uid,u,r)))))}updateIndexEntries(e,t){const r=new Map;return q.forEach(t,(a,o)=>{const u=r.get(a.collectionGroup);return(u?q.resolve(u):this.getFieldIndexes(e,a.collectionGroup)).next(h=>(r.set(a.collectionGroup,h),q.forEach(h,f=>this.Cn(e,a,f).next(p=>{const y=this.Fn(o,f);return p.isEqual(y)?q.resolve():this.Mn(e,o,f,p,y)}))))})}xn(e,t,r,a){return Ml(e).put({indexId:a.indexId,uid:this.uid,arrayValue:a.arrayValue,directionalValue:a.directionalValue,orderedDocumentKey:this.wn(r,t.key),documentKey:t.key.path.toArray()})}On(e,t,r,a){return Ml(e).delete([a.indexId,this.uid,a.arrayValue,a.directionalValue,this.wn(r,t.key),t.key.path.toArray()])}Cn(e,t,r){const a=Ml(e);let o=new nt(Gs);return a.Z({index:gR,range:IDBKeyRange.only([r.indexId,this.uid,this.wn(r,t)])},(u,h)=>{o=o.add(new ho(r.indexId,t,h.arrayValue,h.directionalValue))}).next(()=>o)}Fn(e,t){let r=new nt(Gs);const a=this.yn(t,e);if(a==null)return r;const o=Uy(t);if(o!=null){const u=e.data.field(o.fieldPath);if(Fh(u))for(const h of u.arrayValue.values||[])r=r.add(new ho(t.indexId,e.key,this.fn(h),a))}else r=r.add(new ho(t.indexId,e.key,tm,a));return r}Mn(e,t,r,a,o){re(GI,"Updating index entries for document '%s'",t.key);const u=[];return function(f,p,y,v,w){const S=f.getIterator(),P=p.getIterator();let U=kl(S),L=kl(P);for(;U||L;){let H=!1,Y=!1;if(U&&L){const $=y(U,L);$<0?Y=!0:$>0&&(H=!0)}else U!=null?Y=!0:H=!0;H?(v(L),L=kl(P)):Y?(w(U),U=kl(S)):(U=kl(S),L=kl(P))}}(a,o,Gs,h=>{u.push(this.xn(e,t,r,h))},h=>{u.push(this.On(e,t,r,h))}),q.waitFor(u)}vn(e){let t=1;return Ll(e).Z({index:pR,reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,a,o)=>{o.done(),t=a.sequenceNumber+1}).next(()=>t)}createRange(e,t,r){r=r.sort((u,h)=>Gs(u,h)).filter((u,h,f)=>!h||Gs(u,f[h-1])!==0);const a=[];a.push(e);for(const u of r){const h=Gs(u,e),f=Gs(u,t);if(h===0)a[0]=e.nn();else if(h>0&&f<0)a.push(u),a.push(u.nn());else if(f>0)break}a.push(t);const o=[];for(let u=0;u<a.length;u+=2){if(this.Nn(a[u],a[u+1]))return[];const h=[a[u].indexId,this.uid,a[u].arrayValue,a[u].directionalValue,tm,[]],f=[a[u+1].indexId,this.uid,a[u+1].arrayValue,a[u+1].directionalValue,tm,[]];o.push(IDBKeyRange.bound(h,f))}return o}Nn(e,t){return Gs(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(KI)}getMinOffset(e,t){return q.mapArray(this.dn(t),r=>this.An(e,r).next(a=>a||pe())).next(KI)}}function $I(n){return Zt(n,Uh)}function Ml(n){return Zt(n,Bm)}function rh(n){return Zt(n,Wv)}function Ll(n){return Zt(n,Um)}function KI(n){ve(n.length!==0);let e=n[0].indexState.offset,t=e.largestBatchId;for(let r=1;r<n.length;r++){const a=n[r].indexState.offset;$v(a,e)<0&&(e=a),t<a.largestBatchId&&(t=a.largestBatchId)}return new nr(e.readTime,e.documentKey,t)}/**
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
 */const QI={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},v1=41943040;class In{static withCacheSize(e){return new In(e,In.DEFAULT_COLLECTION_PERCENTILE,In.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E1(n,e,t){const r=n.store(Pr),a=n.store(au),o=[],u=IDBKeyRange.only(t.batchId);let h=0;const f=r.Z({range:u},(y,v,w)=>(h++,w.delete()));o.push(f.next(()=>{ve(h===1)}));const p=[];for(const y of t.mutations){const v=dR(e,y.key.path,t.batchId);o.push(a.delete(v)),p.push(y.key)}return q.waitFor(o).next(()=>p)}function Gm(n){if(!n)return 0;let e;if(n.document)e=n.document;else if(n.unknownDocument)e=n.unknownDocument;else{if(!n.noDocument)throw pe();e=n.noDocument}return JSON.stringify(e).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */In.DEFAULT_COLLECTION_PERCENTILE=10,In.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,In.DEFAULT=new In(v1,In.DEFAULT_COLLECTION_PERCENTILE,In.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),In.DISABLED=new In(-1,0,0);class wp{constructor(e,t,r,a){this.userId=e,this.serializer=t,this.indexManager=r,this.referenceDelegate=a,this.Bn={}}static It(e,t,r,a){ve(e.uid!=="");const o=e.isAuthenticated()?e.uid:"";return new wp(o,t,r,a)}checkEmpty(e){let t=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return $s(e).Z({index:mo,range:r},(a,o,u)=>{t=!1,u.done()}).next(()=>t)}addMutationBatch(e,t,r,a){const o=Gl(e),u=$s(e);return u.add({}).next(h=>{ve(typeof h=="number");const f=new sE(h,t,r,a),p=function(S,P,U){const L=U.baseMutations.map(Y=>Hh(S.Tt,Y)),H=U.mutations.map(Y=>Hh(S.Tt,Y));return{userId:P,batchId:U.batchId,localWriteTimeMs:U.localWriteTime.toMillis(),baseMutations:L,mutations:H}}(this.serializer,this.userId,f),y=[];let v=new nt((w,S)=>Re(w.canonicalString(),S.canonicalString()));for(const w of a){const S=dR(this.userId,w.key.path,h);v=v.add(w.key.path.popLast()),y.push(u.put(p)),y.push(o.put(S,dV))}return v.forEach(w=>{y.push(this.indexManager.addToCollectionParentIndex(e,w))}),e.addOnCommittedListener(()=>{this.Bn[h]=f.keys()}),q.waitFor(y).next(()=>f)})}lookupMutationBatch(e,t){return $s(e).get(t).next(r=>r?(ve(r.userId===this.userId),uo(this.serializer,r)):null)}Ln(e,t){return this.Bn[t]?q.resolve(this.Bn[t]):this.lookupMutationBatch(e,t).next(r=>{if(r){const a=r.keys();return this.Bn[t]=a,a}return null})}getNextMutationBatchAfterBatchId(e,t){const r=t+1,a=IDBKeyRange.lowerBound([this.userId,r]);let o=null;return $s(e).Z({index:mo,range:a},(u,h,f)=>{h.userId===this.userId&&(ve(h.batchId>=r),o=uo(this.serializer,h)),f.done()}).next(()=>o)}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=ra;return $s(e).Z({index:mo,range:t,reverse:!0},(a,o,u)=>{r=o.batchId,u.done()}).next(()=>r)}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,ra],[this.userId,Number.POSITIVE_INFINITY]);return $s(e).G(mo,t).next(r=>r.map(a=>uo(this.serializer,a)))}getAllMutationBatchesAffectingDocumentKey(e,t){const r=fm(this.userId,t.path),a=IDBKeyRange.lowerBound(r),o=[];return Gl(e).Z({range:a},(u,h,f)=>{const[p,y,v]=u,w=ii(y);if(p===this.userId&&t.path.isEqual(w))return $s(e).get(v).next(S=>{if(!S)throw pe();ve(S.userId===this.userId),o.push(uo(this.serializer,S))});f.done()}).next(()=>o)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new nt(Re);const a=[];return t.forEach(o=>{const u=fm(this.userId,o.path),h=IDBKeyRange.lowerBound(u),f=Gl(e).Z({range:h},(p,y,v)=>{const[w,S,P]=p,U=ii(S);w===this.userId&&o.path.isEqual(U)?r=r.add(P):v.done()});a.push(f)}),q.waitFor(a).next(()=>this.kn(e,r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,a=r.length+1,o=fm(this.userId,r),u=IDBKeyRange.lowerBound(o);let h=new nt(Re);return Gl(e).Z({range:u},(f,p,y)=>{const[v,w,S]=f,P=ii(w);v===this.userId&&r.isPrefixOf(P)?P.length===a&&(h=h.add(S)):y.done()}).next(()=>this.kn(e,h))}kn(e,t){const r=[],a=[];return t.forEach(o=>{a.push($s(e).get(o).next(u=>{if(u===null)throw pe();ve(u.userId===this.userId),r.push(uo(this.serializer,u))}))}),q.waitFor(a).next(()=>r)}removeMutationBatch(e,t){return E1(e.ue,this.userId,t).next(r=>(e.addOnCommittedListener(()=>{this.qn(t.batchId)}),q.forEach(r,a=>this.referenceDelegate.markPotentiallyOrphaned(e,a))))}qn(e){delete this.Bn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return q.resolve();const r=IDBKeyRange.lowerBound(function(u){return[u]}(this.userId)),a=[];return Gl(e).Z({range:r},(o,u,h)=>{if(o[0]===this.userId){const f=ii(o[1]);a.push(f)}else h.done()}).next(()=>{ve(a.length===0)})})}containsKey(e,t){return T1(e,this.userId,t)}Qn(e){return w1(e).get(this.userId).next(t=>t||{userId:this.userId,lastAcknowledgedBatchId:ra,lastStreamToken:""})}}function T1(n,e,t){const r=fm(e,t.path),a=r[1],o=IDBKeyRange.lowerBound(r);let u=!1;return Gl(n).Z({range:o,Y:!0},(h,f,p)=>{const[y,v,w]=h;y===e&&v===a&&(u=!0),p.done()}).next(()=>u)}function $s(n){return Zt(n,Pr)}function Gl(n){return Zt(n,au)}function w1(n){return Zt(n,Mh)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Po{constructor(e){this.$n=e}next(){return this.$n+=2,this.$n}static Un(){return new Po(0)}static Kn(){return new Po(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OM{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.Wn(e).next(t=>{const r=new Po(t.highestTargetId);return t.highestTargetId=r.next(),this.Gn(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.Wn(e).next(t=>Te.fromTimestamp(new gt(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.Wn(e).next(t=>t.highestListenSequenceNumber)}setTargetsMetadata(e,t,r){return this.Wn(e).next(a=>(a.highestListenSequenceNumber=t,r&&(a.lastRemoteSnapshotVersion=r.toTimestamp()),t>a.highestListenSequenceNumber&&(a.highestListenSequenceNumber=t),this.Gn(e,a)))}addTargetData(e,t){return this.zn(e,t).next(()=>this.Wn(e).next(r=>(r.targetCount+=1,this.jn(t,r),this.Gn(e,r))))}updateTargetData(e,t){return this.zn(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>Ul(e).delete(t.targetId)).next(()=>this.Wn(e)).next(r=>(ve(r.targetCount>0),r.targetCount-=1,this.Gn(e,r)))}removeTargets(e,t,r){let a=0;const o=[];return Ul(e).Z((u,h)=>{const f=mh(h);f.sequenceNumber<=t&&r.get(f.targetId)===null&&(a++,o.push(this.removeTargetData(e,f)))}).next(()=>q.waitFor(o)).next(()=>a)}forEachTarget(e,t){return Ul(e).Z((r,a)=>{const o=mh(a);t(o)})}Wn(e){return WI(e).get(Lm).next(t=>(ve(t!==null),t))}Gn(e,t){return WI(e).put(Lm,t)}zn(e,t){return Ul(e).put(g1(this.serializer,t))}jn(e,t){let r=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,r=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.Wn(e).next(t=>t.targetCount)}getTargetData(e,t){const r=Ao(t),a=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let o=null;return Ul(e).Z({range:a,index:mR},(u,h,f)=>{const p=mh(h);ld(t,p.target)&&(o=p,f.done())}).next(()=>o)}addMatchingKeys(e,t,r){const a=[],o=Xs(e);return t.forEach(u=>{const h=An(u.path);a.push(o.put({targetId:r,path:h})),a.push(this.referenceDelegate.addReference(e,r,u))}),q.waitFor(a)}removeMatchingKeys(e,t,r){const a=Xs(e);return q.forEach(t,o=>{const u=An(o.path);return q.waitFor([a.delete([r,u]),this.referenceDelegate.removeReference(e,r,o)])})}removeMatchingKeysForTargetId(e,t){const r=Xs(e),a=IDBKeyRange.bound([t],[t+1],!1,!0);return r.delete(a)}getMatchingKeysForTargetId(e,t){const r=IDBKeyRange.bound([t],[t+1],!1,!0),a=Xs(e);let o=xe();return a.Z({range:r,Y:!0},(u,h,f)=>{const p=ii(u[1]),y=new ce(p);o=o.add(y)}).next(()=>o)}containsKey(e,t){const r=An(t.path),a=IDBKeyRange.bound([r],[sR(r)],!1,!0);let o=0;return Xs(e).Z({index:Qv,Y:!0,range:a},([u,h],f,p)=>{u!==0&&(o++,p.done())}).next(()=>o>0)}lt(e,t){return Ul(e).get(t).next(r=>r?mh(r):null)}}function Ul(n){return Zt(n,ou)}function WI(n){return Zt(n,vo)}function Xs(n){return Zt(n,lu)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YI="LruGarbageCollector",kM=1048576;function XI([n,e],[t,r]){const a=Re(n,t);return a===0?Re(e,r):a}class VM{constructor(e){this.Hn=e,this.buffer=new nt(XI),this.Jn=0}Yn(){return++this.Jn}Zn(e){const t=[e,this.Yn()];if(this.buffer.size<this.Hn)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();XI(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class b1{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Xn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.er(6e4)}stop(){this.Xn&&(this.Xn.cancel(),this.Xn=null)}get started(){return this.Xn!==null}er(e){re(YI,`Garbage collection scheduled in ${e}ms`),this.Xn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Xn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Ta(t)?re(YI,"Ignoring IndexedDB error during garbage collection: ",t):await Ea(t)}await this.er(3e5)})}}class MM{constructor(e,t){this.tr=e,this.params=t}calculateTargetCount(e,t){return this.tr.nr(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return q.resolve(Fn.ae);const r=new VM(t);return this.tr.forEachTarget(e,a=>r.Zn(a.sequenceNumber)).next(()=>this.tr.rr(e,a=>r.Zn(a))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.tr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.tr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(re("LruGarbageCollector","Garbage collection skipped; disabled"),q.resolve(QI)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(re("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),QI):this.ir(e,t))}getCacheSize(e){return this.tr.getCacheSize(e)}ir(e,t){let r,a,o,u,h,f,p;const y=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(v=>(v>this.params.maximumSequenceNumbersToCollect?(re("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${v}`),a=this.params.maximumSequenceNumbersToCollect):a=v,u=Date.now(),this.nthSequenceNumber(e,a))).next(v=>(r=v,h=Date.now(),this.removeTargets(e,r,t))).next(v=>(o=v,f=Date.now(),this.removeOrphanedDocuments(e,r))).next(v=>(p=Date.now(),Fl()<=Be.DEBUG&&re("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${u-y}ms
	Determined least recently used ${a} in `+(h-u)+`ms
	Removed ${o} targets in `+(f-h)+`ms
	Removed ${v} documents in `+(p-f)+`ms
Total Duration: ${p-y}ms`),q.resolve({didRun:!0,sequenceNumbersCollected:a,targetsRemoved:o,documentsRemoved:v})))}}function I1(n,e){return new MM(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LM{constructor(e,t){this.db=e,this.garbageCollector=I1(this,t)}nr(e){const t=this.sr(e);return this.db.getTargetCache().getTargetCount(e).next(r=>t.next(a=>r+a))}sr(e){let t=0;return this.rr(e,r=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}rr(e,t){return this._r(e,(r,a)=>t(a))}addReference(e,t,r){return nm(e,r)}removeReference(e,t,r){return nm(e,r)}removeTargets(e,t,r){return this.db.getTargetCache().removeTargets(e,t,r)}markPotentiallyOrphaned(e,t){return nm(e,t)}ar(e,t){return function(a,o){let u=!1;return w1(a).X(h=>T1(a,h,o).next(f=>(f&&(u=!0),q.resolve(!f)))).next(()=>u)}(e,t)}removeOrphanedDocuments(e,t){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),a=[];let o=0;return this._r(e,(u,h)=>{if(h<=t){const f=this.ar(e,u).next(p=>{if(!p)return o++,r.getEntry(e,u).next(()=>(r.removeEntry(u,Te.min()),Xs(e).delete(function(v){return[0,An(v.path)]}(u))))});a.push(f)}}).next(()=>q.waitFor(a)).next(()=>r.apply(e)).next(()=>o)}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,t){return nm(e,t)}_r(e,t){const r=Xs(e);let a,o=Fn.ae;return r.Z({index:Qv},([u,h],{path:f,sequenceNumber:p})=>{u===0?(o!==Fn.ae&&t(new ce(ii(a)),o),o=p,a=f):o=Fn.ae}).next(()=>{o!==Fn.ae&&t(new ce(ii(a)),o)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function nm(n,e){return Xs(n).put(function(r,a){return{targetId:0,path:An(r.path),sequenceNumber:a}}(e,n.currentSequenceNumber))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A1{constructor(){this.changes=new rs(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,ht.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?q.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UM{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,r){return io(e).put(r)}removeEntry(e,t,r){return io(e).delete(function(o,u){const h=o.path.toArray();return[h.slice(0,h.length-2),h[h.length-2],jm(u),h[h.length-1]]}(t,r))}updateMetadata(e,t){return this.getMetadata(e).next(r=>(r.byteSize+=t,this.ur(e,r)))}getEntry(e,t){let r=ht.newInvalidDocument(t);return io(e).Z({index:mm,range:IDBKeyRange.only(ih(t))},(a,o)=>{r=this.cr(t,o)}).next(()=>r)}lr(e,t){let r={size:0,document:ht.newInvalidDocument(t)};return io(e).Z({index:mm,range:IDBKeyRange.only(ih(t))},(a,o)=>{r={document:this.cr(t,o),size:Gm(o)}}).next(()=>r)}getEntries(e,t){let r=jn();return this.hr(e,t,(a,o)=>{const u=this.cr(a,o);r=r.insert(a,u)}).next(()=>r)}Pr(e,t){let r=jn(),a=new lt(ce.comparator);return this.hr(e,t,(o,u)=>{const h=this.cr(o,u);r=r.insert(o,h),a=a.insert(o,Gm(u))}).next(()=>({documents:r,Tr:a}))}hr(e,t,r){if(t.isEmpty())return q.resolve();let a=new nt(eA);t.forEach(f=>a=a.add(f));const o=IDBKeyRange.bound(ih(a.first()),ih(a.last())),u=a.getIterator();let h=u.getNext();return io(e).Z({index:mm,range:o},(f,p,y)=>{const v=ce.fromSegments([...p.prefixPath,p.collectionGroup,p.documentId]);for(;h&&eA(h,v)<0;)r(h,null),h=u.getNext();h&&h.isEqual(v)&&(r(h,p),h=u.hasNext()?u.getNext():null),h?y.W(ih(h)):y.done()}).next(()=>{for(;h;)r(h,null),h=u.hasNext()?u.getNext():null})}getDocumentsMatchingQuery(e,t,r,a,o){const u=t.path,h=[u.popLast().toArray(),u.lastSegment(),jm(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],f=[u.popLast().toArray(),u.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return io(e).G(IDBKeyRange.bound(h,f,!0)).next(p=>{o==null||o.incrementDocumentReadCount(p.length);let y=jn();for(const v of p){const w=this.cr(ce.fromSegments(v.prefixPath.concat(v.collectionGroup,v.documentId)),v);w.isFoundDocument()&&(cd(t,w)||a.has(w.key))&&(y=y.insert(w.key,w))}return y})}getAllFromCollectionGroup(e,t,r,a){let o=jn();const u=JI(t,r),h=JI(t,nr.max());return io(e).Z({index:fR,range:IDBKeyRange.bound(u,h,!0)},(f,p,y)=>{const v=this.cr(ce.fromSegments(p.prefixPath.concat(p.collectionGroup,p.documentId)),p);o=o.insert(v.key,v),o.size===a&&y.done()}).next(()=>o)}newChangeBuffer(e){return new BM(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(t=>t.byteSize)}getMetadata(e){return ZI(e).get(By).next(t=>(ve(!!t),t))}ur(e,t){return ZI(e).put(By,t)}cr(e,t){if(t){const r=bM(this.serializer,t);if(!(r.isNoDocument()&&r.version.isEqual(Te.min())))return r}return ht.newInvalidDocument(e)}}function S1(n){return new UM(n)}class BM extends A1{constructor(e,t){super(),this.Ir=e,this.trackRemovals=t,this.Er=new rs(r=>r.toString(),(r,a)=>r.isEqual(a))}applyChanges(e){const t=[];let r=0,a=new nt((o,u)=>Re(o.canonicalString(),u.canonicalString()));return this.changes.forEach((o,u)=>{const h=this.Er.get(o);if(t.push(this.Ir.removeEntry(e,o,h.readTime)),u.isValidDocument()){const f=MI(this.Ir.serializer,u);a=a.add(o.path.popLast());const p=Gm(f);r+=p-h.size,t.push(this.Ir.addEntry(e,o,f))}else if(r-=h.size,this.trackRemovals){const f=MI(this.Ir.serializer,u.convertToNoDocument(Te.min()));t.push(this.Ir.addEntry(e,o,f))}}),a.forEach(o=>{t.push(this.Ir.indexManager.addToCollectionParentIndex(e,o))}),t.push(this.Ir.updateMetadata(e,r)),q.waitFor(t)}getFromCache(e,t){return this.Ir.lr(e,t).next(r=>(this.Er.set(t,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,t){return this.Ir.Pr(e,t).next(({documents:r,Tr:a})=>(a.forEach((o,u)=>{this.Er.set(o,{size:u,readTime:r.get(o).readTime})}),r))}}function ZI(n){return Zt(n,Lh)}function io(n){return Zt(n,Mm)}function ih(n){const e=n.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function JI(n,e){const t=e.documentKey.path.toArray();return[n,jm(e.readTime),t.slice(0,t.length-2),t.length>0?t[t.length-1]:""]}function eA(n,e){const t=n.path.toArray(),r=e.path.toArray();let a=0;for(let o=0;o<t.length-2&&o<r.length-2;++o)if(a=Re(t[o],r[o]),a)return a;return a=Re(t.length,r.length),a||(a=Re(t[t.length-2],r[r.length-2]),a||Re(t[t.length-1],r[r.length-1]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class zM{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R1{constructor(e,t,r,a){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=a}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(a=>(r=a,this.remoteDocumentCache.getEntry(e,t))).next(a=>(r!==null&&Th(r.mutation,a,qn.empty(),gt.now()),a))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,xe()).next(()=>r))}getLocalViewOfDocuments(e,t,r=xe()){const a=si();return this.populateOverlays(e,a,t).next(()=>this.computeViews(e,t,a,r).next(o=>{let u=dh();return o.forEach((h,f)=>{u=u.insert(h,f.overlayedDocument)}),u}))}getOverlayedDocuments(e,t){const r=si();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,xe()))}populateOverlays(e,t,r){const a=[];return r.forEach(o=>{t.has(o)||a.push(o)}),this.documentOverlayCache.getOverlays(e,a).next(o=>{o.forEach((u,h)=>{t.set(u,h)})})}computeViews(e,t,r,a){let o=jn();const u=Eh(),h=function(){return Eh()}();return t.forEach((f,p)=>{const y=r.get(p.key);a.has(p.key)&&(y===void 0||y.mutation instanceof is)?o=o.insert(p.key,p):y!==void 0?(u.set(p.key,y.mutation.getFieldMask()),Th(y.mutation,p,y.mutation.getFieldMask(),gt.now())):u.set(p.key,qn.empty())}),this.recalculateAndSaveOverlays(e,o).next(f=>(f.forEach((p,y)=>u.set(p,y)),t.forEach((p,y)=>{var v;return h.set(p,new zM(y,(v=u.get(p))!==null&&v!==void 0?v:null))}),h))}recalculateAndSaveOverlays(e,t){const r=Eh();let a=new lt((u,h)=>u-h),o=xe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(u=>{for(const h of u)h.keys().forEach(f=>{const p=t.get(f);if(p===null)return;let y=r.get(f)||qn.empty();y=h.applyToLocalView(p,y),r.set(f,y);const v=(a.get(h.batchId)||xe()).add(f);a=a.insert(h.batchId,v)})}).next(()=>{const u=[],h=a.getReverseIterator();for(;h.hasNext();){const f=h.getNext(),p=f.key,y=f.value,v=HR();y.forEach(w=>{if(!o.has(w)){const S=XR(t.get(w),r.get(w));S!==null&&v.set(w,S),o=o.add(w)}}),u.push(this.documentOverlayCache.saveOverlays(e,p,v))}return q.waitFor(u)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,a){return function(u){return ce.isDocumentKey(u.path)&&u.collectionGroup===null&&u.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):tE(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,a):this.getDocumentsMatchingCollectionQuery(e,t,r,a)}getNextDocuments(e,t,r,a){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,a).next(o=>{const u=a-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,a-o.size):q.resolve(si());let h=su,f=o;return u.next(p=>q.forEach(p,(y,v)=>(h<v.largestBatchId&&(h=v.largestBatchId),o.get(y)?q.resolve():this.remoteDocumentCache.getEntry(e,y).next(w=>{f=f.insert(y,w)}))).next(()=>this.populateOverlays(e,p,o)).next(()=>this.computeViews(e,f,p,xe())).next(y=>({batchId:h,changes:jR(y)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new ce(t)).next(r=>{let a=dh();return r.isFoundDocument()&&(a=a.insert(r.key,r)),a})}getDocumentsMatchingCollectionGroupQuery(e,t,r,a){const o=t.collectionGroup;let u=dh();return this.indexManager.getCollectionParents(e,o).next(h=>q.forEach(h,f=>{const p=function(v,w){return new ns(w,null,v.explicitOrderBy.slice(),v.filters.slice(),v.limit,v.limitType,v.startAt,v.endAt)}(t,f.child(o));return this.getDocumentsMatchingCollectionQuery(e,p,r,a).next(y=>{y.forEach((v,w)=>{u=u.insert(v,w)})})}).next(()=>u))}getDocumentsMatchingCollectionQuery(e,t,r,a){let o;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(u=>(o=u,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,o,a))).next(u=>{o.forEach((f,p)=>{const y=p.getKey();u.get(y)===null&&(u=u.insert(y,ht.newInvalidDocument(y)))});let h=dh();return u.forEach((f,p)=>{const y=o.get(f);y!==void 0&&Th(y.mutation,p,qn.empty(),gt.now()),cd(t,p)&&(h=h.insert(f,p))}),h})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FM{constructor(e){this.serializer=e,this.dr=new Map,this.Ar=new Map}getBundleMetadata(e,t){return q.resolve(this.dr.get(t))}saveBundleMetadata(e,t){return this.dr.set(t.id,function(a){return{id:a.id,version:a.version,createTime:Mt(a.createTime)}}(t)),q.resolve()}getNamedQuery(e,t){return q.resolve(this.Ar.get(t))}saveNamedQuery(e,t){return this.Ar.set(t.name,function(a){return{name:a.name,query:cE(a.bundledQuery),readTime:Mt(a.readTime)}}(t)),q.resolve()}}/**
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
 */class qM{constructor(){this.overlays=new lt(ce.comparator),this.Rr=new Map}getOverlay(e,t){return q.resolve(this.overlays.get(t))}getOverlays(e,t){const r=si();return q.forEach(t,a=>this.getOverlay(e,a).next(o=>{o!==null&&r.set(a,o)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((a,o)=>{this.Et(e,t,o)}),q.resolve()}removeOverlaysForBatchId(e,t,r){const a=this.Rr.get(r);return a!==void 0&&(a.forEach(o=>this.overlays=this.overlays.remove(o)),this.Rr.delete(r)),q.resolve()}getOverlaysForCollection(e,t,r){const a=si(),o=t.length+1,u=new ce(t.child("")),h=this.overlays.getIteratorFrom(u);for(;h.hasNext();){const f=h.getNext().value,p=f.getKey();if(!t.isPrefixOf(p.path))break;p.path.length===o&&f.largestBatchId>r&&a.set(f.getKey(),f)}return q.resolve(a)}getOverlaysForCollectionGroup(e,t,r,a){let o=new lt((p,y)=>p-y);const u=this.overlays.getIterator();for(;u.hasNext();){const p=u.getNext().value;if(p.getKey().getCollectionGroup()===t&&p.largestBatchId>r){let y=o.get(p.largestBatchId);y===null&&(y=si(),o=o.insert(p.largestBatchId,y)),y.set(p.getKey(),p)}}const h=si(),f=o.getIterator();for(;f.hasNext()&&(f.getNext().value.forEach((p,y)=>h.set(p,y)),!(h.size()>=a)););return q.resolve(h)}Et(e,t,r){const a=this.overlays.get(r.key);if(a!==null){const u=this.Rr.get(a.largestBatchId).delete(r.key);this.Rr.set(a.largestBatchId,u)}this.overlays=this.overlays.insert(r.key,new oE(t,r));let o=this.Rr.get(t);o===void 0&&(o=xe(),this.Rr.set(t,o)),this.Rr.set(t,o.add(r.key))}}/**
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
 */class jM{constructor(){this.sessionToken=Dt.EMPTY_BYTE_STRING}getSessionToken(e){return q.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,q.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fE{constructor(){this.Vr=new nt(ln.mr),this.gr=new nt(ln.pr)}isEmpty(){return this.Vr.isEmpty()}addReference(e,t){const r=new ln(e,t);this.Vr=this.Vr.add(r),this.gr=this.gr.add(r)}yr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.wr(new ln(e,t))}Sr(e,t){e.forEach(r=>this.removeReference(r,t))}br(e){const t=new ce(new ze([])),r=new ln(t,e),a=new ln(t,e+1),o=[];return this.gr.forEachInRange([r,a],u=>{this.wr(u),o.push(u.key)}),o}Dr(){this.Vr.forEach(e=>this.wr(e))}wr(e){this.Vr=this.Vr.delete(e),this.gr=this.gr.delete(e)}vr(e){const t=new ce(new ze([])),r=new ln(t,e),a=new ln(t,e+1);let o=xe();return this.gr.forEachInRange([r,a],u=>{o=o.add(u.key)}),o}containsKey(e){const t=new ln(e,0),r=this.Vr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class ln{constructor(e,t){this.key=e,this.Cr=t}static mr(e,t){return ce.comparator(e.key,t.key)||Re(e.Cr,t.Cr)}static pr(e,t){return Re(e.Cr,t.Cr)||ce.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HM{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Fr=1,this.Mr=new nt(ln.mr)}checkEmpty(e){return q.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,a){const o=this.Fr;this.Fr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const u=new sE(o,t,r,a);this.mutationQueue.push(u);for(const h of a)this.Mr=this.Mr.add(new ln(h.key,o)),this.indexManager.addToCollectionParentIndex(e,h.key.path.popLast());return q.resolve(u)}lookupMutationBatch(e,t){return q.resolve(this.Or(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,a=this.Nr(r),o=a<0?0:a;return q.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return q.resolve(this.mutationQueue.length===0?ra:this.Fr-1)}getAllMutationBatches(e){return q.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new ln(t,0),a=new ln(t,Number.POSITIVE_INFINITY),o=[];return this.Mr.forEachInRange([r,a],u=>{const h=this.Or(u.Cr);o.push(h)}),q.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new nt(Re);return t.forEach(a=>{const o=new ln(a,0),u=new ln(a,Number.POSITIVE_INFINITY);this.Mr.forEachInRange([o,u],h=>{r=r.add(h.Cr)})}),q.resolve(this.Br(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,a=r.length+1;let o=r;ce.isDocumentKey(o)||(o=o.child(""));const u=new ln(new ce(o),0);let h=new nt(Re);return this.Mr.forEachWhile(f=>{const p=f.key.path;return!!r.isPrefixOf(p)&&(p.length===a&&(h=h.add(f.Cr)),!0)},u),q.resolve(this.Br(h))}Br(e){const t=[];return e.forEach(r=>{const a=this.Or(r);a!==null&&t.push(a)}),t}removeMutationBatch(e,t){ve(this.Lr(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Mr;return q.forEach(t.mutations,a=>{const o=new ln(a.key,t.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(e,a.key)}).next(()=>{this.Mr=r})}qn(e){}containsKey(e,t){const r=new ln(t,0),a=this.Mr.firstAfterOrEqual(r);return q.resolve(t.isEqual(a&&a.key))}performConsistencyCheck(e){return this.mutationQueue.length,q.resolve()}Lr(e,t){return this.Nr(e)}Nr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Or(e){const t=this.Nr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GM{constructor(e){this.kr=e,this.docs=function(){return new lt(ce.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,a=this.docs.get(r),o=a?a.size:0,u=this.kr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:u}),this.size+=u-o,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return q.resolve(r?r.document.mutableCopy():ht.newInvalidDocument(t))}getEntries(e,t){let r=jn();return t.forEach(a=>{const o=this.docs.get(a);r=r.insert(a,o?o.document.mutableCopy():ht.newInvalidDocument(a))}),q.resolve(r)}getDocumentsMatchingQuery(e,t,r,a){let o=jn();const u=t.path,h=new ce(u.child("__id-9223372036854775808__")),f=this.docs.getIteratorFrom(h);for(;f.hasNext();){const{key:p,value:{document:y}}=f.getNext();if(!u.isPrefixOf(p.path))break;p.path.length>u.length+1||$v(oR(y),r)<=0||(a.has(y.key)||cd(t,y))&&(o=o.insert(y.key,y.mutableCopy()))}return q.resolve(o)}getAllFromCollectionGroup(e,t,r,a){pe()}qr(e,t){return q.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new $M(this)}getSize(e){return q.resolve(this.size)}}class $M extends A1{constructor(e){super(),this.Ir=e}applyChanges(e){const t=[];return this.changes.forEach((r,a)=>{a.isValidDocument()?t.push(this.Ir.addEntry(e,a)):this.Ir.removeEntry(r)}),q.waitFor(t)}getFromCache(e,t){return this.Ir.getEntry(e,t)}getAllFromCache(e,t){return this.Ir.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KM{constructor(e){this.persistence=e,this.Qr=new rs(t=>Ao(t),ld),this.lastRemoteSnapshotVersion=Te.min(),this.highestTargetId=0,this.$r=0,this.Ur=new fE,this.targetCount=0,this.Kr=Po.Un()}forEachTarget(e,t){return this.Qr.forEach((r,a)=>t(a)),q.resolve()}getLastRemoteSnapshotVersion(e){return q.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return q.resolve(this.$r)}allocateTargetId(e){return this.highestTargetId=this.Kr.next(),q.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.$r&&(this.$r=t),q.resolve()}zn(e){this.Qr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Kr=new Po(t),this.highestTargetId=t),e.sequenceNumber>this.$r&&(this.$r=e.sequenceNumber)}addTargetData(e,t){return this.zn(t),this.targetCount+=1,q.resolve()}updateTargetData(e,t){return this.zn(t),q.resolve()}removeTargetData(e,t){return this.Qr.delete(t.target),this.Ur.br(t.targetId),this.targetCount-=1,q.resolve()}removeTargets(e,t,r){let a=0;const o=[];return this.Qr.forEach((u,h)=>{h.sequenceNumber<=t&&r.get(h.targetId)===null&&(this.Qr.delete(u),o.push(this.removeMatchingKeysForTargetId(e,h.targetId)),a++)}),q.waitFor(o).next(()=>a)}getTargetCount(e){return q.resolve(this.targetCount)}getTargetData(e,t){const r=this.Qr.get(t)||null;return q.resolve(r)}addMatchingKeys(e,t,r){return this.Ur.yr(t,r),q.resolve()}removeMatchingKeys(e,t,r){this.Ur.Sr(t,r);const a=this.persistence.referenceDelegate,o=[];return a&&t.forEach(u=>{o.push(a.markPotentiallyOrphaned(e,u))}),q.waitFor(o)}removeMatchingKeysForTargetId(e,t){return this.Ur.br(t),q.resolve()}getMatchingKeysForTargetId(e,t){const r=this.Ur.vr(t);return q.resolve(r)}containsKey(e,t){return q.resolve(this.Ur.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mE{constructor(e,t){this.Wr={},this.overlays={},this.Gr=new Fn(0),this.zr=!1,this.zr=!0,this.jr=new jM,this.referenceDelegate=e(this),this.Hr=new KM(this),this.indexManager=new xM,this.remoteDocumentCache=function(a){return new GM(a)}(r=>this.referenceDelegate.Jr(r)),this.serializer=new p1(t),this.Yr=new FM(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.zr=!1,Promise.resolve()}get started(){return this.zr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new qM,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.Wr[e.toKey()];return r||(r=new HM(t,this.referenceDelegate),this.Wr[e.toKey()]=r),r}getGlobalsCache(){return this.jr}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Yr}runTransaction(e,t,r){re("MemoryPersistence","Starting transaction:",e);const a=new QM(this.Gr.next());return this.referenceDelegate.Zr(),r(a).next(o=>this.referenceDelegate.Xr(a).next(()=>o)).toPromise().then(o=>(a.raiseOnCommittedEvent(),o))}ei(e,t){return q.or(Object.values(this.Wr).map(r=>()=>r.containsKey(e,t)))}}class QM extends uR{constructor(e){super(),this.currentSequenceNumber=e}}class bp{constructor(e){this.persistence=e,this.ti=new fE,this.ni=null}static ri(e){return new bp(e)}get ii(){if(this.ni)return this.ni;throw pe()}addReference(e,t,r){return this.ti.addReference(r,t),this.ii.delete(r.toString()),q.resolve()}removeReference(e,t,r){return this.ti.removeReference(r,t),this.ii.add(r.toString()),q.resolve()}markPotentiallyOrphaned(e,t){return this.ii.add(t.toString()),q.resolve()}removeTarget(e,t){this.ti.br(t.targetId).forEach(a=>this.ii.add(a.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(a=>{a.forEach(o=>this.ii.add(o.toString()))}).next(()=>r.removeTargetData(e,t))}Zr(){this.ni=new Set}Xr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return q.forEach(this.ii,r=>{const a=ce.fromPath(r);return this.si(e,a).next(o=>{o||t.removeEntry(a,Te.min())})}).next(()=>(this.ni=null,t.apply(e)))}updateLimboDocument(e,t){return this.si(e,t).next(r=>{r?this.ii.delete(t.toString()):this.ii.add(t.toString())})}Jr(e){return 0}si(e,t){return q.or([()=>q.resolve(this.ti.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.ei(e,t)])}}class $m{constructor(e,t){this.persistence=e,this.oi=new rs(r=>An(r.path),(r,a)=>r.isEqual(a)),this.garbageCollector=I1(this,t)}static ri(e,t){return new $m(e,t)}Zr(){}Xr(e){return q.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}nr(e){const t=this.sr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(a=>r+a))}sr(e){let t=0;return this.rr(e,r=>{t++}).next(()=>t)}rr(e,t){return q.forEach(this.oi,(r,a)=>this.ar(e,r,a).next(o=>o?q.resolve():t(a)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const a=this.persistence.getRemoteDocumentCache(),o=a.newChangeBuffer();return a.qr(e,u=>this.ar(e,u,t).next(h=>{h||(r++,o.removeEntry(u,Te.min()))})).next(()=>o.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.oi.set(t,e.currentSequenceNumber),q.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.oi.set(r,e.currentSequenceNumber),q.resolve()}removeReference(e,t,r){return this.oi.set(r,e.currentSequenceNumber),q.resolve()}updateLimboDocument(e,t){return this.oi.set(t,e.currentSequenceNumber),q.resolve()}Jr(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=gm(e.data.value)),t}ar(e,t,r){return q.or([()=>this.persistence.ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const a=this.oi.get(t);return q.resolve(a!==void 0&&a>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WM{constructor(e){this.serializer=e}B(e,t,r,a){const o=new dp("createOrUpgrade",t);r<1&&a>=1&&(function(f){f.createObjectStore(od)}(e),function(f){f.createObjectStore(Mh,{keyPath:hV}),f.createObjectStore(Pr,{keyPath:dI,autoIncrement:!0}).createIndex(mo,fI,{unique:!0}),f.createObjectStore(au)}(e),tA(e),function(f){f.createObjectStore(oo)}(e));let u=q.resolve();return r<3&&a>=3&&(r!==0&&(function(f){f.deleteObjectStore(lu),f.deleteObjectStore(ou),f.deleteObjectStore(vo)}(e),tA(e)),u=u.next(()=>function(f){const p=f.store(vo),y={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:Te.min().toTimestamp(),targetCount:0};return p.put(Lm,y)}(o))),r<4&&a>=4&&(r!==0&&(u=u.next(()=>function(f,p){return p.store(Pr).G().next(v=>{f.deleteObjectStore(Pr),f.createObjectStore(Pr,{keyPath:dI,autoIncrement:!0}).createIndex(mo,fI,{unique:!0});const w=p.store(Pr),S=v.map(P=>w.put(P));return q.waitFor(S)})}(e,o))),u=u.next(()=>{(function(f){f.createObjectStore(uu,{keyPath:EV})})(e)})),r<5&&a>=5&&(u=u.next(()=>this._i(o))),r<6&&a>=6&&(u=u.next(()=>(function(f){f.createObjectStore(Lh)}(e),this.ai(o)))),r<7&&a>=7&&(u=u.next(()=>this.ui(o))),r<8&&a>=8&&(u=u.next(()=>this.ci(e,o))),r<9&&a>=9&&(u=u.next(()=>{(function(f){f.objectStoreNames.contains("remoteDocumentChanges")&&f.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&a>=10&&(u=u.next(()=>this.li(o))),r<11&&a>=11&&(u=u.next(()=>{(function(f){f.createObjectStore(fp,{keyPath:TV})})(e),function(f){f.createObjectStore(mp,{keyPath:wV})}(e)})),r<12&&a>=12&&(u=u.next(()=>{(function(f){const p=f.createObjectStore(pp,{keyPath:DV});p.createIndex(Fy,PV,{unique:!1}),p.createIndex(_R,xV,{unique:!1})})(e)})),r<13&&a>=13&&(u=u.next(()=>function(f){const p=f.createObjectStore(Mm,{keyPath:fV});p.createIndex(mm,mV),p.createIndex(fR,pV)}(e)).next(()=>this.hi(e,o)).next(()=>e.deleteObjectStore(oo))),r<14&&a>=14&&(u=u.next(()=>this.Pi(e,o))),r<15&&a>=15&&(u=u.next(()=>function(f){f.createObjectStore(Wv,{keyPath:bV,autoIncrement:!0}).createIndex(zy,IV,{unique:!1}),f.createObjectStore(Um,{keyPath:AV}).createIndex(pR,SV,{unique:!1}),f.createObjectStore(Bm,{keyPath:RV}).createIndex(gR,CV,{unique:!1})}(e))),r<16&&a>=16&&(u=u.next(()=>{t.objectStore(Um).clear()}).next(()=>{t.objectStore(Bm).clear()})),r<17&&a>=17&&(u=u.next(()=>{(function(f){f.createObjectStore(Yv,{keyPath:NV})})(e)})),u}ai(e){let t=0;return e.store(oo).Z((r,a)=>{t+=Gm(a)}).next(()=>{const r={byteSize:t};return e.store(Lh).put(By,r)})}_i(e){const t=e.store(Mh),r=e.store(Pr);return t.G().next(a=>q.forEach(a,o=>{const u=IDBKeyRange.bound([o.userId,ra],[o.userId,o.lastAcknowledgedBatchId]);return r.G(mo,u).next(h=>q.forEach(h,f=>{ve(f.userId===o.userId);const p=uo(this.serializer,f);return E1(e,o.userId,p).next(()=>{})}))}))}ui(e){const t=e.store(lu),r=e.store(oo);return e.store(vo).get(Lm).next(a=>{const o=[];return r.Z((u,h)=>{const f=new ze(u),p=function(v){return[0,An(v)]}(f);o.push(t.get(p).next(y=>y?q.resolve():(v=>t.put({targetId:0,path:An(v),sequenceNumber:a.highestListenSequenceNumber}))(f)))}).next(()=>q.waitFor(o))})}ci(e,t){e.createObjectStore(Uh,{keyPath:vV});const r=t.store(Uh),a=new dE,o=u=>{if(a.add(u)){const h=u.lastSegment(),f=u.popLast();return r.put({collectionId:h,parent:An(f)})}};return t.store(oo).Z({Y:!0},(u,h)=>{const f=new ze(u);return o(f.popLast())}).next(()=>t.store(au).Z({Y:!0},([u,h,f],p)=>{const y=ii(h);return o(y.popLast())}))}li(e){const t=e.store(ou);return t.Z((r,a)=>{const o=mh(a),u=g1(this.serializer,o);return t.put(u)})}hi(e,t){const r=t.store(oo),a=[];return r.Z((o,u)=>{const h=t.store(Mm),f=function(v){return v.document?new ce(ze.fromString(v.document.name).popFirst(5)):v.noDocument?ce.fromSegments(v.noDocument.path):v.unknownDocument?ce.fromSegments(v.unknownDocument.path):pe()}(u).path.toArray(),p={prefixPath:f.slice(0,f.length-2),collectionGroup:f[f.length-2],documentId:f[f.length-1],readTime:u.readTime||[0,0],unknownDocument:u.unknownDocument,noDocument:u.noDocument,document:u.document,hasCommittedMutations:!!u.hasCommittedMutations};a.push(h.put(p))}).next(()=>q.waitFor(a))}Pi(e,t){const r=t.store(Pr),a=S1(this.serializer),o=new mE(bp.ri,this.serializer.Tt);return r.G().next(u=>{const h=new Map;return u.forEach(f=>{var p;let y=(p=h.get(f.userId))!==null&&p!==void 0?p:xe();uo(this.serializer,f).keys().forEach(v=>y=y.add(v)),h.set(f.userId,y)}),q.forEach(h,(f,p)=>{const y=new un(p),v=Tp.It(this.serializer,y),w=o.getIndexManager(y),S=wp.It(y,this.serializer,w,o.referenceDelegate);return new R1(a,S,v,w).recalculateAndSaveOverlaysForDocumentKeys(new qy(t,Fn.ae),f).next()})})}}function tA(n){n.createObjectStore(lu,{keyPath:_V}).createIndex(Qv,yV,{unique:!0}),n.createObjectStore(ou,{keyPath:"targetId"}).createIndex(mR,gV,{unique:!0}),n.createObjectStore(vo)}const Ks="IndexedDbPersistence",fy=18e5,my=5e3,py="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.",C1="main";class pE{constructor(e,t,r,a,o,u,h,f,p,y,v=17){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=r,this.Ti=o,this.window=u,this.document=h,this.Ii=p,this.Ei=y,this.di=v,this.Gr=null,this.zr=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Ai=null,this.inForeground=!1,this.Ri=null,this.Vi=null,this.mi=Number.NEGATIVE_INFINITY,this.fi=w=>Promise.resolve(),!pE.D())throw new te(K.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new LM(this,a),this.gi=t+C1,this.serializer=new p1(f),this.pi=new oi(this.gi,this.di,new WM(this.serializer)),this.jr=new AM,this.Hr=new OM(this.referenceDelegate,this.serializer),this.remoteDocumentCache=S1(this.serializer),this.Yr=new IM,this.window&&this.window.localStorage?this.yi=this.window.localStorage:(this.yi=null,y===!1&&Vt(Ks,"LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.wi().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new te(K.FAILED_PRECONDITION,py);return this.Si(),this.bi(),this.Di(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Hr.getHighestSequenceNumber(e))}).then(e=>{this.Gr=new Fn(e,this.Ii)}).then(()=>{this.zr=!0}).catch(e=>(this.pi&&this.pi.close(),Promise.reject(e)))}Ci(e){return this.fi=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.pi.k(async t=>{t.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.Ti.enqueueAndForget(async()=>{this.started&&await this.wi()}))}wi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>rm(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.Fi(e).next(t=>{t||(this.isPrimary=!1,this.Ti.enqueueRetryable(()=>this.fi(!1)))})}).next(()=>this.Mi(e)).next(t=>this.isPrimary&&!t?this.xi(e).next(()=>!1):!!t&&this.Oi(e).next(()=>!0))).catch(e=>{if(Ta(e))return re(Ks,"Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return re(Ks,"Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.Ti.enqueueRetryable(()=>this.fi(e)),this.isPrimary=e})}Fi(e){return sh(e).get(Ol).next(t=>q.resolve(this.Ni(t)))}Bi(e){return rm(e).delete(this.clientId)}async Li(){if(this.isPrimary&&!this.ki(this.mi,fy)){this.mi=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",t=>{const r=Zt(t,uu);return r.G().next(a=>{const o=this.qi(a,fy),u=a.filter(h=>o.indexOf(h)===-1);return q.forEach(u,h=>r.delete(h.clientId)).next(()=>u)})}).catch(()=>[]);if(this.yi)for(const t of e)this.yi.removeItem(this.Qi(t.clientId))}}Di(){this.Vi=this.Ti.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.wi().then(()=>this.Li()).then(()=>this.Di()))}Ni(e){return!!e&&e.ownerId===this.clientId}Mi(e){return this.Ei?q.resolve(!0):sh(e).get(Ol).next(t=>{if(t!==null&&this.ki(t.leaseTimestampMs,my)&&!this.$i(t.ownerId)){if(this.Ni(t)&&this.networkEnabled)return!0;if(!this.Ni(t)){if(!t.allowTabSynchronization)throw new te(K.FAILED_PRECONDITION,py);return!1}}return!(!this.networkEnabled||!this.inForeground)||rm(e).G().next(r=>this.qi(r,my).find(a=>{if(this.clientId!==a.clientId){const o=!this.networkEnabled&&a.networkEnabled,u=!this.inForeground&&a.inForeground,h=this.networkEnabled===a.networkEnabled;if(o||u&&h)return!0}return!1})===void 0)}).next(t=>(this.isPrimary!==t&&re(Ks,`Client ${t?"is":"is not"} eligible for a primary lease.`),t))}async shutdown(){this.zr=!1,this.Ui(),this.Vi&&(this.Vi.cancel(),this.Vi=null),this.Ki(),this.Wi(),await this.pi.runTransaction("shutdown","readwrite",[od,uu],e=>{const t=new qy(e,Fn.ae);return this.xi(t).next(()=>this.Bi(t))}),this.pi.close(),this.Gi()}qi(e,t){return e.filter(r=>this.ki(r.updateTimeMs,t)&&!this.$i(r.clientId))}zi(){return this.runTransaction("getActiveClients","readonly",e=>rm(e).G().next(t=>this.qi(t,fy).map(r=>r.clientId)))}get started(){return this.zr}getGlobalsCache(){return this.jr}getMutationQueue(e,t){return wp.It(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new NM(e,this.serializer.Tt.databaseId)}getDocumentOverlayCache(e){return Tp.It(this.serializer,e)}getBundleCache(){return this.Yr}runTransaction(e,t,r){re(Ks,"Starting transaction:",e);const a=t==="readonly"?"readonly":"readwrite",o=function(f){return f===17?VV:f===16?kV:f===15?Xv:f===14?ER:f===13?vR:f===12?OV:f===11?yR:void pe()}(this.di);let u;return this.pi.runTransaction(e,a,o,h=>(u=new qy(h,this.Gr?this.Gr.next():Fn.ae),t==="readwrite-primary"?this.Fi(u).next(f=>!!f||this.Mi(u)).next(f=>{if(!f)throw Vt(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.Ti.enqueueRetryable(()=>this.fi(!1)),new te(K.FAILED_PRECONDITION,lR);return r(u)}).next(f=>this.Oi(u).next(()=>f)):this.ji(u).next(()=>r(u)))).then(h=>(u.raiseOnCommittedEvent(),h))}ji(e){return sh(e).get(Ol).next(t=>{if(t!==null&&this.ki(t.leaseTimestampMs,my)&&!this.$i(t.ownerId)&&!this.Ni(t)&&!(this.Ei||this.allowTabSynchronization&&t.allowTabSynchronization))throw new te(K.FAILED_PRECONDITION,py)})}Oi(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return sh(e).put(Ol,t)}static D(){return oi.D()}xi(e){const t=sh(e);return t.get(Ol).next(r=>this.Ni(r)?(re(Ks,"Releasing primary lease."),t.delete(Ol)):q.resolve())}ki(e,t){const r=Date.now();return!(e<r-t)&&(!(e>r)||(Vt(`Detected an update time that is in the future: ${e} > ${r}`),!1))}Si(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Ri=()=>{this.Ti.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.wi()))},this.document.addEventListener("visibilitychange",this.Ri),this.inForeground=this.document.visibilityState==="visible")}Ki(){this.Ri&&(this.document.removeEventListener("visibilitychange",this.Ri),this.Ri=null)}bi(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.Ai=()=>{this.Ui();const t=/(?:Version|Mobile)\/1[456]/;LS()&&(navigator.appVersion.match(t)||navigator.userAgent.match(t))&&this.Ti.enterRestrictedMode(!0),this.Ti.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Ai))}Wi(){this.Ai&&(this.window.removeEventListener("pagehide",this.Ai),this.Ai=null)}$i(e){var t;try{const r=((t=this.yi)===null||t===void 0?void 0:t.getItem(this.Qi(e)))!==null;return re(Ks,`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return Vt(Ks,"Failed to get zombied client id.",r),!1}}Ui(){if(this.yi)try{this.yi.setItem(this.Qi(this.clientId),String(Date.now()))}catch(e){Vt("Failed to set zombie client id.",e)}}Gi(){if(this.yi)try{this.yi.removeItem(this.Qi(this.clientId))}catch{}}Qi(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function sh(n){return Zt(n,od)}function rm(n){return Zt(n,uu)}function gE(n,e){let t=n.projectId;return n.isDefaultDatabase||(t+="."+n.database),"firestore/"+e+"/"+t+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _E{constructor(e,t,r,a){this.targetId=e,this.fromCache=t,this.Hi=r,this.Ji=a}static Yi(e,t){let r=xe(),a=xe();for(const o of t.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:a=a.add(o.doc.key)}return new _E(e,t.fromCache,r,a)}}/**
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
 */class YM{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class D1{constructor(){this.Zi=!1,this.Xi=!1,this.es=100,this.ts=function(){return LS()?8:cR(wt())>0?6:4}()}initialize(e,t){this.ns=e,this.indexManager=t,this.Zi=!0}getDocumentsMatchingQuery(e,t,r,a){const o={result:null};return this.rs(e,t).next(u=>{o.result=u}).next(()=>{if(!o.result)return this.ss(e,t,a,r).next(u=>{o.result=u})}).next(()=>{if(o.result)return;const u=new YM;return this._s(e,t,u).next(h=>{if(o.result=h,this.Xi)return this.us(e,t,u,h.size)})}).next(()=>o.result)}us(e,t,r,a){return r.documentReadCount<this.es?(Fl()<=Be.DEBUG&&re("QueryEngine","SDK will not create cache indexes for query:",ql(t),"since it only creates cache indexes for collection contains","more than or equal to",this.es,"documents"),q.resolve()):(Fl()<=Be.DEBUG&&re("QueryEngine","Query:",ql(t),"scans",r.documentReadCount,"local documents and returns",a,"documents as results."),r.documentReadCount>this.ts*a?(Fl()<=Be.DEBUG&&re("QueryEngine","The SDK decides to create cache indexes for query:",ql(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Vn(t))):q.resolve())}rs(e,t){if(SI(t))return q.resolve(null);let r=Vn(t);return this.indexManager.getIndexType(e,r).next(a=>a===0?null:(t.limit!==null&&a===1&&(t=qm(t,null,"F"),r=Vn(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(o=>{const u=xe(...o);return this.ns.getDocuments(e,u).next(h=>this.indexManager.getMinOffset(e,r).next(f=>{const p=this.cs(t,h);return this.ls(t,p,u,f.readTime)?this.rs(e,qm(t,null,"F")):this.hs(e,p,t,f)}))})))}ss(e,t,r,a){return SI(t)||a.isEqual(Te.min())?q.resolve(null):this.ns.getDocuments(e,r).next(o=>{const u=this.cs(t,o);return this.ls(t,u,r,a)?q.resolve(null):(Fl()<=Be.DEBUG&&re("QueryEngine","Re-using previous result from %s to execute query: %s",a.toString(),ql(t)),this.hs(e,u,t,aR(a,su)).next(h=>h))})}cs(e,t){let r=new nt(FR(e));return t.forEach((a,o)=>{cd(e,o)&&(r=r.add(o))}),r}ls(e,t,r,a){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const o=e.limitType==="F"?t.last():t.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(a)>0)}_s(e,t,r){return Fl()<=Be.DEBUG&&re("QueryEngine","Using full collection scan to execute query:",ql(t)),this.ns.getDocumentsMatchingQuery(e,t,nr.min(),r)}hs(e,t,r,a){return this.ns.getDocumentsMatchingQuery(e,r,a).next(o=>(t.forEach(u=>{o=o.insert(u.key,u)}),o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yE="LocalStore",XM=3e8;class ZM{constructor(e,t,r,a){this.persistence=e,this.Ps=t,this.serializer=a,this.Ts=new lt(Re),this.Is=new rs(o=>Ao(o),ld),this.Es=new Map,this.ds=e.getRemoteDocumentCache(),this.Hr=e.getTargetCache(),this.Yr=e.getBundleCache(),this.As(r)}As(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new R1(this.ds,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ds.setIndexManager(this.indexManager),this.Ps.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ts))}}function P1(n,e,t,r){return new ZM(n,e,t,r)}async function x1(n,e){const t=de(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let a;return t.mutationQueue.getAllMutationBatches(r).next(o=>(a=o,t.As(e),t.mutationQueue.getAllMutationBatches(r))).next(o=>{const u=[],h=[];let f=xe();for(const p of a){u.push(p.batchId);for(const y of p.mutations)f=f.add(y.key)}for(const p of o){h.push(p.batchId);for(const y of p.mutations)f=f.add(y.key)}return t.localDocuments.getDocuments(r,f).next(p=>({Rs:p,removedBatchIds:u,addedBatchIds:h}))})})}function JM(n,e){const t=de(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const a=e.batch.keys(),o=t.ds.newChangeBuffer({trackRemovals:!0});return function(h,f,p,y){const v=p.batch,w=v.keys();let S=q.resolve();return w.forEach(P=>{S=S.next(()=>y.getEntry(f,P)).next(U=>{const L=p.docVersions.get(P);ve(L!==null),U.version.compareTo(L)<0&&(v.applyToRemoteDocument(U,p),U.isValidDocument()&&(U.setReadTime(p.commitVersion),y.addEntry(U)))})}),S.next(()=>h.mutationQueue.removeMutationBatch(f,v))}(t,r,e,o).next(()=>o.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,a,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(h){let f=xe();for(let p=0;p<h.mutationResults.length;++p)h.mutationResults[p].transformResults.length>0&&(f=f.add(h.batch.mutations[p].key));return f}(e))).next(()=>t.localDocuments.getDocuments(r,a))})}function N1(n){const e=de(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Hr.getLastRemoteSnapshotVersion(t))}function eL(n,e){const t=de(n),r=e.snapshotVersion;let a=t.Ts;return t.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const u=t.ds.newChangeBuffer({trackRemovals:!0});a=t.Ts;const h=[];e.targetChanges.forEach((y,v)=>{const w=a.get(v);if(!w)return;h.push(t.Hr.removeMatchingKeys(o,y.removedDocuments,v).next(()=>t.Hr.addMatchingKeys(o,y.addedDocuments,v)));let S=w.withSequenceNumber(o.currentSequenceNumber);e.targetMismatches.get(v)!==null?S=S.withResumeToken(Dt.EMPTY_BYTE_STRING,Te.min()).withLastLimboFreeSnapshotVersion(Te.min()):y.resumeToken.approximateByteSize()>0&&(S=S.withResumeToken(y.resumeToken,r)),a=a.insert(v,S),function(U,L,H){return U.resumeToken.approximateByteSize()===0||L.snapshotVersion.toMicroseconds()-U.snapshotVersion.toMicroseconds()>=XM?!0:H.addedDocuments.size+H.modifiedDocuments.size+H.removedDocuments.size>0}(w,S,y)&&h.push(t.Hr.updateTargetData(o,S))});let f=jn(),p=xe();if(e.documentUpdates.forEach(y=>{e.resolvedLimboDocuments.has(y)&&h.push(t.persistence.referenceDelegate.updateLimboDocument(o,y))}),h.push(O1(o,u,e.documentUpdates).next(y=>{f=y.Vs,p=y.fs})),!r.isEqual(Te.min())){const y=t.Hr.getLastRemoteSnapshotVersion(o).next(v=>t.Hr.setTargetsMetadata(o,o.currentSequenceNumber,r));h.push(y)}return q.waitFor(h).next(()=>u.apply(o)).next(()=>t.localDocuments.getLocalViewOfDocuments(o,f,p)).next(()=>f)}).then(o=>(t.Ts=a,o))}function O1(n,e,t){let r=xe(),a=xe();return t.forEach(o=>r=r.add(o)),e.getEntries(n,r).next(o=>{let u=jn();return t.forEach((h,f)=>{const p=o.get(h);f.isFoundDocument()!==p.isFoundDocument()&&(a=a.add(h)),f.isNoDocument()&&f.version.isEqual(Te.min())?(e.removeEntry(h,f.readTime),u=u.insert(h,f)):!p.isValidDocument()||f.version.compareTo(p.version)>0||f.version.compareTo(p.version)===0&&p.hasPendingWrites?(e.addEntry(f),u=u.insert(h,f)):re(yE,"Ignoring outdated watch update for ",h,". Current version:",p.version," Watch version:",f.version)}),{Vs:u,fs:a}})}function tL(n,e){const t=de(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=ra),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function gu(n,e){const t=de(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let a;return t.Hr.getTargetData(r,e).next(o=>o?(a=o,q.resolve(a)):t.Hr.allocateTargetId(r).next(u=>(a=new Hi(e,u,"TargetPurposeListen",r.currentSequenceNumber),t.Hr.addTargetData(r,a).next(()=>a))))}).then(r=>{const a=t.Ts.get(r.targetId);return(a===null||r.snapshotVersion.compareTo(a.snapshotVersion)>0)&&(t.Ts=t.Ts.insert(r.targetId,r),t.Is.set(e,r.targetId)),r})}async function _u(n,e,t){const r=de(n),a=r.Ts.get(e),o=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",o,u=>r.persistence.referenceDelegate.removeTarget(u,a))}catch(u){if(!Ta(u))throw u;re(yE,`Failed to update sequence numbers for target ${e}: ${u}`)}r.Ts=r.Ts.remove(e),r.Is.delete(a.target)}function Km(n,e,t){const r=de(n);let a=Te.min(),o=xe();return r.persistence.runTransaction("Execute query","readwrite",u=>function(f,p,y){const v=de(f),w=v.Is.get(y);return w!==void 0?q.resolve(v.Ts.get(w)):v.Hr.getTargetData(p,y)}(r,u,Vn(e)).next(h=>{if(h)return a=h.lastLimboFreeSnapshotVersion,r.Hr.getMatchingKeysForTargetId(u,h.targetId).next(f=>{o=f})}).next(()=>r.Ps.getDocumentsMatchingQuery(u,e,t?a:Te.min(),t?o:xe())).next(h=>(M1(r,zR(e),h),{documents:h,gs:o})))}function k1(n,e){const t=de(n),r=de(t.Hr),a=t.Ts.get(e);return a?Promise.resolve(a.target):t.persistence.runTransaction("Get target data","readonly",o=>r.lt(o,e).next(u=>u?u.target:null))}function V1(n,e){const t=de(n),r=t.Es.get(e)||Te.min();return t.persistence.runTransaction("Get new document changes","readonly",a=>t.ds.getAllFromCollectionGroup(a,e,aR(r,su),Number.MAX_SAFE_INTEGER)).then(a=>(M1(t,e,a),a))}function M1(n,e,t){let r=n.Es.get(e)||Te.min();t.forEach((a,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)}),n.Es.set(e,r)}async function nL(n,e,t,r){const a=de(n);let o=xe(),u=jn();for(const p of t){const y=e.ps(p.metadata.name);p.document&&(o=o.add(y));const v=e.ys(p);v.setReadTime(e.ws(p.metadata.readTime)),u=u.insert(y,v)}const h=a.ds.newChangeBuffer({trackRemovals:!0}),f=await gu(a,function(y){return Vn(ku(ze.fromString(`__bundle__/docs/${y}`)))}(r));return a.persistence.runTransaction("Apply bundle documents","readwrite",p=>O1(p,h,u).next(y=>(h.apply(p),y)).next(y=>a.Hr.removeMatchingKeysForTargetId(p,f.targetId).next(()=>a.Hr.addMatchingKeys(p,o,f.targetId)).next(()=>a.localDocuments.getLocalViewOfDocuments(p,y.Vs,y.fs)).next(()=>y.Vs)))}async function rL(n,e,t=xe()){const r=await gu(n,Vn(cE(e.bundledQuery))),a=de(n);return a.persistence.runTransaction("Save named query","readwrite",o=>{const u=Mt(e.readTime);if(r.snapshotVersion.compareTo(u)>=0)return a.Yr.saveNamedQuery(o,e);const h=r.withResumeToken(Dt.EMPTY_BYTE_STRING,u);return a.Ts=a.Ts.insert(h.targetId,h),a.Hr.updateTargetData(o,h).next(()=>a.Hr.removeMatchingKeysForTargetId(o,r.targetId)).next(()=>a.Hr.addMatchingKeys(o,t,r.targetId)).next(()=>a.Yr.saveNamedQuery(o,e))})}/**
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
 */const L1="firestore_clients";function nA(n,e){return`${L1}_${n}_${e}`}const U1="firestore_mutations";function rA(n,e,t){let r=`${U1}_${n}_${t}`;return e.isAuthenticated()&&(r+=`_${e.uid}`),r}const B1="firestore_targets";function gy(n,e){return`${B1}_${n}_${e}`}/**
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
 */const Zr="SharedClientState";class Qm{constructor(e,t,r,a){this.user=e,this.batchId=t,this.state=r,this.error=a}static Ss(e,t,r){const a=JSON.parse(r);let o,u=typeof a=="object"&&["pending","acknowledged","rejected"].indexOf(a.state)!==-1&&(a.error===void 0||typeof a.error=="object");return u&&a.error&&(u=typeof a.error.message=="string"&&typeof a.error.code=="string",u&&(o=new te(a.error.code,a.error.message))),u?new Qm(e,t,a.state,o):(Vt(Zr,`Failed to parse mutation state for ID '${t}': ${r}`),null)}bs(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class wh{constructor(e,t,r){this.targetId=e,this.state=t,this.error=r}static Ss(e,t){const r=JSON.parse(t);let a,o=typeof r=="object"&&["not-current","current","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return o&&r.error&&(o=typeof r.error.message=="string"&&typeof r.error.code=="string",o&&(a=new te(r.error.code,r.error.message))),o?new wh(e,r.state,a):(Vt(Zr,`Failed to parse target state for ID '${e}': ${t}`),null)}bs(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Wm{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static Ss(e,t){const r=JSON.parse(t);let a=typeof r=="object"&&r.activeTargetIds instanceof Array,o=nE();for(let u=0;a&&u<r.activeTargetIds.length;++u)a=hR(r.activeTargetIds[u]),o=o.add(r.activeTargetIds[u]);return a?new Wm(e,o):(Vt(Zr,`Failed to parse client data for instance '${e}': ${t}`),null)}}class vE{constructor(e,t){this.clientId=e,this.onlineState=t}static Ss(e){const t=JSON.parse(e);return typeof t=="object"&&["Unknown","Online","Offline"].indexOf(t.onlineState)!==-1&&typeof t.clientId=="string"?new vE(t.clientId,t.onlineState):(Vt(Zr,`Failed to parse online state: ${e}`),null)}}class rv{constructor(){this.activeTargetIds=nE()}Ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}vs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}bs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class _y{constructor(e,t,r,a,o){this.window=e,this.Ti=t,this.persistenceKey=r,this.Cs=a,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.Fs=this.Ms.bind(this),this.xs=new lt(Re),this.started=!1,this.Os=[];const u=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=o,this.Ns=nA(this.persistenceKey,this.Cs),this.Bs=function(f){return`firestore_sequence_number_${f}`}(this.persistenceKey),this.xs=this.xs.insert(this.Cs,new rv),this.Ls=new RegExp(`^${L1}_${u}_([^_]*)$`),this.ks=new RegExp(`^${U1}_${u}_(\\d+)(?:_(.*))?$`),this.qs=new RegExp(`^${B1}_${u}_(\\d+)$`),this.Qs=function(f){return`firestore_online_state_${f}`}(this.persistenceKey),this.$s=function(f){return`firestore_bundle_loaded_v2_${f}`}(this.persistenceKey),this.window.addEventListener("storage",this.Fs)}static D(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.zi();for(const r of e){if(r===this.Cs)continue;const a=this.getItem(nA(this.persistenceKey,r));if(a){const o=Wm.Ss(r,a);o&&(this.xs=this.xs.insert(o.clientId,o))}}this.Us();const t=this.storage.getItem(this.Qs);if(t){const r=this.Ks(t);r&&this.Ws(r)}for(const r of this.Os)this.Ms(r);this.Os=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.Bs,JSON.stringify(e))}getAllActiveQueryTargets(){return this.Gs(this.xs)}isActiveQueryTarget(e){let t=!1;return this.xs.forEach((r,a)=>{a.activeTargetIds.has(e)&&(t=!0)}),t}addPendingMutation(e){this.zs(e,"pending")}updateMutationState(e,t,r){this.zs(e,t,r),this.js(e)}addLocalQueryTarget(e,t=!0){let r="not-current";if(this.isActiveQueryTarget(e)){const a=this.storage.getItem(gy(this.persistenceKey,e));if(a){const o=wh.Ss(e,a);o&&(r=o.state)}}return t&&this.Hs.Ds(e),this.Us(),r}removeLocalQueryTarget(e){this.Hs.vs(e),this.Us()}isLocalQueryTarget(e){return this.Hs.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(gy(this.persistenceKey,e))}updateQueryState(e,t,r){this.Js(e,t,r)}handleUserChange(e,t,r){t.forEach(a=>{this.js(a)}),this.currentUser=e,r.forEach(a=>{this.addPendingMutation(a)})}setOnlineState(e){this.Ys(e)}notifyBundleLoaded(e){this.Zs(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.Fs),this.removeItem(this.Ns),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return re(Zr,"READ",e,t),t}setItem(e,t){re(Zr,"SET",e,t),this.storage.setItem(e,t)}removeItem(e){re(Zr,"REMOVE",e),this.storage.removeItem(e)}Ms(e){const t=e;if(t.storageArea===this.storage){if(re(Zr,"EVENT",t.key,t.newValue),t.key===this.Ns)return void Vt("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.Ti.enqueueRetryable(async()=>{if(this.started){if(t.key!==null){if(this.Ls.test(t.key)){if(t.newValue==null){const r=this.Xs(t.key);return this.eo(r,null)}{const r=this.no(t.key,t.newValue);if(r)return this.eo(r.clientId,r)}}else if(this.ks.test(t.key)){if(t.newValue!==null){const r=this.ro(t.key,t.newValue);if(r)return this.io(r)}}else if(this.qs.test(t.key)){if(t.newValue!==null){const r=this.so(t.key,t.newValue);if(r)return this.oo(r)}}else if(t.key===this.Qs){if(t.newValue!==null){const r=this.Ks(t.newValue);if(r)return this.Ws(r)}}else if(t.key===this.Bs){const r=function(o){let u=Fn.ae;if(o!=null)try{const h=JSON.parse(o);ve(typeof h=="number"),u=h}catch(h){Vt(Zr,"Failed to read sequence number from WebStorage",h)}return u}(t.newValue);r!==Fn.ae&&this.sequenceNumberHandler(r)}else if(t.key===this.$s){const r=this._o(t.newValue);await Promise.all(r.map(a=>this.syncEngine.ao(a)))}}}else this.Os.push(t)})}}get Hs(){return this.xs.get(this.Cs)}Us(){this.setItem(this.Ns,this.Hs.bs())}zs(e,t,r){const a=new Qm(this.currentUser,e,t,r),o=rA(this.persistenceKey,this.currentUser,e);this.setItem(o,a.bs())}js(e){const t=rA(this.persistenceKey,this.currentUser,e);this.removeItem(t)}Ys(e){const t={clientId:this.Cs,onlineState:e};this.storage.setItem(this.Qs,JSON.stringify(t))}Js(e,t,r){const a=gy(this.persistenceKey,e),o=new wh(e,t,r);this.setItem(a,o.bs())}Zs(e){const t=JSON.stringify(Array.from(e));this.setItem(this.$s,t)}Xs(e){const t=this.Ls.exec(e);return t?t[1]:null}no(e,t){const r=this.Xs(e);return Wm.Ss(r,t)}ro(e,t){const r=this.ks.exec(e),a=Number(r[1]),o=r[2]!==void 0?r[2]:null;return Qm.Ss(new un(o),a,t)}so(e,t){const r=this.qs.exec(e),a=Number(r[1]);return wh.Ss(a,t)}Ks(e){return vE.Ss(e)}_o(e){return JSON.parse(e)}async io(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.uo(e.batchId,e.state,e.error);re(Zr,`Ignoring mutation for non-active user ${e.user.uid}`)}oo(e){return this.syncEngine.co(e.targetId,e.state,e.error)}eo(e,t){const r=t?this.xs.insert(e,t):this.xs.remove(e),a=this.Gs(this.xs),o=this.Gs(r),u=[],h=[];return o.forEach(f=>{a.has(f)||u.push(f)}),a.forEach(f=>{o.has(f)||h.push(f)}),this.syncEngine.lo(u,h).then(()=>{this.xs=r})}Ws(e){this.xs.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}Gs(e){let t=nE();return e.forEach((r,a)=>{t=t.unionWith(a.activeTargetIds)}),t}}class z1{constructor(){this.ho=new rv,this.Po={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.ho.Ds(e),this.Po[e]||"not-current"}updateQueryState(e,t,r){this.Po[e]=t}removeLocalQueryTarget(e){this.ho.vs(e)}isLocalQueryTarget(e){return this.ho.activeTargetIds.has(e)}clearQueryState(e){delete this.Po[e]}getAllActiveQueryTargets(){return this.ho.activeTargetIds}isActiveQueryTarget(e){return this.ho.activeTargetIds.has(e)}start(){return this.ho=new rv,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class iL{To(e){}shutdown(){}}/**
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
 */const iA="ConnectivityMonitor";class sA{constructor(){this.Io=()=>this.Eo(),this.Ao=()=>this.Ro(),this.Vo=[],this.mo()}To(e){this.Vo.push(e)}shutdown(){window.removeEventListener("online",this.Io),window.removeEventListener("offline",this.Ao)}mo(){window.addEventListener("online",this.Io),window.addEventListener("offline",this.Ao)}Eo(){re(iA,"Network connectivity changed: AVAILABLE");for(const e of this.Vo)e(0)}Ro(){re(iA,"Network connectivity changed: UNAVAILABLE");for(const e of this.Vo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let im=null;function iv(){return im===null?im=function(){return 268435456+Math.round(2147483648*Math.random())}():im++,"0x"+im.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yy="RestConnection",sL={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class aL{get fo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),a=encodeURIComponent(this.databaseId.database);this.po=t+"://"+e.host,this.yo=`projects/${r}/databases/${a}`,this.wo=this.databaseId.database===jy?`project_id=${r}`:`project_id=${r}&database_id=${a}`}So(e,t,r,a,o){const u=iv(),h=this.bo(e,t.toUriEncodedString());re(yy,`Sending RPC '${e}' ${u}:`,h,r);const f={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Do(f,a,o),this.vo(e,h,f,r).then(p=>(re(yy,`Received RPC '${e}' ${u}: `,p),p),p=>{throw hi(yy,`RPC '${e}' ${u} failed with error: `,p,"url: ",h,"request:",r),p})}Co(e,t,r,a,o,u){return this.So(e,t,r,a,o)}Do(e,t,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ou}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((a,o)=>e[o]=a),r&&r.headers.forEach((a,o)=>e[o]=a)}bo(e,t){const r=sL[e];return`${this.po}/v1/${t}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oL{constructor(e){this.Fo=e.Fo,this.Mo=e.Mo}xo(e){this.Oo=e}No(e){this.Bo=e}Lo(e){this.ko=e}onMessage(e){this.qo=e}close(){this.Mo()}send(e){this.Fo(e)}Qo(){this.Oo()}$o(){this.Bo()}Uo(e){this.ko(e)}Ko(e){this.qo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bn="WebChannelConnection";class lL extends aL{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}vo(e,t,r,a){const o=iv();return new Promise((u,h)=>{const f=new ZS;f.setWithCredentials(!0),f.listenOnce(JS.COMPLETE,()=>{try{switch(f.getLastErrorCode()){case hm.NO_ERROR:const y=f.getResponseJson();re(bn,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(y)),u(y);break;case hm.TIMEOUT:re(bn,`RPC '${e}' ${o} timed out`),h(new te(K.DEADLINE_EXCEEDED,"Request time out"));break;case hm.HTTP_ERROR:const v=f.getStatus();if(re(bn,`RPC '${e}' ${o} failed with status:`,v,"response text:",f.getResponseText()),v>0){let w=f.getResponseJson();Array.isArray(w)&&(w=w[0]);const S=w==null?void 0:w.error;if(S&&S.status&&S.message){const P=function(L){const H=L.toLowerCase().replace(/_/g,"-");return Object.values(K).indexOf(H)>=0?H:K.UNKNOWN}(S.status);h(new te(P,S.message))}else h(new te(K.UNKNOWN,"Server responded with status "+f.getStatus()))}else h(new te(K.UNAVAILABLE,"Connection failed."));break;default:pe()}}finally{re(bn,`RPC '${e}' ${o} completed.`)}});const p=JSON.stringify(a);re(bn,`RPC '${e}' ${o} sending request:`,a),f.send(t,"POST",p,r,15)})}Wo(e,t,r){const a=iv(),o=[this.po,"/","google.firestore.v1.Firestore","/",e,"/channel"],u=nR(),h=tR(),f={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},p=this.longPollingOptions.timeoutSeconds;p!==void 0&&(f.longPollingTimeout=Math.round(1e3*p)),this.useFetchStreams&&(f.useFetchStreams=!0),this.Do(f.initMessageHeaders,t,r),f.encodeInitMessageHeaders=!0;const y=o.join("");re(bn,`Creating RPC '${e}' stream ${a}: ${y}`,f);const v=u.createWebChannel(y,f);let w=!1,S=!1;const P=new oL({Fo:L=>{S?re(bn,`Not sending because RPC '${e}' stream ${a} is closed:`,L):(w||(re(bn,`Opening RPC '${e}' stream ${a} transport.`),v.open(),w=!0),re(bn,`RPC '${e}' stream ${a} sending:`,L),v.send(L))},Mo:()=>v.close()}),U=(L,H,Y)=>{L.listen(H,$=>{try{Y($)}catch(oe){setTimeout(()=>{throw oe},0)}})};return U(v,hh.EventType.OPEN,()=>{S||(re(bn,`RPC '${e}' stream ${a} transport opened.`),P.Qo())}),U(v,hh.EventType.CLOSE,()=>{S||(S=!0,re(bn,`RPC '${e}' stream ${a} transport closed`),P.Uo())}),U(v,hh.EventType.ERROR,L=>{S||(S=!0,hi(bn,`RPC '${e}' stream ${a} transport errored:`,L),P.Uo(new te(K.UNAVAILABLE,"The operation could not be completed")))}),U(v,hh.EventType.MESSAGE,L=>{var H;if(!S){const Y=L.data[0];ve(!!Y);const $=Y,oe=($==null?void 0:$.error)||((H=$[0])===null||H===void 0?void 0:H.error);if(oe){re(bn,`RPC '${e}' stream ${a} received error:`,oe);const ae=oe.status;let le=function(A){const x=qt[A];if(x!==void 0)return e1(x)}(ae),D=oe.message;le===void 0&&(le=K.INTERNAL,D="Unknown error status: "+ae+" with message "+oe.message),S=!0,P.Uo(new te(le,D)),v.close()}else re(bn,`RPC '${e}' stream ${a} received:`,Y),P.Ko(Y)}}),U(h,eR.STAT_EVENT,L=>{L.stat===My.PROXY?re(bn,`RPC '${e}' stream ${a} detected buffering proxy`):L.stat===My.NOPROXY&&re(bn,`RPC '${e}' stream ${a} detected no buffering proxy`)}),setTimeout(()=>{P.$o()},0),P}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F1(){return typeof window<"u"?window:null}function Em(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function md(n){return new fM(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EE{constructor(e,t,r=1e3,a=1.5,o=6e4){this.Ti=e,this.timerId=t,this.Go=r,this.zo=a,this.jo=o,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(e){this.cancel();const t=Math.floor(this.Ho+this.e_()),r=Math.max(0,Date.now()-this.Yo),a=Math.max(0,t-r);a>0&&re("ExponentialBackoff",`Backing off for ${a} ms (base delay: ${this.Ho} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,a,()=>(this.Yo=Date.now(),e())),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){this.Jo!==null&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){this.Jo!==null&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aA="PersistentStream";class q1{constructor(e,t,r,a,o,u,h,f){this.Ti=e,this.n_=r,this.r_=a,this.connection=o,this.authCredentialsProvider=u,this.appCheckCredentialsProvider=h,this.listener=f,this.state=0,this.i_=0,this.s_=null,this.o_=null,this.stream=null,this.__=0,this.a_=new EE(e,t)}u_(){return this.state===1||this.state===5||this.c_()}c_(){return this.state===2||this.state===3}start(){this.__=0,this.state!==4?this.auth():this.l_()}async stop(){this.u_()&&await this.close(0)}h_(){this.state=0,this.a_.reset()}P_(){this.c_()&&this.s_===null&&(this.s_=this.Ti.enqueueAfterDelay(this.n_,6e4,()=>this.T_()))}I_(e){this.E_(),this.stream.send(e)}async T_(){if(this.c_())return this.close(0)}E_(){this.s_&&(this.s_.cancel(),this.s_=null)}d_(){this.o_&&(this.o_.cancel(),this.o_=null)}async close(e,t){this.E_(),this.d_(),this.a_.cancel(),this.i_++,e!==4?this.a_.reset():t&&t.code===K.RESOURCE_EXHAUSTED?(Vt(t.toString()),Vt("Using maximum backoff delay to prevent overloading the backend."),this.a_.Zo()):t&&t.code===K.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.A_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Lo(t)}A_(){}auth(){this.state=1;const e=this.R_(this.i_),t=this.i_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,a])=>{this.i_===t&&this.V_(r,a)},r=>{e(()=>{const a=new te(K.UNKNOWN,"Fetching auth token failed: "+r.message);return this.m_(a)})})}V_(e,t){const r=this.R_(this.i_);this.stream=this.f_(e,t),this.stream.xo(()=>{r(()=>this.listener.xo())}),this.stream.No(()=>{r(()=>(this.state=2,this.o_=this.Ti.enqueueAfterDelay(this.r_,1e4,()=>(this.c_()&&(this.state=3),Promise.resolve())),this.listener.No()))}),this.stream.Lo(a=>{r(()=>this.m_(a))}),this.stream.onMessage(a=>{r(()=>++this.__==1?this.g_(a):this.onNext(a))})}l_(){this.state=5,this.a_.Xo(async()=>{this.state=0,this.start()})}m_(e){return re(aA,`close with error: ${e}`),this.stream=null,this.close(4,e)}R_(e){return t=>{this.Ti.enqueueAndForget(()=>this.i_===e?t():(re(aA,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class uL extends q1{constructor(e,t,r,a,o,u){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,a,u),this.serializer=o}f_(e,t){return this.connection.Wo("Listen",e,t)}g_(e){return this.onNext(e)}onNext(e){this.a_.reset();const t=gM(this.serializer,e),r=function(o){if(!("targetChange"in o))return Te.min();const u=o.targetChange;return u.targetIds&&u.targetIds.length?Te.min():u.readTime?Mt(u.readTime):Te.min()}(e);return this.listener.p_(t,r)}y_(e){const t={};t.database=Zy(this.serializer),t.addTarget=function(o,u){let h;const f=u.target;if(h=zm(f)?{documents:u1(o,f)}:{query:c1(o,f).ht},h.targetId=u.targetId,u.resumeToken.approximateByteSize()>0){h.resumeToken=r1(o,u.resumeToken);const p=Yy(o,u.expectedCount);p!==null&&(h.expectedCount=p)}else if(u.snapshotVersion.compareTo(Te.min())>0){h.readTime=pu(o,u.snapshotVersion.toTimestamp());const p=Yy(o,u.expectedCount);p!==null&&(h.expectedCount=p)}return h}(this.serializer,e);const r=yM(this.serializer,e);r&&(t.labels=r),this.I_(t)}w_(e){const t={};t.database=Zy(this.serializer),t.removeTarget=e,this.I_(t)}}class cL extends q1{constructor(e,t,r,a,o,u){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,a,u),this.serializer=o}get S_(){return this.__>0}start(){this.lastStreamToken=void 0,super.start()}A_(){this.S_&&this.b_([])}f_(e,t){return this.connection.Wo("Write",e,t)}g_(e){return ve(!!e.streamToken),this.lastStreamToken=e.streamToken,ve(!e.writeResults||e.writeResults.length===0),this.listener.D_()}onNext(e){ve(!!e.streamToken),this.lastStreamToken=e.streamToken,this.a_.reset();const t=_M(e.writeResults,e.commitTime),r=Mt(e.commitTime);return this.listener.v_(r,t)}C_(){const e={};e.database=Zy(this.serializer),this.I_(e)}b_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>Hh(this.serializer,r))};this.I_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hL{}class dL extends hL{constructor(e,t,r,a){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=a,this.F_=!1}M_(){if(this.F_)throw new te(K.FAILED_PRECONDITION,"The client has already been terminated.")}So(e,t,r,a){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,u])=>this.connection.So(e,Xy(t,r),a,o,u)).catch(o=>{throw o.name==="FirebaseError"?(o.code===K.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new te(K.UNKNOWN,o.toString())})}Co(e,t,r,a,o){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([u,h])=>this.connection.Co(e,Xy(t,r),a,u,h,o)).catch(u=>{throw u.name==="FirebaseError"?(u.code===K.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new te(K.UNKNOWN,u.toString())})}terminate(){this.F_=!0,this.connection.terminate()}}class fL{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.x_=0,this.O_=null,this.N_=!0}B_(){this.x_===0&&(this.L_("Unknown"),this.O_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.O_=null,this.k_("Backend didn't respond within 10 seconds."),this.L_("Offline"),Promise.resolve())))}q_(e){this.state==="Online"?this.L_("Unknown"):(this.x_++,this.x_>=1&&(this.Q_(),this.k_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.L_("Offline")))}set(e){this.Q_(),this.x_=0,e==="Online"&&(this.N_=!1),this.L_(e)}L_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}k_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.N_?(Vt(t),this.N_=!1):re("OnlineStateTracker",t)}Q_(){this.O_!==null&&(this.O_.cancel(),this.O_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xo="RemoteStore";class mL{constructor(e,t,r,a,o){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.U_=[],this.K_=new Map,this.W_=new Set,this.G_=[],this.z_=o,this.z_.To(u=>{r.enqueueAndForget(async()=>{ba(this)&&(re(xo,"Restarting streams for network reachability change."),await async function(f){const p=de(f);p.W_.add(4),await Lu(p),p.j_.set("Unknown"),p.W_.delete(4),await pd(p)}(this))})}),this.j_=new fL(r,a)}}async function pd(n){if(ba(n))for(const e of n.G_)await e(!0)}async function Lu(n){for(const e of n.G_)await e(!1)}function Ip(n,e){const t=de(n);t.K_.has(e.targetId)||(t.K_.set(e.targetId,e),bE(t)?wE(t):Bu(t).c_()&&TE(t,e))}function yu(n,e){const t=de(n),r=Bu(t);t.K_.delete(e),r.c_()&&j1(t,e),t.K_.size===0&&(r.c_()?r.P_():ba(t)&&t.j_.set("Unknown"))}function TE(n,e){if(n.H_.Ne(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Te.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Bu(n).y_(e)}function j1(n,e){n.H_.Ne(e),Bu(n).w_(e)}function wE(n){n.H_=new uM({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),lt:e=>n.K_.get(e)||null,it:()=>n.datastore.serializer.databaseId}),Bu(n).start(),n.j_.B_()}function bE(n){return ba(n)&&!Bu(n).u_()&&n.K_.size>0}function ba(n){return de(n).W_.size===0}function H1(n){n.H_=void 0}async function pL(n){n.j_.set("Online")}async function gL(n){n.K_.forEach((e,t)=>{TE(n,e)})}async function _L(n,e){H1(n),bE(n)?(n.j_.q_(e),wE(n)):n.j_.set("Unknown")}async function yL(n,e,t){if(n.j_.set("Online"),e instanceof n1&&e.state===2&&e.cause)try{await async function(a,o){const u=o.cause;for(const h of o.targetIds)a.K_.has(h)&&(await a.remoteSyncer.rejectListen(h,u),a.K_.delete(h),a.H_.removeTarget(h))}(n,e)}catch(r){re(xo,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Ym(n,r)}else if(e instanceof vm?n.H_.We(e):e instanceof t1?n.H_.Ze(e):n.H_.je(e),!t.isEqual(Te.min()))try{const r=await N1(n.localStore);t.compareTo(r)>=0&&await function(o,u){const h=o.H_.ot(u);return h.targetChanges.forEach((f,p)=>{if(f.resumeToken.approximateByteSize()>0){const y=o.K_.get(p);y&&o.K_.set(p,y.withResumeToken(f.resumeToken,u))}}),h.targetMismatches.forEach((f,p)=>{const y=o.K_.get(f);if(!y)return;o.K_.set(f,y.withResumeToken(Dt.EMPTY_BYTE_STRING,y.snapshotVersion)),j1(o,f);const v=new Hi(y.target,f,p,y.sequenceNumber);TE(o,v)}),o.remoteSyncer.applyRemoteEvent(h)}(n,t)}catch(r){re(xo,"Failed to raise snapshot:",r),await Ym(n,r)}}async function Ym(n,e,t){if(!Ta(e))throw e;n.W_.add(1),await Lu(n),n.j_.set("Offline"),t||(t=()=>N1(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{re(xo,"Retrying IndexedDB access"),await t(),n.W_.delete(1),await pd(n)})}function G1(n,e){return e().catch(t=>Ym(n,t,e))}async function Uu(n){const e=de(n),t=pa(e);let r=e.U_.length>0?e.U_[e.U_.length-1].batchId:ra;for(;vL(e);)try{const a=await tL(e.localStore,r);if(a===null){e.U_.length===0&&t.P_();break}r=a.batchId,EL(e,a)}catch(a){await Ym(e,a)}$1(e)&&K1(e)}function vL(n){return ba(n)&&n.U_.length<10}function EL(n,e){n.U_.push(e);const t=pa(n);t.c_()&&t.S_&&t.b_(e.mutations)}function $1(n){return ba(n)&&!pa(n).u_()&&n.U_.length>0}function K1(n){pa(n).start()}async function TL(n){pa(n).C_()}async function wL(n){const e=pa(n);for(const t of n.U_)e.b_(t.mutations)}async function bL(n,e,t){const r=n.U_.shift(),a=aE.from(r,e,t);await G1(n,()=>n.remoteSyncer.applySuccessfulWrite(a)),await Uu(n)}async function IL(n,e){e&&pa(n).S_&&await async function(r,a){if(function(u){return JR(u)&&u!==K.ABORTED}(a.code)){const o=r.U_.shift();pa(r).h_(),await G1(r,()=>r.remoteSyncer.rejectFailedWrite(o.batchId,a)),await Uu(r)}}(n,e),$1(n)&&K1(n)}async function oA(n,e){const t=de(n);t.asyncQueue.verifyOperationInProgress(),re(xo,"RemoteStore received new credentials");const r=ba(t);t.W_.add(3),await Lu(t),r&&t.j_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.W_.delete(3),await pd(t)}async function sv(n,e){const t=de(n);e?(t.W_.delete(2),await pd(t)):e||(t.W_.add(2),await Lu(t),t.j_.set("Unknown"))}function Bu(n){return n.J_||(n.J_=function(t,r,a){const o=de(t);return o.M_(),new uL(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,a)}(n.datastore,n.asyncQueue,{xo:pL.bind(null,n),No:gL.bind(null,n),Lo:_L.bind(null,n),p_:yL.bind(null,n)}),n.G_.push(async e=>{e?(n.J_.h_(),bE(n)?wE(n):n.j_.set("Unknown")):(await n.J_.stop(),H1(n))})),n.J_}function pa(n){return n.Y_||(n.Y_=function(t,r,a){const o=de(t);return o.M_(),new cL(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,a)}(n.datastore,n.asyncQueue,{xo:()=>Promise.resolve(),No:TL.bind(null,n),Lo:IL.bind(null,n),D_:wL.bind(null,n),v_:bL.bind(null,n)}),n.G_.push(async e=>{e?(n.Y_.h_(),await Uu(n)):(await n.Y_.stop(),n.U_.length>0&&(re(xo,`Stopping write stream with ${n.U_.length} pending writes`),n.U_=[]))})),n.Y_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IE{constructor(e,t,r,a,o){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=a,this.removalCallback=o,this.deferred=new yn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(u=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,a,o){const u=Date.now()+r,h=new IE(e,t,u,a,o);return h.start(r),h}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new te(K.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function zu(n,e){if(Vt("AsyncQueue",`${e}: ${n}`),Ta(n))return new te(K.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wl{static emptySet(e){return new Wl(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||ce.comparator(t.key,r.key):(t,r)=>ce.comparator(t.key,r.key),this.keyedMap=dh(),this.sortedSet=new lt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Wl)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const a=t.getNext().key,o=r.getNext().key;if(!a.isEqual(o))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Wl;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lA{constructor(){this.Z_=new lt(ce.comparator)}track(e){const t=e.doc.key,r=this.Z_.get(t);r?e.type!==0&&r.type===3?this.Z_=this.Z_.insert(t,e):e.type===3&&r.type!==1?this.Z_=this.Z_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Z_=this.Z_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Z_=this.Z_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Z_=this.Z_.remove(t):e.type===1&&r.type===2?this.Z_=this.Z_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Z_=this.Z_.insert(t,{type:2,doc:e.doc}):pe():this.Z_=this.Z_.insert(t,e)}X_(){const e=[];return this.Z_.inorderTraversal((t,r)=>{e.push(r)}),e}}class vu{constructor(e,t,r,a,o,u,h,f,p){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=a,this.mutatedKeys=o,this.fromCache=u,this.syncStateChanged=h,this.excludesMetadataChanges=f,this.hasCachedResults=p}static fromInitialDocuments(e,t,r,a,o){const u=[];return t.forEach(h=>{u.push({type:0,doc:h})}),new vu(e,t,Wl.emptySet(t),u,r,a,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ud(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let a=0;a<t.length;a++)if(t[a].type!==r[a].type||!t[a].doc.isEqual(r[a].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AL{constructor(){this.ea=void 0,this.ta=[]}na(){return this.ta.some(e=>e.ra())}}class SL{constructor(){this.queries=uA(),this.onlineState="Unknown",this.ia=new Set}terminate(){(function(t,r){const a=de(t),o=a.queries;a.queries=uA(),o.forEach((u,h)=>{for(const f of h.ta)f.onError(r)})})(this,new te(K.ABORTED,"Firestore shutting down"))}}function uA(){return new rs(n=>BR(n),ud)}async function AE(n,e){const t=de(n);let r=3;const a=e.query;let o=t.queries.get(a);o?!o.na()&&e.ra()&&(r=2):(o=new AL,r=e.ra()?0:1);try{switch(r){case 0:o.ea=await t.onListen(a,!0);break;case 1:o.ea=await t.onListen(a,!1);break;case 2:await t.onFirstRemoteStoreListen(a)}}catch(u){const h=zu(u,`Initialization of query '${ql(e.query)}' failed`);return void e.onError(h)}t.queries.set(a,o),o.ta.push(e),e.sa(t.onlineState),o.ea&&e.oa(o.ea)&&RE(t)}async function SE(n,e){const t=de(n),r=e.query;let a=3;const o=t.queries.get(r);if(o){const u=o.ta.indexOf(e);u>=0&&(o.ta.splice(u,1),o.ta.length===0?a=e.ra()?0:1:!o.na()&&e.ra()&&(a=2))}switch(a){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function RL(n,e){const t=de(n);let r=!1;for(const a of e){const o=a.query,u=t.queries.get(o);if(u){for(const h of u.ta)h.oa(a)&&(r=!0);u.ea=a}}r&&RE(t)}function CL(n,e,t){const r=de(n),a=r.queries.get(e);if(a)for(const o of a.ta)o.onError(t);r.queries.delete(e)}function RE(n){n.ia.forEach(e=>{e.next()})}var av,cA;(cA=av||(av={}))._a="default",cA.Cache="cache";class CE{constructor(e,t,r){this.query=e,this.aa=t,this.ua=!1,this.ca=null,this.onlineState="Unknown",this.options=r||{}}oa(e){if(!this.options.includeMetadataChanges){const r=[];for(const a of e.docChanges)a.type!==3&&r.push(a);e=new vu(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ua?this.la(e)&&(this.aa.next(e),t=!0):this.ha(e,this.onlineState)&&(this.Pa(e),t=!0),this.ca=e,t}onError(e){this.aa.error(e)}sa(e){this.onlineState=e;let t=!1;return this.ca&&!this.ua&&this.ha(this.ca,e)&&(this.Pa(this.ca),t=!0),t}ha(e,t){if(!e.fromCache||!this.ra())return!0;const r=t!=="Offline";return(!this.options.Ta||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}la(e){if(e.docChanges.length>0)return!0;const t=this.ca&&this.ca.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}Pa(e){e=vu.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ua=!0,this.aa.next(e)}ra(){return this.options.source!==av.Cache}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DL{constructor(e,t){this.Ia=e,this.byteLength=t}Ea(){return"metadata"in this.Ia}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hA{constructor(e){this.serializer=e}ps(e){return li(this.serializer,e)}ys(e){return e.metadata.exists?l1(this.serializer,e.document,!1):ht.newNoDocument(this.ps(e.metadata.name),this.ws(e.metadata.readTime))}ws(e){return Mt(e)}}class PL{constructor(e,t,r){this.da=e,this.localStore=t,this.serializer=r,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=Q1(e)}Aa(e){this.progress.bytesLoaded+=e.byteLength;let t=this.progress.documentsLoaded;if(e.Ia.namedQuery)this.queries.push(e.Ia.namedQuery);else if(e.Ia.documentMetadata){this.documents.push({metadata:e.Ia.documentMetadata}),e.Ia.documentMetadata.exists||++t;const r=ze.fromString(e.Ia.documentMetadata.name);this.collectionGroups.add(r.get(r.length-2))}else e.Ia.document&&(this.documents[this.documents.length-1].document=e.Ia.document,++t);return t!==this.progress.documentsLoaded?(this.progress.documentsLoaded=t,Object.assign({},this.progress)):null}Ra(e){const t=new Map,r=new hA(this.serializer);for(const a of e)if(a.metadata.queries){const o=r.ps(a.metadata.name);for(const u of a.metadata.queries){const h=(t.get(u)||xe()).add(o);t.set(u,h)}}return t}async complete(){const e=await nL(this.localStore,new hA(this.serializer),this.documents,this.da.id),t=this.Ra(this.documents);for(const r of this.queries)await rL(this.localStore,r,t.get(r.name));return this.progress.taskState="Success",{progress:this.progress,Va:this.collectionGroups,ma:e}}}function Q1(n){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:n.totalDocuments,totalBytes:n.totalBytes}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W1{constructor(e){this.key=e}}class Y1{constructor(e){this.key=e}}class X1{constructor(e,t){this.query=e,this.fa=t,this.ga=null,this.hasCachedResults=!1,this.current=!1,this.pa=xe(),this.mutatedKeys=xe(),this.ya=FR(e),this.wa=new Wl(this.ya)}get Sa(){return this.fa}ba(e,t){const r=t?t.Da:new lA,a=t?t.wa:this.wa;let o=t?t.mutatedKeys:this.mutatedKeys,u=a,h=!1;const f=this.query.limitType==="F"&&a.size===this.query.limit?a.last():null,p=this.query.limitType==="L"&&a.size===this.query.limit?a.first():null;if(e.inorderTraversal((y,v)=>{const w=a.get(y),S=cd(this.query,v)?v:null,P=!!w&&this.mutatedKeys.has(w.key),U=!!S&&(S.hasLocalMutations||this.mutatedKeys.has(S.key)&&S.hasCommittedMutations);let L=!1;w&&S?w.data.isEqual(S.data)?P!==U&&(r.track({type:3,doc:S}),L=!0):this.va(w,S)||(r.track({type:2,doc:S}),L=!0,(f&&this.ya(S,f)>0||p&&this.ya(S,p)<0)&&(h=!0)):!w&&S?(r.track({type:0,doc:S}),L=!0):w&&!S&&(r.track({type:1,doc:w}),L=!0,(f||p)&&(h=!0)),L&&(S?(u=u.add(S),o=U?o.add(y):o.delete(y)):(u=u.delete(y),o=o.delete(y)))}),this.query.limit!==null)for(;u.size>this.query.limit;){const y=this.query.limitType==="F"?u.last():u.first();u=u.delete(y.key),o=o.delete(y.key),r.track({type:1,doc:y})}return{wa:u,Da:r,ls:h,mutatedKeys:o}}va(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,a){const o=this.wa;this.wa=e.wa,this.mutatedKeys=e.mutatedKeys;const u=e.Da.X_();u.sort((y,v)=>function(S,P){const U=L=>{switch(L){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return pe()}};return U(S)-U(P)}(y.type,v.type)||this.ya(y.doc,v.doc)),this.Ca(r),a=a!=null&&a;const h=t&&!a?this.Fa():[],f=this.pa.size===0&&this.current&&!a?1:0,p=f!==this.ga;return this.ga=f,u.length!==0||p?{snapshot:new vu(this.query,e.wa,o,u,e.mutatedKeys,f===0,p,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ma:h}:{Ma:h}}sa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({wa:this.wa,Da:new lA,mutatedKeys:this.mutatedKeys,ls:!1},!1)):{Ma:[]}}xa(e){return!this.fa.has(e)&&!!this.wa.has(e)&&!this.wa.get(e).hasLocalMutations}Ca(e){e&&(e.addedDocuments.forEach(t=>this.fa=this.fa.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.fa=this.fa.delete(t)),this.current=e.current)}Fa(){if(!this.current)return[];const e=this.pa;this.pa=xe(),this.wa.forEach(r=>{this.xa(r.key)&&(this.pa=this.pa.add(r.key))});const t=[];return e.forEach(r=>{this.pa.has(r)||t.push(new Y1(r))}),this.pa.forEach(r=>{e.has(r)||t.push(new W1(r))}),t}Oa(e){this.fa=e.gs,this.pa=xe();const t=this.ba(e.documents);return this.applyChanges(t,!0)}Na(){return vu.fromInitialDocuments(this.query,this.wa,this.mutatedKeys,this.ga===0,this.hasCachedResults)}}const Ia="SyncEngine";class xL{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class NL{constructor(e){this.key=e,this.Ba=!1}}class OL{constructor(e,t,r,a,o,u){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=a,this.currentUser=o,this.maxConcurrentLimboResolutions=u,this.La={},this.ka=new rs(h=>BR(h),ud),this.qa=new Map,this.Qa=new Set,this.$a=new lt(ce.comparator),this.Ua=new Map,this.Ka=new fE,this.Wa={},this.Ga=new Map,this.za=Po.Kn(),this.onlineState="Unknown",this.ja=void 0}get isPrimaryClient(){return this.ja===!0}}async function kL(n,e,t=!0){const r=Ap(n);let a;const o=r.ka.get(e);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),a=o.view.Na()):a=await Z1(r,e,t,!0),a}async function VL(n,e){const t=Ap(n);await Z1(t,e,!0,!1)}async function Z1(n,e,t,r){const a=await gu(n.localStore,Vn(e)),o=a.targetId,u=n.sharedClientState.addLocalQueryTarget(o,t);let h;return r&&(h=await DE(n,e,o,u==="current",a.resumeToken)),n.isPrimaryClient&&t&&Ip(n.remoteStore,a),h}async function DE(n,e,t,r,a){n.Ha=(v,w,S)=>async function(U,L,H,Y){let $=L.view.ba(H);$.ls&&($=await Km(U.localStore,L.query,!1).then(({documents:D})=>L.view.ba(D,$)));const oe=Y&&Y.targetChanges.get(L.targetId),ae=Y&&Y.targetMismatches.get(L.targetId)!=null,le=L.view.applyChanges($,U.isPrimaryClient,oe,ae);return ov(U,L.targetId,le.Ma),le.snapshot}(n,v,w,S);const o=await Km(n.localStore,e,!0),u=new X1(e,o.gs),h=u.ba(o.documents),f=fd.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",a),p=u.applyChanges(h,n.isPrimaryClient,f);ov(n,t,p.Ma);const y=new xL(e,t,u);return n.ka.set(e,y),n.qa.has(t)?n.qa.get(t).push(e):n.qa.set(t,[e]),p.snapshot}async function ML(n,e,t){const r=de(n),a=r.ka.get(e),o=r.qa.get(a.targetId);if(o.length>1)return r.qa.set(a.targetId,o.filter(u=>!ud(u,e))),void r.ka.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(a.targetId),r.sharedClientState.isActiveQueryTarget(a.targetId)||await _u(r.localStore,a.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(a.targetId),t&&yu(r.remoteStore,a.targetId),Eu(r,a.targetId)}).catch(Ea)):(Eu(r,a.targetId),await _u(r.localStore,a.targetId,!0))}async function LL(n,e){const t=de(n),r=t.ka.get(e),a=t.qa.get(r.targetId);t.isPrimaryClient&&a.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),yu(t.remoteStore,r.targetId))}async function UL(n,e,t){const r=OE(n);try{const a=await function(u,h){const f=de(u),p=gt.now(),y=h.reduce((S,P)=>S.add(P.key),xe());let v,w;return f.persistence.runTransaction("Locally write mutations","readwrite",S=>{let P=jn(),U=xe();return f.ds.getEntries(S,y).next(L=>{P=L,P.forEach((H,Y)=>{Y.isValidDocument()||(U=U.add(H))})}).next(()=>f.localDocuments.getOverlayedDocuments(S,P)).next(L=>{v=L;const H=[];for(const Y of h){const $=aM(Y,v.get(Y.key).overlayedDocument);$!=null&&H.push(new is(Y.key,$,PR($.value.mapValue),pt.exists(!0)))}return f.mutationQueue.addMutationBatch(S,p,H,h)}).next(L=>{w=L;const H=L.applyToLocalDocumentSet(v,U);return f.documentOverlayCache.saveOverlays(S,L.batchId,H)})}).then(()=>({batchId:w.batchId,changes:jR(v)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(a.batchId),function(u,h,f){let p=u.Wa[u.currentUser.toKey()];p||(p=new lt(Re)),p=p.insert(h,f),u.Wa[u.currentUser.toKey()]=p}(r,a.batchId,t),await ss(r,a.changes),await Uu(r.remoteStore)}catch(a){const o=zu(a,"Failed to persist write");t.reject(o)}}async function J1(n,e){const t=de(n);try{const r=await eL(t.localStore,e);e.targetChanges.forEach((a,o)=>{const u=t.Ua.get(o);u&&(ve(a.addedDocuments.size+a.modifiedDocuments.size+a.removedDocuments.size<=1),a.addedDocuments.size>0?u.Ba=!0:a.modifiedDocuments.size>0?ve(u.Ba):a.removedDocuments.size>0&&(ve(u.Ba),u.Ba=!1))}),await ss(t,r,e)}catch(r){await Ea(r)}}function dA(n,e,t){const r=de(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const a=[];r.ka.forEach((o,u)=>{const h=u.view.sa(e);h.snapshot&&a.push(h.snapshot)}),function(u,h){const f=de(u);f.onlineState=h;let p=!1;f.queries.forEach((y,v)=>{for(const w of v.ta)w.sa(h)&&(p=!0)}),p&&RE(f)}(r.eventManager,e),a.length&&r.La.p_(a),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function BL(n,e,t){const r=de(n);r.sharedClientState.updateQueryState(e,"rejected",t);const a=r.Ua.get(e),o=a&&a.key;if(o){let u=new lt(ce.comparator);u=u.insert(o,ht.newNoDocument(o,Te.min()));const h=xe().add(o),f=new dd(Te.min(),new Map,new lt(Re),u,h);await J1(r,f),r.$a=r.$a.remove(o),r.Ua.delete(e),NE(r)}else await _u(r.localStore,e,!1).then(()=>Eu(r,e,t)).catch(Ea)}async function zL(n,e){const t=de(n),r=e.batch.batchId;try{const a=await JM(t.localStore,e);xE(t,r,null),PE(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await ss(t,a)}catch(a){await Ea(a)}}async function FL(n,e,t){const r=de(n);try{const a=await function(u,h){const f=de(u);return f.persistence.runTransaction("Reject batch","readwrite-primary",p=>{let y;return f.mutationQueue.lookupMutationBatch(p,h).next(v=>(ve(v!==null),y=v.keys(),f.mutationQueue.removeMutationBatch(p,v))).next(()=>f.mutationQueue.performConsistencyCheck(p)).next(()=>f.documentOverlayCache.removeOverlaysForBatchId(p,y,h)).next(()=>f.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(p,y)).next(()=>f.localDocuments.getDocuments(p,y))})}(r.localStore,e);xE(r,e,t),PE(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await ss(r,a)}catch(a){await Ea(a)}}async function qL(n,e){const t=de(n);ba(t.remoteStore)||re(Ia,"The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const r=await function(u){const h=de(u);return h.persistence.runTransaction("Get highest unacknowledged batch id","readonly",f=>h.mutationQueue.getHighestUnacknowledgedBatchId(f))}(t.localStore);if(r===ra)return void e.resolve();const a=t.Ga.get(r)||[];a.push(e),t.Ga.set(r,a)}catch(r){const a=zu(r,"Initialization of waitForPendingWrites() operation failed");e.reject(a)}}function PE(n,e){(n.Ga.get(e)||[]).forEach(t=>{t.resolve()}),n.Ga.delete(e)}function xE(n,e,t){const r=de(n);let a=r.Wa[r.currentUser.toKey()];if(a){const o=a.get(e);o&&(t?o.reject(t):o.resolve(),a=a.remove(e)),r.Wa[r.currentUser.toKey()]=a}}function Eu(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.qa.get(e))n.ka.delete(r),t&&n.La.Ja(r,t);n.qa.delete(e),n.isPrimaryClient&&n.Ka.br(e).forEach(r=>{n.Ka.containsKey(r)||eC(n,r)})}function eC(n,e){n.Qa.delete(e.path.canonicalString());const t=n.$a.get(e);t!==null&&(yu(n.remoteStore,t),n.$a=n.$a.remove(e),n.Ua.delete(t),NE(n))}function ov(n,e,t){for(const r of t)r instanceof W1?(n.Ka.addReference(r.key,e),jL(n,r)):r instanceof Y1?(re(Ia,"Document no longer in limbo: "+r.key),n.Ka.removeReference(r.key,e),n.Ka.containsKey(r.key)||eC(n,r.key)):pe()}function jL(n,e){const t=e.key,r=t.path.canonicalString();n.$a.get(t)||n.Qa.has(r)||(re(Ia,"New document in limbo: "+t),n.Qa.add(r),NE(n))}function NE(n){for(;n.Qa.size>0&&n.$a.size<n.maxConcurrentLimboResolutions;){const e=n.Qa.values().next().value;n.Qa.delete(e);const t=new ce(ze.fromString(e)),r=n.za.next();n.Ua.set(r,new NL(t)),n.$a=n.$a.insert(t,r),Ip(n.remoteStore,new Hi(Vn(ku(t.path)),r,"TargetPurposeLimboResolution",Fn.ae))}}async function ss(n,e,t){const r=de(n),a=[],o=[],u=[];r.ka.isEmpty()||(r.ka.forEach((h,f)=>{u.push(r.Ha(f,e,t).then(p=>{var y;if((p||t)&&r.isPrimaryClient){const v=p?!p.fromCache:(y=t==null?void 0:t.targetChanges.get(f.targetId))===null||y===void 0?void 0:y.current;r.sharedClientState.updateQueryState(f.targetId,v?"current":"not-current")}if(p){a.push(p);const v=_E.Yi(f.targetId,p);o.push(v)}}))}),await Promise.all(u),r.La.p_(a),await async function(f,p){const y=de(f);try{await y.persistence.runTransaction("notifyLocalViewChanges","readwrite",v=>q.forEach(p,w=>q.forEach(w.Hi,S=>y.persistence.referenceDelegate.addReference(v,w.targetId,S)).next(()=>q.forEach(w.Ji,S=>y.persistence.referenceDelegate.removeReference(v,w.targetId,S)))))}catch(v){if(!Ta(v))throw v;re(yE,"Failed to update sequence numbers: "+v)}for(const v of p){const w=v.targetId;if(!v.fromCache){const S=y.Ts.get(w),P=S.snapshotVersion,U=S.withLastLimboFreeSnapshotVersion(P);y.Ts=y.Ts.insert(w,U)}}}(r.localStore,o))}async function HL(n,e){const t=de(n);if(!t.currentUser.isEqual(e)){re(Ia,"User change. New user:",e.toKey());const r=await x1(t.localStore,e);t.currentUser=e,function(o,u){o.Ga.forEach(h=>{h.forEach(f=>{f.reject(new te(K.CANCELLED,u))})}),o.Ga.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ss(t,r.Rs)}}function GL(n,e){const t=de(n),r=t.Ua.get(e);if(r&&r.Ba)return xe().add(r.key);{let a=xe();const o=t.qa.get(e);if(!o)return a;for(const u of o){const h=t.ka.get(u);a=a.unionWith(h.view.Sa)}return a}}async function $L(n,e){const t=de(n),r=await Km(t.localStore,e.query,!0),a=e.view.Oa(r);return t.isPrimaryClient&&ov(t,e.targetId,a.Ma),a}async function KL(n,e){const t=de(n);return V1(t.localStore,e).then(r=>ss(t,r))}async function QL(n,e,t,r){const a=de(n),o=await function(h,f){const p=de(h),y=de(p.mutationQueue);return p.persistence.runTransaction("Lookup mutation documents","readonly",v=>y.Ln(v,f).next(w=>w?p.localDocuments.getDocuments(v,w):q.resolve(null)))}(a.localStore,e);o!==null?(t==="pending"?await Uu(a.remoteStore):t==="acknowledged"||t==="rejected"?(xE(a,e,r||null),PE(a,e),function(h,f){de(de(h).mutationQueue).qn(f)}(a.localStore,e)):pe(),await ss(a,o)):re(Ia,"Cannot apply mutation batch with id: "+e)}async function WL(n,e){const t=de(n);if(Ap(t),OE(t),e===!0&&t.ja!==!0){const r=t.sharedClientState.getAllActiveQueryTargets(),a=await fA(t,r.toArray());t.ja=!0,await sv(t.remoteStore,!0);for(const o of a)Ip(t.remoteStore,o)}else if(e===!1&&t.ja!==!1){const r=[];let a=Promise.resolve();t.qa.forEach((o,u)=>{t.sharedClientState.isLocalQueryTarget(u)?r.push(u):a=a.then(()=>(Eu(t,u),_u(t.localStore,u,!0))),yu(t.remoteStore,u)}),await a,await fA(t,r),function(u){const h=de(u);h.Ua.forEach((f,p)=>{yu(h.remoteStore,p)}),h.Ka.Dr(),h.Ua=new Map,h.$a=new lt(ce.comparator)}(t),t.ja=!1,await sv(t.remoteStore,!1)}}async function fA(n,e,t){const r=de(n),a=[],o=[];for(const u of e){let h;const f=r.qa.get(u);if(f&&f.length!==0){h=await gu(r.localStore,Vn(f[0]));for(const p of f){const y=r.ka.get(p),v=await $L(r,y);v.snapshot&&o.push(v.snapshot)}}else{const p=await k1(r.localStore,u);h=await gu(r.localStore,p),await DE(r,tC(p),u,!1,h.resumeToken)}a.push(h)}return r.La.p_(o),a}function tC(n){return UR(n.path,n.collectionGroup,n.orderBy,n.filters,n.limit,"F",n.startAt,n.endAt)}function YL(n){return function(t){return de(de(t).persistence).zi()}(de(n).localStore)}async function XL(n,e,t,r){const a=de(n);if(a.ja)return void re(Ia,"Ignoring unexpected query state notification.");const o=a.qa.get(e);if(o&&o.length>0)switch(t){case"current":case"not-current":{const u=await V1(a.localStore,zR(o[0])),h=dd.createSynthesizedRemoteEventForCurrentChange(e,t==="current",Dt.EMPTY_BYTE_STRING);await ss(a,u,h);break}case"rejected":await _u(a.localStore,e,!0),Eu(a,e,r);break;default:pe()}}async function ZL(n,e,t){const r=Ap(n);if(r.ja){for(const a of e){if(r.qa.has(a)&&r.sharedClientState.isActiveQueryTarget(a)){re(Ia,"Adding an already active target "+a);continue}const o=await k1(r.localStore,a),u=await gu(r.localStore,o);await DE(r,tC(o),u.targetId,!1,u.resumeToken),Ip(r.remoteStore,u)}for(const a of t)r.qa.has(a)&&await _u(r.localStore,a,!1).then(()=>{yu(r.remoteStore,a),Eu(r,a)}).catch(Ea)}}function Ap(n){const e=de(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=J1.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=GL.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=BL.bind(null,e),e.La.p_=RL.bind(null,e.eventManager),e.La.Ja=CL.bind(null,e.eventManager),e}function OE(n){const e=de(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=zL.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=FL.bind(null,e),e}function JL(n,e,t){const r=de(n);(async function(o,u,h){try{const f=await u.getMetadata();if(await function(S,P){const U=de(S),L=Mt(P.createTime);return U.persistence.runTransaction("hasNewerBundle","readonly",H=>U.Yr.getBundleMetadata(H,P.id)).then(H=>!!H&&H.createTime.compareTo(L)>=0)}(o.localStore,f))return await u.close(),h._completeWith(function(S){return{taskState:"Success",documentsLoaded:S.totalDocuments,bytesLoaded:S.totalBytes,totalDocuments:S.totalDocuments,totalBytes:S.totalBytes}}(f)),Promise.resolve(new Set);h._updateProgress(Q1(f));const p=new PL(f,o.localStore,u.serializer);let y=await u.Ya();for(;y;){const w=await p.Aa(y);w&&h._updateProgress(w),y=await u.Ya()}const v=await p.complete();return await ss(o,v.ma,void 0),await function(S,P){const U=de(S);return U.persistence.runTransaction("Save bundle","readwrite",L=>U.Yr.saveBundleMetadata(L,P))}(o.localStore,f),h._completeWith(v.progress),Promise.resolve(v.Va)}catch(f){return hi(Ia,`Loading bundle failed with ${f}`),h._failWith(f),Promise.resolve(new Set)}})(r,e,t).then(a=>{r.sharedClientState.notifyBundleLoaded(a)})}class Gh{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=md(e.databaseInfo.databaseId),this.sharedClientState=this.Za(e),this.persistence=this.Xa(e),await this.persistence.start(),this.localStore=this.eu(e),this.gcScheduler=this.tu(e,this.localStore),this.indexBackfillerScheduler=this.nu(e,this.localStore)}tu(e,t){return null}nu(e,t){return null}eu(e){return P1(this.persistence,new D1,e.initialUser,this.serializer)}Xa(e){return new mE(bp.ri,this.serializer)}Za(e){return new z1}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Gh.provider={build:()=>new Gh};class e2 extends Gh{constructor(e){super(),this.cacheSizeBytes=e}tu(e,t){ve(this.persistence.referenceDelegate instanceof $m);const r=this.persistence.referenceDelegate.garbageCollector;return new b1(r,e.asyncQueue,t)}Xa(e){const t=this.cacheSizeBytes!==void 0?In.withCacheSize(this.cacheSizeBytes):In.DEFAULT;return new mE(r=>$m.ri(r,t),this.serializer)}}class nC extends Gh{constructor(e,t,r){super(),this.ru=e,this.cacheSizeBytes=t,this.forceOwnership=r,this.kind="persistent",this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.ru.initialize(this,e),await OE(this.ru.syncEngine),await Uu(this.ru.remoteStore),await this.persistence.Ci(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}eu(e){return P1(this.persistence,new D1,e.initialUser,this.serializer)}tu(e,t){const r=this.persistence.referenceDelegate.garbageCollector;return new b1(r,e.asyncQueue,t)}nu(e,t){const r=new uV(t,this.persistence);return new lV(e.asyncQueue,r)}Xa(e){const t=gE(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?In.withCacheSize(this.cacheSizeBytes):In.DEFAULT;return new pE(this.synchronizeTabs,t,e.clientId,r,e.asyncQueue,F1(),Em(),this.serializer,this.sharedClientState,!!this.forceOwnership)}Za(e){return new z1}}class t2 extends nC{constructor(e,t){super(e,t,!1),this.ru=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.ru.syncEngine;this.sharedClientState instanceof _y&&(this.sharedClientState.syncEngine={uo:QL.bind(null,t),co:XL.bind(null,t),lo:ZL.bind(null,t),zi:YL.bind(null,t),ao:KL.bind(null,t)},await this.sharedClientState.start()),await this.persistence.Ci(async r=>{await WL(this.ru.syncEngine,r),this.gcScheduler&&(r&&!this.gcScheduler.started?this.gcScheduler.start():r||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(r&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():r||this.indexBackfillerScheduler.stop())})}Za(e){const t=F1();if(!_y.D(t))throw new te(K.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const r=gE(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new _y(t,e.asyncQueue,r,e.clientId,e.initialUser)}}class $h{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>dA(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=HL.bind(null,this.syncEngine),await sv(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new SL}()}createDatastore(e){const t=md(e.databaseInfo.databaseId),r=function(o){return new lL(o)}(e.databaseInfo);return function(o,u,h,f){return new dL(o,u,h,f)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,a,o,u,h){return new mL(r,a,o,u,h)}(this.localStore,this.datastore,e.asyncQueue,t=>dA(this.syncEngine,t,0),function(){return sA.D()?new sA:new iL}())}createSyncEngine(e,t){return function(a,o,u,h,f,p,y){const v=new OL(a,o,u,h,f,p);return y&&(v.ja=!0),v}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(a){const o=de(a);re(xo,"RemoteStore shutting down."),o.W_.add(5),await Lu(o),o.z_.shutdown(),o.j_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}$h.provider={build:()=>new $h};function mA(n,e=10240){let t=0;return{async read(){if(t<n.byteLength){const r={value:n.slice(t,t+e),done:!1};return t+=e,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Sp{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.iu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.iu(this.observer.error,e):Vt("Uncaught Error in snapshot listener:",e.toString()))}su(){this.muted=!0}iu(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n2{constructor(e,t){this.ou=e,this.serializer=t,this.metadata=new yn,this.buffer=new Uint8Array,this._u=function(){return new TextDecoder("utf-8")}(),this.au().then(r=>{r&&r.Ea()?this.metadata.resolve(r.Ia.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(r==null?void 0:r.Ia)}`))},r=>this.metadata.reject(r))}close(){return this.ou.cancel()}async getMetadata(){return this.metadata.promise}async Ya(){return await this.getMetadata(),this.au()}async au(){const e=await this.uu();if(e===null)return null;const t=this._u.decode(e),r=Number(t);isNaN(r)&&this.cu(`length string (${t}) is not valid number`);const a=await this.lu(r);return new DL(JSON.parse(a),e.length+r)}hu(){return this.buffer.findIndex(e=>e===123)}async uu(){for(;this.hu()<0&&!await this.Pu(););if(this.buffer.length===0)return null;const e=this.hu();e<0&&this.cu("Reached the end of bundle when a length string is expected.");const t=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),t}async lu(e){for(;this.buffer.length<e;)await this.Pu()&&this.cu("Reached the end of bundle when more is expected.");const t=this._u.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),t}cu(e){throw this.ou.cancel(),new Error(`Invalid bundle format: ${e}`)}async Pu(){const e=await this.ou.read();if(!e.done){const t=new Uint8Array(this.buffer.length+e.value.length);t.set(this.buffer),t.set(e.value,this.buffer.length),this.buffer=t}return e.done}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r2{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new te(K.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const t=await async function(a,o){const u=de(a),h={documents:o.map(v=>jh(u.serializer,v))},f=await u.Co("BatchGetDocuments",u.serializer.databaseId,ze.emptyPath(),h,o.length),p=new Map;f.forEach(v=>{const w=pM(u.serializer,v);p.set(w.key.toString(),w)});const y=[];return o.forEach(v=>{const w=p.get(v.toString());ve(!!w),y.push(w)}),y}(this.datastore,e);return t.forEach(r=>this.recordVersion(r)),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastTransactionError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new Mu(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const e=this.readVersions;this.mutations.forEach(t=>{e.delete(t.key.toString())}),e.forEach((t,r)=>{const a=ce.fromPath(r);this.mutations.push(new iE(a,this.precondition(a)))}),await async function(r,a){const o=de(r),u={writes:a.map(h=>Hh(o.serializer,h))};await o.So("Commit",o.serializer.databaseId,ze.emptyPath(),u)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw pe();t=Te.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!t.isEqual(r))throw new te(K.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?t.isEqual(Te.min())?pt.exists(!1):pt.updateTime(t):pt.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(Te.min()))throw new te(K.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return pt.updateTime(t)}return pt.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
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
 */class i2{constructor(e,t,r,a,o){this.asyncQueue=e,this.datastore=t,this.options=r,this.updateFunction=a,this.deferred=o,this.Tu=r.maxAttempts,this.a_=new EE(this.asyncQueue,"transaction_retry")}Iu(){this.Tu-=1,this.Eu()}Eu(){this.a_.Xo(async()=>{const e=new r2(this.datastore),t=this.du(e);t&&t.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(a=>{this.Au(a)}))}).catch(r=>{this.Au(r)})})}du(e){try{const t=this.updateFunction(e);return!ad(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(t){return this.deferred.reject(t),null}}Au(e){this.Tu>0&&this.Ru(e)?(this.Tu-=1,this.asyncQueue.enqueueAndForget(()=>(this.Eu(),Promise.resolve()))):this.deferred.reject(e)}Ru(e){if(e.name==="FirebaseError"){const t=e.code;return t==="aborted"||t==="failed-precondition"||t==="already-exists"||!JR(t)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ga="FirestoreClient";class s2{constructor(e,t,r,a,o){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=a,this.user=un.UNAUTHENTICATED,this.clientId=iR.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,async u=>{re(ga,"Received user=",u.uid),await this.authCredentialListener(u),this.user=u}),this.appCheckCredentials.start(r,u=>(re(ga,"Received new app check token=",u),this.appCheckCredentialListener(u,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new yn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=zu(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function vy(n,e){n.asyncQueue.verifyOperationInProgress(),re(ga,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async a=>{r.isEqual(a)||(await x1(e.localStore,a),r=a)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function pA(n,e){n.asyncQueue.verifyOperationInProgress();const t=await kE(n);re(ga,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>oA(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,a)=>oA(e.remoteStore,a)),n._onlineComponents=e}async function kE(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){re(ga,"Using user provided OfflineComponentProvider");try{await vy(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(a){return a.name==="FirebaseError"?a.code===K.FAILED_PRECONDITION||a.code===K.UNIMPLEMENTED:!(typeof DOMException<"u"&&a instanceof DOMException)||a.code===22||a.code===20||a.code===11}(t))throw t;hi("Error using user provided cache. Falling back to memory cache: "+t),await vy(n,new Gh)}}else re(ga,"Using default OfflineComponentProvider"),await vy(n,new e2(void 0));return n._offlineComponents}async function Rp(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(re(ga,"Using user provided OnlineComponentProvider"),await pA(n,n._uninitializedComponentsProvider._online)):(re(ga,"Using default OnlineComponentProvider"),await pA(n,new $h))),n._onlineComponents}function rC(n){return kE(n).then(e=>e.persistence)}function VE(n){return kE(n).then(e=>e.localStore)}function iC(n){return Rp(n).then(e=>e.remoteStore)}function ME(n){return Rp(n).then(e=>e.syncEngine)}function a2(n){return Rp(n).then(e=>e.datastore)}async function Tu(n){const e=await Rp(n),t=e.eventManager;return t.onListen=kL.bind(null,e.syncEngine),t.onUnlisten=ML.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=VL.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=LL.bind(null,e.syncEngine),t}function o2(n){return n.asyncQueue.enqueue(async()=>{const e=await rC(n),t=await iC(n);return e.setNetworkEnabled(!0),function(a){const o=de(a);return o.W_.delete(0),pd(o)}(t)})}function l2(n){return n.asyncQueue.enqueue(async()=>{const e=await rC(n),t=await iC(n);return e.setNetworkEnabled(!1),async function(a){const o=de(a);o.W_.add(0),await Lu(o),o.j_.set("Offline")}(t)})}function u2(n,e){const t=new yn;return n.asyncQueue.enqueueAndForget(async()=>async function(a,o,u){try{const h=await function(p,y){const v=de(p);return v.persistence.runTransaction("read document","readonly",w=>v.localDocuments.getDocument(w,y))}(a,o);h.isFoundDocument()?u.resolve(h):h.isNoDocument()?u.resolve(null):u.reject(new te(K.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(h){const f=zu(h,`Failed to get document '${o} from cache`);u.reject(f)}}(await VE(n),e,t)),t.promise}function sC(n,e,t={}){const r=new yn;return n.asyncQueue.enqueueAndForget(async()=>function(o,u,h,f,p){const y=new Sp({next:w=>{y.su(),u.enqueueAndForget(()=>SE(o,v));const S=w.docs.has(h);!S&&w.fromCache?p.reject(new te(K.UNAVAILABLE,"Failed to get document because the client is offline.")):S&&w.fromCache&&f&&f.source==="server"?p.reject(new te(K.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):p.resolve(w)},error:w=>p.reject(w)}),v=new CE(ku(h.path),y,{includeMetadataChanges:!0,Ta:!0});return AE(o,v)}(await Tu(n),n.asyncQueue,e,t,r)),r.promise}function c2(n,e){const t=new yn;return n.asyncQueue.enqueueAndForget(async()=>async function(a,o,u){try{const h=await Km(a,o,!0),f=new X1(o,h.gs),p=f.ba(h.documents),y=f.applyChanges(p,!1);u.resolve(y.snapshot)}catch(h){const f=zu(h,`Failed to execute query '${o} against cache`);u.reject(f)}}(await VE(n),e,t)),t.promise}function aC(n,e,t={}){const r=new yn;return n.asyncQueue.enqueueAndForget(async()=>function(o,u,h,f,p){const y=new Sp({next:w=>{y.su(),u.enqueueAndForget(()=>SE(o,v)),w.fromCache&&f.source==="server"?p.reject(new te(K.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):p.resolve(w)},error:w=>p.reject(w)}),v=new CE(h,y,{includeMetadataChanges:!0,Ta:!0});return AE(o,v)}(await Tu(n),n.asyncQueue,e,t,r)),r.promise}function h2(n,e){const t=new Sp(e);return n.asyncQueue.enqueueAndForget(async()=>function(a,o){de(a).ia.add(o),o.next()}(await Tu(n),t)),()=>{t.su(),n.asyncQueue.enqueueAndForget(async()=>function(a,o){de(a).ia.delete(o)}(await Tu(n),t))}}function d2(n,e,t,r){const a=function(u,h){let f;return f=typeof u=="string"?Gv().encode(u):u,function(y,v){return new n2(y,v)}(function(y,v){if(y instanceof Uint8Array)return mA(y,v);if(y instanceof ArrayBuffer)return mA(new Uint8Array(y),v);if(y instanceof ReadableStream)return y.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(f),h)}(t,md(e));n.asyncQueue.enqueueAndForget(async()=>{JL(await ME(n),a,r)})}function f2(n,e){return n.asyncQueue.enqueue(async()=>function(r,a){const o=de(r);return o.persistence.runTransaction("Get named query","readonly",u=>o.Yr.getNamedQuery(u,a))}(await VE(n),e))}/**
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
 */function oC(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gA=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LE(n,e,t){if(!t)throw new te(K.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function lC(n,e,t,r){if(e===!0&&r===!0)throw new te(K.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function _A(n){if(!ce.isDocumentKey(n))throw new te(K.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function yA(n){if(ce.isDocumentKey(n))throw new te(K.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Cp(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":pe()}function Xe(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new te(K.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Cp(n);throw new te(K.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}function uC(n,e){if(e<=0)throw new te(K.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cC="firestore.googleapis.com",vA=!0;class EA{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new te(K.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=cC,this.ssl=vA}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:vA;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=v1;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<kM)throw new te(K.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}lC("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=oC((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new te(K.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new te(K.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new te(K.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,a){return r.timeoutSeconds===a.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class gd{constructor(e,t,r,a){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=a,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new EA({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new te(K.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new te(K.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new EA(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Xk;switch(r.type){case"firstParty":return new tV(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new te(K.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=gA.get(t);r&&(re("ComponentProvider","Removing Datastore"),gA.delete(t),r.terminate())}(this),Promise.resolve()}}function m2(n,e,t,r={}){var a;const o=(n=Xe(n,gd))._getSettings(),u=Object.assign(Object.assign({},o),{emulatorOptions:n._getEmulatorOptions()}),h=`${e}:${t}`;o.host!==cC&&o.host!==h&&hi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const f=Object.assign(Object.assign({},o),{host:h,ssl:!1,emulatorOptions:r});if(!aa(f,u)&&(n._setSettings(f),r.mockUserToken)){let p,y;if(typeof r.mockUserToken=="string")p=r.mockUserToken,y=un.MOCK_USER;else{p=AO(r.mockUserToken,(a=n._app)===null||a===void 0?void 0:a.options.projectId);const v=r.mockUserToken.sub||r.mockUserToken.user_id;if(!v)throw new te(K.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");y=new un(v)}n._authCredentials=new Zk(new rR(p,y))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Mn=class hC{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new hC(this.firestore,e,this._query)}},Tt=class dC{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ia(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new dC(this.firestore,e,this._key)}},ia=class fC extends Mn{constructor(e,t,r){super(e,t,ku(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Tt(this.firestore,null,new ce(e))}withConverter(e){return new fC(this.firestore,e,this._path)}};function UE(n,e,...t){if(n=Ae(n),LE("collection","path",e),n instanceof gd){const r=ze.fromString(e,...t);return yA(r),new ia(n,null,r)}{if(!(n instanceof Tt||n instanceof ia))throw new te(K.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ze.fromString(e,...t));return yA(r),new ia(n.firestore,null,r)}}function p2(n,e){if(n=Xe(n,gd),LE("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new te(K.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new Mn(n,null,function(r){return new ns(ze.emptyPath(),r)}(e))}function Ji(n,e,...t){if(n=Ae(n),arguments.length===1&&(e=iR.newId()),LE("doc","path",e),n instanceof gd){const r=ze.fromString(e,...t);return _A(r),new Tt(n,null,new ce(r))}{if(!(n instanceof Tt||n instanceof ia))throw new te(K.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ze.fromString(e,...t));return _A(r),new Tt(n.firestore,n instanceof ia?n.converter:null,new ce(r))}}function mC(n,e){return n=Ae(n),e=Ae(e),(n instanceof Tt||n instanceof ia)&&(e instanceof Tt||e instanceof ia)&&n.firestore===e.firestore&&n.path===e.path&&n.converter===e.converter}function pC(n,e){return n=Ae(n),e=Ae(e),n instanceof Mn&&e instanceof Mn&&n.firestore===e.firestore&&ud(n._query,e._query)&&n.converter===e.converter}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TA="AsyncQueue";class wA{constructor(e=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new EE(this,"async_queue_retry"),this.Su=()=>{const r=Em();r&&re(TA,"Visibility state changed to "+r.visibilityState),this.a_.t_()},this.bu=e;const t=Em();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Su)}get isShuttingDown(){return this.mu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Du(),this.vu(e)}enterRestrictedMode(e){if(!this.mu){this.mu=!0,this.yu=e||!1;const t=Em();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Su)}}enqueue(e){if(this.Du(),this.mu)return new Promise(()=>{});const t=new yn;return this.vu(()=>this.mu&&this.yu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Vu.push(e),this.Cu()))}async Cu(){if(this.Vu.length!==0){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(e){if(!Ta(e))throw e;re(TA,"Operation failed with retryable error: "+e)}this.Vu.length>0&&this.a_.Xo(()=>this.Cu())}}vu(e){const t=this.bu.then(()=>(this.pu=!0,e().catch(r=>{this.gu=r,this.pu=!1;const a=function(u){let h=u.message||"";return u.stack&&(h=u.stack.includes(u.message)?u.stack:u.message+`
`+u.stack),h}(r);throw Vt("INTERNAL UNHANDLED ERROR: ",a),r}).then(r=>(this.pu=!1,r))));return this.bu=t,t}enqueueAfterDelay(e,t,r){this.Du(),this.wu.indexOf(e)>-1&&(t=0);const a=IE.createAndSchedule(this,e,t,r,o=>this.Fu(o));return this.fu.push(a),a}Du(){this.gu&&pe()}verifyOperationInProgress(){}async Mu(){let e;do e=this.bu,await e;while(e!==this.bu)}xu(e){for(const t of this.fu)if(t.timerId===e)return!0;return!1}Ou(e){return this.Mu().then(()=>{this.fu.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.fu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Mu()})}Nu(e){this.wu.push(e)}Fu(e){const t=this.fu.indexOf(e);this.fu.splice(t,1)}}function lv(n){return function(t,r){if(typeof t!="object"||t===null)return!1;const a=t;for(const o of r)if(o in a&&typeof a[o]=="function")return!0;return!1}(n,["next","error","complete"])}class g2{constructor(){this._progressObserver={},this._taskCompletionResolver=new yn,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,t,r){this._progressObserver={next:e,error:t,complete:r}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,t){return this._taskCompletionResolver.promise.then(e,t)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _2=-1;let Lt=class extends gd{constructor(e,t,r,a){super(e,t,r,a),this.type="firestore",this._queue=new wA,this._persistenceKey=(a==null?void 0:a.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new wA(e),this._firestoreClient=void 0,await e}}};function Sn(n){if(n._terminated)throw new te(K.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||gC(n),n._firestoreClient}function gC(n){var e,t,r;const a=n._freezeSettings(),o=function(h,f,p,y){return new UV(h,f,p,y.host,y.ssl,y.experimentalForceLongPolling,y.experimentalAutoDetectLongPolling,oC(y.experimentalLongPollingOptions),y.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,a);n._componentsProvider||!((t=a.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=a.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:a.localCache._offlineComponentProvider,_online:a.localCache._onlineComponentProvider}),n._firestoreClient=new s2(n._authCredentials,n._appCheckCredentials,n._queue,o,n._componentsProvider&&function(h){const f=h==null?void 0:h._online.build();return{_offline:h==null?void 0:h._offline.build(f),_online:f}}(n._componentsProvider))}function y2(n,e){hi("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const t=n._freezeSettings();return _C(n,$h.provider,{build:r=>new nC(r,t.cacheSizeBytes,e==null?void 0:e.forceOwnership)}),Promise.resolve()}async function v2(n){hi("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const e=n._freezeSettings();_C(n,$h.provider,{build:t=>new t2(t,e.cacheSizeBytes)})}function _C(n,e,t){if((n=Xe(n,Lt))._firestoreClient||n._terminated)throw new te(K.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.");if(n._componentsProvider||n._getSettings().localCache)throw new te(K.FAILED_PRECONDITION,"SDK cache is already specified.");n._componentsProvider={_online:e,_offline:t},gC(n)}function E2(n){if(n._initialized&&!n._terminated)throw new te(K.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new yn;return n._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(r){if(!oi.D())return Promise.resolve();const a=r+C1;await oi.delete(a)}(gE(n._databaseId,n._persistenceKey)),e.resolve()}catch(t){e.reject(t)}}),e.promise}function T2(n){return function(t){const r=new yn;return t.asyncQueue.enqueueAndForget(async()=>qL(await ME(t),r)),r.promise}(Sn(n=Xe(n,Lt)))}function w2(n){return o2(Sn(n=Xe(n,Lt)))}function b2(n){return l2(Sn(n=Xe(n,Lt)))}function I2(n,e){const t=Sn(n=Xe(n,Lt)),r=new g2;return d2(t,n._databaseId,e,r),r}function A2(n,e){return f2(Sn(n=Xe(n,Lt)),e).then(t=>t?new Mn(n,null,t.query):null)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{constructor(e){this._byteString=e}static fromBase64String(e){try{return new fi(Dt.fromBase64String(e))}catch(t){throw new te(K.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new fi(Dt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _a=class{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new te(K.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new mt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Uo=class{constructor(e){this._methodName=e}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dp{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new te(K.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new te(K.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Re(this._lat,e._lat)||Re(this._long,e._long)}}/**
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
 */class BE{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,a){if(r.length!==a.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==a[o])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S2=/^__.*__$/;class R2{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new is(e,this.data,this.fieldMask,t,this.fieldTransforms):new Vu(e,this.data,t,this.fieldTransforms)}}class yC{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new is(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function vC(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw pe()}}class Pp{constructor(e,t,r,a,o,u){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=a,o===void 0&&this.Bu(),this.fieldTransforms=o||[],this.fieldMask=u||[]}get path(){return this.settings.path}get Lu(){return this.settings.Lu}ku(e){return new Pp(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}qu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),a=this.ku({path:r,Qu:!1});return a.$u(e),a}Uu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),a=this.ku({path:r,Qu:!1});return a.Bu(),a}Ku(e){return this.ku({path:void 0,Qu:!0})}Wu(e){return Xm(e,this.settings.methodName,this.settings.Gu||!1,this.path,this.settings.zu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Bu(){if(this.path)for(let e=0;e<this.path.length;e++)this.$u(this.path.get(e))}$u(e){if(e.length===0)throw this.Wu("Document fields must not be empty");if(vC(this.Lu)&&S2.test(e))throw this.Wu('Document fields cannot begin and end with "__"')}}class C2{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||md(e)}ju(e,t,r,a=!1){return new Pp({Lu:e,methodName:t,zu:r,path:mt.emptyPath(),Qu:!1,Gu:a},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Bo(n){const e=n._freezeSettings(),t=md(n._databaseId);return new C2(n._databaseId,!!e.ignoreUndefinedProperties,t)}function xp(n,e,t,r,a,o={}){const u=n.ju(o.merge||o.mergeFields?2:0,e,t,a);$E("Data must be an object, but it was:",u,r);const h=wC(r,u);let f,p;if(o.merge)f=new qn(u.fieldMask),p=u.fieldTransforms;else if(o.mergeFields){const y=[];for(const v of o.mergeFields){const w=uv(e,v,t);if(!u.contains(w))throw new te(K.INVALID_ARGUMENT,`Field '${w}' is specified in your field mask but missing from your input data.`);IC(y,w)||y.push(w)}f=new qn(y),p=u.fieldTransforms.filter(v=>f.covers(v.field))}else f=null,p=u.fieldTransforms;return new R2(new _n(h),f,p)}class _d extends Uo{_toFieldTransform(e){if(e.Lu!==2)throw e.Lu===1?e.Wu(`${this._methodName}() can only appear at the top level of your update data`):e.Wu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof _d}}function EC(n,e,t){return new Pp({Lu:3,zu:e.settings.zu,methodName:n._methodName,Qu:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class zE extends Uo{_toFieldTransform(e){return new hd(e.path,new fu)}isEqual(e){return e instanceof zE}}class FE extends Uo{constructor(e,t){super(e),this.Hu=t}_toFieldTransform(e){const t=EC(this,e,!0),r=this.Hu.map(o=>zo(o,t)),a=new So(r);return new hd(e.path,a)}isEqual(e){return e instanceof FE&&aa(this.Hu,e.Hu)}}class qE extends Uo{constructor(e,t){super(e),this.Hu=t}_toFieldTransform(e){const t=EC(this,e,!0),r=this.Hu.map(o=>zo(o,t)),a=new Ro(r);return new hd(e.path,a)}isEqual(e){return e instanceof qE&&aa(this.Hu,e.Hu)}}class jE extends Uo{constructor(e,t){super(e),this.Ju=t}_toFieldTransform(e){const t=new mu(e.serializer,$R(e.serializer,this.Ju));return new hd(e.path,t)}isEqual(e){return e instanceof jE&&this.Ju===e.Ju}}function HE(n,e,t,r){const a=n.ju(1,e,t);$E("Data must be an object, but it was:",a,r);const o=[],u=_n.empty();wa(r,(f,p)=>{const y=KE(e,f,t);p=Ae(p);const v=a.Uu(y);if(p instanceof _d)o.push(y);else{const w=zo(p,v);w!=null&&(o.push(y),u.set(y,w))}});const h=new qn(o);return new yC(u,h,a.fieldTransforms)}function GE(n,e,t,r,a,o){const u=n.ju(1,e,t),h=[uv(e,r,t)],f=[a];if(o.length%2!=0)throw new te(K.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let w=0;w<o.length;w+=2)h.push(uv(e,o[w])),f.push(o[w+1]);const p=[],y=_n.empty();for(let w=h.length-1;w>=0;--w)if(!IC(p,h[w])){const S=h[w];let P=f[w];P=Ae(P);const U=u.Uu(S);if(P instanceof _d)p.push(S);else{const L=zo(P,U);L!=null&&(p.push(S),y.set(S,L))}}const v=new qn(p);return new yC(y,v,u.fieldTransforms)}function TC(n,e,t,r=!1){return zo(t,n.ju(r?4:3,e))}function zo(n,e){if(bC(n=Ae(n)))return $E("Unsupported field value:",e,n),wC(n,e);if(n instanceof Uo)return function(r,a){if(!vC(a.Lu))throw a.Wu(`${r._methodName}() can only be used with update() and set()`);if(!a.path)throw a.Wu(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(a);o&&a.fieldTransforms.push(o)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.Qu&&e.Lu!==4)throw e.Wu("Nested arrays are not supported");return function(r,a){const o=[];let u=0;for(const h of r){let f=zo(h,a.Ku(u));f==null&&(f={nullValue:"NULL_VALUE"}),o.push(f),u++}return{arrayValue:{values:o}}}(n,e)}return function(r,a){if((r=Ae(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return $R(a.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=gt.fromDate(r);return{timestampValue:pu(a.serializer,o)}}if(r instanceof gt){const o=new gt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:pu(a.serializer,o)}}if(r instanceof Dp)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof fi)return{bytesValue:r1(a.serializer,r._byteString)};if(r instanceof Tt){const o=a.databaseId,u=r.firestore._databaseId;if(!u.isEqual(o))throw a.Wu(`Document reference is for database ${u.projectId}/${u.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:uE(r.firestore._databaseId||a.databaseId,r._key.path)}}if(r instanceof BE)return function(u,h){return{mapValue:{fields:{[Zv]:{stringValue:Jv},[cu]:{arrayValue:{values:u.toArray().map(p=>{if(typeof p!="number")throw h.Wu("VectorValues must only contain numeric values.");return rE(h.serializer,p)})}}}}}}(r,a);throw a.Wu(`Unsupported field value: ${Cp(r)}`)}(n,e)}function wC(n,e){const t={};return TR(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):wa(n,(r,a)=>{const o=zo(a,e.qu(r));o!=null&&(t[r]=o)}),{mapValue:{fields:t}}}function bC(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof gt||n instanceof Dp||n instanceof fi||n instanceof Tt||n instanceof Uo||n instanceof BE)}function $E(n,e,t){if(!bC(t)||!function(a){return typeof a=="object"&&a!==null&&(Object.getPrototypeOf(a)===Object.prototype||Object.getPrototypeOf(a)===null)}(t)){const r=Cp(t);throw r==="an object"?e.Wu(n+" a custom object"):e.Wu(n+" "+r)}}function uv(n,e,t){if((e=Ae(e))instanceof _a)return e._internalPath;if(typeof e=="string")return KE(n,e);throw Xm("Field path arguments must be of type string or ",n,!1,void 0,t)}const D2=new RegExp("[~\\*/\\[\\]]");function KE(n,e,t){if(e.search(D2)>=0)throw Xm(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new _a(...e.split("."))._internalPath}catch{throw Xm(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Xm(n,e,t,r,a){const o=r&&!r.isEmpty(),u=a!==void 0;let h=`Function ${e}() called with invalid data`;t&&(h+=" (via `toFirestore()`)"),h+=". ";let f="";return(o||u)&&(f+=" (found",o&&(f+=` in field ${r}`),u&&(f+=` in document ${a}`),f+=")"),new te(K.INVALID_ARGUMENT,h+n+f)}function IC(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kh{constructor(e,t,r,a,o){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=a,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new Tt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new P2(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Np("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class P2 extends Kh{data(){return super.data()}}function Np(n,e){return typeof e=="string"?KE(n,e):e instanceof _a?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AC(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new te(K.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class QE{}class yd extends QE{}function Qs(n,e,...t){let r=[];e instanceof QE&&r.push(e),r=r.concat(t),function(o){const u=o.filter(f=>f instanceof WE).length,h=o.filter(f=>f instanceof Op).length;if(u>1||u>0&&h>0)throw new te(K.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const a of r)n=a._apply(n);return n}class Op extends yd{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new Op(e,t,r)}_apply(e){const t=this._parse(e);return RC(e._query,t),new Mn(e.firestore,e.converter,Wy(e._query,t))}_parse(e){const t=Bo(e.firestore);return function(o,u,h,f,p,y,v){let w;if(p.isKeyField()){if(y==="array-contains"||y==="array-contains-any")throw new te(K.INVALID_ARGUMENT,`Invalid Query. You can't perform '${y}' queries on documentId().`);if(y==="in"||y==="not-in"){IA(v,y);const P=[];for(const U of v)P.push(bA(f,o,U));w={arrayValue:{values:P}}}else w=bA(f,o,v)}else y!=="in"&&y!=="not-in"&&y!=="array-contains-any"||IA(v,y),w=TC(h,u,v,y==="in"||y==="not-in");return Fe.create(p,y,w)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function x2(n,e,t){const r=e,a=Np("where",n);return Op._create(a,r,t)}class WE extends QE{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new WE(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:tt.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(a,o){let u=a;const h=o.getFlattenedFilters();for(const f of h)RC(u,f),u=Wy(u,f)}(e._query,t),new Mn(e.firestore,e.converter,Wy(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class YE extends yd{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new YE(e,t)}_apply(e){const t=function(a,o,u){if(a.startAt!==null)throw new te(K.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(a.endAt!==null)throw new te(K.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new qh(o,u)}(e._query,this._field,this._direction);return new Mn(e.firestore,e.converter,function(a,o){const u=a.explicitOrderBy.concat([o]);return new ns(a.path,a.collectionGroup,u,a.filters.slice(),a.limit,a.limitType,a.startAt,a.endAt)}(e._query,t))}}function N2(n,e="asc"){const t=e,r=Np("orderBy",n);return YE._create(r,t)}class kp extends yd{constructor(e,t,r){super(),this.type=e,this._limit=t,this._limitType=r}static _create(e,t,r){return new kp(e,t,r)}_apply(e){return new Mn(e.firestore,e.converter,qm(e._query,this._limit,this._limitType))}}function O2(n){return uC("limit",n),kp._create("limit",n,"F")}function k2(n){return uC("limitToLast",n),kp._create("limitToLast",n,"L")}class Vp extends yd{constructor(e,t,r){super(),this.type=e,this._docOrFields=t,this._inclusive=r}static _create(e,t,r){return new Vp(e,t,r)}_apply(e){const t=SC(e,this.type,this._docOrFields,this._inclusive);return new Mn(e.firestore,e.converter,function(a,o){return new ns(a.path,a.collectionGroup,a.explicitOrderBy.slice(),a.filters.slice(),a.limit,a.limitType,o,a.endAt)}(e._query,t))}}function V2(...n){return Vp._create("startAt",n,!0)}function M2(...n){return Vp._create("startAfter",n,!1)}class Mp extends yd{constructor(e,t,r){super(),this.type=e,this._docOrFields=t,this._inclusive=r}static _create(e,t,r){return new Mp(e,t,r)}_apply(e){const t=SC(e,this.type,this._docOrFields,this._inclusive);return new Mn(e.firestore,e.converter,function(a,o){return new ns(a.path,a.collectionGroup,a.explicitOrderBy.slice(),a.filters.slice(),a.limit,a.limitType,a.startAt,o)}(e._query,t))}}function L2(...n){return Mp._create("endBefore",n,!1)}function U2(...n){return Mp._create("endAt",n,!0)}function SC(n,e,t,r){if(t[0]=Ae(t[0]),t[0]instanceof Kh)return function(o,u,h,f,p){if(!f)throw new te(K.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${h}().`);const y=[];for(const v of Ql(o))if(v.field.isKeyField())y.push(Io(u,f.key));else{const w=f.data.field(v.field);if(gp(w))throw new te(K.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+v.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(w===null){const S=v.field.canonicalString();throw new te(K.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${S}' (used as the orderBy) does not exist.`)}y.push(w)}return new ma(y,p)}(n._query,n.firestore._databaseId,e,t[0]._document,r);{const a=Bo(n.firestore);return function(u,h,f,p,y,v){const w=u.explicitOrderBy;if(y.length>w.length)throw new te(K.INVALID_ARGUMENT,`Too many arguments provided to ${p}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const S=[];for(let P=0;P<y.length;P++){const U=y[P];if(w[P].field.isKeyField()){if(typeof U!="string")throw new te(K.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${p}(), but got a ${typeof U}`);if(!tE(u)&&U.indexOf("/")!==-1)throw new te(K.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${p}() must be a plain document ID, but '${U}' contains a slash.`);const L=u.path.child(ze.fromString(U));if(!ce.isDocumentKey(L))throw new te(K.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${p}() must result in a valid document path, but '${L}' is not because it contains an odd number of segments.`);const H=new ce(L);S.push(Io(h,H))}else{const L=TC(f,p,U);S.push(L)}}return new ma(S,v)}(n._query,n.firestore._databaseId,a,e,t,r)}}function bA(n,e,t){if(typeof(t=Ae(t))=="string"){if(t==="")throw new te(K.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!tE(e)&&t.indexOf("/")!==-1)throw new te(K.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(ze.fromString(t));if(!ce.isDocumentKey(r))throw new te(K.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Io(n,new ce(r))}if(t instanceof Tt)return Io(n,t._key);throw new te(K.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Cp(t)}.`)}function IA(n,e){if(!Array.isArray(n)||n.length===0)throw new te(K.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function RC(n,e){const t=function(a,o){for(const u of a)for(const h of u.getFlattenedFilters())if(o.indexOf(h.op)>=0)return h.op;return null}(n.filters,function(a){switch(a){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new te(K.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new te(K.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class XE{convertValue(e,t="none"){switch(da(e)){case 0:return null;case 1:return e.booleanValue;case 2:return dt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Zi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw pe()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return wa(e,(a,o)=>{r[a]=this.convertValue(o,t)}),r}convertVectorValue(e){var t,r,a;const o=(a=(r=(t=e.fields)===null||t===void 0?void 0:t[cu].arrayValue)===null||r===void 0?void 0:r.values)===null||a===void 0?void 0:a.map(u=>dt(u.doubleValue));return new BE(o)}convertGeoPoint(e){return new Dp(dt(e.latitude),dt(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=_p(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Bh(e));default:return null}}convertTimestamp(e){const t=Xi(e);return new gt(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=ze.fromString(e);ve(m1(r));const a=new ha(r.get(1),r.get(3)),o=new ce(r.popFirst(5));return a.isEqual(t)||Vt(`Document ${o} contains a document reference within a different database (${a.projectId}/${a.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lp(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}class B2 extends XE{constructor(e){super(),this.firestore=e}convertBytes(e){return new fi(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Tt(this.firestore,null,t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class po{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}let es=class extends Kh{constructor(e,t,r,a,o,u){super(e,t,r,a,u),this._firestore=e,this._firestoreImpl=e,this.metadata=o}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new bh(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Np("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}},bh=class extends es{data(e={}){return super.data(e)}},ya=class{constructor(e,t,r,a){this._firestore=e,this._userDataWriter=t,this._snapshot=a,this.metadata=new po(a.hasPendingWrites,a.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new bh(this._firestore,this._userDataWriter,r.key,r,new po(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new te(K.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(a,o){if(a._snapshot.oldDocs.isEmpty()){let u=0;return a._snapshot.docChanges.map(h=>{const f=new bh(a._firestore,a._userDataWriter,h.doc.key,h.doc,new po(a._snapshot.mutatedKeys.has(h.doc.key),a._snapshot.fromCache),a.query.converter);return h.doc,{type:"added",doc:f,oldIndex:-1,newIndex:u++}})}{let u=a._snapshot.oldDocs;return a._snapshot.docChanges.filter(h=>o||h.type!==3).map(h=>{const f=new bh(a._firestore,a._userDataWriter,h.doc.key,h.doc,new po(a._snapshot.mutatedKeys.has(h.doc.key),a._snapshot.fromCache),a.query.converter);let p=-1,y=-1;return h.type!==0&&(p=u.indexOf(h.doc.key),u=u.delete(h.doc.key)),h.type!==1&&(u=u.add(h.doc),y=u.indexOf(h.doc.key)),{type:z2(h.type),doc:f,oldIndex:p,newIndex:y}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}};function z2(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return pe()}}function CC(n,e){return n instanceof es&&e instanceof es?n._firestore===e._firestore&&n._key.isEqual(e._key)&&(n._document===null?e._document===null:n._document.isEqual(e._document))&&n._converter===e._converter:n instanceof ya&&e instanceof ya&&n._firestore===e._firestore&&pC(n.query,e.query)&&n.metadata.isEqual(e.metadata)&&n._snapshot.isEqual(e._snapshot)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZE(n){n=Xe(n,Tt);const e=Xe(n.firestore,Lt);return sC(Sn(e),n._key).then(t=>JE(e,n,t))}class Fo extends XE{constructor(e){super(),this.firestore=e}convertBytes(e){return new fi(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Tt(this.firestore,null,t)}}function F2(n){n=Xe(n,Tt);const e=Xe(n.firestore,Lt),t=Sn(e),r=new Fo(e);return u2(t,n._key).then(a=>new es(e,r,n._key,a,new po(a!==null&&a.hasLocalMutations,!0),n.converter))}function q2(n){n=Xe(n,Tt);const e=Xe(n.firestore,Lt);return sC(Sn(e),n._key,{source:"server"}).then(t=>JE(e,n,t))}function DC(n){n=Xe(n,Mn);const e=Xe(n.firestore,Lt),t=Sn(e),r=new Fo(e);return AC(n._query),aC(t,n._query).then(a=>new ya(e,r,n,a))}function j2(n){n=Xe(n,Mn);const e=Xe(n.firestore,Lt),t=Sn(e),r=new Fo(e);return c2(t,n._query).then(a=>new ya(e,r,n,a))}function H2(n){n=Xe(n,Mn);const e=Xe(n.firestore,Lt),t=Sn(e),r=new Fo(e);return aC(t,n._query,{source:"server"}).then(a=>new ya(e,r,n,a))}function cv(n,e,t){n=Xe(n,Tt);const r=Xe(n.firestore,Lt),a=Lp(n.converter,e,t);return vd(r,[xp(Bo(r),"setDoc",n._key,a,n.converter!==null,t).toMutation(n._key,pt.none())])}function Zm(n,e,t,...r){n=Xe(n,Tt);const a=Xe(n.firestore,Lt),o=Bo(a);let u;return u=typeof(e=Ae(e))=="string"||e instanceof _a?GE(o,"updateDoc",n._key,e,t,r):HE(o,"updateDoc",n._key,e),vd(a,[u.toMutation(n._key,pt.exists(!0))])}function PC(n){return vd(Xe(n.firestore,Lt),[new Mu(n._key,pt.none())])}function G2(n,e){const t=Xe(n.firestore,Lt),r=Ji(n),a=Lp(n.converter,e);return vd(t,[xp(Bo(n.firestore),"addDoc",r._key,a,n.converter!==null,{}).toMutation(r._key,pt.exists(!1))]).then(()=>r)}function xC(n,...e){var t,r,a;n=Ae(n);let o={includeMetadataChanges:!1,source:"default"},u=0;typeof e[u]!="object"||lv(e[u])||(o=e[u],u++);const h={includeMetadataChanges:o.includeMetadataChanges,source:o.source};if(lv(e[u])){const v=e[u];e[u]=(t=v.next)===null||t===void 0?void 0:t.bind(v),e[u+1]=(r=v.error)===null||r===void 0?void 0:r.bind(v),e[u+2]=(a=v.complete)===null||a===void 0?void 0:a.bind(v)}let f,p,y;if(n instanceof Tt)p=Xe(n.firestore,Lt),y=ku(n._key.path),f={next:v=>{e[u]&&e[u](JE(p,n,v))},error:e[u+1],complete:e[u+2]};else{const v=Xe(n,Mn);p=Xe(v.firestore,Lt),y=v._query;const w=new Fo(p);f={next:S=>{e[u]&&e[u](new ya(p,w,v,S))},error:e[u+1],complete:e[u+2]},AC(n._query)}return function(w,S,P,U){const L=new Sp(U),H=new CE(S,L,P);return w.asyncQueue.enqueueAndForget(async()=>AE(await Tu(w),H)),()=>{L.su(),w.asyncQueue.enqueueAndForget(async()=>SE(await Tu(w),H))}}(Sn(p),y,h,f)}function $2(n,e){return h2(Sn(n=Xe(n,Lt)),lv(e)?e:{next:e})}function vd(n,e){return function(r,a){const o=new yn;return r.asyncQueue.enqueueAndForget(async()=>UL(await ME(r),a,o)),o.promise}(Sn(n),e)}function JE(n,e,t){const r=t.docs.get(e._key),a=new Fo(n);return new es(n,a,e._key,r,new po(t.hasPendingWrites,t.fromCache),e.converter)}/**
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
 */const K2={maxAttempts:5};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Q2=class{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=Bo(e)}set(e,t,r){this._verifyNotCommitted();const a=Js(e,this._firestore),o=Lp(a.converter,t,r),u=xp(this._dataReader,"WriteBatch.set",a._key,o,a.converter!==null,r);return this._mutations.push(u.toMutation(a._key,pt.none())),this}update(e,t,r,...a){this._verifyNotCommitted();const o=Js(e,this._firestore);let u;return u=typeof(t=Ae(t))=="string"||t instanceof _a?GE(this._dataReader,"WriteBatch.update",o._key,t,r,a):HE(this._dataReader,"WriteBatch.update",o._key,t),this._mutations.push(u.toMutation(o._key,pt.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=Js(e,this._firestore);return this._mutations=this._mutations.concat(new Mu(t._key,pt.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new te(K.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}};function Js(n,e){if((n=Ae(n)).firestore!==e)throw new te(K.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W2{constructor(e,t){this._firestore=e,this._transaction=t,this._dataReader=Bo(e)}get(e){const t=Js(e,this._firestore),r=new B2(this._firestore);return this._transaction.lookup([t._key]).then(a=>{if(!a||a.length!==1)return pe();const o=a[0];if(o.isFoundDocument())return new Kh(this._firestore,r,o.key,o,t.converter);if(o.isNoDocument())return new Kh(this._firestore,r,t._key,null,t.converter);throw pe()})}set(e,t,r){const a=Js(e,this._firestore),o=Lp(a.converter,t,r),u=xp(this._dataReader,"Transaction.set",a._key,o,a.converter!==null,r);return this._transaction.set(a._key,u),this}update(e,t,r,...a){const o=Js(e,this._firestore);let u;return u=typeof(t=Ae(t))=="string"||t instanceof _a?GE(this._dataReader,"Transaction.update",o._key,t,r,a):HE(this._dataReader,"Transaction.update",o._key,t),this._transaction.update(o._key,u),this}delete(e){const t=Js(e,this._firestore);return this._transaction.delete(t._key),this}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Y2=class extends W2{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=Js(e,this._firestore),r=new Fo(this._firestore);return super.get(e).then(a=>new es(this._firestore,r,t._key,a._document,new po(!1,!1),t.converter))}};function X2(n,e,t){n=Xe(n,Lt);const r=Object.assign(Object.assign({},K2),t);return function(o){if(o.maxAttempts<1)throw new te(K.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(o,u,h){const f=new yn;return o.asyncQueue.enqueueAndForget(async()=>{const p=await a2(o);new i2(o.asyncQueue,p,h,u,f).Iu()}),f.promise}(Sn(n),a=>e(new Y2(n,a)),r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z2(){return new _d("deleteField")}function J2(){return new zE("serverTimestamp")}function eU(...n){return new FE("arrayUnion",n)}function tU(...n){return new qE("arrayRemove",n)}function nU(n){return new jE("increment",n)}(function(e,t=!0){(function(a){Ou=a})(va),ua(new ci("firestore",(r,{instanceIdentifier:a,options:o})=>{const u=r.getProvider("app").getImmediate(),h=new Lt(new Jk(r.getProvider("auth-internal")),new nV(u,r.getProvider("app-check-internal")),function(p,y){if(!Object.prototype.hasOwnProperty.apply(p.options,["projectId"]))throw new te(K.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ha(p.options.projectId,y)}(u,a),u);return o=Object.assign({useFetchStreams:t},o),h._setSettings(o),h},"PUBLIC").setMultipleInstances(!0)),Nr(rI,iI,e),Nr(rI,iI,"esm2017")})();/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rU{constructor(e,t){this._delegate=e,this.firebase=t,Nh(e,new ci("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),jv(this._delegate)))}_getService(e,t=oa){var r;this._delegate.checkDestroyed();const a=this._delegate.container.getProvider(e);return!a.isInitialized()&&((r=a.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&a.initialize(),a.getImmediate({identifier:t})}_removeServiceInstance(e,t=oa){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){Nh(this._delegate,e)}_addOrOverwriteComponent(e){jS(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
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
 */const iU={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."},AA=new Lo("app-compat","Firebase",iU);/**
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
 */function sU(n){const e={},t={__esModule:!0,initializeApp:o,app:a,registerVersion:Nr,setLogLevel:QS,onLog:KS,apps:null,SDK_VERSION:va,INTERNAL:{registerComponent:h,removeApp:r,useAsService:f,modularAPIs:Qk}};t.default=t,Object.defineProperty(t,"apps",{get:u});function r(p){delete e[p]}function a(p){if(p=p||oa,!Kb(e,p))throw AA.create("no-app",{appName:p});return e[p]}a.App=n;function o(p,y={}){const v=qv(p,y);if(Kb(e,v.name))return e[v.name];const w=new n(v,t);return e[v.name]=w,w}function u(){return Object.keys(e).map(p=>e[p])}function h(p){const y=p.name,v=y.replace("-compat","");if(ua(p)&&p.type==="PUBLIC"){const w=(S=a())=>{if(typeof S[v]!="function")throw AA.create("invalid-app-argument",{appName:y});return S[v]()};p.serviceProps!==void 0&&Nm(w,p.serviceProps),t[v]=w,n.prototype[v]=function(...S){return this._getService.bind(this,y).apply(this,p.multipleInstances?S:[])}}return p.type==="PUBLIC"?t[v]:null}function f(p,y){return y==="serverAuth"?null:y}return t}/**
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
 */function NC(){const n=sU(rU);n.INTERNAL=Object.assign(Object.assign({},n.INTERNAL),{createFirebaseNamespace:NC,extendNamespace:e,createSubscribe:US,ErrorFactory:Lo,deepExtend:Nm});function e(t){Nm(n,t)}return n}const aU=NC();/**
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
 */const SA=new hp("@firebase/app-compat"),oU="@firebase/app-compat",lU="0.2.53";/**
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
 */function uU(n){Nr(oU,lU,n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */try{const n=NS();if(n.firebase!==void 0){SA.warn(`
      Warning: Firebase is already defined in the global scope. Please make sure
      Firebase library is only loaded once.
    `);const e=n.firebase.SDK_VERSION;e&&e.indexOf("LITE")>=0&&SA.warn(`
        Warning: You are trying to load Firebase while using Firebase Performance standalone script.
        You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
        `)}}catch{}const Fu=aU;uU();var cU="firebase",hU="11.6.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Fu.registerVersion(cU,hU,"app-compat");var Hn=function(){return Hn=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++){t=arguments[r];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},Hn.apply(this,arguments)};function eT(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(n);a<r.length;a++)e.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(n,r[a])&&(t[r[a]]=n[r[a]]);return t}function Jm(n,e,t){if(t||arguments.length===2)for(var r=0,a=e.length,o;r<a;r++)(o||!(r in e))&&(o||(o=Array.prototype.slice.call(e,0,r)),o[r]=e[r]);return n.concat(o||Array.prototype.slice.call(e))}const ah={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",TWITTER:"twitter.com"},Bl={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dU(){return{"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-change-needs-verification":"Multi-factor users must always have a verified email.","email-already-in-use":"The email address is already in use by another account.","emulator-config-failed":'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',"expired-action-code":"The action code has expired.","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal AuthError has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registered for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal AuthError has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-emulator-scheme":"Emulator URL must start with a valid scheme (http:// or https://).","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is incorrect, malformed or has expired.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-multi-factor-session":"The request does not contain a valid proof of first factor successful sign-in.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","invalid-tenant-id":"The Auth instance's tenant ID is invalid.","login-blocked":"Login blocked by user-provided method: {$originalMessage}","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal AuthError has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.","missing-password":"A non-empty password must be provided","missing-multi-factor-info":"No second factor identifier is provided.","missing-multi-factor-session":"The request is missing proof of first factor successful sign-in.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","multi-factor-info-not-found":"The user does not have a second factor matching the identifier provided.","multi-factor-auth-required":"Proof of ownership of a second factor is required to complete sign-in.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal AuthError has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.","rejected-credential":"The request contains malformed or mismatching credentials.","second-factor-already-in-use":"The second factor is already enrolled on this account.","maximum-second-factor-count-exceeded":"The maximum allowed number of second factors on a user has been exceeded.","tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-first-factor":"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.","unverified-email":"The operation requires a verified email.","user-cancelled":"The user did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled.","already-initialized":"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.","missing-recaptcha-token":"The reCAPTCHA token is missing when sending request to the backend.","invalid-recaptcha-token":"The reCAPTCHA token is invalid when sending request to the backend.","invalid-recaptcha-action":"The reCAPTCHA action is invalid when sending request to the backend.","recaptcha-not-enabled":"reCAPTCHA Enterprise integration is not enabled for this project.","missing-client-type":"The reCAPTCHA client type is missing when sending request to the backend.","missing-recaptcha-version":"The reCAPTCHA version is missing when sending request to the backend.","invalid-req-type":"Invalid request parameters.","invalid-recaptcha-version":"The reCAPTCHA version is invalid when sending request to the backend.","unsupported-password-policy-schema-version":"The password policy received from the backend uses a schema version that is not supported by this version of the Firebase SDK.","password-does-not-meet-requirements":"The password does not meet the requirements.","invalid-hosting-link-domain":"The provided Hosting link domain is not configured in Firebase Hosting or is not owned by the current project. This cannot be a default Hosting domain (`web.app` or `firebaseapp.com`)."}}function OC(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const fU=dU,mU=OC,kC=new Lo("auth","Firebase",OC());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ep=new hp("@firebase/auth");function pU(n,...e){ep.logLevel<=Be.WARN&&ep.warn(`Auth (${va}): ${n}`,...e)}function Tm(n,...e){ep.logLevel<=Be.ERROR&&ep.error(`Auth (${va}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vn(n,...e){throw nT(n,...e)}function Xt(n,...e){return nT(n,...e)}function tT(n,e,t){const r=Object.assign(Object.assign({},mU()),{[e]:t});return new Lo("auth","Firebase",r).create(e,{appName:n.name})}function hn(n){return tT(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function qu(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&vn(n,"argument-error"),tT(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function nT(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return kC.create(n,...e)}function se(n,e,...t){if(!n)throw nT(e,...t)}function ai(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Tm(e),new Error(e)}function kr(n,e){n||ai(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qh(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function rT(){return RA()==="http:"||RA()==="https:"}function RA(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gU(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(rT()||VS()||"connection"in navigator)?navigator.onLine:!0}function _U(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ed{constructor(e,t){this.shortDelay=e,this.longDelay=t,kr(t>e,"Short delay should be less than long delay!"),this.isMobile=SO()||Bv()}get(){return gU()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iT(n,e){kr(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VC{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ai("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ai("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ai("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yU={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vU=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],EU=new Ed(3e4,6e4);function Pt(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function xt(n,e,t,r,a={}){return MC(n,a,async()=>{let o={},u={};r&&(e==="GET"?u=r:o={body:JSON.stringify(r)});const h=Nu(Object.assign({key:n.config.apiKey},u)).slice(1),f=await n._getAdditionalHeaders();f["Content-Type"]="application/json",n.languageCode&&(f["X-Firebase-Locale"]=n.languageCode);const p=Object.assign({method:e,headers:f},o);return CO()||(p.referrerPolicy="no-referrer"),VC.fetch()(await LC(n,n.config.apiHost,t,h),p)})}async function MC(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},yU),e);try{const a=new wU(n),o=await Promise.race([t(),a.promise]);a.clearNetworkTimeout();const u=await o.json();if("needConfirmation"in u)throw ph(n,"account-exists-with-different-credential",u);if(o.ok&&!("errorMessage"in u))return u;{const h=o.ok?u.errorMessage:u.error.message,[f,p]=h.split(" : ");if(f==="FEDERATED_USER_ID_ALREADY_LINKED")throw ph(n,"credential-already-in-use",u);if(f==="EMAIL_EXISTS")throw ph(n,"email-already-in-use",u);if(f==="USER_DISABLED")throw ph(n,"user-disabled",u);const y=r[f]||f.toLowerCase().replace(/[_\s]+/g,"-");if(p)throw tT(n,y,p);vn(n,y)}}catch(a){if(a instanceof kn)throw a;vn(n,"network-request-failed",{message:String(a)})}}async function as(n,e,t,r,a={}){const o=await xt(n,e,t,r,a);return"mfaPendingCredential"in o&&vn(n,"multi-factor-auth-required",{_serverResponse:o}),o}async function LC(n,e,t,r){const a=`${e}${t}?${r}`,o=n,u=o.config.emulator?iT(n.config,a):`${n.config.apiScheme}://${a}`;return vU.includes(t)&&(await o._persistenceManagerAvailable,o._getPersistenceType()==="COOKIE")?o._getPersistence()._getFinalTarget(u).toString():u}function TU(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class wU{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Xt(this.auth,"network-request-failed")),EU.get())})}}function ph(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const a=Xt(n,e,r);return a.customData._tokenResponse=t,a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CA(n){return n!==void 0&&n.getResponse!==void 0}function DA(n){return n!==void 0&&n.enterprise!==void 0}class UC{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return TU(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bU(n){return(await xt(n,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function BC(n,e){return xt(n,"GET","/v2/recaptchaConfig",Pt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function IU(n,e){return xt(n,"POST","/v1/accounts:delete",e)}async function AU(n,e){return xt(n,"POST","/v1/accounts:update",e)}async function tp(n,e){return xt(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ih(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function SU(n,e=!1){const t=Ae(n),r=await t.getIdToken(e),a=Up(r);se(a&&a.exp&&a.auth_time&&a.iat,t.auth,"internal-error");const o=typeof a.firebase=="object"?a.firebase:void 0,u=o==null?void 0:o.sign_in_provider;return{claims:a,token:r,authTime:Ih(Ey(a.auth_time)),issuedAtTime:Ih(Ey(a.iat)),expirationTime:Ih(Ey(a.exp)),signInProvider:u||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function Ey(n){return Number(n)*1e3}function Up(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Tm("JWT malformed, contained fewer than 3 sections"),null;try{const a=Mv(t);return a?JSON.parse(a):(Tm("Failed to decode base64 JWT payload"),null)}catch(a){return Tm("Caught error parsing JWT payload as JSON",a==null?void 0:a.toString()),null}}function PA(n){const e=Up(n);return se(e,"internal-error"),se(typeof e.exp<"u","internal-error"),se(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ts(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof kn&&RU(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function RU({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CU{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const a=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,a)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hv{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ih(this.lastLoginAt),this.creationTime=Ih(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Wh(n){var e;const t=n.auth,r=await n.getIdToken(),a=await ts(n,tp(t,{idToken:r}));se(a==null?void 0:a.users.length,t,"internal-error");const o=a.users[0];n._notifyReloadListener(o);const u=!((e=o.providerUserInfo)===null||e===void 0)&&e.length?zC(o.providerUserInfo):[],h=PU(n.providerData,u),f=n.isAnonymous,p=!(n.email&&o.passwordHash)&&!(h!=null&&h.length),y=f?p:!1,v={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:h,metadata:new hv(o.createdAt,o.lastLoginAt),isAnonymous:y};Object.assign(n,v)}async function DU(n){const e=Ae(n);await Wh(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function PU(n,e){return[...n.filter(r=>!e.some(a=>a.providerId===r.providerId)),...e]}function zC(n){return n.map(e=>{var{providerId:t}=e,r=eT(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xU(n,e){const t=await MC(n,{},async()=>{const r=Nu({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:a,apiKey:o}=n.config,u=await LC(n,a,"/v1/token",`key=${o}`),h=await n._getAdditionalHeaders();return h["Content-Type"]="application/x-www-form-urlencoded",VC.fetch()(u,{method:"POST",headers:h,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function NU(n,e){return xt(n,"POST","/v2/accounts:revokeToken",Pt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yl{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){se(e.idToken,"internal-error"),se(typeof e.idToken<"u","internal-error"),se(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):PA(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){se(e.length!==0,"internal-error");const t=PA(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(se(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:a,expiresIn:o}=await xU(e,t);this.updateTokensAndExpiration(r,a,Number(o))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:a,expirationTime:o}=t,u=new Yl;return r&&(se(typeof r=="string","internal-error",{appName:e}),u.refreshToken=r),a&&(se(typeof a=="string","internal-error",{appName:e}),u.accessToken=a),o&&(se(typeof o=="number","internal-error",{appName:e}),u.expirationTime=o),u}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Yl,this.toJSON())}_performRefresh(){return ai("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ws(n,e){se(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class xr{constructor(e){var{uid:t,auth:r,stsTokenManager:a}=e,o=eT(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new CU(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=a,this.accessToken=a.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new hv(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const t=await ts(this,this.stsTokenManager.getToken(this.auth,e));return se(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return SU(this,e)}reload(){return DU(this)}_assign(e){this!==e&&(se(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new xr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){se(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Wh(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(ft(this.auth.app))return Promise.reject(hn(this.auth));const e=await this.getIdToken();return await ts(this,IU(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,a,o,u,h,f,p,y;const v=(r=t.displayName)!==null&&r!==void 0?r:void 0,w=(a=t.email)!==null&&a!==void 0?a:void 0,S=(o=t.phoneNumber)!==null&&o!==void 0?o:void 0,P=(u=t.photoURL)!==null&&u!==void 0?u:void 0,U=(h=t.tenantId)!==null&&h!==void 0?h:void 0,L=(f=t._redirectEventId)!==null&&f!==void 0?f:void 0,H=(p=t.createdAt)!==null&&p!==void 0?p:void 0,Y=(y=t.lastLoginAt)!==null&&y!==void 0?y:void 0,{uid:$,emailVerified:oe,isAnonymous:ae,providerData:le,stsTokenManager:D}=t;se($&&D,e,"internal-error");const R=Yl.fromJSON(this.name,D);se(typeof $=="string",e,"internal-error"),Ws(v,e.name),Ws(w,e.name),se(typeof oe=="boolean",e,"internal-error"),se(typeof ae=="boolean",e,"internal-error"),Ws(S,e.name),Ws(P,e.name),Ws(U,e.name),Ws(L,e.name),Ws(H,e.name),Ws(Y,e.name);const A=new xr({uid:$,auth:e,email:w,emailVerified:oe,displayName:v,isAnonymous:ae,photoURL:P,phoneNumber:S,tenantId:U,stsTokenManager:R,createdAt:H,lastLoginAt:Y});return le&&Array.isArray(le)&&(A.providerData=le.map(x=>Object.assign({},x))),L&&(A._redirectEventId=L),A}static async _fromIdTokenResponse(e,t,r=!1){const a=new Yl;a.updateFromServerResponse(t);const o=new xr({uid:t.localId,auth:e,stsTokenManager:a,isAnonymous:r});return await Wh(o),o}static async _fromGetAccountInfoResponse(e,t,r){const a=t.users[0];se(a.localId!==void 0,"internal-error");const o=a.providerUserInfo!==void 0?zC(a.providerUserInfo):[],u=!(a.email&&a.passwordHash)&&!(o!=null&&o.length),h=new Yl;h.updateFromIdToken(r);const f=new xr({uid:a.localId,auth:e,stsTokenManager:h,isAnonymous:u}),p={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:o,metadata:new hv(a.createdAt,a.lastLoginAt),isAnonymous:!(a.email&&a.passwordHash)&&!(o!=null&&o.length)};return Object.assign(f,p),f}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xA=new Map;function tr(n){kr(n instanceof Function,"Expected a class definition");let e=xA.get(n);return e?(kr(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,xA.set(n,e),e)}/**
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
 */class FC{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}FC.type="NONE";const wu=FC;/**
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
 */function Eo(n,e,t){return`firebase:${n}:${e}:${t}`}class Xl{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:a,name:o}=this.auth;this.fullUserKey=Eo(this.userKey,a.apiKey,o),this.fullPersistenceKey=Eo("persistence",a.apiKey,o),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await tp(this.auth,{idToken:e}).catch(()=>{});return t?xr._fromGetAccountInfoResponse(this.auth,t,e):null}return xr._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Xl(tr(wu),e,r);const a=(await Promise.all(t.map(async p=>{if(await p._isAvailable())return p}))).filter(p=>p);let o=a[0]||tr(wu);const u=Eo(r,e.config.apiKey,e.name);let h=null;for(const p of t)try{const y=await p._get(u);if(y){let v;if(typeof y=="string"){const w=await tp(e,{idToken:y}).catch(()=>{});if(!w)break;v=await xr._fromGetAccountInfoResponse(e,w,y)}else v=xr._fromJSON(e,y);p!==o&&(h=v),o=p;break}}catch{}const f=a.filter(p=>p._shouldAllowMigration);return!o._shouldAllowMigration||!f.length?new Xl(o,e,r):(o=f[0],h&&await o._set(u,h.toJSON()),await Promise.all(t.map(async p=>{if(p!==o)try{await p._remove(u)}catch{}})),new Xl(o,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NA(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(GC(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(qC(e))return"Firefox";if(e.includes("silk/"))return"Silk";if($C(e))return"Blackberry";if(KC(e))return"Webos";if(jC(e))return"Safari";if((e.includes("chrome/")||HC(e))&&!e.includes("edge/"))return"Chrome";if(Td(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function qC(n=wt()){return/firefox\//i.test(n)}function jC(n=wt()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function HC(n=wt()){return/crios\//i.test(n)}function GC(n=wt()){return/iemobile/i.test(n)}function Td(n=wt()){return/android/i.test(n)}function $C(n=wt()){return/blackberry/i.test(n)}function KC(n=wt()){return/webos/i.test(n)}function wd(n=wt()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function OU(n=wt()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(n)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(n)}function kU(n=wt()){var e;return wd(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function VU(){return MS()&&document.documentMode===10}function QC(n=wt()){return wd(n)||Td(n)||KC(n)||$C(n)||/windows phone/i.test(n)||GC(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WC(n,e=[]){let t;switch(n){case"Browser":t=NA(wt());break;case"Worker":t=`${NA(wt())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${va}/${r}`}/**
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
 */class MU{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=o=>new Promise((u,h)=>{try{const f=e(o);u(f)}catch(f){h(f)}});r.onAbort=t,this.queue.push(r);const a=this.queue.length-1;return()=>{this.queue[a]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const a of t)try{a()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function LU(n,e={}){return xt(n,"GET","/v2/passwordPolicy",Pt(n,e))}/**
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
 */const UU=6;class BU{constructor(e){var t,r,a,o;const u=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=u.minPasswordLength)!==null&&t!==void 0?t:UU,u.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=u.maxPasswordLength),u.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=u.containsLowercaseCharacter),u.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=u.containsUppercaseCharacter),u.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=u.containsNumericCharacter),u.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=u.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(a=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&a!==void 0?a:"",this.forceUpgradeOnSignin=(o=e.forceUpgradeOnSignin)!==null&&o!==void 0?o:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,a,o,u,h;const f={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,f),this.validatePasswordCharacterOptions(e,f),f.isValid&&(f.isValid=(t=f.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),f.isValid&&(f.isValid=(r=f.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),f.isValid&&(f.isValid=(a=f.containsLowercaseLetter)!==null&&a!==void 0?a:!0),f.isValid&&(f.isValid=(o=f.containsUppercaseLetter)!==null&&o!==void 0?o:!0),f.isValid&&(f.isValid=(u=f.containsNumericCharacter)!==null&&u!==void 0?u:!0),f.isValid&&(f.isValid=(h=f.containsNonAlphanumericCharacter)!==null&&h!==void 0?h:!0),f}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,a=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),a&&(t.meetsMaxPasswordLength=e.length<=a)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let a=0;a<e.length;a++)r=e.charAt(a),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,a,o){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=a)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zU{constructor(e,t,r,a){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=a,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new OA(this),this.idTokenSubscription=new OA(this),this.beforeStateQueue=new MU(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=kC,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=a.sdkClientVersion,this._persistenceManagerAvailable=new Promise(o=>this._resolvePersistenceManagerAvailable=o)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=tr(t)),this._initializationPromise=this.queue(async()=>{var r,a,o;if(!this._deleted&&(this.persistenceManager=await Xl.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((a=this._popupRedirectResolver)===null||a===void 0)&&a._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((o=this.currentUser)===null||o===void 0?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await tp(this,{idToken:e}),r=await xr._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(ft(this.app)){const u=this.app.settings.authIdToken;return u?new Promise(h=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(u).then(h,h))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let a=r,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const u=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,h=a==null?void 0:a._redirectEventId,f=await this.tryRedirectSignIn(e);(!u||u===h)&&(f!=null&&f.user)&&(a=f.user,o=!0)}if(!a)return this.directlySetCurrentUser(null);if(!a._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(a)}catch(u){a=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(u))}return a?this.reloadAndSetCurrentUserOrClear(a):this.directlySetCurrentUser(null)}return se(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===a._redirectEventId?this.directlySetCurrentUser(a):this.reloadAndSetCurrentUserOrClear(a)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Wh(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=_U()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(ft(this.app))return Promise.reject(hn(this));const t=e?Ae(e):null;return t&&se(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&se(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return ft(this.app)?Promise.reject(hn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return ft(this.app)?Promise.reject(hn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(tr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await LU(this),t=new BU(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Lo("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await NU(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&tr(e)||this._popupRedirectResolver;se(t,this,"argument-error"),this.redirectPersistenceManager=await Xl.create(this,[tr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,a){if(this._deleted)return()=>{};const o=typeof t=="function"?t:t.next.bind(t);let u=!1;const h=this._isInitialized?Promise.resolve():this._initializationPromise;if(se(h,this,"internal-error"),h.then(()=>{u||o(this.currentUser)}),typeof t=="function"){const f=e.addObserver(t,r,a);return()=>{u=!0,f()}}else{const f=e.addObserver(t);return()=>{u=!0,f()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return se(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=WC(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const a=await this._getAppCheckToken();return a&&(t["X-Firebase-AppCheck"]=a),t}async _getAppCheckToken(){var e;if(ft(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&pU(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function bt(n){return Ae(n)}class OA{constructor(e){this.auth=e,this.observer=null,this.addObserver=US(t=>this.observer=t)}get next(){return se(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let bd={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function FU(n){bd=n}function sT(n){return bd.loadJS(n)}function qU(){return bd.recaptchaV2Script}function jU(){return bd.recaptchaEnterpriseScript}function HU(){return bd.gapiScript}function YC(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GU=500,$U=6e4,sm=1e12;class KU{constructor(e){this.auth=e,this.counter=sm,this._widgets=new Map}render(e,t){const r=this.counter;return this._widgets.set(r,new YU(e,this.auth.name,t||{})),this.counter++,r}reset(e){var t;const r=e||sm;(t=this._widgets.get(r))===null||t===void 0||t.delete(),this._widgets.delete(r)}getResponse(e){var t;const r=e||sm;return((t=this._widgets.get(r))===null||t===void 0?void 0:t.getResponse())||""}async execute(e){var t;const r=e||sm;return(t=this._widgets.get(r))===null||t===void 0||t.execute(),""}}class QU{constructor(){this.enterprise=new WU}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class WU{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class YU{constructor(e,t,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const a=typeof e=="string"?document.getElementById(e):e;se(a,"argument-error",{appName:t}),this.container=a,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=XU(50);const{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch{}this.isVisible&&this.execute()},$U)},GU))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function XU(n){const e=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<n;r++)e.push(t.charAt(Math.floor(Math.random()*t.length)));return e.join("")}const ZU="recaptcha-enterprise",Ah="NO_RECAPTCHA";class XC{constructor(e){this.type=ZU,this.auth=bt(e)}async verify(e="verify",t=!1){async function r(o){if(!t){if(o.tenantId==null&&o._agentRecaptchaConfig!=null)return o._agentRecaptchaConfig.siteKey;if(o.tenantId!=null&&o._tenantRecaptchaConfigs[o.tenantId]!==void 0)return o._tenantRecaptchaConfigs[o.tenantId].siteKey}return new Promise(async(u,h)=>{BC(o,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(f=>{if(f.recaptchaKey===void 0)h(new Error("recaptcha Enterprise site key undefined"));else{const p=new UC(f);return o.tenantId==null?o._agentRecaptchaConfig=p:o._tenantRecaptchaConfigs[o.tenantId]=p,u(p.siteKey)}}).catch(f=>{h(f)})})}function a(o,u,h){const f=window.grecaptcha;DA(f)?f.enterprise.ready(()=>{f.enterprise.execute(o,{action:e}).then(p=>{u(p)}).catch(()=>{u(Ah)})}):h(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new QU().execute("siteKey",{action:"verify"}):new Promise((o,u)=>{r(this.auth).then(h=>{if(!t&&DA(window.grecaptcha))a(h,o,u);else{if(typeof window>"u"){u(new Error("RecaptchaVerifier is only supported in browser"));return}let f=jU();f.length!==0&&(f+=h),sT(f).then(()=>{a(h,o,u)}).catch(p=>{u(p)})}}).catch(h=>{u(h)})})}}async function oh(n,e,t,r=!1,a=!1){const o=new XC(n);let u;if(a)u=Ah;else try{u=await o.verify(t)}catch{u=await o.verify(t,!0)}const h=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in h){const f=h.phoneEnrollmentInfo.phoneNumber,p=h.phoneEnrollmentInfo.recaptchaToken;Object.assign(h,{phoneEnrollmentInfo:{phoneNumber:f,recaptchaToken:p,captchaResponse:u,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in h){const f=h.phoneSignInInfo.recaptchaToken;Object.assign(h,{phoneSignInInfo:{recaptchaToken:f,captchaResponse:u,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return h}return r?Object.assign(h,{captchaResp:u}):Object.assign(h,{captchaResponse:u}),Object.assign(h,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(h,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),h}async function sa(n,e,t,r,a){var o,u;if(a==="EMAIL_PASSWORD_PROVIDER")if(!((o=n._getRecaptchaConfig())===null||o===void 0)&&o.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const h=await oh(n,e,t,t==="getOobCode");return r(n,h)}else return r(n,e).catch(async h=>{if(h.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const f=await oh(n,e,t,t==="getOobCode");return r(n,f)}else return Promise.reject(h)});else if(a==="PHONE_PROVIDER")if(!((u=n._getRecaptchaConfig())===null||u===void 0)&&u.isProviderEnabled("PHONE_PROVIDER")){const h=await oh(n,e,t);return r(n,h).catch(async f=>{var p;if(((p=n._getRecaptchaConfig())===null||p===void 0?void 0:p.getProviderEnforcementState("PHONE_PROVIDER"))==="AUDIT"&&(f.code==="auth/missing-recaptcha-token"||f.code==="auth/invalid-app-credential")){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${t} flow.`);const y=await oh(n,e,t,!1,!0);return r(n,y)}return Promise.reject(f)})}else{const h=await oh(n,e,t,!1,!0);return r(n,h)}else return Promise.reject(a+" provider is not supported.")}async function JU(n){const e=bt(n),t=await BC(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),r=new UC(t);e.tenantId==null?e._agentRecaptchaConfig=r:e._tenantRecaptchaConfigs[e.tenantId]=r,r.isAnyProviderEnabled()&&new XC(e).verify()}function e4(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(tr);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function t4(n,e,t){const r=bt(n);se(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const a=!!(t!=null&&t.disableWarnings),o=ZC(e),{host:u,port:h}=n4(e),f=h===null?"":`:${h}`,p={url:`${o}//${u}${f}/`},y=Object.freeze({host:u,port:h,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:a})});if(!r._canInitEmulator){se(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),se(aa(p,r.config.emulator)&&aa(y,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=p,r.emulatorConfig=y,r.settings.appVerificationDisabledForTesting=!0,a||r4()}function ZC(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function n4(n){const e=ZC(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",a=/^(\[[^\]]+\])(:|$)/.exec(r);if(a){const o=a[1];return{host:o,port:kA(r.substr(o.length+1))}}else{const[o,u]=r.split(":");return{host:o,port:kA(u)}}}function kA(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function r4(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ju{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return ai("not implemented")}_getIdTokenResponse(e){return ai("not implemented")}_linkToIdToken(e,t){return ai("not implemented")}_getReauthenticationResolver(e){return ai("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JC(n,e){return xt(n,"POST","/v1/accounts:resetPassword",Pt(n,e))}async function i4(n,e){return xt(n,"POST","/v1/accounts:update",e)}async function s4(n,e){return xt(n,"POST","/v1/accounts:signUp",e)}async function a4(n,e){return xt(n,"POST","/v1/accounts:update",Pt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function o4(n,e){return as(n,"POST","/v1/accounts:signInWithPassword",Pt(n,e))}async function Bp(n,e){return xt(n,"POST","/v1/accounts:sendOobCode",Pt(n,e))}async function l4(n,e){return Bp(n,e)}async function u4(n,e){return Bp(n,e)}async function c4(n,e){return Bp(n,e)}async function h4(n,e){return Bp(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function d4(n,e){return as(n,"POST","/v1/accounts:signInWithEmailLink",Pt(n,e))}async function f4(n,e){return as(n,"POST","/v1/accounts:signInWithEmailLink",Pt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yh extends ju{constructor(e,t,r,a=null){super("password",r),this._email=e,this._password=t,this._tenantId=a}static _fromEmailAndPassword(e,t){return new Yh(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new Yh(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return sa(e,t,"signInWithPassword",o4,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return d4(e,{email:this._email,oobCode:this._password});default:vn(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return sa(e,r,"signUpPassword",s4,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return f4(e,{idToken:t,email:this._email,oobCode:this._password});default:vn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qi(n,e){return as(n,"POST","/v1/accounts:signInWithIdp",Pt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m4="http://localhost";class mi extends ju{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new mi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):vn("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:a}=t,o=eT(t,["providerId","signInMethod"]);if(!r||!a)return null;const u=new mi(r,a);return u.idToken=o.idToken||void 0,u.accessToken=o.accessToken||void 0,u.secret=o.secret,u.nonce=o.nonce,u.pendingToken=o.pendingToken||null,u}_getIdTokenResponse(e){const t=this.buildRequest();return Qi(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Qi(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Qi(e,t)}buildRequest(){const e={requestUri:m4,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Nu(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VA(n,e){return xt(n,"POST","/v1/accounts:sendVerificationCode",Pt(n,e))}async function p4(n,e){return as(n,"POST","/v1/accounts:signInWithPhoneNumber",Pt(n,e))}async function g4(n,e){const t=await as(n,"POST","/v1/accounts:signInWithPhoneNumber",Pt(n,e));if(t.temporaryProof)throw ph(n,"account-exists-with-different-credential",t);return t}const _4={USER_NOT_FOUND:"user-not-found"};async function y4(n,e){const t=Object.assign(Object.assign({},e),{operation:"REAUTH"});return as(n,"POST","/v1/accounts:signInWithPhoneNumber",Pt(n,t),_4)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class To extends ju{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new To({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new To({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return p4(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return g4(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return y4(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:r,verificationCode:a}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:r,code:a}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:t,verificationCode:r,phoneNumber:a,temporaryProof:o}=e;return!r&&!t&&!a&&!o?null:new To({verificationId:t,verificationCode:r,phoneNumber:a,temporaryProof:o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v4(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function E4(n){const e=$l(ch(n)).link,t=e?$l(ch(e)).deep_link_id:null,r=$l(ch(n)).deep_link_id;return(r?$l(ch(r)).link:null)||r||t||e||n}class zp{constructor(e){var t,r,a,o,u,h;const f=$l(ch(e)),p=(t=f.apiKey)!==null&&t!==void 0?t:null,y=(r=f.oobCode)!==null&&r!==void 0?r:null,v=v4((a=f.mode)!==null&&a!==void 0?a:null);se(p&&y&&v,"argument-error"),this.apiKey=p,this.operation=v,this.code=y,this.continueUrl=(o=f.continueUrl)!==null&&o!==void 0?o:null,this.languageCode=(u=f.languageCode)!==null&&u!==void 0?u:null,this.tenantId=(h=f.tenantId)!==null&&h!==void 0?h:null}static parseLink(e){const t=E4(e);try{return new zp(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aa{constructor(){this.providerId=Aa.PROVIDER_ID}static credential(e,t){return Yh._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=zp.parseLink(t);return se(r,"argument-error"),Yh._fromEmailAndCode(e,r.code,r.tenantId)}}Aa.PROVIDER_ID="password";Aa.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Aa.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Hu extends os{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class Zl extends Hu{static credentialFromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;return se("providerId"in t&&"signInMethod"in t,"argument-error"),mi._fromParams(t)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return se(e.idToken||e.accessToken,"argument-error"),mi._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return Zl.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return Zl.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r,oauthTokenSecret:a,pendingToken:o,nonce:u,providerId:h}=e;if(!r&&!a&&!t&&!o||!h)return null;try{return new Zl(h)._credential({idToken:t,accessToken:r,nonce:u,pendingToken:o})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei extends Hu{constructor(){super("facebook.com")}static credential(e){return mi._fromParams({providerId:ei.PROVIDER_ID,signInMethod:ei.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ei.credentialFromTaggedObject(e)}static credentialFromError(e){return ei.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ei.credential(e.oauthAccessToken)}catch{return null}}}ei.FACEBOOK_SIGN_IN_METHOD="facebook.com";ei.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti extends Hu{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return mi._fromParams({providerId:ti.PROVIDER_ID,signInMethod:ti.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return ti.credentialFromTaggedObject(e)}static credentialFromError(e){return ti.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return ti.credential(t,r)}catch{return null}}}ti.GOOGLE_SIGN_IN_METHOD="google.com";ti.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni extends Hu{constructor(){super("github.com")}static credential(e){return mi._fromParams({providerId:ni.PROVIDER_ID,signInMethod:ni.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ni.credentialFromTaggedObject(e)}static credentialFromError(e){return ni.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ni.credential(e.oauthAccessToken)}catch{return null}}}ni.GITHUB_SIGN_IN_METHOD="github.com";ni.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T4="http://localhost";class bu extends ju{constructor(e,t){super(e,e),this.pendingToken=t}_getIdTokenResponse(e){const t=this.buildRequest();return Qi(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Qi(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Qi(e,t)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:a,pendingToken:o}=t;return!r||!a||!o||r!==a?null:new bu(r,o)}static _create(e,t){return new bu(e,t)}buildRequest(){return{requestUri:T4,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w4="saml.";class np extends os{constructor(e){se(e.startsWith(w4),"argument-error"),super(e)}static credentialFromResult(e){return np.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return np.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const t=bu.fromJSON(e);return se(t,"argument-error"),t}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:t,providerId:r}=e;if(!t||!r)return null;try{return bu._create(r,t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri extends Hu{constructor(){super("twitter.com")}static credential(e,t){return mi._fromParams({providerId:ri.PROVIDER_ID,signInMethod:ri.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return ri.credentialFromTaggedObject(e)}static credentialFromError(e){return ri.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return ri.credential(t,r)}catch{return null}}}ri.TWITTER_SIGN_IN_METHOD="twitter.com";ri.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eD(n,e){return as(n,"POST","/v1/accounts:signUp",Pt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,a=!1){const o=await xr._fromIdTokenResponse(e,r,a),u=MA(r);return new wr({user:o,providerId:u,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const a=MA(r);return new wr({user:e,providerId:a,_tokenResponse:r,operationType:t})}}function MA(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function b4(n){var e;if(ft(n.app))return Promise.reject(hn(n));const t=bt(n);if(await t._initializationPromise,!((e=t.currentUser)===null||e===void 0)&&e.isAnonymous)return new wr({user:t.currentUser,providerId:null,operationType:"signIn"});const r=await eD(t,{returnSecureToken:!0}),a=await wr._fromIdTokenResponse(t,"signIn",r,!0);return await t._updateCurrentUser(a.user),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rp extends kn{constructor(e,t,r,a){var o;super(t.code,t.message),this.operationType=r,this.user=a,Object.setPrototypeOf(this,rp.prototype),this.customData={appName:e.name,tenantId:(o=e.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,a){return new rp(e,t,r,a)}}function tD(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?rp._fromErrorAndOperation(n,o,e,r):o})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nD(n){return new Set(n.map(({providerId:e})=>e).filter(e=>!!e))}/**
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
 */async function I4(n,e){const t=Ae(n);await Fp(!0,t,e);const{providerUserInfo:r}=await AU(t.auth,{idToken:await t.getIdToken(),deleteProvider:[e]}),a=nD(r||[]);return t.providerData=t.providerData.filter(o=>a.has(o.providerId)),a.has("phone")||(t.phoneNumber=null),await t.auth._persistUserIfCurrent(t),t}async function aT(n,e,t=!1){const r=await ts(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return wr._forOperation(n,"link",r)}async function Fp(n,e,t){await Wh(e);const r=nD(e.providerData),a=n===!1?"provider-already-linked":"no-such-provider";se(r.has(t)===n,e.auth,a)}/**
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
 */async function rD(n,e,t=!1){const{auth:r}=n;if(ft(r.app))return Promise.reject(hn(r));const a="reauthenticate";try{const o=await ts(n,tD(r,a,e,n),t);se(o.idToken,r,"internal-error");const u=Up(o.idToken);se(u,r,"internal-error");const{sub:h}=u;return se(n.uid===h,r,"user-mismatch"),wr._forOperation(n,a,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&vn(r,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iD(n,e,t=!1){if(ft(n.app))return Promise.reject(hn(n));const r="signIn",a=await tD(n,r,e),o=await wr._fromIdTokenResponse(n,r,a);return t||await n._updateCurrentUser(o.user),o}async function qp(n,e){return iD(bt(n),e)}async function sD(n,e){const t=Ae(n);return await Fp(!1,t,e.providerId),aT(t,e)}async function aD(n,e){return rD(Ae(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function A4(n,e){return as(n,"POST","/v1/accounts:signInWithCustomToken",Pt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function S4(n,e){if(ft(n.app))return Promise.reject(hn(n));const t=bt(n),r=await A4(t,{token:e,returnSecureToken:!0}),a=await wr._fromIdTokenResponse(t,"signIn",r);return await t._updateCurrentUser(a.user),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Id{constructor(e,t){this.factorId=e,this.uid=t.mfaEnrollmentId,this.enrollmentTime=new Date(t.enrolledAt).toUTCString(),this.displayName=t.displayName}static _fromServerResponse(e,t){return"phoneInfo"in t?oT._fromServerResponse(e,t):"totpInfo"in t?lT._fromServerResponse(e,t):vn(e,"internal-error")}}class oT extends Id{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,t){return new oT(t)}}class lT extends Id{constructor(e){super("totp",e)}static _fromServerResponse(e,t){return new lT(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jp(n,e,t){var r;se(((r=t.url)===null||r===void 0?void 0:r.length)>0,n,"invalid-continue-uri"),se(typeof t.dynamicLinkDomain>"u"||t.dynamicLinkDomain.length>0,n,"invalid-dynamic-link-domain"),se(typeof t.linkDomain>"u"||t.linkDomain.length>0,n,"invalid-hosting-link-domain"),e.continueUrl=t.url,e.dynamicLinkDomain=t.dynamicLinkDomain,e.linkDomain=t.linkDomain,e.canHandleCodeInApp=t.handleCodeInApp,t.iOS&&(se(t.iOS.bundleId.length>0,n,"missing-ios-bundle-id"),e.iOSBundleId=t.iOS.bundleId),t.android&&(se(t.android.packageName.length>0,n,"missing-android-pkg-name"),e.androidInstallApp=t.android.installApp,e.androidMinimumVersionCode=t.android.minimumVersion,e.androidPackageName=t.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uT(n){const e=bt(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function R4(n,e,t){const r=bt(n),a={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};t&&jp(r,a,t),await sa(r,a,"getOobCode",u4,"EMAIL_PASSWORD_PROVIDER")}async function C4(n,e,t){await JC(Ae(n),{oobCode:e,newPassword:t}).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&uT(n),r})}async function D4(n,e){await a4(Ae(n),{oobCode:e})}async function oD(n,e){const t=Ae(n),r=await JC(t,{oobCode:e}),a=r.requestType;switch(se(a,t,"internal-error"),a){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":se(r.newEmail,t,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":se(r.mfaInfo,t,"internal-error");default:se(r.email,t,"internal-error")}let o=null;return r.mfaInfo&&(o=Id._fromServerResponse(bt(t),r.mfaInfo)),{data:{email:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.newEmail:r.email)||null,previousEmail:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.email:r.newEmail)||null,multiFactorInfo:o},operation:a}}async function P4(n,e){const{data:t}=await oD(Ae(n),e);return t.email}async function x4(n,e,t){if(ft(n.app))return Promise.reject(hn(n));const r=bt(n),u=await sa(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",eD,"EMAIL_PASSWORD_PROVIDER").catch(f=>{throw f.code==="auth/password-does-not-meet-requirements"&&uT(n),f}),h=await wr._fromIdTokenResponse(r,"signIn",u);return await r._updateCurrentUser(h.user),h}function N4(n,e,t){return ft(n.app)?Promise.reject(hn(n)):qp(Ae(n),Aa.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&uT(n),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function O4(n,e,t){const r=bt(n),a={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function o(u,h){se(h.handleCodeInApp,r,"argument-error"),h&&jp(r,u,h)}o(a,t),await sa(r,a,"getOobCode",c4,"EMAIL_PASSWORD_PROVIDER")}function k4(n,e){const t=zp.parseLink(e);return(t==null?void 0:t.operation)==="EMAIL_SIGNIN"}async function V4(n,e,t){if(ft(n.app))return Promise.reject(hn(n));const r=Ae(n),a=Aa.credentialWithLink(e,t||Qh());return se(a._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),qp(r,a)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function M4(n,e){return xt(n,"POST","/v1/accounts:createAuthUri",Pt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function L4(n,e){const t=rT()?Qh():"http://localhost",r={identifier:e,continueUri:t},{signinMethods:a}=await M4(Ae(n),r);return a||[]}async function U4(n,e){const t=Ae(n),a={requestType:"VERIFY_EMAIL",idToken:await n.getIdToken()};e&&jp(t.auth,a,e);const{email:o}=await l4(t.auth,a);o!==n.email&&await n.reload()}async function B4(n,e,t){const r=Ae(n),o={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await n.getIdToken(),newEmail:e};t&&jp(r.auth,o,t);const{email:u}=await h4(r.auth,o);u!==n.email&&await n.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function z4(n,e){return xt(n,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function F4(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const r=Ae(n),o={idToken:await r.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},u=await ts(r,z4(r.auth,o));r.displayName=u.displayName||null,r.photoURL=u.photoUrl||null;const h=r.providerData.find(({providerId:f})=>f==="password");h&&(h.displayName=r.displayName,h.photoURL=r.photoURL),await r._updateTokensIfNecessary(u)}function q4(n,e){const t=Ae(n);return ft(t.auth.app)?Promise.reject(hn(t.auth)):lD(t,e,null)}function j4(n,e){return lD(Ae(n),null,e)}async function lD(n,e,t){const{auth:r}=n,o={idToken:await n.getIdToken(),returnSecureToken:!0};e&&(o.email=e),t&&(o.password=t);const u=await ts(n,i4(r,o));await n._updateTokensIfNecessary(u,!0)}/**
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
 */function H4(n){var e,t;if(!n)return null;const{providerId:r}=n,a=n.rawUserInfo?JSON.parse(n.rawUserInfo):{},o=n.isNewUser||n.kind==="identitytoolkit#SignupNewUserResponse";if(!r&&(n!=null&&n.idToken)){const u=(t=(e=Up(n.idToken))===null||e===void 0?void 0:e.firebase)===null||t===void 0?void 0:t.sign_in_provider;if(u){const h=u!=="anonymous"&&u!=="custom"?u:null;return new Jl(o,h)}}if(!r)return null;switch(r){case"facebook.com":return new G4(o,a);case"github.com":return new $4(o,a);case"google.com":return new K4(o,a);case"twitter.com":return new Q4(o,a,n.screenName||null);case"custom":case"anonymous":return new Jl(o,null);default:return new Jl(o,r,a)}}class Jl{constructor(e,t,r={}){this.isNewUser=e,this.providerId=t,this.profile=r}}class uD extends Jl{constructor(e,t,r,a){super(e,t,r),this.username=a}}class G4 extends Jl{constructor(e,t){super(e,"facebook.com",t)}}class $4 extends uD{constructor(e,t){super(e,"github.com",t,typeof(t==null?void 0:t.login)=="string"?t==null?void 0:t.login:null)}}class K4 extends Jl{constructor(e,t){super(e,"google.com",t)}}class Q4 extends uD{constructor(e,t,r){super(e,"twitter.com",t,r)}}function W4(n){const{user:e,_tokenResponse:t}=n;return e.isAnonymous&&!t?{providerId:null,isNewUser:!1,profile:null}:H4(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class go{constructor(e,t,r){this.type=e,this.credential=t,this.user=r}static _fromIdtoken(e,t){return new go("enroll",e,t)}static _fromMfaPendingCredential(e){return new go("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var t,r;if(e!=null&&e.multiFactorSession){if(!((t=e.multiFactorSession)===null||t===void 0)&&t.pendingCredential)return go._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(!((r=e.multiFactorSession)===null||r===void 0)&&r.idToken)return go._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cT{constructor(e,t,r){this.session=e,this.hints=t,this.signInResolver=r}static _fromError(e,t){const r=bt(e),a=t.customData._serverResponse,o=(a.mfaInfo||[]).map(h=>Id._fromServerResponse(r,h));se(a.mfaPendingCredential,r,"internal-error");const u=go._fromMfaPendingCredential(a.mfaPendingCredential);return new cT(u,o,async h=>{const f=await h._process(r,u);delete a.mfaInfo,delete a.mfaPendingCredential;const p=Object.assign(Object.assign({},a),{idToken:f.idToken,refreshToken:f.refreshToken});switch(t.operationType){case"signIn":const y=await wr._fromIdTokenResponse(r,t.operationType,p);return await r._updateCurrentUser(y.user),y;case"reauthenticate":return se(t.user,r,"internal-error"),wr._forOperation(t.user,t.operationType,p);default:vn(r,"internal-error")}})}async resolveSignIn(e){const t=e;return this.signInResolver(t)}}function Y4(n,e){var t;const r=Ae(n),a=e;return se(e.customData.operationType,r,"argument-error"),se((t=a.customData._serverResponse)===null||t===void 0?void 0:t.mfaPendingCredential,r,"argument-error"),cT._fromError(r,a)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LA(n,e){return xt(n,"POST","/v2/accounts/mfaEnrollment:start",Pt(n,e))}function X4(n,e){return xt(n,"POST","/v2/accounts/mfaEnrollment:finalize",Pt(n,e))}function Z4(n,e){return xt(n,"POST","/v2/accounts/mfaEnrollment:withdraw",Pt(n,e))}class hT{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(t=>{t.mfaInfo&&(this.enrolledFactors=t.mfaInfo.map(r=>Id._fromServerResponse(e.auth,r)))})}static _fromUser(e){return new hT(e)}async getSession(){return go._fromIdtoken(await this.user.getIdToken(),this.user)}async enroll(e,t){const r=e,a=await this.getSession(),o=await ts(this.user,r._process(this.user.auth,a,t));return await this.user._updateTokensIfNecessary(o),this.user.reload()}async unenroll(e){const t=typeof e=="string"?e:e.uid,r=await this.user.getIdToken();try{const a=await ts(this.user,Z4(this.user.auth,{idToken:r,mfaEnrollmentId:t}));this.enrolledFactors=this.enrolledFactors.filter(({uid:o})=>o!==t),await this.user._updateTokensIfNecessary(a),await this.user.reload()}catch(a){throw a}}}const Ty=new WeakMap;function J4(n){const e=Ae(n);return Ty.has(e)||Ty.set(e,hT._fromUser(e)),Ty.get(e)}const ip="__sak";/**
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
 */class cD{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(ip,"1"),this.storage.removeItem(ip),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eB=1e3,tB=10;class hD extends cD{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=QC(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),a=this.localCache[t];r!==a&&e(t,a,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((u,h,f)=>{this.notifyListeners(u,f)});return}const r=e.key;t?this.detachListener():this.stopPolling();const a=()=>{const u=this.storage.getItem(r);!t&&this.localCache[r]===u||this.notifyListeners(r,u)},o=this.storage.getItem(r);VU()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(a,tB):a()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const a of Array.from(r))a(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},eB)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}hD.type="LOCAL";const dT=hD;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dD extends cD{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}dD.type="SESSION";const No=dD;/**
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
 */function nB(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Hp{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(a=>a.isListeningto(e));if(t)return t;const r=new Hp(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:a,data:o}=t.data,u=this.handlersMap[a];if(!(u!=null&&u.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:a});const h=Array.from(u).map(async p=>p(t.origin,o)),f=await nB(h);t.ports[0].postMessage({status:"done",eventId:r,eventType:a,response:f})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Hp.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ad(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class rB{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const a=typeof MessageChannel<"u"?new MessageChannel:null;if(!a)throw new Error("connection_unavailable");let o,u;return new Promise((h,f)=>{const p=Ad("",20);a.port1.start();const y=setTimeout(()=>{f(new Error("unsupported_event"))},r);u={messageChannel:a,onMessage(v){const w=v;if(w.data.eventId===p)switch(w.data.status){case"ack":clearTimeout(y),o=setTimeout(()=>{f(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),h(w.data.response);break;default:clearTimeout(y),clearTimeout(o),f(new Error("invalid_response"));break}}},this.handlers.add(u),a.port1.addEventListener("message",u.onMessage),this.target.postMessage({eventType:e,eventId:p,data:t},[a.port2])}).finally(()=>{u&&this.removeMessageHandler(u)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jt(){return window}function iB(n){jt().location.href=n}/**
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
 */function fT(){return typeof jt().WorkerGlobalScope<"u"&&typeof jt().importScripts=="function"}async function sB(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function aB(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function oB(){return fT()?self:null}/**
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
 */const fD="firebaseLocalStorageDb",lB=1,sp="firebaseLocalStorage",mD="fbase_key";class Sd{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Gp(n,e){return n.transaction([sp],e?"readwrite":"readonly").objectStore(sp)}function uB(){const n=indexedDB.deleteDatabase(fD);return new Sd(n).toPromise()}function dv(){const n=indexedDB.open(fD,lB);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(sp,{keyPath:mD})}catch(a){t(a)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(sp)?e(r):(r.close(),await uB(),e(await dv()))})})}async function UA(n,e,t){const r=Gp(n,!0).put({[mD]:e,value:t});return new Sd(r).toPromise()}async function cB(n,e){const t=Gp(n,!1).get(e),r=await new Sd(t).toPromise();return r===void 0?null:r.value}function BA(n,e){const t=Gp(n,!0).delete(e);return new Sd(t).toPromise()}const hB=800,dB=3;class pD{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await dv(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>dB)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return fT()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Hp._getInstance(oB()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await sB(),!this.activeServiceWorker)return;this.sender=new rB(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||aB()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await dv();return await UA(e,ip,"1"),await BA(e,ip),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>UA(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>cB(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>BA(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(a=>{const o=Gp(a,!1).getAll();return new Sd(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:a,value:o}of e)r.add(a),JSON.stringify(this.localCache[a])!==JSON.stringify(o)&&(this.notifyListeners(a,o),t.push(a));for(const a of Object.keys(this.localCache))this.localCache[a]&&!r.has(a)&&(this.notifyListeners(a,null),t.push(a));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const a of Array.from(r))a(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),hB)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}pD.type="LOCAL";const Xh=pD;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zA(n,e){return xt(n,"POST","/v2/accounts/mfaSignIn:start",Pt(n,e))}function fB(n,e){return xt(n,"POST","/v2/accounts/mfaSignIn:finalize",Pt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wy=YC("rcb"),mB=new Ed(3e4,6e4);class pB{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=jt().grecaptcha)===null||e===void 0)&&e.render)}load(e,t=""){return se(gB(t),e,"argument-error"),this.shouldResolveImmediately(t)&&CA(jt().grecaptcha)?Promise.resolve(jt().grecaptcha):new Promise((r,a)=>{const o=jt().setTimeout(()=>{a(Xt(e,"network-request-failed"))},mB.get());jt()[wy]=()=>{jt().clearTimeout(o),delete jt()[wy];const h=jt().grecaptcha;if(!h||!CA(h)){a(Xt(e,"internal-error"));return}const f=h.render;h.render=(p,y)=>{const v=f(p,y);return this.counter++,v},this.hostLanguage=t,r(h)};const u=`${qU()}?${Nu({onload:wy,render:"explicit",hl:t})}`;sT(u).catch(()=>{clearTimeout(o),a(Xt(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var t;return!!(!((t=jt().grecaptcha)===null||t===void 0)&&t.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function gB(n){return n.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(n)}class _B{async load(e){return new KU(e)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sh="recaptcha",yB={theme:"light",type:"image"};let vB=class{constructor(e,t,r=Object.assign({},yB)){this.parameters=r,this.type=Sh,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=bt(e),this.isInvisible=this.parameters.size==="invisible",se(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const a=typeof t=="string"?document.getElementById(t):t;se(a,this.auth,"argument-error"),this.container=a,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new _B:new pB,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),t=this.getAssertedRecaptcha(),r=t.getResponse(e);return r||new Promise(a=>{const o=u=>{u&&(this.tokenChangeListeners.delete(o),a(u))};this.tokenChangeListeners.add(o),this.isInvisible&&t.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){se(!this.parameters.sitekey,this.auth,"argument-error"),se(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),se(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach(r=>r(t)),typeof e=="function")e(t);else if(typeof e=="string"){const r=jt()[e];typeof r=="function"&&r(t)}}}assertNotDestroyed(){se(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){se(rT()&&!fT(),this.auth,"internal-error"),await EB(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await bU(this.auth);se(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return se(this.recaptcha,this.auth,"internal-error"),this.recaptcha}};function EB(){let n=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}n=()=>e(),window.addEventListener("load",n)}).catch(e=>{throw n&&window.removeEventListener("load",n),e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mT{constructor(e,t){this.verificationId=e,this.onConfirmation=t}confirm(e){const t=To._fromVerification(this.verificationId,e);return this.onConfirmation(t)}}async function TB(n,e,t){if(ft(n.app))return Promise.reject(hn(n));const r=bt(n),a=await $p(r,e,Ae(t));return new mT(a,o=>qp(r,o))}async function wB(n,e,t){const r=Ae(n);await Fp(!1,r,"phone");const a=await $p(r.auth,e,Ae(t));return new mT(a,o=>sD(r,o))}async function bB(n,e,t){const r=Ae(n);if(ft(r.auth.app))return Promise.reject(hn(r.auth));const a=await $p(r.auth,e,Ae(t));return new mT(a,o=>aD(r,o))}async function $p(n,e,t){var r;if(!n._getRecaptchaConfig())try{await JU(n)}catch{console.log("Failed to initialize reCAPTCHA Enterprise config. Triggering the reCAPTCHA v2 verification.")}try{let a;if(typeof e=="string"?a={phoneNumber:e}:a=e,"session"in a){const o=a.session;if("phoneNumber"in a){se(o.type==="enroll",n,"internal-error");const u={idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:a.phoneNumber,clientType:"CLIENT_TYPE_WEB"}};return(await sa(n,u,"mfaSmsEnrollment",async(y,v)=>{if(v.phoneEnrollmentInfo.captchaResponse===Ah){se((t==null?void 0:t.type)===Sh,y,"argument-error");const w=await by(y,v,t);return LA(y,w)}return LA(y,v)},"PHONE_PROVIDER").catch(y=>Promise.reject(y))).phoneSessionInfo.sessionInfo}else{se(o.type==="signin",n,"internal-error");const u=((r=a.multiFactorHint)===null||r===void 0?void 0:r.uid)||a.multiFactorUid;se(u,n,"missing-multi-factor-info");const h={mfaPendingCredential:o.credential,mfaEnrollmentId:u,phoneSignInInfo:{clientType:"CLIENT_TYPE_WEB"}};return(await sa(n,h,"mfaSmsSignIn",async(v,w)=>{if(w.phoneSignInInfo.captchaResponse===Ah){se((t==null?void 0:t.type)===Sh,v,"argument-error");const S=await by(v,w,t);return zA(v,S)}return zA(v,w)},"PHONE_PROVIDER").catch(v=>Promise.reject(v))).phoneResponseInfo.sessionInfo}}else{const o={phoneNumber:a.phoneNumber,clientType:"CLIENT_TYPE_WEB"};return(await sa(n,o,"sendVerificationCode",async(p,y)=>{if(y.captchaResponse===Ah){se((t==null?void 0:t.type)===Sh,p,"argument-error");const v=await by(p,y,t);return VA(p,v)}return VA(p,y)},"PHONE_PROVIDER").catch(p=>Promise.reject(p))).sessionInfo}}finally{t==null||t._reset()}}async function IB(n,e){const t=Ae(n);if(ft(t.auth.app))return Promise.reject(hn(t.auth));await aT(t,e)}async function by(n,e,t){se(t.type===Sh,n,"argument-error");const r=await t.verify();se(typeof r=="string",n,"argument-error");const a=Object.assign({},e);if("phoneEnrollmentInfo"in a){const o=a.phoneEnrollmentInfo.phoneNumber,u=a.phoneEnrollmentInfo.captchaResponse,h=a.phoneEnrollmentInfo.clientType,f=a.phoneEnrollmentInfo.recaptchaVersion;return Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:o,recaptchaToken:r,captchaResponse:u,clientType:h,recaptchaVersion:f}}),a}else if("phoneSignInInfo"in a){const o=a.phoneSignInInfo.captchaResponse,u=a.phoneSignInInfo.clientType,h=a.phoneSignInInfo.recaptchaVersion;return Object.assign(a,{phoneSignInInfo:{recaptchaToken:r,captchaResponse:o,clientType:u,recaptchaVersion:h}}),a}else return Object.assign(a,{recaptchaToken:r}),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Oo=class wm{constructor(e){this.providerId=wm.PROVIDER_ID,this.auth=bt(e)}verifyPhoneNumber(e,t){return $p(this.auth,e,Ae(t))}static credential(e,t){return To._fromVerification(e,t)}static credentialFromResult(e){const t=e;return wm.credentialFromTaggedObject(t)}static credentialFromError(e){return wm.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:r}=e;return t&&r?To._fromTokenResponse(t,r):null}};Oo.PROVIDER_ID="phone";Oo.PHONE_SIGN_IN_METHOD="phone";/**
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
 */function qo(n,e){return e?tr(e):(se(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class pT extends ju{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Qi(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Qi(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Qi(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function AB(n){return iD(n.auth,new pT(n),n.bypassAuthState)}function SB(n){const{auth:e,user:t}=n;return se(t,e,"internal-error"),rD(t,new pT(n),n.bypassAuthState)}async function RB(n){const{auth:e,user:t}=n;return se(t,e,"internal-error"),aT(t,new pT(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gD{constructor(e,t,r,a,o=!1){this.auth=e,this.resolver=r,this.user=a,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:a,tenantId:o,error:u,type:h}=e;if(u){this.reject(u);return}const f={auth:this.auth,requestUri:t,sessionId:r,tenantId:o||void 0,postBody:a||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(h)(f))}catch(p){this.reject(p)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return AB;case"linkViaPopup":case"linkViaRedirect":return RB;case"reauthViaPopup":case"reauthViaRedirect":return SB;default:vn(this.auth,"internal-error")}}resolve(e){kr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){kr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CB=new Ed(2e3,1e4);async function DB(n,e,t){if(ft(n.app))return Promise.reject(Xt(n,"operation-not-supported-in-this-environment"));const r=bt(n);qu(n,e,os);const a=qo(r,t);return new Gi(r,"signInViaPopup",e,a).executeNotNull()}async function PB(n,e,t){const r=Ae(n);if(ft(r.auth.app))return Promise.reject(Xt(r.auth,"operation-not-supported-in-this-environment"));qu(r.auth,e,os);const a=qo(r.auth,t);return new Gi(r.auth,"reauthViaPopup",e,a,r).executeNotNull()}async function xB(n,e,t){const r=Ae(n);qu(r.auth,e,os);const a=qo(r.auth,t);return new Gi(r.auth,"linkViaPopup",e,a,r).executeNotNull()}class Gi extends gD{constructor(e,t,r,a,o){super(e,t,a,o),this.provider=r,this.authWindow=null,this.pollId=null,Gi.currentPopupAction&&Gi.currentPopupAction.cancel(),Gi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return se(e,this.auth,"internal-error"),e}async onExecution(){kr(this.filter.length===1,"Popup operations only handle one event");const e=Ad();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Xt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Xt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Gi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Xt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,CB.get())};e()}}Gi.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NB="pendingRedirect",Rh=new Map;class OB extends gD{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Rh.get(this.auth._key());if(!e){try{const r=await kB(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Rh.set(this.auth._key(),e)}return this.bypassAuthState||Rh.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function kB(n,e){const t=yD(e),r=_D(n);if(!await r._isAvailable())return!1;const a=await r._get(t)==="true";return await r._remove(t),a}async function gT(n,e){return _D(n)._set(yD(e),"true")}function VB(){Rh.clear()}function _T(n,e){Rh.set(n._key(),e)}function _D(n){return tr(n._redirectPersistence)}function yD(n){return Eo(NB,n.config.apiKey,n.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MB(n,e,t){return LB(n,e,t)}async function LB(n,e,t){if(ft(n.app))return Promise.reject(hn(n));const r=bt(n);qu(n,e,os),await r._initializationPromise;const a=qo(r,t);return await gT(a,r),a._openRedirect(r,e,"signInViaRedirect")}function UB(n,e,t){return BB(n,e,t)}async function BB(n,e,t){const r=Ae(n);if(qu(r.auth,e,os),ft(r.auth.app))return Promise.reject(hn(r.auth));await r.auth._initializationPromise;const a=qo(r.auth,t);await gT(a,r.auth);const o=await vD(r);return a._openRedirect(r.auth,e,"reauthViaRedirect",o)}function zB(n,e,t){return FB(n,e,t)}async function FB(n,e,t){const r=Ae(n);qu(r.auth,e,os),await r.auth._initializationPromise;const a=qo(r.auth,t);await Fp(!1,r,e.providerId),await gT(a,r.auth);const o=await vD(r);return a._openRedirect(r.auth,e,"linkViaRedirect",o)}async function qB(n,e){return await bt(n)._initializationPromise,Kp(n,e,!1)}async function Kp(n,e,t=!1){if(ft(n.app))return Promise.reject(hn(n));const r=bt(n),a=qo(r,e),u=await new OB(r,a,t).execute();return u&&!t&&(delete u.user._redirectEventId,await r._persistUserIfCurrent(u.user),await r._setRedirectUser(null,e)),u}async function vD(n){const e=Ad(`${n.uid}:::`);return n._redirectEventId=e,await n.auth._setRedirectUser(n),await n.auth._persistUserIfCurrent(n),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jB=10*60*1e3;class ED{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!HB(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!TD(e)){const a=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(Xt(this.auth,a))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=jB&&this.cachedEventUids.clear(),this.cachedEventUids.has(FA(e))}saveEventToCache(e){this.cachedEventUids.add(FA(e)),this.lastProcessedEventTime=Date.now()}}function FA(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function TD({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function HB(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return TD(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wD(n,e={}){return xt(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GB=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,$B=/^https?/;async function KB(n){if(n.config.emulator)return;const{authorizedDomains:e}=await wD(n);for(const t of e)try{if(QB(t))return}catch{}vn(n,"unauthorized-domain")}function QB(n){const e=Qh(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const u=new URL(n);return u.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&u.hostname===r}if(!$B.test(t))return!1;if(GB.test(n))return r===n;const a=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+a+"|"+a+")$","i").test(r)}/**
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
 */const WB=new Ed(3e4,6e4);function qA(){const n=jt().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function YB(n){return new Promise((e,t)=>{var r,a,o;function u(){qA(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{qA(),t(Xt(n,"network-request-failed"))},timeout:WB.get()})}if(!((a=(r=jt().gapi)===null||r===void 0?void 0:r.iframes)===null||a===void 0)&&a.Iframe)e(gapi.iframes.getContext());else if(!((o=jt().gapi)===null||o===void 0)&&o.load)u();else{const h=YC("iframefcb");return jt()[h]=()=>{gapi.load?u():t(Xt(n,"network-request-failed"))},sT(`${HU()}?onload=${h}`).catch(f=>t(f))}}).catch(e=>{throw bm=null,e})}let bm=null;function XB(n){return bm=bm||YB(n),bm}/**
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
 */const ZB=new Ed(5e3,15e3),JB="__/auth/iframe",ez="emulator/auth/iframe",tz={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},nz=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function rz(n){const e=n.config;se(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?iT(e,ez):`https://${n.config.authDomain}/${JB}`,r={apiKey:e.apiKey,appName:n.name,v:va},a=nz.get(n.config.apiHost);a&&(r.eid=a);const o=n._getFrameworks();return o.length&&(r.fw=o.join(",")),`${t}?${Nu(r).slice(1)}`}async function iz(n){const e=await XB(n),t=jt().gapi;return se(t,n,"internal-error"),e.open({where:document.body,url:rz(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:tz,dontclear:!0},r=>new Promise(async(a,o)=>{await r.restyle({setHideOnLeave:!1});const u=Xt(n,"network-request-failed"),h=jt().setTimeout(()=>{o(u)},ZB.get());function f(){jt().clearTimeout(h),a(r)}r.ping(f).then(f,()=>{o(u)})}))}/**
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
 */const sz={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},az=500,oz=600,lz="_blank",uz="http://localhost";class jA{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function cz(n,e,t,r=az,a=oz){const o=Math.max((window.screen.availHeight-a)/2,0).toString(),u=Math.max((window.screen.availWidth-r)/2,0).toString();let h="";const f=Object.assign(Object.assign({},sz),{width:r.toString(),height:a.toString(),top:o,left:u}),p=wt().toLowerCase();t&&(h=HC(p)?lz:t),qC(p)&&(e=e||uz,f.scrollbars="yes");const y=Object.entries(f).reduce((w,[S,P])=>`${w}${S}=${P},`,"");if(kU(p)&&h!=="_self")return hz(e||"",h),new jA(null);const v=window.open(e||"",h,y);se(v,n,"popup-blocked");try{v.focus()}catch{}return new jA(v)}function hz(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const dz="__/auth/handler",fz="emulator/auth/handler",mz=encodeURIComponent("fac");async function fv(n,e,t,r,a,o){se(n.config.authDomain,n,"auth-domain-config-required"),se(n.config.apiKey,n,"invalid-api-key");const u={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:va,eventId:a};if(e instanceof os){e.setDefaultLanguage(n.languageCode),u.providerId=e.providerId||"",OO(e.getCustomParameters())||(u.customParameters=JSON.stringify(e.getCustomParameters()));for(const[y,v]of Object.entries(o||{}))u[y]=v}if(e instanceof Hu){const y=e.getScopes().filter(v=>v!=="");y.length>0&&(u.scopes=y.join(","))}n.tenantId&&(u.tid=n.tenantId);const h=u;for(const y of Object.keys(h))h[y]===void 0&&delete h[y];const f=await n._getAppCheckToken(),p=f?`#${mz}=${encodeURIComponent(f)}`:"";return`${pz(n)}?${Nu(h).slice(1)}${p}`}function pz({config:n}){return n.emulator?iT(n,fz):`https://${n.authDomain}/${dz}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iy="webStorageSupport";class gz{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=No,this._completeRedirectFn=Kp,this._overrideRedirectResult=_T}async _openPopup(e,t,r,a){var o;kr((o=this.eventManagers[e._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const u=await fv(e,t,r,Qh(),a);return cz(e,u,Ad())}async _openRedirect(e,t,r,a){await this._originValidation(e);const o=await fv(e,t,r,Qh(),a);return iB(o),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:a,promise:o}=this.eventManagers[t];return a?Promise.resolve(a):(kr(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await iz(e),r=new ED(e);return t.register("authEvent",a=>(se(a==null?void 0:a.authEvent,e,"invalid-auth-event"),{status:r.onEvent(a.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Iy,{type:Iy},a=>{var o;const u=(o=a==null?void 0:a[0])===null||o===void 0?void 0:o[Iy];u!==void 0&&t(!!u),vn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=KB(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return QC()||jC()||wd()}}const _z=gz;class yz{constructor(e){this.factorId=e}_process(e,t,r){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,r);case"signin":return this._finalizeSignIn(e,t.credential);default:return ai("unexpected MultiFactorSessionType")}}}class yT extends yz{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new yT(e)}_finalizeEnroll(e,t,r){return X4(e,{idToken:t,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return fB(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class bD{constructor(){}static assertion(e){return yT._fromCredential(e)}}bD.FACTOR_ID="phone";var HA="@firebase/auth",GA="1.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vz{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){se(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ez(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Tz(n){ua(new ci("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),a=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:u,authDomain:h}=r.options;se(u&&!u.includes(":"),"invalid-api-key",{appName:r.name});const f={apiKey:u,authDomain:h,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:WC(n)},p=new zU(r,a,o,f);return e4(p,t),p},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),ua(new ci("auth-internal",e=>{const t=bt(e.getProvider("auth").getImmediate());return(r=>new vz(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Nr(HA,GA,Ez(n)),Nr(HA,GA,"esm2017")}/**
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
 */const wz=5*60;bO("authIdTokenMaxAge");function bz(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}FU({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=a=>{const o=Xt("internal-error");o.customData=a,t(o)},r.type="text/javascript",r.charset="UTF-8",bz().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Tz("Browser");/**
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
 */function ko(){return window}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iz=2e3;async function Az(n,e,t){var r;const{BuildInfo:a}=ko();kr(e.sessionId,"AuthEvent did not contain a session ID");const o=await Pz(e.sessionId),u={};return wd()?u.ibi=a.packageName:Td()?u.apn=a.packageName:vn(n,"operation-not-supported-in-this-environment"),a.displayName&&(u.appDisplayName=a.displayName),u.sessionId=o,fv(n,t,e.type,void 0,(r=e.eventId)!==null&&r!==void 0?r:void 0,u)}async function Sz(n){const{BuildInfo:e}=ko(),t={};wd()?t.iosBundleId=e.packageName:Td()?t.androidPackageName=e.packageName:vn(n,"operation-not-supported-in-this-environment"),await wD(n,t)}function Rz(n){const{cordova:e}=ko();return new Promise(t=>{e.plugins.browsertab.isAvailable(r=>{let a=null;r?e.plugins.browsertab.openUrl(n):a=e.InAppBrowser.open(n,OU()?"_blank":"_system","location=yes"),t(a)})})}async function Cz(n,e,t){const{cordova:r}=ko();let a=()=>{};try{await new Promise((o,u)=>{let h=null;function f(){var v;o();const w=(v=r.plugins.browsertab)===null||v===void 0?void 0:v.close;typeof w=="function"&&w(),typeof(t==null?void 0:t.close)=="function"&&t.close()}function p(){h||(h=window.setTimeout(()=>{u(Xt(n,"redirect-cancelled-by-user"))},Iz))}function y(){(document==null?void 0:document.visibilityState)==="visible"&&p()}e.addPassiveListener(f),document.addEventListener("resume",p,!1),Td()&&document.addEventListener("visibilitychange",y,!1),a=()=>{e.removePassiveListener(f),document.removeEventListener("resume",p,!1),document.removeEventListener("visibilitychange",y,!1),h&&window.clearTimeout(h)}})}finally{a()}}function Dz(n){var e,t,r,a,o,u,h,f,p,y;const v=ko();se(typeof((e=v==null?void 0:v.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),se(typeof((t=v==null?void 0:v.BuildInfo)===null||t===void 0?void 0:t.packageName)<"u",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),se(typeof((o=(a=(r=v==null?void 0:v.cordova)===null||r===void 0?void 0:r.plugins)===null||a===void 0?void 0:a.browsertab)===null||o===void 0?void 0:o.openUrl)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),se(typeof((f=(h=(u=v==null?void 0:v.cordova)===null||u===void 0?void 0:u.plugins)===null||h===void 0?void 0:h.browsertab)===null||f===void 0?void 0:f.isAvailable)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),se(typeof((y=(p=v==null?void 0:v.cordova)===null||p===void 0?void 0:p.InAppBrowser)===null||y===void 0?void 0:y.open)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function Pz(n){const e=xz(n),t=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(t)).map(a=>a.toString(16).padStart(2,"0")).join("")}function xz(n){if(kr(/[0-9a-zA-Z]+/.test(n),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(n);const e=new ArrayBuffer(n.length),t=new Uint8Array(e);for(let r=0;r<n.length;r++)t[r]=n.charCodeAt(r);return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nz=20;class Oz extends ED{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInitialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInitialized(),this.passiveListeners.forEach(t=>t(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function kz(n,e,t=null){return{type:e,eventId:t,urlResponse:null,sessionId:Lz(),postBody:null,tenantId:n.tenantId,error:Xt(n,"no-auth-event")}}function Vz(n,e){return mv()._set(pv(n),e)}async function $A(n){const e=await mv()._get(pv(n));return e&&await mv()._remove(pv(n)),e}function Mz(n,e){var t,r;const a=Bz(e);if(a.includes("/__/auth/callback")){const o=Im(a),u=o.firebaseError?Uz(decodeURIComponent(o.firebaseError)):null,h=(r=(t=u==null?void 0:u.code)===null||t===void 0?void 0:t.split("auth/"))===null||r===void 0?void 0:r[1],f=h?Xt(h):null;return f?{type:n.type,eventId:n.eventId,tenantId:n.tenantId,error:f,urlResponse:null,sessionId:null,postBody:null}:{type:n.type,eventId:n.eventId,tenantId:n.tenantId,sessionId:n.sessionId,urlResponse:a,postBody:null}}return null}function Lz(){const n=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let t=0;t<Nz;t++){const r=Math.floor(Math.random()*e.length);n.push(e.charAt(r))}return n.join("")}function mv(){return tr(dT)}function pv(n){return Eo("authEvent",n.config.apiKey,n.name)}function Uz(n){try{return JSON.parse(n)}catch{return null}}function Bz(n){const e=Im(n),t=e.link?decodeURIComponent(e.link):void 0,r=Im(t).link,a=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return Im(a).link||a||r||t||n}function Im(n){if(!(n!=null&&n.includes("?")))return{};const[e,...t]=n.split("?");return $l(t.join("?"))}/**
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
 */const zz=500;class Fz{constructor(){this._redirectPersistence=No,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=Kp,this._overrideRedirectResult=_T}async _initialize(e){const t=e._key();let r=this.eventManagers.get(t);return r||(r=new Oz(e),this.eventManagers.set(t,r),this.attachCallbackListeners(e,r)),r}_openPopup(e){vn(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,t,r,a){Dz(e);const o=await this._initialize(e);await o.initialized(),o.resetRedirect(),VB(),await this._originValidation(e);const u=kz(e,r,a);await Vz(e,u);const h=await Az(e,u,t),f=await Rz(h);return Cz(e,o,f)}_isIframeWebStorageSupported(e,t){throw new Error("Method not implemented.")}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Sz(e)),this.originValidationPromises[t]}attachCallbackListeners(e,t){const{universalLinks:r,handleOpenURL:a,BuildInfo:o}=ko(),u=setTimeout(async()=>{await $A(e),t.onEvent(KA())},zz),h=async y=>{clearTimeout(u);const v=await $A(e);let w=null;v&&(y!=null&&y.url)&&(w=Mz(v,y.url)),t.onEvent(w||KA())};typeof r<"u"&&typeof r.subscribe=="function"&&r.subscribe(null,h);const f=a,p=`${o.packageName.toLowerCase()}://`;ko().handleOpenURL=async y=>{if(y.toLowerCase().startsWith(p)&&h({url:y}),typeof f=="function")try{f(y)}catch(v){console.error(v)}}}}const qz=Fz;function KA(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:Xt("no-auth-event")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jz(n,e){bt(n)._logFramework(e)}var Hz="@firebase/auth-compat",Gz="0.5.20";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $z=1e3;function Ch(){var n;return((n=self==null?void 0:self.location)===null||n===void 0?void 0:n.protocol)||null}function Kz(){return Ch()==="http:"||Ch()==="https:"}function ID(n=wt()){return!!((Ch()==="file:"||Ch()==="ionic:"||Ch()==="capacitor:")&&n.toLowerCase().match(/iphone|ipad|ipod|android/))}function Qz(){return Bv()||Uv()}function Wz(){return MS()&&(document==null?void 0:document.documentMode)===11}function Yz(n=wt()){return/Edge\/\d+/.test(n)}function Xz(n=wt()){return Wz()||Yz(n)}function AD(){try{const n=self.localStorage,e=Ad();if(n)return n.setItem(e,"1"),n.removeItem(e),Xz()?xh():!0}catch{return vT()&&xh()}return!1}function vT(){return typeof global<"u"&&"WorkerGlobalScope"in global&&"importScripts"in global}function Ay(){return(Kz()||VS()||ID())&&!Qz()&&AD()&&!vT()}function SD(){return ID()&&typeof document<"u"}async function Zz(){return SD()?new Promise(n=>{const e=setTimeout(()=>{n(!1)},$z);document.addEventListener("deviceready",()=>{clearTimeout(e),n(!0)})}):!1}function Jz(){return typeof window<"u"?window:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const er={LOCAL:"local",NONE:"none",SESSION:"session"},lh=se,RD="persistence";function e6(n,e){if(lh(Object.values(er).includes(e),n,"invalid-persistence-type"),Bv()){lh(e!==er.SESSION,n,"unsupported-persistence-type");return}if(Uv()){lh(e===er.NONE,n,"unsupported-persistence-type");return}if(vT()){lh(e===er.NONE||e===er.LOCAL&&xh(),n,"unsupported-persistence-type");return}lh(e===er.NONE||AD(),n,"unsupported-persistence-type")}async function gv(n){await n._initializationPromise;const e=CD(),t=Eo(RD,n.config.apiKey,n.name);e&&e.setItem(t,n._getPersistenceType())}function t6(n,e){const t=CD();if(!t)return[];const r=Eo(RD,n,e);switch(t.getItem(r)){case er.NONE:return[wu];case er.LOCAL:return[Xh,No];case er.SESSION:return[No];default:return[]}}function CD(){var n;try{return((n=Jz())===null||n===void 0?void 0:n.sessionStorage)||null}catch{return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n6=se;class ea{constructor(){this.browserResolver=tr(_z),this.cordovaResolver=tr(qz),this.underlyingResolver=null,this._redirectPersistence=No,this._completeRedirectFn=Kp,this._overrideRedirectResult=_T}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,t,r,a){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,t,r,a)}async _openRedirect(e,t,r,a){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,t,r,a)}_isIframeWebStorageSupported(e,t){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,t)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return SD()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return n6(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await Zz();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DD(n){return n.unwrap()}function r6(n){return n.wrapped()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function i6(n){return PD(n)}function s6(n,e){var t;const r=(t=e.customData)===null||t===void 0?void 0:t._tokenResponse;if((e==null?void 0:e.code)==="auth/multi-factor-auth-required"){const a=e;a.resolver=new a6(n,Y4(n,e))}else if(r){const a=PD(e),o=e;a&&(o.credential=a,o.tenantId=r.tenantId||void 0,o.email=r.email||void 0,o.phoneNumber=r.phoneNumber||void 0)}}function PD(n){const{_tokenResponse:e}=n instanceof kn?n.customData:n;if(!e)return null;if(!(n instanceof kn)&&"temporaryProof"in e&&"phoneNumber"in e)return Oo.credentialFromResult(n);const t=e.providerId;if(!t||t===ah.PASSWORD)return null;let r;switch(t){case ah.GOOGLE:r=ti;break;case ah.FACEBOOK:r=ei;break;case ah.GITHUB:r=ni;break;case ah.TWITTER:r=ri;break;default:const{oauthIdToken:a,oauthAccessToken:o,oauthTokenSecret:u,pendingToken:h,nonce:f}=e;return!o&&!u&&!a&&!h?null:h?t.startsWith("saml.")?bu._create(t,h):mi._fromParams({providerId:t,signInMethod:t,pendingToken:h,idToken:a,accessToken:o}):new Zl(t).credential({idToken:a,accessToken:o,rawNonce:f})}return n instanceof kn?r.credentialFromError(n):r.credentialFromResult(n)}function zn(n,e){return e.catch(t=>{throw t instanceof kn&&s6(n,t),t}).then(t=>{const r=t.operationType,a=t.user;return{operationType:r,credential:i6(t),additionalUserInfo:W4(t),user:$i.getOrCreate(a)}})}async function _v(n,e){const t=await e;return{verificationId:t.verificationId,confirm:r=>zn(n,t.confirm(r))}}class a6{constructor(e,t){this.resolver=t,this.auth=r6(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return zn(DD(this.auth),this.resolver.resolveSignIn(e))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $i{constructor(e){this._delegate=e,this.multiFactor=J4(e)}static getOrCreate(e){return $i.USER_MAP.has(e)||$i.USER_MAP.set(e,new $i(e)),$i.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return zn(this.auth,sD(this._delegate,e))}async linkWithPhoneNumber(e,t){return _v(this.auth,wB(this._delegate,e,t))}async linkWithPopup(e){return zn(this.auth,xB(this._delegate,e,ea))}async linkWithRedirect(e){return await gv(bt(this.auth)),zB(this._delegate,e,ea)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return zn(this.auth,aD(this._delegate,e))}reauthenticateWithPhoneNumber(e,t){return _v(this.auth,bB(this._delegate,e,t))}reauthenticateWithPopup(e){return zn(this.auth,PB(this._delegate,e,ea))}async reauthenticateWithRedirect(e){return await gv(bt(this.auth)),UB(this._delegate,e,ea)}sendEmailVerification(e){return U4(this._delegate,e)}async unlink(e){return await I4(this._delegate,e),this}updateEmail(e){return q4(this._delegate,e)}updatePassword(e){return j4(this._delegate,e)}updatePhoneNumber(e){return IB(this._delegate,e)}updateProfile(e){return F4(this._delegate,e)}verifyBeforeUpdateEmail(e,t){return B4(this._delegate,e,t)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}$i.USER_MAP=new WeakMap;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uh=se;class yv{constructor(e,t){if(this.app=e,t.isInitialized()){this._delegate=t.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:r}=e.options;uh(r,"invalid-api-key",{appName:e.name}),uh(r,"invalid-api-key",{appName:e.name});const a=typeof window<"u"?ea:void 0;this._delegate=t.initialize({options:{persistence:o6(r,e.name),popupRedirectResolver:a}}),this._delegate._updateErrorMap(fU),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?$i.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,t){t4(this._delegate,e,t)}applyActionCode(e){return D4(this._delegate,e)}checkActionCode(e){return oD(this._delegate,e)}confirmPasswordReset(e,t){return C4(this._delegate,e,t)}async createUserWithEmailAndPassword(e,t){return zn(this._delegate,x4(this._delegate,e,t))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return L4(this._delegate,e)}isSignInWithEmailLink(e){return k4(this._delegate,e)}async getRedirectResult(){uh(Ay(),this._delegate,"operation-not-supported-in-this-environment");const e=await qB(this._delegate,ea);return e?zn(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){jz(this._delegate,e)}onAuthStateChanged(e,t,r){const{next:a,error:o,complete:u}=QA(e,t,r);return this._delegate.onAuthStateChanged(a,o,u)}onIdTokenChanged(e,t,r){const{next:a,error:o,complete:u}=QA(e,t,r);return this._delegate.onIdTokenChanged(a,o,u)}sendSignInLinkToEmail(e,t){return O4(this._delegate,e,t)}sendPasswordResetEmail(e,t){return R4(this._delegate,e,t||void 0)}async setPersistence(e){e6(this._delegate,e);let t;switch(e){case er.SESSION:t=No;break;case er.LOCAL:t=await tr(Xh)._isAvailable()?Xh:dT;break;case er.NONE:t=wu;break;default:return vn("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(t)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return zn(this._delegate,b4(this._delegate))}signInWithCredential(e){return zn(this._delegate,qp(this._delegate,e))}signInWithCustomToken(e){return zn(this._delegate,S4(this._delegate,e))}signInWithEmailAndPassword(e,t){return zn(this._delegate,N4(this._delegate,e,t))}signInWithEmailLink(e,t){return zn(this._delegate,V4(this._delegate,e,t))}signInWithPhoneNumber(e,t){return _v(this._delegate,TB(this._delegate,e,t))}async signInWithPopup(e){return uh(Ay(),this._delegate,"operation-not-supported-in-this-environment"),zn(this._delegate,DB(this._delegate,e,ea))}async signInWithRedirect(e){return uh(Ay(),this._delegate,"operation-not-supported-in-this-environment"),await gv(this._delegate),MB(this._delegate,e,ea)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return P4(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}yv.Persistence=er;function QA(n,e,t){let r=n;typeof n!="function"&&({next:r,error:e,complete:t}=n);const a=r;return{next:u=>a(u&&$i.getOrCreate(u)),error:e,complete:t}}function o6(n,e){const t=t6(n,e);if(typeof self<"u"&&!t.includes(Xh)&&t.push(Xh),typeof window<"u")for(const r of[dT,No])t.includes(r)||t.push(r);return t.includes(wu)||t.push(wu),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ET{static credential(e,t){return Oo.credential(e,t)}constructor(){this.providerId="phone",this._delegate=new Oo(DD(Fu.auth()))}verifyPhoneNumber(e,t){return this._delegate.verifyPhoneNumber(e,t)}unwrap(){return this._delegate}}ET.PHONE_SIGN_IN_METHOD=Oo.PHONE_SIGN_IN_METHOD;ET.PROVIDER_ID=Oo.PROVIDER_ID;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l6=se;class u6{constructor(e,t,r=Fu.app()){var a;l6((a=r.options)===null||a===void 0?void 0:a.apiKey,"invalid-api-key",{appName:r.name}),this._delegate=new vB(r.auth(),e,t),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c6="auth-compat";function h6(n){n.INTERNAL.registerComponent(new ci(c6,e=>{const t=e.getProvider("app-compat").getImmediate(),r=e.getProvider("auth");return new yv(t,r)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:Bl.EMAIL_SIGNIN,PASSWORD_RESET:Bl.PASSWORD_RESET,RECOVER_EMAIL:Bl.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:Bl.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:Bl.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:Bl.VERIFY_EMAIL}},EmailAuthProvider:Aa,FacebookAuthProvider:ei,GithubAuthProvider:ni,GoogleAuthProvider:ti,OAuthProvider:Zl,SAMLAuthProvider:np,PhoneAuthProvider:ET,PhoneMultiFactorGenerator:bD,RecaptchaVerifier:u6,TwitterAuthProvider:ri,Auth:yv,AuthCredential:ju,Error:kn}).setInstantiationMode("LAZY").setMultipleInstances(!1)),n.registerVersion(Hz,Gz)}h6(Fu);const d6="@firebase/firestore-compat",f6="0.3.45";/**
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
 */function TT(n,e){if(e===void 0)return{merge:!1};if(e.mergeFields!==void 0&&e.merge!==void 0)throw new te("invalid-argument",`Invalid options passed to function ${n}(): You cannot specify both "merge" and "mergeFields".`);return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WA(){if(typeof Uint8Array>"u")throw new te("unimplemented","Uint8Arrays are not available in this environment.")}function YA(){if(!MV())throw new te("unimplemented","Blobs are unavailable in Firestore in this environment.")}class Zh{constructor(e){this._delegate=e}static fromBase64String(e){return YA(),new Zh(fi.fromBase64String(e))}static fromUint8Array(e){return WA(),new Zh(fi.fromUint8Array(e))}toBase64(){return YA(),this._delegate.toBase64()}toUint8Array(){return WA(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vv(n){return m6(n,["next","error","complete"])}function m6(n,e){if(typeof n!="object"||n===null)return!1;const t=n;for(const r of e)if(r in t&&typeof t[r]=="function")return!0;return!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p6{enableIndexedDbPersistence(e,t){return y2(e._delegate,{forceOwnership:t})}enableMultiTabIndexedDbPersistence(e){return v2(e._delegate)}clearIndexedDbPersistence(e){return E2(e._delegate)}}class xD{constructor(e,t,r){this._delegate=t,this._persistenceProvider=r,this.INTERNAL={delete:()=>this.terminate()},e instanceof ha||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const t=this._delegate._getSettings();!e.merge&&t.host!==e.host&&hi("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},t),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,t,r={}){m2(this._delegate,e,t,r)}enableNetwork(){return w2(this._delegate)}disableNetwork(){return b2(this._delegate)}enablePersistence(e){let t=!1,r=!1;return e&&(t=!!e.synchronizeTabs,r=!!e.experimentalForceOwningTab,lC("synchronizeTabs",t,"experimentalForceOwningTab",r)),t?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,r)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return T2(this._delegate)}onSnapshotsInSync(e){return $2(this._delegate,e)}get app(){if(!this._appCompat)throw new te("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new Iu(this,UE(this._delegate,e))}catch(t){throw On(t,"collection()","Firestore.collection()")}}doc(e){try{return new Er(this,Ji(this._delegate,e))}catch(t){throw On(t,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new Nn(this,p2(this._delegate,e))}catch(t){throw On(t,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return X2(this._delegate,t=>e(new ND(this,t)))}batch(){return Sn(this._delegate),new OD(new Q2(this._delegate,e=>vd(this._delegate,e)))}loadBundle(e){return I2(this._delegate,e)}namedQuery(e){return A2(this._delegate,e).then(t=>t?new Nn(this,t):null)}}class Qp extends XE{constructor(e){super(),this.firestore=e}convertBytes(e){return new Zh(new fi(e))}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return Er.forKey(t,this.firestore,null)}}function g6(n){Wk(n)}class ND{constructor(e,t){this._firestore=e,this._delegate=t,this._userDataWriter=new Qp(e)}get(e){const t=_o(e);return this._delegate.get(t).then(r=>new Jh(this._firestore,new es(this._firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,t.converter)))}set(e,t,r){const a=_o(e);return r?(TT("Transaction.set",r),this._delegate.set(a,t,r)):this._delegate.set(a,t),this}update(e,t,r,...a){const o=_o(e);return arguments.length===2?this._delegate.update(o,t):this._delegate.update(o,t,r,...a),this}delete(e){const t=_o(e);return this._delegate.delete(t),this}}class OD{constructor(e){this._delegate=e}set(e,t,r){const a=_o(e);return r?(TT("WriteBatch.set",r),this._delegate.set(a,t,r)):this._delegate.set(a,t),this}update(e,t,r,...a){const o=_o(e);return arguments.length===2?this._delegate.update(o,t):this._delegate.update(o,t,r,...a),this}delete(e){const t=_o(e);return this._delegate.delete(t),this}commit(){return this._delegate.commit()}}class Vo{constructor(e,t,r){this._firestore=e,this._userDataWriter=t,this._delegate=r}fromFirestore(e,t){const r=new bh(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new ed(this._firestore,r),t??{})}toFirestore(e,t){return t?this._delegate.toFirestore(e,t):this._delegate.toFirestore(e)}static getInstance(e,t){const r=Vo.INSTANCES;let a=r.get(e);a||(a=new WeakMap,r.set(e,a));let o=a.get(t);return o||(o=new Vo(e,new Qp(e),t),a.set(t,o)),o}}Vo.INSTANCES=new WeakMap;class Er{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new Qp(e)}static forPath(e,t,r){if(e.length%2!==0)throw new te("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new Er(t,new Tt(t._delegate,r,new ce(e)))}static forKey(e,t,r){return new Er(t,new Tt(t._delegate,r,e))}get id(){return this._delegate.id}get parent(){return new Iu(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new Iu(this.firestore,UE(this._delegate,e))}catch(t){throw On(t,"collection()","DocumentReference.collection()")}}isEqual(e){return e=Ae(e),e instanceof Tt?mC(this._delegate,e):!1}set(e,t){t=TT("DocumentReference.set",t);try{return t?cv(this._delegate,e,t):cv(this._delegate,e)}catch(r){throw On(r,"setDoc()","DocumentReference.set()")}}update(e,t,...r){try{return arguments.length===1?Zm(this._delegate,e):Zm(this._delegate,e,t,...r)}catch(a){throw On(a,"updateDoc()","DocumentReference.update()")}}delete(){return PC(this._delegate)}onSnapshot(...e){const t=kD(e),r=VD(e,a=>new Jh(this.firestore,new es(this.firestore._delegate,this._userDataWriter,a._key,a._document,a.metadata,this._delegate.converter)));return xC(this._delegate,t,r)}get(e){let t;return(e==null?void 0:e.source)==="cache"?t=F2(this._delegate):(e==null?void 0:e.source)==="server"?t=q2(this._delegate):t=ZE(this._delegate),t.then(r=>new Jh(this.firestore,new es(this.firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,this._delegate.converter)))}withConverter(e){return new Er(this.firestore,e?this._delegate.withConverter(Vo.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function On(n,e,t){return n.message=n.message.replace(e,t),n}function kD(n){for(const e of n)if(typeof e=="object"&&!vv(e))return e;return{}}function VD(n,e){var t,r;let a;return vv(n[0])?a=n[0]:vv(n[1])?a=n[1]:typeof n[0]=="function"?a={next:n[0],error:n[1],complete:n[2]}:a={next:n[1],error:n[2],complete:n[3]},{next:o=>{a.next&&a.next(e(o))},error:(t=a.error)===null||t===void 0?void 0:t.bind(a),complete:(r=a.complete)===null||r===void 0?void 0:r.bind(a)}}class Jh{constructor(e,t){this._firestore=e,this._delegate=t}get ref(){return new Er(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,t){return this._delegate.get(e,t)}isEqual(e){return CC(this._delegate,e._delegate)}}class ed extends Jh{data(e){const t=this._delegate.data(e);return this._delegate._converter||Yk(t!==void 0),t}}class Nn{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new Qp(e)}where(e,t,r){try{return new Nn(this.firestore,Qs(this._delegate,x2(e,t,r)))}catch(a){throw On(a,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,t){try{return new Nn(this.firestore,Qs(this._delegate,N2(e,t)))}catch(r){throw On(r,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new Nn(this.firestore,Qs(this._delegate,O2(e)))}catch(t){throw On(t,"limit()","Query.limit()")}}limitToLast(e){try{return new Nn(this.firestore,Qs(this._delegate,k2(e)))}catch(t){throw On(t,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new Nn(this.firestore,Qs(this._delegate,V2(...e)))}catch(t){throw On(t,"startAt()","Query.startAt()")}}startAfter(...e){try{return new Nn(this.firestore,Qs(this._delegate,M2(...e)))}catch(t){throw On(t,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new Nn(this.firestore,Qs(this._delegate,L2(...e)))}catch(t){throw On(t,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new Nn(this.firestore,Qs(this._delegate,U2(...e)))}catch(t){throw On(t,"endAt()","Query.endAt()")}}isEqual(e){return pC(this._delegate,e._delegate)}get(e){let t;return(e==null?void 0:e.source)==="cache"?t=j2(this._delegate):(e==null?void 0:e.source)==="server"?t=H2(this._delegate):t=DC(this._delegate),t.then(r=>new Ev(this.firestore,new ya(this.firestore._delegate,this._userDataWriter,this._delegate,r._snapshot)))}onSnapshot(...e){const t=kD(e),r=VD(e,a=>new Ev(this.firestore,new ya(this.firestore._delegate,this._userDataWriter,this._delegate,a._snapshot)));return xC(this._delegate,t,r)}withConverter(e){return new Nn(this.firestore,e?this._delegate.withConverter(Vo.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class _6{constructor(e,t){this._firestore=e,this._delegate=t}get type(){return this._delegate.type}get doc(){return new ed(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class Ev{constructor(e,t){this._firestore=e,this._delegate=t}get query(){return new Nn(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new ed(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(t=>new _6(this._firestore,t))}forEach(e,t){this._delegate.forEach(r=>{e.call(t,new ed(this._firestore,r))})}isEqual(e){return CC(this._delegate,e._delegate)}}class Iu extends Nn{constructor(e,t){super(e,t),this.firestore=e,this._delegate=t}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new Er(this.firestore,e):null}doc(e){try{return e===void 0?new Er(this.firestore,Ji(this._delegate)):new Er(this.firestore,Ji(this._delegate,e))}catch(t){throw On(t,"doc()","CollectionReference.doc()")}}add(e){return G2(this._delegate,e).then(t=>new Er(this.firestore,t))}isEqual(e){return mC(this._delegate,e._delegate)}withConverter(e){return new Iu(this.firestore,e?this._delegate.withConverter(Vo.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function _o(n){return Xe(n,Tt)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wT{constructor(...e){this._delegate=new _a(...e)}static documentId(){return new wT(mt.keyField().canonicalString())}isEqual(e){return e=Ae(e),e instanceof _a?this._delegate._internalPath.isEqual(e._internalPath):!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fo{static serverTimestamp(){const e=J2();return e._methodName="FieldValue.serverTimestamp",new fo(e)}static delete(){const e=Z2();return e._methodName="FieldValue.delete",new fo(e)}static arrayUnion(...e){const t=eU(...e);return t._methodName="FieldValue.arrayUnion",new fo(t)}static arrayRemove(...e){const t=tU(...e);return t._methodName="FieldValue.arrayRemove",new fo(t)}static increment(e){const t=nU(e);return t._methodName="FieldValue.increment",new fo(t)}constructor(e){this._delegate=e}isEqual(e){return this._delegate.isEqual(e._delegate)}}/**
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
 */const y6={Firestore:xD,GeoPoint:Dp,Timestamp:gt,Blob:Zh,Transaction:ND,WriteBatch:OD,DocumentReference:Er,DocumentSnapshot:Jh,Query:Nn,QueryDocumentSnapshot:ed,QuerySnapshot:Ev,CollectionReference:Iu,FieldPath:wT,FieldValue:fo,setLogLevel:g6,CACHE_SIZE_UNLIMITED:_2};function v6(n,e){n.INTERNAL.registerComponent(new ci("firestore-compat",t=>{const r=t.getProvider("app-compat").getImmediate(),a=t.getProvider("firestore").getImmediate();return e(r,a)},"PUBLIC").setServiceProps(Object.assign({},y6)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E6(n){v6(n,(e,t)=>new xD(e,t,new p6)),n.registerVersion(d6,f6)}E6(Fu);const T6={apiKey:"AIzaSyBW4-gIXDmI9-fsNXKvxPn-deZ3v1c7ZGM",authDomain:"myminiblog-f45e2.firebaseapp.com",projectId:"myminiblog-f45e2",storageBucket:"myminiblog-f45e2.firebasestorage.app",messagingSenderId:"364724619079",appId:void 0},w6=Fu.initializeApp(T6),eu=w6.firestore();async function MD(){const n=Ji(eu,"setup","header"),e=await ZE(n);return e.exists()?e.data().headName:""}async function b6(n){const e=Ji(eu,"setup","header");await Zm(e,{headName:n})}const LD=W.createContext();function I6({children:n}){const[e,t]=W.useState([]),r=id();W.useEffect(()=>{(async()=>{const h=await DC(UE(eu,"post")),f=[];h.forEach(p=>{const y=p.data();f.push({id:p.id,...y})}),t(f)})()},[]);const a=async u=>{const h=Date.now().toString(),f=Ji(eu,"post",h),p=new Date().toISOString().slice(0,10).replace(/-/g,". "),y={id:h,...u,date:p,comments:[]};await cv(f,y),t(v=>[y,...v]),r("/")},o=async(u,h)=>{const f=Ji(eu,"post",u),p=e.find(v=>v.id===u);if(!p)return;const y=[...p.comments,h];await Zm(f,{comments:y}),t(v=>v.map(w=>w.id===u?{...w,comments:y}:w))};return ee.jsx(LD.Provider,{value:{posts:e,addPost:a,addComment:o,setPosts:t},children:n})}function Rd(){return W.useContext(LD)}var ct="-ms-",Dh="-moz-",et="-webkit-",UD="comm",Wp="rule",bT="decl",A6="@import",BD="@keyframes",S6="@layer",zD=Math.abs,IT=String.fromCharCode,Tv=Object.assign;function R6(n,e){return cn(n,0)^45?(((e<<2^cn(n,0))<<2^cn(n,1))<<2^cn(n,2))<<2^cn(n,3):0}function FD(n){return n.trim()}function ji(n,e){return(n=e.exec(n))?n[0]:n}function ke(n,e,t){return n.replace(e,t)}function Am(n,e,t){return n.indexOf(e,t)}function cn(n,e){return n.charCodeAt(e)|0}function Au(n,e,t){return n.slice(e,t)}function Jr(n){return n.length}function qD(n){return n.length}function gh(n,e){return e.push(n),n}function C6(n,e){return n.map(e).join("")}function XA(n,e){return n.filter(function(t){return!ji(t,e)})}var Yp=1,Su=1,jD=0,br=0,Ht=0,Gu="";function Xp(n,e,t,r,a,o,u,h){return{value:n,root:e,parent:t,type:r,props:a,children:o,line:Yp,column:Su,length:u,return:"",siblings:h}}function Ys(n,e){return Tv(Xp("",null,null,"",null,null,0,n.siblings),n,{length:-n.length},e)}function zl(n){for(;n.root;)n=Ys(n.root,{children:[n]});gh(n,n.siblings)}function D6(){return Ht}function P6(){return Ht=br>0?cn(Gu,--br):0,Su--,Ht===10&&(Su=1,Yp--),Ht}function Or(){return Ht=br<jD?cn(Gu,br++):0,Su++,Ht===10&&(Su=1,Yp++),Ht}function wo(){return cn(Gu,br)}function Sm(){return br}function Zp(n,e){return Au(Gu,n,e)}function wv(n){switch(n){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function x6(n){return Yp=Su=1,jD=Jr(Gu=n),br=0,[]}function N6(n){return Gu="",n}function Sy(n){return FD(Zp(br-1,bv(n===91?n+2:n===40?n+1:n)))}function O6(n){for(;(Ht=wo())&&Ht<33;)Or();return wv(n)>2||wv(Ht)>3?"":" "}function k6(n,e){for(;--e&&Or()&&!(Ht<48||Ht>102||Ht>57&&Ht<65||Ht>70&&Ht<97););return Zp(n,Sm()+(e<6&&wo()==32&&Or()==32))}function bv(n){for(;Or();)switch(Ht){case n:return br;case 34:case 39:n!==34&&n!==39&&bv(Ht);break;case 40:n===41&&bv(n);break;case 92:Or();break}return br}function V6(n,e){for(;Or()&&n+Ht!==57;)if(n+Ht===84&&wo()===47)break;return"/*"+Zp(e,br-1)+"*"+IT(n===47?n:Or())}function M6(n){for(;!wv(wo());)Or();return Zp(n,br)}function L6(n){return N6(Rm("",null,null,null,[""],n=x6(n),0,[0],n))}function Rm(n,e,t,r,a,o,u,h,f){for(var p=0,y=0,v=u,w=0,S=0,P=0,U=1,L=1,H=1,Y=0,$="",oe=a,ae=o,le=r,D=$;L;)switch(P=Y,Y=Or()){case 40:if(P!=108&&cn(D,v-1)==58){Am(D+=ke(Sy(Y),"&","&\f"),"&\f",zD(p?h[p-1]:0))!=-1&&(H=-1);break}case 34:case 39:case 91:D+=Sy(Y);break;case 9:case 10:case 13:case 32:D+=O6(P);break;case 92:D+=k6(Sm()-1,7);continue;case 47:switch(wo()){case 42:case 47:gh(U6(V6(Or(),Sm()),e,t,f),f);break;default:D+="/"}break;case 123*U:h[p++]=Jr(D)*H;case 125*U:case 59:case 0:switch(Y){case 0:case 125:L=0;case 59+y:H==-1&&(D=ke(D,/\f/g,"")),S>0&&Jr(D)-v&&gh(S>32?JA(D+";",r,t,v-1,f):JA(ke(D," ","")+";",r,t,v-2,f),f);break;case 59:D+=";";default:if(gh(le=ZA(D,e,t,p,y,a,h,$,oe=[],ae=[],v,o),o),Y===123)if(y===0)Rm(D,e,le,le,oe,o,v,h,ae);else switch(w===99&&cn(D,3)===110?100:w){case 100:case 108:case 109:case 115:Rm(n,le,le,r&&gh(ZA(n,le,le,0,0,a,h,$,a,oe=[],v,ae),ae),a,ae,v,h,r?oe:ae);break;default:Rm(D,le,le,le,[""],ae,0,h,ae)}}p=y=S=0,U=H=1,$=D="",v=u;break;case 58:v=1+Jr(D),S=P;default:if(U<1){if(Y==123)--U;else if(Y==125&&U++==0&&P6()==125)continue}switch(D+=IT(Y),Y*U){case 38:H=y>0?1:(D+="\f",-1);break;case 44:h[p++]=(Jr(D)-1)*H,H=1;break;case 64:wo()===45&&(D+=Sy(Or())),w=wo(),y=v=Jr($=D+=M6(Sm())),Y++;break;case 45:P===45&&Jr(D)==2&&(U=0)}}return o}function ZA(n,e,t,r,a,o,u,h,f,p,y,v){for(var w=a-1,S=a===0?o:[""],P=qD(S),U=0,L=0,H=0;U<r;++U)for(var Y=0,$=Au(n,w+1,w=zD(L=u[U])),oe=n;Y<P;++Y)(oe=FD(L>0?S[Y]+" "+$:ke($,/&\f/g,S[Y])))&&(f[H++]=oe);return Xp(n,e,t,a===0?Wp:h,f,p,y,v)}function U6(n,e,t,r){return Xp(n,e,t,UD,IT(D6()),Au(n,2,-2),0,r)}function JA(n,e,t,r,a){return Xp(n,e,t,bT,Au(n,0,r),Au(n,r+1,-1),r,a)}function HD(n,e,t){switch(R6(n,e)){case 5103:return et+"print-"+n+n;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return et+n+n;case 4789:return Dh+n+n;case 5349:case 4246:case 4810:case 6968:case 2756:return et+n+Dh+n+ct+n+n;case 5936:switch(cn(n,e+11)){case 114:return et+n+ct+ke(n,/[svh]\w+-[tblr]{2}/,"tb")+n;case 108:return et+n+ct+ke(n,/[svh]\w+-[tblr]{2}/,"tb-rl")+n;case 45:return et+n+ct+ke(n,/[svh]\w+-[tblr]{2}/,"lr")+n}case 6828:case 4268:case 2903:return et+n+ct+n+n;case 6165:return et+n+ct+"flex-"+n+n;case 5187:return et+n+ke(n,/(\w+).+(:[^]+)/,et+"box-$1$2"+ct+"flex-$1$2")+n;case 5443:return et+n+ct+"flex-item-"+ke(n,/flex-|-self/g,"")+(ji(n,/flex-|baseline/)?"":ct+"grid-row-"+ke(n,/flex-|-self/g,""))+n;case 4675:return et+n+ct+"flex-line-pack"+ke(n,/align-content|flex-|-self/g,"")+n;case 5548:return et+n+ct+ke(n,"shrink","negative")+n;case 5292:return et+n+ct+ke(n,"basis","preferred-size")+n;case 6060:return et+"box-"+ke(n,"-grow","")+et+n+ct+ke(n,"grow","positive")+n;case 4554:return et+ke(n,/([^-])(transform)/g,"$1"+et+"$2")+n;case 6187:return ke(ke(ke(n,/(zoom-|grab)/,et+"$1"),/(image-set)/,et+"$1"),n,"")+n;case 5495:case 3959:return ke(n,/(image-set\([^]*)/,et+"$1$`$1");case 4968:return ke(ke(n,/(.+:)(flex-)?(.*)/,et+"box-pack:$3"+ct+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+et+n+n;case 4200:if(!ji(n,/flex-|baseline/))return ct+"grid-column-align"+Au(n,e)+n;break;case 2592:case 3360:return ct+ke(n,"template-","")+n;case 4384:case 3616:return t&&t.some(function(r,a){return e=a,ji(r.props,/grid-\w+-end/)})?~Am(n+(t=t[e].value),"span",0)?n:ct+ke(n,"-start","")+n+ct+"grid-row-span:"+(~Am(t,"span",0)?ji(t,/\d+/):+ji(t,/\d+/)-+ji(n,/\d+/))+";":ct+ke(n,"-start","")+n;case 4896:case 4128:return t&&t.some(function(r){return ji(r.props,/grid-\w+-start/)})?n:ct+ke(ke(n,"-end","-span"),"span ","")+n;case 4095:case 3583:case 4068:case 2532:return ke(n,/(.+)-inline(.+)/,et+"$1$2")+n;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Jr(n)-1-e>6)switch(cn(n,e+1)){case 109:if(cn(n,e+4)!==45)break;case 102:return ke(n,/(.+:)(.+)-([^]+)/,"$1"+et+"$2-$3$1"+Dh+(cn(n,e+3)==108?"$3":"$2-$3"))+n;case 115:return~Am(n,"stretch",0)?HD(ke(n,"stretch","fill-available"),e,t)+n:n}break;case 5152:case 5920:return ke(n,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,a,o,u,h,f,p){return ct+a+":"+o+p+(u?ct+a+"-span:"+(h?f:+f-+o)+p:"")+n});case 4949:if(cn(n,e+6)===121)return ke(n,":",":"+et)+n;break;case 6444:switch(cn(n,cn(n,14)===45?18:11)){case 120:return ke(n,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+et+(cn(n,14)===45?"inline-":"")+"box$3$1"+et+"$2$3$1"+ct+"$2box$3")+n;case 100:return ke(n,":",":"+ct)+n}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ke(n,"scroll-","scroll-snap-")+n}return n}function ap(n,e){for(var t="",r=0;r<n.length;r++)t+=e(n[r],r,n,e)||"";return t}function B6(n,e,t,r){switch(n.type){case S6:if(n.children.length)break;case A6:case bT:return n.return=n.return||n.value;case UD:return"";case BD:return n.return=n.value+"{"+ap(n.children,r)+"}";case Wp:if(!Jr(n.value=n.props.join(",")))return""}return Jr(t=ap(n.children,r))?n.return=n.value+"{"+t+"}":""}function z6(n){var e=qD(n);return function(t,r,a,o){for(var u="",h=0;h<e;h++)u+=n[h](t,r,a,o)||"";return u}}function F6(n){return function(e){e.root||(e=e.return)&&n(e)}}function q6(n,e,t,r){if(n.length>-1&&!n.return)switch(n.type){case bT:n.return=HD(n.value,n.length,t);return;case BD:return ap([Ys(n,{value:ke(n.value,"@","@"+et)})],r);case Wp:if(n.length)return C6(t=n.props,function(a){switch(ji(a,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":zl(Ys(n,{props:[ke(a,/:(read-\w+)/,":"+Dh+"$1")]})),zl(Ys(n,{props:[a]})),Tv(n,{props:XA(t,r)});break;case"::placeholder":zl(Ys(n,{props:[ke(a,/:(plac\w+)/,":"+et+"input-$1")]})),zl(Ys(n,{props:[ke(a,/:(plac\w+)/,":"+Dh+"$1")]})),zl(Ys(n,{props:[ke(a,/:(plac\w+)/,ct+"input-$1")]})),zl(Ys(n,{props:[a]})),Tv(n,{props:XA(t,r)});break}return""})}}var j6={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Zn={},Ru=typeof process<"u"&&Zn!==void 0&&(Zn.REACT_APP_SC_ATTR||Zn.SC_ATTR)||"data-styled",GD="active",$D="data-styled-version",Jp="6.1.16",AT=`/*!sc*/
`,op=typeof window<"u"&&"HTMLElement"in window,H6=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Zn!==void 0&&Zn.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Zn.REACT_APP_SC_DISABLE_SPEEDY!==""?Zn.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Zn.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Zn!==void 0&&Zn.SC_DISABLE_SPEEDY!==void 0&&Zn.SC_DISABLE_SPEEDY!==""&&Zn.SC_DISABLE_SPEEDY!=="false"&&Zn.SC_DISABLE_SPEEDY),eg=Object.freeze([]),Cu=Object.freeze({});function G6(n,e,t){return t===void 0&&(t=Cu),n.theme!==t.theme&&n.theme||e||t.theme}var KD=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),$6=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,K6=/(^-|-$)/g;function eS(n){return n.replace($6,"-").replace(K6,"")}var Q6=/(a)(d)/gi,am=52,tS=function(n){return String.fromCharCode(n+(n>25?39:97))};function Iv(n){var e,t="";for(e=Math.abs(n);e>am;e=e/am|0)t=tS(e%am)+t;return(tS(e%am)+t).replace(Q6,"$1-$2")}var Ry,QD=5381,Kl=function(n,e){for(var t=e.length;t;)n=33*n^e.charCodeAt(--t);return n},WD=function(n){return Kl(QD,n)};function W6(n){return Iv(WD(n)>>>0)}function Y6(n){return n.displayName||n.name||"Component"}function Cy(n){return typeof n=="string"&&!0}var YD=typeof Symbol=="function"&&Symbol.for,XD=YD?Symbol.for("react.memo"):60115,X6=YD?Symbol.for("react.forward_ref"):60112,Z6={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},J6={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},ZD={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},e9=((Ry={})[X6]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Ry[XD]=ZD,Ry);function nS(n){return("type"in(e=n)&&e.type.$$typeof)===XD?ZD:"$$typeof"in n?e9[n.$$typeof]:Z6;var e}var t9=Object.defineProperty,n9=Object.getOwnPropertyNames,rS=Object.getOwnPropertySymbols,r9=Object.getOwnPropertyDescriptor,i9=Object.getPrototypeOf,iS=Object.prototype;function JD(n,e,t){if(typeof e!="string"){if(iS){var r=i9(e);r&&r!==iS&&JD(n,r,t)}var a=n9(e);rS&&(a=a.concat(rS(e)));for(var o=nS(n),u=nS(e),h=0;h<a.length;++h){var f=a[h];if(!(f in J6||t&&t[f]||u&&f in u||o&&f in o)){var p=r9(e,f);try{t9(n,f,p)}catch{}}}}return n}function Du(n){return typeof n=="function"}function ST(n){return typeof n=="object"&&"styledComponentId"in n}function yo(n,e){return n&&e?"".concat(n," ").concat(e):n||e||""}function sS(n,e){if(n.length===0)return"";for(var t=n[0],r=1;r<n.length;r++)t+=n[r];return t}function td(n){return n!==null&&typeof n=="object"&&n.constructor.name===Object.name&&!("props"in n&&n.$$typeof)}function Av(n,e,t){if(t===void 0&&(t=!1),!t&&!td(n)&&!Array.isArray(n))return e;if(Array.isArray(e))for(var r=0;r<e.length;r++)n[r]=Av(n[r],e[r]);else if(td(e))for(var r in e)n[r]=Av(n[r],e[r]);return n}function RT(n,e){Object.defineProperty(n,"toString",{value:e})}function Cd(n){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(n," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var s9=function(){function n(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return n.prototype.indexOfGroup=function(e){for(var t=0,r=0;r<e;r++)t+=this.groupSizes[r];return t},n.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var r=this.groupSizes,a=r.length,o=a;e>=o;)if((o<<=1)<0)throw Cd(16,"".concat(e));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var u=a;u<o;u++)this.groupSizes[u]=0}for(var h=this.indexOfGroup(e+1),f=(u=0,t.length);u<f;u++)this.tag.insertRule(h,t[u])&&(this.groupSizes[e]++,h++)},n.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],r=this.indexOfGroup(e),a=r+t;this.groupSizes[e]=0;for(var o=r;o<a;o++)this.tag.deleteRule(r)}},n.prototype.getGroup=function(e){var t="";if(e>=this.length||this.groupSizes[e]===0)return t;for(var r=this.groupSizes[e],a=this.indexOfGroup(e),o=a+r,u=a;u<o;u++)t+="".concat(this.tag.getRule(u)).concat(AT);return t},n}(),Cm=new Map,lp=new Map,Dm=1,om=function(n){if(Cm.has(n))return Cm.get(n);for(;lp.has(Dm);)Dm++;var e=Dm++;return Cm.set(n,e),lp.set(e,n),e},a9=function(n,e){Dm=e+1,Cm.set(n,e),lp.set(e,n)},o9="style[".concat(Ru,"][").concat($D,'="').concat(Jp,'"]'),l9=new RegExp("^".concat(Ru,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),u9=function(n,e,t){for(var r,a=t.split(","),o=0,u=a.length;o<u;o++)(r=a[o])&&n.registerName(e,r)},c9=function(n,e){for(var t,r=((t=e.textContent)!==null&&t!==void 0?t:"").split(AT),a=[],o=0,u=r.length;o<u;o++){var h=r[o].trim();if(h){var f=h.match(l9);if(f){var p=0|parseInt(f[1],10),y=f[2];p!==0&&(a9(y,p),u9(n,y,f[3]),n.getTag().insertRules(p,a)),a.length=0}else a.push(h)}}},aS=function(n){for(var e=document.querySelectorAll(o9),t=0,r=e.length;t<r;t++){var a=e[t];a&&a.getAttribute(Ru)!==GD&&(c9(n,a),a.parentNode&&a.parentNode.removeChild(a))}};function h9(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var eP=function(n){var e=document.head,t=n||e,r=document.createElement("style"),a=function(h){var f=Array.from(h.querySelectorAll("style[".concat(Ru,"]")));return f[f.length-1]}(t),o=a!==void 0?a.nextSibling:null;r.setAttribute(Ru,GD),r.setAttribute($D,Jp);var u=h9();return u&&r.setAttribute("nonce",u),t.insertBefore(r,o),r},d9=function(){function n(e){this.element=eP(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(t){if(t.sheet)return t.sheet;for(var r=document.styleSheets,a=0,o=r.length;a<o;a++){var u=r[a];if(u.ownerNode===t)return u}throw Cd(17)}(this.element),this.length=0}return n.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch{return!1}},n.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},n.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},n}(),f9=function(){function n(e){this.element=eP(e),this.nodes=this.element.childNodes,this.length=0}return n.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var r=document.createTextNode(t);return this.element.insertBefore(r,this.nodes[e]||null),this.length++,!0}return!1},n.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},n.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},n}(),m9=function(){function n(e){this.rules=[],this.length=0}return n.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},n.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},n.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},n}(),oS=op,p9={isServer:!op,useCSSOMInjection:!H6},tP=function(){function n(e,t,r){e===void 0&&(e=Cu),t===void 0&&(t={});var a=this;this.options=Hn(Hn({},p9),e),this.gs=t,this.names=new Map(r),this.server=!!e.isServer,!this.server&&op&&oS&&(oS=!1,aS(this)),RT(this,function(){return function(o){for(var u=o.getTag(),h=u.length,f="",p=function(v){var w=function(H){return lp.get(H)}(v);if(w===void 0)return"continue";var S=o.names.get(w),P=u.getGroup(v);if(S===void 0||!S.size||P.length===0)return"continue";var U="".concat(Ru,".g").concat(v,'[id="').concat(w,'"]'),L="";S!==void 0&&S.forEach(function(H){H.length>0&&(L+="".concat(H,","))}),f+="".concat(P).concat(U,'{content:"').concat(L,'"}').concat(AT)},y=0;y<h;y++)p(y);return f}(a)})}return n.registerId=function(e){return om(e)},n.prototype.rehydrate=function(){!this.server&&op&&aS(this)},n.prototype.reconstructWithOptions=function(e,t){return t===void 0&&(t=!0),new n(Hn(Hn({},this.options),e),this.gs,t&&this.names||void 0)},n.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},n.prototype.getTag=function(){return this.tag||(this.tag=(e=function(t){var r=t.useCSSOMInjection,a=t.target;return t.isServer?new m9(a):r?new d9(a):new f9(a)}(this.options),new s9(e)));var e},n.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},n.prototype.registerName=function(e,t){if(om(e),this.names.has(e))this.names.get(e).add(t);else{var r=new Set;r.add(t),this.names.set(e,r)}},n.prototype.insertRules=function(e,t,r){this.registerName(e,t),this.getTag().insertRules(om(e),r)},n.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},n.prototype.clearRules=function(e){this.getTag().clearGroup(om(e)),this.clearNames(e)},n.prototype.clearTag=function(){this.tag=void 0},n}(),g9=/&/g,_9=/^\s*\/\/.*$/gm;function nP(n,e){return n.map(function(t){return t.type==="rule"&&(t.value="".concat(e," ").concat(t.value),t.value=t.value.replaceAll(",",",".concat(e," ")),t.props=t.props.map(function(r){return"".concat(e," ").concat(r)})),Array.isArray(t.children)&&t.type!=="@keyframes"&&(t.children=nP(t.children,e)),t})}function y9(n){var e,t,r,a=Cu,o=a.options,u=o===void 0?Cu:o,h=a.plugins,f=h===void 0?eg:h,p=function(w,S,P){return P.startsWith(t)&&P.endsWith(t)&&P.replaceAll(t,"").length>0?".".concat(e):w},y=f.slice();y.push(function(w){w.type===Wp&&w.value.includes("&")&&(w.props[0]=w.props[0].replace(g9,t).replace(r,p))}),u.prefix&&y.push(q6),y.push(B6);var v=function(w,S,P,U){S===void 0&&(S=""),P===void 0&&(P=""),U===void 0&&(U="&"),e=U,t=S,r=new RegExp("\\".concat(t,"\\b"),"g");var L=w.replace(_9,""),H=L6(P||S?"".concat(P," ").concat(S," { ").concat(L," }"):L);u.namespace&&(H=nP(H,u.namespace));var Y=[];return ap(H,z6(y.concat(F6(function($){return Y.push($)})))),Y};return v.hash=f.length?f.reduce(function(w,S){return S.name||Cd(15),Kl(w,S.name)},QD).toString():"",v}var v9=new tP,Sv=y9(),rP=tu.createContext({shouldForwardProp:void 0,styleSheet:v9,stylis:Sv});rP.Consumer;tu.createContext(void 0);function lS(){return W.useContext(rP)}var E9=function(){function n(e,t){var r=this;this.inject=function(a,o){o===void 0&&(o=Sv);var u=r.name+o.hash;a.hasNameForId(r.id,u)||a.insertRules(r.id,u,o(r.rules,u,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,RT(this,function(){throw Cd(12,String(r.name))})}return n.prototype.getName=function(e){return e===void 0&&(e=Sv),this.name+e.hash},n}(),T9=function(n){return n>="A"&&n<="Z"};function uS(n){for(var e="",t=0;t<n.length;t++){var r=n[t];if(t===1&&r==="-"&&n[0]==="-")return n;T9(r)?e+="-"+r.toLowerCase():e+=r}return e.startsWith("ms-")?"-"+e:e}var iP=function(n){return n==null||n===!1||n===""},sP=function(n){var e,t,r=[];for(var a in n){var o=n[a];n.hasOwnProperty(a)&&!iP(o)&&(Array.isArray(o)&&o.isCss||Du(o)?r.push("".concat(uS(a),":"),o,";"):td(o)?r.push.apply(r,Jm(Jm(["".concat(a," {")],sP(o),!1),["}"],!1)):r.push("".concat(uS(a),": ").concat((e=a,(t=o)==null||typeof t=="boolean"||t===""?"":typeof t!="number"||t===0||e in j6||e.startsWith("--")?String(t).trim():"".concat(t,"px")),";")))}return r};function bo(n,e,t,r){if(iP(n))return[];if(ST(n))return[".".concat(n.styledComponentId)];if(Du(n)){if(!Du(o=n)||o.prototype&&o.prototype.isReactComponent||!e)return[n];var a=n(e);return bo(a,e,t,r)}var o;return n instanceof E9?t?(n.inject(t,r),[n.getName(r)]):[n]:td(n)?sP(n):Array.isArray(n)?Array.prototype.concat.apply(eg,n.map(function(u){return bo(u,e,t,r)})):[n.toString()]}function w9(n){for(var e=0;e<n.length;e+=1){var t=n[e];if(Du(t)&&!ST(t))return!1}return!0}var b9=WD(Jp),I9=function(){function n(e,t,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&w9(e),this.componentId=t,this.baseHash=Kl(b9,t),this.baseStyle=r,tP.registerId(t)}return n.prototype.generateAndInjectStyles=function(e,t,r){var a=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))a=yo(a,this.staticRulesId);else{var o=sS(bo(this.rules,e,t,r)),u=Iv(Kl(this.baseHash,o)>>>0);if(!t.hasNameForId(this.componentId,u)){var h=r(o,".".concat(u),void 0,this.componentId);t.insertRules(this.componentId,u,h)}a=yo(a,u),this.staticRulesId=u}else{for(var f=Kl(this.baseHash,r.hash),p="",y=0;y<this.rules.length;y++){var v=this.rules[y];if(typeof v=="string")p+=v;else if(v){var w=sS(bo(v,e,t,r));f=Kl(f,w+y),p+=w}}if(p){var S=Iv(f>>>0);t.hasNameForId(this.componentId,S)||t.insertRules(this.componentId,S,r(p,".".concat(S),void 0,this.componentId)),a=yo(a,S)}}return a},n}(),aP=tu.createContext(void 0);aP.Consumer;var Dy={};function A9(n,e,t){var r=ST(n),a=n,o=!Cy(n),u=e.attrs,h=u===void 0?eg:u,f=e.componentId,p=f===void 0?function(oe,ae){var le=typeof oe!="string"?"sc":eS(oe);Dy[le]=(Dy[le]||0)+1;var D="".concat(le,"-").concat(W6(Jp+le+Dy[le]));return ae?"".concat(ae,"-").concat(D):D}(e.displayName,e.parentComponentId):f,y=e.displayName,v=y===void 0?function(oe){return Cy(oe)?"styled.".concat(oe):"Styled(".concat(Y6(oe),")")}(n):y,w=e.displayName&&e.componentId?"".concat(eS(e.displayName),"-").concat(e.componentId):e.componentId||p,S=r&&a.attrs?a.attrs.concat(h).filter(Boolean):h,P=e.shouldForwardProp;if(r&&a.shouldForwardProp){var U=a.shouldForwardProp;if(e.shouldForwardProp){var L=e.shouldForwardProp;P=function(oe,ae){return U(oe,ae)&&L(oe,ae)}}else P=U}var H=new I9(t,w,r?a.componentStyle:void 0);function Y(oe,ae){return function(le,D,R){var A=le.attrs,x=le.componentStyle,V=le.defaultProps,z=le.foldedComponentIds,N=le.styledComponentId,Nt=le.target,It=tu.useContext(aP),he=lS(),Ie=le.shouldForwardProp||he.shouldForwardProp,we=G6(D,It,V)||Cu,Oe=function(De,Ce,ut){for(var Me,Ze=Hn(Hn({},Ce),{className:void 0,theme:ut}),Ke=0;Ke<De.length;Ke+=1){var Ut=Du(Me=De[Ke])?Me(Ze):Me;for(var Jt in Ut)Ze[Jt]=Jt==="className"?yo(Ze[Jt],Ut[Jt]):Jt==="style"?Hn(Hn({},Ze[Jt]),Ut[Jt]):Ut[Jt]}return Ce.className&&(Ze.className=yo(Ze.className,Ce.className)),Ze}(A,D,we),O=Oe.as||Nt,ie={};for(var _e in Oe)Oe[_e]===void 0||_e[0]==="$"||_e==="as"||_e==="theme"&&Oe.theme===we||(_e==="forwardedAs"?ie.as=Oe.forwardedAs:Ie&&!Ie(_e,O)||(ie[_e]=Oe[_e]));var me=function(De,Ce){var ut=lS(),Me=De.generateAndInjectStyles(Ce,ut.styleSheet,ut.stylis);return Me}(x,Oe),fe=yo(z,N);return me&&(fe+=" "+me),Oe.className&&(fe+=" "+Oe.className),ie[Cy(O)&&!KD.has(O)?"class":"className"]=fe,R&&(ie.ref=R),W.createElement(O,ie)}($,oe,ae)}Y.displayName=v;var $=tu.forwardRef(Y);return $.attrs=S,$.componentStyle=H,$.displayName=v,$.shouldForwardProp=P,$.foldedComponentIds=r?yo(a.foldedComponentIds,a.styledComponentId):"",$.styledComponentId=w,$.target=r?a.target:n,Object.defineProperty($,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(oe){this._foldedDefaultProps=r?function(ae){for(var le=[],D=1;D<arguments.length;D++)le[D-1]=arguments[D];for(var R=0,A=le;R<A.length;R++)Av(ae,A[R],!0);return ae}({},a.defaultProps,oe):oe}}),RT($,function(){return".".concat($.styledComponentId)}),o&&JD($,n,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),$}function cS(n,e){for(var t=[n[0]],r=0,a=e.length;r<a;r+=1)t.push(e[r],n[r+1]);return t}var hS=function(n){return Object.assign(n,{isCss:!0})};function S9(n){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];if(Du(n)||td(n))return hS(bo(cS(eg,Jm([n],e,!0))));var r=n;return e.length===0&&r.length===1&&typeof r[0]=="string"?bo(r):hS(bo(cS(r,e)))}function Rv(n,e,t){if(t===void 0&&(t=Cu),!e)throw Cd(1,e);var r=function(a){for(var o=[],u=1;u<arguments.length;u++)o[u-1]=arguments[u];return n(e,t,S9.apply(void 0,Jm([a],o,!1)))};return r.attrs=function(a){return Rv(n,e,Hn(Hn({},t),{attrs:Array.prototype.concat(t.attrs,a).filter(Boolean)}))},r.withConfig=function(a){return Rv(n,e,Hn(Hn({},t),a))},r}var oP=function(n){return Rv(A9,n)},ge=oP;KD.forEach(function(n){ge[n]=oP(n)});const R9=ge.header`
  width: 100%;
  padding: 1.5rem 0;
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  border-bottom: 1px solid #ddd;
`,C9=ge(Vv)`
  text-decoration: none;

  &:hover {
    cursor: pointer;
  }
`;function CT({blogTitle:n=""}){return ee.jsx(R9,{children:ee.jsx(C9,{to:"/",children:n})})}const D9=ge.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`,P9=ge.div`
  background: white;
  padding: 2rem;
  border-radius: 10px;
  width: 300px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.3);
`,x9=ge.input`
  width: 100%;
  padding: 0.6rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 6px;
`,N9=ge.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
`,dS=ge.button`
  padding: 0.5rem 1rem;
  border: none;
  background-color: ${n=>n.color==="blue"?"#2a4edc":"#999"};
  color: white;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background-color: ${n=>n.color==="blue"?"#1530a3":"#555"};
  }
`;function O9({currentTitle:n,onClose:e,onApply:t}){const[r,a]=W.useState(n);return ee.jsx(D9,{children:ee.jsxs(P9,{children:[ee.jsx("h3",{children:"블로그 이름 설정"}),ee.jsx(x9,{type:"text",value:r,onChange:o=>a(o.target.value)}),ee.jsxs(N9,{children:[ee.jsx(dS,{color:"gray",onClick:e,children:"Cancel"}),ee.jsx(dS,{color:"blue",onClick:()=>t(r),children:"Apply"})]})]})})}const k9=ge.aside`
  width: 280px;
  padding: 16px;
  border-left: 1px solid #ddd;
`,V9=ge.h4`
  margin-bottom: 16px;
`,M9=ge.div`
  margin-bottom: 16px;
  border-bottom: 1px solid #ccc;
  padding-bottom: 8px;
  cursor: pointer;
  &:hover {
    background-color: #f9f9f9;
  }
`,L9=ge.div`
  display: flex;
  align-items: center;
  font-size: 14.4px;
  margin-bottom: 3.2px;
`,U9=ge.div`
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background-color: #ccc;
  margin-right: 6px;
`,B9=ge.div`
  font-size: 12.8px;
  color: #666;
`,fS=ge.button`
  flex: 1;
  padding: 9.6px;
  border: none;
  color: white;
  background-color: ${n=>n.color==="blue"?"#2a4edc":"#999"};
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: ${n=>n.color==="blue"?"#1530a3":"#555"};
  }
`;function lP({explorePosts:n=[],blogTitle:e,setBlogTitle:t}){const r=id(),[a,o]=W.useState(!1),h=((f,p=3)=>Array.isArray(f)?[...f].sort(()=>.5-Math.random()).slice(0,p):[])(n);return ee.jsxs(k9,{children:[ee.jsx(V9,{children:"Explore Postings"}),h.map((f,p)=>{var y;return ee.jsxs(M9,{onClick:()=>r(`/post/${f.id}`),children:[ee.jsxs(L9,{children:[ee.jsx(U9,{})," ",f.writer," / ",f.title]}),ee.jsxs(B9,{children:[(y=f.content)==null?void 0:y.slice(0,40),"..."]})]},p)}),ee.jsxs("div",{style:{display:"flex",gap:"10px",marginTop:"32px"},children:[ee.jsx(fS,{color:"blue",onClick:()=>r("/write"),children:"Write"}),ee.jsx(fS,{color:"gray",onClick:()=>o(!0),children:"Settings"})]}),a&&ee.jsx(O9,{currentTitle:e,onClose:()=>o(!1),onApply:f=>{t(f),o(!1)}})]})}const z9=ge.div`
  margin: 1.5rem 0;
  position: relative;
`,F9=ge.input`
  width: 100%;
  padding: 0.6rem 2.5rem 0.6rem 0.6rem;
  border: 1px solid #ccc;
  border-radius: 8px;
`,uP=ge.img`
  position: absolute;
  width: 15px;
  height: 15px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
`,q9=ge(uP)`
  right: 30px;
`,j9=ge(uP)`
  right: 8px;
`;function H9({placeholder:n="Title, Contents...",onSearch:e}){const[t,r]=W.useState(""),a=()=>{e(t)},o=()=>{r(""),e("")},u=h=>{h.key==="Enter"&&a()};return ee.jsxs(z9,{children:[ee.jsx(F9,{placeholder:n,value:t,onChange:h=>r(h.target.value),onKeyDown:u}),t&&ee.jsx(j9,{src:"/chamkkae-miniblogassets/clear.svg",alt:"Clear",onClick:o}),ee.jsx(q9,{src:"/chamkkae-miniblogassets/clear.svg",alt:"Search",onClick:a})]})}const G9=ge.div`
  display: flex;
  margin-bottom: 1.5rem;
  border: 1px solid #eee;
  border-radius: 8px;
  padding: 1rem;
  background-color: white;
`,$9=ge.img`
  width: 150px;
  height: 100px;
  object-fit: cover;
  border-radius: 6px;
  margin-right: 16px;
  background-color: #f3f3f3;
`,K9=ge.div`
  flex: 1;
`,Q9=ge.h4`
  margin: 0;
  margin-bottom: 0.3rem;
`,W9=ge.div`
  font-size: 0.8rem;
  color: #888;
  margin-bottom: 0.5rem;
`,Y9=ge.p`
  font-size: 0.95rem;
  margin-bottom: 0.5rem;
`,X9=ge.div`
  display: flex;
  align-items: center;
  font-size: 0.85rem;
  color: #555;
`,Z9=ge.div`
  width: 14px;
  height: 14px;
  background-color: #ccc;
  border-radius: 50%;
  margin-right: 5px;
`;function J9({post:n}){const{id:e,title:t,date:r,content:a,writer:o,image:u,dataPostTitle:h,dataPostedDate:f,dataPostContent:p,dataWriterName:y,dataImage:v}=n,w=id(),S=()=>{w(`/post/${e}`)},P=u||v||"https://i.ibb.co/sp7Q84Pg/idleimage.webp";return ee.jsxs(G9,{onClick:S,style:{cursor:"pointer"},children:[ee.jsx($9,{src:P,alt:"thumbnail"}),ee.jsxs(K9,{children:[ee.jsx(Q9,{children:t||h}),ee.jsx(W9,{children:r||f}),ee.jsx(Y9,{children:(a==null?void 0:a.slice(0,60))||(p==null?void 0:p.slice(0,60))}),ee.jsxs(X9,{children:[ee.jsx(Z9,{})," by ",o||y]})]})]})}const e5=ge.div`
  display: flex;
`,t5=ge.div`
  flex: 1;
  padding: 32px;
`;function n5(){const{posts:n}=Rd(),[e,t]=W.useState([]),[r,a]=W.useState(""),[o,u]=W.useState("");W.useEffect(()=>{if(!r.trim())t(n);else{const p=r.toLowerCase(),y=n.filter(v=>{var w;return(w=v.title)==null?void 0:w.toLowerCase().includes(p)});t(y)}async function f(){const p=await MD();u(p)}f()},[n,r]);const h=f=>{a(f)};return ee.jsxs(ee.Fragment,{children:[ee.jsx(CT,{blogTitle:o}),ee.jsxs(e5,{children:[ee.jsxs(t5,{children:[ee.jsx(H9,{onSearch:h}),e.slice().reverse().map(f=>ee.jsx(J9,{post:f},f.id))]}),ee.jsx(lP,{explorePosts:n,blogTitle:o,setBlogTitle:async f=>{await b6(f),u(f)}})]})]})}const r5=ge.div`
  padding: 32px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #fff;
`,i5=ge.h3`
  margin-bottom: 1rem;
`,s5=ge.div`
  display: flex;
  gap: 16px;
  margin-bottom: 16px;
`,Py=ge.input`
  flex: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 6px;
`,a5=ge.textarea`
  width: 100%;
  height: 300px;
  padding: 16px;
  border: 1px solid #ccc;
  border-radius: 6px;
  resize: none;
  margin-bottom: 1rem;
`,o5=ge.button`
  float: right;
  background-color: #2a4edc;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 6px;
  cursor: pointer;
  margin-top: -12px;

  &:hover {
    background-color: #1530a3;
  }
`;function l5({image:n}){const{addPost:e}=Rd(),[t,r]=W.useState({title:"",writer:"",password:"",content:"",image:"https://i.ibb.co/sp7Q84Pg/idleimage.webp"}),a=u=>{const{name:h,value:f}=u.target;r({...t,[h]:f})},o=u=>{u.preventDefault();const h={...t,image:n||t.image};e(h)};return ee.jsxs(r5,{children:[ee.jsx(i5,{children:"New Post"}),ee.jsxs(s5,{children:[ee.jsx(Py,{name:"title",value:t.title,onChange:a,placeholder:"Title"}),ee.jsx(Py,{name:"writer",value:t.writer,onChange:a,placeholder:"Name"}),ee.jsx(Py,{name:"password",value:t.password,onChange:a,placeholder:"Password"})]}),ee.jsx(a5,{name:"content",value:t.content,onChange:a,placeholder:"Something Plz..."}),ee.jsx(o5,{onClick:o,children:"Upload"})]})}const u5=ge.div`
  border: 1px solid #ccc;
  border-radius: 6px;
  padding: 16px;
  background-color: #f2f2f2;
  width: 100%;
`,c5=ge.h4`
  font-size: 16px;
  margin-bottom: 8px;
`,h5=ge.img`
  width: 100%;
  max-height: 120px;
  object-fit: cover;
  border-radius: 6px;
  margin-top: 8px;
`,d5=ge.p`
  color: red;
  font-size: 13px;
  margin-top: 6px;
`;function f5({onImageEncoded:n}){const[e,t]=W.useState(null),[r,a]=W.useState(""),o=u=>{const h=u.target.files[0];if(!h)return;if(h.size>512*1024){a("이미지 용량은 512KB 이하만 가능합니다.");return}const f=new FileReader;f.onloadend=()=>{const p=f.result;t(p),a(""),n(p)},f.readAsDataURL(h)};return ee.jsxs(u5,{children:[ee.jsx(c5,{children:"Image Upload"}),ee.jsx("input",{type:"file",accept:"image/*",onChange:o}),r&&ee.jsx(d5,{children:r}),e&&ee.jsx(h5,{src:e,alt:"미리보기"})]})}const m5=ge.div`
  display: flex;
`,p5=ge.div`
  flex: 1;
  padding: 32px;
`,g5=ge.div`
  width: 280px;
  padding: 32px 16px;
  border-left: 1px solid #ddd;
`;function _5(){const[n,e]=W.useState(null),[t,r]=W.useState("Blog.MyBlog");return W.useEffect(()=>{MD().then(r)},[]),ee.jsxs(ee.Fragment,{children:[ee.jsx(CT,{blogTitle:t}),ee.jsxs(m5,{children:[ee.jsx(p5,{children:ee.jsx(l5,{image:n})}),ee.jsx(g5,{children:ee.jsx(f5,{onImageEncoded:e})})]})]})}const y5=ge.div`
  border: 1px solid #ddd;
  border-radius: 6px;
  padding: 1rem;
  margin-bottom: 1rem;
`,v5=ge.div`
  display: flex;
  align-items: center;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
`,E5=ge.div`
  cursor: pointer;
  font-size: 1.2rem;
  color: ${n=>n.$active?"#f5a623":"#ccc"};
`,T5=ge.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: #ccc;
  margin-right: 0.5rem;
`,w5=ge.div`
  display: flex;
  gap: 4px;
  margin: 0.5rem 0;
`,b5=ge.p`
  font-size: 0.9rem;
`;function I5(n){const r=(Date.now()-n)/1e3,a=r/60,o=a/60,u=o/24,h=u/7;return r<60?"just now":a<60?`${Math.floor(a)} minutes ago`:o<24?`${Math.floor(o)} hours ago`:u<7?`${Math.floor(u)} days ago`:`${Math.floor(h)} weeks ago`}function A5({comment:n={}}){const{writer:e="",content:t="",rating:r=3,date:a=Date.now()}=n,o=I5(a);return ee.jsxs(y5,{children:[ee.jsxs(v5,{children:[ee.jsx(T5,{}),e," · ",o]}),ee.jsx(w5,{children:[1,2,3,4,5].map(u=>ee.jsx(E5,{$active:u<=r,children:"★"},u))}),ee.jsx(b5,{children:t})]})}const S5=ge.div`
  border: 1px solid #ddd;
  border-radius: 6px;
  padding: 16px;
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`,R5=ge.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,cP=ge.input`
  flex: 1;
  border: 1px solid #ccc;
  padding: 8px;
  font-size: 14px;
  border-radius: 6px;
  margin-right: 8px;

  &::placeholder {
    color: #aaa;
  }
`,C5=ge(cP)`
  max-width: 150px;
  background-color: #f9f9f9;
`,D5=ge.div`
  display: flex;
  gap: 5px;
`,P5=ge.div`
  cursor: pointer;
  font-size: 20px;
  color: ${n=>n.$active?"#f5a623":"#ccc"};
`,x5=ge.button`
  background-color: #2a4edc;
  color: white;
  padding: 0.4rem 1rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
`;function N5({postId:n}){const{addComment:e}=Rd(),[t,r]=W.useState(""),[a,o]=W.useState(3),[u,h]=W.useState(""),f=()=>{if(!t)return alert("내용을 입력해주세요.");const p={id:Date.now(),writer:u,content:t,rating:a,date:Date.now()};e(n,p),r(""),o(3)};return ee.jsx(S5,{children:ee.jsxs(R5,{children:[ee.jsx(C5,{placeholder:"닉네임",value:u,onChange:p=>h(p.target.value)}),ee.jsx(cP,{placeholder:"댓글을 남겨주세요.",value:t,onChange:p=>r(p.target.value)}),ee.jsx(D5,{children:[1,2,3,4,5].map(p=>ee.jsx(P5,{$active:p<=a,onClick:()=>o(p),children:"★"},p))}),ee.jsx(x5,{onClick:f,children:"Send"})]})})}const O5=ge.button`
  background-color: ${({color:n})=>n||"#2a4edc"};
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: ${({color:n})=>n==="red"?"#a00":"#1530a3"};
  }
`;function Cv({children:n,onClick:e,color:t="#2a4edc"}){return ee.jsx(O5,{color:t,onClick:e,children:n})}const k5=ge.div`
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex; align-items: center; justify-content: center;
  z-index: 999;
`,V5=ge.div`
  background-color: white;
  padding: 32px;
  border-radius: 12px;
  width: 300px;
  text-align: center;
`,M5=ge.input`
  width: 100%;
  padding: 8px;
  margin: 16px 0;
  border: 1px solid #ccc;
  border-radius: 6px;
`;function L5({postId:n,onClose:e}){const[t,r]=W.useState(""),a=id(),{setPosts:o}=Rd(),u=async()=>{const h=Ji(eu,"post",n),f=await ZE(h);if(!f.exists()){alert("게시글을 찾을 수 없습니다.");return}const p=f.data().password;t===p?(await PC(h),o(y=>y.filter(v=>v.id!==n)),e(),a("/"),alert("게시글이 삭제되었습니다."),e(),a("/")):alert("비밀번호가 일치하지 않습니다.")};return ee.jsx(k5,{children:ee.jsxs(V5,{children:[ee.jsx("h3",{children:"비밀번호 확인"}),ee.jsx(M5,{type:"password",placeholder:"비밀번호 입력",value:t,onChange:h=>r(h.target.value)}),ee.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:"10px"},children:[ee.jsx(Cv,{onClick:u,color:"red",children:"삭제"}),ee.jsx(Cv,{onClick:e,color:"gray",children:"취소"})]})]})})}const U5=ge.div`
  display: flex;
`,B5=ge.div`
  flex: 1;
  padding: 2rem;
`,z5=ge.div`
  border: 1px solid #ddd;
  border-radius: 6px;
  padding: 1rem;
  margin-bottom: 1rem;
  background-color: #fff;
`,F5=ge.div`
  display: flex;
  align-items: center;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
  color: #333;
`,q5=ge.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: #ccc;
  margin-right: 0.5rem;
`;ge.div`
  display: flex;
  gap: 4px;
  margin: 0.5rem 0;
`;ge.div`
  width: 14px;
  height: 14px;
  background-color: #222;
  opacity: ${n=>n.$active?1:.3};
`;const j5=ge.p`
  font-size: 0.9rem;
  color: #444;
`;function H5(){const{id:n}=TN(),{posts:e,setPosts:t}=Rd(),r=e.find(u=>String(u.id)===n),[a,o]=W.useState(!1);return r?ee.jsxs(ee.Fragment,{children:[ee.jsx(CT,{blogTitle:`${r.writer}의 글`}),ee.jsxs(U5,{children:[ee.jsxs(B5,{children:[ee.jsxs(z5,{children:[ee.jsx("h2",{children:r.title||r.dataPostTitle}),ee.jsxs(F5,{children:[ee.jsx(q5,{}),r.writer||r.dataWriterName," | ",r.date||r.dataPostedDate]}),ee.jsx(j5,{children:r.content||r.dataPostContent}),ee.jsx("img",{src:r.image,style:{maxHeight:"40%",margin:"16px 0",borderRadius:"8px"}})]}),ee.jsx("h4",{children:"Reply"}),r.comments.map(u=>ee.jsx(A5,{comment:u},u.id)),ee.jsx(N5,{postId:r.id}),ee.jsx("div",{style:{textAlign:"right",marginTop:"32px"},children:ee.jsx(Cv,{color:"red",onClick:()=>o(!0),children:"Delete"})}),a&&ee.jsx(L5,{postId:r.id,onClose:()=>o(!1)})]}),ee.jsx(lP,{explorePosts:e})]})]}):ee.jsx("div",{children:"Post not found"})}const G5=document.getElementById("root"),$5=Gx.createRoot(G5);$5.render(ee.jsx(tu.StrictMode,{children:ee.jsx(sO,{basename:"/chamkkae-miniblog",children:ee.jsx(I6,{children:ee.jsxs(MN,{children:[ee.jsx(lm,{path:"/",element:ee.jsx(n5,{})}),ee.jsx(lm,{path:"/write",element:ee.jsx(_5,{})}),ee.jsx(lm,{path:"/post/:id",element:ee.jsx(H5,{})})]})})})}));
