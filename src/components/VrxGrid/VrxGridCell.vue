<template>
  <td
      class="px-3 font-medium whitespace-nowrap"
      :class="getCellStyle()"
      v-click-outside="clickOutside"
      @dblclick="cellDbClicked"
      @click="cellClicked"
      @keydown="keyboardListener($event)"
  >

    <span v-if="cell.type === 'button'">
      <VrxButton v-bind="{...row.getProps(cell.id), markRaw:true}">
        {{ row.getCellContent(cell.id) }}
      </VrxButton>

    </span>
    <!-- TEXT -->
    <span class="vrx-grid-cell-content" v-else-if="!cell.type || cell.type === 'text'">
      <input ref="input" v-if="cell.editable && editMode && cell.editType ==='text'" v-model="row.data[cell.id]" class="edit-input"/>
      <select v-else-if="cell.editable && cell.editType ==='select'" v-model="row.data[cell.id]" class="edit-input" @focus="editMode = true">
        <option v-for="option in props.cell.editOptions" :value="option.value">{{ option.text }}</option>
      </select>
      <span v-else>{{ row.getCellContent(cell.id) }}</span>
    </span>

    <!-- BOOLEAN -->
    <span v-else-if="cell.type === 'boolean'">
      <input :disabled="!cell.editable" type="checkbox" v-model="row.data[cell.id]" class="edit-input" />
    </span>

    <!-- COMPONENT -->
    <component v-else-if="cell.type === 'component'" :is="cell.component" v-bind="row.getProps(cell.id)"/>

    <!-- CUSTOM -->
    <div v-html="cell.staticHTML" v-else-if="cell.type === 'static'"></div>
  </td>
</template>

<script setup lang="ts">

  import {textStyle} from "@/components/VrxGrid/gridStyles.ts";
  import {theme} from "@/components/styles.ts";
  import {Row} from "@/components/VrxGrid/Models/Row.ts";
  import {onBeforeMount, ref} from "vue";
  import {GridHeader} from "@/components/VrxGrid/GridConfiguration.ts";
  import colors from "tailwindcss/colors";
  import {vClickOutside} from "@/directives";
  import VrxButton from "@/components/VrxButton/VrxButton.vue";


  const props = defineProps<{
    row: Row;
    cell: GridHeader;
  }>();

  const editMode = ref(false);
  const input = ref();
  const gridCellTheme = ref();

  onBeforeMount(() => { // Initialize theme
    if(theme && theme.colors)
      gridCellTheme.value = theme.colors;
  });

  const getCellStyle = () => {
    let style = props.cell.align ? textStyle[props.cell.align as keyof typeof textStyle] : '';
    style += props.cell.editable && editMode.value ? ' vrxgrid-editing-cell-style' : '';
    style += props.cell.type === 'static' ? ' py-2' : ' py-4';
    props.cell.type === 'boolean' ? style += ' flex justify-center' : '';
    return style;
  }

  const emits = defineEmits(['cellClicked', 'cellDoubleClicked']);

  const cellClicked = () => {
    if(props.cell.type === 'boolean'){
      props.cell.editable ? props.row.data[props.cell.id] = !props.row.data[props.cell.id] : null;
    }
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


</style>
