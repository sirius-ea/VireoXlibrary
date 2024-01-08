import{d as z,a as h,i as S,o as k,c as w,b as n,n as i,t as B}from"./vue.esm-bundler-aad59893.js";import{t as C}from"./styles-61a087f1.js";/* empty css                                                                  */import{_ as E}from"./_plugin-vue_export-helper-c27b6911.js";import"./_commonjsHelpers-725317a4.js";const P={"data-testid":"vrx-toggle",class:"relative inline-flex items-center cursor-pointer"},D=["checked","disabled"],I=z({__name:"VrxToggle",props:{size:{default:"md"},variant:{default:"default"},label:{default:""},disabled:{type:Boolean,default:!1},modelValue:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(e,{emit:T}){const a=e,l=h(a.modelValue),_=()=>{l.value=!l.value,T("update:modelValue",l.value)},d=S(()=>C(a.variant,a.size,a.disabled));return(p,N)=>(k(),w("label",P,[n("input",{type:"checkbox",checked:l.value,class:"sr-only peer",onChange:_,disabled:p.disabled},null,40,D),n("span",{"data-testid":"vrx-toggle-content",class:i(d.value.toggle)},null,2),n("span",{"data-testid":"vrx-toggle-label",class:i(["ml-3 text-sm font-medium",d.value.label])},B(p.label),3)]))}}),s=E(I,[["__scopeId","data-v-4bfb315d"]]),G={title:"VrxToggle",component:s,tags:["autodocs"],argTypes:{modelValue:{description:"binded value with v-model",control:{type:"string"},table:{category:"props",type:{summary:"boolean"}}},size:{description:"size of the toggle",control:{type:"select"},options:["sm","md","lg"],table:{category:"props",type:{summary:"sm | md | lg"},defaultValue:{summary:"md"}}},variant:{description:"color variant",control:{type:"select"},options:["default","red","green","yellow","purple"],table:{category:"props",type:{summary:"ComponentVariant"},defaultValue:{summary:"default"}}},label:{description:"label",control:{type:"text"},table:{category:"props",type:{summary:"string"}}},disabled:{description:"disable the toggle",control:{type:"boolean"},table:{category:"props",type:{summary:"boolean"},defaultValue:{summary:"false"}}}}},m={render:e=>({components:{VrxToggle:s},setup(){return{args:e}},template:`
            <VrxToggle 
                v-bind="args"
                v-model="args.modelValue"
            />
        `}),args:{modelValue:!0}},t={...m,args:{...m.args}},r={render:e=>({components:{VrxToggle:s},setup(){return{args:e}},template:`
            <div style="display: flex; flex-direction: column; gap: 10px">
                <VrxToggle size="sm" label="sm" />
                <VrxToggle size="md" label="md" />
                <VrxToggle size="lg" label="lg" />
            </div>
        `}),args:{label:"",modelValue:!1}},o={render:e=>({components:{VrxToggle:s},setup(){return{args:e}},template:`
            <div style="display: flex; flex-direction: row; gap: 5px">
                <VrxToggle variant="red" model-value />
                <VrxToggle variant="green" modelValue />
                <VrxToggle variant="yellow" modelValue />
                <VrxToggle variant="purple" modelValue />
            </div>
        `}),args:{label:"",modelValue:!0}};var g,u,c;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  ...Template,
  args: {
    ...Template.args
  }
}`,...(c=(u=t.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};var y,V,x;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: args => ({
    components: {
      VrxToggle
    },
    setup() {
      return {
        args
      };
    },
    template: \`
            <div style="display: flex; flex-direction: column; gap: 10px">
                <VrxToggle size="sm" label="sm" />
                <VrxToggle size="md" label="md" />
                <VrxToggle size="lg" label="lg" />
            </div>
        \`
  }),
  args: {
    label: '',
    modelValue: false
  }
}`,...(x=(V=r.parameters)==null?void 0:V.docs)==null?void 0:x.source}}};var b,v,f;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: args => ({
    components: {
      VrxToggle
    },
    setup() {
      return {
        args
      };
    },
    template: \`
            <div style="display: flex; flex-direction: row; gap: 5px">
                <VrxToggle variant="red" model-value />
                <VrxToggle variant="green" modelValue />
                <VrxToggle variant="yellow" modelValue />
                <VrxToggle variant="purple" modelValue />
            </div>
        \`
  }),
  args: {
    label: '',
    modelValue: true
  }
}`,...(f=(v=o.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};const H=["Primary","Size","Variants"];export{t as Primary,r as Size,o as Variants,H as __namedExportsOrder,G as default};
//# sourceMappingURL=VrxToggle.stories-61e8c78f.js.map
