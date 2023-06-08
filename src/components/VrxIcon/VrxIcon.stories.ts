import {Meta, StoryObj} from "@storybook/vue3";
import VrxIcon from "@/components/VrxIcon/VrxIcon.vue";

const meta : Meta<typeof VrxIcon> = {
    title: 'VrxIcon',
    component: VrxIcon,
    tags: ['autodocs'],
    argTypes: {
        icon: {
            description: 'icon type',
            control: {
                type: 'select',
            },
            options: ['password', 'mail', 'rocket', 'user-circle', 'chevron-up', 'chevron-down', 'x', 'check'],
            defaultValue: {
                summary: undefined,
            },
            table: {
                category: 'props',
                type: {
                    summary: 'IconLibraryType',
                },
            }
        },
        size: {
            control: {
                type: 'text',
            },
            table: {
                category: 'props',
                type: {
                    summary: 'string',
                }
            },
            defaultValue: {
                summary: '5',
            },
            description: 'size of the button (from 1 to 10)'
        },
        color: {
            description: 'color',
            control: {
                type: 'color',
            },
            table: {
                category: 'props',
                type: {
                    summary: 'string',
                }
            }
        }
    }
};

export default meta;

type IconStories = StoryObj<typeof VrxIcon>;


const Template: IconStories = {
    render: (args) => ({
        components: { VrxIcon },
        setup() {
            return {
                args
            };
        },

        template: `
          <VrxIcon icon="mail"/>
        `
    }),
    args: {
        icon: 'mail',
    },
}

export const Primary: IconStories = {
    ...Template
};