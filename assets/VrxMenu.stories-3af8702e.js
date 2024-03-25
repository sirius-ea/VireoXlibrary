import{d as $,a as x,D,o as s,c,r as i,e as C,E as G,G as E,B as h,H as S,s as L,v as b,y as R,I as N,J as f,K as T,p as P,q as m,L as z}from"./vue.esm-bundler-b6bff0ca.js";import{V as u}from"./VrxIcon-6e9f5dc6.js";import"./styles-117b2ca5.js";/* empty css                                                                 *//* empty css                                                                  */import"./VrxGrid.vue_vue_type_style_index_0_scoped_3a3a4c45_lang-dc8a5127.js";import{v as F}from"./clickOutside-c990cfcd.js";/* empty css                                                                     *//* empty css                                                                  */import{_ as j}from"./VrxButton.vue_vue_type_script_setup_true_lang-38d69379.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./_commonjsHelpers-de833af9.js";const W={testid:"vrx-menu",class:"z-40 h-full bg-base-light dark:bg-base-dark w-fit flex flex-col","aria-label":"Sidebar"},k=$({__name:"VrxMenu",setup(o){const e=x();return D("menuContainer",e),(a,r)=>(s(),c("aside",W,[i(a.$slots,"header"),C("ul",{class:"flex-1 px-3 py-4 overflow-y-auto space-y-2 font-medium",ref_key:"menuContainer",ref:e},[i(a.$slots,"default")],512),i(a.$slots,"footer")]))}}),A={key:1,class:"flex flex-row gap-2 items-center h-full"},O={key:2},_=$({__name:"VrxLink",props:{class:{},testid:{},fatherShowDropdown:{type:Boolean},component:{},componentProps:{},collapsed:{type:Boolean}},setup(o){if(!G())throw new Error("This component must be used within a VrxMenu component");const e=x(!1),a=x(),r=x(),p=E("menuContainer");h(()=>e.value,n=>{var t,V;!a.value||!r.value||!p||(n?(r.value.style.setProperty("left",`${((t=a.value)==null?void 0:t.clientWidth)+24}px`),r.value.style.setProperty("top",`${((V=a.value)==null?void 0:V.offsetTop)-p.value.scrollTop}px`)):a.value.classList.remove("bg-content-dark","dark:bg-content-light"))}),S(()=>{if(!p)throw new Error("This component must be used within a VrxMenu component");p.value.addEventListener("scroll",()=>{var t;const n=a.value.offsetTop-((t=p.value)==null?void 0:t.scrollTop);r.value.style.setProperty("top",`${Math.max(n,0)}px`)})});const B=o;return h(()=>B.fatherShowDropdown,n=>{n||(e.value=!1)}),D("menuContainer",r),(n,t)=>L((s(),c("div",{ref_key:"containerRef",ref:a},[C("li",f({onClick:t[0]||(t[0]=V=>e.value=!e.value)},n.$props,{class:[[n.$slots.child&&e.value?"bg-content-dark dark:bg-content-light":""],"relative-group flex gap-2 items-center w-full p-2 text-base cursor-pointer text-gray-900 transition justify-between duration-75 rounded-lg group hover:bg-content-dark dark:text-white dark:hover:bg-content-light active:bg-primary-500 active:dark:bg-primary-500"]}),[n.component?(s(),R(T(n.component),f({key:0,class:"flex flex-row gap-2 items-center h-full"},n.componentProps),{default:N(()=>[i(n.$slots,"default")]),_:3},16)):(s(),c("div",A,[i(n.$slots,"default")])),n.$slots.child&&!n.collapsed?(s(),c("div",O,[P(b(u),{icon:e.value?"chevron-right":"chevron-down",size:"5"},null,8,["icon"])])):m("",!0)],16),n.$slots.child?L((s(),c("ul",{key:0,ref_key:"dropdownRef",ref:r,class:"ml-1 px-3 py-4 space-y-2 font-medium border-2 absolute z-1000 bg-base-light dark:bg-base-dark rounded-lg shadow-lg transition duration-75 w-auto dropdown-container"},[e.value?i(n.$slots,"child",{key:0}):m("",!0)],512)),[[z,e.value]]):m("",!0)])),[[b(F),()=>e.value=!1]])}}),tn={title:"VrxMenu",component:k,tags:["autodocs"],argTypes:{}},l={render:o=>({components:{VrxMenu:k,VrxLink:_,VrxIcon:u,VrxButton:j},setup(){return{args:o}},template:`
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
        `})},d={render:o=>({components:{VrxLink:_,VrxIcon:u,VrxMenu:k},setup(){return{args:o}},template:`
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
          </Vrx>
        `})};var g,v,I;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(I=(v=l.parameters)==null?void 0:v.docs)==null?void 0:I.source}}};var w,y,M;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
          </Vrx>
        \`
  })
}`,...(M=(y=d.parameters)==null?void 0:y.docs)==null?void 0:M.source}}};const rn=["MenuExample","VrxLink_Example"];export{l as MenuExample,d as VrxLink_Example,rn as __namedExportsOrder,tn as default};
