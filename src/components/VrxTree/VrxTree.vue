<template>
  <div
      class="flex flex-col gap-2.5 vrxtree-text-style"
      data-testid="vrx-tree"
  >
    <VrxInput v-if="searchable" model-value="test" icon="search"/>
    <draggable
      v-model="data"
      :disabled="!isDraggable"
      item-key="id"
      :move="() => console.log('move')"
      :group="{name:'tree'}"
      class="flex flex-col"
    >
      <template #item="{element}">
        <TreeItem
            :parent-id="element.id"
            :node="element"
            :selectable="selectable ?? false"
            :is-parent="true"
            :key="element.id"
            :siblings="data"
            :isDraggable="isDraggable ?? false"
            @cell-clicked="cellClicked"
            @moveEnd="onMoveEnd"
        />
      </template>
    </draggable>
  </div>
</template>

<script setup lang="ts">
  import TreeItem from "@/components/VrxTree/TreeItem.vue";
  import {VrxTreeNode} from "@/components/VrxTree/VrxTree.types.ts";
  import VrxInput from "@/components/VrxInput/VrxInput.vue";
  import {provide, ref} from "vue";
  import draggable from "vuedraggable";
  import TreeBranch from "@/components/VrxTree/TreeBranch.vue";

  const data = defineModel<VrxTreeNode[]>({
    required: true,
  })

  const props = defineProps<{
    selectable?: boolean,
    searchable?: boolean,
    returnsUserData?: boolean
    isDraggable?: boolean
  }>();

  /**
   * Assigns a unique id to each node so that operations can be performed on them
   * @param tree
   */
  const buildTreeWithIds = (tree: VrxTreeNode[]) => {
    const addChildrenIds = (node: VrxTreeNode, lastId: string) => {
      node.children.forEach((child) => {
        if(!child.id)
          child.id = lastId + '-' + Math.random().toString(16).slice(2);

        if(child.selected) selectedNodes.value.push(child.id);
        addChildrenIds(child, child.id);
      })
    }

    tree.forEach((node) => {
      if(!node.id)
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
      if(isParent) selectedNodes.value.splice(0);

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
    for(const nodes of data.value){
      findText(nodes);
    }
    return result;
  }

  const getNodeById = (id:string) => {
    let result : VrxTreeNode | null = null;
    const findNode = (node: VrxTreeNode) => {
      if(node.id === id){
        result = node;
        return;
      }
      if(node.children.length > 0){
        node.children.forEach((child) => {
          if(!result)
            findNode(child);
        })
      }
    }

    for(const nodes of data.value){
      findNode(nodes);
    }
    return result;
  }

  /**
   * Return the parent of the passed node, if have no parent return null
   * @param toFind VrxTreeNode
   */
  const getParentNode = (toFind: VrxTreeNode) => {
    let result : VrxTreeNode | null = null;
    const findParent = (node: VrxTreeNode) => {
      if(node.children.some(child => child.id === toFind.id)){
        result = node;
        return;
      }
      if(node.children.length > 0){
        node.children.forEach((child) => {
          if(!result)
            findParent(child);
        })
      }
    }
    for(const nodes of data.value){
      findParent(nodes);
    }

    return result;
  }

  /**
   * Return the complete path of the node
   * @param nodeId
   */
  const getNodePath = (nodeId: string): String[] => {
    const node: VrxTreeNode | null = getNodeById(nodeId);
    const _recursiveFind = (toFind: VrxTreeNode | null): String[] => {
      if(!toFind) return [];
      else return _recursiveFind(getParentNode(toFind)).concat([toFind.text]);
    }

    return (_recursiveFind(node));
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

    data.value.forEach((dt) => {
      traverse(dt);
    })

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

  const cellClicked = (node: VrxTreeNode, parentId: string, elementRef: Element | null) => {
    emit('cellClicked', node, parentId, elementRef);
  }


  function onMoveEnd(a : any, b : any, c : any) {
    emit('onMoveEnd', a, b, c);
  }

  const selectedNodes = ref<String []>([]);
  const emit = defineEmits(['cellClicked', 'onMoveEnd']);

  provide('addNode', addNode);
  provide('removeNodeById', removeNodeById);
  provide('removeNode', removeNode);
  provide('selectedNodes', selectedNodes.value);

  buildTreeWithIds(data.value);

  defineExpose({ getNodePath, getSelectedNodes, getNodeByText, removeNodeById, addNode, removeNode, flattenTree, getNodeById, getParentNode });

</script>

<style scoped>

</style>
