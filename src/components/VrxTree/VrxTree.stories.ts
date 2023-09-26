import type { Meta, StoryObj } from '@storybook/vue3'
// @ts-ignore
import VrxTree from "@/components/VrxTree/VrxTree.vue";

const meta : Meta<typeof VrxTree> = {
    title: 'VrxTree',
    component: VrxTree,
    tags: ['autodocs'],
    argTypes: {},

}
export default meta;

type TreeStories = StoryObj<typeof VrxTree>;
const Template : TreeStories['template'] = (args) => ({
    render: (args) => ({
        components: { VrxTree },
        setup() {
            return { args };
        },
        template: `
            <VrxTree v-bind="args" />
        `,
    }),
    args: {},
})

export const Primary: TreeStories = {
    ...Template,
    args: {},
}
