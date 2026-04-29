import { motion as Motion } from "framer-motion";
import { ExternalLink, FileDown } from "lucide-react";
import {
  getButtonStyles,
  getSurfaceStyles,
  layout,
  sectionHeaderStyles,
  sectionStyles,
} from "../ui/theme";

const resumeSrc = "/assets/S_Resume.pdf";

export default function Resume() {
  return (
    <Motion.section
      style={{
        ...sectionStyles.page,
        background:
          "radial-gradient(circle at 20% 20%, rgba(255,42,42,0.06), transparent 40%), #050505",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.35 }}
    >
      <div style={{ maxWidth: layout.narrowWidth, margin: "0 auto" }}>
        <div style={{ ...sectionHeaderStyles.wrap, marginBottom: "2.1rem" }}>
          <p
            style={sectionHeaderStyles.eyebrow}
          >
            Resume
          </p>
          <h2 style={{ ...sectionHeaderStyles.title, fontSize: "clamp(2.2rem, 5vw, 3rem)" }}>
            My Resume
          </h2>
          <p style={sectionHeaderStyles.body}>
            View or download my resume.
          </p>
        </div>

        <Motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08 }}
          style={{
            ...getSurfaceStyles(),
            overflow: "hidden",
          }}
        >
          <iframe
            src={`${resumeSrc}#toolbar=0&navpanes=0&scrollbar=1`}
            title="Sarthak Chaudhari resume"
            style={{
              width: "100%",
              height: "78vh",
              border: "none",
              background: "#111",
            }}
          />
        </Motion.div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "14px",
            flexWrap: "wrap",
            marginTop: "24px",
          }}
        >
          <a href={resumeSrc} target="_blank" rel="noreferrer" style={secondaryAction}>
            <ExternalLink size={18} />
            Open PDF
          </a>
          <a href={resumeSrc} download="Sarthak_Resume.pdf" style={primaryAction}>
            <FileDown size={18} />
            Download
          </a>
        </div>
      </div>
    </Motion.section>
  );
}

const primaryAction = {
  ...getButtonStyles("primary"),
};

const secondaryAction = {
  ...getButtonStyles("secondary"),
};
