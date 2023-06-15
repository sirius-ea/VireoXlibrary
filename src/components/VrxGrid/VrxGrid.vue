<template>
  <div class="relative overflow-x-auto">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <VrxGridHeader  :configs="props.gridConfiguration.header"/>
      <VrxGridBody :configs="props.gridConfiguration"/>
    </table>
  </div>
</template>

<script setup lang="ts">
  import VrxGridHeader from "@/components/VrxGrid/VrxGridHeader.vue";
  import VrxGridBody from "@/components/VrxGrid/VrxGridBody.vue";
  import {GridConfigurationInterface} from "@/components/VrxGrid/GridConfigurationInterface.ts";


  const props = defineProps<{
    gridConfiguration: GridConfigurationInterface;
  }>()
</script>

<style scoped>

</style>