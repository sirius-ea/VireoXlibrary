<script setup lang="ts">
import {ref, watch} from "vue";
  import {VrxIcon} from "@/components";

  const showDropdown = ref(false);
  const containerRef = ref<HTMLLIElement>();
  const dropdownRef = ref<HTMLUListElement>();

  watch(() => showDropdown.value, (value) => {

    if(!containerRef.value || !dropdownRef.value) return;
    if(value){
      dropdownRef.value.style.setProperty("left", `${containerRef.value?.parentElement!.offsetWidth}px`);
      dropdownRef.value.style.setProperty("top", `${containerRef.value.offsetHeight - (containerRef.value?.clientHeight)}px`);
    } else {
      containerRef.value.classList.remove('bg-content-dark', 'dark:bg-content-light');
    }
  });

  const props = defineProps< {
    class?: string,
    testid?: string,
    fatherShowDropdown?: boolean
  }>();

  watch(() => props.fatherShowDropdown, (value) => {
    if(!value) showDropdown.value = false;
  });

</script>

<template>
  <li
      ref="containerRef"
      @click="showDropdown = !showDropdown"
      v-bind="$props as any"
      :class="[$slots.child && showDropdown ? 'bg-content-dark dark:bg-content-light' : '']"
      class="relative-group flex gap-2 items-center w-full p-2 text-base cursor-pointer text-gray-900 transition justify-between duration-75 rounded-lg group hover:bg-content-dark dark:text-white dark:hover:bg-content-light active:bg-primary-500 active:dark:bg-primary-500">
    <div class="flex flex-row gap-2 items-center h-full">
      <slot></slot>
    </div>
    <div v-if="$slots.child">
      <VrxIcon :icon="showDropdown ? 'chevron-right':'chevron-down'" size="5" />
    </div>
  </li>
  <ul
      ref="dropdownRef"
      class="ml-1 px-3 py-4 space-y-2 font-medium border-2 absolute z-1000 bg-base-light dark:bg-base-dark rounded-lg shadow-lg transition duration-75 w-auto dropdown-container"
      v-if="$slots.child"
      v-show="showDropdown"
  >
    <slot name="child" v-if="showDropdown" ></slot>
  </ul>
</template>

<style scoped>
</style>
