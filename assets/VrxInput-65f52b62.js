import{d as f,k as h,a as b,j as V,o as l,c as a,n as r,t as d,f as n,b as p,e as u}from"./vue.esm-bundler-d08935b9.js";import{V as c}from"./VrxIcon-37b9b772.js";import{i as x}from"./styles-58edb9be.js";import{_}from"./_plugin-vue_export-helper-c27b6911.js";const k={"data-testid":"vrx-input",class:"vrxinput-style"},g={class:"relative"},I={key:0,class:"absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"},B=["type","placeholder","disabled","value","readonly"],C=f({__name:"VrxInput",props:{label:{},placeholder:{default:"Insert Text"},type:{default:"text"},disabled:{type:Boolean},modelValue:{},helperText:{},invalid:{type:Boolean},icon:{},height:{},readonly:{type:Boolean}},emits:["update:modelValue"],setup(m,{emit:v}){const s=m;h(e=>({"5e5683ee":s.height+"px"}));const o=b(!1),y=e=>v("update:modelValue",e.target.value),t=V(()=>x(s.invalid||!1,s.disabled||!1,s.icon));return(e,i)=>(l(),a("div",k,[e.label?(l(),a("label",{key:0,"data-testid":"vrx-input-label",class:r(["block mb-2 text-sm font-medium",t.value.label])},d(e.label),3)):n("",!0),p("div",g,[e.icon?(l(),a("div",I,[u(c,{icon:e.icon,color:t.value.icon,size:"5"},null,8,["icon","color"])])):n("",!0),p("input",{"data-testid":"vrx-input-field",type:o.value?"text":e.type,placeholder:e.placeholder,disabled:e.disabled,value:e.modelValue,readonly:e.readonly,onInput:y,class:r(["vrx-input vrxinput-input-style",t.value.input])},null,42,B),e.type==="password"&&e.modelValue&&e.modelValue.length>0?(l(),a("div",{key:1,class:"absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer",onClick:i[0]||(i[0]=()=>o.value=!o.value)},[u(c,{icon:o.value?"eye-hide":"eye",color:t.value.icon,size:"5"},null,8,["icon","color"])])):n("",!0)]),e.helperText?(l(),a("p",{key:1,"data-testid":"vrx-input-helper",class:r(["mt-2 text-sm",t.value.helperText])},d(e.helperText),3)):n("",!0)]))}});const S=_(C,[["__scopeId","data-v-2b6ffa09"]]);export{S as V};
//# sourceMappingURL=VrxInput-65f52b62.js.map