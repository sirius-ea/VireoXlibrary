<template>
  <label
      v-if="label"
      class="block mb-2 text-sm font-medium"
      :class="style.label">
    {{ label }}
  </label>
  <div class="relative mb-6">
    <div v-if="icon" class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
      <VrxIcon :icon="icon" :color="style.icon" size="5"/>
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
    <p
      v-if="helperText"
      id="helper-text-explanation"
      class="mt-2 text-sm"
      :class="style.helperText"
    >{{ helperText }}</p>
  </div>
</template>

<script setup lang="ts">

import {computed} from "vue";
import VrxIcon from "@/components/VrxIcon/VrxIcon.vue";
import colors from "tailwindcss/colors";

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
        onInputChange: {
            type: Function,
            default: () => {},
        },
    })

const emit = defineEmits(['update:modelValue'])
const updateValue = (event) => emit('update:modelValue', event.target.value)

const style = computed(() => {
  let input = "bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
  let label = "text-gray-900 dark:text-white"
  let helperText = "text-gray-500 dark:text-gray-300"
  let icon = colors.gray[400]

  if(props.invalid){
    input = "bg-red-50 border border-red-500 text-red-900 placeholder-red-700 focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500"
    label = "text-red-700 dark:text-red-500"
    helperText = "text-red-600 dark:text-red-500"
    icon = colors.red[600]
  }

  if(props.disabled){
    input = "bg-gray-10 border border-gray-00 text-gray-300"
    label = "text-gray-300 dark:text-white"
    helperText = "text-gray-300 dark:text-gray-300"
    icon = colors.gray[300]
  }

  if(props.icon){
    input += " pl-10"
  }

  return { input, label, helperText, icon };
})

</script>

<style scoped>

</style>