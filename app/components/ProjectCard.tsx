import React, { useState } from "react";
import { ChevronRight } from "lucide-react";

interface Project {
  title: string;
  description: string;
  tags: string[];
  link: string;
  image: string;
  client: string;
  duration: string;
  role: string;
  technologies: string[];
}

interface ProjectCardProps {
  project: Project;
  isDarkMode: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  isDarkMode,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className={`rounded-lg overflow-hidden shadow-lg transition-all duration-300 transform hover:scale-105 ${
        isDarkMode ? "bg-gray-800" : "bg-white"
      }`}
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-blue-500 hover:underline mb-4 focus:outline-none"
        >
          {isExpanded ? "Show Less" : "Show More"}
        </button>
        {isExpanded && (
          <div className="mt-4 space-y-2">
            <p>
              <strong>Client:</strong> {project.client}
            </p>
            <p>
              <strong>Duration:</strong> {project.duration}
            </p>
            <p>
              <strong>Role:</strong> {project.role}
            </p>
            <p>
              <strong>Technologies:</strong>
            </p>
            <ul className="list-disc list-inside pl-4">
              {project.technologies.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
          </div>
        )}
        <a
          href={project.link}
          className="inline-flex items-center justify-center w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-300"
        >
          View Project
          <ChevronRight size={20} className="ml-2" />
        </a>
      </div>
    </div>
  );
};
