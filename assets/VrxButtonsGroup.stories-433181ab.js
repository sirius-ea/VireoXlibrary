import{d as x,b as V,o as e,c as i,F as G,f as I,n as T,u as s,g as C,h as O,e as S,t as A}from"./vue.esm-bundler-cac5f4b7.js";import{V as w}from"./VrxIcon-940abacc.js";import{b as z}from"./styles-afa5fe0e.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./_commonjsHelpers-042e6b4d.js";const E={"data-testid":"vrx-btnGroup",class:"inline-flex rounded-md shadow-sm",role:"group"},F=["data-testid","onClick"],L={class:"ml-1"},v=x({__name:"VrxButtonsGroup",props:{buttons:{},icons:{},actions:{}},setup(a){const u=a,c=V(()=>z()),l=u.actions??[],m=u.icons??[],h=(o,d)=>{switch(o){case 0:return c.value.firstButton;case d-1:return c.value.lastButton;default:return c.value.middleButton}};return(o,d)=>(e(),i("div",E,[(e(!0),i(G,null,I(o.buttons,(k,t)=>(e(),i("button",{"data-testid":"vrx-btnGroup-"+t,type:"button",class:T(["inline-flex items-center px-4 py-2 text-sm font-medium",h(t,o.buttons.length)]),onClick:N=>s(l)[t]?s(l)[t]():null},[s(m)[t]?(e(),C(w,{key:0,icon:s(m)[t],size:"4"},null,8,["icon"])):O("",!0),S("span",L,A(k),1)],10,F))),256))]))}}),H={title:"VrxButtonsGroup",component:v,tags:["autodocs"],argTypes:{buttons:{control:{type:"array"},description:"Array of buttons",table:{category:"props",type:{summary:"string[]"}}},icons:{control:{type:void 0},description:"VrxIcon names",table:{category:"props",type:{summary:"IconLibraryType[]"}}},actions:{control:{type:void 0},description:"Actions dispatched on click",table:{category:"props",type:{summary:"() => void []"}}}}},p={render:a=>({components:{VrxButtonsGroup:v},setup(){return{args:a}},template:`
            <VrxButtonsGroup
                v-bind="args" 
                :buttons="args.buttons"
                :icons="args.icons"
            />`}),args:{buttons:["Option 1","Option 2","Option 3"]}},r={...p},n={...p,args:{...p.args,icons:["mail","rocket","user-circle"]}};var y,b,g;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  ...Template
}`,...(g=(b=r.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var f,B,_;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  ...Template,
  args: {
    ...Template.args,
    icons: ['mail', 'rocket', 'user-circle']
  }
}`,...(_=(B=n.parameters)==null?void 0:B.docs)==null?void 0:_.source}}};const J=["Primary","Icon"];export{n as Icon,r as Primary,J as __namedExportsOrder,H as default};
//# sourceMappingURL=VrxButtonsGroup.stories-433181ab.js.map
