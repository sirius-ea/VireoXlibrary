<script setup>
import {onMounted, ref} from "vue";
import {VrxIcon} from "@/components";

defineProps({
  label: String,
  required: false,
});

const isOpen = ref(false);

const toggle = () => {
  isOpen.value = !isOpen.value
}
</script>

<template>
  <div class="w-full node cursor-pointer ">
    <div class="node-header" @click="toggle">
      <div class="flex flex-row w-full">
        <VrxIcon :icon="$slots.default ? (isOpen ? 'chevron-down' : 'chevron-right') : 'empty'" class="vrxnode-chevron-color"/>
        <slot name="content">
        </slot>
      </div>
    </div>
    <div v-if="isOpen" class="node-children">
      <slot></slot>
    </div>
  </div>
</template>
<style scoped>
.node {
  margin-left: 10px;
}
.node-header {
  display: flex;
  align-items: center;
  gap: 5px;
}
.node-children {
  margin-left: 20px;
}

</style>