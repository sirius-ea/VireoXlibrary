import{_ as o}from"./VrxToggle.vue_vue_type_script_setup_true_lang-99384b0b.js";import{a as V}from"./vue.esm-bundler-b6bff0ca.js";import"./styles-117b2ca5.js";import"./_commonjsHelpers-de833af9.js";const b={title:"VrxToggle",component:o,tags:["autodocs"],argTypes:{modelValue:{description:"bound value with v-model",control:{type:"boolean"},table:{category:"props",type:{summary:"boolean"}}},size:{description:"size of the toggle",control:{type:"select"},options:["sm","md","lg"],table:{category:"props",type:{summary:"sm | md | lg"},defaultValue:{summary:"md"}}},variant:{description:"color variant",control:{type:"select"},options:["default","red","green","yellow","purple"],table:{category:"props",type:{summary:"ComponentVariant"},defaultValue:{summary:"default"}}},label:{description:"label",control:{type:"text"},table:{category:"props",type:{summary:"string"}}},disabled:{description:"disable the toggle",control:{type:"boolean"},table:{category:"props",type:{summary:"boolean"},defaultValue:{summary:"false"}}}}},t={render:e=>({components:{VrxToggle:o},setup(){return{args:e}},template:`
            <VrxToggle 
               v-model="args.modelValue"
            />
        `})},l={...t,args:{...t.args}},a={render:e=>({components:{VrxToggle:o},setup(){const v=V(!1);return{args:e,value:v}},template:`
            <div style="display: flex; flex-direction: column; gap: 10px">
                <VrxToggle size="sm" label="sm" v-model="value"/>
                <VrxToggle size="md" label="md" v-model="value"/>
                <VrxToggle size="lg" label="lg" v-model="value"/>
            </div>
        `}),args:{label:""}},r={render:e=>({components:{VrxToggle:o},setup(){return{args:e}},template:`
            <div style="display: flex; flex-direction: row; gap: 5px">
                <VrxToggle variant="red" v-model="args.modelValue" />
                <VrxToggle variant="green" v-model="args.modelValue" />
                <VrxToggle variant="yellow" v-model="args.modelValue" />
                <VrxToggle variant="purple" v-model="args.modelValue" />
            </div>
        `}),args:{label:"",modelValue:!1}};var n,s,m;l.parameters={...l.parameters,docs:{...(n=l.parameters)==null?void 0:n.docs,source:{originalSource:`{
  ...Template,
  args: {
    ...Template.args
  }
}`,...(m=(s=l.parameters)==null?void 0:s.docs)==null?void 0:m.source}}};var g,d,p;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => ({
    components: {
      VrxToggle
    },
    setup() {
      const value = ref(false);
      return {
        args,
        value
      };
    },
    template: \`
            <div style="display: flex; flex-direction: column; gap: 10px">
                <VrxToggle size="sm" label="sm" v-model="value"/>
                <VrxToggle size="md" label="md" v-model="value"/>
                <VrxToggle size="lg" label="lg" v-model="value"/>
            </div>
        \`
  }),
  args: {
    label: ''
  }
}`,...(p=(d=a.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var i,u,c;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
                <VrxToggle variant="red" v-model="args.modelValue" />
                <VrxToggle variant="green" v-model="args.modelValue" />
                <VrxToggle variant="yellow" v-model="args.modelValue" />
                <VrxToggle variant="purple" v-model="args.modelValue" />
            </div>
        \`
  }),
  args: {
    label: '',
    modelValue: false
  }
}`,...(c=(u=r.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};const z=["Primary","Size","Variants"];export{l as Primary,a as Size,r as Variants,z as __namedExportsOrder,b as default};
