import { defineStore } from "pinia";
import { ref } from "vue";

export const useChatStore = defineStore("chat", () => {
  const messages = ref([]);

  function newMessage(newMessage, author) {
    messages.value.push({ text: newMessage, isUser: author });
    messages.value.push({ text: 'soy un bot', isUser: false });
  }

  return {
    messages,
    newMessage,
  };
});

//in author Bolean  [ 0 => Bot , 1 => User]
