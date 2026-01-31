import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useTheme, useTranslation } from "../context/ThemeContext";
import gsap from "gsap";

const Contact = () => {
  const { isDark } = useTheme();
  const t = useTranslation();
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Cards slide up
      cardsRef.current.forEach((card, index) => {
        if (card) {
          gsap.fromTo(card,
            { y: 50, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.7,
              ease: "power3.out",
              delay: 0.2 + index * 0.15,
            }
          );

          card.addEventListener('mouseenter', () => {
            gsap.to(card, { y: -8, scale: 1.02, duration: 0.3, ease: "power2.out" });
          });
          card.addEventListener('mouseleave', () => {
            gsap.to(card, { y: 0, scale: 1, duration: 0.3, ease: "power2.out" });
          });
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const generateWhatsAppLink = () => {
    const baseUrl = "https://wa.me/212622664410";
    const message = "Hello Mohcine! I'd like to get in touch regarding a collaboration or project opportunity.";
    return `${baseUrl}?text=${encodeURIComponent(message)}`;
  };

  const generateEmailLink = () => {
    const subject = "Contact from Portfolio";
    const body = "Hello Mohcine!\n\nI'd like to get in touch regarding a collaboration or project opportunity.\n\nBest regards,";
    return `mailto:hasbaouimohcin12@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section ref={sectionRef} className="pt-24 sm:pt-32 pb-12 sm:pb-16 px-4 sm:px-6 min-h-screen">
      <div className="text-center mb-10 sm:mb-12">
        <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>{t.contact.title}</h2>
      </div>
      <div className="max-w-3xl mx-auto grid gap-6 sm:grid-cols-2">
        {/* WhatsApp Section */}
        <div ref={el => cardsRef.current[0] = el} className={`rounded-xl p-6 sm:p-8 text-center transition-colors ${isDark ? 'bg-gray-800/50 border border-gray-700/50 hover:border-gray-600' : 'bg-white border border-gray-200 hover:border-gray-300 shadow-sm'}`}>
          <div className="mb-4">
            <FontAwesomeIcon icon={faWhatsapp} className="text-4xl sm:text-5xl text-green-500" />
          </div>
          <h3 className={`text-lg sm:text-xl font-semibold mb-3 ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>{t.contact.whatsapp}</h3>
          <p className={`mb-4 text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            {t.contact.whatsappDesc}
          </p>
          <div className={`mb-4 text-xs ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
            <FontAwesomeIcon icon={faPhone} className="mr-2" />
            +212 622 664410
          </div>
          <button
            onClick={() => window.open(generateWhatsAppLink(), '_blank')}
            className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-400 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg sm:rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-green-500/25 text-sm sm:text-base w-full"
          >
            <FontAwesomeIcon icon={faWhatsapp} />
            {t.contact.send}
          </button>
        </div>

        {/* Email Section */}
        <div ref={el => cardsRef.current[1] = el} className={`rounded-xl p-6 sm:p-8 text-center transition-colors ${isDark ? 'bg-gray-800/50 border border-gray-700/50 hover:border-gray-600' : 'bg-white border border-gray-200 hover:border-gray-300 shadow-sm'}`}>
          <div className="mb-4">
            <FontAwesomeIcon icon={faEnvelope} className={`text-3xl sm:text-4xl ${isDark ? 'text-rose-400' : 'text-rose-600'}`} />
          </div>
          <h3 className={`text-lg sm:text-xl font-semibold mb-3 ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>{t.contact.email}</h3>
          <p className={`mb-4 text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            {t.contact.emailDesc}
          </p>
          <div className={`mb-4 text-xs ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
            <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
            hasbaouimohcin12@gmail.com
          </div>
          <button
            onClick={() => window.open(generateEmailLink(), '_blank')}
            className={`inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg font-medium transition-colors text-sm sm:text-base w-full ${isDark ? 'bg-rose-600 hover:bg-rose-500 text-white' : 'bg-rose-600 hover:bg-rose-700 text-white'}`}
          >
            <FontAwesomeIcon icon={faEnvelope} />
            {t.contact.sendEmail}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
