(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,70319,t=>{"use strict";var e=t.i(71645);let o=function(){for(var t,e,o=0,a="",r=arguments.length;o<r;o++)(t=arguments[o])&&(e=function t(e){var o,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e)){var s=e.length;for(o=0;o<s;o++)e[o]&&(a=t(e[o]))&&(r&&(r+=" "),r+=a)}else for(a in e)e[a]&&(r&&(r+=" "),r+=a);return r}(t))&&(a&&(a+=" "),a+=e);return a};var a=t=>"number"==typeof t&&!isNaN(t),r=t=>"string"==typeof t||"function"==typeof t?t:null,s=t=>(0,e.isValidElement)(t)||"string"==typeof t||"function"==typeof t||a(t);function i({enter:t,exit:o,appendPosition:a=!1,collapse:r=!0,collapseDuration:s=300}){return function({children:i,position:n,preventExitTransition:l,done:d,nodeRef:c,isIn:f,playToast:p}){let u=a?`${t}--${n}`:t,y=a?`${o}--${n}`:o,g=(0,e.useRef)(0);return(0,e.useLayoutEffect)(()=>{let t=c.current,e=u.split(" "),o=a=>{a.target===c.current&&(p(),t.removeEventListener("animationend",o),t.removeEventListener("animationcancel",o),0===g.current&&"animationcancel"!==a.type&&t.classList.remove(...e))};t.classList.add(...e),t.addEventListener("animationend",o),t.addEventListener("animationcancel",o)},[]),(0,e.useEffect)(()=>{let t=c.current,e=()=>{t.removeEventListener("animationend",e),r?function(t,e,o=300){let{scrollHeight:a,style:r}=t;requestAnimationFrame(()=>{r.minHeight="initial",r.height=a+"px",r.transition=`all ${o}ms`,requestAnimationFrame(()=>{r.height="0",r.padding="0",r.margin="0",setTimeout(e,o)})})}(t,d,s):d()};f||(l?e():(g.current=1,t.className+=` ${y}`,t.addEventListener("animationend",e)))},[f]),e.default.createElement(e.default.Fragment,null,i)}}function n(t,e){return{content:l(t.content,t.props),containerId:t.props.containerId,id:t.props.toastId,theme:t.props.theme,type:t.props.type,data:t.props.data||{},isLoading:t.props.isLoading,icon:t.props.icon,reason:t.removalReason,status:e}}function l(t,o,a=!1){return(0,e.isValidElement)(t)&&"string"!=typeof t.type?(0,e.cloneElement)(t,{closeToast:o.closeToast,toastProps:o,data:o.data,isPaused:a}):"function"==typeof t?t({closeToast:o.closeToast,toastProps:o,data:o.data,isPaused:a}):t}function d({delay:t,isRunning:a,closeToast:r,type:s="default",hide:i,className:n,controlledProgress:l,progress:c,rtl:f,isIn:p,theme:u}){let y=i||l&&0===c,g={animationDuration:`${t}ms`,animationPlayState:a?"running":"paused"};l&&(g.transform=`scaleX(${c})`);let m=o("Toastify__progress-bar",l?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${u}`,`Toastify__progress-bar--${s}`,{"Toastify__progress-bar--rtl":f}),x="function"==typeof n?n({rtl:f,type:s,defaultClassName:m}):o(m,n);return e.default.createElement("div",{className:"Toastify__progress-bar--wrp","data-hidden":y},e.default.createElement("div",{className:`Toastify__progress-bar--bg Toastify__progress-bar-theme--${u} Toastify__progress-bar--${s}`}),e.default.createElement("div",{role:"progressbar","aria-hidden":y?"true":"false","aria-label":"notification timer","aria-valuenow":l?Math.round(100*c):void 0,"aria-valuemin":0,"aria-valuemax":100,className:x,style:g,...{[l&&c>=1?"onTransitionEnd":"onAnimationEnd"]:l&&c<1?null:()=>{p&&r()}}}))}var c=1,f=()=>`${c++}`,p=new Map,u=[],y=new Set,g=t=>y.forEach(e=>e(t));function m(t,e){var o;if(e)return!!(null!=(o=p.get(e))&&o.isToastActive(t));let a=!1;return p.forEach(e=>{e.isToastActive(t)&&(a=!0)}),a}function x(t,e){s(t)&&(p.size>0||u.push({content:t,options:e}),p.forEach(o=>{o.buildToast(t,e)}))}function h(t,e){p.forEach(o=>{null!=e&&null!=e&&e.containerId&&(null==e?void 0:e.containerId)!==o.id||o.toggle(t,null==e?void 0:e.id)})}function b(t,e){return x(t,e),e.toastId}function _(t,e){var o;return{...e,type:e&&e.type||t,toastId:(o=e)&&("string"==typeof o.toastId||a(o.toastId))?o.toastId:f()}}function v(t){return(e,o)=>b(e,_(t,o))}function T(t,e){return b(t,_("default",e))}T.loading=(t,e)=>b(t,_("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...e})),T.promise=function(t,{pending:e,error:o,success:a},r){let s;e&&(s="string"==typeof e?T.loading(e,r):T.loading(e.render,{...r,...e}));let i={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},n=(t,e,o)=>{if(null==e)return void T.dismiss(s);let a={type:t,...i,...r,data:o},n="string"==typeof e?{render:e}:e;return s?T.update(s,{...a,...n}):T(n.render,{...a,...n}),o},l="function"==typeof t?t():t;return l.then(t=>n("success",a,t)).catch(t=>n("error",o,t)),l},T.success=v("success"),T.info=v("info"),T.error=v("error"),T.warning=v("warning"),T.warn=T.warning,T.dark=(t,e)=>b(t,_("default",{theme:"dark",...e})),T.dismiss=function(t){!function(t){let e;if(!(p.size>0)){u=u.filter(e=>null!=t&&e.options.toastId!==t);return}if(null==t||"string"==typeof(e=t)||a(e))p.forEach(e=>{e.removeToast(t)});else if(t&&("containerId"in t||"id"in t)){let e=p.get(t.containerId);e?e.removeToast(t.id):p.forEach(e=>{e.removeToast(t.id)})}}(t)},T.clearWaitingQueue=(t={})=>{p.forEach(e=>{e.props.limit&&(!t.containerId||e.id===t.containerId)&&e.clearQueue()})},T.isActive=m,T.update=(t,e={})=>{let o=((t,{containerId:e})=>{var o;return null==(o=p.get(e||1))?void 0:o.toasts.get(t)})(t,e);if(o){let{props:a,content:r}=o,s={delay:100,...a,...e,toastId:e.toastId||t,updateId:f()};s.toastId!==t&&(s.staleId=t);let i=s.render||r;delete s.render,b(i,s)}},T.done=t=>{T.update(t,{progress:1})},T.onChange=function(t){return y.add(t),()=>{y.delete(t)}},T.play=t=>h(!0,t),T.pause=t=>h(!1,t);var k="u">typeof window?e.useLayoutEffect:e.useEffect,w=({theme:t,type:o,isLoading:a,...r})=>e.default.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===t?"currentColor":`var(--toastify-icon-color-${o})`,...r}),E={info:function(t){return e.default.createElement(w,{...t},e.default.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(t){return e.default.createElement(w,{...t},e.default.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(t){return e.default.createElement(w,{...t},e.default.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(t){return e.default.createElement(w,{...t},e.default.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return e.default.createElement("div",{className:"Toastify__spinner"})}},j=t=>{let{isRunning:a,preventExitTransition:r,toastRef:s,eventHandlers:i,playToast:n}=function(t){var o,a;let[r,s]=(0,e.useState)(!1),[i,n]=(0,e.useState)(!1),l=(0,e.useRef)(null),d=(0,e.useRef)({start:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,didMove:!1}).current,{autoClose:c,pauseOnHover:f,closeToast:u,onClick:y,closeOnClick:g}=t;function m(){s(!0)}function x(){s(!1)}function h(e){let o=l.current;if(d.canDrag&&o){d.didMove=!0,r&&x(),"x"===t.draggableDirection?d.delta=e.clientX-d.start:d.delta=e.clientY-d.start,d.start!==e.clientX&&(d.canCloseOnClick=!1);let a="x"===t.draggableDirection?`${d.delta}px, var(--y)`:`0, calc(${d.delta}px + var(--y))`;o.style.transform=`translate3d(${a},0)`,o.style.opacity=`${1-Math.abs(d.delta/d.removalDistance)}`}}function b(){document.removeEventListener("pointermove",h),document.removeEventListener("pointerup",b);let e=l.current;if(d.canDrag&&d.didMove&&e){if(d.canDrag=!1,Math.abs(d.delta)>d.removalDistance){n(!0),t.closeToast(!0),t.collapseAll();return}e.style.transition="transform 0.2s, opacity 0.2s",e.style.removeProperty("transform"),e.style.removeProperty("opacity")}}o={id:t.toastId,containerId:t.containerId,fn:s},null==(a=p.get(o.containerId||1))||a.setToggle(o.id,o.fn),(0,e.useEffect)(()=>{if(t.pauseOnFocusLoss)return document.hasFocus()||x(),window.addEventListener("focus",m),window.addEventListener("blur",x),()=>{window.removeEventListener("focus",m),window.removeEventListener("blur",x)}},[t.pauseOnFocusLoss]);let _={onPointerDown:function(e){if(!0===t.draggable||t.draggable===e.pointerType){d.didMove=!1,document.addEventListener("pointermove",h),document.addEventListener("pointerup",b);let o=l.current;d.canCloseOnClick=!0,d.canDrag=!0,o.style.transition="none","x"===t.draggableDirection?(d.start=e.clientX,d.removalDistance=o.offsetWidth*(t.draggablePercent/100)):(d.start=e.clientY,d.removalDistance=o.offsetHeight*(80===t.draggablePercent?1.5*t.draggablePercent:t.draggablePercent)/100)}},onPointerUp:function(e){let{top:o,bottom:a,left:r,right:s}=l.current.getBoundingClientRect();"mouse"===e.pointerType&&t.pauseOnHover&&e.clientX>=r&&e.clientX<=s&&e.clientY>=o&&e.clientY<=a?x():m()}};return c&&f&&(_.onMouseEnter=x,t.stacked||(_.onMouseLeave=m)),g&&(_.onClick=t=>{y&&y(t),d.canCloseOnClick&&u(!0)}),{playToast:m,pauseToast:x,isRunning:r,preventExitTransition:i,toastRef:l,eventHandlers:_}}(t),{closeButton:c,children:f,autoClose:u,onClick:y,type:g,hideProgressBar:m,closeToast:x,transition:h,position:b,className:_,style:v,progressClassName:T,updateId:k,role:w,progress:j,rtl:I,toastId:C,deleteToast:S,isIn:A,isLoading:z,closeOnClick:F,theme:L,ariaLabel:B}=t,N=o("Toastify__toast",`Toastify__toast-theme--${L}`,`Toastify__toast--${g}`,{"Toastify__toast--rtl":I},{"Toastify__toast--close-on-click":F}),R="function"==typeof _?_({rtl:I,position:b,type:g,defaultClassName:N}):o(N,_),D=function({theme:t,type:o,isLoading:a,icon:r}){let s=null,i={theme:t,type:o};return!1===r||("function"==typeof r?s=r({...i,isLoading:a}):(0,e.isValidElement)(r)?s=(0,e.cloneElement)(r,i):a?s=E.spinner():o in E&&(s=E[o](i))),s}(t),O=!!j||!u,$={closeToast:x,type:g,theme:L},P=null;return!1===c||(P="function"==typeof c?c($):(0,e.isValidElement)(c)?(0,e.cloneElement)(c,$):function({closeToast:t,theme:o,ariaLabel:a="close"}){return e.default.createElement("button",{className:`Toastify__close-button Toastify__close-button--${o}`,type:"button",onClick:e=>{e.stopPropagation(),t(!0)},"aria-label":a},e.default.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},e.default.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}($)),e.default.createElement(h,{isIn:A,done:S,position:b,preventExitTransition:r,nodeRef:s,playToast:n},e.default.createElement("div",{id:C,tabIndex:0,onClick:y,"data-in":A,className:R,...i,style:v,ref:s,...A&&{role:w,"aria-label":B}},null!=D&&e.default.createElement("div",{className:o("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!z})},D),l(f,t,!a),P,!t.customProgressBar&&e.default.createElement(d,{...k&&!O?{key:`p-${k}`}:{},rtl:I,theme:L,delay:u,isRunning:a,isIn:A,closeToast:x,hide:m,type:g,className:T,controlledProgress:O,progress:j||0})))},I=(t,e=!1)=>({enter:`Toastify--animate Toastify__${t}-enter`,exit:`Toastify--animate Toastify__${t}-exit`,appendPosition:e}),C=i(I("bounce",!0));i(I("slide",!0)),i(I("zoom")),i(I("flip"));var S={position:"top-right",transition:C,autoClose:5e3,closeButton:!0,pauseOnHover:!0,pauseOnFocusLoss:!0,draggable:"touch",draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light","aria-label":"Notifications Alt+T",hotKeys:t=>t.altKey&&"KeyT"===t.code};function A(t){let i={...S,...t},l=t.stacked,[d,c]=(0,e.useState)(!0),f=(0,e.useRef)(null),{getToastToRender:y,isToastActive:h,count:b}=function(t){var o;let i,{subscribe:l,getSnapshot:d,setProps:c}=(0,e.useRef)((i=t.containerId||1,{subscribe(e){let o,l,d,c,f,y,m,h,b,_,v,T=(o=1,l=0,d=[],c=[],f=t,y=new Map,m=new Set,h=()=>{c=Array.from(y.values()),m.forEach(t=>t())},b=t=>{var e,o;t.isActive&&(null==(o=null==(e=t.props)?void 0:e.onClose)||o.call(e,t.removalReason),t.isActive=!1,g(n(t,"removed")))},_=t=>{if(null==t)y.forEach(b);else{let e=y.get(t);e&&b(e)}h()},v=t=>{var e,o;let{toastId:a,updateId:r}=t.props,s=null==r;t.staleId&&y.delete(t.staleId),t.isActive=!0,y.set(a,t),h(),g(n(t,s?"added":"updated")),s&&(null==(o=(e=t.props).onOpen)||o.call(e))},{id:i,props:f,observe:t=>(m.add(t),()=>m.delete(t)),toggle:(t,e)=>{y.forEach(o=>{var a;(null==e||e===o.props.toastId)&&(null==(a=o.toggle)||a.call(o,t))})},removeToast:_,toasts:y,clearQueue:()=>{l-=d.length,d=[]},buildToast:(t,e)=>{let n,c;if((({containerId:t,toastId:e,updateId:o})=>{let a=y.has(e)&&null==o;return(t?t!==i:1!==i)||a})(e))return;let{toastId:p,updateId:u,data:g,staleId:m,delay:x}=e,b=null==u;b&&l++;let T={...f,style:f.toastStyle,key:o++,...Object.fromEntries(Object.entries(e).filter(([t,e])=>null!=e)),toastId:p,updateId:u,data:g,isIn:!1,className:r(e.className||f.toastClassName),progressClassName:r(e.progressClassName||f.progressClassName),autoClose:!e.isLoading&&(n=e.autoClose,c=f.autoClose,!1===n||a(n)&&n>0?n:c),closeToast(t){let e=y.get(p);e&&(e.removalReason=t,_(p))},deleteToast(){if(null!=y.get(p)){if(y.delete(p),--l<0&&(l=0),d.length>0)return void v(d.shift());h()}}};T.closeButton=f.closeButton,!1===e.closeButton||s(e.closeButton)?T.closeButton=e.closeButton:!0===e.closeButton&&(T.closeButton=!s(f.closeButton)||f.closeButton);let k={content:t,props:T,staleId:m};f.limit&&f.limit>0&&l>f.limit&&b?d.push(k):a(x)?setTimeout(()=>{v(k)},x):v(k)},setProps(t){f=t},setToggle:(t,e)=>{let o=y.get(t);o&&(o.toggle=e)},isToastActive:t=>{var e;return null==(e=y.get(t))?void 0:e.isActive},getSnapshot:()=>c});p.set(i,T);let k=T.observe(e);return u.forEach(t=>x(t.content,t.options)),u=[],()=>{k(),p.delete(i)}},setProps(t){var e;null==(e=p.get(i))||e.setProps(t)},getSnapshot(){var t;return null==(t=p.get(i))?void 0:t.getSnapshot()}})).current;c(t);let f=null==(o=(0,e.useSyncExternalStore)(l,d,d))?void 0:o.slice();return{getToastToRender:function(e){if(!f)return[];let o=new Map;return t.newestOnTop&&f.reverse(),f.forEach(t=>{let{position:e}=t.props;o.has(e)||o.set(e,[]),o.get(e).push(t)}),Array.from(o,t=>e(t[0],t[1]))},isToastActive:m,count:null==f?void 0:f.length}}(i),{className:_,style:v,rtl:w,containerId:E,hotKeys:I}=i;function C(){l&&(c(!0),T.play())}return k(()=>{var t;if(l){let e=f.current.querySelectorAll('[data-in="true"]'),o=null==(t=i.position)?void 0:t.includes("top"),a=0,r=0;Array.from(e).reverse().forEach((t,e)=>{t.classList.add("Toastify__toast--stacked"),e>0&&(t.dataset.collapsed=`${d}`),t.dataset.pos||(t.dataset.pos=o?"top":"bot");let s=a*(d?.2:1)+(d?0:12*e),i=Math.max(.5,1-(d?r:0));t.style.setProperty("--y",`${o?s:-1*s}px`),t.style.setProperty("--g","12"),t.style.setProperty("--s",`${i}`),a+=t.offsetHeight,r+=.025})}},[d,b,l]),(0,e.useEffect)(()=>{function t(t){var e;let o=f.current;I(t)&&(null==(e=null==o?void 0:o.querySelector('[tabIndex="0"]'))||e.focus(),c(!1),T.pause()),"Escape"===t.key&&(document.activeElement===o||null!=o&&o.contains(document.activeElement))&&(c(!0),T.play())}return document.addEventListener("keydown",t),()=>{document.removeEventListener("keydown",t)}},[I]),e.default.createElement("section",{ref:f,className:"Toastify",id:E,onMouseEnter:()=>{l&&(c(!1),T.pause())},onMouseLeave:C,"aria-live":"polite","aria-atomic":"false","aria-relevant":"additions text","aria-label":i["aria-label"]},y((t,a)=>{var s;let i,n=a.length?{...v}:{...v,pointerEvents:"none"};return e.default.createElement("div",{tabIndex:-1,className:(s=t,i=o("Toastify__toast-container",`Toastify__toast-container--${s}`,{"Toastify__toast-container--rtl":w}),"function"==typeof _?_({position:s,rtl:w,defaultClassName:i}):o(i,r(_))),"data-stacked":l,style:n,key:`c-${t}`},a.map(({content:t,props:o})=>e.default.createElement(j,{...o,stacked:l,collapseAll:C,isIn:h(o.toastId,o.containerId),key:`t-${o.key}`},t)))}))}var z=`:root {
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
`,F=new Map;t.s(["ToastContainer",0,function(t){var o;return k(()=>{if(!z||"u"<typeof document)return;let t=document,e=F.get(t);if(e){o&&e.setAttribute("nonce",o);return}let a=t.createElement("style");a.textContent=z,o&&a.setAttribute("nonce",o),t.head.appendChild(a),F.set(t,a)},[o=t.nonce]),e.default.createElement(A,{...t})},"toast",0,T],70319)},18566,(t,e,o)=>{e.exports=t.r(76562)},28030,t=>{"use strict";var e=t.i(47167),o=t.i(43476),a=t.i(71645),r=t.i(18566),s=t.i(70319);t.s(["default",0,function(){let t=(0,r.useRouter)(),[i,n]=(0,a.useState)([]),[l,d]=(0,a.useState)(""),[c,f]=(0,a.useState)(!0),[p,u]=(0,a.useState)(!1),[y,g]=(0,a.useState)(null),[m,x]=(0,a.useState)("enquiries");(0,a.useEffect)(()=>{let e=localStorage.getItem("adminToken"),o=localStorage.getItem("adminUser");e?(u(!0),o&&g(JSON.parse(o)),h(e)):t.push("/admin/login")},[t]);let h=async t=>{f(!0);try{let o="php"===e.default.env.NEXT_PUBLIC_BACKEND_TYPE,a=e.default.env.NEXT_PUBLIC_API_URL||"http://localhost:8000",r=o?`${a}/enquiries.php`:"/api/admin/enquiries",i=await fetch(r,{method:"GET",headers:{Authorization:`Bearer ${t}`,"Content-Type":"application/json"}}),l=await i.json();i.ok&&"success"===l.status?n(l.data||[]):(s.toast.error(l.message||"Failed to fetch enquiries."),401===i.status&&_())}catch(t){console.error("Fetch Enquiries Error:",t),s.toast.error("Could not fetch enquiries. Check network/server connection.")}finally{f(!1)}},b=async t=>{if(!window.confirm("Are you sure you want to delete this enquiry? This action cannot be undone."))return;let o=localStorage.getItem("adminToken");if(o)try{let a="php"===e.default.env.NEXT_PUBLIC_BACKEND_TYPE,r=e.default.env.NEXT_PUBLIC_API_URL||"http://localhost:8000",i=a?`${r}/enquiries.php?id=${t}`:`/api/admin/enquiries?id=${t}`,l=await fetch(i,{method:"DELETE",headers:{Authorization:`Bearer ${o}`,"Content-Type":"application/json"}}),d=await l.json();l.ok&&"success"===d.status?(s.toast.success("Enquiry deleted successfully."),n(e=>e.filter(e=>e.id!==t))):s.toast.error(d.message||"Failed to delete enquiry.")}catch(t){console.error("Delete Enquiry Error:",t),s.toast.error("A network error occurred while deleting.")}},_=()=>{localStorage.removeItem("adminToken"),localStorage.removeItem("adminUser"),t.push("/admin/login")},v=i.filter(t=>{let e=l.toLowerCase();return`${t.first_name} ${t.last_name}`.toLowerCase().includes(e)||t.email.toLowerCase().includes(e)||t.phone.toLowerCase().includes(e)||t.message.toLowerCase().includes(e)}),T=i.filter(t=>new Date(t.created_at).setHours(0,0,0,0)===new Date().setHours(0,0,0,0)).length;return p?(0,o.jsxs)("div",{style:{display:"flex",minHeight:"100vh",background:"#0F172A",color:"#E2E8F0",fontFamily:"var(--body-font), sans-serif"},children:[(0,o.jsxs)("aside",{style:{width:"280px",background:"rgba(255, 255, 255, 0.02)",backdropFilter:"blur(10px)",borderRight:"1px solid rgba(255, 255, 255, 0.05)",display:"flex",flexDirection:"column",padding:"30px 0"},children:[(0,o.jsxs)("div",{style:{padding:"0 30px",marginBottom:"40px",display:"flex",alignItems:"center",gap:"12px"},children:[(0,o.jsx)("div",{style:{width:"32px",height:"32px",background:"linear-gradient(135deg, #EA7925, #f59e0b)",borderRadius:"8px",display:"flex",alignItems:"center",justifyContent:"center"},children:(0,o.jsx)("i",{className:"fa-solid fa-bolt",style:{color:"#fff",fontSize:"14px"}})}),(0,o.jsx)("h2",{style:{fontSize:"20px",fontWeight:"700",color:"#FFFFFF",margin:0,fontFamily:"var(--heading-font), sans-serif",letterSpacing:"-0.5px"},children:"IntellectWorks"})]}),(0,o.jsx)("nav",{style:{flex:1,padding:"0 20px"},children:(0,o.jsxs)("ul",{style:{listStyle:"none",padding:0,margin:0,display:"flex",flexDirection:"column",gap:"8px"},children:[(0,o.jsx)("li",{children:(0,o.jsxs)("button",{onClick:()=>x("enquiries"),style:{width:"100%",display:"flex",alignItems:"center",gap:"12px",padding:"12px 16px",background:"enquiries"===m?"rgba(234, 121, 37, 0.1)":"transparent",border:"1px solid",borderColor:"enquiries"===m?"rgba(234, 121, 37, 0.2)":"transparent",borderRadius:"12px",color:"enquiries"===m?"#EA7925":"#94A3B8",fontSize:"15px",fontWeight:"enquiries"===m?"600":"500",cursor:"pointer",transition:"all 0.3s ease",textAlign:"left"},children:[(0,o.jsx)("i",{className:"fa-regular fa-envelope",style:{fontSize:"16px"}})," Customer Enquiries"]})}),(0,o.jsx)("li",{children:(0,o.jsxs)("button",{onClick:()=>x("settings"),style:{width:"100%",display:"flex",alignItems:"center",gap:"12px",padding:"12px 16px",background:"settings"===m?"rgba(234, 121, 37, 0.1)":"transparent",border:"1px solid transparent",borderRadius:"12px",color:"settings"===m?"#EA7925":"#94A3B8",fontSize:"15px",fontWeight:"500",cursor:"pointer",transition:"all 0.3s ease",textAlign:"left"},children:[(0,o.jsx)("i",{className:"fa-solid fa-gear",style:{fontSize:"16px"}})," Settings"]})})]})}),(0,o.jsx)("div",{style:{padding:"0 20px",marginTop:"auto"},children:(0,o.jsxs)("div",{style:{background:"rgba(255, 255, 255, 0.03)",borderRadius:"16px",padding:"20px",display:"flex",flexDirection:"column",alignItems:"center",border:"1px solid rgba(255, 255, 255, 0.05)",textAlign:"center"},children:[(0,o.jsx)("div",{style:{width:"40px",height:"40px",borderRadius:"50%",background:"#1E293B",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:"12px"},children:(0,o.jsx)("i",{className:"fa-solid fa-user-tie",style:{color:"#94A3B8"}})}),(0,o.jsx)("span",{style:{fontSize:"14px",color:"#F1F5F9",fontWeight:"600",marginBottom:"4px"},children:y?.username||"Admin"}),(0,o.jsx)("span",{style:{fontSize:"12px",color:"#64748B",marginBottom:"16px"},children:"Administrator"}),(0,o.jsx)("button",{onClick:_,style:{width:"100%",padding:"8px",background:"transparent",border:"1px solid rgba(255, 255, 255, 0.1)",borderRadius:"8px",color:"#E2E8F0",fontSize:"13px",cursor:"pointer",transition:"all 0.3s ease"},onMouseEnter:t=>{t.currentTarget.style.background="rgba(239, 68, 68, 0.1)",t.currentTarget.style.borderColor="rgba(239, 68, 68, 0.3)",t.currentTarget.style.color="#EF4444"},onMouseLeave:t=>{t.currentTarget.style.background="transparent",t.currentTarget.style.borderColor="rgba(255, 255, 255, 0.1)",t.currentTarget.style.color="#E2E8F0"},children:"Log Out"})]})})]}),(0,o.jsx)("main",{style:{flex:1,padding:"40px",overflowY:"auto",background:"radial-gradient(circle at 100% 0%, rgba(39, 84, 153, 0.08) 0%, transparent 50%)"},children:(0,o.jsxs)("div",{style:{maxWidth:"1400px",margin:"0 auto"},children:[(0,o.jsxs)("header",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:"40px"},children:[(0,o.jsxs)("div",{children:[(0,o.jsx)("h1",{style:{fontSize:"28px",fontWeight:"700",color:"#F8FAFC",margin:"0 0 8px 0",fontFamily:"var(--heading-font), sans-serif",letterSpacing:"-0.5px"},children:"Dashboard Overview"}),(0,o.jsx)("p",{style:{margin:0,color:"#94A3B8",fontSize:"15px"},children:"Monitor and manage your recent customer enquiries in real-time."})]}),(0,o.jsxs)("div",{style:{display:"flex",gap:"16px"},children:[(0,o.jsxs)("div",{style:{position:"relative"},children:[(0,o.jsx)("input",{type:"text",value:l,onChange:t=>d(t.target.value),placeholder:"Search enquiries...",style:{padding:"12px 16px 12px 44px",background:"rgba(255, 255, 255, 0.03)",border:"1px solid rgba(255, 255, 255, 0.1)",borderRadius:"12px",color:"#F8FAFC",fontSize:"14px",outline:"none",width:"280px",transition:"all 0.3s ease"},onFocus:t=>{t.target.style.borderColor="#275499",t.target.style.background="rgba(255, 255, 255, 0.05)"},onBlur:t=>{t.target.style.borderColor="rgba(255, 255, 255, 0.1)",t.target.style.background="rgba(255, 255, 255, 0.03)"}}),(0,o.jsx)("i",{className:"fa-solid fa-magnifying-glass",style:{position:"absolute",left:"16px",top:"50%",transform:"translateY(-50%)",color:"#64748B"}})]}),(0,o.jsxs)("button",{onClick:()=>{if(0===i.length)return void s.toast.warn("No enquiries to export.");let t=["ID,Date,First Name,Last Name,Email,Phone,Message"];v.forEach(e=>{let o=[e.id,new Date(e.created_at).toLocaleString(),`"${e.first_name.replace(/"/g,'""')}"`,`"${e.last_name.replace(/"/g,'""')}"`,`"${e.email.replace(/"/g,'""')}"`,`"${e.phone.replace(/"/g,'""')}"`,`"${e.message.replace(/"/g,'""')}"`];t.push(o.join(","))});let e=encodeURI("data:text/csv;charset=utf-8,"+t.join("\n")),o=document.createElement("a");o.setAttribute("href",e),o.setAttribute("download",`enquiries_${new Date().toISOString().split("T")[0]}.csv`),document.body.appendChild(o),o.click(),document.body.removeChild(o),s.toast.success("CSV file exported successfully.")},style:{padding:"12px 20px",background:"#275499",border:"none",borderRadius:"12px",color:"#FFFFFF",fontSize:"14px",fontWeight:"500",cursor:"pointer",transition:"all 0.3s ease",display:"flex",alignItems:"center",gap:"8px",boxShadow:"0 4px 12px rgba(39, 84, 153, 0.3)"},onMouseEnter:t=>{t.currentTarget.style.transform="translateY(-2px)",t.currentTarget.style.boxShadow="0 6px 16px rgba(39, 84, 153, 0.4)"},onMouseLeave:t=>{t.currentTarget.style.transform="none",t.currentTarget.style.boxShadow="0 4px 12px rgba(39, 84, 153, 0.3)"},children:[(0,o.jsx)("i",{className:"fa-solid fa-download"})," Export CSV"]})]})]}),(0,o.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))",gap:"24px",marginBottom:"40px"},children:[(0,o.jsxs)("div",{style:{background:"rgba(255, 255, 255, 0.02)",backdropFilter:"blur(10px)",border:"1px solid rgba(255, 255, 255, 0.05)",borderRadius:"16px",padding:"24px",display:"flex",alignItems:"center",justifyContent:"space-between",position:"relative",overflow:"hidden"},children:[(0,o.jsx)("div",{style:{position:"absolute",bottom:0,left:0,width:"100%",height:"3px",background:"linear-gradient(90deg, #EA7925, transparent)"}}),(0,o.jsxs)("div",{children:[(0,o.jsx)("p",{style:{color:"#94A3B8",fontSize:"14px",margin:"0 0 8px 0",fontWeight:"500"},children:"Total Enquiries"}),(0,o.jsx)("h3",{style:{color:"#F8FAFC",fontSize:"32px",fontWeight:"700",margin:0},children:i.length})]}),(0,o.jsx)("div",{style:{width:"48px",height:"48px",borderRadius:"12px",background:"rgba(234, 121, 37, 0.1)",display:"flex",alignItems:"center",justifyContent:"center"},children:(0,o.jsx)("i",{className:"fa-solid fa-inbox",style:{color:"#EA7925",fontSize:"20px"}})})]}),(0,o.jsxs)("div",{style:{background:"rgba(255, 255, 255, 0.02)",backdropFilter:"blur(10px)",border:"1px solid rgba(255, 255, 255, 0.05)",borderRadius:"16px",padding:"24px",display:"flex",alignItems:"center",justifyContent:"space-between",position:"relative",overflow:"hidden"},children:[(0,o.jsx)("div",{style:{position:"absolute",bottom:0,left:0,width:"100%",height:"3px",background:"linear-gradient(90deg, #275499, transparent)"}}),(0,o.jsxs)("div",{children:[(0,o.jsx)("p",{style:{color:"#94A3B8",fontSize:"14px",margin:"0 0 8px 0",fontWeight:"500"},children:"New Today"}),(0,o.jsx)("h3",{style:{color:"#F8FAFC",fontSize:"32px",fontWeight:"700",margin:0},children:T})]}),(0,o.jsx)("div",{style:{width:"48px",height:"48px",borderRadius:"12px",background:"rgba(39, 84, 153, 0.1)",display:"flex",alignItems:"center",justifyContent:"center"},children:(0,o.jsx)("i",{className:"fa-solid fa-calendar-day",style:{color:"#3b82f6",fontSize:"20px"}})})]}),(0,o.jsxs)("div",{style:{background:"rgba(255, 255, 255, 0.02)",backdropFilter:"blur(10px)",border:"1px solid rgba(255, 255, 255, 0.05)",borderRadius:"16px",padding:"24px",display:"flex",alignItems:"center",justifyContent:"space-between",position:"relative",overflow:"hidden"},children:[(0,o.jsx)("div",{style:{position:"absolute",bottom:0,left:0,width:"100%",height:"3px",background:"linear-gradient(90deg, #10b981, transparent)"}}),(0,o.jsxs)("div",{children:[(0,o.jsx)("p",{style:{color:"#94A3B8",fontSize:"14px",margin:"0 0 8px 0",fontWeight:"500"},children:"System Status"}),(0,o.jsx)("h3",{style:{color:"#F8FAFC",fontSize:"24px",fontWeight:"700",margin:"8px 0 0 0"},children:"Online"})]}),(0,o.jsx)("div",{style:{width:"48px",height:"48px",borderRadius:"12px",background:"rgba(16, 185, 129, 0.1)",display:"flex",alignItems:"center",justifyContent:"center"},children:(0,o.jsx)("i",{className:"fa-solid fa-check-circle",style:{color:"#10b981",fontSize:"20px"}})})]})]}),(0,o.jsxs)("div",{style:{background:"rgba(255, 255, 255, 0.02)",backdropFilter:"blur(10px)",border:"1px solid rgba(255, 255, 255, 0.05)",borderRadius:"20px",overflow:"hidden",boxShadow:"0 10px 30px rgba(0, 0, 0, 0.2)"},children:[(0,o.jsx)("div",{style:{padding:"24px",borderBottom:"1px solid rgba(255, 255, 255, 0.05)"},children:(0,o.jsx)("h3",{style:{color:"#F8FAFC",fontSize:"18px",fontWeight:"600",margin:0},children:"Recent Enquiries"})}),c?(0,o.jsxs)("div",{style:{padding:"80px 0",textAlign:"center"},children:[(0,o.jsx)("div",{className:"spinner-border text-primary",role:"status",style:{width:"3rem",height:"3rem",color:"#275499"}}),(0,o.jsx)("p",{style:{marginTop:"16px",color:"#64748B"},children:"Fetching data from secure server..."})]}):0===v.length?(0,o.jsxs)("div",{style:{padding:"80px 0",textAlign:"center"},children:[(0,o.jsx)("div",{style:{width:"80px",height:"80px",background:"rgba(255, 255, 255, 0.02)",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 20px auto"},children:(0,o.jsx)("i",{className:"fa-solid fa-inbox",style:{fontSize:"32px",color:"#475569"}})}),(0,o.jsx)("h4",{style:{color:"#F1F5F9",marginBottom:"8px"},children:"No Enquiries Found"}),(0,o.jsx)("p",{style:{color:"#64748B",margin:0},children:l?"No results matched your search query.":"New contact form submissions will appear here."})]}):(0,o.jsx)("div",{style:{overflowX:"auto"},children:(0,o.jsxs)("table",{style:{width:"100%",borderCollapse:"collapse",textAlign:"left"},children:[(0,o.jsx)("thead",{children:(0,o.jsxs)("tr",{children:[(0,o.jsx)("th",{style:{padding:"16px 24px",color:"#94A3B8",fontSize:"13px",fontWeight:"600",textTransform:"uppercase",letterSpacing:"0.5px",borderBottom:"1px solid rgba(255, 255, 255, 0.05)"},children:"Customer"}),(0,o.jsx)("th",{style:{padding:"16px 24px",color:"#94A3B8",fontSize:"13px",fontWeight:"600",textTransform:"uppercase",letterSpacing:"0.5px",borderBottom:"1px solid rgba(255, 255, 255, 0.05)"},children:"Contact Info"}),(0,o.jsx)("th",{style:{padding:"16px 24px",color:"#94A3B8",fontSize:"13px",fontWeight:"600",textTransform:"uppercase",letterSpacing:"0.5px",borderBottom:"1px solid rgba(255, 255, 255, 0.05)",width:"35%"},children:"Message Excerpt"}),(0,o.jsx)("th",{style:{padding:"16px 24px",color:"#94A3B8",fontSize:"13px",fontWeight:"600",textTransform:"uppercase",letterSpacing:"0.5px",borderBottom:"1px solid rgba(255, 255, 255, 0.05)"},children:"Date"}),(0,o.jsx)("th",{style:{padding:"16px 24px",color:"#94A3B8",fontSize:"13px",fontWeight:"600",textTransform:"uppercase",letterSpacing:"0.5px",borderBottom:"1px solid rgba(255, 255, 255, 0.05)",textAlign:"right"},children:"Actions"})]})}),(0,o.jsx)("tbody",{children:v.map(t=>(0,o.jsxs)("tr",{style:{borderBottom:"1px solid rgba(255, 255, 255, 0.02)",transition:"background 0.2s ease"},onMouseEnter:t=>t.currentTarget.style.background="rgba(255, 255, 255, 0.015)",onMouseLeave:t=>t.currentTarget.style.background="transparent",children:[(0,o.jsx)("td",{style:{padding:"20px 24px"},children:(0,o.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[(0,o.jsxs)("div",{style:{width:"40px",height:"40px",borderRadius:"10px",background:"rgba(255, 255, 255, 0.05)",display:"flex",alignItems:"center",justifyContent:"center",color:"#EA7925",fontWeight:"600",fontSize:"15px"},children:[t.first_name.charAt(0),t.last_name.charAt(0)]}),(0,o.jsx)("div",{children:(0,o.jsxs)("div",{style:{color:"#F1F5F9",fontWeight:"500",fontSize:"15px"},children:[t.first_name," ",t.last_name]})})]})}),(0,o.jsx)("td",{style:{padding:"20px 24px"},children:(0,o.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"6px"},children:[(0,o.jsxs)("a",{href:`mailto:${t.email}`,style:{color:"#94A3B8",textDecoration:"none",fontSize:"14px",transition:"color 0.2s"},onMouseEnter:t=>t.currentTarget.style.color="#3b82f6",onMouseLeave:t=>t.currentTarget.style.color="#94A3B8",children:[(0,o.jsx)("i",{className:"fa-regular fa-envelope me-2",style:{color:"#64748B"}}),t.email]}),(0,o.jsxs)("a",{href:`tel:${t.phone}`,style:{color:"#94A3B8",textDecoration:"none",fontSize:"14px",transition:"color 0.2s"},onMouseEnter:t=>t.currentTarget.style.color="#3b82f6",onMouseLeave:t=>t.currentTarget.style.color="#94A3B8",children:[(0,o.jsx)("i",{className:"fa-solid fa-phone me-2",style:{color:"#64748B",fontSize:"12px"}}),t.phone]})]})}),(0,o.jsx)("td",{style:{padding:"20px 24px"},children:(0,o.jsx)("div",{style:{color:"#CBD5E1",fontSize:"14px",lineHeight:"1.5",display:"-webkit-box",WebkitLineClamp:2,WebkitBoxOrient:"vertical",overflow:"hidden"},children:t.message})}),(0,o.jsxs)("td",{style:{padding:"20px 24px"},children:[(0,o.jsx)("div",{style:{color:"#E2E8F0",fontSize:"14px",fontWeight:"500"},children:new Date(t.created_at).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"})}),(0,o.jsx)("div",{style:{color:"#64748B",fontSize:"12px",marginTop:"2px"},children:new Date(t.created_at).toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit"})})]}),(0,o.jsx)("td",{style:{padding:"20px 24px",textAlign:"right"},children:(0,o.jsx)("button",{onClick:()=>b(t.id),style:{background:"rgba(239, 68, 68, 0.1)",border:"1px solid rgba(239, 68, 68, 0.2)",color:"#EF4444",cursor:"pointer",padding:"8px 12px",borderRadius:"8px",transition:"all 0.2s"},onMouseEnter:t=>{t.currentTarget.style.background="rgba(239, 68, 68, 0.2)"},onMouseLeave:t=>{t.currentTarget.style.background="rgba(239, 68, 68, 0.1)"},title:"Delete Enquiry",children:(0,o.jsx)("i",{className:"fa-regular fa-trash-can",style:{fontSize:"14px"}})})})]},t.id))})]})})]})]})})]}):(0,o.jsx)("div",{style:{height:"100vh",display:"flex",alignItems:"center",justifyContent:"center",background:"#0F172A",color:"#FFFFFF"},children:(0,o.jsx)("div",{className:"spinner-border text-primary",role:"status"})})}])}]);