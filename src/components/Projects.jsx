import React, { useMemo, useState } from "react";
import { motion as Motion } from "framer-motion";
import { ExternalLink, Github, Lock } from "lucide-react";

import Section from "../ui/Section";
import Reveal from "../ui/Reveal";
import {
  colors,
  getButtonStyles,
  getSurfaceStyles,
  layout,
  radius,
  sectionHeaderStyles,
} from "../ui/theme";

const filters = ["All", "Full Stack", "AI / ML"];

const projects = [
  {
    title: "CineSense",
    category: "AI / ML",
    description:
      "A recommendation app for movies, series, and anime built with React, Flask, Sentence Transformers, and scikit-learn.",
    stack: ["React", "Flask", "Sentence Transformers", "scikit-learn", "Plotly"],
    highlight: "What made it interesting was combining similarity logic, filtering, and different content types in one recommendation flow.",
    github: "https://github.com/Sarthak0205/CineSense",
    live: "",
    image: "/images/cinesense.jpeg",
    featured: false,
  },
  {
    title: "Smart Study Planner",
    category: "Full Stack",
    description:
      "A multi-user study planning system built with React, Django, PostgreSQL, and REST APIs.",
    stack: ["React", "Django", "PostgreSQL", "REST APIs"],
    highlight: "I built it around authenticated users, saved plans, and schedule generation so the frontend and backend stayed in sync.",
    github: "https://github.com/Sarthak0205/Smart-Study-Planner",
    live: "",
    image: "",
    featured: false,
  },
];

function FilterTabs({ activeFilter, onChange }) {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "10px",
        justifyContent: "center",
      }}
    >
      {filters.map((filter) => {
        const active = activeFilter === filter;

        return (
          <button
            key={filter}
            type="button"
            onClick={() => onChange(filter)}
            style={{
              ...getButtonStyles("secondary"),
              minHeight: "40px",
              padding: "0.55rem 0.95rem",
              borderRadius: radius.pill,
              border: active
                ? "1px solid rgba(255,42,42,0.42)"
                : "1px solid rgba(255,255,255,0.08)",
              background: active ? "rgba(255,42,42,0.12)" : "rgba(255,255,255,0.02)",
              color: active ? "#fff" : "#b7b7b7",
              fontWeight: active ? 700 : 500,
              fontSize: "0.92rem",
              boxShadow: "none",
            }}
          >
            {filter}
          </button>
        );
      })}
    </div>
  );
}

function CategoryBadge({ category, featured }) {
  return (
    <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
      <span
        style={{
          display: "inline-flex",
          alignItems: "center",
          padding: "8px 12px",
          borderRadius: radius.pill,
          background: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(255,255,255,0.08)",
          color: "#dedede",
          fontSize: "0.8rem",
          fontWeight: 700,
        }}
      >
        {category}
      </span>

      {featured && (
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            padding: "8px 12px",
            borderRadius: radius.pill,
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.08)",
            color: "#bdbdbd",
            fontSize: "0.8rem",
            fontWeight: 600,
          }}
        >
          Proof Linked
        </span>
      )}
    </div>
  );
}

function TechPill({ tech }) {
  return (
    <span
      style={{
        padding: "7px 10px",
        borderRadius: radius.pill,
        border: "1px solid rgba(255,255,255,0.08)",
        background: "rgba(255,255,255,0.03)",
        color: "#d7d7d7",
        fontSize: "0.82rem",
      }}
    >
      {tech}
    </span>
  );
}

function ActionLink({ href, label, primary = false, locked = false, icon }) {
  if (!href) {
    return (
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
          minHeight: "46px",
          padding: "0.78rem 1.12rem",
          borderRadius: radius.md,
          border: "1px solid rgba(255,255,255,0.08)",
          background: "rgba(255,255,255,0.03)",
          color: "#a2a2a2",
          fontSize: "0.92rem",
          fontWeight: 600,
          lineHeight: 1.2,
        }}
      >
        {locked ? <Lock size={16} /> : <ExternalLink size={16} />}
        {label}
      </div>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      style={{
        ...getButtonStyles(primary ? "primary" : "secondary"),
      }}
    >
      {icon ?? (primary ? <ExternalLink size={16} /> : <Github size={16} />)}
      {label}
    </a>
  );
}

function ProjectCard({ project }) {
  return (
    <Motion.article
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 160, damping: 18 }}
      style={{
        height: "100%",
        display: "grid",
        gridTemplateRows: project.image ? "190px auto" : "auto",
        ...getSurfaceStyles(project.category === "Internship" ? "accent" : "default"),
        overflow: "hidden",
      }}
    >
      {project.image ? (
        <div style={{ position: "relative" }}>
          <img
            src={project.image}
            alt={project.title}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to top, rgba(0,0,0,0.92), rgba(0,0,0,0.28) 45%, rgba(0,0,0,0.12))",
            }}
          />
        </div>
      ) : null}

      <div style={{ padding: "24px", display: "grid", gap: "16px" }}>
        <CategoryBadge category={project.category} featured={project.featured} />

        <div>
          <h3
            style={{
              margin: 0,
              color: "#fff",
              fontSize: "1.26rem",
              lineHeight: 1.22,
            }}
          >
            {project.title}
          </h3>
          <p
            style={{
              margin: "12px 0 0",
              color: colors.textMuted,
              fontSize: "0.95rem",
              lineHeight: 1.7,
            }}
          >
            {project.description}
          </p>
        </div>

        <div
          style={{
            padding: "14px 15px",
            borderRadius: radius.md,
            border: "1px solid rgba(255,255,255,0.06)",
            background: "rgba(255,255,255,0.025)",
          }}
        >
          <div
            style={{
              color: colors.primary,
              fontWeight: 700,
              fontSize: "0.74rem",
              textTransform: "uppercase",
              letterSpacing: "0.06em",
            }}
          >
            Highlight
          </div>
          <div
            style={{
              marginTop: "8px",
              color: "#e1e1e1",
              fontSize: "0.9rem",
              lineHeight: 1.62,
            }}
          >
            {project.highlight}
          </div>
        </div>

        <div>
          <div
            style={{
              color: colors.primary,
              fontWeight: 700,
              fontSize: "0.74rem",
              textTransform: "uppercase",
              letterSpacing: "0.06em",
              marginBottom: "10px",
            }}
          >
            Tech Stack
          </div>
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
            {project.stack.map((tech) => (
              <TechPill key={`${project.title}-${tech}`} tech={tech} />
            ))}
          </div>
        </div>

        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          <ActionLink
            href={project.github}
            label="GitHub"
          />
          {project.live ? (
            <ActionLink
              href={project.live}
              label="Live Demo"
              primary
            />
          ) : null}
        </div>
      </div>
    </Motion.article>
  );
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return projects;
    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  return (
    <Section
      id="projects"
      style={{
        position: "relative",
        paddingBlock: "clamp(5rem, 9vw, 6.75rem)",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at 18% 0%, rgba(255,42,42,0.065), transparent 24%), linear-gradient(to bottom, #020202, #070707)",
        }}
      />

      <div style={{ position: "relative", zIndex: 1, maxWidth: layout.contentWidth, margin: "0 auto" }}>
        <Reveal>
          <div style={{ ...sectionHeaderStyles.wrap, marginBottom: "2rem" }}>
            <p
              style={{
                ...sectionHeaderStyles.eyebrow,
              }}
            >
              Selected Work
            </p>
            <h2
              style={{
                ...sectionHeaderStyles.title,
                marginTop: "0.9rem",
                fontSize: "clamp(2.1rem, 5vw, 3.2rem)",
                lineHeight: 1.08,
              }}
            >
              Projects with public proof and clear implementation scope
            </h2>
            <p
              style={{
                ...sectionHeaderStyles.body,
                maxWidth: "720px",
              }}
            >
              These are the main projects I have built so far, with links to the code.
              Internship work is listed separately in the experience section.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <div style={{ marginBottom: "2rem" }}>
            <FilterTabs activeFilter={activeFilter} onChange={setActiveFilter} />
          </div>
        </Reveal>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "24px",
          }}
        >
          {filteredProjects.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.05}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
