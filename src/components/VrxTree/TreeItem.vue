<template>
  <div class="w-auto h-full flex flex-col" :class="isParent ? null : 'pl-5'">
    <div class="tree-element hover:bg-gray-100 rounded" @click="clickHandle">
      <VrxIcon :icon="node.children.length > 0 ? 'chevron-right': 'empty'" :class="open ? 'icon-rotate' : 'icon-off'" size="5"/>
      <VrxIcon v-if="node.icon" :icon="node.icon" size="4"/>
      <input v-if="selectable" type="checkbox" class="form-checkbox h-4 w-4 text-gray-600" v-model="node.selected" @click="checkBoxClick" />
      <span>{{ props.node.text }}</span>
    </div>

    <!-- CHILDREN RECURSIVE -->
    <TreeItem
        v-if="node.children.length > 0 && open"
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
  import { ref } from "vue";

  const open = ref(false);
  const props = defineProps<{
    node: VrxTreeNode,
    selectable: boolean,
    isParent?: boolean
  }>();

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
    props.node.selected = !props.node.selected;
    selectChildren(props.node);
    emit('checkClicked', props.node.selected);
  }

  /**
   * Checks if all children are selected and if so, selects the parent
   * Emit
   */
  const childCheckClicked = () => {
    props.node.selected = allChildrenSelected(props.node);
    emit('checkClicked', props.node.selected);
  }

  /**
   * Checks if all children are selected
   * @param node
   * @returns {boolean}
   */
  const allChildrenSelected = (node: VrxTreeNode) => {
   let allChecked = true;
    node.children.forEach((child: VrxTreeNode) => {
      allChecked = child.selected && allChecked && allChildrenSelected(child);
    });
    return allChecked;
  }

  /**
   * Select/unselect all children recursively
   * @param node
   */
  const selectChildren = (node: VrxTreeNode) => {
    node.children.forEach((child: VrxTreeNode) => {
      child.selected = props.node.selected;
      selectChildren(child);
    });
  }
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