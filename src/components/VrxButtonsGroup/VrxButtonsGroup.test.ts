import {describe, it, expect, beforeEach} from 'vitest'
import {VrxButtonsGroup} from "@/main.ts";
import {mount, VueWrapper} from "@vue/test-utils";

describe('VrxButtonsGroup', () => {
    let wrapper : VueWrapper<any>;
    beforeEach(() => {
        wrapper = mount(VrxButtonsGroup as any, {
            props: {
                buttons: ['Option 1', 'Option 2', 'Option 3']
            }
        });
    });

    it('renders the component', () => {
        expect(wrapper.find('[data-testid=vrx-btnGroup]').exists()).toBe(true);
        expect(wrapper.find('[data-testid=vrx-btnGroup-0]').exists()).toBe(true);
        expect(wrapper.find('[data-testid=vrx-btnGroup-1]').exists()).toBe(true);
        expect(wrapper.find('[data-testid=vrx-btnGroup-2]').exists()).toBe(true);
    });

    it('change the icons', async () => {
        await wrapper.setProps({ icons: ['mail', 'x', 'check'] });
        expect(wrapper.props().icons).toEqual(['mail', 'x', 'check']);
    });
});