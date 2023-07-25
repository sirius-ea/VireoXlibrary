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
}>();

const invalid = computed(() => {
  if(picker1.value && picker2.value){
    if(picker1.value.getDate() && picker2.value.getDate()) {
      return picker1.value.getDate().getTime() > picker2.value.getDate().getTime();
    }
  }
  return false;
})


</script>

<style scoped>

</style>