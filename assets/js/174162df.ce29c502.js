"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7537],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,k=p["".concat(i,".").concat(m)]||p[m]||d[m]||o;return n?a.createElement(k,l(l({ref:t},c),{},{components:n})):a.createElement(k,l({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=p;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var u=2;u<o;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(67294),r=n(86010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>w});var a=n(87462),r=n(67294),o=n(86010),l=n(12466),s=n(76775),i=n(91980),u=n(67392),c=n(50012);function d(e){return function(e){var t;return(null==(t=r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function k(e){let{queryString:t=!1,groupId:n}=e;const a=(0,s.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=p(e),[l,s]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[i,u]=k({queryString:n,groupId:a}),[d,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,c.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),h=(()=>{const e=i??d;return m({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{h&&s(h)}),[h]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),f(e)}),[u,f,o]),tabValues:o}}var h=n(72389);const y="tabList__CuJ",b="tabItem_LNqP";function g(e){let{className:t,block:n,selectedValue:s,selectValue:i,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.o5)(),p=e=>{const t=e.currentTarget,n=c.indexOf(t),a=u[n].value;a!==s&&(d(t),i(a))},m=e=>{var t;let n=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}null==(t=n)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:p},l,{className:(0,o.Z)("tabs__item",b,null==l?void 0:l.className,{"tabs__item--active":s===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function N(e){const t=f(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",y)},r.createElement(g,(0,a.Z)({},e,t)),r.createElement(v,(0,a.Z)({},e,t)))}function w(e){const t=(0,h.Z)();return r.createElement(N,(0,a.Z)({key:String(t)},e))}},61921:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>u,toc:()=>d});var a=n(87462),r=(n(67294),n(3905)),o=n(74866),l=n(85162);const s={title:"record",sidebar_custom_props:{code:!0}},i="Record",u={unversionedId:"schemas/record/index",id:"schemas/record/index",title:"record",description:"Defines a different kind of map attribute. Records differ from maps as they can have a non-explicit (and potentially infinite) range of keys, but have a single value type:",source:"@site/docs/4-schemas/12-record/index.md",sourceDirName:"4-schemas/12-record",slug:"/schemas/record/",permalink:"/docs/schemas/record/",draft:!1,tags:[],version:"current",frontMatter:{title:"record",sidebar_custom_props:{code:!0}},sidebar:"tutorialSidebar",previous:{title:"map",permalink:"/docs/schemas/map/"},next:{title:"anyOf",permalink:"/docs/schemas/anyOf/"}},c={},d=[{value:"Options",id:"options",level:2},{value:"<code>.required()</code>",id:"required",level:3},{value:"<code>.hidden()</code>",id:"hidden",level:3},{value:"<code>.key()</code>",id:"key",level:3},{value:"<code>.savedAs(...)</code>",id:"savedas",level:3},{value:"<code>.default(...)</code>",id:"default",level:3},{value:"<code>.link&lt;Schema&gt;(...)</code>",id:"linkschema",level:3}],p={toc:d};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"record"},"Record"),(0,r.kt)("p",null,"Defines a different kind of ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.NamingRulesDataTypes.html#HowItWorks.DataTypes"},(0,r.kt)("strong",{parentName:"a"},"map attribute")),". Records differ from ",(0,r.kt)("a",{parentName:"p",href:"/docs/schemas/map/"},(0,r.kt)("inlineCode",{parentName:"a"},"maps"))," as they can have a non-explicit (and potentially infinite) range of keys, but have a single value type:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { record } from 'dynamodb-toolbox/attributes/record'\n\nconst pokeTypeSchema = string().enum('fire', ...)\n\nconst pokemonSchema = schema({\n  ...\n  weaknesses: record(pokeTypeSchema, number())\n})\n\ntype FormattedPokemon = FormattedItem<typeof PokemonEntity>\n// => {\n//   ...\n//   weaknesses: {\n//     [key in PokeType]?: number\n//   }\n// }\n")),(0,r.kt)("p",null,"Record elements can have any type. However, they must respect some constraints:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"They cannot be ",(0,r.kt)("inlineCode",{parentName:"li"},"optional")," or always required"),(0,r.kt)("li",{parentName:"ul"},"They cannot be ",(0,r.kt)("inlineCode",{parentName:"li"},"hidden")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"key")," (tagging the ",(0,r.kt)("inlineCode",{parentName:"li"},"record")," itself as ",(0,r.kt)("inlineCode",{parentName:"li"},"key")," is enough)"),(0,r.kt)("li",{parentName:"ul"},"They cannot have ",(0,r.kt)("inlineCode",{parentName:"li"},"default")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"links"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// \u274c Raises a type AND a run-time error\nconst strRecord = record(string(), string().optional())\nconst strRecord = record(string(), string().hidden())\nconst strRecord = record(string(), string().key())\nconst strRecord = record(string(), string().default('foo'))\n")),(0,r.kt)("p",null,"Record keys share the same constraints and must be of type ",(0,r.kt)("a",{parentName:"p",href:"/docs/schemas/string/"},(0,r.kt)("inlineCode",{parentName:"a"},"string")),"."),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("h3",{id:"required"},(0,r.kt)("inlineCode",{parentName:"h3"},".required()")),(0,r.kt)("p",{style:{marginTop:"-15px"}},(0,r.kt)("i",null,(0,r.kt)("code",null,"string | undefined"))),(0,r.kt)("p",null,"Tags the attribute as ",(0,r.kt)("strong",{parentName:"p"},"required")," (at root level or within ",(0,r.kt)("a",{parentName:"p",href:"/docs/schemas/map/"},"Maps"),"). Possible values are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,'"atLeastOnce" ',(0,r.kt)("i",null,"(default)")),": Required"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'"always"'),": Always required (including updates)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'"never"'),": Optional")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// Equivalent\nconst weaknessesSchema = record(\n  string().enum('fire', ...),\n  number()\n).required()\nconst weaknessesSchema = record(\n  string().enum('fire', ...),\n  number(),\n  // Options can be provided as 3rd argument\n  { required: 'atLeastOnce' }\n)\n\n// shorthand for `.required(\"never\")`\nconst weaknessesSchema = record(...).optional()\nconst weaknessesSchema = map(..., { required: 'never' })\n")),(0,r.kt)("h3",{id:"hidden"},(0,r.kt)("inlineCode",{parentName:"h3"},".hidden()")),(0,r.kt)("p",{style:{marginTop:"-15px"}},(0,r.kt)("i",null,(0,r.kt)("code",null,"boolean | undefined"))),(0,r.kt)("p",null,"Skips the attribute when formatting items:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const weaknessesSchema = record(\n  string().enum('fire', ...),\n  number()\n).hidden()\nconst weaknessesSchema = record(..., { hidden: true })\n")),(0,r.kt)("h3",{id:"key"},(0,r.kt)("inlineCode",{parentName:"h3"},".key()")),(0,r.kt)("p",{style:{marginTop:"-15px"}},(0,r.kt)("i",null,(0,r.kt)("code",null,"boolean | undefined"))),(0,r.kt)("p",null,"Tags the attribute as needed to compute the primary key:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// Note: The method also sets the `required` property to \"always\"\n// (it is often the case in practice, you can still use `.optional()` if needed)\nconst idsSchema = record(string(), string()).key()\nconst idsSchema = record(..., {\n  key: true,\n  required: 'always'\n})\n")),(0,r.kt)("h3",{id:"savedas"},(0,r.kt)("inlineCode",{parentName:"h3"},".savedAs(...)")),(0,r.kt)("p",{style:{marginTop:"-15px"}},(0,r.kt)("i",null,(0,r.kt)("code",null,"string"))),(0,r.kt)("p",null,"Renames the attribute during the ",(0,r.kt)("a",{parentName:"p",href:"/docs/schemas/actions/parse"},"transformation step")," (at root level or within ",(0,r.kt)("a",{parentName:"p",href:"/docs/schemas/map/"},"Maps"),"):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const weaknessesSchema = record(\n  string().enum('fire', ...),\n  number()\n).savedAs('w')\nconst weaknessesSchema = record(..., { savedAs: 'w' })\n")),(0,r.kt)("h3",{id:"default"},(0,r.kt)("inlineCode",{parentName:"h3"},".default(...)")),(0,r.kt)("p",{style:{marginTop:"-15px"}},(0,r.kt)("i",null,(0,r.kt)("code",null,"ValueOrGetter<ATTRIBUTES>"))),(0,r.kt)("p",null,"Specifies default values for the attribute. There are three kinds of defaults:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"putDefault"),": Applied on put actions (e.g. ",(0,r.kt)("a",{parentName:"li",href:"/docs/entities/actions/put-item/"},(0,r.kt)("inlineCode",{parentName:"a"},"PutItemCommand")),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"updateDefault"),": Applied on update actions (e.g. ",(0,r.kt)("a",{parentName:"li",href:"/docs/entities/actions/update-item/"},(0,r.kt)("inlineCode",{parentName:"a"},"UpdateItemCommand")),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"keyDefault"),": Overrides other defaults on ",(0,r.kt)("a",{parentName:"li",href:"#key"},"key")," attributes (ignored otherwise)")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"default")," method is a shorthand that acts as ",(0,r.kt)("inlineCode",{parentName:"p"},"keyDefault")," on key attributes and ",(0,r.kt)("inlineCode",{parentName:"p"},"putDefault")," otherwise:"),(0,r.kt)("admonition",{title:"Examples",type:"note"},(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"put-update",label:"Put/Update",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const now = () => new Date().toISOString()\n\nconst timestampsSchema = record(string(), string())\n  .default(() => ({ created: now() }))\n  .updateDefault(() => ({ updated: now() }))\n// \ud83d\udc47 Similar to\nconst timestampsSchema = record(...)\n  .putDefault(() => ({ created: now() }))\n  .updateDefault(() => ({ updated: now() }))\n// \ud83d\udc47 ...or\nconst timestampsSchema = record(..., {\n  defaults: {\n    key: undefined,\n    put: () => ({ created: now() }),\n    update: () => ({ updated: now() })\n  }\n})\n"))),(0,r.kt)(l.Z,{value:"key",label:"Key",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const idsSchema = record(string(), string())\n  .key()\n  .default({ abc: '123' })\n// \ud83d\udc47 Similar to\nconst idsSchema = record(...)\n  .key()\n  .keyDefault({ abc: '123' })\n// \ud83d\udc47 ...or\nconst idsSchema = record(..., {\n  defaults: {\n    key: { abc: '123' },\n    // put & update defaults are not useful in `key` attributes\n    put: undefined,\n    update: undefined\n  },\n  key: true,\n  required: 'always'\n})\n"))))),(0,r.kt)("h3",{id:"linkschema"},(0,r.kt)("inlineCode",{parentName:"h3"},".link<Schema>(...)")),(0,r.kt)("p",{style:{marginTop:"-15px"}},(0,r.kt)("i",null,(0,r.kt)("code",null,"Link<SCHEMA, ATTRIBUTES>"))),(0,r.kt)("p",null,"Similar to ",(0,r.kt)("a",{parentName:"p",href:"#default"},(0,r.kt)("inlineCode",{parentName:"a"},".default(...)"))," but allows deriving the default value from other attributes. See ",(0,r.kt)("a",{parentName:"p",href:"/docs/schemas/defaults-and-links/"},"Defaults and Links")," for more details:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const pokemonSchema = schema({\n  name: string()\n}).and(prevSchema => ({\n  parsedName: record(string(), string()).link<\n    typeof prevSchema\n  >(\n    // \ud83d\ude4c Correctly typed!\n    ({ name }) => {\n      const [firstName, lastName] = name.split(' ')\n      return { firstName, lastName }\n    }\n  )\n}))\n")))}m.isMDXComponent=!0}}]);