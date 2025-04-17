var Ve=Object.defineProperty;var Te=(c,t,e)=>t in c?Ve(c,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):c[t]=e;var s=(c,t,e)=>(Te(c,typeof t!="symbol"?t+"":t,e),e);import{d as V,v as q,q as o,E as K,a as v,o as d,c as f,e as R,x as C,l as D,t as E,n as O,b as j,F as z,s as H,U as De,p as P,k as W,I as Be,y as Pe,Q as X,V as Se,W as Me,X as Fe,P as Ne,H as Ge,J as Ie,j as Y,C as Z,Y as Le}from"./vue.esm-bundler-cf734fcd.js";import{V as $e}from"./VrxSelect-8882c6c9.js";import{V as Ee}from"./VrxInput-de6f8bed.js";import{V as ee}from"./VrxIcon-326a70bd.js";import"./VrxGrid.vue_vue_type_style_index_0_scoped_3a3a4c45_lang-ade69029.js";import{_ as T}from"./_plugin-vue_export-helper-c27b6911.js";import{a as A}from"./styles-cba61512.js";import{v as Oe}from"./clickOutside-c990cfcd.js";import{_ as Re}from"./VrxButton.vue_vue_type_script_setup_true_lang-9342cf48.js";/* empty css                                                                *//* empty css                                                                 *//* empty css                                                                  */import{V as ze}from"./VrxDatePicker-97a17c09.js";/* empty css                                                                     *//* empty css                                                                    *//* empty css                                                                  *//* empty css              */import"./appendToBody-70f0f50f.js";import"./v4-4a60fe23.js";import"./_commonjsHelpers-de833af9.js";class He{constructor(t){s(this,"_id");s(this,"_text");s(this,"_type");s(this,"_align");s(this,"_sortable");s(this,"_sortFunction");s(this,"_sortDirection");s(this,"_width");s(this,"_filterType");s(this,"_filterPlaceholder");s(this,"_customFilter");s(this,"_headerConfig");s(this,"_icon");s(this,"_colspan");this._id=t.id,this._text=t.text,this._type=t.type,this._align=t.align,this._sortable=t.sortable,this._sortFunction=t.sortFunction,this._sortDirection=t.sortDirection,this._width=t.width,this._filterType=t.filterType,this._filterPlaceholder=t.filterPlaceholder,this._customFilter=t.customFilter,this._headerConfig=t,this._icon=t.icon,this._colspan=t.colspan}get id(){return this._id}get text(){return this._text}get filterType(){return this._filterType??null}get filterPlaceholder(){return this._filterPlaceholder??null}get sortable(){return this._sortable??!1}get sortDirection(){return this._sortDirection??null}get icon(){return this._icon??null}get colspan(){return this._colspan??void 0}get textAlignmentClass(){switch(this._align){case"left":return"text-left";case"center":return"text-center";case"right":return"text-right";default:return null}}get width(){return this._width}sortClicked(t,e){this._sortable&&(this._sortDirection=this._sortDirection==="asc"?"desc":"asc",this._headerConfig.sortDirection=this._sortDirection,this._resetSortDirection(t,[this._id]),this._sortFunction?this._useCustomSorting(e):this._useDefaultSorting(e))}_useDefaultSorting(t){t.sort((e,l)=>e.data[this._id]<l.data[this._id]?this._sortDirection==="asc"?1:-1:e.data[this._id]>l.data[this._id]?this._sortDirection==="asc"?-1:1:0)}_useCustomSorting(t){this._sortFunction&&t&&t.sort(this._sortFunction)}_resetSortDirection(t,e=[]){t.header.forEach(l=>{e.includes(l.id)||(l.sortDirection=void 0)})}getSelectableItems(t){const e=[];return t?(t.forEach(l=>{!e.find(r=>r.value===l.data[this._id])&&l.data[this._id]!==null&&l.data[this._id]!==void 0&&(typeof l.data[this._id]=="boolean"?e.push({value:l.data[this._id],label:l.data[this._id]?"true":"false"}):e.push({value:l.data[this._id],label:l.data[this._id]}))}),e.sort((l,r)=>l.label.localeCompare(r.label))):e}filterByValue(t,e){const l=t.find(r=>r.cellId===this._id);l&&e===""&&t.splice(t.indexOf(l),1),l?l.value=e:t.push({cellId:this._id,value:e})}}const Ue=["colspan"],Ke={class:"flex flex-row gap-1.5 items-center"},je={class:"vrx-grid-label"},We=V({__name:"VrxGridHeaderCell",props:{gridConfig:{},headerConfig:{},gridData:{}},setup(c){q(a=>({26854194:o(n).width+"px"}));const t=c,e=K("filters");let l=v(""),r=v([]);const n=new He(t.headerConfig);return(a,g)=>(d(),f("th",{scope:"col",class:O(["px-3 py-3 vrx-th header-th",o(n).textAlignmentClass]),colspan:o(n).colspan},[R("div",{class:O(["vrx-header-cell",o(n).filterType?"mb-2":null]),onClick:g[0]||(g[0]=h=>o(n).sortClicked(t.gridConfig,t.gridData))},[R("span",Ke,[o(n).icon?(d(),C(ee,{key:0,icon:o(n).icon,size:"4"},null,8,["icon"])):D("",!0),R("span",je,E(o(n).text),1)]),o(n).sortable?(d(),C(ee,{key:0,icon:a.headerConfig.sortDirection==="asc"?"chevron-up":a.headerConfig.sortDirection==="desc"?"chevron-down":"empty",size:"3"},null,8,["icon"])):D("",!0)],2),o(n).filterType==="text"?(d(),C(Ee,{key:0,"model-value":o(l),height:30,class:"header-input",placeholder:o(n).filterPlaceholder??"...",type:"text",onInput:g[1]||(g[1]=h=>o(n).filterByValue(o(e),h.target.value))},null,8,["model-value","placeholder"])):D("",!0),o(n).filterType==="select"?(d(),C($e,{key:1,"list-data":o(n).getSelectableItems(a.gridData),"model-value":o(r),placeholder:o(n).filterPlaceholder??"...",class:"header-input",height:30,"on-select":h=>o(n).filterByValue(o(e),h.value),"on-clear":()=>o(n).filterByValue(o(e),""),searchable:!0},null,8,["list-data","model-value","placeholder","on-select","on-clear"])):D("",!0)],10,Ue))}}),qe=T(We,[["__scopeId","data-v-dc858f94"]]),Je={"data-testid":"vrx-grid-header",class:"text-xs vrxgrid-header-style uppercase vrx-table"},Qe=V({__name:"VrxGridHeader",props:{gridConfig:{},gridData:{}},setup(c){const t=c,e=j(()=>{let l=[],r=0;for(;r<t.gridConfig.header.length;){const n=t.gridConfig.header[r],a=n.colspan||1;l.push(n),r+=a}return l});return(l,r)=>(d(),f("thead",Je,[R("tr",null,[(d(!0),f(z,null,H(e.value,n=>(d(),C(qe,{"grid-config":l.gridConfig,"header-config":n,"grid-data":l.gridData},null,8,["grid-config","header-config","grid-data"]))),256))])]))}}),Xe=T(Qe,[["__scopeId","data-v-43c975b7"]]);class Ye{constructor(t,e,l,r,n,a){s(this,"_id");s(this,"_textColor");s(this,"_backgroundColor");s(this,"_data");s(this,"_filters");s(this,"_selectedRows");s(this,"_selectable");s(this,"_multiselect");s(this,"_headerConfig");s(this,"_componentProps");this._id=t.id,this._textColor=t.textColor,this._backgroundColor=t.backgroundColor,this._data=t.data,this._filters=e,this._selectedRows=l,this._selectable=r,this._multiselect=n,this._headerConfig=a,this._componentProps=t.componentProps}getCellContent(t){const e=this._headerConfig.find(l=>l.id.toLowerCase()===t.toLowerCase());return e!=null&&e.template?e==null?void 0:e.template({id:this._id,data:this._data}):this._data[t]}get textColor(){return this._textColor}get componentProps(){return this._componentProps}get backgroundColor(){return this._backgroundColor}get id(){return this._id}get data(){return this._data}get selectable(){return this._selectable}rowClicked(){const t=this._selectedRows.find(e=>e.id===this._id);if(!this._multiselect){if(t){const e=this._selectedRows.indexOf(t);this._selectedRows.splice(e,1);return}this._selectedRows.splice(0,this._selectedRows.length),this._selectedRows.push(this);return}if(!t)this._selectedRows.push(this);else{const e=this._selectedRows.indexOf(t);this._selectedRows.splice(e,1)}}isFiltered(){let t=!1;return this._filters.forEach(e=>{var r;const l=(r=this._headerConfig.find(n=>n.id===e.cellId))==null?void 0:r.customFilter;t||(t=l?l(this,e):this._defaultFilter(e))}),t}isSelected(){return!!this._selectedRows.find(e=>e.id===this._id)}hasTemplate(t){const e=this._headerConfig.find(l=>l.id.toLowerCase()===t.toLowerCase());return!!(e!=null&&e.template)}getProps(t){const e=this._headerConfig.find(l=>l.id.toLowerCase()===t.toLowerCase());if(e!=null&&e.componentProps)return e==null?void 0:e.componentProps({id:this._id,data:this._data});console.warn(`No component props found for cell ${t}, you must provide a componentProps function in the header configuration`)}_defaultFilter(t){return typeof t.value=="boolean"?this._data[t.cellId]!==t.value:!this._data[t.cellId].toString().toLowerCase().includes(t.value.toLowerCase())}}const Ze={left:"text-left",right:"text-right",center:"text-center"},et={key:0},tt={key:1,class:"vrx-grid-cell-content"},lt=["value"],at={key:2},it={key:2},nt=["disabled"],rt=["innerHTML"],ot=V({__name:"VrxGridCell",props:{row:{},cell:{}},emits:["cellClicked","cellDoubleClicked"],setup(c,{emit:t}){q(i=>({b3e63dce:i.cell.width+"px"}));const e=c,l=v(!1),r=v(),n=v();De(()=>{A&&A.colors&&(n.value=A.colors)});const a=()=>{let i=e.cell.align?Ze[e.cell.align]:"";return i+=e.cell.editable&&l.value?" vrxgrid-editing-cell-style":"",i+=e.cell.type==="static"?" py-2":" py-4",e.cell.type==="boolean"&&(i+=" flex justify-center"),i},g=t,h=()=>{e.cell.type==="boolean"&&e.cell.editable&&(e.row.data[e.cell.id]=!e.row.data[e.cell.id]),g("cellClicked",{cellId:e.cell.id,rowId:e.row.id,value:e.cell.type==="static"?e.cell.staticHTML:e.row.data[e.cell.id]})},k=()=>{g("cellDoubleClicked",{cellId:e.cell.id,rowId:e.row.id,value:e.cell.type==="static"?e.cell.staticHTML:e.row.data[e.cell.id]}),e.cell.type!=="boolean"&&(l.value=!0),setTimeout(()=>{e.cell.editable&&e.cell.editType==="text"&&r.value.focus()},100)},m=()=>{l.value=!1},B=i=>{i.key==="Enter"&&(i.preventDefault(),l.value=!1)};return(i,p)=>P((d(),f("td",{class:O(["px-3 font-medium whitespace-nowrap",a()]),onDblclick:k,onClick:h,onKeydown:p[4]||(p[4]=b=>B(b))},[i.cell.type==="button"?(d(),f("span",et,[W(Re,X(Se({...i.row.getProps(i.cell.id),markRaw:!0})),{default:Be(()=>[Pe(E(i.row.getCellContent(i.cell.id)),1)]),_:1},16)])):!i.cell.type||i.cell.type==="text"?(d(),f("span",tt,[i.cell.editable&&l.value&&i.cell.editType==="text"?P((d(),f("input",{key:0,ref_key:"input",ref:r,"onUpdate:modelValue":p[0]||(p[0]=b=>i.row.data[i.cell.id]=b),class:"edit-input"},null,512)),[[Me,i.row.data[i.cell.id]]]):i.cell.editable&&i.cell.editType==="select"?P((d(),f("select",{key:1,"onUpdate:modelValue":p[1]||(p[1]=b=>i.row.data[i.cell.id]=b),class:"edit-input",onFocus:p[2]||(p[2]=b=>l.value=!0)},[(d(!0),f(z,null,H(e.cell.editOptions,b=>(d(),f("option",{value:b.value},E(b.text),9,lt))),256))],544)),[[Fe,i.row.data[i.cell.id]]]):(d(),f("span",at,E(i.row.getCellContent(i.cell.id)),1))])):i.cell.type==="boolean"?(d(),f("span",it,[P(R("input",{disabled:!i.cell.editable,type:"checkbox","onUpdate:modelValue":p[3]||(p[3]=b=>i.row.data[i.cell.id]=b),class:"edit-input"},null,8,nt),[[Ne,i.row.data[i.cell.id]]])])):i.cell.type==="component"?(d(),C(Ie(i.cell.component),X(Ge({key:3},i.row.getProps(i.cell.id))),null,16)):i.cell.type==="static"?(d(),f("div",{key:4,innerHTML:i.cell.staticHTML},null,8,rt)):D("",!0)],34)),[[o(Oe),m]])}}),st=T(ot,[["__scopeId","data-v-b1ee625f"]]),dt=["data-testid"],ct=V({__name:"VrxGridRow",props:{row:{},headerConfig:{},selectable:{type:Boolean},multiselect:{type:Boolean}},emits:["rowClicked","cellClicked","cellDoubleClicked"],setup(c,{emit:t}){q(p=>({"560a3dad":a.value.secondary[500],"321776b2":o(m).textColor,"1162f251":o(m).backgroundColor}));const e=c,l=t,r=K("filters"),n=K("selectedRows"),a=v();De(()=>{A&&A.colors&&(a.value=A.colors)});const g=()=>{m.rowClicked(),l("rowClicked",m)},h=p=>{l("cellClicked",p)},k=p=>{l("cellDoubleClicked",p)},m=new Ye(e.row,r,n,e.selectable??!1,e.multiselect??!1,e.headerConfig),B=j(()=>m.isFiltered()),i=j(()=>m.selectable?m.isSelected()?"selected dark:selected vrxgrid-selected-style vrxgrid-selectedable-style":"not-selected dark:not-selected vrxgrid-selectedable-style":"not-selected dark:not-selected");return(p,b)=>B.value?D("",!0):(d(),f("tr",{key:0,"data-testid":"vrx-grid-row-"+o(m).id,class:O(["vrxgrid-row-style border-b vrx-row",i.value]),onClick:g},[(d(!0),f(z,null,H(p.headerConfig,J=>(d(),C(st,{row:o(m),cell:J,onCellClicked:h,onCellDoubleClicked:k},null,8,["row","cell"]))),256))],10,dt))}}),ut=T(ct,[["__scopeId","data-v-0235e66f"]]),pt={style:{"overflow-y":"scroll"}},ft=V({__name:"VrxGridBody",props:{modelValue:{},gridData:{}},emits:["rowClicked","cellClicked","cellDoubleClicked"],setup(c,{emit:t}){const e=t,l=a=>{e("rowClicked",a)},r=a=>{e("cellClicked",a)},n=a=>{e("cellDoubleClicked",a)};return(a,g)=>(d(),f("tbody",pt,[(d(!0),f(z,null,H(a.gridData,h=>(d(),C(ut,{row:h,"header-config":a.modelValue.header,key:h.id,selectable:a.modelValue.selectable,multiselect:a.modelValue.multiselect,onRowClicked:k=>l(h),onCellClicked:r,onCellDoubleClicked:n},null,8,["row","header-config","selectable","multiselect","onRowClicked"]))),128))]))}}),gt=T(ft,[["__scopeId","data-v-981c3b5c"]]);class ht{constructor(t,e){s(this,"_configuration");s(this,"_filters");s(this,"_selectedRows");s(this,"_data");this._configuration=t,this._filters=Y([]),this._selectedRows=Y([]),this._data=e}get configuration(){return this._configuration}get filters(){return this._filters}get data(){return this._data}get selectedRows(){return this._selectedRows}set filters(t){this.deselectAll(),this._filters=t}set selectedRows(t){this._selectedRows=t}selectAll(){if(this._configuration.multiselect===!1){console.warn(`Multiselection in grid "${this._configuration.id}" is disabled. No rows will be selected`);return}this.deselectAll(),this._data.forEach(t=>{this._selectedRows.push({...t})})}getRowById(t){return this._data.find(e=>e.id===t)}deselectAll(){this._selectedRows.splice(0,this._selectedRows.length)}resetFilters(){this._filters.splice(0,this._filters.length)}clearData(){this.deselectAll(),this.resetFilters(),this._data.splice(0,this._data.length)}updateData(t){t.forEach(e=>{const l=this._data.find(r=>r.id===e.id);if(l){const r=this._data.indexOf(l);this._data.splice(r,1,e)}else this._data.push(e)})}setData(t){this.clearData(),t.forEach(e=>{this._data.push(e)})}selectRange(t,e){let l=t,r=e;t>e&&(l=e,r=t),this._filters.splice(0,this._filters.length),this.deselectAll();for(let n=l;n<=r;n++)this._selectedRows.push(this._data[n])}}const mt={class:"w-full text-sm text-left vrxgrid-row-text-style","aria-describedby":"vrx-table-grid"},bt=V({__name:"VrxGrid",props:{gridConfiguration:{},gridData:{}},emits:["rowClicked","cellClicked","cellDoubleClicked"],setup(c,{expose:t,emit:e}){const l=u=>{(u.ctrlKey||u.metaKey)&&u.key==="a"&&(u.preventDefault(),a.selectAll())},r=u=>{if(u.shiftKey&&a.configuration.multiselect){u.preventDefault();const x=a.selectedRows.length;if(x>=2){let _=a.data.find(U=>U.id===a.selectedRows[0].id),Q=a.data.find(U=>U.id===a.selectedRows[x-1].id);_&&Q&&a.selectRange(a.data.indexOf(_),a.data.indexOf(Q))}}},n=c,a=new ht(n.gridConfiguration,n.gridData);Z("filters",a.filters),Z("selectedRows",a.selectedRows);const g=e,h=u=>{g("rowClicked",u)},k=u=>{g("cellClicked",u)},m=u=>{g("cellDoubleClicked",u)};return t({getSelectedRows:()=>a.selectedRows,getFilters:()=>a.filters,setData:u=>{a.setData(u)},resetFilters:()=>{a.resetFilters()},deselectAll:()=>{a.deselectAll()},selectAll:()=>{a.selectAll()},clearData:()=>{a.clearData()},updateData:u=>{a.updateData(u)},selectRange:(u,x)=>{a.selectRange(u,x)},getData:()=>a.data,getRowById:u=>a.getRowById(u)}),(u,x)=>(d(),f("div",{"data-testid":"vrx-grid",onKeydown:x[2]||(x[2]=_=>l(_)),onClick:x[3]||(x[3]=_=>r(_)),class:"table-outline relative overflow-x-auto h-full shadow-md w-full vrxgrid-bg-style",tabindex:"1"},[R("table",mt,[W(Xe,{"grid-config":o(a).configuration,"onUpdate:gridConfig":x[0]||(x[0]=_=>o(a).configuration=_),"grid-data":o(a).data},null,8,["grid-config","grid-data"]),W(gt,{modelValue:o(a).configuration,"onUpdate:modelValue":x[1]||(x[1]=_=>o(a).configuration=_),"grid-data":o(a).data,onRowClicked:h,onCellClicked:k,onCellDoubleClicked:m},null,8,["modelValue","grid-data"])])],32))}}),Ae=T(bt,[["__scopeId","data-v-3a3a4c45"]]),Kt={title:"VrxGrid",component:Ae,tags:["autodocs"],argTypes:{}},y=[{id:"1",data:{active:!0,name:"Mario Rossi",serialNumber:1,color:"Red",model:"Fiat",plate:"AA123AA",actions:"Ciao"}},{id:"2",data:{active:!0,name:"Pino Verdi",serialNumber:2,color:"Black",model:"Audi",plate:"AA123BB"}},{id:"3",data:{active:!1,name:"Ciro Bianchi",serialNumber:3,color:"Green",model:"BMW",plate:"AA123CC"}},{id:"4",data:{active:!1,name:"Luisa Neri",serialNumber:4,color:"Gray",model:"Renault",plate:"AA123DD"}},{id:"5",data:{active:!1,name:"Giovanni Gialli",serialNumber:5,color:"Gray",model:"Toyota",plate:"BC123EE"}}],w={render:c=>({components:{VrxGrid:Ae,VrxButton:Re},setup(){return{args:c}},methods:{logItem(){alert(this.$refs.myRef.getSelectedRows().map(t=>t.data.name).join(", "))},setData(t){this.$refs.myRef.setData(t)},selectAll(){this.$refs.myRef.selectAll()},deselectAll(){this.$refs.myRef.deselectAll()},updateData(t){this.$refs.myRef.updateData(t)},clearData(){this.$refs.myRef.clearData()}},template:`
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
        `}),args:{}},S={...w,args:{gridConfiguration:{id:"test",selectable:!1,multiselect:!1,header:[{text:"Active",id:"active",align:"center",type:"boolean",editable:!1,sortable:!0,width:100},{text:"Name",id:"name",align:"left",sortable:!0,type:"text"},{text:"Color",id:"color",align:"left",sortable:!0},{text:"Model",id:"model",align:"left",sortable:!0},{text:"Plate",id:"plate",align:"left",sortable:!0}]},gridData:y}},M={...w,args:{gridConfiguration:{id:"test",selectable:!1,multiselect:!1,header:[{text:"Active",id:"active",align:"center",type:"boolean",editable:!1,sortable:!0,width:150,filterType:"select"},{text:"Name",id:"name",align:"left",sortable:!0,type:"text",filterType:"text",filterPlaceholder:"Search by name"},{text:"Color",id:"color",align:"left",sortable:!0,filterType:"select",width:150},{text:"Model",id:"model",align:"left",sortable:!0,filterType:"select",width:150},{text:"Plate",id:"plate",align:"left",sortable:!0,filterType:"text"}]},gridData:y}},F={...w,args:{gridConfiguration:{id:"test",selectable:!0,multiselect:!1,header:[{text:"Active",id:"active",align:"center",type:"boolean",editable:!1,sortable:!0,width:100},{text:"Name",id:"name",align:"left",sortable:!0,type:"text"},{text:"Color",id:"color",align:"left",sortable:!0},{text:"Model",id:"model",align:"left",sortable:!0},{text:"Plate",id:"plate",align:"left",sortable:!0}]},gridData:y}},N={...w,args:{gridConfiguration:{id:"test",selectable:!0,multiselect:!0,header:[{text:"Active",id:"active",align:"center",type:"boolean",editable:!1,sortable:!0,width:100},{text:"Name",id:"name",align:"left",sortable:!0,type:"text"},{text:"Color",id:"color",align:"left",sortable:!0},{text:"Model",id:"model",align:"left",sortable:!0},{text:"Plate",id:"plate",align:"left",sortable:!0}]},gridData:y}},G={...w,args:{gridConfiguration:{id:"test",selectable:!1,multiselect:!1,header:[{text:"Active",id:"active",align:"center",type:"boolean",editable:!0,sortable:!0,width:100},{text:"Name",id:"name",align:"left",sortable:!0,type:"text",editable:!0,editType:"text",width:200},{text:"Color",id:"color",align:"left",sortable:!0,editable:!0,editType:"select",editOptions:[{text:"Red",value:"Red"},{text:"Black",value:"Black"},{text:"Green",value:"Green"},{text:"Gray",value:"Gray"}]},{text:"Model",id:"model",align:"left",sortable:!0,editable:!0,editType:"text",width:200},{text:"Plate",id:"plate",align:"left",sortable:!0}]},gridData:y}},I={...w,args:{gridConfiguration:{id:"test",selectable:!1,multiselect:!1,header:[{text:"Active",id:"active",align:"center",type:"boolean",sortable:!0,width:100},{text:"Name",id:"name",align:"left",sortable:!0,type:"text",width:200},{text:"Color",id:"color",align:"left",sortable:!0},{text:"Model",id:"model",align:"left",sortable:!0,width:200},{text:"Plate",id:"plate",align:"left",sortable:!0},{text:"Actions",id:"actions",align:"center",type:"static",staticHTML:"<button class='border rounded-md p-1 hover:text-blue-700 hover:border-blue-700 dark:hover:text-blue-500 dark:hover:border-blue-500 w-24'>✍🏻 Edit</button>"}]},gridData:y}},L={...w,args:{gridConfiguration:{id:"test",selectable:!1,multiselect:!1,header:[{text:"Active",id:"active",align:"center",type:"boolean",width:100},{text:"Name",id:"name",align:"left",sortable:!0,type:"text",width:200},{text:"Color",id:"color",align:"left",sortable:!0},{text:"Plate",id:"plate",align:"left",sortable:!0},{text:"Actions",id:"actions",align:"center",type:"static",staticHTML:"<button class='border rounded-md p-1 hover:text-blue-700 hover:border-blue-700 dark:hover:text-blue-500 dark:hover:border-blue-500 w-24'>✍🏻 Edit</button>",colspan:2,width:120},{text:"",id:"actions2",align:"center",type:"static",staticHTML:"<button class='border rounded-md p-1 hover:text-blue-700 hover:border-blue-700 dark:hover:text-blue-500 dark:hover:border-blue-500 w-24''>🗑️ Delete</button>",width:120}]},gridData:y}},$={...w,args:{gridConfiguration:{id:"test",selectable:!1,multiselect:!1,header:[{text:"Active",id:"active",align:"center",type:"boolean",width:100},{text:"Name",id:"name",align:"left",sortable:!0,type:"text",width:200},{text:"Color",id:"color",align:"left",sortable:!0},{text:"Plate",id:"plate",align:"left",sortable:!0},{text:"Actions",id:"actions",align:"center",type:"component",component:Le(ze),componentProps:c=>({type:"date",placeholder:"Select a date",date:v(new Date)})}]},gridData:y}};var te,le,ae;S.parameters={...S.parameters,docs:{...(te=S.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(ae=(le=S.parameters)==null?void 0:le.docs)==null?void 0:ae.source}}};var ie,ne,re;M.parameters={...M.parameters,docs:{...(ie=M.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(re=(ne=M.parameters)==null?void 0:ne.docs)==null?void 0:re.source}}};var oe,se,de;F.parameters={...F.parameters,docs:{...(oe=F.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(de=(se=F.parameters)==null?void 0:se.docs)==null?void 0:de.source}}};var ce,ue,pe;N.parameters={...N.parameters,docs:{...(ce=N.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
}`,...(pe=(ue=N.parameters)==null?void 0:ue.docs)==null?void 0:pe.source}}};var fe,ge,he;G.parameters={...G.parameters,docs:{...(fe=G.parameters)==null?void 0:fe.docs,source:{originalSource:`{
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
}`,...(he=(ge=G.parameters)==null?void 0:ge.docs)==null?void 0:he.source}}};var me,be,xe;I.parameters={...I.parameters,docs:{...(me=I.parameters)==null?void 0:me.docs,source:{originalSource:`{
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
}`,...(xe=(be=I.parameters)==null?void 0:be.docs)==null?void 0:xe.source}}};var _e,Ce,ye;L.parameters={...L.parameters,docs:{...(_e=L.parameters)==null?void 0:_e.docs,source:{originalSource:`{
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
}`,...(ye=(Ce=L.parameters)==null?void 0:Ce.docs)==null?void 0:ye.source}}};var we,ve,ke;$.parameters={...$.parameters,docs:{...(we=$.parameters)==null?void 0:we.docs,source:{originalSource:`{
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
}`,...(ke=(ve=$.parameters)==null?void 0:ve.docs)==null?void 0:ke.source}}};const jt=["Primary","Filtrable","Selectable","Multiselectable","Editable","Static_Content","Colspan","Custom_Content"];export{L as Colspan,$ as Custom_Content,G as Editable,M as Filtrable,N as Multiselectable,S as Primary,F as Selectable,I as Static_Content,jt as __namedExportsOrder,Kt as default};
