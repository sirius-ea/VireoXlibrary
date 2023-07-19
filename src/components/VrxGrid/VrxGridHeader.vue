<template>
  <thead data-testid="vrx-grid-header" class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-white vrx-table">
    <tr>
      <VrxGridHeaderCell
          v-for="config in spanReformer"
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
import {computed} from "vue";

  const props = defineProps<{
    gridConfig: GridConfiguration;
    gridData: ReactiveVariable<GridRow[]>
  }>()

  const spanReformer = computed(() => {
    const x = [];
    let i = 0;
    while(i < props.gridConfig.header.length){
      x.push(props.gridConfig.header[i]);
      props.gridConfig.header[i].colspan ? i += props.gridConfig.header[i].colspan : i++;
    }
    return x;
  })

</script>

<style scoped>
  .vrx-table{
    position: sticky;
    top: 0;
    z-index: 1;
  }
</style>