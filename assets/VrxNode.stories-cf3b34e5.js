import{d as y,b as c,x as V,a as b,o as d,c as i,e as p,k as N,q as w,r as m,y as C,l as _,C as O,F as B}from"./vue.esm-bundler-bf410490.js";import{V as P}from"./VrxIcon-8b276aaa.js";import"./styles-cba61512.js";/* empty css                                                                 *//* empty css                                                                  */import"./VrxGrid.vue_vue_type_style_index_0_scoped_3a3a4c45_lang-bae78749.js";/* empty css                                                                     *//* empty css                                                                    *//* empty css                                                                  *//* empty css                                                                */import"./_plugin-vue_export-helper-c27b6911.js";import"./_commonjsHelpers-de833af9.js";const S={class:"w-full cursor-pointer vrxnode-main"},E={class:"flex flex-row w-full"},F={key:0,class:"vrxnode-children"},g=y({__name:"VrxNode",props:{leaf:{type:Boolean,default:!1},isOpen:{type:Boolean,default:void 0}},emits:["onOpen"],setup(a,{emit:v}){const n=a,r=c({get:()=>n.isOpen??l.value,set:e=>{n.isOpen!==void 0?x("onOpen",e):l.value=e}}),x=v,s=V(),l=b(!1),k=()=>{r.value=!r.value};return c(()=>s.children?s.children().some(t=>!(t.type===O||t.type===B||typeof t.children=="string"&&t.children.trim()==="")):!1),(e,t)=>(d(),i("div",S,[p("div",{class:"vrxnode-header",onClick:C(k,["exact"])},[p("div",E,[N(w(P),{icon:e.leaf?"empty":r.value?"chevron-down":"chevron-right",class:"vrxnode-chevron-color"},null,8,["icon"]),m(e.$slots,"default")])]),!e.leaf&&r.value?(d(),i("div",F,[m(e.$slots,"children")])):_("",!0)]))}}),L={title:"VrxNode",component:g,tags:["autodocs"]},T={render:a=>({components:{VrxNode:g},setup(){return{args:a}},template:`
            <div class="h-full w-full">
            <VrxNode>
              <span class="dark:text-content-dark text-content-light hover:bg-gray-700 hover:dark:bg-gray-400 w-full"> Parent 1 </span>
              <template #children>
                  <VrxNode>
                    <span class="dark:text-content-dark text-content-light hover:bg-gray-700 hover:dark:bg-gray-400 w-full"> Child 1 </span>
                    <template #children>
                      <VrxNode> <span class="dark:text-content-dark text-content-light hover:bg-gray-700 hover:dark:bg-gray-400 w-full"> Child 1.1 </span> </VrxNode>
                    </template>
                    </VrxNode>
                  <VrxNode>
                    <span class="dark:text-content-dark text-content-light hover:bg-gray-700 hover:dark:bg-gray-400 w-full"> Child 2 </span>
                  <template #children>
                    <VrxNode :isOpen="true" @onOpen="(value) => console.log(value)">
                        <div class="flex flex-row gap-1 items-center hover:bg-gray-700 hover:dark:bg-gray-400 w-full" @click.stop>
                         <input type="checkbox"> <span class="dark:text-content-dark text-content-light"> Child 2.1 </span>
                        </div>
                        <template #children>
                            <div v-if="false" class="flex flex-row items-center dark:text-content-dark text-content-light hover:bg-gray-700 hover:dark:bg-gray-400 w-full">
                              <div> <input type="checkbox"> <span> Checkable </span> </div>
                            </div>
                        </template>
                    </VrxNode>
                  </template>
                  </VrxNode>
              </template>
            </VrxNode>
            </div>
        `}),args:{}},o={...T};var h,u,f;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  ...Template
}`,...(f=(u=o.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};const Q=["Primary"];export{o as Primary,Q as __namedExportsOrder,L as default};
