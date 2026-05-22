import { resumeKeywords } from "./resumeKeywords";

const names = [
  "Aarab Nishchal",
  "Aarab Nishchal Portfolio",
  "Aarabii",
  "Aarab Nishchal KIIT",
  "Aarab Nishchal Bhubaneswar",
];

const roles = [
  "Software Engineer",
  "Full Stack Developer",
  "Next.js Developer",
  "Frontend Engineer",
  "Backend Developer",
  "Generative AI Engineer",
  "Technical Content Engineer",
  "Problem Setter",
  "Student Developer",
  "Creative Developer",
  "UI/UX Engineer",
];

const skills = [
  // Web Frameworks & Libraries
  "Next.js",
  "React.js",
  "Angular",
  "Django",
  "FastAPI",
  "Node.js",
  "Express.js",
  "TypeScript",
  "Tailwind CSS",

  // Database & Backend
  "PostgreSQL",
  "Supabase",
  "MongoDB",
  "ChromaDB",
  "Convex",
  "REST API",

  // AI & Systems
  "Machine Learning",
  "PyTorch",
  "LangChain",
  "Ollama",
  "Groq",
  "VAPI",
  "Whisper",
  "Gemini",
  "OpenRouter",
  "RNN/LSTM",
  "Python",
  "Docker",
  "AWS EC2",
  "Jenkins",
  "n8n",
  "CI/CD Pipelines",
  "Git & GitHub",
];

const projects = [
  "CppTestGenAI",
  "Orphia Music Generator",
  "Algo Visualizer Next.js",
  "Bhagavad Gita API",
  "Sorting Algorithm Visualizer",
  "Portfolio Website Next.js",
  "AI Powered Application",
  "TestIQ",
  "VidyaMarg",
  "Curely",
  "Ideascribe",
];

const locations = [
  "India",
  "Delhi",
  "NCR",
  "Delhi NCR",
  "Gurgaon",
  "Bhubaneswar",
  "Odisha",
  "Bangalore",
  "Remote",
  "Worldwide",
];

const longTail = [
  "Hire Next.js Developer in India",
  "Best Full Stack Developer Portfolio",
  "React Developer for startup",
  "Software Engineer Intern opportunities",
  "Next.js 15 Portfolio Template",
  "Generative AI Projects Showcase",
  "Frontend Developer with AI skills",
  "Freelance Web Developer India",
  "Collaborate on Open Source",
  "Technical Writer and Developer",
  "Hackathon Winner Portfolio",
];

export const Keywords = [
  ...names,
  ...roles,
  ...skills,
  ...projects,
  ...locations,
  ...longTail,
  ...resumeKeywords,

  ...roles.flatMap((role) => locations.map((loc) => `${role} in ${loc}`)),
  ...skills.map((skill) => `${skill} Developer`),
  ...skills.map((skill) => `${skill} Expert`),
  ...skills.map((skill) => `Hire ${skill} Developer`),
];
