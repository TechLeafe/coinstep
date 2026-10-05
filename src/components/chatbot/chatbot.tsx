import {
  useEffect,
  useRef,
  useState,
} from "react";

import type {
  FormEvent,
} from "react";

import "./chatbot.css";

import {
  getChatbotAnswer,
} from "./chatbotMatcher";

import chatbotRobot from "../../assets/Chatbot Icon.png";


/* =========================================================
   TYPES
========================================================= */

type Message = {
  id: number;
  sender: "user" | "bot";
  text: string;
};


/* =========================================================
   CHATBOT
========================================================= */

const Chatbot = () => {

  const [isOpen, setIsOpen] =
    useState(false);

  const [isMaximized, setIsMaximized] =
    useState(false);

  const [input, setInput] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const [showNudge, setShowNudge] =
    useState(false);


  /* =========================================================
     INITIAL MESSAGE
  ========================================================= */

  const [messages, setMessages] =
    useState<Message[]>([
      {
        id: 1,
        sender: "bot",
        text:
          "Hi! 👋 I'm CoinStep Assistant. How can I help you today?",
      },
    ]);


  const messagesEndRef =
    useRef<HTMLDivElement | null>(null);


  /* =========================================================
     AUTO SCROLL
  ========================================================= */

  useEffect(() => {

    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });

  }, [messages, loading]);


  /* =========================================================
     AUTOMATIC ASSISTANT INTRO
  ========================================================= */

  useEffect(() => {

    const showTimer =
      window.setTimeout(() => {
        setShowNudge(true);
      }, 1400);


    const hideTimer =
      window.setTimeout(() => {
        setShowNudge(false);
      }, 6000);


    return () => {

      window.clearTimeout(
        showTimer
      );

      window.clearTimeout(
        hideTimer
      );

    };

  }, []);


  /* =========================================================
     SEND MESSAGE
     FRONTEND-ONLY CHATBOT
  ========================================================= */

  const sendMessage = (
    message: string
  ) => {

    const cleanMessage =
      message.trim();


    if (
      !cleanMessage ||
      loading
    ) {
      return;
    }


    /* USER MESSAGE */

    const userMessage: Message = {
      id: Date.now(),
      sender: "user",
      text: cleanMessage,
    };


    setMessages((previous) => [
      ...previous,
      userMessage,
    ]);


    setInput("");

    setLoading(true);


    /* =====================================================
       FRONTEND MATCHING

       No FastAPI
       No Gemini
       No Claude
       No OpenAI
    ===================================================== */

    window.setTimeout(() => {

      const answer =
        getChatbotAnswer(
          cleanMessage
        );


      const botMessage: Message = {
        id: Date.now() + 1,
        sender: "bot",
        text: answer,
      };


      setMessages((previous) => [
        ...previous,
        botMessage,
      ]);


      setLoading(false);

    }, 400);

  };


  /* =========================================================
     FORM SUBMIT
  ========================================================= */

  const handleSubmit = (
    event: FormEvent<HTMLFormElement>
  ) => {

    event.preventDefault();

    sendMessage(input);

  };


  /* =========================================================
     QUICK QUESTION
  ========================================================= */

  const handleSuggestion = (
    question: string
  ) => {

    sendMessage(question);

  };


  /* =========================================================
     CLEAR CHAT
  ========================================================= */

  const clearChat = () => {

    setMessages([
      {
        id: Date.now(),
        sender: "bot",
        text:
          "Chat cleared. 👋 How can I help you with CoinStep?",
      },
    ]);

  };


  /* =========================================================
     OPEN
  ========================================================= */

  const openChat = () => {

    setShowNudge(false);

    setIsOpen(true);

  };


  /* =========================================================
     MINIMIZE
  ========================================================= */

  const minimizeChat = () => {

    setIsOpen(false);

    setIsMaximized(false);

  };


  /* =========================================================
     CLOSE
  ========================================================= */

  const closeChat = () => {

    setIsOpen(false);

    setIsMaximized(false);

  };


  /* =========================================================
     MAXIMIZE
  ========================================================= */

  const toggleMaximize = () => {

    setIsMaximized(
      (previous) => !previous
    );

  };


  /* =========================================================
     UI
  ========================================================= */

  return (

    <>

      {/* =====================================================
          CHATBOT LAUNCHER
      ===================================================== */}

      {!isOpen && (

        <div className="chatbot-launcher-wrapper">


          {/* ASSISTANT INTRO CARD */}

          <div
            className={`chatbot-nudge ${
              showNudge
                ? "show"
                : ""
            }`}
          >

            <div className="chatbot-nudge-content">

              <div className="chatbot-nudge-symbol">
                ✦
              </div>

              <div className="chatbot-nudge-copy">

                <span className="chatbot-nudge-title">
                  Ask CoinStep
                </span>

                <span className="chatbot-nudge-subtitle">
                  Your Web3 assistant
                </span>

              </div>

            </div>

            <span className="chatbot-nudge-arrow" />

          </div>


          {/* ROBOT LAUNCHER */}

          <button
            type="button"
            className="chatbot-launcher"
            onClick={openChat}
            onMouseEnter={() =>
              setShowNudge(true)
            }
            onMouseLeave={() =>
              setShowNudge(false)
            }
            aria-label="Open CoinStep Assistant"
          >

            <img
              src={chatbotRobot}
              alt="CoinStep Assistant"
              className="chatbot-robot-image"
            />

            <span className="chatbot-ai-spark">
              ✦
            </span>

          </button>

        </div>

      )}


      {/* =====================================================
          CHAT WINDOW
      ===================================================== */}

      {isOpen && (

        <div
          className={`chatbot-container ${
            isMaximized
              ? "maximized"
              : ""
          }`}
        >


          {/* =================================================
              HEADER
          ================================================= */}

          <div className="chatbot-header">

            <div className="chatbot-header-left">


              <div className="chatbot-avatar">
                C
              </div>


              <div className="chatbot-header-info">

                <h3>
                  CoinStep Assistant
                </h3>

                <div className="chatbot-status">
                  Web3 Support Assistant
                </div>

              </div>

            </div>


            <div className="chatbot-header-actions">


              {/* MINIMIZE */}

              <button
                type="button"
                className="chatbot-header-button"
                onClick={minimizeChat}
                aria-label="Minimize chatbot"
              >
                −
              </button>


              {/* MAXIMIZE */}

              <button
                type="button"
                className="chatbot-header-button"
                onClick={toggleMaximize}
                aria-label={
                  isMaximized
                    ? "Restore chatbot"
                    : "Maximize chatbot"
                }
              >
                {isMaximized
                  ? "❐"
                  : "□"}
              </button>


              {/* CLOSE */}

              <button
                type="button"
                className="chatbot-close-button"
                onClick={closeChat}
                aria-label="Close chatbot"
              >
                ×
              </button>

            </div>

          </div>


          {/* =================================================
              MESSAGES
          ================================================= */}

          <div className="chatbot-messages">


            {messages.map(
              (message) => (

                <div
                  key={message.id}
                  className={`chatbot-message-row ${
                    message.sender === "user"
                      ? "user-row"
                      : "bot-row"
                  }`}
                >


                  {/* BOT AVATAR */}

                  {message.sender ===
                    "bot" && (

                    <div className="message-avatar">
                      C
                    </div>

                  )}


                  {/* MESSAGE */}

                  <div
                    className={`chatbot-message ${
                      message.sender ===
                      "user"
                        ? "user-message"
                        : "bot-message"
                    }`}
                  >

                    {message.text}

                  </div>

                </div>

              )
            )}


            {/* =================================================
                TYPING INDICATOR
            ================================================= */}

            {loading && (

              <div className="chatbot-message-row bot-row">

                <div className="message-avatar">
                  C
                </div>

                <div className="chatbot-message bot-message typing-message">

                  <span>.</span>
                  <span>.</span>
                  <span>.</span>

                </div>

              </div>

            )}


            <div
              ref={messagesEndRef}
            />

          </div>


          {/* =================================================
              QUICK QUESTIONS
          ================================================= */}

          <div className="chatbot-suggestions">


            <button
              type="button"
              disabled={loading}
              onClick={() =>
                handleSuggestion(
                  "What is CoinStep?"
                )
              }
            >
              What is CoinStep?
            </button>


            <button
              type="button"
              disabled={loading}
              onClick={() =>
                handleSuggestion(
                  "Is CoinStep safe?"
                )
              }
            >
              Security
            </button>


            <button
              type="button"
              disabled={loading}
              onClick={() =>
                handleSuggestion(
                  "How can I use CoinStep?"
                )
              }
            >
              Getting Started
            </button>


            <button
              type="button"
              disabled={loading}
              onClick={() =>
                handleSuggestion(
                  "How can I secure my wallet?"
                )
              }
            >
              Wallet Safety
            </button>

          </div>


          {/* =================================================
              INPUT
          ================================================= */}

          <form
            className="chatbot-input-area"
            onSubmit={handleSubmit}
          >

            <input
              type="text"
              value={input}
              placeholder={
                loading
                  ? "Finding an answer..."
                  : "Ask CoinStep anything..."
              }
              onChange={(event) =>
                setInput(
                  event.target.value
                )
              }
              disabled={loading}
              autoComplete="off"
            />


            <button
              type="submit"
              className="chatbot-send-button"
              disabled={
                loading ||
                !input.trim()
              }
              aria-label="Send message"
            >
              ➤
            </button>

          </form>


          {/* =================================================
              FOOTER
          ================================================= */}

          <div className="chatbot-footer">

            <span>
              Powered by CoinStep
            </span>


            <button
              type="button"
              onClick={clearChat}
              disabled={loading}
            >
              Clear chat
            </button>

          </div>

        </div>

      )}

    </>

  );

};


export default Chatbot;