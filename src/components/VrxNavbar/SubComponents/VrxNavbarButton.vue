<template>
  <li>

    <component
        v-if="config.component"
        data-testid="vrx-navbar-button"
        :is="config.component.name"
        v-bind="config.component.props"
        class="navbar-button block py-2 pl-3 pr-4"
        :class="style.navbarButton"
        @click="onClickEvent"
    >
      <VrxIcon v-if="config.icon" :icon="config.icon" size="5"/>
      {{ config.text }}
      <VrxIcon v-if="config.children && config.children.length > 0" :icon="'chevron-down'" :class="showDropdown ? 'icon-active' : 'icon-off'" size="3"/>
    </component>

    <div
        v-else
        data-testid="vrx-navbar-button"
        class="navbar-button block py-2 pl-3 pr-4"
        :class="style.navbarButton"
        @click="onClickEvent"
        ref="componentRef"
        v-click-outside="clickOutside"
    >
      <VrxIcon v-if="props.config.icon" :icon="props.config.icon" size="5"/>
      {{ props.config.text }}
      <VrxIcon v-if="props.config.children && props.config.children.length > 0" :icon="'chevron-down'" :class="showDropdown ? 'icon-active' : 'icon-off'" size="3"/>
      <div
          v-if="showDropdown"
          class="navbar-dropdown z-10 bg-white border border-gray-200 absolute font-normal rounded-lg dark:bg-gray-700 dark:divide-gray-600 dark:border-gray-600"
          tabindex="1"
          :class="style.dropdownStyle.mainContainer"
      >
        <div class="py-2 border-gray-200 dark:border-gray-600" :class="hasChildren() ? 'border-r ' + style.dropdownStyle.leftPanel : style.dropdownStyle.leftPanel">
          <div
              v-for="child in props.config.children"
              class="dropdown-button block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              :class="JSON.stringify(selectedSub) === JSON.stringify(child) && hasChildren() ? 'text-blue-700 dark:text-blue-500' : 'text-gray-900 dark:text-gray-200'"
              @click="setSubSelected(child)"
              @mouseover="setSubSelected(child)"
          >
            <VrxIcon v-if="child.icon" :icon="child.icon" size="5"/>
            <component v-if="child.component" :is="child.component.name" v-bind="child.component.props" class="dropdown-button-label">
              <span class="text-md font-medium">{{ child.text }}</span>
              <span v-if="child.description" class="text-sm text-gray-500 dark:text-gray-400">{{ child.description }}</span>
            </component>
            <div v-else class="dropdown-button-label">
              <span class="text-md font-medium">{{ child.text }}</span>
              <span v-if="child.description" class="text-sm text-gray-500 dark:text-gray-400">{{ child.description }}</span>
            </div>
          </div>
        </div>

        <div class="py-2" :class="style.dropdownStyle.rightPanel">
          <div v-for="child in selectedSub?.children" class="dropdown-button block px-4 py-2 text-sm text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
            <VrxIcon v-if="child.icon" :icon="child.icon" size="5"/>
            <component v-if="child.component" :is="child.component.name" v-bind="child.component.props" class="dropdown-button-label">
              <span class="text-md font-medium">{{ child.text }}</span>
              <span v-if="child.description" class="text-sm text-gray-500 dark:text-gray-400">{{ child.description }}</span>
            </component>
            <div v-else class="dropdown-button-label">
              <span class="text-md font-medium">{{ child.text }}</span>
              <span v-if="child.description" class="text-sm text-gray-500 dark:text-gray-400">{{ child.description }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </li>
</template>

<script setup lang="ts">
import {computed, Ref, ref, UnwrapRef} from "vue";
  import {NavbarButtonInterface, NavbarSubButtonInterface} from "@/components/VrxNavbar/NavbarButtonInterface.ts";
  import {navbarButtonStyle} from "@/components/styles.ts";
  import VrxIcon from "@/components/VrxIcon/VrxIcon.vue";

  const props = defineProps<{
    config: NavbarButtonInterface;
  }>();

  const showDropdown = ref(false);
  const selectedSub : Ref<UnwrapRef<NavbarSubButtonInterface | null>> = ref(props.config.children ? props.config.children[0] : null);
  const style = computed(() => {return navbarButtonStyle(props.config.selected, hasChildren());})
  function hasChildren() {
    let hasOne = false;
    props.config.children?.forEach(child => {
      if(!child.children) return false;
      if(child.children.length > 0){
        hasOne = true;
      }
    });
    return hasOne;
  }

  // v-click-outside directive
  const vClickOutside = {
    mounted(el : any, binding : any) {
      el.clickOutsideEvent = function(event : any) {
        if (!(el === event.target || el.contains(event.target))) {
          binding.value(event, el);
        }
      };
      document.body.addEventListener('click', el.clickOutsideEvent);
    },
    unmounted(el : any) {
      document.body.removeEventListener('click', el.clickOutsideEvent);
    }
  }

  const setSubSelected = (child : NavbarSubButtonInterface) => {
    selectedSub.value = child;
  }

  const clickOutside = () => {
    showDropdown.value = false;
  }
  const onClickEvent = () => {
    if(props.config.children?.length > 0){
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
    flex-direction: row;
    height: auto;
  }
  .dropdown-full-width{
    width: 550px;
  }
  .dropdown-half-width{
    width: 300px;
  }
  .dropdown-button{
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5rem;
  }
  .dropdown-button-label{
    display: flex;
    flex-direction: column;
    width: 90%;
  }
  .icon-active{
    transform: rotate(180deg);
    transition: .2s ease all;
  }

  .icon-off{
    transform: rotate(0deg);
    transition: .5s ease all;
  }

</style>