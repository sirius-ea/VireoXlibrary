import{d as E,k as L,a as y,f as $,o,c as n,w as B,l as O,n as c,t as f,i as d,e as u,h,F as w,g as z,m as g,b as S,p as N,u as K}from"./vue.esm-bundler-84f6f0ac.js";import{V as v}from"./VrxIcon-2a6c4c2e.js";import{s as M}from"./styles-70794e3d.js";/* empty css                                                                  */import{_ as R}from"./_plugin-vue_export-helper-c27b6911.js";const A={mounted:function(p,m){let t=m.value.toggle.getBoundingClientRect();p.style.width=t.width+"px",p.style.top=t.top+t.height+"px",p.style.left=t.left+"px",p.style.zIndex=1e6,document.body.appendChild(p)}},P=["onKeyup"],j={class:"button-left-side"},q={class:"selected-container"},G={key:1,class:"selected-container"},H=["data-testid"],J={class:"element-label"},Q={key:1},U={class:"element-label"},W={class:"button-right-side"},X={key:0,class:"w-full"},Y=["placeholder"],Z=["data-testid","onClick"],ee={class:"element-label"},le=E({__name:"VrxSelect",props:{label:{default:""},placeholder:{default:"Select option"},icon:{},disabled:{type:Boolean,default:!1},invalid:{type:Boolean,default:!1},helperText:{default:""},listData:{},modelValue:{},variant:{default:"default"},multiselect:{type:Boolean,default:!1},height:{},onSelect:{},onClear:{},searchable:{type:Boolean},searchPlaceholder:{default:"Search"},showRemove:{type:Boolean,default:!0}},emits:["update:modelValue"],setup(p,{emit:m}){const t=p;L(e=>({"2abe82b6":e.height+"px"}));const r=y(!1),C=y(!1),s=y(t.modelValue),k=y(t.listData),i=$(()=>M(t.disabled,t.invalid,t.variant)),D=e=>{e&&(k.value=t.listData.filter(a=>a.label.toLowerCase().includes(e.target.value.toLowerCase())))},T={mounted(e,a){e.clickOutsideEvent=function(l){e===l.target||e.contains(l.target)||a.value(l,e)},document.body.addEventListener("click",e.clickOutsideEvent)},unmounted(e){document.body.removeEventListener("click",e.clickOutsideEvent)}},x=()=>{setTimeout(()=>{k.value=t.listData,!t.disabled&&C.value===!1&&(r.value=!1)},10)},V=e=>{C.value=e},F=()=>{t.disabled||(r.value=!1,s.value.splice(0),m("update:modelValue",s.value),t.onClear&&t.onClear())},_=e=>{if(!t.disabled){if(!t.multiselect)r.value=!1,s.value=[e];else{const a=s.value.findIndex(l=>l.value===e.value);a>-1?s.value.splice(a,1):s.value.push(e)}m("update:modelValue",s.value),t.onSelect&&t.onSelect(e)}};return(e,a)=>(o(),n(w,null,[B((o(),n("div",{"data-testid":"vrx-select",class:"relative w-full",tabindex:"0",onKeyup:O(x,["esc"])},[e.label?(o(),n("label",{key:0,"data-testid":"vrx-select-label",class:c(["block mb-2 text-sm font-medium",i.value.label])},f(e.label),3)):d("",!0),u("div",{"data-testid":"vrx-select-button",onClick:a[0]||(a[0]=l=>e.disabled?null:r.value=!r.value),class:c(["button text-sm rounded-lg p-2.5 block w-full",r.value?i.value.select+" open-overlay":i.value.select]),ref:"toggle"},[u("div",j,[e.icon?(o(),h(v,{key:0,icon:e.icon,color:i.value.icon,size:"5"},null,8,["icon","color"])):d("",!0),u("div",q,[s.value.length===0?(o(),n("div",{key:0,class:c(i.value.placeholder)},f(e.placeholder),3)):(o(),n("div",G,[e.multiselect?(o(!0),n(w,{key:0},z(s.value,(l,b)=>(o(),n("div",{"data-testid":"vrx-select-dropdown-selected-"+b,class:c([i.value.selected,"p-0.5 item-selected"])},[u("div",J,[l.icon?(o(),h(v,{key:0,icon:l.icon,size:"4"},null,8,["icon"])):d("",!0),g(" "+f(l.label),1)]),S(v,{icon:"x",size:"4",onClick:I=>_(l)},null,8,["onClick"])],10,H))),256)):d("",!0),e.multiselect?d("",!0):(o(),n("div",Q,[u("div",U,[s.value[0].icon?(o(),h(v,{key:0,icon:s.value[0].icon,size:"4"},null,8,["icon"])):d("",!0),g(" "+f(s.value[0].label),1)])]))]))])]),u("div",W,[s.value.length>0&&e.showRemove?(o(),h(v,{key:0,"data-testid":"vrx-deselect-button",icon:"x",size:"4",color:i.value.icon,onMousedown:N(F,["stop"])},null,8,["color","onMousedown"])):d("",!0),S(v,{icon:"chevron-down",class:c(r.value?"icon-active":"icon-off"),size:"5",color:i.value.icon},null,8,["class","color"])])],2),e.helperText?(o(),n("p",{key:1,"data-testid":"vrx-select-helper",class:c(["mt-2 text-sm",i.value.helperText])},f(e.helperText),3)):d("",!0)],40,P)),[[T,x]]),r.value?B((o(),n("div",{key:0,"data-testid":"vrx-select-dropdown",id:"menu",class:c(["menu text-sm",i.value.dropdown]),appendToBody:""},[e.searchable?(o(),n("div",X,[u("input",{type:"text",placeholder:e.searchPlaceholder,class:"w-full p-2.5 focus:outline-none bg-transparent",onInput:a[1]||(a[1]=l=>D(l)),onFocus:a[2]||(a[2]=l=>V(!0)),onFocusout:a[3]||(a[3]=l=>V(!1))},null,40,Y)])):d("",!0),(o(!0),n(w,null,z(k.value,(l,b)=>(o(),n("div",{key:b,class:c(["dropdown-item w-full",i.value.dropdownItem])},[u("div",{"data-testid":"vrx-select-dropdown-"+b,class:c(["dropdown-item-content w-full h-full p-2.5",s.value.includes(l)?"bg-blue-100 dark:bg-blue-500":""]),onClick:I=>_(l)},[u("div",ee,[l.icon?(o(),h(v,{key:0,icon:l.icon,size:"4"},null,8,["icon"])):d("",!0),g(" "+f(l.label),1)]),s.value.includes(l)?(o(),h(v,{key:0,icon:"check",size:"4",color:i.value.icon},null,8,["color"])):d("",!0)],10,Z)],2))),128))],2)),[[K(A),e.$refs]]):d("",!0)],64))}}),ie=R(le,[["__scopeId","data-v-3309b278"]]);export{ie as V};
//# sourceMappingURL=VrxSelect-17fcdbaa.js.map
