import React, { useEffect, useState } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";
import {
  X,
  ExternalLink,
  Github,
  CheckCircle2,
  Cpu,
  Layers,
  BarChart3,
  ShieldAlert,
  ArrowRight,
  BookOpen,
} from "lucide-react";
import { colors, radius, getButtonStyles } from "../ui/theme";

export default function ProjectDetailModal({ project, onClose }) {
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(0);

  // Body scroll lock and ESC key handling
  useEffect(() => {
    if (!project) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const hasGallery = project.gallery && project.gallery.length > 0;
  const currentImage = hasGallery
    ? project.gallery[activeGalleryIndex].image
    : project.image;
  const currentCaption = hasGallery
    ? project.gallery[activeGalleryIndex].caption
    : null;

  return (
    <AnimatePresence>
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            onClose();
          }
        }}
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 9999,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "clamp(12px, 3vw, 32px)",
          boxSizing: "border-box",
        }}
      >
        {/* Dark Cinematic Backdrop */}
        <Motion.div
          data-testid="modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          onClick={onClose}
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(4, 4, 6, 0.88)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
          }}
        />

        {/* Modal Container */}
        <Motion.div
          initial={{ opacity: 0, scale: 0.96, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 16 }}
          transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
          onClick={(e) => e.stopPropagation()}
          style={{
            position: "relative",
            zIndex: 10,
            width: "100%",
            maxWidth: "960px",
            maxHeight: "90vh",
            background: "#08080a",
            border: "1px solid rgba(255, 42, 42, 0.22)",
            borderRadius: "20px",
            boxShadow:
              "0 32px 80px rgba(0, 0, 0, 0.85), 0 0 40px rgba(255, 42, 42, 0.08)",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
          }}
        >
          {/* Header Bar with Title & Close Button */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "18px 24px",
              background: "rgba(255, 255, 255, 0.02)",
              borderBottom: "1px solid rgba(255, 255, 255, 0.07)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  padding: "4px 10px",
                  borderRadius: radius.pill,
                  background: "rgba(255, 42, 42, 0.12)",
                  border: "1px solid rgba(255, 42, 42, 0.3)",
                  color: "#ff9999",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                }}
              >
                {project.category}
              </span>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  padding: "4px 10px",
                  borderRadius: radius.pill,
                  background: "rgba(255, 255, 255, 0.03)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  color: "#d0d0d0",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                }}
              >
                {project.type}
              </span>
              {project.status === "Live" && (
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    padding: "4px 10px",
                    borderRadius: radius.pill,
                    background: "rgba(16, 185, 129, 0.1)",
                    border: "1px solid rgba(16, 185, 129, 0.25)",
                    color: "#34d399",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                  }}
                >
                  <span
                    style={{
                      width: "6px",
                      height: "6px",
                      borderRadius: "50%",
                      background: "#10b981",
                      boxShadow: "0 0 8px #10b981",
                    }}
                  />
                  Verified Deployment
                </span>
              )}
            </div>

            <button
              type="button"
              onClick={onClose}
              aria-label="Close project modal"
              style={{
                background: "rgba(255, 255, 255, 0.04)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                color: "#e0e0e0",
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: "background 0.2s ease, border-color 0.2s ease, color 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(255, 42, 42, 0.2)";
                e.currentTarget.style.borderColor = "rgba(255, 42, 42, 0.4)";
                e.currentTarget.style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.04)";
                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)";
                e.currentTarget.style.color = "#e0e0e0";
              }}
            >
              <X size={18} />
            </button>
          </div>

          {/* Scrollable Modal Content */}
          <div
            style={{
              padding: "24px",
              overflowY: "auto",
              display: "flex",
              flexDirection: "column",
              gap: "28px",
            }}
          >
            {/* Title & Tagline */}
            <div>
              <h2
                id="project-modal-title"
                style={{
                  margin: "0 0 8px 0",
                  color: "#ffffff",
                  fontSize: "clamp(1.6rem, 3.5vw, 2.2rem)",
                  fontWeight: 800,
                  lineHeight: 1.15,
                  letterSpacing: "-0.02em",
                }}
              >
                {project.title}
              </h2>
              <p
                style={{
                  margin: 0,
                  color: "#ff9999",
                  fontSize: "1.02rem",
                  fontWeight: 500,
                  lineHeight: 1.45,
                }}
              >
                {project.tagline}
              </p>
            </div>

            {/* Visual Header / Gallery */}
            <div
              style={{
                borderRadius: "14px",
                overflow: "hidden",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                background: "#020203",
                boxShadow: "0 12px 30px rgba(0, 0, 0, 0.6)",
              }}
            >
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  maxHeight: "440px",
                  overflow: "hidden",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "#050507",
                }}
              >
                <img
                  src={currentImage}
                  alt={`${project.title} detailed visual`}
                  style={{
                    width: "100%",
                    height: "auto",
                    maxHeight: "440px",
                    objectFit: "contain",
                    display: "block",
                  }}
                />
              </div>

              {/* Gallery Switcher if available */}
              {hasGallery && (
                <div
                  style={{
                    padding: "12px 16px",
                    background: "rgba(255, 255, 255, 0.02)",
                    borderTop: "1px solid rgba(255, 255, 255, 0.06)",
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                  }}
                >
                  <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                    {project.gallery.map((item, idx) => {
                      const isActive = idx === activeGalleryIndex;
                      return (
                        <button
                          key={item.title}
                          type="button"
                          onClick={() => setActiveGalleryIndex(idx)}
                          aria-label={`View ${item.title} screenshot`}
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "8px",
                            padding: "4px 10px 4px 6px",
                            borderRadius: radius.pill,
                            border: isActive
                              ? "1px solid rgba(255, 42, 42, 0.6)"
                              : "1px solid rgba(255, 255, 255, 0.08)",
                            background: isActive
                              ? "rgba(255, 42, 42, 0.16)"
                              : "rgba(255, 255, 255, 0.03)",
                            color: isActive ? "#ffffff" : "#b0b0b0",
                            fontSize: "0.8rem",
                            fontWeight: isActive ? 700 : 500,
                            cursor: "pointer",
                            transition: "all 0.2s ease",
                          }}
                        >
                          <img
                            src={item.image}
                            alt=""
                            aria-hidden="true"
                            style={{
                              width: "24px",
                              height: "18px",
                              objectFit: "cover",
                              borderRadius: "4px",
                              border: isActive
                                ? "1px solid rgba(255, 42, 42, 0.5)"
                                : "1px solid rgba(255, 255, 255, 0.1)",
                            }}
                          />
                          {item.title}
                        </button>
                      );
                    })}
                  </div>
                  {currentCaption && (
                    <p
                      style={{
                        margin: 0,
                        color: colors.textSoft,
                        fontSize: "0.82rem",
                        fontStyle: "italic",
                      }}
                    >
                      {currentCaption}
                    </p>
                  )}
                </div>
              )}
            </div>

            {/* Verified Metrics Grid */}
            {project.metrics && project.metrics.length > 0 && (
              <div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    marginBottom: "12px",
                    color: colors.primary,
                    fontWeight: 700,
                    fontSize: "0.78rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                  }}
                >
                  <BarChart3 size={15} />
                  Verified Quantitative Benchmarks
                </div>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
                    gap: "12px",
                  }}
                >
                  {project.metrics.map((metric) => (
                    <div
                      key={metric.label}
                      style={{
                        padding: "14px 16px",
                        borderRadius: radius.md,
                        background: "rgba(255, 255, 255, 0.02)",
                        border: "1px solid rgba(255, 255, 255, 0.07)",
                        textAlign: "center",
                      }}
                    >
                      <div
                        style={{
                          color: "#ffffff",
                          fontSize: "1.3rem",
                          fontWeight: 800,
                          lineHeight: 1.1,
                          letterSpacing: "-0.01em",
                        }}
                      >
                        {metric.value}
                      </div>
                      <div
                        style={{
                          marginTop: "4px",
                          color: colors.textSoft,
                          fontSize: "0.76rem",
                          fontWeight: 600,
                          textTransform: "uppercase",
                          letterSpacing: "0.04em",
                        }}
                      >
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Overview Section */}
            <div
              style={{
                padding: "20px",
                borderRadius: radius.md,
                background: "rgba(255, 255, 255, 0.015)",
                border: "1px solid rgba(255, 255, 255, 0.06)",
              }}
            >
              <h3
                style={{
                  margin: "0 0 8px 0",
                  color: "#ffffff",
                  fontSize: "1.08rem",
                  fontWeight: 700,
                }}
              >
                Problem Space & Solution Overview
              </h3>
              <p
                style={{
                  margin: 0,
                  color: colors.textMuted,
                  fontSize: "0.94rem",
                  lineHeight: 1.7,
                }}
              >
                {project.details?.overview || project.description}
              </p>
            </div>

            {/* Architecture Section */}
            {project.details?.architecture && (
              <div
                style={{
                  padding: "20px",
                  borderRadius: radius.md,
                  background: "rgba(255, 255, 255, 0.015)",
                  border: "1px solid rgba(255, 255, 255, 0.06)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    marginBottom: "8px",
                    color: colors.primary,
                    fontWeight: 700,
                    fontSize: "0.78rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                  }}
                >
                  <Layers size={15} />
                  System Architecture & Request Pipeline
                </div>
                <p
                  style={{
                    margin: 0,
                    color: colors.textMuted,
                    fontSize: "0.94rem",
                    lineHeight: 1.7,
                  }}
                >
                  {project.details.architecture}
                </p>
              </div>
            )}

            {/* Technical Methodology, Decision Logic & Formulas */}
            {project.details && (
              <div
                style={{
                  padding: "20px",
                  borderRadius: radius.md,
                  background: "rgba(255, 255, 255, 0.015)",
                  border: "1px solid rgba(255, 255, 255, 0.06)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    marginBottom: "10px",
                    color: colors.primary,
                    fontWeight: 700,
                    fontSize: "0.78rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                  }}
                >
                  <Cpu size={15} />
                  Technical Methodology & Algorithmic Rules
                </div>

                {project.details.technicalApproach && (
                  <p
                    style={{
                      margin: "0 0 16px 0",
                      color: colors.textMuted,
                      fontSize: "0.94rem",
                      lineHeight: 1.7,
                    }}
                  >
                    {project.details.technicalApproach}
                  </p>
                )}

                {/* Specific Decision Formulas if defined (e.g. Adaptive Payment Recovery) */}
                {project.details.formulas && project.details.formulas.length > 0 && (
                  <div style={{ display: "grid", gap: "10px", marginBottom: "16px" }}>
                    {project.details.formulas.map((f) => (
                      <div
                        key={f.name}
                        style={{
                          padding: "12px 14px",
                          borderRadius: "8px",
                          background: "rgba(255, 42, 42, 0.04)",
                          border: "1px solid rgba(255, 42, 42, 0.18)",
                        }}
                      >
                        <div style={{ color: "#ff9999", fontWeight: 700, fontSize: "0.82rem" }}>
                          {f.name}
                        </div>
                        <div
                          style={{
                            fontFamily: "monospace",
                            color: "#ffffff",
                            fontSize: "0.94rem",
                            margin: "4px 0",
                            fontWeight: 700,
                          }}
                        >
                          {f.formula}
                        </div>
                        <div style={{ color: colors.textSoft, fontSize: "0.82rem", lineHeight: 1.4 }}>
                          {f.description}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Guardrails if defined */}
                {project.details.guardrails && project.details.guardrails.length > 0 && (
                  <div style={{ marginBottom: "16px" }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                        color: "#ff8080",
                        fontSize: "0.8rem",
                        fontWeight: 700,
                        marginBottom: "8px",
                        textTransform: "uppercase",
                      }}
                    >
                      <ShieldAlert size={14} />
                      Deterministic Policy Guardrails
                    </div>
                    <ul style={{ margin: 0, paddingLeft: "18px", display: "grid", gap: "6px" }}>
                      {project.details.guardrails.map((g, idx) => (
                        <li key={idx} style={{ color: "#d0d0d0", fontSize: "0.88rem", lineHeight: 1.5 }}>
                          {g}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Verified Benchmarks list if defined */}
                {project.details.verifiedBenchmarks && (
                  <div>
                    <div
                      style={{
                        color: "#d0d0d0",
                        fontSize: "0.8rem",
                        fontWeight: 700,
                        marginBottom: "8px",
                        textTransform: "uppercase",
                      }}
                    >
                      Empirical Evaluation Findings
                    </div>
                    <ul style={{ margin: 0, paddingLeft: "18px", display: "grid", gap: "6px" }}>
                      {project.details.verifiedBenchmarks.map((b, idx) => (
                        <li key={idx} style={{ color: "#c0c0c0", fontSize: "0.88rem", lineHeight: 1.5 }}>
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Verified Weights list if defined (StudyFlow) */}
                {project.details.verifiedWeights && (
                  <div>
                    <div
                      style={{
                        color: "#d0d0d0",
                        fontSize: "0.8rem",
                        fontWeight: 700,
                        marginBottom: "8px",
                        textTransform: "uppercase",
                      }}
                    >
                      Deterministic Priority Scoring Weights
                    </div>
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                        gap: "8px",
                      }}
                    >
                      {project.details.verifiedWeights.map((w, idx) => (
                        <div
                          key={idx}
                          style={{
                            padding: "8px 12px",
                            borderRadius: "6px",
                            background: "rgba(255, 255, 255, 0.02)",
                            border: "1px solid rgba(255, 255, 255, 0.05)",
                            color: "#dedede",
                            fontSize: "0.84rem",
                          }}
                        >
                          {w}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Key Deliverables & Features */}
            {project.highlights && project.highlights.length > 0 && (
              <div
                style={{
                  padding: "20px",
                  borderRadius: radius.md,
                  background: "rgba(255, 255, 255, 0.015)",
                  border: "1px solid rgba(255, 255, 255, 0.06)",
                }}
              >
                <div
                  style={{
                    color: colors.primary,
                    fontWeight: 700,
                    fontSize: "0.78rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    marginBottom: "12px",
                  }}
                >
                  Key Implementation Deliverables
                </div>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                    gap: "10px",
                  }}
                >
                  {project.highlights.map((item, idx) => (
                    <div
                      key={idx}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "8px",
                        color: "#d8d8d8",
                        fontSize: "0.88rem",
                        lineHeight: 1.45,
                      }}
                    >
                      <CheckCircle2
                        size={16}
                        style={{ color: colors.primary, flexShrink: 0, marginTop: "2px" }}
                      />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tech Stack Pills */}
            <div>
              <div
                style={{
                  color: colors.primary,
                  fontWeight: 700,
                  fontSize: "0.78rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  marginBottom: "10px",
                }}
              >
                Technology Stack & Frameworks
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    style={{
                      padding: "5px 10px",
                      borderRadius: radius.pill,
                      border: "1px solid rgba(255, 255, 255, 0.08)",
                      background: "rgba(255, 255, 255, 0.03)",
                      color: "#e0e0e0",
                      fontSize: "0.8rem",
                      fontWeight: 500,
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Bar */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "12px",
                paddingTop: "16px",
                borderTop: "1px solid rgba(255, 255, 255, 0.08)",
              }}
            >
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    ...getButtonStyles("primary"),
                    minHeight: "44px",
                    padding: "0.65rem 1.25rem",
                    fontSize: "0.9rem",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <ExternalLink size={16} />
                  Live Production Deployment
                </a>
              )}

              {project.api && (
                <a
                  href={project.api}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    ...getButtonStyles("secondary"),
                    minHeight: "44px",
                    padding: "0.65rem 1.1rem",
                    fontSize: "0.88rem",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "7px",
                  }}
                >
                  <ArrowRight size={15} />
                  API Endpoint
                </a>
              )}

              {project.docs && (
                <a
                  href={project.docs}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    ...getButtonStyles("secondary"),
                    minHeight: "44px",
                    padding: "0.65rem 1.1rem",
                    fontSize: "0.88rem",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "7px",
                  }}
                >
                  <BookOpen size={15} />
                  API Documentation
                </a>
              )}

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    ...getButtonStyles("secondary"),
                    minHeight: "44px",
                    padding: "0.65rem 1.25rem",
                    fontSize: "0.88rem",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    marginLeft: "auto",
                  }}
                >
                  <Github size={16} />
                  GitHub Repository
                </a>
              )}
            </div>
          </div>
        </Motion.div>
      </div>
    </AnimatePresence>
  );
}
