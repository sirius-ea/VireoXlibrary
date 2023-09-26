import{V as s}from"./VrxDatePicker-76b4bc18.js";import{_ as n}from"./VrxButton.vue_vue_type_script_setup_true_lang-0cb9f967.js";import"./vue.esm-bundler-a8ffa6e8.js";import"./VrxIcon-65b95bd5.js";import"./styles-89581b18.js";import"./VrxInput-c72c2270.js";/* empty css                                                                  *//* empty css                                                                *//* empty css                                                                  */import"./_plugin-vue_export-helper-c27b6911.js";import"./_commonjsHelpers-725317a4.js";const D={title:"VrxDatePicker",component:s,tags:["autodocs"],argTypes:{type:{description:"type of the date picker",control:{type:"select"},options:["date","datetime"],table:{category:"props",type:{summary:"date | datetime-local | time"},defaultValue:{summary:"date"}}},validRange:{description:"valid range of the date picker",control:{type:"none"},table:{category:"props",type:{summary:"[Date | undefined, Date | undefined]"},defaultValue:{summary:"undefined"}}},dateFormat:{description:"date format of the date picker",control:{type:"text"},table:{category:"props",type:{summary:"DateFormat"},defaultValue:{summary:"DD-MM-YYYY"}}},monthsOnly:{description:"show only months",control:{type:"boolean"},table:{category:"props",type:{summary:"boolean"},defaultValue:{summary:"false"}}},placeholder:{description:"placeholder of the date picker",control:{type:"text"},table:{category:"props",type:{summary:"string"},defaultValue:{summary:"Select a date"}}},invalid:{description:"invalid state of the date picker",control:{type:"boolean"},table:{category:"props",type:{summary:"boolean"},defaultValue:{summary:"false"}}}}},c={render:l=>({components:{VrxDatePicker:s,VrxButton:n},setup(){return{args:l}},methods:{setDate(e){this.$refs.myRef.setDate(e)},setValidRange(e){this.$refs.myRef.setValidRange(e)},getDate(){alert(this.$refs.myRef.getDate())},setMonth(e,i){this.$refs.myRef.setMonth(e,i)},openPicker(){this.$refs.myRef.openPicker()},closePicker(){this.$refs.myRef.closePicker()}},template:`
          <div style="height: 400px" class="flex flex-col">
          <div style="height: 90%">
            <VrxDatePicker :type="args.type" v-bind="args" ref="myRef" />
          </div>
          <div class="bottom-0 flex flex-row gap-2">
            <VrxButton color="default" size="sm" @click="setDate(new Date())">Set Date</VrxButton>
            <VrxButton color="default" size="sm" @click="getDate()">Get Date</VrxButton>
            <VrxButton color="default" size="sm"
                       @click="setValidRange([new Date(), (new Date(new Date().getTime() + (1000 * 60 * 60 * 24 * 10)))])">
              Set Valid Range
            </VrxButton>
            <VrxButton color="default" size="sm" @click="setMonth(1, 2022)">Set Month</VrxButton>
            <VrxButton color="default" size="sm" @click="openPicker">Open</VrxButton>
            <VrxButton color="default" size="sm" @click="closePicker">Close</VrxButton>
          </div>
          </div>`}),args:{type:"date",placeholder:"Select a date",dateFormat:void 0,monthsOnly:!1,invalid:!1}},t={...c};var a,o,r;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  ...Template
}`,...(r=(o=t.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};const v=["Primary"];export{t as Primary,v as __namedExportsOrder,D as default};
//# sourceMappingURL=VrxDatePicker.stories-9f8d0aee.js.map
