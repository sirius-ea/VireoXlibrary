<script setup lang="ts">
import {IVrxTreeItem, IVrxTreeSelectedItem} from "@/components/VrxTree/VrxTree.type.ts";
import VrxTreeItem from "@/components/VrxTree/VrxTreeItem.vue";
import {onBeforeMount, provide} from "vue";

const props = defineProps<{
  tree: IVrxTreeItem[],
  ref: unknown
}>()

const selectedItems : IVrxTreeSelectedItem[] = []
provide('selectedItems', selectedItems)


console.log(props.tree)
function getCheckedItems() {
  return selectedItems
}

defineExpose({
  getCheckedItems
})

</script>

<template>
    <VrxTreeItem v-for="item in props.tree" v-bind="item" :key="item.id" data-testid="vrx-tree" />
</template>

<style scoped>

</style>
