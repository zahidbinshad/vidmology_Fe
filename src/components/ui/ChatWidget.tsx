"use client";

import { useState, useRef, useEffect } from "react";
import { BsRobot } from "react-icons/bs";
import { IoClose, IoSend } from "react-icons/io5";

type Message = {
  id: number;
  role: "user" | "bot";
  text: string;
};

const INITIAL_MESSAGES: Message[] = [
  { id: 0, role: "bot", text: "Hi! I'm Elden, your personal recruitment coach. How can I help you today?" },
];

export function ChatWidget() {
  const [open, setOpen]       = useState(false);
  const [input, setInput]     = useState("");
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open]);

  const send = () => {
    const text = input.trim();
    if (!text) return;
    const userMsg: Message = { id: Date.now(), role: "user", text };
    const botMsg: Message  = { id: Date.now() + 1, role: "bot", text: "Thanks for your message! Our coaching team will respond shortly." };
    setMessages((prev) => [...prev, userMsg, botMsg]);
    setInput("");
  };

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); send(); }
  };

  return (
    <>
      {/* Floating tab button */}
      <button
        onClick={() => setOpen((o) => !o)}
        className={`chat-widget-btn${open ? " chat-widget-btn--hidden" : ""}`}
        aria-label="Open Elden Plus Coach"
      >
        <span className="chat-widget-btn-text">Elden Plus Coach</span>
        <BsRobot size={20} color="#fff" aria-hidden />
      </button>

      {/* Chat panel — floating, non-blocking */}
      <div className={`chat-widget-panel${open ? " chat-widget-panel--open" : ""}`}>
        {/* Header */}
        <div className="chat-widget-header">
          <div className="chat-widget-header-info">
            <div className="chat-widget-avatar">
              <BsRobot size={18} color="#fff" />
            </div>
            <div>
              <p className="chat-widget-header-title">Elden Plus Coach</p>
              <p className="chat-widget-header-sub">AI Recruitment Coach</p>
            </div>
          </div>
          <button onClick={() => setOpen(false)} className="chat-widget-close" aria-label="Close chat">
            <IoClose size={20} />
          </button>
        </div>

        {/* Messages */}
        <div className="chat-widget-messages">
          {messages.map((msg) => (
            <div key={msg.id} className={`chat-msg chat-msg--${msg.role}`}>
              {msg.role === "bot" && (
                <div className="chat-msg-avatar">
                  <BsRobot size={13} color="#fff" />
                </div>
              )}
              <div className="chat-msg-bubble">{msg.text}</div>
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Input */}
        <div className="chat-widget-input-wrap">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKey}
            placeholder="Ask Elden anything..."
            className="chat-widget-input"
            rows={1}
          />
          <button onClick={send} className="chat-widget-send" disabled={!input.trim()} aria-label="Send message">
            <IoSend size={16} />
          </button>
        </div>
      </div>
    </>
  );
}
