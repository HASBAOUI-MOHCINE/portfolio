import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useTheme, useTranslation } from "../context/ThemeContext";

const Footer = () => {
  const { isDark } = useTheme();
  const t = useTranslation();

  const socials = [
    { icon: faGithub, link: "https://github.com/HASBAOUI-MOHCINE" },
    { icon: faFacebook, link: "https://www.facebook.com/mohcine.hasbaoui1/" },
    { icon: faInstagram, link: "https://www.instagram.com/mh7__x" },
    { icon: faEnvelope, link: "mailto:hasbaouimohcin12@gmail.com" },
  ];

  return (
    <footer className={`relative z-10 py-8 sm:py-12 mt-8 sm:mt-12 border-t ${
      isDark ? 'border-gray-800/50' : 'border-gray-200'
    }`}>
      <p className={`text-center mb-4 sm:mb-6 text-xs sm:text-sm px-4 ${isDark ? 'text-gray-600' : 'text-gray-500'}`}>
        {t.footer.connect}
      </p>
      <div className="flex justify-center gap-3 sm:gap-4 mb-4 sm:mb-6">
        {socials.map((social, i) => (
          <a
            key={i}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`w-9 h-9 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl flex items-center justify-center transition-all duration-300 ${
              isDark 
                ? 'bg-gray-800/50 border border-gray-700/50 text-gray-500 hover:text-purple-400 hover:border-gray-600/50' 
                : 'bg-gray-100 border border-gray-200 text-gray-500 hover:text-purple-500 hover:border-gray-300'
            }`}
          >
            <FontAwesomeIcon icon={social.icon} className="text-base sm:text-lg" />
          </a>
        ))}
      </div>
      <p className={`text-center text-[10px] sm:text-xs ${isDark ? 'text-gray-600' : 'text-gray-400'}`}>
        {t.footer.rights}
      </p>
    </footer>
  );
};

export default Footer;
