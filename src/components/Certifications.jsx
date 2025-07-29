import React, { useState } from "react";
import { FaCertificate, FaExternalLinkAlt, FaCalendarAlt, FaBuilding, FaFilter } from "react-icons/fa";
import { motion } from "framer-motion";

const certifications = [
  {
    title: "Agile and Scrum (Professional Diploma)",
    issuer: "Udemy",
    year: "2024",
    category: "Project Management",
    description: "Comprehensive training in Agile methodologies and Scrum framework for project management",
    link: "https://www.udemy.com/certificate/UC-0ffd1a78-b4f9-466e-83ce-e64356fb3c5a/",
  },
  {
    title: "Foundations of Prompt Engineering",
    issuer: "AWS Skill Builder",
    year: "2025",
    category: "AI/ML",
    description: "Advanced techniques for creating effective prompts for AI language models",
    link: "https://skillbuilder.aws/learn/VF6H4SZ1BU/foundations-of-prompt-engineering/7U8XFUVXDT",
  },
  {
    title: "Web Design for Beginners",
    issuer: "University of Moratuwa",
    year: "2023",
    category: "Web Development",
    description: "Fundamental principles of web design and user interface development",
    link: "https://open.uom.lk/lms/mod/customcert/verify_certificate.php?code=TzFhz3pKba",
  },
  {
    title: "Build a Free Website with WordPress",
    issuer: "Coursera",
    year: "2023",
    category: "Web Development",
    description: "Complete guide to creating and managing WordPress websites",
    link: "https://www.coursera.org/account/accomplishments/verify/MV6WA2TE1Q5J",
  },
  {
    title: "Basic Digital Marketing",
    issuer: "Alison",
    year: "2022",
    category: "Marketing",
    description: "Fundamentals of digital marketing strategies and online promotion",
    link: "https://alison.com/certification/check/a4b662ce6f",
  },
  {
    title: "Skill Certification Badge",
    issuer: "Badgr",
    year: "2024",
    category: "General",
    description: "Professional skill validation and competency certification",
    link: "https://badgr.com/public/assertions/M5h-DyMWTiqsj2l-Tohm5w",
  },
];

const categoryColors = {
  "AI/ML": "bg-purple-500/20 text-purple-300",
  "Web Development": "bg-blue-500/20 text-blue-300",
  "Project Management": "bg-green-500/20 text-green-300",
  "Marketing": "bg-orange-500/20 text-orange-300",
  "General": "bg-gray-500/20 text-gray-300"
};

const Certifications = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Get unique categories
  const categories = ["all", ...new Set(certifications.map(cert => cert.category))];
  
  // Filter certifications by category
  const filteredCertifications = selectedCategory === "all" 
    ? certifications 
    : certifications.filter(cert => cert.category === selectedCategory);

  // Sort by year (newest first)
  const sortedCertifications = [...filteredCertifications].sort((a, b) => b.year - a.year);

  return (
    <section id="certifications" className="py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 bg-gray-950 text-white">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-center"
        >
          <span className="text-indigo-400">My</span> Certifications
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-center text-gray-400 mb-8 sm:mb-10 max-w-2xl mx-auto"
        >
          Professional certifications and achievements that demonstrate my commitment to continuous learning and skill development
        </motion.p>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-10"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-indigo-500 text-white shadow-lg"
                  : "bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-indigo-300"
              }`}
            >
              <FaFilter className="text-xs" />
              <span>{category === "all" ? "All Certifications" : category}</span>
            </button>
          ))}
        </motion.div>

        {/* Certifications Count */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="text-center text-gray-500 text-sm mb-6 sm:mb-8"
        >
          {sortedCertifications.length} {sortedCertifications.length === 1 ? 'certification' : 'certifications'}
          {selectedCategory !== "all" && (
            <span> in {selectedCategory}</span>
          )}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
          {sortedCertifications.map((cert, index) => (
            <motion.div
              key={`${cert.title}-${index}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900 border border-gray-800 rounded-xl p-4 sm:p-5 md:p-6 lg:p-8 hover:border-indigo-500 transition-all hover:shadow-lg hover:shadow-indigo-500/10 h-full flex flex-col group"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-start gap-3 sm:gap-4 md:gap-5 mb-3 sm:mb-4 md:mb-5">
                  <div className="bg-indigo-500/20 p-2 sm:p-2.5 md:p-3 rounded-lg flex-shrink-0">
                    <FaCertificate className="text-indigo-400" size={20} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-base sm:text-lg md:text-xl font-semibold leading-tight pr-2">
                        {cert.title}
                      </h3>
                      <span className={`text-xs px-2 py-1 rounded-full flex-shrink-0 ${categoryColors[cert.category] || categoryColors.General}`}>
                        {cert.category}
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-4 text-gray-400 text-xs sm:text-sm mb-2">
                      <div className="flex items-center gap-1">
                        <FaBuilding className="text-xs" />
                        <span>{cert.issuer}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <FaCalendarAlt className="text-xs" />
                        <span>{cert.year}</span>
                      </div>
                    </div>

                    {cert.description && (
                      <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mb-3">
                        {cert.description}
                      </p>
                    )}
                  </div>
                </div>

                {cert.link && (
                  <div className="mt-auto pt-2 sm:pt-3 md:pt-4">
                    <motion.a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-2 text-sm text-indigo-400 hover:text-indigo-300 hover:bg-gray-800 px-3 py-2 rounded-lg transition-all duration-200"
                      aria-label={`View ${cert.title} certificate`}
                    >
                      <span>View Certificate</span>
                      <FaExternalLinkAlt className="text-xs" />
                    </motion.a>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
