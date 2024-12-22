import React, { useState, useEffect } from "react";

// Types
interface FreelanceService {
  title: string;
  price: string;
  features: string[];
}

interface Service {
  title: string;
  description: string;
}

interface Language {
  name: string;
  level: string;
  progress: number;
}

interface TechnicalSkill {
  name: string;
  level: number;
}

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
}

export const PortfolioHome: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  // Components
  const Card: React.FC<CardProps> = ({ children, className = "" }) => (
    <div
      className={`
        bg-white dark:bg-gray-800 
        rounded-lg shadow-lg 
        hover:shadow-xl dark:shadow-gray-900/30 
        transition-all duration-300 
        ${className}
      `}
    >
      {children}
    </div>
  );

  const Badge: React.FC<BadgeProps> = ({ children, className = "" }) => (
    <span
      className={`
        inline-flex items-center 
        px-3 py-1.5 
        rounded-full 
        text-sm font-medium 
        bg-blue-100 dark:bg-blue-900/30 
        text-blue-800 dark:text-blue-200 
        transition-colors duration-300
        hover:bg-blue-200 dark:hover:bg-blue-900/50
        ${className}
      `}
    >
      {children}
    </span>
  );

  const Button: React.FC<ButtonProps> = ({
    children,
    onClick,
    className = "",
  }) => (
    <button
      onClick={onClick}
      className={`
        p-3 rounded-lg 
        bg-gray-100 dark:bg-gray-800 
        hover:bg-gray-200 dark:hover:bg-gray-700 
        transition-colors duration-300 
        text-gray-800 dark:text-gray-200
        ${className}
      `}
    >
      {children}
    </button>
  );

  // Data
  const freelanceServices: FreelanceService[] = [
    {
      title: "AI Chatbot Integration",
      price: "Starting from $999",
      features: [
        "Custom ChatGPT Integration",
        "Intelligent Customer Support",
        "Natural Language Processing",
        "24/7 AI-Powered Assistance",
      ],
    },
    {
      title: "Business Suite Solutions",
      price: "Starting from $2499",
      features: [
        "Integrated CRM System",
        "ERP Implementation",
        "HR Management Portal",
        "Analytics Dashboard",
      ],
    },
    {
      title: "Portfolio Development",
      price: "Starting from $799",
      features: [
        "Custom Design",
        "Responsive Layout",
        "SEO Optimization",
        "Content Strategy",
      ],
    },
  ];

  const services: Service[] = [
    {
      title: "Web Development",
      description:
        "Creating modern, responsive web applications with cutting-edge technologies",
    },
    {
      title: "App Development",
      description: "Building native and cross-platform mobile applications",
    },
    {
      title: "Technical Support",
      description:
        "24/7 maintenance and support for your digital infrastructure",
    },
  ];

  const languages: Language[] = [
    { name: "Malayalam", level: "Native", progress: 100 },
    { name: "English", level: "Professional", progress: 95 },
    { name: "Hindi", level: "Professional", progress: 90 },
    { name: "Tamil", level: "Conversational", progress: 75 },
  ];

  const technicalSkills: TechnicalSkill[] = [
    { name: "Next.js", level: 90 },
    { name: "React", level: 95 },
    { name: "Node.js", level: 85 },
    { name: "React Native", level: 88 },
    { name: "Laravel", level: 92 },
    { name: "WordPress", level: 80 },
    { name: "AWS", level: 85 },
    { name: "MongoDB", level: 87 },
  ];

  const softSkills: string[] = [
    "Strategic Problem Solving",
    "Cross-functional Leadership",
    "Agile Project Management",
    "Client Communication",
    "Team Collaboration",
    "Time Management",
  ];

  const hobbies: string[] = [
    "Tech Exploration",
    "Open Source",
    "Photography",
    "Travel",
    "Blogging",
    "Fitness",
    "Music",
    "Gaming",
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Theme Toggle */}
      <Button
        onClick={() => setIsDarkMode(!isDarkMode)}
        className="fixed top-4 right-4 z-50 !p-2"
      >
        <span className="text-xl">{isDarkMode ? "" : ""}</span>
      </Button>

      {/* Header */}
      <header className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
            Full-Stack Developer & Solutions Architect
          </h1> */}
          <p className="text-lg text-gray-600 dark:text-gray-300 flex items-center justify-center gap-2">
            <span>📍</span> Ajman, United Arab Emirates
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 pb-16 space-y-24">
        {/* Freelance Services */}
        <section>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Crafted Solutions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {freelanceServices.map((service, index) => (
              <Card
                key={index}
                className="p-6 hover:-translate-y-1 transition-transform duration-300"
              >
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                  {service.title}
                </h3>
                <p className="text-blue-600 dark:text-blue-400 font-bold mb-6">
                  {service.price}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-gray-600 dark:text-gray-300"
                    >
                      <span className="text-green-500 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </section>

        {/* Services */}
        <section>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Curated Talent
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="p-6 hover:-translate-y-1 transition-transform duration-300"
              >
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {service.description}
                </p>
              </Card>
            ))}
          </div>
        </section>

        {/* Languages */}
        <section>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Languages
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {languages.map((lang, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">
                  {lang.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                  {lang.level}
                </p>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                  <div
                    className="h-full bg-blue-600 dark:bg-blue-400 rounded-full transition-all duration-1000"
                    style={{ width: `${lang.progress}%` }}
                  />
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Technical Skills */}
          <section>
            <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
              Technical Skills
            </h2>
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-gray-900 dark:text-white">
                      {skill.name}
                    </span>
                    <span className="text-gray-600 dark:text-gray-300">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                    <div
                      className="h-full bg-blue-600 dark:bg-blue-400 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Soft Skills */}
          <section>
            <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
              Soft Skills
            </h2>
            <div className="grid grid-cols-1 gap-4">
              {softSkills.map((skill, index) => (
                <Card key={index} className="p-4 flex items-center space-x-3">
                  <span className="text-blue-600 dark:text-blue-400 text-lg">
                    •
                  </span>
                  <span className="text-gray-900 dark:text-white">{skill}</span>
                </Card>
              ))}
            </div>
          </section>
        </div>

        {/* Hobbies */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
            Hobbies
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {hobbies.map((hobby, index) => (
              <Badge key={index}>{hobby}</Badge>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default PortfolioHome;
