from fastapi import (
    FastAPI,
    HTTPException,
)

from fastapi.middleware.cors import (
    CORSMiddleware,
)

from pydantic import BaseModel

from services.knowledge_service import (
    find_fixed_answer,
)


# =========================================================
# FASTAPI APP
# =========================================================

app = FastAPI(
    title="Coinstep Chatbot API",
    version="1.0.0",
)


# =========================================================
# CORS
# =========================================================

app.add_middleware(
    CORSMiddleware,

    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",
    ],

    allow_credentials=True,

    allow_methods=[
        "*"
    ],

    allow_headers=[
        "*"
    ],
)


# =========================================================
# REQUEST MODEL
# =========================================================

class ChatRequest(
    BaseModel
):
    message: str


# =========================================================
# RESPONSE MODEL
# =========================================================

class ChatResponse(
    BaseModel
):
    success: bool
    answer: str
    source: str


# =========================================================
# HOME ROUTE
# =========================================================

@app.get("/")
def home():

    return {
        "success": True,
        "message":
            "Coinstep chatbot backend is running",
    }


# =========================================================
# CHAT ROUTE
# =========================================================

@app.post(
    "/api/chat",
    response_model=ChatResponse,
)
def chat(
    request: ChatRequest,
):

    message = (
        request.message
        .strip()
    )


    # =====================================================
    # EMPTY MESSAGE
    # =====================================================

    if not message:

        raise HTTPException(
            status_code=400,
            detail=
                "Message is required",
        )


    print(
        "User question:",
        message
    )


    # =====================================================
    # SEARCH COINSTEP KNOWLEDGE
    # =====================================================

    answer = find_fixed_answer(
        message
    )


    # =====================================================
    # MATCH FOUND
    # =====================================================

    if answer:

        print(
            "Answer source: "
            "Coinstep Knowledge"
        )

        return ChatResponse(
            success=True,

            answer=answer,

            source=
                "company_knowledge",
        )


    # =====================================================
    # NO MATCH
    # =====================================================

    print(
        "Answer source: Fallback"
    )


    fallback_answer = (
        "I'm designed to help only with Coinstep "
        "and related Web3 topics. "
        "I can't answer unrelated questions. "
        "You can ask me about Coinstep, wallets, security, "
        "transactions, fees, Web3, troubleshooting or support. "
        
    )


    return ChatResponse(
        success=True,

        answer=fallback_answer,

        source="fallback",
    )