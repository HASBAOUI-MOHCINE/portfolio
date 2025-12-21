import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { useTheme, useTranslation } from "../context/ThemeContext";

const Projects = () => {
  const { isDark } = useTheme();
  const t = useTranslation();

  const projects = t.projects.items.map((project, index) => ({
    ...project,
    demo: [
      'https://mohcinephone.netlify.app',
      'https://noortomark.com',
      'https://delicious-bites-menu.netlify.app',
      'https://hasbaoui-mohcine.github.io/ai-final-project/',
      'https://hasbaoui.uk',
      'https://trends-for-men.netlify.app/',
      'https://morolium.tech/',
    ][index],
    code: [
      'https://github.com/HASBAOUI-MOHCINE/my-website',
      'https://github.com/HASBAOUI-MOHCINE/noortomark',
      'https://github.com/HASBAOUI-MOHCINE/first-project-html-css-sass',
      'https://github.com/HASBAOUI-MOHCINE/ai-final-project',
      'https://github.com/HASBAOUI-MOHCINE/portfolio',
      'https://github.com/HASBAOUI-MOHCINE/trends-for-men',
      null,
    ][index],
    image: [
      '/images/mohcinephone.png',
      '/images/noortomark.png',
      '/images/delicious-bites.png',
      '/images/cineview.png',
      '/images/portfolio.png',
      '/images/trends-for-men.png',
      '/images/portfolio.png',
    ][index],
  }));

  return (
    <section className="pt-24 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-screen">
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
            className={`group rounded-xl sm:rounded-2xl transition-all duration-300 overflow-hidden flex flex-col h-full ${
              isDark 
                ? 'bg-gray-800/30 border border-gray-700/50 hover:border-gray-600/50' 
                : 'bg-white/60 border border-gray-200 hover:border-gray-300 shadow-sm'
            }`}
          >
            {/* Project Image */}
            <div className="h-40 sm:h-48 md:h-52 overflow-hidden">
              <img
                src={project.image}
                alt={`Screenshot of ${project.title} - ${project.description}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading={i < 3 ? "eager" : "lazy"}
              />
            </div>

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
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`hover:text-purple-500 transition-colors font-medium flex items-center gap-2 text-sm sm:text-base ${isDark ? 'text-gray-400' : 'text-gray-500'}`}
                >
                  <FontAwesomeIcon icon={faExternalLinkAlt} className="w-3 h-3 sm:w-4 sm:h-4" />
                  {t.projects.demo}
                </a>
                {project.code && (
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`hover:text-purple-500 transition-colors font-medium flex items-center gap-2 text-sm sm:text-base ${isDark ? 'text-gray-400' : 'text-gray-500'}`}
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
