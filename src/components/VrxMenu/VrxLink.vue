<script setup lang="ts">
import {hasInjectionContext, inject, onMounted, provide, Ref, ref, watch} from "vue";
import {VrxIcon} from "@/components";
import {vClickOutside} from "@/directives";

if (!hasInjectionContext()) throw new Error('This component must be used within a VrxMenu component');
const showDropdown = ref(false);
const containerRef = ref<HTMLLIElement>();
const dropdownRef = ref<HTMLUListElement>();
const menuContainer = inject<Ref<HTMLUListElement>>('menuContainer');
const parentCloseCallback = inject<() => void>('closeAllMenus', () => {
})

watch(() => showDropdown.value, (value) => {
  if (!containerRef.value || !dropdownRef.value || !menuContainer) return;
  if (value) {
    dropdownRef.value.style.setProperty("left", `${containerRef.value?.clientWidth + 24}px`);
    dropdownRef.value.style.setProperty("top", `${containerRef.value?.offsetTop - menuContainer.value.scrollTop}px`);
  } else {
    containerRef.value.classList.remove('bg-content-dark', 'dark:bg-content-light');
  }
});

onMounted(() => {
  if (!menuContainer) throw new Error('This component must be used within a VrxMenu component');
  menuContainer.value.addEventListener('scroll', () => {
    const value = containerRef.value!.offsetTop - menuContainer.value?.scrollTop;
    dropdownRef.value!.style.setProperty("top", `${Math.max(value, 0)}px`);
  });
});

const props = defineProps<{
  class?: string,
  testid?: string,
  component?: string,
  componentProps?: Record<string, any>
  collapsed?: boolean
}>();

provide('menuContainer', dropdownRef);

const closeAllMenus = () => {
  showDropdown.value = false;
  parentCloseCallback();
}

provide('closeAllMenus', closeAllMenus);

const onClick = (hasChildren: boolean) => {
  if (hasChildren) {
    showDropdown.value = !showDropdown.value
  } else {
    showDropdown.value = false;
    closeAllMenus()
  }
}

</script>

<template>
  <div v-click-outside="() => showDropdown = false"
       ref="containerRef"
  >
    <ul>
      <li
          @click="()=> {
            onClick(!!$slots.child)
          }"
          v-bind="$props as any"
          :class="[$slots.child && showDropdown ? 'bg-content-dark dark:bg-content-light' : '']"
          class="relative-group flex gap-2 items-center w-full p-2 text-base cursor-pointer text-gray-900 transition justify-between duration-75 rounded-lg group hover:bg-content-dark dark:text-white dark:hover:bg-content-light active:bg-primary-500 active:dark:bg-primary-500">
        <component v-if="component" :is="component" class="flex flex-row gap-2 items-center h-full"
                   v-bind="componentProps">
          <slot></slot>
        </component>
        <div class="flex flex-row gap-2 items-center h-full" v-else>
          <slot></slot>
        </div>
        <div v-if="$slots.child && !collapsed">
          <VrxIcon :icon="showDropdown ? 'chevron-right':'chevron-down'" size="5"/>
        </div>
      </li>
    </ul>
    <ul
        ref="dropdownRef"
        class="ml-1 px-3 py-4 space-y-2 font-medium border-2 absolute z-1000 bg-base-light dark:bg-base-dark rounded-lg shadow-lg transition duration-75 w-auto dropdown-container"
        v-if="$slots.child"
        v-show="showDropdown"
    >
      <slot name="child"></slot>
    </ul>
  </div>

</template>

<style scoped>
</style>
