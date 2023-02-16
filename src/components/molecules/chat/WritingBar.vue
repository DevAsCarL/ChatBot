<template>
  <div
    class="bg-gray-200 w-full flex justify-evenly gap-2 p-2 border-t-2 border-black"
  >
    <span class="w-3/4">
      <textarea
        class="resize-none w-full h-10 border-2 border-black rounded-lg bg-gray-100 px-2"
        v-model="messageWrited"
      ></textarea>
    </span>
    <button
      @click="store.newMessage(messageWrited, author)"
      class="bg-blue-600 rounded-lg w-1/5 h-10 px-2 flex gap-2 items-center justify-center text-white border-2 border-black"
    >
      Enviar <IconSend class="w-4" />
    </button>
  </div>
</template>

<script setup>
import { IconSend } from "@tabler/icons-vue";

import { useChatStore } from "@/store.js";
import { ref } from "vue";
const store = useChatStore();
const messageWrited = ref();
const author = Boolean(true);
</script>

<style scoped></style>
