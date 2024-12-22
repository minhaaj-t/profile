import React, { useState, useEffect, useRef } from "react";

interface Badge {
  name: string;
  image: string;
}

interface Certificate {
  name: string;
  image: string;
  id: string; // Keeping the id for the key prop, but not displaying it
}

const AchievementBadges: React.FC = () => {
  const [isPaused, setIsPaused] = useState<boolean>(false);

  const containerRefs = {
    badges: useRef<HTMLDivElement | null>(null),
    certificates: useRef<HTMLDivElement | null>(null),
  };

  // Dummy data for badges and certificates
  const badges: Badge[] = [
    {
      name: "QuickDraw",
      image:
        "https://github.githubassets.com/assets/quickdraw-default--light-8f798b35341a.png",
    },
    {
      name: "Code Warrior",
      image:
        "https://github.githubassets.com/assets/quickdraw-default--light-8f798b35341a.png",
    },
    {
      name: "Master Coder",
      image:
        "https://github.githubassets.com/assets/quickdraw-default--light-8f798b35341a.png",
    },
  ];

  const certificates: Certificate[] = [
    {
      name: "AWS Cloud Practitioner",
      image: "https://i.postimg.cc/wMh9KrzK/minhaaj-t-github-business-card.png",
      id: "AWS2024",
    },
    {
      name: "Google Cloud Certified",
      image: "https://i.postimg.cc/wMh9KrzK/minhaaj-t-github-business-card.png",
      id: "GC2024",
    },
    {
      name: "Microsoft Azure Fundamentals",
      image: "https://i.postimg.cc/wMh9KrzK/minhaaj-t-github-business-card.png",
      id: "AZF2024",
    },
  ];

  useEffect(() => {
    const autoScroll = (container: HTMLDivElement | null, reverse = false) => {
      if (container && !isPaused) {
        const scrollAmount = reverse ? -1 : 1;
        container.scrollLeft += scrollAmount;

        if (reverse && container.scrollLeft <= 0) {
          container.scrollLeft = container.scrollWidth / 2;
        } else if (
          !reverse &&
          container.scrollLeft >=
            (container.scrollWidth - container.clientWidth) / 2
        ) {
          container.scrollLeft = 0;
        }
      }
    };

    const intervals = {
      badges: setInterval(() => autoScroll(containerRefs.badges.current), 50),
      certificates: setInterval(
        () => autoScroll(containerRefs.certificates.current, true),
        50
      ),
    };

    return () => {
      Object.values(intervals).forEach(clearInterval);
    };
  }, [isPaused]);

  const ScrollingSection: React.FC<{
    items: Badge[] | Certificate[];
    type: "badges" | "certificates";
  }> = ({ items, type }) => (
    <div
      ref={containerRefs[type]}
      className="relative h-48 overflow-x-auto overflow-y-hidden rounded-lg mb-8"
      style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
    >
      <div className="flex gap-6 p-4 min-w-max">
        {type === "badges"
          ? [...items, ...items, ...items].map((badge, index) => (
              <div
                key={`${badge.name}-${index}`} // Retain this key for badges
                className="flex flex-col items-center transition-transform hover:scale-110"
              >
                <div className="w-24 h-24 overflow-hidden">
                  <img
                    src={badge.image}
                    alt={badge.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="mt-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                  {badge.name}
                </span>
              </div>
            ))
          : [...items, ...items, ...items].map((cert, index) => (
              <div className="flex flex-col justify-between w-80 h-40 p-4 bg-white rounded-lg shadow-md transition-transform hover:scale-105 dark:bg-gray-800">
                <div className="flex gap-4">
                  <div className="w-16 h-16 rounded-lg overflow-hidden">
                    <img
                      src={cert.image}
                      alt="Certificate"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-800 dark:text-gray-100">
                      {cert.name}
                    </h3>
                  </div>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-green-600 font-medium">
                      Verified
                    </span>
                    <div className="w-8 h-8 bg-green-50 rounded-full flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-green-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
      </div>
    </div>
  );

  return (
    <div className="p-6 bg-gray-100 dark:bg-gray-900">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6">
        Achievement Badges & Certificates
      </h2>

      <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
        Badges
      </h3>
      <ScrollingSection items={badges} type="badges" />

      <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
        Certificates
      </h3>
      <ScrollingSection items={certificates} type="certificates" />
    </div>
  );
};

export default AchievementBadges;
