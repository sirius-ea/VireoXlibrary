<template>
  <div
      class="flex flex-col gap-2.5 vrxtree-text-style h-full"
      data-testid="vrx-tree"
  >
    <div :class="[toolbarClass,'flex flex-row gap-2 sticky w-full z-10']" v-if="searchable || $slots.toolbar">
      <VrxInput v-if="searchable" v-model="textFilter" :placeholder="searchablePlaceholder" icon="search" type="text" class="flex-1"/>
      <slot name="toolbar"/>
    </div>
    <div class="h-full overflow-auto ">
      <draggable
          v-model="data"
          :disabled="!isDraggable"
          item-key="id"
          :group="{name:'tree'}"
          class="flex flex-col"
      >
        <template #item="{element}">
          <TreeItem
              v-if="!element.filtered"
              :parent-id="element.id"
              :node="element"
              :selectable="selectable ?? false"
              :is-parent="true"
              :key="element.id"
              :siblings="data"
              :tooltip="element.tooltip"
              :isDraggable="isDraggable ?? false"
              @onClickNode="onClickNode"
              @onCheckNode="(value,isChecked) => checkClicked(value, isChecked)"
              @moveEnd="onMoveEnd"
              :parent-filtered="false"
          />
        </template>
      </draggable>
    </div>
  </div>
</template>

<script setup lang="ts" generic="T">
  import TreeItem from "@/components/VrxTree/TreeItem.vue";
  import {IVrxTreeUseCase, VrxTreeNode} from "@/components";
  import VrxInput from "@/components/VrxInput/VrxInput.vue";
  import {provide, ref, watch} from "vue";
  import draggable from "vuedraggable";

  const data = defineModel<VrxTreeNode<T>[]>({
    required: true,
  })

  if(!data.value)
    throw new Error('vueModel is required');

  const textFilter = ref('');

  const props = defineProps<{
    selectable?: boolean,
    searchable?: boolean,
    searchablePlaceholder?: string,
    isDraggable?: boolean,
    toolbarClass?: string
  }>();

  /**
   * Assigns a unique id to each node so that operations can be performed on them
   * @param tree
   */
  const buildTreeWithIds = (tree: VrxTreeNode<T>[]) => {
    const addChildrenIds = (node: VrxTreeNode<T>, lastId: string) => {
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
   */
  const removeNodeById = (nodeId: string) => {
      if(selectedNodes.value.includes(nodeId)){
        selectedNodes.value.splice(selectedNodes.value.indexOf(nodeId), 1);
      }
  }

  /**
   * Removes the selected node and removes all the children of the node
   * @param node
   */
  const removeNode = (node: VrxTreeNode<T>) => {
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
  const removeSelectedChildren = (node: VrxTreeNode<T>) => {
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
    const findText = (node: VrxTreeNode<T>) => {
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

  const getNodeById = (id:string) : VrxTreeNode<T> | null => {
    let result : VrxTreeNode<T> | null = null;
    const findNode = (node: VrxTreeNode<T>) => {
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
   * Return the parent of the passed node, if it has no parent return null
   * @param toFind VrxTreeNode
   */
  const getParentNode = (toFind: VrxTreeNode<T>) : VrxTreeNode<T> | null => {
    let result : VrxTreeNode<T> | null = null;
    const findParent = (node: VrxTreeNode<T>) => {
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
    const node = getNodeById(nodeId);
    const _recursiveFind = (toFind: VrxTreeNode<T> | null): String[] => {
      if(!toFind) return [];
      else return _recursiveFind(getParentNode(toFind)).concat([toFind.text]);
    }

    return (_recursiveFind(node));
  }

  /**
   * Returns the selected nodes
   */
  const getSelectedNodes = () => {
    const result : VrxTreeNode<T>[] = [];

    const traverse = (node: VrxTreeNode<T>) => {
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

    return result.flatMap(node => flattenTree(node));
  }

  /**
   * Flattens the tree structure so that can be used as a list
   * @param node
   */
  const flattenTree = (node: VrxTreeNode<T>) => {
    const result : VrxTreeNode<T> [] = [];
    const flat = (node: VrxTreeNode<T>) => {
      result.push(node);
      node.children.forEach((child) => {
        flat(child);
      })
    }
    flat(node);
    return result;
  }

  const clearSelectedNodes = () => {
    selectedNodes.value.splice(0)
  }

  const setSelectedNode = (id : string, select = true) => {
    const nodeToSet = getNodeById(id);
    if(!nodeToSet) return;

    if(select){
      nodeToSet.selected = true;
      selectedNodes.value.push(id);
    } else {
      nodeToSet.selected = false;
      selectedNodes.value.splice(selectedNodes.value.indexOf(id), 1);
    }
  }

  const openClose = (node: VrxTreeNode<T>, value : boolean) => {
    node.open = value;
    node.children.forEach((child) => {
      openClose(child, value);
    })
  }

  const expandAll = () => {
    data.value.forEach((node) => {
      openClose(node, true);
    })
  }

  const collapseAll = () => {
    data.value.forEach((node) => {
      openClose(node, false);
    })
  }
  const onClickNode = (node: VrxTreeNode<T>, parentId: string, elementRef: Element | null) => {
    emit('onClickNode', node, parentId, elementRef);
  }

  const checkClicked = (node: VrxTreeNode<T>, isChecked:boolean) => {
    emit('onCheckNode', node, isChecked);
  }


  function onMoveEnd(a : any, b : any, c : any) {
    emit('onMoveEnd', a, b, c);
  }

  const selectedNodes = ref<String []>([]);
  const emit = defineEmits(['onClickNode', 'onMoveEnd', "onCheckNode"]);

  provide('addNode', addNode);
  provide('removeNodeById', removeNodeById);
  provide('removeNode', removeNode);
  provide('selectedNodes', selectedNodes.value);

  buildTreeWithIds(data.value);

  defineExpose<IVrxTreeUseCase<T>>({
    getNodePath,
    getSelectedNodes,
    getNodeByText,
    removeNodeById,
    addNode,
    removeNode,
    flattenTree,
    getNodeById,
    getParentNode,
    setSelectedNode,
    clearSelectedNodes,
    expandAll,
    collapseAll
  });



  watch(() => textFilter.value, (newValue) => {
    const filterText = newValue.trim().toLowerCase();

    for(const node of data.value){
      filter(node, filterText);
    }


  },{immediate: true});


  function filter(node: VrxTreeNode<T>, search: string) {
    if (node.text.toLowerCase().includes(search)) {
      setFiltered(node, false);
      return;
    }

    let atLeastOneChildContainsSearch = false;
    for (const child of node.children) {
      filter(child, search);
    }

    for (const child of node.children) {
      if (!child.filtered) {
        atLeastOneChildContainsSearch = true;
        break;
      }
    }

    node.filtered = !atLeastOneChildContainsSearch;
  }

  function setFiltered(node: VrxTreeNode<T>, filtered: boolean) {
    node.filtered = filtered;
    node.children.forEach(child => setFiltered(child, filtered));
  }
</script>

<style scoped>

</style>
