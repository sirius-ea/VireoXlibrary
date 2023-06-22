
<template>
  <tr
      class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
      :class="rowStyle"
      v-if="!isFiltered"
      @click="rowClicked(row)"
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
  import colors from "tailwindcss/colors";
  import {textStyle} from "@/components/VrxGrid/gridStyles.ts";
  import {GridHeaderInterface, GridRowInterface} from "@/components/VrxGrid/GridConfigurationInterface.ts";
  import {computed, inject, toRaw} from "vue";
  const props = defineProps<{
    row: GridRowInterface;
    headerConfig: GridHeaderInterface [];
    selectable?: boolean;
    multiselect?: boolean;
  }>();

  const filters = inject('filters');
  const selectedRows = inject('selectedRows');

  const rowClicked = (row : GridRowInterface) => {
    const included = selectedRows.find(rowIn => JSON.stringify(rowIn) === JSON.stringify(row));
    if(!props.multiselect){
      selectedRows.splice(0, selectedRows.length);
      selectedRows.push(row);
      return;
    }

    if(!included)
      selectedRows.push(row);
    else {
      const index = selectedRows.indexOf(included);
      selectedRows.splice(index, 1);
    }
  }

  const isFiltered = computed(() => {
    let isFiltered : boolean = false;
    filters.forEach(filter => {
      const customFilter = props.headerConfig.find(cell => cell.id === filter.cellId)?.customFilter;
      isFiltered = customFilter ? customFilter(props.row, filter) : defaultFilter(props.row, filter);
    });
    return isFiltered;
  });

  const rowStyle = computed(() => {
    if(props.selectable){
      const included = selectedRows.find(rowIn => JSON.stringify(rowIn) === JSON.stringify(props.row));
      return included ? 'selected row-hover dark:bg-gray-100' : 'not-selected row-hover dark:bg-gray-100';
    }
    return 'not-selected';
  });

  const defaultFilter = (row, filter) => {
    const value = props.row.data[filter.cellId].toString();
    return (!value.includes(filter.value));
  }
  let x = '#e9b1ff'

</script>
<style scoped>
  .selected{
    border-left: 2px solid v-bind(colors.blue[500]);
    box-sizing: border-box;
    background-color: v-bind(colors.blue[50]);
  }

  .not-selected{
    border-left: 2px solid transparent;
    box-sizing: border-box;
  }

  .row-hover:hover{
    background-color: v-bind(colors.blue[100]);
    cursor: pointer;
  }
</style>