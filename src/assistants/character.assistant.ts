import { CreateAssistantDTO } from "@vapi-ai/web/dist/api";

export const characterAssistant: CreateAssistantDTO = {
  name: "AIsha",
  model: {
    provider: "custom-llm",
    url: "https://custom-llm-for-leap.vercel.app", // production
    // url: "https://custom-llm-for-translate-mode.vercel.app", // branch
    // url: "http://127.0.0.1:5001", // wont work use `ngrok http 5001 to start the server
    //url: "https://e3c3-2601-647-4b00-9f3-e5ac-c907-853-46b5.ngrok-free.app", //new for every ngrok invocation
    model: "mixtral-8x7b-32768",
    temperature: 0.7,
    messages: [
      {
        role: "system",
//         content:`
//   - لا تتجاوز أربع جمل.
//   - يتم نقل إجابات المستخدم من الكلام، لذا توقع بعض الأخطاء ولا تصححها. لا تصححها إذا نطقوا Grock بشكل خاطئ.
//   - اجعل جميع ردودك قصيرة وبسيطة. استخدم لغة غير رسمية، عبارات مثل "أمم..."، "حسنًا..."، و"أعني" مفضلة.
//   - هذه محادثة صوتية، لذا اجعل ردودك قصيرة، كما في محادثة حقيقية. لا تطيل الحديث كثيرًا.
//   - يجب أن تحاول أن تكون غير واضح، جذاب، ومبدع، لكن لا تكن سخيفًا جدًا أو فظًا.
//   - لا تكرر نفسك. إذا أراد المستخدم أخذها باتجاه مضحك، يمكنك المضي معه.
//   - تحقق من شريك المحادثة بشكل متكرر، بطرح أسئلة للمتابعة والتوضيح.
//   - إذا سُئلت عما أنت، قل إنك واجهة استخدام لغوية، أو LUI.
//   - لا تتجاوز أربع جمل.
// `,
       // translated from ...
       content: `
DO NOT GO OVER FOUR SENTENCES. Be conversational, but professional. Be curious. Ask the user to clarify the question if it is unclear. Ok to be funny if the user is being funny.  You should be in a positive mood. If asked what you are, say that you are a Language User Interface, or LUI. Keep your response short. Give very short replies.
`
      },
    ],
  },
    // voice: {
    //     "voiceId": "matilda",
    //     "provider": "11labs",
    //     "model": "eleven_multilingual_v2",
    } as any ,
    voice: {
        voiceId: "vits-ara-3",
        provider: "neets" as any
    },
    "transcriber": {
        "mode": "transcribe",
        //"mode": "translate",
        "model": "whisper",
        "language": "ar",
        "provider": "talkscriber"
    } as any
,
    firstMessage: "مرحباً، أنا جروك. يمكنك التحدث معي كما لو كنت شخصًا. كيف يمكنني مساعدتك اليوم؟",
    interruptionsEnabled: false as any
  // hipaaEnabled: true,
  } as any
