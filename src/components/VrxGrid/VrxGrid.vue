<template>
  <div class="relative overflow-x-auto h-full w-full">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <VrxGridHeader v-model:grid-config="props.gridConfiguration"/>
      <VrxGridBody v-model="props.gridConfiguration"/>
    </table>
  </div>
</template>

<script setup lang="ts">
  import VrxGridHeader from "@/components/VrxGrid/VrxGridHeader.vue";
  import VrxGridBody from "@/components/VrxGrid/VrxGridBody.vue";
  import {GridConfigurationInterface, GridRowInterface} from "@/components/VrxGrid/GridConfigurationInterface.ts";
  import {provide, reactive, ref, watch} from "vue";

  const props = defineProps<{
    gridConfiguration: GridConfigurationInterface;
  }>()

  const filters = reactive([]);
  const selectedRows = reactive([]);

  provide('filters', filters);
  provide('selectedRows', selectedRows);

  const getSelectedRows = () => {
    return selectedRows;
  }

  const getFilters = () => {
    return filters;
  }

  const setData = (data : GridRowInterface[]) => {
    deselectAll();
    resetFilters();
    props.gridConfiguration.data = data;
  }

  const resetFilters = () => {
    filters.splice(0, filters.length);
  }

  const deselectAll = () => {
    selectedRows.splice(0, selectedRows.length);
  }

  const selectAll = () => {
    props.gridConfiguration.data.forEach(row => {
      selectedRows.push(row);
    });
  }

  defineExpose({ getSelectedRows, getFilters, setData, resetFilters, deselectAll, selectAll });

</script>

<style scoped>

</style>