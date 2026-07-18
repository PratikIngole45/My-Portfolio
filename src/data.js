// =========================================
// Portfolio Data — Edit your content here
// =========================================

export const personalInfo = {
  name: "Pratik Ingole",
  role: "Full Stack Developer & CSE Student",
  taglines: [
    "Building scalable web applications.",
    "Passionate about DSA and problem solving.",
    "Turning ideas into real-world projects.",
  ],
  email: "ingolepratik099@gmail.com",
  location: "Amravati, Maharashtra, India",
  bio: `I'm a final-year B.Tech Computer Science student with a CGPA of 8.8 and a strong interest in Full-Stack Web Development and Data Structures & Algorithms. I enjoy building scalable web applications and solving challenging programming problems. My primary tech stack includes Java, JavaScript, React.js, Node.js, Express.js, and MongoDB. Through projects like WanderNest and Zerodha Clone, I have gained hands-on experience in developing responsive and user-friendly applications. `,

  stats: [
    { value: "250+", label: "LeetCode Problems" },
    { value: "8.8", label: "CGPA" },
    { value: "3+", label: "Projects Built" },
    { value: "MERN", label: "Tech Stack" },
  ],
  socialLinks: [
    { name: "GitHub", url: "https://github.com/PratikIngole45", icon: "github" },
    { name: "LinkedIn", url: "linkedin.com/in/pratik-ingole", icon: "linkedin" },
    { name: "Twitter", url: "https://twitter.com", icon: "twitter" },
    { name: "Instagram", url: "https://www.instagram.com/pratik_ingole.45/", icon: "instagram" },
    { name: "Email", url: "ingolepratik099@gmail.com", icon: "mail" },
  ],
  resumeUrl: "/resume.pdf",
};

export const skills = [
  {
    category: "Programming Languages",
    items: [
      { name: "Java", level: 85 },
      { name: "JavaScript", level: 85 },
      { name: "Python", level: 70 },
      { name: "C", level: 75 },
    ],
  },

  {
    category: "Frontend Development",
    items: [
      { name: "HTML5", level: 90 },
      { name: "CSS3", level: 85 },
      { name: "Bootstrap", level: 85 },
      { name: "React.js", level: 80 },
      { name: "EJS", level: 85 },

    ],
  },

  {
    category: "Backend Development",
    items: [
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 85 },
      { name: "REST APIs", level: 80 },
      { name: "Authentication & Authorization", level: 80 },
      { name: "Passport.js", level: 75 },
    ],
  },

  {
    category: "Database & Cloud",
    items: [
      { name: "MongoDB", level: 85 },
      { name: "Mongoose", level: 85 },
      { name: "MySQL", level: 75 },
      { name: "Cloudinary", level: 80 },
      { name: "MongoDB Atlas", level: 80 },
    ],
  },

  {
    category: "Tools & Technologies",
    items: [
      { name: "Git", level: 85 },
      { name: "GitHub", level: 85 },
      { name: "VS Code", level: 90 },
      { name: "Postman", level: 80 },
      { name: "Mapbox API", level: 75 }
    ],
  },

  {
    category: "Computer Science Fundamentals",
    items: [
      { name: "Data Structures & Algorithms", level: 80 },
      { name: "Object-Oriented Programming", level: 85 },
      { name: "DBMS", level: 80 },
      { name: "Operating Systems", level: 75 },
      { name: "Computer Networks", level: 70 },
    ],
  },
];

export const projects = [
  {
    title: "WanderNest",
    description:
      "A full-stack Airbnb-inspired platform where users can create, edit, and manage property listings. Features include user authentication, image uploads, reviews, interactive maps, and secure session management.",
    tags: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "EJS",
      "Cloudinary",
      "Passport.js",
      "Mapbox API",
    ],
    category: "fullstack",
    github: null,
    live: null,
    featured: true,
  },

  {
    title: "Zerodha Clone",
    description:
      "A responsive stock trading platform inspired by Zerodha, featuring a modern user interface, reusable React components, and seamless navigation across multiple pages.",
    tags: [
      "React.js",
      "JavaScript",
      "HTML",
      "CSS",
      "Bootstrap",
    ],
    category: "fullstack",
    github: null,
    live: null,
    featured: true,
  },

  {
    title: "Personal Portfolio",
    description:
      "A modern and responsive portfolio website showcasing my projects, technical skills, achievements, and educational background with a clean and professional design.",
    tags: [
      "React.js",
      "JavaScript",
      "Tailwind CSS",
      "Responsive Design",
    ],
    category: "frontend",
    github: "https://github.com/PratikIngole45/My-Portfolio",
    live: "https://pratikingole-portfolio.vercel.app/",
    featured: true,
  },
];

export const experience = [
  {
    role: "Senior Full Stack Developer",
    company: "TechCorp Inc.",
    period: "2023 — Present",
    description:
      "Leading development of the core product platform, mentoring junior developers, and architecting microservices infrastructure. Improved application performance by 40% and reduced deployment times by 60%.",
    technologies: ["React", "Node.js", "AWS", "PostgreSQL"],
  },
  {
    role: "Full Stack Developer",
    company: "StartupHub",
    period: "2021 — 2023",
    description:
      "Built and maintained multiple client-facing web applications from concept to deployment. Introduced CI/CD pipelines and automated testing, increasing team velocity by 35%.",
    technologies: ["Vue.js", "Python", "Docker", "MongoDB"],
  },
  {
    role: "Frontend Developer",
    company: "DigitalAgency Co.",
    period: "2020 — 2021",
    description:
      "Developed responsive, accessible web interfaces for enterprise clients. Collaborated closely with design teams to translate Figma mockups into pixel-perfect implementations.",
    technologies: ["React", "TypeScript", "Sass", "Figma"],
  },
  {
    role: "Junior Developer",
    company: "WebSolutions Ltd.",
    period: "2019 — 2020",
    description:
      "Started my professional journey building WordPress sites and custom themes. Transitioned to modern JavaScript frameworks and contributed to internal tooling projects.",
    technologies: ["JavaScript", "WordPress", "PHP", "MySQL"],
  },
];

export const blogPosts = [
  {
    title: "Building Scalable APIs with Node.js",
    excerpt:
      "A deep dive into best practices for designing and building RESTful APIs that can handle millions of requests with grace.",
    date: "Mar 15, 2026",
    readTime: "8 min read",
    category: "Backend",
    url: "#",
  },
  {
    title: "The Future of Frontend Frameworks",
    excerpt:
      "Exploring the evolving landscape of frontend development and what the next generation of frameworks brings to the table.",
    date: "Feb 28, 2026",
    readTime: "6 min read",
    category: "Frontend",
    url: "#",
  },
  {
    title: "Docker for Developers: A Practical Guide",
    excerpt:
      "Everything you need to know to containerize your applications and streamline your development workflow with Docker.",
    date: "Jan 10, 2026",
    readTime: "10 min read",
    category: "DevOps",
    url: "#",
  },
];
