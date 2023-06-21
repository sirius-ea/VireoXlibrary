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
                    filterType: "select",
                    width: 150
                },
                {
                    text: "Plate",
                    id: "plate",
                    align: "left",
                    sortable: true,
                    filterType: "text",
                    width: 150
                },
            ],
            data: [
                {
                    data:{
                        name: "Mario Rossi",
                        serialNumber: 1,
                        color: "Red",
                        model: "Fiat",
                        plate: "AA123AA"
                    }
                },
                {
                    data:{
                        name: 'Pino Verdi',
                        serialNumber: 2,
                        color: "Black",
                        model: "Audi",
                        plate: "AA123BB"
                    }
                },
                {
                    data:{
                        name: 'Ciro Bianchi',
                        serialNumber: 3,
                        color: "Green",
                        model: "BMW",
                        plate: "AA123CC"
                    }
                },
                {
                    textColor: "red",
                    backgroundColor: "rgba(255,241,0,0.3)",
                    data:{
                        name: 'Luisa Neri',
                        serialNumber: 4,
                        color: "Gray",
                        model: "Renault",
                        plate: "AA123DD"
                    }
                },
                {
                    data:{
                        name: 'Giovanni Gialli',
                        serialNumber: 5,
                        color: "Gray",
                        model: "Toyota",
                        plate: "BC123EE"
                    }
                }
            ]
        }
    },
}

export const Primary: GridStories = {
    ...Template
};