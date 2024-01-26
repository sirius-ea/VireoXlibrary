import type { Meta, StoryObj } from '@storybook/vue3'
import VrxToggle from "@/components/VrxToggle/VrxToggle.vue";
import {ref} from "vue";

const meta : Meta<typeof VrxToggle> = {
    title: 'VrxToggle',
    component: VrxToggle,
    tags: ['autodocs'],
    argTypes: {
        modelValue: {
            description: 'bound value with v-model',
            control:{
              type: 'boolean',
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
        },
        disabled: {
            description: 'disable the toggle',
            control: {
                type: 'boolean',
            },
            table: {
                category: 'props',
                type: {
                    summary: 'boolean',
                },
                defaultValue: {
                    summary: 'false',
                }
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
               v-model="args.modelValue"
            />
        `,
    }),
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
            const value = ref(false);
            return { args, value };
        },
        template: `
            <div style="display: flex; flex-direction: column; gap: 10px">
                <VrxToggle size="sm" label="sm" v-model="value"/>
                <VrxToggle size="md" label="md" v-model="value"/>
                <VrxToggle size="lg" label="lg" v-model="value"/>
            </div>
        `
    }),
    args: {
        label: ''
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
                <VrxToggle variant="red" v-model="args.modelValue" />
                <VrxToggle variant="green" v-model="args.modelValue" />
                <VrxToggle variant="yellow" v-model="args.modelValue" />
                <VrxToggle variant="purple" v-model="args.modelValue" />
            </div>
        `
    }),
    args: {
        label: '',
        modelValue: false,
    }
};
