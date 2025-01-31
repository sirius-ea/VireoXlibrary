import type { Meta, StoryObj } from '@storybook/vue3'
import VrxSelect from "@/components/VrxSelect/VrxSelect.vue";
import type {SelectItemInterface} from "./SelectItemInterface.ts";

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
                    summary: '{value: string, label: string, icon?: IconLibraryType}[]',
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
        multiselect: {
            description: 'enable multiple selection',
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
                    summary: 'IconLibraryType',
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
        searchable: {
            description: 'enable search in select options',
            control: {
                type: 'boolean',
            },
            table: {
                category: 'props',
                type: {
                    summary: 'boolean',
                }
            }
        },
        searchPlaceholder: {
            description: 'search input placeholder',
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
            description: 'color variant (only on multi-select)',
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
        elementClass: {
          description: 'additional class for the select element',
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
        showRemove: {
            description: "enable/disable the possibility to clear the select",
            control: {
                type: 'boolean'
            },
            table: {
                category: 'props',
                type: {
                    summary: 'boolean',
                }
            },
            defaultValue: {
                summary: true
            }
        }
    }
}

export default meta;


type SelectStories = StoryObj<typeof VrxSelect>
const data : Array<SelectItemInterface> = [
    { value: '1', label: 'Option 1', icon: 'mail' },
    { value: '2', label: 'Option 2', icon: 'palette'},
    { value: '3', label: 'Option 2', icon: 'palette'},
    { value: '4', label: 'Option 2', icon: 'palette'},
    { value: '5', label: 'Option 2', icon: 'palette'},
    { value: '6', label: 'Option 2', icon: 'palette'},
    { value: '7', label: 'Option 2', icon: 'palette'},
    { value: '8', label: 'Option 2', icon: 'palette'},
    { value: '9', label: 'Option 2', icon: 'palette'},
    { value: '10', label: 'Option 2', icon: 'palette'},
    { value: '11', label: 'Option 2', icon: 'palette'},
    { value: '12', label: 'Option 2', icon: 'palette'},
    { value: '13', label: 'Option 1', icon: 'palette'},
    { value: '14', label: 'Option 2', icon: 'palette'},
    { value: '15', label: 'Option 2', icon: 'palette'},
    { value: '16', label: 'Option 2', icon: 'palette'},
    { value: '17', label: 'Option 2', icon: 'palette'},
    { value: '18', label: 'Option 2', icon: 'palette'},
    { value: '19', label: 'Option 2', icon: 'palette'},
    { value: '20', label: 'Option 2', icon: 'palette'},
    { value: '21', label: 'Option 2', icon: 'palette'},
    { value: '22', label: 'Option 2', icon: 'palette'},
    { value: '23', label: 'Option 2', icon: 'palette'},
    { value: '24', label: 'Option 2', icon: 'palette'},
    { value: '25', label: 'Option 3' },
]
const Template : SelectStories = {
    render: (args) => ({
        components: { VrxSelect },
        setup() {
            return {
                args,
                emptyData: []
            };
        },

        template: `
              <VrxSelect
                  v-model="args.modelValue"
                  :list-data="args.listData"
                  v-bind="args"
              />
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

export const Searchable: SelectStories = {
    ...Template,
    args: {
        ...Template.args,
        modelValue: [],
        label: 'Select an option',
        searchable: true,
        searchPlaceholder: 'Search for an option',
    }
};

export const Selected: SelectStories = {
    ...Template,
    args: {
        ...Template.args,
        label: 'Select an option',
        modelValue: [data[0]],
        helperText: 'The given option is the default selected',
    }
};

export const Multiselect: SelectStories = {
    ...Template,
    args: {
        ...Template.args,
        multiselect: true,
        label: 'Select an option',
        modelValue: [data[0],data[1]],
    }
}

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
        modelValue: [data[0], data[1]],
        multiselect: true,
        variant: 'green',
        helperText: 'This is a green variant',
    },
}
