import React from "react";
import { FaLinkedin, FaGithub, FaTwitter, FaWhatsapp, FaEnvelope, FaArrowUp } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer() {
  const socialLinks = [
    {
      icon: <FaLinkedin />,
      url: "https://linkedin.com/in/yourprofile",
      label: "LinkedIn"
    },
    {
      icon: <FaGithub />,
      url: "https://github.com/yourprofile",
      label: "GitHub"
    },
    {
      icon: <FaTwitter />,
      url: "https://twitter.com/yourprofile",
      label: "Twitter"
    },
    {
      icon: <FaWhatsapp />,
      url: "https://wa.me/94771514753",
      label: "WhatsApp"
    },
    {
      icon: <FaEnvelope />,
      url: "mailto:jesuthasanjathusan@gmail.com",
      label: "Email"
    }
  ];

  return (
    <footer className="bg-gray-950 text-gray-400 border-t border-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Copyright */}
          <div className="text-sm">
            &copy; {new Date().getFullYear()} <span className="text-white">Jathusan Jesuthasan</span>. All rights reserved.
          </div>

          {/* Social Links */}
          <div className="flex gap-6">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                whileHover={{ y: -3, color: "#818CF8" }} // indigo-400
                transition={{ type: "spring", stiffness: 300 }}
                className="text-xl text-gray-400 hover:text-indigo-400 transition-colors"
              >
                {link.icon}
              </motion.a>
            ))}
          </div>

          {/* Back to top */}
          <motion.a
            href="#top"
            aria-label="Back to top"
            whileHover={{ y: -3 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="flex items-center gap-2 text-sm group"
          >
            <span className="group-hover:text-indigo-400 transition-colors">Back to top</span>
            <span className="bg-indigo-500/20 p-2 rounded-lg group-hover:bg-indigo-500/30 transition">
              <FaArrowUp className="text-indigo-400" />
            </span>
          </motion.a>
        </div>

        {/* Optional: Footer note */}
        <div className="mt-8 text-center text-xs text-gray-500">
          Built with React and Tailwind CSS. Designed with care in Sri Lanka.
        </div>
      </div>
    </footer>
  );
}