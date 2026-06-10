(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,54865,t=>{t.q("/_next/static/media/white-logo.0jx5kgy31t65-.svg")},17263,t=>{t.q("/_next/static/media/black-logo.08wl-yxva55tn.svg")},18566,(t,e,o)=>{e.exports=t.r(76562)},70319,t=>{"use strict";var e=t.i(71645);let o=function(){for(var t,e,o=0,a="",r=arguments.length;o<r;o++)(t=arguments[o])&&(e=function t(e){var o,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e)){var n=e.length;for(o=0;o<n;o++)e[o]&&(a=t(e[o]))&&(r&&(r+=" "),r+=a)}else for(a in e)e[a]&&(r&&(r+=" "),r+=a);return r}(t))&&(a&&(a+=" "),a+=e);return a};var a=t=>"number"==typeof t&&!isNaN(t),r=t=>"string"==typeof t||"function"==typeof t?t:null,n=t=>(0,e.isValidElement)(t)||"string"==typeof t||"function"==typeof t||a(t);function i({enter:t,exit:o,appendPosition:a=!1,collapse:r=!0,collapseDuration:n=300}){return function({children:i,position:s,preventExitTransition:l,done:c,nodeRef:f,isIn:d,playToast:u}){let m=a?`${t}--${s}`:t,y=a?`${o}--${s}`:o,p=(0,e.useRef)(0);return(0,e.useLayoutEffect)(()=>{let t=f.current,e=m.split(" "),o=a=>{a.target===f.current&&(u(),t.removeEventListener("animationend",o),t.removeEventListener("animationcancel",o),0===p.current&&"animationcancel"!==a.type&&t.classList.remove(...e))};t.classList.add(...e),t.addEventListener("animationend",o),t.addEventListener("animationcancel",o)},[]),(0,e.useEffect)(()=>{let t=f.current,e=()=>{t.removeEventListener("animationend",e),r?function(t,e,o=300){let{scrollHeight:a,style:r}=t;requestAnimationFrame(()=>{r.minHeight="initial",r.height=a+"px",r.transition=`all ${o}ms`,requestAnimationFrame(()=>{r.height="0",r.padding="0",r.margin="0",setTimeout(e,o)})})}(t,c,n):c()};d||(l?e():(p.current=1,t.className+=` ${y}`,t.addEventListener("animationend",e)))},[d]),e.default.createElement(e.default.Fragment,null,i)}}function s(t,e){return{content:l(t.content,t.props),containerId:t.props.containerId,id:t.props.toastId,theme:t.props.theme,type:t.props.type,data:t.props.data||{},isLoading:t.props.isLoading,icon:t.props.icon,reason:t.removalReason,status:e}}function l(t,o,a=!1){return(0,e.isValidElement)(t)&&"string"!=typeof t.type?(0,e.cloneElement)(t,{closeToast:o.closeToast,toastProps:o,data:o.data,isPaused:a}):"function"==typeof t?t({closeToast:o.closeToast,toastProps:o,data:o.data,isPaused:a}):t}function c({delay:t,isRunning:a,closeToast:r,type:n="default",hide:i,className:s,controlledProgress:l,progress:f,rtl:d,isIn:u,theme:m}){let y=i||l&&0===f,p={animationDuration:`${t}ms`,animationPlayState:a?"running":"paused"};l&&(p.transform=`scaleX(${f})`);let g=o("Toastify__progress-bar",l?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${m}`,`Toastify__progress-bar--${n}`,{"Toastify__progress-bar--rtl":d}),v="function"==typeof s?s({rtl:d,type:n,defaultClassName:g}):o(g,s);return e.default.createElement("div",{className:"Toastify__progress-bar--wrp","data-hidden":y},e.default.createElement("div",{className:`Toastify__progress-bar--bg Toastify__progress-bar-theme--${m} Toastify__progress-bar--${n}`}),e.default.createElement("div",{role:"progressbar","aria-hidden":y?"true":"false","aria-label":"notification timer","aria-valuenow":l?Math.round(100*f):void 0,"aria-valuemin":0,"aria-valuemax":100,className:v,style:p,...{[l&&f>=1?"onTransitionEnd":"onAnimationEnd"]:l&&f<1?null:()=>{u&&r()}}}))}var f=1,d=()=>`${f++}`,u=new Map,m=[],y=new Set,p=t=>y.forEach(e=>e(t));function g(t,e){var o;if(e)return!!(null!=(o=u.get(e))&&o.isToastActive(t));let a=!1;return u.forEach(e=>{e.isToastActive(t)&&(a=!0)}),a}function v(t,e){n(t)&&(u.size>0||m.push({content:t,options:e}),u.forEach(o=>{o.buildToast(t,e)}))}function _(t,e){u.forEach(o=>{null!=e&&null!=e&&e.containerId&&(null==e?void 0:e.containerId)!==o.id||o.toggle(t,null==e?void 0:e.id)})}function b(t,e){return v(t,e),e.toastId}function h(t,e){var o;return{...e,type:e&&e.type||t,toastId:(o=e)&&("string"==typeof o.toastId||a(o.toastId))?o.toastId:d()}}function T(t){return(e,o)=>b(e,h(t,o))}function x(t,e){return b(t,h("default",e))}x.loading=(t,e)=>b(t,h("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...e})),x.promise=function(t,{pending:e,error:o,success:a},r){let n;e&&(n="string"==typeof e?x.loading(e,r):x.loading(e.render,{...r,...e}));let i={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},s=(t,e,o)=>{if(null==e)return void x.dismiss(n);let a={type:t,...i,...r,data:o},s="string"==typeof e?{render:e}:e;return n?x.update(n,{...a,...s}):x(s.render,{...a,...s}),o},l="function"==typeof t?t():t;return l.then(t=>s("success",a,t)).catch(t=>s("error",o,t)),l},x.success=T("success"),x.info=T("info"),x.error=T("error"),x.warning=T("warning"),x.warn=x.warning,x.dark=(t,e)=>b(t,h("default",{theme:"dark",...e})),x.dismiss=function(t){!function(t){let e;if(!(u.size>0)){m=m.filter(e=>null!=t&&e.options.toastId!==t);return}if(null==t||"string"==typeof(e=t)||a(e))u.forEach(e=>{e.removeToast(t)});else if(t&&("containerId"in t||"id"in t)){let e=u.get(t.containerId);e?e.removeToast(t.id):u.forEach(e=>{e.removeToast(t.id)})}}(t)},x.clearWaitingQueue=(t={})=>{u.forEach(e=>{e.props.limit&&(!t.containerId||e.id===t.containerId)&&e.clearQueue()})},x.isActive=g,x.update=(t,e={})=>{let o=((t,{containerId:e})=>{var o;return null==(o=u.get(e||1))?void 0:o.toasts.get(t)})(t,e);if(o){let{props:a,content:r}=o,n={delay:100,...a,...e,toastId:e.toastId||t,updateId:d()};n.toastId!==t&&(n.staleId=t);let i=n.render||r;delete n.render,b(i,n)}},x.done=t=>{x.update(t,{progress:1})},x.onChange=function(t){return y.add(t),()=>{y.delete(t)}},x.play=t=>_(!0,t),x.pause=t=>_(!1,t);var w="u">typeof window?e.useLayoutEffect:e.useEffect,k=({theme:t,type:o,isLoading:a,...r})=>e.default.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===t?"currentColor":`var(--toastify-icon-color-${o})`,...r}),E={info:function(t){return e.default.createElement(k,{...t},e.default.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(t){return e.default.createElement(k,{...t},e.default.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(t){return e.default.createElement(k,{...t},e.default.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(t){return e.default.createElement(k,{...t},e.default.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return e.default.createElement("div",{className:"Toastify__spinner"})}},I=t=>{let{isRunning:a,preventExitTransition:r,toastRef:n,eventHandlers:i,playToast:s}=function(t){var o,a;let[r,n]=(0,e.useState)(!1),[i,s]=(0,e.useState)(!1),l=(0,e.useRef)(null),c=(0,e.useRef)({start:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,didMove:!1}).current,{autoClose:f,pauseOnHover:d,closeToast:m,onClick:y,closeOnClick:p}=t;function g(){n(!0)}function v(){n(!1)}function _(e){let o=l.current;if(c.canDrag&&o){c.didMove=!0,r&&v(),"x"===t.draggableDirection?c.delta=e.clientX-c.start:c.delta=e.clientY-c.start,c.start!==e.clientX&&(c.canCloseOnClick=!1);let a="x"===t.draggableDirection?`${c.delta}px, var(--y)`:`0, calc(${c.delta}px + var(--y))`;o.style.transform=`translate3d(${a},0)`,o.style.opacity=`${1-Math.abs(c.delta/c.removalDistance)}`}}function b(){document.removeEventListener("pointermove",_),document.removeEventListener("pointerup",b);let e=l.current;if(c.canDrag&&c.didMove&&e){if(c.canDrag=!1,Math.abs(c.delta)>c.removalDistance){s(!0),t.closeToast(!0),t.collapseAll();return}e.style.transition="transform 0.2s, opacity 0.2s",e.style.removeProperty("transform"),e.style.removeProperty("opacity")}}o={id:t.toastId,containerId:t.containerId,fn:n},null==(a=u.get(o.containerId||1))||a.setToggle(o.id,o.fn),(0,e.useEffect)(()=>{if(t.pauseOnFocusLoss)return document.hasFocus()||v(),window.addEventListener("focus",g),window.addEventListener("blur",v),()=>{window.removeEventListener("focus",g),window.removeEventListener("blur",v)}},[t.pauseOnFocusLoss]);let h={onPointerDown:function(e){if(!0===t.draggable||t.draggable===e.pointerType){c.didMove=!1,document.addEventListener("pointermove",_),document.addEventListener("pointerup",b);let o=l.current;c.canCloseOnClick=!0,c.canDrag=!0,o.style.transition="none","x"===t.draggableDirection?(c.start=e.clientX,c.removalDistance=o.offsetWidth*(t.draggablePercent/100)):(c.start=e.clientY,c.removalDistance=o.offsetHeight*(80===t.draggablePercent?1.5*t.draggablePercent:t.draggablePercent)/100)}},onPointerUp:function(e){let{top:o,bottom:a,left:r,right:n}=l.current.getBoundingClientRect();"mouse"===e.pointerType&&t.pauseOnHover&&e.clientX>=r&&e.clientX<=n&&e.clientY>=o&&e.clientY<=a?v():g()}};return f&&d&&(h.onMouseEnter=v,t.stacked||(h.onMouseLeave=g)),p&&(h.onClick=t=>{y&&y(t),c.canCloseOnClick&&m(!0)}),{playToast:g,pauseToast:v,isRunning:r,preventExitTransition:i,toastRef:l,eventHandlers:h}}(t),{closeButton:f,children:d,autoClose:m,onClick:y,type:p,hideProgressBar:g,closeToast:v,transition:_,position:b,className:h,style:T,progressClassName:x,updateId:w,role:k,progress:I,rtl:C,toastId:L,deleteToast:A,isIn:O,isLoading:P,closeOnClick:R,theme:z,ariaLabel:N}=t,S=o("Toastify__toast",`Toastify__toast-theme--${z}`,`Toastify__toast--${p}`,{"Toastify__toast--rtl":C},{"Toastify__toast--close-on-click":R}),$="function"==typeof h?h({rtl:C,position:b,type:p,defaultClassName:S}):o(S,h),B=function({theme:t,type:o,isLoading:a,icon:r}){let n=null,i={theme:t,type:o};return!1===r||("function"==typeof r?n=r({...i,isLoading:a}):(0,e.isValidElement)(r)?n=(0,e.cloneElement)(r,i):a?n=E.spinner():o in E&&(n=E[o](i))),n}(t),D=!!I||!m,M={closeToast:v,type:p,theme:z},j=null;return!1===f||(j="function"==typeof f?f(M):(0,e.isValidElement)(f)?(0,e.cloneElement)(f,M):function({closeToast:t,theme:o,ariaLabel:a="close"}){return e.default.createElement("button",{className:`Toastify__close-button Toastify__close-button--${o}`,type:"button",onClick:e=>{e.stopPropagation(),t(!0)},"aria-label":a},e.default.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},e.default.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}(M)),e.default.createElement(_,{isIn:O,done:A,position:b,preventExitTransition:r,nodeRef:n,playToast:s},e.default.createElement("div",{id:L,tabIndex:0,onClick:y,"data-in":O,className:$,...i,style:T,ref:n,...O&&{role:k,"aria-label":N}},null!=B&&e.default.createElement("div",{className:o("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!P})},B),l(d,t,!a),j,!t.customProgressBar&&e.default.createElement(c,{...w&&!D?{key:`p-${w}`}:{},rtl:C,theme:z,delay:m,isRunning:a,isIn:O,closeToast:v,hide:g,type:p,className:x,controlledProgress:D,progress:I||0})))},C=(t,e=!1)=>({enter:`Toastify--animate Toastify__${t}-enter`,exit:`Toastify--animate Toastify__${t}-exit`,appendPosition:e}),L=i(C("bounce",!0));i(C("slide",!0)),i(C("zoom")),i(C("flip"));var A={position:"top-right",transition:L,autoClose:5e3,closeButton:!0,pauseOnHover:!0,pauseOnFocusLoss:!0,draggable:"touch",draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light","aria-label":"Notifications Alt+T",hotKeys:t=>t.altKey&&"KeyT"===t.code};function O(t){let i={...A,...t},l=t.stacked,[c,f]=(0,e.useState)(!0),d=(0,e.useRef)(null),{getToastToRender:y,isToastActive:_,count:b}=function(t){var o;let i,{subscribe:l,getSnapshot:c,setProps:f}=(0,e.useRef)((i=t.containerId||1,{subscribe(e){let o,l,c,f,d,y,g,_,b,h,T,x=(o=1,l=0,c=[],f=[],d=t,y=new Map,g=new Set,_=()=>{f=Array.from(y.values()),g.forEach(t=>t())},b=t=>{var e,o;t.isActive&&(null==(o=null==(e=t.props)?void 0:e.onClose)||o.call(e,t.removalReason),t.isActive=!1,p(s(t,"removed")))},h=t=>{if(null==t)y.forEach(b);else{let e=y.get(t);e&&b(e)}_()},T=t=>{var e,o;let{toastId:a,updateId:r}=t.props,n=null==r;t.staleId&&y.delete(t.staleId),t.isActive=!0,y.set(a,t),_(),p(s(t,n?"added":"updated")),n&&(null==(o=(e=t.props).onOpen)||o.call(e))},{id:i,props:d,observe:t=>(g.add(t),()=>g.delete(t)),toggle:(t,e)=>{y.forEach(o=>{var a;(null==e||e===o.props.toastId)&&(null==(a=o.toggle)||a.call(o,t))})},removeToast:h,toasts:y,clearQueue:()=>{l-=c.length,c=[]},buildToast:(t,e)=>{let s,f;if((({containerId:t,toastId:e,updateId:o})=>{let a=y.has(e)&&null==o;return(t?t!==i:1!==i)||a})(e))return;let{toastId:u,updateId:m,data:p,staleId:g,delay:v}=e,b=null==m;b&&l++;let x={...d,style:d.toastStyle,key:o++,...Object.fromEntries(Object.entries(e).filter(([t,e])=>null!=e)),toastId:u,updateId:m,data:p,isIn:!1,className:r(e.className||d.toastClassName),progressClassName:r(e.progressClassName||d.progressClassName),autoClose:!e.isLoading&&(s=e.autoClose,f=d.autoClose,!1===s||a(s)&&s>0?s:f),closeToast(t){let e=y.get(u);e&&(e.removalReason=t,h(u))},deleteToast(){if(null!=y.get(u)){if(y.delete(u),--l<0&&(l=0),c.length>0)return void T(c.shift());_()}}};x.closeButton=d.closeButton,!1===e.closeButton||n(e.closeButton)?x.closeButton=e.closeButton:!0===e.closeButton&&(x.closeButton=!n(d.closeButton)||d.closeButton);let w={content:t,props:x,staleId:g};d.limit&&d.limit>0&&l>d.limit&&b?c.push(w):a(v)?setTimeout(()=>{T(w)},v):T(w)},setProps(t){d=t},setToggle:(t,e)=>{let o=y.get(t);o&&(o.toggle=e)},isToastActive:t=>{var e;return null==(e=y.get(t))?void 0:e.isActive},getSnapshot:()=>f});u.set(i,x);let w=x.observe(e);return m.forEach(t=>v(t.content,t.options)),m=[],()=>{w(),u.delete(i)}},setProps(t){var e;null==(e=u.get(i))||e.setProps(t)},getSnapshot(){var t;return null==(t=u.get(i))?void 0:t.getSnapshot()}})).current;f(t);let d=null==(o=(0,e.useSyncExternalStore)(l,c,c))?void 0:o.slice();return{getToastToRender:function(e){if(!d)return[];let o=new Map;return t.newestOnTop&&d.reverse(),d.forEach(t=>{let{position:e}=t.props;o.has(e)||o.set(e,[]),o.get(e).push(t)}),Array.from(o,t=>e(t[0],t[1]))},isToastActive:g,count:null==d?void 0:d.length}}(i),{className:h,style:T,rtl:k,containerId:E,hotKeys:C}=i;function L(){l&&(f(!0),x.play())}return w(()=>{var t;if(l){let e=d.current.querySelectorAll('[data-in="true"]'),o=null==(t=i.position)?void 0:t.includes("top"),a=0,r=0;Array.from(e).reverse().forEach((t,e)=>{t.classList.add("Toastify__toast--stacked"),e>0&&(t.dataset.collapsed=`${c}`),t.dataset.pos||(t.dataset.pos=o?"top":"bot");let n=a*(c?.2:1)+(c?0:12*e),i=Math.max(.5,1-(c?r:0));t.style.setProperty("--y",`${o?n:-1*n}px`),t.style.setProperty("--g","12"),t.style.setProperty("--s",`${i}`),a+=t.offsetHeight,r+=.025})}},[c,b,l]),(0,e.useEffect)(()=>{function t(t){var e;let o=d.current;C(t)&&(null==(e=null==o?void 0:o.querySelector('[tabIndex="0"]'))||e.focus(),f(!1),x.pause()),"Escape"===t.key&&(document.activeElement===o||null!=o&&o.contains(document.activeElement))&&(f(!0),x.play())}return document.addEventListener("keydown",t),()=>{document.removeEventListener("keydown",t)}},[C]),e.default.createElement("section",{ref:d,className:"Toastify",id:E,onMouseEnter:()=>{l&&(f(!1),x.pause())},onMouseLeave:L,"aria-live":"polite","aria-atomic":"false","aria-relevant":"additions text","aria-label":i["aria-label"]},y((t,a)=>{var n;let i,s=a.length?{...T}:{...T,pointerEvents:"none"};return e.default.createElement("div",{tabIndex:-1,className:(n=t,i=o("Toastify__toast-container",`Toastify__toast-container--${n}`,{"Toastify__toast-container--rtl":k}),"function"==typeof h?h({position:n,rtl:k,defaultClassName:i}):o(i,r(h))),"data-stacked":l,style:s,key:`c-${t}`},a.map(({content:t,props:o})=>e.default.createElement(I,{...o,stacked:l,collapseAll:L,isIn:_(o.toastId,o.containerId),key:`t-${o.key}`},t)))}))}var P=`:root {
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
`,R=new Map;t.s(["ToastContainer",0,function(t){var o;return w(()=>{if(!P||"u"<typeof document)return;let t=document,e=R.get(t);if(e){o&&e.setAttribute("nonce",o);return}let a=t.createElement("style");a.textContent=P,o&&a.setAttribute("nonce",o),t.head.appendChild(a),R.set(t,a)},[o=t.nonce]),e.default.createElement(O,{...t})},"toast",0,x],70319)},43794,(t,e,o)=>{!function(){"use strict";var o={}.hasOwnProperty;function a(){for(var t="",e=0;e<arguments.length;e++){var n=arguments[e];n&&(t=r(t,function(t){if("string"==typeof t||"number"==typeof t)return t;if("object"!=typeof t)return"";if(Array.isArray(t))return a.apply(null,t);if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes("[native code]"))return t.toString();var e="";for(var n in t)o.call(t,n)&&t[n]&&(e=r(e,n));return e}(n)))}return t}function r(t,e){return e?t?t+" "+e:t+e:t}if(e.exports)a.default=a,e.exports=a;else if("function"==typeof define&&"object"==typeof define.amd&&define.amd)void 0!==a&&t.v(a);else window.classNames=a}()},58006,t=>{"use strict";t.i(47167);var e=t.i(71645),o=t.i(74080),a=t.i(43794),r=t.i(43476),n=!1;if("u">typeof window){var i={get passive(){n=!0;return}};window.addEventListener("testPassive",null,i),window.removeEventListener("testPassive",null,i)}var s="u">typeof window&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||"MacIntel"===window.navigator.platform&&window.navigator.maxTouchPoints>1),l=[],c=!1,f=-1,d=void 0,u=void 0,m=function(t){return l.some(function(e){return!!(e.options.allowTouchMove&&e.options.allowTouchMove(t))})},y=function(t){var e=t||window.event;return!!m(e.target)||e.touches.length>1||(e.preventDefault&&e.preventDefault(),!1)},p=function(t){if(void 0===u){var e=!!t&&!0===t.reserveScrollBarGap,o=window.innerWidth-document.documentElement.clientWidth;e&&o>0&&(u=document.body.style.paddingRight,document.body.style.paddingRight=o+"px")}void 0===d&&(d=document.body.style.overflow,document.body.style.overflow="hidden")},g=function(){void 0!==u&&(document.body.style.paddingRight=u,u=void 0),void 0!==d&&(document.body.style.overflow=d,d=void 0)},v=function(t,e){var o=t.targetTouches[0].clientY-f;return!m(t.target)&&(e&&0===e.scrollTop&&o>0?y(t):e&&e.scrollHeight-e.scrollTop<=e.clientHeight&&o<0?y(t):(t.stopPropagation(),!0))},_=function(t,e){t?!l.some(function(e){return e.targetElement===t})&&(l=[].concat(function(t){if(!Array.isArray(t))return Array.from(t);for(var e=0,o=Array(t.length);e<t.length;e++)o[e]=t[e];return o}(l),[{targetElement:t,options:e||{}}]),s?(t.ontouchstart=function(t){1===t.targetTouches.length&&(f=t.targetTouches[0].clientY)},t.ontouchmove=function(e){1===e.targetTouches.length&&v(e,t)},c||(document.addEventListener("touchmove",y,n?{passive:!1}:void 0),c=!0)):p(e)):console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.")},b=function(t){t?(l=l.filter(function(e){return e.targetElement!==t}),s?(t.ontouchstart=null,t.ontouchmove=null,c&&0===l.length&&(document.removeEventListener("touchmove",y,n?{passive:!1}:void 0),c=!1)):l.length||g()):console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.")},h=({classes:t,classNames:e,styles:o,id:n,closeIcon:i,onClick:s})=>(0,r.jsx)("button",{id:n,className:(0,a.default)(t.closeButton,e?.closeButton),style:o?.closeButton,onClick:s,"data-testid":"close-button",children:i||(0,r.jsx)("svg",{className:e?.closeIcon,style:o?.closeIcon,width:28,height:28,viewBox:"0 0 36 36","data-testid":"close-icon",children:(0,r.jsx)("path",{d:"M28.5 9.62L26.38 7.5 18 15.88 9.62 7.5 7.5 9.62 15.88 18 7.5 26.38l2.12 2.12L18 20.12l8.38 8.38 2.12-2.12L20.12 18z"})})});let T="u">typeof window,x=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])'];function w(t){for(var e=document.activeElement,o=t.querySelectorAll(x.join(",")),a=[],r=0;r<o.length;r++){var n=o[r];(e===n||!n.disabled&&function(t){var e=parseInt(t.getAttribute("tabindex"),10);return isNaN(e)?t.getAttribute("contentEditable")?0:t.tabIndex:e}(n)>-1&&null!==n.offsetParent&&"hidden"!==getComputedStyle(n).visibility&&function(t){if("INPUT"!==t.tagName||"radio"!==t.type||!t.name)return!0;var e=(t.form||t.ownerDocument).querySelectorAll('input[type="radio"][name="'+t.name+'"]'),o=function(t,e){for(var o=0;o<t.length;o++)if(t[o].checked&&t[o].form===e)return t[o]}(e,t.form);return o===t||void 0===o&&e[0]===t}(n))&&a.push(n)}return a}let k=({container:t,initialFocusRef:o})=>{let a=(0,e.useRef)(null);return(0,e.useEffect)(()=>{let e=e=>{t?.current&&function(t,e){if(t&&"Tab"===t.key){if(!e||!e.contains)return console.warn("focus-trap-js: parent element is not defined");if(e.contains(t.target)){var o=w(e),a=o[0],r=o[o.length-1];t.shiftKey&&t.target===a?(r.focus(),t.preventDefault()):t.shiftKey||t.target!==r||(a.focus(),t.preventDefault())}}}(e,t.current)};if(T&&document.addEventListener("keydown",e),T&&t?.current){let e=()=>{-1!==x.findIndex(t=>document.activeElement?.matches(t))&&(a.current=document.activeElement)};if(o)e(),requestAnimationFrame(()=>{o.current?.focus()});else{let o=w(t.current);o[0]&&(e(),o[0].focus())}}return()=>{T&&(document.removeEventListener("keydown",e),a.current?.focus())}},[t,o]),null},E=[],I={root:"react-responsive-modal-root",overlay:"react-responsive-modal-overlay",overlayAnimationIn:"react-responsive-modal-overlay-in",overlayAnimationOut:"react-responsive-modal-overlay-out",modalContainer:"react-responsive-modal-container",modalContainerCenter:"react-responsive-modal-containerCenter",modal:"react-responsive-modal-modal",modalAnimationIn:"react-responsive-modal-modal-in",modalAnimationOut:"react-responsive-modal-modal-out",closeButton:"react-responsive-modal-closeButton"},C=e.default.forwardRef(({open:t,center:n,blockScroll:i=!0,closeOnEsc:s=!0,closeOnOverlayClick:l=!0,container:c,showCloseIcon:f=!0,closeIconId:d,closeIcon:u,focusTrapped:m=!0,initialFocusRef:y,animationDuration:p=300,classNames:g,styles:v,role:x="dialog",ariaLabel:w,ariaDescribedby:C,ariaLabelledby:L,containerId:A,modalId:O,onClose:P,onEscKeyDown:R,onOverlayClick:z,onAnimationEnd:N,children:S,reserveScrollBarGap:$},B)=>{let D,M=function(t,o={isStateful:!0}){let a=function(){let[t,o]=e.default.useState(void 0),{current:a}=e.default.useRef({current:t});return Object.defineProperty(a,"current",{get:()=>t,set:e=>{Object.is(t,e)||(t=e,o(e))}}),a}(),r=(0,e.useRef)(),n=o.isStateful?a:r;return e.default.useImperativeHandle(t,()=>n.current),n}(B),j=(0,e.useRef)(null),U=(0,e.useRef)(null),H=(0,e.useRef)(null);null===H.current&&T&&(H.current=document.createElement("div"));let[X,q]=(0,e.useState)(!1);(0,e.useEffect)(()=>{var e;return t&&(e=j,E.push(e)),()=>{var t;t=j,E=E.filter(e=>e!==t)}},[t,j]),D=(0,e.useRef)(null),(0,e.useEffect)(()=>(t&&j.current&&i&&(D.current=j.current,_(j.current,{reserveScrollBarGap:$})),()=>{D.current&&(b(D.current),D.current=null)}),[t,X,j,i,$]);let F=t=>{let e;27===t.keyCode&&(e=j,E.length&&E[E.length-1]===e)&&(R?.(t),s&&P())};(0,e.useEffect)(()=>()=>{X&&(H.current&&!c&&document.body.contains(H.current)&&document.body.removeChild(H.current),document.removeEventListener("keydown",F))},[X]),(0,e.useEffect)(()=>{t&&!X&&(q(!0),!H.current||c||document.body.contains(H.current)||document.body.appendChild(H.current),document.addEventListener("keydown",F))},[t]);let K=()=>{U.current=!1},Y=c||H.current,V=t?g?.overlayAnimationIn??I.overlayAnimationIn:g?.overlayAnimationOut??I.overlayAnimationOut,W=t?g?.modalAnimationIn??I.modalAnimationIn:g?.modalAnimationOut??I.modalAnimationOut;return X&&Y?(0,o.createPortal)((0,r.jsxs)("div",{className:(0,a.default)(I.root,g?.root),style:v?.root,"data-testid":"root",children:[(0,r.jsx)("div",{className:(0,a.default)(I.overlay,g?.overlay),"data-testid":"overlay","aria-hidden":!0,style:{animation:`${V} ${p}ms`,...v?.overlay}}),(0,r.jsx)("div",{ref:j,id:A,className:(0,a.default)(I.modalContainer,n&&I.modalContainerCenter,g?.modalContainer),style:v?.modalContainer,"data-testid":"modal-container",onClick:t=>{if(null===U.current&&(U.current=!0),!U.current){U.current=null;return}z?.(t),l&&P(),U.current=null},children:(0,r.jsxs)("div",{ref:M,className:(0,a.default)(I.modal,g?.modal),style:{animation:`${W} ${p}ms`,...v?.modal},onMouseDown:K,onMouseUp:K,onClick:K,onAnimationEnd:()=>{t||q(!1),N?.()},id:O,role:x,"aria-modal":"true","aria-label":w,"aria-labelledby":L,"aria-describedby":C,"data-testid":"modal",tabIndex:-1,children:[m&&(0,r.jsx)(k,{container:M,initialFocusRef:y}),S,f&&(0,r.jsx)(h,{classes:I,classNames:g,styles:v,closeIcon:u,onClick:P,id:d})]})})]}),Y):null});t.s(["Modal",0,C],58006)}]);