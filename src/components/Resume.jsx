
import { useNavigate } from "react-router-dom";
import { motion as Motion } from "framer-motion";

export default function Resume() {
  const navigate = useNavigate();


  return (
    <Motion.section
      className="resume-section"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Small toolbar with theme toggle (top-right)
      <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "0.5rem" }}>
        <Motion.button
          className="theme-toggle"
          onClick={toggleTheme}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.98 }}
          aria-label="Toggle Dark/Light Mode"
        >
          {isLight ? "☀️" : "🌙"}
        </Motion.button>
      </div> */}

      <Motion.h2
        className="resume-title"
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.35 }}
      >
        📄 My Resume
      </Motion.h2>

      {/* Resume Viewer */}
      <Motion.div
        className="resume-viewer"
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        <embed
          src="assets/Sarthak_Resume.pdf#zoom=page-fit"
          type="application/pdf"
        />
      </Motion.div>

      {/* Actions */}
      <Motion.div
        className="resume-actions"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.05 }}
      >
        <Motion.a
          href="/assets/Sarthak_Resume.pdf"
          download="Sarthak_Resume.pdf"
          className="resume-btn"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 280, damping: 22 }}
        >
          ⬇️ Download Resume
        </Motion.a>

        <Motion.button
          onClick={() => navigate(-1)}
          className="resume-btn back"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 280, damping: 22 }}
        >
          🔙 Back
        </Motion.button>
      </Motion.div>
    </Motion.section>
  );
}
