<template>
    <div
      :class="[
      'vrxprogress-default-style',
      props.size ? size : 'size-base',
      'vrx-progress']"
    >
    </div>

</template>

<script setup lang="ts">

import {computed} from "vue";

const classByColor = {
    'default': `vrxprogress-default-style`,
}

const props =
    defineProps<{
      size: 'xs' | 'sm' | 'base' | 'lg' | 'xl',
    }>()

const size = computed(() => {
    return 'size-' + props.size
})

</script>

<style scoped>

.vrx-progress {
  animation: sb-rotate360 0.7s linear infinite;
  border-radius: 50%;
  border-style: solid;
  border-width: 2px;
  display: inline-block;
  left: 50%;
  mix-blend-mode: difference;
  overflow: hidden;
  position: absolute;
  top: 50%;
  transition: all 200ms ease-out;
  vertical-align: top;
  z-index: 4;
}

@keyframes sb-rotate360 {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
}

.size-xs {
  width: 8px;
  height: 8px;
  margin-left: -4px;
  margin-top: -4px;
}

.size-sm {
  width: 16px;
  height: 16px;
  margin-left: -8px;
  margin-top: -8px;
}

.size-base {
  width: 32px;
  height: 32px;
  margin-left: -16px;
  margin-top: -16px;
}

.size-lg {
  width: 64px;
  height: 64px;
  margin-left: -32px;
  margin-top: -32px;
}

.size-xl {
  width: 128px;
  height: 128px;
  margin-left: -64px;
  margin-top: -64px;
}

</style>
