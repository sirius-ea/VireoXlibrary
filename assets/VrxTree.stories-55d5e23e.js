import{d as ve,a as D,I as R,y as H,J as Se,o as m,c as P,e as F,p as K,n as B,C as k,q as y,s as Ve,K as Be,L as G,D as De,t as Z,M as _,A as ee,N as oe,v as ke,E as Pe,m as te,u as Te,O as z,r as Ee}from"./vue.esm-bundler-8ca13aa1.js";import{V as le}from"./VrxIcon-260e46a9.js";import{d as Ce}from"./VrxGrid.vue_vue_type_style_index_0_scoped_3a3a4c45_lang-1d19d49d.js";import{_ as Ae}from"./_plugin-vue_export-helper-c27b6911.js";import{V as Ie}from"./VrxInput-4c98a2c9.js";import{_ as Ne}from"./VrxButton.vue_vue_type_script_setup_true_lang-d5d60f16.js";import"./styles-117b2ca5.js";/* empty css                                                                 *//* empty css                                                                  */import{_ as $e}from"./VrxToggle.vue_vue_type_script_setup_true_lang-4a6eeacf.js";/* empty css                                                                     *//* empty css                                                                  */import"./_commonjsHelpers-de833af9.js";const we={class:"tree-element vrxtree-element-style rounded-s"},Re=[".indeterminate"],ze={class:"w-full flex justify-between items-center flex-row"},Me=ve({__name:"TreeItem",props:{node:{},selectable:{type:Boolean},isParent:{type:Boolean},selected:{type:Boolean},parentId:{},siblings:{},isDraggable:{type:Boolean},class:{}},emits:["onCheckNode","onClickNode"],setup(n,{emit:f}){const r=n,c=D(null),g=R("addNode",()=>console.error("AddNode not provided")),C=R("removeNodeById",()=>console.error("RemoveNodeById not provided")),N=R("removeNode",()=>console.error("RemoveNode not provided")),h=R("selectedNodes",[]),u=D(r.selected||h.includes(r.parentId)),E=D(!1);H(()=>h,l=>{u.value=l.includes(r.node.id)||l.includes(r.parentId)||r.selected,E.value=l.filter(a=>a.includes(r.node.id)).length>0},{immediate:!0,deep:!0}),H(()=>r.selected,l=>{u.value=l||h.includes(r.node.id)},{immediate:!0,deep:!0});const J=l=>{l.target.nodeName!=="INPUT"&&(r.node.open=!r.node.open)},b=(l,a,v)=>{x("onClickNode",l,a,v||c.value)},A=()=>{u.value=!u.value,u.value?g(r.node.id):C(r.node.id,r.isParent),r.node.children.length>0&&r.node.children.forEach(l=>{N(l)}),x("onCheckNode",r.node,u.value),r.isParent||($(),I())},I=()=>{let l=!0;r.siblings.forEach(a=>{h.includes(a.id)||(l=!1)}),l&&(r.siblings.forEach(a=>{C(a.id)}),g(r.parentId))},$=()=>{(h.includes(r.parentId)||r.selected)&&(C(r.parentId,r.isParent),r.siblings.forEach(l=>{l.id!==r.node.id&&g(l.id)}))},w=(l,a)=>{x("onCheckNode",l??r.node,a),!r.isParent&&($(),I())},x=f;return(l,a)=>{const v=Se("TreeItem",!0);return m(),P("div",{"data-testid":"vrx-tree-node",class:B(["w-auto h-full flex flex-col",[l.isParent?null:"pl-5",r.class]]),onClick:a[4]||(a[4]=Pe(()=>b(l.node,r.parentId),["stop"])),ref_key:"elementRef",ref:c},[F("div",we,[K(le,{icon:l.node.children.length>0?"chevron-right":"empty",class:B(l.node.open?"icon-rotate":"icon-off"),size:"5",onClick:J},null,8,["icon","class"]),l.node.icon?(m(),k(le,{key:0,icon:l.node.icon,size:"4"},null,8,["icon"])):y("",!0),l.selectable?Ve((m(),P("input",{key:1,"data-testid":"vrx-tree-node-checkbox",type:"checkbox",class:"form-checkbox h-4 w-4","onUpdate:modelValue":a[0]||(a[0]=p=>u.value=p),onClick:A,".indeterminate":E.value&&!u.value},null,40,Re)),[[Be,u.value]]):y("",!0),F("div",ze,[l.node.asComponent===!0&&l.node.componentProps?(m(),k(oe(l.node.component),_(ee({key:0},l.node.componentProps())),{default:G(()=>[De(Z(l.node.componentSlots??l.node.text),1)]),_:1},16)):(m(),P("span",{key:1,class:B(l.node.class)},Z(r.node.text),3)),l.node.rightComponent&&l.node.rightComponentProps?(m(),k(oe(l.node.rightComponent),_(ee({key:2},l.node.rightComponentProps())),null,16)):y("",!0)])]),K(ke(Ce),{modelValue:l.node.children,"onUpdate:modelValue":a[3]||(a[3]=p=>l.node.children=p),"item-key":"id",disabled:!l.isDraggable,group:{name:"tree"},class:"flex flex-col"},{item:G(({element:p})=>[l.node.open&&!p.filtered?(m(),k(v,{node:p,key:p.id,selectable:l.selectable,selected:u.value,"parent-id":l.node.id,siblings:l.node.children,class:B(p.class),onOnCheckNode:a[1]||(a[1]=(S,V)=>w(S,V)),isDraggable:l.isDraggable,onOnClickNode:a[2]||(a[2]=(S,V,j)=>b(S,V,j))},null,8,["node","selectable","selected","parent-id","siblings","class","isDraggable"])):y("",!0)]),_:1},8,["modelValue","disabled"])],2)}}}),Oe=Ae(Me,[["__scopeId","data-v-cd055304"]]),Le={class:"flex flex-col gap-2.5 vrxtree-text-style h-full","data-testid":"vrx-tree"},We={class:"h-full overflow-auto"},xe=ve({__name:"VrxTree",props:te({selectable:{type:Boolean},searchable:{type:Boolean},isDraggable:{type:Boolean},toolbarClass:{}},{modelValue:{required:!0},modelModifiers:{}}),emits:te(["onClickNode","onMoveEnd","onCheckNode"],["update:modelValue"]),setup(n,{expose:f,emit:r}){const c=Te(n,"modelValue");if(!c.value)throw new Error("vueModel is required");const g=D(""),C=e=>{const t=(o,s)=>{o.children.forEach(d=>{d.id||(d.id=s+"-"+Math.random().toString(16).slice(2)),d.selected&&i.value.push(d.id),t(d,d.id)})};e.forEach(o=>{o.id||(o.id=Math.random().toString(16).slice(2)),o.selected&&i.value.push(o.id),t(o,o.id)})},N=e=>{i.value.includes(e)&&i.value.splice(i.value.indexOf(e),1)},h=e=>{N(e.id),E(e)},u=e=>{i.value.includes(e)||i.value.push(e)},E=e=>{i.value.forEach(t=>{t.includes(e.id)&&i.value.splice(i.value.indexOf(t),1)})},J=e=>{let t;const o=s=>{if(s.text===e){t=s;return}s.children.length>0&&s.children.forEach(d=>{o(d)})};for(const s of c.value)o(s);return t},b=e=>{let t=null;const o=s=>{if(s.id===e){t=s;return}s.children.length>0&&s.children.forEach(d=>{t||o(d)})};for(const s of c.value)o(s);return t},A=e=>{let t=null;const o=s=>{if(s.children.some(d=>d.id===e.id)){t=s;return}s.children.length>0&&s.children.forEach(d=>{t||o(d)})};for(const s of c.value)o(s);return t},I=e=>{const t=b(e),o=s=>s?o(A(s)).concat([s.text]):[];return o(t)},$=()=>{const e=[],t=o=>{i.value.includes(o.id)&&e.push(o),o.children.length>0&&o.children.forEach(s=>{t(s)})};return c.value.forEach(o=>{t(o)}),e.flatMap(o=>w(o))},w=e=>{const t=[],o=s=>{t.push(s),s.children.forEach(d=>{o(d)})};return o(e),t},x=()=>{i.value.splice(0)},l=(e,t=!0)=>{const o=b(e);o&&(t?(o.selected=!0,i.value.push(e)):(o.selected=!1,i.value.splice(i.value.indexOf(e),1)))},a=(e,t)=>{e.open=t,e.children.forEach(o=>{a(o,t)})},v=()=>{c.value.forEach(e=>{a(e,!0)})},p=()=>{c.value.forEach(e=>{a(e,!1)})},S=(e,t,o)=>{q("onClickNode",e,t,o)},V=(e,t)=>{q("onCheckNode",e,t)};function j(e,t,o){q("onMoveEnd",e,t,o)}const i=D([]),q=r;z("addNode",u),z("removeNodeById",N),z("removeNode",h),z("selectedNodes",i.value),C(c.value),f({getNodePath:I,getSelectedNodes:$,getNodeByText:J,removeNodeById:N,addNode:u,removeNode:h,flattenTree:w,getNodeById:b,getParentNode:A,setSelectedNode:l,clearSelectedNodes:x,expandAll:v,collapseAll:p}),H(()=>g.value,e=>{const t=e.trim().toLowerCase();for(const o of c.value)X(o,t)},{immediate:!0});function X(e,t){if(e.text.toLowerCase().includes(t)){Y(e,!1);return}let o=!1;for(const s of e.children)X(s,t);for(const s of e.children)if(!s.filtered){o=!0;break}e.filtered=!o}function Y(e,t){e.filtered=t,e.children.forEach(o=>Y(o,t))}return(e,t)=>(m(),P("div",Le,[e.searchable||e.$slots.toolbar?(m(),P("div",{key:0,class:B([e.toolbarClass,"flex flex-row gap-2 sticky w-full z-10"])},[e.searchable?(m(),k(Ie,{key:0,modelValue:g.value,"onUpdate:modelValue":t[0]||(t[0]=o=>g.value=o),icon:"search",type:"text",class:"flex-1"},null,8,["modelValue"])):y("",!0),Ee(e.$slots,"toolbar")],2)):y("",!0),F("div",We,[K(ke(Ce),{modelValue:c.value,"onUpdate:modelValue":t[2]||(t[2]=o=>c.value=o),disabled:!e.isDraggable,"item-key":"id",group:{name:"tree"},class:"flex flex-col"},{item:G(({element:o})=>[o.filtered?y("",!0):(m(),k(Oe,{"parent-id":o.id,node:o,selectable:e.selectable??!1,"is-parent":!0,key:o.id,siblings:c.value,isDraggable:e.isDraggable??!1,onOnClickNode:S,onOnCheckNode:t[1]||(t[1]=(s,d)=>V(s,d)),onMoveEnd:j,"parent-filtered":!1},null,8,["parent-id","node","selectable","siblings","isDraggable"]))]),_:1},8,["modelValue","disabled"])])]))}}),to={title:"VrxTree",component:xe,tags:["autodocs"],argTypes:{modelValue:{description:"model value of the tree",control:{type:"object"},table:{category:"model",type:{summary:"VrxTreeNode<T>[]"}}},searchable:{description:"allows nodes search",control:{type:"boolean"},table:{category:"props",type:{summary:"boolean"},defaultValue:{summary:"false"}}},selectable:{description:"make the tree nodes selectable",control:{type:"boolean"},table:{category:"props",type:{summary:"boolean"},defaultValue:{summary:"false"}}}}},Q=[{text:"Parent",icon:"folder",id:"x",open:!1,userData:{type:"country"},selected:!1,children:Array.from(Array(5).keys()).map(n=>({text:`Child ${n}`,id:"x-"+n,open:!1,userData:{test:"ciao"},icon:"folder",selected:!1,children:Array.from(Array(2).keys()).map(f=>({text:`Sub Child ${f}`,icon:"folder",id:"x-"+n+"-"+f,open:!1,userData:{test:"bau"},selected:!1,children:Array.from(Array(2).keys()).map(r=>({text:`Sub Sub Child ${r}`,icon:"document",id:"x-"+n+"-"+f+"-"+r,open:!1,userData:{test:"miao"},selected:!1,children:[]}))}))}))},{text:"Parent 2",icon:"folder",id:"y",open:!1,userData:{type:"country"},selected:!1,children:Array.from(Array(5).keys()).map(n=>({text:`Child ${n}`,id:"y-"+n,open:!1,userData:{test:"ciao"},icon:"folder",selected:!1,children:Array.from(Array(2).keys()).map(f=>({text:`Sub Child ${f}`,icon:"folder",open:!1,id:"y-"+n+"-"+f,userData:{test:"bau"},selected:!1,children:Array.from(Array(2).keys()).map(r=>({text:`Sub Sub Child ${r}`,icon:"document",open:!1,id:"y-"+n+"-"+f+"-"+r,userData:{test:"miao"},selected:!1,children:[]}))}))}))}],Ue=[{text:"Parent",icon:"folder",id:"x",open:!1,userData:{type:"country"},selected:!1,children:Array.from(Array(5).keys()).map(n=>({id:"x",text:`Child ${n}`,userData:{test:"ciao"},selected:!1,open:!1,children:[],asComponent:!0,component:Ne,componentProps:()=>({color:n%2===0?"default":"green",size:"md",class:"my-2"}),componentSlots:`Child ${n}`}))}],Je=[{text:"Parent",icon:"folder",id:"x",open:!1,userData:{type:"country"},selected:!1,children:[],rightSlot:!0,rightComponent:$e,rightComponentProps:()=>({})}],T={render:n=>({components:{VrxTree:xe,VrxButton:Ne},setup(){return{args:n}},methods:{logSelected(){alert(JSON.stringify(this.$refs.myRef.getSelectedNodes()))},findNode(){alert(JSON.stringify(this.$refs.myRef.getNodeByText("Sub Sub Child 0")))},findPath(){alert(JSON.stringify(this.$refs.myRef.getNodePath(this.$refs.myRef.getNodeByText("Sub Sub Child 0").id)))},clearSelection(){this.$refs.myRef.clearSelectedNodes()},setSelection(){this.$refs.myRef.setSelectedNode("x-0-0-0",!0)},expandAll(){this.$refs.myRef.expandAll()}},template:`
          <div style="height: 500px; width: auto; overflow: hidden">
                <VrxTree @on-check-node="(a) => console.log('onCheckNode', a)" @on-click-node="(a) => console.log('onClickNode',a)" ref="myRef" :check-nodes="true" v-model="args.modelValue" :selectable="args.selectable" :searchable="args.searchable" :is-draggable="args.isDraggable" :returns-user-data="args.returnsUserData">
                <template #toolbar>
                  <VrxButton color="default" size="base" @click="logSelected" >Log selected nodes</VrxButton>
                </template>
                </VrxTree>
          </div>

          <div style="padding-top: 30px; display: flex; flex-direction: row; gap: 5px">
            <VrxButton color="default" size="sm" @click="logSelected" >Log selected nodes</VrxButton>
            <VrxButton color="default" size="sm" @click="findNode" >Log found node (Sub Sub Child 0)</VrxButton>
            <VrxButton color="default" size="sm" @click="findPath" >Log find path (Sub Sub Child 0)</VrxButton>
            <VrxButton color="default" size="sm" @click="clearSelection" >Clear Selection</VrxButton>
            <VrxButton color="default" size="sm" @click="setSelection" >Set Selection</VrxButton>
            <VrxButton color="default" size="sm" @click="expandAll" >Expand all</VrxButton>
          </div>
         
        `}),args:{}},M={...T,args:{modelValue:Q,selectable:!1,searchable:!1,isDraggable:!0}},O={...T,args:{modelValue:Q,searchable:!0}},L={...T,args:{modelValue:Q,selectable:!0}},W={...T,args:{modelValue:Ue}},U={...T,args:{modelValue:Je}};var re,se,ae;M.parameters={...M.parameters,docs:{...(re=M.parameters)==null?void 0:re.docs,source:{originalSource:`{
  ...Template,
  args: {
    modelValue,
    selectable: false,
    searchable: false,
    isDraggable: true
  }
}`,...(ae=(se=M.parameters)==null?void 0:se.docs)==null?void 0:ae.source}}};var ne,de,ie;O.parameters={...O.parameters,docs:{...(ne=O.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  ...Template,
  args: {
    modelValue,
    searchable: true
  }
}`,...(ie=(de=O.parameters)==null?void 0:de.docs)==null?void 0:ie.source}}};var ce,ue,fe;L.parameters={...L.parameters,docs:{...(ce=L.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  ...Template,
  args: {
    modelValue,
    selectable: true
  }
}`,...(fe=(ue=L.parameters)==null?void 0:ue.docs)==null?void 0:fe.source}}};var me,pe,he;W.parameters={...W.parameters,docs:{...(me=W.parameters)==null?void 0:me.docs,source:{originalSource:`{
  ...Template,
  args: {
    modelValue: modelValueWithComponent
  }
}`,...(he=(pe=W.parameters)==null?void 0:pe.docs)==null?void 0:he.source}}};var ge,ye,be;U.parameters={...U.parameters,docs:{...(ge=U.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  ...Template,
  args: {
    modelValue: modelValueWithRightSlot
  }
}`,...(be=(ye=U.parameters)==null?void 0:ye.docs)==null?void 0:be.source}}};const lo=["Primary","Searchable","Selectable","WithComponent","RightSlot"];export{M as Primary,U as RightSlot,O as Searchable,L as Selectable,W as WithComponent,lo as __namedExportsOrder,to as default};
