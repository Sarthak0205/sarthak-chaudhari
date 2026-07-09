import React, { useContext } from "react";
import { motion as Motion } from "framer-motion";
import { IntroContext } from "../context/IntroContext";

export default function Reveal({ children, delay = 0 }) {
  const { introState } = useContext(IntroContext);
  const startReveal =
    introState === "transition" ||
    introState === "completed" ||
    introState === "skipped";

  return (
    <Motion.div
      initial={{ opacity: 0, y: 12, scale: 0.98 }}
      animate={startReveal ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 12, scale: 0.98 }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </Motion.div>
  );
}