<template>
  <div
    class="w-2/5 h-auto p-2 rounded-md"
    :class="[isUser ? userClass : botClass]"
  >
    {{ message }}
  </div>
</template>

<script setup>
defineProps({
  message: String,
  isUser: Boolean,
});

const userClass = "bg-blue-500 text-white rounded-br-none";
const botClass = "bg-gray-400 rounded-bl-none";
</script>

<style></style>
