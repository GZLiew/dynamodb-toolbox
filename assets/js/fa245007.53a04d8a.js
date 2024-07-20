"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4110],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=a,y=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(y,i(i({ref:t},p),{},{components:n})):r.createElement(y,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},12265:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const o={title:"BatchDelete",sidebar_custom_props:{sidebarActionType:"delete"}},i="BatchDeleteRequest",s={unversionedId:"entities/actions/batch-delete/index",id:"entities/actions/batch-delete/index",title:"BatchDelete",description:"Builds a request to delete an entity item, to be used within BatchWriteCommands:",source:"@site/docs/3-entities/3-actions/8-batch-delete/index.md",sourceDirName:"3-entities/3-actions/8-batch-delete",slug:"/entities/actions/batch-delete/",permalink:"/docs/entities/actions/batch-delete/",draft:!1,tags:[],version:"current",frontMatter:{title:"BatchDelete",sidebar_custom_props:{sidebarActionType:"delete"}},sidebar:"tutorialSidebar",previous:{title:"BatchPut",permalink:"/docs/entities/actions/batch-put/"},next:{title:"Transactions",permalink:"/docs/entities/actions/transactions/"}},c={},l=[{value:"Request",id:"request",level:2},{value:"<code>.key(...)</code>",id:"key",level:3}],p={toc:l};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"batchdeleterequest"},"BatchDeleteRequest"),(0,a.kt)("p",null,"Builds a request to delete an entity item, to be used within ",(0,a.kt)("a",{parentName:"p",href:"/docs/tables/actions/batch-write/"},(0,a.kt)("inlineCode",{parentName:"a"},"BatchWriteCommands")),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { BatchDeleteRequest } from 'dynamodb-toolbox/entity/actions/batchDelete'\n\nconst request = PokemonEntity.build(BatchDeleteRequest)\n\nconst params = request.params()\n")),(0,a.kt)("h2",{id:"request"},"Request"),(0,a.kt)("h3",{id:"key"},(0,a.kt)("inlineCode",{parentName:"h3"},".key(...)")),(0,a.kt)("p",{style:{marginTop:"-15px"}},(0,a.kt)("i",null,"(required)")),(0,a.kt)("p",null,"The key of the item to delete (i.e. attributes that are tagged as part of the primary key):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const request = PokemonEntity.build(BatchDeleteRequest).key(\n  { pokemonId: 'pikachu1' }\n)\n")),(0,a.kt)("p",null,"You can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"KeyInput")," type from the ",(0,a.kt)("a",{parentName:"p",href:"/docs/entities/actions/parse/"},(0,a.kt)("inlineCode",{parentName:"a"},"EntityParser"))," action to explicitly type an object as a ",(0,a.kt)("inlineCode",{parentName:"p"},"BatchDeleteRequest")," key object:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import type { KeyInput } from 'dynamodb-toolbox/entity/actions/parse'\n\nconst key: KeyInput<typeof PokemonEntity> = {\n  pokemonId: 'pikachu1'\n}\n\nconst request = PokemonEntity.build(BatchDeleteRequest).key(\n  key\n)\n")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Contrary to ",(0,a.kt)("a",{parentName:"p",href:"/docs/entities/actions/delete-item/"},(0,a.kt)("inlineCode",{parentName:"a"},"DeleteItemCommands")),", batch deletes cannot be ",(0,a.kt)("a",{parentName:"p",href:"/docs/entities/actions/parse-condition/"},"conditioned"),", nor return the values of the deleted items.")))}u.isMDXComponent=!0}}]);