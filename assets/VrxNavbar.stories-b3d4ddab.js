import{d as _,a as v,b as X,o as n,c as i,e as r,y as a,I as k,J as $,K as B,q as c,z as H,t as p,n as g,s as N,L,F as w,k as C,p as S,H as Z,r as E,T as M}from"./vue.esm-bundler-b6bff0ca.js";import{V as d}from"./VrxIcon-6c0e4da8.js";import{n as j}from"./styles-117b2ca5.js";/* empty css                                                                  */import{_ as z}from"./_plugin-vue_export-helper-c27b6911.js";import"./_commonjsHelpers-de833af9.js";const G=_({__name:"NavButton",props:{config:{},isSelected:{type:Boolean}},setup(f){const o=f,l=v(!1);X(()=>j(o.isSelected,e()));function e(){var s;let t=!1;return(s=o.config.children)==null||s.forEach(m=>{if(!m.children)return!1;m.children.length>0&&(t=!0)}),t}const h=()=>{var t;o.config.children&&((t=o.config.children)==null?void 0:t.length)>0&&(l.value=!0)};return(t,s)=>(n(),i("ul",null,[r("li",null,[t.config.component?(n(),a(B(t.config.component.name),$({key:0,"data-testid":"vrx-navbar-button"},t.config.component.props,{class:"navbar-button block py-2 pl-3 pr-4 vrxnavbar-navbutton-text-style rounded md:hover:bg-transparent md:border-0 md:p-0",onClick:h}),{default:k(()=>[t.config.icon?(n(),a(d,{key:0,icon:t.config.icon,size:"5"},null,8,["icon"])):c("",!0),H(" "+p(t.config.text)+" ",1),t.config.children&&t.config.children.length>0?(n(),a(d,{key:1,icon:"chevron-down",class:g(t.isSelected?"icon-active":"icon-off"),size:"3"},null,8,["class"])):c("",!0)]),_:1},16)):(n(),i("div",{key:1,"data-testid":"vrx-navbar-button",class:"navbar-button block py-2 pl-3 pr-4 vrxnavbar-navbutton-text-style rounded md:hover:bg-transparent md:border-0 md:p-0",onClick:h,ref:"componentRef"},[o.config.icon?(n(),a(d,{key:0,icon:o.config.icon,size:"5"},null,8,["icon"])):c("",!0),H(" "+p(o.config.text)+" ",1),t.config.children&&t.config.children.length>0?(n(),a(d,{key:1,icon:"chevron-down",class:g(t.isSelected?"icon-active":"icon-off"),size:"3"},null,8,["class"])):c("",!0)],512))])]))}}),Q=z(G,[["__scopeId","data-v-b1de0a2a"]]),U={class:"flex-1 whitespace-nowrap"},ee={key:1,class:"child-button vrxnavbar-card-style flex items-center p-2 rounded-lg"},ne={class:"flex-1 whitespace-nowrap"},oe=_({__name:"SideSecondLayerButton",props:{config:{}},setup(f){return(o,l)=>o.config.component?(n(),a(B(o.config.component.name),$({key:0,class:"child-button vrxnavbar-card-style flex items-center p-2 rounded-lg"},o.config.component.props),{default:k(()=>[r("span",U,p(o.config.text),1)]),_:1},16)):(n(),i("div",ee,[r("span",ne,p(o.config.text),1)]))}}),te={class:"flex-1 whitespace-nowrap"},se={class:"flex-1 whitespace-nowrap"},ie={class:"side-dropdown-sub"},re=_({__name:"SideFirstLayerButton",props:{config:{}},setup(f){const o=v(!1),l=()=>{o.value=!o.value};return(e,h)=>{var t,s;return n(),i(w,null,[e.config.component?(n(),a(B(e.config.component.name),$({key:0,class:"child-button vrxnavbar-card-style flex items-center p-2 rounded-lg"},e.config.component.props),{default:k(()=>[e.config.icon?(n(),a(d,{key:0,icon:e.config.icon,size:"4"},null,8,["icon"])):c("",!0),r("span",te,p(e.config.text),1)]),_:1},16)):(n(),i("div",{key:1,onClick:l,class:"child-button vrxnavbar-card-style flex items-center p-2 rounded-lg"},[e.config.icon?(n(),a(d,{key:0,icon:e.config.icon,size:"4"},null,8,["icon"])):c("",!0),r("span",se,p(e.config.text),1),e.config.children&&((t=e.config.children)==null?void 0:t.length)>0?(n(),a(d,{key:1,icon:"chevron-down",class:g(o.value?"icon-active":"icon-off"),size:"4"},null,8,["class"])):c("",!0)])),N(r("div",ie,[(n(!0),i(w,null,C(e.config.children,m=>(n(),a(oe,{config:m},null,8,["config"]))),256))],512),[[L,o.value&&e.config.children&&((s=e.config.children)==null?void 0:s.length)>0]])],64)}}}),ae=z(re,[["__scopeId","data-v-350c2ad1"]]),ce={key:1},le={class:"flex-1 whitespace-nowrap"},de=_({__name:"NavSideButton",props:{config:{}},setup(f){const o=v(!1),l=()=>{o.value=!o.value};return(e,h)=>{var t,s;return n(),i("ul",null,[r("li",null,[e.config.component?(n(),a(B(e.config.component.name),$({key:0,"data-testid":"vrx-navbar-button"},e.config.component.props,{class:"father-button vrxnavbar-card-style flex items-center p-2 rounded-lg",onClick:l}),{default:k(()=>[e.config.icon?(n(),a(d,{key:0,icon:e.config.icon,size:"5"},null,8,["icon"])):c("",!0),H(" "+p(e.config.text)+" ",1),e.config.children&&e.config.children.length>0?(n(),a(d,{key:1,icon:"chevron-down",class:g(o.value?"icon-active":"icon-off"),size:"3"},null,8,["class"])):c("",!0)]),_:1},16)):(n(),i("div",ce,[r("div",{onClick:l,class:"father-button vrxnavbar-card-style flex items-center p-2 rounded-lg"},[e.config.icon?(n(),a(d,{key:0,icon:e.config.icon,size:"5"},null,8,["icon"])):c("",!0),r("span",le,p(e.config.text),1),e.config.children&&((t=e.config.children)==null?void 0:t.length)>0?(n(),a(d,{key:1,icon:"chevron-down",class:g(o.value?"icon-active":"icon-off"),size:"4"},null,8,["class"])):c("",!0)]),o.value&&e.config.children&&((s=e.config.children)==null?void 0:s.length)>0?(n(),i("div",{class:"side-dropdown border-t",key:e.config.text},[(n(!0),i(w,null,C(e.config.children,(m,b)=>(n(),a(ae,{config:m,key:m.text+b},null,8,["config"]))),128))])):c("",!0)]))])])}}}),ue=z(de,[["__scopeId","data-v-76628200"]]),pe={key:1,class:"children vrxnavbar-navbutton-text-style"},fe=_({__name:"SecondLayerButton",props:{config:{}},setup(f){return(o,l)=>o.config.component?(n(),a(B(o.config.component.name),$({key:0,class:"children vrxnavbar-navbutton-text-style"},o.config.component.props),{default:k(()=>[H(p(o.config.text),1)]),_:1},16)):(n(),i("div",pe,p(o.config.text),1))}}),ve={key:0,class:"icon-container p-2 vrxnavbar-card-icon-bg-style rounded-lg mt-1"},he={class:"label-text"},ge={class:"vrxnavbar-card-text-style"},me={key:0,class:"description vrxnavbar-card-description-style"},be={key:0,class:"icon-container p-2 vrxnavbar-card-icon-bg-style rounded-lg mt-1"},ye={class:"label-text"},ke={class:"title"},_e={class:"vrxnavbar-card-text-style"},we={key:0,class:"description vrxnavbar-card-description-style"},xe={key:0,class:"child-cont pt-2"},Ce={key:0,class:"icon-container p-2"},Se={class:"label-text"},$e=_({__name:"FirstLayerButton",props:{config:{}},setup(f){const o=v(!1),l=()=>{o.value=!o.value};return(e,h)=>{var t;return e.config.component?(n(),a(B({...e.config.component.name}),$({key:0,class:"card vrxnavbar-card-style rounded-lg p-4 mb-2",onClick:l},e.config.component.props),{default:k(()=>[r("div",{class:g(["child-container",e.config.description?"child-align-start":"child-align-center"])},[e.config.icon?(n(),i("div",ve,[S(d,{icon:e.config.icon},null,8,["icon"])])):c("",!0),r("div",he,[r("span",ge,p(e.config.text),1),e.config.description?(n(),i("span",me,p(e.config.description),1)):c("",!0)])],2)]),_:1},16)):(n(),i("div",{key:1,class:"card vrxnavbar-card-style rounded-lg p-4 mb-2",onClick:l},[r("div",{class:g(["child-container",e.config.description?"child-align-start":"child-align-center"])},[e.config.icon?(n(),i("div",be,[S(d,{icon:e.config.icon},null,8,["icon"])])):c("",!0),r("div",ye,[r("div",ke,[r("span",_e,p(e.config.text),1),e.config.children&&e.config.children.length>0?(n(),a(d,{key:0,icon:"chevron-down",class:g(o.value?"icon-active":"icon-off"),size:"3"},null,8,["class"])):c("",!0)]),e.config.description?(n(),i("span",we,p(e.config.description),1)):c("",!0)])],2),o.value&&e.config.children&&((t=e.config.children)==null?void 0:t.length)>0?(n(),i("div",xe,[e.config.icon?(n(),i("div",Ce,[S(d,{icon:"empty"})])):c("",!0),r("div",Se,[(n(!0),i(w,null,C(e.config.children,s=>(n(),a(fe,{config:s,key:s.text},null,8,["config"]))),128))])])):c("",!0)]))}}}),Be=z($e,[["__scopeId","data-v-99ee126b"]]),Ne={class:"navigation font-medium flex flex-col p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 bg-transparent md:bg-transparent"},Le={class:"dropdown-nav","data-testid":"vrx-side-nav"},ze={class:"h-full px-3 py-4 overflow-y-auto vrxnavbar-bg-style"},Ve={class:"space-y-2 font-medium"},Te={class:"bottom-nav border-b vrxnavbar-bottomnav-style","data-testid":"vrx-navbar-dropdown"},He=_({__name:"VrxNavbar",props:{buttons:{}},setup(f){const o=f,l=v(!1),e=v(!1),h=v(!1),t=v(window.innerWidth),s=v(!1),m=v(!1),b=v(o.buttons[0]),D=v(null),W=u=>{var x;if(!u.children||u.children&&((x=u.children)==null?void 0:x.length)<=0){s.value=!1;return}if(b.value===u){s.value=!s.value;return}if(s.value){b.value=u;return}s.value=!s.value,b.value=u},R=()=>{e.value=!e.value},A=u=>{var x;!u.children||u.children&&((x=u.children)==null?void 0:x.length)<=0||(s.value=!0,b.value=u)},Y=()=>{s.value=!1},I=()=>{if(t.value=window.innerWidth,t.value<800){h.value=!0,s.value=!1;return}h.value=!1,e.value=!1},q=()=>{if(window.scrollY>50){l.value=!0;return}l.value=!1};return Z(()=>{window.addEventListener("resize",I),window.addEventListener("scroll",q),I()}),(u,x)=>(n(),i("div",{class:g(["vrx-navbar-header vrxnavbar-bg-style",{"scrolled-nav":l.value}]),"data-testid":"vrx-navbar",onMouseleave:Y},[r("nav",{class:"vrx-navbar",ref_key:"navbar",ref:D},[E(u.$slots,"leftComponent",{},void 0,!0),N(r("ul",Ne,[(n(!0),i(w,null,C(o.buttons,y=>(n(),a(Q,{ref_for:!0,ref_key:"buttonRef",ref:m,config:y,"is-selected":JSON.stringify(y)===JSON.stringify(b.value)&&s.value,onMouseenter:K=>A(y)},null,8,["config","is-selected","onMouseenter"]))),256))],512),[[L,!h.value]]),r("div",{class:g(["icon",e.value?"icon-active":"icon-off"]),onClick:R},[N(S(d,{icon:"hamburger",size:"6"},null,512),[[L,h.value]])],2),S(M,{name:"mobile-nav"},{default:k(()=>[N(r("aside",Le,[r("div",ze,[r("ul",Ve,[(n(!0),i(w,null,C(o.buttons,y=>(n(),a(ue,{config:y,onClick:K=>W(y)},null,8,["config","onClick"]))),256))])])],512),[[L,e.value]])]),_:1})],512),S(M,{name:"bottom"},{default:k(()=>[N(r("div",Te,[(n(!0),i(w,null,C(b.value.children,y=>(n(),a(Be,{config:y},null,8,["config"]))),256))],512),[[L,s.value&&!h.value]])]),_:1})],34))}}),J=z(He,[["__scopeId","data-v-05a12aee"]]),Ie=["href"],V=_({__name:"LinkTemplate",props:{href:{}},setup(f){const o=f;return(l,e)=>(n(),i("a",{href:o.href,"data-testid":"link-template"},[E(l.$slots,"default")],8,Ie))}}),We={title:"VrxNavbar",component:J,tags:["autodocs"],argTypes:{leftComponent:{description:"left component slot",control:{},table:{category:"slots",type:{summary:"string"}}},buttons:{description:"Buttons configuration",table:{category:"props",type:{summary:"NavbarButton[]"}}}}},Me={render:f=>({components:{VrxNavbar:J,LinkTemplate:V},setup(){return{args:f}},template:`
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
        `}),args:{buttons:[{text:"Home",icon:"M12 2C13.1 2 14 2.9 14 4S13.1 6 12 6 10 5.1 10 4 10.9 2 12 2M15.9 8.1C15.5 7.7 14.8 7 13.5 7H11C8.2 7 6 4.8 6 2H4C4 5.2 6.1 7.8 9 8.7V22H11V16H13V22H15V10.1L19 14L20.4 12.6L15.9 8.1Z"},{text:"Products",children:[{text:"Top",description:"Our upper parts products made with incredible materials from Italy",icon:"palette",children:[{text:"T-shirts",component:{name:V,props:{href:"https://www.sirius.to.it"}}},{text:"Shirts"},{text:"Jackets"},{text:"Polo"}]},{text:"Bottom",description:"Our bottom parts products",icon:"palette",children:[{text:"Jeans"},{text:"Shorts"},{text:"Cargos"},{text:"Chinos"}]},{text:"Shoes",description:"Our beautiful shoes",icon:"palette",children:[{text:"Sneakers"},{text:"Shorts"},{text:"Trainers"},{text:"Splippers"}]},{text:"Accessories",description:"Shining accessories for shining people",icon:"palette",children:[{text:"Watches"},{text:"Sun-glasses"},{text:"Hats"},{text:"Belts"}]},{text:"More",description:"This will open an external link",icon:"palette",component:{name:V,props:{href:"https://www.sirius.to.it"}}}]},{text:"About",component:{name:V,props:{href:"#"}}},{text:"Settings",children:[{text:"Profile",icon:"user-circle",description:"Your profile settings"},{text:"Logout",icon:"logout"}]}]}},T={...Me};var P,F,O;T.parameters={...T.parameters,docs:{...(P=T.parameters)==null?void 0:P.docs,source:{originalSource:`{
  ...Template
}`,...(O=(F=T.parameters)==null?void 0:F.docs)==null?void 0:O.source}}};const Re=["Primary"];export{T as Primary,Re as __namedExportsOrder,We as default};
