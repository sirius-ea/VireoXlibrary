import {mount, VueWrapper} from "@vue/test-utils";
import VrxTree from "@/components/VrxTree/VrxTree.vue";
import {expect} from "vitest";

describe('VrxTree', () => {
    let wrapper : VueWrapper<any>;
    const data = [
        {
            id: "",
            text: "0",
            icon: "rocket",
            selected: false,
            userData: { type: "root" },
            children: Array.from(Array(5).keys()).map((i) => ({
                id: "",
                text: `Children ${i}`,
                userData: { test: "ciao" },
                icon: "folder",
                children: [],
            })),
        }
    ]
    const data2 = [
        {
            id: "",
            text: "0",
            icon: "rocket",
            selected: true,
            userData: { type: "root" },
            children: Array.from(Array(5).keys()).map((i) => ({
                id: "",
                text: `Children ${i}`,
                userData: { test: "ciao" },
                icon: "folder",
                children: [],
            })),
        }
    ]

    beforeEach(() => {
        wrapper = mount(VrxTree as any, {props: {data: data}});
    });

    it('renders the component', () => {
        expect(wrapper.find('[data-testid=vrx-tree]').exists()).toBe(true);
        expect(wrapper.find('[data-testid=vrx-tree-node]').exists()).toBe(true);
    });

    it('generate ids', () => {
        expect(data[0].id).not.toBe("");
        data[0].children.flatMap((c : any) => expect(c.id).not.toBe(""));
    });

    it('get a node by text', () => {
        expect(wrapper.vm.getNodeByText("0")).toEqual(data[0]);
        expect(wrapper.vm.getNodeByText("Children 0")).toEqual(data[0].children[0]);
    });

    it('get the selected nodes when none selected', () => {
        wrapper = mount(VrxTree as any, {props: {data: data}});
        expect(wrapper.vm.getSelectedNodes()).length(0);
    });

    it('get the selected nodes when main parent selected', () => {
        wrapper = mount(VrxTree as any, {props: {data: data2}});
        expect(wrapper.vm.getSelectedNodes()).length(6);
    })

    it('add a node to selected', () => {
        const id = wrapper.vm.getNodeByText("Children 0").id;
        wrapper.vm.addNode(id);
        expect(wrapper.vm.getSelectedNodes()).length(1);
    });

    it('remove a node from selected', () => {
        const id = wrapper.vm.getNodeByText("Children 0").id;
        wrapper.vm.addNode(id);
        expect(wrapper.vm.getSelectedNodes()).length(1);
        wrapper.vm.removeNodeById(id);
        expect(wrapper.vm.getSelectedNodes()).length(0);
    });

    it('flats the tree', () => {
        expect(wrapper.vm.flattenTree(data[0]).length).toBe(6);
    });
});