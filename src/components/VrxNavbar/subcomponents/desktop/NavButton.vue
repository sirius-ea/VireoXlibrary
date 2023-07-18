<template>
  <li>

    <component
        v-if="config.component"
        data-testid="vrx-navbar-button"
        :is="config.component.name"
        v-bind="config.component.props"
        class="navbar-button block py-2 pl-3 pr-4 text-gray-900 rounded md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500"
        @click="onClickEvent"
    >
      <VrxIcon v-if="config.icon" :icon="config.icon" size="5"/>
      {{ config.text }}
      <VrxIcon v-if="config.children && config.children.length > 0" :icon="'chevron-down'" :class="isSelected ? 'icon-active' : 'icon-off'" size="3"/>
    </component>

    <div
        v-else
        data-testid="vrx-navbar-button"
        class="navbar-button block py-2 pl-3 pr-4 text-gray-900 rounded md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500"
        @click="onClickEvent"
        ref="componentRef"
    >
      <VrxIcon v-if="props.config.icon" :icon="props.config.icon" size="5"/>
      {{ props.config.text }}
      <VrxIcon v-if="config.children && config.children.length > 0" :icon="'chevron-down'" :class="isSelected ? 'icon-active' : 'icon-off'" size="3"/>
    </div>
  </li>
</template>

<script setup lang="ts">
import {computed, ref} from "vue";
import {NavbarButton, NavbarFirstLayerButton} from "@/components/VrxNavbar/NavbarButton.ts";
  import {navbarButtonStyle} from "@/components/styles.ts";
  import VrxIcon from "@/components/VrxIcon/VrxIcon.vue";

  const props = defineProps<{
    config: NavbarButton;
    isSelected: boolean;
  }>();

  const showDropdown = ref(false);
  const style = computed(() => {return navbarButtonStyle(props.isSelected, hasChildren());})
  function hasChildren() {
    let hasOne = false;
    props.config.children?.forEach((child : NavbarFirstLayerButton) => {
      if(!child.children) return false;
      if(child.children.length > 0){
        hasOne = true;
      }
    });
    return hasOne;
  }

  const onClickEvent = () => {
    if(props.config.children && props.config.children?.length > 0){
      showDropdown.value = true;
    }
  }

</script>

<style scoped>
  .navbar-button {
    position: relative;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;
    user-select: none;
  }
</style>
