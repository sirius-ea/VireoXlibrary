import type { Meta, StoryObj } from '@storybook/vue3'
import VrxNotificationContainer from "@/components/VrxNotification/VrxNotificationContainer.vue";
import VrxNotification from "@/components/VrxNotification/VrxNotification.vue";
import {VrxButton} from "@/components";

const meta : Meta<typeof VrxNotification | typeof VrxNotificationContainer> = {
    title: 'VrxNotification',
    component: VrxNotification,
    tags: ['autodocs'],
    argTypes: {
        message: {
            description: 'message',
            control: {
                type: 'text',
            },
            table: {
                category: 'props',
                type: {
                    summary: 'string',
                }
            }
        },
        type: {
            description: 'type',
            control: {
                type: 'select',
            },
            options: ['success', 'warning', 'error'],
            defaultValue: {
                summary: "success",
            },
            table: {
                category: 'props',
                type: {
                    summary: 'type',
                },
            }
        },
        duration: {
            description: 'duration',
            control: {
                type: 'number',
            },
            defaultValue: {
                summary: 5000,
            },
            table: {
                category: 'props',
                type: {
                    summary: 'duration',
                },
            }
        },
        maxNotifications: {
            description: 'maxNotifications',
            control: {
                type: 'number',
            },
            defaultValue: {
                summary: 8,
            },
            table: {
                category: 'props',
                type: {
                    summary: 'maxNotifications',
                },
            }
        },
        customOverflowText: {
            description: 'customOverflowText',
            control: {
                type: 'text',
            },
            defaultValue: {
                summary: "unread notifications",
            },
            table: {
                category: 'props',
                type: {
                    summary: 'customOverflowText',
                },
            }
        }
    },
    args: {
        message: "Notification Test",
        maxNotifications: 8
    }
}

export default meta;


type NotificationStories = StoryObj<typeof VrxNotificationContainer>

const Template : NotificationStories = {
    render: (args) => ({
        components: { VrxNotificationContainer, VrxNotification, VrxButton },
        setup() {
            return {
                args,
            };
        },

        methods: {
            showNotification() {
                //@ts-ignore
                this.$refs.notification.addNotification(args.message, args.type, args.duration);
            }
        },

        template: `
          <VrxButton color="default" size="sm" @click="showNotification">Show Notification</VrxButton>
          <VrxNotificationContainer ref="notification" :max-notifications="args.maxNotifications" :custom-overflow-text="args.customOverflowText" />
        `
    }),
    args: {
    },
}

export const Primary: NotificationStories = {
    ...Template,
};

