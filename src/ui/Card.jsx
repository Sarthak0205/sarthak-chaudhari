// src/ui/Card.jsx
import { motion } from "framer-motion";
import { radius, colors } from "./theme";

export default function Card({ children }) {
    return (
        <motion.div
            whileHover={{ y: -6 }}
            style={{
                borderRadius: radius.lg,
                border: `1px solid ${colors.dark}`,
                background:
                    "linear-gradient(135deg, rgba(255,255,255,0.03), rgba(255,255,255,0.02))",
                boxShadow: "0 18px 35px rgba(0,0,0,0.55)",
                overflow: "hidden",
            }}
        >
            {children}
        </motion.div>
    );
}
