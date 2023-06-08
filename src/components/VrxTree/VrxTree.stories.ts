import VrxTree from "@/components/VrxTree/VrxTree.vue";
import {setup, StoryObj} from "@storybook/vue3";
import VrxTreeItem from "@/components/VrxTree/VrxTreeItem.vue";
import VrxButton from "@/components/VrxButton/VrxButton.vue";

const meta = {
    components: {VrxButton},
    title: 'Components/VrxTree',
    component: VrxTree,
    tags: ['autodocs'],
    argTypes: {
        tree: {
            description: 'Tree structure',
            control: {
                type: 'object',
            }
        }
    },
}

export default meta;

type TreeStories = StoryObj<typeof VrxTree>

const Template : TreeStories = {
    render: (args) => ({
        components: { VrxTree, VrxButton },
        setup() {
            return {
                args
            };
        },
        methods: {
            logItem() {
                console.log(this.$refs.tree.getCheckedItems());
            }
        },
        template: `
              <VrxTree
                  v-bind="args"
                  ref="tree"
              />
              <br>
              <VrxButton color="green" size="base" @click="logItem">Log checked items</VrxButton>
        `
    }),
    args: {
        tree: [{
            id: '1',
            label: 'Label 1',
            children: [{
                id: '1.1',
                label: 'Label 1.1',
                children: [{
                    id: '1.1.1',
                    label: 'Label 1.1.1',
                    selectable: true,
                }, {
                    id: '1.1.2',
                    label: 'Label 1.1.2',
                    selectable: true,
                    data: {
                        test: 'test',
                        customData: 'customData'
                    }
                }]
            }, {
                id: '1.2',
                label: 'Label 1.2',
                icon: 'mail'
            }]

        }]
    },
}


export const Primary: TreeStories = {
    ...Template,
}
