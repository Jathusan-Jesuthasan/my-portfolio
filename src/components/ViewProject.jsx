import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaArrowLeft,
  FaGithub,
  FaExternalLinkAlt,
  FaCalendarAlt,
  FaCode,
  FaLightbulb,
  FaRocket,
  FaTools,
  FaChevronLeft,
  FaChevronRight
} from "react-icons/fa";
import { projects } from "../data/projects.js";

const getImagePath = (path) => {
  if (!path) return "";
  return path.startsWith("/images/") ? path : `/images/${path}`;
};

const ViewProject = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();

  const project = projects.find((p) => p.id === projectId);
  const currentIndex = projects.findIndex((p) => p.id === projectId);
  const previousProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject =
    currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  const navigateToProject = (id) => {
    navigate(`/project/${id}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  
    const scrollToContact = () => {
      navigate("/", { state: { scrollTo: "contact" } });
    };

  if (!project) {
    return (
      <div className="min-h-screen bg-gray-950 text-white flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            Project Not Found
          </h1>
          <p className="text-gray-400 mb-8 text-sm sm:text-base">
            The project you&apos;re looking for doesn&apos;t exist.
          </p>
          <button
            onClick={() => navigate("/")}
            className="bg-indigo-600 hover:bg-indigo-500 px-6 py-3 rounded-lg transition-colors text-sm sm:text-base font-medium"
          >
            Back to Portfolio
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="sticky top-0 z-50 bg-slate-900/90 backdrop-blur-md border-b border-gray-800"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
          <div className="flex items-center justify-between gap-3">
            <motion.button
              onClick={() => navigate("/")}
              whileHover={{ x: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors min-h-[44px] px-2 py-1 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
            >
              <FaArrowLeft className="flex-shrink-0" />
              <span className="hidden sm:inline text-sm">
                Back to Portfolio
              </span>
              <span className="sm:hidden text-sm">Back</span>
            </motion.button>

            <div className="text-xs sm:text-sm text-gray-400 flex items-center gap-2">
              <FaCalendarAlt className="flex-shrink-0 text-indigo-300" />
              <span>{project.period}</span>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="py-12 sm:py-16 md:py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <p className="text-xs uppercase tracking-[0.2em] text-indigo-400 mb-3">
                Featured Project
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight text-slate-50">
                {project.title}
              </h1>
              <p className="text-base sm:text-lg text-gray-300 mb-8 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                {project.github && (
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 px-6 py-3 rounded-lg transition-colors min-h-[48px] border border-gray-800 hover:border-indigo-500 text-sm sm:text-base"
                  >
                    <FaGithub className="text-indigo-300" />
                    <span>View Code</span>
                  </motion.a>
                )}
                {project.link && (
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-500 px-6 py-3 rounded-lg transition-colors min-h-[48px] text-sm sm:text-base font-medium"
                  >
                    <FaExternalLinkAlt className="text-indigo-200" />
                    <span>Live Demo</span>
                  </motion.a>
                )}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="relative"
            >
              <div className="bg-slate-900 border border-gray-800 rounded-xl p-2 shadow-2xl shadow-black/40">
                <img
                  src={getImagePath(project.image)}
                  alt={project.title}
                  className="w-full rounded-lg object-cover max-h-[360px]"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.nextSibling.style.display = "flex";
                  }}
                />
                <div className="hidden absolute inset-2 bg-slate-900 items-center justify-center rounded-lg border border-dashed border-gray-700">
                  <div className="text-center text-gray-500 px-4">
                    <FaCode className="text-4xl mb-4 mx-auto text-indigo-400" />
                    <p className="text-sm">
                      Project image placeholder — can reuse the card image here.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Technology Stack */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="py-12 bg-slate-900/80 border-t border-gray-800"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center gap-3 text-slate-50">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-indigo-500/10 border border-indigo-500/40">
              <FaTools className="text-indigo-300 text-sm" />
            </span>
            Technology Stack
          </h2>
          <div className="flex flex-wrap gap-3">
            {project.tech.map((tech, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-900 text-indigo-300 px-4 py-2 rounded-full text-xs sm:text-sm font-medium border border-gray-800 hover:border-indigo-500 hover:bg-indigo-900/30 transition-colors"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Detailed Description */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="py-12"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center gap-3 text-slate-50">
            <FaLightbulb className="text-indigo-400" />
            Project Overview
          </h2>
          <div className="max-w-none">
            <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
              {project.detailedDescription}
            </p>
          </div>
        </div>
      </motion.section>

      {/* Features */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="py-12 bg-slate-900/80 border-y border-gray-800"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center gap-3 text-slate-50">
            <FaRocket className="text-indigo-400" />
            Key Features
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {project.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-900 p-4 sm:p-6 rounded-lg border border-gray-800 hover:border-indigo-500 hover:-translate-y-1 transition-all"
              >
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  {feature}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Challenges & Solutions */}
      {project.challenges && project.solutions && (
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="py-12"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center text-slate-50">
              Challenges &amp; Solutions
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-slate-900 p-8 rounded-lg border border-orange-500/40"
              >
                <h3 className="text-xl font-bold mb-6 text-orange-400 flex items-center gap-2">
                  <span className="inline-block w-2 h-2 rounded-full bg-orange-400" />
                  Challenges
                </h3>
                <ul className="space-y-4">
                  {project.challenges.map((challenge, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-orange-400 mt-1">•</span>
                      <span className="text-gray-300 text-sm sm:text-base">
                        {challenge}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-slate-900 p-8 rounded-lg border border-emerald-500/40"
              >
                <h3 className="text-xl font-bold mb-6 text-emerald-400 flex items-center gap-2">
                  <span className="inline-block w-2 h-2 rounded-full bg-emerald-400" />
                  Solutions
                </h3>
                <ul className="space-y-4">
                  {project.solutions.map((solution, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-emerald-400 mt-1">•</span>
                      <span className="text-gray-300 text-sm sm:text-base">
                        {solution}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </motion.section>
      )}

      {/* Gallery */}
      {project.gallery && (
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="py-12 bg-slate-900/80 border-y border-gray-800"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-slate-50">
              Project Gallery
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {project.gallery.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative group cursor-pointer rounded-lg overflow-hidden bg-slate-900 border border-gray-800"
                >
                  <img
                    src={getImagePath(image)}
                    alt={`${project.title} screenshot ${index + 1}`}
                    className="w-full h-48 sm:h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.nextSibling.style.display = "flex";
                    }}
                  />
                  <div className="hidden absolute inset-0 bg-slate-900/90 items-center justify-center rounded-lg">
                    <div className="text-center text-gray-500 px-4">
                      <FaCode className="text-xl sm:text-2xl mb-2 mx-auto text-indigo-400" />
                      <p className="text-xs sm:text-sm">
                        Placeholder for gallery visuals of this project.
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      )}

      {/* Project Navigation */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="py-12 border-t border-gray-800 bg-slate-900/80"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex-1 w-full sm:max-w-sm order-1 sm:order-none">
              {previousProject ? (
                <motion.button
                  onClick={() => navigateToProject(previousProject.id)}
                  whileHover={{ x: -5 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full text-left group bg-slate-900 hover:bg-slate-800 p-4 rounded-lg border border-gray-800 hover:border-indigo-500 transition-all duration-300 min-h-[80px] flex flex-col justify-center"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <FaChevronLeft className="text-indigo-400 group-hover:text-indigo-300 flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-gray-400 group-hover:text-gray-300">
                      Previous Project
                    </span>
                  </div>
                  <h4 className="text-white font-semibold group-hover:text-indigo-300 text-sm sm:text-base leading-tight line-clamp-2">
                    {previousProject.title}
                  </h4>
                </motion.button>
              ) : (
                <div className="w-full text-left p-4 rounded-lg border border-gray-800 bg-slate-900/70 opacity-60 min-h-[80px] flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-2">
                    <FaChevronLeft className="text-gray-600 flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-gray-600">
                      No Previous Project
                    </span>
                  </div>
                  <h4 className="text-gray-600 font-semibold text-sm sm:text-base">
                    This is the first project
                  </h4>
                </div>
              )}
            </div>

            <div className="text-center order-first sm:order-none py-2">
              <span className="text-xs sm:text-sm text-gray-300 bg-slate-900 px-3 py-1 rounded-full border border-gray-800">
                {currentIndex + 1} of {projects.length}
              </span>
            </div>

            <div className="flex-1 w-full sm:max-w-sm order-2 sm:order-none">
              {nextProject ? (
                <motion.button
                  onClick={() => navigateToProject(nextProject.id)}
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full text-right group bg-slate-900 hover:bg-slate-800 p-4 rounded-lg border border-gray-800 hover:border-indigo-500 transition-all duration-300 min-h-[80px] flex flex-col justify-center"
                >
                  <div className="flex items-center justify-end gap-3 mb-2">
                    <span className="text-xs sm:text-sm text-gray-400 group-hover:text-gray-300">
                      Next Project
                    </span>
                    <FaChevronRight className="text-indigo-400 group-hover:text-indigo-300 flex-shrink-0" />
                  </div>
                  <h4 className="text-white font-semibold group-hover:text-indigo-300 text-sm sm:text-base leading-tight line-clamp-2">
                    {nextProject.title}
                  </h4>
                </motion.button>
              ) : (
                <div className="w-full text-right p-4 rounded-lg border border-gray-800 bg-slate-900/70 opacity-60 min-h-[80px] flex flex-col justify-center">
                  <div className="flex items-center justify-end gap-3 mb-2">
                    <span className="text-xs sm:text-sm text-gray-600">
                      No Next Project
                    </span>
                    <FaChevronRight className="text-gray-600 flex-shrink-0" />
                  </div>
                  <h4 className="text-gray-600 font-semibold text-sm sm:text-base">
                    This is the last project
                  </h4>
                </div>
              )}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4 text-slate-50">
              Interested in this project?
            </h3>
            <p className="text-gray-400 mb-8 text-sm sm:text-base max-w-xl mx-auto">
              Let&apos;s discuss how we can work together on similar solutions.
            </p>
            <button
              onClick={scrollToContact}
              className="bg-indigo-600 hover:bg-indigo-500 px-8 py-3 rounded-lg font-semibold transition-colors text-sm sm:text-base inline-flex items-center justify-center"
            >
              Get in Touch
            </button>
          </motion.div>
        </div>
      </footer>
    </div>
  );
};

export default ViewProject;
