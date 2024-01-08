import{_ as x}from"./VrxButton.vue_vue_type_script_setup_true_lang-98fba91f.js";import"./vue.esm-bundler-aad59893.js";const V={title:"VrxButton",component:x,tags:["autodocs"],argTypes:{default:{description:"default slot",control:{type:null},table:{category:"slots",type:{summary:"string"}}},prefix:{description:"prefix slot",control:{type:"text"},table:{category:"slots",type:{summary:"string"}}},suffix:{description:"suffix slot",control:{type:"text"},table:{category:"slots",type:{summary:"string"}}},color:{control:{type:"select"},table:{category:"props",type:{summary:"string"}},options:["default","alternative","dark","light","green","red","yellow","purple"],defaultValue:{summary:"default"},description:"color of the button"},size:{control:{type:"select"},table:{category:"props",type:{summary:"string"}},options:["sm","md","base","lg"],defaultValue:{summary:"base"},description:"size of the button"},disabled:{control:{type:"boolean"},options:[!0,!1],defaultValue:{summary:void 0},table:{category:"props",type:{summary:"boolean"}},description:"disabled state of the button"},fullRounded:{control:{type:"boolean"},options:[!0,!1],defaultValue:{summary:void 0},table:{category:"props",type:{summary:"boolean"}},description:"make border radius full"},fullWidth:{control:{type:"boolean"},options:[!0,!1],defaultValue:{summary:void 0},table:{category:"props",type:{summary:"boolean"}},description:"make button full width"}}},e={render:b=>({components:{VrxButton:x},setup(){return{args:b}},template:`
            <VrxButton v-bind="args">
                <template v-if="args.prefix" slot="prefix">
                  {{args.prefix}}
                </template>
                <template v-if="args.default" slot="default">
                {{args.default}}
                </template>
                <template v-if="args.suffix" slot="suffix">
                    {{args.suffix}}
                </template>
            </VrxButton>`}),args:{default:"Button",color:"default",size:"base"}},t={...e},r={...e,args:{...e.args,prefix:"👍"}},a={...e,args:{...e.args,suffix:"👍"}},s={...e,args:{...e.args,prefix:"👍",suffix:"👍"}};var o,l,p;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  ...Template
}`,...(p=(l=t.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var n,u,i;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  ...Template,
  args: {
    ...Template.args,
    prefix: '👍' // emoji thumbs up
  }
}`,...(i=(u=r.parameters)==null?void 0:u.docs)==null?void 0:i.source}}};var m,c,f;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  ...Template,
  args: {
    ...Template.args,
    suffix: '👍' // emoji thumbs up
  }
}`,...(f=(c=a.parameters)==null?void 0:c.docs)==null?void 0:f.source}}};var d,g,y;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  ...Template,
  args: {
    ...Template.args,
    prefix: '👍',
    // emoji thumbs up
    suffix: '👍' // emoji thumbs up
  }
}`,...(y=(g=s.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};const v=["Primary","Prefix","Suffix","Both"];export{s as Both,r as Prefix,t as Primary,a as Suffix,v as __namedExportsOrder,V as default};
//# sourceMappingURL=VrxButton.stories-74b9089e.js.map
