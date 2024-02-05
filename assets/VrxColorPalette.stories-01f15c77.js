import{d as E,z as j,o as i,c as m,e as p,t as g,D,E as F,F as R,k as $,A as z}from"./vue.esm-bundler-fef724a1.js";/* empty css                                                                     */import{_ as A}from"./_plugin-vue_export-helper-c27b6911.js";import{a as o}from"./styles-b96d5dc9.js";import"./_commonjsHelpers-725317a4.js";const L=r=>(D("data-v-442ab059"),r=r(),F(),r),O={class:"flex flex-col justify-left items-left"},q=L(()=>p("div",{class:"h-[50px] w-[50px] vrxcolor rounded-[12px]"},null,-1)),G={class:"text-content-light dark:text-content-dark font-thin text-sm"},H={class:"text-content-light dark:text-content-dark font-thin text-sm"},J=E({__name:"VrxColorItem",props:{color:{},name:{}},setup(r){return j(s=>({d03549a8:s.color})),(s,B)=>(i(),m("div",O,[q,p("label",G,g(s.name),1),p("label",H,g(s.color),1)]))}}),K=A(J,[["__scopeId","data-v-442ab059"]]),M={"data-testid":"vrx-color-palette",class:"flex flex-wrap h-full w-full justify-left items-center gap-2"},w=E({__name:"VrxColorPalette",props:{colors:{}},setup(r){return(s,B)=>(i(),m("div",M,[(i(!0),m(R,null,$(s.colors,(N,d)=>(i(),z(K,{key:d,color:N,name:d},null,8,["color","name"]))),128))]))}}),Z={title:"VrxColorPalette",component:w,tags:["autodocs"]},e={render:r=>({components:{VrxColorPalette:w},setup(){return{args:r}},template:`
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
