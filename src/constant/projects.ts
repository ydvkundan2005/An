export const projectsData = [
  {
    name: "TestIQ",
    description:
      "CLI RAG pipeline using LangChain and ChromaDB that analyzes codebases and auto-generates unit tests. Uses Tree-sitter for AST parsing and a self-correcting Ollama loop to validate output before finalization — 60 passing tests across 4 build phases.",
    github_link: "https://github.com/aarabii/testiq",
    demo: "",
    tech: ["LangChain", "ChromaDB", "Ollama", "Tree-sitter", "Python"],
  },
  {
    name: "VidyaMarg",
    description:
      "Full-stack AI learning path generator powered by LLaMA 3.1 70B via Groq. Produces structured, goal-based roadmaps from user input and renders them as interactive DAGs using NetworkX and React Flow, with Supabase as the backend.",
    github_link: "https://github.com/aarabii/vidyamarg",
    demo: "https://vidya-marg.vercel.app/",
    tech: ["Next.js", "FastAPI", "Groq", "NetworkX", "Supabase", "React Flow"],
  },
  {
    name: "Curely",
    description:
      "Real-time voice AI assistant for medical Q&A built on VAPI and Whisper, with Gemini handling response generation. Optimized inference cost to $0.08/min through targeted model selection and request routing via OpenRouter.",
    github_link: "https://github.com/aarabii/curely",
    demo: "https://curely.vercel.app/",
    tech: ["VAPI", "OpenAI Whisper", "Gemini", "OpenRouter"],
  },
  {
    name: "Orphia",
    description:
      "AI music generator that turns text prompts into original audio using PyTorch RNN/LSTM models. Paired with a Next.js frontend for a seamless generation experience — fully deployed and live.",
    github_link: "https://github.com/aarabii/Orphia-AI-Music-Generator",
    demo: "https://orphia.vercel.app/",
    tech: ["PyTorch", "RNN/LSTM", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    name: "CppTestGenAI",
    description:
      "Build-free static analysis tool for C++ projects. Scans source files with CodeLlama 7B via Ollama to predict test cases and coverage estimates — no compilation needed. Outputs per-file cached reports in Markdown, YAML, and terminal formats.",
    github_link: "https://github.com/aarabii/CppTestGenAI",
    demo: "",
    tech: ["Python", "Ollama", "CodeLlama", "YAML"],
  },
  {
    name: "Ideascribe",
    description:
      "Collaborative note-taking app for developers with rich-text editing via BlockNote, real-time state sync through Convex, and cloud asset management with Edge Store.",
    github_link: "https://github.com/aarabii/ideascribe",
    demo: "https://ideascribe.vercel.app/",
    tech: ["Next.js", "Convex", "Clerk", "BlockNote", "Edge Store"],
  },
];
