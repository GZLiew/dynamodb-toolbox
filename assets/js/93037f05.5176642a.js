"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3029],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,y=m["".concat(s,".").concat(d)]||m[d]||l[d]||o;return n?r.createElement(y,i(i({ref:t},u),{},{components:n})):r.createElement(y,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4477:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>l,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const o={title:"BatchGet",sidebar_custom_props:{sidebarActionType:"read"}},i="BatchGetRequest",c={unversionedId:"entities/actions/batch-get/index",id:"entities/actions/batch-get/index",title:"BatchGet",description:"Builds a request to get an entity item, to be used within BatchGetCommands:",source:"@site/docs/3-entities/3-actions/6-batch-get/index.md",sourceDirName:"3-entities/3-actions/6-batch-get",slug:"/entities/actions/batch-get/",permalink:"/docs/entities/actions/batch-get/",draft:!1,tags:[],version:"current",frontMatter:{title:"BatchGet",sidebar_custom_props:{sidebarActionType:"read"}},sidebar:"tutorialSidebar",previous:{title:"Batching",permalink:"/docs/entities/actions/batching/"},next:{title:"BatchPut",permalink:"/docs/entities/actions/batch-put/"}},s={},p=[{value:"Request",id:"request",level:2},{value:"<code>.key(...)</code>",id:"key",level:3}],u={toc:p};function l(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"batchgetrequest"},"BatchGetRequest"),(0,a.kt)("p",null,"Builds a request to get an entity item, to be used within ",(0,a.kt)("a",{parentName:"p",href:"/docs/tables/actions/batch-get/"},(0,a.kt)("inlineCode",{parentName:"a"},"BatchGetCommands")),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { BatchGetRequest } from 'dynamodb-toolbox/entity/actions/batchGet'\n\nconst request = PokemonEntity.build(BatchGetRequest)\n\nconst params = request.params()\n")),(0,a.kt)("h2",{id:"request"},"Request"),(0,a.kt)("h3",{id:"key"},(0,a.kt)("inlineCode",{parentName:"h3"},".key(...)")),(0,a.kt)("p",{style:{marginTop:"-15px"}},(0,a.kt)("i",null,"(required)")),(0,a.kt)("p",null,"The key of the item to get (i.e. attributes that are tagged as part of the primary key):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const request = PokemonEntity.build(BatchGetRequest).key({\n  pokemonId: 'pikachu1'\n})\n")),(0,a.kt)("p",null,"You can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"KeyInput")," type from the ",(0,a.kt)("a",{parentName:"p",href:"/docs/entities/actions/parse/"},(0,a.kt)("inlineCode",{parentName:"a"},"EntityParser"))," action to explicitly type an object as a ",(0,a.kt)("inlineCode",{parentName:"p"},"BatchGetRequest")," key object:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import type { KeyInput } from 'dynamodb-toolbox/entity/actions/parse'\n\nconst key: KeyInput<typeof PokemonEntity> = {\n  pokemonId: 'pikachu1'\n}\n\nconst request =\n  PokemonEntity.build(BatchGetRequest).key(key)\n")))}l.isMDXComponent=!0}}]);