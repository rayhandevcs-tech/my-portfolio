import projectImg1 from "../assets/images/Portfolio1.png";
import projectImg2 from "../assets/images/ocms.png";
import projectImg3 from "../assets/images/tms.png";
import projectImg4 from "../assets/images/shms.png";

export const projects = [
{

    id: 2,
    title: "Student Hostel Management System",
    slug: "student-hostel-management-system",
    category: "Full Stack Project",
    role: "Full Stack Developer",
    duration: "2026 - Present",
    status: "Active Development",
    featured: true,
    image: projectImg4,

    description:
        "A modern full-stack hostel and room rental management platform designed for students to easily find mess, bachelor rooms, sublets, and hostel accommodations nearby universities.",

    highlight:
        "Focused on clean UI/UX, real-time room listing management, location-based room discovery, responsive frontend architecture, and scalable backend integration.",

    problem:
        "Students often struggle to find reliable hostel, mess, or sublet information because most room posts are scattered across Facebook groups and social media platforms. There is no centralized platform with proper filtering, organized listings, map integration, and modern user experience.",

    solution:
        "I developed a complete hostel management platform where users can post rooms, search accommodations by location, compare listings, and explore nearby rooms using interactive maps. The system includes protected authentication, dynamic room management, image uploads, responsive UI, and optimized frontend performance for smooth user experience.",

    features: [
        "User authentication and protected routes",
        "Post and manage room listings",
        "Mess, bachelor, hostel, and sublet categorization",
        "Advanced room search and filtering",
        "Location-based room discovery with interactive map",
        "Room comparison functionality",
        "Responsive mobile-first design",
        "Image upload system for room galleries",
        "Room availability tracking",
        "Dynamic listing management dashboard",
        "Dark and light mode support",
        "Reusable scalable component architecture",
        "Optimized frontend rendering and lazy loading",
    ],

    tech: [
        "React",
        "Vite",
        "React Router",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Mongoose",
        "JWT Authentication",
        "Leaflet Map",
        "Cloudinary",
        "Tailwind CSS",
        "REST API",
    ],

    github: "https://github.com/rayhandevcs-tech/student-hostel-system",
    live: "https://student-hostel-system.vercel.app/",
    },
   { 
    id: 1,
    title: "Portfolio & CMS Blog Platform",
    slug: "portfolio-cms-blog-platform",
    category: "Full Stack Project",
    role: "Full Stack Developer",
    duration: "2026 - Present",
    status: "Active Development",
    featured: true,
    image: projectImg1,

    description:
    "A full-stack developer portfolio and CMS-powered blogging platform built to showcase projects, technical writing, book reviews, achievements, and future research-oriented work.",

    highlight:
    "Focused on scalable architecture, dynamic content management, responsive UI, and frontend performance optimization.",

    problem:
    "I wanted to build more than a static portfolio website. The goal was to create a scalable personal platform capable of managing dynamic blog content, organizing personal work, and supporting future expansion with a cleaner full-stack architecture.",

    solution:
    "I designed the project using a modular architecture with reusable React components, protected admin routes, dynamic blog management, MongoDB-based content storage, and Cloudinary image uploads. Performance was improved using caching strategies, lazy loading, route-based code splitting, and optimized data fetching.",

    features: [
    "Dynamic blog management system",
    "Secure admin authentication",
    "Markdown-based blog rendering",
    "Cloudinary image upload integration",
    "Blog search and category filtering",
    "Featured and related posts system",
    "Prefetch caching for faster navigation",
    "Reading progress indicator",
    "SEO optimization with React Helmet",
    "Responsive multi-page architecture",
    "Reusable and scalable component structure",
    ],

    tech: [
    "React",
    "Vite",
    "React Router",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Mongoose",
    "Cloudinary",
    "JWT Authentication",
    "CSS",
    ],

    github: "https://github.com/rayhandevcs-tech/my-portfolio",
    live: "https://rayhancsdev.vercel.app/",
    },

    {
    id: 3,
    title: "Online Course Management System",
    slug: "online-course-management-system",
    category: "Academic Project",
    role: "Backend & Desktop Application Developer",
    duration: "2025",
    status: "Completed",
    featured: false,
    image: projectImg2,

    description:
    "A desktop-based academic course management system developed to manage courses, student enrollment, and administrative operations in a structured and organized environment.",

    highlight:
    "Focused on database-driven operations, CRUD functionality, and structured desktop application architecture.",

    problem:
    "Managing course information, student enrollment, and administrative records manually can become inefficient and difficult to maintain. The project aimed to simplify these academic management tasks through a centralized desktop application.",

    solution:
    "I developed a structured course management system using C# and SQL Server with features for course handling, student management, authentication, and administrative operations. The application was organized using reusable forms, database integration, and modular functionality.",

    features: [
    "Course creation and management",
    "Student enrollment system",
    "Authentication and admin access",
    "CRUD operations for academic records",
    "Database-driven application structure",
    "Student information management",
    "Responsive desktop interface",
    ],

    tech: [
    "C#",
    ".NET Framework",
    "SQL Server",
    "Windows Forms",
    ],

    github: "https://github.com/yourusername/course-management-system",
    live: "",

    },


    // {
    // id: 3,
    // title: "Task Management Interface",
    // slug: "task-management-interface",
    // category: "Frontend Practice Project",
    // role: "Frontend Developer",
    // duration: "2025",
    // status: "Completed",
    // featured: false,
    // image: projectImg3,

    // description:
    // "A responsive task management application built with React to manage daily tasks using dynamic state updates, filtering functionality, and component-based UI structure.",

    // highlight:
    // "Focused on React state management, reusable component structure, and interactive user experience design.",

    // problem:
    // "I wanted to improve my understanding of frontend state handling, user interaction flow, and CRUD-style application logic through a practical and interactive project.",

    // solution:
    // "I developed a clean task management interface where users can create, complete, filter, and remove tasks dynamically while maintaining organized component architecture and responsive design principles.",

    // features: [
    // "Add and remove tasks dynamically",
    // "Mark tasks as completed",
    // "Task filtering functionality",
    // "Reusable React component structure",
    // "Responsive user interface",
    // "Clean state management flow",
    // ],

    // tech: [
    // "React",
    // "JavaScript",
    // "CSS",
    // ],

    // github: "https://github.com/yourusername/task-management-interface",
    // live: "https://your-live-link.com",
    // },
];