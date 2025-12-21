import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useTheme, useTranslation } from "../context/ThemeContext";

const Contact = () => {
  const { isDark } = useTheme();
  const t = useTranslation();

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
    <section className="pt-24 sm:pt-32 pb-12 sm:pb-16 px-4 sm:px-6 min-h-screen">
      <div className="flex items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-12">
        <div className={`h-[1px] w-8 sm:w-16 bg-gradient-to-r from-transparent ${isDark ? 'to-gray-600' : 'to-gray-300'}`}></div>
        <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>{t.contact.title}</h2>
        <div className={`h-[1px] w-8 sm:w-16 bg-gradient-to-l from-transparent ${isDark ? 'to-gray-600' : 'to-gray-300'}`}></div>
      </div>
      <div className="max-w-4xl mx-auto grid gap-6 sm:gap-8 sm:grid-cols-2">
        {/* WhatsApp Section */}
        <div className={`rounded-xl sm:rounded-2xl p-5 sm:p-8 text-center ${isDark ? 'bg-gray-800/30 border border-gray-700/50' : 'bg-white/60 border border-gray-200 shadow-sm'}`}>
          <div className="mb-4">
            <FontAwesomeIcon icon={faWhatsapp} className="text-4xl sm:text-5xl text-green-500" />
          </div>
          <h3 className={`text-lg sm:text-xl font-semibold mb-3 ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>WhatsApp</h3>
          <p className={`mb-4 text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Chat with me directly on WhatsApp for quick responses and discussions.
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
            Start Chat
          </button>
        </div>

        {/* Email Section */}
        <div className={`rounded-xl sm:rounded-2xl p-5 sm:p-8 text-center ${isDark ? 'bg-gray-800/30 border border-gray-700/50' : 'bg-white/60 border border-gray-200 shadow-sm'}`}>
          <div className="mb-4">
            <FontAwesomeIcon icon={faEnvelope} className="text-4xl sm:text-5xl text-purple-500" />
          </div>
          <h3 className={`text-lg sm:text-xl font-semibold mb-3 ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>Email</h3>
          <p className={`mb-4 text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Send me an email for detailed inquiries, project proposals, or professional discussions.
          </p>
          <div className={`mb-4 text-xs ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
            <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
            hasbaouimohcin12@gmail.com
          </div>
          <button
            onClick={() => window.open(generateEmailLink(), '_blank')}
            className="inline-flex items-center justify-center gap-2 bg-purple-500 hover:bg-purple-400 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg sm:rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 text-sm sm:text-base w-full"
          >
            <FontAwesomeIcon icon={faEnvelope} />
            Send Email
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
