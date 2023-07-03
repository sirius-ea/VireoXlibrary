<template>
  <div data-testid="vrx-grid" @keydown="keyboardListener($event)" @click="mouseListener($event)" class="table-outline relative overflow-x-auto h-full shadow-md w-full rounded-lg bg-white dark:bg-gray-800" tabindex="1">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <VrxGridHeader v-model:grid-config="gridModel.configuration"/>
      <VrxGridBody v-model="gridModel.configuration"/>
    </table>
  </div>
</template>

<script setup lang="ts">
  import VrxGridHeader from "@/components/VrxGrid/VrxGridHeader.vue";
  import VrxGridBody from "@/components/VrxGrid/VrxGridBody.vue";
  import {GridConfiguration, GridRow} from "@/components/VrxGrid/GridConfiguration.ts";
  import {provide} from "vue";
  import {Grid} from "@/components/VrxGrid/Models/Grid.ts";

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
  }>()

  const gridModel = new Grid(props.gridConfiguration);

  provide('filters', gridModel.filters);
  provide('selectedRows', gridModel.selectedRows);

  const getSelectedRows = () => {
    return gridModel.selectedRows;
  }

  const getFilters = () => {
    return gridModel.filters;
  }

  const setData = (data : GridRow[]) => {
    gridModel.setData(data);
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


  defineExpose({ getSelectedRows, getFilters, setData, resetFilters, deselectAll, selectAll, clearData, updateData, selectRange });

</script>

<style scoped>
  .table-outline:focus{
    outline: none;
  }
</style>