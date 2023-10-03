import type { Meta, StoryObj } from '@storybook/vue3'
// @ts-ignore
import VrxTree from "@/components/VrxTree/VrxTree.vue";
import VrxSelect from "@/components/VrxSelect/VrxSelect.vue";

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
        open: true,
        id: "id" + Math.random().toString(16).slice(2),
        selected: false,
        children: Array.from(Array(10).keys()).map((i) => ({
            id: "id" + Math.random().toString(16).slice(2),
            text: `Asset 1.${i}`,
            icon: "wind",
            selected: false,
            children: Array.from(Array(50).keys()).map((x) => ({
                id: "id" + Math.random().toString(16).slice(2),
                text: `Plant 1.${i}.${x}`,
                icon: "wind",
                selected: false,
                children: Array.from(Array(50).keys()).map((y) => ({
                    id: "id" + Math.random().toString(16).slice(2),
                    text: `Device 1.${i}.${x}.${y}`,
                    icon: "turbine",
                    selected: false,
                    children: []
                }))
            }))
        }))
    },
]


type TreeStories = StoryObj<typeof VrxTree>;
const Template : TreeStories = {
    render: (args) => ({
        components: { VrxTree },
        setup() {
            return {
                args
            };
        },

        template: `
          <div style="height: 200px; width: 300px">
              <VrxTree :check-nodes="true" :data="args.data" :selectable="true"/>
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
