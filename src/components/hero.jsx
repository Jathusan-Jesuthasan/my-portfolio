
import React from 'react';
import profilePic from '../assets/profile2.png';
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
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white overflow-hidden"
    >
      {/* Animated Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-20 -top-20 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-20 left-1/4 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 py-20">
        {/* Left: Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 space-y-6"
        >
          <div>
            <p className="text-lg font-medium text-purple-400">Hello, I'm</p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
              Jathusan <span className="bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 bg-clip-text text-transparent">Jesuthasan</span>
            </h1>
          </div>

          <p className="text-lg text-gray-300 max-w-xl leading-relaxed">
          3rd Year Software Engineering undergraduate at SLIIT, passionate about crafting exceptional digital experiences through modern web technologies and clean code practices.          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <motion.a
              href="#contact"
              aria-label="Contact me"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 transition text-white font-semibold rounded-xl shadow-lg text-center"
            >
              Get in Touch
            </motion.a>
            <motion.a
              href="#projects"
              aria-label="View my projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 border-2 border-indigo-500 hover:bg-indigo-600 hover:text-white transition text-indigo-300 font-semibold rounded-xl text-center"
            >
              View My Projects
            </motion.a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-5 pt-4">
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
        </motion.div>

        {/* Right: Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 flex justify-center"
        >
          <div className="relative">
            <img
              src={profilePic}
              alt="Jathusan Jesuthasan"
              className="w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-indigo-500/30 object-cover shadow-2xl z-10 relative"
              loading="eager"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-purple-700 blur-md -z-10 animate-spin-slow"></div>
            <div className="absolute -inset-4 rounded-full border-4 border-purple-500/10 animate-ping-slow"></div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
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

      {/* Custom Animations */}
      <style>
        {`
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

// import React from 'react';
// import profilePic from '../assets/profile2.png';
// import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
// import { SiLeetcode } from 'react-icons/si';
// import { FiChevronDown } from 'react-icons/fi';
// import { motion } from 'framer-motion';

// const socialLinks = [
//   { icon: FaLinkedin, url: "https://www.linkedin.com/in/jathusan-jesuthasan-69a057294/", label: "LinkedIn" },
//   { icon: FaGithub, url: "https://github.com/Jathusan-Jesuthasan", label: "GitHub" },
//   { icon: SiLeetcode, url: "https://leetcode.com/u/7nNdDsZvgo/", label: "LeetCode" },
//   { icon: FaTwitter, url: "https://twitter.com/yourprofile", label: "Twitter" },
// ];

// export default function Hero() {
//   return (
//     <section
//       id="hero"
//       className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white overflow-hidden"
//     >
//       {/* Animated background elements */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute -left-20 -top-20 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
//         <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
//         <div className="absolute -bottom-20 left-1/4 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
//       </div>

//       <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 sm:gap-10 md:gap-12 lg:gap-16 py-16 sm:py-20">
//         <motion.div 
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//           className="flex-1 space-y-6 sm:space-y-7 md:space-y-8"
//         >
//           <div className="space-y-3 sm:space-y-4">
//             <p className="text-base sm:text-lg md:text-xl font-medium text-purple-400">Hello, I'm</p>
//            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
//              Jathusan <span className="bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 bg-clip-text text-transparent">Jesuthasan</span>
//            </h1>



//           </div>

//           <div className="max-w-xl">
//             <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed">
//               3rd Year Software Engineering undergraduate at SLIIT, passionate about crafting exceptional digital experiences through modern web technologies and clean code practices.
//             </p>
//           </div>

//           <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5 md:gap-6 pt-3 sm:pt-4">
//             <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
//               <motion.a
//                 aria-label="Contact me"
//                 whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(147, 51, 234, 0.5)" }}
//                 whileTap={{ scale: 0.95 }}
//                 href="#contact"
//                 className="px-6 sm:px-7 md:px-8 py-3 sm:py-3.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg font-semibold text-sm sm:text-base lg:text-lg shadow-lg hover:shadow-indigo-500/30 transition-all duration-300 text-center"
//               >
//                 Get in Touch
//               </motion.a>
              
//               <motion.a
//                 aria-label="View my projects"
//                 whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(147, 51, 234, 0.5)" }}
//                 whileTap={{ scale: 0.95 }}
//                 href="#projects"
//                 className="px-6 sm:px-7 md:px-8 py-3 sm:py-3.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg font-semibold text-sm sm:text-base lg:text-lg shadow-lg hover:shadow-indigo-500/30 transition-all duration-300 text-center"
//               >
//                 View My Projects
//               </motion.a>
//             </div>

//             <div className="flex items-center gap-4 sm:gap-5 md:gap-6">
//               {socialLinks.map(({ icon: Icon, url, label }, idx) => (
//                 <a
//                   key={idx}
//                   href={url}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   aria-label={label}
//                   className="text-gray-300 hover:text-indigo-400 text-xl sm:text-2xl transition-colors p-2 hover:bg-white/10 rounded-lg"
//                 >
//                   <Icon />
//                 </a>
//               ))}
//             </div>
//           </div>
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, scale: 0.8 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//           className="relative flex-1 flex justify-center"
//         >
//           <div className="relative">
//             <img
//               src={profilePic}
//               alt="Jathusan Jesuthasan - Software Engineering Student at SLIIT"
//               className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full border-4 border-indigo-400/30 object-cover shadow-2xl z-10 relative"
//               width="320"
//               height="320"
//               decoding="async"
//               loading="eager"
//               fetchPriority="high"
//             />
//             <div className="absolute inset-0 rounded-full border-4 border-transparent bg-gradient-to-r from-purple-500 to-purple-700 blur-md z-0 -m-1 animate-spin-slow"></div>
//             <div className="absolute -inset-4 rounded-full border-4 border-purple-500/10 z-0 animate-ping-slow"></div>
//           </div>
//         </motion.div>
//       </div>

//       <motion.a
//         href="#about"
//         aria-label="Scroll down"
//         initial={{ y: 0 }}
//         animate={{ y: [0, 15, 0] }}
//         transition={{ repeat: Infinity, duration: 2 }}
//         className="absolute bottom-10 left-1/2 -translate-x-1/2 text-indigo-400 text-4xl cursor-pointer"
//       >
//         <FiChevronDown />
//       </motion.a>

//       <style>
//         {`
//           .text-shadow {
//             text-shadow: 0 1px 3px rgba(0,0,0,0.7);
//           }
//           @keyframes spin-slow {
//             from { transform: rotate(0deg); }
//             to { transform: rotate(360deg); }
//           }
//           .animate-spin-slow {
//             animation: spin-slow 20s linear infinite;
//           }
//           @keyframes ping-slow {
//             75%, 100% {
//               transform: scale(2);
//               opacity: 0;
//             }
//           }
//           .animate-ping-slow {
//             animation: ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite;
//           }
//         `}
//       </style>
//     </section>
//   );
// }