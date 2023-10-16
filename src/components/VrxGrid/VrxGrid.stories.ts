import {Meta, StoryObj} from "@storybook/vue3";
import VrxGrid from "@/components/VrxGrid/VrxGrid.vue";
import {VrxButton, VrxInput} from "@/components";
import {Row} from "@/components/VrxGrid/Models/Row.ts";

const meta : Meta<typeof VrxGrid> = {
    title: 'VrxGrid',
    component: VrxGrid,
    tags: ['autodocs'],
    argTypes: {

    },
};

export default meta;

type GridStories = StoryObj<typeof VrxGrid>;

const gridData = [
    {
        id: "1",
        data:{
            active: true,
            name: "Mario Rossi",
            serialNumber: 1,
            color: "Red",
            model: "Fiat",
            plate: "AA123AA"
        }
    },
    {
        id: "2",
        data:{
            active: true,
            name: 'Pino Verdi',
            serialNumber: 2,
            color: "Black",
            model: "Audi",
            plate: "AA123BB"
        }
    },
    {
        id: "3",
        data:{
            active: false,
            name: 'Ciro Bianchi',
            serialNumber: 3,
            color: "Green",
            model: "BMW",
            plate: "AA123CC"
        }
    },
    {
        id: "4",
        data:{
            active: false,
            name: 'Luisa Neri',
            serialNumber: 4,
            color: "Gray",
            model: "Renault",
            plate: "AA123DD"
        }
    },
    {
        id: "5",
        data:{
            active: false,
            name: 'Giovanni Gialli',
            serialNumber: 5,
            color: "Gray",
            model: "Toyota",
            plate: "BC123EE"
        }
    }
];

const Template: GridStories = {
    render: (args) => ({
        components: { VrxGrid, VrxButton },
        setup() {
            return {
                args,
            };
        },
        methods: {
            logItem(){
                alert(this.$refs.myRef.getSelectedRows().map((row : Row) => row.data.name).join(", "));
            },
            setData(data : any[]){
                this.$refs.myRef.setData(data)
            },
            selectAll(){
                this.$refs.myRef.selectAll()
            },
            deselectAll(){
                this.$refs.myRef.deselectAll()
            },
            updateData(data : any[]){
                this.$refs.myRef.updateData(data);
            },
            clearData(){
                this.$refs.myRef.clearData()
            },
        },
        template: `
          <VrxGrid v-bind="args" ref="myRef" :grid-configuration="args.gridConfiguration" :grid-data="args.gridData" style="height: 370px"/>

          <div style="padding-top: 30px; display: flex; flex-direction: row; gap: 5px">
              <VrxButton color="default" size="sm" @click="logItem" >Log selected items</VrxButton>
              <VrxButton color="default" size="sm" @click="setData(
                  [{ data: {name: 'Maria Rosa',serialNumber: 6,color: 'Black',model: 'Audi',plate: 'AA123BC'},id: '6'}])">Set Data</VrxButton>
              <VrxButton color="default" size="sm" @click="updateData(
                  [{id: '2', data: {name: 'Ilary Blasi',serialNumber: 10,color: 'Blue',model: 'BMW',plate: 'AA123BC'}}])">Update Data</VrxButton>
              <VrxButton color="default" size="sm" @click="clearData">Clear Data</VrxButton>
              <VrxButton color="default" size="sm" @click="selectAll">Select All</VrxButton>
              <VrxButton color="default" size="sm" @click="deselectAll">Deselect All</VrxButton>
          </div>
        `,
    }),
    args: {},
}

export const Primary: GridStories = {
    ...Template,
    args: {
        gridConfiguration: {
            id: "test",
            selectable: false,
            multiselect: false,
            header: [
                {
                    text: "Active",
                    id: "active",
                    align: "center",
                    type: "boolean",
                    editable: false,
                    sortable: true,
                    width: 100,
                },
                {
                    text: "Name",
                    id: "name",
                    align: "left",
                    sortable: true,
                    type: "text",
                },
                {
                    text: "Color",
                    id: "color",
                    align: "left",
                    sortable: true,
                },
                {
                    text: "Model",
                    id: "model",
                    align: "left",
                    sortable: true,
                },
                {
                    text: "Plate",
                    id: "plate",
                    align: "left",
                    sortable: true,
                },
            ],
        },
        gridData: gridData,
    }
};

export const Filtrable: GridStories = {
    ...Template,
    args: {
        gridConfiguration: {
            id: "test",
            selectable: false,
            multiselect: false,
            header: [
                {
                    text: "Active",
                    id: "active",
                    align: "center",
                    type: "boolean",
                    editable: false,
                    sortable: true,
                    width: 150,
                    filterType: "select",
                },
                {
                    text: "Name",
                    id: "name",
                    align: "left",
                    sortable: true,
                    type: "text",
                    filterType: "text",
                    filterPlaceholder: "Search by name",
                },
                {
                    text: "Color",
                    id: "color",
                    align: "left",
                    sortable: true,
                    filterType: "select",
                    width: 150,
                },
                {
                    text: "Model",
                    id: "model",
                    align: "left",
                    sortable: true,
                    filterType: "select",
                    width: 150,
                },
                {
                    text: "Plate",
                    id: "plate",
                    align: "left",
                    sortable: true,
                    filterType: "text",
                },
            ],
        },
        gridData: gridData,
    }
};

export const Selectable: GridStories = {
    ...Template,
    args: {
        gridConfiguration: {
            id: "test",
            selectable: true,
            multiselect: false,
            header: [
                {
                    text: "Active",
                    id: "active",
                    align: "center",
                    type: "boolean",
                    editable: false,
                    sortable: true,
                    width: 100,
                },
                {
                    text: "Name",
                    id: "name",
                    align: "left",
                    sortable: true,
                    type: "text",
                },
                {
                    text: "Color",
                    id: "color",
                    align: "left",
                    sortable: true,
                },
                {
                    text: "Model",
                    id: "model",
                    align: "left",
                    sortable: true,
                },
                {
                    text: "Plate",
                    id: "plate",
                    align: "left",
                    sortable: true,
                },
            ],
        },
        gridData: gridData,
    }
};

export const Multiselectable: GridStories = {
    ...Template,
    args: {
        gridConfiguration: {
            id: "test",
            selectable: true,
            multiselect: true,
            header: [
                {
                    text: "Active",
                    id: "active",
                    align: "center",
                    type: "boolean",
                    editable: false,
                    sortable: true,
                    width: 100,
                },
                {
                    text: "Name",
                    id: "name",
                    align: "left",
                    sortable: true,
                    type: "text",
                },
                {
                    text: "Color",
                    id: "color",
                    align: "left",
                    sortable: true,
                },
                {
                    text: "Model",
                    id: "model",
                    align: "left",
                    sortable: true,
                },
                {
                    text: "Plate",
                    id: "plate",
                    align: "left",
                    sortable: true,
                },
            ],
        },
        gridData: gridData,
    }
};

export const Editable: GridStories = {
    ...Template,
    args: {
        gridConfiguration: {
            id: "test",
            selectable: false,
            multiselect: false,
            header: [
                {
                    text: "Active",
                    id: "active",
                    align: "center",
                    type: "boolean",
                    editable: true,
                    sortable: true,
                    width: 100,
                },
                {
                    text: "Name",
                    id: "name",
                    align: "left",
                    sortable: true,
                    type: "text",
                    editable: true,
                    editType: "text",
                    width: 200,
                },
                {
                    text: "Color",
                    id: "color",
                    align: "left",
                    sortable: true,
                    editable: true,
                    editType: "select",
                    editOptions: [{text: "Red", value: "Red"}, {text: "Black", value: "Black"}, {text: "Green", value: "Green"}, {text: "Gray", value: "Gray"}],
                },
                {
                    text: "Model",
                    id: "model",
                    align: "left",
                    sortable: true,
                    editable: true,
                    editType: "text",
                    width: 200,
                },
                {
                    text: "Plate",
                    id: "plate",
                    align: "left",
                    sortable: true,
                },
            ],
        },
        gridData: gridData,
    }
};
export const Static_Content: GridStories = {
    ...Template,
    args: {
        gridConfiguration: {
            id: "test",
            selectable: false,
            multiselect: false,
            header: [
                {
                    text: "Active",
                    id: "active",
                    align: "center",
                    type: "boolean",
                    sortable: true,
                    width: 100,
                },
                {
                    text: "Name",
                    id: "name",
                    align: "left",
                    sortable: true,
                    type: "text",
                    width: 200,
                },
                {
                    text: "Color",
                    id: "color",
                    align: "left",
                    sortable: true,
                },
                {
                    text: "Model",
                    id: "model",
                    align: "left",
                    sortable: true,
                    width: 200,
                },
                {
                    text: "Plate",
                    id: "plate",
                    align: "left",
                    sortable: true,
                },
                {
                    text: "Actions",
                    id: "actions",
                    align: "center",
                    type: "static",
                    staticHTML: "<button class='border rounded-md p-1 hover:text-blue-700 hover:border-blue-700 dark:hover:text-blue-500 dark:hover:border-blue-500 w-24'>✍🏻 Edit</button>",
                },
            ],
        },
        gridData: gridData,
    }
};

export const Colspan: GridStories = {
    ...Template,
    args: {
        gridConfiguration: {
            id: "test",
            selectable: false,
            multiselect: false,
            header: [
                {
                    text: "Active",
                    id: "active",
                    align: "center",
                    type: "boolean",
                    width: 100,
                },
                {
                    text: "Name",
                    id: "name",
                    align: "left",
                    sortable: true,
                    type: "text",
                    width: 200,
                },
                {
                    text: "Color",
                    id: "color",
                    align: "left",
                    sortable: true,
                },
                {
                    text: "Plate",
                    id: "plate",
                    align: "left",
                    sortable: true,
                },
                {
                    text: "Actions",
                    id: "actions",
                    align: "center",
                    type: "static",
                    staticHTML: "<button class='border rounded-md p-1 hover:text-blue-700 hover:border-blue-700 dark:hover:text-blue-500 dark:hover:border-blue-500 w-24'>✍🏻 Edit</button>",
                    colspan: 2,
                    width: 120,
                },
                {
                    text:'',
                    id: "actions2",
                    align: "center",
                    type: "static",
                    staticHTML: "<button class='border rounded-md p-1 hover:text-blue-700 hover:border-blue-700 dark:hover:text-blue-500 dark:hover:border-blue-500 w-24''>🗑️ Delete</button>",
                    width: 120,
                },
            ],
        },
        gridData: gridData,
    }
};