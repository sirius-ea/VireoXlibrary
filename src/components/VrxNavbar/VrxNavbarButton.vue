<template>
  <li>
    <div
        class="navbar-button block py-2 pl-3 pr-4"
        :class="style.navbarButton"
        @click="onClickEvent"
        ref="componentRef"
    >
      <VrxIcon v-if="props.config.icon" :icon="props.config.icon" size="5"/>
      {{ props.config.text }}
      <VrxIcon v-if="props.config.children?.length > 0" :icon="showDropdown ? 'chevron-up' : 'chevron-down'" size="3"/>
      <div
          v-if="showDropdown"
          class="navbar-dropdown z-10 bg-white border border-gray-200 absolute font-normal rounded-lg dark:bg-gray-700 dark:divide-gray-600 dark:border-gray-600"
          tabindex="1"
      >
        <div class="w-1/2 py-2 border-r border-gray-200 dark:border-gray-600">
          <div
              v-for="child in props.config.children"
              class="dropdown-button block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              :class="JSON.stringify(selectedSub) === JSON.stringify(child) ? 'text-blue-700 dark:text-blue-500' : 'text-gray-900 dark:text-gray-200'"
              @click="setSubSelected(child)"
          >
            <VrxIcon v-if="child.icon" :icon="child.icon" size="5" class="mt-2"/>
            <div class="dropdown-button-label">
              <span class="text-md font-medium">{{ child.text }}</span>
              <span class="text-sm text-gray-500 dark:text-gray-400">{{ child.description }}</span>
            </div>
          </div>
        </div>

        <div class="w-1/2 py-2">
          <div v-for="child in selectedSub.children" class="block px-4 py-2 text-sm text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
            {{ child.text }}
          </div>
        </div>
      </div>
    </div>
  </li>
</template>

<script setup lang="ts">
  import {computed, ref} from "vue";
  import {NavbarButtonInterface, NavbarSubButtonInterface} from "@/components/VrxNavbar/NavbarButtonInterface.ts";
  import {navbarButtonStyle} from "@/components/styles.ts";
  import VrxIcon from "@/components/VrxIcon/VrxIcon.vue";

  const props = defineProps<{
    config: NavbarButtonInterface;
  }>();

  const showDropdown = ref(false);
  const componentRef = ref();
  const selectedSub = ref(props.config.children ? props.config.children[0] : null);
  const style = computed(() => {return navbarButtonStyle(props.config.selected);})

  const setSubSelected = (child : NavbarSubButtonInterface) => {
    selectedSub.value = child;
  }

  const clickOutside = () => {
    showDropdown.value = false;
  }
  const onClickEvent = (e: Event) => {
    if(props.config.children?.length === 0){
      props.config.action ? props.config.action() : null;
    } else {
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
  .navbar-dropdown{
    top: 2.5rem;
    right: -10px;
    display: flex;
    width: 600px;
    flex-direction: row;
    height: auto;
  }
  .dropdown-button{
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
  }
  .dropdown-button-label{
    display: flex;
    flex-direction: column;
    width: 90%;
  }

</style>