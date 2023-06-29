<script setup lang="ts">
  import {IVrxTreeItem, IVrxTreeSelectedItem} from "@/components/VrxTree/VrxTree.type.ts";
  import VrxIcon from "@/components/VrxIcon/VrxIcon.vue";
  import {computed, inject} from "vue";

  const props = withDefaults(defineProps<IVrxTreeItem>(), {
    state: {
      checked: false,
      indeterminate: false,
      expanded: true,
    }
  })

  const BASE_SIZE = (props.config?.baseSize || '5') as string
  const selectedItem = inject<(IVrxTreeSelectedItem)[]>('selectedItems')

  function toggleVisibility() {
    props.state.expanded = !props.state.expanded
  }

  function toggleSelect() {
    props.state.checked = !props.state.checked
    if(!selectedItem) {
      return
    }
    if(props.state.checked) {
      selectedItem.push({id:props.id, data: props.userdata ? {...props.userdata} : {...props.userdata}})
    } else {
      selectedItem.splice(selectedItem.findIndex(item => item.id === props.id), 1)
    }
  }

  const selectedIcon = computed(() => {
      return props.state.checked ? "check" : "empty"
  })

  const chevronIcon = computed(() => {
    return props.state.expanded ? "chevron-down" : "chevron-right"
  })

</script>

<template>
    <div class="">
      <div class="flex flex-row items-center gap-2 ">
        <VrxIcon :icon="chevronIcon" v-if="props.children" :size="BASE_SIZE" @click="toggleVisibility" class="cursor-pointer"/>
        <!-- TODO: sostituire con VrxCheck una volta disponibile -->
        <div class="border border-black dark:border-white cursor-pointer " v-if="props.config?.selectable" @click="toggleSelect">
          <VrxIcon :icon="selectedIcon" :size="(parseInt(BASE_SIZE) - 2).toString()" />
        </div>
        <VrxIcon v-if="props.config && props.config.icon" :icon="props.config.icon" :size="BASE_SIZE"/>
        {{props.label}}
      </div>
      <div v-if="props.state.expanded" v-for="item in props.children" :key="item.id" class="ml-2 pl-6 border-l">
        <VrxTreeItem :item="item" />
      </div>
    </div>
</template>

<style scoped>

</style>
