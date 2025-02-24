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

<style scoped>
  .vrx-input {
    height: v-bind(props.height + 'px');
  }

</style>
