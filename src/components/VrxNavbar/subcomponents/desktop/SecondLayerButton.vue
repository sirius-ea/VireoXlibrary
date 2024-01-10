<template>
  <component
      v-if="config.component"
      class="children text-text-lightMode dark:text-text-darkMode hover:dark:text-text-darkMode/70 hover:text-text-lightMode/70"
      :is="config.component.name"
      v-bind="config.component.props"
  >
    {{ config.text }}
  </component>
  <div v-else class="children text-text-lightMode dark:text-text-darkMode hover:dark:text-text-darkMode/70 hover:text-text-lightMode/70">
    {{ config.text }}
  </div>

</template>

<script setup lang="ts">
  import {NavbarSecondLayerButton} from "@/components/VrxNavbar/NavbarButton.ts";

  const props = defineProps<{
    config: NavbarSecondLayerButton;
  }
  >();
</script>

<style scoped>

</style>