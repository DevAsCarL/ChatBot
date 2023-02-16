<template>
  <div class="bg-gray-200 w-full flex justify-between px-4 py-2 border-black border-b-2">
    <span class="flex justify-center gap-2">
      <picture class="rounded-full bg-black"
        ><img
          src="/svg/futurama-bender.svg"
          alt="It's a bot for my chat"
          class="w-6"
      /></picture>
      <h1>ChatBot</h1></span
    >
    <button><IconDotsVertical /></button>
  </div>
</template>

<script setup>
import { IconDotsVertical } from "@tabler/icons-vue";
</script>

<style scoped></style>
