import{d as m,a as v,j as h,D as u,B as C,o as i,c as l,r as d,G as b,b as k,H as V,n as $,v as L,q as j}from"./vue.esm-bundler-b6bff0ca.js";import{_ as w}from"./_plugin-vue_export-helper-c27b6911.js";const y={class:"tabs tabs-lifted"},f=m({__name:"VrxTabbar",props:{defaultValue:{}},emits:["tabSelected"],setup(a,{emit:t}){const{defaultValue:n}=a,e=v(n),r=h({tabs:[e.value],content:[]}),s=t;return u("selectedValue",e),u("controlObject",r),C(e,o=>{s("tabSelected",o)}),(o,x)=>(i(),l("div",y,[d(o.$slots,"default")]))}}),O={},g={class:"flex flex-row"};function E(a,t){return i(),l("ul",g,[d(a.$slots,"default")])}const S=w(O,[["render",E]]),B=["aria-label"],z=m({__name:"VrxTabLink",props:{tab_name:{}},setup(a){const t=b("selectedValue"),n=b("controlObject");if(!t||!n)throw new Error("VrxTabLink must be used inside VrxTabbar element");const{tab_name:e}=a,r=k(()=>t.value===e);n.tabs.push(e),V(()=>{n.content.find(o=>o===e)||console.warn(`Tab ${e} has no corresponding tab content`)});function s(){r.value||(t.value=e)}return(o,x)=>(i(),l("li",{class:$(["cursor-pointer px-4 py-2 border-b-2 border-b-transparent hover:border-b-primary-100 active:border-b-primary-400",[r.value?"active !border-b-primary-500":""]]),onClick:s,"aria-label":o.tab_name},[d(o.$slots,"default")],10,B))}}),P={key:0,class:"z-0 mt-2"},q=m({__name:"VrxTabContent",props:{tab_name:{}},setup(a){const t=b("selectedValue"),n=b("controlObject");if(!t||!n)throw new Error("VrxTabContent must be used inside VrxTabbar element");const{tab_name:e}=a;return n.content.push(e),V(()=>{n.tabs.find(r=>r===e)||console.warn(`TabContent ${e} has no corresponding tab link`)}),(r,s)=>L(t)===r.tab_name?(i(),l("section",P,[d(r.$slots,"default")])):j("",!0)}}),M={title:"VrxTabbar",component:f,tags:[],argTypes:{}},D={render:a=>({components:{VrxTabbar:f,VrxTabList:S,VrxTabLink:z,VrxTabContent:q},setup(){return{args:a}},template:`
            <VrxTabbar :default-value="'Tab 1'">
                <VrxTabList>
                    <VrxTabLink :tab_name="'Tab 1'">
                      <span>Tab 1</span>
                    </VrxTabLink>
                    <VrxTabLink :tab_name="'Tab 2'">
                      <span>Tab 2</span>
                    </VrxTabLink>
                </VrxTabList>
                <VrxTabContent :tab_name="'Tab 1'">
                    <div>Tab 1 content</div>
                </VrxTabContent>
                <VrxTabContent :tab_name="'Tab 2'">
                    <div>Tab 2 content</div>
                </VrxTabContent>
                <VrxTabContent :tab_name="'Tab 3'">
                    <div>Tab 3 content</div>
                </VrxTabContent>
            </VrxTabbar>`}),args:{}},c={...D};var p,T,_;c.parameters={...c.parameters,docs:{...(p=c.parameters)==null?void 0:p.docs,source:{originalSource:`{
  ...Template
}`,...(_=(T=c.parameters)==null?void 0:T.docs)==null?void 0:_.source}}};const N=["Primary"];export{c as Primary,N as __namedExportsOrder,M as default};
