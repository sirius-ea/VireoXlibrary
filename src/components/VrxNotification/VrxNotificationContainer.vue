<template>
  <div data-testid="vrx-notification-container" class="vrx-notification-container">
    <div data-testid="vrx-notification-overflow" v-if="hiddenNotifications.length > 0" class="vrx-unread-notifications">
      {{ hiddenNotifications.length }} {{props.customOverflowText}}
    </div>
    <VrxNotification
        v-for="(notification, index) in visibleNotifications"
        :key="notification.id"
        :message="notification.message"
        :type="notification.type"
        :duration="notification.duration"
        @onClose="removeNotification(notification.id)"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import VrxNotification from "@/components/VrxNotification/VrxNotification.vue";


const props = withDefaults(defineProps<{
  maxNotifications: number,
  customOverflowText?: string
}>(),{
  maxNotifications: 8,
  customOverflowText: "unread notifications"
})
interface Notification {
  id: number;
  message: string;
  type: "success" | "warning" | "error";
  duration: number;
}

const visibleNotifications = ref<Notification[]>([]);
const hiddenNotifications = ref<Notification[]>([]);
let nextId = 1;

const addNotification = (message: string, type: "success" | "warning" | "error" = "success", duration: number = 5000) => {
  const id = nextId++;
  if (visibleNotifications.value.length >= props.maxNotifications) {
    hiddenNotifications.value.push({ id, message, type, duration });
  } else {
    visibleNotifications.value.unshift({ id, message, type, duration });
  }
};

const removeNotification = (id: number) => {
  visibleNotifications.value = visibleNotifications.value.filter(n => n.id !== id);
  if (hiddenNotifications.value.length > 0 && visibleNotifications.value.length < props.maxNotifications+1) {
    visibleNotifications.value.unshift(hiddenNotifications.value.shift()!);
  }
};

defineExpose({ addNotification, removeNotification });

</script>

<style scoped>
</style>