import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Resume from "./components/Resume";
import Projects from "./components/Projects";

function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      {/* No Projects here anymore – it's its own page */}
      <Skills />
      <Certifications />
      <Contact />
      <Footer />
    </>
  );
}

function ProjectsPage() {
  return (
    <>
      <Header />
      <Projects />
      <Footer />
    </>
  );
}

function ResumePage() {
  return (
    <>
      <Header />
      <Resume />
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/resume" element={<ResumePage />} />
      </Routes>
    </Router>
  );
}
