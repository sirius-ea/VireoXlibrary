import{j as e}from"./jsx-runtime-ffb262ed.js";import{M as r}from"./index-ef35b096.js";import{u as d}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-85d69747.js";import"../sb-preview/runtime.js";import"./index-11d98b33.js";import"./index-7486de94.js";import"./index-356e4a49.js";function i(t){const n=Object.assign({h1:"h1",p:"p",pre:"pre",code:"code",h2:"h2",h3:"h3",blockquote:"blockquote",strong:"strong",a:"a"},d(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"VrxGrid/About"}),`
`,e.jsx(n.h1,{id:"vireoxgrid",children:"VireoxGrid"}),`
`,e.jsx(n.p,{children:"VireoxGrid is a highly versatile component for working with grids."}),`
`,e.jsx(n.p,{children:"The component utilizes 100% of the available width and height. To use it, import it as follows:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import {VrxGrid} from 'vireoxlibrary';

const config : GridConfiguration = { ... }
const data : GridRow[] = [{ ... }]
<VrxGrid :grid-configuration="config" :grid-data="data"/>
`})}),`
`,e.jsx(n.h2,{id:"️-configuration",children:"⚙️ Configuration"}),`
`,e.jsx(n.p,{children:`The configuration is a complex object that allows you to configure the grid in every aspect.
Here are the types that need to be implemented:`}),`
`,e.jsx(n.h3,{id:"gridconfiguration",children:"GridConfiguration"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`type GridConfiguration {
    header: GridHeader[];                                                   // headers configuration
    id: string;                                                             // grid id
    multiselect: boolean;                                                   // [optional] enables multiselection
    selectable: boolean;                                                    // [optional] enable selection
}
`})}),`
`,e.jsx(n.h3,{id:"gridheader",children:"GridHeader"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`type GridHeader {
    align: "left" | "center" | "right";                                     // [optional] text alignment
    colspan: number;                                                        // [optional] colspan
    customFilter:                                                           // [optional] custom filtering function
        (row: GridRow, filter: {cellId: string, value: string}) => boolean;
    filterPlaceholder: string;                                              // [optional] filter placeholder text
    filterType: "text" | "select" | "date";                                 // [optional] filter type
    icon: IconLibraryType;                                                  // [optional] header icon
    id: string;                                                             // header id (data id should have the same id)
    sortDirection: "asc" | "desc" | null;                                   // [optional] sorting direction
    sortFunction:                                                           // [optional] custom sorting function
        (a: GridRow, b: GridRow) => 0 | 1 | -1;
    sortable: boolean;                                                      // [optional] enables column sorting
    staticHTML: string;                                                     // [optional] static html content
    text: string;                                                           // header text
    type: "text" | "component" | "static" | "boolean" | undefined;          // header type
    width: number;                                                          // [optional] column width in pixels
}
`})}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"static"})," type allows to use static HTML content to be displayed on every row. The content can be configured using the ",e.jsx(n.code,{children:"staticHTML"})," property and (currently) it ",e.jsx(n.strong,{children:"cannot include"})," custom Vue components."]}),`
`]}),`
`,e.jsx(n.h3,{id:"gridrow",children:"GridRow"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`type GridRow {
    id: string;                                                             // row id
    backgroundColor: string;                                                // [optional] background color
    componentProps: any;                                                    // [optional] object with component props
    data: {                                                                 // row data (object with key-value pairs)
        key: value,
        key: value,
        ...
    };
    textColor: string;                                                      // [optional] text color

}
`})}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["The keys inside ",e.jsx(n.code,{children:"data"})," must have the same ids as the headers, otherwise they will not be displayed."]}),`
`]}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h2,{id:"-api",children:"📜 API"}),`
`,e.jsxs("table",{style:{width:"100%"},children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("b",{children:"Method"})}),e.jsx("td",{children:e.jsx("b",{children:"Params"})}),e.jsx("td",{children:e.jsx("b",{children:"Return"})}),e.jsx("td",{children:e.jsx("b",{children:"Description"})})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"clearData"}),e.jsx("td",{children:"-"}),e.jsx("td",{children:"-"}),e.jsx("td",{children:"Clears the data from the grid"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"deselectAll"}),e.jsx("td",{children:"-"}),e.jsx("td",{children:"-"}),e.jsx("td",{children:"Deselect all rows"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"getData"}),e.jsx("td",{children:"-"}),e.jsx("td",{children:e.jsx(n.code,{children:"GridRow []"})}),e.jsx("td",{children:"Returns the data of the grid"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"getFilters"}),e.jsx("td",{children:"-"}),e.jsx("td",{children:e.jsx(n.code,{children:"GridFilter []"})}),e.jsx("td",{children:"Returns a list of currently applied filters"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"getSelectedItems"}),e.jsx("td",{children:"-"}),e.jsx("td",{children:e.jsx(n.code,{children:"GridRow []"})}),e.jsx("td",{children:"Returns a list of currently selected rows"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"getRowById"}),e.jsx("td",{children:e.jsx(n.code,{children:"id : number | string"})}),e.jsx("td",{children:e.jsx(n.code,{children:"GridRow | undefined"})}),e.jsx("td",{children:"Returns the row with the provided ID"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"resetFilters"}),e.jsx("td",{children:"-"}),e.jsx("td",{children:"-"}),e.jsx("td",{children:"Resets the applied filters"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"selectAll"}),e.jsx("td",{children:"-"}),e.jsx("td",{children:"-"}),e.jsx("td",{children:"Selects all rows"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"selectRange"}),e.jsx("td",{children:e.jsx(n.code,{children:"index1 : number, index2: number"})}),e.jsx("td",{children:"-"}),e.jsx("td",{children:"Selects rows within the specified index range"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"setData"}),e.jsx("td",{children:e.jsx(n.code,{children:"data : GridRow[]"})}),e.jsx("td",{children:"-"}),e.jsx("td",{children:"Sets new data in the grid"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"updateData"}),e.jsx("td",{children:e.jsx(n.code,{children:"data : GridRow[]"})}),e.jsx("td",{children:"-"}),e.jsx("td",{children:"Updates the grid data"})]})]})]}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h2,{id:"-custom-events",children:"🪄 Custom Events"}),`
`,e.jsxs(n.p,{children:["The following custom events are emitted by the component and can be used with ",e.jsx(n.code,{children:'@event-name="..."'}),":"]}),`
`,e.jsxs("table",{style:{width:"100%"},children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("b",{children:"Event"})}),e.jsx("td",{children:e.jsx("b",{children:"Params"})}),e.jsx("td",{children:e.jsx("b",{children:"Return"})}),e.jsx("td",{children:e.jsx("b",{children:"Description"})})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"@cell-double-clicked"}),e.jsx("td",{children:"-"}),e.jsx("td",{children:e.jsx(n.code,{children:"{cellId: string | number, rowId: string | number, value: any}"})}),e.jsx("td",{children:"Returns the content of the double-clicked cell"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"@cell-clicked"}),e.jsx("td",{children:"-"}),e.jsx("td",{children:e.jsx(n.code,{children:"{cellId: string | number, rowId: string | number, value: any}"})}),e.jsx("td",{children:"Returns the content of the clicked cell"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"@row-clicked"}),e.jsx("td",{children:"-"}),e.jsx("td",{children:e.jsx(n.code,{children:"GridRow"})}),e.jsx("td",{children:"Returns the clicked row"})]})]})]}),`
`,e.jsx("br",{}),`
`,e.jsxs(n.p,{children:["For API's details and configuration please read the ",e.jsx(n.a,{href:"./?path=/docs/vrxgrid--docs",children:"documentation"})]})]})}function g(t={}){const{wrapper:n}=Object.assign({},d(),t.components);return n?e.jsx(n,Object.assign({},t,{children:e.jsx(i,t)})):i(t)}export{g as default};
