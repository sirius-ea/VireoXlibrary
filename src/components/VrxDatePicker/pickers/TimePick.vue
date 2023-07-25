<template>
  <div class="w-full h-16 border-t border-gray-200 dark:border-gray-600 flex justify-center gap-2 items-center">
    <VrxIcon
        icon="chevron-left"
        class="rounded-lg hover:bg-gray-200 dark:hover:bg-gray-500 cursor-pointer"
        @click="hourIncrement(-10)"
    />
    <VrxInput
        icon="clock"
        type="text"
        v-model="hours"
        class="w-20"
        placeholder=""
        :invalid="invalidTime"
        @change="() => !invalidTime ? emit('changeHour', hours) : null"
    />
    <span>:</span>
    <VrxInput
        icon="timer"
        type="text"
        v-model="minutes"
        class="w-20"
        placeholder=""
        :invalid="invalidTime"
        @change="() => !invalidTime ? emit('changeMinute', minutes) : null"
    />
    <VrxIcon
        icon="chevron-right"
        class="rounded-lg hover:bg-gray-200 dark:hover:bg-gray-500 cursor-pointer"
        @click="hourIncrement(10)"
    />

  </div>
</template>

<script setup lang="ts">

import VrxInput from "@/components/VrxInput/VrxInput.vue";
import VrxIcon from "@/components/VrxIcon/VrxIcon.vue";
import {computed, ref} from "vue";

const hours = ref('00');
const minutes = ref('00');

const emit = defineEmits(['changeMinute', 'changeHour']);

const invalidTime = computed(() => {
  let regex = /^([01][0-9]|2[0-3]):([0-5][0-9])$/ ;
  return !regex.test(hours.value + ':' + minutes.value);
});

const hourIncrement = (val: number) => {
  if(invalidTime.value){
    return
  }

  if(typeof parseInt(minutes.value) !== 'number' || isNaN(parseInt(minutes.value))){
    hours.value = '00';
    minutes.value = '00';
  }
  else if(parseInt(minutes.value) + val >= 60){
    minutes.value = '00';
  }
  else if(parseInt(minutes.value) + val <= -1){
    minutes.value = '50';
  }
  else if(parseInt(minutes.value) + val < 10){
    minutes.value = '0' + (parseInt(minutes.value) + val).toString();
  } else {
    minutes.value = (parseInt(minutes.value) + val).toString();
  }

  emit('changeHour', hours.value);
  emit('changeMinute', minutes.value);
}
</script>

<style scoped>

</style>