import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/hero.jsx";
import About from "./components/About";
import Projects from "./components/Projects";
import Certifications from "./components/certifications.jsx";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Skills from "./components/Skills";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Certifications />
      <Contact />
      <Footer />
      {/* Other sections will go here */}
    </>
  );
}
