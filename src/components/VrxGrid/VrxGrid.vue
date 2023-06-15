<template>
  <div class="relative overflow-x-auto">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <VrxGridHeader v-model="configuration"/>
      <VrxGridBody v-model="configuration"/>
    </table>
  </div>
</template>

<script setup lang="ts">
  import VrxGridHeader from "@/components/VrxGrid/VrxGridHeader.vue";
  import VrxGridBody from "@/components/VrxGrid/VrxGridBody.vue";
  import {GridConfigurationInterface} from "@/components/VrxGrid/GridConfigurationInterface.ts";
  import {ref} from "vue";

  const props = defineProps<{
    gridConfiguration: GridConfigurationInterface;
  }>()

  const configuration = ref(props.gridConfiguration)
</script>

<style scoped>

</style>