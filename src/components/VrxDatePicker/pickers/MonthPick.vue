<template>
  <div class="flex flex-row justify-between items-center">
    <VrxIcon icon="chevron-left" class="rounded-lg hover:bg-gray-200 dark:hover:bg-gray-500 cursor-pointer" @click="() => emit('changeYear', -1)"/>
    <span
        class="rounded-lg font-bold hover:bg-gray-200 dark:hover:bg-gray-500 pt-1 pb-1 pr-2 pl-2 cursor-pointer select-none hover:text-blue-700 dark:hover:text-white"
        @click="() => emit('changeStage', 'y')"
    >{{ props.year }}</span>
    <VrxIcon icon="chevron-right" class="rounded-lg hover:bg-gray-200 dark:hover:bg-gray-500 cursor-pointer" @click="() => emit('changeYear', 1)"/>
  </div>
  <div class="flex flex-row flex-wrap justify-between gap-1 p-2">
    <div
        v-for="month in monthsShortLib"
        class="font-bold w-16 p-1 rounded-md text-center cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-500 hover:text-blue-700 dark:hover:text-white"
        @click="() => changeMonth(monthsShortLib.indexOf(month))"
    >
      {{ month }}
    </div>
  </div>
</template>

<script setup lang="ts">

import {monthsLib, monthsShortLib} from "@/components/VrxDatePicker/DatePickerLibrary.ts";
import VrxIcon from "@/components/VrxIcon/VrxIcon.vue";

const emit = defineEmits(['changeYear', 'changeMonth', 'changeStage']);

const props = defineProps<{
  year: number,
}>();

const changeMonth = (month: number) => {
  emit('changeMonth', month);
}
</script>

<style scoped>

</style>