import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
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
      // Cards slide up with stagger
      cardsRef.current.forEach((card, index) => {
        if (card) {
          gsap.fromTo(card,
            { y: 60, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.7,
              ease: "power3.out",
              scrollTrigger: {
                trigger: card,
                start: "top 88%",
              },
              delay: (index % 3) * 0.1,
            }
          );

          // Image zoom on hover
          const img = card.querySelector('img');
          card.addEventListener('mouseenter', () => {
            gsap.to(card, { y: -10, duration: 0.3, ease: "power2.out" });
            if (img) gsap.to(img, { scale: 1.1, duration: 0.4, ease: "power2.out" });
          });
          card.addEventListener('mouseleave', () => {
            gsap.to(card, { y: 0, duration: 0.3, ease: "power2.out" });
            if (img) gsap.to(img, { scale: 1, duration: 0.4, ease: "power2.out" });
          });
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="pt-24 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-screen">
      <div className="flex items-center justify-center gap-3 sm:gap-4 mb-10 sm:mb-16">
        <div className={`h-[1px] w-8 sm:w-16 bg-gradient-to-r from-transparent ${isDark ? 'to-gray-600' : 'to-gray-300'}`}></div>
        <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>{t.projects.title}</h2>
        <div className={`h-[1px] w-8 sm:w-16 bg-gradient-to-l from-transparent ${isDark ? 'to-gray-600' : 'to-gray-300'}`}></div>
      </div>

      {/* Structured Data for Projects */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          "name": "Portfolio Projects",
          "description": "Collection of web development projects by Mohcine Hasbaoui",
          "author": {
            "@type": "Person",
            "name": "Mohcine Hasbaoui",
            "url": "https://hasbaoui.uk"
          },
          "numberOfItems": projects.length,
          "itemListElement": projects.map((project, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "item": {
              "@type": "SoftwareApplication",
              "name": project.title,
              "description": project.description,
              "url": project.demo,
              "applicationCategory": "WebApplication",
              "operatingSystem": "Web Browser",
              "author": {
                "@type": "Person",
                "name": "Mohcine Hasbaoui"
              },
              "programmingLanguage": project.tags.join(", "),
              "screenshot": `https://hasbaoui.uk${project.image}`
            }
          }))
        })}
      </script>

      <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <div
            key={i}
            ref={el => cardsRef.current[i] = el}
            className={`group rounded-xl overflow-hidden flex flex-col h-full transition-colors ${
              isDark 
                ? 'bg-gray-800/50 border border-gray-700/50 hover:border-gray-600' 
                : 'bg-white border border-gray-200 hover:border-gray-300 shadow-sm'
            }`}
          >
            {/* Project Image - Clickable */}
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="h-40 sm:h-48 md:h-52 overflow-hidden block cursor-pointer"
            >
              <img
                src={project.image}
                alt={`Screenshot of ${project.title}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading={i < 3 ? "eager" : "lazy"}
              />
            </a>

            {/* Project Details */}
            <div className="p-4 sm:p-6 flex flex-col flex-grow">
              <h3 className={`text-lg sm:text-xl font-semibold mb-2 sm:mb-3 ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>{project.title}</h3>
              <p className={`text-sm sm:text-base mb-4 sm:mb-5 line-clamp-2 flex-grow ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                {project.tags.slice(0, 4).map((tag, i) => (
                  <span
                    key={i}
                    className={`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium ${
                      isDark 
                        ? 'bg-gray-900/50 border border-gray-700/50 text-gray-400' 
                        : 'bg-gray-100 border border-gray-200 text-gray-500'
                    }`}
                  >
                    {tag}
                  </span>
                ))}
                {project.tags.length > 4 && (
                  <span className={`text-xs sm:text-sm py-1 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>+{project.tags.length - 4}</span>
                )}
              </div>
              <div className="flex gap-4 sm:gap-6 mt-auto">
                {project.code && (
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`hover:text-rose-500 transition-colors font-medium flex items-center gap-2 text-sm sm:text-base ${isDark ? 'text-gray-400' : 'text-gray-500'}`}
                  >
                    <FontAwesomeIcon icon={faGithub} className="w-3 h-3 sm:w-4 sm:h-4" />
                    {t.projects.code}
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <p className={`text-center mt-10 sm:mt-16 text-sm ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
        {t.projects.more}
      </p>
    </section>
  );
};

export default Projects;
