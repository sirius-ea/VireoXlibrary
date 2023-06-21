<template>
  <tbody>
    <VrxGridRow
        v-for="row in modelValue.data"
        :row="row"
        :header-config="modelValue.header"
        :key="row.id"
        :selectable="modelValue.selectable"
    />
  </tbody>
</template>

<script setup lang="ts">
import {GridConfigurationInterface, GridRowInterface} from "@/components/VrxGrid/GridConfigurationInterface.ts";
  import {textStyle} from "@/components/VrxGrid/gridStyles.ts";
import {inject, watch} from "vue";
import VrxGridRow from "@/components/VrxGrid/VrxGridRow.vue";

  const props = defineProps<{
    modelValue: GridConfigurationInterface;
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

  .row-hover:hover{
    background-color: rgba(142, 180, 218, 0.4);
    cursor: pointer;
  }

</style>