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
        ref="childrenRef"
        v-if="node.children.length > 0 && open"
        v-for="child in node.children"
        :node="child"
        :key="child.id"
        :selectable="selectable"
        :selected="checkValue || selectedChildren.includes(child)"
        :selected-nodes="selectedNodes"
        :manage-selected-nodes="manageSelectedNodes"
        :add-node="addNode"
        :remove-node="removeNode"
        @check-clicked="handleChildClick"
    />

  </div>
</template>

<script setup lang="ts">
  import VrxIcon from "@/components/VrxIcon/VrxIcon.vue";
  import {VrxTreeNode} from "@/components/VrxTree/VrxTree.types.ts";
  import {nextTick, Ref, ref, watch} from "vue";

  const childrenRef = ref();
  const selectedChildren: Ref<any[]> = ref([]);

  const props = defineProps<{
    node: VrxTreeNode,
    selectable: boolean,
    isParent?: boolean,
    selected?: boolean,
    selectedNodes: string[],
    manageSelectedNodes: (data: string[]) => void
    addNode: (nodeId: string) => void
    removeNode: (nodeId: string) => void
  }>();

  const open = ref(props.node.open);
  const checkValue : Ref<boolean>= ref(props.selectedNodes.includes(props.node.id));

  const emit = defineEmits(['checkClicked']);

  watch(() => props.selectedNodes,(newValue) => {
    checkValue.value = newValue.includes(props.node.id) || allChildrenSelected();
  },{deep: true});

  const clickHandle = (event: MouseEvent) => {
    // @ts-ignore
    if(event.target.nodeName !== "INPUT"){
      open.value = !open.value;
    }
  }

  const selectHandle = () => {
    // SELECT THE CHECKBOX
    checkValue.value = !checkValue.value;

    const worker = new Worker(new URL('./TreeWorker.ts', import.meta.url));
    worker.postMessage(JSON.stringify({node: props.node, value: checkValue.value, selectedNodes: props.selectedNodes}));
    worker.onmessage = (e) => {
      props.manageSelectedNodes(e.data);
    }
    emit('checkClicked', props.node);

    // EMIT FOR PARENT
    //emit('checkClicked', props.node);
  }

  const allChildrenSelected = () => {
    if(props.node.children.length === 0){
      return false;
    }
    let result = true;
    props.node.children.forEach((child) => {
      console.log(child.id);
      console.log(props.selectedNodes);
    });
    return result;
  }

  const handleChildClick = () => {
    console.log(allChildrenSelected())
    if(allChildrenSelected()){
      props.addNode(props.node.id);
    } else {
      props.removeNode(props.node.id);
    }
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
