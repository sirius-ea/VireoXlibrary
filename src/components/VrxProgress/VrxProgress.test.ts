// test with vitest
import {describe, it, expect, beforeEach} from 'vitest'
import {VrxProgress} from "@/main.ts";
import {mount, VueWrapper} from "@vue/test-utils";

describe('VrxProgress', () => {
    let wrapper : VueWrapper<any>;
    beforeEach(() => {
        wrapper = mount(VrxProgress as any, {
            props: {
                color: 'default',
                size: 'base',
            }
        });
    });

    it('renders a progress', () => {
        expect(wrapper.find('div').exists()).toBe(true);
    });

    //test change color props
    it('change color props', async () => {
        expect(wrapper.props('color')).toBe('default');
        expect(wrapper.get('div').classes().join(" ")).toContain('VrxProgress-default-style');
        await wrapper.setProps({ color: 'alternative' });
        expect(wrapper.props('color')).toBe('alternative');
        expect(wrapper.get('div').classes().join(" ")).toContain('VrxProgress-alternate-style');
    })

    //test change size props
    it('change size props', async () => {
        expect(wrapper.props('size')).toBe('base');
        expect(wrapper.get('div').classes()).toContain('text-base');
        await wrapper.setProps({ size: 'sm' });
        expect(wrapper.props('size')).toBe('sm');
        expect(wrapper.get('div').classes()).toContain('text-sm');
    })
})
