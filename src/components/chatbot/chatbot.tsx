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
  sendChatMessage,
} from "../../services/chatbotApi";

import chatbotRobot from "../../assets/Chatbot Icon.png";


type Message = {
  id: number;
  sender: "user" | "bot";
  text: string;
};


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


  const [messages, setMessages] =
    useState<Message[]>([
      {
        id: 1,
        sender: "bot",
        text:
          "Hi! 👋 I'm Coinstep Assistant. How can I help you today?",
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
    const showTimer = window.setTimeout(() => {
      setShowNudge(true);
    }, 1400);

    const hideTimer = window.setTimeout(() => {
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

  const sendMessage = async (
    message: string
  ) => {
    const cleanMessage =
      message.trim();

    if (!cleanMessage || loading) {
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


    try {
      const response =
        await sendChatMessage(
          cleanMessage
        );


      const botMessage: Message = {
        id: Date.now() + 1,
        sender: "bot",
        text: response.answer,
      };


      setMessages((previous) => [
        ...previous,
        botMessage,
      ]);

    } catch (error) {
      console.error(
        "Chatbot error:",
        error
      );


      const errorMessage: Message = {
        id: Date.now() + 1,
        sender: "bot",
        text:
          "Sorry, I couldn't connect to the Coinstep Assistant right now. Please try again.",
      };


      setMessages((previous) => [
        ...previous,
        errorMessage,
      ]);

    } finally {
      setLoading(false);
    }
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
          "Chat cleared. 👋 How can I help you with Coinstep?",
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


  return (
    <>
      {/* =====================================================
          PREMIUM CHATBOT LAUNCHER
      ===================================================== */}

      {!isOpen && (
        <div className="chatbot-launcher-wrapper">

          {/* ASSISTANT INTRO CARD */}

          <div
            className={`chatbot-nudge ${
              showNudge ? "show" : ""
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


          {/* ROBOT */}

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
              alt=""
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

          {/* HEADER */}

          <div className="chatbot-header">

            <div className="chatbot-header-left">

              <div className="chatbot-avatar">
                C
              </div>


              <div className="chatbot-header-info">

                <h3>
                  Coinstep Assistant
                </h3>

                <div className="chatbot-status">
                  AI-powered Web3 support
                </div>

              </div>

            </div>


            <div className="chatbot-header-actions">

              <button
                type="button"
                className="chatbot-header-button"
                onClick={minimizeChat}
                aria-label="Minimize chatbot"
              >
                −
              </button>


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


          {/* MESSAGES */}

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

                  {message.sender === "bot" && (
                    <div className="message-avatar">
                      C
                    </div>
                  )}


                  <div
                    className={`chatbot-message ${
                      message.sender === "user"
                        ? "user-message"
                        : "bot-message"
                    }`}
                  >
                    {message.text}
                  </div>

                </div>

              )
            )}


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


            <div ref={messagesEndRef} />

          </div>


          {/* QUICK QUESTIONS */}

          <div className="chatbot-suggestions">

            <button
              type="button"
              disabled={loading}
              onClick={() =>
                handleSuggestion(
                  "What is Coinstep?"
                )
              }
            >
              What is Coinstep?
            </button>


            <button
              type="button"
              disabled={loading}
              onClick={() =>
                handleSuggestion(
                  "Is Coinstep safe?"
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
                  "How can I use Coinstep?"
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


          {/* INPUT */}

          <form
            className="chatbot-input-area"
            onSubmit={handleSubmit}
          >

            <input
              type="text"
              value={input}
              placeholder={
                loading
                  ? "Searching Coinstep knowledge..."
                  : "Ask Coinstep anything..."
              }
              onChange={(event) =>
                setInput(
                  event.target.value
                )
              }
              disabled={loading}
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


          {/* FOOTER */}

          <div className="chatbot-footer">

            <span>
              Powered by Coinstep
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