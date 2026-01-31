import React, { useEffect, useRef } from 'react';
import { SiJavascript, SiReact, SiTailwindcss, SiVite, SiNextdotjs, SiNodedotjs, SiExpress, SiMongodb, SiSupabase, SiPhp, SiLaravel } from 'react-icons/si';
import { FaHtml5, FaCss3Alt, FaGitAlt, FaGithub } from 'react-icons/fa';
import { useTheme, useTranslation } from '../context/ThemeContext';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const skills = [
  { name: 'HTML', icon: <FaHtml5 />, category: 'Frontend' },
  { name: 'CSS', icon: <FaCss3Alt />, category: 'Frontend' },
  { name: 'JavaScript', icon: <SiJavascript />, category: 'Frontend' },
  { name: 'React', icon: <SiReact />, category: 'Frontend' },
  { name: 'Tailwind CSS', icon: <SiTailwindcss />, category: 'Frontend' },
  { name: 'Vite', icon: <SiVite />, category: 'Frontend' },
  { name: 'Next.js', icon: <SiNextdotjs />, category: 'Frontend' },
  { name: 'Node.js', icon: <SiNodedotjs />, category: 'Backend' },
  { name: 'Express.js', icon: <SiExpress />, category: 'Backend' },
  { name: 'PHP', icon: <SiPhp />, category: 'Backend' },
  { name: 'Laravel', icon: <SiLaravel />, category: 'Backend' },
  { name: 'MongoDB', icon: <SiMongodb />, category: 'Database' },
  { name: 'Supabase', icon: <SiSupabase />, category: 'Database' },
  { name: 'Git', icon: <FaGitAlt />, category: 'Other' },
  { name: 'GitHub', icon: <FaGithub />, category: 'Other' },
];

const Skills = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef([]);
  const skillItemsRef = useRef([]);
  const { isDark } = useTheme();
  const t = useTranslation();

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title slide up
      gsap.fromTo(titleRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 85%",
          }
        }
      );

      // Cards stagger with slide and scale
      cardsRef.current.forEach((card, index) => {
        if (card) {
          gsap.fromTo(card,
            { y: 50, opacity: 0, scale: 0.95 },
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
              delay: index * 0.1,
            }
          );

          // Hover lift effect
          card.addEventListener('mouseenter', () => {
            gsap.to(card, { y: -8, scale: 1.02, duration: 0.3, ease: "power2.out" });
          });
          card.addEventListener('mouseleave', () => {
            gsap.to(card, { y: 0, scale: 1, duration: 0.3, ease: "power2.out" });
          });
        }
      });

      // Skill items pop in with stagger
      skillItemsRef.current.forEach((item, index) => {
        if (item) {
          gsap.fromTo(item,
            { y: 20, opacity: 0, scale: 0.8 },
            {
              y: 0,
              opacity: 1,
              scale: 1,
              duration: 0.4,
              ease: "back.out(1.7)",
              scrollTrigger: {
                trigger: item,
                start: "top 92%",
              },
              delay: (index % 7) * 0.04,
            }
          );

          // Icon hover bounce
          item.addEventListener('mouseenter', () => {
            const icon = item.querySelector('svg, .icon');
            if (icon) gsap.to(icon, { scale: 1.2, rotate: 5, duration: 0.3, ease: "back.out(2)" });
          });
          item.addEventListener('mouseleave', () => {
            const icon = item.querySelector('svg, .icon');
            if (icon) gsap.to(icon, { scale: 1, rotate: 0, duration: 0.3, ease: "power2.out" });
          });
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const categorizedSkills = Object.entries(skills.reduce((acc, skill) => {
    (acc[skill.category] = acc[skill.category] || []).push(skill);
    return acc;
  }, {}));

  let skillIndex = 0;

  return (
    <section
      ref={sectionRef}
      className="relative pt-24 sm:pt-32 pb-16 sm:pb-24 px-4 sm:px-6 max-w-6xl mx-auto min-h-screen"
    >
      <div ref={titleRef} className="flex items-center justify-center gap-3 sm:gap-4 mb-10 sm:mb-16">
        <div className={`h-[1px] w-8 sm:w-16 bg-gradient-to-r from-transparent ${isDark ? 'to-gray-600' : 'to-gray-300'}`}></div>
        <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
          {t.skills.title}
        </h2>
        <div className={`h-[1px] w-8 sm:w-16 bg-gradient-to-l from-transparent ${isDark ? 'to-gray-600' : 'to-gray-300'}`}></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
        {categorizedSkills.map(([category, skillsInCategory], index) => (
          <div
            key={category}
            ref={el => cardsRef.current[index] = el}
            className={`p-5 sm:p-6 rounded-xl transition-colors ${
              isDark 
                ? 'bg-gray-800/50 border border-gray-700/50 hover:border-gray-600' 
                : 'bg-white border border-gray-200 hover:border-gray-300 shadow-sm'
            }`}
          >
            <h3 className={`text-lg sm:text-xl font-semibold mb-4 sm:mb-6 ${isDark ? 'text-rose-300' : 'text-rose-700'}`}>
              {t.skills.categories[category] || category}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
              {skillsInCategory.map((s) => {
                const currentIndex = skillIndex++;
                return (
                  <div 
                    key={s.name}
                    ref={el => skillItemsRef.current[currentIndex] = el}
                    className={`flex flex-col items-center justify-center p-3 sm:p-4 rounded-lg transition-colors group min-h-[80px] sm:min-h-[100px] ${
                      isDark 
                        ? 'bg-gray-900/50 hover:bg-gray-800/50' 
                        : 'bg-gray-50 hover:bg-gray-100'
                    }`}
                  >
                    <div className={`text-2xl sm:text-3xl md:text-4xl group-hover:text-rose-500 transition-all duration-300 mb-2 sm:mb-3 flex items-center justify-center ${
                      isDark ? 'text-gray-400' : 'text-gray-500'
                    }`}>
                      {s.icon}
                    </div>
                    <p className={`text-xs sm:text-sm font-medium transition-colors text-center leading-tight ${
                      isDark ? 'text-gray-400 group-hover:text-gray-300' : 'text-gray-500 group-hover:text-gray-700'
                    }`}>{s.name}</p>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <p className={`text-center text-xs sm:text-sm mt-10 sm:mt-14 tracking-wide ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
        {t.skills.footer}
      </p>
    </section>
  );
};

export default Skills;