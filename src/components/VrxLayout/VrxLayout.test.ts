// test with vitest
import {describe, it, expect, beforeEach} from 'vitest'
import {VrxButton} from "@/main.ts";
import {mount, VueWrapper} from "@vue/test-utils";

describe('VrxButton', () => {
    let wrapper : VueWrapper<any>;
    beforeEach(() => {
        wrapper = mount(VrxButton as any, {
            props: {
                color: 'default',
                size: 'base',
            }
        });
    });

    it('renders a button', () => {
        expect(wrapper.find('button').exists()).toBe(true);
    });

    //test change color props
    it('change color props', async () => {
        expect(wrapper.props('color')).toBe('default');
        expect(wrapper.get('button').classes().join(" ")).toContain('vrxbutton-default-style');
        await wrapper.setProps({ color: 'alternative' });
        expect(wrapper.props('color')).toBe('alternative');
        expect(wrapper.get('button').classes().join(" ")).toContain('vrxbutton-alternate-style');
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
