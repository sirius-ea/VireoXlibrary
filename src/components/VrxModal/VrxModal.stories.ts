import type { Meta, StoryObj } from '@storybook/vue3'
import VrxModal from "@/components/VrxModal/VrxModal.vue";

const meta : Meta<typeof VrxModal> = {
    title: 'VrxModal',
    component: VrxModal,
    tags: ['autodocs'],
    argTypes: {},
}

export default meta;


type ModalStories = StoryObj<typeof VrxModal>

const Template : ModalStories = {
    render: (args) => ({
        components: { VrxModal },
        setup() {
            return {
                args,
            };
        },

        template: `
            <VrxModal
                :visible="args.visible"
            />
        `
    }),
    args: {
        visible: true,
    },
}

export const Primary: ModalStories = {
    ...Template,
};
