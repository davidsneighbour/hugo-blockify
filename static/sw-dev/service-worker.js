if(!self.define){let e,t={};const n=(n,o)=>(n=new URL(n+".js",o).href,t[n]||new Promise((t=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=t,document.head.appendChild(e)}else e=n,importScripts(n),t()})).then((()=>{let e=t[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(o,i)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(t[r])return;let s={};const c=e=>n(e,r),l={module:{uri:r},exports:s,require:c};t[r]=Promise.all(o.map((e=>l[e]||c(e)))).then((e=>(i(...e),s)))}}define(["./workbox-0858eadd"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"main.b46948ffbb2c1dc8e7e3.js",revision:null}],{})}));
//# sourceMappingURL=service-worker.js.map
