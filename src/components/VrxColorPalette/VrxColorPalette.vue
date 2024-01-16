<template>
    <div data-testid="vrx-color-palette" class="flex flex-wrap h-full w-full justify-left items-center gap-2">
      <VrxColorItem v-for="(color,index) in colors" :key="index" :color="color" :name="index"/>
    </div>
</template>

<script setup lang="ts">

import VrxColorItem from "./VrxColorItem.vue";

const {colors} =
    defineProps<{
      colors: { [key: string]: string }
    }>()

</script>

<style scoped>

</style>
