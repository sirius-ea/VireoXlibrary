<script lang="ts" setup>
import {computed, Comment, Text ,Fragment, onMounted, ref, useSlots} from "vue";
import {VrxIcon} from "@/components";
import type {Slot, VNode} from "vue";

defineSlots<{
  default?: () => any;  // Default unnamed slot
  children?: () => any; // Named slot 'leftComponent'
}>();

const props: any = withDefaults(defineProps<{
  leaf: boolean
}>(), {
  leaf: false,
});


const slots: any = useSlots()

const isOpen = ref(false);

const toggle = () => {
  isOpen.value = !isOpen.value
}

const hasChildren: any = computed(() => {
  if (!slots.children) return false; // No slot provided at all

  const vnodes: any = slots.children(); // Get the VNodes from the slot

  return vnodes.some((vnode: any) => {

    if (vnode.type === Comment || vnode.type === Fragment) return false; // Ignore comments & empty fragments
    if (typeof vnode.children === 'string' && vnode.children.trim() === '') return false; // Ignore empty text nodes
    return true; // Consider as valid content
  });
});

</script>

<template>
  <div class="w-full cursor-pointer vrxnode-main">
    <div class="vrxnode-header" @click="toggle">
      <div class="flex flex-row w-full">
        <VrxIcon :icon="!leaf ? (isOpen ? 'chevron-down' : 'chevron-right') : 'empty'" class="vrxnode-chevron-color"/>
        <slot>
        </slot>
      </div>
    </div>
    <div v-if="!leaf && isOpen" class="vrxnode-children">
      <slot name="children"></slot>
    </div>
  </div>
</template>

<style scoped></style>