import{V as D}from"./VrxDatePicker-37af1375.js";import{_ as M}from"./VrxButton.vue_vue_type_script_setup_true_lang-a04ce3ed.js";import{d as B,a as y,o as v,c as b,b as u,e as c,t as w,F as Y,f as $,g as O}from"./vue.esm-bundler-1395f49f.js";import{V as k}from"./VrxIcon-58738669.js";import"./styles-70794e3d.js";import"./VrxInput-e020e471.js";/* empty css                                                                  *//* empty css                                                                *//* empty css                                                                  *//* empty css                                                                  */import"./_plugin-vue_export-helper-c27b6911.js";import"./appendToBody-b54bee80.js";import"./_commonjsHelpers-725317a4.js";const j={class:"flex justify-center w-fit text-gray-900 dark:text-white"},N={class:"flex flex-row items-center gap-2 text-gray-400"},z={class:"flex flex-row justify-between items-center w-full"},E={class:"rounded-lg font-bold pt-1 pb-1 pr-2 pl-2 select-none"},G={class:"flex flex-col justify-center w-full"},I=["onClick"],L=B({__name:"VrxDateRangePicker",props:{type:{},validRange:{},dateFormat:{},monthsOnly:{type:Boolean},placeholderFrom:{},placeholderTo:{},width:{},invalid:{type:Boolean},labelStart:{},labelStop:{},dateStart:{},dateStop:{},helperTextStart:{},helperTextStop:{}},setup(x,{expose:f}){const p=y(),d=y(),a=y("Current"),m=y(!1),T=[{value:"Week",action:()=>h("w")},{value:"Month",action:()=>h("m")},{value:"Year",action:()=>h("y")}],S=t=>{const e=["Previous","Current","Next"];switch(e.indexOf(a.value)){case 0:t>0?a.value=e[1]:a.value=e[2];break;case 1:t>0?a.value=e[2]:a.value=e[0];break;case 2:t>0?a.value=e[0]:a.value=e[1];break}},P=()=>[p.value.getDate(),d.value.getDate()],R=t=>{p.value.setDate(t[0]),d.value.setDate(t[1])},h=t=>{const e=new Date;let r,o,l,s,n,i;switch(t){case"y":o=1,n=31,r=0,s=11,a.value==="Current"?l=i=e.getFullYear():a.value==="Previous"?l=i=e.getFullYear()-1:l=i=e.getFullYear()+1;break;case"m":l=i=e.getFullYear(),o=1,n=0,a.value==="Current"?(r=e.getMonth(),s=e.getMonth()+1):a.value==="Previous"?(r=e.getMonth()-1,s=e.getMonth()):(r=e.getMonth()+1,s=e.getMonth()+2);break;case"w":l=i=e.getFullYear(),r=s=e.getMonth(),a.value==="Current"?(o=e.getDate()-e.getDay(),n=e.getDate()+(6-e.getDay())):a.value==="Previous"?(o=e.getDate()-e.getDay()-7,n=e.getDate()-e.getDay()-1):(o=e.getDate()-(6-e.getDay())+1,n=e.getDate()+(6-e.getDay())+7);break}p.value.setDate(new Date(l,r,o)),d.value.setDate(new Date(i,s,n))};return f({getDates:P,setDates:R}),(t,e)=>(v(),b("div",j,[u("div",N,[c(D,{ref_key:"pickerStart",ref:p,type:a.value,invalid:t.invalid,"valid-range":t.validRange,"date-format":t.dateFormat,"months-only":t.monthsOnly,placeholder:t.placeholderFrom,width:t.width,onClick:e[0]||(e[0]=r=>d.value.closePicker()),label:t.labelStart,date:t.dateStart,"helper-text":t.helperTextStart},null,8,["type","invalid","valid-range","date-format","months-only","placeholder","width","label","date","helper-text"]),c(k,{icon:"chevron-down",class:"hover:bg-gray-200 dark:hover:bg-gray-600 cursor-pointer rounded-full",onClick:e[1]||(e[1]=r=>m.value=!m.value)}),c(D,{ref_key:"pickerStop",ref:d,type:a.value,invalid:t.invalid,"valid-range":t.validRange,"date-format":t.dateFormat,"months-only":t.monthsOnly,placeholder:t.placeholderTo,width:t.width,onClick:e[2]||(e[2]=r=>p.value.closePicker()),label:t.labelStop,date:t.dateStop,"helper-text":t.helperTextStop},null,8,["type","invalid","valid-range","date-format","months-only","placeholder","width","label","date","helper-text"])]),m.value?(v(),b("div",{key:0,class:"dropdown-vrx-picker absolute w-48 mt-12 p-4 h-auto text-sm rounded-lg bg-gray-50 dark:bg-gray-700 flex flex-col gap-2 shadow-md",tabindex:"-1",onFocusout:e[5]||(e[5]=r=>m.value=!1)},[u("div",z,[c(k,{icon:"chevron-left",class:"rounded-lg hover:bg-gray-200 dark:hover:bg-gray-500 cursor-pointer",onClick:e[3]||(e[3]=r=>S(-1))}),u("span",E,w(a.value),1),c(k,{icon:"chevron-right",class:"rounded-lg hover:bg-gray-200 dark:hover:bg-gray-500 cursor-pointer",onClick:e[4]||(e[4]=r=>S(1))})]),u("div",G,[(v(),b(Y,null,$(T,r=>u("div",{onClick:o=>r.action(),class:"rounded-lg hover:bg-gray-200 dark:hover:bg-gray-500 pt-1 pb-1 pr-2 pl-2 cursor-pointer justify-center flex select-none hover:text-blue-700 dark:hover:text-white"},w(r.value),9,I)),64))])],32)):O("",!0)]))}}),re={title:"VrxDateRangePicker",component:D,tags:["autodocs"],argTypes:{type:{description:"type of the date picker",control:{type:"select"},options:["date","datetime"],table:{category:"props",type:{summary:"date | datetime-local | time"},defaultValue:{summary:"date"}}},labelStart:{description:"label of the start date picker",control:{type:"text"},table:{category:"props",type:{summary:"string"},defaultValue:{summary:""}}},labelStop:{description:"label of the stop date picker",control:{type:"text"},table:{category:"props",type:{summary:"string"},defaultValue:{summary:""}}},helperTextStart:{description:"helper text of the start date picker",control:{type:"text"},table:{category:"props",type:{summary:"string"},defaultValue:{summary:""}}},helperTextStop:{description:"helper text of the stop date picker",control:{type:"text"},table:{category:"props",type:{summary:"string"},defaultValue:{summary:""}}},validRange:{description:"valid range of the date picker",control:{type:"none"},table:{category:"props",type:{summary:"[Date | undefined, Date | undefined]"},defaultValue:{summary:"undefined"}}},dateStart:{description:"reference to the start date. Must be a ref of type Date",control:{type:"none"},table:{category:"props",type:{summary:"Ref<Date> | undefined"},defaultValue:{summary:"undefined"}}},dateStop:{description:"reference to the stop date. Must be a ref of type Date",control:{type:"none"},table:{category:"props",type:{summary:"Ref<Date> | undefined"},defaultValue:{summary:"undefined"}}},dateFormat:{description:"date format of the date picker",control:{type:"text"},table:{category:"props",type:{summary:"DateFormat"},defaultValue:{summary:"DD-MM-YYYY"}}},monthsOnly:{description:"show only months",control:{type:"boolean"},table:{category:"props",type:{summary:"boolean"},defaultValue:{summary:"false"}}},placeholderFrom:{description:"placeholder of the first date picker",control:{type:"text"},table:{category:"props",type:{summary:"string"},defaultValue:{summary:"Select a date"}}},placeholderTo:{description:"placeholder of the second date picker",control:{type:"text"},table:{category:"props",type:{summary:"string"},defaultValue:{summary:"Select a date"}}},invalid:{description:"invalid state of the date picker",control:{type:"boolean"},table:{category:"props",type:{summary:"boolean"},defaultValue:{summary:"false"}}}}},W={render:x=>({components:{VrxDateRangePicker:L,VrxButton:M},setup(){return{args:x}},methods:{setDates(f){this.$refs.myRef.setDates(f)},getDates(){alert(this.$refs.myRef.getDates())}},template:`
          <div style="height: 400px" class="flex flex-col">
          <div style="height: 90%">
            <VrxDateRangePicker ref="myRef" :type="args.type" v-bind="args"/>
          </div>
          <div class="bottom-0 flex flex-row gap-2">
            <VrxButton color='default' size="sm" @click="setDates([new Date(), (new Date(new Date().getTime() + (1000 * 60 * 60 * 24 * 4)))])">Set dates</VrxButton>
            <VrxButton color='default' size="sm" @click="getDates()">Get dates</VrxButton>
          </div>
          </div>`}),args:{type:"date",placeholderFrom:"Start date",placeholderTo:"Stop date",dateFormat:void 0,monthsOnly:!1,invalid:!1}},g={...W};var V,F,C;g.parameters={...g.parameters,docs:{...(V=g.parameters)==null?void 0:V.docs,source:{originalSource:`{
  ...Template
}`,...(C=(F=g.parameters)==null?void 0:F.docs)==null?void 0:C.source}}};const oe=["Primary"];export{g as Primary,oe as __namedExportsOrder,re as default};
//# sourceMappingURL=VrxDateRangePicker.stories-31fedc97.js.map
