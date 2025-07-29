import React, { useState } from "react";
import { FaLinkedin, FaGithub, FaTwitter, FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // EmailJS configuration - Using environment variables for security
      const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
      
      // Check if EmailJS is properly configured
      if (!serviceID || !templateID || !publicKey || 
          serviceID === 'your_service_id_here' || 
          templateID === 'your_template_id_here' || 
          publicKey === 'your_public_key_here') {
        
        // Fallback: Open default email client with pre-filled message
        const subject = `Portfolio Contact: Message from ${formData.name}`;
        const body = `Hello Jathusan,

I'm contacting you through your portfolio website.

Name: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}

---
Sent via your portfolio contact form`;
        
        const mailtoUrl = `mailto:jesuthasanjathusan@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.open(mailtoUrl, '_blank');
        
        setSubmitStatus({
          success: true,
          message: `Thank you, ${formData.name}! Your default email client should open with a pre-filled message. Please send it to complete your inquiry.`
        });
        setFormData({ name: "", email: "", message: "" });
        return;
      }
      
      // Template parameters that will be sent to your email
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: 'Jathusan Jesuthasan', // Your name
        reply_to: formData.email,
      };
      
      // Send email using EmailJS
      await emailjs.send(serviceID, templateID, templateParams, publicKey);
      
      setSubmitStatus({
        success: true,
        message: `Thank you, ${formData.name}! Your message has been sent successfully. I'll get back to you soon!`
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error('EmailJS Error:', error);
      
      // Fallback: Open default email client with pre-filled message
      const subject = `Portfolio Contact: Message from ${formData.name}`;
      const body = `Hello Jathusan,

I'm contacting you through your portfolio website.

Name: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}

---
Sent via your portfolio contact form`;
      
      const mailtoUrl = `mailto:jesuthasanjathusan@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.open(mailtoUrl, '_blank');
      
      setSubmitStatus({
        success: true,
        message: `Your default email client should open with a pre-filled message. Please send it to complete your inquiry.`
      });
      setFormData({ name: "", email: "", message: "" });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  const socialLinks = [
    {
      icon: <FaLinkedin className="text-xl" />,
      url: "https://www.linkedin.com/in/jathusan-jesuthasan-69a057294/",
      label: "LinkedIn Profile"
    },
    {
      icon: <FaGithub className="text-xl" />,
      url: "https://github.com/Jathusan-Jesuthasan",
      label: "GitHub Profile"
    },
    {
      icon: <SiLeetcode className="text-xl" />,
      url: "https://leetcode.com/u/7nNdDsZvgo/",
      label: "LeetCode Profile"
    },
    {
      icon: <FaWhatsapp className="text-xl" />,
      url: "https://wa.me/94771514753",
      label: "+94 77 1514 753"
    },
    {
      icon: <FaEnvelope className="text-xl" />,
      url: "mailto:jesuthasanjathusan@gmail.com",
      label: "jesuthasanjathusan@gmail.com"
    },
    {
      icon: <FaMapMarkerAlt className="text-xl" />,
      url: "#",
      label: "Colombo, Sri Lanka"
    }
  ];

  return (
    <section
      id="contact"
      className="bg-gradient-to-br from-gray-900 via-gray-950 to-black text-white py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-14 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-purple-400 via-indigo-400 to-purple-600 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Let's discuss how we can work together to bring your ideas to life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 md:gap-14 lg:gap-16">
          {/* Contact Information */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6 sm:space-y-7 md:space-y-8"
          >
            <div className="space-y-4 sm:space-y-5 md:space-y-6">
              <h3 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
                Let's collaborate on something{" "}
                <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
                  extraordinary
                </span>
              </h3>
              
              <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed">
                I'm a 3rd year Software Engineering student at SLIIT, passionate about creating innovative solutions and building meaningful digital experiences. 
                Whether you have a project in mind or just want to connect, I'd love to hear from you.
              </p>

              <div className="flex flex-wrap gap-2 sm:gap-3">
                <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-purple-600/20 text-purple-300 rounded-full text-xs sm:text-sm font-medium border border-purple-500/30">
                  Frontend Development
                </span>
                <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-indigo-600/20 text-indigo-300 rounded-full text-xs sm:text-sm font-medium border border-indigo-500/30">
                  Full Stack Solutions
                </span>
                <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-600/20 text-blue-300 rounded-full text-xs sm:text-sm font-medium border border-blue-500/30">
                  Problem Solving
                </span>
              </div>
            </div>

            <ul className="space-y-3 sm:space-y-4">
              {socialLinks.map((link, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="flex items-center gap-3 sm:gap-4 group"
                >
                  <span className="bg-gradient-to-r from-purple-600/20 to-indigo-600/20 p-2.5 sm:p-3 rounded-xl group-hover:from-purple-600/30 group-hover:to-indigo-600/30 transition-all duration-300 flex-shrink-0">
                    {React.cloneElement(link.icon, { className: "text-purple-400 text-lg sm:text-xl" })}
                  </span>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-colors duration-200 hover:underline font-medium text-sm sm:text-base"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-indigo-600/10 rounded-2xl blur-xl"></div>
            <div className="relative bg-gray-900/80 backdrop-blur-sm p-6 sm:p-7 md:p-8 rounded-2xl border border-gray-700/50 shadow-2xl">
              <div className="mb-6 sm:mb-7 md:mb-8">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Send me a message</h3>
                <p className="text-gray-400 text-sm sm:text-base">I'll get back to you within 24 hours</p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 md:space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-semibold text-gray-200 mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your full name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-gray-800/60 border border-gray-600/50 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 text-white placeholder-gray-400 transition-all duration-200 backdrop-blur-sm text-sm sm:text-base"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-semibold text-gray-200 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="your.email@example.com"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-gray-800/60 border border-gray-600/50 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 text-white placeholder-gray-400 transition-all duration-200 backdrop-blur-sm text-sm sm:text-base"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-semibold text-gray-200 mb-2">
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Tell me about your project or idea..."
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-gray-800/60 border border-gray-600/50 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 text-white placeholder-gray-400 transition-all duration-200 resize-none backdrop-blur-sm text-sm sm:text-base"
                ></textarea>
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-semibold py-3 sm:py-3.5 md:py-4 px-6 rounded-xl transition-all duration-200 flex items-center justify-center gap-3 shadow-lg hover:shadow-purple-500/25 disabled:opacity-70 disabled:cursor-not-allowed text-sm sm:text-base"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <FaPaperPlane className="text-sm" />
                    Send Message
                  </>
                )}
              </motion.button>

              {submitStatus && (
                <div className={`p-3 rounded-lg text-sm ${submitStatus.success ? 'bg-green-900/50 text-green-300' : 'bg-red-900/50 text-red-300'}`}>
                  {submitStatus.message}
                </div>
              )}
            </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}