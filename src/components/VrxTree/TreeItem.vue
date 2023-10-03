<template>
  <div class="w-auto h-full flex flex-col" :class="isParent ? null : 'pl-5'">
    <div class="tree-element" @click="clickHandle">
      <VrxIcon :icon="node.children.length > 0 ? 'chevron-right': 'empty'" :class="open ? 'icon-rotate' : 'icon-off'" size="5"/>
      <VrxIcon v-if="node.icon" :icon="node.icon" size="4"/>
      <input v-if="selectable" type="checkbox" class="form-checkbox h-4 w-4 text-gray-600" v-model="checkValue" @click="checkBoxClick" />
      <span>{{ props.node.text }}</span>
    </div>

    <!-- CHILDREN RECURSIVE -->
    <TreeItem
        ref="childrenRef"
        v-show="node.children.length > 0 && open"
        v-for="child in node.children"
        :node="child" :key="child.text"
        :selectable="selectable"
        @check-clicked="childCheckClicked"
    />

  </div>
</template>

<script setup lang="ts">
  import VrxIcon from "@/components/VrxIcon/VrxIcon.vue";
  import {VrxTreeNode} from "@/components/VrxTree/VrxTree.types.ts";
  import {nextTick, ref} from "vue";
  import {forceReRender} from "@storybook/vue3";

  const childrenRef = ref();

  const open = ref(false);
  const props = defineProps<{
    node: VrxTreeNode,
    selectable: boolean,
    isParent?: boolean
  }>();

  const checkValue = ref(false);
  const emit = defineEmits(['checkClicked']);

  /**
   * Depending on the clicked element, open/close the tree or select/unselect the item
   * @param event
   */
  const clickHandle = (event: MouseEvent) => {
    // @ts-ignore
    if(event.target.nodeName !== "INPUT"){
      open.value = !open.value;
    }
  }

  /**
   * Select/unselect the clicked item and all his children
   * Emits the event for parent component
   */
  const checkBoxClick = () => {
    checkValue.value = !checkValue.value;
    if(childrenRef.value){
      selectAllChildren(checkValue.value);
    }
    emit('checkClicked', checkValue.value);
  }

  /**
   * Checks if all children are selected and if so, selects the parent
   * Emit
   */
  const childCheckClicked = () => {
    checkValue.value = allChildrenSelected(childrenRef);
    emit('checkClicked', props.node.selected);
  }

  /**
   * Checks if all children are selected
   * @returns {boolean}
   * @param childrenRef
   */
  const allChildrenSelected = (childrenRef: any) => {
   let allChecked = true;
    childrenRef.value.forEach((child: any) => {
      allChecked = child.isSelected() && allChecked;
    });
    return allChecked;
  }


  const selectAllChildren = (value: boolean) => {
    if(childrenRef.value){
      childrenRef.value.forEach((child: any) => {
        child.setValue(value);
        child.selectAllChildren(value);
      });
    }
  }

  const setValue = (value: boolean) => {
    checkValue.value = value;
  }

  const getSelectValue = () => {
    return {val: checkValue.value, text: props.node.text};
  }

  const isSelected = () => {
    return checkValue.value;
  }


  defineExpose({
    setValue,
    selectAllChildren,
    getSelectValue,
    isSelected
  });
</script>


<style scoped>
  .tree-element{
    display: flex;
    flex-direction: row;
    align-items: center;
    cursor: pointer;
    gap: 5px;
  }

</style>