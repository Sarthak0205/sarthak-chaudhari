import React from "react";
import { motion as Motion } from "framer-motion";
import { ReactTyped } from "react-typed";
import { useNavigate } from "react-router-dom";

import Section from "../ui/Section";
import Button from "../ui/Button";
import { colors, spacing, text } from "../ui/theme";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <Section
      id="about"
      style={{
        maxWidth: "1280px",
        margin: "0 auto",
        minHeight: "90vh",
        padding: `${spacing.xl} 2rem ${spacing.lg}`,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: spacing.lg,
      }}
    >
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: spacing.lg,
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          textAlign: "center",
        }}
      >
        {/* Text */}
        <Motion.div
          style={{
            flex: "1 1 45%",
            minWidth: "320px",
          }}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p
            style={{
              color: colors.accent,
              fontSize: text.lg,
              fontWeight: 500,
            }}
          >
            Software Engineer • Systems & Data
          </p>

          <h1
            style={{
              fontSize: text.hero,
              fontWeight: 800,
              marginTop: spacing.sm,
            }}
          >
            Hi, I’m Sarthak
          </h1>

          <p
            style={{
              marginTop: spacing.sm,
              fontSize: text.lg,
              lineHeight: 1.8,
              color: colors.gray,
              maxWidth: "640px",
              marginInline: "auto",
            }}
          >
            I design and build end-to-end software systems with a focus on
            structured data, access control, and scalable backend logic.
            My work combines careful system design with practical
            implementation and data-driven decisions.
          </p>

          {/* Actions */}
          <div
            style={{
              display: "flex",
              gap: spacing.md,
              marginTop: spacing.lg,
              justifyContent: "center",
            }}
          >
            <Button onClick={() => navigate("/projects")}>
              View My Work
            </Button>

            <Button href="#contact" variant="secondary">
              Let’s Connect
            </Button>
          </div>
        </Motion.div>

        {/* Image */}
        <Motion.div
          style={{ flex: "1 1 35%", minWidth: "320px" }}
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <Motion.img
            src="assets/Myself.webp"
            alt="Sarthak"
            style={{
              width: "420px",
              height: "480px",
              objectFit: "cover",
              borderRadius: "1.5rem",
              boxShadow: "0 10px 24px rgba(0,0,0,0.5)",
            }}
            whileHover={{ y: -6 }}
          />
        </Motion.div>
      </div>

      {/* Typed Statement */}
      <Motion.div
        style={{
          background:
            "linear-gradient(135deg, rgba(0,200,83,0.15), rgba(77,163,255,0.12))",
          border: "1px solid rgba(0,200,83,0.35)",
          borderRadius: "1.2rem",
          padding: `${spacing.sm} ${spacing.lg}`,
          textAlign: "center",
          maxWidth: "850px",
          fontSize: "1.4rem",
          fontWeight: 600,
          backdropFilter: "blur(10px)",
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <ReactTyped
          strings={[
            "Designing systems, not just screens.",
            "Working close to data and access control.",
            "Turning real problems into reliable software.",
          ]}
          typeSpeed={45}
          backSpeed={25}
          loop
        />
      </Motion.div>
    </Section>
  );
}
