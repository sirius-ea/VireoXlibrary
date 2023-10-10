<template>
  <div class="w-auto h-full flex flex-col" :class="isParent ? null : 'pl-5'">
    <div class="tree-element hover:bg-gray-100 dark:hover:bg-gray-800 rounded-s" @click="clickHandle">
      <VrxIcon :icon="node.children.length > 0 ? 'chevron-right': 'empty'" :class="open ? 'icon-rotate' : 'icon-off'" size="5"/>
      <VrxIcon v-if="node.icon" :icon="node.icon" size="4"/>
      <input v-if="selectable" type="checkbox" class="form-checkbox h-4 w-4 text-gray-600" v-model="checkValue" @click="selectHandle" />
      <span>{{ props.node.text }}</span>
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
        :manage-selected-nodes="manageSelectedNodes"
        :add-node="addNode"
        :remove-node="removeNode"
        :parent-id="props.node.id"
        :siblings="node.children"
        :remove-node-by-id="removeNodeById"
        @check-clicked="checkClicked"
    />

  </div>
</template>

<script setup lang="ts">
  import VrxIcon from "@/components/VrxIcon/VrxIcon.vue";
  import {VrxTreeNode} from "@/components/VrxTree/VrxTree.types.ts";
  import {nextTick, Ref, ref, watch} from "vue";

  const props = defineProps<{
    node: VrxTreeNode,
    selectable: boolean,
    isParent?: boolean,
    selected?: boolean,
    selectedNodes: string[],
    manageSelectedNodes: (data: string[]) => void
    addNode: (nodeId: string) => void
    removeNodeById: (nodeId: string, isParent?: boolean) => void
    removeNode: (node: VrxTreeNode) => void
    parentId: string,
    siblings: VrxTreeNode[]
  }>();

  const open = ref(props.node.open);

  const checkValue : Ref<boolean>= ref(props.selected || props.selectedNodes.includes(props.parentId));

  const emit = defineEmits(['checkClicked']);

  watch(() => props.selectedNodes,(newValue) => {
    checkValue.value = newValue.includes(props.node.id) || newValue.includes(props.parentId);
    console.log(props.selectedNodes);
  },{immediate: true, deep: true});

  watch(() => props.selected,(newValue) => {
    checkValue.value = newValue || props.selectedNodes.includes(props.node.id);
  },{immediate: true, deep: true});

  const clickHandle = (event: MouseEvent) => {
    // @ts-ignore
    if(event.target.nodeName !== "INPUT"){
      open.value = !open.value;
    }
  }

  const selectHandle = () => {

    checkValue.value = !checkValue.value;
    checkValue.value ? props.addNode(props.node.id) : props.removeNodeById(props.node.id, props.isParent);


    checkParent();
    checkSiblingsAndParent();

    if(props.node.children.length > 0 && !props.isParent){
      props.node.children.forEach((child) => {
        props.removeNode(child);
      })
    }

    emit('checkClicked', props.node);
  }

  const checkSiblingsAndParent = () => {
    let all = true;
    props.siblings.forEach((node) => {
      if(!props.selectedNodes.includes(node.id)){
        all = false;
      }
    });
    if(all){
      props.siblings.forEach((node) => {
        props.removeNodeById(node.id);
      })
      props.addNode(props.parentId);
    }
  }

  const checkParent = () => {
    // If parent is actually selected, remove it from selected nodes and add all siblings
    if(props.selectedNodes.includes(props.parentId)){
      props.removeNodeById(props.parentId, props.isParent);
      props.siblings.forEach((sibling) => {
        if(sibling.id !== props.node.id)
          props.addNode(sibling.id);
      })
    }
  }

  const checkClicked = () => {
    checkParent();
    checkSiblingsAndParent();
    emit('checkClicked', props.node);
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
