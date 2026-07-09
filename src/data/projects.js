// src/data/projects.js

export const projects = [
  {
    title: "StudyFlow",
    tagline: "Adaptive Study Planning Platform with Intelligent Scheduling",
    category: "EdTech • Full Stack",
    description: "StudyFlow is a full-stack adaptive study planning platform that automatically generates personalized learning schedules based on concept difficulty, mastery, and available study time. It features secure authentication, progress tracking, learning path management, and a modular REST API architecture.",
    techStack: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL", "Prisma"],
    featureTags: ["Adaptive Scheduling", "Authentication", "PostgreSQL", "Full Stack", "Cloud Deployment"],
    highlights: [
      "Difficulty-weighted scheduling algorithm",
      "Personalized study plans",
      "Secure authentication",
      "Progress tracking dashboard",
      "Modular backend architecture",
      "Production deployment"
    ],
    github: "https://github.com/Sarthak0205/StudyFlow",
    live: "https://studyflow-puce-five.vercel.app",
    featured: true,
    image: "/images/studyflow.png", // Screenshot path
    imagePosition: "top" // Custom vertical alignment for the screenshot
  },
  {
    title: "CineSense",
    tagline: "Hybrid Movie Recommendation System using NLP & Semantic Search",
    category: "AI / Machine Learning",
    description: "CineSense is an AI-powered movie recommendation platform that combines TF-IDF, cosine similarity, and Sentence Transformers to deliver highly relevant movie recommendations. The project integrates practical machine learning techniques into a responsive production-ready web application.",
    techStack: ["React", "Python", "Flask", "TF-IDF", "Sentence Transformers", "NLP"],
    featureTags: ["Recommendation System", "Semantic Search", "Machine Learning", "AI", "Full Stack"],
    highlights: [
      "Hybrid recommendation engine",
      "Semantic similarity search",
      "Fast recommendation pipeline",
      "TMDB dataset integration",
      "Production deployment"
    ],
    github: "https://github.com/Sarthak0205/Cine_Sense",
    live: "https://cine-sense-eight.vercel.app",
    featured: true,
    image: "/images/cinesense.png",
    imagePosition: "top" // Custom vertical alignment for the screenshot
  },
  {
    title: "TrainWise",
    tagline: "Personalized Fitness Routine Planner using Content-Filtering",
    category: "AI / Machine Learning",
    description: "An AI-powered application that recommends personalized workout routines based on user fitness levels, target muscle groups, and available equipment. It implements content-based filtering algorithms and features an interactive routine planner.",
    techStack: ["React", "Python", "Flask", "Scikit-learn", "Pandas"],
    featureTags: ["Recommendation System", "Content Filtering", "Machine Learning", "AI"],
    highlights: [
      "Content-based filtering algorithm",
      "Targeted muscle group mapping",
      "Custom routine builder",
      "Interactive progress visualization",
      "Fast API response times"
    ],
    github: "https://github.com/Sarthak0205/TrainWise",
    live: "",
    featured: false,
    image: "",
    imagePosition: "center" // Custom vertical alignment for the screenshot
  }
];
