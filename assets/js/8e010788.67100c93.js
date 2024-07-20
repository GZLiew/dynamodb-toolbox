"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2465],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>p});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=u(n),p=l,k=m["".concat(s,".").concat(p)]||m[p]||d[p]||o;return n?a.createElement(k,r(r({ref:t},c),{},{components:n})):a.createElement(k,r({ref:t},c))}));function p(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,r=new Array(o);r[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:l,r[1]=i;for(var u=2;u<o;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(67294),l=n(86010);const o="tabItem_Ymn6";function r(e){let{children:t,hidden:n,className:r}=e;return a.createElement("div",{role:"tabpanel",className:(0,l.Z)(o,r),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>N});var a=n(87462),l=n(67294),o=n(86010),r=n(12466),i=n(76775),s=n(91980),u=n(67392),c=n(50012);function d(e){return function(e){var t;return(null==(t=l.Children.map(e,(e=>{if(!e||(0,l.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:l}}=e;return{value:t,label:n,attributes:a,default:l}}))}function m(e){const{values:t,children:n}=e;return(0,l.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function k(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(o),(0,l.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=m(e),[r,i]=(0,l.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[s,u]=k({queryString:n,groupId:a}),[d,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,c.Nk)(n);return[a,(0,l.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),f=(()=>{const e=s??d;return p({value:e,tabValues:o})?e:null})();(0,l.useLayoutEffect)((()=>{f&&i(f)}),[f]);return{selectedValue:r,selectValue:(0,l.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),b(e)}),[u,b,o]),tabValues:o}}var f=n(72389);const y="tabList__CuJ",g="tabItem_LNqP";function h(e){let{className:t,block:n,selectedValue:i,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,r.o5)(),m=e=>{const t=e.currentTarget,n=c.indexOf(t),a=u[n].value;a!==i&&(d(t),s(a))},p=e=>{var t;let n=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}null==(t=n)||t.focus()};return l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:r}=e;return l.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:p,onClick:m},r,{className:(0,o.Z)("tabs__item",g,null==r?void 0:r.className,{"tabs__item--active":i===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return l.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function T(e){const t=b(e);return l.createElement("div",{className:(0,o.Z)("tabs-container",y)},l.createElement(h,(0,a.Z)({},e,t)),l.createElement(v,(0,a.Z)({},e,t)))}function N(e){const t=(0,f.Z)();return l.createElement(T,(0,a.Z)({key:String(t)},e))}},10681:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>u,toc:()=>d});var a=n(87462),l=(n(67294),n(3905)),o=n(74866),r=n(85162);const i={title:"Scan",sidebar_custom_props:{sidebarActionType:"read"}},s="ScanCommand",u={unversionedId:"tables/actions/scan/index",id:"tables/actions/scan/index",title:"Scan",description:"Performs a Scan Operation on a Table:",source:"@site/docs/2-tables/2-actions/1-scan/index.md",sourceDirName:"2-tables/2-actions/1-scan",slug:"/tables/actions/scan/",permalink:"/docs/tables/actions/scan/",draft:!1,tags:[],version:"current",frontMatter:{title:"Scan",sidebar_custom_props:{sidebarActionType:"read"}},sidebar:"tutorialSidebar",previous:{title:"Usage",permalink:"/docs/tables/usage/"},next:{title:"Query",permalink:"/docs/tables/actions/query/"}},c={},d=[{value:"Request",id:"request",level:2},{value:"<code>.entities(...)</code>",id:"entities",level:3},{value:"<code>.options(...)</code>",id:"options",level:3},{value:"Response",id:"response",level:2}],m={toc:d};function p(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"scancommand"},"ScanCommand"),(0,l.kt)("p",null,"Performs a ",(0,l.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_Scan.html"},"Scan Operation")," on a ",(0,l.kt)("inlineCode",{parentName:"p"},"Table"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"import { ScanCommand } from 'dynamodb-toolbox/table/actions/scan'\n\nconst scanCommand = PokeTable.build(ScanCommand)\n\nconst params = scanCommand.params()\nconst { Items } = await scanCommand.send()\n")),(0,l.kt)("h2",{id:"request"},"Request"),(0,l.kt)("h3",{id:"entities"},(0,l.kt)("inlineCode",{parentName:"h3"},".entities(...)")),(0,l.kt)("p",null,"Provides a list of entities to filter the returned items (via the internal ",(0,l.kt)("a",{parentName:"p",href:"/docs/entities/usage/#entity-attribute"},(0,l.kt)("inlineCode",{parentName:"a"},"entity"))," attribute). Also formats them and types the response."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"// \ud83d\udc47 Typed as (Pokemon | Trainer)[]\nconst { Items } = await PokeTable.build(ScanCommand)\n  .entities(PokemonEntity, TrainerEntity)\n  .send()\n")),(0,l.kt)("h3",{id:"options"},(0,l.kt)("inlineCode",{parentName:"h3"},".options(...)")),(0,l.kt)("p",null,"Provides additional options:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"const { Items } = await PokeTable.build(ScanCommand)\n  .options({\n    consistent: true,\n    limit: 10\n    ...\n  })\n  .send()\n")),(0,l.kt)("p",null,"You can use the ",(0,l.kt)("inlineCode",{parentName:"p"},"ScanOptions")," type to explicitly type an object as a ",(0,l.kt)("inlineCode",{parentName:"p"},"ScanCommand")," options object:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"import type { ScanOptions } from 'dynamodb-toolbox/table/actions/scan'\n\nconst scanOptions: ScanOptions<\n  typeof PokeTable,\n  // \ud83d\udc47 Optional entities\n  [typeof PokemonEntity, typeof TrainerEntity]\n> = {\n  consistent: true,\n  limit: 10,\n  ...\n}\n\nconst { Items } = await PokeTable.build(ScanCommand)\n  .options(scanOptions)\n  .send()\n")),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"It is advised to provide ",(0,l.kt)("inlineCode",{parentName:"p"},"entities")," first as it constrains the ",(0,l.kt)("inlineCode",{parentName:"p"},"options")," type.")),(0,l.kt)("p",null,"Available options (see the ",(0,l.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_Scan.html#API_Scan_RequestParameters"},"DynamoDB documentation")," for more details):"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Cat."),(0,l.kt)("th",null,"Option"),(0,l.kt)("th",null,"Type"),(0,l.kt)("th",null,"Default"),(0,l.kt)("th",null,"Description"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",{rowspan:"3",align:"center",class:"vertical"},(0,l.kt)("b",null,"General")),(0,l.kt)("td",null,(0,l.kt)("code",null,"consistent")),(0,l.kt)("td",{align:"center"},(0,l.kt)("code",null,"boolean")),(0,l.kt)("td",{align:"center"},(0,l.kt)("code",null,"false")),(0,l.kt)("td",null,"By default, read operations are ",(0,l.kt)("b",null,"eventually")," consistent (which improves performances and reduces costs).",(0,l.kt)("br",null),(0,l.kt)("br",null),"Set to ",(0,l.kt)("code",null,"true")," to use ",(0,l.kt)("b",null,"strongly")," consistent reads (unavailable on secondary indexes).")),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"index")),(0,l.kt)("td",{align:"center"},(0,l.kt)("code",null,"string")),(0,l.kt)("td",{align:"center"},"-"),(0,l.kt)("td",null,"The name of a secondary index to scan.",(0,l.kt)("br",null),(0,l.kt)("br",null),"This index can be any local secondary index or global secondary index.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"capacity")),(0,l.kt)("td",{align:"center"},(0,l.kt)("code",null,"CapacityOption")),(0,l.kt)("td",{align:"center"},(0,l.kt)("code",null,'"NONE"')),(0,l.kt)("td",null,"Determines the level of detail about provisioned or on-demand throughput consumption that is returned in the response.",(0,l.kt)("br",null),(0,l.kt)("br",null),"Possible values are ",(0,l.kt)("code",null,'"NONE"'),", ",(0,l.kt)("code",null,'"TOTAL"')," and ",(0,l.kt)("code",null,'"INDEXES"'),".")),(0,l.kt)("tr",null,(0,l.kt)("td",{rowSpan:"3",align:"center",class:"vertical"},(0,l.kt)("b",null,"Pagination")),(0,l.kt)("td",null,(0,l.kt)("code",null,"limit")),(0,l.kt)("td",{align:"center"},(0,l.kt)("code",null,"integer \u2265 1")),(0,l.kt)("td",{align:"center"},"-"),(0,l.kt)("td",null,"The maximum number of items to evaluate for 1 page.",(0,l.kt)("br",null),(0,l.kt)("br",null),"Note that DynamoDB may return a lower number of items if it reaches the limit of 1MB, or if filters are applied.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"exclusiveStartKey")),(0,l.kt)("td",{align:"center"},(0,l.kt)("code",null,"Key")),(0,l.kt)("td",{align:"center"},"-"),(0,l.kt)("td",null,"The primary key of the first item that this operation evaluates. Use the ",(0,l.kt)("code",null,"LastEvaluatedKey")," from the previous operation.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"maxPages")),(0,l.kt)("td",{align:"center"},(0,l.kt)("code",null,"integer \u2265 1")),(0,l.kt)("td",{align:"center"},(0,l.kt)("code",null,"1")),(0,l.kt)("td",null,'A "meta" option provided by DynamoDB-Toolbox to send multiple requests in a single promise.',(0,l.kt)("br",null),(0,l.kt)("br",null),"Note that ",(0,l.kt)("code",null,"Infinity")," is a valid (albeit dangerous) option.",(0,l.kt)("br",null),(0,l.kt)("br",null),"If two pages or more have been fetched, the responses ",(0,l.kt)("code",null,"Count")," and ",(0,l.kt)("code",null,"ScannedCount")," are summed, but the ",(0,l.kt)("code",null,"ConsumedCapacity")," is omitted for the moment.")),(0,l.kt)("tr",null,(0,l.kt)("td",{rowSpan:"3",align:"center",class:"vertical"},(0,l.kt)("b",null,"Filters")),(0,l.kt)("td",null,(0,l.kt)("code",null,"select")),(0,l.kt)("td",{align:"center"},(0,l.kt)("code",null,"SelectOption")),(0,l.kt)("td",{align:"center"},"-"),(0,l.kt)("td",null,"The strategy for returned attributes. You can retrieve all attributes, specific attributes, the count of matching items, or in the case of an index, some or all of the projected attributes.",(0,l.kt)("br",null),(0,l.kt)("br",null),"Possible values are ",(0,l.kt)("code",null,'"ALL_ATTRIBUTES"'),", ",(0,l.kt)("code",null,'"ALL_PROJECTED_ATTRIBUTES"')," (if ",(0,l.kt)("code",null,"index")," is specified), ",(0,l.kt)("code",null,'"COUNT"')," and ",(0,l.kt)("code",null,'"SPECIFIC_ATTRIBUTES"')," (if ",(0,l.kt)("code",null,"attributes")," are specified)")),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"filters")),(0,l.kt)("td",{align:"center"},(0,l.kt)("code",null,"Record<string, Condition>")),(0,l.kt)("td",{align:"center"},"-"),(0,l.kt)("td",null,"For each entity name, a condition that must be satisfied in order for evaluated items of this entity to be returned (improves performances but does not reduce costs).",(0,l.kt)("br",null),(0,l.kt)("br",null),"Requires ",(0,l.kt)("a",{href:"#entities"},(0,l.kt)("code",null,"entities")),".",(0,l.kt)("br",null),(0,l.kt)("br",null),"See the ",(0,l.kt)("a",{href:"../../entities/actions/parse-condition#building-conditions"},(0,l.kt)("code",null,"ConditionParser"))," action for more details on how to write conditions.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"attributes")),(0,l.kt)("td",{align:"center"},(0,l.kt)("code",null,"string[]")),(0,l.kt)("td",{align:"center"},"-"),(0,l.kt)("td",null,"To specify a list of attributes to retrieve (improves performances but does not reduce costs).",(0,l.kt)("br",null),(0,l.kt)("br",null),"Requires ",(0,l.kt)("a",{href:"#entities"},(0,l.kt)("code",null,"entities")),". Paths must be common to all entities.",(0,l.kt)("br",null),(0,l.kt)("br",null),"See the ",(0,l.kt)("a",{href:"../../entities/actions/parse-paths#paths"},(0,l.kt)("code",null,"PathParser"))," action for more details on how to write attribute paths.")),(0,l.kt)("tr",null,(0,l.kt)("td",{rowSpan:"2",align:"center",class:"vertical"},(0,l.kt)("b",null,"Parallelism")),(0,l.kt)("td",null,(0,l.kt)("code",null,"segment")),(0,l.kt)("td",{align:"center"},(0,l.kt)("code",null,"integer \u2265 0")),(0,l.kt)("td",{align:"center"},"-"),(0,l.kt)("td",null,"Identifies an individual segment to be scanned by an application worker (zero-based).",(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("code",null,"totalSegments")," must be provided.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"totalSegment")),(0,l.kt)("td",{align:"center"},(0,l.kt)("code",null,"integer \u2265 1")),(0,l.kt)("td",{align:"center"},"-"),(0,l.kt)("td",null,"Represents the total number of segments into which the Scan operation is divided.",(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("code",null,"segment")," must be provided.")))),(0,l.kt)("admonition",{title:"Examples",type:"note"},(0,l.kt)(o.Z,{mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"consistent",label:"Strongly consistent",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"const { Items } = await PokeTable.build(ScanCommand)\n  .options({ consistent: true })\n  .send()\n"))),(0,l.kt)(r.Z,{value:"indexed",label:"On index",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"const { Items } = await PokeTable.build(ScanCommand)\n  .options({ index: 'my-index' })\n  .send()\n"))))),(0,l.kt)("admonition",{title:"Paginated",type:"note"},(0,l.kt)(o.Z,{mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"paginated",label:"Paginated",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"let lastEvaluatedKey: Record<string, unknown> | undefined\nconst command = PokeTable.build(ScanCommand)\n\ndo {\n  const page = await command\n    .options({ exclusiveStartKey: lastEvaluatedKey })\n    .send()\n\n  // ...do something with page.Items here...\n\n  lastEvaluatedKey = page.LastEvaluatedKey\n} while (lastEvaluatedKey !== undefined)\n"))),(0,l.kt)(r.Z,{value:"db",label:"All DB",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"const { Items } = await PokeTable.build(ScanCommand)\n  // Retrieve all items from the table (beware of RAM issues!)\n  .options({ maxPages: Infinity })\n  .send()\n"))),(0,l.kt)(r.Z,{value:"entity",label:"All Pokemons",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"const { Items } = await PokeTable.build(ScanCommand)\n  .entities(PokemonEntity)\n  // Retrieve all pokemons from the table (beware of RAM issues!)\n  .options({ maxPages: Infinity })\n  .send()\n"))))),(0,l.kt)("admonition",{title:"Filtered",type:"note"},(0,l.kt)(o.Z,{mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"filtered",label:"Filtered",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"const { Items } = await PokeTable.build(ScanCommand)\n  .entities(PokemonEntity, TrainerEntity)\n  .options({\n    filters: {\n      POKEMONS: { attr: 'pokeType', eq: 'fire' },\n      TRAINERS: { attr: 'age', gt: 18 }\n    }\n  })\n  .send()\n"))),(0,l.kt)(r.Z,{value:"attributes",label:"Attributes",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"const { Items } = await PokeTable.build(ScanCommand)\n  .entities(PokemonEntity)\n  .options({ attributes: ['name', 'type'] })\n  .send()\n"))),(0,l.kt)(r.Z,{value:"count",label:"Count",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"const { Count } = await PokeTable.build(ScanCommand)\n  .options({ select: 'COUNT' })\n  .send()\n"))))),(0,l.kt)("admonition",{title:"Parallel",type:"note"},(0,l.kt)(o.Z,{mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"segment",label:"Segment",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"const { Items } = await PokeTable.build(ScanCommand)\n  .options({ segment: 1, totalSegment: 3 })\n  .send()\n"))),(0,l.kt)(r.Z,{value:"db",label:"All DB (3 threads)",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"const opts = { totalSegment: 3, maxPages: Infinity }\n\nconst [\n  { Items: segment1 = [] },\n  { Items: segment2 = [] },\n  { Items: segment3 = [] }\n] = await Promise.all([\n  PokeTable.build(ScanCommand)\n    .options({ segment: 0, ...opts })\n    .send(),\n  PokeTable.build(ScanCommand)\n    .options({ segment: 1, ...opts })\n    .send(),\n  PokeTable.build(ScanCommand)\n    .options({ segment: 2, ...opts })\n    .send()\n])\n\nconst allItems = [...segment1, ...segment2, ...segment3]\n"))))),(0,l.kt)("h2",{id:"response"},"Response"),(0,l.kt)("p",null,"The data is returned with the same response syntax as from the ",(0,l.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_Scan.html#API_Scan_ResponseElements"},"DynamoDB Scan API"),"."),(0,l.kt)("p",null,"If ",(0,l.kt)("a",{parentName:"p",href:"#entities"},(0,l.kt)("inlineCode",{parentName:"a"},"entities"))," have been provided, the response ",(0,l.kt)("inlineCode",{parentName:"p"},"Items")," are formatted by their respective entities."),(0,l.kt)("p",null,"You can use the ",(0,l.kt)("inlineCode",{parentName:"p"},"ScanResponse")," type to explicitly type an object as a ",(0,l.kt)("inlineCode",{parentName:"p"},"ScanCommand")," response object:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"import type { ScanResponse } from 'dynamodb-toolbox/table/actions/scan'\n\nconst scanResponse: ScanResponse<\n  typeof PokeTable,\n  // \ud83d\udc47 Optional entities\n  [typeof PokemonEntity],\n  // \ud83d\udc47 Optional options\n  { attributes: ['name', 'type'] }\n> = { Items: ... }\n")))}p.isMDXComponent=!0}}]);