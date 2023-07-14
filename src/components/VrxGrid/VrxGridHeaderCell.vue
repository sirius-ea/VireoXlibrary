<template>
    <th
        scope="col"
        class="px-3 py-3 vrx-th header-th"
        :class="headerModel.textAlignmentClass"
    >
      <div class="vrx-header-cell mb-2" @click="headerModel.sortClicked(props.gridConfig, props.gridData)">
        <span class="vrx-grid-label">{{ headerModel.text }}</span>
        <VrxIcon
            v-if="headerModel.sortable"
            :icon="headerConfig.sortDirection === 'asc' ? 'chevron-up' : headerConfig.sortDirection === 'desc' ? 'chevron-down' : 'empty'"
            size="3"
        />
      </div>
      <VrxInput
          v-if="headerModel.filterType === 'text'"
          :model-value="inputValue"
          :height="30"
          class="header-input"
          :placeholder="headerModel.filterPlaceholder ?? '...'"
          type="text"
          @input="(val : any) => headerModel.filterByValue(filters as GridFilter[], val.target.value)"
      />
      <VrxSelect
          v-if="headerModel.filterType === 'select'"
          :list-data="headerModel.getSelectableItems(gridData)"
          :model-value="selectValue"
          :placeholder="headerModel.filterPlaceholder ?? '...'"
          class="header-input"
          :height="30"
          :on-select="(val : any) => headerModel.filterByValue(filters as GridFilter[], val.value)"
          :on-clear="() => headerModel.filterByValue(filters as GridFilter[], '')"
      />
    </th>
</template>


<script setup lang="ts">
  import VrxSelect from "@/components/VrxSelect/VrxSelect.vue";
  import VrxInput from "@/components/VrxInput/VrxInput.vue";
  import VrxIcon from "@/components/VrxIcon/VrxIcon.vue";
  import {Header} from "@/components/VrxGrid/Models/Header.ts";
  import {GridConfiguration, GridFilter, GridHeader, GridRow} from "@/components/VrxGrid/GridConfiguration.ts";
  import {inject, ref} from "vue";
  import {ReactiveVariable} from "vue/macros";

  const props = defineProps<{
    gridConfig: GridConfiguration;
    headerConfig: GridHeader;
    gridData: ReactiveVariable<GridRow[]>
  }>();

  const filters : any = inject('filters');
  let inputValue = ref('');
  let selectValue = ref([]);

  const headerModel = new Header(props.headerConfig);

</script>

<style scoped>
  .vrx-header-cell{
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    gap: 0.2rem;
    user-select: none;
  }
  .header-input {
    font-weight: normal;
    width: 100%;
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
  .header-th{
    width: v-bind(headerModel.width + 'px');
    max-width: v-bind(headerModel.width + 'px') ;
  }
</style>
