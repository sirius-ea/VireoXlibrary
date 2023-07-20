<template>
  <div class="flex flex-row justify-between items-center">
    <VrxIcon icon="chevron-left" class="rounded-lg hover:bg-gray-200 dark:hover:bg-gray-500 cursor-pointer" @click="emit('changeMonth', -1)"/>
    <span
        class="rounded-lg font-bold hover:bg-gray-200 dark:hover:bg-gray-500 pt-1 pb-1 pr-2 pl-2 cursor-pointer select-none hover:text-blue-700 dark:hover:text-white"
        @click="() => emit('changeStage', 'm')"
    >{{ monthsLib[month] + ' ' + year}}</span>
    <VrxIcon icon="chevron-right" class="rounded-lg hover:bg-gray-200 dark:hover:bg-gray-500 cursor-pointer" @click="emit('changeMonth',1)"/>
  </div>
  <table>
    <thead>
      <tr class="text-gray-400">
        <th class="font-normal select-none" v-for="day in shortDaysLib">{{ day }}</th>
      </tr>
    </thead>
    <tbody>
    <tr v-for="week in matrix">
      <td
          v-for="day in week"
          class='hover:bg-gray-200 dark:hover:bg-gray-500 rounded-lg hover:text-blue-700 dark:hover:text-white'
          @click="dayClicked(day)"
      >{{day}}</td>
    </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
import {computed, onMounted, ref} from "vue";
import {monthsLib, shortDaysLib} from "@/components/VrxInput/DatePickerLibrary.ts";
import VrxIcon from "@/components/VrxIcon/VrxIcon.vue";

  const props = defineProps<{
    month: number,
    year: number,
  }>();

  const emit = defineEmits(['changeMonth', 'changeStage']);

  const matrix = computed(() => {
    let date = new Date(props.year,  props.month, 1);
    let days = [];

    while (date.getMonth() === props.month) {
      days.push({
        day: new Date(date).getDay(),
        number: new Date(date).getDate(),
        month: new Date(date).getMonth(),
      });
      date.setDate(date.getDate() + 1);
    }

    days.sort((a, b) => a.number - b.number);
    const firstDay = days[0].day;

    //const rows = firstDay >= 6 ? 6: 5;
    let matrix: number[][] = new Array(6).fill(null).map(() => new Array(7).fill(0));

    days.forEach((day, index) => {
      const row = Math.floor((index + firstDay) / 7);
      const col = (index + firstDay) % 7;
      matrix[row][col] = day.number;
    });
    return matrix;
  });

  const dayClicked = (day: number) => {
    console.log(new Date(props.year, props.month, day));
  }

</script>

<style scoped>
  td{
    text-align: center;
    font-weight: bold;
    width: 14.28%;
    height: 30px;
    cursor: pointer;
    user-select: none;
  }
</style>