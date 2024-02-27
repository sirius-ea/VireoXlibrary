import { Meta, StoryObj } from "@storybook/vue3";
import VrxLink from './VrxLink.vue';
import { VrxMenu } from '..';
declare const meta: Meta<typeof VrxMenu>;
export default meta;
type MenuStories = StoryObj<typeof VrxMenu>;
type LinkStories = StoryObj<typeof VrxLink>;
export declare const MenuExample: MenuStories;
export declare const VrxLink_Example: LinkStories;
