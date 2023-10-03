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
        selected: false,
        children: Array.from(Array(5).keys()).map((i) => ({
            text: `Asset 1.${i}`,
            icon: "wind",
            selected: false,
            children: Array.from(Array(10).keys()).map((x) => ({
                text: `Plant 1.${i}.${x}`,
                icon: "wind",
                selected: false,
                children: Array.from(Array(10).keys()).map((y) => ({
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
          <div style="height: 200px; width: 500px">
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
