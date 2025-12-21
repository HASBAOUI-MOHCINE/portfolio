import React, { useEffect, useRef, useState } from 'react';
import { FaGraduationCap, FaCogs, FaShieldAlt, FaHeadset } from 'react-icons/fa';
import { SiMongodb, SiReact, SiNodedotjs, SiLinux } from 'react-icons/si';
import { useTheme, useTranslation } from '../context/ThemeContext';

const Certifications = () => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);
  const { isDark } = useTheme();
  const t = useTranslation();

  const education = t.certifications.items.education.map(item => ({
    ...item,
    icon: item.name.includes('Diplôme') || item.name.includes('Baccalaureate') ? <FaGraduationCap /> : <FaCogs />
  }));

  const certifications = t.certifications.items.certifications.map(item => ({
    ...item,
    icon: item.name.includes('MERN') ? (
      <div className="flex gap-1">
        <SiMongodb />
        <SiReact />
        <SiNodedotjs />
      </div>
    ) : item.name.includes('Linux') ? (
      <div className="flex gap-1">
        <SiLinux />
        <FaShieldAlt />
      </div>
    ) : <FaHeadset />
  }));

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative pt-24 sm:pt-32 pb-16 sm:pb-24 px-4 sm:px-6 max-w-6xl mx-auto min-h-screen"
    >
      {/* Education Section */}
      <div className="flex items-center justify-center gap-3 sm:gap-4 mb-10 sm:mb-16">
        <div className={`h-[1px] w-8 sm:w-16 bg-gradient-to-r from-transparent ${isDark ? 'to-gray-600' : 'to-gray-300'}`}></div>
        <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
          {t.certifications.education}
        </h2>
        <div className={`h-[1px] w-8 sm:w-16 bg-gradient-to-l from-transparent ${isDark ? 'to-gray-600' : 'to-gray-300'}`}></div>
      </div>

      <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-16 sm:mb-24">
        {education.map((edu, i) => (
          <div
            key={edu.name}
            className={`group flex items-start gap-4 p-5 sm:p-6 rounded-xl sm:rounded-2xl transition-all duration-300 ${
              isDark 
                ? 'bg-gray-800/30 border border-gray-700/50 hover:border-gray-600/50' 
                : 'bg-white/60 border border-gray-200 hover:border-gray-300 shadow-sm'
            }`}
            style={{ animation: visible ? `fadeIn .6s ${(i * 100)}ms ease-out both` : 'none' }}
          >
            <div className={`flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-lg sm:rounded-xl group-hover:text-cyan-500 transition-colors ${
              isDark ? 'bg-gray-900/50 text-gray-400' : 'bg-gray-100 text-gray-500'
            }`}>
              <div className="text-xl sm:text-2xl">{edu.icon}</div>
            </div>
            <div className="min-w-0 flex-1">
              <h3 className={`text-lg sm:text-xl font-semibold mb-2 leading-tight ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>{edu.name}</h3>
              <p className={`text-sm sm:text-base mb-1 ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>{edu.institution}</p>
              <p className={`text-xs sm:text-sm ${isDark ? 'text-gray-600' : 'text-gray-400'}`}>{edu.date}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Certifications Section */}
      <div className="flex items-center justify-center gap-3 sm:gap-4 mb-10 sm:mb-16">
        <div className={`h-[1px] w-8 sm:w-16 bg-gradient-to-r from-transparent ${isDark ? 'to-gray-600' : 'to-gray-300'}`}></div>
        <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
          {t.certifications.certifications}
        </h2>
        <div className={`h-[1px] w-8 sm:w-16 bg-gradient-to-l from-transparent ${isDark ? 'to-gray-600' : 'to-gray-300'}`}></div>
      </div>

      <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert, i) => (
          <div
            key={cert.name}
            className={`group flex flex-col items-center text-center p-6 sm:p-8 rounded-xl sm:rounded-2xl transition-all duration-300 min-h-[200px] sm:min-h-[220px] ${
              isDark 
                ? 'bg-gray-800/30 border border-gray-700/50 hover:border-gray-600/50' 
                : 'bg-white/60 border border-gray-200 hover:border-gray-300 shadow-sm'
            }`}
            style={{ animation: visible ? `fadeIn .6s ${(i * 100 + 200)}ms ease-out both` : 'none' }}
          >
            <div className={`mb-4 sm:mb-6 w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center rounded-xl sm:rounded-2xl group-hover:text-cyan-500 transition-colors ${
              isDark ? 'bg-gray-900/50 text-gray-400' : 'bg-gray-100 text-gray-500'
            }`}>
              <div className="text-xl sm:text-2xl">{cert.icon}</div>
            </div>
            <h3 className={`text-lg sm:text-xl font-semibold mb-2 sm:mb-3 leading-tight ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>{cert.name}</h3>
            <p className="text-sm sm:text-base text-cyan-500 font-medium mb-2">{cert.issuer}</p>
            <p className={`text-xs sm:text-sm mt-auto ${isDark ? 'text-gray-600' : 'text-gray-400'}`}>{cert.date}</p>
          </div>
        ))}
      </div>

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

export default Certifications;
