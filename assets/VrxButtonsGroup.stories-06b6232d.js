import{d as x,b as h,o as s,c as i,F as G,f as I,n as T,u as r,g as C,h as O,e as S,t as A}from"./vue.esm-bundler-77ff4469.js";import{V as w}from"./VrxIcon-ffc31a73.js";import{b as z}from"./styles-258824e1.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./_commonjsHelpers-042e6b4d.js";const E={"data-testid":"vrx-btnGroup",class:"inline-flex rounded-md shadow-sm",role:"group"},F=["data-testid","onClick"],_=x({__name:"VrxButtonsGroup",props:{buttons:{},icons:{},actions:{}},setup(c){const l=c,e=h(()=>z()),m=l.actions??[],d=l.icons??[],k=(o,u)=>{switch(o){case 0:return o===u-1?e.value.singleButton:e.value.firstButton;case u-1:return e.value.lastButton;default:return e.value.middleButton}};return(o,u)=>(s(),i("div",E,[(s(!0),i(G,null,I(o.buttons,(V,t)=>(s(),i("button",{"data-testid":"vrx-btnGroup-"+t,type:"button",class:T(["inline-flex items-center px-4 py-2 text-sm font-medium",k(t,o.buttons.length)]),onClick:N=>r(m)[t]?r(m)[t]():null},[r(d)[t]?(s(),C(w,{key:0,icon:r(d)[t],size:"4",class:"mr-1"},null,8,["icon"])):O("",!0),S("span",null,A(V),1)],10,F))),256))]))}}),q={title:"VrxButtonsGroup",component:_,tags:["autodocs"],argTypes:{buttons:{control:{type:"array"},description:"Array of buttons",table:{category:"props",type:{summary:"string[]"}}},icons:{control:{type:void 0},description:"VrxIcon names",table:{category:"props",type:{summary:"IconLibraryType[]"}}},actions:{control:{type:void 0},description:"Actions dispatched on click",table:{category:"props",type:{summary:"() => void []"}}}}},p={render:c=>({components:{VrxButtonsGroup:_},setup(){return{args:c}},template:`
            <VrxButtonsGroup
                v-bind="args" 
                :buttons="args.buttons"
                :icons="args.icons"
            />`}),args:{buttons:["Option 1","Option 2","Option 3"]}},n={...p},a={...p,args:{...p.args,icons:["mail","rocket","user-circle"]}};var y,b,g;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  ...Template
}`,...(g=(b=n.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var f,B,v;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  ...Template,
  args: {
    ...Template.args,
    icons: ['mail', 'rocket', 'user-circle']
  }
}`,...(v=(B=a.parameters)==null?void 0:B.docs)==null?void 0:v.source}}};const H=["Primary","Icon"];export{a as Icon,n as Primary,H as __namedExportsOrder,q as default};
//# sourceMappingURL=VrxButtonsGroup.stories-06b6232d.js.map
