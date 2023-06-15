<template>
  <nav data-testid="vrx-navbar" class="bg-white border-gray-200 dark:bg-gray-900">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <slot name="leftComponent"/>
      <div class="hidden w-full md:block md:w-auto" id="navbar-default">
        <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          <VrxNavbarButton v-for="button in componentButtons" :config="button" @click="buttonClicked(button) "/>
        </ul>
      </div>
      <slot name="rightComponent"/>
    </div>
  </nav>


</template>

<script setup lang="ts">

  import {NavbarButtonInterface} from "@/components/VrxNavbar/NavbarButtonInterface.ts";
  import VrxNavbarButton from "@/components/VrxNavbar/SubComponents/VrxNavbarButton.vue";
  import {ref} from "vue";

  const props = defineProps<{
    buttons: NavbarButtonInterface[];
  }>()

  const componentButtons = ref(props.buttons);

  const buttonClicked = ( button : NavbarButtonInterface ) => {
    const btnToDeselect = componentButtons.value.find( btn => btn.selected );
    const btnToSelect = componentButtons.value.find( btn => JSON.stringify(btn) === JSON.stringify(button));

    if (btnToDeselect) {
      btnToDeselect.selected = false;
    }
    if (btnToSelect) {
      btnToSelect.selected = true;
    }
  }

</script>

<style scoped>

</style>