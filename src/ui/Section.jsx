// src/ui/Section.jsx
import { motion } from "framer-motion";
import { colors, sectionStyles } from "./theme";

export default function Section({ children, id, style }) {
  return (
    <motion.section
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
    </motion.section>
  );
}
