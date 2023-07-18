import{j as e}from"./jsx-runtime-94f6e698.js";import{M as d}from"./index-253ebfbb.js";import{u as l}from"./index-1d576ef5.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./iframe-82b8f2ae.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-d37d4223.js";import"./index-9012fc25.js";import"./assert-a1982797.js";import"./index-356e4a49.js";function r(n){const i=Object.assign({h1:"h1",p:"p",pre:"pre",code:"code",h2:"h2",strong:"strong",a:"a"},l(),n.components);return e.jsxs(e.Fragment,{children:[e.jsx(d,{title:"VrxGrid/About"}),`
`,e.jsx(i.h1,{id:"vireoxgrid",children:"VireoxGrid"}),`
`,e.jsx(i.p,{children:"VireoxGrid è un componente altamente versatile per l'utilizzo di griglie."}),`
`,e.jsx(i.p,{children:`Il componente utilizza il 100% della larghezza e dell'altezza disponibile.
Per utilizzarlo, importarlo come segue:`}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-js",children:`import {VrxGrid} from 'vireoxlibrary';

const config : GridConfiguration = { ... }
<VrxGrid :grid-configuration="config"/>
`})}),`
`,e.jsx(i.h2,{id:"configurazione",children:"Configurazione"}),`
`,e.jsx(i.p,{children:`La configurazione è un oggetto complesso che permette di configurare la griglia in ogni suo aspetto.
Seguono i tipi da implementare:`}),`
`,e.jsxs(i.p,{children:[e.jsx(i.code,{children:"GridConfiguration"}),": configurazione generale della griglia."]}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-js",children:`type GridConfiguration {
    id: string;                                // id della griglia
    header: GridHeader[];                      // configurazione degli header
    data: GridRow[];                           // dati della griglia
    multiselect: boolean;                      // [opzionale] abilita la multiselezione,
    selectable: boolean;                       // [opzionale] abilita la selezione
}
`})}),`
`,e.jsxs(i.p,{children:[e.jsx(i.code,{children:"GridHeader"}),": configurazione degli header della griglia."]}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-js",children:`type GridHeader {
    id: string;                                // id dell'header (i dati della colonna devono avere lo stesso id)
    text: string;                              // testo dell'header
    type: "text" | "component";                // tipo di header
    align: "left" | "center" | "right";        // [opzionale] allineamento del testo
    sortable: boolean;                         // [opzionale] abilita la possibilità di ordinare la colonna
    sortFunction:                              // [opzionale] funzione di ordinamento personalizzata
        (a: GridRow, b: GridRow) => 0 | 1 | -1;
    sortDirection: "asc" | "desc" | null;      // [opzionale] direzione di ordinamento
    width: number;                             // [opzionale] larghezza in px della colonna
    filterType: "text" | "select" | "date";    // [opzionale] tipo di filtro
    filterPlaceholder: string;                 // [opzionale] testo del placeholder del filtro
    customFilter:                              // [opzionale] funzione di filtro personalizzata
        (row: GridRow, filter: {cellId: string, value: string}) => boolean;
}
`})}),`
`,e.jsxs(i.p,{children:[e.jsx(i.code,{children:"GridRow"}),": configurazione delle righe della griglia."]}),`
`,e.jsxs(i.p,{children:[e.jsx(i.strong,{children:"NB"}),": le chiavi contenute dentro ",e.jsx(i.code,{children:"data"})," devono avere lo stesso id degli header, altrimenti non verranno visualizzate."]}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-js",children:`type GridRow {
    id: string;                                // id della riga
    textColor: string;                         // [opzionale] colore del testo
    backgroundColor: string;                   // [opzionale] colore di sfondo
    data: {                                    // dati della riga (oggetto con chiave: valore)
        key: value,
        key: value,
        ...
    };
}
`})}),`
`,e.jsx(i.h2,{id:"api",children:"API"}),`
`,e.jsxs("table",{style:{width:"100%"},children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("b",{children:"Method"})}),e.jsx("td",{children:e.jsx("b",{children:"Params"})}),e.jsx("td",{children:e.jsx("b",{children:"Return"})}),e.jsx("td",{children:e.jsx("b",{children:"Description"})})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"clearData"}),e.jsx("td",{children:"-"}),e.jsx("td",{children:"-"}),e.jsx("td",{children:"Rimuove i dati dalla griglia"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"deselectAll"}),e.jsx("td",{children:"-"}),e.jsx("td",{children:"-"}),e.jsx("td",{children:"Deseleziona tutte le righe"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"getFilters"}),e.jsx("td",{children:"-"}),e.jsx("td",{children:"GridFilter []"}),e.jsx("td",{children:"Ritorna una lista con le i filtri attualmente applicati"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"getSelectedItems"}),e.jsx("td",{children:"-"}),e.jsx("td",{children:"GridRow []"}),e.jsx("td",{children:"Ritorna una lista con le righe attualmente selezionate"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"resetFilters"}),e.jsx("td",{children:"-"}),e.jsx("td",{children:"-"}),e.jsx("td",{children:"Reimposta i filtri applicati"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"selectAll"}),e.jsx("td",{children:"-"}),e.jsx("td",{children:"-"}),e.jsx("td",{children:"Seleziona tutte le righe"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"selectRange"}),e.jsx("td",{children:"index1 : number, index2: number"}),e.jsx("td",{children:"-"}),e.jsx("td",{children:"Seleziona le righe di indice compreso tra i due valori"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"setData"}),e.jsx("td",{children:"data : GridRow[]"}),e.jsx("td",{children:"-"}),e.jsx("td",{children:"Imposta i nuovi dati nella griglia"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"updateData"}),e.jsx("td",{children:"data : GridRow[]"}),e.jsx("td",{children:"-"}),e.jsx("td",{children:"Aggiorna i dati della griglia"})]})]})]}),`
`,e.jsxs(i.p,{children:["Per dettagli sulle configurazioni leggere la ",e.jsx(i.a,{href:"./?path=/docs/vrxgrid--docs",children:"documentazione"})]})]})}function f(n={}){const{wrapper:i}=Object.assign({},l(),n.components);return i?e.jsx(i,Object.assign({},n,{children:e.jsx(r,n)})):r(n)}export{f as default};
//# sourceMappingURL=VrxGrid-683cd06c.js.map
