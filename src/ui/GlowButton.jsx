import { motion } from "framer-motion";
import { colors } from "./theme";

export default function GlowButton({
    children,
    active = false,
    onClick,
    size = "md",
}) {
    const sizes = {
        md: "0.55rem 1.35rem",
        sm: "0.4rem 1.05rem",
    };

    return (
        <motion.button
            onClick={onClick}
            style={{
                padding: sizes[size],
                borderRadius: "999px",
                border: active
                    ? `1px solid ${colors.accent}`
                    : "1px solid rgba(255,255,255,0.15)",
                backgroundColor: active ? colors.dark : "transparent",
                color: "#fff",
                fontWeight: 600,
                cursor: "pointer",
                outline: "none",
            }}
            whileHover={{
                y: -1,
                boxShadow: "0 4px 14px rgba(0,0,0,0.35)",
            }}
            animate={{
                boxShadow: active
                    ? "0 0 0 2px rgba(0,200,83,0.35)"
                    : "0 0 0 0 rgba(0,0,0,0)",
            }}
            transition={{ duration: 0.2, ease: "easeOut" }}
        >
            {children}
        </motion.button>
    );
}
