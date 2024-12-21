import React from 'react';

interface GradientTitleProps {
  children: React.ReactNode;
}

const GradientTitle: React.FC<GradientTitleProps> = ({ children }) => {
  return (
    <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl mb-8 bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text animate-gradient-x">
      {children}
    </h2>
  );
};

export default GradientTitle;

