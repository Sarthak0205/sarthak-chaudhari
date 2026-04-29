'use client'

import React, { useState } from "react";
import { motion as Motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaFileDownload } from "react-icons/fa";
import {
  colors,
  getButtonStyles,
  getSurfaceStyles,
  layout,
  radius,
  sectionHeaderStyles,
  sectionStyles,
} from "../ui/theme";

const contactMethods = [
  {
    label: "Email",
    actionLabel: "Email me",
    value: "csarthak013@gmail.com",
    href: "mailto:csarthak013@gmail.com",
    description: "Best way to reach me",
    icon: <FaEnvelope />,
  },
  {
    label: "GitHub",
    actionLabel: "View profile",
    value: "github.com/Sarthak0205",
    href: "https://github.com/Sarthak0205",
    description: "Code and project work",
    icon: <FaGithub />,
  },
  {
    label: "LinkedIn",
    actionLabel: "View profile",
    value: "linkedin.com/in/sarthak-chaudhari",
    href: "https://www.linkedin.com/in/sarthak-chaudhari/",
    description: "Experience and background",
    icon: <FaLinkedin />,
  },
];

export default function Contact() {
  const [copied, setCopied] = useState("");

  const copyText = async (value) => {
    await navigator.clipboard.writeText(value);
    setCopied(value);

    window.setTimeout(() => {
      setCopied("");
    }, 1500);
  };

  return (
    <section
      style={{
        ...sectionStyles.page,
        background:
          "radial-gradient(circle at 20% 20%, rgba(255,42,42,0.06), transparent 40%), #050505",
      }}
    >
      <div style={{ maxWidth: layout.narrowWidth, margin: "0 auto" }}>
        <div style={{ ...sectionHeaderStyles.wrap, marginBottom: "2.1rem" }}>
          <p
            style={sectionHeaderStyles.eyebrow}
          >
            Contact
          </p>
          <h2 style={{ ...sectionHeaderStyles.title, fontSize: "clamp(2.2rem, 5vw, 3.2rem)" }}>
            Get in touch
          </h2>
          <p style={sectionHeaderStyles.body}>
            Feel free to reach out.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "24px",
            alignItems: "start",
          }}
        >
          <Motion.div
            whileHover={{ y: -4 }}
            style={{
              ...getSurfaceStyles(),
              padding: "30px",
            }}
          >
            <h3 style={{ margin: 0, fontSize: "1.45rem", lineHeight: 1.2 }}>Contact</h3>
            <p style={{ color: colors.textMuted, lineHeight: 1.72, margin: "0.9rem 0 0" }}>
              Best way to reach me
            </p>

            <div style={{ display: "grid", gap: "14px", marginTop: "22px" }}>
              {contactMethods.map((method) => (
                <div
                  key={method.label}
                  style={{
                    padding: "16px",
                    borderRadius: radius.lg,
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.07)",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <div style={{ color: "#ff2a2a", fontSize: "1.1rem" }}>{method.icon}</div>
                    <div>
                      <div style={{ fontWeight: 700 }}>{method.label}</div>
                      <div style={{ color: "#d0d0d0", fontSize: "0.93rem", marginTop: "4px", lineHeight: 1.5 }}>
                        {method.value}
                      </div>
                    </div>
                  </div>

                  <div style={{ color: colors.textSoft, fontSize: "0.88rem", marginTop: "10px", lineHeight: 1.6 }}>
                    {method.description}
                  </div>

                  <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginTop: "14px" }}>
                    <a
                      href={method.href}
                      target="_blank"
                      rel="noreferrer"
                      style={method.label === "Email" ? primaryAction : secondaryAction}
                    >
                      {method.actionLabel}
                    </a>
                    <button
                      type="button"
                      onClick={() => copyText(method.value)}
                      style={{
                        ...secondaryAction,
                        minHeight: "40px",
                        padding: "0.62rem 0.9rem",
                        fontSize: "0.86rem",
                        color: colors.textSoft,
                      }}
                    >
                      {copied === method.value ? "Copied" : "Copy"}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </Motion.div>

          <Motion.div
            whileHover={{ y: -4 }}
            style={{
              ...getSurfaceStyles("accent"),
              padding: "34px 32px",
              display: "flex",
              flexDirection: "column",
              gap: "18px",
            }}
          >
            <div>
              <h3 style={{ margin: 0, fontSize: "1.45rem", lineHeight: 1.2 }}>Resume</h3>
              <p style={{ color: colors.textMuted, lineHeight: 1.72, margin: "0.9rem 0 0" }}>
                Quick access to my resume
              </p>
              <p style={{ color: colors.textSoft, lineHeight: 1.65, margin: "0.45rem 0 0" }}>
                Updated with projects and internship work
              </p>
            </div>

            <a
              href="/assets/S_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              style={{
                ...primaryAction,
                width: "fit-content",
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <FaFileDownload />
              Open Resume
            </a>
          </Motion.div>
        </div>
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
