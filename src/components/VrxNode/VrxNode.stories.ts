import type { Meta, StoryObj } from '@storybook/vue3'
// @ts-ignore
import VrxNode from "@/components/VrxNode/VrxNode.vue";
import {VrxButton} from "@/components";

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
              <template #content> <span class="dark:text-content-dark text-content-light"> Parent 1 </span> </template>
              <VrxNode>
                <VrxNode> <template #content> <span class="dark:text-content-dark text-content-light"> Child 1.1 </span> </template> </VrxNode>
                <template #content> <span class="dark:text-content-dark text-content-light"> Child 1 </span> </template>
                </VrxNode>
              <VrxNode>
                <template #content> <span class="dark:text-content-dark text-content-light"> Child 2 </span> </template>
                <VrxNode>
                  <template #content>
                    <div class="flex flex-row gap-1 items-center" @click.stop>
                     <input type="checkbox"> <span class="dark:text-content-dark text-content-light"> Child 2.1 </span>
                    </div>
                  </template>
                <div v-if="false" class="flex flex-row items-center">
                  <div> <input type="checkbox"> <span class="dark:text-content-dark text-content-light"> Checkable </span> </div>
                </div>
                </VrxNode>
              </VrxNode>
            </VrxNode>
            </div>
        `
    }),
    args: {},
}

export const Primary: TreeStories = {
    ...Template,
}