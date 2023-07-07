import {beforeEach, describe, expect} from "vitest";
import {mount, VueWrapper} from "@vue/test-utils";
import {VrxNavbar} from "@/components";
import LinkTemplate from "@/components/VrxNavbar/subcomponents/LinkTemplate.vue";

describe('VrxNavbar', () => {

    let wrapper: VueWrapper<any>;
    beforeEach(() => {
        wrapper = mount(VrxNavbar as any, {
            props: {
                buttons: [{
                    text: 'Test',
                    children: [
                        {
                            text: 'Sub-Test',
                            description: 'Description',
                        },
                        {
                            text: 'Sub-Test2',
                            description: 'Description',
                            component:{
                                name: LinkTemplate,
                                props: {
                                    href: 'https://www.sirius.to.it'
                                }
                            }
                        }
                    ]
                }]
            }
        });
    });

    it('renders the component', () => {
        expect(wrapper.find('[data-testid=vrx-navbar]').exists()).toBe(true);
        expect(wrapper.find('[data-testid=vrx-navbar-button]').exists()).toBe(true);
    });

    it('has the correct text', () => {
        expect(wrapper.find('[data-testid=vrx-navbar-button]').text()).toBe('Test');
        expect(wrapper.props('buttons')[0].text).toBe('Test');
        expect(wrapper.props('buttons')[0].children[0].text).toBe('Sub-Test');
    });

    it('renders the dropdown', async () => {
        await wrapper.find('[data-testid=vrx-navbar-button]').trigger('click');
        expect(wrapper.find('[data-testid=vrx-navbar-dropdown]').exists()).toBe(true);
    });

    it('renders the provided component', async () => {
        await wrapper.find('[data-testid=vrx-navbar-button]').trigger('click');
        expect(wrapper.find('[data-testid=vrx-navbar-dropdown]').exists()).toBe(true);
        expect(wrapper.find('[data-testid=link-template]').exists()).toBe(true);
    });
});