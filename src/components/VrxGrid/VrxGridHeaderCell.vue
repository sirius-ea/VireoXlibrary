<template>
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
</template>


<script setup lang="ts">

import {textStyle} from "@/components/VrxGrid/gridStyles.ts";
import VrxSelect from "@/components/VrxSelect/VrxSelect.vue";
import VrxInput from "@/components/VrxInput/VrxInput.vue";
import VrxIcon from "@/components/VrxIcon/VrxIcon.vue";
</script>

<style scoped>

</style>