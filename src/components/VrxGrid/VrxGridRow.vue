
<template>
  <tr
      :data-testid="'vrx-grid-row-'+ rowModel.id"
      class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 vrx-row"
      :class="rowStyle"
      v-if="!isFiltered"
      @click="rowModel.rowClicked()"
  >
    <td
        v-for="cell in headerConfig"
        class="px-3 py-4 font-medium whitespace-nowrap"
        :style="rowModel.backgroundColor ? 'background-color: ' + rowModel.backgroundColor : ''"
        :class="cell.align ? textStyle[cell.align] : null"
    >
      <span class="test" v-if="!cell.type || cell.type === 'text'" :style="rowModel.textColor ? 'color: ' + rowModel.textColor : ''">
        {{ rowModel.getCellContent(cell.id) }}
      </span>
      <component v-else :is="row.data[cell.id]"/>
    </td>
  </tr>
</template>

<script setup lang="ts">
  import colors from "tailwindcss/colors";
  import {textStyle} from "@/components/VrxGrid/gridStyles.ts";
  import {GridHeader, GridRow} from "@/components/VrxGrid/GridConfiguration.ts";
  import {computed, inject} from "vue";
  import {Row} from "@/components/VrxGrid/Models/Row.ts";
  const props = defineProps<{
    row: GridRow;
    headerConfig: GridHeader [];
    selectable?: boolean;
    multiselect?: boolean;
  }>();

  const filters = inject('filters');
  const selectedRows = inject('selectedRows');

  const rowModel = new Row(props.row, filters, selectedRows, props.selectable, props.multiselect, props.headerConfig);

  const isFiltered = computed(() => {
    return rowModel.isFiltered();
  });

  const rowStyle = computed(() => {
    if(rowModel.selectable){
      return rowModel.isSelected() ? 'selected row-hover dark:selected dark:row-hover dark:bg-gray-100' : 'not-selected dark:row-hover row-hover dark:bg-gray-100';
    }
    return 'not-selected';
  });

</script>
<style scoped>
  .selected{
    border-left: 3px solid v-bind(colors.blue[500]);
    box-sizing: border-box;
    background-color: v-bind(colors.gray[100]);
  }

  .vrx-row {
    user-select: none;
  }

  .row-hover:hover{
    background-color: v-bind(colors.gray[200]);
    cursor: pointer;
  }

  .not-selected{
    border-left: 3px solid transparent;
    box-sizing: border-box;
  }

  :is([data-mode="dark"] .dark\:row-hover:hover) {
    background-color: v-bind(colors.gray[700]);
  }

  :is([data-mode="dark"] .dark\:selected) {
    background-color:  v-bind(colors.gray[600]);
    color: white;
    border-left: 3px solid v-bind(colors.blue[500]);
    box-sizing: border-box;
  }
</style>