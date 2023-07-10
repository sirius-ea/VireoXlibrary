import{d as h,l as _,e as k,o as S,c as w,j as n,n as p,k as B}from"./vue.esm-bundler-b58da939.js";import{t as C}from"./styles-6560abd0.js";import"./_commonjsHelpers-725317a4.js";const E={"data-testid":"vrx-toggle",class:"relative inline-flex items-center cursor-pointer"},P=["checked","disabled"],o=h({__name:"VrxToggle",props:{size:{default:"md"},variant:{default:"default"},label:{default:""},disabled:{type:Boolean,default:!1},modelValue:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(e,{emit:T}){const s=e,l=_(s.modelValue),z=()=>{l.value=!l.value,T("update:modelValue",l.value)},d=k(()=>C(s.variant,s.size));return(g,j)=>(S(),w("label",E,[n("input",{type:"checkbox",checked:l.value,class:"sr-only peer",onChange:z,disabled:g.disabled},null,40,P),n("span",{"data-testid":"vrx-toggle-content",class:p(d.value.toggle)},null,2),n("span",{"data-testid":"vrx-toggle-label",class:p(["ml-3 text-sm font-medium",d.value.label])},B(g.label),3)]))}}),q={title:"VrxToggle",component:o,tags:["autodocs"],argTypes:{modelValue:{description:"binded value with v-model",control:{type:"string"},table:{category:"props",type:{summary:"boolean"}}},size:{description:"size of the toggle",control:{type:"select"},options:["sm","md","lg"],table:{category:"props",type:{summary:"sm | md | lg"},defaultValue:{summary:"md"}}},variant:{description:"color variant",control:{type:"select"},options:["default","red","green","yellow","purple"],table:{category:"props",type:{summary:"ComponentVariant"},defaultValue:{summary:"default"}}},label:{description:"label",control:{type:"text"},table:{category:"props",type:{summary:"string"}}},disabled:{description:"disable the toggle",control:{type:"boolean"},table:{category:"props",type:{summary:"boolean"},defaultValue:{summary:"false"}}}}},i={render:e=>({components:{VrxToggle:o},setup(){return{args:e}},template:`
            <VrxToggle 
                v-bind="args"
                v-model="args.modelValue"
            />
        `}),args:{modelValue:!0}},a={...i,args:{...i.args}},r={render:e=>({components:{VrxToggle:o},setup(){return{args:e}},template:`
            <div style="display: flex; flex-direction: column; gap: 10px">
                <VrxToggle size="sm" label="sm" />
                <VrxToggle size="md" label="md" />
                <VrxToggle size="lg" label="lg" />
            </div>
        `}),args:{label:"",modelValue:!1}},t={render:e=>({components:{VrxToggle:o},setup(){return{args:e}},template:`
            <div style="display: flex; flex-direction: row; gap: 5px">
                <VrxToggle variant="red" model-value />
                <VrxToggle variant="green" modelValue />
                <VrxToggle variant="yellow" modelValue />
                <VrxToggle variant="purple" modelValue />
            </div>
        `}),args:{label:"",modelValue:!0}};var m,u,c;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  ...Template,
  args: {
    ...Template.args
  }
}`,...(c=(u=a.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};var V,y,x;r.parameters={...r.parameters,docs:{...(V=r.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(x=(y=r.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var v,b,f;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(f=(b=t.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};const A=["Primary","Size","Variants"];export{a as Primary,r as Size,t as Variants,A as __namedExportsOrder,q as default};
//# sourceMappingURL=VrxToggle.stories-e7028771.js.map
