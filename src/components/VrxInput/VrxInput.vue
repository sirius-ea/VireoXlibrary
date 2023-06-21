<template>
  <div data-testid="vrx-input">
    <label data-testid="vrx-input-label" v-if="label" class="block mb-2 text-sm font-medium" :class="style.label">
      {{ label }}
    </label>
    <div class="relative mb-2">
      <div v-if="icon" class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <VrxIcon :icon="icon" :color="style.icon" size="5"/>
      </div>
      <input
          data-testid="vrx-input-field"
          :type="type"
          :placeholder="placeholder"
          :disabled="disabled"
          :value="modelValue"
          @input="updateValue"
          class="text-sm rounded-lg p-2.5 block w-full"
          :class="style.input"
          :style="'height: ' + height + 'px'"
      />
    </div>
    <p data-testid="vrx-input-helper" v-if="helperText" class="mt-2 text-sm" :class="style.helperText">
      {{ helperText }}
    </p>
  </div>
</template>

<script setup lang="ts">

import {computed} from "vue";
import VrxIcon from "@/components/VrxIcon/VrxIcon.vue";
import { inputStyles } from "@/components/styles.ts";
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
}>(),{
  type: 'text',
  placeholder: 'Insert Text'
})

const emit = defineEmits(['update:modelValue'])
const updateValue = (event : any) => emit('update:modelValue', event.target.value)

const style = computed(() => {
  return inputStyles(props.invalid || false, props.disabled || false, props.icon)
})

</script>

<style scoped>

</style>
