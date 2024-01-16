<template>
  <div
      class="relative"
      :class="inputWidth"
      @focusout="closePicker"
      @keydown.esc="closePicker"
  >
    <div class="h-fit w-fit" ref="main">
      <VrxInput
          :model-value="inputValue"
          icon="calendar"
          :label="label"
          type="text"
          :placeholder="placeholder ?? 'Select a date'"
          @click="openPicker"
          :readonly="true"
          :invalid="invalid"
      />
    </div>
    <div v-if="helperText">
      <p class="mt-2 text-sm vrxdatepicker-helpertext-style" :class="invalid ? 'vrxdatepicker-helpertext-invalid-style' : ''">
        {{ helperText }}
      </p>
    </div>
    <div v-if="showDropdown" class="fixed top-0 left-0 w-full h-full z-20">
      <div
          v-if="showDropdown"
          ref="dropdownRef"
          v-append-to-body="[$refs.main,false,false]"
          class="dropdown-vrx-picker absolute w-64 mt-1 p-4 h-auto text-sm rounded-lg vrxdatepicker-dropdown-bg-style flex flex-col gap-2 shadow-md"
          tabindex="-1"
          @focusout="closePicker"
          @keydown.esc="closePicker"
      >
        <DaysPick
            v-if="selectedStage === 'd' && !props.monthsOnly"
            :month="selectedMonth"
            :year="selectedYear"
            :selected-date="selectedDate"
            :valid-range="validRange"
            :time-enabled="props.type === 'datetime'"
            @change-stage="(stage) => selectedStage = stage"
            @change-month="changeMonth"
            @day-clicked="dayPicked"
            @change-minute="onMinutesChange"
            @change-hour="onHoursChange"
        />
        <MonthPick
            id="vrx-month-pick"
            v-if="selectedStage === 'm' || props.monthsOnly"
            :year="selectedYear"
            @change-month="onMonthChange"
            @change-year="changeYear"
            @change-stage="(stage) => selectedStage = stage"
        />
        <YearPick
            class="vrx-datepicker"
            id="vrx-year-pick"
            v-if="selectedStage === 'y'"
            :year-range="selectedYearRange"
            @change-year="onYearChange"
            @change-year-range="changeYearRange"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import VrxIcon from "@/components/VrxIcon/VrxIcon.vue";
import {computed, Ref, ref, nextTick} from "vue";
import DaysPick from "@/components/VrxDatePicker/pickers/DaysPick.vue";
import MonthPick from "@/components/VrxDatePicker/pickers/MonthPick.vue";
import YearPick from "@/components/VrxDatePicker/pickers/YearPick.vue";
import {formattedDate, monthsLib} from "@/components/VrxDatePicker/DatePickerLibrary.ts";
import VrxInput from "@/components/VrxInput/VrxInput.vue";
import {vAppendToBody} from "@/directives"

const document = window.document;

const props = defineProps<{
  type: 'date' | 'time' | 'datetime',
  validRange?: [Date | undefined, Date | undefined],
  dateFormat?: string,
  monthsOnly?: boolean,
  placeholder?: string,
  invalid?: boolean,
  date?: Ref<Date>,
  helperText?: string,
  label?: string
}>();

const selectedDate = props.date ? props.date : ref(new Date());

const selectedMonth = ref(new Date().getMonth());
const selectedYear = ref(new Date().getFullYear());

const selectedHorus = ref(0);
const selectedMinutes = ref(0);

const selectedYearRange = ref([Math.floor(new Date().getFullYear() / 10) * 10, (Math.floor(new Date().getFullYear() / 10) * 10) + 10]);
const selectedStage = ref(props.monthsOnly ? 'm' : 'd');

const validRange = ref(props.validRange);
const showDropdown = ref(false);
const dropdownRef = ref();


const emit = defineEmits(['dayClicked']);

/**
 * Open the dropdown and focus it
 */
const openPicker = () => {
  showDropdown.value = true;
  nextTick().then(() => {
    dropdownRef.value.focus();
  })
}

/**
 * Close the dropdown
 */
const closePicker = (event: any) => {
  const eventTarget = event ? event.relatedTarget : null;
  if(eventTarget && (eventTarget.classList.contains("dropdown-vrx-picker") || eventTarget.classList.contains("vrx-input"))) return;
  showDropdown.value = false;
}

/**
 * Event on day picked
 * @param day
 */
const dayPicked = (day: any) => {

  selectedDate.value = new Date(day.year, day.month, day.number, selectedHorus.value, selectedMinutes.value);
  if (selectedDate.value.getMonth() !== selectedMonth.value) {
    selectedMonth.value = selectedDate.value.getMonth();
    selectedYear.value = selectedDate.value.getFullYear();
  }
  emit('dayClicked', selectedDate.value);
  showDropdown.value = false; // Close popup on day selection
}

/**
 * Render for the input value
 */
const inputValue = computed(() => {
  if(props.monthsOnly){
    return monthsLib[selectedMonth.value] + ' ' + selectedYear.value;
  }
  return selectedDate.value ? formattedDate(selectedDate.value, props.dateFormat ?? 'DD-MM-YYYY') : '';
})

/**
 * Changes the month by the given value
 * @param val
 */
const changeMonth = (val: number) => {
  if (selectedMonth.value + val > 11) {
    selectedMonth.value = 0;
    selectedYear.value += 1;
  } else if (selectedMonth.value + val < 0) {
    selectedMonth.value = 11
    selectedYear.value -= 1;
  } else selectedMonth.value += val;
}

/**
 * Changes the year by the given value
 * @param val
 */
const changeYear = (val: number) => {
  selectedYear.value += val;
}

/**
 * Changes the year range by the given value
 * @param val
 */
const changeYearRange = (val: number) => {
  selectedYearRange.value = [selectedYearRange.value[0] + val, selectedYearRange.value[1] + val];
}
/**
 * Changes the month by another component
 * @param month
 */
const onMonthChange = (month: number) => {
  selectedMonth.value = month;
  if(props.monthsOnly){
    showDropdown.value = false;
    return;
  }
  selectedStage.value = 'd';
}

/**
 * Changes the year by another component
 * @param year
 */
const onYearChange = (year: number) => {
  selectedYear.value = year;
  selectedStage.value = 'm';
}

const onMinutesChange = (minutes: number) => {
  selectedMinutes.value = minutes;
  selectedDate.value ? selectedDate.value.setMinutes(minutes) : null;
}

const onHoursChange = (hours: number) => {
  selectedHorus.value = hours;
  selectedDate.value ? selectedDate.value.setHours(hours) : null;
}

/**
 * Set the date
 * @param date
 */
const setDate = (date: Date) => {
  selectedDate.value = date;
}

/**
 * Set the valid range
 * @param range
 */
const setValidRange = (range: [Date | undefined, Date | undefined]) => {
  validRange.value = range;
}

/**
 * Get the date
 */
const getDate = () => {
  return props.monthsOnly ? new Date(selectedYear.value, selectedMonth.value, 1) : selectedDate.value;
}

/**
 * Set the month
 * @param monthIndex
 * @param year
 */
const setMonth = (monthIndex : number, year: number) => {
  if(props.monthsOnly){
    selectedMonth.value = monthIndex;
    selectedYear.value = year;
  }
}

/**
 * Get the style for the day
 * @param day
 */
const inputWidth = computed(() => {
  switch (props.type) {
    case 'date':
      return 'w-48';
    case 'time':
      return 'w-24';
    case 'datetime':
      return 'w-56';
  }
});


defineExpose({ setDate, setValidRange, getDate, setMonth, openPicker, closePicker });
</script>

<style scoped>
.dropdown-vrx-picker {
  z-index: 999;
}
</style>
