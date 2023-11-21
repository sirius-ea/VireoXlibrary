var _e=Object.defineProperty;var ye=(u,e,t)=>e in u?_e(u,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):u[e]=t;var n=(u,e,t)=>(ye(u,typeof e!="symbol"?e+"":e,t),t);import{d as D,k as j,J as z,a as I,o as d,c as p,e as k,u as s,h as _,i as w,t as K,n as E,f as U,F as $,g as L,w as T,K as Ce,L as ve,C as we,M as ke,E as De,G as Re,y as H,N as W,b as q}from"./vue.esm-bundler-84f6f0ac.js";import{V as Ae}from"./VrxSelect-17fcdbaa.js";import{V as Ve}from"./VrxInput-6f44fd7c.js";import{V as Q}from"./VrxIcon-2a6c4c2e.js";/* empty css                                                                */import{_ as R}from"./_plugin-vue_export-helper-c27b6911.js";import{c as v}from"./styles-70794e3d.js";import{_ as Te}from"./VrxButton.vue_vue_type_script_setup_true_lang-4728b073.js";/* empty css                                                                  *//* empty css                                                                  *//* empty css                                                                  */import"./_commonjsHelpers-725317a4.js";class Be{constructor(e){n(this,"_id");n(this,"_text");n(this,"_type");n(this,"_align");n(this,"_sortable");n(this,"_sortFunction");n(this,"_sortDirection");n(this,"_width");n(this,"_filterType");n(this,"_filterPlaceholder");n(this,"_customFilter");n(this,"_headerConfig");n(this,"_icon");n(this,"_colspan");this._id=e.id,this._text=e.text,this._type=e.type,this._align=e.align,this._sortable=e.sortable,this._sortFunction=e.sortFunction,this._sortDirection=e.sortDirection,this._width=e.width,this._filterType=e.filterType,this._filterPlaceholder=e.filterPlaceholder,this._customFilter=e.customFilter,this._headerConfig=e,this._icon=e.icon,this._colspan=e.colspan}get id(){return this._id}get text(){return this._text}get filterType(){return this._filterType??null}get filterPlaceholder(){return this._filterPlaceholder??null}get sortable(){return this._sortable??!1}get sortDirection(){return this._sortDirection??null}get icon(){return this._icon??null}get colspan(){return this._colspan??void 0}get textAlignmentClass(){switch(this._align){case"left":return"text-left";case"center":return"text-center";case"right":return"text-right";default:return null}}get width(){return this._width}sortClicked(e,t){this._sortable&&(this._sortDirection=this._sortDirection==="asc"?"desc":"asc",this._headerConfig.sortDirection=this._sortDirection,this._resetSortDirection(e,[this._id]),this._sortFunction?this._useCustomSorting(t):this._useDefaultSorting(t))}_useDefaultSorting(e){e.sort((t,l)=>t.data[this._id]<l.data[this._id]?this._sortDirection==="asc"?1:-1:t.data[this._id]>l.data[this._id]?this._sortDirection==="asc"?-1:1:0)}_useCustomSorting(e){this._sortFunction&&e&&e.sort(this._sortFunction)}_resetSortDirection(e,t=[]){e.header.forEach(l=>{t.includes(l.id)||(l.sortDirection=void 0)})}getSelectableItems(e){const t=[];return e?(e.forEach(l=>{!t.find(o=>o.value===l.data[this._id])&&l.data[this._id]!==null&&l.data[this._id]!==void 0&&(typeof l.data[this._id]=="boolean"?t.push({value:l.data[this._id],label:l.data[this._id]?"true":"false"}):t.push({value:l.data[this._id],label:l.data[this._id]}))}),t.sort((l,o)=>l.label.localeCompare(o.label))):t}filterByValue(e,t){const l=e.find(o=>o.cellId===this._id);l&&t===""&&e.splice(e.indexOf(l),1),l?l.value=t:e.push({cellId:this._id,value:t})}}const Me=["colspan"],Se={class:"flex flex-row gap-1.5 items-center"},Pe={class:"vrx-grid-label"},Fe=D({__name:"VrxGridHeaderCell",props:{gridConfig:{},headerConfig:{},gridData:{}},setup(u){const e=u;j(r=>({d2d4f29a:s(i).width+"px"}));const t=z("filters");let l=I(""),o=I([]);const i=new Be(e.headerConfig);return(r,h)=>(d(),p("th",{scope:"col",class:E(["px-3 py-3 vrx-th header-th",s(i).textAlignmentClass]),colspan:s(i).colspan},[k("div",{class:E(["vrx-header-cell",s(i).filterType?"mb-2":null]),onClick:h[0]||(h[0]=g=>s(i).sortClicked(e.gridConfig,e.gridData))},[k("span",Se,[s(i).icon?(d(),_(Q,{key:0,icon:s(i).icon,size:"4"},null,8,["icon"])):w("",!0),k("span",Pe,K(s(i).text),1)]),s(i).sortable?(d(),_(Q,{key:0,icon:r.headerConfig.sortDirection==="asc"?"chevron-up":r.headerConfig.sortDirection==="desc"?"chevron-down":"empty",size:"3"},null,8,["icon"])):w("",!0)],2),s(i).filterType==="text"?(d(),_(Ve,{key:0,"model-value":s(l),height:30,class:"header-input",placeholder:s(i).filterPlaceholder??"...",type:"text",onInput:h[1]||(h[1]=g=>s(i).filterByValue(s(t),g.target.value))},null,8,["model-value","placeholder"])):w("",!0),s(i).filterType==="select"?(d(),_(Ae,{key:1,"list-data":s(i).getSelectableItems(r.gridData),"model-value":s(o),placeholder:s(i).filterPlaceholder??"...",class:"header-input",height:30,"on-select":g=>s(i).filterByValue(s(t),g.value),"on-clear":()=>s(i).filterByValue(s(t),""),searchable:!0},null,8,["list-data","model-value","placeholder","on-select","on-clear"])):w("",!0)],10,Me))}}),Ge=R(Fe,[["__scopeId","data-v-6c128075"]]),Ne={"data-testid":"vrx-grid-header",class:"text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-white vrx-table"},Ie=D({__name:"VrxGridHeader",props:{gridConfig:{},gridData:{}},setup(u){const e=u,t=U(()=>{let l=[],o=0;for(;o<e.gridConfig.header.length;){const i=e.gridConfig.header[o],r=i.colspan||1;l.push(i),o+=r}return l});return(l,o)=>(d(),p("thead",Ne,[k("tr",null,[(d(!0),p($,null,L(t.value,i=>(d(),_(Ge,{"grid-config":l.gridConfig,"header-config":i,"grid-data":l.gridData},null,8,["grid-config","header-config","grid-data"]))),256))])]))}}),Ee=R(Ie,[["__scopeId","data-v-b56fa298"]]);class $e{constructor(e,t,l,o,i,r){n(this,"_id");n(this,"_textColor");n(this,"_backgroundColor");n(this,"_data");n(this,"_filters");n(this,"_selectedRows");n(this,"_selectable");n(this,"_multiselect");n(this,"_headerConfig");n(this,"_componentProps");this._id=e.id,this._textColor=e.textColor,this._backgroundColor=e.backgroundColor,this._data=e.data,this._filters=t,this._selectedRows=l,this._selectable=o,this._multiselect=i,this._headerConfig=r,this._componentProps=e.componentProps}getCellContent(e){return this._data[e]}get textColor(){return this._textColor}get componentProps(){return this._componentProps}get backgroundColor(){return this._backgroundColor}get id(){return this._id}get data(){return this._data}get selectable(){return this._selectable}rowClicked(){const e=this._selectedRows.find(t=>t.id===this._id);if(!this._multiselect){if(e){const t=this._selectedRows.indexOf(e);this._selectedRows.splice(t,1);return}this._selectedRows.splice(0,this._selectedRows.length),this._selectedRows.push(this);return}if(!e)this._selectedRows.push(this);else{const t=this._selectedRows.indexOf(e);this._selectedRows.splice(t,1)}}isFiltered(){let e=!1;return this._filters.forEach(t=>{var o;const l=(o=this._headerConfig.find(i=>i.id===t.cellId))==null?void 0:o.customFilter;e||(e=l?l(this,t):this._defaultFilter(t))}),e}isSelected(){return!!this._selectedRows.find(t=>t.id===this._id)}_defaultFilter(e){return typeof e.value=="boolean"?this._data[e.cellId]!==e.value:!this._data[e.cellId].toString().toLowerCase().includes(e.value.toLowerCase())}}const Le={left:"text-left",right:"text-right",center:"text-center"},Oe={key:0,class:"vrx-grid-cell-content"},He=["value"],ze={key:2},Ke={key:1},Ue=["disabled"],je=["innerHTML"],Je=D({__name:"VrxGridCell",props:{row:{},cell:{}},emits:["cellClicked","cellDoubleClicked"],setup(u,{emit:e}){const t=u;j(a=>({"2af64dac":a.cell.width+"px","51acc3ce":s(v).blue[500]}));const l=I(!1),o=I(),i=()=>{let a=t.cell.align?Le[t.cell.align]:"";return a+=t.cell.editable&&l.value?" editing":"",a+=t.cell.type==="static"?" py-2":" py-4",t.cell.type==="boolean"&&(a+=" flex justify-center"),a},r=()=>{e("cellClicked",{cellId:t.cell.id,rowId:t.row.id,value:t.cell.type==="static"?t.cell.staticHTML:t.row.data[t.cell.id]})},h=()=>{e("cellDoubleClicked",{cellId:t.cell.id,rowId:t.row.id,value:t.cell.type==="static"?t.cell.staticHTML:t.row.data[t.cell.id]}),t.cell.type!=="boolean"&&(l.value=!0),setTimeout(()=>{t.cell.editable&&t.cell.editType==="text"&&o.value.focus()},100)},g={mounted(a,b){a.clickOutsideEvent=function(f){a===f.target||a.contains(f.target)||b.value(f,a)},document.body.addEventListener("click",a.clickOutsideEvent)},unmounted(a){document.body.removeEventListener("click",a.clickOutsideEvent)}},A=()=>{l.value=!1},V=a=>{a.key==="Enter"&&(a.preventDefault(),l.value=!1)};return(a,b)=>T((d(),p("td",{class:E(["px-3 font-medium whitespace-nowrap vrx-cell",i()]),onDblclick:h,onClick:r,onKeydown:b[4]||(b[4]=f=>V(f))},[!a.cell.type||a.cell.type==="text"?(d(),p("span",Oe,[a.cell.editable&&l.value&&a.cell.editType==="text"?T((d(),p("input",{key:0,ref_key:"input",ref:o,"onUpdate:modelValue":b[0]||(b[0]=f=>a.row.data[a.cell.id]=f),class:"edit-input"},null,512)),[[Ce,a.row.data[a.cell.id]]]):a.cell.editable&&a.cell.editType==="select"?T((d(),p("select",{key:1,"onUpdate:modelValue":b[1]||(b[1]=f=>a.row.data[a.cell.id]=f),class:"edit-input",onFocus:b[2]||(b[2]=f=>l.value=!0)},[(d(!0),p($,null,L(t.cell.editOptions,f=>(d(),p("option",{value:f.value},K(f.text),9,He))),256))],544)),[[ve,a.row.data[a.cell.id]]]):(d(),p("span",ze,K(a.row.getCellContent(a.cell.id)),1))])):a.cell.type==="boolean"?(d(),p("span",Ke,[T(k("input",{disabled:!a.cell.editable,type:"checkbox","onUpdate:modelValue":b[3]||(b[3]=f=>a.row.data[a.cell.id]=f),class:"edit-input"},null,8,Ue),[[we,a.row.data[a.cell.id]]])])):a.cell.type==="component"?(d(),_(Re(a.row.data[a.cell.id]),ke(De({key:2},a.row.componentProps)),null,16)):a.cell.type==="static"?(d(),p("div",{key:3,innerHTML:a.cell.staticHTML},null,8,je)):w("",!0)],34)),[[g,A]])}}),We=R(Je,[["__scopeId","data-v-b19cdd2f"]]),qe=["data-testid"],Qe=D({__name:"VrxGridRow",props:{row:{},headerConfig:{},selectable:{type:Boolean},multiselect:{type:Boolean}},emits:["rowClicked","cellClicked","cellDoubleClicked"],setup(u,{emit:e}){const t=u;j(a=>({"279c9a7e":s(v).gray[100],"5a462f3a":s(v).blue[500],"5b74a50f":s(g).textColor,d16db224:s(g).backgroundColor,"279d0edd":s(v).gray[200],"279f54b8":s(v).gray[700],"279ee059":s(v).gray[600]}));const l=z("filters"),o=z("selectedRows"),i=()=>{g.rowClicked(),e("rowClicked",g)},r=a=>{e("cellClicked",a)},h=a=>{e("cellDoubleClicked",a)},g=new $e(t.row,l,o,t.selectable??!1,t.multiselect??!1,t.headerConfig),A=U(()=>g.isFiltered()),V=U(()=>g.selectable?g.isSelected()?"selected row-hover dark:selected dark:row-hover dark:bg-gray-100":"not-selected dark:row-hover row-hover dark:bg-gray-100":"not-selected");return(a,b)=>A.value?w("",!0):(d(),p("tr",{key:0,"data-testid":"vrx-grid-row-"+s(g).id,class:E(["bg-white border-b dark:bg-gray-800 dark:border-gray-700 vrx-row",V.value]),onClick:i},[(d(!0),p($,null,L(a.headerConfig,f=>(d(),_(We,{row:s(g),cell:f,onCellClicked:r,onCellDoubleClicked:h},null,8,["row","cell"]))),256))],10,qe))}}),Xe=R(Qe,[["__scopeId","data-v-c3f5b6d3"]]),Ye={style:{"overflow-y":"scroll"}},Ze=D({__name:"VrxGridBody",props:{modelValue:{},gridData:{}},emits:["rowClicked","cellClicked","cellDoubleClicked"],setup(u,{emit:e}){const t=i=>{e("rowClicked",i)},l=i=>{e("cellClicked",i)},o=i=>{e("cellDoubleClicked",i)};return(i,r)=>(d(),p("tbody",Ye,[(d(!0),p($,null,L(i.gridData,h=>(d(),_(Xe,{row:h,"header-config":i.modelValue.header,key:h.id,selectable:i.modelValue.selectable,multiselect:i.modelValue.multiselect,onRowClicked:g=>t(h),onCellClicked:l,onCellDoubleClicked:o},null,8,["row","header-config","selectable","multiselect","onRowClicked"]))),128))]))}}),et=R(Ze,[["__scopeId","data-v-2e007b02"]]);class tt{constructor(e,t){n(this,"_configuration");n(this,"_filters");n(this,"_selectedRows");n(this,"_data");this._configuration=e,this._filters=H([]),this._selectedRows=H([]),this._data=H(t)}get configuration(){return this._configuration}get filters(){return this._filters}get data(){return this._data}get selectedRows(){return this._selectedRows}set filters(e){this.deselectAll(),this._filters=e}set selectedRows(e){this._selectedRows=e}selectAll(){if(this._configuration.multiselect===!1){console.warn(`Multiselection in grid "${this._configuration.id}" is disabled. No rows will be selected`);return}this.deselectAll(),this._data.forEach(e=>{this._selectedRows.push(e)})}getRowById(e){return this._data.find(t=>t.id===e)}deselectAll(){this._selectedRows.splice(0,this._selectedRows.length)}resetFilters(){this._filters.splice(0,this._filters.length)}clearData(){this.deselectAll(),this.resetFilters(),this._data.splice(0,this._data.length)}updateData(e){e.forEach(t=>{const l=this._data.find(o=>o.id===t.id);if(l){const o=this._data.indexOf(l);this._data.splice(o,1),this._data.splice(o,0,t)}else this._data.push(t)})}setData(e){this.clearData(),this._data.splice(0,this._data.length),e.forEach(t=>{this._data.push(t)})}selectRange(e,t){let l=e,o=t;e>t&&(l=t,o=e),this._filters.splice(0,this._filters.length),this.deselectAll();for(let i=l;i<=o;i++)this._selectedRows.push(this._data[i])}}const lt={class:"w-full text-sm text-left text-gray-500 dark:text-gray-400","aria-describedby":"vrx-table-grid"},at=D({__name:"VrxGrid",props:{gridConfiguration:{},gridData:{}},emits:["rowClicked","cellClicked","cellDoubleClicked"],setup(u,{expose:e,emit:t}){const l=u,o=c=>{(c.ctrlKey||c.metaKey)&&c.key==="a"&&(c.preventDefault(),r.selectAll())},i=c=>{if(c.shiftKey&&r.configuration.multiselect){c.preventDefault();const m=r.selectedRows.length;if(m>=2){let x=r.data.find(O=>O.id===r.selectedRows[0].id),J=r.data.find(O=>O.id===r.selectedRows[m-1].id);x&&J&&r.selectRange(r.data.indexOf(x),r.data.indexOf(J))}}},r=new tt(l.gridConfiguration,JSON.parse(JSON.stringify(l.gridData)));W("filters",r.filters),W("selectedRows",r.selectedRows);const h=c=>{t("rowClicked",c)},g=c=>{t("cellClicked",c)},A=c=>{t("cellDoubleClicked",c)};return e({getSelectedRows:()=>r.selectedRows,getFilters:()=>r.filters,setData:c=>{r.setData(c)},resetFilters:()=>{r.resetFilters()},deselectAll:()=>{r.deselectAll()},selectAll:()=>{r.selectAll()},clearData:()=>{r.clearData()},updateData:c=>{r.updateData(c)},selectRange:(c,m)=>{r.selectRange(c,m)},getData:()=>r.data,getRowById:c=>r.getRowById(c)}),(c,m)=>(d(),p("div",{"data-testid":"vrx-grid",onKeydown:m[2]||(m[2]=x=>o(x)),onClick:m[3]||(m[3]=x=>i(x)),class:"table-outline relative overflow-x-auto h-full shadow-md w-full bg-white dark:bg-gray-800",tabindex:"1"},[k("table",lt,[q(Ee,{"grid-config":s(r).configuration,"onUpdate:gridConfig":m[0]||(m[0]=x=>s(r).configuration=x),"grid-data":s(r).data},null,8,["grid-config","grid-data"]),q(et,{modelValue:s(r).configuration,"onUpdate:modelValue":m[1]||(m[1]=x=>s(r).configuration=x),"grid-data":s(r).data,onRowClicked:h,onCellClicked:g,onCellDoubleClicked:A},null,8,["modelValue","grid-data"])])],32))}}),xe=R(at,[["__scopeId","data-v-1ba5fa24"]]),kt={title:"VrxGrid",component:xe,tags:["autodocs"],argTypes:{}},y=[{id:"1",data:{active:!0,name:"Mario Rossi",serialNumber:1,color:"Red",model:"Fiat",plate:"AA123AA"}},{id:"2",data:{active:!0,name:"Pino Verdi",serialNumber:2,color:"Black",model:"Audi",plate:"AA123BB"}},{id:"3",data:{active:!1,name:"Ciro Bianchi",serialNumber:3,color:"Green",model:"BMW",plate:"AA123CC"}},{id:"4",data:{active:!1,name:"Luisa Neri",serialNumber:4,color:"Gray",model:"Renault",plate:"AA123DD"}},{id:"5",data:{active:!1,name:"Giovanni Gialli",serialNumber:5,color:"Gray",model:"Toyota",plate:"BC123EE"}}],C={render:u=>({components:{VrxGrid:xe,VrxButton:Te},setup(){return{args:u}},methods:{logItem(){alert(this.$refs.myRef.getSelectedRows().map(e=>e.data.name).join(", "))},setData(e){this.$refs.myRef.setData(e)},selectAll(){this.$refs.myRef.selectAll()},deselectAll(){this.$refs.myRef.deselectAll()},updateData(e){this.$refs.myRef.updateData(e)},clearData(){this.$refs.myRef.clearData()}},template:`
          <VrxGrid v-bind="args" ref="myRef" :grid-configuration="args.gridConfiguration" :grid-data="args.gridData" style="height: 370px"/>

          <div style="padding-top: 30px; display: flex; flex-direction: row; gap: 5px">
              <VrxButton color="default" size="sm" @click="logItem" >Log selected items</VrxButton>
              <VrxButton color="default" size="sm" @click="setData(
                  [{ data: {name: 'Maria Rosa',serialNumber: 6,color: 'Black',model: 'Audi',plate: 'AA123BC'},id: '6'}])">Set Data</VrxButton>
              <VrxButton color="default" size="sm" @click="updateData(
                  [{id: '2', data: {name: 'Ilary Blasi',serialNumber: 10,color: 'Blue',model: 'BMW',plate: 'AA123BC'}}])">Update Data</VrxButton>
              <VrxButton color="default" size="sm" @click="clearData">Clear Data</VrxButton>
              <VrxButton color="default" size="sm" @click="selectAll">Select All</VrxButton>
              <VrxButton color="default" size="sm" @click="deselectAll">Deselect All</VrxButton>
          </div>
        `}),args:{}},B={...C,args:{gridConfiguration:{id:"test",selectable:!1,multiselect:!1,header:[{text:"Active",id:"active",align:"center",type:"boolean",editable:!1,sortable:!0,width:100},{text:"Name",id:"name",align:"left",sortable:!0,type:"text"},{text:"Color",id:"color",align:"left",sortable:!0},{text:"Model",id:"model",align:"left",sortable:!0},{text:"Plate",id:"plate",align:"left",sortable:!0}]},gridData:y}},M={...C,args:{gridConfiguration:{id:"test",selectable:!1,multiselect:!1,header:[{text:"Active",id:"active",align:"center",type:"boolean",editable:!1,sortable:!0,width:150,filterType:"select"},{text:"Name",id:"name",align:"left",sortable:!0,type:"text",filterType:"text",filterPlaceholder:"Search by name"},{text:"Color",id:"color",align:"left",sortable:!0,filterType:"select",width:150},{text:"Model",id:"model",align:"left",sortable:!0,filterType:"select",width:150},{text:"Plate",id:"plate",align:"left",sortable:!0,filterType:"text"}]},gridData:y}},S={...C,args:{gridConfiguration:{id:"test",selectable:!0,multiselect:!1,header:[{text:"Active",id:"active",align:"center",type:"boolean",editable:!1,sortable:!0,width:100},{text:"Name",id:"name",align:"left",sortable:!0,type:"text"},{text:"Color",id:"color",align:"left",sortable:!0},{text:"Model",id:"model",align:"left",sortable:!0},{text:"Plate",id:"plate",align:"left",sortable:!0}]},gridData:y}},P={...C,args:{gridConfiguration:{id:"test",selectable:!0,multiselect:!0,header:[{text:"Active",id:"active",align:"center",type:"boolean",editable:!1,sortable:!0,width:100},{text:"Name",id:"name",align:"left",sortable:!0,type:"text"},{text:"Color",id:"color",align:"left",sortable:!0},{text:"Model",id:"model",align:"left",sortable:!0},{text:"Plate",id:"plate",align:"left",sortable:!0}]},gridData:y}},F={...C,args:{gridConfiguration:{id:"test",selectable:!1,multiselect:!1,header:[{text:"Active",id:"active",align:"center",type:"boolean",editable:!0,sortable:!0,width:100},{text:"Name",id:"name",align:"left",sortable:!0,type:"text",editable:!0,editType:"text",width:200},{text:"Color",id:"color",align:"left",sortable:!0,editable:!0,editType:"select",editOptions:[{text:"Red",value:"Red"},{text:"Black",value:"Black"},{text:"Green",value:"Green"},{text:"Gray",value:"Gray"}]},{text:"Model",id:"model",align:"left",sortable:!0,editable:!0,editType:"text",width:200},{text:"Plate",id:"plate",align:"left",sortable:!0}]},gridData:y}},G={...C,args:{gridConfiguration:{id:"test",selectable:!1,multiselect:!1,header:[{text:"Active",id:"active",align:"center",type:"boolean",sortable:!0,width:100},{text:"Name",id:"name",align:"left",sortable:!0,type:"text",width:200},{text:"Color",id:"color",align:"left",sortable:!0},{text:"Model",id:"model",align:"left",sortable:!0,width:200},{text:"Plate",id:"plate",align:"left",sortable:!0},{text:"Actions",id:"actions",align:"center",type:"static",staticHTML:"<button class='border rounded-md p-1 hover:text-blue-700 hover:border-blue-700 dark:hover:text-blue-500 dark:hover:border-blue-500 w-24'>✍🏻 Edit</button>"}]},gridData:y}},N={...C,args:{gridConfiguration:{id:"test",selectable:!1,multiselect:!1,header:[{text:"Active",id:"active",align:"center",type:"boolean",width:100},{text:"Name",id:"name",align:"left",sortable:!0,type:"text",width:200},{text:"Color",id:"color",align:"left",sortable:!0},{text:"Plate",id:"plate",align:"left",sortable:!0},{text:"Actions",id:"actions",align:"center",type:"static",staticHTML:"<button class='border rounded-md p-1 hover:text-blue-700 hover:border-blue-700 dark:hover:text-blue-500 dark:hover:border-blue-500 w-24'>✍🏻 Edit</button>",colspan:2,width:120},{text:"",id:"actions2",align:"center",type:"static",staticHTML:"<button class='border rounded-md p-1 hover:text-blue-700 hover:border-blue-700 dark:hover:text-blue-500 dark:hover:border-blue-500 w-24''>🗑️ Delete</button>",width:120}]},gridData:y}};var X,Y,Z;B.parameters={...B.parameters,docs:{...(X=B.parameters)==null?void 0:X.docs,source:{originalSource:`{
  ...Template,
  args: {
    gridConfiguration: {
      id: "test",
      selectable: false,
      multiselect: false,
      header: [{
        text: "Active",
        id: "active",
        align: "center",
        type: "boolean",
        editable: false,
        sortable: true,
        width: 100
      }, {
        text: "Name",
        id: "name",
        align: "left",
        sortable: true,
        type: "text"
      }, {
        text: "Color",
        id: "color",
        align: "left",
        sortable: true
      }, {
        text: "Model",
        id: "model",
        align: "left",
        sortable: true
      }, {
        text: "Plate",
        id: "plate",
        align: "left",
        sortable: true
      }]
    },
    gridData: gridData
  }
}`,...(Z=(Y=B.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,te,le;M.parameters={...M.parameters,docs:{...(ee=M.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  ...Template,
  args: {
    gridConfiguration: {
      id: "test",
      selectable: false,
      multiselect: false,
      header: [{
        text: "Active",
        id: "active",
        align: "center",
        type: "boolean",
        editable: false,
        sortable: true,
        width: 150,
        filterType: "select"
      }, {
        text: "Name",
        id: "name",
        align: "left",
        sortable: true,
        type: "text",
        filterType: "text",
        filterPlaceholder: "Search by name"
      }, {
        text: "Color",
        id: "color",
        align: "left",
        sortable: true,
        filterType: "select",
        width: 150
      }, {
        text: "Model",
        id: "model",
        align: "left",
        sortable: true,
        filterType: "select",
        width: 150
      }, {
        text: "Plate",
        id: "plate",
        align: "left",
        sortable: true,
        filterType: "text"
      }]
    },
    gridData: gridData
  }
}`,...(le=(te=M.parameters)==null?void 0:te.docs)==null?void 0:le.source}}};var ae,ie,re;S.parameters={...S.parameters,docs:{...(ae=S.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  ...Template,
  args: {
    gridConfiguration: {
      id: "test",
      selectable: true,
      multiselect: false,
      header: [{
        text: "Active",
        id: "active",
        align: "center",
        type: "boolean",
        editable: false,
        sortable: true,
        width: 100
      }, {
        text: "Name",
        id: "name",
        align: "left",
        sortable: true,
        type: "text"
      }, {
        text: "Color",
        id: "color",
        align: "left",
        sortable: true
      }, {
        text: "Model",
        id: "model",
        align: "left",
        sortable: true
      }, {
        text: "Plate",
        id: "plate",
        align: "left",
        sortable: true
      }]
    },
    gridData: gridData
  }
}`,...(re=(ie=S.parameters)==null?void 0:ie.docs)==null?void 0:re.source}}};var se,oe,ne;P.parameters={...P.parameters,docs:{...(se=P.parameters)==null?void 0:se.docs,source:{originalSource:`{
  ...Template,
  args: {
    gridConfiguration: {
      id: "test",
      selectable: true,
      multiselect: true,
      header: [{
        text: "Active",
        id: "active",
        align: "center",
        type: "boolean",
        editable: false,
        sortable: true,
        width: 100
      }, {
        text: "Name",
        id: "name",
        align: "left",
        sortable: true,
        type: "text"
      }, {
        text: "Color",
        id: "color",
        align: "left",
        sortable: true
      }, {
        text: "Model",
        id: "model",
        align: "left",
        sortable: true
      }, {
        text: "Plate",
        id: "plate",
        align: "left",
        sortable: true
      }]
    },
    gridData: gridData
  }
}`,...(ne=(oe=P.parameters)==null?void 0:oe.docs)==null?void 0:ne.source}}};var de,ce,ue;F.parameters={...F.parameters,docs:{...(de=F.parameters)==null?void 0:de.docs,source:{originalSource:`{
  ...Template,
  args: {
    gridConfiguration: {
      id: "test",
      selectable: false,
      multiselect: false,
      header: [{
        text: "Active",
        id: "active",
        align: "center",
        type: "boolean",
        editable: true,
        sortable: true,
        width: 100
      }, {
        text: "Name",
        id: "name",
        align: "left",
        sortable: true,
        type: "text",
        editable: true,
        editType: "text",
        width: 200
      }, {
        text: "Color",
        id: "color",
        align: "left",
        sortable: true,
        editable: true,
        editType: "select",
        editOptions: [{
          text: "Red",
          value: "Red"
        }, {
          text: "Black",
          value: "Black"
        }, {
          text: "Green",
          value: "Green"
        }, {
          text: "Gray",
          value: "Gray"
        }]
      }, {
        text: "Model",
        id: "model",
        align: "left",
        sortable: true,
        editable: true,
        editType: "text",
        width: 200
      }, {
        text: "Plate",
        id: "plate",
        align: "left",
        sortable: true
      }]
    },
    gridData: gridData
  }
}`,...(ue=(ce=F.parameters)==null?void 0:ce.docs)==null?void 0:ue.source}}};var ge,fe,pe;G.parameters={...G.parameters,docs:{...(ge=G.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  ...Template,
  args: {
    gridConfiguration: {
      id: "test",
      selectable: false,
      multiselect: false,
      header: [{
        text: "Active",
        id: "active",
        align: "center",
        type: "boolean",
        sortable: true,
        width: 100
      }, {
        text: "Name",
        id: "name",
        align: "left",
        sortable: true,
        type: "text",
        width: 200
      }, {
        text: "Color",
        id: "color",
        align: "left",
        sortable: true
      }, {
        text: "Model",
        id: "model",
        align: "left",
        sortable: true,
        width: 200
      }, {
        text: "Plate",
        id: "plate",
        align: "left",
        sortable: true
      }, {
        text: "Actions",
        id: "actions",
        align: "center",
        type: "static",
        staticHTML: "<button class='border rounded-md p-1 hover:text-blue-700 hover:border-blue-700 dark:hover:text-blue-500 dark:hover:border-blue-500 w-24'>✍🏻 Edit</button>"
      }]
    },
    gridData: gridData
  }
}`,...(pe=(fe=G.parameters)==null?void 0:fe.docs)==null?void 0:pe.source}}};var he,be,me;N.parameters={...N.parameters,docs:{...(he=N.parameters)==null?void 0:he.docs,source:{originalSource:`{
  ...Template,
  args: {
    gridConfiguration: {
      id: "test",
      selectable: false,
      multiselect: false,
      header: [{
        text: "Active",
        id: "active",
        align: "center",
        type: "boolean",
        width: 100
      }, {
        text: "Name",
        id: "name",
        align: "left",
        sortable: true,
        type: "text",
        width: 200
      }, {
        text: "Color",
        id: "color",
        align: "left",
        sortable: true
      }, {
        text: "Plate",
        id: "plate",
        align: "left",
        sortable: true
      }, {
        text: "Actions",
        id: "actions",
        align: "center",
        type: "static",
        staticHTML: "<button class='border rounded-md p-1 hover:text-blue-700 hover:border-blue-700 dark:hover:text-blue-500 dark:hover:border-blue-500 w-24'>✍🏻 Edit</button>",
        colspan: 2,
        width: 120
      }, {
        text: '',
        id: "actions2",
        align: "center",
        type: "static",
        staticHTML: "<button class='border rounded-md p-1 hover:text-blue-700 hover:border-blue-700 dark:hover:text-blue-500 dark:hover:border-blue-500 w-24''>🗑️ Delete</button>",
        width: 120
      }]
    },
    gridData: gridData
  }
}`,...(me=(be=N.parameters)==null?void 0:be.docs)==null?void 0:me.source}}};const Dt=["Primary","Filtrable","Selectable","Multiselectable","Editable","Static_Content","Colspan"];export{N as Colspan,F as Editable,M as Filtrable,P as Multiselectable,B as Primary,S as Selectable,G as Static_Content,Dt as __namedExportsOrder,kt as default};
//# sourceMappingURL=VrxGrid.stories-e20e67ff.js.map
