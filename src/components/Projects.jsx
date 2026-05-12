import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { useTheme, useTranslation } from "../context/ThemeContext";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const { isDark } = useTheme();
  const t = useTranslation();
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  const projects = [
    {
      title: "Mohcine Phone",
      description: "A responsive mobile phone e-commerce website",
      tags: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      demo: 'https://mohcinephone.netlify.app',
      code: 'https://github.com/HASBAOUI-MOHCINE/my-website',
      image: '/images/mohcinephone.png',
    },
    {
      title: "Noortomark",
      description: "A professional bookmark management application",
      tags: ["React", "Tailwind CSS", "Vite", "Responsive"],
      demo: 'https://noortomark.com',
      code: 'https://github.com/HASBAOUI-MOHCINE/noortomark-v2',
      image: '/images/noortomark.png',
    },
    {
      title: "Delicious Bites",
      description: "A restaurant menu showcasing app with smooth animations",
      tags: ["html", "css"],
      demo: 'https://delicious-bites-menu.netlify.app',
      code: 'https://github.com/HASBAOUI-MOHCINE/first-project-html-css-sass',
      image: '/images/delicious-bites.png',
    },
    {
      title: "CineView",
      description: "An AI-powered movie recommendation platform",
      tags: ["html", "css", "javascript", "design"],
      demo: 'https://hasbaoui-mohcine.github.io/ai-final-project/',
      code: 'https://github.com/HASBAOUI-MOHCINE/ai-final-project',
      image: '/images/cineview.png',
    },
    {
      title: "Portfolio",
      description: "My personal portfolio website showcasing all projects",
      tags: ["React", "Tailwind CSS", "Vite", "Responsive"],
      demo: 'https://hasbaoui.uk',
      code: 'https://github.com/HASBAOUI-MOHCINE/portfolio',
      image: '/images/portfolio.png',
    },
    {
      title: "Trends For Men",
      description: "A men's fashion and lifestyle e-commerce platform",
      tags: ["React", "E-commerce", "Tailwind CSS", "JavaScript"],
      demo: 'https://trends-for-men.netlify.app/',
      code: 'https://github.com/HASBAOUI-MOHCINE/trends-for-men',
      image: '/images/trends-for-men.png',
    },
    {
      title: "NoorToLearn",
      description: "An online learning platform for educational content",
      tags: ["MERN STACK", "Education", "Web App", "Responsive"],
      demo: 'https://noortolearn.com/',
      code: null,
      image: '/images/noortolearn.png',
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, index) => {
        if (card) {
          gsap.fromTo(card,
            { y: 40, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.5,
              ease: "expo.out",
              scrollTrigger: {
                trigger: card,
                start: "top 90%",
              },
            }
          );
        }
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className={`pt-24 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-screen border-t ${isDark ? 'border-gray-900' : 'border-gray-100'}`}>
      <div className="mb-12 sm:mb-20">
        <h2 className={`text-4xl sm:text-6xl md:text-[5rem] leading-[0.9] font-black tracking-tighter uppercase mb-6 ${isDark ? 'text-white' : 'text-black'}`}>
          {t.nav.projects}.
        </h2>
        <p className={`mt-4 text-base sm:text-lg max-w-2xl font-medium ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
          Selected works, experiments, and professional projects.
        </p>
      </div>

      <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <div
            key={i}
            ref={el => cardsRef.current[i] = el}
            className={`group relative overflow-hidden rounded-none border-2 border transition-all duration-300 flex flex-col ${
              isDark 
                ? 'bg-black border-gray-800 hover:border-gray-600 shadow-[inset_0_1px_rgba(255,255,255,0.05)]' 
                : 'bg-white border-gray-200 hover:border-gray-300 hover:shadow-xl shadow-[0_10px_30px_rgba(0,0,0,0.2)]'
            }`}
          >
            {/* Image Wrap */}
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className={`block relative aspect-[4/3] w-full overflow-hidden border-b ${isDark ? 'border-gray-800' : 'border-gray-200 bg-gray-50'}`}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                loading={i < 3 ? "eager" : "lazy"}
              />
              <div className="absolute inset-0 bg-black/10 duration-300 group-hover:opacity-0"></div>
            </a>

            {/* Content Wrap */}
            <div className="p-6 sm:p-8 flex flex-col flex-grow">
              <h3 className={`text-xl font-bold tracking-tight mb-2 ${isDark ? 'text-white' : 'text-black'}`}>
                {project.title}
              </h3>
              <p className={`text-sm sm:text-base leading-relaxed mb-6 flex-grow ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.slice(0, 3).map((tag, idx) => (
                  <span
                    key={idx}
                    className={`px-3 py-1 rounded-none text-xs font-bold tracking-wide transition-colors ${
                      isDark 
                        ? 'bg-gray-900 border border-gray-800 text-gray-400 group-hover:border-gray-700' 
                        : 'bg-gray-100/80 border border-transparent text-gray-600 group-hover:border-gray-200'
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4 mt-auto">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex-1 inline-flex justify-center items-center py-2.5 rounded-none border-2 text-sm font-bold transition-all ${
                    isDark ? 'bg-white text-black hover:bg-gray-200' : 'bg-black text-white hover:bg-gray-800'
                  }`}
                >
                  Visit site
                </a>
                {project.code && (
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex justify-center items-center px-4 rounded-none border-2 text-sm transition-all border ${
                      isDark ? 'border-gray-800 text-gray-300 hover:bg-gray-800 hover:text-white hover:border-gray-700' : 'border-gray-300 text-gray-600 hover:bg-gray-50 hover:text-black hover:border-gray-400'
                    }`}
                    aria-label="View Source Code"
                  >
                    <FontAwesomeIcon icon={faGithub} className="text-lg" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
