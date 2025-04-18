import{j as e}from"./jsx-runtime-ffb262ed.js";import{M as o}from"./index-1f04bfde.js";import{u as r}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-95fab385.js";import"../sb-preview/runtime.js";import"./index-11d98b33.js";import"./index-7486de94.js";import"./index-356e4a49.js";function t(d){const n=Object.assign({h1:"h1",p:"p",pre:"pre",code:"code",h3:"h3",ul:"ul",li:"li",h2:"h2",blockquote:"blockquote",a:"a"},r(),d.components);return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"VrxTree/About"}),`
`,e.jsx(n.h1,{id:"vireoxtree",children:"VireoxTree"}),`
`,e.jsx(n.p,{children:"VireoxTree is a highly versatile component for working with tree structures."}),`
`,e.jsx(n.p,{children:"The component utilizes 100% of the available width and height. To use it, import it as follows:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-vue",children:`import {VrxTree} from 'vireoxlibrary';

const data : VrxTreeNode[] = [ ... ]
<VrxTree v-model="data" :is-draggable :searchable :selectable/>
`})}),`
`,e.jsx(n.p,{children:"Here the list of the props that can be used to configure the tree:"}),`
`,e.jsx(n.h3,{id:"props",children:"Props"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"v-model"})," : VrxTreeNode[] - The tree data"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"is-draggable"})," : boolean - If true, the tree will be draggable"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"searchable"})," : boolean - If true, the tree will be searchable. An input will be displayed on top of the tree to search for nodes"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"selectable"})," : boolean - If true, the tree will be selectable. The user will be able to select nodes via checkboxes"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"toolbarClass"})," : string - The class to apply to the toolbar container"]}),`
`]}),`
`,e.jsx(n.p,{children:"VireoXtree has also the following slots:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"toolbar"})," : Slot to add a toolbar on top of the tree"]}),`
`]}),`
`,e.jsx(n.h2,{id:"️-configuration",children:"⚙️ Configuration"}),`
`,e.jsx(n.p,{children:`The configuration is a complex object that allows you to configure the tree in multiple aspects.
Here are the types that need to be implemented:`}),`
`,e.jsx(n.h3,{id:"vrxtreenode",children:"VrxTreeNode"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`type VrxTreeNode<T> = {
    id: string,                                 // node id (can be anything, it will be replaced by the tree)
    text: string,                               // node displayed text
    children: VrxTreeNode<T>[],                    // node children
    icon: boolean,                              // [optional] node icon
    selected: boolean,                          // [optional] set the node as selected
    open: boolean,                              // [optional] set the node as open
    disableDrag : boolean,                      // [optional] disable node drag
    userData: T,                              // [optional] optional user data
    asComponent: boolean,                       // [optional] if true, the node will be rendered as a component
    tooltip: string,                            // [optional] set a tooltip for the node
    component: string | object,                 // [optional] An HTML tag name, a Component name or Component class reference.
    componentProps: object,                     // [optional] props to pass to the component
    componentSlots: object,                     // [optional] slots to pass to the component
    rightSlot:boolean,                          // [optional] if true, the slot will be rendered on the right side of the node
    rightComponent: string | object,            // [optional] An HTML tag name, a Component name or Component class reference.
    rightComponentProps: object,                // [optional] props to pass to the component
}
`})}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["If all children of a node are ",e.jsx(n.code,{children:"selected"})," please consider setting the parent node as ",e.jsx(n.code,{children:"selected"})," and not the single nodes."]}),`
`]}),`
`,e.jsxs(n.p,{children:["VrxTreeNode accepts a generic type that can be used to define the type of the ",e.jsx(n.code,{children:"userData"})," property."]}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h2,{id:"-api",children:"📜 API"}),`
`,e.jsxs(n.p,{children:[`The grid exposes a set of methods that can be used to interact with the tree. For using them use
a reference to the component and call the method on it. For using with typescript, cast the reference to the `,e.jsx(n.code,{children:"IVrxTreeUseCase"})," interface."]}),`
`,e.jsx(n.h3,{id:"ivrxtreeusecase",children:"IVrxTreeUseCase"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`interface IVrxTreeUseCase {
    getSelectedNodes: () => VrxTreeNode[],
    getNodeByText: (text: string) => VrxTreeNode | undefined,
    getNodeById: (id: string) => VrxTreeNode | null,
    getNodePath: (nodeId: string) => String[],
    removeNodeById: (nodeId: string, isParent?: boolean) => void,
    addNode: (nodeId: string) => void,
    removeNode: (node: VrxTreeNode) => void,
    flattenTree: (node: VrxTreeNode) => VrxTreeNode[],
    getParentNode: (toFind: VrxTreeNode) => VrxTreeNode | null,
    clearSelectedNodes: () => void,
    setSelectedNode: (id: string, select:boolean) => void,
    expandAll: () => void,
    collapseAll: () => void,
}
`})}),`
`,e.jsx(n.h3,{id:"methods",children:"Methods"}),`
`,e.jsxs("table",{style:{width:"100%"},children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("b",{children:"Method"})}),e.jsx("td",{children:e.jsx("b",{children:"Params"})}),e.jsx("td",{children:e.jsx("b",{children:"Return"})}),e.jsx("td",{children:e.jsx("b",{children:"Description"})})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"getSelectedNodes"}),e.jsx("td",{children:"-"}),e.jsx("td",{children:e.jsx(n.code,{children:"VrxTreeNode[] | any[]"})}),e.jsxs("td",{children:["Returns all selected nodes or if props ",e.jsx(n.code,{children:"returnUserData"})," is ",e.jsx(n.code,{children:"true"})," returns the content of ",e.jsx(n.code,{children:"userData"})," object"]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"getNodeByText"}),e.jsx("td",{children:e.jsx(n.code,{children:"text: string"})}),e.jsx("td",{children:e.jsx(n.code,{children:"VrxTreeNode | undefined"})}),e.jsx("td",{children:"Returns the node which has the given text"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"getNodeById"}),e.jsx("td",{children:e.jsx(n.code,{children:"nodeId: string"})}),e.jsx("td",{children:e.jsx(n.code,{children:"VrxTreeNode | undefined"})}),e.jsx("td",{children:"Returns the node which has the given id"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"getNodePath"}),e.jsx("td",{children:e.jsx(n.code,{children:"nodeId : string"})}),e.jsx("td",{children:e.jsx(n.code,{children:"string[]"})}),e.jsx("td",{children:"Return the path to the node (concatenation of text of all elements from root to leaf)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"removeNodeById"}),e.jsx("td",{children:e.jsx(n.code,{children:"nodeId : string"})}),e.jsx("td",{children:"-"}),e.jsx("td",{children:"Remove the node with the given id"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"addNode"}),e.jsx("td",{children:e.jsx(n.code,{children:"nodeId : string"})}),e.jsx("td",{children:"-"}),e.jsx("td",{children:"Add node to the selected ones"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"removeNode"}),e.jsx("td",{children:e.jsx(n.code,{children:"node: VrxTreeNode"})}),e.jsx("td",{children:"-"}),e.jsx("td",{children:"Remove node from the selected ones"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"flattenTree"}),e.jsx("td",{children:e.jsx(n.code,{children:"node: VrxTreeNode"})}),e.jsx("td",{children:e.jsx(n.code,{children:"VrxTreeNode[]"})}),e.jsx("td",{children:"Flatten the input tree and return an array of nodes"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"getParentNode"}),e.jsx("td",{children:e.jsx(n.code,{children:"node: VrxTreeNode"})}),e.jsx("td",{children:e.jsx(n.code,{children:"VrxTreeNode | null"})}),e.jsx("td",{children:"Return the parent node of the given node"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"clearSelectedNodes"}),e.jsx("td",{children:"-"}),e.jsx("td",{children:"-"}),e.jsx("td",{children:"Clear all selected nodes"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"setSelectedNode"}),e.jsx("td",{children:e.jsx(n.code,{children:"nodeId: string, select:boolean"})}),e.jsx("td",{children:"-"}),e.jsx("td",{children:"Set the node with the given id as selected or not"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"expandAll"}),e.jsx("td",{children:"-"}),e.jsx("td",{children:"-"}),e.jsx("td",{children:"Expand all nodes"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"collapseAll"}),e.jsx("td",{children:"-"}),e.jsx("td",{children:"-"}),e.jsx("td",{children:"Collapse all nodes"})]})]})]}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h2,{id:"-emits",children:"📜 Emits"}),`
`,e.jsxs("table",{style:{width:"100%"},children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("b",{children:"Name"})}),e.jsx("td",{children:e.jsx("b",{children:"Callback Params"})}),e.jsx("td",{children:e.jsx("b",{children:"Description"})})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"onClickNode"}),e.jsx("td",{children:e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx(n.code,{children:"value: VrxTreeNode"})}),e.jsx("li",{children:e.jsx(n.code,{children:"parentId: string"})}),e.jsx("li",{children:e.jsx(n.code,{children:"nodeRef: HTMLElement"})})]})}),e.jsx("td",{children:"Event emitted when clicking on node"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"onCheckNode"}),e.jsx("td",{children:e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx(n.code,{children:"value: VrxTreeNode"})}),e.jsx("li",{children:e.jsx(n.code,{children:"isChecked: boolean"})})]})}),e.jsx("td",{children:"Event emitted when checking a node"})]})]})]}),`
`,e.jsxs(n.p,{children:["For API's details and configuration please read the ",e.jsx(n.a,{href:"./?path=/docs/vrxtree--docs",children:"documentation"})]})]})}function b(d={}){const{wrapper:n}=Object.assign({},r(),d.components);return n?e.jsx(n,Object.assign({},d,{children:e.jsx(t,d)})):t(d)}export{b as default};
