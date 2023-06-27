<template>
  <div @click="toggleShowChildren" class="child-button flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
    <VrxIcon v-if="config.icon" :icon="config.icon" size="4"/>
    <span class="flex-1 whitespace-nowrap">{{ config.text }}</span>
    <VrxIcon v-if="config.children?.length > 0" icon="chevron-down" :class="showChildren ? 'icon-active' : 'icon-off'" size="4"/>
  </div>
  <div v-show="showChildren && config.children?.length > 0" class="side-dropdown-sub" >
    <div v-for="child in config.children" class="child-button flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
      <VrxIcon v-if="child.icon" :icon="child.icon" size="4"/>
      <span class="flex-1 whitespace-nowrap">{{ child.text }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
  import {NavbarSubButtonInterface} from "@/components/VrxNavbar/NavbarButtonInterface.ts";
  import {ref} from "vue";
  import VrxIcon from "@/components/VrxIcon/VrxIcon.vue";

  const props = defineProps<{
    config: NavbarSubButtonInterface;
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