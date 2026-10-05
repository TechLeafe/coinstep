import {
  chatbotResponses,
} from "./chatbotData";


/* =========================================================
   NORMALIZE TEXT
========================================================= */

const normalizeText = (
  text: string
): string => {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s]/g, "")
    .replace(/\s+/g, " ");
};


/* =========================================================
   STOP WORDS
========================================================= */

const STOP_WORDS = new Set([
  "a",
  "an",
  "the",
  "is",
  "are",
  "am",
  "i",
  "me",
  "my",
  "you",
  "your",
  "it",
  "this",
  "that",
  "what",
  "who",
  "why",
  "how",
  "where",
  "when",
  "can",
  "could",
  "do",
  "does",
  "did",
  "tell",
  "about",
  "please",
  "to",
  "of",
  "for",
  "in",
  "on",
  "with",
]);


/* =========================================================
   IMPORTANT WORDS
========================================================= */

const getMeaningfulWords = (
  text: string
): string[] => {
  return normalizeText(text)
    .split(" ")
    .filter(
      (word) =>
        word.length > 2 &&
        !STOP_WORDS.has(word)
    );
};


/* =========================================================
   CALCULATE MATCH SCORE
========================================================= */

const calculateScore = (
  userMessage: string,
  keyword: string
): number => {
  const userWords =
    getMeaningfulWords(userMessage);

  const keywordWords =
    getMeaningfulWords(keyword);

  if (
    userWords.length === 0 ||
    keywordWords.length === 0
  ) {
    return 0;
  }

  const commonWords =
    userWords.filter((word) =>
      keywordWords.includes(word)
    );

  return (
    commonWords.length /
    Math.max(
      userWords.length,
      keywordWords.length
    )
  );
};


/* =========================================================
   GET CHATBOT ANSWER
========================================================= */

export const getChatbotAnswer = (
  message: string
): string => {
  const normalizedMessage =
    normalizeText(message);

  if (!normalizedMessage) {
    return "Please enter a question.";
  }


  /* =====================================================
     1. EXACT MATCH
  ===================================================== */

  for (const item of chatbotResponses) {

    for (const keyword of item.keywords) {

      if (
        normalizeText(keyword) ===
        normalizedMessage
      ) {
        return item.answer;
      }

    }

  }


  /* =====================================================
     2. CONTAINS MATCH
  ===================================================== */

  for (const item of chatbotResponses) {

    for (const keyword of item.keywords) {

      const normalizedKeyword =
        normalizeText(keyword);

      /*
        Avoid very short keywords such as "hi"
        accidentally matching inside other words.
      */

      if (
        normalizedKeyword.length >= 4 &&
        (
          normalizedMessage.includes(
            normalizedKeyword
          ) ||
          normalizedKeyword.includes(
            normalizedMessage
          )
        )
      ) {
        return item.answer;
      }

    }

  }


  /* =====================================================
     3. KEYWORD SIMILARITY MATCH
  ===================================================== */

  let bestAnswer: string | null =
    null;

  let bestScore = 0;


  for (const item of chatbotResponses) {

    for (const keyword of item.keywords) {

      const score =
        calculateScore(
          message,
          keyword
        );


      if (score > bestScore) {

        bestScore = score;

        bestAnswer =
          item.answer;

      }

    }

  }


  /*
    At least around 50% of important
    words must match.
  */

  if (
    bestAnswer &&
    bestScore >= 0.5
  ) {
    return bestAnswer;
  }


  /* =====================================================
     4. FALLBACK
  ===================================================== */

  return (
    "I'm designed to help only with CoinStep and related Web3 topics. " +
    "You can ask me about CoinStep, wallets, security, transactions, " +
    "fees, Web3, troubleshooting or support."
  );
};