import type { Meta, StoryObj } from '@storybook/vue3';
import VrxNotificationContainer from './VrxNotificationContainer.vue';
import VrxNotification from './VrxNotification.vue';
declare const meta: Meta<typeof VrxNotification | typeof VrxNotificationContainer>;
export default meta;
type NotificationStories = StoryObj<typeof VrxNotificationContainer>;
export declare const Primary: NotificationStories;
