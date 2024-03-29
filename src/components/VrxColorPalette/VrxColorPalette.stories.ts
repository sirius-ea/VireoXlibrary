// stories for VrxButton
import type { Meta, StoryObj } from '@storybook/vue3'
import VrxColorPalette from './VrxColorPalette.vue'
import {theme} from "../styles"


const meta : Meta<typeof VrxColorPalette> = {
    title: 'VrxColorPalette',
    component: VrxColorPalette,
    tags: ['autodocs'],
};

export default meta;

type ColorStory = StoryObj<typeof VrxColorPalette>;


const Template: ColorStory = {
    render: (args) => ({
        components: { VrxColorPalette },
        setup() {
            return {
                args,
            };
        },

        template: `
            <VrxColorPalette v-bind="args"/>
        `
    }),
    args: {
        //@ts-ignore
        colors: theme.colors.primary,
    },
}

export const Primary: ColorStory = {
    ...Template,
    args: {
        ...Template.args,
        //@ts-ignore
        colors: theme.colors.primary,
    }
};

export const Secondary: ColorStory = {
    ...Template,
    args: {
        ...Template.args,
        //@ts-ignore
        colors: theme.colors.secondary,
    }
};

export const Neutral: ColorStory = {
    ...Template,
    args: {
        ...Template.args,
        //@ts-ignore
        colors: theme.colors.neutral,
    }
};

export const Error: ColorStory = {
    ...Template,
    args: {
        ...Template.args,
        //@ts-ignore
        colors: theme.colors.error,
    }
};

export const Root: ColorStory = {
    ...Template,
    args: {
        ...Template.args,
        colors: { //@ts-ignore
            'content-dark': theme.colors['content-dark'], //@ts-ignore
            'content-light': theme.colors['content-light'], //@ts-ignore
            'base-dark': theme.colors['base-dark'], //@ts-ignore
            'base-light': theme.colors['base-light'],//@ts-ignore
            'icon': theme.colors['icon'],//@ts-ignore
            'icon-disabled': theme.colors['icon-disabled'],//@ts-ignore
            'icon-invalid': theme.colors['icon-invalid']
        },
    }
};



