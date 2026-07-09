// src/ui/Section.jsx
import { motion as Motion } from "framer-motion";
import { colors, sectionStyles } from "./theme";

export default function Section({ children, id, style }) {
  return (
    <Motion.section
      id={id}
      style={{
        ...sectionStyles.base,
        backgroundColor: colors.background,
        color: colors.text,
        ...style,
      }}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
    >
      {children}
    </Motion.section>
  );
}
