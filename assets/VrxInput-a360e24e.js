import{d as f,v as b,a as V,b as x,o as t,c as l,n as i,t as d,l as a,e as p,k as u,r as k}from"./vue.esm-bundler-bf410490.js";import{V as c}from"./VrxIcon-8b276aaa.js";import{i as g}from"./styles-cba61512.js";/* empty css                                                                 */import{_ as B}from"./_plugin-vue_export-helper-c27b6911.js";const I={"data-testid":"vrx-input",class:"vrxinput-style"},C={class:"relative"},T={key:0,class:"absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"},_=["type","placeholder","disabled","value","readonly"],w={key:1,class:"absolute inset-y-0 right-0 flex items-center pr-3"},z=f({__name:"VrxInput",props:{label:{},placeholder:{default:"Insert Text"},type:{default:"text"},disabled:{type:Boolean},modelValue:{},helperText:{},invalid:{type:Boolean},icon:{},height:{},readonly:{type:Boolean}},emits:["update:modelValue"],setup(m,{emit:v}){b(e=>({"48f4a6fc":o.height+"px"}));const o=m,r=V(!1),y=v,h=e=>y("update:modelValue",e.target.value),s=x(()=>g(o.invalid||!1,o.disabled||!1,o.icon));return(e,n)=>(t(),l("div",I,[e.label?(t(),l("label",{key:0,"data-testid":"vrx-input-label",class:i(["block mb-2 text-sm font-medium",s.value.label])},d(e.label),3)):a("",!0),p("div",C,[e.icon?(t(),l("div",T,[u(c,{icon:e.icon,color:s.value.icon,size:"5"},null,8,["icon","color"])])):a("",!0),p("input",{"data-testid":"vrx-input-field",type:r.value?"text":e.type,placeholder:e.placeholder,disabled:e.disabled,value:e.modelValue,readonly:e.readonly,onInput:h,class:i(["vrx-input vrxinput-input-style",s.value.input])},null,42,_),e.$slots.right?(t(),l("div",w,[k(e.$slots,"right",{},void 0,!0)])):a("",!0),e.type==="password"&&e.modelValue&&e.modelValue.length>0?(t(),l("div",{key:2,class:"absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer",onClick:n[0]||(n[0]=()=>r.value=!r.value)},[u(c,{icon:r.value?"eye-hide":"eye",color:s.value.icon,size:"5"},null,8,["icon","color"])])):a("",!0)]),e.helperText?(t(),l("p",{key:1,"data-testid":"vrx-input-helper",class:i(["mt-2 text-sm",s.value.helperText])},d(e.helperText),3)):a("",!0)]))}}),P=B(z,[["__scopeId","data-v-72e70647"]]);export{P as V};
