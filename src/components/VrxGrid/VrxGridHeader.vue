<template>
  <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
    <tr>
      <th
          v-for="config in modelValue.header"
          scope="col"
          class="px-6 py-3"
          :class="config.align ? textStyle[config.align] : null"
          @click="sortClicked(config)"
      >
        <div class="vrx-header-cell">
          {{ config.text }}
          <VrxIcon
              v-if="config.sortable"
              :icon="config.sortDirection === 'asc' ? 'chevron-up' : config.sortDirection === 'desc' ? 'chevron-down' : 'sort-order'"
              size="3"
          />
        </div>
      </th>
    </tr>
  </thead>
</template>

<script setup lang="ts">
import {
  GridConfigurationInterface,
  GridHeaderInterface,
  GridRowInterface
} from "@/components/VrxGrid/GridConfigurationInterface.ts";
  import VrxIcon from "@/components/VrxIcon/VrxIcon.vue";
  import {textStyle} from "@/components/VrxGrid/gridStyles.ts";
import {reactive, ref} from "vue";

  const props = defineProps<{
    modelValue: GridConfigurationInterface;
  }>()

  const emit = defineEmits(['update:modelValue'])
  const initialState = (props.modelValue)

  const sortClicked = (hConfig : GridHeaderInterface) => {
    if(!hConfig.sortable) return;
    hConfig.sortDirection = hConfig.sortDirection === 'asc' ? 'desc' : hConfig.sortDirection === 'desc' ? null : 'asc';

    if(hConfig.sortDirection === null){
      emit('update:modelValue', initialState);
      return;
    }

    if(hConfig.sortFunction){
      useCustomSorting(hConfig.sortFunction, hConfig.sortDirection)
    } else {
      useDefaultSorting(hConfig.id, hConfig.sortDirection)
    }
    emit('update:modelValue', props.modelValue)
  }

  const useCustomSorting = (sorter : (a: GridRowInterface, b: GridRowInterface) => number, order : 'asc' | 'desc' | null) => {
    if(sorter && props.modelValue){
      props.modelValue.data.sort(sorter);
    }
  }

  const useDefaultSorting = (id : string, order : 'asc' | 'desc' | null) => {
    props.modelValue.data.sort((a : GridRowInterface, b : GridRowInterface) => {
      if(a.data[id] < b.data[id]) return order === 'asc' ? 1 :  -1;
      if(a.data[id] > b.data[id]) return order === 'asc' ? -1 :  1;
      return 0;
    });
  }
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