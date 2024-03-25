<template>
  <div data-testid="vrx-tree-node" class="w-auto h-full flex flex-col" :class="[isParent ? null : 'pl-5', props.class, node.disableDrag ? 'disableDrag' : '']" @click.stop="() => onClickNode(node, props.parentId)" ref="elementRef" >
    <div class="tree-element vrxtree-element-style rounded-s" :title="tooltip ?? ''">
      <VrxIcon :icon="node.children.length > 0 ? 'chevron-right': 'empty'" :class="node.open ? 'icon-rotate' : 'icon-off'" size="5" @click="clickHandle" />
      <VrxIcon v-if="node.icon" :icon="node.icon" size="4"/>
      <input
          data-testid="vrx-tree-node-checkbox"
          v-if="selectable"
          type="checkbox"
          class="form-checkbox h-4 w-4"
          v-model="checkValue"
          @click="selectHandle"
          :indeterminate.prop="hasChildrenChecked && !checkValue"
      />
      <div class="w-full flex justify-between items-center flex-row">
        <component v-if="node.asComponent === true && node.componentProps" :is="node.component" v-bind="node.componentProps()">
          {{ node.componentSlots ?? node.text }}
        </component>
        <span v-else  :class="node.class">{{ props.node.text }}</span>
        <component v-if="node.rightComponent && node.rightComponentProps" :is="node.rightComponent" v-bind="node.rightComponentProps()" />
      </div>

    </div>


    <!-- CHILDREN RECURSIVE -->
    <draggable
      v-if="!node.disableDrag"
      v-model="node.children"
      item-key="id"
      :disabled="!isDraggable"
      :group="{name:'tree'}"
      class="flex flex-col ciao"
    >
      <template #item="{element}">
        <TreeItem
            v-if="node.open && !element.filtered"
            :node="element"
            :key="element.id"
            :selectable="selectable"
            :selected="checkValue"
            :parent-id="node.id"
            :tooltip="element.tooltip"
            :siblings="node.children"
            :class="element.class"
            @onCheckNode="(value, isChecked) => onCheckNode(value, isChecked)"
            :isDraggable="isDraggable"
            @onClickNode="(value, parentIdValue, oldElement) => onClickNode(value, parentIdValue, oldElement)"
        />
      </template>
    </draggable>
    <div class="flex flex-col" v-else v-for="(element) in node.children">
      <TreeItem
          
          v-if="node.open && !element.filtered"
            :node="element"
            :key="element.id"
            :selectable="selectable"
            :selected="checkValue"
            :parent-id="node.id"
            :siblings="node.children"
            :class="element.class"
            @onCheckNode="(value, isChecked) => onCheckNode(value, isChecked)"
            :isDraggable="isDraggable"
            @onClickNode="(value, parentIdValue, oldElement) => onClickNode(value, parentIdValue, oldElement)"
        />
    </div>


  </div>
</template>

<script setup lang="ts" generic="T">
  import VrxIcon from "@/components/VrxIcon/VrxIcon.vue";
  import {VrxTreeNode} from "@/components/VrxTree/VrxTree.types.ts";
  import {inject, ref, watch} from "vue";
  import draggable from "vuedraggable";

  const props = defineProps<{
    node: VrxTreeNode<T>,
    selectable: boolean,
    isParent?: boolean,
    selected?: boolean,
    parentId: string,
    tooltip?: string,
    siblings: VrxTreeNode<T>[],
    isDraggable?: boolean,
    class?: string,
  }>();

  console.log(props.node.disableDrag)

  if(props.node.disableDrag && props.node.children.length > 0) {
    console.warn("Disable drag was set on a node with children. The Children will not be rendered")
  }

  const elementRef = ref<Element | null>(null);
  const addNode = inject<(nodeId: string) => void>('addNode', () => console.error("AddNode not provided"));
  const removeNodeById = inject<(nodeId: string, isParent?: boolean) => void>('removeNodeById', () => console.error("RemoveNodeById not provided"));
  const removeNode = inject<(node: VrxTreeNode<T>) => void>('removeNode', () => console.error("RemoveNode not provided"));
  const selectedNodes = inject<string[]>('selectedNodes', []);
  const checkValue = ref<boolean>(props.selected || selectedNodes.includes(props.parentId));
  const hasChildrenChecked = ref(false);

  watch(() => selectedNodes,(newValue) => {
    checkValue.value = newValue.includes(props.node.id) || newValue.includes(props.parentId) || props.selected;
    hasChildrenChecked.value = newValue.filter((node : string) => node.includes(props.node.id)).length > 0;
  },{immediate: true, deep: true});

  watch(() => props.selected,(newValue) => {
    checkValue.value = newValue || selectedNodes.includes(props.node.id);
  },{immediate: true, deep: true});

  /**
   * Handle click for inputs and tree elements
   * @param event
   */
  const clickHandle = (event: MouseEvent) => {
    // @ts-ignore
    if(event.target.nodeName !== "INPUT"){
      props.node.open = !props.node.open;
    }
  }

  const onClickNode = (value : VrxTreeNode<T>, parentId : string, element ?: Element ) => {
      emit('onClickNode', value, parentId, element ? element : elementRef.value);
  }

  /**
   * Handle the click on the checkbox
   */
  const selectHandle = () => {
    checkValue.value = !checkValue.value;
    if(checkValue.value)
      addNode(props.node.id);
    else
      removeNodeById(props.node.id, props.isParent);


    if(props.node.children.length > 0){
      props.node.children.forEach((child : VrxTreeNode<T>) => {
        removeNode(child);
      })
    }

    emit('onCheckNode', props.node, checkValue.value);
    if(!props.isParent){
      checkParent();
      checkSiblingsAndParent();
    }
  }


  /**
   * Check if all siblings are selected and if so, add the parent
   */
  const checkSiblingsAndParent = () => {
    let all = true;
    props.siblings.forEach((node : VrxTreeNode<T>) => {
      if(!selectedNodes.includes(node.id)){
        all = false;
      }
    });

    if(all){
      props.siblings.forEach((node : VrxTreeNode<T>) => {
        removeNodeById(node.id);
      })
      addNode(props.parentId);
    }
  }

  /**
   * Check if parent is selected and if so, remove it and add all siblings
   */
  const checkParent = () => {
    // If parent is actually selected, remove it from selected nodes and add all siblings
    if(selectedNodes.includes(props.parentId) || props.selected){
      removeNodeById(props.parentId, props.isParent);
      props.siblings.forEach((sibling : VrxTreeNode<T>) => {
        if(sibling.id !== props.node.id)
          addNode(sibling.id);
      })
    }
  }

  /**
   * Emitted when a children checkbox is clicked
   */
  const onCheckNode = (node : VrxTreeNode<T>, isChecked: boolean) => {
    emit('onCheckNode', node ?? props.node, isChecked);
    if(props.isParent) return;
    checkParent();
    checkSiblingsAndParent();
  }

  const emit = defineEmits(['onCheckNode', 'onClickNode']);

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
