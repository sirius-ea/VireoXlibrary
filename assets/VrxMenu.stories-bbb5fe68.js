import{d as D,a as x,B as V,o,c,r as s,e as m,D as R,E as b,z as N,G as S,p as f,q as g,H as v,I as T,J as z,K as P,k as A,l as I,L as F}from"./vue.esm-bundler-bf410490.js";import{V as u}from"./VrxIcon-8b276aaa.js";import"./styles-cba61512.js";/* empty css                                                                 *//* empty css                                                                  */import"./VrxGrid.vue_vue_type_style_index_0_scoped_3a3a4c45_lang-bae78749.js";import{v as j}from"./clickOutside-c990cfcd.js";/* empty css                                                                     *//* empty css                                                                    *//* empty css                                                                  */import{_ as W}from"./VrxButton.vue_vue_type_script_setup_true_lang-07d0d5c7.js";/* empty css                                                                */import"./_plugin-vue_export-helper-c27b6911.js";import"./_commonjsHelpers-de833af9.js";const O={testid:"vrx-menu",class:"z-40 h-full bg-base-light dark:bg-base-dark w-fit flex flex-col","aria-label":"Sidebar"},k=D({__name:"VrxMenu",setup(i){const e=x();return V("menuContainer",e),(a,r)=>(o(),c("aside",O,[s(a.$slots,"header"),m("ul",{class:"flex-1 px-3 py-4 overflow-y-auto space-y-2 font-medium",ref_key:"menuContainer",ref:e},[s(a.$slots,"default")],512),s(a.$slots,"footer")]))}}),q={key:1,class:"flex flex-row gap-2 items-center h-full"},H={key:2},G=D({__name:"VrxLink",props:{class:{},testid:{},component:{},componentProps:{},collapsed:{type:Boolean}},setup(i){if(!R())throw new Error("This component must be used within a VrxMenu component");const e=x(!1),a=x(),r=x(),p=b("menuContainer"),B=b("closeAllMenus",()=>{});N(()=>e.value,n=>{var t,L;!a.value||!r.value||!p||(n?(r.value.style.setProperty("left",`${((t=a.value)==null?void 0:t.clientWidth)+24}px`),r.value.style.setProperty("top",`${((L=a.value)==null?void 0:L.offsetTop)-p.value.scrollTop}px`)):a.value.classList.remove("bg-content-dark","dark:bg-content-light"))}),S(()=>{if(!p)throw new Error("This component must be used within a VrxMenu component");p.value.addEventListener("scroll",()=>{var t;const n=a.value.offsetTop-((t=p.value)==null?void 0:t.scrollTop);r.value.style.setProperty("top",`${Math.max(n,0)}px`)})}),V("menuContainer",r);const h=()=>{e.value=!1,B()};V("closeAllMenus",h);const E=n=>{n?e.value=!e.value:(e.value=!1,h())};return(n,t)=>f((o(),c("div",{ref_key:"containerRef",ref:a},[m("ul",null,[m("li",v({onClick:t[0]||(t[0]=()=>{E(!!n.$slots.child)})},n.$props,{class:[[n.$slots.child&&e.value?"bg-content-dark dark:bg-content-light":""],"relative-group flex gap-2 items-center w-full p-2 text-base cursor-pointer text-gray-900 transition justify-between duration-75 rounded-lg group hover:bg-content-dark dark:text-white dark:hover:bg-content-light active:bg-primary-500 active:dark:bg-primary-500"]}),[n.component?(o(),T(P(n.component),v({key:0,class:"flex flex-row gap-2 items-center h-full"},n.componentProps),{default:z(()=>[s(n.$slots,"default")]),_:3},16)):(o(),c("div",q,[s(n.$slots,"default")])),n.$slots.child&&!n.collapsed?(o(),c("div",H,[A(g(u),{icon:e.value?"chevron-right":"chevron-down",size:"5"},null,8,["icon"])])):I("",!0)],16)]),n.$slots.child?f((o(),c("ul",{key:0,ref_key:"dropdownRef",ref:r,class:"ml-1 px-3 py-4 space-y-2 font-medium border-2 absolute z-1000 bg-base-light dark:bg-base-dark rounded-lg shadow-lg transition duration-75 w-auto dropdown-container"},[s(n.$slots,"child")],512)),[[F,e.value]]):I("",!0)])),[[g(j),()=>e.value=!1]])}}),pn={title:"VrxMenu",component:k,tags:["autodocs"],argTypes:{}},l={render:i=>({components:{VrxMenu:k,VrxLink:G,VrxIcon:u,VrxButton:W},setup(){return{args:i}},template:`
          <div style="height: 500px; width: 100%">
            <VrxMenu class="rounded-xl overflow-hidden border">
                <template #header>
                  <div class="bg-gray-200 dark:bg-gray-800 w-full text-center text-xl font-bold p-2 flex gap-2 items-center border-b"> <VrxIcon icon="wind"/> New product </div>
                </template>
              <VrxLink>
                <VrxIcon icon="attachment"></VrxIcon>
                <span>Attachments</span>
              </VrxLink>
              <VrxLink>
                <VrxIcon icon="database"/>
                <span>Realtime</span>
                <template #child>
                  <VrxLink>
                    <VrxIcon icon="document"/>
                    <span>Dashboard</span>
                    <template #child>
                      <VrxLink>
                        <VrxIcon icon="document"/>
                        <span>Dashboard</span>
                      </VrxLink>
                      <VrxLink>
                        <VrxIcon icon="database"/>
                        <span>Gis</span>
                      </VrxLink>
                    </template>
                  </VrxLink>
                  <VrxLink>
                    <VrxIcon icon="database"/>
                    <span>Gis</span>
                  </VrxLink>
                </template>
              </VrxLink>
              <div class="w-full border-t border-gray-200 dark:border-gray-700"></div>
              <VrxLink>
                <VrxIcon icon="database"/>
                <span>With Component</span>
                <template #child>
                  <VrxLink >
                    <VrxIcon icon="document"/>
                    <span>Links</span>
                    <template #child>
                      <VrxLink component="a" :component-props="{class:'pippo', href:'https://google.com'}">
                        <VrxIcon icon="document"/>
                        <span>Google</span>
                      </VrxLink>
                    </template>
                  </VrxLink>
                  <VrxLink>
                    <VrxIcon icon="database"/>
                    <span>Gis</span>
                  </VrxLink>
                </template>
              </VrxLink>
              <VrxButton color="default" size="sm">
                <VrxIcon icon="database"/>
                <span>Dashboard</span>
              </VrxButton>
              <VrxLink>
                <VrxIcon icon="language"/>
                <span>Languages</span>
                <template #child>
                  <VrxLink>
                    <VrxIcon icon="document"/>
                    <span>Italian</span>
                    <template #child>
                      <VrxLink>
                        <VrxIcon icon="document"/>
                        <span>Napoletano</span>
                      </VrxLink>
                      <VrxLink>
                        <VrxIcon icon="database"/>
                        <span>Milanese</span>
                      </VrxLink>
                    </template>
                  </VrxLink>
                  <VrxLink>
                    <VrxIcon icon="document"/>
                    <span>French</span>
                  </VrxLink>
                </template>
              </VrxLink>
              <template #footer>
                <span class="w-full text-gray-400 text-center italic text-xs p-2 border-t bg-gray-200">
                Made with ❤️ by Sirius</span>
              </template>
            </VrxMenu>
          </div>
        `})},d={render:i=>({components:{VrxLink:G,VrxIcon:u,VrxMenu:k},setup(){return{args:i}},template:`
          <VrxMenu style="height: 500px; width: fit-content">
            <VrxLink>
              <VrxIcon icon="database"/>
              <span>Realtime</span>
              <template #child>
                <VrxLink>
                  <VrxIcon icon="document"/>
                  <span>Dashboard</span>
                  <template #child>
                    <VrxLink>
                      <VrxIcon icon="document"/>
                      <span>Dashboard</span>
                    </VrxLink>
                    <VrxLink>
                      <VrxIcon icon="database"/>
                      <span>Gis</span>
                    </VrxLink>
                  </template>
                </VrxLink>
                <VrxLink>
                  <VrxIcon icon="database"/>
                  <span>Gis</span>
                </VrxLink>
              </template>
            </VrxLink>
          </VrxMenu>
        `})};var w,y,M;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: args => ({
    components: {
      VrxMenu,
      VrxLink,
      VrxIcon,
      VrxButton
    },
    setup() {
      return {
        args
      };
    },
    template: \`
          <div style="height: 500px; width: 100%">
            <VrxMenu class="rounded-xl overflow-hidden border">
                <template #header>
                  <div class="bg-gray-200 dark:bg-gray-800 w-full text-center text-xl font-bold p-2 flex gap-2 items-center border-b"> <VrxIcon icon="wind"/> New product </div>
                </template>
              <VrxLink>
                <VrxIcon icon="attachment"></VrxIcon>
                <span>Attachments</span>
              </VrxLink>
              <VrxLink>
                <VrxIcon icon="database"/>
                <span>Realtime</span>
                <template #child>
                  <VrxLink>
                    <VrxIcon icon="document"/>
                    <span>Dashboard</span>
                    <template #child>
                      <VrxLink>
                        <VrxIcon icon="document"/>
                        <span>Dashboard</span>
                      </VrxLink>
                      <VrxLink>
                        <VrxIcon icon="database"/>
                        <span>Gis</span>
                      </VrxLink>
                    </template>
                  </VrxLink>
                  <VrxLink>
                    <VrxIcon icon="database"/>
                    <span>Gis</span>
                  </VrxLink>
                </template>
              </VrxLink>
              <div class="w-full border-t border-gray-200 dark:border-gray-700"></div>
              <VrxLink>
                <VrxIcon icon="database"/>
                <span>With Component</span>
                <template #child>
                  <VrxLink >
                    <VrxIcon icon="document"/>
                    <span>Links</span>
                    <template #child>
                      <VrxLink component="a" :component-props="{class:'pippo', href:'https://google.com'}">
                        <VrxIcon icon="document"/>
                        <span>Google</span>
                      </VrxLink>
                    </template>
                  </VrxLink>
                  <VrxLink>
                    <VrxIcon icon="database"/>
                    <span>Gis</span>
                  </VrxLink>
                </template>
              </VrxLink>
              <VrxButton color="default" size="sm">
                <VrxIcon icon="database"/>
                <span>Dashboard</span>
              </VrxButton>
              <VrxLink>
                <VrxIcon icon="language"/>
                <span>Languages</span>
                <template #child>
                  <VrxLink>
                    <VrxIcon icon="document"/>
                    <span>Italian</span>
                    <template #child>
                      <VrxLink>
                        <VrxIcon icon="document"/>
                        <span>Napoletano</span>
                      </VrxLink>
                      <VrxLink>
                        <VrxIcon icon="database"/>
                        <span>Milanese</span>
                      </VrxLink>
                    </template>
                  </VrxLink>
                  <VrxLink>
                    <VrxIcon icon="document"/>
                    <span>French</span>
                  </VrxLink>
                </template>
              </VrxLink>
              <template #footer>
                <span class="w-full text-gray-400 text-center italic text-xs p-2 border-t bg-gray-200">
                Made with ❤️ by Sirius</span>
              </template>
            </VrxMenu>
          </div>
        \`
  })
}`,...(M=(y=l.parameters)==null?void 0:y.docs)==null?void 0:M.source}}};var C,$,_;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: args => ({
    components: {
      VrxLink,
      VrxIcon,
      VrxMenu
    },
    setup() {
      return {
        args
      };
    },
    template: \`
          <VrxMenu style="height: 500px; width: fit-content">
            <VrxLink>
              <VrxIcon icon="database"/>
              <span>Realtime</span>
              <template #child>
                <VrxLink>
                  <VrxIcon icon="document"/>
                  <span>Dashboard</span>
                  <template #child>
                    <VrxLink>
                      <VrxIcon icon="document"/>
                      <span>Dashboard</span>
                    </VrxLink>
                    <VrxLink>
                      <VrxIcon icon="database"/>
                      <span>Gis</span>
                    </VrxLink>
                  </template>
                </VrxLink>
                <VrxLink>
                  <VrxIcon icon="database"/>
                  <span>Gis</span>
                </VrxLink>
              </template>
            </VrxLink>
          </VrxMenu>
        \`
  })
}`,...(_=($=d.parameters)==null?void 0:$.docs)==null?void 0:_.source}}};const cn=["MenuExample","VrxLink_Example"];export{l as MenuExample,d as VrxLink_Example,cn as __namedExportsOrder,pn as default};
