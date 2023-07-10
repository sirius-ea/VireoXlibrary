<template>
  <tbody style="overflow-y: scroll">
    <VrxGridRow
        v-for="row in modelValue.data"
        :row="row"
        :header-config="modelValue.header"
        :key="row.id"
        :selectable="modelValue.selectable"
        :multiselect="modelValue.multiselect"
    />
  </tbody>
</template>

<script setup lang="ts">
  import {GridConfiguration, GridRow} from "@/components/VrxGrid/GridConfiguration.ts";
  import VrxGridRow from "@/components/VrxGrid/VrxGridRow.vue";

  const props = defineProps<{
    modelValue: GridConfiguration;
  }>()
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