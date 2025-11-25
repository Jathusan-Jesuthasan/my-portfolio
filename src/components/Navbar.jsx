import React, { useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "../contexts/ThemeContext";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { darkMode, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const navigate = useNavigate();

  const navItems = [
    {
      name: "About",
      href: "#about",
      subItems: [
        { name: "About Me", href: "#about" },
        { name: "My Education", href: "#education" },
        { name: "Language Proficiency", href: "#language" },
      ],
    },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href) => {
    const id = href.replace("#", "");

    const tryScroll = (attempts = 0) => {
      const section = document.getElementById(id);

      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      } else if (attempts < 10) {
        // If section not found, wait a bit and try again (for lazy-loaded components)
        setTimeout(() => tryScroll(attempts + 1), 120);
      } else {
        navigate("/", { state: { scrollTo: id } });
      }
    };

    tryScroll();
  };

  return (
    <nav className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-md fixed top-0 w-full z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo */}
          <div className="text-lg sm:text-xl md:text-2xl font-bold tracking-tight text-purple-600 dark:text-purple-400">
            Jathusan{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-purple-700">
              Jesuthasan
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <ul className="flex space-x-6 lg:space-x-8">
              {navItems.map((item) => (
                <li key={item.name} className="relative group">
                  <motion.button
                    whileHover={{ y: -2 }}
                    onClick={() => scrollToSection(item.href)}
                    className="relative text-sm font-medium px-3 py-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200"
                  >
                    {item.name}
                  </motion.button>

                  {item.subItems && (
                    <ul className="absolute top-full left-0 mt-2 w-44 sm:w-48 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-xl opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transform transition-all duration-200 z-50 invisible group-hover:visible">
                      {item.subItems.map((subItem) => (
                        <li key={subItem.name}>
                          <button
                            onClick={() => scrollToSection(subItem.href)}
                            className="w-full text-left block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                          >
                            {subItem.name}
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
            <button
              onClick={toggleTheme}
              className="ml-4 w-10 h-10 flex items-center justify-center p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {darkMode ? (
                <FiSun className="h-5 w-5 text-yellow-500" />
              ) : (
                <FiMoon className="h-5 w-5 text-gray-800" />
              )}
            </button>
          </div>

          {/* Mobile Nav Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => {
                setIsOpen(!isOpen);
                if (isOpen) setOpenSubmenu(null);
              }}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500"
              aria-label="Toggle mobile menu"
            >
              <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white dark:bg-gray-900 px-4 py-4 space-y-2"
          >
            {navItems.map((item) => (
              <div key={item.name}>
                {item.subItems ? (
                  <div>
                    <button
                      onClick={() => setOpenSubmenu(openSubmenu === item.name ? null : item.name)}
                      className="flex items-center justify-between w-full px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                    >
                      <span>{item.name}</span>
                      <svg className={`w-4 h-4 transition-transform ${openSubmenu === item.name ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <AnimatePresence>
                      {openSubmenu === item.name && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <div className="pl-4 space-y-1 pt-1">
                            {item.subItems.map((subItem) => (
                              <button
                                key={subItem.name}
                                onClick={() => {
                                  setIsOpen(false);
                                  setOpenSubmenu(null);
                                  // Add a small delay to allow menu to close before scrolling
                                  setTimeout(() => {
                                    scrollToSection(subItem.href);
                                  }, 100);
                                }}
                                className="w-full text-left block px-3 py-2 rounded-md text-sm text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                              >
                                {subItem.name}
                              </button>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      setIsOpen(false);
                      setOpenSubmenu(null);
                      // Add a small delay to allow menu to close before scrolling
                      setTimeout(() => {
                        scrollToSection(item.href);
                      }, 100);
                    }}
                    className="block w-full text-left px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                  >
                    {item.name}
                  </motion.button>
                )}
              </div>
            ))}

            <div className="pt-2 px-3">
              <button
                onClick={toggleTheme}
                className="w-10 h-10 flex items-center justify-center p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
              >
                {darkMode ? (
                  <FiSun className="h-5 w-5 text-yellow-500" />
                ) : (
                  <FiMoon className="h-5 w-5 text-gray-800" />
                )}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
