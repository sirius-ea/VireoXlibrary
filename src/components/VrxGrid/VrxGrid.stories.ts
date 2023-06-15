import {Meta, StoryObj} from "@storybook/vue3";
import VrxGrid from "@/components/VrxGrid/VrxGrid.vue";

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
                    align: "left",
                    sortable: true,
                    sortFunction: () => {},
                    sortDirection: "asc"
                },
                {
                    text: "Color",
                    align: "left",
                    sortable: false,
                    sortFunction: () => {},
                    sortDirection: "asc"
                }
            ],
            data: [
                {
                    textColor: "red",
                    data:{
                        name: "Pippo",
                        color: "Red"
                    }
                },
                {
                    data:{
                        name: "Pippo",
                        color: "Blue"
                    }
                }
            ]
        }
    },
}

export const Primary: GridStories = {
    ...Template
};