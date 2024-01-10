<template>
  <component
      v-if="config.component"
      class="child-button flex items-center p-2 rounded-lg text-text-lightMode dark:text-text-darkMode hover:bg-primary-100 dark:hover:bg-primary-700"
      :is="config.component.name"
      v-bind="config.component.props"
  >
    <span class="flex-1 whitespace-nowrap">{{ config.text }}</span>
  </component>

  <div v-else class="child-button flex items-center p-2 text-text-lightMode rounded-lg dark:text-text-text-darkMode hover:bg-primary-100 dark:hover:bg-primary-700">
    <span class="flex-1 whitespace-nowrap">{{ config.text }}</span>
  </div>
</template>

<script setup lang="ts">

  import VrxIcon from "@/components/VrxIcon/VrxIcon.vue";
  import {NavbarSecondLayerButton} from "@/components/VrxNavbar/NavbarButton.ts";

  const props = defineProps<{
    config: NavbarSecondLayerButton;
  }>()

</script>

<style scoped>

</style>