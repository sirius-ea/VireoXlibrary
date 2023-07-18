import{d as w,l as f,e as X,o as n,c as i,g as s,w as k,v as $,x as B,i as c,s as H,k as g,n as v,j as a,y as N,z as L,F as _,f as C,q as S,A as Z,r as E,T as P}from"./vue.esm-bundler-b58da939.js";import{V as d}from"./VrxIcon-b3185a74.js";import{n as G}from"./styles-6560abd0.js";/* empty css                                                                  */import{_ as z}from"./_plugin-vue_export-helper-c27b6911.js";import"./_commonjsHelpers-725317a4.js";const K=w({__name:"NavButton",props:{config:{},isSelected:{type:Boolean}},setup(p){const t=p,l=f(!1);X(()=>G(t.isSelected,e()));function e(){var r;let o=!1;return(r=t.config.children)==null||r.forEach(m=>{if(!m.children)return!1;m.children.length>0&&(o=!0)}),o}const h=()=>{var o;t.config.children&&((o=t.config.children)==null?void 0:o.length)>0&&(l.value=!0)};return(o,r)=>(n(),i("li",null,[o.config.component?(n(),s(B(o.config.component.name),$({key:0,"data-testid":"vrx-navbar-button"},o.config.component.props,{class:"navbar-button block py-2 pl-3 pr-4 text-gray-900 rounded md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500",onClick:h}),{default:k(()=>[o.config.icon?(n(),s(d,{key:0,icon:o.config.icon,size:"5"},null,8,["icon"])):c("",!0),H(" "+g(o.config.text)+" ",1),o.config.children&&o.config.children.length>0?(n(),s(d,{key:1,icon:"chevron-down",class:v(o.isSelected?"icon-active":"icon-off"),size:"3"},null,8,["class"])):c("",!0)]),_:1},16)):(n(),i("div",{key:1,"data-testid":"vrx-navbar-button",class:"navbar-button block py-2 pl-3 pr-4 text-gray-900 rounded md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500",onClick:h,ref:"componentRef"},[t.config.icon?(n(),s(d,{key:0,icon:t.config.icon,size:"5"},null,8,["icon"])):c("",!0),H(" "+g(t.config.text)+" ",1),o.config.children&&o.config.children.length>0?(n(),s(d,{key:1,icon:"chevron-down",class:v(o.isSelected?"icon-active":"icon-off"),size:"3"},null,8,["class"])):c("",!0)],512))]))}}),Q=z(K,[["__scopeId","data-v-c7976b42"]]),U={class:"flex-1 whitespace-nowrap"},ee={key:1,class:"child-button flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"},ne={class:"flex-1 whitespace-nowrap"},te=w({__name:"SideSecondLayerButton",props:{config:{}},setup(p){return(t,l)=>t.config.component?(n(),s(B(t.config.component.name),$({key:0,class:"child-button flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"},t.config.component.props),{default:k(()=>[a("span",U,g(t.config.text),1)]),_:1},16)):(n(),i("div",ee,[a("span",ne,g(t.config.text),1)]))}}),oe={class:"flex-1 whitespace-nowrap"},re={class:"flex-1 whitespace-nowrap"},ie={class:"side-dropdown-sub"},se=w({__name:"SideFirstLayerButton",props:{config:{}},setup(p){const t=f(!1),l=()=>{t.value=!t.value};return(e,h)=>{var o,r;return n(),i(_,null,[e.config.component?(n(),s(B(e.config.component.name),$({key:0,class:"child-button flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"},e.config.component.props),{default:k(()=>[e.config.icon?(n(),s(d,{key:0,icon:e.config.icon,size:"4"},null,8,["icon"])):c("",!0),a("span",oe,g(e.config.text),1)]),_:1},16)):(n(),i("div",{key:1,onClick:l,class:"child-button flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"},[e.config.icon?(n(),s(d,{key:0,icon:e.config.icon,size:"4"},null,8,["icon"])):c("",!0),a("span",re,g(e.config.text),1),e.config.children&&((o=e.config.children)==null?void 0:o.length)>0?(n(),s(d,{key:1,icon:"chevron-down",class:v(t.value?"icon-active":"icon-off"),size:"4"},null,8,["class"])):c("",!0)])),N(a("div",ie,[(n(!0),i(_,null,C(e.config.children,m=>(n(),s(te,{config:m},null,8,["config"]))),256))],512),[[L,t.value&&e.config.children&&((r=e.config.children)==null?void 0:r.length)>0]])],64)}}}),ae=z(se,[["__scopeId","data-v-cc59c6ce"]]),ce={key:1},le={class:"flex-1 whitespace-nowrap"},de=w({__name:"NavSideButton",props:{config:{}},setup(p){const t=f(!1),l=()=>{t.value=!t.value};return(e,h)=>{var o,r;return n(),i("li",null,[e.config.component?(n(),s(B(e.config.component.name),$({key:0,"data-testid":"vrx-navbar-button"},e.config.component.props,{class:"father-button flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700",onClick:l}),{default:k(()=>[e.config.icon?(n(),s(d,{key:0,icon:e.config.icon,size:"5"},null,8,["icon"])):c("",!0),H(" "+g(e.config.text)+" ",1),e.config.children&&e.config.children.length>0?(n(),s(d,{key:1,icon:"chevron-down",class:v(t.value?"icon-active":"icon-off"),size:"3"},null,8,["class"])):c("",!0)]),_:1},16)):(n(),i("div",ce,[a("div",{onClick:l,class:"father-button flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"},[e.config.icon?(n(),s(d,{key:0,icon:e.config.icon,size:"5"},null,8,["icon"])):c("",!0),a("span",le,g(e.config.text),1),e.config.children&&((o=e.config.children)==null?void 0:o.length)>0?(n(),s(d,{key:1,icon:"chevron-down",class:v(t.value?"icon-active":"icon-off"),size:"4"},null,8,["class"])):c("",!0)]),t.value&&e.config.children&&((r=e.config.children)==null?void 0:r.length)>0?(n(),i("div",{class:"side-dropdown border-t",key:e.config.text},[(n(!0),i(_,null,C(e.config.children,(m,b)=>(n(),s(ae,{config:m,key:m.text+b},null,8,["config"]))),128))])):c("",!0)]))])}}}),ue=z(de,[["__scopeId","data-v-5974ca57"]]),ge={key:1,class:"children dark:text-white hover:dark:text-blue-700 hover:text-blue-700"},pe=w({__name:"SecondLayerButton",props:{config:{}},setup(p){return(t,l)=>t.config.component?(n(),s(B(t.config.component.name),$({key:0,class:"children dark:text-white hover:dark:text-blue-700 hover:text-blue-700"},t.config.component.props),{default:k(()=>[H(g(t.config.text),1)]),_:1},16)):(n(),i("div",ge,g(t.config.text),1))}}),fe={key:0,class:"icon-container p-2 bg-gray-100 dark:bg-gray-700 rounded-lg mt-1"},he={class:"label-text"},ve={class:"text-black dark:text-white"},me={key:0,class:"description text-gray-500"},be={key:0,class:"icon-container p-2 bg-gray-100 dark:bg-gray-700 rounded-lg mt-1"},ye={class:"label-text"},ke={class:"title"},we={class:"text-black dark:text-white"},_e={key:0,class:"description text-gray-500"},xe={key:0,class:"child-cont pt-2"},Ce={key:0,class:"icon-container p-2"},Se={class:"label-text"},$e=w({__name:"FirstLayerButton",props:{config:{}},setup(p){const t=f(!1),l=()=>{t.value=!t.value};return(e,h)=>{var o;return e.config.component?(n(),s(B(e.config.component.name),$({key:0,class:"card hover:bg-gray-50 rounded-lg p-4 dark:hover:bg-gray-800 mb-2 dark:text-white",onClick:l},e.config.component.props),{default:k(()=>[a("div",{class:v(["child-container",e.config.description?"child-align-start":"child-align-center"])},[e.config.icon?(n(),i("div",fe,[S(d,{icon:e.config.icon},null,8,["icon"])])):c("",!0),a("div",he,[a("span",ve,g(e.config.text),1),e.config.description?(n(),i("span",me,g(e.config.description),1)):c("",!0)])],2)]),_:1},16)):(n(),i("div",{key:1,class:"card hover:bg-gray-50 rounded-lg p-4 dark:hover:bg-gray-800 mb-2 dark:text-white",onClick:l},[a("div",{class:v(["child-container",e.config.description?"child-align-start":"child-align-center"])},[e.config.icon?(n(),i("div",be,[S(d,{icon:e.config.icon},null,8,["icon"])])):c("",!0),a("div",ye,[a("div",ke,[a("span",we,g(e.config.text),1),e.config.children&&e.config.children.length>0?(n(),s(d,{key:0,icon:"chevron-down",class:v(t.value?"icon-active":"icon-off"),size:"3"},null,8,["class"])):c("",!0)]),e.config.description?(n(),i("span",_e,g(e.config.description),1)):c("",!0)])],2),t.value&&e.config.children&&((o=e.config.children)==null?void 0:o.length)>0?(n(),i("div",xe,[e.config.icon?(n(),i("div",Ce,[S(d,{icon:"empty"})])):c("",!0),a("div",Se,[(n(!0),i(_,null,C(e.config.children,r=>(n(),s(pe,{config:r,key:r.text},null,8,["config"]))),128))])])):c("",!0)]))}}}),Be=z($e,[["__scopeId","data-v-be489a4c"]]),Ne={class:"navigation font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"},Le={class:"dropdown-nav","data-testid":"vrx-side-nav"},ze={class:"h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800"},Ve={class:"space-y-2 font-medium"},Te={class:"bottom-nav border-b bg-white dark:bg-gray-900 dark:border-gray-700","data-testid":"vrx-navbar-dropdown"},He=w({__name:"VrxNavbar",props:{buttons:{}},setup(p){const t=p,l=f(!1),e=f(!1),h=f(!1),o=f(window.innerWidth),r=f(!1),m=f(!1),b=f(t.buttons[0]),J=f(null),W=u=>{var x;if(!u.children||u.children&&((x=u.children)==null?void 0:x.length)<=0){r.value=!1;return}if(b.value===u){r.value=!r.value;return}if(r.value){b.value=u;return}r.value=!r.value,b.value=u},A=()=>{e.value=!e.value},R=u=>{var x;!u.children||u.children&&((x=u.children)==null?void 0:x.length)<=0||(r.value=!0,b.value=u)},Y=()=>{r.value=!1},M=()=>{if(o.value=window.innerWidth,o.value<800){h.value=!0,r.value=!1;return}h.value=!1,e.value=!1},j=()=>{if(window.scrollY>50){l.value=!0;return}l.value=!1};return Z(()=>{window.addEventListener("resize",M),window.addEventListener("scroll",j),M()}),(u,x)=>(n(),i("div",{class:v(["vrx-navbar-header bg-white border-gray-200 dark:bg-gray-900",{"scrolled-nav":l.value}]),"data-testid":"vrx-navbar",onMouseleave:Y},[a("nav",{class:"vrx-navbar",ref_key:"navbar",ref:J},[E(u.$slots,"leftComponent",{},void 0,!0),N(a("ul",Ne,[(n(!0),i(_,null,C(t.buttons,y=>(n(),s(Q,{ref_for:!0,ref_key:"buttonRef",ref:m,config:y,"is-selected":JSON.stringify(y)===JSON.stringify(b.value)&&r.value,onMouseenter:q=>R(y)},null,8,["config","is-selected","onMouseenter"]))),256))],512),[[L,!h.value]]),a("div",{class:v(["icon",e.value?"icon-active":"icon-off"]),onClick:A},[N(S(d,{icon:"hamburger",size:"6"},null,512),[[L,h.value]])],2),S(P,{name:"mobile-nav"},{default:k(()=>[N(a("aside",Le,[a("div",ze,[a("ul",Ve,[(n(!0),i(_,null,C(t.buttons,y=>(n(),s(ue,{config:y,onClick:q=>W(y)},null,8,["config","onClick"]))),256))])])],512),[[L,e.value]])]),_:1})],512),S(P,{name:"bottom"},{default:k(()=>[N(a("div",Te,[(n(!0),i(_,null,C(b.value.children,y=>(n(),s(Be,{config:y},null,8,["config"]))),256))],512),[[L,r.value&&!h.value]])]),_:1})],34))}}),D=z(He,[["__scopeId","data-v-e2a67fef"]]),Me=["href"],V=w({__name:"LinkTemplate",props:{href:{}},setup(p){const t=p;return(l,e)=>(n(),i("a",{href:t.href,"data-testid":"link-template"},[E(l.$slots,"default")],8,Me))}}),We={title:"VrxNavbar",component:D,tags:["autodocs"],argTypes:{leftComponent:{description:"left component slot",control:{},table:{category:"slots",type:{summary:"string"}}},buttons:{description:"Buttons configuration",table:{category:"props",type:{summary:"NavbarButton[]"}}}}},Pe={render:p=>({components:{VrxNavbar:D,LinkTemplate:V},setup(){return{args:p}},template:`
          <div style="height: 500px; width: 100%">
            <VrxNavbar :buttons="args.buttons" :stick-to-top="args.stickToTop">
              <template v-slot:leftComponent>
                <a href="https://www.sirius.to.it/" class="flex items-center">
                  <img src="https://avatars.githubusercontent.com/u/108472933?s=200&v=4" class="h-8 mr-3" alt="Flowbite Logo" />
                  <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">VireoXlibrary</span>
                </a>
              </template>
            </VrxNavbar>
          </div>
        `}),args:{buttons:[{text:"Home",icon:"M12 2C13.1 2 14 2.9 14 4S13.1 6 12 6 10 5.1 10 4 10.9 2 12 2M15.9 8.1C15.5 7.7 14.8 7 13.5 7H11C8.2 7 6 4.8 6 2H4C4 5.2 6.1 7.8 9 8.7V22H11V16H13V22H15V10.1L19 14L20.4 12.6L15.9 8.1Z"},{text:"Products",children:[{text:"Top",description:"Our upper parts products made with incredible materials from Italy",icon:"palette",children:[{text:"T-shirts",component:{name:V,props:{href:"https://www.sirius.to.it"}}},{text:"Shirts"},{text:"Jackets"},{text:"Polo"}]},{text:"Bottom",description:"Our bottom parts products",icon:"palette",children:[{text:"Jeans"},{text:"Shorts"},{text:"Cargos"},{text:"Chinos"}]},{text:"Shoes",description:"Our beautiful shoes",icon:"palette",children:[{text:"Sneakers"},{text:"Shorts"},{text:"Trainers"},{text:"Splippers"}]},{text:"Accessories",description:"Shining accessories for shining people",icon:"palette",children:[{text:"Watches"},{text:"Sun-glasses"},{text:"Hats"},{text:"Belts"}]},{text:"More",description:"This will open an external link",icon:"palette",component:{name:V,props:{href:"https://www.sirius.to.it"}}}]},{text:"About",component:{name:V,props:{href:"#"}}},{text:"Settings",children:[{text:"Profile",icon:"user-circle",description:"Your profile settings"},{text:"Logout",icon:"logout"}]}]}},T={...Pe};var F,I,O;T.parameters={...T.parameters,docs:{...(F=T.parameters)==null?void 0:F.docs,source:{originalSource:`{
  ...Template
}`,...(O=(I=T.parameters)==null?void 0:I.docs)==null?void 0:O.source}}};const Ae=["Primary"];export{T as Primary,Ae as __namedExportsOrder,We as default};
//# sourceMappingURL=VrxNavbar.stories-890153ab.js.map