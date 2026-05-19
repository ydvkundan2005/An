export const projectsData = [
  {
    name: "TestIQ",
    description:
      "Built a CLI RAG pipeline using LangChain and ChromaDB to analyze codebases and auto-generate unit tests. Engineered a self-correcting validation loop with Tree-sitter and Ollama to eliminate invalid test output.",
    github_link: "https://github.com/aarabii/testiq",
    demo: "",
    tech: ["LangChain", "ChromaDB", "Ollama", "Tree-sitter", "Python"],
  },
  {
    name: "VidyaMarg",
    description:
      "Developed a full-stack AI learning path generator integrating LLaMA 3.1 70B via Groq. Architected graph-based path rendering with NetworkX and React Flow, visualizing learning paths as interactive DAGs backed by Supabase.",
    github_link: "https://github.com/aarabii/vidyamarg",
    demo: "https://vidya-marg.vercel.app/",
    tech: ["Next.js", "FastAPI", "Groq", "NetworkX", "Supabase", "React Flow"],
  },
  {
    name: "Curely",
    description:
      "Designed an end-to-end real-time voice AI assistant for medical Q&A using VAPI and Whisper, with Gemini handling response generation. Reduced inference cost through targeted model selection via Openrouter.",
    github_link: "https://github.com/aarabii/curely",
    demo: "https://curely.vercel.app/",
    tech: ["VAPI", "OpenAI Whisper", "Gemini", "Openrouter"],
  },
  {
    name: "Ideascribe",
    description:
      "Engineered a note taking application for developers, integrating BlockNote for dynamic rich-text editing, Convex for rapid state synchronization, and Edge Store for scalable cloud asset management.",
    github_link: "https://github.com/aarabii/ideascribe",
    demo: "https://ideascribe.vercel.app/",
    tech: ["Convex", "Clerk", "React", "Blocknote", "Edgestore"],
  },
];
