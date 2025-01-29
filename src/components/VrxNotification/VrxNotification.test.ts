import {describe, it, expect, beforeEach} from 'vitest'
import {mount, VueWrapper} from "@vue/test-utils";
import VrxNotificationContainer from './VrxNotificationContainer.vue';

describe('VrxNotification', () => {

    let wrapper : VueWrapper<any>;
    beforeEach(() => {
        wrapper = mount(VrxNotificationContainer as any, {
            props: {
                maxNotifications: 3
            }
        });
    });

    it('renders the component', () => {
        expect(wrapper.find('[data-testid=vrx-notification-container]').exists()).toBe(true);
    });

    it('renders the notification', async() => {
        wrapper.vm.addNotification("notification test");
        await wrapper.vm.$nextTick();
        expect(wrapper.find('[data-testid=vrx-notification]').exists()).toBe(true);
    });

    it('is the correct message', async() => {
        wrapper.vm.addNotification("notification test");
        await wrapper.vm.$nextTick();
        expect(wrapper.find('[data-testid=vrx-notification]').text()).toBe("notification test");
        expect(wrapper.find('[data-testid=vrx-notification]').text()).not.toBe("test");
    })

    it('it closes on click', async() => {
        wrapper.vm.addNotification("notification test");
        await wrapper.vm.$nextTick();
        wrapper.find('[data-testid=vrx-notification]').trigger('click')
        await wrapper.vm.$nextTick();
        expect(wrapper.find('[data-testid=vrx-notification]').exists()).toBe(false);
    })

    it('closes after 5 seconds', async() => {
        vi.useFakeTimers()
        wrapper.vm.addNotification("notification test");
        await wrapper.vm.$nextTick();
        await vi.advanceTimersByTimeAsync(2000)
        expect(wrapper.find('[data-testid=vrx-notification]').exists()).toBe(true);
        await vi.advanceTimersByTimeAsync(3000)
        expect(wrapper.find('[data-testid=vrx-notification]').exists()).toBe(false);
    })

    it('renders 2 notifications', async() => {
        wrapper.vm.addNotification("notification test");
        await wrapper.vm.$nextTick();
        wrapper.vm.addNotification("notification test 2");
        await wrapper.vm.$nextTick();
        expect(wrapper.findAll('[data-testid=vrx-notification]').length).toBe(2);
        expect(wrapper.findAll('[data-testid=vrx-notification]').length).not.toBe(1);
    });

    it('closes just 1 notification', async() => {
        wrapper.vm.addNotification("notification test");
        await wrapper.vm.$nextTick();
        wrapper.vm.addNotification("notification test 2");
        await wrapper.vm.$nextTick();
        expect(wrapper.findAll('[data-testid=vrx-notification]').length).toBe(2);
        wrapper.find('[data-testid=vrx-notification]').trigger('click');
        await wrapper.vm.$nextTick();
        expect(wrapper.findAll('[data-testid=vrx-notification]').length).toBe(1);
    });

    it('overflows correctly', async() => {
        wrapper.vm.addNotification("notification test");
        await wrapper.vm.$nextTick();
        wrapper.vm.addNotification("notification test 2");
        await wrapper.vm.$nextTick();
        wrapper.vm.addNotification("notification test 3");
        await wrapper.vm.$nextTick();
        wrapper.vm.addNotification("notification test 4");
        await wrapper.vm.$nextTick();
        expect(wrapper.findAll('[data-testid=vrx-notification]').length).toBe(3);
        expect(wrapper.find('[data-testid=vrx-notification-overflow]').exists()).toBe(true);
    });

    it('overflow pops correctly', async() => {
        wrapper.vm.addNotification("notification test");
        await wrapper.vm.$nextTick();
        wrapper.vm.addNotification("notification test 2");
        await wrapper.vm.$nextTick();
        wrapper.vm.addNotification("notification test 3");
        await wrapper.vm.$nextTick();
        wrapper.vm.addNotification("notification test 4");
        await wrapper.vm.$nextTick();
        expect(wrapper.findAll('[data-testid=vrx-notification]').length).toBe(3);
        wrapper.find('[data-testid=vrx-notification]').trigger('click');
        await wrapper.vm.$nextTick();
        expect(wrapper.findAll('[data-testid=vrx-notification]').length).toBe(3);
        expect(wrapper.find('[data-testid=vrx-notification-overflow]').exists()).toBe(false);
    });

    it('displays all correct messages', async() => {
        wrapper.vm.addNotification("notification test");
        await wrapper.vm.$nextTick();
        wrapper.vm.addNotification("notification test 2");
        await wrapper.vm.$nextTick();
        const notifications = wrapper.findAll('[data-testid=vrx-notification]')
        expect(notifications[0].text()).toBe("notification test 2");
        expect(notifications[1].text()).toBe("notification test");
    })

    it('changes type warning', async() => {
        wrapper.vm.addNotification("notification test", "warning");
        await wrapper.vm.$nextTick();
        expect(wrapper.find('[data-testid=vrx-notification]').classes().includes('vrx-notification-warning')).toBe(true);
        expect(wrapper.find('[data-testid=vrx-notification]').classes().includes('vrx-notification-success')).toBe(false);
    })

    it('changes type error', async() => {
        wrapper.vm.addNotification("notification test", "error");
        await wrapper.vm.$nextTick();
        expect(wrapper.find('[data-testid=vrx-notification]').classes().includes('vrx-notification-error')).toBe(true);
        expect(wrapper.find('[data-testid=vrx-notification]').classes().includes('vrx-notification-success')).toBe(false);
    })

    it('changes duration', async() => {
        vi.useFakeTimers()
        wrapper.vm.addNotification("notification test", "error", 10000);
        await wrapper.vm.$nextTick();
        await vi.advanceTimersByTimeAsync(6000)
        expect(wrapper.find('[data-testid=vrx-notification]').exists()).toBe(true);
        await vi.advanceTimersByTimeAsync(4000)
        expect(wrapper.find('[data-testid=vrx-notification]').exists()).toBe(false);
    })

    it('does not close if duration is 0', async() => {
        vi.useFakeTimers()
        wrapper.vm.addNotification("notification test", "error", 0);
        await wrapper.vm.$nextTick();
        await vi.advanceTimersByTimeAsync(10000)
        expect(wrapper.find('[data-testid=vrx-notification]').exists()).toBe(true);
        await vi.advanceTimersByTimeAsync(5000)
        expect(wrapper.find('[data-testid=vrx-notification]').exists()).toBe(true);
    })

    it('changes overflow text', async() => {
        let wrapper2 : VueWrapper<any>;
        wrapper2 = mount(VrxNotificationContainer as any, {
            props: {
                maxNotifications: 1,
                customOverflowText: "notifiche non lette"
            }
        });
        wrapper2.vm.addNotification("notification test");
        await wrapper2.vm.$nextTick();
        wrapper2.vm.addNotification("notification test 2");
        await wrapper2.vm.$nextTick();
        expect(wrapper2.find('[data-testid=vrx-notification-overflow]').text().includes("notifiche non lette")).toBe(true);
    })

})