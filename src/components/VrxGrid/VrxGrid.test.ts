import {mount, shallowMount, VueWrapper} from "@vue/test-utils";
import {expect, it} from "vitest";
import VrxGrid from "@/components/VrxGrid/VrxGrid.vue";

describe('VrxGrid', () => {
    let wrapper : VueWrapper<any>;
    const config = {
        id: "test",
            selectable: true,
        multiselect: true,
        header: [
        {
            text: "Name",
            id: "name",
            align: "left",
            sortable: true,
            type: "text",
            filterType: "text",
        },
    ],
        data: [
        {
            id: "1",
            data:{
                name: "Mario Rossi",
                serialNumber: 1,
                color: "Red",
                model: "Fiat",
                plate: "AA123AA"
            }
        }
    ]
    }

    it('renders the component', () => {
        wrapper = mount(VrxGrid as any, {props: {gridConfiguration: config}});
        expect(wrapper.find('[data-testid=vrx-grid]').exists()).toBe(true);
        expect(wrapper.find('[data-testid=vrx-grid-header]').exists()).toBe(true);
        expect(wrapper.find('[data-testid=vrx-grid-row-1]').exists()).toBe(true);
    });

    it('select all items', async () => {
        wrapper = shallowMount(VrxGrid as any, {props: {gridConfiguration: config}});
        wrapper.vm.selectAll();
        expect(wrapper.vm.getSelectedRows().length).toBe(1);
    });

    it('deselect all items', async () => {
        wrapper = shallowMount(VrxGrid as any, {props: {gridConfiguration: config}});
        wrapper.vm.selectAll();
        wrapper.vm.deselectAll();
        expect(wrapper.vm.getSelectedRows().length).toBe(0);
    });

    it('set data', async () => {
        wrapper = shallowMount(VrxGrid as any, {props: {gridConfiguration: config}});
        wrapper.vm.setData([{
            id: "2",
            data: {
                name: "Mario Bianchi",
                serialNumber: 11,
                color: "Red",
                model: "Fiat",
                plate: "AA123AA"
            }
        }]);
        expect(wrapper.props('gridConfiguration').data.length).toBe(1);
        expect(wrapper.props('gridConfiguration').data[0].id).toBe('2');
    });

    it('clear data', async () => {
        wrapper = shallowMount(VrxGrid as any, {props: {gridConfiguration: config}});
        wrapper.vm.clearData();
        expect(wrapper.props('gridConfiguration').data.length).toBe(0);
    });
});