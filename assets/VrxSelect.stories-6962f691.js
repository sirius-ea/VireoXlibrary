import{V as z}from"./VrxSelect-60bfd08d.js";import"./vue.esm-bundler-a130895e.js";import"./VrxIcon-af2cf1c7.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./styles-1a51a98b.js";import"./_commonjsHelpers-725317a4.js";import"./appendToBody-70f0f50f.js";import"./v4-4a60fe23.js";/* empty css                                                                  */const W={title:"VrxSelect",component:z,tags:["autodocs"],argTypes:{listData:{description:"list containing the selectable options",control:{type:"{value: string, label: string}[]"},table:{category:"props",type:{summary:"{value: string, label: string, icon?: IconLibraryType}[]"},defaultValue:{summary:"[]"}}},modelValue:{description:"ref containing the selected options",control:{type:"{value: string, label: string}"},table:{category:"props",type:{summary:"{value: string, label: string}[]"},defaultValue:{summary:"[]"}}},multiselect:{description:"enable multiple selection",control:{type:"boolean"},table:{category:"props",type:{summary:"boolean"},defaultValue:{summary:"false"}}},disabled:{description:"disable select",control:{type:"boolean"},table:{category:"props",type:{summary:"boolean"},defaultValue:{summary:"false"}}},invalid:{description:"invalid select",control:{type:"boolean"},table:{category:"props",type:{summary:"boolean"},defaultValue:{summary:!1}}},label:{description:"label text",control:{type:"text"},table:{category:"props",type:{summary:"string"}}},icon:{description:"icon type",control:{type:"select"},options:["password","mail","rocket","user-circle"],defaultValue:{summary:void 0},table:{category:"props",type:{summary:"IconLibraryType"}}},helperText:{description:"helper text",control:{type:"text"},table:{category:"props",type:{summary:"string"}}},placeholder:{description:"placeholder text",control:{type:"text"},table:{category:"props",type:{summary:"string"}}},searchable:{description:"enable search in select options",control:{type:"boolean"},table:{category:"props",type:{summary:"boolean"}}},searchPlaceholder:{description:"search input placeholder",control:{type:"text"},table:{category:"props",type:{summary:"string"}}},variant:{description:"color variant (only on multi-select)",control:{type:"select"},options:["default","alternative","dark","light","green","red","yellow","purple"],defaultValue:{summary:"default"},table:{category:"props",type:{summary:"string"}}},elementClass:{description:"additional class for the select element",control:{type:"text"},table:{category:"props",type:{summary:"string"}}},showRemove:{description:"enable/disable the possibility to clear the select",control:{type:"boolean"},table:{category:"props",type:{summary:"boolean"}},defaultValue:{summary:!0}}}},a=[{value:"1",label:"Option 1",icon:"mail"},{value:"2",label:"Option 2",icon:"palette"},{value:"3",label:"Option 3"}],e={render:A=>({components:{VrxSelect:z},setup(){return{args:A,emptyData:[]}},template:`
              <VrxSelect
                  v-model="args.modelValue"
                  :list-data="args.listData"
                  v-bind="args"
              />
        `}),args:{listData:a,modelValue:[]}},t={...e,args:{...e.args,modelValue:[]}},r={...e,args:{...e.args,modelValue:[],label:"Select an option"}},l={...e,args:{...e.args,modelValue:[],label:"Select an option",searchable:!0,searchPlaceholder:"Search for an option"}},o={...e,args:{...e.args,label:"Select an option",modelValue:[a[0]],helperText:"The given option is the default selected"}},s={...e,args:{...e.args,multiselect:!0,label:"Select an option",modelValue:[a[0],a[1]]}},n={...e,args:{...e.args,modelValue:[],icon:"rocket"}},c={...e,args:{...e.args,modelValue:[],disabled:!0,icon:"rocket",label:"Select an option",helperText:"Please select an option"}},p={...e,args:{...e.args,modelValue:[],invalid:!0,icon:"rocket",label:"Select an option",helperText:"The given option is not selectable"}},i={...e,args:{...e.args,label:"Select an option",modelValue:[a[0],a[1]],multiselect:!0,variant:"green",helperText:"This is a green variant"}};var m,u,d;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  ...Template,
  args: {
    ...Template.args,
    modelValue: []
  }
}`,...(d=(u=t.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var g,y,b;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  ...Template,
  args: {
    ...Template.args,
    modelValue: [],
    label: 'Select an option'
  }
}`,...(b=(y=r.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var h,T,V;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  ...Template,
  args: {
    ...Template.args,
    modelValue: [],
    label: 'Select an option',
    searchable: true,
    searchPlaceholder: 'Search for an option'
  }
}`,...(V=(T=l.parameters)==null?void 0:T.docs)==null?void 0:V.source}}};var S,v,x;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  ...Template,
  args: {
    ...Template.args,
    label: 'Select an option',
    modelValue: [data[0]],
    helperText: 'The given option is the default selected'
  }
}`,...(x=(v=o.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var f,k,P;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  ...Template,
  args: {
    ...Template.args,
    multiselect: true,
    label: 'Select an option',
    modelValue: [data[0], data[1]]
  }
}`,...(P=(k=s.parameters)==null?void 0:k.docs)==null?void 0:P.source}}};var D,I,L;n.parameters={...n.parameters,docs:{...(D=n.parameters)==null?void 0:D.docs,source:{originalSource:`{
  ...Template,
  args: {
    ...Template.args,
    modelValue: [],
    icon: 'rocket'
  }
}`,...(L=(I=n.parameters)==null?void 0:I.docs)==null?void 0:L.source}}};var O,w,M;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
  ...Template,
  args: {
    ...Template.args,
    modelValue: [],
    disabled: true,
    icon: 'rocket',
    label: 'Select an option',
    helperText: 'Please select an option'
  }
}`,...(M=(w=c.parameters)==null?void 0:w.docs)==null?void 0:M.source}}};var _,C,E;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`{
  ...Template,
  args: {
    ...Template.args,
    modelValue: [],
    invalid: true,
    icon: 'rocket',
    label: 'Select an option',
    helperText: 'The given option is not selectable'
  }
}`,...(E=(C=p.parameters)==null?void 0:C.docs)==null?void 0:E.source}}};var R,j,q;i.parameters={...i.parameters,docs:{...(R=i.parameters)==null?void 0:R.docs,source:{originalSource:`{
  ...Template,
  args: {
    ...Template.args,
    label: 'Select an option',
    modelValue: [data[0], data[1]],
    multiselect: true,
    variant: 'green',
    helperText: 'This is a green variant'
  }
}`,...(q=(j=i.parameters)==null?void 0:j.docs)==null?void 0:q.source}}};const X=["Primary","Labeled","Searchable","Selected","Multiselect","Icon","Disabled","Invalid","Variant"];export{c as Disabled,n as Icon,p as Invalid,r as Labeled,s as Multiselect,t as Primary,l as Searchable,o as Selected,i as Variant,X as __namedExportsOrder,W as default};
//# sourceMappingURL=VrxSelect.stories-6962f691.js.map
