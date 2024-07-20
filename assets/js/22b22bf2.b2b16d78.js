"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3296],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,k=p["".concat(s,".").concat(m)]||p[m]||c[m]||o;return n?a.createElement(k,l(l({ref:t},d),{},{components:n})):a.createElement(k,l({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(67294),r=n(86010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>N});var a=n(87462),r=n(67294),o=n(86010),l=n(12466),i=n(76775),s=n(91980),u=n(67392),d=n(50012);function c(e){return function(e){var t;return(null==(t=r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??c(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function k(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function y(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=p(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[s,u]=k({queryString:n,groupId:a}),[c,y]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,d.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),b=(()=>{const e=s??c;return m({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{b&&i(b)}),[b]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),y(e)}),[u,y,o]),tabValues:o}}var b=n(72389);const f="tabList__CuJ",h="tabItem_LNqP";function g(e){let{className:t,block:n,selectedValue:i,selectValue:s,tabValues:u}=e;const d=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),p=e=>{const t=e.currentTarget,n=d.indexOf(t),a=u[n].value;a!==i&&(c(t),s(a))},m=e=>{var t;let n=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const t=d.indexOf(e.currentTarget)+1;n=d[t]??d[0];break}case"ArrowLeft":{const t=d.indexOf(e.currentTarget)-1;n=d[t]??d[d.length-1];break}}null==(t=n)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>d.push(e),onKeyDown:m,onClick:p},l,{className:(0,o.Z)("tabs__item",h,null==l?void 0:l.className,{"tabs__item--active":i===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function T(e){const t=y(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",f)},r.createElement(g,(0,a.Z)({},e,t)),r.createElement(v,(0,a.Z)({},e,t)))}function N(e){const t=(0,b.Z)();return r.createElement(T,(0,a.Z)({key:String(t)},e))}},21354:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>c});var a=n(87462),r=(n(67294),n(3905)),o=n(74866),l=n(85162);const i={title:"Query",sidebar_custom_props:{sidebarActionType:"read"}},s="QueryCommand",u={unversionedId:"tables/actions/query/index",id:"tables/actions/query/index",title:"Query",description:"Performs a Query Operation on a Table:",source:"@site/docs/2-tables/2-actions/2-query/index.md",sourceDirName:"2-tables/2-actions/2-query",slug:"/tables/actions/query/",permalink:"/docs/tables/actions/query/",draft:!1,tags:[],version:"current",frontMatter:{title:"Query",sidebar_custom_props:{sidebarActionType:"read"}},sidebar:"tutorialSidebar",previous:{title:"Scan",permalink:"/docs/tables/actions/scan/"},next:{title:"Batching",permalink:"/docs/tables/actions/batching/"}},d={},c=[{value:"Request",id:"request",level:2},{value:"<code>.query(...)</code>",id:"query",level:3},{value:"<code>.entities(...)</code>",id:"entities",level:3},{value:"<code>.options(...)</code>",id:"options",level:3},{value:"Response",id:"response",level:2}],p={toc:c};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"querycommand"},"QueryCommand"),(0,r.kt)("p",null,"Performs a ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_Query.html"},"Query Operation")," on a ",(0,r.kt)("inlineCode",{parentName:"p"},"Table"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { QueryCommand } from 'dynamodb-toolbox/table/actions/query'\n\nconst queryCommand = PokeTable.build(QueryCommand)\n\nconst params = queryCommand.params()\nconst { Items } = await queryCommand.send()\n")),(0,r.kt)("h2",{id:"request"},"Request"),(0,r.kt)("h3",{id:"query"},(0,r.kt)("inlineCode",{parentName:"h3"},".query(...)")),(0,r.kt)("p",{style:{marginTop:"-15px"}},(0,r.kt)("i",null,"(required)")),(0,r.kt)("p",null,"The partition to query, with optional index and range condition:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"partition"),": The partition key to query"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"index ",(0,r.kt)("i",null,"(optional)")),": The name of a secondary index to query"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"range ",(0,r.kt)("i",null,"(optional)")),": If the table or index has a sort key, an additional ",(0,r.kt)("a",{href:"../../entities/actions/parse-condition#range-conditions"},"Range Condition"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// Get 'ashKetchum' pokemons with a level \u2265 50\nawait PokeTable.build(QueryCommand)\n  .query({\n    index: 'byTrainerId',\n    partition: 'TRAINER:ashKetchum',\n    range: { gte: 50 }\n  })\n  .send()\n")),(0,r.kt)("p",null,"You can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"Query")," type to explicitly type an object as a ",(0,r.kt)("inlineCode",{parentName:"p"},"QueryCommand")," query object:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import type { Query } from 'dynamodb-toolbox/table/actions/query'\n\nconst query: Query<typeof PokeTable> = {\n  index: 'byTrainerId',\n  partition: 'TRAINER:ashKetchum1',\n  range: { gte: 50 }\n}\n\nconst { Items } = await PokeTable.build(QueryCommand)\n  .query(query)\n  .send()\n")),(0,r.kt)("h3",{id:"entities"},(0,r.kt)("inlineCode",{parentName:"h3"},".entities(...)")),(0,r.kt)("p",null,"Provides a list of entities to filter the returned items (via the internal ",(0,r.kt)("a",{parentName:"p",href:"/docs/entities/usage/#entity-attribute"},(0,r.kt)("inlineCode",{parentName:"a"},"entity"))," attribute). Also formats them and types the response."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// \ud83d\udc47 Typed as (Pokemon | Trainer)[]\nconst { Items } = await PokeTable.build(QueryCommand)\n  .query(query)\n  .entities(PokemonEntity, TrainerEntity)\n  .send()\n")),(0,r.kt)("h3",{id:"options"},(0,r.kt)("inlineCode",{parentName:"h3"},".options(...)")),(0,r.kt)("p",null,"Provides additional options:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const { Items } = await PokeTable.build(QueryCommand)\n  .options({\n    consistent: true,\n    limit: 10\n    ...\n  })\n  .send()\n")),(0,r.kt)("p",null,"You can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"QueryOptions")," type to explicitly type an object as a ",(0,r.kt)("inlineCode",{parentName:"p"},"QueryCommand")," options object:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import type { QueryOptions } from 'dynamodb-toolbox/table/actions/query'\n\nconst queryOptions: QueryOptions<\n  typeof PokeTable,\n  // \ud83d\udc47 Optional entities\n  [typeof PokemonEntity, typeof TrainerEntity]\n> = {\n  consistent: true,\n  limit: 10,\n  ...\n}\n\nconst { Items } = await PokeTable.build(QueryCommand)\n  .query(query)\n  .entities(PokemonEntity, TrainerEntity)\n  .options(queryOptions)\n  .send()\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"It is advised to provide ",(0,r.kt)("inlineCode",{parentName:"p"},"entities")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"query")," first as they constrain the ",(0,r.kt)("inlineCode",{parentName:"p"},"options")," type.")),(0,r.kt)("p",null,"Available options (see the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_Query.html#API_Query_RequestParameters"},"DynamoDB documentation")," for more details):"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Cat."),(0,r.kt)("th",null,"Option"),(0,r.kt)("th",null,"Type"),(0,r.kt)("th",null,"Default"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",{rowSpan:"4",align:"center",class:"vertical"},(0,r.kt)("b",null,"General")),(0,r.kt)("td",null,(0,r.kt)("code",null,"consistent")),(0,r.kt)("td",{align:"center"},(0,r.kt)("code",null,"boolean")),(0,r.kt)("td",{align:"center"},(0,r.kt)("code",null,"false")),(0,r.kt)("td",null,"By default, read operations are ",(0,r.kt)("b",null,"eventually")," consistent (which improves performances and reduces costs).",(0,r.kt)("br",null),(0,r.kt)("br",null),"Set to ",(0,r.kt)("code",null,"true")," to use ",(0,r.kt)("b",null,"strongly")," consistent reads (unavailable on secondary indexes).")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"index")),(0,r.kt)("td",{align:"center"},(0,r.kt)("code",null,"string")),(0,r.kt)("td",{align:"center"},"-"),(0,r.kt)("td",null,"The name of a secondary index to query.",(0,r.kt)("br",null),(0,r.kt)("br",null),"This index can be any local secondary index or global secondary index.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"reverse")),(0,r.kt)("td",{align:"center"},(0,r.kt)("code",null,"boolean")),(0,r.kt)("td",{align:"center"},(0,r.kt)("code",null,"false")),(0,r.kt)("td",null,"Specifies the order for index traversal.",(0,r.kt)("br",null),(0,r.kt)("br",null),"By default, the traversal is performed in ascending order. If set to ",(0,r.kt)("code",null,"true"),", the traversal is performed in descending order.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"capacity")),(0,r.kt)("td",{align:"center"},(0,r.kt)("code",null,"CapacityOption")),(0,r.kt)("td",{align:"center"},(0,r.kt)("code",null,'"NONE"')),(0,r.kt)("td",null,"Determines the level of detail about provisioned or on-demand throughput consumption that is returned in the response.",(0,r.kt)("br",null),(0,r.kt)("br",null),"Possible values are ",(0,r.kt)("code",null,'"NONE"'),", ",(0,r.kt)("code",null,'"TOTAL"')," and ",(0,r.kt)("code",null,'"INDEXES"'),".")),(0,r.kt)("tr",null,(0,r.kt)("td",{rowSpan:"3",align:"center",class:"vertical"},(0,r.kt)("b",null,"Pagination")),(0,r.kt)("td",null,(0,r.kt)("code",null,"limit")),(0,r.kt)("td",{align:"center"},(0,r.kt)("code",null,"integer \u2265 1")),(0,r.kt)("td",{align:"center"},"-"),(0,r.kt)("td",null,"The maximum number of items to evaluate for 1 page.",(0,r.kt)("br",null),(0,r.kt)("br",null),"Note that DynamoDB may return a lower number of items if it reaches the limit of 1MB, or if filters are applied.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"exclusiveStartKey")),(0,r.kt)("td",{align:"center"},(0,r.kt)("code",null,"Key")),(0,r.kt)("td",{align:"center"},"-"),(0,r.kt)("td",null,"The primary key of the first item that this operation evaluates. Use the ",(0,r.kt)("code",null,"LastEvaluatedKey")," from the previous operation.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"maxPages")),(0,r.kt)("td",{align:"center"},(0,r.kt)("code",null,"integer \u2265 1")),(0,r.kt)("td",{align:"center"},(0,r.kt)("code",null,"1")),(0,r.kt)("td",null,'A "meta" option provided by DynamoDB-Toolbox to send multiple requests in a single promise.',(0,r.kt)("br",null),(0,r.kt)("br",null),"Note that ",(0,r.kt)("code",null,"Infinity")," is a valid (albeit dangerous) option.",(0,r.kt)("br",null),(0,r.kt)("br",null),"If two pages or more have been fetched, the responses ",(0,r.kt)("code",null,"Count")," and ",(0,r.kt)("code",null,"ScannedCount")," are summed, but the ",(0,r.kt)("code",null,"ConsumedCapacity")," is omitted for the moment.")),(0,r.kt)("tr",null,(0,r.kt)("td",{rowSpan:"3",align:"center",class:"vertical"},(0,r.kt)("b",null,"Filters")),(0,r.kt)("td",null,(0,r.kt)("code",null,"select")),(0,r.kt)("td",{align:"center"},(0,r.kt)("code",null,"SelectOption")),(0,r.kt)("td",{align:"center"},"-"),(0,r.kt)("td",null,"The strategy for returned attributes. You can retrieve all attributes, specific attributes, the count of matching items, or in the case of an index, some or all of the projected attributes.",(0,r.kt)("br",null),(0,r.kt)("br",null),"Possible values are ",(0,r.kt)("code",null,'"ALL_ATTRIBUTES"'),", ",(0,r.kt)("code",null,'"ALL_PROJECTED_ATTRIBUTES"')," (if ",(0,r.kt)("code",null,"index")," is specified), ",(0,r.kt)("code",null,'"COUNT"')," and ",(0,r.kt)("code",null,'"SPECIFIC_ATTRIBUTES"')," (if ",(0,r.kt)("code",null,"attributes")," are specified)")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"filters")),(0,r.kt)("td",{align:"center"},(0,r.kt)("code",null,"Record<string, Condition>")),(0,r.kt)("td",{align:"center"},"-"),(0,r.kt)("td",null,"For each entity name, a condition that must be satisfied in order for evaluated items of this entity to be returned (improves performances but does not reduce costs).",(0,r.kt)("br",null),(0,r.kt)("br",null),"Requires ",(0,r.kt)("a",{href:"#entities"},(0,r.kt)("code",null,"entities")),".",(0,r.kt)("br",null),(0,r.kt)("br",null),"See the ",(0,r.kt)("a",{href:"../../entities/actions/parse-condition#building-conditions"},(0,r.kt)("code",null,"ConditionParser"))," action for more details on how to write conditions.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"attributes")),(0,r.kt)("td",{align:"center"},(0,r.kt)("code",null,"string[]")),(0,r.kt)("td",{align:"center"},"-"),(0,r.kt)("td",null,"To specify a list of attributes to retrieve (improves performances but does not reduce costs).",(0,r.kt)("br",null),(0,r.kt)("br",null),"Requires ",(0,r.kt)("a",{href:"#entities"},(0,r.kt)("code",null,"entities")),". Paths must be common to all entities.",(0,r.kt)("br",null),(0,r.kt)("br",null),"See the ",(0,r.kt)("a",{href:"../../entities/actions/parse-paths#paths"},(0,r.kt)("code",null,"PathParser"))," action for more details on how to write attribute paths.")))),(0,r.kt)("admonition",{title:"Examples",type:"note"},(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"consistent",label:"Strongly consistent",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const { Items } = await PokeTable.build(QueryCommand)\n  .query({ partition: 'ashKetchum' })\n  .entities(PokemonEntity)\n  .options({ consistent: true })\n  .send()\n"))),(0,r.kt)(l.Z,{value:"indexed",label:"On index",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const { Items } = await PokeTable.build(QueryCommand)\n  .query({\n    index: 'byTrainerId',\n    partition: 'TRAINER:ashKetchum',\n    range: { gte: 50 }\n  })\n  .entities(PokemonEntity)\n  .send()\n"))),(0,r.kt)(l.Z,{value:"reverse",label:"Reversed",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const { Items } = await PokeTable.build(QueryCommand)\n  .query({ partition: 'ashKetchum' })\n  .entities(PokemonEntity)\n  .options({ reverse: true })\n  .send()\n"))))),(0,r.kt)("admonition",{title:"Paginated",type:"note"},(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"paginated",label:"Paginated",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"let lastEvaluatedKey: Record<string, unknown> | undefined\nconst command = PokeTable.build(QueryCommand).query({\n  partition: 'ashKetchum'\n})\n\ndo {\n  const page = await command\n    .options({ exclusiveStartKey: lastEvaluatedKey })\n    .send()\n\n  // ...do something with page.Items here...\n\n  lastEvaluatedKey = page.LastEvaluatedKey\n} while (lastEvaluatedKey !== undefined)\n"))),(0,r.kt)(l.Z,{value:"partition",label:"All Partition",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const { Items } = await PokeTable.build(QueryCommand)\n  .query({ partition: 'ashKetchum' })\n  // Retrieve all items from the partition (beware of RAM issues!)\n  .options({ maxPages: Infinity })\n  .send()\n"))))),(0,r.kt)("admonition",{title:"Filtered",type:"note"},(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"filtered",label:"Filtered",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const { Items } = await PokeTable.build(QueryCommand)\n  .query({ partition: 'ashKetchum' })\n  .entities(PokemonEntity, TrainerEntity)\n  .options({\n    filters: {\n      POKEMONS: { attr: 'pokeType', eq: 'fire' },\n      TRAINERS: { attr: 'age', gt: 18 }\n    }\n  })\n  .send()\n"))),(0,r.kt)(l.Z,{value:"attributes",label:"Attributes",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const { Items } = await PokeTable.build(QueryCommand)\n  .query({ partition: 'ashKetchum' })\n  .entities(PokemonEntity)\n  .options({ attributes: ['name', 'type'] })\n  .send()\n"))),(0,r.kt)(l.Z,{value:"count",label:"Count",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const { Count } = await PokeTable.build(QueryCommand)\n  .query({ partition: 'ashKetchum' })\n  .options({ select: 'COUNT' })\n  .send()\n"))))),(0,r.kt)("h2",{id:"response"},"Response"),(0,r.kt)("p",null,"The data is returned with the same response syntax as from the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_Query.html#API_Query_ResponseElements"},"DynamoDB Query API"),"."),(0,r.kt)("p",null,"If a ",(0,r.kt)("a",{parentName:"p",href:"#entities"},(0,r.kt)("inlineCode",{parentName:"a"},"entities"))," have been provided, the response ",(0,r.kt)("inlineCode",{parentName:"p"},"Items")," are formatted by their respective entities."),(0,r.kt)("p",null,"You can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"QueryResponse")," type to explicitly type an object as a ",(0,r.kt)("inlineCode",{parentName:"p"},"QueryCommand")," response object:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import type { QueryResponse } from 'dynamodb-toolbox/table/actions/query'\n\nconst scanResponse: QueryResponse<\n  typeof PokeTable,\n  // \ud83d\udc47 Query\n  { partition: 'ashKetchum' },\n  // \ud83d\udc47 Optional entities\n  [typeof PokemonEntity],\n  // \ud83d\udc47 Optional options\n  { attributes: ['name', 'type'] }\n> = { Items: ... }\n")))}m.isMDXComponent=!0}}]);