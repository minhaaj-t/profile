"use client";

import React, { useState, useEffect, useCallback } from "react";
import { Github, Linkedin, Mail, Moon, Sun, Menu, X } from "lucide-react";
import { ProjectCard } from "./components/ProjectCard";
import PortfolioHome from "./components/PortfolioHome";
import { ContactForm } from "./components/ContactForm";
import { CircularNavbar } from "./components/CircularNavbar";
import { SocialMediaGrid } from "./components/SocialMediaGrid";
import { projects, socialPosts } from "./lib/data";
import { IframeModal } from "./components/IframeModal";
import BackgroundAnimation from "./components/BackgroundAnimation";
import AIBotButton from "./components/AIBotButton";
import GradientTitle from "./components/GradientTitle";
import ResumePage from "./components/ResumePage";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState("home");
  const [isLoading, setIsLoading] = useState(true);
  const [loadingText, setLoadingText] = useState("");
  const [pageTransition, setPageTransition] = useState(false);
  const [isAIModalOpen, setIsAIModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const codeLines = [
    "const portfolio = {",
    "  name: 'minhaj.pro',",
    "  status: 'initializing...'",
    "};",
    "",
    "// Loading complete...",
  ];

  const typeCode = useCallback(() => {
    let currentLine = 0;
    let currentChar = 0;
    let isTyping = true;

    const typeNextChar = () => {
      if (!isTyping) return;

      if (currentLine < codeLines.length) {
        if (currentChar < codeLines[currentLine].length) {
          setLoadingText((prev) => prev + codeLines[currentLine][currentChar]);
          currentChar++;
        } else {
          setLoadingText((prev) => prev + "\n");
          currentLine++;
          currentChar = 0;
        }

        const delay = codeLines[currentLine]?.[currentChar] === " " ? 50 : 100;
        setTimeout(typeNextChar, delay);
      } else {
        setTimeout(() => {
          setIsLoading(false);
          isTyping = false;
        }, 500);
      }
    };

    typeNextChar();

    return () => {
      isTyping = false;
    };
  }, []);

  useEffect(() => {
    const cleanup = typeCode();
    return cleanup;
  }, [typeCode]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e: MediaQueryListEvent) => setIsDarkMode(e.matches);

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  const handleNavigation = useCallback((sectionId: string) => {
    setPageTransition(true);
    setTimeout(() => {
      setActiveSection(sectionId);
      setIsMenuOpen(false);
      setTimeout(() => setPageTransition(false), 500);
    }, 300);
  }, []);

  const toggleDarkMode = () => setIsDarkMode((prev) => !prev);

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDarkMode ? "dark bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      <BackgroundAnimation />
      <nav className="fixed top-0 left-0 right-0 z-30 bg-white dark:bg-gray-800 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <a
                href="#"
                className="text-2xl font-bold text-black dark:text-white"
              >
                MiNHAJ
              </a>
            </div>
            <div className="hidden md:flex items-center">
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-label={
                  isDarkMode ? "Switch to light mode" : "Switch to dark mode"
                }
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <a
                href="https://github.com/minhaaj-t"
                className="ml-4 text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                aria-label="GitHub profile"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/minhaj-t/"
                className="ml-4 text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                aria-label="LinkedIn profile"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:minhajt.uae@gmail.com"
                className="ml-4 text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                aria-label="Email contact"
              >
                <Mail size={20} />
              </a>
            </div>
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a
                href="#"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700"
                onClick={() => handleNavigation("home")}
              >
                Home
              </a>
              <a
                href="#"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700"
                onClick={() => handleNavigation("projects")}
              >
                Projects
              </a>
              <a
                href="#"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700"
                onClick={() => handleNavigation("skills")}
              >
                Skills
              </a>
              <a
                href="#"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700"
                onClick={() => handleNavigation("contact")}
              >
                Contact
              </a>
              <a
                href="#"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700"
                onClick={() => handleNavigation("social")}
              >
                Social
              </a>
            </div>
            <div className="px-2 pt-2 pb-3 border-t border-gray-700">
              <button
                onClick={toggleDarkMode}
                className="flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 w-full"
              >
                {isDarkMode ? (
                  <Sun size={20} className="mr-2" />
                ) : (
                  <Moon size={20} className="mr-2" />
                )}
                {isDarkMode ? "Light Mode" : "Dark Mode"}
              </button>
              <a
                href="https://github.com/minhaaj-t"
                className="flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700"
              >
                <Github size={20} className="mr-2" />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/minhaj-t/"
                className="flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700"
              >
                <Linkedin size={20} className="mr-2" />
                LinkedIn
              </a>
              <a
                href="minhajt.uae@gmail.com"
                className="flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700"
              >
                <Mail size={20} className="mr-2" />
                Email
              </a>
            </div>
          </div>
        )}
      </nav>

      {isLoading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900">
          <div className="max-w-md w-full mx-4">
            <div className="bg-gray-800 rounded-lg p-4 shadow-xl">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <pre className="text-green-400 font-mono text-xs leading-relaxed whitespace-pre-wrap">
                {loadingText}
                <span className="animate-pulse">_</span>
              </pre>
            </div>
          </div>
        </div>
      )}

      <div
        className={`fixed inset-0 bg-black z-40 transition-opacity duration-300 pointer-events-none ${
          pageTransition ? "opacity-50" : "opacity-0"
        }`}
      />

      <main className="pt-16 pb-20">
        <section
          id="home"
          className={`min-h-screen flex flex-col justify-center ${
            activeSection === "home" ? "block" : "hidden"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="lg:flex lg:items-center lg:justify-between">
              <div className="flex-1 min-w-0 text-center lg:text-left">
                <div className="mb-8 relative w-64 h-64 mx-auto lg:w-96 lg:h-96">
                  <img
                    src={
                      isDarkMode
                        ? "https://i.postimg.cc/ZRhhH4wm/Mi-NHAJ-Profile-picture.jpg"
                        : "https://i.postimg.cc/4xs3DMyN/Snapinsta-app-348708136-165323943175436-763747922542576098-n-1080.jpg"
                    }
                    alt="MiNHAJ Profile Picture"
                    className="rounded-full object-cover w-full h-full transition-opacity duration-300"
                  />
                </div>
                <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                  Hi, I am{" "}
                  <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text animate-gradient-x">
                    Muhammed Minhaj Mahroof
                  </span>
                </h1>
                <p className="mt-3 text-xl text-gray-600 dark:text-gray-300 sm:mt-5 sm:text-2xl lg:text-3xl">
                  Full Stack Developer
                </p>
                <p className="mt-5 text-lg text-gray-600 dark:text-gray-400 max-w-3xl sm:text-left text-justify">
                  I am passionate about creating seamless, user-centric
                  applications that solve real-world problems. With expertise in
                  both front-end and back-end development, I bring ideas to life
                  through clean, efficient, and scalable code.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row sm:space-x-4 items-center sm:items-start">
                  <button
                    onClick={() =>
                      handleNavigation(
                        "https://drive.google.com/file/d/1Do36pnnaw6j3F13mfqrdAiQvIlNhg4of/view?usp=drive_link"
                      )
                    }
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 w-48 sm:w-auto"
                  >
                    Download CV
                  </button>
                  <button
                    onClick={() => handleNavigation("contact")}
                    className="mt-3 sm:mt-0 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-blue-600 bg-blue-100 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 w-48 sm:w-auto"
                  >
                    Contact Me
                  </button>
                </div>

                <PortfolioHome />
              </div>
              <div className="mt-10 lg:mt-0 lg:ml-10 lg:hidden">
                <div className="relative w-64 h-64 overflow-hidden mx-auto">
                  {" "}
                  <img
                    src={
                      isDarkMode
                        ? "https://i.postimg.cc/MpVGNwqL/Snapinsta-app-432739680-940049730850557-8672851049421517984-n-1080.jpg"
                        : "https://i.postimg.cc/R0JHfQD8/Snapinsta-app-469140245-1283808049475324-4824924151126626460-n-1080.jpg"
                    }
                    alt="Profile"
                    className="object-cover w-full h-full transition-opacity duration-300"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="projects"
          className={`py-16 ${
            activeSection === "projects" ? "block" : "hidden"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <GradientTitle>Projects</GradientTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <ProjectCard
                  key={index}
                  project={project}
                  isDarkMode={isDarkMode}
                />
              ))}
            </div>
          </div>
        </section>

        <section
          id="skills"
          className={`py-16 ${activeSection === "skills" ? "block" : "hidden"}`}
        >
          <ResumePage />
        </section>

        <section
          id="contact"
          className={`py-16 ${
            activeSection === "contact" ? "block" : "hidden"
          }`}
        >
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <GradientTitle>Get in Touch</GradientTitle>
            <ContactForm isDarkMode={isDarkMode} />
          </div>
        </section>

        <section
          id="social"
          className={`py-16 ${activeSection === "social" ? "block" : "hidden"}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <GradientTitle>Social Media</GradientTitle>
            <SocialMediaGrid posts={socialPosts} />
          </div>
        </section>
      </main>

      <CircularNavbar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
 
      {!isLoading && <AIBotButton onClick={() => setIsAIModalOpen(true)} />}

      <IframeModal
        isOpen={isAIModalOpen}
        onClose={() => setIsAIModalOpen(false)}
      />
      
    </div>
  );
}
