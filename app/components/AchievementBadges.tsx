import React, { useState, useEffect, useRef } from "react";

// Define types for Badge and Certificate items
interface Badge {
  name: string;
  image: string;
}

interface Certificate {
  name: string;
  date: string;
  image: string;
  provider: string;
  id: string; // Fixed ID for certificates
}

interface ScrollingSectionProps {
  items: Badge[] | Certificate[];
  type: "badges" | "certificates";
}

const AchievementBadges: React.FC = () => {
  const [isPaused, setIsPaused] = useState<boolean>(false);

  const containerRefs = {
    badges: useRef<HTMLDivElement | null>(null),
    certificates: useRef<HTMLDivElement | null>(null),
  };

  const badges: Badge[] = [
    {
      name: "QuickDraw",
      image:
        "https://github.githubassets.com/assets/quickdraw-default--light-8f798b35341a.png",
    },
    {
      name: "YOLO",
      image:
        "https://github.githubassets.com/assets/yolo-default-be0bbff04951.png",
    },
    {
      name: "Pull Shark",
      image:
        "https://github.githubassets.com/assets/pull-shark-default-498c279a747d.png",
    },
    {
      name: "QuickDraw",
      image:
        "https://github.githubassets.com/assets/quickdraw-default--light-8f798b35341a.png",
    },
    {
      name: "YOLO",
      image:
        "https://github.githubassets.com/assets/yolo-default-be0bbff04951.png",
    },
    {
      name: "Pull Shark",
      image:
        "https://github.githubassets.com/assets/pull-shark-default-498c279a747d.png",
    },
  ];

  const certificates: Certificate[] = [
    {
      name: "AWS Cloud Practitioner",
      date: "2024",
      image: "https://i.postimg.cc/wMh9KrzK/minhaaj-t-github-business-card.png",
      provider: "Amazon Web Services",
      id: "AWS2024",
    },
    {
      name: "Microsoft Azure Fundamentals",
      date: "2024",
      image: "https://i.postimg.cc/wMh9KrzK/minhaaj-t-github-business-card.png",
      provider: "Microsoft",
      id: "MSAzure2024",
    },
    {
      name: "Google Cloud Associate",
      date: "2024",
      image: "https://i.postimg.cc/wMh9KrzK/minhaaj-t-github-business-card.png",
      provider: "Google Cloud",
      id: "GCP2024",
    },
    {
      name: "CompTIA Security+",
      date: "2024",
      image: "https://i.postimg.cc/wMh9KrzK/minhaaj-t-github-business-card.png",
      provider: "CompTIA",
      id: "SecurityPlus2024",
    },
    {
      name: "CISSP",
      date: "2024",
      image: "https://i.postimg.cc/wMh9KrzK/minhaaj-t-github-business-card.png",
      provider: "ISC²",
      id: "CISSP2024",
    },
  ];

  // Auto-scroll logic
  useEffect(() => {
    const autoScroll = (container: HTMLDivElement | null, reverse = false) => {
      if (container && !isPaused) {
        const scrollAmount = reverse ? -1 : 1;
        container.scrollLeft += scrollAmount;

        // Reset scroll position when reaching the end
        if (reverse) {
          if (container.scrollLeft <= 0) {
            container.scrollLeft = container.scrollWidth / 2;
          }
        } else {
          if (
            container.scrollLeft >=
            (container.scrollWidth - container.clientWidth) / 2
          ) {
            container.scrollLeft = 0;
          }
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
      Object.values(intervals).forEach((interval) => clearInterval(interval));
    };
  }, [isPaused]);

  const ScrollingSection: React.FC<ScrollingSectionProps> = ({
    items,
    type,
  }) => (
    <div
      className="relative h-48 overflow-x-auto overflow-y-hidden rounded-lg mb-8"
      ref={containerRefs[type]}
      style={{
        scrollbarWidth: "none" /* Firefox */,
        msOverflowStyle: "none" /* IE and Edge */,
      }}
    >
      <div className="flex gap-6 p-4 min-w-max">
        {type === "badges"
          ? // Badges section - repeated 3 times for smooth infinite scroll
            [...items, ...items, ...items].map((badge, index) => (
              <div
                key={`${badge.name}-${index}`}
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
          : // Certificates section - repeated 3 times for smooth infinite scroll
            [...items, ...items, ...items].map((cert, index) => (
              <div
                // key={cert.id ? cert.id : `${index}`} // Ensure unique key for each certificate
                className="flex flex-col justify-between w-80 h-40 p-4 bg-white rounded-lg shadow-md transition-transform hover:scale-105 dark:bg-gray-800"
              >
                <div className="flex gap-4">
                  <div className="w-16 h-16 rounded-lg overflow-hidden">
                    <img
                      src={cert.image}
                      // alt={cert.provider || "Certificate"} // Fallback for missing provider
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-800 dark:text-gray-100">
                      {cert.name}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {/* {cert.provider || "Provider not available"}{" "} */}
                      {/* Fallback text */}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {/* Issued {cert.date} */}
                    </p>
                  </div>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-xs text-gray-400">
                    {/* ID: {cert.id || "N/A"} Fallback text for missing ID */}
                  </span>
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
    <div className="w-full max-w-6xl mx-auto p-4 mt-12">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
        Achievement Badges
      </h2>
      <ScrollingSection items={badges} type="badges" />

      <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
        Certificates
      </h2>
      <ScrollingSection items={certificates} type="certificates" />
    </div>
  );
};

export default AchievementBadges;
