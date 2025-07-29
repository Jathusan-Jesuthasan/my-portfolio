import React from "react";
import { FaCertificate, FaAward } from "react-icons/fa";
import { motion } from "framer-motion";

const Certifications = [
  {
    title: "Agile and Scrum (Professional Diploma)",
    issuer: "Udemy",
    year: "2024",
    link: "https://www.udemy.com/certificate/UC-0ffd1a78-b4f9-466e-83ce-e64356fb3c5a/",
  },
  {
    title: "Foundations of Prompt Engineering",
    issuer: "AWS Skill Builder",
    year: "2025",
    link: "https://skillbuilder.aws/learn/VF6H4SZ1BU/foundations-of-prompt-engineering/7U8XFUVXDT",
  },
  {
    title: "Web Design for Beginners",
    issuer: "University of Moratuwa",
    year: "2023",
    link: "https://open.uom.lk/lms/mod/customcert/verify_certificate.php?code=TzFhz3pKba",
  },
  {
    title: "Build a Free Website with WordPress",
    issuer: "Coursera",
    year: "2023",
    link: "https://www.coursera.org/account/accomplishments/verify/MV6WA2TE1Q5J",
  },
  {
    title: "Basic Digital Marketing",
    issuer: "Alison",
    year: "2022",
    link: "https://alison.com/certification/check/a4b662ce6f",
  },
  {
    title: "Skill Certification Badge",
    issuer: "Badgr",
    year: "2024",
    link: "https://badgr.com/public/assertions/M5h-DyMWTiqsj2l-Tohm5w",
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-16 px-4 sm:px-8 lg:px-20 bg-gray-950 text-white">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold mb-12 text-center"
        >
          <span className="text-indigo-400">My</span> Certifications
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-indigo-400 transition-all hover:shadow-lg hover:shadow-indigo-500/10"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-indigo-500/20 p-2 rounded-lg">
                    <FaCertificate className="text-indigo-400" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{cert.title}</h3>
                    <p className="text-gray-400 text-sm">
                      {cert.issuer} • {cert.year}
                    </p>
                  </div>
                </div>
                
                {cert.link && (
                  <div className="mt-auto">
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm text-indigo-400 hover:text-indigo-300 hover:underline transition"
                    >
                      View Certificate
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 ml-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
