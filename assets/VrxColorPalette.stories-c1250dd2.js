import{d as E,k as j,o as i,c as m,b as p,t as g,D,E as F,F as R,h as $,l as L}from"./vue.esm-bundler-d08935b9.js";/* empty css                                                                     */import{_ as O}from"./_plugin-vue_export-helper-c27b6911.js";import{a as e}from"./styles-1a51a98b.js";import"./_commonjsHelpers-725317a4.js";const q=r=>(D("data-v-bcaeea94"),r=r(),F(),r),z={class:"flex flex-col justify-left items-left"},A=q(()=>p("div",{class:"h-[50px] w-[50px] vrxcolor rounded-[12px]"},null,-1)),G={class:"text-base-content-light dark:text-base-content-dark font-thin text-sm"},H={class:"text-base-content-light/60 dark:text-base-content-dark/60 font-thin text-sm"},J=E({__name:"VrxColorItem",props:{color:{},name:{}},setup(r){return j(s=>({"6e280e51":s.color})),(s,B)=>(i(),m("div",z,[A,p("label",G,g(s.name),1),p("label",H,g(s.color),1)]))}}),K=O(J,[["__scopeId","data-v-bcaeea94"]]),M={"data-testid":"vrx-color-palette",class:"flex flex-wrap h-full w-full justify-left items-center gap-2"},w=E({__name:"VrxColorPalette",props:{colors:{}},setup(r){return(s,B)=>(i(),m("div",M,[(i(!0),m(R,null,$(s.colors,(N,d)=>(i(),L(K,{key:d,color:N,name:d},null,8,["color","name"]))),128))]))}}),Z={title:"VrxColorPalette",component:w,tags:["autodocs"]},o={render:r=>({components:{VrxColorPalette:w},setup(){return{args:r}},template:`
            <VrxColorPalette v-bind="args"/>
        `}),args:{colors:e.colors.primary}},t={...o,args:{...o.args,colors:e.colors.primary}},a={...o,args:{...o.args,colors:e.colors.secondary}},n={...o,args:{...o.args,colors:e.colors.neutral}},c={...o,args:{...o.args,colors:e.colors.error}},l={...o,args:{...o.args,colors:{"base-content-dark":e.colors["base-content-dark"],"base-content-light":e.colors["base-content-light"],"base-dark":e.colors["base-dark"],"base-light":e.colors["base-light"],icon:e.colors.icon,"icon-disabled":e.colors["icon-disabled"],"icon-invalid":e.colors["icon-invalid"]}}};var u,h,_;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  ...Template,
  args: {
    ...Template.args,
    //@ts-ignore
    colors: theme.colors.primary
  }
}`,...(_=(h=t.parameters)==null?void 0:h.docs)==null?void 0:_.source}}};var b,x,f;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  ...Template,
  args: {
    ...Template.args,
    //@ts-ignore
    colors: theme.colors.secondary
  }
}`,...(f=(x=a.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var k,y,v;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
      'base-content-dark': theme.colors['base-content-dark'],
      //@ts-ignore
      'base-content-light': theme.colors['base-content-light'],
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
}`,...(P=(I=l.parameters)==null?void 0:I.docs)==null?void 0:P.source}}};const ee=["Primary","Secondary","Neutral","Error","Root"];export{c as Error,n as Neutral,t as Primary,l as Root,a as Secondary,ee as __namedExportsOrder,Z as default};
//# sourceMappingURL=VrxColorPalette.stories-c1250dd2.js.map
