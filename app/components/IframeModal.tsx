import React from "react";
import { X } from "lucide-react";

interface IframeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const IframeModal: React.FC<IframeModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={onClose}
      />
      <div className="absolute inset-4 sm:inset-8 bg-white dark:bg-gray-800 rounded-lg shadow-xl flex flex-col">
        <div className="flex items-center justify-between p-4 border-b dark:border-gray-700">
          <h2 className="text-lg font-semibold">AI Assistant</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
            aria-label="Close"
          >
            <X size={20} />
          </button>
        </div>
        <div className="flex-1 relative">
          <iframe
            src="https://www.arsturn.com/minhaj"
            className="absolute inset-0 w-full h-full"
            title="AI Assistant"
          />
        </div>
      </div>
    </div>
  );
};
