<template>
  <div class="w-auto h-full pl-5">

    <div class="tree-element hover:bg-gray-100 rounded p-1" @click="open = !open">
      <VrxIcon :icon="node.children.length > 0 ? 'chevron-right': 'empty'" :class="open ? 'icon-rotate' : 'icon-off'" size="5"/>
      <VrxIcon v-if="node.icon" :icon="node.icon" size="4"/>
      <span>{{ props.node.text }}</span>
    </div>

    <!-- CHILDREN RECURSIVE -->
    <TreeItem v-if="node.children.length > 0 && open" v-for="child in node.children" :node="child" :key="child.text"/>

  </div>
</template>

<script setup lang="ts">
import VrxIcon from "@/components/VrxIcon/VrxIcon.vue";
import { ref } from "vue";

const props = defineProps<{
  node: any
}>();

const open = ref(false);
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