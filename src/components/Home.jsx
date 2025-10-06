import React from "react";

const Home = () => {
  return (
    <section id="home" className="pt-24 min-h-screen flex flex-col justify-center items-center text-center px-6">
      <h1 className="text-[clamp(3rem,8vw,6rem)] font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent mb-4">
        Mohcine Hasbaoui
      </h1>
      <p className="text-xxl md:text-3xl text-white mb-4 border-l-amber-400">Web Developer</p>
      <p className="max-w-xl text-white mb-8">
        Crafting beautiful, functional web experiences with modern technologies.
        Passionate about clean code, user experience, and bringing ideas to life.
      </p>
      <a
        href="#projects"
        className="inline-block px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg shadow-lg hover:scale-105 transition-transform"
      >
        View My Projects
      </a>
      
    </section>
  );
};

export default Home;
