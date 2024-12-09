<template>
    <div
            class="
              inline-flex
              items-center
              gap-2.5
              font-medium
            "
            :class="[
            classByColor[color],
            `text-${size}`]"
    >
    </div>

</template>

<script setup lang="ts">

const classByColor = {
    'default': `vrxbutton-default-style`,
    'alternative': `vrxbutton-alternate-style`,
    'dark': `vrxbutton-dark-style`,
    'light': `vrxbutton-light-style`
}

const {color, disabled, fullRounded, fullWidth, size} =
    defineProps<{
      color: 'default' | 'alternative' | 'dark' | 'light',
      size: 'xs' | 'sm' | 'base' | 'lg' | 'xl',
    }>()

</script>

<style scoped>

</style>
