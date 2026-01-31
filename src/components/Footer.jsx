import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useTheme, useTranslation } from "../context/ThemeContext";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const { isDark } = useTheme();
  const t = useTranslation();
  const footerRef = useRef(null);
  const iconsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Icons slide up with stagger
      gsap.fromTo(iconsRef.current,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 95%",
          }
        }
      );

      // Hover effects
      iconsRef.current.forEach(icon => {
        if (icon) {
          icon.addEventListener('mouseenter', () => {
            gsap.to(icon, { y: -5, scale: 1.1, duration: 0.3, ease: "power2.out" });
          });
          icon.addEventListener('mouseleave', () => {
            gsap.to(icon, { y: 0, scale: 1, duration: 0.3, ease: "power2.out" });
          });
        }
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  const socials = [
    { icon: faGithub, link: "https://github.com/HASBAOUI-MOHCINE" },
    { icon: faFacebook, link: "https://www.facebook.com/mohcine.hasbaoui1/" },
    { icon: faInstagram, link: "https://www.instagram.com/mh7__x" },
    { icon: faEnvelope, link: "mailto:hasbaouimohcin12@gmail.com" },
  ];

  return (
    <footer ref={footerRef} className={`relative z-10 py-8 sm:py-12 mt-8 sm:mt-12 border-t ${
      isDark ? 'border-gray-800/50' : 'border-gray-200'
    }`}>
      <p className={`text-center mb-4 sm:mb-6 text-xs sm:text-sm px-4 ${isDark ? 'text-gray-600' : 'text-gray-500'}`}>
        {t.footer.connect}
      </p>
      <div className="flex justify-center gap-3 sm:gap-4 mb-4 sm:mb-6">
        {socials.map((social, i) => (
          <a
            key={i}
            ref={el => iconsRef.current[i] = el}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
              isDark 
                ? 'bg-gray-800/50 text-gray-400 hover:text-white hover:bg-gray-700' 
                : 'bg-gray-100 text-gray-500 hover:text-gray-900 hover:bg-gray-200'
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
