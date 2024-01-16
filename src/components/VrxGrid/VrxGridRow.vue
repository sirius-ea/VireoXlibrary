
<template>
  <tr
      :data-testid="'vrx-grid-row-'+ rowModel.id"
      class="vrxgrid-row-style border-b vrx-row"
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
      return rowModel.isSelected() ? 'selected dark:selected vrxgrid-selected-style vrxgrid-selectedable-style' : 'not-selected dark:not-selected vrxgrid-selectedable-style';
    }
    return 'not-selected dark:not-selected';
  });

</script>
<style scoped>
  .selected{
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

  .not-selected{
    box-sizing: border-box;
  }

  :is([data-mode="dark"] .dark\:selected) {
    box-sizing: border-box;
  }
</style>