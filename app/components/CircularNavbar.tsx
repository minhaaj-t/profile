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
    { id: 'home', icon: Home },
    { id: 'projects', icon: Folder },
    { id: 'skills', icon: Code2 },
    { id: 'contact', icon: MessageSquare },
    { id: 'social', icon: Grid },
  ];

  return (
    <nav className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-40">
      <div className="bg-white dark:bg-gray-800 rounded-full shadow-lg p-2 flex items-center">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveSection(item.id)}
            className={`p-3 rounded-full transition-colors duration-200 ${
              activeSection === item.id
                ? 'bg-blue-500 text-white'
                : 'text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
            aria-label={`Go to ${item.id}`}
          >
            <item.icon size={20} />
          </button>
        ))}
      </div>
    </nav>
  );
};

