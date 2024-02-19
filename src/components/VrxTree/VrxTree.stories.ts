import type { Meta, StoryObj } from '@storybook/vue3'
// @ts-ignore
import VrxTree from "@/components/VrxTree/VrxTree.vue";
import VrxSelect from "@/components/VrxSelect/VrxSelect.vue";
import {VrxButton, VrxToggle} from "@/components";
import {VrxTreeNode} from "@/components/VrxTree/VrxTree.types.ts";

const meta : Meta<typeof VrxTree<any>> = {
    title: 'VrxTree',
    component: VrxTree as any,
    tags: ['autodocs'],
    argTypes: {
        modelValue: {
          description: 'model value of the tree',
            control: {
                type: 'object',
            },
            table: {
                category: 'model',
                type: {
                    summary: 'VrxTreeNode<T>[]',
                }
            }
        },
        searchable: {
            description: 'allows nodes search',
            control: {
                type: 'boolean',
            },
            table: {
                category: 'props',
                type: {
                    summary: 'boolean',
                },
                defaultValue: {
                    summary: 'false'
                }
            },
        },
      selectable: {
          description: 'make the tree nodes selectable',
          control: {
                type: 'boolean',
          },
          table: {
                category: 'props',
                type: {
                    summary: 'boolean',
                },
                defaultValue: {
                    summary: 'false'
                }
          },
      },
        returnsUserData: {
            description: 'type of returned data of the selected nodes',
            control: {
                type: 'boolean',
            },
            table: {
                category: 'props',
                type: {
                    summary: 'boolean',
                },
                defaultValue: {
                    summary: 'false'
                }
            },
        },
    },
}
export default meta;
const modelValue: VrxTreeNode<any>[] = [
    {
        text: "Parent",
        icon: "folder",
        id: "x",
        open: false,
        userData: { type: "country" },
        selected: false,
        children: Array.from(Array(5).keys()).map((i) => ({
            text: `Child ${i}`,
            id: "x-"+i,
            open: false,
            userData: { test: "ciao" },
            icon: "folder",
            selected: false,
            children: Array.from(Array(2).keys()).map((x) => ({
                text: `Sub Child ${x}`,
                icon: "folder",
                id: "x-"+i+"-"+x,
                open: false,
                userData: { test: "bau" },
                selected: false,
                children: Array.from(Array(2).keys()).map((y) => ({
                    text: `Sub Sub Child ${y}`,
                    icon: "document",
                    id: "x-"+i+"-"+x+"-"+y,
                    open: false,
                    userData: { test: "miao" },
                    selected: false,
                    children: [],
                }))
            }))
        }))
    },
    {
        text: "Parent 2",
        icon: "folder",
        id: "y",
        open: false,
        userData: { type: "country" },
        selected: false,
        children: Array.from(Array(5).keys()).map((i) => ({
            text: `Child ${i}`,
            id: "y-"+i,
            open: false,
            userData: { test: "ciao" },
            icon: "folder",
            selected: false,
            children: Array.from(Array(2).keys()).map((x) => ({
                text: `Sub Child ${x}`,
                icon: "folder",
                open: false,
                id: "y-"+i+"-"+x,
                userData: { test: "bau" },
                selected: false,
                children: Array.from(Array(2).keys()).map((y) => ({
                    text: `Sub Sub Child ${y}`,
                    icon: "document",
                    open: false,
                    id: "y-"+i+"-"+x+"-"+y,
                    userData: { test: "miao" },
                    selected: false,
                    children: [],
                }))
            }))
        }))
    }
]

const modelValueWithComponent : VrxTreeNode<any>[] = [
    {
        text: "Parent",
        icon: "folder",
        id: "x",
        open: false,
        userData: { type: "country" },
        selected: false,
        children: Array.from(Array(5).keys()).map((i) => ({
            id: "x",
            text: `Child ${i}`,
            userData: { test: "ciao" },
            selected: false,
            open: false,
            children: [],
            asComponent: true,
            component: VrxButton,
            componentProps: () => ({
                color: i % 2 === 0 ? "default" : "green",
                size: "md",
                class: "my-2"
            }),
            componentSlots: `Child ${i}`
        }))
    }
]

const modelValueWithRightSlot : VrxTreeNode<any>[] = [
    {
        text: "Parent",
        icon: "folder",
        id: "x",
        open: false,
        userData: { type: "country" },
        selected: false,
        children: [],
        rightSlot: true,
        rightComponent: VrxToggle,
        rightComponentProps: () => ({})
    }
]


type TreeStories = StoryObj<typeof VrxTree>;
const Template : TreeStories = {
    render: (args) => ({
        components: { VrxTree, VrxButton },
        setup() {
            return {
                args
            };
        },
        methods: {
            logSelected(){
                alert(JSON.stringify(this.$refs.myRef.getSelectedNodes()));
            },
            findNode(){
                alert(JSON.stringify(this.$refs.myRef.getNodeByText("Sub Sub Child 0")));
            },
            findPath(){
                alert(JSON.stringify(this.$refs.myRef.getNodePath(this.$refs.myRef.getNodeByText("Sub Sub Child 0").id)));
            },
            clearSelection(){
                this.$refs.myRef.clearSelectedNodes();
            },
            setSelection(){
                this.$refs.myRef.setSelectedNode("x-0-0-0", true);
            },
            expandAll(){
                this.$refs.myRef.expandAll();
            }
        },
        template: `
          <div style="height: auto; width: auto">
                <VrxTree @cell-clicked="(a,b,c) => console.log('cellClicked', a, b, c)" ref="myRef" :check-nodes="true" v-model="args.modelValue" :selectable="args.selectable" :searchable="args.searchable" :is-draggable="args.isDraggable" :returns-user-data="args.returnsUserData">
                <template #toolbar>
                  <VrxButton color="default" size="base" @click="logSelected" >Log selected nodes</VrxButton>
                </template>
                </VrxTree>
                <div style="padding-top: 30px; display: flex; flex-direction: row; gap: 5px">
                    <VrxButton color="default" size="sm" @click="logSelected" >Log selected nodes</VrxButton>
                    <VrxButton color="default" size="sm" @click="findNode" >Log found node (Sub Sub Child 0)</VrxButton>
                    <VrxButton color="default" size="sm" @click="findPath" >Log find path (Sub Sub Child 0)</VrxButton>
                    <VrxButton color="default" size="sm" @click="clearSelection" >Clear Selection</VrxButton>
                    <VrxButton color="default" size="sm" @click="setSelection" >Set Selection</VrxButton>
                    <VrxButton color="default" size="sm" @click="expandAll" >Expand all</VrxButton>
                </div>
          </div>
         
        `
    }),
    args: {},
}

export const Primary: TreeStories = {
    ...Template,
    args: {
        modelValue,
        selectable: false,
        searchable: false,
        returnsUserData: false,
        isDraggable: true
    },
}

export const Searchable: TreeStories = {
    ...Template,
    args: {
        modelValue,
        searchable: true,
    },
}

export const Selectable: TreeStories = {
    ...Template,
    args: {
        modelValue,
        selectable: true,
    },
}

export const WithComponent: TreeStories = {
    ...Template,
    args: {
        modelValue: modelValueWithComponent
    }

}

export const RightSlot: TreeStories = {
    ...Template,
    args: {
        modelValue: modelValueWithRightSlot,
    }
}
