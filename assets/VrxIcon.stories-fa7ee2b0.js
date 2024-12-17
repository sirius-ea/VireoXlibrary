import{V as a,i as u}from"./VrxIcon-d7483d7b.js";import"./vue.esm-bundler-b6bff0ca.js";import{V as x}from"./VrxInput-f4c410c9.js";import"./styles-cba61512.js";/* empty css                                                                  */import"./VrxGrid.vue_vue_type_style_index_0_scoped_3a3a4c45_lang-dc8a5127.js";/* empty css                                                                     *//* empty css                                                                    *//* empty css                                                                  *//* empty css                                                                */import"./_plugin-vue_export-helper-c27b6911.js";/* empty css                                                                 */import"./_commonjsHelpers-de833af9.js";const i=Object.keys(u),j={title:"VrxIcon",component:a,tags:["autodocs"],argTypes:{icon:{description:"Icon type or SVG path",control:{type:"select"},options:i,defaultValue:{summary:void 0},table:{category:"props",type:{summary:"IconLibraryType | string"}}},size:{description:"Size of the icon (from 1 to 10)",control:{type:"text"},table:{category:"props",type:{summary:"string"}},defaultValue:{summary:"5"}},color:{control:{type:"color"},table:{category:"props",type:{summary:"string"}},description:"Color"},tooltip:{description:"Tooltip of the icon",control:{type:"text"},table:{category:"props",type:{summary:"string"}}}}},b={render:c=>({components:{VrxIcon:a},setup(){return{args:c}},template:`
          <VrxIcon v-bind="args"/>
        `}),args:{icon:"mail",size:"5"}},n={...b},r={render:c=>({components:{VrxIcon:a,VrxInput:x},setup(){return{args:c,iconLibrarySet:i.sort((o,e)=>o.localeCompare(e))}},data:()=>({search:""}),computed:{iconLibrary(){return i.filter(o=>o.toLowerCase().includes(this.search.toLowerCase()))}},methods:{copyCode(o){const e=document.createElement("textarea");e.value='<VrxIcon :icon="'+o+'" size="5"/>',document.body.appendChild(e),e.select(),document.execCommand("copy"),document.body.removeChild(e);const t=document.createElement("div");t.classList.add("fixed","bottom-4","left-4","bg-primary-500","text-white","p-2","rounded-md","shadow-md","z-50"),t.innerText="Copied to clipboard",document.body.appendChild(t),setTimeout(()=>{document.body.removeChild(t)},2e3)}},template:`
            <div class="flex flex-wrap gap-4 justify-center">
                <VrxInput v-model="search" placeholder="Search icon" class="w-full mb-4" type="text" icon="search" />
                <div 
                    v-for="icon in iconLibrary" 
                    :key="icon" 
                    class="flex flex-col items-center w-20 gap-2 border p-2 rounded-2xl justify-center hover:bg-content-light hover:text-white cursor-pointer active:bg-primary-500" 
                    @click="() => copyCode(icon)"
                >
                    <VrxIcon :key="icon" :icon="icon" :size="args.size" :tooltip="icon" />
                    <span class="text-xs text-center text-gray-400">{{ icon }}</span>
                </div>
            </div>
        `})};var s,p,d;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
  ...Template
}`,...(d=(p=n.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var l,m,y;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      VrxIcon,
      VrxInput
    },
    setup() {
      return {
        args,
        iconLibrarySet: iconLibrarySet.sort((a, b) => a.localeCompare(b))
      };
    },
    data: () => ({
      search: ''
    }),
    computed: {
      iconLibrary(): string[] {
        return iconLibrarySet.filter(icon => icon.toLowerCase().includes(this.search.toLowerCase()));
      }
    },
    methods: {
      copyCode(icon: string) {
        // add to clipboard the icon code

        const el = document.createElement('textarea');
        el.value = '<VrxIcon :icon="' + icon + '" size=\\"5\\"/>';
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);

        // show toast
        const toast = document.createElement('div');
        toast.classList.add('fixed', 'bottom-4', 'left-4', 'bg-primary-500', 'text-white', 'p-2', 'rounded-md', 'shadow-md', 'z-50');
        toast.innerText = 'Copied to clipboard';
        document.body.appendChild(toast);
        setTimeout(() => {
          document.body.removeChild(toast);
        }, 2000);
      }
    },
    template: \`
            <div class="flex flex-wrap gap-4 justify-center">
                <VrxInput v-model="search" placeholder="Search icon" class="w-full mb-4" type="text" icon="search" />
                <div 
                    v-for="icon in iconLibrary" 
                    :key="icon" 
                    class="flex flex-col items-center w-20 gap-2 border p-2 rounded-2xl justify-center hover:bg-content-light hover:text-white cursor-pointer active:bg-primary-500" 
                    @click="() => copyCode(icon)"
                >
                    <VrxIcon :key="icon" :icon="icon" :size="args.size" :tooltip="icon" />
                    <span class="text-xs text-center text-gray-400">{{ icon }}</span>
                </div>
            </div>
        \`
  })
}`,...(y=(m=r.parameters)==null?void 0:m.docs)==null?void 0:y.source}}};const E=["Primary","AllIcons"];export{r as AllIcons,n as Primary,E as __namedExportsOrder,j as default};
