// src/ui/Button.jsx
import { motion } from "framer-motion";
import { colors, radius } from "./theme";

export default function Button({
    children,
    onClick,
    href,
    variant = "primary",
}) {
    const base = {
        padding: "1.1rem 2.2rem",
        borderRadius: radius.md,
        fontWeight: 600,
        fontSize: "1.05rem",
        border: "none",
        cursor: "pointer",
        textDecoration: "none",
        display: "inline-block",
    };

    const variants = {
        primary: {
            backgroundColor: colors.accent,
            color: "#fff",
        },
        secondary: {
            backgroundColor: colors.primary,
            color: "#fff",
        },
    };

    const Comp = href ? motion.a : motion.button;

    return (
        <Comp
            href={href}
            onClick={onClick}
            style={{ ...base, ...variants[variant] }}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.98 }}
        >
            {children}
        </Comp>
    );
}
