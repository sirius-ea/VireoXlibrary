import{j as e}from"./jsx-runtime-94f6e698.js";import{M as i}from"./index-253ebfbb.js";import{u as r}from"./index-1d576ef5.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./iframe-82b8f2ae.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-d37d4223.js";import"./index-9012fc25.js";import"./assert-a1982797.js";import"./index-356e4a49.js";function t(o){const n=Object.assign({h1:"h1",p:"p",pre:"pre",code:"code",strong:"strong"},r(),o.components);return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"VrxNavbar/About"}),`
`,e.jsx(n.h1,{id:"vireoxnavbar",children:"VireoxNavbar"}),`
`,e.jsx(n.p,{children:"VireoxNavbar è un componente personalizzabile per l'utilizzo di un menù di navigazione."}),`
`,e.jsx(n.p,{children:"Per utilizzarlo, importare il componente e utilizzarlo come segue:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import {VrxNavbar} from 'vireoxlibrary';

<VrxNavbar buttons="[ ... ]"  />
`})}),`
`,e.jsxs(n.p,{children:["La props ",e.jsx(n.code,{children:"buttons"})," deve essere un array ",e.jsx(n.code,{children:"[]"})," di oggetti di tipo ",e.jsx(n.code,{children:"NavbarButton"}),". Di seguito le interfacce da utilizzare durante lo sviluppo della configurazione della navbar."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"NavbarButton"}),`
Bottone principale della navbar.`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`type NavbarButton = {
    text: string;                               // Testo del bottone
    icon: IconLibraryType | string;             // [opzionale] Icona del bottone o path dell'SVG
    component: ComponentInterface;              // [opzionale] Componente da inserire nel bottone
    children: FirstLayerButton[];               // [opzionale] Sotto-bottoni del bottone
}
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"NavbarFirstLayerButton"}),`
Sotto-bottone figlio di un bottone principale. A sua volta può contenere un altro livello di sotto-bottoni.`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`type NavbarSecondLayerButton = {
    text: string;                               // Testo del bottone
    description: string;                        // [opzionale] Descrizione del bottone
    icon: IconLibraryType | string;             // [opzionale] Icona del bottone o path dell'SVG
    component: ComponentInterface;              // [opzionale] Componente da inserire nel bottone
    children: SecondLayerButton[];              // [opzionale] Sotto-bottoni del bottone
}
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"NavbarSecondLayerButton"}),`
Sotto-bottone figlio di un FirstLayerButton. Ultimo layer di bottoni.`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`type NavbarSecondLayerButton = {
    text: string;                               // Testo del bottone
    component: ComponentInterface;              // [opzionale] Componente da inserire nel bottone
}
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"ComponentInterface"}),`
Componente (pensato principalmente per il routing) da inserire all'interno di un bottone della navbar. Per visualizzare il testo e la descrizione del bottone, il componente passato `,e.jsx(n.strong,{children:"necessita"})," di uno ",e.jsx(n.code,{children:"slot"}),`.
Consigliato l'utilizzo di `,e.jsx(n.code,{children:"<NuxtLink> </NuxtLink>"})," o ",e.jsx(n.code,{children:'<router-link to="/"> </router-link>'})," per il routing."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`type ComponentInterface = {
    component: Component;                       // Oggetto componente da inserire nel bottone
    props: any;                                 // [opzionale] Oggetto con le props da passare al componente
}
`})})]})}function z(o={}){const{wrapper:n}=Object.assign({},r(),o.components);return n?e.jsx(n,Object.assign({},o,{children:e.jsx(t,o)})):t(o)}export{z as default};
//# sourceMappingURL=VrxNavbar-f0bc2cd7.js.map
