<script setup>
import {onMounted, ref, useSlots} from "vue";
import {VrxIcon} from "@/components";

const slots = useSlots()

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
  <div class="w-full cursor-pointer vrxnode-main">
    <div class="vrxnode-header" @click="toggle">
      <div class="flex flex-row w-full">
        <VrxIcon :icon="$slots.default ? (isOpen ? 'chevron-down' : 'chevron-right') : 'empty'" class="vrxnode-chevron-color"/>
        <slot name="content">
        </slot>
      </div>
    </div>
    <div v-if="isOpen" class="vrxnode-children">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped></style>