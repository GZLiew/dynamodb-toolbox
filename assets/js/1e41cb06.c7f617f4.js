"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9507],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=p(n),d=r,y=c["".concat(l,".").concat(d)]||c[d]||u[d]||o;return n?a.createElement(y,i(i({ref:t},m),{},{components:n})):a.createElement(y,i({ref:t},m))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},89937:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const o={title:"Overview"},i="What is DynamoDB-Toolbox?",s={unversionedId:"getting-started/overview/index",id:"getting-started/overview/index",title:"Overview",description:"---",source:"@site/docs/1-getting-started/1-overview/index.md",sourceDirName:"1-getting-started/1-overview",slug:"/getting-started/overview/",permalink:"/docs/getting-started/overview/",draft:!1,tags:[],version:"current",frontMatter:{title:"Overview"},sidebar:"tutorialSidebar",next:{title:"Installation",permalink:"/docs/getting-started/installation/"}},l={},p=[{value:"Why use it?",id:"why-use-it",level:2}],m={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"what-is-dynamodb-toolbox"},"What is DynamoDB-Toolbox?"),(0,r.kt)("hr",null),(0,r.kt)("p",{align:"center",style:{fontSize:"larger"}},"DynamoDB-Toolbox is a ",(0,r.kt)("b",null,"light-weight")," and ",(0,r.kt)("b",null,"type-safe"),(0,r.kt)("br",null),(0,r.kt)("b",null,"query builder")," for DynamoDB and TypeScript."),(0,r.kt)("hr",null),(0,r.kt)("p",null,"It provides as a light abstraction layer over the SDK that ",(0,r.kt)("strong",{parentName:"p"},"turns your DynamoDB journey into a \u2728 bliss \u2728"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ud83e\udd17 ",(0,r.kt)("strong",{parentName:"li"},"Simpler queries"),": DynamoDB-Toolbox does all the heavy-lifting of crafting those ",(0,r.kt)("strong",{parentName:"li"},"cumbersome DynamoDB requests"),". It make your code ",(0,r.kt)("strong",{parentName:"li"},"clearer"),", ",(0,r.kt)("strong",{parentName:"li"},"more succinct")," and ",(0,r.kt)("strong",{parentName:"li"},"easier to maintain"),"."),(0,r.kt)("li",{parentName:"ul"},"\ud83d\udcd0 ",(0,r.kt)("strong",{parentName:"li"},"Data validation"),": Both pushed and fetched items are ",(0,r.kt)("strong",{parentName:"li"},"validated")," against your schemas, which guarantees the ",(0,r.kt)("strong",{parentName:"li"},"consistency")," of your data and the ",(0,r.kt)("strong",{parentName:"li"},"reliability")," of your code."),(0,r.kt)("li",{parentName:"ul"},"\u2728 ",(0,r.kt)("strong",{parentName:"li"},"A rich schema syntax")," that supports a broad range of edge cases like ",(0,r.kt)("strong",{parentName:"li"},"defaults"),", ",(0,r.kt)("strong",{parentName:"li"},"composition"),", ",(0,r.kt)("strong",{parentName:"li"},"transformation")," and ",(0,r.kt)("strong",{parentName:"li"},"polymorphism")),(0,r.kt)("li",{parentName:"ul"},"\ud83c\udf08 ",(0,r.kt)("strong",{parentName:"li"},"Type-safety pushed to the limit"),": Increase your development velocity with ",(0,r.kt)("strong",{parentName:"li"},"instantaneous feedbacks")," and ",(0,r.kt)("strong",{parentName:"li"},"slick auto-completion")),(0,r.kt)("li",{parentName:"ul"},"\ud83c\udf34 ",(0,r.kt)("strong",{parentName:"li"},"Tree-shakable"),": Only import what you need"),(0,r.kt)("li",{parentName:"ul"},"\u261d\ufe0f ",(0,r.kt)("strong",{parentName:"li"},"Single-table designs"),": DynamoDB-Toolbox makes ",(0,r.kt)("strong",{parentName:"li"},"querying multiple entities within the same table extremely simple"),", although it works just as well with multiple tables.")),(0,r.kt)("h2",{id:"why-use-it"},"Why use it?"),(0,r.kt)("p",null,"If you're here, we're assuming you know DynamoDB. If you don't, check out the ",(0,r.kt)("a",{parentName:"p",href:"https://aws.amazon.com/dynamodb"},"official AWS docs"),"."),(0,r.kt)("admonition",{title:"TL;DR",type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"https://aws.amazon.com/dynamodb"},"DynamoDB")," is a key-value DB designed to run high-performance applications at any scale. It ",(0,r.kt)("strong",{parentName:"p"},"automatically scales")," up and down based on your current traffic, and removes the need to maintain connections, which makes it the ",(0,r.kt)("strong",{parentName:"p"},"go-to DB for many projects"),", including (but not limited to) ",(0,r.kt)("strong",{parentName:"p"},"serverless applications"),".")),(0,r.kt)("p",null,"If you've ever used the official ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/dynamodb-example-dynamodb-utilities.html"},"Document Client"),", you know that ",(0,r.kt)("strong",{parentName:"p"},"it\u2019s painful to use"),". Take a look at this ",(0,r.kt)("inlineCode",{parentName:"p"},"UpdateCommand")," example straight from the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/dynamodb/command/UpdateItemCommand/"},"AWS documentation"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"await documentClient.send(\n  new UpdateCommand({\n    TableName: 'Music',\n    Key: {\n      // \ud83d\udc47 No type-safety on the Primary Key\n      artist: 'Acme Band',\n      songTitle: 'Happy Day'\n    },\n    // \ud83d\udc47 Complex string expressions (+ still no type-safety)\n    UpdateExpression: 'SET #Y = :y, #AT = :t',\n    // \ud83d\udc47 Attribute names provided separately\n    ExpressionAttributeNames: {\n      '#AT': 'albumTitle',\n      '#Y': 'year'\n    },\n    // \ud83d\udc47 Attribute values as well\n    ExpressionAttributeValues: {\n      // \ud83d\udc47 No validation or type-safety to enforce DB schema\n      ':t': 'Louder Than Ever',\n      ':y': '2015'\n    },\n    ReturnValues: 'ALL_NEW'\n  })\n)\n")),(0,r.kt)("p",null,"It's a very simple example (updating two fields of a ",(0,r.kt)("inlineCode",{parentName:"p"},"Music")," item), yet already cumbersome \ud83d\ude30"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Things only get messier as your data grows in complexity"),": What if your items have 20 attributes? With some of them nested or optional? What if you want to index an item depending on its value? What about polymorphism?"),(0,r.kt)("p",null,"In those cases, which are fairly common, ",(0,r.kt)("strong",{parentName:"p"},"the required code to generate those requests gets very hard to maintain"),". That's when DynamoDB-Toolbox comes to the rescue \ud83d\udcaa"),(0,r.kt)("p",null,"Here's is a quick preview with the DynamoDB-Toolbox version of the ",(0,r.kt)("inlineCode",{parentName:"p"},"UpdateCommand")," described above:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// Validated AND type-safe syntax \ud83d\ude4c\nawait MusicEntity.build(UpdateItemCommand)\n  .item({\n    artist: 'Acme Band',\n    songTitle: 'Happy Day',\n    albumTitle: 'Louder Than Ever',\n    year: '2015'\n  })\n  .options({ returnValues: 'ALL_NEW' })\n  .send()\n")),(0,r.kt)("p",null,"And just like that, we went from an obscure 20-lines class to a ",(0,r.kt)("strong",{parentName:"p"},"readable and elegant 10-liners")," \ud83e\udd29"),(0,r.kt)("p",null,"Not bad, eh? Let's ",(0,r.kt)("a",{parentName:"p",href:"/docs/getting-started/installation/"},"dive into it"),"!"))}u.isMDXComponent=!0}}]);