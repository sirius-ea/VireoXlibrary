<template>
  <thead data-testid="vrx-grid-header" class="text-xs vrxgrid-header-style uppercase vrx-table">
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
    let filteredArray = [];
    let index = 0;

    while (index < props.gridConfig.header.length) {
      const currentItem = props.gridConfig.header[index];
      const colspan = currentItem.colspan || 1;

      filteredArray.push(currentItem);

      index += colspan;
    }

    return filteredArray;
  })

</script>

<style scoped>
  .vrx-table{
    position: sticky;
    top: 0;
    z-index: 1;
  }
</style>
