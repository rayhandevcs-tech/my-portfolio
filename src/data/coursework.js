import courseImg1 from "../assets/images/placeholder-image.png";
import courseImg2 from "../assets/images/placeholder-image-1.png";

export const coursework = [
  {
    id: 1,
    title: "Algorithms",
    category: "Core CS",
    status: "Completed",
    term: "Fall 2025",
    image: courseImg1,
    description:
      "Learned how to design efficient solutions to computational problems through algorithmic thinking and complexity analysis.",
    fullDescription:
      "This course focused on core algorithm design techniques and the analysis of computational efficiency. I studied how to solve problems systematically, compare multiple approaches, and choose efficient solutions based on time and space complexity.",
    learnings: [
      "Time and space complexity",
      "Divide and conquer",
      "Dynamic programming",
      "Graph algorithms",
    ],
    tools: ["C++", "Python"],
    projects: ["Sorting Visualizer", "Pathfinding Visualizer"],
    projectLinks: [
      { name: "Sorting Visualizer", url: "#" },
      { name: "Pathfinding Visualizer", url: "#" },
    ],
    resources: ["Introduction to Algorithms (CLRS)", "MIT OpenCourseWare"],
  },

  {
    id: 2,
    title: "Data Structures",
    category: "Core CS",
    status: "Completed",
    term: "Fall 2025",
    image: courseImg2,
    description:
      "Studied the core data structures used to organize and manage data efficiently.",
    fullDescription:
      "This course introduced the fundamental data structures that form the backbone of efficient software systems. I learned how different structures store data, how operations perform on them, and how choosing the right structure affects performance and memory usage.",
    learnings: [
      "Arrays and linked lists",
      "Stacks and queues",
      "Trees and hash tables",
      "Graphs and traversal",
    ],
    tools: ["C++"],
    projects: ["Linked List Implementation", "Binary Search Tree"],
    projectLinks: [
      { name: "Linked List Implementation", url: "#" },
      { name: "Binary Search Tree", url: "#" },
    ],
    resources: ["GeeksforGeeks", "Visualgo"],
  },

  {
    id: 3,
    title: "Database Management Systems",
    category: "Data",
    status: "Completed",
    term: "Spring 2026",
    image: courseImg1,
    description:
      "Explored how structured data is stored, queried, and managed using relational database systems.",
    fullDescription:
      "This course covered relational database design, normalization, and SQL query writing. I learned how to design structured schemas, manage data integrity, and understand transactions and concurrency in database systems.",
    learnings: [
      "SQL queries and joins",
      "Normalization",
      "ER modeling",
      "Transactions and integrity",
    ],
    tools: ["SQL", "MySQL"],
    projects: ["Student Management System"],
    projectLinks: [
      { name: "Student Management System", url: "#" },
    ],
    resources: ["Database System Concepts", "MySQL Documentation"],
  },

  {
    id: 4,
    title: "Object-Oriented Programming",
    category: "Programming",
    status: "Completed",
    term: "Spring 2026",
    image: courseImg2,
    description:
      "Built a strong foundation in software design through objects, abstraction, inheritance, and modular thinking.",
    fullDescription:
      "This course developed my understanding of software design using object-oriented principles. I practiced designing modular programs and applying abstraction, encapsulation, inheritance, and polymorphism.",
    learnings: [
      "Classes and objects",
      "Inheritance and polymorphism",
      "Abstraction and encapsulation",
      "Modular code design",
    ],
    tools: ["Java", "C++"],
    projects: ["Library Management System"],
    projectLinks: [
      { name: "Library Management System", url: "#" },
    ],
    resources: ["Head First Java", "OOP Lecture Notes"],
  },

  {
    id: 5,
    title: "Operating Systems",
    category: "Systems",
    status: "Completed",
    term: "Fall 2026",
    image: courseImg1,
    description:
      "Studied how operating systems manage processes, memory, and system resources.",
    fullDescription:
      "This course covered how operating systems handle process scheduling, memory allocation, file systems, and concurrency. I learned how low-level system operations work and how resource management affects performance.",
    learnings: [
      "Process scheduling",
      "Memory management",
      "File systems",
      "Concurrency and synchronization",
    ],
    tools: ["C"],
    projects: ["Process Scheduling Simulation"],
    projectLinks: [
      { name: "Process Scheduling Simulation", url: "#" },
    ],
    resources: ["Operating System Concepts", "Linux Documentation"],
  },

  {
    id: 6,
    title: "Computer Networks",
    category: "Systems",
    status: "Completed",
    term: "Fall 2026",
    image: courseImg2,
    description:
      "Studied how computers communicate over networks and how data is transmitted.",
    fullDescription:
      "This course introduced networking fundamentals including protocols, routing, switching, and network security basics. I learned how data moves across networks and how communication systems are structured.",
    learnings: [
      "OSI model",
      "TCP/IP",
      "Routing and switching",
      "Network security basics",
    ],
    tools: ["Cisco Packet Tracer"],
    projects: ["Network Topology Simulation"],
    projectLinks: [
      { name: "Network Topology Simulation", url: "#" },
    ],
    resources: ["Computer Networking – Kurose & Ross", "Cisco Docs"],
  },

  {
    id: 7,
    title: "Software Engineering",
    category: "Software",
    status: "Completed",
    term: "Spring 2027",
    image: courseImg1,
    description:
      "Focused on software development methodologies, system design, and testing.",
    fullDescription:
      "This course focused on the software development lifecycle, system design principles, version control, testing, and teamwork in software projects.",
    learnings: [
      "Software development lifecycle",
      "System design",
      "Testing and debugging",
      "Team-based development",
    ],
    tools: ["Git", "GitHub"],
    projects: ["Team Software Project"],
    projectLinks: [
      { name: "Team Software Project", url: "#" },
    ],
    resources: ["Clean Code", "Software Engineering Lecture Notes"],
  },

  {
    id: 8,
    title: "Discrete Mathematics",
    category: "Math",
    status: "Completed",
    term: "Spring 2025",
    image: courseImg2,
    description:
      "Built mathematical foundations for computer science including logic and graph theory.",
    fullDescription:
      "This course built the mathematical foundation required for computer science. I studied logic, proofs, combinatorics, sets, relations, and graph theory.",
    learnings: [
      "Logic and proofs",
      "Sets and relations",
      "Combinatorics",
      "Graph theory",
    ],
    tools: ["Mathematics", "Problem Solving"],
    projects: ["Graph Theory Problem Set"],
    projectLinks: [
      { name: "Graph Theory Problem Set", url: "#" },
    ],
    resources: ["Discrete Mathematics and Its Applications"],
  },
];