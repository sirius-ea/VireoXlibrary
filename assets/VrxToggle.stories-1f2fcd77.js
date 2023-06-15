import{d as h,l as _,e as S,o as k,a as w,j as n,n as i,u as g,t as B}from"./vue.esm-bundler-1ab7d614.js";import{t as C}from"./styles-1f6e610b.js";import"./_commonjsHelpers-725317a4.js";const E={"data-testid":"vrx-toggle",class:"relative inline-flex items-center cursor-pointer"},P=["checked","disabled"],o=h({__name:"VrxToggle",props:{size:{default:"md"},variant:{default:"default"},label:{default:""},disabled:{type:Boolean,default:!1},modelValue:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(e,{emit:T}){const s=e,a=_(s.modelValue),z=()=>{a.value=!a.value,T("update:modelValue",a.value)},d=S(()=>C(s.variant,s.size));return(j,D)=>(k(),w("label",E,[n("input",{type:"checkbox",checked:a.value,class:"sr-only peer",onChange:z,disabled:e.disabled},null,40,P),n("span",{"data-testid":"vrx-toggle-content",class:i(g(d).toggle)},null,2),n("span",{"data-testid":"vrx-toggle-label",class:i(["ml-3 text-sm font-medium",g(d).label])},B(e.label),3)]))}}),A={title:"VrxToggle",component:o,tags:["autodocs"],argTypes:{modelValue:{description:"binded value with v-model",control:{type:"string"},table:{category:"props",type:{summary:"boolean"}}},size:{description:"size of the toggle",control:{type:"select"},options:["sm","md","lg"],table:{category:"props",type:{summary:"sm | md | lg"},defaultValue:{summary:"md"}}},variant:{description:"color variant",control:{type:"select"},options:["default","red","green","yellow","purple"],table:{category:"props",type:{summary:"ComponentVariant"},defaultValue:{summary:"default"}}},label:{description:"label",control:{type:"text"},table:{category:"props",type:{summary:"string"}}},disabled:{description:"disable the toggle",control:{type:"boolean"},table:{category:"props",type:{summary:"boolean"},defaultValue:{summary:"false"}}}}},m={render:e=>({components:{VrxToggle:o},setup(){return{args:e}},template:`
            <VrxToggle 
                v-bind="args"
                v-model="args.modelValue"
            />
        `}),args:{modelValue:!0}},l={...m,args:{...m.args}},t={render:e=>({components:{VrxToggle:o},setup(){return{args:e}},template:`
            <div style="display: flex; flex-direction: column; gap: 10px">
                <VrxToggle size="sm" label="sm" />
                <VrxToggle size="md" label="md" />
                <VrxToggle size="lg" label="lg" />
            </div>
        `}),args:{size:"",label:"",modelValue:!1}},r={render:e=>({components:{VrxToggle:o},setup(){return{args:e}},template:`
            <div style="display: flex; flex-direction: row; gap: 5px">
                <VrxToggle variant="red" model-value />
                <VrxToggle variant="green" modelValue />
                <VrxToggle variant="yellow" modelValue />
                <VrxToggle variant="purple" modelValue />
            </div>
        `}),args:{size:"",label:"",modelValue:!0}};var p,u,c;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
  ...Template,
  args: {
    ...Template.args
  }
}`,...(c=(u=l.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};var V,x,y;t.parameters={...t.parameters,docs:{...(V=t.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
    size: '',
    label: '',
    modelValue: false
  }
}`,...(y=(x=t.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var b,f,v;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
    size: '',
    label: '',
    modelValue: true
  }
}`,...(v=(f=r.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};const F=["Primary","Size","Variants"];export{l as Primary,t as Size,r as Variants,F as __namedExportsOrder,A as default};
//# sourceMappingURL=VrxToggle.stories-1f2fcd77.js.map
