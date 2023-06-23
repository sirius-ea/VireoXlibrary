<template>
  <div class="relative overflow-x-auto h-full shadow-md w-full rounded-lg bg-white dark:bg-gray-800">
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


  defineExpose({ getSelectedRows, getFilters, setData, resetFilters, deselectAll, selectAll, clearData, updateData });

</script>

<style scoped>

</style>