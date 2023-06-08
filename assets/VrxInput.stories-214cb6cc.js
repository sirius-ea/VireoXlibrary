import{d as q,e as A,o as r,a as s,n as u,u as l,t as g,f as y,g as x,i as F}from"./vue.esm-bundler-9a4344e6.js";import{V as G}from"./VrxIcon-fbd2d23d.js";import{i as H}from"./styles-fd87efcc.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./_commonjsHelpers-725317a4.js";const J={"data-testid":"vrx-input"},K={class:"relative mb-2"},Q={key:0,class:"absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"},U=["type","placeholder","disabled","value"],R=q({__name:"VrxInput",props:{label:null,placeholder:{default:"Insert Text"},type:{default:"text"},disabled:{type:Boolean},modelValue:null,helperText:null,invalid:{type:Boolean},icon:null},emits:["update:modelValue"],setup(e,{emit:O}){const m=e,j=b=>O("update:modelValue",b.target.value),t=A(()=>H(m.invalid||!1,m.disabled||!1,m.icon));return(b,W)=>(r(),s("div",J,[e.label?(r(),s("label",{key:0,"data-testid":"vrx-input-label",class:u(["block mb-2 text-sm font-medium",l(t).label])},g(e.label),3)):y("",!0),x("div",K,[e.icon?(r(),s("div",Q,[F(G,{icon:e.icon,color:l(t).icon,size:"5"},null,8,["icon","color"])])):y("",!0),x("input",{"data-testid":"vrx-input-field",type:e.type,placeholder:e.placeholder,disabled:e.disabled,value:e.modelValue,onInput:j,class:u(["text-sm rounded-lg p-2.5 block w-full",l(t).input])},null,42,U)]),e.helperText?(r(),s("p",{key:1,"data-testid":"vrx-input-helper",class:u(["mt-2 text-sm",l(t).helperText])},g(e.helperText),3)):y("",!0)]))}}),ee={title:"VrxInput",component:R,tags:["autodocs"],argTypes:{disabled:{description:"disable input",control:{type:"boolean"},table:{category:"props",type:{summary:"boolean"},defaultValue:{summary:!1}}},icon:{description:"icon type",control:{type:"select"},options:["password","mail","rocket","user-circle"],defaultValue:{summary:void 0},table:{category:"props",type:{summary:"IconLibraryType"}}},invalid:{description:"set input as invalid",control:{type:"boolean"},table:{category:"props",type:{summary:"boolean"},defaultValue:{summary:!1}}},helperText:{description:"helper text",control:{type:"text"},table:{category:"props",type:{summary:"string"}}},label:{description:"label text",control:{type:"text"},table:{category:"props",type:{summary:"string"}}},placeholder:{description:"placeholder text",control:{type:"text"},table:{category:"props",type:{summary:"string"}}},type:{description:"type of input",control:{type:"select"},options:["text","password"],defaultValue:{summary:void 0},table:{category:"props",type:{summary:"text | passsword"},defaultValue:{summary:"text"}}}}},a={render:e=>({components:{VrxInput:R},setup(){return{args:e}},template:`
            <VrxInput 
                v-bind="args"
                v-model="args.modelValue"
            />
        `}),args:{}},o={...a},n={...a,args:{...a.args,label:"Label"}},i={...a,args:{...a.args,icon:"mail",modelValue:"example@mail.com",label:"Mail"}},c={...a,args:{...a.args,label:"Password",type:"password",icon:"password",placeholder:"Insert your password"}},p={...a,args:{...a.args,disabled:!0,label:"Name",modelValue:"Mario Rossi",helperText:"Insert your complete name",icon:"user-circle"}},d={...a,args:{...a.args,invalid:!0,label:"Email",modelValue:"mario.rossi@gmail",helperText:"This is not a valid email address",icon:"mail"}};var h,v,T;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  ...Template
}`,...(T=(v=o.parameters)==null?void 0:v.docs)==null?void 0:T.source}}};var V,f,I;n.parameters={...n.parameters,docs:{...(V=n.parameters)==null?void 0:V.docs,source:{originalSource:`{
  ...Template,
  args: {
    ...Template.args,
    label: 'Label'
  }
}`,...(I=(f=n.parameters)==null?void 0:f.docs)==null?void 0:I.source}}};var w,k,S;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  ...Template,
  args: {
    ...Template.args,
    icon: 'mail',
    modelValue: 'example@mail.com',
    label: 'Mail'
  }
}`,...(S=(k=i.parameters)==null?void 0:k.docs)==null?void 0:S.source}}};var P,B,L;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`{
  ...Template,
  args: {
    ...Template.args,
    label: 'Password',
    type: 'password',
    icon: 'password',
    placeholder: 'Insert your password'
  }
}`,...(L=(B=c.parameters)==null?void 0:B.docs)==null?void 0:L.source}}};var N,E,M;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`{
  ...Template,
  args: {
    ...Template.args,
    disabled: true,
    label: 'Name',
    modelValue: 'Mario Rossi',
    helperText: 'Insert your complete name',
    icon: 'user-circle'
  }
}`,...(M=(E=p.parameters)==null?void 0:E.docs)==null?void 0:M.source}}};var C,D,z;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  ...Template,
  args: {
    ...Template.args,
    invalid: true,
    label: 'Email',
    modelValue: 'mario.rossi@gmail',
    helperText: 'This is not a valid email address',
    icon: 'mail'
  }
}`,...(z=(D=d.parameters)==null?void 0:D.docs)==null?void 0:z.source}}};const ae=["Primary","Labeled","Icon","Password","Disabled","Invalid"];export{p as Disabled,i as Icon,d as Invalid,n as Labeled,c as Password,o as Primary,ae as __namedExportsOrder,ee as default};
//# sourceMappingURL=VrxInput.stories-214cb6cc.js.map
