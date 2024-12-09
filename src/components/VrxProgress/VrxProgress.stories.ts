// stories for VrxProgress
import type { Meta, StoryObj } from '@storybook/vue3'
import VrxProgress from './VrxProgress.vue'


const meta : Meta<typeof VrxProgress> = {
    title: 'VrxProgress',
    component: VrxProgress,
    tags: ['autodocs'],
    argTypes: {
        size: {
            description: 'Size of the progress',
            control: {
                type: 'select',
            },
            table: {
                category: 'props',
                type: {
                    summary: 'string',
                }
            },
            options: ['xs', 'sm', 'base', 'lg', 'xl'],
            defaultValue: {
                summary: 'base',
            }
        }
    }
};

export default meta;

type ProgressStory = StoryObj<typeof VrxProgress>;


const Template: ProgressStory = {
    render: (args) => ({
        components: { VrxProgress },
        setup() {
            return {
                args
            };
        },
        template: `
          <div style="height: 120px; width: 100%">
            <VrxProgress v-bind="args">
            </VrxProgress>
          </div>
        `
    }),
    args: {
        size: 'base',
    },
}

export const Primary: ProgressStory = {
    ...Template

};

