// src/ui/theme.js
export const colors = {
  background: "#050505",
  surface: "rgba(255,255,255,0.03)",
  surfaceStrong: "rgba(255,255,255,0.045)",
  primary: "#ff2a2a",
  accent: "#ff3b3b",
  soft: "rgba(255,42,42,0.14)",
  border: "rgba(255,255,255,0.08)",
  borderStrong: "rgba(255,42,42,0.18)",
  text: "#ffffff",
  textMuted: "#c7c7c7",
  textSoft: "#9d9d9d",
  gray: "#a0a0a0",
};

export const spacing = {
  xs: "0.5rem",
  sm: "0.875rem",
  md: "1.25rem",
  lg: "1.75rem",
  xl: "2.5rem",
  section: "clamp(4.75rem, 8vw, 7.5rem)",
  sectionTight: "clamp(3.75rem, 7vw, 5.75rem)",
  shell: "clamp(1.1rem, 3vw, 1.5rem)",
};

export const radius = {
  sm: "0.875rem",
  md: "1rem",
  lg: "1.5rem",
  pill: "999px",
};

export const text = {
  xs: "0.8rem",
  sm: "0.92rem",
  base: "clamp(1rem, 0.96rem + 0.18vw, 1.08rem)",
  lg: "1.05rem",
  xl: "clamp(1.9rem, 4vw, 2.6rem)",
  display: "clamp(2.4rem, 5vw, 3.45rem)",
  h3: "1.35rem",
};

export const shadows = {
  card: "0 20px 54px rgba(0,0,0,0.28)",
  hero: "0 22px 60px rgba(0,0,0,0.3)",
  soft: "0 16px 40px rgba(0,0,0,0.22)",
};

export const layout = {
  contentWidth: "1380px",
  narrowWidth: "1280px",
  readingWidth: "820px",
};

export const transitions = {
  smooth: "all 0.22s ease",
};

export const sectionStyles = {
  base: {
    position: "relative",
    padding: `${spacing.section} ${spacing.shell}`,
  },
  page: {
    minHeight: "100vh",
    padding: `calc(${spacing.section} + 1.5rem) ${spacing.shell} ${spacing.section}`,
  },
};

export const sectionHeaderStyles = {
  wrap: {
    textAlign: "center",
    maxWidth: layout.readingWidth,
    margin: "0 auto",
  },
  eyebrow: {
    margin: 0,
    color: colors.primary,
    textTransform: "uppercase",
    letterSpacing: "0.08em",
    fontWeight: 700,
    fontSize: text.xs,
  },
  title: {
    margin: "0.82rem 0 0",
    fontSize: text.xl,
    lineHeight: 1.1,
    letterSpacing: "-0.03em",
  },
  body: {
    margin: "0.9rem auto 0",
    color: colors.textMuted,
    lineHeight: 1.7,
    fontSize: text.base,
  },
};

export function getButtonStyles(variant = "primary") {
  const base = {
    minHeight: "46px",
    padding: "0.78rem 1.12rem",
    borderRadius: radius.md,
    fontWeight: 600,
    fontSize: text.sm,
    letterSpacing: "0.01em",
    border: `1px solid ${colors.border}`,
    cursor: "pointer",
    textDecoration: "none",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.5rem",
    lineHeight: 1.2,
    transition: "transform 0.22s ease, background 0.22s ease, border-color 0.22s ease, box-shadow 0.22s ease, color 0.22s ease",
    boxSizing: "border-box",
    whiteSpace: "nowrap",
  };

  if (variant === "secondary") {
    return {
      ...base,
      background: "rgba(255,255,255,0.03)",
      border: `1px solid ${colors.border}`,
      color: colors.textMuted,
      boxShadow: "none",
    };
  }

  return {
    ...base,
    background: "linear-gradient(180deg, #ff3a3a, #ff2525)",
    border: "1px solid rgba(255,42,42,0.36)",
    color: "#fff",
    boxShadow: "0 10px 24px rgba(255,42,42,0.18)",
  };
}

export function getSurfaceStyles(emphasis = "default") {
  const border =
    emphasis === "accent" ? colors.borderStrong : colors.border;

  return {
    borderRadius: radius.lg,
    border: `1px solid ${border}`,
    background:
      emphasis === "accent"
        ? "linear-gradient(180deg, rgba(18,18,18,0.98), rgba(10,10,10,0.98))"
        : "linear-gradient(180deg, rgba(17,17,17,0.96), rgba(10,10,10,0.96))",
    boxShadow: shadows.card,
  };
}
