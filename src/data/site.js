export const siteConfig = {
  name: "Rayhan",
  brand: "RayhanDev",
  title: "Frontend Developer",

  hero: {
    eyebrow: "Frontend Developer & CS Student",
    heading: "Hi, I'm",
    highlight: "Rayhan",
    name: "Rayhan",
    role: "React · JavaScript · Modern CSS · Problem Solving",
    description:
      "I'm a Computer Science student focused on building clean, responsive web interfaces. Alongside frontend work, I'm strengthening my foundation in C++, Java, SQL, and React — while staying curious about leadership, books, and community.",
    chips: ["React", "JavaScript", "C++", "Node.js", "MongoDB", "Problem Solving"],
    primaryCta: { label: "View Projects", href: "#projects" },
    secondaryCta: { label: "Read Blog", to: "/blog" },
    socials: [
      { label: "Email", href: "mailto:rayhan.dev.cs@gmail.com" },
      { label: "GitHub", href: "https://github.com/" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/rayhan-cs-dev/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Be2AZGx8ZRAC20iWtp%2FXdJg%3D%3D" },
    ],
    stats: [
      { value: "Frontend", label: "Development Focus" },
      { value: "CS", label: "Academic Background" },
      { value: "React", label: "Current Stack" },
    ],
  },

  contact: {
    eyebrow: "Contact",
    title: "Let's Connect",
    description: "Open to collaboration, learning, and thoughtful conversations.",
    cta: { label: "Send a Message", to: "/contact" },
    cards: [
      {
        iconName: "Mail",
        title: "Email",
        desc: "Best way to reach me for collaboration or discussion.",
        label: "rayhan.dev.cs@gmail.com",
        hrefKey: "email",
      },
      {
        iconName: "Github",
        title: "GitHub",
        desc: "Explore my code, personal builds, and practice projects.",
        label: "Visit GitHub →",
        hrefKey: "github",
        external: true,
      },
      {
        iconName: "Linkedin",
        title: "LinkedIn",
        desc: "Connect professionally and follow my learning journey.",
        label: "Connect on LinkedIn →",
        hrefKey: "linkedin",
        external: true,
      },
    ],
  },

  email: "rayhan.dev.cs@gmail.com",
  github: "https://github.com/",
  linkedin:
    "https://www.linkedin.com/in/rayhan-cs-dev/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Be2AZGx8ZRAC20iWtp%2FXdJg%3D%3D",

  navLinks: [
    { label: "Home", path: "/" },
    { label: "Blog", path: "/blog" },
    { label: "BookReview", path: "/book-reviews" },
    { label: "Academics", path: "/coursework" },
    { label: "Achievements", path: "/achievements" },
    { label: "Contact", path: "/contact" },
    { label: "Rayn's Notes ✨", path: "https://rayns-notes.vercel.app", external: true },
  ],

  footer: {
    description:
      "A personal website for projects, writing, book reviews, achievements and future research-oriented work.",
  },
};