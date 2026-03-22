import React from "react";
import { motion as Motion } from "framer-motion";
import { FaLaptopCode, FaUnity, FaAward } from "react-icons/fa";

export default function Certifications() {
  const certifications = [
    {
      role: "Developer Intern",
      title: "Meta Craftlab Private Limited (July 2024)",
      desc: "Worked as a Full Stack Developer, gaining experience in frontend & backend development.",
      icon: <FaLaptopCode />,
      color: "#4da3ff",
    },
    {
      role: "Game Dev",
      title: "Unity Essentials Badge",
      desc: "Completed Unity Essentials Pathway covering basics of Unity, scripting, and game mechanics.",
      icon: <FaUnity />,
      color: "#00c853",
    },
    {
      role: "Web Dev",
      title: "Full Stack Web Development – Credit Transfer Program",
      desc: "Certification earned in June 2025, mastering modern frameworks and scalable app design.",
      icon: <FaAward />,
      color: "#ff9800",
    },
  ];

  return (
    <section id="certifications" className="certifications-section">
      {/* Title */}
      <Motion.h2
        className="certifications-title"
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        🏆 Certifications & Achievements
      </Motion.h2>

      {/* Timeline */}
      <div className="certifications-timeline">
        {certifications.map((cert, index) => (
          <Motion.div
            key={index}
            className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
            initial={{
              opacity: 0,
              x: index % 2 === 0 ? -40 : 40,
            }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -4 }}
          >
            <div
              className="timeline-icon"
              style={{ backgroundColor: cert.color }}
            >
              {cert.icon}
            </div>
            <div className="timeline-content">
              <p className="timeline-role">{cert.role}</p>
              <h3 className="timeline-title">{cert.title}</h3>
              <p className="timeline-desc">{cert.desc}</p>
            </div>
          </Motion.div>
        ))}
      </div>
    </section>
  );
}
