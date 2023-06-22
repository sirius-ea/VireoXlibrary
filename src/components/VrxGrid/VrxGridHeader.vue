<template>
  <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
    <tr>
      <th
          v-for="config in gridConfig.header"
          scope="col"
          class="px-3 py-3 vrx-th header-th"
          :class="config.align ? textStyle[config.align] : null"
          :style="config.width ? 'width: ' + config.width + 'px' : null"
      >
        <div class="vrx-header-cell mb-2" @click="sortClicked(config)">
          <span class="vrx-grid-label" :style="config.width ? 'width: ' + config.width + 'px' : null">{{ config.text }}</span>
          <VrxIcon
              v-if="config.sortable"
              :icon="config.sortDirection === 'asc' ? 'chevron-up' : config.sortDirection === 'desc' ? 'chevron-down' : 'empty-icon'"
              size="3"
          />
        </div>
        <VrxInput
            v-if="config.filterType === 'text'"
            :model-value="inputValue"
            :height="30"
            class="header-input"
            :placeholder="config.filterPlaceholder ?? '...'"
            type="text"
            @input="(val) => filterByValue(val.target.value, config.id)"
        />
        <VrxSelect
            v-if="config.filterType === 'select'"
            :list-data="getSelectableValues(config)"
            :model-value="selectValue"
            :placeholder="config.filterPlaceholder ?? '...'"
            class="header-input"
            :height="30"
            :on-select="(val) => filterByValue(val.value, config.id)"
            :on-clear="() => filterByValue('', config.id)"
        />
      </th>
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

  const props = defineProps<{
    gridConfig: GridConfiguration;
  }>()

  const filters = inject('filters');
  const emit = defineEmits(['update:gridConfig', 'update:filters']);

  let inputValue = ref('');
  let selectValue = ref([]);

  /**
   * Filters the grid by the given value
   * @param value
   * @param cellId
   */
  const filterByValue = (value, cellId) => {
    const exist = filters.find((f : any) => f.cellId === cellId);
    if(exist && value === '') filters.splice(filters.indexOf(exist), 1);
    exist ? exist.value = value : filters.push({ cellId, value });
  }

  const getSelectableValues = (config : GridHeader) => {
    const data = [];
    props.gridConfig.data.forEach((d : GridRow) => {
      if(!data.find((v : any) => v.value === d.data[config.id])) data.push({value: d.data[config.id], label: d.data[config.id]});
    });
    return data;
  }

  /**
   * Handle the sorting clicks
   * @param hConfig
   */
  const sortClicked = (hConfig : GridHeader) => {
    if(!hConfig.sortable) return;
    hConfig.sortDirection = hConfig.sortDirection === 'asc' ? 'desc' : 'asc';

    resetSorts([hConfig]);
    hConfig.sortFunction ? useCustomSorting(hConfig.sortFunction) : useDefaultSorting(hConfig.id, hConfig.sortDirection)

    emit('update:gridConfig', props.gridConfig)
  }

  /**
   * Sorts the grid by the given sorter function
   * @param sorter
   */
  const useCustomSorting = (sorter : (a: GridRow, b: GridRow) => number) => {
    if(sorter && props.gridConfig){
      props.gridConfig.data.sort(sorter);
    }
  }

  /**
   * Sorts the grid with the default sorting function
   * @param id
   * @param order
   */
  const useDefaultSorting = (id : string, order : 'asc' | 'desc') => {
    props.gridConfig.data.sort((a : GridRow, b : GridRow) => {
      if(a.data[id] < b.data[id]) return order === 'asc' ? 1 :  -1;
      if(a.data[id] > b.data[id]) return order === 'asc' ? -1 :  1;
      return 0;
    });
  }

  /**
   * Resets the sorting of all headers except the ones in the toExclude array
   * @param toExclude
   */
  const resetSorts = (toExclude : GridHeader[] = []) => {
    props.gridConfig.header.forEach((h : GridHeader) => {
      if(!toExclude.includes(h)){
        h.sortDirection = null;
      }
    })
  }

</script>

<style scoped>
  .vrx-header-cell{
    cursor: pointer;
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: 0.2rem;
    user-select: none;
  }
  .header-input {
    font-weight: normal;
  }
  .px-3{
    padding-left: 0.75rem;
    padding-right: 0.75rem;
  }
  .vrx-th{
    vertical-align: top;
  }
  .vrx-grid-label{
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
</style>