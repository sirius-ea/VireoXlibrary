<script setup lang="ts" generic="T">
import {VrxTreeItemInterface} from "@/components/VrxTree/VrxTree.type.ts";
import VrxTreeItem from "@/components/VrxTree/VrxTreeItem.vue";
import {onMounted, provide, watch} from "vue";

const props = defineProps<{
  tree: VrxTreeItemInterface<T>[],
  ref: unknown
}>()

const selectedItems = []
provide('selectedItems', selectedItems)


function getCheckedItems() {
  return selectedItems
}

defineExpose({
  getCheckedItems
})

</script>

<template>
    <VrxTreeItem v-for="item in props.tree" :item="item" :key="item.id" data-testid="vrx-tree" />
</template>

<style scoped>

</style>
