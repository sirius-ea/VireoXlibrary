
<template>
  <tr
      :data-testid="'vrx-grid-row-'+ rowModel.id"
      class="bg-primary-50 border-b dark:bg-primary-800 dark:border-primary-700 vrx-row"
      :class="rowStyle"
      v-if="!isFiltered"
      @click="rowClicked"
  >
    <VrxGridCell
        v-for="cell in headerConfig"
        :row="rowModel"
        :cell="cell"
        @cell-clicked="cellClicked"
        @cell-double-clicked="cellDoubleClicked"
    />
  </tr>
</template>

<script setup lang="ts">


  import {theme} from "@/components/styles.ts";
  import {textStyle} from "@/components/VrxGrid/gridStyles.ts";
  import {GridHeader, GridRow} from "@/components/VrxGrid/GridConfiguration.ts";
  import {computed, inject, onBeforeMount, ref} from "vue";
  import {Row} from "@/components/VrxGrid/Models/Row.ts";
  import VrxGridCell from "@/components/VrxGrid/VrxGridCell.vue";
  const props = defineProps<{
    row: GridRow;
    headerConfig: GridHeader [];
    selectable?: boolean;
    multiselect?: boolean;
  }>();

  const emit = defineEmits(['rowClicked', 'cellClicked', 'cellDoubleClicked']);

  const filters = inject('filters');
  const selectedRows = inject('selectedRows');
  const gridRowTheme = ref();

  onBeforeMount(() => { // Initialize theme
    if(theme && theme.colors)
      gridRowTheme.value = theme.colors;
  });

  const rowClicked = () => {
    rowModel.rowClicked()
    emit('rowClicked', rowModel);
  }

  const cellClicked = (cell: any) => {
    emit('cellClicked', cell);
  }

  const cellDoubleClicked = (cell: any) => {
    emit('cellDoubleClicked', cell);
  }


  const rowModel = new Row(props.row, filters, selectedRows, props.selectable ?? false, props.multiselect ?? false, props.headerConfig);

  const isFiltered = computed(() => {
    return rowModel.isFiltered();
  });

  const rowStyle = computed(() => {
    if(rowModel.selectable){
      return rowModel.isSelected() ? 'selected row-hover dark:selected dark:row-hover dark:bg-primary-100' : 'not-selected dark:row-hover row-hover dark:bg-primary-100';
    }
    return 'not-selected';
  });

</script>
<style scoped>
  .selected{
    background-color: v-bind(gridRowTheme.primary[100]);
    box-shadow: 3px 0 v-bind(gridRowTheme.secondary[500]) inset;
  }

  .vrx-row {
    user-select: none;
  }

  .vrx-grid-cell-content{
    color: v-bind(rowModel.textColor);
  }

  .vrx-cell{
    background-color: v-bind(rowModel.backgroundColor);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .row-hover:hover{
    background-color: v-bind(gridRowTheme.primary[200]);
    cursor: pointer;
  }

  .not-selected{
    box-sizing: border-box;
  }

  :is([data-mode="dark"] .dark\:row-hover:hover) {
    background-color: v-bind(gridRowTheme.primary[700]);
  }

  :is([data-mode="dark"] .dark\:selected) {
    background-color:  v-bind(gridRowTheme.primary[600]);
    color: white;
    box-shadow: 3px 0 v-bind(gridRowTheme.secondary[500]) inset;
    box-sizing: border-box;
  }
</style>