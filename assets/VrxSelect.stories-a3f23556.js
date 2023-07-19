import{V as j}from"./VrxSelect-a359973c.js";import"./vue.esm-bundler-77ff4469.js";import"./VrxIcon-ffc31a73.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./styles-258824e1.js";import"./_commonjsHelpers-042e6b4d.js";const H={title:"VrxSelect",component:j,tags:["autodocs"],argTypes:{listData:{description:"list containing the selectable options",control:{type:"{value: string, label: string}[]"},table:{category:"props",type:{summary:"{value: string, label: string}[]"},defaultValue:{summary:"[]"}}},modelValue:{description:"ref containing the selected options",control:{type:"{value: string, label: string}"},table:{category:"props",type:{summary:"{value: string, label: string}[]"},defaultValue:{summary:"[]"}}},multiselect:{description:"enable multiple selection",control:{type:"boolean"},table:{category:"props",type:{summary:"boolean"},defaultValue:{summary:"false"}}},disabled:{description:"disable select",control:{type:"boolean"},table:{category:"props",type:{summary:"boolean"},defaultValue:{summary:"false"}}},invalid:{description:"invalid select",control:{type:"boolean"},table:{category:"props",type:{summary:"boolean"},defaultValue:{summary:!1}}},label:{description:"label text",control:{type:"text"},table:{category:"props",type:{summary:"string"}}},icon:{description:"icon type",control:{type:"select"},options:["password","mail","rocket","user-circle"],defaultValue:{summary:void 0},table:{category:"props",type:{summary:"IconLibraryType"}}},helperText:{description:"helper text",control:{type:"text"},table:{category:"props",type:{summary:"string"}}},placeholder:{description:"placeholder text",control:{type:"text"},table:{category:"props",type:{summary:"string"}}},variant:{description:"color variant (only on multi-select)",control:{type:"select"},options:["default","alternative","dark","light","green","red","yellow","purple"],defaultValue:{summary:"default"},table:{category:"props",type:{summary:"string"}}}}},a=[{value:"1",label:"Option 1"},{value:"2",label:"Option 2"},{value:"3",label:"Option 3"}],e={render:q=>({components:{VrxSelect:j},setup(){return{args:q}},template:`
          <div style="height: 200px">
              <VrxSelect
                  v-model="args.modelValue"
                  :list-data="args.listData"
                  v-bind="args"
              />
          </div>
        `}),args:{listData:a,modelValue:[]}},t={...e,args:{...e.args,modelValue:[]}},r={...e,args:{...e.args,modelValue:[],label:"Select an option"}},l={...e,args:{...e.args,label:"Select an option",modelValue:[a[0]],helperText:"The given option is the default selected"}},o={...e,args:{...e.args,multiselect:!0,label:"Select an option",modelValue:[a[0],a[1]]}},s={...e,args:{...e.args,modelValue:[],icon:"rocket"}},n={...e,args:{...e.args,modelValue:[],disabled:!0,icon:"rocket",label:"Select an option",helperText:"Please select an option"}},c={...e,args:{...e.args,modelValue:[],invalid:!0,icon:"rocket",label:"Select an option",helperText:"The given option is not selectable"}},p={...e,args:{...e.args,label:"Select an option",modelValue:[a[0],a[1]],multiselect:!0,variant:"green",helperText:"This is a green variant"}};var i,m,d;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  ...Template,
  args: {
    ...Template.args,
    modelValue: []
  }
}`,...(d=(m=t.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var u,g,y;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  ...Template,
  args: {
    ...Template.args,
    modelValue: [],
    label: 'Select an option'
  }
}`,...(y=(g=r.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var b,T,V;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  ...Template,
  args: {
    ...Template.args,
    label: 'Select an option',
    modelValue: [data[0]],
    helperText: 'The given option is the default selected'
  }
}`,...(V=(T=l.parameters)==null?void 0:T.docs)==null?void 0:V.source}}};var v,h,S;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  ...Template,
  args: {
    ...Template.args,
    multiselect: true,
    label: 'Select an option',
    modelValue: [data[0], data[1]]
  }
}`,...(S=(h=o.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};var x,f,k;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  ...Template,
  args: {
    ...Template.args,
    modelValue: [],
    icon: 'rocket'
  }
}`,...(k=(f=s.parameters)==null?void 0:f.docs)==null?void 0:k.source}}};var D,I,O;n.parameters={...n.parameters,docs:{...(D=n.parameters)==null?void 0:D.docs,source:{originalSource:`{
  ...Template,
  args: {
    ...Template.args,
    modelValue: [],
    disabled: true,
    icon: 'rocket',
    label: 'Select an option',
    helperText: 'Please select an option'
  }
}`,...(O=(I=n.parameters)==null?void 0:I.docs)==null?void 0:O.source}}};var P,L,w;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`{
  ...Template,
  args: {
    ...Template.args,
    modelValue: [],
    invalid: true,
    icon: 'rocket',
    label: 'Select an option',
    helperText: 'The given option is not selectable'
  }
}`,...(w=(L=c.parameters)==null?void 0:L.docs)==null?void 0:w.source}}};var M,_,E;p.parameters={...p.parameters,docs:{...(M=p.parameters)==null?void 0:M.docs,source:{originalSource:`{
  ...Template,
  args: {
    ...Template.args,
    label: 'Select an option',
    modelValue: [data[0], data[1]],
    multiselect: true,
    variant: 'green',
    helperText: 'This is a green variant'
  }
}`,...(E=(_=p.parameters)==null?void 0:_.docs)==null?void 0:E.source}}};const J=["Primary","Labeled","Selected","Multiselect","Icon","Disabled","Invalid","Variant"];export{n as Disabled,s as Icon,c as Invalid,r as Labeled,o as Multiselect,t as Primary,l as Selected,p as Variant,J as __namedExportsOrder,H as default};
//# sourceMappingURL=VrxSelect.stories-a3f23556.js.map
