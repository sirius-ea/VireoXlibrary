import{o as r,c as s,f as e,t as d,F as g,h as C,l as x,i as V,j as _,e as N}from"./vue.esm-bundler-e6638ddb.js";import{_ as v}from"./_plugin-vue_export-helper-c27b6911.js";import{g as j}from"./getTheme-113c7fe0.js";const B={class:"color-section"},w={class:"colors-container"},G={class:"colors-container__wrapper"},q={class:"color-description"},I={class:"key-color"},O={class:"hex-color"},b={__name:"ColorsGrid",props:{colors:{type:Object,required:!0},title:{type:String,default:"Root"},useDefaultBackgroundColor:{type:Boolean,default:!1}},setup(t){return(l,i)=>(r(),s("div",B,[e("h3",null,d(t.title),1),e("div",w,[(r(!0),s(g,null,C(t.colors,(a,o)=>(r(),s("div",null,[e("div",G,[e("div",null,[e("div",{class:"color",style:x(`background-color: ${a}`)},null,4),e("div",q,[e("p",I,d(o),1),V(),e("p",O,d(a),1)])])])]))),256))])]))}},p=v(b,[["__scopeId","data-v-b27b6e4a"]]);b.__docgenInfo={exportName:"default",displayName:"ColorsGrid",description:"",tags:{},props:[{name:"colors",type:{name:"object"},required:!0},{name:"title",type:{name:"string"},defaultValue:{func:!1,value:"'Root'"}},{name:"useDefaultBackgroundColor",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],sourceFiles:["/home/runner/work/VireoXlibrary/VireoXlibrary/node_modules/storybook-tailwind-foundations/src/components/ColorsGrid.vue"]};const R={class:"colors-container"},S={key:0},h={__name:"ColorsFoundation",props:{colors:{type:Object,required:!0}},setup(t){const l=t,i=o=>o&&typeof o=="object",a=()=>{let o={};for(let c in l.colors)i(l.colors[c])||(o[c]=l.colors[c]);return o};return(o,c)=>(r(),s("div",R,[(r(!0),s(g,null,C(t.colors,(u,F)=>(r(),s("div",null,[i(u)?(r(),s("div",S,[_(p,{colors:u,title:F},null,8,["colors","title"])])):N("",!0)]))),256)),_(p,{colors:a(),title:"Root Colors","use-default-background-color":!0},null,8,["colors"])]))}},k=v(h,[["__scopeId","data-v-40222f34"]]);h.__docgenInfo={exportName:"default",displayName:"ColorsFoundation",description:"",tags:{},props:[{name:"colors",type:{name:"object"},required:!0}],sourceFiles:["/home/runner/work/VireoXlibrary/VireoXlibrary/node_modules/storybook-tailwind-foundations/src/components/ColorsFoundation.vue"]};const E={title:"Foundations/Colors",component:k},X=t=>({components:{ColorsFoundation:k},setup(){return{args:t}},template:'<ColorsFoundation v-bind="args" />'}),n=X.bind({});n.args={colors:j("colors")};var m,f,y;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`args => ({
  components: {
    ColorsFoundation
  },
  setup() {
    return {
      args
    };
  },
  template: '<ColorsFoundation v-bind="args" />'
})`,...(y=(f=n.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const z=["Colors"];export{n as Colors,z as __namedExportsOrder,E as default};
//# sourceMappingURL=Colors.stories-f151717b.js.map
