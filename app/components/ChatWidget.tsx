import React, { useEffect } from "react";

declare global {
  interface Window {
    ChatWidgetConfig?: unknown;
  }
}

const ChatWidget: React.FC = () => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      // Inject isolated styles
      const style = document.createElement("style");
      style.textContent = `
        /* FLOATING BUTTON - DOES NOT AFFECT LAYOUT */
        .chat-launcher {
          position: fixed !important;
          bottom: 88px !important;
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

        /* Hide SVG and text inside the launcher */
        .chat-launcher svg,
        .chat-launcher-text {
          display: none !important;
        }

        /* Ensure chat modal and container are overlay-only */
        .chat-container,
        .chat-widget,
        .chat-modal {
          position: fixed !important;
          max-width: 100vw !important;
          max-height: 100vh !important;
          z-index: 99998 !important;
        }

        /* Hide branding/footer */
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

      // Clean up footer if injected later
      const observer = new MutationObserver(() => {
        document.querySelectorAll(".chat-footer, .chat-footer-link").forEach(el => el.remove());
      });
      observer.observe(document.body, { childList: true, subtree: true });

      // Chat widget config
      window.ChatWidgetConfig = {
        webhook: {
          url: "https://n8n-new-vyxl.onrender.com/webhook/698c752f-0f32-4641-9765-01a0f7d93061/chat",
          route: "general"
        },
        branding: {
          logo: "https://assets-v2.lottiefiles.com/a/5b038ad2-4fd1-11ef-8f43-075ce7e78c34/qhhkJZzS4E.gif",
          name: "MiNHAJ AI",
          welcomeText: "Hallo! AI Assistent is here",
          responseTimeText: "Muhammed Minhaj Mahroof"
        },
        style: {
          primaryColor: "#7b61ff",
          secondaryColor: "#3ec9ff",
          position: "right",
          backgroundColor: "#121212",
          fontColor: "#f0f0f0"
        },
        behaviour: {
          requireContactDetails: false
        }
      };

      // Inject script
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
