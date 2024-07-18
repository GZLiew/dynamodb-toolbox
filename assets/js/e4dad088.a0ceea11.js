"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3771],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return n?a.createElement(f,l(l({ref:t},p),{},{components:n})):a.createElement(f,l({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(67294),r=n(86010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>w});var a=n(87462),r=n(67294),o=n(86010),l=n(12466),i=n(76775),s=n(91980),u=n(67392),p=n(50012);function c(e){return function(e){var t;return(null==(t=r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function d(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??c(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function k(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=d(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[s,u]=f({queryString:n,groupId:a}),[c,k]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,p.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),h=(()=>{const e=s??c;return m({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{h&&i(h)}),[h]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),k(e)}),[u,k,o]),tabValues:o}}var h=n(72389);const y="tabList__CuJ",g="tabItem_LNqP";function b(e){let{className:t,block:n,selectedValue:i,selectValue:s,tabValues:u}=e;const p=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),d=e=>{const t=e.currentTarget,n=p.indexOf(t),a=u[n].value;a!==i&&(c(t),s(a))},m=e=>{var t;let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=p.indexOf(e.currentTarget)+1;n=p[t]??p[0];break}case"ArrowLeft":{const t=p.indexOf(e.currentTarget)-1;n=p[t]??p[p.length-1];break}}null==(t=n)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>p.push(e),onKeyDown:m,onClick:d},l,{className:(0,o.Z)("tabs__item",g,null==l?void 0:l.className,{"tabs__item--active":i===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function N(e){const t=k(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",y)},r.createElement(b,(0,a.Z)({},e,t)),r.createElement(v,(0,a.Z)({},e,t)))}function w(e){const t=(0,h.Z)();return r.createElement(N,(0,a.Z)({key:String(t)},e))}},99880:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>c});var a=n(87462),r=(n(67294),n(3905)),o=n(74866),l=n(85162);const i={title:"anyOf",sidebar_custom_props:{code:!0}},s="AnyOf",u={unversionedId:"schemas/anyOf/index",id:"schemas/anyOf/index",title:"anyOf",description:"Defines a union of types, i.e. a range of possible types:",source:"@site/docs/4-schemas/13-anyOf/index.md",sourceDirName:"4-schemas/13-anyOf",slug:"/schemas/anyOf/",permalink:"/docs/schemas/anyOf/",draft:!1,tags:[],version:"current",frontMatter:{title:"anyOf",sidebar_custom_props:{code:!0}},sidebar:"tutorialSidebar",previous:{title:"record",permalink:"/docs/schemas/record/"},next:{title:"Parse",permalink:"/docs/schemas/actions/parse"}},p={},c=[{value:"Options",id:"options",level:2},{value:"<code>.required()</code>",id:"required",level:3},{value:"<code>.hidden()</code>",id:"hidden",level:3},{value:"<code>.key()</code>",id:"key",level:3},{value:"<code>.savedAs(...)</code>",id:"savedas",level:3},{value:"<code>.default(...)</code>",id:"default",level:3},{value:"<code>.link&lt;Schema&gt;(...)</code>",id:"linkschema",level:3}],d={toc:c};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"anyof"},"AnyOf"),(0,r.kt)("p",null,"Defines a ",(0,r.kt)("strong",{parentName:"p"},"union of types"),", i.e. a range of possible types:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { anyOf } from 'dynamodb-toolbox/attributes/anyOf'\n\nconst pokemonSchema = schema({\n  ...\n  pokeType: anyOf(\n    string().const('fire'),\n    string().const('grass'),\n    string().const('water')\n  )\n})\n\ntype FormattedPokemon = FormattedItem<typeof PokemonEntity>\n// => {\n//   ...\n//   pokeType: 'fire' | 'grass' | 'water'\n// }\n")),(0,r.kt)("p",null,"In this particular case, an ",(0,r.kt)("inlineCode",{parentName:"p"},"enum")," would have done the trick. However, ",(0,r.kt)("inlineCode",{parentName:"p"},"anyOf")," becomes particularly powerful when used in conjunction with a ",(0,r.kt)("inlineCode",{parentName:"p"},"map")," and the ",(0,r.kt)("inlineCode",{parentName:"p"},"enum")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"const")," directives of a primitive attribute, to implement ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Polymorphism_(computer_science)"},(0,r.kt)("strong",{parentName:"a"},"polymorphism")),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'const pokemonSchema = schema({\n  ...\n  captureState: anyOf([\n    map({\n      status: string().const(\'caught\'),\n      // \ud83d\udc47 captureState.trainerId exists if status is "caught"...\n      trainerId: string()\n    }),\n    // ...but not otherwise! \ud83d\ude4c\n    map({ status: string().const(\'wild\') })\n  ])\n})\n\ntype FormattedPokemon = FormattedItem<typeof PokemonEntity>\n// => {\n//   ...\n//   captureState:\n//     | { status: "caught", trainerId: string }\n//     | { status: "wild" }\n// }\n')),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"For the moment, ",(0,r.kt)("inlineCode",{parentName:"p"},"anyOf")," properties can only be set by using methods.")),(0,r.kt)("p",null,"AnyOf elements can have any type. However, they must respect some constraints:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"They cannot be ",(0,r.kt)("inlineCode",{parentName:"li"},"optional")," or always required"),(0,r.kt)("li",{parentName:"ul"},"They cannot be ",(0,r.kt)("inlineCode",{parentName:"li"},"hidden")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"key")," (tagging the ",(0,r.kt)("inlineCode",{parentName:"li"},"record")," itself as ",(0,r.kt)("inlineCode",{parentName:"li"},"key")," is enough)"),(0,r.kt)("li",{parentName:"ul"},"They cannot have ",(0,r.kt)("inlineCode",{parentName:"li"},"default")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"links"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// \u274c Raises a type AND a run-time error\nconst union = anyOf(number(), string().optional())\nconst union = anyOf(number(), string().hidden())\nconst union = anyOf(number(), string().key())\nconst union = anyOf(number(), string().default('foo'))\n")),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("h3",{id:"required"},(0,r.kt)("inlineCode",{parentName:"h3"},".required()")),(0,r.kt)("p",{style:{marginTop:"-15px"}},(0,r.kt)("i",null,(0,r.kt)("code",null,"string | undefined"))),(0,r.kt)("p",null,"Tags the attribute as ",(0,r.kt)("strong",{parentName:"p"},"required")," (at root level or within ",(0,r.kt)("a",{parentName:"p",href:"/docs/schemas/map/"},"Maps"),"). Possible values are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,'"atLeastOnce" ',(0,r.kt)("i",null,"(default)")),": Required"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'"always"'),": Always required (including updates)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'"never"'),": Optional")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const pokeTypeSchema = anyOf(\n  string().const('fire'),\n  string().const('grass'),\n  string().const('water')\n).required()\n\n// shorthand for `.required(\"never\")`\nconst pokeTypeSchema = anyOf(...).optional()\n")),(0,r.kt)("h3",{id:"hidden"},(0,r.kt)("inlineCode",{parentName:"h3"},".hidden()")),(0,r.kt)("p",{style:{marginTop:"-15px"}},(0,r.kt)("i",null,(0,r.kt)("code",null,"boolean | undefined"))),(0,r.kt)("p",null,"Skips the attribute when formatting items:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const pokeTypeSchema = anyOf(\n  string().const('fire'),\n  string().const('grass'),\n  string().const('water')\n).hidden()\n")),(0,r.kt)("h3",{id:"key"},(0,r.kt)("inlineCode",{parentName:"h3"},".key()")),(0,r.kt)("p",{style:{marginTop:"-15px"}},(0,r.kt)("i",null,(0,r.kt)("code",null,"boolean | undefined"))),(0,r.kt)("p",null,"Tags the attribute as needed to compute the primary key:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// Note: The method also sets the `required` property to \"always\"\n// (it is often the case in practice, you can still use `.optional()` if needed)\nconst pokeTypeSchema = anyOf(\n  string().const('fire'),\n  string().const('grass'),\n  string().const('water')\n).key()\n")),(0,r.kt)("h3",{id:"savedas"},(0,r.kt)("inlineCode",{parentName:"h3"},".savedAs(...)")),(0,r.kt)("p",{style:{marginTop:"-15px"}},(0,r.kt)("i",null,(0,r.kt)("code",null,"string"))),(0,r.kt)("p",null,"Renames the attribute during the ",(0,r.kt)("a",{parentName:"p",href:"/docs/schemas/actions/parse"},"transformation step")," (at root level or within ",(0,r.kt)("a",{parentName:"p",href:"/docs/schemas/map/"},"Maps"),"):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const pokeTypeSchema = anyOf(\n  string().const('fire'),\n  string().const('grass'),\n  string().const('water')\n).savedAs('pkt')\n")),(0,r.kt)("h3",{id:"default"},(0,r.kt)("inlineCode",{parentName:"h3"},".default(...)")),(0,r.kt)("p",{style:{marginTop:"-15px"}},(0,r.kt)("i",null,(0,r.kt)("code",null,"ValueOrGetter<ATTRIBUTES>"))),(0,r.kt)("p",null,"Specifies default values for the attribute. There are three kinds of defaults:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"putDefault"),": Applied on put actions (e.g. ",(0,r.kt)("a",{parentName:"li",href:"/docs/entities/actions/put-item/"},(0,r.kt)("inlineCode",{parentName:"a"},"PutItemCommand")),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"updateDefault"),": Applied on update actions (e.g. ",(0,r.kt)("a",{parentName:"li",href:"/docs/entities/actions/update-item/"},(0,r.kt)("inlineCode",{parentName:"a"},"UpdateItemCommand")),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"keyDefault"),": Overrides other defaults on ",(0,r.kt)("a",{parentName:"li",href:"#key"},"key")," attributes (ignored otherwise)")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"default")," method is a shorthand that acts as ",(0,r.kt)("inlineCode",{parentName:"p"},"keyDefault")," on key attributes and ",(0,r.kt)("inlineCode",{parentName:"p"},"putDefault")," otherwise:"),(0,r.kt)("admonition",{title:"Examples",type:"note"},(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"put-update",label:"Put/Update",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const now = () => new Date().toISOString()\n\nconst hasUpdateSchema = anyOf(\n  map({ hasUpdate: boolean().const(false) }),\n  map({ hasUpdate: boolean().const(true), date: string() })\n)\n  .default(() => ({ hasUpdate: false }))\n  .updateDefault(() => ({ hasUpdate: true, date: now() }))\n// \ud83d\udc47 Similar to\nconst timestampsSchema = anyOf('...')\n  .putDefault(() => ({ hasUpdate: false }))\n  .updateDefault(() => ({ hasUpdate: true, date: now() }))\n"))),(0,r.kt)(l.Z,{value:"key",label:"Key",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const idsSchema = anyOf(\n  map({\n    hasSubId: boolean().const(false),\n    id: string()\n  }),\n  map({\n    hasSubId: boolean().const(true),\n    id: string(),\n    subId: string()\n  })\n)\n  .key()\n  .default({ hasSubId: false, id: '123' })\n// \ud83d\udc47 Similar to\nconst idsSchema = anyOf(...)\n  .key()\n  .keyDefault({ hasSubId: false, id: '123' })\n"))))),(0,r.kt)("h3",{id:"linkschema"},(0,r.kt)("inlineCode",{parentName:"h3"},".link<Schema>(...)")),(0,r.kt)("p",{style:{marginTop:"-15px"}},(0,r.kt)("i",null,(0,r.kt)("code",null,"Link<SCHEMA, ELEMENTS>"))),(0,r.kt)("p",null,"Similar to ",(0,r.kt)("a",{parentName:"p",href:"#default"},(0,r.kt)("inlineCode",{parentName:"a"},".default(...)"))," but allows deriving the default value from other attributes. See ",(0,r.kt)("a",{parentName:"p",href:"/docs/schemas/defaults-and-links/"},"Defaults and Links")," for more details:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const pokemonSchema = schema({\n  name: string().optional(),\n  level: number()\n}).and(prevSchema => ({\n  metadata: anyOf(string(), number()).link<\n    typeof prevSchema\n  >(\n    // \ud83d\ude4c Correctly typed!\n    ({ name, level }) => name ?? level\n  )\n}))\n")))}m.isMDXComponent=!0}}]);