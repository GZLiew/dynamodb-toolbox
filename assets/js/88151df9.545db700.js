"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6595],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>b});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),b=r,d=u["".concat(s,".").concat(b)]||u[b]||m[b]||o;return n?a.createElement(d,i(i({ref:t},p),{},{components:n})):a.createElement(d,i({ref:t},p))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},12923:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var a=n(87462),r=(n(67294),n(3905));const o={title:"Batching",sidebar_custom_props:{sidebarActionTitle:!0}},i="Batching",c={unversionedId:"tables/actions/batching/index",id:"tables/actions/batching/index",title:"Batching",description:"DynamoDB-Toolbox exposes the following actions to perform batch operations on one or several Tables:",source:"@site/docs/2-tables/2-actions/3-batching/index.md",sourceDirName:"2-tables/2-actions/3-batching",slug:"/tables/actions/batching/",permalink:"/docs/tables/actions/batching/",draft:!1,tags:[],version:"current",frontMatter:{title:"Batching",sidebar_custom_props:{sidebarActionTitle:!0}},sidebar:"tutorialSidebar",previous:{title:"Query",permalink:"/docs/tables/actions/query/"},next:{title:"BatchGet",permalink:"/docs/tables/actions/batch-get/"}},s={},l=[],p={toc:l};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"batching"},"Batching"),(0,r.kt)("p",null,"DynamoDB-Toolbox exposes the following actions to perform batch operations on one or several ",(0,r.kt)("inlineCode",{parentName:"p"},"Tables"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/tables/actions/batch-get/"},(0,r.kt)("inlineCode",{parentName:"a"},"BatchGetCommand")),": Groups one or several ",(0,r.kt)("a",{parentName:"li",href:"/docs/entities/actions/batch-get/"},(0,r.kt)("inlineCode",{parentName:"a"},"BatchGetRequests"))," from the ",(0,r.kt)("inlineCode",{parentName:"li"},"Table")," entities to execute a ",(0,r.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_BatchGetItem.html"},"BatchGetItem")," operation"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/tables/actions/batch-write/"},(0,r.kt)("inlineCode",{parentName:"a"},"BatchWriteCommand")),": Groups one or several ",(0,r.kt)("a",{parentName:"li",href:"/docs/entities/actions/batch-put/"},(0,r.kt)("inlineCode",{parentName:"a"},"BatchPutRequests"))," and ",(0,r.kt)("a",{parentName:"li",href:"/docs/entities/actions/batch-delete/"},(0,r.kt)("inlineCode",{parentName:"a"},"BatchDeleteRequests"))," from the ",(0,r.kt)("inlineCode",{parentName:"li"},"Table")," entities to execute a ",(0,r.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_BatchWriteItem.html"},"BatchWriteItem")," operation")))}m.isMDXComponent=!0}}]);