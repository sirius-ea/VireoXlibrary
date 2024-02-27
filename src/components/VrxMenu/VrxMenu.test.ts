import {beforeEach, describe, expect} from "vitest";
import {mount, VueWrapper} from "@vue/test-utils";
import {VrxMenu, VrxLink} from "@/components";

const ComposedMenu = {
    template: `
        <vrx-menu>
            <vrx-link testid="link-template">
              Google
              <template #child>
                <vrx-link testid="link-child-template">Google</vrx-link>
              </template>
            </vrx-link>
        </vrx-menu>
    `,
    components: {
        VrxMenu,
        VrxLink
    }
}
describe('VrxMenu', () => {

    let wrapper: VueWrapper<any>;
    beforeEach(() => {
        wrapper = mount(ComposedMenu);
    });

    it('renders the component', () => {
        expect(wrapper.find('[testid=vrx-menu]').exists()).toBe(true);
    });

    it('renders the links with the child one not showed', () => {
        expect(wrapper.find('[testid=link-template]').exists()).toBe(true);
        expect(wrapper.find('[testid=link-child-template]').exists()).toBe(false);
    });

    it('show the child one', async () => {
        expect(wrapper.find('[testid=link-child-template]').exists()).toBe(false);
        expect(wrapper.find('[testid=link-template]').element.classList.toString()).not.contains('bg-content-dark dark:bg-content-light')
        await wrapper.find('[testid=link-template]').trigger('click');
        expect(wrapper.find('[testid=link-child-template]').element!.parentElement!.style.display).toBe("");
        expect(wrapper.find('[testid=link-template]').element.classList.toString()).contains('bg-content-dark dark:bg-content-light')
    });
});
