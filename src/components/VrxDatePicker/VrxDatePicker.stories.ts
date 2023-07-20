import type { Meta, StoryObj } from '@storybook/vue3'
import VrxButtonsGroup from './VrxButtonsGroup.vue'
import VrxDatePicker from "@/components/VrxDatePicker/VrxDatePicker.vue";


const meta : Meta<typeof VrxDatePicker> = {
    title: 'VrxDatePicker',
    component: VrxDatePicker,
    tags: ['autodocs'],
    argTypes: {

    }

};

export default meta;

type DatePickerStories = StoryObj<typeof VrxDatePicker>;


const Template: DatePickerStories = {
    render: (args) => ({
        components: { VrxDatePicker },
        setup() {
            return {
                args
            };
        },

        template: `
          <div style="height: 400px">
            <VrxDatePicker :type="args.type"/>
          </div>`
    }),
    args: {
        type: 'date'
    },
}

export const Primary: DatePickerStories = {
    ...Template
};
export const Date: DatePickerStories = {
    ...Template,
    args: {
        type: 'time'
    }
};

export const Date_And_Time: DatePickerStories = {
    ...Template,
    args: {
        type: 'datetime-local'
    }
};
