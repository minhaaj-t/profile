import React from 'react';

interface Skill {
  category: string;
  techs: string[];
}

interface SkillCardProps {
  skill: Skill;
  isDarkMode: boolean;
}

export const SkillCard: React.FC<SkillCardProps> = ({ skill, isDarkMode }) => {
  return (
    <div className={`p-6 rounded-lg shadow-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
      <h3 className="text-xl font-semibold mb-4">{skill.category}</h3>
      <div className="flex flex-wrap gap-2">
        {skill.techs.map((tech, i) => (
          <span key={i} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

