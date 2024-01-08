<template class="w-full">
  <div
      data-testid="vrx-select"
      class="relative w-full"
      tabindex="0"
      ref="toggle"
      v-click-outside="onFocusOut"
      @keyup.esc="onFocusOut"
  >
    <label data-testid="vrx-select-label" v-if="label" class="block mb-2 text-sm font-medium" :class="style.label" :for="id">
      {{ label }}
    </label>

    <div
        data-testid="vrx-select-button"
        :id="id"
        @click="!disabled ? showDropdown = !showDropdown : null"
        class="button text-sm rounded-lg p-2.5 block w-full"
        :class="[showDropdown ? style.select + ' ' + 'open-overlay' : style.select, elementClass]"
        :data-toggle="'dropdown-'+id"

    >
      <div class="button-left-side">
        <VrxIcon v-if="icon" :icon="icon" :color="style.icon" size="5"/>

        <div class="selected-container">
          <div v-if="selectedList.length === 0" :class="style.placeholder">
            {{ placeholder }}
          </div>

          <div v-else class="selected-container">
            <div :data-testid="'vrx-select-dropdown-selected-'+index" v-if="multiselect" v-for="(element, index) in selectedList" :class="style.selected" class="p-0.5 item-selected">
              <div class="element-label">
                <VrxIcon v-if="element.icon" :icon="element.icon" size="4"/>
                {{ element.label }}
              </div>
              <VrxIcon icon="x" size="4" @click="itemClick(element)"/>
            </div>

            <div v-if="!multiselect">
              <div class="element-label">
                <VrxIcon v-if="selectedList[0].icon" :icon="selectedList[0].icon" size="4"/>
                {{ selectedList[0].label }}
              </div>
            </div>
          </div>

        </div>
      </div>
      <div class="button-right-side">
        <VrxIcon v-if="selectedList.length > 0 && showRemove" data-testid="vrx-deselect-button" :icon="'x'" size="4" :color="style.icon" @mousedown.stop="deselectAll"/>
        <VrxIcon icon="chevron-down" :class="showDropdown ? 'icon-active' : 'icon-off'" size="5" :color="style.icon"/>
      </div>
    </div>
    <p data-testid="vrx-select-helper" v-if="helperText" class="mt-2 text-sm" :class="style.helperText">
      {{ helperText }}
    </p>
  </div>

  <div class="fixed top-0 left-0 w-full h-full z-20" v-if="showDropdown" @click="onFocusOut">
  <div data-testid="vrx-select-dropdown" v-if="showDropdown"  class="menu text-sm" :class="style.dropdown" role="listbox" :id="'dropdown-'+id" v-append-to-body="$refs.toggle">
      <div v-if="searchable" class="w-full">
        <input
            type="text"
            :placeholder="searchPlaceholder"
            class="w-full p-2.5 focus:outline-none bg-transparent"
            @input="(event) => searchFilter(event)"
            @focus="searchClick(true)"
            @focusout="searchClick(false)"
        />
      </div>
      <div v-for="(element, index) in listDataCopy" :key="index" class="dropdown-item w-full" :class="style.dropdownItem">
        <div
            :data-testid="'vrx-select-dropdown-' + index"
            class="dropdown-item-content w-full h-full p-2.5"
            :class="selectedList.includes(element) ? 'bg-blue-100 dark:bg-blue-500' : ''"
            @click="itemClick(element)"
        >
          <div class="element-label">
            <VrxIcon v-if="element.icon" :icon="element.icon" size="4"/>
            {{ element.label }}
          </div>
          <VrxIcon v-if="selectedList.includes(element)" icon="check" size="4" :color="style.icon"/>
        </div>
      </div>
    </div>
  </div>

</template>

<script setup lang="ts">
import {computed, ref} from "vue";
import VrxIcon from "@/components/VrxIcon/VrxIcon.vue";
import {selectStyles, ComponentVariant} from "@/components/styles";
import {IconLibraryType} from "@/components/VrxIcon/IconLibrary";
import type {SelectItemInterface} from "@/components";
import {v4 as uuidv4} from 'uuid';
import {vAppendToBody, vClickOutside} from "@/directives";

const id = uuidv4();
  const props = withDefaults(defineProps<{
    label?: string,
    placeholder?: string,
    icon?: IconLibraryType,
    disabled?: boolean,
    invalid?: boolean,
    helperText?: string,
    listData: SelectItemInterface[],
    modelValue: SelectItemInterface[],
    variant?: ComponentVariant,
    multiselect?: boolean,
    height?: number,
    onSelect?: (item: SelectItemInterface) => void
    onClear?: () => void
    searchable?: boolean
    searchPlaceholder?: string
    showRemove?: boolean
    elementClass?: string
  }>(),{
    disabled: false,
    invalid: false,
    multiselect: false,
    showRemove:true,
    label: '',
    helperText: '',
    placeholder: 'Select option',
    variant: 'default',
    searchPlaceholder: 'Search'
  })

  const showDropdown = ref(false);
  const searchFocus = ref(false);
  const selectedList = ref(props.modelValue);
  const listDataCopy = ref(props.listData);
  const emit = defineEmits(['update:modelValue'])

  const style = computed(() => {
    return selectStyles(props.disabled, props.invalid, props.variant);
  })

  const searchFilter = (event: any) => {
    if(event){
      listDataCopy.value = props.listData.filter((elem : any) => elem.label.toLowerCase().includes(event.target.value.toLowerCase()));
    }
  }

  const onFocusOut = () => {
    setTimeout(() => {
      listDataCopy.value = props.listData;
      if(!props.disabled && searchFocus.value === false) showDropdown.value = false;
    }, 10)
  }

  const searchClick = (value: boolean) => {
    searchFocus.value = value;
  }

  const deselectAll = () => {
    if(props.disabled) return;
    showDropdown.value = false;
    selectedList.value.splice(0);
    emit('update:modelValue', selectedList.value);
    props.onClear ? props.onClear() : null;
  }

  const itemClick = (item : SelectItemInterface) => {
    if(props.disabled) return;
    if(!props.multiselect){
      showDropdown.value = false;
      selectedList.value = [item];
    } else {
      const indexItem = selectedList.value.findIndex((element : any) => element.value === item.value);
      if(indexItem > -1){
        selectedList.value.splice(indexItem,1);
      } else {
        selectedList.value.push(item);
      }
    }
    emit('update:modelValue', selectedList.value);


    props.onSelect ? props.onSelect(item) : null;
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
    height: v-bind(height + 'px');
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

  .button-left-side {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    overflow: hidden;
    padding-right: 10px;
  }
  .button-right-side{
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 5px;
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
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .dropdown-item-content{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  .element-label{
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 5px;
  }
</style>
