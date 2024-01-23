import{d as z,a as C,z as T,B as _,o as i,c as h,b as V,e as H,n as S,l as B,f as x,g as J,C as W,t as j,F as O,h as w}from"./vue.esm-bundler-d08935b9.js";import{V as E}from"./VrxIcon-37b9b772.js";/* empty css                                                                */import{_ as q}from"./_plugin-vue_export-helper-c27b6911.js";import{V as G}from"./VrxInput-65f52b62.js";import{_ as K}from"./VrxButton.vue_vue_type_script_setup_true_lang-12fe1b33.js";import"./styles-58edb9be.js";/* empty css                                                                  *//* empty css                                                                  *//* empty css                                                                     *//* empty css                                                                  */import"./_commonjsHelpers-725317a4.js";const Q=[".indeterminate"],X=z({__name:"TreeItem",props:{node:{},selectable:{type:Boolean},isParent:{type:Boolean},selected:{type:Boolean},selectedNodes:{},addNode:{type:Function},removeNodeById:{type:Function},removeNode:{type:Function},parentId:{},siblings:{}},emits:["checkClicked","cellClicked"],setup(u,{emit:p}){const e=u,c=C(e.node.open),d=C(e.selected||e.selectedNodes.includes(e.parentId)),m=C(!1);T(()=>e.selectedNodes,t=>{d.value=t.includes(e.node.id)||t.includes(e.parentId)||e.selected,m.value=t.filter(a=>a.includes(e.node.id)).length>0},{immediate:!0,deep:!0}),T(()=>e.selected,t=>{d.value=t||e.selectedNodes.includes(e.node.id)},{immediate:!0,deep:!0});const y=t=>{t.target.nodeName!=="INPUT"&&(c.value=!c.value)},f=(t,a)=>{p("cellClicked",t,a)},I=()=>{d.value=!d.value,d.value?e.addNode(e.node.id):e.removeNodeById(e.node.id,e.isParent),e.node.children.length>0&&e.node.children.forEach(t=>{e.removeNode(t)}),e.isParent||(b(),v(),p("checkClicked",e.node))},v=()=>{let t=!0;e.siblings.forEach(a=>{e.selectedNodes.includes(a.id)||(t=!1)}),t&&(e.siblings.forEach(a=>{e.removeNodeById(a.id)}),e.addNode(e.parentId))},b=()=>{(e.selectedNodes.includes(e.parentId)||e.selected)&&(e.removeNodeById(e.parentId,e.isParent),e.siblings.forEach(t=>{t.id!==e.node.id&&e.addNode(t.id)}))},g=()=>{e.isParent||(b(),v(),p("checkClicked",e.node))};return(t,a)=>{const s=_("TreeItem",!0);return i(),h("div",{"data-testid":"vrx-tree-node",class:S(["w-auto h-full flex flex-col",t.isParent?null:"pl-5"])},[V("div",{class:"tree-element vrxtree-element-style rounded-s",onClick:a[1]||(a[1]=()=>f(t.node,e.parentId))},[H(E,{icon:t.node.children.length>0?"chevron-right":"empty",class:S(c.value?"icon-rotate":"icon-off"),size:"5",onClick:y},null,8,["icon","class"]),t.node.icon?(i(),B(E,{key:0,icon:t.node.icon,size:"4"},null,8,["icon"])):x("",!0),t.selectable?J((i(),h("input",{key:1,"data-testid":"vrx-tree-node-checkbox",type:"checkbox",class:"form-checkbox h-4 w-4","onUpdate:modelValue":a[0]||(a[0]=r=>d.value=r),onClick:I,".indeterminate":m.value&&!d.value},null,8,Q)),[[W,d.value]]):x("",!0),V("span",{class:S(t.node.class)},j(e.node.text),3)]),t.node.children.length>0&&c.value?(i(!0),h(O,{key:0},w(t.node.children,r=>(i(),B(s,{node:r,key:r.id,selectable:t.selectable,selected:d.value,"selected-nodes":t.selectedNodes,"add-node":t.addNode,"remove-node":t.removeNode,"parent-id":e.node.id,siblings:t.node.children,"remove-node-by-id":t.removeNodeById,onCheckClicked:g,onCellClicked:a[2]||(a[2]=(l,o)=>f(l,o))},null,8,["node","selectable","selected","selected-nodes","add-node","remove-node","parent-id","siblings","remove-node-by-id"]))),128)):x("",!0)],2)}}}),Y=q(X,[["__scopeId","data-v-cfa36369"]]),Z={class:"flex flex-col gap-2.5 vrxtree-text-style","data-testid":"vrx-tree"},F=z({__name:"VrxTree",props:{data:{},selectable:{type:Boolean},searchable:{type:Boolean},returnsUserData:{type:Boolean}},emits:["cellClicked"],setup(u,{expose:p,emit:e}){const c=u,d=s=>{const r=(l,o)=>{l.children.forEach(n=>{n.id=o+"-"+Math.random().toString(16).slice(2),n.selected&&a.value.push(n.id),r(n,n.id)})};s.forEach(l=>{l.id=Math.random().toString(16).slice(2),l.selected&&a.value.push(l.id),r(l,l.id)})},m=(s,r=!1)=>{r&&(a.value=[]),a.value.includes(s)&&a.value.splice(a.value.indexOf(s),1)},y=s=>{m(s.id),I(s)},f=s=>{a.value.includes(s)||a.value.push(s)},I=s=>{a.value.forEach(r=>{r.includes(s.id)&&a.value.splice(a.value.indexOf(r),1)})},v=s=>{let r;const l=o=>{if(o.text===s){r=o;return}o.children.length>0&&o.children.forEach(n=>{l(n)})};return l(c.data[0]),r},b=()=>{const s=[],r=o=>{a.value.includes(o.id)&&s.push(o),o.children.length>0&&o.children.forEach(n=>{r(n)})};r(c.data[0]);const l=s.flatMap(o=>g(o));return c.returnsUserData?l.map(o=>o.userData??o):l},g=s=>{const r=[],l=o=>{r.push(o),o.children.forEach(n=>{l(n)})};return l(s),r},t=(s,r)=>{e("cellClicked",s,r)},a=C([]);return d(c.data),p({getSelectedNodes:b,getNodeByText:v,removeNodeById:m,addNode:f,removeNode:y,flattenTree:g}),(s,r)=>(i(),h("div",Z,[s.searchable?(i(),B(G,{key:0,"model-value":"test",icon:"search"})):x("",!0),(i(!0),h(O,null,w(s.data,l=>(i(),B(Y,{"parent-id":l.id,node:l,selectable:s.selectable??!1,"is-parent":!0,key:l.id,"selected-nodes":a.value,"add-node":f,"remove-node-by-id":m,"remove-node":y,siblings:l.children,onCellClicked:t},null,8,["parent-id","node","selectable","selected-nodes","siblings"]))),128))]))}}),pe={title:"VrxTree",component:F,tags:["autodocs"],argTypes:{searchable:{description:"allows nodes search [NOT IMPLEMENTED]",control:{type:"boolean"},table:{category:"props",type:{summary:"boolean"},defaultValue:{summary:"false"}}},selectable:{description:"make the tree nodes selectable",control:{type:"boolean"},table:{category:"props",type:{summary:"boolean"},defaultValue:{summary:"false"}}},returnsUserData:{description:"type of returned data of the selected nodes",control:{type:"boolean"},table:{category:"props",type:{summary:"boolean"},defaultValue:{summary:"false"}}}}},L=[{text:"Parent",icon:"folder",id:"x",open:!1,userData:{type:"country"},selected:!1,children:Array.from(Array(5).keys()).map(u=>({text:`Child ${u}`,id:"x",userData:{test:"ciao"},icon:"folder",selected:!1,children:Array.from(Array(2).keys()).map(p=>({text:`Sub Child ${p}`,icon:"folder",id:"x",userData:{test:"bau"},selected:!1,children:Array.from(Array(2).keys()).map(e=>({text:`Sub Sub Child ${e}`,icon:"document",id:"x",userData:{test:"miao"},selected:!1,children:[]}))}))}))}],R={render:u=>({components:{VrxTree:F,VrxButton:K},setup(){return{args:u}},methods:{logSelected(){alert(JSON.stringify(this.$refs.myRef.getSelectedNodes()))},findNode(){alert(JSON.stringify(this.$refs.myRef.getNodeByText("Sub Sub Child 0")))}},template:`
          <div style="height: auto; width: auto">
                <VrxTree ref="myRef" :check-nodes="true" :data="args.data" :selectable="args.selectable" :searchable="args.searchable" :returns-user-data="args.returnsUserData"/>
                <div style="padding-top: 30px; display: flex; flex-direction: row; gap: 5px">
                    <VrxButton color="default" size="sm" @click="logSelected" >Log selected nodes</VrxButton>
                    <VrxButton color="default" size="sm" @click="findNode" >Log found node (Sub Sub Child 0)</VrxButton>
                </div>
          </div>
         
        `}),args:{}},k={...R,args:{data:L,selectable:!1,searchable:!1,returnsUserData:!1}},N={...R,args:{data:L,selectable:!0}};var D,P,U;k.parameters={...k.parameters,docs:{...(D=k.parameters)==null?void 0:D.docs,source:{originalSource:`{
  ...Template,
  args: {
    data,
    selectable: false,
    searchable: false,
    returnsUserData: false
  }
}`,...(U=(P=k.parameters)==null?void 0:P.docs)==null?void 0:U.source}}};var $,A,M;N.parameters={...N.parameters,docs:{...($=N.parameters)==null?void 0:$.docs,source:{originalSource:`{
  ...Template,
  args: {
    data,
    selectable: true
  }
}`,...(M=(A=N.parameters)==null?void 0:A.docs)==null?void 0:M.source}}};const me=["Primary","Selectable"];export{k as Primary,N as Selectable,me as __namedExportsOrder,pe as default};
//# sourceMappingURL=VrxTree.stories-5cc3aa07.js.map