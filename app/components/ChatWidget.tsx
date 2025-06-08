import React, { useEffect } from "react";

declare global {
  interface Window {
    ChatWidgetConfig?: unknown;
  }
}

const ChatWidget: React.FC = () => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      const style = document.createElement("style");
      style.textContent = `
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
          bottom: 16px !important;
          right: 24px !important;
          width: 52px !important;
          height: 52px !important;
          border-radius: 50% !important;
          background-image: url('https://media3.giphy.com/avatars/jasperai/zladbSgn7Oxi.gif') !important;
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
          bottom: 80px !important;
          max-width: 100vw !important;
          max-height: 90vh !important;
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

        /* Mobile-specific tweaks */
        @media (max-width: 768px) {
          .chat-launcher {
            bottom: 20px !important;
            right: 16px !important;
            width: 48px !important;
            height: 48px !important;
          }

          .chat-modal {
            bottom: 76px !important;
            left: 4px !important;
            right: 4px !important;
            width: auto !important;
            max-height: 85vh !important;
          }
        }
      `;
      document.head.appendChild(style);

      const observer = new MutationObserver(() => {
        document.querySelectorAll(".chat-footer-link").forEach(el => el.remove());
      });
      observer.observe(document.body, { childList: true, subtree: true });

      window.ChatWidgetConfig = {
        webhook: {
          url: "https://n8n-new-vyxl.onrender.com/webhook/698c752f-0f32-4641-9765-01a0f7d93061/chat",
          route: "general",
        },
        branding: {
          logo: "https://assets-v2.lottiefiles.com/a/763bebc2-cc0f-11ef-a1e0-db3c7723dda0/3dM80dk50G.gif",
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

      const script = document.createElement("script");
      script.src = "https://cdn.jsdelivr.net/gh/funtastic418/chat-widget@main/chat-widget.js";
      script.async = true;
      document.body.appendChild(script);

      return () => {
        observer.disconnect();
        document.head.removeChild(style);
        document.body.removeChild(script);
      };
    }, 10000);

    return () => clearTimeout(timeout);
  }, []);

  return null;
};

export default ChatWidget;
