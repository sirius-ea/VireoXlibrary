<template>
  <component
      v-if="config.component"
      class="children vrxnavbar-navbutton-text-style"
      :is="config.component.name"
      v-bind="config.component.props"
  >
    {{ config.text }}
  </component>
  <div v-else class="children vrxnavbar-navbutton-text-style">
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