import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { useTheme, useTranslation } from "../context/ThemeContext";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const { isDark, lang } = useTheme();
  const t = useTranslation();
  const isRTL = lang === 'ar';
  
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  const servicesList = Object.values(t.contact.services || {});

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: servicesList[0] || "",
    message: "",
  });
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrorMsg("");
  };

  const handleAction = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setErrorMsg(t.contact.validationError || "Please fill in all required fields.");
      return;
    }

    const text = `Name: ${formData.name}%0AEmail: ${formData.email}%0AInterested in: ${formData.subject}%0AMessage: ${formData.message}`;
    const targetUrl = `https://wa.me/212622664410?text=${text}`;
    window.open(targetUrl, '_blank', 'noopener,noreferrer');
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(leftRef.current,
        { x: isRTL ? 50 : -50, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, ease: "expo.out", scrollTrigger: { trigger: sectionRef.current, start: "top 80%" } }
      );
      gsap.fromTo(rightRef.current,
        { x: isRTL ? -50 : 50, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, ease: "expo.out", delay: 0.1, scrollTrigger: { trigger: sectionRef.current, start: "top 80%" } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, [isRTL]);

  const inputClasses = `w-full px-5 py-4 text-sm font-bold tracking-wide rounded-none border-2 transition-colors outline-none ${
    isDark 
      ? 'bg-black border-gray-800 text-white placeholder-gray-600 focus:border-white focus:bg-gray-900' 
      : 'bg-white border-gray-200 text-black placeholder-gray-400 focus:border-black focus:bg-gray-50'
  }`;

  return (
    <section ref={sectionRef} className={`pt-24 sm:pt-32 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-screen flex items-center ${isDark ? 'text-white' : 'text-black'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* Left Side: Info & Living Data */}
        <div ref={leftRef} className="flex flex-col gap-12">
          <div>
            <h2 className="text-4xl sm:text-6xl md:text-[5rem] leading-[0.9] font-black tracking-tighter uppercase mb-6">
              {t.contact.title}.
            </h2>
            <p className={`text-lg sm:text-xl font-bold tracking-tight max-w-md ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
              {t.contact.subtitle}
            </p>
          </div>

          <div className="flex flex-col gap-6 w-full">
            <a href="mailto:hasbaouimohcin12@gmail.com" className={`group flex items-center gap-6 text-sm sm:text-base font-bold transition-all ${
              isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'
            }`}>
              <span className={`w-14 h-14 shrink-0 flex items-center justify-center border-2 transition-all duration-300 ${isDark ? 'border-gray-800 bg-gray-900 group-hover:border-rose-400 group-hover:bg-rose-400 group-hover:text-black' : 'border-gray-200 bg-gray-50 group-hover:border-rose-500 group-hover:bg-rose-500 group-hover:text-white'}`}>
                <FontAwesomeIcon icon={faEnvelope} className="text-xl" />
              </span>
              <span className="tracking-wide truncate">hasbaouimohcin12@gmail.com</span>
            </a>
            
            <a href="https://wa.me/212622664410" target="_blank" rel="noopener noreferrer" className={`group flex items-center gap-6 text-sm sm:text-base font-bold transition-all ${
              isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'
            }`}>
              <span className={`w-14 h-14 shrink-0 flex items-center justify-center border-2 transition-all duration-300 ${isDark ? 'border-gray-800 bg-gray-900 group-hover:border-green-400 group-hover:bg-green-400 group-hover:text-black' : 'border-gray-200 bg-gray-50 group-hover:border-green-500 group-hover:bg-green-500 group-hover:text-white'}`}>
                <FontAwesomeIcon icon={faWhatsapp} className="text-xl" />
              </span>
              <span className="tracking-wide truncate">+212 622 664410</span>
            </a>

            <div className={`flex items-center gap-6 text-sm sm:text-base font-bold ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}>
              <span className={`w-14 h-14 shrink-0 flex items-center justify-center border-2 ${isDark ? 'border-gray-800 bg-gray-900 text-white' : 'border-gray-200 bg-gray-50 text-black'}`}>
                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-xl" />
              </span>
              <span className="tracking-wide truncate">Bouskoura Casa, MA</span>
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div ref={rightRef} className={`p-8 sm:p-12 border-2 ${isDark ? 'border-gray-800 bg-black/30' : 'border-gray-200 bg-white/30'}`}>
          <form className="flex flex-col gap-5" onSubmit={handleAction}>
            {errorMsg && (
              <div className={`p-4 text-sm border-l-4 font-bold ${isDark ? 'bg-red-900/20 border-red-500 text-red-400' : 'bg-red-50 border-red-500 text-red-600'}`}>
                {errorMsg}
              </div>
            )}
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder={t.contact.name || 'Your Name'}
                className={inputClasses}
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder={t.contact.email || 'Email Address'}
                className={inputClasses}
              />
            </div>
            
            <select
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className={`${inputClasses} appearance-none cursor-pointer`}
              style={{ paddingRight: isRTL ? '1.25rem' : '2.5rem', paddingLeft: isRTL ? '2.5rem' : '1.25rem' }}
            >
              {servicesList.map((service, index) => (
                <option key={index} value={service} className={isDark ? 'bg-gray-900' : 'bg-white'}>
                  {service}
                </option>
              ))}
            </select>

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder={t.contact.message || 'Your Message'}
              rows="5"
              className={`${inputClasses} resize-y min-h-[140px]`}
            ></textarea>

            <button
              type="submit"
              className={`group w-full mt-4 py-5 px-8 flex items-center justify-center gap-3 text-sm font-black uppercase tracking-widest transition-all duration-300 border-2 ${
                isDark 
                  ? 'bg-white text-black border-white hover:bg-black hover:text-white shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:shadow-none' 
                  : 'bg-black text-white border-black hover:bg-white hover:text-black shadow-[0_10px_30px_rgba(0,0,0,0.2)] hover:shadow-none'
              }`}
            >
              <span>{t.contact.send || 'Send Message'}</span>
              <FontAwesomeIcon icon={faPaperPlane} className={`text-base transition-transform duration-500 ${isRTL ? 'group-hover:-translate-x-2 -scale-x-100' : 'group-hover:translate-x-2'}`} />
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;
