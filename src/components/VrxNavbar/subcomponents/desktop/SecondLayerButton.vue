<template>
  <component
      v-if="config.component"
      class="children dark:text-white hover:dark:text-blue-700 hover:text-blue-700"
      :is="config.component.name"
      v-bind="config.component.props"
  >
    {{ config.text }}
  </component>
  <div v-else class="children dark:text-white hover:dark:text-blue-700 hover:text-blue-700">
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