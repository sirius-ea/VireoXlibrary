<template>
  <thead data-testid="vrx-grid-header" class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 vrx-table">
    <tr>
      <VrxGridHeaderCell
          v-for="config in gridConfig.header"
          :grid-config="gridConfig"
          :header-config="config"
          :grid-data="gridData"/>
    </tr>
  </thead>
</template>

<script setup lang="ts">
import {GridConfiguration, GridRow} from "@/components/VrxGrid/GridConfiguration.ts";
  import VrxGridHeaderCell from "@/components/VrxGrid/VrxGridHeaderCell.vue";
  import {ReactiveVariable} from "vue/macros";

  const props = defineProps<{
    gridConfig: GridConfiguration;
    gridData: ReactiveVariable<GridRow[]>
  }>()

</script>

<style scoped>
  .vrx-table{
    position: sticky;
    top: 0;
    z-index: 1;
  }
</style>