/*! For license information please see 653a769d.2b94e745.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[63224],{10770:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var o=n(85893),i=n(11151);const r={sidebar_label:"PredefinedNetworkConditions"},a="PredefinedNetworkConditions variable",s={id:"api/puppeteer.predefinednetworkconditions",title:"PredefinedNetworkConditions variable",description:"A list of pre-defined network conditions to be used with Page.emulateNetworkConditions().",source:"@site/versioned_docs/version-23.1.0/api/puppeteer.predefinednetworkconditions.md",sourceDirName:"api",slug:"/api/puppeteer.predefinednetworkconditions",permalink:"/api/puppeteer.predefinednetworkconditions",draft:!1,unlisted:!1,tags:[],version:"23.1.0",frontMatter:{sidebar_label:"PredefinedNetworkConditions"},sidebar:"api",previous:{title:"Point",permalink:"/api/puppeteer.point"},next:{title:"Predicate",permalink:"/api/puppeteer.predicate"}},d={},p=[{value:"Signature",id:"signature",level:3},{value:"Example",id:"example",level:2}];function l(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"predefinednetworkconditions-variable",children:"PredefinedNetworkConditions variable"}),"\n",(0,o.jsxs)(t.p,{children:["A list of pre-defined network conditions to be used with ",(0,o.jsx)(t.a,{href:"/api/puppeteer.page.emulatenetworkconditions",children:"Page.emulateNetworkConditions()"}),"."]}),"\n",(0,o.jsx)(t.h3,{id:"signature",children:"Signature"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-typescript",children:"PredefinedNetworkConditions: Readonly<{\n  'Slow 3G': NetworkConditions;\n  'Fast 3G': NetworkConditions;\n  'Slow 4G': NetworkConditions;\n  'Fast 4G': NetworkConditions;\n}>;\n"})}),"\n",(0,o.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-ts",children:"import {PredefinedNetworkConditions} from 'puppeteer';\n(async () => {\n  const browser = await puppeteer.launch();\n  const page = await browser.newPage();\n  await page.emulateNetworkConditions(PredefinedNetworkConditions['Slow 3G']);\n  await page.goto('https://www.google.com');\n  await page.emulateNetworkConditions(PredefinedNetworkConditions['Fast 3G']);\n  await page.goto('https://www.google.com');\n  await page.emulateNetworkConditions(PredefinedNetworkConditions['Slow 4G']); // alias to Fast 3G.\n  await page.goto('https://www.google.com');\n  await page.emulateNetworkConditions(PredefinedNetworkConditions['Fast 4G']);\n  await page.goto('https://www.google.com');\n  // other actions...\n  await browser.close();\n})();\n"})})]})}function c(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},75251:(e,t,n)=>{var o=n(67294),i=Symbol.for("react.element"),r=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,s=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function p(e,t,n){var o,r={},p=null,l=null;for(o in void 0!==n&&(p=""+n),void 0!==t.key&&(p=""+t.key),void 0!==t.ref&&(l=t.ref),t)a.call(t,o)&&!d.hasOwnProperty(o)&&(r[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps)void 0===r[o]&&(r[o]=t[o]);return{$$typeof:i,type:e,key:p,ref:l,props:r,_owner:s.current}}t.Fragment=r,t.jsx=p,t.jsxs=p},85893:(e,t,n)=>{e.exports=n(75251)},11151:(e,t,n)=>{n.d(t,{Z:()=>s,a:()=>a});var o=n(67294);const i={},r=o.createContext(i);function a(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);