import {Meta, StoryObj} from "@storybook/vue3";
import VrxGrid from "@/components/VrxGrid/VrxGrid.vue";
import {GridRow} from "@/components/VrxGrid/GridConfiguration.ts";
import {VrxButton, VrxInput} from "@/components";
import {ref} from "vue";
import {Row} from "@/components/VrxGrid/Models/Row.ts";

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
        components: { VrxGrid, VrxButton },
        setup() {
            return {
                args
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
                this.$refs.myRef.updateData(data)
            }
        },
        template: `
          <VrxGrid v-bind="args" ref="myRef" :grid-configuration="args.gridConfiguration" style="height: 500px"/>

          <div style="padding-top: 30px; display: flex; flex-direction: row; gap: 5px">
              <VrxButton color="default" size="sm" @click="logItem" >Log selected items</VrxButton>
              <VrxButton color="default" size="sm" @click="setData(
                  [{ data: {name: 'Maria Rosa',serialNumber: 6,color: 'Black',model: 'Audi',plate: 'AA123BC'},id: '6'}])">Set Data</VrxButton>
              <VrxButton color="default" size="sm" @click="updateData(
                  [{id: '2', data: {name: 'Ilary Blasi',serialNumber: 10,color: 'Blue',model: 'BMW',plate: 'AA123BC'}}])">Update Data</VrxButton>
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
                    width: 150,
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
                    id: "1",
                    data:{
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
    ...Template,
};