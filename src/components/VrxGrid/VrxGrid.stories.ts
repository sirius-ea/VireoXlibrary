import {Meta, StoryObj} from "@storybook/vue3";
import VrxGrid from "@/components/VrxGrid/VrxGrid.vue";
import {GridRow} from "@/components/VrxGrid/GridConfiguration.ts";
import {VrxButton, VrxInput} from "@/components";
import {ref} from "vue";

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
                alert(this.$refs.myRef.getSelectedRows().map((row : GridRow) => row.data.name).join(", "));
            },
            setData(data : any[]){
                this.$refs.myRef.setData(data)
            },
            selectAll(){
                this.$refs.myRef.selectAll()
            },
            deselectAll(){
                this.$refs.myRef.deselectAll()
            }
        },
        template: `
          <div style="height: 500px; padding-bottom: 30px">
            <VrxGrid v-bind="args" ref="myRef" :grid-configuration="args.gridConfiguration"/>
            <div style="display: flex; gap: 10px">
              <VrxButton color="default" size="base" @click="logItem" >Log selected items</VrxButton>
              <VrxButton color="default" size="base" @click="setData([{data:{name: 'Maria Rosa',serialNumber: 6,color: 'Black',model: 'Audi',plate: 'AA123BC'}}])">Set Data</VrxButton>
              <VrxButton color="default" size="base" @click="selectAll">Select All</VrxButton>
              <VrxButton color="default" size="base" @click="deselectAll">Deselect All</VrxButton>
            </div>
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
                    customFilter:  (row: GridRow, filter : {cellId: string, value: string}) => {
                        return row && filter
                    }
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
    ...Template,
};