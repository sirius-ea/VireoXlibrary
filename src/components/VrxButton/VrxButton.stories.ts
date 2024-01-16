// stories for VrxButton
import type { Meta, StoryObj } from '@storybook/vue3'
import VrxButton from './VrxButton.vue'


const meta : Meta<typeof VrxButton> = {
    title: 'VrxButton',
    component: VrxButton,
    tags: ['autodocs'],
    argTypes: {
        default: {
            description: 'default slot',
            control: {
                type: null,

            },
            table: {
                category: 'slots',
                type: {
                    summary: 'string',
                }
            }
        },
        prefix: {
            description: 'prefix slot',
            control: {
                type: 'text',
            },
            table: {
                category: 'slots',
                type: {
                    summary: 'string',
                }
            }
        },
        suffix: {
            description: 'suffix slot',
            control: {
                type: 'text',
            },
            table: {
                category: 'slots',
                type: {
                    summary: 'string',
                }
            }
        },
        color: {
            control: {
                type: 'select',
            },
            table: {
                category: 'props',
                type: {
                    summary: 'string',
                }
            },
            options: ['default',  'alternative' , 'dark' , 'light' , 'green' , 'red' , 'yellow' , 'blue' , 'purple'],
            defaultValue: {
                summary: 'default',
            },
            description: 'color of the button'
        },
        size: {
            control: {
                type: 'select',
            },
            table: {
                category: 'props',
                type: {
                    summary: 'string',
                }
            },
            options: ['sm', 'md','base', 'lg'],
            defaultValue: {
                summary: 'base',
            },
            description: 'size of the button'
        },
        disabled: {
            control: {
                type: 'boolean',
            },
            options: [true, false],
            defaultValue: {
                summary: undefined,
            },
            table: {
                category: 'props',
                type: {
                    summary: 'boolean',
                }
            },
            description: 'disabled state of the button'
        },
        fullRounded: {
            control: {
                type: 'boolean',
            },
            options: [true, false],
            defaultValue: {
                summary: undefined,
            },
            table: {
                category: 'props',
                type: {
                    summary: 'boolean',
                }
            },
            description: 'make border radius full'
        },
        fullWidth: {
            control: {
                type: 'boolean',
            },
            options: [true, false],
            defaultValue: {
                summary: undefined,
            },
            table: {
                category: 'props',
                type: {
                    summary: 'boolean',
                }
            },
            description: 'make button full width'
        }
    }
};

export default meta;

type BtnStory = StoryObj<typeof VrxButton>;


const Template: BtnStory = {
    render: (args) => ({
        components: { VrxButton },
        setup() {
            return {
                args
            };
        },

        template: `
            <VrxButton v-bind="args">
                <template v-if="args.prefix" slot="prefix">
                  {{args.prefix}}
                </template>
                <template v-if="args.default" slot="default">
                {{args.default}}
                </template>
                <template v-if="args.suffix" slot="suffix">
                    {{args.suffix}}
                </template>
            </VrxButton>`
    }),
    args: {
        default: 'Button',
        color: 'default',
        size: 'base',
    },
}

export const Primary: BtnStory = {
    ...Template

};

export const Prefix: BtnStory = {
    ...Template,
    args: {
        ...Template.args,
        prefix: '👍', // emoji thumbs up
    }
}

export const Suffix: BtnStory = {
    ...Template,
    args: {
        ...Template.args,
        suffix: '👍', // emoji thumbs up
    }
}

export const Both: BtnStory = {
    ...Template,
    args: {
        ...Template.args,
        prefix: '👍', // emoji thumbs up
        suffix: '👍', // emoji thumbs up
    }
}

