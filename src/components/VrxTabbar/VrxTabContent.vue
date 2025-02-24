<script setup lang="ts">
import {inject, onMounted, Ref} from "vue";

defineSlots<{
  default?: () => any;  // Default unnamed slot
}>();

const value = inject<Ref<string> | null>('selectedValue')
const controlObject = inject<{tabs:string[], content:string[]}>('controlObject')
if(!value || !controlObject) throw new Error('VrxTabContent must be used inside VrxTabbar element')

const {tab_name} = defineProps<{
  tab_name: string
}>();

controlObject.content.push(tab_name)

onMounted(() => {
  if(!controlObject.tabs.find(tab => tab === tab_name))
    console.warn(`TabContent ${tab_name} has no corresponding tab link`)
})


</script>

<template>
  <section v-if="value === tab_name" class="z-0 mt-2">
    <slot></slot>
  </section>
</template>

<style scoped>

</style>
