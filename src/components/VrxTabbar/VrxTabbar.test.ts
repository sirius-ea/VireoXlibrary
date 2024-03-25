
import {describe, it, expect, beforeEach, vi} from 'vitest'
import {VrxTabbar, VrxTabContent, VrxTabLink, VrxTabList} from "@/main.ts";
import {mount, VueWrapper} from "@vue/test-utils";


const composedTabbar = {
    template: `
        <vrx-tabbar :default-value="defaultValue" @tabSelected="onTabSelected">
            <vrx-tab-list>
                <vrx-tab-link tab_name="defaultTab">
                    <span>Default Tab</span>
                </vrx-tab-link>
                <vrx-tab-link tab_name="newTab">
                    <span>New Tab</span>
                </vrx-tab-link>
                <vrx-tab-link tab_name="thirdTab">
                    <span>Third Tab</span>
                </vrx-tab-link>
            </vrx-tab-list>
            <vrx-tab-content tab_name="defaultTab">
                <div>Default Tab content</div>
            </vrx-tab-content>
            <vrx-tab-content tab_name="newTab">
                <div>New Tab content</div>
            </vrx-tab-content>
            <VrxTabContent tab_name="fourthTab">
                <div>Fourth Tab content</div>
            </VrxTabContent>
        </vrx-tabbar>
    `,
    components: {
        VrxTabbar,
        VrxTabList,
        VrxTabLink,
        VrxTabContent
    },
    data() {
        return {
            defaultValue: 'defaultTab',
            value: 'defaultTab'
        }
    },
    methods: {
        onTabSelected(tab: string) {
            // @ts-ignore
            this.value = tab
        }
    }
}

describe('VrxTabbar.vue', () => {
    let wrapper: VueWrapper<any>

    const warnSpy = vi.spyOn(console, 'warn')
    beforeEach(() => {
        warnSpy.mockReset()
        wrapper = mount(composedTabbar)
    })

    it('should render with default value', () => {
        expect(wrapper.vm.defaultValue).toBe('defaultTab')
    })

    it('should update value when tab is selected', async () => {
        wrapper.find('[aria-label="newTab"]').trigger('click')
        await wrapper.vm.$nextTick()
        expect(wrapper.vm.value).toBe('newTab')
    })

    it('should emit tabSelected event when tab is selected', async () => {

        expect(wrapper.vm.value).toBe('defaultTab')
        wrapper.find('[aria-label="newTab"]').trigger('click')
        await wrapper.vm.$nextTick()
        expect(wrapper.findComponent(VrxTabbar).emitted().tabSelected).toBeTruthy()
        expect(wrapper.findComponent(VrxTabbar).emitted().tabSelected[0]).toEqual(['newTab'])
        expect(wrapper.vm.value).toBe('newTab')
    })

    it('should not update value when the same tab is selected', async () => {
        wrapper.find('[aria-label="defaultTab"]').trigger('click')
        await wrapper.vm.$nextTick()
        expect(wrapper.vm.value).toBe('defaultTab')
        expect(wrapper.findComponent(VrxTabbar).emitted().tabSelected).toBeFalsy()
    })

    it("should print a warning message when a tab link doesn't have a corresponding tab content and viceversa", async () => {
        expect(warnSpy).toHaveBeenCalledTimes(2)
        expect(wrapper.vm.value).toBe('defaultTab')
        wrapper.find('[aria-label="thirdTab"]').trigger('click')
        await wrapper.vm.$nextTick()
        expect(wrapper.vm.value).toBe('thirdTab')
    })
})
