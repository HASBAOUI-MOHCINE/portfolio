import React, { useEffect, useRef } from 'react';
import { FaGraduationCap, FaCogs, FaShieldAlt, FaHeadset } from 'react-icons/fa';
import { SiMongodb, SiReact, SiNodedotjs, SiLinux } from 'react-icons/si';
import { useTheme, useTranslation } from '../context/ThemeContext';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Certifications = () => {
  const sectionRef = useRef(null);
  const eduCardsRef = useRef([]);
  const certCardsRef = useRef([]);
  const { isDark } = useTheme();
  const t = useTranslation();

  const education = t.certifications.items.education.map(item => ({
    ...item,
    icon: item.name.includes('Diplôme') || item.name.includes('Baccalaureate') ? <FaGraduationCap /> : <FaCogs />
  }));

  const certifications = t.certifications.items.certifications.map(item => ({
    ...item,
    icon: item.name.includes('MERN') ? (
      <div className="flex gap-1 justify-center">
        <SiMongodb /> <SiReact /> <SiNodedotjs />
      </div>
    ) : item.name.includes('Linux') ? (
      <div className="flex gap-1 justify-center">
        <SiLinux /> <FaShieldAlt />
      </div>
    ) : <FaHeadset />
  }));

  useEffect(() => {
    const ctx = gsap.context(() => {
      eduCardsRef.current.forEach((card, index) => {
        if (card) {
          gsap.fromTo(card,
            { x: -30, opacity: 0 },
            {
              x: 0,
              opacity: 1,
              duration: 0.5,
              ease: "expo.out",
              scrollTrigger: { trigger: card, start: "top 90%" },
              delay: index * 0.1,
            }
          );
        }
      });
      certCardsRef.current.forEach((card, index) => {
        if (card) {
          gsap.fromTo(card,
            { y: 30, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.5,
              ease: "expo.out",
              scrollTrigger: { trigger: card, start: "top 90%" },
              delay: index * 0.1,
            }
          );
        }
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className={`relative pt-24 sm:pt-32 pb-16 sm:pb-24 px-4 sm:px-6 max-w-7xl mx-auto min-h-screen border-t ${isDark ? 'border-gray-900' : 'border-gray-100'}`}>
      
      {/* Education Header */}
      <div className="mb-10 sm:mb-16">
        <h2 className={`text-4xl sm:text-6xl md:text-[5rem] leading-[0.9] font-black tracking-tighter uppercase mb-6 ${isDark ? 'text-white' : 'text-black'}`}>
          {t.certifications.education}.
        </h2>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2 mb-16 sm:mb-24">
        {education.map((edu, i) => (
          <div
            key={edu.name}
            ref={el => eduCardsRef.current[i] = el}
            className={`group relative overflow-hidden flex items-start gap-5 p-6 sm:p-8 rounded-none border-2 border transition-all duration-300 ${
              isDark 
                ? 'bg-black border-gray-800 hover:border-gray-600 shadow-[inset_0_1px_rgba(255,255,255,0.05)]' 
                : 'bg-white border-gray-200 hover:border-gray-300 hover:shadow-xl shadow-[0_10px_30px_rgba(0,0,0,0.2)]'
            }`}
          >
            <div className={`flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-none border-2 ${
              isDark ? 'bg-gray-900 text-rose-400 border border-gray-800' : 'bg-gray-50 text-rose-500 border border-gray-100'
            }`}>
              <div className="text-xl sm:text-2xl">{edu.icon}</div>
            </div>
            <div className="min-w-0 flex-1">
              <h3 className={`text-lg sm:text-xl font-bold mb-2 leading-tight tracking-tight ${isDark ? 'text-white' : 'text-gray-900'}`}>{edu.name}</h3>
              <p className={`text-sm sm:text-base font-medium mb-1.5 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{edu.institution}</p>
              <div className="inline-flex">
                <span className={`text-xs px-2.5 py-1 rounded font-bold uppercase tracking-wider ${isDark ? 'bg-gray-900 text-gray-400' : 'bg-gray-100 text-gray-500'}`}>{edu.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Certifications Header */}
      <div className="mb-10 sm:mb-16">
        <h2 className={`text-4xl sm:text-6xl md:text-[5rem] leading-[0.9] font-black tracking-tighter uppercase mb-6 ${isDark ? 'text-white' : 'text-black'}`}>
          {t.certifications.certifications}.
        </h2>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert, i) => (
          <div
            key={cert.name}
            ref={el => certCardsRef.current[i] = el}
            className={`group relative flex flex-col items-start p-6 sm:p-8 rounded-none border-2 border transition-all duration-300 min-h-[220px] ${
              isDark 
                ? 'bg-black border-gray-800 hover:border-amber-900/50 hover:bg-amber-950/10 shadow-[inset_0_1px_rgba(255,255,255,0.05)]' 
                : 'bg-white border-gray-200 hover:border-amber-200 hover:bg-amber-50/30 hover:shadow-xl shadow-[0_10px_30px_rgba(0,0,0,0.2)]'
            }`}
          >
            <div className={`mb-6 w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center rounded-none border-2 ${
              isDark ? 'bg-gray-900 text-amber-400 border border-gray-800' : 'bg-gray-50 text-amber-500 border border-gray-100'
            }`}>
              <div className="text-xl sm:text-2xl">{cert.icon}</div>
            </div>
            <h3 className={`text-lg sm:text-xl font-bold mb-2 tracking-tight ${isDark ? 'text-white' : 'text-gray-900'}`}>{cert.name}</h3>
            <p className={`text-sm sm:text-base font-medium mb-6 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{cert.issuer}</p>
            <div className="mt-auto">
                <span className={`text-xs px-2.5 py-1 rounded font-bold uppercase tracking-wider ${isDark ? 'bg-amber-950/30 text-amber-500 border border-amber-900/50' : 'bg-amber-50 text-amber-600 border border-amber-100'}`}>{cert.date}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
