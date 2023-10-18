import type { Meta, StoryObj } from '@storybook/vue3'
// @ts-ignore
import VrxTree from "@/components/VrxTree/VrxTree.vue";
import VrxSelect from "@/components/VrxSelect/VrxSelect.vue";
import {VrxButton} from "@/components";
import {VrxTreeNode} from "@/components/VrxTree/VrxTree.types.ts";

const meta : Meta<typeof VrxTree> = {
    title: 'VrxTree',
    component: VrxTree,
    tags: ['autodocs'],
    argTypes: {
        searchable: {
            description: 'allows nodes search [NOT IMPLEMENTED]',
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
const data = [
    {
        text: "Parent",
        icon: "folder",
        id: "x",
        open: false,
        userData: { type: "country" },
        selected: false,
        children: Array.from(Array(5).keys()).map((i) => ({
            text: `Child ${i}`,
            id: "x",
            userData: { test: "ciao" },
            icon: "folder",
            selected: false,
            children: Array.from(Array(2).keys()).map((x) => ({
                text: `Sub Child ${x}`,
                icon: "folder",
                id: "x",
                userData: { test: "bau" },
                selected: false,
                children: Array.from(Array(2).keys()).map((y) => ({
                    text: `Sub Sub Child ${y}`,
                    icon: "document",
                    id: "x",
                    userData: { test: "miao" },
                    selected: false,
                    children: [],
                }))
            }))
        }))
    },
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
        },
        template: `
          <div style="height: auto; width: auto">
                <VrxTree ref="myRef" :check-nodes="true" :data="args.data" :selectable="args.selectable" :searchable="args.searchable" :returns-user-data="args.returnsUserData"/>
                <div style="padding-top: 30px; display: flex; flex-direction: row; gap: 5px">
                    <VrxButton color="default" size="sm" @click="logSelected" >Log selected nodes</VrxButton>
                    <VrxButton color="default" size="sm" @click="findNode" >Log found node (Sub Sub Child 0)</VrxButton>
                </div>
          </div>
         
        `
    }),
    args: {},
}

export const Primary: TreeStories = {
    ...Template,
    args: {
        data,
        selectable: false,
        searchable: false,
        returnsUserData: false,
    },
}

export const Selectable: TreeStories = {
    ...Template,
    args: {
        data,
        selectable: true,
    },
}

