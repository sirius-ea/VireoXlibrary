import {Meta, StoryObj} from "@storybook/vue3";
import VrxGrid from "@/components/VrxGrid/VrxGrid.vue";
import {GridRowInterface} from "@/components/VrxGrid/GridConfigurationInterface.ts";
import {VrxInput} from "@/components";

const meta : Meta<typeof VrxGrid> = {
    title: 'VrxGrid',
    component: VrxGrid,
    tags: ['autodocs'],
    argTypes: {
    }
};

export default meta;

type GridStories = StoryObj<typeof VrxGrid>;


const Template: GridStories = {
    render: (args) => ({
        components: { VrxGrid },
        setup() {
            return {
                args
            };
        },

        template: `
          <div style="height: 500px">
            <VrxGrid v-bind="args"  :grid-configuration="args.gridConfiguration"/>
          </div>
        `
    }),
    args: {
        gridConfiguration: {
            id: "test",
            selectable: true,
            header: [
                {
                    text: "Name",
                    id: "name",
                    align: "left",
                    sortable: true,
                    type: "text",
                    filterType: "text",
                    filterPlaceholder: "Search by name",
                    width: 150,
                },
                {
                    text: "Serial Number",
                    id: "serialNumber",
                    align: "left",
                    sortable: true,
                    filterType: "text",
                    width: 150
                },
                {
                    text: "Color",
                    id: "color",
                    align: "left",
                    sortable: true,
                    filterType: "select",
                    width: 150
                },
                {
                    text: "Model",
                    id: "model",
                    align: "left",
                    sortable: true,
                    filterType: "text",
                    width: 150
                },
                {
                    text: "Plate",
                    id: "plate",
                    align: "left",
                    sortable: true,
                    filterType: "select",
                    width: 150
                },
            ],
            data: [
                {
                    data:{
                        name: "Dario",
                        serialNumber: 1234,
                        color: "red",
                        model: "Fiat",
                        plate: "AA123BB"
                    }
                },
                {
                    data:{
                        name: 'Ciao',
                        serialNumber: 0,
                        color: "black",
                        model: "Audi",
                        plate: "BC123AA"
                    }
                }
            ]
        }
    },
}

export const Primary: GridStories = {
    ...Template
};