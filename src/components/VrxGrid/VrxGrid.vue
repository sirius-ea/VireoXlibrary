<template>
  <div class="relative overflow-x-auto h-full w-full">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <VrxGridHeader v-model:grid-config="configuration"/>
      <VrxGridBody v-model="configuration"/>
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

  const configuration : GridConfigurationInterface = ref(JSON.parse(JSON.stringify(props.gridConfiguration)));
  const filters = reactive([]);
  provide('filters', filters);

</script>

<style scoped>

</style>