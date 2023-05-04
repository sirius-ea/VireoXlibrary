import{d as w,o as B,a as V,b as n,n as T}from"./vue.esm-bundler-5369b1a6.js";const z=["disabled"],k=w({__name:"VrxButton",props:{color:null,size:null,fullWidth:{type:Boolean},fullRounded:{type:Boolean},disabled:{type:Boolean}},setup(e){const v={default:"text-white bg-blue-700 hover:bg-blue-800 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",alternative:"text-gray-900 bg-white border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700",dark:"text-white bg-gray-800 hover:bg-gray-900  focus:ring-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700",light:"text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700",green:"text-white bg-green-700 hover:bg-green-800 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800",red:"text-white bg-red-700 hover:bg-red-800 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900",yellow:"text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-yellow-300 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-900",purple:"text-white bg-purple-700 hover:bg-purple-800 focus:ring-purple-300 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"};return(l,S)=>(B(),V("button",{type:"button",disabled:e.disabled,class:T(["inline-flex items-center gap-2.5 font-medium mr-2 mb-2",[v[e.color],`text-${e.size}`,e.fullWidth?"w-full justify-center":"",e.fullRounded?"rounded-full px-2 py-2":"rounded-lg px-5 py-2.5",e.disabled?"opacity-50 cursor-not-allowed":"focus:outline-none focus:ring-4"]])},[n(l.$slots,"prefix"),n(l.$slots,"default"),n(l.$slots,"suffix")],10,z))}}),$={title:"VrxButton",component:k,tags:["autodocs"],argTypes:{default:{description:"default slot",control:{type:null},table:{category:"slots",type:{summary:"string"}}},prefix:{description:"prefix slot",control:{type:"text"},table:{category:"slots",type:{summary:"string"}}},suffix:{description:"suffix slot",control:{type:"text"},table:{category:"slots",type:{summary:"string"}}},color:{control:{type:"select"},table:{category:"props",type:{summary:"string"}},options:["default","alternative","dark","light","green","red","yellow","purple"],defaultValue:{summary:"default"},description:"color of the button"},size:{control:{type:"select"},table:{category:"props",type:{summary:"string"}},options:["sm","md","base","lg"],defaultValue:{summary:"base"},description:"size of the button"},disabled:{control:{type:"boolean"},options:[!0,!1],defaultValue:{summary:void 0},table:{category:"props",type:{summary:"boolean"}},description:"disabled state of the button"},fullRounded:{control:{type:"boolean"},options:[!0,!1],defaultValue:{summary:void 0},table:{category:"props",type:{summary:"boolean"}},description:"make border radius full"},fullWidth:{control:{type:"boolean"},options:[!0,!1],defaultValue:{summary:void 0},table:{category:"props",type:{summary:"boolean"}},description:"make button full width"}}},r={render:e=>({components:{VrxButton:k},setup(){return{args:e}},template:`
            <VrxButton v-bind="args">
                <template v-if="args.prefix" slot="prefix">
                  {{args.prefix}}
                </template>
                <template v-if="args.default" slot="default">
                ${e.default}
                </template>
                <template v-if="args.suffix" slot="suffix">
                    {{args.suffix}}
                </template>
            </VrxButton>`}),args:{default:"Button",color:"default",size:"base"}},t={...r},a={...r,args:{...r.args,prefix:"👍"}},o={...r,args:{...r.args,suffix:"👍"}},s={...r,args:{...r.args,prefix:"👍",suffix:"👍"}};var u,i,d;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  ...Template
}`,...(d=(i=t.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var g,p,c;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  ...Template,
  args: {
    ...Template.args,
    prefix: '👍' // emoji thumbs up
  }
}`,...(c=(p=a.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var f,m,b;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  ...Template,
  args: {
    ...Template.args,
    suffix: '👍' // emoji thumbs up
  }
}`,...(b=(m=o.parameters)==null?void 0:m.docs)==null?void 0:b.source}}};var y,x,h;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  ...Template,
  args: {
    ...Template.args,
    prefix: '👍',
    // emoji thumbs up
    suffix: '👍' // emoji thumbs up
  }
}`,...(h=(x=s.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};const P=["Primary","Prefix","Suffix","Both"];export{s as Both,a as Prefix,t as Primary,o as Suffix,P as __namedExportsOrder,$ as default};
//# sourceMappingURL=VrxButton.stories-0c021e5d.js.map
