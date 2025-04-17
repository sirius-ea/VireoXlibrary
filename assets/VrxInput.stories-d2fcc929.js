import{V as P}from"./VrxInput-de6f8bed.js";import"./vue.esm-bundler-cf734fcd.js";import"./VrxIcon-326a70bd.js";/* empty css                                                                */import"./_plugin-vue_export-helper-c27b6911.js";import"./styles-cba61512.js";import"./_commonjsHelpers-de833af9.js";/* empty css                                                                 */const O={title:"VrxInput",component:P,tags:["autodocs"],argTypes:{disabled:{description:"disable input",control:{type:"boolean"},table:{category:"props",type:{summary:"boolean"},defaultValue:{summary:!1}}},icon:{description:"icon type",control:{type:"select"},options:["password","mail","rocket","user-circle"],defaultValue:{summary:void 0},table:{category:"props",type:{summary:"IconLibraryType"}}},invalid:{description:"set input as invalid",control:{type:"boolean"},table:{category:"props",type:{summary:"boolean"},defaultValue:{summary:!1}}},helperText:{description:"helper text",control:{type:"text"},table:{category:"props",type:{summary:"string"}}},label:{description:"label text",control:{type:"text"},table:{category:"props",type:{summary:"string"}}},placeholder:{description:"placeholder text",control:{type:"text"},table:{category:"props",type:{summary:"string"}}},type:{description:"type of input",control:{type:"select"},options:["text","password"],defaultValue:{summary:void 0},table:{category:"props",type:{summary:"text | password"},defaultValue:{summary:"text"}}}}},e={render:S=>({components:{VrxInput:P},setup(){return{args:S}},template:`
            <VrxInput 
                v-bind="args"
                v-model="args.modelValue"
            />
        `}),args:{}},a={...e},r={...e,args:{...e.args,label:"Label"}},s={...e,args:{...e.args,icon:"mail",modelValue:"example@mail.com",label:"Mail"}},o={...e,args:{...e.args,label:"Password",type:"password",icon:"password",placeholder:"Insert your password"}},t={...e,args:{...e.args,disabled:!0,label:"Name",modelValue:"Mario Rossi",helperText:"Insert your complete name",icon:"user-circle"}},l={...e,args:{...e.args,invalid:!0,label:"Email",modelValue:"mario.rossi@gmail",helperText:"This is not a valid email address",icon:"mail"}};var n,p,m;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  ...Template
}`,...(m=(p=a.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var i,c,d;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  ...Template,
  args: {
    ...Template.args,
    label: 'Label'
  }
}`,...(d=(c=r.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,y,g;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  ...Template,
  args: {
    ...Template.args,
    icon: 'mail',
    modelValue: 'example@mail.com',
    label: 'Mail'
  }
}`,...(g=(y=s.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var b,x,T;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  ...Template,
  args: {
    ...Template.args,
    label: 'Password',
    type: 'password',
    icon: 'password',
    placeholder: 'Insert your password'
  }
}`,...(T=(x=o.parameters)==null?void 0:x.docs)==null?void 0:T.source}}};var V,w,h;t.parameters={...t.parameters,docs:{...(V=t.parameters)==null?void 0:V.docs,source:{originalSource:`{
  ...Template,
  args: {
    ...Template.args,
    disabled: true,
    label: 'Name',
    modelValue: 'Mario Rossi',
    helperText: 'Insert your complete name',
    icon: 'user-circle'
  }
}`,...(h=(w=t.parameters)==null?void 0:w.docs)==null?void 0:h.source}}};var v,I,f;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  ...Template,
  args: {
    ...Template.args,
    invalid: true,
    label: 'Email',
    modelValue: 'mario.rossi@gmail',
    helperText: 'This is not a valid email address',
    icon: 'mail'
  }
}`,...(f=(I=l.parameters)==null?void 0:I.docs)==null?void 0:f.source}}};const j=["Primary","Labeled","Icon","Password","Disabled","Invalid"];export{t as Disabled,s as Icon,l as Invalid,r as Labeled,o as Password,a as Primary,j as __namedExportsOrder,O as default};
