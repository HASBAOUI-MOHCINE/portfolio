import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved ? saved === 'dark' : true;
  });

  const [lang, setLang] = useState(() => {
    const saved = localStorage.getItem('lang');
    return saved || 'en';
  });

  useEffect(() => {
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  useEffect(() => {
    localStorage.setItem('lang', lang);
  }, [lang]);

  const toggleTheme = () => setIsDark(prev => !prev);
  const toggleLang = () => setLang(prev => prev === 'en' ? 'fr' : 'en');

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme, lang, toggleLang }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Translations
export const translations = {
  en: {
    nav: {
      home: 'Home',
      skills: 'Skills',
      certifications: 'Certifications',
      projects: 'Projects',
      contact: 'Contact',
    },
    home: {
      title: 'Mohcine',
      titleHighlight: 'Hasbaoui',
      subtitle: 'Full Stack Web Developer',
      description: 'Crafting beautiful, functional web experiences with modern technologies. Passionate about clean code, user experience, and bringing ideas to life.',
      cta: 'View My Projects',
    },
    skills: {
      title: 'Skills',
      footer: 'Always evolving — building, refining, experimenting.',
      categories: {
        Frontend: 'Frontend',
        Backend: 'Backend',
        Database: 'Database',
        Other: 'Other',
      },
    },
    certifications: {
      education: 'Education',
      certifications: 'Certifications',
      items: {
        education: [
          {
            name: 'High School Diploma (Baccalaureate)',
            institution: 'Lycée Abou hayane al tawhidi',
            date: 'August 2022 – October 2022',
          },
          {
            name: 'Multi-Tasking Operative',
            institution: 'Factories experience',
            date: 'jully 2021 – march 2024',
          },
        ],
        certifications: [
          {
            name: 'Web Developer Full Stack (MERN)',
            issuer: 'GoMyCode',
            date: 'December 2025',
          },
          {
            name: 'Linux Modules & Malware Analytics',
            issuer: 'Udemy',
            date: 'December 2025',
          },
          {
            name: 'Virtual Assistant Professional',
            issuer: 'ALX',
            date: '2024',
          },
        ],
      },
    },
    projects: {
      title: 'My Projects',
      demo: 'Live Demo',
      code: 'Code',
      more: 'More projects coming soon...',
      items: [
        {
          title: 'Mohcinephone Store',
          description: 'Modern e-commerce platform for mobile phones and accessories.',
          tags: ['HTML/CSS', 'Bootstrap', 'JavaScript'],
        },
        {
          title: 'Noortomark agency',
          description: 'We offer a unique experience to the customer.',
          tags: ['React', 'Tailwind CSS'],
        },
        {
          title: 'Moroccan Delicious Bites',
          description: 'Simple menu website for testing web hosting.',
          tags: ['HTML/CSS'],
        },
        {
          title: 'Cineview',
          description: 'Simple landing page for films shorting.',
          tags: ['HTML/CSS', 'JavaScript'],
        },
        {
          title: 'My Portfolio Website',
          description: 'This personal portfolio website showcases my projects and skills.',
          tags: ['React', 'Tailwind CSS'],
        },
        {
          title: 'Trends for Men',
          description: 'A weather application that provides real-time weather information.',
          tags: ['HTML/CSS/BOOTSTRAP', 'JavaScript'],
        },
        {
          title: 'Morolium',
          description: 'A platform that offers a digital solution for the education sector.',
          tags: ['ReactJs', 'JavaScript', 'Tailwind CSS', 'NodeJs', 'ExpressJs', 'MongoDB', 'Supabase'],
        },
      ],
    },
    contact: {
      title: 'Get In Touch',
      subtitle: 'Contact via WhatsApp',
      description: 'Feel free to reach out for collaborations, job opportunities, or just to say hello!',
      name: 'Your Name *',
      email: 'Your Email *',
      phone: 'Your Phone Number (optional)',
      message: 'Your Message (optional)',
      send: 'Start Chat',
      sendEmail: 'Send Email',
    },
    footer: {
      connect: "Let's connect and create something amazing together",
      rights: '© 2025 Mohcine Hasbaoui. All rights reserved.',
    },
  },
  fr: {
    nav: {
      home: 'Accueil',
      skills: 'Compétences',
      certifications: 'Certifications',
      projects: 'Projets',
      contact: 'Contact',
    },
    home: {
      title: 'Mohcine',
      titleHighlight: 'Hasbaoui',
      subtitle: 'Développeur Web Full Stack',
      description: 'Créer des expériences web belles et fonctionnelles avec des technologies modernes. Passionné par le code propre, l\'expérience utilisateur et la concrétisation des idées.',
      cta: 'Voir Mes Projets',
    },
    skills: {
      title: 'Compétences',
      footer: 'Toujours en évolution — construire, affiner, expérimenter.',
      categories: {
        Frontend: 'Frontend',
        Backend: 'Backend',
        Database: 'Base de données',
        Other: 'Autre',
      },
    },
    certifications: {
      education: 'Formation',
      certifications: 'Certifications',
      items: {
        education: [
          {
            name: 'Diplôme du Baccalauréat',
            institution: 'Lycée Abou hayane al tawhidi',
            date: 'Août 2022 – Octobre 2022',
          },
          {
            name: 'Opérateur Polyvalent',
            institution: 'Expérience en usine',
            date: 'Juillet 2021 – Mars 2024',
          },
        ],
        certifications: [
          {
            name: 'Développeur Web Full Stack (MERN)',
            issuer: 'GoMyCode',
            date: 'Décembre 2025',
          },
          {
            name: 'Modules Linux & Analyse de Malware',
            issuer: 'Udemy',
            date: 'Décembre 2025',
          },
          {
            name: 'Assistant Virtuel Professionnel',
            issuer: 'ALX',
            date: '2024',
          },
        ],
      },
    },
    projects: {
      title: 'Mes Projets',
      demo: 'Démo',
      code: 'Code',
      more: 'Plus de projets bientôt...',
      items: [
        {
          title: 'Mohcinephone Store',
          description: 'Plateforme e-commerce moderne pour téléphones mobiles et accessoires.',
          tags: ['HTML/CSS', 'Bootstrap', 'JavaScript'],
        },
        {
          title: 'Agence Noortomark',
          description: 'Nous offrons une expérience unique au client.',
          tags: ['React', 'Tailwind CSS'],
        },
        {
          title: 'Délices Marocains',
          description: 'Site web de menu simple pour tester l\'hébergement web.',
          tags: ['HTML/CSS'],
        },
        {
          title: 'Cineview',
          description: 'Page d\'atterrissage simple pour le tri des films.',
          tags: ['HTML/CSS', 'JavaScript'],
        },
        {
          title: 'Mon Site Portfolio',
          description: 'Ce site portfolio personnel présente mes projets et compétences.',
          tags: ['React', 'Tailwind CSS'],
        },
        {
          title: 'Tendances pour Hommes',
          description: 'Une application météo qui fournit des informations météo en temps réel.',
          tags: ['HTML/CSS/BOOTSTRAP', 'JavaScript'],
        },
        {
          title: 'Morolium',
          description: 'Une plateforme qui offre une solution numérique pour le secteur de l\'éducation.',
          tags: ['ReactJs', 'JavaScript', 'Tailwind CSS', 'NodeJs', 'ExpressJs', 'MongoDB', 'Supabase'],
        },
      ],
    },
    contact: {
      title: 'Me Contacter',
      subtitle: 'Contact via WhatsApp',
      description: 'N\'hésitez pas à me contacter pour des collaborations, des opportunités d\'emploi ou simplement pour dire bonjour!',
      name: 'Votre Nom *',
      email: 'Votre Email *',
      phone: 'Votre Téléphone (optionnel)',
      message: 'Votre Message (optionnel)',
      send: 'Démarrer Chat',
      sendEmail: 'Envoyer Email',
    },
    footer: {
      connect: 'Connectons-nous et créons quelque chose d\'incroyable ensemble',
      rights: '© 2025 Mohcine Hasbaoui. Tous droits réservés.',
    },
  },
};

export const useTranslation = () => {
  const { lang } = useTheme();
  return translations[lang];
};
