<template>
  <label data-testid="vrx-toggle" class="relative inline-flex items-center cursor-pointer">
    <input type="checkbox" :checked="toggle" class="sr-only peer" @change="toggleClick" :disabled="disabled">
    <span data-testid="vrx-toggle-content" :class="style.toggle"></span>
    <span data-testid="vrx-toggle-label" class="ml-3 text-sm font-medium" :class="style.label">{{ label }}</span>
  </label>
</template>

<script setup lang="ts">
import {ComponentVariant, toggleStyle} from "@/components/styles.ts";
import {computed, ref} from "vue";
  const props = withDefaults(defineProps<{
    size?: 'sm' | 'md' | 'lg',
    variant?: ComponentVariant,
    label?: string,
    disabled?: boolean,
    modelValue?: boolean,
  }>(),{
    size: 'md',
    variant: 'default',
    label: '',
    modelValue: false,
    disabled: false,
  })

  const emit = defineEmits(['update:modelValue'])
  const toggle = ref(props.modelValue as boolean);
  const toggleClick = () => {
    toggle.value = !toggle.value;
    emit('update:modelValue', toggle.value);
  }

const style = computed(() => {
  return toggleStyle(props.variant, props.size, props.disabled);
})
</script>

<style scoped>

</style>