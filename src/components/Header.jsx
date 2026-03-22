import React, { useEffect, useState } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isLight, setIsLight] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const stored = localStorage.getItem("site-theme");
    if (stored === "light") {
      document.body.classList.add("light-mode");
      setIsLight(true);
    } else if (stored === "dark") {
      document.body.classList.remove("light-mode");
      setIsLight(false);
    } else {
      setIsLight(document.body.classList.contains("light-mode"));
    }
  }, []);

  const toggleTheme = () => {
    const willBeLight = !document.body.classList.contains("light-mode");
    document.body.classList.toggle("light-mode", willBeLight);
    localStorage.setItem("site-theme", willBeLight ? "light" : "dark");
    setIsLight(willBeLight);
  };

  // Projects is now its own page
  const navItems = [
    { href: "#home", label: "Home" },
    { href: "/projects", label: "Projects" }, // 👉 separate page
    { href: "#skills", label: "Skills" },
    { href: "#certifications", label: "Certifications" },
    { href: "#contact", label: "Contact" },
    { href: "/resume", label: "Resume" }, // route
  ];

  // Helper to smooth-scroll to an element id if it exists
  const scrollToId = (hash) => {
    const id = hash.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // Centralized click handler for nav
  const handleNavClick = (e, item) => {
    const { href } = item;

    // External link (none right now) → let default behavior happen
    if (!href.startsWith("#") && !href.startsWith("/")) return;

    e.preventDefault();

    // ✅ Route pages: /resume, /projects
    if (href === "/resume" || href === "/projects") {
      if (location.pathname !== href) {
        navigate(href);
      }
      setMobileOpen(false);
      return;
    }

    // ✅ Home → always scroll to top on the home page
    if (href === "#home") {
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 0);
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      setMobileOpen(false);
      return;
    }

    // ✅ In-page anchors on Home: #skills, #certifications, #contact
    if (href.startsWith("#")) {
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => scrollToId(href), 80);
      } else {
        scrollToId(href);
      }
      setMobileOpen(false);
      return;
    }
  };

  return (
    <header className="header">
      <div className="header-content">
        {/* Logo → go Home & scroll top */}
        <a
          href="#home"
          className="logo"
          aria-label="SarthakCodes home"
          onClick={(e) => handleNavClick(e, { href: "#home", label: "Home" })}
        >
          <img src="/assets/sarthak.webp" alt="Sarthak" />
          <span className="brand-text">SarthakCodes</span>
        </a>

        {/* Desktop nav */}
        <nav className="nav-links" aria-label="Main navigation">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="group relative px-1"
              onClick={(e) => handleNavClick(e, item)}
            >
              <span>{item.label}</span>
              <Motion.span
                layoutId={`underline-${item.label}`}
                className="absolute left-0 -bottom-1 h-[2px] w-full bg-current origin-left scale-x-0 group-hover:scale-x-100"
                transition={{ duration: 0.2 }}
              />
            </a>
          ))}
        </nav>

        {/* Controls */}
        <div className="header-controls">
          {/* Desktop Contact Button */}
          <Motion.a
            href="#contact"
            className="contact-Button desktop-only"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            onClick={(e) => handleNavClick(e, { href: "#contact", label: "Contact" })}
          >
            Contact Me
          </Motion.a>

          {/* Mobile Contact Icon */}
          <a
            href="#contact"
            className="contact-Icon mobile-only"
            aria-label="Call or Contact"
            onClick={(e) => handleNavClick(e, { href: "#contact", label: "Contact" })}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="icon"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.66l1.21 3.23a1 1 0 01-.27 1.09l-2.2 2.2a16 16 0 006.59 6.59l2.2-2.2a1 1 0 011.09-.27l3.23 1.21a1 1 0 01.66.94V19a2 2 0 01-2 2h-1C9.61 21 3 14.39 3 6V5z"
              />
            </svg>
          </a>

          {/* Hamburger Menu Button */}
          <button
            className="mobile-menu-button"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="icon"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="theme-toggle"
            aria-label="Toggle Dark/Light Mode"
          >
            <AnimatePresence mode="wait" initial={false}>
              <Motion.span
                key={isLight ? "sun" : "moon"}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.25 }}
                role="img"
                aria-label={isLight ? "Light mode" : "Dark mode"}
              >
                {isLight ? "☀️" : "🌙"}
              </Motion.span>
            </AnimatePresence>
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <Motion.div
              id="mobile-menu"
              className="mobile-menu"
              initial={{ height: 0, opacity: 0, y: -6 }}
              animate={{ height: "auto", opacity: 1, y: 0 }}
              exit={{ height: 0, opacity: 0, y: -6 }}
              transition={{ duration: 0.25 }}
            >
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item)}
                >
                  {item.label}
                </a>
              ))}
            </Motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
