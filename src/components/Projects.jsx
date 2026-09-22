import React, { useMemo, useState } from "react";
import { motion as Motion } from "framer-motion";
import { ExternalLink, Github, ArrowRight, BarChart2 } from "lucide-react";
import { projects } from "../data/projects";
import ProjectDetailModal from "./ProjectDetailModal";

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

const filters = ["All", "AI", "ML", "Full Stack", "Systems"];

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
              padding: "0.55rem 1.05rem",
              borderRadius: radius.pill,
              border: active
                ? "1px solid rgba(255,42,42,0.5)"
                : "1px solid rgba(255,255,255,0.08)",
              background: active ? "rgba(255,42,42,0.14)" : "rgba(255,255,255,0.02)",
              color: active ? "#ffffff" : "#b0b0b0",
              fontWeight: active ? 700 : 500,
              fontSize: "0.9rem",
              boxShadow: active ? "0 0 16px rgba(255,42,42,0.15)" : "none",
              cursor: "pointer",
              transition: "all 0.2s ease",
            }}
          >
            {filter}
          </button>
        );
      })}
    </div>
  );
}

function StatusBadge({ status, live }) {
  if (status === "Live" && live) {
    return (
      <span
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "5px",
          padding: "3px 8px",
          borderRadius: radius.pill,
          background: "rgba(16, 185, 129, 0.1)",
          border: "1px solid rgba(16, 185, 129, 0.25)",
          color: "#34d399",
          fontSize: "0.72rem",
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
    );
  }

  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        padding: "3px 8px",
        borderRadius: radius.pill,
        background: "rgba(255, 255, 255, 0.03)",
        border: "1px solid rgba(255, 255, 255, 0.08)",
        color: "#9e9e9e",
        fontSize: "0.72rem",
        fontWeight: 600,
      }}
    >
      {status || "GitHub"}
    </span>
  );
}

function ProjectCard({ project, onOpenModal, isProminent = false }) {
  return (
    <Motion.article
      whileHover={{
        y: -5,
        borderColor: project.featured
          ? "rgba(255, 42, 42, 0.35)"
          : "rgba(255, 255, 255, 0.15)",
        boxShadow: project.featured
          ? "0 24px 50px rgba(0, 0, 0, 0.65), 0 0 0 1px rgba(255, 42, 42, 0.18)"
          : "0 24px 50px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(255, 255, 255, 0.08)",
      }}
      transition={{ type: "spring", stiffness: 200, damping: 22 }}
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        ...getSurfaceStyles(project.featured ? "accent" : "default"),
        overflow: "hidden",
        position: "relative",
        transition: "border-color 0.25s ease, box-shadow 0.25s ease",
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: project.featured
          ? "rgba(255, 42, 42, 0.18)"
          : "rgba(255, 255, 255, 0.06)",
        borderRadius: radius.lg,
      }}
    >
      {/* Window Chrome & Screenshot Container */}
      <div
        style={{
          padding: "20px 20px 0 20px",
          position: "relative",
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            position: "relative",
            width: "100%",
            aspectRatio: isProminent ? "16 / 9.6" : "16 / 9.2",
            overflow: "hidden",
            borderRadius: "10px",
            border: "1px solid rgba(255, 255, 255, 0.08)",
            background: "#070709",
            boxShadow: "0 6px 20px rgba(0, 0, 0, 0.45)",
          }}
        >
          {/* Window Chrome Bar */}
          <div
            style={{
              height: "20px",
              background: "rgba(255, 255, 255, 0.025)",
              borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              paddingInline: "10px",
              position: "relative",
              zIndex: 5,
            }}
          >
            <div style={{ display: "flex", gap: "5px" }}>
              <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "rgba(255,255,255,0.2)" }} />
              <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "rgba(255,255,255,0.2)" }} />
              <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "rgba(255,255,255,0.2)" }} />
            </div>
            <span
              style={{
                color: "rgba(255, 255, 255, 0.3)",
                fontSize: "0.64rem",
                fontFamily: "monospace",
                letterSpacing: "0.04em",
              }}
            >
              {project.id}
            </span>
          </div>

          {/* Screenshot with subtle hover zoom */}
          <div
            style={{
              width: "100%",
              height: "calc(100% - 20px)",
              overflow: "hidden",
              position: "relative",
              background: "#040406",
            }}
          >
            <Motion.img
              src={project.image}
              alt={`${project.title} Preview`}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: project.imagePosition || "center",
                display: "block",
              }}
            />
          </div>
        </div>

        {/* Featured Badge */}
        {project.featured && (
          <div
            style={{
              position: "absolute",
              top: "30px",
              right: "30px",
              zIndex: 10,
              display: "inline-flex",
              alignItems: "center",
              gap: "5px",
              padding: "4px 8px",
              borderRadius: radius.pill,
              background: "rgba(5, 5, 7, 0.82)",
              border: "1px solid rgba(255, 42, 42, 0.35)",
              color: "#ff9999",
              fontSize: "0.68rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.06em",
              boxShadow: "0 2px 10px rgba(0,0,0,0.6)",
              backdropFilter: "blur(6px)",
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

      {/* Card Body */}
      <div
        style={{
          padding: "20px 22px 22px 22px",
          display: "flex",
          flexDirection: "column",
          gap: "14px",
          flex: 1,
        }}
      >
        {/* Meta Bar */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "8px" }}>
          <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                padding: "3px 8px",
                borderRadius: radius.pill,
                background: "rgba(255, 255, 255, 0.03)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                color: "#e2e2e2",
                fontSize: "0.72rem",
                fontWeight: 700,
              }}
            >
              {project.category}
            </span>
            <span
              style={{
                color: colors.textSoft,
                fontSize: "0.74rem",
                fontWeight: 500,
              }}
            >
              • {project.type}
            </span>
          </div>

          <StatusBadge status={project.status} live={!!project.live} />
        </div>

        {/* Title & Tagline */}
        <div style={{ display: "grid", gap: "4px" }}>
          <h3
            style={{
              margin: 0,
              color: "#ffffff",
              fontSize: isProminent ? "1.35rem" : "1.25rem",
              lineHeight: 1.2,
              fontWeight: 800,
              letterSpacing: "-0.01em",
            }}
          >
            {project.title}
          </h3>
          <p
            style={{
              margin: 0,
              color: "#ff9999",
              fontSize: "0.85rem",
              fontWeight: 500,
              lineHeight: 1.35,
            }}
          >
            {project.tagline}
          </p>
        </div>

        {/* Concise Description (WHAT & HOW) */}
        <p
          style={{
            margin: 0,
            color: colors.textMuted,
            fontSize: "0.88rem",
            lineHeight: 1.6,
          }}
        >
          {project.shortDescription}
        </p>

        {/* Strong Quantitative Proof Point (RESULT) */}
        {project.primaryMetric && (
          <div
            style={{
              padding: "10px 12px",
              borderRadius: "8px",
              background: "rgba(255, 42, 42, 0.05)",
              border: "1px solid rgba(255, 42, 42, 0.16)",
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginTop: "auto",
            }}
          >
            <BarChart2 size={16} style={{ color: colors.primary, flexShrink: 0 }} />
            <div>
              <div
                style={{
                  color: "#ffffff",
                  fontSize: "0.88rem",
                  fontWeight: 800,
                  letterSpacing: "-0.01em",
                  lineHeight: 1.2,
                }}
              >
                {project.primaryMetric.value}
              </div>
              <div
                style={{
                  color: colors.textSoft,
                  fontSize: "0.74rem",
                  fontWeight: 500,
                  lineHeight: 1.25,
                }}
              >
                {project.primaryMetric.label}
              </div>
            </div>
          </div>
        )}

        {/* Tech Pills (2-4 items) */}
        <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", marginTop: "2px" }}>
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={`${project.id}-${tech}`}
              style={{
                padding: "3px 8px",
                borderRadius: radius.pill,
                border: "1px solid rgba(255, 255, 255, 0.06)",
                background: "rgba(255, 255, 255, 0.02)",
                color: "#c8c8c8",
                fontSize: "0.72rem",
                fontWeight: 500,
              }}
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span
              style={{
                padding: "3px 6px",
                borderRadius: radius.pill,
                color: "rgba(255, 255, 255, 0.35)",
                fontSize: "0.7rem",
                fontWeight: 500,
              }}
            >
              +{project.technologies.length - 4} more
            </span>
          )}
        </div>

        {/* Card Actions */}
        <div
          style={{
            display: "flex",
            gap: "8px",
            width: "100%",
            marginTop: "6px",
            alignItems: "center",
          }}
        >
          {/* View Case Study Modal Button */}
          <button
            type="button"
            onClick={() => onOpenModal(project)}
            style={{
              ...getButtonStyles("primary"),
              minHeight: "38px",
              padding: "0.5rem 0.95rem",
              fontSize: "0.84rem",
              flex: 1,
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "6px",
              cursor: "pointer",
            }}
          >
            View Case Study
            <ArrowRight size={14} />
          </button>

          {/* GitHub Action */}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              aria-label={`${project.title} GitHub repository`}
              style={{
                ...getButtonStyles("secondary"),
                minHeight: "38px",
                padding: "0.5rem 0.8rem",
                fontSize: "0.82rem",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "5px",
              }}
            >
              <Github size={15} />
              Code
            </a>
          )}

          {/* Live Demo Action if verified */}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              aria-label={`${project.title} live demo`}
              style={{
                ...getButtonStyles("secondary"),
                minHeight: "38px",
                padding: "0.5rem 0.8rem",
                fontSize: "0.82rem",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "5px",
                borderColor: "rgba(16, 185, 129, 0.3)",
                color: "#34d399",
              }}
            >
              <ExternalLink size={14} />
              Live
            </a>
          )}
        </div>
      </div>
    </Motion.article>
  );
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return projects;
    return projects.filter((project) => {
      if (project.filterCategories && project.filterCategories.includes(activeFilter)) {
        return true;
      }
      return false;
    });
  }, [activeFilter]);

  // Featured vs Standard separation for clean visual hierarchy
  const featuredProjects = useMemo(
    () => filteredProjects.filter((p) => p.featured),
    [filteredProjects]
  );
  const standardProjects = useMemo(
    () => filteredProjects.filter((p) => !p.featured),
    [filteredProjects]
  );

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
        {/* Section Header */}
        <Reveal>
          <div style={{ ...sectionHeaderStyles.wrap, marginBottom: "2rem" }}>
            <p style={{ ...sectionHeaderStyles.eyebrow }}>
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
              Engineering Systems & Machine Learning Showcases
            </h2>
            <p
              style={{
                ...sectionHeaderStyles.body,
                maxWidth: "740px",
              }}
            >
              Production-engineered platforms spanning fintech decision engines, graph recommenders,
              fitness intelligence, and deterministic schedulers. All projects backed by public code and verified benchmarks.
            </p>
          </div>
        </Reveal>

        {/* Filters */}
        <Reveal delay={0.05}>
          <div style={{ marginBottom: "2.5rem" }}>
            <FilterTabs activeFilter={activeFilter} onChange={setActiveFilter} />
          </div>
        </Reveal>

        {/* Featured Projects Showcase */}
        {featuredProjects.length > 0 && (
          <div style={{ marginBottom: standardProjects.length > 0 ? "3.5rem" : "0" }}>
            {standardProjects.length > 0 && (
              <Reveal delay={0.08}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    marginBottom: "1.25rem",
                  }}
                >
                  <span
                    style={{
                      color: colors.primary,
                      fontSize: "0.78rem",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                    }}
                  >
                    Featured Implementations
                  </span>
                  <div style={{ height: "1px", flex: 1, background: "rgba(255, 42, 42, 0.15)" }} />
                </div>
              </Reveal>
            )}

            {/* Prominent Featured Grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                gap: "24px",
              }}
            >
              {featuredProjects.map((project, index) => (
                <Reveal key={project.id} delay={index * 0.06}>
                  <ProjectCard
                    project={project}
                    onOpenModal={setSelectedProject}
                    isProminent
                  />
                </Reveal>
              ))}
            </div>
          </div>
        )}

        {/* Standard Projects Showcase */}
        {standardProjects.length > 0 && (
          <div>
            {featuredProjects.length > 0 && (
              <Reveal delay={0.1}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    marginBottom: "1.25rem",
                  }}
                >
                  <span
                    style={{
                      color: "#a0a0a0",
                      fontSize: "0.78rem",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                    }}
                  >
                    Engineering & Systems Projects
                  </span>
                  <div style={{ height: "1px", flex: 1, background: "rgba(255, 255, 255, 0.08)" }} />
                </div>
              </Reveal>
            )}

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "24px",
              }}
            >
              {standardProjects.map((project, index) => (
                <Reveal key={project.id} delay={index * 0.06}>
                  <ProjectCard
                    project={project}
                    onOpenModal={setSelectedProject}
                    isProminent={false}
                  />
                </Reveal>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Case Study Detail Modal */}
      {selectedProject && (
        <ProjectDetailModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </Section>
  );
}
