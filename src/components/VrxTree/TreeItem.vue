<template>
  <div data-testid="vrx-tree-node" class="w-auto h-full flex flex-col" :class="isParent ? null : 'pl-5'">
    <div class="tree-element hover:bg-gray-100 dark:hover:bg-gray-800 rounded-s" @click="() => cellClicked(node, props.parentId)">
      <VrxIcon :icon="node.children.length > 0 ? 'chevron-right': 'empty'" :class="open ? 'icon-rotate' : 'icon-off'" size="5" @click="clickHandle" />
      <VrxIcon v-if="node.icon" :icon="node.icon" size="4"/>
      <input
          data-testid="vrx-tree-node-checkbox"
          v-if="selectable"
          type="checkbox"
          class="form-checkbox h-4 w-4 text-primary-600"
          v-model="checkValue"
          @click="selectHandle"
          :indeterminate.prop="hasChildrenChecked && !checkValue"
      />
      <span :class="node.class">{{ props.node.text }}</span>
    </div>

    <!-- CHILDREN RECURSIVE -->
    <TreeItem
        v-if="node.children.length > 0 && open"
        v-for="child in node.children"
        :node="child"
        :key="child.id"
        :selectable="selectable"
        :selected="checkValue"
        :selected-nodes="selectedNodes"
        :add-node="addNode"
        :remove-node="removeNode"
        :parent-id="props.node.id"
        :siblings="node.children"
        :remove-node-by-id="removeNodeById"
        @check-clicked="checkClicked"
        @cellClicked="(value, parentId) => cellClicked(value, parentId)"
    />

  </div>
</template>

<script setup lang="ts">
  import VrxIcon from "@/components/VrxIcon/VrxIcon.vue";
  import {VrxTreeNode} from "@/components/VrxTree/VrxTree.types.ts";
  import {Ref, ref, watch} from "vue";

  const props = defineProps<{
    node: VrxTreeNode,
    selectable: boolean,
    isParent?: boolean,
    selected?: boolean,
    selectedNodes: string[],
    addNode: (nodeId: string) => void
    removeNodeById: (nodeId: string, isParent?: boolean) => void
    removeNode: (node: VrxTreeNode) => void
    parentId: string,
    siblings: VrxTreeNode[]
  }>();

  const open = ref(props.node.open);
  const checkValue : Ref<boolean>= ref(props.selected || props.selectedNodes.includes(props.parentId));
  const hasChildrenChecked = ref(false);

  watch(() => props.selectedNodes,(newValue) => {
    checkValue.value = newValue.includes(props.node.id) || newValue.includes(props.parentId) || props.selected;
    hasChildrenChecked.value = newValue.filter((node : string) => node.includes(props.node.id)).length > 0;
  },{immediate: true, deep: true});

  watch(() => props.selected,(newValue) => {
    checkValue.value = newValue || props.selectedNodes.includes(props.node.id);
  },{immediate: true, deep: true});

  /**
   * Handle click for inputs and tree elements
   * @param event
   */
  const clickHandle = (event: MouseEvent) => {
    // @ts-ignore
    if(event.target.nodeName !== "INPUT"){
      open.value = !open.value;
    }
  }

  const cellClicked = (value : VrxTreeNode, parentId : string) => {
    emit('cellClicked', value, parentId);
  }

  /**
   * Handle the click on the checkbox
   */
  const selectHandle = () => {
    checkValue.value = !checkValue.value;
    checkValue.value ? props.addNode(props.node.id) : props.removeNodeById(props.node.id, props.isParent);

    if(props.node.children.length > 0){
      props.node.children.forEach((child : VrxTreeNode) => {
        props.removeNode(child);
      })
    }

    if(!props.isParent){
      checkParent();
      checkSiblingsAndParent();
      emit('checkClicked', props.node);
    }
  }


  /**
   * Check if all siblings are selected and if so, add the parent
   */
  const checkSiblingsAndParent = () => {
    let all = true;
    props.siblings.forEach((node : VrxTreeNode) => {
      if(!props.selectedNodes.includes(node.id)){
        all = false;
      }
    });
    if(all){
      props.siblings.forEach((node : VrxTreeNode) => {
        props.removeNodeById(node.id);
      })
      props.addNode(props.parentId);
    }
  }

  /**
   * Check if parent is selected and if so, remove it and add all siblings
   */
  const checkParent = () => {
    // If parent is actually selected, remove it from selected nodes and add all siblings
    if(props.selectedNodes.includes(props.parentId) || props.selected){
      props.removeNodeById(props.parentId, props.isParent);
      props.siblings.forEach((sibling : VrxTreeNode) => {
        if(sibling.id !== props.node.id)
          props.addNode(sibling.id);
      })
    }
  }

  /**
   * Emitted when a children checkbox is clicked
   */
  const checkClicked = () => {
    if(props.isParent) return;
    checkParent();
    checkSiblingsAndParent();
    emit('checkClicked', props.node);
  }

  const emit = defineEmits(['checkClicked', 'cellClicked']);

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
