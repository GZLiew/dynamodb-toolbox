"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5785],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>p});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(a),p=r,h=d["".concat(s,".").concat(p)]||d[p]||m[p]||o;return a?n.createElement(h,i(i({ref:t},u),{},{components:a})):n.createElement(h,i({ref:t},u))}));function p(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(67294),r=a(86010);const o="tabItem_Ymn6";function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,i),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>C});var n=a(87462),r=a(67294),o=a(86010),i=a(12466),l=a(76775),s=a(91980),c=a(67392),u=a(50012);function m(e){return function(e){var t;return(null==(t=r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function d(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??m(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function p(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const n=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function b(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=d(e),[i,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[s,c]=h({queryString:a,groupId:n}),[m,b]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,u.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),f=(()=>{const e=s??m;return p({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{f&&l(f)}),[f]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),b(e)}),[c,b,o]),tabValues:o}}var f=a(72389);const k="tabList__CuJ",y="tabItem_LNqP";function N(e){let{className:t,block:a,selectedValue:l,selectValue:s,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:m}=(0,i.o5)(),d=e=>{const t=e.currentTarget,a=u.indexOf(t),n=c[a].value;n!==l&&(m(t),s(n))},p=e=>{var t;let a=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=u.indexOf(e.currentTarget)+1;a=u[t]??u[0];break}case"ArrowLeft":{const t=u.indexOf(e.currentTarget)-1;a=u[t]??u[u.length-1];break}}null==(t=a)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:i}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>u.push(e),onKeyDown:p,onClick:d},i,{className:(0,o.Z)("tabs__item",y,null==i?void 0:i.className,{"tabs__item--active":l===t})}),a??t)})))}function v(e){let{lazy:t,children:a,selectedValue:n}=e;const o=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function g(e){const t=b(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",k)},r.createElement(N,(0,n.Z)({},e,t)),r.createElement(v,(0,n.Z)({},e,t)))}function C(e){const t=(0,f.Z)();return r.createElement(g,(0,n.Z)({key:String(t)},e))}},72627:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>m});var n=a(87462),r=(a(67294),a(3905)),o=a(74866),i=a(85162);const l={title:"BatchWrite",sidebar_custom_props:{sidebarActionType:"write"}},s="BatchWriteCommand",c={unversionedId:"tables/actions/batch-write/index",id:"tables/actions/batch-write/index",title:"BatchWrite",description:"Groups one or several BatchPutRequest and BatchDeleteRequest from the Table entities to execute a BatchWriteItem operation.",source:"@site/docs/2-tables/2-actions/5-batch-write/index.md",sourceDirName:"2-tables/2-actions/5-batch-write",slug:"/tables/actions/batch-write/",permalink:"/docs/tables/actions/batch-write/",draft:!1,tags:[],version:"current",frontMatter:{title:"BatchWrite",sidebar_custom_props:{sidebarActionType:"write"}},sidebar:"tutorialSidebar",previous:{title:"BatchGet",permalink:"/docs/tables/actions/batch-get/"},next:{title:"Utilities",permalink:"/docs/tables/actions/utilities/"}},u={},m=[{value:"Request",id:"request",level:2},{value:"<code>.requests(...)</code>",id:"requests",level:3},{value:"Execution",id:"execution",level:2},{value:"Options",id:"options",level:3},{value:"Response",id:"response",level:3}],d={toc:m};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"batchwritecommand"},"BatchWriteCommand"),(0,r.kt)("p",null,"Groups one or several ",(0,r.kt)("a",{parentName:"p",href:"/docs/entities/actions/batch-put/"},(0,r.kt)("inlineCode",{parentName:"a"},"BatchPutRequest"))," and ",(0,r.kt)("a",{parentName:"p",href:"/docs/entities/actions/batch-delete/"},(0,r.kt)("inlineCode",{parentName:"a"},"BatchDeleteRequest"))," from the ",(0,r.kt)("inlineCode",{parentName:"p"},"Table")," entities to execute a ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_BatchWriteItem.html"},"BatchWriteItem")," operation."),(0,r.kt)("p",null,"BatchWriteItem operations can affect ",(0,r.kt)("strong",{parentName:"p"},"multiple tables"),", so ",(0,r.kt)("inlineCode",{parentName:"p"},"BatchWriteCommands")," do not have a ",(0,r.kt)("inlineCode",{parentName:"p"},".send(...)")," method. Instead, they should be performed via the dedicated ",(0,r.kt)("inlineCode",{parentName:"p"},"execute")," function:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import {\n  BatchWriteCommand,\n  execute\n} from 'dynamodb-toolbox/table/actions/batchWrite'\nimport { BatchPutRequest } from 'dynamodb-toolbox/entity/actions/batchPut'\nimport { BatchDeleteRequest } from 'dynamodb-toolbox/entity/actions/batchDelete'\n\nconst pokeCmd = PokeTable.build(BatchWriteCommand).requests(\n  PokemonEntity.build(BatchPutRequest).item(pikachu),\n  PokemonEntity.build(BatchPutRequest).item(charizard)\n)\n\nconst params = pokeCmd.params()\n\nconst ashCmd = OtherTable.build(BatchWriteCommand).requests(\n  TrainerEntity.build(BatchDeleteRequest).key(ashKey)\n)\n\nawait execute(pokeCmd, ashCmd)\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Note that batch operations are more efficient than running their equivalent commands in parallel, but ",(0,r.kt)("strong",{parentName:"p"},"do not reduce costs"),".")),(0,r.kt)("h2",{id:"request"},"Request"),(0,r.kt)("h3",{id:"requests"},(0,r.kt)("inlineCode",{parentName:"h3"},".requests(...)")),(0,r.kt)("p",{style:{marginTop:"-15px"}},(0,r.kt)("i",null,"(required)")),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"/docs/entities/actions/batch-put/"},(0,r.kt)("inlineCode",{parentName:"a"},"BatchPutRequests"))," and ",(0,r.kt)("a",{parentName:"p",href:"/docs/entities/actions/batch-delete/"},(0,r.kt)("inlineCode",{parentName:"a"},"BatchDeleteRequests"))," to execute."),(0,r.kt)("h2",{id:"execution"},"Execution"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { execute } from 'dynamodb-toolbox/table/actions/batchWrite'\n\nawait execute(...batchWriteCommands)\n")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Only one ",(0,r.kt)("inlineCode",{parentName:"p"},"BatchWriteCommand")," per Table is supported.")),(0,r.kt)("h3",{id:"options"},"Options"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"execute")," function accepts an additional object as a first argument for ",(0,r.kt)("strong",{parentName:"p"},"operation-level")," options:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"await execute(options, ...batchWriteCommands)\n")),(0,r.kt)("p",null,"Available options (see the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_BatchWriteItem.html#API_BatchWriteItem_RequestParameters"},"DynamoDB documentation")," for more details):"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Option"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"capacity")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"CapacityOption")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},'"NONE"')),(0,r.kt)("td",{parentName:"tr",align:null},"Determines the level of detail about provisioned or on-demand throughput consumption that is returned in the response.",(0,r.kt)("br",null),(0,r.kt)("br",null),"Possible values are ",(0,r.kt)("inlineCode",{parentName:"td"},'"NONE"'),", ",(0,r.kt)("inlineCode",{parentName:"td"},'"TOTAL"')," and ",(0,r.kt)("inlineCode",{parentName:"td"},'"INDEXES"'),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"metrics")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"MetricsOption")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},'"NONE"')),(0,r.kt)("td",{parentName:"tr",align:null},"Determines whether item collection metrics are returned.",(0,r.kt)("br",null),(0,r.kt)("br",null),"Possible values are ",(0,r.kt)("inlineCode",{parentName:"td"},'"NONE"')," and ",(0,r.kt)("inlineCode",{parentName:"td"},'"SIZE"'),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"documentClient")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"DocumentClient")),(0,r.kt)("td",{parentName:"tr",align:"center"},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"By default, the ",(0,r.kt)("inlineCode",{parentName:"td"},"documentClient")," attached to the ",(0,r.kt)("inlineCode",{parentName:"td"},"Table")," of the first ",(0,r.kt)("inlineCode",{parentName:"td"},"BatchWriteCommand")," is used to execute the operation.",(0,r.kt)("br",null),(0,r.kt)("br",null),"Use this option to override this behavior.")))),(0,r.kt)("admonition",{title:"Examples",type:"note"},(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"capacity",label:"Capacity",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const { ConsumedCapacity } = await execute(\n  { capacity: 'TOTAL' },\n  ...batchWriteCommands\n)\n"))),(0,r.kt)(i.Z,{value:"metrics",label:"Metrics",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const { ItemCollectionMetrics } = await execute(\n  { metrics: 'SIZE' },\n  ...batchWriteCommands\n)\n"))),(0,r.kt)(i.Z,{value:"document-client",label:"Document client",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { DynamoDBDocumentClient } from '@aws-sdk/lib-dynamodb'\n\nconst documentClient = new DynamoDBDocumentClient(...)\n\nawait execute(\n  { documentClient },\n  ...batchWriteCommands\n)\n"))))),(0,r.kt)("h3",{id:"response"},"Response"),(0,r.kt)("p",null,"The data is returned with the same response syntax as from the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_BatchWriteItem.html#API_BatchWriteItem_ResponseSyntax"},"DynamoDB BatchWriteItem API"),"."))}p.isMDXComponent=!0}}]);