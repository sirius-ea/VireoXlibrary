<script setup lang="ts">
import {provide, ref} from "vue";

const menuContainer = ref<HTMLElement>();

provide('menuContainer', menuContainer);
</script>

<template>
  <aside testid="vrx-menu" class="z-40 h-full bg-base-light dark:bg-base-dark w-fit flex flex-col" aria-label="Sidebar">
    <slot name="header"></slot>
    <ul class="flex-1 px-3 py-4 overflow-y-auto space-y-2 font-medium" ref="menuContainer">
      <slot></slot>
    </ul>
    <slot name="footer"></slot>
  </aside>
</template>

<style scoped>

</style>
