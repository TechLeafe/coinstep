import json
import re
from difflib import SequenceMatcher
from pathlib import Path


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
    with open(
        FAQ_PATH,
        "r",
        encoding="utf-8",
    ) as file:
        return json.load(file)


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

    text = re.sub(
        r"[^\w\s]",
        "",
        text,
    )

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

def find_fixed_answer(
    message: str,
):

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

                return item["answer"]


    # =====================================================
    # 2. FUZZY MATCH
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


            if score > best_score:

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
    # 3. STRICT ACCEPTANCE
    # =====================================================

    MATCH_THRESHOLD = 0.72


    if (
        best_score >= MATCH_THRESHOLD
        and best_common_count >= 2
    ):

        print(
            "Knowledge match: FUZZY"
        )

        return best_answer


    # =====================================================
    # NO MATCH
    # =====================================================

    print(
        "Knowledge match: NOT FOUND"
    )

    return None