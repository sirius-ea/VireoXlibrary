<template>
  <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400" >
    <tr>
      <VrxGridHeaderCell v-for="config in gridConfig.header" :grid-config="gridConfig" :header-config="config"/>
    </tr>
  </thead>
</template>

<script setup lang="ts">
  import { GridConfiguration, GridHeader, GridRow } from "@/components/VrxGrid/GridConfiguration.ts";
  import VrxIcon from "@/components/VrxIcon/VrxIcon.vue";
  import {textStyle} from "@/components/VrxGrid/gridStyles.ts";
  import {inject, ref, watch} from "vue";
  import VrxInput from "@/components/VrxInput/VrxInput.vue";
  import VrxSelect from "@/components/VrxSelect/VrxSelect.vue";
  import VrxGridHeaderCell from "@/components/VrxGrid/VrxGridHeaderCell.vue";

  const props = defineProps<{
    gridConfig: GridConfiguration;
  }>()

</script>

<style scoped>

</style>