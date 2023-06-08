<script setup lang="ts" generic="T">
  import {VrxTreeItemInterface} from "@/components/VrxTree/VrxTree.type.ts";
  import VrxIcon from "@/components/VrxIcon/VrxIcon.vue";
  import {computed, inject, onMounted} from "vue";

  const props = defineProps<{
    item: VrxTreeItemInterface<T>
  }>()
  const BASE_SIZE = "5"

  const selectedItem = inject<({id:string} & T)[]>('selectedItems')

  onMounted(() => {
    if (props.item.visible === undefined) {
      props.item.visible = true
    }
  })
  function toggleVisibility() {
    props.item.visible = !props.item.visible
  }

  function toggleSelect() {
    props.item.checked = !props.item.checked

    if(!selectedItem) {
      return
    }
    if(props.item.checked) {
      selectedItem.push({id:props.item.id, data: props.item.data ? {...props.item.data} : {...props.item}} as {id:string} & T)
    } else {
      selectedItem.splice(selectedItem.findIndex(item => item.id === props.item.id), 1)
    }
  }

  const chevronIcon = computed(() => {
    return props.item.visible ? "chevron-down" : "chevron-right"
  })

  const selectedIcon = computed(() => {
    return props.item.checked ? "check" : "empty"
  })


</script>

<template>
    <div class="">
      <div class="flex flex-row items-center gap-2 ">
        <VrxIcon :icon="chevronIcon" v-if="props.item.children" :size="BASE_SIZE" @click="toggleVisibility" class="cursor-pointer"/>
        <!-- TODO: sostituire con VrxCheck una volta disponibile -->
        <div class="border border-black dark:border-white cursor-pointer " v-if="props.item.selectable" @click="toggleSelect">
          <VrxIcon :icon="selectedIcon" :size="(BASE_SIZE - 2).toString()" />
        </div>
        <VrxIcon :icon="props.item.icon" v-if="props.item.icon" :size="BASE_SIZE"/>
        {{props.item.label}}
      </div>
      <div v-if="props.item.visible" v-for="item in props.item.children" :key="item.id" class="ml-2 pl-6 border-l">
        <VrxTreeItem :item="item" />
      </div>
    </div>
</template>

<style scoped>

</style>
