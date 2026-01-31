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
    const ctx = gsap.context(() => {
      // Education cards - slide from left
      eduCardsRef.current.forEach((card, index) => {
        if (card) {
          gsap.fromTo(card,
            { x: -40, opacity: 0 },
            {
              x: 0,
              opacity: 1,
              duration: 0.6,
              ease: "power3.out",
              scrollTrigger: {
                trigger: card,
                start: "top 88%",
              },
              delay: index * 0.1,
            }
          );

          card.addEventListener('mouseenter', () => {
            gsap.to(card, { x: 10, duration: 0.3, ease: "power2.out" });
          });
          card.addEventListener('mouseleave', () => {
            gsap.to(card, { x: 0, duration: 0.3, ease: "power2.out" });
          });
        }
      });

      // Certification cards - scale up
      certCardsRef.current.forEach((card, index) => {
        if (card) {
          gsap.fromTo(card,
            { y: 40, opacity: 0, scale: 0.9 },
            {
              y: 0,
              opacity: 1,
              scale: 1,
              duration: 0.6,
              ease: "power3.out",
              scrollTrigger: {
                trigger: card,
                start: "top 88%",
              },
              delay: index * 0.08,
            }
          );

          card.addEventListener('mouseenter', () => {
            gsap.to(card, { y: -8, scale: 1.03, duration: 0.3, ease: "power2.out" });
          });
          card.addEventListener('mouseleave', () => {
            gsap.to(card, { y: 0, scale: 1, duration: 0.3, ease: "power2.out" });
          });
        }
      });
    }, sectionRef);

    return () => ctx.revert();
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
            ref={el => eduCardsRef.current[i] = el}
            className={`group flex items-start gap-4 p-5 sm:p-6 rounded-xl transition-colors ${
              isDark 
                ? 'bg-gray-800/50 border border-gray-700/50 hover:border-gray-600' 
                : 'bg-white border border-gray-200 hover:border-gray-300 shadow-sm'
            }`}
          >
            <div className={`flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-lg ${
              isDark 
                ? 'bg-gray-900/50 text-rose-400' 
                : 'bg-rose-50 text-rose-600'
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
            ref={el => certCardsRef.current[i] = el}
            className={`group flex flex-col items-center text-center p-6 sm:p-8 rounded-xl min-h-[200px] sm:min-h-[220px] transition-colors ${
              isDark 
                ? 'bg-gray-800/50 border border-gray-700/50 hover:border-gray-600' 
                : 'bg-white border border-gray-200 hover:border-gray-300 shadow-sm'
            }`}
          >
            <div className={`mb-4 sm:mb-5 w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center rounded-lg ${
              isDark 
                ? 'bg-gray-900/50 text-amber-400' 
                : 'bg-amber-50 text-amber-600'
            }`}>
              <div className="text-xl sm:text-2xl">{cert.icon}</div>
            </div>
            <h3 className={`text-lg sm:text-xl font-semibold mb-2 sm:mb-3 leading-tight ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>{cert.name}</h3>
            <p className={`text-sm sm:text-base font-medium mb-2 ${isDark ? 'text-amber-400' : 'text-amber-600'}`}>{cert.issuer}</p>
            <p className={`text-xs sm:text-sm mt-auto ${isDark ? 'text-gray-600' : 'text-gray-400'}`}>{cert.date}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
