import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

const projects = [
  {
    title: "Mohcinephone Store",
    description: "Modern e-commerce platform for mobile phones and accessories.",
    tags: ["HTML/CSS", "Bootstrap", "JavaScript"],
    demo: "https://mohcinephone.netlify.app",
    code: "https://github.com/HASBAOUI-MOHCINE/my-website",
    icon: "fas fa-mobile-alt",
  },
  {
    title: "Noortomark agency",
    description: "we offer a unique experience to the customer .",
    tags: ["HTML/CSS/Bootstrap", "JavaScript"],
    demo: "https://noortomark.com",
    code: "https://github.com/HASBAOUI-MOHCINE/noortomark",
    icon: "fas fa-utensils",
  },
   {
    title: "Moroccan Delicious Bites",
    description: "Simple menu website for testing web hosting.",
    tags: ["HTML/CSS"],
    demo: "https://delicious-bites-menu.netlify.app",
    code: "https://github.com/HASBAOUI-MOHCINE/first-project-html-css-sass",
    icon: "fas fa-utensils",
  },
     {
    title: "Cineview",
    description: "Simple landing page for films shorting.",
    tags: ["HTML/CSS", "JavaScript"],
    demo: "https://hasbaoui-mohcine.github.io/ai-final-project/",
    code: "https://github.com/HASBAOUI-MOHCINE/ai-final-project",
    icon: "fas fa-utensils",
  },
  {
    title: "My Portfolio Website",
    description: "this personal portfolio website to showcase my projects and skills.",
    tags: ["React", "Tailwind CSS"],
    demo: "hasbaoui.uk",
    code: "https://github.com/HASBAOUI-MOHCINE/portfolio",
    icon: "fas fa-user",
  }, 
  {
    title: "Trends for men",
    description: "A weather application that provides real-time weather information.",
    tags: ["HTML/CSS/BOOTSTRAP", "JavaScript"],
    demo: "https://trends-for-men.netlify.app/",
    code: "https://github.com/HASBAOUI-MOHCINE/trends-for-men",
    icon: "fas fa-user",
  }, 
];


const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
        My Projects
      </h2>
      <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
        {projects.map((project, i) => (
          <div 
            key={i} 
            className="bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-purple-500/10 transition-all duration-300 border border-gray-700/50"
          >
            <div className="h-52 sm:h-56 flex items-center justify-center bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-t-xl">
              <i className={`${project.icon} text-6xl text-gradient bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent`}></i>
            </div>
            <div className="p-6 sm:p-8">
              <h3 className="text-2xl font-semibold mb-3 text-gray-100">{project.title}</h3>
              <p className="text-gray-400 mb-6">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, i) => (
                  <span 
                    key={i} 
                    className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/50 text-gray-100 px-4 py-1.5 rounded-full text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-6">
                <a 
                  href={project.demo} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-100 hover:text-purple-400 transition-colors font-medium flex items-center gap-2"
                >
                  <FontAwesomeIcon icon={faExternalLinkAlt} className="w-4 h-4" />
                  Live Demo
                </a>
                <a 
                  href={project.code} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-100 hover:text-purple-400 transition-colors font-medium flex items-center gap-2"
                >
                  <FontAwesomeIcon icon={faGithub} className="w-4 h-4" />
                  Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <h3 className="text-center mt-16 text-2xl font-semibold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
        More projects coming soon
      </h3>
    </section>
  );
};

export default Projects;
