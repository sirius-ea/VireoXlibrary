<template>
  <td
      class="px-3 font-medium whitespace-nowrap vrx-cell"
      :class="getCellStyle()"
      v-click-outside="clickOutside"
      @dblclick="cellDbClicked"
      @click="cellClicked"
      @keydown="keyboardListener($event)"
  >
    <!-- TEXT -->
    <span class="vrx-grid-cell-content" v-if="!cell.type || cell.type === 'text'">
      <input ref="input" v-if="cell.editable && editMode && cell.editType ==='text'" v-model="row.data[cell.id]" class="edit-input"/>
      <select v-else-if="cell.editable && cell.editType ==='select'" v-model="row.data[cell.id]" class="edit-input" @focus="editMode = true">
        <option v-for="option in props.cell.editOptions" :value="option.value">{{ option.text }}</option>
      </select>
      <span v-else>{{ row.getCellContent(cell.id) }}</span>
    </span>

    <!-- BOOLEAN -->
    <span v-else-if="cell.type === 'boolean'">
      <input v-if="cell.editable" type="checkbox" v-model="row.data[cell.id]" class="edit-input" />
      <input v-else type="checkbox" v-model="row.data[cell.id]" class="edit-input" onclick="return false" />
    </span>

    <!-- COMPONENT -->
    <component v-else-if="cell.type === 'component'" :is="row.data[cell.id]" v-bind="row.componentProps"/>

    <!-- CUSTOM -->
    <div v-html="cell.staticHTML" v-else-if="cell.type === 'static'"></div>
  </td>
</template>

<script setup lang="ts">

  import {textStyle} from "@/components/VrxGrid/gridStyles.ts";
  import {Row} from "@/components/VrxGrid/Models/Row.ts";
  import {ref} from "vue";
  import {GridHeader} from "@/components/VrxGrid/GridConfiguration.ts";
  import colors from "tailwindcss/colors";


  const props = defineProps<{
    row: Row;
    cell: GridHeader;
  }>();

  const editMode = ref(false);
  const input = ref();

  const getCellStyle = () => {
    let style = props.cell.align ? textStyle[props.cell.align as keyof typeof textStyle] : '';
    style += props.cell.editable && editMode.value ? ' editing' : '';
    style += props.cell.type === 'static' ? ' py-2' : ' py-4';
    return style;
  }

  const emits = defineEmits(['cellClicked', 'cellDoubleClicked']);

  const cellClicked = () => {
    emits('cellClicked', {
      cellId: props.cell.id,
      rowId: props.row.id,
      value: props.cell.type === 'static' ? props.cell.staticHTML : props.row.data[props.cell.id]
    });
  }

  const cellDbClicked = () => {
    emits('cellDoubleClicked', {
      cellId: props.cell.id,
      rowId: props.row.id,
      value: props.cell.type === 'static' ? props.cell.staticHTML : props.row.data[props.cell.id]
    });

    props.cell.type !== 'boolean' ? editMode.value = true : null;
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

  .vrx-cell {
    width: v-bind(cell.width+ 'px');
    max-width: v-bind(cell.width+ 'px');
  }

  .editing{
    -webkit-box-shadow:inset 0px 0px 0px 2px v-bind(colors.blue[500]);
    -moz-box-shadow:inset 0px 0px 0px 2px v-bind(colors.blue[500]);
    box-shadow:inset 0px 0px 0px 2px v-bind(colors.blue[500]);
  }

</style>