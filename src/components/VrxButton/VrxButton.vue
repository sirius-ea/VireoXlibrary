<template>
    <button
            type="button"
            :disabled="disabled"
            class="
              inline-flex
              items-center
              gap-2.5
              font-medium
            "
            :class="[
            classByColor[color],
            `text-${size}`,
            fullWidth ? 'w-full justify-center' : '',
            fullRounded ? 'rounded-full px-2 py-2' : 'rounded-lg px-5 py-2.5',
            disabled ? 'opacity-50 cursor-not-allowed' : 'focus:outline-none focus:ring-4']"
    >

        <slot name="prefix"/>
        <slot/>
        <slot name="suffix"/>
    </button>

</template>

<script setup lang="ts">

const classByColor = {
    'default': `vrxbutton-default-style`,
    'alternative': `vrxbutton-alternate-style`,
    'dark': `vrxbutton-dark-style`,
    'light': `vrxbutton-light-style`,
    'green': `vrxbutton-green-style`,
    'red': `vrxbutton-red-style`,
    'yellow': `vrxbutton-yellow-style`,
    'blue': `vrxbutton-blue-style`,
    'purple': `vrxbutton-purple-style`,
}

const {color, disabled, fullRounded, fullWidth, size} =
    defineProps<{
      color: 'default' | 'alternative' | 'dark' | 'light' | 'green' | 'red' | 'yellow' | 'blue' | 'purple',
      disabled?: boolean,
      fullRounded?: boolean,
      fullWidth?: boolean,
      size: 'xs' | 'sm' | 'base' | 'lg' | 'xl',
    }>()

</script>

<style scoped>

</style>
