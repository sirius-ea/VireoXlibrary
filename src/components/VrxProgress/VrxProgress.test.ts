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

    //test change size props
    it('change size props', async () => {
        expect(wrapper.props('size')).toBe('base');
        expect(wrapper.get('div').classes()).toContain('size-base');
        await wrapper.setProps({ size: 'sm' });
        expect(wrapper.props('size')).toBe('sm');
        expect(wrapper.get('div').classes()).toContain('size-sm');
    })
})
