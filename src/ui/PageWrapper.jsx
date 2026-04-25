import { motion as Motion } from "framer-motion";

export default function PageWrapper({ children }) {
    return (
        <Motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
        >
            {children}
        </Motion.div>
    );
}