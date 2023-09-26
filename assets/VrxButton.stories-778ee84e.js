import{_ as b}from"./VrxButton.vue_vue_type_script_setup_true_lang-0cb9f967.js";import"./vue.esm-bundler-a8ffa6e8.js";const V={title:"VrxButton",component:b,tags:["autodocs"],argTypes:{default:{description:"default slot",control:{type:null},table:{category:"slots",type:{summary:"string"}}},prefix:{description:"prefix slot",control:{type:"text"},table:{category:"slots",type:{summary:"string"}}},suffix:{description:"suffix slot",control:{type:"text"},table:{category:"slots",type:{summary:"string"}}},color:{control:{type:"select"},table:{category:"props",type:{summary:"string"}},options:["default","alternative","dark","light","green","red","yellow","purple"],defaultValue:{summary:"default"},description:"color of the button"},size:{control:{type:"select"},table:{category:"props",type:{summary:"string"}},options:["sm","md","base","lg"],defaultValue:{summary:"base"},description:"size of the button"},disabled:{control:{type:"boolean"},options:[!0,!1],defaultValue:{summary:void 0},table:{category:"props",type:{summary:"boolean"}},description:"disabled state of the button"},fullRounded:{control:{type:"boolean"},options:[!0,!1],defaultValue:{summary:void 0},table:{category:"props",type:{summary:"boolean"}},description:"make border radius full"},fullWidth:{control:{type:"boolean"},options:[!0,!1],defaultValue:{summary:void 0},table:{category:"props",type:{summary:"boolean"}},description:"make button full width"}}},e={render:o=>({components:{VrxButton:b},setup(){return{args:o}},template:`
            <VrxButton v-bind="args">
                <template v-if="args.prefix" slot="prefix">
                  {{args.prefix}}
                </template>
                <template v-if="args.default" slot="default">
                ${o.default}
                </template>
                <template v-if="args.suffix" slot="suffix">
                    {{args.suffix}}
                </template>
            </VrxButton>`}),args:{default:"Button",color:"default",size:"base"}},t={...e},r={...e,args:{...e.args,prefix:"👍"}},a={...e,args:{...e.args,suffix:"👍"}},s={...e,args:{...e.args,prefix:"👍",suffix:"👍"}};var l,p,n;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  ...Template
}`,...(n=(p=t.parameters)==null?void 0:p.docs)==null?void 0:n.source}}};var u,i,m;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  ...Template,
  args: {
    ...Template.args,
    prefix: '👍' // emoji thumbs up
  }
}`,...(m=(i=r.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var c,f,d;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  ...Template,
  args: {
    ...Template.args,
    suffix: '👍' // emoji thumbs up
  }
}`,...(d=(f=a.parameters)==null?void 0:f.docs)==null?void 0:d.source}}};var y,g,x;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  ...Template,
  args: {
    ...Template.args,
    prefix: '👍',
    // emoji thumbs up
    suffix: '👍' // emoji thumbs up
  }
}`,...(x=(g=s.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};const v=["Primary","Prefix","Suffix","Both"];export{s as Both,r as Prefix,t as Primary,a as Suffix,v as __namedExportsOrder,V as default};
//# sourceMappingURL=VrxButton.stories-778ee84e.js.map
