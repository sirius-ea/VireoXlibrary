<template>
  <td
      class="px-3 py-4 font-medium whitespace-nowrap vrx-cell"
      :class="getCellStyle()"
      v-click-outside="clickOutside"
      @dblclick="cellClicked"
      @keydown="keyboardListener($event)"
  >
    <span class="vrx-grid-cell-content" v-if="!cell.type || cell.type === 'text'">
      <input ref="input" v-if="cell.editable && editMode && cell.editType ==='text'" v-model="row.data[cell.id]" class="edit-input"/>
      <select v-else-if="cell.editable && editMode && cell.editType ==='select'" v-model="row.data[cell.id]" class="edit-input">
        <option v-if="!optionInList" selected :value="row.data[cell.id]">{{ row.data[cell.id] }}</option>
        <option v-for="(option, index) in cell.editOptions" :value="option.value" :selected="index === 0 && !optionInList">{{ option.text }}</option>
      </select>
      <span v-else>{{ row.getCellContent(cell.id) }}</span>
    </span>
    <component v-else :is="row.data[cell.id]"/>
  </td>
</template>

<script setup lang="ts">

  import {textStyle} from "@/components/VrxGrid/gridStyles.ts";
  import {Row} from "@/components/VrxGrid/Models/Row.ts";
  import {ref} from "vue";

  const props = defineProps<{
    row: Row;
    cell: any;
  }>();

  const getCellStyle = () => {
    let style = props.cell.align ? textStyle[props.cell.align] : '';
    style += props.cell.editable && editMode.value ? ' text-blue-700 dark:text-blue-500' : '';

    switch (props.cell.editType){
      case 'text':
        style += ' cursor-text';
        break;
      case 'select':
        style += ' cursor-pointer';
        break;
      default:
        style += ' cursor-default';
    }
    return style;
  }

  const editMode = ref(false);
  const input = ref();

  const optionInList = (value: string) => {
    return props.cell.editOptions.find((option: any) => option.value === value).length > 0;
  }

  const selectOptions = (actual: any) => {
    let options = [];
    if(props.cell.editOptions){
      options = props.cell.editOptions.map((option: any) => {
        return option.value;
      });

      if(!options.includes(actual)){
        options.push(actual);
      }
    }
  }
  const cellClicked = () => {
    editMode.value = true;
    setTimeout(() => {
      props.cell.editable  && props.cell.editType === 'text' ? input.value.focus() : null;
    }, 100);
  }

  const vClickOutside = {
    mounted(el : any, binding : any) {
      el.clickOutsideEvent = function(event : any) {
        if (!(el === event.target || el.contains(event.target))) {
          binding.value(event, el);
        }
      };
      document.body.addEventListener('click', el.clickOutsideEvent);
    },
    unmounted(el : any) {
      document.body.removeEventListener('click', el.clickOutsideEvent);
    }
  }

  const clickOutside = () => {
    editMode.value = false;
  }

  const keyboardListener = (e: KeyboardEvent) => {
    if(e.key === 'Enter'){
      e.preventDefault();
      editMode.value = false;
    }
  }

</script>

<style scoped>
  .edit-input{
    outline: none;
    border: none;
    background-color: transparent;
    width: 100%;
  }

  .vrx-cell{
    width: v-bind(cell.width + 'px');
    max-width: v-bind(cell.width + 'px') ;
  }


</style>