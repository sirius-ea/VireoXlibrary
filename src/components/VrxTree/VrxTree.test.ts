import {beforeEach, describe, expect, test} from "vitest";
import {mount, VueWrapper} from "@vue/test-utils";
import VrxTree from "@/components/VrxTree/VrxTree.vue";

describe("VrxTree", () => {
    let wrapper: VueWrapper<any>

    beforeEach(() => {
      wrapper = mount(VrxTree as any, {
        props: {
            tree:[
                {
                    id: '1',
                    label: 'Label 1',
                    children: [
                        {
                            id: '1.1',
                            label: 'Label 1.1',
                            children: [
                                {
                                    id: '1.1.1',
                                    label: 'Label 1.1.1',
                                },
                                {
                                    id: '1.1.2',
                                    label: 'Label 1.1.2',
                                }
                            ]
                        }, {
                            id: '1.2',
                            label: 'Label 1.2',
                        }
                    ]
                }
            ]
        }
      })
    })

    test("should render correctly", () => {
        expect(wrapper.find('[data-testid=vrx-tree]').exists()).toBe(true)
    });
})
