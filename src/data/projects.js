import projectImg1 from "../assets/images/portfolio1.png";
import projectImg2 from "../assets/images/ocms.png";
import projectImg3 from "../assets/images/tms.png";

export const projects = [
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

    github: "https://github.com/yourusername/portfolio-website",
    live: "https://your-live-link.com",
    },

    {
    id: 2,
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


    {
    id: 3,
    title: "Task Management Interface",
    slug: "task-management-interface",
    category: "Frontend Practice Project",
    role: "Frontend Developer",
    duration: "2025",
    status: "Completed",
    featured: false,
    image: projectImg3,

    description:
    "A responsive task management application built with React to manage daily tasks using dynamic state updates, filtering functionality, and component-based UI structure.",

    highlight:
    "Focused on React state management, reusable component structure, and interactive user experience design.",

    problem:
    "I wanted to improve my understanding of frontend state handling, user interaction flow, and CRUD-style application logic through a practical and interactive project.",

    solution:
    "I developed a clean task management interface where users can create, complete, filter, and remove tasks dynamically while maintaining organized component architecture and responsive design principles.",

    features: [
    "Add and remove tasks dynamically",
    "Mark tasks as completed",
    "Task filtering functionality",
    "Reusable React component structure",
    "Responsive user interface",
    "Clean state management flow",
    ],

    tech: [
    "React",
    "JavaScript",
    "CSS",
    ],

    github: "https://github.com/yourusername/task-management-interface",
    live: "https://your-live-link.com",
    },
];