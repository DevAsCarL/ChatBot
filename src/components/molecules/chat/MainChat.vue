<template>
  <div
    class="bg-gray-200 h-96 w-full overflow-auto flex flex-col gap-2 py-2"
    ref="chatBoundary"
  >
    <section
      v-for="(message, index) in messages"
      :key="index"
      class="flex"
      :class="[message.isUser ? 'justify-end pr-1' : ' justify-start pl-1']"
    >
      <MessageBoundary :message="message.text" :isUser="message.isUser" />
    </section>
  </div>
</template>

<script setup>
import MessageBoundary from "@/components/atoms/chat/MessageBoundary.vue";
import { useChatStore } from "@/store.js";
import { onUpdated, ref } from "vue";
import { storeToRefs } from "pinia";
const store = useChatStore();
const { messages } = storeToRefs(store);
const chatBoundary = ref();

onUpdated(() => {
  chatBoundary.value.scrollTop = chatBoundary.value.scrollHeight;
});
</script>

<style scoped></style>
