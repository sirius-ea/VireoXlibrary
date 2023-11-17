import type { Meta, StoryObj } from '@storybook/vue3'
import VrxSelect from "@/components/VrxSelect/VrxSelect.vue";
import {SelectItemInterface} from "./SelectItemInterface.ts";

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
    { value: '3', label: 'Option 3' },
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
          <div style="height: 100px">
              <VrxSelect
                  v-model="args.modelValue"
                  :list-data="args.listData"
                  v-bind="args"
              />
              <VrxSelect
                  v-model="args.emptyData"
                  :list-data="args.listData"
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
