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
  const cardsRef = useRef([]);
  const skillItemsRef = useRef([]);
  const { isDark } = useTheme();
  const t = useTranslation();

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, index) => {
        if (card) {
          gsap.fromTo(card,
            { y: 30, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.5,
              ease: "expo.out",
              scrollTrigger: {
                trigger: card,
                start: "top 90%",
              },
              delay: index * 0.1,
            }
          );
        }
      });
      
      skillItemsRef.current.forEach((item, index) => {
        if (item) {
          gsap.fromTo(item,
            { scale: 0.9, opacity: 0 },
            {
              scale: 1,
              opacity: 1,
              duration: 0.4,
              ease: "expo.out",
              scrollTrigger: {
                trigger: item,
                start: "top 95%",
              },
              delay: (index % 5) * 0.05,
            }
          );
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

  // Custom span layouts for dynamic bento grid
  const bentoSpans = ["col-span-1 lg:col-span-2", "col-span-1 lg:col-span-1", "col-span-1 lg:col-span-1", "col-span-1 lg:col-span-2"];

  return (
    <section
      ref={sectionRef}
      className={`relative pt-24 sm:pt-32 pb-16 sm:pb-24 px-4 sm:px-6 max-w-7xl mx-auto min-h-screen border-t ${isDark ? 'border-gray-900' : 'border-gray-100'}`}
    >
      <div className="mb-12 sm:mb-20">
        <h2 className={`text-4xl sm:text-6xl md:text-[5rem] leading-[0.9] font-black tracking-tighter uppercase mb-6 ${isDark ? 'text-white' : 'text-black'}`}>
          {t.skills.title}.
        </h2>
        <p className={`mt-4 text-base sm:text-lg max-w-2xl font-medium ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
          {t.skills.footer}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
        {categorizedSkills.map(([category, skillsInCategory], index) => (
          <div
            key={category}
            ref={el => cardsRef.current[index] = el}
            className={`group flex flex-col p-6 sm:p-8 rounded-none border-2 border transition-all duration-300 ${bentoSpans[index % bentoSpans.length]} ${
              isDark 
                ? 'bg-black border-gray-800 hover:border-gray-600 shadow-[inset_0_1px_rgba(255,255,255,0.05)]' 
                : 'bg-white border-gray-200 hover:border-gray-300 hover:shadow-xl shadow-[0_10px_30px_rgba(0,0,0,0.2)]'
            }`}
          >
            <div className="mb-6 flex justify-between items-center">
              <h3 className={`text-xl sm:text-2xl font-bold tracking-tight ${isDark ? 'text-white' : 'text-black'}`}>
                {t.skills.categories[category] || category}
              </h3>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${isDark ? 'bg-gray-800 text-rose-400' : 'bg-rose-50 text-rose-500'}`}>
                <div className="w-2 h-2 rounded-full bg-current"></div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 sm:gap-4 mt-auto">
              {skillsInCategory.map((s) => {
                const currentIndex = skillIndex++;
                return (
                  <div 
                    key={s.name}
                    ref={el => skillItemsRef.current[currentIndex] = el}
                    className={`flex items-center gap-2 sm:gap-3 px-4 py-2.5 rounded-none border-2 font-medium text-sm sm:text-base border transition-all hover:-translate-y-1 hover:shadow-lg ${
                      isDark 
                        ? 'bg-gray-900 border-gray-800 text-gray-300 hover:bg-gray-800 hover:text-white hover:border-gray-600' 
                        : 'bg-gray-50 border-gray-200/60 text-gray-700 hover:bg-white hover:border-gray-300 hover:text-black'
                    }`}
                  >
                    <span className={`text-lg transition-colors ${isDark ? 'text-gray-400 group-hover:text-rose-400' : 'text-gray-500 group-hover:text-rose-500'}`}>
                      {s.icon}
                    </span>
                    {s.name}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
