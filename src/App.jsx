import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { ArrowRight, BriefcaseBusiness, Code2, FolderGit2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import Navbar from "./components/Navbar";
import EducationSection from "./components/EducationSection";
import ExperienceSection from "./components/ExperienceSection";
import CTASection from "./components/CTASection";
import PageWrapper from "./ui/PageWrapper";
import Section from "./ui/Section";
import Reveal from "./ui/Reveal";
import Button from "./ui/Button";
import { colors, getSurfaceStyles, layout, radius, sectionHeaderStyles } from "./ui/theme";

/* 🔥 PAGES */

const homePreviews = [
  {
    title: "Featured Project",
    heading: "Smart Study Planner",
    description:
      "Built a multi-user study planner with React, Django, PostgreSQL, and REST APIs.",
    meta: "What made it interesting was handling different users, saved plans, and backend-driven schedule flows in one system.",
    action: "See Project Details",
    to: "/projects",
    icon: <FolderGit2 size={18} />,
  },
  {
    title: "Internship",
    heading: "Frontend Developer Intern at Navanta Exim",
    description:
      "Worked on a Next.js company website by updating React UI sections and content inside an existing production codebase.",
    meta: "Used TypeScript and Tailwind CSS while making focused frontend updates that had to fit the site's current structure.",
    action: "View Experience",
    to: "/experience",
    icon: <BriefcaseBusiness size={18} />,
  },
  {
    title: "Skills Snapshot",
    heading: "React, Django, PostgreSQL, JavaScript",
    description:
      "I mainly work with frontend flows, API integration, and full-stack projects.",
    meta: "Core stack: React UI, REST APIs, backend logic, and database-backed features.",
    action: "Browse Skills",
    to: "/skills",
    icon: <Code2 size={18} />,
  },
];

function HomeProofPreviews() {
  const navigate = useNavigate();

  return (
    <Section
      style={{
        position: "relative",
        paddingBlock: "clamp(3.75rem, 8vw, 5rem)",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at 82% 0%, rgba(255,42,42,0.06), transparent 24%), linear-gradient(to bottom, #030303, #060606)",
        }}
      />

      <div style={{ position: "relative", zIndex: 1, maxWidth: layout.contentWidth, margin: "0 auto" }}>
        <Reveal>
          <div style={{ ...sectionHeaderStyles.wrap, marginBottom: "1.75rem" }}>
            <p style={sectionHeaderStyles.eyebrow}>Selected Work</p>
            <h2
              style={{
                ...sectionHeaderStyles.title,
                fontSize: "clamp(2rem, 4.5vw, 2.8rem)",
              }}
            >
              A quick look at what I&apos;ve built and where I&apos;ve worked
            </h2>
            <p style={{ ...sectionHeaderStyles.body, maxWidth: "760px" }}>
              Projects, internship experience and the tools I use most.
            </p>
          </div>
        </Reveal>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "20px",
          }}
        >
          {homePreviews.map((item, index) => (
            <Reveal key={item.heading} delay={index * 0.06}>
              <article
                style={{
                  ...getSurfaceStyles(index === 1 ? "accent" : "default"),
                  height: "100%",
                  padding: "24px",
                  display: "grid",
                  gap: "16px",
                }}
              >
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    width: "fit-content",
                    padding: "8px 12px",
                    borderRadius: radius.pill,
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    color: "#f2f2f2",
                    fontSize: "0.8rem",
                    fontWeight: 700,
                  }}
                >
                  {item.icon}
                  {item.title}
                </div>

                <div style={{ display: "grid", gap: "10px" }}>
                  <h3
                    style={{
                      margin: 0,
                      fontSize: "1.2rem",
                      lineHeight: 1.25,
                    }}
                  >
                    {item.heading}
                  </h3>
                  <p
                    style={{
                      color: colors.textMuted,
                      fontSize: "0.95rem",
                      lineHeight: 1.7,
                    }}
                  >
                    {item.description}
                  </p>
                  <p
                    style={{
                      color: "#e3e3e3",
                      fontSize: "0.88rem",
                      lineHeight: 1.62,
                    }}
                  >
                    {item.meta}
                  </p>
                </div>

                <div>
                  <Button
                    variant="secondary"
                    onClick={() => navigate(item.to)}
                    style={{ width: "fit-content" }}
                  >
                    {item.action}
                    <ArrowRight size={16} />
                  </Button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

function HomePage() {
  return (
    <PageWrapper>
      <Hero />
      <HomeProofPreviews />
      <EducationSection />
      <CTASection />
    </PageWrapper>
  );
}

function ProjectsPage() {
  return (
    <PageWrapper>
      <Projects />
    </PageWrapper>
  );
}

function SkillsPage() {
  return (
    <PageWrapper>
      <Skills />
    </PageWrapper>
  );
}

function ExperiencePage() {
  return (
    <PageWrapper>
      <ExperienceSection />
    </PageWrapper>
  );
}

function ResumePage() {
  return (
    <PageWrapper>
      <Resume />
    </PageWrapper>
  );
}

function ContactPage() {
  return (
    <PageWrapper>
      <Contact />
    </PageWrapper>
  );
}

/* 🔥 ROUTES */

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/skills" element={<SkillsPage />} /> {/* ✅ NEW ROUTE */}
        <Route path="/resume" element={<ResumePage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </AnimatePresence>
  );
}

/* 🔥 APP */

export default function App() {
  return (
    <Router>
      <Navbar /> {/* ✅ persistent */}
      <AnimatedRoutes />
    </Router>
  );
}
