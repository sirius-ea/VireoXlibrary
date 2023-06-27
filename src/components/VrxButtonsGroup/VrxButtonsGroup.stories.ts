// stories for VrxButton
import type { Meta, StoryObj } from '@storybook/vue3'
import VrxButtonsGroup from './VrxButtonsGroup.vue'


const meta : Meta<typeof VrxButtonsGroup> = {
    title: 'VrxButtonsGroup',
    component: VrxButtonsGroup,
    tags: ['autodocs'],
    argTypes: {
        buttons: {
            control: {
                type: 'array'
            },
            description: 'Array of buttons',
            table: {
                category: 'props',
                type: {
                    summary: 'string[]',
                }
            }
        },
        icons: {
            control: {
                type: undefined
            },
            description: 'VrxIcon names',
            table: {
                category: 'props',
                type: {
                    summary: 'IconLibraryType[]',
                }
            }
        },
        actions: {
            control: {
                type: undefined
            },
            description: 'Actions dispatched on click',
            table: {
                category: 'props',
                type: {
                    summary: '() => void []',
                }
            }
        },
    }

};

export default meta;

type BtnGroupStories = StoryObj<typeof VrxButtonsGroup>;


const Template: BtnGroupStories = {
    render: (args) => ({
        components: { VrxButtonsGroup },
        setup() {
            return {
                args
            };
        },

        template: `
            <VrxButtonsGroup
                v-bind="args" 
                :buttons="args.button"
                :icons="args.icons"
            />`
    }),
    args: {
        buttons:['Option 1', 'Option 2', 'Option 3'],
    },
}

export const Primary: BtnGroupStories = {
    ...Template
};

export const Icon: BtnGroupStories = {
    ...Template,
    args: {
        ...Template.args,
        icons: ['mail', 'rocket', 'user-circle']
    }
};

