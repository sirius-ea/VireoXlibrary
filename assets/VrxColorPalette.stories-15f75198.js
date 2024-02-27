import{d as w,x as j,o as i,c as m,e as p,t as g,M as F,N as R,F as $,k as D,y as L}from"./vue.esm-bundler-b6bff0ca.js";/* empty css                                                                     */import{_ as M}from"./_plugin-vue_export-helper-c27b6911.js";import{a as o}from"./styles-117b2ca5.js";import"./_commonjsHelpers-de833af9.js";const O=r=>(F("data-v-442ab059"),r=r(),R(),r),q={class:"flex flex-col justify-left items-left"},z=O(()=>p("div",{class:"h-[50px] w-[50px] vrxcolor rounded-[12px]"},null,-1)),A={class:"text-content-light dark:text-content-dark font-thin text-sm"},G={class:"text-content-light dark:text-content-dark font-thin text-sm"},H=w({__name:"VrxColorItem",props:{color:{},name:{}},setup(r){return j(s=>({d03549a8:s.color})),(s,E)=>(i(),m("div",q,[z,p("label",A,g(s.name),1),p("label",G,g(s.color),1)]))}}),J=M(H,[["__scopeId","data-v-442ab059"]]),K={"data-testid":"vrx-color-palette",class:"flex flex-wrap h-full w-full justify-left items-center gap-2"},B=w({__name:"VrxColorPalette",props:{colors:{}},setup(r){return(s,E)=>(i(),m("div",K,[(i(!0),m($,null,D(s.colors,(N,d)=>(i(),L(J,{key:d,color:N,name:d},null,8,["color","name"]))),128))]))}}),Z={title:"VrxColorPalette",component:B,tags:["autodocs"]},e={render:r=>({components:{VrxColorPalette:B},setup(){return{args:r}},template:`
            <VrxColorPalette v-bind="args"/>
        `}),args:{colors:o.colors.primary}},t={...e,args:{...e.args,colors:o.colors.primary}},a={...e,args:{...e.args,colors:o.colors.secondary}},n={...e,args:{...e.args,colors:o.colors.neutral}},c={...e,args:{...e.args,colors:o.colors.error}},l={...e,args:{...e.args,colors:{"content-dark":o.colors["content-dark"],"content-light":o.colors["content-light"],"base-dark":o.colors["base-dark"],"base-light":o.colors["base-light"],icon:o.colors.icon,"icon-disabled":o.colors["icon-disabled"],"icon-invalid":o.colors["icon-invalid"]}}};var u,h,_;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  ...Template,
  args: {
    ...Template.args,
    //@ts-ignore
    colors: theme.colors.primary
  }
}`,...(_=(h=t.parameters)==null?void 0:h.docs)==null?void 0:_.source}}};var x,f,b;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  ...Template,
  args: {
    ...Template.args,
    //@ts-ignore
    colors: theme.colors.secondary
  }
}`,...(b=(f=a.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var k,y,v;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:`{
  ...Template,
  args: {
    ...Template.args,
    //@ts-ignore
    colors: theme.colors.neutral
  }
}`,...(v=(y=n.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var S,T,C;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  ...Template,
  args: {
    ...Template.args,
    //@ts-ignore
    colors: theme.colors.error
  }
}`,...(C=(T=c.parameters)==null?void 0:T.docs)==null?void 0:C.source}}};var V,I,P;l.parameters={...l.parameters,docs:{...(V=l.parameters)==null?void 0:V.docs,source:{originalSource:`{
  ...Template,
  args: {
    ...Template.args,
    colors: {
      //@ts-ignore
      'content-dark': theme.colors['content-dark'],
      //@ts-ignore
      'content-light': theme.colors['content-light'],
      //@ts-ignore
      'base-dark': theme.colors['base-dark'],
      //@ts-ignore
      'base-light': theme.colors['base-light'],
      //@ts-ignore
      'icon': theme.colors['icon'],
      //@ts-ignore
      'icon-disabled': theme.colors['icon-disabled'],
      //@ts-ignore
      'icon-invalid': theme.colors['icon-invalid']
    }
  }
}`,...(P=(I=l.parameters)==null?void 0:I.docs)==null?void 0:P.source}}};const oo=["Primary","Secondary","Neutral","Error","Root"];export{c as Error,n as Neutral,t as Primary,l as Root,a as Secondary,oo as __namedExportsOrder,Z as default};
