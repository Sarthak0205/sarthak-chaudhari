import React, { useState } from "react";
import { motion as Motion } from "framer-motion";

export default function Contact() {
  const [email, setEmail] = useState("");

  const handleSend = () => {
    // lightweight validation without extra libraries
    const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!ok) {
      // replace with your toast system if you have one
      alert("Please enter a valid email address.");
      return;
    }
    alert("Thanks! I’ll get back to you soon.");
    setEmail("");
  };

  return (
    <>
      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="contact-container">
          {/* Left Vector Illustration */}
          <Motion.div
            className="contact-image-wrapper"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35 }}
          >
            <img
              src="/assets/developer.svg"
              alt="Developer Illustration"
              className="contact-illustration"
            />
          </Motion.div>

          {/* Right Contact Content */}
          <div className="contact-content">
            <Motion.h2
              className="contact-title"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35 }}
            >
              Let’s Connect! 👋
            </Motion.h2>

            <Motion.p
              className="contact-description"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: 0.05 }}
            >
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision. Let’s connect and explore
              how we can work together!
            </Motion.p>

            {/* Email Input */}
            <Motion.div
              className="contact-input-wrapper"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <input
                type="email"
                placeholder="Email"
                className="contact-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Motion.button
                className="contact-btn"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleSend}
                transition={{ type: "spring", stiffness: 280, damping: 22 }}
              >
                Send
              </Motion.button>
            </Motion.div>

            {/* Resume Options */}
            <div className="resume-options">
              <Motion.a
                href="Sarthak_resume.pdf"
                download
                className="resume-btn download"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                📄 Download Resume
              </Motion.a>
              <Motion.a
                href="/resume"
                className="resume-btn view"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                🔎 View Resume
              </Motion.a>
            </div>

            {/* Quote */}
            <Motion.p
              className="contact-quote"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.15 }}
            >
              "Continuous learning, endless possibilities — excited for what’s
              ahead! Let’s connect and grow together."
            </Motion.p>
          </div>
        </div>
      </section>

    </>
  );
}
