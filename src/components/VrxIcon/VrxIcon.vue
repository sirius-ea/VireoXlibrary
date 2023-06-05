
<template>
  <svg class="dark:text-white" :class="size" fill="none" :stroke="iconColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="iconLibrary[icon]"></path>
  </svg>

</template>

<script setup lang="ts">
  // ICON LIBRARY - https://heroicons.dev/

  import {computed} from "vue";

  const iconLibrary = {
    'mail' : 'M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75',
    'password' : 'M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z',
  }

  const props = defineProps({
    icon: {
      type: String,
      default: 'mail',
    },
    color: {
      type: String,
      default: 'currentColor',
    },
    size: {
      type: Number,
      default: 5,
    },
  })

  const iconColor = computed(() => {
    return props.color ?? 'currentColor'
  })

  const size = computed(() => {
    return 'w-' + props.size + ' h-' + props.size
  })

</script>

<style scoped>

</style>