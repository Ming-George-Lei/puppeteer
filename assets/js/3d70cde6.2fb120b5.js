/*! For license information please see 3d70cde6.2fb120b5.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[45529],{64393:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var n=r(85893),s=r(11151);const i={},o="FAQ",a={id:"faq",title:"FAQ",description:"Q: Who maintains Puppeteer?",source:"@site/../docs/faq.md",sourceDirName:".",slug:"/faq",permalink:"/next/faq",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Supported browsers",permalink:"/next/supported-browsers"}},p={},d=[{value:"Q: Who maintains Puppeteer?",id:"q-who-maintains-puppeteer",level:2},{value:"Q: What is the status of cross-browser support?",id:"q-what-is-the-status-of-cross-browser-support",level:2},{value:"Q: Does Puppeteer support WebDriver BiDi?",id:"q-does-puppeteer-support-webdriver-bidi",level:2},{value:"Q: Will keep Puppeteer supporting CDP?",id:"q-will-keep-puppeteer-supporting-cdp",level:2},{value:"Q: What are Puppeteer\u2019s goals and principles?",id:"q-what-are-puppeteers-goals-and-principles",level:2},{value:"Q: Is Puppeteer a replacement for Selenium?",id:"q-is-puppeteer-a-replacement-for-selenium",level:2},{value:"Q: Why doesn\u2019t Puppeteer v.XXX work with a certain version of Chrome or Firefox?",id:"q-why-doesnt-puppeteer-vxxx-work-with-a-certain-version-of-chrome-or-firefox",level:2},{value:"Q: Which Chrome and Firefox version does Puppeteer use?",id:"q-which-chrome-and-firefox-version-does-puppeteer-use",level:2},{value:"Q: What\u2019s considered a \u201cNavigation\u201d?",id:"q-whats-considered-a-navigation",level:2},{value:"Q: What\u2019s the difference between a \u201ctrusted&quot; and &quot;untrusted&quot; input event?",id:"q-whats-the-difference-between-a-trusted-and-untrusted-input-event",level:2},{value:"Q: Does Puppeteer support media and audio playback?",id:"q-does-puppeteer-support-media-and-audio-playback",level:2},{value:"Q: I am having trouble installing / running Puppeteer in my test environment. Where should I look for help?",id:"q-i-am-having-trouble-installing--running-puppeteer-in-my-test-environment-where-should-i-look-for-help",level:2},{value:"Q: I have more questions! Where do I ask?",id:"q-i-have-more-questions-where-do-i-ask",level:2}];function l(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"faq",children:"FAQ"}),"\n",(0,n.jsx)(t.h2,{id:"q-who-maintains-puppeteer",children:"Q: Who maintains Puppeteer?"}),"\n",(0,n.jsxs)(t.p,{children:["The Chrome Browser Automation team maintains the library, but we'd love your help and\nexpertise on the project! See our\n",(0,n.jsx)(t.a,{href:"https://pptr.dev/contributing",children:"contributing guide"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"q-what-is-the-status-of-cross-browser-support",children:"Q: What is the status of cross-browser support?"}),"\n",(0,n.jsx)(t.p,{children:"From Puppeteer v23.0.0 onwards Puppeteer provides support for both Chrome and Firefox."}),"\n",(0,n.jsx)(t.p,{children:"To automate Chrome Puppeteer uses the Chrome DevTools Protocol (CDP) by default, but it can\nalso be automated using WebDriver BiDi which is the default for automating Firefox."}),"\n",(0,n.jsxs)(t.p,{children:["To understand the subtle differences in API support refer to our\n",(0,n.jsx)(t.a,{href:"https://pptr.dev/webdriver-bidi",children:"WebDriver BiDi guide"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"q-does-puppeteer-support-webdriver-bidi",children:"Q: Does Puppeteer support WebDriver BiDi?"}),"\n",(0,n.jsx)(t.p,{children:"From Puppeteer v23.0.0 and up Puppeteer has production-ready support for WebDriver BiDi\nto automate both Chrome and Firefox."}),"\n",(0,n.jsx)(t.h2,{id:"q-will-keep-puppeteer-supporting-cdp",children:"Q: Will keep Puppeteer supporting CDP?"}),"\n",(0,n.jsx)(t.p,{children:"We are not going to stop supporting automation of Chrome with CDP - despite\nPuppeteer's support for WebDriver BiDi. To not break existing automations relying on CDP,\nbut also to keep enabling automation use-cases unique to Chrome and not standardized\nwith WebDriver BiDi."}),"\n",(0,n.jsx)(t.h2,{id:"q-what-are-puppeteers-goals-and-principles",children:"Q: What are Puppeteer\u2019s goals and principles?"}),"\n",(0,n.jsx)(t.p,{children:"The goals of the project are:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Provide a reference implementation that highlights the capabilities of the\n",(0,n.jsx)(t.a,{href:"https://chromedevtools.github.io/devtools-protocol/",children:"Chrome DevTools"}),"\nand ",(0,n.jsx)(t.a,{href:"https://w3c.github.io/webdriver-bidi/",children:"WebDriver BiDi"})," protocols."]}),"\n",(0,n.jsx)(t.li,{children:"Grow the adoption of automated cross-browser testing."}),"\n",(0,n.jsx)(t.li,{children:"Help dogfood new DevTools Protocol and WebDriver BiDi features...and catch bugs!"}),"\n",(0,n.jsx)(t.li,{children:"Learn more about the pain points of automated browser testing and help fill\nthose gaps."}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["We adapt\n",(0,n.jsx)(t.a,{href:"https://www.chromium.org/developers/core-principles",children:"Chromium principles"})," to\nhelp us drive product decisions:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Speed"}),": Puppeteer has almost zero performance overhead over an automated\npage."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Security"}),": Puppeteer operates off-process with respect to the browser, making\nit safe to automate potentially malicious pages."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Stability"}),": Puppeteer should not be flaky and should not leak memory."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Simplicity"}),": Puppeteer provides a high-level API that\u2019s easy to use,\nunderstand, and debug."]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"q-is-puppeteer-a-replacement-for-selenium",children:"Q: Is Puppeteer a replacement for Selenium?"}),"\n",(0,n.jsx)(t.p,{children:"Puppeteer is a Node.js based reference implementation of how to automate browsers\nwith CDP and WebDriver BiDi - the same web standard the Selenium project is also\ncontributing to."}),"\n",(0,n.jsx)(t.p,{children:"The Selenium project goes beyond what Puppeteer offers in multiple aspects: it provides\nbindings for more languages than just JavaScript and for example it also offers tooling\nto orchestrate automation at large, like Selenium Grid. Both is beyond Puppeteer's scope."}),"\n",(0,n.jsx)(t.p,{children:"There are community projects that add capabilities to Puppeteer beyond its core,\nmaking things like testing more convenient. For example see:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://github.com/smooth-code/jest-puppeteer",children:"jest-puppeteer"})," or"]}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://pptr.dev/integrations/ng-schematics",children:"Puppeteer's Angular integration"})}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"q-why-doesnt-puppeteer-vxxx-work-with-a-certain-version-of-chrome-or-firefox",children:"Q: Why doesn\u2019t Puppeteer v.XXX work with a certain version of Chrome or Firefox?"}),"\n",(0,n.jsx)(t.p,{children:"Every Puppeteer release is tightly bundled with a specific browser release\nto ensure compatibility with the implementation of the underlying protocols,\nthe Chrome DevTools Protocol and WebDriver BiDi."}),"\n",(0,n.jsx)(t.p,{children:"This is to prevent changes in either Chrome or Firefox not unexpectedly break Puppeteer."}),"\n",(0,n.jsx)(t.h2,{id:"q-which-chrome-and-firefox-version-does-puppeteer-use",children:"Q: Which Chrome and Firefox version does Puppeteer use?"}),"\n",(0,n.jsxs)(t.p,{children:["Look for the ",(0,n.jsx)(t.code,{children:"chrome"})," and ",(0,n.jsx)(t.code,{children:"firefox"})," entries in\n",(0,n.jsx)(t.a,{href:"https://github.com/puppeteer/puppeteer/blob/main/packages/puppeteer-core/src/revisions.ts",children:"revisions.ts"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"q-whats-considered-a-navigation",children:"Q: What\u2019s considered a \u201cNavigation\u201d?"}),"\n",(0,n.jsxs)(t.p,{children:["From Puppeteer\u2019s standpoint, ",(0,n.jsx)(t.strong,{children:"\u201cnavigation\u201d is anything that changes a page\u2019s\nURL"}),". Aside from regular navigation where the browser hits the network to fetch\na new document from the web server, this includes\n",(0,n.jsx)(t.a,{href:"https://www.w3.org/TR/html5/single-page.html#scroll-to-fragid",children:"anchor navigations"}),"\nand ",(0,n.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/History_API",children:"History API"}),"\nusage."]}),"\n",(0,n.jsxs)(t.p,{children:["With this definition of \u201cnavigation,\u201d ",(0,n.jsx)(t.strong,{children:"Puppeteer works seamlessly with\nsingle-page applications."})]}),"\n",(0,n.jsx)(t.h2,{id:"q-whats-the-difference-between-a-trusted-and-untrusted-input-event",children:'Q: What\u2019s the difference between a \u201ctrusted" and "untrusted" input event?'}),"\n",(0,n.jsx)(t.p,{children:"In browsers, input events could be divided into two big groups: trusted vs.\nuntrusted."}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Trusted events"}),": events generated by users interacting with the page, e.g.\nusing a mouse or keyboard."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Untrusted event"}),": events generated by Web APIs, e.g. ",(0,n.jsx)(t.code,{children:"document.createEvent"}),"\nor ",(0,n.jsx)(t.code,{children:"element.click()"})," methods."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Websites can distinguish between these two groups:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["using an\n",(0,n.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Event/isTrusted",children:(0,n.jsx)(t.code,{children:"Event.isTrusted"})}),"\nevent flag"]}),"\n",(0,n.jsxs)(t.li,{children:["sniffing for accompanying events. For example, every trusted ",(0,n.jsx)(t.code,{children:"'click'"})," event\nis preceded by ",(0,n.jsx)(t.code,{children:"'mousedown'"})," and ",(0,n.jsx)(t.code,{children:"'mouseup'"})," events."]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["For automation purposes it\u2019s important to generate trusted events. ",(0,n.jsx)(t.strong,{children:"All input\nevents generated with Puppeteer are trusted and fire proper accompanying\nevents."})," If, for some reason, one needs an untrusted event, it\u2019s always\npossible to hop into a page context with ",(0,n.jsx)(t.code,{children:"page.evaluate"})," and generate a fake\nevent:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",children:"await page.evaluate(() => {\n  document.querySelector('button[type=submit]').click();\n});\n"})}),"\n",(0,n.jsx)(t.h2,{id:"q-does-puppeteer-support-media-and-audio-playback",children:"Q: Does Puppeteer support media and audio playback?"}),"\n",(0,n.jsxs)(t.p,{children:["Puppeteer uses ",(0,n.jsx)(t.a,{href:"https://developer.chrome.com/blog/chrome-for-testing/",children:"Chrome for Testing"})," binaries\nby default which ship with properietary codecs support starting from\n",(0,n.jsx)(t.a,{href:"https://chromiumdash.appspot.com/commit/12d607016c31ea13579e897740c765be189ed6eb",children:"M120"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"q-i-am-having-trouble-installing--running-puppeteer-in-my-test-environment-where-should-i-look-for-help",children:"Q: I am having trouble installing / running Puppeteer in my test environment. Where should I look for help?"}),"\n",(0,n.jsxs)(t.p,{children:["We have a\n",(0,n.jsx)(t.a,{href:"https://pptr.dev/troubleshooting",children:"troubleshooting"}),"\nguide for various operating systems that lists the required dependencies."]}),"\n",(0,n.jsx)(t.h2,{id:"q-i-have-more-questions-where-do-i-ask",children:"Q: I have more questions! Where do I ask?"}),"\n",(0,n.jsx)(t.p,{children:"There are many ways to get help on Puppeteer:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["For questions: ",(0,n.jsx)(t.a,{href:"https://stackoverflow.com/questions/tagged/puppeteer",children:"Stack Overflow"})]}),"\n",(0,n.jsxs)(t.li,{children:["For bug reports: ",(0,n.jsx)(t.a,{href:"https://github.com/puppeteer/puppeteer/issues",children:"GitHub Issues"})]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Make sure to search these channels before posting your question."})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},75251:(e,t,r)=>{var n=r(67294),s=Symbol.for("react.element"),i=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,r){var n,i={},d=null,l=null;for(n in void 0!==r&&(d=""+r),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(l=t.ref),t)o.call(t,n)&&!p.hasOwnProperty(n)&&(i[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===i[n]&&(i[n]=t[n]);return{$$typeof:s,type:e,key:d,ref:l,props:i,_owner:a.current}}t.Fragment=i,t.jsx=d,t.jsxs=d},85893:(e,t,r)=>{e.exports=r(75251)},11151:(e,t,r)=>{r.d(t,{Z:()=>a,a:()=>o});var n=r(67294);const s={},i=n.createContext(s);function o(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);