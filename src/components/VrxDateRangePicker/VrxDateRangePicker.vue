<template>
  <div class="flex justify-center w-fit text-gray-900 dark:text-white">
    <div class="flex flex-row items-center gap-2 text-gray-400">
      <VrxDatePicker
          ref="pickerStart"
          :type="type"
          :invalid="invalid"
          :valid-range="validRange"
          :date-format="dateFormat"
          :months-only="monthsOnly"
          :placeholder="placeholderFrom"
          :width="width"
          @click="pickerStop.closePicker()"
          :label="(labelStart ? labelStart : (labelStop ? '&nbsp;' : undefined))"
          :date="dateStart"
          :helper-text="(helperTextStart ? helperTextStart : (helperTextStop ? '&nbsp;' : undefined))"
      />
      <div class="h-full flex flex-col items-center justify-center">
        <label v-if="labelStop || labelStart"> &nbsp; <!-- Purely exists for alignment --></label>
        <VrxIcon
            icon="chevron-down"
            class="hover:bg-gray-200 dark:hover:bg-gray-600 cursor-pointer rounded-full h-full"
            @click="showDropdown = !showDropdown"
        />
        <label v-if="helperTextStart || helperTextStop" class="mt-2 text-sm"> &nbsp; <!-- Purely exists for alignment --> </label>
      </div>
      <VrxDatePicker
          ref="pickerStop"
          :type="type"
          :invalid="invalid"
          :valid-range="validRange"
          :date-format="dateFormat"
          :months-only="monthsOnly"
          :placeholder="placeholderTo"
          :width="width"
          @click="pickerStart.closePicker()"
          :label="(labelStop ? labelStop : (labelStart ? '&nbsp;' : undefined))"
          :date="dateStop"
          :helper-text="(helperTextStop ? helperTextStop : (helperTextStart ? '&nbsp;' : undefined))"
      />
    </div>
    <div
        v-if="showDropdown"
        class="dropdown-vrx-picker absolute w-48 mt-12 p-4 h-auto text-sm rounded-lg bg-gray-50 dark:bg-gray-700 flex flex-col gap-2 shadow-md"
        tabindex="-1"
        @focusout="showDropdown = false"
    >
      <div class="flex flex-row justify-between items-center w-full">
        <VrxIcon icon="chevron-left" class="rounded-lg hover:bg-gray-200 dark:hover:bg-gray-500 cursor-pointer"
                 @click="changeType(-1)"/>
        <span class="rounded-lg font-bold pt-1 pb-1 pr-2 pl-2 select-none">{{ type }}</span>
        <VrxIcon icon="chevron-right" class="rounded-lg hover:bg-gray-200 dark:hover:bg-gray-500 cursor-pointer"
                 @click="changeType(+1)"/>
      </div>
      <div class="flex flex-col justify-center w-full">
        <div
            v-for="button in currentButtons"
            @click="button.action()"
            class="rounded-lg hover:bg-gray-200 dark:hover:bg-gray-500 pt-1 pb-1 pr-2 pl-2 cursor-pointer justify-center flex select-none hover:text-blue-700 dark:hover:text-white">
          {{ button.value }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import VrxDatePicker from "@/components/VrxDatePicker/VrxDatePicker.vue";
import {Ref, ref} from "vue";
import VrxIcon from "@/components/VrxIcon/VrxIcon.vue";
import {vAppendToBody} from "@/directives";

const pickerStart = ref();
const pickerStop = ref();

const type = ref('Current');

const showDropdown = ref(false);

defineProps<{
  type: 'date' | 'time' | 'datetime',
  validRange?: [Date | undefined, Date | undefined];
  dateFormat?: string;
  monthsOnly?: boolean;
  placeholderFrom?: string;
  placeholderTo?: string;
  width?: number;
  invalid?: boolean;
  labelStart?: string;
  labelStop?: string;
  dateStart?: Ref<Date>;
  dateStop?: Ref<Date>;
  helperTextStart?: string;
  helperTextStop?: string;
}>();

const currentButtons = [
  {value: "Week", action: () => setCurrentPeriod('w')},
  {value: "Month", action: () => setCurrentPeriod('m')},
  {value: "Year", action: () => setCurrentPeriod('y')},
]

const changeType = (value: number) => {
  const values = ['Previous', 'Current', 'Next'];
  const index = values.indexOf(type.value);

  switch (index) {
    case 0:
      value > 0 ? type.value = values[1] : type.value = values[2];
      break;
    case 1:
      value > 0 ? type.value = values[2] : type.value = values[0];
      break;
    case 2:
      value > 0 ? type.value = values[0] : type.value = values[1];
      break;
  }
}


const getDates = () => {
  return [pickerStart.value.getDate(), pickerStop.value.getDate()];
}

const setDates = (dates: [Date | undefined, Date | undefined]) => {
  pickerStart.value.setDate(dates[0]);
  pickerStop.value.setDate(dates[1]);
}

const setCurrentPeriod = (period: 'y' | 'm' | 'w') => {
  const today = new Date();
  let monthStart, dayStart, yearStart;
  let monthStop, dayStop, yearStop;
  switch (period) {
    case 'y':
      dayStart = 1;
      dayStop = 31;
      monthStart = 0;
      monthStop = 11;
      if (type.value === 'Current') {
        yearStart = yearStop = today.getFullYear();
      } else if (type.value === 'Previous') {
        yearStart = yearStop = today.getFullYear() - 1;
      } else {
        yearStart = yearStop = today.getFullYear() + 1;
      }
      break;
    case 'm':
      yearStart = yearStop = today.getFullYear();
      dayStart = 1;
      dayStop = 0;

      if (type.value === 'Current') {
        monthStart = today.getMonth();
        monthStop = today.getMonth() + 1;
      } else if (type.value === 'Previous') {
        monthStart = today.getMonth() - 1;
        monthStop = today.getMonth();
      } else {
        monthStart = today.getMonth() + 1;
        monthStop = today.getMonth() + 2;
      }
      break;
    case 'w':
      yearStart = yearStop = today.getFullYear();
      monthStart = monthStop = today.getMonth();
      if (type.value === 'Current') {
        dayStart = today.getDate() - today.getDay();
        dayStop = today.getDate() + (6 - today.getDay());
      } else if (type.value === 'Previous') {
        dayStart = today.getDate() - today.getDay() - 7;
        dayStop = today.getDate() - today.getDay() - 1;
      } else {
        dayStart = today.getDate() - (6 - today.getDay()) + 1;
        dayStop = today.getDate() + (6 - today.getDay()) + 7;
      }
      break;
  }

  pickerStart.value.setDate(new Date(yearStart, monthStart, dayStart));
  pickerStop.value.setDate(new Date(yearStop, monthStop, dayStop));
}

defineExpose({getDates, setDates});


</script>

<style scoped>

</style>
