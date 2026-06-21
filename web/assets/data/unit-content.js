export const learningRoutes = [
  {
    code: "01",
    tone: "secure",
    title: "Be Secure",
    chinese: "保护账号和信息",
    prompts: [
      "什么是密码？为什么不能告诉别人？",
      "为什么不能用生日、1234 当密码？",
      "为什么要先想一想再点链接？"
    ]
  },
  {
    code: "02",
    tone: "safe",
    title: "Be Safe",
    chinese: "安全上网",
    prompts: [
      "什么情况会让你觉得不安全？",
      "如果你觉得怪怪的，可以怎么做？",
      "在网上，可以做哪些事情来保护自己？"
    ]
  },
  {
    code: "03",
    tone: "curious",
    title: "Be Curious",
    chinese: "好奇心 + 思考",
    prompts: [
      "网上看到的东西一定是真的吗？",
      "奇怪的消息或奖励是真的吗？",
      "看到流行行为时，可以不思考就跟着做吗？"
    ]
  },
  {
    code: "04",
    tone: "kind",
    title: "Be Kind",
    chinese: "文明友善交流",
    prompts: [
      "什么是友善的话？",
      "网上可以骂人吗？为什么？",
      "看到别人被欺负可以怎么做？"
    ]
  }
];

export const publicScenarios = [
  {
    title: "陌生人发来链接",
    situation: "有人说点开链接就能拿到游戏奖励。",
    sentence: "我不应该点击陌生人的链接。我可以问老师。"
  },
  {
    title: "朋友想知道密码",
    situation: "同学说只借用一下你的账号密码。",
    sentence: "不可以分享密码。密码是隐私。"
  },
  {
    title: "游戏里有人骂人",
    situation: "你看到有人在聊天区说难听的话。",
    sentence: "我应该告诉老师或家人。这样比较安全。"
  }
];

export const quizQuestions = [
  {
    prompt: "收到陌生人发来的中奖链接，你应该怎么做？",
    choices: [
      "马上点击，看看能不能中奖",
      "先不点击，问老师或家人",
      "把链接发给更多朋友"
    ],
    answer: 1,
    feedback: "对。陌生链接可能不安全，先问可信任的大人。"
  },
  {
    prompt: "下面哪一个最适合作为网络安全规则？",
    choices: [
      "密码可以告诉好朋友",
      "个人信息越多越好",
      "不可以分享密码"
    ],
    answer: 2,
    feedback: "对。密码属于个人隐私，不应该分享。"
  },
  {
    prompt: "看到网上有人被欺负，你可以怎么做？",
    choices: [
      "一起说难听的话",
      "不理会，也不告诉任何人",
      "保存证据并告诉老师或家人"
    ],
    answer: 2,
    feedback: "对。遇到网络欺凌时，求助比继续争吵更安全。"
  }
];
