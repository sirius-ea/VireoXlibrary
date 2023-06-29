<template>
  <div class="card hover:bg-gray-50 rounded-lg p-4 dark:hover:bg-gray-800 mb-2" @click="toggleChildren">
    <div style="display: flex; flex-direction: row; align-items: flex-start; gap: 1rem">
      <div v-if="config.icon" class="icon-container p-2 bg-gray-100 dark:bg-gray-700 rounded-lg mt-1">
        <VrxIcon :icon="config.icon"/>
      </div>
      <div style="display: flex; flex-direction: column">
        <span class="text-black dark:text-white">{{ config.text }}</span>
        <span class="description text-gray-500">{{ config.description }}</span>
      </div>
    </div>


    <div class="child-cont pt-2" v-if="showChildren && config.children && config.children?.length > 0">
      <div v-if="config.icon" class="icon-container p-2">
        <VrxIcon icon="empty"/>
      </div>
      <div style="display: flex; flex-direction: column">
        <div class="children dark:text-white hover:dark:text-blue-700 hover:text-blue-700" v-for="child in config.children">{{ child.text }}</div>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import {NavbarSubButtonInterface} from "@/components/VrxNavbar/NavbarButtonInterface.ts";
 import VrxIcon from "@/components/VrxIcon/VrxIcon.vue";
import {ref} from "vue";

 const showChildren = ref(false);
 const props = defineProps<{
    config: NavbarSubButtonInterface;
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

.bottom-enter-active, .bottom-leave-active{
  transition: all 1s ease;
}

.bottom-enter-from, .bottom-leave-to{
  transform: translateY(-300px)
}

.bottom-enter-to{
  transform: translateY(0px)
}
</style>