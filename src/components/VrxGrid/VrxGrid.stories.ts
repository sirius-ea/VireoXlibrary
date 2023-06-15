import {Meta, StoryObj} from "@storybook/vue3";
import VrxGrid from "@/components/VrxGrid/VrxGrid.vue";
import {GridRowInterface} from "@/components/VrxGrid/GridConfigurationInterface.ts";

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
          <VrxGrid v-bind="args"  :grid-configuration="args.gridConfiguration"/>
        `
    }),
    args: {
        gridConfiguration: {
            id: "test",
            header: [
                {
                    text: "Name",
                    id: "name",
                    align: "left",
                    sortable: true,
                },
                {
                    text: "Serial Number",
                    id: "serialNumber",
                    align: "left",
                    sortable: true,
                    sortDirection: "asc"
                }
            ],
            data: [
                {
                    textColor: "red",
                    data:{
                        name: "Dario",
                        serialNumber: 1234
                    }
                },
                {
                    data:{
                        name: "Ciro",
                        serialNumber: 0
                    }
                }
            ]
        }
    },
}

export const Primary: GridStories = {
    ...Template
};