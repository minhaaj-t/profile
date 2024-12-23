import React, { useState, useEffect } from "react";

const ResumePage = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode !== null) {
      setIsDarkMode(savedMode === "true");
    } else {
      const prefersDarkMode = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setIsDarkMode(prefersDarkMode);
    }
  }, []);

  useEffect(() => {
    document.body.className = isDarkMode
      ? "bg-gray-900 text-white"
      : "bg-white text-black";
    localStorage.setItem("darkMode", isDarkMode.toString());
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const experienceData = [
    {
      role: "Software Engineer at Ayenz GC",
      description:
        "Developed scalable web applications and led cross-functional teams to deliver high-quality software solutions.",
      duration: "Jan 2024 - Present",
    },
    {
      role: "Software Engineer at Arkanet GC",
      description:
        "Specialized in front-end technologies, optimizing user interfaces for better user experience.",
      duration: "Jun 2023 - Dec 2024",
    },
  ];

  const educationData = [
    {
      degree: "Bachelor of Technology in Computer Science",
      school:
        "APJKTU University - Graduated with Honors, focusing on Software Development and Web Technologies.",
      graduated: "May 2023",
    },
    {
      degree: "High School Computer Science",
      school:
        "Tech High School - Focused on Mathematics, Physics, and Computer Science.",
      graduated: "June 2019",
    },
  ];

  const testimonialsData = [
    {
      name: "John Doe",
      role: "CTO at TechCorp",
      testimonial:
        "Minhaj's work is incredible. He has a great eye for detail.",
      imgSrc: "https://via.placeholder.com/80",
    },
    {
      name: "Jane Smith",
      role: "CEO at NewTech Solutions",
      testimonial:
        "Working with Minhaj has been an excellent experience, delivering high-quality work on time.",
      imgSrc: "https://via.placeholder.com/80",
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="container mx-auto px-6 py-3">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-blue-600 to-purple-500">
            Resume
          </h1>

          <button
            onClick={toggleDarkMode}
            className={`px-4 py-2 rounded shadow transition-opacity bg-gray-200 dark:bg-gray-800 ${
              isDarkMode
                ? "opacity-30 hover:opacity-100"
                : "opacity-100 hover:opacity-30"
            } text-black`}
          >
            {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          </button>
        </div>

        {/* Experience Section */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold mb-6">Experience</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {experienceData.map((item, index) => (
              <div
                key={index}
                className="group p-6 rounded-lg shadow-lg transition-all bg-gray-200 dark:bg-gray-800"
              >
                <h3 className="text-xl font-semibold group-hover:text-blue-500 transition-colors">
                  {item.role}
                </h3>
                <p className="text-lg mt-2 text-gray-700 dark:text-gray-300">
                  {item.description}
                </p>
                <p className="text-lg mt-2 text-gray-700 dark:text-gray-300">
                  <strong>Duration:</strong> {item.duration}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold mb-6">Education</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {educationData.map((item, index) => (
              <div
                key={index}
                className="group p-6 rounded-lg shadow-lg transition-all bg-gray-200 dark:bg-gray-800"
              >
                <h3 className="text-xl font-semibold group-hover:text-blue-500 transition-colors">
                  {item.degree}
                </h3>
                <p className="text-lg mt-2 text-gray-700 dark:text-gray-300">
                  {item.school}
                </p>
                <p className="text-lg mt-2 text-gray-700 dark:text-gray-300">
                  <strong>Graduated:</strong> {item.graduated}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold mb-6">Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonialsData.map((item, index) => (
              <div
                key={index}
                className="flex items-center p-6 rounded-lg shadow-lg transition-all bg-gray-200 dark:bg-gray-800"
              >
                <img
                  src={item.imgSrc}
                  alt={item.name}
                  className="w-20 h-20 rounded-full mr-6"
                />
                <div>
                  <p className="text-lg font-semibold group-hover:text-blue-500 transition-colors">
                    {item.testimonial}
                  </p>
                  <p className="text-lg mt-4 text-gray-700 dark:text-gray-400">
                    {item.name}, {item.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </section>
    </div>
  );
};

export default ResumePage;
