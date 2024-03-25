<template>
   <div class="tabs tabs-lifted">
     <slot></slot>
   </div>
</template>

<script setup lang="ts">
import {provide, reactive, ref, watch} from "vue";

const {defaultValue} = defineProps< {
  defaultValue: string
}>();
const value = ref(defaultValue)
const controlObject = reactive<{tabs:string[], content:string[]}>({
  tabs: [
      value.value
  ],
  content: [
  ]
})
const emit = defineEmits(["tabSelected"])

provide("selectedValue", value)
provide("controlObject", controlObject)

watch(value, (newValue) => {
  emit("tabSelected", newValue)
})

</script>

<style scoped>

</style>
