<template>
  <div class="flex justify-center w-fit text-gray-900 dark:text-white">
    <div class="flex flex-row items-center gap-2 text-gray-400">
      <VrxDatePicker
          ref="picker1"
          :type="type"
          :invalid="invalid"
          :valid-range="validRange"
          :date-format="dateFormat"
          :months-only="monthsOnly"
          :placeholder="placeholderFrom"
          :width="width"
          @click="picker2.closePicker()"
      />
      <VrxIcon
          icon="chevron-down"
          class="hover:bg-gray-200 dark:hover:bg-gray-600 cursor-pointer rounded-full"
          @click="showDropdown = !showDropdown"
      />
      <VrxDatePicker
          ref="picker2"
          :type="type"
          :invalid="invalid"
          :valid-range="validRange"
          :date-format="dateFormat"
          :months-only="monthsOnly"
          :placeholder="placeholderTo"
          :width="width"
          @click="picker1.closePicker()"
      />
    </div>
    <div
        v-if="showDropdown"
        class="dropdown-vrx-picker absolute w-48 mt-12 p-4 h-auto text-sm rounded-lg bg-gray-50 dark:bg-gray-700 flex flex-col gap-2 shadow-md"
        tabindex="-1"
        @focusout="showDropdown = false"
    >
      <div class="flex flex-row justify-between items-center w-full">
        <VrxIcon icon="chevron-left" class="rounded-lg hover:bg-gray-200 dark:hover:bg-gray-500 cursor-pointer" @click="changeType(-1)"/>
        <span class="rounded-lg font-bold pt-1 pb-1 pr-2 pl-2 select-none">{{ type }}</span>
        <VrxIcon icon="chevron-right" class="rounded-lg hover:bg-gray-200 dark:hover:bg-gray-500 cursor-pointer" @click="changeType(+1)"/>
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
import { ref } from "vue";
import VrxIcon from "@/components/VrxIcon/VrxIcon.vue";
import {vClickOutside} from "@/utils.ts";
import {monthsLib} from "@/components/VrxDatePicker/DatePickerLibrary.ts";

const picker1 = ref();
const picker2 = ref();

const type = ref('Current');

const showDropdown = ref(false);

const props = defineProps<{
  type: 'date' | 'time' | 'datetime',
  validRange?: [Date | undefined, Date | undefined];
  dateFormat?: string;
  monthsOnly?: boolean;
  placeholderFrom?: string;
  placeholderTo?: string;
  width?: number;
  invalid?: boolean;
}>();

const currentButtons = [
  { value: "Week", action: () => setCurrentPeriod('w')},
  { value: "Month", action: () => setCurrentPeriod('m')},
  { value: "Year", action: () => setCurrentPeriod('y')},
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
  return [picker1.value.getDate(), picker2.value.getDate()];
}

const setDates = (dates: [Date | undefined, Date | undefined]) => {
  picker1.value.setDate(dates[0]);
  picker2.value.setDate(dates[1]);
}

const setCurrentPeriod = (period: 'y' | 'm' | 'w') => {
  const today = new Date();
  switch (period) {
    case 'y':
      if(type.value === 'Current'){
        picker1.value.setDate(new Date(today.getFullYear(), 0, 1));
        picker2.value.setDate(new Date(today.getFullYear(), 11, 31));
      }
      else if(type.value === 'Previous'){
        picker1.value.setDate(new Date(today.getFullYear() - 1, 0, 1));
        picker2.value.setDate(new Date(today.getFullYear() - 1, 11, 31));
      }
      else if(type.value === 'Next'){
        picker1.value.setDate(new Date(today.getFullYear() + 1, 0, 1));
        picker2.value.setDate(new Date(today.getFullYear() + 1, 11, 31));
      }
      break;
    case 'm':
      if(type.value === 'Current'){
        picker1.value.setDate(new Date(today.getFullYear(), today.getMonth(), 1));
        picker2.value.setDate(new Date(today.getFullYear(), today.getMonth() + 1, 0));
      }
      else if(type.value === 'Previous'){
        picker1.value.setDate(new Date(today.getFullYear(), today.getMonth() - 1, 1));
        picker2.value.setDate(new Date(today.getFullYear(), today.getMonth(), 0));
      }
      else if(type.value === 'Next'){
        picker1.value.setDate(new Date(today.getFullYear(), today.getMonth() + 1, 1));
        picker2.value.setDate(new Date(today.getFullYear(), today.getMonth() + 2, 0));
      }
      break;
    case 'w':
      if(type.value === 'Current'){
        picker1.value.setDate(new Date(today.getFullYear(), today.getMonth(), today.getDate() - today.getDay()));
        picker2.value.setDate(new Date(today.getFullYear(), today.getMonth(), today.getDate() + (6 - today.getDay())));
      }
      else if(type.value === 'Previous'){
        picker1.value.setDate(new Date(today.getFullYear(), today.getMonth(), today.getDate() - today.getDay() - 7));
        picker2.value.setDate(new Date(today.getFullYear(), today.getMonth(), today.getDate() - today.getDay() - 1));
      }
      else if(type.value === 'Next'){
        picker1.value.setDate(new Date(today.getFullYear(), today.getMonth(), today.getDate() + (6 - today.getDay()) + 1));
        picker2.value.setDate(new Date(today.getFullYear(), today.getMonth(), today.getDate() + (6 - today.getDay()) + 7));
      }
      break;
  }
}

defineExpose({ getDates, setDates });


</script>

<style scoped>

</style>