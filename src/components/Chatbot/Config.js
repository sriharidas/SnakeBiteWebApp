import { createChatBotMessage } from "react-chatbot-kit";

const config = {
  initialMessages: [createChatBotMessage(`Hello! I am a chatbot `)],
  customComponents: {
    botName: "Mythic Bot"
  }
}

export default config