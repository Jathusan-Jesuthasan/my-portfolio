import React from "react";
import { motion } from "framer-motion";
import { Globe } from "lucide-react";

export default function Languages() {
  const languages = [
    { 
      name: "English", 
      level: "Professional proficiency", 
      levelWidth: "80%",
      description: "Fluent in technical documentation and professional communication"
    },
    { 
      name: "Tamil", 
      level: "Native", 
      levelWidth: "100%",
      description: "Mother tongue with complete cultural understanding"
    },
    { 
      name: "Sinhala", 
      level: "Basic understanding", 
      levelWidth: "33%",
      description: "Conversational ability for daily interactions"
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="mt-20 bg-white dark:bg-gray-900 rounded-xl p-8 border border-gray-200 dark:border-gray-800 shadow-lg"
      aria-labelledby="languages-heading"
    >
      <div className="flex items-center gap-4 mb-8">
        <div className="bg-indigo-100 dark:bg-indigo-900/30 p-3 rounded-xl">
          <Globe className="text-indigo-600 dark:text-indigo-400" size={24} />
        </div>
        <h3 
          id="languages-heading" 
          className="text-2xl font-bold text-gray-900 dark:text-white"
        >
          Language <span className="text-indigo-600 dark:text-indigo-400">Proficiency</span>
        </h3>
      </div>

      <div className="space-y-8">
        {languages.map((language, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group"
          >
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 mb-3">
              <div>
                <h4 className="font-semibold text-lg text-gray-900 dark:text-white">
                  {language.name}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  {language.description}
                </p>
              </div>
              <span className="text-sm bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 px-3 py-1 rounded-full sm:mt-0 mt-2">
                {language.level}
              </span>
            </div>

            <div
              role="progressbar"
              aria-valuenow={parseInt(language.levelWidth)}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-label={`${language.name} proficiency level: ${language.level}`}
              className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-2.5"
            >
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: language.levelWidth }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: index * 0.2 }}
                className="h-full rounded-full bg-indigo-600 dark:bg-indigo-500 group-hover:bg-indigo-500 dark:group-hover:bg-indigo-400 transition-all"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}