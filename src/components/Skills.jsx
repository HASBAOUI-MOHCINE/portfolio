import React, { useEffect, useRef, useState } from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap, FaGitAlt, FaGithub } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';

const skills = [
  { name: 'HTML', icon: <FaHtml5 className="text-orange-500" />, level: 5, label: 'Advanced', emoji: '🔥' },
  { name: 'CSS', icon: <FaCss3Alt className="text-blue-500" />, level: 5, label: 'Advanced', emoji: '🎨' },
  { name: 'JavaScript', icon: <FaJs className="text-yellow-500" />, level: 4, label: 'Mid', emoji: '⚡' },
  { name: 'React', icon: <FaReact className="text-cyan-500" />, level: 4, label: 'Mid', emoji: '⚛️' },
  { name: 'Bootstrap', icon: <FaBootstrap className="text-purple-500" />, level: 3, label: 'Good', emoji: '🅱️' },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-teal-500" />, level: 4, label: 'Mid', emoji: '💨' },
  { name: 'Git', icon: <FaGitAlt className="text-red-500" />, level: 4, label: 'Mid', emoji: '🧩' },
  { name: 'GitHub', icon: <FaGithub className="text-gray-500" />, level: 4, label: 'Mid', emoji: '🐙' },
];

const Skills = () => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => {
        if (entries.some(e => e.isIntersecting)) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative pt-32 pb-24 px-6 max-w-6xl mx-auto"
    >
      <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
        Skills
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
        {skills.map((s, i) => (
          <div
            key={s.name}
            className="relative flex flex-col items-center text-center p-6 bg-gray-800/40 border border-gray-700/50 rounded-2xl shadow-lg hover:shadow-purple-500/20 transition-all duration-500"
            style={{ animation: visible ? `fadeIn .6s ${(i * 100)}ms ease-out both` : 'none' }}
          >
            {/* Icon */}
            <div className="text-5xl mb-4">{s.icon}</div>

            {/* Skill Name */}
            <h3 className="text-lg font-semibold text-gray-100">{s.name}</h3>
            <p className="text-sm text-gray-400">{s.label} {s.emoji}</p>

            {/* Progress Bar */}
            <div className="relative mt-6 w-full h-3 bg-gray-700/50 rounded-full overflow-hidden">
              <div
                className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-1000 ease-out"
                style={{ width: visible ? `${(s.level / 5) * 100}%` : '0%' }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      <p className="text-center text-sm text-gray-400 mt-14 tracking-wide">
        Always evolving — building, refining, experimenting.
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