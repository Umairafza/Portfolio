import {
  backend,
  creator,
  mobile,
  web,
  github,
  menu,
  close,
  css,
  gearXpert,
  project2,
  project3,
  mysql,
  express,
  aws,
  mui,
  
  gsap,
  framer,
  figma,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  threejs,
  firstTestimonial,
  secondTestimonial,
  thirdTestimonial,
} from '../assets'

// Import FAST logo
import fast from "../assets/company/images.png";
import python from "../assets/tech/python.png";
import capture from "../assets/capture.png";
import capture1 from "../assets/capture1.png";
import capture2 from "../assets/capture2.png";
import capture3 from "../assets/capture3.png";
import imageJpg from "../assets/image.jpg";
import picture1 from "../assets/Picture1.png";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full-Stack Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Ui UX Designer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "gsap"
  },
  {
    name: "framer"
  },
  {
    name: "Three JS"
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Redux Toolkit"
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Material Ui",
    icon: mui,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Express Js",
    icon: express,
  },
  {
    name: "AWS"
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySql",
    icon: mysql,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Python",
    icon: python,
  },
];

const experiences = [
  {
    title: "President – Sports Guild Society (SGS)",
    company_name: "FAST NUCES",
    icon: fast,
    iconBg: "#383E56",
    date: "Sep 2023 – May 2025",
    points: [
      "Led a dynamic team of 30+ members, overseeing campus-wide sports events including Sports Week and DAIRA, one of the largest university festivals.",
      "Managed event planning, logistics, and cross-functional coordination with mentors, faculty, and external vendors to ensure smooth execution.",
      "Introduced strategic improvements in team structure, branding, and media coverage, boosting participation and society visibility.",
      "Fostered leadership, teamwork, and a culture of accountability through mentorship, regular meetings, and clear communication."
    ],
  },
  {
    title: "Campus Ambassador – NASCON 2K25",
    company_name: "FAST NUCES CFD Campus",
    icon: fast,
    iconBg: "#383E56",
    date: "Jan 2025 – Apr 2025",
    points: [
      "Represented NASCON, one of Pakistan's premier tech and business events, as the official ambassador for FAST CFD campus.",
      "Promoted event registrations, built campus-wide engagement, and acted as the communication bridge between the NASCON core team and the student body.",
      "Organized awareness campaigns, info sessions, and facilitated participant onboarding across multiple competition categories.",
      "Strengthened collaboration between societies and departments, helping achieve record-level participation from CFD in NASCON 2K25."
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Umair proved me wrong.",
    name: "MD Mustaqeem",
    designation: "Ecommerce",
    company: "QuickMart",
    image: firstTestimonial,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Umair does.",
    name: "Abdul Raheman",
    designation: "Ecommerce Business",
    company: "justbuyz",
    image: secondTestimonial,
  },
  {
    testimonial:
      "After Umair optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "James Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: thirdTestimonial,
  },
];

const projects = [
  {
    name: "TradeCapital",
    description:
      "A comprehensive financial platform offering real-time stock data, ROI calculators, and portfolio tracking tools for both Pakistani and international markets.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "node", color: "green-text-gradient" },
      { name: "tailwind", color: "white-text-gradient" },
      { name: "python", color: "pink-text-gradient" },
      { name: "selenium", color: "blue-text-gradient" },
      { name: "mysql", color: "green-text-gradient" },
      { name: "jwt", color: "white-text-gradient" },
      { name: "data training", color: "pink-text-gradient" },
      { name: "data analysis", color: "blue-text-gradient" },
      { name: "authentication", color: "green-text-gradient" },
      { name: "real time data", color: "white-text-gradient" },
      { name: "stock analysis", color: "pink-text-gradient" },
      { name: "javascript", color: "blue-text-gradient" },
      { name: "flask", color: "green-text-gradient" },
    ],
    image: capture,
    source_code_link: "https://github.com/Umairafza/TradeCapital.git",
  },
  {
    name: "Weather App",
    description:
      "A responsive weather application that fetches real-time weather data using a public API. Features include city-based search, dynamic weather icons, and a clean, modern UI for quick weather updates.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "white-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
    ],
    image: capture1,
    source_code_link: "https://github.com/Umairafza/Weather-Application.git",
  },
  {
    name: "Detection App",
    description:
      "A feature-rich Android application developed in Android Studio for the Software for Mobile Devices course at FAST-NUCES. It includes real-time Text Recognition (OCR), Face Detection, Barcode Scanning, and Object Detection using ML Kit and CameraX. The app features a modern UI, RecyclerView, Fragments, Adapters, and robust scanning capabilities.",
    tags: [
      { name: "android studio", color: "blue-text-gradient" },
      { name: "java", color: "green-text-gradient" },
      { name: "recycler view", color: "white-text-gradient" },
      { name: "ml", color: "pink-text-gradient" },
      { name: "broadcast receivers", color: "blue-text-gradient" },
      { name: "adapter", color: "green-text-gradient" },
      { name: "scanning", color: "white-text-gradient" },
      { name: "fragments", color: "pink-text-gradient" },
    ],
    image: capture2,
    source_code_link: "https://github.com/Umairafza/Detection-App.git",
  },
  {
    name: "Cricbuzz App",
    description:
      "CricBuzz is a comprehensive cricket management system developed as a semester project for the Object-Oriented Programming course at FAST-NUCES. Built in C++ with SFML, it allows users to manage teams, players, matches, and news with both a console and graphical interface. Features include team and player management, match scheduling, news updates, ICC rankings, and persistent file storage, all implemented using OOP principles.",
    tags: [
      { name: "C++", color: "blue-text-gradient" },
      { name: "SFML", color: "green-text-gradient" },
      { name: "OOP", color: "white-text-gradient" },
    ],
    image: capture3,
    source_code_link: "https://github.com/Umairafza/CricBuzz-App.git",
  },
  {
    name: "Social Network Analysis with CNN-based Classification",
    description:
      "A Python project for analyzing social network data and performing binary classification using a CNN. Includes data preprocessing, feature extraction, SMOTE, and model evaluation with TensorFlow and scikit-learn.",
    tags: [
      { name: "AI", color: "blue-text-gradient" },
      { name: "Model Training", color: "green-text-gradient" },
      { name: "ML", color: "white-text-gradient" },
      { name: "CNN", color: "pink-text-gradient" },
      { name: "DNN", color: "blue-text-gradient" },
      { name: "Data Processing", color: "green-text-gradient" },
    ],
    image: imageJpg,
    source_code_link: "",
  },
  {
    name: "24 Puzzle Game",
    description:
      "A Bash script implementation of the classic 5x5 sliding tile puzzle, developed for the Operating System course. Runs on Linux/Ubuntu, features dynamic board initialization, interactive gameplay, and move tracking in the terminal.",
    tags: [
      { name: "bash", color: "blue-text-gradient" },
      { name: "linux", color: "green-text-gradient" },
      { name: "ubuntu", color: "white-text-gradient" },
    ],
    image: picture1,
    source_code_link: "https://github.com/Umairafza/24-puzzle-game.git",
  },
];

export { services, technologies, experiences, testimonials, projects };
