import {describe, it, expect, beforeEach} from 'vitest'
import {VrxToggle} from "@/main.ts";
import {mount, VueWrapper} from "@vue/test-utils";

describe('VrxToggle', () => {

    let wrapper : VueWrapper<any>;
    beforeEach(() => {
        wrapper = mount(VrxToggle as any, {
            props: {
                label: '',
                size: 'md',
                variant: 'default',
                modelValue: false,
            }
        });
    });

    it('renders the component', () => {
        expect(wrapper.find('[data-testid=vrx-toggle]').exists()).toBe(true);
        expect(wrapper.find('[data-testid=vrx-toggle-content]').exists()).toBe(true);
        expect(wrapper.find('[data-testid=vrx-toggle-label]').exists()).toBe(true);
    });

    it('change value', async () => {
        await wrapper.setProps({ modelValue: true });
        expect(wrapper.props('modelValue')).toBe(true);

        await wrapper.find('[data-testid=vrx-toggle]').trigger('click');
        expect(wrapper.get('[data-testid=vrx-toggle-content]').classes().join(" ")).toContain("bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:bg-white after:border-gray-300 after:border after:rounded-full after:transition-all dark:border-gray-600 peer-checked:bg-blue-600")
    });

    it('change size', async () => {
        await wrapper.setProps({ size: 'sm' });
        expect(wrapper.props().size).toBe('sm');
        expect(wrapper.get('[data-testid=vrx-toggle-content]').classes().join(" ")).toContain("w-9 h-5");

        await wrapper.setProps({ size: 'md' });
        expect(wrapper.props().size).toBe('md');
        expect(wrapper.get('[data-testid=vrx-toggle-content]').classes().join(" ")).toContain("w-11 h-6");

        await wrapper.setProps({ size: 'lg' });
        expect(wrapper.props().size).toBe('lg');
        expect(wrapper.get('[data-testid=vrx-toggle-content]').classes().join(" ")).toContain("w-14 h-7");
    });

    it('change variant', async () => {
        await wrapper.setProps({ variant: 'red' });
        expect(wrapper.props().variant).toBe('red');
        expect(wrapper.get('[data-testid=vrx-toggle-content]').classes().join(" ")).toContain("bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-red-300 dark:peer-focus:ring-red-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:bg-white after:border-gray-300 after:border after:rounded-full after:transition-all dark:border-gray-600 peer-checked:bg-red-600");

        await wrapper.setProps({ variant: 'green' });
        expect(wrapper.props().variant).toBe('green');
        expect(wrapper.get('[data-testid=vrx-toggle-content]').classes().join(" ")).toContain("bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:bg-white after:border-gray-300 after:border after:rounded-full after:transition-all dark:border-gray-600 peer-checked:bg-green-600");

        await wrapper.setProps({ variant: 'yellow' });
        expect(wrapper.props().variant).toBe('yellow');
        expect(wrapper.get('[data-testid=vrx-toggle-content]').classes().join(" ")).toContain("bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-yellow-300 dark:peer-focus:ring-yellow-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:bg-white after:border-gray-300 after:border after:rounded-full after:transition-all dark:border-gray-600 peer-checked:bg-yellow-400");

        await wrapper.setProps({ variant: 'purple' });
        expect(wrapper.props().variant).toBe('purple');
        expect(wrapper.get('[data-testid=vrx-toggle-content]').classes().join(" ")).toContain("bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:bg-white after:border-gray-300 after:border after:rounded-full after:transition-all dark:border-gray-600 peer-checked:bg-purple-600");
    });

    it('change label', async () => {
        await wrapper.setProps({ label: 'Toggle' });
        expect(wrapper.props().label).toBe('Toggle');
        expect(wrapper.get('[data-testid=vrx-toggle-label]').text()).toBe('Toggle');
    });

});