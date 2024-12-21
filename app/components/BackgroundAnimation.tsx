import React from 'react';

const BackgroundAnimation: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      <svg xmlns="http://www.w3.org/2000/svg" width="760" height="668" className="absolute top-0 left-0 opacity-30 animate-pulse">
        <g filter="url(#a)">
          <path fill="url(#b)" d="m93 93 574 386.9L340.816 575 93 93Z" />
        </g>
        <defs>
          <linearGradient id="b" x1="-19.293" x2="146.25" y1="251.657" y2="599.961" gradientUnits="userSpaceOnUse">
            <stop stopColor="#374151" stopOpacity=".64"/>
            <stop offset=".382" stopColor="#374151" stopOpacity=".16"/>
            <stop offset="1" stopColor="#374151" stopOpacity="0"/>
          </linearGradient>
          <filter id="a" width="758.843" height="666.843" x=".578" y=".578" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur result="effect1_foregroundBlur_2109_4735" stdDeviation="46.211"/>
          </filter>
        </defs>
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" width="760" height="668" className="absolute bottom-0 right-0 opacity-30 animate-pulse">
        <g filter="url(#c)">
          <path fill="url(#d)" d="m93 93 574 386.9L340.816 575 93 93Z" />
        </g>
        <defs>
          <linearGradient id="d" x1="-19.293" x2="146.25" y1="251.657" y2="599.961" gradientUnits="userSpaceOnUse">
            <stop stopColor="#6366F1" stopOpacity=".8"/>
            <stop offset=".382" stopColor="#6366F1" stopOpacity=".32"/>
            <stop offset="1" stopColor="#6366F1" stopOpacity="0"/>
          </linearGradient>
          <filter id="c" width="758.843" height="666.843" x=".578" y=".578" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur result="effect1_foregroundBlur_2109_4735" stdDeviation="46.211"/>
          </filter>
        </defs>
      </svg>
    </div>
  );
};

export default BackgroundAnimation;

