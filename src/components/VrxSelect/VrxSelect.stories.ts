import type { Meta, StoryObj } from '@storybook/vue3'
import VrxSelect from "@/components/VrxSelect/VrxSelect.vue";

const meta : Meta<typeof VrxSelect> = {
    title: 'VrxSelect',
    component: VrxSelect,
    tags: ['autodocs'],
    argTypes: {
        listData: {
            description: 'list containing the selectable options',
            control: {
                type: '{value: string, label: string}[]',
            },
            table: {
                category: 'props',
                type: {
                    summary: '{value: string, label: string}[]',
                },
                defaultValue: {
                    summary: '[]',
                }
            }
        },
        modelValue: {
            description: 'ref containing the selected options',
            control: {
                type: '{value: string, label: string}',
            },
            table: {
                category: 'props',
                type: {
                    summary: '{value: string, label: string}[]',
                },
                defaultValue: {
                    summary: '[]',
                }
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
                defaultValue: {
                    summary: 'false',
                }
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
                defaultValue: {
                    summary: false,
                }
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
                },
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
        placeholder: {
            description: 'placeholder text',
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
        variant: {
            description: 'color variant',
            control: {
                type: 'select',
            },
            options: ['default', 'alternative', 'dark', 'light', 'green', 'red', 'yellow', 'purple'],
            defaultValue: {
                summary: 'default'
            },
            table: {
                category: 'props',
                type: {
                    summary: 'string',
                },
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
          <div style="height: 200px">
              <VrxSelect
                  v-model="args.modelValue"
                  v-bind="args"
              />
          </div>
        `
    }),
    args: {
        listData: data,
        modelValue: [],
    },
}

export const Primary: SelectStories = {
    ...Template,
    args: {
        ...Template.args,
        modelValue: [],
    }
};

export const Labeled: SelectStories = {
    ...Template,
    args: {
        ...Template.args,
        modelValue: [],
        label: 'Select an option',
    }
};

export const Selected: SelectStories = {
    ...Template,
    args: {
        ...Template.args,
        label: 'Select an option',
        modelValue: [data[0],data[1]],
        helperText: 'The given option is the default selected',
    }
};

export const Icon: SelectStories = {
    ...Template,
    args: {
        ...Template.args,
        modelValue: [],
        icon: 'rocket',

    }
}

export const Disabled: SelectStories = {
    ...Template,
    args: {
        ...Template.args,
        modelValue: [],
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
        modelValue: [],
        invalid: true,
        icon: 'rocket',
        label: 'Select an option',
        helperText: 'The given option is not selectable',
    }
}

export const Variant: SelectStories = {
    ...Template,
    args: {
        ...Template.args,
        label: 'Select an option',
        modelValue: [data[0],data[1]],
        variant: 'green',
        helperText: 'This is a green variant',
    },
}