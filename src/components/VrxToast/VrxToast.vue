<template>
  <div
      v-if="showToast"
      class="toast absolute cursor-pointer flex items-center w-full max-w-xs p-4 space-x-4 border divide-x divide-gray-200 rounded-lg shadow space-x"
      role="alert"
      :class="toastStyle"
      @click="hide"
  >
    <VrxIcon :icon="icon" size="5" class="h-full"/>
    <div class="flex flex-col">
      <div class="pl-4 text-sm font-bold">{{ title }}</div>
      <div class="pl-4 text-sm font-normal">{{ message }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">

import VrxIcon from "@/components/VrxIcon/VrxIcon.vue";
import {computed, ref} from "vue";

const props = defineProps<{
  type: string,
  title?: string,
  message: string,
  timing?: number,
  icon?: string
}>();

const showToast = ref(false);
const message = ref(props.message);
const type = ref(props.type);
const title = ref(props.title);
const timing = ref(props.timing);

const show = () => {
  showToast.value = true;

  if(timing.value){
    setTimeout(() => {
      showToast.value = false;
    }, timing.value ?? 0);
  }

}

const hide = () => {
  showToast.value = false;
}

const setTitle = (val: string) => {
  title.value = val;
}

const setMessage = (val: string) => {
  message.value = val;
}

const setType = (val: string) => {
  type.value = val;
}

defineExpose({ show, hide, setTitle, setMessage, setType });


const toastStyle = computed(() => {
  switch (type.value) {
    case 'success':
      return 'bg-green-50 border-green-700 text-green-700';
    case 'error':
      return 'bg-red-50 border-red-700 text-red-700';
    case 'warning':
      return 'bg-yellow-50 border-yellow-700 text-yellow-700';
    case 'info':
      return 'bg-blue-50 border-blue-700 text-blue-700 ';
    default:
      return 'bg-gray-50 dark:bg-gray-800 dark:text-white';
  }
});

const icon = computed(() => {
  if(props.icon) return props.icon;
  switch (type.value) {
    case 'success':
      return 'check';
    case 'error':
      return 'x';
    case 'warning':
      return 'warning-triangle';
    case 'info':
      return 'info-circle';
    default:
      return 'info-circle';
  }
});
</script>


<style scoped>
  .toast {
    animation: slideIn 0.5s ease-in-out;
  }
</style>