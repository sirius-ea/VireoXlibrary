<template>
  <div data-testid="vrx-input" class="vrxinput-style">
    <label data-testid="vrx-input-label" v-if="label" class="block mb-2 text-sm font-medium" :class="style.label">
      {{ label }}
    </label>
    <div class="relative">
      <div v-if="icon" class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <VrxIcon :icon="icon" :color="style.icon" size="5"/>
      </div>
      <input
          data-testid="vrx-input-field"
          :type="showPassword ? 'text' : type"
          :placeholder="placeholder"
          :disabled="disabled"
          :value="modelValue"
          :readonly="readonly"
          @input="updateValue"
          class="vrx-input vrxinput-input-style"
          :class="style.input"
      />

      <div v-if="$slots.right" class="absolute inset-y-0 right-0 flex items-center pr-3">
        <slot name="right"></slot>
      </div>

      <div
          v-if="type === 'password' && modelValue && modelValue.length > 0"
          class="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
          @click="() => showPassword = !showPassword"
      >
        <VrxIcon :icon="showPassword ? 'eye-hide' : 'eye'" :color="style.icon" size="5" />
      </div>
    </div>
    <p data-testid="vrx-input-helper" v-if="helperText" class="mt-2 text-sm" :class="style.helperText">
      {{ helperText }}
    </p>
  </div>
</template>

<script setup lang="ts">

import {computed, ref} from "vue";
import VrxIcon from "@/components/VrxIcon/VrxIcon.vue";
import { inputStyles} from "@/components/styles.ts";
import {IconLibraryType} from "@/components/VrxIcon/IconLibrary.ts";

const props = withDefaults(defineProps<{
  label?: string,
  placeholder?: string,
  type: string,
  disabled?: boolean,
  modelValue: string,
  helperText?: string,
  invalid?: boolean,
  icon?: IconLibraryType,
  height?: number,
  readonly?: boolean,
}>(),{
  type: 'text',
  placeholder: 'Insert Text'
})


const showPassword = ref(false);

defineSlots<{
  default?: () => any;  // Default unnamed slot
  right?: () => any;
}>();

const emit = defineEmits(['update:modelValue'])
const updateValue = (event : any) => emit('update:modelValue', event.target.value)

const style = computed(() => {
  return inputStyles(props.invalid || false, props.disabled || false, props.icon)
})

</script>

<style>
.vrxinput-input-style {
  outline: none;
  border-width: 1px;
  border-radius: 0.5rem; /* rounded-lg */
  padding: 0.625rem; /* p-2.5 */
  display: block;
  width: 100%;
  font-size: 0.875rem; /* text-sm */
  border-color: var(--color-primary-300);
  color: var(--color-content-light);
}
.vrxinput-input-style:focus {
  ring-color: var(--color-secondary-500);
  border-color: var(--color-secondary-500);
}
[data-mode="dark"] .vrxinput-input-style {
  color: var(--color-content-dark);
  background-color: var(--color-base-dark);
  border-color: var(--color-primary-600);
}
[data-mode="dark"] .vrxinput-input-style::placeholder {
  color: var(--color-content-dark);
}

.vrxinput-input-disabled-style {
  outline: none;
  border-width: 1px;
  border-radius: 0.5rem;
  padding: 0.625rem;
  display: block;
  width: 100%;
  font-size: 0.875rem;
  border-color: var(--color-primary-50);
  background-color: var(--color-base-light);
  color: var(--color-content-light);
  cursor: not-allowed;
  opacity: 0.5;
}
[data-mode="dark"] .vrxinput-input-disabled-style {
  background-color: var(--color-base-dark);
  color: var(--color-content-dark);
}

.vrxinput-input-invalid-style {
  outline: none;
  border-width: 1px;
  border-radius: 0.5rem;
  padding: 0.625rem;
  display: block;
  width: 100%;
  font-size: 0.875rem;
  border-color: var(--color-error-500);
  background-color: var(--color-error-50);
  color: var(--color-error-900);
}
.vrxinput-input-invalid-style::placeholder {
  color: var(--color-error-700);
}
.vrxinput-input-invalid-style:focus {
  border-color: var(--color-error-500);
  ring-color: var(--color-error-500);
}
[data-mode="dark"] .vrxinput-input-invalid-style {
  border-color: var(--color-error-500);
  background-color: var(--color-error-950);
  color: var(--color-error-400);
}
[data-mode="dark"] .vrxinput-input-invalid-style::placeholder {
  color: var(--color-error-500);
}
[data-mode="dark"] .vrxinput-input-invalid-style:focus {
  border-color: var(--color-error-600);
}

.vrxinput-label-style,
.vrxinput-label-disabled-style,
.vrxinput-helperText-style,
.vrxinput-helperText-disabled-style {
  color: var(--color-content-light);
}
[data-mode="dark"] .vrxinput-label-style,
[data-mode="dark"] .vrxinput-label-disabled-style,
[data-mode="dark"] .vrxinput-helperText-style,
[data-mode="dark"] .vrxinput-helperText-disabled-style {
  color: var(--color-content-dark);
}

.vrxinput-label-invalid-style,
.vrxinput-helperText-invalid-style {
  color: var(--color-error-700);
}
[data-mode="dark"] .vrxinput-label-invalid-style,
[data-mode="dark"] .vrxinput-helperText-invalid-style {
  color: var(--color-error-500);
}
</style>
