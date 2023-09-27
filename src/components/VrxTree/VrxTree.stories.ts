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
        text: "ITALY",
        icon: "map-pin",
        selected: false,
        children: Array.from(Array(50).keys()).map((i) => ({
            text: `Plant 2.2.${i}`,
            icon: "sun",
            selected: false,
            children: Array.from(Array(50).keys()).map((i) => ({
                text: `Plant 2.2.${i}`,
                icon: "sun",
                selected: false,
                children: []
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
