var ye=Object.defineProperty;var Ce=(u,e,t)=>e in u?ye(u,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):u[e]=t;var n=(u,e,t)=>(Ce(u,typeof e!="symbol"?e+"":e,t),t);import{d as k,u as J,E as z,a as N,o as d,c as f,e as V,k as o,g as _,f as w,t as U,n as E,b as K,F as $,h as L,y as A,G as ve,H as we,I as W,J as ke,A as De,B as Re,v as O,K as q,i as Q}from"./vue.esm-bundler-a8ffa6e8.js";import{V as Ae}from"./VrxSelect-b4493606.js";import{V as Ve}from"./VrxInput-c72c2270.js";import{V as X}from"./VrxIcon-65b95bd5.js";/* empty css                                                                */import{_ as D}from"./_plugin-vue_export-helper-c27b6911.js";import{c as v}from"./styles-89581b18.js";import{_ as Te}from"./VrxButton.vue_vue_type_script_setup_true_lang-0cb9f967.js";/* empty css                                                                  *//* empty css                                                                  */import"./_commonjsHelpers-725317a4.js";class Be{constructor(e){n(this,"_id");n(this,"_text");n(this,"_type");n(this,"_align");n(this,"_sortable");n(this,"_sortFunction");n(this,"_sortDirection");n(this,"_width");n(this,"_filterType");n(this,"_filterPlaceholder");n(this,"_customFilter");n(this,"_headerConfig");n(this,"_icon");n(this,"_colspan");this._id=e.id,this._text=e.text,this._type=e.type,this._align=e.align,this._sortable=e.sortable,this._sortFunction=e.sortFunction,this._sortDirection=e.sortDirection,this._width=e.width,this._filterType=e.filterType,this._filterPlaceholder=e.filterPlaceholder,this._customFilter=e.customFilter,this._headerConfig=e,this._icon=e.icon,this._colspan=e.colspan}get id(){return this._id}get text(){return this._text}get filterType(){return this._filterType??null}get filterPlaceholder(){return this._filterPlaceholder??null}get sortable(){return this._sortable??!1}get sortDirection(){return this._sortDirection??null}get icon(){return this._icon??null}get colspan(){return this._colspan??void 0}get textAlignmentClass(){switch(this._align){case"left":return"text-left";case"center":return"text-center";case"right":return"text-right";default:return null}}get width(){return this._width}sortClicked(e,t){this._sortable&&(this._sortDirection=this._sortDirection==="asc"?"desc":"asc",this._headerConfig.sortDirection=this._sortDirection,this._resetSortDirection(e,[this._id]),this._sortFunction?this._useCustomSorting(t):this._useDefaultSorting(t))}_useDefaultSorting(e){e.sort((t,a)=>t.data[this._id]<a.data[this._id]?this._sortDirection==="asc"?1:-1:t.data[this._id]>a.data[this._id]?this._sortDirection==="asc"?-1:1:0)}_useCustomSorting(e){this._sortFunction&&e&&e.sort(this._sortFunction)}_resetSortDirection(e,t=[]){e.header.forEach(a=>{t.includes(a.id)||(a.sortDirection=void 0)})}getSelectableItems(e){const t=[];return e?(e.forEach(a=>{!t.find(s=>s.value===a.data[this._id])&&a.data[this._id]!==null&&a.data[this._id]!==void 0&&(typeof a.data[this._id]=="boolean"?t.push({value:a.data[this._id],label:a.data[this._id]?"true":"false"}):t.push({value:a.data[this._id],label:a.data[this._id]}))}),t.sort((a,s)=>a.label.localeCompare(s.label))):t}filterByValue(e,t){const a=e.find(s=>s.cellId===this._id);a&&t===""&&e.splice(e.indexOf(a),1),a?a.value=t:e.push({cellId:this._id,value:t})}}const Se=["colspan"],Me={class:"flex flex-row gap-1.5 items-center"},Pe={class:"vrx-grid-label"},Fe=k({__name:"VrxGridHeaderCell",props:{gridConfig:{},headerConfig:{},gridData:{}},setup(u){const e=u;J(r=>({"1208c7bc":o(i).width+"px"}));const t=z("filters");let a=N(""),s=N([]);const i=new Be(e.headerConfig);return(r,b)=>(d(),f("th",{scope:"col",class:E(["px-3 py-3 vrx-th header-th",o(i).textAlignmentClass]),colspan:o(i).colspan},[V("div",{class:E(["vrx-header-cell",o(i).filterType?"mb-2":null]),onClick:b[0]||(b[0]=p=>o(i).sortClicked(e.gridConfig,e.gridData))},[V("span",Me,[o(i).icon?(d(),_(X,{key:0,icon:o(i).icon,size:"4"},null,8,["icon"])):w("",!0),V("span",Pe,U(o(i).text),1)]),o(i).sortable?(d(),_(X,{key:0,icon:r.headerConfig.sortDirection==="asc"?"chevron-up":r.headerConfig.sortDirection==="desc"?"chevron-down":"empty",size:"3"},null,8,["icon"])):w("",!0)],2),o(i).filterType==="text"?(d(),_(Ve,{key:0,"model-value":o(a),height:30,class:"header-input",placeholder:o(i).filterPlaceholder??"...",type:"text",onInput:b[1]||(b[1]=p=>o(i).filterByValue(o(t),p.target.value))},null,8,["model-value","placeholder"])):w("",!0),o(i).filterType==="select"?(d(),_(Ae,{key:1,"list-data":o(i).getSelectableItems(r.gridData),"model-value":o(s),placeholder:o(i).filterPlaceholder??"...",class:"header-input",height:30,"on-select":p=>o(i).filterByValue(o(t),p.value),"on-clear":()=>o(i).filterByValue(o(t),"")},null,8,["list-data","model-value","placeholder","on-select","on-clear"])):w("",!0)],10,Se))}}),Ge=D(Fe,[["__scopeId","data-v-1375cde7"]]),Ie={"data-testid":"vrx-grid-header",class:"text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-white vrx-table"},Ne=k({__name:"VrxGridHeader",props:{gridConfig:{},gridData:{}},setup(u){const e=u,t=K(()=>{let a=[],s=0;for(;s<e.gridConfig.header.length;){const i=e.gridConfig.header[s],r=i.colspan||1;a.push(i),s+=r}return a});return(a,s)=>(d(),f("thead",Ie,[V("tr",null,[(d(!0),f($,null,L(t.value,i=>(d(),_(Ge,{"grid-config":a.gridConfig,"header-config":i,"grid-data":a.gridData},null,8,["grid-config","header-config","grid-data"]))),256))])]))}}),Ee=D(Ne,[["__scopeId","data-v-b56fa298"]]);class $e{constructor(e,t,a,s,i,r){n(this,"_id");n(this,"_textColor");n(this,"_backgroundColor");n(this,"_data");n(this,"_filters");n(this,"_selectedRows");n(this,"_selectable");n(this,"_multiselect");n(this,"_headerConfig");n(this,"_componentProps");this._id=e.id,this._textColor=e.textColor,this._backgroundColor=e.backgroundColor,this._data=e.data,this._filters=t,this._selectedRows=a,this._selectable=s,this._multiselect=i,this._headerConfig=r,this._componentProps=e.componentProps}getCellContent(e){return this._data[e]}get textColor(){return this._textColor}get componentProps(){return this._componentProps}get backgroundColor(){return this._backgroundColor}get id(){return this._id}get data(){return this._data}get selectable(){return this._selectable}rowClicked(){const e=this._selectedRows.find(t=>t.id===this._id);if(!this._multiselect){if(e){const t=this._selectedRows.indexOf(e);this._selectedRows.splice(t,1);return}this._selectedRows.splice(0,this._selectedRows.length),this._selectedRows.push(this);return}if(!e)this._selectedRows.push(this);else{const t=this._selectedRows.indexOf(e);this._selectedRows.splice(t,1)}}isFiltered(){let e=!1;return this._filters.forEach(t=>{var s;const a=(s=this._headerConfig.find(i=>i.id===t.cellId))==null?void 0:s.customFilter;e||(e=a?a(this,t):this._defaultFilter(t))}),e}isSelected(){return!!this._selectedRows.find(t=>t.id===this._id)}_defaultFilter(e){return typeof e.value=="boolean"?this._data[e.cellId]!==e.value:!this._data[e.cellId].toString().toLowerCase().includes(e.value.toLowerCase())}}const Le={left:"text-left",right:"text-right",center:"text-center"},He={key:0,class:"vrx-grid-cell-content"},Oe=["value"],ze={key:2},Ue={key:1},Ke=["innerHTML"],Je=k({__name:"VrxGridCell",props:{row:{},cell:{}},emits:["cellClicked","cellDoubleClicked"],setup(u,{emit:e}){const t=u;J(l=>({a43eae60:l.cell.width+"px",15089374:o(v).blue[500]}));const a=N(!1),s=N(),i=()=>{let l=t.cell.align?Le[t.cell.align]:"";return l+=t.cell.editable&&a.value?" editing":"",l+=t.cell.type==="static"?" py-2":" py-4",l},r=()=>{e("cellClicked",{cellId:t.cell.id,rowId:t.row.id,value:t.cell.type==="static"?t.cell.staticHTML:t.row.data[t.cell.id]})},b=()=>{e("cellDoubleClicked",{cellId:t.cell.id,rowId:t.row.id,value:t.cell.type==="static"?t.cell.staticHTML:t.row.data[t.cell.id]}),t.cell.type!=="boolean"&&(a.value=!0),setTimeout(()=>{t.cell.editable&&t.cell.editType==="text"&&s.value.focus()},100)},p={mounted(l,h){l.clickOutsideEvent=function(g){l===g.target||l.contains(g.target)||h.value(g,l)},document.body.addEventListener("click",l.clickOutsideEvent)},unmounted(l){document.body.removeEventListener("click",l.clickOutsideEvent)}},R=()=>{a.value=!1},T=l=>{l.key==="Enter"&&(l.preventDefault(),a.value=!1)};return(l,h)=>A((d(),f("td",{class:E(["px-3 font-medium whitespace-nowrap vrx-cell",i()]),onDblclick:b,onClick:r,onKeydown:h[5]||(h[5]=g=>T(g))},[!l.cell.type||l.cell.type==="text"?(d(),f("span",He,[l.cell.editable&&a.value&&l.cell.editType==="text"?A((d(),f("input",{key:0,ref_key:"input",ref:s,"onUpdate:modelValue":h[0]||(h[0]=g=>l.row.data[l.cell.id]=g),class:"edit-input"},null,512)),[[ve,l.row.data[l.cell.id]]]):l.cell.editable&&l.cell.editType==="select"?A((d(),f("select",{key:1,"onUpdate:modelValue":h[1]||(h[1]=g=>l.row.data[l.cell.id]=g),class:"edit-input",onFocus:h[2]||(h[2]=g=>a.value=!0)},[(d(!0),f($,null,L(t.cell.editOptions,g=>(d(),f("option",{value:g.value},U(g.text),9,Oe))),256))],544)),[[we,l.row.data[l.cell.id]]]):(d(),f("span",ze,U(l.row.getCellContent(l.cell.id)),1))])):l.cell.type==="boolean"?(d(),f("span",Ue,[l.cell.editable?A((d(),f("input",{key:0,type:"checkbox","onUpdate:modelValue":h[3]||(h[3]=g=>l.row.data[l.cell.id]=g),class:"edit-input"},null,512)),[[W,l.row.data[l.cell.id]]]):A((d(),f("input",{key:1,type:"checkbox","onUpdate:modelValue":h[4]||(h[4]=g=>l.row.data[l.cell.id]=g),class:"edit-input",onclick:"return false"},null,512)),[[W,l.row.data[l.cell.id]]])])):l.cell.type==="component"?(d(),_(Re(l.row.data[l.cell.id]),ke(De({key:2},l.row.componentProps)),null,16)):l.cell.type==="static"?(d(),f("div",{key:3,innerHTML:l.cell.staticHTML},null,8,Ke)):w("",!0)],34)),[[p,R]])}}),je=D(Je,[["__scopeId","data-v-5334056e"]]),We=["data-testid"],qe=k({__name:"VrxGridRow",props:{row:{},headerConfig:{},selectable:{type:Boolean},multiselect:{type:Boolean}},emits:["rowClicked","cellClicked","cellDoubleClicked"],setup(u,{emit:e}){const t=u;J(l=>({"279c9a7e":o(v).gray[100],"5a462f3a":o(v).blue[500],"5b74a50f":o(p).textColor,d16db224:o(p).backgroundColor,"279d0edd":o(v).gray[200],"279f54b8":o(v).gray[700],"279ee059":o(v).gray[600]}));const a=z("filters"),s=z("selectedRows"),i=()=>{p.rowClicked(),e("rowClicked",p)},r=l=>{e("cellClicked",l)},b=l=>{e("cellDoubleClicked",l)},p=new $e(t.row,a,s,t.selectable??!1,t.multiselect??!1,t.headerConfig),R=K(()=>p.isFiltered()),T=K(()=>p.selectable?p.isSelected()?"selected row-hover dark:selected dark:row-hover dark:bg-gray-100":"not-selected dark:row-hover row-hover dark:bg-gray-100":"not-selected");return(l,h)=>R.value?w("",!0):(d(),f("tr",{key:0,"data-testid":"vrx-grid-row-"+o(p).id,class:E(["bg-white border-b dark:bg-gray-800 dark:border-gray-700 vrx-row",T.value]),onClick:i},[(d(!0),f($,null,L(l.headerConfig,g=>(d(),_(je,{row:o(p),cell:g,onCellClicked:r,onCellDoubleClicked:b},null,8,["row","cell"]))),256))],10,We))}}),Qe=D(qe,[["__scopeId","data-v-c3f5b6d3"]]),Xe={style:{"overflow-y":"scroll"}},Ye=k({__name:"VrxGridBody",props:{modelValue:{},gridData:{}},emits:["rowClicked","cellClicked","cellDoubleClicked"],setup(u,{emit:e}){const t=i=>{e("rowClicked",i)},a=i=>{e("cellClicked",i)},s=i=>{e("cellDoubleClicked",i)};return(i,r)=>(d(),f("tbody",Xe,[(d(!0),f($,null,L(i.gridData,b=>(d(),_(Qe,{row:b,"header-config":i.modelValue.header,key:b.id,selectable:i.modelValue.selectable,multiselect:i.modelValue.multiselect,onRowClicked:p=>t(b),onCellClicked:a,onCellDoubleClicked:s},null,8,["row","header-config","selectable","multiselect","onRowClicked"]))),128))]))}}),Ze=D(Ye,[["__scopeId","data-v-2e007b02"]]);class et{constructor(e,t){n(this,"_configuration");n(this,"_filters");n(this,"_selectedRows");n(this,"_data");this._configuration=e,this._filters=O([]),this._selectedRows=O([]),this._data=O(t)}get configuration(){return this._configuration}get filters(){return this._filters}get data(){return this._data}get selectedRows(){return this._selectedRows}set filters(e){this.deselectAll(),this._filters=e}set selectedRows(e){this._selectedRows=e}selectAll(){if(this._configuration.multiselect===!1){console.warn(`Multiselection in grid "${this._configuration.id}" is disabled. No rows will be selected`);return}this.deselectAll(),this._data.forEach(e=>{this._selectedRows.push(e)})}getRowById(e){return this._data.find(t=>t.id===e)}deselectAll(){this._selectedRows.splice(0,this._selectedRows.length)}resetFilters(){this._filters.splice(0,this._filters.length)}clearData(){this.deselectAll(),this.resetFilters(),this._data.splice(0,this._data.length)}updateData(e){e.forEach(t=>{const a=this._data.find(s=>s.id===t.id);if(a){const s=this._data.indexOf(a);this._data.splice(s,1),this._data.splice(s,0,t)}else this._data.push(t)})}setData(e){this.clearData(),this._data.splice(0,this._data.length),e.forEach(t=>{this._data.push(t)})}selectRange(e,t){let a=e,s=t;e>t&&(a=t,s=e),this._filters.splice(0,this._filters.length),this.deselectAll();for(let i=a;i<=s;i++)this._selectedRows.push(this._data[i])}}const tt={class:"w-full text-sm text-left text-gray-500 dark:text-gray-400"},lt=k({__name:"VrxGrid",props:{gridConfiguration:{},gridData:{}},emits:["rowClicked","cellClicked","cellDoubleClicked"],setup(u,{expose:e,emit:t}){const a=u,s=c=>{(c.ctrlKey||c.metaKey)&&c.key==="a"&&(c.preventDefault(),r.selectAll())},i=c=>{if(c.shiftKey&&r.configuration.multiselect){c.preventDefault();const m=r.selectedRows.length;if(m>=2){let x=r.data.find(H=>H.id===r.selectedRows[0].id),j=r.data.find(H=>H.id===r.selectedRows[m-1].id);x&&j&&r.selectRange(r.data.indexOf(x),r.data.indexOf(j))}}},r=new et(a.gridConfiguration,JSON.parse(JSON.stringify(a.gridData)));q("filters",r.filters),q("selectedRows",r.selectedRows);const b=c=>{t("rowClicked",c)},p=c=>{t("cellClicked",c)},R=c=>{t("cellDoubleClicked",c)};return e({getSelectedRows:()=>r.selectedRows,getFilters:()=>r.filters,setData:c=>{r.setData(c)},resetFilters:()=>{r.resetFilters()},deselectAll:()=>{r.deselectAll()},selectAll:()=>{r.selectAll()},clearData:()=>{r.clearData()},updateData:c=>{r.updateData(c)},selectRange:(c,m)=>{r.selectRange(c,m)},getData:()=>r.data,getRowById:c=>r.getRowById(c)}),(c,m)=>(d(),f("div",{"data-testid":"vrx-grid",onKeydown:m[2]||(m[2]=x=>s(x)),onClick:m[3]||(m[3]=x=>i(x)),class:"table-outline relative overflow-x-auto h-full shadow-md w-full bg-white dark:bg-gray-800",tabindex:"1"},[V("table",tt,[Q(Ee,{"grid-config":o(r).configuration,"onUpdate:gridConfig":m[0]||(m[0]=x=>o(r).configuration=x),"grid-data":o(r).data},null,8,["grid-config","grid-data"]),Q(Ze,{modelValue:o(r).configuration,"onUpdate:modelValue":m[1]||(m[1]=x=>o(r).configuration=x),"grid-data":o(r).data,onRowClicked:b,onCellClicked:p,onCellDoubleClicked:R},null,8,["modelValue","grid-data"])])],32))}}),_e=D(lt,[["__scopeId","data-v-eda93e0b"]]),vt={title:"VrxGrid",component:_e,tags:["autodocs"],argTypes:{}},y=[{id:"1",data:{active:!0,name:"Mario Rossi",serialNumber:1,color:"Red",model:"Fiat",plate:"AA123AA"}},{id:"2",data:{active:!0,name:"Pino Verdi",serialNumber:2,color:"Black",model:"Audi",plate:"AA123BB"}},{id:"3",data:{active:!1,name:"Ciro Bianchi",serialNumber:3,color:"Green",model:"BMW",plate:"AA123CC"}},{id:"4",data:{active:!1,name:"Luisa Neri",serialNumber:4,color:"Gray",model:"Renault",plate:"AA123DD"}},{id:"5",data:{active:!1,name:"Giovanni Gialli",serialNumber:5,color:"Gray",model:"Toyota",plate:"BC123EE"}}],C={render:u=>({components:{VrxGrid:_e,VrxButton:Te},setup(){return{args:u}},methods:{logItem(){alert(this.$refs.myRef.getSelectedRows().map(e=>e.data.name).join(", "))},setData(e){this.$refs.myRef.setData(e)},selectAll(){this.$refs.myRef.selectAll()},deselectAll(){this.$refs.myRef.deselectAll()},updateData(e){this.$refs.myRef.updateData(e)},clearData(){this.$refs.myRef.clearData()}},template:`
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
        `}),args:{}},B={...C,args:{gridConfiguration:{id:"test",selectable:!1,multiselect:!1,header:[{text:"Active",id:"active",align:"center",type:"boolean",editable:!1,sortable:!0,width:100},{text:"Name",id:"name",align:"left",sortable:!0,type:"text"},{text:"Color",id:"color",align:"left",sortable:!0},{text:"Model",id:"model",align:"left",sortable:!0},{text:"Plate",id:"plate",align:"left",sortable:!0}]},gridData:y}},S={...C,args:{gridConfiguration:{id:"test",selectable:!1,multiselect:!1,header:[{text:"Active",id:"active",align:"center",type:"boolean",editable:!1,sortable:!0,width:150,filterType:"select"},{text:"Name",id:"name",align:"left",sortable:!0,type:"text",filterType:"text",filterPlaceholder:"Search by name"},{text:"Color",id:"color",align:"left",sortable:!0,filterType:"select",width:150},{text:"Model",id:"model",align:"left",sortable:!0,filterType:"select",width:150},{text:"Plate",id:"plate",align:"left",sortable:!0,filterType:"text"}]},gridData:y}},M={...C,args:{gridConfiguration:{id:"test",selectable:!0,multiselect:!1,header:[{text:"Active",id:"active",align:"center",type:"boolean",editable:!1,sortable:!0,width:100},{text:"Name",id:"name",align:"left",sortable:!0,type:"text"},{text:"Color",id:"color",align:"left",sortable:!0},{text:"Model",id:"model",align:"left",sortable:!0},{text:"Plate",id:"plate",align:"left",sortable:!0}]},gridData:y}},P={...C,args:{gridConfiguration:{id:"test",selectable:!0,multiselect:!0,header:[{text:"Active",id:"active",align:"center",type:"boolean",editable:!1,sortable:!0,width:100},{text:"Name",id:"name",align:"left",sortable:!0,type:"text"},{text:"Color",id:"color",align:"left",sortable:!0},{text:"Model",id:"model",align:"left",sortable:!0},{text:"Plate",id:"plate",align:"left",sortable:!0}]},gridData:y}},F={...C,args:{gridConfiguration:{id:"test",selectable:!1,multiselect:!1,header:[{text:"Active",id:"active",align:"center",type:"boolean",editable:!0,sortable:!0,width:100},{text:"Name",id:"name",align:"left",sortable:!0,type:"text",editable:!0,editType:"text",width:200},{text:"Color",id:"color",align:"left",sortable:!0,editable:!0,editType:"select",editOptions:[{text:"Red",value:"Red"},{text:"Black",value:"Black"},{text:"Green",value:"Green"},{text:"Gray",value:"Gray"}]},{text:"Model",id:"model",align:"left",sortable:!0,editable:!0,editType:"text",width:200},{text:"Plate",id:"plate",align:"left",sortable:!0}]},gridData:y}},G={...C,args:{gridConfiguration:{id:"test",selectable:!1,multiselect:!1,header:[{text:"Active",id:"active",align:"center",type:"boolean",sortable:!0,width:100},{text:"Name",id:"name",align:"left",sortable:!0,type:"text",width:200},{text:"Color",id:"color",align:"left",sortable:!0},{text:"Model",id:"model",align:"left",sortable:!0,width:200},{text:"Plate",id:"plate",align:"left",sortable:!0},{text:"Actions",id:"actions",align:"center",type:"static",staticHTML:"<button class='border rounded-md p-1 hover:text-blue-700 hover:border-blue-700 dark:hover:text-blue-500 dark:hover:border-blue-500 w-24'>✍🏻 Edit</button>"}]},gridData:y}},I={...C,args:{gridConfiguration:{id:"test",selectable:!1,multiselect:!1,header:[{text:"Active",id:"active",align:"center",type:"boolean",width:100},{text:"Name",id:"name",align:"left",sortable:!0,type:"text",width:200},{text:"Color",id:"color",align:"left",sortable:!0},{text:"Plate",id:"plate",align:"left",sortable:!0},{text:"Actions",id:"actions",align:"center",type:"static",staticHTML:"<button class='border rounded-md p-1 hover:text-blue-700 hover:border-blue-700 dark:hover:text-blue-500 dark:hover:border-blue-500 w-24'>✍🏻 Edit</button>",colspan:2,width:120},{text:"",id:"actions2",align:"center",type:"static",staticHTML:"<button class='border rounded-md p-1 hover:text-blue-700 hover:border-blue-700 dark:hover:text-blue-500 dark:hover:border-blue-500 w-24''>🗑️ Delete</button>",width:120}]},gridData:y}};var Y,Z,ee;B.parameters={...B.parameters,docs:{...(Y=B.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(ee=(Z=B.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,le,ae;S.parameters={...S.parameters,docs:{...(te=S.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(ae=(le=S.parameters)==null?void 0:le.docs)==null?void 0:ae.source}}};var ie,re,oe;M.parameters={...M.parameters,docs:{...(ie=M.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(oe=(re=M.parameters)==null?void 0:re.docs)==null?void 0:oe.source}}};var se,ne,de;P.parameters={...P.parameters,docs:{...(se=P.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
}`,...(de=(ne=P.parameters)==null?void 0:ne.docs)==null?void 0:de.source}}};var ce,ue,ge;F.parameters={...F.parameters,docs:{...(ce=F.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
}`,...(ge=(ue=F.parameters)==null?void 0:ue.docs)==null?void 0:ge.source}}};var pe,fe,he;G.parameters={...G.parameters,docs:{...(pe=G.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
}`,...(he=(fe=G.parameters)==null?void 0:fe.docs)==null?void 0:he.source}}};var be,me,xe;I.parameters={...I.parameters,docs:{...(be=I.parameters)==null?void 0:be.docs,source:{originalSource:`{
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
}`,...(xe=(me=I.parameters)==null?void 0:me.docs)==null?void 0:xe.source}}};const wt=["Primary","Filtrable","Selectable","Multiselectable","Editable","Static_Content","Colspan"];export{I as Colspan,F as Editable,S as Filtrable,P as Multiselectable,B as Primary,M as Selectable,G as Static_Content,wt as __namedExportsOrder,vt as default};
//# sourceMappingURL=VrxGrid.stories-5dc7cfba.js.map
