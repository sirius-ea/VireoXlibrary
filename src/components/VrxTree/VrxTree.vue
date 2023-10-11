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
    searchable?: boolean,
    returnsUserData?: boolean
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
    selectedNodes.value.forEach((item : any) => {
      if(item.includes(node.id.split('-')[0])){
        selectedNodes.value.splice(selectedNodes.value.indexOf(item), 1);
      }
    })
  }

  const getSelectedNodes = () => {
    const result : VrxTreeNode[] = [];

    const traverse = (node: VrxTreeNode) => {
      if(selectedNodes.value.includes(node.id)){
        result.push(node);
      }

      if(node.children.length > 0){
        node.children.forEach((child) => {
          traverse(child);
        })
      }
    }

    traverse(props.data[0]);
    const flatMapResult = result.flatMap(node => flattenTree(node));
    return props.returnsUserData ? flatMapResult.map(node => node.userData ?? node) : flatMapResult;
  }

  const flattenTree = (node: VrxTreeNode) => {
    const result : VrxTreeNode [] = [];
    const flat = (node: VrxTreeNode) => {
      result.push(node);
      node.children.forEach((child) => {
        flat(child);
      })
    }

    flat(node);
    return result;
  }

  defineExpose({
    getSelectedNodes
  })


</script>

<style scoped>

</style>