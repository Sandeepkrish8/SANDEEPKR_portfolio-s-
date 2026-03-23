// ─── Portfolio Data ──────────────────────────────────────────────────────────

export const personal = {
  name: "Sandeep Krishnan",
  title: "Frontend Developer",
  subtitle: "MCA Graduate · React Enthusiast · AI Enthusiast 🤖",
  email: "sandeepkrsk08@gmail.com",
  phone: "+91 9345XXXXXX",
  location: "Chennai, India",
  linkedin: "https://linkedin.com/in/sandeep-krishnan",
  github: "https://github.com/Sandeepkrish8",
  resume: "/Sandeep_Krishnan_RESUME.pdf",
  heroTagline: "MCA Graduate · AI Enthusiast · Building interactive, accessible web experiences.",
  about: `MCA graduate with hands-on experience building production-ready React applications. I specialize in crafting fast, accessible, and visually polished UIs — turning complex requirements into clean, maintainable code. Currently working at VCodez while actively seeking a frontend engineering role.`,
  goal: `I want to join a product team where I can own UI challenges end-to-end — from design system decisions to performance tuning — and grow alongside engineers who care about craft and code quality.`,
};

export const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Dr MGR Educational and Research Institute University",
    year: "2023 – 2025",
    grade: "CGPA: 8.6 / 10",
    highlights: [
      "Specialization in Full Stack Web Development",
      "Final year project: Sign Language Recognition System using ESP32-CAM Module.",
      
    ],
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Vel Tech Rangarajan Dr. Sagunthala R&D Institute of Science and Technology",
    year: "2020 – 2023",
    grade: "CGPA: 8.2 / 10",
    highlights: [
      "learn the fundamentals of programming concepts and software development.",
      
    ],
  },
];

export const skills = [
  { name: "HTML5", icon: "html", level: 92, category: "Frontend" },
  { name: "CSS3", icon: "css", level: 88, category: "Frontend" },
  { name: "JavaScript", icon: "js", level: 85, category: "Frontend" },
  { name: "React.js", icon: "react", level: 83, category: "Frontend" },
  { name: "Responsive Design", icon: "tailwind", level: 88, category: "Frontend" },
  { name: "Git & GitHub", icon: "git", level: 82, category: "Tools" },
  { name: "Python", icon: "node", level: 65, category: "Backend" },
  { name: "REST APIs", icon: "api", level: 72, category: "Backend" },
  { name: "MySQL", icon: "mongo", level: 60, category: "Backend" },
  { name: "GSAP", icon: "gsap", level: 70, category: "Animation" },
  { name: "Figma", icon: "figma", level: 65, category: "Design" },
];

export const projects = [
  {
    title: "Inventory Management System",
    description:
      "A web-based inventory management system built with React and Node.js, allowing users to track stock levels, manage products, and generate reports with a user-friendly interface. Designed for small businesses to streamline their inventory processes and improve efficiency.",
      problem: "Small businesses often struggle with manual inventory tracking, leading to errors and inefficiencies. This system provides an accessible solution to manage stock effectively.",
      features: [
        "Real-time stock level tracking with dynamic updates",
        "Product management with add, edit, and delete functionality",
        "Automated report generation for sales and inventory",
      ],

    tech: ["React", "Figma", "TypeScript", "CSS3"],
    github: "https://github.com/Sandeepkrish8/Inventory_Management",
    live: "https://inventory-management-hazel-xi.vercel.app/",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcy_5VAwf2NPxGBhmaFrTjrNtJM1ZznR_W9w&s",
    featured: true,
  },

  {
    title: "Ai Mock Interviewer",
    description:
      "A React-based AI Mock Interviewer that simulates technical interviews with real-time feedback, helping users practice coding questions and improve their interview skills.",
    problem: "Many developers struggle to find realistic interview practice. This tool provides an interactive, AI-driven mock interview experience to boost confidence and performance.",
    features: [
      "AI-generated coding questions with varying difficulty levels",
      "Real-time feedback on code quality, efficiency, and correctness",
      "User-friendly interface with a focus on accessibility and performance",
    ],
    tech: ["React", "JavaScript", "CSS3", "AI Integration"],
    github: "https://github.com/Sandeepkrish8/Ai-mock",
    live: "https://ai-mock-sooty.vercel.app/",
    image: "project7",
    featured: true,
  },

  {
    title: "Hair Growth Nutrition App",
    description:
      "React app that suggests personalised food and vitamins for hair care with ML-based image analysis. Users upload a photo and get AI-powered diet recommendations.",
    problem: "Most people don't know which nutrients affect hair health. This app bridges that gap with personalised, data-driven diet plans.",
    features: [
      "Photo upload with ML-based hair condition analysis",
      "Personalised food & vitamin recommendations",
      "Responsive, mobile-first UI with smooth UX",
    ],
    tech: ["React", "JavaScript", "CSS3", "ML Integration", "REST API"],
    github: "https://github.com/Sandeepkrish8/hair-growth-app",
    live: "https://hair-growth-app.vercel.app",
    image: "project1",
    featured: true,
  },
  {
    title: "Earthquake Tracker",
    description:
      "A web app that tracks real-time earthquake data worldwide using the USGS Earthquake API, displaying magnitude, location, and depth on an interactive map.",
    problem: "Real-time earthquake data is scattered across technical dashboards. This app surfaces it in a clean, accessible UI anyone can use.",
    features: [
      "Live USGS API integration with auto-refresh",
      "Filter by magnitude, region, and time range",
      "Interactive map with depth & intensity display",
    ],
    tech: ["React", "JavaScript", "USGS API", "CSS3"],
    github: "https://github.com/Sandeepkrish8/Earthquake_Tracker",
    live: "https://earthquake-tracker-ruddy.vercel.app",
    image: "project2",
    featured: true,
  },
  {
    title: "Solar System Explorer",
    description:
      "An interactive web app to explore the solar system with 3D-style models and detailed planetary information. Built to make astronomy fun and educational.",
    problem: "Astronomy content online is either too dense or too boring. This makes planetary exploration visually engaging and interactive.",
    features: [
      "3D-style CSS animations for each planet",
      "Detailed stats panel per planet on click",
      "Smooth transitions with no external animation library",
    ],
    tech: ["React", "JavaScript", "CSS3", "Animations"],
    github: "https://github.com/Sandeepkrish8/Solar_Expo",
    live: "https://solar-expo-sage.vercel.app",
    image: "project3",
    featured: false,
  },
  {
    title: "Weather App",
    description:
      "A clean weather forecasting app built with React and the OpenWeatherMap API. Provides current conditions and forecasts with a responsive UI.",
    problem: "Basic weather apps are cluttered and hard to read at a glance. This one surfaces what matters most in a clean, minimal layout.",
    features: [
      "Search any city worldwide with instant results",
      "5-day forecast with temperature & condition icons",
      "Dynamic background change based on weather state",
    ],
    tech: ["React", "JavaScript", "OpenWeatherMap API", "CSS3"],
    github: "https://github.com/Sandeepkrish8/Weather-App",
    live: "https://weather-app-delta-sand.vercel.app",
    image: "project4",
    featured: false,
  },
  {
    title: "Todo List App",
    description:
      "A simple, clean Todo List app built with React, allowing users to add, edit, complete, and delete tasks with a smooth and accessible interface.",
    problem: "Productivity apps often get in your way. This one keeps every interaction fast and frictionless with zero setup required.",
    features: [
      "Add, edit, complete, and delete tasks instantly",
      "Persistent state across sessions via localStorage",
      "Accessible keyboard navigation and focus management",
    ],
    tech: ["React", "JavaScript", "CSS3"],
    github: "https://github.com/Sandeepkrish8/TO-DO-LIST",
    live: "https://to-do-list-nine-phi-84.vercel.app",
    image: "project5",
    featured: false,
  },
  {
    title: "Drizzle",
    description:
      "A fun, small-scale interactive web page where clicking the Drizzle button triggers a beautiful rain animation with animated water droplets.",
    problem: "A focused CSS animation experiment — proving that delightful micro-interactions don't need heavy libraries.",
    features: [
      "Pure CSS keyframe rain animation with 60fps performance",
      "Click-triggered animation with smooth start/stop",
      "Zero dependencies — vanilla HTML, CSS, JS only",
    ],
    tech: ["HTML5", "CSS3", "JavaScript"],
    github: "https://github.com/Sandeepkrish8/drizzles",
    live: "https://drizzles-indol.vercel.app",
    image: "project6",
    featured: false,
  },
];

export const dsa = {
  platforms: [
    {
      name: "LeetCode",
      url: "https://leetcode.com/sandeepkrishnan",
      solved: 75,
      total: "2800+",
      rank: "Actively Practicing",
      breakdown: { easy: 45, medium: 25, hard: 5 },
      color: "#FFA500",
    },
  ],
  strengths: [
    "Arrays & Strings",
    "Sorting",
    "Loops & Conditions",
    "Functions",
    "Object-Oriented Programming",
    "Recursion",
    "Problem Decomposition",
  ],
};

export const publications = [
  {
    title: "Hand Gesture Recognition System by Using IoT",
    journal: "International Journal of Computer Applications",
    year: "2025",
    description:
      "This paper presents a real-time hand gesture recognition system using ESP32-CAM for IoT-based device interaction, enabling touchless control through computer vision.",
    pdf: "https://sandeepkr-portfolio.vercel.app/papers/Sign-Language-Iot.pdf",
  },
];

export const experience = [
  {
    role: "Web Developer Intern",
    company: "Unified Mentor",
    location: "Remote",
    duration: "May 5, 2024 – June 6, 2024",
    type: "Internship",
    contributions: [
      "Built and optimized responsive web pages using HTML, CSS, JavaScript, and React.js.",
      "Improved frontend design for better user experience and accessibility.",
      "Assisted in debugging and testing for cross-browser compatibility.",
      "Collaborated with mentors and peers, gaining real-world development workflow exposure.",
    ],
    tech: ["React.js", "JavaScript", "HTML5", "CSS3", "Git"],
  },
  {
    role: "Full Stack Python Development",
    company: "VCodez",
    location: "Chennai, India",
    duration: "Sep 2025 – Jan 2026",
    type: "Internship",
    contributions: [
      "Learning Python, Django/Flask, REST APIs, MySQL/PostgreSQL, and React.js.",
      "Working on CRUD apps, authentication systems, and API integrations.",
      "Strengthening full-stack foundations for building scalable web applications.",
    ],
    tech: ["JavaScript", "Flask", "REST APIs", "SQL", "React.js"],
  },
];

export const socialLinks = [
  { name: "GitHub", url: "https://github.com/Sandeepkrish8", icon: "github" },
  { name: "LinkedIn", url: "https://linkedin.com/in/sandeep-krishnan", icon: "linkedin" },
  { name: "LeetCode", url: "https://leetcode.com/sandeepkrishnan", icon: "leetcode" },
];
