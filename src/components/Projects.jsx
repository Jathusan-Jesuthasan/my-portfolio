import React, { useMemo, useState } from "react";
import {
  FaExternalLinkAlt,
  FaGithub,
  FaMobile,
  FaServer,
  FaPalette,
  FaFilter
} from "react-icons/fa";
import { motion } from "framer-motion";

const projectCategories = {
  web: {
    icon: <FaServer className="text-blue-400" />,
    label: "Web Development"
  },
  mobile: {
    icon: <FaMobile className="text-green-400" />,
    label: "Mobile App"
  },
  design: {
    icon: <FaPalette className="text-purple-400" />,
    label: "UI/UX Design"
  }
};

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const categorizedProjects = useMemo(() => {
    return projects.map(project => {
      let category = "web";
      if (
        project.tech.some(t => t.includes("Mobile")) ||
        project.title.includes("App")
      ) {
        category = "mobile";
      } else if (
        project.tech.some(t => t.includes("UI/UX") || t.includes("Figma"))
      ) {
        category = "design";
      }
      return { ...project, category };
    });
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeFilter === "all") return categorizedProjects;
    return categorizedProjects.filter(project => project.category === activeFilter);
  }, [categorizedProjects, activeFilter]);

  const filterOptions = [
    { key: "all", label: "All Projects", icon: <FaFilter /> },
    { key: "web", label: "Web Development", icon: <FaServer /> },
    { key: "mobile", label: "Mobile Apps", icon: <FaMobile /> },
    { key: "design", label: "UI/UX Design", icon: <FaPalette /> }
  ];

  return (
    <section
      id="projects"
      className="bg-gray-950 text-white py-12 sm:py-14 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-center text-indigo-400"
        >
          Projects
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-center text-gray-400 mb-8 sm:mb-10 max-w-2xl mx-auto"
        >
          A collection of projects showcasing my skills in full-stack development, mobile apps, and UI/UX design
        </motion.p>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-10"
        >
          {filterOptions.map((option) => (
            <button
              key={option.key}
              onClick={() => setActiveFilter(option.key)}
              className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                activeFilter === option.key
                  ? "bg-indigo-500 text-white shadow-lg"
                  : "bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-indigo-300"
              }`}
            >
              <span className="text-xs">{option.icon}</span>
              <span className="hidden sm:inline">{option.label}</span>
              <span className="sm:hidden">{option.key === "all" ? "All" : option.label.split(" ")[0]}</span>
            </button>
          ))}
        </motion.div>

        {/* Projects Count */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="text-center text-gray-500 text-sm mb-6 sm:mb-8"
        >
          {filteredProjects.length} {filteredProjects.length === 1 ? 'project' : 'projects'} 
          {activeFilter !== "all" && (
            <span> in {filterOptions.find(f => f.key === activeFilter)?.label}</span>
          )}
        </motion.div>

        <div className="grid gap-5 sm:gap-6 md:gap-7 lg:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <motion.article
              key={`${project.title}-${index}`}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
              className="bg-gray-900 p-4 sm:p-5 md:p-6 rounded-xl border border-gray-800 hover:border-indigo-400 hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300 h-full flex flex-col group"
            >
              {project.image ? (
                <div className="relative overflow-hidden rounded-md mb-3 sm:mb-4 group">
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    className="w-full object-cover h-32 sm:h-36 md:h-40 transition-transform duration-300 group-hover:scale-110"
                    loading="lazy"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="hidden absolute inset-0 bg-gray-800 items-center justify-center rounded-md">
                    <div className="text-center text-gray-500">
                      {projectCategories[project.category].icon}
                      <p className="text-xs mt-2">Preview Coming Soon</p>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                </div>
              ) : (
                <div className="bg-gray-800 rounded-md mb-3 sm:mb-4 h-32 sm:h-36 md:h-40 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    {projectCategories[project.category].icon}
                    <p className="text-xs mt-2">Preview Coming Soon</p>
                  </div>
                </div>
              )}

              <div className="flex justify-between items-start mb-2 sm:mb-3">
                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white leading-tight pr-2">
                  {project.title}
                </h3>
                <span className="text-xs bg-gray-800 text-indigo-300 px-2 py-1 rounded-full flex items-center gap-1 flex-shrink-0">
                  {projectCategories[project.category].icon}
                  <span className="hidden sm:inline">{projectCategories[project.category].label}</span>
                </span>
              </div>

              <time className="text-xs text-indigo-300 mb-2 sm:mb-3 block">
                {project.period}
              </time>

              <p className="text-gray-400 mb-3 sm:mb-4 text-xs sm:text-sm leading-relaxed flex-grow">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                {project.tech.slice(0, 4).map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-gray-800 text-xs px-2 py-1 rounded-full text-indigo-300 hover:bg-indigo-900/30 transition-colors"
                    aria-label={`Technology: ${tech}`}
                  >
                    {tech}
                  </span>
                ))}
                {project.tech.length > 4 && (
                  <span className="bg-gray-700 text-xs px-2 py-1 rounded-full text-gray-400">
                    +{project.tech.length - 4} more
                  </span>
                )}
              </div>

              <div className="flex gap-3 sm:gap-4 text-xs sm:text-sm mt-auto pt-2 border-t border-gray-800">
                {project.github ? (
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-indigo-400 hover:text-indigo-300 transition flex items-center gap-1.5 hover:bg-gray-800 px-2 py-1 rounded"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <FaGithub className="text-sm" /> 
                    <span>Code</span>
                  </motion.a>
                ) : (
                  <span className="text-gray-500 italic text-xs flex items-center gap-1.5 px-2 py-1">
                    <FaGithub className="text-sm opacity-50" /> Private
                  </span>
                )}
                {project.link ? (
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-indigo-400 hover:text-indigo-300 transition flex items-center gap-1.5 hover:bg-gray-800 px-2 py-1 rounded"
                    aria-label={`View ${project.title} live demo`}
                  >
                    <FaExternalLinkAlt className="text-sm" /> 
                    <span>Live</span>
                  </motion.a>
                ) : (
                  <span className="text-gray-500 italic text-xs flex items-center gap-1.5 px-2 py-1">
                    <FaExternalLinkAlt className="text-sm opacity-50" /> No demo
                  </span>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

const projects = [
  {
    title: "Smart Accounting Assistant – MERN Stack",
    period: "2023 - Present",
    description:
      "Developed a real-world AI-powered Smart Accounting Assistant using the MERN stack to automate business financial operations. The system includes transaction categorization, salary calculation, tax computation, invoicing, and AI-driven insights through Gemini API integration.",
    tech: ["MERN Stack", "Node.js", "React", "Gemini API", "AI", "MongoDB"],
    github: "", // Add if available
    link: "",   // Add if available
    image: "/images/smart-accounting.png"
  },
  {
    title: "CashLeaf – Personal Finance Tracker",
    period: "2023",
    description:
      "Created a Kotlin-based mobile app for daily income and expense tracking, budget management, and real-time visual analytics. Implemented SharedPreferences for local data persistence and intuitive UI components with Android Studio.",
    tech: ["Kotlin", "Android Studio", "SharedPreferences", "Finance", "Mobile App"],
    github: "", // Add if available
    link: "",   // Add if available
    image: "/images/cashleaf-app.png"
  },
  {
    title: "PlanIt – Event Management System",
    period: "2023",
    description:
      "Developed a full-stack event booking web application with role-based access control, dynamic event listings, booking and payment management, and comprehensive admin dashboard. Built using MVC architecture with OOP principles and complete CRUD operations. Features responsive UI design with HTML, CSS, JavaScript, and Bootstrap.",
    tech: ["Java Servlets", "JSP", "JDBC", "MySQL", "MVC", "Bootstrap", "HTML", "CSS", "JavaScript"],
    github: "", // Add if available
    link: "",   // Add if available
    image: "/images/planit-event.png"
  },
  {
    title: "Movie Booking System",
    period: "2022",
    description:
      "Engineered a web-based movie reservation platform with full CRUD operations, integrated payment module, and a contact form. Built using HTML, CSS, PHP, and MySQL with a focus on responsive UI and secure backend.",
    tech: ["HTML", "CSS", "PHP", "MySQL", "CRUD", "Web App"],
    github: "", // Add if available
    link: "",   // Add if available
    image: "/images/movie-booking.png"
  },
  {
    title: "Aara Cakes – Online Cake Ordering App (UI/UX)",
    period: "2023",
    description:
      "Designed a complete mobile UI using Figma for an online cake ordering app. Included features like cake customization, real-time order tracking, secure payment screens, and promotional banners with a user-centered approach.",
    tech: ["Figma", "UI/UX", "Mobile Design", "Prototyping"],
    github: "", // Add if available
    link: "",   // Add if available
    image: "/images/aara-cakes-ui.png"
  },
  {
    title: "Nithuja Cakes Portfolio Website",
    period: "2024",
    description:
      "Developed a modern portfolio site for a home-based cake business using React and Tailwind CSS. Features include a custom order form, WhatsApp ordering integration, and a photo gallery to showcase cake designs.",
    tech: ["React", "Tailwind CSS", "WhatsApp API", "Portfolio"],
    github: "", // Add if available
    link: "",   // Add if available
    image: "/images/nithuja-cakes.png"
  },
  {
    title: "Saloon Perfect – Beauty Salon Portfolio Website",
    period: "2024",
    description:
      "Built a responsive website for Saloon Perfect to showcase services, customer reviews, and gallery. Ensured clean layout, booking options, and mobile-first optimization for a smooth browsing experience.",
    tech: ["HTML", "CSS", "Responsive Web", "Salon Website"],
    github: "", // Optional
    link: "https://salonperfect.lk/index.html",
    image: "/images/saloon-perfect.png"
  }
];


export default React.memo(Projects);
