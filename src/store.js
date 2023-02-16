import { defineStore } from "pinia";
import { ref } from "vue";

const AI_URL = "https://api.openai.com/v1/completions";

export const useChatStore = defineStore("chat", () => {
  const messages = ref([]);

  function newMessage(newMessage, author) {
    messages.value.push({ text: newMessage, isUser: author });

    fetchAI(newMessage).then((data) => {
      // prettier-ignore
      const {choices: [{ text }] } = data;
      console.log(data);
      messages.value.push({ text: text, isUser: false });
    });
  }

  async function fetchAI(prompt) {
    const res = await fetch(AI_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "text-davinci-003",
        prompt: `Try to simulate a chat bot and response the next prompt: "${prompt}"\n\n`,
        temperature: 0.7,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
      }),
    });
    return await res.json();
  }
  return {
    messages,
    newMessage,
  };
});

//in author Bolean  [ 0 => Bot , 1 => User]
