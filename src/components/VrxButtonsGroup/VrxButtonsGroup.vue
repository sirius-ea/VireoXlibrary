<template>
  <div data-testid="vrx-btnGroup" class="inline-flex rounded-md shadow-sm" role="group">
    <button
        v-for="(btn, index) in buttons"
        :data-testid="'vrx-btnGroup-' + index"
        type="button"
        class="inline-flex items-center px-4 py-2 text-sm font-medium"
        :class="styleByIndex(index, buttons.length)"
        @click="btnActions[index] ? btnActions[index](btn) : null"
    >
      <VrxIcon v-if="btnIcons[index]" :icon="btnIcons[index]" size="4"/>
      <span class="ml-1">{{ btn }}</span>
    </button>
  </div>
</template>

<script setup lang="ts">

  import VrxIcon from "@/components/VrxIcon/VrxIcon.vue";
  import {buttonsGroupStyle} from "@/components/styles.ts";
  import {computed} from "vue";
  import {IconLibraryType} from "@/components/VrxIcon/IconLibrary.ts";

  const props = defineProps<{
    buttons: string[],
    icons?: IconLibraryType[],
    actions?: Array<() => void>
  }>();

  const style = computed(() => { return buttonsGroupStyle(); })
  const btnActions = props.actions ?? [];
  const btnIcons = props.icons ?? [];
  const styleByIndex = (index : number, listLength : number) => {
    switch (index) {
      case 0:
        return style.value.firstButton;
      case listLength - 1:
        return style.value.lastButton;
      default:
        return style.value.middleButton;
    }
  }
</script>

<style scoped>

</style>