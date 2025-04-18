<template>
  <div class="vrx-layout" :class="layoutStyle">
    <slot></slot>
    <div v-if="resizable" class="resize-handle" @mousedown.stop.prevent="startResize"></div>
  </div>
</template>


<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from "vue";

const {weight, padding, margin, direction, resizable} = withDefaults(defineProps<{
      weight?: number,
      padding?: string,
      margin?: string,
      direction?: string,
      resizable?: boolean,
    }>(),{
  weight: 1,
  padding: "0",
  margin: "0",
  direction: "row",
  resizable: false,
})

const emit = defineEmits(["resize"])

const resizing = ref(false);
const startX = ref(0);
const startY = ref(0);
const initialSize = ref(0);


const layoutStyle = computed(() => ({
  display: "flex",
  flexDirection: direction,
  flex: weight,
  padding: padding,
  margin: margin,
  position: "relative",
  boxSizing: "border-box",
  overflow: "hidden"
}));


const startResize = (event: MouseEvent) => {
  resizing.value = true;
  startX.value = event.clientX;
  startY.value = event.clientY;

  /*if (direction === "row") {
    initialSize.value = event.currentTarget?.parentElement?.offsetWidth || 0;
  } else {
    initialSize.value = event.currentTarget?.parentElement?.offsetHeight || 0;
  }*/

  document.addEventListener("mousemove", onResize);
  document.addEventListener("mouseup", stopResize);
};

const onResize = (event: MouseEvent) => {
  if (!resizing.value) return;

  let newSize;
  if (direction === "row") {
    const delta = event.clientX - startX.value;
    newSize = initialSize.value + delta;
  } else {
    const delta = event.clientY - startY.value;
    newSize = initialSize.value + delta;
  }

  emit("resize", newSize);
};

const stopResize = () => {
  if (resizing.value) {
    resizing.value = false;
    document.removeEventListener("mousemove", onResize);
    document.removeEventListener("mouseup", stopResize);
  }
};

onMounted(() => {
  document.addEventListener("mouseup", stopResize);
});

onUnmounted(() => {
  document.removeEventListener("mouseup", stopResize);
});
</script>


<style scoped>
.vrx-layout {
  transition: all 0.2s ease;
  width: 100%;
  height: 100%;
}

.resize-handle {
  position: absolute;
  right: 0;
  bottom: 0;
  width: 8px;
  height: 8px;
  background: #ccc;
  cursor: nwse-resize;
}
</style>
