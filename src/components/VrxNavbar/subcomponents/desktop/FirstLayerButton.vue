<template>
  <component
      v-if="config.component"
      class="card hover:bg-gray-50 rounded-lg p-4 dark:hover:bg-gray-800 mb-2"
      @click="toggleChildren"
      :is="config.component.name"
      v-bind="config.component.props"
  >
    <div class="child-container">
      <div v-if="config.icon" class="icon-container p-2 bg-gray-100 dark:bg-gray-700 rounded-lg mt-1">
        <VrxIcon :icon="config.icon"/>
      </div>
      <div class="label-text">
        <span class="text-black dark:text-white">{{ config.text }}</span>
        <span class="description text-gray-500">{{ config.description }}</span>
      </div>
    </div>
  </component>

  <div v-else class="card hover:bg-gray-50 rounded-lg p-4 dark:hover:bg-gray-800 mb-2" @click="toggleChildren">
    <div class="child-container">
      <div v-if="config.icon" class="icon-container p-2 bg-gray-100 dark:bg-gray-700 rounded-lg mt-1">
        <VrxIcon :icon="config.icon"/>
      </div>
      <div class="label-text">
        <span class="text-black dark:text-white">{{ config.text }}</span>
        <span class="description text-gray-500">{{ config.description }}</span>
      </div>
    </div>


    <div class="child-cont pt-2" v-if="showChildren && config.children && config.children?.length > 0">
      <div v-if="config.icon" class="icon-container p-2">
        <VrxIcon icon="empty"/>
      </div>
      <div class="label-text">
        <SecondLayerButton v-for="child in config.children" :config="child" :key="child.text"/>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import {NavbarFirstLayerButton} from "@/components/VrxNavbar/NavbarButton.ts";
 import VrxIcon from "@/components/VrxIcon/VrxIcon.vue";
import {ref} from "vue";
import SecondLayerButton from "@/components/VrxNavbar/subcomponents/desktop/SecondLayerButton.vue";

 const showChildren = ref(false);
 const props = defineProps<{
    config: NavbarFirstLayerButton;
 }>()

const toggleChildren = () => {
  showChildren.value = !showChildren.value;
}

</script>

<style scoped>
.card{
  width: 350px;
  display: flex;
  flex-direction: column;
}

.description{
  font-weight: normal;
  font-size: 14px;
}
.icon-container{
  width: fit-content;
}

.children{
  font-weight: normal;
  font-size: 14px;
  cursor: pointer;
}


.child-cont{
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  gap: 1rem;
}

.child-container{
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 1rem
}

.label-text{
  display: flex;
  flex-direction: column
}

</style>