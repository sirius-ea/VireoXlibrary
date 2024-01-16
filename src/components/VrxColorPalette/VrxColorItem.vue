<template>
  <div class="flex flex-col justify-left items-left">
    <div class="h-[50px] w-[50px] vrxcolor rounded-[12px]"></div>
    <label class="text-text-light dark:text-text-dark font-thin text-sm">{{name}}</label>
    <label class="text-text-light/60 dark:text-text-dark/60 font-thin text-sm">{{color}}</label>
  </div>

</template>

<script setup lang="ts">

const {color,name} =
    defineProps<{
      color: string;
      name: string | number;
    }>()

</script>

<style scoped>
  .vrxcolor{
    background-color: v-bind(color);
  }
</style>
