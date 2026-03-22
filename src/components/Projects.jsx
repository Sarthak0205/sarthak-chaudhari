import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import Section from "../ui/Section";
import Card from "../ui/Card";
import GlowButton from "../ui/GlowButton";
import { colors, spacing, text, radius } from "../ui/theme";

/* =========================
   PROJECT DATA
========================= */

const projectPartitions = {
  "Machine Learning": {
    description:
      "Systems where data processing and machine learning models drive application behavior.",
    subPartitions: {
      "ML Systems": [
        {
          title: "CineSense",
          role: "Recommendation System",
          year: "2025",
          description:
            "A content-based recommendation system using structured metadata and similarity measures, focusing on data preprocessing and integrating recommendations into a usable application flow.",
          tech: ["Python", "Pandas", "Scikit-learn", "React"],
          image: "/assets/projects/cinesense.webp",
        },
      ],
    },
  },

  "Full Stack": {
    description:
      "End-to-end applications combining backend logic, databases, and frontend interfaces.",
    subPartitions: {
      "Backend-Driven": [
        {
          title: "Smart Study Planning System",
          role: "System Design & Backend",
          year: "2025",
          description:
            "A multi-user study planning system with structured scheduling logic and database-level access control.",
          tech: ["Django", "PostgreSQL", "RBAC", "RLS"],
          image: "/assets/projects/study-planner.webp",
        },
      ],
    },
  },
};

/* =========================
   COMPONENT
========================= */

export default function Projects() {
  const partitions = Object.keys(projectPartitions);
  const [activePartition, setActivePartition] = useState(partitions[0]);

  const subPartitions =
    projectPartitions[activePartition].subPartitions;
  const subKeys = Object.keys(subPartitions);
  const [activeSub, setActiveSub] = useState(subKeys[0]);

  return (
    <Section
      id="projects"
      style={{
        padding: `${spacing.xl} 2rem ${spacing.lg}`,
      }}
    >
      {/* Header */}
      <div
        style={{
          textAlign: "center",
          maxWidth: "720px",
          margin: `0 auto ${spacing.lg}`,
        }}
      >
        <h2 style={{ fontSize: text.xl, fontWeight: 800 }}>
          Projects
        </h2>
        <p
          style={{
            marginTop: spacing.sm,
            color: colors.gray,
            lineHeight: 1.7,
          }}
        >
          Projects grouped by system focus and underlying technology stack.
        </p>
      </div>

      {/* Partition Buttons */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: spacing.sm,
          flexWrap: "wrap",
          marginBottom: spacing.md,
        }}
      >
        {partitions.map((partition) => (
          <GlowButton
            key={partition}
            active={partition === activePartition}
            onClick={() => {
              setActivePartition(partition);
              const firstSub = Object.keys(
                projectPartitions[partition].subPartitions
              )[0];
              setActiveSub(firstSub);
            }}
          >
            {partition}
          </GlowButton>
        ))}
      </div>

      {/* Sub-partition Buttons */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: spacing.xs,
          flexWrap: "wrap",
          marginBottom: spacing.lg,
        }}
      >
        {Object.keys(subPartitions).map((sub) => (
          <GlowButton
            key={sub}
            size="sm"
            active={sub === activeSub}
            onClick={() => setActiveSub(sub)}
          >
            {sub}
          </GlowButton>
        ))}
      </div>

      {/* Project Cards */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`${activePartition}-${activeSub}`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            display: "grid",

            /* 🔑 KEY CHANGE */
            gridTemplateColumns:
              "repeat(auto-fit, minmax(300px, 340px))",

            justifyContent: "center",
            gap: spacing.md,
          }}
        >
          {subPartitions[activeSub].map((project) => (
            <Card key={project.title}>
              {/* Image */}
              {project.image && (
                <div style={{ height: "180px", overflow: "hidden" }}>
                  <img
                    src={project.image}
                    alt={project.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
              )}

              {/* Content */}
              <div style={{ padding: spacing.md }}>
                <h3
                  style={{
                    fontSize: "1.15rem",
                    fontWeight: 700,
                  }}
                >
                  {project.title}
                </h3>

                <p
                  style={{
                    fontSize: "0.8rem",
                    color: colors.gray,
                  }}
                >
                  {project.role} • {project.year}
                </p>

                <p
                  style={{
                    marginTop: spacing.sm,
                    lineHeight: 1.7,
                    fontSize: text.base,
                  }}
                >
                  {project.description}
                </p>

                {/* Tech chips */}
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: spacing.xs,
                    marginTop: spacing.sm,
                  }}
                >
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      style={{
                        fontSize: "0.7rem",
                        padding: "0.25rem 0.55rem",
                        borderRadius: radius.sm,
                        border: `1px solid ${colors.gray}`,
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </motion.div>
      </AnimatePresence>
    </Section>
  );
}
