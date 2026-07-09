import React, { useEffect, useState } from "react";
import { motion as Motion } from "framer-motion";
import { colors } from "../ui/theme";

// Existing Logo Component rendering /logo.png exactly as provided
export function Logo({ size = 42, style }) {
  return (
    <img
      src="/logo.png"
      alt="Sarthak Chaudhari Logo"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        objectFit: "contain",
        display: "block",
        ...style
      }}
    />
  );
}

// Name Animation (starts immediately at 800ms when logo settling animation finishes)
const nameVariants = {
  hidden: { opacity: 0, y: 8, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
      delay: 0.8, // 300ms (intro/glow) + 500ms (logo) = 800ms
    },
  },
};

// Roles Sequential Stagger Animation (overlapping name reveal, starts at 1200ms)
const roleVariants = {
  hidden: { opacity: 0, y: 6 },
  visible: (customIndex) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
      delay: 1.2 + customIndex * 0.18, // Starts at 1.2s, overlapping the last 200ms of the name reveal
    },
  }),
};

export default function IntroScreen({ onComplete, isTransitioning }) {
  const [ambientGlowVisible, setAmbientGlowVisible] = useState(false);
  const [logoVisible, setLogoVisible] = useState(false);
  const [identityVisible, setIdentityVisible] = useState(false);

  useEffect(() => {
    // 1. Fade in the ambient glow after 150ms (Anticipation)
    const tGlow = setTimeout(() => {
      setAmbientGlowVisible(true);
    }, 150);

    // 2. Animate Logo Fade & Scale at 300ms (Duration: 500ms, visible at 800ms)
    const tLogo = setTimeout(() => {
      setLogoVisible(true);
    }, 300);

    // 3. Reveal identity details (staggered overlap)
    const tIdentity = setTimeout(() => {
      setIdentityVisible(true);
    }, 800);

    // 4. Trigger transition to navbar (Starts at 2.2s, right as roles finish settling)
    const tComplete = setTimeout(() => {
      onComplete();
    }, 2200);

    return () => {
      clearTimeout(tGlow);
      clearTimeout(tLogo);
      clearTimeout(tIdentity);
      clearTimeout(tComplete);
    };
  }, [onComplete]);

  return (
    <Motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: isTransitioning ? 0 : 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} // Smooth seamless blend transition
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "#030303",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        pointerEvents: isTransitioning ? "none" : "auto",
        overflow: "hidden",
      }}
    >
      {/* Subtle modern noise pattern grid */}
      <div style={{
        position: "absolute",
        inset: 0,
        opacity: 0.04,
        backgroundImage: "radial-gradient(rgba(255,255,255,0.15) 1px, transparent 1px)",
        backgroundSize: "24px 24px",
      }} />

      {/* Ambient background glow */}
      <Motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: ambientGlowVisible ? 1 : 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(circle at 50% 50%, rgba(255,42,42,0.035), transparent 45%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "32px", zIndex: 10 }}>
        {/* Animated logo wrapper */}
        {!isTransitioning && (
          <Motion.div
            layoutId="logo-wrapper"
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            initial={{ opacity: 0, scale: 0.94, filter: "brightness(0.8) blur(6px)" }}
            animate={logoVisible ? { opacity: 1, scale: 1, filter: "brightness(1) blur(0px)" } : {}}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Logo size={80} />
          </Motion.div>
        )}

        {/* Identity Details */}
        <div style={{ textAlign: "center", display: "grid", gap: "10px" }}>
          <Motion.h1
            variants={nameVariants}
            initial="hidden"
            animate={identityVisible ? "visible" : "hidden"}
            style={{
              fontSize: "2.2rem",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              color: "#ffffff",
              margin: 0,
            }}
          >
            Sarthak Chaudhari
          </Motion.h1>

          <div style={{
            fontSize: "0.92rem",
            color: "#a0a0a0",
            fontWeight: 500,
            display: "flex",
            gap: "8px",
            justifyContent: "center",
            alignItems: "center",
            margin: 0,
            opacity: 0.85,
          }}>
            <Motion.span
              custom={0}
              variants={roleVariants}
              initial="hidden"
              animate={identityVisible ? "visible" : "hidden"}
            >
              Software Engineer
            </Motion.span>
            
            <Motion.span
              custom={1}
              variants={roleVariants}
              initial="hidden"
              animate={identityVisible ? "visible" : "hidden"}
              style={{ color: colors.primary }}
            >
              •
            </Motion.span>
            
            <Motion.span
              custom={1}
              variants={roleVariants}
              initial="hidden"
              animate={identityVisible ? "visible" : "hidden"}
            >
              AI/ML Engineer
            </Motion.span>
            
            <Motion.span
              custom={2}
              variants={roleVariants}
              initial="hidden"
              animate={identityVisible ? "visible" : "hidden"}
              style={{ color: colors.primary }}
            >
              •
            </Motion.span>
            
            <Motion.span
              custom={2}
              variants={roleVariants}
              initial="hidden"
              animate={identityVisible ? "visible" : "hidden"}
            >
              Full Stack Developer
            </Motion.span>
          </div>
        </div>
      </div>
    </Motion.div>
  );
}
