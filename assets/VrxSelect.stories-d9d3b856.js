import{d as ne,j as B,e as ce,o as a,a as r,n as d,u as s,t as p,f as c,g as m,k as D,F as z,l as L,i as F,m as ie}from"./vue.esm-bundler-9a4344e6.js";import{V as b}from"./VrxIcon-fbd2d23d.js";import{s as de}from"./styles-fd87efcc.js";import{_ as ue}from"./_plugin-vue_export-helper-c27b6911.js";import"./_commonjsHelpers-725317a4.js";const pe={class:"button-left-side"},me={class:"selected-container"},ge={key:1,class:"selected-container"},ve=["data-testid"],ye={key:1},be={class:"button-right-side"},fe=["data-testid","onClick"],he=ne({__name:"VrxSelect",props:{label:{default:""},placeholder:{default:"Select option"},icon:null,disabled:{type:Boolean,default:!1},invalid:{type:Boolean,default:!1},helperText:{default:""},listData:null,modelValue:null,variant:{default:"default"},multiselect:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(t,{emit:I}){const i=t,v=B(!1),l=B(i.modelValue),o=ce(()=>de(i.disabled,i.invalid,i.variant)),se=()=>{i.disabled||(l.value=[],I("update:modelValue",l.value))},_=y=>{i.disabled||(i.multiselect?l.value.includes(y)?l.value=l.value.filter(u=>u!==y):l.value.push(y):l.value=[y],I("update:modelValue",l.value))};return(y,u)=>(a(),r("div",{"data-testid":"vrx-select",class:"relative w-full",tabindex:"0",onFocusout:u[0]||(u[0]=n=>t.disabled?null:v.value=!1),onFocus:u[1]||(u[1]=n=>t.disabled?null:v.value=!0)},[t.label?(a(),r("label",{key:0,"data-testid":"vrx-select-label",class:d(["block mb-2 text-sm font-medium",s(o).label])},p(t.label),3)):c("",!0),m("div",{"data-testid":"vrx-select-button",class:d(["button text-sm rounded-lg p-2.5 block w-full",v.value?s(o).select+" open-overlay":s(o).select])},[m("div",pe,[t.icon?(a(),D(b,{key:0,icon:t.icon,color:s(o).icon,size:"5"},null,8,["icon","color"])):c("",!0),m("div",me,[l.value.length===0?(a(),r("div",{key:0,class:d(s(o).placeholder)},p(t.placeholder),3)):(a(),r("div",ge,[t.multiselect?(a(!0),r(z,{key:0},L(l.value,(n,C)=>(a(),r("div",{"data-testid":"vrx-select-dropdown-selected-"+C,class:d([s(o).selected,"p-0.5 item-selected"])},[m("div",null,p(n.label),1),F(b,{icon:"x",size:"4",onClick:re=>_(n)},null,8,["onClick"])],10,ve))),256)):c("",!0),t.multiselect?c("",!0):(a(),r("div",ye,p(l.value[0].label),1))]))])]),m("div",be,[l.value.length>0?(a(),D(b,{key:0,icon:"x",size:"4",color:s(o).icon,onClick:se},null,8,["color"])):c("",!0),F(b,{icon:v.value?"chevron-up":"chevron-down",size:"4",color:s(o).icon},null,8,["icon","color"])])],2),v.value?(a(),r("div",{key:1,"data-testid":"vrx-select-dropdown",class:d(["menu text-sm",s(o).dropdown])},[(a(!0),r(z,null,L(t.listData,(n,C)=>(a(),r("div",{class:d(["dropdown-item w-full",s(o).dropdownItem])},[m("div",{"data-testid":"vrx-select-dropdown-"+C,class:"dropdown-item-content w-full h-full p-2.5",onClick:re=>_(n)},[ie(p(n.label)+" ",1),l.value.includes(n)?(a(),D(b,{key:0,icon:"check",size:"4",color:s(o).icon},null,8,["color"])):c("",!0)],8,fe)],2))),256))],2)):c("",!0),t.helperText?(a(),r("p",{key:2,"data-testid":"vrx-select-helper",class:d(["mt-2 text-sm",s(o).helperText])},p(t.helperText),3)):c("",!0)],32))}});const oe=ue(he,[["__scopeId","data-v-706e016e"]]),we={title:"VrxSelect",component:oe,tags:["autodocs"],argTypes:{listData:{description:"list containing the selectable options",control:{type:"{value: string, label: string}[]"},table:{category:"props",type:{summary:"{value: string, label: string}[]"},defaultValue:{summary:"[]"}}},modelValue:{description:"ref containing the selected options",control:{type:"{value: string, label: string}"},table:{category:"props",type:{summary:"{value: string, label: string}[]"},defaultValue:{summary:"[]"}}},multiselect:{description:"enable multiple selection",control:{type:"boolean"},table:{category:"props",type:{summary:"boolean"},defaultValue:{summary:"false"}}},disabled:{description:"disable select",control:{type:"boolean"},table:{category:"props",type:{summary:"boolean"},defaultValue:{summary:"false"}}},invalid:{description:"invalid select",control:{type:"boolean"},table:{category:"props",type:{summary:"boolean"},defaultValue:{summary:!1}}},label:{description:"label text",control:{type:"text"},table:{category:"props",type:{summary:"string"}}},icon:{description:"icon type",control:{type:"select"},options:["password","mail","rocket","user-circle"],defaultValue:{summary:void 0},table:{category:"props",type:{summary:"IconLibraryType"}}},helperText:{description:"helper text",control:{type:"text"},table:{category:"props",type:{summary:"string"}}},placeholder:{description:"placeholder text",control:{type:"text"},table:{category:"props",type:{summary:"string"}}},variant:{description:"color variant (only on multi-select)",control:{type:"select"},options:["default","alternative","dark","light","green","red","yellow","purple"],defaultValue:{summary:"default"},table:{category:"props",type:{summary:"string"}}}}},g=[{value:"1",label:"Option 1"},{value:"2",label:"Option 2"},{value:"3",label:"Option 3"}],e={render:t=>({components:{VrxSelect:oe},setup(){return{args:t}},template:`
          <div style="height: 200px">
              <VrxSelect
                  v-model="args.modelValue"
                  :list-data="args.listData"
                  v-bind="args"
              />
          </div>
        `}),args:{listData:g,modelValue:[]}},f={...e,args:{...e.args,modelValue:[]}},h={...e,args:{...e.args,modelValue:[],label:"Select an option"}},x={...e,args:{...e.args,label:"Select an option",modelValue:[g[0]],helperText:"The given option is the default selected"}},V={...e,args:{...e.args,multiselect:!0,label:"Select an option",modelValue:[g[0],g[1]]}},T={...e,args:{...e.args,modelValue:[],icon:"rocket"}},k={...e,args:{...e.args,modelValue:[],disabled:!0,icon:"rocket",label:"Select an option",helperText:"Please select an option"}},S={...e,args:{...e.args,modelValue:[],invalid:!0,icon:"rocket",label:"Select an option",helperText:"The given option is not selectable"}},w={...e,args:{...e.args,label:"Select an option",modelValue:[g[0],g[1]],multiselect:!0,variant:"green",helperText:"This is a green variant"}};var N,O,P;f.parameters={...f.parameters,docs:{...(N=f.parameters)==null?void 0:N.docs,source:{originalSource:`{
  ...Template,
  args: {
    ...Template.args,
    modelValue: []
  }
}`,...(P=(O=f.parameters)==null?void 0:O.docs)==null?void 0:P.source}}};var $,E,M;h.parameters={...h.parameters,docs:{...($=h.parameters)==null?void 0:$.docs,source:{originalSource:`{
  ...Template,
  args: {
    ...Template.args,
    modelValue: [],
    label: 'Select an option'
  }
}`,...(M=(E=h.parameters)==null?void 0:E.docs)==null?void 0:M.source}}};var j,A,q;x.parameters={...x.parameters,docs:{...(j=x.parameters)==null?void 0:j.docs,source:{originalSource:`{
  ...Template,
  args: {
    ...Template.args,
    label: 'Select an option',
    modelValue: [data[0]],
    helperText: 'The given option is the default selected'
  }
}`,...(q=(A=x.parameters)==null?void 0:A.docs)==null?void 0:q.source}}};var G,H,J;V.parameters={...V.parameters,docs:{...(G=V.parameters)==null?void 0:G.docs,source:{originalSource:`{
  ...Template,
  args: {
    ...Template.args,
    multiselect: true,
    label: 'Select an option',
    modelValue: [data[0], data[1]]
  }
}`,...(J=(H=V.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var K,Q,R;T.parameters={...T.parameters,docs:{...(K=T.parameters)==null?void 0:K.docs,source:{originalSource:`{
  ...Template,
  args: {
    ...Template.args,
    modelValue: [],
    icon: 'rocket'
  }
}`,...(R=(Q=T.parameters)==null?void 0:Q.docs)==null?void 0:R.source}}};var U,W,X;k.parameters={...k.parameters,docs:{...(U=k.parameters)==null?void 0:U.docs,source:{originalSource:`{
  ...Template,
  args: {
    ...Template.args,
    modelValue: [],
    disabled: true,
    icon: 'rocket',
    label: 'Select an option',
    helperText: 'Please select an option'
  }
}`,...(X=(W=k.parameters)==null?void 0:W.docs)==null?void 0:X.source}}};var Y,Z,ee;S.parameters={...S.parameters,docs:{...(Y=S.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  ...Template,
  args: {
    ...Template.args,
    modelValue: [],
    invalid: true,
    icon: 'rocket',
    label: 'Select an option',
    helperText: 'The given option is not selectable'
  }
}`,...(ee=(Z=S.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,ae,le;w.parameters={...w.parameters,docs:{...(te=w.parameters)==null?void 0:te.docs,source:{originalSource:`{
  ...Template,
  args: {
    ...Template.args,
    label: 'Select an option',
    modelValue: [data[0], data[1]],
    multiselect: true,
    variant: 'green',
    helperText: 'This is a green variant'
  }
}`,...(le=(ae=w.parameters)==null?void 0:ae.docs)==null?void 0:le.source}}};const Ce=["Primary","Labeled","Selected","Multiselect","Icon","Disabled","Invalid","Variant"];export{k as Disabled,T as Icon,S as Invalid,h as Labeled,V as Multiselect,f as Primary,x as Selected,w as Variant,Ce as __namedExportsOrder,we as default};
//# sourceMappingURL=VrxSelect.stories-d9d3b856.js.map
