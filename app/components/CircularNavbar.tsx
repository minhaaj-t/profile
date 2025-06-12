import React from 'react';
import { Home, Folder, Code2, MessageSquare, Grid } from 'lucide-react';

interface CircularNavbarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export const CircularNavbar: React.FC<CircularNavbarProps> = ({
  activeSection,
  setActiveSection,
}) => {
  const navItems = [
    { className: 'home', icon: Home },
    { className: 'projects', icon: Folder },
    { className: 'skills', icon: Code2 },
    { className: 'contact', icon: MessageSquare },
    { className: 'social', icon: Grid },
  ];

  const handleClick = (className: string) => {
    const element = document.querySelector(`.${className}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(className);
    }
  };

  return (
    <nav className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-40">
      <div className="bg-white dark:bg-gray-800 rounded-full shadow-lg p-2 flex items-center">
        {navItems.map((item) => (
          <button
            key={item.className}
            onClick={() => handleClick(item.className)}
            className={`p-3 rounded-full transition-colors duration-200 ${
              activeSection === item.className
                ? 'bg-blue-500 text-white'
                : 'text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
            aria-label={`Go to ${item.className}`}
          >
            <item.icon size={20} />
          </button>
        ))}
      </div>
    </nav>
  );
};
