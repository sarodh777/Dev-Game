(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function X_(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Lm={exports:{}},Hl={},Dm={exports:{}},qe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ha=Symbol.for("react.element"),Y_=Symbol.for("react.portal"),q_=Symbol.for("react.fragment"),$_=Symbol.for("react.strict_mode"),K_=Symbol.for("react.profiler"),Z_=Symbol.for("react.provider"),j_=Symbol.for("react.context"),Q_=Symbol.for("react.forward_ref"),J_=Symbol.for("react.suspense"),ev=Symbol.for("react.memo"),tv=Symbol.for("react.lazy"),xh=Symbol.iterator;function nv(t){return t===null||typeof t!="object"?null:(t=xh&&t[xh]||t["@@iterator"],typeof t=="function"?t:null)}var Nm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Im=Object.assign,Um={};function Ds(t,e,n){this.props=t,this.context=e,this.refs=Um,this.updater=n||Nm}Ds.prototype.isReactComponent={};Ds.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ds.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Fm(){}Fm.prototype=Ds.prototype;function Yf(t,e,n){this.props=t,this.context=e,this.refs=Um,this.updater=n||Nm}var qf=Yf.prototype=new Fm;qf.constructor=Yf;Im(qf,Ds.prototype);qf.isPureReactComponent=!0;var Sh=Array.isArray,Om=Object.prototype.hasOwnProperty,$f={current:null},Bm={key:!0,ref:!0,__self:!0,__source:!0};function km(t,e,n){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)Om.call(e,i)&&!Bm.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){for(var l=Array(o),u=0;u<o;u++)l[u]=arguments[u+2];r.children=l}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:Ha,type:t,key:s,ref:a,props:r,_owner:$f.current}}function iv(t,e){return{$$typeof:Ha,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Kf(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ha}function rv(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var yh=/\/+/g;function lu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?rv(""+t.key):e.toString(36)}function Go(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case Ha:case Y_:a=!0}}if(a)return a=t,r=r(a),t=i===""?"."+lu(a,0):i,Sh(r)?(n="",t!=null&&(n=t.replace(yh,"$&/")+"/"),Go(r,e,n,"",function(u){return u})):r!=null&&(Kf(r)&&(r=iv(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(yh,"$&/")+"/")+t)),e.push(r)),1;if(a=0,i=i===""?".":i+":",Sh(t))for(var o=0;o<t.length;o++){s=t[o];var l=i+lu(s,o);a+=Go(s,e,n,l,r)}else if(l=nv(t),typeof l=="function")for(t=l.call(t),o=0;!(s=t.next()).done;)s=s.value,l=i+lu(s,o++),a+=Go(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function ja(t,e,n){if(t==null)return t;var i=[],r=0;return Go(t,i,"","",function(s){return e.call(n,s,r++)}),i}function sv(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var an={current:null},Vo={transition:null},av={ReactCurrentDispatcher:an,ReactCurrentBatchConfig:Vo,ReactCurrentOwner:$f};function zm(){throw Error("act(...) is not supported in production builds of React.")}qe.Children={map:ja,forEach:function(t,e,n){ja(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ja(t,function(){e++}),e},toArray:function(t){return ja(t,function(e){return e})||[]},only:function(t){if(!Kf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};qe.Component=Ds;qe.Fragment=q_;qe.Profiler=K_;qe.PureComponent=Yf;qe.StrictMode=$_;qe.Suspense=J_;qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=av;qe.act=zm;qe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Im({},t.props),r=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=$f.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(l in e)Om.call(e,l)&&!Bm.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){o=Array(l);for(var u=0;u<l;u++)o[u]=arguments[u+2];i.children=o}return{$$typeof:Ha,type:t.type,key:r,ref:s,props:i,_owner:a}};qe.createContext=function(t){return t={$$typeof:j_,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Z_,_context:t},t.Consumer=t};qe.createElement=km;qe.createFactory=function(t){var e=km.bind(null,t);return e.type=t,e};qe.createRef=function(){return{current:null}};qe.forwardRef=function(t){return{$$typeof:Q_,render:t}};qe.isValidElement=Kf;qe.lazy=function(t){return{$$typeof:tv,_payload:{_status:-1,_result:t},_init:sv}};qe.memo=function(t,e){return{$$typeof:ev,type:t,compare:e===void 0?null:e}};qe.startTransition=function(t){var e=Vo.transition;Vo.transition={};try{t()}finally{Vo.transition=e}};qe.unstable_act=zm;qe.useCallback=function(t,e){return an.current.useCallback(t,e)};qe.useContext=function(t){return an.current.useContext(t)};qe.useDebugValue=function(){};qe.useDeferredValue=function(t){return an.current.useDeferredValue(t)};qe.useEffect=function(t,e){return an.current.useEffect(t,e)};qe.useId=function(){return an.current.useId()};qe.useImperativeHandle=function(t,e,n){return an.current.useImperativeHandle(t,e,n)};qe.useInsertionEffect=function(t,e){return an.current.useInsertionEffect(t,e)};qe.useLayoutEffect=function(t,e){return an.current.useLayoutEffect(t,e)};qe.useMemo=function(t,e){return an.current.useMemo(t,e)};qe.useReducer=function(t,e,n){return an.current.useReducer(t,e,n)};qe.useRef=function(t){return an.current.useRef(t)};qe.useState=function(t){return an.current.useState(t)};qe.useSyncExternalStore=function(t,e,n){return an.current.useSyncExternalStore(t,e,n)};qe.useTransition=function(){return an.current.useTransition()};qe.version="18.3.1";Dm.exports=qe;var Xe=Dm.exports;const ov=X_(Xe);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lv=Xe,uv=Symbol.for("react.element"),cv=Symbol.for("react.fragment"),fv=Object.prototype.hasOwnProperty,dv=lv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,hv={key:!0,ref:!0,__self:!0,__source:!0};function Hm(t,e,n){var i,r={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)fv.call(e,i)&&!hv.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:uv,type:t,key:s,ref:a,props:r,_owner:dv.current}}Hl.Fragment=cv;Hl.jsx=Hm;Hl.jsxs=Hm;Lm.exports=Hl;var J=Lm.exports,uc={},Gm={exports:{}},Tn={},Vm={exports:{}},Wm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(k,U){var V=k.length;k.push(U);e:for(;0<V;){var Z=V-1>>>1,ae=k[Z];if(0<r(ae,U))k[Z]=U,k[V]=ae,V=Z;else break e}}function n(k){return k.length===0?null:k[0]}function i(k){if(k.length===0)return null;var U=k[0],V=k.pop();if(V!==U){k[0]=V;e:for(var Z=0,ae=k.length,Le=ae>>>1;Z<Le;){var $=2*(Z+1)-1,de=k[$],Se=$+1,be=k[Se];if(0>r(de,V))Se<ae&&0>r(be,de)?(k[Z]=be,k[Se]=V,Z=Se):(k[Z]=de,k[$]=V,Z=$);else if(Se<ae&&0>r(be,V))k[Z]=be,k[Se]=V,Z=Se;else break e}}return U}function r(k,U){var V=k.sortIndex-U.sortIndex;return V!==0?V:k.id-U.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();t.unstable_now=function(){return a.now()-o}}var l=[],u=[],h=1,m=null,f=3,p=!1,v=!1,M=!1,_=typeof setTimeout=="function"?setTimeout:null,c=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(k){for(var U=n(u);U!==null;){if(U.callback===null)i(u);else if(U.startTime<=k)i(u),U.sortIndex=U.expirationTime,e(l,U);else break;U=n(u)}}function S(k){if(M=!1,x(k),!v)if(n(l)!==null)v=!0,ee(A);else{var U=n(u);U!==null&&G(S,U.startTime-k)}}function A(k,U){v=!1,M&&(M=!1,c(T),T=-1),p=!0;var V=f;try{for(x(U),m=n(l);m!==null&&(!(m.expirationTime>U)||k&&!N());){var Z=m.callback;if(typeof Z=="function"){m.callback=null,f=m.priorityLevel;var ae=Z(m.expirationTime<=U);U=t.unstable_now(),typeof ae=="function"?m.callback=ae:m===n(l)&&i(l),x(U)}else i(l);m=n(l)}if(m!==null)var Le=!0;else{var $=n(u);$!==null&&G(S,$.startTime-U),Le=!1}return Le}finally{m=null,f=V,p=!1}}var w=!1,g=null,T=-1,D=5,C=-1;function N(){return!(t.unstable_now()-C<D)}function z(){if(g!==null){var k=t.unstable_now();C=k;var U=!0;try{U=g(!0,k)}finally{U?q():(w=!1,g=null)}}else w=!1}var q;if(typeof d=="function")q=function(){d(z)};else if(typeof MessageChannel<"u"){var L=new MessageChannel,X=L.port2;L.port1.onmessage=z,q=function(){X.postMessage(null)}}else q=function(){_(z,0)};function ee(k){g=k,w||(w=!0,q())}function G(k,U){T=_(function(){k(t.unstable_now())},U)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(k){k.callback=null},t.unstable_continueExecution=function(){v||p||(v=!0,ee(A))},t.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<k?Math.floor(1e3/k):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(k){switch(f){case 1:case 2:case 3:var U=3;break;default:U=f}var V=f;f=U;try{return k()}finally{f=V}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(k,U){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var V=f;f=k;try{return U()}finally{f=V}},t.unstable_scheduleCallback=function(k,U,V){var Z=t.unstable_now();switch(typeof V=="object"&&V!==null?(V=V.delay,V=typeof V=="number"&&0<V?Z+V:Z):V=Z,k){case 1:var ae=-1;break;case 2:ae=250;break;case 5:ae=1073741823;break;case 4:ae=1e4;break;default:ae=5e3}return ae=V+ae,k={id:h++,callback:U,priorityLevel:k,startTime:V,expirationTime:ae,sortIndex:-1},V>Z?(k.sortIndex=V,e(u,k),n(l)===null&&k===n(u)&&(M?(c(T),T=-1):M=!0,G(S,V-Z))):(k.sortIndex=ae,e(l,k),v||p||(v=!0,ee(A))),k},t.unstable_shouldYield=N,t.unstable_wrapCallback=function(k){var U=f;return function(){var V=f;f=U;try{return k.apply(this,arguments)}finally{f=V}}}})(Wm);Vm.exports=Wm;var pv=Vm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mv=Xe,Mn=pv;function ie(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Xm=new Set,va={};function Or(t,e){ys(t,e),ys(t+"Capture",e)}function ys(t,e){for(va[t]=e,t=0;t<e.length;t++)Xm.add(e[t])}var Pi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),cc=Object.prototype.hasOwnProperty,gv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Mh={},Eh={};function _v(t){return cc.call(Eh,t)?!0:cc.call(Mh,t)?!1:gv.test(t)?Eh[t]=!0:(Mh[t]=!0,!1)}function vv(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function xv(t,e,n,i){if(e===null||typeof e>"u"||vv(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function on(t,e,n,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var Xt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Xt[t]=new on(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Xt[e]=new on(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Xt[t]=new on(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Xt[t]=new on(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Xt[t]=new on(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Xt[t]=new on(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Xt[t]=new on(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Xt[t]=new on(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Xt[t]=new on(t,5,!1,t.toLowerCase(),null,!1,!1)});var Zf=/[\-:]([a-z])/g;function jf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Zf,jf);Xt[e]=new on(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Zf,jf);Xt[e]=new on(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Zf,jf);Xt[e]=new on(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Xt[t]=new on(t,1,!1,t.toLowerCase(),null,!1,!1)});Xt.xlinkHref=new on("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Xt[t]=new on(t,1,!1,t.toLowerCase(),null,!0,!0)});function Qf(t,e,n,i){var r=Xt.hasOwnProperty(e)?Xt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(xv(e,n,r,i)&&(n=null),i||r===null?_v(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Ii=mv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Qa=Symbol.for("react.element"),ts=Symbol.for("react.portal"),ns=Symbol.for("react.fragment"),Jf=Symbol.for("react.strict_mode"),fc=Symbol.for("react.profiler"),Ym=Symbol.for("react.provider"),qm=Symbol.for("react.context"),ed=Symbol.for("react.forward_ref"),dc=Symbol.for("react.suspense"),hc=Symbol.for("react.suspense_list"),td=Symbol.for("react.memo"),Vi=Symbol.for("react.lazy"),$m=Symbol.for("react.offscreen"),Th=Symbol.iterator;function zs(t){return t===null||typeof t!="object"?null:(t=Th&&t[Th]||t["@@iterator"],typeof t=="function"?t:null)}var yt=Object.assign,uu;function ea(t){if(uu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);uu=e&&e[1]||""}return`
`+uu+t}var cu=!1;function fu(t,e){if(!t||cu)return"";cu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var l=`
`+r[a].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=a&&0<=o);break}}}finally{cu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ea(t):""}function Sv(t){switch(t.tag){case 5:return ea(t.type);case 16:return ea("Lazy");case 13:return ea("Suspense");case 19:return ea("SuspenseList");case 0:case 2:case 15:return t=fu(t.type,!1),t;case 11:return t=fu(t.type.render,!1),t;case 1:return t=fu(t.type,!0),t;default:return""}}function pc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ns:return"Fragment";case ts:return"Portal";case fc:return"Profiler";case Jf:return"StrictMode";case dc:return"Suspense";case hc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case qm:return(t.displayName||"Context")+".Consumer";case Ym:return(t._context.displayName||"Context")+".Provider";case ed:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case td:return e=t.displayName||null,e!==null?e:pc(t.type)||"Memo";case Vi:e=t._payload,t=t._init;try{return pc(t(e))}catch{}}return null}function yv(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return pc(e);case 8:return e===Jf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function or(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Km(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Mv(t){var e=Km(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ja(t){t._valueTracker||(t._valueTracker=Mv(t))}function Zm(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Km(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function ol(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function mc(t,e){var n=e.checked;return yt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function wh(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=or(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function jm(t,e){e=e.checked,e!=null&&Qf(t,"checked",e,!1)}function gc(t,e){jm(t,e);var n=or(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?_c(t,e.type,n):e.hasOwnProperty("defaultValue")&&_c(t,e.type,or(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Ah(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function _c(t,e,n){(e!=="number"||ol(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ta=Array.isArray;function hs(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+or(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function vc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ie(91));return yt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Rh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ie(92));if(ta(n)){if(1<n.length)throw Error(ie(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:or(n)}}function Qm(t,e){var n=or(e.value),i=or(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Ch(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Jm(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function xc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Jm(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var eo,eg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(eo=eo||document.createElement("div"),eo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=eo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function xa(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var aa={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ev=["Webkit","ms","Moz","O"];Object.keys(aa).forEach(function(t){Ev.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),aa[e]=aa[t]})});function tg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||aa.hasOwnProperty(t)&&aa[t]?(""+e).trim():e+"px"}function ng(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=tg(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var Tv=yt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Sc(t,e){if(e){if(Tv[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ie(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ie(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ie(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ie(62))}}function yc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Mc=null;function nd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ec=null,ps=null,ms=null;function bh(t){if(t=Wa(t)){if(typeof Ec!="function")throw Error(ie(280));var e=t.stateNode;e&&(e=Yl(e),Ec(t.stateNode,t.type,e))}}function ig(t){ps?ms?ms.push(t):ms=[t]:ps=t}function rg(){if(ps){var t=ps,e=ms;if(ms=ps=null,bh(t),e)for(t=0;t<e.length;t++)bh(e[t])}}function sg(t,e){return t(e)}function ag(){}var du=!1;function og(t,e,n){if(du)return t(e,n);du=!0;try{return sg(t,e,n)}finally{du=!1,(ps!==null||ms!==null)&&(ag(),rg())}}function Sa(t,e){var n=t.stateNode;if(n===null)return null;var i=Yl(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ie(231,e,typeof n));return n}var Tc=!1;if(Pi)try{var Hs={};Object.defineProperty(Hs,"passive",{get:function(){Tc=!0}}),window.addEventListener("test",Hs,Hs),window.removeEventListener("test",Hs,Hs)}catch{Tc=!1}function wv(t,e,n,i,r,s,a,o,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(h){this.onError(h)}}var oa=!1,ll=null,ul=!1,wc=null,Av={onError:function(t){oa=!0,ll=t}};function Rv(t,e,n,i,r,s,a,o,l){oa=!1,ll=null,wv.apply(Av,arguments)}function Cv(t,e,n,i,r,s,a,o,l){if(Rv.apply(this,arguments),oa){if(oa){var u=ll;oa=!1,ll=null}else throw Error(ie(198));ul||(ul=!0,wc=u)}}function Br(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function lg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Ph(t){if(Br(t)!==t)throw Error(ie(188))}function bv(t){var e=t.alternate;if(!e){if(e=Br(t),e===null)throw Error(ie(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Ph(r),t;if(s===i)return Ph(r),e;s=s.sibling}throw Error(ie(188))}if(n.return!==i.return)n=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===n){a=!0,n=r,i=s;break}if(o===i){a=!0,i=r,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,i=r;break}if(o===i){a=!0,i=s,n=r;break}o=o.sibling}if(!a)throw Error(ie(189))}}if(n.alternate!==i)throw Error(ie(190))}if(n.tag!==3)throw Error(ie(188));return n.stateNode.current===n?t:e}function ug(t){return t=bv(t),t!==null?cg(t):null}function cg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=cg(t);if(e!==null)return e;t=t.sibling}return null}var fg=Mn.unstable_scheduleCallback,Lh=Mn.unstable_cancelCallback,Pv=Mn.unstable_shouldYield,Lv=Mn.unstable_requestPaint,Et=Mn.unstable_now,Dv=Mn.unstable_getCurrentPriorityLevel,id=Mn.unstable_ImmediatePriority,dg=Mn.unstable_UserBlockingPriority,cl=Mn.unstable_NormalPriority,Nv=Mn.unstable_LowPriority,hg=Mn.unstable_IdlePriority,Gl=null,oi=null;function Iv(t){if(oi&&typeof oi.onCommitFiberRoot=="function")try{oi.onCommitFiberRoot(Gl,t,void 0,(t.current.flags&128)===128)}catch{}}var Zn=Math.clz32?Math.clz32:Ov,Uv=Math.log,Fv=Math.LN2;function Ov(t){return t>>>=0,t===0?32:31-(Uv(t)/Fv|0)|0}var to=64,no=4194304;function na(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function fl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var o=a&~r;o!==0?i=na(o):(s&=a,s!==0&&(i=na(s)))}else a=n&~r,a!==0?i=na(a):s!==0&&(i=na(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Zn(e),r=1<<n,i|=t[n],e&=~r;return i}function Bv(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function kv(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-Zn(s),o=1<<a,l=r[a];l===-1?(!(o&n)||o&i)&&(r[a]=Bv(o,e)):l<=e&&(t.expiredLanes|=o),s&=~o}}function Ac(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function pg(){var t=to;return to<<=1,!(to&4194240)&&(to=64),t}function hu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ga(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Zn(e),t[e]=n}function zv(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Zn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function rd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Zn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var st=0;function mg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var gg,sd,_g,vg,xg,Rc=!1,io=[],Ji=null,er=null,tr=null,ya=new Map,Ma=new Map,Yi=[],Hv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Dh(t,e){switch(t){case"focusin":case"focusout":Ji=null;break;case"dragenter":case"dragleave":er=null;break;case"mouseover":case"mouseout":tr=null;break;case"pointerover":case"pointerout":ya.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ma.delete(e.pointerId)}}function Gs(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Wa(e),e!==null&&sd(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function Gv(t,e,n,i,r){switch(e){case"focusin":return Ji=Gs(Ji,t,e,n,i,r),!0;case"dragenter":return er=Gs(er,t,e,n,i,r),!0;case"mouseover":return tr=Gs(tr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return ya.set(s,Gs(ya.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Ma.set(s,Gs(Ma.get(s)||null,t,e,n,i,r)),!0}return!1}function Sg(t){var e=Tr(t.target);if(e!==null){var n=Br(e);if(n!==null){if(e=n.tag,e===13){if(e=lg(n),e!==null){t.blockedOn=e,xg(t.priority,function(){_g(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Wo(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Cc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Mc=i,n.target.dispatchEvent(i),Mc=null}else return e=Wa(n),e!==null&&sd(e),t.blockedOn=n,!1;e.shift()}return!0}function Nh(t,e,n){Wo(t)&&n.delete(e)}function Vv(){Rc=!1,Ji!==null&&Wo(Ji)&&(Ji=null),er!==null&&Wo(er)&&(er=null),tr!==null&&Wo(tr)&&(tr=null),ya.forEach(Nh),Ma.forEach(Nh)}function Vs(t,e){t.blockedOn===e&&(t.blockedOn=null,Rc||(Rc=!0,Mn.unstable_scheduleCallback(Mn.unstable_NormalPriority,Vv)))}function Ea(t){function e(r){return Vs(r,t)}if(0<io.length){Vs(io[0],t);for(var n=1;n<io.length;n++){var i=io[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Ji!==null&&Vs(Ji,t),er!==null&&Vs(er,t),tr!==null&&Vs(tr,t),ya.forEach(e),Ma.forEach(e),n=0;n<Yi.length;n++)i=Yi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Yi.length&&(n=Yi[0],n.blockedOn===null);)Sg(n),n.blockedOn===null&&Yi.shift()}var gs=Ii.ReactCurrentBatchConfig,dl=!0;function Wv(t,e,n,i){var r=st,s=gs.transition;gs.transition=null;try{st=1,ad(t,e,n,i)}finally{st=r,gs.transition=s}}function Xv(t,e,n,i){var r=st,s=gs.transition;gs.transition=null;try{st=4,ad(t,e,n,i)}finally{st=r,gs.transition=s}}function ad(t,e,n,i){if(dl){var r=Cc(t,e,n,i);if(r===null)Eu(t,e,i,hl,n),Dh(t,i);else if(Gv(r,t,e,n,i))i.stopPropagation();else if(Dh(t,i),e&4&&-1<Hv.indexOf(t)){for(;r!==null;){var s=Wa(r);if(s!==null&&gg(s),s=Cc(t,e,n,i),s===null&&Eu(t,e,i,hl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Eu(t,e,i,null,n)}}var hl=null;function Cc(t,e,n,i){if(hl=null,t=nd(i),t=Tr(t),t!==null)if(e=Br(t),e===null)t=null;else if(n=e.tag,n===13){if(t=lg(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return hl=t,null}function yg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Dv()){case id:return 1;case dg:return 4;case cl:case Nv:return 16;case hg:return 536870912;default:return 16}default:return 16}}var Ki=null,od=null,Xo=null;function Mg(){if(Xo)return Xo;var t,e=od,n=e.length,i,r="value"in Ki?Ki.value:Ki.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[s-i];i++);return Xo=r.slice(t,1<i?1-i:void 0)}function Yo(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ro(){return!0}function Ih(){return!1}function wn(t){function e(n,i,r,s,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ro:Ih,this.isPropagationStopped=Ih,this}return yt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ro)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ro)},persist:function(){},isPersistent:ro}),e}var Ns={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ld=wn(Ns),Va=yt({},Ns,{view:0,detail:0}),Yv=wn(Va),pu,mu,Ws,Vl=yt({},Va,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ud,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ws&&(Ws&&t.type==="mousemove"?(pu=t.screenX-Ws.screenX,mu=t.screenY-Ws.screenY):mu=pu=0,Ws=t),pu)},movementY:function(t){return"movementY"in t?t.movementY:mu}}),Uh=wn(Vl),qv=yt({},Vl,{dataTransfer:0}),$v=wn(qv),Kv=yt({},Va,{relatedTarget:0}),gu=wn(Kv),Zv=yt({},Ns,{animationName:0,elapsedTime:0,pseudoElement:0}),jv=wn(Zv),Qv=yt({},Ns,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Jv=wn(Qv),ex=yt({},Ns,{data:0}),Fh=wn(ex),tx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},nx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ix={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function rx(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=ix[t])?!!e[t]:!1}function ud(){return rx}var sx=yt({},Va,{key:function(t){if(t.key){var e=tx[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Yo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?nx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ud,charCode:function(t){return t.type==="keypress"?Yo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Yo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),ax=wn(sx),ox=yt({},Vl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Oh=wn(ox),lx=yt({},Va,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ud}),ux=wn(lx),cx=yt({},Ns,{propertyName:0,elapsedTime:0,pseudoElement:0}),fx=wn(cx),dx=yt({},Vl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),hx=wn(dx),px=[9,13,27,32],cd=Pi&&"CompositionEvent"in window,la=null;Pi&&"documentMode"in document&&(la=document.documentMode);var mx=Pi&&"TextEvent"in window&&!la,Eg=Pi&&(!cd||la&&8<la&&11>=la),Bh=" ",kh=!1;function Tg(t,e){switch(t){case"keyup":return px.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function wg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var is=!1;function gx(t,e){switch(t){case"compositionend":return wg(e);case"keypress":return e.which!==32?null:(kh=!0,Bh);case"textInput":return t=e.data,t===Bh&&kh?null:t;default:return null}}function _x(t,e){if(is)return t==="compositionend"||!cd&&Tg(t,e)?(t=Mg(),Xo=od=Ki=null,is=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Eg&&e.locale!=="ko"?null:e.data;default:return null}}var vx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function zh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!vx[t.type]:e==="textarea"}function Ag(t,e,n,i){ig(i),e=pl(e,"onChange"),0<e.length&&(n=new ld("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var ua=null,Ta=null;function xx(t){Og(t,0)}function Wl(t){var e=as(t);if(Zm(e))return t}function Sx(t,e){if(t==="change")return e}var Rg=!1;if(Pi){var _u;if(Pi){var vu="oninput"in document;if(!vu){var Hh=document.createElement("div");Hh.setAttribute("oninput","return;"),vu=typeof Hh.oninput=="function"}_u=vu}else _u=!1;Rg=_u&&(!document.documentMode||9<document.documentMode)}function Gh(){ua&&(ua.detachEvent("onpropertychange",Cg),Ta=ua=null)}function Cg(t){if(t.propertyName==="value"&&Wl(Ta)){var e=[];Ag(e,Ta,t,nd(t)),og(xx,e)}}function yx(t,e,n){t==="focusin"?(Gh(),ua=e,Ta=n,ua.attachEvent("onpropertychange",Cg)):t==="focusout"&&Gh()}function Mx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Wl(Ta)}function Ex(t,e){if(t==="click")return Wl(e)}function Tx(t,e){if(t==="input"||t==="change")return Wl(e)}function wx(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Qn=typeof Object.is=="function"?Object.is:wx;function wa(t,e){if(Qn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!cc.call(e,r)||!Qn(t[r],e[r]))return!1}return!0}function Vh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Wh(t,e){var n=Vh(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Vh(n)}}function bg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?bg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Pg(){for(var t=window,e=ol();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=ol(t.document)}return e}function fd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Ax(t){var e=Pg(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&bg(n.ownerDocument.documentElement,n)){if(i!==null&&fd(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Wh(n,s);var a=Wh(n,i);r&&a&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Rx=Pi&&"documentMode"in document&&11>=document.documentMode,rs=null,bc=null,ca=null,Pc=!1;function Xh(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Pc||rs==null||rs!==ol(i)||(i=rs,"selectionStart"in i&&fd(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),ca&&wa(ca,i)||(ca=i,i=pl(bc,"onSelect"),0<i.length&&(e=new ld("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=rs)))}function so(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ss={animationend:so("Animation","AnimationEnd"),animationiteration:so("Animation","AnimationIteration"),animationstart:so("Animation","AnimationStart"),transitionend:so("Transition","TransitionEnd")},xu={},Lg={};Pi&&(Lg=document.createElement("div").style,"AnimationEvent"in window||(delete ss.animationend.animation,delete ss.animationiteration.animation,delete ss.animationstart.animation),"TransitionEvent"in window||delete ss.transitionend.transition);function Xl(t){if(xu[t])return xu[t];if(!ss[t])return t;var e=ss[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Lg)return xu[t]=e[n];return t}var Dg=Xl("animationend"),Ng=Xl("animationiteration"),Ig=Xl("animationstart"),Ug=Xl("transitionend"),Fg=new Map,Yh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function fr(t,e){Fg.set(t,e),Or(e,[t])}for(var Su=0;Su<Yh.length;Su++){var yu=Yh[Su],Cx=yu.toLowerCase(),bx=yu[0].toUpperCase()+yu.slice(1);fr(Cx,"on"+bx)}fr(Dg,"onAnimationEnd");fr(Ng,"onAnimationIteration");fr(Ig,"onAnimationStart");fr("dblclick","onDoubleClick");fr("focusin","onFocus");fr("focusout","onBlur");fr(Ug,"onTransitionEnd");ys("onMouseEnter",["mouseout","mouseover"]);ys("onMouseLeave",["mouseout","mouseover"]);ys("onPointerEnter",["pointerout","pointerover"]);ys("onPointerLeave",["pointerout","pointerover"]);Or("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Or("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Or("onBeforeInput",["compositionend","keypress","textInput","paste"]);Or("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Or("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Or("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ia="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Px=new Set("cancel close invalid load scroll toggle".split(" ").concat(ia));function qh(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,Cv(i,e,void 0,t),t.currentTarget=null}function Og(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,u=o.currentTarget;if(o=o.listener,l!==s&&r.isPropagationStopped())break e;qh(r,o,u),s=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,u=o.currentTarget,o=o.listener,l!==s&&r.isPropagationStopped())break e;qh(r,o,u),s=l}}}if(ul)throw t=wc,ul=!1,wc=null,t}function ct(t,e){var n=e[Uc];n===void 0&&(n=e[Uc]=new Set);var i=t+"__bubble";n.has(i)||(Bg(e,t,2,!1),n.add(i))}function Mu(t,e,n){var i=0;e&&(i|=4),Bg(n,t,i,e)}var ao="_reactListening"+Math.random().toString(36).slice(2);function Aa(t){if(!t[ao]){t[ao]=!0,Xm.forEach(function(n){n!=="selectionchange"&&(Px.has(n)||Mu(n,!1,t),Mu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ao]||(e[ao]=!0,Mu("selectionchange",!1,e))}}function Bg(t,e,n,i){switch(yg(e)){case 1:var r=Wv;break;case 4:r=Xv;break;default:r=ad}n=r.bind(null,e,n,t),r=void 0,!Tc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Eu(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;a=a.return}for(;o!==null;){if(a=Tr(o),a===null)return;if(l=a.tag,l===5||l===6){i=s=a;continue e}o=o.parentNode}}i=i.return}og(function(){var u=s,h=nd(n),m=[];e:{var f=Fg.get(t);if(f!==void 0){var p=ld,v=t;switch(t){case"keypress":if(Yo(n)===0)break e;case"keydown":case"keyup":p=ax;break;case"focusin":v="focus",p=gu;break;case"focusout":v="blur",p=gu;break;case"beforeblur":case"afterblur":p=gu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Uh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=$v;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=ux;break;case Dg:case Ng:case Ig:p=jv;break;case Ug:p=fx;break;case"scroll":p=Yv;break;case"wheel":p=hx;break;case"copy":case"cut":case"paste":p=Jv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Oh}var M=(e&4)!==0,_=!M&&t==="scroll",c=M?f!==null?f+"Capture":null:f;M=[];for(var d=u,x;d!==null;){x=d;var S=x.stateNode;if(x.tag===5&&S!==null&&(x=S,c!==null&&(S=Sa(d,c),S!=null&&M.push(Ra(d,S,x)))),_)break;d=d.return}0<M.length&&(f=new p(f,v,null,n,h),m.push({event:f,listeners:M}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",f&&n!==Mc&&(v=n.relatedTarget||n.fromElement)&&(Tr(v)||v[Li]))break e;if((p||f)&&(f=h.window===h?h:(f=h.ownerDocument)?f.defaultView||f.parentWindow:window,p?(v=n.relatedTarget||n.toElement,p=u,v=v?Tr(v):null,v!==null&&(_=Br(v),v!==_||v.tag!==5&&v.tag!==6)&&(v=null)):(p=null,v=u),p!==v)){if(M=Uh,S="onMouseLeave",c="onMouseEnter",d="mouse",(t==="pointerout"||t==="pointerover")&&(M=Oh,S="onPointerLeave",c="onPointerEnter",d="pointer"),_=p==null?f:as(p),x=v==null?f:as(v),f=new M(S,d+"leave",p,n,h),f.target=_,f.relatedTarget=x,S=null,Tr(h)===u&&(M=new M(c,d+"enter",v,n,h),M.target=x,M.relatedTarget=_,S=M),_=S,p&&v)t:{for(M=p,c=v,d=0,x=M;x;x=Hr(x))d++;for(x=0,S=c;S;S=Hr(S))x++;for(;0<d-x;)M=Hr(M),d--;for(;0<x-d;)c=Hr(c),x--;for(;d--;){if(M===c||c!==null&&M===c.alternate)break t;M=Hr(M),c=Hr(c)}M=null}else M=null;p!==null&&$h(m,f,p,M,!1),v!==null&&_!==null&&$h(m,_,v,M,!0)}}e:{if(f=u?as(u):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var A=Sx;else if(zh(f))if(Rg)A=Tx;else{A=Mx;var w=yx}else(p=f.nodeName)&&p.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(A=Ex);if(A&&(A=A(t,u))){Ag(m,A,n,h);break e}w&&w(t,f,u),t==="focusout"&&(w=f._wrapperState)&&w.controlled&&f.type==="number"&&_c(f,"number",f.value)}switch(w=u?as(u):window,t){case"focusin":(zh(w)||w.contentEditable==="true")&&(rs=w,bc=u,ca=null);break;case"focusout":ca=bc=rs=null;break;case"mousedown":Pc=!0;break;case"contextmenu":case"mouseup":case"dragend":Pc=!1,Xh(m,n,h);break;case"selectionchange":if(Rx)break;case"keydown":case"keyup":Xh(m,n,h)}var g;if(cd)e:{switch(t){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else is?Tg(t,n)&&(T="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&(Eg&&n.locale!=="ko"&&(is||T!=="onCompositionStart"?T==="onCompositionEnd"&&is&&(g=Mg()):(Ki=h,od="value"in Ki?Ki.value:Ki.textContent,is=!0)),w=pl(u,T),0<w.length&&(T=new Fh(T,t,null,n,h),m.push({event:T,listeners:w}),g?T.data=g:(g=wg(n),g!==null&&(T.data=g)))),(g=mx?gx(t,n):_x(t,n))&&(u=pl(u,"onBeforeInput"),0<u.length&&(h=new Fh("onBeforeInput","beforeinput",null,n,h),m.push({event:h,listeners:u}),h.data=g))}Og(m,e)})}function Ra(t,e,n){return{instance:t,listener:e,currentTarget:n}}function pl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Sa(t,n),s!=null&&i.unshift(Ra(t,s,r)),s=Sa(t,e),s!=null&&i.push(Ra(t,s,r))),t=t.return}return i}function Hr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function $h(t,e,n,i,r){for(var s=e._reactName,a=[];n!==null&&n!==i;){var o=n,l=o.alternate,u=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&u!==null&&(o=u,r?(l=Sa(n,s),l!=null&&a.unshift(Ra(n,l,o))):r||(l=Sa(n,s),l!=null&&a.push(Ra(n,l,o)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var Lx=/\r\n?/g,Dx=/\u0000|\uFFFD/g;function Kh(t){return(typeof t=="string"?t:""+t).replace(Lx,`
`).replace(Dx,"")}function oo(t,e,n){if(e=Kh(e),Kh(t)!==e&&n)throw Error(ie(425))}function ml(){}var Lc=null,Dc=null;function Nc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Ic=typeof setTimeout=="function"?setTimeout:void 0,Nx=typeof clearTimeout=="function"?clearTimeout:void 0,Zh=typeof Promise=="function"?Promise:void 0,Ix=typeof queueMicrotask=="function"?queueMicrotask:typeof Zh<"u"?function(t){return Zh.resolve(null).then(t).catch(Ux)}:Ic;function Ux(t){setTimeout(function(){throw t})}function Tu(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Ea(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Ea(e)}function nr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function jh(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Is=Math.random().toString(36).slice(2),ri="__reactFiber$"+Is,Ca="__reactProps$"+Is,Li="__reactContainer$"+Is,Uc="__reactEvents$"+Is,Fx="__reactListeners$"+Is,Ox="__reactHandles$"+Is;function Tr(t){var e=t[ri];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Li]||n[ri]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=jh(t);t!==null;){if(n=t[ri])return n;t=jh(t)}return e}t=n,n=t.parentNode}return null}function Wa(t){return t=t[ri]||t[Li],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function as(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ie(33))}function Yl(t){return t[Ca]||null}var Fc=[],os=-1;function dr(t){return{current:t}}function ft(t){0>os||(t.current=Fc[os],Fc[os]=null,os--)}function ut(t,e){os++,Fc[os]=t.current,t.current=e}var lr={},en=dr(lr),fn=dr(!1),br=lr;function Ms(t,e){var n=t.type.contextTypes;if(!n)return lr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function dn(t){return t=t.childContextTypes,t!=null}function gl(){ft(fn),ft(en)}function Qh(t,e,n){if(en.current!==lr)throw Error(ie(168));ut(en,e),ut(fn,n)}function kg(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ie(108,yv(t)||"Unknown",r));return yt({},n,i)}function _l(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||lr,br=en.current,ut(en,t),ut(fn,fn.current),!0}function Jh(t,e,n){var i=t.stateNode;if(!i)throw Error(ie(169));n?(t=kg(t,e,br),i.__reactInternalMemoizedMergedChildContext=t,ft(fn),ft(en),ut(en,t)):ft(fn),ut(fn,n)}var yi=null,ql=!1,wu=!1;function zg(t){yi===null?yi=[t]:yi.push(t)}function Bx(t){ql=!0,zg(t)}function hr(){if(!wu&&yi!==null){wu=!0;var t=0,e=st;try{var n=yi;for(st=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}yi=null,ql=!1}catch(r){throw yi!==null&&(yi=yi.slice(t+1)),fg(id,hr),r}finally{st=e,wu=!1}}return null}var ls=[],us=0,vl=null,xl=0,Nn=[],In=0,Pr=null,Ei=1,Ti="";function Mr(t,e){ls[us++]=xl,ls[us++]=vl,vl=t,xl=e}function Hg(t,e,n){Nn[In++]=Ei,Nn[In++]=Ti,Nn[In++]=Pr,Pr=t;var i=Ei;t=Ti;var r=32-Zn(i)-1;i&=~(1<<r),n+=1;var s=32-Zn(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,Ei=1<<32-Zn(e)+r|n<<r|i,Ti=s+t}else Ei=1<<s|n<<r|i,Ti=t}function dd(t){t.return!==null&&(Mr(t,1),Hg(t,1,0))}function hd(t){for(;t===vl;)vl=ls[--us],ls[us]=null,xl=ls[--us],ls[us]=null;for(;t===Pr;)Pr=Nn[--In],Nn[In]=null,Ti=Nn[--In],Nn[In]=null,Ei=Nn[--In],Nn[In]=null}var yn=null,Sn=null,mt=!1,qn=null;function Gg(t,e){var n=Fn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function ep(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,yn=t,Sn=nr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,yn=t,Sn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Pr!==null?{id:Ei,overflow:Ti}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Fn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,yn=t,Sn=null,!0):!1;default:return!1}}function Oc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Bc(t){if(mt){var e=Sn;if(e){var n=e;if(!ep(t,e)){if(Oc(t))throw Error(ie(418));e=nr(n.nextSibling);var i=yn;e&&ep(t,e)?Gg(i,n):(t.flags=t.flags&-4097|2,mt=!1,yn=t)}}else{if(Oc(t))throw Error(ie(418));t.flags=t.flags&-4097|2,mt=!1,yn=t}}}function tp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;yn=t}function lo(t){if(t!==yn)return!1;if(!mt)return tp(t),mt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Nc(t.type,t.memoizedProps)),e&&(e=Sn)){if(Oc(t))throw Vg(),Error(ie(418));for(;e;)Gg(t,e),e=nr(e.nextSibling)}if(tp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ie(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Sn=nr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Sn=null}}else Sn=yn?nr(t.stateNode.nextSibling):null;return!0}function Vg(){for(var t=Sn;t;)t=nr(t.nextSibling)}function Es(){Sn=yn=null,mt=!1}function pd(t){qn===null?qn=[t]:qn.push(t)}var kx=Ii.ReactCurrentBatchConfig;function Xs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ie(309));var i=n.stateNode}if(!i)throw Error(ie(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(ie(284));if(!n._owner)throw Error(ie(290,t))}return t}function uo(t,e){throw t=Object.prototype.toString.call(e),Error(ie(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function np(t){var e=t._init;return e(t._payload)}function Wg(t){function e(c,d){if(t){var x=c.deletions;x===null?(c.deletions=[d],c.flags|=16):x.push(d)}}function n(c,d){if(!t)return null;for(;d!==null;)e(c,d),d=d.sibling;return null}function i(c,d){for(c=new Map;d!==null;)d.key!==null?c.set(d.key,d):c.set(d.index,d),d=d.sibling;return c}function r(c,d){return c=ar(c,d),c.index=0,c.sibling=null,c}function s(c,d,x){return c.index=x,t?(x=c.alternate,x!==null?(x=x.index,x<d?(c.flags|=2,d):x):(c.flags|=2,d)):(c.flags|=1048576,d)}function a(c){return t&&c.alternate===null&&(c.flags|=2),c}function o(c,d,x,S){return d===null||d.tag!==6?(d=Du(x,c.mode,S),d.return=c,d):(d=r(d,x),d.return=c,d)}function l(c,d,x,S){var A=x.type;return A===ns?h(c,d,x.props.children,S,x.key):d!==null&&(d.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===Vi&&np(A)===d.type)?(S=r(d,x.props),S.ref=Xs(c,d,x),S.return=c,S):(S=Jo(x.type,x.key,x.props,null,c.mode,S),S.ref=Xs(c,d,x),S.return=c,S)}function u(c,d,x,S){return d===null||d.tag!==4||d.stateNode.containerInfo!==x.containerInfo||d.stateNode.implementation!==x.implementation?(d=Nu(x,c.mode,S),d.return=c,d):(d=r(d,x.children||[]),d.return=c,d)}function h(c,d,x,S,A){return d===null||d.tag!==7?(d=Cr(x,c.mode,S,A),d.return=c,d):(d=r(d,x),d.return=c,d)}function m(c,d,x){if(typeof d=="string"&&d!==""||typeof d=="number")return d=Du(""+d,c.mode,x),d.return=c,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Qa:return x=Jo(d.type,d.key,d.props,null,c.mode,x),x.ref=Xs(c,null,d),x.return=c,x;case ts:return d=Nu(d,c.mode,x),d.return=c,d;case Vi:var S=d._init;return m(c,S(d._payload),x)}if(ta(d)||zs(d))return d=Cr(d,c.mode,x,null),d.return=c,d;uo(c,d)}return null}function f(c,d,x,S){var A=d!==null?d.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return A!==null?null:o(c,d,""+x,S);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Qa:return x.key===A?l(c,d,x,S):null;case ts:return x.key===A?u(c,d,x,S):null;case Vi:return A=x._init,f(c,d,A(x._payload),S)}if(ta(x)||zs(x))return A!==null?null:h(c,d,x,S,null);uo(c,x)}return null}function p(c,d,x,S,A){if(typeof S=="string"&&S!==""||typeof S=="number")return c=c.get(x)||null,o(d,c,""+S,A);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Qa:return c=c.get(S.key===null?x:S.key)||null,l(d,c,S,A);case ts:return c=c.get(S.key===null?x:S.key)||null,u(d,c,S,A);case Vi:var w=S._init;return p(c,d,x,w(S._payload),A)}if(ta(S)||zs(S))return c=c.get(x)||null,h(d,c,S,A,null);uo(d,S)}return null}function v(c,d,x,S){for(var A=null,w=null,g=d,T=d=0,D=null;g!==null&&T<x.length;T++){g.index>T?(D=g,g=null):D=g.sibling;var C=f(c,g,x[T],S);if(C===null){g===null&&(g=D);break}t&&g&&C.alternate===null&&e(c,g),d=s(C,d,T),w===null?A=C:w.sibling=C,w=C,g=D}if(T===x.length)return n(c,g),mt&&Mr(c,T),A;if(g===null){for(;T<x.length;T++)g=m(c,x[T],S),g!==null&&(d=s(g,d,T),w===null?A=g:w.sibling=g,w=g);return mt&&Mr(c,T),A}for(g=i(c,g);T<x.length;T++)D=p(g,c,T,x[T],S),D!==null&&(t&&D.alternate!==null&&g.delete(D.key===null?T:D.key),d=s(D,d,T),w===null?A=D:w.sibling=D,w=D);return t&&g.forEach(function(N){return e(c,N)}),mt&&Mr(c,T),A}function M(c,d,x,S){var A=zs(x);if(typeof A!="function")throw Error(ie(150));if(x=A.call(x),x==null)throw Error(ie(151));for(var w=A=null,g=d,T=d=0,D=null,C=x.next();g!==null&&!C.done;T++,C=x.next()){g.index>T?(D=g,g=null):D=g.sibling;var N=f(c,g,C.value,S);if(N===null){g===null&&(g=D);break}t&&g&&N.alternate===null&&e(c,g),d=s(N,d,T),w===null?A=N:w.sibling=N,w=N,g=D}if(C.done)return n(c,g),mt&&Mr(c,T),A;if(g===null){for(;!C.done;T++,C=x.next())C=m(c,C.value,S),C!==null&&(d=s(C,d,T),w===null?A=C:w.sibling=C,w=C);return mt&&Mr(c,T),A}for(g=i(c,g);!C.done;T++,C=x.next())C=p(g,c,T,C.value,S),C!==null&&(t&&C.alternate!==null&&g.delete(C.key===null?T:C.key),d=s(C,d,T),w===null?A=C:w.sibling=C,w=C);return t&&g.forEach(function(z){return e(c,z)}),mt&&Mr(c,T),A}function _(c,d,x,S){if(typeof x=="object"&&x!==null&&x.type===ns&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case Qa:e:{for(var A=x.key,w=d;w!==null;){if(w.key===A){if(A=x.type,A===ns){if(w.tag===7){n(c,w.sibling),d=r(w,x.props.children),d.return=c,c=d;break e}}else if(w.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===Vi&&np(A)===w.type){n(c,w.sibling),d=r(w,x.props),d.ref=Xs(c,w,x),d.return=c,c=d;break e}n(c,w);break}else e(c,w);w=w.sibling}x.type===ns?(d=Cr(x.props.children,c.mode,S,x.key),d.return=c,c=d):(S=Jo(x.type,x.key,x.props,null,c.mode,S),S.ref=Xs(c,d,x),S.return=c,c=S)}return a(c);case ts:e:{for(w=x.key;d!==null;){if(d.key===w)if(d.tag===4&&d.stateNode.containerInfo===x.containerInfo&&d.stateNode.implementation===x.implementation){n(c,d.sibling),d=r(d,x.children||[]),d.return=c,c=d;break e}else{n(c,d);break}else e(c,d);d=d.sibling}d=Nu(x,c.mode,S),d.return=c,c=d}return a(c);case Vi:return w=x._init,_(c,d,w(x._payload),S)}if(ta(x))return v(c,d,x,S);if(zs(x))return M(c,d,x,S);uo(c,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,d!==null&&d.tag===6?(n(c,d.sibling),d=r(d,x),d.return=c,c=d):(n(c,d),d=Du(x,c.mode,S),d.return=c,c=d),a(c)):n(c,d)}return _}var Ts=Wg(!0),Xg=Wg(!1),Sl=dr(null),yl=null,cs=null,md=null;function gd(){md=cs=yl=null}function _d(t){var e=Sl.current;ft(Sl),t._currentValue=e}function kc(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function _s(t,e){yl=t,md=cs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(un=!0),t.firstContext=null)}function Bn(t){var e=t._currentValue;if(md!==t)if(t={context:t,memoizedValue:e,next:null},cs===null){if(yl===null)throw Error(ie(308));cs=t,yl.dependencies={lanes:0,firstContext:t}}else cs=cs.next=t;return e}var wr=null;function vd(t){wr===null?wr=[t]:wr.push(t)}function Yg(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,vd(e)):(n.next=r.next,r.next=n),e.interleaved=n,Di(t,i)}function Di(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Wi=!1;function xd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function qg(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ai(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function ir(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,et&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Di(t,n)}return r=i.interleaved,r===null?(e.next=e,vd(i)):(e.next=r.next,r.next=e),i.interleaved=e,Di(t,n)}function qo(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,rd(t,n)}}function ip(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Ml(t,e,n,i){var r=t.updateQueue;Wi=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var l=o,u=l.next;l.next=null,a===null?s=u:a.next=u,a=l;var h=t.alternate;h!==null&&(h=h.updateQueue,o=h.lastBaseUpdate,o!==a&&(o===null?h.firstBaseUpdate=u:o.next=u,h.lastBaseUpdate=l))}if(s!==null){var m=r.baseState;a=0,h=u=l=null,o=s;do{var f=o.lane,p=o.eventTime;if((i&f)===f){h!==null&&(h=h.next={eventTime:p,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var v=t,M=o;switch(f=e,p=n,M.tag){case 1:if(v=M.payload,typeof v=="function"){m=v.call(p,m,f);break e}m=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=M.payload,f=typeof v=="function"?v.call(p,m,f):v,f==null)break e;m=yt({},m,f);break e;case 2:Wi=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,f=r.effects,f===null?r.effects=[o]:f.push(o))}else p={eventTime:p,lane:f,tag:o.tag,payload:o.payload,callback:o.callback,next:null},h===null?(u=h=p,l=m):h=h.next=p,a|=f;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;f=o,o=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(h===null&&(l=m),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=h,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Dr|=a,t.lanes=a,t.memoizedState=m}}function rp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ie(191,r));r.call(i)}}}var Xa={},li=dr(Xa),ba=dr(Xa),Pa=dr(Xa);function Ar(t){if(t===Xa)throw Error(ie(174));return t}function Sd(t,e){switch(ut(Pa,e),ut(ba,t),ut(li,Xa),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:xc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=xc(e,t)}ft(li),ut(li,e)}function ws(){ft(li),ft(ba),ft(Pa)}function $g(t){Ar(Pa.current);var e=Ar(li.current),n=xc(e,t.type);e!==n&&(ut(ba,t),ut(li,n))}function yd(t){ba.current===t&&(ft(li),ft(ba))}var vt=dr(0);function El(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Au=[];function Md(){for(var t=0;t<Au.length;t++)Au[t]._workInProgressVersionPrimary=null;Au.length=0}var $o=Ii.ReactCurrentDispatcher,Ru=Ii.ReactCurrentBatchConfig,Lr=0,St=null,Ct=null,Ft=null,Tl=!1,fa=!1,La=0,zx=0;function $t(){throw Error(ie(321))}function Ed(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Qn(t[n],e[n]))return!1;return!0}function Td(t,e,n,i,r,s){if(Lr=s,St=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,$o.current=t===null||t.memoizedState===null?Wx:Xx,t=n(i,r),fa){s=0;do{if(fa=!1,La=0,25<=s)throw Error(ie(301));s+=1,Ft=Ct=null,e.updateQueue=null,$o.current=Yx,t=n(i,r)}while(fa)}if($o.current=wl,e=Ct!==null&&Ct.next!==null,Lr=0,Ft=Ct=St=null,Tl=!1,e)throw Error(ie(300));return t}function wd(){var t=La!==0;return La=0,t}function ni(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ft===null?St.memoizedState=Ft=t:Ft=Ft.next=t,Ft}function kn(){if(Ct===null){var t=St.alternate;t=t!==null?t.memoizedState:null}else t=Ct.next;var e=Ft===null?St.memoizedState:Ft.next;if(e!==null)Ft=e,Ct=t;else{if(t===null)throw Error(ie(310));Ct=t,t={memoizedState:Ct.memoizedState,baseState:Ct.baseState,baseQueue:Ct.baseQueue,queue:Ct.queue,next:null},Ft===null?St.memoizedState=Ft=t:Ft=Ft.next=t}return Ft}function Da(t,e){return typeof e=="function"?e(t):e}function Cu(t){var e=kn(),n=e.queue;if(n===null)throw Error(ie(311));n.lastRenderedReducer=t;var i=Ct,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,l=null,u=s;do{var h=u.lane;if((Lr&h)===h)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var m={lane:h,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(o=l=m,a=i):l=l.next=m,St.lanes|=h,Dr|=h}u=u.next}while(u!==null&&u!==s);l===null?a=i:l.next=o,Qn(i,e.memoizedState)||(un=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,St.lanes|=s,Dr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function bu(t){var e=kn(),n=e.queue;if(n===null)throw Error(ie(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do s=t(s,a.action),a=a.next;while(a!==r);Qn(s,e.memoizedState)||(un=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Kg(){}function Zg(t,e){var n=St,i=kn(),r=e(),s=!Qn(i.memoizedState,r);if(s&&(i.memoizedState=r,un=!0),i=i.queue,Ad(Jg.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Ft!==null&&Ft.memoizedState.tag&1){if(n.flags|=2048,Na(9,Qg.bind(null,n,i,r,e),void 0,null),Ot===null)throw Error(ie(349));Lr&30||jg(n,e,r)}return r}function jg(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=St.updateQueue,e===null?(e={lastEffect:null,stores:null},St.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Qg(t,e,n,i){e.value=n,e.getSnapshot=i,e0(e)&&t0(t)}function Jg(t,e,n){return n(function(){e0(e)&&t0(t)})}function e0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Qn(t,n)}catch{return!0}}function t0(t){var e=Di(t,1);e!==null&&jn(e,t,1,-1)}function sp(t){var e=ni();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Da,lastRenderedState:t},e.queue=t,t=t.dispatch=Vx.bind(null,St,t),[e.memoizedState,t]}function Na(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=St.updateQueue,e===null?(e={lastEffect:null,stores:null},St.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function n0(){return kn().memoizedState}function Ko(t,e,n,i){var r=ni();St.flags|=t,r.memoizedState=Na(1|e,n,void 0,i===void 0?null:i)}function $l(t,e,n,i){var r=kn();i=i===void 0?null:i;var s=void 0;if(Ct!==null){var a=Ct.memoizedState;if(s=a.destroy,i!==null&&Ed(i,a.deps)){r.memoizedState=Na(e,n,s,i);return}}St.flags|=t,r.memoizedState=Na(1|e,n,s,i)}function ap(t,e){return Ko(8390656,8,t,e)}function Ad(t,e){return $l(2048,8,t,e)}function i0(t,e){return $l(4,2,t,e)}function r0(t,e){return $l(4,4,t,e)}function s0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function a0(t,e,n){return n=n!=null?n.concat([t]):null,$l(4,4,s0.bind(null,e,t),n)}function Rd(){}function o0(t,e){var n=kn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Ed(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function l0(t,e){var n=kn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Ed(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function u0(t,e,n){return Lr&21?(Qn(n,e)||(n=pg(),St.lanes|=n,Dr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,un=!0),t.memoizedState=n)}function Hx(t,e){var n=st;st=n!==0&&4>n?n:4,t(!0);var i=Ru.transition;Ru.transition={};try{t(!1),e()}finally{st=n,Ru.transition=i}}function c0(){return kn().memoizedState}function Gx(t,e,n){var i=sr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},f0(t))d0(e,n);else if(n=Yg(t,e,n,i),n!==null){var r=sn();jn(n,t,i,r),h0(n,e,i)}}function Vx(t,e,n){var i=sr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(f0(t))d0(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,n);if(r.hasEagerState=!0,r.eagerState=o,Qn(o,a)){var l=e.interleaved;l===null?(r.next=r,vd(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Yg(t,e,r,i),n!==null&&(r=sn(),jn(n,t,i,r),h0(n,e,i))}}function f0(t){var e=t.alternate;return t===St||e!==null&&e===St}function d0(t,e){fa=Tl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function h0(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,rd(t,n)}}var wl={readContext:Bn,useCallback:$t,useContext:$t,useEffect:$t,useImperativeHandle:$t,useInsertionEffect:$t,useLayoutEffect:$t,useMemo:$t,useReducer:$t,useRef:$t,useState:$t,useDebugValue:$t,useDeferredValue:$t,useTransition:$t,useMutableSource:$t,useSyncExternalStore:$t,useId:$t,unstable_isNewReconciler:!1},Wx={readContext:Bn,useCallback:function(t,e){return ni().memoizedState=[t,e===void 0?null:e],t},useContext:Bn,useEffect:ap,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ko(4194308,4,s0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ko(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ko(4,2,t,e)},useMemo:function(t,e){var n=ni();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=ni();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=Gx.bind(null,St,t),[i.memoizedState,t]},useRef:function(t){var e=ni();return t={current:t},e.memoizedState=t},useState:sp,useDebugValue:Rd,useDeferredValue:function(t){return ni().memoizedState=t},useTransition:function(){var t=sp(!1),e=t[0];return t=Hx.bind(null,t[1]),ni().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=St,r=ni();if(mt){if(n===void 0)throw Error(ie(407));n=n()}else{if(n=e(),Ot===null)throw Error(ie(349));Lr&30||jg(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,ap(Jg.bind(null,i,s,t),[t]),i.flags|=2048,Na(9,Qg.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=ni(),e=Ot.identifierPrefix;if(mt){var n=Ti,i=Ei;n=(i&~(1<<32-Zn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=La++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=zx++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Xx={readContext:Bn,useCallback:o0,useContext:Bn,useEffect:Ad,useImperativeHandle:a0,useInsertionEffect:i0,useLayoutEffect:r0,useMemo:l0,useReducer:Cu,useRef:n0,useState:function(){return Cu(Da)},useDebugValue:Rd,useDeferredValue:function(t){var e=kn();return u0(e,Ct.memoizedState,t)},useTransition:function(){var t=Cu(Da)[0],e=kn().memoizedState;return[t,e]},useMutableSource:Kg,useSyncExternalStore:Zg,useId:c0,unstable_isNewReconciler:!1},Yx={readContext:Bn,useCallback:o0,useContext:Bn,useEffect:Ad,useImperativeHandle:a0,useInsertionEffect:i0,useLayoutEffect:r0,useMemo:l0,useReducer:bu,useRef:n0,useState:function(){return bu(Da)},useDebugValue:Rd,useDeferredValue:function(t){var e=kn();return Ct===null?e.memoizedState=t:u0(e,Ct.memoizedState,t)},useTransition:function(){var t=bu(Da)[0],e=kn().memoizedState;return[t,e]},useMutableSource:Kg,useSyncExternalStore:Zg,useId:c0,unstable_isNewReconciler:!1};function Xn(t,e){if(t&&t.defaultProps){e=yt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function zc(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:yt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Kl={isMounted:function(t){return(t=t._reactInternals)?Br(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=sn(),r=sr(t),s=Ai(i,r);s.payload=e,n!=null&&(s.callback=n),e=ir(t,s,r),e!==null&&(jn(e,t,r,i),qo(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=sn(),r=sr(t),s=Ai(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=ir(t,s,r),e!==null&&(jn(e,t,r,i),qo(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=sn(),i=sr(t),r=Ai(n,i);r.tag=2,e!=null&&(r.callback=e),e=ir(t,r,i),e!==null&&(jn(e,t,i,n),qo(e,t,i))}};function op(t,e,n,i,r,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!wa(n,i)||!wa(r,s):!0}function p0(t,e,n){var i=!1,r=lr,s=e.contextType;return typeof s=="object"&&s!==null?s=Bn(s):(r=dn(e)?br:en.current,i=e.contextTypes,s=(i=i!=null)?Ms(t,r):lr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Kl,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function lp(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Kl.enqueueReplaceState(e,e.state,null)}function Hc(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},xd(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Bn(s):(s=dn(e)?br:en.current,r.context=Ms(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(zc(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Kl.enqueueReplaceState(r,r.state,null),Ml(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function As(t,e){try{var n="",i=e;do n+=Sv(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Pu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Gc(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var qx=typeof WeakMap=="function"?WeakMap:Map;function m0(t,e,n){n=Ai(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Rl||(Rl=!0,Qc=i),Gc(t,e)},n}function g0(t,e,n){n=Ai(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Gc(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Gc(t,e),typeof i!="function"&&(rr===null?rr=new Set([this]):rr.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function up(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new qx;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=oS.bind(null,t,e,n),e.then(t,t))}function cp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function fp(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ai(-1,1),e.tag=2,ir(n,e,1))),n.lanes|=1),t)}var $x=Ii.ReactCurrentOwner,un=!1;function rn(t,e,n,i){e.child=t===null?Xg(e,null,n,i):Ts(e,t.child,n,i)}function dp(t,e,n,i,r){n=n.render;var s=e.ref;return _s(e,r),i=Td(t,e,n,i,s,r),n=wd(),t!==null&&!un?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ni(t,e,r)):(mt&&n&&dd(e),e.flags|=1,rn(t,e,i,r),e.child)}function hp(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Ud(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,_0(t,e,s,i,r)):(t=Jo(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:wa,n(a,i)&&t.ref===e.ref)return Ni(t,e,r)}return e.flags|=1,t=ar(s,i),t.ref=e.ref,t.return=e,e.child=t}function _0(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(wa(s,i)&&t.ref===e.ref)if(un=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(un=!0);else return e.lanes=t.lanes,Ni(t,e,r)}return Vc(t,e,n,i,r)}function v0(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ut(ds,_n),_n|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ut(ds,_n),_n|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,ut(ds,_n),_n|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,ut(ds,_n),_n|=i;return rn(t,e,r,n),e.child}function x0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Vc(t,e,n,i,r){var s=dn(n)?br:en.current;return s=Ms(e,s),_s(e,r),n=Td(t,e,n,i,s,r),i=wd(),t!==null&&!un?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ni(t,e,r)):(mt&&i&&dd(e),e.flags|=1,rn(t,e,n,r),e.child)}function pp(t,e,n,i,r){if(dn(n)){var s=!0;_l(e)}else s=!1;if(_s(e,r),e.stateNode===null)Zo(t,e),p0(e,n,i),Hc(e,n,i,r),i=!0;else if(t===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var l=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=Bn(u):(u=dn(n)?br:en.current,u=Ms(e,u));var h=n.getDerivedStateFromProps,m=typeof h=="function"||typeof a.getSnapshotBeforeUpdate=="function";m||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||l!==u)&&lp(e,a,i,u),Wi=!1;var f=e.memoizedState;a.state=f,Ml(e,i,a,r),l=e.memoizedState,o!==i||f!==l||fn.current||Wi?(typeof h=="function"&&(zc(e,n,h,i),l=e.memoizedState),(o=Wi||op(e,n,o,i,f,l,u))?(m||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),a.props=i,a.state=l,a.context=u,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,qg(t,e),o=e.memoizedProps,u=e.type===e.elementType?o:Xn(e.type,o),a.props=u,m=e.pendingProps,f=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=Bn(l):(l=dn(n)?br:en.current,l=Ms(e,l));var p=n.getDerivedStateFromProps;(h=typeof p=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==m||f!==l)&&lp(e,a,i,l),Wi=!1,f=e.memoizedState,a.state=f,Ml(e,i,a,r);var v=e.memoizedState;o!==m||f!==v||fn.current||Wi?(typeof p=="function"&&(zc(e,n,p,i),v=e.memoizedState),(u=Wi||op(e,n,u,i,f,v,l)||!1)?(h||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,v,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,v,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=v),a.props=i,a.state=v,a.context=l,i=u):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),i=!1)}return Wc(t,e,n,i,s,r)}function Wc(t,e,n,i,r,s){x0(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&Jh(e,n,!1),Ni(t,e,s);i=e.stateNode,$x.current=e;var o=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=Ts(e,t.child,null,s),e.child=Ts(e,null,o,s)):rn(t,e,o,s),e.memoizedState=i.state,r&&Jh(e,n,!0),e.child}function S0(t){var e=t.stateNode;e.pendingContext?Qh(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Qh(t,e.context,!1),Sd(t,e.containerInfo)}function mp(t,e,n,i,r){return Es(),pd(r),e.flags|=256,rn(t,e,n,i),e.child}var Xc={dehydrated:null,treeContext:null,retryLane:0};function Yc(t){return{baseLanes:t,cachePool:null,transitions:null}}function y0(t,e,n){var i=e.pendingProps,r=vt.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=t!==null&&t.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),ut(vt,r&1),t===null)return Bc(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=Ql(a,i,0,null),t=Cr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Yc(n),e.memoizedState=Xc,t):Cd(e,a));if(r=t.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return Kx(t,e,a,i,o,r,n);if(s){s=i.fallback,a=e.mode,r=t.child,o=r.sibling;var l={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=ar(r,l),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=ar(o,s):(s=Cr(s,a,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=t.child.memoizedState,a=a===null?Yc(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=Xc,i}return s=t.child,t=s.sibling,i=ar(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Cd(t,e){return e=Ql({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function co(t,e,n,i){return i!==null&&pd(i),Ts(e,t.child,null,n),t=Cd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Kx(t,e,n,i,r,s,a){if(n)return e.flags&256?(e.flags&=-257,i=Pu(Error(ie(422))),co(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Ql({mode:"visible",children:i.children},r,0,null),s=Cr(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Ts(e,t.child,null,a),e.child.memoizedState=Yc(a),e.memoizedState=Xc,s);if(!(e.mode&1))return co(t,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(ie(419)),i=Pu(s,i,void 0),co(t,e,a,i)}if(o=(a&t.childLanes)!==0,un||o){if(i=Ot,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Di(t,r),jn(i,t,r,-1))}return Id(),i=Pu(Error(ie(421))),co(t,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=lS.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Sn=nr(r.nextSibling),yn=e,mt=!0,qn=null,t!==null&&(Nn[In++]=Ei,Nn[In++]=Ti,Nn[In++]=Pr,Ei=t.id,Ti=t.overflow,Pr=e),e=Cd(e,i.children),e.flags|=4096,e)}function gp(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),kc(t.return,e,n)}function Lu(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function M0(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(rn(t,e,i.children,n),i=vt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&gp(t,n,e);else if(t.tag===19)gp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(ut(vt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&El(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Lu(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&El(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Lu(e,!0,n,null,s);break;case"together":Lu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Zo(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Ni(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Dr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ie(153));if(e.child!==null){for(t=e.child,n=ar(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=ar(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Zx(t,e,n){switch(e.tag){case 3:S0(e),Es();break;case 5:$g(e);break;case 1:dn(e.type)&&_l(e);break;case 4:Sd(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;ut(Sl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(ut(vt,vt.current&1),e.flags|=128,null):n&e.child.childLanes?y0(t,e,n):(ut(vt,vt.current&1),t=Ni(t,e,n),t!==null?t.sibling:null);ut(vt,vt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return M0(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ut(vt,vt.current),i)break;return null;case 22:case 23:return e.lanes=0,v0(t,e,n)}return Ni(t,e,n)}var E0,qc,T0,w0;E0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};qc=function(){};T0=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Ar(li.current);var s=null;switch(n){case"input":r=mc(t,r),i=mc(t,i),s=[];break;case"select":r=yt({},r,{value:void 0}),i=yt({},i,{value:void 0}),s=[];break;case"textarea":r=vc(t,r),i=vc(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=ml)}Sc(n,i);var a;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var o=r[u];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(va.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(o=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==o&&(l!=null||o!=null))if(u==="style")if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(va.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ct("scroll",t),s||o===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};w0=function(t,e,n,i){n!==i&&(e.flags|=4)};function Ys(t,e){if(!mt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Kt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function jx(t,e,n){var i=e.pendingProps;switch(hd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Kt(e),null;case 1:return dn(e.type)&&gl(),Kt(e),null;case 3:return i=e.stateNode,ws(),ft(fn),ft(en),Md(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(lo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,qn!==null&&(tf(qn),qn=null))),qc(t,e),Kt(e),null;case 5:yd(e);var r=Ar(Pa.current);if(n=e.type,t!==null&&e.stateNode!=null)T0(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ie(166));return Kt(e),null}if(t=Ar(li.current),lo(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[ri]=e,i[Ca]=s,t=(e.mode&1)!==0,n){case"dialog":ct("cancel",i),ct("close",i);break;case"iframe":case"object":case"embed":ct("load",i);break;case"video":case"audio":for(r=0;r<ia.length;r++)ct(ia[r],i);break;case"source":ct("error",i);break;case"img":case"image":case"link":ct("error",i),ct("load",i);break;case"details":ct("toggle",i);break;case"input":wh(i,s),ct("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},ct("invalid",i);break;case"textarea":Rh(i,s),ct("invalid",i)}Sc(n,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&oo(i.textContent,o,t),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&oo(i.textContent,o,t),r=["children",""+o]):va.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&ct("scroll",i)}switch(n){case"input":Ja(i),Ah(i,s,!0);break;case"textarea":Ja(i),Ch(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=ml)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Jm(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[ri]=e,t[Ca]=i,E0(t,e,!1,!1),e.stateNode=t;e:{switch(a=yc(n,i),n){case"dialog":ct("cancel",t),ct("close",t),r=i;break;case"iframe":case"object":case"embed":ct("load",t),r=i;break;case"video":case"audio":for(r=0;r<ia.length;r++)ct(ia[r],t);r=i;break;case"source":ct("error",t),r=i;break;case"img":case"image":case"link":ct("error",t),ct("load",t),r=i;break;case"details":ct("toggle",t),r=i;break;case"input":wh(t,i),r=mc(t,i),ct("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=yt({},i,{value:void 0}),ct("invalid",t);break;case"textarea":Rh(t,i),r=vc(t,i),ct("invalid",t);break;default:r=i}Sc(n,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="style"?ng(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&eg(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&xa(t,l):typeof l=="number"&&xa(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(va.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ct("scroll",t):l!=null&&Qf(t,s,l,a))}switch(n){case"input":Ja(t),Ah(t,i,!1);break;case"textarea":Ja(t),Ch(t);break;case"option":i.value!=null&&t.setAttribute("value",""+or(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?hs(t,!!i.multiple,s,!1):i.defaultValue!=null&&hs(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=ml)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Kt(e),null;case 6:if(t&&e.stateNode!=null)w0(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ie(166));if(n=Ar(Pa.current),Ar(li.current),lo(e)){if(i=e.stateNode,n=e.memoizedProps,i[ri]=e,(s=i.nodeValue!==n)&&(t=yn,t!==null))switch(t.tag){case 3:oo(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&oo(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[ri]=e,e.stateNode=i}return Kt(e),null;case 13:if(ft(vt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(mt&&Sn!==null&&e.mode&1&&!(e.flags&128))Vg(),Es(),e.flags|=98560,s=!1;else if(s=lo(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ie(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ie(317));s[ri]=e}else Es(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Kt(e),s=!1}else qn!==null&&(tf(qn),qn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||vt.current&1?bt===0&&(bt=3):Id())),e.updateQueue!==null&&(e.flags|=4),Kt(e),null);case 4:return ws(),qc(t,e),t===null&&Aa(e.stateNode.containerInfo),Kt(e),null;case 10:return _d(e.type._context),Kt(e),null;case 17:return dn(e.type)&&gl(),Kt(e),null;case 19:if(ft(vt),s=e.memoizedState,s===null)return Kt(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)Ys(s,!1);else{if(bt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=El(t),a!==null){for(e.flags|=128,Ys(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ut(vt,vt.current&1|2),e.child}t=t.sibling}s.tail!==null&&Et()>Rs&&(e.flags|=128,i=!0,Ys(s,!1),e.lanes=4194304)}else{if(!i)if(t=El(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ys(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!mt)return Kt(e),null}else 2*Et()-s.renderingStartTime>Rs&&n!==1073741824&&(e.flags|=128,i=!0,Ys(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Et(),e.sibling=null,n=vt.current,ut(vt,i?n&1|2:n&1),e):(Kt(e),null);case 22:case 23:return Nd(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?_n&1073741824&&(Kt(e),e.subtreeFlags&6&&(e.flags|=8192)):Kt(e),null;case 24:return null;case 25:return null}throw Error(ie(156,e.tag))}function Qx(t,e){switch(hd(e),e.tag){case 1:return dn(e.type)&&gl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ws(),ft(fn),ft(en),Md(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return yd(e),null;case 13:if(ft(vt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ie(340));Es()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ft(vt),null;case 4:return ws(),null;case 10:return _d(e.type._context),null;case 22:case 23:return Nd(),null;case 24:return null;default:return null}}var fo=!1,Qt=!1,Jx=typeof WeakSet=="function"?WeakSet:Set,Te=null;function fs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Mt(t,e,i)}else n.current=null}function $c(t,e,n){try{n()}catch(i){Mt(t,e,i)}}var _p=!1;function eS(t,e){if(Lc=dl,t=Pg(),fd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,o=-1,l=-1,u=0,h=0,m=t,f=null;t:for(;;){for(var p;m!==n||r!==0&&m.nodeType!==3||(o=a+r),m!==s||i!==0&&m.nodeType!==3||(l=a+i),m.nodeType===3&&(a+=m.nodeValue.length),(p=m.firstChild)!==null;)f=m,m=p;for(;;){if(m===t)break t;if(f===n&&++u===r&&(o=a),f===s&&++h===i&&(l=a),(p=m.nextSibling)!==null)break;m=f,f=m.parentNode}m=p}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Dc={focusedElem:t,selectionRange:n},dl=!1,Te=e;Te!==null;)if(e=Te,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Te=t;else for(;Te!==null;){e=Te;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var M=v.memoizedProps,_=v.memoizedState,c=e.stateNode,d=c.getSnapshotBeforeUpdate(e.elementType===e.type?M:Xn(e.type,M),_);c.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ie(163))}}catch(S){Mt(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,Te=t;break}Te=e.return}return v=_p,_p=!1,v}function da(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&$c(e,n,s)}r=r.next}while(r!==i)}}function Zl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Kc(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function A0(t){var e=t.alternate;e!==null&&(t.alternate=null,A0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ri],delete e[Ca],delete e[Uc],delete e[Fx],delete e[Ox])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function R0(t){return t.tag===5||t.tag===3||t.tag===4}function vp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||R0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Zc(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=ml));else if(i!==4&&(t=t.child,t!==null))for(Zc(t,e,n),t=t.sibling;t!==null;)Zc(t,e,n),t=t.sibling}function jc(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(jc(t,e,n),t=t.sibling;t!==null;)jc(t,e,n),t=t.sibling}var Ht=null,Yn=!1;function Oi(t,e,n){for(n=n.child;n!==null;)C0(t,e,n),n=n.sibling}function C0(t,e,n){if(oi&&typeof oi.onCommitFiberUnmount=="function")try{oi.onCommitFiberUnmount(Gl,n)}catch{}switch(n.tag){case 5:Qt||fs(n,e);case 6:var i=Ht,r=Yn;Ht=null,Oi(t,e,n),Ht=i,Yn=r,Ht!==null&&(Yn?(t=Ht,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ht.removeChild(n.stateNode));break;case 18:Ht!==null&&(Yn?(t=Ht,n=n.stateNode,t.nodeType===8?Tu(t.parentNode,n):t.nodeType===1&&Tu(t,n),Ea(t)):Tu(Ht,n.stateNode));break;case 4:i=Ht,r=Yn,Ht=n.stateNode.containerInfo,Yn=!0,Oi(t,e,n),Ht=i,Yn=r;break;case 0:case 11:case 14:case 15:if(!Qt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&$c(n,e,a),r=r.next}while(r!==i)}Oi(t,e,n);break;case 1:if(!Qt&&(fs(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){Mt(n,e,o)}Oi(t,e,n);break;case 21:Oi(t,e,n);break;case 22:n.mode&1?(Qt=(i=Qt)||n.memoizedState!==null,Oi(t,e,n),Qt=i):Oi(t,e,n);break;default:Oi(t,e,n)}}function xp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Jx),e.forEach(function(i){var r=uS.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Hn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:Ht=o.stateNode,Yn=!1;break e;case 3:Ht=o.stateNode.containerInfo,Yn=!0;break e;case 4:Ht=o.stateNode.containerInfo,Yn=!0;break e}o=o.return}if(Ht===null)throw Error(ie(160));C0(s,a,r),Ht=null,Yn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){Mt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)b0(e,t),e=e.sibling}function b0(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Hn(e,t),Jn(t),i&4){try{da(3,t,t.return),Zl(3,t)}catch(M){Mt(t,t.return,M)}try{da(5,t,t.return)}catch(M){Mt(t,t.return,M)}}break;case 1:Hn(e,t),Jn(t),i&512&&n!==null&&fs(n,n.return);break;case 5:if(Hn(e,t),Jn(t),i&512&&n!==null&&fs(n,n.return),t.flags&32){var r=t.stateNode;try{xa(r,"")}catch(M){Mt(t,t.return,M)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,o=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&jm(r,s),yc(o,a);var u=yc(o,s);for(a=0;a<l.length;a+=2){var h=l[a],m=l[a+1];h==="style"?ng(r,m):h==="dangerouslySetInnerHTML"?eg(r,m):h==="children"?xa(r,m):Qf(r,h,m,u)}switch(o){case"input":gc(r,s);break;case"textarea":Qm(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?hs(r,!!s.multiple,p,!1):f!==!!s.multiple&&(s.defaultValue!=null?hs(r,!!s.multiple,s.defaultValue,!0):hs(r,!!s.multiple,s.multiple?[]:"",!1))}r[Ca]=s}catch(M){Mt(t,t.return,M)}}break;case 6:if(Hn(e,t),Jn(t),i&4){if(t.stateNode===null)throw Error(ie(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(M){Mt(t,t.return,M)}}break;case 3:if(Hn(e,t),Jn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Ea(e.containerInfo)}catch(M){Mt(t,t.return,M)}break;case 4:Hn(e,t),Jn(t);break;case 13:Hn(e,t),Jn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Ld=Et())),i&4&&xp(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(Qt=(u=Qt)||h,Hn(e,t),Qt=u):Hn(e,t),Jn(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!h&&t.mode&1)for(Te=t,h=t.child;h!==null;){for(m=Te=h;Te!==null;){switch(f=Te,p=f.child,f.tag){case 0:case 11:case 14:case 15:da(4,f,f.return);break;case 1:fs(f,f.return);var v=f.stateNode;if(typeof v.componentWillUnmount=="function"){i=f,n=f.return;try{e=i,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(M){Mt(i,n,M)}}break;case 5:fs(f,f.return);break;case 22:if(f.memoizedState!==null){yp(m);continue}}p!==null?(p.return=f,Te=p):yp(m)}h=h.sibling}e:for(h=null,m=t;;){if(m.tag===5){if(h===null){h=m;try{r=m.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=m.stateNode,l=m.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=tg("display",a))}catch(M){Mt(t,t.return,M)}}}else if(m.tag===6){if(h===null)try{m.stateNode.nodeValue=u?"":m.memoizedProps}catch(M){Mt(t,t.return,M)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===t)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===t)break e;for(;m.sibling===null;){if(m.return===null||m.return===t)break e;h===m&&(h=null),m=m.return}h===m&&(h=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Hn(e,t),Jn(t),i&4&&xp(t);break;case 21:break;default:Hn(e,t),Jn(t)}}function Jn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(R0(n)){var i=n;break e}n=n.return}throw Error(ie(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(xa(r,""),i.flags&=-33);var s=vp(t);jc(t,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=vp(t);Zc(t,o,a);break;default:throw Error(ie(161))}}catch(l){Mt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function tS(t,e,n){Te=t,P0(t)}function P0(t,e,n){for(var i=(t.mode&1)!==0;Te!==null;){var r=Te,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||fo;if(!a){var o=r.alternate,l=o!==null&&o.memoizedState!==null||Qt;o=fo;var u=Qt;if(fo=a,(Qt=l)&&!u)for(Te=r;Te!==null;)a=Te,l=a.child,a.tag===22&&a.memoizedState!==null?Mp(r):l!==null?(l.return=a,Te=l):Mp(r);for(;s!==null;)Te=s,P0(s),s=s.sibling;Te=r,fo=o,Qt=u}Sp(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Te=s):Sp(t)}}function Sp(t){for(;Te!==null;){var e=Te;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Qt||Zl(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Qt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Xn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&rp(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}rp(e,a,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var h=u.memoizedState;if(h!==null){var m=h.dehydrated;m!==null&&Ea(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ie(163))}Qt||e.flags&512&&Kc(e)}catch(f){Mt(e,e.return,f)}}if(e===t){Te=null;break}if(n=e.sibling,n!==null){n.return=e.return,Te=n;break}Te=e.return}}function yp(t){for(;Te!==null;){var e=Te;if(e===t){Te=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Te=n;break}Te=e.return}}function Mp(t){for(;Te!==null;){var e=Te;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Zl(4,e)}catch(l){Mt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Mt(e,r,l)}}var s=e.return;try{Kc(e)}catch(l){Mt(e,s,l)}break;case 5:var a=e.return;try{Kc(e)}catch(l){Mt(e,a,l)}}}catch(l){Mt(e,e.return,l)}if(e===t){Te=null;break}var o=e.sibling;if(o!==null){o.return=e.return,Te=o;break}Te=e.return}}var nS=Math.ceil,Al=Ii.ReactCurrentDispatcher,bd=Ii.ReactCurrentOwner,On=Ii.ReactCurrentBatchConfig,et=0,Ot=null,At=null,Vt=0,_n=0,ds=dr(0),bt=0,Ia=null,Dr=0,jl=0,Pd=0,ha=null,ln=null,Ld=0,Rs=1/0,Si=null,Rl=!1,Qc=null,rr=null,ho=!1,Zi=null,Cl=0,pa=0,Jc=null,jo=-1,Qo=0;function sn(){return et&6?Et():jo!==-1?jo:jo=Et()}function sr(t){return t.mode&1?et&2&&Vt!==0?Vt&-Vt:kx.transition!==null?(Qo===0&&(Qo=pg()),Qo):(t=st,t!==0||(t=window.event,t=t===void 0?16:yg(t.type)),t):1}function jn(t,e,n,i){if(50<pa)throw pa=0,Jc=null,Error(ie(185));Ga(t,n,i),(!(et&2)||t!==Ot)&&(t===Ot&&(!(et&2)&&(jl|=n),bt===4&&qi(t,Vt)),hn(t,i),n===1&&et===0&&!(e.mode&1)&&(Rs=Et()+500,ql&&hr()))}function hn(t,e){var n=t.callbackNode;kv(t,e);var i=fl(t,t===Ot?Vt:0);if(i===0)n!==null&&Lh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Lh(n),e===1)t.tag===0?Bx(Ep.bind(null,t)):zg(Ep.bind(null,t)),Ix(function(){!(et&6)&&hr()}),n=null;else{switch(mg(i)){case 1:n=id;break;case 4:n=dg;break;case 16:n=cl;break;case 536870912:n=hg;break;default:n=cl}n=B0(n,L0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function L0(t,e){if(jo=-1,Qo=0,et&6)throw Error(ie(327));var n=t.callbackNode;if(vs()&&t.callbackNode!==n)return null;var i=fl(t,t===Ot?Vt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=bl(t,i);else{e=i;var r=et;et|=2;var s=N0();(Ot!==t||Vt!==e)&&(Si=null,Rs=Et()+500,Rr(t,e));do try{sS();break}catch(o){D0(t,o)}while(!0);gd(),Al.current=s,et=r,At!==null?e=0:(Ot=null,Vt=0,e=bt)}if(e!==0){if(e===2&&(r=Ac(t),r!==0&&(i=r,e=ef(t,r))),e===1)throw n=Ia,Rr(t,0),qi(t,i),hn(t,Et()),n;if(e===6)qi(t,i);else{if(r=t.current.alternate,!(i&30)&&!iS(r)&&(e=bl(t,i),e===2&&(s=Ac(t),s!==0&&(i=s,e=ef(t,s))),e===1))throw n=Ia,Rr(t,0),qi(t,i),hn(t,Et()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ie(345));case 2:Er(t,ln,Si);break;case 3:if(qi(t,i),(i&130023424)===i&&(e=Ld+500-Et(),10<e)){if(fl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){sn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Ic(Er.bind(null,t,ln,Si),e);break}Er(t,ln,Si);break;case 4:if(qi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var a=31-Zn(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=Et()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*nS(i/1960))-i,10<i){t.timeoutHandle=Ic(Er.bind(null,t,ln,Si),i);break}Er(t,ln,Si);break;case 5:Er(t,ln,Si);break;default:throw Error(ie(329))}}}return hn(t,Et()),t.callbackNode===n?L0.bind(null,t):null}function ef(t,e){var n=ha;return t.current.memoizedState.isDehydrated&&(Rr(t,e).flags|=256),t=bl(t,e),t!==2&&(e=ln,ln=n,e!==null&&tf(e)),t}function tf(t){ln===null?ln=t:ln.push.apply(ln,t)}function iS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Qn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function qi(t,e){for(e&=~Pd,e&=~jl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Zn(e),i=1<<n;t[n]=-1,e&=~i}}function Ep(t){if(et&6)throw Error(ie(327));vs();var e=fl(t,0);if(!(e&1))return hn(t,Et()),null;var n=bl(t,e);if(t.tag!==0&&n===2){var i=Ac(t);i!==0&&(e=i,n=ef(t,i))}if(n===1)throw n=Ia,Rr(t,0),qi(t,e),hn(t,Et()),n;if(n===6)throw Error(ie(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Er(t,ln,Si),hn(t,Et()),null}function Dd(t,e){var n=et;et|=1;try{return t(e)}finally{et=n,et===0&&(Rs=Et()+500,ql&&hr())}}function Nr(t){Zi!==null&&Zi.tag===0&&!(et&6)&&vs();var e=et;et|=1;var n=On.transition,i=st;try{if(On.transition=null,st=1,t)return t()}finally{st=i,On.transition=n,et=e,!(et&6)&&hr()}}function Nd(){_n=ds.current,ft(ds)}function Rr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Nx(n)),At!==null)for(n=At.return;n!==null;){var i=n;switch(hd(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&gl();break;case 3:ws(),ft(fn),ft(en),Md();break;case 5:yd(i);break;case 4:ws();break;case 13:ft(vt);break;case 19:ft(vt);break;case 10:_d(i.type._context);break;case 22:case 23:Nd()}n=n.return}if(Ot=t,At=t=ar(t.current,null),Vt=_n=e,bt=0,Ia=null,Pd=jl=Dr=0,ln=ha=null,wr!==null){for(e=0;e<wr.length;e++)if(n=wr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}n.pending=i}wr=null}return t}function D0(t,e){do{var n=At;try{if(gd(),$o.current=wl,Tl){for(var i=St.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Tl=!1}if(Lr=0,Ft=Ct=St=null,fa=!1,La=0,bd.current=null,n===null||n.return===null){bt=1,Ia=e,At=null;break}e:{var s=t,a=n.return,o=n,l=e;if(e=Vt,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,h=o,m=h.tag;if(!(h.mode&1)&&(m===0||m===11||m===15)){var f=h.alternate;f?(h.updateQueue=f.updateQueue,h.memoizedState=f.memoizedState,h.lanes=f.lanes):(h.updateQueue=null,h.memoizedState=null)}var p=cp(a);if(p!==null){p.flags&=-257,fp(p,a,o,s,e),p.mode&1&&up(s,u,e),e=p,l=u;var v=e.updateQueue;if(v===null){var M=new Set;M.add(l),e.updateQueue=M}else v.add(l);break e}else{if(!(e&1)){up(s,u,e),Id();break e}l=Error(ie(426))}}else if(mt&&o.mode&1){var _=cp(a);if(_!==null){!(_.flags&65536)&&(_.flags|=256),fp(_,a,o,s,e),pd(As(l,o));break e}}s=l=As(l,o),bt!==4&&(bt=2),ha===null?ha=[s]:ha.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var c=m0(s,l,e);ip(s,c);break e;case 1:o=l;var d=s.type,x=s.stateNode;if(!(s.flags&128)&&(typeof d.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(rr===null||!rr.has(x)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=g0(s,o,e);ip(s,S);break e}}s=s.return}while(s!==null)}U0(n)}catch(A){e=A,At===n&&n!==null&&(At=n=n.return);continue}break}while(!0)}function N0(){var t=Al.current;return Al.current=wl,t===null?wl:t}function Id(){(bt===0||bt===3||bt===2)&&(bt=4),Ot===null||!(Dr&268435455)&&!(jl&268435455)||qi(Ot,Vt)}function bl(t,e){var n=et;et|=2;var i=N0();(Ot!==t||Vt!==e)&&(Si=null,Rr(t,e));do try{rS();break}catch(r){D0(t,r)}while(!0);if(gd(),et=n,Al.current=i,At!==null)throw Error(ie(261));return Ot=null,Vt=0,bt}function rS(){for(;At!==null;)I0(At)}function sS(){for(;At!==null&&!Pv();)I0(At)}function I0(t){var e=O0(t.alternate,t,_n);t.memoizedProps=t.pendingProps,e===null?U0(t):At=e,bd.current=null}function U0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Qx(n,e),n!==null){n.flags&=32767,At=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{bt=6,At=null;return}}else if(n=jx(n,e,_n),n!==null){At=n;return}if(e=e.sibling,e!==null){At=e;return}At=e=t}while(e!==null);bt===0&&(bt=5)}function Er(t,e,n){var i=st,r=On.transition;try{On.transition=null,st=1,aS(t,e,n,i)}finally{On.transition=r,st=i}return null}function aS(t,e,n,i){do vs();while(Zi!==null);if(et&6)throw Error(ie(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ie(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(zv(t,s),t===Ot&&(At=Ot=null,Vt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ho||(ho=!0,B0(cl,function(){return vs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=On.transition,On.transition=null;var a=st;st=1;var o=et;et|=4,bd.current=null,eS(t,n),b0(n,t),Ax(Dc),dl=!!Lc,Dc=Lc=null,t.current=n,tS(n),Lv(),et=o,st=a,On.transition=s}else t.current=n;if(ho&&(ho=!1,Zi=t,Cl=r),s=t.pendingLanes,s===0&&(rr=null),Iv(n.stateNode),hn(t,Et()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Rl)throw Rl=!1,t=Qc,Qc=null,t;return Cl&1&&t.tag!==0&&vs(),s=t.pendingLanes,s&1?t===Jc?pa++:(pa=0,Jc=t):pa=0,hr(),null}function vs(){if(Zi!==null){var t=mg(Cl),e=On.transition,n=st;try{if(On.transition=null,st=16>t?16:t,Zi===null)var i=!1;else{if(t=Zi,Zi=null,Cl=0,et&6)throw Error(ie(331));var r=et;for(et|=4,Te=t.current;Te!==null;){var s=Te,a=s.child;if(Te.flags&16){var o=s.deletions;if(o!==null){for(var l=0;l<o.length;l++){var u=o[l];for(Te=u;Te!==null;){var h=Te;switch(h.tag){case 0:case 11:case 15:da(8,h,s)}var m=h.child;if(m!==null)m.return=h,Te=m;else for(;Te!==null;){h=Te;var f=h.sibling,p=h.return;if(A0(h),h===u){Te=null;break}if(f!==null){f.return=p,Te=f;break}Te=p}}}var v=s.alternate;if(v!==null){var M=v.child;if(M!==null){v.child=null;do{var _=M.sibling;M.sibling=null,M=_}while(M!==null)}}Te=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,Te=a;else e:for(;Te!==null;){if(s=Te,s.flags&2048)switch(s.tag){case 0:case 11:case 15:da(9,s,s.return)}var c=s.sibling;if(c!==null){c.return=s.return,Te=c;break e}Te=s.return}}var d=t.current;for(Te=d;Te!==null;){a=Te;var x=a.child;if(a.subtreeFlags&2064&&x!==null)x.return=a,Te=x;else e:for(a=d;Te!==null;){if(o=Te,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:Zl(9,o)}}catch(A){Mt(o,o.return,A)}if(o===a){Te=null;break e}var S=o.sibling;if(S!==null){S.return=o.return,Te=S;break e}Te=o.return}}if(et=r,hr(),oi&&typeof oi.onPostCommitFiberRoot=="function")try{oi.onPostCommitFiberRoot(Gl,t)}catch{}i=!0}return i}finally{st=n,On.transition=e}}return!1}function Tp(t,e,n){e=As(n,e),e=m0(t,e,1),t=ir(t,e,1),e=sn(),t!==null&&(Ga(t,1,e),hn(t,e))}function Mt(t,e,n){if(t.tag===3)Tp(t,t,n);else for(;e!==null;){if(e.tag===3){Tp(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(rr===null||!rr.has(i))){t=As(n,t),t=g0(e,t,1),e=ir(e,t,1),t=sn(),e!==null&&(Ga(e,1,t),hn(e,t));break}}e=e.return}}function oS(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=sn(),t.pingedLanes|=t.suspendedLanes&n,Ot===t&&(Vt&n)===n&&(bt===4||bt===3&&(Vt&130023424)===Vt&&500>Et()-Ld?Rr(t,0):Pd|=n),hn(t,e)}function F0(t,e){e===0&&(t.mode&1?(e=no,no<<=1,!(no&130023424)&&(no=4194304)):e=1);var n=sn();t=Di(t,e),t!==null&&(Ga(t,e,n),hn(t,n))}function lS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),F0(t,n)}function uS(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ie(314))}i!==null&&i.delete(e),F0(t,n)}var O0;O0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||fn.current)un=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return un=!1,Zx(t,e,n);un=!!(t.flags&131072)}else un=!1,mt&&e.flags&1048576&&Hg(e,xl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Zo(t,e),t=e.pendingProps;var r=Ms(e,en.current);_s(e,n),r=Td(null,e,i,t,r,n);var s=wd();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,dn(i)?(s=!0,_l(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,xd(e),r.updater=Kl,e.stateNode=r,r._reactInternals=e,Hc(e,i,t,n),e=Wc(null,e,i,!0,s,n)):(e.tag=0,mt&&s&&dd(e),rn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Zo(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=fS(i),t=Xn(i,t),r){case 0:e=Vc(null,e,i,t,n);break e;case 1:e=pp(null,e,i,t,n);break e;case 11:e=dp(null,e,i,t,n);break e;case 14:e=hp(null,e,i,Xn(i.type,t),n);break e}throw Error(ie(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Xn(i,r),Vc(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Xn(i,r),pp(t,e,i,r,n);case 3:e:{if(S0(e),t===null)throw Error(ie(387));i=e.pendingProps,s=e.memoizedState,r=s.element,qg(t,e),Ml(e,i,null,n);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=As(Error(ie(423)),e),e=mp(t,e,i,n,r);break e}else if(i!==r){r=As(Error(ie(424)),e),e=mp(t,e,i,n,r);break e}else for(Sn=nr(e.stateNode.containerInfo.firstChild),yn=e,mt=!0,qn=null,n=Xg(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Es(),i===r){e=Ni(t,e,n);break e}rn(t,e,i,n)}e=e.child}return e;case 5:return $g(e),t===null&&Bc(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,a=r.children,Nc(i,r)?a=null:s!==null&&Nc(i,s)&&(e.flags|=32),x0(t,e),rn(t,e,a,n),e.child;case 6:return t===null&&Bc(e),null;case 13:return y0(t,e,n);case 4:return Sd(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Ts(e,null,i,n):rn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Xn(i,r),dp(t,e,i,r,n);case 7:return rn(t,e,e.pendingProps,n),e.child;case 8:return rn(t,e,e.pendingProps.children,n),e.child;case 12:return rn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,ut(Sl,i._currentValue),i._currentValue=a,s!==null)if(Qn(s.value,a)){if(s.children===r.children&&!fn.current){e=Ni(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Ai(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var h=u.pending;h===null?l.next=l:(l.next=h.next,h.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),kc(s.return,n,e),o.lanes|=n;break}l=l.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(ie(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),kc(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}rn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,_s(e,n),r=Bn(r),i=i(r),e.flags|=1,rn(t,e,i,n),e.child;case 14:return i=e.type,r=Xn(i,e.pendingProps),r=Xn(i.type,r),hp(t,e,i,r,n);case 15:return _0(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Xn(i,r),Zo(t,e),e.tag=1,dn(i)?(t=!0,_l(e)):t=!1,_s(e,n),p0(e,i,r),Hc(e,i,r,n),Wc(null,e,i,!0,t,n);case 19:return M0(t,e,n);case 22:return v0(t,e,n)}throw Error(ie(156,e.tag))};function B0(t,e){return fg(t,e)}function cS(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Fn(t,e,n,i){return new cS(t,e,n,i)}function Ud(t){return t=t.prototype,!(!t||!t.isReactComponent)}function fS(t){if(typeof t=="function")return Ud(t)?1:0;if(t!=null){if(t=t.$$typeof,t===ed)return 11;if(t===td)return 14}return 2}function ar(t,e){var n=t.alternate;return n===null?(n=Fn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Jo(t,e,n,i,r,s){var a=2;if(i=t,typeof t=="function")Ud(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case ns:return Cr(n.children,r,s,e);case Jf:a=8,r|=8;break;case fc:return t=Fn(12,n,e,r|2),t.elementType=fc,t.lanes=s,t;case dc:return t=Fn(13,n,e,r),t.elementType=dc,t.lanes=s,t;case hc:return t=Fn(19,n,e,r),t.elementType=hc,t.lanes=s,t;case $m:return Ql(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Ym:a=10;break e;case qm:a=9;break e;case ed:a=11;break e;case td:a=14;break e;case Vi:a=16,i=null;break e}throw Error(ie(130,t==null?t:typeof t,""))}return e=Fn(a,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Cr(t,e,n,i){return t=Fn(7,t,i,e),t.lanes=n,t}function Ql(t,e,n,i){return t=Fn(22,t,i,e),t.elementType=$m,t.lanes=n,t.stateNode={isHidden:!1},t}function Du(t,e,n){return t=Fn(6,t,null,e),t.lanes=n,t}function Nu(t,e,n){return e=Fn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function dS(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=hu(0),this.expirationTimes=hu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=hu(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Fd(t,e,n,i,r,s,a,o,l){return t=new dS(t,e,n,o,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Fn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},xd(s),t}function hS(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ts,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function k0(t){if(!t)return lr;t=t._reactInternals;e:{if(Br(t)!==t||t.tag!==1)throw Error(ie(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(dn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ie(171))}if(t.tag===1){var n=t.type;if(dn(n))return kg(t,n,e)}return e}function z0(t,e,n,i,r,s,a,o,l){return t=Fd(n,i,!0,t,r,s,a,o,l),t.context=k0(null),n=t.current,i=sn(),r=sr(n),s=Ai(i,r),s.callback=e??null,ir(n,s,r),t.current.lanes=r,Ga(t,r,i),hn(t,i),t}function Jl(t,e,n,i){var r=e.current,s=sn(),a=sr(r);return n=k0(n),e.context===null?e.context=n:e.pendingContext=n,e=Ai(s,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=ir(r,e,a),t!==null&&(jn(t,r,a,s),qo(t,r,a)),a}function Pl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function wp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Od(t,e){wp(t,e),(t=t.alternate)&&wp(t,e)}function pS(){return null}var H0=typeof reportError=="function"?reportError:function(t){console.error(t)};function Bd(t){this._internalRoot=t}eu.prototype.render=Bd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ie(409));Jl(t,e,null,null)};eu.prototype.unmount=Bd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Nr(function(){Jl(null,t,null,null)}),e[Li]=null}};function eu(t){this._internalRoot=t}eu.prototype.unstable_scheduleHydration=function(t){if(t){var e=vg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Yi.length&&e!==0&&e<Yi[n].priority;n++);Yi.splice(n,0,t),n===0&&Sg(t)}};function kd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function tu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Ap(){}function mS(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=Pl(a);s.call(u)}}var a=z0(e,i,t,0,null,!1,!1,"",Ap);return t._reactRootContainer=a,t[Li]=a.current,Aa(t.nodeType===8?t.parentNode:t),Nr(),a}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var u=Pl(l);o.call(u)}}var l=Fd(t,0,!1,null,null,!1,!1,"",Ap);return t._reactRootContainer=l,t[Li]=l.current,Aa(t.nodeType===8?t.parentNode:t),Nr(function(){Jl(e,l,n,i)}),l}function nu(t,e,n,i,r){var s=n._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var l=Pl(a);o.call(l)}}Jl(e,a,t,r)}else a=mS(n,e,t,r,i);return Pl(a)}gg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=na(e.pendingLanes);n!==0&&(rd(e,n|1),hn(e,Et()),!(et&6)&&(Rs=Et()+500,hr()))}break;case 13:Nr(function(){var i=Di(t,1);if(i!==null){var r=sn();jn(i,t,1,r)}}),Od(t,1)}};sd=function(t){if(t.tag===13){var e=Di(t,134217728);if(e!==null){var n=sn();jn(e,t,134217728,n)}Od(t,134217728)}};_g=function(t){if(t.tag===13){var e=sr(t),n=Di(t,e);if(n!==null){var i=sn();jn(n,t,e,i)}Od(t,e)}};vg=function(){return st};xg=function(t,e){var n=st;try{return st=t,e()}finally{st=n}};Ec=function(t,e,n){switch(e){case"input":if(gc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Yl(i);if(!r)throw Error(ie(90));Zm(i),gc(i,r)}}}break;case"textarea":Qm(t,n);break;case"select":e=n.value,e!=null&&hs(t,!!n.multiple,e,!1)}};sg=Dd;ag=Nr;var gS={usingClientEntryPoint:!1,Events:[Wa,as,Yl,ig,rg,Dd]},qs={findFiberByHostInstance:Tr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},_S={bundleType:qs.bundleType,version:qs.version,rendererPackageName:qs.rendererPackageName,rendererConfig:qs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ii.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=ug(t),t===null?null:t.stateNode},findFiberByHostInstance:qs.findFiberByHostInstance||pS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var po=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!po.isDisabled&&po.supportsFiber)try{Gl=po.inject(_S),oi=po}catch{}}Tn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=gS;Tn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!kd(e))throw Error(ie(200));return hS(t,e,null,n)};Tn.createRoot=function(t,e){if(!kd(t))throw Error(ie(299));var n=!1,i="",r=H0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Fd(t,1,!1,null,null,n,!1,i,r),t[Li]=e.current,Aa(t.nodeType===8?t.parentNode:t),new Bd(e)};Tn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ie(188)):(t=Object.keys(t).join(","),Error(ie(268,t)));return t=ug(e),t=t===null?null:t.stateNode,t};Tn.flushSync=function(t){return Nr(t)};Tn.hydrate=function(t,e,n){if(!tu(e))throw Error(ie(200));return nu(null,t,e,!0,n)};Tn.hydrateRoot=function(t,e,n){if(!kd(t))throw Error(ie(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",a=H0;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=z0(e,null,t,1,n??null,r,!1,s,a),t[Li]=e.current,Aa(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new eu(e)};Tn.render=function(t,e,n){if(!tu(e))throw Error(ie(200));return nu(null,t,e,!1,n)};Tn.unmountComponentAtNode=function(t){if(!tu(t))throw Error(ie(40));return t._reactRootContainer?(Nr(function(){nu(null,null,t,!1,function(){t._reactRootContainer=null,t[Li]=null})}),!0):!1};Tn.unstable_batchedUpdates=Dd;Tn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!tu(n))throw Error(ie(200));if(t==null||t._reactInternals===void 0)throw Error(ie(38));return nu(t,e,n,!1,i)};Tn.version="18.3.1-next-f1338f8080-20240426";function G0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(G0)}catch(t){console.error(t)}}G0(),Gm.exports=Tn;var vS=Gm.exports,Rp=vS;uc.createRoot=Rp.createRoot,uc.hydrateRoot=Rp.hydrateRoot;/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xS=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),V0=(...t)=>t.filter((e,n,i)=>!!e&&e.trim()!==""&&i.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var SS={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yS=Xe.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:i,className:r="",children:s,iconNode:a,...o},l)=>Xe.createElement("svg",{ref:l,...SS,width:e,height:e,stroke:t,strokeWidth:i?Number(n)*24/Number(e):n,className:V0("lucide",r),...o},[...a.map(([u,h])=>Xe.createElement(u,h)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hi=(t,e)=>{const n=Xe.forwardRef(({className:i,...r},s)=>Xe.createElement(yS,{ref:s,iconNode:e,className:V0(`lucide-${xS(t)}`,i),...r}));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MS=hi("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ES=hi("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TS=hi("Radio",[["path",{d:"M4.9 19.1C1 15.2 1 8.8 4.9 4.9",key:"1vaf9d"}],["path",{d:"M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5",key:"u1ii0m"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5",key:"1j5fej"}],["path",{d:"M19.1 4.9C23 8.8 23 15.1 19.1 19",key:"10b0cb"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cp=hi("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wS=hi("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AS=hi("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RS=hi("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CS=hi("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bS=hi("Volume2",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PS=hi("VolumeX",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]]);function LS(){const t=Xe.useRef(null);return Xe.useEffect(()=>{const e=t.current;if(!e)return;const n=e.getContext("2d");let i,r=e.width=window.innerWidth,s=e.height=window.innerHeight;const a=()=>{r=e.width=window.innerWidth,s=e.height=window.innerHeight};window.addEventListener("resize",a);const o=Math.min(Math.floor(r*s/18e3),75),l=[];for(let m=0;m<o;m++)l.push({x:Math.random()*r,y:Math.random()*s,vx:(Math.random()-.5)*.45,vy:(Math.random()-.5)*.45,radius:Math.random()*1.8+.8,alpha:Math.random()*.6+.2,pulseSpeed:Math.random()*.02+.005,pulseVal:Math.random()*Math.PI,shape:Math.random()>.5?"circle":"square"});let u=0;const h=()=>{n.clearRect(0,0,r,s),n.fillStyle="#030303",n.fillRect(0,0,r,s);const m=n.createRadialGradient(r/2,s/2,50,r/2,s/2,Math.max(r,s)*.65);m.addColorStop(0,"rgba(28, 28, 28, 0.4)"),m.addColorStop(1,"rgba(3, 3, 3, 0.95)"),n.fillStyle=m,n.fillRect(0,0,r,s),u=(u+.25)%60,n.lineWidth=.5,n.strokeStyle="rgba(255, 255, 255, 0.035)";for(let f=0;f<r;f+=60)n.beginPath(),n.moveTo(f,0),n.lineTo(f,s),n.stroke();for(let f=u;f<s;f+=60)n.beginPath(),n.moveTo(0,f),n.lineTo(r,f),n.stroke();for(let f=0;f<l.length;f++)for(let p=f+1;p<l.length;p++){const v=l[f].x-l[p].x,M=l[f].y-l[p].y,_=Math.sqrt(v*v+M*M);if(_<110){const c=(1-_/110)*.15;n.strokeStyle=`rgba(255, 255, 255, ${c})`,n.lineWidth=.75,n.beginPath(),n.moveTo(l[f].x,l[f].y),n.lineTo(l[p].x,l[p].y),n.stroke()}}for(let f=0;f<l.length;f++){const p=l[f];p.x+=p.vx,p.y+=p.vy,p.x<0&&(p.x=r),p.x>r&&(p.x=0),p.y<0&&(p.y=s),p.y>s&&(p.y=0),p.pulseVal+=p.pulseSpeed;const v=p.alpha*(.6+.4*Math.sin(p.pulseVal));n.fillStyle=`rgba(255, 255, 255, ${v})`,p.shape==="square"?n.fillRect(p.x-p.radius,p.y-p.radius,p.radius*2,p.radius*2):(n.beginPath(),n.arc(p.x,p.y,p.radius,0,Math.PI*2),n.fill())}i=requestAnimationFrame(h)};return h(),()=>{window.removeEventListener("resize",a),cancelAnimationFrame(i)}},[]),J.jsxs(J.Fragment,{children:[J.jsx("canvas",{ref:t,style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",pointerEvents:"none",zIndex:0}}),J.jsx("div",{className:"scanlines-overlay"}),J.jsx("div",{className:"vignette-overlay"}),J.jsx("div",{className:"laser-line-sweep"})]})}const DS=["HACK","DESK","MASK","CODE","BYTE","LANE","DATA","JAVA","AREA","PORT","HOST","BOAT","GRID","LAND","MIND","USER","STAR","DOOR","SCAN","IRON","MOON","PING","RING","KING","KEYS","BUGS","WINS","SOUL","TOOL","COOL","HELP","KEEP","DEEP"],NS=["ADKU","NAIS","NPQF","HSDP","XVUY","MIBC"],IS="https://poki.com/en/g/level-devil",US=new Set(DS.map(t=>t.toUpperCase().trim())),FS=new Set(NS.map(t=>t.toUpperCase().trim()));function OS(t){if(!Array.isArray(t)||t.length!==8)return{isValid:!1,reason:"ACCESS DENIED: ALL 8 CHARACTERS MUST BE ENTERED"};const e=t.map(o=>typeof o=="string"?o.toUpperCase().trim():"");if(e.some(o=>o.length!==1||!/^[A-Z]$/.test(o)))return{isValid:!1,reason:"ACCESS DENIED: ALL 8 CHARACTERS REQUIRED"};const n=e.slice(0,4).join(""),i=e.slice(4,8).join(""),r=US.has(n),s=FS.has(i),a=r&&s;return{isValid:a,room01Key:n,room02Key:i,cleanChars:e,reason:a?null:"ACCESS DENIED: INVALID SECURITY PROTOCOL CIPHER"}}class BS{constructor(){this.ctx=null,this.muted=!1}init(){if(!this.ctx&&typeof window<"u"){const e=window.AudioContext||window.webkitAudioContext;e&&(this.ctx=new e)}this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume().catch(()=>{})}toggleMute(){return this.muted=!this.muted,this.muted}isMuted(){return this.muted}playKeyTyping(){if(!this.muted&&(this.init(),!!this.ctx))try{const e=this.ctx.currentTime,n=this.ctx.createOscillator(),i=this.ctx.createGain();n.type="sine",n.frequency.setValueAtTime(700+Math.random()*200,e),n.frequency.exponentialRampToValueAtTime(300,e+.04),i.gain.setValueAtTime(.04,e),i.gain.exponentialRampToValueAtTime(.001,e+.04),n.connect(i),i.connect(this.ctx.destination),n.start(e),n.stop(e+.04)}catch{}}playDelete(){if(!this.muted&&(this.init(),!!this.ctx))try{const e=this.ctx.currentTime,n=this.ctx.createOscillator(),i=this.ctx.createGain();n.type="triangle",n.frequency.setValueAtTime(250,e),n.frequency.exponentialRampToValueAtTime(120,e+.05),i.gain.setValueAtTime(.05,e),i.gain.exponentialRampToValueAtTime(.001,e+.05),n.connect(i),i.connect(this.ctx.destination),n.start(e),n.stop(e+.05)}catch{}}playError(){if(!this.muted&&(this.init(),!!this.ctx))try{const e=this.ctx.currentTime;[140,196].forEach(n=>{const i=this.ctx.createOscillator(),r=this.ctx.createGain();i.type="sawtooth",i.frequency.setValueAtTime(n,e),i.frequency.setValueAtTime(n*.9,e+.15),r.gain.setValueAtTime(.12,e),r.gain.exponentialRampToValueAtTime(.001,e+.35),i.connect(r),r.connect(this.ctx.destination),i.start(e),i.stop(e+.35)})}catch{}}playVerifyScan(){if(!this.muted&&(this.init(),!!this.ctx))try{const e=this.ctx.currentTime,n=this.ctx.createOscillator(),i=this.ctx.createGain();n.type="sine",n.frequency.setValueAtTime(440,e),n.frequency.linearRampToValueAtTime(1100,e+.3),i.gain.setValueAtTime(.08,e),i.gain.exponentialRampToValueAtTime(.001,e+.35),n.connect(i),i.connect(this.ctx.destination),n.start(e),n.stop(e+.35)}catch{}}playLockAssemble(){if(!this.muted&&(this.init(),!!this.ctx))try{const e=this.ctx.currentTime;[0,.1,.2,.35].forEach((n,i)=>{const r=this.ctx.createOscillator(),s=this.ctx.createGain();r.type="triangle",r.frequency.setValueAtTime(500+i*120,e+n),s.gain.setValueAtTime(.07,e+n),s.gain.exponentialRampToValueAtTime(.001,e+n+.08),r.connect(s),s.connect(this.ctx.destination),r.start(e+n),r.stop(e+n+.08)})}catch{}}playLockOpen(){if(!this.muted&&(this.init(),!!this.ctx))try{const e=this.ctx.currentTime,n=this.ctx.createOscillator(),i=this.ctx.createGain();n.type="sine",n.frequency.setValueAtTime(90,e),n.frequency.exponentialRampToValueAtTime(35,e+.8),i.gain.setValueAtTime(.3,e),i.gain.exponentialRampToValueAtTime(.001,e+.9),n.connect(i),i.connect(this.ctx.destination),n.start(e),n.stop(e+.9),[523.25,659.25,783.99,1046.5].forEach((r,s)=>{const a=this.ctx.createOscillator(),o=this.ctx.createGain();a.type="sine",a.frequency.setValueAtTime(r,e+.15+s*.06),o.gain.setValueAtTime(.09,e+.15+s*.06),o.gain.exponentialRampToValueAtTime(.001,e+1.2),a.connect(o),o.connect(this.ctx.destination),a.start(e+.15+s*.06),a.stop(e+1.2)})}catch{}}playPortalHum(){if(!this.muted&&(this.init(),!!this.ctx))try{const e=this.ctx.currentTime,n=this.ctx.createOscillator(),i=this.ctx.createGain();n.type="sine",n.frequency.setValueAtTime(110,e),n.frequency.exponentialRampToValueAtTime(440,e+1.5),i.gain.setValueAtTime(.01,e),i.gain.linearRampToValueAtTime(.15,e+.8),i.gain.exponentialRampToValueAtTime(.001,e+2),n.connect(i),i.connect(this.ctx.destination),n.start(e),n.stop(e+2)}catch{}}}const vn=new BS;function kS({onAccessGranted:t}){const[e,n]=Xe.useState(Array(8).fill("")),[i,r]=Xe.useState(""),[s,a]=Xe.useState(!1),[o,l]=Xe.useState(!1),u=Xe.useRef([]);Xe.useEffect(()=>{u.current[0]&&u.current[0].focus()},[]);const h=e.filter(c=>c&&c.trim().length===1).length,m=h===8,f=(c,d)=>{var w;const x=d.toUpperCase().replace(/[^A-Z]/g,""),S=x.length>0?x.slice(-1):"",A=[...e];A[c]=S,n(A),r(""),a(!1),S&&(vn.playKeyTyping(),c<7&&((w=u.current[c+1])==null||w.focus()))},p=(c,d)=>{var x,S,A;if(d.key==="Backspace"){if(d.preventDefault(),vn.playDelete(),e[c]!==""){const w=[...e];w[c]="",n(w)}else if(c>0){const w=[...e];w[c-1]="",n(w),(x=u.current[c-1])==null||x.focus()}}else d.key==="ArrowLeft"?c>0&&(d.preventDefault(),(S=u.current[c-1])==null||S.focus()):d.key==="ArrowRight"?c<7&&(d.preventDefault(),(A=u.current[c+1])==null||A.focus()):d.key==="Enter"&&(d.preventDefault(),m&&_())},v=c=>{var w;c.preventDefault();const d=c.clipboardData.getData("text");if(!d)return;const x=d.toUpperCase().replace(/[^A-Z]/g,"").slice(0,8);if(x.length===0)return;vn.playKeyTyping();const S=[...e];for(let g=0;g<x.length;g++)S[g]=x[g];n(S),r(""),a(!1);const A=Math.min(x.length,7);(w=u.current[A])==null||w.focus()},M=()=>{vn.playDelete(),n(Array(8).fill("")),r(""),a(!1),l(!1),u.current[0]&&u.current[0].focus()},_=()=>{o||!m||(l(!0),r(""),a(!1),vn.playVerifyScan(),setTimeout(()=>{const c=OS(e);c.isValid?t({chars:e,room01Key:c.room01Key,room02Key:c.room02Key}):(l(!1),vn.playError(),a(!0),r("ACCESS DENIED"))},250))};return J.jsx("div",{style:{maxWidth:"880px",margin:"0 auto",width:"100%",position:"relative",zIndex:10},children:J.jsxs("div",{className:`cyber-box ${s?"shake-box":""}`,style:{padding:"40px 32px",border:i?"1px solid #ffffff":"1px solid #333333",boxShadow:i?"0 0 30px rgba(255, 255, 255, 0.4)":"0 10px 40px rgba(0, 0, 0, 0.85)",transition:"all 0.3s ease"},children:[J.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",borderBottom:"1px solid #222222",paddingBottom:"18px",marginBottom:"32px",flexWrap:"wrap",gap:"12px"},children:[J.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[J.jsx("div",{style:{width:"8px",height:"8px",backgroundColor:"#ffffff",boxShadow:"0 0 8px #ffffff",borderRadius:"50%"}}),J.jsx("span",{style:{fontFamily:"var(--font-tech)",letterSpacing:"0.22em",fontSize:"0.82rem",color:"#cccccc",textTransform:"uppercase"},children:"ESCAPE ROOM // SECURITY MATRIX"})]}),J.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"14px"},children:[J.jsxs("span",{style:{fontSize:"0.88rem",fontFamily:"var(--font-mono)",color:m?"#ffffff":"#888888",fontWeight:800,letterSpacing:"0.1em"},children:["PROGRESS: ",h,"/8"]}),J.jsx("div",{style:{display:"flex",gap:"4px"},children:Array.from({length:8}).map((c,d)=>J.jsx("div",{style:{width:"10px",height:"8px",border:"1px solid #444444",backgroundColor:e[d]?"#ffffff":"#141414",boxShadow:e[d]?"0 0 8px rgba(255,255,255,0.8)":"none",transition:"all 0.2s ease"}},d))})]})]}),J.jsxs("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",marginBottom:"16px",gap:"24px"},children:[J.jsx("div",{style:{flex:"1",maxWidth:"280px",textAlign:"center",borderBottom:"1px solid #333333",paddingBottom:"6px"},children:J.jsx("span",{style:{fontSize:"0.72rem",letterSpacing:"0.22em",fontFamily:"var(--font-tech)",color:"#aaaaaa",fontWeight:700},children:"ROOM 01 KEY // BOX 01–04"})}),J.jsx("div",{style:{color:"#444444",fontSize:"0.9rem",fontWeight:700},children:"+"}),J.jsx("div",{style:{flex:"1",maxWidth:"280px",textAlign:"center",borderBottom:"1px solid #333333",paddingBottom:"6px"},children:J.jsx("span",{style:{fontSize:"0.72rem",letterSpacing:"0.22em",fontFamily:"var(--font-tech)",color:"#aaaaaa",fontWeight:700},children:"ROOM 02 KEY // BOX 05–08"})})]}),J.jsxs("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",gap:"8px",marginBottom:"32px",flexWrap:"nowrap",overflowX:"auto",padding:"10px 4px"},children:[J.jsx("div",{style:{display:"flex",gap:"8px"},children:e.slice(0,4).map((c,d)=>{const x=d;return J.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"6px"},children:[J.jsx("input",{ref:S=>u.current[x]=S,type:"text",maxLength:1,value:c,onChange:S=>f(x,S.target.value),onKeyDown:S=>p(x,S),onPaste:v,disabled:o,className:`char-input-box ${c?"filled":""}`,autoComplete:"off",spellCheck:"false"}),J.jsxs("span",{style:{fontSize:"0.62rem",letterSpacing:"0.1em",color:"#555555",fontFamily:"var(--font-tech)"},children:["0",x+1]})]},x)})}),J.jsx("div",{style:{width:"2px",height:"60px",backgroundColor:"#333333",margin:"0 10px",alignSelf:"flex-start"}}),J.jsx("div",{style:{display:"flex",gap:"8px"},children:e.slice(4,8).map((c,d)=>{const x=d+4;return J.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"6px"},children:[J.jsx("input",{ref:S=>u.current[x]=S,type:"text",maxLength:1,value:c,onChange:S=>f(x,S.target.value),onKeyDown:S=>p(x,S),onPaste:v,disabled:o,className:`char-input-box ${c?"filled":""}`,autoComplete:"off",spellCheck:"false"}),J.jsxs("span",{style:{fontSize:"0.62rem",letterSpacing:"0.1em",color:"#555555",fontFamily:"var(--font-tech)"},children:["0",x+1]})]},x)})})]}),J.jsx("div",{style:{minHeight:"52px",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:"32px",padding:"12px 20px",backgroundColor:i?"rgba(255, 255, 255, 0.08)":o?"rgba(255, 255, 255, 0.04)":"transparent",border:i?"1px solid #ffffff":o?"1px solid #444444":"1px solid transparent",transition:"all 0.3s ease"},children:o?J.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",color:"#ffffff"},children:[J.jsx("div",{className:"spin-slow",style:{display:"flex"},children:J.jsx(Cp,{size:16})}),J.jsx("span",{style:{fontSize:"0.88rem",letterSpacing:"0.2em",fontFamily:"var(--font-mono)"},children:"VERIFYING DUAL SECURITY CODES..."})]}):i?J.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[J.jsx(CS,{size:20,color:"#ffffff"}),J.jsx("span",{className:s?"monochrome-glitch":"",style:{fontSize:"1.05rem",letterSpacing:"0.25em",fontFamily:"var(--font-tech)",fontWeight:800,color:"#ffffff",textTransform:"uppercase"},children:i})]}):J.jsx("span",{style:{fontSize:"0.78rem",letterSpacing:"0.16em",color:"#666666",fontFamily:"var(--font-mono)"},children:"ENTER 4 CHARACTERS FROM ROOM 01 [BOX 01–04] AND 4 CHARACTERS FROM ROOM 02 [BOX 05–08]"})}),J.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"16px"},children:[J.jsxs("button",{type:"button",onClick:M,disabled:o||e.every(c=>c===""),className:"cyber-button cyber-button-secondary",style:{minWidth:"150px"},children:[J.jsx(Cp,{size:16}),"RESET"]}),J.jsxs("button",{type:"button",onClick:_,disabled:o||!m,className:"cyber-button",style:{minWidth:"220px",backgroundColor:m?"#ffffff":"#000000",color:m?"#000000":"#ffffff",borderColor:"#ffffff",boxShadow:m?"0 0 30px rgba(255, 255, 255, 0.5)":"none"},children:[J.jsx(ES,{size:16}),o?"VERIFYING...":"VERIFY ACCESS"]})]})]})})}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const zd="187",zS=0,bp=1,HS=2,el=1,GS=2,ra=3,Ir=0,pn=1,Mi=2,xs=0,ma=1,Ll=2,Pp=3,Lp=4,VS=5,es=100,WS=101,XS=102,YS=103,qS=104,$S=200,KS=201,ZS=202,jS=203,W0=204,X0=205,QS=206,JS=207,ey=208,ty=209,ny=210,iy=211,ry=212,sy=213,ay=214,nf=0,rf=1,sf=2,Ua=3,af=4,of=5,lf=6,uf=7,Y0=0,oy=1,ly=2,Ri=0,q0=1,$0=2,K0=3,Hd=4,Z0=5,j0=6,Q0=7,J0=300,Cs=301,Fa=302,Iu=303,Uu=304,cf=1e3,wi=1001,ff=1002,Gt=1003,uy=1004,mo=1005,cn=1006,Fu=1007,ji=1008,xn=1009,e_=1010,t_=1011,Oa=1012,Gd=1013,fi=1014,si=1015,di=1016,Vd=1017,Wd=1018,bs=1020,n_=35902,i_=35899,r_=1021,s_=1022,ai=1023,ur=1026,Qi=1027,a_=1028,Xd=1029,Ur=1030,Yd=1031,qd=1033,tl=33776,nl=33777,il=33778,rl=33779,df=35840,hf=35841,pf=35842,mf=35843,gf=36196,_f=37492,vf=37496,xf=37488,Sf=37489,Dl=37490,yf=37491,Mf=37808,Ef=37809,Tf=37810,wf=37811,Af=37812,Rf=37813,Cf=37814,bf=37815,Pf=37816,Lf=37817,Df=37818,Nf=37819,If=37820,Uf=37821,Ff=36492,Of=36494,Bf=36495,kf=36283,zf=36284,Nl=36285,Hf=36286,cy=3200,Gf=0,fy=1,$i="",Dn="srgb",Il="srgb-linear",Ul="linear",rt="srgb",Ou=7680,dy=519,hy=512,py=513,my=514,o_=515,gy=516,_y=517,l_=518,u_=519,vy=35044,Dp="300 es",Kn=2e3,Ba=2001;function xy(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Fl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function Sy(){const t=Fl("canvas");return t.style.display="block",t}const Np={};function Ip(...t){const e="THREE."+t.shift();console.log(e,...t)}function c_(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function Ie(...t){t=c_(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function nt(...t){t=c_(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function sl(...t){const e=t.join(" ");e in Np||(Np[e]=!0,Ie(...t))}function yy(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const My={[nf]:nf,[sf]:lf,[af]:af,[Ua]:of,[rf]:rf,[lf]:sf,[uf]:uf,[of]:Ua};class kr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Up=1234567;const ga=Math.PI/180,ka=180/Math.PI;function Us(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Zt[t&255]+Zt[t>>8&255]+Zt[t>>16&255]+Zt[t>>24&255]+"-"+Zt[e&255]+Zt[e>>8&255]+"-"+Zt[e>>16&15|64]+Zt[e>>24&255]+"-"+Zt[n&63|128]+Zt[n>>8&255]+"-"+Zt[n>>16&255]+Zt[n>>24&255]+Zt[i&255]+Zt[i>>8&255]+Zt[i>>16&255]+Zt[i>>24&255]).toLowerCase()}function Ze(t,e,n){return Math.max(e,Math.min(n,t))}function $d(t,e){return(t%e+e)%e}function Ey(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function Ty(t,e,n){return t!==e?(n-t)/(e-t):0}function _a(t,e,n){return(1-n)*t+n*e}function wy(t,e,n,i){return _a(t,e,1-Math.exp(-n*i))}function Ay(t,e=1){return e-Math.abs($d(t,e*2)-e)}function Ry(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function Cy(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function by(t,e){return t+Math.floor(Math.random()*(e-t+1))}function Py(t,e){return t+Math.random()*(e-t)}function Ly(t){return t*(.5-Math.random())}function Dy(t){t!==void 0&&(Up=t);let e=Up+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Ny(t){return t*ga}function Iy(t){return t*ka}function Uy(t){return t>0&&Number.isInteger(t)&&2**Math.round(Math.log2(t))===t}function Fy(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function f_(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function Oy(t,e,n,i,r){const s=Math.cos,a=Math.sin,o=s(n/2),l=a(n/2),u=s((e+i)/2),h=a((e+i)/2),m=s((e-i)/2),f=a((e-i)/2),p=s((i-e)/2),v=a((i-e)/2);switch(r){case"XYX":t.set(o*h,l*m,l*f,o*u);break;case"YZY":t.set(l*f,o*h,l*m,o*u);break;case"ZXZ":t.set(l*m,l*f,o*h,o*u);break;case"XZX":t.set(o*h,l*v,l*p,o*u);break;case"YXY":t.set(l*p,o*h,l*v,o*u);break;case"ZYZ":t.set(l*v,l*p,o*h,o*u);break;default:Ie("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Kd(t){switch(t.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function d_(t,e){if(e.constructor===Float32Array)return t;const n=Kd(e);if(n===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(t/n,-1)}function h_(t,e){if(e.constructor===Float32Array)return t;const n=Kd(e);if(n===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(t*n)}const Bu={DEG2RAD:ga,RAD2DEG:ka,generateUUID:Us,clamp:Ze,euclideanModulo:$d,mapLinear:Ey,inverseLerp:Ty,lerp:_a,damp:wy,pingpong:Ay,smoothstep:Ry,smootherstep:Cy,randInt:by,randFloat:Py,randFloatSpread:Ly,seededRandom:Dy,degToRad:Ny,radToDeg:Iy,isPowerOfTwo:Uy,ceilPowerOfTwo:Fy,floorPowerOfTwo:f_,setQuaternionFromProperEuler:Oy,normalize:h_,denormalize:d_},rh=class rh{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Ze(this.x,e.x,n.x),this.y=Ze(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Ze(this.x,e,n),this.y=Ze(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ze(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Ze(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};rh.prototype.isVector2=!0;let Ye=rh;class Fs{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let l=i[r+0],u=i[r+1],h=i[r+2],m=i[r+3],f=s[a+0],p=s[a+1],v=s[a+2],M=s[a+3];if(m!==M||l!==f||u!==p||h!==v){let _=l*f+u*p+h*v+m*M;_<0&&(f=-f,p=-p,v=-v,M=-M,_=-_);let c=1-o;if(_<.9995){const d=Math.acos(_),x=Math.sin(d);c=Math.sin(c*d)/x,o=Math.sin(o*d)/x,l=l*c+f*o,u=u*c+p*o,h=h*c+v*o,m=m*c+M*o}else{l=l*c+f*o,u=u*c+p*o,h=h*c+v*o,m=m*c+M*o;const d=1/Math.sqrt(l*l+u*u+h*h+m*m);l*=d,u*=d,h*=d,m*=d}}e[n]=l,e[n+1]=u,e[n+2]=h,e[n+3]=m}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],l=i[r+1],u=i[r+2],h=i[r+3],m=s[a],f=s[a+1],p=s[a+2],v=s[a+3];return e[n]=o*v+h*m+l*p-u*f,e[n+1]=l*v+h*f+u*m-o*p,e[n+2]=u*v+h*p+o*f-l*m,e[n+3]=h*v-o*m-l*f-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,u=o(i/2),h=o(r/2),m=o(s/2),f=l(i/2),p=l(r/2),v=l(s/2);switch(a){case"XYZ":this._x=f*h*m+u*p*v,this._y=u*p*m-f*h*v,this._z=u*h*v+f*p*m,this._w=u*h*m-f*p*v;break;case"YXZ":this._x=f*h*m+u*p*v,this._y=u*p*m-f*h*v,this._z=u*h*v-f*p*m,this._w=u*h*m+f*p*v;break;case"ZXY":this._x=f*h*m-u*p*v,this._y=u*p*m+f*h*v,this._z=u*h*v+f*p*m,this._w=u*h*m-f*p*v;break;case"ZYX":this._x=f*h*m-u*p*v,this._y=u*p*m+f*h*v,this._z=u*h*v-f*p*m,this._w=u*h*m+f*p*v;break;case"YZX":this._x=f*h*m+u*p*v,this._y=u*p*m+f*h*v,this._z=u*h*v-f*p*m,this._w=u*h*m-f*p*v;break;case"XZY":this._x=f*h*m-u*p*v,this._y=u*p*m-f*h*v,this._z=u*h*v+f*p*m,this._w=u*h*m+f*p*v;break;default:Ie("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],l=n[9],u=n[2],h=n[6],m=n[10],f=i+o+m;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-l)*p,this._y=(s-u)*p,this._z=(a-r)*p}else if(i>o&&i>m){const p=2*Math.sqrt(1+i-o-m);this._w=(h-l)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+u)/p}else if(o>m){const p=2*Math.sqrt(1+o-i-m);this._w=(s-u)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+m-i-o);this._w=(a-r)/p,this._x=(s+u)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ze(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,l=n._y,u=n._z,h=n._w;return this._x=i*h+a*o+r*u-s*l,this._y=r*h+a*l+s*o-i*u,this._z=s*h+a*u+i*l-r*o,this._w=a*h-i*o-r*l-s*u,this._onChangeCallback(),this}slerp(e,n){let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let l=1-n;if(o<.9995){const u=Math.acos(o),h=Math.sin(u);l=Math.sin(l*u)/h,n=Math.sin(n*u)/h,this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+a*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+a*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const sh=class sh{constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Fp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Fp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,u=2*(a*r-o*i),h=2*(o*n-s*r),m=2*(s*i-a*n);return this.x=n+l*u+a*m-o*h,this.y=i+l*h+o*u-s*m,this.z=r+l*m+s*h-a*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Ze(this.x,e.x,n.x),this.y=Ze(this.y,e.y,n.y),this.z=Ze(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Ze(this.x,e,n),this.y=Ze(this.y,e,n),this.z=Ze(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ze(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ku.copy(this).projectOnVector(e),this.sub(ku)}reflect(e){return this.sub(ku.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Ze(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};sh.prototype.isVector3=!0;let F=sh;const ku=new F,Fp=new Fs,ah=class ah{constructor(e,n,i,r,s,a,o,l,u){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,u)}set(e,n,i,r,s,a,o,l,u){const h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=n,h[4]=s,h[5]=l,h[6]=i,h[7]=a,h[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],u=i[1],h=i[4],m=i[7],f=i[2],p=i[5],v=i[8],M=r[0],_=r[3],c=r[6],d=r[1],x=r[4],S=r[7],A=r[2],w=r[5],g=r[8];return s[0]=a*M+o*d+l*A,s[3]=a*_+o*x+l*w,s[6]=a*c+o*S+l*g,s[1]=u*M+h*d+m*A,s[4]=u*_+h*x+m*w,s[7]=u*c+h*S+m*g,s[2]=f*M+p*d+v*A,s[5]=f*_+p*x+v*w,s[8]=f*c+p*S+v*g,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],h=e[8];return n*a*h-n*o*u-i*s*h+i*o*l+r*s*u-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],h=e[8],m=h*a-o*u,f=o*l-h*s,p=u*s-a*l,v=n*m+i*f+r*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/v;return e[0]=m*M,e[1]=(r*u-h*i)*M,e[2]=(o*i-r*a)*M,e[3]=f*M,e[4]=(h*n-r*l)*M,e[5]=(r*s-o*n)*M,e[6]=p*M,e[7]=(i*l-u*n)*M,e[8]=(a*n-i*s)*M,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*a+u*o)+a+e,-r*u,r*l,-r*(-u*a+l*o)+o+n,0,0,1),this}scale(e,n){return sl("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(zu.makeScale(e,n)),this}rotate(e){return sl("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(zu.makeRotation(-e)),this}translate(e,n){return sl("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(zu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};ah.prototype.isMatrix3=!0;let ke=ah;const zu=new ke,Op=new ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Bp=new ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function By(){const t={enabled:!0,workingColorSpace:Il,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===rt&&(r.r=Ci(r.r),r.g=Ci(r.g),r.b=Ci(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===rt&&(r.r=Ss(r.r),r.g=Ss(r.g),r.b=Ss(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===$i?Ul:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[a].fromXYZ).multiply(this.spaces[s].toXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[Il]:{primaries:e,whitePoint:i,transfer:Ul,toXYZ:Op,fromXYZ:Bp,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Dn},outputColorSpaceConfig:{drawingBufferColorSpace:Dn}},[Dn]:{primaries:e,whitePoint:i,transfer:rt,toXYZ:Op,fromXYZ:Bp,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Dn}}}),t}const je=By();function Ci(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Ss(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Gr;class ky{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Gr===void 0&&(Gr=Fl("canvas")),Gr.width=e.width,Gr.height=e.height;const r=Gr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Gr}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Fl("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Ci(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Ci(n[i]/255)*255):n[i]=Ci(n[i]);return{data:n,width:e.width,height:e.height}}else return Ie("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let zy=0;class Zd{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:zy++}),this.uuid=Us(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width||0,n.height||0,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Hu(r[a].image)):s.push(Hu(r[a]))}else s=Hu(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Hu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?ky.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(Ie("Texture: Unable to serialize Texture."),{})}let Hy=0;const Gu=new F;class Jt extends kr{constructor(e=Jt.DEFAULT_IMAGE,n=Jt.DEFAULT_MAPPING,i=wi,r=wi,s=cn,a=ji,o=ai,l=xn,u=Jt.DEFAULT_ANISOTROPY,h=$i){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Hy++}),this.uuid=Us(),this.name="",this.source=new Zd(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ye(0,0),this.repeat=new Ye(1,1),this.center=new Ye(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ke,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Gu).x}get height(){return this.source.getSize(Gu).y}get depth(){return this.source.getSize(Gu).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){Ie(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Ie(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==J0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case cf:e.x=e.x-Math.floor(e.x);break;case wi:e.x=e.x<0?0:1;break;case ff:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case cf:e.y=e.y-Math.floor(e.y);break;case wi:e.y=e.y<0?0:1;break;case ff:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Jt.DEFAULT_IMAGE=null;Jt.DEFAULT_MAPPING=J0;Jt.DEFAULT_ANISOTROPY=1;const oh=class oh{constructor(e=0,n=0,i=0,r=1){this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,u=l[0],h=l[4],m=l[8],f=l[1],p=l[5],v=l[9],M=l[2],_=l[6],c=l[10];if(Math.abs(h-f)<.01&&Math.abs(m-M)<.01&&Math.abs(v-_)<.01){if(Math.abs(h+f)<.1&&Math.abs(m+M)<.1&&Math.abs(v+_)<.1&&Math.abs(u+p+c-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const x=(u+1)/2,S=(p+1)/2,A=(c+1)/2,w=(h+f)/4,g=(m+M)/4,T=(v+_)/4;return x>S&&x>A?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=w/i,s=g/i):S>A?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=w/r,s=T/r):A<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),i=g/s,r=T/s),this.set(i,r,s,n),this}let d=Math.sqrt((_-v)*(_-v)+(m-M)*(m-M)+(f-h)*(f-h));return Math.abs(d)<.001&&(d=1),this.x=(_-v)/d,this.y=(m-M)/d,this.z=(f-h)/d,this.w=Math.acos((u+p+c-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Ze(this.x,e.x,n.x),this.y=Ze(this.y,e.y,n.y),this.z=Ze(this.z,e.z,n.z),this.w=Ze(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Ze(this.x,e,n),this.y=Ze(this.y,e,n),this.z=Ze(this.z,e,n),this.w=Ze(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ze(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};oh.prototype.isVector4=!0;let xt=oh;class Gy extends kr{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:cn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new xt(0,0,e,n),this.scissorTest=!1,this.viewport=new xt(0,0,e,n),this.textures=[];const r=i.count;for(let s=0;s<r;s++)this.textures[s]=new Jt({width:e,height:n,depth:i.depth}),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const n={minFilter:cn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(n.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new Zd(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const n=e.depthTexture.clone();n.renderTarget=null,this.depthTexture=n}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ui extends Gy{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class p_ extends Jt{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Gt,this.minFilter=Gt,this.wrapR=wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Vy extends Jt{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Gt,this.minFilter=Gt,this.wrapR=wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const zl=class zl{constructor(e,n,i,r,s,a,o,l,u,h,m,f,p,v,M,_){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,u,h,m,f,p,v,M,_)}set(e,n,i,r,s,a,o,l,u,h,m,f,p,v,M,_){const c=this.elements;return c[0]=e,c[4]=n,c[8]=i,c[12]=r,c[1]=s,c[5]=a,c[9]=o,c[13]=l,c[2]=u,c[6]=h,c[10]=m,c[14]=f,c[3]=p,c[7]=v,c[11]=M,c[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new zl().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const n=this.elements,i=e.elements,r=1/Vr.setFromMatrixColumn(e,0).length(),s=1/Vr.setFromMatrixColumn(e,1).length(),a=1/Vr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),u=Math.sin(r),h=Math.cos(s),m=Math.sin(s);if(e.order==="XYZ"){const f=a*h,p=a*m,v=o*h,M=o*m;n[0]=l*h,n[4]=-l*m,n[8]=u,n[1]=p+v*u,n[5]=f-M*u,n[9]=-o*l,n[2]=M-f*u,n[6]=v+p*u,n[10]=a*l}else if(e.order==="YXZ"){const f=l*h,p=l*m,v=u*h,M=u*m;n[0]=f+M*o,n[4]=v*o-p,n[8]=a*u,n[1]=a*m,n[5]=a*h,n[9]=-o,n[2]=p*o-v,n[6]=M+f*o,n[10]=a*l}else if(e.order==="ZXY"){const f=l*h,p=l*m,v=u*h,M=u*m;n[0]=f-M*o,n[4]=-a*m,n[8]=v+p*o,n[1]=p+v*o,n[5]=a*h,n[9]=M-f*o,n[2]=-a*u,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const f=a*h,p=a*m,v=o*h,M=o*m;n[0]=l*h,n[4]=v*u-p,n[8]=f*u+M,n[1]=l*m,n[5]=M*u+f,n[9]=p*u-v,n[2]=-u,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const f=a*l,p=a*u,v=o*l,M=o*u;n[0]=l*h,n[4]=M-f*m,n[8]=v*m+p,n[1]=m,n[5]=a*h,n[9]=-o*h,n[2]=-u*h,n[6]=p*m+v,n[10]=f-M*m}else if(e.order==="XZY"){const f=a*l,p=a*u,v=o*l,M=o*u;n[0]=l*h,n[4]=-m,n[8]=u*h,n[1]=f*m+M,n[5]=a*h,n[9]=p*m-v,n[2]=v*m-p,n[6]=o*h,n[10]=M*m+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Wy,e,Xy)}lookAt(e,n,i){const r=this.elements;return mn.subVectors(e,n),mn.lengthSq()===0&&(mn.z=1),mn.normalize(),Bi.crossVectors(i,mn),Bi.lengthSq()===0&&(Math.abs(i.z)===1?mn.x+=1e-4:mn.z+=1e-4,mn.normalize(),Bi.crossVectors(i,mn)),Bi.normalize(),go.crossVectors(mn,Bi),r[0]=Bi.x,r[4]=go.x,r[8]=mn.x,r[1]=Bi.y,r[5]=go.y,r[9]=mn.y,r[2]=Bi.z,r[6]=go.z,r[10]=mn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],u=i[12],h=i[1],m=i[5],f=i[9],p=i[13],v=i[2],M=i[6],_=i[10],c=i[14],d=i[3],x=i[7],S=i[11],A=i[15],w=r[0],g=r[4],T=r[8],D=r[12],C=r[1],N=r[5],z=r[9],q=r[13],L=r[2],X=r[6],ee=r[10],G=r[14],k=r[3],U=r[7],V=r[11],Z=r[15];return s[0]=a*w+o*C+l*L+u*k,s[4]=a*g+o*N+l*X+u*U,s[8]=a*T+o*z+l*ee+u*V,s[12]=a*D+o*q+l*G+u*Z,s[1]=h*w+m*C+f*L+p*k,s[5]=h*g+m*N+f*X+p*U,s[9]=h*T+m*z+f*ee+p*V,s[13]=h*D+m*q+f*G+p*Z,s[2]=v*w+M*C+_*L+c*k,s[6]=v*g+M*N+_*X+c*U,s[10]=v*T+M*z+_*ee+c*V,s[14]=v*D+M*q+_*G+c*Z,s[3]=d*w+x*C+S*L+A*k,s[7]=d*g+x*N+S*X+A*U,s[11]=d*T+x*z+S*ee+A*V,s[15]=d*D+x*q+S*G+A*Z,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],u=e[13],h=e[2],m=e[6],f=e[10],p=e[14],v=e[3],M=e[7],_=e[11],c=e[15],d=l*p-u*f,x=o*p-u*m,S=o*f-l*m,A=a*p-u*h,w=a*f-l*h,g=a*m-o*h;return n*(M*d-_*x+c*S)-i*(v*d-_*A+c*w)+r*(v*x-M*A+c*g)-s*(v*S-M*w+_*g)}determinantAffine(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[1],a=e[5],o=e[9],l=e[2],u=e[6],h=e[10];return n*(a*h-o*u)-i*(s*h-o*l)+r*(s*u-a*l)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],h=e[8],m=e[9],f=e[10],p=e[11],v=e[12],M=e[13],_=e[14],c=e[15],d=n*o-i*a,x=n*l-r*a,S=n*u-s*a,A=i*l-r*o,w=i*u-s*o,g=r*u-s*l,T=h*M-m*v,D=h*_-f*v,C=h*c-p*v,N=m*_-f*M,z=m*c-p*M,q=f*c-p*_,L=d*q-x*z+S*N+A*C-w*D+g*T;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const X=1/L;return e[0]=(o*q-l*z+u*N)*X,e[1]=(r*z-i*q-s*N)*X,e[2]=(M*g-_*w+c*A)*X,e[3]=(f*w-m*g-p*A)*X,e[4]=(l*C-a*q-u*D)*X,e[5]=(n*q-r*C+s*D)*X,e[6]=(_*S-v*g-c*x)*X,e[7]=(h*g-f*S+p*x)*X,e[8]=(a*z-o*C+u*T)*X,e[9]=(i*C-n*z-s*T)*X,e[10]=(v*w-M*S+c*d)*X,e[11]=(m*S-h*w-p*d)*X,e[12]=(o*D-a*N-l*T)*X,e[13]=(n*N-i*D+r*T)*X,e[14]=(M*x-v*A-_*d)*X,e[15]=(h*A-m*x+f*d)*X,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,u=s*a,h=s*o;return this.set(u*a+i,u*o-r*l,u*l+r*o,0,u*o+r*l,h*o+i,h*l-r*a,0,u*l-r*o,h*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,u=s+s,h=a+a,m=o+o,f=s*u,p=s*h,v=s*m,M=a*h,_=a*m,c=o*m,d=l*u,x=l*h,S=l*m,A=i.x,w=i.y,g=i.z;return r[0]=(1-(M+c))*A,r[1]=(p+S)*A,r[2]=(v-x)*A,r[3]=0,r[4]=(p-S)*w,r[5]=(1-(f+c))*w,r[6]=(_+d)*w,r[7]=0,r[8]=(v+x)*g,r[9]=(_-d)*g,r[10]=(1-(f+M))*g,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),n.identity(),this;let a=Vr.set(r[0],r[1],r[2]).length();const o=Vr.set(r[4],r[5],r[6]).length(),l=Vr.set(r[8],r[9],r[10]).length();s<0&&(a=-a),Gn.copy(this);const u=1/a,h=1/o,m=1/l;return Gn.elements[0]*=u,Gn.elements[1]*=u,Gn.elements[2]*=u,Gn.elements[4]*=h,Gn.elements[5]*=h,Gn.elements[6]*=h,Gn.elements[8]*=m,Gn.elements[9]*=m,Gn.elements[10]*=m,n.setFromRotationMatrix(Gn),i.x=a,i.y=o,i.z=l,this}makePerspective(e,n,i,r,s,a,o=Kn,l=!1){const u=this.elements,h=2*s/(n-e),m=2*s/(i-r),f=(n+e)/(n-e),p=(i+r)/(i-r);let v,M;if(l)v=s/(a-s),M=a*s/(a-s);else if(o===Kn)v=-(a+s)/(a-s),M=-2*a*s/(a-s);else if(o===Ba)v=-a/(a-s),M=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return u[0]=h,u[4]=0,u[8]=f,u[12]=0,u[1]=0,u[5]=m,u[9]=p,u[13]=0,u[2]=0,u[6]=0,u[10]=v,u[14]=M,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=Kn,l=!1){const u=this.elements,h=2/(n-e),m=2/(i-r),f=-(n+e)/(n-e),p=-(i+r)/(i-r);let v,M;if(l)v=1/(a-s),M=a/(a-s);else if(o===Kn)v=-2/(a-s),M=-(a+s)/(a-s);else if(o===Ba)v=-1/(a-s),M=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return u[0]=h,u[4]=0,u[8]=0,u[12]=f,u[1]=0,u[5]=m,u[9]=0,u[13]=p,u[2]=0,u[6]=0,u[10]=v,u[14]=M,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}};zl.prototype.isMatrix4=!0;let dt=zl;const Vr=new F,Gn=new dt,Wy=new F(0,0,0),Xy=new F(1,1,1),Bi=new F,go=new F,mn=new F,kp=new dt,zp=new Fs;class cr{constructor(e=0,n=0,i=0,r=cr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],u=r[5],h=r[9],m=r[2],f=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(Ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Ze(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-m,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ze(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-m,p),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ze(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(Ze(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,u),this._y=Math.atan2(-m,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:Ie("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return kp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(kp,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return zp.setFromEuler(this),this.setFromQuaternion(zp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}cr.DEFAULT_ORDER="XYZ";class m_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Yy=0;const Hp=new F,Wr=new Fs,mi=new dt,_o=new F,$s=new F,qy=new F,$y=new Fs,Gp=new F(1,0,0),Vp=new F(0,1,0),Wp=new F(0,0,1),Xp={type:"added"},Ky={type:"removed"},Xr={type:"childadded",child:null},Vu={type:"childremoved",child:null};class Bt extends kr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Yy++}),this.uuid=Us(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Bt.DEFAULT_UP.clone();const e=new F,n=new cr,i=new Fs,r=new F(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new dt},normalMatrix:{value:new ke}}),this.matrix=new dt,this.matrixWorld=new dt,this.matrixAutoUpdate=Bt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new m_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Wr.setFromAxisAngle(e,n),this.quaternion.multiply(Wr),this}rotateOnWorldAxis(e,n){return Wr.setFromAxisAngle(e,n),this.quaternion.premultiply(Wr),this}rotateX(e){return this.rotateOnAxis(Gp,e)}rotateY(e){return this.rotateOnAxis(Vp,e)}rotateZ(e){return this.rotateOnAxis(Wp,e)}translateOnAxis(e,n){return Hp.copy(e).applyQuaternion(this.quaternion),this.position.add(Hp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Gp,e)}translateY(e){return this.translateOnAxis(Vp,e)}translateZ(e){return this.translateOnAxis(Wp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(mi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?_o.copy(e):_o.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),$s.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mi.lookAt($s,_o,this.up):mi.lookAt(_o,$s,this.up),this.quaternion.setFromRotationMatrix(mi),r&&(mi.extractRotation(r.matrixWorld),Wr.setFromRotationMatrix(mi),this.quaternion.premultiply(Wr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(nt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Xp),Xr.child=e,this.dispatchEvent(Xr),Xr.child=null):nt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Ky),Vu.child=e,this.dispatchEvent(Vu),Vu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),mi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),mi.multiply(e.parent.matrixWorld)),e.applyMatrix4(mi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Xp),Xr.child=e,this.dispatchEvent(Xr),Xr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($s,e,qy),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($s,$y,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*r,s[13]+=i-s[1]*n-s[5]*i-s[9]*r,s[14]+=r-s[2]*n-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n,i=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let u=0,h=l.length;u<h;u++){const m=l[u];s(e.shapes,m)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,u=this.material.length;l<u;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),u=a(e.textures),h=a(e.images),m=a(e.shapes),f=a(e.skeletons),p=a(e.animations),v=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),h.length>0&&(i.images=h),m.length>0&&(i.shapes=m),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),v.length>0&&(i.nodes=v)}return i.object=r,i;function a(o){const l=[];for(const u in o){const h=o[u];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Bt.DEFAULT_UP=new F(0,1,0);Bt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class vo extends Bt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Zy={type:"move"};class Wu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new vo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new vo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new vo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){a=!0;for(const M of e.hand.values()){const _=n.getJointPose(M,i),c=this._getHandJoint(u,M);_!==null&&(c.matrix.fromArray(_.transform.matrix),c.matrix.decompose(c.position,c.quaternion,c.scale),c.matrixWorldNeedsUpdate=!0,c.jointRadius=_.radius),c.visible=_!==null}const h=u.joints["index-finger-tip"],m=u.joints["thumb-tip"],f=h.position.distanceTo(m.position),p=.02,v=.005;u.inputState.pinching&&f>p+v?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&f<=p-v&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Zy)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new vo;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const g_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ki={h:0,s:0,l:0},xo={h:0,s:0,l:0};function Xu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Qe{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Dn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,je.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=je.workingColorSpace){return this.r=e,this.g=n,this.b=i,je.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=je.workingColorSpace){if(e=$d(e,1),n=Ze(n,0,1),i=Ze(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=Xu(a,s,e+1/3),this.g=Xu(a,s,e),this.b=Xu(a,s,e-1/3)}return je.colorSpaceToWorking(this,r),this}setStyle(e,n=Dn){function i(s){s!==void 0&&parseFloat(s)<1&&Ie("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseFloat(s[1]))/100,Math.min(100,parseFloat(s[2]))/100,Math.min(100,parseFloat(s[3]))/100,n);break;case"hsl":case"hsla":if(s=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:Ie("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);Ie("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Dn){const i=g_[e.toLowerCase()];return i!==void 0?this.setHex(i,n):Ie("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ci(e.r),this.g=Ci(e.g),this.b=Ci(e.b),this}copyLinearToSRGB(e){return this.r=Ss(e.r),this.g=Ss(e.g),this.b=Ss(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Dn){return je.workingToColorSpace(jt.copy(this),e),Math.round(Ze(jt.r*255,0,255))*65536+Math.round(Ze(jt.g*255,0,255))*256+Math.round(Ze(jt.b*255,0,255))}getHexString(e=Dn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=je.workingColorSpace){je.workingToColorSpace(jt.copy(this),n);const i=jt.r,r=jt.g,s=jt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,u;const h=(o+a)/2;if(o===a)l=0,u=0;else{const m=a-o;switch(u=h<=.5?m/(a+o):m/(2-a-o),a){case i:l=(r-s)/m+(r<s?6:0);break;case r:l=(s-i)/m+2;break;case s:l=(i-r)/m+4;break}l/=6}return e.h=l,e.s=u,e.l=h,e}getRGB(e,n=je.workingColorSpace){return je.workingToColorSpace(jt.copy(this),n),e.r=jt.r,e.g=jt.g,e.b=jt.b,e}getStyle(e=Dn){je.workingToColorSpace(jt.copy(this),e);const n=jt.r,i=jt.g,r=jt.b;return e!==Dn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(ki),this.setHSL(ki.h+e,ki.s+n,ki.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(ki),e.getHSL(xo);const i=_a(ki.h,xo.h,n),r=_a(ki.s,xo.s,n),s=_a(ki.l,xo.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const jt=new Qe;Qe.NAMES=g_;class jy extends Bt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new cr,this.environmentIntensity=1,this.environmentRotation=new cr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),n.object.backgroundBlurriness=this.backgroundBlurriness,n.object.backgroundIntensity=this.backgroundIntensity,n.object.backgroundRotation=this.backgroundRotation.toArray(),n.object.environmentIntensity=this.environmentIntensity,n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Vn=new F,gi=new F,Yu=new F,_i=new F,Yr=new F,qr=new F,Yp=new F,qu=new F,$u=new F,Ku=new F,Zu=new xt,ju=new xt,Qu=new xt;class $n{constructor(e=new F,n=new F,i=new F){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Vn.subVectors(e,n),r.cross(Vn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Vn.subVectors(r,n),gi.subVectors(i,n),Yu.subVectors(e,n);const a=Vn.dot(Vn),o=Vn.dot(gi),l=Vn.dot(Yu),u=gi.dot(gi),h=gi.dot(Yu),m=a*u-o*o;if(m===0)return s.set(0,0,0),null;const f=1/m,p=(u*l-o*h)*f,v=(a*h-o*l)*f;return s.set(1-p-v,v,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,_i)===null?!1:_i.x>=0&&_i.y>=0&&_i.x+_i.y<=1}static getInterpolation(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,_i)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,_i.x),l.addScaledVector(a,_i.y),l.addScaledVector(o,_i.z),l)}static getInterpolatedAttribute(e,n,i,r,s,a){return Zu.setScalar(0),ju.setScalar(0),Qu.setScalar(0),Zu.fromBufferAttribute(e,n),ju.fromBufferAttribute(e,i),Qu.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Zu,s.x),a.addScaledVector(ju,s.y),a.addScaledVector(Qu,s.z),a}static isFrontFacing(e,n,i,r){return Vn.subVectors(i,n),gi.subVectors(e,n),Vn.cross(gi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Vn.subVectors(this.c,this.b),gi.subVectors(this.a,this.b),Vn.cross(gi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return $n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return $n.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return $n.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return $n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return $n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;Yr.subVectors(r,i),qr.subVectors(s,i),qu.subVectors(e,i);const l=Yr.dot(qu),u=qr.dot(qu);if(l<=0&&u<=0)return n.copy(i);$u.subVectors(e,r);const h=Yr.dot($u),m=qr.dot($u);if(h>=0&&m<=h)return n.copy(r);const f=l*m-h*u;if(f<=0&&l>=0&&h<=0&&l-h>0)return a=l/(l-h),n.copy(i).addScaledVector(Yr,a);Ku.subVectors(e,s);const p=Yr.dot(Ku),v=qr.dot(Ku);if(v>=0&&p<=v)return n.copy(s);const M=p*u-l*v;if(M<=0&&u>=0&&v<=0)return o=u/(u-v),n.copy(i).addScaledVector(qr,o);const _=h*v-p*m;if(_<=0&&m-h>=0&&p-v>=0)return Yp.subVectors(s,r),o=(m-h)/(m-h+(p-v)),n.copy(r).addScaledVector(Yp,o);const c=1/(_+M+f);return a=M*c,o=f*c,n.copy(i).addScaledVector(Yr,a).addScaledVector(qr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Ya{constructor(e=new F(1/0,1/0,1/0),n=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Wn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Wn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Wn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Wn):Wn.fromBufferAttribute(s,a),Wn.applyMatrix4(e.matrixWorld),this.expandByPoint(Wn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),So.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),So.copy(i.boundingBox)),So.applyMatrix4(e.matrixWorld),this.union(So)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Wn),Wn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ks),yo.subVectors(this.max,Ks),$r.subVectors(e.a,Ks),Kr.subVectors(e.b,Ks),Zr.subVectors(e.c,Ks),zi.subVectors(Kr,$r),Hi.subVectors(Zr,Kr),_r.subVectors($r,Zr);let n=[0,-zi.z,zi.y,0,-Hi.z,Hi.y,0,-_r.z,_r.y,zi.z,0,-zi.x,Hi.z,0,-Hi.x,_r.z,0,-_r.x,-zi.y,zi.x,0,-Hi.y,Hi.x,0,-_r.y,_r.x,0];return!Ju(n,$r,Kr,Zr,yo)||(n=[1,0,0,0,1,0,0,0,1],!Ju(n,$r,Kr,Zr,yo))?!1:(Mo.crossVectors(zi,Hi),n=[Mo.x,Mo.y,Mo.z],Ju(n,$r,Kr,Zr,yo))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Wn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Wn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(vi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),vi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),vi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),vi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),vi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),vi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),vi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),vi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(vi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const vi=[new F,new F,new F,new F,new F,new F,new F,new F],Wn=new F,So=new Ya,$r=new F,Kr=new F,Zr=new F,zi=new F,Hi=new F,_r=new F,Ks=new F,yo=new F,Mo=new F,vr=new F;function Ju(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){vr.fromArray(t,s);const o=r.x*Math.abs(vr.x)+r.y*Math.abs(vr.y)+r.z*Math.abs(vr.z),l=e.dot(vr),u=n.dot(vr),h=i.dot(vr);if(Math.max(-Math.max(l,u,h),Math.min(l,u,h))>o)return!1}return!0}const wt=new F,Eo=new Ye;let Qy=0;class bi extends kr{constructor(e,n,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Qy++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=vy,this.updateRanges=[],this.gpuType=si,this.version=0,this._normalizationScale=e!==void 0?Kd(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Eo.fromBufferAttribute(this,n),Eo.applyMatrix3(e),this.setXY(n,Eo.x,Eo.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)wt.fromBufferAttribute(this,n),wt.applyMatrix3(e),this.setXYZ(n,wt.x,wt.y,wt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)wt.fromBufferAttribute(this,n),wt.applyMatrix4(e),this.setXYZ(n,wt.x,wt.y,wt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)wt.fromBufferAttribute(this,n),wt.applyNormalMatrix(e),this.setXYZ(n,wt.x,wt.y,wt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)wt.fromBufferAttribute(this,n),wt.transformDirection(e),this.setXYZ(n,wt.x,wt.y,wt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,n,i){return this.normalized&&(i=this._normalize(i)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=this._denormalize(n)),n}setX(e,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=this._denormalize(n)),n}setY(e,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=this._denormalize(n)),n}setZ(e,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=this._denormalize(n)),n}setW(e,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=this._normalize(n),i=this._normalize(i)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=this._normalize(n),i=this._normalize(i),r=this._normalize(r)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=this._normalize(n),i=this._normalize(i),r=this._normalize(r),s=this._normalize(s)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){const n=this._normalizationScale;return n!==void 0?Math.max(e/n,-1):d_(e,this.array)}_normalize(e){const n=this._normalizationScale;return n!==void 0?Math.round(e*n):h_(e,this.array)}}class __ extends bi{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class v_ extends bi{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Wt extends bi{constructor(e,n,i){super(new Float32Array(e),n,i)}}const Jy=new Ya,Zs=new F,ec=new F;class qa{constructor(e=new F,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):Jy.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Zs.subVectors(e,this.center);const n=Zs.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Zs,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ec.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Zs.copy(e.center).add(ec)),this.expandByPoint(Zs.copy(e.center).sub(ec))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let eM=0;const Ln=new dt,tc=new Bt,jr=new F,gn=new Ya,js=new Ya,Ut=new F;class En extends kr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:eM++}),this.uuid=Us(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(xy(e)?v_:__)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new ke().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Ln.makeRotationFromQuaternion(e),this.applyMatrix4(Ln),this}rotateX(e){return Ln.makeRotationX(e),this.applyMatrix4(Ln),this}rotateY(e){return Ln.makeRotationY(e),this.applyMatrix4(Ln),this}rotateZ(e){return Ln.makeRotationZ(e),this.applyMatrix4(Ln),this}translate(e,n,i){return Ln.makeTranslation(e,n,i),this.applyMatrix4(Ln),this}scale(e,n,i){return Ln.makeScale(e,n,i),this.applyMatrix4(Ln),this}lookAt(e){return tc.lookAt(e),tc.updateMatrix(),this.applyMatrix4(tc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(jr).negate(),this.translate(jr.x,jr.y,jr.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Wt(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&Ie("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ya);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){nt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];gn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ut.addVectors(this.boundingBox.min,gn.min),this.boundingBox.expandByPoint(Ut),Ut.addVectors(this.boundingBox.max,gn.max),this.boundingBox.expandByPoint(Ut)):(this.boundingBox.expandByPoint(gn.min),this.boundingBox.expandByPoint(gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&nt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qa);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){nt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){const i=this.boundingSphere.center;if(gn.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];js.setFromBufferAttribute(o),this.morphTargetsRelative?(Ut.addVectors(gn.min,js.min),gn.expandByPoint(Ut),Ut.addVectors(gn.max,js.max),gn.expandByPoint(Ut)):(gn.expandByPoint(js.min),gn.expandByPoint(js.max))}gn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Ut.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Ut));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],l=this.morphTargetsRelative;for(let u=0,h=o.count;u<h;u++)Ut.fromBufferAttribute(o,u),l&&(jr.fromBufferAttribute(e,u),Ut.add(jr)),r=Math.max(r,i.distanceToSquared(Ut))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&nt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){nt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new bi(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const o=[],l=[],u=new Uint8Array(i.count);for(let D=0;D<i.count;D++)o[D]=new F,l[D]=new F;const h=new F,m=new F,f=new F,p=new Ye,v=new Ye,M=new Ye,_=new F,c=new F;function d(D,C,N){u[D]=u[C]=u[N]=1,h.fromBufferAttribute(i,D),m.fromBufferAttribute(i,C),f.fromBufferAttribute(i,N),p.fromBufferAttribute(s,D),v.fromBufferAttribute(s,C),M.fromBufferAttribute(s,N),m.sub(h),f.sub(h),v.sub(p),M.sub(p);const z=1/(v.x*M.y-M.x*v.y);isFinite(z)&&(_.copy(m).multiplyScalar(M.y).addScaledVector(f,-v.y).multiplyScalar(z),c.copy(f).multiplyScalar(v.x).addScaledVector(m,-M.x).multiplyScalar(z),o[D].add(_),o[C].add(_),o[N].add(_),l[D].add(c),l[C].add(c),l[N].add(c))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let D=0,C=x.length;D<C;++D){const N=x[D],z=N.start,q=N.count;for(let L=z,X=z+q;L<X;L+=3)d(e.getX(L+0),e.getX(L+1),e.getX(L+2))}const S=new F,A=new F,w=new F,g=new F;function T(D){w.fromBufferAttribute(r,D),g.copy(w);const C=o[D];S.copy(C),S.sub(w.multiplyScalar(w.dot(C))).normalize(),A.crossVectors(g,C);const z=A.dot(l[D])<0?-1:1;a.setXYZW(D,S.x,S.y,S.z,z)}for(let D=0,C=i.count;D<C;++D)u[D]&&T(D);this._transformed=!0}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new bi(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const r=new F,s=new F,a=new F,o=new F,l=new F,u=new F,h=new F,m=new F;if(e)for(let f=0,p=e.count;f<p;f+=3){const v=e.getX(f+0),M=e.getX(f+1),_=e.getX(f+2);r.fromBufferAttribute(n,v),s.fromBufferAttribute(n,M),a.fromBufferAttribute(n,_),h.subVectors(a,s),m.subVectors(r,s),h.cross(m),o.fromBufferAttribute(i,v),l.fromBufferAttribute(i,M),u.fromBufferAttribute(i,_),o.add(h),l.add(h),u.add(h),i.setXYZ(v,o.x,o.y,o.z),i.setXYZ(M,l.x,l.y,l.z),i.setXYZ(_,u.x,u.y,u.z)}else for(let f=0,p=n.count;f<p;f+=3)r.fromBufferAttribute(n,f+0),s.fromBufferAttribute(n,f+1),a.fromBufferAttribute(n,f+2),h.subVectors(a,s),m.subVectors(r,s),h.cross(m),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Ut.fromBufferAttribute(e,n),Ut.normalize(),e.setXYZ(n,Ut.x,Ut.y,Ut.z)}toNonIndexed(){function e(o,l){const u=o.array,h=o.itemSize,m=o.normalized,f=new u.constructor(l.length*h);let p=0,v=0;for(let M=0,_=l.length;M<_;M++){o.isInterleavedBufferAttribute?p=l[M]*o.data.stride+o.offset:p=l[M]*h;for(let c=0;c<h;c++)f[v++]=u[p++]}return new bi(f,h,m)}if(this.index===null)return Ie("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new En,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],u=e(l,i);n.setAttribute(o,u)}const s=this.morphAttributes;for(const o in s){const l=[],u=s[o];for(let h=0,m=u.length;h<m;h++){const f=u[h],p=e(f,i);l.push(p)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const u=a[o];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],h=[];for(let m=0,f=u.length;m<f;m++){const p=u[m];h.push(p.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const u in r){const h=r[u];this.setAttribute(u,h.clone(n))}const s=e.morphAttributes;for(const u in s){const h=[],m=s[u];for(let f=0,p=m.length;f<p;f++)h.push(m[f].clone(n));this.morphAttributes[u]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let u=0,h=a.length;u<h;u++){const m=a[u];this.addGroup(m.start,m.count,m.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const nc=new F,tM=new F,nM=new ke;class Xi{constructor(e=new F(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=nc.subVectors(i,n).cross(tM.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,i=!0){const r=e.delta(nc),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(a<0||a>1)?null:n.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||nM.getNormalMatrix(e),r=this.coplanarPoint(nc).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let iM=0;class zr extends kr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:iM++}),this.uuid=Us(),this.name="",this.type="Material",this.blending=ma,this.side=Ir,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=W0,this.blendDst=X0,this.blendEquation=es,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qe(0,0,0),this.blendAlpha=0,this.depthFunc=Ua,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=dy,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ou,this.stencilZFail=Ou,this.stencilZPass=Ou,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){Ie(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Ie(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Qe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new Xi().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Ye().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ye().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=n[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const xi=new F,ic=new F,To=new F,wo=new F;class jd{constructor(e=new F,n=new F(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,xi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=xi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(xi.copy(this.origin).addScaledVector(this.direction,n),xi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){ic.copy(e).add(n).multiplyScalar(.5),To.copy(n).sub(e).normalize(),wo.copy(this.origin).sub(ic);const s=e.distanceTo(n)*.5,a=-this.direction.dot(To),o=wo.dot(this.direction),l=-wo.dot(To),u=wo.lengthSq(),h=Math.abs(1-a*a);let m,f,p,v;if(h>0)if(m=a*l-o,f=a*o-l,v=s*h,m>=0)if(f>=-v)if(f<=v){const M=1/h;m*=M,f*=M,p=m*(m+a*f+2*o)+f*(a*m+f+2*l)+u}else f=s,m=Math.max(0,-(a*f+o)),p=-m*m+f*(f+2*l)+u;else f=-s,m=Math.max(0,-(a*f+o)),p=-m*m+f*(f+2*l)+u;else f<=-v?(m=Math.max(0,-(-a*s+o)),f=m>0?-s:Math.min(Math.max(-s,-l),s),p=-m*m+f*(f+2*l)+u):f<=v?(m=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+u):(m=Math.max(0,-(a*s+o)),f=m>0?s:Math.min(Math.max(-s,-l),s),p=-m*m+f*(f+2*l)+u);else f=a>0?-s:s,m=Math.max(0,-(a*f+o)),p=-m*m+f*(f+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,m),r&&r.copy(ic).addScaledVector(To,f),p}intersectSphere(e,n){if(e.radius<0)return null;xi.subVectors(e.center,this.origin);const i=xi.dot(this.direction),r=xi.dot(xi)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,l;const u=1/this.direction.x,h=1/this.direction.y,m=1/this.direction.z,f=this.origin;return u>=0?(i=(e.min.x-f.x)*u,r=(e.max.x-f.x)*u):(i=(e.max.x-f.x)*u,r=(e.min.x-f.x)*u),h>=0?(s=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(s=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),m>=0?(o=(e.min.z-f.z)*m,l=(e.max.z-f.z)*m):(o=(e.max.z-f.z)*m,l=(e.min.z-f.z)*m),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,xi)!==null}intersectTriangle(e,n,i,r,s){const a=this.origin,o=this.direction,l=o.x,u=o.y,h=o.z,m=e.x-a.x,f=e.y-a.y,p=e.z-a.z,v=n.x-a.x,M=n.y-a.y,_=n.z-a.z,c=i.x-a.x,d=i.y-a.y,x=i.z-a.z,S=Math.abs(l),A=Math.abs(u),w=Math.abs(h);let g,T,D,C,N,z,q,L,X,ee,G,k;if(S>=A&&S>=w?(D=l,z=m,X=v,k=c,l>=0?(g=u,T=h,C=f,N=p,q=M,L=_,ee=d,G=x):(g=h,T=u,C=p,N=f,q=_,L=M,ee=x,G=d)):A>=w?(D=u,z=f,X=M,k=d,u>=0?(g=h,T=l,C=p,N=m,q=_,L=v,ee=x,G=c):(g=l,T=h,C=m,N=p,q=v,L=_,ee=c,G=x)):(D=h,z=p,X=_,k=x,h>=0?(g=l,T=u,C=m,N=f,q=v,L=M,ee=c,G=d):(g=u,T=l,C=f,N=m,q=M,L=v,ee=d,G=c)),D===0)return null;const U=g/D,V=T/D,Z=1/D,ae=C-U*z,Le=N-V*z,$=q-U*X,de=L-V*X,Se=ee-U*k,be=G-V*k,_e=Se*de-be*$,me=ae*be-Le*Se,Ue=$*Le-de*ae;if(r){if(_e<0||me<0||Ue<0)return null}else if((_e<0||me<0||Ue<0)&&(_e>0||me>0||Ue>0))return null;const ye=_e+me+Ue;if(ye===0)return null;const Fe=Z*(_e*z+me*X+Ue*k);return(ye>0?Fe<0:Fe>0)?null:this.at(Fe/ye,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class x_ extends zr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cr,this.combine=Y0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const qp=new dt,xr=new jd,Ao=new qa,$p=new F,Ro=new F,Co=new F,bo=new F,rc=new F,Po=new F,Kp=new F,Lo=new F;class ci extends Bt{constructor(e=new En,n=new x_){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Po.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const h=o[l],m=s[l];h!==0&&(rc.fromBufferAttribute(m,e),a?Po.addScaledVector(rc,h):Po.addScaledVector(rc.sub(n),h))}n.add(Po)}return n}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ao.copy(i.boundingSphere),Ao.applyMatrix4(s),xr.copy(e.ray).recast(e.near),!(Ao.containsPoint(xr.origin)===!1&&(xr.intersectSphere(Ao,$p)===null||xr.origin.distanceToSquared($p)>(e.far-e.near)**2))&&(qp.copy(s).invert(),xr.copy(e.ray).applyMatrix4(qp),!(i.boundingBox!==null&&xr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,xr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,u=s.attributes.uv,h=s.attributes.uv1,m=s.attributes.normal,f=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,M=f.length;v<M;v++){const _=f[v],c=a[_.materialIndex],d=Math.max(_.start,p.start),x=Math.min(o.count,Math.min(_.start+_.count,p.start+p.count));for(let S=d,A=x;S<A;S+=3){const w=o.getX(S),g=o.getX(S+1),T=o.getX(S+2);r=Do(this,c,e,i,u,h,m,w,g,T),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=_.materialIndex,n.push(r))}}else{const v=Math.max(0,p.start),M=Math.min(o.count,p.start+p.count);for(let _=v,c=M;_<c;_+=3){const d=o.getX(_),x=o.getX(_+1),S=o.getX(_+2);r=Do(this,a,e,i,u,h,m,d,x,S),r&&(r.faceIndex=Math.floor(_/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let v=0,M=f.length;v<M;v++){const _=f[v],c=a[_.materialIndex],d=Math.max(_.start,p.start),x=Math.min(l.count,Math.min(_.start+_.count,p.start+p.count));for(let S=d,A=x;S<A;S+=3){const w=S,g=S+1,T=S+2;r=Do(this,c,e,i,u,h,m,w,g,T),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=_.materialIndex,n.push(r))}}else{const v=Math.max(0,p.start),M=Math.min(l.count,p.start+p.count);for(let _=v,c=M;_<c;_+=3){const d=_,x=_+1,S=_+2;r=Do(this,a,e,i,u,h,m,d,x,S),r&&(r.faceIndex=Math.floor(_/3),n.push(r))}}}}function rM(t,e,n,i,r,s,a,o){let l;if(e.side===pn?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===Ir,o),l===null)return null;Lo.copy(o),Lo.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(Lo);return u<n.near||u>n.far?null:{distance:u,point:Lo.clone(),object:t}}function Do(t,e,n,i,r,s,a,o,l,u){t.getVertexPosition(o,Ro),t.getVertexPosition(l,Co),t.getVertexPosition(u,bo);const h=rM(t,e,n,i,Ro,Co,bo,Kp);if(h){const m=new F;$n.getBarycoord(Kp,Ro,Co,bo,m),r&&(h.uv=$n.getInterpolatedAttribute(r,o,l,u,m,new Ye)),s&&(h.uv1=$n.getInterpolatedAttribute(s,o,l,u,m,new Ye)),a&&(h.normal=$n.getInterpolatedAttribute(a,o,l,u,m,new F),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const f={a:o,b:l,c:u,normal:new F,materialIndex:0};$n.getNormal(Ro,Co,bo,f.normal),h.face=f,h.barycoord=m}return h}class sM extends Jt{constructor(e=null,n=1,i=1,r,s,a,o,l,u=Gt,h=Gt,m,f){super(null,a,o,l,u,h,r,s,m,f),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Sr=new qa,aM=new Ye(.5,.5),No=new F;class za{constructor(e=new Xi,n=new Xi,i=new Xi,r=new Xi,s=new Xi,a=new Xi){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Kn,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],u=s[3],h=s[4],m=s[5],f=s[6],p=s[7],v=s[8],M=s[9],_=s[10],c=s[11],d=s[12],x=s[13],S=s[14],A=s[15];if(r[0].setComponents(u-a,p-h,c-v,A-d).normalize(),r[1].setComponents(u+a,p+h,c+v,A+d).normalize(),r[2].setComponents(u+o,p+m,c+M,A+x).normalize(),r[3].setComponents(u-o,p-m,c-M,A-x).normalize(),i)r[4].setComponents(l,f,_,S).normalize(),r[5].setComponents(u-l,p-f,c-_,A-S).normalize();else if(r[4].setComponents(u-l,p-f,c-_,A-S).normalize(),n===Kn)r[5].setComponents(u+l,p+f,c+_,A+S).normalize();else if(n===Ba)r[5].setComponents(l,f,_,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Sr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Sr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Sr)}intersectsSprite(e){Sr.center.set(0,0,0);const n=aM.distanceTo(e.center);return Sr.radius=.7071067811865476+n,Sr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Sr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(No.x=r.normal.x>0?e.max.x:e.min.x,No.y=r.normal.y>0?e.max.y:e.min.y,No.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(No)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const Zp=new dt;class Qd{constructor(){this.coordinateSystem=Kn,this._frustums=[],this._count=0}setFromArrayCamera(e){const n=e.cameras,i=this._frustums;for(let r=0;r<n.length;r++){const s=n[r];Zp.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),i[r]===void 0&&(i[r]=new za),i[r].setFromProjectionMatrix(Zp,s.coordinateSystem,s.reversedDepth)}return this._count=n.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){const n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){const n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){const n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){const n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].intersectsBox(e))return!0;return!1}containsPoint(e){const n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;const n=this._frustums,i=e._frustums;for(let r=0;r<e._count;r++)n[r]===void 0&&(n[r]=new za),n[r].copy(i[r]);return this._count=e._count,this}clone(){return new Qd().copy(this)}}class S_ extends zr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Qe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ol=new F,Bl=new F,jp=new dt,Qs=new jd,Io=new qa,sc=new F,Qp=new F;class oM extends Bt{constructor(e=new En,n=new S_){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)Ol.fromBufferAttribute(n,r-1),Bl.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=Ol.distanceTo(Bl);e.setAttribute("lineDistance",new Wt(i,1))}else Ie("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Io.copy(i.boundingSphere),Io.applyMatrix4(r),Io.radius+=s,e.ray.intersectsSphere(Io)===!1)return;jp.copy(r).invert(),Qs.copy(e.ray).applyMatrix4(jp);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,u=this.isLineSegments?2:1,h=i.index,f=i.attributes.position;if(h!==null){const p=Math.max(0,a.start),v=Math.min(h.count,a.start+a.count);for(let M=p,_=v-1;M<_;M+=u){const c=h.getX(M),d=h.getX(M+1),x=Uo(this,e,Qs,l,c,d,M);x&&n.push(x)}if(this.isLineLoop){const M=h.getX(v-1),_=h.getX(p),c=Uo(this,e,Qs,l,M,_,v-1);c&&n.push(c)}}else{const p=Math.max(0,a.start),v=Math.min(f.count,a.start+a.count);for(let M=p,_=v-1;M<_;M+=u){const c=Uo(this,e,Qs,l,M,M+1,M);c&&n.push(c)}if(this.isLineLoop){const M=Uo(this,e,Qs,l,v-1,p,v-1);M&&n.push(M)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Uo(t,e,n,i,r,s,a){const o=t.geometry.attributes.position;if(Ol.fromBufferAttribute(o,r),Bl.fromBufferAttribute(o,s),n.distanceSqToSegment(Ol,Bl,sc,Qp)>i)return;sc.applyMatrix4(t.matrixWorld);const u=e.ray.origin.distanceTo(sc);if(!(u<e.near||u>e.far))return{distance:u,point:Qp.clone().applyMatrix4(t.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:t}}const Jp=new F,em=new F;class lM extends oM{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)Jp.fromBufferAttribute(n,r),em.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Jp.distanceTo(em);e.setAttribute("lineDistance",new Wt(i,1))}else Ie("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class y_ extends zr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Qe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const tm=new dt,Vf=new jd,Fo=new qa,Oo=new F;class uM extends Bt{constructor(e=new En,n=new y_){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Fo.copy(i.boundingSphere),Fo.applyMatrix4(r),Fo.radius+=s,e.ray.intersectsSphere(Fo)===!1)return;tm.copy(r).invert(),Vf.copy(e.ray).applyMatrix4(tm);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,u=i.index,m=i.attributes.position;if(u!==null){const f=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let v=f,M=p;v<M;v++){const _=u.getX(v);Oo.fromBufferAttribute(m,_),nm(Oo,_,l,r,e,n,this)}}else{const f=Math.max(0,a.start),p=Math.min(m.count,a.start+a.count);for(let v=f,M=p;v<M;v++)Oo.fromBufferAttribute(m,v),nm(Oo,v,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function nm(t,e,n,i,r,s,a){const o=Vf.distanceSqToPoint(t);if(o<n){const l=new F;Vf.closestPointToPoint(t,l),l.applyMatrix4(i);const u=r.ray.origin.distanceTo(l);if(u<r.near||u>r.far)return;s.push({distance:u,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class M_ extends Jt{constructor(e=[],n=Cs,i,r,s,a,o,l,u,h){super(e,n,i,r,s,a,o,l,u,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class cM extends Jt{constructor(e,n,i,r,s,a,o,l,u){super(e,n,i,r,s,a,o,l,u),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ps extends Jt{constructor(e,n,i=fi,r,s,a,o=Gt,l=Gt,u,h=ur,m=1){if(h!==ur&&h!==Qi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:n,depth:m};super(f,r,s,a,o,l,h,i,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Zd(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return n.compareFunction=this.compareFunction,n}}class E_ extends Ps{constructor(e,n=fi,i=Cs,r,s,a=Gt,o=Gt,l,u=ur){const h={width:e,height:e,depth:1},m=[h,h,h,h,h,h];super(e,e,n,i,r,s,a,o,l,u),this.image=m,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class T_ extends Jt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Os extends En{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],u=[],h=[],m=[];let f=0,p=0;v("z","y","x",-1,-1,i,n,e,a,s,0),v("z","y","x",1,-1,i,n,-e,a,s,1),v("x","z","y",1,1,e,i,n,r,a,2),v("x","z","y",1,-1,e,i,-n,r,a,3),v("x","y","z",1,-1,e,n,i,r,s,4),v("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Wt(u,3)),this.setAttribute("normal",new Wt(h,3)),this.setAttribute("uv",new Wt(m,2));function v(M,_,c,d,x,S,A,w,g,T,D){const C=S/g,N=A/T,z=S/2,q=A/2,L=w/2,X=g+1,ee=T+1;let G=0,k=0;const U=new F;for(let V=0;V<ee;V++){const Z=V*N-q;for(let ae=0;ae<X;ae++){const Le=ae*C-z;U[M]=Le*d,U[_]=Z*x,U[c]=L,u.push(U.x,U.y,U.z),U[M]=0,U[_]=0,U[c]=w>0?1:-1,h.push(U.x,U.y,U.z),m.push(ae/g),m.push(1-V/T),G+=1}}for(let V=0;V<T;V++)for(let Z=0;Z<g;Z++){const ae=f+Z+X*V,Le=f+Z+X*(V+1),$=f+(Z+1)+X*(V+1),de=f+(Z+1)+X*V;l.push(ae,Le,de),l.push(Le,$,de),k+=6}o.addGroup(p,k,D),p+=k,f+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Os(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Jd extends En{constructor(e=[],n=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:r};const s=[],a=[];o(r),u(i),h(),this.setAttribute("position",new Wt(s,3)),this.setAttribute("normal",new Wt(s.slice(),3)),this.setAttribute("uv",new Wt(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(d){const x=new F,S=new F,A=new F;for(let w=0;w<n.length;w+=3)p(n[w+0],x),p(n[w+1],S),p(n[w+2],A),l(x,S,A,d)}function l(d,x,S,A){const w=A+1,g=[];for(let T=0;T<=w;T++){g[T]=[];const D=d.clone().lerp(S,T/w),C=x.clone().lerp(S,T/w),N=w-T;for(let z=0;z<=N;z++)z===0&&T===w?g[T][z]=D:g[T][z]=D.clone().lerp(C,z/N)}for(let T=0;T<w;T++)for(let D=0;D<2*(w-T)-1;D++){const C=Math.floor(D/2);D%2===0?(f(g[T][C+1]),f(g[T+1][C]),f(g[T][C])):(f(g[T][C+1]),f(g[T+1][C+1]),f(g[T+1][C]))}}function u(d){const x=new F;for(let S=0;S<s.length;S+=3)x.x=s[S+0],x.y=s[S+1],x.z=s[S+2],x.normalize().multiplyScalar(d),s[S+0]=x.x,s[S+1]=x.y,s[S+2]=x.z}function h(){const d=new F;for(let x=0;x<s.length;x+=3){d.x=s[x+0],d.y=s[x+1],d.z=s[x+2];const S=_(d)/2/Math.PI+.5,A=c(d)/Math.PI+.5;a.push(S,1-A)}v(),m()}function m(){for(let d=0;d<a.length;d+=6){const x=a[d+0],S=a[d+2],A=a[d+4],w=Math.max(x,S,A),g=Math.min(x,S,A);w>.9&&g<.1&&(x<.2&&(a[d+0]+=1),S<.2&&(a[d+2]+=1),A<.2&&(a[d+4]+=1))}}function f(d){s.push(d.x,d.y,d.z)}function p(d,x){const S=d*3;x.x=e[S+0],x.y=e[S+1],x.z=e[S+2]}function v(){const d=new F,x=new F,S=new F,A=new F,w=new Ye,g=new Ye,T=new Ye;for(let D=0,C=0;D<s.length;D+=9,C+=6){d.set(s[D+0],s[D+1],s[D+2]),x.set(s[D+3],s[D+4],s[D+5]),S.set(s[D+6],s[D+7],s[D+8]),w.set(a[C+0],a[C+1]),g.set(a[C+2],a[C+3]),T.set(a[C+4],a[C+5]),A.copy(d).add(x).add(S).divideScalar(3);const N=_(A);M(w,C+0,d,N),M(g,C+2,x,N),M(T,C+4,S,N)}}function M(d,x,S,A){A<0&&d.x===1&&(a[x]=d.x-1),S.x===0&&S.z===0&&(a[x]=A/2/Math.PI+.5)}function _(d){return Math.atan2(d.z,-d.x)}function c(d){return Math.atan2(-d.y,Math.sqrt(d.x*d.x+d.z*d.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jd(e.vertices,e.indices,e.radius,e.detail)}}class eh extends Jd{constructor(e=1,n=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,n),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new eh(e.radius,e.detail)}}class iu extends En{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),u=o+1,h=l+1,m=e/o,f=n/l,p=[],v=[],M=[],_=[];for(let c=0;c<h;c++){const d=c*f-a;for(let x=0;x<u;x++){const S=x*m-s;v.push(S,-d,0),M.push(0,0,1),_.push(x/o),_.push(1-c/l)}}for(let c=0;c<l;c++)for(let d=0;d<o;d++){const x=d+u*c,S=d+u*(c+1),A=d+1+u*(c+1),w=d+1+u*c;p.push(x,S,w),p.push(S,A,w)}this.setIndex(p),this.setAttribute("position",new Wt(v,3)),this.setAttribute("normal",new Wt(M,3)),this.setAttribute("uv",new Wt(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new iu(e.width,e.height,e.widthSegments,e.heightSegments)}}class th extends En{constructor(e=1,n=.4,i=12,r=48,s=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:r,arc:s,thetaStart:a,thetaLength:o},i=Math.floor(i),r=Math.floor(r);const l=[],u=[],h=[],m=[],f=new F,p=new F,v=new F;for(let M=0;M<=i;M++){const _=a+M/i*o;for(let c=0;c<=r;c++){const d=c/r*s;p.x=(e+n*Math.cos(_))*Math.cos(d),p.y=(e+n*Math.cos(_))*Math.sin(d),p.z=n*Math.sin(_),u.push(p.x,p.y,p.z),f.x=e*Math.cos(d),f.y=e*Math.sin(d),v.subVectors(p,f).normalize(),h.push(v.x,v.y,v.z),m.push(c/r),m.push(M/i)}}for(let M=1;M<=i;M++)for(let _=1;_<=r;_++){const c=(r+1)*M+_-1,d=(r+1)*(M-1)+_-1,x=(r+1)*(M-1)+_,S=(r+1)*M+_;l.push(c,d,S),l.push(d,x,S)}this.setIndex(l),this.setAttribute("position",new Wt(u,3)),this.setAttribute("normal",new Wt(h,3)),this.setAttribute("uv",new Wt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new th(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}function Ls(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];if(im(r))r.isRenderTargetTexture?(Ie("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone();else if(Array.isArray(r))if(im(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[n][i]=s}else e[n][i]=r.slice();else e[n][i]=r}}return e}function nn(t){const e={};for(let n=0;n<t.length;n++){const i=Ls(t[n]);for(const r in i)e[r]=i[r]}return e}function im(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function fM(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function w_(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:je.workingColorSpace}const dM={clone:Ls,merge:nn};var hM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,pM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Fr extends zr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=hM,this.fragmentShader=pM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ls(e.uniforms),this.uniformsGroups=fM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(const i in e.uniforms){const r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=n[r.value]||null;break;case"c":this.uniforms[i].value=new Qe().setHex(r.value);break;case"v2":this.uniforms[i].value=new Ye().fromArray(r.value);break;case"v3":this.uniforms[i].value=new F().fromArray(r.value);break;case"v4":this.uniforms[i].value=new xt().fromArray(r.value);break;case"m3":this.uniforms[i].value=new ke().fromArray(r.value);break;case"m4":this.uniforms[i].value=new dt().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class mM extends Fr{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class yr extends zr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Qe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Gf,this.normalScale=new Ye(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class gM extends zr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=cy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class _M extends zr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class nh extends Bt{static registerNode(e){this.prototype._lightNode=e}constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Qe(e),this.intensity=n}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}const ac=new dt,rm=new F,sm=new F;class A_{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ye(512,512),this.mapType=xn,this.map=null,this.mapPass=null,this.matrix=new dt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new za,this._frameExtents=new Ye(1,1),this._viewportCount=1,this._viewports=[new xt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera;rm.setFromMatrixPosition(e.matrixWorld),n.position.copy(rm),sm.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(sm),n.updateMatrixWorld(),this._updateMatrix(n,this.matrix,this._frustum)}_updateMatrix(e,n,i,r){ac.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(ac,e.coordinateSystem,e.reversedDepth);const s=this._frameExtents,a=r?r.z/s.x:1,o=r?r.w/s.y:1,l=r?r.x/s.x:0,u=r?r.y/s.y:0;e.coordinateSystem===Ba||e.reversedDepth?n.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+u,0,0,1,0,0,0,0,1):n.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+u,0,0,.5,.5,0,0,0,1),n.multiply(ac)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Bo=new F,ko=new Fs,ei=new F;class R_ extends Bt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new dt,this.projectionMatrix=new dt,this.projectionMatrixInverse=new dt,this.coordinateSystem=Kn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Bo,ko,ei),ei.x===1&&ei.y===1&&ei.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Bo,ko,ei.set(1,1,1)).invert()}updateWorldMatrix(e,n,i=!1){super.updateWorldMatrix(e,n,i),this.matrixWorld.decompose(Bo,ko,ei),ei.x===1&&ei.y===1&&ei.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Bo,ko,ei.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Gi=new F,am=new Ye,om=new Ye;class Un extends R_{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=ka*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ga*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ka*2*Math.atan(Math.tan(ga*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Gi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Gi.x,Gi.y).multiplyScalar(-e/Gi.z),Gi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Gi.x,Gi.y).multiplyScalar(-e/Gi.z)}getViewSize(e,n){return this.getViewBounds(e,am,om),n.subVectors(om,am)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(ga*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,u=a.fullHeight;s+=a.offsetX*r/l,n-=a.offsetY*i/u,r*=a.width/l,i*=a.height/u}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class vM extends A_{constructor(){super(new Un(90,1,.5,500)),this.isPointLightShadow=!0}}class xM extends nh{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new vM}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.distance=this.distance,n.object.decay=this.decay,n.object.shadow=this.shadow.toJSON(),n}}class C_ extends R_{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,a=s+u*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class SM extends A_{constructor(){super(new C_(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class lm extends nh{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Bt.DEFAULT_UP),this.updateMatrix(),this.target=new Bt,this.shadow=new SM}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}class yM extends nh{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}const Qr=-90,Jr=1;class Wf extends Bt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Un(Qr,Jr,e,n);r.layers=this.layers,this.add(r);const s=new Un(Qr,Jr,e,n);s.layers=this.layers,this.add(s);const a=new Un(Qr,Jr,e,n);a.layers=this.layers,this.add(a);const o=new Un(Qr,Jr,e,n);o.layers=this.layers,this.add(o);const l=new Un(Qr,Jr,e,n);l.layers=this.layers,this.add(l);const u=new Un(Qr,Jr,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,l]=n;for(const u of n)this.remove(u);if(e===Kn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ba)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,u,h]=this.children,m=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const M=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let _=!1;e.isWebGLRenderer===!0?_=e.state.buffers.depth.getReversed():_=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(n,s),e.setRenderTarget(i,1,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,2,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,3,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,4,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(n,u),i.texture.mipmapsAutoUpdate=M,e.setRenderTarget(i,5,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(n,h),e.setRenderTarget(m,f,p),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class MM extends Un{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}}class EM{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Ie("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=performance.now();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function um(t,e,n,i){const r=TM(i);switch(n){case r_:return t*e;case a_:return t*e/r.components*r.byteLength;case Xd:return t*e/r.components*r.byteLength;case Ur:return t*e*2/r.components*r.byteLength;case Yd:return t*e*2/r.components*r.byteLength;case s_:return t*e*3/r.components*r.byteLength;case ai:return t*e*4/r.components*r.byteLength;case qd:return t*e*4/r.components*r.byteLength;case tl:case nl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case il:case rl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case hf:case mf:return Math.max(t,16)*Math.max(e,8)/4;case df:case pf:return Math.max(t,8)*Math.max(e,8)/2;case gf:case _f:case xf:case Sf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case vf:case Dl:case yf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Mf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Ef:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Tf:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case wf:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Af:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Rf:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Cf:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case bf:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Pf:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Lf:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Df:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Nf:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case If:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Uf:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Ff:case Of:case Bf:return Math.ceil(t/4)*Math.ceil(e/4)*16;case kf:case zf:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Nl:case Hf:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function TM(t){switch(t){case xn:case e_:return{byteLength:1,components:1};case Oa:case t_:case di:return{byteLength:2,components:1};case Vd:case Wd:return{byteLength:2,components:4};case fi:case Gd:case si:return{byteLength:4,components:1};case n_:case i_:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:zd}}));typeof window<"u"&&(window.__THREE__?Ie("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=zd);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function b_(){let t=null,e=!1,n=null,i=null;function r(s,a){i=t.requestAnimationFrame(r),n(s,a)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function wM(t){const e=new WeakMap;function n(o,l){const u=o.array,h=o.usage,m=u.byteLength,f=t.createBuffer();t.bindBuffer(l,f),t.bufferData(l,u,h),o.onUploadCallback();let p;if(u instanceof Float32Array)p=t.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)p=t.HALF_FLOAT;else if(u instanceof Uint16Array)o.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(u instanceof Int16Array)p=t.SHORT;else if(u instanceof Uint32Array)p=t.UNSIGNED_INT;else if(u instanceof Int32Array)p=t.INT;else if(u instanceof Int8Array)p=t.BYTE;else if(u instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:f,type:p,bytesPerElement:u.BYTES_PER_ELEMENT,version:o.version,size:m}}function i(o,l,u){const h=l.array,m=l.updateRanges;if(t.bindBuffer(u,o),m.length===0)t.bufferSubData(u,0,h);else{m.sort((p,v)=>p.start-v.start);let f=0;for(let p=1;p<m.length;p++){const v=m[f],M=m[p];M.start<=v.start+v.count+1?v.count=Math.max(v.count,M.start+M.count-v.start):(++f,m[f]=M)}m.length=f+1;for(let p=0,v=m.length;p<v;p++){const M=m[p];t.bufferSubData(u,M.start*h.BYTES_PER_ELEMENT,h,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const u=e.get(o);if(u===void 0)e.set(o,n(o,l));else if(u.version<o.version){if(u.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,o,l),u.version=o.version}}return{get:r,remove:s,update:a}}var AM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,RM=`#ifdef USE_ALPHAHASH
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
#endif`,CM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,bM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,PM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,LM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,DM=`#ifdef USE_AOMAP
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
#endif`,NM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,IM=`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,UM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,FM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,OM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,BM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,kM=`#ifdef USE_IRIDESCENCE
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
#endif`,zM=`#ifdef USE_BUMPMAP
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
#endif`,HM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,GM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,VM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,WM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,XM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,YM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,qM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,$M=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,KM=`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,ZM=`vec3 transformedNormal = objectNormal;
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
#endif`,jM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,QM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,JM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,eE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,tE="gl_FragColor = linearToOutputTexel( gl_FragColor );",nE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,iE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,rE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,sE=`#ifdef USE_ENVMAP
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
#endif`,aE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,oE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,lE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,uE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,cE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,dE=`#ifdef USE_GRADIENTMAP
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
}`,hE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,pE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,mE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,gE=`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
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
#endif
#include <lightprobes_pars_fragment>`,_E=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,vE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,xE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,SE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,yE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ME=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,EE=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
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
		return 0.5 / max( gv + gl, EPSILON );
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
		float roughness = max( material.clearcoatRoughness, 0.045 );
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
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
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
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,TE=`
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
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
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
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,wE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,AE=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,RE=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,CE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,bE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,PE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,LE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,DE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,NE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,IE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,UE=`#if defined( USE_POINTS_UV )
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
#endif`,FE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,OE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,BE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,kE=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,zE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,HE=`#ifdef USE_MORPHTARGETS
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
#endif`,GE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,VE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,WE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,XE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,YE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,$E=`#ifdef USE_NORMALMAP
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
#endif`,KE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ZE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,jE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,QE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,JE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,e1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,t1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,n1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,i1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,r1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,s1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,a1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,o1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,l1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
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
#endif`,u1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,c1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,f1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,d1=`#ifdef USE_SKINNING
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
#endif`,h1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,p1=`#ifdef USE_SKINNING
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
#endif`,m1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,g1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,_1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,v1=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,x1=`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,S1=`#ifdef USE_TRANSMISSION
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
#endif`,y1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
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
#endif`,M1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
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
#endif`,E1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
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
#endif`,T1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const w1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,A1=`uniform sampler2D t2D;
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
}`,R1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,C1=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,b1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,P1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,L1=`#include <common>
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
}`,D1=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,N1=`#define DISTANCE
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
}`,I1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,U1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,F1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,O1=`uniform float scale;
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
}`,B1=`uniform vec3 diffuse;
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
}`,k1=`#include <common>
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
}`,z1=`uniform vec3 diffuse;
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
}`,H1=`#define LAMBERT
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
}`,G1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,V1=`#define MATCAP
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
}`,W1=`#define MATCAP
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
}`,X1=`#define NORMAL
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
}`,Y1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,q1=`#define PHONG
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
}`,$1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,K1=`#define STANDARD
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
}`,Z1=`#define STANDARD
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
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,j1=`#define TOON
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
}`,Q1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,J1=`uniform float size;
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
}`,eT=`uniform vec3 diffuse;
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
}`,tT=`#include <common>
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
}`,nT=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,iT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,rT=`uniform vec3 diffuse;
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
}`,We={alphahash_fragment:AM,alphahash_pars_fragment:RM,alphamap_fragment:CM,alphamap_pars_fragment:bM,alphatest_fragment:PM,alphatest_pars_fragment:LM,aomap_fragment:DM,aomap_pars_fragment:NM,batching_pars_vertex:IM,batching_vertex:UM,begin_vertex:FM,beginnormal_vertex:OM,bsdfs:BM,iridescence_fragment:kM,bumpmap_pars_fragment:zM,clipping_planes_fragment:HM,clipping_planes_pars_fragment:GM,clipping_planes_pars_vertex:VM,clipping_planes_vertex:WM,color_fragment:XM,color_pars_fragment:YM,color_pars_vertex:qM,color_vertex:$M,common:KM,defaultnormal_vertex:ZM,displacementmap_pars_vertex:jM,displacementmap_vertex:QM,emissivemap_fragment:JM,emissivemap_pars_fragment:eE,colorspace_fragment:tE,colorspace_pars_fragment:nE,envmap_fragment:iE,envmap_common_pars_fragment:rE,envmap_pars_fragment:sE,envmap_pars_vertex:aE,envmap_physical_pars_fragment:_E,envmap_vertex:oE,fog_vertex:lE,fog_pars_vertex:uE,fog_fragment:cE,fog_pars_fragment:fE,gradientmap_pars_fragment:dE,lightmap_pars_fragment:hE,lights_lambert_fragment:pE,lights_lambert_pars_fragment:mE,lights_pars_begin:gE,lights_toon_fragment:vE,lights_toon_pars_fragment:xE,lights_phong_fragment:SE,lights_phong_pars_fragment:yE,lights_physical_fragment:ME,lights_physical_pars_fragment:EE,lights_fragment_begin:TE,lights_fragment_maps:wE,lights_fragment_end:AE,lightprobes_pars_fragment:RE,logdepthbuf_fragment:CE,logdepthbuf_pars_fragment:bE,logdepthbuf_pars_vertex:PE,logdepthbuf_vertex:LE,map_fragment:DE,map_pars_fragment:NE,map_particle_fragment:IE,map_particle_pars_fragment:UE,metalnessmap_fragment:FE,metalnessmap_pars_fragment:OE,morphinstance_vertex:BE,morphcolor_vertex:kE,morphnormal_vertex:zE,morphtarget_pars_vertex:HE,morphtarget_vertex:GE,normal_fragment_begin:VE,normal_fragment_maps:WE,normal_pars_fragment:XE,normal_pars_vertex:YE,normal_vertex:qE,normalmap_pars_fragment:$E,clearcoat_normal_fragment_begin:KE,clearcoat_normal_fragment_maps:ZE,clearcoat_pars_fragment:jE,iridescence_pars_fragment:QE,opaque_fragment:JE,packing:e1,premultiplied_alpha_fragment:t1,project_vertex:n1,dithering_fragment:i1,dithering_pars_fragment:r1,roughnessmap_fragment:s1,roughnessmap_pars_fragment:a1,shadowmap_pars_fragment:o1,shadowmap_pars_vertex:l1,shadowmap_vertex:u1,shadowmask_pars_fragment:c1,skinbase_vertex:f1,skinning_pars_vertex:d1,skinning_vertex:h1,skinnormal_vertex:p1,specularmap_fragment:m1,specularmap_pars_fragment:g1,tonemapping_fragment:_1,tonemapping_pars_fragment:v1,transmission_fragment:x1,transmission_pars_fragment:S1,uv_pars_fragment:y1,uv_pars_vertex:M1,uv_vertex:E1,worldpos_vertex:T1,background_vert:w1,background_frag:A1,backgroundCube_vert:R1,backgroundCube_frag:C1,cube_vert:b1,cube_frag:P1,depth_vert:L1,depth_frag:D1,distance_vert:N1,distance_frag:I1,equirect_vert:U1,equirect_frag:F1,linedashed_vert:O1,linedashed_frag:B1,meshbasic_vert:k1,meshbasic_frag:z1,meshlambert_vert:H1,meshlambert_frag:G1,meshmatcap_vert:V1,meshmatcap_frag:W1,meshnormal_vert:X1,meshnormal_frag:Y1,meshphong_vert:q1,meshphong_frag:$1,meshphysical_vert:K1,meshphysical_frag:Z1,meshtoon_vert:j1,meshtoon_frag:Q1,points_vert:J1,points_frag:eT,shadow_vert:tT,shadow_frag:nT,sprite_vert:iT,sprite_frag:rT},xe={common:{diffuse:{value:new Qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ke}},envmap:{envMap:{value:null},envMapRotation:{value:new ke},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ke},normalScale:{value:new Ye(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0},uvTransform:{value:new ke}},sprite:{diffuse:{value:new Qe(16777215)},opacity:{value:1},center:{value:new Ye(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}}},ii={basic:{uniforms:nn([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.fog]),vertexShader:We.meshbasic_vert,fragmentShader:We.meshbasic_frag},lambert:{uniforms:nn([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new Qe(0)},envMapIntensity:{value:1}}]),vertexShader:We.meshlambert_vert,fragmentShader:We.meshlambert_frag},phong:{uniforms:nn([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new Qe(0)},specular:{value:new Qe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:We.meshphong_vert,fragmentShader:We.meshphong_frag},standard:{uniforms:nn([xe.common,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.roughnessmap,xe.metalnessmap,xe.fog,xe.lights,{emissive:{value:new Qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag},toon:{uniforms:nn([xe.common,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.gradientmap,xe.fog,xe.lights,{emissive:{value:new Qe(0)}}]),vertexShader:We.meshtoon_vert,fragmentShader:We.meshtoon_frag},matcap:{uniforms:nn([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,{matcap:{value:null}}]),vertexShader:We.meshmatcap_vert,fragmentShader:We.meshmatcap_frag},points:{uniforms:nn([xe.points,xe.fog]),vertexShader:We.points_vert,fragmentShader:We.points_frag},dashed:{uniforms:nn([xe.common,xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:We.linedashed_vert,fragmentShader:We.linedashed_frag},depth:{uniforms:nn([xe.common,xe.displacementmap]),vertexShader:We.depth_vert,fragmentShader:We.depth_frag},normal:{uniforms:nn([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,{opacity:{value:1}}]),vertexShader:We.meshnormal_vert,fragmentShader:We.meshnormal_frag},sprite:{uniforms:nn([xe.sprite,xe.fog]),vertexShader:We.sprite_vert,fragmentShader:We.sprite_frag},background:{uniforms:{uvTransform:{value:new ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:We.background_vert,fragmentShader:We.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ke}},vertexShader:We.backgroundCube_vert,fragmentShader:We.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:We.cube_vert,fragmentShader:We.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:We.equirect_vert,fragmentShader:We.equirect_frag},distance:{uniforms:nn([xe.common,xe.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:We.distance_vert,fragmentShader:We.distance_frag},shadow:{uniforms:nn([xe.lights,xe.fog,{color:{value:new Qe(0)},opacity:{value:1}}]),vertexShader:We.shadow_vert,fragmentShader:We.shadow_frag}};ii.physical={uniforms:nn([ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ke},clearcoatNormalScale:{value:new Ye(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ke},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new ke},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ke},sheen:{value:0},sheenColor:{value:new Qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ke},transmissionSamplerSize:{value:new Ye},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ke},attenuationDistance:{value:0},attenuationColor:{value:new Qe(0)},specularColor:{value:new Qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ke},anisotropyVector:{value:new Ye},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ke}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag};const zo={r:0,b:0,g:0},sT=new dt,P_=new ke;P_.set(-1,0,0,0,1,0,0,0,1);function aT(t,e,n,i,r,s){const a=new Qe(0);let o=r===!0?0:1,l,u,h=null,m=0,f=null;function p(d){let x=d.isScene===!0?d.background:null;if(x&&x.isTexture){const S=d.backgroundBlurriness>0;x=e.get(x,S)}return x}function v(d){let x=!1;const S=p(d);S===null?_(a,o):S&&S.isColor&&(_(S,1),x=!0);const A=t.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,s):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(t.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function M(d,x){const S=p(x);S&&S.isCubeTexture?(u===void 0&&(u=new ci(new Os(1,1,1),new Fr({name:"BackgroundCubeMaterial",uniforms:Ls(ii.backgroundCube.uniforms),vertexShader:ii.backgroundCube.vertexShader,fragmentShader:ii.backgroundCube.fragmentShader,side:pn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,w,g){this.matrixWorld.copyPosition(g.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=S,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(sT.makeRotationFromEuler(x.backgroundRotation)).transpose(),S.isRenderTargetTexture===!1&&u.material.uniforms.backgroundRotation.value.premultiply(P_),u.material.toneMapped=je.getTransfer(S.colorSpace)!==rt,(h!==S||m!==S.version||f!==t.toneMapping)&&(u.material.needsUpdate=!0,h=S,m=S.version,f=t.toneMapping),u.layers.enableAll(),d.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new ci(new iu(2,2),new Fr({name:"BackgroundMaterial",uniforms:Ls(ii.background.uniforms),vertexShader:ii.background.vertexShader,fragmentShader:ii.background.fragmentShader,side:Ir,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=je.getTransfer(S.colorSpace)!==rt,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||m!==S.version||f!==t.toneMapping)&&(l.material.needsUpdate=!0,h=S,m=S.version,f=t.toneMapping),l.layers.enableAll(),d.unshift(l,l.geometry,l.material,0,0,null))}function _(d,x){d.getRGB(zo,w_(t)),n.buffers.color.setClear(zo.r,zo.g,zo.b,x,s)}function c(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(d,x=1){a.set(d),o=x,_(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(d){o=d,_(a,o)},render:v,addToRenderList:M,dispose:c}}function oT(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,a=!1;function o(N,z,q,L,X){let ee=!1;const G=m(N,L,q,z);s!==G&&(s=G,u(s.object)),ee=p(N,L,q,X),ee&&v(N,L,q,X),X!==null&&e.update(X,t.ELEMENT_ARRAY_BUFFER),(ee||a)&&(a=!1,S(N,z,q,L),X!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function l(){return t.createVertexArray()}function u(N){return t.bindVertexArray(N)}function h(N){return t.deleteVertexArray(N)}function m(N,z,q,L){const X=L.wireframe===!0;let ee=i[z.id];ee===void 0&&(ee={},i[z.id]=ee);const G=N.isInstancedMesh===!0?N.id:0;let k=ee[G];k===void 0&&(k={},ee[G]=k);let U=k[q.id];U===void 0&&(U={},k[q.id]=U);let V=U[X];return V===void 0&&(V=f(l()),U[X]=V),V}function f(N){const z=[],q=[],L=[];for(let X=0;X<n;X++)z[X]=0,q[X]=0,L[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:q,attributeDivisors:L,object:N,attributes:{},index:null}}function p(N,z,q,L){const X=s.attributes,ee=z.attributes;let G=0;const k=q.getAttributes();for(const U in k)if(k[U].location>=0){const Z=X[U];let ae=ee[U];if(ae===void 0&&(U==="instanceMatrix"&&N.instanceMatrix&&(ae=N.instanceMatrix),U==="instanceColor"&&N.instanceColor&&(ae=N.instanceColor)),Z===void 0||Z.attribute!==ae||ae&&Z.data!==ae.data)return!0;G++}return s.attributesNum!==G||s.index!==L}function v(N,z,q,L){const X={},ee=z.attributes;let G=0;const k=q.getAttributes();for(const U in k)if(k[U].location>=0){let Z=ee[U];Z===void 0&&(U==="instanceMatrix"&&N.instanceMatrix&&(Z=N.instanceMatrix),U==="instanceColor"&&N.instanceColor&&(Z=N.instanceColor));const ae={};ae.attribute=Z,Z&&Z.data&&(ae.data=Z.data),X[U]=ae,G++}s.attributes=X,s.attributesNum=G,s.index=L}function M(){const N=s.newAttributes;for(let z=0,q=N.length;z<q;z++)N[z]=0}function _(N){c(N,0)}function c(N,z){const q=s.newAttributes,L=s.enabledAttributes,X=s.attributeDivisors;q[N]=1,L[N]===0&&(t.enableVertexAttribArray(N),L[N]=1),X[N]!==z&&(t.vertexAttribDivisor(N,z),X[N]=z)}function d(){const N=s.newAttributes,z=s.enabledAttributes;for(let q=0,L=z.length;q<L;q++)z[q]!==N[q]&&(t.disableVertexAttribArray(q),z[q]=0)}function x(N,z,q,L,X,ee,G){G===!0?t.vertexAttribIPointer(N,z,q,X,ee):t.vertexAttribPointer(N,z,q,L,X,ee)}function S(N,z,q,L){M();const X=L.attributes,ee=q.getAttributes(),G=z.defaultAttributeValues;for(const k in ee){const U=ee[k];if(U.location>=0){let V=X[k];if(V===void 0&&(k==="instanceMatrix"&&N.instanceMatrix&&(V=N.instanceMatrix),k==="instanceColor"&&N.instanceColor&&(V=N.instanceColor)),V!==void 0){const Z=V.normalized,ae=V.itemSize,Le=e.get(V);if(Le===void 0)continue;const $=Le.buffer,de=Le.type,Se=Le.bytesPerElement,be=de===t.INT||de===t.UNSIGNED_INT||V.gpuType===Gd;if(V.isInterleavedBufferAttribute){const _e=V.data,me=_e.isInterleavedBuffer===!0?_e.stride:_e.itemSize,Ue=V.offset;if(_e.isInstancedInterleavedBuffer||_e.isInstancedBufferAttribute){for(let ye=0;ye<U.locationSize;ye++)c(U.location+ye,_e.meshPerAttribute);N.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let ye=0;ye<U.locationSize;ye++)_(U.location+ye);t.bindBuffer(t.ARRAY_BUFFER,$);for(let ye=0;ye<U.locationSize;ye++)x(U.location+ye,ae/U.locationSize,de,Z,me*Se,(Ue+ae/U.locationSize*ye)*Se,be)}else{if(V.isInstancedBufferAttribute){for(let _e=0;_e<U.locationSize;_e++)c(U.location+_e,V.meshPerAttribute);N.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let _e=0;_e<U.locationSize;_e++)_(U.location+_e);t.bindBuffer(t.ARRAY_BUFFER,$);for(let _e=0;_e<U.locationSize;_e++)x(U.location+_e,ae/U.locationSize,de,Z,ae*Se,ae/U.locationSize*_e*Se,be)}}else if(G!==void 0){const Z=G[k];if(Z!==void 0)switch(Z.length){case 2:t.vertexAttrib2fv(U.location,Z);break;case 3:t.vertexAttrib3fv(U.location,Z);break;case 4:t.vertexAttrib4fv(U.location,Z);break;default:t.vertexAttrib1fv(U.location,Z)}}}}d()}function A(){D();for(const N in i){const z=i[N];for(const q in z){const L=z[q];for(const X in L){const ee=L[X];for(const G in ee)h(ee[G].object),delete ee[G];delete L[X]}}delete i[N]}}function w(N){if(i[N.id]===void 0)return;const z=i[N.id];for(const q in z){const L=z[q];for(const X in L){const ee=L[X];for(const G in ee)h(ee[G].object),delete ee[G];delete L[X]}}delete i[N.id]}function g(N){for(const z in i){const q=i[z];for(const L in q){const X=q[L];if(X[N.id]===void 0)continue;const ee=X[N.id];for(const G in ee)h(ee[G].object),delete ee[G];delete X[N.id]}}}function T(N){for(const z in i){const q=i[z],L=N.isInstancedMesh===!0?N.id:0,X=q[L];if(X!==void 0){for(const ee in X){const G=X[ee];for(const k in G)h(G[k].object),delete G[k];delete X[ee]}delete q[L],Object.keys(q).length===0&&delete i[z]}}}function D(){C(),a=!0,s!==r&&(s=r,u(s.object))}function C(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:D,resetDefaultState:C,dispose:A,releaseStatesOfGeometry:w,releaseStatesOfObject:T,releaseStatesOfProgram:g,initAttributes:M,enableAttribute:_,disableUnusedAttributes:d}}function lT(t,e,n){let i;function r(l){i=l}function s(l,u){t.drawArrays(i,l,u),n.update(u,i,1)}function a(l,u,h){h!==0&&(t.drawArraysInstanced(i,l,u,h),n.update(u,i,h))}function o(l,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,h);let f=0;for(let p=0;p<h;p++)f+=u[p];n.update(f,i,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function uT(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const g=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(g.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(g){return!(g!==ai&&i.convert(g)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(g){const T=g===di&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(g!==xn&&g!==si&&!T&&i.convert(g)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE))}function l(g){if(g==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";g="mediump"}return g==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=n.precision!==void 0?n.precision:"highp";const h=l(u);h!==u&&(Ie("WebGLRenderer:",u,"not supported, using",h,"instead."),u=h);const m=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=n.logarithmicDepthBuffer===!0&&m===!1;n.reversedDepthBuffer===!0&&m===!1&&Ie("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),n.logarithmicDepthBuffer===!0&&m===!0&&Ie("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=t.getParameter(t.MAX_TEXTURE_SIZE),_=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),c=t.getParameter(t.MAX_VERTEX_ATTRIBS),d=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),x=t.getParameter(t.MAX_VARYING_VECTORS),S=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),A=t.getParameter(t.MAX_SAMPLES),w=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:u,logarithmicDepthBuffer:f,reversedDepthBuffer:m,maxTextures:p,maxVertexTextures:v,maxTextureSize:M,maxCubemapSize:_,maxAttributes:c,maxVertexUniforms:d,maxVaryings:x,maxFragmentUniforms:S,maxSamples:A,samples:w}}function cT(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new Xi,o=new ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(m,f){const p=m.length!==0||f||i!==0||r;return r=f,i=m.length,p},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(m,f){n=h(m,f,0)},this.setState=function(m,f,p){const v=m.clippingPlanes,M=m.clipIntersection,_=m.clipShadows,c=t.get(m);if(!r||v===null||v.length===0||s&&!_)s?h(null):u();else{const d=s?0:i,x=d*4;let S=c.clippingState||null;l.value=S,S=h(v,f,x,p);for(let A=0;A!==x;++A)S[A]=n[A];c.clippingState=S,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=d}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(m,f,p,v){const M=m!==null?m.length:0;let _=null;if(M!==0){if(_=l.value,v!==!0||_===null){const c=p+M*4,d=f.matrixWorldInverse;o.getNormalMatrix(d),(_===null||_.length<c)&&(_=new Float32Array(c));for(let x=0,S=p;x!==M;++x,S+=4)a.copy(m[x]).applyMatrix4(d,o),a.normal.toArray(_,S),_[S+3]=a.constant}l.value=_,l.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,_}}class ih extends ui{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new M_(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Os(5,5,5),s=new Fr({name:"CubemapFromEquirect",uniforms:Ls(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:pn,blending:xs});s.uniforms.tEquirect.value=n;const a=new ci(r,s),o=n.minFilter;return n.minFilter===ji&&(n.minFilter=cn),new Wf(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}const cm=256,fT=3,dT=20,L_=256,D_=16,hT=3,pT=new F,mT=new Qe;class kl{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Wf(1,10,null),this._boxMesh=new ci(new Os(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){const{size:a=256,position:o=pT}=s,l=this._renderer;this._setSize(a);const u=this._allocateTarget(),h=this._getSourceTarget(!0);n>0&&(h.texture.mipmapsAutoUpdate=!1);const m=l.autoClear,f=l.autoClearColor,p=l.autoClearDepth,v=l.autoClearStencil,M=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,M===null&&(e.background=l.getClearColor(mT));const _=new Wf(i,r,h);return _.position.copy(o),_.update(l,e),l.autoClear=m,l.autoClearColor=f,l.autoClearDepth=p,l.autoClearStencil=v,e.background=M,n>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(u,n)),this._applyPMREM(u),u}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=hm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=dm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,n){return n>0?1-Math.sqrt(1-e/n):0}_setSize(e){this._cubeSize=Math.max(cm,f_(e))}_fromTexture(e,n){e.mapping===Cs||e.mapping===Fa?this._setSize(e.image.length===0?cm:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);const i=n||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(i),i}_allocateTarget(){const e=this._cubeSize,n=fm(e,!1,!1),i=Math.log2(e)-fT;for(let r=0;r<=i;r++)n.texture.mipmaps.push({width:e>>r,height:e>>r});return n.texture.name="PMREM",n.texture.isPMREMTexture=!0,n}_getSourceTarget(e=!1){const n=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==n||e&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=fm(n,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,n,i){const r=this._boxMesh,s=this._cubeCamera;r.material=i,s.renderTarget=e,s.activeMipmapLevel=n;const a=e.width>>n;e.viewport.set(0,0,a,a),s.update(this._renderer,r),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let n;e.mapping===Cs||e.mapping===Fa?(this._cubemapMaterial===null&&(this._cubemapMaterial=hm()),n=this._cubemapMaterial,n.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=dm()),n=this._equirectMaterial),n.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,n)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=gT(),this._integrationMaterial=_T());const n=this._cubeSize,i=e.texture.mipmaps.length-1,r=this._ggxMaterial.uniforms;r.envMap.value=this._sourceTarget.texture;const s=this._integrationMaterial.uniforms;s.envMap.value=this._sourceTarget.texture,s.sourceLod.value=Math.log2(n/D_);for(let a=0;a<=i;a++){const o=kl.lodToRoughness(a,i);if(a>i-hT)s.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{const l=o>0?Math.log2(n)+.5*Math.log2(6/(L_*Math.pow(o,4)))+.5:0;r.roughness.value=o,r.lodBias.value=l,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,n){this._blurMaterial===null&&(this._blurMaterial=vT());const i=this._blurMaterial,r=i.uniforms,s=this._sourceTarget;r.sigma.value=Math.min(n,Math.PI)/Math.SQRT2,r.envMap.value=s.texture,this._renderCube(e,0,i),r.envMap.value=e.texture,this._renderCube(s,0,i)}}function fm(t,e,n){return new ih(t,{minFilter:ji,generateMipmaps:e,type:di,colorSpace:Il,depthBuffer:n})}function $a(t,e,n){return new Fr({name:t,uniforms:e,vertexShader:We.cube_vert,fragmentShader:n,side:pn,blending:xs,depthTest:!1,depthWrite:!1})}function gT(){return $a("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${L_}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function _T(){return $a("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:D_}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function vT(){return $a("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${dT}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function dm(){return $a("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function hm(){return $a("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function xT(t){let e=new WeakMap,n=new WeakMap,i=null;function r(f,p=!1){return f==null?null:p?a(f):s(f)}function s(f){if(f&&f.isTexture){const p=f.mapping;if(p===Iu||p===Uu)if(e.has(f)){const v=e.get(f).texture;return o(v,f.mapping)}else{const v=f.image;if(v&&v.height>0){const M=new ih(v.height);return M.fromEquirectangularTexture(t,f),e.set(f,M),f.addEventListener("dispose",u),o(M.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture&&f.isPMREMTexture!==!0){const p=f.mapping,v=p===Iu||p===Uu,M=p===Cs||p===Fa;if(v||M){let _=n.get(f);const c=_!==void 0?_.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==c)return i===null&&(i=new kl(t)),_=v?i.fromEquirectangular(f,_):i.fromCubemap(f,_),_.texture.pmremVersion=f.pmremVersion,n.set(f,_),_.texture;if(_!==void 0)return _.texture;{const d=f.image;return v&&d&&d.height>0||M&&d&&l(d)?(i===null&&(i=new kl(t)),_=v?i.fromEquirectangular(f):i.fromCubemap(f),_.texture.pmremVersion=f.pmremVersion,n.set(f,_),f.addEventListener("dispose",h),_.texture):null}}}return f}function o(f,p){return p===Iu?f.mapping=Cs:p===Uu&&(f.mapping=Fa),f}function l(f){let p=0;const v=6;for(let M=0;M<v;M++)f[M]!==void 0&&p++;return p===v}function u(f){const p=f.target;p.removeEventListener("dispose",u);const v=e.get(p);v!==void 0&&(e.delete(p),v.dispose())}function h(f){const p=f.target;p.removeEventListener("dispose",h);const v=n.get(p);v!==void 0&&(n.delete(p),v.dispose())}function m(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:m}}function ST(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&sl("WebGLRenderer: "+i+" extension not supported."),r}}}function yT(t,e,n,i){const r={},s=new WeakMap,a=new FinalizationRegistry(v=>delete r[v]);function o(v){l(v.target)}function l(v){v.index!==null&&e.remove(v.index);for(const _ in v.attributes)e.remove(v.attributes[_]);v.removeEventListener("dispose",o),delete r[v.id],a.unregister(v);const M=s.get(v);M&&(e.remove(M),s.delete(v)),i.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,n.memory.geometries--}function u(v,M){return r[M.id]!==void 0||(M.addEventListener("dispose",o),r[M.id]=new WeakRef(M),a.register(M,M.id,M),n.memory.geometries++),M}function h(v){const M=v.attributes;for(const _ in M)e.update(M[_],t.ARRAY_BUFFER)}function m(v){const M=v.index,_=v.attributes.position;let c=0;if(_===void 0)return;const d=M!==null?M.array.length:_.array.length/3-1,x=_.count>=65535?v_:__,S=new x(Math.ceil(d/3)*6,1),A=S.array;if(M!==null){const g=M.array;c=M.version;for(let T=0,D=0;T<d;T+=3){const C=g[T+0],N=g[T+1],z=g[T+2];A[D++]=C,A[D++]=N,A[D++]=N,A[D++]=z,A[D++]=z,A[D++]=C}}else{c=_.version;for(let g=0,T=0;g<d;g+=3){const D=g+0,C=g+1,N=g+2;A[T++]=D,A[T++]=C,A[T++]=C,A[T++]=N,A[T++]=N,A[T++]=D}}S.version=c;const w=s.get(v);w&&e.remove(w),s.set(v,S)}function f(v){const M=s.get(v);if(M){const _=v.index;_!==null&&M.version<_.version&&m(v)}else m(v);return s.get(v)}function p(){for(const v in r){const M=r[v].deref();M!==void 0&&l(M)}}return{get:u,update:h,getWireframeAttribute:f,dispose:p}}function MT(t,e,n){let i;function r(m){i=m}let s,a;function o(m){s=m.type,a=m.bytesPerElement}function l(m,f){t.drawElements(i,f,s,m*a),n.update(f,i,1)}function u(m,f,p){p!==0&&(t.drawElementsInstanced(i,f,s,m*a,p),n.update(f,i,p))}function h(m,f,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,s,m,0,p);let M=0;for(let _=0;_<p;_++)M+=f[_];n.update(M,i,1)}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=h}function ET(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:nt("WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function TT(t,e,n){const i=new WeakMap,r=new xt;function s(a,o,l){const u=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,m=h!==void 0?h.length:0;let f=i.get(o);if(f===void 0||f.count!==m){let C=function(){T.dispose(),i.delete(o),o.removeEventListener("dispose",C)};var p=C;f!==void 0&&f.texture.dispose();const v=o.morphAttributes.position!==void 0,M=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,c=o.morphAttributes.position||[],d=o.morphAttributes.normal||[],x=o.morphAttributes.color||[];let S=0;v===!0&&(S=1),M===!0&&(S=2),_===!0&&(S=3);let A=o.attributes.position.count*S,w=1;A>e.maxTextureSize&&(w=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const g=new Float32Array(A*w*4*m),T=new p_(g,A,w,m);T.type=si,T.needsUpdate=!0;const D=S*4;for(let N=0;N<m;N++){const z=c[N],q=d[N],L=x[N],X=A*w*4*N;for(let ee=0;ee<z.count;ee++){const G=ee*D;v===!0&&(r.fromBufferAttribute(z,ee),g[X+G+0]=r.x,g[X+G+1]=r.y,g[X+G+2]=r.z,g[X+G+3]=0),M===!0&&(r.fromBufferAttribute(q,ee),g[X+G+4]=r.x,g[X+G+5]=r.y,g[X+G+6]=r.z,g[X+G+7]=0),_===!0&&(r.fromBufferAttribute(L,ee),g[X+G+8]=r.x,g[X+G+9]=r.y,g[X+G+10]=r.z,g[X+G+11]=L.itemSize===4?r.w:1)}}f={count:m,texture:T,size:new Ye(A,w)},i.set(o,f),o.addEventListener("dispose",C)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let v=0;for(let _=0;_<u.length;_++)v+=u[_];const M=o.morphTargetsRelative?1:1-v;l.getUniforms().setValue(t,"morphTargetBaseInfluence",M),l.getUniforms().setValue(t,"morphTargetInfluences",u)}l.getUniforms().setValue(t,"morphTargetsTexture",f.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",f.size)}return{update:s}}function wT(t,e,n,i,r){let s=new WeakMap;function a(u){const h=r.render.frame,m=u.geometry,f=e.get(u,m);if(s.get(f)!==h&&(e.update(f),s.set(f,h)),u.isInstancedMesh&&(u.hasEventListener("dispose",l)===!1&&u.addEventListener("dispose",l),s.get(u)!==h&&(n.update(u.instanceMatrix,t.ARRAY_BUFFER),u.instanceColor!==null&&n.update(u.instanceColor,t.ARRAY_BUFFER),s.set(u,h))),u.isSkinnedMesh){const p=u.skeleton;s.get(p)!==h&&(p.update(),s.set(p,h))}return f}function o(){s=new WeakMap}function l(u){const h=u.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),n.remove(h.instanceMatrix),h.instanceColor!==null&&n.remove(h.instanceColor)}return{update:a,dispose:o}}const AT={[q0]:"LINEAR_TONE_MAPPING",[$0]:"REINHARD_TONE_MAPPING",[K0]:"CINEON_TONE_MAPPING",[Hd]:"ACES_FILMIC_TONE_MAPPING",[j0]:"AGX_TONE_MAPPING",[Q0]:"NEUTRAL_TONE_MAPPING",[Z0]:"CUSTOM_TONE_MAPPING"};function RT(t,e,n,i,r,s){const a=new ui(e,n,{type:t,depthBuffer:r,stencilBuffer:s,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null,u=null;const h=new En;h.setAttribute("position",new Wt([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Wt([0,2,0,0,2,0],2));const m=new mM({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new ci(h,m),p=new C_(-1,1,1,-1,0,1);let v=null,M=null,_=!1,c,d=null,x=[],S=!1;this.setSize=function(A,w){a.setSize(A,w),o!==null&&o.setSize(A,w),l!==null&&l.setSize(A,w);for(let g=0;g<x.length;g++){const T=x[g];T.setSize&&T.setSize(A,w)}},this.setEffects=function(A){x=A,S=x.length>0&&x[0].isRenderPass===!0;const w=a.width,g=a.height;x.length>0&&o===null&&(o=new ui(w,g,{type:di,depthBuffer:!1,stencilBuffer:!1}),l=new ui(w,g,{type:di,depthBuffer:!1,stencilBuffer:!1}));const T=r===!0&&x.some(D=>D.needsDepthTexture===!0);T!==(a.depthTexture!==null)&&(T===!0&&u===null&&(u=new Ps(w,g),s===!0&&(u.format=Qi,u.type=bs)),a.dispose(),a.depthTexture=T?u:null,a.resolveDepthBuffer=T,a.storeMultisampledDepthBuffer=T);for(let D=0;D<x.length;D++){const C=x[D];C.setSize&&C.setSize(w,g),T&&C.needsDepthTexture===!0&&C.setDepthTexture&&C.setDepthTexture(u)}},this.begin=function(A,w){if(_||A.toneMapping===Ri&&x.length===0)return!1;if(d=w,w!==null){const g=w.width,T=w.height;(a.width!==g||a.height!==T)&&this.setSize(g,T)}return S===!1&&A.setRenderTarget(a),c=A.toneMapping,A.toneMapping=Ri,!0},this.hasRenderPass=function(){return S},this.end=function(A,w){A.toneMapping=c,_=!0;let g=a,T=o;for(let D=0;D<x.length;D++){const C=x[D];C.enabled!==!1&&(C.render(A,T,g,w),C.needsSwap!==!1&&(g=T,T=T===o?l:o))}if(v!==A.outputColorSpace||M!==A.toneMapping){v=A.outputColorSpace,M=A.toneMapping,m.defines={},je.getTransfer(v)===rt&&(m.defines.SRGB_TRANSFER="");const D=AT[M];D&&(m.defines[D]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=g.texture,A.setRenderTarget(d),A.render(f,p),d=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),m.dispose()}}const N_=new Jt,I_=new Ps(1,1),U_=new E_(1),F_=new p_,O_=new Vy,B_=new M_,pm=[],mm=[],gm=new Float32Array(16),_m=new Float32Array(9),vm=new Float32Array(4);function Bs(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=pm[r];if(s===void 0&&(s=new Float32Array(r),pm[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function Pt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Lt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function ru(t,e){let n=mm[e];n===void 0&&(n=new Int32Array(e),mm[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function CT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function bT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Pt(n,e))return;t.uniform2fv(this.addr,e),Lt(n,e)}}function PT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Pt(n,e))return;t.uniform3fv(this.addr,e),Lt(n,e)}}function LT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Pt(n,e))return;t.uniform4fv(this.addr,e),Lt(n,e)}}function DT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Pt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Lt(n,e)}else{if(Pt(n,i))return;vm.set(i),t.uniformMatrix2fv(this.addr,!1,vm),Lt(n,i)}}function NT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Pt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Lt(n,e)}else{if(Pt(n,i))return;_m.set(i),t.uniformMatrix3fv(this.addr,!1,_m),Lt(n,i)}}function IT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Pt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Lt(n,e)}else{if(Pt(n,i))return;gm.set(i),t.uniformMatrix4fv(this.addr,!1,gm),Lt(n,i)}}function UT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function FT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Pt(n,e))return;t.uniform2iv(this.addr,e),Lt(n,e)}}function OT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Pt(n,e))return;t.uniform3iv(this.addr,e),Lt(n,e)}}function BT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Pt(n,e))return;t.uniform4iv(this.addr,e),Lt(n,e)}}function kT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function zT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Pt(n,e))return;t.uniform2uiv(this.addr,e),Lt(n,e)}}function HT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Pt(n,e))return;t.uniform3uiv(this.addr,e),Lt(n,e)}}function GT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Pt(n,e))return;t.uniform4uiv(this.addr,e),Lt(n,e)}}function su(t){return t.version===0&&(t.compareFunction=u_,t.needsUpdate=!0),t}function VT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?s=su(I_):s=N_,n.setTexture2D(e||s,r)}function WT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||O_,r)}function XT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_CUBE_SHADOW?s=su(U_):s=B_,n.setTextureCube(e||s,r)}function YT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||F_,r)}function qT(t){switch(t){case 5126:return CT;case 35664:return bT;case 35665:return PT;case 35666:return LT;case 35674:return DT;case 35675:return NT;case 35676:return IT;case 5124:case 35670:return UT;case 35667:case 35671:return FT;case 35668:case 35672:return OT;case 35669:case 35673:return BT;case 5125:return kT;case 36294:return zT;case 36295:return HT;case 36296:return GT;case 35678:case 36198:case 36298:case 36306:case 35682:return VT;case 35679:case 36299:case 36307:return WT;case 35680:case 36300:case 36308:case 36293:return XT;case 36289:case 36303:case 36311:case 36292:return YT}}function $T(t,e){t.uniform1fv(this.addr,e)}function KT(t,e){const n=Bs(e,this.size,2);t.uniform2fv(this.addr,n)}function ZT(t,e){const n=Bs(e,this.size,3);t.uniform3fv(this.addr,n)}function jT(t,e){const n=Bs(e,this.size,4);t.uniform4fv(this.addr,n)}function QT(t,e){const n=Bs(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function JT(t,e){const n=Bs(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function ew(t,e){const n=Bs(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function tw(t,e){t.uniform1iv(this.addr,e)}function nw(t,e){t.uniform2iv(this.addr,e)}function iw(t,e){t.uniform3iv(this.addr,e)}function rw(t,e){t.uniform4iv(this.addr,e)}function sw(t,e){t.uniform1uiv(this.addr,e)}function aw(t,e){t.uniform2uiv(this.addr,e)}function ow(t,e){t.uniform3uiv(this.addr,e)}function lw(t,e){t.uniform4uiv(this.addr,e)}function uw(t,e,n){const i=this.cache,r=e.length,s=ru(n,r);Pt(i,s)||(t.uniform1iv(this.addr,s),Lt(i,s));let a;this.type===t.SAMPLER_2D_SHADOW?a=su(I_):a=N_;for(let o=0;o!==r;++o)n.setTexture2D(e[o]||a,s[o])}function cw(t,e,n){const i=this.cache,r=e.length,s=ru(n,r);Pt(i,s)||(t.uniform1iv(this.addr,s),Lt(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||O_,s[a])}function fw(t,e,n){const i=this.cache,r=e.length,s=ru(n,r);Pt(i,s)||(t.uniform1iv(this.addr,s),Lt(i,s));let a;this.type===t.SAMPLER_CUBE_SHADOW?a=su(U_):a=B_;for(let o=0;o!==r;++o)n.setTextureCube(e[o]||a,s[o])}function dw(t,e,n){const i=this.cache,r=e.length,s=ru(n,r);Pt(i,s)||(t.uniform1iv(this.addr,s),Lt(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||F_,s[a])}function hw(t){switch(t){case 5126:return $T;case 35664:return KT;case 35665:return ZT;case 35666:return jT;case 35674:return QT;case 35675:return JT;case 35676:return ew;case 5124:case 35670:return tw;case 35667:case 35671:return nw;case 35668:case 35672:return iw;case 35669:case 35673:return rw;case 5125:return sw;case 36294:return aw;case 36295:return ow;case 36296:return lw;case 35678:case 36198:case 36298:case 36306:case 35682:return uw;case 35679:case 36299:case 36307:return cw;case 35680:case 36300:case 36308:case 36293:return fw;case 36289:case 36303:case 36311:case 36292:return dw}}class pw{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=qT(n.type)}}class mw{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=hw(n.type)}}class gw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const oc=/(\w+)(\])?(\[|\.)?/g;function xm(t,e){t.seq.push(e),t.map[e.id]=e}function _w(t,e,n){const i=t.name,r=i.length;for(oc.lastIndex=0;;){const s=oc.exec(i),a=oc.lastIndex;let o=s[1];const l=s[2]==="]",u=s[3];if(l&&(o=o|0),u===void 0||u==="["&&a+2===r){xm(n,u===void 0?new pw(o,t,e):new mw(o,t,e));break}else{let m=n.map[o];m===void 0&&(m=new gw(o),xm(n,m)),n=m}}}class al{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(n,a),l=e.getUniformLocation(n,o.name);_w(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function Sm(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const vw=37297;let xw=0;function Sw(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}const ym=new ke;function yw(t){je._getMatrix(ym,je.workingColorSpace,t);const e=`mat3( ${ym.elements.map(n=>n.toFixed(4))} )`;switch(je.getTransfer(t)){case Ul:return[e,"LinearTransferOETF"];case rt:return[e,"sRGBTransferOETF"];default:return Ie("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Mm(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return n.toUpperCase()+`

`+s+`

`+Sw(t.getShaderSource(e),o)}else return s}function Mw(t,e){const n=yw(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( ${n[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const Ew={[q0]:"Linear",[$0]:"Reinhard",[K0]:"Cineon",[Hd]:"ACESFilmic",[j0]:"AgX",[Q0]:"Neutral",[Z0]:"Custom"};function Tw(t,e){const n=Ew[e];return n===void 0?(Ie("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Ho=new F;function ww(){je.getLuminanceCoefficients(Ho);const t=Ho.x.toFixed(4),e=Ho.y.toFixed(4),n=Ho.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Aw(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(sa).join(`
`)}function Rw(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function Cw(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function sa(t){return t!==""}function Em(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Tm(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const bw=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xf(t){return t.replace(bw,Pw)}function Pw(t,e){const n=We[e];if(n===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Xf(n)}const Lw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function wm(t){return t.replace(Lw,Dw)}function Dw(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Am(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const Nw={[el]:"SHADOWMAP_TYPE_PCF",[ra]:"SHADOWMAP_TYPE_VSM"};function Iw(t){return Nw[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Uw={[Fa]:"ENVMAP_MODE_REFRACTION"};function Fw(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":Uw[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Ow={[Y0]:"ENVMAP_BLENDING_MULTIPLY",[oy]:"ENVMAP_BLENDING_MIX",[ly]:"ENVMAP_BLENDING_ADD"};function Bw(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":Ow[t.combine]||"ENVMAP_BLENDING_NONE"}function kw(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=Iw(n),u=n.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=Fw(n),m=Bw(n),f=Aw(n),p=Rw(s),v=r.createProgram();let M,_,c=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(M=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,p].filter(sa).join(`
`),M.length>0&&(M+=`
`),_=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,p].filter(sa).join(`
`),_.length>0&&(_+=`
`)):(M=[Am(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,p,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+n.diffuseRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(sa).join(`
`),_=[Am(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,p,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+h:"",n.envMap?"#define "+m:"",n.envMapPMREM?"#define ENVMAP_MAX_LOD "+n.envMapMaxLod+".0":"",n.envMapPMREM?"#define ENVMAP_SIZE "+n.envMapSize+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",n.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.retroreflection?"#define USE_RETROREFLECTION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Ri?"#define TONE_MAPPING":"",n.toneMapping!==Ri?We.tonemapping_pars_fragment:"",n.toneMapping!==Ri?Tw("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",We.colorspace_pars_fragment,Mw("linearToOutputTexel",n.outputColorSpace),ww(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(sa).join(`
`)),a=Xf(a),a=Em(a,n),a=Tm(a,n),o=Xf(o),o=Em(o,n),o=Tm(o,n),a=wm(a),o=wm(o),n.isRawShaderMaterial!==!0&&(c=`#version 300 es
`,M=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,_=["#define varying in",n.glslVersion===Dp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Dp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const d=c+M+a,x=c+_+o,S=Sm(r,r.VERTEX_SHADER,d),A=Sm(r,r.FRAGMENT_SHADER,x);r.attachShader(v,S),r.attachShader(v,A),n.index0AttributeName!==void 0?r.bindAttribLocation(v,0,n.index0AttributeName):n.hasPositionAttribute===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function w(C){if(t.debug.checkShaderErrors){const N=r.getProgramInfoLog(v)||"",z=r.getShaderInfoLog(S)||"",q=r.getShaderInfoLog(A)||"",L=N.trim(),X=z.trim(),ee=q.trim();let G=!0,k=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(G=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,v,S,A);else{const U=Mm(r,S,"vertex"),V=Mm(r,A,"fragment");nt("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+L+`
`+U+`
`+V)}else L!==""?Ie("WebGLProgram: Program Info Log:",L):(X===""||ee==="")&&(k=!1);k&&(C.diagnostics={runnable:G,programLog:L,vertexShader:{log:X,prefix:M},fragmentShader:{log:ee,prefix:_}})}r.deleteShader(S),r.deleteShader(A),g=new al(r,v),T=Cw(r,v)}let g;this.getUniforms=function(){return g===void 0&&w(this),g};let T;this.getAttributes=function(){return T===void 0&&w(this),T};let D=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=r.getProgramParameter(v,vw)),D},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=xw++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=S,this.fragmentShader=A,this}let zw=0;class Hw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,i){const r=this._getShaderCacheForMaterial(e);return r.has(n)===!1&&(r.add(n),n.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new Gw(e),n.set(e,i)),i}}class Gw{constructor(e){this.id=zw++,this.code=e,this.usedTimes=0}}function Vw(t){return t===Ur||t===Dl||t===Nl}function Ww(t,e,n,i,r,s){const a=new m_,o=new Hw,l=new Set,u=[],h=new Map,m=i.logarithmicDepthBuffer,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(g){return l.add(g),g===0?"uv":`uv${g}`}function v(g,T,D,C,N,z){const q=C.fog,L=N.geometry,X=g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial?C.environment:null,ee=g.isMeshStandardMaterial||g.isMeshLambertMaterial&&!g.envMap||g.isMeshPhongMaterial&&!g.envMap,G=e.get(g.envMap||X,ee),k=f[g.type];let U=i.precision;g.precision!==null&&(U=i.getMaxPrecision(g.precision),U!==g.precision&&Ie("WebGLProgram.getParameters:",g.precision,"not supported, using",U,"instead."));const V=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,Z=V!==void 0?V.length:0;let ae=0;L.morphAttributes.position!==void 0&&(ae=1),L.morphAttributes.normal!==void 0&&(ae=2),L.morphAttributes.color!==void 0&&(ae=3);let Le,$,de,Se;if(k){const ve=ii[k];Le=ve.vertexShader,$=ve.fragmentShader}else{Le=g.vertexShader,$=g.fragmentShader;const ve=o.getVertexShaderStage(g),it=o.getFragmentShaderStage(g);o.update(g,ve,it),de=ve.id,Se=it.id}const be=t.getRenderTarget(),_e=t.state.buffers.depth.getReversed(),me=N.isInstancedMesh===!0,Ue=N.isBatchedMesh===!0,ye=!!g.map,Fe=!!g.matcap,Ee=!!G,Oe=Ee&&G.isPMREMTexture===!0,He=!!g.aoMap,gt=!!g.lightMap,kt=!!g.bumpMap&&g.wireframe===!1,ot=!!g.normalMap,An=!!g.displacementMap,Dt=!!g.emissiveMap,Rn=!!g.metalnessMap,Cn=!!g.roughnessMap,bn=g.anisotropy>0,I=g.clearcoat>0,Pn=g.diffuseRoughness>0,ht=g.dispersion>0,pt=g.retroreflectivity>0,ge=g.iridescence>0,Rt=g.sheen>0,Ne=g.transmission>0,Be=bn&&!!g.anisotropyMap,R=I&&!!g.clearcoatMap,y=I&&!!g.clearcoatNormalMap,B=I&&!!g.clearcoatRoughnessMap,ne=Pn&&!!g.diffuseRoughnessMap,te=ge&&!!g.iridescenceMap,oe=ge&&!!g.iridescenceThicknessMap,he=Rt&&!!g.sheenColorMap,K=Rt&&!!g.sheenRoughnessMap,j=!!g.specularMap,ue=!!g.specularColorMap,b=!!g.specularIntensityMap,Q=Ne&&!!g.transmissionMap,Y=Ne&&!!g.thicknessMap,ce=!!g.gradientMap,se=!!g.alphaMap,le=g.alphaTest>0,Pe=!!g.alphaHash,Ve=!!g.extensions;let re=Ri;g.toneMapped&&(be===null||be.isXRRenderTarget===!0)&&(re=t.toneMapping);const De=Oe?G.isCompressedCubeTexture?G.image[0].mipmaps:G.mipmaps:null,Ge={shaderID:k,shaderType:g.type,shaderName:g.name,vertexShader:Le,fragmentShader:$,defines:g.defines,customVertexShaderID:de,customFragmentShaderID:Se,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:U,batching:Ue,batchingColor:Ue&&N._colorsTexture!==null,instancing:me,instancingColor:me&&N.instanceColor!==null,instancingMorph:me&&N.morphTexture!==null,outputColorSpace:be===null?t.outputColorSpace:be.isXRRenderTarget===!0?be.texture.colorSpace:je.workingColorSpace,alphaToCoverage:!!g.alphaToCoverage,map:ye,matcap:Fe,envMap:Ee,envMapMode:Ee&&G.mapping,envMapPMREM:Oe,envMapMaxLod:Oe?De.length-1:null,envMapSize:Oe?De[0].width:null,aoMap:He,lightMap:gt,bumpMap:kt,normalMap:ot,displacementMap:An,emissiveMap:Dt,normalMapObjectSpace:ot&&g.normalMapType===fy,normalMapTangentSpace:ot&&g.normalMapType===Gf,packedNormalMap:ot&&g.normalMapType===Gf&&Vw(g.normalMap.format),metalnessMap:Rn,roughnessMap:Cn,anisotropy:bn,anisotropyMap:Be,clearcoat:I,clearcoatMap:R,clearcoatNormalMap:y,clearcoatRoughnessMap:B,diffuseRoughness:Pn,diffuseRoughnessMap:ne,dispersion:ht,retroreflection:pt,iridescence:ge,iridescenceMap:te,iridescenceThicknessMap:oe,sheen:Rt,sheenColorMap:he,sheenRoughnessMap:K,specularMap:j,specularColorMap:ue,specularIntensityMap:b,transmission:Ne,transmissionMap:Q,thicknessMap:Y,gradientMap:ce,opaque:g.transparent===!1&&g.blending===ma&&g.alphaToCoverage===!1,alphaMap:se,alphaTest:le,alphaHash:Pe,combine:g.combine,mapUv:ye&&p(g.map.channel),aoMapUv:He&&p(g.aoMap.channel),lightMapUv:gt&&p(g.lightMap.channel),bumpMapUv:kt&&p(g.bumpMap.channel),normalMapUv:ot&&p(g.normalMap.channel),displacementMapUv:An&&p(g.displacementMap.channel),emissiveMapUv:Dt&&p(g.emissiveMap.channel),metalnessMapUv:Rn&&p(g.metalnessMap.channel),roughnessMapUv:Cn&&p(g.roughnessMap.channel),anisotropyMapUv:Be&&p(g.anisotropyMap.channel),clearcoatMapUv:R&&p(g.clearcoatMap.channel),clearcoatNormalMapUv:y&&p(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:B&&p(g.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ne&&p(g.diffuseRoughnessMap.channel),iridescenceMapUv:te&&p(g.iridescenceMap.channel),iridescenceThicknessMapUv:oe&&p(g.iridescenceThicknessMap.channel),sheenColorMapUv:he&&p(g.sheenColorMap.channel),sheenRoughnessMapUv:K&&p(g.sheenRoughnessMap.channel),specularMapUv:j&&p(g.specularMap.channel),specularColorMapUv:ue&&p(g.specularColorMap.channel),specularIntensityMapUv:b&&p(g.specularIntensityMap.channel),transmissionMapUv:Q&&p(g.transmissionMap.channel),thicknessMapUv:Y&&p(g.thicknessMap.channel),alphaMapUv:se&&p(g.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(ot||bn),vertexNormals:!!L.attributes.normal,vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!L.attributes.uv&&(ye||se),fog:!!q,useFog:g.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:g.wireframe===!1&&(g.flatShading===!0||L.attributes.normal===void 0&&ot===!1&&(g.isMeshLambertMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isMeshPhysicalMaterial)),sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:m,reversedDepthBuffer:_e,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:L.attributes.position!==void 0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:Z,morphTextureStride:ae,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:z.filter(ve=>ve.texture!==null).length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:g.dithering,shadowMapEnabled:t.shadowMap.enabled&&D.length>0,shadowMapType:t.shadowMap.type,toneMapping:re,decodeVideoTexture:ye&&g.map.isVideoTexture===!0&&je.getTransfer(g.map.colorSpace)===rt,decodeVideoTextureEmissive:Dt&&g.emissiveMap.isVideoTexture===!0&&je.getTransfer(g.emissiveMap.colorSpace)===rt,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===Mi,flipSided:g.side===pn,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:Ve&&g.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ve&&g.extensions.multiDraw===!0||Ue)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return Ge.vertexUv1s=l.has(1),Ge.vertexUv2s=l.has(2),Ge.vertexUv3s=l.has(3),l.clear(),Ge}function M(g){const T=[];if(g.shaderID?T.push(g.shaderID):(T.push(g.customVertexShaderID),T.push(g.customFragmentShaderID)),g.defines!==void 0)for(const D in g.defines)T.push(D),T.push(g.defines[D]);return g.isRawShaderMaterial===!1&&(_(T,g),c(T,g),T.push(t.outputColorSpace)),T.push(g.customProgramCacheKey),T.join()}function _(g,T){g.push(T.precision),g.push(T.outputColorSpace),g.push(T.envMapMode),g.push(T.envMapPMREM),g.push(T.envMapMaxLod),g.push(T.envMapSize),g.push(T.mapUv),g.push(T.alphaMapUv),g.push(T.lightMapUv),g.push(T.aoMapUv),g.push(T.bumpMapUv),g.push(T.normalMapUv),g.push(T.displacementMapUv),g.push(T.emissiveMapUv),g.push(T.metalnessMapUv),g.push(T.roughnessMapUv),g.push(T.anisotropyMapUv),g.push(T.clearcoatMapUv),g.push(T.clearcoatNormalMapUv),g.push(T.clearcoatRoughnessMapUv),g.push(T.diffuseRoughnessMapUv),g.push(T.iridescenceMapUv),g.push(T.iridescenceThicknessMapUv),g.push(T.sheenColorMapUv),g.push(T.sheenRoughnessMapUv),g.push(T.specularMapUv),g.push(T.specularColorMapUv),g.push(T.specularIntensityMapUv),g.push(T.transmissionMapUv),g.push(T.thicknessMapUv),g.push(T.combine),g.push(T.fogExp2),g.push(T.sizeAttenuation),g.push(T.morphTargetsCount),g.push(T.numSunLights),g.push(T.numDirLights),g.push(T.numPointLights),g.push(T.numSpotLights),g.push(T.numSpotLightMaps),g.push(T.numHemiLights),g.push(T.numRectAreaLights),g.push(T.numSunLightShadows),g.push(T.numDirLightShadows),g.push(T.numPointLightShadows),g.push(T.numSpotLightShadows),g.push(T.numSpotLightShadowsWithMaps),g.push(T.numLightProbes),g.push(T.numLightProbeGrids),g.push(T.shadowMapType),g.push(T.toneMapping),g.push(T.numClippingPlanes),g.push(T.numClipIntersection),g.push(T.depthPacking)}function c(g,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.retroreflection&&a.enable(24),T.diffuseRoughness&&a.enable(25),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),T.packedNormalMap&&a.enable(22),T.vertexNormals&&a.enable(23),g.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),T.numLightProbeGrids>0&&a.enable(22),T.hasPositionAttribute&&a.enable(23),g.push(a.mask)}function d(g){const T=f[g.type];let D;if(T){const C=ii[T];D=dM.clone(C.uniforms)}else D=g.uniforms;return D}function x(g,T){let D=h.get(T);return D!==void 0?++D.usedTimes:(D=new kw(t,T,g,r),u.push(D),h.set(T,D)),D}function S(g){if(--g.usedTimes===0){const T=u.indexOf(g);u[T]=u[u.length-1],u.pop(),h.delete(g.cacheKey),g.destroy()}}function A(g){o.remove(g)}function w(){o.dispose()}return{getParameters:v,getProgramCacheKey:M,getUniforms:d,acquireProgram:x,releaseProgram:S,releaseShaderCache:A,programs:u,dispose:w}}function Xw(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function i(a){t.delete(a)}function r(a,o,l){t.get(a)[o]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function Yw(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function Rm(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Cm(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(f){let p=0;return f.isInstancedMesh&&(p+=2),f.isSkinnedMesh&&(p+=1),p}function o(f,p,v,M,_,c){let d=t[e];return d===void 0?(d={id:f.id,object:f,geometry:p,material:v,materialVariant:a(f),groupOrder:M,renderOrder:f.renderOrder,z:_,group:c},t[e]=d):(d.id=f.id,d.object=f,d.geometry=p,d.material=v,d.materialVariant=a(f),d.groupOrder=M,d.renderOrder=f.renderOrder,d.z=_,d.group=c),e++,d}function l(f,p,v,M,_,c,d){d.reversedDepth===!0&&(_=-_);const x=o(f,p,v,M,_,c);v.transmission>0?i.push(x):v.transparent===!0?r.push(x):n.push(x)}function u(f,p,v,M,_,c){const d=o(f,p,v,M,_,c);v.transmission>0?i.unshift(d):v.transparent===!0?r.unshift(d):n.unshift(d)}function h(f,p){n.length>1&&n.sort(f||Yw),i.length>1&&i.sort(p||Rm),r.length>1&&r.sort(p||Rm)}function m(){for(let f=e,p=t.length;f<p;f++){const v=t[f];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:l,unshift:u,finish:m,sort:h}}function qw(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new Cm,t.set(i,[a])):r>=s.length?(a=new Cm,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function $w(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={direction:new F,color:new Qe};break;case"SpotLight":n={position:new F,direction:new F,color:new Qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new F,color:new Qe,distance:0,decay:0};break;case"HemisphereLight":n={direction:new F,skyColor:new Qe,groundColor:new Qe};break;case"RectAreaLight":n={color:new Qe,position:new F,halfWidth:new F,halfHeight:new F};break}return t[e.id]=n,n}}}function Kw(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let Zw=0;function jw(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function Qw(t){const e=new $w,n=Kw(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new F);const r=new F,s=new dt,a=new dt;function o(u){let h=0,m=0,f=0;for(let z=0;z<9;z++)i.probe[z].set(0,0,0);let p=0,v=0,M=0,_=0,c=0,d=0,x=0,S=0,A=0,w=0,g=0,T=0,D=0,C=0;u.sort(jw);for(let z=0,q=u.length;z<q;z++){const L=u[z],X=L.color,ee=L.intensity,G=L.distance;let k=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===Ur?k=L.shadow.map.texture:k=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)h+=X.r*ee,m+=X.g*ee,f+=X.b*ee;else if(L.isLightProbe){for(let U=0;U<9;U++)i.probe[U].addScaledVector(L.sh.coefficients[U],ee);C++}else if(L.isSunLight){const U=e.get(L);if(U.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const V=L.shadow,Z=n.get(L);Z.shadowIntensity=V.intensity,Z.shadowBias=V.bias,Z.shadowNormalBias=V.normalBias,Z.shadowRadius=V.radius,Z.shadowMapSize.copy(V.mapSize).multiply(V.getFrameExtents()),i.sunShadow[v]=Z,i.sunShadowMap[v]=k;const ae=V.getViewportCount();for(let Le=0;Le<ae;Le++)i.sunShadowMatrix[M+Le]=V.getMatrix(Le),i.sunShadowCascade[M+Le]=V._cascadeData[Le];M+=ae,v++}i.sun[p]=U,p++}else if(L.isDirectionalLight){const U=e.get(L);if(U.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const V=L.shadow,Z=n.get(L);Z.shadowIntensity=V.intensity,Z.shadowBias=V.bias,Z.shadowNormalBias=V.normalBias,Z.shadowRadius=V.radius,Z.shadowMapSize=V.mapSize,i.directionalShadow[_]=Z,i.directionalShadowMap[_]=k,i.directionalShadowMatrix[_]=L.shadow.matrix,A++}i.directional[_]=U,_++}else if(L.isSpotLight){const U=e.get(L);U.position.setFromMatrixPosition(L.matrixWorld),U.color.copy(X).multiplyScalar(ee),U.distance=G,U.coneCos=Math.cos(L.angle),U.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),U.decay=L.decay,i.spot[d]=U;const V=L.shadow;if(L.map&&(i.spotLightMap[T]=L.map,T++,V.updateMatrices(L),L.castShadow&&D++),i.spotLightMatrix[d]=V.matrix,L.castShadow){const Z=n.get(L);Z.shadowIntensity=V.intensity,Z.shadowBias=V.bias,Z.shadowNormalBias=V.normalBias,Z.shadowRadius=V.radius,Z.shadowMapSize=V.mapSize,i.spotShadow[d]=Z,i.spotShadowMap[d]=k,g++}d++}else if(L.isRectAreaLight){const U=e.get(L);U.color.copy(X).multiplyScalar(ee),U.halfWidth.set(L.width*.5,0,0),U.halfHeight.set(0,L.height*.5,0),i.rectArea[x]=U,x++}else if(L.isPointLight){const U=e.get(L);if(U.color.copy(L.color).multiplyScalar(L.intensity),U.distance=L.distance,U.decay=L.decay,L.castShadow){const V=L.shadow,Z=n.get(L);Z.shadowIntensity=V.intensity,Z.shadowBias=V.bias,Z.shadowNormalBias=V.normalBias,Z.shadowRadius=V.radius,Z.shadowMapSize=V.mapSize,Z.shadowCameraNear=V.camera.near,Z.shadowCameraFar=V.camera.far,i.pointShadow[c]=Z,i.pointShadowMap[c]=k,i.pointShadowMatrix[c]=L.shadow.matrix,w++}i.point[c]=U,c++}else if(L.isHemisphereLight){const U=e.get(L);U.skyColor.copy(L.color).multiplyScalar(ee),U.groundColor.copy(L.groundColor).multiplyScalar(ee),i.hemi[S]=U,S++}}x>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=xe.LTC_FLOAT_1,i.rectAreaLTC2=xe.LTC_FLOAT_2):(i.rectAreaLTC1=xe.LTC_HALF_1,i.rectAreaLTC2=xe.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=m,i.ambient[2]=f;const N=i.hash;(N.sunLength!==p||N.directionalLength!==_||N.pointLength!==c||N.spotLength!==d||N.rectAreaLength!==x||N.hemiLength!==S||N.numSunShadows!==v||N.numDirectionalShadows!==A||N.numPointShadows!==w||N.numSpotShadows!==g||N.numSpotMaps!==T||N.numLightProbes!==C)&&(i.sun.length=p,i.directional.length=_,i.spot.length=d,i.rectArea.length=x,i.point.length=c,i.hemi.length=S,i.sunShadow.length=v,i.sunShadowMap.length=v,i.sunShadowMatrix.length=M,i.sunShadowCascade.length=M,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.directionalShadowMatrix.length=A,i.pointShadow.length=w,i.pointShadowMap.length=w,i.pointShadowMatrix.length=w,i.spotShadow.length=g,i.spotShadowMap.length=g,i.spotLightMatrix.length=g+T-D,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=D,i.numLightProbes=C,N.sunLength=p,N.directionalLength=_,N.pointLength=c,N.spotLength=d,N.rectAreaLength=x,N.hemiLength=S,N.numSunShadows=v,N.numDirectionalShadows=A,N.numPointShadows=w,N.numSpotShadows=g,N.numSpotMaps=T,N.numLightProbes=C,i.version=Zw++)}function l(u,h){let m=0,f=0,p=0,v=0,M=0,_=0;const c=h.matrixWorldInverse;for(let d=0,x=u.length;d<x;d++){const S=u[d];if(S.isSunLight){const A=i.sun[m];A.direction.setFromMatrixPosition(S.matrixWorld),A.direction.transformDirection(c),m++}else if(S.isDirectionalLight){const A=i.directional[f];A.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(c),f++}else if(S.isSpotLight){const A=i.spot[v];A.position.setFromMatrixPosition(S.matrixWorld),A.position.applyMatrix4(c),A.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(c),v++}else if(S.isRectAreaLight){const A=i.rectArea[M];A.position.setFromMatrixPosition(S.matrixWorld),A.position.applyMatrix4(c),a.identity(),s.copy(S.matrixWorld),s.premultiply(c),a.extractRotation(s),A.halfWidth.set(S.width*.5,0,0),A.halfHeight.set(0,S.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),M++}else if(S.isPointLight){const A=i.point[p];A.position.setFromMatrixPosition(S.matrixWorld),A.position.applyMatrix4(c),p++}else if(S.isHemisphereLight){const A=i.hemi[_];A.direction.setFromMatrixPosition(S.matrixWorld),A.direction.transformDirection(c),_++}}}return{setup:o,setupView:l,state:i}}function bm(t){const e=new Qw(t),n=[],i=[],r=[];function s(m){h.camera=m,n.length=0,i.length=0,r.length=0}function a(m){m.isLightProbeGrid?r.push(m):n.push(m)}function o(m){i.push(m)}function l(){e.setup(n),r.sort((m,f)=>m.priority-f.priority||m.id-f.id)}function u(m){e.setupView(n,m)}const h={lightsArray:n,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:h,setupLights:l,setupLightsView:u,pushLight:a,pushShadow:o}}function Jw(t){let e=new WeakMap;function n(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new bm(t),e.set(r,[o])):s>=a.length?(o=new bm(t),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:n,dispose:i}}const eA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,tA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,nA=[new F(1,0,0),new F(-1,0,0),new F(0,1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1)],iA=[new F(0,-1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1),new F(0,-1,0),new F(0,-1,0)],Pm=new dt,Js=new F,lc=new F;function rA(t,e,n){let i=new za;const r=new Ye,s=new Ye,a=new xt,o=new gM,l=new _M,u={},h=n.maxTextureSize,m={[Ir]:pn,[pn]:Ir,[Mi]:Mi},f=new Fr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ye},radius:{value:4}},vertexShader:eA,fragmentShader:tA}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const v=new En;v.setAttribute("position",new bi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new ci(v,f),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=el;let c=this.type;this.render=function(w,g,T){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||w.length===0)return;this.type===GS&&(Ie("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=el);const D=t.getRenderTarget(),C=t.getActiveCubeFace(),N=t.getActiveMipmapLevel(),z=t.state;z.setBlending(xs),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const q=c!==this.type;q&&g.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(X=>X.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,X=w.length;L<X;L++){const ee=w[L],G=ee.shadow;if(G===void 0){Ie("WebGLShadowMap:",ee,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;r.copy(G.mapSize);const k=G.getFrameExtents();r.multiply(k),s.copy(G.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/k.x),r.x=s.x*k.x,G.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/k.y),r.y=s.y*k.y,G.mapSize.y=s.y));const U=t.state.buffers.depth.getReversed();if(G.camera._reversedDepth=U,G.map===null||q===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===ra){if(ee.isPointLight){Ie("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new ui(r.x,r.y,{format:Ur,type:di,minFilter:cn,magFilter:cn,generateMipmaps:!1}),G.map.texture.name=ee.name+".shadowMap",G.map.depthTexture=new Ps(r.x,r.y,si),G.map.depthTexture.name=ee.name+".shadowMapDepth",G.map.depthTexture.format=ur,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Gt,G.map.depthTexture.magFilter=Gt}else ee.isPointLight?(G.map=new ih(r.x),G.map.depthTexture=new E_(r.x,fi)):(G.map=new ui(r.x,r.y),G.map.depthTexture=new Ps(r.x,r.y,fi)),G.map.depthTexture.name=ee.name+".shadowMap",G.map.depthTexture.format=ur,this.type===el?(G.map.depthTexture.compareFunction=U?l_:o_,G.map.depthTexture.minFilter=cn,G.map.depthTexture.magFilter=cn):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Gt,G.map.depthTexture.magFilter=Gt);G.camera.updateProjectionMatrix()}G.map.isWebGLCubeRenderTarget!==!0&&(G.map.width!==r.x||G.map.height!==r.y)&&G.map.setSize(r.x,r.y);const V=G.map.isWebGLCubeRenderTarget?6:G.getViewportCount();ee.isPointLight!==!0&&G.updateMatrices(ee,T);const Z=G.camera.layers.mask&4294967294?G.camera.layers:T.layers;for(let ae=0;ae<V;ae++){const Le=G.getCamera(ae);if(ee.isPointLight){const $=G.camera,de=G.matrix,Se=ee.distance||$.far;Se!==$.far&&($.far=Se,$.updateProjectionMatrix()),Js.setFromMatrixPosition(ee.matrixWorld),$.position.copy(Js),lc.copy($.position),lc.add(nA[ae]),$.up.copy(iA[ae]),$.lookAt(lc),$.updateMatrixWorld(),de.makeTranslation(-Js.x,-Js.y,-Js.z),Pm.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),G._frustum.setFromProjectionMatrix(Pm,$.coordinateSystem,$.reversedDepth)}if(G.map.isWebGLCubeRenderTarget)t.setRenderTarget(G.map,ae),t.clear();else{ae===0&&(t.setRenderTarget(G.map),t.clear());const $=G.getViewport(ae);a.set(s.x*$.x,s.y*$.y,s.x*$.z,s.y*$.w),z.viewport(a)}i=G.getFrustum(ae),S(g,T,Le,ee,Z,this.type)}G.isPointLightShadow!==!0&&this.type===ra&&d(G,T),G.needsUpdate=!1}c=this.type,_.needsUpdate=!1,t.setRenderTarget(D,C,N)};function d(w,g){const T=e.update(M);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null?w.mapPass=new ui(r.x,r.y,{format:Ur,type:di}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),f.uniforms.shadow_pass.value=w.map.depthTexture,f.uniforms.resolution.value.set(w.map.width,w.map.height),f.uniforms.radius.value=w.radius,t.setRenderTarget(w.mapPass),t.clear(),t.renderBufferDirect(g,null,T,f,M,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value.set(w.map.width,w.map.height),p.uniforms.radius.value=w.radius,t.setRenderTarget(w.map),t.clear(),t.renderBufferDirect(g,null,T,p,M,null)}function x(w,g,T,D){let C=null;const N=T.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(N!==void 0)C=N;else if(C=T.isPointLight===!0?l:o,t.localClippingEnabled&&g.clipShadows===!0&&Array.isArray(g.clippingPlanes)&&g.clippingPlanes.length!==0||g.displacementMap&&g.displacementScale!==0||g.alphaMap&&g.alphaTest>0||g.map&&g.alphaTest>0||g.alphaToCoverage===!0){const z=C.uuid,q=g.uuid;let L=u[z];L===void 0&&(L={},u[z]=L);let X=L[q];X===void 0&&(X=C.clone(),L[q]=X,g.addEventListener("dispose",A)),C=X}if(C.visible=g.visible,C.wireframe=g.wireframe,D===ra?C.side=g.shadowSide!==null?g.shadowSide:g.side:C.side=g.shadowSide!==null?g.shadowSide:m[g.side],C.alphaMap=g.alphaMap,C.alphaTest=g.alphaToCoverage===!0?.5:g.alphaTest,C.map=g.map,C.clipShadows=g.clipShadows,C.clippingPlanes=g.clippingPlanes,C.clipIntersection=g.clipIntersection,C.displacementMap=g.displacementMap,C.displacementScale=g.displacementScale,C.displacementBias=g.displacementBias,C.wireframeLinewidth=g.wireframeLinewidth,C.linewidth=g.linewidth,T.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const z=t.properties.get(C);z.light=T}return C}function S(w,g,T,D,C,N){if(w.visible===!1)return;if(w.layers.test(C)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&N===ra)&&(!w.frustumCulled||w.intersectsFrustum(i))){w.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,w.matrixWorld);const L=e.update(w),X=w.material;if(Array.isArray(X)){const ee=L.groups;for(let G=0,k=ee.length;G<k;G++){const U=ee[G],V=X[U.materialIndex];if(V&&V.visible){const Z=x(w,V,D,N);w.onBeforeShadow(t,w,g,T,L,Z,U),t.renderBufferDirect(T,null,L,Z,w,U),w.onAfterShadow(t,w,g,T,L,Z,U)}}}else if(X.visible){const ee=x(w,X,D,N);w.onBeforeShadow(t,w,g,T,L,ee,null),t.renderBufferDirect(T,null,L,ee,w,null),w.onAfterShadow(t,w,g,T,L,ee,null)}}const q=w.children;for(let L=0,X=q.length;L<X;L++)S(q[L],g,T,D,C,N)}function A(w){w.target.removeEventListener("dispose",A);for(const T in u){const D=u[T],C=w.target.uuid;C in D&&(D[C].dispose(),delete D[C])}}}function sA(t,e){function n(){let b=!1;const Q=new xt;let Y=null;const ce=new xt(0,0,0,0);return{setMask:function(se){Y!==se&&!b&&(t.colorMask(se,se,se,se),Y=se)},setLocked:function(se){b=se},setClear:function(se,le,Pe,Ve,re){re===!0&&(se*=Ve,le*=Ve,Pe*=Ve),Q.set(se,le,Pe,Ve),ce.equals(Q)===!1&&(t.clearColor(se,le,Pe,Ve),ce.copy(Q))},reset:function(){b=!1,Y=null,ce.set(-1,0,0,0)}}}function i(){let b=!1,Q=!1,Y=null,ce=null,se=null;return{setReversed:function(le){if(Q!==le){const Pe=e.get("EXT_clip_control");le?Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.ZERO_TO_ONE_EXT):Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.NEGATIVE_ONE_TO_ONE_EXT),Q=le;const Ve=se;se=null,this.setClear(Ve)}},getReversed:function(){return Q},setTest:function(le){le?_e(t.DEPTH_TEST):me(t.DEPTH_TEST)},setMask:function(le){Y!==le&&!b&&(t.depthMask(le),Y=le)},setFunc:function(le){if(Q&&(le=My[le]),ce!==le){switch(le){case nf:t.depthFunc(t.NEVER);break;case rf:t.depthFunc(t.ALWAYS);break;case sf:t.depthFunc(t.LESS);break;case Ua:t.depthFunc(t.LEQUAL);break;case af:t.depthFunc(t.EQUAL);break;case of:t.depthFunc(t.GEQUAL);break;case lf:t.depthFunc(t.GREATER);break;case uf:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ce=le}},setLocked:function(le){b=le},setClear:function(le){se!==le&&(se=le,Q&&(le=1-le),t.clearDepth(le))},reset:function(){b=!1,Y=null,ce=null,se=null,Q=!1}}}function r(){let b=!1,Q=null,Y=null,ce=null,se=null,le=null,Pe=null,Ve=null,re=null;return{setTest:function(De){b||(De?_e(t.STENCIL_TEST):me(t.STENCIL_TEST))},setMask:function(De){Q!==De&&!b&&(t.stencilMask(De),Q=De)},setFunc:function(De,Ge,ve){(Y!==De||ce!==Ge||se!==ve)&&(t.stencilFunc(De,Ge,ve),Y=De,ce=Ge,se=ve)},setOp:function(De,Ge,ve){(le!==De||Pe!==Ge||Ve!==ve)&&(t.stencilOp(De,Ge,ve),le=De,Pe=Ge,Ve=ve)},setLocked:function(De){b=De},setClear:function(De){re!==De&&(t.clearStencil(De),re=De)},reset:function(){b=!1,Q=null,Y=null,ce=null,se=null,le=null,Pe=null,Ve=null,re=null}}}const s=new n,a=new i,o=new r;let l={};const u=new WeakMap;let h={},m={},f={},p=new WeakMap,v=[],M=null,_=!1,c=null,d=null,x=null,S=null,A=null,w=null,g=null,T=new Qe(0,0,0),D=0,C=!1,N=null,z=null,q=null,L=null,X=null;const ee=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,k=0;const U=t.getParameter(t.VERSION);U.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(U)[1]),G=k>=1):U.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(U)[1]),G=k>=2);let V=null,Z={};const ae=t.getParameter(t.SCISSOR_BOX),Le=t.getParameter(t.VIEWPORT),$=new xt().fromArray(ae),de=new xt().fromArray(Le);function Se(b,Q,Y,ce){const se=new Uint8Array(4),le=t.createTexture();t.bindTexture(b,le),t.texParameteri(b,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(b,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Pe=0;Pe<Y;Pe++)b===t.TEXTURE_3D||b===t.TEXTURE_2D_ARRAY?t.texImage3D(Q,0,t.RGBA,1,1,ce,0,t.RGBA,t.UNSIGNED_BYTE,se):t.texImage2D(Q+Pe,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,se);return le}const be={};be[t.TEXTURE_2D]=Se(t.TEXTURE_2D,t.TEXTURE_2D,1),be[t.TEXTURE_CUBE_MAP]=Se(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),be[t.TEXTURE_2D_ARRAY]=Se(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),be[t.TEXTURE_3D]=Se(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),_e(t.DEPTH_TEST),a.setFunc(Ua),kt(!1),ot(bp),_e(t.CULL_FACE),He(xs);function _e(b){h[b]!==!0&&(t.enable(b),h[b]=!0)}function me(b){h[b]!==!1&&(t.disable(b),h[b]=!1)}function Ue(b,Q){return f[b]!==Q?(t.bindFramebuffer(b,Q),f[b]=Q,b===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=Q),b===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=Q),!0):!1}function ye(b,Q){let Y=v,ce=!1;if(b){Y=p.get(Q),Y===void 0&&(Y=[],p.set(Q,Y));const se=b.textures;if(Y.length!==se.length||Y[0]!==t.COLOR_ATTACHMENT0){for(let le=0,Pe=se.length;le<Pe;le++)Y[le]=t.COLOR_ATTACHMENT0+le;Y.length=se.length,ce=!0}}else Y[0]!==t.BACK&&(Y[0]=t.BACK,ce=!0);ce&&t.drawBuffers(Y)}function Fe(b){return M!==b?(t.useProgram(b),M=b,!0):!1}const Ee={[es]:t.FUNC_ADD,[WS]:t.FUNC_SUBTRACT,[XS]:t.FUNC_REVERSE_SUBTRACT};Ee[YS]=t.MIN,Ee[qS]=t.MAX;const Oe={[$S]:t.ZERO,[KS]:t.ONE,[ZS]:t.SRC_COLOR,[W0]:t.SRC_ALPHA,[ny]:t.SRC_ALPHA_SATURATE,[ey]:t.DST_COLOR,[QS]:t.DST_ALPHA,[jS]:t.ONE_MINUS_SRC_COLOR,[X0]:t.ONE_MINUS_SRC_ALPHA,[ty]:t.ONE_MINUS_DST_COLOR,[JS]:t.ONE_MINUS_DST_ALPHA,[iy]:t.CONSTANT_COLOR,[ry]:t.ONE_MINUS_CONSTANT_COLOR,[sy]:t.CONSTANT_ALPHA,[ay]:t.ONE_MINUS_CONSTANT_ALPHA};function He(b,Q,Y,ce,se,le,Pe,Ve,re,De){if(b===xs){_===!0&&(me(t.BLEND),_=!1);return}if(_===!1&&(_e(t.BLEND),_=!0),b!==VS){if(b!==c||De!==C){if((d!==es||A!==es)&&(t.blendEquation(t.FUNC_ADD),d=es,A=es),De)switch(b){case ma:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Ll:t.blendFunc(t.ONE,t.ONE);break;case Pp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Lp:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:nt("WebGLState: Invalid blending: ",b);break}else switch(b){case ma:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Ll:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case Pp:nt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Lp:nt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:nt("WebGLState: Invalid blending: ",b);break}x=null,S=null,w=null,g=null,T.set(0,0,0),D=0,c=b,C=De}return}se=se||Q,le=le||Y,Pe=Pe||ce,(Q!==d||se!==A)&&(t.blendEquationSeparate(Ee[Q],Ee[se]),d=Q,A=se),(Y!==x||ce!==S||le!==w||Pe!==g)&&(t.blendFuncSeparate(Oe[Y],Oe[ce],Oe[le],Oe[Pe]),x=Y,S=ce,w=le,g=Pe),(Ve.equals(T)===!1||re!==D)&&(t.blendColor(Ve.r,Ve.g,Ve.b,re),T.copy(Ve),D=re),c=b,C=!1}function gt(b,Q){b.side===Mi?me(t.CULL_FACE):_e(t.CULL_FACE);let Y=b.side===pn;Q&&(Y=!Y),kt(Y),b.blending===ma&&b.transparent===!1?He(xs):He(b.blending,b.blendEquation,b.blendSrc,b.blendDst,b.blendEquationAlpha,b.blendSrcAlpha,b.blendDstAlpha,b.blendColor,b.blendAlpha,b.premultipliedAlpha),a.setFunc(b.depthFunc),a.setTest(b.depthTest),a.setMask(b.depthWrite),s.setMask(b.colorWrite);const ce=b.stencilWrite;o.setTest(ce),ce&&(o.setMask(b.stencilWriteMask),o.setFunc(b.stencilFunc,b.stencilRef,b.stencilFuncMask),o.setOp(b.stencilFail,b.stencilZFail,b.stencilZPass)),Dt(b.polygonOffset,b.polygonOffsetFactor,b.polygonOffsetUnits),b.alphaToCoverage===!0?_e(t.SAMPLE_ALPHA_TO_COVERAGE):me(t.SAMPLE_ALPHA_TO_COVERAGE)}function kt(b){N!==b&&(b?t.frontFace(t.CW):t.frontFace(t.CCW),N=b)}function ot(b){b!==zS?(_e(t.CULL_FACE),b!==z&&(b===bp?t.cullFace(t.BACK):b===HS?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):me(t.CULL_FACE),z=b}function An(b){b!==q&&(G&&t.lineWidth(b),q=b)}function Dt(b,Q,Y){b?(_e(t.POLYGON_OFFSET_FILL),(L!==Q||X!==Y)&&(L=Q,X=Y,a.getReversed()&&(Q=-Q,Y=-Y),t.polygonOffset(Q,Y))):me(t.POLYGON_OFFSET_FILL)}function Rn(b){b?_e(t.SCISSOR_TEST):me(t.SCISSOR_TEST)}function Cn(b){b===void 0&&(b=t.TEXTURE0+ee-1),V!==b&&(t.activeTexture(b),V=b)}function bn(b,Q,Y){Y===void 0&&(V===null?Y=t.TEXTURE0+ee-1:Y=V);let ce=Z[Y];ce===void 0&&(ce={type:void 0,texture:void 0},Z[Y]=ce),(ce.type!==b||ce.texture!==Q)&&(V!==Y&&(t.activeTexture(Y),V=Y),t.bindTexture(b,Q||be[b]),ce.type=b,ce.texture=Q)}function I(){const b=Z[V];b!==void 0&&b.type!==void 0&&(t.bindTexture(b.type,null),b.type=void 0,b.texture=void 0)}function Pn(){try{t.compressedTexImage2D(...arguments)}catch(b){nt("WebGLState:",b)}}function ht(){try{t.compressedTexImage3D(...arguments)}catch(b){nt("WebGLState:",b)}}function pt(){try{t.texSubImage2D(...arguments)}catch(b){nt("WebGLState:",b)}}function ge(){try{t.texSubImage3D(...arguments)}catch(b){nt("WebGLState:",b)}}function Rt(){try{t.compressedTexSubImage2D(...arguments)}catch(b){nt("WebGLState:",b)}}function Ne(){try{t.compressedTexSubImage3D(...arguments)}catch(b){nt("WebGLState:",b)}}function Be(){try{t.texStorage2D(...arguments)}catch(b){nt("WebGLState:",b)}}function R(){try{t.texStorage3D(...arguments)}catch(b){nt("WebGLState:",b)}}function y(){try{t.texImage2D(...arguments)}catch(b){nt("WebGLState:",b)}}function B(){try{t.texImage3D(...arguments)}catch(b){nt("WebGLState:",b)}}function ne(b){return m[b]!==void 0?m[b]:t.getParameter(b)}function te(b,Q){m[b]!==Q&&(t.pixelStorei(b,Q),m[b]=Q)}function oe(b){$.equals(b)===!1&&(t.scissor(b.x,b.y,b.z,b.w),$.copy(b))}function he(b){de.equals(b)===!1&&(t.viewport(b.x,b.y,b.z,b.w),de.copy(b))}function K(b,Q){let Y=u.get(Q);Y===void 0&&(Y=new WeakMap,u.set(Q,Y));let ce=Y.get(b);ce===void 0&&(ce=t.getUniformBlockIndex(Q,b.name),t.uniformBlockBinding(Q,ce,ce),Y.set(b,ce))}function j(b,Q,Y){const se=u.get(Q).get(b);l[se]!==Y&&(t.bindBufferBase(t.UNIFORM_BUFFER,se,Y),l[se]=Y)}function ue(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),a.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),h={},m={},V=null,Z={},f={},l={},p=new WeakMap,v=[],M=null,_=!1,c=null,d=null,x=null,S=null,A=null,w=null,g=null,T=new Qe(0,0,0),D=0,C=!1,N=null,z=null,q=null,L=null,X=null,$.set(0,0,t.canvas.width,t.canvas.height),de.set(0,0,t.canvas.width,t.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:_e,disable:me,bindFramebuffer:Ue,drawBuffers:ye,useProgram:Fe,setBlending:He,setMaterial:gt,setFlipSided:kt,setCullFace:ot,setLineWidth:An,setPolygonOffset:Dt,setScissorTest:Rn,activeTexture:Cn,bindTexture:bn,unbindTexture:I,compressedTexImage2D:Pn,compressedTexImage3D:ht,texImage2D:y,texImage3D:B,pixelStorei:te,getParameter:ne,updateUBOMapping:K,uniformBlockBinding:j,texStorage2D:Be,texStorage3D:R,texSubImage2D:pt,texSubImage3D:ge,compressedTexSubImage2D:Rt,compressedTexSubImage3D:Ne,scissor:oe,viewport:he,reset:ue}}function aA(t,e,n,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Ye,h=new WeakMap,m=new Set;let f;const p=new WeakMap,v=new Set,M=new FinalizationRegistry(R=>v.delete(R));let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function c(R,y){return _?new OffscreenCanvas(R,y):Fl("canvas")}function d(R,y,B){let ne=1;const te=Be(R);if((te.width>B||te.height>B)&&(ne=B/Math.max(te.width,te.height)),ne<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const oe=Math.floor(ne*te.width),he=Math.floor(ne*te.height);f===void 0&&(f=c(oe,he));const K=y?c(oe,he):f;return K.width=oe,K.height=he,K.getContext("2d").drawImage(R,0,0,oe,he),Ie("WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+oe+"x"+he+")."),K}else return"data"in R&&Ie("WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),R;return R}function x(R){return R.generateMipmaps}function S(R){t.generateMipmap(R)}function A(R){return R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?t.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function w(R,y,B,ne,te,oe=!1){if(R!==null){if(t[R]!==void 0)return t[R];Ie("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let he;ne&&(he=e.get("EXT_texture_norm16"),he||Ie("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let K=y;if(y===t.RED&&(B===t.FLOAT&&(K=t.R32F),B===t.HALF_FLOAT&&(K=t.R16F),B===t.UNSIGNED_BYTE&&(K=t.R8),B===t.UNSIGNED_SHORT&&he&&(K=he.R16_EXT),B===t.SHORT&&he&&(K=he.R16_SNORM_EXT)),y===t.RED_INTEGER&&(B===t.UNSIGNED_BYTE&&(K=t.R8UI),B===t.UNSIGNED_SHORT&&(K=t.R16UI),B===t.UNSIGNED_INT&&(K=t.R32UI),B===t.BYTE&&(K=t.R8I),B===t.SHORT&&(K=t.R16I),B===t.INT&&(K=t.R32I)),y===t.RG&&(B===t.FLOAT&&(K=t.RG32F),B===t.HALF_FLOAT&&(K=t.RG16F),B===t.UNSIGNED_BYTE&&(K=t.RG8),B===t.UNSIGNED_SHORT&&he&&(K=he.RG16_EXT),B===t.SHORT&&he&&(K=he.RG16_SNORM_EXT)),y===t.RG_INTEGER&&(B===t.UNSIGNED_BYTE&&(K=t.RG8UI),B===t.UNSIGNED_SHORT&&(K=t.RG16UI),B===t.UNSIGNED_INT&&(K=t.RG32UI),B===t.BYTE&&(K=t.RG8I),B===t.SHORT&&(K=t.RG16I),B===t.INT&&(K=t.RG32I)),y===t.RGB_INTEGER&&(B===t.UNSIGNED_BYTE&&(K=t.RGB8UI),B===t.UNSIGNED_SHORT&&(K=t.RGB16UI),B===t.UNSIGNED_INT&&(K=t.RGB32UI),B===t.BYTE&&(K=t.RGB8I),B===t.SHORT&&(K=t.RGB16I),B===t.INT&&(K=t.RGB32I)),y===t.RGBA_INTEGER&&(B===t.UNSIGNED_BYTE&&(K=t.RGBA8UI),B===t.UNSIGNED_SHORT&&(K=t.RGBA16UI),B===t.UNSIGNED_INT&&(K=t.RGBA32UI),B===t.BYTE&&(K=t.RGBA8I),B===t.SHORT&&(K=t.RGBA16I),B===t.INT&&(K=t.RGBA32I)),y===t.RGB&&(B===t.UNSIGNED_SHORT&&he&&(K=he.RGB16_EXT),B===t.SHORT&&he&&(K=he.RGB16_SNORM_EXT),B===t.UNSIGNED_INT_5_9_9_9_REV&&(K=t.RGB9_E5),B===t.UNSIGNED_INT_10F_11F_11F_REV&&(K=t.R11F_G11F_B10F)),y===t.RGBA){const j=oe?Ul:je.getTransfer(te);B===t.FLOAT&&(K=t.RGBA32F),B===t.HALF_FLOAT&&(K=t.RGBA16F),B===t.UNSIGNED_BYTE&&(K=j===rt?t.SRGB8_ALPHA8:t.RGBA8),B===t.UNSIGNED_SHORT&&he&&(K=he.RGBA16_EXT),B===t.SHORT&&he&&(K=he.RGBA16_SNORM_EXT),B===t.UNSIGNED_SHORT_4_4_4_4&&(K=t.RGBA4),B===t.UNSIGNED_SHORT_5_5_5_1&&(K=t.RGB5_A1)}return(K===t.R16F||K===t.R32F||K===t.RG16F||K===t.RG32F||K===t.RGBA16F||K===t.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function g(R,y){let B;return R?y===null||y===fi||y===bs?B=t.DEPTH24_STENCIL8:y===si?B=t.DEPTH32F_STENCIL8:y===Oa&&(B=t.DEPTH24_STENCIL8,Ie("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===fi||y===bs?B=t.DEPTH_COMPONENT24:y===si?B=t.DEPTH_COMPONENT32F:y===Oa&&(B=t.DEPTH_COMPONENT16),B}function T(R,y){return x(R)===!0||R.isFramebufferTexture&&R.minFilter!==Gt&&R.minFilter!==cn?Math.log2(Math.max(y.width,y.height))+1:R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?y.mipmaps.length:1}function D(R){const y=new WeakRef(R);i.get(R).__ref=y,v.add(y),M.register(R,y,y)}function C(R){const y=i.get(R).__ref;y!==void 0&&(v.delete(y),M.unregister(y))}function N(R){q(R.target)}function z(R){L(R.target)}function q(R){R.removeEventListener("dispose",N),C(R),ee(R),R.isVideoTexture&&h.delete(R),R.isHTMLTexture&&m.delete(R)}function L(R){R.removeEventListener("dispose",z),C(R),k(R)}function X(){for(const R of v){const y=R.deref();y!==void 0&&(y.isRenderTarget===!0?L(y):q(y))}v.clear(),m.clear()}function ee(R){const y=i.get(R);if(y.__webglInit===void 0)return;const B=R.source,ne=p.get(B);if(ne){const te=ne[y.__cacheKey];te.usedTimes--,te.usedTimes===0&&G(R),Object.keys(ne).length===0&&p.delete(B)}i.remove(R)}function G(R){const y=i.get(R);t.deleteTexture(y.__webglTexture);const B=R.source,ne=p.get(B);delete ne[y.__cacheKey],a.memory.textures--}function k(R){const y=i.get(R);y.__depthDisposeCallback&&y.__depthDisposeCallback();const B=R.depthTexture;if(B&&B.renderTarget===R&&q(B),R.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(y.__webglFramebuffer[te]))for(let oe=0;oe<y.__webglFramebuffer[te].length;oe++)t.deleteFramebuffer(y.__webglFramebuffer[te][oe]);else t.deleteFramebuffer(y.__webglFramebuffer[te]);y.__webglDepthbuffer&&t.deleteRenderbuffer(y.__webglDepthbuffer[te])}else{if(Array.isArray(y.__webglFramebuffer))for(let te=0;te<y.__webglFramebuffer.length;te++)t.deleteFramebuffer(y.__webglFramebuffer[te]);else t.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&t.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&t.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let te=0;te<y.__webglColorRenderbuffer.length;te++)y.__webglColorRenderbuffer[te]&&t.deleteRenderbuffer(y.__webglColorRenderbuffer[te]);y.__webglDepthRenderbuffer&&t.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const ne=R.textures;for(let te=0,oe=ne.length;te<oe;te++){const he=i.get(ne[te]);he.__webglTexture&&(t.deleteTexture(he.__webglTexture),a.memory.textures--),i.remove(ne[te])}i.remove(R)}let U=0;function V(){U=0}function Z(){return U}function ae(R){U=R}function Le(){const R=U;return R>=r.maxTextures&&Ie("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+r.maxTextures),U+=1,R}function $(R){const y=[];return y.push(R.wrapS),y.push(R.wrapT),y.push(R.wrapR||0),y.push(R.magFilter),y.push(R.minFilter),y.push(R.anisotropy),y.push(R.internalFormat),y.push(R.format),y.push(R.type),y.push(R.generateMipmaps),y.push(R.mipmapsAutoUpdate),y.push(R.premultiplyAlpha),y.push(R.flipY),y.push(R.unpackAlignment),y.push(R.colorSpace),y.join()}function de(R,y){const B=i.get(R);if(R.isVideoTexture&&Rt(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&B.__version!==R.version){const ne=R.image;if(ne===null)Ie("WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)Ie("WebGLRenderer: Texture marked for update but image is incomplete");else{gt(B,R,y);return}}else R.isExternalTexture&&(B.__webglTexture=R.sourceTexture?R.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,B.__webglTexture,t.TEXTURE0+y)}function Se(R,y){const B=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&B.__version!==R.version){gt(B,R,y);return}else R.isExternalTexture&&(B.__webglTexture=R.sourceTexture?R.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,B.__webglTexture,t.TEXTURE0+y)}function be(R,y){const B=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&B.__version!==R.version){gt(B,R,y);return}n.bindTexture(t.TEXTURE_3D,B.__webglTexture,t.TEXTURE0+y)}function _e(R,y){const B=i.get(R);if(R.version>0&&B.__version!==R.version){kt(B,R,y);return}n.bindTexture(t.TEXTURE_CUBE_MAP,B.__webglTexture,t.TEXTURE0+y)}const me={[cf]:t.REPEAT,[wi]:t.CLAMP_TO_EDGE,[ff]:t.MIRRORED_REPEAT},Ue={[Gt]:t.NEAREST,[uy]:t.NEAREST_MIPMAP_NEAREST,[mo]:t.NEAREST_MIPMAP_LINEAR,[cn]:t.LINEAR,[Fu]:t.LINEAR_MIPMAP_NEAREST,[ji]:t.LINEAR_MIPMAP_LINEAR},ye={[hy]:t.NEVER,[u_]:t.ALWAYS,[py]:t.LESS,[o_]:t.LEQUAL,[my]:t.EQUAL,[l_]:t.GEQUAL,[gy]:t.GREATER,[_y]:t.NOTEQUAL};function Fe(R,y){if(y.type===si&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===cn||y.magFilter===Fu||y.magFilter===mo||y.magFilter===ji||y.minFilter===cn||y.minFilter===Fu||y.minFilter===mo||y.minFilter===ji)&&Ie("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(R,t.TEXTURE_WRAP_S,me[y.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,me[y.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,me[y.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,Ue[y.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,Ue[y.minFilter]),y.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,ye[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Gt||y.minFilter!==mo&&y.minFilter!==ji||y.type===si&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");t.texParameterf(R,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,r.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function Ee(R,y){let B=!1;R.__webglInit===void 0&&(R.__webglInit=!0,y.addEventListener("dispose",N),D(y));const ne=y.source;let te=p.get(ne);te===void 0&&(te={},p.set(ne,te));const oe=$(y);if(oe!==R.__cacheKey){te[oe]===void 0&&(te[oe]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,B=!0),te[oe].usedTimes++;const he=te[R.__cacheKey];he!==void 0&&(te[R.__cacheKey].usedTimes--,he.usedTimes===0&&G(y)),R.__cacheKey=oe,R.__webglTexture=te[oe].texture}return B}function Oe(R,y,B){return Math.floor(Math.floor(R/B)/y)}function He(R,y,B,ne){const oe=R.updateRanges;if(oe.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,y.width,y.height,B,ne,y.data);else{oe.sort((b,Q)=>b.start-Q.start);let he=0;for(let b=1;b<oe.length;b++){const Q=oe[he],Y=oe[b],ce=Q.start+Q.count,se=Oe(Y.start,y.width,4),le=Oe(Q.start,y.width,4);Y.start<=ce+1&&se===le&&Oe(Y.start+Y.count-1,y.width,4)===se?Q.count=Math.max(Q.count,Y.start+Y.count-Q.start):(++he,oe[he]=Y)}oe.length=he+1;const K=n.getParameter(t.UNPACK_ROW_LENGTH),j=n.getParameter(t.UNPACK_SKIP_PIXELS),ue=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,y.width);for(let b=0,Q=oe.length;b<Q;b++){const Y=oe[b],ce=Math.floor(Y.start/4),se=Math.ceil(Y.count/4),le=ce%y.width,Pe=Math.floor(ce/y.width),Ve=se,re=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,le),n.pixelStorei(t.UNPACK_SKIP_ROWS,Pe),n.texSubImage2D(t.TEXTURE_2D,0,le,Pe,Ve,re,B,ne,y.data)}R.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,K),n.pixelStorei(t.UNPACK_SKIP_PIXELS,j),n.pixelStorei(t.UNPACK_SKIP_ROWS,ue)}}function gt(R,y,B){let ne=t.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(ne=t.TEXTURE_2D_ARRAY),y.isData3DTexture&&(ne=t.TEXTURE_3D);const te=Ee(R,y),oe=y.source;n.bindTexture(ne,R.__webglTexture,t.TEXTURE0+B);const he=i.get(oe);if(oe.version!==he.__version||te===!0){if(n.activeTexture(t.TEXTURE0+B),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){const re=je.getPrimaries(je.workingColorSpace),De=y.colorSpace===$i?null:je.getPrimaries(y.colorSpace),Ge=y.colorSpace===$i||re===De?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ge)}n.pixelStorei(t.UNPACK_ALIGNMENT,y.unpackAlignment);let j=d(y.image,!1,r.maxTextureSize);j=Ne(y,j);const ue=s.convert(y.format,y.colorSpace),b=s.convert(y.type);let Q=w(y.internalFormat,ue,b,y.normalized,y.colorSpace,y.isVideoTexture);Fe(ne,y);let Y;const ce=y.mipmaps,se=y.isVideoTexture!==!0,le=he.__version===void 0||te===!0,Pe=oe.dataReady,Ve=T(y,j);if(y.isDepthTexture)Q=g(y.format===Qi,y.type),le&&(se?n.texStorage2D(t.TEXTURE_2D,1,Q,j.width,j.height):n.texImage2D(t.TEXTURE_2D,0,Q,j.width,j.height,0,ue,b,null));else if(y.isDataTexture)if(ce.length>0){se&&le&&n.texStorage2D(t.TEXTURE_2D,Ve,Q,ce[0].width,ce[0].height);for(let re=0,De=ce.length;re<De;re++)Y=ce[re],se?Pe&&n.texSubImage2D(t.TEXTURE_2D,re,0,0,Y.width,Y.height,ue,b,Y.data):n.texImage2D(t.TEXTURE_2D,re,Q,Y.width,Y.height,0,ue,b,Y.data);y.generateMipmaps=!1}else se?(le&&n.texStorage2D(t.TEXTURE_2D,Ve,Q,j.width,j.height),Pe&&He(y,j,ue,b)):n.texImage2D(t.TEXTURE_2D,0,Q,j.width,j.height,0,ue,b,j.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){se&&le&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Ve,Q,ce[0].width,ce[0].height,j.depth);for(let re=0,De=ce.length;re<De;re++)if(Y=ce[re],y.format!==ai)if(ue!==null)if(se){if(Pe)if(y.layerUpdates.size>0){const Ge=um(Y.width,Y.height,y.format,y.type);for(const ve of y.layerUpdates){const it=Y.data.subarray(ve*Ge/Y.data.BYTES_PER_ELEMENT,(ve+1)*Ge/Y.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,re,0,0,ve,Y.width,Y.height,1,ue,it)}}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,re,0,0,0,Y.width,Y.height,j.depth,ue,Y.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,re,Q,Y.width,Y.height,j.depth,0,Y.data,0,0);else Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else se?Pe&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,re,0,0,0,Y.width,Y.height,j.depth,ue,b,Y.data):n.texImage3D(t.TEXTURE_2D_ARRAY,re,Q,Y.width,Y.height,j.depth,0,ue,b,Y.data);y.layerUpdates.size>0&&y.clearLayerUpdates()}else{se&&le&&n.texStorage2D(t.TEXTURE_2D,Ve,Q,ce[0].width,ce[0].height);for(let re=0,De=ce.length;re<De;re++)Y=ce[re],y.format!==ai?ue!==null?se?Pe&&n.compressedTexSubImage2D(t.TEXTURE_2D,re,0,0,Y.width,Y.height,ue,Y.data):n.compressedTexImage2D(t.TEXTURE_2D,re,Q,Y.width,Y.height,0,Y.data):Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):se?Pe&&n.texSubImage2D(t.TEXTURE_2D,re,0,0,Y.width,Y.height,ue,b,Y.data):n.texImage2D(t.TEXTURE_2D,re,Q,Y.width,Y.height,0,ue,b,Y.data)}else if(y.isDataArrayTexture)if(se){if(le&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Ve,Q,j.width,j.height,j.depth),Pe)if(y.layerUpdates.size>0){const re=um(j.width,j.height,y.format,y.type);for(const De of y.layerUpdates){const Ge=j.data.subarray(De*re/j.data.BYTES_PER_ELEMENT,(De+1)*re/j.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,De,j.width,j.height,1,ue,b,Ge)}y.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,ue,b,j.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Q,j.width,j.height,j.depth,0,ue,b,j.data);else if(y.isData3DTexture)se?(le&&n.texStorage3D(t.TEXTURE_3D,Ve,Q,j.width,j.height,j.depth),Pe&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,ue,b,j.data)):n.texImage3D(t.TEXTURE_3D,0,Q,j.width,j.height,j.depth,0,ue,b,j.data);else if(y.isFramebufferTexture){if(le)if(se)n.texStorage2D(t.TEXTURE_2D,Ve,Q,j.width,j.height);else{let re=j.width,De=j.height;for(let Ge=0;Ge<Ve;Ge++)n.texImage2D(t.TEXTURE_2D,Ge,Q,re,De,0,ue,b,null),re>>=1,De>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in t){const re=t.canvas;if(re.hasAttribute("layoutsubtree")||re.setAttribute("layoutsubtree","true"),j.parentNode!==re){re.appendChild(j),m.add(y),re.onpaint=De=>{const Ge=De.changedElements;for(const ve of m)Ge.includes(ve.image)&&(ve.needsUpdate=!0)},re.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,j);else{const Ge=t.RGBA,ve=t.RGBA,it=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,0,Ge,ve,it,j)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(ce.length>0){if(se&&le){const re=Be(ce[0]);n.texStorage2D(t.TEXTURE_2D,Ve,Q,re.width,re.height)}for(let re=0,De=ce.length;re<De;re++)Y=ce[re],se?Pe&&n.texSubImage2D(t.TEXTURE_2D,re,0,0,ue,b,Y):n.texImage2D(t.TEXTURE_2D,re,Q,ue,b,Y);y.generateMipmaps=!1}else if(se){if(le){const re=Be(j);n.texStorage2D(t.TEXTURE_2D,Ve,Q,re.width,re.height)}Pe&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ue,b,j)}else n.texImage2D(t.TEXTURE_2D,0,Q,ue,b,j);x(y)&&y.mipmapsAutoUpdate===!0&&S(ne),he.__version=oe.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function kt(R,y,B){if(y.image.length!==6)return;const ne=Ee(R,y),te=y.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+B);const oe=i.get(te);if(te.version!==oe.__version||ne===!0){n.activeTexture(t.TEXTURE0+B);const he=je.getPrimaries(je.workingColorSpace),K=y.colorSpace===$i?null:je.getPrimaries(y.colorSpace),j=y.colorSpace===$i||he===K?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,j);const ue=y.isCompressedTexture||y.image[0].isCompressedTexture,b=y.image[0]&&y.image[0].isDataTexture,Q=[];for(let ve=0;ve<6;ve++)!ue&&!b?Q[ve]=d(y.image[ve],!0,r.maxCubemapSize):Q[ve]=b?y.image[ve].image:y.image[ve],Q[ve]=Ne(y,Q[ve]);const Y=Q[0],ce=s.convert(y.format,y.colorSpace),se=s.convert(y.type);let le=w(y.internalFormat,ce,se,y.normalized,y.colorSpace);const Pe=y.isVideoTexture!==!0,Ve=oe.__version===void 0||ne===!0,re=te.dataReady;let De=T(y,Y);Fe(t.TEXTURE_CUBE_MAP,y);let Ge;if(y.isDepthTexture){if(le=g(y.format===Qi,y.type),Ve)if(Pe)n.texStorage2D(t.TEXTURE_CUBE_MAP,1,le,Y.width,Y.height);else for(let ve=0;ve<6;ve++)n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,le,Y.width,Y.height,0,ce,se,null)}else if(ue){Pe&&Ve&&n.texStorage2D(t.TEXTURE_CUBE_MAP,De,le,Y.width,Y.height);for(let ve=0;ve<6;ve++){Ge=Q[ve].mipmaps;for(let it=0;it<Ge.length;it++){const Nt=Ge[it];y.format!==ai?ce!==null?Pe?re&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,it,0,0,Nt.width,Nt.height,ce,Nt.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,it,le,Nt.width,Nt.height,0,Nt.data):Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Pe?re&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,it,0,0,Nt.width,Nt.height,ce,se,Nt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,it,le,Nt.width,Nt.height,0,ce,se,Nt.data)}}}else{if(Ge=y.mipmaps,Pe&&Ve){Ge.length>0&&De++;const ve=Be(Q[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,De,le,ve.width,ve.height)}for(let ve=0;ve<6;ve++)if(b){Pe?re&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,Q[ve].width,Q[ve].height,ce,se,Q[ve].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,le,Q[ve].width,Q[ve].height,0,ce,se,Q[ve].data);for(let it=0;it<Ge.length;it++){const Ui=Ge[it].image[ve].image;Pe?re&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,it+1,0,0,Ui.width,Ui.height,ce,se,Ui.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,it+1,le,Ui.width,Ui.height,0,ce,se,Ui.data)}}else{Pe?re&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,ce,se,Q[ve]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,le,ce,se,Q[ve]);for(let it=0;it<Ge.length;it++){const Nt=Ge[it];Pe?re&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,it+1,0,0,ce,se,Nt.image[ve]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,it+1,le,ce,se,Nt.image[ve])}}}x(y)&&y.mipmapsAutoUpdate===!0&&S(t.TEXTURE_CUBE_MAP),oe.__version=te.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function ot(R,y,B,ne,te,oe){const he=s.convert(B.format,B.colorSpace),K=s.convert(B.type),j=w(B.internalFormat,he,K,B.normalized,B.colorSpace),ue=i.get(y),b=i.get(B);if(b.__renderTarget=y,!ue.__hasExternalTextures){const Q=Math.max(1,y.width>>oe),Y=Math.max(1,y.height>>oe);te===t.TEXTURE_3D||te===t.TEXTURE_2D_ARRAY?n.texImage3D(te,oe,j,Q,Y,y.depth,0,he,K,null):n.texImage2D(te,oe,j,Q,Y,0,he,K,null)}n.bindFramebuffer(t.FRAMEBUFFER,R),ge(y)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ne,te,b.__webglTexture,0,pt(y)):(te===t.TEXTURE_2D||te>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,ne,te,b.__webglTexture,oe),n.bindFramebuffer(t.FRAMEBUFFER,null)}function An(R,y,B){if(t.bindRenderbuffer(t.RENDERBUFFER,R),y.depthBuffer){const ne=y.depthTexture,te=ne&&ne.isDepthTexture?ne.type:null,oe=g(y.stencilBuffer,te),he=y.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;ge(y)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,pt(y),oe,y.width,y.height):B?t.renderbufferStorageMultisample(t.RENDERBUFFER,pt(y),oe,y.width,y.height):t.renderbufferStorage(t.RENDERBUFFER,oe,y.width,y.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,he,t.RENDERBUFFER,R)}else{const ne=y.textures;for(let te=0;te<ne.length;te++){const oe=ne[te],he=s.convert(oe.format,oe.colorSpace),K=s.convert(oe.type),j=w(oe.internalFormat,he,K,oe.normalized,oe.colorSpace);ge(y)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,pt(y),j,y.width,y.height):B?t.renderbufferStorageMultisample(t.RENDERBUFFER,pt(y),j,y.width,y.height):t.renderbufferStorage(t.RENDERBUFFER,j,y.width,y.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Dt(R,y,B){const ne=y.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const te=i.get(y.depthTexture);te.__renderTarget=y;const oe=ne?y.depthTexture.image[0]:y.depthTexture.image;(!te.__webglTexture||oe.width!==y.width||oe.height!==y.height)&&(oe.width=y.width,oe.height=y.height,y.depthTexture.needsUpdate=!0),ne?_e(y.depthTexture,0):de(y.depthTexture,0);const he=te.__webglTexture,K=pt(y),j=ne?t.TEXTURE_CUBE_MAP_POSITIVE_X+B:t.TEXTURE_2D,ue=y.depthTexture.format===Qi?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(y.depthTexture.format===ur)ge(y)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ue,j,he,0,K):t.framebufferTexture2D(t.FRAMEBUFFER,ue,j,he,0);else if(y.depthTexture.format===Qi)ge(y)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ue,j,he,0,K):t.framebufferTexture2D(t.FRAMEBUFFER,ue,j,he,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Rn(R){const y=i.get(R),B=R.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==R.depthTexture){const ne=R.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),ne){const te=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,ne.removeEventListener("dispose",te)};ne.addEventListener("dispose",te),y.__depthDisposeCallback=te}y.__boundDepthTexture=ne}if(R.depthTexture&&!y.__autoAllocateDepthBuffer)if(B)for(let ne=0;ne<6;ne++)Dt(y.__webglFramebuffer[ne],R,ne);else R.texture.mipmaps.length>0?Dt(y.__webglFramebuffer[0],R,0):Dt(y.__webglFramebuffer,R,0);else if(B){y.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)if(n.bindFramebuffer(t.FRAMEBUFFER,y.__webglFramebuffer[ne]),y.__webglDepthbuffer[ne]===void 0)y.__webglDepthbuffer[ne]=t.createRenderbuffer(),An(y.__webglDepthbuffer[ne],R,!1);else{const te=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,oe=y.__webglDepthbuffer[ne];t.bindRenderbuffer(t.RENDERBUFFER,oe),t.framebufferRenderbuffer(t.FRAMEBUFFER,te,t.RENDERBUFFER,oe)}}else if(R.texture.mipmaps.length>0?n.bindFramebuffer(t.FRAMEBUFFER,y.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=t.createRenderbuffer(),An(y.__webglDepthbuffer,R,!1);else{const te=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,oe=y.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,oe),t.framebufferRenderbuffer(t.FRAMEBUFFER,te,t.RENDERBUFFER,oe)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Cn(R,y,B){const ne=i.get(R);y!==void 0&&ot(ne.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),B!==void 0&&Rn(R)}function bn(R){const y=R.texture,B=i.get(R),ne=i.get(y);R.addEventListener("dispose",z),D(R);const te=R.textures,oe=R.isWebGLCubeRenderTarget===!0,he=te.length>1;if(he||(ne.__webglTexture===void 0&&(ne.__webglTexture=t.createTexture()),ne.__version=y.version,a.memory.textures++),oe){B.__webglFramebuffer=[];for(let K=0;K<6;K++)if(y.mipmaps.length>0){B.__webglFramebuffer[K]=[];for(let j=0;j<y.mipmaps.length;j++)B.__webglFramebuffer[K][j]=t.createFramebuffer()}else B.__webglFramebuffer[K]=t.createFramebuffer()}else{if(y.mipmaps.length>0){B.__webglFramebuffer=[];for(let K=0;K<y.mipmaps.length;K++)B.__webglFramebuffer[K]=t.createFramebuffer()}else B.__webglFramebuffer=t.createFramebuffer();if(he)for(let K=0,j=te.length;K<j;K++){const ue=i.get(te[K]);ue.__webglTexture===void 0&&(ue.__webglTexture=t.createTexture(),a.memory.textures++)}if(R.samples>0&&ge(R)===!1){B.__webglMultisampledFramebuffer=t.createFramebuffer(),B.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let K=0;K<te.length;K++){const j=te[K];B.__webglColorRenderbuffer[K]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,B.__webglColorRenderbuffer[K]);const ue=s.convert(j.format,j.colorSpace),b=s.convert(j.type),Q=w(j.internalFormat,ue,b,j.normalized,j.colorSpace,R.isXRRenderTarget===!0),Y=pt(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,Y,Q,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+K,t.RENDERBUFFER,B.__webglColorRenderbuffer[K])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(B.__webglDepthRenderbuffer=t.createRenderbuffer(),An(B.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(oe){n.bindTexture(t.TEXTURE_CUBE_MAP,ne.__webglTexture),Fe(t.TEXTURE_CUBE_MAP,y);for(let K=0;K<6;K++)if(y.mipmaps.length>0)for(let j=0;j<y.mipmaps.length;j++)ot(B.__webglFramebuffer[K][j],R,y,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+K,j);else ot(B.__webglFramebuffer[K],R,y,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);x(y)?S(t.TEXTURE_CUBE_MAP):y.mipmaps.length>0&&t.texParameteri(t.TEXTURE_CUBE_MAP,t.TEXTURE_MAX_LEVEL,y.mipmaps.length-1),n.unbindTexture()}else if(he){for(let K=0,j=te.length;K<j;K++){const ue=te[K],b=i.get(ue);let Q=t.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(Q=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(Q,b.__webglTexture),Fe(Q,ue),ot(B.__webglFramebuffer,R,ue,t.COLOR_ATTACHMENT0+K,Q,0),x(ue)&&S(Q)}n.unbindTexture()}else{let K=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(K=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(K,ne.__webglTexture),Fe(K,y),y.mipmaps.length>0)for(let j=0;j<y.mipmaps.length;j++)ot(B.__webglFramebuffer[j],R,y,t.COLOR_ATTACHMENT0,K,j);else ot(B.__webglFramebuffer,R,y,t.COLOR_ATTACHMENT0,K,0);x(y)?S(K):y.mipmaps.length>0&&t.texParameteri(K,t.TEXTURE_MAX_LEVEL,y.mipmaps.length-1),n.unbindTexture()}R.depthBuffer&&Rn(R)}function I(R){const y=R.textures;for(let B=0,ne=y.length;B<ne;B++){const te=y[B];if(x(te)&&te.mipmapsAutoUpdate===!0){const oe=A(R),he=i.get(te).__webglTexture;n.bindTexture(oe,he),S(oe),n.unbindTexture()}}}const Pn=[];function ht(R){if(R.samples>0){if(ge(R)===!1){const y=R.textures,B=R.width,ne=R.height;let te=t.COLOR_BUFFER_BIT;const oe=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,he=i.get(R),K=y.length>1;if(K)for(let ue=0;ue<y.length;ue++)n.bindFramebuffer(t.FRAMEBUFFER,he.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,he.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,he.__webglMultisampledFramebuffer),R.texture.mipmaps.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,he.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,he.__webglFramebuffer);for(let ue=0;ue<y.length;ue++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(te|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(te|=t.STENCIL_BUFFER_BIT)),K){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,he.__webglColorRenderbuffer[ue]);const b=i.get(y[ue]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,b,0)}t.blitFramebuffer(0,0,B,ne,0,0,B,ne,te,t.NEAREST),l===!0&&(Pn.length=0,Pn.push(t.COLOR_ATTACHMENT0+ue),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&Pn.push(oe),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Pn))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),K)for(let ue=0;ue<y.length;ue++){n.bindFramebuffer(t.FRAMEBUFFER,he.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.RENDERBUFFER,he.__webglColorRenderbuffer[ue]);const b=i.get(y[ue]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,he.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.TEXTURE_2D,b,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,he.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&l){const y=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[y])}}}function pt(R){return Math.min(r.maxSamples,R.samples)}function ge(R){const y=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Rt(R){const y=a.render.frame;h.get(R)!==y&&(h.set(R,y),R.update())}function Ne(R,y){const B=R.colorSpace,ne=R.format,te=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||B!==Il&&B!==$i&&(je.getTransfer(B)===rt?(ne!==ai||te!==xn)&&Ie("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):nt("WebGLTextures: Unsupported texture color space:",B)),y}function Be(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(u.width=R.naturalWidth||R.width,u.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(u.width=R.displayWidth,u.height=R.displayHeight):(u.width=R.width,u.height=R.height),u}this.allocateTextureUnit=Le,this.resetTextureUnits=V,this.getTextureUnits=Z,this.setTextureUnits=ae,this.setTexture2D=de,this.setTexture2DArray=Se,this.setTexture3D=be,this.setTextureCube=_e,this.rebindTextures=Cn,this.setupRenderTarget=bn,this.updateRenderTargetMipmap=I,this.updateMultisampleRenderTarget=ht,this.setupDepthRenderbuffer=Rn,this.setupFrameBufferTexture=ot,this.useMultisampledRTT=ge,this.dispose=X}function oA(t,e){function n(i,r=$i){let s;const a=je.getTransfer(r);if(i===xn)return t.UNSIGNED_BYTE;if(i===Vd)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Wd)return t.UNSIGNED_SHORT_5_5_5_1;if(i===n_)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===i_)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===e_)return t.BYTE;if(i===t_)return t.SHORT;if(i===Oa)return t.UNSIGNED_SHORT;if(i===Gd)return t.INT;if(i===fi)return t.UNSIGNED_INT;if(i===si)return t.FLOAT;if(i===di)return t.HALF_FLOAT;if(i===r_)return t.ALPHA;if(i===s_)return t.RGB;if(i===ai)return t.RGBA;if(i===ur)return t.DEPTH_COMPONENT;if(i===Qi)return t.DEPTH_STENCIL;if(i===a_)return t.RED;if(i===Xd)return t.RED_INTEGER;if(i===Ur)return t.RG;if(i===Yd)return t.RG_INTEGER;if(i===qd)return t.RGBA_INTEGER;if(i===tl||i===nl||i===il||i===rl)if(a===rt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===tl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===nl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===il)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===rl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===tl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===nl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===il)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===rl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===df||i===hf||i===pf||i===mf)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===df)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===hf)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===pf)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===mf)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===gf||i===_f||i===vf||i===xf||i===Sf||i===Dl||i===yf)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===gf||i===_f)return a===rt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===vf)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===xf)return s.COMPRESSED_R11_EAC;if(i===Sf)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Dl)return s.COMPRESSED_RG11_EAC;if(i===yf)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Mf||i===Ef||i===Tf||i===wf||i===Af||i===Rf||i===Cf||i===bf||i===Pf||i===Lf||i===Df||i===Nf||i===If||i===Uf)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Mf)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ef)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Tf)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===wf)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Af)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Rf)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Cf)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===bf)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Pf)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Lf)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Df)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Nf)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===If)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Uf)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ff||i===Of||i===Bf)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Ff)return a===rt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Of)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Bf)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===kf||i===zf||i===Nl||i===Hf)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===kf)return s.COMPRESSED_RED_RGTC1_EXT;if(i===zf)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Nl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Hf)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===bs?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const lA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,uA=`
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

}`;class cA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new T_(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Fr({vertexShader:lA,fragmentShader:uA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new ci(new iu(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class fA extends kr{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,u=null,h=null,m=null,f=null,p=null,v=null;const M=typeof XRWebGLBinding<"u",_=new cA,c={},d=n.getContextAttributes();let x=null,S=null;const A=[],w=[],g=new Ye;let T=null,D=null;const C=new Un;C.viewport=new xt;const N=new Un;N.viewport=new xt;const z=[C,N],q=new MM;let L=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let de=A[$];return de===void 0&&(de=new Wu,A[$]=de),de.getTargetRaySpace()},this.getControllerGrip=function($){let de=A[$];return de===void 0&&(de=new Wu,A[$]=de),de.getGripSpace()},this.getHand=function($){let de=A[$];return de===void 0&&(de=new Wu,A[$]=de),de.getHandSpace()};function ee($){const de=w.indexOf($.inputSource);if(de===-1)return;const Se=A[de];Se!==void 0&&(Se.update($.inputSource,$.frame,u||a),Se.dispatchEvent({type:$.type,data:$.inputSource}))}function G(){r.removeEventListener("select",ee),r.removeEventListener("selectstart",ee),r.removeEventListener("selectend",ee),r.removeEventListener("squeeze",ee),r.removeEventListener("squeezestart",ee),r.removeEventListener("squeezeend",ee),r.removeEventListener("end",G),r.removeEventListener("inputsourceschange",k);for(let $=0;$<A.length;$++){const de=w[$];de!==null&&(w[$]=null,A[$].disconnect(de))}L=null,X=null,_.reset();for(const $ in c)delete c[$];if(e.setRenderTarget(x),p=null,f=null,m=null,r=null,S=null,Le.stop(),i.isPresenting=!1,e.setPixelRatio(T),e.setSize(g.width,g.height,!1),D!==null){const $=D.camera;$.fov=D.fov,$.zoom=D.zoom,$.updateProjectionMatrix(),D=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,i.isPresenting===!0&&Ie("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,i.isPresenting===!0&&Ie("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function($){u=$},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return m===null&&M&&(m=new XRWebGLBinding(r,n)),m},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function($){if(r=$,r!==null){if(x=e.getRenderTarget(),r.addEventListener("select",ee),r.addEventListener("selectstart",ee),r.addEventListener("selectend",ee),r.addEventListener("squeeze",ee),r.addEventListener("squeezestart",ee),r.addEventListener("squeezeend",ee),r.addEventListener("end",G),r.addEventListener("inputsourceschange",k),d.xrCompatible!==!0&&await n.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(g),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let Se=null,be=null,_e=null;d.depth&&(_e=d.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Se=d.stencil?Qi:ur,be=d.stencil?bs:fi);const me={colorFormat:n.RGBA8,depthFormat:_e,scaleFactor:s};m=this.getBinding(),f=m.createProjectionLayer(me),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),S=new ui(f.textureWidth,f.textureHeight,{format:ai,type:xn,depthTexture:new Ps(f.textureWidth,f.textureHeight,be,void 0,void 0,void 0,void 0,void 0,void 0,Se),stencilBuffer:d.stencil,colorSpace:e.outputColorSpace,samples:d.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{const Se={antialias:d.antialias,alpha:!0,depth:d.depth,stencil:d.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,Se),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new ui(p.framebufferWidth,p.framebufferHeight,{format:ai,type:xn,colorSpace:e.outputColorSpace,stencilBuffer:d.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),u=null,a=await r.requestReferenceSpace(o),Le.setContext(r),Le.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function k($){for(let de=0;de<$.removed.length;de++){const Se=$.removed[de],be=w.indexOf(Se);be>=0&&(w[be]=null,A[be].disconnect(Se))}for(let de=0;de<$.added.length;de++){const Se=$.added[de];let be=w.indexOf(Se);if(be===-1){for(let me=0;me<A.length;me++)if(me>=w.length){w.push(Se),be=me;break}else if(w[me]===null){w[me]=Se,be=me;break}if(be===-1)break}const _e=A[be];_e&&_e.connect(Se)}}function U($,de){de===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(de.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(r===null)return;let de=$.near,Se=$.far;_.texture!==null&&(_.depthNear>0&&(de=_.depthNear),_.depthFar>0&&(Se=_.depthFar)),q.near=N.near=C.near=de,q.far=N.far=C.far=Se,(L!==q.near||X!==q.far)&&(r.updateRenderState({depthNear:q.near,depthFar:q.far}),L=q.near,X=q.far),q.layers.mask=$.layers.mask|6,C.layers.mask=q.layers.mask&-5,N.layers.mask=q.layers.mask&-3;const be=$.parent,_e=q.cameras;U(q,be);for(let me=0;me<_e.length;me++)U(_e[me],be);q.projectionMatrix.copy(C.projectionMatrix),q.projectionMatrixInverse.copy(C.projectionMatrixInverse),D===null&&$.isPerspectiveCamera&&(D={camera:$,fov:$.fov,zoom:$.zoom}),V($,q,be)};function V($,de,Se){Se===null?$.matrix.copy(de.matrixWorld):($.matrix.copy(Se.matrixWorld),$.matrix.invert(),$.matrix.multiply(de.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(de.projectionMatrix),$.projectionMatrixInverse.copy(de.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=ka*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return q},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function($){l=$,f!==null&&(f.fixedFoveation=$),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=$)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(q)},this.getCameraTexture=function($){return c[$]};let Z=null;function ae($,de){if(h=de.getViewerPose(u||a),v=de,h!==null){const Se=h.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let be=!1;Se.length!==q.cameras.length&&(q.cameras.length=0,be=!0);for(let ye=0;ye<Se.length;ye++){const Fe=Se[ye];let Ee=null;if(p!==null)Ee=p.getViewport(Fe);else{const He=m.getViewSubImage(f,Fe);Ee=He.viewport,ye===0&&(e.setRenderTargetTextures(S,He.colorTexture,He.depthStencilTexture),e.setRenderTarget(S))}let Oe=z[ye];Oe===void 0&&(Oe=new Un,Oe.layers.enable(ye),Oe.viewport=new xt,z[ye]=Oe),Oe.matrix.fromArray(Fe.transform.matrix),Oe.matrix.decompose(Oe.position,Oe.quaternion,Oe.scale),Oe.projectionMatrix.fromArray(Fe.projectionMatrix),Oe.projectionMatrixInverse.copy(Oe.projectionMatrix).invert(),Oe.viewport.set(Ee.x,Ee.y,Ee.width,Ee.height),ye===0&&(q.matrix.copy(Oe.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale)),be===!0&&q.cameras.push(Oe)}const _e=r.enabledFeatures;if(_e&&_e.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&M){m=i.getBinding();const ye=m.getDepthInformation(Se[0]);ye&&ye.isValid&&ye.texture&&_.init(ye,r.renderState)}if(_e&&_e.includes("camera-access")&&M){e.state.unbindTexture(),m=i.getBinding();for(let ye=0;ye<Se.length;ye++){const Fe=Se[ye].camera;if(Fe){let Ee=c[Fe];Ee||(Ee=new T_,c[Fe]=Ee);const Oe=m.getCameraImage(Fe);Ee.sourceTexture=Oe}}}}for(let Se=0;Se<A.length;Se++){const be=w[Se],_e=A[Se];be!==null&&_e!==void 0&&_e.update(be,de,u||a)}Z&&Z($,de),de.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:de}),v=null}const Le=new b_;Le.setAnimationLoop(ae),this.setAnimationLoop=function($){Z=$},this.dispose=function(){}}}const dA=new dt,k_=new ke;k_.set(-1,0,0,0,1,0,0,0,1);function hA(t,e){function n(_,c){_.matrixAutoUpdate===!0&&_.updateMatrix(),c.value.copy(_.matrix)}function i(_,c){c.color.getRGB(_.fogColor.value,w_(t)),c.isFog?(_.fogNear.value=c.near,_.fogFar.value=c.far):c.isFogExp2&&(_.fogDensity.value=c.density)}function r(_,c,d,x,S){c.isNodeMaterial?c.uniformsNeedUpdate=!1:c.isMeshBasicMaterial?s(_,c):c.isMeshLambertMaterial?(s(_,c),c.envMap&&(_.envMapIntensity.value=c.envMapIntensity)):c.isMeshToonMaterial?(s(_,c),m(_,c)):c.isMeshPhongMaterial?(s(_,c),h(_,c),c.envMap&&(_.envMapIntensity.value=c.envMapIntensity)):c.isMeshStandardMaterial?(s(_,c),f(_,c),c.isMeshPhysicalMaterial&&p(_,c,S)):c.isMeshMatcapMaterial?(s(_,c),v(_,c)):c.isMeshDepthMaterial?s(_,c):c.isMeshDistanceMaterial?(s(_,c),M(_,c)):c.isMeshNormalMaterial?s(_,c):c.isLineBasicMaterial?(a(_,c),c.isLineDashedMaterial&&o(_,c)):c.isPointsMaterial?l(_,c,d,x):c.isSpriteMaterial?u(_,c):c.isShadowMaterial?(_.color.value.copy(c.color),_.opacity.value=c.opacity):c.isShaderMaterial&&(c.uniformsNeedUpdate=!1)}function s(_,c){_.opacity.value=c.opacity,c.color&&_.diffuse.value.copy(c.color),c.emissive&&_.emissive.value.copy(c.emissive).multiplyScalar(c.emissiveIntensity),c.map&&(_.map.value=c.map,n(c.map,_.mapTransform)),c.alphaMap&&(_.alphaMap.value=c.alphaMap,n(c.alphaMap,_.alphaMapTransform)),c.bumpMap&&(_.bumpMap.value=c.bumpMap,n(c.bumpMap,_.bumpMapTransform),_.bumpScale.value=c.bumpScale,c.side===pn&&(_.bumpScale.value*=-1)),c.normalMap&&(_.normalMap.value=c.normalMap,n(c.normalMap,_.normalMapTransform),_.normalScale.value.copy(c.normalScale),c.side===pn&&_.normalScale.value.negate()),c.displacementMap&&(_.displacementMap.value=c.displacementMap,n(c.displacementMap,_.displacementMapTransform),_.displacementScale.value=c.displacementScale,_.displacementBias.value=c.displacementBias),c.emissiveMap&&(_.emissiveMap.value=c.emissiveMap,n(c.emissiveMap,_.emissiveMapTransform)),c.specularMap&&(_.specularMap.value=c.specularMap,n(c.specularMap,_.specularMapTransform)),c.alphaTest>0&&(_.alphaTest.value=c.alphaTest);const d=e.get(c),x=d.envMap,S=d.envMapRotation;x&&(_.envMap.value=x,_.envMapRotation.value.setFromMatrix4(dA.makeRotationFromEuler(S)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&_.envMapRotation.value.premultiply(k_),_.reflectivity.value=c.reflectivity,_.ior.value=c.ior,_.refractionRatio.value=c.refractionRatio),c.lightMap&&(_.lightMap.value=c.lightMap,_.lightMapIntensity.value=c.lightMapIntensity,n(c.lightMap,_.lightMapTransform)),c.aoMap&&(_.aoMap.value=c.aoMap,_.aoMapIntensity.value=c.aoMapIntensity,n(c.aoMap,_.aoMapTransform))}function a(_,c){_.diffuse.value.copy(c.color),_.opacity.value=c.opacity,c.map&&(_.map.value=c.map,n(c.map,_.mapTransform))}function o(_,c){_.dashSize.value=c.dashSize,_.totalSize.value=c.dashSize+c.gapSize,_.scale.value=c.scale}function l(_,c,d,x){_.diffuse.value.copy(c.color),_.opacity.value=c.opacity,_.size.value=c.size*d,_.scale.value=x*.5,c.map&&(_.map.value=c.map,n(c.map,_.uvTransform)),c.alphaMap&&(_.alphaMap.value=c.alphaMap,n(c.alphaMap,_.alphaMapTransform)),c.alphaTest>0&&(_.alphaTest.value=c.alphaTest)}function u(_,c){_.diffuse.value.copy(c.color),_.opacity.value=c.opacity,_.rotation.value=c.rotation,c.map&&(_.map.value=c.map,n(c.map,_.mapTransform)),c.alphaMap&&(_.alphaMap.value=c.alphaMap,n(c.alphaMap,_.alphaMapTransform)),c.alphaTest>0&&(_.alphaTest.value=c.alphaTest)}function h(_,c){_.specular.value.copy(c.specular),_.shininess.value=Math.max(c.shininess,1e-4)}function m(_,c){c.gradientMap&&(_.gradientMap.value=c.gradientMap)}function f(_,c){_.metalness.value=c.metalness,c.metalnessMap&&(_.metalnessMap.value=c.metalnessMap,n(c.metalnessMap,_.metalnessMapTransform)),_.roughness.value=c.roughness,c.roughnessMap&&(_.roughnessMap.value=c.roughnessMap,n(c.roughnessMap,_.roughnessMapTransform)),c.envMap&&(_.envMapIntensity.value=c.envMapIntensity)}function p(_,c,d){_.ior.value=c.ior,c.diffuseRoughness>0&&(_.diffuseRoughness.value=c.diffuseRoughness,c.diffuseRoughnessMap&&(_.diffuseRoughnessMap.value=c.diffuseRoughnessMap,n(c.diffuseRoughnessMap,_.diffuseRoughnessMapTransform))),c.sheen>0&&(_.sheenColor.value.copy(c.sheenColor).multiplyScalar(c.sheen),_.sheenRoughness.value=c.sheenRoughness,c.sheenColorMap&&(_.sheenColorMap.value=c.sheenColorMap,n(c.sheenColorMap,_.sheenColorMapTransform)),c.sheenRoughnessMap&&(_.sheenRoughnessMap.value=c.sheenRoughnessMap,n(c.sheenRoughnessMap,_.sheenRoughnessMapTransform))),c.clearcoat>0&&(_.clearcoat.value=c.clearcoat,_.clearcoatRoughness.value=c.clearcoatRoughness,c.clearcoatMap&&(_.clearcoatMap.value=c.clearcoatMap,n(c.clearcoatMap,_.clearcoatMapTransform)),c.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=c.clearcoatRoughnessMap,n(c.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),c.clearcoatNormalMap&&(_.clearcoatNormalMap.value=c.clearcoatNormalMap,n(c.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(c.clearcoatNormalScale),c.side===pn&&_.clearcoatNormalScale.value.negate())),c.dispersion>0&&(_.dispersion.value=c.dispersion),c.retroreflectivity>0&&(_.retroreflectivity.value=c.retroreflectivity),c.iridescence>0&&(_.iridescence.value=c.iridescence,_.iridescenceIOR.value=c.iridescenceIOR,_.iridescenceThicknessMinimum.value=c.iridescenceThicknessMinimum,_.iridescenceThicknessMaximum.value=c.iridescenceThicknessMaximum,c.iridescenceMap&&(_.iridescenceMap.value=c.iridescenceMap,n(c.iridescenceMap,_.iridescenceMapTransform)),c.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=c.iridescenceThicknessMap,n(c.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),c.transmission>0&&(_.transmission.value=c.transmission,_.transmissionSamplerMap.value=d.texture,_.transmissionSamplerSize.value.set(d.width,d.height),c.transmissionMap&&(_.transmissionMap.value=c.transmissionMap,n(c.transmissionMap,_.transmissionMapTransform)),_.thickness.value=c.thickness,c.thicknessMap&&(_.thicknessMap.value=c.thicknessMap,n(c.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=c.attenuationDistance,_.attenuationColor.value.copy(c.attenuationColor)),c.anisotropy>0&&(_.anisotropyVector.value.set(c.anisotropy*Math.cos(c.anisotropyRotation),c.anisotropy*Math.sin(c.anisotropyRotation)),c.anisotropyMap&&(_.anisotropyMap.value=c.anisotropyMap,n(c.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=c.specularIntensity,_.specularColor.value.copy(c.specularColor),c.specularColorMap&&(_.specularColorMap.value=c.specularColorMap,n(c.specularColorMap,_.specularColorMapTransform)),c.specularIntensityMap&&(_.specularIntensityMap.value=c.specularIntensityMap,n(c.specularIntensityMap,_.specularIntensityMapTransform))}function v(_,c){c.matcap&&(_.matcap.value=c.matcap)}function M(_,c){const d=e.get(c).light;_.referencePosition.value.setFromMatrixPosition(d.matrixWorld),_.nearDistance.value=d.shadow.camera.near,_.farDistance.value=d.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function pA(t,e,n,i){let r={},s={};function a(d,x){const S=x.program;i.uniformBlockBinding(d,S,r[d.id])}function o(d,x){let S=r[d.id];S===void 0&&(v(d),S=l(d),r[d.id]=S,d.addEventListener("dispose",_));const A=x.program;i.updateUBOMapping(d,A);const w=e.render.frame;s[d.id]!==w&&(u(d),s[d.id]=w)}function l(d){const x=t.createBuffer(),S=d.__size,A=d.usage;return t.bindBuffer(t.UNIFORM_BUFFER,x),t.bufferData(t.UNIFORM_BUFFER,S,A),t.bindBuffer(t.UNIFORM_BUFFER,null),x}function u(d){const x=r[d.id],S=d.uniforms,A=d.__cache;t.bindBuffer(t.UNIFORM_BUFFER,x);for(let w=0,g=S.length;w<g;w++){const T=S[w];if(Array.isArray(T))for(let D=0,C=T.length;D<C;D++)h(T[D],w,D,A);else h(T,w,0,A)}t.bindBuffer(t.UNIFORM_BUFFER,null)}function h(d,x,S,A){if(f(d,x,S,A)===!0){const w=d.__offset,g=d.value;if(Array.isArray(g)){let T=0;for(let D=0;D<g.length;D++){const C=g[D],N=M(C,!0);m(C,d.__data,T),T+=N.storage/Float32Array.BYTES_PER_ELEMENT}}else m(g,d.__data,0);t.bufferSubData(t.UNIFORM_BUFFER,w,d.__data)}}function m(d,x,S){typeof d=="number"||typeof d=="boolean"?x[S]=d:d.isMatrix3?(x[S]=d.elements[0],x[S+1]=d.elements[1],x[S+2]=d.elements[2],x[S+3]=0,x[S+4]=d.elements[3],x[S+5]=d.elements[4],x[S+6]=d.elements[5],x[S+7]=0,x[S+8]=d.elements[6],x[S+9]=d.elements[7],x[S+10]=d.elements[8],x[S+11]=0):ArrayBuffer.isView(d)?x.set(d.subarray(0,x.length-S),S):d.toArray(x,S)}function f(d,x,S,A){const w=d.value,g=x+"_"+S;if(Array.isArray(w)){A[g]===void 0&&(A[g]=[]);const T=A[g];let D=!1;for(let C=0;C<w.length;C++)p(w[C],T,C)===!0&&(D=!0);return D}return p(w,A,g)}function p(d,x,S){if(x[S]===void 0)return typeof d=="number"||typeof d=="boolean"?x[S]=d:ArrayBuffer.isView(d)?x[S]=d.slice():x[S]=d.clone(),!0;{const A=x[S];if(typeof d=="number"||typeof d=="boolean"){if(A!==d)return x[S]=d,!0}else{if(ArrayBuffer.isView(d))return!0;if(A.equals(d)===!1)return A.copy(d),!0}}return!1}function v(d){const x=d.uniforms;let S=0;const A=16;for(let g=0,T=x.length;g<T;g++){const D=Array.isArray(x[g])?x[g]:[x[g]];for(let C=0,N=D.length;C<N;C++){const z=D[C],q=Array.isArray(z.value)?z.value:[z.value],L=Array.isArray(x[g])||Array.isArray(z.value);let X=S;for(let G=0,k=q.length;G<k;G++){const U=q[G],V=M(U,L),Z=S%A,ae=Z%V.boundary,Le=Z+ae;S+=ae,Le!==0&&A-Le<V.storage&&(S+=A-Le),G===0&&(X=S),S+=V.storage}const ee=z.type==="int"?Int32Array:z.type==="uint"?Uint32Array:Float32Array;z.__data=new ee((S-X)/Float32Array.BYTES_PER_ELEMENT),z.__offset=X}}const w=S%A;return w>0&&(S+=A-w),d.__size=S,d.__cache={},this}function M(d,x){const S={boundary:0,storage:0};return typeof d=="number"||typeof d=="boolean"?(S.boundary=4,S.storage=4):d.isVector2?(S.boundary=8,S.storage=8):d.isVector3||d.isColor?(S.boundary=16,S.storage=12):d.isVector4?(S.boundary=16,S.storage=16):d.isMatrix3?(S.boundary=16,S.storage=48):d.isMatrix4?(S.boundary=16,S.storage=64):d.isTexture?Ie("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(d)?(S.boundary=16,S.storage=d.byteLength):Ie("WebGLRenderer: Unsupported uniform value type.",d),x===!0&&(S.boundary=16,S.storage=Math.ceil(S.storage/16)*16),S}function _(d){const x=d.target;x.removeEventListener("dispose",_),t.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function c(){for(const d in r)t.deleteBuffer(r[d]);r={},s={}}return{bind:a,update:o,dispose:c}}const mA=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ti=null;function gA(){return ti===null&&(ti=new sM(mA,16,16,Ur,di),ti.name="DFG_LUT",ti.minFilter=cn,ti.magFilter=cn,ti.wrapS=wi,ti.wrapT=wi,ti.generateMipmaps=!1,ti.needsUpdate=!0),ti}class _A{constructor(e={}){const{canvas:n=Sy(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:m=!1,reversedDepthBuffer:f=!1,outputBufferType:p=xn}=e;this.isWebGLRenderer=!0;let v;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=i.getContextAttributes().alpha}else v=a;const M=p,_=new Set([qd,Yd,Xd]),c=new Set([xn,fi,Oa,bs,Vd,Wd]),d=new Uint32Array(4),x=new Int32Array(4),S={textures:[],min:[],max:[],resolution:[]};let A=null,w=null;const g=[],T=[];let D=null;this.domElement=n,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ri,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let N=!1,z=null,q=null,L=null,X=null;this._outputColorSpace=Dn;let ee=0,G=0,k=null,U=-1,V=null;const Z=new xt,ae=new xt;let Le=null;const $=new Qe(0);let de=0,Se=n.width,be=n.height,_e=1,me=null,Ue=null;const ye=new xt(0,0,Se,be),Fe=new xt(0,0,Se,be);let Ee=!1;const Oe=new za,He=new Qd;let gt=!1,kt=!1;const ot=new dt,An=new F,Dt=new xt,Rn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Cn=!1;function bn(){return k===null?_e:1}let I=i;function Pn(E,P){return n.getContext(E,P)}let ht,pt,ge,Rt,Ne,Be,R,y,B,ne,te,oe,he,K,j,ue,b,Q,Y,ce,se,le,Pe;try{const E={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:h,failIfMajorPerformanceCaveat:m};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${zd}`),n.addEventListener("webglcontextlost",De,!1),n.addEventListener("webglcontextrestored",Ge,!1),n.addEventListener("webglcontextcreationerror",ve,!1),I===null){const P="webgl2";if(I=Pn(P,E),I===null)throw Pn(P)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ve()}catch(E){throw n.removeEventListener("webglcontextlost",De,!1),n.removeEventListener("webglcontextrestored",Ge,!1),n.removeEventListener("webglcontextcreationerror",ve,!1),nt("WebGLRenderer: "+E.message),E}function Ve(){ht=new ST(I),ht.init(),se=new oA(I,ht),pt=new uT(I,ht,e,se),ge=new sA(I,ht),pt.reversedDepthBuffer&&f&&ge.buffers.depth.setReversed(!0),q=I.createFramebuffer(),L=I.createFramebuffer(),X=I.createFramebuffer(),Rt=new ET(I),Ne=new Xw,Be=new aA(I,ht,ge,Ne,pt,se,Rt),R=new xT(C),y=new wM(I),le=new oT(I,y),B=new yT(I,y,Rt,le),ne=new wT(I,B,y,le,Rt),Q=new TT(I,pt,Be),j=new cT(Ne),te=new Ww(C,R,ht,pt,le,j),oe=new hA(C,Ne),he=new qw,K=new Jw(ht),b=new aT(C,R,ge,ne,v,l),ue=new rA(C,ne,pt),Pe=new pA(I,Rt,pt,ge),Y=new lT(I,ht,Rt),ce=new MT(I,ht,Rt),Rt.programs=te.programs,C.capabilities=pt,C.extensions=ht,C.properties=Ne,C.renderLists=he,C.shadowMap=ue,C.state=ge,C.info=Rt}M!==xn&&(D=new RT(M,n.width,n.height,o,r,s));const re=new fA(C,I);this.xr=re,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const E=ht.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=ht.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return _e},this.setPixelRatio=function(E){E!==void 0&&(_e=E,this.setSize(Se,be,!1))},this.getSize=function(E){return E.set(Se,be)},this.setSize=function(E,P,W=!0){if(re.isPresenting){Ie("WebGLRenderer: Can't change size while VR device is presenting.");return}Se=E,be=P,n.width=Math.floor(E*_e),n.height=Math.floor(P*_e),W===!0&&(n.style.width=E+"px",n.style.height=P+"px"),D!==null&&D.setSize(n.width,n.height),this.setViewport(0,0,E,P)},this.getDrawingBufferSize=function(E){return E.set(Se*_e,be*_e).floor()},this.setDrawingBufferSize=function(E,P,W){Se=E,be=P,_e=W,n.width=Math.floor(E*W),n.height=Math.floor(P*W),this.setViewport(0,0,E,P)},this.setEffects=function(E){if(M===xn){nt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let P=0;P<E.length;P++)if(E[P].isOutputPass===!0){Ie("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}D.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(Z)},this.getViewport=function(E){return E.copy(ye)},this.setViewport=function(E,P,W,O){E.isVector4?ye.set(E.x,E.y,E.z,E.w):ye.set(E,P,W,O),ge.viewport(Z.copy(ye).multiplyScalar(bn()).round())},this.getScissor=function(E){return E.copy(Fe)},this.setScissor=function(E,P,W,O){E.isVector4?Fe.set(E.x,E.y,E.z,E.w):Fe.set(E,P,W,O),ge.scissor(ae.copy(Fe).multiplyScalar(bn()).round())},this.getScissorTest=function(){return Ee},this.setScissorTest=function(E){ge.setScissorTest(Ee=E)},this.setOpaqueSort=function(E){me=E},this.setTransparentSort=function(E){Ue=E},this.getClearColor=function(E){return E.copy(b.getClearColor())},this.setClearColor=function(){b.setClearColor(...arguments)},this.getClearAlpha=function(){return b.getClearAlpha()},this.setClearAlpha=function(){b.setClearAlpha(...arguments)},this.clear=function(E=!0,P=!0,W=!0){let O=0;if(E){let H=!1;if(k!==null){const pe=k.texture.format;H=_.has(pe)}if(H){const pe=k.texture.type,we=c.has(pe),fe=b.getClearColor(),Me=b.getClearAlpha(),Ce=fe.r,ze=fe.g,$e=fe.b;we?(d[0]=Ce,d[1]=ze,d[2]=$e,d[3]=Me,I.clearBufferuiv(I.COLOR,0,d)):(x[0]=Ce,x[1]=ze,x[2]=$e,x[3]=Me,I.clearBufferiv(I.COLOR,0,x))}else O|=I.COLOR_BUFFER_BIT}P&&(O|=I.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),W&&(O|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O!==0&&I.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),z=E},this.dispose=function(){n.removeEventListener("webglcontextlost",De,!1),n.removeEventListener("webglcontextrestored",Ge,!1),n.removeEventListener("webglcontextcreationerror",ve,!1),b.dispose(),he.dispose(),K.dispose(),Be.dispose(),Ne.dispose(),R.dispose(),ne.dispose(),B.dispose(),le.dispose(),Pe.dispose(),te.dispose(),re.dispose(),re.removeEventListener("sessionstart",uh),re.removeEventListener("sessionend",ch),pr.stop()};function De(E){E.preventDefault(),Ip("WebGLRenderer: Context Lost."),N=!0}function Ge(){Ip("WebGLRenderer: Context Restored."),N=!1;const E=Rt.autoReset,P=ue.enabled,W=ue.autoUpdate,O=ue.needsUpdate,H=ue.type;Ve(),Rt.autoReset=E,ue.enabled=P,ue.autoUpdate=W,ue.needsUpdate=O,ue.type=H}function ve(E){nt("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function it(E){const P=E.target;P.removeEventListener("dispose",it),Nt(P)}function Nt(E){Ui(E),Ne.remove(E)}function Ui(E){const P=Ne.get(E).programs;P!==void 0&&(P.forEach(function(W){te.releaseProgram(W)}),E.isShaderMaterial&&te.releaseShaderCache(E))}this.renderBufferDirect=function(E,P,W,O,H,pe){P===null&&(P=Rn);const we=H.isMesh&&H.matrixWorld.determinantAffine()<0,fe=G_(E,P,W,O,H);ge.setMaterial(O,we);let Me=W.index,Ce=1;if(O.wireframe===!0){if(Me=B.getWireframeAttribute(W),Me===void 0)return;Ce=2}const ze=W.drawRange,$e=W.attributes.position;let Ae=ze.start*Ce,Ke=(ze.start+ze.count)*Ce;pe!==null&&(Ae=Math.max(Ae,pe.start*Ce),Ke=Math.min(Ke,(pe.start+pe.count)*Ce)),Me!==null?(Ae=Math.max(Ae,0),Ke=Math.min(Ke,Me.count)):$e!=null&&(Ae=Math.max(Ae,0),Ke=Math.min(Ke,$e.count));const Tt=Ke-Ae;if(Tt<0||Tt===1/0)return;le.setup(H,O,fe,W,Me);let lt,at=Y;if(Me!==null&&(lt=y.get(Me),at=ce,at.setIndex(lt)),H.isMesh)O.wireframe===!0?(ge.setLineWidth(O.wireframeLinewidth*bn()),at.setMode(I.LINES)):at.setMode(I.TRIANGLES);else if(H.isLine){let Yt=O.linewidth;Yt===void 0&&(Yt=1),ge.setLineWidth(Yt*bn()),H.isLineSegments?at.setMode(I.LINES):H.isLineLoop?at.setMode(I.LINE_LOOP):at.setMode(I.LINE_STRIP)}else H.isPoints?at.setMode(I.POINTS):H.isSprite&&at.setMode(I.TRIANGLES);if(H.isBatchedMesh)if(ht.get("WEBGL_multi_draw"))at.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const Yt=H._multiDrawStarts,Re=H._multiDrawCounts,tn=H._multiDrawCount,tt=Me?y.get(Me).bytesPerElement:1,mr=Ne.get(O).currentProgram.getUniforms();for(let qt=0;qt<tn;qt++)mr.setValue(I,"_gl_DrawID",qt),at.render(Yt[qt]/tt,Re[qt])}else if(H.isInstancedMesh)at.renderInstances(Ae,Tt,H.count);else if(W.isInstancedBufferGeometry){const Yt=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Re=Math.min(W.instanceCount,Yt);at.renderInstances(Ae,Tt,Re)}else at.render(Ae,Tt)};function lh(E,P,W,O){z!==null&&E.isNodeMaterial&&z.setObject(O,E),gt===!0&&j.setState(E,W,!1),E.transparent===!0&&E.side===Mi&&E.forceSinglePass===!1?(E.side=pn,E.needsUpdate=!0,ks(E,P,O),E.side=Ir,E.needsUpdate=!0,ks(E,P,O),E.side=Mi):ks(E,P,O)}this.compile=function(E,P,W=null){W===null&&(W=E),z!==null&&z.renderStart(E,P,W),w=K.get(W),w.init(P),T.push(w),W.traverseVisible(function(H){H.isLight&&H.layers.test(P.layers)&&(w.pushLight(H),H.castShadow&&w.pushShadow(H))}),E!==W&&E.traverseVisible(function(H){H.isLight&&H.layers.test(P.layers)&&(w.pushLight(H),H.castShadow&&w.pushShadow(H))}),w.setupLights(),z!==null&&z.updateLights(w.state.lightsArray),kt=this.localClippingEnabled,gt=j.init(this.clippingPlanes,kt),gt===!0&&j.setGlobalState(this.clippingPlanes,P),z!==null&&ue.render(w.state.shadowsArray,W,P);const O=new Set;return E.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const pe=H.material;if(pe)if(Array.isArray(pe))for(let we=0;we<pe.length;we++){const fe=pe[we];lh(fe,W,P,H),O.add(fe)}else lh(pe,W,P,H),O.add(pe)}),w=T.pop(),z!==null&&z.renderEnd(),O},this.compileAsync=function(E,P,W=null){const O=this.compile(E,P,W);return new Promise(H=>{function pe(){if(O.forEach(function(we){const Me=Ne.get(we).currentProgram;(Me===void 0||Me.isReady())&&O.delete(we)}),O.size===0){H(E);return}setTimeout(pe,10)}ht.get("KHR_parallel_shader_compile")!==null?pe():setTimeout(pe,10)})};let au=null;function z_(E){au&&au(E)}function uh(){pr.stop()}function ch(){pr.start()}const pr=new b_;pr.setAnimationLoop(z_),typeof self<"u"&&pr.setContext(self),this.setAnimationLoop=function(E){au=E,re.setAnimationLoop(E),E===null?pr.stop():pr.start()},re.addEventListener("sessionstart",uh),re.addEventListener("sessionend",ch),this.render=function(E,P){if(P!==void 0&&P.isCamera!==!0){nt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;z!==null&&z.renderStart(E,P);const W=re.enabled===!0&&re.isPresenting===!0,O=D!==null&&(k===null||W)&&D.begin(C,k);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),P.parent===null&&P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(D===null||D.isCompositing()===!1)&&(re.cameraAutoUpdate===!0&&re.updateCamera(P),P=re.getCamera()),E.isScene===!0&&E.onBeforeRender(C,E,P,k),w=K.get(E,T.length),w.init(P),w.state.textureUnits=Be.getTextureUnits(),T.push(w),ot.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),P.isArrayCamera?He.setFromArrayCamera(P):Oe.setFromProjectionMatrix(ot,Kn,P.reversedDepth),kt=this.localClippingEnabled,gt=j.init(this.clippingPlanes,kt),A=he.get(E,g.length),A.init(),g.push(A),this.info.render.frame++,re.enabled===!0&&re.isPresenting===!0){const we=C.xr.getDepthSensingMesh();we!==null&&ou(we,P,-1/0,C.sortObjects)}ou(E,P,0,C.sortObjects),A.finish(),z!==null&&z.updateLights(w.state.lightsArray),C.sortObjects===!0&&A.sort(me,Ue),Cn=re.enabled===!1||re.isPresenting===!1||re.hasDepthSensing()===!1,Cn&&b.addToRenderList(A,E),this.info.autoReset===!0&&this.info.reset(),gt===!0&&j.beginShadows();const H=w.state.shadowsArray;if(ue.render(H,E,P),gt===!0&&j.endShadows(),(O&&D.hasRenderPass())===!1){const we=A.opaque,fe=A.transmissive;if(w.setupLights(),P.isArrayCamera){const Me=P.cameras;if(fe.length>0)for(let Ce=0,ze=Me.length;Ce<ze;Ce++){const $e=Me[Ce];dh(we,fe,E,$e)}Cn&&b.render(E);for(let Ce=0,ze=Me.length;Ce<ze;Ce++){const $e=Me[Ce];fh(A,E,$e,$e.viewport)}}else fe.length>0&&dh(we,fe,E,P),Cn&&b.render(E),fh(A,E,P)}k!==null&&G===0&&(Be.updateMultisampleRenderTarget(k),Be.updateRenderTargetMipmap(k)),O&&D.end(C),E.isScene===!0&&E.onAfterRender(C,E,P),le.resetDefaultState(),U=-1,V=null,T.pop(),T.length>0?(w=T[T.length-1],Be.setTextureUnits(w.state.textureUnits),gt===!0&&j.setGlobalState(C.clippingPlanes,w.state.camera)):w=null,g.pop(),g.length>0?A=g[g.length-1]:A=null,z!==null&&z.renderEnd()};function ou(E,P,W,O){if(E.visible===!1)return;if(E.layers.test(P.layers)){if(E.isGroup)W=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(P);else if(E.isLight)w.pushLight(E),E.castShadow&&w.pushShadow(E);else if(E.isSprite){const we=P.isArrayCamera?He:Oe;if(!E.frustumCulled||E.intersectsFrustum(we)){O&&Dt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(ot);const fe=ne.update(E),Me=E.material;Me.visible&&A.push(E,fe,Me,W,Dt.z,null,P)}}else if(E.isMesh||E.isLine||E.isPoints){const we=P.isArrayCamera?He:Oe;if(!E.frustumCulled||E.intersectsFrustum(we)){const fe=ne.update(E),Me=E.material;if(O&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Dt.copy(E.boundingSphere.center)):(fe.boundingSphere===null&&fe.computeBoundingSphere(),Dt.copy(fe.boundingSphere.center)),Dt.applyMatrix4(E.matrixWorld).applyMatrix4(ot)),Array.isArray(Me)){const Ce=fe.groups;for(let ze=0,$e=Ce.length;ze<$e;ze++){const Ae=Ce[ze],Ke=Me[Ae.materialIndex];Ke&&Ke.visible&&A.push(E,fe,Ke,W,Dt.z,Ae,P)}}else Me.visible&&A.push(E,fe,Me,W,Dt.z,null,P)}}}const pe=E.children;for(let we=0,fe=pe.length;we<fe;we++)ou(pe[we],P,W,O)}function fh(E,P,W,O){const{opaque:H,transmissive:pe,transparent:we}=E;w.setupLightsView(W),gt===!0&&j.setGlobalState(C.clippingPlanes,W),O&&ge.viewport(Z.copy(O)),H.length>0&&Ka(H,P,W),pe.length>0&&Ka(pe,P,W),we.length>0&&Ka(we,P,W),ge.buffers.depth.setTest(!0),ge.buffers.depth.setMask(!0),ge.buffers.color.setMask(!0),ge.setPolygonOffset(!1)}function dh(E,P,W,O){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[O.id]===void 0){const Ae=ht.has("EXT_color_buffer_half_float")||ht.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[O.id]=new ui(1,1,{generateMipmaps:!0,type:Ae?di:xn,minFilter:ji,samples:Math.max(4,pt.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:je.workingColorSpace})}const pe=w.state.transmissionRenderTarget[O.id],we=O.viewport||Z;pe.setSize(we.z*C.transmissionResolutionScale,we.w*C.transmissionResolutionScale);const fe=C.getRenderTarget(),Me=C.getActiveCubeFace(),Ce=C.getActiveMipmapLevel();C.setRenderTarget(pe),C.getClearColor($),de=C.getClearAlpha(),de<1&&C.setClearColor(16777215,.5),C.clear(),Cn&&b.render(W);const ze=C.toneMapping;C.toneMapping=Ri;const $e=O.viewport;if(O.viewport!==void 0&&(O.viewport=void 0),w.setupLightsView(O),gt===!0&&j.setGlobalState(C.clippingPlanes,O),Ka(E,W,O),Be.updateMultisampleRenderTarget(pe),Be.updateRenderTargetMipmap(pe),ht.has("WEBGL_multisampled_render_to_texture")===!1){let Ae=!1;for(let Ke=0,Tt=P.length;Ke<Tt;Ke++){const lt=P[Ke],{object:at,geometry:Yt,material:Re,group:tn}=lt;if(Re.side===Mi&&at.layers.test(O.layers)){const tt=Re.side;Re.side=pn,Re.needsUpdate=!0,hh(at,W,O,Yt,Re,tn),Re.side=tt,Re.needsUpdate=!0,Ae=!0}}Ae===!0&&(Be.updateMultisampleRenderTarget(pe),Be.updateRenderTargetMipmap(pe))}C.setRenderTarget(fe,Me,Ce),C.setClearColor($,de),$e!==void 0&&(O.viewport=$e),C.toneMapping=ze}function Ka(E,P,W){const O=P.isScene===!0?P.overrideMaterial:null;for(let H=0,pe=E.length;H<pe;H++){const we=E[H],{object:fe,geometry:Me,group:Ce}=we;let ze=we.material;ze.allowOverride===!0&&O!==null&&(ze=O),fe.layers.test(W.layers)&&hh(fe,P,W,Me,ze,Ce)}}function hh(E,P,W,O,H,pe){z!==null&&H.isNodeMaterial&&z.setObject(E,H),E.onBeforeRender(C,P,W,O,H,pe),E.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),H.onBeforeRender(C,P,W,O,E,pe),H.transparent===!0&&H.side===Mi&&H.forceSinglePass===!1?(H.side=pn,H.needsUpdate=!0,C.renderBufferDirect(W,P,O,H,E,pe),H.side=Ir,H.needsUpdate=!0,C.renderBufferDirect(W,P,O,H,E,pe),H.side=Mi):C.renderBufferDirect(W,P,O,H,E,pe),E.onAfterRender(C,P,W,O,H,pe)}function ph(E){let P=0;for(const W of E)W.texture!==null&&P++;return P}function ks(E,P,W){P.isScene!==!0&&(P=Rn);const O=Ne.get(E),H=w.state.lights,pe=w.state.shadowsArray,we=H.state.version,fe=te.getParameters(E,H.state,pe,P,W,w.state.lightProbeGridArray),Me=te.getProgramCacheKey(fe);let Ce=O.programs;O.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?P.environment:null,O.fog=P.fog;const ze=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;O.envMap=R.get(E.envMap||O.environment,ze),O.envMapRotation=O.environment!==null&&E.envMap===null?P.environmentRotation:E.envMapRotation,Ce===void 0&&(E.addEventListener("dispose",it),Ce=new Map,O.programs=Ce,O.programVariants=new Map);let $e=Ce.get(Me);if($e!==void 0){if(O.currentProgram===$e&&O.lightsStateVersion===we)return gh(E,fe),$e}else fe.uniforms=te.getUniforms(E),z!==null&&E.isNodeMaterial&&z.build(E,W,fe),E.onBeforeCompile(fe,C),$e=te.acquireProgram(fe,Me),Ce.set(Me,$e),O.uniforms=fe.uniforms;const Ae=O.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ae.clippingPlanes=j.uniform),gh(E,fe),O.needsLights=W_(E),O.lightsStateVersion=we,O.needsLights&&(Ae.ambientLightColor.value=H.state.ambient,Ae.lightProbe.value=H.state.probe,Ae.sunLights.value=H.state.sun,Ae.sunLightShadows.value=H.state.sunShadow,Ae.directionalLights.value=H.state.directional,Ae.directionalLightShadows.value=H.state.directionalShadow,Ae.spotLights.value=H.state.spot,Ae.spotLightShadows.value=H.state.spotShadow,Ae.rectAreaLights.value=H.state.rectArea,Ae.ltc_1.value=H.state.rectAreaLTC1,Ae.ltc_2.value=H.state.rectAreaLTC2,Ae.pointLights.value=H.state.point,Ae.pointLightShadows.value=H.state.pointShadow,Ae.hemisphereLights.value=H.state.hemi,Ae.sunShadowMatrix.value=H.state.sunShadowMatrix,Ae.sunShadowCascade.value=H.state.sunShadowCascade,Ae.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Ae.spotLightMatrix.value=H.state.spotLightMatrix,Ae.spotLightMap.value=H.state.spotLightMap,Ae.pointShadowMatrix.value=H.state.pointShadowMatrix),O.numLightProbeGrids=ph(w.state.lightProbeGridArray),O.currentProgram=$e,O.uniformsList=null,$e}function H_(E,P,W,O,H){const pe=Ne.get(E),we=pe.currentProgram.id+","+O+","+H;let fe=pe.programVariants.get(we);return fe===void 0?(fe=ks(E,P,W),pe.programVariants.set(we,fe)):(pe.currentProgram=fe,pe.uniformsList=null,pe.outputColorSpace=O,pe.toneMapping=H),fe}function mh(E){if(E.uniformsList===null){const P=E.currentProgram.getUniforms();E.uniformsList=al.seqWithValue(P.seq,E.uniforms)}return E.uniformsList}function gh(E,P){const W=Ne.get(E);W.outputColorSpace=P.outputColorSpace,W.batching=P.batching,W.batchingColor=P.batchingColor,W.instancing=P.instancing,W.instancingColor=P.instancingColor,W.instancingMorph=P.instancingMorph,W.skinning=P.skinning,W.morphTargets=P.morphTargets,W.morphNormals=P.morphNormals,W.morphColors=P.morphColors,W.morphTargetsCount=P.morphTargetsCount,W.numClippingPlanes=P.numClippingPlanes,W.numIntersection=P.numClipIntersection,W.vertexAlphas=P.vertexAlphas,W.vertexTangents=P.vertexTangents,W.toneMapping=P.toneMapping}function G_(E,P,W,O,H){P.isScene!==!0&&(P=Rn),Be.resetTextureUnits();const pe=P.fog,we=O.isMeshStandardMaterial||O.isMeshLambertMaterial||O.isMeshPhongMaterial?P.environment:null,fe=k===null?C.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:je.workingColorSpace,Me=O.isMeshStandardMaterial||O.isMeshLambertMaterial&&!O.envMap||O.isMeshPhongMaterial&&!O.envMap,Ce=R.get(O.envMap||we,Me),ze=O.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,$e=!!W.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),Ae=!!W.morphAttributes.position,Ke=!!W.morphAttributes.normal,Tt=!!W.morphAttributes.color;let lt=Ri;O.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(lt=C.toneMapping);const at=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Yt=at!==void 0?at.length:0,Re=Ne.get(O),tn=w.state.lights;if(gt===!0&&(kt===!0||E!==V)){const _t=E===V&&O.id===U;j.setState(O,E,_t)}let tt=!1,mr=!1;O.version===Re.__version?Re.needsLights&&Re.lightsStateVersion!==tn.state.version||H.isBatchedMesh&&Re.batching===!1||!H.isBatchedMesh&&Re.batching===!0||H.isBatchedMesh&&Re.batchingColor===!0&&H._colorsTexture===null||H.isBatchedMesh&&Re.batchingColor===!1&&H._colorsTexture!==null||H.isInstancedMesh&&Re.instancing===!1||!H.isInstancedMesh&&Re.instancing===!0||H.isSkinnedMesh&&Re.skinning===!1||!H.isSkinnedMesh&&Re.skinning===!0||H.isInstancedMesh&&Re.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Re.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Re.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Re.instancingMorph===!1&&H.morphTexture!==null||Re.envMap!==Ce||O.fog===!0&&Re.fog!==pe||Re.numClippingPlanes!==void 0&&(Re.numClippingPlanes!==j.numPlanes||Re.numIntersection!==j.numIntersection)||Re.vertexAlphas!==ze||Re.vertexTangents!==$e||Re.morphTargets!==Ae||Re.morphNormals!==Ke||Re.morphColors!==Tt||Re.morphTargetsCount!==Yt||Re.numLightProbeGrids!==ph(w.state.lightProbeGridArray)?tt=!0:(Re.outputColorSpace!==fe||Re.toneMapping!==lt)&&(mr=!0):(tt=!0,Re.__version=O.version);let qt=Re.currentProgram;(tt===!0||mr===!0)&&(qt=mr===!0?H_(O,P,H,fe,lt):ks(O,P,H),z&&O.isNodeMaterial&&z.onUpdateProgram(O,qt,Re));let Za=!1,Fi=!1,gr=!1;const Je=qt.getUniforms(),zt=Re.uniforms;if(ge.useProgram(qt.program)&&(Za=!0,Fi=!0,gr=!0),O.id!==U&&(U=O.id,Fi=!0),Za||V!==E){ge.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),Je.setValue(I,"projectionMatrix",E.projectionMatrix),Je.setValue(I,"viewMatrix",E.matrixWorldInverse);const It=Je.map.cameraPosition;It!==void 0&&It.setValue(I,An.setFromMatrixPosition(E.matrixWorld)),pt.logarithmicDepthBuffer&&Je.setValue(I,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&Je.setValue(I,"isOrthographic",E.isOrthographicCamera===!0),V!==E&&(V=E,Fi=!0,gr=!0)}if(Re.needsLights&&(tn.state.sunShadowMap.length>0&&Je.setValue(I,"sunShadowMap",tn.state.sunShadowMap,Be),tn.state.directionalShadowMap.length>0&&Je.setValue(I,"directionalShadowMap",tn.state.directionalShadowMap,Be),tn.state.spotShadowMap.length>0&&Je.setValue(I,"spotShadowMap",tn.state.spotShadowMap,Be),tn.state.pointShadowMap.length>0&&Je.setValue(I,"pointShadowMap",tn.state.pointShadowMap,Be)),H.isSkinnedMesh){Je.setOptional(I,H,"bindMatrix"),Je.setOptional(I,H,"bindMatrixInverse");const _t=H.skeleton;_t&&(_t.boneTexture===null&&_t.computeBoneTexture(),Je.setValue(I,"boneTexture",_t.boneTexture,Be))}H.isBatchedMesh&&(Je.setOptional(I,H,"batchingTexture"),Je.setValue(I,"batchingTexture",H._matricesTexture,Be),Je.setOptional(I,H,"batchingIdTexture"),Je.setValue(I,"batchingIdTexture",H._indirectTexture,Be),Je.setOptional(I,H,"batchingColorTexture"),H._colorsTexture!==null&&Je.setValue(I,"batchingColorTexture",H._colorsTexture,Be));const zn=W.morphAttributes;if((zn.position!==void 0||zn.normal!==void 0||zn.color!==void 0)&&Q.update(H,W,qt),(Fi||Re.receiveShadow!==H.receiveShadow)&&(Re.receiveShadow=H.receiveShadow,Je.setValue(I,"receiveShadow",H.receiveShadow)),(O.isMeshStandardMaterial||O.isMeshLambertMaterial||O.isMeshPhongMaterial)&&O.envMap===null&&P.environment!==null&&(zt.envMapIntensity.value=P.environmentIntensity),zt.dfgLUT!==void 0&&(zt.dfgLUT.value=gA()),Fi){if(Je.setValue(I,"toneMappingExposure",C.toneMappingExposure),Re.needsLights&&V_(zt,gr),pe&&O.fog===!0&&oe.refreshFogUniforms(zt,pe),oe.refreshMaterialUniforms(zt,O,_e,be,w.state.transmissionRenderTarget[E.id]),Re.needsLights&&Re.numLightProbeGrids>0){const _t=S;let It=0;for(const pi of w.state.lightProbeGridArray)pi.texture!==null&&(_t.textures[It]=pi.texture,_t.min[It]=pi.boundingBox.min,_t.max[It]=pi.boundingBox.max,_t.resolution[It]=pi.resolution,It++);for(const pi in _t)_t[pi].length=It;zt.probesSH.value=_t.textures,zt.probesMin.value=_t.min,zt.probesMax.value=_t.max,zt.probesResolution.value=_t.resolution}al.upload(I,mh(Re),zt,Be)}if(O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(al.upload(I,mh(Re),zt,Be),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&Je.setValue(I,"center",H.center),Je.setValue(I,"modelViewMatrix",H.modelViewMatrix),Je.setValue(I,"normalMatrix",H.normalMatrix),Je.setValue(I,"modelMatrix",H.matrixWorld),O.uniformsGroups!==void 0){const _t=O.uniformsGroups;for(let It=0,pi=_t.length;It<pi;It++){const vh=_t[It];Pe.update(vh,qt),Pe.bind(vh,qt)}}return qt}function V_(E,P){E.ambientLightColor.needsUpdate=P,E.lightProbe.needsUpdate=P,E.sunLights.needsUpdate=P,E.sunLightShadows.needsUpdate=P,E.directionalLights.needsUpdate=P,E.directionalLightShadows.needsUpdate=P,E.pointLights.needsUpdate=P,E.pointLightShadows.needsUpdate=P,E.spotLights.needsUpdate=P,E.spotLightShadows.needsUpdate=P,E.rectAreaLights.needsUpdate=P,E.hemisphereLights.needsUpdate=P}function W_(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return ee},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(E,P,W){const O=Ne.get(E);O.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,O.__autoAllocateDepthBuffer===!1&&(O.__useRenderToTexture=!1),Ne.get(E.texture).__webglTexture=P,Ne.get(E.depthTexture).__webglTexture=O.__autoAllocateDepthBuffer?void 0:W,O.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,P){const W=Ne.get(E);W.__webglFramebuffer=P,W.__useDefaultFramebuffer=P===void 0},this.setRenderTarget=function(E,P=0,W=0){k=E,ee=P,G=W;let O=null,H=!1,pe=!1;if(E){const fe=Ne.get(E);if(fe.__useDefaultFramebuffer!==void 0){ge.bindFramebuffer(I.FRAMEBUFFER,fe.__webglFramebuffer),Z.copy(E.viewport),ae.copy(E.scissor),Le=E.scissorTest,ge.viewport(Z),ge.scissor(ae),ge.setScissorTest(Le),U=-1;return}else if(fe.__webglFramebuffer===void 0)Be.setupRenderTarget(E);else if(fe.__hasExternalTextures)Be.rebindTextures(E,Ne.get(E.texture).__webglTexture,Ne.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const ze=E.depthTexture;if(fe.__boundDepthTexture!==ze){if(ze!==null&&Ne.has(ze)&&(E.width!==ze.image.width||E.height!==ze.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Be.setupDepthRenderbuffer(E)}}const Me=E.texture;(Me.isData3DTexture||Me.isDataArrayTexture||Me.isCompressedArrayTexture)&&(pe=!0);const Ce=Ne.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ce[P])?O=Ce[P][W]:O=Ce[P],H=!0):E.samples>0&&Be.useMultisampledRTT(E)===!1?O=Ne.get(E).__webglMultisampledFramebuffer:Array.isArray(Ce)?O=Ce[W]:O=Ce,Z.copy(E.viewport),ae.copy(E.scissor),Le=E.scissorTest}else Z.copy(ye).multiplyScalar(_e).floor(),ae.copy(Fe).multiplyScalar(_e).floor(),Le=Ee;if(W!==0&&(O=q),ge.bindFramebuffer(I.FRAMEBUFFER,O)&&ge.drawBuffers(E,O),ge.viewport(Z),ge.scissor(ae),ge.setScissorTest(Le),H){const fe=Ne.get(E.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+P,fe.__webglTexture,W)}else if(pe){const fe=P;for(let Me=0;Me<E.textures.length;Me++){const Ce=Ne.get(E.textures[Me]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+Me,Ce.__webglTexture,W,fe)}}else if(E!==null&&W!==0){const fe=Ne.get(E.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,fe.__webglTexture,W)}U=-1};function _h(E){const P=Ne.get(E);return(P.__readFormat!==E.format||P.__readType!==E.type)&&(P.__readFormat=E.format,P.__readType=E.type,P.__formatReadable=pt.textureFormatReadable(E.format),P.__typeReadable=pt.textureTypeReadable(E.type)),P}this.readRenderTargetPixels=function(E,P,W,O,H,pe,we,fe=0){if(!(E&&E.isWebGLRenderTarget)){nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=Ne.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&we!==void 0&&(Me=Me[we],Array.isArray(Me)&&(Me=Me[0])),Me){ge.bindFramebuffer(I.FRAMEBUFFER,Me);try{const Ce=E.textures[fe],ze=Ce.format,$e=Ce.type;E.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+fe);const Ae=_h(Ce);if(Ae.__formatReadable===!1){nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ae.__typeReadable===!1){nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}P>=0&&P<=E.width-O&&W>=0&&W<=E.height-H&&I.readPixels(P,W,O,H,se.convert(ze),se.convert($e),pe)}finally{const Ce=k!==null?Ne.get(k).__webglFramebuffer:null;ge.bindFramebuffer(I.FRAMEBUFFER,Ce)}}},this.readRenderTargetPixelsAsync=async function(E,P,W,O,H,pe,we,fe=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Me=Ne.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&we!==void 0&&(Me=Me[we],Array.isArray(Me)&&(Me=Me[0])),Me)if(P>=0&&P<=E.width-O&&W>=0&&W<=E.height-H){ge.bindFramebuffer(I.FRAMEBUFFER,Me);const Ce=E.textures[fe],ze=Ce.format,$e=Ce.type;E.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+fe);const Ae=_h(Ce);if(Ae.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ae.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ke=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Ke),I.bufferData(I.PIXEL_PACK_BUFFER,pe.byteLength,I.STREAM_READ),I.readPixels(P,W,O,H,se.convert(ze),se.convert($e),0),I.bindBuffer(I.PIXEL_PACK_BUFFER,null);const Tt=k!==null?Ne.get(k).__webglFramebuffer:null;ge.bindFramebuffer(I.FRAMEBUFFER,Tt);const lt=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await yy(I,lt,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Ke),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,pe),I.bindBuffer(I.PIXEL_PACK_BUFFER,null),I.deleteBuffer(Ke),I.deleteSync(lt),pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,P=null,W=0){const O=Math.pow(2,-W),H=Math.floor(E.image.width*O),pe=Math.floor(E.image.height*O),we=P!==null?P.x:0,fe=P!==null?P.y:0;Be.setTexture2D(E,0),I.copyTexSubImage2D(I.TEXTURE_2D,W,0,0,we,fe,H,pe),ge.unbindTexture()},this.copyTextureToTexture=function(E,P,W=null,O=null,H=0,pe=0){let we,fe,Me,Ce,ze,$e,Ae,Ke,Tt;const lt=E.isCompressedTexture?E.mipmaps[pe]:E.image;if(W!==null)we=W.max.x-W.min.x,fe=W.max.y-W.min.y,Me=W.isBox3?W.max.z-W.min.z:1,Ce=W.min.x,ze=W.min.y,$e=W.isBox3?W.min.z:0;else{const Je=Math.pow(2,-H);we=Math.floor(lt.width*Je),fe=Math.floor(lt.height*Je),E.isDataArrayTexture?Me=lt.depth:E.isData3DTexture?Me=Math.floor(lt.depth*Je):Me=1,Ce=0,ze=0,$e=0}O!==null?(Ae=O.x,Ke=O.y,Tt=O.z):(Ae=0,Ke=0,Tt=0);const at=se.convert(P.format),Yt=se.convert(P.type);let Re;P.isData3DTexture?(Be.setTexture3D(P,0),Re=I.TEXTURE_3D):P.isDataArrayTexture||P.isCompressedArrayTexture?(Be.setTexture2DArray(P,0),Re=I.TEXTURE_2D_ARRAY):(Be.setTexture2D(P,0),Re=I.TEXTURE_2D),ge.activeTexture(I.TEXTURE0),ge.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,P.flipY),ge.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),ge.pixelStorei(I.UNPACK_ALIGNMENT,P.unpackAlignment);const tn=ge.getParameter(I.UNPACK_ROW_LENGTH),tt=ge.getParameter(I.UNPACK_IMAGE_HEIGHT),mr=ge.getParameter(I.UNPACK_SKIP_PIXELS),qt=ge.getParameter(I.UNPACK_SKIP_ROWS),Za=ge.getParameter(I.UNPACK_SKIP_IMAGES);ge.pixelStorei(I.UNPACK_ROW_LENGTH,lt.width),ge.pixelStorei(I.UNPACK_IMAGE_HEIGHT,lt.height),ge.pixelStorei(I.UNPACK_SKIP_PIXELS,Ce),ge.pixelStorei(I.UNPACK_SKIP_ROWS,ze),ge.pixelStorei(I.UNPACK_SKIP_IMAGES,$e);const Fi=E.isDataArrayTexture||E.isData3DTexture,gr=P.isDataArrayTexture||P.isData3DTexture;if(E.isDepthTexture){const Je=Ne.get(E),zt=Ne.get(P),zn=Ne.get(Je.__renderTarget),_t=Ne.get(zt.__renderTarget);ge.bindFramebuffer(I.READ_FRAMEBUFFER,zn.__webglFramebuffer),ge.bindFramebuffer(I.DRAW_FRAMEBUFFER,_t.__webglFramebuffer);for(let It=0;It<Me;It++)Fi&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ne.get(E).__webglTexture,H,$e+It),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ne.get(P).__webglTexture,pe,Tt+It)),I.blitFramebuffer(Ce,ze,Ce+we,ze+fe,Ae,Ke,Ae+we,Ke+fe,I.DEPTH_BUFFER_BIT,I.NEAREST);ge.bindFramebuffer(I.READ_FRAMEBUFFER,null),ge.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(H!==0||E.isRenderTargetTexture||Ne.has(E)){const Je=Ne.get(E),zt=Ne.get(P);ge.bindFramebuffer(I.READ_FRAMEBUFFER,L),ge.bindFramebuffer(I.DRAW_FRAMEBUFFER,X);for(let zn=0;zn<Me;zn++)Fi?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Je.__webglTexture,H,$e+zn):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Je.__webglTexture,H),gr?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,zt.__webglTexture,pe,Tt+zn):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,zt.__webglTexture,pe),H!==0?I.blitFramebuffer(Ce,ze,Ce+we,ze+fe,Ae,Ke,Ae+we,Ke+fe,I.COLOR_BUFFER_BIT,I.NEAREST):gr?I.copyTexSubImage3D(Re,pe,Ae,Ke,Tt+zn,Ce,ze,we,fe):I.copyTexSubImage2D(Re,pe,Ae,Ke,Ce,ze,we,fe);ge.bindFramebuffer(I.READ_FRAMEBUFFER,null),ge.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else gr?E.isDataTexture||E.isData3DTexture?I.texSubImage3D(Re,pe,Ae,Ke,Tt,we,fe,Me,at,Yt,lt.data):P.isCompressedArrayTexture?I.compressedTexSubImage3D(Re,pe,Ae,Ke,Tt,we,fe,Me,at,lt.data):I.texSubImage3D(Re,pe,Ae,Ke,Tt,we,fe,Me,at,Yt,lt):E.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,pe,Ae,Ke,we,fe,at,Yt,lt.data):E.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,pe,Ae,Ke,lt.width,lt.height,at,lt.data):I.texSubImage2D(I.TEXTURE_2D,pe,Ae,Ke,we,fe,at,Yt,lt);ge.pixelStorei(I.UNPACK_ROW_LENGTH,tn),ge.pixelStorei(I.UNPACK_IMAGE_HEIGHT,tt),ge.pixelStorei(I.UNPACK_SKIP_PIXELS,mr),ge.pixelStorei(I.UNPACK_SKIP_ROWS,qt),ge.pixelStorei(I.UNPACK_SKIP_IMAGES,Za),pe===0&&P.generateMipmaps===!0&&P.mipmapsAutoUpdate===!0&&I.generateMipmap(Re),ge.unbindTexture()},this.initRenderTarget=function(E){Ne.get(E).__webglFramebuffer===void 0&&Be.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?Be.setTextureCube(E,0):E.isData3DTexture?Be.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Be.setTexture2DArray(E,0):Be.setTexture2D(E,0),ge.unbindTexture()},this.resetState=function(){ee=0,G=0,k=null,ge.reset(),le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Kn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=je._getDrawingBufferColorSpace(e),n.unpackColorSpace=je._getUnpackColorSpace()}}function vA({chars:t,stage:e}){const n=Xe.useRef(null),i=Xe.useRef(null),r=Xe.useRef(null),s=Xe.useRef(null),a=Xe.useRef(null),o=Xe.useRef([]),l=Xe.useRef(null),u=Xe.useRef([]),h=Xe.useRef(null),m=Xe.useRef(null),f=Xe.useRef(e);return Xe.useEffect(()=>{f.current=e},[e]),Xe.useEffect(()=>{const p=n.current;if(!p)return;const v=p.clientWidth||window.innerWidth,M=p.clientHeight||window.innerHeight,_=new jy;i.current=_;const c=new Un(55,v/M,.1,100);c.position.set(0,0,9),r.current=c;const d=new _A({antialias:!0,alpha:!0,powerPreference:"high-performance"});d.setSize(v,M),d.setPixelRatio(Math.min(window.devicePixelRatio,2)),d.toneMapping=Hd,d.toneMappingExposure=1.2,s.current=d,p.appendChild(d.domElement);const x=new yM(16777215,.7);_.add(x);const S=new lm(16777215,2);S.position.set(5,8,6),_.add(S);const A=new lm(8947848,1.5);A.position.set(-6,-5,-4),_.add(A);const w=new xM(16777215,3.5,20);w.position.set(0,0,0),_.add(w);const g=me=>{const Ue=document.createElement("canvas");Ue.width=256,Ue.height=256;const ye=Ue.getContext("2d");ye.fillStyle="#0a0a0a",ye.fillRect(0,0,256,256),ye.strokeStyle="#ffffff",ye.lineWidth=10,ye.strokeRect(8,8,240,240),ye.strokeStyle="#444444",ye.lineWidth=2,ye.strokeRect(20,20,216,216),ye.fillStyle="#ffffff",ye.font='bold 140px "JetBrains Mono", monospace',ye.textAlign="center",ye.textBaseline="middle",ye.fillText(me,128,134);const Fe=new cM(Ue);return Fe.anisotropy=4,Fe},T=[],D=new Os(.75,.95,.18),C=4.6;for(let me=0;me<8;me++){const Ue=me/8*Math.PI*2-Math.PI/2,ye=g(t[me]||" "),Fe=[new yr({color:2236962,metalness:.9,roughness:.2}),new yr({color:2236962,metalness:.9,roughness:.2}),new yr({color:2236962,metalness:.9,roughness:.2}),new yr({color:2236962,metalness:.9,roughness:.2}),new yr({map:ye,metalness:.7,roughness:.25}),new yr({color:1118481,metalness:.9,roughness:.2})],Ee=new ci(D,Fe),Oe=new F(Math.cos(Ue)*C,Math.sin(Ue)*C,0);Ee.position.copy(Oe),Ee.userData={originAngle:Ue,initialRadius:C,targetRadius:1.8,convergeProgress:0,bobSpeed:.02+me*.003},_.add(Ee),T.push(Ee)}o.current=T;const N=new Float32Array(8*2*3),z=new En;z.setAttribute("position",new bi(N,3));const q=new S_({color:16777215,transparent:!0,opacity:.75,blending:Ll}),L=new lM(z,q);_.add(L),l.current=L;const X=[];[{radius:3.8,tube:.06,radialSegments:16,tubularSegments:64,speedZ:.008,speedY:.004,color:6710886},{radius:3.1,tube:.07,radialSegments:16,tubularSegments:8,speedZ:-.015,speedY:-.003,color:16777215},{radius:2.3,tube:.05,radialSegments:16,tubularSegments:64,speedZ:.022,speedY:.006,color:11184810},{radius:1.6,tube:.08,radialSegments:16,tubularSegments:48,speedZ:-.032,speedY:.008,color:16777215},{radius:1,tube:.04,radialSegments:16,tubularSegments:32,speedZ:.045,speedY:-.01,color:16777215}].forEach(me=>{const Ue=new th(me.radius,me.tube,me.radialSegments,me.tubularSegments),ye=new yr({color:me.color,metalness:.95,roughness:.15,wireframe:me.tubularSegments===8}),Fe=new ci(Ue,ye);Fe.userData={speedZ:me.speedZ,speedY:me.speedY},Fe.scale.set(.1,.1,.1),_.add(Fe),X.push(Fe)}),u.current=X;const G=new eh(.7,3),k=new x_({color:16777215,wireframe:!0,transparent:!0,opacity:.85}),U=new ci(G,k);U.scale.set(.01,.01,.01),_.add(U),m.current=U;const V=280,Z=new En,ae=new Float32Array(V*3),Le=new Float32Array(V*3);for(let me=0;me<V*3;me+=3)ae[me]=(Math.random()-.5)*16,ae[me+1]=(Math.random()-.5)*16,ae[me+2]=(Math.random()-.5)*14,Le[me]=(Math.random()-.5)*.008,Le[me+1]=(Math.random()-.5)*.008,Le[me+2]=(Math.random()-.5)*.012;Z.setAttribute("position",new bi(ae,3));const $=new y_({color:16777215,size:.08,transparent:!0,opacity:.7,blending:Ll}),de=new uM(Z,$);_.add(de),h.current={points:de,vel:Le};let Se=new EM;const be=()=>{a.current=requestAnimationFrame(be),Se.getDelta();const me=Se.getElapsedTime(),Ue=f.current;Ue==="portal"||Ue==="game_reveal"?c.position.z=Bu.lerp(c.position.z,6.2,.03):c.position.z=Bu.lerp(c.position.z,8.8,.05),X.forEach(Ee=>{Ee.rotation.z+=Ee.userData.speedZ,Ee.rotation.y+=Ee.userData.speedY,(Ue==="unlock"||Ue==="portal"||Ue==="game_reveal")&&Ee.scale.lerp(new F(1,1,1),.04)}),U&&(U.rotation.x+=.02,U.rotation.y+=.03,Ue==="portal"||Ue==="game_reveal"?U.scale.lerp(new F(1.3+Math.sin(me*3)*.1,1.3+Math.sin(me*3)*.1,1.3),.05):Ue==="unlock"&&U.scale.lerp(new F(.8,.8,.8),.05));const ye=L.geometry.attributes.position.array;let Fe=0;if(T.forEach((Ee,Oe)=>{const He=Ee.userData;let gt=He.initialRadius;Ue==="unlock"?gt=2.4:(Ue==="portal"||Ue==="game_reveal")&&(gt=3.6);const kt=Bu.lerp(Math.sqrt(Ee.position.x*Ee.position.x+Ee.position.y*Ee.position.y),gt,.05),ot=He.originAngle+(Ue==="portal"||Ue==="game_reveal"?me*.2:0),An=Math.sin(me*2+Oe)*.15;Ee.position.x=Math.cos(ot)*kt,Ee.position.y=Math.sin(ot)*kt,Ee.position.z=An,Ee.rotation.y=Math.sin(me+Oe)*.2,Ee.rotation.x=Math.cos(me+Oe)*.1,ye[Fe++]=Ee.position.x,ye[Fe++]=Ee.position.y,ye[Fe++]=Ee.position.z,ye[Fe++]=0,ye[Fe++]=0,ye[Fe++]=0}),L.geometry.attributes.position.needsUpdate=!0,h.current){const Ee=h.current.points.geometry.attributes.position.array,Oe=h.current.vel;for(let He=0;He<Ee.length;He+=3)Ee[He]+=Oe[He],Ee[He+1]+=Oe[He+1],Ee[He+2]+=Oe[He+2],Ee[He]>8&&(Ee[He]=-8),Ee[He]<-8&&(Ee[He]=8),Ee[He+1]>8&&(Ee[He+1]=-8),Ee[He+1]<-8&&(Ee[He+1]=8),Ee[He+2]>7&&(Ee[He+2]=-7),Ee[He+2]<-7&&(Ee[He+2]=7);h.current.points.geometry.attributes.position.needsUpdate=!0}d.render(_,c)};be();const _e=()=>{if(!p||!d||!c)return;const me=p.clientWidth||window.innerWidth,Ue=p.clientHeight||window.innerHeight;c.aspect=me/Ue,c.updateProjectionMatrix(),d.setSize(me,Ue)};return window.addEventListener("resize",_e),()=>{window.removeEventListener("resize",_e),a.current&&cancelAnimationFrame(a.current),d.domElement&&p.contains(d.domElement)&&p.removeChild(d.domElement),d.dispose()}},[t]),J.jsx("div",{ref:n,style:{position:"absolute",inset:0,width:"100%",height:"100%",pointerEvents:"none",zIndex:5}})}function xA({authData:t,onRestart:e}){const n=(t==null?void 0:t.chars)||["H","A","C","K","A","D","K","U"];t!=null&&t.room01Key||n.slice(0,4).join(""),t!=null&&t.room02Key||n.slice(4,8).join("");const[i,r]=Xe.useState("verify"),[s,a]=Xe.useState(-1),[o,l]=Xe.useState(0),u=Xe.useRef(!1);Xe.useEffect(()=>{let f=0;const p=setInterval(()=>{f<8?(a(f),l(Math.round((f+1)/8*100)),vn.playKeyTyping(),f++):clearInterval(p)},90),v=setTimeout(()=>{r("unlock"),vn.playLockAssemble()},1300),M=setTimeout(()=>{r("portal"),vn.playLockOpen(),vn.playPortalHum()},3200),_=setTimeout(()=>{r("game_reveal"),u.current=!0},5400),c=setTimeout(()=>{u.current||(r("game_reveal"),u.current=!0)},6e3);return()=>{clearInterval(p),clearTimeout(v),clearTimeout(M),clearTimeout(_),clearTimeout(c)}},[]);const h=()=>{vn.playLockOpen(),window.open(IS,"_blank","noopener,noreferrer")},m=()=>{r("game_reveal"),u.current=!0};return J.jsxs("div",{style:{position:"fixed",inset:0,backgroundColor:"#000000",zIndex:100,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",overflow:"hidden"},children:[J.jsx("style",{children:`
        @keyframes pulseGlowText {
          0%, 100% { text-shadow: 0 0 20px rgba(255, 255, 255, 0.8), 0 0 40px rgba(255, 255, 255, 0.4); }
          50% { text-shadow: 0 0 40px #ffffff, 0 0 80px rgba(255, 255, 255, 0.85); }
        }
        @keyframes cardFloating {
          0%, 100% { transform: translateY(0px) rotateX(1deg); }
          50% { transform: translateY(-8px) rotateX(-1deg); }
        }
        @keyframes buttonLightSweep {
          0% { left: -120%; }
          50%, 100% { left: 140%; }
        }
        @keyframes portalAuraPulse {
          0%, 100% { transform: scale(1); opacity: 0.7; }
          50% { transform: scale(1.12); opacity: 1; }
        }

        .launch-game-button {
          background-color: #ffffff !important;
          color: #000000 !important;
          border: 2px solid #ffffff !important;
          font-family: var(--font-tech);
          font-size: 1.28rem;
          font-weight: 900;
          letter-spacing: 0.22em;
          padding: 20px 48px;
          cursor: pointer;
          position: relative;
          text-transform: uppercase;
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
          overflow: hidden;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          box-shadow: 0 0 35px rgba(255, 255, 255, 0.75), 0 0 70px rgba(255, 255, 255, 0.3);
        }

        .launch-game-button::after {
          content: '';
          position: absolute;
          top: 0;
          left: -120%;
          width: 80%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(0, 0, 0, 0.35), transparent);
          animation: buttonLightSweep 3s infinite ease-in-out;
        }

        .launch-game-button:hover {
          transform: scale(1.05) translateY(-2px);
          box-shadow: 0 0 60px #ffffff, 0 0 110px rgba(255, 255, 255, 0.9);
        }

        .launch-game-button:active {
          transform: scale(0.97) translateY(1px);
        }

        .floating-game-card {
          animation: cardFloating 6s ease-in-out infinite;
        }
      `}),i!=="game_reveal"&&J.jsx("button",{onClick:m,style:{position:"absolute",top:"24px",right:"24px",background:"transparent",border:"1px solid #444444",color:"#888888",padding:"8px 18px",fontFamily:"var(--font-tech)",fontSize:"0.75rem",letterSpacing:"0.2em",cursor:"pointer",zIndex:120,transition:"all 0.2s"},onMouseEnter:f=>{f.currentTarget.style.color="#ffffff",f.currentTarget.style.borderColor="#ffffff"},onMouseLeave:f=>{f.currentTarget.style.color="#888888",f.currentTarget.style.borderColor="#444444"},children:"SKIP TO GAME >>"}),(i==="unlock"||i==="portal"||i==="game_reveal")&&J.jsx(vA,{chars:n,stage:i}),(i==="portal"||i==="game_reveal")&&J.jsx("div",{style:{position:"absolute",width:"520px",height:"520px",borderRadius:"50%",background:"radial-gradient(circle, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.12) 45%, transparent 70%)",boxShadow:"0 0 120px rgba(255, 255, 255, 0.5), inset 0 0 80px rgba(255, 255, 255, 0.3)",filter:"blur(20px)",pointerEvents:"none",zIndex:4,animation:"portalAuraPulse 4s infinite ease-in-out"}}),i==="verify"&&J.jsxs("div",{style:{zIndex:20,textAlign:"center",maxWidth:"880px",padding:"20px",animation:"fadeIn 0.3s ease"},children:[J.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:"8px",padding:"6px 20px",border:"1.5px solid #ffffff",backgroundColor:"rgba(255, 255, 255, 0.1)",boxShadow:"0 0 15px rgba(255, 255, 255, 0.5)",marginBottom:"20px"},children:[J.jsx(AS,{size:18,color:"#ffffff"}),J.jsx("span",{style:{fontSize:"0.85rem",letterSpacing:"0.3em",fontFamily:"var(--font-tech)",color:"#ffffff",fontWeight:800},children:"STATUS: VERIFIED"})]}),J.jsx("h2",{style:{fontSize:"clamp(1.6rem, 4vw, 2.6rem)",fontWeight:800,letterSpacing:"0.22em",fontFamily:"var(--font-tech)",color:"#ffffff",margin:"0 0 32px 0",textShadow:"0 0 20px rgba(255, 255, 255, 0.8)"},children:"ALL SECURITY NODES VERIFIED"}),J.jsx("div",{style:{display:"flex",justifyContent:"center",gap:"10px",marginBottom:"32px"},children:n.map((f,p)=>{const v=s>=p;return J.jsx("div",{className:`char-input-box ${v?"illuminated":""}`,style:{display:"flex",alignItems:"center",justifyContent:"center",pointerEvents:"none"},children:f},p)})}),J.jsxs("div",{style:{maxWidth:"340px",margin:"0 auto"},children:[J.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:"0.78rem",fontFamily:"var(--font-mono)",color:"#888888",marginBottom:"6px"},children:[J.jsx("span",{children:"SECURITY PROTOCOL"}),J.jsxs("span",{children:[o,"%"]})]}),J.jsx("div",{style:{height:"3px",backgroundColor:"#222222",overflow:"hidden"},children:J.jsx("div",{style:{height:"100%",backgroundColor:"#ffffff",boxShadow:"0 0 8px #ffffff",transition:"width 0.1s linear",width:`${o}%`}})})]})]}),i==="unlock"&&J.jsxs("div",{style:{position:"absolute",top:"12%",zIndex:20,textAlign:"center",animation:"fadeIn 0.5s ease"},children:[J.jsx("h1",{style:{fontSize:"clamp(2.4rem, 5.5vw, 4rem)",fontWeight:900,letterSpacing:"0.22em",fontFamily:"var(--font-tech)",color:"#ffffff",textShadow:"0 0 30px #ffffff",margin:"0 0 8px 0"},children:"ACCESS GRANTED"}),J.jsx("div",{style:{fontSize:"1.1rem",letterSpacing:"0.35em",color:"#cccccc",fontFamily:"var(--font-tech)",fontWeight:700},children:"FINAL CHALLENGE UNLOCKED"})]}),i==="portal"&&J.jsxs("div",{style:{position:"absolute",bottom:"12%",zIndex:20,textAlign:"center",animation:"fadeIn 0.5s ease"},children:[J.jsx("div",{style:{fontSize:"0.95rem",letterSpacing:"0.4em",fontFamily:"var(--font-tech)",color:"#ffffff",fontWeight:800,textShadow:"0 0 15px #ffffff",marginBottom:"6px"},children:"DIMENSIONAL GATEWAY STABILIZING"}),J.jsx("div",{style:{fontSize:"0.72rem",letterSpacing:"0.2em",color:"#888888",fontFamily:"var(--font-mono)"},children:"ESTABLISHING TRANS-SECTOR LINK TO DEVIL DIMENSION..."})]}),i==="game_reveal"&&J.jsxs("div",{className:"floating-game-card",style:{zIndex:30,maxWidth:"780px",width:"92%",margin:"0 auto",animation:"cardEnter 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards",position:"relative"},children:[J.jsx("style",{children:`
            @keyframes cardEnter {
              0% { transform: scale(0.6) translateY(40px); opacity: 0; }
              100% { transform: scale(1) translateY(0); opacity: 1; }
            }
          `}),J.jsxs("div",{style:{backgroundColor:"rgba(5, 5, 5, 0.92)",backdropFilter:"blur(16px)",border:"2px solid #ffffff",boxShadow:"0 0 60px rgba(255, 255, 255, 0.4), inset 0 0 40px rgba(255, 255, 255, 0.08)",padding:"52px 36px",textAlign:"center",position:"relative"},children:[J.jsx("div",{style:{position:"absolute",top:"-1px",left:"-1px",width:"12px",height:"12px",borderTop:"3px solid #ffffff",borderLeft:"3px solid #ffffff"}}),J.jsx("div",{style:{position:"absolute",top:"-1px",right:"-1px",width:"12px",height:"12px",borderTop:"3px solid #ffffff",borderRight:"3px solid #ffffff"}}),J.jsx("div",{style:{position:"absolute",bottom:"-1px",left:"-1px",width:"12px",height:"12px",borderBottom:"3px solid #ffffff",borderLeft:"3px solid #ffffff"}}),J.jsx("div",{style:{position:"absolute",bottom:"-1px",right:"-1px",width:"12px",height:"12px",borderBottom:"3px solid #ffffff",borderRight:"3px solid #ffffff"}}),J.jsx("div",{style:{fontSize:"0.88rem",letterSpacing:"0.42em",fontFamily:"var(--font-tech)",color:"#aaaaaa",fontWeight:800,textTransform:"uppercase",marginBottom:"16px"},children:"ESCAPE ROOM // FINAL DESTINATION"}),J.jsxs("div",{style:{position:"relative",margin:"20px 0 24px 0",display:"inline-block"},children:[J.jsx("div",{style:{position:"absolute",inset:"-14px -24px",border:"1px dashed rgba(255, 255, 255, 0.35)",pointerEvents:"none"}}),J.jsx("h1",{style:{fontSize:"clamp(3rem, 8vw, 5.6rem)",fontWeight:900,letterSpacing:"0.12em",fontFamily:"var(--font-tech)",color:"#ffffff",margin:0,textTransform:"uppercase",animation:"pulseGlowText 3s infinite ease-in-out"},children:"LEVEL DEVIL"})]}),J.jsx("div",{style:{fontSize:"1.05rem",letterSpacing:"0.22em",color:"#ffffff",fontFamily:"var(--font-tech)",fontWeight:700,textTransform:"uppercase",marginBottom:"40px",textShadow:"0 0 10px rgba(255, 255, 255, 0.6)"},children:'"YOU HAVE UNLOCKED THE FINAL CHALLENGE."'}),J.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"20px"},children:[J.jsxs("button",{type:"button",onClick:h,className:"launch-game-button",children:["LAUNCH GAME",J.jsx(MS,{size:24,style:{strokeWidth:2.5}})]}),J.jsxs("button",{type:"button",onClick:e,className:"cyber-button cyber-button-secondary",style:{minWidth:"200px",padding:"12px 24px",fontSize:"0.85rem",letterSpacing:"0.2em"},children:[J.jsx(wS,{size:16}),"RESTART MISSION"]})]}),J.jsxs("div",{style:{marginTop:"40px",paddingTop:"16px",borderTop:"1px solid #1c1c1c",display:"flex",justifyContent:"space-between",alignItems:"center",fontSize:"0.7rem",letterSpacing:"0.16em",color:"#555555",fontFamily:"var(--font-mono)"},children:[J.jsx("span",{children:"SECURITY OVERRIDE: 100%"}),J.jsx("span",{children:"HOST: POKI // LEVEL-DEVIL"})]})]})]})]})}function SA(){const[t,e]=Xe.useState("input"),[n,i]=Xe.useState(null),[r,s]=Xe.useState(!1),[a,o]=Xe.useState("");Xe.useEffect(()=>{const m=()=>{const p=new Date,v=p.toTimeString().split(" ")[0]+"."+String(Math.floor(p.getMilliseconds()/100));o(v)};m();const f=setInterval(m,100);return()=>clearInterval(f)},[]);const l=()=>{const m=vn.toggleMute();s(m),m||vn.playKeyTyping()},u=m=>{i(m),e("success_experience")},h=()=>{i(null),e("input")};return J.jsxs("div",{style:{minHeight:"100vh",display:"flex",flexDirection:"column",position:"relative",overflowX:"hidden"},children:[J.jsx(LS,{}),J.jsxs("header",{style:{position:"relative",zIndex:20,display:"flex",justifyContent:"space-between",alignItems:"center",padding:"20px 32px",borderBottom:"1px solid #1a1a1a",backgroundColor:"rgba(0, 0, 0, 0.75)",backdropFilter:"blur(10px)",flexWrap:"wrap",gap:"16px"},children:[J.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"14px"},children:[J.jsx("div",{style:{width:"32px",height:"32px",border:"1.5px solid #ffffff",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 0 10px rgba(255, 255, 255, 0.4)"},children:J.jsx(RS,{size:18,color:"#ffffff"})}),J.jsxs("div",{children:[J.jsx("div",{style:{fontFamily:"var(--font-tech)",fontSize:"1rem",fontWeight:800,letterSpacing:"0.22em",color:"#ffffff",textTransform:"uppercase"},children:"ESCAPE ROOM // ACCESS CONSOLE"}),J.jsx("div",{style:{fontSize:"0.68rem",letterSpacing:"0.2em",color:"#666666",fontFamily:"var(--font-mono)"},children:"SYSTEM PROTOCOL 2-ROOM KEY VALIDATION"})]})]}),J.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"20px"},children:[J.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",fontSize:"0.78rem",fontFamily:"var(--font-mono)",color:"#888888",borderRight:"1px solid #222222",paddingRight:"18px"},children:[J.jsx(TS,{size:12,color:"#ffffff",style:{animation:"borderPulse 2s infinite"}}),J.jsxs("span",{children:["TIME: ",a]})]}),J.jsxs("button",{onClick:l,title:r?"Unmute SFX":"Mute SFX",style:{background:"transparent",border:"1px solid #333333",color:r?"#555555":"#ffffff",cursor:"pointer",padding:"7px 12px",display:"flex",alignItems:"center",gap:"6px",fontFamily:"var(--font-tech)",fontSize:"0.72rem",letterSpacing:"0.15em",transition:"all 0.2s ease"},onMouseEnter:m=>{m.currentTarget.style.borderColor="#ffffff",m.currentTarget.style.color="#ffffff"},onMouseLeave:m=>{m.currentTarget.style.borderColor=r?"#333333":"#666666",m.currentTarget.style.color=r?"#555555":"#ffffff"},children:[r?J.jsx(PS,{size:15}):J.jsx(bS,{size:15}),J.jsx("span",{children:r?"MUTED":"AUDIO"})]})]})]}),J.jsxs("main",{style:{flex:1,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",padding:"40px 20px",position:"relative",zIndex:10},children:[t==="input"&&J.jsxs("div",{style:{width:"100%",animation:"fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1)"},children:[J.jsxs("div",{style:{textAlign:"center",marginBottom:"36px"},children:[J.jsx("div",{style:{fontSize:"0.82rem",letterSpacing:"0.45em",color:"#888888",fontFamily:"var(--font-tech)",marginBottom:"10px",textTransform:"uppercase"},children:"CHALLENGE CLEARANCE // LEVEL FINAL"}),J.jsx("h1",{style:{fontSize:"clamp(2rem, 5vw, 3.2rem)",fontWeight:900,letterSpacing:"0.16em",fontFamily:"var(--font-tech)",color:"#ffffff",margin:0,textTransform:"uppercase",textShadow:"0 0 20px rgba(255, 255, 255, 0.6)"},children:"ESCAPE ROOM"}),J.jsx("div",{style:{width:"80px",height:"2px",backgroundColor:"#ffffff",margin:"14px auto 16px auto",boxShadow:"0 0 10px #ffffff"}}),J.jsx("p",{style:{fontSize:"0.88rem",letterSpacing:"0.15em",color:"#aaaaaa",fontFamily:"var(--font-mono)",maxWidth:"680px",margin:"0 auto",lineHeight:1.6},children:"ENTER THE EIGHT INDIVIDUAL CHARACTERS REPRESENTING TWO 4-LETTER KEYS. BOX 01–04 CORRESPOND TO ROOM 01 AND BOX 05–08 CORRESPOND TO ROOM 02."})]}),J.jsx(kS,{onAccessGranted:u})]}),t==="success_experience"&&J.jsx(xA,{authData:n,onRestart:h})]}),J.jsxs("footer",{style:{position:"relative",zIndex:20,borderTop:"1px solid #141414",padding:"16px 32px",backgroundColor:"rgba(0, 0, 0, 0.85)",display:"flex",justifyContent:"space-between",alignItems:"center",fontSize:"0.7rem",letterSpacing:"0.18em",color:"#444444",fontFamily:"var(--font-mono)",flexWrap:"wrap",gap:"10px"},children:[J.jsx("span",{children:"ENCRYPTION ARCHITECTURE: DUAL-ROOM MATRIX"}),J.jsx("span",{children:"STATUS: SECURE TERMINAL v2.4"})]})]})}uc.createRoot(document.getElementById("root")).render(J.jsx(ov.StrictMode,{children:J.jsx(SA,{})}));
