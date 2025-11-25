// Project data with detailed information for the portfolio
export const projects = [
  {
    id: "smart-accounting-assistant",
    title: "Smart Accounting Assistant – MERN Stack",
    period: "2025",
    description:
      "Developed a real-world AI-powered Smart Accounting Assistant using the MERN stack to automate business financial operations. The system includes transaction categorization, salary calculation, tax computation, invoicing, and AI-driven insights through Gemini API integration.",
    detailedDescription: `
      The Smart Accounting Assistant is a comprehensive financial management solution built with the MERN stack and AI integration. This application automates complex accounting processes, making financial management accessible to small and medium businesses.

      Key features include intelligent transaction categorization using machine learning, automated salary calculations with tax deductions, real-time invoice generation, and AI-powered financial insights through Google's Gemini API. The system provides intuitive dashboards for financial tracking and generates detailed reports for business analysis.

      The application follows modern software architecture principles with secure authentication, role-based access control, and responsive design for seamless user experience across all devices.
    `,
    challenges: [
      "Integrating AI for accurate transaction categorization",
      "Implementing complex tax calculation algorithms",
      "Ensuring data security for financial information",
      "Creating intuitive user interfaces for complex financial operations"
    ],
    solutions: [
      "Utilized Gemini API for intelligent data processing and categorization",
      "Developed modular calculation engines for different tax scenarios",
      "Implemented JWT authentication and data encryption",
      "Created progressive disclosure UI patterns for complex workflows"
    ],
    tech: ["MERN Stack", "Node.js", "React", "Gemini API", "AI", "MongoDB", "Express.js", "JWT", "Chart.js"],
    features: [
      "AI-powered transaction categorization",
      "Automated salary and tax calculations",
      "Real-time invoice generation",
      "Financial analytics dashboard",
      "Multi-user role management",
      "Data export capabilities",
      "Responsive design",
      "Secure authentication"
    ],
    github: "",
    link: "",
    image: "/images/smart-accounting.png",
    gallery: [
      "/images/smart-accounting-dashboard.png",
      "/images/smart-accounting-transactions.png",
      "/images/smart-accounting-reports.png"
    ]
  },
  {
    id: "cashleaf-finance-tracker",
    title: "CashLeaf – Personal Finance Tracker",
    period: "2025",
    description:
      "Created a Kotlin-based mobile app for daily income and expense tracking, budget management, and real-time visual analytics. Implemented SharedPreferences for local data persistence and intuitive UI components with Android Studio.",
    detailedDescription: `
      CashLeaf is a modern Android application designed to simplify personal finance management. Built with Kotlin and following Material Design principles, the app provides users with powerful tools to track their financial habits and make informed decisions.

      The application features real-time expense tracking, budget setting and monitoring, visual analytics with interactive charts, and category-based spending analysis. Local data persistence ensures user privacy while providing offline functionality.

      The intuitive interface makes financial tracking effortless, with quick entry options, smart categorization, and comprehensive reporting features that help users understand their spending patterns.
    `,
    challenges: [
      "Designing intuitive mobile UI for complex financial data",
      "Implementing efficient local data storage",
      "Creating meaningful visual analytics",
      "Ensuring smooth performance with large datasets"
    ],
    solutions: [
      "Applied Material Design principles with user-centered approach",
      "Utilized SharedPreferences and SQLite for optimized data management",
      "Integrated MPAndroidChart for interactive visualizations",
      "Implemented data pagination and efficient query strategies"
    ],
    tech: ["Kotlin", "Android Studio", "SharedPreferences", "SQLite", "Material Design", "MPAndroidChart", "XML"],
    features: [
      "Daily expense and income tracking",
      "Budget management and alerts",
      "Interactive charts and analytics",
      "Category-based organization",
      "Offline functionality",
      "Data export options",
      "Material Design UI",
      "Quick entry widgets"
    ],
    github: "",
    link: "",
    image: "/images/cashleaf-app.png",
    gallery: [
      "/images/cashleaf-dashboard.png",
      "/images/cashleaf-analytics.png",
      "/images/cashleaf-budget.png"
    ]
  },
  {
    id: "planit-event-management",
    title: "PlanIt – Event Management System",
    period: "2024",
    description:
      "Developed a full-stack event booking web application with role-based access control, dynamic event listings, booking and payment management, and comprehensive admin dashboard. Built using MVC architecture with OOP principles and complete CRUD operations.",
    detailedDescription: `
      PlanIt is a comprehensive event management system designed to streamline event organization and booking processes. Built with Java Servlets and following MVC architecture, the application provides a robust platform for event organizers and attendees.

      The system features role-based access control with separate interfaces for administrators, event organizers, and attendees. Dynamic event listings allow for real-time updates, while the integrated booking system handles reservations and payment processing.

      The admin dashboard provides comprehensive analytics, user management, and event oversight capabilities. The responsive design ensures optimal user experience across all devices.
    `,
    challenges: [
      "Implementing complex role-based access control",
      "Managing concurrent booking requests",
      "Integrating secure payment processing",
      "Creating scalable database architecture"
    ],
    solutions: [
      "Developed hierarchical permission system with Java Servlets",
      "Implemented database transactions and locking mechanisms",
      "Integrated secure payment gateway with validation",
      "Designed normalized database schema with optimized queries"
    ],
    tech: ["Java Servlets", "JSP", "JDBC", "MySQL", "MVC", "Bootstrap", "HTML", "CSS", "JavaScript", "Apache Tomcat"],
    features: [
      "Multi-role user management",
      "Dynamic event creation and management",
      "Real-time booking system",
      "Payment integration",
      "Admin analytics dashboard",
      "Email notifications",
      "Responsive web design",
      "Search and filtering"
    ],
    github: "",
    link: "",
    image: "/images/planit-event.png",
    gallery: [
      "/images/planit-dashboard.png",
      "/images/planit-events.png",
      "/images/planit-booking.png"
    ]
  },
  {
    id: "movie-booking-system",
    title: "Movie Booking System",
    period: "2024",
    description:
      "Engineered a web-based movie reservation platform with full CRUD operations, integrated payment module, and a contact form. Built using HTML, CSS, PHP, and MySQL with a focus on responsive UI and secure backend.",
    detailedDescription: `
      The Movie Booking System is a comprehensive web application that digitizes the movie ticket booking experience. Built with PHP and MySQL, the system provides a seamless platform for movie enthusiasts to browse showtimes and book tickets online.

      The application features a dynamic movie catalog with real-time seat availability, secure user authentication, and integrated payment processing. The admin panel allows theater management to update movie schedules, manage bookings, and generate reports.

      The responsive design ensures optimal viewing experience across all devices, while the secure backend protects user data and transaction information.
    `,
    challenges: [
      "Managing real-time seat availability",
      "Implementing secure payment processing",
      "Creating responsive theater seating layout",
      "Handling concurrent booking requests"
    ],
    solutions: [
      "Developed real-time seat locking mechanism with PHP sessions",
      "Integrated secure payment gateway with SSL encryption",
      "Created dynamic seating charts with CSS Grid and JavaScript",
      "Implemented database transactions for booking consistency"
    ],
    tech: ["HTML", "CSS", "PHP", "MySQL", "JavaScript", "Bootstrap", "AJAX", "PayPal API"],
    features: [
      "Movie catalog with showtimes",
      "Interactive seat selection",
      "Real-time availability updates",
      "Secure payment processing",
      "User account management",
      "Booking history and receipts",
      "Admin management panel",
      "Responsive design"
    ],
    github: "",
    link: "",
    image: "/images/movie-booking.png",
    gallery: [
      "/images/movie-catalog.png",
      "/images/seat-selection.png",
      "/images/booking-confirmation.png"
    ]
  },
  {
    id: "aara-cakes-ui-prototype",
    title: "Aara Cakes – Online Cake Ordering App (UI/UX Prototype)",
    period: "2025",
    description:
      "Created a comprehensive mobile app UI/UX prototype in Figma for an online cake ordering platform. Designed user-centered interfaces for cake browsing, customization, order tracking, secure payment flows, and promotional features.",
    detailedDescription: `
      Aara Cakes is a comprehensive mobile app UI/UX prototype designed to revolutionize the online cake ordering experience. Created in Figma, this project showcases modern mobile design principles and user-centered design approach.

      The prototype includes complete user journey mockups from product discovery to order completion, featuring intuitive navigation, engaging visual design, and seamless interaction flows. Special attention was given to the cake customization process, making it both fun and functional.

      The design system includes consistent color schemes, typography, iconography, and component libraries that ensure brand consistency throughout the application.
    `,
    challenges: [
      "Designing intuitive cake customization interface",
      "Creating engaging visual hierarchy for product catalog",
      "Balancing feature richness with simplicity",
      "Ensuring accessibility in visual design"
    ],
    solutions: [
      "Developed step-by-step customization wizard with visual feedback",
      "Implemented card-based layout with high-quality imagery",
      "Applied progressive disclosure for complex features",
      "Used high contrast colors and readable typography"
    ],
    tech: ["Mobile App", "Figma", "UI/UX Design", "Mobile Prototyping", "User Research", "Wireframing", "Design Systems"],
    features: [
      "Interactive cake customization",
      "Visual product catalog",
      "Order tracking interface",
      "Secure payment flow design",
      "User profile management",
      "Promotional system design",
      "Responsive mobile layouts",
      "Accessibility-focused design"
    ],
    github: "",
    link: "",
    image: "/images/aara-cakes-ui.png",
    gallery: [
      "/images/aara-cakes-home.png",
      "/images/aara-cakes-customize.png",
      "/images/aara-cakes-checkout.png"
    ]
  },
  {
    id: "nithuja-cakes-portfolio",
    title: "Nithuja Cakes Portfolio Website",
    period: "2025",
    description:
      "Developed a modern portfolio site for a home-based cake business using React and Tailwind CSS. Features include a custom order form, WhatsApp ordering integration, and a photo gallery to showcase cake designs.",
    detailedDescription: `
      Nithuja Cakes Portfolio is a modern, responsive website designed to showcase a home-based cake business. Built with React and styled with Tailwind CSS, the site combines aesthetic appeal with functional business features.

      The website features a stunning photo gallery that highlights the artistry of custom cake designs, an integrated ordering system that connects directly to WhatsApp for seamless communication, and a responsive design that looks beautiful on all devices.

      The project demonstrates modern web development practices with component-based architecture, optimized images, and smooth animations that enhance user engagement.
    `,
    challenges: [
      "Creating visually appealing gallery layout",
      "Integrating WhatsApp ordering system",
      "Optimizing image loading performance",
      "Ensuring mobile-first responsive design"
    ],
    solutions: [
      "Implemented CSS Grid with Tailwind for dynamic gallery layouts",
      "Developed custom WhatsApp API integration with pre-filled messages",
      "Used lazy loading and image optimization techniques",
      "Applied mobile-first design principles with Tailwind utilities"
    ],
    tech: ["React", "Tailwind CSS", "WhatsApp API", "JavaScript", "Netlify", "Framer Motion"],
    features: [
      "Dynamic photo gallery",
      "WhatsApp integration",
      "Custom order form",
      "Responsive design",
      "Contact information",
      "Social media links",
      "Fast loading performance",
      "SEO optimization"
    ],
    github: "",
    link: "",
    image: "/images/nithuja-cakes.png",
    gallery: [
      "/images/nithuja-gallery.png",
      "/images/nithuja-contact.png",
      "/images/nithuja-mobile.png"
    ]
  },
  {
    id: "saloon-perfect-website",
    title: "Saloon Perfect – Beauty Salon Portfolio Website",
    period: "2024",
    description:
      "Built a responsive website for Saloon Perfect to showcase services, customer reviews, and gallery. Ensured clean layout, booking options, and mobile-first optimization for a smooth browsing experience.",
    detailedDescription: `
      Saloon Perfect is a professional beauty salon website designed to establish online presence and attract new customers. The site combines elegant design with practical functionality to showcase services and facilitate customer engagement.

      The website features a comprehensive service catalog, customer testimonials, photo gallery of work, and integrated booking system. The clean, modern design reflects the salon's professional image while ensuring easy navigation for potential customers.

      Built with responsive web technologies, the site performs excellently across all devices and includes SEO optimization for better search engine visibility.
    `,
    challenges: [
      "Creating professional salon aesthetic",
      "Implementing booking system integration",
      "Optimizing for local search SEO",
      "Ensuring fast loading on mobile devices"
    ],
    solutions: [
      "Developed elegant color scheme with high-quality imagery",
      "Integrated third-party booking system with custom styling",
      "Implemented local SEO best practices and schema markup",
      "Optimized images and used modern CSS for performance"
    ],
    tech: ["HTML", "CSS", "Responsive Web", "Salon Website"],
    features: [
      "Service showcase",
      "Online booking integration",
      "Customer testimonials",
      "Photo gallery",
      "Contact information",
      "Location mapping",
      "Mobile optimization",
      "SEO friendly structure"
    ],
    github: "",
    link: "https://salonperfect.lk/index.html",
    image: "/images/saloon-perfect.png",
    gallery: [
      "/images/salon-services.png",
      "/images/salon-gallery.png",
      "/images/salon-contact.png"
    ]
  }
];
