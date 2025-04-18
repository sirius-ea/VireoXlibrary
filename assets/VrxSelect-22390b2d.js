import{d as M,v as A,a as g,b as K,o as l,c as a,p as T,q as p,w as P,n as r,t as w,l as i,e as u,I as b,F as x,s as F,M as V,y as q,k as L}from"./vue.esm-bundler-bf410490.js";import{V as f}from"./VrxIcon-8b276aaa.js";import{s as H}from"./styles-cba61512.js";import{v as U}from"./appendToBody-63fe8568.js";import{v as W}from"./clickOutside-c990cfcd.js";import{v as j}from"./v4-4a60fe23.js";/* empty css                                                                  */import{_ as G}from"./_plugin-vue_export-helper-c27b6911.js";let B=null,z=null;const O=()=>{(!z||Q(z))&&B&&B()},J={mounted:function(m,v){B=v.value[0],z=m,window.addEventListener("scroll",O)},beforeUnmount:function(m){window.removeEventListener("scroll",O)}},Q=m=>{const v=m.getBoundingClientRect(),h=0,o=0,c=window.innerHeight,k=window.innerWidth;return v.top>=c||v.left>=k||v.bottom<=h||v.right<=o},X=["for"],Y=["id","data-toggle"],Z={class:"button-left-side"},ee={class:"selected-container"},le={key:1,class:"selected-container"},te=["data-testid"],oe={class:"element-label"},se={key:1},ae={class:"element-label"},ne={class:"button-right-side"},ie=["id"],ce={key:0,class:"w-full"},de=["placeholder"],ue={class:"overflow-y-auto w-full"},re=["data-testid","onClick"],ve={class:"element-label"},fe=M({__name:"VrxSelect",props:{label:{default:""},placeholder:{default:"Select option"},icon:{},disabled:{type:Boolean,default:!1},invalid:{type:Boolean,default:!1},helperText:{default:""},listData:{},modelValue:{},variant:{default:"default"},multiselect:{type:Boolean,default:!1},height:{},onSelect:{},onClear:{},searchable:{type:Boolean},searchPlaceholder:{default:"Search"},showRemove:{type:Boolean,default:!0},elementClass:{}},emits:["update:modelValue"],setup(m,{emit:v}){A(e=>({"1e105f29":e.height+"px"}));const h=j(),o=m,c=g(!1),k=g(!1),s=g(o.modelValue),C=g(o.listData),S=v,d=K(()=>H(o.disabled,o.invalid,o.variant)),$=()=>{c.value=!1},R=e=>{e&&(C.value=o.listData.filter(n=>n.label.toLowerCase().includes(e.target.value.toLowerCase())))},_=()=>{setTimeout(()=>{C.value=o.listData,!o.disabled&&k.value===!1&&(c.value=!1)},10)},D=e=>{k.value=e},E=()=>{o.disabled||(c.value=!1,s.value.splice(0),S("update:modelValue",s.value),o.onClear&&o.onClear())},I=e=>{if(!o.disabled){if(!o.multiselect)c.value=!1,s.value=[e];else{const n=s.value.findIndex(t=>t.value===e.value);n>-1?s.value.splice(n,1):s.value.push(e)}S("update:modelValue",s.value),o.onSelect&&o.onSelect(e)}};return(e,n)=>(l(),a(x,null,[T((l(),a("div",{"data-testid":"vrx-select",class:"relative w-full",tabindex:"0",onKeyup:P(_,["esc"])},[e.label?(l(),a("label",{key:0,"data-testid":"vrx-select-label",class:r(["block mb-2 text-sm font-medium",d.value.label]),for:p(h)},w(e.label),11,X)):i("",!0),u("div",{"data-testid":"vrx-select-button",id:p(h),ref:"toggle",onClick:n[0]||(n[0]=t=>e.disabled?null:c.value=!c.value),class:r(["button text-sm rounded-lg p-2.5 block w-full",[c.value?d.value.select+" open-overlay":d.value.select,e.elementClass]]),"data-toggle":"dropdown-"+p(h)},[u("div",Z,[e.icon?(l(),b(f,{key:0,icon:e.icon,color:d.value.icon,size:"5"},null,8,["icon","color"])):i("",!0),u("div",ee,[s.value.length===0?(l(),a("div",{key:0,class:r(d.value.placeholder)},w(e.placeholder),3)):(l(),a("div",le,[e.multiselect?(l(!0),a(x,{key:0},F(s.value,(t,y)=>(l(),a("div",{"data-testid":"vrx-select-dropdown-selected-"+y,class:r([d.value.selected,"p-0.5 item-selected"])},[u("div",oe,[t.icon?(l(),b(f,{key:0,icon:t.icon,size:"4"},null,8,["icon"])):i("",!0),V(" "+w(t.label),1)]),L(f,{icon:"x",size:"4",onClick:N=>I(t)},null,8,["onClick"])],10,te))),256)):i("",!0),e.multiselect?i("",!0):(l(),a("div",se,[u("div",ae,[s.value[0].icon?(l(),b(f,{key:0,icon:s.value[0].icon,size:"4"},null,8,["icon"])):i("",!0),V(" "+w(s.value[0].label),1)])]))]))])]),u("div",ne,[s.value.length>0&&e.showRemove?(l(),b(f,{key:0,"data-testid":"vrx-deselect-button",icon:"x",size:"4",color:d.value.icon,onMousedown:q(E,["stop"])},null,8,["color"])):i("",!0),L(f,{icon:"chevron-down",class:r(c.value?"icon-active":"icon-off"),size:"5",color:d.value.icon},null,8,["class","color"])])],10,Y),e.helperText?(l(),a("p",{key:1,"data-testid":"vrx-select-helper",class:r(["mt-2 text-sm",d.value.helperText])},w(e.helperText),3)):i("",!0)],32)),[[p(W),_]]),c.value?(l(),a("div",{key:0,class:"fixed top-0 left-0 w-full h-full z-20",onClick:_},[c.value?T((l(),a("div",{key:0,"data-testid":"vrx-select-dropdown",class:r(["menu text-sm",d.value.dropdown]),role:"listbox",id:"dropdown-"+p(h)},[e.searchable?(l(),a("div",ce,[u("input",{type:"text",placeholder:e.searchPlaceholder,class:"w-full p-2.5 focus:outline-none bg-transparent",onInput:n[1]||(n[1]=t=>R(t)),onFocus:n[2]||(n[2]=t=>D(!0)),onFocusout:n[3]||(n[3]=t=>D(!1))},null,40,de)])):i("",!0),u("div",ue,[(l(!0),a(x,null,F(C.value,(t,y)=>(l(),a("div",{key:y,class:r(["dropdown-item w-full vrxselect-dropdown-item",d.value.dropdownItem])},[u("div",{"data-testid":"vrx-select-dropdown-"+y,class:r(["dropdown-item-content w-full h-full p-2.5",s.value.includes(t)?"vrxselect-included-style":""]),onClick:N=>I(t)},[u("div",ve,[t.icon?(l(),b(f,{key:0,icon:t.icon,size:"4"},null,8,["icon"])):i("",!0),V(" "+w(t.label),1)]),s.value.includes(t)?(l(),b(f,{key:0,icon:"check",size:"4",color:d.value.icon},null,8,["color"])):i("",!0)],10,re)],2))),128))])],10,ie)),[[p(J),[$]],[p(U),e.$refs.toggle]]):i("",!0)])):i("",!0)],64))}}),Ce=G(fe,[["__scopeId","data-v-a4cdc523"]]);export{Ce as V};
