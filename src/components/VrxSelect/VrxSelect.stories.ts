import type { Meta, StoryObj } from '@storybook/vue3'
import VrxSelect from "@/components/VrxSelect/VrxSelect.vue";

const meta : Meta<typeof VrxSelect> = {
    title: 'VrxSelect',
    component: VrxSelect,
    tags: ['autodocs'],
    argTypes: {
        elements: {
            description: 'list of selectable elements',
            control: {
                type: 'object',
            },
            table: {
                category: 'props',
                type: {
                    summary: '{ value: any, label: string }[]',
                },
                defaultValue: {
                    summary: '[]',
                }
            }
        },
        initialSelected: {
            description: 'label of the initial selected element',
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
            description: 'disable select',
            control: {
                type: 'boolean',
            },
            table: {
                category: 'props',
                type: {
                    summary: 'boolean',
                },
            }
        },
        invalid: {
            description: 'invalid select',
            control: {
                type: 'boolean',
            },
            table: {
                category: 'props',
                type: {
                    summary: 'boolean',
                },
            }
        },
        label: {
            description: 'label text',
            control: {
                type: 'text',
            },
            table: {
                category: 'props',
                type: {
                    summary: 'string',
                }
            }
        },
        icon: {
            description: 'icon type',
            control: {
                type: 'select',
            },
            options: ['password', 'mail', 'rocket', 'user-circle'],
            defaultValue: {
                summary: undefined,
            },
            table: {
                category: 'props',
                type: {
                    summary: 'VrxIconType',
                },
            }
        },
        helperText: {
            description: 'helper text',
            control: {
                type: 'text',
            },
            table: {
                category: 'props',
                type: {
                    summary: 'string',
                }
            }
        },
    }
}

export default meta;


type SelectStories = StoryObj<typeof VrxSelect>
const data : Array<SelectItemInterface> = [
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' },
    { value: '3', label: 'Option 3' },
]
const Template : SelectStories = {
    render: (args) => ({
        components: { VrxSelect },
        setup() {
            return {
                args
            };
        },

        template: `
            <VrxSelect
                v-model="args.modelValue"
                v-bind="args"
            />
        `
    }),
    args: {
        listData: data,
        modelValue: [data[0]],
    },
}

export const Primary: SelectStories = {
    ...Template,
};

export const Labeled: SelectStories = {
    ...Template,
    args: {
        ...Template.args,
        label: 'Select an option',
    }
};

export const Selected: SelectStories = {
    ...Template,
    args: {
        ...Template.args,
        label: 'Select an option',
        modelValue: '2',
        helperText: 'The given option is the default selected',
    }
};

export const Icon: SelectStories = {
    ...Template,
    args: {
        ...Template.args,
        icon: 'rocket',

    }
}

export const Disabled: SelectStories = {
    ...Template,
    args: {
        ...Template.args,
        disabled: true,
        icon: 'rocket',
        label: 'Select an option',
        helperText: 'Please select an option',
    }
};

export const Invalid: SelectStories = {
    ...Template,
    args: {
        ...Template.args,
        invalid: true,
        icon: 'rocket',
        label: 'Select an option',
        helperText: 'The given option is not selectable',
    }
}