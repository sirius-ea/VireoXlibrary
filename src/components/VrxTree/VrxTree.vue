<template>
  <div class="flex flex-col gap-2.5 text-gray-900 dark:text-white">
    <VrxInput v-if="searchable" model-value="test" icon="search"/>
    <TreeItem
        v-for="node in data"
        :parent-id="node.id"
        :node="node"
        :selectable="selectable ?? false"
        :is-parent="true"
        :key="node.id"
        :manage-selected-nodes="manageSelectedNodes"
        :selected-nodes="selectedNodes"
        :add-node="addNode"
        :remove-node-by-id="removeNodeById"
        :remove-node="removeNode"
        :siblings="node.children"
    />
  </div>
</template>

<script setup lang="ts">
  import TreeItem from "@/components/VrxTree/TreeItem.vue";
  import {VrxTreeNode} from "@/components/VrxTree/VrxTree.types.ts";
  import VrxInput from "@/components/VrxInput/VrxInput.vue";
  import {ref} from "vue";

  const props = defineProps<{
    data: VrxTreeNode[],
    selectable: boolean,
    searchable?: boolean
  }>();

  const selectedNodes = ref<String []>([]);

  const manageSelectedNodes = (data: string[]) => {
    selectedNodes.value = data;
  }

  const removeNodeById = (nodeId: string, isParent : boolean = false) => {
      if(selectedNodes.value.includes(nodeId)){
        selectedNodes.value.splice(selectedNodes.value.indexOf(nodeId), 1);
      }
  }

  const removeNode = (node: VrxTreeNode) =>{
    if(selectedNodes.value.includes(node.id)){
      selectedNodes.value.splice(selectedNodes.value.indexOf(node.id), 1);
    }
    removeSelectedChildren(node);
  }

  const addNode = (nodeId: string) => {
    if(!selectedNodes.value.includes(nodeId)){
      selectedNodes.value.push(nodeId);
    }
  }

  const removeSelectedChildren = (node: VrxTreeNode) => {
    if(node.children.length > 0){
      node.children.forEach((child) => {
        removeNode(child);
        removeSelectedChildren(child);
      })
    }
  }


</script>

<style scoped>

</style>