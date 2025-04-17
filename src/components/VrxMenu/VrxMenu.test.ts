import {beforeEach, describe, expect, vi} from "vitest";
import {mount, VueWrapper} from "@vue/test-utils";
import {VrxMenu, VrxLink} from "@/components";
import {vClickOutside} from "@/directives";


const ComposedMenu = {
    directives: {
        vClickOutside
    },
    template: `
      <div testid="testing-click-outside" style="height: 500px; width: 200px"> ciao </div>
      <div style="height: 200px;width: 200px">
        <vrx-menu>
          <vrx-link testid="link-template">
            Google
            <template #child>
              <vrx-link testid="link-child-template">Google</vrx-link>
            </template>
          </vrx-link>
          <vrx-link testid="link-template-2">
            Second child
            <template #child>
              <vrx-link testid="link-child-template-2" component="a">Best</vrx-link>
            </template>
          </vrx-link>
        </vrx-menu>
      </div>
    `,
    components: {
        VrxMenu,
        VrxLink
    },
}

describe('VrxMenu', () => {

    let wrapper: VueWrapper<any>;
    beforeEach(() => {
        wrapper = mount(ComposedMenu, {
            attachTo: document.body
        });
    });

    it('renders the component', () => {
        expect(wrapper.find('[testid=vrx-menu]').exists()).toBe(true);
    });

    it('renders the links with the child one not showed', () => {
        expect(wrapper.find('[testid=link-template]').exists()).toBe(true);
        expect(wrapper.find('[testid=link-child-template]').exists()).toBe(false);
        expect(wrapper.find('[testid=link-template-2]').exists()).toBe(true);
        expect(wrapper.find('[testid=link-child-template-2]').exists()).toBe(false);
    });

    it('show the child one', async () => {
        expect(wrapper.find('[testid=link-child-template]').exists()).toBe(false);
        expect(wrapper.find('[testid=link-template]').element.classList.toString()).not.contains('bg-content-dark dark:bg-content-light')
        await wrapper.find('[testid=link-template]').trigger('click');
        expect(wrapper.find('[testid=link-child-template]').exists()).toBe(true);
        expect(wrapper.find('[testid=link-template]').element.classList.toString()).contains('bg-content-dark dark:bg-content-light')
    });

    it("show the second child", async () => {
        expect(wrapper.find('[testid=link-child-template-2]').exists()).toBe(false);
        expect(wrapper.find('[testid=link-template-2]').element.classList.toString()).not.contains('bg-content-dark dark:bg-content-light')
        await wrapper.find('[testid=link-template-2]').trigger('click');
        expect(wrapper.find('[testid=link-child-template-2]').element!.parentElement!.style.display).toBe("");
        expect(wrapper.find('[testid=link-child-template-2]').element!.parentElement!.parentElement!.style.top).not.toBe(0);
        expect(wrapper.find('[testid=link-child-template-2]').element.children[0].tagName).toBe('A');
        expect(wrapper.find('[testid=link-template-2]').element.classList.toString()).contains('bg-content-dark dark:bg-content-light')
    })

    it("should hide when clicked again", async () => {
        expect(wrapper.find('[testid=link-child-template-2]').exists()).toBe(false);
        await wrapper.find('[testid=link-template-2]').trigger('click');
        expect(wrapper.find('[testid=link-child-template-2]').exists()).toBe(true);
        await wrapper.find('[testid=link-template-2]').trigger('click');
        expect(wrapper.find('[testid=link-child-template-2]').exists()).toBe(false);
    })

    it("should hide when clicked outside", async () => {
        expect(wrapper.find('[testid=link-child-template-2]').isVisible()).toBe(false);
        await wrapper.find('[testid=link-template-2]').trigger('click');
        expect(wrapper.find('[testid=link-child-template-2]').isVisible()).toBe(true);
        await wrapper.find('[testid=testing-click-outside]').trigger('click');
        expect(wrapper.find('[testid=link-child-template-2]').isVisible()).toBe(false);
    })
});
