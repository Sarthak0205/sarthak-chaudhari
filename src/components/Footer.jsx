import React from "react";
import { motion as Motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <Motion.footer
      className="footer"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      {/* Top 3-column layout */}
      <div className="footer-container">
        {/* Left - Logo and tagline */}
        <div className="footer-col">
          <div className="footer-logo">
            <img src="/assets/sarthak.webp" alt="Sarthak Logo" />
            <span>SarthakCodes</span>
          </div>
          <p className="footer-text">
            "Turning coffee into code & ideas into reality."
          </p>

          {/* Social icons */}
          <div className="footer-icons">
            <a
              href="https://github.com/Sarthak0205"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub size={22} />
            </a>
            <a
              href="https://www.linkedin.com/in/sarthak-chaudhari/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={22} />
            </a>
            <a
              href="mailto:csarthak013@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Email"
            >
              <FaEnvelope size={22} />
            </a>
          </div>
        </div>

        {/* Middle - Quick Navigation */}
        <div className="footer-col">
          <h4>Quick Navigation</h4>
          <ul>
            <li>
              <a href="#about">About Me</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#skills">Skills & Tools</a>
            </li>
            <li>
              <a href="#resume">Resume</a>
            </li>
          </ul>
        </div>

        {/* Right - Contact Info */}
        <div className="footer-col">
          <h4>Contact Info</h4>
          <p>
            Email:{" "}
            <a href="mailto:csarthak013@gmail.com">csarthak013@gmail.com</a>
          </p>
          <p>Location: India, Maharashtra</p>
        </div>
      </div>

      {/* Bottom copyright line */}
      <div className="footer-bottom">
        © {new Date().getFullYear()} SarthakCodes. All rights reserved. | Built
        with ❤️ & React
      </div>
    </Motion.footer>
  );
}
