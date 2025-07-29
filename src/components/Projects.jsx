import React, { useMemo } from "react";
import {
  FaExternalLinkAlt,
  FaGithub,
  FaMobile,
  FaServer,
  FaPalette
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
          className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-10 md:mb-12 text-center text-indigo-400"
        >
          Projects
        </motion.h2>

        <div className="grid gap-5 sm:gap-6 md:gap-7 lg:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {categorizedProjects.map((project, index) => (
            <motion.article
              key={`${project.title}-${index}`}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
              className="bg-gray-900 p-4 sm:p-5 md:p-6 rounded-xl border border-gray-800 hover:border-indigo-400 transition-all duration-300 shadow-lg hover:shadow-xl h-full flex flex-col"
            >
              {project.image && (
                <img
                  src={project.image}
                  alt={`${project.title} preview`}
                  className="rounded-md mb-3 sm:mb-4 w-full object-cover h-32 sm:h-36 md:h-40"
                />
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
                {project.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-gray-800 text-xs px-2 py-1 rounded-full text-indigo-300"
                    aria-label={`Technology: ${tech}`}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-3 sm:gap-4 text-xs sm:text-sm mt-auto">
                {project.github ? (
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -2 }}
                    className="text-indigo-400 hover:text-indigo-300 transition flex items-center gap-1"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <FaGithub className="text-sm" /> Code
                  </motion.a>
                ) : (
                  <span className="text-gray-500 italic text-xs">Private</span>
                )}
                {project.link ? (
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -2 }}
                    className="text-indigo-400 hover:text-indigo-300 transition flex items-center gap-1"
                    aria-label={`View ${project.title} live demo`}
                  >
                    <FaExternalLinkAlt className="text-sm" /> Live
                  </motion.a>
                ) : (
                  <span className="text-gray-500 italic text-xs">No demo</span>
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
