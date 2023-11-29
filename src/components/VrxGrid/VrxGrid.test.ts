import {mount, shallowMount, VueWrapper} from "@vue/test-utils";
import {beforeEach, expect, it} from "vitest";
import VrxGrid from "@/components/VrxGrid/VrxGrid.vue";
import {reactive} from "vue";

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
    ]
    }
    const data =  [
        {
            id: "1",
            data:{
                name: "Mario Rossi",
                serialNumber: 1,
                color: "Red",
                model: "Fiat",
                plate: "AA123AA"
            },
        },
        {
            id: "2",
            data:{
                name: "Mario Bianchi",
                serialNumber: 2,
                color: "Blue",
                model: "Audi",
                plate: "AA123AB"
            }
        }
    ]

    beforeEach(() => {
        wrapper = shallowMount(VrxGrid as any, {props: {gridConfiguration: config, gridData: reactive(JSON.parse(JSON.stringify(data)))}})
    })

    it('renders the component', () => {
        wrapper = mount(VrxGrid as any, {props: {gridConfiguration: config, gridData: reactive(data)}})
        expect(wrapper.find('[data-testid=vrx-grid]').exists()).toBe(true);
        expect(wrapper.find('[data-testid=vrx-grid-header]').exists()).toBe(true);
        expect(wrapper.find('[data-testid=vrx-grid-row-1]').exists()).toBe(true);
    });

    it('set data', async () => {
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
        expect(wrapper.vm.getData().length).toBe(1);
        expect(wrapper.vm.getData()[0].id).toBe('2');
    });

    it('clear data', async () => {
        wrapper.vm.clearData();
        expect(wrapper.vm.getData().length).toBe(0);
    });

    it('select all items', async () => {
        wrapper.vm.selectAll();
        expect(wrapper.vm.getSelectedRows().length).toBe(2);
    });

    it('deselect all items', async () => {
        wrapper.vm.selectAll();
        wrapper.vm.deselectAll();
        expect(wrapper.vm.getSelectedRows().length).toBe(0);
    });

    it('select range', async () => {
        wrapper.vm.selectRange(0,1);
        expect(wrapper.vm.getSelectedRows().length).toBe(2);
    });

    it('get row by id', async () => {
        expect(wrapper.vm.getRowById('1').toString()).toBe(data[0].toString());
    });
});
