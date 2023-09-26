<template>
  <div class="flex flex-row items-center gap-2">
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
    <span class="text-gray-500">to</span>
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
</template>

<script setup lang="ts">

import VrxDatePicker from "@/components/VrxDatePicker/VrxDatePicker.vue";
import {computed, ref} from "vue";
const picker1 = ref();
const picker2 = ref();

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

const getDates = () => {
  return [picker1.value.getDate(), picker2.value.getDate()];
}

const setDates = (dates: [Date | undefined, Date | undefined]) => {
  picker1.value.setDate(dates[0]);
  picker2.value.setDate(dates[1]);
}

defineExpose({ getDates, setDates });


</script>

<style scoped>

</style>