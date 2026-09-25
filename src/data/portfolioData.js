export const portfolioData = {
  hero: {
    name: "Prince Albert Martinez",
    title: "Full-Stack Developer & IT Support",
    location: "Cebu, Philippines",
    phone: "0956 500 4993",
    email: "albertprince1211@gmail.com",
    github: "github.com/Hackx12a",
    githubUrl: "https://github.com/Hackx12a",
    tagline: "I build web systems that actually work for the people using them.",
  },

  about: {
    heading: "About Me",
    intro: "Hey, I am Prince Albert. I am a BSIT graduate based in Cebu, and I have spent the last year building software that real businesses depend on every single day.",
    paragraphs: [
      "Most of my work has been on e-commerce platforms and ERP systems. I have built inventory tracking that runs in real time, analytics dashboards that help teams spot slow-moving products before they pile up, and accounting modules that handle invoicing and payroll. I also spend a good chunk of my time on the support side, figuring out why things break and getting them back up quickly.",
      "I like being the person who can jump between writing code and helping someone fix a hardware issue. That mix of development and hands-on IT support keeps things interesting and makes me useful in more situations.",
      "I am TESDA certified in Computer Systems Servicing and also trained in IoT. Outside of work, I keep up with new tools, use AI assistants to speed up debugging, and I am always looking for the next thing to learn.",
    ],
    funFacts: [
      { icon: "fas fa-coffee", text: "Powered by coffee and clean git history" },
      { icon: "fas fa-code-branch", text: "Comfortable with both dev and IT support" },
      { icon: "fas fa-map-marker-alt", text: "Based in Cebu, open to remote work" },
      { icon: "fas fa-rocket", text: "Always shipping, always learning" },
    ],
  },

  skills: {
    heading: "What I Work With",
    subheading: "Tools and technologies I use day to day",
    groups: [
      {
        title: "Languages & Frameworks",
        icon: "fas fa-code",
        items: [
          { name: "Java", icon: "fab fa-java", color: "#f89820" },
          { name: "JavaScript", icon: "fab fa-js", color: "#f7df1e" },
          { name: "HTML/CSS", icon: "fab fa-html5", color: "#e34c26" },
          { name: "SQL", icon: "fas fa-database", color: "#00758f" },
          { name: "React.js", icon: "fab fa-react", color: "#61dafb" },
          { name: "Spring Boot", icon: "fas fa-leaf", color: "#6db33f" },
        ],
      },
      {
        title: "Databases & DevOps",
        icon: "fas fa-server",
        items: [
          { name: "MySQL", icon: "fas fa-database", color: "#00758f" },
          { name: "Firebase", icon: "fas fa-fire", color: "#ffca28" },
          { name: "Docker", icon: "fab fa-docker", color: "#2496ed" },
          { name: "CI/CD Pipelines", icon: "fas fa-infinity", color: "#7c5cff" },
          { name: "Git/GitHub", icon: "fab fa-git-alt", color: "#f05032" },
          { name: "Postman", icon: "fas fa-paper-plane", color: "#ff6c37" },
          { name: "Linux/CLI", icon: "fab fa-linux", color: "#fbc02d" },
        ],
      },
      {
        title: "IT & Technical Support",
        icon: "fas fa-tools",
        items: [
          { name: "Hardware Troubleshooting", icon: "fas fa-microchip", color: "#94a3b8" },
          { name: "Software Troubleshooting", icon: "fas fa-wrench", color: "#94a3b8" },
          { name: "System Diagnostics", icon: "fas fa-stethoscope", color: "#4ade80" },
          { name: "Networking Fundamentals", icon: "fas fa-network-wired", color: "#38bdf8" },
          { name: "IoT (TESDA Certified)", icon: "fas fa-wifi", color: "#a78bfa" },
        ],
      },
      {
        title: "AI Tools & Soft Skills",
        icon: "fas fa-robot",
        items: [
          { name: "GitHub Copilot", icon: "fas fa-robot", color: "#ffffff" },
          { name: "ChatGPT", icon: "fas fa-comment-dots", color: "#10a37f" },
          { name: "Claude", icon: "fas fa-brain", color: "#d97757" },
          { name: "Problem-solving", icon: "fas fa-lightbulb", color: "#fbbf24" },
          { name: "Communication", icon: "fas fa-comments", color: "#60a5fa" },
          { name: "Teamwork", icon: "fas fa-people-arrows", color: "#f472b6" },
          { name: "Time Management", icon: "fas fa-clock", color: "#a78bfa" },
        ],
      },
    ],
  },

  projects: {
    heading: "What I Have Built",
    subheading: "Real systems I designed and shipped at WiseCart Merchants Corp",
    items: [
      {
        icon: "fas fa-shopping-cart",
        title: "WiseCart E-Commerce Platform",
        role: "Full-Stack Developer",
        year: "2025",
        status: "Production",
        tagline: "A production e-commerce platform with centralized admin control and secure payment and logistics integrations.",
        description:
          "Designed and shipped a complete e-commerce system for WiseCart that centralizes users, coupons, and orders into a single admin panel. Integrated Maya for secure payment processing and Flash Express for automated order fulfillment, giving the operations team one dashboard to manage the entire storefront from order placement through delivery.",
        techStack: ["React.js", "Spring Boot", "MySQL", "Maya API", "Flash Express API", "Docker"],
        highlights: [
          "Centralized admin panel for users, coupons, and orders",
          "Maya payment integration for secure transactions",
          "Flash Express integration for order fulfillment",
          "Live production support and issue resolution",
        ],
        images: [
          { src: "ecommerce-1.png", caption: "Storefront with product catalog and category navigation" },
          { src: "ecommerce-2.png", caption: "Login and register page with user authentication" },
          { src: "ecommerce-3.png", caption: "Admin panel for users, coupons, and store operations" },
        ],
      },
      {
        icon: "fas fa-chart-line",
        title: "WiseCart ERP System",
        role: "Full-Stack Developer",
        year: "2025",
        status: "Production",
        tagline: "A real-time ERP system built for multi-branch retail operations with automated inventory intelligence.",
        description:
          "Built the core ERP that tracks stock input, sales, and deliveries in real time across multiple branches. Designed an analytics dashboard that breaks down product performance by company and branch, and implemented an automated alert system that flags slow-moving items and recommends restocking per location.",
        techStack: ["React.js", "Spring Boot", "MySQL", "Docker", "CI/CD"],
        highlights: [
          "Real-time inventory tracking across branches",
          "Product performance dashboard by company and branch",
          "Automated alerts for slow-moving items",
          "Restocking recommendations per branch",
        ],
        images: [
          { src: "erp.png", caption: "ERP dashboard with analytics, inventory tracking, and branch performance" },
        ],
      },
      {
        icon: "fas fa-file-invoice-dollar",
        title: "Accounting & Payroll Module",
        role: "Full-Stack Developer",
        year: "2025",
        status: "Production",
        tagline: "The financial backbone of the ERP, handling invoicing, cost calculations, and payroll.",
        description:
          "Built the accounting layer of the ERP from the ground up. It generates invoices, calculates unit costs using the weighted average method, and processes employee payroll. All three financial workflows operate on top of the same inventory data, so numbers stay consistent from stock intake to pay slip.",
        techStack: ["Java", "Spring Boot", "MySQL", "Weighted Average Costing"],
        highlights: [
          "Invoice generation and tracking",
          "Weighted average costing method",
          "Employee payroll processing",
          "Integrated with inventory and accounting data",
        ],
        images: [],
      },
      {
        icon: "fas fa-headset",
        title: "Technical Support & Troubleshooting",
        role: "Developer & IT Support",
        year: "2025",
        status: "Ongoing",
        tagline: "Keeping production systems stable and helping non-technical staff get back to work fast.",
        description:
          "Provided ongoing technical support for the live WiseCart platform and internal tools. Diagnosed data, reporting, and system-level issues, then resolved them quickly to minimize downtime. Worked directly with non-technical staff to understand problems and explain fixes in plain language.",
        techStack: ["Docker", "Linux/CLI", "Postman", "MySQL", "System Diagnostics"],
        highlights: [
          "Diagnosed data and reporting issues",
          "Resolved system and integration problems",
          "Communicated fixes clearly to non-technical staff",
          "Kept downtime to a minimum",
        ],
        images: [],
      },
      {
        icon: "fas fa-car",
        title: "Rentify Rental Marketplace",
        role: "Full-Stack Developer",
        year: "2025",
        status: "Ongoing",
        tagline: "A rental marketplace for cars, condos, and just about anything you can rent — built for both hosts and renters.",
        description:
          "Rentify is my ongoing marketplace platform that connects property owners and vehicle owners with people who want to rent them. It supports multiple rental categories — cars, condos, equipment, and more — with a shared booking flow, listing management, and secure payment handling. The goal is to make listing and renting anything as simple as posting a classified ad, but with real booking, availability, and payout logic behind it.",
        techStack: ["React.js", "Spring Boot", "MySQL", "Docker", "CI/CD", "Maya API"],
        highlights: [
          "Multi-category rentals: cars, condos, vehicles, and more",
          "Host dashboard for listing management and availability",
          "Renter booking flow with date and duration selection",
          "Secure payment and payout integration",
          "Review and rating system for hosts and renters",
        ],
        images: [],
      },    ],
  },

  experience: {
    heading: "Where I Have Worked",
    subheading: "My professional journey so far",
    items: [
      {
        title: "Junior Full-Stack Developer",
        company: "WiseCart Merchants Corp",
        location: "Lapu-Lapu City, Cebu",
        date: "August 2025 to Present",
        description:
          "I build and maintain e-commerce and ERP systems for a growing retail operation. My work covers everything from payment integrations and inventory tracking to accounting modules, payroll, and live platform support.",
        achievements: [
          "Built full e-commerce platform with centralized admin panel",
          "Developed real-time inventory and analytics dashboard for ERP",
          "Implemented automated alert system for slow-moving products",
          "Created accounting module with invoice generation and weighted average costing",
          "Built payroll system for employee compensation",
          "Provided technical support and resolved integration issues for live platform",
        ],
      },
    ],
  },

  education: {
    heading: "Education",
    subheading: "Where I built my foundation",
    items: [
      {
        school: "University of the Visayas",
        degree: "Bachelor of Science in Information Technology",
        year: "2024 to 2025",
        icon: "fas fa-graduation-cap",
      },
    ],
  },

  certifications: {
    heading: "Certifications",
    subheading: "Credentials and training I have completed",
    items: [
      { name: "Internet of Things", issuer: "TESDA", date: "April 29 to July 9, 2024", icon: "fas fa-wifi" },
      { name: "Computer Systems Servicing NC II", issuer: "TESDA", date: "December 14, 2023 to February 12, 2024", icon: "fas fa-laptop-medical" },
      { name: "TOPCIT (Test of Practical Competency in ICT)", issuer: "IITP, Level 3 Passer", date: "June 2, 2025", icon: "fas fa-award" },
    ],
  },

  references: {
    heading: "References",
    subheading: "People who can vouch for my work",
    items: [
      {
        name: "RM Joshua Ungui",
        role: "Software Engineer, Accenture Inc.",
        phone: "0936 167 1680",
        icon: "fas fa-user-tie",
      },
    ],
  },

  navLinks: [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "education", label: "Education" },
    { id: "certifications", label: "Certifications" },
    { id: "references", label: "References" },
    { id: "contact", label: "Contact" },
  ],
};