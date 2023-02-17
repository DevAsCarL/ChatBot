<template>
  <main
    class="flex justify-center flex-col overflow-hidden rounded-lg mt-24 w-3/4 m-auto lg:w-1/2"
  >
    <NavChat />
    <MainChat />
    <WritingBar />
  </main>
</template>

<script setup>
import NavChat from "./molecules/chat/NavChat.vue";
import MainChat from "./molecules/chat/MainChat.vue";
import WritingBar from "./molecules/chat/WritingBar.vue";
</script>
