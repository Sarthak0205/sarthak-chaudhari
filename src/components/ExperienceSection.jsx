import { motion as Motion } from "framer-motion";
import { BriefcaseBusiness, CalendarDays, ExternalLink, FileBadge } from "lucide-react";

import Reveal from "../ui/Reveal";
import {
  colors,
  getButtonStyles,
  getSurfaceStyles,
  layout,
  radius,
  sectionHeaderStyles,
  spacing,
} from "../ui/theme";

const experience = {
  company: "Navanta Exim",
  role: "Frontend Developer Intern",
  duration: "Internship · 2025",
  summary:
    "Worked on a Next.js-based company website, updating UI sections and content inside an existing production codebase.",
  contributions: [
    "Updated React components and page sections in the existing Next.js frontend.",
    "Worked with TypeScript and Tailwind CSS while making changes that matched the site's current structure.",
    "Contributed within an established production codebase where updates had to fit existing pages and patterns.",
  ],
  stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  outcome:
    "This gave me experience contributing to a live production website and learning how to make focused frontend updates within an existing team codebase.",
  live: "https://navantaexim.com",
  certificate: "/assets/Navanta.pdf",
};

function StackPill({ tech }) {
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

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      style={{
        position: "relative",
        padding: `${spacing.sectionTight} ${spacing.shell} ${spacing.section}`,
        overflow: "hidden",
        background:
          "radial-gradient(circle at 20% 0%, rgba(255,42,42,0.06), transparent 28%), linear-gradient(to bottom, #040404, #060606)",
      }}
    >
      <div style={{ maxWidth: layout.contentWidth, margin: "0 auto" }}>
        <Reveal>
          <div style={{ ...sectionHeaderStyles.wrap, marginBottom: "2.1rem" }}>
            <p style={sectionHeaderStyles.eyebrow}>Experience</p>
            <h2
              style={{
                ...sectionHeaderStyles.title,
                fontSize: "clamp(2.1rem, 5vw, 3.15rem)",
              }}
            >
              Internship Experience
            </h2>
            <p style={{ ...sectionHeaderStyles.body, maxWidth: "760px" }}>
              Internship work at Navanta Exim. The live website and internship
              certificate are linked below.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.06}>
          <Motion.article
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 160, damping: 18 }}
            style={{
              ...getSurfaceStyles("accent"),
              padding: "30px",
              display: "grid",
              gap: "20px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: "16px",
                flexWrap: "wrap",
                alignItems: "flex-start",
              }}
            >
              <div style={{ display: "grid", gap: "10px" }}>
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "8px 12px",
                    borderRadius: radius.pill,
                    background: "rgba(255,42,42,0.14)",
                    border: "1px solid rgba(255,42,42,0.32)",
                    color: "#fff1f1",
                    width: "fit-content",
                    fontSize: "0.82rem",
                    fontWeight: 700,
                  }}
                >
                  <BriefcaseBusiness size={14} />
                  Experience
                </div>

                <div>
                  <h3
                    style={{
                      margin: 0,
                      fontSize: "1.55rem",
                      lineHeight: 1.2,
                    }}
                  >
                    {experience.role}
                  </h3>
                  <p
                    style={{
                      marginTop: "0.35rem",
                      color: "#f1f1f1",
                      fontSize: "1rem",
                    }}
                  >
                    {experience.company}
                  </p>
                  <p
                    style={{
                      marginTop: "0.45rem",
                      color: colors.textMuted,
                      fontSize: "0.95rem",
                      lineHeight: 1.68,
                      maxWidth: "620px",
                    }}
                  >
                    Worked on a Next.js-based company website by updating React
                    components, UI sections, and content inside the existing
                    production codebase.
                  </p>
                </div>
              </div>

              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  color: colors.textMuted,
                  fontSize: "0.92rem",
                }}
              >
                <CalendarDays size={16} />
                {experience.duration}
              </div>
            </div>

            <p
              style={{
                margin: 0,
                color: colors.textMuted,
                fontSize: "0.98rem",
                lineHeight: 1.7,
                maxWidth: "840px",
              }}
            >
              {experience.summary}
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                gap: "18px",
              }}
            >
              <div
                style={{
                  padding: "18px",
                  borderRadius: radius.lg,
                  border: "1px solid rgba(255,255,255,0.06)",
                  background: "rgba(255,255,255,0.025)",
                }}
              >
                <div
                  style={{
                    color: colors.primary,
                    fontWeight: 700,
                    fontSize: "0.75rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    marginBottom: "12px",
                  }}
                  >
                    Work Done
                  </div>
                <div style={{ display: "grid", gap: "10px" }}>
                  {experience.contributions.map((item) => (
                    <div
                      key={item}
                      style={{
                        color: "#e2e2e2",
                        lineHeight: 1.65,
                        fontSize: "0.93rem",
                      }}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div
                style={{
                  padding: "18px",
                  borderRadius: radius.lg,
                  border: "1px solid rgba(255,255,255,0.06)",
                  background: "rgba(255,255,255,0.025)",
                  display: "grid",
                  gap: "16px",
                }}
              >
                <div>
                  <div
                    style={{
                      color: colors.primary,
                      fontWeight: 700,
                      fontSize: "0.75rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                      marginBottom: "10px",
                    }}
                  >
                    Technologies Used
                  </div>
                  <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                    {experience.stack.map((tech) => (
                      <StackPill key={tech} tech={tech} />
                    ))}
                  </div>
                </div>

                <div>
                  <div
                    style={{
                      color: colors.primary,
                      fontWeight: 700,
                      fontSize: "0.75rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                      marginBottom: "8px",
                    }}
                  >
                    Note
                  </div>
                  <p
                    style={{
                      margin: 0,
                      color: "#e2e2e2",
                      lineHeight: 1.65,
                      fontSize: "0.93rem",
                    }}
                  >
                    {experience.outcome}
                  </p>
                </div>
              </div>
            </div>

            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a
                href={experience.live}
                target="_blank"
                rel="noreferrer"
                style={primaryAction}
              >
                <ExternalLink size={16} />
                View Live Website
              </a>
              <a
                href={experience.certificate}
                target="_blank"
                rel="noreferrer"
                style={secondaryAction}
              >
                <FileBadge size={16} />
                View Certificate
              </a>
            </div>
          </Motion.article>
        </Reveal>
      </div>
    </section>
  );
}

const primaryAction = {
  ...getButtonStyles("primary"),
};

const secondaryAction = {
  ...getButtonStyles("secondary"),
};
