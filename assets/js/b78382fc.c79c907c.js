/*! For license information please see b78382fc.c79c907c.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[39261],{91779:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=t(85893),a=t(11151);const i={sidebar_label:"Page.waitForFunction"},s="Page.waitForFunction() method",o={id:"api/puppeteer.page.waitforfunction",title:"Page.waitForFunction() method",description:"Waits for the provided function, pageFunction, to return a truthy value when evaluated in the page's context.",source:"@site/versioned_docs/version-23.1.0/api/puppeteer.page.waitforfunction.md",sourceDirName:"api",slug:"/api/puppeteer.page.waitforfunction",permalink:"/api/puppeteer.page.waitforfunction",draft:!1,unlisted:!1,tags:[],version:"23.1.0",frontMatter:{sidebar_label:"Page.waitForFunction"},sidebar:"api",previous:{title:"Page.waitForFrame",permalink:"/api/puppeteer.page.waitforframe"},next:{title:"Page.waitForNavigation",permalink:"/api/puppeteer.page.waitfornavigation"}},c={},p=[{value:"Signature",id:"signature",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Example 1",id:"example-1",level:2},{value:"Example 2",id:"example-2",level:2},{value:"Example 3",id:"example-3",level:2}];function l(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"pagewaitforfunction-method",children:"Page.waitForFunction() method"}),"\n",(0,r.jsxs)(n.p,{children:["Waits for the provided function, ",(0,r.jsx)(n.code,{children:"pageFunction"}),", to return a truthy value when evaluated in the page's context."]}),"\n",(0,r.jsx)(n.h3,{id:"signature",children:"Signature"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"class Page {\n  waitForFunction<\n    Params extends unknown[],\n    Func extends EvaluateFunc<Params> = EvaluateFunc<Params>,\n  >(\n    pageFunction: Func | string,\n    options?: FrameWaitForFunctionOptions,\n    ...args: Params\n  ): Promise<HandleFor<Awaited<ReturnType<Func>>>>;\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:(0,r.jsx)(n.p,{children:"Parameter"})}),(0,r.jsx)("th",{children:(0,r.jsx)(n.p,{children:"Type"})}),(0,r.jsx)("th",{children:(0,r.jsx)(n.p,{children:"Description"})})]})}),(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(n.p,{children:"pageFunction"})}),(0,r.jsx)("td",{children:(0,r.jsx)(n.p,{children:"Func | string"})}),(0,r.jsx)("td",{children:(0,r.jsx)(n.p,{children:"Function to be evaluated in browser context until it returns a truthy value."})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(n.p,{children:"options"})}),(0,r.jsx)("td",{children:(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/api/puppeteer.framewaitforfunctionoptions",children:"FrameWaitForFunctionOptions"})})}),(0,r.jsx)("td",{children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"(Optional)"})," Options for configuring waiting behavior."]})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(n.p,{children:"args"})}),(0,r.jsx)("td",{children:(0,r.jsx)(n.p,{children:"Params"})}),(0,r.jsx)("td",{})]})]})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Returns:"})}),"\n",(0,r.jsxs)(n.p,{children:["Promise<",(0,r.jsx)(n.a,{href:"/api/puppeteer.handlefor",children:"HandleFor"}),"<Awaited<ReturnType<Func>>>>"]}),"\n",(0,r.jsx)(n.h2,{id:"example-1",children:"Example 1"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/api/puppeteer.page.waitforfunction",children:"Page.waitForFunction()"})," can be used to observe a viewport size change:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"import puppeteer from 'puppeteer';\n(async () => {\n  const browser = await puppeteer.launch();\n  const page = await browser.newPage();\n  const watchDog = page.waitForFunction('window.innerWidth < 100');\n  await page.setViewport({width: 50, height: 50});\n  await watchDog;\n  await browser.close();\n})();\n"})}),"\n",(0,r.jsx)(n.h2,{id:"example-2",children:"Example 2"}),"\n",(0,r.jsxs)(n.p,{children:["Arguments can be passed from Node.js to ",(0,r.jsx)(n.code,{children:"pageFunction"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"const selector = '.foo';\nawait page.waitForFunction(\n  selector => !!document.querySelector(selector),\n  {},\n  selector\n);\n"})}),"\n",(0,r.jsx)(n.h2,{id:"example-3",children:"Example 3"}),"\n",(0,r.jsxs)(n.p,{children:["The provided ",(0,r.jsx)(n.code,{children:"pageFunction"})," can be asynchronous:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"const username = 'github-username';\nawait page.waitForFunction(\n  async username => {\n    const githubResponse = await fetch(\n      `https://api.github.com/users/${username}`\n    );\n    const githubUser = await githubResponse.json();\n    // show the avatar\n    const img = document.createElement('img');\n    img.src = githubUser.avatar_url;\n    // wait 3 seconds\n    await new Promise((resolve, reject) => setTimeout(resolve, 3000));\n    img.remove();\n  },\n  {},\n  username\n);\n"})})]})}function d(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},75251:(e,n,t)=>{var r=t(67294),a=Symbol.for("react.element"),i=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function p(e,n,t){var r,i={},p=null,l=null;for(r in void 0!==t&&(p=""+t),void 0!==n.key&&(p=""+n.key),void 0!==n.ref&&(l=n.ref),n)s.call(n,r)&&!c.hasOwnProperty(r)&&(i[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===i[r]&&(i[r]=n[r]);return{$$typeof:a,type:e,key:p,ref:l,props:i,_owner:o.current}}n.Fragment=i,n.jsx=p,n.jsxs=p},85893:(e,n,t)=>{e.exports=t(75251)},11151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>s});var r=t(67294);const a={},i=r.createContext(a);function s(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);