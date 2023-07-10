
<template>
  <svg
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      :data-testid="'vrx-icon-' + icon"
      :class="props.size ? size : 'size-5'"
      :stroke="iconColor"
  >
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="iconLibrary[icon] ?? icon"></path>
    <path v-if="icon === 'cog'" stroke-linecap="round" stroke-width="2" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
    <path v-if="icon === 'chart-pie'" stroke-linecap="round" stroke-width="2" stroke-linejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z"></path>
    <path v-if="icon === 'qr-code'" stroke-linecap="round" stroke-width="2" stroke-linejoin="round" d="M6.75 6.75h.75v.75h-.75v-.75zM6.75 16.5h.75v.75h-.75v-.75zM16.5 6.75h.75v.75h-.75v-.75zM13.5 13.5h.75v.75h-.75v-.75zM13.5 19.5h.75v.75h-.75v-.75zM19.5 13.5h.75v.75h-.75v-.75zM19.5 19.5h.75v.75h-.75v-.75zM16.5 16.5h.75v.75h-.75v-.75z"></path>
    <path v-if="icon === 'eye'" stroke-linecap="round" stroke-width="2" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
    <path v-if="icon === 'map-pin'" stroke-linecap="round" stroke-width="2" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"></path>
  </svg>

</template>

<script setup lang="ts">
  // ICON LIBRARY - https://heroicons.dev/

  import {computed, onMounted} from "vue";
  import {iconLibrary, IconLibraryType} from "@/components/VrxIcon/IconLibrary.ts";

  const props = defineProps<{
    icon: IconLibraryType | string,
    color?: string,
    size?: string,
  }>();

  const iconColor = computed(() => {
    return props.color ?? 'currentColor'
  })

  const size = computed(() => {
    return 'size-' + props.size
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