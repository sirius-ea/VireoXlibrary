var De=Object.defineProperty;var Re=(c,t,e)=>t in c?De(c,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):c[t]=e;var n=(c,t,e)=>(Re(c,typeof t!="symbol"?t+"":t,e),e);import{d as D,u as j,J as H,a as V,o as d,c as f,b as k,j as o,l as _,g as v,t as L,n as $,i as K,F as E,f as O,w as T,e as U,D as Ae,K as q,L as Ve,M as Te,N as Pe,C as Be,E as Se,G as Me,m as Ne,y as Q,O as X,P as Fe}from"./vue.esm-bundler-652d3922.js";import{V as Ge,v as Ie}from"./VrxSelect-527abd59.js";import{V as Le}from"./VrxInput-8c48abce.js";import{V as Y}from"./VrxIcon-d470ccec.js";/* empty css                                                                */import{_ as R}from"./_plugin-vue_export-helper-c27b6911.js";import{c as w}from"./styles-61a087f1.js";import{_ as ve}from"./VrxButton.vue_vue_type_script_setup_true_lang-621affae.js";/* empty css                                                                  *//* empty css                                                                  */import{V as $e}from"./VrxDatePicker-ef9a9ca5.js";/* empty css                                                                  */import"./appendToBody-b54bee80.js";import"./v4-4a60fe23.js";import"./_commonjsHelpers-725317a4.js";class Ee{constructor(t){n(this,"_id");n(this,"_text");n(this,"_type");n(this,"_align");n(this,"_sortable");n(this,"_sortFunction");n(this,"_sortDirection");n(this,"_width");n(this,"_filterType");n(this,"_filterPlaceholder");n(this,"_customFilter");n(this,"_headerConfig");n(this,"_icon");n(this,"_colspan");this._id=t.id,this._text=t.text,this._type=t.type,this._align=t.align,this._sortable=t.sortable,this._sortFunction=t.sortFunction,this._sortDirection=t.sortDirection,this._width=t.width,this._filterType=t.filterType,this._filterPlaceholder=t.filterPlaceholder,this._customFilter=t.customFilter,this._headerConfig=t,this._icon=t.icon,this._colspan=t.colspan}get id(){return this._id}get text(){return this._text}get filterType(){return this._filterType??null}get filterPlaceholder(){return this._filterPlaceholder??null}get sortable(){return this._sortable??!1}get sortDirection(){return this._sortDirection??null}get icon(){return this._icon??null}get colspan(){return this._colspan??void 0}get textAlignmentClass(){switch(this._align){case"left":return"text-left";case"center":return"text-center";case"right":return"text-right";default:return null}}get width(){return this._width}sortClicked(t,e){this._sortable&&(this._sortDirection=this._sortDirection==="asc"?"desc":"asc",this._headerConfig.sortDirection=this._sortDirection,this._resetSortDirection(t,[this._id]),this._sortFunction?this._useCustomSorting(e):this._useDefaultSorting(e))}_useDefaultSorting(t){t.sort((e,l)=>e.data[this._id]<l.data[this._id]?this._sortDirection==="asc"?1:-1:e.data[this._id]>l.data[this._id]?this._sortDirection==="asc"?-1:1:0)}_useCustomSorting(t){this._sortFunction&&t&&t.sort(this._sortFunction)}_resetSortDirection(t,e=[]){t.header.forEach(l=>{e.includes(l.id)||(l.sortDirection=void 0)})}getSelectableItems(t){const e=[];return t?(t.forEach(l=>{!e.find(s=>s.value===l.data[this._id])&&l.data[this._id]!==null&&l.data[this._id]!==void 0&&(typeof l.data[this._id]=="boolean"?e.push({value:l.data[this._id],label:l.data[this._id]?"true":"false"}):e.push({value:l.data[this._id],label:l.data[this._id]}))}),e.sort((l,s)=>l.label.localeCompare(s.label))):e}filterByValue(t,e){const l=t.find(s=>s.cellId===this._id);l&&e===""&&t.splice(t.indexOf(l),1),l?l.value=e:t.push({cellId:this._id,value:e})}}const Oe=["colspan"],ze={class:"flex flex-row gap-1.5 items-center"},He={class:"vrx-grid-label"},Ke=D({__name:"VrxGridHeaderCell",props:{gridConfig:{},headerConfig:{},gridData:{}},setup(c){const t=c;j(i=>({d2d4f29a:o(a).width+"px"}));const e=H("filters");let l=V(""),s=V([]);const a=new Ee(t.headerConfig);return(i,h)=>(d(),f("th",{scope:"col",class:$(["px-3 py-3 vrx-th header-th",o(a).textAlignmentClass]),colspan:o(a).colspan},[k("div",{class:$(["vrx-header-cell",o(a).filterType?"mb-2":null]),onClick:h[0]||(h[0]=p=>o(a).sortClicked(t.gridConfig,t.gridData))},[k("span",ze,[o(a).icon?(d(),_(Y,{key:0,icon:o(a).icon,size:"4"},null,8,["icon"])):v("",!0),k("span",He,L(o(a).text),1)]),o(a).sortable?(d(),_(Y,{key:0,icon:i.headerConfig.sortDirection==="asc"?"chevron-up":i.headerConfig.sortDirection==="desc"?"chevron-down":"empty",size:"3"},null,8,["icon"])):v("",!0)],2),o(a).filterType==="text"?(d(),_(Le,{key:0,"model-value":o(l),height:30,class:"header-input",placeholder:o(a).filterPlaceholder??"...",type:"text",onInput:h[1]||(h[1]=p=>o(a).filterByValue(o(e),p.target.value))},null,8,["model-value","placeholder"])):v("",!0),o(a).filterType==="select"?(d(),_(Ge,{key:1,"list-data":o(a).getSelectableItems(i.gridData),"model-value":o(s),placeholder:o(a).filterPlaceholder??"...",class:"header-input",height:30,"on-select":p=>o(a).filterByValue(o(e),p.value),"on-clear":()=>o(a).filterByValue(o(e),""),searchable:!0},null,8,["list-data","model-value","placeholder","on-select","on-clear"])):v("",!0)],10,Oe))}}),Ue=R(Ke,[["__scopeId","data-v-6c128075"]]),je={"data-testid":"vrx-grid-header",class:"text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-white vrx-table"},We=D({__name:"VrxGridHeader",props:{gridConfig:{},gridData:{}},setup(c){const t=c,e=K(()=>{let l=[],s=0;for(;s<t.gridConfig.header.length;){const a=t.gridConfig.header[s],i=a.colspan||1;l.push(a),s+=i}return l});return(l,s)=>(d(),f("thead",je,[k("tr",null,[(d(!0),f(E,null,O(e.value,a=>(d(),_(Ue,{"grid-config":l.gridConfig,"header-config":a,"grid-data":l.gridData},null,8,["grid-config","header-config","grid-data"]))),256))])]))}}),Je=R(We,[["__scopeId","data-v-6bb1093a"]]);class qe{constructor(t,e,l,s,a,i){n(this,"_id");n(this,"_textColor");n(this,"_backgroundColor");n(this,"_data");n(this,"_filters");n(this,"_selectedRows");n(this,"_selectable");n(this,"_multiselect");n(this,"_headerConfig");n(this,"_componentProps");this._id=t.id,this._textColor=t.textColor,this._backgroundColor=t.backgroundColor,this._data=t.data,this._filters=e,this._selectedRows=l,this._selectable=s,this._multiselect=a,this._headerConfig=i,this._componentProps=t.componentProps}getCellContent(t){const e=this._headerConfig.find(l=>l.id.toLowerCase()===t.toLowerCase());return e!=null&&e.template?e==null?void 0:e.template({id:this._id,data:this._data}):this._data[t]}get textColor(){return this._textColor}get componentProps(){return this._componentProps}get backgroundColor(){return this._backgroundColor}get id(){return this._id}get data(){return this._data}get selectable(){return this._selectable}rowClicked(){const t=this._selectedRows.find(e=>e.id===this._id);if(!this._multiselect){if(t){const e=this._selectedRows.indexOf(t);this._selectedRows.splice(e,1);return}this._selectedRows.splice(0,this._selectedRows.length),this._selectedRows.push(this);return}if(!t)this._selectedRows.push(this);else{const e=this._selectedRows.indexOf(t);this._selectedRows.splice(e,1)}}isFiltered(){let t=!1;return this._filters.forEach(e=>{var s;const l=(s=this._headerConfig.find(a=>a.id===e.cellId))==null?void 0:s.customFilter;t||(t=l?l(this,e):this._defaultFilter(e))}),t}isSelected(){return!!this._selectedRows.find(e=>e.id===this._id)}hasTemplate(t){const e=this._headerConfig.find(l=>l.id.toLowerCase()===t.toLowerCase());return!!(e!=null&&e.template)}getProps(t){const e=this._headerConfig.find(l=>l.id.toLowerCase()===t.toLowerCase());if(e!=null&&e.componentProps)return e==null?void 0:e.componentProps({id:this._id,data:this._data});console.warn(`No component props found for cell ${t}, you must provide a componentProps function in the header configuration`)}_defaultFilter(t){return typeof t.value=="boolean"?this._data[t.cellId]!==t.value:!this._data[t.cellId].toString().toLowerCase().includes(t.value.toLowerCase())}}const Qe={left:"text-left",right:"text-right",center:"text-center"},Xe={key:0},Ye={key:1,class:"vrx-grid-cell-content"},Ze=["value"],et={key:2},tt={key:2},lt=["disabled"],at=["innerHTML"],rt=D({__name:"VrxGridCell",props:{row:{},cell:{}},emits:["cellClicked","cellDoubleClicked"],setup(c,{emit:t}){const e=c;j(r=>({"18f8f479":r.cell.width+"px",ffbe41c6:o(w).blue[500]}));const l=V(!1),s=V(),a=()=>{let r=e.cell.align?Qe[e.cell.align]:"";return r+=e.cell.editable&&l.value?" editing":"",r+=e.cell.type==="static"?" py-2":" py-4",e.cell.type==="boolean"&&(r+=" flex justify-center"),r},i=()=>{e.cell.type==="boolean"&&e.cell.editable&&(e.row.data[e.cell.id]=!e.row.data[e.cell.id]),t("cellClicked",{cellId:e.cell.id,rowId:e.row.id,value:e.cell.type==="static"?e.cell.staticHTML:e.row.data[e.cell.id]})},h=()=>{t("cellDoubleClicked",{cellId:e.cell.id,rowId:e.row.id,value:e.cell.type==="static"?e.cell.staticHTML:e.row.data[e.cell.id]}),e.cell.type!=="boolean"&&(l.value=!0),setTimeout(()=>{e.cell.editable&&e.cell.editType==="text"&&s.value.focus()},100)},p=()=>{l.value=!1},A=r=>{r.key==="Enter"&&(r.preventDefault(),l.value=!1)};return(r,g)=>T((d(),f("td",{class:$(["px-3 font-medium whitespace-nowrap vrx-cell",a()]),onDblclick:h,onClick:i,onKeydown:g[4]||(g[4]=b=>A(b))},[r.cell.type==="button"?(d(),f("span",Xe,[U(ve,q(Ve({...r.row.getProps(r.cell.id),markRaw:!0})),{default:Ae(()=>[Ne(L(r.row.getCellContent(r.cell.id)),1)]),_:1},16)])):!r.cell.type||r.cell.type==="text"?(d(),f("span",Ye,[r.cell.editable&&l.value&&r.cell.editType==="text"?T((d(),f("input",{key:0,ref_key:"input",ref:s,"onUpdate:modelValue":g[0]||(g[0]=b=>r.row.data[r.cell.id]=b),class:"edit-input"},null,512)),[[Te,r.row.data[r.cell.id]]]):r.cell.editable&&r.cell.editType==="select"?T((d(),f("select",{key:1,"onUpdate:modelValue":g[1]||(g[1]=b=>r.row.data[r.cell.id]=b),class:"edit-input",onFocus:g[2]||(g[2]=b=>l.value=!0)},[(d(!0),f(E,null,O(e.cell.editOptions,b=>(d(),f("option",{value:b.value},L(b.text),9,Ze))),256))],544)),[[Pe,r.row.data[r.cell.id]]]):(d(),f("span",et,L(r.row.getCellContent(r.cell.id)),1))])):r.cell.type==="boolean"?(d(),f("span",tt,[T(k("input",{disabled:!r.cell.editable,type:"checkbox","onUpdate:modelValue":g[3]||(g[3]=b=>r.row.data[r.cell.id]=b),class:"edit-input"},null,8,lt),[[Be,r.row.data[r.cell.id]]])])):r.cell.type==="component"?(d(),_(Me(r.cell.component),q(Se({key:3},r.row.getProps(r.cell.id))),null,16)):r.cell.type==="static"?(d(),f("div",{key:4,innerHTML:r.cell.staticHTML},null,8,at)):v("",!0)],34)),[[o(Ie),p]])}}),it=R(rt,[["__scopeId","data-v-d4f04ab7"]]),ot=["data-testid"],st=D({__name:"VrxGridRow",props:{row:{},headerConfig:{},selectable:{type:Boolean},multiselect:{type:Boolean}},emits:["rowClicked","cellClicked","cellDoubleClicked"],setup(c,{emit:t}){const e=c;j(g=>({"279c9a7e":o(w).gray[100],"5a462f3a":o(w).blue[500],"5b74a50f":o(p).textColor,d16db224:o(p).backgroundColor,"279d0edd":o(w).gray[200],"279f54b8":o(w).gray[700],"279ee059":o(w).gray[600]}));const l=H("filters"),s=H("selectedRows"),a=()=>{p.rowClicked(),t("rowClicked",p)},i=g=>{t("cellClicked",g)},h=g=>{t("cellDoubleClicked",g)},p=new qe(e.row,l,s,e.selectable??!1,e.multiselect??!1,e.headerConfig),A=K(()=>p.isFiltered()),r=K(()=>p.selectable?p.isSelected()?"selected row-hover dark:selected dark:row-hover dark:bg-gray-100":"not-selected dark:row-hover row-hover dark:bg-gray-100":"not-selected");return(g,b)=>A.value?v("",!0):(d(),f("tr",{key:0,"data-testid":"vrx-grid-row-"+o(p).id,class:$(["bg-white border-b dark:bg-gray-800 dark:border-gray-700 vrx-row",r.value]),onClick:a},[(d(!0),f(E,null,O(g.headerConfig,W=>(d(),_(it,{row:o(p),cell:W,onCellClicked:i,onCellDoubleClicked:h},null,8,["row","cell"]))),256))],10,ot))}}),nt=R(st,[["__scopeId","data-v-c3f5b6d3"]]),dt={style:{"overflow-y":"scroll"}},ct=D({__name:"VrxGridBody",props:{modelValue:{},gridData:{}},emits:["rowClicked","cellClicked","cellDoubleClicked"],setup(c,{emit:t}){const e=a=>{t("rowClicked",a)},l=a=>{t("cellClicked",a)},s=a=>{t("cellDoubleClicked",a)};return(a,i)=>(d(),f("tbody",dt,[(d(!0),f(E,null,O(a.gridData,h=>(d(),_(nt,{row:h,"header-config":a.modelValue.header,key:h.id,selectable:a.modelValue.selectable,multiselect:a.modelValue.multiselect,onRowClicked:p=>e(h),onCellClicked:l,onCellDoubleClicked:s},null,8,["row","header-config","selectable","multiselect","onRowClicked"]))),128))]))}}),ut=R(ct,[["__scopeId","data-v-2e007b02"]]);class pt{constructor(t,e){n(this,"_configuration");n(this,"_filters");n(this,"_selectedRows");n(this,"_data");this._configuration=t,this._filters=Q([]),this._selectedRows=Q([]),this._data=e}get configuration(){return this._configuration}get filters(){return this._filters}get data(){return this._data}get selectedRows(){return this._selectedRows}set filters(t){this.deselectAll(),this._filters=t}set selectedRows(t){this._selectedRows=t}selectAll(){if(this._configuration.multiselect===!1){console.warn(`Multiselection in grid "${this._configuration.id}" is disabled. No rows will be selected`);return}this.deselectAll(),this._data.forEach(t=>{this._selectedRows.push({...t})})}getRowById(t){return this._data.find(e=>e.id===t)}deselectAll(){this._selectedRows.splice(0,this._selectedRows.length)}resetFilters(){this._filters.splice(0,this._filters.length)}clearData(){this.deselectAll(),this.resetFilters(),this._data.splice(0,this._data.length)}updateData(t){t.forEach(e=>{const l=this._data.find(s=>s.id===e.id);if(l){const s=this._data.indexOf(l);this._data.splice(s,1,e)}else this._data.push(e)})}setData(t){this.clearData(),t.forEach(e=>{this._data.push(e)})}selectRange(t,e){let l=t,s=e;t>e&&(l=e,s=t),this._filters.splice(0,this._filters.length),this.deselectAll();for(let a=l;a<=s;a++)this._selectedRows.push(this._data[a])}}const gt={class:"w-full text-sm text-left text-gray-500 dark:text-gray-400","aria-describedby":"vrx-table-grid"},ft=D({__name:"VrxGrid",props:{gridConfiguration:{},gridData:{}},emits:["rowClicked","cellClicked","cellDoubleClicked"],setup(c,{expose:t,emit:e}){const l=c,s=u=>{(u.ctrlKey||u.metaKey)&&u.key==="a"&&(u.preventDefault(),i.selectAll())},a=u=>{if(u.shiftKey&&i.configuration.multiselect){u.preventDefault();const m=i.selectedRows.length;if(m>=2){let x=i.data.find(z=>z.id===i.selectedRows[0].id),J=i.data.find(z=>z.id===i.selectedRows[m-1].id);x&&J&&i.selectRange(i.data.indexOf(x),i.data.indexOf(J))}}},i=new pt(l.gridConfiguration,l.gridData);X("filters",i.filters),X("selectedRows",i.selectedRows);const h=u=>{e("rowClicked",u)},p=u=>{e("cellClicked",u)},A=u=>{e("cellDoubleClicked",u)};return t({getSelectedRows:()=>i.selectedRows,getFilters:()=>i.filters,setData:u=>{i.setData(u)},resetFilters:()=>{i.resetFilters()},deselectAll:()=>{i.deselectAll()},selectAll:()=>{i.selectAll()},clearData:()=>{i.clearData()},updateData:u=>{i.updateData(u)},selectRange:(u,m)=>{i.selectRange(u,m)},getData:()=>i.data,getRowById:u=>i.getRowById(u)}),(u,m)=>(d(),f("div",{"data-testid":"vrx-grid",onKeydown:m[2]||(m[2]=x=>s(x)),onClick:m[3]||(m[3]=x=>a(x)),class:"table-outline relative overflow-x-auto h-full shadow-md w-full bg-white dark:bg-gray-800",tabindex:"1"},[k("table",gt,[U(Je,{"grid-config":o(i).configuration,"onUpdate:gridConfig":m[0]||(m[0]=x=>o(i).configuration=x),"grid-data":o(i).data},null,8,["grid-config","grid-data"]),U(ut,{modelValue:o(i).configuration,"onUpdate:modelValue":m[1]||(m[1]=x=>o(i).configuration=x),"grid-data":o(i).data,onRowClicked:h,onCellClicked:p,onCellDoubleClicked:A},null,8,["modelValue","grid-data"])])],32))}}),ke=R(ft,[["__scopeId","data-v-b30fb936"]]),Lt={title:"VrxGrid",component:ke,tags:["autodocs"],argTypes:{}},y=[{id:"1",data:{active:!0,name:"Mario Rossi",serialNumber:1,color:"Red",model:"Fiat",plate:"AA123AA",actions:"Ciao"}},{id:"2",data:{active:!0,name:"Pino Verdi",serialNumber:2,color:"Black",model:"Audi",plate:"AA123BB"}},{id:"3",data:{active:!1,name:"Ciro Bianchi",serialNumber:3,color:"Green",model:"BMW",plate:"AA123CC"}},{id:"4",data:{active:!1,name:"Luisa Neri",serialNumber:4,color:"Gray",model:"Renault",plate:"AA123DD"}},{id:"5",data:{active:!1,name:"Giovanni Gialli",serialNumber:5,color:"Gray",model:"Toyota",plate:"BC123EE"}}],C={render:c=>({components:{VrxGrid:ke,VrxButton:ve},setup(){return{args:c}},methods:{logItem(){alert(this.$refs.myRef.getSelectedRows().map(t=>t.data.name).join(", "))},setData(t){this.$refs.myRef.setData(t)},selectAll(){this.$refs.myRef.selectAll()},deselectAll(){this.$refs.myRef.deselectAll()},updateData(t){this.$refs.myRef.updateData(t)},clearData(){this.$refs.myRef.clearData()}},template:`
          <VrxGrid v-bind="args" ref="myRef" :grid-configuration="args.gridConfiguration" :grid-data="args.gridData" style="height: 370px"/>

          <div style="padding-top: 30px; display: flex; flex-direction: row; gap: 5px">
              <VrxButton color="default" size="sm" @click="logItem" >Log selected items</VrxButton>
              <VrxButton color="default" size="sm" @click="setData(
                  [{ data: {name: 'Maria Rosa',serialNumber: 6,color: 'Black',model: 'Audi',plate: 'AA123BC'},id: '6'}])">Set Data</VrxButton>
              <VrxButton color="default" size="sm" @click="updateData(
                  [{id: '2', data: {name: 'Ilary Blasi',serialNumber: 10,color: 'Black',model: 'BMW',plate: 'AA123BC'}}])">Update Data</VrxButton>
              <VrxButton color="default" size="sm" @click="clearData">Clear Data</VrxButton>
              <VrxButton color="default" size="sm" @click="selectAll">Select All</VrxButton>
              <VrxButton color="default" size="sm" @click="deselectAll">Deselect All</VrxButton>
          </div>
        `}),args:{}},P={...C,args:{gridConfiguration:{id:"test",selectable:!1,multiselect:!1,header:[{text:"Active",id:"active",align:"center",type:"boolean",editable:!1,sortable:!0,width:100},{text:"Name",id:"name",align:"left",sortable:!0,type:"text"},{text:"Color",id:"color",align:"left",sortable:!0},{text:"Model",id:"model",align:"left",sortable:!0},{text:"Plate",id:"plate",align:"left",sortable:!0}]},gridData:y}},B={...C,args:{gridConfiguration:{id:"test",selectable:!1,multiselect:!1,header:[{text:"Active",id:"active",align:"center",type:"boolean",editable:!1,sortable:!0,width:150,filterType:"select"},{text:"Name",id:"name",align:"left",sortable:!0,type:"text",filterType:"text",filterPlaceholder:"Search by name"},{text:"Color",id:"color",align:"left",sortable:!0,filterType:"select",width:150},{text:"Model",id:"model",align:"left",sortable:!0,filterType:"select",width:150},{text:"Plate",id:"plate",align:"left",sortable:!0,filterType:"text"}]},gridData:y}},S={...C,args:{gridConfiguration:{id:"test",selectable:!0,multiselect:!1,header:[{text:"Active",id:"active",align:"center",type:"boolean",editable:!1,sortable:!0,width:100},{text:"Name",id:"name",align:"left",sortable:!0,type:"text"},{text:"Color",id:"color",align:"left",sortable:!0},{text:"Model",id:"model",align:"left",sortable:!0},{text:"Plate",id:"plate",align:"left",sortable:!0}]},gridData:y}},M={...C,args:{gridConfiguration:{id:"test",selectable:!0,multiselect:!0,header:[{text:"Active",id:"active",align:"center",type:"boolean",editable:!1,sortable:!0,width:100},{text:"Name",id:"name",align:"left",sortable:!0,type:"text"},{text:"Color",id:"color",align:"left",sortable:!0},{text:"Model",id:"model",align:"left",sortable:!0},{text:"Plate",id:"plate",align:"left",sortable:!0}]},gridData:y}},N={...C,args:{gridConfiguration:{id:"test",selectable:!1,multiselect:!1,header:[{text:"Active",id:"active",align:"center",type:"boolean",editable:!0,sortable:!0,width:100},{text:"Name",id:"name",align:"left",sortable:!0,type:"text",editable:!0,editType:"text",width:200},{text:"Color",id:"color",align:"left",sortable:!0,editable:!0,editType:"select",editOptions:[{text:"Red",value:"Red"},{text:"Black",value:"Black"},{text:"Green",value:"Green"},{text:"Gray",value:"Gray"}]},{text:"Model",id:"model",align:"left",sortable:!0,editable:!0,editType:"text",width:200},{text:"Plate",id:"plate",align:"left",sortable:!0}]},gridData:y}},F={...C,args:{gridConfiguration:{id:"test",selectable:!1,multiselect:!1,header:[{text:"Active",id:"active",align:"center",type:"boolean",sortable:!0,width:100},{text:"Name",id:"name",align:"left",sortable:!0,type:"text",width:200},{text:"Color",id:"color",align:"left",sortable:!0},{text:"Model",id:"model",align:"left",sortable:!0,width:200},{text:"Plate",id:"plate",align:"left",sortable:!0},{text:"Actions",id:"actions",align:"center",type:"static",staticHTML:"<button class='border rounded-md p-1 hover:text-blue-700 hover:border-blue-700 dark:hover:text-blue-500 dark:hover:border-blue-500 w-24'>✍🏻 Edit</button>"}]},gridData:y}},G={...C,args:{gridConfiguration:{id:"test",selectable:!1,multiselect:!1,header:[{text:"Active",id:"active",align:"center",type:"boolean",width:100},{text:"Name",id:"name",align:"left",sortable:!0,type:"text",width:200},{text:"Color",id:"color",align:"left",sortable:!0},{text:"Plate",id:"plate",align:"left",sortable:!0},{text:"Actions",id:"actions",align:"center",type:"static",staticHTML:"<button class='border rounded-md p-1 hover:text-blue-700 hover:border-blue-700 dark:hover:text-blue-500 dark:hover:border-blue-500 w-24'>✍🏻 Edit</button>",colspan:2,width:120},{text:"",id:"actions2",align:"center",type:"static",staticHTML:"<button class='border rounded-md p-1 hover:text-blue-700 hover:border-blue-700 dark:hover:text-blue-500 dark:hover:border-blue-500 w-24''>🗑️ Delete</button>",width:120}]},gridData:y}},I={...C,args:{gridConfiguration:{id:"test",selectable:!1,multiselect:!1,header:[{text:"Active",id:"active",align:"center",type:"boolean",width:100},{text:"Name",id:"name",align:"left",sortable:!0,type:"text",width:200},{text:"Color",id:"color",align:"left",sortable:!0},{text:"Plate",id:"plate",align:"left",sortable:!0},{text:"Actions",id:"actions",align:"center",type:"component",component:Fe($e),componentProps:c=>({type:"date",placeholder:"Select a date",date:V(new Date)})}]},gridData:y}};var Z,ee,te;P.parameters={...P.parameters,docs:{...(Z=P.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(te=(ee=P.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var le,ae,re;B.parameters={...B.parameters,docs:{...(le=B.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
}`,...(re=(ae=B.parameters)==null?void 0:ae.docs)==null?void 0:re.source}}};var ie,oe,se;S.parameters={...S.parameters,docs:{...(ie=S.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(se=(oe=S.parameters)==null?void 0:oe.docs)==null?void 0:se.source}}};var ne,de,ce;M.parameters={...M.parameters,docs:{...(ne=M.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
}`,...(ce=(de=M.parameters)==null?void 0:de.docs)==null?void 0:ce.source}}};var ue,pe,ge;N.parameters={...N.parameters,docs:{...(ue=N.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
}`,...(ge=(pe=N.parameters)==null?void 0:pe.docs)==null?void 0:ge.source}}};var fe,he,be;F.parameters={...F.parameters,docs:{...(fe=F.parameters)==null?void 0:fe.docs,source:{originalSource:`{
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
}`,...(be=(he=F.parameters)==null?void 0:he.docs)==null?void 0:be.source}}};var me,xe,_e;G.parameters={...G.parameters,docs:{...(me=G.parameters)==null?void 0:me.docs,source:{originalSource:`{
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
}`,...(_e=(xe=G.parameters)==null?void 0:xe.docs)==null?void 0:_e.source}}};var ye,Ce,we;I.parameters={...I.parameters,docs:{...(ye=I.parameters)==null?void 0:ye.docs,source:{originalSource:`{
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
        type: "component",
        component: markRaw(VrxDatePicker),
        componentProps: (_: GridRow) => {
          return {
            type: 'date',
            placeholder: 'Select a date',
            date: ref(new Date())
          };
        }
      }]
    },
    gridData: gridData
  }
}`,...(we=(Ce=I.parameters)==null?void 0:Ce.docs)==null?void 0:we.source}}};const $t=["Primary","Filtrable","Selectable","Multiselectable","Editable","Static_Content","Colspan","Custom_Content"];export{G as Colspan,I as Custom_Content,N as Editable,B as Filtrable,M as Multiselectable,P as Primary,S as Selectable,F as Static_Content,$t as __namedExportsOrder,Lt as default};
//# sourceMappingURL=VrxGrid.stories-0978c9f1.js.map
