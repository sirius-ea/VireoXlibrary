import{o as c,c as p,e as V,r as m,d as _,a as d,y as k,p as D,v as $,q as x,A as B,s as M,B as G,F as R}from"./vue.esm-bundler-8ca13aa1.js";import{_ as E}from"./_plugin-vue_export-helper-c27b6911.js";import{V as u}from"./VrxIcon-260e46a9.js";import"./styles-117b2ca5.js";/* empty css                                                                 *//* empty css                                                                  */import"./VrxGrid.vue_vue_type_style_index_0_scoped_3a3a4c45_lang-1d19d49d.js";/* empty css                                                                     *//* empty css                                                                  */import{_ as S}from"./VrxButton.vue_vue_type_script_setup_true_lang-d5d60f16.js";import"./_commonjsHelpers-de833af9.js";const z={},A={testid:"vrx-menu",class:"z-40 h-full bg-base-light dark:bg-base-dark w-fit transition-transform -translate-x-full sm:translate-x-0","aria-label":"Sidebar"},C={class:"h-full px-3 py-4 overflow-y-auto space-y-2 font-medium"};function N(a,e){return c(),p("aside",A,[V("ul",C,[m(a.$slots,"default")])])}const y=E(z,[["render",N]]),P={class:"flex flex-row gap-2 items-center h-full"},F={key:0},I=_({__name:"VrxLink",props:{class:{},testid:{},fatherShowDropdown:{type:Boolean}},setup(a){const e=d(!1),r=d(),s=d();k(()=>e.value,n=>{var t,l;!r.value||!s.value||(n?(s.value.style.setProperty("left",`${(t=r.value)==null?void 0:t.parentElement.offsetWidth}px`),s.value.style.setProperty("top",`${r.value.offsetHeight-((l=r.value)==null?void 0:l.clientHeight)}px`)):r.value.classList.remove("bg-content-dark","dark:bg-content-light"))});const w=a;return k(()=>w.fatherShowDropdown,n=>{n||(e.value=!1)}),(n,t)=>(c(),p(R,null,[V("li",B({ref_key:"containerRef",ref:r,onClick:t[0]||(t[0]=l=>e.value=!e.value)},n.$props,{class:[[n.$slots.child&&e.value?"bg-content-dark dark:bg-content-light":""],"relative-group flex gap-2 items-center w-full p-2 text-base cursor-pointer text-gray-900 transition justify-between duration-75 rounded-lg group hover:bg-content-dark dark:text-white dark:hover:bg-content-light active:bg-primary-500 active:dark:bg-primary-500"]}),[V("div",P,[m(n.$slots,"default")]),n.$slots.child?(c(),p("div",F,[D($(u),{icon:e.value?"chevron-right":"chevron-down",size:"5"},null,8,["icon"])])):x("",!0)],16),n.$slots.child?M((c(),p("ul",{key:0,ref_key:"dropdownRef",ref:s,class:"ml-1 px-3 py-4 space-y-2 font-medium border-2 absolute z-1000 bg-base-light dark:bg-base-dark rounded-lg shadow-lg transition duration-75 w-auto dropdown-container"},[e.value?m(n.$slots,"child",{key:0}):x("",!0)],512)),[[G,e.value]]):x("",!0)],64))}}),Y={title:"VrxMenu",component:y,tags:["autodocs"],argTypes:{}},o={render:a=>({components:{VrxMenu:y,VrxLink:I,VrxIcon:u,VrxButton:S},setup(){return{args:a}},template:`
          <div style="height: 500px; width: 100%">
            <VrxMenu>
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
                <VrxIcon icon="attachment"></VrxIcon>
                <span>Attachments</span>
              </VrxLink>
              <VrxButton color="default" size="sm">
                <VrxIcon icon="database"/>
                <span>Dashboard</span>
              </VrxButton>
            </VrxMenu>
          </div>
        `})},i={render:a=>({components:{VrxLink:I,VrxIcon:u},setup(){return{args:a}},template:`
          <div style="height: 500px; width: fit-content">
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
          </div>
        `})};var h,f,b;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
            <VrxMenu>
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
                <VrxIcon icon="attachment"></VrxIcon>
                <span>Attachments</span>
              </VrxLink>
              <VrxButton color="default" size="sm">
                <VrxIcon icon="database"/>
                <span>Dashboard</span>
              </VrxButton>
            </VrxMenu>
          </div>
        \`
  })
}`,...(b=(f=o.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var L,g,v;i.parameters={...i.parameters,docs:{...(L=i.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: args => ({
    components: {
      VrxLink,
      VrxIcon
    },
    setup() {
      return {
        args
      };
    },
    template: \`
          <div style="height: 500px; width: fit-content">
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
          </div>
        \`
  })
}`,...(v=(g=i.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};const Z=["MenuExample","VrxLink_Example"];export{o as MenuExample,i as VrxLink_Example,Z as __namedExportsOrder,Y as default};
