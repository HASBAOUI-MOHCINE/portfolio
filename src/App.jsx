import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Background from "./components/Background";

function App() {
  return (
    <div className="relative min-h-screen text-gray-100">
      <Navbar />
      <Home />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <Background />
    </div>
  );
}

export default App;
