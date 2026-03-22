import React from "react";
import { motion as Motion } from "framer-motion";
import Section from "../ui/Section";
import { colors, spacing, text } from "../ui/theme";

export default function About() {
  return (
    <Section
      id="about"
      style={{
        padding: `${spacing.xl} 2rem`,
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: spacing.lg,
          alignItems: "center",
        }}
      >
        {/* Image */}
        <Motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Motion.img
            src="/assets/Myself.webp"
            alt="Sarthak"
            style={{
              width: "260px",
              height: "260px",
              objectFit: "cover",
              borderRadius: "1.5rem",
              boxShadow: "0 10px 24px rgba(0,0,0,0.5)",
              margin: "0 auto",
            }}
            whileHover={{ y: -4 }}
          />
        </Motion.div>

        {/* Text */}
        <Motion.div
          initial={{ opacity: 0, x: 14 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 style={{ fontSize: text.xl, fontWeight: 800 }}>
            About Me
          </h2>

          <p
            style={{
              marginTop: spacing.sm,
              fontSize: text.base,
              color: colors.gray,
              lineHeight: 1.8,
            }}
          >
            I’m Sarthak, a software engineer interested in how real-world systems
            are designed, secured, and scaled. I enjoy working close to the data
            layer — modeling information, enforcing access rules, and building
            backend logic that reflects real constraints.
          </p>

          <p
            style={{
              marginTop: spacing.sm,
              fontSize: text.base,
              color: colors.gray,
              lineHeight: 1.8,
            }}
          >
            My work often spans database design, backend development, and
            supporting frontend interfaces. I value clarity in system behavior,
            deliberate trade-offs, and solutions that remain maintainable as
            requirements evolve.
          </p>
        </Motion.div>
      </div>
    </Section>
  );
}
