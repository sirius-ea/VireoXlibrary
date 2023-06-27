<template>
  <li>
    <div @click="toggleShowChildren" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
      <VrxIcon v-if="config.icon" :icon="config.icon" size="5"/>
      <span class="flex-1 whitespace-nowrap">{{ config.text }}</span>
      <VrxIcon v-if="config.children?.length > 0" :icon="showChildren ? 'chevron-up' : 'chevron-down'" size="4"/>
    </div>
    <div>
      
    </div>
  </li>
</template>

<script setup lang="ts">
  import {NavbarButtonInterface} from "@/components/VrxNavbar/NavbarButtonInterface.ts";
  import {ref} from "vue";
  import VrxIcon from "@/components/VrxIcon/VrxIcon.vue";

  const props = defineProps<{
    config: NavbarButtonInterface;
  }>();

  const showChildren = ref(false);

  const toggleShowChildren = () => {
    showChildren.value = !showChildren.value;
  }

</script>

<style scoped>
  .vrx-navbar-side-button{
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }
  .side-dropdown{
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-left: 1rem;
  }
  .label-icon{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
  }
</style>