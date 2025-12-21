import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faUser, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useTheme, useTranslation } from "../context/ThemeContext";

const Contact = () => {
  const { isDark } = useTheme();
  const t = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    let sanitizedValue = value;
    switch (name) {
      case 'name':
        sanitizedValue = value.replace(/[^a-zA-Z\s\-'.]/g, '');
        break;
      case 'email':
        sanitizedValue = value.replace(/[^a-zA-Z0-9@._-]/g, '');
        break;
      case 'phone':
        sanitizedValue = value.replace(/[^0-9+\-\s]/g, '');
        break;
      case 'message':
        sanitizedValue = value.replace(/<[^>]*>/g, '');
        break;
      default:
        break;
    }
    setFormData({ ...formData, [name]: sanitizedValue });
  };

  const generateWhatsAppLink = () => {
    const baseUrl = "https://wa.me/212622664410";
    const message = `Hello Mohcine! I'm ${formData.name}.${formData.email ? ` My email is ${formData.email}.` : ""}${formData.phone ? ` My phone number is ${formData.phone}.` : ""}${formData.message ? `\n\nMessage: ${formData.message}` : ""}`;
    return `${baseUrl}?text=${encodeURIComponent(message)}`;
  };

  const generateEmailLink = () => {
    const subject = `Contact from ${formData.name}`;
    const body = `Hello Mohcine!\n\nI'm ${formData.name}.${formData.email ? ` My email is ${formData.email}.` : ""}${formData.phone ? ` My phone number is ${formData.phone}.` : ""}${formData.message ? `\n\nMessage:\n${formData.message}` : ""}`;
    return `mailto:hasbaouimohcin12@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      alert('Please fill in all required fields');
      return;
    }
    window.open(generateWhatsAppLink(), '_blank');
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      alert('Please fill in all required fields');
      return;
    }
    window.open(generateEmailLink(), '_blank');
  };

  return (
    <section className="pt-24 sm:pt-32 pb-12 sm:pb-16 px-4 sm:px-6 min-h-screen">
      <div className="flex items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-12">
        <div className={`h-[1px] w-8 sm:w-16 bg-gradient-to-r from-transparent ${isDark ? 'to-gray-600' : 'to-gray-300'}`}></div>
        <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>{t.contact.title}</h2>
        <div className={`h-[1px] w-8 sm:w-16 bg-gradient-to-l from-transparent ${isDark ? 'to-gray-600' : 'to-gray-300'}`}></div>
      </div>
      <div className={`max-w-md sm:max-w-xl mx-auto rounded-xl sm:rounded-2xl p-5 sm:p-8 ${
        isDark 
          ? 'bg-gray-800/30 border border-gray-700/50' 
          : 'bg-white/60 border border-gray-200 shadow-sm'
      }`}>
        <div className="text-center mb-3 sm:mb-4">
          <FontAwesomeIcon icon={faWhatsapp} className={`text-4xl sm:text-5xl ${isDark ? 'text-gray-400' : 'text-gray-500'}`} />
        </div>
        <h3 className={`text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-center ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>{t.contact.subtitle}</h3>
        <p className={`mb-5 sm:mb-6 text-center text-xs sm:text-sm ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
          {t.contact.description}
        </p>

        <form className="space-y-3 sm:space-y-4" onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              name="name"
              pattern="[A-Za-z\s\-'.]+"
              placeholder={t.contact.name}
              required
              maxLength={50}
              className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl focus:outline-none focus:border-cyan-500/50 transition-colors text-sm sm:text-base ${
                isDark 
                  ? 'bg-gray-900/50 border border-gray-700/50 text-gray-200 placeholder-gray-500' 
                  : 'bg-gray-50 border border-gray-200 text-gray-800 placeholder-gray-400'
              }`}
              onChange={handleChange}
              value={formData.name}
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              placeholder={t.contact.email}
              required
              maxLength={100}
              className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl focus:outline-none focus:border-cyan-500/50 transition-colors text-sm sm:text-base ${
                isDark 
                  ? 'bg-gray-900/50 border border-gray-700/50 text-gray-200 placeholder-gray-500' 
                  : 'bg-gray-50 border border-gray-200 text-gray-800 placeholder-gray-400'
              }`}
              onChange={handleChange}
              value={formData.email}
            />
          </div>
          <div>
            <input
              type="tel"
              name="phone"
              pattern="[0-9+\-\s]+"
              placeholder={t.contact.phone}
              maxLength={20}
              className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl focus:outline-none focus:border-cyan-500/50 transition-colors text-sm sm:text-base ${
                isDark 
                  ? 'bg-gray-900/50 border border-gray-700/50 text-gray-200 placeholder-gray-500' 
                  : 'bg-gray-50 border border-gray-200 text-gray-800 placeholder-gray-400'
              }`}
              onChange={handleChange}
              value={formData.phone}
            />
          </div>
            <div>
              <textarea
                name="message"
                placeholder={t.contact.message}
                rows="4"
                maxLength={500}
                className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl focus:outline-none focus:border-cyan-500/50 transition-colors resize-none text-sm sm:text-base ${
                  isDark 
                    ? 'bg-gray-900/50 border border-gray-700/50 text-gray-200 placeholder-gray-500' 
                    : 'bg-gray-50 border border-gray-200 text-gray-800 placeholder-gray-400'
                }`}
                onChange={handleChange}
                value={formData.message}
              ></textarea>
            </div>
          <div className="text-center mt-4 sm:mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-gray-900 px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg sm:rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25 text-sm sm:text-base"
            >
              <FontAwesomeIcon icon={faWhatsapp} />
              {t.contact.send}
            </button>
            <button
              type="button"
              onClick={handleEmailSubmit}
              className="inline-flex items-center justify-center gap-2 bg-gray-600 hover:bg-gray-500 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg sm:rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-gray-500/25 text-sm sm:text-base"
            >
              <FontAwesomeIcon icon={faEnvelope} />
              {t.contact.sendEmail}
            </button>
          </div>
        </form>

        <div className={`mt-6 sm:mt-8 flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 text-xs sm:text-sm ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
          <div className="flex items-center justify-center gap-2">
            <FontAwesomeIcon icon={faUser} className={isDark ? 'text-gray-600' : 'text-gray-400'} />
            <span>Mohcine Hasbaoui</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <FontAwesomeIcon icon={faPhone} className={isDark ? 'text-gray-600' : 'text-gray-400'} />
            <span>+212 622 664410</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
