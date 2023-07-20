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
          :class="getStyle(day)"
          @click="() => day.disabled ? null : emit('dayClicked', day)"
      >{{day.number}}</td>
    </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
import {computed, onMounted, ref} from "vue";
import {CalendarDay, monthsLib, shortDaysLib} from "@/components/VrxDatePicker/DatePickerLibrary.ts";
import VrxIcon from "@/components/VrxIcon/VrxIcon.vue";

  const props = defineProps<{
    month: number,
    year: number,
    selectedDate?: Date,
    validRange?: [Date | undefined, Date | undefined],
  }>();

  const emit = defineEmits(['changeMonth', 'changeStage','dayClicked']);

  const matrix = computed(() => {
    let date = new Date(props.year,  props.month, 1);
    let days = [];

    while (date.getMonth() === props.month) {
      days.push({
        day: new Date(date).getDay(),
        number: new Date(date).getDate(),
        month: new Date(date).getMonth(),
        year: new Date(date).getFullYear(),
        isToday: new Date(date).toDateString() === new Date().toDateString(),
        isCurrentMonth: new Date(date).getMonth() === props.month,
        disabled: checkDisabled(date)
      });
      date.setDate(date.getDate() + 1);
    }

    days.sort((a, b) => a.number - b.number);
    const firstDay = days[0].day;

    const rows = firstDay >= 5 ? 6 : 5;

    let matrix: CalendarDay[][] = new Array(rows).fill(null).map(() => new Array(7).fill({day: 0, number: 0, month: 0, year: 0, isToday: false, isCurrentMonth: false, disabled: false}));

    days.forEach((day, index) => {
      const row = Math.floor((index + firstDay) / 7);
      const col = (index + firstDay) % 7;
      matrix[row][col] = day;
    });

    let firstZero = matrix[0].findLastIndex((day) => day.number === 0);
    let lastZero = matrix[matrix.length - 1].findIndex((day) => day.number === 0);

    getBeforeDays(matrix[0], firstZero);
    getAfterDays(matrix[matrix.length - 1], lastZero);

    return matrix
  });

  const getBeforeDays = (array, firstZero) => {
    array.forEach((day, index) => {
      if (index <= firstZero) {
        const date = new Date (props.year, props.month, day.number);
        date.setDate(date.getDate() - (firstZero - index));
        array[index] = {
          day: date.getDay(),
          number: date.getDate(),
          month: date.getMonth(),
          year: date.getFullYear(),
          isToday: date.toDateString() === new Date().toDateString(),
          isCurrentMonth: date.getMonth() === props.month,
          disabled: checkDisabled(date)
        }
      }
    });
  }

  const getAfterDays = (array, lastZero) => {
    array.forEach((elem, index) => {
      if(index >= lastZero){
        const date = new Date (props.year, props.month+1, elem.number);
        date.setDate(date.getDate() + (index - lastZero + 1));
        array[index] = {
          day: date.getDay(),
          number: date.getDate(),
          month: date.getMonth(),
          year: date.getFullYear(),
          isToday: date.toDateString() === new Date().toDateString(),
          isCurrentMonth: date.getMonth() === props.month,
          disabled: checkDisabled(date)
        }
      }
    })
  }

  const getStyle = (day : CalendarDay) => {
    let style = '';

    if(props.selectedDate
        && day.number === props.selectedDate.getDate()
        && day.month === props.selectedDate.getMonth()
        && day.year === props.selectedDate.getFullYear()
    ){
      style += 'bg-blue-700 dark:bg-blue-500 text-white';
    } else if(day.isToday){
      style += ' text-blue-700 dark:text-blue-500';
    } else if (!day.isCurrentMonth){
      style += ' text-gray-300 dark:text-gray-500 !font-normal';
      if(day.disabled) style += ' line-through';
    } else if (day.disabled){
      style += ' text-gray-300 dark:text-gray-500 line-through';
    }
    return style;
  }

  const checkDisabled = (date) => {
    if(!props.validRange) return false;
    if(date.getTime() < props.validRange[0]?.getTime()) return true;
    if(date.getTime() > props.validRange[1]?.getTime()) return true;
    return false;
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