import type { Meta, StoryObj } from '@storybook/vue3'
import VrxToggle from "@/components/VrxToggle/VrxToggle.vue";

const meta : Meta<typeof VrxToggle> = {
    title: 'VrxToggle',
    component: VrxToggle,
    tags: ['autodocs'],
    argTypes: {
        modelValue: {
            description: 'binded value',
            control:{
              type: 'string'
            },
            table: {
                category: 'props',
                type: {
                    summary: 'boolean',
                },
            }
        },
        size: {
            description: 'size of the toggle',
            control: {
                type: 'select',
            },
            options: ['sm', 'md', 'lg'],
            table: {
                category: 'props',
                type: {
                    summary: 'sm | md | lg',
                },
                defaultValue: {
                    summary: 'md',
                }
            }
        },
        variant: {
            description: 'color variant',
            control: {
                type: 'select',
            },
            options: ['default', 'red', 'green', 'yellow', 'purple'],
            table: {
                category: 'props',
                type: {
                    summary: 'ComponentVariant',
                },
                defaultValue: {
                    summary: 'default',
                }
            }
        },
        label: {
            description: 'label',
            control: {
                type: 'text',
            },
            table: {
                category: 'props',
                type: {
                    summary: 'string',
                },
            }
        }
    }
}
export default meta;

type ToggleStories = StoryObj<typeof VrxToggle>;
const Template : ToggleStories = {
    render: (args) => ({
        components: { VrxToggle },
        setup() {
            return { args };
        },
        template: `
            <VrxToggle 
                v-bind="args"
                v-model="args.modelValue"
            />
        `
    }),
    args: {
        modelValue: true,
    },
}

export const Primary: ToggleStories = {
    ...Template,
    args: {
        ...Template.args,
    },
}

export const Size: ToggleStories = {
    render: (args) => ({
        components: { VrxToggle },
        setup() {
            return { args };
        },
        template: `
            <div style="display: flex; flex-direction: column; gap: 10px">
                <VrxToggle size="sm" label="sm" v-model="args.modelValue"/>
                <VrxToggle size="md" label="md" v-model="args.modelValue"/>
                <VrxToggle size="lg" label="lg" v-model="args.modelValue"/>
            </div>
        `
    }),
    args: {
        size: '',
        label: '',
        modelValue: false,
    }
};

export const Variants: ToggleStories = {
    render: (args) => ({
        components: { VrxToggle },
        setup() {
            return { args };
        },
        template: `
            <div style="display: flex; flex-direction: row; gap: 5px">
                <VrxToggle variant="red" v-model="args.modelValue"/>
                <VrxToggle variant="green" v-model="args.modelValue" />
                <VrxToggle variant="yellow" v-model="args.modelValue" />
                <VrxToggle variant="purple" v-model="args.modelValue" />
            </div>
        `
    }),
    args: {
        size: '',
        label: '',
        modelValue: true,
    }
};