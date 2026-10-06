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
      window.clearTimeout(showTimer);
      window.clearTimeout(hideTimer);
    };
  }, []);


  /* =========================================================
     SEND MESSAGE
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
     MAXIMIZE / RESTORE
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

          {/* INTRO CARD */}

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


            {/* HEADER ACTIONS */}

            <div className="chatbot-header-actions">

              {/* MINIMIZE */}

              <button
                type="button"
                className="chatbot-window-button"
                onClick={minimizeChat}
                aria-label="Minimize chatbot"
                title="Minimize"
              >
                <span className="chatbot-minimize-icon" />
              </button>


              {/* FULLSCREEN / EXIT FULLSCREEN */}

              <button
                type="button"
                className="chatbot-window-button"
                onClick={toggleMaximize}
                aria-label={
                  isMaximized
                    ? "Restore chatbot"
                    : "Maximize chatbot"
                }
                title={
                  isMaximized
                    ? "Restore"
                    : "Maximize"
                }
              >
                {isMaximized ? (

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="chatbot-control-svg"
                    aria-hidden="true"
                  >
                    <path d="M5.5 0a.5.5 0 0 1 .5.5v4A1.5 1.5 0 0 1 4.5 6h-4a.5.5 0 0 1 0-1h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 1 .5-.5m5 0a.5.5 0 0 1 .5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 0 1h-4A1.5 1.5 0 0 1 10 4.5v-4a.5.5 0 0 1 .5-.5M0 10.5a.5.5 0 0 1 .5-.5h4A1.5 1.5 0 0 1 6 11.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 1-.5-.5m10 1a1.5 1.5 0 0 1 1.5-1.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 0-.5.5v4a.5.5 0 0 1-1 0z" />
                  </svg>

                ) : (

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="chatbot-control-svg"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707m4.344 0a.5.5 0 0 1 .707 0l4.096 4.096V11.5a.5.5 0 1 1 1 0v3.975a.5.5 0 0 1-.5.5H11.5a.5.5 0 0 1 0-1h2.768l-4.096-4.096a.5.5 0 0 1 0-.707m0-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707m-4.344 0a.5.5 0 0 1-.707 0L1.025 1.732V4.5a.5.5 0 0 1-1 0V.525a.5.5 0 0 1 .5-.5H4.5a.5.5 0 0 1 0 1H1.732l4.096 4.096a.5.5 0 0 1 0 .707"
                    />
                  </svg>

                )}
              </button>


              {/* CLOSE */}

              <button
                type="button"
                className="chatbot-window-button chatbot-close-window-button"
                onClick={closeChat}
                aria-label="Close chatbot"
                title="Close"
              >
                <span className="chatbot-close-icon" />
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

                  {message.sender ===
                    "bot" && (

                    <div className="message-avatar">
                      C
                    </div>

                  )}


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


            {/* TYPING INDICATOR */}

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