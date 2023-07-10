import{d as g,p as S,l as k,e as B,o as l,c as o,n as i,k as c,i as n,j as r,g as m,F as y,f as _,q as x,s as z}from"./vue.esm-bundler-b58da939.js";import{V as p}from"./VrxIcon-3a647d51.js";import{s as T}from"./styles-6560abd0.js";import{_ as D}from"./_plugin-vue_export-helper-c27b6911.js";const F={class:"button-left-side"},N={class:"selected-container"},$={key:1,class:"selected-container"},I=["data-testid"],L={key:1},j={class:"button-right-side"},q=["data-testid","onClick"],A=g({__name:"VrxSelect",props:{label:{default:""},placeholder:{default:"Select option"},icon:{},disabled:{type:Boolean,default:!1},invalid:{type:Boolean,default:!1},helperText:{default:""},listData:{},modelValue:{},variant:{default:"default"},multiselect:{type:Boolean,default:!1},height:{},onSelect:{},onClear:{}},emits:["update:modelValue"],setup(V,{emit:h}){const s=V;S(e=>({"76d92e15":e.height+"px"}));const v=k(!1),t=k(s.modelValue),a=B(()=>T(s.disabled,s.invalid,s.variant)),w=()=>{s.disabled||(t.value=[],h("update:modelValue",t.value),s.onClear&&s.onClear())},b=e=>{s.disabled||(s.multiselect?t.value.includes(e)?t.value=t.value.filter(u=>u!==e):t.value.push(e):t.value=[e],h("update:modelValue",t.value),s.onSelect&&s.onSelect(e))};return(e,u)=>(l(),o("div",{"data-testid":"vrx-select",class:"relative w-full",tabindex:"0",onFocusout:u[0]||(u[0]=d=>e.disabled?null:v.value=!1),onFocus:u[1]||(u[1]=d=>e.disabled?null:v.value=!0)},[e.label?(l(),o("label",{key:0,"data-testid":"vrx-select-label",class:i(["block mb-2 text-sm font-medium",a.value.label])},c(e.label),3)):n("",!0),r("div",{"data-testid":"vrx-select-button",class:i(["button text-sm rounded-lg p-2.5 block w-full",v.value?a.value.select+" open-overlay":a.value.select])},[r("div",F,[e.icon?(l(),m(p,{key:0,icon:e.icon,color:a.value.icon,size:"5"},null,8,["icon","color"])):n("",!0),r("div",N,[t.value.length===0?(l(),o("div",{key:0,class:i(a.value.placeholder)},c(e.placeholder),3)):(l(),o("div",$,[e.multiselect?(l(!0),o(y,{key:0},_(t.value,(d,f)=>(l(),o("div",{"data-testid":"vrx-select-dropdown-selected-"+f,class:i([a.value.selected,"p-0.5 item-selected"])},[r("div",null,c(d.label),1),x(p,{icon:"x",size:"4",onClick:C=>b(d)},null,8,["onClick"])],10,I))),256)):n("",!0),e.multiselect?n("",!0):(l(),o("div",L,c(t.value[0].label),1))]))])]),r("div",j,[t.value.length>0?(l(),m(p,{key:0,icon:"x",size:"4",color:a.value.icon,onClick:w},null,8,["color"])):n("",!0),x(p,{icon:v.value?"chevron-up":"chevron-down",size:"4",color:a.value.icon},null,8,["icon","color"])])],2),v.value?(l(),o("div",{key:1,"data-testid":"vrx-select-dropdown",class:i(["menu text-sm",a.value.dropdown])},[(l(!0),o(y,null,_(e.listData,(d,f)=>(l(),o("div",{class:i(["dropdown-item w-full",a.value.dropdownItem])},[r("div",{"data-testid":"vrx-select-dropdown-"+f,class:"dropdown-item-content w-full h-full p-2.5",onClick:C=>b(d)},[z(c(d.label)+" ",1),t.value.includes(d)?(l(),m(p,{key:0,icon:"check",size:"4",color:a.value.icon},null,8,["color"])):n("",!0)],8,q)],2))),256))],2)):n("",!0),e.helperText?(l(),o("p",{key:2,"data-testid":"vrx-select-helper",class:i(["mt-2 text-sm",a.value.helperText])},c(e.helperText),3)):n("",!0)],32))}});const K=D(A,[["__scopeId","data-v-5fe46d4a"]]);export{K as V};
//# sourceMappingURL=VrxSelect-b2a23645.js.map