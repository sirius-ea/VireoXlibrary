import {Meta, StoryObj} from "@storybook/vue3";
import VrxIcon from "@/components/VrxIcon/VrxIcon.vue";
import {iconLibrary} from "@/components/VrxIcon/IconLibrary.ts";
const iconLibrarySet = Object.keys(iconLibrary);

const meta : Meta<typeof VrxIcon> = {
    title: 'VrxIcon',
    component: VrxIcon,
    tags: ['autodocs'],
    argTypes: {
        icon: {
            description: 'icon type or SVG path',
            control: {
                type: 'select',
            },
            options: iconLibrarySet,
            defaultValue: {
                summary: undefined,
            },
            table: {
                category: 'props',
                type: {
                    summary: 'IconLibraryType | string',
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
          <VrxIcon v-bind="args"/>
        `
    }),
    args: {
        icon: 'mail',
        size: '5',
    },
}

export const Primary: IconStories = {
    ...Template
};
