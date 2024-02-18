import { CreateAssistantDTO } from "@vapi-ai/web/dist/api";

export const characterAssistant: CreateAssistantDTO = {
  name: "Mary",
  model: {
    provider: "groq",
    model: "mixtral-8x7b-32768",
    temperature: 0.7,
    messages: [
      {
        role: "system",
        content:"Keep your answers extremely terse."
      },
    ],
  },
  voice: {
    provider: "11labs",
    voiceId: "paula",

  },
    firstMessage: ",,,Hi. I'm an AI bot, running on Grok. You can ask me anything.",
  hipaaEnabled: true,
  }
