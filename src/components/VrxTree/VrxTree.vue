<template>
  <div
      class="flex flex-col gap-2.5 vrxtree-text-style"
      data-testid="vrx-tree"
  >
    <VrxInput v-if="searchable" model-value="test" icon="search"/>
    <TreeItem
        v-for="node in data"
        :parent-id="node.id"
        :node="node"
        :selectable="selectable ?? false"
        :is-parent="true"
        :key="node.id"
        :selected-nodes="selectedNodes as string[]"
        :add-node="addNode"
        :remove-node-by-id="removeNodeById"
        :remove-node="removeNode"
        :siblings="node.children"
        @cell-clicked="cellClicked"
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
    selectable?: boolean,
    searchable?: boolean,
    returnsUserData?: boolean
  }>();

  /**
   * Assigns a unique id to each node so that operations can be performed on them
   * @param tree
   */
  const buildTreeWithIds = (tree: VrxTreeNode[]) => {
    const addChildrenIds = (node: VrxTreeNode, lastId: string) => {
      node.children.forEach((child) => {
        child.id = lastId + '-' + Math.random().toString(16).slice(2);
        if(child.selected) selectedNodes.value.push(child.id);
        addChildrenIds(child, child.id);
      })
    }

    tree.forEach((node) => {
      node.id = Math.random().toString(16).slice(2);
      if(node.selected) selectedNodes.value.push(node.id);
      addChildrenIds(node, node.id);
    })
  }

  /**
   * Removes the selected node based on the id
   * @param nodeId
   * @param isParent
   */
  const removeNodeById = (nodeId: string, isParent : boolean = false) => {
      if(isParent) selectedNodes.value = [];
      if(selectedNodes.value.includes(nodeId)){
        selectedNodes.value.splice(selectedNodes.value.indexOf(nodeId), 1);
      }
  }

  /**
   * Removes the selected node and removes all the children of the node
   * @param node
   */
  const removeNode = (node: VrxTreeNode) => {
    removeNodeById(node.id);
    removeSelectedChildren(node);
  }

  /**
   * Checks if the parent node is selected and adds it to the selected nodes
   * @param nodeId
   */
  const addNode = (nodeId: string) => {
    if(!selectedNodes.value.includes(nodeId)){
      selectedNodes.value.push(nodeId);
    }
  }

  /**
   * If parent is removed, remove all the children of the parent
   * @param node
   */
  const removeSelectedChildren = (node: VrxTreeNode) => {
    selectedNodes.value.forEach((item : any) => {
      if(item.includes(node.id)){
        selectedNodes.value.splice(selectedNodes.value.indexOf(item), 1);
      }
    })
  }

  /**
   * Returns the node based on the text
   * @param text
   */
  const getNodeByText = (text: string) => {
    let result;
    const findText = (node: VrxTreeNode) => {
      if(node.text === text){
        result = node;
        return;
      }
      if(node.children.length > 0){
        node.children.forEach((child) => {
          findText(child);
        })
      }
    }
    findText(props.data[0]);
    return result;
  }

  /**
   * Returns the selected nodes
   */
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

  /**
   * Flattens the tree structure so that can be used as a list
   * @param node
   */
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

  const cellClicked = (node: VrxTreeNode, parentId: string) => {
    emit('cellClicked', node, parentId)
  }

  const selectedNodes = ref<String []>([]);
  const emit = defineEmits(['cellClicked']);
  buildTreeWithIds(props.data);

  defineExpose({ getSelectedNodes, getNodeByText, removeNodeById, addNode, removeNode, flattenTree });

</script>

<style scoped>

</style>
