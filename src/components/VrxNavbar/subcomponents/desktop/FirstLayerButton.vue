<template>
  <component
      v-if="config.component"
      class="card hover:bg-primary-50 rounded-lg p-4 dark:hover:bg-primary-800 mb-2 dark:text-neutral-0"
      @click="toggleChildren"
      :is="config.component.name"
      v-bind="config.component.props"
  >
    <div class="child-container" :class="config.description ? 'child-align-start' : 'child-align-center'">
      <div v-if="config.icon" class="icon-container p-2 bg-primary-100 dark:bg-primary-700 rounded-lg mt-1">
        <VrxIcon :icon="config.icon"/>
      </div>
      <div class="label-text">
        <span class="text-neutral-1000 dark:text-neutral-0">{{ config.text }}</span>
        <span v-if=config.description class="description text-primary-500">{{ config.description }}</span>
      </div>
    </div>
  </component>

  <div v-else class="card hover:bg-primary-50 rounded-lg p-4 dark:hover:bg-primary-800 mb-2 dark:text-neutral-0" @click="toggleChildren">
    <div class="child-container" :class="config.description ? 'child-align-start' : 'child-align-center'">
      <div v-if="config.icon" class="icon-container p-2 bg-primary-100 dark:bg-primary-700 rounded-lg mt-1">
        <VrxIcon :icon="config.icon"/>
      </div>
      <div class="label-text">
        <div class="title">
          <span class="text-neutral-1000 dark:text-neutral-0">{{ config.text }}</span>
          <VrxIcon v-if="config.children && config.children.length > 0" :icon="'chevron-down'" :class="showChildren ? 'icon-active' : 'icon-off'" size="3"/>
        </div>
        <span v-if=config.description class="description text-primary-500">{{ config.description }}</span>
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
  width: 22.5%;
  min-width: 350px;
  display: flex;
  height: fit-content;
  flex-direction: column;
  cursor: pointer;
  user-select: none;
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

.title{
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5rem;
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
  gap: 1rem
}

.child-align-center{
  align-items: center;
}

.child-align-start{
  align-items: flex-start;
}

.label-text{
  display: flex;
  flex-direction: column;
}

</style>