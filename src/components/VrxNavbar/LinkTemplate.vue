<template>
  <a :href="props.href">
    <slot/>
  </a>
</template>

<script setup lang="ts">
  const props = defineProps<{
    href: string;
  }>();
</script>



<style scoped>

</style>