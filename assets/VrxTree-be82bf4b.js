import{j as e}from"./jsx-runtime-6eef64cc.js";import{M as d}from"./index-94017276.js";import{u as s}from"./index-dc1d5b46.js";import"./index-c013ead5.js";import"./_commonjsHelpers-725317a4.js";import"./iframe-c6f32c87.js";import"../sb-preview/runtime.js";import"./index-d37d4223.js";import"./index-f073aaf1.js";import"./index-356e4a49.js";function r(t){const n=Object.assign({h1:"h1",p:"p",pre:"pre",code:"code",h2:"h2",h3:"h3",blockquote:"blockquote",a:"a"},s(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(d,{title:"VrxTree/About"}),`
`,e.jsx(n.h1,{id:"vireoxtree",children:"VireoxTree"}),`
`,e.jsx(n.p,{children:"VireoxTree is a highly versatile component for working with tree structures."}),`
`,e.jsx(n.p,{children:"The component utilizes 100% of the available width and height. To use it, import it as follows:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import {VrxTree} from 'vireoxlibrary';

const data : VrxTreeNode[] = [ ... ]
<VrxTree :data="data"/>
`})}),`
`,e.jsx(n.h2,{id:"️-configuration",children:"⚙️ Configuration"}),`
`,e.jsx(n.p,{children:`The configuration is a complex object that allows you to configure the tree in multiple aspects.
Here are the types that need to be implemented:`}),`
`,e.jsx(n.h3,{id:"vrxtreenode",children:"VrxTreeNode"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`type VrxTreeNode {
    id: string;                                 // node id (can be anything, it will be replaced by the tree)
    text: string;                               // node displayed text
    icon: boolean;                              // [optional] node icon
    selected: boolean;                          // [optional] set the node as selected
    children: VrxTreeNode[];                    // node children
    userData: any;                              // [optional] optional user data
}
`})}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["If all children of a node are ",e.jsx(n.code,{children:"selected"})," please consider setting the parent node as ",e.jsx(n.code,{children:"selected"})," and not the single nodes."]}),`
`]}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h2,{id:"-api",children:"📜 API"}),`
`,e.jsxs("table",{style:{width:"100%"},children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("b",{children:"Method"})}),e.jsx("td",{children:e.jsx("b",{children:"Params"})}),e.jsx("td",{children:e.jsx("b",{children:"Return"})}),e.jsx("td",{children:e.jsx("b",{children:"Description"})})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"getSelectedNodes"}),e.jsx("td",{children:"-"}),e.jsx("td",{children:e.jsx(n.code,{children:"VrxTreeNode[] | any[]"})}),e.jsxs("td",{children:["Returns all selected nodes or if props ",e.jsx(n.code,{children:"returnUserData"})," is ",e.jsx(n.code,{children:"true"})," returns the content of ",e.jsx(n.code,{children:"userData"})," object"]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"getNodeByText"}),e.jsx("td",{children:e.jsx(n.code,{children:"text: string"})}),e.jsx("td",{children:e.jsx(n.code,{children:"VrxTreeNode | undefined"})}),e.jsx("td",{children:"Returns the node which has the given text"})]})]})]}),`
`,e.jsx("br",{}),`
`,e.jsxs(n.p,{children:["For API's details and configuration please read the ",e.jsx(n.a,{href:"./?path=/docs/vrxtree--docs",children:"documentation"})]})]})}function m(t={}){const{wrapper:n}=Object.assign({},s(),t.components);return n?e.jsx(n,Object.assign({},t,{children:e.jsx(r,t)})):r(t)}export{m as default};
//# sourceMappingURL=VrxTree-be82bf4b.js.map
