import json
import re
from difflib import SequenceMatcher
from pathlib import Path


# =========================================================
# FILE PATH
# =========================================================

BASE_DIR = Path(__file__).resolve().parent.parent

FAQ_PATH = (
    BASE_DIR
    / "knowledge"
    / "coinstep_faq.json"
)


# =========================================================
# LOAD DATA
# =========================================================

def load_faq_data():

    try:

        with open(
            FAQ_PATH,
            "r",
            encoding="utf-8",
        ) as file:

            return json.load(file)

    except Exception as error:

        print(
            "Error loading FAQ:",
            error,
        )

        return []


FAQ_DATA = load_faq_data()


# =========================================================
# COMMON WORDS TO IGNORE
# =========================================================

STOP_WORDS = {
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
}


# =========================================================
# NORMALIZE TEXT
# =========================================================

def normalize_text(text: str) -> str:

    text = text.lower().strip()

    # remove punctuation
    text = re.sub(
        r"[^\w\s]",
        "",
        text,
    )

    # remove extra spaces
    text = re.sub(
        r"\s+",
        " ",
        text,
    )

    return text


# =========================================================
# IMPORTANT WORDS
# =========================================================

def get_meaningful_words(text: str):

    normalized = normalize_text(text)

    return {
        word
        for word in normalized.split()
        if word not in STOP_WORDS
        and len(word) > 2
    }


# =========================================================
# SHORT QUESTION / ALIAS MAPPING
# =========================================================

INTENT_ALIASES = {

    "what_is_coinstep": [
        "coinstep",
        "about coinstep",
        "tell me about coinstep",
        "what is coinstep",
    ],

    "what_is_wallet": [
        "wallet",
        "crypto wallet",
        "wallet meaning",
        "what is wallet",
        "what is a wallet",
        "explain wallet",
        "tell me about wallet",
    ],

    "secure_my_wallet": [
        "wallet safety",
        "wallet security",
        "secure wallet",
        "wallet protection",
        "protect wallet",
        "protect my wallet",
        "keep wallet safe",
        "how to secure wallet",
        "how can i secure my wallet",
    ],

    "gas_fee": [
        "gas",
        "gas fee",
        "gas fees",
        "network fee",
        "what is gas",
        "what is gas fee",
        "what are gas fees",
    ],

    "transaction_help": [
        "transaction",
        "transaction status",
        "check transaction status",
        "check my transaction",
        "track transaction",
        "transaction pending",
        "pending transaction",
        "transaction failed",
        "failed transaction",
        "transaction hash",
        "tx hash",
    ],

    "getting_started": [
        "getting started",
        "get started",
        "start coinstep",
        "how to start",
        "how do i get started",
    ],

    "contact_support": [
        "support",
        "help",
        "customer support",
        "coinstep support",
        "contact support",
        "need help",
        "i need help",
    ],

    "what_is_web3": [
        "web3",
        "what is web3",
        "web3 meaning",
    ],

    "what_is_blockchain": [
        "blockchain",
        "what is blockchain",
        "blockchain meaning",
    ],

    "what_is_ethereum": [
        "ethereum",
        "eth",
        "what is ethereum",
        "what is eth",
    ],

    "private_key": [
        "private key",
        "what is private key",
        "share private key",
    ],

    "seed_phrase": [
        "seed phrase",
        "recovery phrase",
        "what is seed phrase",
        "lost seed phrase",
    ],

    "send_receive_crypto": [
        "send crypto",
        "receive crypto",
        "send coin",
        "receive coin",
        "transfer crypto",
    ],

    "supported_assets": [
        "supported coins",
        "supported tokens",
        "supported crypto",
        "which coins",
        "which tokens",
    ],

    "supported_networks": [
        "network",
        "networks",
        "supported networks",
        "which network",
        "which blockchain",
    ],

    "coinstep_advantages": [
        "advantage",
        "advantages",
        "coinstep advantage",
        "benefits of coinstep",
        "why use coinstep",
    ],
}


# =========================================================
# FIND ANSWER USING INTENT
# =========================================================

def get_answer_by_intent(intent: str):

    for item in FAQ_DATA:

        if (
            item.get("intent")
            == intent
        ):

            return item.get("answer")

    return None


# =========================================================
# SIMILARITY
# =========================================================

def calculate_similarity(
    user_message: str,
    stored_question: str,
):

    user_normalized = normalize_text(
        user_message
    )

    stored_normalized = normalize_text(
        stored_question
    )


    sequence_score = SequenceMatcher(
        None,
        user_normalized,
        stored_normalized,
    ).ratio()


    user_words = get_meaningful_words(
        user_message
    )

    stored_words = get_meaningful_words(
        stored_question
    )


    common_words = (
        user_words
        & stored_words
    )


    return (
        sequence_score,
        len(common_words),
        common_words,
    )


# =========================================================
# FIND ANSWER
# =========================================================

def find_fixed_answer(message: str):

    normalized_message = normalize_text(
        message
    )


    # =====================================================
    # 1. EXACT MATCH
    # =====================================================

    for item in FAQ_DATA:

        for question in item.get(
            "questions",
            []
        ):

            if (
                normalized_message
                == normalize_text(question)
            ):

                print(
                    "Knowledge match: EXACT"
                )

                print(
                    "Intent:",
                    item.get("intent")
                )

                return item.get(
                    "answer"
                )


    # =====================================================
    # 2. ALIAS MATCH
    # =====================================================

    for intent, aliases in INTENT_ALIASES.items():

        for alias in aliases:

            if (
                normalized_message
                == normalize_text(alias)
            ):

                answer = get_answer_by_intent(
                    intent
                )

                if answer:

                    print(
                        "Knowledge match: ALIAS"
                    )

                    print(
                        "Intent:",
                        intent
                    )

                    return answer


    # =====================================================
    # 3. FUZZY MATCH
    # =====================================================

    best_score = 0.0
    best_answer = None
    best_question = None
    best_intent = None
    best_common_count = 0
    best_common_words = set()


    for item in FAQ_DATA:

        for question in item.get(
            "questions",
            []
        ):

            (
                score,
                common_count,
                common_words,
            ) = calculate_similarity(
                message,
                question,
            )


            # choose better result
            if (
                score > best_score
            ):

                best_score = score

                best_answer = item.get(
                    "answer"
                )

                best_question = question

                best_intent = item.get(
                    "intent"
                )

                best_common_count = (
                    common_count
                )

                best_common_words = (
                    common_words
                )


    print(
        "Best score:",
        round(
            best_score,
            2
        )
    )

    print(
        "Closest question:",
        best_question
    )

    print(
        "Closest intent:",
        best_intent
    )

    print(
        "Common meaningful words:",
        best_common_words
    )


    # =====================================================
    # 4. ACCEPT FUZZY MATCH
    # =====================================================

    MATCH_THRESHOLD = 0.70


    # Two or more meaningful words
    if (
        best_score >= MATCH_THRESHOLD
        and best_common_count >= 2
    ):

        print(
            "Knowledge match: FUZZY"
        )

        return best_answer


    # Very strong similarity with one meaningful word
    if (
        best_score >= 0.88
        and best_common_count >= 1
    ):

        print(
            "Knowledge match: STRONG FUZZY"
        )

        return best_answer


    # =====================================================
    # NO MATCH
    # =====================================================

    print(
        "Knowledge match: NOT FOUND"
    )

    return None