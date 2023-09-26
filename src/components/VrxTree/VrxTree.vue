<template>
  <div>
    <TreeItem :node="data[0]"/>
  </div>
</template>

<script setup lang="ts">
  import TreeItem from "@/components/VrxTree/TreeItem.vue";
  const data = [
    {
      text: "ITALY",
      icon: "map-pin",
      children: [
        {
          text: "Asset 1",
          icon: "wind",
          children: [
            {
              text: "Plant 1.1",
              icon: "wind",
              children: []
            },
            {
              text: "Plant  1.2",
              icon: "wind",
              children: []
            }
          ]
        },
        {
          text: "Asset 2",
          icon: "sun",
          children: [
            {
              text: "Plant 2.1",
              icon: "sun",
              children: [
                {
                  text: "Device 2.1.1",
                  icon: "solar-panel-alt",
                  children: []
                },
              ]
            },
            {
              text: "Plant 2.2",
              icon: "sun",
              children: []
            }
          ]
        }
      ]
    }
  ]

</script>

<style scoped>

</style>