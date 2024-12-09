import{d as ye,a as E,G as O,B as F,O as Ve,o as p,c as S,e as H,p as ve,n as V,y,q as v,s as xe,P as De,I as G,z as Pe,t as Y,Q as Z,J as _,K as ee,v as ke,F as Be,k as Te,A as Ee,m as oe,u as we,D as z,r as Ae}from"./vue.esm-bundler-b6bff0ca.js";import{V as te}from"./VrxIcon-74fe102c.js";import{d as Ce}from"./VrxGrid.vue_vue_type_style_index_0_scoped_3a3a4c45_lang-dc8a5127.js";import{_ as Ie}from"./_plugin-vue_export-helper-c27b6911.js";import{V as $e}from"./VrxInput-99ad1489.js";import{_ as Ne}from"./VrxButton.vue_vue_type_script_setup_true_lang-38d69379.js";/* empty css                                                                */import"./styles-cba61512.js";/* empty css                                                                 *//* empty css                                                                  */import{_ as Re}from"./VrxToggle.vue_vue_type_script_setup_true_lang-8f587d05.js";/* empty css                                                                     *//* empty css                                                                  */import"./_commonjsHelpers-de833af9.js";const Oe=["title"],ze=[".indeterminate"],Me={class:"w-full flex justify-between items-center flex-row"},Le={class:"flex flex-col"},We=ye({__name:"TreeItem",props:{node:{},selectable:{type:Boolean},isParent:{type:Boolean},selected:{type:Boolean},parentId:{},tooltip:{},siblings:{},isDraggable:{type:Boolean},class:{}},emits:["onCheckNode","onClickNode"],setup(n,{emit:m}){const r=n;console.log(r.node.disableDrag),r.node.disableDrag&&r.node.children.length>0&&console.warn("Disable drag was set on a node with children. The Children will not be rendered");const u=E(null),k=O("addNode",()=>console.error("AddNode not provided")),x=O("removeNodeById",()=>console.error("RemoveNodeById not provided")),D=O("removeNode",()=>console.error("RemoveNode not provided")),b=O("selectedNodes",[]),f=E(r.selected||b.includes(r.parentId)),A=E(!1);F(()=>b,t=>{f.value=t.includes(r.node.id)||t.includes(r.parentId)||r.selected,A.value=t.filter(a=>a.includes(r.node.id)).length>0},{immediate:!0,deep:!0}),F(()=>r.selected,t=>{f.value=t||b.includes(r.node.id)},{immediate:!0,deep:!0});const j=t=>{t.target.nodeName!=="INPUT"&&(r.node.open=!r.node.open)},C=(t,a,N)=>{B("onClickNode",t,a,N||u.value)},I=()=>{f.value=!f.value,f.value?k(r.node.id):x(r.node.id,r.isParent),r.node.children.length>0&&r.node.children.forEach(t=>{D(t)}),B("onCheckNode",r.node,f.value),r.isParent||(R(),$())},$=()=>{let t=!0;r.siblings.forEach(a=>{b.includes(a.id)||(t=!1)}),t&&(r.siblings.forEach(a=>{x(a.id)}),k(r.parentId))},R=()=>{(b.includes(r.parentId)||r.selected)&&(x(r.parentId,r.isParent),r.siblings.forEach(t=>{t.id!==r.node.id&&k(t.id)}))},P=(t,a)=>{B("onCheckNode",t??r.node,a),!r.isParent&&(R(),$())},B=m;return(t,a)=>{const N=Ve("TreeItem",!0);return p(),S("div",{"data-testid":"vrx-tree-node",class:V(["w-auto h-full flex flex-col",[t.isParent?null:"pl-5",r.class,t.node.disableDrag?"disableDrag":""]]),onClick:a[6]||(a[6]=Ee(()=>C(t.node,r.parentId),["stop"])),ref_key:"elementRef",ref:u},[H("div",{class:"tree-element vrxtree-element-style rounded-s",title:t.tooltip??""},[ve(te,{icon:t.node.children.length>0?"chevron-right":"empty",class:V(t.node.open?"icon-rotate":"icon-off"),size:"5",onClick:j},null,8,["icon","class"]),t.node.icon?(p(),y(te,{key:0,icon:t.node.icon,size:"4"},null,8,["icon"])):v("",!0),t.selectable?xe((p(),S("input",{key:1,"data-testid":"vrx-tree-node-checkbox",type:"checkbox",class:"form-checkbox h-4 w-4","onUpdate:modelValue":a[0]||(a[0]=i=>f.value=i),onClick:I,".indeterminate":A.value&&!f.value},null,40,ze)),[[De,f.value]]):v("",!0),H("div",Me,[t.node.asComponent===!0&&t.node.componentProps?(p(),y(ee(t.node.component),Z(_({key:0},t.node.componentProps())),{default:G(()=>[Pe(Y(t.node.componentSlots??t.node.text),1)]),_:1},16)):(p(),S("span",{key:1,class:V(t.node.class)},Y(r.node.text),3)),t.node.rightComponent&&t.node.rightComponentProps?(p(),y(ee(t.node.rightComponent),Z(_({key:2},t.node.rightComponentProps())),null,16)):v("",!0)])],8,Oe),t.node.disableDrag?(p(!0),S(Be,{key:1},Te(t.node.children,i=>(p(),S("div",Le,[t.node.open&&!i.filtered?(p(),y(N,{node:i,key:i.id,selectable:t.selectable,selected:f.value,"parent-id":t.node.id,siblings:t.node.children,class:V(i.class),onOnCheckNode:a[4]||(a[4]=(h,g)=>P(h,g)),isDraggable:t.isDraggable,onOnClickNode:a[5]||(a[5]=(h,g,T)=>C(h,g,T))},null,8,["node","selectable","selected","parent-id","siblings","class","isDraggable"])):v("",!0)]))),256)):(p(),y(ke(Ce),{key:0,modelValue:t.node.children,"onUpdate:modelValue":a[3]||(a[3]=i=>t.node.children=i),"item-key":"id",disabled:!t.isDraggable,group:{name:"tree"},class:"flex flex-col ciao"},{item:G(({element:i})=>[t.node.open&&!i.filtered?(p(),y(N,{node:i,key:i.id,selectable:t.selectable,selected:f.value,"parent-id":t.node.id,tooltip:i.tooltip,siblings:t.node.children,class:V(i.class),onOnCheckNode:a[1]||(a[1]=(h,g)=>P(h,g)),isDraggable:t.isDraggable,onOnClickNode:a[2]||(a[2]=(h,g,T)=>C(h,g,T))},null,8,["node","selectable","selected","parent-id","tooltip","siblings","class","isDraggable"])):v("",!0)]),_:1},8,["modelValue","disabled"]))],2)}}}),Ue=Ie(We,[["__scopeId","data-v-803eecc5"]]),Je={class:"flex flex-col gap-2.5 vrxtree-text-style h-full","data-testid":"vrx-tree"},je={class:"h-full overflow-auto"},Se=ye({__name:"VrxTree",props:oe({selectable:{type:Boolean},searchable:{type:Boolean},searchPlaceholder:{},isDraggable:{type:Boolean},toolbarClass:{}},{modelValue:{required:!0},modelModifiers:{}}),emits:oe(["onClickNode","onMoveEnd","onCheckNode"],["update:modelValue"]),setup(n,{expose:m,emit:r}){const u=we(n,"modelValue");if(!u.value)throw new Error("vueModel is required");const k=E(""),x=e=>{const l=(o,s)=>{o.children.forEach(d=>{d.id||(d.id=s+"-"+Math.random().toString(16).slice(2)),d.selected&&c.value.push(d.id),l(d,d.id)})};e.forEach(o=>{o.id||(o.id=Math.random().toString(16).slice(2)),o.selected&&c.value.push(o.id),l(o,o.id)})},D=e=>{c.value.includes(e)&&c.value.splice(c.value.indexOf(e),1)},b=e=>{D(e.id),A(e)},f=e=>{c.value.includes(e)||c.value.push(e)},A=e=>{c.value.forEach(l=>{l.includes(e.id)&&c.value.splice(c.value.indexOf(l),1)})},j=e=>{let l;const o=s=>{if(s.text===e){l=s;return}s.children.length>0&&s.children.forEach(d=>{o(d)})};for(const s of u.value)o(s);return l},C=e=>{let l=null;const o=s=>{if(s.id===e){l=s;return}s.children.length>0&&s.children.forEach(d=>{l||o(d)})};for(const s of u.value)o(s);return l},I=e=>{let l=null;const o=s=>{if(s.children.some(d=>d.id===e.id)){l=s;return}s.children.length>0&&s.children.forEach(d=>{l||o(d)})};for(const s of u.value)o(s);return l},$=e=>{const l=C(e),o=s=>s?o(I(s)).concat([s.text]):[];return o(l)},R=()=>{const e=[],l=o=>{c.value.includes(o.id)&&e.push(o),o.children.length>0&&o.children.forEach(s=>{l(s)})};return u.value.forEach(o=>{l(o)}),e.flatMap(o=>P(o))},P=e=>{const l=[],o=s=>{l.push(s),s.children.forEach(d=>{o(d)})};return o(e),l},B=()=>{c.value.splice(0)},t=(e,l=!0)=>{const o=C(e);o&&(l?(o.selected=!0,c.value.push(e)):(o.selected=!1,c.value.splice(c.value.indexOf(e),1)))},a=(e,l)=>{e.open=l,e.children.forEach(o=>{a(o,l)})},N=()=>{u.value.forEach(e=>{a(e,!0)})},i=()=>{u.value.forEach(e=>{a(e,!1)})},h=(e,l,o)=>{q("onClickNode",e,l,o)},g=(e,l)=>{q("onCheckNode",e,l)};function T(e,l,o){q("onMoveEnd",e,l,o)}const c=E([]),q=r;z("addNode",f),z("removeNodeById",D),z("removeNode",b),z("selectedNodes",c.value),x(u.value),m({getNodePath:$,getSelectedNodes:R,getNodeByText:j,removeNodeById:D,addNode:f,removeNode:b,flattenTree:P,getNodeById:C,getParentNode:I,setSelectedNode:t,clearSelectedNodes:B,expandAll:N,collapseAll:i}),F(()=>k.value,e=>{const l=e.trim().toLowerCase();for(const o of u.value)Q(o,l)},{immediate:!0});function Q(e,l){if(e.text.toLowerCase().includes(l)){X(e,!1);return}let o=!1;for(const s of e.children)Q(s,l);for(const s of e.children)if(!s.filtered){o=!0;break}e.filtered=!o}function X(e,l){e.filtered=l,e.children.forEach(o=>X(o,l))}return(e,l)=>(p(),S("div",Je,[e.searchable||e.$slots.toolbar?(p(),S("div",{key:0,class:V([e.toolbarClass,"flex flex-row gap-2 sticky w-full z-10"])},[e.searchable?(p(),y($e,{key:0,modelValue:k.value,"onUpdate:modelValue":l[0]||(l[0]=o=>k.value=o),placeholder:e.searchPlaceholder,icon:"search",type:"text",class:"flex-1"},null,8,["modelValue","placeholder"])):v("",!0),Ae(e.$slots,"toolbar")],2)):v("",!0),H("div",je,[ve(ke(Ce),{modelValue:u.value,"onUpdate:modelValue":l[2]||(l[2]=o=>u.value=o),disabled:!e.isDraggable,"item-key":"id",group:{name:"tree"},class:"flex flex-col"},{item:G(({element:o})=>[o.filtered?v("",!0):(p(),y(Ue,{"parent-id":o.id,node:o,selectable:e.selectable??!1,"is-parent":!0,key:o.id,siblings:u.value,tooltip:o.tooltip,isDraggable:e.isDraggable??!1,onOnClickNode:h,onOnCheckNode:l[1]||(l[1]=(s,d)=>g(s,d)),onMoveEnd:T,"parent-filtered":!1},null,8,["parent-id","node","selectable","siblings","tooltip","isDraggable"]))]),_:1},8,["modelValue","disabled"])])]))}}),ao={title:"VrxTree",component:Se,tags:["autodocs"],argTypes:{modelValue:{description:"model value of the tree",control:{type:"object"},table:{category:"model",type:{summary:"VrxTreeNode<T>[]"}}},searchPlaceholder:{description:"helper text",control:{type:"text"},table:{category:"props",type:{summary:"string"}}},searchable:{description:"allows nodes search",control:{type:"boolean"},table:{category:"props",type:{summary:"boolean"},defaultValue:{summary:"false"}}},selectable:{description:"make the tree nodes selectable",control:{type:"boolean"},table:{category:"props",type:{summary:"boolean"},defaultValue:{summary:"false"}}}}},K=[{text:"Parent",icon:"folder",id:"x",open:!1,userData:{type:"country"},selected:!1,children:Array.from(Array(5).keys()).map(n=>({text:`Child ${n}`,id:"x-"+n,open:!1,userData:{test:"ciao"},icon:"folder",selected:!1,children:Array.from(Array(2).keys()).map(m=>({text:`Sub Child ${m}`,icon:"folder",id:"x-"+n+"-"+m,open:!1,userData:{test:"bau"},selected:!1,children:Array.from(Array(2).keys()).map(r=>({text:`Sub Sub Child ${r}`,icon:"document",tooltip:"Tooltip!",id:"x-"+n+"-"+m+"-"+r,open:!1,userData:{test:"miao"},selected:!1,children:[],disableDrag:!0}))}))}))},{text:"Parent 2",icon:"folder",id:"y",open:!1,userData:{type:"country"},selected:!1,children:Array.from(Array(5).keys()).map(n=>({text:`Child ${n}`,id:"y-"+n,open:!1,userData:{test:"ciao"},icon:"folder",selected:!1,children:Array.from(Array(2).keys()).map(m=>({text:`Sub Child ${m}`,icon:"folder",open:!1,id:"y-"+n+"-"+m,userData:{test:"bau"},selected:!1,children:Array.from(Array(2).keys()).map(r=>({text:`Sub Sub Child ${r}`,icon:"document",open:!1,tooltip:"Tooltip!",id:"y-"+n+"-"+m+"-"+r,userData:{test:"miao"},selected:!1,children:[]}))}))}))}],qe=[{text:"Parent",icon:"folder",id:"x",open:!1,userData:{type:"country"},selected:!1,children:Array.from(Array(5).keys()).map(n=>({id:"x",text:`Child ${n}`,userData:{test:"ciao"},selected:!1,open:!1,children:[],asComponent:!0,component:Ne,componentProps:()=>({color:n%2===0?"default":"green",size:"md",class:"my-2"}),componentSlots:`Child ${n}`}))}],Fe=[{text:"Parent",icon:"folder",id:"x",open:!1,userData:{type:"country"},selected:!1,children:[],rightSlot:!0,rightComponent:Re,rightComponentProps:()=>({})}],w={render:n=>({components:{VrxTree:Se,VrxButton:Ne},setup(){return{args:n}},methods:{logSelected(){alert(JSON.stringify(this.$refs.myRef.getSelectedNodes()))},findNode(){alert(JSON.stringify(this.$refs.myRef.getNodeByText("Sub Sub Child 0")))},findPath(){alert(JSON.stringify(this.$refs.myRef.getNodePath(this.$refs.myRef.getNodeByText("Sub Sub Child 0").id)))},clearSelection(){this.$refs.myRef.clearSelectedNodes()},setSelection(){this.$refs.myRef.setSelectedNode("x-0-0-0",!0)},expandAll(){this.$refs.myRef.expandAll()}},template:`
          <div style="height: 500px; width: auto; overflow: hidden">
                <VrxTree @on-check-node="(a) => console.log('onCheckNode', a)" @on-click-node="(a) => console.log('onClickNode',a)" ref="myRef" :check-nodes="true" v-model="args.modelValue" :selectable="args.selectable" :searchable="args.searchable" :searchPlaceholder="args.searchPlaceholder" :is-draggable="args.isDraggable" :returns-user-data="args.returnsUserData">
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
         
        `}),args:{}},M={...w,args:{modelValue:K,selectable:!1,searchable:!1,isDraggable:!0}},L={...w,args:{modelValue:K,searchable:!0,searchPlaceholder:"My custom placeholder"}},W={...w,args:{modelValue:K,selectable:!0}},U={...w,args:{modelValue:qe}},J={...w,args:{modelValue:Fe}};var le,re,se;M.parameters={...M.parameters,docs:{...(le=M.parameters)==null?void 0:le.docs,source:{originalSource:`{
  ...Template,
  args: {
    modelValue,
    selectable: false,
    searchable: false,
    isDraggable: true
  }
}`,...(se=(re=M.parameters)==null?void 0:re.docs)==null?void 0:se.source}}};var ae,ne,de;L.parameters={...L.parameters,docs:{...(ae=L.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  ...Template,
  args: {
    modelValue,
    searchable: true,
    searchPlaceholder: 'My custom placeholder'
  }
}`,...(de=(ne=L.parameters)==null?void 0:ne.docs)==null?void 0:de.source}}};var ie,ce,ue;W.parameters={...W.parameters,docs:{...(ie=W.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  ...Template,
  args: {
    modelValue,
    selectable: true
  }
}`,...(ue=(ce=W.parameters)==null?void 0:ce.docs)==null?void 0:ue.source}}};var pe,fe,me;U.parameters={...U.parameters,docs:{...(pe=U.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  ...Template,
  args: {
    modelValue: modelValueWithComponent
  }
}`,...(me=(fe=U.parameters)==null?void 0:fe.docs)==null?void 0:me.source}}};var he,ge,be;J.parameters={...J.parameters,docs:{...(he=J.parameters)==null?void 0:he.docs,source:{originalSource:`{
  ...Template,
  args: {
    modelValue: modelValueWithRightSlot
  }
}`,...(be=(ge=J.parameters)==null?void 0:ge.docs)==null?void 0:be.source}}};const no=["Primary","Searchable","Selectable","WithComponent","RightSlot"];export{M as Primary,J as RightSlot,L as Searchable,W as Selectable,U as WithComponent,no as __namedExportsOrder,ao as default};
