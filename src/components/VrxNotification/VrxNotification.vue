<script setup lang="ts">
import {computed, onMounted, ref} from "vue";
import {IconLibraryType} from "@/components";

const props = withDefaults(defineProps<{
  message: string,
  type: string,
  duration:  number,
}>(),{
  duration: 5000
})


const styleColors = computed(() => {
  if (props.type === 'success') {
    return "vrx-notification-success"
  }
  else if(props.type === 'warning') {
    return "vrx-notification-warning"
  }
  else {
    return "vrx-notification-error"
  }
});


const progress =ref<number>(0);

const startProgress = () => {
  progress.value = 0;
  if(props.duration === 0)
    return
  const interval = setInterval(() => {
    progress.value += 100 / (props.duration / 100);
    if (progress.value >= 100) {
      clearInterval(interval);
      closeAndEmit();
    }
  }, 100);
};

const open = () => {
  emit("onOpen");
  startProgress();
};


const closeAndEmit = () => {
  emit("onClose");
};

const emit = defineEmits(["onClose", "onOpen"]);
defineExpose({ open, close });


onMounted(() => {
  open();
});

</script>

<template>
  <div data-testid="vrx-notification" class="vrx-notification" :class="styleColors" @click="closeAndEmit">
    <div style="display: flex; flex-direction: row; justify-content: center">
      <p>{{message}}</p>
    </div>
    <div class="vrx-progress-bar" :style="{ width: progress + '%' }"></div>
  </div>
</template>

<style scoped>
</style>