import React from "react";
import { FaCode, FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaPython, FaJava, FaPhp } from "react-icons/fa";
import { SiMongodb, SiTailwindcss, SiVite, SiFigma, SiTypescript, SiKotlin, SiMysql, SiBootstrap, SiAndroid, SiEclipseide, SiIntellijidea, SiGithub, SiExpress, SiCplusplus } from "react-icons/si";
import { GiTalk, GiTeamIdea, GiTimeSynchronization } from "react-icons/gi";
import { motion } from "framer-motion";

const SkillCard = ({ icon: Icon, label, category }) => {
  const categoryColors = {
    "Programming": "text-purple-500",
    "Web": "text-blue-500",
    "Database": "text-green-500",
    "Tools": "text-indigo-500",
    "Concepts": "text-amber-500",
    "VersionControl": "text-red-500",
    "Professional": "text-amber-500",
  };

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
      className={`flex flex-col items-center gap-3 bg-white dark:bg-gray-800 p-5 rounded-xl shadow-sm hover:shadow-md border border-gray-200 dark:border-gray-700 transition-all`}
      aria-label={label}
      role="img"
    >
      <Icon className={`text-4xl ${categoryColors[category] || "text-indigo-500"}`} />
      <span className="text-sm font-medium text-center text-gray-700 dark:text-gray-300">{label}</span>
    </motion.div>
  );
};

const Skills = () => {
  const groupedSkills = {
    "Technical Skills": {
      "Programming Languages": [
        { icon: FaJs, label: "JavaScript" , category: "Programming"},
        { icon: FaPython, label: "Python" , category: "Programming"},
        { icon: FaCode, label: "C" , category: "Programming"},  // generic code icon for C
        { icon: FaCode, label: "C++" , category: "Programming"},
        { icon: FaJava, label: "Java" , category: "Programming"},
        { icon: FaPhp, label: "PHP" , category: "Programming"},
        { icon: SiKotlin, label: "Kotlin" , category: "Programming"},
      ],
      "Web Technologies": [
        { icon: FaHtml5, label: "HTML5" , category: "Web"},
        { icon: FaCss3Alt, label: "CSS3" , category: "Web"},
        { icon: SiBootstrap, label: "Bootstrap" , category: "Web"},
        { icon: SiMongodb, label: "MongoDB" , category: "Database"}, // mongo is also db but part of MERN stack here
        { icon: SiExpress, label: "Express.js" , category: "Web"},
        { icon: FaReact, label: "React.js" , category: "Web"},
        { icon: FaNodeJs, label: "Node.js" , category: "Web"},
      ],
      "Databases & Query Languages": [
        { icon: SiMysql, label: "MySQL" , category: "Database"},
        { icon: SiMongodb, label: "MongoDB" , category: "Database"},
        { icon: FaCode, label: "Microsoft SQL Server (T-SQL)" , category: "Database"},
      ],
      "Development Tools & IDEs": [
        { icon: FaGitAlt, label: "GitHub" , category: "Tools"},
        { icon: SiVite, label: "Vite" , category: "Tools"},
        { icon: FaCode, label: "VS Code" , category: "Tools"},
        { icon: SiEclipseide, label: "Eclipse IDE" , category: "Tools"},
        { icon: SiIntellijidea, label: "IntelliJ IDEA" , category: "Tools"},
        { icon: SiAndroid, label: "Android Studio" , category: "Tools"},
        { icon: SiCplusplus, label: "Dev-C++" , category: "Tools"},
      ],
      "Concepts": [
        { icon: FaCode, label: "Data Structures & Algorithms (DSA)" , category: "Concepts"},
        { icon: FaCode, label: "Object-Oriented Programming (OOP)" , category: "Concepts"},
      ],
      "Version Control": [
        { icon: SiGithub, label: "GitHub" , category: "VersionControl"},
      ],
    },
    "Professional Skills": {
      "Workplace Competencies": [
        { icon: GiTalk, label: "Communication" , category: "Professional"},
        { icon: GiTeamIdea, label: "Collaboration" , category: "Professional"},
        { icon: GiTimeSynchronization, label: "Time Management" , category: "Professional"},
      ],
    },
  };

  return (
    <section id="skills" className="py-16 px-4 sm:px-8 lg:px-20 bg-gray-50 dark:bg-gray-950">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-3">
            My <span className="text-indigo-600 dark:text-indigo-400">Skills</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A collection of technical abilities and professional competencies I've developed
          </p>
        </div>

        {Object.entries(groupedSkills).map(([category, subcategories], catIdx) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: catIdx * 0.1 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white flex items-center gap-3">
              <span className="w-2 h-8 bg-indigo-600 rounded-full"></span>
              {category}
            </h3>

            {Object.entries(subcategories).map(([subcat, skills], subcatIdx) => (
              <div key={subcat} className="mb-8">
                <h4 className="text-lg font-medium mb-4 text-gray-700 dark:text-gray-300">
                  {subcat}
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  {skills.map((skill, idx) => (
                    <SkillCard
                      key={skill.label} 
                      icon={skill.icon}
                      label={skill.label}
                      category={skill.category}
                    />
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
