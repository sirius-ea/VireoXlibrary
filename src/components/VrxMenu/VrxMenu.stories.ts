import {Meta, StoryObj} from "@storybook/vue3";
import VrxLink from "@/components/VrxMenu/VrxLink.vue";
import {VrxButton, VrxIcon, VrxMenu} from "@/components";

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
            <VrxMenu class="rounded-xl overflow-hidden border">
                <template #header>
                  <div class="bg-gray-200 dark:bg-gray-800 w-full text-center text-xl font-bold p-2 flex gap-2 items-center border-b"> <VrxIcon icon="wind"/> New product </div>
                </template>
              <VrxLink>
                <VrxIcon icon="attachment"></VrxIcon>
                <span>Attachments</span>
              </VrxLink>
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
                <VrxIcon icon="database"/>
                <span>With Component</span>
                <template #child>
                  <VrxLink >
                    <VrxIcon icon="document"/>
                    <span>Links</span>
                    <template #child>
                      <VrxLink component="a" :component-props="{class:'pippo', href:'https://google.com'}">
                        <VrxIcon icon="document"/>
                        <span>Google</span>
                      </VrxLink>
                    </template>
                  </VrxLink>
                  <VrxLink>
                    <VrxIcon icon="database"/>
                    <span>Gis</span>
                  </VrxLink>
                </template>
              </VrxLink>
              <VrxButton color="default" size="sm">
                <VrxIcon icon="database"/>
                <span>Dashboard</span>
              </VrxButton>
              <VrxLink>
                <VrxIcon icon="language"/>
                <span>Languages</span>
                <template #child>
                  <VrxLink>
                    <VrxIcon icon="document"/>
                    <span>Italian</span>
                    <template #child>
                      <VrxLink>
                        <VrxIcon icon="document"/>
                        <span>Napoletano</span>
                      </VrxLink>
                      <VrxLink>
                        <VrxIcon icon="database"/>
                        <span>Milanese</span>
                      </VrxLink>
                    </template>
                  </VrxLink>
                  <VrxLink>
                    <VrxIcon icon="document"/>
                    <span>French</span>
                  </VrxLink>
                </template>
              </VrxLink>
              <template #footer>
                <span class="w-full text-gray-400 text-center italic text-xs p-2 border-t bg-gray-200">
                Made with ❤️ by Sirius</span>
              </template>
            </VrxMenu>
          </div>
        `
    })
}

export const VrxLink_Example: LinkStories = {
    render: (args) => ({
        components: { VrxLink, VrxIcon, VrxMenu },
        setup() {
            return {
                args
            };
        },

        template: `
          <VrxMenu style="height: 500px; width: fit-content">
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
          </VrxMenu>
        `
    })

}
