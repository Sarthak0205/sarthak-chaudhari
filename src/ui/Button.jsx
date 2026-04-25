// src/ui/Button.jsx
import { motion } from "framer-motion";
import { getButtonStyles } from "./theme";

export default function Button({
  children,
  onClick,
  href,
  variant = "primary",
  style,
}) {
  const Comp = href ? motion.a : motion.button;

  return (
    <Comp
      href={href}
      onClick={onClick}
      style={{ ...getButtonStyles(variant), ...style }}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.985 }}
    >
      {children}
    </Comp>
  );
}
