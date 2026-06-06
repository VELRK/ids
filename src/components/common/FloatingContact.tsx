"use client";

import React, { useState, useEffect, useRef } from "react";
import { toast } from "react-toastify";

interface Message {
  sender: "bot" | "user";
  text: string;
  isHtml?: boolean;
  hasForm?: boolean;
}

const FloatingContact = () => {
  const [activeWidget, setActiveWidget] = useState<"chatbot" | "email" | null>(null);
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: "bot",
      text: "Hello! 👋 Welcome to IntellectWorks Digital Solutions. How can I help you today?",
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [inputMessage, setInputMessage] = useState("");

  // Chatbot Quick Form State
  const [botFormName, setBotFormName] = useState("");
  const [botFormEmail, setBotFormEmail] = useState("");
  const [botFormMsg, setBotFormMsg] = useState("");
  const [isBotFormSubmitted, setIsBotFormSubmitted] = useState(false);

  // Email Quick Panel State
  const [emailName, setEmailName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [emailMsg, setEmailMsg] = useState("");

  const chatEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll chat body to bottom when messages list or typing state changes
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  // Handle direct WhatsApp click with predefined message
  const handleWhatsAppClick = () => {
    const defaultText = encodeURIComponent(
      "Hello IntellectWorks, I would like to inquire about your web development and digital marketing services."
    );
    window.open(`https://wa.me/919384276909?text=${defaultText}`, "_blank");
  };

  // Handle toggle widget
  const toggleWidget = (widget: "chatbot" | "email") => {
    if (activeWidget === widget) {
      setActiveWidget(null);
    } else {
      setActiveWidget(widget);
    }
  };

  // Bot logic to process query and respond
  const processBotResponse = (query: string) => {
    setIsTyping(true);
    
    // Simulate typing delay
    setTimeout(() => {
      let botText = "";
      let hasForm = false;
      const lowerQuery = query.toLowerCase();

      if (lowerQuery.includes("address") || lowerQuery.includes("location") || lowerQuery.includes("where")) {
        botText = `📍 **Our Address:**<br/>72/6 Masa Complex, Vellapanayakan Pudhur, Saravanampatti, Coimbatore, Tamil Nadu 641035.<br/><br/><a href="https://maps.google.com/?q=72/6+Masa+Complex+Saravanampatti+Coimbatore" target="_blank" rel="noopener noreferrer">📍 View on Google Maps</a>`;
      } else if (lowerQuery.includes("contact") || lowerQuery.includes("phone") || lowerQuery.includes("number") || lowerQuery.includes("call")) {
        botText = `📞 **Contact Us:**<br/>You can reach our helpdesk at **+91 9384276909**.<br/><br/><a href="tel:9384276909" class="theme-btn py-1 px-3" style="font-size: 12px; display: inline-block;">📞 Call Now</a>`;
      } else if (lowerQuery.includes("email") || lowerQuery.includes("mail")) {
        botText = `✉️ **Email Address:**<br/>Contact us at **intellectdigital58@gmail.com**.<br/><br/>You can also fill out the contact form below to compose your message directly:`;
        hasForm = true;
      } else if (lowerQuery.includes("whatsapp") || lowerQuery.includes("chat")) {
        botText = `💬 **WhatsApp Chat:**<br/>Click the link below to chat with us directly:<br/><br/><a href="https://wa.me/919384276909" target="_blank" rel="noopener noreferrer" class="theme-btn py-1 px-3" style="font-size: 12px; display: inline-block; background-color: #25D366; border-color: #25D366;">💬 Chat on WhatsApp</a>`;
      } else if (lowerQuery.includes("hello") || lowerQuery.includes("hi") || lowerQuery.includes("hey") || lowerQuery.includes("greetings")) {
        botText = `Hello! How can I assist you today? You can ask about:<br/>• Our location / address<br/>• Phone number / contact<br/>• Email address<br/>• Or fill our quick message form.`;
      } else if (lowerQuery.includes("service") || lowerQuery.includes("project") || lowerQuery.includes("pricing")) {
        botText = `IntellectWorks provides modern website development, mobile application design, search engine optimization (SEO), and full-scale digital marketing solutions. Feel free to contact our specialists directly via WhatsApp or Email!`;
      } else {
        botText = `Thank you for your question. I can provide our contact details, office location, or help you compose an email query. Please use the quick actions below, or write a question about our "location" or "phone".`;
      }

      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: botText,
          isHtml: true,
          hasForm: hasForm,
        },
      ]);
    }, 1000);
  };

  // Handle text input message submission from Chatbot
  const handleChatSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const userText = inputMessage;
    setMessages((prev) => [...prev, { sender: "user", text: userText }]);
    setInputMessage("");
    processBotResponse(userText);
  };

  // Quick action pills inside Chatbot
  const handleQuickAction = (action: string) => {
    setMessages((prev) => [...prev, { sender: "user", text: action }]);
    processBotResponse(action);
  };

  // Chatbot Embedded Form Submission
  const handleBotFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!botFormName || !botFormEmail || !botFormMsg) {
      toast.error("Please fill in all fields.");
      return;
    }

    setIsBotFormSubmitted(true);
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: `Thank you, **${botFormName}**! I've prepared your message details. Opening your email app to send...`,
          isHtml: true,
        },
      ]);

      // Compose mailto and open client
      const subject = encodeURIComponent(`IntellectWorks Chat Inquiry from ${botFormName}`);
      const body = encodeURIComponent(
        `Name: ${botFormName}\nEmail: ${botFormEmail}\n\nMessage:\n${botFormMsg}`
      );
      window.open(`mailto:intellectdigital58@gmail.com?subject=${subject}&body=${body}`, "_blank");

      // Reset form
      setBotFormName("");
      setBotFormEmail("");
      setBotFormMsg("");
      setIsBotFormSubmitted(false);
    }, 1200);
  };

  // Email Quick Panel Submit Handler
  const handleEmailFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailName || !emailAddress || !emailMsg) {
      toast.error("Please fill in all fields.");
      return;
    }

    toast.info("Preparing email content...");
    
    const subject = encodeURIComponent(`Inquiry from ${emailName}`);
    const body = encodeURIComponent(
      `Name: ${emailName}\nEmail: ${emailAddress}\n\nMessage:\n${emailMsg}`
    );
    window.open(`mailto:intellectdigital58@gmail.com?subject=${subject}&body=${body}`, "_blank");

    // Clear and close
    setEmailName("");
    setEmailAddress("");
    setEmailMsg("");
    setActiveWidget(null);
    toast.success("Redirected to email client successfully!");
  };

  return (
    <>
      {/* Floating Buttons Column */}
      <div className="floating-contact-container">
        {/* WhatsApp Button */}
        <button
          className="floating-btn whatsapp-btn"
          onClick={handleWhatsAppClick}
          aria-label="Chat on WhatsApp"
        >
          <i className="fa-brands fa-whatsapp"></i>
          <span className="floating-btn-tooltip">WhatsApp Us</span>
        </button>

        {/* Email Button */}
        <button
          className={`floating-btn email-btn ${activeWidget === "email" ? "active" : ""}`}
          onClick={() => toggleWidget("email")}
          aria-label="Contact Email"
        >
          <i className="fa-regular fa-envelope"></i>
          <span className="floating-btn-tooltip">Email Us</span>
        </button>

        {/* Chatbot Button */}
        <button
          className={`floating-btn chatbot-btn ${activeWidget === "chatbot" ? "active" : ""}`}
          onClick={() => toggleWidget("chatbot")}
          aria-label="AI Chatbot Help"
        >
          <div className="bot-icon-wrapper">
            <i className="fa-solid fa-robot"></i>
          </div>
          <span className="floating-btn-tooltip">AI Assistant</span>
        </button>
      </div>

      {/* AI Chatbot Window Widget */}
      <div className={`chatbot-window ${activeWidget === "chatbot" ? "active" : ""}`}>
        {/* Header */}
        <div className="chatbot-header">
          <div className="bot-info">
            <div className="bot-avatar-header">
              <i className="fa-solid fa-robot"></i>
              <span className="status-dot"></span>
            </div>
            <div className="bot-details">
              <h5>Intellect AI Bot</h5>
              <span>Active & Online</span>
            </div>
          </div>
          <button className="close-chat-btn" onClick={() => setActiveWidget(null)}>
            <i className="fa-regular fa-xmark"></i>
          </button>
        </div>

        {/* Messages Stream */}
        <div className="chatbot-body">
          {messages.map((msg, index) => (
            <div key={index} className={`chat-message ${msg.sender}`}>
              {msg.sender === "bot" && (
                <div className="msg-avatar">
                  <i className="fa-solid fa-robot"></i>
                </div>
              )}
              <div className="msg-content-wrapper" style={{ width: msg.hasForm ? "100%" : "auto" }}>
                {msg.isHtml ? (
                  <div
                    className="msg-text"
                    dangerouslySetInnerHTML={{ __html: msg.text }}
                  />
                ) : (
                  <div className="msg-text">
                    {msg.text}
                  </div>
                )}

                {/* Embedded quick form within bot response stream if requested */}
                {msg.sender === "bot" && msg.hasForm && !isBotFormSubmitted && (
                  <form onSubmit={handleBotFormSubmit} className="chatbot-embedded-form">
                    <div className="form-group">
                      <label>Your Name</label>
                      <input
                        type="text"
                        placeholder="e.g. John Doe"
                        value={botFormName}
                        onChange={(e) => setBotFormName(e.target.value)}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>Email Address</label>
                      <input
                        type="email"
                        placeholder="e.g. john@example.com"
                        value={botFormEmail}
                        onChange={(e) => setBotFormEmail(e.target.value)}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>Message Details</label>
                      <textarea
                        placeholder="Write message details..."
                        value={botFormMsg}
                        onChange={(e) => setBotFormMsg(e.target.value)}
                        required
                      ></textarea>
                    </div>
                    <button type="submit" className="form-submit-btn">
                      Send Email <i className="fa-regular fa-paper-plane"></i>
                    </button>
                  </form>
                )}
              </div>
            </div>
          ))}

          {/* Typing Animation */}
          {isTyping && (
            <div className="typing-indicator">
              <span></span>
              <span></span>
              <span></span>
            </div>
          )}

          {/* Anchor for auto-scroll */}
          <div ref={chatEndRef} />
        </div>

        {/* Quick Actions Panel */}
        <div className="quick-replies-container">
          <button className="quick-reply-pill" onClick={() => handleQuickAction("Address")}>
            📍 Location
          </button>
          <button className="quick-reply-pill" onClick={() => handleQuickAction("Contact")}>
            📞 Contact
          </button>
          <button className="quick-reply-pill" onClick={() => handleQuickAction("Email")}>
            ✉️ Email Us
          </button>
          <button className="quick-reply-pill" onClick={() => handleQuickAction("WhatsApp")}>
            💬 WhatsApp
          </button>
        </div>

        {/* Text Input Footer */}
        <div className="chatbot-footer">
          <form onSubmit={handleChatSubmit}>
            <input
              type="text"
              className="chat-input"
              placeholder="Ask me something..."
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              disabled={isTyping}
            />
            <button type="submit" className="chat-send-btn" disabled={!inputMessage.trim() || isTyping}>
              <i className="fa-regular fa-paper-plane"></i>
            </button>
          </form>
        </div>
      </div>

      {/* Floating Email Form Window Widget */}
      <div className={`email-quick-panel ${activeWidget === "email" ? "active" : ""}`}>
        <div className="email-header">
          <div className="email-title">
            <i className="fa-regular fa-envelope"></i>
            <span>Send Email Inquiry</span>
          </div>
          <button className="close-email-btn" onClick={() => setActiveWidget(null)}>
            <i className="fa-regular fa-xmark"></i>
          </button>
        </div>

        <form onSubmit={handleEmailFormSubmit} className="email-body">
          <div className="chatbot-embedded-form" style={{ background: "transparent", border: "none", padding: 0 }}>
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                value={emailName}
                onChange={(e) => setEmailName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Email Address</label>
              <input
                type="email"
                placeholder="Enter your email"
                value={emailAddress}
                onChange={(e) => setEmailAddress(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Message Content</label>
              <textarea
                placeholder="Write your message here..."
                value={emailMsg}
                onChange={(e) => setEmailMsg(e.target.value)}
                required
              ></textarea>
            </div>
            <button type="submit" className="form-submit-btn" style={{ marginTop: "10px" }}>
              Send Inquiry <i className="fa-regular fa-paper-plane"></i>
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default FloatingContact;
