'use client'

import React from "react";
import { motion as Motion } from "framer-motion";
import { ReactTyped } from "react-typed";
import { useNavigate } from "react-router-dom";

import Section from "../ui/Section";
import Button from "../ui/Button";
import Reveal from "../ui/Reveal";
import { colors, layout, radius, sectionHeaderStyles, shadows, spacing } from "../ui/theme";

const typedLines = [
  "Clear logic over clever code",
  "Build simply, then refine carefully",
  "Consistency matters more than complexity"
];

export default function Hero() {
  const navigate = useNavigate();

  return (
    <Section
      id="about"
      style={{
        marginTop: "80px",
        paddingTop: "clamp(1.5rem, 4vw, 2.75rem)",
        paddingBottom: spacing.sectionTight,
      }}
    >
      <div
        style={{
          maxWidth: layout.contentWidth,
          margin: "0 auto",
          padding: "clamp(1.5rem, 3.5vw, 3rem)",
          borderRadius: radius.lg,
          background: "linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.018))",
          border: "1px solid rgba(255,255,255,0.08)",
          boxShadow: shadows.hero,
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "clamp(1.75rem, 4vw, 3rem)",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
            }}
          >
            <div
              style={{
                width: "100%",
                maxWidth: "640px",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <Reveal>
                <p
                  style={{
                    ...sectionHeaderStyles.eyebrow,
                    textAlign: "left",
                  }}
                >
                  Computer Engineering Student
                </p>
              </Reveal>

              <Reveal delay={0.08}>
                <h1
                  style={{
                    margin: "0.95rem 0 0",
                    fontSize: "clamp(1.95rem, 3.2vw + 0.7rem, 3.7rem)",
                    lineHeight: 1.06,
                    maxWidth: "700px",
                    letterSpacing: "-0.03em",
                  }}
                >
                  Hi, I’m Sarthak. I build web apps with React, Node.js and PostgreSQL.
                </h1>
              </Reveal>

              <Reveal delay={0.15}>
                <div
                  style={{
                    marginTop: "1.15rem",
                    maxWidth: "620px",
                  }}
                >
                  <p
                    style={{
                      margin: 0,
                      color: colors.textMuted,
                      fontSize: "clamp(1rem, 0.96rem + 0.2vw, 1.08rem)",
                      lineHeight: 1.72,
                    }}
                  >
                    I like breaking products into small systems that are easy to build, test and improve. I&apos;ve built a study planner and an AI-based recommendation app. During my internship, I shipped updates to a live company website.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.28}>
                <div
                  style={{
                    display: "flex",
                    gap: "0.9rem",
                    flexWrap: "wrap",
                    marginTop: "1.75rem",
                  }}
                >
                  <Button onClick={() => navigate("/projects")}>View Projects</Button>
                  <Button onClick={() => navigate("/resume")} variant="secondary">
                    Resume
                  </Button>
                </div>
              </Reveal>

            </div>
          </div>

          <Reveal delay={0.12}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Motion.div
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 160, damping: 18 }}
                style={{
                  width: "min(100%, 400px)",
                  borderRadius: radius.lg,
                  overflow: "hidden",
                  border: "1px solid rgba(255,255,255,0.08)",
                  background: "#0a0a0a",
                  boxShadow: shadows.card,
                }}
              >
                <img
                  src="/assets/Myself.webp"
                  alt="Sarthak Chaudhari portrait"
                  style={{
                    width: "100%",
                    height: "clamp(360px, 32vw, 500px)",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </Motion.div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.36}>
          <div
            style={{
              marginTop: "2rem",
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: "100%",
                maxWidth: "500px",
                padding: "0.95rem 1rem",
                borderRadius: radius.md,
                background: "rgba(255,42,42,0.045)",
                border: "1px solid rgba(255,42,42,0.1)",
                color: colors.textMuted,
                fontSize: "0.96rem",
                textAlign: "center",
                lineHeight: 1.58,
              }}
            >
              <ReactTyped
                strings={typedLines}
                typeSpeed={38}
                backSpeed={22}
                loop
                smartBackspace
              />
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
