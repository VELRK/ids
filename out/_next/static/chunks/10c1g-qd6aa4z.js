(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,21318,e=>{"use strict";var t,r,a,i,n=e.i(43476),o=e.i(71645),l=e.i(57688),s=e.i(7270),c=e.i(22016),d=e.i(18566),p=e.i(58394),u=e.i(65095),f=e.i(97889);let h="carousel",m="controller",g="portal",x="toolbar",b="zoom",v="loading",w="error",y="complete",j=e=>`active-slide-${e}`;j(v),j("playing"),j(w),j(y);let N="flex_center",k="no_scroll_padding",E="slide",z="slide_wrapper",C="prev",S="next",M="swipe",P="close",I="onPointerDown",L="onPointerMove",R="onPointerUp",T="onPointerLeave",$="onPointerCancel",A="onKeyDown",W="onWheel",D="icon",O="contain",_="cover",U="Unknown action type";var F=e.i(74080);let Y="yarl__";function B(...e){return e.filter(Boolean).join(" ")}function X(e){return`${Y}${e}`}function Z(e){return`--${Y}${e}`}function H(e,t){return`${e}${t?`_${t}`:""}`}function V(e){return t=>H(e,t)}function G(e,t){var r;return null!=(r=null==e?void 0:e[t])?r:t}function K(...e){return()=>{e.forEach(e=>{e()})}}function q(e,t,r){return()=>{let a=o.useContext(r);if(!a)throw Error(`${e} must be used within a ${t}.Provider`);return a}}function J(){return"u">typeof window}function Q(e,t=0){let r=10**t;return Math.round((e+Number.EPSILON)*r)/r}function ee(e){return void 0===e.type||"image"===e.type}function et(e,t){return e.imageFit===_||e.imageFit!==O&&t===_}function er(e){return"string"==typeof e?Number.parseInt(e,10):e}function ea(e){if("number"==typeof e)return{pixel:e};if("string"==typeof e){let t=er(e);return e.endsWith("%")?{percent:t}:{pixel:t}}return{pixel:0}}function ei(e,t){return t>0?(e%t+t)%t:0}function en(e,t){return e[ei(t,e.length)]}function eo(e,t){return e.length>0?en(e,t):void 0}let el=Number(o.version.split(".")[0])>=19,es={open:!1,close:()=>{},index:0,slides:[],render:{},plugins:[],toolbar:{buttons:[P]},labels:{},animation:{fade:250,swipe:500,easing:{fade:"ease",swipe:"ease-out",navigation:"ease-in-out"}},carousel:{finite:!1,preload:2,padding:"16px",spacing:"30%",imageFit:O,imageProps:{}},controller:{ref:null,focus:!0,aria:!1,touchAction:"none",closeOnPullUp:!1,closeOnPullDown:!1,closeOnBackdropClick:!1,closeOnEscape:!0,preventDefaultWheelX:!0,preventDefaultWheelY:!1,disableSwipeNavigation:!1},portal:{},noScroll:{disabled:!1},on:{},styles:{},className:""};function ec(e,t){return{name:e,component:t}}function ed(e,t){return{module:e,children:t}}function ep(e,t,r){return e.flatMap(e=>{var a;return null!=(a=function e(t,r,a){return t.module.name===r?a(t):t.children?[ed(t.module,t.children.flatMap(t=>{var i;return null!=(i=e(t,r,a))?i:[]}))]:[t]}(e,t,r))?a:[]})}let eu=o.createContext(null),ef=q("useA11yContext","A11yContext",eu);function eh({children:e}){let[t,r]=o.useState(!1),[a,i]=o.useState(!1),n=o.useMemo(()=>({focusWithin:t,trackFocusWithin:(e,t)=>{let a=a=>i=>{var n;i.currentTarget.contains(i.relatedTarget)||r(a),null==(n=a?e:t)||n(i)};return{onFocus:a(!0),onBlur:a(!1)}},autoPlaying:a,setAutoPlaying:i}),[t,a]);return o.createElement(eu.Provider,{value:n},e)}let em=o.createContext(null),eg=q("useDocument","DocumentContext",em);function ex({nodeRef:e,children:t}){let r=o.useMemo(()=>{let t=t=>{var r;return(null==(r=t||e.current)?void 0:r.ownerDocument)||document};return{getOwnerDocument:t,getOwnerWindow:e=>{var r;return(null==(r=t(e))?void 0:r.defaultView)||window}}},[e]);return o.createElement(em.Provider,{value:r},t)}let eb=o.createContext(null),ev=q("useEvents","EventsContext",eb);function ew({children:e}){let[t]=o.useState({});o.useEffect(()=>()=>{Object.keys(t).forEach(e=>delete t[e])},[t]);let r=o.useMemo(()=>{let e=(e,r)=>{var a;null==(a=t[e])||a.splice(0,t[e].length,...t[e].filter(e=>e!==r))};return{publish:(...[e,r])=>{var a;null==(a=t[e])||a.forEach(e=>e(r))},subscribe:(r,a)=>(t[r]||(t[r]=[]),t[r].push(a),()=>e(r,a)),unsubscribe:e}},[t]);return o.createElement(eb.Provider,{value:r},e)}let ey=o.createContext(null),ej=q("useLightboxProps","LightboxPropsContext",ey);function eN({children:e,...t}){return o.createElement(ey.Provider,{value:t},e)}let ek=o.createContext(null),eE=q("useLightboxState","LightboxStateContext",ek),ez=o.createContext(null),eC=q("useLightboxDispatch","LightboxDispatchContext",ez);function eS(e,t){switch(t.type){case"swipe":{let{slides:r}=e,a=(null==t?void 0:t.increment)||0,i=e.globalIndex+a,n=ei(i,r.length),o=eo(r,n);return{slides:r,currentIndex:n,globalIndex:i,currentSlide:o,animation:a||void 0!==t.duration?{increment:a,duration:t.duration,easing:t.easing}:void 0}}case"update":if(t.slides!==e.slides||t.index!==e.currentIndex)return{slides:t.slides,currentIndex:t.index,globalIndex:t.index,currentSlide:eo(t.slides,t.index)};return e;default:throw Error(U)}}function eM({slides:e,index:t,children:r}){let[a,i]=o.useReducer(eS,{slides:e,currentIndex:t,globalIndex:t,currentSlide:eo(e,t)}),[n,l]=o.useState(e),[s,c]=o.useState(t);(e!==n||t!==s)&&(l(e),c(t),i({type:"update",slides:e,index:t}));let d=o.useMemo(()=>({...a,state:a,dispatch:i}),[a,i]);return o.createElement(ez.Provider,{value:i},o.createElement(ek.Provider,{value:d},r))}let eP=o.createContext(null),eI=q("useRTLContext","RTLContext",eP);function eL({isRTL:e,children:t}){let r=o.useMemo(()=>({isRTL:e}),[e]);return o.createElement(eP.Provider,{value:r},t)}let eR=o.createContext(null),eT=q("useTimeouts","TimeoutsContext",eR);function e$({children:e}){let[t]=o.useState([]);o.useEffect(()=>()=>{t.forEach(e=>window.clearTimeout(e)),t.splice(0,t.length)},[t]);let r=o.useMemo(()=>{let e=e=>{t.splice(0,t.length,...t.filter(t=>t!==e))};return{setTimeout:(r,a)=>{let i=window.setTimeout(()=>{e(i),r()},a);return t.push(i),i},clearTimeout:t=>{void 0!==t&&(e(t),window.clearTimeout(t))}}},[t]);return o.createElement(eR.Provider,{value:r},e)}let eA=o.forwardRef(function({label:e,className:t,icon:r,renderIcon:a,onClick:i,style:n,...l},s){let{styles:c,labels:d}=ej(),p=G(d,e);return o.createElement("button",{ref:s,type:"button",title:p,"aria-label":p,className:B(X("button"),t),onClick:i,style:{...n,...c.button},...l},a?a():o.createElement(r,{className:X(D),style:c.icon}))});function eW(e,t){var r;let a;return r=o.createElement("g",{fill:"currentColor"},o.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),t),(a=e=>o.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24","aria-hidden":"true",focusable:"false",...e},r)).displayName=e,a}let eD=eW("Close",o.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"})),eO=eW("Previous",o.createElement("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"})),e_=eW("Next",o.createElement("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"})),eU=eW("Loading",o.createElement(o.Fragment,null,Array.from({length:8}).map((e,t,r)=>o.createElement("line",{key:t,x1:"12",y1:"6.5",x2:"12",y2:"1.8",strokeLinecap:"round",strokeWidth:"2.6",stroke:"currentColor",strokeOpacity:1/r.length*(t+1),transform:`rotate(${360/r.length*t}, 12, 12)`})))),eF=eW("Error",o.createElement("path",{d:"M21.9,21.9l-8.49-8.49l0,0L3.59,3.59l0,0L2.1,2.1L0.69,3.51L3,5.83V19c0,1.1,0.9,2,2,2h13.17l2.31,2.31L21.9,21.9z M5,18 l3.5-4.5l2.5,3.01L12.17,15l3,3H5z M21,18.17L5.83,3H19c1.1,0,2,0.9,2,2V18.17z"})),eY=J()?o.useLayoutEffect:o.useEffect;function eB(){let[e,t]=o.useState(!1);return o.useEffect(()=>{var e,r;let a=null==(e=window.matchMedia)?void 0:e.call(window,"(prefers-reduced-motion: reduce)");t(null==a?void 0:a.matches);let i=e=>t(e.matches);return null==(r=null==a?void 0:a.addEventListener)||r.call(a,"change",i),()=>{var e;return null==(e=null==a?void 0:a.removeEventListener)?void 0:e.call(a,"change",i)}},[]),e}function eX(e,t){let r=o.useRef(void 0),a=o.useRef(void 0),i=eB();return eY(()=>{var n,o,l;if(e.current&&void 0!==r.current&&!i){let{keyframes:i,duration:s,easing:c,onfinish:d}=t(r.current,e.current.getBoundingClientRect(),function(e){let t=0,r=0,a=0,i=window.getComputedStyle(e).transform.match(/matrix.*\((.+)\)/);if(i){let e=i[1].split(",").map(er);6===e.length?(t=e[4],r=e[5]):16===e.length&&(t=e[12],r=e[13],a=e[14])}return{x:t,y:r,z:a}}(e.current))||{};if(i&&s){null==(n=a.current)||n.cancel(),a.current=void 0;try{a.current=null==(l=(o=e.current).animate)?void 0:l.call(o,i,{duration:s,easing:c})}catch(e){console.error(e)}a.current&&(a.current.onfinish=()=>{a.current=void 0,null==d||d()})}}r.current=void 0}),{prepareAnimation:e=>{r.current=e},isAnimationPlaying:()=>{var e;return(null==(e=a.current)?void 0:e.playState)==="running"}}}function eZ(){let e=o.useRef(null),t=o.useRef(void 0),[r,a]=o.useState();return{setContainerRef:o.useCallback(r=>{e.current=r,t.current&&(t.current.disconnect(),t.current=void 0);let i=()=>{if(r){let e=window.getComputedStyle(r);a({width:Math.round(r.clientWidth-(parseFloat(e.paddingLeft)||0)-(parseFloat(e.paddingRight)||0)),height:Math.round(r.clientHeight-(parseFloat(e.paddingTop)||0)-(parseFloat(e.paddingBottom)||0))})}else a(void 0)};i(),r&&"u">typeof ResizeObserver&&(t.current=new ResizeObserver(i),t.current.observe(r))},[]),containerRef:e,containerRect:r}}function eH(){let e=o.useRef(void 0),{setTimeout:t,clearTimeout:r}=eT();return o.useCallback((a,i)=>{r(e.current),e.current=t(a,i>0?i:0)},[t,r])}function eV(e){let t=o.useRef(e);return eY(()=>{t.current=e}),o.useCallback((...e)=>{var r;return null==(r=t.current)?void 0:r.call(t,...e)},[])}function eG(e,t){"function"==typeof e?e(t):e&&(e.current=t)}function eK(e,t){return o.useMemo(()=>null==e&&null==t?null:r=>{eG(e,r),eG(t,r)},[e,t])}function eq(){return eI().isRTL}function eJ(e,t){let r=o.useRef(0),a=eH(),i=eV((...t)=>{r.current=Date.now(),e(t)});return o.useCallback((...e)=>{a(()=>{i(e)},t-(Date.now()-r.current))},[t,i,a])}let eQ=V("slide"),e0=V("slide_image");function e1({slide:e,offset:t,render:r,rect:a,imageFit:i,imageProps:n,onClick:l,onLoad:s,onError:c,style:d}){var p,u,f,h,m,g,x,b;let[N,k]=o.useState(v),{publish:E}=ev(),{setTimeout:z}=eT(),C=o.useRef(null);o.useEffect(()=>{0===t&&E(j(N))},[t,N,E]);let S=eV(e=>{("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{e.parentNode&&(k(y),z(()=>{null==s||s(e)},0))})}),M=o.useCallback(e=>{C.current=e,(null==e?void 0:e.complete)&&S(e)},[S]),P=o.useCallback(e=>{S(e.currentTarget)},[S]),I=eV(()=>{k(w),null==c||c()}),L=et(e,i),R=(e,t)=>Number.isFinite(e)?e:t,T=R(Math.max(...(null!=(u=null==(p=e.srcSet)?void 0:p.map(e=>e.width))?u:[]).concat(e.width?[e.width]:[]).filter(Boolean)),(null==(f=C.current)?void 0:f.naturalWidth)||0),$=R(Math.max(...(null!=(m=null==(h=e.srcSet)?void 0:h.map(e=>e.height))?m:[]).concat(e.height?[e.height]:[]).filter(Boolean)),(null==(g=C.current)?void 0:g.naturalHeight)||0),A=T&&$?{maxWidth:`min(${T}px, 100%)`,maxHeight:`min(${$}px, 100%)`}:{maxWidth:"100%",maxHeight:"100%"},W=null==(x=e.srcSet)?void 0:x.slice().sort((e,t)=>e.width-t.width).map(e=>`${e.src} ${e.width}w`).join(", "),O=W&&a&&J()?`${Math.round(Math.min(a&&!L&&e.width&&e.height?a.height/e.height*e.width:Number.MAX_VALUE,a.width))}px`:void 0,{style:_,className:U,...F}=("function"==typeof n?n(e):n)||{};return o.createElement(o.Fragment,null,o.createElement("img",{ref:M,onLoad:P,onError:I,onClick:l,draggable:!1,className:B(X(e0()),L&&X(e0("cover")),N!==y&&X(e0("loading")),U),style:{...A,...d,..._},...F,alt:null!=(b=e.alt)?b:"",sizes:O,srcSet:W,src:e.src}),N!==y&&o.createElement("div",{className:X(eQ("placeholder"))},N===v&&((null==r?void 0:r.iconLoading)?r.iconLoading():o.createElement(eU,{className:B(X(D),X(eQ(v)))})),N===w&&((null==r?void 0:r.iconError)?r.iconError():o.createElement(eF,{className:B(X(D),X(eQ(w)))}))))}let e2=o.forwardRef(function({className:e,children:t,onFocus:r,onBlur:a,...i},n){let l=o.useRef(null),[s,c]=o.useState(!1),{trackFocusWithin:d}=ef(),p=eV(()=>{if(l.current){let e="rtl"===window.getComputedStyle(l.current).direction;e!==s&&c(e)}});return o.useEffect(p),o.createElement(ex,{nodeRef:l},o.createElement(eL,{isRTL:s},o.createElement("div",{ref:eK(n,l),className:B(X("root"),e),...d(r,a),...i},t)))});function e5(e,t,r,a,i){o.useEffect(()=>i?()=>{}:K(e(I,t),e(L,r),e(R,a),e(T,a),e($,a)),[e,t,r,a,i])}(t=a||(a={}))[t.NONE=0]="NONE",t[t.SWIPE=1]="SWIPE",t[t.PULL=2]="PULL",t[t.ANIMATION=3]="ANIMATION",(r=i||(i={}))[r.NONE=0]="NONE",r[r.SWIPE=1]="SWIPE",r[r.PULL=2]="PULL";let e4=V("container"),e3=o.createContext(null),e8=q("useController","ControllerContext",e3),e6=ec(m,function({children:e,...t}){var r;let{carousel:n,animation:l,controller:s,on:c,styles:d,render:p}=t,{closeOnPullUp:u,closeOnPullDown:f,preventDefaultWheelX:h,preventDefaultWheelY:m}=s,[x,b]=o.useState(),v=eE(),w=eC(),[y,j]=o.useState(a.NONE),k=o.useRef(0),D=o.useRef(0),O=o.useRef(1),{registerSensors:_,subscribeSensors:U}=function(){let[e]=o.useState({}),t=o.useCallback((t,r)=>{var a;null==(a=e[t])||a.forEach(e=>{r.isPropagationStopped()||e(r)})},[e]);return{registerSensors:o.useMemo(()=>({onPointerDown:e=>t(I,e),onPointerMove:e=>t(L,e),onPointerUp:e=>t(R,e),onPointerLeave:e=>t(T,e),onPointerCancel:e=>t($,e),onKeyDown:e=>t(A,e),onKeyUp:e=>t("onKeyUp",e),onWheel:e=>t(W,e)}),[t]),subscribeSensors:o.useCallback((t,r)=>(e[t]||(e[t]=[]),e[t].unshift(r),()=>{let a=e[t];a&&a.splice(0,a.length,...a.filter(e=>e!==r))}),[e])}}(),{subscribe:F,publish:Y}=ev(),H=eH(),V=eH(),G=eH(),{containerRef:q,setContainerRef:J,containerRect:ee}=eZ(),et=eK(function({preventDefaultWheelX:e,preventDefaultWheelY:t}){let r=o.useRef(null),a=eV(r=>{let a=Math.abs(r.deltaX)>Math.abs(r.deltaY);(a&&e||!a&&t||r.ctrlKey)&&r.preventDefault()});return o.useCallback(e=>{var t;e?e.addEventListener("wheel",a,{passive:!1}):null==(t=r.current)||t.removeEventListener("wheel",a),r.current=e},[a])}({preventDefaultWheelX:h,preventDefaultWheelY:m}),J),er=o.useRef(null),ei=eK(er,void 0),{getOwnerDocument:en}=eg(),eo=eq(),el=e=>(eo?-1:1)*("number"==typeof e?e:1),es=eV(()=>{var e;return null==(e=q.current)?void 0:e.focus()}),ec=eV(()=>t),ed=eV(()=>v),ep=o.useCallback(e=>Y(C,e),[Y]),eu=o.useCallback(e=>Y(S,e),[Y]),ef=o.useCallback(()=>Y(P),[Y]),eh=e=>!(n.finite&&(el(e)>0&&0===v.currentIndex||0>el(e)&&v.currentIndex===v.slides.length-1)),em=e=>{var t;k.current=e,null==(t=q.current)||t.style.setProperty(Z("swipe_offset"),`${Math.round(e)}px`)},ex=e=>{var t,r;D.current=e,O.current=Math.min(Math.max(Q(1-(f&&e>0?e:u&&e<0?-e:0)/60*.5,2),.5),1),null==(t=q.current)||t.style.setProperty(Z("pull_offset"),`${Math.round(e)}px`),null==(r=q.current)||r.style.setProperty(Z("pull_opacity"),`${O.current}`)},{prepareAnimation:eb}=eX(er,(e,t,r)=>{if(er.current&&ee)return{keyframes:[{transform:`translate(0, ${e.rect.y-t.y+r.y}px)`,opacity:e.opacity},{transform:"translate(0, 0)",opacity:1}],duration:e.duration,easing:l.easing.fade}}),ew=(e,t)=>{if(u||f){ex(e);let r=0;er.current&&(r=l.fade*(t?2:1),eb({rect:er.current.getBoundingClientRect(),opacity:O.current,duration:r})),G(()=>{ex(0),j(a.NONE)},r),j(a.ANIMATION),t||ef()}},{prepareAnimation:ey,isAnimationPlaying:ej}=eX(er,(e,t,r)=>{var a;if(er.current&&ee&&(null==(a=v.animation)?void 0:a.duration)){let a=ea(n.spacing),i=(a.percent?a.percent*ee.width/100:a.pixel)||0;return{keyframes:[{transform:`translate(${el(v.globalIndex-e.index)*(ee.width+i)+e.rect.x-t.x+r.x}px, 0)`},{transform:"translate(0, 0)"}],duration:v.animation.duration,easing:v.animation.easing}}}),eN=eV(e=>{var t,r;let i=e.offset||0,n=i?l.swipe:null!=(t=l.navigation)?t:l.swipe,o=i||ej()?l.easing.swipe:l.easing.navigation,{direction:s}=e,c=null!=(r=e.count)?r:1,d=a.ANIMATION,p=n*c;if(!s){let t=null==ee?void 0:ee.width,r=e.duration||0,a=t?n/t*Math.abs(i):n;0!==c?(r<a?p=p/a*Math.max(r,a/5):t&&(p=n/t*(t-Math.abs(i))),s=el(i)>0?C:S):p=n/2}let u=0;s===C?eh(el(1))?u=-c:(d=a.NONE,p=n):s===S&&(eh(el(-1))?u=c:(d=a.NONE,p=n)),V(()=>{em(0),j(a.NONE)},p=Math.round(p)),er.current&&ey({rect:er.current.getBoundingClientRect(),index:v.globalIndex}),j(d),Y(M,{type:"swipe",increment:u,duration:p,easing:o})});o.useEffect(()=>{var e,t;(null==(e=v.animation)?void 0:e.increment)&&(null==(t=v.animation)?void 0:t.duration)&&H(()=>w({type:"swipe",increment:0}),v.animation.duration)},[v.animation,w,H]);let ek=[U,eh,(null==ee?void 0:ee.width)||0,l.swipe,()=>j(a.SWIPE),e=>em(e),(e,t)=>eN({offset:e,duration:t,count:1}),e=>eN({offset:e,count:0})],ez=[()=>{f&&j(a.PULL)},e=>ex(e),e=>ew(e),e=>ew(e,!0)];!function({disableSwipeNavigation:e,closeOnBackdropClick:t},r,a,n,l,s,c,d,p,u,f,h,m,g,x,b){let v=o.useRef(0),w=o.useRef([]),y=o.useRef(void 0),j=o.useRef(0),N=o.useRef(i.NONE),k=o.useCallback(e=>{y.current===e.pointerId&&(y.current=void 0,N.current=i.NONE);let t=w.current;t.splice(0,t.length,...t.filter(t=>t.pointerId!==e.pointerId))},[]),C=o.useCallback(e=>{k(e),e.persist(),w.current.push(e)},[k]),S=o.useCallback(e=>w.current.find(({pointerId:t})=>e.pointerId===t),[]),M=eV(e=>{C(e)}),P=(e,t)=>f&&e>t||u&&e<-t,I=eV(e=>{let r=S(e);if(r)if(y.current===e.pointerId){let e=Date.now()-j.current,t=v.current;N.current===i.SWIPE?Math.abs(t)>.3*n||Math.abs(t)>5&&e<l?d(t,e):p(t):N.current===i.PULL&&(P(t,60)?g(t,e):x(t)),v.current=0,N.current=i.NONE}else{let{target:a}=e;t&&a instanceof HTMLElement&&a===r.target&&(a.classList.contains(X(E))||a.classList.contains(X(z)))&&b()}k(e)});e5(r,M,eV(t=>{let r=S(t);if(r){let n=y.current===t.pointerId;if(0===t.buttons)return void(n&&0!==v.current?I(t):k(r));let o=t.clientX-r.clientX,l=t.clientY-r.clientY;if(void 0===y.current){let r=e=>{C(t),y.current=t.pointerId,j.current=Date.now(),N.current=e};Math.abs(o)>Math.abs(l)&&Math.abs(o)>30&&a(o)?e||(r(i.SWIPE),s()):Math.abs(l)>Math.abs(o)&&P(l,30)&&(r(i.PULL),h())}else n&&(N.current===i.SWIPE?(v.current=o,c(o)):N.current===i.PULL&&(v.current=l,m(l)))}}),I)}(s,...ek,u,f,...ez,ef),function(e,t,r,i,n,l,s,c,d){let p=o.useRef(0),u=o.useRef(0),f=o.useRef(void 0),h=o.useRef(void 0),m=o.useRef(0),g=o.useRef(void 0),x=o.useRef(0),{setTimeout:b,clearTimeout:v}=eT(),w=o.useCallback(()=>{f.current&&(v(f.current),f.current=void 0)},[v]),y=o.useCallback(()=>{h.current&&(v(h.current),h.current=void 0)},[v]),j=eV(()=>{e!==a.SWIPE&&(p.current=0,x.current=0,w(),y())});o.useEffect(j,[e,j]);let N=eV(e=>{h.current=void 0,p.current===e&&d(p.current)}),k=eV(t=>{if(t.ctrlKey||Math.abs(t.deltaY)>Math.abs(t.deltaX))return;let o=e=>{m.current=e,v(g.current),g.current=e>0?b(()=>{m.current=0,g.current=void 0},300):void 0};if(e===a.NONE){if(Math.abs(t.deltaX)<=1.2*Math.abs(m.current))return void o(t.deltaX);if(!r(-t.deltaX))return;if(u.current+=t.deltaX,w(),Math.abs(u.current)>30)u.current=0,o(0),x.current=Date.now(),l();else{let e=u.current;f.current=b(()=>{f.current=void 0,e===u.current&&(u.current=0)},n)}}else if(e===a.SWIPE){let e=p.current-t.deltaX;if(p.current=e=Math.min(Math.abs(e),i)*Math.sign(e),s(e),y(),Math.abs(e)>.2*i){o(t.deltaX),c(e,Date.now()-x.current);return}h.current=b(()=>N(e),2*n)}else o(t.deltaX)});o.useEffect(()=>t(W,k),[t,k])}(y,...ek);let eS=eV(()=>{s.focus&&en().querySelector(`.${X(g)} .${X(e4())}`)&&es()});o.useEffect(eS,[eS]);let eM=eV(()=>{var e;null==(e=c.view)||e.call(c,{index:v.currentIndex})});o.useEffect(eM,[v.globalIndex,eM]),o.useEffect(()=>K(F(C,e=>eN({direction:C,...e})),F(S,e=>eN({direction:S,...e})),F(M,e=>w(e))),[F,eN,w]);let eP=o.useMemo(()=>{let e,t;return{prev:ep,next:eu,close:ef,focus:es,slideRect:ee?(t=void 0!==(e=ea(n.padding)).percent?ee.width/100*e.percent:e.pixel,{width:Math.max(ee.width-2*t,0),height:Math.max(ee.height-2*t,0)}):{width:0,height:0},containerRect:ee||{width:0,height:0},subscribeSensors:U,containerRef:q,setCarouselRef:ei,toolbarWidth:x,setToolbarWidth:b}},[ep,eu,ef,es,U,ee,q,ei,x,b,n.padding]);return o.useImperativeHandle(s.ref,()=>({prev:ep,next:eu,close:ef,focus:es,getLightboxProps:ec,getLightboxState:ed}),[ep,eu,ef,es,ec,ed]),o.createElement("div",{ref:et,className:B(X(e4()),X(N)),style:{...y===a.SWIPE?{[Z("swipe_offset")]:`${Math.round(k.current)}px`}:null,...y===a.PULL?{[Z("pull_offset")]:`${Math.round(D.current)}px`,[Z("pull_opacity")]:`${O.current}`}:null,..."none"!==s.touchAction?{[Z("controller_touch_action")]:s.touchAction}:null,...d.container},tabIndex:-1,..._},ee&&o.createElement(e3.Provider,{value:eP},e,null==(r=p.controls)?void 0:r.call(p)))});function e9({slide:e,offset:t}){var r,a,i,n,l;let s,c=o.useRef(null),{currentIndex:d,slides:p}=eE(),{slideRect:u,focus:f}=e8(),{render:h,carousel:{imageFit:m,imageProps:g},on:{click:x},styles:{slide:b},labels:v}=ej(),{getOwnerDocument:w}=eg(),y=0!==t;return o.useEffect(()=>{var e;y&&(null==(e=c.current)?void 0:e.contains(w().activeElement))&&f()},[y,f,w]),o.createElement("div",{ref:c,className:B(X(H(E,void 0)),!y&&X(H(E,"current")),X(N)),...{inert:el?y:y?"":void 0},style:b,role:"group","aria-roledescription":G(v,"Slide"),"aria-label":(r=d+t,G(v,"{index} of {total}").replace(/\{index}/g,`${ei(r,p.length)+1}`).replace(/\{total}/g,`${p.length}`))},(!(s=null==(a=h.slide)?void 0:a.call(h,{slide:e,offset:t,rect:u}))&&ee(e)&&(s=o.createElement(e1,{slide:e,offset:t,render:h,rect:u,imageFit:m,imageProps:g,onClick:y?void 0:()=>null==x?void 0:x({index:d})})),s?o.createElement(o.Fragment,null,null==(i=h.slideHeader)?void 0:i.call(h,{slide:e}),(null!=(n=h.slideContainer)?n:({children:e})=>e)({slide:e,children:s}),null==(l=h.slideFooter)?void 0:l.call(h,{slide:e})):null))}function e7(){let e=ej().styles.slide;return o.createElement("div",{className:X(E),style:e})}let te=ec(h,function({carousel:e,labels:t}){let{slides:r,currentIndex:a,globalIndex:i}=eE(),{setCarouselRef:n}=e8(),{autoPlaying:l,focusWithin:s}=ef(),c=ea(e.spacing),d=ea(e.padding),p=function(e,t,r=0){return Math.min(e.preload,Math.max(e.finite?t.length-1:Math.floor(t.length/2),r))}(e,r,1),u=[];if(r.length>0)for(let t=a-p;t<=a+p;t+=1){let n=en(r,t),o=i-a+t,l=e.finite&&(t<0||t>r.length-1);u.push(l?{key:o}:{key:[`${o}`,ee(n)?n.src:void 0].filter(Boolean).join("|"),offset:t-a,slide:n})}return o.createElement("div",{ref:n,className:B(X(H(h,void 0)),u.length>0&&X(H(h,"with_slides"))),style:{[`${Z(H(h,"slides_count"))}`]:u.length,[`${Z(H(h,"spacing_px"))}`]:c.pixel||0,[`${Z(H(h,"spacing_percent"))}`]:c.percent||0,[`${Z(H(h,"padding_px"))}`]:d.pixel||0,[`${Z(H(h,"padding_percent"))}`]:d.percent||0},role:"region","aria-live":l&&!s?"off":"polite","aria-roledescription":G(t,"Carousel"),"aria-label":G(t,"Photo gallery")},u.map(({key:e,slide:t,offset:r})=>t?o.createElement(e9,{key:e,slide:t,offset:r}):o.createElement(e7,{key:e})))});function tt(){let{carousel:e}=ej(),{slides:t,currentIndex:r}=eE();return{prevDisabled:0===t.length||e.finite&&0===r,nextDisabled:0===t.length||e.finite&&r===t.length-1}}function tr({label:e,icon:t,renderIcon:r,action:a,onClick:i,disabled:n,style:l}){return o.createElement(eA,{label:e,icon:t,renderIcon:r,className:X(`navigation_${a}`),disabled:n,onClick:i,style:l,...function(e,t=!1){let r=o.useRef(!1);return eY(()=>{t&&r.current&&(r.current=!1,e())},[t,e]),{onFocus:o.useCallback(()=>{r.current=!0},[]),onBlur:o.useCallback(()=>{r.current=!1},[])}}(e8().focus,n)})}let ta=ec("navigation",function({render:{buttonPrev:e,buttonNext:t,iconPrev:r,iconNext:a},styles:i}){let{prev:n,next:l,subscribeSensors:s}=e8(),{prevDisabled:c,nextDisabled:d}=tt();return!function(e){var t;let r=eq(),{publish:a}=ev(),{animation:i,controller:n}=ej(),{prevDisabled:l,nextDisabled:s}=tt(),c=(null!=(t=i.navigation)?t:i.swipe)/2,d=eJ(()=>a(C),c),p=eJ(()=>a(S),c),u=eV(e=>{switch(e.key){case"Escape":if(!n.closeOnEscape)return;a(P);break;case"ArrowLeft":(r?s:l)||(r?p:d)();break;case"ArrowRight":(r?l:s)||(r?d:p)();break;default:return}e.stopPropagation()});o.useEffect(()=>e(A,u),[e,u])}(s),o.createElement(o.Fragment,null,e?e():o.createElement(tr,{label:"Previous",action:C,icon:eO,renderIcon:r,style:i.navigationPrev,disabled:c,onClick:n}),t?t():o.createElement(tr,{label:"Next",action:S,icon:e_,renderIcon:a,style:i.navigationNext,disabled:d,onClick:l}))}),ti=X("no_scroll"),tn=X(k);function to(e,t,r){let a=window.getComputedStyle(e),i=r?"padding-left":"padding-right",n=r?a.paddingLeft:a.paddingRight,o=e.style.getPropertyValue(i);return e.style.setProperty(i,`${(er(n)||0)+t}px`),()=>{o?e.style.setProperty(i,o):e.style.removeProperty(i)}}let tl=ec("no-scroll",function({noScroll:{disabled:e},children:t}){let r=eq(),{getOwnerDocument:a,getOwnerWindow:i}=eg();return o.useEffect(()=>{if(e)return()=>{};let t=[],n=i(),{body:o,documentElement:l}=a(),s=Math.round(n.innerWidth-l.clientWidth);if(s>0){t.push(to(o,s,r));let e=o.getElementsByTagName("*");for(let a=0;a<e.length;a+=1){let i=e[a];"style"in i&&"fixed"===n.getComputedStyle(i).getPropertyValue("position")&&!i.classList.contains(tn)&&t.push(to(i,s,r))}}return o.classList.add(ti),()=>{o.classList.remove(ti),t.forEach(e=>e())}},[r,e,a,i]),o.createElement(o.Fragment,null,t)});function ts(e,t,r){let a=e.getAttribute(t);return e.setAttribute(t,r),()=>{a?e.setAttribute(t,a):e.removeAttribute(t)}}let tc=ec(g,function({portal:{root:e,container:{className:t,style:r,...a}={}},animation:i,styles:n,className:l,on:s,close:c,labels:d,children:p}){let[u,f]=o.useState(!1),[h,m]=o.useState(!1),x=o.useRef([]),b=o.useRef(null),{setTimeout:v}=eT(),{subscribe:w}=ev(),y=eB()?0:i.fade;o.useEffect(()=>(f(!0),()=>{f(!1),m(!1)}),[]);let j=eV(()=>{x.current.forEach(e=>e()),x.current=[]}),N=eV(()=>{var e;m(!1),j(),null==(e=s.exiting)||e.call(s),v(()=>{var e;null==(e=s.exited)||e.call(s),c()},y)});o.useEffect(()=>w(P,N),[w,N]);let E=eV(e=>{var t,r,a;e.scrollTop,m(!0),null==(t=s.entering)||t.call(s);let i=null!=(a=null==(r=e.parentNode)?void 0:r.children)?a:[];for(let t=0;t<i.length;t+=1){let r=i[t];-1===["TEMPLATE","SCRIPT","STYLE"].indexOf(r.tagName)&&r!==e&&(x.current.push(ts(r,"inert","")),x.current.push(ts(r,"aria-hidden","true")))}x.current.push(()=>{var e,t;null==(t=null==(e=b.current)?void 0:e.focus)||t.call(e)}),v(()=>{var e;null==(e=s.entered)||e.call(s)},y)}),z=o.useCallback(e=>{e?E(e):j()},[E,j]);return u?(0,F.createPortal)(o.createElement(e2,{ref:z,className:B(l,t,X(H(g,void 0)),X(k),h&&X(H(g,"open"))),"aria-modal":!0,role:"dialog","aria-label":G(d,"Lightbox"),style:{...i.fade!==es.animation.fade?{[Z("fade_animation_duration")]:`${y}ms`}:null,...i.easing.fade!==es.animation.easing.fade?{[Z("fade_animation_timing_function")]:i.easing.fade}:null,...n.root,...r},onFocus:e=>{b.current||(b.current=e.relatedTarget)},...a},p),("function"==typeof e?e():e)||document.body):null}),td=ec("root",function({children:e}){return o.createElement(o.Fragment,null,e)}),tp=ec(x,function({toolbar:{buttons:e},render:{buttonClose:t,iconClose:r},styles:a}){let{close:i,setToolbarWidth:n}=e8(),{setContainerRef:l,containerRect:s}=eZ();return eY(()=>{n(null==s?void 0:s.width)},[n,null==s?void 0:s.width]),o.createElement("div",{ref:l,style:a.toolbar,className:X(H(x,void 0))},null==e?void 0:e.map(e=>e===P?t?t():o.createElement(eA,{key:P,label:"Close",icon:eD,renderIcon:r,onClick:i}):e))});function tu({carousel:e,animation:t,render:r,toolbar:a,controller:i,noScroll:n,on:l,plugins:s,slides:c,index:d,...p}){let{animation:u,carousel:f,render:h,toolbar:g,controller:x,noScroll:b,on:v,slides:w,index:y,plugins:j,...N}=es,{config:k,augmentation:E}=function(e,t=[],r=[]){let a=e,i=e=>{let t=[...a];for(;t.length>0;){let r=t.pop();if((null==r?void 0:r.module.name)===e)return!0;(null==r?void 0:r.children)&&t.push(...r.children)}return!1},n=(e,t)=>{if(""===e){a=[ed(t,a)];return}a=ep(a,e,e=>[ed(t,[e])])},o=(e,t)=>{a=ep(a,e,e=>[ed(e.module,[ed(t,e.children)])])},l=(e,t,r)=>{a=ep(a,e,e=>{var a;return[ed(e.module,[...r?[ed(t)]:[],...null!=(a=e.children)?a:[],...r?[]:[ed(t)]])]})},s=(e,t,r)=>{a=ep(a,e,e=>[...r?[ed(t)]:[],e,...r?[]:[ed(t)]])},c=e=>{o(m,e)},d=(e,t)=>{a=ep(a,e,e=>[ed(t,e.children)])},p=e=>{a=ep(a,e,e=>e.children)},u=e=>{r.push(e)};return t.forEach(e=>{e({contains:i,addParent:n,append:o,addChild:l,addSibling:s,addModule:c,replace:d,remove:p,augment:u})}),{config:a,augmentation:e=>r.reduce((e,t)=>t(e),e)}}([ed(tc,[ed(tl,[ed(e6,[ed(te),ed(tp),ed(ta)])])])],s||j),z=E({animation:function(e,t={}){let{easing:r,...a}=e,{easing:i,...n}=t;return{easing:{...r,...i},...a,...n}}(u,t),carousel:{...f,...e},render:{...h,...r},toolbar:{...g,...a},controller:{...x,...i},noScroll:{...b,...n},on:{...v,...l},...N,...p});return z.open?o.createElement(eN,{...z},o.createElement(eM,{slides:c||w,index:er(d||y)},o.createElement(e$,null,o.createElement(ew,null,o.createElement(eh,null,function e(t,r){var a;return o.createElement(t.module.component,{key:t.module.name,...r},null==(a=t.children)?void 0:a.map(t=>e(t,r)))}(ed(td,k),z)))))):null}let tf={minZoom:1,maxZoomPixelRatio:1,zoomInMultiplier:2,doubleTapDelay:300,doubleClickDelay:500,doubleClickMaxStops:2,keyboardMoveDistance:50,wheelZoomDistanceFactor:100,pinchZoomDistanceFactor:100,pinchZoomV4:!1,scrollToZoom:!1,maxZoom:8};function th(e){let{minZoom:t,...r}={...tf,...e};return{minZoom:Math.min(Math.max(t,Number.EPSILON),1),...r}}function tm(){let{zoom:e}=ej();return th(e)}function tg(e,t){return Math.hypot(e.clientX-t.clientX,e.clientY-t.clientY)}function tx(e,t,r=100,a=2){return e*Math.min(1+Math.abs(t/r),a)**Math.sign(t)}let tb=o.createContext(null),tv=q("useZoom","ZoomControllerContext",tb);function tw({children:e}){let[t,r]=o.useState(),{slideRect:a}=e8(),{ref:i,minZoom:n}=tm(),{imageRect:l,maxZoom:s}=function(e,t){var r,a,i;let n={width:0,height:0},o={width:0,height:0},{currentSlide:l}=eE(),{imageFit:s}=ej().carousel,{maxZoomPixelRatio:c,maxZoom:d}=tm();if(e&&l){let i={...l,...t};if(ee(i)){let t=et(i,s),l=Math.max(...((null==(r=i.srcSet)?void 0:r.map(e=>e.width))||[]).concat(i.width?[i.width]:[])),d=Math.max(...((null==(a=i.srcSet)?void 0:a.map(e=>e.height))||[]).concat(i.height?[i.height]:[]));l>0&&d>0&&e.width>0&&e.height>0&&(o={width:(o=t?{width:Math.round(Math.min(l,e.width/e.height*d)),height:Math.round(Math.min(d,e.height/e.width*l))}:{width:l,height:d}).width*c,height:o.height*c},n=t?{width:Math.min(e.width,o.width,l),height:Math.min(e.height,o.height,d)}:{width:Math.round(Math.min(e.width,e.height/d*l,l)),height:Math.round(Math.min(e.height,e.width/l*d,d))})}else e.width>0&&e.height>0&&(n=t&&t.width>0&&t.height>0?{width:Math.min(e.width,t.width),height:Math.min(e.height,t.height)}:{width:e.width,height:e.height})}let p=l&&n.width?ee(l)?Math.max(Q(o.width/n.width,5),1):Math.max("function"==typeof d?null!=(i=d(l))?i:tf.maxZoom:d,1):1;return{imageRect:n,maxZoom:p}}(a,null==t?void 0:t.imageDimensions),{zoom:c,offsetX:d,offsetY:p,disabled:u,changeZoom:f,changeOffsets:h,zoomIn:m,zoomOut:g}=function(e,t,r){let[a,i]=o.useState(1),[n,l]=o.useState(0),[s,c]=o.useState(0),d=function(e,t,r,a){let i=o.useRef(void 0),n=o.useRef(void 0),{zoom:l}=ej().animation,s=eB(),c=eV(()=>{var o,c,d;if(null==(o=i.current)||o.cancel(),i.current=void 0,n.current&&(null==a?void 0:a.current)){try{i.current=null==(d=(c=a.current).animate)?void 0:d.call(c,[{transform:n.current},{transform:`scale(${e}) translateX(${t}px) translateY(${r}px)`}],{duration:s?0:null!=l?l:500,easing:i.current?"ease-out":"ease-in-out"})}catch(e){console.error(e)}n.current=void 0,i.current&&(i.current.onfinish=()=>{i.current=void 0})}});return eY(c,[e,t,r,c]),o.useCallback(()=>{n.current=(null==a?void 0:a.current)?window.getComputedStyle(a.current).transform:void 0},[a])}(a,n,s,r),{currentSlide:p,globalIndex:u}=eE(),{containerRect:f,slideRect:h}=e8(),{minZoom:m,zoomInMultiplier:g}=tm(),x=p&&ee(p)?p.src:void 0,b=!(null==r?void 0:r.current);eY(()=>{i(1),l(0),c(0)},[u,x]);let v=o.useCallback((t,r,i)=>{let o=i||a,d=n-(t||0),p=s-(r||0),u=(e.width*o-h.width)/2/o,f=(e.height*o-h.height)/2/o;l(Math.min(Math.abs(d),Math.max(u,0))*Math.sign(d)),c(Math.min(Math.abs(p),Math.max(f,0))*Math.sign(p))},[a,n,s,h,e.width,e.height]),w=o.useCallback((e,r,n,o)=>{let l=Q(e+.01<t?e-.01>m?e:m:t,5);r||d(),v(n?n*(1/a-1/l):0,o?o*(1/a-1/l):0,l),i(l)},[a,m,t,v,d]),y=eV(()=>{a>1&&(a>t&&w(t,!0),v())});eY(y,[f.width,f.height,y]);let j=o.useCallback(()=>{let e=a*g;w(a<1&&e>1?1:e)},[a,g,w]),N=o.useCallback(()=>{let e=a/g;w(a>1&&e<1?1:e)},[a,g,w]);return{zoom:a,offsetX:n,offsetY:s,disabled:b,changeOffsets:v,changeZoom:w,zoomIn:j,zoomOut:N}}(l,s,null==t?void 0:t.zoomWrapperRef);!function(e,t){let{on:r}=ej(),a=eV(()=>{var a;t||null==(a=r.zoom)||a.call(r,{zoom:e})});o.useEffect(a,[e,a])}(c,u),function(e,t,r,a,i,n,l,s,c){let d=o.useRef([]),p=o.useRef(0),u=o.useRef(void 0),{globalIndex:f}=eE(),{getOwnerWindow:h}=eg(),{containerRef:m,subscribeSensors:g}=e8(),{keyboardMoveDistance:x,zoomInMultiplier:b,wheelZoomDistanceFactor:v,scrollToZoom:w,doubleTapDelay:y,doubleClickDelay:j,doubleClickMaxStops:N,pinchZoomDistanceFactor:k,pinchZoomV4:E}=tm(),z=o.useCallback(e=>{if(m.current){let{pageX:t,pageY:r}=e,{scrollX:a,scrollY:i}=h(),{left:n,top:o,width:l,height:s}=m.current.getBoundingClientRect();return[t-n-a-l/2,r-o-i-s/2]}return[]},[m,h]),C=eV(t=>{let{key:r,metaKey:a,ctrlKey:o}=t,c=a||o,d=()=>{t.preventDefault(),t.stopPropagation()};if(e>1){let e=(e,t)=>{d(),s(e,t)};"ArrowDown"===r?e(0,x):"ArrowUp"===r?e(0,-x):"ArrowLeft"===r?e(-x,0):"ArrowRight"===r&&e(x,0)}"+"===r||c&&"="===r?(d(),i()):"-"===r||c&&"_"===r?(d(),n()):c&&"0"===r&&(d(),l(1))}),S=eV(t=>{if((t.ctrlKey||w)&&Math.abs(t.deltaY)>Math.abs(t.deltaX)){t.stopPropagation(),l(tx(e,-t.deltaY,v),!0,...z(t));return}e>1&&(t.stopPropagation(),w||s(t.deltaX,t.deltaY))}),M=o.useCallback(e=>{let t=d.current;t.splice(0,t.length,...t.filter(t=>t.pointerId!==e.pointerId))},[]),P=o.useCallback(e=>{M(e),e.persist(),d.current.push(e)},[M]),I=eV(a=>{var i;let n=d.current;if("mouse"===a.pointerType&&a.buttons>1||!(null==(i=null==c?void 0:c.current)?void 0:i.contains(a.target)))return;e>1&&a.stopPropagation();let{timeStamp:o}=a;if(0===n.length&&o-p.current<("touch"===a.pointerType?y:j)?(p.current=0,l(e>=1?e!==r?e*Math.max(r**(1/N),b):1:e!==t?e/Math.max(t**(-1/N),b):1,!1,...z(a))):p.current=o,P(a),2===n.length){let t=tg(n[0],n[1]);u.current={previousDistance:t,initialDistance:Math.max(t,1),initialZoom:e}}}),L=eV(t=>{let r=d.current,a=r.find(e=>e.pointerId===t.pointerId);if(2===r.length&&u.current){t.stopPropagation(),P(t);let a=tg(r[0],r[1]);l(E?u.current.initialZoom/u.current.initialDistance*a:tx(e,a-u.current.previousDistance,k),!0,...r.map(e=>z(e)).reduce((e,t)=>t.map((t,r)=>e[r]+t/2))),u.current.previousDistance=a;return}e>1&&(t.stopPropagation(),a&&(1===r.length&&s((a.clientX-t.clientX)/e,(a.clientY-t.clientY)/e),P(t)))}),R=o.useCallback(e=>{let t=d.current;2===t.length&&t.find(t=>t.pointerId===e.pointerId)&&(u.current=void 0),M(e)},[M]),T=o.useCallback(()=>{let e=d.current;e.splice(0,e.length),p.current=0,u.current=void 0},[]);e5(g,I,L,R,a),o.useEffect(T,[f,T]),o.useEffect(()=>a?()=>{}:K(T,g(A,C),g(W,S)),[a,g,T,C,S])}(c,n,s,u,m,g,f,h,null==t?void 0:t.zoomWrapperRef);let x=o.useMemo(()=>({zoom:c,minZoom:n,maxZoom:s,offsetX:d,offsetY:p,disabled:u,zoomIn:m,zoomOut:g,changeZoom:f}),[c,n,s,d,p,u,m,g,f]);o.useImperativeHandle(i,()=>x,[x]);let b=o.useMemo(()=>({...x,setZoomWrapper:r}),[x,r]);return o.createElement(tb.Provider,{value:b},e)}let ty=eW("ZoomIn",o.createElement(o.Fragment,null,o.createElement("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),o.createElement("path",{d:"M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z"}))),tj=eW("ZoomOut",o.createElement("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14zM7 9h5v1H7z"})),tN=o.forwardRef(function({zoomIn:e,onLoseFocus:t},r){let a=o.useRef(!1),i=o.useRef(!1),{zoom:n,minZoom:l,maxZoom:s,zoomIn:c,zoomOut:d,disabled:p}=tv(),{render:u}=ej(),f=p||(e?n>=s:n<=l);return o.useEffect(()=>{f&&a.current&&i.current&&t(),f||(a.current=!0)},[f,t]),o.createElement(eA,{ref:r,disabled:f,label:e?"Zoom in":"Zoom out",icon:e?ty:tj,renderIcon:e?u.iconZoomIn:u.iconZoomOut,onClick:e?c:d,onFocus:()=>{i.current=!0},onBlur:()=>{i.current=!1}})});function tk(){let e=o.useRef(null),t=o.useRef(null),{focus:r}=e8(),a=o.useCallback(e=>{var t,a;(null==(t=e.current)?void 0:t.disabled)?r():null==(a=e.current)||a.focus()},[r]),i=o.useCallback(()=>a(e),[a]),n=o.useCallback(()=>a(t),[a]);return o.createElement(o.Fragment,null,o.createElement(tN,{zoomIn:!0,ref:e,onLoseFocus:n}),o.createElement(tN,{ref:t,onLoseFocus:i}))}function tE(){let{render:e}=ej(),t=tv();return e.buttonZoom?o.createElement(o.Fragment,null,e.buttonZoom(t)):o.createElement(tk,null)}function tz({current:e,preload:t},{type:r,source:a}){switch(r){case"fetch":if(!e)return{current:a};return{current:e,preload:a};case"done":if(a===t)return{current:a};return{current:e,preload:t};default:throw Error(U)}}function tC(e){var t,r;let[{current:a,preload:i},n]=o.useReducer(tz,{}),{slide:l,rect:s,imageFit:c,render:d,interactive:p}=e,u=l.srcSet.sort((e,t)=>e.width-t.width),f=null!=(t=l.width)?t:u[u.length-1].width,h=null!=(r=l.height)?r:u[u.length-1].height,m=et(l,c),g=Math.max(...u.map(e=>e.width)),x=Math.min((m?Math.max:Math.min)(s.width,f*(s.height/h)),g),b=(J()?null==window?void 0:window.devicePixelRatio:void 0)||1,v=eV(()=>{var e;let t=null!=(e=u.find(e=>e.width>=x*b))?e:u[u.length-1];(!a||u.findIndex(e=>e.src===a)<u.findIndex(e=>e===t))&&n({type:"fetch",source:t.src})});eY(v,[s.width,s.height,b,v]);let w=eV(e=>n({type:"done",source:e})),y={WebkitTransform:p?"initial":"translateZ(0)"};return m||Object.assign(y,s.width/s.height<f/h?{width:"100%",height:"auto"}:{width:"auto",height:"100%"}),o.createElement(o.Fragment,null,i&&i!==a&&o.createElement(e1,{key:"preload",...e,offset:void 0,slide:{...l,src:i,srcSet:void 0},style:{position:"absolute",visibility:"hidden",...y},onLoad:()=>w(i),render:{...d,iconLoading:()=>null,iconError:()=>null}}),a&&o.createElement(e1,{key:"current",...e,slide:{...l,src:a,srcSet:void 0},style:y}))}function tS({render:e,slide:t,offset:r,rect:a}){var i,n;let[l,s]=o.useState(),c=o.useRef(null),d=ee(t),{zoom:p,maxZoom:u,offsetX:f,offsetY:h,setZoomWrapper:m}=tv(),g=p>1,{carousel:x,on:b}=ej(),{currentIndex:v}=eE();eY(()=>{if(0!==r||d||!c.current)return()=>{};let e=()=>{let e=c.current;if(!e)return;let t=0,r=0;for(let a of e.children)a instanceof HTMLElement&&(t=Math.max(t,a.offsetWidth),r=Math.max(r,a.offsetHeight));s(e=>e&&e.width===t&&e.height===r?e:{width:t,height:r})};if(e(),"u"<typeof ResizeObserver)return()=>{};let t=new ResizeObserver(e);for(let e of c.current.children)t.observe(e);return()=>t.disconnect()},[r,d,a]),eY(()=>0===r?(m({zoomWrapperRef:c,imageDimensions:l}),()=>m(void 0)):()=>{},[r,l,m]);let w=null==(i=e.slide)?void 0:i.call(e,{slide:t,offset:r,rect:a,zoom:p,maxZoom:u});if(!w&&d){let i={slide:t,offset:r,rect:a,render:e,imageFit:x.imageFit,imageProps:x.imageProps,onClick:0===r?()=>{var e;return null==(e=b.click)?void 0:e.call(b,{index:v})}:void 0};w=((null==(n=t.srcSet)?void 0:n.length)||0)>0?o.createElement(tC,{...i,slide:t,interactive:g,rect:0===r?{width:a.width*p,height:a.height*p}:a}):o.createElement(e1,{onLoad:e=>s({width:e.naturalWidth,height:e.naturalHeight}),...i})}return w?o.createElement("div",{ref:c,className:B(X("fullsize"),X(N),X(z),g&&X("slide_wrapper_interactive")),style:0===r?{transform:`scale(${p}) translateX(${f}px) translateY(${h}px)`}:void 0},w):null}let tM=({augment:e,addModule:t})=>{e(({zoom:e,toolbar:t,render:r,controller:a,...i})=>{let n=th(e);return{zoom:n,toolbar:function(e,t,r){if(!r)return e;let{buttons:a,...i}=e,n=a.findIndex(e=>e===t),l=o.isValidElement(r)?o.cloneElement(r,{key:t},null):r;if(n>=0){let e=[...a];return e.splice(n,1,l),{buttons:e,...i}}return{buttons:[l,...a],...i}}(t,b,o.createElement(tE,null)),render:{...r,slide:e=>{var t,a;return ee(e.slide)||null!=e.slide.type&&(null==(t=n.supports)?void 0:t.includes(e.slide.type))?o.createElement(tS,{render:r,...e}):null==(a=r.slide)?void 0:a.call(r,e)}},controller:{...a,preventDefaultWheelY:n.scrollToZoom},...i}}),t(ec(b,tw))},tP=({project:e,prevId:t,nextId:r})=>{let a=u.clientCompaniesWork.some(t=>t.id===e.client)?e.client:"make-my-homes",[i,s]=(0,o.useState)(a),d=u.clientCompaniesWork.find(e=>e.id===a)||u.clientCompaniesWork[0],[p,h]=(0,o.useState)((d.images||[]).length>0?"images":(d.videos||[]).length>0?"videos":"brochures"),[m,g]=(0,o.useState)(null),[x,b]=(0,o.useState)(""),[v,w]=(0,o.useState)(-1),[y,j]=(0,o.useState)(null),[N,k]=(0,o.useState)(!1);(0,o.useEffect)(()=>{k(!0)},[]),(0,o.useEffect)(()=>(m||v>=0?document.body.style.overflow="hidden":document.body.style.overflow="",()=>{document.body.style.overflow=""}),[m,v]);let E=u.clientCompaniesWork.find(e=>e.id===i)||u.clientCompaniesWork[0],z=E.videos||[],C=E.images||[],S=E.brochures||[];return(0,n.jsxs)("section",{className:"client-showcase-section fix section-padding",children:[(0,n.jsxs)("div",{className:"container",children:[(0,n.jsxs)("div",{className:"showcase-hero text-center mb-5 wow fadeInUp","data-wow-delay":".2s",children:[(0,n.jsxs)("span",{className:"showcase-badge mb-3",children:[(0,n.jsx)("i",{className:"fa-solid fa-bullhorn me-1"}),e.category[0]," Project"]}),(0,n.jsxs)("h1",{className:"showcase-hero-title mb-3",children:["Client ",(0,n.jsx)("span",{className:"highlight-gradient",children:"Deliverables Hub"})]}),(0,n.jsx)("p",{className:"showcase-hero-desc mx-auto",children:"Explore the actual websites, mobile apps, social media ads, brochures, graphic designs, and video reels we created for our clients. Click on any brand below to see our work."})]}),(0,n.jsxs)("div",{className:"active-company-card mb-5 wow fadeInUp","data-wow-delay":".4s",children:[(0,n.jsx)("div",{className:"row g-4 mb-4",children:(0,n.jsxs)("div",{className:"col-lg-12",children:[(0,n.jsxs)("div",{className:"company-header d-flex align-items-center gap-3 mb-3",children:[(0,n.jsx)("div",{className:"company-logo-badge",children:(0,n.jsx)(l.default,{src:E.logo,alt:E.name,className:"company-logo-main",width:64,height:64})}),(0,n.jsxs)("div",{children:[(0,n.jsx)("h2",{className:"company-main-title",children:E.name}),(0,n.jsx)("span",{className:"company-tagline",children:E.tagline})]})]}),(0,n.jsx)("p",{className:"company-description-text mb-4",children:E.description}),(0,n.jsx)("div",{className:"services-tags-container d-flex flex-wrap gap-2",children:E.services.map((e,t)=>(0,n.jsxs)("span",{className:"service-tag-pill",children:[(0,n.jsx)("i",{className:"fa-solid fa-circle-check text-green me-1"}),e]},t))})]})}),(0,n.jsx)("hr",{className:"divider mb-4"}),(0,n.jsxs)("div",{className:"showcase-tabs-bar mb-4",children:[C.length>0&&(0,n.jsxs)("button",{className:`showcase-tab-item ${"images"===p?"active":""}`,onClick:()=>h("images"),children:[(0,n.jsx)("i",{className:"fa-solid fa-image me-2"}),"Graphic Design & Ads (",C.length,")"]}),z.length>0&&(0,n.jsxs)("button",{className:`showcase-tab-item ${"videos"===p?"active":""}`,onClick:()=>h("videos"),children:[(0,n.jsx)("i",{className:"fa-solid fa-play me-2"}),"Video Reels & Promos (",z.length,")"]}),S.length>0&&(0,n.jsxs)("button",{className:`showcase-tab-item ${"brochures"===p?"active":""}`,onClick:()=>h("brochures"),children:[(0,n.jsx)("i",{className:"fa-solid fa-file-pdf me-2"}),"Print Brochures (",S.length,")"]})]}),(0,n.jsxs)("div",{className:"showcase-content-wrapper",children:["videos"===p&&z.length>0&&(0,n.jsx)("div",{className:"row g-4 animation-fade-in",children:z.map((e,t)=>(0,n.jsx)("div",{className:"col-md-6 col-lg-4",children:(0,n.jsxs)("div",{className:"video-showcase-card",onClick:()=>{g(e.videoUrl),b(e.title)},children:[(0,n.jsxs)("div",{className:"video-card-preview",children:[N&&(0,n.jsx)(f.default,{src:e.videoUrl,width:"100%",height:"100%",style:{position:"absolute",top:0,left:0,pointerEvents:"none"},onClick:e=>{e.preventDefault(),e.stopPropagation()}}),(0,n.jsx)("div",{className:"video-glow-effect"}),(0,n.jsx)("div",{className:"video-duration-tag",children:e.duration||"Reel"})]}),(0,n.jsxs)("div",{className:"video-card-meta",children:[(0,n.jsx)("h4",{className:"video-card-title",children:e.title}),(0,n.jsx)("p",{className:"video-card-desc",children:e.description})]})]})},t))}),"images"===p&&C.length>0&&(0,n.jsx)("div",{className:"row g-4 animation-fade-in",children:C.map((e,t)=>(0,n.jsx)("div",{className:"col-sm-6 col-md-4 col-lg-3",children:(0,n.jsxs)("div",{className:"graphic-showcase-card",onClick:()=>w(t),children:[(0,n.jsxs)("div",{className:"graphic-img-container",children:[(0,n.jsx)(l.default,{src:e.img,alt:e.title,className:"graphic-main-img",style:{objectFit:"cover",width:"100%",height:"100%"}}),(0,n.jsxs)("div",{className:"graphic-overlay",children:[(0,n.jsx)("span",{className:"graphic-overlay-category",children:e.category}),(0,n.jsx)("div",{className:"graphic-zoom-icon",children:(0,n.jsx)("i",{className:"fa-solid fa-magnifying-glass-plus"})})]})]}),(0,n.jsxs)("div",{className:"graphic-meta",children:[(0,n.jsx)("span",{className:"graphic-category-badge",children:e.category}),(0,n.jsx)("h4",{className:"graphic-title",children:e.title})]})]})},t))}),"brochures"===p&&S.length>0&&(0,n.jsx)("div",{className:"row g-4 justify-content-center animation-fade-in",children:S.map((e,t)=>(0,n.jsx)("div",{className:"col-md-8 col-lg-6",children:(0,n.jsxs)("div",{className:"brochure-showcase-card d-flex flex-column flex-sm-row",children:[(0,n.jsxs)("div",{className:"brochure-left-preview",children:[(0,n.jsx)(l.default,{src:e.previewImg,alt:e.title,className:"brochure-preview-img",style:{objectFit:"cover",width:"100%",height:"100%"}}),(0,n.jsx)("div",{className:"pdf-corner-tag",children:"PDF"})]}),(0,n.jsxs)("div",{className:"brochure-right-details d-flex flex-column justify-content-between p-4",children:[(0,n.jsxs)("div",{children:[(0,n.jsxs)("div",{className:"pdf-icon-meta mb-2",children:[(0,n.jsx)("i",{className:"fa-solid fa-file-pdf text-red"}),(0,n.jsx)("span",{children:"DOCUMENT COLLATERAL"})]}),(0,n.jsx)("h4",{className:"brochure-card-title mb-2",children:e.title}),(0,n.jsx)("p",{className:"brochure-card-desc mb-3",children:e.description})]}),(0,n.jsxs)("button",{onClick:()=>((e,t)=>{if(!t||"#"===t){j(`No PDF available for ${e}.`),setTimeout(()=>{j(null)},3e3);return}window.open(t,"_blank"),j(`Opening ${e}...`),setTimeout(()=>{j(null)},3e3)})(e.title,e.downloadUrl),className:"brochure-download-btn",children:[(0,n.jsx)("i",{className:"fa-solid fa-download me-2"}),"Download Brochure"]})]})]})},t))})]})]}),(0,n.jsx)("div",{className:"company-selector-container mb-5 wow fadeInUp","data-wow-delay":".3s",children:(0,n.jsx)("div",{className:"company-selector-scroll",children:u.clientCompaniesWork.map(e=>{let t=e.id===i;return(0,n.jsxs)("button",{className:`company-tab-btn ${t?"active":""}`,onClick:()=>{s(e.id),(e.images||[]).length>0?h("images"):(e.videos||[]).length>0?h("videos"):h("brochures")},children:[(0,n.jsx)("div",{className:"company-tab-logo-wrapper",children:(0,n.jsx)(l.default,{src:e.logo,alt:e.name,className:"company-tab-logo-img",width:36,height:36})}),(0,n.jsx)("span",{className:"company-tab-name",children:e.name})]},e.id)})})}),(0,n.jsxs)("div",{className:"slider-button d-flex align-items-center justify-content-between wow fadeInUp mt-5 pt-4","data-wow-delay":".2s",children:[(0,n.jsxs)(c.default,{href:`/our-project-details?id=${t}`,className:"d-flex align-items-center gap-3 text-decoration-none hover-theme-color",children:[(0,n.jsx)("div",{className:"cmn-prev d-center",children:(0,n.jsx)("i",{className:"fas fa-chevron-left"})}),(0,n.jsx)("span",{className:"previus-text text-capitalize",style:{fontWeight:700,fontSize:"16px"},children:"Prev Project"})]}),(0,n.jsx)("div",{className:"icon-grid",children:(0,n.jsx)(c.default,{href:"/our-projects",title:"All Projects",className:"icon-grid-link",children:(0,n.jsx)("i",{className:"fa-solid fa-table-cells"})})}),(0,n.jsxs)(c.default,{href:`/our-project-details?id=${r}`,className:"d-flex align-items-center gap-3 text-decoration-none hover-theme-color",children:[(0,n.jsx)("span",{className:"previus-text text-capitalize",style:{fontWeight:700,fontSize:"16px"},children:"Next Project"}),(0,n.jsx)("div",{className:"cmn-next d-center",children:(0,n.jsx)("i",{className:"fas fa-chevron-right"})})]})]})]}),m&&(0,n.jsxs)("div",{className:"showcase-video-lightbox",onClick:()=>g(null),children:[(0,n.jsx)("div",{className:"lightbox-backdrop-blur"}),(0,n.jsxs)("div",{className:"video-lightbox-content",onClick:e=>e.stopPropagation(),children:[(0,n.jsxs)("div",{className:"video-lightbox-header d-flex justify-content-between align-items-center p-3",children:[(0,n.jsxs)("span",{className:"video-lightbox-title",children:[(0,n.jsx)("i",{className:"fa-solid fa-circle-play text-blue me-2"}),x]}),(0,n.jsx)("button",{className:"lightbox-close-btn",onClick:()=>g(null),children:(0,n.jsx)("i",{className:"fa-solid fa-xmark"})})]}),(0,n.jsx)("div",{className:"video-player-wrapper",children:N&&(0,n.jsx)(f.default,{src:m,controls:!0,playing:!0,width:"100%",height:"100%",className:"lightbox-video-element"})})]})]}),(0,n.jsx)(tu,{open:v>=0,close:()=>w(-1),index:v,slides:C.map(e=>({src:"string"==typeof e.img?e.img:e.img.src||""})),plugins:[tM],styles:{root:{"--yarl__portal_zindex":999999}}}),y&&(0,n.jsxs)("div",{className:"download-toast-notification",children:[(0,n.jsx)("div",{className:"toast-icon",children:(0,n.jsx)("i",{className:"fa-solid fa-circle-check animate-pulse"})}),(0,n.jsx)("span",{className:"toast-message",children:y})]}),(0,n.jsx)("style",{dangerouslySetInnerHTML:{__html:`
                .client-showcase-section {
                    background: linear-gradient(180deg, #f8fafc 0%, #ffffff 100%);
                    position: relative;
                    overflow: hidden;
                    padding-bottom: 80px;
                }

                .showcase-badge {
                    background: linear-gradient(135deg, rgba(37, 99, 235, 0.08) 0%, rgba(0, 210, 159, 0.12) 100%);
                    color: #1e3a8a;
                    padding: 8px 18px;
                    border-radius: 50px;
                    font-size: 13px;
                    font-weight: 700;
                    display: inline-flex;
                    align-items: center;
                    gap: 6px;
                    border: 1px solid rgba(37, 99, 235, 0.15);
                    text-transform: uppercase;
                    letter-spacing: 1px;
                }

                .showcase-hero-title {
                    font-size: 48px;
                    font-weight: 900;
                    color: #0f172a;
                    line-height: 1.2;
                    letter-spacing: -1px;
                }

                .highlight-gradient {
                    background: linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }

                .showcase-hero-desc {
                    max-width: 760px;
                    font-size: 16px;
                    line-height: 1.7;
                    color: #475569;
                }

                /* Horizontal Company Tab Selector */
                .company-selector-container {
                    background: #ffffff;
                    border: 1px solid #e2e8f0;
                    border-radius: 20px;
                    padding: 12px;
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.02);
                }

                .company-selector-scroll {
                    display: flex;
                    gap: 12px;
                    overflow-x: auto;
                    scrollbar-width: thin;
                    scroll-behavior: smooth;
                    padding-bottom: 4px;
                }

                .company-selector-scroll::-webkit-scrollbar {
                    height: 5px;
                }
                .company-selector-scroll::-webkit-scrollbar-thumb {
                    background: #cbd5e1;
                    border-radius: 10px;
                }

                .company-tab-btn {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    background: transparent;
                    border: 1px solid transparent;
                    padding: 10px 20px;
                    border-radius: 14px;
                    cursor: pointer;
                    transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
                    flex-shrink: 0;
                }

                .company-tab-btn:hover {
                    background: #f8fafc;
                    border-color: #cbd5e1;
                }

                .company-tab-btn.active {
                    background: linear-gradient(135deg, #f0f5ff 0%, #e0eaff 100%);
                    border-color: rgba(37, 99, 235, 0.25);
                    box-shadow: 0 4px 15px rgba(37, 99, 235, 0.05);
                }

                .company-tab-logo-wrapper {
                    width: 36px;
                    height: 36px;
                    border-radius: 50%;
                    overflow: hidden;
                    background: #ffffff;
                    border: 1px solid #e2e8f0;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 2px;
                    transition: transform 0.3s ease;
                }

                .company-tab-btn.active .company-tab-logo-wrapper {
                    transform: scale(1.1);
                    border-color: #2563eb;
                }

                .company-tab-logo-img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    border-radius: 50%;
                }

                .company-tab-name {
                    font-size: 14px;
                    font-weight: 700;
                    color: #475569;
                    transition: color 0.3s ease;
                }

                .company-tab-btn.active .company-tab-name {
                    color: #1e3a8a;
                }

                /* Active Company Showcase Card */
                .active-company-card {
                    background: #ffffff;
                    border: 1px solid #e2e8f0;
                    border-radius: 24px;
                    padding: 40px;
                    box-shadow: 0 20px 50px rgba(18, 62, 122, 0.03);
                }

                .company-logo-badge {
                    width: 64px;
                    height: 64px;
                    border-radius: 16px;
                    overflow: hidden;
                    border: 1px solid #e2e8f0;
                    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
                    background: #ffffff;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 4px;
                }

                .company-logo-main {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    border-radius: 12px;
                }

                .company-main-title {
                    font-size: 28px;
                    font-weight: 800;
                    color: #0f172a;
                    margin: 0 0 4px 0;
                }

                .company-tagline {
                    font-size: 14px;
                    color: #64748b;
                    font-weight: 600;
                }

                .company-description-text {
                    font-size: 15px;
                    line-height: 1.7;
                    color: #475569;
                    white-space: pre-wrap;
                }

                .service-tag-pill {
                    background: #f8fafc;
                    border: 1px solid #e2e8f0;
                    color: #334155;
                    font-size: 12px;
                    font-weight: 700;
                    padding: 6px 14px;
                    border-radius: 50px;
                    display: inline-flex;
                    align-items: center;
                }

                .text-green {
                    color: #10b981;
                }

                .divider {
                    border: 0;
                    border-top: 1px solid #e2e8f0;
                    margin: 0;
                }

                /* Portal launch links */
                .company-links-panel {
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                }

                .links-panel-title {
                    font-size: 12px;
                    font-weight: 800;
                    color: #94a3b8;
                    letter-spacing: 1px;
                    text-transform: uppercase;
                }

                .launch-btn {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    padding: 10px 18px;
                    border-radius: 10px;
                    font-size: 13px;
                    font-weight: 700;
                    text-decoration: none;
                    transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
                }

                .web-btn {
                    background: #2563eb;
                    color: #ffffff;
                    box-shadow: 0 4px 15px rgba(37, 99, 235, 0.2);
                }
                .web-btn:hover {
                    background: #1d4ed8;
                    transform: translateY(-2px);
                    color: #ffffff;
                }

                .app-btn {
                    background: #0f172a;
                    color: #ffffff;
                }
                .app-btn:hover {
                    background: #1e293b;
                    transform: translateY(-2px);
                    color: #ffffff;
                }

                .play-btn {
                    background: #10b981;
                    color: #ffffff;
                }
                .play-btn:hover {
                    background: #059669;
                    transform: translateY(-2px);
                    color: #ffffff;
                }

                /* Sub-Tabs selector inside active company */
                .showcase-tabs-bar {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 10px;
                    border-bottom: 2px solid #f1f5f9;
                    padding-bottom: 12px;
                }

                .showcase-tab-item {
                    background: transparent;
                    border: none;
                    font-weight: 700;
                    font-size: 14px;
                    color: #64748b;
                    padding: 8px 16px;
                    cursor: pointer;
                    position: relative;
                    transition: color 0.3s ease;
                }

                .showcase-tab-item:hover {
                    color: #1e3a8a;
                }

                .showcase-tab-item.active {
                    color: #2563eb;
                }

                .showcase-tab-item.active::after {
                    content: "";
                    position: absolute;
                    bottom: -14px;
                    left: 0;
                    right: 0;
                    height: 2px;
                    background: #2563eb;
                }

                /* Video Showcase layouts */
                .video-showcase-card {
                    background: #f8fafc;
                    border: 1px solid #e2e8f0;
                    border-radius: 16px;
                    overflow: hidden;
                    cursor: pointer;
                    transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
                    height: 100%;
                }

                .video-showcase-card:hover {
                    transform: translateY(-5px);
                    border-color: rgba(37, 99, 235, 0.2);
                    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.03);
                }

                .video-card-preview {
                    position: relative;
                    padding-top: 56.25%; /* 16:9 aspect ratio */
                    background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
                    overflow: hidden;
                }

                .video-glow-effect {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: radial-gradient(circle at center, rgba(37, 99, 235, 0.15) 0%, transparent 70%);
                }

                .video-play-overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: background 0.3s ease;
                }

                .play-ring {
                    width: 50px;
                    height: 50px;
                    border-radius: 50%;
                    background: rgba(255, 255, 255, 0.9);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #2563eb;
                    font-size: 16px;
                    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
                    transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                }

                .play-ring i {
                    margin-left: 3px;
                }

                .video-showcase-card:hover .play-ring {
                    transform: scale(1.15);
                    background: #2563eb;
                    color: #ffffff;
                }

                .video-duration-tag {
                    position: absolute;
                    bottom: 10px;
                    right: 10px;
                    background: rgba(15, 23, 42, 0.75);
                    color: #ffffff;
                    font-size: 11px;
                    font-weight: 700;
                    padding: 2px 8px;
                    border-radius: 4px;
                }

                .video-card-meta {
                    padding: 15px;
                }

                .video-card-title {
                    font-size: 16px;
                    font-weight: 700;
                    color: #0f172a;
                    margin-bottom: 6px;
                }

                .video-card-desc {
                    font-size: 13px;
                    color: #64748b;
                    line-height: 1.5;
                    margin: 0;
                }

                /* Graphic Showcase layouts */
                .graphic-showcase-card {
                    background: #ffffff;
                    border: 1px solid #f1f5f9;
                    border-radius: 16px;
                    overflow: hidden;
                    cursor: pointer;
                    transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
                    height: 100%;
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.01);
                }

                .graphic-showcase-card:hover {
                    transform: translateY(-5px);
                    border-color: rgba(37, 99, 235, 0.15);
                    box-shadow: 0 12px 25px rgba(0, 0, 0, 0.04);
                }

                .graphic-img-container {
                    position: relative;
                    padding-top: 100%; /* Square 1:1 */
                    background: #f8fafc;
                    overflow: hidden;
                }

                .graphic-main-img {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
                }

                .graphic-showcase-card:hover .graphic-main-img {
                    transform: scale(1.06);
                }

                .graphic-overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: rgba(15, 23, 42, 0.7);
                    opacity: 0;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    padding: 15px;
                    transition: opacity 0.3s ease;
                }

                .graphic-showcase-card:hover .graphic-overlay {
                    opacity: 1;
                }

                .graphic-overlay-category {
                    color: rgba(255, 255, 255, 0.8);
                    font-size: 11px;
                    font-weight: 700;
                    letter-spacing: 0.5px;
                    text-transform: uppercase;
                }

                .graphic-zoom-icon {
                    width: 38px;
                    height: 38px;
                    border-radius: 50%;
                    background: #2563eb;
                    color: #ffffff;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 14px;
                    align-self: center;
                    transform: scale(0.8);
                    transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                }

                .graphic-showcase-card:hover .graphic-zoom-icon {
                    transform: scale(1);
                }

                .graphic-meta {
                    padding: 12px;
                }

                .graphic-category-badge {
                    font-size: 10px;
                    font-weight: 800;
                    color: #2563eb;
                    background: rgba(37, 99, 235, 0.05);
                    padding: 2px 8px;
                    border-radius: 4px;
                    display: inline-block;
                    margin-bottom: 6px;
                    text-transform: uppercase;
                }

                .graphic-title {
                    font-size: 14px;
                    font-weight: 700;
                    color: #0f172a;
                    margin: 0;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }

                /* Print Brochure Layout */
                .brochure-showcase-card {
                    background: #ffffff;
                    border: 1px solid #e2e8f0;
                    border-radius: 20px;
                    overflow: hidden;
                    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.015);
                    transition: all 0.3s ease;
                }

                .brochure-showcase-card:hover {
                    border-color: rgba(37, 99, 235, 0.18);
                    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.03);
                }

                .brochure-left-preview {
                    width: 100%;
                    max-width: 180px;
                    min-height: 200px;
                    position: relative;
                    background: #f8fafc;
                }

                @media (max-width: 575px) {
                    .brochure-left-preview {
                        max-width: 100%;
                        height: 200px;
                    }
                }

                .brochure-preview-img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }

                .pdf-corner-tag {
                    position: absolute;
                    top: 10px;
                    left: 10px;
                    background: #ef4444;
                    color: #ffffff;
                    font-size: 10px;
                    font-weight: 800;
                    padding: 2px 6px;
                    border-radius: 4px;
                }

                .pdf-icon-meta {
                    display: flex;
                    align-items: center;
                    gap: 6px;
                    font-size: 11px;
                    font-weight: 800;
                    color: #94a3b8;
                    letter-spacing: 0.5px;
                }

                .text-red {
                    color: #ef4444;
                }

                .brochure-card-title {
                    font-size: 18px;
                    font-weight: 700;
                    color: #0f172a;
                }

                .brochure-card-desc {
                    font-size: 13px;
                    line-height: 1.5;
                    color: #64748b;
                }

                .brochure-download-btn {
                    background: #f8fafc;
                    border: 1px solid #cbd5e1;
                    color: #334155;
                    padding: 10px 20px;
                    border-radius: 10px;
                    font-size: 13px;
                    font-weight: 700;
                    cursor: pointer;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    transition: all 0.3s ease;
                }

                .brochure-download-btn:hover {
                    background: #2563eb;
                    color: #ffffff;
                    border-color: #2563eb;
                    box-shadow: 0 4px 15px rgba(37, 99, 235, 0.25);
                }

                /* Video Lightbox */
                .showcase-video-lightbox {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    z-index: 9999;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 20px;
                }

                .lightbox-backdrop-blur {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: rgba(15, 23, 42, 0.85);
                    backdrop-filter: blur(8px);
                }

                .video-lightbox-content {
                    position: relative;
                    width: 100%;
                    max-width: 800px;
                    background: #0f172a;
                    border-radius: 20px;
                    overflow: hidden;
                    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    z-index: 2;
                }

                .video-lightbox-header {
                    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
                }

                .video-lightbox-title {
                    color: #ffffff;
                    font-weight: 700;
                    font-size: 15px;
                }

                .text-blue {
                    color: #3b82f6;
                }

                .lightbox-close-btn {
                    background: transparent;
                    border: none;
                    color: #94a3b8;
                    font-size: 20px;
                    cursor: pointer;
                    transition: color 0.3s ease, transform 0.3s ease;
                }

                .lightbox-close-btn:hover {
                    color: #ffffff;
                    transform: rotate(90deg);
                }

                .video-player-wrapper {
                    position: relative;
                    padding-top: 56.25%; /* 16:9 */
                    background: #000000;
                }

                .lightbox-video-element {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                }

                /* Image Lightbox */
                .showcase-image-lightbox {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    z-index: 9999;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 30px;
                    overflow: hidden; /* Strictly prevent scrolling of the lightbox overlay */
                }

                .lightbox-backdrop-blur {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: rgba(15, 23, 42, 0.9);
                    backdrop-filter: blur(10px);
                }

                .image-lightbox-content {
                    position: relative;
                    z-index: 2;
                    max-width: 90%;
                    max-height: calc(100vh - 120px); /* Bounding container size to fit viewport */
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                }

                .top-right-close {
                    position: absolute;
                    top: 20px;
                    right: 20px;
                    color: rgba(255, 255, 255, 0.8);
                    font-size: 24px;
                    background: rgba(255, 255, 255, 0.1);
                    border: none;
                    cursor: pointer;
                    transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
                    z-index: 10000;
                    width: 44px;
                    height: 44px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .top-right-close:hover {
                    color: #ffffff;
                    background: rgba(255, 255, 255, 0.2);
                    transform: scale(1.1) rotate(90deg);
                }

                .zoomed-image-container {
                    display: block;
                    width: 100%;
                    max-width: 100%;
                    text-align: center;
                }

                .zoomed-img-element {
                    max-width: 100%;
                    max-height: calc(100vh - 240px); /* 100vh minus spacing for padding & caption */
                    width: auto;
                    height: auto;
                    object-fit: contain;
                    border-radius: 12px;
                    border: 8px solid #ffffff;
                    background: #ffffff;
                    box-shadow: 0 25px 60px rgba(0, 0, 0, 0.5);
                    display: block;
                    margin: 0 auto;
                }

                .image-lightbox-footer {
                    margin-top: 15px;
                    text-align: center;
                }

                .image-lightbox-category {
                    color: #3b82f6;
                    font-size: 12px;
                    font-weight: 800;
                    letter-spacing: 0.5px;
                    text-transform: uppercase;
                    display: block;
                    margin-bottom: 4px;
                }

                .image-lightbox-caption {
                    font-size: 16px;
                    font-weight: 700;
                    margin: 0;
                }

                /* Toast notification */
                .download-toast-notification {
                    position: fixed;
                    bottom: 30px;
                    right: 30px;
                    background: #0f172a;
                    color: #ffffff;
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    border-radius: 14px;
                    padding: 14px 24px;
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.25);
                    z-index: 99999;
                    animation: toastSlideIn 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
                }

                .toast-icon {
                    color: #10b981;
                    font-size: 18px;
                }

                .toast-message {
                    font-size: 13px;
                    font-weight: 700;
                }

                /* Animation Keyframes */
                @keyframes toastSlideIn {
                    from {
                        transform: translateY(20px);
                        opacity: 0;
                    }
                    to {
                        transform: translateY(0);
                        opacity: 1;
                    }
                }

                .animation-fade-in {
                    animation: fadeIn 0.4s ease-out;
                }

                @keyframes fadeIn {
                    from {
                        opacity: 0;
                        transform: translateY(10px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                /* Responsive helpers */
                @media (max-width: 991px) {
                    .showcase-hero-title {
                        font-size: 38px;
                    }
                    .active-company-card {
                        padding: 30px 20px;
                    }
                    .image-lightbox-content {
                        max-width: 95%;
                        max-height: calc(100vh - 100px);
                    }
                    .zoomed-img-element {
                        max-height: calc(100vh - 200px);
                        border-width: 6px;
                    }
                }
                
                @media (max-width: 767px) {
                    .showcase-image-lightbox {
                        padding: 15px;
                    }
                    .top-right-close {
                        top: 15px;
                        right: 15px;
                        width: 40px;
                        height: 40px;
                        font-size: 20px;
                    }
                    .zoomed-img-element {
                        max-height: calc(100vh - 180px);
                        border-width: 4px;
                    }
                    .image-lightbox-footer {
                        margin-top: 10px;
                    }
                }
                `}})]})};var tI=e.i(25521);e.s(["default",0,()=>{let e=(0,d.useSearchParams)().get("id"),t=e?parseInt(e):1,[r,a]=(0,o.useState)(-1),[i,u]=(0,o.useState)(!1),[f,h]=(0,o.useState)(null),[m,g]=(0,o.useState)(null);(0,o.useEffect)(()=>(r>=0||f?document.body.style.overflow="hidden":document.body.style.overflow="",()=>{document.body.style.overflow=""}),[r,f]);let x=(e,t)=>{h({destinationName:e,url:t}),g(setTimeout(()=>{window.open(t,"_blank","noopener,noreferrer"),h(null)},2200))},b=p.default.find(e=>e.id===t)||p.default[0],v=p.default.filter(e=>e.projectType===b.projectType),w=v.findIndex(e=>e.id===b.id),y=v[0===w?v.length-1:w-1],j=v[w===v.length-1?0:w+1],N=y?y.id:1,k=j?j.id:1,E=b.coreFeatures||[],z=b.methodologyCards||[];return"digital-marketing"===b.projectType?(0,n.jsx)(tP,{project:b,prevId:N,nextId:k}):(0,n.jsxs)("section",{className:"project-details-section fix section-padding",children:[(0,n.jsx)("div",{className:"container",children:(0,n.jsxs)("div",{className:"project-details-wrapper",children:[(0,n.jsxs)("div",{className:"row g-4 align-items-center",children:[(0,n.jsx)("div",{className:"col-lg-6",children:(0,n.jsxs)("div",{className:"app-mockup-container wow fadeInLeft","data-wow-delay":".2s",children:[(0,n.jsx)("div",{className:"glowing-mesh"}),(0,n.jsx)("div",{className:"clean-mockup",children:(0,n.jsx)("div",{className:"clean-content",children:(0,n.jsx)(l.default,{src:b.thumb,alt:b.title,style:{width:"100%",height:"auto",objectFit:"contain"},className:"clean-screenshot"})})})]})}),(0,n.jsx)("div",{className:"col-lg-6",children:(0,n.jsxs)("div",{className:"project-details-content wow fadeInRight","data-wow-delay":".4s",style:{paddingLeft:"15px"},children:[(0,n.jsxs)("span",{className:"app-badge mb-3",children:[(0,n.jsx)("i",{className:"fa-solid fa-rocket me-1"}),b.category[0]," Project"]}),(0,n.jsx)("h2",{className:"project-title mb-3",children:b.title}),(0,n.jsx)("p",{className:"project-desc mb-4",children:b.description}),(0,n.jsx)("div",{className:"project-meta-pills d-flex flex-wrap gap-2 mb-4",children:b.category.map((e,t)=>(0,n.jsxs)("span",{className:"meta-pill",children:[(0,n.jsx)("i",{className:"fa-solid fa-tag me-2"}),e]},t))}),(b.projectLink||b.appStoreLink||b.playStoreLink)&&(0,n.jsxs)("div",{className:"project-action-buttons d-flex flex-wrap gap-3 mt-4 mb-4 wow fadeInUp","data-wow-delay":".5s",children:[b.projectLink&&(0,n.jsxs)("button",{onClick:()=>x("Website",b.projectLink),className:"action-btn website-btn",title:"Visit project website",children:[(0,n.jsx)("div",{className:"btn-icon",children:(0,n.jsx)("i",{className:"fa-solid fa-globe"})}),(0,n.jsxs)("div",{className:"btn-text",children:[(0,n.jsx)("span",{className:"btn-subtitle",children:"Live Preview"}),(0,n.jsx)("span",{className:"btn-title",children:"Visit Website"})]}),(0,n.jsx)("div",{className:"btn-arrow",children:(0,n.jsx)("i",{className:"fa-solid fa-arrow-up-right"})})]}),b.appStoreLink&&(0,n.jsxs)("button",{onClick:()=>x("App Store",b.appStoreLink),className:"action-btn appstore-btn",title:"Download from App Store",children:[(0,n.jsx)("div",{className:"btn-icon",children:(0,n.jsx)("i",{className:"fa-brands fa-apple"})}),(0,n.jsxs)("div",{className:"btn-text",children:[(0,n.jsx)("span",{className:"btn-subtitle",children:"Download on the"}),(0,n.jsx)("span",{className:"btn-title",children:"App Store"})]}),(0,n.jsx)("div",{className:"btn-arrow",children:(0,n.jsx)("i",{className:"fa-solid fa-arrow-up-right"})})]}),b.playStoreLink&&(0,n.jsxs)("button",{onClick:()=>x("Google Play",b.playStoreLink),className:"action-btn playstore-btn",title:"Get it on Google Play",children:[(0,n.jsx)("div",{className:"btn-icon",children:(0,n.jsx)("i",{className:"fa-brands fa-google-play"})}),(0,n.jsxs)("div",{className:"btn-text",children:[(0,n.jsx)("span",{className:"btn-subtitle",children:"Get it on"}),(0,n.jsx)("span",{className:"btn-title",children:"Google Play"})]}),(0,n.jsx)("div",{className:"btn-arrow",children:(0,n.jsx)("i",{className:"fa-solid fa-arrow-up-right"})})]})]})]})})]}),(0,n.jsxs)("div",{className:"row g-4 mt-5",children:[(0,n.jsx)("div",{className:"col-lg-8",children:(0,n.jsxs)("div",{className:"project-details-content",children:[(0,n.jsx)("h3",{className:"section-subtitle wow fadeInUp","data-wow-delay":".2s",children:"App Development Methodology"}),(0,n.jsx)("p",{className:"mt-3 wow fadeInUp","data-wow-delay":".3s",style:{color:"#64748b",fontSize:"15px"},children:"Our development lifecycle prioritizes agility, security, and exceptional performance. We craft architectural frameworks that support frictionless scalability, low network latency, and secure auth layers."}),(0,n.jsx)("div",{className:"row g-4 mt-2",children:z.map((e,t)=>(0,n.jsx)("div",{className:"col-md-6 wow fadeInUp","data-wow-delay":`${.15*t}s`,children:(0,n.jsxs)("div",{className:"methodology-card",children:[(0,n.jsx)("div",{className:"m-card-icon-wrapper",style:{background:e.grad,color:e.iconColor},children:(0,n.jsx)("i",{className:e.icon})}),(0,n.jsxs)("div",{className:"m-card-info",children:[(0,n.jsx)("h5",{className:"m-card-title",children:e.title}),(0,n.jsx)("p",{className:"m-card-desc",children:e.desc})]})]})},t))}),(0,n.jsx)("h3",{className:"section-subtitle mt-5 wow fadeInUp","data-wow-delay":".5s",children:"Core Features & Architecture"}),(0,n.jsx)("p",{className:"mt-3 wow fadeInUp","data-wow-delay":".6s",style:{color:"#64748b",fontSize:"15px"},children:"Engineered with the latest technologies to deliver reliability and a high-performance experience under extreme operational loads."}),(0,n.jsx)("div",{className:"features-card-grid row g-3 mt-2",children:E.map((e,t)=>(0,n.jsx)("div",{className:"col-md-6 wow fadeInUp","data-wow-delay":`${.08*t}s`,children:(0,n.jsxs)("div",{className:"feature-item-card",children:[(0,n.jsx)("div",{className:"feature-check-icon",children:(0,n.jsx)("i",{className:"fa-solid fa-circle-check"})}),(0,n.jsx)("span",{className:"feature-text",children:e})]})},t))}),(0,n.jsx)("h3",{className:"section-subtitle mt-5 wow fadeInUp","data-wow-delay":".5s",children:"Application Visual Showcase"}),(0,n.jsx)("p",{className:"mt-3 wow fadeInUp","data-wow-delay":".6s",style:{color:"#64748b",fontSize:"15px"},children:"Explore the internal dashboards, layout mockups, and client-facing interfaces designed specifically for this project edition."}),(0,n.jsx)("div",{className:"row g-4 mt-3",children:b.gallery.map((e,t)=>(0,n.jsx)("div",{className:"col-md-4 col-sm-6 wow fadeInUp","data-wow-delay":`${.7+.1*t}s`,children:(0,n.jsx)("div",{className:"gallery-card",onClick:()=>a(t),children:(0,n.jsxs)("div",{className:"gallery-img-container",children:[(0,n.jsx)(l.default,{src:e,alt:`${b.title} Screenshot ${t+1}`,className:"gallery-image"}),(0,n.jsxs)("div",{className:"gallery-overlay",children:[(0,n.jsx)("div",{className:"gallery-icon",children:(0,n.jsx)("i",{className:"fa-solid fa-magnifying-glass-plus"})}),(0,n.jsx)("span",{className:"gallery-text",children:"View Screenshot"})]})]})})},t))}),(0,n.jsxs)("div",{className:"slider-button d-flex align-items-center justify-content-between wow fadeInUp","data-wow-delay":"1.1s",children:[(0,n.jsxs)(c.default,{href:`/our-project-details?id=${N}`,className:"d-flex align-items-center gap-3 text-decoration-none hover-theme-color",children:[(0,n.jsx)("button",{className:"cmn-prev d-center",type:"button",children:(0,n.jsx)("i",{className:"fas fa-chevron-left"})}),(0,n.jsx)("span",{className:"previus-text text-capitalize",style:{fontWeight:700,fontSize:"16px"},children:"Prev Project"})]}),(0,n.jsx)("div",{className:"icon-grid",children:(0,n.jsx)(c.default,{href:"/our-projects",title:"All Projects",className:"icon-grid-link",children:(0,n.jsx)("i",{className:"fa-solid fa-table-cells"})})}),(0,n.jsxs)(c.default,{href:`/our-project-details?id=${k}`,className:"d-flex align-items-center gap-3 text-decoration-none hover-theme-color",children:[(0,n.jsx)("span",{className:"previus-text text-capitalize",style:{fontWeight:700,fontSize:"16px"},children:"Next Project"}),(0,n.jsx)("button",{className:"cmn-next d-center",type:"button",children:(0,n.jsx)("i",{className:"fas fa-chevron-right"})})]})]})]})}),(0,n.jsx)("div",{className:"col-lg-4",children:(0,n.jsxs)("div",{className:"project-details-sidebar",children:[(0,n.jsxs)("div",{className:"sidebar-widget spec-widget wow fadeInUp","data-wow-delay":".2s",children:[(0,n.jsx)("div",{className:"sideber-title mb-4",children:(0,n.jsxs)("h4",{style:{fontSize:"20px",fontWeight:800,color:"var(--theme)",margin:0},children:[(0,n.jsx)("i",{className:"fa-solid fa-cube text-primary me-2 animate-pulse"}),"Project Specifications"]})}),(0,n.jsx)("ul",{className:"project-infrom",style:{listStyle:"none",padding:0,margin:0},children:[{label:"Client",val:b.client,icon:"fa-solid fa-briefcase"},{label:"Platform",val:b.category[0]||"Web / Mobile App",icon:"fa-solid fa-laptop-code"},{label:"Location",val:b.location,icon:"fa-solid fa-map-location-dot"},{label:"Sector",val:b.sector,icon:"fa-solid fa-chart-pie"},{label:"Release Date",val:b.date,icon:"fa-solid fa-calendar-days"}].map((e,t)=>(0,n.jsxs)("li",{className:"spec-row",children:[(0,n.jsxs)("div",{className:"spec-label",children:[(0,n.jsx)("div",{className:"spec-icon",children:(0,n.jsx)("i",{className:e.icon})}),(0,n.jsx)("span",{children:e.label})]}),(0,n.jsx)("span",{className:"spec-value",children:e.val})]},t))})]}),(0,n.jsxs)("div",{className:"sidebar-widget-image wow fadeInUp mt-4","data-wow-delay":".4s",children:[(0,n.jsx)(l.default,{src:b.sidebarThumb,alt:"Sidebar decoration",style:{width:"100%",height:"auto",objectFit:"cover"},className:"sidebar-bg-img"}),(0,n.jsx)("div",{className:"gradient-overlay"}),(0,n.jsxs)("div",{className:"content p-4 text-white d-flex flex-column justify-content-between h-100",style:{position:"absolute",top:0,bottom:0,left:0,right:0,zIndex:2},children:[(0,n.jsx)("div",{className:"white-logo p-1",style:{width:"90px"},children:(0,n.jsx)(l.default,{src:s.default,alt:"Logo"})}),(0,n.jsxs)("div",{style:{marginTop:"50px"},children:[(0,n.jsx)("h3",{className:"mb-3 text-white",style:{fontSize:"24px",fontWeight:800,lineHeight:1.3},children:"Let’s Bring Digital Ideas to Life."}),(0,n.jsxs)("button",{onClick:()=>u(!0),className:"theme-btn text-white text-decoration-none premium-cta-btn",children:[(0,n.jsx)("span",{children:"Get in touch"}),(0,n.jsx)("i",{className:"fa-solid fa-arrow-up-right ms-2 animate-bounce-right"})]})]})]})]})]})})]})]})}),(0,n.jsx)(tu,{open:r>=0,close:()=>a(-1),index:r,slides:b.gallery.map(e=>({src:"string"==typeof e?e:e.src||""})),plugins:[tM],styles:{root:{"--yarl__portal_zindex":999999}}}),f&&(0,n.jsx)("div",{className:"redirect-overlay",children:(0,n.jsxs)("div",{className:"redirect-card",children:[(0,n.jsxs)("div",{className:"portal-ring",children:[(0,n.jsx)("div",{className:"portal-core",children:(0,n.jsx)("i",{className:"App Store"===f.destinationName?"fa-brands fa-apple":"Google Play"===f.destinationName?"fa-brands fa-google-play":"fa-solid fa-globe"})}),(0,n.jsx)("div",{className:"ring-pulse-1"}),(0,n.jsx)("div",{className:"ring-pulse-2"})]}),(0,n.jsxs)("h3",{children:["Connecting to ",f.destinationName]}),(0,n.jsx)("p",{children:"You are being securely redirected to our official project page."}),(0,n.jsx)("div",{className:"redirect-loader",children:(0,n.jsx)("div",{className:"loader-fill"})}),(0,n.jsx)("span",{className:"redirect-url",children:f.url}),(0,n.jsx)("button",{className:"cancel-redirect-btn",onClick:()=>{m&&(clearTimeout(m),g(null)),h(null)},children:"Cancel Redirection"})]})}),(0,n.jsx)(tI.default,{isOpen:i,onClose:()=>u(!1)}),(0,n.jsx)("style",{dangerouslySetInnerHTML:{__html:`
                .project-details-section {
                    background: linear-gradient(180deg, #fafbfe 0%, #ffffff 100%);
                    position: relative;
                    overflow: hidden;
                }
                .app-mockup-container {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding: 30px 20px;
                    position: relative;
                }
                
                /* Dynamic Backdrop Mesh Glow */
                .glowing-mesh {
                    position: absolute;
                    width: 320px;
                    height: 320px;
                    background: radial-gradient(circle, rgba(18, 62, 122, 0.25) 0%, rgba(59, 130, 246, 0.08) 50%, rgba(255, 255, 255, 0) 100%);
                    filter: blur(40px);
                    z-index: 1;
                    pointer-events: none;
                    border-radius: 50%;
                    animation: floatGlow 8s infinite ease-in-out;
                }
                @keyframes floatGlow {
                    0%, 100% { transform: translate(0, 0) scale(1); }
                    50% { transform: translate(15px, -15px) scale(1.15); }
                }

                /* Clean Image Mockup CSS */
                .clean-mockup {
                    background: #ffffff;
                    border-radius: 16px;
                    box-shadow: 0 30px 70px -15px rgba(11, 13, 23, 0.2);
                    border: 1px solid rgba(0, 0, 0, 0.05);
                    overflow: hidden;
                    width: 100%;
                    max-width: 580px;
                    margin: 0 auto;
                    transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1), box-shadow 0.6s ease;
                    perspective: 1000px;
                    position: relative;
                    z-index: 2;
                    padding: 8px;
                }
                .clean-mockup:hover {
                    transform: translateY(-8px) rotateX(3deg) rotateY(-2deg);
                    box-shadow: 0 45px 85px -20px rgba(18, 62, 122, 0.15);
                }
                
                .clean-content {
                    background: #f8fafc;
                    display: block;
                    position: relative;
                    overflow: hidden;
                    border-radius: 8px;
                }
                .clean-screenshot {
                    transition: transform 0.8s cubic-bezier(0.165, 0.84, 0.44, 1);
                    width: 100%;
                    height: auto;
                    object-fit: contain;
                }
                .clean-mockup:hover .clean-screenshot {
                    transform: scale(1.02);
                }

                /* Text & Pills Styling */
                .app-badge {
                    background: linear-gradient(135deg, rgba(18, 62, 122, 0.08) 0%, rgba(59, 130, 246, 0.12) 100%);
                    color: var(--theme);
                    padding: 8px 18px;
                    border-radius: 50px;
                    font-size: 13px;
                    font-weight: 700;
                    display: inline-flex;
                    align-items: center;
                    gap: 6px;
                    border: 1px solid rgba(18, 62, 122, 0.15);
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    box-shadow: 0 4px 15px rgba(18, 62, 122, 0.04);
                }
                .project-title {
                    font-weight: 900 !important;
                    font-size: 42px !important;
                    letter-spacing: -0.5px;
                    background: linear-gradient(135deg, #0b0d17 0%, #123e7a 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    margin-bottom: 20px;
                }
                .project-desc {
                    line-height: 1.8;
                    font-size: 16px;
                    color: #475569 !important;
                }
                .meta-pill {
                    background-color: rgba(248, 250, 252, 0.8);
                    color: #4b5563;
                    padding: 8px 16px;
                    border-radius: 50px;
                    font-size: 13px;
                    font-weight: 600;
                    display: inline-flex;
                    align-items: center;
                    border: 1px solid #e2e8f0;
                    transition: all 0.3s ease;
                }
                .meta-pill i {
                    color: var(--theme);
                }
                .meta-pill:hover {
                    transform: translateY(-2px);
                    border-color: var(--theme);
                    background-color: #fff;
                    color: var(--theme);
                    box-shadow: 0 8px 20px rgba(18, 62, 122, 0.08);
                }

                /* Subtitle Styling */
                .section-subtitle {
                    font-size: 26px !important;
                    font-weight: 800 !important;
                    color: #0b0d17;
                    position: relative;
                    padding-bottom: 12px;
                    margin-bottom: 20px;
                }
                .section-subtitle::after {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 60px;
                    height: 4px;
                    background: linear-gradient(to right, var(--theme), #3b82f6);
                    border-radius: 4px;
                }

                /* Methodology Feature Card Grid */
                .methodology-card {
                    background: #fff;
                    border: 1px solid #f1f5f9;
                    border-radius: 20px;
                    padding: 24px;
                    display: flex;
                    gap: 20px;
                    box-shadow: 0 10px 30px rgba(18, 62, 122, 0.02);
                    transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
                    height: 100%;
                }
                .methodology-card:hover {
                    transform: translateY(-5px);
                    border-color: rgba(18, 62, 122, 0.2);
                    box-shadow: 0 20px 40px rgba(18, 62, 122, 0.06);
                }
                .m-card-icon-wrapper {
                    width: 54px;
                    height: 54px;
                    border-radius: 14px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 24px;
                    flex-shrink: 0;
                    transition: transform 0.4s ease;
                }
                .methodology-card:hover .m-card-icon-wrapper {
                    transform: scale(1.1) rotate(-8deg);
                }
                .m-card-info {
                    display: flex;
                    flex-direction: column;
                    gap: 6px;
                }
                .m-card-title {
                    font-size: 17px;
                    font-weight: 700;
                    color: #0f172a;
                    margin: 0;
                }
                .m-card-desc {
                    font-size: 14px;
                    color: #64748b;
                    line-height: 1.5;
                    margin: 0;
                }

                /* Features Card Grid */
                .feature-item-card {
                    background: #fff;
                    border: 1px solid #f1f5f9;
                    padding: 18px 20px;
                    border-radius: 16px;
                    display: flex;
                    align-items: center;
                    gap: 14px;
                    box-shadow: 0 4px 15px rgba(18, 62, 122, 0.02);
                    transition: all 0.3s ease;
                }
                .feature-item-card:hover {
                    transform: translateY(-3px);
                    border-color: rgba(18, 62, 122, 0.15);
                    box-shadow: 0 12px 28px rgba(18, 62, 122, 0.06);
                    background: linear-gradient(to right, #fff, #f8fafc);
                }
                .feature-check-icon {
                    font-size: 20px;
                    color: var(--theme);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: transform 0.3s ease;
                }
                .feature-item-card:hover .feature-check-icon {
                    transform: scale(1.18) rotate(6deg);
                }
                .feature-text {
                    font-weight: 600;
                    font-size: 14px;
                    color: #334155;
                }

                /* Visual Showcase Gallery Grid */
                .gallery-img-container {
                    position: relative;
                    border-radius: 16px;
                    overflow: hidden;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: #0f172a;
                    border: 1px solid #f1f5f9;
                    box-shadow: 0 8px 24px rgba(18, 62, 122, 0.03);
                }
                .gallery-image {
                    width: 100%;
                    height: auto;
                    object-fit: contain;
                    transition: transform 0.8s cubic-bezier(0.165, 0.84, 0.44, 1);
                }
                .gallery-overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: rgba(18, 62, 122, 0.85);
                    backdrop-filter: blur(4px);
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    gap: 8px;
                    opacity: 0;
                    transition: all 0.4s ease;
                    z-index: 2;
                }
                .gallery-card {
                    cursor: pointer;
                }
                .gallery-card:hover .gallery-overlay {
                    opacity: 1;
                }
                .gallery-card:hover .gallery-image {
                    transform: scale(1.12);
                }
                .gallery-icon {
                    width: 44px;
                    height: 44px;
                    border-radius: 50%;
                    background: #fff;
                    color: var(--theme);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 18px;
                    transform: translateY(12px);
                    transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                }
                .gallery-card:hover .gallery-icon {
                    transform: translateY(0);
                }
                .gallery-text {
                    color: #fff;
                    font-weight: 700;
                    font-size: 13px;
                    letter-spacing: 0.5px;
                    transform: translateY(18px);
                    transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.05s;
                }
                .gallery-card:hover .gallery-text {
                    transform: translateY(0);
                }

                /* Sidebar Spec Widget */
                .spec-widget {
                    background: rgba(255, 255, 255, 0.75) !important;
                    backdrop-filter: blur(25px);
                    border: 1px solid rgba(255, 255, 255, 0.5);
                    border-radius: 24px !important;
                    padding: 35px 30px !important;
                    box-shadow: 0 20px 40px rgba(18, 62, 122, 0.04) !important;
                }
                .spec-row {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 15px 18px !important;
                    border-radius: 16px !important;
                    background: rgba(248, 250, 252, 0.6) !important;
                    border: 1px solid #f1f5f9;
                    margin-bottom: 12px !important;
                    transition: all 0.3s ease;
                }
                .spec-row:hover {
                    background: #fff !important;
                    border-color: rgba(18, 62, 122, 0.15);
                    transform: translateX(4px);
                    box-shadow: 0 10px 20px rgba(18, 62, 122, 0.04);
                }
                .spec-label {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    font-weight: 600;
                    color: #475569;
                    font-size: 14px;
                }
                .spec-icon {
                    width: 32px;
                    height: 32px;
                    border-radius: 10px;
                    background: rgba(18, 62, 122, 0.06);
                    color: var(--theme);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 14px;
                    transition: all 0.3s ease;
                }
                .spec-row:hover .spec-icon {
                    background: var(--theme);
                    color: #fff;
                }
                .spec-value {
                    font-weight: 700;
                    color: #0f172a;
                    font-size: 14px;
                    text-align: right;
                }

                /* Sidebar CTA Promo Widget */
                .sidebar-widget-image {
                    position: relative;
                    border-radius: 24px;
                    overflow: hidden;
                    box-shadow: 0 20px 45px rgba(11, 13, 23, 0.15);
                }
                .sidebar-bg-img {
                    transition: transform 1.2s cubic-bezier(0.165, 0.84, 0.44, 1);
                }
                .sidebar-widget-image:hover .sidebar-bg-img {
                    transform: scale(1.08);
                }
                .gradient-overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: linear-gradient(180deg, rgba(11, 13, 23, 0.25) 0%, rgba(18, 62, 122, 0.95) 100%);
                    z-index: 1;
                }
                .premium-cta-btn {
                    background: #fff !important;
                    color: var(--theme) !important;
                    font-weight: 700;
                    padding: 14px 28px !important;
                    border-radius: 50px !important;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    border: none;
                    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.12);
                    transition: all 0.3s ease;
                    text-transform: uppercase;
                    font-size: 13px;
                    letter-spacing: 0.5px;
                }
                .premium-cta-btn:hover {
                    background: var(--theme) !important;
                    color: #fff !important;
                    box-shadow: 0 15px 30px rgba(18, 62, 122, 0.35);
                    transform: translateY(-2px);
                }

                /* Nav Buttons & Icons styling */
                .slider-button {
                    border-top: 1px solid #e2e8f0 !important;
                    padding-top: 35px !important;
                    margin-top: 50px !important;
                }
                .cmn-prev, .cmn-next {
                    width: 54px !important;
                    height: 54px !important;
                    line-height: 54px;
                    border-radius: 50% !important;
                    border: 1px solid #e2e8f0 !important;
                    background: #fff;
                    color: var(--theme);
                    transition: all 0.3s ease;
                    cursor: pointer;
                }
                .hover-theme-color {
                    color: #475569 !important;
                    transition: all 0.3s ease;
                }
                .hover-theme-color:hover {
                    color: var(--theme) !important;
                }
                .hover-theme-color:hover button {
                    background-color: var(--theme) !important;
                    border-color: var(--theme) !important;
                    color: #fff !important;
                    transform: scale(1.05);
                }
                .icon-grid-link {
                    color: #64748b;
                    font-size: 22px;
                    transition: all 0.3s ease;
                }
                .icon-grid-link:hover {
                    color: var(--theme);
                    transform: scale(1.15) rotate(90deg);
                }

                /* Keyframes & Animations classes */
                .animate-pulse {
                    animation: pulse 2s infinite ease-in-out;
                }
                @keyframes pulse {
                    0%, 100% { transform: scale(1); opacity: 1; }
                    50% { transform: scale(1.08); opacity: 0.85; }
                }
                .animate-bounce-right {
                    animation: bounceRight 1.5s infinite ease-in-out;
                }
                @keyframes bounceRight {
                    0%, 100% { transform: translateX(0); }
                    50% { transform: translateX(6px); }
                }

                /* Premium Action Buttons */
                .project-action-buttons {
                    margin-top: 25px;
                    margin-bottom: 25px;
                }
                .action-btn {
                    display: inline-flex;
                    align-items: center;
                    background: #ffffff;
                    border: 1px solid #e2e8f0;
                    border-radius: 14px;
                    padding: 10px 20px;
                    gap: 15px;
                    cursor: pointer;
                    transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
                    text-align: left;
                    box-shadow: 0 4px 12px rgba(18, 62, 122, 0.03);
                    position: relative;
                    overflow: hidden;
                }
                .action-btn::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(135deg, rgba(18, 62, 122, 0.05) 0%, rgba(59, 130, 246, 0.05) 100%);
                    opacity: 0;
                    transition: opacity 0.4s ease;
                    z-index: 1;
                }
                .action-btn:hover::before {
                    opacity: 1;
                }
                .action-btn:hover {
                    transform: translateY(-4px);
                    border-color: var(--theme);
                    box-shadow: 0 12px 24px rgba(18, 62, 122, 0.08);
                }
                .action-btn .btn-icon {
                    font-size: 24px;
                    color: #475569;
                    transition: all 0.4s ease;
                    z-index: 2;
                }
                .action-btn:hover .btn-icon {
                    color: var(--theme);
                    transform: scale(1.1);
                }
                .action-btn .btn-text {
                    display: flex;
                    flex-direction: column;
                    z-index: 2;
                }
                .action-btn .btn-subtitle {
                    font-size: 11px;
                    font-weight: 500;
                    text-transform: uppercase;
                    letter-spacing: 0.8px;
                    color: #64748b;
                }
                .action-btn .btn-title {
                    font-size: 15px;
                    font-weight: 800;
                    color: #0f172a;
                }
                .action-btn .btn-arrow {
                    font-size: 14px;
                    color: #94a3b8;
                    transition: all 0.3s ease;
                    z-index: 2;
                }
                .action-btn:hover .btn-arrow {
                    color: var(--theme);
                    transform: translate(2px, -2px);
                }
                
                /* Redirect Overlay */
                .redirect-overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(11, 13, 23, 0.6);
                    backdrop-filter: blur(12px);
                    z-index: 9999;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    animation: fadeInOverlay 0.4s ease forwards;
                }
                @keyframes fadeInOverlay {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                .redirect-card {
                    background: #ffffff;
                    border: 1px solid rgba(255, 255, 255, 0.8);
                    border-radius: 28px;
                    padding: 45px 35px;
                    width: 100%;
                    max-width: 480px;
                    text-align: center;
                    box-shadow: 0 40px 90px -10px rgba(11, 13, 23, 0.35);
                    transform: translateY(20px);
                    animation: slideUpCard 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                    position: relative;
                }
                @keyframes slideUpCard {
                    to { transform: translateY(0); }
                }
                .portal-ring {
                    width: 90px;
                    height: 90px;
                    margin: 0 auto 30px;
                    position: relative;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .portal-core {
                    width: 60px;
                    height: 60px;
                    background: linear-gradient(135deg, var(--theme) 0%, #3b82f6 100%);
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 28px;
                    color: #fff;
                    z-index: 3;
                    box-shadow: 0 8px 25px rgba(18, 62, 122, 0.3);
                }
                .ring-pulse-1, .ring-pulse-2 {
                    position: absolute;
                    top: 5%;
                    left: 5%;
                    width: 90%;
                    height: 90%;
                    border: 2px solid var(--theme);
                    border-radius: 50%;
                    opacity: 0;
                    z-index: 1;
                }
                .ring-pulse-1 {
                    animation: portalPulse 2s infinite linear;
                }
                .ring-pulse-2 {
                    animation: portalPulse 2s infinite linear 1s;
                }
                @keyframes portalPulse {
                    0% { transform: scale(0.6); opacity: 0; }
                    50% { opacity: 0.5; }
                    100% { transform: scale(1.4); opacity: 0; }
                }
                .redirect-card h3 {
                    font-size: 22px;
                    font-weight: 800;
                    color: #0f172a;
                    margin-bottom: 12px;
                }
                .redirect-card p {
                    font-size: 14px;
                    color: #64748b;
                    line-height: 1.6;
                    margin-bottom: 25px;
                }
                
                /* Redirect Progress Bar */
                .redirect-loader {
                    width: 100%;
                    height: 6px;
                    background: #f1f5f9;
                    border-radius: 10px;
                    overflow: hidden;
                    margin-bottom: 25px;
                    position: relative;
                }
                .loader-fill {
                    height: 100%;
                    background: linear-gradient(to right, var(--theme), #3b82f6);
                    border-radius: 10px;
                    width: 0%;
                    animation: loadProgress 2.2s linear forwards;
                }
                @keyframes loadProgress {
                    to { width: 100%; }
                }
                
                .redirect-url {
                    display: block;
                    font-size: 12px;
                    color: #94a3b8;
                    font-family: monospace;
                    word-break: break-all;
                    background: #f8fafc;
                    padding: 8px 12px;
                    border-radius: 8px;
                    margin-bottom: 30px;
                    border: 1px solid #e2e8f0;
                }
                .cancel-redirect-btn {
                    background: #f1f5f9;
                    color: #475569;
                    border: none;
                    padding: 12px 24px;
                    border-radius: 50px;
                    font-size: 13px;
                    font-weight: 700;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                }
                .cancel-redirect-btn:hover {
                    background: #e2e8f0;
                    color: #0f172a;
                }

                /* Image Lightbox */
                .showcase-image-lightbox {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    z-index: 9999;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 30px;
                    overflow: hidden; /* Strictly prevent scrolling of the lightbox overlay */
                }

                .lightbox-backdrop-blur {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: rgba(15, 23, 42, 0.9);
                    backdrop-filter: blur(10px);
                }

                .image-lightbox-content {
                    position: relative;
                    z-index: 2;
                    max-width: 90%;
                    max-height: calc(100vh - 120px); /* Bounding container size to fit viewport */
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                }

                .top-right-close {
                    position: absolute;
                    top: 20px;
                    right: 20px;
                    color: rgba(255, 255, 255, 0.8);
                    font-size: 24px;
                    background: rgba(255, 255, 255, 0.1);
                    border: none;
                    cursor: pointer;
                    transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
                    z-index: 10000;
                    width: 44px;
                    height: 44px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .top-right-close:hover {
                    color: #ffffff;
                    background: rgba(255, 255, 255, 0.2);
                    transform: scale(1.1) rotate(90deg);
                }

                .zoomed-image-container {
                    display: block;
                    width: 100%;
                    max-width: 100%;
                    text-align: center;
                }

                .zoomed-img-element {
                    max-width: 100%;
                    max-height: calc(100vh - 240px); /* 100vh minus spacing for padding & caption */
                    width: auto;
                    height: auto;
                    object-fit: contain;
                    border-radius: 12px;
                    border: 8px solid #ffffff;
                    background: #ffffff;
                    box-shadow: 0 25px 60px rgba(0, 0, 0, 0.5);
                    display: block;
                    margin: 0 auto;
                }

                .image-lightbox-footer {
                    margin-top: 15px;
                    text-align: center;
                }

                .image-lightbox-category {
                    color: #3b82f6;
                    font-size: 12px;
                    font-weight: 800;
                    letter-spacing: 0.5px;
                    text-transform: uppercase;
                    display: block;
                    margin-bottom: 4px;
                }

                .image-lightbox-caption {
                    font-size: 16px;
                    font-weight: 700;
                    margin: 0;
                }

                /* Responsive helpers */
                @media (max-width: 991px) {
                    .image-lightbox-content {
                        max-width: 95%;
                        max-height: calc(100vh - 100px);
                    }
                    .zoomed-img-element {
                        max-height: calc(100vh - 200px);
                        border-width: 6px;
                    }
                }
                
                @media (max-width: 767px) {
                    .showcase-image-lightbox {
                        padding: 15px;
                    }
                    .top-right-close {
                        top: 15px;
                        right: 15px;
                        width: 40px;
                        height: 40px;
                        font-size: 20px;
                    }
                    .zoomed-img-element {
                        max-height: calc(100vh - 180px);
                        border-width: 4px;
                    }
                    .image-lightbox-footer {
                        margin-top: 10px;
                    }
                }
            `}})]})}],21318)}]);