<script setup>
import {onMounted, ref, useSlots} from "vue";
import {VrxIcon} from "@/components";
import {VNode} from "vue";

const slots = useSlots()

defineProps({
  label: String,
  required: false,
});

const isOpen = ref(false);

const toggle = () => {
  isOpen.value = !isOpen.value
}

const isVnodeEmpty = (vnodes: Array<VNode>) => {
  return vnodes.every((node: VNode) => {
    if (node.type === Comment) {
      return true;
    }

    if (
        node.type === Text &&
        typeof node.children === 'string' &&
        !node.children.trim()
    ) {
      return true;
    }

    if (node.type === Fragment && isVnodeEmpty(node.children as Array<VNode>)) {
      return true;
    }

    return false;
  });
};

const hasSlotContent = (slot: Slot<any> | undefined) => {
  if (!slot) {
    return false;
  }
  return !isVnodeEmpty(slot());
};

</script>

<template>
  <div class="w-full cursor-pointer vrxnode-main">
    <div class="vrxnode-header" @click="toggle">
      <div class="flex flex-row w-full">
        <VrxIcon :icon="$slots.children ? (isOpen ? 'chevron-down' : 'chevron-right') : 'empty'" class="vrxnode-chevron-color"/>
        <slot>
        </slot>
      </div>
    </div>
    <div v-if="isOpen" class="vrxnode-children">
      <slot name="children"></slot>
    </div>
  </div>
</template>

<style scoped></style>