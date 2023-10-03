<template>
  <div class="flex flex-col gap-2.5 text-gray-900 dark:text-white">
    <VrxInput v-if="searchable" model-value="test" icon="search"/>
    <TreeItem v-for="node in data" :node="node" :selectable="selectable ?? false" :is-parent="true"/>
  </div>
</template>

<script setup lang="ts">
  import TreeItem from "@/components/VrxTree/TreeItem.vue";
  import {VrxTreeNode} from "@/components/VrxTree/VrxTree.types.ts";
  import VrxInput from "@/components/VrxInput/VrxInput.vue";

  const props = defineProps<{
    data: VrxTreeNode[],
    selectable: boolean,
    searchable?: boolean
  }>();

</script>

<style scoped>

</style>