import type { Meta, StoryObj } from '@storybook/vue3'
// @ts-ignore
import VrxTree from "@/components/VrxTree/VrxTree.vue";
import VrxSelect from "@/components/VrxSelect/VrxSelect.vue";
import {VrxButton} from "@/components";

const meta : Meta<typeof VrxTree> = {
    title: 'VrxTree',
    component: VrxTree,
    tags: ['autodocs'],
    argTypes: {},

}
export default meta;
const data = [
    {
        text: "COUNTRY",
        icon: "map-pin",
        open: false,
        id: "id" + Math.random().toString(16).slice(2),
        userData: { type: "country" },
        selected: false,
        children: Array.from(Array(5).keys()).map((i) => ({
            id: `id${i}-` + Math.random().toString(16).slice(2),
            text: `Asset 1.${i}`,
            userData: { test: "ciao" },
            icon: "wind",
            selected: false,
            children: Array.from(Array(10).keys()).map((x) => ({
                id: `id${i}.${x}-` + Math.random().toString(16).slice(2),
                text: `Plant 1.${i}.${x}`,
                icon: "wind",
                userData: { test: "bau" },
                selected: false,
                children: Array.from(Array(25).keys()).map((y) => ({
                    id: `id${i}.${x}.${y}-` + Math.random().toString(16).slice(2),
                    text: `Device 1.${i}.${x}.${y}`,
                    icon: "turbine",
                    userData: { test: "miao" },
                    selected: false,
                    children: Array.from(Array(25).keys()).map((z) => ({
                        id: `id${i}.${x}.${y}.${z}-`+ Math.random().toString(16).slice(2),
                        text: `Sub-Device 1.${i}.${x}.${y}.${z}`,
                        icon: "turbine",
                        userData: { test: "mouu" },
                        selected: false,
                        children: Array.from(Array(5).keys()).map((a) => ({
                            id: `id${i}.${x}.${y}.${z}.${a}-` + Math.random().toString(16).slice(2),
                            text: `Sub-Sub-Device 1.${i}.${x}.${y}.${z}.${a}`,
                            icon: "turbine",
                            userData: { test: "chip" },
                            selected: false,
                            children: []
                        }))
                    }))
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
                console.log(this.$refs.myRef.getSelectedNodes());
            }
        },
        template: `
          <div style="height: 800px; width: 400px">
              <VrxTree ref="myRef" :check-nodes="true" :data="args.data" :selectable="true" :searchable="false"/>
          </div>
          <div style="padding-top: 30px; display: flex; flex-direction: row; gap: 5px">
            <VrxButton color="default" size="sm" @click="logSelected" >Log selected nodes</VrxButton>
          </div>
        `
    }),
    args: {},
}

export const Primary: TreeStories = {
    ...Template,
    args: {
        data
    },
}
