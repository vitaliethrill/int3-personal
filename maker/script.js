!function(e){var t=window.webpackHotUpdate;window.webpackHotUpdate=function(e,n){!function(e,t){if(!S[e]||!L[e])return;for(var n in L[e]=!1,t)Object.prototype.hasOwnProperty.call(t,n)&&(h[n]=t[n]);0==--m&&0===E&&w()}(e,n),t&&t(e,n)};var n,r=!0,o="17d8b2e2b81e0f4a8907",c={},l=[],i=[];function d(e){var t=j[e];if(!t)return _;var r=function(r){return t.hot.active?(j[r]?-1===j[r].parents.indexOf(e)&&j[r].parents.push(e):(l=[e],n=r),-1===t.children.indexOf(r)&&t.children.push(r)):(console.warn("[HMR] unexpected require("+r+") from disposed module "+e),l=[]),_(r)},o=function(e){return{configurable:!0,enumerable:!0,get:function(){return _[e]},set:function(t){_[e]=t}}};for(var c in _)Object.prototype.hasOwnProperty.call(_,c)&&"e"!==c&&"t"!==c&&Object.defineProperty(r,c,o(c));return r.e=function(e){return"ready"===u&&f("prepare"),E++,_.e(e).then(t,(function(e){throw t(),e}));function t(){E--,"prepare"===u&&(b[e]||D(e),0===E&&0===m&&w())}},r.t=function(e,t){return 1&t&&(e=r(e)),_.t(e,-2&t)},r}function s(t){var r={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_selfInvalidated:!1,_disposeHandlers:[],_main:n!==t,active:!0,accept:function(e,t){if(void 0===e)r._selfAccepted=!0;else if("function"==typeof e)r._selfAccepted=e;else if("object"==typeof e)for(var n=0;n<e.length;n++)r._acceptedDependencies[e[n]]=t||function(){};else r._acceptedDependencies[e]=t||function(){}},decline:function(e){if(void 0===e)r._selfDeclined=!0;else if("object"==typeof e)for(var t=0;t<e.length;t++)r._declinedDependencies[e[t]]=!0;else r._declinedDependencies[e]=!0},dispose:function(e){r._disposeHandlers.push(e)},addDisposeHandler:function(e){r._disposeHandlers.push(e)},removeDisposeHandler:function(e){var t=r._disposeHandlers.indexOf(e);t>=0&&r._disposeHandlers.splice(t,1)},invalidate:function(){switch(this._selfInvalidated=!0,u){case"idle":(h={})[t]=e[t],f("ready");break;case"ready":F(t);break;case"prepare":case"check":case"dispose":case"apply":(v=v||[]).push(t)}},check:k,apply:q,status:function(e){if(!e)return u;a.push(e)},addStatusHandler:function(e){a.push(e)},removeStatusHandler:function(e){var t=a.indexOf(e);t>=0&&a.splice(t,1)},data:c[t]};return n=void 0,r}var a=[],u="idle";function f(e){u=e;for(var t=0;t<a.length;t++)a[t].call(null,e)}var p,h,y,v,m=0,E=0,b={},L={},S={};function g(e){return+e+""===e?+e:e}function k(e){if("idle"!==u)throw new Error("check() is only allowed in idle status");return r=e,f("check"),(t=1e4,t=t||1e4,new Promise((function(e,n){if("undefined"==typeof XMLHttpRequest)return n(new Error("No browser support"));try{var r=new XMLHttpRequest,c=_.p+""+o+".hot-update.json";r.open("GET",c,!0),r.timeout=t,r.send(null)}catch(e){return n(e)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)n(new Error("Manifest request to "+c+" timed out."));else if(404===r.status)e();else if(200!==r.status&&304!==r.status)n(new Error("Manifest request to "+c+" failed."));else{try{var t=JSON.parse(r.responseText)}catch(e){return void n(e)}e(t)}}}))).then((function(e){if(!e)return f(O()?"ready":"idle"),null;L={},b={},S=e.c,y=e.h,f("prepare");var t=new Promise((function(e,t){p={resolve:e,reject:t}}));h={};return D(0),"prepare"===u&&0===E&&0===m&&w(),t}));var t}function D(e){S[e]?(L[e]=!0,m++,function(e){var t=document.createElement("script");t.charset="utf-8",t.src=_.p+""+e+"."+o+".hot-update.js",document.head.appendChild(t)}(e)):b[e]=!0}function w(){f("ready");var e=p;if(p=null,e)if(r)Promise.resolve().then((function(){return q(r)})).then((function(t){e.resolve(t)}),(function(t){e.reject(t)}));else{var t=[];for(var n in h)Object.prototype.hasOwnProperty.call(h,n)&&t.push(g(n));e.resolve(t)}}function q(t){if("ready"!==u)throw new Error("apply() is only allowed in ready status");return function t(r){var i,d,s,a,u;function p(e){for(var t=[e],n={},r=t.map((function(e){return{chain:[e],id:e}}));r.length>0;){var o=r.pop(),c=o.id,l=o.chain;if((a=j[c])&&(!a.hot._selfAccepted||a.hot._selfInvalidated)){if(a.hot._selfDeclined)return{type:"self-declined",chain:l,moduleId:c};if(a.hot._main)return{type:"unaccepted",chain:l,moduleId:c};for(var i=0;i<a.parents.length;i++){var d=a.parents[i],s=j[d];if(s){if(s.hot._declinedDependencies[c])return{type:"declined",chain:l.concat([d]),moduleId:c,parentId:d};-1===t.indexOf(d)&&(s.hot._acceptedDependencies[c]?(n[d]||(n[d]=[]),m(n[d],[c])):(delete n[d],t.push(d),r.push({chain:l.concat([d]),id:d})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:n}}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];-1===e.indexOf(r)&&e.push(r)}}O();var E={},b=[],L={},k=function(){console.warn("[HMR] unexpected require("+w.moduleId+") to disposed module")};for(var D in h)if(Object.prototype.hasOwnProperty.call(h,D)){var w;u=g(D),w=h[D]?p(u):{type:"disposed",moduleId:D};var q=!1,F=!1,A=!1,C="";switch(w.chain&&(C="\nUpdate propagation: "+w.chain.join(" -> ")),w.type){case"self-declined":r.onDeclined&&r.onDeclined(w),r.ignoreDeclined||(q=new Error("Aborted because of self decline: "+w.moduleId+C));break;case"declined":r.onDeclined&&r.onDeclined(w),r.ignoreDeclined||(q=new Error("Aborted because of declined dependency: "+w.moduleId+" in "+w.parentId+C));break;case"unaccepted":r.onUnaccepted&&r.onUnaccepted(w),r.ignoreUnaccepted||(q=new Error("Aborted because "+u+" is not accepted"+C));break;case"accepted":r.onAccepted&&r.onAccepted(w),F=!0;break;case"disposed":r.onDisposed&&r.onDisposed(w),A=!0;break;default:throw new Error("Unexception type "+w.type)}if(q)return f("abort"),Promise.reject(q);if(F)for(u in L[u]=h[u],m(b,w.outdatedModules),w.outdatedDependencies)Object.prototype.hasOwnProperty.call(w.outdatedDependencies,u)&&(E[u]||(E[u]=[]),m(E[u],w.outdatedDependencies[u]));A&&(m(b,[w.moduleId]),L[u]=k)}var x,P=[];for(d=0;d<b.length;d++)u=b[d],j[u]&&j[u].hot._selfAccepted&&L[u]!==k&&!j[u].hot._selfInvalidated&&P.push({module:u,parents:j[u].parents.slice(),errorHandler:j[u].hot._selfAccepted});f("dispose"),Object.keys(S).forEach((function(e){!1===S[e]&&function(e){delete installedChunks[e]}(e)}));var B,I,H=b.slice();for(;H.length>0;)if(u=H.pop(),a=j[u]){var M={},T=a.hot._disposeHandlers;for(s=0;s<T.length;s++)(i=T[s])(M);for(c[u]=M,a.hot.active=!1,delete j[u],delete E[u],s=0;s<a.children.length;s++){var U=j[a.children[s]];U&&((x=U.parents.indexOf(u))>=0&&U.parents.splice(x,1))}}for(u in E)if(Object.prototype.hasOwnProperty.call(E,u)&&(a=j[u]))for(I=E[u],s=0;s<I.length;s++)B=I[s],(x=a.children.indexOf(B))>=0&&a.children.splice(x,1);f("apply"),void 0!==y&&(o=y,y=void 0);for(u in h=void 0,L)Object.prototype.hasOwnProperty.call(L,u)&&(e[u]=L[u]);var K=null;for(u in E)if(Object.prototype.hasOwnProperty.call(E,u)&&(a=j[u])){I=E[u];var N=[];for(d=0;d<I.length;d++)if(B=I[d],i=a.hot._acceptedDependencies[B]){if(-1!==N.indexOf(i))continue;N.push(i)}for(d=0;d<N.length;d++){i=N[d];try{i(I)}catch(e){r.onErrored&&r.onErrored({type:"accept-errored",moduleId:u,dependencyId:I[d],error:e}),r.ignoreErrored||K||(K=e)}}}for(d=0;d<P.length;d++){var R=P[d];u=R.module,l=R.parents,n=u;try{_(u)}catch(e){if("function"==typeof R.errorHandler)try{R.errorHandler(e)}catch(t){r.onErrored&&r.onErrored({type:"self-accept-error-handler-errored",moduleId:u,error:t,originalError:e}),r.ignoreErrored||K||(K=t),K||(K=e)}else r.onErrored&&r.onErrored({type:"self-accept-errored",moduleId:u,error:e}),r.ignoreErrored||K||(K=e)}}if(K)return f("fail"),Promise.reject(K);if(v)return t(r).then((function(e){return b.forEach((function(t){e.indexOf(t)<0&&e.push(t)})),e}));return f("idle"),new Promise((function(e){e(b)}))}(t=t||{})}function O(){if(v)return h||(h={}),v.forEach(F),v=void 0,!0}function F(t){Object.prototype.hasOwnProperty.call(h,t)||(h[t]=e[t])}var j={};function _(t){if(j[t])return j[t].exports;var n=j[t]={i:t,l:!1,exports:{},hot:s(t),parents:(i=l,l=[],i),children:[]};return e[t].call(n.exports,n,n.exports,d(t)),n.l=!0,n.exports}_.m=e,_.c=j,_.d=function(e,t,n){_.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},_.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},_.t=function(e,t){if(1&t&&(e=_(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(_.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)_.d(n,r,function(t){return e[t]}.bind(null,r));return n},_.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return _.d(t,"a",t),t},_.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},_.p="",_.h=function(){return o},d(1)(_.s=1)}([function(e,t,n){},function(e,t,n){"use strict";n.r(t);n(0),AOS.init();const r=document.querySelector(".slider");(()=>{!function(){const e=document.querySelectorAll(".colors-radio"),t=()=>{const e=document.querySelector(".c-croc-throat"),t=document.querySelector(".c-croc-uppersole"),n=document.querySelector(".c-croc-sole"),r=document.querySelectorAll(".c-croc-holes"),o=document.querySelector("#yellow-01"),c=document.querySelector("#red-01"),l=document.querySelector("#purple-01"),i=document.querySelector("#green-01"),d=document.querySelector("#orange-01"),s=document.querySelector("#blue-01");o.checked?(n.style.fill="#FEF2C7",t.style.fill="#FDE68A",e.style.fill="#FCD44C",r.forEach(e=>{e.style.fill="#FBBF24"})):c.checked?(n.style.fill="#FEE2E2",t.style.fill="#FECACA",e.style.fill="#FCA5A5",r.forEach(e=>{e.style.fill="#F87171"})):l.checked?(n.style.fill="#EDE9FE",t.style.fill="#DDD6FE",e.style.fill="#C4B5FD",r.forEach(e=>{e.style.fill="#A78BFA"})):i.checked?(n.style.fill="#D1FAE5",t.style.fill="#A7F3D0",e.style.fill="#6EE7B7",r.forEach(e=>{e.style.fill="#34D399"})):d.checked?(n.style.fill="#FCD34D",t.style.fill="#FBBF24",e.style.fill="#F59E0B",r.forEach(e=>{e.style.fill="#D97706"})):s.checked?(n.style.fill="#DBEAFE",t.style.fill="#BFDBFE",e.style.fill="#93C5FD",r.forEach(e=>{e.style.fill="#60A5FA"})):(n.style.fill="transparent",t.style.fill="transparent",e.style.fill="transparent",r.forEach(e=>{e.style.fill="transparent"}))},n=()=>{const e=document.querySelector(".c-croc-gore"),t=document.querySelector("#yellow-02"),n=document.querySelector("#red-02"),r=document.querySelector("#purple-02"),o=document.querySelector("#green-02"),c=document.querySelector("#orange-02"),l=document.querySelector("#blue-02");t.checked?e.style.fill="#FCD44C":n.checked?e.style.fill="#FCA5A5":r.checked?e.style.fill="#C4B5FD":o.checked?e.style.fill="#6EE7B7":c.checked?e.style.fill="#F59E0B":l.checked?e.style.fill="#93C5FD":e.style.fill="transparent"},r=()=>{const e=document.querySelector(".c-croc-strap"),t=document.querySelector("#yellow-03"),n=document.querySelector("#red-03"),r=document.querySelector("#purple-03"),o=document.querySelector("#green-03"),c=document.querySelector("#orange-03"),l=document.querySelector("#blue-03");t.checked?e.style.fill="#FCD44C":n.checked?e.style.fill="#FCA5A5":r.checked?e.style.fill="#C4B5FD":o.checked?e.style.fill="#6EE7B7":c.checked?e.style.fill="#F59E0B":l.checked?e.style.fill="#93C5FD":e.style.fill="transparent"};t(),n(),r(),e.forEach(e=>{e.addEventListener("click",t),e.addEventListener("click",n),e.addEventListener("click",r)});const o=document.querySelector(".cp-number-01"),c=document.querySelector(".cp-number-02"),l=document.querySelector(".cp-number-03"),i=document.querySelector(".cp-colors-01"),d=document.querySelector(".cp-colors-02"),s=document.querySelector(".cp-colors-03"),a=document.querySelector(".cp-title");o.addEventListener("click",(function(){o.classList.add("active"),c.classList.remove("active"),l.classList.remove("active"),i.classList.remove("hidden"),d.classList.add("hidden"),s.classList.add("hidden"),o.classList.contains("active")&&(a.textContent="Kies een kleur voor de basis.")})),c.addEventListener("click",(function(){o.classList.remove("active"),c.classList.add("active"),l.classList.remove("active"),i.classList.add("hidden"),d.classList.remove("hidden"),s.classList.add("hidden"),c.classList.contains("active")&&(a.textContent="Kies een kleur voor rond je voet.")})),l.addEventListener("click",(function(){o.classList.remove("active"),c.classList.remove("active"),l.classList.add("active"),i.classList.add("hidden"),d.classList.add("hidden"),s.classList.remove("hidden"),l.classList.contains("active")&&(a.textContent="Als laatste, kleur je het bandje!")}));const u=document.querySelector(".cp-btn-01"),f=document.querySelector(".cp-btn-02"),p=document.querySelector(".cp-btn-03");u.addEventListener("click",(function(){o.classList.remove("active"),c.classList.add("active"),l.classList.remove("active"),i.classList.add("hidden"),d.classList.remove("hidden"),s.classList.add("hidden"),a.textContent="Kies een kleur voor rond je voet."})),f.addEventListener("click",(function(){o.classList.remove("active"),c.classList.remove("active"),l.classList.add("active"),i.classList.add("hidden"),d.classList.add("hidden"),s.classList.remove("hidden"),a.textContent="Als laatste, kleur je het bandje!"})),p.addEventListener("click",(function(){o.classList.add("active"),c.classList.remove("active"),l.classList.remove("active"),i.classList.remove("hidden"),d.classList.add("hidden"),s.classList.add("hidden"),a.textContent="Kies een kleur voor de basis."}))}();var e,t,n={container:document.getElementById("lottie-three"),path:"https://assets.lottiefiles.com/datafiles/7HMs29Q0NhBUKCp/data.json",renderer:"svg",loop:!1,autoplay:!1,name:"animScroll"};(t=bodymovin.loadAnimation(n)).addEventListener("DOMLoaded",(function(){(e=new TimelineMax({repeat:0})).to({frame:0},1,{frame:t.totalFrames-1,onUpdate:function(){t.goToAndStop(Math.round(this.target.frame),!0)},Ease:Linear.easeNone});var n=new ScrollMagic.Controller;new ScrollMagic.Scene({triggerElement:".env-three",offset:300,duration:3e3}).setTween(e).setPin("#lottie-three").addTo(n)}));var o=bodymovin.loadAnimation({container:document.getElementById("lottie"),path:"https://assets.lottiefiles.com/datafiles/jW5K6vtuzJFJSxd/data.json",renderer:"svg",loop:!1,autoplay:!1,name:"Bike"});o.addEventListener("complete",()=>{const e=document.querySelector(".tut1-succes"),t=document.querySelector(".tut1-instruction");e.classList.remove("hidden"),t.classList.add("hidden")},!1),r.addEventListener("input",()=>{let e=r.value;const t=document.querySelector(".tut1-hand"),n=document.querySelector(".tut1-instruction-text");50==e&&(o.play(),t.classList.add("hidden"),setTimeout((function(){n.textContent="Sleep de wash volledig naar rechts.",o.pause()}),2e3)),100==e&&o.play()},!1)})()}]);