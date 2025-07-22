import React from "react";
import { FaGraduationCap, FaFlask } from "react-icons/fa";
import { motion } from "framer-motion";

const Education = () => {
  const educationData = [
    {
      id: 1,
      degree: "BSc (Hons) in Information Technology",
      specialization: "Software Engineering",
      institution: "Sri Lanka Institute of Information Technology (SLIIT)",
      period: "2023 – Present",
      location: "Malabe, Colombo",
      status: "3rd Year, Semester 1 Undergraduate",
      icon: <FaGraduationCap className="text-indigo-500" />,
      description: "Currently pursuing specialized studies in software engineering with coursework in advanced programming, system design, and software architecture.",
      courses: ["Advanced Programming", "Database Systems", "Software Engineering", "Web Development", "Algorithms"],
    },
    {
      id: 2,
      degree: "GCE Advanced Level (A/L)",
      specialization: "Physical Science",
      institution: "",
      period: "2021 (2022)",
      location: "",
      status: "",
      icon: <FaFlask className="text-indigo-500" />,
      description: "Completed advanced studies in physical sciences with focus on technical subjects.",
      courses: ["Physics", "Chemistry", "Combined Mathematics"],
    }
  ];

  return (
    <section id="education" className="py-20 px-4 sm:px-8 lg:px-20 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white"
        >
          <span className="text-indigo-600 dark:text-indigo-400">My</span> Education
        </motion.h2>

        <div className="space-y-8">
          {educationData.map((edu) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: edu.id * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-gray-900 p-6 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-indigo-400 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex items-start">
                  <div className="bg-indigo-100 dark:bg-indigo-900/30 p-4 rounded-full">
                    {edu.icon}
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-4">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {edu.degree}
                      {edu.specialization && (
                        <span className="text-indigo-600 dark:text-indigo-400"> – {edu.specialization}</span>
                      )}
                    </h3>
                    <span className="text-sm bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 px-3 py-1 rounded-full">
                      {edu.period}
                    </span>
                  </div>
                  
                  {edu.institution && (
                    <p className="text-gray-700 dark:text-gray-300 mb-2">
                      <span className="font-medium">{edu.institution}</span>
                      {edu.location && `, ${edu.location}`}
                    </p>
                  )}
                  
                  {edu.status && (
                    <p className="text-sm text-indigo-600 dark:text-indigo-400 mb-4">{edu.status}</p>
                  )}
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-5">{edu.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {edu.courses.map((course, index) => (
                      <span 
                        key={index}
                        className="bg-gray-200 dark:bg-gray-800 text-xs px-3 py-1.5 rounded-full text-indigo-700 dark:text-indigo-300"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;