<template>
  <td
      class="px-3 py-4 font-medium whitespace-nowrap vrx-cell"
      :class="getCellStyle()"
      v-click-outside="clickOutside"
      @dblclick="cellDbClicked"
      @click="cellClicked"
      @keydown="keyboardListener($event)"
  >
    <span class="vrx-grid-cell-content" v-if="!cell.type || cell.type === 'text'">
      <input ref="input" v-if="cell.editable && editMode && cell.editType ==='text'" v-model="row.data[cell.id]" class="edit-input"/>
      <select v-else-if="cell.editable && cell.editType ==='select'" v-model="row.data[cell.id]" class="edit-input">
        <option v-for="option in props.cell.editOptions" :value="option.value">{{ option.text }}</option>
      </select>
      <span v-else>{{ row.getCellContent(cell.id) }}</span>
    </span>
    <span v-else-if="cell.type === 'boolean'">
      <input v-if="cell.editable" type="checkbox" v-model="row.data[cell.id]" class="edit-input" />
      <input v-else type="checkbox" v-model="row.data[cell.id]" class="edit-input" onclick="return false" />
    </span>
    <component v-else :is="row.data[cell.id]" v-bind="row.componentProps"/>
  </td>
</template>

<script setup lang="ts">

  import {textStyle} from "@/components/VrxGrid/gridStyles.ts";
  import {Row} from "@/components/VrxGrid/Models/Row.ts";
  import {ref} from "vue";
  import {iconLibrary} from "@/components/VrxIcon/IconLibrary.ts";

  const props = defineProps<{
    row: Row;
    cell: any;
  }>();

  const editMode = ref(false);
  const input = ref();

  const getCellStyle = () => {
    let style = props.cell.align ? textStyle[props.cell.align as keyof typeof textStyle] : '';
    style += props.cell.editable && editMode.value ? 'editing' : '';

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

  const emits = defineEmits(['cellClicked', 'cellDoubleClicked']);

  const cellClicked = () => {
    emits('cellClicked', {id: props.cell.id, value: props.row.data[props.cell.id]})
  }

  const cellDbClicked = () => {
    emits('cellDoubleClicked', props.row.data[props.cell.id])
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

  .editing{
  }



</style>