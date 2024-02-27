import{d as N,x as A,a as k,b as K,o as l,c as a,s as B,v as p,w as M,n as u,t as f,q as n,e as r,y as m,F as C,k as S,z as x,p as D,A as O}from"./vue.esm-bundler-b6bff0ca.js";import{V as v}from"./VrxIcon-6c0e4da8.js";import{s as P}from"./styles-117b2ca5.js";import{v as R}from"./appendToBody-70f0f50f.js";import{v as q}from"./clickOutside-c990cfcd.js";import{v as E}from"./v4-4a60fe23.js";/* empty css                                                                  */import{_ as j}from"./_plugin-vue_export-helper-c27b6911.js";const G=["for"],H=["id","data-toggle"],J={class:"button-left-side"},Q={class:"selected-container"},U={key:1,class:"selected-container"},W=["data-testid"],X={class:"element-label"},Y={key:1},Z={class:"element-label"},ee={class:"button-right-side"},le=["id"],te={key:0,class:"w-full"},se=["placeholder"],oe=["data-testid","onClick"],ae={class:"element-label"},ie=N({__name:"VrxSelect",props:{label:{default:""},placeholder:{default:"Select option"},icon:{},disabled:{type:Boolean,default:!1},invalid:{type:Boolean,default:!1},helperText:{default:""},listData:{},modelValue:{},variant:{default:"default"},multiselect:{type:Boolean,default:!1},height:{},onSelect:{},onClear:{},searchable:{type:Boolean},searchPlaceholder:{default:"Search"},showRemove:{type:Boolean,default:!0},elementClass:{}},emits:["update:modelValue"],setup(F,{emit:T}){A(e=>({bc6da62c:e.height+"px"}));const h=E(),s=F,c=k(!1),g=k(!1),o=k(s.modelValue),y=k(s.listData),_=T,d=K(()=>P(s.disabled,s.invalid,s.variant)),I=e=>{e&&(y.value=s.listData.filter(i=>i.label.toLowerCase().includes(e.target.value.toLowerCase())))},w=()=>{setTimeout(()=>{y.value=s.listData,!s.disabled&&g.value===!1&&(c.value=!1)},10)},V=e=>{g.value=e},$=()=>{s.disabled||(c.value=!1,o.value.splice(0),_("update:modelValue",o.value),s.onClear&&s.onClear())},z=e=>{if(!s.disabled){if(!s.multiselect)c.value=!1,o.value=[e];else{const i=o.value.findIndex(t=>t.value===e.value);i>-1?o.value.splice(i,1):o.value.push(e)}_("update:modelValue",o.value),s.onSelect&&s.onSelect(e)}};return(e,i)=>(l(),a(C,null,[B((l(),a("div",{"data-testid":"vrx-select",class:"relative w-full",tabindex:"0",onKeyup:M(w,["esc"])},[e.label?(l(),a("label",{key:0,"data-testid":"vrx-select-label",class:u(["block mb-2 text-sm font-medium",d.value.label]),for:p(h)},f(e.label),11,G)):n("",!0),r("div",{"data-testid":"vrx-select-button",id:p(h),ref:"toggle",onClick:i[0]||(i[0]=t=>e.disabled?null:c.value=!c.value),class:u(["button text-sm rounded-lg p-2.5 block w-full",[c.value?d.value.select+" open-overlay":d.value.select,e.elementClass]]),"data-toggle":"dropdown-"+p(h)},[r("div",J,[e.icon?(l(),m(v,{key:0,icon:e.icon,color:d.value.icon,size:"5"},null,8,["icon","color"])):n("",!0),r("div",Q,[o.value.length===0?(l(),a("div",{key:0,class:u(d.value.placeholder)},f(e.placeholder),3)):(l(),a("div",U,[e.multiselect?(l(!0),a(C,{key:0},S(o.value,(t,b)=>(l(),a("div",{"data-testid":"vrx-select-dropdown-selected-"+b,class:u([d.value.selected,"p-0.5 item-selected"])},[r("div",X,[t.icon?(l(),m(v,{key:0,icon:t.icon,size:"4"},null,8,["icon"])):n("",!0),x(" "+f(t.label),1)]),D(v,{icon:"x",size:"4",onClick:L=>z(t)},null,8,["onClick"])],10,W))),256)):n("",!0),e.multiselect?n("",!0):(l(),a("div",Y,[r("div",Z,[o.value[0].icon?(l(),m(v,{key:0,icon:o.value[0].icon,size:"4"},null,8,["icon"])):n("",!0),x(" "+f(o.value[0].label),1)])]))]))])]),r("div",ee,[o.value.length>0&&e.showRemove?(l(),m(v,{key:0,"data-testid":"vrx-deselect-button",icon:"x",size:"4",color:d.value.icon,onMousedown:O($,["stop"])},null,8,["color"])):n("",!0),D(v,{icon:"chevron-down",class:u(c.value?"icon-active":"icon-off"),size:"5",color:d.value.icon},null,8,["class","color"])])],10,H),e.helperText?(l(),a("p",{key:1,"data-testid":"vrx-select-helper",class:u(["mt-2 text-sm",d.value.helperText])},f(e.helperText),3)):n("",!0)],32)),[[p(q),w]]),c.value?(l(),a("div",{key:0,class:"fixed top-0 left-0 w-full h-full z-20",onClick:w},[c.value?B((l(),a("div",{key:0,"data-testid":"vrx-select-dropdown",class:u(["menu text-sm",d.value.dropdown]),role:"listbox",id:"dropdown-"+p(h)},[e.searchable?(l(),a("div",te,[r("input",{type:"text",placeholder:e.searchPlaceholder,class:"w-full p-2.5 focus:outline-none bg-transparent",onInput:i[1]||(i[1]=t=>I(t)),onFocus:i[2]||(i[2]=t=>V(!0)),onFocusout:i[3]||(i[3]=t=>V(!1))},null,40,se)])):n("",!0),(l(!0),a(C,null,S(y.value,(t,b)=>(l(),a("div",{key:b,class:u(["dropdown-item w-full vrxselect-dropdown-item",d.value.dropdownItem])},[r("div",{"data-testid":"vrx-select-dropdown-"+b,class:u(["dropdown-item-content w-full h-full p-2.5",o.value.includes(t)?"vrxselect-included-style":""]),onClick:L=>z(t)},[r("div",ae,[t.icon?(l(),m(v,{key:0,icon:t.icon,size:"4"},null,8,["icon"])):n("",!0),x(" "+f(t.label),1)]),o.value.includes(t)?(l(),m(v,{key:0,icon:"check",size:"4",color:d.value.icon},null,8,["color"])):n("",!0)],10,oe)],2))),128))],10,le)),[[p(R),e.$refs.toggle]]):n("",!0)])):n("",!0)],64))}}),me=j(ie,[["__scopeId","data-v-8d658102"]]);export{me as V};
