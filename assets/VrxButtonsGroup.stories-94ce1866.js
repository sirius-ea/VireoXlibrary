import{d as V,e as h,o as e,a as c,F as G,f as I,n as T,u as s,g as C,i as O,j as S,t as A}from"./vue.esm-bundler-b8473558.js";import{V as w}from"./VrxIcon-55fc521c.js";import{b as z}from"./styles-a5d61761.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./_commonjsHelpers-725317a4.js";const E={"data-testid":"vrx-btnGroup",class:"inline-flex rounded-md shadow-sm",role:"group"},F=["data-testid","onClick"],L={class:"ml-1"},x=V({__name:"VrxButtonsGroup",props:{buttons:null,icons:null,actions:null},setup(o){const u=o,a=h(()=>z()),p=u.actions??[],l=u.icons??[],_=(m,d)=>{switch(m){case 0:return a.value.firstButton;case d-1:return a.value.lastButton;default:return a.value.middleButton}};return(m,d)=>(e(),c("div",E,[(e(!0),c(G,null,I(o.buttons,(k,t)=>(e(),c("button",{"data-testid":"vrx-btnGroup-"+t,type:"button",class:T(["inline-flex items-center px-4 py-2 text-sm font-medium",_(t,o.buttons.length)]),onClick:N=>s(p)[t]?s(p)[t]():null},[s(l)[t]?(e(),C(w,{key:0,icon:s(l)[t],size:"4"},null,8,["icon"])):O("",!0),S("span",L,A(k),1)],10,F))),256))]))}}),H={title:"VrxButtonsGroup",component:x,tags:["autodocs"],argTypes:{buttons:{control:{type:"array"},description:"Array of buttons",table:{category:"props",type:{summary:"string[]"}}},icons:{control:{type:void 0},description:"VrxIcon names",table:{category:"props",type:{summary:"IconLibraryType[]"}}},actions:{control:{type:void 0},description:"Actions dispatched on click",table:{category:"props",type:{summary:"() => void []"}}}}},i={render:o=>({components:{VrxButtonsGroup:x},setup(){return{args:o}},template:`
            <VrxButtonsGroup
                v-bind="args" 
                :buttons="args.button"
                :icons="args.icons"
            />`}),args:{buttons:["Option 1","Option 2","Option 3"]}},r={...i},n={...i,args:{...i.args,icons:["mail","rocket","user-circle"]}};var y,b,g;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  ...Template
}`,...(g=(b=r.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var f,B,v;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  ...Template,
  args: {
    ...Template.args,
    icons: ['mail', 'rocket', 'user-circle']
  }
}`,...(v=(B=n.parameters)==null?void 0:B.docs)==null?void 0:v.source}}};const J=["Primary","Icon"];export{n as Icon,r as Primary,J as __namedExportsOrder,H as default};
//# sourceMappingURL=VrxButtonsGroup.stories-94ce1866.js.map
