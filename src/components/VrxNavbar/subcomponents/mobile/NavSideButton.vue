<template>
  <ul>
    <li>
      <component
          v-if="config.component"
          data-testid="vrx-navbar-button"
          :is="config.component.name"
          v-bind="config.component.props"
          class="father-button vrxnavbar-card-style flex items-center p-2 rounded-lg"
          @click="toggleShowChildren"
      >
        <VrxIcon v-if="config.icon" :icon="config.icon" size="5"/>
        {{ config.text }}
        <VrxIcon v-if="config.children && config.children.length > 0" :icon="'chevron-down'" :class="showChildren ? 'icon-active' : 'icon-off'" size="3"/>
      </component>

      <div v-else>
        <div @click="toggleShowChildren" class="father-button vrxnavbar-card-style flex items-center p-2 rounded-lg">
          <VrxIcon v-if="config.icon" :icon="config.icon" size="5"/>
          <span class="flex-1 whitespace-nowrap">{{ config.text }}</span>
          <VrxIcon v-if="config.children && config.children?.length > 0" icon="chevron-down" :class="showChildren ? 'icon-active' : 'icon-off'" size="4"/>
        </div>
        <div v-if="showChildren && config.children && config.children?.length > 0" class="side-dropdown border-t" :key="config.text">
          <SideFirstLayerButton v-for="(child, index) in config.children" :config="child" :key="child.text + index"/>
        </div>
      </div>
    </li>
  </ul>
</template>

<script setup lang="ts">
  import {NavbarButton} from "@/components/VrxNavbar/NavbarButton.ts";
  import {ref} from "vue";
  import VrxIcon from "@/components/VrxIcon/VrxIcon.vue";
  import SideFirstLayerButton from "@/components/VrxNavbar/subcomponents/mobile/SideFirstLayerButton.vue";

  const props = defineProps<{
    config: NavbarButton;
  }>();

  const showChildren = ref(false);

  const toggleShowChildren = () => {
    showChildren.value = !showChildren.value;
  }

</script>

<style scoped>
  .side-dropdown{
    display: flex;
    flex-direction: column;
    padding-top: 0.5rem;
  }
  .father-button{
    font-weight: 600;
    user-select: none;
    gap: 0.75rem;
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