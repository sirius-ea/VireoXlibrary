// stories for VrxProgress
import type { Meta, StoryObj } from '@storybook/vue3'
import VrxProgress from './VrxProgress.vue'


const meta : Meta<typeof VrxProgress> = {
    title: 'VrxProgress',
    component: VrxProgress,
    tags: ['autodocs'],
    argTypes: {
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
            options: ['default',  'alternative' , 'dark' , 'light'],
            defaultValue: {
                summary: 'default',
            },
            description: 'color of the progress'
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
            description: 'size of the progress'
        }
    }
};

export default meta;

type BtnStory = StoryObj<typeof VrxProgress>;


const Template: BtnStory = {
    render: (args) => ({
        components: { VrxProgress },
        setup() {
            return {
                args
            };
        },

        template: `
            <VrxProgress v-bind="args">
                <template v-if="args.prefix" slot="prefix">
                  {{args.prefix}}
                </template>
                <template v-if="args.default" slot="default">
                {{args.default}}
                </template>
                <template v-if="args.suffix" slot="suffix">
                    {{args.suffix}}
                </template>
            </VrxProgress>`
    }),
    args: {
        color: 'default',
        size: 'base',
    },
}

export const Primary: BtnStory = {
    ...Template

};

