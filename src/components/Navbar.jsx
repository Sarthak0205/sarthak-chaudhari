import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion as Motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

import { colors, getButtonStyles, layout, radius } from "../ui/theme";

const NAV_HEIGHT = 80;
const navItems = ["about", "projects", "experience", "skills", "contact"];

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [active, setActive] = useState("about");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    const y = el.getBoundingClientRect().top + window.scrollY - NAV_HEIGHT + 2;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  const handleNavClick = (item) => {
    setActive(item);
    setMobileOpen(false);

    if (item === "projects") {
      navigate("/projects");
      return;
    }

    if (item === "contact") {
      navigate("/contact");
      return;
    }

    if (item === "experience") {
      navigate("/experience");
      return;
    }

    if (item === "skills") {
      navigate("/skills");
      return;
    }

    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: item } });
    } else {
      scrollToSection(item);
    }
  };

  useEffect(() => {
    const syncViewport = () => {
      setIsMobile(window.innerWidth < 900);
    };

    syncViewport();
    window.addEventListener("resize", syncViewport);
    return () => window.removeEventListener("resize", syncViewport);
  }, []);

  useEffect(() => {
    if (location.state?.scrollTo) {
      const section = location.state.scrollTo;

      requestAnimationFrame(() => {
        window.setTimeout(() => scrollToSection(section), 50);
      });
    }
  }, [location]);

  useEffect(() => {
    if (location.pathname !== "/") return;

    const handleScroll = () => {
      const sections = ["about", "contact"];

      for (const sec of sections) {
        const el = document.getElementById(sec);
        if (!el) continue;

        const rect = el.getBoundingClientRect();
        if (rect.top <= NAV_HEIGHT + 20 && rect.bottom >= NAV_HEIGHT + 20) {
          setActive(sec);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  useEffect(() => {
    if (location.pathname === "/projects") {
      setActive("projects");
    } else if (location.pathname === "/experience") {
      setActive("experience");
    } else if (location.pathname === "/contact") {
      setActive("contact");
    } else if (location.pathname === "/resume") {
      setActive("resume");
    } else if (location.pathname === "/skills") {
      setActive("skills");
    } else if (location.pathname === "/") {
      setActive("about");
    }
  }, [location.pathname]);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: `${NAV_HEIGHT}px`,
        zIndex: 1000,
        background: "rgba(5,5,5,0.72)",
        backdropFilter: "blur(18px)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <Motion.div
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.45 }}
        style={{
          maxWidth: layout.contentWidth,
          margin: "0 auto",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 20px",
          gap: "16px",
        }}
      >
        <button
          type="button"
          onClick={() => navigate("/")}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            background: "transparent",
            border: "none",
            color: "#fff",
            cursor: "pointer",
            padding: 0,
          }}
        >
          <img
            src="/logo.png"
            alt="Sarthak Chaudhari logo"
            style={{
              width: "42px",
              height: "42px",
              objectFit: "contain",
              filter: "drop-shadow(0 0 6px rgba(255,42,42,0.18))",
            }}
          />
          {!isMobile && (
            <span style={{ fontWeight: 700, letterSpacing: "0.02em" }}>
              Sarthak Chaudhari
            </span>
          )}
        </button>

        {!isMobile && (
          <div
            style={{
              display: "flex",
              gap: "8px",
              padding: "6px",
              borderRadius: radius.md,
              background: "rgba(255,255,255,0.03)",
            }}
          >
            {navItems.map((item) => {
              const isActive = active === item;

              return (
                <button
                  key={item}
                  type="button"
                  onClick={() => handleNavClick(item)}
                  style={{
                    cursor: "pointer",
                    minHeight: "40px",
                    padding: "0.55rem 1rem",
                    borderRadius: radius.md,
                    border: "none",
                    background: isActive ? "rgba(255,42,42,0.12)" : "transparent",
                    color: isActive ? colors.primary : colors.gray,
                    fontWeight: isActive ? 600 : 500,
                    transition: "all 0.22s ease",
                  }}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              );
            })}
          </div>
        )}

        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          {!isMobile && (
            <button
              type="button"
              onClick={() => navigate("/resume")}
              style={{
                ...getButtonStyles("secondary"),
                minHeight: "44px",
              }}
            >
              Resume
            </button>
          )}

          {isMobile && (
            <button
              type="button"
              onClick={() => setMobileOpen((value) => !value)}
              style={{
                width: "42px",
                height: "42px",
                borderRadius: radius.md,
                border: "1px solid rgba(255,255,255,0.08)",
                background: "rgba(255,255,255,0.03)",
                color: "#fff",
                display: "grid",
                placeItems: "center",
                cursor: "pointer",
              }}
              aria-label="Toggle navigation menu"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          )}
        </div>
      </Motion.div>

      <AnimatePresence>
        {isMobile && mobileOpen && (
          <Motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            style={{
              margin: "0 16px",
              padding: "12px",
              borderRadius: radius.lg,
              background: "rgba(10,10,10,0.96)",
              border: "1px solid rgba(255,255,255,0.08)",
              boxShadow: "0 18px 42px rgba(0,0,0,0.3)",
            }}
          >
            <div style={{ display: "grid", gap: "8px" }}>
              {navItems.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => handleNavClick(item)}
                  style={{
                    textAlign: "left",
                    minHeight: "44px",
                    padding: "0.75rem 0.95rem",
                    borderRadius: radius.md,
                    border: "none",
                    background: active === item ? "rgba(255,42,42,0.14)" : "transparent",
                    color: active === item ? "#fff" : "#d7d7d7",
                    fontWeight: 600,
                    cursor: "pointer",
                  }}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              ))}

              <button
                type="button"
                onClick={() => {
                  setMobileOpen(false);
                  navigate("/resume");
                }}
                style={{
                  ...getButtonStyles("secondary"),
                  justifyContent: "flex-start",
                }}
              >
                Resume
              </button>
            </div>
          </Motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
