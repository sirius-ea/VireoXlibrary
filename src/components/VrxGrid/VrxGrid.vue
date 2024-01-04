<template>
  <div data-testid="vrx-grid" @keydown="keyboardListener($event)" @click="mouseListener($event)" class="table-outline relative overflow-x-auto h-full shadow-md w-full bg-primary-50 dark:bg-primary-800" tabindex="1">
    <table class="w-full text-sm text-left text-primary-500 dark:text-neutral-400" aria-describedby="vrx-table-grid">
      <VrxGridHeader v-model:grid-config="gridModel.configuration" :grid-data="gridModel.data"/>
      <VrxGridBody
          v-model="gridModel.configuration"
          :grid-data="gridModel.data"
          @row-clicked="rowClicked"
          @cell-clicked="cellClicked"
          @cell-double-clicked="cellDoubleClicked"
      />
    </table>
  </div>
</template>

<script setup lang="ts">
  import VrxGridHeader from "@/components/VrxGrid/VrxGridHeader.vue";
  import VrxGridBody from "@/components/VrxGrid/VrxGridBody.vue";
  import {GridConfiguration, GridRow} from "@/components";
  import {provide} from "vue";
  import {Grid} from "./Models";

  const keyboardListener = (e: KeyboardEvent) => {
    if((e.ctrlKey || e.metaKey) && e.key === 'a'){
      e.preventDefault();
      gridModel.selectAll();
    }
  }

  const mouseListener = (e: MouseEvent) => {
    if(e.shiftKey && gridModel.configuration.multiselect){
      e.preventDefault();

      const length = gridModel.selectedRows.length;
      if(length >= 2){
        let index0 = gridModel.data.find((row) => row.id === gridModel.selectedRows[0].id);
        let index1 = gridModel.data.find((row) => row.id === gridModel.selectedRows[length-1].id);

        index0 && index1 ? gridModel.selectRange(gridModel.data.indexOf(index0), gridModel.data.indexOf(index1)) : null;
      }
    }
  }

  const props = defineProps<{
    gridConfiguration: GridConfiguration;
    gridData: GridRow[];
  }>()

  const gridModel = new Grid(props.gridConfiguration, props.gridData);

  provide('filters', gridModel.filters);
  provide('selectedRows', gridModel.selectedRows);

  const emit = defineEmits(['rowClicked', 'cellClicked', 'cellDoubleClicked']);
  const rowClicked = (row: GridRow) => {
    emit('rowClicked', row);
  }

  const cellClicked = (cell: any) => {
    emit('cellClicked', cell);
  }

  const cellDoubleClicked = (cell: any) => {
    emit('cellDoubleClicked', cell);
  }
  const getSelectedRows = () => {
    return gridModel.selectedRows;
  }

  const getFilters = () => {
    return gridModel.filters;
  }

  const setData = (data : GridRow[]) => {
    gridModel.setData(data);
  }

  const getData = () => {
    return gridModel.data;
  }

  const updateData = (data : GridRow[]) => {
    gridModel.updateData(data);
  }

  const resetFilters = () => {
    gridModel.resetFilters();
  }

  const clearData = () => {
    gridModel.clearData();
  }

  const deselectAll = () => {
    gridModel.deselectAll();
  }

  const selectAll = () => {
    gridModel.selectAll();
  }

  const selectRange = (start : number, end: number) => {
    gridModel.selectRange(start, end);
  }

  const getRowById = (id : string | number) : GridRow | undefined => {
    return gridModel.getRowById(id);
  }


  defineExpose({ getSelectedRows, getFilters, setData, resetFilters, deselectAll, selectAll, clearData, updateData, selectRange, getData, getRowById });

</script>

<style scoped>
  .table-outline:focus{
    outline: none;
  }
</style>
