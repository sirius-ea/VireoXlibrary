import{d as h,x as b,a as V,b as x,o as l,c as a,n as i,t as d,q as n,e as p,p as u}from"./vue.esm-bundler-b6bff0ca.js";import{V as c}from"./VrxIcon-d7483d7b.js";import{i as k}from"./styles-cba61512.js";/* empty css                                                                 */import{_ as g}from"./_plugin-vue_export-helper-c27b6911.js";const B={"data-testid":"vrx-input",class:"vrxinput-style"},I={class:"relative"},C={key:0,class:"absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"},T=["type","placeholder","disabled","value","readonly"],_=h({__name:"VrxInput",props:{label:{},placeholder:{default:"Insert Text"},type:{default:"text"},disabled:{type:Boolean},modelValue:{},helperText:{},invalid:{type:Boolean},icon:{},height:{},readonly:{type:Boolean}},emits:["update:modelValue"],setup(m,{emit:v}){b(e=>({"5e5683ee":o.height+"px"}));const o=m,s=V(!1),y=v,f=e=>y("update:modelValue",e.target.value),t=x(()=>k(o.invalid||!1,o.disabled||!1,o.icon));return(e,r)=>(l(),a("div",B,[e.label?(l(),a("label",{key:0,"data-testid":"vrx-input-label",class:i(["block mb-2 text-sm font-medium",t.value.label])},d(e.label),3)):n("",!0),p("div",I,[e.icon?(l(),a("div",C,[u(c,{icon:e.icon,color:t.value.icon,size:"5"},null,8,["icon","color"])])):n("",!0),p("input",{"data-testid":"vrx-input-field",type:s.value?"text":e.type,placeholder:e.placeholder,disabled:e.disabled,value:e.modelValue,readonly:e.readonly,onInput:f,class:i(["vrx-input vrxinput-input-style",t.value.input])},null,42,T),e.type==="password"&&e.modelValue&&e.modelValue.length>0?(l(),a("div",{key:1,class:"absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer",onClick:r[0]||(r[0]=()=>s.value=!s.value)},[u(c,{icon:s.value?"eye-hide":"eye",color:t.value.icon,size:"5"},null,8,["icon","color"])])):n("",!0)]),e.helperText?(l(),a("p",{key:1,"data-testid":"vrx-input-helper",class:i(["mt-2 text-sm",t.value.helperText])},d(e.helperText),3)):n("",!0)]))}}),D=g(_,[["__scopeId","data-v-2b6ffa09"]]);export{D as V};