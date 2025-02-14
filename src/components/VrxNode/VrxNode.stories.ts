import type { Meta, StoryObj } from '@storybook/vue3'
// @ts-ignore
import VrxNode from "@/components/VrxNode/VrxNode.vue";

const meta : Meta<typeof VrxNode> = {
    title: 'VrxNode',
    component: VrxNode as any,
    tags: ['autodocs'],
}
export default meta;

type TreeStories = StoryObj<typeof VrxNode>;
const Template : TreeStories = {
    render: (args) => ({
        components: { VrxNode },
        setup() {
            return {
                args
            };
        },
        template: `
            <div class="h-full w-full">
            <VrxNode>
              <span class="dark:text-content-dark text-content-light hover:bg-gray-700 hover:dark:bg-gray-400 w-full"> Parent 1 </span>
              <template #children>
                  <VrxNode>
                    <span class="dark:text-content-dark text-content-light hover:bg-gray-700 hover:dark:bg-gray-400 w-full"> Child 1 </span>
                    <template #children>
                      <VrxNode> <span class="dark:text-content-dark text-content-light hover:bg-gray-700 hover:dark:bg-gray-400 w-full"> Child 1.1 </span> </VrxNode>
                    </template>
                    </VrxNode>
                  <VrxNode>
                    <span class="dark:text-content-dark text-content-light hover:bg-gray-700 hover:dark:bg-gray-400 w-full"> Child 2 </span>
                  <template #children>
                    <VrxNode>
                        <div class="flex flex-row gap-1 items-center hover:bg-gray-700 hover:dark:bg-gray-400 w-full" @click.stop>
                         <input type="checkbox"> <span class="dark:text-content-dark text-content-light"> Child 2.1 </span>
                        </div>
                        <template #children>
                            <div v-if="false" class="flex flex-row items-center dark:text-content-dark text-content-light hover:bg-gray-700 hover:dark:bg-gray-400 w-full">
                              <div> <input type="checkbox"> <span> Checkable </span> </div>
                            </div>
                        </template>
                    </VrxNode>
                  </template>
                  </VrxNode>
              </template>
            </VrxNode>
            </div>
        `
    }),
    args: {},
}

export const Primary: TreeStories = {
    ...Template,
}