<template>
  <a :href="props.href" data-testid="link-template">
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