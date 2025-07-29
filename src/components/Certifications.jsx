import React from "react";
import { FaCertificate } from "react-icons/fa";
import { motion } from "framer-motion";

const certifications = [
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
    <section id="certifications" className="py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 bg-gray-950 text-white">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-10 md:mb-12 text-center"
        >
          <span className="text-indigo-400">My</span> Certifications
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900 border border-gray-800 rounded-xl p-4 sm:p-5 md:p-6 lg:p-8 hover:border-indigo-500 transition-all hover:shadow-lg hover:shadow-indigo-500/10"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-start gap-3 sm:gap-4 md:gap-5 mb-3 sm:mb-4 md:mb-5">
                  <div className="bg-indigo-500/20 p-2 sm:p-2.5 md:p-3 rounded-lg flex-shrink-0">
                    <FaCertificate className="text-indigo-400" size={20} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-base sm:text-lg md:text-xl font-semibold leading-tight">{cert.title}</h3>
                    <p className="text-gray-400 text-xs sm:text-sm mt-1">
                      {cert.issuer} • {cert.year}
                    </p>
                  </div>
                </div>

                {cert.link && (
                  <div className="mt-auto pt-2 sm:pt-3 md:pt-4">
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
