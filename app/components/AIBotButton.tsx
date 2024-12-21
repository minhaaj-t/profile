import React, { useState } from "react";

// AIBotButton component
const AIBotButton: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  const [hovered, setHovered] = useState(false); // State to manage hover effect

  return (
    <div
      className="fixed bottom-24 right-8 z-50 p-4 w-16 h-16 rounded-full shadow-lg transform transition-all duration-500 hover:scale-110 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 bg-gradient-to-r from-blue-500 to-blue-400"
      style={{
        transition: "background-color 1s ease, transform 0.3s ease",
      }}
    >
      <button
        onClick={onClick}
        onMouseEnter={() => setHovered(true)} // Set hovered state to true on hover
        onMouseLeave={() => setHovered(false)} // Set hovered state to false when hover ends
        className="w-full h-full flex items-center justify-center text-white font-bold text-xl relative"
        aria-label="Open AI Assistant"
      >
        {/* Show AI or Hey based on hover state */}
        <span
          className={`transition-all duration-300 ${
            hovered ? "opacity-0" : "opacity-100"
          } absolute`}
        >
          AI
        </span>
        <span
          className={`transition-all duration-300 ${
            hovered ? "opacity-100" : "opacity-0"
          } absolute`}
        >
          Hey
        </span>
      </button>
    </div>
  );
};

// Main component to show the AIBotButton
const AIBotPage: React.FC = () => {
  const handleClick = () => {
    alert("AI Assistant Button Clicked!");
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <h1 className="text-3xl font-semibold mb-8">AI Bot Button Page</h1>
      <AIBotButton onClick={handleClick} />
    </div>
  );
};

export default AIBotButton;
