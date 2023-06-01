// test with vitest
import {describe, it, expect, beforeEach} from 'vitest'
import {VrxButton} from "@/main.ts";
import {mount, VueWrapper} from "@vue/test-utils";

describe('VrxButton', () => {
    let wrapper : VueWrapper<any>;
    beforeEach(() => {
        wrapper = mount(VrxButton, {
            props: {
                color: 'default',
            }
        });
    });

    it('renders a button', () => {
        expect(wrapper.find('button').exists()).toBe(true);
        expect(wrapper.find('button').exists()).toBe(true);
    });

    //test change color props
    it('change color props', async () => {
        expect(wrapper.props('color')).toBe('default');
        expect(wrapper.get('button').classes().join(" ")).toContain('text-white bg-blue-700 hover:bg-blue-800 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800');
        await wrapper.setProps({ color: 'alternative' });
        expect(wrapper.props('color')).toBe('alternative');
        expect(wrapper.get('button').classes().join(" ")).toContain('text-gray-900 bg-white border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700');
    })

    //test change size props
    it('change size props', async () => {
        expect(wrapper.props('size')).toBe('base');
        expect(wrapper.get('button').classes()).toContain('text-base');
        await wrapper.setProps({ size: 'sm' });
        expect(wrapper.props('size')).toBe('sm');
        expect(wrapper.get('button').classes()).toContain('text-sm');
    })
})
