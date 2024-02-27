import {Meta, StoryObj} from "@storybook/vue3";
import VrxMenu from "@/components/VrxMenu/VrxMenu.vue";
import VrxLink from "@/components/VrxMenu/VrxLink.vue";
import {VrxButton, VrxIcon} from "@/components";

const meta : Meta<typeof VrxMenu> = {
    title: 'VrxMenu',
    component: VrxMenu,
    tags: ['autodocs'],
    argTypes: {
    }
};

export default meta;

type MenuStories = StoryObj<typeof VrxMenu>;
type LinkStories = StoryObj<typeof VrxLink>;


export const MenuExample: MenuStories = {
    render: (args) => ({
        components: { VrxMenu, VrxLink, VrxIcon, VrxButton },
        setup() {
            return {
                args
            };
        },

        template: `
          <div style="height: 500px; width: 100%">
            <VrxMenu>
              <VrxLink>
                <VrxIcon icon="database"/>
                <span>Realtime</span>
                <template #child>
                  <VrxLink>
                    <VrxIcon icon="document"/>
                    <span>Dashboard</span>
                    <template #child>
                      <VrxLink>
                        <VrxIcon icon="document"/>
                        <span>Dashboard</span>
                      </VrxLink>
                      <VrxLink>
                        <VrxIcon icon="database"/>
                        <span>Gis</span>
                      </VrxLink>
                    </template>
                  </VrxLink>
                  <VrxLink>
                    <VrxIcon icon="database"/>
                    <span>Gis</span>
                  </VrxLink>
                </template>
              </VrxLink>
              <div class="w-full border-t border-gray-200 dark:border-gray-700"></div>
              <VrxLink>
                <VrxIcon icon="attachment"></VrxIcon>
                <span>Attachments</span>
              </VrxLink>
              <VrxButton color="default" size="sm">
                <VrxIcon icon="database"/>
                <span>Dashboard</span>
              </VrxButton>
            </VrxMenu>
          </div>
        `
    })
}

export const VrxLink_Example: LinkStories = {
    render: (args) => ({
        components: { VrxLink, VrxIcon },
        setup() {
            return {
                args
            };
        },

        template: `
          <div style="height: 500px; width: fit-content">
            <VrxLink>
              <VrxIcon icon="database"/>
              <span>Realtime</span>
              <template #child>
                <VrxLink>
                  <VrxIcon icon="document"/>
                  <span>Dashboard</span>
                  <template #child>
                    <VrxLink>
                      <VrxIcon icon="document"/>
                      <span>Dashboard</span>
                    </VrxLink>
                    <VrxLink>
                      <VrxIcon icon="database"/>
                      <span>Gis</span>
                    </VrxLink>
                  </template>
                </VrxLink>
                <VrxLink>
                  <VrxIcon icon="database"/>
                  <span>Gis</span>
                </VrxLink>
              </template>
            </VrxLink>
          </div>
        `
    })

}
