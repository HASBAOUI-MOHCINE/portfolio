import React, { useEffect, useRef } from 'react';
import { useTranslation, useTheme } from '../context/ThemeContext';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import gsap from "gsap";

const Footer = () => {
  const { isDark, lang } = useTheme();
  const isRTL = lang === 'ar';
  const footerRef = useRef(null);
  
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(footerRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "expo.out", scrollTrigger: { trigger: footerRef.current, start: "top 95%" } }
      );
    }, footerRef);
    return () => ctx.revert();
  }, []);

  return (
    <footer ref={footerRef} className={`border-t transition-colors duration-300 ${
      isDark ? 'bg-black border-gray-800 text-white' : 'bg-white border-gray-200 text-black'
    }`} dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className={`text-xs font-bold tracking-widest uppercase text-center sm:text-left ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
            &copy; {currentYear} Mohcine Hasbaoui. All rights reserved.
          </p>
          
          <div className="flex items-center gap-5">
            {[
              { icon: faLinkedin, href: "https://www.linkedin.com/in/mohcine-hasbaoui-1aba712bb/" },
              { icon: faGithub, href: "https://github.com/HASBAOUI-MOHCINE" }
            ].map((item, idx) => (
              <a key={idx} href={item.href} target="_blank" rel="noopener noreferrer" className={`transition-all duration-300 hover:scale-110 ${
                isDark ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-black'
              }`}>
                <FontAwesomeIcon icon={item.icon} className="text-xl" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
