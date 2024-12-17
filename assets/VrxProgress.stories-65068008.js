import{d as c,b as i,o as m,c as l,n as d}from"./vue.esm-bundler-b6bff0ca.js";/* empty css                                                                    */import{_ as u}from"./_plugin-vue_export-helper-c27b6911.js";const g=c({__name:"VrxProgress",props:{size:{}},setup(s){const r=s,p=i(()=>"size-"+r.size);return(_,z)=>(m(),l("div",{class:d(["vrxprogress-color",r.size?p.value:"size-base","vrx-progress"])},null,2))}}),n=u(g,[["__scopeId","data-v-38b772a0"]]),v={title:"VrxProgress",component:n,tags:["autodocs"],argTypes:{size:{description:"Size of the progress",control:{type:"select"},table:{category:"props",type:{summary:"string"}},options:["xs","sm","base","lg","xl"],defaultValue:{summary:"base"}}}},x={render:s=>({components:{VrxProgress:n},setup(){return{args:s}},template:`
          <div style="height: 120px; width: 100%">
            <VrxProgress v-bind="args">
            </VrxProgress>
          </div>
        `}),args:{size:"base"}},e={...x};var o,t,a;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  ...Template
}`,...(a=(t=e.parameters)==null?void 0:t.docs)==null?void 0:a.source}}};const P=["Primary"];export{e as Primary,P as __namedExportsOrder,v as default};
