<template class="w-full">
  <label id="vrx-select-label" v-if="label" class="block mb-2 text-sm font-medium" :class="style.label">
    {{ label }}
  </label>
  <div
      class="button text-sm rounded-lg p-2.5 block w-full relative"
      :class="showDropdown ? style.select + ' ' + 'open-overlay' : style.select"
      @click="disabled ? null : showDropdown = !showDropdown"
  >
    <div class="button-left-side">
      <VrxIcon v-if="icon" :icon="icon" :color="style.icon" :size="5"/>
      <div class="selected-container">
        <div v-if="selectedList.length === 0" :class="style.placeholder">
          {{ placeholder }}
        </div>
        <div v-for="element in selectedList" :class="style.selected" class="p-0.5 item-selected">
          <div>{{ element.label }}</div>
          <VrxIcon icon="x" :size="4" @click="itemClick(element)"/>
        </div>
      </div>
    </div>
    <VrxIcon :icon="showDropdown ? 'chevron-up' : 'chevron-down'" :size="4" :color="style.icon"/>
  </div>
  <p id="vrx-input-helper" v-if="helperText" class="mt-2 text-sm" :class="style.helperText">
    {{ helperText }}
  </p>
  <div v-if="showDropdown" class="menu text-sm" :class="style.dropdown">
    <div v-for="element in listData" class="dropdown-item w-full" :class="style.dropdownItem">
      <div class="dropdown-item-content w-full h-full p-2.5" @click="itemClick(element)">
        {{ element.label }}
        <VrxIcon v-if="selectedList.includes(element)" icon="check" :size="4" :color="style.selectedIcon"/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {computed, PropType, ref} from "vue";
  import VrxIcon from "@/components/VrxIcon/VrxIcon.vue";
  import {selectStyles} from "@/components/styles.ts";
  const props = defineProps({
    label: {
      type: String,
      default: null,
    },
    placeholder: {
      type: String,
      default: 'Select Item',
    },
    icon: {
      type: String,
      default: null,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    invalid: {
      type: Boolean,
      default: false,
    },
    helperText: {
      type: String,
      default: '',
    },
    listData: {
      type: Array as PropType<SelectItemInterface[]>,
      default: () => [],
    },
    modelValue: {
      type: Array as PropType<SelectItemInterface[]>,
      default: () => [],
    },
    variant: {
      type: String,
      default: 'default',
    },
  })

  const showDropdown = ref(false);
  const selectedList = ref([]);

  const emit = defineEmits(['update:modelValue'])
  const updateValue = (event) => {
    emit('update:modelValue', event.target.value)
  }

  const style = computed(() => {
    return selectStyles(props.disabled as boolean, props.invalid as boolean, props.variant as String);
  })

  const itemClick = (item) => {
    if(selectedList.value.includes(item)){
      selectedList.value = selectedList.value.filter((element) => element !== item);
      return;
    }

    selectedList.value.push(item);
  }

</script>

<style scoped>
  .button {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
  }
  .menu {
    z-index: 200;
    position: relative;
    width: 100%;
    max-height: 300px;
    border-top-width: 0;
    border-radius: 0 0 8px 8px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    overflow-y: auto;
  }
  .open-overlay{
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }

  .button-left-side {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    z-index: 200;
  }
  .dropdown-item{
    cursor: pointer;
    user-select: none;
  }
  .item-selected{
    padding-inline: 5px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    gap: 5px;
    user-select: none;

  }
  .selected-container{
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 5px;
  }
  .dropdown-item-content{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
</style>