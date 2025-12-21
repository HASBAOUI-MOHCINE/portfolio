import React, { useEffect, useRef, useState } from 'react';
import { SiJavascript, SiReact, SiTailwindcss, SiVite, SiNextdotjs, SiTypescript, SiNodedotjs, SiExpress, SiMongodb, SiSupabase, SiPython, SiRedux } from 'react-icons/si';
import { FaHtml5, FaCss3Alt, FaGitAlt, FaGithub } from 'react-icons/fa';
import { useTheme, useTranslation } from '../context/ThemeContext';

const skills = [
  { name: 'HTML', icon: <FaHtml5 />, category: 'Frontend' },
  { name: 'CSS', icon: <FaCss3Alt />, category: 'Frontend' },
  { name: 'JavaScript', icon: <SiJavascript />, category: 'Frontend' },
  { name: 'TypeScript', icon: <SiTypescript />, category: 'Frontend' },
  { name: 'React', icon: <SiReact />, category: 'Frontend' },
  { name: 'Redux', icon: <SiRedux />, category: 'Frontend' },
  { name: 'Tailwind CSS', icon: <SiTailwindcss />, category: 'Frontend' },
  { name: 'Vite', icon: <SiVite />, category: 'Frontend' },
  { name: 'Next.js', icon: <SiNextdotjs />, category: 'Frontend' },
  { name: 'Node.js', icon: <SiNodedotjs />, category: 'Backend' },
  { name: 'Express.js', icon: <SiExpress />, category: 'Backend' },
  { name: 'MongoDB', icon: <SiMongodb />, category: 'Database' },
  { name: 'Supabase', icon: <SiSupabase />, category: 'Database' },
  { name: 'Python', icon: <SiPython />, category: 'Other' },
  { name: 'Git', icon: <FaGitAlt />, category: 'Other' },
  { name: 'GitHub', icon: <FaGithub />, category: 'Other' },
];

const Skills = () => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);
  const { isDark } = useTheme();
  const t = useTranslation();

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative pt-24 sm:pt-32 pb-16 sm:pb-24 px-4 sm:px-6 max-w-6xl mx-auto min-h-screen"
    >
      <div className="flex items-center justify-center gap-3 sm:gap-4 mb-10 sm:mb-16">
        <div className={`h-[1px] w-8 sm:w-16 bg-gradient-to-r from-transparent ${isDark ? 'to-gray-600' : 'to-gray-300'}`}></div>
        <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
          {t.skills.title}
        </h2>
        <div className={`h-[1px] w-8 sm:w-16 bg-gradient-to-l from-transparent ${isDark ? 'to-gray-600' : 'to-gray-300'}`}></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
        {Object.entries(skills.reduce((acc, skill) => {
          (acc[skill.category] = acc[skill.category] || []).push(skill);
          return acc;
        }, {})).map(([category, skillsInCategory], index) => (
          <div
            key={category}
            className={`p-4 sm:p-6 rounded-xl sm:rounded-2xl transition-all duration-300 ${
              isDark 
                ? 'bg-gray-800/30 border border-gray-700/50 hover:border-gray-600/50' 
                : 'bg-white/60 border border-gray-200 hover:border-gray-300 shadow-sm'
            }`}
            style={{ animation: visible ? `fadeIn .6s ${(index * 100)}ms ease-out both` : 'none' }}
          >
            <h3 className="text-lg sm:text-xl font-semibold text-purple-500 mb-4 sm:mb-6">
              {t.skills.categories[category] || category}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
              {skillsInCategory.map((s) => (
                <div 
                  key={s.name} 
                  className={`flex flex-col items-center justify-center p-3 sm:p-4 rounded-lg sm:rounded-xl transition-colors duration-300 group min-h-[80px] sm:min-h-[100px] ${
                    isDark 
                      ? 'bg-gray-900/50 hover:bg-gray-800/50' 
                      : 'bg-gray-50 hover:bg-gray-100'
                  }`}
                >
                  <div className={`text-2xl sm:text-3xl md:text-4xl group-hover:text-purple-500 transition-colors duration-300 mb-2 sm:mb-3 flex items-center justify-center ${
                    isDark ? 'text-gray-400' : 'text-gray-500'
                  }`}>
                    {s.icon}
                  </div>
                  <p className={`text-xs sm:text-sm font-medium transition-colors text-center leading-tight ${
                    isDark ? 'text-gray-400 group-hover:text-gray-300' : 'text-gray-500 group-hover:text-gray-700'
                  }`}>{s.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <p className={`text-center text-xs sm:text-sm mt-10 sm:mt-14 tracking-wide ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
        {t.skills.footer}
      </p>

      <style>
        {`
          @keyframes fadeIn {
            0% { opacity:0; transform:translateY(20px); }
            100% { opacity:1; transform:translateY(0); }
          }
        `}
      </style>
    </section>
  );
};

export default Skills;