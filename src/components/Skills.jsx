import React from "react";
import { motion as Motion } from "framer-motion";
import { FaReact, FaGitAlt, FaDatabase } from "react-icons/fa";
import { SiPython, SiDjango, SiPostgresql, SiJavascript } from "react-icons/si";
import { GiBrain } from "react-icons/gi";

export default function Skills() {
  const skills = [
    {
      title: "Backend & System Design",
      description:
        "Designing backend logic, APIs, and workflows with a focus on correctness, scalability, and maintainability.",
      icon: <SiDjango />,
      color: "#22c55e",
    },
    {
      title: "Databases & Access Control",
      description:
        "Working close to the data layer with structured schemas, role-based access, and secure data visibility.",
      icon: <SiPostgresql />,
      color: "#38bdf8",
    },
    {
      title: "Data & ML Foundations",
      description:
        "Applying data analysis and basic machine learning techniques to solve practical, real-world problems.",
      icon: <GiBrain />,
      color: "#facc15",
    },
    {
      title: "Frontend (Supporting)",
      description:
        "Building clean, responsive interfaces that support system behavior rather than hiding it.",
      icon: <FaReact />,
      color: "#61dafb",
    },
    {
      title: "Programming Languages",
      description:
        "Strong foundations in Python and JavaScript for backend logic, data handling, and frontend behavior.",
      icon: <SiPython />,
      color: "#a855f7",
    },
    {
      title: "Tooling & Workflow",
      description:
        "Version control and structured workflows for collaboration and long-term maintainability.",
      icon: <FaGitAlt />,
      color: "#f97316",
    },
  ];

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.06 } },
  };

  const item = {
    hidden: { opacity: 0, y: 14 },
    show: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
    <section id="skills" className="skills-section">
      {/* Heading */}
      <Motion.h2
        className="skills-title"
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Skills & Focus Areas
      </Motion.h2>

      <Motion.p
        className="skills-subtitle"
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.05 }}
      >
        Core areas I work with while designing and building software systems.
      </Motion.p>

      {/* Cards */}
      <Motion.div
        className="skills-grid"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {skills.map((skill, index) => (
          <Motion.div
            key={index}
            variants={item}
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 280, damping: 22 }}
            className="skill-card"
            style={{ "--card-color": skill.color }}
          >
            <div className="skill-icon">{skill.icon}</div>
            <h3 className="skill-title">{skill.title}</h3>
            <p className="skill-description">{skill.description}</p>
          </Motion.div>
        ))}
      </Motion.div>
    </section>
  );
}
