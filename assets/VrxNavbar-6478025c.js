import{j as e}from"./jsx-runtime-6eef64cc.js";import{M as a}from"./index-350dbb8b.js";import{u as i}from"./index-dc1d5b46.js";import"./index-c013ead5.js";import"./_commonjsHelpers-725317a4.js";import"./iframe-01e95d2b.js";import"../sb-preview/runtime.mjs";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-0fabcd9e.js";import"./index-356e4a49.js";function h(o={}){const{wrapper:t}=Object.assign({},i(),o.components);return t?e.jsx(t,Object.assign({},o,{children:e.jsx(r,{})})):r();function r(){const n=Object.assign({h1:"h1",p:"p",pre:"pre",code:"code",strong:"strong"},i(),o.components);return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"VrxNavbar/About"}),`
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
    icon: IconLibraryType;                      // [opzionale] Icona del bottone
    component: ComponentInterface;              // [opzionale] Componente da inserire nel bottone
    children: FirstLayerButton[];               // [opzionale] Sotto-bottoni del bottone
}
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"NavbarFirstLayerButton"}),`
Sotto-bottone figlio di un bottone principale. A sua volta può contenere un altro livello di sotto-bottoni.`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`type NavbarSecondLayerButton = {
    text: string;                               // Testo del bottone
    description: string;                        // [opzionale] Descrizione del bottone
    icon: IconLibraryType;                      // [opzionale] Icona del bottone
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
`})})]})}}export{h as default};
//# sourceMappingURL=VrxNavbar-6478025c.js.map
