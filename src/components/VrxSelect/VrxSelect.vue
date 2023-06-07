<template class="w-full">
  <div class="relative w-full" tabindex="0" @focusout="!disabled ? showDropdown = false : null" @focus="!disabled ? showDropdown = true : null">

    <label id="vrx-select-label" v-if="label" class="block mb-2 text-sm font-medium" :class="style.label">
      {{ label }}
    </label>

    <div
        class="button text-sm rounded-lg p-2.5 block w-full"
        :class="showDropdown ? style.select + ' ' + 'open-overlay' : style.select"
    >
      <div class="button-left-side">
        <VrxIcon v-if="icon" :icon="icon" :color="style.icon" size="5"/>
        <div class="selected-container">
          <div v-if="selectedList.length === 0" :class="style.placeholder">
            {{ placeholder }}
          </div>
          <div v-for="element in selectedList" :class="style.selected" class="p-0.5 item-selected">
            <div>{{ element.label }}</div>
            <VrxIcon icon="x" size="4" @click="itemClick(element)"/>
          </div>
        </div>
      </div>
      <VrxIcon :icon="showDropdown ? 'chevron-up' : 'chevron-down'" size="4" :color="style.icon"/>
    </div>

    <div v-if="showDropdown" class="menu text-sm" :class="style.dropdown">
      <div v-for="element in listData" class="dropdown-item w-full" :class="style.dropdownItem">
        <div class="dropdown-item-content w-full h-full p-2.5" @click="itemClick(element)">
          {{ element.label }}
          <VrxIcon v-if="selectedList.includes(element)" icon="check" size="4" :color="style.icon"/>
        </div>
      </div>
    </div>

    <p id="vrx-input-helper" v-if="helperText" class="mt-2 text-sm" :class="style.helperText">
      {{ helperText }}
    </p>
  </div>

</template>

<script setup lang="ts">
import {computed, ref} from "vue";
import VrxIcon from "@/components/VrxIcon/VrxIcon.vue";
  import {selectStyles, ComponentVariant} from "@/components/styles.ts";
import {IconLibraryType} from "@/components/VrxIcon/IconLibrary.ts";
  const props = withDefaults(defineProps<{
    label: string,
    placeholder: string,
    icon?: IconLibraryType,
    disabled: boolean,
    invalid: boolean,
    helperText: string,
    listData: SelectItemInterface[],
    modelValue: SelectItemInterface[],
    variant: ComponentVariant,
  }>(),{
    disabled: false,
    invalid: false,
    label: '',
    helperText: '',
    placeholder: 'Select',
    variant: 'default'
  })

  const showDropdown = ref(false);
  const selectedList = ref(props.modelValue as Array<SelectItemInterface>);

  const emit = defineEmits(['update:modelValue'])

  const style = computed(() => {
    return selectStyles(props.disabled, props.invalid, props.variant);
  })

  const itemClick = (item : SelectItemInterface) => {
    if(selectedList.value.includes(item)){
      selectedList.value = selectedList.value.filter((element) => element !== item);
    } else {
      selectedList.value.push(item);
    }
    emit('update:modelValue', selectedList.value);
  }

</script>

<style scoped>
  .button {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    z-index: 10;
  }
  .menu {
    z-index: 200;
    position: absolute;
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