import type { Meta, StoryObj } from '@storybook/vue3';
import VrxTree from './VrxTree.vue';
declare const meta: Meta<typeof VrxTree>;
export default meta;
type TreeStories = StoryObj<typeof VrxTree>;
export declare const Primary: TreeStories;
export declare const Selectable: TreeStories;
export declare const WithComponent: TreeStories;
export declare const RightSlot: TreeStories;
