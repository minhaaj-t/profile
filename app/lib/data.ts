interface Project {
  title: string;
  description: string;
  tags: string[];
  link: string;
  client: string;
  duration: string;
  role: string;
  technologies: string[];
  imageDark: string;
  imageLight: string;
}

export const projects: Project[] = [
  {
    title: "AI Chatbot Platform",
    description:
      "Built an intelligent chatbot platform using OpenAI's GPT-3 API, React, and Node.js. Implemented real-time conversation features and custom training capabilities.",
    tags: ["React", "Node.js", "OpenAI", "WebSocket"],
    link: "https://github.com/minhaaj-t",
    client: "TechCorp Inc.",
    duration: "3 months",
    role: "Lead Developer",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "WebSocket",
      "OpenAI API",
    ],
    imageDark: "https://scastiel.dev/api/image/minhaaj-t?dark&removeLink",
    imageLight: "https://scastiel.dev/api/image/minhaaj-t?removeLink",
  },
  {
    title: "Crypto Trading Dashboard",
    description:
      "Developed a real-time cryptocurrency trading dashboard with price alerts, portfolio tracking, and automated trading strategies.",
    tags: ["TypeScript", "Redux", "WebSocket", "Chart.js"],
    link: "https://github.com/minhaaj-t",
    client: "CryptoTrade Solutions",
    duration: "6 months",
    role: "Full Stack Developer",
    technologies: [
      "React",
      "TypeScript",
      "Redux",
      "Node.js",
      "WebSocket",
      "Chart.js",
      "PostgreSQL",
    ],
    imageDark: "https://scastiel.dev/api/image/minhaaj-t?dark&removeLink",
    imageLight: "https://scastiel.dev/api/image/minhaaj-t?removeLink",
  },
  {
    title: "E-commerce Platform with Laravel",
    description:
      "Developed a scalable e-commerce platform with a custom admin dashboard, payment gateway integration, and product catalog management.",
    tags: ["Laravel", "PHP", "MySQL", "Stripe"],
    link: "https://github.com/minhaaj-t",
    client: "ShopEase Inc.",
    duration: "4 months",
    role: "Backend Developer",
    technologies: ["Laravel", "PHP", "MySQL", "Stripe API"],
    imageDark: "https://scastiel.dev/api/image/minhaaj-t?dark&removeLink",
    imageLight: "https://scastiel.dev/api/image/minhaaj-t?removeLink",
  },
  {
    title: "Real Estate WordPress Website",
    description:
      "Designed and developed a dynamic real estate website with custom WordPress themes, SEO optimization, and lead generation forms.",
    tags: ["WordPress", "PHP", "SEO", "Custom Theme"],
    link: "https://github.com/minhaaj-t",
    client: "DreamHomes Ltd.",
    duration: "2 months",
    role: "Frontend Developer",
    technologies: ["WordPress", "PHP", "JavaScript", "CSS"],
    imageDark: "https://scastiel.dev/api/image/minhaaj-t?dark&removeLink",
    imageLight: "https://scastiel.dev/api/image/minhaaj-t?removeLink",
  },
  {
    title: "React Native Fitness App",
    description:
      "Built a cross-platform fitness app with workout tracking, push notifications, and user progress analytics using React Native.",
    tags: ["React Native", "Firebase", "Push Notifications"],
    link: "https://github.com/minhaaj-t",
    client: "FitLife Inc.",
    duration: "5 months",
    role: "Mobile Developer",
    technologies: ["React Native", "Firebase", "Redux", "JavaScript"],
    imageDark: "https://scastiel.dev/api/image/minhaaj-t?dark&removeLink",
    imageLight: "https://scastiel.dev/api/image/minhaaj-t?removeLink",
  },
  {
    title: "Learning Management System",
    description:
      "Developed an LMS using Laravel with features like course management, user roles, and certification issuance.",
    tags: ["Laravel", "PHP", "MySQL", "Bootstrap"],
    link: "https://github.com/minhaaj-t",
    client: "EduLearn Solutions",
    duration: "6 months",
    role: "Full Stack Developer",
    technologies: ["Laravel", "PHP", "MySQL", "Bootstrap"],
    imageDark: "https://scastiel.dev/api/image/minhaaj-t?dark&removeLink",
    imageLight: "https://scastiel.dev/api/image/minhaaj-t?removeLink",
  },
  {
    title: "Custom Blog Website",
    description:
      "Developed a WordPress blog site with custom plugins for advanced SEO, analytics, and post-scheduling.",
    tags: ["WordPress", "PHP", "Custom Plugins", "SEO"],
    link: "https://github.com/minhaaj-t",
    client: "BlogSphere",
    duration: "2 months",
    role: "WordPress Developer",
    technologies: ["WordPress", "PHP", "JavaScript", "CSS"],
    imageDark: "https://scastiel.dev/api/image/minhaaj-t?dark&removeLink",
    imageLight: "https://scastiel.dev/api/image/minhaaj-t?removeLink",
  },
  {
    title: "Social Media Analytics Dashboard",
    description:
      "Created a React-based dashboard for social media analytics with real-time data visualization and user engagement tracking.",
    tags: ["React", "Redux", "Chart.js", "REST API"],
    link: "https://github.com/minhaaj-t",
    client: "SocialBuzz Analytics",
    duration: "4 months",
    role: "Frontend Developer",
    technologies: ["React", "Redux", "Chart.js", "REST API"],
    imageDark: "https://scastiel.dev/api/image/minhaaj-t?dark&removeLink",
    imageLight: "https://scastiel.dev/api/image/minhaaj-t?removeLink",
  },
  {
    title: "React Native Food Delivery App",
    description:
      "Developed a food delivery app with features like live order tracking, secure payment gateways, and restaurant dashboards.",
    tags: ["React Native", "Redux", "Firebase", "Stripe"],
    link: "https://github.com/minhaaj-t",
    client: "FoodieHub",
    duration: "5 months",
    role: "Mobile Developer",
    technologies: [
      "React Native",
      "Redux",
      "Firebase",
      "Stripe API",
      "Google Maps API",
    ],
    imageDark: "https://scastiel.dev/api/image/minhaaj-t?dark&removeLink",
    imageLight: "https://scastiel.dev/api/image/minhaaj-t?removeLink",
  },
  {
    title: "Event Booking Website",
    description:
      "Built an event booking system with Laravel that supports ticket management, payment integrations, and admin reporting.",
    tags: ["Laravel", "Stripe", "PHP", "Bootstrap"],
    link: "https://github.com/minhaaj-t",
    client: "Eventify Inc.",
    duration: "3 months",
    role: "Backend Developer",
    technologies: ["Laravel", "PHP", "Stripe API", "Bootstrap", "MySQL"],
    imageDark: "https://scastiel.dev/api/image/minhaaj-t?dark&removeLink",
    imageLight: "https://scastiel.dev/api/image/minhaaj-t?removeLink",
  },
];

export const skills = [
  {
    category: "Frontend",
    techs: ["React", "Next.js", "Vue.js", "Tailwind CSS", "TypeScript"],
  },
  {
    category: "Backend",
    techs: ["Node.js", "Python", "Java", "PostgreSQL", "MongoDB"],
  },
  {
    category: "DevOps",
    techs: ["Docker", "AWS", "CI/CD", "Kubernetes", "Linux"],
  },
  {
    category: "Tools",
    techs: ["Git", "VS Code", "Figma", "Postman", "Jira"],
  },
];

export const socialPosts = [
  {
    id: 1,
    image: "/placeholder.svg?height=300&width=300",
    caption: "Working on a new exciting project! #coding #webdev",
  },
  {
    id: 2,
    image: "/placeholder.svg?height=300&width=300",
    caption: "Just launched my latest app! Check it out #newrelease",
  },
  {
    id: 3,
    image: "/placeholder.svg?height=300&width=300",
    caption: "Attending a tech conference #learning #networking",
  },
  {
    id: 4,
    image: "/placeholder.svg?height=300&width=300",
    caption: "Beautiful sunset from my coding spot #worklifebalance",
  },
  {
    id: 5,
    image: "/placeholder.svg?height=300&width=300",
    caption: "Celebrating a successful deployment #teamwork",
  },
  {
    id: 6,
    image: "/placeholder.svg?height=300&width=300",
    caption: "My desk setup for maximum productivity #workfromhome",
  },
  {
    id: 7,
    image: "/placeholder.svg?height=300&width=300",
    caption: "Brainstorming session with the team #innovation",
  },
  {
    id: 8,
    image: "/placeholder.svg?height=300&width=300",
    caption: "Just solved a tricky bug! #debugging #victory",
  },
];
