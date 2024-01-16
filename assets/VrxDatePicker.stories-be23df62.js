import{V as s}from"./VrxDatePicker-e8bc27cf.js";import{_ as p}from"./VrxButton.vue_vue_type_script_setup_true_lang-12fe1b33.js";import"./vue.esm-bundler-d08935b9.js";import"./VrxIcon-37b9b772.js";import"./styles-1a51a98b.js";import"./VrxInput-b641997e.js";/* empty css                                                                  *//* empty css                                                                  *//* empty css                                                                     *//* empty css                                                                *//* empty css                                                                  */import"./_plugin-vue_export-helper-c27b6911.js";import"./appendToBody-70f0f50f.js";import"./_commonjsHelpers-725317a4.js";const B={title:"VrxDatePicker",component:s,tags:["autodocs"],argTypes:{type:{description:"type of the date picker",control:{type:"select"},options:["date","datetime"],table:{category:"props",type:{summary:"date | datetime-local | time"},defaultValue:{summary:"date"}}},label:{description:"label of the date picker",control:{type:"text"},table:{category:"props",type:{summary:"string"},defaultValue:{summary:""}}},validRange:{description:"valid range of the date picker",control:{type:"none"},table:{category:"props",type:{summary:"[Date | undefined, Date | undefined]"},defaultValue:{summary:"undefined"}}},dateFormat:{description:"date format of the date picker",control:{type:"text"},table:{category:"props",type:{summary:"DateFormat"},defaultValue:{summary:"DD-MM-YYYY"}}},monthsOnly:{description:"show only months",control:{type:"boolean"},table:{category:"props",type:{summary:"boolean"},defaultValue:{summary:"false"}}},placeholder:{description:"placeholder of the date picker",control:{type:"text"},table:{category:"props",type:{summary:"string"},defaultValue:{summary:"Select a date"}}},invalid:{description:"invalid state of the date picker",control:{type:"boolean"},table:{category:"props",type:{summary:"boolean"},defaultValue:{summary:"false"}}},helperText:{description:"helper text of the date picker",control:{type:"text"},table:{category:"props",type:{summary:"string"},defaultValue:{summary:""}}}}},m={render:l=>({components:{VrxDatePicker:s,VrxButton:p},setup(){return{args:l}},methods:{setDate(e){this.$refs.myRef.setDate(e)},setValidRange(e){this.$refs.myRef.setValidRange(e)},getDate(){alert(this.$refs.myRef.getDate())},setMonth(e,i){this.$refs.myRef.setMonth(e,i)},openPicker(){this.$refs.myRef.openPicker()},closePicker(){this.$refs.myRef.closePicker()}},template:`
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
          </div>`}),args:{type:"date",placeholder:"Select a date",dateFormat:void 0,monthsOnly:!1,invalid:!1}},t={...m};var a,r,o;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  ...Template
}`,...(o=(r=t.parameters)==null?void 0:r.docs)==null?void 0:o.source}}};const R=["Primary"];export{t as Primary,R as __namedExportsOrder,B as default};
//# sourceMappingURL=VrxDatePicker.stories-be23df62.js.map
