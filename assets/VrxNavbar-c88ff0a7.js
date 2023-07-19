import{j as n}from"./jsx-runtime-94f6e698.js";import{M as i}from"./index-a405c44a.js";import{u as r}from"./index-1d576ef5.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./iframe-1f9a7efc.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-d37d4223.js";import"./index-9012fc25.js";import"./assert-a1982797.js";import"./index-356e4a49.js";function o(e){const t=Object.assign({h1:"h1",p:"p",pre:"pre",code:"code",blockquote:"blockquote",h2:"h2",h3:"h3"},r(),e.components);return n.jsxs(n.Fragment,{children:[n.jsx(i,{title:"VrxNavbar/About"}),`
`,n.jsx(t.h1,{id:"vireoxnavbar",children:"VireoxNavbar"}),`
`,n.jsx(t.p,{children:"VireoxNavbar is a customizable component for using a navigation menu."}),`
`,n.jsx(t.p,{children:"To use it, import the component and use it as follows:"}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-js",children:`import {VrxNavbar} from 'vireoxlibrary';

<VrxNavbar buttons="[ ... ]"  >
    <template v-slot:leftComponent>
    </template>
</VrxNavbar>
`})}),`
`,n.jsxs(t.blockquote,{children:[`
`,n.jsxs(t.p,{children:["The ",n.jsx(t.code,{children:"buttons"})," prop must be an array ",n.jsx(t.code,{children:"[]"})," of objects of type ",n.jsx(t.code,{children:"NavbarButton"}),". Below are the interfaces to use when configuring the navbar."]}),`
`]}),`
`,n.jsx("br",{}),`
`,n.jsx(t.h2,{id:"️-configuration",children:"⚙️ Configuration"}),`
`,n.jsx("br",{}),`
`,n.jsx(t.h3,{id:"navbarbutton",children:"NavbarButton"}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-js",children:`type NavbarButton = {
    text: string;                               // Button text
    icon: IconLibraryType | string;             // [optional] Button icon or SVG path
    component: ComponentInterface;              // [optional] Component to be inserted into the button
    children: FirstLayerButton[];               // [optional] Sub-buttons of the button
}

`})}),`
`,n.jsx(t.h3,{id:"navbarfirstlayerbutton",children:"NavbarFirstLayerButton"}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-js",children:`type NavbarSecondLayerButton = {
    text: string;                               // Button text
    description: string;                        // [optional] Button description
    icon: IconLibraryType | string;             // [optional] Button icon or SVG path
    component: ComponentInterface;              // [optional] Component to be inserted into the button
    children: SecondLayerButton[];              // [optional] Sub-buttons of the button
}
`})}),`
`,n.jsx(t.h3,{id:"navbarsecondlayerbutton",children:"NavbarSecondLayerButton"}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-js",children:`type NavbarSecondLayerButton = {
    text: string;                               // Button text
    component: ComponentInterface;              // [optional] Component to be inserted into the button
}
`})}),`
`,n.jsx(t.h3,{id:"componentinterface",children:"ComponentInterface"}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-js",children:`type ComponentInterface = {
    component: Component;                       // Component object to be inserted into the button
    props: any;                                 // [optional] Object with props to be passed to the component
}
`})}),`
`,n.jsxs(t.blockquote,{children:[`
`,n.jsxs(t.p,{children:[`A component (primarily intended for routing) to be inserted into a navbar button. To display the button text and description, the passed component must have a slot.
It is recommended to use `,n.jsx(t.code,{children:"<NuxtLink> </NuxtLink>"})," or ",n.jsx(t.code,{children:'<router-link to="/"> </router-link>'})," for routing."]}),`
`]})]})}function f(e={}){const{wrapper:t}=Object.assign({},r(),e.components);return t?n.jsx(t,Object.assign({},e,{children:n.jsx(o,e)})):o(e)}export{f as default};
//# sourceMappingURL=VrxNavbar-c88ff0a7.js.map
