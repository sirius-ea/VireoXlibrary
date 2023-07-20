<template>
  <div class="relative text-gray-900 dark:text-white" :class="inputWidth">
    <div class="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
      <VrxIcon :icon="type === 'time' ? 'clock' : 'calendar'" size="5"/>
    </div>
    <input
        type="text"
        class="datepicker-input bg-gray-50 border pl-10 border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Select date"
        @click="showDropdown = true"
    >
    <div
        v-if="showDropdown"
        class="dropdown absolute w-64 mt-1 p-4 h-auto text-sm rounded-lg bg-gray-50 dark:bg-gray-700 flex flex-col gap-2"
        tabindex="0"
        @focusout="showDropdown = false"
    >
      <DaysPick
          v-if="selectedStage === 'd'"
          :month="selectedMonth"
          :year="selectedYear"
          @change-stage="(stage) => selectedStage = stage"
          @change-month="changeMonth"
      />

      <MonthPick
          v-else-if="selectedStage === 'm'"
          :year="selectedYear"
          @change-month="onMonthChange"
          @change-year="changeYear"
          @change-stage="(stage) => selectedStage = stage"
      />
      <YearPick
          v-else-if="selectedStage === 'y'"
          :year-range="selectedYearRange"
          @change-year="onYearChange"
          @change-year-range="changeYearRange"
      />
      <div class="flex justify-between">

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import VrxIcon from "@/components/VrxIcon/VrxIcon.vue";
import {computed, ref} from "vue";
import DaysPick from "@/components/VrxDatePicker/DaysPick.vue";
import MonthPick from "@/components/VrxDatePicker/MonthPick.vue";
import YearPick from "@/components/VrxDatePicker/YearPick.vue";
import VrxButton from "@/components/VrxButton/VrxButton.vue";

  const props = defineProps<{
    type: 'date' | 'time' | 'datetime-local',
  }>();

  const selectedMonth = ref(new Date().getMonth());
  const selectedYear = ref(new Date().getFullYear());
  const selectedYearRange = ref([Math.floor(new Date().getFullYear() /10) * 10, (Math.floor(new Date().getFullYear() /10) * 10) + 10 ]);
  const selectedStage = ref('d');

  const showDropdown = ref(false);

  const changeMonth = (val: number) => {
    if(selectedMonth.value + val > 11){
      selectedMonth.value = 0;
      selectedYear.value += 1;
    }
    else if(selectedMonth.value + val < 0) {
      selectedMonth.value = 11
      selectedYear.value -= 1;
    }
    else selectedMonth.value += val;
  }

  const changeYear = (val: number) => {
    selectedYear.value += val;
  }

  const changeYearRange = (val: number) => {
    selectedYearRange.value = [selectedYearRange.value[0] + val, selectedYearRange.value[1] + val];
  }
  const onMonthChange = (month) => {
    selectedMonth.value = month;
    selectedStage.value = 'd';
  }

  const onYearChange = (year) => {
    selectedYear.value = year;
    selectedStage.value = 'm';
  }

  const inputWidth = computed(() => {
    switch (props.type) {
      case 'date':
        return 'w-36';
      case 'time':
        return 'w-24';
      case 'datetime-local':
        return 'w-48';
    }
  })

  const clickOutside = {
    beforeMount: (el, binding) => {
      el.clickOutsideEvent = event => {
        // here I check that click was outside the el and his children
        if (!(el == event.target || el.contains(event.target))) {
          // and if it did, call method provided in attribute value
          binding.value();
        }
      };
      document.addEventListener("click", el.clickOutsideEvent);
    },
    unmounted: el => {
      document.removeEventListener("click", el.clickOutsideEvent);
    },
};
</script>

<style scoped>
  .datepicker-input::-webkit-calendar-picker-indicator {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    cursor: pointer;
    opacity: 0;
  }

  .dropdown{
    z-index: 999;
  }

</style>