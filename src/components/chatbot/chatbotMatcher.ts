
import { chatbotResponses } from "./chatbotData";

/* ==========================================
   NORMALIZE TEXT
========================================== */

const normalizeText = (text: string): string => {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
};

/* ==========================================
   CASUAL CHAT NORMALIZATION
========================================== */

const normalizeCasualText = (text: string): string => {
  const wordMap: Record<string, string> = {
    h: "hi",
    hai: "hi",
    hii: "hi",
    heyy: "hey",
    helloo: "hello",
    byee: "bye",
    byeee: "bye",
    goodbyee: "goodbye",
    u: "you",
    ur: "your",
    thx: "thanks",
    thanx: "thanks",
    plz: "please",
    pls: "please",
    mrng: "morning",
  };

  const words = normalizeText(text)
    .split(" ")
    .map((word) => {
      if (wordMap[word]) return wordMap[word];

      if (/^hi+$/.test(word)) return "hi";
      if (/^he+y+$/.test(word)) return "hey";
      if (/^hello+$/.test(word)) return "hello";
      if (/^by+e+$/.test(word)) return "bye";
      if (/^goodby+e+$/.test(word)) return "goodbye";
      if (/^se+e+$/.test(word)) return "see";
      if (/^thank+s+$/.test(word)) return "thanks";

      return word;
    });

  return words
    .join(" ")
    .replace(/\bgood bye\b/g, "goodbye")
    .replace(/\s+/g, " ")
    .trim();
};

/* ==========================================
   STOP WORDS
========================================== */

const STOP_WORDS = new Set([
  "a", "an", "the", "is", "are", "am",
  "i", "me", "my", "you", "your",
  "it", "this", "that", "what",
  "who", "why", "how", "where",
  "when", "can", "could", "do",
  "does", "did", "tell", "about",
  "please", "to", "of", "for",
  "in", "on", "with", "and", "or",
]);

/* ==========================================
   MEANINGFUL WORDS
========================================== */

const getMeaningfulWords = (text: string): string[] => {
  return normalizeCasualText(text)
    .split(" ")
    .filter(
      (word) =>
        word.length > 2 &&
        !STOP_WORDS.has(word)
    );
};

/* ==========================================
   SIMILARITY SCORE
========================================== */

const calculateScore = (
  message: string,
  keyword: string
): number => {
  const userWords = new Set(
    getMeaningfulWords(message)
  );

  const keywordWords = new Set(
    getMeaningfulWords(keyword)
  );

  if (
    userWords.size === 0 ||
    keywordWords.size === 0
  ) {
    return 0;
  }

  const commonWords = [...userWords].filter(
    (word) => keywordWords.has(word)
  );

  // Avoid broad matches on just one shared word
  if (
    commonWords.length < 2 &&
    (userWords.size > 1 || keywordWords.size > 1)
  ) {
    return 0;
  }

  return (
    commonWords.length /
    Math.max(userWords.size, keywordWords.size)
  );
};

/* ==========================================
   GREETING HANDLING
========================================== */

const getGreetingAnswer = (
  message: string
): string | null => {
  const input = normalizeCasualText(message);

  const greetingRules = [
    {
      id: 7,
      pattern:
        /^(bye|goodbye|bye bye|see you|see you later|talk to you later)$/,
    },
    {
      id: 1,
      pattern: /^(hi|hey|hello)( there)?$/,
    },
    {
      id: 2,
      pattern: /^(good morning|morning|gm)$/,
    },
    {
      id: 3,
      pattern:
        /^(good afternoon|afternoon|good afternon)$/,
    },
    {
      id: 4,
      pattern:
        /^(good evening|evening|good eve)$/,
    },
    {
      id: 5,
      pattern: /^(good night|night)$/,
    },
    {
      id: 6,
      pattern:
        /^(thanks|thank you|thank you so much|thanks for helping)$/,
    },
  ];

  for (const rule of greetingRules) {
    if (rule.pattern.test(input)) {
      const response = chatbotResponses.find(
        (item) => item.id === rule.id
      );

      return response?.answer ?? null;
    }
  }

  return null;
};

/* ==========================================
   GREETING IDS
========================================== */

const GREETING_IDS = new Set([
  1, 2, 3, 4, 5, 6, 7
]);

/* ==========================================
   FALLBACK
========================================== */

const FALLBACK_RESPONSE =
  "I'm designed to help only with CoinStep and related Web3 topics. " +
  "You can ask me about CoinStep, wallets, security, transactions, " +
  "fees, Web3 or troubleshooting.";

/* ==========================================
   MAIN CHATBOT FUNCTION
========================================== */

export const getChatbotAnswer = (
  message: string
): string => {
  const normalizedMessage =
    normalizeCasualText(message);

  if (!normalizedMessage) {
    return "Please enter a question.";
  }

  /* STEP 1: HANDLE GREETINGS */

  const greetingAnswer =
    getGreetingAnswer(message);

  if (greetingAnswer !== null) {
    return greetingAnswer;
  }

  /* STEP 2: EXACT KEYWORD MATCH */

  for (const item of chatbotResponses) {
    if (GREETING_IDS.has(item.id)) continue;

    for (const keyword of item.keywords) {
      if (
        normalizeCasualText(keyword) ===
        normalizedMessage
      ) {
        return item.answer;
      }
    }
  }

  /* STEP 3: COMPLETE PHRASE MATCH */

  let bestPhraseAnswer: string | null = null;
  let longestPhrase = 0;

  const paddedMessage = ` ${normalizedMessage} `;

  for (const item of chatbotResponses) {
    if (GREETING_IDS.has(item.id)) continue;

    for (const keyword of item.keywords) {
      const normalizedKeyword =
        normalizeCasualText(keyword);

      const meaningfulWords =
        getMeaningfulWords(normalizedKeyword);

      // Avoid broad single-word phrase matches
      if (meaningfulWords.length < 2) {
        continue;
      }

      const paddedKeyword =
        ` ${normalizedKeyword} `;

      if (
        paddedMessage.includes(paddedKeyword) &&
        normalizedKeyword.length > longestPhrase
      ) {
        longestPhrase = normalizedKeyword.length;
        bestPhraseAnswer = item.answer;
      }
    }
  }

  if (bestPhraseAnswer !== null) {
    return bestPhraseAnswer;
  }

  /* STEP 4: SIMILARITY MATCH */

  let bestAnswer: string | null = null;
  let bestScore = 0;

  for (const item of chatbotResponses) {
    if (GREETING_IDS.has(item.id)) continue;

    for (const keyword of item.keywords) {
      const score = calculateScore(
        normalizedMessage,
        keyword
      );

      if (score > bestScore) {
        bestScore = score;
        bestAnswer = item.answer;
      }
    }
  }

  if (bestAnswer && bestScore >= 0.85) {
    return bestAnswer;
  }

  /* STEP 5: FALLBACK */

  return FALLBACK_RESPONSE;
};
