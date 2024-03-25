import{j as t}from"./jsx-runtime-ffb262ed.js";import{M as i}from"./index-02051e24.js";import{u as o}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-1095977e.js";import"../sb-preview/runtime.js";import"./index-11d98b33.js";import"./index-7486de94.js";import"./index-356e4a49.js";function e(a){const n=Object.assign({h1:"h1",p:"p",pre:"pre",code:"code",ul:"ul",li:"li"},o(),a.components);return t.jsxs(t.Fragment,{children:[t.jsx(i,{title:"VrxTabbar/About"}),`
`,t.jsx(n.h1,{id:"vireox-tabbar",children:"Vireox Tabbar"}),`
`,t.jsx(n.p,{children:"Vireox Tabbar is a component that allows you to create a tabbar with a set of tabs. It is a simple and easy-to-use component that can be used in any Vue3 application."}),`
`,t.jsx(n.p,{children:"To use it, import the component and use it as follows:"}),`
`,t.jsx(n.pre,{children:t.jsx(n.code,{className:"language-js",children:`import {VrxTabbar, VrxTabList, VrxTabLink, VrxTabContent} from 'vireoxlibrary';

<VrxTabbar default-value="tab1">
    <VrxTabList>
        <VrxTabLink to="tab1">Tab 1</VrxTabLink>
        <VrxTabLink to="tab2">Tab 2</VrxTabLink>
        <VrxTabLink to="tab3">Tab 3</VrxTabLink>
    </VrxTabList>
    <VrxTabContent name="tab1">Tab 1 content</VrxTabContent>
    <VrxTabContent name="tab2">Tab 2 content</VrxTabContent>
    <VrxTabContent name="tab3">Tab 3 content</VrxTabContent>
</VrxTabbar>
`})}),`
`,t.jsx(n.p,{children:"The VrxTabbar component has the following subcomponents:"}),`
`,t.jsxs(n.ul,{children:[`
`,t.jsx(n.li,{children:"VrxTabList: Container for the tab links. It has a slot for putting the tab links and whatever you want to display"}),`
`,t.jsxs(n.li,{children:["VrxTabLink: The tab link. It has a slot for putting the tab name or whatever you want to display. It has a ",t.jsx(n.code,{children:"to"})," prop that should be set to the name of the tab content that should be displayed when the tab link is clicked"]}),`
`,t.jsxs(n.li,{children:["VrxTabContent: The tab content. It has a slot for putting the tab content. They are automatically displayed when the corresponding tab link is clicked. It has a ",t.jsx(n.code,{children:"name"})," prop that should be set to the name of the tab link that should display the content"]}),`
`]}),`
`,t.jsxs(n.p,{children:["The VrxTabbar has a mechanism to manage the active tab. You can set the default active tab by setting the ",t.jsx(n.code,{children:"default-value"}),` prop to the name of the tab you want to be active by default.
The component also checks if the tab links have a corresponding tab content. If not, it will print a warning in the console.
The same is true for the tab content. If a tab content does not have a corresponding tab link, it will print a warning in the console.`]}),`
`,t.jsx(n.p,{children:"On tab change, the VrxTabbar emits an event with the name of the tab that was clicked."})]})}function T(a={}){const{wrapper:n}=Object.assign({},o(),a.components);return n?t.jsx(n,Object.assign({},a,{children:t.jsx(e,a)})):e(a)}export{T as default};
