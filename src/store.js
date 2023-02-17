import { defineStore } from "pinia";
import { ref } from "vue";
import dayjs from "dayjs";

const AI_URL = "https://api.openai.com/v1/completions";

export const useChatStore = defineStore("chat", () => {
  const messages = ref([]);
  const isButtonDisabled = ref(false);
  const chatPrompts = ref("");
  function newMessage(newMessage, author) {
    if (newMessage != undefined && newMessage.length > 1) {
      let now = dayjs(new Date()).format("dddd, hh:mm:ss a");
      messages.value.push({ text: newMessage, isUser: author, timestamp: now });
      messages.value.push({ text: "...", isUser: false });
      isButtonDisabled.value = true;
      fetchAI(newMessage).then((data) => {
        now = dayjs(new Date()).format("dddd, hh:mm:ss a");
        // prettier-ignore
        const {choices: [{ text }] } = data;
        messages.value[messages.value.length - 1] = {
          text: text.replace("Someone:", ""),
          isUser: false,
          timestamp: now,
        };
        isButtonDisabled.value = false;
        parseToPrompt();
      });
    }
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
        prompt: `Someone is a bot that simulates a person in a chat, it is young, intelligent and responds in the same language as the prompt
        You: Hola\n Someone: Hola, ¿Cómo estás?.\n
        You: Hola\n Someone: Hola, ¿Qué estás haciendo?.\n
        You: Hello\n Someone: Hi there! How are you?.\n
        You: Hello\n Someone: Hi, what are you doing?.\n
        You: Olá\n Someone: Oi, como vai?.\n
        You: Olá\n Someone: Oi, o que você está fazendo?.\n
        You: Salut\n Someone: Bonjour! Comment allez-vous?.\n
        You: Salut\n Someone: Salut tu fais quoi?.\n
        ${chatPrompts.value}
        You: ${prompt}`,
        temperature: 0.5,
        max_tokens: 100,
        top_p: 1,
        frequency_penalty: 0.5,
        presence_penalty: 0,
        stop: ["You:"],
      }),
    });
    return await res.json();
  }
  // prettier-ignore
  function parseToPrompt() {
    messages.value.forEach((x, i) => {
      chatPrompts.value += i % 2 == 0 
                            ? `You: ${x.text}\n`
                            : `Someone: ${x.text}\n`;
    });
  }

  return {
    isButtonDisabled,
    messages,
    newMessage,
  };
});

//in author Bolean  [ 0 => Bot , 1 => User]
