// stories for VrxLayout
import type { Meta, StoryObj } from '@storybook/vue3'
import VrxLayout from './VrxLayout.vue'


const meta : Meta<typeof VrxLayout> = {
    title: 'VrxLayout',
    component: VrxLayout,
    tags: ['autodocs'],
    argTypes: {}
};

export default meta;

type layoutStory = StoryObj<typeof VrxLayout>;


const Template: layoutStory = {
    render: (args) => ({
        components: { VrxLayout },
        setup() {
            return {
                args
            };
        },

        template: `<div> 
            <VrxLayout padding="8px" class="bg-red-300">
              <VrxLayout class="bg-yellow-300">

              </VrxLayout>
              <VrxLayout class="bg-blue-300">

              </VrxLayout>

            </VrxLayout> 
        </div>`

    }),
}

export const Primary: layoutStory = {
    ...Template

};