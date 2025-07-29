import React, { Suspense, lazy } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/hero.jsx";

// Lazy load below-the-fold components for better performance
const About = lazy(() => import("./components/About"));
const Projects = lazy(() => import("./components/Projects"));
const Skills = lazy(() => import("./components/Skills"));
const Certifications = lazy(() => import("./components/Certifications.jsx"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));

// Loading fallback component with better performance
const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-[100px]" role="status" aria-label="Loading">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600"></div>
  </div>
);

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Suspense fallback={<LoadingFallback />}>
        <About />
        <Projects />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <Skills />
        <Certifications />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <Contact />
        <Footer />
      </Suspense>
    </>
  );
}
