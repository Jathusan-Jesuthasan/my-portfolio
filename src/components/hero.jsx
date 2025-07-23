import React from 'react';
import profilePic from '../assets/profile.jpg';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { FiChevronDown } from 'react-icons/fi';
import { motion } from 'framer-motion';

const socialLinks = [
  { icon: FaLinkedin, url: "https://www.linkedin.com/in/jathusan-jesuthasan-69a057294/", label: "LinkedIn" },
  { icon: FaGithub, url: "https://github.com/Jathusan-Jesuthasan", label: "GitHub" },
  { icon: SiLeetcode, url: "https://leetcode.com/u/7nNdDsZvgo/", label: "LeetCode" },
  { icon: FaTwitter, url: "https://twitter.com/yourprofile", label: "Twitter" },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-6 md:px-16 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-20 -top-20 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-20 left-1/4 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 py-20">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 space-y-8"
        >
          <div className="space-y-4">
            <p className="text-lg md:text-xl font-medium text-purple-400">Hello, I'm</p>
           <h1 className="text-5xl md:text-7xl font-bold leading-tight">
             Jathusan <span className="bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 bg-clip-text text-transparent">Jesuthasan</span>
           </h1>



          </div>

          <div className="max-w-xl">
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Passionate Software Engineering undergraduate at SLIIT crafting exceptional digital experiences through modern web technologies and clean code practices.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-4">
            <motion.a
              aria-label="Contact me"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(147, 51, 234, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="px-8 py-3.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg font-semibold text-lg shadow-lg hover:shadow-indigo-500/30 transition-all duration-300"
            >
              Get in Touch
            </motion.a>

            <div className="flex items-center gap-6">
              {socialLinks.map(({ icon: Icon, url, label }, idx) => (
                <a
                  key={idx}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-gray-300 hover:text-indigo-400 text-2xl transition-colors"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex-1 flex justify-center"
        >
          <div className="relative">
            <img
              loading="lazy"
              src={profilePic}
              alt="Jathusan Jesuthasan"
              className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full border-4 border-indigo-400/30 object-cover shadow-2xl z-10 relative"
            />
            <div className="absolute inset-0 rounded-full border-4 border-transparent bg-gradient-to-r from-purple-500 to-purple-700 blur-md z-0 -m-1 animate-spin-slow"></div>
            <div className="absolute -inset-4 rounded-full border-4 border-purple-500/10 z-0 animate-ping-slow"></div>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll down"
        initial={{ y: 0 }}
        animate={{ y: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-indigo-400 text-4xl cursor-pointer"
      >
        <FiChevronDown />
      </motion.a>

      <style>
        {`
          .text-shadow {
            text-shadow: 0 1px 3px rgba(0,0,0,0.7);
          }
          @keyframes spin-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          .animate-spin-slow {
            animation: spin-slow 20s linear infinite;
          }
          @keyframes ping-slow {
            75%, 100% {
              transform: scale(2);
              opacity: 0;
            }
          }
          .animate-ping-slow {
            animation: ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite;
          }
        `}
      </style>
    </section>
  );
}
