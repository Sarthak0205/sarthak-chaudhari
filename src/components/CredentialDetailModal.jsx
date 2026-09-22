import React, { useEffect, useRef } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";
import { Award, Calendar, ExternalLink, FileText, Medal, Trophy, X } from "lucide-react";

import { colors, getButtonStyles, radius } from "../ui/theme";

export default function CredentialDetailModal({ credential, onClose }) {
  const closeButtonRef = useRef(null);

  useEffect(() => {
    if (!credential) return undefined;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.setTimeout(() => closeButtonRef.current?.focus(), 0);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [credential, onClose]);

  if (!credential) return null;

  return (
    <AnimatePresence>
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="credential-modal-title"
        onClick={(event) => {
          if (event.target === event.currentTarget) {
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
        }}
      >
        <Motion.div
          data-testid="credential-modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.22, ease: "easeOut" }}
          onClick={onClose}
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(4, 4, 6, 0.9)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
          }}
        />

        <Motion.div
          initial={{ opacity: 0, scale: 0.96, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 16 }}
          transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
          onClick={(event) => event.stopPropagation()}
          style={{
            position: "relative",
            zIndex: 1,
            width: "100%",
            maxWidth: "1020px",
            maxHeight: "90vh",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            borderRadius: "20px",
            border: "1px solid rgba(255, 42, 42, 0.22)",
            background: "#08080a",
            boxShadow:
              "0 32px 80px rgba(0, 0, 0, 0.85), 0 0 40px rgba(255, 42, 42, 0.08)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "16px",
              padding: "18px 24px",
              borderBottom: "1px solid rgba(255,255,255,0.07)",
              background: "rgba(255,255,255,0.02)",
            }}
          >
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "10px" }}>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "7px",
                  padding: "5px 10px",
                  borderRadius: radius.pill,
                  background: "rgba(255,42,42,0.13)",
                  border: "1px solid rgba(255,42,42,0.32)",
                  color: "#ffb0b0",
                  fontSize: "0.76rem",
                  fontWeight: 800,
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                }}
              >
                <Award size={14} />
                Certification
              </span>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "7px",
                  padding: "5px 10px",
                  borderRadius: radius.pill,
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  color: "#d7d7d7",
                  fontSize: "0.76rem",
                  fontWeight: 700,
                }}
              >
                <Medal size={14} />
                {credential.certificateType}
              </span>
            </div>

            <button
              ref={closeButtonRef}
              type="button"
              onClick={onClose}
              aria-label="Close credential preview"
              style={{
                flex: "0 0 auto",
                width: "38px",
                height: "38px",
                borderRadius: "50%",
                border: "1px solid rgba(255,255,255,0.1)",
                background: "rgba(255,255,255,0.04)",
                color: "#e8e8e8",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              <X size={18} />
            </button>
          </div>

          <div
            style={{
              overflowY: "auto",
              padding: "clamp(16px, 3vw, 26px)",
              display: "grid",
              gap: "22px",
            }}
          >
            <div style={{ display: "grid", gap: "10px" }}>
              <h2
                id="credential-modal-title"
                style={{
                  color: colors.text,
                  fontSize: "clamp(1.55rem, 4vw, 2.25rem)",
                  lineHeight: 1.12,
                  letterSpacing: 0,
                }}
              >
                {credential.title}
              </h2>
              <p style={{ color: "#ffb0b0", fontWeight: 700, lineHeight: 1.5 }}>
                {credential.issuer}
              </p>
              <p style={{ maxWidth: "760px", color: colors.textMuted, lineHeight: 1.7 }}>
                {credential.description}
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
                gap: "12px",
              }}
            >
              <DetailTile icon={<Calendar size={16} />} label="Course Period" value={credential.date} />
              <DetailTile icon={<FileText size={16} />} label="Holder" value={credential.holder} />
              <DetailTile icon={<Trophy size={16} />} label="Score" value={credential.score} />
            </div>

            <div
              style={{
                borderRadius: "14px",
                overflow: "hidden",
                border: "1px solid rgba(255,255,255,0.08)",
                background: "#f4f1ea",
                boxShadow: "0 18px 46px rgba(0,0,0,0.45)",
              }}
            >
              <img
                src={credential.image}
                alt={`${credential.title} certificate awarded to ${credential.holder}`}
                style={{
                  display: "block",
                  width: "100%",
                  height: "auto",
                }}
              />
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
              <a
                href={credential.documentUrl}
                target="_blank"
                rel="noreferrer"
                style={getButtonStyles("primary")}
              >
                Open Certificate PDF
                <ExternalLink size={16} />
              </a>
              <button type="button" onClick={onClose} style={getButtonStyles("secondary")}>
                Close Preview
              </button>
            </div>
          </div>
        </Motion.div>
      </div>
    </AnimatePresence>
  );
}

function DetailTile({ icon, label, value }) {
  return (
    <div
      style={{
        minHeight: "86px",
        padding: "14px 16px",
        borderRadius: radius.md,
        border: "1px solid rgba(255,255,255,0.07)",
        background: "rgba(255,255,255,0.02)",
        display: "grid",
        alignContent: "center",
        gap: "6px",
      }}
    >
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "7px",
          color: colors.primary,
          fontSize: "0.76rem",
          fontWeight: 800,
          textTransform: "uppercase",
          letterSpacing: "0.06em",
        }}
      >
        {icon}
        {label}
      </div>
      <div style={{ color: "#fff", fontWeight: 800, lineHeight: 1.25 }}>{value}</div>
    </div>
  );
}
