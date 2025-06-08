import React, { useEffect } from "react";

declare global {
  interface Window {
    ChatWidgetConfig?: unknown;
  }
}

const ChatWidget: React.FC = () => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      // Inject custom styles
      const style = document.createElement("style");
      style.textContent = `
        /* === Chat Styling === */
        .chat-body,
        .chat-messages,
        .chat-controls {
          background: transparent !important;
          color: #ffffff;
        }

        .chat-bubble {
          background: rgba(255, 255, 255, 0.1) !important;
          color: #ffffff !important;
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 16px;
          padding: 10px 14px;
          margin-bottom: 8px;
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        }

        .chat-launcher {
          position: fixed !important;
          bottom: 24px !important; /* Updated position */
          right: 24px !important;
          width: 45px !important;
          height: 45px !important;
          border-radius: 50% !important;
          background-image: url('https://assets-v2.lottiefiles.com/a/5b038ad2-4fd1-11ef-8f43-075ce7e78c34/qhhkJZzS4E.gif') !important;
          background-size: cover !important;
          background-position: center !important;
          background-repeat: no-repeat !important;
          background-color: transparent !important;
          border: none !important;
          cursor: pointer !important;
          z-index: 99999 !important;
          padding: 0 !important;
          display: block !important;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.3) !important;
        }

        .chat-launcher svg,
        .chat-launcher-text {
          display: none !important;
        }

        .chat-container,
        .chat-widget,
        .chat-modal {
          position: fixed !important;
          max-width: 100vw !important;
          max-height: 100vh !important;
          z-index: 99998 !important;
        }

        .chat-footer-link {
          display: none !important;
          visibility: hidden !important;
          height: 0 !important;
          padding: 0 !important;
          margin: 0 !important;
        }

        .chat-textarea {
          background: rgba(255, 255, 255, 0.08);
          color: #ffffff !important;
          border: 1px solid rgba(255, 255, 255, 0.2);
          padding: 10px;
          border-radius: 12px;
          width: 100%;
          resize: none;
          backdrop-filter: blur(6px);
        }

        /* === Responsive position for mobile === */
        @media (max-width: 768px) {
          .chat-launcher {
            bottom: 70px !important;
            right: 16px !important;
          }
        }
      `;
      document.head.appendChild(style);

      const observer = new MutationObserver(() => {
        document.querySelectorAll(".chat-footer-link").forEach(el => el.remove());
      });
      observer.observe(document.body, { childList: true, subtree: true });

      // Chat widget config
      window.ChatWidgetConfig = {
        webhook: {
          url: "https://n8n-new-vyxl.onrender.com/webhook/698c752f-0f32-4641-9765-01a0f7d93061/chat",
          route: "general",
        },
        branding: {
          logo: "https://assets-v2.lottiefiles.com/a/5b038ad2-4fd1-11ef-8f43-075ce7e78c34/qhhkJZzS4E.gif",
          name: "MiNHAJ AI",
          welcomeText: "Hallo! AI Assistent is here",
          responseTimeText: "Muhammed Minhaj Mahroof",
        },
        style: {
          primaryColor: "#7b61ff",
          secondaryColor: "#3ec9ff",
          position: "right",
          backgroundColor: "#121212",
          fontColor: "#f0f0f0",
        },
        behaviour: {
          requireContactDetails: false,
        }
      };

      // Inject widget script
      const script = document.createElement("script");
      script.src = "https://cdn.jsdelivr.net/gh/funtastic418/chat-widget@main/chat-widget.js";
      script.async = true;
      document.body.appendChild(script);

      // Cleanup
      return () => {
        observer.disconnect();
        document.head.removeChild(style);
        document.body.removeChild(script);
      };
    }, 10000); // 10s delay

    return () => clearTimeout(timeout);
  }, []);

  return null;
};

export default ChatWidget;
