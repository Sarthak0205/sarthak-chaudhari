import React from "react";
import { motion as Motion } from "framer-motion";
import Reveal from "../ui/Reveal";
import {
  colors,
  getSurfaceStyles, 
  layout,
  radius,
  sectionHeaderStyles,
  spacing,
} from "../ui/theme";

import { FaReact, FaGitAlt } from "react-icons/fa";
import { SiDjango, SiPostgresql, SiJavascript } from "react-icons/si";
import { GiBrain } from "react-icons/gi";

/* 🔥 PREMIUM SKILL CARD */
const SkillCard = ({ skill }) => {
  return (
    <Motion.div
      initial="rest"
      whileHover="hover"
      animate="rest"
      variants={{
        rest: { y: 0, scale: 1 },
        hover: { y: -6, scale: 1.02 },
      }}
      transition={{ type: "spring", stiffness: 120 }}
      style={{
        position: "relative",
        ...getSurfaceStyles("accent"),
        padding: "24px",
        backdropFilter: "blur(10px)",
        overflow: "hidden",
      }}
    >
      {/* 🔥 Glow Layer */}
      <Motion.div
        variants={{
          rest: { opacity: 0 },
          hover: { opacity: 1 },
        }}
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: radius.lg,
          background:
            "radial-gradient(circle at 20% 20%, rgba(255,42,42,0.12), transparent 70%)",
        }}
      />

      {/* CONTENT */}
      <div style={{ position: "relative", zIndex: 2 }}>
        {/* ICON */}
        <Motion.div
          variants={{
            rest: { scale: 1 },
            hover: { scale: 1.12 },
          }}
          style={{
            fontSize: "1.9rem",
            color: colors.primary,
          }}
        >
          {skill.icon}
        </Motion.div>

        {/* TITLE */}
        <h3
          style={{
            margin: "12px 0 0",
            fontSize: "1.1rem",
            fontWeight: 600,
            lineHeight: 1.3,
          }}
        >
          {skill.title}
        </h3>

        {/* 🔥 NEW: FOCUS */}
        <p
          style={{
            margin: "8px 0 0",
            fontSize: "0.88rem",
            color: colors.textMuted,
            lineHeight: 1.6,
          }}
        >
          {skill.focus}
        </p>

        {/* 🔥 NEW: USED IN */}
        <p
          style={{
            margin: "8px 0 0",
            fontSize: "0.78rem",
            color: colors.textSoft,
            lineHeight: 1.5,
          }}
        >
          Used in: {skill.usedIn}
        </p>

        {/* HOVER PROGRESS */}
        <Motion.div
          variants={{
            rest: { opacity: 0, y: 10 },
            hover: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.3 }}
        >
          <div
            style={{
              marginTop: "14px",
              height: "6px",
              borderRadius: radius.pill,
              background: "rgba(255,255,255,0.06)",
              overflow: "hidden",
            }}
          >
            <Motion.div
              variants={{
                rest: { width: 0 },
                hover: { width: `${skill.level}%` },
              }}
              transition={{ duration: 0.8, delay: 0.1 }}
              style={{
                height: "100%",
                borderRadius: radius.pill,
                background:
                  "linear-gradient(90deg, #ff2a2a, #ff6a6a)",
                boxShadow: "0 0 8px rgba(255,42,42,0.38)",
              }}
            />
          </div>

          {/* 🔥 REFINED LABEL */}
          <span
            style={{
              marginTop: "6px",
              display: "block",
              fontSize: "0.78rem",
              color: colors.textSoft,
            }}
          >
            {skill.level}% • Applied in projects
          </span>
        </Motion.div>
      </div>
    </Motion.div>
  );
};

export default function Skills() {
  const skills = [
    {
      title: "Backend & APIs",
      icon: <SiDjango />,
      level: 85,
      focus: "Building APIs, request handling, and backend logic for product features",
      usedIn: "CineSense, Study Planner",
    },
    {
      title: "Databases",
      icon: <SiPostgresql />,
      level: 80,
      focus: "Modeling application data, writing queries, and persisting user plans",
      usedIn: "Study Planner",
    },
    {
      title: "AI Systems",
      icon: <GiBrain />,
      level: 70,
      focus: "Recommendation pipelines using embeddings, clustering, and filtering",
      usedIn: "CineSense",
    },
    {
      title: "Frontend",
      icon: <FaReact />,
      level: 75,
      focus: "Responsive interfaces, API integration, and component-driven screens",
      usedIn: "Study Planner, Navanta Exim",
    },
    {
      title: "Programming",
      icon: <SiJavascript />,
      level: 85,
      focus: "Implementing product features and translating requirements into code",
      usedIn: "All projects",
    },
    {
      title: "Tools",
      icon: <FaGitAlt />,
      level: 80,
      focus: "Version control, code iteration, and day-to-day development workflow",
      usedIn: "All projects",
    },
  ];

  return (
    <section
      id="skills"
      style={{
        padding: `${spacing.sectionTight} ${spacing.shell} ${spacing.section}`,
        position: "relative",
        zIndex: 2,
        background:
          "linear-gradient(to bottom, transparent, #050505 40%)",
      }}
    >
      {/* HEADING */}
      <Reveal>
        <div style={{ ...sectionHeaderStyles.wrap, marginBottom: "2.1rem" }}>
          <p style={sectionHeaderStyles.eyebrow}>Skills</p>
          <h2 style={sectionHeaderStyles.title}>Skills & Focus Areas</h2>
          <p style={{ ...sectionHeaderStyles.body, maxWidth: "680px" }}>
            A quick view of the tools I use most and the kind of work I do with them.
          </p>
        </div>
      </Reveal>

      {/* GRID */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "24px",
          maxWidth: layout.narrowWidth,
          margin: "0 auto",
        }}
      >
        {skills.map((skill, index) => (
          <Reveal key={index} delay={index * 0.08}>
            <SkillCard skill={skill} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
