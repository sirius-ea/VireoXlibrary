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
        :node="child" :key="child.text"
        :selectable="selectable"
        :selected="checkValue || selectedChildren.includes(child)"
        @check-clicked="childSelected"
    />

  </div>
</template>

<script setup lang="ts">
  import VrxIcon from "@/components/VrxIcon/VrxIcon.vue";
  import {VrxTreeNode} from "@/components/VrxTree/VrxTree.types.ts";
  import {nextTick, Ref, ref} from "vue";

  const childrenRef = ref();
  const selectedChildren: Ref<any[]> = ref([]);

  const props = defineProps<{
    node: VrxTreeNode,
    selectable: boolean,
    isParent?: boolean,
    selected?: boolean
  }>();

  const open = ref(props.node.open);
  const checkValue : Ref<boolean>= ref(props.selected);
  const emit = defineEmits(['checkClicked']);

  const clickHandle = (event: MouseEvent) => {
    // @ts-ignore
    if(event.target.nodeName !== "INPUT"){
      open.value = !open.value;
    }
  }

  const selectHandle = () => {
    // SELECT THE CHECKBOX
    checkValue.value = !checkValue.value;

    // SELECT THE CHILDREN
    if(props.node.children.length > 0 && childrenRef.value){
      if(!checkValue.value)
        selectedChildren.value = [];
      else{
        props.node.children.forEach((child: VrxTreeNode) => {
          selectedChildren.value.push(child);
        });
      }

      changeChildrenValues();
    }

    // EMIT FOR PARENT
    emit('checkClicked', props.node);
  }

  const childSelected = (child: VrxTreeNode) => {
    const foundRef = childrenRef.value.find((item: any) => item.getId() === child.id);
    const foundList = selectedChildren.value.find((item: any) => item.id === child.id);

    if(foundList){
      selectedChildren.value.slice(selectedChildren.value.indexOf(foundList), 1);
    } else {
      if(foundRef && foundRef.allChildrenSelected()){
        selectedChildren.value.push(child);
      }
    }

    selectedChildren.value.length === props.node.children.length ? checkValue.value = true : checkValue.value = false;
    emit('checkClicked', props.node)
  }

  const setSelected = (value: boolean) => {
    checkValue.value = value;
  }

  const changeChildrenValues = () => {
    nextTick(() => {
      if(!childrenRef.value) return;
      childrenRef.value.forEach((child: any) => {
        child.setSelected(checkValue.value);
        child.changeChildrenValues();
      });
    })
  }

  const getId = () => {
    return props.node.id;
  }

  const allChildrenSelected = () => {
    if(props.node.children.length === 0) return true;
    return selectedChildren.value.length === props.node.children.length;
  }

  defineExpose({
    setSelected,
    childSelected,
    changeChildrenValues,
    getId,
    allChildrenSelected,
  })

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
