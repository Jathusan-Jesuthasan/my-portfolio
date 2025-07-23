import React from "react";
import { Linkedin, Github, Download, Code } from 'lucide-react';
import { motion } from "framer-motion";
import Education from "./Education";
import Languages from "./Languages";

export default function About() {
  const stats = [
    { value: "3+", label: "Years Learning" },
    { value: "10+", label: "Projects Completed" },
    { value: "5", label: "Technologies Mastered" },
    { value: "100%", label: "Passionate" }
  ];

  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-8 lg:px-20 bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-white"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400 mb-4">
              About Me
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Crafting Digital Experiences <span className="text-purple-600 dark:text-purple-400">With Precision</span>
            </h2>
            <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400">
              Software engineer blending technical expertise with creative problem-solving
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Text Content */}
            <div className="space-y-8">
              <div className="prose dark:prose-invert max-w-none">
                <p className="text-lg leading-relaxed">
                  Hello! I'm <span className="font-semibold text-gray-900 dark:text-white">Jathusan Jesuthasan</span>, a dedicated third-year Software Engineering student at SLIIT with a focus on full-stack development. My journey in tech combines academic rigor with hands-on experience building real-world solutions.
                </p>

                <p className="text-lg leading-relaxed">
                  As both a student and freelancer, I've developed a unique perspective that bridges theoretical knowledge with practical application. My work emphasizes clean architecture, performance optimization, and intuitive user experiences.
                </p>

                <p className="text-lg leading-relaxed">
                  When I'm not coding, you'll find me contributing to open-source projects, writing technical articles, or exploring emerging technologies in AI and cloud computing.
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -5 }}
                    className="bg-white dark:bg-gray-900 p-4 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm text-center"
                  >
                    <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">{stat.value}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <motion.a
                  href="https://www.linkedin.com/in/jathusan-jesuthasan-69a057294/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-2 px-5 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg transition shadow-lg hover:shadow-purple-500/20 text-white"
                >
                  <Linkedin size={18} />
                  <span>Connect on LinkedIn</span>
                </motion.a>

                <motion.a
                  href="/Jathusan_CV.pdf"
                  download
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-2 px-5 py-3 border border-gray-300 dark:border-gray-700 hover:border-indigo-400 text-gray-800 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 rounded-lg transition"
                >
                  <Download size={16} />
                  <span>Download CV</span>
                </motion.a>
              </div>
            </div>

            {/* Right Column - Tech Card */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-purple-800 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-200"></div>
              <div className="relative h-full bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden shadow-lg">
                <div className="p-1 bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-800 flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <div className="text-xs font-mono text-gray-500 ml-2">about-me.js</div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-purple-100 dark:bg-purple-900/50 p-2 rounded-lg">
                      <Code className="text-purple-600 dark:text-purple-400" size={20} />
                    </div>
                    <h3 className="text-xl font-semibold">Technical Profile</h3>
                  </div>
                  <div className="space-y-4 text-sm font-mono text-gray-700 dark:text-gray-300">
                    <p><span className="text-purple-600 dark:text-purple-400">const</span> <span className="text-indigo-600 dark:text-indigo-400">skills</span> = [</p>
                    <div className="ml-4 space-y-1">
                      <p><span className="text-emerald-600 dark:text-emerald-400">'Full-stack Development'</span>,</p>
                      <p><span className="text-emerald-600 dark:text-emerald-400">'UI/UX Design'</span>,</p>
                      <p><span className="text-emerald-600 dark:text-emerald-400">'Cloud Architecture'</span>,</p>
                      <p><span className="text-emerald-600 dark:text-emerald-400">'Technical Writing'</span></p>
                    </div>
                    <p>];</p>
                    <p><span className="text-purple-600 dark:text-purple-400">let</span> <span className="text-indigo-600 dark:text-indigo-400">education</span> = &#123;</p>
                    <div className="ml-4 space-y-1">
                      <p><span className="text-amber-600 dark:text-amber-400">degree</span>: <span className="text-emerald-600 dark:text-emerald-400">'BSc Software Engineering'</span>,</p>
                      <p><span className="text-amber-600 dark:text-amber-400">institution</span>: <span className="text-emerald-600 dark:text-emerald-400">'SLIIT'</span>,</p>
                      <p><span className="text-amber-600 dark:text-amber-400">status</span>: <span className="text-emerald-600 dark:text-emerald-400">'3rd Year'</span></p>
                    </div>
                    <p>&#125;;</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Subcomponents */}
        <div className="space-y-16">
          <Education />
          <Languages />
        </div>
      </div>
    </section>
  );
}