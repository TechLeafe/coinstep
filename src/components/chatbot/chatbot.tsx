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
    useRef<HTMLDivElement | null>(
      null
    );


  // ==========================================
  // AUTO SCROLL
  // ==========================================

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, loading]);


  // ==========================================
  // SEND MESSAGE
  // ==========================================

  const sendMessage = async (
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


  // ==========================================
  // FORM SUBMIT
  // ==========================================

  const handleSubmit = (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    sendMessage(input);
  };


  // ==========================================
  // QUICK SUGGESTION
  // ==========================================

  const handleSuggestion = (
    question: string
  ) => {
    sendMessage(question);
  };


  // ==========================================
  // CLEAR CHAT
  // ==========================================

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


  // ==========================================
  // OPEN CHAT
  // ==========================================

  const openChat = () => {
    setIsOpen(true);
  };


  // ==========================================
  // MINIMIZE CHAT
  // ==========================================

  const minimizeChat = () => {
    setIsOpen(false);
    setIsMaximized(false);
  };


  // ==========================================
  // CLOSE CHAT
  // ==========================================

  const closeChat = () => {
    setIsOpen(false);
    setIsMaximized(false);
  };


  // ==========================================
  // MAXIMIZE / RESTORE
  // ==========================================

  const toggleMaximize = () => {
    setIsMaximized(
      (previous) => !previous
    );
  };


  return (
    <>
      {/* FLOATING BUTTON */}
      {!isOpen && (
        <button
          type="button"
          className="chatbot-floating-button"
          onClick={openChat}
          aria-label="Open Coinstep chatbot"
        >
          💬
        </button>
      )}


      {/* CHAT WINDOW */}
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

              <div>
                <h3>
                  Coinstep Assistant
                </h3>

                <div className="chatbot-status">
                  <span className="status-dot" />

                  Online
                </div>
              </div>

            </div>


            {/* HEADER ACTION BUTTONS */}
            <div className="chatbot-header-actions">

              {/* MINIMIZE */}
              <button
                type="button"
                className="chatbot-header-button"
                onClick={minimizeChat}
                aria-label="Minimize chatbot"
                title="Minimize"
              >
                −
              </button>


              {/* MAXIMIZE / RESTORE */}
              <button
                type="button"
                className="chatbot-header-button"
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
                title="Close"
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

                  {message.sender ===
                    "bot" && (
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