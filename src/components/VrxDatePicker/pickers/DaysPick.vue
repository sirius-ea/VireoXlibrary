<template>
  <div class="flex flex-row justify-between items-center">
    <VrxIcon
        icon="chevron-left"
        class="rounded-lg vrxdatepicker-daypicker-text-style cursor-pointer"
        @click="emit('changeMonth', -1)"
    />
    <span
        class="rounded-lg font-bold vrxdatepicker-daypicker-text-style pt-1 pb-1 pr-2 pl-2 cursor-pointer select-none"
        @click="() => emit('changeStage', 'm')"
    >
      {{ monthsLib[month] + ' ' + year }}
    </span>
    <VrxIcon
        icon="chevron-right"
        class="rounded-lg vrxdatepicker-daypicker-text-style cursor-pointer"
        @click="emit('changeMonth',1)"
    />
  </div>
  <table aria-describedby="vrx-table-calendar">
    <thead>
    <tr class="text-primary-400">
      <th class="font-normal select-none" v-for="day in shortDaysLib">{{ day }}</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="week in matrix">
      <td
          v-for="day in week"
          class='rounded-lg vrxdatepicker-daypicker-text-style'
          :class="getStyle(day)"
          @click="() => day.disabled ? null : emit('dayClicked', day)"
      >
        {{ day.number }}
      </td>
    </tr>
    </tbody>
  </table>
  <TimePick
      :selected-date="selectedDate"
      v-if="timeEnabled"
      @change-hour="(h) => emit('changeHour',h)"
      @change-minute="(m) => emit('changeMinute', m)"
  />
</template>

<script setup lang="ts">
import {computed, onMounted, ref} from "vue";
import {
  CalendarDay,
  checkDisabled,
  monthsLib,
  setMissingDays,
  shortDaysLib
} from "@/components/VrxDatePicker/DatePickerLibrary.ts";
import VrxIcon from "@/components/VrxIcon/VrxIcon.vue";
import TimePick from "@/components/VrxDatePicker/pickers/TimePick.vue";

const props = defineProps<{
  month: number,
  year: number,
  selectedDate?: Date,
  validRange?: [Date | undefined, Date | undefined],
  timeEnabled?: boolean
}>();

const emit = defineEmits(['changeMonth', 'changeStage', 'dayClicked', 'changeMinute', 'changeHour']);

/**
 * Build a matrix with the days of the month
 */
const matrix = computed(() => {
  let date = new Date(props.year, props.month, 1);
  let days = [];

  // Get all days of the month
  while (date.getMonth() === props.month) {
    days.push({
      day: new Date(date).getDay(),
      number: new Date(date).getDate(),
      month: new Date(date).getMonth(),
      year: new Date(date).getFullYear(),
      isToday: new Date(date).toDateString() === new Date().toDateString(),
      isCurrentMonth: new Date(date).getMonth() === props.month,
      disabled: checkDisabled(date, props.validRange)
    });
    date.setDate(date.getDate() + 1);
  }

  // Sort days by day number
  days.sort((a, b) => a.number - b.number);

  // If the weekday of the first day of the month is greater than 5, we need 6 rows
  const firstDay = days[0].day;
  const rows = firstDay >= 5 ? 6 : 5;

  // Initialize the matrix
  let matrix: CalendarDay[][] = new Array(rows).fill(null).map(() => new Array(7).fill({
    day: 0,
    number: 0,
    month: 0,
    year: 0,
    isToday: false,
    isCurrentMonth: false,
    disabled: false
  }));

  // Fill the matrix with the days
  days.forEach((day, index) => {
    const row = Math.floor((index + firstDay) / 7);
    const col = (index + firstDay) % 7;
    matrix[row][col] = day;
  });

  // Finds the last "empty" day of the first row and the first "empty" day of the last row
  // and fills them with the days of the previous and next month respectively
  let indexFirstRow = matrix[0].findLastIndex((day: CalendarDay) => day.number === 0);
  let indexLastRow = matrix[matrix.length - 1].findIndex((day) => day.number === 0);

  setMissingDays(matrix[0], indexFirstRow, true, props.year, props.month, props.validRange);
  setMissingDays(matrix[matrix.length - 1], indexLastRow, false, props.year, props.month, props.validRange);

  return matrix
});

const getStyle = (day: CalendarDay) => {
  let style = '';

  if (props.selectedDate
      && day.number === props.selectedDate.getDate()
      && day.month === props.selectedDate.getMonth()
      && day.year === props.selectedDate.getFullYear()
  ) {
    style += ' vrxdatepicker-daypicker-isselected-style';
  } else if (day.isToday) {
    style += ' vrxdatepicker-daypicker-istoday-style';
  } else if (!day.isCurrentMonth) {
    style += ' vrxdatepicker-daypicker-iscurrentmonth-style !font-normal';
    if (day.disabled) style += ' line-through';
  } else if (day.disabled) {
    style += ' vrxdatepicker-daypicker-isdisabled-style line-through';
  }
  return style;
}

</script>

<style scoped>
td {
  text-align: center;
  font-weight: bold;
  width: 14.28%;
  height: 30px;
  cursor: pointer;
  user-select: none;
}
</style>
