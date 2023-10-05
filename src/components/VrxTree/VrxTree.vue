<template>
  <div class="flex flex-col gap-2.5 text-gray-900 dark:text-white">
    <VrxInput v-if="searchable" model-value="test" icon="search"/>
    <TreeItem
        v-for="node in data"
        :node="node"
        :selectable="selectable ?? false"
        :is-parent="true"
        :key="node.id"
        :manage-selected-nodes="manageSelectedNodes"
        :selected-nodes="selectedNodes"
        :add-node="addNode"
        :remove-node="removeNode"
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

  const removeNode = (nodeId: string) => {
    if(selectedNodes.value.includes(nodeId)){
      selectedNodes.value.splice(selectedNodes.value.indexOf(nodeId), 1);
    }
  }

  const addNode = (nodeId: string) => {
    if(!selectedNodes.value.includes(nodeId)){
      selectedNodes.value.push(nodeId);
    }
  }

</script>

<style scoped>

</style>