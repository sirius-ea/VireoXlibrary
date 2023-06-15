<template>
  <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
    <tr>
      <th v-for="config in props.configs" scope="col" class="px-6 py-3">
        <div class="vrx-header-cell">
          {{ config.text }}
          <VrxIcon v-if="config.sortable" icon="sort-order" size="4"/>
        </div>
      </th>
    </tr>
  </thead>
</template>

<script setup lang="ts">
  import {GridHeaderInterface} from "@/components/VrxGrid/GridConfigurationInterface.ts";
  import VrxIcon from "@/components/VrxIcon/VrxIcon.vue";

  const props = defineProps<{
    configs: GridHeaderInterface[];
  }>()
</script>

<style scoped>
  .vrx-header-cell{
    cursor: pointer;
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: 0.2rem;
  }
  .tr {
    display: flex;
    flex-direction: row;
  }
</style>