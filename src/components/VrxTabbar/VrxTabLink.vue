<script setup lang="ts">
import {computed, inject, onMounted, Ref} from "vue";

const value = inject<Ref<string> | null>('selectedValue')
const controlObject = inject<{tabs:string[], content:string[]} | null>('controlObject')
if(!value || !controlObject) throw new Error('VrxTabLink must be used inside VrxTabbar element')

const {tab_name} = defineProps<{
  tab_name: string
}>();

const selected = computed(() => value.value === tab_name)

controlObject.tabs.push(tab_name)

onMounted(() => {
  if(!controlObject.content.find(tab => tab === tab_name))
    console.warn(`Tab ${tab_name} has no corresponding tab content`)
})

function onLinkClick() {
  if(selected.value) return
  value!.value = tab_name
}
</script>

<template>
  <li class="cursor-pointer px-4 py-2 border-b-2 border-b-transparent hover:border-b-primary-100 active:border-b-primary-400" :class="[ selected ? 'active !border-b-primary-500' : '']" @click="onLinkClick" :aria-label="tab_name">
      <slot></slot>
  </li>
</template>

<style scoped>

</style>
