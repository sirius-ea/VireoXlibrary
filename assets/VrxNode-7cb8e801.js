import{j as e}from"./jsx-runtime-ffb262ed.js";import{M as a}from"./index-1f04bfde.js";import{u as o}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-95fab385.js";import"../sb-preview/runtime.js";import"./index-11d98b33.js";import"./index-7486de94.js";import"./index-356e4a49.js";function r(n){const t=Object.assign({h1:"h1",p:"p",pre:"pre",code:"code"},o(),n.components);return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"VrxNode/About"}),`
`,e.jsx(t.h1,{id:"vireoxnode",children:"VireoxNode"}),`
`,e.jsx(t.p,{children:"VireoxNode is an alternative to VrxTree, which allows the user to have full control on the 'HOW' the tree is built and on the 'HOW' each node behaves."}),`
`,e.jsx(t.p,{children:"This component has only one job, assist the user in building an acceptable tree structure with the ability to collapse or expand a node. It is completely up to the user to implement functionalities such as checkboxes or node searches"}),`
`,e.jsx(t.p,{children:"A very basic example of the nodes in action is the following:"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-ts",children:`            <div class="h-full w-full">
            <VrxNode>
              <span class="dark:text-content-dark text-content-light hover:bg-gray-700 hover:dark:bg-gray-400 w-full"> Parent 1 </span>
              <template #children>
                  <VrxNode>
                    <span class="dark:text-content-dark text-content-light hover:bg-gray-700 hover:dark:bg-gray-400 w-full"> Child 1 </span>
                    <template #children>
                      <VrxNode> <span class="dark:text-content-dark text-content-light hover:bg-gray-700 hover:dark:bg-gray-400 w-full"> Child 1.1 </span> </VrxNode>
                    </template>
                    </VrxNode>
                  <VrxNode>
                    <span class="dark:text-content-dark text-content-light hover:bg-gray-700 hover:dark:bg-gray-400 w-full"> Child 2 </span>
                  <template #children>
                    <VrxNode>
                        <div class="flex flex-row gap-1 items-center hover:bg-gray-700 hover:dark:bg-gray-400 w-full" @click.stop>
                         <input type="checkbox"> <span class="dark:text-content-dark text-content-light"> Child 2.1 </span>
                        </div>
                        <template #children>
                            <div class="flex flex-row items-center dark:text-content-dark text-content-light hover:bg-gray-700 hover:dark:bg-gray-400 w-full">
                              <div> <input type="checkbox"> <span> Checkable </span> </div>
                            </div>
                        </template>
                    </VrxNode>
                  </template>
                  </VrxNode>
              </template>
            </VrxNode>
            </div>
`})})]})}function u(n={}){const{wrapper:t}=Object.assign({},o(),n.components);return t?e.jsx(t,Object.assign({},n,{children:e.jsx(r,n)})):r(n)}export{u as default};
