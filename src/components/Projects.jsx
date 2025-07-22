// src/components/Projects.jsx
import React from "react";

const projects = [
  {
    title: "Smart Accounting Assistant",
    period: "2023 - Present",
    description:
      "Developed a real-world AI-powered Smart Accounting Assistant using the MERN stack for a client to automate business financial operations. Features include transaction categorization, salary calculation, tax computation, invoicing, and AI-driven financial insights via Gemini API.",
    tech: ["MERN Stack", "Gemini API", "AI", "Finance"],
    github: "",
    link: "",
  },
  {
    title: "CashLeaf – Personal Finance Tracker",
    period: "2023",
    description:
      "A mobile app built using Kotlin for daily income and expense tracking, budget management, and visual analytics. It uses SharedPreferences for data persistence and a clean UI with Android Studio.",
    tech: ["Kotlin", "Android Studio", "SharedPreferences", "Mobile App"],
    github: "",
    link: "",
  },
  {
    title: "Movie Booking System",
    period: "2022",
    description:
      "A web-based movie reservation system with CRUD operations, payment integration, and contact form. Built using HTML, CSS, PHP, and MySQL with focus on responsive UI and secure backend.",
    tech: ["PHP", "MySQL", "HTML", "CSS"],
    github: "",
    link: "",
  },
  {
    title: "Aara Cakes – Online Cake Ordering App (UI/UX Design)",
    period: "2023",
    description:
      "Designed a mobile app UI for browsing, customizing, and ordering cakes. Included mockups for secure payments, live chat, and promotional banners using Figma.",
    tech: ["Figma", "UI/UX", "Mobile Design"],
    github: "",
    link: "",
  },
  {
    title: "Nithuja Cakes Portfolio Website",
    period: "2024",
    description:
      "Built a responsive portfolio site for a cake business using React and Tailwind CSS. Features include custom order form, WhatsApp integration, and cake gallery.",
    tech: ["React", "Tailwind CSS", "WhatsApp API"],
    github: "",
    link: "",
  },
  {
    title: "Saloon Perfect Portfolio",
    period: "2024",
    description:
      "Designed and developed a professional portfolio website for a beauty salon, showcasing services, booking options, and customer gallery.",
    tech: ["React", "Tailwind", "Figma", "Portfolio"],
    github: "",
    link: "",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-gray-950 text-white py-16 px-4 sm:px-8 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-indigo-400">Projects</h2>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-800 hover:border-indigo-400 transition">
              <h3 className="text-xl font-semibold text-white mb-1">{project.title}</h3>
              <p className="text-sm text-indigo-300 mb-2">{project.period}</p>
              <p className="text-gray-400 mb-4 text-sm">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-gray-800 text-xs px-2 py-1 rounded-full text-indigo-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 text-sm">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-400 hover:underline"
                  >
                    Live
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-400 hover:underline"
                  >
                    GitHub
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
