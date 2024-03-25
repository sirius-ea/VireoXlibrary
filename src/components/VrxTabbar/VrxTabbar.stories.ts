// stories for VrxButton
import type { Meta, StoryObj } from '@storybook/vue3'
import VrxTabbar from "./VrxTabbar.vue";
import VrxTabList from "@/components/VrxTabbar/VrxTabList.vue";
import VrxTabLink from "@/components/VrxTabbar/VrxTabLink.vue";
import VrxTabContent from "@/components/VrxTabbar/VrxTabContent.vue";


const meta : Meta<typeof VrxTabbar> = {
    title: 'VrxTabbar',
    component: VrxTabbar,
    tags: [],
    argTypes: {
    }
};

export default meta;

type TabStory = StoryObj<typeof VrxTabbar>;


const Template: TabStory = {
    render: (args) => ({
        components: { VrxTabbar, VrxTabList, VrxTabLink, VrxTabContent},
        setup() {
            return {
                args
            };
        },

        template: `
            <VrxTabbar :default-value="'Tab 1'">
                <VrxTabList>
                    <VrxTabLink :tab_name="'Tab 1'">
                      <span>Tab 1</span>
                    </VrxTabLink>
                    <VrxTabLink :tab_name="'Tab 2'">
                      <span>Tab 2</span>
                    </VrxTabLink>
                </VrxTabList>
                <VrxTabContent :tab_name="'Tab 1'">
                    <div>Tab 1 content</div>
                </VrxTabContent>
                <VrxTabContent :tab_name="'Tab 2'">
                    <div>Tab 2 content</div>
                </VrxTabContent>
                <VrxTabContent :tab_name="'Tab 3'">
                    <div>Tab 3 content</div>
                </VrxTabContent>
            </VrxTabbar>`
    }),
    args: {
    },
}

export const Primary: TabStory = {
    ...Template

};

