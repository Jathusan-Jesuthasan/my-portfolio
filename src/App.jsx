import React, { Suspense, lazy, useEffect } from "react";
import { HashRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import Navbar from "./components/Navbar";
import Hero from "./components/hero.jsx";

// Lazy load below-the-fold components for better performance
const About = lazy(() => import("./components/About"));
const Projects = lazy(() => import("./components/Projects"));
const Skills = lazy(() => import("./components/Skills"));
const Certifications = lazy(() => import("./components/Certifications.jsx"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));
const ViewProject = lazy(() => import("./components/ViewProject"));

// Loading fallback component with better performance
const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-[100px]" role="status" aria-label="Loading">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600"></div>
  </div>
);

// Home page component
const HomePage = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/" && location.state?.scrollTo) {
      const target = document.getElementById(location.state.scrollTo);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  }, [location]);

  return (
    <>
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
};

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-gray-950 text-white">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route 
              path="/project/:projectId" 
              element={
                <Suspense fallback={<LoadingFallback />}>
                  <ViewProject />
                </Suspense>
              } 
            />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}
