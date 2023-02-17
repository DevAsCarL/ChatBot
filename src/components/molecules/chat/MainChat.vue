<template>
  <div
    class="bg-gray-200 h-96 w-full overflow-auto flex flex-col gap-2 py-2"
    ref="chatBoundary"
  >
    <article v-for="(message, index) in messages" :key="index">
      <div class="separator">
        {{ message.timestamp }}
      </div>
      <section
        class="flex"
        :class="[message.isUser ? 'justify-end pr-1' : ' justify-start pl-1']"
      >
        <MessageBoundary :message="message.text" :isUser="message.isUser" />
      </section>
    </article>
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
<style scoped>
.separator {
  display: flex;
  align-items: center;
  text-align: center;
  margin: 1rem 0.5rem;
  font-size: 0.7rem;
}

.separator::before,
.separator::after {
  content: "";
  flex: 1;
  border-bottom: 1px ridge #4b4b4b2d;
}

.separator:not(:empty)::before {
  margin-right: 0.25em;
}

.separator:not(:empty)::after {
  margin-left: 0.25em;
}
</style>
