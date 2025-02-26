<script lang="ts" setup>
import {computed, Comment, Text, Fragment, onMounted, ref, useSlots, watch, ComputedRef} from "vue";
import {VrxIcon} from "@/components";
import type {Slot, VNode} from "vue";

defineSlots<{
  default?: () => any;  // Default unnamed slot
  children?: () => any;
}>();

const props: any = withDefaults(defineProps<{
  leaf?: boolean
  isOpen?: boolean,
}>(), {
  leaf: false,
});

const isOpen = computed({
  get: () =>  props.isOpen ?? open.value,
  set: (value) => {
    if(props.isOpen !== undefined){
      emit("onOpen", value);
    } else {
      open.value = value;
    }
  },
})

const emit = defineEmits(['onOpen']);


const slots: any = useSlots()

const open = ref(false);

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
    <div class="vrxnode-header" @click.exact="toggle">
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