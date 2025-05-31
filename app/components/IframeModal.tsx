import React, { useState, useEffect } from "react";
import { X } from "lucide-react";

interface IframeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const IframeModal: React.FC<IframeModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [retryCount, setRetryCount] = useState(0);

  const maxRetries = 3; // Maximum number of retries

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (isOpen) {
      // Set a timeout to detect if the iframe fails to load
      timer = setTimeout(() => {
        if (isLoading && retryCount < maxRetries) {
          setRetryCount(retryCount + 1);
          setIsLoading(true); // Trigger reloading
        } else if (retryCount >= maxRetries) {
          setHasError(true); // Show error after max retries
        }
      }, 5000); // Adjust timeout as needed
    }

    return () => clearTimeout(timer);
  }, [isOpen, isLoading, retryCount]);

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
          {hasError ? (
            <div className="flex flex-col items-center justify-center h-full text-center p-4">
              <p className="text-lg font-semibold text-red-600">
                The webpage could not be loaded.
              </p>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                If you can&apos;t open the screen, please try opening this
                website in another browser:
              </p>
              <a
                href="https://www.arsturn.com/minhaj"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
              >
                Open in Browser
              </a>
            </div>
          ) : (
            <>
              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-white dark:bg-gray-800 z-10">
                  <p className="text-gray-500">Loading...</p>
                </div>
              )}
              <iframe
                src="https://resilient-macaron-fb6823.netlify.app/"
                className="absolute inset-0 w-full h-full"
                title="AI Assistant"
                onLoad={() => {
                  setIsLoading(false);
                  setHasError(false);
                }}
                onError={() => {
                  setIsLoading(false);
                  setHasError(true);
                }}
                sandbox="allow-scripts allow-same-origin"
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};
