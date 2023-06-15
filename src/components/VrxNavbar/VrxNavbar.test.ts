import {beforeEach, describe, expect} from "vitest";
import {mount, VueWrapper} from "@vue/test-utils";
import {VrxNavbar} from "@/components";

describe('VrxNavbar', () => {

    let wrapper: VueWrapper<any>;
    beforeEach(() => {
        wrapper = mount(VrxNavbar as any, {
            props: {
                buttons: [{
                    text: 'Test',
                    selected: false,
                    children: [{
                        text: 'Sub-Test',
                        description: 'Description',
                    }]
                }]
            }
        });
    });

    it('renders the component', () => {
        expect(wrapper.find('[data-testid=vrx-navbar]').exists()).toBe(true);
        expect(wrapper.find('[data-testid=vrx-navbar-button]').exists()).toBe(true);
    });

    it('change buttons', async () => {
        await wrapper.setProps({ buttons: [{
                    text: 'Test',
                    selected: false,
                    children: []
                }]
            }
        );
        expect(wrapper.props('buttons')).toEqual(
            [{
                text: 'Test',
                selected: false,
                children: []
            }]
        );
    });
});