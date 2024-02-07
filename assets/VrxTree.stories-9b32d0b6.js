import{d as Z,a as N,x as w,G as ae,o as c,c as h,e as A,p as ne,n as R,A as y,q as x,s as le,H as de,I as ie,J as z,K as M,L as U,t as O,F as ee,k as te,C as ce,B as ue}from"./vue.esm-bundler-fef724a1.js";import{V as W}from"./VrxIcon-8aaf0ed9.js";/* empty css                                                                */import{_ as pe}from"./_plugin-vue_export-helper-c27b6911.js";import{V as me}from"./VrxInput-75c15581.js";import{_ as oe}from"./VrxButton.vue_vue_type_script_setup_true_lang-c090f67c.js";import"./styles-b96d5dc9.js";/* empty css                                                                  */import{_ as fe}from"./VrxToggle.vue_vue_type_script_setup_true_lang-ae615960.js";/* empty css                                                                     *//* empty css                                                                  */import"./_commonjsHelpers-725317a4.js";const he={class:"tree-element vrxtree-element-style rounded-s"},ye=[".indeterminate"],ge={class:"w-full flex justify-between items-center flex-row"},be=Z({__name:"TreeItem",props:{node:{},selectable:{type:Boolean},isParent:{type:Boolean},selected:{type:Boolean},selectedNodes:{},addNode:{type:Function},removeNodeById:{type:Function},removeNode:{type:Function},parentId:{},siblings:{}},emits:["checkClicked","cellClicked"],setup(u,{emit:g}){const e=u,p=N(null),m=N(e.node.open),i=N(e.selected||e.selectedNodes.includes(e.parentId)),b=N(!1);w(()=>e.selectedNodes,t=>{i.value=t.includes(e.node.id)||t.includes(e.parentId)||e.selected,b.value=t.filter(d=>d.includes(e.node.id)).length>0},{immediate:!0,deep:!0}),w(()=>e.selected,t=>{i.value=t||e.selectedNodes.includes(e.node.id)},{immediate:!0,deep:!0});const S=t=>{t.target.nodeName!=="INPUT"&&(m.value=!m.value)},P=(t,d,n)=>{C("cellClicked",t,d,n||p.value)},E=()=>{i.value=!i.value,i.value?e.addNode(e.node.id):e.removeNodeById(e.node.id,e.isParent),e.node.children.length>0&&e.node.children.forEach(t=>{e.removeNode(t)}),e.isParent||(k(),v(),C("checkClicked",e.node))},v=()=>{let t=!0;e.siblings.forEach(d=>{e.selectedNodes.includes(d.id)||(t=!1)}),t&&(e.siblings.forEach(d=>{e.removeNodeById(d.id)}),e.addNode(e.parentId))},k=()=>{(e.selectedNodes.includes(e.parentId)||e.selected)&&(e.removeNodeById(e.parentId,e.isParent),e.siblings.forEach(t=>{t.id!==e.node.id&&e.addNode(t.id)}))},$=()=>{e.isParent||(k(),v(),C("checkClicked",e.node))},C=g;return(t,d)=>{const n=ae("TreeItem",!0);return c(),h("div",{"data-testid":"vrx-tree-node",class:R(["w-auto h-full flex flex-col",t.isParent?null:"pl-5"]),onClick:d[2]||(d[2]=ce(()=>P(t.node,e.parentId),["stop"])),ref_key:"elementRef",ref:p},[A("div",he,[ne(W,{icon:t.node.children.length>0?"chevron-right":"empty",class:R(m.value?"icon-rotate":"icon-off"),size:"5",onClick:S},null,8,["icon","class"]),t.node.icon?(c(),y(W,{key:0,icon:t.node.icon,size:"4"},null,8,["icon"])):x("",!0),t.selectable?le((c(),h("input",{key:1,"data-testid":"vrx-tree-node-checkbox",type:"checkbox",class:"form-checkbox h-4 w-4","onUpdate:modelValue":d[0]||(d[0]=f=>i.value=f),onClick:E,".indeterminate":b.value&&!i.value},null,40,ye)),[[de,i.value]]):x("",!0),A("div",ge,[t.node.asComponent===!0&&t.node.componentProps?(c(),y(U(t.node.component),z(M({key:0},t.node.componentProps())),{default:ie(()=>[ue(O(t.node.componentSlots??t.node.text),1)]),_:1},16)):(c(),h("span",{key:1,class:R(t.node.class)},O(e.node.text),3)),t.node.rightComponent&&t.node.rightComponentProps?(c(),y(U(t.node.rightComponent),z(M({key:2},t.node.rightComponentProps())),null,16)):x("",!0)])]),t.node.children.length>0&&m.value?(c(!0),h(ee,{key:0},te(t.node.children,f=>(c(),y(n,{node:f,key:f.id,selectable:t.selectable,selected:i.value,"selected-nodes":t.selectedNodes,"add-node":t.addNode,"remove-node":t.removeNode,"parent-id":e.node.id,siblings:t.node.children,"remove-node-by-id":t.removeNodeById,onCheckClicked:$,onCellClicked:d[1]||(d[1]=(s,a,r)=>P(s,a,r))},null,8,["node","selectable","selected","selected-nodes","add-node","remove-node","parent-id","siblings","remove-node-by-id"]))),128)):x("",!0)],2)}}}),ve=pe(be,[["__scopeId","data-v-a3b3fbe6"]]),ke={class:"flex flex-col gap-2.5 vrxtree-text-style","data-testid":"vrx-tree"},re=Z({__name:"VrxTree",props:{data:{},selectable:{type:Boolean},searchable:{type:Boolean},returnsUserData:{type:Boolean}},emits:["cellClicked"],setup(u,{expose:g,emit:e}){const p=u,m=s=>{const a=(r,o)=>{r.children.forEach(l=>{l.id=o+"-"+Math.random().toString(16).slice(2),l.selected&&n.value.push(l.id),a(l,l.id)})};s.forEach(r=>{r.id=Math.random().toString(16).slice(2),r.selected&&n.value.push(r.id),a(r,r.id)})},i=(s,a=!1)=>{a&&(n.value=[]),n.value.includes(s)&&n.value.splice(n.value.indexOf(s),1)},b=s=>{i(s.id),P(s)},S=s=>{n.value.includes(s)||n.value.push(s)},P=s=>{n.value.forEach(a=>{a.includes(s.id)&&n.value.splice(n.value.indexOf(a),1)})},E=s=>{let a;const r=o=>{if(o.text===s){a=o;return}o.children.length>0&&o.children.forEach(l=>{r(l)})};return r(p.data[0]),a},v=s=>{let a=null;const r=o=>{if(o.id===s){a=o;return}o.children.length>0&&o.children.forEach(l=>{a||r(l)})};return r(p.data[0]),a},k=s=>{let a=null;const r=o=>{if(o.children.some(l=>l.id===s.id)){a=o;return}o.children.length>0&&o.children.forEach(l=>{a||r(l)})};return r(p.data[0]),a},$=s=>{const a=v(s),r=o=>o?r(k(o)).concat([o.text]):[];return r(a)},C=()=>{const s=[],a=o=>{n.value.includes(o.id)&&s.push(o),o.children.length>0&&o.children.forEach(l=>{a(l)})};p.data.forEach(o=>{a(o)});const r=s.flatMap(o=>t(o));return p.returnsUserData?r.map(o=>o.userData??o):r},t=s=>{const a=[],r=o=>{a.push(o),o.children.forEach(l=>{r(l)})};return r(s),a},d=(s,a,r)=>{f("cellClicked",s,a,r)},n=N([]),f=e;return m(p.data),g({getNodePath:$,getSelectedNodes:C,getNodeByText:E,removeNodeById:i,addNode:S,removeNode:b,flattenTree:t,getNodeById:v,getParentNode:k}),(s,a)=>(c(),h("div",ke,[s.searchable?(c(),y(me,{key:0,"model-value":"test",icon:"search"})):x("",!0),(c(!0),h(ee,null,te(s.data,r=>(c(),y(ve,{"parent-id":r.id,node:r,selectable:s.selectable??!1,"is-parent":!0,key:r.id,"selected-nodes":n.value,"add-node":S,"remove-node-by-id":i,"remove-node":b,siblings:r.children,onCellClicked:d},null,8,["parent-id","node","selectable","selected-nodes","siblings"]))),128))]))}}),Ae={title:"VrxTree",component:re,tags:["autodocs"],argTypes:{searchable:{description:"allows nodes search [NOT IMPLEMENTED]",control:{type:"boolean"},table:{category:"props",type:{summary:"boolean"},defaultValue:{summary:"false"}}},selectable:{description:"make the tree nodes selectable",control:{type:"boolean"},table:{category:"props",type:{summary:"boolean"},defaultValue:{summary:"false"}}},returnsUserData:{description:"type of returned data of the selected nodes",control:{type:"boolean"},table:{category:"props",type:{summary:"boolean"},defaultValue:{summary:"false"}}}}},se=[{text:"Parent",icon:"folder",id:"x",open:!1,userData:{type:"country"},selected:!1,children:Array.from(Array(5).keys()).map(u=>({text:`Child ${u}`,id:"x",userData:{test:"ciao"},icon:"folder",selected:!1,children:Array.from(Array(2).keys()).map(g=>({text:`Sub Child ${g}`,icon:"folder",id:"x",userData:{test:"bau"},selected:!1,children:Array.from(Array(2).keys()).map(e=>({text:`Sub Sub Child ${e}`,icon:"document",id:"x",userData:{test:"miao"},selected:!1,children:[]}))}))}))}],Ce=[{text:"Parent",icon:"folder",id:"x",open:!1,userData:{type:"country"},selected:!1,children:Array.from(Array(5).keys()).map(u=>({id:"x",text:`Child ${u}`,userData:{test:"ciao"},selected:!1,children:[],asComponent:!0,component:oe,componentProps:()=>({color:u%2===0?"default":"green",size:"md",class:"my-2"}),componentSlots:`Child ${u}`}))}],Ne=[{text:"Parent",icon:"folder",id:"x",open:!1,userData:{type:"country"},selected:!1,children:[],rightSlot:!0,rightComponent:fe,rightComponentProps:()=>({})}],D={render:u=>({components:{VrxTree:re,VrxButton:oe},setup(){return{args:u}},methods:{logSelected(){alert(JSON.stringify(this.$refs.myRef.getSelectedNodes()))},findNode(){alert(JSON.stringify(this.$refs.myRef.getNodeByText("Sub Sub Child 0")))},findPath(){alert(JSON.stringify(this.$refs.myRef.getNodePath(this.$refs.myRef.getNodeByText("Sub Sub Child 0").id)))}},template:`
          <div style="height: auto; width: auto">
                <VrxTree @cell-clicked="(a,b,c) => console.log('cellClicked', a, b, c)" ref="myRef" :check-nodes="true" :data="args.data" :selectable="args.selectable" :searchable="args.searchable" :returns-user-data="args.returnsUserData"/>
                <div style="padding-top: 30px; display: flex; flex-direction: row; gap: 5px">
                    <VrxButton color="default" size="sm" @click="logSelected" >Log selected nodes</VrxButton>
                    <VrxButton color="default" size="sm" @click="findNode" >Log found node (Sub Sub Child 0)</VrxButton>
                    <VrxButton color="default" size="sm" @click="findPath" >Log find path (Sub Sub Child 0)</VrxButton>
                </div>
          </div>
         
        `}),args:{}},B={...D,args:{data:se,selectable:!1,searchable:!1,returnsUserData:!1}},I={...D,args:{data:se,selectable:!0}},T={...D,args:{data:Ce}},V={...D,args:{data:Ne}};var L,F,J;B.parameters={...B.parameters,docs:{...(L=B.parameters)==null?void 0:L.docs,source:{originalSource:`{
  ...Template,
  args: {
    data,
    selectable: false,
    searchable: false,
    returnsUserData: false
  }
}`,...(J=(F=B.parameters)==null?void 0:F.docs)==null?void 0:J.source}}};var _,H,j;I.parameters={...I.parameters,docs:{...(_=I.parameters)==null?void 0:_.docs,source:{originalSource:`{
  ...Template,
  args: {
    data,
    selectable: true
  }
}`,...(j=(H=I.parameters)==null?void 0:H.docs)==null?void 0:j.source}}};var q,G,K;T.parameters={...T.parameters,docs:{...(q=T.parameters)==null?void 0:q.docs,source:{originalSource:`{
  ...Template,
  args: {
    data: dataWithComponent
  }
}`,...(K=(G=T.parameters)==null?void 0:G.docs)==null?void 0:K.source}}};var Q,X,Y;V.parameters={...V.parameters,docs:{...(Q=V.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  ...Template,
  args: {
    data: dataWithRightSlot
  }
}`,...(Y=(X=V.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};const ze=["Primary","Selectable","WithComponent","RightSlot"];export{B as Primary,V as RightSlot,I as Selectable,T as WithComponent,ze as __namedExportsOrder,Ae as default};
