
<template>
  <svg class="dark:text-white" :class="size" fill="none" :stroke="iconColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="iconLibrary[icon]"></path>
  </svg>

</template>

<script setup lang="ts">
  // ICON LIBRARY - https://heroicons.dev/

  import {computed} from "vue";
  import {iconLibrary, IconLibraryType} from "@/components/VrxIcon/IconLibrary.ts";

  const props = withDefaults(defineProps<{
    icon: IconLibraryType,
    color: string,
    size: string,
  }>(), {
    color: 'currentColor',
    size: '6',
  })

  const iconColor = computed(() => {
    return props.color ?? 'currentColor'
  })

  const size = computed(() => {
    return 'w-' + props.size + ' h-' + props.size
  })

</script>

<style scoped>
.h-5 {
  height: 1.25rem;
}
</style>