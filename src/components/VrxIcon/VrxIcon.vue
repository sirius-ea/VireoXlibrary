
<template>
  <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      :data-testid="'vrx-icon-' + icon"
      :class="props.size ? size : 'size-5'"
      :fill="iconColor"
  >
    <title>{{props.tooltip}}</title>
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :d="iconLibrary[props.icon as keyof typeof iconLibrary] ?? props.icon"></path>
  </svg>

</template>

<script setup lang="ts">
  // ICON LIBRARY - https://pictogrammers.com/library/mdi/

  import {computed} from "vue";
  import {iconLibrary, IconLibraryType} from "@/components/VrxIcon/IconLibrary.ts";

  const props = defineProps<{
    icon: IconLibraryType | string,
    color?: string,
    size?: string,
    tooltip?: string,
  }>();

  const iconColor = computed(() => {
    return props.color ?? 'currentColor'
  })

  const size = computed(() => {
    return 'size-' + props.size
  })

  const iconPath = computed(() => {
    return iconLibrary[props.icon as keyof typeof iconLibrary]
  })


</script>

<style scoped>

.size-10 {
  height: 5rem;
  width: 5rem;
}

.size-9 {
  height: 4rem;
  width: 4rem;
}

.size-8 {
  height: 3rem;
  width: 3rem;
}

.size-7 {
  height: 2rem;
  width: 2rem;
}

.size-6 {
  height: 1.5rem;
  width: 1.5rem;
}

.size-5 {
  height: 1.25rem;
  width: 1.25rem;
}

.size-4 {
  height: 1rem;
  width: 1rem;
}

.size-3 {
  height: 0.75rem;
  width: 0.75rem;
}

.size-2 {
  height: 0.5rem;
  width: 0.5rem;
}

.size-1 {
  height: 0.25rem;
  width: 0.25rem;
}

</style>