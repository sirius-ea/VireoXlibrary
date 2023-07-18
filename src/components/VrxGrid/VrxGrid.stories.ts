import {Meta, StoryObj} from "@storybook/vue3";
import VrxGrid from "@/components/VrxGrid/VrxGrid.vue";
import {GridRow} from "@/components/VrxGrid/GridConfiguration.ts";
import {VrxButton, VrxInput} from "@/components";
import {reactive, ref} from "vue";
import {Row} from "@/components/VrxGrid/Models/Row.ts";
import VrxGridRow from "@/components/VrxGrid/VrxGridRow.vue";

const meta : Meta<typeof VrxGrid> = {
    title: 'VrxGrid',
    component: VrxGrid,
    tags: ['autodocs'],
    argTypes: {

    },
};

export default meta;

type GridStories = StoryObj<typeof VrxGrid>;


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
          <VrxGrid v-bind="args" ref="myRef" :grid-configuration="args.gridConfiguration" :grid-data="args.gridData" style="height: 500px"/>

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
                    width: 100,
                    editable: true,
                    filterType: "select",
                    sortable: true,
                    icon: 'check',
                },
                {
                    text: "Name",
                    id: "name",
                    align: "left",
                    sortable: true,
                    type: "text",
                    filterType: "text",
                    filterPlaceholder: "Search by name",
                    width: 150,
                    editable: true,
                    editType: "text",
                    icon: "user-circle",
                },
                {
                    text: "Serial Number",
                    id: "serialNumber",
                    align: "left",
                    sortable: true,
                    filterType: "text",
                    width: 150,
                    editable: true,
                    editType: "text",
                    icon: "variable",
                },
                {
                    text: "Color",
                    id: "color",
                    align: "left",
                    sortable: true,
                    filterType: "select",
                    width: 150,
                    editable: true,
                    editType: "select",
                    icon: "palette",
                    editOptions: [
                        {text: "Red", value: "Red"},
                        {text: "Blue", value: "Blue"},
                        {text: "Green", value: "Green"},
                        {text: "Gray", value: "Gray"},
                        {text: "Black", value: "Black"},
                    ],
                },
                {
                    text: "Model",
                    id: "model",
                    align: "left",
                    sortable: true,
                    filterType: "select",
                    width: 150,
                    editable: true,
                    editType: "text",
                    icon: "truck",
                },
                {
                    text: "Plate",
                    id: "plate",
                    align: "left",
                    sortable: true,
                    filterType: "text",
                    width: 150,
                    editable: true,
                    editType: "text",
                    icon: "calendar",
                },
            ],
        },
        gridData: [
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
        ]
    },
}

export const Primary: GridStories = {
    ...Template,
};