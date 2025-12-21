import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { ThemeProvider, useTheme, useTranslation } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Skills from "./components/Skills.jsx";
import Certifications from "./components/Certifications.jsx";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Background from "./components/Background";
import PageTransition from "./components/PageTransition";
import { useEffect } from "react";

function AnimatedRoutes() {
  const location = useLocation();
  const { lang } = useTheme();
  const t = useTranslation();

  // Dynamic title management
  useEffect(() => {
    const titles = {
      '/': 'Mohcine Hasbaoui - Full Stack Web Developer | Portfolio',
      '/skills': `Skills - ${t.nav.skills} | Mohcine Hasbaoui`,
      '/certifications': `Certifications - ${t.nav.certifications} | Mohcine Hasbaoui`,
      '/projects': `Projects - ${t.nav.projects} | Mohcine Hasbaoui`,
      '/contact': `Contact - ${t.nav.contact} | Mohcine Hasbaoui`
    };

    const currentTitle = titles[location.pathname] || 'Mohcine Hasbaoui - Full Stack Web Developer | Portfolio';
    document.title = currentTitle;

    // Update meta description
    const descriptions = {
      '/': 'Professional Full Stack Web Developer from Morocco. Expert in React, Node.js, MERN stack. Portfolio featuring e-commerce platforms, web applications, and modern web solutions.',
      '/skills': 'Explore Mohcine Hasbaoui\'s technical skills including React, Node.js, MongoDB, Tailwind CSS, and more web development technologies.',
      '/certifications': 'View Mohcine Hasbaoui\'s education background and professional certifications in web development and related technologies.',
      '/projects': 'Browse Mohcine Hasbaoui\'s portfolio projects including e-commerce platforms, web applications, and innovative web solutions.',
      '/contact': 'Get in touch with Mohcine Hasbaoui for web development projects, collaborations, or job opportunities.'
    };

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', descriptions[location.pathname] || descriptions['/']);
    }

  }, [location.pathname, t, lang]);

  return (
    <>
      {/* Breadcrumb Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://hasbaoui.uk"
            },
            ...(location.pathname !== '/' ? [{
              "@type": "ListItem",
              "position": 2,
              "name": location.pathname.slice(1).charAt(0).toUpperCase() + location.pathname.slice(2),
              "item": `https://hasbaoui.uk${location.pathname}`
            }] : [])
          ]
        })}
      </script>

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={
            <PageTransition>
              <Home />
            </PageTransition>
          } />
          <Route path="/skills" element={
            <PageTransition>
              <Skills />
            </PageTransition>
          } />
          <Route path="/certifications" element={
            <PageTransition>
              <Certifications />
            </PageTransition>
          } />
          <Route path="/projects" element={
            <PageTransition>
              <Projects />
            </PageTransition>
          } />
          <Route path="/contact" element={
            <PageTransition>
              <Contact />
            </PageTransition>
          } />
        </Routes>
      </AnimatePresence>
    </>
  );
}

function AppContent() {
  const { isDark } = useTheme();
  
  return (
    <Router>
      <div className={`relative min-h-screen transition-colors duration-300 ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>
        <Background />
        <Navbar />
        <main className="relative z-10">
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
