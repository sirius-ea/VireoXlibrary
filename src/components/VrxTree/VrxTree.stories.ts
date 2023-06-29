import VrxTree from "./VrxTree.vue";
import {StoryObj} from "@storybook/vue3";

const meta = {
    title: 'VrxTree',
    component: VrxTree,
    argTypes: {
        tree: {
            description: 'tree data',
            control: {
                type: 'object',
            },
            table: {
                category: 'props',
            }
        }
    }
}


export default meta;


type TreeStories = StoryObj<typeof VrxTree>;

const Template: TreeStories = {
    render: (args) => ({
        components: {VrxTree},
        setup() : {args: {tree:any}} {
            return {
                args
            } as any;
        },
        template: '<vrx-tree v-bind="args" ref="test"/>',
    }),
    args: {
        tree: [
            {
                id: '1',
                label: 'ciao',
                children: [
                    {
                        id: '1.1',
                        label: 'ciao',
                    }
                    ]
            }
        ]
    }
}

export const Primary: TreeStories = {
    ...Template,
}
