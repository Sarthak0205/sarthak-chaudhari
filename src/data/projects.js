// src/data/projects.js

export const projects = [
  {
    id: "adaptive-payment-recovery",
    title: "Adaptive Payment Recovery",
    category: "AI / ML",
    filterCategories: ["AI", "ML", "AI / ML", "Full Stack", "Systems"],
    type: "Fintech Decision Systems",
    tagline: "Intelligent payment recovery through ML prediction, policy guardrails, and expected-value decisioning.",
    shortDescription: "An AI-powered payment recovery engine that evaluates failed transactions across multiple recovery strategies and selects the action with the highest expected net value.",
    description: "Adaptive Payment Recovery evaluates failed payment transactions across five candidate recovery actions. By combining a Scikit-learn Logistic Regression pipeline with deterministic business guardrails and an Incremental Expected Value (IEV) decision engine, the system selects optimal recovery pathways while enforcing minimum probability thresholds and attempt caps.",
    technologies: [
      "Python",
      "FastAPI",
      "Scikit-learn",
      "Logistic Regression",
      "Pandas",
      "NumPy",
      "React",
      "Vite",
      "Ollama"
    ],
    highlights: [
      "Logistic Regression recovery probability model trained on 20,000 synthetic transaction records",
      "Incremental Expected Value (IEV) decision engine selecting optimal net-return actions",
      "Deterministic policy guardrails blocking automated retries on attempt >= 3 or blocked cards",
      "5 candidate recovery actions: retry_now, retry_later, payment_link, change_payment_method, no_action",
      "LLM-assisted explanation layer with deterministic heuristic fallback when offline",
      "Decoupled FastAPI backend paired with a reactive Vite/React monitoring dashboard"
    ],
    metrics: [
      { label: "ROC-AUC", value: "72.41%" },
      { label: "Accuracy", value: "65.70%" },
      { label: "F1-Score", value: "61.93%" },
      { label: "Dataset Size", value: "20,000 Txns" },
      { label: "Action Space", value: "5 Strategies" }
    ],
    primaryMetric: {
      value: "72.41% ROC-AUC",
      label: "20,000 Synthetic Transactions • 5 Actions"
    },
    github: "https://github.com/Sarthak0205/adaptive-payment-recovery",
    live: "https://adaptive-payment-recovery-1.onrender.com",
    api: "https://adaptive-payment-recovery.onrender.com",
    docs: "",
    image: "/images/projects/adaptive-payment-recovery.png",
    imagePosition: "center",
    featured: true,
    status: "Live",
    accent: "#ff2a2a",
    details: {
      overview: "When digital payments fail, naive retry loops cause merchant fees, processor bans, and customer churn. Adaptive Payment Recovery replaces blanket retries with an intelligent decision pipeline that analyzes transaction signals, predicts recovery probabilities per action, applies safety guardrails, and calculates the Incremental Expected Value of each strategy.",
      architecture: "The platform is organized into three decoupled layers: a React/Vite operator interface, a high-throughput FastAPI REST backend, and an Scikit-learn inference pipeline. The backend exposes prediction and decision endpoints, loads trained serialization artifacts, evaluates deterministic business rules, and interfaces with Ollama for human-readable recovery explanations.",
      technicalApproach: "The core decision engine optimizes net economic return using Incremental Expected Value (IEV). For each transaction, the ML model predicts recovery likelihood P(action). The engine calculates incremental lift ΔP = P(action) - P(no_action), and computes IEV = (ΔP × amount) - action_cost. If the maximum IEV is negative or the recovery probability falls below 0.30, no action is taken.",
      guardrails: [
        "Retry blocking: Attempt number >= 3 strictly blocks automated retries to prevent gateway penalties",
        "Blocked card safeguard: Error code blocked_card immediately blocks retry attempts",
        "Probability floor: Minimum recovery probability threshold enforced at 0.30",
        "Fallback resilience: Deterministic rule-based fallback triggers automatically if LLM explanation service is unavailable"
      ],
      formulas: [
        {
          name: "Incremental Recovery Lift",
          formula: "ΔP = P(action) - P(no_action)",
          description: "Quantifies the exact probability gain of an intervention compared to doing nothing."
        },
        {
          name: "Incremental Expected Value",
          formula: "IEV = (ΔP × transaction_amount) - action_cost",
          description: "Ensures the selected recovery pathway is economically profitable after accounting for messaging or gateway costs."
        }
      ],
      candidateActions: [
        { name: "retry_now", desc: "Immediate gateway retry for transient network hiccups" },
        { name: "retry_later", desc: "Scheduled retry during off-peak windows for processor timeouts" },
        { name: "payment_link", desc: "SMS/Email payment link dispatched to customer" },
        { name: "change_payment_method", desc: "Prompt user to update expired card or switch to alternate rail" },
        { name: "no_action", desc: "Passive terminal state when recovery cost exceeds expected value" }
      ]
    }
  },
  {
    id: "cinesense",
    title: "CineSense",
    category: "AI / ML",
    filterCategories: ["AI", "ML", "AI / ML", "Full Stack", "Systems"],
    type: "Recommender Systems",
    tagline: "Two-stage hybrid anime recommendation using semantic retrieval and collaborative graph reranking.",
    shortDescription: "A production-engineered recommendation platform combining dense semantic retrieval with collaborative graph reranking, franchise deduplication, and diversity enforcement.",
    description: "CineSense is a two-stage recommendation platform operating across a catalog of 16,261 anime titles. It pairs 384-dimensional Sentence-Transformer embeddings for semantic candidate retrieval with a collaborative co-occurrence graph (7,533 nodes) for graph reranking, multi-seed inputs, and franchise diversity filtering.",
    technologies: [
      "Python",
      "FastAPI",
      "React",
      "TypeScript",
      "Sentence-Transformers",
      "all-MiniLM-L6-v2",
      "NumPy",
      "Pandas",
      "NetworkX",
      "Parquet",
      "Scikit-learn"
    ],
    highlights: [
      "Two-stage pipeline: Dense semantic candidate retrieval followed by collaborative graph reranking",
      "384-dimensional Sentence-Transformer (all-MiniLM-L6-v2) embeddings over 16,261 catalog records",
      "Collaborative co-occurrence graph with 7,533 nodes, 200 nearest neighbors, and Jaccard edge weights",
      "Franchise deduplication enforcing 9.92 unique franchises per top-10 list",
      "Multi-seed input support with explainable evidence breakdowns and sub-100ms response times",
      "Production telemetry with automated fallback to semantic retrieval if graph assets fail"
    ],
    metrics: [
      { label: "Hit Rate@10", value: "51.50%" },
      { label: "Baseline HR@10", value: "8.60%" },
      { label: "Catalog Size", value: "16,261 Titles" },
      { label: "Graph Nodes", value: "7,533 Nodes" },
      { label: "Discovery Rate", value: "99.62%" },
      { label: "Franchise Div.", value: "9.92 / 10" }
    ],
    primaryMetric: {
      value: "51.50% Hit Rate@10",
      label: "6x lift over 8.60% baseline • 16,261 Catalog Titles"
    },
    github: "https://github.com/Sarthak0205/Cine_Sense",
    live: "https://cine-sense-g2a7.vercel.app",
    api: "https://cine-sense-94ry.onrender.com",
    docs: "https://cine-sense-94ry.onrender.com/docs",
    image: "/images/projects/cinesense.png",
    imagePosition: "center",
    featured: true,
    status: "Live",
    accent: "#ff2a2a",
    details: {
      overview: "Standard content-based recommenders suffer from severe semantic drift and franchise clustering (recommending 5 seasons of the same show). CineSense solves this by implementing an industrial two-stage recommendation architecture: first retrieving dense semantic candidates from text embeddings, then reranking them against a high-density collaborative graph with franchise deduplication.",
      architecture: "The platform is architected around a React/TypeScript frontend and a containerized FastAPI backend. Catalog data and precomputed embeddings are loaded via memory-mapped Parquet structures, while the collaborative graph is queried in-memory via NetworkX/NumPy for sub-100ms recommendation response times.",
      technicalApproach: "Candidate generation uses 384-dimensional embeddings produced by all-MiniLM-L6-v2, searching via cosine similarity. In stage two, the candidate pool is reranked through a collaborative graph constructed from 1,000 holdout users across 26 evaluation scenarios. Graph edge weights utilize Jaccard similarity. A greedy deduplication pass preserves diversity, delivering an average of 9.92 unique franchises per top-10 result.",
      verifiedBenchmarks: [
        "Hit Rate@10: 51.50% (vs. 8.60% popularity baseline — a 6x lift)",
        "Catalog coverage: 16,261 titles indexed with 384-dim dense vectors",
        "Collaborative graph: 7,533 nodes connecting user interaction co-occurrences",
        "Discovery rate: 99.62% catalog coverage across test evaluation scenarios",
        "Franchise diversity: 9.92 distinct intellectual properties per top-10 list",
        "Precision@10: 8.07% with NDCG@10 of 0.0953 across holdout test sets"
      ],
      keyFeatures: [
        "Multi-seed seed list: Users can select multiple reference titles to build composite preference vectors",
        "Explainable evidence: Every recommendation provides a transparent attribution breakdown (semantic vs. collaborative)",
        "Fallback resilience: In case of graph index corruption or cold-start items, the engine falls back gracefully to pure semantic retrieval",
        "OpenAPI documentation: Full interactive API documentation available live on Render"
      ]
    }
  },
  {
    id: "trainwise",
    title: "TrainWise",
    category: "AI / ML",
    filterCategories: ["AI", "ML", "AI / ML", "Full Stack", "Systems"],
    type: "Fitness Intelligence Platform",
    tagline: "AI-powered fitness intelligence with progressive overload forecasting and recovery-aware coaching.",
    shortDescription: "A full-stack fitness intelligence platform combining workout history, recovery signals, deterministic coaching logic, and Random Forest ML microservices to forecast next-session training targets.",
    description: "TrainWise combines a Node.js/Express core backend with a dedicated Python FastAPI ML microservice to deliver recovery-aware workout guidance. It processes chronological session history and 7 physiological recovery biomarkers through Scikit-learn Random Forest regression models to forecast target weight and reps with ensemble confidence scoring.",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "Python",
      "FastAPI",
      "Scikit-learn",
      "Random Forest",
      "MongoDB Atlas",
      "Recharts",
      "Tailwind CSS"
    ],
    highlights: [
      "Distributed microservice architecture: Node.js/Express API communicating with a Python FastAPI ML service",
      "Dual Random Forest regression models predicting next-session weight and repetition targets",
      "7 physiological recovery biomarkers (sleep duration, sleep quality, soreness, fatigue, stress, nutrition, hydration)",
      "Progressive overload engine with ensemble confidence weighting and personal record tracking",
      "Resilient heuristic failover with timeout-protected inter-service HTTP communication",
      "Verified 80% reduction in weight prediction error compared to static heuristic baselines"
    ],
    metrics: [
      { label: "Weight MAE", value: "1.24 kg" },
      { label: "Reps MAE", value: "1.02 reps" },
      { label: "Error Reduction", value: "~80%" },
      { label: "Heuristic MAE", value: "6.23 kg" },
      { label: "Test Sessions", value: "331 Sessions" },
      { label: "Biomarkers", value: "7 Signals" }
    ],
    primaryMetric: {
      value: "1.24 kg Weight MAE",
      label: "80% error reduction vs 6.23 kg heuristic baseline"
    },
    github: "https://github.com/Sarthak0205/TrainWise",
    live: "", // No verified live URL
    api: "",
    docs: "",
    image: "/images/projects/trainwise-dashboard.png",
    gallery: [
      {
        title: "Dashboard",
        image: "/images/projects/trainwise-dashboard.png",
        caption: "Comprehensive workout tracking dashboard, weekly training volume, and recent session activity."
      },
      {
        title: "Training Guidance",
        image: "/images/projects/trainwise-guidance.png",
        caption: "AI-driven next-session weight and rep recommendations with confidence scores and progressive overload rationale."
      },
      {
        title: "Daily Recovery",
        image: "/images/projects/trainwise-recovery.png",
        caption: "7-factor physiological biomarker scoring interface assessing central nervous system and muscular readiness."
      },
      {
        title: "Analytics",
        image: "/images/projects/trainwise-analytics.png",
        caption: "Longitudinal volume trends, exercise-specific 1RM progression, and personal record distributions."
      },
      {
        title: "Architecture",
        image: "/images/projects/trainwise-architecture.png",
        caption: "Distributed system design: Node.js Express core backend coupled with Python FastAPI Scikit-learn microservice."
      }
    ],
    imagePosition: "top",
    featured: true,
    status: "GitHub / Demo",
    accent: "#ff2a2a",
    details: {
      overview: "Standard fitness apps either follow static percentage progressions that cause injury during fatigue, or rely on simplistic rules. TrainWise treats progressive overload as a machine learning forecasting problem: predicting sustainable weight and repetition increments conditioned on cumulative fatigue, historical volume, and daily recovery biomarkers.",
      architecture: "The application features a decoupled full-stack architecture. The primary Node.js/Express service manages MongoDB Atlas persistence, JWT session authentication, and workout logging. When a workout session is initiated, the backend issues an authenticated, timeout-protected request to an independent Python FastAPI microservice running trained Scikit-learn Random Forest regression pipelines.",
      technicalApproach: "Dual Random Forest models evaluate historical session trends (rolling volume, RPE, velocity) alongside 7 recovery biomarkers (sleep duration, sleep quality, soreness, fatigue, stress, nutrition, hydration). The ML model predicts target load with an MAE of 1.24 kg (compared to 6.23 kg for static heuristics). An ensemble arbiter blends ML recommendations with deterministic coaching guardrails.",
      verifiedBenchmarks: [
        "ML-only Weight MAE: 1.24 kg across 331 chronological test sessions",
        "ML-only Reps MAE: 1.02 repetitions",
        "Heuristic baseline Weight MAE: 6.23 kg",
        "Hybrid engine Weight MAE: 3.36 kg",
        "Error reduction: Verified 80.1% reduction in weight error versus heuristic baseline",
        "Evaluation cohort: 331 chronological workout sessions validated sequentially"
      ],
      keyFeatures: [
        "Dual Random Forest regression models for weight and rep progression",
        "Recovery-aware coaching logic modifying volume based on CNS fatigue",
        "Resilient heuristic failover ensuring uninterrupted logging if ML service times out",
        "Comprehensive personal record (PR) audit and milestone tracking",
        "Recharts-powered volume load analysis and muscle frequency visualization"
      ]
    }
  },
  {
    id: "studyflow",
    title: "StudyFlow",
    category: "Full Stack",
    filterCategories: ["Full Stack", "Systems"],
    type: "Scheduling & Systems",
    tagline: "Deterministic, explainable study scheduling backed by PostgreSQL invariants.",
    shortDescription: "A full-stack study planning platform that dynamically allocates study time using a 6-factor priority engine across deadline urgency, workload, difficulty, and revision pressure.",
    description: "StudyFlow is a modular monolith application that automates student study scheduling. Designed with strict relational invariants in PostgreSQL via Sequelize, the stateless scheduling engine balances urgency, workload, concept difficulty, and adherence history, dynamically redistributing missed sessions without burnout-inducing backlog spirals.",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Sequelize",
      "TanStack Query",
      "Zustand",
      "Zod",
      "JWT",
      "Jest"
    ],
    highlights: [
      "Modular monolith backend architecture with decoupled domain packages",
      "Stateless 6-factor scheduling engine with explainable reason_json allocation logs",
      "PostgreSQL relational invariants and transactional template-to-student plan cloning via Sequelize",
      "Adaptive missed-session recovery with dynamic daily capacity caps to prevent student burnout",
      "JWT access and revocable refresh token security model with ownership policy gates"
    ],
    metrics: [
      { label: "Urgency Weight", value: "35%" },
      { label: "Workload Weight", value: "25%" },
      { label: "Difficulty Weight", value: "15%" },
      { label: "Progress Gap", value: "15%" },
      { label: "Scheduling Factors", value: "6 Signals" }
    ],
    primaryMetric: {
      value: "6-Factor Scheduler",
      label: "35% Urgency • 25% Workload • PostgreSQL Invariants"
    },
    github: "https://github.com/Sarthak0205/Smart-Study-Planner",
    live: "https://studyflow-puce-five.vercel.app",
    api: "https://studyflow-api-hddv.onrender.com",
    docs: "",
    image: "/images/projects/studyflow.png",
    imagePosition: "center",
    featured: false,
    status: "Live",
    accent: "#ff2a2a",
    details: {
      overview: "Traditional calendar tools are static: when students miss a session, deadlines collide, generating compounding backlogs and guilt. StudyFlow treats study scheduling as an adaptive optimization problem, re-evaluating priority queues across six weighted criteria whenever a session is completed or missed.",
      architecture: "StudyFlow is structured as a clean modular monolith in Node.js/Express. Domain logic is segregated into discrete modules (auth, plans, topics, scheduler, schedules, studyLogs). Database persistence uses PostgreSQL hosted on Neon, managed through Sequelize ORM with strict foreign key constraints and transactional integrity.",
      technicalApproach: "The scheduling algorithm is pure, stateless, and deterministic. It evaluates all pending topics across six normalized parameters: Deadline Urgency (35%), Workload Volume (25%), Concept Difficulty (15%), Progress Gap (15%), Mastery Feedback (5%), and Revision Pressure (5%). Each scheduled session records a reason_json payload explaining precisely why it was scheduled for that specific time block.",
      verifiedWeights: [
        "Deadline Urgency: 35% — Prioritizes proximate milestones",
        "Workload Volume: 25% — Prevents large topics from being delayed",
        "Concept Difficulty: 15% — Allocates fresher morning/early slots for harder tasks",
        "Progress Gap: 15% — Rewards catching up on lagging milestones",
        "Mastery Feedback: 5% — Adjusts based on self-reported understanding scores",
        "Revision Pressure: 5% — Schedules periodic spaced recall sessions"
      ],
      keyFeatures: [
        "Transactional curriculum cloning: Deep-clones public syllabus templates into private, editable plans",
        "Anti-burnout capacity constraints: Caps maximum daily study hours to prevent unrealistic schedules",
        "Adaptive backlog absorption: Distributes missed topic hours across future available study days",
        "Full test coverage: Unit and integration testing suites powered by Jest",
        "Modular REST API architecture deployed to Render with live client on Vercel"
      ]
    }
  },
  {
    id: "sweta-enterprises",
    title: "Sweta Enterprises",
    category: "Full Stack",
    filterCategories: ["Full Stack", "Systems"],
    type: "Enterprise B2B Platform",
    tagline: "B2B chemical catalog and RFQ management platform with secure administration and analytics.",
    shortDescription: "A full-stack B2B platform for industrial chemical product discovery, RFQ lead capture, product catalog management, and administrative analytics.",
    description: "Sweta Enterprises is an industrial chemical commerce and RFQ platform engineered for B2B procurement workflows. It features a public technical product catalog with category filtering, a GST-aware Request For Quotation (RFQ) lead capture pipeline, JWT/bcrypt authenticated administrative CRUD, and real-time dashboard analytics.",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
      "JWT",
      "bcrypt",
      "Tailwind CSS",
      "Recharts",
      "Axios"
    ],
    highlights: [
      "B2B industrial chemical product catalog with 15 seed chemical products across 4 core categories",
      "Structured RFQ lead capture pipeline with GST validation and administrative routing",
      "Protected administrative portal with JWT authentication, bcrypt hashing, and product CRUD",
      "Inquiry lifecycle state machine (New, In Review, Quoted, Closed) with administrative audit notes",
      "Production-hardened backend with Helmet security headers, rate limiting, and MongoDB indexing"
    ],
    metrics: [
      { label: "Catalog Products", value: "15 Items" },
      { label: "Core Categories", value: "4 Sectors" },
      { label: "REST Endpoints", value: "9 Endpoints" },
      { label: "Security", value: "JWT + bcrypt" }
    ],
    primaryMetric: {
      value: "9 REST Endpoints",
      label: "15 Catalog Products • 4 Chemical Sectors"
    },
    github: "https://github.com/Sarthak0205/sweta-enterprises",
    live: "", // No verified live URL
    api: "",
    docs: "",
    image: "/images/projects/sweta-enterprises.png",
    imagePosition: "top",
    featured: false,
    status: "GitHub",
    accent: "#ff2a2a",
    details: {
      overview: "B2B chemical distribution requires precise product specification matching, bulk inquiries, and GST verification. Sweta Enterprises digitizes this traditional offline process into an accessible web platform, connecting commercial chemical buyers directly to catalog specs and administrative RFQ handlers.",
      architecture: "The platform comprises an Express/Node.js REST service communicating with MongoDB via Mongoose, alongside a modern React/Vite admin and customer portal. Media assets are hosted on Cloudinary, while the server enforces Helmet security headers, input sanitization, and IP rate limiting.",
      technicalApproach: "The architecture isolates public read surfaces from privileged administrative operations. The RFQ engine validates buyer credentials, commercial quantities, and GST details before persisting inquiries. The administration dashboard provides status state transitions (New -> In Review -> Quoted -> Closed) and Recharts analytics.",
      verifiedMetrics: [
        "15 seed chemical products in verified industrial catalog",
        "4 major categories: Surfactants, Pearlizing Agents, Thickeners, Chemical Intermediates",
        "9 dedicated REST API endpoints handling authentication, catalog, and inquiry workflows",
        "15 high-resolution industrial product image assets cataloged and served"
      ],
      keyFeatures: [
        "Dynamic category filtering for surfactant, pearlizing, and intermediate chemical agents",
        "GST-compliant RFQ lead generation form with payload validation",
        "Administrative dashboard with Recharts-powered inquiry volume analytics",
        "Secure administrative authentication using salted bcrypt password hashes and JWT tokens",
        "Robust Mongoose schema indexing for fast category and text queries"
      ]
    }
  }
];
