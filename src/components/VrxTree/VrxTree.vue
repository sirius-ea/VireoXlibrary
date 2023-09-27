<template>
  <div>
    <TreeItem v-for="node in data" :node="node" :selectable="selectable" :is-parent="true"/>
  </div>
</template>

<script setup lang="ts">
  import TreeItem from "@/components/VrxTree/TreeItem.vue";
  import {VrxTreeNode} from "@/components/VrxTree/VrxTree.types.ts";

  const props = defineProps<{
    data: VrxTreeNode[],
    selectable: boolean
  }>();

</script>

<style scoped>

</style>