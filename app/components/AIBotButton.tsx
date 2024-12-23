import React, { useState } from "react";

// AIBotButton component
const AIBotButton: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  const [hovered, setHovered] = useState(false); // State to manage hover effect

  // Helper to detect dark mode
  const isDarkMode =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  return (
    <div
      className="fixed bottom-24 right-8 z-50 p-0 w-16 h-16 sm:w-10 sm:h-10 lg:w-14 lg:h-14 rounded-full transform transition-all duration-500 hover:scale-110 focus:outline-none"
      style={{
        // Adjust outer shadow based on light or dark mode with custom shadow color in dark mode
        boxShadow: hovered
          ? isDarkMode
            ? "0 10px 30px rgba(173, 216, 230, 0.6)" // Light blue shadow for dark mode on hover
            : "0 10px 30px rgba(0, 0, 0, 0.3)" // Darker shadow for light mode on hover
          : isDarkMode
          ? "0 6px 18px rgba(173, 216, 230, 0.5)" // Light blue shadow for dark mode when not hovered
          : "0 6px 18px rgba(0, 0, 0, 0.3)", // Regular shadow for light mode when not hovered
        transition: "box-shadow 0.3s ease, transform 0.3s ease",
      }}
    >
      <button
        onClick={onClick}
        onMouseEnter={() => setHovered(true)} // Set hovered state to true on hover
        onMouseLeave={() => setHovered(false)} // Set hovered state to false when hover ends
        className="w-full h-full flex items-center justify-center p-0 border-none cursor-pointer relative overflow-hidden"
        aria-label="Open AI Assistant"
      >
        {/* GIF Image */}
        <img
          src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExMjN1eDkxancyOGltY3N5dW82M2N3eW9zZjBmOTMyenh4dWR6dmNjYiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/uZm0pXOiivOlp3bWqm/giphy.gif"
          alt="GIF"
          className="w-full h-full object-cover rounded-full shadow-inner transition-shadow duration-300"
          style={{
            objectPosition: "center center",
            // Adjust inner shadow for dark mode with stronger contrast
            boxShadow: hovered
              ? isDarkMode
                ? "inset 0 6px 18px rgba(173, 216, 230, 0.7)" // Inner light blue shadow for dark mode on hover
                : "inset 0 6px 18px rgba(0, 0, 0, 0.6)" // Stronger inner shadow for light mode on hover
              : isDarkMode
              ? "inset 0 4px 12px rgba(173, 216, 230, 0.5)" // Inner light blue shadow for dark mode when not hovered
              : "inset 0 4px 12px rgba(0, 0, 0, 0.5)", // Regular inner shadow for light mode
          }}
        />

        {/* SVG Animation */}
        <svg
          viewBox="0 0 120 120"
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        >
          <circle cx="30" cy="60" r="5" fill="white">
            <animate
              attributeName="opacity"
              values="0;1;0"
              dur="1s"
              begin="0s"
              repeatCount="indefinite"
              keyTimes="0;0.5;1"
            />
            <animate
              attributeName="r"
              values="5;10;5"
              dur="1s"
              begin="0s"
              repeatCount="indefinite"
              keyTimes="0;0.5;1"
            />
          </circle>
          <circle cx="60" cy="60" r="5" fill="white">
            <animate
              attributeName="opacity"
              values="0;1;0"
              dur="1s"
              begin="0.3s"
              repeatCount="indefinite"
              keyTimes="0;0.5;1"
            />
            <animate
              attributeName="r"
              values="5;10;5"
              dur="1s"
              begin="0.3s"
              repeatCount="indefinite"
              keyTimes="0;0.5;1"
            />
          </circle>
          <circle cx="90" cy="60" r="5" fill="white">
            <animate
              attributeName="opacity"
              values="0;1;0"
              dur="1s"
              begin="0.6s"
              repeatCount="indefinite"
              keyTimes="0;0.5;1"
            />
            <animate
              attributeName="r"
              values="5;10;5"
              dur="1s"
              begin="0.6s"
              repeatCount="indefinite"
              keyTimes="0;0.5;1"
            />
          </circle>
        </svg>
      </button>
    </div>
  );
};

export default AIBotButton;
