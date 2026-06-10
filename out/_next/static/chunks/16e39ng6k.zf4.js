(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,18566,(t,e,o)=>{e.exports=t.r(76562)},70319,t=>{"use strict";var e=t.i(71645);let o=function(){for(var t,e,o=0,a="",r=arguments.length;o<r;o++)(t=arguments[o])&&(e=function t(e){var o,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e)){var s=e.length;for(o=0;o<s;o++)e[o]&&(a=t(e[o]))&&(r&&(r+=" "),r+=a)}else for(a in e)e[a]&&(r&&(r+=" "),r+=a);return r}(t))&&(a&&(a+=" "),a+=e);return a};var a=t=>"number"==typeof t&&!isNaN(t),r=t=>"string"==typeof t||"function"==typeof t?t:null,s=t=>(0,e.isValidElement)(t)||"string"==typeof t||"function"==typeof t||a(t);function n({enter:t,exit:o,appendPosition:a=!1,collapse:r=!0,collapseDuration:s=300}){return function({children:n,position:i,preventExitTransition:l,done:f,nodeRef:c,isIn:d,playToast:u}){let y=a?`${t}--${i}`:t,p=a?`${o}--${i}`:o,m=(0,e.useRef)(0);return(0,e.useLayoutEffect)(()=>{let t=c.current,e=y.split(" "),o=a=>{a.target===c.current&&(u(),t.removeEventListener("animationend",o),t.removeEventListener("animationcancel",o),0===m.current&&"animationcancel"!==a.type&&t.classList.remove(...e))};t.classList.add(...e),t.addEventListener("animationend",o),t.addEventListener("animationcancel",o)},[]),(0,e.useEffect)(()=>{let t=c.current,e=()=>{t.removeEventListener("animationend",e),r?function(t,e,o=300){let{scrollHeight:a,style:r}=t;requestAnimationFrame(()=>{r.minHeight="initial",r.height=a+"px",r.transition=`all ${o}ms`,requestAnimationFrame(()=>{r.height="0",r.padding="0",r.margin="0",setTimeout(e,o)})})}(t,f,s):f()};d||(l?e():(m.current=1,t.className+=` ${p}`,t.addEventListener("animationend",e)))},[d]),e.default.createElement(e.default.Fragment,null,n)}}function i(t,e){return{content:l(t.content,t.props),containerId:t.props.containerId,id:t.props.toastId,theme:t.props.theme,type:t.props.type,data:t.props.data||{},isLoading:t.props.isLoading,icon:t.props.icon,reason:t.removalReason,status:e}}function l(t,o,a=!1){return(0,e.isValidElement)(t)&&"string"!=typeof t.type?(0,e.cloneElement)(t,{closeToast:o.closeToast,toastProps:o,data:o.data,isPaused:a}):"function"==typeof t?t({closeToast:o.closeToast,toastProps:o,data:o.data,isPaused:a}):t}function f({delay:t,isRunning:a,closeToast:r,type:s="default",hide:n,className:i,controlledProgress:l,progress:c,rtl:d,isIn:u,theme:y}){let p=n||l&&0===c,m={animationDuration:`${t}ms`,animationPlayState:a?"running":"paused"};l&&(m.transform=`scaleX(${c})`);let g=o("Toastify__progress-bar",l?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${y}`,`Toastify__progress-bar--${s}`,{"Toastify__progress-bar--rtl":d}),_="function"==typeof i?i({rtl:d,type:s,defaultClassName:g}):o(g,i);return e.default.createElement("div",{className:"Toastify__progress-bar--wrp","data-hidden":p},e.default.createElement("div",{className:`Toastify__progress-bar--bg Toastify__progress-bar-theme--${y} Toastify__progress-bar--${s}`}),e.default.createElement("div",{role:"progressbar","aria-hidden":p?"true":"false","aria-label":"notification timer","aria-valuenow":l?Math.round(100*c):void 0,"aria-valuemin":0,"aria-valuemax":100,className:_,style:m,...{[l&&c>=1?"onTransitionEnd":"onAnimationEnd"]:l&&c<1?null:()=>{u&&r()}}}))}var c=1,d=()=>`${c++}`,u=new Map,y=[],p=new Set,m=t=>p.forEach(e=>e(t));function g(t,e){var o;if(e)return!!(null!=(o=u.get(e))&&o.isToastActive(t));let a=!1;return u.forEach(e=>{e.isToastActive(t)&&(a=!0)}),a}function _(t,e){s(t)&&(u.size>0||y.push({content:t,options:e}),u.forEach(o=>{o.buildToast(t,e)}))}function b(t,e){u.forEach(o=>{null!=e&&null!=e&&e.containerId&&(null==e?void 0:e.containerId)!==o.id||o.toggle(t,null==e?void 0:e.id)})}function v(t,e){return _(t,e),e.toastId}function h(t,e){var o;return{...e,type:e&&e.type||t,toastId:(o=e)&&("string"==typeof o.toastId||a(o.toastId))?o.toastId:d()}}function T(t){return(e,o)=>v(e,h(t,o))}function x(t,e){return v(t,h("default",e))}x.loading=(t,e)=>v(t,h("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...e})),x.promise=function(t,{pending:e,error:o,success:a},r){let s;e&&(s="string"==typeof e?x.loading(e,r):x.loading(e.render,{...r,...e}));let n={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},i=(t,e,o)=>{if(null==e)return void x.dismiss(s);let a={type:t,...n,...r,data:o},i="string"==typeof e?{render:e}:e;return s?x.update(s,{...a,...i}):x(i.render,{...a,...i}),o},l="function"==typeof t?t():t;return l.then(t=>i("success",a,t)).catch(t=>i("error",o,t)),l},x.success=T("success"),x.info=T("info"),x.error=T("error"),x.warning=T("warning"),x.warn=x.warning,x.dark=(t,e)=>v(t,h("default",{theme:"dark",...e})),x.dismiss=function(t){!function(t){let e;if(!(u.size>0)){y=y.filter(e=>null!=t&&e.options.toastId!==t);return}if(null==t||"string"==typeof(e=t)||a(e))u.forEach(e=>{e.removeToast(t)});else if(t&&("containerId"in t||"id"in t)){let e=u.get(t.containerId);e?e.removeToast(t.id):u.forEach(e=>{e.removeToast(t.id)})}}(t)},x.clearWaitingQueue=(t={})=>{u.forEach(e=>{e.props.limit&&(!t.containerId||e.id===t.containerId)&&e.clearQueue()})},x.isActive=g,x.update=(t,e={})=>{let o=((t,{containerId:e})=>{var o;return null==(o=u.get(e||1))?void 0:o.toasts.get(t)})(t,e);if(o){let{props:a,content:r}=o,s={delay:100,...a,...e,toastId:e.toastId||t,updateId:d()};s.toastId!==t&&(s.staleId=t);let n=s.render||r;delete s.render,v(n,s)}},x.done=t=>{x.update(t,{progress:1})},x.onChange=function(t){return p.add(t),()=>{p.delete(t)}},x.play=t=>b(!0,t),x.pause=t=>b(!1,t);var k="u">typeof window?e.useLayoutEffect:e.useEffect,w=({theme:t,type:o,isLoading:a,...r})=>e.default.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===t?"currentColor":`var(--toastify-icon-color-${o})`,...r}),E={info:function(t){return e.default.createElement(w,{...t},e.default.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(t){return e.default.createElement(w,{...t},e.default.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(t){return e.default.createElement(w,{...t},e.default.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(t){return e.default.createElement(w,{...t},e.default.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return e.default.createElement("div",{className:"Toastify__spinner"})}},I=t=>{let{isRunning:a,preventExitTransition:r,toastRef:s,eventHandlers:n,playToast:i}=function(t){var o,a;let[r,s]=(0,e.useState)(!1),[n,i]=(0,e.useState)(!1),l=(0,e.useRef)(null),f=(0,e.useRef)({start:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,didMove:!1}).current,{autoClose:c,pauseOnHover:d,closeToast:y,onClick:p,closeOnClick:m}=t;function g(){s(!0)}function _(){s(!1)}function b(e){let o=l.current;if(f.canDrag&&o){f.didMove=!0,r&&_(),"x"===t.draggableDirection?f.delta=e.clientX-f.start:f.delta=e.clientY-f.start,f.start!==e.clientX&&(f.canCloseOnClick=!1);let a="x"===t.draggableDirection?`${f.delta}px, var(--y)`:`0, calc(${f.delta}px + var(--y))`;o.style.transform=`translate3d(${a},0)`,o.style.opacity=`${1-Math.abs(f.delta/f.removalDistance)}`}}function v(){document.removeEventListener("pointermove",b),document.removeEventListener("pointerup",v);let e=l.current;if(f.canDrag&&f.didMove&&e){if(f.canDrag=!1,Math.abs(f.delta)>f.removalDistance){i(!0),t.closeToast(!0),t.collapseAll();return}e.style.transition="transform 0.2s, opacity 0.2s",e.style.removeProperty("transform"),e.style.removeProperty("opacity")}}o={id:t.toastId,containerId:t.containerId,fn:s},null==(a=u.get(o.containerId||1))||a.setToggle(o.id,o.fn),(0,e.useEffect)(()=>{if(t.pauseOnFocusLoss)return document.hasFocus()||_(),window.addEventListener("focus",g),window.addEventListener("blur",_),()=>{window.removeEventListener("focus",g),window.removeEventListener("blur",_)}},[t.pauseOnFocusLoss]);let h={onPointerDown:function(e){if(!0===t.draggable||t.draggable===e.pointerType){f.didMove=!1,document.addEventListener("pointermove",b),document.addEventListener("pointerup",v);let o=l.current;f.canCloseOnClick=!0,f.canDrag=!0,o.style.transition="none","x"===t.draggableDirection?(f.start=e.clientX,f.removalDistance=o.offsetWidth*(t.draggablePercent/100)):(f.start=e.clientY,f.removalDistance=o.offsetHeight*(80===t.draggablePercent?1.5*t.draggablePercent:t.draggablePercent)/100)}},onPointerUp:function(e){let{top:o,bottom:a,left:r,right:s}=l.current.getBoundingClientRect();"mouse"===e.pointerType&&t.pauseOnHover&&e.clientX>=r&&e.clientX<=s&&e.clientY>=o&&e.clientY<=a?_():g()}};return c&&d&&(h.onMouseEnter=_,t.stacked||(h.onMouseLeave=g)),m&&(h.onClick=t=>{p&&p(t),f.canCloseOnClick&&y(!0)}),{playToast:g,pauseToast:_,isRunning:r,preventExitTransition:n,toastRef:l,eventHandlers:h}}(t),{closeButton:c,children:d,autoClose:y,onClick:p,type:m,hideProgressBar:g,closeToast:_,transition:b,position:v,className:h,style:T,progressClassName:x,updateId:k,role:w,progress:I,rtl:L,toastId:C,deleteToast:z,isIn:F,isLoading:O,closeOnClick:P,theme:A,ariaLabel:N}=t,R=o("Toastify__toast",`Toastify__toast-theme--${A}`,`Toastify__toast--${m}`,{"Toastify__toast--rtl":L},{"Toastify__toast--close-on-click":P}),S="function"==typeof h?h({rtl:L,position:v,type:m,defaultClassName:R}):o(R,h),$=function({theme:t,type:o,isLoading:a,icon:r}){let s=null,n={theme:t,type:o};return!1===r||("function"==typeof r?s=r({...n,isLoading:a}):(0,e.isValidElement)(r)?s=(0,e.cloneElement)(r,n):a?s=E.spinner():o in E&&(s=E[o](n))),s}(t),B=!!I||!y,D={closeToast:_,type:m,theme:A},M=null;return!1===c||(M="function"==typeof c?c(D):(0,e.isValidElement)(c)?(0,e.cloneElement)(c,D):function({closeToast:t,theme:o,ariaLabel:a="close"}){return e.default.createElement("button",{className:`Toastify__close-button Toastify__close-button--${o}`,type:"button",onClick:e=>{e.stopPropagation(),t(!0)},"aria-label":a},e.default.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},e.default.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}(D)),e.default.createElement(b,{isIn:F,done:z,position:v,preventExitTransition:r,nodeRef:s,playToast:i},e.default.createElement("div",{id:C,tabIndex:0,onClick:p,"data-in":F,className:S,...n,style:T,ref:s,...F&&{role:w,"aria-label":N}},null!=$&&e.default.createElement("div",{className:o("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!O})},$),l(d,t,!a),M,!t.customProgressBar&&e.default.createElement(f,{...k&&!B?{key:`p-${k}`}:{},rtl:L,theme:A,delay:y,isRunning:a,isIn:F,closeToast:_,hide:g,type:m,className:x,controlledProgress:B,progress:I||0})))},L=(t,e=!1)=>({enter:`Toastify--animate Toastify__${t}-enter`,exit:`Toastify--animate Toastify__${t}-exit`,appendPosition:e}),C=n(L("bounce",!0));n(L("slide",!0)),n(L("zoom")),n(L("flip"));var z={position:"top-right",transition:C,autoClose:5e3,closeButton:!0,pauseOnHover:!0,pauseOnFocusLoss:!0,draggable:"touch",draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light","aria-label":"Notifications Alt+T",hotKeys:t=>t.altKey&&"KeyT"===t.code};function F(t){let n={...z,...t},l=t.stacked,[f,c]=(0,e.useState)(!0),d=(0,e.useRef)(null),{getToastToRender:p,isToastActive:b,count:v}=function(t){var o;let n,{subscribe:l,getSnapshot:f,setProps:c}=(0,e.useRef)((n=t.containerId||1,{subscribe(e){let o,l,f,c,d,p,g,b,v,h,T,x=(o=1,l=0,f=[],c=[],d=t,p=new Map,g=new Set,b=()=>{c=Array.from(p.values()),g.forEach(t=>t())},v=t=>{var e,o;t.isActive&&(null==(o=null==(e=t.props)?void 0:e.onClose)||o.call(e,t.removalReason),t.isActive=!1,m(i(t,"removed")))},h=t=>{if(null==t)p.forEach(v);else{let e=p.get(t);e&&v(e)}b()},T=t=>{var e,o;let{toastId:a,updateId:r}=t.props,s=null==r;t.staleId&&p.delete(t.staleId),t.isActive=!0,p.set(a,t),b(),m(i(t,s?"added":"updated")),s&&(null==(o=(e=t.props).onOpen)||o.call(e))},{id:n,props:d,observe:t=>(g.add(t),()=>g.delete(t)),toggle:(t,e)=>{p.forEach(o=>{var a;(null==e||e===o.props.toastId)&&(null==(a=o.toggle)||a.call(o,t))})},removeToast:h,toasts:p,clearQueue:()=>{l-=f.length,f=[]},buildToast:(t,e)=>{let i,c;if((({containerId:t,toastId:e,updateId:o})=>{let a=p.has(e)&&null==o;return(t?t!==n:1!==n)||a})(e))return;let{toastId:u,updateId:y,data:m,staleId:g,delay:_}=e,v=null==y;v&&l++;let x={...d,style:d.toastStyle,key:o++,...Object.fromEntries(Object.entries(e).filter(([t,e])=>null!=e)),toastId:u,updateId:y,data:m,isIn:!1,className:r(e.className||d.toastClassName),progressClassName:r(e.progressClassName||d.progressClassName),autoClose:!e.isLoading&&(i=e.autoClose,c=d.autoClose,!1===i||a(i)&&i>0?i:c),closeToast(t){let e=p.get(u);e&&(e.removalReason=t,h(u))},deleteToast(){if(null!=p.get(u)){if(p.delete(u),--l<0&&(l=0),f.length>0)return void T(f.shift());b()}}};x.closeButton=d.closeButton,!1===e.closeButton||s(e.closeButton)?x.closeButton=e.closeButton:!0===e.closeButton&&(x.closeButton=!s(d.closeButton)||d.closeButton);let k={content:t,props:x,staleId:g};d.limit&&d.limit>0&&l>d.limit&&v?f.push(k):a(_)?setTimeout(()=>{T(k)},_):T(k)},setProps(t){d=t},setToggle:(t,e)=>{let o=p.get(t);o&&(o.toggle=e)},isToastActive:t=>{var e;return null==(e=p.get(t))?void 0:e.isActive},getSnapshot:()=>c});u.set(n,x);let k=x.observe(e);return y.forEach(t=>_(t.content,t.options)),y=[],()=>{k(),u.delete(n)}},setProps(t){var e;null==(e=u.get(n))||e.setProps(t)},getSnapshot(){var t;return null==(t=u.get(n))?void 0:t.getSnapshot()}})).current;c(t);let d=null==(o=(0,e.useSyncExternalStore)(l,f,f))?void 0:o.slice();return{getToastToRender:function(e){if(!d)return[];let o=new Map;return t.newestOnTop&&d.reverse(),d.forEach(t=>{let{position:e}=t.props;o.has(e)||o.set(e,[]),o.get(e).push(t)}),Array.from(o,t=>e(t[0],t[1]))},isToastActive:g,count:null==d?void 0:d.length}}(n),{className:h,style:T,rtl:w,containerId:E,hotKeys:L}=n;function C(){l&&(c(!0),x.play())}return k(()=>{var t;if(l){let e=d.current.querySelectorAll('[data-in="true"]'),o=null==(t=n.position)?void 0:t.includes("top"),a=0,r=0;Array.from(e).reverse().forEach((t,e)=>{t.classList.add("Toastify__toast--stacked"),e>0&&(t.dataset.collapsed=`${f}`),t.dataset.pos||(t.dataset.pos=o?"top":"bot");let s=a*(f?.2:1)+(f?0:12*e),n=Math.max(.5,1-(f?r:0));t.style.setProperty("--y",`${o?s:-1*s}px`),t.style.setProperty("--g","12"),t.style.setProperty("--s",`${n}`),a+=t.offsetHeight,r+=.025})}},[f,v,l]),(0,e.useEffect)(()=>{function t(t){var e;let o=d.current;L(t)&&(null==(e=null==o?void 0:o.querySelector('[tabIndex="0"]'))||e.focus(),c(!1),x.pause()),"Escape"===t.key&&(document.activeElement===o||null!=o&&o.contains(document.activeElement))&&(c(!0),x.play())}return document.addEventListener("keydown",t),()=>{document.removeEventListener("keydown",t)}},[L]),e.default.createElement("section",{ref:d,className:"Toastify",id:E,onMouseEnter:()=>{l&&(c(!1),x.pause())},onMouseLeave:C,"aria-live":"polite","aria-atomic":"false","aria-relevant":"additions text","aria-label":n["aria-label"]},p((t,a)=>{var s;let n,i=a.length?{...T}:{...T,pointerEvents:"none"};return e.default.createElement("div",{tabIndex:-1,className:(s=t,n=o("Toastify__toast-container",`Toastify__toast-container--${s}`,{"Toastify__toast-container--rtl":w}),"function"==typeof h?h({position:s,rtl:w,defaultClassName:n}):o(n,r(h))),"data-stacked":l,style:i,key:`c-${t}`},a.map(({content:t,props:o})=>e.default.createElement(I,{...o,stacked:l,collapseAll:C,isIn:b(o.toastId,o.containerId),key:`t-${o.key}`},t)))}))}var O=`:root {
  --toastify-color-light: #fff;
  --toastify-color-dark: #121212;
  --toastify-color-info: #3498db;
  --toastify-color-success: #07bc0c;
  --toastify-color-warning: #f1c40f;
  --toastify-color-error: hsl(6, 78%, 57%);
  --toastify-color-transparent: rgba(255, 255, 255, 0.7);

  --toastify-icon-color-info: var(--toastify-color-info);
  --toastify-icon-color-success: var(--toastify-color-success);
  --toastify-icon-color-warning: var(--toastify-color-warning);
  --toastify-icon-color-error: var(--toastify-color-error);

  --toastify-container-width: fit-content;
  --toastify-toast-width: 320px;
  --toastify-toast-offset: 16px;
  --toastify-toast-top: max(var(--toastify-toast-offset), env(safe-area-inset-top));
  --toastify-toast-right: max(var(--toastify-toast-offset), env(safe-area-inset-right));
  --toastify-toast-left: max(var(--toastify-toast-offset), env(safe-area-inset-left));
  --toastify-toast-bottom: max(var(--toastify-toast-offset), env(safe-area-inset-bottom));
  --toastify-toast-background: #fff;
  --toastify-toast-padding: 14px;
  --toastify-toast-min-height: 64px;
  --toastify-toast-max-height: 800px;
  --toastify-toast-bd-radius: 6px;
  --toastify-toast-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  --toastify-font-family: sans-serif;
  --toastify-z-index: 9999;
  --toastify-text-color-light: #757575;
  --toastify-text-color-dark: #fff;

  /* Used only for colored theme */
  --toastify-text-color-info: #fff;
  --toastify-text-color-success: #fff;
  --toastify-text-color-warning: #fff;
  --toastify-text-color-error: #fff;

  --toastify-spinner-color: #616161;
  --toastify-spinner-color-empty-area: #e0e0e0;
  --toastify-color-progress-light: linear-gradient(to right, #4cd964, #5ac8fa, #007aff, #34aadc, #5856d6, #ff2d55);
  --toastify-color-progress-dark: #bb86fc;
  --toastify-color-progress-info: var(--toastify-color-info);
  --toastify-color-progress-success: var(--toastify-color-success);
  --toastify-color-progress-warning: var(--toastify-color-warning);
  --toastify-color-progress-error: var(--toastify-color-error);
  /* used to control the opacity of the progress trail */
  --toastify-color-progress-bgo: 0.2;
}

.Toastify__toast-container {
  z-index: var(--toastify-z-index);
  -webkit-transform: translate3d(0, 0, var(--toastify-z-index));
  position: fixed;
  width: var(--toastify-container-width);
  box-sizing: border-box;
  color: #fff;
  display: flex;
  flex-direction: column;
}

.Toastify__toast-container--top-left {
  top: var(--toastify-toast-top);
  left: var(--toastify-toast-left);
}
.Toastify__toast-container--top-center {
  top: var(--toastify-toast-top);
  left: 50%;
  transform: translateX(-50%);
  align-items: center;
}
.Toastify__toast-container--top-right {
  top: var(--toastify-toast-top);
  right: var(--toastify-toast-right);
  align-items: end;
}
.Toastify__toast-container--bottom-left {
  bottom: var(--toastify-toast-bottom);
  left: var(--toastify-toast-left);
}
.Toastify__toast-container--bottom-center {
  bottom: var(--toastify-toast-bottom);
  left: 50%;
  transform: translateX(-50%);
  align-items: center;
}
.Toastify__toast-container--bottom-right {
  bottom: var(--toastify-toast-bottom);
  right: var(--toastify-toast-right);
  align-items: end;
}

.Toastify__toast {
  --y: 0px;
  position: relative;
  touch-action: none;
  width: var(--toastify-toast-width);
  min-height: var(--toastify-toast-min-height);
  box-sizing: border-box;
  margin-bottom: 1rem;
  padding: var(--toastify-toast-padding);
  border-radius: var(--toastify-toast-bd-radius);
  box-shadow: var(--toastify-toast-shadow);
  max-height: var(--toastify-toast-max-height);
  font-family: var(--toastify-font-family);
  /* webkit only issue #791 */
  z-index: 0;
  /* inner swag */
  display: flex;
  flex: 1 auto;
  align-items: center;
  word-break: break-word;
}

@media only screen and (max-width: 480px) {
  .Toastify__toast-container {
    width: 100vw;
    left: env(safe-area-inset-left);
    margin: 0;
  }
  .Toastify__toast-container--top-left,
  .Toastify__toast-container--top-center,
  .Toastify__toast-container--top-right {
    top: env(safe-area-inset-top);
    transform: translateX(0);
  }
  .Toastify__toast-container--bottom-left,
  .Toastify__toast-container--bottom-center,
  .Toastify__toast-container--bottom-right {
    bottom: env(safe-area-inset-bottom);
    transform: translateX(0);
  }
  .Toastify__toast-container--rtl {
    right: env(safe-area-inset-right);
    left: initial;
  }
  .Toastify__toast {
    --toastify-toast-width: 100%;
    margin-bottom: 0;
    border-radius: 0;
  }
}

.Toastify__toast-container[data-stacked='true'] {
  width: var(--toastify-toast-width);
}

@media only screen and (max-width: 480px) {
  .Toastify__toast-container[data-stacked='true'] {
    width: 100vw;
  }
}

.Toastify__toast--stacked {
  position: absolute;
  width: 100%;
  transform: translate3d(0, var(--y), 0) scale(var(--s));
  transition: transform 0.3s;
}

.Toastify__toast--stacked[data-collapsed] .Toastify__toast-body,
.Toastify__toast--stacked[data-collapsed] .Toastify__close-button {
  transition: opacity 0.1s;
}

.Toastify__toast--stacked[data-collapsed='false'] {
  overflow: visible;
}

.Toastify__toast--stacked[data-collapsed='true']:not(:last-child) > * {
  opacity: 0;
}

.Toastify__toast--stacked:after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  height: calc(var(--g) * 1px);
  bottom: 100%;
}

.Toastify__toast--stacked[data-pos='top'] {
  top: 0;
}

.Toastify__toast--stacked[data-pos='bot'] {
  bottom: 0;
}

.Toastify__toast--stacked[data-pos='bot'].Toastify__toast--stacked:before {
  transform-origin: top;
}

.Toastify__toast--stacked[data-pos='top'].Toastify__toast--stacked:before {
  transform-origin: bottom;
}

.Toastify__toast--stacked:before {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  transform: scaleY(3);
  z-index: -1;
}

.Toastify__toast--rtl {
  direction: rtl;
}

.Toastify__toast--close-on-click {
  cursor: pointer;
}

.Toastify__toast-icon {
  margin-inline-end: 10px;
  width: 22px;
  flex-shrink: 0;
  display: flex;
}

.Toastify--animate {
  animation-fill-mode: both;
  animation-duration: 0.5s;
}

.Toastify--animate-icon {
  animation-fill-mode: both;
  animation-duration: 0.3s;
}

.Toastify__toast-theme--dark {
  background: var(--toastify-color-dark);
  color: var(--toastify-text-color-dark);
}

.Toastify__toast-theme--light {
  background: var(--toastify-color-light);
  color: var(--toastify-text-color-light);
}

.Toastify__toast-theme--colored.Toastify__toast--default {
  background: var(--toastify-color-light);
  color: var(--toastify-text-color-light);
}

.Toastify__toast-theme--colored.Toastify__toast--info {
  color: var(--toastify-text-color-info);
  background: var(--toastify-color-info);
}

.Toastify__toast-theme--colored.Toastify__toast--success {
  color: var(--toastify-text-color-success);
  background: var(--toastify-color-success);
}

.Toastify__toast-theme--colored.Toastify__toast--warning {
  color: var(--toastify-text-color-warning);
  background: var(--toastify-color-warning);
}

.Toastify__toast-theme--colored.Toastify__toast--error {
  color: var(--toastify-text-color-error);
  background: var(--toastify-color-error);
}

.Toastify__progress-bar-theme--light {
  background: var(--toastify-color-progress-light);
}

.Toastify__progress-bar-theme--dark {
  background: var(--toastify-color-progress-dark);
}

.Toastify__progress-bar--info {
  background: var(--toastify-color-progress-info);
}

.Toastify__progress-bar--success {
  background: var(--toastify-color-progress-success);
}

.Toastify__progress-bar--warning {
  background: var(--toastify-color-progress-warning);
}

.Toastify__progress-bar--error {
  background: var(--toastify-color-progress-error);
}

.Toastify__progress-bar-theme--colored.Toastify__progress-bar--info,
.Toastify__progress-bar-theme--colored.Toastify__progress-bar--success,
.Toastify__progress-bar-theme--colored.Toastify__progress-bar--warning,
.Toastify__progress-bar-theme--colored.Toastify__progress-bar--error {
  background: var(--toastify-color-transparent);
}

.Toastify__close-button {
  color: #fff;
  position: absolute;
  top: 6px;
  right: 6px;
  background: transparent;
  outline: none;
  border: none;
  padding: 0;
  cursor: pointer;
  opacity: 0.7;
  transition: 0.3s ease;
  z-index: 1;
}

.Toastify__toast--rtl .Toastify__close-button {
  left: 6px;
  right: unset;
}

.Toastify__close-button--light {
  color: #000;
  opacity: 0.3;
}

.Toastify__close-button > svg {
  fill: currentColor;
  height: 16px;
  width: 14px;
}

.Toastify__close-button:hover,
.Toastify__close-button:focus {
  opacity: 1;
}

@keyframes Toastify__trackProgress {
  0% {
    transform: scaleX(1);
  }
  100% {
    transform: scaleX(0);
  }
}

.Toastify__progress-bar {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  opacity: 0.7;
  transform-origin: left;
}

.Toastify__progress-bar--animated {
  animation: Toastify__trackProgress linear 1 forwards;
}

.Toastify__progress-bar--controlled {
  transition: transform 0.2s;
}

.Toastify__progress-bar--rtl {
  right: 0;
  left: initial;
  transform-origin: right;
  border-bottom-left-radius: initial;
}

.Toastify__progress-bar--wrp {
  position: absolute;
  overflow: hidden;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 5px;
  border-bottom-left-radius: var(--toastify-toast-bd-radius);
  border-bottom-right-radius: var(--toastify-toast-bd-radius);
}

.Toastify__progress-bar--wrp[data-hidden='true'] {
  opacity: 0;
}

.Toastify__progress-bar--bg {
  opacity: var(--toastify-color-progress-bgo);
  width: 100%;
  height: 100%;
}

.Toastify__spinner {
  width: 20px;
  height: 20px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: var(--toastify-spinner-color-empty-area);
  border-right-color: var(--toastify-spinner-color);
  animation: Toastify__spin 0.65s linear infinite;
}

@keyframes Toastify__bounceInRight {
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  from {
    opacity: 0;
    transform: translate3d(3000px, 0, 0);
  }
  60% {
    opacity: 1;
    transform: translate3d(-25px, 0, 0);
  }
  75% {
    transform: translate3d(10px, 0, 0);
  }
  90% {
    transform: translate3d(-5px, 0, 0);
  }
  to {
    transform: none;
  }
}

@keyframes Toastify__bounceOutRight {
  20% {
    opacity: 1;
    transform: translate3d(-20px, var(--y), 0);
  }
  to {
    opacity: 0;
    transform: translate3d(2000px, var(--y), 0);
  }
}

@keyframes Toastify__bounceInLeft {
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  0% {
    opacity: 0;
    transform: translate3d(-3000px, 0, 0);
  }
  60% {
    opacity: 1;
    transform: translate3d(25px, 0, 0);
  }
  75% {
    transform: translate3d(-10px, 0, 0);
  }
  90% {
    transform: translate3d(5px, 0, 0);
  }
  to {
    transform: none;
  }
}

@keyframes Toastify__bounceOutLeft {
  20% {
    opacity: 1;
    transform: translate3d(20px, var(--y), 0);
  }
  to {
    opacity: 0;
    transform: translate3d(-2000px, var(--y), 0);
  }
}

@keyframes Toastify__bounceInUp {
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  from {
    opacity: 0;
    transform: translate3d(0, 3000px, 0);
  }
  60% {
    opacity: 1;
    transform: translate3d(0, -20px, 0);
  }
  75% {
    transform: translate3d(0, 10px, 0);
  }
  90% {
    transform: translate3d(0, -5px, 0);
  }
  to {
    transform: translate3d(0, 0, 0);
  }
}

@keyframes Toastify__bounceOutUp {
  20% {
    transform: translate3d(0, calc(var(--y) - 10px), 0);
  }
  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, calc(var(--y) + 20px), 0);
  }
  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
}

@keyframes Toastify__bounceInDown {
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  0% {
    opacity: 0;
    transform: translate3d(0, -3000px, 0);
  }
  60% {
    opacity: 1;
    transform: translate3d(0, 25px, 0);
  }
  75% {
    transform: translate3d(0, -10px, 0);
  }
  90% {
    transform: translate3d(0, 5px, 0);
  }
  to {
    transform: none;
  }
}

@keyframes Toastify__bounceOutDown {
  20% {
    transform: translate3d(0, calc(var(--y) - 10px), 0);
  }
  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, calc(var(--y) + 20px), 0);
  }
  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
}

.Toastify__bounce-enter--top-left,
.Toastify__bounce-enter--bottom-left {
  animation-name: Toastify__bounceInLeft;
}

.Toastify__bounce-enter--top-right,
.Toastify__bounce-enter--bottom-right {
  animation-name: Toastify__bounceInRight;
}

.Toastify__bounce-enter--top-center {
  animation-name: Toastify__bounceInDown;
}

.Toastify__bounce-enter--bottom-center {
  animation-name: Toastify__bounceInUp;
}

.Toastify__bounce-exit--top-left,
.Toastify__bounce-exit--bottom-left {
  animation-name: Toastify__bounceOutLeft;
}

.Toastify__bounce-exit--top-right,
.Toastify__bounce-exit--bottom-right {
  animation-name: Toastify__bounceOutRight;
}

.Toastify__bounce-exit--top-center {
  animation-name: Toastify__bounceOutUp;
}

.Toastify__bounce-exit--bottom-center {
  animation-name: Toastify__bounceOutDown;
}

@keyframes Toastify__zoomIn {
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
  50% {
    opacity: 1;
  }
}

@keyframes Toastify__zoomOut {
  from {
    opacity: 1;
  }
  50% {
    opacity: 0;
    transform: translate3d(0, var(--y), 0) scale3d(0.3, 0.3, 0.3);
  }
  to {
    opacity: 0;
  }
}

.Toastify__zoom-enter {
  animation-name: Toastify__zoomIn;
}

.Toastify__zoom-exit {
  animation-name: Toastify__zoomOut;
}

@keyframes Toastify__flipIn {
  from {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }
  40% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    animation-timing-function: ease-in;
  }
  60% {
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }
  80% {
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }
  to {
    transform: perspective(400px);
  }
}

@keyframes Toastify__flipOut {
  from {
    transform: translate3d(0, var(--y), 0) perspective(400px);
  }
  30% {
    transform: translate3d(0, var(--y), 0) perspective(400px) rotate3d(1, 0, 0, -20deg);
    opacity: 1;
  }
  to {
    transform: translate3d(0, var(--y), 0) perspective(400px) rotate3d(1, 0, 0, 90deg);
    opacity: 0;
  }
}

.Toastify__flip-enter {
  animation-name: Toastify__flipIn;
}

.Toastify__flip-exit {
  animation-name: Toastify__flipOut;
}

@keyframes Toastify__slideInRight {
  from {
    transform: translate3d(110%, 0, 0);
    visibility: visible;
  }
  to {
    transform: translate3d(0, var(--y), 0);
  }
}

@keyframes Toastify__slideInLeft {
  from {
    transform: translate3d(-110%, 0, 0);
    visibility: visible;
  }
  to {
    transform: translate3d(0, var(--y), 0);
  }
}

@keyframes Toastify__slideInUp {
  from {
    transform: translate3d(0, 110%, 0);
    visibility: visible;
  }
  to {
    transform: translate3d(0, var(--y), 0);
  }
}

@keyframes Toastify__slideInDown {
  from {
    transform: translate3d(0, -110%, 0);
    visibility: visible;
  }
  to {
    transform: translate3d(0, var(--y), 0);
  }
}

@keyframes Toastify__slideOutRight {
  from {
    transform: translate3d(0, var(--y), 0);
  }
  to {
    visibility: hidden;
    transform: translate3d(110%, var(--y), 0);
  }
}

@keyframes Toastify__slideOutLeft {
  from {
    transform: translate3d(0, var(--y), 0);
  }
  to {
    visibility: hidden;
    transform: translate3d(-110%, var(--y), 0);
  }
}

@keyframes Toastify__slideOutDown {
  from {
    transform: translate3d(0, var(--y), 0);
  }
  to {
    visibility: hidden;
    transform: translate3d(0, 500px, 0);
  }
}

@keyframes Toastify__slideOutUp {
  from {
    transform: translate3d(0, var(--y), 0);
  }
  to {
    visibility: hidden;
    transform: translate3d(0, -500px, 0);
  }
}

.Toastify__slide-enter--top-left,
.Toastify__slide-enter--bottom-left {
  animation-name: Toastify__slideInLeft;
}

.Toastify__slide-enter--top-right,
.Toastify__slide-enter--bottom-right {
  animation-name: Toastify__slideInRight;
}

.Toastify__slide-enter--top-center {
  animation-name: Toastify__slideInDown;
}

.Toastify__slide-enter--bottom-center {
  animation-name: Toastify__slideInUp;
}

.Toastify__slide-exit--top-left,
.Toastify__slide-exit--bottom-left {
  animation-name: Toastify__slideOutLeft;
  animation-timing-function: ease-in;
  animation-duration: 0.3s;
}

.Toastify__slide-exit--top-right,
.Toastify__slide-exit--bottom-right {
  animation-name: Toastify__slideOutRight;
  animation-timing-function: ease-in;
  animation-duration: 0.3s;
}

.Toastify__slide-exit--top-center {
  animation-name: Toastify__slideOutUp;
  animation-timing-function: ease-in;
  animation-duration: 0.3s;
}

.Toastify__slide-exit--bottom-center {
  animation-name: Toastify__slideOutDown;
  animation-timing-function: ease-in;
  animation-duration: 0.3s;
}

@keyframes Toastify__spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
`,P=new Map;t.s(["ToastContainer",0,function(t){var o;return k(()=>{if(!O||"u"<typeof document)return;let t=document,e=P.get(t);if(e){o&&e.setAttribute("nonce",o);return}let a=t.createElement("style");a.textContent=O,o&&a.setAttribute("nonce",o),t.head.appendChild(a),P.set(t,a)},[o=t.nonce]),e.default.createElement(F,{...t})},"toast",0,x],70319)},1182,t=>{"use strict";var e=t.i(47167),o=t.i(43476),a=t.i(71645),r=t.i(18566),s=t.i(70319);t.s(["default",0,function(){let t=(0,r.useRouter)(),[n,i]=(0,a.useState)(""),[l,f]=(0,a.useState)(""),[c,d]=(0,a.useState)(!1);(0,a.useEffect)(()=>{localStorage.getItem("adminToken")&&t.push("/admin/dashboard")},[t]);let u=async o=>{if(o.preventDefault(),!n.trim()||!l.trim())return void s.toast.error("Please fill in all fields.");d(!0);try{let o="php"===e.default.env.NEXT_PUBLIC_BACKEND_TYPE,a=e.default.env.NEXT_PUBLIC_API_URL||"http://localhost:8000",r=o?`${a}/login.php`:"/api/admin/login",i=await fetch(r,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:n,password:l})}),f=await i.json();i.ok&&"success"===f.status?(s.toast.success("Login successful!"),localStorage.setItem("adminToken",f.token),localStorage.setItem("adminUser",JSON.stringify(f.user)),t.push("/admin/dashboard")):s.toast.error(f.message||"Invalid credentials.")}catch(t){console.error("Login Error:",t),s.toast.error("A network error occurred. Please check your connection.")}finally{d(!1)}};return(0,o.jsx)("div",{style:{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",background:"linear-gradient(135deg, #0A111E 0%, #15243F 100%)",fontFamily:"var(--body-font), sans-serif",padding:"20px"},children:(0,o.jsxs)("div",{style:{width:"100%",maxWidth:"450px",background:"rgba(255, 255, 255, 0.03)",backdropFilter:"blur(10px)",WebkitBackdropFilter:"blur(10px)",borderRadius:"20px",border:"1px solid rgba(255, 255, 255, 0.05)",padding:"40px",boxShadow:"0 15px 35px rgba(0, 0, 0, 0.3)"},children:[(0,o.jsxs)("div",{className:"text-center mb-4",children:[(0,o.jsx)("h2",{style:{color:"#FFFFFF",fontWeight:"700",fontSize:"28px",letterSpacing:"-0.5px",margin:"0 0 8px 0",fontFamily:"var(--heading-font), sans-serif"},children:"Admin Portal"}),(0,o.jsx)("p",{style:{color:"rgba(255, 255, 255, 0.6)",fontSize:"15px",margin:0},children:"Enter credentials to access the enquiries dashboard."})]}),(0,o.jsxs)("form",{onSubmit:u,children:[(0,o.jsxs)("div",{className:"mb-4",children:[(0,o.jsx)("label",{style:{display:"block",color:"rgba(255, 255, 255, 0.8)",fontSize:"14px",fontWeight:"500",marginBottom:"8px"},children:"Username"}),(0,o.jsx)("input",{type:"text",value:n,onChange:t=>i(t.target.value),placeholder:"admin",disabled:c,style:{width:"100%",padding:"14px 16px",background:"rgba(255, 255, 255, 0.05)",border:"1px solid rgba(255, 255, 255, 0.1)",borderRadius:"10px",color:"#FFFFFF",fontSize:"15px",outline:"none",transition:"all 0.3s ease"},onFocus:t=>{t.target.style.border="1px solid #EA7925",t.target.style.background="rgba(255, 255, 255, 0.08)"},onBlur:t=>{t.target.style.border="1px solid rgba(255, 255, 255, 0.1)",t.target.style.background="rgba(255, 255, 255, 0.05)"}})]}),(0,o.jsxs)("div",{className:"mb-4",children:[(0,o.jsx)("label",{style:{display:"block",color:"rgba(255, 255, 255, 0.8)",fontSize:"14px",fontWeight:"500",marginBottom:"8px"},children:"Password"}),(0,o.jsx)("input",{type:"password",value:l,onChange:t=>f(t.target.value),placeholder:"••••••••",disabled:c,style:{width:"100%",padding:"14px 16px",background:"rgba(255, 255, 255, 0.05)",border:"1px solid rgba(255, 255, 255, 0.1)",borderRadius:"10px",color:"#FFFFFF",fontSize:"15px",outline:"none",transition:"all 0.3s ease"},onFocus:t=>{t.target.style.border="1px solid #EA7925",t.target.style.background="rgba(255, 255, 255, 0.08)"},onBlur:t=>{t.target.style.border="1px solid rgba(255, 255, 255, 0.1)",t.target.style.background="rgba(255, 255, 255, 0.05)"}})]}),(0,o.jsx)("button",{type:"submit",disabled:c,style:{width:"100%",padding:"14px",background:"#EA7925",border:"none",borderRadius:"10px",color:"#FFFFFF",fontSize:"16px",fontWeight:"600",cursor:c?"not-allowed":"pointer",transition:"all 0.3s ease",marginTop:"10px",display:"flex",alignItems:"center",justifyContent:"center",gap:"8px"},onMouseEnter:t=>{c||(t.currentTarget.style.background="#d86d1d")},onMouseLeave:t=>{c||(t.currentTarget.style.background="#EA7925")},children:c?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("span",{className:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"}),"Logging in..."]}):"Log In"})]}),(0,o.jsx)("div",{className:"text-center mt-4",children:(0,o.jsx)("a",{href:"/",style:{color:"rgba(255, 255, 255, 0.4)",fontSize:"14px",textDecoration:"none",transition:"color 0.3s ease"},onMouseEnter:t=>t.currentTarget.style.color="#FFFFFF",onMouseLeave:t=>t.currentTarget.style.color="rgba(255, 255, 255, 0.4)",children:"← Back to Homepage"})})]})})}])}]);