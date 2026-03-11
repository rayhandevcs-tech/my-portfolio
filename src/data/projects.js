import projectImg1 from "../assets/images/placeholder-image.png";
import projectImg2 from "../assets/images/placeholder-image-1.png";
import projectImg3 from "../assets/images/placeholder-image-2.png";

export const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    slug: "portfolio-website",
    category: "Personal Project",
    role: "Frontend Developer",
    duration: "2026 - Present",
    status: "In Progress",
    featured: true,
    image: projectImg1,

    description:
      "A scalable personal portfolio built with React and Vite to showcase projects, writing, book reviews, achievements, and future research work.",

    highlight:
      "Focused on reusable components, scalable structure, and future backend integration.",

    problem:
      "I wanted a personal website that was more than a static portfolio. The goal was to create a solid foundation that could gradually grow into a full personal platform with multiple content sections and a cleaner architecture.",

    solution:
      "I structured the project using separate folders for pages, layout, common components, section components, data files, and styles. This made the project easier to maintain and prepared it for future scaling.",

    features: [
      "Multi-page routing with React Router",
      "Reusable section and common components",
      "Data-driven architecture",
      "Responsive layout",
      "Expandable content system for blog, books, travel, and research",
    ],

    tech: ["React", "Vite", "CSS", "React Router"],

    github: "https://github.com/yourusername/portfolio-website",
    live: "https://your-live-link.com",
  },

  {
    id: 2,
    title: "Weather App",
    slug: "weather-app",
    category: "Practice Project",
    role: "Frontend Developer",
    duration: "2025",
    status: "Completed",
    featured: true,
    image: projectImg2,

    description:
      "A weather application that fetches real-time weather data from an API and displays it in a clean, user-friendly interface.",

    highlight:
      "Improved my understanding of API fetching, state management, and conditional rendering.",

    problem:
      "I wanted to practice building an app that works with real-time external data instead of only static UI components.",

    solution:
      "I created a weather interface that takes user input, fetches weather information from an API, and updates the UI dynamically based on the returned data.",

    features: [
      "Search-based weather lookup",
      "Dynamic weather data rendering",
      "API integration",
      "Conditional loading and content states",
      "Clean responsive layout",
    ],

    tech: ["React", "API", "CSS", "JavaScript"],

    github: "https://github.com/yourusername/weather-app",
    live: "https://your-live-link.com",
  },

  {
    id: 3,
    title: "Todo App",
    slug: "todo-app",
    category: "Practice Project",
    role: "Frontend Developer",
    duration: "2025",
    status: "Completed",
    featured: false,
    image: projectImg3,

    description:
      "A practical task management app for adding, completing, filtering, and removing tasks in a clean interface.",

    highlight:
      "Helped me practice component structure, local state management, and organized UI flow.",

    problem:
      "I wanted to build a project that would help me understand state updates, user interaction, and simple CRUD-style frontend logic.",

    solution:
      "I built a task manager where users can create and manage tasks easily, while I focused on clean state handling and a readable component structure.",

    features: [
      "Add and delete tasks",
      "Mark tasks as completed",
      "Simple filtering logic",
      "Component-based structure",
      "Minimal and clean interface",
    ],

    tech: ["React", "JavaScript", "CSS"],

    github: "https://github.com/yourusername/todo-app",
    live: "https://your-live-link.com",
  },
];