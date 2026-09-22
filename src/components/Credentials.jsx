import React, { useMemo, useState } from "react";
import { motion as Motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";

import CredentialDetailModal from "./CredentialDetailModal";
import { credentialFilters, credentials } from "../data/credentials";
import Button from "../ui/Button";
import Reveal from "../ui/Reveal";
import Section from "../ui/Section";
import { colors, layout, sectionHeaderStyles, text } from "../ui/theme";

const cardRotations = ["-1.4deg", "1.2deg", "-0.8deg", "1.5deg", "-1.1deg"];

// Circular postal cancellation ink mark in crimson
function PostmarkStamp({ date = "2024", issuer = "IIT KGP" }) {
  return (
    <svg
      viewBox="0 0 100 100"
      aria-hidden="true"
      style={{
        position: "absolute",
        top: "-6px",
        right: "-6px",
        width: "78px",
        height: "78px",
        pointerEvents: "none",
        transform: "rotate(-12deg)",
        opacity: 0.88,
        zIndex: 4,
      }}
    >
      {/* Outer dashed circle */}
      <circle
        cx="44"
        cy="44"
        r="38"
        fill="none"
        stroke="rgba(255, 42, 42, 0.45)"
        strokeWidth="1.2"
        strokeDasharray="3 2"
      />
      {/* Inner solid circle */}
      <circle
        cx="44"
        cy="44"
        r="33"
        fill="none"
        stroke="rgba(255, 42, 42, 0.75)"
        strokeWidth="1.4"
      />
      {/* Central ring */}
      <circle
        cx="44"
        cy="44"
        r="22"
        fill="rgba(255, 42, 42, 0.04)"
        stroke="rgba(255, 42, 42, 0.35)"
        strokeWidth="0.8"
      />
      {/* Text inside postmark */}
      <text
        x="44"
        y="37"
        textAnchor="middle"
        fill="#ff6b6b"
        fontSize="7.5"
        fontWeight="900"
        letterSpacing="0.1em"
      >
        VERIFIED
      </text>
      <text
        x="44"
        y="46"
        textAnchor="middle"
        fill="#ffffff"
        fontSize="6.5"
        fontWeight="800"
        letterSpacing="0.06em"
      >
        {issuer}
      </text>
      <text
        x="44"
        y="54"
        textAnchor="middle"
        fill="#ff9999"
        fontSize="6"
        fontWeight="700"
        letterSpacing="0.04em"
      >
        {date}
      </text>
      {/* Wavy cancellation ink lines extending outward */}
      <path
        d="M74 34 Q82 28 90 34 T104 34"
        fill="none"
        stroke="rgba(255, 42, 42, 0.55)"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M76 44 Q84 38 92 44 T106 44"
        fill="none"
        stroke="rgba(255, 42, 42, 0.65)"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M74 54 Q82 48 90 54 T104 54"
        fill="none"
        stroke="rgba(255, 42, 42, 0.55)"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

// Decorative academic / engineering seal emblem for Java certification
function JavaStampEmblem() {
  return (
    <div
      style={{
        position: "relative",
        width: "74px",
        height: "74px",
        margin: "0 auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <svg
        viewBox="0 0 80 80"
        aria-hidden="true"
        style={{
          width: "100%",
          height: "100%",
          overflow: "visible",
        }}
      >
        <circle cx="40" cy="40" r="32" fill="rgba(255, 42, 42, 0.08)" />
        <polygon
          points="40,8 50,14 62,14 66,26 74,34 72,46 76,58 66,66 56,72 44,74 32,70 22,72 14,62 10,50 6,38 12,26 20,16 30,12"
          fill="none"
          stroke="rgba(255, 42, 42, 0.35)"
          strokeWidth="1"
          strokeDasharray="2 2"
        />
        <circle
          cx="40"
          cy="40"
          r="26"
          fill="none"
          stroke="rgba(255, 255, 255, 0.12)"
          strokeWidth="1"
        />
        <circle
          cx="40"
          cy="40"
          r="24"
          fill="none"
          stroke="rgba(255, 42, 42, 0.6)"
          strokeWidth="1.2"
        />
        <g stroke="rgba(255, 42, 42, 0.3)" strokeWidth="0.8">
          <line x1="40" y1="16" x2="40" y2="20" />
          <line x1="40" y1="60" x2="40" y2="64" />
          <line x1="16" y1="40" x2="20" y2="40" />
          <line x1="60" y1="40" x2="64" y2="40" />
        </g>
        <path
          d="M31 34 C31 43 45 43 45 34 Z"
          fill="rgba(255, 42, 42, 0.2)"
          stroke="#ff6b6b"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M45 36 C48 36 49 40 45 41"
          fill="none"
          stroke="#ff6b6b"
          strokeWidth="1.4"
        />
        <path
          d="M34 29 C34 26 36 26 36 23"
          fill="none"
          stroke="rgba(255, 255, 255, 0.6)"
          strokeWidth="1.1"
          strokeLinecap="round"
        />
        <path
          d="M39 30 C39 27 41 27 41 24"
          fill="none"
          stroke="#ff9999"
          strokeWidth="1.1"
          strokeLinecap="round"
        />
        <line
          x1="29"
          y1="45"
          x2="47"
          y2="45"
          stroke="#ff6b6b"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

// Decorative research paper & scientific publication seal emblem
function PaperStampEmblem() {
  return (
    <div
      style={{
        position: "relative",
        width: "74px",
        height: "74px",
        margin: "0 auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <svg
        viewBox="0 0 80 80"
        aria-hidden="true"
        style={{
          width: "100%",
          height: "100%",
          overflow: "visible",
        }}
      >
        <circle cx="40" cy="40" r="32" fill="rgba(255, 42, 42, 0.08)" />
        <polygon
          points="40,8 50,14 62,14 66,26 74,34 72,46 76,58 66,66 56,72 44,74 32,70 22,72 14,62 10,50 6,38 12,26 20,16 30,12"
          fill="none"
          stroke="rgba(255, 42, 42, 0.35)"
          strokeWidth="1"
          strokeDasharray="2 2"
        />
        <circle
          cx="40"
          cy="40"
          r="26"
          fill="none"
          stroke="rgba(255, 255, 255, 0.12)"
          strokeWidth="1"
        />
        <circle
          cx="40"
          cy="40"
          r="24"
          fill="none"
          stroke="rgba(255, 42, 42, 0.6)"
          strokeWidth="1.2"
        />
        <g stroke="rgba(255, 42, 42, 0.3)" strokeWidth="0.8">
          <line x1="40" y1="16" x2="40" y2="20" />
          <line x1="40" y1="60" x2="40" y2="64" />
          <line x1="16" y1="40" x2="20" y2="40" />
          <line x1="60" y1="40" x2="64" y2="40" />
        </g>
        {/* Document Sheet with folded corner */}
        <path
          d="M29 23 L45 23 L51 29 L51 55 L29 55 Z"
          fill="rgba(255, 42, 42, 0.18)"
          stroke="#ff6b6b"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        {/* Folded corner flap */}
        <path
          d="M45 23 L45 29 L51 29"
          fill="none"
          stroke="#ff6b6b"
          strokeWidth="1.2"
          strokeLinejoin="round"
        />
        {/* Publication lines */}
        <line x1="33" y1="33" x2="43" y2="33" stroke="rgba(255, 255, 255, 0.8)" strokeWidth="1.2" strokeLinecap="round" />
        <line x1="33" y1="38" x2="47" y2="38" stroke="#ff9999" strokeWidth="1.2" strokeLinecap="round" />
        <line x1="33" y1="43" x2="45" y2="43" stroke="rgba(255, 255, 255, 0.8)" strokeWidth="1.2" strokeLinecap="round" />
        <line x1="33" y1="48" x2="40" y2="48" stroke="#ff6b6b" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    </div>
  );
}

// Compact, decorative collectible stamp badge component
function CredentialStampBadge({ credential, index, onActivate }) {
  const rotation = cardRotations[index % cardRotations.length];
  const isResearchPaper = credential.type === "research-paper";

  // Common styles
  const stampStyle = {
    position: "relative",
    width: "100%",
    maxWidth: "245px",
    minHeight: "305px",
    margin: "0 auto",
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid rgba(255, 255, 255, 0.14)",
    background:
      "linear-gradient(150deg, rgba(22, 22, 28, 0.98) 0%, rgba(12, 12, 16, 0.98) 55%, rgba(6, 6, 8, 1) 100%)",
    boxShadow:
      "0 18px 40px rgba(0, 0, 0, 0.65), 0 0 0 1px rgba(255, 42, 42, 0.15)",
    cursor: "pointer",
    textAlign: "left",
    transform: `rotate(${rotation})`,
    transformOrigin: "center center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    boxSizing: "border-box",
    overflow: "hidden",
    outline: "none",
    textDecoration: "none",
    transition: "border-color 0.25s ease, box-shadow 0.25s ease",
  };

  const handleMouseEnter = (e) => {
    e.currentTarget.style.borderColor = "rgba(255, 42, 42, 0.55)";
    e.currentTarget.style.boxShadow =
      "0 22px 50px rgba(0, 0, 0, 0.75), 0 0 28px rgba(255, 42, 42, 0.28)";
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.14)";
    e.currentTarget.style.boxShadow =
      "0 18px 40px rgba(0, 0, 0, 0.65), 0 0 0 1px rgba(255, 42, 42, 0.15)";
  };

  const content = (
    <>
      {/* Outer perforated micro-dots */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: "4px",
          borderRadius: "6px",
          border: "1px dotted rgba(255, 255, 255, 0.15)",
          pointerEvents: "none",
        }}
      />

      {/* Middle dashed crimson frame */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: "7px",
          borderRadius: "5px",
          border: "1.5px dashed rgba(255, 42, 42, 0.42)",
          pointerEvents: "none",
        }}
      />

      {/* Inner hairline frame */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: "11px",
          borderRadius: "3px",
          border: "1px solid rgba(255, 255, 255, 0.05)",
          pointerEvents: "none",
        }}
      />

      {/* Decorative Postal Cancellation Stamp */}
      <PostmarkStamp
        date={isResearchPaper ? credential.year || "2026" : "2024"}
        issuer={isResearchPaper ? credential.publisher || "IEEE" : "IIT KGP"}
      />

      {/* Central Area: Decorative Iconographic Emblem */}
      <div style={{ position: "relative", zIndex: 2, padding: "26px 0 14px 0" }}>
        {isResearchPaper ? <PaperStampEmblem /> : <JavaStampEmblem />}
      </div>

      {/* Bottom Block: Brief Verified Info */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          padding: "0 10px 8px 10px",
          display: "flex",
          flexDirection: "column",
          gap: "4px",
        }}
      >
        <div
          style={{
            color: "#ffffff",
            fontSize: isResearchPaper ? "0.85rem" : "0.98rem",
            fontWeight: 800,
            lineHeight: 1.25,
            letterSpacing: "-0.01em",
            textTransform: "uppercase",
            display: "-webkit-box",
            WebkitLineClamp: isResearchPaper ? 3 : 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {credential.title}
        </div>
        <div
          style={{
            fontSize: "0.74rem",
            fontWeight: 600,
            color: "#a4a4aa",
            lineHeight: 1.3,
          }}
        >
          {isResearchPaper
            ? `${credential.publisher} • ${credential.year}`
            : credential.issuer}
        </div>

        {/* Micro Score or Publisher / Action Bar */}
        <div
          style={{
            marginTop: "8px",
            paddingTop: "7px",
            borderTop: "1px dashed rgba(255, 255, 255, 0.1)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span
            style={{
              fontSize: "0.7rem",
              fontWeight: 800,
              color: "#ffb0b0",
              letterSpacing: "0.04em",
            }}
          >
            {isResearchPaper
              ? credential.authorDisplay || "S. CHAUDHARI ET AL."
              : `SCORE: ${credential.score}`}
          </span>
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "4px",
              fontSize: "0.68rem",
              fontWeight: 800,
              color: colors.primary,
              textTransform: "uppercase",
              letterSpacing: "0.05em",
            }}
          >
            {isResearchPaper ? (
              <>
                IEEE Xplore <ExternalLink size={11} />
              </>
            ) : (
              <>
                Inspect <ArrowRight size={11} />
              </>
            )}
          </span>
        </div>
      </div>
    </>
  );

  if (isResearchPaper) {
    return (
      <Motion.a
        href={credential.publicationUrl}
        target="_blank"
        rel="noreferrer"
        aria-label={`Read ${credential.title} on IEEE Xplore`}
        whileHover={{ y: -7, rotate: "0deg", scale: 1.025 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 280, damping: 20 }}
        style={stampStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {content}
      </Motion.a>
    );
  }

  return (
    <Motion.button
      type="button"
      onClick={onActivate}
      aria-label={`View ${credential.title} certificate from ${credential.issuer}`}
      whileHover={{ y: -7, rotate: "0deg", scale: 1.025 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 280, damping: 20 }}
      style={stampStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {content}
    </Motion.button>
  );
}

export default function Credentials() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedCredential, setSelectedCredential] = useState(null);

  const filteredCredentials = useMemo(() => {
    if (activeFilter === "all") return credentials;
    return credentials.filter((credential) => credential.type === activeFilter);
  }, [activeFilter]);

  const handleActivate = (credential) => {
    if (credential.type === "certification") {
      setSelectedCredential(credential);
    }
  };

  return (
    <>
      <Section
        style={{
          minHeight: "calc(100vh - 80px)",
          paddingTop: "clamp(4.5rem, 8vw, 6.75rem)",
          paddingBottom: "clamp(4rem, 8vw, 6rem)",
          overflow: "hidden",
          position: "relative",
        }}
      >
        {/* Background glows */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 18% 0%, rgba(255,42,42,0.08), transparent 28%), radial-gradient(circle at 88% 14%, rgba(255,255,255,0.045), transparent 22%), linear-gradient(180deg, #050505 0%, #080808 52%, #050505 100%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.2,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
            maskImage: "linear-gradient(to bottom, black, transparent 75%)",
            WebkitMaskImage: "linear-gradient(to bottom, black, transparent 75%)",
          }}
        />

        <div style={{ position: "relative", zIndex: 1, maxWidth: layout.contentWidth, margin: "0 auto" }}>
          {/* Header */}
          <Reveal>
            <div style={sectionHeaderStyles.wrap}>
              <p style={sectionHeaderStyles.eyebrow}>Collectible Record</p>
              <h1
                style={{
                  ...sectionHeaderStyles.title,
                  fontSize: text.display,
                  letterSpacing: 0,
                }}
              >
                Credentials & Publications
              </h1>
              <p style={{ ...sectionHeaderStyles.body, maxWidth: "720px" }}>
                A collection of verified academic credentials and peer-reviewed research publications presented as commemorative stamp badges.
                Click to inspect certified credentials or read research publications on IEEE Xplore.
              </p>
            </div>
          </Reveal>

          {/* Filters */}
          <Reveal delay={0.06}>
            <div
              role="tablist"
              aria-label="Filter credentials and publications"
              style={{
                margin: "2rem auto 0",
                width: "fit-content",
                maxWidth: "100%",
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "8px",
                padding: "6px",
                borderRadius: "9999px",
                border: "1px solid rgba(255,255,255,0.08)",
                background: "rgba(255,255,255,0.03)",
              }}
            >
              {credentialFilters.map((filter) => {
                const isActive = activeFilter === filter.value;
                return (
                  <button
                    key={filter.value}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActiveFilter(filter.value)}
                    style={{
                      minHeight: "38px",
                      padding: "0.5rem 1.1rem",
                      borderRadius: "9999px",
                      border: isActive ? "1px solid rgba(255,42,42,0.45)" : "1px solid transparent",
                      background: isActive ? "rgba(255,42,42,0.15)" : "transparent",
                      color: isActive ? "#ffffff" : colors.textMuted,
                      cursor: "pointer",
                      fontWeight: isActive ? 800 : 600,
                      fontSize: "0.85rem",
                      whiteSpace: "nowrap",
                      transition: "all 0.2s ease",
                    }}
                  >
                    {filter.label}
                  </button>
                );
              })}
            </div>
          </Reveal>

          {/* Responsive Stamp Grid */}
          <div
            style={{
              marginTop: "clamp(2.5rem, 5vw, 3.5rem)",
              display: "grid",
              // Mobile: 2 columns; Tablet: 2-3 columns; Desktop: multiple compact stamps per row
              gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 230px), 1fr))",
              gap: "clamp(16px, 3vw, 28px)",
              justifyContent: "center",
              alignItems: "start",
            }}
          >
            {filteredCredentials.map((credential, index) => (
              <Reveal key={credential.id} delay={0.1 + index * 0.05}>
                <CredentialStampBadge
                  credential={credential}
                  index={index}
                  onActivate={() => handleActivate(credential)}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* Actual Certificate Modal (opens only for certification credentials) */}
      <CredentialDetailModal
        credential={selectedCredential}
        onClose={() => setSelectedCredential(null)}
      />
    </>
  );
}

// Compact homepage preview featuring the stamp badge and link
export function CredentialsPreview() {
  const [selectedCredential, setSelectedCredential] = useState(null);
  const featuredCredentials = credentials.filter((credential) => credential.featured).slice(0, 2);

  if (featuredCredentials.length === 0) return null;

  return (
    <>
      <Section
        style={{
          paddingBlock: "clamp(3.5rem, 7vw, 5rem)",
          background:
            "linear-gradient(180deg, #050505 0%, #080808 52%, #050505 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div style={{ maxWidth: layout.contentWidth, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <Reveal>
            <div style={{ ...sectionHeaderStyles.wrap, marginBottom: "2rem" }}>
              <p style={sectionHeaderStyles.eyebrow}>Verified Credentials</p>
              <h2 style={{ ...sectionHeaderStyles.title, fontSize: "clamp(1.8rem, 4vw, 2.4rem)", letterSpacing: 0 }}>
                Academic & Technical Certifications
              </h2>
              <p style={{ ...sectionHeaderStyles.body, maxWidth: "680px" }}>
                Verified technical qualifications and peer-reviewed publications rendered as collectible stamp badges.
                Click to inspect certified credentials or access research papers.
              </p>
            </div>
          </Reveal>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "24px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {featuredCredentials.map((credential, index) => (
              <Reveal key={credential.id} delay={index * 0.06}>
                <CredentialStampBadge
                  credential={credential}
                  index={index}
                  onActivate={() => setSelectedCredential(credential)}
                />
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.12}>
            <div style={{ marginTop: "2rem", textAlign: "center" }}>
              <Button href="/credentials" variant="secondary" style={{ width: "fit-content", margin: "0 auto" }}>
                View All Credentials
                <ArrowRight size={16} />
              </Button>
            </div>
          </Reveal>
        </div>
      </Section>

      <CredentialDetailModal
        credential={selectedCredential}
        onClose={() => setSelectedCredential(null)}
      />
    </>
  );
}
