import React, { useEffect } from "react";

declare global {
  interface Window {
    ChatWidgetConfig?: {
      webhook: {
        url: string;
        route: string;
      };
      branding: {
        logo: string;
        name: string;
        welcomeText: string;
      };
    };
  }
}

const ChatWidget: React.FC = () => {
  useEffect(() => {
    // Inject glassmorphism styles
    const style = document.createElement("style");
    style.textContent = `
      .chat-widget-container {
        max-width: 400px;
        width: 100%;
        height: 75vh;
        font-family: 'Segoe UI', sans-serif;
        background: rgba(18, 18, 18, 0.6);
        border-radius: 20px;
        box-shadow: 0 12px 40px rgba(0, 0, 0, 0.5);
        backdrop-filter: blur(20px);
        -webkit-backdrop-filter: blur(20px);
        border: 1px solid rgba(255, 255, 255, 0.15);
        overflow: hidden;
        color: #f0f0f0;
      }

      @media (max-width: 480px) {
        .chat-widget-container {
          max-width: 100%;
          height: 85vh;
          border-radius: 0;
        }
      }

      .chat-body,
      .chat-messages,
      .chat-controls {
        background: transparent !important;
        color: #f0f0f0;
      }

      .chat-bubble {
        background: rgba(255, 255, 255, 0.08) !important;
        color: #ffffff !important;
        border: 1px solid rgba(255, 255, 255, 0.25);
        border-radius: 16px;
        padding: 12px 16px;
        margin-bottom: 10px;
        backdrop-filter: blur(12px);
        -webkit-backdrop-filter: blur(12px);
        box-shadow: 0 6px 16px rgba(0,0,0,0.3);
      }

      .chat-textarea {
        background: rgba(255, 255, 255, 0.06);
        color: #ffffff !important;
        border: 1px solid rgba(255, 255, 255, 0.25);
        padding: 12px;
        border-radius: 14px;
        width: 100%;
        resize: none;
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        font-size: 14px;
      }

      .chat-textarea::placeholder {
        color: #cccccc !important;
      }

      .chat-submit {
        background: linear-gradient(135deg, #7b61ff, #3ec9ff);
        border: none;
        border-radius: 14px;
        padding: 10px 12px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: background 0.3s ease;
        box-shadow: 0 6px 14px rgba(62, 201, 255, 0.4);
      }

      .chat-submit:hover {
        background: linear-gradient(135deg, #917bff, #56d6ff);
      }

      .chat-submit svg {
        stroke: #ffffff !important;
      }

      .chat-footer,
      .chat-footer-link {
        display: none !important;
        visibility: hidden !important;
        height: 0 !important;
        padding: 0 !important;
        margin: 0 !important;
      }
    `;
    document.head.appendChild(style);

    // Set up the chat widget config
    window.ChatWidgetConfig = {
      webhook: {
        url: "https://n8n-new-vyxl.onrender.com/webhook/698c752f-0f32-4641-9765-01a0f7d93061/chat",
        route: "general",
      },
      branding: {
        logo: "https://assets-v2.lottiefiles.com/a/5b038ad2-4fd1-11ef-8f43-075ce7e78c34/qhhkJZzS4E.gif",
        name: "MiNHAJ AI",
        welcomeText: "Hallo! How can I assist you today? 😊",
      },
    };

    // Dynamically remove chat footer
    const hideFooter = () => {
      document
        .querySelectorAll(".chat-footer, .chat-footer-link")
        .forEach((el) => el.remove());
    };

    const observer = new MutationObserver(hideFooter);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      document.head.removeChild(style);
    };
  }, []);

  return null; // This component doesn't render UI directly
};

export default ChatWidget;
