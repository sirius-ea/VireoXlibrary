<template>
  <tbody>
    <tr v-for="row in modelValue.data" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
        <td
            v-for="cell in modelValue.header"
            class="px-6 py-4 font-medium whitespace-nowrap"
            :style="row.backgroundColor ? 'background-color: ' + row.backgroundColor : ''"
            :class="cell.align ? textStyle[cell.align] : null"
        >
            <span :style="row.textColor ? 'color: ' + row.textColor : ''">
              {{ row.data[cell.id] }}
            </span>
        </td>
    </tr>
  </tbody>
</template>

<script setup lang="ts">
import {GridConfigurationInterface} from "@/components/VrxGrid/GridConfigurationInterface.ts";
  import {textStyle} from "@/components/VrxGrid/gridStyles.ts";

  const props = defineProps<{
    modelValue: GridConfigurationInterface;
  }>()

</script>

<style scoped>

  .text-left{
    text-align: left;
  }
  .text-right{
    text-align: right;
  }
  .text-center{
    text-align: center;
  }

</style>