<template>
  <label id="vrx-input-label" v-if="label" class="block mb-2 text-sm font-medium" :class="style.label">
    {{ label }}
  </label>
  <div class="relative mb-2">
    <div v-if="icon" class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
      <VrxIcon :icon="icon" :color="style.icon" :size="5"/>
    </div>
    <input
        :type="type"
        :placeholder="placeholder"
        :disabled="disabled"
        :value="modelValue"
        @input="updateValue"
        class="text-sm rounded-lg p-2.5 block w-full"
        :class="style.input"
    />
  </div>
  <p id="vrx-input-helper" v-if="helperText" class="mt-2 text-sm" :class="style.helperText">
    {{ helperText }}
  </p>
</template>

<script setup lang="ts">

import {computed} from "vue";
import VrxIcon from "@/components/VrxIcon/VrxIcon.vue";
import { inputStyles } from "@/components/styles.ts";

const props = defineProps({
        label: {
            type: String,
            default: null,
        },
        placeholder: {
            type: String,
            default: 'Insert text',
        },
        type: {
            type: String,
            default: 'text',
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        size: {
            type: String,
            default: 'base',
        },
        modelValue: {
            type: String,
            default: '',
        },
        helperText: {
            type: String,
            default: '',
        },
        invalid: {
            type: Boolean,
            default: false,
        },
        icon:{
            type: String,
            default: null,
        },
    })

const emit = defineEmits(['update:modelValue'])
const updateValue = (event) => emit('update:modelValue', event.target.value)

const style = computed(() => {
  return inputStyles(props.invalid as boolean, props.disabled as boolean, props.icon as String)
})

</script>

<style scoped>

</style>