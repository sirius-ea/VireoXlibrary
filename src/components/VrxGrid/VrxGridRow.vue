
<template>
  <tr
      class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
      :class="selectable ? 'row-hover dark:bg-gray-100' : null"
      v-if="!isFiltered"
  >
    <td
        v-for="cell in headerConfig"
        class="px-3 py-4 font-medium whitespace-nowrap"
        :style="row.backgroundColor ? 'background-color: ' + row.backgroundColor : ''"
        :class="cell.align ? textStyle[cell.align] : null"
    >
      <span v-if="!cell.type || cell.type === 'text'" :style="row.textColor ? 'color: ' + row.textColor : ''">
        {{ row.data[cell.id] }}
      </span>
      <component v-else :is="row.data[cell.id]"/>
    </td>
  </tr>
</template>

<script setup lang="ts">

  import {textStyle} from "@/components/VrxGrid/gridStyles.ts";
  import {GridHeaderInterface, GridRowInterface} from "@/components/VrxGrid/GridConfigurationInterface.ts";
  import {computed, inject} from "vue";
  const props = defineProps<{
    row: GridRowInterface;
    headerConfig: GridHeaderInterface [];
    selectable?: boolean;
  }>();

  const filters = inject('filters');

  const isFiltered = computed(() => {
    let isFiltered = false;
    filters.forEach(filter =>{
      const value = props.row.data[filter.cellId].toString();
      if(!value.includes(filter.value)) isFiltered = true
    })
    return isFiltered;
  });

</script>
<style scoped>

</style>