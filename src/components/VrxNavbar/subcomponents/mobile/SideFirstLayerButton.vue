<template>
  <component
      class="child-button flex items-center p-2 text-text-lightMode rounded-lg dark:text-text-darkMode hover:bg-primary-100 dark:hover:bg-primary-700"
      v-if="config.component"
      :is="config.component.name"
      v-bind="config.component.props"
  >
    <VrxIcon v-if="config.icon" :icon="config.icon" size="4"/>
    <span class="flex-1 whitespace-nowrap">{{ config.text }}</span>
  </component>

  <div v-else @click="toggleShowChildren" class="child-button flex items-center p-2 text-text-lightMode rounded-lg dark:text-text-darkMode hover:bg-primary-100 dark:hover:bg-primary-700">
    <VrxIcon v-if="config.icon" :icon="config.icon" size="4"/>
    <span class="flex-1 whitespace-nowrap">{{ config.text }}</span>
    <VrxIcon v-if="config.children && config.children?.length > 0" icon="chevron-down" :class="showChildren ? 'icon-active' : 'icon-off'" size="4"/>
  </div>
  <div v-show="showChildren && config.children && config.children?.length > 0" class="side-dropdown-sub" >
    <SideSecondLayerButton  v-for="child in config.children" :config="child"/>
  </div>
</template>

<script setup lang="ts">
  import {NavbarFirstLayerButton} from "@/components/VrxNavbar/NavbarButton.ts";
  import {ref} from "vue";
  import VrxIcon from "@/components/VrxIcon/VrxIcon.vue";
  import SideSecondLayerButton from "@/components/VrxNavbar/subcomponents/mobile/SideSecondLayerButton.vue";

  const props = defineProps<{
    config: NavbarFirstLayerButton;
  }>()

  const showChildren = ref(false);

  const toggleShowChildren = () => {
    showChildren.value = !showChildren.value;
  }
</script>

<style scoped>
.child-button{
  padding: 0.5rem 0.5rem;
  font-weight: normal;
  font-size: 14px;
  user-select: none;
  gap: 1rem;
}
.side-dropdown-sub{
  display: flex;
  flex-direction: column;
  padding-left: 2.2rem;
  transition: .5s ease all;
}
.icon-active{
  transform: rotate(180deg);
  transition: .5s ease all;
}

.icon-off{
  transform: rotate(0deg);
  transition: .5s ease all;
}
</style>