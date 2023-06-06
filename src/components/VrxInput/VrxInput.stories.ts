import type { Meta, StoryObj } from '@storybook/vue3'
import VrxInput from "@/components/VrxInput/VrxInput.vue";

const meta : Meta<typeof VrxInput> = {
    title: 'VrxInput',
    component: VrxInput,
    tags: ['autodocs'],
    argTypes: {
        disabled: {
            description: 'disable input',
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
        invalid: {
            description: 'set input as invalid',
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
        type: {
            description: 'type of input',
            control: {
                type: 'select',
            },
            options: ['text', 'password'],
            defaultValue: {
                summary: undefined,
            },
            table: {
                category: 'props',
                type: {
                    summary: 'text | passsword',
                },
                defaultValue: {
                    summary: 'text',
                }
            }
        },
    }
}

export default meta;


type InputStories = StoryObj<typeof VrxInput>

const Template : InputStories = {
    render: (args) => ({
        components: { VrxInput },
        setup() {
            return {
                args,
            };
        },

        template: `
            <VrxInput 
                v-bind="args"
                v-model="args.modelValue"
            />
        `
    }),
    args: {
    },
}

export const Primary: InputStories = {
    ...Template,
};

export const Labeled: InputStories = {
    ...Template,
    args: {
        ...Template.args,
        label: 'Label',
    }
};

export const Icon: InputStories = {
    ...Template,
    args: {
        ...Template.args,
        icon: 'mail',
        modelValue: 'example@mail.com',
        label: 'Mail'
    }
};

export const Password: InputStories = {
    ...Template,
    args: {
        ...Template.args,
        label: 'Password',
        type: 'password',
        icon: 'password',
        placeholder: 'Insert your password'
    }
};

export const Disabled: InputStories = {
    ...Template,
    args: {
        ...Template.args,
        disabled: true,
        label: 'Name',
        modelValue: 'Mario Rossi',
        helperText: 'Insert your complete name',
        icon: 'user-circle',
    }
};

export const Invalid: InputStories = {
    ...Template,
    args: {
        ...Template.args,
        invalid: true,
        label: 'Email',
        modelValue: 'mario.rossi@gmail',
        helperText: 'This is not a valid email address',
        icon: 'mail',
    }
};