<template>
  <tbody style="overflow-y: scroll" >
    <VrxGridRow
        v-for="row in gridData"
        :row="row"
        :header-config="modelValue.header"
        :key="row.id"
        :selectable="modelValue.selectable"
        :multiselect="modelValue.multiselect"
        @row-clicked="rowClicked(row)"
        @cell-clicked="cellClicked"
        @cell-double-clicked="cellDoubleClicked"
    />
  </tbody>
</template>

<script setup lang="ts">
  import {GridConfiguration, GridRow} from "@/components/VrxGrid/GridConfiguration.ts";
  import VrxGridRow from "@/components/VrxGrid/VrxGridRow.vue";
  import {ReactiveVariable} from "vue/macros";

  const props = defineProps<{
    modelValue: GridConfiguration;
    gridData: ReactiveVariable<GridRow[]>
  }>()

  const emits = defineEmits(['rowClicked','cellClicked','cellDoubleClicked']);

  const rowClicked = (row: GridRow) => {
    emits('rowClicked', row);
  }

  const cellClicked = (cell: any) => {
    emits('cellClicked', cell);
  }

  const cellDoubleClicked = (cell: any) => {
    emits('cellDoubleClicked', cell);
  }
</script>

<style scoped>

  .text-left{
    text-align: left;
  }
  .text-right{
    text-align: right;
  }
  .text-center{
    text-align: center;
  }

  .px-3{
    padding-left: 0.75rem;
    padding-right: 0.75rem;
  }

</style>