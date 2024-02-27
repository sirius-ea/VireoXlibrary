<script setup lang="ts">
</script>

<template>
  <aside testid="vrx-menu" class="z-40 h-full bg-base-light dark:bg-base-dark w-fit transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
    <ul class="h-full px-3 py-4 overflow-y-auto space-y-2 font-medium">
      <slot></slot>
    </ul>
  </aside>
</template>

<style scoped>

</style>
