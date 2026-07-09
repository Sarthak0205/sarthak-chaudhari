import React, { useMemo, useState } from "react";
import { motion as Motion } from "framer-motion";
import { projects } from "../data/projects";

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

function CategoryBadge({ category, live }) {
  return (
    <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", alignItems: "center" }}>
      <span
        style={{
          display: "inline-flex",
          alignItems: "center",
          padding: "4px 8px",
          borderRadius: radius.pill,
          background: "rgba(255,255,255,0.03)",
          border: "1px solid rgba(255,255,255,0.06)",
          color: "#dedede",
          fontSize: "0.74rem",
          fontWeight: 700,
        }}
      >
        {category}
      </span>

      {live && (
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "5px",
            padding: "4px 8px",
            borderRadius: radius.pill,
            background: "rgba(16, 185, 129, 0.1)",
            border: "1px solid rgba(16, 185, 129, 0.2)",
            color: "#34d399",
            fontSize: "0.74rem",
            fontWeight: 700,
          }}
        >
          <Motion.span
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            style={{
              display: "inline-block",
              width: "5px",
              height: "5px",
              borderRadius: "50%",
              background: "#10b981",
              boxShadow: "0 0 6px #10b981",
            }}
          />
          Live
        </span>
      )}
    </div>
  );
}

function TechPill({ tech }) {
  return (
    <span
      style={{
        padding: "3px 8px",
        borderRadius: radius.pill,
        border: "1px solid rgba(255, 255, 255, 0.05)",
        background: "rgba(255, 255, 255, 0.02)",
        color: "#d4d4d4",
        fontSize: "0.74rem",
        fontWeight: 500,
        letterSpacing: "0.01em",
      }}
    >
      {tech}
    </span>
  );
}

function ActionLink({ href, label, primary = false, icon }) {
  const baseStyle = {
    ...getButtonStyles(primary ? "primary" : "secondary"),
    minHeight: "40px",
    padding: "0.55rem 1rem",
    fontSize: "0.86rem",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "6px",
    flex: 1, // Ensures identical width and alignment
  };

  if (!href) {
    return (
      <button
        disabled
        aria-label={`${label} (coming soon)`}
        style={{
          ...baseStyle,
          background: "rgba(255,255,255,0.015)",
          border: "1px solid rgba(255,255,255,0.04)",
          color: "rgba(255,255,255,0.25)",
          cursor: "not-allowed",
          whiteSpace: "nowrap",
          boxShadow: "none",
        }}
      >
        {icon}
        {label}
      </button>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={`${label} (opens in a new tab)`}
      style={baseStyle}
    >
      {icon}
      {label}
    </a>
  );
}

function ProjectCard({ project }) {
  return (
    <Motion.article
      whileHover={{
        y: -6,
        borderColor: project.featured ? "rgba(255, 42, 42, 0.3)" : "rgba(255, 255, 255, 0.12)",
        boxShadow: project.featured
          ? "0 24px 48px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 42, 42, 0.15)"
          : "0 24px 48px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.08)",
      }}
      transition={{ type: "spring", stiffness: 180, damping: 20 }}
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        ...getSurfaceStyles(project.featured ? "accent" : "default"),
        overflow: "hidden",
        position: "relative",
        transition: "border-color 0.3s ease, box-shadow 0.3s ease",
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: project.featured ? "rgba(255, 42, 42, 0.12)" : "rgba(255, 255, 255, 0.05)",
        boxShadow: project.featured
          ? "0 20px 40px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 42, 42, 0.08)"
          : "0 20px 40px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.04)"
      }}
    >
      {/* Floating Screenshot Container */}
      <div style={{
        padding: "24px 24px 0 24px",
        position: "relative",
        width: "100%",
        boxSizing: "border-box",
      }}>
        <div style={{
          position: "relative",
          width: "100%",
          aspectRatio: "16 / 10",
          overflow: "hidden",
          borderRadius: "8px",
          border: "1px solid rgba(255, 255, 255, 0.06)",
          background: "#080808",
          boxShadow: "0 6px 20px rgba(0,0,0,0.4)",
        }}>
          {/* Subtle Window Top Bar */}
          <div style={{
            height: "16px",
            background: "rgba(255, 255, 255, 0.02)",
            borderBottom: "1px solid rgba(255, 255, 255, 0.04)",
            display: "flex",
            alignItems: "center",
            paddingLeft: "8px",
            position: "relative",
            zIndex: 5,
          }}>
            <div style={{ display: "flex", gap: "4px" }}>
              <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: "rgba(255,255,255,0.15)" }} />
              <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: "rgba(255,255,255,0.15)" }} />
              <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: "rgba(255,255,255,0.15)" }} />
            </div>
          </div>

          {/* Screenshot Image with Hover Zoom */}
          <div style={{
            width: "100%",
            height: "calc(100% - 16px)",
            overflow: "hidden",
            position: "relative",
          }}>
            {project.image ? (
              <Motion.img
                src={project.image}
                alt={`${project.title} Application Preview`}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: project.imagePosition || "top",
                  display: "block",
                }}
              />
            ) : (
              <div style={{
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative"
              }}>
                <div style={{
                  position: "absolute",
                  inset: 0,
                  opacity: 0.04,
                  backgroundImage: "radial-gradient(rgba(255,255,255,0.15) 1px, transparent 1px)",
                  backgroundSize: "16px 16px"
                }} />
                <span style={{
                  fontSize: "1.4rem",
                  fontWeight: 850,
                  letterSpacing: "0.08em",
                  background: "linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.01) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  textTransform: "uppercase"
                }}>
                  {project.title.split(" ").map(w => w[0]).join("")}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Featured Badge */}
        {project.featured && (
          <div
            style={{
              position: "absolute",
              top: "34px",
              right: "34px",
              zIndex: 10,
              display: "inline-flex",
              alignItems: "center",
              gap: "5px",
              padding: "4px 8px",
              borderRadius: radius.pill,
              background: "rgba(5, 5, 5, 0.75)",
              border: "1px solid rgba(255, 42, 42, 0.3)",
              color: "#ff9999",
              fontSize: "0.65rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.06em",
              boxShadow: "0 2px 8px rgba(0,0,0,0.5)",
              backdropFilter: "blur(4px)",
            }}
          >
            <Motion.span
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              style={{
                display: "inline-block",
                width: "4px",
                height: "4px",
                borderRadius: "50%",
                background: "#ff2a2a",
                boxShadow: "0 0 6px #ff2a2a",
              }}
            />
            Featured
          </div>
        )}
      </div>

      {/* Card Content */}
      <div style={{ padding: "24px", display: "flex", flexDirection: "column", gap: "20px", flex: 1 }}>
        <CategoryBadge category={project.category} live={!!project.live} />

        <div style={{ display: "grid", gap: "6px" }}>
          <h3
            style={{
              margin: 0,
              color: "#fff",
              fontSize: "1.4rem",
              lineHeight: 1.15,
              fontWeight: 800,
              letterSpacing: "-0.01em"
            }}
          >
            {project.title}
          </h3>
          {project.tagline && (
            <p
              style={{
                margin: 0,
                color: colors.textSoft,
                fontSize: "0.92rem",
                fontWeight: 500,
                lineHeight: 1.3
              }}
            >
              {project.tagline}
            </p>
          )}
          <p
            style={{
              margin: "6px 0 0",
              color: colors.textMuted,
              fontSize: "0.92rem",
              lineHeight: 1.65,
            }}
          >
            {project.description}
          </p>
        </div>

        {/* Feature Tags */}
        {project.featureTags && project.featureTags.length > 0 && (
          <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", marginBlock: "2px" }}>
            {project.featureTags.map((tag) => (
              <span
                key={tag}
                style={{
                  fontSize: "0.7rem",
                  fontWeight: 600,
                  color: "rgba(255, 255, 255, 0.4)",
                  background: "rgba(255, 255, 255, 0.025)",
                  padding: "3px 6px",
                  borderRadius: "4px",
                  border: "1px solid rgba(255, 255, 255, 0.04)",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Checklist Highlights */}
        {project.highlights && project.highlights.length > 0 && (
          <div
            style={{
              padding: "14px 15px",
              borderRadius: radius.md,
              border: "1px solid rgba(255,255,255,0.04)",
              background: "rgba(255,255,255,0.01)",
              marginTop: "auto"
            }}
          >
            <div
              style={{
                color: colors.primary,
                fontWeight: 700,
                fontSize: "0.74rem",
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                marginBottom: "8px"
              }}
            >
              Key Deliverables
            </div>
            <ul
              style={{
                margin: 0,
                padding: 0,
                display: "grid",
                gap: "6px",
              }}
            >
              {project.highlights.map((pt, i) => (
                <li
                  key={i}
                  style={{
                    listStyleType: "none",
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "8px",
                    color: "#d1d1d1",
                    fontSize: "0.86rem",
                    lineHeight: 1.4,
                  }}
                >
                  <span style={{ color: colors.primary, fontWeight: 700, lineHeight: 1.1 }}>✓</span>
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Tech Stack */}
        <div>
          <div
            style={{
              color: colors.primary,
              fontWeight: 700,
              fontSize: "0.74rem",
              textTransform: "uppercase",
              letterSpacing: "0.06em",
              marginBottom: "8px",
            }}
          >
            Tech Stack
          </div>
          <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
            {project.techStack.map((tech) => (
              <TechPill key={`${project.title}-${tech}`} tech={tech} />
            ))}
          </div>
        </div>

        {/* Actions */}
        <div style={{ display: "flex", gap: "12px", width: "100%", marginTop: "4px" }}>
          <ActionLink
            href={project.live}
            label="Live Demo"
            primary
            icon={<span style={{ fontSize: "1rem", lineHeight: 1 }}>🚀</span>}
          />
          <ActionLink
            href={project.github}
            label="GitHub"
            icon={<span style={{ fontSize: "1rem", lineHeight: 1 }}>💻</span>}
          />
        </div>
      </div>
    </Motion.article>
  );
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return projects;
    return projects.filter((project) => {
      const cat = project.category.toLowerCase();
      if (activeFilter === "Full Stack") {
        return cat.includes("full stack");
      }
      if (activeFilter === "AI / ML") {
        return cat.includes("ai") || cat.includes("ml") || cat.includes("machine learning");
      }
      return cat.includes(activeFilter.toLowerCase());
    });
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
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
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
