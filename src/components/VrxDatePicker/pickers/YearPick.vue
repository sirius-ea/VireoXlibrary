<template>
  <div class="flex flex-row justify-between items-center">
    <VrxIcon icon="chevron-left" class="rounded-lg hover:bg-gray-200 dark:hover:bg-gray-500 cursor-pointer" @click="emit('changeYearRange',-10)"/>
    <span
        class="rounded-lg font-bold pt-1 pb-1 pr-2 pl-2 select-none"
    >{{ yearRange.join(" - ") }}</span>
    <VrxIcon icon="chevron-right" class="rounded-lg hover:bg-gray-200 dark:hover:bg-gray-500 cursor-pointer" @click="emit('changeYearRange',10)"/>
  </div>

  <div class="w-full flex justify-center">
    <div class="flex flex-row flex-wrap">
      <div
          v-for="year in years"
          class="font-bold w-14 p-1 rounded-md text-center cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-500 hover:text-blue-700 dark:hover:text-white"
          @click="emit('changeYear', year)"
      >{{ year }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import {computed} from "vue";
  import VrxIcon from "@/components/VrxIcon/VrxIcon.vue";

  const props = defineProps<{
    yearRange: number[],
  }>();


  const years = computed(() => {
    let years = [];
    for(let i = props.yearRange[0]; i <= props.yearRange[1]; i++){
      years.push(i);
    }
    return years;
  })

  const emit = defineEmits(['changeYearRange','changeYear']);

</script>

<style scoped>

</style>