<template>
  <div
    class="w-2/5 h-auto p-2 rounded-md"
    :class="[isUser ? addClass.user : addClass.bot]"
  >
    {{ message }}
  </div>
</template>

<script setup>
import { watch } from "vue";

const props = defineProps({
  message: String,
  isUser: Boolean,
});

const addClass = {
  user: "bg-blue-500 text-white rounded-br-none",
  bot: "bg-gray-400 rounded-bl-none",
};

if (props.message) addClass.bot += " animate-pulse";

//prettier-ignore
watch(() => props.message,() => {
    addClass.bot = addClass.bot.replace(" animate-pulse", "");
  }
);
</script>

<style></style>
