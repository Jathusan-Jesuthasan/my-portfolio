import React, { useState, useEffect } from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDarkMode]);

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

  return (
    <nav id="navbar" className="bg-white dark:bg-gray-900 shadow-md fixed top-0 w-full z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div id="logo" className="flex-shrink-0 text-2xl font-bold text-purple-600 dark:text-purple-400">
            Jathusan <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-purple-700">Jesuthasan</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-8">
              {navItems.map((item) => (
                <li key={item.name} className="relative group">
                  <motion.a
                    whileHover={{ y: -2 }}
                    href={item.href}
                    className="relative text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                  >
                    {item.name}
                  </motion.a>

                  {item.subItems && (
                    <ul className="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transform transition-all duration-200 z-50 invisible group-hover:visible">
                      {item.subItems.map((subItem) => (
                        <li key={subItem.name}>
                          <a
                            href={subItem.href}
                            className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                          >
                            {subItem.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="ml-4 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
              aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
              id="theme-toggle"
            >
              {isDarkMode ? (
                <FiSun className="h-5 w-5 text-yellow-500" />
              ) : (
                <FiMoon className="h-5 w-5 text-gray-800" />
              )}
            </button>
          </div>

          {/* Mobile Nav Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
              aria-label={isOpen ? "Close main menu" : "Open main menu"}
              id="mobile-menu-toggle"
            >
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
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
            className="md:hidden bg-white dark:bg-gray-900"
            id="mobile-menu"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <div key={item.name}>
                  <motion.a
                    whileTap={{ scale: 0.95 }}
                    href={item.href}
                    onClick={() => {
                      if (!item.subItems) setIsOpen(false);
                    }}
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
                  >
                    {item.name}
                  </motion.a>
                  {item.subItems && (
                    <div className="pl-4 space-y-1">
                      {item.subItems.map((subItem) => (
                        <a
                          key={subItem.name}
                          href={subItem.href}
                          onClick={() => setIsOpen(false)}
                          className="block px-3 py-1 rounded-md text-sm text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                        >
                          {subItem.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="px-3 py-2">
                <button
                  onClick={() => setIsDarkMode(!isDarkMode)}
                  className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
                >
                  {isDarkMode ? (
                    <FiSun className="h-5 w-5 text-yellow-500" />
                  ) : (
                    <FiMoon className="h-5 w-5 text-gray-800" />
                  )}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
