var Ae=Object.defineProperty;var Ve=(c,t,e)=>t in c?Ae(c,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):c[t]=e;var n=(c,t,e)=>(Ve(c,typeof t!="symbol"?t+"":t,e),e);import{d as A,k as W,M as U,a as v,o as d,c as f,b as D,u as s,l as C,f as k,t as $,n as E,j as K,F as O,h as z,N as ke,g as P,e as j,H as Te,O as q,P as Pe,Q as Be,R as Se,C as Me,I as Ne,J as Fe,m as Ge,y as X,S as Y,U as Ie}from"./vue.esm-bundler-d08935b9.js";import{V as Le,v as $e}from"./VrxSelect-73373089.js";import{V as Ee}from"./VrxInput-b641997e.js";import{V as Z}from"./VrxIcon-37b9b772.js";/* empty css                                                                */import{_ as V}from"./_plugin-vue_export-helper-c27b6911.js";import{a as R}from"./styles-1a51a98b.js";import{_ as De}from"./VrxButton.vue_vue_type_script_setup_true_lang-12fe1b33.js";/* empty css                                                                  *//* empty css                                                                  */import{V as Oe}from"./VrxDatePicker-e8bc27cf.js";/* empty css                                                                     *//* empty css                                                                  *//* empty css              */import"./appendToBody-70f0f50f.js";import"./v4-4a60fe23.js";import"./_commonjsHelpers-725317a4.js";class ze{constructor(t){n(this,"_id");n(this,"_text");n(this,"_type");n(this,"_align");n(this,"_sortable");n(this,"_sortFunction");n(this,"_sortDirection");n(this,"_width");n(this,"_filterType");n(this,"_filterPlaceholder");n(this,"_customFilter");n(this,"_headerConfig");n(this,"_icon");n(this,"_colspan");this._id=t.id,this._text=t.text,this._type=t.type,this._align=t.align,this._sortable=t.sortable,this._sortFunction=t.sortFunction,this._sortDirection=t.sortDirection,this._width=t.width,this._filterType=t.filterType,this._filterPlaceholder=t.filterPlaceholder,this._customFilter=t.customFilter,this._headerConfig=t,this._icon=t.icon,this._colspan=t.colspan}get id(){return this._id}get text(){return this._text}get filterType(){return this._filterType??null}get filterPlaceholder(){return this._filterPlaceholder??null}get sortable(){return this._sortable??!1}get sortDirection(){return this._sortDirection??null}get icon(){return this._icon??null}get colspan(){return this._colspan??void 0}get textAlignmentClass(){switch(this._align){case"left":return"text-left";case"center":return"text-center";case"right":return"text-right";default:return null}}get width(){return this._width}sortClicked(t,e){this._sortable&&(this._sortDirection=this._sortDirection==="asc"?"desc":"asc",this._headerConfig.sortDirection=this._sortDirection,this._resetSortDirection(t,[this._id]),this._sortFunction?this._useCustomSorting(e):this._useDefaultSorting(e))}_useDefaultSorting(t){t.sort((e,l)=>e.data[this._id]<l.data[this._id]?this._sortDirection==="asc"?1:-1:e.data[this._id]>l.data[this._id]?this._sortDirection==="asc"?-1:1:0)}_useCustomSorting(t){this._sortFunction&&t&&t.sort(this._sortFunction)}_resetSortDirection(t,e=[]){t.header.forEach(l=>{e.includes(l.id)||(l.sortDirection=void 0)})}getSelectableItems(t){const e=[];return t?(t.forEach(l=>{!e.find(o=>o.value===l.data[this._id])&&l.data[this._id]!==null&&l.data[this._id]!==void 0&&(typeof l.data[this._id]=="boolean"?e.push({value:l.data[this._id],label:l.data[this._id]?"true":"false"}):e.push({value:l.data[this._id],label:l.data[this._id]}))}),e.sort((l,o)=>l.label.localeCompare(o.label))):e}filterByValue(t,e){const l=t.find(o=>o.cellId===this._id);l&&e===""&&t.splice(t.indexOf(l),1),l?l.value=e:t.push({cellId:this._id,value:e})}}const He=["colspan"],Ue={class:"flex flex-row gap-1.5 items-center"},Ke={class:"vrx-grid-label"},je=A({__name:"VrxGridHeaderCell",props:{gridConfig:{},headerConfig:{},gridData:{}},setup(c){const t=c;W(r=>({d2d4f29a:s(a).width+"px"}));const e=U("filters");let l=v(""),o=v([]);const a=new ze(t.headerConfig);return(r,g)=>(d(),f("th",{scope:"col",class:E(["px-3 py-3 vrx-th header-th",s(a).textAlignmentClass]),colspan:s(a).colspan},[D("div",{class:E(["vrx-header-cell",s(a).filterType?"mb-2":null]),onClick:g[0]||(g[0]=x=>s(a).sortClicked(t.gridConfig,t.gridData))},[D("span",Ue,[s(a).icon?(d(),C(Z,{key:0,icon:s(a).icon,size:"4"},null,8,["icon"])):k("",!0),D("span",Ke,$(s(a).text),1)]),s(a).sortable?(d(),C(Z,{key:0,icon:r.headerConfig.sortDirection==="asc"?"chevron-up":r.headerConfig.sortDirection==="desc"?"chevron-down":"empty",size:"3"},null,8,["icon"])):k("",!0)],2),s(a).filterType==="text"?(d(),C(Ee,{key:0,"model-value":s(l),height:30,class:"header-input",placeholder:s(a).filterPlaceholder??"...",type:"text",onInput:g[1]||(g[1]=x=>s(a).filterByValue(s(e),x.target.value))},null,8,["model-value","placeholder"])):k("",!0),s(a).filterType==="select"?(d(),C(Le,{key:1,"list-data":s(a).getSelectableItems(r.gridData),"model-value":s(o),placeholder:s(a).filterPlaceholder??"...",class:"header-input",height:30,"on-select":x=>s(a).filterByValue(s(e),x.value),"on-clear":()=>s(a).filterByValue(s(e),""),searchable:!0},null,8,["list-data","model-value","placeholder","on-select","on-clear"])):k("",!0)],10,He))}}),We=V(je,[["__scopeId","data-v-6c128075"]]),Je={"data-testid":"vrx-grid-header",class:"text-xs vrxgrid-header-style uppercase vrx-table"},Qe=A({__name:"VrxGridHeader",props:{gridConfig:{},gridData:{}},setup(c){const t=c,e=K(()=>{let l=[],o=0;for(;o<t.gridConfig.header.length;){const a=t.gridConfig.header[o],r=a.colspan||1;l.push(a),o+=r}return l});return(l,o)=>(d(),f("thead",Je,[D("tr",null,[(d(!0),f(O,null,z(e.value,a=>(d(),C(We,{"grid-config":l.gridConfig,"header-config":a,"grid-data":l.gridData},null,8,["grid-config","header-config","grid-data"]))),256))])]))}}),qe=V(Qe,[["__scopeId","data-v-b28b9008"]]);class Xe{constructor(t,e,l,o,a,r){n(this,"_id");n(this,"_textColor");n(this,"_backgroundColor");n(this,"_data");n(this,"_filters");n(this,"_selectedRows");n(this,"_selectable");n(this,"_multiselect");n(this,"_headerConfig");n(this,"_componentProps");this._id=t.id,this._textColor=t.textColor,this._backgroundColor=t.backgroundColor,this._data=t.data,this._filters=e,this._selectedRows=l,this._selectable=o,this._multiselect=a,this._headerConfig=r,this._componentProps=t.componentProps}getCellContent(t){const e=this._headerConfig.find(l=>l.id.toLowerCase()===t.toLowerCase());return e!=null&&e.template?e==null?void 0:e.template({id:this._id,data:this._data}):this._data[t]}get textColor(){return this._textColor}get componentProps(){return this._componentProps}get backgroundColor(){return this._backgroundColor}get id(){return this._id}get data(){return this._data}get selectable(){return this._selectable}rowClicked(){const t=this._selectedRows.find(e=>e.id===this._id);if(!this._multiselect){if(t){const e=this._selectedRows.indexOf(t);this._selectedRows.splice(e,1);return}this._selectedRows.splice(0,this._selectedRows.length),this._selectedRows.push(this);return}if(!t)this._selectedRows.push(this);else{const e=this._selectedRows.indexOf(t);this._selectedRows.splice(e,1)}}isFiltered(){let t=!1;return this._filters.forEach(e=>{var o;const l=(o=this._headerConfig.find(a=>a.id===e.cellId))==null?void 0:o.customFilter;t||(t=l?l(this,e):this._defaultFilter(e))}),t}isSelected(){return!!this._selectedRows.find(e=>e.id===this._id)}hasTemplate(t){const e=this._headerConfig.find(l=>l.id.toLowerCase()===t.toLowerCase());return!!(e!=null&&e.template)}getProps(t){const e=this._headerConfig.find(l=>l.id.toLowerCase()===t.toLowerCase());if(e!=null&&e.componentProps)return e==null?void 0:e.componentProps({id:this._id,data:this._data});console.warn(`No component props found for cell ${t}, you must provide a componentProps function in the header configuration`)}_defaultFilter(t){return typeof t.value=="boolean"?this._data[t.cellId]!==t.value:!this._data[t.cellId].toString().toLowerCase().includes(t.value.toLowerCase())}}const Ye={left:"text-left",right:"text-right",center:"text-center"},Ze={key:0},et={key:1,class:"vrx-grid-cell-content"},tt=["value"],lt={key:2},at={key:2},it=["disabled"],rt=["innerHTML"],ot=A({__name:"VrxGridCell",props:{row:{},cell:{}},emits:["cellClicked","cellDoubleClicked"],setup(c,{emit:t}){const e=c;W(i=>({"3af1fef1":i.cell.width+"px"}));const l=v(!1),o=v(),a=v();ke(()=>{R&&R.colors&&(a.value=R.colors)});const r=()=>{let i=e.cell.align?Ye[e.cell.align]:"";return i+=e.cell.editable&&l.value?" vrxgrid-editing-cell-style":"",i+=e.cell.type==="static"?" py-2":" py-4",e.cell.type==="boolean"&&(i+=" flex justify-center"),i},g=()=>{e.cell.type==="boolean"&&e.cell.editable&&(e.row.data[e.cell.id]=!e.row.data[e.cell.id]),t("cellClicked",{cellId:e.cell.id,rowId:e.row.id,value:e.cell.type==="static"?e.cell.staticHTML:e.row.data[e.cell.id]})},x=()=>{t("cellDoubleClicked",{cellId:e.cell.id,rowId:e.row.id,value:e.cell.type==="static"?e.cell.staticHTML:e.row.data[e.cell.id]}),e.cell.type!=="boolean"&&(l.value=!0),setTimeout(()=>{e.cell.editable&&e.cell.editType==="text"&&o.value.focus()},100)},h=()=>{l.value=!1},T=i=>{i.key==="Enter"&&(i.preventDefault(),l.value=!1)};return(i,p)=>P((d(),f("td",{class:E(["px-3 font-medium whitespace-nowrap",r()]),onDblclick:x,onClick:g,onKeydown:p[4]||(p[4]=m=>T(m))},[i.cell.type==="button"?(d(),f("span",Ze,[j(De,q(Pe({...i.row.getProps(i.cell.id),markRaw:!0})),{default:Te(()=>[Ge($(i.row.getCellContent(i.cell.id)),1)]),_:1},16)])):!i.cell.type||i.cell.type==="text"?(d(),f("span",et,[i.cell.editable&&l.value&&i.cell.editType==="text"?P((d(),f("input",{key:0,ref_key:"input",ref:o,"onUpdate:modelValue":p[0]||(p[0]=m=>i.row.data[i.cell.id]=m),class:"edit-input"},null,512)),[[Be,i.row.data[i.cell.id]]]):i.cell.editable&&i.cell.editType==="select"?P((d(),f("select",{key:1,"onUpdate:modelValue":p[1]||(p[1]=m=>i.row.data[i.cell.id]=m),class:"edit-input",onFocus:p[2]||(p[2]=m=>l.value=!0)},[(d(!0),f(O,null,z(e.cell.editOptions,m=>(d(),f("option",{value:m.value},$(m.text),9,tt))),256))],544)),[[Se,i.row.data[i.cell.id]]]):(d(),f("span",lt,$(i.row.getCellContent(i.cell.id)),1))])):i.cell.type==="boolean"?(d(),f("span",at,[P(D("input",{disabled:!i.cell.editable,type:"checkbox","onUpdate:modelValue":p[3]||(p[3]=m=>i.row.data[i.cell.id]=m),class:"edit-input"},null,8,it),[[Me,i.row.data[i.cell.id]]])])):i.cell.type==="component"?(d(),C(Fe(i.cell.component),q(Ne({key:3},i.row.getProps(i.cell.id))),null,16)):i.cell.type==="static"?(d(),f("div",{key:4,innerHTML:i.cell.staticHTML},null,8,rt)):k("",!0)],34)),[[s($e),h]])}}),st=V(ot,[["__scopeId","data-v-4860d09c"]]),nt=["data-testid"],dt=A({__name:"VrxGridRow",props:{row:{},headerConfig:{},selectable:{type:Boolean},multiselect:{type:Boolean}},emits:["rowClicked","cellClicked","cellDoubleClicked"],setup(c,{emit:t}){const e=c;W(p=>({"560a3dad":a.value.secondary[500],"321776b2":s(h).textColor,"1162f251":s(h).backgroundColor}));const l=U("filters"),o=U("selectedRows"),a=v();ke(()=>{R&&R.colors&&(a.value=R.colors)});const r=()=>{h.rowClicked(),t("rowClicked",h)},g=p=>{t("cellClicked",p)},x=p=>{t("cellDoubleClicked",p)},h=new Xe(e.row,l,o,e.selectable??!1,e.multiselect??!1,e.headerConfig),T=K(()=>h.isFiltered()),i=K(()=>h.selectable?h.isSelected()?"selected dark:selected vrxgrid-selected-style vrxgrid-selectedable-style":"not-selected dark:not-selected vrxgrid-selectedable-style":"not-selected dark:not-selected");return(p,m)=>T.value?k("",!0):(d(),f("tr",{key:0,"data-testid":"vrx-grid-row-"+s(h).id,class:E(["vrxgrid-row-style border-b vrx-row",i.value]),onClick:r},[(d(!0),f(O,null,z(p.headerConfig,J=>(d(),C(st,{row:s(h),cell:J,onCellClicked:g,onCellDoubleClicked:x},null,8,["row","cell"]))),256))],10,nt))}}),ct=V(dt,[["__scopeId","data-v-0235e66f"]]),ut={style:{"overflow-y":"scroll"}},pt=A({__name:"VrxGridBody",props:{modelValue:{},gridData:{}},emits:["rowClicked","cellClicked","cellDoubleClicked"],setup(c,{emit:t}){const e=a=>{t("rowClicked",a)},l=a=>{t("cellClicked",a)},o=a=>{t("cellDoubleClicked",a)};return(a,r)=>(d(),f("tbody",ut,[(d(!0),f(O,null,z(a.gridData,g=>(d(),C(ct,{row:g,"header-config":a.modelValue.header,key:g.id,selectable:a.modelValue.selectable,multiselect:a.modelValue.multiselect,onRowClicked:x=>e(g),onCellClicked:l,onCellDoubleClicked:o},null,8,["row","header-config","selectable","multiselect","onRowClicked"]))),128))]))}}),ft=V(pt,[["__scopeId","data-v-2e007b02"]]);class gt{constructor(t,e){n(this,"_configuration");n(this,"_filters");n(this,"_selectedRows");n(this,"_data");this._configuration=t,this._filters=X([]),this._selectedRows=X([]),this._data=e}get configuration(){return this._configuration}get filters(){return this._filters}get data(){return this._data}get selectedRows(){return this._selectedRows}set filters(t){this.deselectAll(),this._filters=t}set selectedRows(t){this._selectedRows=t}selectAll(){if(this._configuration.multiselect===!1){console.warn(`Multiselection in grid "${this._configuration.id}" is disabled. No rows will be selected`);return}this.deselectAll(),this._data.forEach(t=>{this._selectedRows.push({...t})})}getRowById(t){return this._data.find(e=>e.id===t)}deselectAll(){this._selectedRows.splice(0,this._selectedRows.length)}resetFilters(){this._filters.splice(0,this._filters.length)}clearData(){this.deselectAll(),this.resetFilters(),this._data.splice(0,this._data.length)}updateData(t){t.forEach(e=>{const l=this._data.find(o=>o.id===e.id);if(l){const o=this._data.indexOf(l);this._data.splice(o,1,e)}else this._data.push(e)})}setData(t){this.clearData(),t.forEach(e=>{this._data.push(e)})}selectRange(t,e){let l=t,o=e;t>e&&(l=e,o=t),this._filters.splice(0,this._filters.length),this.deselectAll();for(let a=l;a<=o;a++)this._selectedRows.push(this._data[a])}}const ht={class:"w-full text-sm text-left vrxgrid-row-text-style","aria-describedby":"vrx-table-grid"},mt=A({__name:"VrxGrid",props:{gridConfiguration:{},gridData:{}},emits:["rowClicked","cellClicked","cellDoubleClicked"],setup(c,{expose:t,emit:e}){const l=c,o=u=>{(u.ctrlKey||u.metaKey)&&u.key==="a"&&(u.preventDefault(),r.selectAll())},a=u=>{if(u.shiftKey&&r.configuration.multiselect){u.preventDefault();const b=r.selectedRows.length;if(b>=2){let _=r.data.find(H=>H.id===r.selectedRows[0].id),Q=r.data.find(H=>H.id===r.selectedRows[b-1].id);_&&Q&&r.selectRange(r.data.indexOf(_),r.data.indexOf(Q))}}},r=new gt(l.gridConfiguration,l.gridData);Y("filters",r.filters),Y("selectedRows",r.selectedRows);const g=u=>{e("rowClicked",u)},x=u=>{e("cellClicked",u)},h=u=>{e("cellDoubleClicked",u)};return t({getSelectedRows:()=>r.selectedRows,getFilters:()=>r.filters,setData:u=>{r.setData(u)},resetFilters:()=>{r.resetFilters()},deselectAll:()=>{r.deselectAll()},selectAll:()=>{r.selectAll()},clearData:()=>{r.clearData()},updateData:u=>{r.updateData(u)},selectRange:(u,b)=>{r.selectRange(u,b)},getData:()=>r.data,getRowById:u=>r.getRowById(u)}),(u,b)=>(d(),f("div",{"data-testid":"vrx-grid",onKeydown:b[2]||(b[2]=_=>o(_)),onClick:b[3]||(b[3]=_=>a(_)),class:"table-outline relative overflow-x-auto h-full shadow-md w-full vrxgrid-bg-style",tabindex:"1"},[D("table",ht,[j(qe,{"grid-config":s(r).configuration,"onUpdate:gridConfig":b[0]||(b[0]=_=>s(r).configuration=_),"grid-data":s(r).data},null,8,["grid-config","grid-data"]),j(ft,{modelValue:s(r).configuration,"onUpdate:modelValue":b[1]||(b[1]=_=>s(r).configuration=_),"grid-data":s(r).data,onRowClicked:g,onCellClicked:x,onCellDoubleClicked:h},null,8,["modelValue","grid-data"])])],32))}}),Re=V(mt,[["__scopeId","data-v-3a3a4c45"]]),Ot={title:"VrxGrid",component:Re,tags:["autodocs"],argTypes:{}},y=[{id:"1",data:{active:!0,name:"Mario Rossi",serialNumber:1,color:"Red",model:"Fiat",plate:"AA123AA",actions:"Ciao"}},{id:"2",data:{active:!0,name:"Pino Verdi",serialNumber:2,color:"Black",model:"Audi",plate:"AA123BB"}},{id:"3",data:{active:!1,name:"Ciro Bianchi",serialNumber:3,color:"Green",model:"BMW",plate:"AA123CC"}},{id:"4",data:{active:!1,name:"Luisa Neri",serialNumber:4,color:"Gray",model:"Renault",plate:"AA123DD"}},{id:"5",data:{active:!1,name:"Giovanni Gialli",serialNumber:5,color:"Gray",model:"Toyota",plate:"BC123EE"}}],w={render:c=>({components:{VrxGrid:Re,VrxButton:De},setup(){return{args:c}},methods:{logItem(){alert(this.$refs.myRef.getSelectedRows().map(t=>t.data.name).join(", "))},setData(t){this.$refs.myRef.setData(t)},selectAll(){this.$refs.myRef.selectAll()},deselectAll(){this.$refs.myRef.deselectAll()},updateData(t){this.$refs.myRef.updateData(t)},clearData(){this.$refs.myRef.clearData()}},template:`
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
        `}),args:{}},B={...w,args:{gridConfiguration:{id:"test",selectable:!1,multiselect:!1,header:[{text:"Active",id:"active",align:"center",type:"boolean",editable:!1,sortable:!0,width:100},{text:"Name",id:"name",align:"left",sortable:!0,type:"text"},{text:"Color",id:"color",align:"left",sortable:!0},{text:"Model",id:"model",align:"left",sortable:!0},{text:"Plate",id:"plate",align:"left",sortable:!0}]},gridData:y}},S={...w,args:{gridConfiguration:{id:"test",selectable:!1,multiselect:!1,header:[{text:"Active",id:"active",align:"center",type:"boolean",editable:!1,sortable:!0,width:150,filterType:"select"},{text:"Name",id:"name",align:"left",sortable:!0,type:"text",filterType:"text",filterPlaceholder:"Search by name"},{text:"Color",id:"color",align:"left",sortable:!0,filterType:"select",width:150},{text:"Model",id:"model",align:"left",sortable:!0,filterType:"select",width:150},{text:"Plate",id:"plate",align:"left",sortable:!0,filterType:"text"}]},gridData:y}},M={...w,args:{gridConfiguration:{id:"test",selectable:!0,multiselect:!1,header:[{text:"Active",id:"active",align:"center",type:"boolean",editable:!1,sortable:!0,width:100},{text:"Name",id:"name",align:"left",sortable:!0,type:"text"},{text:"Color",id:"color",align:"left",sortable:!0},{text:"Model",id:"model",align:"left",sortable:!0},{text:"Plate",id:"plate",align:"left",sortable:!0}]},gridData:y}},N={...w,args:{gridConfiguration:{id:"test",selectable:!0,multiselect:!0,header:[{text:"Active",id:"active",align:"center",type:"boolean",editable:!1,sortable:!0,width:100},{text:"Name",id:"name",align:"left",sortable:!0,type:"text"},{text:"Color",id:"color",align:"left",sortable:!0},{text:"Model",id:"model",align:"left",sortable:!0},{text:"Plate",id:"plate",align:"left",sortable:!0}]},gridData:y}},F={...w,args:{gridConfiguration:{id:"test",selectable:!1,multiselect:!1,header:[{text:"Active",id:"active",align:"center",type:"boolean",editable:!0,sortable:!0,width:100},{text:"Name",id:"name",align:"left",sortable:!0,type:"text",editable:!0,editType:"text",width:200},{text:"Color",id:"color",align:"left",sortable:!0,editable:!0,editType:"select",editOptions:[{text:"Red",value:"Red"},{text:"Black",value:"Black"},{text:"Green",value:"Green"},{text:"Gray",value:"Gray"}]},{text:"Model",id:"model",align:"left",sortable:!0,editable:!0,editType:"text",width:200},{text:"Plate",id:"plate",align:"left",sortable:!0}]},gridData:y}},G={...w,args:{gridConfiguration:{id:"test",selectable:!1,multiselect:!1,header:[{text:"Active",id:"active",align:"center",type:"boolean",sortable:!0,width:100},{text:"Name",id:"name",align:"left",sortable:!0,type:"text",width:200},{text:"Color",id:"color",align:"left",sortable:!0},{text:"Model",id:"model",align:"left",sortable:!0,width:200},{text:"Plate",id:"plate",align:"left",sortable:!0},{text:"Actions",id:"actions",align:"center",type:"static",staticHTML:"<button class='border rounded-md p-1 hover:text-blue-700 hover:border-blue-700 dark:hover:text-blue-500 dark:hover:border-blue-500 w-24'>✍🏻 Edit</button>"}]},gridData:y}},I={...w,args:{gridConfiguration:{id:"test",selectable:!1,multiselect:!1,header:[{text:"Active",id:"active",align:"center",type:"boolean",width:100},{text:"Name",id:"name",align:"left",sortable:!0,type:"text",width:200},{text:"Color",id:"color",align:"left",sortable:!0},{text:"Plate",id:"plate",align:"left",sortable:!0},{text:"Actions",id:"actions",align:"center",type:"static",staticHTML:"<button class='border rounded-md p-1 hover:text-blue-700 hover:border-blue-700 dark:hover:text-blue-500 dark:hover:border-blue-500 w-24'>✍🏻 Edit</button>",colspan:2,width:120},{text:"",id:"actions2",align:"center",type:"static",staticHTML:"<button class='border rounded-md p-1 hover:text-blue-700 hover:border-blue-700 dark:hover:text-blue-500 dark:hover:border-blue-500 w-24''>🗑️ Delete</button>",width:120}]},gridData:y}},L={...w,args:{gridConfiguration:{id:"test",selectable:!1,multiselect:!1,header:[{text:"Active",id:"active",align:"center",type:"boolean",width:100},{text:"Name",id:"name",align:"left",sortable:!0,type:"text",width:200},{text:"Color",id:"color",align:"left",sortable:!0},{text:"Plate",id:"plate",align:"left",sortable:!0},{text:"Actions",id:"actions",align:"center",type:"component",component:Ie(Oe),componentProps:c=>({type:"date",placeholder:"Select a date",date:v(new Date)})}]},gridData:y}};var ee,te,le;B.parameters={...B.parameters,docs:{...(ee=B.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(le=(te=B.parameters)==null?void 0:te.docs)==null?void 0:le.source}}};var ae,ie,re;S.parameters={...S.parameters,docs:{...(ae=S.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
}`,...(re=(ie=S.parameters)==null?void 0:ie.docs)==null?void 0:re.source}}};var oe,se,ne;M.parameters={...M.parameters,docs:{...(oe=M.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(ne=(se=M.parameters)==null?void 0:se.docs)==null?void 0:ne.source}}};var de,ce,ue;N.parameters={...N.parameters,docs:{...(de=N.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
}`,...(ue=(ce=N.parameters)==null?void 0:ce.docs)==null?void 0:ue.source}}};var pe,fe,ge;F.parameters={...F.parameters,docs:{...(pe=F.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
}`,...(ge=(fe=F.parameters)==null?void 0:fe.docs)==null?void 0:ge.source}}};var he,me,be;G.parameters={...G.parameters,docs:{...(he=G.parameters)==null?void 0:he.docs,source:{originalSource:`{
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
}`,...(be=(me=G.parameters)==null?void 0:me.docs)==null?void 0:be.source}}};var xe,_e,Ce;I.parameters={...I.parameters,docs:{...(xe=I.parameters)==null?void 0:xe.docs,source:{originalSource:`{
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
}`,...(Ce=(_e=I.parameters)==null?void 0:_e.docs)==null?void 0:Ce.source}}};var ye,we,ve;L.parameters={...L.parameters,docs:{...(ye=L.parameters)==null?void 0:ye.docs,source:{originalSource:`{
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
}`,...(ve=(we=L.parameters)==null?void 0:we.docs)==null?void 0:ve.source}}};const zt=["Primary","Filtrable","Selectable","Multiselectable","Editable","Static_Content","Colspan","Custom_Content"];export{I as Colspan,L as Custom_Content,F as Editable,S as Filtrable,N as Multiselectable,B as Primary,M as Selectable,G as Static_Content,zt as __namedExportsOrder,Ot as default};
//# sourceMappingURL=VrxGrid.stories-c640e44d.js.map
