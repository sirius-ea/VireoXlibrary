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
  import SecondLayerButton from "@/components/VrxNavbar/subcomponents/desktop/SecondLayerButton.vue";

  const props = defineProps<{
    config: SecondLayerButton;
  }
  >();
</script>

<style scoped>

</style>