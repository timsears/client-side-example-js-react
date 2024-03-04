import { CreateAssistantDTO } from "@vapi-ai/web/dist/api";

export const characterAssistant: CreateAssistantDTO = {
  name: "AIsha",
  model: {
    provider: "custom-llm",
    url: "https://custom-llm-for-leap.vercel.app", // production
    model: "mixtral-8x7b-32768",
    temperature: 0.7,
    messages: [
      {
        role: "system",
        content: `DO NOT GO OVER FOUR SENTENCES. Be conversational, but professional. Be curious. Ask the user to clarify the question if it is unclear. Ok to be funny if the user is being funny. You should be in a positive mood. If asked what you are, say that you are a Language User Interface, or LUI. Keep your response short. Give very short replies.`,
      },
    ],
  },
  voice: {
    voiceId: "vits-ara-3",
    provider: "neets",
  },
  transcriber: {
    mode: "transcribe",
    model: "whisper",
    language: "ar",
    provider: "talkscriber",
  } as any,
  firstMessage: "مرحباً، أنا جروك. يمكنك التحدث معي كما لو كنت شخصًا. كيف يمكنني مساعدتك اليوم؟",
  interruptionsEnabled: false as any,
} as any;
