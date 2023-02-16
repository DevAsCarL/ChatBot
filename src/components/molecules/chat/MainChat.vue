<template>
  <div class="bg-gray-200 h-96 w-full overflow-auto flex flex-col gap-2 pt-2">
    <section
      v-for="(message, index) in messages"
      :key="index"
      class="flex"
      :class="[message.isUser ? 'justify-end pr-1' : ' justify-start pl-1']"
    >
      <MessageBoundary :message="message.text" :isUser="message.isUser" />
    </section>
    <span></span>
  </div>
</template>

<script setup>
import MessageBoundary from "@/components/atoms/chat/MessageBoundary.vue";
import { useChatStore } from "@/store.js";
import { storeToRefs } from "pinia";
const store = useChatStore();
const { messages } = storeToRefs(store);
</script>

<style scoped></style>
